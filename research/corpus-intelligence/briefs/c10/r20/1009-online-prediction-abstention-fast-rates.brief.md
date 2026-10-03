# arxiv-program/research/2026-09-21/arxiv-deep/1009-online-prediction-abstention-fast-rates.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2001.10623 (Neu & Zhivotovskiy 2020), "Fast Rates for Online Prediction with Abstention": a pure-theory paper proving that a no-bet option at cost c < 1/2 turns regret from growing √T into a horizon-independent log N bound. The ledger verdict is ADAPT as the theoretical backbone for GSE's selective-publishing (no-bet) layer.
## Key metrics/methods (formulas where given, else "not specified")
- Theorem 1: R_T ≤ log N / η, with η = 2(1−2c).
- Abstention rule: predict weighted-majority class k*_t with confidence p*_t; abstain with probability α_t = 2(1−p*_t). Expected loss: E[ℓ̂_t] = α_t·c + (1−α_t)·1{k*_t ≠ y_t}.
- Lemma 4 proof step: E[ℓ̂_t] = r_t − (1−2c)(r_t ∧ (1−r_t)), where r_t = Σ_i q_{t,i} 1{y_{t,i} ≠ y_t}.
- Corollary 2: tuning η gives R_T ≤ (log N)/(2(1−2c)) ∧ √(T log N / 2). Matching lower bound of order log N/(1−2c) — tight.
- Extensions: time-varying costs c_t ≤ 1/2 (Proposition 5); Tsybakov-type margin condition (1/T)Σ_t 1{1/2 − c_t < x} ≤ β x^{α/(1−α)} (Definition 6) yielding R_T = O((log N)^{1/(2−α)} T^{(1−α)/(2−α)}) (Corollary 7).
## Data sources named
None — pure theory; no datasets, no experiments, no code.
## Findings (numbers and facts, not vibes)
- Fast rate log N/(1−2c) vs slow rate √(T log N). Worked example from the ledger: N=10 experts, c=0.49 → regret ≤ log 10 / 0.04 ≈ 57.6 total forever, vs ~√(T·2.3) growing with T.
- Abstention cost c must be strictly below 1/2; near-1/2 gives weak constants.
- Acceptance gate (ledger): ADOPT only if the α-rule's cumulative regret vs best expert over 2024 is ≤ 50% of the publish-all rule's AND no-bet rate ≤ 40%.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: exponential-weight no-bet rule with abstention probability α_t = 2(1−p*_t) over engine model variants + signal experts — implementable one-line aggregation addition (<1 day per ledger).
- OTHER: slate-adaptive costs — skip more aggressively on thin slates, less on full slates; maps to the Tsybakov time-varying-cost section.
- TRUST-SIGNAL: first-principles justification for the abstention/selective-publishing lane; cumulative regret flattening is the fast-rate signature to verify on 2024 time-ordered data.
## Engine-actionable? (yes/no + one-line what)
yes — publish only when weighted consensus p* ≥ (1−τ/2), τ calibrated on 2024 to a target no-bet rate; one-line aggregation change.
