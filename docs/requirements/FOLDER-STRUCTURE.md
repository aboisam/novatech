# 📁 Project Folder Structure — NovaTech Solutions Website

> **Assessment:** 3LOGY Bootcamp Quarter Assessment 2026  
> **Stack:** HTML, CSS, JavaScript (No frameworks)

---

## 1. Complete Folder Tree

```
NovaTech-Company-Website/
│
├── 📄 index.html                         ← Homepage (REQUIRED)
├── 📄 about.html                         ← About Us page (REQUIRED)
├── 📄 services.html                      ← Services page (REQUIRED)
├── 📄 portfolio.html                     ← Portfolio / Projects page (REQUIRED)
├── 📄 contact.html                       ← Contact page (REQUIRED)
│
├── 📂 assets/                            ← All static assets live here
│   │
│   ├── 📂 css/                           ← Stylesheets
│   │   ├── 📄 styles.css                 ← Main stylesheet with design tokens (PROVIDED)
│   │   └── 📄 responsive.css             ← Additional responsive overrides (OPTIONAL)
│   │
│   ├── 📂 js/                            ← JavaScript files
│   │   └── 📄 main.js                    ← Main JavaScript file (REQUIRED)
│   │
│   ├── 📂 images/                        ← All image assets
│   │   ├── 📂 hero/                      ← Hero/banner images
│   │   │   └── 📄 .gitkeep
│   │   ├── 📂 team/                      ← Team member photos
│   │   │   └── 📄 .gitkeep
│   │   ├── 📂 services/                  ← Service-related images/icons
│   │   │   └── 📄 .gitkeep
│   │   ├── 📂 portfolio/                 ← Project showcase screenshots
│   │   │   └── 📄 .gitkeep
│   │   ├── 📂 icons/                     ← UI icons (SVG preferred)
│   │   │   └── 📄 .gitkeep
│   │   ├── 📄 logo.png                   ← Company logo (REQUIRED)
│   │   ├── 📄 logo-white.png             ← White logo for dark backgrounds (OPTIONAL)
│   │   └── 📄 favicon.ico                ← Browser tab icon (RECOMMENDED)
│   │
│   └── 📂 fonts/                         ← Custom font files if self-hosting (OPTIONAL)
│       └── 📄 .gitkeep
│
├── 📂 docs/                              ← Project documentation (OPTIONAL)
│   └── 📄 screenshots/                   ← Screenshots for README
│       └── 📄 .gitkeep
│
├── 📄 README.md                          ← Project documentation (REQUIRED)
├── 📄 PROJECT-BRIEF.md                   ← Company details reference (PROVIDED)
├── 📄 DESIGN-SYSTEM.md                   ← Design system reference (PROVIDED)
├── 📄 ASSESSMENT-INSTRUCTIONS.md         ← Instructions & rubric (PROVIDED)
├── 📄 FOLDER-STRUCTURE.md                ← This file (PROVIDED)
├── 📄 .gitignore                         ← Git ignore file (RECOMMENDED)
└── 📄 LICENSE                            ← License file (OPTIONAL)
```

---

## 2. What Goes Inside Each Folder

### `/` — Root Directory
The **root** contains all HTML pages and project documentation. Every page of the website is a separate `.html` file at the root level — this is the standard for multi-page static websites.

| File | Purpose |
| ---- | ------- |
| `index.html` | The homepage — this is the default page browsers load |
| `about.html` | Company story, mission, vision, and team section |
| `services.html` | Detailed listing of all NovaTech services |
| `portfolio.html` | Showcase of completed projects and case studies |
| `contact.html` | Contact form and company contact information |

> 💡 **Why at the root?** Browsers and web servers look for `index.html` in the root directory by default. Keeping HTML pages at the root creates clean URLs (e.g., `yoursite.com/about.html` instead of `yoursite.com/pages/about.html`).

---

### `assets/` — Static Assets
All non-HTML resources are organized inside the `assets/` folder. This keeps the root directory clean and separates content (HTML) from presentation (CSS), behavior (JS), and media (images).

---

### `assets/css/` — Stylesheets

| File | Status | Purpose |
| ---- | ------ | ------- |
| `styles.css` | **PROVIDED** | Contains the complete design system (`:root` variables, base reset, typography, buttons, forms, grid, utilities). Students build all custom styles in this file. |
| `responsive.css` | OPTIONAL | For students who prefer to keep responsive/media query styles in a separate file. If used, must be linked **after** `styles.css`. |

> 💡 **Tip:** For this project, keeping everything in one `styles.css` is perfectly acceptable. Only create `responsive.css` if your main file is getting very long (300+ lines of custom code).

---

### `assets/js/` — JavaScript

| File | Status | Purpose |
| ---- | ------ | ------- |
| `main.js` | **REQUIRED** | All JavaScript: mobile nav toggle, form validation, service accordions/tabs, scroll effects, dark mode toggle, etc. |

> 💡 **Tip:** You don't need multiple JS files for this project. Keep all your code organized in `main.js` using comments to separate sections.

---

### `assets/images/` — Image Assets
Organized into subfolders by purpose. This prevents a flat folder of 30+ unsorted images.

| Subfolder | Content |
| --------- | ------- |
| `hero/` | Large banner/hero images for page headers |
| `team/` | Headshot photos of team members (for About page) |
| `services/` | Icons or illustrations for each service offering |
| `portfolio/` | Screenshots or mockups of completed projects |
| `icons/` | Small UI icons — SVG format recommended for scalability |

**Root-level images:**
| File | Purpose |
| ---- | ------- |
| `logo.png` | Primary company logo (used in navbar) |
| `logo-white.png` | White/light version for use on dark backgrounds (footer) |
| `favicon.ico` | Small icon shown in the browser tab |

---

### `assets/fonts/` — Custom Fonts (Optional)
Only needed if you choose to **self-host** fonts instead of using the Google Fonts CDN `@import`. For this project, the Google Fonts `@import` in `styles.css` is sufficient — this folder can stay empty.

---

### `docs/` — Documentation (Optional)
A place for screenshots and any extra documentation. Useful for your README when you want to embed screenshots of your completed pages.

---

## 3. Naming Conventions

### ✅ Rules You MUST Follow

| Category | Convention | ✅ Correct | ❌ Incorrect |
| -------- | ---------- | ---------- | ------------ |
| **HTML files** | Lowercase, hyphenated | `about.html`, `contact.html` | `About.html`, `contactPage.html` |
| **CSS/JS files** | Lowercase, hyphenated | `styles.css`, `main.js` | `Styles.CSS`, `Main.JS` |
| **Image files** | Lowercase, hyphenated, descriptive | `hero-banner.jpg`, `team-adaeze.jpg` | `IMG_001.jpg`, `Screenshot 2026.png` |
| **Folders** | Lowercase, no spaces | `images/`, `portfolio/` | `Images/`, `my images/` |
| **CSS classes** | Lowercase, hyphenated (kebab-case) | `.nav-link`, `.hero-section` | `.navLink`, `.HeroSection`, `.nav_link` |
| **CSS IDs** | Lowercase, hyphenated | `#contact-form`, `#main-nav` | `#contactForm`, `#MainNav` |
| **JS variables** | camelCase | `menuToggle`, `formInputs` | `menu_toggle`, `MenuToggle` |
| **JS functions** | camelCase | `validateForm()`, `toggleMenu()` | `validate_form()`, `ToggleMenu()` |

### 📏 Additional Guidelines

- **No spaces in file names** — use hyphens (`-`) instead
- **No special characters** — stick to letters, numbers, and hyphens
- **Be descriptive** — `team-adaeze-okonkwo.jpg` is better than `person1.jpg`
- **Use correct extensions** — `.jpg`, `.png`, `.svg`, `.webp` for images
- **Prefer SVG** for icons and logos (scalable, small file size)
- **Prefer WebP** for photographs (smaller than JPG with same quality)

---

## 4. Required vs Optional Files

### 🔴 REQUIRED — Submission will be marked incomplete without these

| File/Folder | Why It's Required |
| ----------- | ----------------- |
| `index.html` | Every website needs a homepage |
| `about.html` | Required page per assessment brief |
| `services.html` | Required page per assessment brief |
| `portfolio.html` | Required page per assessment brief |
| `contact.html` | Required page per assessment brief |
| `assets/css/styles.css` | Main stylesheet — provided with design system |
| `assets/js/main.js` | Required for JavaScript functionality |
| `assets/images/logo.png` | Needed for the navigation bar |
| `README.md` | Professional projects always include documentation |

### 🟡 RECOMMENDED — Will improve your grade and professionalism

| File/Folder | Why It's Recommended |
| ----------- | -------------------- |
| `assets/images/favicon.ico` | Shows attention to detail |
| `.gitignore` | Keeps your repository clean |
| `assets/images/` subfolders | Organized image management |
| `docs/screenshots/` | For README documentation |

### 🟢 OPTIONAL — Bonus points territory

| File/Folder | Why It's Optional |
| ----------- | ----------------- |
| `assets/css/responsive.css` | Alternative to keeping media queries in `styles.css` |
| `assets/fonts/` | Only if self-hosting fonts |
| `assets/images/logo-white.png` | Nice touch for dark footers |
| `LICENSE` | Professional addition but not assessed |

---

## 5. Why This Structure Matters Professionally

### 🏗️ Industry Standard
This folder structure mirrors how real-world front-end projects are organized at companies and agencies. When you join a development team, you'll encounter similar (or more complex) structures. Learning to organize code properly **now** builds habits that will serve you throughout your career.

### 🧹 Separation of Concerns
By keeping HTML, CSS, JavaScript, and media in separate locations, you follow the fundamental principle of **separation of concerns**:
- **HTML** = Structure (what the content is)
- **CSS** = Presentation (how it looks)
- **JS** = Behavior (how it interacts)
- **Images** = Media assets

This makes your code easier to read, debug, and maintain.

### 👥 Team Collaboration
In a real team environment, a designer might work in `assets/css/`, a developer in `assets/js/`, and a content editor in the HTML files — all without stepping on each other's toes. Clean structure enables smooth collaboration.

### 🔧 Maintainability
Imagine coming back to a project 6 months later. With a clear structure, you can immediately find:
- The styling for a component → `assets/css/styles.css`
- The form validation logic → `assets/js/main.js`
- A team member's photo → `assets/images/team/`

Without structure, you'd be hunting through a messy pile of files.

### 🚀 Deployment Ready
Professional hosting platforms (Netlify, Vercel, GitHub Pages, cPanel) expect a clean structure with `index.html` at the root. Following conventions means your site can be deployed in seconds without reconfiguration.

### 📋 Code Review & Hiring
When hiring managers review your GitHub portfolio, project organization is one of the **first things they evaluate** — often before reading a single line of code. A well-structured project signals professionalism, discipline, and attention to detail.

---

> [!TIP]
> **Think of your folder structure like a filing cabinet.** Would you throw all your documents into one drawer? No — you'd organize them into labeled folders so you (and anyone else) can find things quickly. Your code deserves the same respect.

---

*3LOGY Software Development Bootcamp — Quarter Assessment 2026*
