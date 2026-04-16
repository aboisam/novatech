# ⚡ NovaTech Solutions — JavaScript Requirements Guide

> **Purpose:** Detailed specification of every JavaScript feature students must implement, with exact function names, step-by-step behavior, common mistakes, and testing instructions.  
> **Skill Level Assumed:** Variables, functions, DOM manipulation, events, arrays, basic loops, form validation.  
> **File:** All JavaScript goes in `assets/js/main.js`

---

## Table of Contents

1. [Setup & Structure](#1-setup--structure)
2. [REQUIRED: Mobile Navigation Toggle](#2-required-mobile-navigation-toggle--4-marks)
3. [REQUIRED: Contact Form Validation](#3-required-contact-form-validation--10-marks)
4. [REQUIRED: Service Interaction](#4-required-service-interaction--6-marks)
5. [BONUS: Scroll-to-Top Button](#5-bonus-scroll-to-top-button--1-mark)
6. [BONUS: Navbar Scroll Effect](#6-bonus-navbar-scroll-effect--1-mark)
7. [BONUS: Portfolio Filtering](#7-bonus-portfolio-filtering--2-marks)
8. [BONUS: Dark Mode Toggle](#8-bonus-dark-mode-toggle--3-marks)
9. [BONUS: Smooth Scroll for Anchor Links](#9-bonus-smooth-scroll--1-mark)
10. [BONUS: Typing Animation](#10-bonus-typing-animation--1-mark)
11. [Testing Checklist](#testing-checklist)

---

## 1. Setup & Structure

### File Structure

All JavaScript must be written in a **single file**: `assets/js/main.js`

### Starter Template

Your `main.js` file should follow this structure:

```javascript
// ============================================================
// NovaTech Solutions — Main JavaScript
// ============================================================

// 1. Wait for DOM to fully load before running any code
document.addEventListener('DOMContentLoaded', function () {

    // 2. Call your initialization functions here
    initMobileNav();
    initContactForm();
    initServiceAccordion();  // or initServiceTabs() or initServiceModal()
    // initScrollToTop();     // BONUS
    // initNavScroll();       // BONUS
    // initPortfolioFilter(); // BONUS
    // initDarkMode();        // BONUS

});

// 3. Define your functions below...
```

### Why `DOMContentLoaded`?

The `<script>` tag is at the **bottom of the `<body>`** in the HTML, so the DOM is almost always ready. However, wrapping in `DOMContentLoaded` is a **professional best practice** that guarantees all elements exist before your JavaScript tries to access them. Students should always use this pattern.

---
---

## 2. REQUIRED: Mobile Navigation Toggle — 4 marks

> **Pages:** ALL pages (navigation appears on every page)  
> **File:** `assets/js/main.js`  
> **Marks:** Part of the 4-mark "Navigation Bar" cross-cutting requirement

### Function Name

```javascript
function initMobileNav() { ... }
```

### HTML Elements Involved

```html
<button id="menu-toggle" class="menu-toggle" aria-label="Toggle navigation menu">
    <span class="hamburger"></span>
</button>

<ul id="nav-menu" class="nav-menu">
    <li><a href="index.html" class="nav-link">Home</a></li>
    <!-- ... more links ... -->
</ul>
```

### Step-by-Step Behavior

| Step | User Action | Expected Result |
| ---- | ----------- | --------------- |
| 1 | Page loads on a **mobile screen** (below 768px) | Nav links (`#nav-menu`) are hidden. Hamburger button (`#menu-toggle`) is visible. |
| 2 | User **clicks** the hamburger button | Nav menu slides in or drops down (`.nav-menu` gets class `.active`). Hamburger icon animates to an "X" (`.menu-toggle` gets class `.active`). |
| 3 | User **clicks** the hamburger button again | Nav menu closes (`.active` class removed from both elements). |
| 4 | User **clicks a nav link** while menu is open | Nav menu closes automatically. User navigates to the clicked page. |
| 5 | User **resizes** browser to desktop width (above 768px) | Nav links are visible in a horizontal row. Hamburger button is hidden. No JS needed for this — handled by CSS media queries. |

### Implementation Guide

```javascript
function initMobileNav() {
    // Step 1: Get DOM elements
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // Step 2: Guard clause — exit if elements don't exist on this page
    if (!menuToggle || !navMenu) return;

    // Step 3: Toggle menu on hamburger click
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Step 4: Close menu when a nav link is clicked
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}
```

### Required CSS (add to `styles.css`)

Students must add these styles to make the JS functional:

```css
/* Mobile Navigation — add to your styles.css */

.menu-toggle {
    display: none;         /* Hidden on desktop */
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-sm);
}

.hamburger {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--color-white);
    position: relative;
    transition: var(--transition-fast);
}

.hamburger::before,
.hamburger::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 3px;
    background-color: var(--color-white);
    transition: var(--transition-fast);
}

.hamburger::before { top: -8px; }
.hamburger::after  { top: 8px;  }

/* Animate hamburger to X when active */
.menu-toggle.active .hamburger {
    background-color: transparent;
}

.menu-toggle.active .hamburger::before {
    top: 0;
    transform: rotate(45deg);
}

.menu-toggle.active .hamburger::after {
    top: 0;
    transform: rotate(-45deg);
}

/* Mobile responsive */
@media (max-width: 768px) {
    .menu-toggle {
        display: block;    /* Show hamburger on mobile */
    }

    .nav-menu {
        display: none;     /* Hide links by default on mobile */
        position: absolute;
        top: var(--nav-height);
        left: 0;
        width: 100%;
        background-color: var(--color-primary);
        flex-direction: column;
        padding: var(--space-lg);
        box-shadow: var(--shadow-lg);
    }

    .nav-menu.active {
        display: flex;     /* Show when .active class is added by JS */
    }

    .nav-menu .nav-link {
        padding: var(--space-md) 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
}
```

### Common Mistakes to Avoid

| ❌ Mistake | ✅ Correct Approach |
| ---------- | ------------------- |
| Using `document.getElementsByClassName()` and forgetting it returns a collection, not a single element | Use `document.getElementById()` for single elements, `document.querySelectorAll()` for collections |
| Toggling `display: none/block` directly in JS | Toggle a CSS class (`.active`) and let CSS handle the display change |
| Forgetting to close the menu when a link is clicked | Loop through all `.nav-link` elements and add click listeners to each |
| Not adding `aria-label` to the hamburger button | Already included in the HTML template — don't remove it |
| Using `onclick` HTML attributes instead of `addEventListener` | Always use `addEventListener` in your JS file — it's cleaner and more maintainable |

### How to Test

1. Open any page in your browser
2. Resize the window to below 768px (or use Chrome DevTools mobile view)
3. ✅ Hamburger icon is visible
4. ✅ Clicking hamburger shows the nav menu
5. ✅ Clicking again hides it
6. ✅ Clicking a nav link closes the menu
7. ✅ Resizing back to desktop shows nav normally without hamburger

---
---

## 3. REQUIRED: Contact Form Validation — 10 marks

> **Page:** `contact.html` only  
> **File:** `assets/js/main.js`  
> **Marks:** 5 marks (Contact Form) + 5 marks (Form Validation)

### Function Name

```javascript
function initContactForm() { ... }
```

### Helper Functions

```javascript
function showError(inputId, message) { ... }
function clearErrors() { ... }
function isValidEmail(email) { ... }
```

### HTML Elements Involved

The contact form is **already built** in `contact.html`:

```html
<form id="contact-form" novalidate>
    <input type="text"     id="full-name"  name="fullName"  required>
    <span class="form-error" id="name-error"></span>

    <input type="email"    id="email"      name="email"     required>
    <span class="form-error" id="email-error"></span>

    <input type="tel"      id="phone"      name="phone">
    <!-- Phone is OPTIONAL — no validation needed -->

    <input type="text"     id="subject"    name="subject"   required>
    <span class="form-error" id="subject-error"></span>

    <textarea              id="message"    name="message"   required></textarea>
    <span class="form-error" id="message-error"></span>

    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

> **Note:** The `novalidate` attribute on the `<form>` disables browser built-in validation so students can implement their own JavaScript validation.

### Validation Rules

| Field | Input ID | Error Span ID | Validation Rule | Error Message |
| ----- | -------- | ------------- | --------------- | ------------- |
| Full Name | `full-name` | `name-error` | Must not be empty AND must be at least 2 characters | `"Please enter your full name (at least 2 characters)."` |
| Email | `email` | `email-error` | Must not be empty AND must match email regex pattern | `"Please enter a valid email address."` |
| Phone | `phone` | *(none)* | ⚡ No validation — this field is optional | *(no error)* |
| Subject | `subject` | `subject-error` | Must not be empty | `"Please enter a subject."` |
| Message | `message` | `message-error` | Must not be empty AND must be at least 10 characters | `"Please enter a message (at least 10 characters)."` |

### Email Regex Pattern

```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

**What this pattern checks:**
- `^[^\s@]+` — starts with one or more characters that are NOT spaces or @
- `@` — must have exactly one @ symbol
- `[^\s@]+` — must have domain characters after @
- `\.` — must have a dot
- `[^\s@]+$` — must end with characters (the extension, like .com)

**Examples:**
- ✅ `john@example.com` — valid
- ✅ `ada.eze@novatech.com.ng` — valid
- ❌ `john@` — invalid (no domain)
- ❌ `john.com` — invalid (no @ symbol)
- ❌ `@example.com` — invalid (no local part)
- ❌ ` ` (empty/spaces) — invalid

### Step-by-Step Behavior

| Step | User Action | Expected Result |
| ---- | ----------- | --------------- |
| 1 | User opens `contact.html` | Form is displayed with empty fields. No error messages visible. |
| 2 | User clicks **"Send Message"** with empty fields | Form does NOT submit. Red error messages appear below each empty required field. Invalid fields get a red border. |
| 3 | User fills in name but leaves email empty, clicks submit | Name error clears. Email error appears: "Please enter a valid email address." |
| 4 | User enters `john@` in email field, clicks submit | Email error: "Please enter a valid email address." (invalid format) |
| 5 | User fills in ALL fields correctly, clicks submit | All errors clear. Form shows a **success message** (e.g., "Your message has been sent successfully!"). Form either resets or is replaced with the success message. |
| 6 | User starts typing in a previously invalid field | *(Optional BONUS: error clears in real-time as user types)* |

### Implementation Guide

```javascript
function initContactForm() {
    const form = document.getElementById('contact-form');

    // Guard clause — only run on contact.html
    if (!form) return;

    form.addEventListener('submit', function (event) {
        // Prevent the form from actually submitting (no server)
        event.preventDefault();

        // Clear all previous errors
        clearErrors();

        // Get field values (trimmed to remove whitespace)
        const fullName = document.getElementById('full-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Track if form is valid
        let isValid = true;

        // Validate Full Name
        if (fullName === '' || fullName.length < 2) {
            showError('full-name', 'name-error',
                'Please enter your full name (at least 2 characters).');
            isValid = false;
        }

        // Validate Email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailPattern.test(email)) {
            showError('email', 'email-error',
                'Please enter a valid email address.');
            isValid = false;
        }

        // Validate Subject
        if (subject === '') {
            showError('subject', 'subject-error',
                'Please enter a subject.');
            isValid = false;
        }

        // Validate Message
        if (message === '' || message.length < 10) {
            showError('message', 'message-error',
                'Please enter a message (at least 10 characters).');
            isValid = false;
        }

        // If all valid — show success
        if (isValid) {
            // Option A: Show an alert (simple)
            // alert('Your message has been sent successfully!');

            // Option B: Show inline success message (better)
            form.innerHTML = `
                <div class="form-success">
                    <h3>Message Sent Successfully! ✅</h3>
                    <p>Thank you for reaching out. Our team will get back
                       to you within 24 hours.</p>
                </div>
            `;

            // Option C: Reset the form (simplest)
            // form.reset();
        }
    });
}
```

### Helper Functions

```javascript
function showError(inputId, errorSpanId, message) {
    // Show error message in the span
    const errorSpan = document.getElementById(errorSpanId);
    if (errorSpan) {
        errorSpan.textContent = message;
    }

    // Add red border to the input
    const input = document.getElementById(inputId);
    if (input) {
        input.style.borderColor = 'var(--color-error)';
        // OR: input.classList.add('input-error');
    }
}

function clearErrors() {
    // Clear all error messages
    const errorSpans = document.querySelectorAll('.form-error');
    errorSpans.forEach(function (span) {
        span.textContent = '';
    });

    // Reset all input borders
    const inputs = document.querySelectorAll(
        '#contact-form input, #contact-form textarea'
    );
    inputs.forEach(function (input) {
        input.style.borderColor = '';
        // OR: input.classList.remove('input-error');
    });
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
```

### Common Mistakes to Avoid

| ❌ Mistake | ✅ Correct Approach |
| ---------- | ------------------- |
| Forgetting `event.preventDefault()` | Always call this first in the submit handler — without it, the page reloads and errors disappear |
| Not trimming input values with `.trim()` | Always trim — a field with just spaces `"   "` should count as empty |
| Checking `email !== ''` but not validating the format | Always check BOTH: not empty AND matches the regex pattern |
| Using `innerHTML` to set error text (security risk) | Use `.textContent` for plain text error messages |
| Validating phone number (it's optional) | Skip phone — the brief says it's optional |
| Only checking one field and stopping | Check ALL fields before deciding if the form is valid — users should see all errors at once |
| Using `document.querySelector('#contact-form')` on pages without the form (causes error) | Use the guard clause: `if (!form) return;` |
| Hardcoding error border color | Use `var(--color-error)` or a CSS class |

### How to Test

1. Open `contact.html` in your browser
2. ✅ Click "Send Message" with all fields empty → 4 error messages appear
3. ✅ Fill in only the name → name error clears, 3 errors remain
4. ✅ Enter `test@` in email → email error shows (invalid format)
5. ✅ Enter `test@email.com` → email error clears
6. ✅ Enter a 5-character message → message error shows (too short)
7. ✅ Fill ALL fields correctly and submit → success message appears
8. ✅ Open `index.html` → no console errors (guard clause prevents errors)

---
---

## 4. REQUIRED: Service Interaction — 6 marks

> **Page:** `services.html` only  
> **File:** `assets/js/main.js`  
> **Marks:** 6 marks (Service Detail Interaction)

Students must implement **ONE** of three options. All three are documented below.

---

### Option A: Accordion (Expand/Collapse)

#### Function Name

```javascript
function initServiceAccordion() { ... }
```

#### HTML Structure

```html
<div class="accordion">
    <div class="accordion-item">
        <button class="accordion-header">
            <span>🌐 Web Application Development</span>
            <span class="accordion-icon">+</span>
        </button>
        <div class="accordion-content">
            <p>We design, build, and deploy modern, responsive web
               applications tailored to your business needs...</p>
            <ul>
                <li>Custom web app development</li>
                <li>Responsive design for all devices</li>
                <li>E-commerce platforms</li>
                <li>Content management systems</li>
                <li>Progressive Web Apps (PWA)</li>
            </ul>
        </div>
    </div>
    <!-- Repeat for all 5 services -->
</div>
```

#### Step-by-Step Behavior

| Step | User Action | Expected Result |
| ---- | ----------- | --------------- |
| 1 | Page loads | All accordion items are **collapsed** (content hidden). Only headers visible. |
| 2 | User clicks a **header** | That item's content **expands** (slides down or fades in). The `+` icon changes to `−`. All other items **collapse**. |
| 3 | User clicks the **same header** again | That item **collapses** (toggles off). |
| 4 | User clicks a **different header** | Previously open item collapses. Newly clicked item expands. |

#### Implementation Guide

```javascript
function initServiceAccordion() {
    const headers = document.querySelectorAll('.accordion-header');

    // Guard clause
    if (headers.length === 0) return;

    headers.forEach(function (header) {
        header.addEventListener('click', function () {
            // Get the parent accordion item
            const item = this.parentElement;
            const isActive = item.classList.contains('active');

            // Close ALL items first (single-open behavior)
            const allItems = document.querySelectorAll('.accordion-item');
            allItems.forEach(function (i) {
                i.classList.remove('active');
            });

            // If the clicked item was NOT already open, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}
```

#### Required CSS

```css
.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, padding 0.3s ease;
    padding: 0 var(--space-lg);
}

.accordion-item.active .accordion-content {
    max-height: 500px;    /* Large enough to fit content */
    padding: var(--space-lg);
}

.accordion-icon {
    font-size: 1.5rem;
    transition: var(--transition-fast);
}

.accordion-item.active .accordion-icon {
    transform: rotate(45deg);   /* + rotates to × */
}

.accordion-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: var(--space-lg);
    background: var(--color-white);
    border: 1px solid #E5E7EB;
    border-radius: var(--radius-md);
    cursor: pointer;
    font-family: var(--font-heading);
    font-size: var(--fs-h4);
    font-weight: var(--fw-medium);
    color: var(--color-primary);
    transition: var(--transition-fast);
}

.accordion-header:hover {
    background: var(--color-accent-light);
}

.accordion-item.active .accordion-header {
    background: var(--color-accent);
    color: var(--color-white);
    border-color: var(--color-accent);
}

.accordion-item.active .accordion-icon {
    color: var(--color-white);
}
```

#### Common Mistakes

| ❌ Mistake | ✅ Fix |
| ---------- | ------ |
| Using `style.display` instead of CSS classes with `max-height` | Use `classList.toggle('active')` and animate with CSS `max-height` |
| Forgetting to close other items (allowing multiple open) | Loop through all items and remove `.active` before adding to clicked |
| Using `this` inside an arrow function (where `this` is wrong) | Use a regular `function()` or save reference to the header |

---

### Option B: Tabs

#### Function Name

```javascript
function initServiceTabs() { ... }
```

#### HTML Structure

```html
<div class="tabs">
    <div class="tab-buttons">
        <button class="tab-btn active" data-tab="tab-web">Web Dev</button>
        <button class="tab-btn" data-tab="tab-cloud">Cloud</button>
        <button class="tab-btn" data-tab="tab-mobile">Mobile</button>
        <button class="tab-btn" data-tab="tab-security">Security</button>
        <button class="tab-btn" data-tab="tab-training">Training</button>
    </div>

    <div class="tab-content active" id="tab-web">
        <h3>Web Application Development</h3>
        <p>We design, build, and deploy modern, responsive web
           applications...</p>
        <!-- Full service content here -->
    </div>
    <div class="tab-content" id="tab-cloud">
        <!-- Cloud service content -->
    </div>
    <!-- Repeat for all 5 services -->
</div>
```

#### Step-by-Step Behavior

| Step | User Action | Expected Result |
| ---- | ----------- | --------------- |
| 1 | Page loads | First tab button is active (highlighted). First tab content panel is visible. All other panels are hidden. |
| 2 | User clicks a **tab button** | Clicked button gets `.active` class (styled differently). Corresponding content panel becomes visible. All other buttons lose `.active` and all other panels are hidden. |

#### Implementation Guide

```javascript
function initServiceTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    // Guard clause
    if (tabButtons.length === 0) return;

    tabButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Get the target tab ID from data-tab attribute
            const targetTab = this.getAttribute('data-tab');

            // Remove active from ALL buttons
            tabButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });

            // Remove active from ALL content panels
            tabContents.forEach(function (content) {
                content.classList.remove('active');
            });

            // Add active to clicked button
            this.classList.add('active');

            // Show the target content panel
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}
```

#### Required CSS

```css
.tab-buttons {
    display: flex;
    gap: var(--space-sm);
    flex-wrap: wrap;
    margin-bottom: var(--space-xl);
}

.tab-btn {
    padding: 0.75rem 1.5rem;
    background: var(--color-white);
    border: 2px solid #E5E7EB;
    border-radius: var(--radius-md);
    cursor: pointer;
    font-family: var(--font-body);
    font-weight: var(--fw-medium);
    color: var(--color-text);
    transition: var(--transition-fast);
}

.tab-btn:hover {
    border-color: var(--color-accent);
    color: var(--color-accent);
}

.tab-btn.active {
    background: var(--color-accent);
    color: var(--color-white);
    border-color: var(--color-accent);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}
```

---

### Option C: Modal

#### Function Name

```javascript
function initServiceModal() { ... }
```

#### HTML Structure

```html
<!-- Trigger buttons (on each service card) -->
<button class="btn btn-outline modal-trigger"
        data-service="web-dev"
        data-title="Web Application Development"
        data-description="We design, build, and deploy modern..."
        data-features="Custom web apps,Responsive design,E-commerce,CMS,PWA">
    Learn More
</button>

<!-- Modal (single, reused for all services) -->
<div id="service-modal" class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-container">
        <button class="modal-close" id="modal-close">&times;</button>
        <h2 id="modal-title"></h2>
        <p id="modal-description"></p>
        <h4>What's Included:</h4>
        <ul id="modal-features"></ul>
        <a href="contact.html" class="btn btn-primary">Request a Quote</a>
    </div>
</div>
```

#### Step-by-Step Behavior

| Step | User Action | Expected Result |
| ---- | ----------- | --------------- |
| 1 | Page loads | Modal is hidden (`display: none`). |
| 2 | User clicks a **"Learn More"** button on a service card | Modal appears with an overlay. Modal content is populated with that service's data. Background scroll is disabled. |
| 3 | User clicks the **✕ close button** | Modal closes. Background scroll re-enabled. |
| 4 | User clicks the **dark overlay** (outside the modal) | Modal closes. |
| 5 | User presses the **Escape** key | Modal closes. |

#### Implementation Guide

```javascript
function initServiceModal() {
    const triggers = document.querySelectorAll('.modal-trigger');
    const modal = document.getElementById('service-modal');
    const closeBtn = document.getElementById('modal-close');
    const overlay = document.querySelector('.modal-overlay');

    // Guard clause
    if (!modal || triggers.length === 0) return;

    // Open modal when trigger is clicked
    triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            // Get data from button attributes
            const title = this.getAttribute('data-title');
            const description = this.getAttribute('data-description');
            const features = this.getAttribute('data-features').split(',');

            // Populate modal content
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-description').textContent = description;

            // Build features list
            const featuresList = document.getElementById('modal-features');
            featuresList.innerHTML = '';
            features.forEach(function (feature) {
                const li = document.createElement('li');
                li.textContent = feature.trim();
                featuresList.appendChild(li);
            });

            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent bg scroll
        });
    });

    // Close modal — close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal — overlay click
    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    // Close modal — Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scroll
    }
}
```

#### Required CSS

```css
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    align-items: center;
    justify-content: center;
}

.modal.active {
    display: flex;
}

.modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
}

.modal-container {
    position: relative;
    background: var(--color-white);
    border-radius: var(--radius-lg);
    padding: var(--space-2xl);
    max-width: 600px;
    width: 90%;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: var(--shadow-lg);
    z-index: 1001;
}

.modal-close {
    position: absolute;
    top: var(--space-md);
    right: var(--space-md);
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: var(--color-text-light);
    line-height: 1;
}

.modal-close:hover {
    color: var(--color-error);
}
```

#### Common Mistakes (All 3 Options)

| ❌ Mistake | ✅ Fix |
| ---------- | ------ |
| Not using a guard clause — JS errors on pages without these elements | Always check `if (!element) return;` at the top of the function |
| Putting service-specific JS on every page | The guard clause handles this — the function safely exits if elements aren't found |
| Forgetting to prevent background scrolling when modal opens | Set `document.body.style.overflow = 'hidden'` on open, `''` on close |
| Not handling Escape key for modal close | Add `document.addEventListener('keydown', ...)` for Escape |

---
---

## 5. BONUS: Scroll-to-Top Button — 1 mark

> **Pages:** ALL pages  
> **File:** `assets/js/main.js`

### Function Name

```javascript
function initScrollToTop() { ... }
```

### HTML to Add (before `</body>`)

```html
<button id="scroll-top-btn" class="scroll-top-btn" aria-label="Scroll to top">
    ↑
</button>
```

### Behavior

| Step | User Action | Expected Result |
| ---- | ----------- | --------------- |
| 1 | Page loads | Button is hidden (opacity: 0, pointer-events: none). |
| 2 | User **scrolls down past 300px** | Button fades in (bottom-right corner). |
| 3 | User clicks the button | Page smoothly scrolls to the top. |
| 4 | User **scrolls back to top** | Button fades out. |

### Implementation

```javascript
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-top-btn');
    if (!scrollBtn) return;

    // Show/hide based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    // Scroll to top on click
    scrollBtn.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
```

### CSS

```css
.scroll-top-btn {
    position: fixed;
    bottom: var(--space-xl);
    right: var(--space-xl);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--color-accent);
    color: var(--color-white);
    border: none;
    font-size: 1.25rem;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: var(--transition-normal);
    box-shadow: var(--shadow-md);
    z-index: 99;
}

.scroll-top-btn.visible {
    opacity: 1;
    pointer-events: auto;
}

.scroll-top-btn:hover {
    background: var(--color-accent-hover);
    transform: translateY(-3px);
}
```

---

## 6. BONUS: Navbar Scroll Effect — 1 mark

> **Pages:** ALL pages

### Function Name

```javascript
function initNavScroll() { ... }
```

### Behavior
When user scrolls past 50px, add a shadow and slightly change the navbar background to indicate it's "floating."

### Implementation

```javascript
function initNavScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}
```

### CSS

```css
#main-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
    transition: var(--transition-normal);
    background-color: var(--color-primary);
}

#main-header.scrolled {
    background-color: rgba(10, 31, 63, 0.95);
    box-shadow: var(--shadow-lg);
}
```

---

## 7. BONUS: Portfolio Filtering — 2 marks

> **Page:** `portfolio.html`

### Function Name

```javascript
function initPortfolioFilter() { ... }
```

### HTML Attributes Needed

```html
<!-- Filter buttons -->
<button class="filter-btn active" data-filter="all">All</button>
<button class="filter-btn" data-filter="web">Web Apps</button>
<button class="filter-btn" data-filter="mobile">Mobile</button>
<button class="filter-btn" data-filter="cloud">Cloud</button>
<button class="filter-btn" data-filter="cybersecurity">Cybersecurity</button>

<!-- Portfolio cards (add data-category to each) -->
<div class="portfolio-card" data-category="web"> ... </div>
<div class="portfolio-card" data-category="mobile"> ... </div>
```

### Implementation

```javascript
function initPortfolioFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.portfolio-card');

    if (filterBtns.length === 0) return;

    filterBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(function (b) { b.classList.remove('active'); });
            this.classList.add('active');

            // Show/hide cards
            cards.forEach(function (card) {
                const category = card.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    card.style.display = '';       // Show
                    card.style.opacity = '1';
                } else {
                    card.style.display = 'none';   // Hide
                }
            });
        });
    });
}
```

---

## 8. BONUS: Dark Mode Toggle — 3 marks

> **Pages:** ALL pages

### Function Name

```javascript
function initDarkMode() { ... }
```

### HTML

```html
<button id="dark-mode-toggle" class="dark-mode-toggle" aria-label="Toggle dark mode">
    🌙
</button>
```

### Implementation (with localStorage persistence)

```javascript
function initDarkMode() {
    const toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;

    // Check saved preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggle.textContent = '☀️';
    }

    toggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggle.textContent = isDark ? '☀️' : '🌙';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}
```

### CSS (Dark Mode Overrides)

```css
body.dark-mode {
    --color-background: #0F172A;
    --color-white: #1E293B;
    --color-text: #E2E8F0;
    --color-text-light: #94A3B8;
    --color-primary: #1E293B;
    --color-secondary: #0F172A;
}
```

> **Why this works:** Because the site uses CSS custom properties everywhere, overriding the variables on `body.dark-mode` automatically changes every element that references them — **no additional CSS changes needed**.

---

## 9. BONUS: Smooth Scroll — 1 mark

> Already handled by `html { scroll-behavior: smooth; }` in CSS. For anchor link scrolling with JS offset (to account for fixed navbar):

```javascript
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const target = document.getElementById(targetId);
            if (target) {
                const offset = 80; // navbar height
                const position = target.offsetTop - offset;
                window.scrollTo({ top: position, behavior: 'smooth' });
            }
        });
    });
}
```

---

## 10. BONUS: Typing Animation — 1 mark

> **Page:** Homepage hero section

```javascript
function initTypingEffect() {
    const element = document.getElementById('typing-text');
    if (!element) return;

    const words = ['Digital Future', 'Innovation', 'Growth', 'Success'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const current = words[wordIndex];

        if (isDeleting) {
            element.textContent = current.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = current.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === current.length) {
            speed = 2000; // Pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500; // Pause before next word
        }

        setTimeout(type, speed);
    }

    type();
}
```

---
---

## Testing Checklist

### 🔴 Required Features — Must ALL pass

```
MOBILE NAVIGATION:
[ ] Hamburger icon visible on mobile (below 768px)
[ ] Hamburger hidden on desktop (above 768px)
[ ] Clicking hamburger opens nav menu
[ ] Clicking hamburger again closes nav menu
[ ] Clicking a nav link closes the menu
[ ] Hamburger animates to X when open
[ ] Works on ALL 5 pages

CONTACT FORM VALIDATION:
[ ] Empty form submission shows ALL error messages
[ ] Filling a field correctly clears THAT error
[ ] Invalid email format shows email error
[ ] Valid email format passes validation
[ ] Short message (< 10 chars) shows message error
[ ] All valid fields → success message displayed
[ ] No console errors on other pages (guard clause works)
[ ] Phone field is NOT validated (it's optional)

SERVICE INTERACTION (one of accordion/tabs/modal):
[ ] Interaction works on services.html
[ ] All 5 services are accessible
[ ] Correct content shows for each service
[ ] Visual feedback on active/selected state
[ ] No console errors on other pages
```

### 🟢 Bonus Features

```
[ ] Scroll-to-top button appears after scrolling 300px
[ ] Scroll-to-top button smoothly scrolls to top
[ ] Navbar gets shadow effect on scroll
[ ] Portfolio filter buttons work (all categories)
[ ] Dark mode toggle switches theme
[ ] Dark mode preference persists on page reload
[ ] Typing animation works in hero section
```

---

> ⚠️ **Final Reminder:** Open the browser **Console** (F12 → Console tab) on every page. There should be **zero errors**. Any `Cannot read properties of null` errors mean you're missing a guard clause.

---

*3LOGY Software Development Bootcamp — Quarter Assessment 2026*
