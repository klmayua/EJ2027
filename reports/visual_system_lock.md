# Visual System Lock
**Project:** EJ THE VOICE 2027
**Phase:** DEMOABILITY_SPRINT
**Version:** 1.0 (Immutable)

This document defines the mandatory visual and structural patterns for the platform. Any deviation is considered "SaaS Leakage" and must be corrected.

## 1. Color Palette Lock
All colors MUST be derived from the established CSS variables. Hardcoded hex values for brand colors are FORBIDDEN.

| Semantic Role | Variable | Value | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Navy** | `--color-platform-navy` | `#062B49` | Main backgrounds, primary branding |
| **Deep Navy** | `--color-platform-navy-deep` | `#031B30` | Section backgrounds, footer |
| **Trust Gold** | `--color-platform-gold` | `#D4AF37` | Accents, Trust Anchors, CTAs |
| **Civic Green** | `--color-trusted-green` | `#16A34A` | Verified status, Success indicators |
| **Editorial White** | `--color-neutral-white` | `#F8FAFC` | Light backgrounds, readability |
| **Muted Text** | `--color-neutral-muted` | `#94A3B8` | Secondary labels, captions |

**FORBIDDEN COLORS:**
- `Standard Blue (#3b82f6)` $\rightarrow$ Replace with `--color-platform-navy`
- `SaaS Gradients (Orange/Purple/Silver)` $\rightarrow$ Replace with `--color-platform-gold` or subtle navy gradients.

## 2. Typography Lock
Typography must follow the "Cinematic Editorial" scale. Do not use generic `font-bold` or `text-4xl` without a semantic class.

| Element | Mandatory Class | Desktop Size | Mobile Size |
| :--- | :--- | :--- | :--- |
| **Main Headline** | `.font-h1` | 48px | 28px |
| **Section Header** | `.font-h2` | 36px | 22px |
| **Sub-header** | `.font-h3` | 24px | 18px |
| **Primary Body** | `.font-body-lg` | 18px | 16px |
| **Secondary Body** | `.font-body-md` | 16px | 15px |
| **Label/Caps** | `.font-label-caps` | 11px | 11px |

## 3. Pattern Lock (The "Civic" Standard)

### A. CTA Language
- **FORBIDDEN:** "Join Now", "Fund the Future", "Get Started", "Unlock Rewards".
- **MANDATORY:** "Become Part of the Work", "Support the Vision", "Find Your Place", "Get Involved".

### B. Structural Patterns
- **FORBIDDEN:** Floating SaaS cards, Pricing Tiers (Bronze/Silver/Gold), Neon metrics, Conversion funnels.
- **MANDATORY:** Editorial border-top blocks, Vertical timelines, a "Civic Registry" form (simple, clean, honest), Narrative-led sections.

### C. Iconography
- **Sourcing:** ALL icons MUST come from `@material-symbols-svg/react/outlined`.
- **FORBIDDEN:** `lucide-react` icons in any public-facing page.
- **Styling:** Icons should be used as "Trust Anchors" (Gold on Navy) or "Utility" (Muted on White).

## 4. Interaction Lock
- **Hover Effect:** Subtle brightness shift or gap increase.
- **FORBIDDEN:** `hover:-translate-y-1`, bounce animations, glowing borders.
- **Navigation:** All secondary pages MUST have a consistent `ArrowBack` + "Back" link.

## 5. Accessibility & Quality
- **Contrast:** Maintain WCAG AA minimum on all text.
- **Spacing:** Stick to the design system scale (e.g., `py-20 md:py-32`). No arbitrary `pt-[56px]`.
