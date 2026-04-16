# 📝 Company Website Assessment — Instructions & Rubric

> **Assessment Type:** Quarter Assessment — HTML, CSS & JavaScript  
> **Company:** NovaTech Solutions  
> **Duration:** 5 Days  
> **Total Marks:** 100

---

## 📌 Objective

Build a **responsive, multi-page company website** for **NovaTech Solutions** using HTML, CSS, and JavaScript. Your website must demonstrate mastery of front-end fundamentals covered during this quarter, including semantic HTML, CSS layout techniques, responsive design, and DOM manipulation with JavaScript.

---

## 📂 Project Structure

Your submitted project **must** follow this folder structure:

```
NovaTech-Company-Website/
│
├── index.html                  ← Homepage
├── about.html                  ← About Us page
├── services.html               ← Services page
├── portfolio.html              ← Portfolio / Projects page
├── contact.html                ← Contact page
│
├── assets/
│   ├── css/
│   │   └── styles.css          ← Main stylesheet (design system provided)
│   ├── js/
│   │   └── main.js             ← Main JavaScript file
│   └── images/
│       ├── hero/               ← Hero/banner images
│       ├── team/               ← Team member photos
│       ├── services/           ← Service icons/images
│       ├── portfolio/          ← Project screenshots
│       └── icons/              ← UI icons (SVG preferred)
│
├── PROJECT-BRIEF.md            ← Company details (provided)
├── DESIGN-SYSTEM.md            ← Design system reference (provided)
├── FOLDER-STRUCTURE.md         ← Folder structure guide (provided)
└── README.md                   ← Your project documentation
```

> ⚠️ **Important:** The `styles.css` file with the design system tokens has been provided for you in `assets/css/`. You must use these CSS variables throughout your project. Do **not** replace them with hardcoded values.

---

## 📄 Required Pages & Features

### Page 1: Homepage (`index.html`) — 20 marks

| Requirement | Marks | Details |
| ----------- | ----- | ------- |
| **Hero Section** | 7 | Full-width hero with company name, tagline, a brief intro paragraph, and a CTA button linking to the Services page. Must include a background image or gradient. |
| **Services Overview** | 5 | Display at least 3 core services as cards in a responsive grid. Each card must have an icon/image, title, and short description. |
| **Why Choose Us / Stats** | 4 | A section highlighting key statistics (e.g., "120+ Projects", "97% Satisfaction") or reasons to choose NovaTech. |
| **Call to Action** | 2 | A visually distinct CTA section encouraging visitors to get in touch. |
| **Code Quality** | 2 | Semantic HTML, clean indentation, meaningful class names. |

---

### Page 2: About Us (`about.html`) — 18 marks

| Requirement | Marks | Details |
| ----------- | ----- | ------- |
| **Company Story** | 5 | A well-structured "About Us" section using content from the project brief. Must include at least 2 paragraphs. |
| **Mission & Vision** | 4 | Display the mission and vision statements in a visually appealing format (e.g., side-by-side cards, quote blocks). |
| **Meet the Team** | 7 | Display at least 4 team members in a responsive grid. Each team member card must include: a placeholder image, name, role, and short bio. |
| **Code Quality** | 2 | Semantic HTML, clean indentation, meaningful class names. |

---

### Page 3: Services (`services.html`) — 18 marks

| Requirement | Marks | Details |
| ----------- | ----- | ------- |
| **Services List** | 8 | Display **all 5 core services** from the project brief. Each service must have: an icon or image, a heading, and a detailed description (minimum 2 sentences). Use a card-based or grid layout. |
| **Service Detail Interaction** | 6 | Implement a JavaScript-powered interaction: either an accordion (expand/collapse), tabs, or a modal that reveals more detail about a service when clicked. |
| **Visual Design** | 2 | Consistent use of the design system. Cards feel polished with proper spacing, shadows, and hover effects. |
| **Code Quality** | 2 | Semantic HTML, clean indentation, meaningful class names. |

---

### Page 4: Portfolio (`portfolio.html`) — 14 marks

| Requirement | Marks | Details |
| ----------- | ----- | ------- |
| **Project Showcase** | 6 | Display at least 4 fictional projects as cards in a responsive grid. Each card must include: a project image/screenshot, project title, category tag, and short description. Use the suggested projects from the HTML template or create your own. |
| **Project Details** | 4 | Each project card must have a "View Details" button or link. Implement either: a dedicated section that updates on click, a modal with full project info, or simply link to a section with more detail. |
| **Visual Polish** | 2 | Consistent card styling, hover effects, proper image handling (aspect ratio, object-fit). |
| **Code Quality** | 2 | Semantic HTML, clean indentation, meaningful class names. |

---

### Page 5: Contact (`contact.html`) — 15 marks

| Requirement | Marks | Details |
| ----------- | ----- | ------- |
| **Contact Form** | 5 | A working contact form with the following fields: Full Name, Email Address, Phone Number (optional), Subject, Message. Use proper `<label>`, `type` attributes, and `required` where appropriate. |
| **Form Validation (JS)** | 5 | JavaScript validation that checks: all required fields are filled, email format is valid (basic regex), and displays user-friendly error messages below each field using the `.form-error` class. |
| **Contact Information** | 3 | Display company contact details (address, phone, email, working hours) from the project brief in a well-styled sidebar or section alongside the form. |
| **Code Quality** | 2 | Semantic HTML, clean indentation, meaningful class names. |

---

### Cross-Cutting Requirements — 15 marks

| Requirement | Marks | Details |
| ----------- | ----- | ------- |
| **Navigation Bar** | 4 | A consistent navigation bar across **all 5 pages** with the company name/logo, links to all pages, and a visual indicator for the active/current page. Must be responsive (hamburger menu on mobile). |
| **Footer** | 3 | A consistent footer across all pages with: copyright text, quick links, and social media icon links. |
| **Responsive Design** | 5 | The entire website must be fully responsive across Desktop (≥992px), Tablet (768px–991px), and Mobile (≤767px). Use CSS Grid, Flexbox, and media queries — no CSS frameworks allowed. |
| **Design System Usage** | 3 | Consistent use of the provided CSS custom properties (`:root` variables) for colors, fonts, spacing, and shadows throughout the project. No hardcoded values. |

---

## 🎯 Marking Summary

| Category | Marks |
| -------- | ----- |
| Homepage | 20 |
| About Us | 18 |
| Services | 18 |
| Portfolio | 14 |
| Contact  | 15 |
| Cross-Cutting (Nav, Footer, Responsive, Design System) | 15 |
| **Total** | **100** |

---

## ⭐ Bonus Marks (up to 10 extra marks)

Students can earn up to **10 bonus marks** for going above and beyond:

| Bonus Feature | Marks | Details |
| ------------- | ----- | ------- |
| **Smooth Scroll & Animations** | 2 | CSS transitions, scroll animations, or subtle hover micro-interactions. |
| **Dark Mode Toggle** | 3 | A JavaScript-powered toggle that switches between light and dark themes using CSS variables. |
| **Back to Top Button** | 1 | A floating button that appears on scroll and smoothly scrolls to the top. |
| **Portfolio Filtering** | 2 | JS-powered category filter buttons (All, Web, Mobile, Cloud, etc.) that show/hide portfolio cards dynamically. |
| **Accessibility** | 2 | Proper `aria-labels`, focus states, alt text on all images, keyboard navigation for interactive elements. |

---

## 🚫 Rules & Restrictions

1. **No CSS Frameworks** — Do not use Bootstrap, Tailwind, Bulma, or any CSS framework. Write your own CSS using the provided design system.
2. **No JavaScript Libraries** — Do not use jQuery, React, Vue, or any JS library/framework. Use vanilla JavaScript only.
3. **No Templates** — Do not copy website templates from the internet. All code must be your own.
4. **Use the Design System** — You must use the provided CSS custom properties. Hardcoding colors, fonts, or spacing values will result in mark deductions.
5. **Valid HTML** — Your HTML must pass the [W3C Validator](https://validator.w3.org/) with no errors.
6. **Clean Code** — Proper indentation, meaningful class/ID names, and organized file structure.

---

## 📤 Submission Guidelines

1. **Repository:** Push your completed project to a **public GitHub repository**.
2. **Repository Name:** `NovaTech-Company-Website` (or similar descriptive name).
3. **Branch:** Submit on the `main` branch.
4. **README.md:** Include a `README.md` with:
   - Project title and description
   - Technologies used
   - How to view the website (e.g., open `index.html` in a browser)
   - Screenshots of at least 2 pages
5. **Live Demo (Optional Bonus):** Deploy to GitHub Pages or Netlify for a live URL.
6. **Deadline:** Submit your GitHub repository link by the assigned deadline.

---

## 📚 Provided Resources

| File | Description |
| ---- | ----------- |
| `PROJECT-BRIEF.md` | All company details — name, about, services, team, contact info, brand colors |
| `DESIGN-SYSTEM.md` | Complete UI design system — colors, typography, spacing, button styles, and full CSS reference |
| `FOLDER-STRUCTURE.md` | Complete folder structure guide with naming conventions and explanations |
| `ASSESSMENT-INSTRUCTIONS.md` | This file — instructions, rubric, and submission guidelines |
| `PAGE-CONTENT-GUIDE.md` | **Page-by-page content & layout guide** — exact text, section breakdowns, layout instructions, and JS requirements for every section of every page |
| `IMAGE-REQUIREMENTS.md` | **Image & asset list** — every image needed with file names, dimensions, search terms, alt text, and optimization guidelines |
| `LOGO-DESIGN-BRIEF.md` | Logo design brief with AI generator prompts and variation specs |
| `JS-REQUIREMENTS.md` | **JavaScript guide** — exact function names, implementation code, behavior specs, CSS needed, common mistakes, and testing checklists |
| `assets/css/styles.css` | Ready-to-use CSS starter file with all design tokens, base reset, typography, buttons, forms, grid, and responsive breakpoints |
| `assets/js/main.js` | Structured JavaScript starter with organized sections and TODO comments |
| `README.md` | README template — fill in your details and add screenshots |
| All HTML pages | Boilerplate HTML files with semantic structure and TODO placeholders |

---

## 💡 Tips for Success

1. **Start with structure** — Build out the HTML for all 5 pages first before styling.
2. **Use the design system** — Reference variables like `var(--color-primary)`, `var(--font-heading)`, etc. to stay consistent.
3. **Mobile-first approach** — Style for mobile first, then add `@media` queries for larger screens.
4. **Test frequently** — Open your pages in the browser after every change. Test on different screen sizes.
5. **Commit often** — Make small, meaningful Git commits with clear messages as you build each feature.
6. **Read the rubric** — Check each requirement to make sure nothing is missed before submitting.

---

> ⚠️ **Academic Integrity:** All work must be your own. Plagiarism or use of AI-generated code without understanding will result in a mark of zero. You may use class notes, MDN Web Docs, and the provided resources.

---

*3LOGY Software Development Bootcamp — Quarter Assessment 2026*
