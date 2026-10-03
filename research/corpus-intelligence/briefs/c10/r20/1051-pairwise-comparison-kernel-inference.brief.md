# arxiv-program/research/2026-09-21/arxiv-deep/1051-pairwise-comparison-kernel-inference.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2512.15269v1 (Sánchez Catalina & Cantwell), "Model inference for ranking from pairwise comparisons": jointly infers latent skills AND the unknown monotone win-probability kernel from data via EM + belief propagation, instead of assuming the logistic kernel. Ledger verdict: ADAPT — joint skill-plus-kernel inference is not covered anywhere else in the corpus.
## Key metrics/methods (formulas where given, else "not specified")
- Latent skills s_i; win-probability kernel p(s_i − s_j) unknown, constrained monotone increasing.
- Kernel parametrizations: (i) Chebyshev polynomial expansion of the log-odds curve; (ii) neural network with monotonicity constraints.
- EM: E-step runs belief propagation over the match graph for posterior skill marginals; M-step updates kernel parameters.
- Baselines: fixed-logistic Bradley-Terry/Elo — compared on skill RMSE (synthetic) and log-loss (ATP prediction).
## Data sources named
- Synthetic: 1,024 players × 64 matches each with known ground-truth kernel (identifiability check).
- Eleven real pairwise-comparison datasets (sports and non-sports); ledger gives no headline numerics beyond qualitative "good fit."
- ATP tour: fit 2021–2022, predict 2023–2024 from prior-12-month observations, strictly chronological.
- Authors' code: https://github.com/gcant/pairwise-comparison-inference.
## Findings (numbers and facts, not vibes)
- Synthetic: method recovers both skills and kernel; no exact numeric quoted in the ledger.
- ATP 2021–2022 fit / 2023–2024 prediction: "competitive predictions," no exact numeric quoted.
- GSE overlap note: corpus inventories Elo, Glicko, TrueSkill, Bradley-Terry, Plackett-Luce as known methods — all fix the kernel a priori; this paper is the only joint skill-plus-kernel method in the tracked corpus.
- Numeric gate (ledger): ADAPT iff learned kernel beats fixed logistic on GSE's own backtest — lower log-loss on at least two held-out NFL seasons; if the learned kernel collapses to logistic, adaptation adds nothing.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: core lesson — GSE's rating layer inherits the logistic kernel as an untested assumption; learning the kernel per sport captures favorite-longshot asymmetries and diminishing returns to large skill gaps that a fixed sigmoid misses.
- TRUST-SIGNAL: learned-kernel tail deviations quantify favorite-longshot bias / chalk compression — directly usable as a calibration correction on GSE probability outputs (feeds the calibration layer).
- OTHER: extensions — learn score-differential kernel for margin-of-victory (ordered outcomes), or separate kernels per segment (divisional vs non-divisional, playoff vs regular season); success criterion is log-loss + ECE wins on NFL 2022–2025.
## Engine-actionable? (yes/no + one-line what)
yes — port the authors' Chebyshev-kernel module onto the NFL pairwise match graph (game results / moneyline outcomes vs market), backtest learned-kernel log-loss vs fixed-logistic Bradley-Terry on held-out seasons; gate on two seasons won.
