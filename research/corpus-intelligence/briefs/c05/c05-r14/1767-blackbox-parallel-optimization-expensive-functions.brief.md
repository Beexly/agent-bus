# arxiv-program/research/2026-09-21/arxiv-deep/1767-blackbox-parallel-optimization-expensive-functions.md
## What it is (1-2 sentences)
A 2016 methods note (Knysh & Korkolis, arXiv:1605.00998v2) for parallel optimization of expensive continuous black-box functions using radial-basis-function response surfaces, Latin-hypercube initialization, and a modified CORS sampling algorithm with space rescaling; ships a Python implementation.
## Key metrics/methods (formulas where given, else "not specified")
- RBF surrogate: s(x) = Σ λ_i φ(||x−x_i||) + polynomial tail.
- CORS infill: optimize the surrogate subject to a distance constraint from evaluated points, with space rescaling; parallel batch evaluations for multicore scaling.
- Assumptions: smooth black-box function amenable to RBF interpolation; parallel workers available.
## Data sources named
None — standard black-box benchmark test functions only.
## Findings (numbers and facts, not vibes)
- Benchmark comparisons for the optimizer itself; nothing sports-related.
- File's ledger verdict: REJECT — generic 2016 continuous black-box optimizer, zero sports/DFS content, superseded by modern libraries (BoTorch, Ax, scikit-optimize), and the wrong problem class (DFS lineup optimization is discrete/combinatorial, not continuous black-box).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (none): no sports, betting, or forecasting content; no engine overlap.
## Engine-actionable? (yes/no + one-line what)
No — rejected per the file's own verdict; if surrogate-based hyperparameter tuning is ever needed, use BoTorch or scikit-optimize instead.
