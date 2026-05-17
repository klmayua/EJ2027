# BASELINE INVENTORY
## PROJECT THE VOICE — Surgical Refactor

### Date: May 2026

---

## ARCHITECTURE OVERVIEW

### Detected Stack
- React + Vite
- TailwindCSS
- Zustand-style store architecture
- Prisma (backend patterns)
- GitHub Actions ready

### Key Directories to Preserve

| Directory | Purpose | Status |
|-----------|---------|--------|
| src/core | Command engine, hydration, storage adapter | PRESERVE |
| src/lib | Event bus, realtime, search, storage | PRESERVE |
| src/analytics | Tracking, events, useAnalytics | PRESERVE |
| src/layouts | Shell architecture | PRESERVE + REFACTOR |
| src/store | Zustand stores (most) | PRESERVE |
| src/workspaces | Campaign operating system | PRESERVE + REFACTOR |

### Pages to Refactor

| Current File | Target Action |
|--------------|---------------|
| HomePage.jsx | FULL REWRITE |
| ProjectNigeriaPage.jsx | DELETE |
| TransparencyPage.jsx | RENAME → AccountabilityPage.jsx |
| JoinPage.jsx | REFACTOR → VolunteerPage.jsx |
| VolunteerApp.jsx | INSPECT THEN DECIDE |
| DonatePage.jsx | INSPECT THEN DECIDE |

### Pages to Create

- AboutPage.jsx
- BiographyPage.jsx
- TimelinePage.jsx
- VoicePage.jsx
- VisionPage.jsx
- CommunityPage.jsx
- MediaArchivePage.jsx
- PressPage.jsx
- UpdatesPage.jsx
- ListeningPage.jsx
- ContactPage.jsx

---

## EXECUTION STATUS

**Phase**: 0 - Baseline Lock

**Next**: Phase 1 - Identity Purge

---

*Inventory Created: May 2026*