# docs/arxiv-program/research/2026-09-21/arxiv-deep/0267-the-effects-of-major-league-baseballs.md
## What it is (1-2 sentences)
Deep read of arXiv:2411.15075v1 (Kennedy-Shaffer, 2024): quasi-experimental evaluation of MLB's 2023 infield-shift ban — league-wide difference-in-differences (shifted LHB vs rarely-shifted RHB) plus player-level synthetic controls on 30 heavily-shifted players vs 58 donors, with a full placebo battery. Ledger verdict: ADOPT — the DID + synthetic-control protocol with pre-registered treatment/control construction and placebo battery is the strongest reusable template in this wave for evaluating NFL rule changes, injuries, and coaching changes.
## Key metrics/methods (formulas where given, else "not specified")
- DID estimator: θ̂(j,t) = (Y(j,1,t) − Y(j,1,t−1)) − (Y(j,0,t) − Y(j,0,t−1)); 2023 vs 2022 primary; 2024 DID estimates the incremental effect θ(j,2024) − θ(j,2023). Assumptions: consistency, no anticipation, no spillover, parallel trends. Unbiasedness proof in technical appendix.
- SCM (tidysynth R): θ̂(j,n,2023) = Y(j,1,n,2023) − Ŷ⁰(j,1,n,2023), Ŷ⁰ = Σₘ w(j,n,m)·Y(j,0,m,2023), Σₘ w = 1, w ≥ 0; weights minimize (Σₖ vₖ[X(k,1,n) − Σₘ w X(k,0,m)])^½ with importance weights v chosen to minimize pre-intervention MSPE.
- SCM covariates: (1) player age 2022; (2) outcome value each pre-intervention season; (3) PA; (4) hits; (5) singles; (6) HR; (7) BB%; (8) K% — items 3–8 for 2022, 2021, pre-2020 average.
- Placebo battery: in-unit (25 players with 15–30% shift rates as fake targets), in-time (fake 2022 intervention), donor-placebo null distribution (58 donors each as fake target).
- League-wide rescaling: ATT × share of PAs in treated category (23.3%).
## Data sources named
FanGraphs splits leaderboard (bases-empty PAs, 2015–2024 ex 2020); Baseball Savant Statcast Custom Leaderboard + Batter Positioning Leaderboard (≥250 PAs; 30 targets ≥75% 2022 shift rate, 58 donors ≤15%). Code: bit.ly/QE-Baseball (GitHub); interactive results: bit.ly/SCM-baseball (Shiny app). Most reproducible paper in the wave.
## Findings (numbers and facts, not vibes)
- DID (bases-empty): LHB BABIP 0.275 → 0.287 (diff 0.012); RHB 0.291 → 0.294 (diff 0.003); DID = 0.009. LHB OBP 0.299 → 0.315 (diff 0.015); RHB 0.303 → 0.309 (diff 0.006); DID = 0.009.
- Corey Seager (92.8% 2022 shift rate): OBP synthetic 0.305 vs observed 0.390 (effect 0.085); OPS 0.742 vs 1.013 (effect 0.271); wOBA 0.304 vs 0.419 (effect 0.115); donor-placebo p = 0.017 on all three outcomes.
- Over 75% of target players had positive estimated effects; a 10-pp higher 2022 shift rate ↔ +11 points OBP, +31 points OPS, +17 points wOBA.
- Largest effects: Seager, Matt Olson, Yordan Alvarez, Shohei Ohtani (wOBA >80 points, OPS >200 points).
- Aggregate league effect ≈ 2 points of OBP/BABIP (~one extra on-base event per 500 PAs).
- Caveats: possible negative pre-trend 2021–2022 (bias toward null); no-spillover shaky (pitcher behavior may have changed league-wide); 250-PA selection; ATT context-specific to 2023 baseball.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: standard quasi-experimental toolkit for GSE — DID for rule-change evaluation (2024 NFL kickoff overhaul), SCM for causal injury impact (QB/OL loss vs donor pool of stable teams); pre-registered treatment/control + placebo battery as discipline; extension path to staggered DID for mid-season injuries/coaching firings.
- COACHING: causal evaluation of coaching changes (staggered/event-study DID form).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt as GSE's causal-evaluation standard: first application = 2024 kickoff-rule DID on nflverse (treated: kickoff touchback rate vs control series, 2015–2024 with placebo gates), second = QB-injury SCM; accept the protocol if the kickoff replication survives its placebo battery (p < 0.10 two-sided) with a null in-time placebo.
