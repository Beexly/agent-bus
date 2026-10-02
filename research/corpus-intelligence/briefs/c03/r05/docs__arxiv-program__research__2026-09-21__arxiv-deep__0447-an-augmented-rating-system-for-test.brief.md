# docs/arxiv-program/research/2026-09-21/arxiv-deep/0447-an-augmented-rating-system-for-test.md
## What it is (1-2 sentences)
Deep-read ledger of Bandyopadhyay & Mukherjee (2026) "An Augmented Rating System for Test cricket" — adapts the Glicko rating system to Test cricket with a recalibrated logistic scale (d=85 vs chess's 400), additive home/toss effects combined via an FGM copula, and margin-of-victory-scaled rating updates. Verdict: ADAPT — four portable mechanics for GSE team-strength ratings.

## Key metrics/methods (formulas where given, else "not specified")
- Glicko core: E_A = 1/(1+10^{-(R_A-R_B)g(RD_B)/d}); g(RD)=1/sqrt(1+3RD^2/pi^2); RD_A' = 1/sqrt(1/RD_A^2+1/d^2); r_A' = r_A + g(RD_B)(S_A-E_A)/sqrt(1/RD_A^2+1/d^2).
- Scale recalibration: grid search over d on Brier, MAE, log loss, ECE -> d=85 for Test cricket (vs chess default 400).
- Home/toss additive adjustments inside expected score: E_{i,home} = 1/(1+10^{-(R_i-R_j+h_{i,j})g(RD_j)/85}); h_{i,j}=(won-lost)/played pairwise.
- FGM copula combining home (H) and toss (T): E = F(H)G(T)[1+omega(1-F(H))(1-G(T))], omega=-0.5436 (from empirical Spearman rho=-0.1812=omega/3); chosen over Gaussian/Frank/Plackett by log-likelihood/AIC.
- MOV-scaled actual score: S_A=(1+MOV)/2 (win), (1-MOV)/2 (loss), 1/2 (draw); MOV_i=((R_i-R_min)/range_R)^{beta_i}*((W_i-W_min)/range_W)^{1-beta_i}+I_i*(E4P_i+ERM_i)/TR_i.
- Bootstrap-permutation robustness: 100 permutations of test matches; avg CV 0.44%, SD ~0.436 rating points.

## Data sources named
Test cricket match results (public record; no URL given): train Jun 2017–Jun 2021 (~150 matches, 19 draws=12.67%); test WTC 2021–23 cycle (70 matches, 9 teams, 12 draws=17.14%); simulated 150-match dataset for scale calibration (generation undescribed).

## Findings (numbers and facts, not vibes)
- Scale d=85 vs d=400: Brier 0.1601 vs 0.1929 (17% improvement), log-loss 0.5946 vs 0.6645 (10.52%), MAE 0.3629 vs 0.4047 (10.33%), ECE 0.1594 vs 0.1844 (13.56%).
- Home advantage: 82 home wins vs 41 away wins; chi-square p=3.386e-7. Toss: 75 wins after winning toss vs 50 after losing; p=0.002399.
- Winner-prediction accuracy: 44 of 56 non-drawn matches (~78.6%) in WTC 2021–23.
- Spearman rank correlation 0.9624 between Glicko ranks and ICC ranks.
- Bootstrap CV 0.44% (2021–23), 0.31% (2023–25 repeat).
- MOV values exceeded 1 in the table (e.g., 1.886), breaking the probabilistic interpretation — never renormalized.
- Paper's own caveat: delta-method 95% CIs for expected scores "effectively not providing predictors with an idea of fluctuations" — uninformatively tight.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Recalibrating the logistic scale to the sport's rating dispersion (d=85 beat d=400 by 17% Brier) — TRUST-SIGNAL (calibration methodology for engine ratings).
- Additive home-field adjustment h inside the expected-score logistic — OTHER (team-strength rating mechanic).
- MOV-scaled updates (1+/-MOV)/2 with capped diminishing returns — OTHER (rating mechanic; paper's >1 overflow needs the capped fix).
- Copula combination of situational factors with dependence omega estimated from data — OTHER (engine feature architecture).
- Bootstrap-permutation robustness gate (CV<2% requirement) — TRUST-SIGNAL (audit methodology).

## Engine-actionable? (yes/no + one-line what)
Yes — build a Glicko-style NFL team-strength rater with calibrated logistic scale, hierarchical home-field term, capped MOV-scaled updates, and RD uncertainty, gated by walk-forward Brier beat vs tuned Elo (>=0.004) and bootstrap CV <2%.
