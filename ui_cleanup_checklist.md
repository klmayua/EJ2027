# UI_CLEANUP_CHECKLIST
**Project:** PROJECT THE VOICE
**Phase:** IMMERSION_REFINEMENT_SPRINT
**Step:** 01 — GLOBAL_UI_AUDIT
**Status:** REMEDIATION_IN_PROGRESS
**Date:** 2026-05-18

---

## CHECKLIST_ITEMS

### CHECK_01: TYPOGRAPHY_REDUCTION
- [ ] Reduce `.font-h1` from 64px → 48px desktop
- [ ] Reduce `.font-h1` mobile from 36px → 28px (320-390px)
- [ ] Reduce `.font-h2` from 48px → 36px desktop
- [ ] Reduce `.font-h2` mobile from 28px → 22px (320-390px)
- [ ] Normalize `.font-h3` mobile from 22px → 18px
- [ ] Remove inline heading sizes in `HomePage.jsx` (lines 38, 64, 116, 177, 225, 285, 346)
- [ ] Remove inline heading sizes in `AboutPage.jsx` (lines 13, 25)
- [ ] Remove inline heading sizes in `CommunityPage.jsx` (lines 25, 82, 108, 131)

### CHECK_02: DASHBOARD_CLEANUP
- [ ] Remove stats grid from `CommunityPage.jsx` hero (lines 30-43)
- [ ] Remove points display from volunteer section (lines 86-100)
- [ ] Remove "Active" status badge from chapter cards (lines 61-62)
- [ ] Remove "Open" status badge from events (line 115)
- [ ] Replace chapter card hover lift with subtle border opacity change
- [ ] Replace volunteer section points display with plain text description

### CHECK_03: FOOTER_UNIFICATION
- [ ] Remove footer from `HomePage.jsx` (lines 362-381)
- [ ] Verify other public pages don't render duplicate footers
- [ ] Fix copyright year to 2026 in `Layout.jsx` (line 186)
- [ ] Verify copyright year in `HomePage.jsx` line 378 before removal

### CHECK_04: GRADIENT_REDUCTION
- [ ] Collapse hero gradient layers in `HomePage.jsx` from 2 divs to 1
- [ ] Remove `.gold-glow` box-shadow from `index.css`
- [ ] Remove `.hover-gold:hover` box-shadow from `index.css`
- [ ] Reduce hero gradient complexity on `CommunityPage.jsx` (line 21)

### CHECK_05: ANIMATION_CLEANUP
- [ ] Remove duplicate `flag-wave` keyframe (lines 435-454 in `index.css`)
- [ ] Verify `.hero-flag-wave` animation is used correctly where applied
- [ ] Consider removing `.animate-pulse` from hero live indicator
- [ ] Verify `prefers-reduced-motion` rules cover all animations

### CHECK_06: CARD_DEPTH_REDUCTION
- [ ] Remove `.card:hover { transform: translateY(-4px) }` from `index.css`
- [ ] Remove `hover:-translate-y-[3px]` inline style from `CommunityPage.jsx`
- [ ] Standardize card border-radius: max `rounded-xl` (16px) instead of `rounded-2xl`
- [ ] Remove card hover box-shadow escalation

### CHECK_07: BRANDING_FIX
- [ ] Standardize "CITY BOY" vs "THE VOICE" usage — clarify single brand
- [ ] Fix footer branding in `Layout.jsx` line 142: "CITY BOY ARENA"
- [ ] Fix navbar branding in `Layout.jsx` line 61-63

### CHECK_08: SECTION_DENSITY
- [ ] Review `HomePage.jsx` section padding for consistency
- [ ] Apply `py-12 md:py-20` as baseline section padding
- [ ] Remove unnecessary section dividers
- [ ] Ensure vertical breathing room between sections

### CHECK_09: MOBILE_BREAKPOINTS
- [ ] Add mobile sizing for 320px, 360px, 375px, 390px in `index.css`
- [ ] Test no horizontal scroll at any breakpoint
- [ ] Verify tap targets minimum 44px
- [ ] Verify no text collision in hero section at 320px

### CHECK_10: COPY_AUDIT
- [ ] Replace "Join the Movement" in `HomePage.jsx` with calmer CTA language
- [ ] Review all section headlines for campaign energy
- [ ] Remove any copy that sounds like startup marketing

---

## EXECUTION_SEQUENCE

### BATCH_A: CSS_CLEANUP
1. `src/index.css` — Typography scale + animation deduplication + card hover removal

### BATCH_B: HOMEPAGE_CLEANUP
2. `src/pages/HomePage.jsx` — Remove duplicate footer + gradient reduction

### BATCH_C: COMMUNITY_PAGE_CLEANUP
3. `src/pages/public/CommunityPage.jsx` — Dashboard removal + card depth reduction

### BATCH_D: LAYOUT_FIX
4. `src/components/Layout.jsx` — Branding + copyright fix

---

**Next:** Begin BATCH_A — Execute CSS remediation