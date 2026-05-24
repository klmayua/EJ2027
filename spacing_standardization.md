# SPACING_STANDARDIZATION
**Project:** PROJECT THE VOICE
**Phase:** IMMERSION_REFINEMENT_SPRINT
**Step:** 01 — GLOBAL_UI_AUDIT
**Status:** COMPLETE
**Date:** 2026-05-18

---

## CURRENT_SPACING_SYSTEM

### tokens.css (Current)
```
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-7: 32px
--space-8: 40px
--space-9: 56px
```

### index.css (Ad-hoc)
- Section padding: `py-16 md:py-24` (inconsistent)
- Card padding: `p-8` / `p-6` / `p-[28px]` (mixed)
- Gap patterns: `gap-4` / `gap-6` / `gap-[20px]` / `gap-[28px]` (non-standard)
- Max widths: `max-w-2xl`, `max-w-[1180px]`, `max-w-[1440px]` (fragmented)

---

## PROPOSED_SPACING_STANDARD

### Base Unit: 8px
All spacing values must be multiples of 4px, aligned to 8px grid.

### Section Spacing
| Context | Mobile | Desktop |
|---------|--------|---------|
| Page sections | `py-12` (48px) | `py-20` (80px) |
| Compact sections | `py-8` (32px) | `py-12` (48px) |
| Hero inner padding | `pt-24` (96px) | `pt-32` (128px) |

### Component Spacing
| Context | Value |
|---------|-------|
| Card padding (tight) | `p-4` (16px) |
| Card padding (standard) | `p-6` (24px) |
| Card padding (generous) | `p-8` (32px) |
| Card gap (grid) | `gap-4` (16px) |
| Card gap (editorial) | `gap-6` (24px) |
| Section max-width | `max-w-[1200px]` |
| Container max-width | `max-w-[1440px]` |

### Mobile-First Breakpoints
| Breakpoint | Font Scale Multiplier |
|-----------|---------------------|
| 320px | 0.70x |
| 360px | 0.78x |
| 375px | 0.82x |
| 390px | 0.85x |
| 414px | 0.90x |
| 768px | 1.00x (base desktop) |
| 1024px | 1.10x |
| 1280px | 1.20x |

---

## APPLIED_STANDARD

### Base Typography Scale (Desktop 1024px+)
| Class | Font Size | Line Height | Weight |
|-------|-----------|-------------|---------|
| `.font-h1` | 48px | 1.15 | 700 |
| `.font-h2` | 36px | 1.2 | 700 |
| `.font-h3` | 24px | 1.3 | 600 |
| `.font-stat-value` | 20px | 1 | 700 |
| `.font-body-lg` | 18px | 1.6 | 400 |
| `.font-body-md` | 16px | 1.5 | 400 |
| `.font-label-caps` | 11px | 1 | 700 |

### Mobile Typography Scale (320px-414px)
| Class | Font Size |
|-------|-----------|
| `.font-h1` | 28px |
| `.font-h2` | 22px |
| `.font-h3` | 18px |
| `.font-stat-value` | 18px |

---

## RULES

1. **No arbitrary spacing values** — use only token multiples
2. **No inline px values** on layout containers — use Tailwind spacing scale
3. **Consistent section padding** — baseline `py-12 md:py-20`
4. **No gap proliferation** — limit to `gap-4` or `gap-6`
5. **Max card border-radius** — `rounded-xl` (12px), not `rounded-2xl` (16px)

---

**Applied in:** BATCH_A of UI Cleanup