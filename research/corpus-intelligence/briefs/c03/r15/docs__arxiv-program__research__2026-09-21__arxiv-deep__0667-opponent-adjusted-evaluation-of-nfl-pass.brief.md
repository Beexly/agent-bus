# docs/arxiv-program/research/2026-09-21/arxiv-deep/0667-opponent-adjusted-evaluation-of-nfl-pass.md

## What it is (1-2 sentences)
Research-ledger read of arXiv:2604.01491v1 (Pipping-Gamón et al., 2026): ridge-regularized Bradley-Terry paired-comparison models that produce opponent-adjusted pass-blocker and pass-rusher ratings from tracking data, with a severity-weighted multinomial variant. Verdict in file: ADAPT — new capability vs STRAIN/PBWR (no opponent adjustment), but tiny predictive gains and proprietary Hudl data; reimplement severity-weighted BT on public NGS Big Data Bowl tracking.

## Key metrics/methods (formulas where given, else "not specified")
- Binary win/loss ridge BT: logit P(Y_t=1) = α + r_{i(t)} − b_{j(t)} + δD_t; Y_t=1 = rusher closer to QB than blocker within 2.5 s of snap; ridge objective argmin_θ {−ℓ(θ) + λ‖θ‖²₂}, λ by CV log-spaced grid (λ_min = 1.31×10⁻⁴ win, 1.17×10⁻⁴ severity).
- Severity multinomial BT over {loss, win, hit, sack}: η_{t,c} = α_c + r_{i(t),c} − b_{j(t),c} + δ_c D_t; P(C_t=c) = exp(η_{t,c}) / Σ_{c′} exp(η_{t,c′}); loss = reference class.
- EPA-anchored severity weights: w(o) = (EPA_no-pressure − EPA_o)/(EPA_no-pressure − EPA_sack); used values w(loss)=0, w(win)=0.10, w(hit)=0.20, w(sack)=1.00 from published benchmarks (no pressure 0.233, hurry-only 0.019, hit-only −0.161, sack −1.856).
- Interaction distance: d_{p,t} = sqrt((x_{p,t} − x_{QB,t})² + (y_{p,t} − y_{QB,t})²); double-team indicator D_t = 1 when multiple blockers assigned to same rusher.
- Matchup baselines: smoothed player frequencies prior strength m=25 (win)/m=50 (severity); logit-average p̂_ij^match = logit⁻¹((logit(p̃_i^(R)) + logit(p̃_j^(B)))/2).
- Rank AUC (Mann–Whitney form), Enrichment@K = precision@K / (n₊/n). Uncertainty via game-level bootstrap B=1000; weekly path bootstrap B=100.

## Data sources named
- 2021 NFL regular-season player-tracking data at 10 Hz from Hudl (proprietary, not replicable); 153,138 blocker–rusher interactions, 33,283 pass plays, 266 games, 620 rushers, 348 blockers, double-team rate 42.7%.
- Outcome frequencies: loss 0.730, win 0.253, hit 0.0109, sack 0.0063.
- Proposed GSE substitutes: NFL Big Data Bowl tracking releases (pass-rush weeks 2023/2024/2025), nflverse (lacks engagement labels). Code: https://github.com/WhartonSABI/nfl-elo.

## Findings (numbers and facts, not vibes)
- Holdout log-loss (train 122,510 / test 30,628, time-ordered split): Win/Global 0.5568 vs baseline 0.5636, improvement 0.0068, 95% CI [0.0047, 0.0093]; Win/Matchup 0.5568 vs 0.5582, improvement 0.0014, CI [0.0005, 0.0024]; Severity/Global 0.6319 vs 0.6395, improvement 0.0077, CI [0.0049, 0.0106]; Severity/Matchup 0.6319 vs 0.6333, improvement 0.0015, CI [−0.0000, 0.0031] (overlaps zero — directional only).
- Relative reductions reported: ~0.24% to 1.21% (abstract).
- All-Pro face validation: severity model leads AUC in 3 of 4 role/accolade slices; largest ΔAUC +0.150 (severity blocker, first+second team: 0.877 vs 0.727); enrichment@K gains non-negative in every slice.
- Severity leaderboards (min 200 interactions): rushers — Robert Quinn 0.543, T.J. Watt 0.531, Myles Garrett 0.493, Nick Bosa 0.430, Jaelan Phillips 0.429; blockers — Joe Thuney 0.258, Corey Linsley 0.255, Tytus Howard 0.250, Dion Dawkins 0.215, Halapoulivaati Vaitai 0.207.
- GSE gate (per file): ADOPT only if Big Data Bowl replication beats smoothed-frequency matchup baseline by ≥ 0.5% relative log-loss AND season-to-season rusher-rating Spearman ≥ 0.50; REJECT if gain ≤ 0.2% or unstable.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Opponent-adjusted rusher/blocker ratings feed QB/dropback EPA and sack-probability submodels — **OL**
- Severity model (sack > hit > win > loss, EPA-anchored) ranks rushers/blockers better vs All-Pro accolades than binary win/loss — severity weighting captures impact, not just frequency — **OL**, **TRUST-SIGNAL**
- 42.7% double-team rate with explicit help indicator as matchup covariate — teams scheme help at scale; any matchup feature must account for it — **OL**, **SCHEME**
- No teammate effects, role specialization, or position-family hierarchy modeled; authors propose hierarchical shrinkage (edge vs interior, LT/RT/guard/center) as next step — **OL**, **SCHEME**
- Year-to-year rating stability untested in paper (2021-only) — the quantity that matters for engine use is unproven — **TRUST-SIGNAL**
- Proposed GSE improvement: QB time-to-throw interaction on the win rule (pressure arriving before average release is functionally different) — **QB-BEHAVIOR**

## Engine-actionable? (yes/no + one-line what)
yes — Reimplement severity-weighted ridge BT on Big Data Bowl tracking to generate weekly opponent-adjusted rusher/blocker ratings as dropback-EPA/sack-probability matchup features, gated on ≥0.5% log-loss gain and ≥0.50 cross-season rating stability.
