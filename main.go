package main

import (
	"log"
	"net/http"
	"path/filepath"

	"html/template"
)

// Article represents a single article
type Article struct {
	Title string
	Link  string
}

// PageData represents the data for the page
type PageData struct {
	PageTitle    string
	SidebarTitle string
	TextTitle    string
	TextContent  string
	Articles     []Article
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
		data := PageData{
			PageTitle:    "miviro",
			SidebarTitle: "Articles",
			TextTitle:    "Homepage",
			TextContent:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
			Articles: []Article{
				{Title: "Article 1", Link: "/static/md/test.md"},
				{Title: "Article 2", Link: "/article2"},
				{Title: "Article 3", Link: "/article3"},
			},
		}

		// Render the index.html template
		if err := templates.ExecuteTemplate(w, "index.html", data); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	// Start the server
	log.Println("Server started at http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
