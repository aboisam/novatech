# 🎨 NovaTech Solutions — UI Design System

> **Project:** 3LOGY Bootcamp Quarter Assessment — Company Website  
> **Company:** NovaTech Solutions  
> **Tagline:** *"Empowering Africa's Digital Future — One Solution at a Time"*

---

## 1. Color Palette

| Token              | Name             | HEX Code    | Usage                                          |
| ------------------- | ---------------- | ----------- | ---------------------------------------------- |
| `--color-primary`   | **Deep Navy**    | `#0A1F3F`   | Headers, navbar, footer, primary surfaces       |
| `--color-secondary` | **Midnight Blue**| `#132E5B`   | Cards, secondary sections, dark overlays         |
| `--color-accent`    | **Electric Blue**| `#2D7FF9`   | Buttons, links, CTAs, active states              |
| `--color-background`| **Snow White**   | `#F4F6F9`   | Page background, card surfaces, light sections   |
| `--color-text`      | **Dark Charcoal**| `#1A1A2E`   | Body text, paragraphs                            |
| `--color-error`     | **Crimson Red**  | `#E53935`   | Error messages, form validation, alerts          |
| `--color-success`   | **Fresh Green**  | `#00C853`   | Success states, confirmation messages, highlights|
| `--color-warning`   | **Amber**        | `#FFB300`   | Warning states, caution messages                 |
| `--color-white`     | **White**        | `#FFFFFF`   | Text on dark backgrounds, clean surfaces         |
| `--color-text-light`| **Slate Grey**   | `#6B7280`   | Captions, muted text, placeholders               |

### Accent Variations (for hover & focus)

| Token                   | HEX Code    | Usage                          |
| ----------------------- | ----------- | ------------------------------ |
| `--color-accent-hover`  | `#1B6AE0`   | Hovered buttons & links        |
| `--color-accent-light`  | `#E8F1FE`   | Light accent backgrounds/badges|
| `--color-primary-hover` | `#0D2A52`   | Hovered primary elements       |

---

## 2. Typography — Google Fonts Pairing

### Recommended Pairing

| Role      | Font Family        | Weights to Import        | Style Notes                            |
| --------- | ------------------ | ------------------------ | -------------------------------------- |
| **Heading** | **Space Grotesk** | 500 (Medium), 700 (Bold) | Modern, geometric, techy feel          |
| **Body**    | **Inter**          | 400 (Regular), 500 (Medium), 600 (Semi-Bold) | Clean, highly readable, professional |

### Google Fonts `@import` Link — Ready to Use

```css
/* Paste this at the VERY TOP of your CSS file (before any other rule) */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap');
```

### Alternative `<link>` tag (for HTML `<head>`)

```html
<!-- Paste this inside your <head> tag -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">
```

---

## 3. Font Size Scale

| Level       | px     | rem      | CSS Variable       | Font Family    | Weight |
| ----------- | ------ | -------- | ------------------- | -------------- | ------ |
| **H1**      | 48px   | 3rem     | `--fs-h1`           | Space Grotesk  | 700    |
| **H2**      | 36px   | 2.25rem  | `--fs-h2`           | Space Grotesk  | 700    |
| **H3**      | 28px   | 1.75rem  | `--fs-h3`           | Space Grotesk  | 700    |
| **H4**      | 22px   | 1.375rem | `--fs-h4`           | Space Grotesk  | 500    |
| **Body**    | 16px   | 1rem     | `--fs-body`         | Inter          | 400    |
| **Small**   | 14px   | 0.875rem | `--fs-small`        | Inter          | 400    |
| **Caption** | 12px   | 0.75rem  | `--fs-caption`      | Inter          | 500    |

### Line Heights

| Element   | Line Height |
| --------- | ----------- |
| Headings  | 1.2         |
| Body      | 1.6         |
| Small     | 1.5         |

---

## 4. Button Styles

### 4.1 Primary Button
| Property       | Default State                         | Hover State                            |
| -------------- | ------------------------------------- | -------------------------------------- |
| Background     | `#2D7FF9` (Electric Blue)             | `#1B6AE0` (darker)                    |
| Text Color     | `#FFFFFF` (White)                     | `#FFFFFF` (White)                      |
| Border         | none                                  | none                                   |
| Shadow         | `0 4px 14px rgba(45, 127, 249, 0.35)` | `0 6px 20px rgba(45, 127, 249, 0.45)` |
| Transform      | none                                  | `translateY(-2px)`                     |

### 4.2 Secondary Button
| Property       | Default State                         | Hover State                            |
| -------------- | ------------------------------------- | -------------------------------------- |
| Background     | `#0A1F3F` (Deep Navy)                 | `#0D2A52` (lighter navy)              |
| Text Color     | `#FFFFFF` (White)                     | `#FFFFFF` (White)                      |
| Border         | none                                  | none                                   |
| Shadow         | `0 4px 14px rgba(10, 31, 63, 0.25)`  | `0 6px 20px rgba(10, 31, 63, 0.35)`  |
| Transform      | none                                  | `translateY(-2px)`                     |

### 4.3 Outline Button
| Property       | Default State                         | Hover State                            |
| -------------- | ------------------------------------- | -------------------------------------- |
| Background     | `transparent`                         | `#2D7FF9` (Electric Blue)             |
| Text Color     | `#2D7FF9` (Electric Blue)             | `#FFFFFF` (White)                      |
| Border         | `2px solid #2D7FF9`                   | `2px solid #2D7FF9`                   |
| Shadow         | none                                  | `0 4px 14px rgba(45, 127, 249, 0.35)` |
| Transform      | none                                  | `translateY(-2px)`                     |

---

## 5. Spacing Scale

| Token       | Value  | Usage                     |
| ----------- | ------ | ------------------------- |
| `--space-xs`  | 4px    | Tight inner padding       |
| `--space-sm`  | 8px    | Small gaps                |
| `--space-md`  | 16px   | Default padding/margins   |
| `--space-lg`  | 24px   | Section inner spacing     |
| `--space-xl`  | 32px   | Between components        |
| `--space-2xl` | 48px   | Between major sections    |
| `--space-3xl` | 64px   | Hero / large section gaps |
| `--space-4xl` | 96px   | Page-level top/bottom     |

---

## 6. Additional Tokens

### Border Radius
| Token              | Value | Usage                        |
| ------------------ | ----- | ---------------------------- |
| `--radius-sm`      | 4px   | Subtle rounding              |
| `--radius-md`      | 8px   | Buttons, inputs, cards       |
| `--radius-lg`      | 16px  | Large cards, modals          |
| `--radius-full`    | 9999px| Pills, avatars, badges       |

### Shadows
| Token              | Value                                    | Usage                   |
| ------------------ | ---------------------------------------- | ----------------------- |
| `--shadow-sm`      | `0 1px 3px rgba(0, 0, 0, 0.08)`         | Subtle depth            |
| `--shadow-md`      | `0 4px 12px rgba(0, 0, 0, 0.1)`         | Cards, dropdowns        |
| `--shadow-lg`      | `0 8px 30px rgba(0, 0, 0, 0.12)`        | Modals, hero sections   |
| `--shadow-accent`  | `0 4px 14px rgba(45, 127, 249, 0.35)`   | Accent / CTA glow       |

### Transitions
| Token                  | Value                | Usage                 |
| ---------------------- | -------------------- | --------------------- |
| `--transition-fast`    | `all 0.15s ease`     | Micro-interactions    |
| `--transition-normal`  | `all 0.3s ease`      | Buttons, cards        |
| `--transition-slow`    | `all 0.5s ease`      | Page elements, modals |

---

## 7. ✅ Ready-to-Use CSS `:root` Variables Block

> [!IMPORTANT]
> **Instructions:** Copy the entire block below and paste it into a new `styles.css` file. The `@import` for Google Fonts **MUST** be the very first line — before any other rules, including the `:root` block.

```css
/* ==========================================================
   NOVATECH SOLUTIONS — DESIGN SYSTEM TOKENS
   Company Website Assessment | 3LOGY Bootcamp 2026
   ========================================================== */

/* ── Google Fonts ───────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;700&display=swap');

/* ── Design Tokens (CSS Custom Properties) ──────────────── */
:root {

  /* ─── Color Palette ─────────────────────────────────── */
  --color-primary:        #0A1F3F;
  --color-primary-hover:  #0D2A52;
  --color-secondary:      #132E5B;
  --color-accent:         #2D7FF9;
  --color-accent-hover:   #1B6AE0;
  --color-accent-light:   #E8F1FE;
  --color-background:     #F4F6F9;
  --color-white:          #FFFFFF;
  --color-text:           #1A1A2E;
  --color-text-light:     #6B7280;
  --color-error:          #E53935;
  --color-success:        #00C853;
  --color-warning:        #FFB300;

  /* ─── Typography ────────────────────────────────────── */
  --font-heading:  'Space Grotesk', sans-serif;
  --font-body:     'Inter', sans-serif;

  /* ─── Font Sizes ────────────────────────────────────── */
  --fs-h1:       3rem;        /* 48px */
  --fs-h2:       2.25rem;     /* 36px */
  --fs-h3:       1.75rem;     /* 28px */
  --fs-h4:       1.375rem;    /* 22px */
  --fs-body:     1rem;        /* 16px */
  --fs-small:    0.875rem;    /* 14px */
  --fs-caption:  0.75rem;     /* 12px */

  /* ─── Font Weights ──────────────────────────────────── */
  --fw-regular:   400;
  --fw-medium:    500;
  --fw-semibold:  600;
  --fw-bold:      700;

  /* ─── Line Heights ──────────────────────────────────── */
  --lh-heading:  1.2;
  --lh-body:     1.6;
  --lh-small:    1.5;

  /* ─── Spacing ───────────────────────────────────────── */
  --space-xs:   0.25rem;    /*  4px */
  --space-sm:   0.5rem;     /*  8px */
  --space-md:   1rem;       /* 16px */
  --space-lg:   1.5rem;     /* 24px */
  --space-xl:   2rem;       /* 32px */
  --space-2xl:  3rem;       /* 48px */
  --space-3xl:  4rem;       /* 64px */
  --space-4xl:  6rem;       /* 96px */

  /* ─── Border Radius ─────────────────────────────────── */
  --radius-sm:    4px;
  --radius-md:    8px;
  --radius-lg:    16px;
  --radius-full:  9999px;

  /* ─── Shadows ───────────────────────────────────────── */
  --shadow-sm:     0 1px 3px rgba(0, 0, 0, 0.08);
  --shadow-md:     0 4px 12px rgba(0, 0, 0, 0.1);
  --shadow-lg:     0 8px 30px rgba(0, 0, 0, 0.12);
  --shadow-accent: 0 4px 14px rgba(45, 127, 249, 0.35);

  /* ─── Transitions ───────────────────────────────────── */
  --transition-fast:    all 0.15s ease;
  --transition-normal:  all 0.3s ease;
  --transition-slow:    all 0.5s ease;

  /* ─── Layout ────────────────────────────────────────── */
  --max-width:   1200px;
  --nav-height:  72px;
}


/* ==========================================================
   BASE RESET & GLOBAL STYLES
   ========================================================== */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;              /* 1rem = 16px */
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  font-size: var(--fs-body);
  font-weight: var(--fw-regular);
  line-height: var(--lh-body);
  color: var(--color-text);
  background-color: var(--color-background);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


/* ==========================================================
   TYPOGRAPHY
   ========================================================== */

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  line-height: var(--lh-heading);
  color: var(--color-primary);
}

h1 { font-size: var(--fs-h1); font-weight: var(--fw-bold);   }
h2 { font-size: var(--fs-h2); font-weight: var(--fw-bold);   }
h3 { font-size: var(--fs-h3); font-weight: var(--fw-bold);   }
h4 { font-size: var(--fs-h4); font-weight: var(--fw-medium); }

p {
  margin-bottom: var(--space-md);
  color: var(--color-text);
}

small,
.text-small {
  font-size: var(--fs-small);
  line-height: var(--lh-small);
}

.text-caption {
  font-size: var(--fs-caption);
  font-weight: var(--fw-medium);
  color: var(--color-text-light);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

a {
  color: var(--color-accent);
  text-decoration: none;
  transition: var(--transition-fast);
}

a:hover {
  color: var(--color-accent-hover);
}


/* ==========================================================
   BUTTON STYLES
   ========================================================== */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-sm);
  padding: 0.75rem 1.75rem;
  font-family: var(--font-body);
  font-size: var(--fs-body);
  font-weight: var(--fw-semibold);
  line-height: 1;
  border: 2px solid transparent;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: var(--transition-normal);
  text-decoration: none;
}

/* ─── Primary Button ──────────────────────────────────── */
.btn-primary {
  background-color: var(--color-accent);
  color: var(--color-white);
  border-color: var(--color-accent);
  box-shadow: var(--shadow-accent);
}

.btn-primary:hover {
  background-color: var(--color-accent-hover);
  border-color: var(--color-accent-hover);
  box-shadow: 0 6px 20px rgba(45, 127, 249, 0.45);
  transform: translateY(-2px);
}

/* ─── Secondary Button ────────────────────────────────── */
.btn-secondary {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary);
  box-shadow: 0 4px 14px rgba(10, 31, 63, 0.25);
}

.btn-secondary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
  box-shadow: 0 6px 20px rgba(10, 31, 63, 0.35);
  transform: translateY(-2px);
}

/* ─── Outline Button ──────────────────────────────────── */
.btn-outline {
  background-color: transparent;
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.btn-outline:hover {
  background-color: var(--color-accent);
  color: var(--color-white);
  box-shadow: var(--shadow-accent);
  transform: translateY(-2px);
}


/* ==========================================================
   UTILITY CLASSES (Bonus — Optional Use)
   ========================================================== */

.container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--space-lg);
}

.section {
  padding: var(--space-4xl) 0;
}

.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-xl);
  box-shadow: var(--shadow-md);
  transition: var(--transition-normal);
}

.card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.text-center { text-align: center; }
.text-accent { color: var(--color-accent); }
.text-muted  { color: var(--color-text-light); }
.bg-primary  { background-color: var(--color-primary); }
.bg-white    { background-color: var(--color-white); }
.bg-light    { background-color: var(--color-background); }
```

---

## 8. Quick Reference — Visual Summary

```
┌─────────────────────────────────────────────────────┐
│                    NovaTech Solutions                │
│                    DESIGN SYSTEM                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  COLORS                                             │
│  ■ #0A1F3F  Deep Navy (Primary)                     │
│  ■ #132E5B  Midnight Blue (Secondary)               │
│  ■ #2D7FF9  Electric Blue (Accent)                  │
│  □ #F4F6F9  Snow White (Background)                 │
│  ■ #1A1A2E  Dark Charcoal (Text)                    │
│  ■ #E53935  Crimson Red (Error)                     │
│  ■ #00C853  Fresh Green (Success)                   │
│  ■ #FFB300  Amber (Warning)                         │
│                                                     │
│  FONTS                                              │
│  Headings → Space Grotesk (500, 700)                │
│  Body     → Inter (400, 500, 600)                   │
│                                                     │
│  SCALE                                              │
│  H1: 48px · H2: 36px · H3: 28px · H4: 22px         │
│  Body: 16px · Small: 14px · Caption: 12px           │
│                                                     │
│  BUTTONS                                            │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ Primary  │ │Secondary │ │ Outline  │            │
│  │ #2D7FF9  │ │ #0A1F3F  │ │ bordered │            │
│  └──────────┘ └──────────┘ └──────────┘            │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

> [!TIP]
> **How to use this system:** Copy the CSS block from Section 7 into the top of your `styles.css` file. Then reference any variable using `var(--variable-name)` throughout your stylesheet. This ensures consistency across your entire website.

> [!IMPORTANT]
> **The `@import` for Google Fonts MUST be the very first line** in your CSS file — before any other rules, including the `:root` block. The code above is already in the correct order.

---

*Design System prepared for the 3LOGY Software Development Bootcamp — Quarter Assessment 2026*
