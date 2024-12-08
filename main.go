package main

import (
	"compress/gzip"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"strings"

	"html/template"

	"github.com/fsnotify/fsnotify"
	"github.com/gomarkdown/markdown"
)

type ArticleTemplateData struct {
	ArticleName        string
	ArticleTitle       string
	ArticleDate        string
	ArticleContent     template.HTML
	ArticleReadingTime string
	IsHomepage         bool
}

var articles map[string]ArticleTemplateData

type IndexTemplateData struct {
	PageTitle    string
	SidebarTitle string
	TextTitle    string
	TextContent  string

	// preload variables:
	ArticleTitle        string
	ArticleDate         string
	ArticleReadingTime  string
	ArticleContent      template.HTML
	IsHomepage          bool
	ArticleTemplateData map[string]ArticleTemplateData
}

type gzipResponseWriter struct {
	http.ResponseWriter
	io.Writer
}

func (w *gzipResponseWriter) Write(b []byte) (int, error) {
	return w.Writer.Write(b)
}

// compressStaticFiles compresses all static files
func compressStaticFiles() {
	err := filepath.Walk("./static", func(path string, info os.FileInfo, err error) error {
		if err != nil {
			return err
		}
		if !info.IsDir() {
			if shouldCompressFile(path, info.Size()) {
				compressFile(path)
			}
		}
		return nil
	})
	if err != nil {
		log.Printf("Error compressing static files: %v", err)
	}
}

// compressFile compresses a single file using gzip
func compressFile(path string) {
	file, err := os.Open(path)
	if err != nil {
		log.Printf("Error opening file %s: %v", path, err)
		return
	}
	defer file.Close()

	gzPath := path + ".gz"
	gzFile, err := os.Create(gzPath)
	if err != nil {
		log.Printf("Error creating gzip file %s: %v", gzPath, err)
		return
	}
	defer gzFile.Close()

	gzWriter := gzip.NewWriter(gzFile)
	defer gzWriter.Close()

	_, err = io.Copy(gzWriter, file)
	if err != nil {
		log.Printf("Error compressing file %s: %v", path, err)
	}
}

const mdDir = "./static/md/"

func main() {
	// Load templates
	files, err := filepath.Glob("./templates/*.html")
	if err != nil {
		log.Fatalf("Error finding templates: %v", err)
	}
	templates, err := template.ParseFiles(files...)
	if err != nil {
		log.Fatalf("Error loading templates: %v", err)
	}

	// Serve static files
	gzipHandler := func(h http.Handler) http.Handler {
		return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
			if !strings.Contains(r.Header.Get("Accept-Encoding"), "gzip") {
				h.ServeHTTP(w, r)
				return
			}
			w.Header().Set("Content-Encoding", "gzip")
			gz := gzip.NewWriter(w)
			defer gz.Close()
			h.ServeHTTP(&gzipResponseWriter{ResponseWriter: w, Writer: gz}, r)
		})
	}
	http.Handle("/static/", http.StripPrefix("/static/", gzipHandler(http.FileServer(http.Dir("./static")))))

	// Initial setup
	compressStaticFiles()
	loadArticles()

	// Create a single watcher
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatalf("Error creating file watcher: %v", err)
	}
	defer watcher.Close()

	// Add directories to watcher
	err = watcher.Add("./static")
	if err != nil {
		log.Fatalf("Error adding watcher to static directory: %v", err)
	}
	err = watcher.Add(mdDir)
	if err != nil {
		log.Fatalf("Error adding watcher to markdown directory: %v", err)
	}

	// Watch for changes
	go func() {
		for {
			select {
			case event, ok := <-watcher.Events:
				if !ok {
					return
				}
				// Handle markdown file changes
				if strings.HasPrefix("./"+event.Name, mdDir) {
					if event.Op&(fsnotify.Write|fsnotify.Create|fsnotify.Remove) != 0 {
						log.Println("Detected change in markdown files, reloading articles...")
						loadArticles()
					}
				}
				// Handle static file changes
				if strings.HasPrefix(event.Name, "./static") {
					if event.Op&fsnotify.Create == fsnotify.Create && !strings.HasSuffix(event.Name, ".gz") {
						// Get file info
						info, err := os.Stat(event.Name)
						if err != nil {
							log.Printf("Error getting file info %s: %v", event.Name, err)
							continue
						}
						// Only compress files larger than 1KB and depending on the file extension
						if shouldCompressFile(event.Name, info.Size()) {
							compressFile(event.Name)
						}
					}
				}
			case err, ok := <-watcher.Errors:
				if !ok {
					return
				}
				log.Println("Error watching files:", err)
			}
		}
	}()

	// Home route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Dynamic data
		var articleName string
		if r.URL.Path == "/" {
			articleName = "index"
		} else {
			articleName = r.URL.Path[1:] // strip /
		}

		data := IndexTemplateData{
			PageTitle:           "miviro",
			SidebarTitle:        "Articles",
			ArticleTemplateData: articles,
		}

		article, exists := articles[articleName]
		if exists {
			data.ArticleTitle = article.ArticleTitle
			data.ArticleDate = article.ArticleDate
			data.ArticleReadingTime = article.ArticleReadingTime
			data.ArticleContent = template.HTML(article.ArticleContent)
			data.IsHomepage = articleName == "index"
		} else {
			data.ArticleTitle = "404 Not Found"
			data.ArticleContent = "The page you are looking for does not exist."
			data.IsHomepage = true
		}

		// Render the index.html template
		if err := templates.ExecuteTemplate(w, "index.html", data); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	// ArticleTemplateData route
	http.HandleFunc("/articles/", func(w http.ResponseWriter, r *http.Request) {
		// Set content type to HTML
		w.Header().Set("Content-Type", "text/html")

		// Extract the article name from the URL path
		articleName := r.URL.Path[len("/articles/"):]

		data, exists := articles[articleName]
		if !exists {
			data.ArticleTitle = "404 Not Found"
			data.ArticleContent = "The page you are looking for does not exist."
		}

		// Check if the client accepts gzip encoding
		// TODO: preload the gzip
		if strings.Contains(r.Header.Get("Accept-Encoding"), "gzip") {
			w.Header().Set("Content-Encoding", "gzip")
			gz := gzip.NewWriter(w)
			defer gz.Close()
			w = &gzipResponseWriter{ResponseWriter: w, Writer: gz}
		}

		// Render the article.html template
		if err := templates.ExecuteTemplate(w, "article.html", data); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	// Start the server
	log.Println("Server started at http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}

func shouldCompressFile(s string, i int64) bool {
	println(s + " " + fmt.Sprint(i))
	if strings.HasSuffix(s, ".jpg") || strings.HasSuffix(s, ".jpeg") || strings.HasSuffix(s, ".png") || strings.HasSuffix(s, ".gif") ||
		strings.HasSuffix(s, ".webp") || strings.HasSuffix(s, ".pdf") || strings.HasSuffix(s, ".mp3") || strings.HasSuffix(s, ".ogg") ||
		strings.HasSuffix(s, ".flac") || strings.HasSuffix(s, ".mpg") || strings.HasSuffix(s, ".mp4") || strings.HasSuffix(s, ".avi") ||
		strings.HasSuffix(s, ".zip") || strings.HasSuffix(s, ".gz") || strings.HasSuffix(s, ".bz2") || strings.HasSuffix(s, ".rar") ||
		strings.HasSuffix(s, ".7z") || strings.HasSuffix(s, ".arj") || strings.HasSuffix(s, ".odf") || strings.HasSuffix(s, ".docx") ||
		strings.HasSuffix(s, ".jar") || i < 2*1024 {
		return false
	}
	return true
}

func loadArticles() {
	mdFiles, err := filepath.Glob(mdDir + "*.md")
	if err != nil {
		log.Fatalf("Error finding markdown files: %v", err)
	}

	articles = make(map[string]ArticleTemplateData)

	for _, file := range mdFiles {
		content, err := os.ReadFile(file)
		if err != nil {
			log.Printf("Error reading file %s: %v", file, err)
			continue
		}

		lines := strings.Split(string(content), "\n")
		var title string
		for _, line := range lines {
			if strings.HasPrefix(line, "# ") {
				title = strings.TrimPrefix(line, "# ")
				break
			}
		}

		info, err := os.Stat(file)
		if err != nil {
			log.Printf("Error getting file info %s: %v", file, err)
			continue
		}

		wordCount := len(strings.Fields(string(content)))
		readingTime := wordCount / 200
		if readingTime == 0 {
			readingTime = 1
		}

		// Remove the first line that starts with #
		for i, line := range lines {
			if strings.HasPrefix(line, "# ") {
				lines = append(lines[:i], lines[i+1:]...)
				break
			}
		}

		// Parse the markdown content to HTML
		htmlContent := markdown.ToHTML([]byte(strings.Join(lines, "\n")), nil, nil)

		article := ArticleTemplateData{
			ArticleName:        strings.TrimSuffix(filepath.Base(file), ".md"),
			ArticleTitle:       title,
			ArticleDate:        info.ModTime().Format("2006-01-02"), // Use the file's modification time as the date
			ArticleContent:     template.HTML(htmlContent),
			ArticleReadingTime: fmt.Sprintf("%d min", readingTime),
		}

		if article.ArticleName == "index" {
			article.IsHomepage = true
		} else {
			article.IsHomepage = false
		}

		articles[article.ArticleName] = article
	}
}
