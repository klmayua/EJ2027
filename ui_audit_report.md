# GLOBAL_UI_AUDIT_REPORT
**Project:** PROJECT THE VOICE
**Phase:** IMMERSION_REFINEMENT_SPRINT
**Step:** 01 — GLOBAL_UI_AUDIT
**Status:** COMPLETE
**Date:** 2026-05-18

---

## SECTION_01: FILES_INSPECTED

| File | Path | Lines | Purpose |
|------|------|-------|---------|
| `index.css` | `src/index.css` | 502 | Global styles, tokens, animations |
| `tokens.css` | `src/styles/tokens.css` | 22 | Spacing & radius tokens |
| `Layout.jsx` | `src/components/Layout.jsx` | 212 | Navbar, Footer, mobile menu |
| `HomePage.jsx` | `src/pages/HomePage.jsx` | 384 | Homepage with hero + 6 sections |
| `AboutPage.jsx` | `src/pages/AboutPage.jsx` | 82 | About page |
| `CommunityPage.jsx` | `src/pages/public/CommunityPage.jsx` | 143 | Arena community page |

---

## SECTION_02: ISSUES_IDENTIFIED

### ISSUE_01: TYPOGRAPHY_H1_AGGRESSION
- **File:** `src/index.css`
- **Lines:** 126-127
- **Finding:** `.font-h1` set to 64px, `.font-h2` set to 48px
- **Mobile override:** Only at 768px breakpoint (36px / 28px)
- **Mobile-first failure:** No base sizing at 320px, 360px, 375px, 390px, 414px

### ISSUE_02: CARD_PROLIFERATION
- **Files:** `HomePage.jsx` (72-106), `AboutPage.jsx` (41-75), `CommunityPage.jsx` (58-68)
- **Pattern:** `bg-[#1e293b]` + `rounded-2xl` + `border` + `p-8` repeated
- **Density:** 3-column grid on homepage, stacked info cards on about, chapter cards with status badges on community

### ISSUE_03: DASHBOARD_ENERGY
- **File:** `CommunityPage.jsx`
- **Lines:** 30-43, 86-100
- **Finding:** Stats grid ("18K+", "36", "124K") in hero — pure SaaS dashboard pattern
- **Finding:** Volunteer leaderboard with points ("7,850 points") — gamification UI energy
- **Finding:** Status badges ("Active", "Open") on chapter cards — product UI pattern

### ISSUE_04: BRANDING_DISCREPANCY
- **Files:** `Layout.jsx` (62), `HomePage.jsx` (367, 378), `CommunityPage.jsx` (142)
- **Finding:** "CITY BOY" in navbar, "THE VOICE" in footer, "THE VOICE Campaign" in copyright — three brand names
- **Finding:** Footer copyright year conflict: "© 2026" vs "© 2027"

### ISSUE_05: FOOTER_INCONSISTENCY
- **Files:** `HomePage.jsx` (362-381), `Layout.jsx` (136-196)
- **Finding:** `HomePage.jsx` renders its own footer instead of using Layout's footer
- **Finding:** Layout footer links point to public pages (`/impact`, `/governance`) that may not exist

### ISSUE_06: GRADIENT_OVERUSE
- **Files:** `HomePage.jsx` (24-25), `CommunityPage.jsx` (21, 79), `index.css` (322-328)
- **Finding:** Multiple gradient overlays in hero sections
- **Finding:** `gold-glow` and `hover-gold` box-shadow effects applied broadly

### ISSUE_07: SECTION_DENSITY
- **File:** `HomePage.jsx`
- **Finding:** 7 sections back-to-back with no breathing room
- **Finding:** Section padding inconsistent: `py-16 md:py-24` mixed with no explicit mobile padding

### ISSUE_08: ANIMATION_NOISE
- **File:** `index.css`
- **Lines:** 371-454
- **Finding:** Two separate `flag-wave` keyframe definitions (lines 371-382, 435-454)
- **Finding:** `.hero-flag-wave` applied but hero image in `HomePage.jsx` uses `.hero-cinematic` class only
- **Finding:** `.animate-pulse` on live indicator in hero (line 32)

### ISSUE_09: MOBILE_MENU_BODY_SCROLL
- **File:** `Layout.jsx`
- **Lines:** 46-55
- **Finding:** Body overflow toggling works but no focus trap for accessibility

### ISSUE_10: HOVER_LIFT_CARDS
- **Files:** `index.css` (238-241), multiple card components
- **Finding:** `.card:hover { transform: translateY(-4px); box-shadow: ... }` applied to all `.card` elements
- **Finding:** `CommunityPage.jsx` line 59: `hover:-translate-y-[3px]` inline style

### ISSUE_11: FORBIDDEN_COPY_DETECTED
- **File:** `HomePage.jsx`
- **Line 42:** "Join the Movement" — campaign energy
- **Line 53:** "Join the Movement" — hard conversion language
- **Line 346:** "Join The Movement" — campaign CTA
- **Line 346-349:** "This is more than a campaign" — contradiction

### ISSUE_12: LAYOUT_FOOTER_RENDER_CONFLICT
- **Files:** `HomePage.jsx` (362-381), `Layout.jsx` (136-196)
- **Finding:** HomePage renders independent footer (lines 362-381) — duplicate footer rendered below Layout footer

---

## SECTION_03: ROOT_CAUSE

1. **Multiple design systems layered:** Imperial Civic Design tokens + Platform Navy tokens + Sora/Inter fonts — no unified typography scale
2. **Template energy残留:** Card grid patterns from generic dashboard/SaaS templates still present
3. **Mixed branding signals:** "THE VOICE" and "CITY BOY ARENA" used interchangeably across files
4. **Duplicate footer rendering:** HomePage.jsx re-implements footer instead of consuming Layout component
5. **No mobile-first spacing system:** Token values not consistently applied across components

---

## SECTION_04: PROPOSED_REMEDIATION

### REMEDIATION_01: TYPOGRAPHY_REDUCTION
- Reduce `.font-h1` from 64px → 48px desktop, 32px mobile base
- Reduce `.font-h2` from 48px → 36px desktop, 24px mobile base
- Add mobile-first breakpoints for 320px, 360px, 375px, 390px

### REMEDIATION_02: DASHBOARD_CLEANUP
- Remove stat grid from `CommunityPage.jsx` hero
- Remove points/leaderboard display from volunteer section
- Remove status badges from chapter cards
- Replace with editorial, calm text-based representation

### REMEDIATION_03: FOOTER_UNIFICATION
- Remove footer from `HomePage.jsx` (lines 362-381)
- Ensure all pages use Layout's footer exclusively
- Fix copyright year to 2026 across all instances

### REMEDIATION_04: GRADIENT_REDUCTION
- Remove duplicate `gold-glow` and `hover-gold` effects
- Reduce hero overlay layers from 2 gradient divs to 1

### REMEDIATION_05: DUPLICATE_ANIMATION
- Remove duplicate `flag-wave` keyframe (lines 435-454)
- Keep single definition (lines 371-382)

### REMEDIATION_06: CARD_DEPTH_REDUCTION
- Replace `hover:-translate-y-[3px]` inline style
- Remove `.card:hover` transform from global CSS
- Apply `rounded-xl` max, not `rounded-2xl`

### REMEDIATION_07: BRANDING_FIX
- Standardize to single brand name across all files (pending clarification)
- Update copyright year to 2026 consistently

---

## SECTION_05: FILES_TO_MODIFY

| Priority | File | Modification |
|----------|------|-------------|
| P0 | `src/index.css` | Typography scale reduction, animation cleanup, card hover removal |
| P0 | `src/pages/HomePage.jsx` | Remove duplicate footer, reduce gradient layers, reduce section density |
| P0 | `src/pages/public/CommunityPage.jsx` | Remove dashboard stats grid, remove leaderboard, remove status badges |
| P1 | `src/components/Layout.jsx` | Fix copyright year to 2026 |
| P2 | `src/styles/tokens.css` | Add mobile-first spacing tokens |

---

## SECTION_06: EXPECTED_VISUAL_OUTCOME

- `.font-h1` max 48px on desktop, 32px on mobile — calm, not aggressive
- No floating cards — all cards sit flush, depth via border, not elevation
- No dashboard energy on public pages — community page feels editorial, not SaaS
- Single footer rendered per page — no duplicate footers
- Typography breathing room — increased line-heights, reduced heading weights
- Mobile-first spacing applied consistently — no horizontal overflow, no compressed sections