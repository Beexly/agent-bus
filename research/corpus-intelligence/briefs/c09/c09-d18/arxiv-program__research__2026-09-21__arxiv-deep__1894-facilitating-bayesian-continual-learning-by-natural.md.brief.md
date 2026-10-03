# arxiv-program/research/2026-09-21/arxiv-deep/1894-facilitating-bayesian-continual-learning-by-natural.md
## What it is (1-2 sentences)
Deep-read note on arXiv:1904.10644 (Chen, Diethe, Lawrence, 2019): Bayesian continual learning improved via Gaussian natural gradients (posterior-mean update ĝ_μ = σ²·g_μ — certain parameters move less, uncertain ones more) and Stein-gradient coresets (O(M²) history compression via SVGD transport). Verdict in file: ADAPT — the lane's theoretical keystone unifying EWC/1891 (anchoring), 1893 (hierarchical shrinkage), and 1888 (replay buffer) into one weekly-refit objective.
## Key metrics/methods (formulas where given, else "not specified")
- VCL baseline: ℒ_VCL = E_{q_t}[log p(D_t|θ)] − KL(q_t‖q_{t−1}) (prior = previous posterior).
- Gaussian natural gradients: for mean-field Gaussian, F_{μ_i} = 1/σ_i², F_{v_i} = 2, so ĝ_{μ_i} = σ_i²·g_{μ_i} — certain (small-σ) parameters move less. Adam's second-moment normalization compensates GNG scale issues; warning: EWC-style Fisher penalties work worse with Adam than SGD (natural-gradient/Adam duplicates fourth moments, Eq. 9).
- Stein coresets: iteratively transport M samples toward the posterior via SVGD update φ*(x) = (1/M)Σ_j [k(x^{(j)},x^{(l)})∇log p(x^{(j)}|θ) + ∇k] (RBF kernel) — O(M²) vs O(MN) Bayesian coresets.
- Regret loss: ℒ_t = E[log p(D_t|θ)] + E[log p(C_{t−1}|θ)] − KL(q_t‖q_{t−1}) — coresets as a likelihood term, no separate predictive model.
- GSE analog spec in file: certainty-weighted weekly updates Δ_i ∝ σ_i²·gradient_i (per-team uncertainty from Bayesian linear layer or bootstrap spread of team adjustments); Stein coreset replay buffer (~200 games, greedy kernelized gradient coverage via GBM leaf-gradient embeddings + RBF kernel, quarterly refresh); unified ℒ_week = logloss(new week) + logloss(coreset) + λ·KL anchor.
## Data sources named
Permuted MNIST, split MNIST, split Fashion-MNIST (all public). Model: Bayesian neural net, 2 hidden layers × 100 units, mean-field Gaussian posteriors, multi-head outputs, 5 seeds. Coreset sizes 200/task (permuted), 40/task (split).
## Findings (numbers and facts, not vibes)
- Permuted MNIST: GNG+Adam outperforms standalone Adam (Figure 1, left); no significant difference on split tasks — natural gradients help most when tasks conflict (permutations), less when they merely partition (splits); NFL weeks are more "split" than "permuted" (flagged as a caveat).
- Coresets: regret-loss usage (Eq. 12) beats separate-predictive-model usage in general; Stein coresets beat random and K-center coresets in most cases.
- Optimizer interaction: EWC-type penalties + Adam < EWC + SGD — caution for combining 1891's anchoring with adaptive optimizers; test, don't assume.
- Limitations: toy-scale mean-field BNNs on MNIST; nothing validates GNG or Stein coresets on tabular GBMs or NFL-scale data; no calibration/uncertainty metrics (accuracy only); Stein coresets need a posterior — GBMs have none, so a bootstrap-distribution surrogate is required.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — continual-learning theory for weekly engine refits: per-team/per-feature certainty-weighted updates (teams we're certain about move little; uncertain ones adapt fast — principled replacement for 1893's flat gating); Stein coreset as optimal small replay buffer replacing reservoir sampling.
- QB-BEHAVIOR / COACHING — uncertainty is highest in early-season weeks and after QB/coaching changes — the σ²-weighted update matters most exactly where regime shifts live (file's improvement experiment: test weeks 1–4 Brier, 2020–2025).
## Engine-actionable? (yes/no + one-line what)
Yes — implement certainty-weighted weekly updates (per-team bootstrap σ² scaling) and a Stein-style coreset buffer (200 games) replacing the reservoir; acceptance: certainty arm beats plain weekly refit on ≥2 of 1887's 4 metrics with worst-week Brier ≥0.001 better; coreset arm beats reservoir on worst-week Brier by ≥0.002.
