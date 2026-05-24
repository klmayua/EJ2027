# Visual Hierarchy Audit
**Project:** EJ THE VOICE 2027
**Focus:** Attention guidance and visual pacing

## Hierarchy Evaluation

### 1. Typography Rhythm
- **Scale:** `font-h1` $\rightarrow$ `font-h2` $\rightarrow$ `font-body` is strictly followed in rebuilt pages.
- **Conflict:** `DonatePage` and `JoinPage` use `font-display` and `font-bold` in ways that clash with the `Sora/Inter` editorial system.

### 2. Attention Anchors
- **Gold Usage:** Gold (`#D4AF37`) is correctly used as a "Trust Anchor." However, in `DonatePage`, it is overused (gradient-gold, gold borders, gold buttons), which makes it feel like a "Sales Page" rather than a "Service Page."
- **Whitespace:** Editorial pages have "Luxury Whitespace." Functional pages are "Dense/Utility." This creates a visual disconnect.

### 3. Visual Pacing
- **Scroll Cadence:** The `HomePage` has a beautiful "breath $\rightarrow$ content $\rightarrow$ breath" rhythm. The `TransparencyPage` (now rebuilt) follows this. The `JoinPage` is a "Wall of Inputs," which is an emotional breakpoint.

## Recommendations
- Introduce "Breath Sections" (empty space or minimal quotes) in the `JoinPage` and `DonatePage` to break the utility density.
- Reduce the "Gold Saturation" on functional pages to keep gold as a rare, high-value signal.
- Normalize the `border-t` editorial pattern across all page sub-sections.
