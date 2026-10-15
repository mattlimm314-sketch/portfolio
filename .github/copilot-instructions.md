# Copilot Instructions for this Portfolio Repository

## Project overview

This repository is a lightweight static portfolio/resume website built with plain HTML, CSS, and JavaScript. There is no framework, bundler, or package manager setup in the repo.

The main pages are:
- `index.html`: the landing page with profile content, project cards, and certificate slides
- `resume.html`: the resume page with education, experience, skills, and language sections
- `css/`: shared and page-specific styles
- `js/slideshow.js`: the DOM logic that powers the project and certificate carousels
- `assets/`: image assets used by both pages

## Build, test, and lint commands

No build, test, or lint tooling is configured for this repo.

Validating the site locally is the primary workflow:

```bash
cd "C:\Users\MJ_LIM\Downloads\Portfolio"
python -m http.server 8000
```

Then open:
- `http://localhost:8000/index.html`
- `http://localhost:8000/resume.html`

If you need a quick single-page verification while editing, open the affected page in the browser and confirm:
- the page loads without console errors
- the navigation links work
- the project/certificate slideshow controls still move between slides correctly

There is no automated unit-test command to run in this repository.

## High-level architecture

The site is organized around static content pages rather than component-based application code.

- HTML files define the page structure and content, including the navigation and section layout.
- CSS files provide the visual system:
  - `css/component.css` contains shared styling used across the site
  - `css/home.css` contains the homepage-specific styling
  - `css/resume.css` contains resume-specific styling
- `js/slideshow.js` is a small script that manages slide state for the project and certificate galleries.
- The UX is intentionally simple: content pages are static, and interactivity is limited to the image slideshow behavior.

The repository is content-first: edits usually involve updating HTML text content, adding assets, or adjusting CSS layout instead of introducing application state or build tooling.

## Key conventions

- Keep page content in HTML and styling in CSS; avoid folding layout logic into inline style attributes when a shared CSS rule is appropriate.
- Reuse existing page structure and naming patterns. The slides on the home page follow a repeated card pattern (`.mySlides`, `.slide-card`, `.slide-description`).
- Preserve existing accessibility patterns already present in the markup: `aria-label`, `aria-current`, descriptive `alt` text, and button labels.
- Keep navigation and shared visual elements consistent with the existing site design. The top navbar and divider styling are reused across pages.
- Use relative asset paths from the root of the site; do not assume a bundler or a framework will rewrite or resolve paths.
- When adding a new project or certificate slide, match the existing structure used in `index.html` and keep the slideshow logic in `js/slideshow.js` aligned with the new elements.

## Working style for future changes

- Prefer surgical edits that match the repository's plain HTML/CSS/JS structure.
- Avoid introducing framework conventions, build steps, or package installation unless the task clearly requires them.
- Treat the site as a static portfolio and keep any changes visually consistent with the current design language.
