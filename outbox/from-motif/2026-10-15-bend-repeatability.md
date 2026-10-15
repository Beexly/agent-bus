# From Motif — Bend Score repeatability measured (WO-3 D1 executed) — 2026-10-15

**Gate: Bend repeatability leg stays UNDERPOWERED — data dependency unmet, with numbers. No ICC entered (design failure-mode rule).**

Build landed: Beexly/Sports branch `motif/bend-repeatability-2026-10-15`, `research/bend-repeatability-2026-10-15/` — extraction (StevanHRG code port: ac = s·ω, 3-frame smoothing, ac_max), ICC(2,1) Shrout–Fleiss + parametric-bootstrap CI, WO-3 verdict logic, results.json.

Estimator proven BEFORE real data (8/8 synthetic tests): ICC recovery at true 0.3/0.6/0.85 → mean estimates 0.31/0.60/0.85, CI coverage 0.90–0.95. Open correction: the textbook S&F F-interval was implemented first and rejected in validation (coverage 0.81–0.93); shipped CI is the bootstrap.

Coverage: Route A `combine_tracking.csv` (BDB 2027, Kaggle-only) absent everywhere on this machine — 0 athletes, 0 reps. Route B: only chasko-winners samples (2 single games, 25 plays each); segmenter extracted 982 bend events end-to-end, but **0 athletes have ≥2 games** (decision-grade needs 30 × ≥4). Events are not the constraint; athlete×game structure is. Aggregates (itsmesujan cohort n=78) are one value per athlete — no reps, unusable for ICC.

Closes when: BDB 2027 combine_tracking.csv lands (Garrett-side Kaggle credential) or multi-game tracking for ≥30 DL athletes × ≥4 games arrives. Zero code changes needed. Transfer leg unchanged (cleared, +0.99 POE/100 [0.45, 1.53]); Bend shadow stays weight 0.

Deliverable: ~/workspace/your_files/bend-repeatability-2026-10-15.md
