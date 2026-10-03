# docs/arxiv-program/research/2026-09-21/arxiv-deep/1166-wisdom-of-crowds-much-ado.md
## What it is (1-2 sentences)
Deep read of arXiv:2008.01485 (Reia & Fontanari 2021): tests three standard explanations of the wisdom of crowds against ~8,650 real forecast experiments (FRBP Survey of Professional Forecasters) and finds biased experts' crowds beat most members only ~67% of the time. Verdict: ADAPT — adapt the unbiasedness p-value test as a bias screen on GSE's model pool plus a standing best-single-model vs ensemble comparison.
## Key metrics/methods (formulas where given, else "not specified")
- Per experiment: crowd estimate ⟨g⟩ = mean; collective error γ = G − ⟨g⟩; individual error ε=(1/N)Σ(g_i−G)²; diversity δ=(1/N)Σ(g_i−⟨g⟩)²; skewness μ3 = (1/N)Σ((g_i−⟨g⟩)/δ^{1/2})³.
- Page's identity: γ² = ε − δ (restated as tautology with no predictive content).
- Unbiasedness test: null ⟨g⟩_u ~ Gaussian(G, δ/N); two-tailed p = 1 − erf(|⟨g⟩−G|/√(2δ/N)); fraction of experiments with p<0.05 measures bias prevalence.
- Virtual unbiased forecasters: per experiment, N estimates drawn from Gaussian(μ=G, σ²=δ) matched on (N, δ); crowd ⟨g⟩_u ~ Gaussian(G, δ/N).
- GSE adaptation: pool-bias screen via calibration-in-the-large (Hosmer–Lemeshow / Spiegelhalter z-test on pooled forecasts per game-week, since paper's Gaussian null is for point estimates); weekly ensemble-vs-champion-model Brier comparison.
## Data sources named
FRBP Survey of Professional Forecasters (philadelphiafed.org), Q4 1968–Q4 2019; main analysis nominal GDP (NGDP) semestrial forecasts at 3 ranges: short (205 experiments), medium (203), long (196); N=9–87 economists per experiment (mean ≈37). Broader: 8,650 experiments across 10 indicators × 5 forecast ranges. Laypeople data at https://github.com/JoseFontanari/Wisdom of Crowds (candies jar N=105, paper strip N=139, bean bag N=97, book pages N=140).
## Findings (numbers and facts, not vibes)
- Real experts, all 8,650 experiments: crowd beats ALL individuals in 1.7%; beats MOST (ξ≤1/2) in 66.8% (exact). NGDP by range: crowd beats majority in 150/205≈0.73 (short), 145/203≈0.71 (medium), 130/196≈0.66 (long). One experiment had 85% of individuals beat the crowd.
- Virtual unbiased forecasters: crowd beats all in 16.3%, beats most in 99.8%; unbiased crowd ≈10× more accurate than economists' crowd.
- Diversity vs collective error (Spearman): short ρ=0.31 (p<10⁻⁶), medium ρ=0.25 (p<10⁻⁶), long ρ=0.14 (p=0.05) — POSITIVE: more diverse crowds are LESS accurate.
- Skewness vs signed collective error: ρ=0.008 (p=0.91), −0.03 (p=0.62), −0.12 (p=0.09) — no association; contradicts augmented quincunx.
- Unbiasedness test: 85% of the 8,650 collective predictions have p<0.05 → economists' forecasts are biased.
- Laypeople: P(random participant beats crowd) = 15% (paper strip) to 38% (book pages).
- Short-range forecasts ≈3× more accurate and 4× less disperse than long-range.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Model-pool bias screen (Hosmer–Lemeshow/Spiegelhalter per game-week; flag biased weeks): OTHER (ensemble calibration instrumentation).
- Standing best-single-model (champion) vs ensemble baseline; ensemble beats most only ~67% in biased pools: OTHER (ensemble lane decision rule).
- Three-way horse race: mean vs median vs champion vs skill-weighted ensemble, with per-week aggregator selector driven by bias-screen p-value: OTHER (aggregation improvement).
- If bias screen flags >50% of weeks, mean aggregation of biased pool is the failure mode — shift weight to champion: OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Add a weekly calibration bias screen on the model pool plus a standing champion-model vs ensemble Brier comparison, with a per-week aggregator selector keyed on the bias-screen p-value (~half-day build, uses existing picks table).
