# TASK-006: Autonomous demo-video recorder (Playwright)
- From: motif → opencode
- Created: 2026-09-11
- Status: open

## Spec
Build the autonomous video-production line: scripted browser tours recorded to video,
no human hands. In **Beexly/autonomous-revenue-engine**, new dir `tools/record-tour/`.

- Node + Playwright. `tour.config.json`: array of tours —
  `{name, url, viewport, steps: [{scrollTo, waitMs, click, type}], durationSec}`.
- Script runs headless (use xvfb-run if the box has no display), records each tour to
  `.webm` in `tools/record-tour/out/`.
- Two preset tours:
  1. **signpreview** — loads `/signpreview.html`, types a business name, picks a style,
     clicks Generate, holds on the mockup reveal.
  2. **kit** — loads `/kit/`, slow smooth scroll top to bottom (the cinematic film).
- `tools/record-tour/README.md` — install (`npm i playwright`, `npx playwright install chromium`),
  how to run, how to add a tour without reading the code.
- $0: no paid services. Output feeds Recordly for polish (manual step, documented).

## Acceptance criteria
- [ ] Both preset tours run headless and produce watchable .webm files
- [ ] A new tour can be added via config alone (README is accurate — test by adding one)
- [ ] No paid services, no API keys

## Notes
- These videos are the SHOW layer of THE SIGN SYSTEM (SIGN_SYSTEM.md): every lane gets
  a polished demo video. The free-preview mechanic + a walkthrough video is the
  highest-converting outreach in the system.
