# arxiv-program/research/2026-09-21/arxiv-deep/2169-rethinking-symbolic-regression-datasets-benchmarks-scientific-discovery.md
## What it is (1-2 sentences)
A full-paper research note (ledger 2169, ADAPT verdict) on Matsubara et al. 2022 (arXiv:2206.10540): it builds 240 physically realistic symbolic-regression benchmark datasets (SRSD-Feynman, half with injected dummy variables) and shows that R²-based evaluation of discovered equations is nearly uncorrelated with expert human judgment while a normalized tree-edit-distance metric (NED) correlates strongly — and that every tested SR method happily includes spurious variables.
## Key metrics/methods (formulas where given, else "not specified")
- Domain-range difficulty: f_range(S) = |log₁₀|max S − min S|| (Eq. 1); R² (Eq. 2, standard).
- Normalized Edit Distance (Eq. 3): d̄(f_pred, f_true) = min(1, d(f_pred,f_true)/|f_true|), d = Zhang–Shasha tree edit distance over sympy-simplified equation trees (constants/variables canonicalized; "x+x+x" ≡ "3x").
- Model selection per problem: f*_pred = argmin (1/n)Σ|(f_pred−f_true)/f_true|² (Eq. 4, relative validation MSE).
- User study: 23 PhD volunteers, 24 problems, 1–5 human similarity ratings correlated against R² and NED. Dummy-variable audit: % of predictions using ≥1 dummy variable, and % of "R²-correct" predictions using ≥1 dummy.
## Data sources named
SRSD-Feynman datasets (120 physics formulas; Easy 30 / Medium 40 / Hard 50; plus 120 with 1–3 log-uniform dummy variables) at github.com/omron-sinicx/srsd-benchmark and HuggingFace (yoshitomo-matsubara/srsd-feynman_{easy,medium,hard}{,_dummy}). Benchmarked methods: gplearn, AFP, AFP-FE, AI Feynman, DSR, E2E, uDSR, PySR (100 hyperparameter sessions each, 1,680 HPC jobs).
## Findings (numbers and facts, not vibes)
- uDSR and PySR are SOTA on the new benchmark (AI Feynman won the old FSRD — rankings flip with realistic data): uDSR best R²-accuracy (Easy 100%, Medium 75%, Hard 20%); PySR best solution rate (Easy 60%, Medium 30%, Hard 4%) and best NED (Easy 0.269, Medium 0.537, Hard 0.785, lower is better).
- 50–100% of predictions across ALL methods use at least one dummy variable. DSR's "correct" (R²>0.999) equations are 45.1% dummy-contaminated; E2E's are 100% dummy-contaminated. PySR's complexity penalty is the only partial defense (its dummy-using solutions never reach R²>0.999).
- User study: human ratings vs R²: PCC = 0.00466, p = 0.913 (no correlation). Human ratings vs NED: PCC = −0.416, p = 1.85×10⁻²⁴ (strong; negative because lower NED = better).
- NED discriminates methods even where solution rate saturates at 0% (Medium/Hard dummy sets).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: evaluation methodology for equation/model discovery — a process-correction for GSE's model-selection pipeline, not a domain finding about teams or players.
## Engine-actionable? (yes/no + one-line what)
Yes — GSE should (1) audit its SR pipeline with injected dummy variables (Table 6 protocol) to check whether its discovered equations include spurious stats, and (2) add a structural (NED-style) plausibility tie-break when selecting among near-equal-validation-fit equations, since R² alone cannot distinguish structurally true from coincidentally fitting equations.
