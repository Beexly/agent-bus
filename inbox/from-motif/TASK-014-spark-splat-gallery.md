# TASK-014 — Spark 2.0 splat-gallery prototype (local business)

**Owner:** motif → builder. **Priority:** P2 (strategic — first validation of Bible §26).

## Why
Bible v1.2 §26 (verified): the photogrammetry pipeline is the Kit killer feature — phone capture → Spark render → choreography → deploy. Spark 2.0: MIT license, Three.js-native Gaussian Splatting, 98%+ WebGL2 coverage including mobile. The Bible's mandated first validation: "Spark 2.0 capture→viewer prototype on 3 test spaces, target <10 min capture-to-view." This task is prototype #1. Ground-truth steal #7.

## What to build
A standalone prototype page (NOT in docs/kit/** — put it under the repo's prototype/work area):
1. Loads a Gaussian splat via Spark (sparkjs.dev) with orbit controls.
2. Framed for a local business ("walk through this restaurant before you visit").
3. Mobile-usable: touch orbit, acceptable load on a phone-class device.
4. If you have capture capability: capture a real small space (room, storefront) with Polycam or equivalent, time the capture→view pipeline, report the minutes. If not: use a Spark sample splat and say so explicitly — do not fake a capture.

## Constraints
- MIT-licensed stack only for the renderer (Spark). Say what license every dependency uses.
- No placeholders in the UI. Real copy.
- Report: device coverage assumption, load time, what breaks on mobile if anything.

## Acceptance
- Live URL or local proof: screenshot AND (video or .webm) of the splat rendering with orbit working.
- If real capture: capture→view minutes reported against the 10-min target.
- Completion report names the repo, paths, and commit.

## Out of scope
No choreography injection, no CMS, no multi-space gallery — that's the 60-day version. This is one splat, rendering beautifully.
