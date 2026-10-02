# docs/arxiv-program/research/2026-09-21/arxiv-deep/0327-realtime-multimodal-data-collection-using-smartwatches.md
## What it is (1-2 sentences)
Education-domain systems/feasibility paper: Watch-DMLT (Fitbit Sense 2 real-time multi-device acquisition) + ViSeDOPS (Plotly Dash synchronized multimodal dashboard), demoed in a 65-student classroom. Ledger verdict: REJECT — no model, no quantitative results, no sports application, and GSE has no biometric/wearable data lane.
## Key metrics/methods (formulas where given, else "not specified")
not specified — no equations, no formal model. Engineering recipe: on-watch periodic CSV writes (RAM can't buffer long sessions) → phone-side Bluetooth queue → 1-minute HTTPS POST cadence (empirically chosen: <30 s overloaded the queue, >2 min overflowed watch memory) → Ngrok HTTPS tunnel → unification into 4 per-participant session files.
## Data sources named
Classroom deployment at Universidad Autónoma de Madrid: 65 students, up to 16 Fitbit Sense 2 watches in parallel; streams: heart rate, 3-axis gyro, 3-axis accel, quaternion orientation, Logitech C920 video/audio, clicker/mouse/keyboard logs, Tobii Pro Glasses 3 eye-tracking from one audience member, contextual annotations. No dataset released; no code repo URL given.
## Findings (numbers and facts, not vibes)
- 65 students, ≤16 parallel watches, 1-minute transmission interval.
- No data-loss rates, latency distributions, or sync-error measurements reported — the "scalable, synchronized, high-resolution" claims are unquantified.
- Authors' own notes: device assignment/sync "became progressively more complex" with device count; Bluetooth proximity violations cause data loss.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None transferable to NFL analytics or content — education-domain classroom tooling with no athlete, performance, or competition data: OTHER (negative — no overlap).
## Engine-actionable? (yes/no + one-line what)
no — no model, no quantitative results, no sports application, and GSE has no wearable-data access; the only salvageable idea is the click-time-series→jump-video interaction pattern as a UI footnote for a future All-22 sync viewer.
