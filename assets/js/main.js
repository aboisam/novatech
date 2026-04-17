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

// ── NAVBAR SCROLL SHADOW ──
const header = document.getElementById("main-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ── BACK TO TOP BUTTON ──
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  // navbar shadow
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // back to top
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});
// ==========================================================
// 5. CONTACT FORM VALIDATION
// ==========================================================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  // ── SUBMIT: validate all fields ──
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // grab inputs
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // grab error spans
    const firstNameError = document.getElementById("first-name-error");
    const lastNameError = document.getElementById("last-name-error");
    const emailError = document.getElementById("email-error");
    const subjectError = document.getElementById("subject-error");
    const messageError = document.getElementById("message-error");

    let isValid = true;

    // ── helpers ──
    function showError(input, errorEl, msg) {
      input.classList.add("error");
      errorEl.textContent = msg;
      isValid = false;
    }

    function clearError(input, errorEl) {
      input.classList.remove("error");
      errorEl.textContent = "";
    }

    // ── reset all errors first ──
    clearError(firstName, firstNameError);
    clearError(lastName, lastNameError);
    clearError(email, emailError);
    clearError(subject, subjectError);
    clearError(message, messageError);

    // ── run each check ──
    if (!firstName.value.trim()) {
      showError(firstName, firstNameError, "First name is required.");
    }

    if (!lastName.value.trim()) {
      showError(lastName, lastNameError, "Last name is required.");
    }

    if (!email.value.trim()) {
      showError(email, emailError, "Email address is required.");
    } else if (!emailPattern.test(email.value.trim())) {
      showError(email, emailError, "Please enter a valid email address.");
    }

    if (!subject.value.trim()) {
      showError(subject, subjectError, "Subject is required.");
    }

    if (!message.value.trim()) {
      showError(message, messageError, "Message is required.");
    }

    // ── all good? submit ──
    if (isValid) {
      alert("Message sent! We will get back to you shortly.");
      contactForm.reset();
    }
  });

  // ── LIVE: clear error as user types ──
  contactForm.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("error");
      const errorEl = document.getElementById(input.id + "-error");
      if (errorEl) errorEl.textContent = "";
    });
  });
}
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

//STATS COUNT-UP ANIMATION
const statNumbers = document.querySelectorAll(".stat-number");
function getNumber(str) {
  return parseInt(str.replace(/\D/g, ""));
}

function getSuffix(str) {
  return str.replace(/[0-9]/g, "").trim();
}

function animateCount(el) {
  const target = getNumber(el.textContent);
  const suffix = getSuffix(el.textContent);
  const duration = 1500;
  const stepTime = 20;
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target + suffix;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
  }, stepTime);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        statNumbers.forEach((el) => animateCount(el));
        observer.disconnect();
      }
    });
  },
  { threshold: 0.3 },
);

const statsSection = document.querySelector("#why-choose-us");
if (statsSection) observer.observe(statsSection);
