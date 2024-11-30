package main

import (
	"log"
	"net/http"

	"html/template"
)

func main() {
	// Load templates
	templates, err := template.ParseFiles("./templates/index.html")
	if err != nil {
		log.Fatalf("Error loading templates: %v", err)
	}

	// Serve static files
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	// Home route
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		data := map[string]interface{}{
			"Title": "Welcome to Miviro",
			// Add more data as needed
		}

		// Render the index.html template
		if err := templates.ExecuteTemplate(w, "index.html", data); err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
		}
	})

	// Example dynamic route for HTMX
	http.HandleFunc("/fetch-data", func(w http.ResponseWriter, r *http.Request) {
		// Example dynamic content
		w.Header().Set("Content-Type", "text/html")
		w.Write([]byte("<p class='text-green-500'>Data fetched successfully!</p>"))
	})

	// Start the server
	log.Println("Server started at http://localhost:8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatalf("Server failed to start: %v", err)
	}
}
