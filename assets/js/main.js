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

// // ==========================================================
// // 1. DOM ELEMENTS
// // ==========================================================
// // ==========================================================
// // MOBILE NAVIGATION TOGGLE
// // ==========================================================

// const menuToggle = document.getElementById("menu-toggle");
// const navMenu = document.getElementById("nav-menu");

// menuToggle.addEventListener("click", () => {
//   const isOpen = navMenu.classList.toggle("open");
//   menuToggle.classList.toggle("open", isOpen);
//   menuToggle.setAttribute("aria-expanded", String(isOpen));
// });

// document.addEventListener("click", (e) => {
//   if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
//     closeMenu();
//   }
// });

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") closeMenu();
// });

// navMenu.querySelectorAll(".nav-link").forEach((link) => {
//   link.addEventListener("click", closeMenu);
// });

// function closeMenu() {
//   navMenu.classList.remove("open");
//   menuToggle.classList.remove("open");
//   menuToggle.setAttribute("aria-expanded", "false");
// }

// /// ==========================================================
// // 3. ACTIVE NAV LINK HIGHLIGHT
// // ==========================================================

// const navLinks = document.querySelectorAll("#nav-menu .nav-link");
// const currentPath = window.location.pathname;

// navLinks.forEach((link) => {
//   // Remove active class set in HTML
//   link.classList.remove("active");

//   const linkFile = link.getAttribute("href"); // e.g. "about.html"

//   // Check if current URL ends with this link's filename
//   const isActive =
//     currentPath.endsWith(linkFile) ||
//     (linkFile === "index.html" &&
//       (currentPath === "/" || currentPath.endsWith("/")));

//   if (isActive) {
//     link.classList.add("active");
//   }
// });

// // ==========================================================
// // 4. SCROLL EFFECTS
// // ==========================================================

// // ── NAVBAR SCROLL SHADOW ──
// const header = document.getElementById("main-header");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 50) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }
// });

// // ── BACK TO TOP BUTTON ──
// const backToTop = document.getElementById("back-to-top");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 300) {
//     backToTop.classList.add("visible");
//   } else {
//     backToTop.classList.remove("visible");
//   }
// });

// backToTop.addEventListener("click", () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// });

// window.addEventListener("scroll", () => {
//   // navbar shadow
//   if (window.scrollY > 50) {
//     header.classList.add("scrolled");
//   } else {
//     header.classList.remove("scrolled");
//   }

//   // back to top
//   if (window.scrollY > 300) {
//     backToTop.classList.add("visible");
//   } else {
//     backToTop.classList.remove("visible");
//   }
// });
// // ==========================================================
// // 5. CONTACT FORM VALIDATION
// // ==========================================================
// const contactForm = document.getElementById("contact-form");

// if (contactForm) {
//   // ── SUBMIT: validate all fields ──
//   contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // grab inputs
//     const firstName = document.getElementById("first-name");
//     const lastName = document.getElementById("last-name");
//     const email = document.getElementById("email");
//     const subject = document.getElementById("subject");
//     const message = document.getElementById("message");

//     // grab error spans
//     const firstNameError = document.getElementById("first-name-error");
//     const lastNameError = document.getElementById("last-name-error");
//     const emailError = document.getElementById("email-error");
//     const subjectError = document.getElementById("subject-error");
//     const messageError = document.getElementById("message-error");

//     let isValid = true;

//     // ── helpers ──
//     function showError(input, errorEl, msg) {
//       input.classList.add("error");
//       errorEl.textContent = msg;
//       isValid = false;
//     }

//     function clearError(input, errorEl) {
//       input.classList.remove("error");
//       errorEl.textContent = "";
//     }

//     // ── reset all errors first ──
//     clearError(firstName, firstNameError);
//     clearError(lastName, lastNameError);
//     clearError(email, emailError);
//     clearError(subject, subjectError);
//     clearError(message, messageError);

//     // ── run each check ──
//     if (!firstName.value.trim()) {
//       showError(firstName, firstNameError, "First name is required.");
//     }

//     if (!lastName.value.trim()) {
//       showError(lastName, lastNameError, "Last name is required.");
//     }

//     if (!email.value.trim()) {
//       showError(email, emailError, "Email address is required.");
//     } else if (!emailPattern.test(email.value.trim())) {
//       showError(email, emailError, "Please enter a valid email address.");
//     }

//     if (!subject.value.trim()) {
//       showError(subject, subjectError, "Subject is required.");
//     }

//     if (!message.value.trim()) {
//       showError(message, messageError, "Message is required.");
//     }

//     // ── all good? submit ──
//     if (isValid) {
//       alert("Message sent! We will get back to you shortly.");
//       contactForm.reset();
//     }
//   });

//   // ── LIVE: clear error as user types ──
//   contactForm.querySelectorAll("input, textarea").forEach((input) => {
//     input.addEventListener("input", () => {
//       input.classList.remove("error");
//       const errorEl = document.getElementById(input.id + "-error");
//       if (errorEl) errorEl.textContent = "";
//     });
//   });
// }
// // ==========================================================
// // 6. SERVICE ACCORDION / TABS (Services page only)
// // ==========================================================

// const accordion = document.querySelector(".accordion");

// accordion.addEventListener("click", (e) => {
//   const trigger = e.target.closest(".accordion-trigger");
//   if (!trigger) return;

//   const item = trigger.closest(".accordion-item");
//   const isActive = item.classList.contains("active");

//   // Collapse all
//   accordion.querySelectorAll(".accordion-item").forEach((i) => {
//     i.classList.remove("active");
//     i.querySelector(".accordion-trigger").setAttribute(
//       "aria-expanded",
//       "false",
//     );
//     i.querySelector(".accordion-icon").textContent = "+";
//   });

//   // Expand clicked (unless it was already open)
//   if (!isActive) {
//     item.classList.add("active");
//     trigger.setAttribute("aria-expanded", "true");
//     trigger.querySelector(".accordion-icon").textContent = "−";
//   }
// });

// // ==========================================================
// // 7. PORTFOLIO FILTER (Portfolio page only — OPTIONAL)
// // ==========================================================

// const filterBtns = document.querySelectorAll(".filter-btn");
// const portfolioItems = document.querySelectorAll(
//   "#portfolio-items .portfolio-card",
// );

// filterBtns.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     // Update active button
//     filterBtns.forEach((b) => b.classList.remove("active"));
//     btn.classList.add("active");

//     const filter = btn.dataset.filter;

//     portfolioItems.forEach((card) => {
//       const match = filter === "all" || card.dataset.category === filter;
//       card.classList.toggle("hidden", !match);
//     });
//   });
// });

// // ==========================================================
// // 8. UTILITY FUNCTIONS
// // ==========================================================

// // ── Form validation helpers ──────────────────────────────

// function showError(inputId, message) {
//   const input = document.getElementById(inputId);
//   const error = document.getElementById(inputId + "-error");
//   if (input) input.classList.add("input-error");
//   if (error) error.textContent = message;
// }

// function clearError(inputId) {
//   const input = document.getElementById(inputId);
//   const error = document.getElementById(inputId + "-error");
//   if (input) input.classList.remove("input-error");
//   if (error) error.textContent = "";
// }

// function clearErrors() {
//   ["first-name", "last-name", "email", "phone", "subject", "message"].forEach(
//     clearError,
//   );
// }

// function isValidEmail(value) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
// }

// function isValidPhone(value) {
//   // Optional field — allow empty, but validate format if filled
//   return value === "" || /^[+\d\s\-()]{7,15}$/.test(value);
// }

// // ── Form submit handler ──────────────────────────────────

// function validateContactForm(e) {
//   e.preventDefault();
//   clearErrors();

//   const firstName = document.getElementById("first-name").value.trim();
//   const lastName = document.getElementById("last-name").value.trim();
//   const email = document.getElementById("email").value.trim();
//   const phone = document.getElementById("phone").value.trim();
//   const subject = document.getElementById("subject").value.trim();
//   const message = document.getElementById("message").value.trim();

//   let hasError = false;

//   if (!firstName) {
//     showError("first-name", "First name is required.");
//     hasError = true;
//   }
//   if (!lastName) {
//     showError("last-name", "Last name is required.");
//     hasError = true;
//   }
//   if (!email) {
//     showError("email", "Email address is required.");
//     hasError = true;
//   } else if (!isValidEmail(email)) {
//     showError("email", "Please enter a valid email address.");
//     hasError = true;
//   }
//   if (!isValidPhone(phone)) {
//     showError("phone", "Please enter a valid phone number.");
//     hasError = true;
//   }
//   if (!subject) {
//     showError("subject", "Subject is required.");
//     hasError = true;
//   }
//   if (!message) {
//     showError("message", "Message cannot be empty.");
//     hasError = true;
//   }

//   if (!hasError) {
//     showSuccess();
//   }
// }

// function showSuccess() {
//   const form = document.getElementById("contact-form");
//   form.reset();
//   clearErrors();
//   form.innerHTML = `
//     <div class="form-success">
//       <p>✓ Your message has been sent. We'll be in touch soon!</p>
//     </div>`;
// }

// // ── Scroll helper ────────────────────────────────────────

// function scrollToTop() {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// }

// // ── Init ─────────────────────────────────────────────────

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", validateContactForm);

// const backToTop = document.getElementById("back-to-top");
// if (backToTop) backToTop.addEventListener("click", scrollToTop);

// // ==========================================================
// // INITIALIZATION — Run when DOM is ready
// // ==========================================================

// document.addEventListener("DOMContentLoaded", function () {
//   initMobileNav();
//   initScrollEffects();
//   initBackToTop();

//   // Page-specific inits — each checks if the element exists first
//   if (document.getElementById("contact-form")) initContactForm();
//   if (document.getElementById("portfolio-items")) initPortfolioFilter();
//   if (document.querySelector(".accordion")) initAccordion();

//   console.log("NovaTech Solutions — Website Loaded ✅");
// });

// // ── STATS COUNT-UP ANIMATION ──
// const statNumbers = document.querySelectorAll(".stat-num");

// // extract the number from "120+" or "97%"
// function getNumber(str) {
//   return parseInt(str.replace(/\D/g, ""));
// }

// // extract the suffix "+" or "%" or ""
// function getSuffix(str) {
//   return str.replace(/[0-9]/g, "").trim();
// }

// function animateCount(el) {
//   const target = getNumber(el.textContent);
//   const suffix = getSuffix(el.textContent);
//   const duration = 1500; // total animation time in ms
//   const stepTime = 20; // update every 20ms
//   const steps = duration / stepTime;
//   const increment = target / steps;
//   let current = 0;

//   const timer = setInterval(() => {
//     current += increment;

//     if (current >= target) {
//       el.textContent = target + suffix; // snap to exact final value
//       clearInterval(timer);
//     } else {
//       el.textContent = Math.floor(current) + suffix;
//     }
//   }, stepTime);
// }

// // ── trigger when section scrolls into view ──
// const statsSection = document.querySelector("#why-choose-us");

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         statNumbers.forEach(animateCount);
//         observer.disconnect(); // run once only, not every scroll
//       }
//     });
//   },
//   { threshold: 0.3 },
// ); // trigger when 30% of section is visible

// if (statsSection) observer.observe(statsSection);

// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         statNumbers.forEach((el) => animateCount(el));
//         observer.disconnect();
//       }
//     });
//   },
//   { threshold: 0.3 },
// );

// const statsSection = document.querySelector("#why-choose-us");
// if (statsSection) observer.observe(statsSection);

/**
 * ==========================================================
 *    NOVATECH SOLUTIONS — Main JavaScript (FIXED)
 *    Bug fixes:
 *    1. Accordion & contact-form listeners crash pages that lack those elements
 *    2. Stats count-up: duplicate const declarations + wrong data source
 *    3. Card-icon SVG fill vs stroke mismatch (see CSS note at bottom)
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

console.log("NovaTech Solutions — Website Loaded ✅");
