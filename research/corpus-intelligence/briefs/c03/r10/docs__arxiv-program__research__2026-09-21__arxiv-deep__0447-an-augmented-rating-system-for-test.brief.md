# docs/arxiv-program/research/2026-09-21/arxiv-deep/0447-an-augmented-rating-system-for-test.md
## What it is (1-2 sentences)
A full-paper read of Bandyopadhyay & Mukherjee (2026, arXiv:2603.02574v3) adapting the Glicko rating system (ratings + rating-deviation uncertainty) to Test cricket, with four portable rating mechanics: recalibrating the logistic scale, additive home/toss adjustments combined via copula, margin-of-victory-scaled updates, and bootstrap robustness checks. Verdict in the file: ADAPT — the rating machinery transfers to GSE team-strength ratings, the cricket specifics do not.

## Key metrics/methods (formulas where given, else "not specified")
- Standard Glicko equations quoted: E_A = 1/(1+10^{−(R_A−R_B)g(RD_B)/400}); g(RD) = 1/√(1+3RD²/π²); RD_A′ = 1/√(1/RD_A² + 1/d²); d² = 1/(g(RD_B)²E_A(1−E_A)); r_A′ = r_A + g(RD_B)(S_A−E_A)/√(1/RD_A² + 1/d²).
- Logistic scale recalibrated by grid search over Brier/MAE/log-loss/ECE → d = 85 for Test cricket (vs chess default 400); recalibrated form E_A = 1/(1+10^{c(R_B−R_A)/d}).
- Home/toss as additive rating adjustments: E_{i,home} = 1/(1+10^{−(R_i−R_j+h_{i,j})g(RD_j)/85}), h_{i,j} = (won−lost)/played per pair; toss impacts per host country. Combined via Farlie–Gumbel–Morgenstern copula: E = F(H)G(T)[1+ω(1−F(H))(1−G(T))], ω = −0.5436 (from Spearman ρ = −0.1812 = ω/3), selected over Gaussian/Frank/Plackett by AIC. Delta-method 95% CIs for expected scores.
- MOV-scaled update: S_A = (1+MOV)/2 (win), (1−MOV)/2 (loss), 1/2 (draw); MOV_i = ((R_i−R_min)/range_R)^{β_i}·((W_i−W_min)/range_W)^{1−β_i} + I_i·(E4P_i+ERM_i)/TR_i. Rating update r_A′ = r_A + g(RD_B)((1±MOV_i)/2 − E_A)/√(1/RD_A² + 1/d²).
- Draw predictor: D_{α,A,B} = α(1−E_A−E_B) + (1−α)|E_A−E_B|; (α,q) = (0.6, 0.67) chosen.
- Robustness: 100 bootstrap permutations of test matches, coefficient of variation of final ratings.

## Data sources named
No public URL or scraper given (scores are public record — ICC/ESPNcricinfo are the implicit sources). Training: ~150 Test matches, June 2017–June 2021 (19 draws = 12.67%); test: WTC 2021–23 cycle, 70 matches among 9 teams, Aug 2021–Jun 2023 (12 draws = 17.14%); plus a 150-match simulated dataset (generator undescribed).

## Findings (numbers and facts, not vibes)
- d = 85 vs d = 400: Brier 0.1601 vs 0.1929 (17% improvement per paper), log-loss 0.5946 vs 0.6645 (10.52%), MAE 0.3629 vs 0.4047 (10.33%), ECE 0.1594 vs 0.1844 (13.56%).
- Home advantage: 82 home wins vs 41 away wins; Pearson χ² p = 3.386×10⁻⁷. Toss: 75 wins after winning toss vs 50 after losing; p = 0.002399.
- Winner predicted correctly in 44 of 56 non-drawn matches (~78.6%) in the WTC 2021–23 test window.
- Spearman rank correlation 0.9624 between the Glicko ranks and ICC ranks. Outlier noted: Bangladesh beat New Zealand in NZ on 2022-01-05 after NZ had been unbeaten in 19 home matches over 58 months.
- MOV-augmented final ratings: Australia 131.90, India 126.10, England 114.28, South Africa 108.32, New Zealand 100.96, Sri Lanka 85.80, Pakistan 82.43, West Indies 82.15, Bangladesh 66.68 — rankings identical to non-MOV Glicko, ratings shift, trend curves visibly less smooth.
- Bootstrap (100 permutations): avg coefficient of variation 0.44%, SD ≈ 0.436 rating points; differences typically < 0.6 rating points (< 0.5%). Repeat on WTC 2023–25: avg CV 0.31%, MAD < 0.26.
- Draw diagnostic: α ∈ [0.55, 0.6] correctly flags 9 of 12 test draws in the top 33–35% quantile.
- K-S tests accept logistic marginals for home (stat 0.09386, p = 0.1696) and toss (stat 0.03595, p = 0.9936) effects.
- Paper's own caveats: the 95% CIs for expected scores are "of very short ranges" (uninformatively tight); MOV values in Table 17 exceed 1 (e.g., 1.886), breaking the probabilistic interpretation of (1+MOV)/2.
- Limitations noted in file: h_{i,j} per-pair estimator noisy for rare pairings (no shrinkage); toss impacts on tiny samples (e.g., Pakistan ±0.5714 from 24 matches); d = 85 selected on the same training data used for initial ratings (selection bias); draws bolted on via D_{α,A,B}, not modeled; small-n (9 teams, 70 test matches).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Recalibrating logistic scale by Brier grid search instead of inheriting chess d=400 → [OTHER] rating-method transfer: NFL rating dispersion differs from chess/cricket, so calibrate rather than inherit.
- Additive situational adjustments (home, rest/travel analogues) inside the expected-score function, combined via FGM copula with AIC-selected copula → [OTHER] transferable to rest-differential, travel, dome/weather adjustments for NFL ratings.
- MOV-scaled updates (1±MOV)/2 with diminishing-returns capping → [OTHER] margin-aware team-strength updating; fix the paper's >1 overflow by capping MOV at 1.
- Bootstrap-permutation robustness (CV < 2% criterion proposed) → [TRUST-SIGNAL] audit receipt for rating stability claims.
- 78.6% winner accuracy / 0.9624 Spearman vs ICC → [OTHER] evidence the rating family is predictive and credible as a benchmark.
- Draw handling and draw-diagnostic D_{α,A,B} → [OTHER] cricket-specific, not NFL-transferable (ties are rare in NFL and handled differently).

## Engine-actionable? (yes/no + one-line what)
Yes — build a Glicko-style NFL team-strength rater with calibrated logistic scale (Brier grid search), hierarchical home/rest/travel adjustments, MOV-scaled updates (capped, diminishing returns), and RD uncertainty, per the file's §11 spec (~1–2 weeks effort).
