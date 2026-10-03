# arxiv-program/research/2026-09-21/arxiv-deep/1549-algorithmic-expert-aggregation.md
## What it is (1-2 sentences)
Deep read of arXiv:2607.08744 (Tang & Zhang, CUHK): a pure-theory paper on constructing calibrated output experts that Blackwell-dominate input experts, with polynomial-time LP algorithms and NP-hardness results for the deterministic case. Ledger verdict: REJECT — zero empirical forecasting application (no datasets, no experiments, no backtests, no numbers); replaced by arXiv:1803.06730 as ledger 1560.

## Key metrics/methods (formulas where given, else "not specified")
- Finite state space Ω, prior λ, binary outcome Y; experts as stochastic mappings f: Ω → Δ([0,1]) with posterior-consistent (calibrated) reports.
- Constructs: observable signal-state matrix A with A(j,a),i = ρ_{j,a,i}; linear system Ay = b, b_{j,a} = p_{j,a}λ(ρ_{j,a}); observable row space S = Row(A), cone K = S ∩ Rⁿ₊.
- Constructible expert: g(·|ω_i) = Σ_h v⁽ʰ⁾_i δ(p_h), p_h = Ŷ(v⁽ʰ⁾)/λ(v⁽ʰ⁾) — decompositions of the all-ones vector into nonzero v⁽ʰ⁾ ∈ K.
- Blackwell dominance: f ⪰ f† iff I_f(t) ≥ I_f†(t) ∀ t, where I_f(t) = E[(t − p)_+] is the integrated CDF.
- Algorithms: Search-Aggregation (polynomial-time via extreme-ray decomposition + Stern–Brocot search); OPT-Aggregation (additive FPTAS via LP). Hardness: deterministic output is NP-hard (SubsetSum reduction); no multiplicative PTAS for Brier optimization unless P = NP.
- Assumptions: exactly calibrated experts, known prior, finite state space, curvature-bounded regular proper loss.

## Data sources named
None — no datasets. Only applied scenario is a stated-but-never-executed hospital-expert-aggregation motivation. No repository, no data.

## Findings (numbers and facts, not vibes)
- None — no numbers reported anywhere. "Results" are complexity classifications: polynomial-time additive FPTAS (Theorem 5.1); deterministic aggregation NP-hard; no multiplicative PTAS for Brier optimization unless P = NP.
- Example 1.1 is a worked 3-state toy calculation, not an experiment.
- Exact-calibration assumption is strong and untested for robustness; finite-state discrete formalism with no path to continuous predictive distributions; worst-case hardness with no heuristic guidance for the deterministic case GSE needs.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none actionable — conceptually novel (calibrated aggregation, Blackwell dominance) but no applied result to transfer; no empirical basis for engine work.

## Engine-actionable? (yes/no + one-line what)
No — REJECTED at the valuable-count bar: 53 pages of theorems with zero empirical validation; if a future applied version appears, re-evaluate under a new ledger number.
