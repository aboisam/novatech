# 🖼️ NovaTech Solutions — Image & Asset Requirements Guide

> **Purpose:** A complete list of every image needed for the website, with exact file names, dimensions, descriptions, free stock photo search terms, and accessibility alt text. Students should be able to source every image using this guide.

---

## Table of Contents

1. [Image Optimization Guidelines](#image-optimization-guidelines)
2. [Placeholder Strategy](#placeholder-image-strategy)
3. [Homepage Images](#homepage--indexhtml)
4. [About Page Images](#about-us--abouthtml)
5. [Services Page Images](#services--serviceshtml)
6. [Portfolio Page Images](#portfolio--portfoliohtml)
7. [Contact Page Images](#contact--contacthtml)
8. [Global / Shared Images](#global--shared-assets)
9. [Quick Download Checklist](#quick-download-checklist)

---

## Image Optimization Guidelines

### Recommended Formats

| Format | Use For | Why |
| ------ | ------- | --- |
| **JPG / JPEG** | Photographs (hero images, team photos, project screenshots) | Smaller file size for photos, universally supported |
| **PNG** | Logos, icons, images needing transparency | Supports transparent backgrounds, lossless quality |
| **SVG** | Icons, simple graphics, logos | Infinitely scalable, tiny file size, best for icons |
| **WebP** | All images (if browser support is acceptable) | 25–35% smaller than JPG at same quality — modern best practice |

### File Size Guidelines

| Image Type | Maximum File Size | Target File Size |
| ---------- | ----------------- | --------------- |
| Hero / Banner images | 300 KB | 150–200 KB |
| Team photos | 150 KB | 60–100 KB |
| Service icons / illustrations | 50 KB | 10–30 KB |
| Portfolio screenshots | 200 KB | 100–150 KB |
| Logo files | 50 KB | 10–30 KB |
| Favicon | 10 KB | 2–5 KB |

### How to Optimize

1. **Resize before saving** — Don't use a 4000px wide image for a 600px card
2. **Compress with free tools:**
   - [TinyPNG](https://tinypng.com/) — Drag & drop PNG/JPG compression
   - [Squoosh](https://squoosh.app/) — Google's free image optimizer (supports WebP)
   - [CompressJPEG](https://compressjpeg.com/) — Quick JPEG compression
3. **Use `loading="lazy"`** — Add this attribute to all `<img>` tags below the fold:
   ```html
   <img src="assets/images/team/adaeze-okonkwo.jpg" alt="..." loading="lazy">
   ```
4. **Set explicit width and height** — Prevents layout shift while images load:
   ```html
   <img src="..." alt="..." width="400" height="300" loading="lazy">
   ```

---

## Placeholder Image Strategy

If you **cannot find** a suitable image, use these fallback options:

### Option 1: Placeholder Services (Recommended)
| Service | URL Pattern | Example |
| ------- | ----------- | ------- |
| [Placehold.co](https://placehold.co/) | `https://placehold.co/600x400/0A1F3F/FFFFFF?text=NovaTech` | Generates branded placeholder |
| [UI Avatars](https://ui-avatars.com/) | `https://ui-avatars.com/api/?name=Adaeze+Okonkwo&size=300&background=2D7FF9&color=fff` | Auto-generates avatar from name |

### Option 2: CSS Gradient Backgrounds
Replace images with styled CSS gradients using brand colors:
```css
.hero-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 50%, var(--color-accent) 100%);
}
```

### Option 3: Solid Color + Text
Use a colored `<div>` with centered text instead of an image for cards/team members.

---
---

## Homepage — `index.html`

### Hero Section Images

| File Name | Folder | Dimensions | Description | Search Term (Unsplash/Pexels) | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------------------------- | -------- |
| `hero-bg.jpg` | `images/hero/` | 1920 × 1080 px | Wide banner image showing a modern tech workspace, software development team, or abstract technology backdrop. Should have enough dark area or space for text overlay. | `"tech team working"` or `"modern office technology"` or `"software development workspace"` | `"NovaTech Solutions — Technology team collaborating in a modern workspace"` |

> **Alternative:** Skip the image entirely and use a pure CSS gradient hero: `linear-gradient(135deg, #0A1F3F 0%, #132E5B 50%, #2D7FF9 100%)`

### Services Overview Cards

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `icon-web-dev.svg` | `images/icons/` | 64 × 64 px | Simple flat icon representing web development — a code bracket `</>`, browser window, or code editor | `"web development icon flat"` or use [Heroicons](https://heroicons.com/) `code-bracket` | `"Web development icon"` |
| `icon-cloud.svg` | `images/icons/` | 64 × 64 px | Simple flat icon representing cloud computing — a cloud with an upload/sync arrow | `"cloud computing icon flat"` or Heroicons `cloud-arrow-up` | `"Cloud infrastructure icon"` |
| `icon-mobile.svg` | `images/icons/` | 64 × 64 px | Simple flat icon representing mobile development — a smartphone with app interface | `"mobile app icon flat"` or Heroicons `device-phone-mobile` | `"Mobile app development icon"` |

> **Free SVG Icon Sources:**
> - [Heroicons](https://heroicons.com/) — by Tailwind team, MIT license
> - [Lucide Icons](https://lucide.dev/) — beautiful open-source icons
> - [Tabler Icons](https://tabler.io/icons) — 5000+ free SVG icons
> - [Phosphor Icons](https://phosphoricons.com/) — flexible, MIT license
> - [Flaticon](https://www.flaticon.com/) — largest icon database (check license)

### About Preview Section

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `about-preview.jpg` | `images/hero/` | 600 × 500 px | Photo of a diverse African tech team in a meeting, brainstorming at a whiteboard, or in a modern office setting | `"african tech team meeting"` or `"nigerian business team"` or `"diverse team brainstorming office"` | `"NovaTech team members collaborating on a project"` |

---

## About Us — `about.html`

### Page Hero Banner

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `about-hero-bg.jpg` | `images/hero/` | 1920 × 600 px | Wide panoramic image of a modern tech office, aerial view of Abuja city, or an abstract technology pattern. Needs to work as a background with text overlay. | `"modern tech office panoramic"` or `"abuja city skyline"` or `"technology abstract background"` | `"About NovaTech Solutions — Our story and team"` |

### Company Story Section

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `company-story.jpg` | `images/hero/` | 600 × 450 px | Photo showing a startup environment — team working on laptops, a modern co-working space, or developers collaborating on code | `"tech startup team working"` or `"developers coding together"` or `"african tech startup office"` | `"NovaTech Solutions team at work in the Abuja headquarters"` |

### Team Member Photos

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `adaeze-okonkwo.jpg` | `images/team/` | 400 × 400 px | Professional headshot of a confident African woman in business attire, warm smile, clean background | `"african woman professional headshot"` or `"nigerian businesswoman portrait"` | `"Adaeze Okonkwo — CEO & Co-Founder of NovaTech Solutions"` |
| `emeka-nwankwo.jpg` | `images/team/` | 400 × 400 px | Professional headshot of an African man, smart casual or tech-culture attire, friendly expression | `"african man tech professional"` or `"nigerian man headshot professional"` | `"Emeka Nwankwo — CTO & Co-Founder of NovaTech Solutions"` |
| `fatima-bello.jpg` | `images/team/` | 400 × 400 px | Professional headshot of an African woman, creative/designer vibe, possibly wearing hijab, warm expression | `"african woman designer headshot"` or `"muslim woman professional portrait"` | `"Fatima Bello — Lead UI/UX Designer at NovaTech Solutions"` |
| `chinedu-abiodun.jpg` | `images/team/` | 400 × 400 px | Professional headshot of an African man, tech professional look, clean background | `"african man professional portrait"` or `"nigerian engineer headshot"` | `"Chinedu Abiodun — Head of Cloud Engineering at NovaTech Solutions"` |
| `amara-okafor.jpg` | `images/team/` | 400 × 400 px | Professional headshot of an African woman, business development vibe, confident and approachable | `"african woman business professional"` or `"nigerian woman corporate headshot"` | `"Amara Okafor — Business Development Lead at NovaTech Solutions"` |

> **Team Photo Tips:**
> - All photos should have a similar style (lighting, background, crop)
> - Square format (1:1 aspect ratio) works best for team cards
> - Use `object-fit: cover` and consistent CSS sizing to normalize images
> - If using placeholder API: `https://ui-avatars.com/api/?name=Adaeze+Okonkwo&size=400&background=2D7FF9&color=fff&rounded=true`

---

## Services — `services.html`

### Page Hero Banner

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `services-hero-bg.jpg` | `images/hero/` | 1920 × 600 px | Abstract technology background — network connections, digital grid, circuit patterns, or a server room | `"technology network abstract"` or `"digital connection background"` or `"server room modern"` | `"NovaTech Solutions — Our comprehensive technology services"` |

### Service Detail Icons / Images

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `icon-web-dev.svg` | `images/icons/` | 64 × 64 px | Code brackets icon `</>` | Heroicons: `code-bracket` | `"Web application development icon"` |
| `icon-cloud.svg` | `images/icons/` | 64 × 64 px | Cloud with arrow icon | Heroicons: `cloud-arrow-up` | `"Cloud infrastructure and DevOps icon"` |
| `icon-mobile.svg` | `images/icons/` | 64 × 64 px | Smartphone icon | Heroicons: `device-phone-mobile` | `"Mobile app development icon"` |
| `icon-security.svg` | `images/icons/` | 64 × 64 px | Shield with checkmark icon | Heroicons: `shield-check` | `"Cybersecurity and IT consulting icon"` |
| `icon-training.svg` | `images/icons/` | 64 × 64 px | Academic cap / graduation icon | Heroicons: `academic-cap` | `"Corporate tech training icon"` |

> **Alternative:** Instead of icons, use larger feature images for each service:

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `service-web-dev.jpg` | `images/services/` | 600 × 400 px | Developer working on code on multiple monitors | `"web developer coding monitors"` | `"Custom web application development at NovaTech"` |
| `service-cloud.jpg` | `images/services/` | 600 × 400 px | Server room or cloud computing dashboard visualization | `"cloud computing server room"` or `"cloud infrastructure dashboard"` | `"Cloud infrastructure and DevOps services"` |
| `service-mobile.jpg` | `images/services/` | 600 × 400 px | Hands holding a smartphone showing a modern app interface | `"mobile app design smartphone"` or `"hands holding phone app"` | `"Mobile app development for iOS and Android"` |
| `service-security.jpg` | `images/services/` | 600 × 400 px | Cybersecurity concept — digital lock, security dashboard, or encryption visualization | `"cybersecurity digital lock"` or `"network security concept"` | `"Cybersecurity and IT consulting services"` |
| `service-training.jpg` | `images/services/` | 600 × 400 px | Classroom or workshop setting with people learning at computers | `"tech training classroom"` or `"coding bootcamp workshop"` or `"corporate training computers"` | `"Corporate technology training and workshops"` |

---

## Portfolio — `portfolio.html`

### Page Hero Banner

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `portfolio-hero-bg.jpg` | `images/hero/` | 1920 × 600 px | Creative workspace with screens showing app designs, UI mockups, or completed projects | `"creative workspace design screens"` or `"ui design workspace"` or `"app mockup screens"` | `"NovaTech Solutions — Portfolio of completed projects"` |

### Project Showcase Screenshots

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `project-agrotrack.jpg` | `images/portfolio/` | 800 × 500 px | Screenshot or mockup of an inventory management dashboard — data tables, charts, green/earthy color theme | `"inventory management dashboard"` or `"agricultural software dashboard"` or `"erp dashboard mockup"` | `"AgroTrack — Inventory management system for AgroFresh Nigeria"` |
| `project-payswift.jpg` | `images/portfolio/` | 800 × 500 px | Mobile app mockup of a fintech payment wallet — transaction screen, balance display, modern UI | `"mobile payment app mockup"` or `"fintech wallet app design"` or `"mobile banking app interface"` | `"PaySwift — Cross-border mobile payment wallet"` |
| `project-cloudfirst.jpg` | `images/portfolio/` | 800 × 500 px | Cloud infrastructure dashboard — server monitoring, AWS console style, uptime metrics | `"cloud infrastructure dashboard"` or `"aws monitoring dashboard"` or `"server monitoring interface"` | `"CloudFirst — Government agency cloud migration project"` |
| `project-securenet.jpg` | `images/portfolio/` | 800 × 500 px | Cybersecurity dashboard — threat detection, vulnerability scan results, security metrics | `"cybersecurity dashboard"` or `"security audit software"` or `"network security monitoring"` | `"SecureNet — Cybersecurity audit for Sterling Microfinance Bank"` |
| `project-skillup.jpg` | `images/portfolio/` | 800 × 500 px | E-learning platform interface — course listing, video player, progress tracking | `"e-learning platform interface"` or `"lms dashboard design"` or `"online course platform"` | `"SkillUp — E-learning platform for Covenant University"` |
| `project-markethub.jpg` | `images/portfolio/` | 800 × 500 px | E-commerce marketplace — product grid, vendor listings, shopping cart interface | `"e-commerce marketplace app"` or `"online marketplace interface"` or `"multi vendor marketplace design"` | `"MarketHub — Multi-vendor e-commerce marketplace"` |

> **Portfolio Screenshot Tips:**
> - Use **mockup generators** to place screenshots on device frames:
>   - [Mockup World](https://www.mockupworld.co/) — free PSD/Figma mockups
>   - [Smartmockups](https://smartmockups.com/) — free tier available
>   - [Screely](https://screely.com/) — instant browser window mockups
> - Consistent aspect ratio: Use 16:10 or 8:5 for all project images
> - Apply `object-fit: cover` in CSS to normalize different image sizes

### Testimonial Avatars (Optional)

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `client-olusegun.jpg` | `images/team/` | 80 × 80 px | Small circular headshot — older Nigerian businessman | `"african businessman portrait mature"` | `"Chief Olusegun Adeyemi, CEO of AgroFresh Nigeria"` |
| `client-ngozi.jpg` | `images/team/` | 80 × 80 px | Small circular headshot — Nigerian woman in marketing/business | `"african woman professional portrait"` | `"Ngozi Obi, Marketing Director at PaySwift Technologies"` |
| `client-ibrahim.jpg` | `images/team/` | 80 × 80 px | Small circular headshot — Nigerian man in banking/finance | `"african man professional finance"` | `"Alhaji Ibrahim Musa, CTO of Sterling Microfinance Bank"` |

---

## Contact — `contact.html`

### Page Hero Banner

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `contact-hero-bg.jpg` | `images/hero/` | 1920 × 600 px | Warm, welcoming office scene — reception area, handshake, or an inviting workspace | `"business reception office"` or `"modern office welcome"` or `"business handshake professional"` | `"Contact NovaTech Solutions — Get in touch with our team"` |

### Contact Section Icons (Optional)

| File Name | Folder | Dimensions | Description | Search Term | Alt Text |
| --------- | ------ | ---------- | ----------- | ----------- | -------- |
| `icon-location.svg` | `images/icons/` | 24 × 24 px | Map pin / location marker icon | Heroicons: `map-pin` | `"Office location icon"` |
| `icon-phone.svg` | `images/icons/` | 24 × 24 px | Phone / telephone icon | Heroicons: `phone` | `"Phone number icon"` |
| `icon-email.svg` | `images/icons/` | 24 × 24 px | Envelope / email icon | Heroicons: `envelope` | `"Email address icon"` |
| `icon-clock.svg` | `images/icons/` | 24 × 24 px | Clock / time icon | Heroicons: `clock` | `"Working hours icon"` |

### Social Media Icons

| File Name | Folder | Dimensions | Description | Source | Alt Text |
| --------- | ------ | ---------- | ----------- | ------ | -------- |
| `icon-linkedin.svg` | `images/icons/` | 24 × 24 px | LinkedIn "in" logo | [Simple Icons](https://simpleicons.org/?q=linkedin) | `"Follow NovaTech on LinkedIn"` |
| `icon-twitter.svg` | `images/icons/` | 24 × 24 px | X (Twitter) logo | [Simple Icons](https://simpleicons.org/?q=x) | `"Follow NovaTech on X (Twitter)"` |
| `icon-email-circle.svg` | `images/icons/` | 24 × 24 px | Email / envelope icon | Heroicons: `envelope` | `"Email NovaTech Solutions"` |

---

## Global / Shared Assets

### Logo Files

| File Name | Folder | Dimensions | Description | Alt Text |
| --------- | ------ | ---------- | ----------- | -------- |
| `logo.png` | `images/` | 300 × 80 px | Full NovaTech Solutions logo — icon + wordmark. Electric blue icon, navy "Nova", blue "Tech", grey "Solutions". Transparent background. | `"NovaTech Solutions logo"` |
| `logo-white.png` | `images/` | 300 × 80 px | White version of the logo for dark backgrounds. White "Nova", blue "Tech", light grey "Solutions". Transparent background. | `"NovaTech Solutions logo"` |
| `favicon.ico` | `images/` | 32 × 32 px | Small "N" icon only (no text). Electric blue on transparent background. | *(Favicons don't use alt text)* |

### Emoji Alternative for Icons

If SVG icons are too complex to source, students may use **emoji characters** directly in their HTML. Here are the recommended emojis for each use:

| Element | Emoji | HTML Entity |
| ------- | ----- | ----------- |
| Web Development | 🌐 | `&#127760;` |
| Cloud & DevOps | ☁️ | `&#9729;&#65039;` |
| Mobile Apps | 📱 | `&#128241;` |
| Cybersecurity | 🔒 | `&#128274;` |
| Tech Training | 🎓 | `&#127891;` |
| Location | 📍 | `&#128205;` |
| Phone | 📞 | `&#128222;` |
| Email | ✉️ | `&#9993;&#65039;` |
| Clock | 🕐 | `&#128336;` |
| LinkedIn | 💼 | `&#128188;` |
| Star rating | ⭐ | `&#11088;` |
| Quote marks | ❝ | `&#10077;` |
| Checkmark | ✅ | `&#9989;` |
| Arrow right | → | `&rarr;` |

---

## Quick Download Checklist

Use this checklist to track which images you've sourced:

### 🔴 Required Images (Must Have)

```
[ ] images/logo.png                         — Company logo (light backgrounds)
[ ] images/logo-white.png                   — Company logo (dark backgrounds)
[ ] images/favicon.ico                      — Browser tab icon
[ ] images/hero/hero-bg.jpg                 — Homepage hero banner
[ ] images/team/adaeze-okonkwo.jpg          — CEO & Co-Founder
[ ] images/team/emeka-nwankwo.jpg           — CTO & Co-Founder
[ ] images/team/fatima-bello.jpg            — Lead UI/UX Designer
[ ] images/team/chinedu-abiodun.jpg         — Head of Cloud Engineering
[ ] images/team/amara-okafor.jpg            — Business Development Lead
[ ] images/icons/icon-web-dev.svg           — Web development icon
[ ] images/icons/icon-cloud.svg             — Cloud icon
[ ] images/icons/icon-mobile.svg            — Mobile icon
[ ] images/icons/icon-security.svg          — Security icon
[ ] images/icons/icon-training.svg          — Training icon
[ ] images/portfolio/project-agrotrack.jpg  — Portfolio project 1
[ ] images/portfolio/project-payswift.jpg   — Portfolio project 2
[ ] images/portfolio/project-cloudfirst.jpg — Portfolio project 3
[ ] images/portfolio/project-securenet.jpg  — Portfolio project 4
[ ] images/portfolio/project-skillup.jpg    — Portfolio project 5
[ ] images/portfolio/project-markethub.jpg  — Portfolio project 6
```

### 🟡 Recommended Images (Improve Your Grade)

```
[ ] images/hero/about-hero-bg.jpg           — About page banner
[ ] images/hero/services-hero-bg.jpg        — Services page banner
[ ] images/hero/portfolio-hero-bg.jpg       — Portfolio page banner
[ ] images/hero/contact-hero-bg.jpg         — Contact page banner
[ ] images/hero/about-preview.jpg           — Homepage about section
[ ] images/hero/company-story.jpg           — About page story section
[ ] images/icons/icon-location.svg          — Contact info icons
[ ] images/icons/icon-phone.svg
[ ] images/icons/icon-email.svg
[ ] images/icons/icon-clock.svg
[ ] images/icons/icon-linkedin.svg          — Social media icons
[ ] images/icons/icon-twitter.svg
```

### 🟢 Optional Images (Bonus)

```
[ ] images/services/service-web-dev.jpg     — Large service feature images
[ ] images/services/service-cloud.jpg
[ ] images/services/service-mobile.jpg
[ ] images/services/service-security.jpg
[ ] images/services/service-training.jpg
[ ] images/team/client-olusegun.jpg         — Testimonial avatars
[ ] images/team/client-ngozi.jpg
[ ] images/team/client-ibrahim.jpg
```

---

## Free Image Sources Quick Reference

| Source | URL | License | Best For |
| ------ | --- | ------- | -------- |
| **Unsplash** | [unsplash.com](https://unsplash.com) | Free, no attribution required | Hero backgrounds, team photos, workspace shots |
| **Pexels** | [pexels.com](https://www.pexels.com) | Free, no attribution required | Similar to Unsplash, strong African photo collection |
| **Pixabay** | [pixabay.com](https://pixabay.com) | Free, no attribution required | Illustrations, abstract backgrounds |
| **Heroicons** | [heroicons.com](https://heroicons.com) | MIT License | UI icons (SVG) |
| **Lucide** | [lucide.dev](https://lucide.dev) | ISC License | Beautiful UI icons (SVG) |
| **Tabler Icons** | [tabler.io/icons](https://tabler.io/icons) | MIT License | 5000+ free SVG icons |
| **Simple Icons** | [simpleicons.org](https://simpleicons.org) | CC0 | Brand/social media icons |
| **UI Avatars** | [ui-avatars.com](https://ui-avatars.com) | Free API | Auto-generated avatar placeholders |
| **Placehold.co** | [placehold.co](https://placehold.co) | Free API | Dimension-specific image placeholders |

---

> ⚠️ **Always verify the license** of any image before using it. Unsplash and Pexels images are free for commercial and personal use. Attribution is appreciated but not required.

---

*3LOGY Software Development Bootcamp — Quarter Assessment 2026*
