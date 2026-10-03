# dfs/research/2026-09-25/youtube-builder-research/handoff-ethandojo-nfl-builds-2026-09-25.md
## What it is (1-2 sentences)
Implementation handoff (Motif → coding agent, 2026-09-25) derived from a full Instagram profile sweep of @ethandojo (Ethan Do), reverse-engineering his public-track-record NFL model's recipe and 10 AI build ideas into GSE engine modules. Methodology + build list to implement and beat, not clone (no public repo found; exact features/hyperparameters unknown).
## Key metrics/methods (formulas where given, else "not specified")
ethandojo's model recipe: XGBoost (decision-tree ensemble) on NFLverse 2018–present; features QB efficiency, explosive play rate, turnover margin, pass rush, recent point differential, player availability, with explicit roster-change adjustments; Monte Carlo 10,000-iteration season sims; Python/Pandas/scikit-learn stack. Posted record: Week 1 10-6, Week 2 11-5 (2026 season). Example output: NFC West 2026 — Seahawks 12-5 (88% playoffs), Rams 11-6 (85%), 49ers 10-7 (70%), Cardinals 6-11 (4%).
## Data sources named
NFLverse (2018–present, per ethandojo's stated recipe); his own videos/captions as the recipe source; Instagram @ethandojo profile sweep (all NFL videos Sept 2026 back to April).
## Findings (numbers and facts, not vibes)
- His track record is claimed in captions: 21-11 combined over Weeks 1–2 of the 2026 season (specific spreads/moneyline detail not captured; his weekly pick images did not parse).
- 10 build items specified as real callable engine modules: (1) game outcome predictor (XGBoost + Monte Carlo), (2) highlight reel detector (crowd-noise spikes + commentary cues via OpenCV/Whisper/FFmpeg), (3) defensive coverage analyzer (pre/post-snap alignment → coverage classification, YOLOv8/PyTorch), (4) contract value analyzer (production-per-dollar), (5) 4th-down decision grader (vs analytical models + win probability), (6) fantasy trade analyzer (value buckets, matchup-adjusted, PPR-aware), (7) AI offensive coordinator (train on opponent personnel/alignment/tendencies), (8) game film splitter (PySceneDetect/OpenCV, visual + audio cues), (9) opponent exploit finder, (10) draft copilot (conversational fantasy draft advisor — his demo: Achane vs Lamb debate at 1.09, Jefferson taken at 2.11).
- Rules: new files only, every module gets a test, log each wired item in docs/research/2026-09-21/wiring/IMPLEMENTED.md.
- Gaps explicitly flagged: weekly pick images unparsed; exact feature definitions/hyperparameters/training split unknown; story highlights + gated DM ideas inaccessible.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: item 5 (4th-down decision grader vs analytical models + win probability) and item 7 (AI OC trained on opponent tendencies) — coaching-tendency modeling primitives.
- SCHEME: item 3 (coverage classification from pre/post-snap alignment) and item 9 (opponent exploit finder) — scheme-analysis modules.
- QB-BEHAVIOR: item 1's feature list (QB efficiency as primary feature, roster-change adjustments) informs QB valuation modeling.
- OTHER: 10-module build list is a direct bench-widening plan for GSE capabilities (contract value, trade analyzer, draft copilot = product lanes beyond pick prediction).
## Engine-actionable? (yes/no + one-line what)
yes — the XGBoost feature list (QB efficiency, explosive play rate, turnover margin, pass rush, point differential, availability, roster-change adjustment) + 10k-iteration Monte Carlo is an implementable, consensus-verifiable game-prediction spec.
