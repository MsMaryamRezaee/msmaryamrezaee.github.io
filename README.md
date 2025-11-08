# MR Portfolio Website

<a href="https://msmaryamrezaee.github.io">
  <img src="https://raw.githubusercontent.com/MsMaryamRezaee/.github/main/profile/banner.gif" alt="MR Banner">
</a>

This repository contains the source code for my personal portfolio and academic website, built with Jekyll and hosted on GitHub Pages. The design is custom-made by myself, taking an initial basic theme and completely redesigning it to define new sections, styles, and animation, with additional reorganization for maintainability and scalability.

## 🤖 Tech Stack

* **Jekyll:** Static site generator
* **Sass (SCSS):** CSS pre-processor for modular styles
* **Gulp.js:** Task runner for compiling assets (Sass, JS)
* **particles.js:** Background animations
* **GitHub Pages:** Hosting

---

## 📂 Website Structure

This repository uses a `src` directory for all pre-compiled assets (Sass, JS) and follows a modular Jekyll structure.

```
msmaryamrezaee.github.io/
│
├── .gitignore                        # Ignores compiled assets and node_modules
├── LICENSE                           # MIT License
├── README.md                         # This file
├── _config.yml                       # Main Jekyll configuration
├── gulpfile.js                       # Gulp task definitions
├── package.json                      # Node.js dependencies
│
├── index.html                        # The homepage
├── about.md                          # Placeholder for About page
├── research.md                       # Placeholder for Research page
├── projects.md                       # Placeholder for Projects page
├── talks.md                          # Placeholder for Talks page
│
├── favicon/                          # Site favicons
│
├── _layouts/
│   ├── default.html                  # Base template (head, body, footer)
│   ├── home.html                     # Homepage layout (includes hero header)
│   └── page.html                     # Standard layout for all other pages
│
├── _includes/
│   ├── head.html                     # HTML <head> contents
│   ├── google-analytics.html         # Analytics
│   ├── logo-animation.html           # Animation of MR logo
│   ├── footer.html                   # Site footer
│   ├── hero-header.html              # Homepage hero banner (with particles)
│   ├── nav-header.html               # Standard navigation bar for subpages
│   └── ...                           # Homepage section components (intro, highlights, skills)
│
├── src/
│   ├── js/
│   │   └── app.js                    # Custom JavaScript (animations, particles)
│   └── styles/
│       ├── main.scss                 # Main SASS file, imports all partials
│       ├── lib/                      # 3rd-party libraries (normalize, etc.)
│       ├── _base/                    # Global styles (reset, typography)
│       ├── _config/                  # SASS variables
│       ├── _components/              # Reusable components (buttons, footer, hero-header)
│       ├── _layout/                  # Layout helpers (containers, nav-header, page structure)
│       ├── _pages/                   # Page-specific styles (home, about, etc.)
│       └── _utils/                   # Animations and mixins
│
└── assets/
    ├── files/                        # Static files (CV, papers)
    ├── js/                           # Compiled JS (main.js) & vendor JS
    ├── css/                          # Compiled CSS (main.css)
    └── (fonts/, img/)                # Compiled by Gulp from src/
```

---

## 💻 Running Locally

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/MsMaryamRezaee/msmaryamrezaee.github.io.git
    cd msmaryamrezaee.github.io
    ```

2.  **Install Dependencies:**
    You will need [Node.js](https://nodejs.org/) (which includes `npm`) and [Ruby](https://www.ruby-lang.org/en/downloads/) (with [Bundler](https://bundler.io/)).

    ```bash
    # Install Ruby gems
    bundle install
    
    # Install Node.js packages
    npm install
    ```

3.  **Run the Server:**
    This project uses Gulp to compile assets and run the development server.

    ```bash
    gulp
    ```
    Gulp will compile all assets, start a local server at `http://localhost:3000`, and watch for any file changes to automatically rebuild and reload your browser.

---

## ✨ Credits

* **Design:** [Maryam Rezaee](https://msmaryamrezaee.github.io)
* **Inspiration:** This site's header was originally taken from the [Particle Theme](https://github.com/nrandecker/particle) by Nathan Randecker.
* **Particles:** Uses [particles.js](https://github.com/VincentGarreau/particles.js/) by Vincent Garreau in various sections.

## 👤 Author

* **Maryam Rezaee**
* **GitHub:** [@msmrexe](https://github.com/msmrexe)

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for full details.
