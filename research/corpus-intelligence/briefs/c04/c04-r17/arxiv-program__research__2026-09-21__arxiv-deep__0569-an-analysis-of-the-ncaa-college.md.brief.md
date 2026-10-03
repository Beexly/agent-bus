# docs/arxiv-program/research/2026-09-21/arxiv-deep/0569-an-analysis-of-the-ncaa-college.md

## What it is (1-2 sentences)
Deep read of Benjamin Lucas (2024, arXiv:2403.03862v1), which uses a plain single-parameter Elo rating as an objective benchmark to audit CFP selection-committee decisions across every 4-team CFP season (2014–2023), centering on the 2023 exclusion of undefeated Florida State. Ledger verdict: ADAPT — the calibration recipe ports to NFL power-rating work; the CFP-audit framing has no GSE transfer.

## Key metrics/methods (formulas where given, else "not specified")
- Classic Elo: all teams init 1500; expected win prob p_A = 1 / (1 + 10^((R_B − R_A)/400)); update R_A* = R_A + 25·(O_A − p_A), O_A ∈ {0,1}; zero-sum for team B.
- K fixed at 25 for every game of every season — no tuning; paper notes the constant can be changed for sensitivity but performs no hyperparameter search.
- No margin-of-victory weighting, no home-field term, no preseason-prior regression, no recency decay; binary outcomes only (no ties in CFB overtime).

## Data sources named
All NCAA Division I (FBS) college football games, 2014–2023 — data vendor unnamed, no public URL (read notes CFBD/CollegeFootballData API could reconstruct it). CFP selection tables presented as results, not datasets. Not replicable as stated.

## Findings (numbers and facts, not vibes)
- 2023 selection-day Elo ranks: committee selections were Elo 1st (Michigan, 2174), 5th (Texas, 2050), 6th (Alabama, 2039), 13th (Washington, 1883); Florida State 11th (1951). Paper calls 2023 the largest Elo-vs-committee disagreement. Elo's top 4: Michigan, Georgia (2111), Ohio State (2108), Penn State (2061).
- Committee never selected the Elo top four in any season; twice selected four of the top five (2021, 2016).
- Only time Elo No. 1 was not selected: Alabama 2022 (Elo 2151; unranked by CFP).
- Three occasions a selected team was outside Elo top ten: Notre Dame 2020 (11th), TCU 2022 (12th), Washington 2023 (13th).
- Aggregate selections: Alabama 8 (3 championships), Clemson 6 (2), Ohio State 5 (1), Oklahoma 4, Georgia 3 (2), Michigan 3, Notre Dame 2, Washington 2, others 1 each.
- No out-of-sample prediction accuracy reported anywhere in the paper; predictive power claims cite prior literature (refs [1], [17], [15]).
- Limitations: no K tuning; no predictive backtest; ignores player availability (Jordan Travis injury — the committee's actual criterion); margin discarded (1-point win over Louisville counts same as a blowout); cross-season rating carryover unstated (if reset to 1500, September Elo is mostly noise); FSU-2023 result arguably an artifact of weak schedule with K=25 and no preseason prior.
- GSE implementation spec from the read: standard Elo baseline on nflverse 2000–2025 (32 teams init 1500, K grid 10–60 against log-loss) + NFL extensions the paper lacks: home-field offset (~55 Elo points, tuned), margin-of-victory multiplier, preseason prior regression toward 1500 (≈60–70% carryover). Acceptance gate: tuned K + HFA + regression beats fixed-K=25 recipe by ≥0.005 mean log-loss on 2020–2025 with same-direction Brier improvement. Improvement experiment: time-decaying per-season Bayesian Elo with team-specific K from a hierarchical prior (September information noisier than December).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Elo as a transparent "currently best" team-ranking benchmark for auditing subjective committee selections — OTHER (college playoff governance, no QB/coaching/OL/trust content transferable to the engine).
- Jordan Travis injury as the decisive unmodeled selection factor — TRUST-SIGNAL-adjacent caveat (player availability is the information the committee used that Elo cannot encode): tag OTHER with TRUST-SIGNAL note — INFERENCE: this reinforces that any GSE rating needs an availability/lineup layer before being used as a "best team" claim.

## Engine-actionable? (yes/no + one-line what)
Yes (baseline lane only) — document fixed-Elo (1500/K=25/divisor-400) as the tuned-Elo power-rating baseline on nflverse, with HFA offset, MOV multiplier, and regression-to-mean as the grid to beat it.
