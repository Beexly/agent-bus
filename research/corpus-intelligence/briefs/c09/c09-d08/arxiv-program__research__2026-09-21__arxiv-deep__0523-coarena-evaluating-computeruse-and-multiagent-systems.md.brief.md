# arxiv-program/research/2026-09-21/arxiv-deep/0523-coarena-evaluating-computeruse-and-multiagent-systems.md
## What it is (1-2 sentences)
A design whitepaper (arXiv:2609.14239v1, Kovuru & Jannu, 2026) formalizing real-time evaluation of computer-use/multi-agent systems via a blind-judged user-task arena; every number is explicitly labeled illustrative or simulated — there are zero empirical measurements of a deployed system. The GSE ledger verdict is REJECT (all numbers illustrative; BT/Elo machinery duplicates paper [0522]).
## Key metrics/methods (formulas where given, else "not specified")
Bradley-Terry pairwise model p_ij = σ(θ_i − θ_j), Elo conversion R_a = R_0 + (400/ln 10)θ_a ≈ R_0 + 173.72θ_a; ridge-penalized batch MLE (Newton) + streaming per-vote SGD update reducing to the Elo update: R_ib ← R_ib + K_ib w_b(y_b − μ_b) with K(n_a) = K_min + (K_max − K_min)n_0/(n_0 + n_a), K_max=48, K_min=12, n_0=30; CIs via projected observed information, judge-clustered sandwich covariance, rank bands via seeded parametric bootstrap; inter-judge agreement Fleiss' κ; provisional-entry floor n_0=30; evidence weights w_b = γ_b·ω̄_b. Simulation: homogeneous Poisson arrivals λ=12/hr, lognormal service median 6 min / σ=0.5, 4 slots, seed 11 → 280 arrivals, 279 battles.
## Data sources named
None measured. Worked inputs: illustrative 5-agent vote matrix (211 votes), simulation seeds 11 and 7, 6 example computer-use tasks in Appendix C. No code repo (algorithms in pseudocode); platform CoArena.ai referenced via author affiliation.
## Findings (numbers and facts, not vibes)
- Worked example ratings (ILLUSTRATIVE per authors): A 1140 (95% CI 1073–1206), B 1050 (988–1111), C 992 (931–1053), D 941 (877–1005), E 877 (809–945); rank bands A: 1–2 (P{first}=0.973); Newton converged in 5 iterations at tolerance 1e-10.
- Convergence simulation (ILLUSTRATIVE): interval half-width 112 Elo at 100 votes, 52 at 300, 41 at 600; Elo 95% half-width ≥ 681/√n.
- Arrival simulation (ILLUSTRATIVE inputs): refit staleness ≤ 31 s vs weekly benchmark 604,800 s (ratio ~2×10^4); feedback latency example 1,330 s ≈ 22 min ≤ 1 h horizon.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: BT/Elo arena-rating machinery (ridge-penalized MLE, streaming Elo updates, rank bands, cluster-robust CIs) — domain-general rating methods, already covered by ledger [0522]'s Elo framework; no sports application.
## Engine-actionable? (yes/no + one-line what)
No — REJECT for standalone adoption; only the reporting discipline (publish intervals and rank bands, not point ranks) is salvageable for any future GSE model leaderboard.
