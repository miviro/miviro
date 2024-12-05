# Creación de miviro.es
[miviro.es](https://miviro.es) es mi proyecto de blog personal. Con la simplicidad como concepto base, consiste en un backend de [Go](https://go.dev), con frontend en [HTMX](https://htmx.org/) y [AlpineJS](https://alpinejs.dev/).

El backend sirve archivos [.md](https://en.wikipedia.org/wiki/Markdown) pasados a HTML con la ayuda de [Templ](https://github.com/a-h/templ) y [gomarkdown](https://github.com/gomarkdown/markdown). Detecta los cambios en los archivos usando [fsnotify](https://github.com/fsnotify/fsnotify).

El frontend utiliza las capacidades [hypertext](https://en.wikipedia.org/wiki/Hypertext) de HTMX para proporcionar una experiencia pulida. Las animaciones provienen de [tsParticles](https://particles.js.org/).
