# docs/arxiv-program/research/2026-09-21/arxiv-deep/0882-bradley-terry-many-routes.md
## What it is (1-2 sentences)
Deep-read ledger for arXiv:2312.13619v2 (Hamilton, Tawn, Firth 2025, accepted in Statistical Science) — a synthesis paper assembling the many independent mathematical routes (odds transitivity, Luce choice, MaxEnt, Rasch, Mallows, hazards, Poisson scoring, network/spectral) to the Bradley–Terry model, plus assumption-failure diagnostics. Verdict ADAPT, conceptual: the corpus's first principled BT reference; the derivation menu and diagnostics give GSE a principled way to select BT variants for its ratings architecture.
## Key metrics/methods (formulas where given, else "not specified")
- BT pairwise: P(i beats j) = π_i / (π_i + π_j), π_i > 0 ("worth" parameters); Luce choice: P(i chosen from S) = π_i / Σ_{j∈S} π_j.
- Gumbel discriminal process: Y_i = log π_i + ε_i, ε_i iid Gumbel → BT form; MaxEnt: BT likelihood is the entropy-maximizing distribution under mean-win constraints.
- Diagnostics: transitivity/intransitivity tests on the win matrix; quasi-symmetry residual checks (PageRank/fair-bets); tie-model comparison (Davidson vs Rao–Kupper vs ignore); MaxEnt-vs-MLE comparison of fitted worths.
- Assumptions made explicit: pairwise outcomes independent conditional on worths; one-dimensional static worth scale; no order-of-comparison effects; ties excluded unless modeled.
- Extensions: Davidson/Rao–Kupper tie models; multi-competitor Plackett–Luce; Poisson-scoring formulation for scores/totals.
## Data sources named
No empirical datasets (synthesis paper); references standard paired-comparison applications (chess, sports) illustratively.
## Findings (numbers and facts, not vibes)
- No numeric results or baselines (synthesis paper; the results are the derivations).
- Unifying claim: historically independent routes (Thurstone–Mosteller, Bradley–Terry 1952, Zermelo 1929, Luce 1959, Plackett 1975) converge on the same functional form — the source of BT's cross-domain robustness.
- Paper's own warning: treating the BT form as "true" rather than the MaxEnt choice under its assumptions is a conceptual risk.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Ratings-license checklist: run assumption diagnostics before promoting any pairwise rating model → OTHER (ratings architecture)
- Variant selection per market: Gumbel-BT for moneylines; Poisson-scoring BT for totals/margins; Davidson-tie BT for draw markets; multi-competitor PL for fields → OTHER (market mapping)
- Weekly intransitivity-index + quasi-symmetry-residual tracking triggering automatic BT-variant re-selection → OTHER (regime-aware ratings)
## Engine-actionable? (yes/no + one-line what)
yes — implement the four assumption diagnostics as gates in GSE's ratings build and use the derivation menu to pick the right BT variant per market instead of guessing (2–3 days).
