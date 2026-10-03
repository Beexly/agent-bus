# arxiv-program/research/2026-09-21/arxiv-deep/0531-isotonic-bradleyterry-model-for-paired-comparison.md
## What it is (1-2 sentences)
Yamasaki (2026) proposes the Isotonic Bradley–Terry (IBT) model: alternately learn team-strength rates by sub-gradient descent and the rating→win-probability link function σ by isotonic (monotone, PAV) regression instead of assuming logistic, with monotonic training-error decrease guaranteed. The deep read's verdict is ADOPT — a cheap upgrade to GSE's team-rating layer that fixes link misspecification NFL exhibits vs market odds.

## Key metrics/methods (formulas where given, else "not specified")
- Pair target with draws: yᵢⱼ = (wins + 0.5·draws)/matches (Eq. 1); yⱼᵢ = 1 − yᵢⱼ.
- Rate learning (Eq. 2): argmin (1/|D_tra|)Σ φ(σ(rᵢ−rⱼ), yᵢⱼ), φ = squared loss (NLL variant in appendix).
- Isotonic link (Eqs. 5–7): σ̂ = polyline connecting unique sorted (r̂ᵢ−r̂ⱼ, σ̂ᵢⱼ) pairs, constrained to Σ = {σ non-decreasing, σ(−u)=1−σ(u), ∈ [0,1]}; solved by symmetric PAV variant; closed-form inner solution = group mean (Theorem 2); training error never increases (line search).
- Ranking by Borda count Σⱼ σ(r̂ᵢ−r̂ⱼ), not raw rates (non-strict σ breaks rate↔Borda equivalence).
- Kendall's τ = (n₊−n₋)/√((|D|−n₊)(|D|−n₋)) for ranking evaluation (Eq. 4).
- Tie rate (Eq. 9): fraction of pairs with σ(rᵢ−rⱼ)=0.5 exactly — IBT naturally withholds judgment on undecidable pairs.
- Update count selected by 10-fold CV (excess updates overfit); implemented with sklearn.isotonic.IsotonicRegression.

## Data sources named
Synthetic "Cauchy-N" (n ∈ {25,50,100,200,400}, N ∈ {1,5,25} matches/pair, 1000 trials, deliberately misspecified link) + "Logistic-N" control; real: Premier League 2024/25 (20 teams, 380 matches, football-data.co.uk), MLB 2025 (30 teams, 2430 matches, retrosheet), ATP 2025 (457 players, 2944 matches, Jeff Sackmann GitHub). All public.

## Findings (numbers and facts, not vibes)
- Synthetic (misspecified Cauchy link), t=1 update: IBT beat logistic-BT on test WPP error in most cells (e.g., n=25, N=1, 1:9 split: .3956±.0474 BT vs .3689±.0489 IBT; many cells significant at Mann–Whitney p<0.05); gains largest at small n,N,|D_tra| (regularization effect preventing |r̂ᵢ−r̂ⱼ| blowups) and at large n,N (misspecification mitigation).
- Ranking: IBT improved Kendall's τ in most cases, driven by exact ties (σ̂=0.5) on undecidable pairs.
- More updates beyond t≈1 often degraded performance (overfitting).
- Real data: similar patterns for PL and MLB at small |D_tra| ratios; ATP (sparse: 2522/104196 pairs observed) improved across wider split ratios.
- Caveat: NLL evaluation can hit NaN when a PAV bin mean is exactly 0 or 1 — practical reason to use squared loss or clamp bins.
- Limitation: baseline set is only logistic-BT (no Elo/Glicko/TrueSkill comparison); no home-field; each season refit is static; NFL (32 teams, dense schedule) is the opposite of the sparse regime where IBT shines most — the NFL transfer case is the link-shape argument, not sparsity.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: data-learned link corrects the systematic shape mismatch (favorites win less often than logistic-Elo predicts — longshot/favorite compression in NFL markets); isotonic link is a calibrated-probability upgrade; exact-tie mechanism (withholding judgment) is honest uncertainty handling.
- COACHING: Borda-count team ranking (Σⱼ σ̂(r̂ᵢ−r̂ⱼ)) as an alternative power-rating order for coaching/content use.

## Engine-actionable? (yes/no + one-line what)
yes — replace GSE's fixed logistic rating→win-probability map with a weekly-refit isotonic link (sklearn.isotonic.IsotonicRegression) on rolling nflverse windows; ~2–3 engineer-days, low risk, logistic fallback.
