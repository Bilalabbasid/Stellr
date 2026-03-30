# Stellr — Session Context

## What was built
A Next.js landing page for Stellr, an AI-powered reputation management platform for premium restaurants in Pakistan.

## Repo
- GitHub: https://github.com/umerdai/stellr
- Branch: `main`
- Stack: Next.js 16 (App Router), TypeScript, Tailwind CSS

## Files created / modified
- `src/app/page.tsx` — Full landing page (all 8 sections)
- `src/app/globals.css` — All brand CSS variables, component styles, mobile breakpoints
- `src/app/layout.tsx` — Cleaned up layout, removed Geist fonts, set correct metadata

## Landing page sections (in order)
1. **Navbar** — Sticky, Forest bg, logo lockup (SVG star + STELLR wordmark), nav links, Get started CTA
2. **Hero** — Forest bg, Palatino headline "Your restaurant's reputation, on autopilot.", sub-copy, two buttons (primary + secondary), social proof line
3. **Stats strip** — Mid-green bg, 3 stat cards: 88% / 12% / 9% in large Sage Palatino numbers
4. **How it works** — Petal bg, numbered 3-step cards (01 / 02 / 03)
5. **Features** — White bg, 2×3 card grid with SVG icons for all 6 features
6. **Pricing** — Petal bg, Standard (Rs 6,000) + White-label (Rs 12,000) side-by-side cards; featured card uses Forest bg with Sage CTA
7. **CTA section** — Forest bg, headline, body, "Get started today" button linking to mailto:bilal@stellr.biz, contact details below
8. **Footer** — Forest bg, logo + nav links + copyright

## Brand rules enforced
- Colours: Forest `#082312`, Sage `#1DB966`, Petal `#F0F7F2`, Moss `#4A7A5A`, Divider `#C8DED0`, Mid-green `#0F3320`
- Fonts: Palatino Linotype (headings, wordmark), system-ui (body/UI)
- No gradients, no drop shadows, no pill buttons (max 6px radius), no pure black, no generic grays
- Cards: white bg, 1px `#C8DED0` border, 12px radius, 28px 32px padding
- Buttons: primary = Forest bg + Sage text; secondary = transparent + Sage border
- Max content width: 1140px
- Section padding: 100px vertical
- Mobile: stacks to single column at 768px

## To do / next steps (as prompted by user)
- User said "i will prompt you later to the changes i want" — no design changes requested yet
- Could add: animations/scroll reveals, a waitlist/contact form, mobile hamburger menu, real imagery or QR stand mockup in hero

## How to run
```bash
npm run dev     # local dev at localhost:3000
npm run build   # production build
```
