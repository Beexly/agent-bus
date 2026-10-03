# docs/arxiv-program/research/2026-09-21/arxiv-deep/2094-statistical-limits-self-improving-agents.md
## What it is (1-2 sentences)
Deep read of arXiv:2510.04399 (2025, theory paper) — the statistical limits of self-improving agents: utility-driven self-modification preserves PAC learnability iff the policy-reachable model family is uniformly capacity-bounded (sup VC(H_reach) < ∞), yielding a Two-Gate promotion policy (validation margin τ + capacity cap K(m)). Verdict: ADAPT — safety theorem for the whole discovery loop.
## Key metrics/methods (formulas where given, else "not specified")
- Five-axis self-modification decomposition: A (algorithmic), H (representational), Z (architectural), F (substrate), M (metacognitive)
- Learnability boundary: distribution-free PAC guarantees hold ⟺ sup VC(H_reach) uniformly bounded; unbounded capacity → learnable tasks become unlearnable
- Two-Gate policy: accept a self-modification iff validation margin ≥ τ AND capacity proxy B(Z_new) ≤ K(m) (sample-size-dependent cap); proxy-cap two-gate oracle inequality (Appendix 13.3); finite-sample safety (Appendix 12.2)
- Multi-axis warning: capacity bounds must be enforced GLOBALLY — per-axis budgets allow multiplicative emergent capacity explosions
## Data sources named
None (theory paper; illustrative numerical experiments in appendices only). No code stated.
## Findings (numbers and facts, not vibes)
- Central result: utility–learning tension — utility-driven changes that improve immediate performance can erode the statistical preconditions for reliable learning; this is a formal statement of overfitting-by-self-improvement, not an empirical measurement (no headline numerics)
- GSE corpus relevance (ledger): every numeric gate in ledgers 2082–2093 is an instance of Gate 1 (validation) — Gate 1 alone is insufficient; no complexity-budget discipline on the discovery process exists in the corpus today
- Ledger's operational proxy: B = (# free parameters) + (# engineered features) + (rule count × avg conditions); proposed cap K = 2 × training seasons (e.g., 10 seasons → B ≤ 20); cap enforced on the whole production policy, not per-signal
- Limitations: VC uncomputable for LLM-driven loops — everything hinges on the proxy B(·) and its gap to true VC (paper flags this as the key open challenge); PAC assumes i.i.d., which sports seasons violate; theory gives no practical K(m) value
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Two-Gate promotion rule (Gate 1: lower bound of bootstrap CI of ΔBrier > 0.001; Gate 2: B ≤ K(m)) → TRUST-SIGNAL
- Global capacity budget on the production policy; scheduler must propose simplifications at cap → OTHER
- Adaptive K(m) via effective-sample-size accounting for non-stationarity (improvement experiment) → OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — implement the Two-Gate promotion rule in the discovery loop: every promoted signal passes both a validation-margin gate (bootstrap lower bound) and a global complexity budget B ≤ 2×seasons, with the nightly scheduler constrained to propose simplifications when at cap; ~1–2 days.
