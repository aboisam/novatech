/** @format */

// /**
//  * ==========================================================
//  *    NOVATECH SOLUTIONS — Main JavaScript
//  *    Company Website Assessment | 3LOGY Bootcamp 2026
//  *    ==========================================================
//  *
//  * @format
//  */

// /**
//  * ============================================================
//  * TABLE OF CONTENTS
//  * ============================================================
//  * 1. DOM ELEMENTS
//  * 2. MOBILE NAVIGATION TOGGLE
//  * 3. ACTIVE NAV LINK HIGHLIGHT
//  * 4. SCROLL EFFECTS (Back to Top, Navbar shadow)
//  * 5. CONTACT FORM VALIDATION
//  * 6. SERVICE ACCORDION / TABS (Services page)
//  * 7. PORTFOLIO FILTER (Portfolio page)
//  * 8. UTILITY FUNCTIONS
//  * ============================================================
//  */

/**
 * ==========================================================
 *
 * ==========================================================
 * @format
 */

// ==========================================================
// 1. MOBILE NAVIGATION TOGGLE
// ==========================================================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
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
}

function closeMenu() {
  if (!navMenu || !menuToggle) return;
  navMenu.classList.remove("open");
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}

// ==========================================================
// 2. ACTIVE NAV LINK HIGHLIGHT
// ==========================================================

const navLinks = document.querySelectorAll("#nav-menu .nav-link");
const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  link.classList.remove("active");
  const linkFile = link.getAttribute("href");
  const isActive =
    currentPath.endsWith(linkFile) ||
    (linkFile === "index.html" &&
      (currentPath === "/" || currentPath.endsWith("/")));
  if (isActive) link.classList.add("active");
});

// ==========================================================
// 3. SCROLL EFFECTS (Navbar shadow + Back to Top)
// ==========================================================

const header = document.getElementById("main-header");
const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("scrolled", window.scrollY > 50);
  }
  if (backToTop) {
    backToTop.classList.toggle("visible", window.scrollY > 300);
  }
});

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==========================================================
// 4. CONTACT FORM VALIDATION
// FIX: Wrapped in existence check so it doesn't crash other pages
// ==========================================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", validateContactForm);

  contactForm.querySelectorAll("input, textarea").forEach((input) => {
    input.addEventListener("input", () => {
      input.classList.remove("error");
      const errorEl = document.getElementById(input.id + "-error");
      if (errorEl) errorEl.textContent = "";
    });
  });
}

function validateContactForm(e) {
  e.preventDefault();
  clearErrors();

  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone")
    ? document.getElementById("phone").value.trim()
    : "";
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  let hasError = false;

  if (!firstName) {
    showError("first-name", "First name is required.");
    hasError = true;
  }
  if (!lastName) {
    showError("last-name", "Last name is required.");
    hasError = true;
  }
  if (!email) {
    showError("email", "Email address is required.");
    hasError = true;
  } else if (!isValidEmail(email)) {
    showError("email", "Please enter a valid email address.");
    hasError = true;
  }
  if (phone && !isValidPhone(phone)) {
    showError("phone", "Please enter a valid phone number.");
    hasError = true;
  }
  if (!subject) {
    showError("subject", "Subject is required.");
    hasError = true;
  }
  if (!message) {
    showError("message", "Message cannot be empty.");
    hasError = true;
  }

  if (!hasError) showSuccess();
}

function showError(inputId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(inputId + "-error");
  if (input) input.classList.add("error");
  if (error) error.textContent = message;
}

function clearError(inputId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(inputId + "-error");
  if (input) input.classList.remove("error");
  if (error) error.textContent = "";
}

function clearErrors() {
  ["first-name", "last-name", "email", "phone", "subject", "message"].forEach(
    clearError,
  );
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhone(value) {
  return value === "" || /^[+\d\s\-()]{7,15}$/.test(value);
}

function showSuccess() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  form.reset();
  clearErrors();
  form.innerHTML = `
    <div class="form-success">
      <p>✓ Your message has been sent. We'll be in touch soon!</p>
    </div>`;
}

// ==========================================================
// 5. ACCORDION (Services page only)
// FIX: Guarded with existence check so missing element
//      doesn't throw and crash the whole script
// ==========================================================

const accordion = document.querySelector(".accordion");

if (accordion) {
  accordion.addEventListener("click", (e) => {
    const trigger = e.target.closest(".accordion-trigger");
    if (!trigger) return;

    const item = trigger.closest(".accordion-item");
    const isActive = item.classList.contains("active");

    accordion.querySelectorAll(".accordion-item").forEach((i) => {
      i.classList.remove("active");
      i.querySelector(".accordion-trigger").setAttribute(
        "aria-expanded",
        "false",
      );
      i.querySelector(".accordion-icon").textContent = "+";
    });

    if (!isActive) {
      item.classList.add("active");
      trigger.setAttribute("aria-expanded", "true");
      trigger.querySelector(".accordion-icon").textContent = "−";
    }
  });
}

// ==========================================================
// 6. PORTFOLIO FILTER (Portfolio page only)
// ==========================================================

document.querySelectorAll(".odometer");
document.querySelectorAll("[data-target]");
const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(
  "#portfolio-items .portfolio-card",
);

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    portfolioItems.forEach((card) => {
      const match = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !match);
    });
  });
});

// ==========================================================
// 7. STATS COUNT-UP ANIMATION
// ==========================================================

function animateCount(odometerEl) {
  const target = parseInt(odometerEl.dataset.target, 10);
  if (isNaN(target)) return;

  // Find the sibling suffix span (e.g. "+" or "%")
  const suffixEl = odometerEl.nextElementSibling;
  const suffix = suffixEl ? suffixEl.textContent : "";

  const duration = 1500; // ms
  const stepTime = 20; // ms per frame
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      odometerEl.textContent = target;
      clearInterval(timer);
    } else {
      odometerEl.textContent = Math.floor(current);
    }
  }, stepTime);
}

const statsSection = document.querySelector("#why-choose-us");

if (statsSection) {
  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelectorAll(".odometer[data-target]")
            .forEach(animateCount);
          statsObserver.disconnect(); // run once only
        }
      });
    },
    { threshold: 0.3 },
  );

  statsObserver.observe(statsSection);
}
