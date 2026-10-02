# docs/data/KERNEL_SLOT_CARDS.md
## What it is (1-2 sentences)
Wave K free-fleet work-order deck defining 13 deterministic numerics "kernel slot" cards (K1–K13) for the GSE prediction engine — scoring rules, calibration, distributions, and sampling primitives with frozen contracts and attack lists.
## Key metrics/methods (formulas where given, else "not specified")
- K1 CRPS: discrete Σ(F(k) − 1{k≥y})², tail truncated <1e-12; empirical mean|Xi−y| − ½E|Xi−Xj| via O(n log n) sorted identity Σ_{i<j}(x(j)−x(i)) = Σ_i(2i−n−1)x(i)
- K2 PIT: u = F(y−1) + v·pmf(y), v=rng(); histogram chi-square GOF, df = bins−1, p = 1 − regularizedGammaP(df/2, χ²/2)
- K3 Brier–Murphy: reliability = (1/N)Σ n_b(f_b−o_b)²; resolution = (1/N)Σ n_b(o_b−o)²; uncertainty = o(1−o); identity rel − res + unc = binned Brier
- K4 calibration fit: Cox recalibration, x = logit(p), fit y ~ sigmoid(a+b·x) by IRLS (budget 100, tol 1e-10)
- K5 BH-FDR: step-up; q_i = p_(i)·m/rank; cumulative min from largest rank down; cap 1
- K6 ESS: n0 = (N − Σm_j²/N)/(J−1); ρ = (MSB − MSW)/(MSB + (n0−1)MSW) clamped [0,1]; ess = N/(1 + (m̄−1)ρ); designEffect = N/ess
- K7 block bootstrap: ceil(n/L) non-wrapping blocks, uniform starts on [0, n−L], percentile CI by nearest rank ceil(q·R)−1
- K8 neg-binomial: log pmf = lgamma(k+r) − lgamma(r) − lgamma(k+1) + r·ln p + k·ln(1−p); mean r(1−p)/p; var r(1−p)/p²; moments fit r = m²/(v−m), p = r/(r+m)
- K9 beta-binomial: log pmf = logChoose(n,k) + logBeta(k+α, n−k+β) − logBeta(α,β); mean nα/(α+β); var nαβ(α+β+n)/((α+β)²(α+β+1))
- K10 ZIP-hurdle: pmf(0) = zi + (1−zi)·base.pmf(0); pmf(k>0) = (1−zi)·base.pmf(k); mean (1−zi)·mB; var (1−zi)(vB + zi·mB²)
- K11 Dirichlet-multinomial (flagged "THE SHARE CORE"): fit by Minka fixed point α_j ← α_j · Σ_rows[ψ(x_ij+α_j) − ψ(α_j)] / Σ_rows[ψ(n_i+A) − ψ(A)]; budget 500, tol 1e-9; key property: teammate negative correlation — α=[2,2,2], trials 30, 3000 draws ⇒ empirical corr(counts_i, counts_j) < 0
- K12 censored-count (thinning): mean (1−c+cf)·mB; pmf via binomial thinning convolution
- K13 lognormal-tail mixture: cdf = (1−w)·Φ((x−m)/s) + w·Φ((ln x−μ)/σ); mean (1−w)m + w·exp(μ+σ²/2); E[X²] = (1−w)(s²+m²) + w·exp(2μ+2σ²); asserted shape fact: median < mean for w=0.3, μ=3, σ=0.8, m=4, s=2
## Data sources named
None (pure numerics; no external data sources — "Data class: PUBLIC", textbook statistics)
## Findings (numbers and facts, not vibes)
- 13 cards, all deterministic, seeded-RNG-only, no I/O, fail-closed with KernelError; contract frozen at packages/prediction-engine/src/edge-lab/kernel/contract.ts (PR #554, branch claude/grok-stats-analysis-i8muyp)
- Verifier must be a different model family than the author; every card carries an ATTACK list decided by computation, not reading
- Distribution cards must pass assertDistributionConformance
- K11 is explicitly the share-core primitive: Dirichlet-multinomial teammate negative correlation is "the entire point of the slot — must be asserted"
- Fit recovery tolerances: K8 round-trip from 20,000 draws recovers r,p within 15%; K9 from 5,000 rows within 25%; K10 variance vs 200,000-draw empirical within 2%; K11 round-trip α=[5,3,2], 2,000 rows within 20%
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- K11 Dirichlet-multinomial share modeling with enforced negative correlation is the canonical primitive for target/carry-share splits among teammates [SCHEME]
- K10 ZIP-hurdle handles zero-inflated counts (e.g., TD counts, sacks) — excess-zero games [OTHER]
- K13 lognormal-tail mixture's median<mean asymmetry captures the fantasy-scoring tail shape of big-play-dependent players [OTHER]
- K3 Brier–Murphy decomposition is the engine's calibration accounting (reliability/resolution/uncertainty) [TRUST-SIGNAL]
- No QB-BEHAVIOR/COACHING/OL content in this file [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the K11 Dirichlet-multinomial slot for modeling teammate target-share allocation with negative correlation when simulating player projections.
