# arxiv-deep/0421-rating-players-of-counterstrike-global-offensive.md
## What it is (1-2 sentences)
Xu & Moka (2024, arXiv:2409.05052v1) import basketball RAPM into esports: they estimate CS:GO player ratings from team outcomes alone using a ±1/0 participation design matrix (518 player columns) regressed on match score differential, comparing OLS, ridge, elastic net, logistic variants, and Bayesian models with the player's standardized Rating2.0 box-score metric as prior mean, on HLTV "big event" matches 2018–2023. Their headline claim — logistic, elastic-logistic, and Bayesian APM predictions are "highly correlated" with actual plus/minus — rests on p-values alone (e.g., elastic-logistic p=2.2e-16) with no reported effect sizes, so it is uninterpretable as predictive evidence.

## Key metrics/methods (formulas where given, else "not specified")
- Design matrix X: rows = matches, columns = players; X_ij ∈ {+1, −1, 0}: +1 if player j on team 1, −1 if on team 2, 0 if absent.
- Core spec: ResultDiff_i = Σ_j X_ij β_j + ε_i (verbatim), where ResultDiff = team 1 score minus team 2 score.
- Ridge/elastic-net: penalized least squares with L1/L2 penalties; 100 alpha values on [0,1] for the elastic-net mixing parameter; penalty strength by 10-fold CV.
- Bayesian linear regression; hierarchical Bayesian with player's standardized Rating2.0 as prior mean: β_j ~ prior centered on standardized Rating2.0 (verbatim: "β_j ~ prior centered on standardized Rating2.0").
- Player-exclusion floor: players with fewer than 50 matches excluded (survivorship bias).
- Evaluation: random 80/20 split plus 10-fold CV; Pearson correlation test between predicted and true player plus/minus on test data.

## Data sources named
- HLTV match data (public website; no download link stated): "big event" matches, 2018–2023, 500+ players (example design matrix shows 518 player columns). Train 2018–2022, evaluate 2023 per narrative framing (but actual main split is random 80/20 over pooled matches).
- Rating2.0: HLTV's standard box-score metric, standardized, used as Bayesian prior center.

## Findings (numbers and facts, not vibes)
- Table II — Pearson-test p-values for correlation between players' true plus/minus and predicted plus/minus on test data (exact): Ridge plus/minus 0.57; Bayesian plus/minus 0.03323; Logistic plus/minus 2.092e-05; Elastic logistic plus/minus 2.2e-16.
- Pearson p-value of 0.293 for correlation between initial Rating2.0 and plus/minus.
- Ridge p=0.57 (non-significant) vs logistic variants' extreme significance — but p-values are not effect sizes; with hundreds of players, tiny correlations are "significant." No correlation magnitudes, no MAE, no log loss, no calibration reported anywhere.
- Leakage flags: (a) random 80/20 split over pooled 2018–2023 matches lets same-roster matches straddle train/test — classic APM memorization pattern; (b) Rating2.0 prior computed from the same matches including test-period matches — prior leakage; (c) no discussion of collinearity resolution for persistent 5-man units; (d) "big events" only — selection bias toward elite tournaments; (e) sub-50-match exclusion = survivorship bias in the estimated talent distribution.
- External validity to NFL: design transfers to snap-level data (each snap = a "match" with 22 participants), but football's 11-man near-fixed personnel makes collinearity far worse than CS:GO's 5-man rosters.
- GSE corpus overlap: NONE — existing map covers Elo, Glicko, TrueSkill, Bradley-Terry, Plackett-Luce, Dixon-Coles, Massey/Sagarin/Colley (all team-level or pairwise). No adjusted plus/minus / RAPM-style player-effect decomposition exists in the map; this is a new capability filling the "methods that transfer player/context adjustment to NFL props" gap.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **QB-BEHAVIOR — isolating QB effect from context:** snap-level APM with 22-participant design matrix (+1 offensive, −1 defensive per play) regressed on play EPA (ridge/elastic-net) or drive success (elastic-logistic) isolates a QB's value net of his WRs, OL, and the defense faced — the props program needs exactly this decomposition to separate QB talent from supporting cast. Serves the QB-behavioral profiles program.
- **OL — unit-level random effects:** the file's improvement experiment adds an OL-as-a-group random effect in a hierarchical model so individual WR/RB APM is estimated net of line effects; this is the OL contribution measurement mechanism — individual skill-position value conditional on the line unit.
- **COACHING — matchup adjustments for props:** per-player APM coefficients serve the props engine as matchup adjustments (e.g., a CB's defensive APM vs. the opposing WR's offensive APM) — player-vs-player matchup strength net of scheme. Serves the calibration/sizing program.
- **TRUST-SIGNAL — PFF-grade priors:** the Bayesian variant uses the standardized box-score rating (Rating2.0) as prior mean; the GSE port uses PFF grade or trailing-season EPA rate as the prior — a trust-signal intake channel that blends external grades into the APM estimation.
- **OTHER — binary-outcome framing evidence:** ridge (continuous score diff, p=0.57, non-significant) vs. logistic variants (binary outcome, p=2.092e-05 to 2.2e-16) suggests the binary drive-success framing captures the interesting variation better than continuous score differential — relevant to whether GSE models drives as success/failure or EPA accumulation.
- CONTRADICTION-risk: the paper's own non-result for ridge (p=0.57) contradicts the naive expectation that penalized continuous APM transfers cleanly; the GSE port must test both framings and let the walk-forward decide. UNCERTAIN: all "highly correlated" claims are p-values without effect sizes — the paper's evidence is statistically non-informative.

## Engine-actionable? (yes/no + one-line what)
Yes — ADOPT snap-APM if, on 2024 walk-forward (fit through week w, predict w+1), player APM coefficients improve play-EPA out-of-sample R² by ≥ 0.01 AND top-decile offensive APM players beat yardage prop lines at ≥2 pp above baseline on ≥200 graded props; REJECT if week-to-week median absolute rank correlation of APM across consecutive 4-week windows < 0.5 or lift vanishes under team fixed effects. Effort: 3–4 days prototype on skill positions.

## References named in file
- Xu, H. & Moka, S. (2024). arXiv:2409.05052v1 — the paper itself.
- HLTV (data source); Rating2.0 (HLTV box-score metric); "big event" matches.
- Basketball RAPM literature (named as the imported idea, no specific paper).
- Internal: ledger 0419 §11 (context-only expected-EPA model baseline); PFF grades as GSE prior.
