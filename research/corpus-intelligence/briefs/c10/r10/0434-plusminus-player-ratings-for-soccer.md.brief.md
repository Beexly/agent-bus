# arxiv-program/research/2026-09-21/arxiv-deep/0434-plusminus-player-ratings-for-soccer.md
## What it is (1-2 sentences)
Full deep-read of Kharrat, López Peña & McHale (2017), arXiv:1706.04943v1: adapts basketball-style regularized adjusted plus-minus to soccer using fixed-lineup segments, with goal-differential, net-xG, and in-play-expected-points targets. Verdict in file: ADAPT the ridge-APM machinery to NFL snap-level on/off splits as a complement to nflWAR-style EPA attribution; soccer results are not transferable.
## Key metrics/methods (formulas where given, else "not specified")
- Segments = maximal intervals with fixed 22-player lineups (129,988 segments from 20,868 games); design matrix x_tj = +1 home, −1 away, 0 off pitch
- Ridge: α̂ = (XᵀX + λ²I)⁻¹Xᵀy (glmnet, multi-response Gaussian, group penalty); ridge preferred over lasso so always-together players split credit equally
- Time decay: w_i = exp(ζ(date_i − ratingDate)/3.5), half-week units; best λ=0.042, ζ=0.002
- Targets: goal differential per 90 (PM), net xG per 90 (xGPM), Δ expected points home − Δ expected points away (xPPM); raw PM example: ((−1/60)+(2/30))×90 = +4.5 per 90
- xP: xP^H_t = 3·P^HW_t + P^D_t; segment target y_[0,60] = ΔxP^H − ΔxP^A
- Brier: BS = (1/N)Σ_iΣ_{r=1}^3 (p_{ti} − o_{ti})²; hyperparameters tuned via ordered-probit match-outcome model minimizing out-of-sample Brier (10-fold CV × 3)
- Extensions: red-card dummies (first/second/third dismissal, canceling on offset), home-advantage intercept, per-league strength coefficients identified via players moving between leagues
## Data sources named
11 European leagues 2009/10–2016/17: 20,868 games (EPL 3,040; Bundesliga I 2,448; La Liga 3,039; Serie A 3,037; Bundesliga II 612; Championship 2,227; Eredivisie 1,242; Süper Lig 918; Liga NOS 306; Ligue 1 3,039; Russia PL 960). Shot data: 603,609 shots (61,466 goals, 10.2% conversion) from Opta F24 feed (x,y; shot type; "big chance" flag); goalkeeper skills from EA SPORTS FIFA (deliberately excluded shooter ability to avoid feedback loop). No code/data link stated; proprietary Opta/EA inputs.
## Findings (numbers and facts, not vibes)
- Ordered-probit with PM ratings: Brier 0.292 (sd 0.003) vs bet365 de-vigged 0.295 on same games — essentially market-level
- xG Brier baselines per shot type: penalties baseline 0.1845–0.185, models barely beat it (best 0.1844) → "penalties are truly random"; open play baseline 0.0836, best neural net 0.0673 (dominant features: inverse distance, view angle, big chance)
- Red-card effects: first dismissal −1.25 (PM) / −1.18 (xGPM) / −0.12 (xPPM); second −0.16/−0.15/−0.01; third ≈ 0
- Home advantage ≈ 0.006/0.005/0.0004 ("surprisingly very small"; partly definitional in xPPM)
- Player rankings: Kanté top of goals-PM and xPPM in 2016–17; Messi top of xGPM
- League strength (meanPM): EPL 0.88, Bundesliga 0.75, La Liga 0.64, Serie A 0.64, Russia 0.54, Bundesliga II 0.53, Championship 0.48, Liga NOS 0.39, Ligue 1 0.29, Süper Lig 0.20, Eredivisie 0.11 (INFERENCE: odd ordering suggests mover-identification artifacts)
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Ridge APM on snap-level on/off dummies with game-state controls → per-player EPA/play attributable to presence; regularized APM expected more stable year-over-year than raw on/off — OTHER
- Positional priors (shrink toward position-group means, not zero) fixes the paper's over-shrinkage of stars — OTHER
- WR-APM vs CB-APM matchup interaction terms → matchup-adjusted prop edges — OTHER
- WPA-as-target variant for "clutch APM" tested against playoff performance — OTHER
- Penalties ≈ random; first red card −1.25 PM — soccer-specific, not transferable — OTHER
## Engine-actionable? (yes/no + one-line what)
yes — Port regularized APM to nflverse pbp: ridge regression of play EPA (or WPA) on player on/off dummies plus down/distance/yardline/score/time controls with half-week time decay, producing stable per-player ratings for prop adjustments and injury-replacement valuation; gate on year-over-year correlation ≥0.35 and ≥0.001 log-loss gain over spread baseline.
