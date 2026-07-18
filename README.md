# Aries Bloom Inc. — Corporate Website

A working, deploy-ready static site for Aries Bloom Inc. and its four brands: **BibisGlambar**, **Sasy Couture**, **Baddie Mums Club**, and **BB Soirée & Events**.

Built in plain HTML / CSS / vanilla JS — no build step, no framework — so it can be deployed to Netlify straight from GitHub and edited by non-developers with basic HTML comfort.

---

## 1. Sitemap

```
/                          Home
/about.html                About Aries Bloom Inc.
/our-brands.html           Our Brands (hub — links to all 4 brand pages)
/careers.html              Careers / Join Our Team  (incl. #apply form)
/contact.html               Contact
/brands/
  bibisglambar.html         BibisGlambar — Beauty
  sasy-couture.html         Sasy Couture — Fashion
  baddie-mums-club.html     Baddie Mums Club — Wellness
  bb-soiree-events.html     BB Soirée & Events — Celebration
```

Every page shares one header (with a "Home / About / Our Brands / Careers / Contact" nav) and one footer (brand links, company links, social). Brand pages additionally link back to `/our-brands.html` and to `/contact.html` for booking enquiries.

---

## 2. Wireframe Suggestions (per page)

**Home**
`Hero (split: headline + CTA left, full-bleed portrait right) → gold rule + one-line thesis → 4-column Brand Grid (numbered 01–04) → dark Pillars section (4 values) → About teaser (image/text split) → champagne CTA band → footer`

**About**
`Hero statement → split (origin story image/text) → dark Mission section with stat strip → vertical Timeline (5 chapters, gold dot markers) → champagne CTA → footer`

**Our Brands**
`Hero statement → 4 alternating image/text split sections (one per brand, hero image swaps sides each time, each with its own accent color pill) → champagne CTA → footer`

**Careers**
`Hero statement → 4-column culture pillars → dark "Open Roles" list (brand tag + title + employment meta, one row per role) → Application form (2-column grid: name/email/brand/role, full-width message + submit) → footer`

**Contact**
`Hero statement → split: form (left) / direct brand email list + corporate line (right) → footer`

**Brand pages (all 4 share one template)**
`Brand hero (accent-colored, split: headline + CTA left, full-bleed image right) → split "Approach" section → champagne "Services" 4-column grid → 3-image gallery strip → dark closing CTA → footer`

---

## 3. Homepage Copy

Already live in `index.html`. Summary of key copy blocks:

- **Hero headline:** "Every woman is a house of her own."
- **Hero subhead:** "We are the parent company behind four brands built to meet a woman wherever she is — becoming, dressing, mothering, celebrating. Quiet confidence, held together."
- **Intro line:** "Aries Bloom Inc. was founded on one belief: that beauty, style, motherhood and celebration are not separate chapters — they are one continuous bloom."
- **4 Pillars:** Quiet Confidence · Craft Over Trend · Every Season Honoured · Community, Not Audience
- **About teaser headline:** "Built by women, for the women around them."
- **Closing CTA:** "Interested in building something with us?"

## 4. About Page Copy

Already live in `about.html`. Structure: origin story ("Started in a single chair") → mission statement ("To meet a woman in every season, and leave her more herself than we found her") → a 5-chapter timeline (BibisGlambar opens → Sasy Couture founded → Baddie Mums Club forms → BB Soirée & Events launches → Aries Bloom Inc. formed as parent company).

## 5. Careers Page Structure

- Hero statement: "Join a house, not just a job."
- 4 culture pillars: Craft-Led, Autonomous Teams, Growth Across Brands, Client-First
- Open roles list (dark section), one row per role: brand tag, title, employment type/location. Currently seeded with 5 sample roles across all four brands plus one corporate marketing role — replace with live postings.
- Application form: name, email, brand of interest (dropdown), role applying for, message. Wired for **Netlify Forms** (see §8).

---

## 6. Visual Identity — Cohesive Yet Distinct

**Shared house language (never changes across brands):**
- Palette base: Ivory `#FAF6F0`, Champagne `#EDE0CC`, Nude `#DCC3A8`, Taupe `#A6876E`, Black `#1A1613`, Gold `#B8935A`
- Display typeface: **Cormorant Garamond** (headlines) — Body: **Jost** (light weight, wide letter-spacing on labels)
- Layout grammar: generous whitespace, thin gold hairline rules, uppercase eyebrow labels, editorial image/text splits, restrained motion (fade-and-rise reveals only)
- The **emblem**: a four-petal mark, one petal per brand color, used as the nav logo and a brief loading "bloom" animation on page entry. This is the one signature element that visually unifies all four brands as "petals of one flower."

**What's allowed to differ per brand — its own accent color only:**
| Brand | Accent | Feeling |
|---|---|---|
| BibisGlambar | Gold `#B8935A` | polished, warm |
| Sasy Couture | Deep black `#2A2320` | tailored, graphic |
| Baddie Mums Club | Dusty rose `#C98F84` | soft, human |
| BB Soirée & Events | Sage `#7C8B6F` | natural, celebratory |

Each brand page uses its accent color for pills, buttons and the top border only — typography, spacing and imagery style stay identical to the house system. This is what keeps four very different services feeling like one family: **same bones, different sash.**

If each brand later gets its own logotype, keep the emblem as a small "by Aries Bloom Inc." mark in each brand's footer, the way Aesop or The Ordinary's parent houses do it.

---

## 7. Folder Structure (GitHub Repo)

```
aries-bloom/
├── index.html
├── about.html
├── our-brands.html
├── careers.html
├── contact.html
├── netlify.toml
├── robots.txt
├── sitemap.xml
├── README.md
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/                  ← place real photography here
│   └── (replace Unsplash placeholder URLs in HTML with local paths)
└── brands/
    ├── bibisglambar.html
    ├── sasy-couture.html
    ├── baddie-mums-club.html
    └── bb-soiree-events.html
```

All pages currently pull photography from Unsplash as placeholders so the site is fully visual out of the box — swap those `<img src="https://images.unsplash.com/...">` URLs for real brand photography in `/images/` before launch. Every `<img>` already has descriptive `alt` text; just repoint `src`.

**GitHub setup:**
1. `git init`, commit this folder, push to a new repo (e.g. `aries-bloom-inc/website`).
2. Use `main` as the production branch. Create feature branches (`feature/careers-copy`, etc.) for edits, merge via pull request.
3. No build tooling required — Netlify serves the repo as-is.

---

## 8. Netlify Deployment Setup

1. **New site from Git** in the Netlify dashboard → connect the GitHub repo.
2. Build settings: **Build command:** *(leave empty)* · **Publish directory:** `.` (already set in `netlify.toml`).
3. Every push to `main` auto-deploys; every pull request gets its own deploy preview URL — good for reviewing copy/design changes before merging.
4. **Forms:** `contact.html` and `careers.html` already carry `data-netlify="true"` and a hidden honeypot field. Netlify detects these automatically on deploy — no backend code needed. Submissions land in **Site settings → Forms**, and you can wire email notifications there.
5. **Custom domain:** add `ariesbloominc.com` under **Domain settings**, Netlify provisions HTTPS automatically.
6. **Environment:** none required for this static build.

---

## 9. SEO Recommendations

- Every page already has a unique `<title>` and `<meta name="description">` — keep both under ~60 and ~155 characters respectively as content evolves.
- Add real Open Graph images (`og:image`) per page once photography is final — currently only `og:title`/`og:description` are set on Home.
- Submit `sitemap.xml` (included) to Google Search Console after launch; `robots.txt` already references it.
- Use one `<h1>` per page (already enforced) and keep heading order logical (h1 → h2 → h3) for accessibility and crawlability.
- Add brand + local business structured data (`schema.org/Organization` and `schema.org/LocalBusiness` per brand) once real addresses/hours exist — high value for BibisGlambar and Sasy Couture "near me" searches.
- Internal linking is already strong (Home ↔ Our Brands ↔ each brand page ↔ Contact) — keep every new page reachable within two clicks of Home.
- Compress and serve photography as WebP once real images replace the Unsplash placeholders — this is the single biggest real-world Core Web Vitals win for an image-heavy site like this.

---

## 10. Animations & Interactions (already implemented)

- **Emblem bloom-in:** the four-petal mark scales/fades in on first load, then the loader dismisses — a quiet, on-brand entrance rather than a generic spinner.
- **Scroll reveal:** sections fade and rise into view via `IntersectionObserver` (`.reveal` class in `main.js`) — respects `prefers-reduced-motion`.
- **Nav underline:** gold underline sweeps in on link hover/active state.
- **Button arrow:** CTA buttons nudge their `→` on hover.
- **Brand cards:** background shifts to champagne on hover for a tactile, editorial feel.
- **Sticky header:** gains a hairline shadow once the page scrolls, staying unobtrusive at rest.

All motion is short (300–900ms), easing-based, and disabled site-wide for users with `prefers-reduced-motion: reduce` (see top of `style.css`).

---

## Responsive / Mobile Fix Log

The site is mobile-first with a proper breakpoint cascade: **phone (≤480px) → large phone/small tablet (481–768px) → tablet/small laptop (769–1024px) → desktop (1025px+)**, layered on top of the fluid `clamp()`-based type and spacing scale. Changes made to resolve the "desktop layout scaled down instead of adapting" bug reported after the first Netlify deploy:

- **Root cause fix:** added `overflow-x: hidden` on `html`/`body` — a single element wider than the viewport (not a missing viewport tag) is the near-universal cause of this exact symptom on iOS Safari/Chrome, where the whole page renders zoomed out instead of wrapping. This is now hard-blocked site-wide.
- Confirmed `<meta name="viewport" content="width=device-width, initial-scale=1.0">` is present on all 9 pages (it already was — verified again, not the source of the bug, but doesn't hurt to reconfirm).
- Added a dedicated **≤480px phone tier** that tightens `--gutter` and `--section-space`, shrinks h1–h3 sizing, and reduces the hero image height so the first screen isn't 90% just a photo.
- **Nav/logo:** the emblem mark and wordmark shrink on phones; hamburger menu (already present) now has 44px+ tap targets and full-width tappable nav links.
- **Buttons & form fields:** all buttons and inputs now meet a 44–48px minimum tap height; form inputs use `font-size: 1rem` (16px) to stop iOS Safari's auto-zoom-on-focus behavior.
- **Careers role rows:** removed a `white-space: nowrap` on the meta text (employment type/location) that could overflow a narrow screen.
- **Images:** already fluid (`max-width: 100%`) everywhere; `object-fit: cover` on all hero/gallery images keeps them cropped correctly rather than stretched at any width.
- Added explicit tablet (769–1024px) and small-laptop gutter tiers so spacing doesn't jump straight from phone to full desktop scale.

## Next Steps Before Launch

1. Replace Unsplash placeholder photography with real brand shoots.
2. Replace placeholder emails/social links in the footer and Contact page.
3. Populate live job postings in `careers.html`.
4. Point the custom domain and verify Netlify Forms notifications.
5. Add Google Analytics / Search Console once the domain is live.
