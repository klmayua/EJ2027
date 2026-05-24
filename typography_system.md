# TYPOGRAPHY_SYSTEM
**Project:** PROJECT THE VOICE
**Phase:** IMMERSION_REFINEMENT_SPRINT
**Step:** 02 — TYPOGRAPHY_RECONSTRUCTION
**Status:** COMPLETE
**Date:** 2026-05-18

---

## TYPOGRAPHY_ARCHITECTURE

### Font Stack
| Role | Font | Weights |
|------|------|---------|
| Display | Sora | 400, 500, 600, 700, 800 |
| Body | Inter | 400, 500, 600, 700 |
| Data/Numbers | IBM Plex Sans | 400, 500, 600, 700 |

### CSS Variables
```css
--font-display: 'Sora', system-ui, sans-serif;
--font-body: 'Inter', system-ui, sans-serif;
--font-data: 'IBM Plex Sans', system-ui, sans-serif;
```

---

## TYPE_SCALE

### Desktop (1024px+)
| Class | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| `.font-h1` | 48px | 700 | 1.15 | -0.02em |
| `.font-h2` | 36px | 700 | 1.2 | -0.015em |
| `.font-h3` | 24px | 600 | 1.3 | -0.01em |
| `.font-h4` | 20px | 600 | 1.3 | -0.01em |
| `.font-h5` | 18px | 600 | 1.35 | 0 |
| `.font-body-lg` | 18px | 400 | 1.65 | 0 |
| `.font-body-md` | 16px | 400 | 1.6 | 0 |
| `.font-label-caps` | 11px | 600 | 1 | 0.12em |
| `.font-stat-value` | 20px | 700 | 1 | - |

### Mobile (321px - 768px)
| Class | Size | Weight | Line Height |
|-------|------|--------|-------------|
| `.font-h1` | 28px | 700 | 1.15 |
| `.font-h2` | 22px | 700 | 1.2 |
| `.font-h3` | 18px | 600 | 1.3 |
| `.font-body-lg` | 16px | 400 | 1.6 |
| `.font-body-md` | 15px | 400 | 1.6 |
| `.font-stat-value` | 18px | 700 | 1 |

### Extra Small Mobile (320px - 390px)
| Class | Size |
|-------|------|
| `.font-h1` | 26px |
| `.font-h2` | 20px |
| `.font-body-lg` | 15px |
| `.font-body-md` | 14px |

---

## READING_RHYTHM

### Paragraph Constraints
- **Desktop:** `max-width: 70ch` — optimal reading measure
- **Mobile:** `max-width: 100%` — full width on small screens
- **Line height body:** 1.65 — comfortable reading pace
- **Line height headings:** 1.15-1.3 — cinematic authority

### Section Spacing
| Context | Value |
|---------|-------|
| Heading → Body gap | 16-24px |
| Section vertical padding | 48px mobile / 80px desktop |
| Card internal padding | 24px |
| List item gap | 12-16px |

---

## TYPOGRAPHY_FEEL

### Headings
- **Feeling:** Cinematic, calm, authoritative
- **Weight:** 700 for H1/H2, 600 for H3-H5
- **Letter spacing:** Slightly negative (-0.02em to -0.01em) for density
- **Line height:** 1.15-1.3 — not too tall, not compressed

### Body
- **Feeling:** Conversational, reflective, documentary-like
- **Weight:** 400 (regular) — no artificial boldness
- **Line height:** 1.65 — breathing room for reading
- **Max width:** 70ch — prevents long-line fatigue

### Labels/Caps
- **Weight:** 600 (not 700) — slightly lighter
- **Letter spacing:** 0.12em — tracked out, not cramped
- **Size:** 11px — small but legible

---

## MOBILE_FRIENDLY_BODY

| Rule | Value | Reason |
|------|-------|--------|
| Min body size | 15px (mobile) | Prevents unreadable tiny text |
| Line height body | 1.6 (mobile) | Prevents cramped stacking |
| Max paragraph width | 100% (mobile) | Full width reading on small screens |
| Heading scale reduction | ~40% smaller | Prevents overwhelming headlines |

---

## APPLIED_IN

- `src/index.css` — Full typography scale system
- Breakpoints: 768px, 390px
- Reading rhythm applied via `p, .reading-block` selectors