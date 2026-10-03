# docs/arxiv-program/research/2026-09-21/arxiv-deep/1814-expected-threat-model-quality.md
## What it is (1-2 sentences)
A ledger read of arXiv 2604.21087 (van Arem, Söhl, Bruinsma, Jongbloed): theory + large-scale simulation quantifying Expected Threat (xT) model estimation error as a function of grid resolution K and training size n, calibrating a maximal acceptable error and actionable rules of thumb. Verdict in ledger: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- xT fixed point: x = s + T·x (s = goal-given-shot vector, T = transition matrix); value iteration converges geometrically (Prop. 1: error after m iterations ≤ γᵐ/(1−γ)·‖x⁽⁰⁾−x⁽¹⁾‖∞).
- Concentration bounds: ‖ŝ−s‖∞ = O(√(log K/n)), ‖T̂−T‖∞ = O(K√(log K/n)) (Props. 3–4), combined in Theorem 1.
- Model error measured in ℓ∞ norm: max_s |x̂(s) − x(s)|.
- Fitted empirical law (104,000 resampled models): log(error) = c + α·log K + β·log n + ε, ε ~ LogNormal residual; OLS: c = −2.0916 (SE 0.017), α = 1.0100 (SE 0.002), β = −1.0267 (SE 0.003); R² = 0.864, residual variance 0.1782.
- Acceptability criterion: < 10% of players misassigned a quartile (≤1 quartile shift) with 90% probability → maximal acceptable error 0.0192 (1.92 pp per state).
## Data sources named
- StatsBomb open data: ~4M events (~6.5 league-seasons) across Premier League, Ligue 1, Serie A, La Liga, Bundesliga (passes, dribbles, errors, clearances, shots). Sample sizes n: 100K–4M.
- Acceptability calibration: 47 Ligue 1 center-forwards (2015/16, ≥300 min); 10,000 resampled models per n; 130,000 (error, misassignment) samples.
## Findings (numbers and facts, not vibes)
- Empirically estimated error follows a lognormal law much tighter than the worst-case theory bound: error ≈ LogNormal(−2.0916 + 1.01·log K − 1.0267·log n, 0.1782), R² = 0.864.
- Classic Singh (2019) xT model (12×8 grid, ~1 PL season) has P(error < 0.0192) = 0.2209 — likely not valid for scouting.
- Rule of thumb: with n = 2.4M (4 seasons), select K = 192 (16×12 grid) — most flexible grid with P(error < 0.0192) ≥ 0.90; a 24×18 grid needs n ≈ 3,348,000 (~5.4 seasons).
- Goal-probability (ŝ) estimation error dominates transition-matrix (T̂) error — per the paper's scatterplots, error correlates strongly with ŝ-error, weakly with transition error.
- Euro 2020 application: midfielder xT-created/90 ranged 0.055–0.336; Q4: Havertz, Sabitzer, Damsgaard, Müller.
- Limitations noted: "ground truth" models are themselves estimates (threshold/error possibly overestimated); ℓ∞ is conservative (single rarely-visited high-xT state dominates); single-expert basis for the 10%/90% criterion.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Lognormal (K,n)-error law as a model-quality gate for possession/field-value surfaces: OTHER (model-validation discipline for NFL EPV grids).
- Spend modeling budget on the scoring-probability head, not the transition matrix (goal-prob error dominates): OTHER (model-architecture prioritization).
- P(error < threshold) ≥ 0.90 publication gate before trusting player ratings: TRUST-SIGNAL (a trustworthiness gate for model-derived ratings/prop prices).
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the bootstrap error-quantification protocol (refit-on-simulated-chains, fit log(error) on K and n, gate publication at P(error < threshold) ≥ 0.90) for GSE's NFL EPV/field-value surfaces, with xG-informed shrinkage of scoring probabilities as the improvement path.
