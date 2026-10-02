# docs/arxiv-program/research/2026-09-21/arxiv-deep/0010-nfl-dfs-neural-projections-milp.md
## What it is (1-2 sentences)
A full-paper deep-read of Mahoney & Paniak (2023, arXiv:2309.15253v2), which pairs a supervised neural network forecasting weekly NFL DraftKings FPTS with a MILP maximizing projected points under salary/roster constraints. The verdict is REJECT as a production approach: against real DraftKings users the lineups "generally fell in approximately the 31st percentile (median)"; retain only the MILP skeleton as a regression-test floor.
## Key metrics/methods (formulas where given, else "not specified")
- Two-stage: neural-network FPTS projection (architecture, features, optimizer, loss all "not stated in paper as recoverable" — no equations recovered), then MILP (objective form per paper not recovered; GSE-inferred standard form max sum proj*x subject to salary cap + positional counts, x in {0,1}).
- Evaluation metrics: average FPTS vs random lineups; percentile finish vs real DraftKings user lineups. Projection accuracy metrics (MAE/RMSE) not reported in the paper — it evaluates lineup outcomes only.
## Data sources named
2018 NFL regular-season player data "gathered and scraped from a variety of sources across the internet" (exact sources not recoverable from the paper); real-world DraftKings user lineups as benchmark (collection method not recoverable).
## Findings (numbers and facts, not vibes)
- Optimized lineups outperformed randomly-created lineups on average (exact margin not recoverable).
- Against real DK users, generated lineups "generally fell in approximately the 31st percentile (median)" — the method loses to ~69% of the field.
- Authors frame the work as a baseline for future improvement; the brief reads this as an honest negative result: point-estimate maximization cannot find high-ceiling, low-duplication tail events in top-heavy GPPs.
- A related Penn State honors thesis by overlapping authors used XGBoost on 2017 data and lost $11,086 in simulated DK Double-Up contests (related work, not this paper).
- Diagnosed gaps vs GSE practice: no ownership/leverage, no player correlation/stacking, no ceiling/floor asymmetry, no contest-payout structure, no portfolio/duplication handling, no uncertainty quantification; stale single-season 2018 data; undocumented pipeline (no feature list, architecture, split protocol, projection accuracy) — not reproducible.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: DFS optimizer-baseline discipline — a documented negative result (31st percentile) that validates Garrett's standing "payout-aware stochastic optimization" direction and gives a floor metric ("never do worse than naive point-max") for the existing optimizer.
- TRUST-SIGNAL: the brief documents how the related 40,000-run Monte Carlo numbers (6.97% P(win)) were stripped from public copy as unverifiable — a calibration-honesty precedent.
## Engine-actionable? (yes/no + one-line what)
Yes — implement only the MILP skeleton (max proj x s.t. cap + roster) as a weekly baseline module against Garrett's live-gate optimizer and verify it reproduces ~31st percentile on modern slates as the floor; do not adopt its pipeline.
