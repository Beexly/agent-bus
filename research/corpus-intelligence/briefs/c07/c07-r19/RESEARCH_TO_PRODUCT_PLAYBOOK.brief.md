# engine/research/2026-09-26/RESEARCH_TO_PRODUCT_PLAYBOOK.md
## What it is (1-2 sentences)
Synthesis layer over the 750-paper arXiv program corpus: what the corpus is (973 ledgers, 25 ADOPT crown jewels), how it improves GSE via three levers (calibrate, price edge, build private data), and a P0→P5 execution order with hard rules — model freeze still holds at v5.2.7, no gate flips, no invented numbers.
## Key metrics/methods (formulas where given, else "not specified")
Acceptance gates per transfer: e.g. ENIR ≥15% ECE vs IsoRegC/temp with zero AUC loss; per-cell extremizing ≥0.003 log-loss and ≥10% ECE vs global Platt; CRC loss-rate ≤ α−0.01 at ≥60% volume; Ruin ≤1% for Kelly sizing; CLV bar 52.4% (Wilson CI) — never claim PROVEN until book-priced CLV/Wilson clears it. Display-p formula: market + 0.10·(model−market) with w=0.10. Kelly: fractional κ≈0.25 (flagged as folklore — not variance-budgeted).
## Data sources named
docs/research/2026-09-21/arxiv-deep/ (973 ledgers); arxiv-program/ trackers (b83e12f1); EXHAUSTIVE_IMPROVEMENT_CATALOG.md; GOOGLE_DEEP_RESEARCH_BRIEF.md; docs/ops/CALIBRATION_STATUS.md; docs/factors/INDEX.md; docs/ops/LAST_PLAN_2026-09-15.md. 25 ADOPT ledger ids named (2609.06739 profit-bias identity, 2010.12508 decorrelate-from-market, 2107.08827 fractional Kelly, 2303.06021 select on classwise ECE, 2306.01740 odds-feed QA, 2010.00781 live WP calibration surfaces, 2608.02081 isotonic Bradley-Terry, 2604.09143 score-driven Elo, 1301.2954 ranking lasso, 2608.15688 training-free MOT, 2607.18009 CMP scores, 2601.03099 synthetic control, 2602.23233 TMLE, 2505.11841 estimand-first causal, 2411.15075 DID kickoff study, 1906.03339 next-gen-scraPy, 2102.07081 max-min aggregation, 2211.04459 flexBART, 2405.17680 UniTraj, 2510.04516 adaptive API rate limiting, 2508.17157 SportsQL, 2408.11847 Prompto).
## Findings (numbers and facts, not vibes)
- Corpus inventory: 973 ledgers, 767 tracker rows, 750 valuable (741 ADAPT + 25 ADOPT with transfer notes). Lane counts: tracking_ngs 119, team_ratings 92, calibration_uncertainty 65, experimental 63, win_spread_total 62, odds_market 55, props_fantasy_dfs 52, kelly_sizing 37, ensembles 36, abstention 35, causal_injury 33, nlp_llm 26, data_api_infra 19, weather 12, bayesian_statespace 11.
- Live CLV measurement: BEAT_CLOSE 23.2% (Wilson ~0.212–0.253) vs bar 52.4%; MATCHED-excluded framing 40.8%; CLV shortfall is model skill, not just archive holes.
- Live calibrators already in repo: isotonic/PAV, Platt, temperature, Venn-Abers, CQR/conformal, grouping loss, Mondrian, Clopper–Pearson, bias-corrected ECE gate, market-anchored shrink w=0.10, Murphy REL/RES/UNC.
- Honest gaps: all live calibrators are global (can't condition on regime); no sharpness-conditional-on-coverage objective; no finite-sample loss-rate contract on posted slate; binary-only recalibration; diagnostics mix calibration with discrimination; no online recalibration under drift; κ=0.25 folklore; 21-day line-archive hole 2026-08-23–09-12; MATCHED_CLOSE policy open (23.2% include vs 40.8% exclude).
- Accuracy-relevant paper result: selecting on accuracy + Kelly collapsed −35% ROI in the cited paper (2303.06021) — select on classwise ECE instead.
- Props usage features A14 FTN, A22 RZ→TD, A23 snap slope, A25 weather yards are CANDIDATE but blocked on the props join key (C-358/C-381/C-383).
- Hard rules: no gate flips, no floor lowering, no MODEL_VERSION without L11 frozen-holdout scorecard, no fabricated product data, withhold-only stays bump-free, never claim PROVEN until book-priced CLV/Wilson clears 52.4% with n and exclusions.
- P0→P5 execution order: P0 trust & measurement (CLV integrity pack), P1 calibration lock, P2 market edge (de-vig A/B, sizing lockbox), P3 props + private data, P4 ratings & ensembles, P5 site honesty.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Select on classwise ECE, not accuracy (accuracy+Kelly collapsed −35% ROI) — TRUST-SIGNAL
- Train to decorrelate from market, not maximize accuracy — TRUST-SIGNAL
- 4-SD stale-quote filter + p_bs on every published ROI — TRUST-SIGNAL
- Per-cell extremizing / calibration-by-regime conditioning — TRUST-SIGNAL
- CRC loss-rate contract for conviction/withhold — TRUST-SIGNAL
- Isotonic Bradley–Terry learn-the-link + score-driven Elo — OTHER
- Ranking-lasso tiers for content + within-tier bets — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — execute the P0→P5 order (CLV integrity pack, calibration lock, de-vig/sizing, props join unblock, then ratings polish), and adopt the classwise-ECE model-selection and decorrelate-from-market training objectives as standing gates.
