# docs/arxiv-program/research/2026-09-21/arxiv-deep/0667-opponent-adjusted-evaluation-of-nfl-pass.md

## What it is (1-2 sentences)
Ledger of arXiv:2604.01491v1 (Pipping-Gamón et al. 2026), producing opponent-adjusted player-level ratings for NFL offensive linemen (blockers) and pass rushers via ridge-regularized Bradley-Terry paired-comparison models on tracking data, with outcome severity (loss/win/hit/sack) as the richer target. Ledger verdict: ADAPT — a genuinely new GSE capability (opponent-adjusted trench ratings, not duplicative of STRAIN/PBWR), though predictive gains are tiny (0.24–1.21% relative log-loss) and the data source (Hudl) is proprietary; honest path is reimplementation on NGS Big Data Bowl tracking.

## Key metrics/methods (formulas where given, else "not specified")
- Interaction distance: d_{p,t} = sqrt((x_{p,t} − x_{QB,t})² + (y_{p,t} − y_{QB,t})²).
- Binary ridge BT: logit P(Y_t=1) = α + r_{i(t)} − b_{j(t)} + δD_t (Y_t=1 = rusher win under the 2.5 s distance rule); argmin_θ {−ℓ(θ) + λ‖θ‖²₂}, λ via CV on log-spaced grid (λ_min = 1.31×10⁻⁴ win, 1.17×10⁻⁴ severity).
- Severity multinomial: P(C_t=c) = exp(η_{t,c}) / Σ_{c′} exp(η_{t,c′}); η_{t,c} = α_c + r_{i(t),c} − b_{j(t),c} + δ_c D_t; loss is reference class.
- Severity weights anchored to EPA: w(o) = (EPA_no-pressure − EPA_o)/(EPA_no-pressure − EPA_sack); rounded weights: w(loss)=0, w(win)=0.10, w(hit)=0.20, w(sack)=1.00 (from benchmarks: no pressure 0.233, hurry-only 0.019, hit-only −0.161, sack −1.856).
- Matchup baselines: smoothed player frequencies (prior strength m=25 win / m=50 severity); logit-average p̂_ij^match = logit⁻¹((logit(p̃_i^(R)) + logit(p̃_j^(B)))/2).
- Rank AUC (Mann–Whitney form); Enrichment@K = precision@K / (n₊/n); uncertainty via end-to-end game-level bootstrap (B=1000).

## Data sources named
2021 NFL regular-season player-tracking at 10 Hz from Hudl (proprietary, not replicable by GSE). Analysis sample: 153,138 blocker–rusher interactions across 33,283 pass plays in 266 games; 620 rushers, 348 blockers; double-team rate 42.7%. Outcome frequencies: loss 0.730, win 0.253, hit 0.0109, sack 0.0063. Code: https://github.com/WhartonSABI/nfl-elo. Nearest public substitute: NFL Big Data Bowl tracking releases / nflverse (lacks engagement labels).

## Findings (numbers and facts, not vibes)
- Holdout log-loss (model vs baseline): Win/Global 0.5568 vs 0.5636, improvement 0.0068, 95% CI [0.0047, 0.0093]; Win/Matchup 0.5568 vs 0.5582, improvement 0.0014, CI [0.0005, 0.0024]; Severity/Global 0.6319 vs 0.6395, improvement 0.0077, CI [0.0049, 0.0106]; Severity/Matchup 0.6319 vs 0.6333, improvement 0.0015, CI [−0.0000, 0.0031] (overlaps zero — directional only).
- Abstract-reported relative reductions: ~0.24% to 1.21%.
- All-Pro validation: severity model leads AUC in 3 of 4 role/accolade slices; largest ΔAUC = +0.150 (severity blocker, first+second team: 0.877 vs 0.727); enrichment@K improvements non-negative in every slice.
- Leaderboards (min 200 interactions), severity: rushers — Robert Quinn 0.543, T.J. Watt 0.531, Myles Garrett 0.493, Nick Bosa 0.430, Jaelan Phillips 0.429; blockers — Joe Thuney 0.258, Corey Linsley 0.255, Tytus Howard 0.250, Dion Dawkins 0.215, Halapoulivaati Vaitai 0.207.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Opponent-adjusted OL/DL severity ratings feeding GSE's QB/dropback EPA projections and sack-probability submodels: OL
- Double-team indicator as a matchup covariate capturing help structure (42.7% double-team rate): OL
- Tiny predictive gains (0.24–1.21% relative log-loss) — honest expectation-setting on marginal value vs public NGS pressure rate + sack rate: TRUST-SIGNAL
- Severity hierarchy (sack > hit > win > loss) weighted by EPA as a richer target than binary pressure: OL

## Engine-actionable? (yes/no + one-line what)
Yes — reimplement the severity-weighted ridge BT on 2023/2024/2025 Big Data Bowl tracking, reconstruct engagement windows and the 2.5 s win rule, and adopt as matchup features only if the replication beats the smoothed-frequency matchup baseline by ≥0.5% relative log-loss AND rusher ratings correlate ≥0.50 across seasons.
