# arxiv-program/research/2026-09-21/arxiv-deep/1777-conformal-selective-prediction-general-risk-control.md
## What it is (1-2 sentences)
Deep read of arXiv:2603.24704 (Bai et al., 2026), which introduces SCoRE (Selective Conformal Risk control with E-values): a selective-prediction gate that controls general bounded continuous risk (not just 0/1 error) with finite-sample, distribution-free guarantees, including a weighted extension for covariate shift.
## Key metrics/methods (formulas where given, else "not specified")
- Core condition: screening statistic must be a nonnegative e-value with E[L·E] ≤ 1, where L is the bounded loss — buys the finite-sample guarantee
- Two risk notions: MDR = E[L_ψ] (mean risk over selection policy ψ, including abstention cost); SDR = expected average risk over selected points
- Selection by risk-adjusted e-value thresholding at target nominal risk levels 0.05–0.5
- Weighted extension: reweight e-values by the likelihood (density) ratio between deployment and calibration covariates; validity holds under weighted exchangeability
- Validity requires exchangeability of calibration/test points; loss must be bounded
## Data sources named
Simulation (n=1000 calibration, m=100 test, 100 runs); four drug-discovery tasks; MIMIC-IV ICU length-of-stay prediction; MIMIC-CXR radiology report selection
## Findings (numbers and facts, not vibes)
- Simulation at nominal risk levels 0.05–0.5: SCoRE controls selective risk tightly at the nominal level across all levels
- Hoeffding and Rademacher baselines are valid but dramatically less powerful — select far fewer points at strict levels
- Guarantee survives messy real data: all four drug tasks, MIMIC-IV ICU stay error, MIMIC-CXR report selection
- Code available: https://github.com/Tian-Bai/SCoRE
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Card-selection / gating methodology — gives GSE a finite-sample guarantee on the posted pick card's average betting loss (continuous, bounded by stake), complementing conformal intervals (CQR); covariate-shift weighting addresses early/late-season regime drift
## Engine-actionable? (yes/no + one-line what)
yes — Adopt SCoRE as the posted-card gate: calibration set = trailing graded picks with realized unit loss, selection score = existing gate score, post only e-values passing the target nominal average-loss threshold; ~1 week to build calibration table + e-value screen + monitoring, using the authors' reference code
