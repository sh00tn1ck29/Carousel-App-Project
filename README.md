
# Carousel-App-Project

### [Live Demo]((https://sh00tn1ck29.github.io/Carousel-App-Project/)) 

An interactive, dynamic slider application that explores America's national parks by fetching real-time gallery data from the official National Park Service (NPS) REST API. The project features a custom-built carousels mechanism with smooth animations and complete asynchronous state management.

---

###  Key Features

* **Real-Time API Integration:** Dynamically streams live multimedia gallery data directly from the official US government NPS API endpoints.
* **Dynamic Content Injection:** On-the-fly HTML layout generation featuring safe asset parsing (automated image mapping with fallbacks and strict text escaping).
* **Custom Carousel Engine:** Seamlessly handles slider translation calculations, dynamic centering offsets (`translateX`), element highlighting via state modifier tracking, and interactive navigation controls.
* **Asynchronous UX Loading States:** Seamless integration of a centralized CSS-animated `Spinner` element that visually signals active REST communication states to eliminate layout shifting.
* **Modular Code Architecture:** Built entirely upon modern ES6 modules (`import / export`), strictly decoupling API infrastructure, UI template rendering, and main layout control logic into distinct, maintainable sub-files.

---

###  Tech Stack

* **Markup:** [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML) (Semantic structure, modern module linkage pipelines)
* **Styling:** [Sass (SCSS)](https://sass-lang.com/) (Modular file split architecture, centralized variables config, native nesting, CSS `@keyframes` transitions)
* **Methodology:** [BEM Class Naming](https://en.bem.info/methodology/) (Strict Block-Element-Modifier structure for scale-proof styling workflows)
* **Logic & Async:** [Modern JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (Native Fetch API, Promises lifecycle management, advanced Array mapping/joining, and scope-isolated modular architecture)

---

###  Modular JS Structure

The application's logic is isolated into clean, decoupled files ensuring high code readability and single-responsibility principles:

* `api.js`: Handles network requests, error capturing, and core response formatting for the NPS data source.
* `ui.js`: Pure function templates dedicated exclusively to processing array objects and generating functional, style-hydrated DOM string maps.
* `index.js`: The central orchestrator that hooks up event listener systems, tracks slider boundaries, and updates active layout modifier classes.

---

###  Author

* **Maksym Shavryhin** — *Main Developer* ([GitHub Profile](https://github.com/sh00tn1ck29))
