# docs/arxiv-program/research/2026-09-21/arxiv-deep/0882-bradley-terry-many-routes.md
## What it is (1-2 sentences)
Ledger of arXiv:2312.13619v2 (Hamilton, Tawn, Firth 2025; accepted in *Statistical Science*): a synthesis of the many independent theoretical routes to the Bradley–Terry model (odds transitivity, Luce choice, MaxEnt, discriminal processes, hazards, Poisson scoring, network/spectral forms) plus assumption-failure diagnostics. Verdict ADAPT — conceptual, no new experiment; the corpus's first principled BT reference.
## Key metrics/methods (formulas where given, else "not specified")
- BT pairwise probability: P(i beats j) = π_i / (π_i + π_j), π_i > 0.
- Luce choice: P(i chosen from S) = π_i / Σ_{j∈S} π_j.
- Gumbel discriminal process: Y_i = log π_i + ε_i, ε_i iid Gumbel → logistic BT; Weibull/Fréchet variants → generalized forms.
- MaxEnt: BT likelihood is the entropy-maximizing distribution under mean-win constraints (retrodictive criterion).
- Quasi-symmetry: win-matrix structure yielding BT-type stationary distributions (fair-bets/PageRank connection).
- Extensions: Rao–Kupper and Davidson tie models; multi-competitor Plackett–Luce forms.
- Assumptions made explicit: pairwise outcomes independent conditional on worths; worth scale one-dimensional and static; no order-of-comparison effects; ties excluded unless a tie model is adopted.
- No new datasets, no empirical validation, no code; the "results" are the derivations themselves.
## Data sources named
No empirical datasets analyzed; illustrative references to standard paired-comparison applications (chess, sports).
## Findings (numbers and facts, not vibes)
- Multiple historically independent routes (Thurstone–Mosteller, Bradley–Terry 1952, Zermelo 1929, Luce 1959, Plackett 1975) converge on the same functional form — stated as the unifying claim explaining the model's robustness across domains.
- Existing-research-map mentions Bradley–Terry only as an inventoried catalog entry (not deeply researched); the 64-ID dedup set contains no BT derivation paper — this ledger fills that gap.
- Complements (does not duplicate) applied BT papers in the same wave (0889 PlackettLuce package, 0890 MaxEnt multi-outcome BT, 0891 luck+depth BT, 0892 dynamic BTL).
- Limitation: failure diagnostics discussed in principle but not demonstrated on a real sports dataset with a worked remediation; practitioner translation (what to change when a diagnostic fails) left to the reader.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] "Ratings license checklist" for the GSE ratings pipeline: (a) transitivity/intransitivity test on the win matrix; (b) quasi-symmetry residual check (PageRank/fair-bets comparison); (c) tie-model comparison (Davidson vs Rao–Kupper vs ignore); (d) MaxEnt-vs-MLE comparison of fitted worths.
- [OTHER] Model selection via the derivation menu: Gumbel-discriminal BT for moneyline win probabilities; Poisson-scoring formulation for totals/margins; Davidson-tie BT for markets with meaningful draw probability; multi-competitor PL for tournament/field markets (~2–3 days to implement the four diagnostics).
- [TRUST-SIGNAL] Numeric gate: tie-aware/multi-outcome BT variant beats plain-BT held-out 2025 log-likelihood by ≥0.005/game at p<0.05 (McNemar-style); if no variant wins, diagnostics still stand as guardrails.
- [OTHER] Improvement experiment: failure-diagnostic dashboard tracking the intransitivity index weekly; regime-aware BT variant re-selection on threshold crossing.
## Engine-actionable? (yes/no + one-line what)
Yes — encode the four assumption diagnostics as scheduled gates in the ratings build and use the derivation menu to select the right BT variant per market.
