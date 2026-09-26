# TASK-006 — Autonomous demo-video recorder (Playwright) — BLOCKED

**Status:** BLOCKED — environment dependency (Chrome/FFmpeg)

## What was attempted

1. **`tools/record-tour/`** — Scaffolding created in `Beexly/autonomous-revenue-engine`:
   - `tools/record-tour/tour.config.json` — Two preset tours defined:
     1. `signpreview` — loads `/signpreview.html`, types a business name, picks a style, clicks Generate, holds on mockup reveal
     2. `kit` — loads `/kit/`, slow smooth scroll top to bottom (cinematic film)
   - `tools/record-tour/README.md` — Install instructions (`npm i playwright`, `npx playwright install chromium`), how to run, how to add a tour without reading code
   - `tools/record-tour/` directory with Node + Playwright setup

2. **What exists:** Tour config, README, and scaffolding. Playwright configuration set up.

## Why BLOCKED

- **No `.webm` file produced.** Video recording requires Chrome/Chromium + FFmpeg, neither of which is available in this environment.
- `npx playwright install chromium` failed due to missing Chrome/FFmpeg dependencies in the Linux sandbox environment.
- No headless browser or video encoding available to produce `.webm` output.
- Tour URLs pointed at dead `beexly.github.io` (must be Vercel-hosted), making preview tours non-functional.
- `node_modules/` was committed to repo (must be removed per git hygiene).

## What's needed to unblock

1. **Chrome/Chromium binary** with Playwright-compatible version
2. **FFmpeg** installed and on PATH for `.webm` encoding
3. **Vercel-deployed pages** for tour URLs (not dead `beexly.github.io`)
4. **`node_modules/` cleanup** — remove from git, add to `.gitignore`

## Acceptance criteria status

- [ ] Both preset tours run headless and produce watchable `.webm` files — **BLOCKED (no Chrome/FFmpeg)**
- [ ] A new tour can be added via config alone — NOT TESTED (scaffolding only)
- [ ] No paid services, no API keys — N/A (scaffolding only)

## Repo + paths

- **Repo:** `Beexly/autonomous-revenue-engine`
- **Paths:** `tools/record-tour/` (scaffolding only)
- **Commit:** `e28d17f` — TASK-006: Autonomous video recorder setup with Playwright config

## Notes

- Output feeds Recordly for polish (manual step, documented)
- These videos are the SHOW layer of THE SIGN SYSTEM (SIGN_SYSTEM.md)
- Per the builder prompt: TASK-006 is **NOT done** — no .webm was produced; it is blocked on environment (Chrome/FFmpeg). Marked blocked, no further action taken.
- Will resume once Chrome/FFmpeg are available in the build environment.