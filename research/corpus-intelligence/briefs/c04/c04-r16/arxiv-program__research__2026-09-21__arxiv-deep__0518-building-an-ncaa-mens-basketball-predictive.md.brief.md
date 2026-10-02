# docs/arxiv-program/research/2026-09-21/arxiv-deep/0518-building-an-ncaa-mens-basketball-predictive.md
## What it is (1-2 sentences)
Deep-read of the winning team's write-up of Kaggle "March Machine Learning Mania" 2014 (arXiv:1412.0248v1): spread-calibrated logistic market model ensembled with a KenPom efficiency model, plus a 10,000-simulation skill-vs-luck analysis. NCAA basketball, no portable coefficients — verdict ADAPT for three methodological transfers (spread-calibrated market prior, tuned ensemble weights, luck quantification).
## Key metrics/methods (formulas where given, else "not specified")
- M₁ (spread model): logit(Pr(y_g=1)) = β₀ + β₁·spread_g on 65,043 games over 12 seasons (2002–03 onward, Las Vegas spreads from covers.com); predicted win probability ŷ_{i,m₁} = exp(β̂₀+β̂₁·spread_i)/(1+exp(β̂₀+β̂₁·spread_i)). Later-round spreads predicted by a proprietary undisclosed linear regression.
- M₂ (efficiency model): logistic regression on adjusted per-100-possession offensive/defensive efficiencies for both teams + neutral-site indicator; selected from 11 candidate fits (Table 2): adjusted 0.487 vs unadjusted 0.538 vs interactions/higher-order 0.488–0.493; neutral-site indicator automatic +0.013 gain.
- Ensemble: S₁ = 0.75·M₁ + 0.25·M₂; S₂ = 0.25·M₁ + 0.75·M₂. Weight direction from 2008–2013 tournament log-loss (optimum 0.69 on M₂ / 0.31 on M₁); the two orderings were the two contest entries, hedging post-tournament bias in efficiency metrics.
- Contest scoring: LogLoss_ij = −(y_i log(ŷ_ij) + (1−y_i)log(1−ŷ_ij))·I(Z_i=1); LogLoss_j = (1/63)Σ_i LogLoss_ij.
- Luck quantification: 10,000 simulated 2014 tournaments × 5 "true" probability scenarios (S₁, S₂, median of all 433 entries, median of top-10, all-coin-flip); recorded median rank, P(win), P(top-10), unique winners.
- Proposed GSE transfers (IN FILE): (1) market-prior leg: fit logit(P(home win)) = β₀ + β₁·(de-vigged spread-implied probability or raw spread) on 2010–2024 NFL; (2) grid-search market-vs-model weight on past seasons' walk-forward log-loss, re-tune annually (~2–3 days); (3) replicate luck simulation for GSE's pick product (10k season replays under engine probabilities → ROI distribution). Improvement experiment: state-dependent weight w(t) = logistic(α₀ + α₁·week) — weight market leg more late-season, model leg more early.
- Reproducible test (IN FILE): NFL 2010–2024, closing spreads (de-vigged) + GSE model probabilities; walk-forward fit on seasons ≤Y, evaluate Y+1 for Y=2015..2023; baselines = market-implied alone, GSE model alone, fixed 50/50 ensemble; metrics log-loss and Brier.
## Data sources named
- Las Vegas point spreads for every D1 men's game since 2002–2003 (covers.com), linked to results; M₁ trained on 65,043 games over 12 seasons.
- Ken Pomeroy efficiency metrics (kenpom.com, since 2001–2002): team rating, offensive/defensive efficiency (points per 100 possessions), adjusted versions, tempo/adjusted tempo, neutral-site indicator.
- M₂ training: regular-season games before March 1, 2002–03 through 2012–13; selection on post-March-1 games; weights tuned on 2008–2013 tournaments.
- Contest: 2,278 possible team-pair matchups for 2014 tournament; 63 scored games; 433 entries from 248 teams; organizer supplied all 433 entries for simulations. No code released.
## Findings (numbers and facts, not vibes)
- S₂ won Kaggle 2014: log-loss 0.52951 (1st of 433); S₁ would have placed 4th (0.54107). Correlation between entries 0.94; 78% of game predictions within 0.10.
- Model selection test log-loss: best 0.487 (adjusted efficiencies + neutral); unadjusted 0.538; interactions 0.488–0.493.
- Simulations: if S₂ were truth, S₂ median rank 14, P(win) 11.65%, P(top-10) 44.47%; if S₁ truth, S₁ P(win) 15.57%, P(top-10) 48.79%. Vs random-winner baseline (1/433 ≈ 0.23%), skill multiplies win odds ~50–60× (upper bound under the generous assumption the entry IS the truth). Under median-of-top-10 as truth, P(win) ≈ 2% for both; under all-coin-flip, neither ever won. 332–348 unique winners of 433 across simulations (~20% of entries never winnable).
- Context: UConn (7-seed) won 2014 — only the 5th champion seeded worse than 3 since 1979 — making the winning log-loss (0.529) higher than typical simulated winning scores.
- Headline transfer figure: even perfect probabilities → ~12% win rate in a 433-entry field — calibrates expectations for any GSE contest/pick product.
- Limitations (IN FILE): efficiency metrics included postseason games (lookahead bias, acknowledged); later-round spread model proprietary/undisclosed; single-tournament test (n=63); basketball-specific (35-second clock, 351 teams, single-elimination) — no fitted coefficients transfer to football.
- GSE overlap: existing map covers ensemble methods and market-implied probabilities; no paper combines them as spread→logistic-calibrated market prior + tuned ensemble + formal skill-vs-luck simulation. Methodological transfer, not duplicate.
- Acceptance gate (IN FILE): ADOPT spread-calibrated market leg + tuned weights if walk-forward tuned ensemble beats both legs on log-loss in ≥6 of 9 held-out seasons with no season worse by >0.01; REJECT weight-tuning if weights unstable (sign-flipping or >0.3 swings YoY). Luck-simulation communication adopted unconditionally.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Spread-calibrated logistic market prior (logit(P) = β₀ + β₁·spread) as ensemble leg: OTHER (market-implied probability machinery, not QB/coaching).
- Ensemble weight tuning via walk-forward log-loss + state-dependent w(t) = logistic(α₀ + α₁·week): OTHER (ensemble methodology).
- Skill-vs-luck simulation (perfect probabilities → ~12% win rate in 433-entry field): OTHER (expectation-setting for pick products).
## Engine-actionable? (yes/no + one-line what)
Yes — fit the spread-calibrated logistic market leg and grid-search market-vs-model ensemble weights on walk-forward NFL log-loss (2015–2023), plus ship the "even perfect probabilities only win X% of the time" luck simulation as honest pick-product expectation setting.
