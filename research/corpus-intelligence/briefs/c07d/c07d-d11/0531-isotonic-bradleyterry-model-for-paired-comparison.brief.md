# arxiv-program/research/2026-09-21/arxiv-deep/0531-isotonic-bradleyterry-model-for-paired-comparison.md
## What it is (1-2 sentences)
Deep-read note on arXiv:2608.02081v1 (Yamasaki 2026) proposing the Isotonic Bradley–Terry (IBT) model: alternately learn BT rating parameters by (sub-)gradient and learn the rating→win-probability inverse link function itself by isotonic regression (PAV), guaranteeing monotone training-error improvement and exact ties (σ=0.5) for undecidable pairs.
## Key metrics/methods (formulas where given, else "not specified")
- Eq. 1 (verbatim): yᵢⱼ = (#{i beats j} + 0.5·#{draws})/(#matches between i,j); yⱼᵢ = 1 − yᵢⱼ
- Eq. 2 (verbatim): (r̂ᵢ) ∈ argmin (1/|D_tra|)Σ φ(σ(rᵢ−rⱼ), yᵢⱼ); NLL φ_nll(u,v) = −v log u; squared φ_sq(u,v) = (u−v)²
- Eq. 3 (verbatim): (1/|D|)Σ φ(σ(rᵢ−rⱼ), yᵢⱼ)
- Eq. 4 (verbatim): Kendall's τ = (n₊−n₋)/√((|D|−n₊)(|D|−n₋)), n₊ = Σ 1((σ(rᵢ−rⱼ)−0.5)·(yᵢⱼ−0.5)>0), n₋ analogously
- Eq. 5–7: σ̂ = polyline connecting unique sorted (r̂ᵢ−r̂ⱼ, σ̂ᵢⱼ) pairs; constraints σ̂ⱼᵢ = 1−σ̂ᵢⱼ, σ̂ᵢⱼ ≤ σ̂ᵢ′ⱼ′ whenever r̂ᵢ−r̂ⱼ ≤ r̂ᵢ′−r̂ⱼ′ (Eq. 6); explicit piecewise-linear form Eq. 7 with PAV group bounds (L_k, R_k, z_k)
- PAV inner problem (Algorithm 1, Theorem 2): z_k ∈ argmin_u Σ_{v∈Y_k} {φ(u,v)+φ(1−u,1−v)} = (1/|Y_k|)Σv for φ ∈ {nll, sq}; merge adjacent groups while order violated; σ̂ᵢⱼ = z_k for (r̂ᵢ−r̂ⱼ)∈[L_k,R_k]
- Eq. 9 (verbatim): tie rate = |{(i,j)∈D : σ(rᵢ−rⱼ)=0.5}|/|D|
- Link candidates: σ_Logistic(u)=1/(1+e^{−u}); σ_TM(u)=∫_{−∞}^u (2π)^{−1/2}e^{−v²/2}dv; Stern's gamma link σ(u)=∫₀^∞∫₀^{e^u w}{Γ(s)}^{−2}(vw)^{s−1}e^{−(v+w)}dv dw (logistic at s=1, →½ as s→0, →step function as s→∞); Σ = {σ: ℝ→[0,1] non-decreasing, σ(−u)=1−σ(u)}
- Eq. 8: relation to nonparametric BT (bivariate isotonic regression assuming known ranking); IBT has ≥ its training error but can predict unmatched pairs and update rankings
- Ranking uses Borda count Σⱼ σ(r̂ᵢ−r̂ⱼ), not raw rates (non-strictly-increasing σ breaks rate↔Borda equivalence)
- Model selection: number of alternating updates chosen by 10-fold CV (Procedure 2); init σ̂⁽⁰⁾ = σ_Logistic
## Data sources named
- Synthetic "Cauchy-N": n ∈ {25, 50, 100, 200, 400} players, N ∈ {1, 5, 25} matches/pair; yᵢⱼ = Binomial(N, σ_Cauchy(r̃ᵢ−r̃ⱼ))/N, σ_Cauchy(u) = arctan(u)/π + 1/2, r̃ᵢ ~ Normal(0,1); train/test splits 1:9, 3:7, 5:5, 7:3, 9:1; 1000 trials; "Logistic-N" variant in Appendix 7
- Premier League 2024/25 (n=20, 380 matches; football-data.co.uk E0.csv)
- MLB 2025 (n=30, 2430 matches; retrosheet gl2025.zip)
- ATP Tour 2025 (n=457, 2944 matches, 2522 matched pairs of 104196 possible; Jeff Sackmann GitHub)
- Code: https://github.com/yamasakiryoya/IBT; isotonic regression via sklearn.isotonic.IsotonicRegression
- Future work cites David 1963 for home-field advantage
## Findings (numbers and facts, not vibes)
- Synthetic misspecified link, t=1 update: IBT improved test WPP error vs logistic-BT in most cells — e.g. n=25, N=1, 1:9 split: .3956±.0474 BT vs .3689±.0489 IBT; n=50, N=25, 9:1: .0084±.0011 vs .0080±.0011; many cells Mann–Whitney significant p<0.05
- Gains most pronounced when n, N, |D_tra| small (regularization — prevents |r̂ᵢ−r̂ⱼ| blowups) and when n, N large (misspecification mitigation; verified vs correctly-specified Logistic-N in Appendix 7 where gains shrank)
- Ranking: IBT improved Kendall's τ in most cases, driven by exact ties (σ̂=0.5) for undecidable pairs — higher tie rates correlate with ranking gains
- More updates beyond t≈1 often degraded performance (overfitting) — hence 10-fold CV for update count
- Real data: IBT improved WPP error at small |D_tra| ratios for PL and MLB; improved across wider split range for ATP (n=457, sparse: only 2522/104196 pairs observed); ranking improved in most cases
- Training error guaranteed monotone non-increasing per update by construction
- Caveat (paper-stated): NLL-based WPP evaluation can hit NaN when a PAV group mean is exactly 0 or 1 — experiments use squared loss
- Assumptions: Ford's strong-connectivity condition; strictly convex φ; symmetry σ̂ⱼᵢ=1−σ̂ᵢⱼ
- Verdict: ADOPT
- Gate: ADOPT if IBT beats logistic-BT on 2023–2024 NFL test by ≥0.003 Brier (or ≥0.5% log-loss) AND Δτ ≥ −0.01 on season-end Kendall τ; REJECT otherwise
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing program): The rating→win-probability link is exactly where GSE converts ratings to probabilities — the paper's core mechanism is learning σ(·) from data instead of assuming logistic, which fixes the link misspecification NFL exhibits vs market odds (favorites win less often than logistic-Elo predicts — longshot/favorite compression). Serves the calibration stack directly; ~2–3 engineer-days to port.
- OTHER (trust-target intake): Ranking uses Borda count Σⱼ σ(r̂ᵢ−r̂ⱼ) rather than raw rates because a flat link breaks the equivalence — a team-strength estimation subtlety worth carrying into any ranking-of-sources or rating machinery.
- OTHER (model-selection): The tie-rate mechanism (withholding judgment as exact σ=0.5 ties on undecidable pairs driving ranking gains) is a principled "abstain" behavior applicable to low-information matchup edges.
- TRUST-SIGNAL: UNCERTAIN — the synthetic misspecification experiment is maximally favorable (true Cauchy vs fitted logistic); the real-world "misspecification" claims rest on unidentified links. NFL transfer case is the link-shape (market-vs-model) argument, not sparsity (NFL pair coverage is dense, unlike ATP's 2.4%).
- CONTRADICTION (none internal): No contradiction with corpus; complementary to 0530 (Boltzmann-rational EM learns per-source reliability weights; 0531 learns the probability mapping — they can stack).
## Engine-actionable? (yes/no + one-line what)
yes — Replace the assumed logistic rating→probability map with a PAV isotonic link fit on nflverse games, gated at ≥0.003 Brier improvement on 2023–2024; ship the fitted σ̂ polyline as a versioned weekly JSON artifact.
