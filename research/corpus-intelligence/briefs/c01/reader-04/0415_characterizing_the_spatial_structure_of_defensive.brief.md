# arxiv-program/research/2026-09-21/arxiv-deep/0415-characterizing-the-spatial-structure-of-defensive.md
## What it is (1-2 sentences)
Full-paper ledger read of Franks/Miller/Bornn/Goldsberry (arXiv:1405.0231v3): uses an HMM to infer defender→receiver matchup assignments from NBA optical tracking data, then decomposes each defender's skill into shot-frequency suppression vs shot-efficiency suppression — showing the two are nearly uncorrelated skills. Reader verdict: ADAPT — port both ideas to NFL coverage analysis: infer who-covers-whom from NGS tracking and split CB/safety value into target-avoidance vs target-suppression.
## Key metrics/methods (formulas where given, else "not specified")
- Defender assignment HMM: canonical location μ_{tk} = γ_o O_{tk} + γ_b B_t + γ_h H (γ_o+γ_b+γ_h=1); fitted by EM over 100 games: Γ̂ = (0.62±0.02, 0.11±0.01, 0.27±0.02); transition parameter ρ = 0.96–0.99 per game; simplified 0.73 O_{tk} + 0.27 H variant discussed
- Court discretization: log-Gaussian Cox process (LGCP) for spatial shot intensity + non-negative matrix factorization → 6 spatial bases, first 5 used
- Frequency model: multinomial over (shooter, region); predictors = offensive propensity + defender time-share per region
- Efficiency model: logistic regression for make probability; predictors = shooter + defender + shot region + defender distance; shrinkage toward defender-type means (CAR-style)
- Inference: MCMC; model comparison by 10-fold cross-validated log-likelihood
## Data sources named
2013–14 NBA optical player-tracking data at 25 frames/second (proprietary); ~150,000 shooter–region observations (frequency model); ~115,000 possessions leading to a shot (efficiency model)
## Findings (numbers and facts, not vibes)
- 10-fold CV log-likelihoods, full vs no-defender: shooter −25,474.93 vs −25,725.17; full model −41,461.74 vs −41,904.48; efficiency −3,202.09 vs −3,239.12 — defensive information + spatial info + player type clearly best
- Headline: frequency suppression and efficiency suppression are distinct skills — Roy Hibbert ranks 1st and 4th in paint efficiency suppression but 161st in both paint frequency bases; Dwight Howard ranks 11th/2nd in paint frequency suppression but 50th/117th in efficiency
- Limitations: team-scheme confounding (no scheme random effects); HMM forces one-to-one assignments (help/double-teams unmodeled); no out-of-season validation or stability analysis; proprietary data
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- SCHEME: frequency-vs-efficiency decomposition maps directly to NFL coverage — CB/safety grades split into target-avoidance vs target-suppression; feeds matchup features for WR/CB prop models
- COACHING: the paper's biggest confound is scheme (a center looks like a frequency-suppressor because his team funnels drivers to him) — for NFL, estimate defender effects within route type with explicit team-scheme random effects
- QB-BEHAVIOR: target-avoidance component effectively measures QB avoidance of a defender — a per-coverage-defender QB-behavior signal (INFERENCE: a CB with high frequency-suppression is one QBs throw at less often, which is itself QB-behavior data)
## Engine-actionable? (yes/no + one-line what)
Yes — implement HMM-based defender–receiver assignment on NGS tracking (with a zone-responsibility variant since zone coverage makes "who guards whom" ill-defined), NMF field discretization from target-location intensity, and frequency/efficiency multinomial+logistic models; adopt if each component shows half-to-half correlation r ≥ 0.35 on 2023–2024 CBs and improves out-of-sample EPA/target R² ≥ 0.02 over passer-rating-allowed baseline.
