# arxiv-program/research/2026-09-21/arxiv-deep/2153-minimax-decision-rules-planning-under-uncertainty.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2203.01420 (Anderson & Zachary 2022), "Minimax Decision Rules for Planning Under Uncertainty" — a rigorous critique of minimax-regret rules (scenario-choice sensitivity, IIA violation, gameability via decoy alternatives) with a constructive fix (minimax median regret). Verdict: ADAPT — the lane's *governance* paper: it dictates how GSE's adopted minimax-regret (2151) and weighted-regret (2152) rules must be used safely, since GSE's picks are published and the rule must be game-proof.

## Key metrics/methods (formulas where given, else "not specified")
- Regret R_i(x) = C_i(x) − min_x C_i(x); minimax regret: min_x max_i R_i(x); minimax median regret: min_x median_i R_i(x).
- Lemma 1 (gaming): a decoy decision z with extreme cost M in all-but-one scenario can flip the minimax-regret choice (irrelevant alternative changes the decision).
- Lemma 2 (IIA characterization): any decision rule minimizing a continuous non-decreasing function of the regret vector that also satisfies IIA is equivalent to minimizing expected cost under some probability distribution — regret-based robustness and IIA cannot coexist.
- Stoye's 8 axioms imply minimax regret (axiomatic context).

## Data sources named
None — analytic paper with constructed counterexamples (infrastructure-investment framing: energy planning, hydrogen vs electrification). No experiments, no data, no code.

## Findings (numbers and facts, not vibes)
- No numerical results. Key qualitative results: (a) minimax-regret decisions are typically determined by 1–2 binding scenarios; adding/removing one scenario can flip the decision; (b) decoy alternatives can flip decisions (Lemma 1); (c) minimax median regret resists the decoy construction; (d) IIA-respecting regret rules collapse to expected utility (Lemma 2).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Directly governs 2151's minimax-regret policy (scenario = sampled worlds — Lemma 1 says a single weird world can dictate the policy) and 2152's MWER (TRUST-SIGNAL).
- Prescription: fixed versioned seeded-RNG bootstrap protocol for world generation; median-regret aggregation; monthly leave-one-world-out sensitivity audit with a >20% policy-flip fragility flag and fallback to the 2149 mean-CVaR policy; explicit IIA tradeoff documented in engine decision-logic notes (TRUST-SIGNAL).

## Engine-actionable? (yes/no + one-line what)
Yes — ~3–5 days of governance work: scenario-generation protocol doc + median-regret variant of the 2151 policy + leave-one-world-out audit job; accept gate: injection experiment confirms scenario sensitivity (>20% flip under max-regret) AND median-regret cuts flips ≥50% with worst-world regret within 10% of max-regret's.
