# Development Tasks - Demo 7 (Professional Services / Consultation-first)

Source docs:

- `docs/global prompt.md`
- `Professional Services/demo7.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; sections later in the file may depend on earlier setup tasks.

## Phase 0 - Project Decisions

- [x] Confirm demo name + positioning (e.g., "Modern Consultant") and tone (calm, precise, expensive).
- [x] Confirm target vertical (consultant / accountant / advisory / boutique legal).
- [x] Confirm primary conversion: "Book a consultation".
- [x] Confirm secondary conversion: contact form + credibility reinforcement.
- [x] Confirm GEO positioning: Perth, WA (service area + footer mentions).
- [x] Choose ONE accent color (CTAs/highlights/links only):
  - [x] Deep Blue `#1F3A5F`
  - [ ] Forest Green `#1E4D3B`
  - [ ] Charcoal Gold `#A8873A`
- [x] Confirm brand copy constraints:
  - [x] No hype language
  - [x] No decorative flourishes
  - [x] If it looks impressive without animation, it’s correct
- [x] Choose styling approach: Tailwind OR CSS modules + tokens (pick one and stick to it).
- [x] Choose fonts (max 2):
  - [x] Headings: Inter Tight / Neue Haas / Suisse Int’l–style (600–700)
  - [x] Body: Inter / Source Sans 3 (16–18px, line-height 1.6–1.7)
- [x] Confirm optional scope: `/case-studies/` page included or skipped. (Included)

## Phase 1 - Astro Setup (Static + GitHub Pages)

- [x] Create a new Astro project (static output).
- [x] Configure `astro.config.mjs` with `site: "https://github.com/amplifycreativelab"` and `base: "/<repo>/"`.
- [ ] Ensure all internal links and asset URLs work under the base path (no hard-coded absolute `/` paths).
- [x] Add/verify npm scripts: `dev`, `build`, `preview`.
- [ ] Add `src/assets/images/` placeholder images (optional minimal hero image, OG image).

## Phase 2 - Design System (Swiss / International Typographic Style)

- [x] Define base neutrals:
  - [x] Background `#F8F9FA`
  - [x] Primary text `#111111`
  - [x] Secondary text `#5F6368`
  - [x] Borders/lines `#E5E7EB`
- [x] Enforce color rules:
  - [x] No gradients
  - [x] No multiple accents
  - [x] No bright colors
- [x] Define spacing scale (4/8/12/16/24/32/48/64).
- [x] Define layout system:
  - [x] Max width 1200–1280px
  - [x] 12-column grid
  - [x] Clear section separation using space (not color blocks)
- [x] Define typography scale (example):
  - [x] H1 `clamp(3rem, 5vw, 4.5rem)`
  - [x] H2 `clamp(2rem, 3vw, 3rem)`
  - [x] H3 `1.4–1.6rem`
- [x] Enforce typography rules:
  - [x] No all-caps paragraphs
  - [x] No letter-spacing gimmicks
  - [x] No script or serif fonts
- [x] Implement focus-visible styles for links/buttons/inputs.
- [ ] Implement reduced motion support (`prefers-reduced-motion`).

If using Tailwind:

- [x] Install/configure Tailwind for Astro.
- [x] Add Tailwind theme tokens (neutrals + chosen accent, spacing, radii, typography).

If using CSS modules + tokens:

- [ ] Create `src/styles/tokens.css` (colors, font families, spacing, radii, shadows).
- [ ] Create base/global styles (typography defaults, container widths, utilities).

## Phase 3 - Core Layout & Shared Components

- [x] Create `src/layouts/BaseLayout.astro` with:
  - [x] Skip link
  - [x] Header/nav (Home, Services, About, Contact, optional Case Studies)
  - [x] Footer with Perth WA positioning + local phone + service area mention
  - [x] Title/meta slots
  - [ ] OG/Twitter meta placeholders
- [x] Build required components (Astro):
  - [x] `Hero.astro` (left-aligned text; optional right-side whitespace/image)
  - [x] `ServiceCard.astro` (title, 2–3 line description, outcomes bullets, CTA)
  - [x] `CaseStudyCard.astro` (client type, problem, outcome metric, link)
  - [x] `Testimonial.astro` (short quote, name, role + industry; no star ratings)
  - [x] `FAQ.astro` (accordion; minimal styling; accessible)
  - [x] `CTASection.astro` (final CTA block)

## Phase 4 - Content & Data Layer

- [ ] Decide content approach:
  - [ ] JSON in `src/data/*.json`, OR
  - [ ] Markdown content collections
- [ ] Create `src/data/services.json`:
  - [ ] Services: Business Advisory, Financial Planning, Compliance & Risk, Strategic Growth
  - [ ] For each: title, description, 3–5 outcome bullets, CTA label
- [ ] Create `src/data/case-studies.json` (3 max on Home; more if `/case-studies/` enabled):
  - [ ] Fields: clientType, problem, approach (optional), outcome (metric-based), slug
- [ ] Create `src/data/testimonials.json` (3–5):
  - [ ] Fields: name, role, industry, quote, location (optional)
- [ ] Create `src/data/faqs.json` (4–6) covering:
  - [ ] What happens in the first consultation?
  - [ ] Who do you typically work with?
  - [ ] Do you offer ongoing advisory?
  - [ ] What industries do you specialise in?
  - [ ] Are consultations confidential?
- [ ] Add business placeholders (NAP, Perth service area, certifications, years experience).
- [ ] Add trust strip copy + monochrome logo placeholders (if used).

## Phase 5 - Pages (Demo IA + Required Pages)

### Home (`src/pages/index.astro`)

- [x] Hero section:
  - [x] Headline: "Strategic Advice for Confident Business Decisions"
  - [x] Subheading with Perth positioning
  - [x] Primary CTA: Book a consultation
  - [x] Secondary CTA: View services
- [x] "How It Works" 3-step section (typography-only; no icons required).
- [x] Credentials/trust strip (years, certifications, industries served, monochrome logos).
- [x] Case studies section (max 3 cards; no stock photos; typography/structure only).
- [x] Testimonials section (quiet; no stars).
- [x] FAQ section (4–6 questions).
- [x] Final CTA block (light background shift): "Ready to discuss your situation?" + Book CTA.

### Services (`src/pages/services/index.astro`)

- [x] Render each service as a clean section block:
  - [x] Service title
  - [x] 2–3 line description
  - [x] Outcome bullets (not features)
  - [x] CTA: Book consultation

### Case Studies (`src/pages/case-studies/index.astro`) (Optional)

- [x] Grid of case studies (context, challenge, approach, approach, outcome with numbers).
- [x] Keep layout restrained; no stock photos.

### About (`src/pages/about.astro`)

- [x] Professional, restrained, human tone.
- [x] Sections: philosophy, experience summary, credentials, Perth-based positioning.
- [x] No glamour team shots required (optional).

### Contact (`src/pages/contact/index.astro`) (Booking Page)

- [x] Consultation form fields:
  - [x] Name
  - [x] Email
  - [x] Phone
  - [x] Business type
  - [x] Brief description
  - [x] Preferred consultation type (call / meeting)
- [x] Primary CTA: Request consultation.
- [x] Secondary content: direct phone number, Perth address/service area, map placeholder.
- [x] Add clear success state message.
- [x] Add spam-safe honeypot/hidden field.

### Required pages from base prompt

- [x] Privacy (`src/pages/privacy.astro`) - simple legal page.

## Phase 6 - SEO & GEO (Perth)

- [x] Page titles follow a consistent template (per-page + brand).
- [x] Meta description per page (unique, consultation-focused).
- [x] Canonical URLs set correctly (respecting `site` + `base`).
- [x] OpenGraph: title/description + placeholder OG image.
- [x] Twitter card meta.
- [x] Add JSON-LD schema:
  - [x] `ProfessionalService`
  - [x] `Organization`
- [x] Add local signals:
  - [x] Perth WA in footer
  - [x] Local phone number
  - [x] Address/service area mention + map placeholder
- [x] Add `robots.txt`.
- [x] Add sitemap (if straightforward) and verify it works with the configured `site`.
- [x] Internal linking: Home -> Services -> Contact (and back) with clear CTAs.

## Phase 7 - Accessibility & UX Checks

- [ ] One H1 per page; heading order is logical.
- [ ] Skip link works and is visible on focus.
- [ ] Keyboard navigation works across nav, accordions, and forms.
- [ ] Touch targets are large enough for mobile.
- [ ] Contrast is sufficient (subtle palette still needs AA).

## Phase 8 - Performance

- [ ] Target Lighthouse 95+ (mobile).
- [ ] Use `astro:assets` for images where possible; responsive sizes + lazy loading.
- [ ] Avoid heavy JS (static-first; keep FAQ accordion lightweight).
- [ ] Keep the UI impressive without relying on animation.

## Phase 9 - Deployment & Handoff

- [ ] Add build/run instructions (README or `/docs/`):
  - [ ] `npm install`
  - [ ] `npm run dev`
  - [ ] `npm run build`
  - [ ] `npm run preview`
- [ ] Verify the built site works under the GitHub Pages base path (no broken links/assets).
- [ ] Quick QA pass:
  - [ ] CTA flow: Home hero -> Contact form
  - [ ] Services CTAs route correctly
  - [ ] Case studies render cleanly (if enabled)
  - [ ] Form labels + required markers + success state
  - [ ] Basic SEO meta presence (view-source)

## Optional / Bonus

- [ ] Add per-case-study routes (`/case-studies/<slug>/`) fed from data.
- [ ] Add subtle print styles for case studies (optional).
- [ ] Add a “Confidentiality” trust note near the contact form.

