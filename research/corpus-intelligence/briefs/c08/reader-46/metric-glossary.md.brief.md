# docs/arxiv-program/research/2026-09-21/nextgenstats-profile/metric-glossary.md

## What it is (1-2 sentences)
A 105-line @NextGenStats metric glossary compiled from a 48-post pass (Sep 20, 2025 → Apr 25, 2026) plus a pass-2 (80 posts): ~50 NGS metrics with worked examples and pipeline facts. NGS data/methodology is internal reasoning fuel only — never shown publicly per Garrett's standing doctrine.

## Key metrics/methods (formulas where given, else "not specified")
- MTF (example: Walker 15), RYOE (+101 example), CPOE (+16.7% Purdy), EPA/dropback, pressure rate, get-off (0.70s Van Ness), quick pressures (<2.5s — only the printed definition given), time to pressure (avg 2.9s), pressure probability (75% threshold), top speed, YAC, target separation, WP added, target EPA allowed by DB (−30.1 Dean), yards per coverage snap (Woolen 0.5), pressure rate over expected, makes over expected (+6.1 Fairbairn), draft model scores (Overall/Production/Athleticism 0–100 + Raw ATH 10.0), scramble EPA.
- Completion-probability model: XGBoost, 36K+ attempts, R²=0.98 vs actual.
- RYOE model: 2D CNN on 5 vector features (x, y, speed, accel, dir) by The Zoo (2,000+ entrants, CRPS-scored).
- Tackle-probability pipeline: >2M datapoints, frame-level every 0.1s, ~20 features.
- QB Passing Score: TCN → spliced binned-Pareto.
- Pipeline facts: RFID 10x/s players, 25x/s ball, ~300M datapoints/season (2021), 500–1,000 stats/play, 75+ ML models on AWS.
- 2026 new metrics: Run Scheme Classification, Run Blocking Matchups & Metrics, Route Classification 2.0; new product "Ask NFL IQ".
- Public inventory: Kaggle Big Data Bowl, nflverse load_nextgen_stats(), SumerSports SportsTrackingTransformer (ADE 4.61 vs 5.28 2D-CNN baseline — INFERENCE on the exact baseline figure; the file reports the comparison as a win for the transformer), dead APIs api.nfl.com / nextgenstats.nfl.com → 401.

## Data sources named
- @NextGenStats X posts (48-post pass + 80-post pass-2)
- NFL NGS tracking (RFID chips, 10 Hz players / 25 Hz ball)
- Kaggle Big Data Bowl, nflverse (load_nextgen_stats()), SumerSports SportsTrackingTransformer

## Findings (numbers and facts, not vibes)
- ~50 metrics inventoried with per-metric examples and thresholds (e.g., pressure probability fires at 75%; quick pressures defined <2.5s; average time-to-pressure 2.9s).
- NGS scale: ~300M datapoints/season (2021), 500–1,000 stats per play, 75+ ML models running on AWS.
- Model recipes are public: completion probability = XGBoost on 36K+ attempts (R²=0.98); RYOE = 2D CNN on (x, y, speed, accel, direction); tackle probability = frame-level (0.1s) pipeline on >2M datapoints with ~20 features; QB Passing Score = TCN into spliced binned-Pareto.
- 2026 additions: Run Scheme Classification, Run Blocking Matchups & Metrics, Route Classification 2.0, "Ask NFL IQ" product.
- Public access paths documented: Big Data Bowl (Kaggle), nflverse loader, SumerSports transformer (ADE 4.61); api.nfl.com and nextgenstats.nfl.com are dead (401).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB-BEHAVIOR: CPOE, EPA/dropback, scramble EPA, QB Passing Score, time-to-pressure/get-off — the QB efficiency and pocket-behavior suite.
- OL: Pressure rate, pressure rate over expected, get-off, time to pressure — OL/DL matchup signals.
- SCHEME: Run Scheme Classification and Route Classification 2.0 (2026) — scheme-label features for matchup modeling.
- TRUST-SIGNAL: NGS internal-only doctrine — these metrics are reasoning fuel, never public surface; the glossary is the reference for which signals exist.
- OTHER: RYOE, YAC, target separation, yards per coverage snap, makes over expected — skill-position and coverage efficiency metrics for prop/DFS modeling.

## Engine-actionable? (yes/no + one-line what)
Yes — use as the authoritative internal reference for which NGS signals exist and their public model recipes (re-implement as GSE's own, per the re-implementation rule), weighted internally and never surfaced publicly.
