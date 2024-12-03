package main

import (
	"log"
	"net/http"
	"path/filepath"

	"html/template"
)

type ArticleTemplateData struct {
	ArticleName        string
	ArticleTitle       string
	ArticleDate        string
	ArticleContent     string
	ArticleReadingTime string
}

type IndexTemplateData struct {
	PageTitle            string
	SidebarTitle         string
	TextTitle            string
	TextContent          string
	CurrentAddress       string
	ArticleTemplateDatas []ArticleTemplateData
}

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

	// Home route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		// Dynamic data
		var currentAddress string
		if r.URL.Path == "/" {
			currentAddress = ""
		} else {
			currentAddress = r.URL.Path
		}

		data := IndexTemplateData{
			PageTitle:      "miviro",
			SidebarTitle:   "ArticleTemplateDatas",
			TextTitle:      "Homepage",
			TextContent:    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			CurrentAddress: currentAddress,
			ArticleTemplateDatas: []ArticleTemplateData{
				{
					ArticleName:        "go-introduction",
					ArticleTitle:       "Introduction to Go",
					ArticleDate:        "2023-10-01",
					ArticleContent:     "Go is an open-source programming language created by Google.",
					ArticleReadingTime: "5 min",
				},
				{
					ArticleName:        "go-concurrency",
					ArticleTitle:       "Concurrency in Go",
					ArticleDate:        "2023-10-02",
					ArticleContent:     "Go provides concurrency primitives as part of the core language.",
					ArticleReadingTime: "10 min",
				},
				{
					ArticleName:        "go-web",
					ArticleTitle:       "Building Web Applications with Go",
					ArticleDate:        "2023-10-03",
					ArticleContent:     "Go is well-suited for building web applications due to its performance and simplicity.",
					ArticleReadingTime: "8 min",
				},
			},
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

		var data ArticleTemplateData
		if articleName == "" {
			data = ArticleTemplateData{
				ArticleName:        "Home",
				ArticleTitle:       "miviro.es",
				ArticleDate:        "2023-10-01",
				ArticleContent:     "Welcome to miviro.es",
				ArticleReadingTime: "5 min",
			}
		} else {
			// TODO: fetch .md article file and take values from it
			// For now, we'll use a static example
			data = ArticleTemplateData{
				ArticleName:        articleName,
				ArticleTitle:       articleName,
				ArticleDate:        "2023-10-01",
				ArticleContent:     "Go is an open-source programming language created by Google.",
				ArticleReadingTime: "5 min",
			}
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
