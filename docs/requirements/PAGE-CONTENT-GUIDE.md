# 📖 NovaTech Solutions — Page-by-Page Content & Layout Guide

> **Purpose:** This document provides the **exact content, layout instructions, and interaction requirements** for every section of every page. Students should use this as their primary reference while building. **No copywriting required — everything is provided.**

---

## Quick Navigation

| Page | Jump Link |
| ---- | --------- |
| Homepage | [→ Go to Homepage](#page-1-homepage--indexhtml) |
| About Us | [→ Go to About](#page-2-about-us--abouthtml) |
| Services | [→ Go to Services](#page-3-services--serviceshtml) |
| Portfolio | [→ Go to Portfolio](#page-4-portfolio--portfoliohtml) |
| Contact | [→ Go to Contact](#page-5-contact--contacthtml) |
| Shared Components | [→ Go to Shared](#shared-components--navigation--footer) |

---
---

# SHARED COMPONENTS — Navigation & Footer

> These components appear on **every page** and must be consistent across the entire website.

---

## Navigation Bar

> **Status:** 🔴 REQUIRED (4 marks in Cross-Cutting)

### Layout
- **Position:** Fixed to top of page (stays visible on scroll)
- **Height:** 72px (`var(--nav-height)`)
- **Background:** `var(--color-primary)` (#0A1F3F Deep Navy)
- **Width:** Full viewport width
- **Inner content:** Constrained to `var(--max-width)` (1200px) using `.container`
- **Arrangement:** Logo on the left, nav links on the right (`flex-between`)

### Content

**Logo Area (left side):**
```
NovaTech
```
- "Nova" in white, "Tech" in accent blue (`var(--color-accent)`)
- Font: Space Grotesk, 700 weight, ~24px
- Links back to `index.html`
- *Or use a logo image if you create one*

**Navigation Links (right side):**
```
Home     About     Services     Portfolio     Contact
```
- Link to: `index.html`, `about.html`, `services.html`, `portfolio.html`, `contact.html`
- Text color: `var(--color-white)`
- Hover: `var(--color-accent)`
- Active page: Underline or accent color to indicate current page

**Mobile Hamburger Button (visible below 768px):**
- Three horizontal lines (hamburger icon)
- Clicking opens/closes the mobile nav menu
- Mobile menu: Full-width dropdown or slide-in panel with stacked links

### JavaScript Interaction
- **Hamburger toggle:** Click hamburger → toggle `.active` class on nav menu
- **Close on click:** Clicking any nav link closes the mobile menu
- **Scroll shadow (BONUS):** Add a box-shadow to the header when user scrolls past 50px

---

## Footer

> **Status:** 🔴 REQUIRED (3 marks in Cross-Cutting)

### Layout
- **Background:** `var(--color-primary)` (#0A1F3F Deep Navy)
- **Text color:** `var(--color-white)` and `var(--color-text-light)` for muted text
- **Padding:** `var(--space-3xl)` top and bottom (64px)
- **Inner layout:** 4-column grid on desktop → 2-column on tablet → 1-column stacked on mobile

### Content — 4 Columns

**Column 1 — Brand:**
```
Heading: NovaTech Solutions
Text:    Empowering Africa's Digital Future — One Solution at a Time.
         We deliver world-class technology solutions to businesses across 
         Nigeria and West Africa.
```

**Column 2 — Quick Links:**
```
Heading: Quick Links

- Home
- About Us
- Services
- Portfolio
- Contact
```
*(Each links to the corresponding HTML page)*

**Column 3 — Services:**
```
Heading: Our Services

- Web Development
- Cloud & DevOps
- Mobile Apps
- Cybersecurity
- Tech Training
```
*(Each links to `services.html`)*

**Column 4 — Contact Info:**
```
Heading: Get in Touch

📍  14 Ademola Adetokunbo Crescent, Wuse 2, Abuja, FCT, Nigeria
📞  +234 (0) 812 345 6789
✉️   info@novatechsolutions.com.ng
🕐  Mon – Fri, 8:00 AM – 5:00 PM (WAT)
```

**Bottom Bar (full width, below the 4 columns):**
```
Left:   © 2026 NovaTech Solutions. All rights reserved.
Right:  Social media icons → LinkedIn, Twitter/X, Email
```
- Separated from columns by a thin border or subtle line
- Social icons link to: `linkedin.com/company/novatechsolutions`, `twitter.com/NovaTechAbuja`, `mailto:info@novatechsolutions.com.ng`

---
---

# PAGE 1: Homepage — `index.html`

> **Page Purpose:** Introduce visitors to NovaTech Solutions, showcase key services, build credibility with stats, and drive visitors to explore services or make contact.

---

## Section 1: Hero Section

> **Status:** 🔴 REQUIRED (7 marks)

### Layout
- **Width:** Full viewport width (edge to edge)
- **Height:** 100vh (full screen) or minimum 600px
- **Background:** Dark gradient overlay on top of a background image, or a pure CSS gradient
- **Suggested gradient:** `linear-gradient(135deg, #0A1F3F 0%, #132E5B 50%, #2D7FF9 100%)`
- **Content:** Centered vertically and horizontally
- **Text alignment:** Center or left-aligned

### Content
```
Caption (above heading):  WELCOME TO NOVATECH SOLUTIONS
Heading (H1):             Empowering Africa's Digital Future
Subheading:               We design, build, and deploy world-class software solutions 
                          that help businesses across Nigeria and West Africa scale, 
                          innovate, and thrive in the digital age.
Button 1 (Primary):       Explore Our Services        → links to services.html
Button 2 (Outline):       Get in Touch                → links to contact.html
```

### Visual Notes
- Caption: Use `.text-caption` class — uppercase, small, letter-spaced, accent color
- H1: White text, Space Grotesk Bold, large size
- Subheading: White/light grey text, Inter Regular, max-width ~600px for readability
- Buttons: Side by side with a gap; stack vertically on mobile
- Optional: Subtle floating animation or decorative shapes in the background

---

## Section 2: Services Overview

> **Status:** 🔴 REQUIRED (5 marks)

### Layout
- **Background:** `var(--color-white)` (#FFFFFF)
- **Section padding:** `var(--space-4xl)` (96px) top and bottom
- **Content:** `.container` with `.section-header` + `.grid.grid-3`
- **Cards:** 3 service cards in a responsive grid (stack on mobile)

### Content

**Section Header:**
```
Caption:   WHAT WE DO
Heading:   Our Core Services
Paragraph: From custom web applications to cloud infrastructure, we deliver 
           end-to-end technology solutions that drive real business growth.
```

**Card 1 — Web Development:**
```
Icon:        🌐 (or use an SVG icon)
Heading:     Web Application Development
Description: We build modern, responsive web applications tailored to your 
             business needs — from sleek landing pages to complex enterprise 
             platforms.
Link:        Learn More →     (links to services.html)
```

**Card 2 — Cloud & DevOps:**
```
Icon:        ☁️
Heading:     Cloud Infrastructure & DevOps
Description: We help businesses migrate to the cloud and stay there securely. 
             Our certified engineers manage infrastructure on AWS, Azure, 
             and Google Cloud.
Link:        Learn More →     (links to services.html)
```

**Card 3 — Mobile Apps:**
```
Icon:        📱
Heading:     Mobile App Development
Description: Reach your customers wherever they are. We build native and 
             cross-platform mobile applications that are fast, intuitive, 
             and built for scale.
Link:        Learn More →     (links to services.html)
```

### Visual Notes
- Cards: Use `.card` class with hover lift effect
- Icons: Can be emoji, SVG icons, or simple images in `assets/images/icons/`
- "Learn More →" is a text link styled in accent blue

---

## Section 3: Why Choose Us / Stats

> **Status:** 🔴 REQUIRED (4 marks)

### Layout
- **Background:** `var(--color-background)` (#F4F6F9) — light grey
- **Layout:** 4 stat boxes in a single row (`.grid.grid-4`)
- **Each stat box:** Centered text, large number, descriptive label below

### Content

```
Stat 1:
  Number:  120+
  Label:   Projects Delivered

Stat 2:
  Number:  97%
  Label:   Client Satisfaction

Stat 3:
  Number:  35+
  Label:   Team Members

Stat 4:
  Number:  5+
  Label:   Years of Excellence
```

### Visual Notes
- Numbers: Large format (~48px or `var(--fs-h1)`), `var(--color-accent)`, Space Grotesk Bold
- Labels: `var(--fs-body)` or `var(--fs-small)`, `var(--color-text-light)`
- Optional BONUS: Count-up animation on numbers when section scrolls into view

---

## Section 4: About Preview

> **Status:** 🟡 RECOMMENDED (not separately marked, enhances overall design)

### Layout
- **Background:** `var(--color-white)` (#FFFFFF)
- **Layout:** Two-column split — Image on left, text on right (stack on mobile)
- **Image side:** 50% width, placeholder image or decorative graphic
- **Text side:** 50% width, left-aligned text with CTA

### Content

```
Caption:   WHO WE ARE
Heading:   Building the Future of African Tech
Paragraph: NovaTech Solutions is a fast-growing technology startup headquartered 
           in Abuja, Nigeria. Founded in 2019 by a team of passionate software 
           engineers, we set out with a clear mission: to bridge the digital gap 
           for African businesses by delivering world-class software solutions at 
           accessible price points.
Button:    Learn More About Us   → links to about.html   (btn-outline)
```

---

## Section 5: Testimonial Preview

> **Status:** 🟢 OPTIONAL / BONUS

### Layout
- **Background:** `var(--color-background)` (#F4F6F9)
- **Layout:** Single centered testimonial or a simple 2-3 card row

### Content

```
Section Heading: What Our Clients Say

Testimonial 1:
  Quote:  "NovaTech transformed our entire business operations with their 
           custom inventory management system. Their team was professional, 
           responsive, and delivered ahead of schedule."
  Name:   Chief Olusegun Adeyemi
  Role:   CEO, AgroFresh Nigeria Ltd
  
Testimonial 2:
  Quote:  "The mobile app they built for us has completely changed how we 
           engage with customers. Downloads exceeded 50,000 in the first 
           three months alone."
  Name:   Ngozi Obi
  Role:   Marketing Director, PaySwift Technologies

Testimonial 3:
  Quote:  "Their cybersecurity audit revealed critical vulnerabilities we 
           didn't know existed. NovaTech's team potentially saved us from 
           millions in losses."
  Name:   Alhaji Ibrahim Musa
  Role:   CTO, Sterling Microfinance Bank
```

---

## Section 6: Call to Action

> **Status:** 🔴 REQUIRED (2 marks)

### Layout
- **Background:** `var(--color-primary)` (#0A1F3F Deep Navy) — full width
- **Text:** Centered, white text
- **Single focused block with heading, text, and button**

### Content
```
Heading:   Ready to Transform Your Business?
Paragraph: Let's discuss how NovaTech Solutions can help you achieve your 
           digital goals. Get a free consultation today.
Button:    Contact Us Today   → links to contact.html   (btn-primary, white/accent)
```

---
---

# PAGE 2: About Us — `about.html`

> **Page Purpose:** Tell the NovaTech story, communicate the mission and vision, and introduce the team to build trust and credibility.

---

## Section 1: Page Hero Banner

> **Status:** 🔴 REQUIRED (part of page structure)

### Layout
- **Width:** Full viewport width
- **Height:** 300–400px (not full screen like homepage hero)
- **Background:** `var(--color-primary)` with subtle gradient or pattern
- **Text:** Centered, white

### Content
```
Heading (H1):  About NovaTech Solutions
Subheading:    Discover our story, our mission, and the people behind 
               Africa's next tech revolution.
Breadcrumb:    Home  /  About Us
```

---

## Section 2: Our Story

> **Status:** 🔴 REQUIRED (5 marks)

### Layout
- **Background:** `var(--color-white)`
- **Layout:** Two-column — Image on left, text content on right (stack on mobile)
- **Or:** Single full-width text section with a featured image above

### Content
```
Caption:     OUR STORY
Heading:     From a Small Idea to a Trusted Tech Partner

Paragraph 1: NovaTech Solutions is a fast-growing technology startup headquartered 
              in Abuja, Nigeria. Founded in 2019 by a team of passionate software 
              engineers, we set out with a clear mission: to bridge the digital gap 
              for African businesses by delivering world-class software solutions at 
              accessible price points.

Paragraph 2: From our first project — a simple inventory management tool built for 
              a local retail chain — we have rapidly expanded into a trusted 
              technology partner for startups, SMEs, and government agencies alike. 
              Our diverse team of developers, designers, and cloud architects brings 
              together deep technical expertise with a genuine understanding of the 
              Nigerian business landscape.

Paragraph 3: At NovaTech, we don't just write code; we craft digital experiences 
              that drive real growth. With over 120 successful projects delivered and 
              a client satisfaction rate of 97%, we are proud to be shaping the future 
              of technology in Africa.
```

---

## Section 3: Mission & Vision

> **Status:** 🔴 REQUIRED (4 marks)

### Layout
- **Background:** `var(--color-background)` (#F4F6F9)
- **Layout:** Two cards side by side (`.grid.grid-2`), equal height
- **Each card:** `.card` styling with an icon or accent border at top

### Content

**Mission Card:**
```
Icon/Label:  🎯 Our Mission
Heading:     What Drives Us

Quote text:  "To empower businesses across Africa with innovative, reliable, 
              and affordable technology solutions that accelerate growth, 
              improve efficiency, and create lasting digital impact."
```

**Vision Card:**
```
Icon/Label:  🔭 Our Vision
Heading:     Where We're Headed

Quote text:  "To be West Africa's most trusted technology partner — recognized 
              for technical excellence, transformative innovation, and an 
              unwavering commitment to our clients' success."
```

### Visual Notes
- Use `<blockquote>` for the quote text — style it with an accent left border or large quote marks
- Cards should match in height (use flexbox `align-items: stretch`)

---

## Section 4: Our Values

> **Status:** 🟡 RECOMMENDED

### Layout
- **Background:** `var(--color-white)`
- **Layout:** 4 value items in a grid (`.grid.grid-4`)
- **Each item:** Icon on top, heading, short description

### Content
```
Section Heading: Our Core Values

Value 1:
  Icon:    💡
  Heading: Innovation
  Text:    We embrace emerging technologies and creative thinking to deliver 
           solutions that keep our clients ahead of the curve.

Value 2:
  Icon:    🤝
  Heading: Integrity
  Text:    We build trust through transparent communication, honest pricing, 
           and delivering on every promise we make.

Value 3:
  Icon:    🏆
  Heading: Excellence
  Text:    We hold ourselves to the highest standards of code quality, design, 
           and project delivery — no shortcuts, no compromises.

Value 4:
  Icon:    🌍
  Heading: Impact
  Text:    Every line of code we write aims to create meaningful, lasting 
           change for African businesses and communities.
```

---

## Section 5: Meet the Team

> **Status:** 🔴 REQUIRED (7 marks)

### Layout
- **Background:** `var(--color-background)` (#F4F6F9)
- **Section header:** Centered heading and intro text
- **Team grid:** `.grid.grid-4` on desktop (4 cards per row), `.grid-2` on tablet, stacked on mobile
- **Since there are 5 members:** Use a 3+2 layout or allow the 5th card to be centered below

### Content

**Section Header:**
```
Caption:   THE TEAM
Heading:   Meet the People Behind NovaTech
Paragraph: Our talented team combines deep technical expertise with a passion 
           for solving real-world problems.
```

**Team Member 1:**
```
Image:     Placeholder photo (assets/images/team/adaeze-okonkwo.jpg)
Name:      Adaeze Okonkwo
Role:      CEO & Co-Founder
Bio:       A visionary tech entrepreneur with 10+ years in software 
           engineering and business strategy.
Social:    LinkedIn icon link (optional)
```

**Team Member 2:**
```
Image:     Placeholder photo (assets/images/team/emeka-nwankwo.jpg)
Name:      Emeka Nwankwo
Role:      CTO & Co-Founder
Bio:       Full-stack architect and open-source advocate. Formerly a 
           senior engineer at Andela.
Social:    LinkedIn icon link (optional)
```

**Team Member 3:**
```
Image:     Placeholder photo (assets/images/team/fatima-bello.jpg)
Name:      Fatima Bello
Role:      Lead UI/UX Designer
Bio:       Award-winning designer passionate about creating accessible, 
           human-centered digital products.
Social:    LinkedIn icon link (optional)
```

**Team Member 4:**
```
Image:     Placeholder photo (assets/images/team/chinedu-abiodun.jpg)
Name:      Chinedu Abiodun
Role:      Head of Cloud Engineering
Bio:       AWS-certified solutions architect with expertise in scalable 
           distributed systems.
Social:    LinkedIn icon link (optional)
```

**Team Member 5:**
```
Image:     Placeholder photo (assets/images/team/amara-okafor.jpg)
Name:      Amara Okafor
Role:      Business Development Lead
Bio:       Drives strategic partnerships and client success across Nigeria 
           and the wider region.
Social:    LinkedIn icon link (optional)
```

### Visual Notes
- Team cards: Photo on top (circular or rounded-square), centered text below
- Photo aspect ratio: Square (1:1), use `border-radius: 50%` for circular
- Role: Styled in accent color or muted text
- Hover effect: Subtle scale transform or shadow lift

---

## Section 6: CTA

> **Status:** 🟡 RECOMMENDED

### Content
```
Heading:   Want to Join Our Team?
Paragraph: We're always looking for talented individuals who share our 
           passion for technology and innovation.
Button:    Get in Touch   → links to contact.html
```

---
---

# PAGE 3: Services — `services.html`

> **Page Purpose:** Detail all five core services NovaTech offers, with enough depth to demonstrate expertise, and include an interactive way to explore service details.

---

## Section 1: Page Hero Banner

> **Status:** 🔴 REQUIRED

### Content
```
Heading (H1):  Our Services
Subheading:    End-to-end technology solutions tailored to power your 
               business growth.
Breadcrumb:    Home  /  Services
```

---

## Section 2: Services Overview Grid

> **Status:** 🔴 REQUIRED (8 marks)

### Layout
- **Background:** `var(--color-white)`
- **Layout:** Full-width `.section` with 5 service cards
- **Grid options:**
  - 3 cards top row + 2 cards bottom row (centered), OR
  - Single column with alternating image-left/image-right layout, OR
  - Cards in `.grid.grid-3` with the last two wrapping to a second row

### Content — All 5 Services

**Service 1 — Web Application Development:**
```
Icon:         🌐
Heading:      Web Application Development
Description:  We design, build, and deploy modern, responsive web applications 
              tailored to your business needs. From sleek landing pages to 
              complex enterprise platforms, our full-stack team delivers 
              pixel-perfect solutions using the latest technologies.
Highlights:
  - Custom web app development (React, Angular, Node.js)
  - Responsive design for all devices
  - E-commerce platforms & payment integration
  - Content management systems (CMS)
  - Progressive Web Apps (PWA)
Button:       Learn More   (triggers accordion/tab/modal — see Section 3)
```

**Service 2 — Cloud Infrastructure & DevOps:**
```
Icon:         ☁️
Heading:      Cloud Infrastructure & DevOps
Description:  We help businesses migrate to the cloud and stay there securely. 
              Our certified cloud engineers set up, manage, and optimize 
              infrastructure on AWS, Azure, and Google Cloud — ensuring your 
              systems are scalable, resilient, and cost-effective.
Highlights:
  - Cloud migration & architecture design
  - CI/CD pipeline setup & automation
  - Infrastructure as Code (Terraform, CloudFormation)
  - 24/7 monitoring & incident response
  - Cost optimization & performance tuning
Button:       Learn More
```

**Service 3 — Mobile App Development:**
```
Icon:         📱
Heading:      Mobile App Development
Description:  Reach your customers wherever they are. We build native and 
              cross-platform mobile applications for iOS and Android that are 
              fast, intuitive, and built for scale — from fintech wallets to 
              e-commerce marketplaces.
Highlights:
  - iOS & Android native development
  - Cross-platform apps (React Native, Flutter)
  - UI/UX design for mobile
  - App Store & Play Store deployment
  - Push notifications & analytics integration
Button:       Learn More
```

**Service 4 — Cybersecurity & IT Consulting:**
```
Icon:         🔒
Heading:      Cybersecurity & IT Consulting
Description:  Protect your digital assets with our comprehensive cybersecurity 
              services. We provide vulnerability assessments, penetration 
              testing, security audits, and ongoing managed security to keep 
              your business safe from evolving threats.
Highlights:
  - Vulnerability assessments & penetration testing
  - Security audits & compliance (ISO 27001, GDPR)
  - Managed security services (SOC)
  - Incident response & disaster recovery planning
  - Employee security awareness training
Button:       Learn More
```

**Service 5 — Corporate Tech Training:**
```
Icon:         🎓
Heading:      Corporate Tech Training
Description:  Upskill your workforce with our hands-on technology training 
              programs. We offer customized workshops and bootcamps in web 
              development, data analytics, cloud computing, and software 
              engineering for teams of all sizes.
Highlights:
  - Custom curriculum design for your team
  - Web development bootcamps (HTML, CSS, JS, React)
  - Data analytics & visualization workshops
  - Cloud certification preparation (AWS, Azure)
  - On-site and remote training options
Button:       Learn More
```

---

## Section 3: Service Detail Interaction

> **Status:** 🔴 REQUIRED (6 marks) — Must implement ONE of the three options

### Option A: Accordion (Expand/Collapse)

**Layout:** Stacked list of 5 collapsible items. Clicking a header expands its content and (optionally) collapses others.

**Per accordion item:**
```
Header:      [Icon] Service Name                     [+ / − toggle icon]
Content:     Full description paragraph + highlights list from above
```

**JS Logic:**
1. Add click event listeners to all accordion headers
2. On click, toggle a class (e.g., `.accordion-active`) on the content panel
3. Optionally close all other panels first (single-open behavior)
4. Animate with CSS: `max-height` transition from 0 to auto (or a large value)

---

### Option B: Tabs

**Layout:** A row of 5 tab buttons at the top. Below, a content panel that changes based on which tab is active.

**Tab buttons:**
```
  [ Web Dev ]  [ Cloud ]  [ Mobile ]  [ Security ]  [ Training ]
```

**JS Logic:**
1. Add click event listeners to all tab buttons
2. On click, add `.active` class to clicked tab, remove from others
3. Show the corresponding content panel, hide all others
4. Use `display: none/block` or add/remove an `.active` class

---

### Option C: Modal

**Layout:** Each service card has a "Learn More" button. Clicking opens a modal overlay with the full service details.

**Modal structure:**
```
[Dark overlay background]
  ┌──────────────────────────────────┐
  │  ✕ (close button, top-right)     │
  │                                  │
  │  [Icon]                          │
  │  Service Name (H2)               │
  │  Full description paragraph...   │
  │                                  │
  │  What's Included:                │
  │  • Bullet point 1                │
  │  • Bullet point 2                │
  │  • Bullet point 3                │
  │  • Bullet point 4                │
  │  • Bullet point 5                │
  │                                  │
  │  [ Request a Quote ] (button)    │
  └──────────────────────────────────┘
```

**JS Logic:**
1. Add click event to each "Learn More" button
2. Populate modal content dynamically (or use data attributes)
3. Show modal by adding `.modal-active` class
4. Close on: close button click, overlay click, Escape key press
5. Prevent background scrolling when modal is open (`body overflow: hidden`)

---

## Section 4: Process / How We Work

> **Status:** 🟡 RECOMMENDED

### Layout
- **Background:** `var(--color-background)` (#F4F6F9)
- **Layout:** 4 steps in a horizontal flow with connecting lines/arrows

### Content
```
Section Heading: How We Work

Step 1:
  Number: 01
  Heading: Discovery
  Text:    We start by understanding your business, goals, and technical 
           requirements through in-depth consultation.

Step 2:
  Number: 02
  Heading: Planning
  Text:    Our team creates a detailed project roadmap, wireframes, and 
           technical architecture tailored to your needs.

Step 3:
  Number: 03
  Heading: Development
  Text:    We build your solution using agile methodology with regular 
           check-ins, demos, and feedback cycles.

Step 4:
  Number: 04
  Heading: Delivery & Support
  Text:    We deploy, test, and hand over your project with full 
           documentation and ongoing support options.
```

---

## Section 5: CTA

> **Status:** 🔴 REQUIRED (included in Visual Design marks)

### Content
```
Heading:   Need a Custom Solution?
Paragraph: Every business is unique. Let's build something that fits 
           yours perfectly.
Button:    Request a Free Consultation   → links to contact.html
```

---
---

# PAGE 4: Portfolio — `portfolio.html`

> **Page Purpose:** Showcase NovaTech's completed projects to demonstrate expertise, build credibility, and inspire potential clients to engage.

---

## Section 1: Page Hero Banner

> **Status:** 🔴 REQUIRED

### Content
```
Heading (H1):  Our Portfolio
Subheading:    A showcase of projects that have transformed businesses 
               across Nigeria and West Africa.
Breadcrumb:    Home  /  Portfolio
```

---

## Section 2: Filter Buttons

> **Status:** 🟢 OPTIONAL / BONUS (2 marks)

### Layout
- Centered row of filter buttons above the project grid
- Active filter has `.btn-primary` styling, others have `.btn-outline`

### Content
```
Buttons:  [ All ]  [ Web Apps ]  [ Mobile ]  [ Cloud ]  [ Cybersecurity ]
```

### JavaScript Interaction
1. Each portfolio card has a `data-category` attribute (e.g., `data-category="web"`)
2. Clicking a filter button hides cards that don't match the category
3. "All" shows every card
4. Add/remove an `.active` class on filter buttons
5. Use CSS transitions for smooth show/hide (opacity + transform)

---

## Section 3: Project Showcase Grid

> **Status:** 🔴 REQUIRED (6 marks)

### Layout
- **Grid:** `.grid.grid-3` (3 columns desktop, 2 tablet, 1 mobile)
- **Each card:** Image on top, content below

### Content — 6 Fictional Projects

**Project 1 — AgroTrack:**
```
Image:       Placeholder screenshot (assets/images/portfolio/agrotrack.jpg)
Category:    Web App
Title:       AgroTrack — Inventory Management System
Client:      AgroFresh Nigeria Ltd
Description: A comprehensive inventory management platform built for one of 
             Lagos' largest agribusiness companies. Tracks produce from farm 
             to warehouse with real-time stock updates and automated reorder 
             alerts.
Technologies: HTML, CSS, JavaScript, Node.js, MongoDB
data-category: web
```

**Project 2 — PaySwift:**
```
Image:       Placeholder screenshot (assets/images/portfolio/payswift.jpg)
Category:    Mobile App
Title:       PaySwift — Cross-Border Payment Wallet
Client:      PaySwift Technologies
Description: A mobile fintech application enabling seamless cross-border 
             payments across West Africa. Supports multiple currencies with 
             real-time exchange rates and biometric authentication.
Technologies: React Native, Firebase, Stripe API
data-category: mobile
```

**Project 3 — CloudFirst Migration:**
```
Image:       Placeholder screenshot (assets/images/portfolio/cloudfirst.jpg)
Category:    Cloud
Title:       CloudFirst — Government Agency Cloud Migration
Client:      Federal Ministry of Communications, Nigeria
Description: A full-scale migration of legacy on-premise systems to AWS cloud 
             infrastructure. Reduced operational costs by 45% and improved 
             system uptime to 99.9%.
Technologies: AWS, Terraform, Docker, Kubernetes
data-category: cloud
```

**Project 4 — SecureNet Audit:**
```
Image:       Placeholder screenshot (assets/images/portfolio/securenet.jpg)
Category:    Cybersecurity
Title:       SecureNet — Banking Security Audit
Client:      Sterling Microfinance Bank
Description: A comprehensive cybersecurity audit that identified 23 critical 
             vulnerabilities across the bank's digital infrastructure. 
             Implemented a security remediation roadmap and ongoing monitoring.
Technologies: Nessus, Burp Suite, Wireshark, SIEM
data-category: cybersecurity
```

**Project 5 — SkillUp LMS:**
```
Image:       Placeholder screenshot (assets/images/portfolio/skillup.jpg)
Category:    Web App
Title:       SkillUp — E-Learning Platform
Client:      Covenant University
Description: A feature-rich learning management system (LMS) serving 5,000+ 
             students. Includes video lectures, quizzes, progress tracking, 
             and certificate generation.
Technologies: React, Node.js, PostgreSQL, AWS S3
data-category: web
```

**Project 6 — MarketHub:**
```
Image:       Placeholder screenshot (assets/images/portfolio/markethub.jpg)
Category:    Mobile App
Title:       MarketHub — Multi-Vendor Marketplace
Client:      MarketHub Nigeria
Description: A multi-vendor e-commerce marketplace app connecting local 
             Nigerian vendors with customers nationwide. Features include 
             vendor dashboards, real-time order tracking, and integrated 
             payment gateway.
Technologies: Flutter, Firebase, Paystack API
data-category: mobile
```

### Visual Notes for Each Card
```
┌──────────────────────────────┐
│  [Project Screenshot Image]  │   ← aspect ratio 16:9, object-fit: cover
│                              │
├──────────────────────────────┤
│  Category Tag                │   ← small pill/badge styled in accent-light
│  Project Title (H3)         │
│  Short description text...   │
│                              │
│  Tech tags: React | Node.js  │   ← small inline pills/tags
│                              │
│  [ View Details ] →          │   ← text link or outline button
└──────────────────────────────┘
```

---

## Section 4: Client Testimonials

> **Status:** 🟢 OPTIONAL / BONUS

### Layout
- **Background:** `var(--color-background)` (#F4F6F9)
- **Layout:** 3 testimonial cards in `.grid.grid-3` or a simple carousel

### Content
```
Section Heading: What Our Clients Say
Paragraph:       Don't just take our word for it — hear from the businesses 
                 we've helped transform.

Testimonial 1:
  Quote:  "NovaTech transformed our entire business operations with their 
           custom inventory management system. Their team was professional, 
           responsive, and delivered ahead of schedule."
  Name:   Chief Olusegun Adeyemi
  Role:   CEO, AgroFresh Nigeria Ltd
  Stars:  ★★★★★

Testimonial 2:
  Quote:  "The mobile app they built for us has completely changed how we 
           engage with customers. Downloads exceeded 50,000 in the first 
           three months alone."
  Name:   Ngozi Obi
  Role:   Marketing Director, PaySwift Technologies
  Stars:  ★★★★★

Testimonial 3:
  Quote:  "Their cybersecurity audit revealed critical vulnerabilities we 
           didn't know existed. NovaTech's team potentially saved us from 
           millions in losses."
  Name:   Alhaji Ibrahim Musa
  Role:   CTO, Sterling Microfinance Bank
  Stars:  ★★★★★
```

---

## Section 5: CTA

> **Status:** 🔴 REQUIRED

### Content
```
Heading:   Have a Project in Mind?
Paragraph: Join 120+ businesses that trust NovaTech to bring their 
           digital ideas to life.
Button:    Start Your Project   → links to contact.html
```

---
---

# PAGE 5: Contact — `contact.html`

> **Page Purpose:** Provide visitors with a clear, easy way to reach NovaTech through a validated contact form and display essential contact information.

---

## Section 1: Page Hero Banner

> **Status:** 🔴 REQUIRED

### Content
```
Heading (H1):  Contact Us
Subheading:    Have a project in mind? Let's talk about how we can help 
               your business grow.
Breadcrumb:    Home  /  Contact
```

---

## Section 2: Contact Content (Form + Info)

> **Status:** 🔴 REQUIRED (Form: 5 marks | Validation: 5 marks | Info: 3 marks)

### Layout
- **Background:** `var(--color-white)`
- **Layout:** Two-column layout — 60% form on left, 40% contact info on right
- **On mobile:** Stack vertically — form first, contact info below

### Left Column — Contact Form

**Form heading:**
```
Heading:   Send Us a Message
Paragraph: Fill out the form below and our team will get back to you within 
           24 hours.
```

**Form fields (already scaffolded in contact.html):**

| Field | Label | Type | Placeholder | Required? |
| ----- | ----- | ---- | ----------- |---------|
| Full Name | `Full Name *` | `text` | Enter your full name | ✅ Yes |
| Email | `Email Address *` | `email` | Enter your email address | ✅ Yes |
| Phone | `Phone Number (Optional)` | `tel` | +234 (0) 800 000 0000 | ❌ No |
| Subject | `Subject *` | `text` | What is this about? | ✅ Yes |
| Message | `Message *` | `textarea` | Tell us about your project or inquiry... | ✅ Yes |

**Submit button:**
```
Button text: Send Message    (class: btn btn-primary)
```

**Success message (shown after valid submission):**
```
Heading:   Message Sent Successfully! ✅
Text:      Thank you for reaching out. Our team will get back to you 
           within 24 hours.
```

### JavaScript Form Validation — Required Logic

```
Field: Full Name
  Validation: Must not be empty. Must be at least 2 characters.
  Error text: "Please enter your full name."
  
Field: Email Address
  Validation: Must not be empty. Must match email format.
  Regex:      /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  Error text: "Please enter a valid email address."
  
Field: Subject
  Validation: Must not be empty.
  Error text: "Please enter a subject."
  
Field: Message
  Validation: Must not be empty. Must be at least 10 characters.
  Error text: "Please enter a message (at least 10 characters)."
```

**Validation behavior:**
1. Validation triggers on form `submit` event (with `event.preventDefault()`)
2. Clear all previous errors before re-validating
3. Check each required field — if invalid, display the error message in the corresponding `.form-error` span
4. If any field fails, scroll to the first error
5. If all fields pass, show a success message (hide the form or show an inline confirmation)
6. Add a red border to invalid fields: `border-color: var(--color-error)`
7. **Do not** actually submit the form to a server — this is a front-end-only project

---

### Right Column — Contact Information

**Section heading:**
```
Heading:   Contact Information
Paragraph: Prefer to reach us directly? Here's how you can get in touch.
```

**Contact details:**
```
📍 Our Office
   14 Ademola Adetokunbo Crescent,
   Wuse 2, Abuja, FCT, Nigeria

📞 Phone
   +234 (0) 812 345 6789

✉️  Email
   info@novatechsolutions.com.ng

🌐 Website
   www.novatechsolutions.com.ng

🕐 Working Hours
   Monday – Friday
   8:00 AM – 5:00 PM (WAT)
```

**Social Media Links:**
```
LinkedIn:   linkedin.com/company/novatechsolutions
Twitter/X:  @NovaTechAbuja
Email:      info@novatechsolutions.com.ng
```

### Visual Notes
- Each contact item: Icon on left, text on right (inline-flex or grid)
- Social icons: Styled circles or simple icon links in accent blue
- Contact info card: Can be styled as a `.card` with `var(--color-background)` background

---

## Section 3: Map

> **Status:** 🟢 OPTIONAL / BONUS

### Layout
- Full-width section below the contact form
- Embedded Google Maps iframe OR a decorative placeholder image

### Content
```
Google Maps Embed (Wuse 2, Abuja):
<iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1!2d7.49!3d9.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWuse+2+Abuja!5e0!3m2!1sen!2sng"
  width="100%" 
  height="400" 
  style="border:0;" 
  allowfullscreen="" 
  loading="lazy">
</iframe>
```
*(Students can use a generic Abuja map or a placeholder image)*

---

## Section 4: FAQ

> **Status:** 🟢 OPTIONAL / BONUS

### Layout
- **Background:** `var(--color-background)` (#F4F6F9)
- **Layout:** Accordion-style FAQ (reuse accordion JS from services page)

### Content
```
Section Heading: Frequently Asked Questions

Q1: How long does a typical project take?
A1: Project timelines vary based on scope and complexity. A simple website 
    takes 2–4 weeks, while a complex web application can take 2–4 months. 
    We provide detailed timelines during the planning phase.

Q2: What is your pricing model?
A2: We offer both fixed-price and hourly billing depending on the project type. 
    After our initial consultation, we provide a detailed quote with no hidden fees.

Q3: Do you offer ongoing support after launch?
A3: Yes! We offer flexible maintenance and support packages including bug fixes, 
    updates, security patches, and feature enhancements.

Q4: Can you work with our existing technology stack?
A4: Absolutely. Our team has experience across a wide range of technologies. 
    We can integrate with your existing systems or recommend the best stack 
    for your needs.
```

---
---

# Summary: Required vs Bonus Sections by Page

| Page | Section | Status |
| ---- | ------- | ------ |
| **Home** | Hero | 🔴 Required |
| | Services Overview | 🔴 Required |
| | Why Choose Us / Stats | 🔴 Required |
| | About Preview | 🟡 Recommended |
| | Testimonial Preview | 🟢 Optional |
| | CTA | 🔴 Required |
| **About** | Page Hero | 🔴 Required |
| | Our Story | 🔴 Required |
| | Mission & Vision | 🔴 Required |
| | Our Values | 🟡 Recommended |
| | Meet the Team | 🔴 Required |
| | CTA | 🟡 Recommended |
| **Services** | Page Hero | 🔴 Required |
| | Services Grid (all 5) | 🔴 Required |
| | Service Interaction (accordion/tabs/modal) | 🔴 Required |
| | How We Work (process) | 🟡 Recommended |
| | CTA | 🔴 Required |
| **Portfolio** | Page Hero | 🔴 Required |
| | Filter Buttons | 🟢 Optional (Bonus) |
| | Project Grid (6 projects) | 🔴 Required |
| | Testimonials | 🟢 Optional |
| | CTA | 🔴 Required |
| **Contact** | Page Hero | 🔴 Required |
| | Contact Form | 🔴 Required |
| | Form Validation (JS) | 🔴 Required |
| | Contact Information | 🔴 Required |
| | Map | 🟢 Optional |
| | FAQ | 🟢 Optional |
| **ALL** | Navigation Bar | 🔴 Required |
| | Footer | 🔴 Required |

---

> ⚠️ **Reminder:** All company information used above comes directly from `PROJECT-BRIEF.md`. The testimonials, portfolio projects, values, and FAQ content are fictional extensions created to support the assessment. All details are entirely fictional.

---

*3LOGY Software Development Bootcamp — Quarter Assessment 2026*
