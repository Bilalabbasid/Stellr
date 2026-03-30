# Stellr — Brand Style Guide

> Reference this document for all future UI work. Follow every spec exactly.

---

## 1. Brand Overview

**Brand name:** Stellr
**Domain:** stellr.biz
**Tagline:** Reputation · Elevated
**One-line description:** Stellr is an AI-powered reputation management platform for premium restaurants in Pakistan. We automate Google review responses, grow star ratings, and provide physical QR stands for tables.
**Target customer:** Upper-end restaurant owners in Islamabad, Lahore, and Karachi — DHA, F-7, Gulberg, Bahria Town areas.
**Brand personality:** Premium, minimal, trustworthy, modern. Think Stripe or Linear — clean and confident, never loud or salesy.

---

## 2. Colour Palette

| Name | Hex | Usage |
|---|---|---|
| Forest (primary bg) | `#082312` | Hero backgrounds, card headers, button fills |
| Sage (accent/highlight) | `#1DB966` | CTAs, icons, highlights, hover states, underlines |
| Petal (light bg) | `#F0F7F2` | Section backgrounds, light cards |
| Moss (muted text) | `#4A7A5A` | Secondary text on light backgrounds |
| Divider green | `#C8DED0` | Borders, dividers, input outlines |
| Mid green (strip) | `#0F3320` | Dark mid-section backgrounds |
| White | `#FFFFFF` | Body text on dark, card backgrounds |
| Off-white | `#F9FBF9` | Page background |

**Never use:** pure black `#000000`, generic grays, or any colour outside this palette.

---

## 3. Typography

**Primary font:** `'Palatino Linotype', Palatino, Georgia, serif`
**Secondary font (UI only):** `system-ui, -apple-system, sans-serif`

| Element | Font | Size | Weight | Letter spacing |
|---|---|---|---|---|
| Hero headline | Palatino | 52–64px | 400 | -0.5px |
| Section headline | Palatino | 36–42px | 400 | -0.3px |
| Card title | Palatino | 22–26px | 400 | 0px |
| Body text | System sans | 16px | 400 | 0px |
| Small/caption | System sans | 13px | 400 | 0.3px |
| Button label | System sans | 14px | 500 | 1.5px uppercase |
| Brand wordmark | Palatino | any | 400 | 5–6px |

---

## 4. Logo & Wordmark

**Wordmark:** `STELLR` in Palatino, letter-spacing 5–6px, font-weight 400.
**Logo mark:** A star shape — outer polygon outline (stroke only) + inner filled star, both in sage green `#1DB966`.

```svg
<svg width="32" height="32" viewBox="0 0 32 32">
  <polygon points="16,3 19.5,11.5 28.5,12.5 22,18.5 23.8,27.5 16,23 8.2,27.5 10,18.5 3.5,12.5 12.5,11.5"
    fill="none" stroke="#1DB966" stroke-width="1.8" stroke-linejoin="round"/>
  <polygon points="16,8 18.5,13.5 24.5,14.2 20.2,18.2 21.3,24.2 16,21.2 10.7,24.2 11.8,18.2 7.5,14.2 13.5,13.5"
    fill="#1DB966"/>
</svg>
```

**Logo lockup:** Icon left + wordmark right, gap 10px, vertically centered.
**On dark background:** Icon in `#1DB966`, wordmark in `#FFFFFF`.
**On light background:** Icon in `#1DB966`, wordmark in `#082312`.

---

## 5. UI Components

### Buttons
- **Primary:** Background `#082312`, text `#1DB966`, padding `14px 32px`, border-radius `6px`, letter-spacing `1.5px`, uppercase, font-weight 500. Hover: background `#0F3320`.
- **Secondary:** Background transparent, border `1.5px solid #1DB966`, text `#1DB966`, same padding. Hover: background `rgba(29,185,102,0.08)`.
- **No rounded pill buttons** — keep radius at 6px maximum.

### Cards
- Background: `#FFFFFF`
- Border: `1px solid #C8DED0`
- Border-radius: `12px`
- Padding: `28px 32px`
- No drop shadows — use border only.

### Pricing cards
- Background: `#F0F7F2`
- Featured/recommended card: background `#082312`, text white, accent `#1DB966`
- Border-radius: `12px`
- No shadows.

### Input fields
- Border: `1px solid #C8DED0`
- Border-radius: `6px`
- Focus border: `1.5px solid #1DB966`
- Background: `#FFFFFF`
- Height: `48px`

### Dividers
- `1px solid #C8DED0`
- Never use gray dividers.

### Pills / badges
- Background: `rgba(29,185,102,0.1)`
- Text: `#082312`
- Border-radius: `20px`
- Padding: `4px 14px`
- Font-size: `12px`
- Letter-spacing: `1px`
- Uppercase

---

## 6. Spacing & Layout

- Max content width: `1140px`, centered.
- Section vertical padding: `100px 0`
- Card gap in grids: `24px`
- Use 12-column grid.
- Mobile breakpoint: `768px` — stack all columns to single.

---

## 7. Landing Page Structure (current build)

| # | Section | Background | Notes |
|---|---|---|---|
| 1 | Navbar | `#082312` | Sticky. Logo left, nav links + CTA right. |
| 2 | Hero | `#082312` | Palatino 56px headline, sub-copy, 2 buttons, social proof line. |
| 3 | Stats strip | `#0F3320` | 3 stat cards: 88% / 12% / 9% in Sage Palatino. |
| 4 | How it works | `#F0F7F2` | 3-step numbered cards. |
| 5 | Features | `#FFFFFF` | 2×3 icon card grid, 6 features. |
| 6 | Pricing | `#F0F7F2` | Standard Rs 6,000 + White-label Rs 12,000. Featured card in Forest. |
| 7 | CTA | `#082312` | Headline, body, button, contact line. |
| 8 | Footer | `#082312` | Logo + links + copyright. |

---

## 8. Tone of Voice

- **Confident, not arrogant.** State facts, don't hype.
- **Short sentences.** No paragraph longer than 3 lines.
- **No buzzwords** — never say "revolutionary", "game-changing", "cutting-edge".
- **Speak to the owner, not a generic audience.** Use "your restaurant", "your reviews", "your customers".
- **Professional but warm** — this is Pakistan, relationships matter. Don't sound like a Silicon Valley press release.

---

## 9. What to avoid

- No gradients anywhere
- No drop shadows on cards
- No rounded pill buttons
- No stock photo style imagery
- No clutter — generous whitespace throughout
- No more than 2 font families on any page
- No pure black text — use `#082312` or white only
- No generic grays in the palette

---

## 10. Contact details

- **Email:** bilal@stellr.biz
- **Phone:** 0317 5454732
- **Website:** stellr.biz
- **Founder:** Bilal Abbasi, Founder & CEO
