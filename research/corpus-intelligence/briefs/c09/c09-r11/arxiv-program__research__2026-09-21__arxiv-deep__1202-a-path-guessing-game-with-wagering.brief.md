# arxiv-program/research/2026-09-21/arxiv-deep/1202-a-path-guessing-game-with-wagering.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:0907.2196v1 (Pendergrass 2009): pure game-theoretic analysis of optimal strategies for a two-player zero-sum path-guessing game with wagering on directed graphs (fans, trees, terminating and strongly connected graphs), plus the infinite-horizon Lying Oracle Game. Verdict: REJECT — no sports-prediction, calibration, or fixed-odds bet-sizing content.
## Key metrics/methods (formulas where given, else "not specified")
- Fan (Theorem 1): Chooser p(j) = v_j^{−1}/Σ_k v_k^{−1}; Guesser one-parameter family q(j) = (np(j)−1+w)/(nw), w = 1−nβp_min; game value = harmonic mean n/Σv_j^{−1}.
- Trees: value propagation v_i = n_i^{−1}Σ_{i→j}v_j^{−1}; terminating graphs: limiting reciprocal values u = (I−A)^{−1}Bu_t; strong connectivity via Perron-Frobenius maximal eigenvalue r of propagation matrix M.
- Lying Oracle G_{n,1}: oracle tells truth with prob λ^{−1} where λ solves λ^n − λ^{n−1} − 1 = 0; optimal lie fraction μ_2 = 1/(λ^n+n−1) → 1/n.
## Data sources named
None — pure theory; two closed-form worked examples only.
## Findings (numbers and facts, not vibes)
- No empirical results: theorems with proofs only. Example numerics: lie fraction → 1/n as n→∞; stoppable-variant p_{1,n+1} → 4/9 as n→∞.
- Fairness conditions derived: terminating graphs fair ⟺ all terminal values 1 and all out-degrees ≥ 2; strongly connected fair ⟺ every vertex out-degree ≥ 2.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: adversarial equilibrium analysis. Zero mapping to GSE — the game is against an adversary who observes your wager, opposite of betting fixed bookmaker odds with no adversarial stake response; payoff rule (∝ out-degree − 1) has no decimal-odds counterpart.
## Engine-actionable? (yes/no + one-line what)
no — GSE's sizing lane is a single-agent Kelly problem under estimation uncertainty (ledgers 0171/0626/0813/1200), not an adversarial game; nothing here transfers.
