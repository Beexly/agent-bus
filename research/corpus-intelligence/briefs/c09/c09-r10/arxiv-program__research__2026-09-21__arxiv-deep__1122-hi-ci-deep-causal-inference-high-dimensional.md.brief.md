# arxiv-program/research/2026-09-21/arxiv-deep/1122-hi-ci-deep-causal-inference-high-dimensional.md
## What it is (1-2 sentences)
Deep-read ledger of Damera 2008.09858 (Hi-CI: deep causal inference with high-dimensional, highly correlated covariates and continuous treatments). Verdict: ADAPT — adopt the autoencoder + mixed L₂,₁ mean-difference regularization architecture with the paper's metrics, not its claims (counterfactual validation is synthetic-only).
## Key metrics/methods (formulas where given, else "not specified")
- Objective: L = L_CE(treatment | representation) + L_recon + λ·‖mean-difference‖_{2,1} + L_RMSE(outcome) (treatment-distribution cross-entropy + reconstruction + decorrelation penalty + outcome loss)
- Evaluation metrics: PEHE (precision in estimation of heterogeneous effects), MAPE over ATE, MISE (dosage), dosage-effect MAPE
- Assumptions: causal sufficiency/unconfoundedness given observed covariates; representation can be made treatment-independent without destroying outcome signal; positivity over continuous doses
## Data sources named
- Fully described synthetic DGPs and semi-synthetic NEWS datasets (NEWS2/NEWS4/NEWS100) with 2,870 covariates; simulated data available on request; no code link stated in the paper
## Findings (numbers and facts, not vibes)
- NEWS100 PEHE: Hi-CI 8.1432 ± 0.0476 vs PM 48.3878 ± 0.5620 vs MultiMBNN 49.6386 ± 0.8520 (~6× better)
- NEWS100 MAPE-ATE: Hi-CI 0.507 ± 0.0171 vs PM 1.9850 ± 0.1824 vs MultiMBNN 2.2014 ± 0.2350
- The file warns the ~6× margins partly reflect known-weak baselines (no X-learner/R-learner/causal-forest baseline); ground-truth ITE exists only because the DGP was invented; no NFL test, no prospective evaluation
- File's acceptance gate: adopt only if Hi-CI beats the best modern baseline (not just PM/MultiMBNN) on PEHE by ≥20% with comparable-or-better MAPE-ATE on a semi-synthetic NFL test (real 2019–2023 covariates, simulated heterogeneous dose effects)
- File's implementation spec: use case is dose-response of continuous football exposures (target share / snap share / practice load) on player fantasy output with hundreds of covariates (tracking + matchup + weather + line features); PyTorch; ~3 engineer-weeks
- Improvement experiment: combine with ledger 1121 (PPTA) — Hi-CI's representation learning inside PPTA's stochastic-inclusion design for many-covariates + limited-overlap regimes
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING (indirect: heterogeneous treatment effects of coaching-like exposures such as snap share / target share / practice load are a coaching-decision input); OTHER (causal ITE toolkit for the engine). No QB behavior, OL, trust-signal, or scheme content.
## Engine-actionable? (yes/no + one-line what)
Yes — implement the Hi-CI autoencoder + L₂,₁ decorrelation architecture to estimate dose-response effects of continuous football exposures (target/snap share) on player fantasy output, gating adoption on ≥20% PEHE improvement over a modern baseline (X-learner/R-learner) on semi-synthetic NFL data.
