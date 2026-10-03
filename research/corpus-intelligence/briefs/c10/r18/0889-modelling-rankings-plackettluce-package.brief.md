# arxiv-program/research/2026-09-21/arxiv-deep/0889-modelling-rankings-plackettluce-package.md
## What it is (1-2 sentences)
Full-text ledger (read 2026-09-21) of the software paper for the R PlackettLuce package (Turner, van Etten, Firth, Kosmidis; JSS, arXiv:1810.12068v2) — ships generalized Plackett–Luce machinery for subset rankings and arbitrary-order ties (Davidson–Luce), pseudo-comparison regularization for disconnected networks, quasi-standard errors, and PL trees for subgroup splits. Verdict: ADAPT — the pseudo-comparison trick solves GSE's early-season disconnected-rating problem and quasi-SEs give reference-free rating uncertainty.
## Key metrics/methods (formulas where given, else "not specified")
- Generalized PL likelihood over (possibly tied, subset) rankings with Davidson–Luce tie handling (tie probability proportional to δ·geometric-mean-of-worths-type terms; exact form in the paper)
- Pseudo-comparisons: augmented likelihood adds weight-0.5 pseudo-wins/losses vs a hypothetical average-worth item → finite MLEs in disconnected networks, shrinks worths toward equality
- Quasi-variances: qvar_i such that Var(log ŵ_i − log ŵ_j) ≈ qvar_i + qvar_j, reference-free contrast uncertainty
- PL trees: recursive partitioning on ranking-level covariates via parameter-instability tests to find subgroups with different worth structures
## Data sources named
NASCAR example (36 races, 87 drivers, 42–43 per race; data included in the package); synthetic benchmark of 5,000 sub-rankings of 10 items from 100 with ties to order 4, fit 18.1s / covariance 14.8s on a 2.10 GHz i7 / 16 GB. R package PlackettLuce (CRAN). Paper itself is the method source; R-only, GSE stack would need a port.
## Findings (numbers and facts, not vibes)
- NASCAR: 36 races, 87 drivers; sensible worth estimates with quasi-SEs; trees find era/subgroup structure
- Benchmark timing: 18.1s model fit, 14.8s covariance for 5,000 × 10-from-100 rankings with order-4 ties on modest hardware
- Explicit warnings: PL trees can be unstable (paper's own warning); high-order ties grow combinatorially in memory/time; online/streaming estimation and spatiotemporal extensions listed as future work, not implemented
- No predictive baseline comparison — validation is correctness + performance (software paper)
- Corpus gap noted: Plackett–Luce only "mentioned, not deeply researched" in the existing-research map; pseudo-comparisons and quasi-SEs absent from the map
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pseudo-comparison regularization (weight-0.5 pseudo-games vs league-average team) for early-season/disconnected ratings — directly matches GSE's September ratings gap: SCHEME (rating methodology) / TRUST-SIGNAL
- Quasi-SEs removing reference-team arbitrariness in published rating uncertainty: TRUST-SIGNAL
- PL trees as a principled regime-split finder on pick history with market/regime covariates (unstable per paper's warning): OTHER (exploratory method)
- Davidson–Luce arbitrary-order tie handling: OTHER (method, e.g., fantasy finish ties)
## Engine-actionable? (yes/no + one-line what)
Yes — port pseudo-comparisons into GSE's pairwise rating models (weight-0.5 pseudo-games vs league-average team to stabilize early-season ratings) and quasi-SEs for published rating uncertainty, with the adoption gate being regularized early-season NFL ratings beating unregularized on weeks 5–8 held-out log-likelihood (~1 week effort per the ledger).
