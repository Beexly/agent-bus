# arxiv-program/research/2026-09-21/arxiv-deep/1823-ai-feynman-physics-inspired-method-for-symbolic-regression.md
## What it is (1-2 sentences)
AI Feynman (arXiv:1905.11481): physics-inspired symbolic regression that recursively combines a neural network's discovered symmetries/separabilities with dimensional analysis, polynomial fitting, and brute-force search — solving equation mysteries that flat genetic-programming search cannot. Adjudicated ADAPT: the divide-and-conquer architecture (structure detection → recursion → search) is the template for GSE's metric-invention pipeline, with the NN modules repurposed for regime structure instead of physics symmetries.
## Key metrics/methods (formulas where given, else "not specified")
- Separability recombination: y = y'·y''/c_num (multiplicative; additive analog y = y' + y'' − c_num).
- Symmetry threshold: ε_sym = 7 × NN validation error (≈7σ, near-zero false positives); separability metric Δ_sep < ε_sep tested over all variable subsets.
- NN: feed-forward, 6 hidden layers (3×128 + 3×64), softplus activation, 100 epochs, lr 0.005, batch 2048, Adam with weight decay 1e-2, FastAI 1-cycle schedule; polynomial fit degrees 0–4; brute-force with three symbol subsets. Metric: fraction of mysteries exactly recovered.
## Data sources named
The "Feynman Database for Symbolic Regression": 100 equations from the Feynman Lectures + 20 bonus equations; 100,000 synthetic data points per mystery (80/20 train/val), 6.5 GB downloadable; code at github.com/SJ001/AI-Feynman (open source). Bonus set selected after hyperparameter lock — a true held-out test set.
## Findings (numbers and facts, not vibes)
- Basic set: AI Feynman solved **100/100** vs Eureqa **71/100** (paper also restates Eureqa at 68% in §IV — both figures are the paper's own claims; tables use 71%).
- Bonus set: **18/20 (90%)** vs Eureqa **3/20 (15%)**; biggest gains on the most complicated mysteries where NN-discovered symmetry/separability eliminates variables before brute force; max 2h CPU per mystery.
- Limitation from the file: sports quantities lack physical units (kills the dimensional-analysis module) and have regime structure (red zone, garbage time) rather than symmetries.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OTHER) Metric-invention pipeline: "AI-Feynman-lite" front end to PySR — fit an MLP to the sports target, probe additive separability across feature groups (offense vs defense vs context), run PySR per group, recombine; replace dimensional analysis with a pace/total-plays scale-invariance check.
- (SCHEME) INFERENCE — "regime separability" improvement: probe the MLP for separability across data subsets (score differential × time × field position) rather than variable subsets, matching how football actually splits (garbage time, two-minute drill are different DGPs).
## Engine-actionable? (yes/no + one-line what)
Yes — build the separability front-end (MLP prober + Δ_sep test + PySR orchestration) on nflverse team-game rows 2009–2025 targeting points/drive; adopt if it beats flat PySR by ≥5% held-out RMSE with ≤1.2× total nodes.
