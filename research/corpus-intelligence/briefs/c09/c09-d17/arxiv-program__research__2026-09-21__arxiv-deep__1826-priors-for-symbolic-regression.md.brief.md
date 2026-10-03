# arxiv-program/research/2026-09-21/arxiv-deep/1826-priors-for-symbolic-regression.md
## What it is (1-2 sentences)
Deep-read ledger of Bartlett et al. (arXiv:2304.06333, GECCO 2023), "Priors for Symbolic Regression" — adds (a) an n-gram language-model structural prior over operator arrangements built from 161 scientific equations and (b) a Fractional Bayes Factor treatment of parameter priors to Bayesian symbolic-regression model selection. Verdict: ADAPT (sports corpus must replace the physics corpus).
## Key metrics/methods (formulas where given, else "not specified")
- Posterior: P(fᵢ|D) = P(fᵢ)/P(D) · Z(D|fᵢ); −log P(fᵢ|D) = −log P(fᵢ) − log Z(D|fᵢ) (Eqs. 1–2).
- Laplace-approximated log-evidence: log Z(D|fᵢ) ≃ log L̂ + (p/2)log 2π − (1/2)log det Îᴴ (Eq. 3); Hessian via finite differences (numdifftools).
- FBF: P(θᵢ|fᵢ) → P_b(θᵢ|fᵢ); with uniform priors the MLE = posterior mode, so only one likelihood optimization is needed. Guimerà's BIC-with-uniform-prior ranking can be altered arbitrarily just by changing prior bounds — FBF fixes this.
- Structural prior: parse corpus equations into trees; "phrases" = sibling nodes + direct ancestors; n-gram model over operator sequences (left/right split, back-off models). Drop-in replacement for MDL's k·log n term.
## Data sources named
Benchmarks: Nguyen-8, Korns-1/4/6/7 (10⁵ x-values uniform per domain, Gaussian noise, 5 datasets each); LM prior training corpus = 161 scientific equations (100 Feynman SR Database + 61 more); real-world: Pantheon+ 1590 Cepheid-calibrated Type Ia supernovae. esr package (Bartlett et al. 2022) for tree conversion/exhaustive scan.
## Findings (numbers and facts, not vibes)
- Likelihood-only selection NEVER puts the truth in the top two on noisy benchmarks (overfitting always wins).
- 'Score' (Pareto heuristic): selects truth for Nguyen-8 but truth often absent elsewhere; asymptotically inconsistent (score need not prefer the truth even as N→∞).
- Plain MDL: best on standard benchmarks (always selects truth for Nguyen-8; best for Korns-1/Korns-6 with more data; truth almost always selected for Korns-4).
- LM-prior variants win on Korns-7 (scientific prior selects truth with fewer points); slightly worse on pure benchmarks (Nguyen-8 truth often 3rd — a miscalibrated prior is worse than none).
- Cosmology: plain MDL's top functions included physically unreasonable x^x forms; LM prior eliminated x^x from the top four (all became sums of x to integer powers) and promoted the GR-motivated Eq. 18 to 4th.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — engine-modeling methodology: principled model-selection layer for discovered equations (GSE-SR/PySR hall-of-fame); the demolition of likelihood-only and Pareto-'score' selection applies to how GSE picks among discovered formulas. No player/team findings.
## Engine-actionable? (yes/no + one-line what)
Yes — build a ~100–200-formula SPORTS analytics corpus (passer rating, QBR, EPA, DVOA-style, Elo, Pythagorean, target-share formulas) → train the n-gram LM prior → rank PySR candidates by −log P(fᵢ) − log Z; accept if top-3 picks beat plain best-fit selection by ≥10% held-out RMSE.
