# Interaction Consistency Audit
**Project:** EJ THE VOICE 2027
**Focus:** Tactile feedback and navigation flow

## Interaction Analysis

### 1. Hover Behavior
- **Editorial Pages:** Subtle, restrained transitions (e.g., `hover:gap-3`, `hover:brightness-110`). This is correct.
- **Functional Pages:** Some legacy `hover:-translate-y-px` or aggressive color shifts remain.
- **Consistency Gap:** The "feel" of interacting with a button on the `HomePage` is different from the `JoinPage`.

### 2. Navigation Cadence
- **Back Links:** "Back to Home" vs "Back". Need a unified "Return" pattern across all secondary pages.
- **CTA Transitions:** Transition from `HomePage` (Editorial) $\rightarrow$ `VolunteerPage` (Humanized) is smooth. Transition $\rightarrow$ `DonatePage` (SaaS) is jarring.

### 3. Tactile Feedback
- **Buttons:** The `btn-gold` and `btn-primary` are stable, but `DonatePage` uses a generic `btn-gold` without the documentary spacing.
- **Inputs:** Form fields in `JoinPage` and `ContactPage` use standard borders; they need the "Imperial Civic" muted style to feel less like a web-form and more like a civic registry.

## Recommendations
- Standardize all "Back" links to a simple `ArrowBack` + "Back".
- Implement a uniform "Tactile Press" effect for all buttons (subtle scale down on active).
- Normalize input field focus states across all forms to avoid "standard browser" feel.
