# arxiv-program/research/2026-09-21/arxiv-deep/0485-admissible-predictive-density-estimation.md
## What it is (1-2 sentences)
Brown, George & Xu (2008, Annals of Statistics 36(3), arXiv:0806.2914v1) decision-theory paper: for the canonical problem X|μ ~ N_p(μ, v_x I), predict Y|μ ~ N_p(μ, v_y I) under expected KL loss, characterizing which predictive-density estimators are admissible — generalized Bayes rules form a complete class, with checkable sufficient conditions for improper-prior Bayes rules. Program verdict: REJECT — normal-model decision theory with no data and no sports application.
## Key metrics/methods (formulas where given, else "not specified")
- Model: X|μ ~ N_p(μ, v_x I), Y|μ ~ N_p(μ, v_y I) independent; v_x, v_y known. KL risk: R_KL(μ, p̂) = ∬ p(y|μ) log[p(y|μ)/p̂(y|x)] dy · p(x|μ) dx
- Bridge lemma (Theorem 1): R_KL(μ, p̂_{πU}) − R_KL(μ, p̂_π) = (1/2) ∫_{v_w}^{v_x} (1/v²) [R^v_Q(μ, μ̂_MLE) − R^v_Q(μ, μ̂^v_π)] dv, with v_w = v_x v_y/(v_x + v_y) < v_x — KL-risk difference equals an integrated quadratic-risk difference via marginal densities m_π(z;v) and Stein identities
- Admissibility sufficient conditions (Theorem 2): for every v ∈ [v_w, v_x] the improper prior π must satisfy (i) growth ∫_{ℝ^p∖S} π(μ)/(‖μ‖² log²(‖μ‖∨2)) dμ < ∞ (S = {‖μ‖ ≤ 1}) and (ii) asymptotic flatness ∬ π(μ)·[‖∇m_π(z;v)/m_π(z;v) − ∇π/π‖²] p(z|μ) dμ dz < ∞, proved via log-taper truncated priors π_n = j_n²π and Blyth's method
- Complete class (Theorems 3–4): nonrandomized procedures are complete; every admissible rule is a limit of Bayes rules
- Examples: uniform prior π_U = 1 → p̂_{πU} admissible for p = 1, 2 (best invariant, minimax); harmonic prior π_H = ‖μ‖^{−(p−2)}, p ≥ 3 → admissible; p̂_{πU} inadmissible for p ≥ 3 (Komaki 2001); dominated by proper Bayes rules under Strawderman priors for p ≥ 5 (Liang 2002) — the KL analog of Stein's phenomenon
## Data sources named
None — pure decision-theory paper; the only "data" is the canonical normal model above.
## Findings (numbers and facts, not vibes)
- Zero numerical results — all results are theorems and cited inadmissibility facts. File's adversarial notes: admissibility is a weak property (rules out dominated rules, selects nothing among admissible ones); conditions (16)–(17) are nontrivial to verify for general priors; the analysis is locked to the known-variance normal model — nothing extends to discrete outcomes (win/loss) or misspecified models; GSE predicts discrete outcomes with empirical calibration (conformal, CQR, Venn-Abers, Clopper-Pearson, grouping loss), not normal predictive densities.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None in the target lanes — pure theoretical statistics. OTHER (textbook-grade residue only): "use proper or well-behaved priors; uniform priors are inadmissible in ≥3 dimensions" — relevant if GSE ever adopts a Bayesian hierarchical team-strength model (e.g., shrinkage on early-season small samples), but this is standard knowledge, not a build from this paper.
## Engine-actionable? (yes/no + one-line what)
No — rejected theory paper; a characterization theorem with nothing to build, and its normal-model setting does not match GSE's discrete-outcome empirical-uncertainty stack.
