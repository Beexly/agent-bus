# arxiv-program/research/2026-09-21/arxiv-deep/1190-why-is-soccer-so-popular.brief.md
## What it is (1-2 sentences)
Deep read of Vicente et al. (2024, arXiv:2404.06626v1), a descriptive/explanatory study quantifying "underdog achievement" across 12 international team-ball sports and attempting to explain it with a 14-factor randomness model. Verdict in file: REJECT — no predictive model, no calibration, no market path, and American football explicitly excluded.

## Key metrics/methods (formulas where given, else "not specified")
- Underdog achievement score (UAS): a team is "weak" in edition e if its rank is ≥ τ places below the opponent's (τ = median of the sport's rank-difference distribution; soccer τ=7, water polo τ=2.5, all others 3–5). UAS = (# victories or draws by weak teams) / (# matches containing a weak team), aggregated over editions (eqs. 3.2–3.4); 95% CIs per sport.
- Weighted ranking: `wr≤e_h(i) = (N_eh − c(i, R_eh)) + λ·wr≤e_{h−1}(i)` for participating teams, c(i,R) ∈ [1,N] rank position; λ ∈ {1, 0.5, 0} to test history-weighting sensitivity; weakness judged on ranking through the previous edition only (no current-edition leakage).
- Min-max normalization: `a′ = (a − min(a)) / (max(a) − min(a))`.
- Pearson correlation: `cov(X,Y)/(σ_X·σ_Y)`, range [−1,1].
- 14 randomness factors in 3 groups: physical environment — BL (ball lightness = max(BW)−ball weight), BV (ball velocity), FS/BS (field/ball size), GS/BS (goal/ball size), BG (ball geometry, 3 classes), BB (ball bounciness, 11 classes); player — PP (body mass index), PBH (proportion of body interacting with ball), PBD (ball dispossession = max(PBP)−PBP), PI (inexperience = max(PE)−avg retirement age); team — NP/FS (players/field size), GS/NPG (goal size/defenders), SI (scoring infrequency = max(SF)−scoring frequency), NRAM/NRPM (movement vs movement-preventing rules ratio).
- Analysis: PCA on 14-factor dataset (first two PCs explain 56% of variance) + Pearson correlation heatmap of all factors plus UAS; Kruskal–Wallis test on UAS across sports; Dunn's test with Bonferroni correction; Laney p′-chart.

## Data sources named
- Match scores scraped from Wikipedia for major international competitions per sport (Table 7 lists edition years, e.g., FIFA World Cup 1930–2014 for soccer; Summer/Winter Olympics for basketball/handball/ice hockey; World Cups for cricket, field hockey, futsal, lacrosse, roller hockey, rugby, volleyball, water polo).
- Companion dataset: Alleck, T. N. et al., "Match score dataset for team ball sports," ISE Technical Report 24T-003, Lehigh University, 2024 (cited as [1]).
- Code: https://github.com/thaksheel/randomness-team-ball-sports.git.
- Factors dataset: 12 rows × 14 columns of min-max-normalized randomness-factor values per sport, plus auxiliary raw values and a movement-rules table (Appendix B, Tables 8–10).
- Sports covered (12): basketball, cricket, field hockey, futsal, handball, ice hockey, lacrosse, roller hockey, rugby, soccer, volleyball, water polo. American football explicitly excluded (no suitable international competitions).

## Findings (numbers and facts, not vibes)
- UAS by sport, quoted exactly (Table 3; λ=1 / 0.5 / 0): Water Polo 0.37/0.34/0.32; Soccer 0.36/0.27/0.22; Field Hockey 0.31/0.22/0.20; Ice Hockey 0.30/0.21/0.18; Basketball 0.25/0.19/0.16; Volleyball 0.22/0.11/0.07; Handball 0.21/0.17/0.11; Futsal 0.17/0.13/0.07; Cricket 0.15/0.11/0.08; Lacrosse 0.08/0.07/0.06; Rugby 0.07/0.04/0.03; Roller Hockey 0.05/0.02/0.01.
- Kruskal–Wallis test on UAS across sports: p = 2.47×10⁻¹⁰ (significant at 5%).
- Dunn's test with Bonferroni correction (Table 4) significant pairs: soccer vs cricket (0.01239), lacrosse (0.00007), roller hockey (0.00002), rugby (0.00011); water polo vs lacrosse (0.00160), roller hockey (0.00044), rugby (0.00161); field hockey vs lacrosse (0.00884), roller hockey (0.00244), rugby (0.00841); ice hockey vs lacrosse (0.01292), roller hockey (0.00353), rugby (0.01294).
- PCA: first two components explain 56% of the 14-factor variance (scree plot Fig. 7).
- Correlation with UAS: strongest positive = GS/NPG (goal size/defenders); strongest negative = NRAM/NRPM, PI, BG; weaker negative = SI, PP, FS/BS, BL; positive-impact factors named: GS/NPG, NP/FS, PBD, PBH, BB, and to a lesser extent GS/BS and BV.
- Laney p′-chart (Fig. 5): nearly all sports fall outside control limits — argued as metric stability, not validation.
- Structural findings: no predictive validation at all (no train/test, no baseline, no forecasting accuracy, no calibration, no betting evaluation); UAS is a retrospective aggregate with no prediction target and no prediction horizon; the three metrics (3.2, 3.3, 3.4) are mutual corroboration of the same descriptive quantity.
- Limitations flagged: the 14 factors are hand-authored, hand-scored per-sport constants, chosen because they plausibly drive upsets — finding they correlate with upsets is weak, near-circular evidence; negative correlations are reinterpreted post-hoc as "weaker effect" rather than theory falsification; cricket's goal-dependent factors (GS/BS, GS/NPG) imputed by averaging other sports; soccer's high UAS (0.36) is driven by low scoring and draws — opposite of NFL structure; no external validity to NFL.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER — rejection note) Per the file, the upset-rate-by-rating-gap idea is already subsumed by GSE's Elo/Glicko/TrueSkill/Bradley-Terry work with expected-score formulas, which quantify upset probability by rating gap far more precisely for NFL than UAS does cross-sport. No GSE capability is extended.
- (OTHER — speculative transfer, flagged in file as improvement experiment) The one reusable direction: compute per-game underdog win probability as a function of pre-game Elo gap on NFL data (nflverse 2009–2025), fit a logistic upset curve, and compare calibration against bookmaker moneylines — converting descriptive UAS into an actual NFL upset-pricing tool. Not derived from the paper itself.
- CONTRADICTION/CAUTION: the paper's "randomness factor" method (hand-scored sport constants correlated with a retrospective outcome) is the opposite of the corpus's measurement discipline — adopting its factor-scoring style would be a downgrade from Elo-based upset modeling, not an upgrade.

## Engine-actionable? (yes/no + one-line what)
No — REJECT: no predictive model, no forecast, no calibration, NFL excluded by design, and upsets-by-gap is already better handled by the engine's rating systems; the only transferable experiment (NFL Elo-gap upset curve vs moneylines) is a new-build idea, not something the paper supplies.
