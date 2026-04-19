# NovaTech Solutions — Company Website

![NovaTech Solutions Banner](https://placehold.co/1200x400/0A1F3F/2D7FF9?text=NovaTech+Solutions+%E2%80%94+Empowering+Africa%27s+Digital+Future)

> A responsive, multi-page company website for **NovaTech Solutions** — a fictional IT services company based in Abuja, Nigeria. Built entirely with vanilla HTML5, CSS3, and JavaScript as my quarter assessment project for the 3LOGY Software Development Bootcamp 2026.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()
[![Responsive](https://img.shields.io/badge/Responsive-Mobile--First-00C853)]()
[![Status](https://img.shields.io/badge/Status-Completed-00C853)]()

---

## 📌 About This Project

NovaTech Solutions is my quarter assessment submission for the **3LOGY Software Development Bootcamp (Cohort 2026 Q1)**. I designed and built a complete five-page company website for a fictional African tech company, using no frameworks, no CSS libraries, and no UI kits — everything from the design system to the interactive components was written by hand.

The brief required a professional, responsive site covering the company's identity, services, portfolio, and contact. Beyond the requirements, I added scroll-triggered animations, a count-up stats section, portfolio filtering, and a fully accessible mobile navigation.

**Live Site:** *(Add your GitHub Pages or Netlify URL here)*

---

## 📸 Screenshots

### Homepage
![Homepage](docs/screenshots/homepage.png)

### About Page
![About](docs/screenshots/about.png)

### Services Page
![Services](docs/screenshots/services.png)

### Portfolio Page
![Portfolio](docs/screenshots/portfolio.png)

### Contact Page
![Contact](docs/screenshots/contact.png)

---

## 🛠️ What I Built With

| Technology | How I Used It |
|---|---|
| **HTML5** | Semantic structure across all five pages — proper use of `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>` |
| **CSS3 — Flexbox** | Navigation bar, hero buttons, footer bottom bar, social icons, info card layouts |
| **CSS3 — Grid** | Services grid (3-col), stats grid (4-col), footer grid (4-col), portfolio cards, team grid — all responsive |
| **CSS Custom Properties** | Full design system — colors, spacing, typography, shadows, and transitions as variables |
| **CSS Keyframe Animations** | Animated hero headline gradient, hero label bounce, accordion expand/collapse transitions |
| **JavaScript ES6+** | DOM manipulation, event delegation, regex validation, IntersectionObserver, setInterval count-up |
| **Google Fonts** | Space Grotesk for headings · Inter for body text |

No frameworks. No libraries. No shortcuts.

---

## 📂 Project Structure

```
NovaTech-Company-Website/
│
├── index.html                ← Homepage
├── about.html                ← About Us
├── services.html             ← Services + Accordion
├── portfolio.html            ← Portfolio + Filter
├── contact.html              ← Contact Form
│
├── assets/
│   ├── css/
│   │   ├── styles.css        ← All component styles and responsive breakpoints
│   │   └── customs.css       ← Design system — CSS variables, resets, utilities
│   ├── js/
│   │   └── main.js           ← All JavaScript — guarded, modular, no framework
│   └── images/
│       ├── hero/             ← Hero background image
│       ├── team/             ← Team member photos
│       ├── services/         ← Service illustrations
│       ├── portfolio/        ← Project screenshots
│       ├── clients/          ← Testimonial photos
│       ├── about/            ← About page images
│       └── icons/            ← Favicon
│
├── docs/
│   ├── design/               ← Design references and mockups
│   ├── requirements/         ← Assessment brief and specs
│   └── screenshots/          ← README screenshots
│
├── README.md
└── .gitignore
```

---

## 🚀 How to Run It

### Open directly in a browser
```bash
# Clone the repo
git clone https://github.com/aboisam/NovaTech-Company-Website.git

cd NovaTech-Company-Website

# Open in your browser
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

### Or use VS Code Live Server *(recommended)*
1. Open the project folder in VS Code
2. Install the **Live Server** extension by Ritwick Dey
3. Right-click `index.html` → **Open with Live Server**
4. Opens at `http://127.0.0.1:5500`

---

## 📄 Pages

### Homepage — `index.html`
The landing page opens with an animated hero section. The `<h1>` headline cycles through a three-colour gradient (purple → white → blue) using a CSS keyframe animation, and the welcome label has a continuous vertical bounce. Below the hero are three service overview cards, a stats section that counts up when scrolled into view (120+ projects, 97% client satisfaction, 35+ team members, 5+ years), and a call-to-action banner.

### About — `about.html`
Covers NovaTech's company story in a two-column image-and-text layout, a Mission and Vision card pair, and a five-column team grid with photos, roles, and short bios.

### Services — `services.html`
Lists all five core services with icons and descriptions. Each service has an expandable **accordion panel** — clicking a trigger expands the detail content and collapses any previously open item. The accordion uses `max-height` CSS transitions for a smooth animation and updates `aria-expanded` for screen readers.

### Portfolio — `portfolio.html`
Displays project cards with cover images, category badges, tech tags, and descriptions. A **filter bar** at the top lets users show projects by category. Clicking a filter button hides non-matching cards using a `.hidden` class toggle. Cards also have a subtle image zoom on hover.

### Contact — `contact.html`
A contact form with six fields: First Name, Last Name, Email, Phone (optional), Subject, and Message. All required fields are validated on submit with **inline error messages**. Errors clear in real time as the user types. On a valid submission, the form is replaced with a success confirmation message. A sticky info card alongside the form shows phone, email, and address details.

---

## ⚡ JavaScript — How Each Feature Works

Every feature in `main.js` is wrapped in an element existence check (`if (element)`) so a missing element on one page never causes a crash that kills features on another page.

### Mobile Navigation Toggle
The hamburger button toggles an `.open` class on both itself and `#nav-menu`. The menu slides down via a CSS `max-height` transition from `0` to `80vh`. The menu closes when the user clicks outside it, presses `Escape`, or clicks any nav link. The button's `aria-expanded` attribute stays in sync throughout.

### Active Nav Link Highlight
On every page load, the script compares `window.location.pathname` against each nav link's `href`. The matching link receives the `.active` class. Any `.active` set in the HTML markup is stripped first to prevent conflicts.

### Navbar Scroll Shadow
A `scroll` event listener watches `window.scrollY`. After 50px of scroll, a `.scrolled` class is added to `#main-header`, triggering a CSS `box-shadow` transition that makes the navbar feel elevated above the content.

### Back to Top Button
The `#back-to-top` button is invisible by default. After 300px of scroll it fades in and translates up into position via the `.visible` class. Clicking it calls `window.scrollTo({ top: 0, behavior: 'smooth' })`.

### Stats Count-Up Animation
An `IntersectionObserver` watches the `#why-choose-us` section with a 30% visibility threshold. When the section enters the viewport, each `.odometer` span's `data-target` attribute is read and a `setInterval` loop increments the displayed number every 20ms over 1,500ms. The observer disconnects immediately after firing so the animation runs exactly once.

### Service Accordion
Click events on `.accordion` are handled with event delegation — a single listener on the parent catches all trigger clicks. When a trigger fires, all items collapse first, then the clicked item expands (unless it was already open). The `aria-expanded` attribute and icon character (`+` / `−`) update on every state change.

### Portfolio Filter
Each filter button has a `data-filter` value. Clicking a button removes `.active` from all buttons, adds it to the clicked one, then loops through every `.portfolio-card` and toggles `.hidden` based on whether the card's `data-category` matches the active filter. The `all` filter unhides every card.

### Contact Form Validation
On submit, the handler validates every required field and checks the email against a regex pattern. Any failed check calls `showError()` which adds an `.error` border to the input and writes a message into its paired error `<span>`. A separate `input` event listener on every field calls `clearError()` so errors disappear as the user starts correcting them. A fully valid submission calls `showSuccess()` which replaces the form with a confirmation message.

---

## 🎨 Design System

All visual tokens live in `customs.css` as CSS custom properties. No colour, spacing, or font value is hardcoded inside a component.

```css
/* Brand Colors */
--color-primary: #0A1F3F;       /* deep navy — nav, footer, headings */
--color-accent: #2D7FF9;        /* brand blue — CTAs, icons, highlights */
--color-accent-hover: #1a6de0;  /* darker blue for hover states */
--color-accent-light: #e8f0fe;  /* tinted blue for icon backgrounds, tags */
--color-white: #ffffff;
--color-text: #1a202c;
--color-text-light: #64748b;
--color-background: #f8fafc;
--color-error: #ef4444;
--color-warning: #f59e0b;

/* Typography */
--font-heading: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;

/* Type Scale */
--fs-h1 / --fs-h2 / --fs-h3 / --fs-h4 / --fs-body / --fs-small / --fs-caption

/* Font Weights */
--fw-regular: 400  |  --fw-medium: 500  |  --fw-semibold: 600  |  --fw-bold: 700

/* Spacing — 8-step scale */
--space-xs  →  --space-4xl

/* Elevation */
--shadow-sm / --shadow-md / --shadow-lg / --shadow-accent

/* Shape */
--radius-sm / --radius-md / --radius-lg / --radius-full

/* Motion */
--transition-fast / --transition-normal
```

### Animations
| Animation | Element | Behaviour |
|---|---|---|
| `gradientShift` | Hero `<h1>` | Cycles a 3-colour gradient (purple → white → blue) every 4s, infinitely |
| `letterPop` | `.hero-label` | Continuous vertical bounce to draw attention on load |
| `max-height` transition | Accordion panels & mobile nav | Smooth expand/collapse with cubic-bezier easing |
| Opacity + translateY | Back-to-top button | Fades in and rises into view when scroll threshold is passed |
| `scale(1.05)` | Portfolio card images | Subtle zoom on card hover with slow cubic-bezier easing |
| JS setInterval count | `.odometer` spans | Numbers tick from 0 to their `data-target` value over 1.5 seconds |

---

## 📐 Responsive Design

I used a mobile-first approach with five breakpoints covering all standard device widths.

| Breakpoint | Max Width | Key Layout Changes |
|---|---|---|
| Tablet Large | 1024px | Team grid → 3 columns; process steps → 2 columns |
| Tablet | 992px | Services grid → 2 columns; footer → 2 columns; contact stacks to 1 column |
| Mobile Large | 768px | Stats grid → 2 columns; story section stacks; hero padding reduced |
| Mobile | 640px | Hamburger activates; nav becomes full-width slide-down panel |
| Mobile Small | 576px | All content grids → 1 column; footer and form rows fully stack |

---

## 🐛 Known Issues

| # | Issue | Page | Severity |
|---|---|---|---|
| 1 | Footer copyright reads "©21" instead of "© 2026" | All | Low |
| 2 | Footer "Services" column contains placeholder links including a dummy "Boolsmc Policy" entry | All | Low |
| 3 | Footer contact info has placeholder phone numbers and a non-functional email address | All | Medium |
| 4 | Card icon SVGs use filled `<path>` elements but CSS targets `stroke` — accent colour does not apply on hover | index.html | Low |
| 5 | Hero background image falls back to CSS gradient if `assets/images/hero/hero-bg.png` is absent | All | Medium |

---

## 🔮 What I Would Add Next

1. **Working form backend** — Connect the contact form to [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) so submissions are actually delivered to an inbox
2. **Page transition animations** — Fade or slide between pages using the View Transitions API
3. **Dark mode** — Toggle between light and dark variable sets via a `data-theme` attribute on `<html>`
4. **Image lazy loading** — Add `loading="lazy"` to all portfolio and team images for faster first-paint
5. **Testimonials carousel** — Replace static testimonial cards with a CSS scroll-snap or JS slider
6. **Blog / Insights page** — Article listing with cards, categories, and reading-time estimates

---

## 🎓 What I Learned

Building this without a framework forced me to really understand how CSS Grid and Flexbox complement each other — Grid for macro layout, Flexbox for aligning items within components. Writing the accordion, the portfolio filter, and the count-up animation from scratch gave me much more confidence with event delegation, DOM class manipulation, and the IntersectionObserver API. The biggest lesson was structuring JavaScript so one broken element on one page never takes down the whole site — wrapping every feature in an existence guard was something I had to debug my way into understanding.

---

## 📚 Resources I Used

- [MDN Web Docs](https://developer.mozilla.org/) — primary HTML, CSS, and JavaScript reference
- [CSS-Tricks — Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [W3C HTML Validator](https://validator.w3.org/)
- 3LOGY Bootcamp 2026 — course materials, design system starter tokens, and assessment brief
- [Google Fonts](https://fonts.google.com/) — Space Grotesk and Inter typefaces

---

## 👤 About Me

| | |
|---|---|
| **Name** | Aboi Samson Aboi |
| **GitHub** | [@aboisam](https://github.com/aboisam) |
| **Live Site** | https://novatech-nine.vercel.app/index.html |

---

