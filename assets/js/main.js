/**
 * ==========================================================
 *    NOVATECH SOLUTIONS — Main JavaScript
 *    Company Website Assessment | 3LOGY Bootcamp 2026
 *    ==========================================================
 *
 * @format
 */

/**
 * ============================================================
 * TABLE OF CONTENTS
 * ============================================================
 * 1. DOM ELEMENTS
 * 2. MOBILE NAVIGATION TOGGLE
 * 3. ACTIVE NAV LINK HIGHLIGHT
 * 4. SCROLL EFFECTS (Back to Top, Navbar shadow)
 * 5. CONTACT FORM VALIDATION
 * 6. SERVICE ACCORDION / TABS (Services page)
 * 7. PORTFOLIO FILTER (Portfolio page)
 * 8. UTILITY FUNCTIONS
 * ============================================================
 */

// ==========================================================
// 1. DOM ELEMENTS
// ==========================================================
// ==========================================================
// MOBILE NAVIGATION TOGGLE
// ==========================================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (e) => {
  if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

navMenu.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  navMenu.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

/// ==========================================================
// 3. ACTIVE NAV LINK HIGHLIGHT
// ==========================================================

const navLinks = document.querySelectorAll("#nav-menu .nav-link");
const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  // Remove active class set in HTML
  link.classList.remove("active");

  const linkFile = link.getAttribute("href"); // e.g. "about.html"

  // Check if current URL ends with this link's filename
  const isActive =
    currentPath.endsWith(linkFile) ||
    (linkFile === "index.html" &&
      (currentPath === "/" || currentPath.endsWith("/")));

  if (isActive) {
    link.classList.add("active");
  }
});

// ==========================================================
// 4. SCROLL EFFECTS
// ==========================================================

// TODO (OPTIONAL): Add scroll event listener for:
// - Adding a shadow to the navbar when user scrolls down
// - Showing a "Back to Top" button after scrolling 300px

// ==========================================================
// 5. CONTACT FORM VALIDATION
// ==========================================================

// TODO: Add submit event listener to the contact form
// Validate:
// - Full Name: must not be empty
// - Email: must not be empty + must match a basic email pattern
// - Subject: must not be empty
// - Message: must not be empty
//
// Display errors using the .form-error spans below each input.
// Prevent form submission if validation fails.
//
// Basic email regex pattern:
// const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ==========================================================
// 6. SERVICE ACCORDION / TABS (Services page only)
// ==========================================================

// TODO: Implement ONE of the following on services.html:
//
// OPTION A — Accordion:
// - Each service has a clickable header
// - Clicking expands/collapses the detail content
// - Only one service open at a time (or allow multiple)
//
// OPTION B — Tabs:
// - Tab buttons at the top for each service
// - Clicking a tab shows that service's detailed content
// - Hide all other services
//
// OPTION C — Modal:
// - Each service card has a "Learn More" button
// - Clicking opens a modal/overlay with full service details
// - Include a close button

// ==========================================================
// 7. PORTFOLIO FILTER (Portfolio page only — OPTIONAL)
// ==========================================================

// TODO (OPTIONAL): Filter portfolio items by category
// - Add data-category attributes to each portfolio card
// - Add click events to filter buttons
// - Show/hide cards based on selected category
// - "All" button shows everything

// ==========================================================
// 8. UTILITY FUNCTIONS
// ==========================================================

// TODO: Add any helper functions you need
// Examples:
// - function showError(inputId, message) { ... }
// - function clearErrors() { ... }
// - function scrollToTop() { ... }

// ==========================================================
// INITIALIZATION — Run when DOM is ready
// ==========================================================

document.addEventListener("DOMContentLoaded", function () {
  // TODO: Call your initialization functions here
  // Example:
  // initMobileNav();
  // initScrollEffects();
  // initContactForm();
  // initServiceAccordion();

  console.log("NovaTech Solutions — Website Loaded ✅");
});
