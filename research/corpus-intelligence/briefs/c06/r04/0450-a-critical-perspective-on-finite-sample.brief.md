# arxiv-program/research/2026-09-21/arxiv-deep/0450-a-critical-perspective-on-finite-sample.md
## What it is (1-2 sentences)
A statistical critique arguing the widely-cited finite-sample conformal-prediction coverage guarantee is marginal over calibration sets, so in the realistic single-calibration deployment workflow small calibration sets can yield conditional coverage far below nominal with high probability; verdict ADAPT — import the critique as QC for GSE's conformal/CQR calibration.
## Key metrics/methods (formulas where given, else "not specified")
- Marginal guarantee: P_{Y,X,D_cal}(Y∈C_M(X;D_cal)) ≥ 1−α (eq. 1).
- Operational requirement of marginal theory: (1/(M·K))ΣΣ1{y∈C}≈1−α needs many fresh calibration sets (eq. 2); single-calibration target (eq. 3) has no marginal implication.
- Calibration-set-conditional bound (Vovk 2012): P_{D_cal}(P(Y∈C|D_cal) ≥ 1−α̃) ≥ 1−δ, δ ≥ Binomial_{m,α̃}(⌊α(m+1)−1⌋).
- Empirical protocol: split conformal prediction, α=0.1 (nominal 90%), histograms of conditional coverage over independent calibration sets of size m∈{10,50,200}.
## Data sources named
NCT-CRC-HE-100K (Kather et al. 2019; MedMNIST v2): 9-class histology classification from H&E colon-tissue patches; 10,000 training examples; remainder split into calibration pool and held-out assessment split.
## Findings (numbers and facts, not vibes)
- m=10: 19% of calibration sets deliver <85% conditional coverage vs nominal 90% (marginal mean still ≥90% as theory requires).
- m=50: spread narrows; m=200: shortfall below nominal essentially disappears.
- The Vovk-2012 conditional bound is "only expressive for large data sets" — vacuous at small m.
- Scope limits per file: critique does not hold for learn-then-test (Angelopoulos 2025), PAC confidence sets (Park 2019), risk-controlling prediction sets (Bates 2021); exchangeability assumed; no distribution-shift treatment.
- Dossier verdict: ADAPT — GSE's calibration windows are inherently small (weekly slates, short seasons), exactly the regime where marginal guarantees mislead.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: honest reporting of calibration-set-conditional coverage for every deployed conformal/CQR interval.
## Engine-actionable? (yes/no + one-line what)
yes — Add conditional-coverage audit (bootstrap-resample calibration windows, histogram, report P(coverage < nominal−5pp)), minimum-m sizing rule from the Vovk bound, and weekly recalibration cadence; ~1–2 days effort on existing CQR stack.
