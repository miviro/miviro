package main

import (
	"fmt"
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
	ArticleContent     string
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
	ArticleContent      string
	IsHomepage          bool
	ArticleTemplateData map[string]ArticleTemplateData
}

const mdDir = "./static/md"

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
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	loadArticles()
	watcher, err := fsnotify.NewWatcher()
	if err != nil {
		log.Fatalf("Error creating file watcher: %v", err)
	}
	defer watcher.Close()

	go func() {
		for {
			select {
			case event, ok := <-watcher.Events:
				if !ok {
					return
				}
				if event.Op&fsnotify.Write == fsnotify.Write || event.Op&fsnotify.Create == fsnotify.Create || event.Op&fsnotify.Remove == fsnotify.Remove {
					log.Println("Detected change in markdown files, reloading articles...")
					loadArticles()
				}
			case err, ok := <-watcher.Errors:
				if !ok {
					return
				}
				log.Println("Error watching files:", err)
			}
		}
	}()

	err = watcher.Add(mdDir)
	if err != nil {
		log.Fatalf("Error adding watcher to directory: %v", err)
	}

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
			data.ArticleContent = article.ArticleContent
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
		// Extract the article name from the URL path
		articleName := r.URL.Path[len("/articles/"):]

		data, exists := articles[articleName]
		if !exists {
			data.ArticleTitle = "404 Not Found"
			data.ArticleContent = "The page you are looking for does not exist."
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

func loadArticles() {
	mdFiles, err := filepath.Glob("./static/md/*.md")
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
		articleContent := string(htmlContent)

		article := ArticleTemplateData{
			ArticleName:        strings.TrimSuffix(filepath.Base(file), ".md"),
			ArticleTitle:       title,
			ArticleDate:        info.ModTime().Format("2006-01-02"), // Use the file's modification time as the date
			ArticleContent:     articleContent,
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
