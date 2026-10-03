# arxiv-program/research/2026-09-21/arxiv-deep/1908-few-shot-learning-meta-metric-learners.md

## What it is (1-2 sentences)
Ledger digest of Cheng et al. (2019) "Few-shot Learning with Meta Metric Learners" (arXiv:1901.09890v1). Verdict: ADAPT — an LSTM meta-learner that learns the optimizer for a task-specific Matching Network, plus a two-stage auxiliary-task retrieval procedure (rank historical tasks by cross-accuracy on the target, keep top-s) portable to GSE as a "regime librarian."

## Key metrics/methods (formulas where given, else "not specified")
- Matching-network attention: α(x̂,x_i,θ) = exp(f(x̂)·g(x_i)) / Σ_j exp(f(x̂)·g(x_j)) (Eq. 1); prediction P(y|x̂,S) = Σ_i α(x̂,x_i;θ) y_i — trainable k-NN handling arbitrary class counts.
- LSTM-as-optimizer: c_t ← R((∇ℒ_t, ℒ_t); Θ), θ_t ← c_t, with c_t=θ_t, c̃_{t+1}=−∇ℒ(θ_t), forget gate=1, input gate=learning rate (Eqs. 3–4).
- Auxiliary task retrieval (Sec. 3.2): (1) train per-task matching network M^i on merged task data; (2) score each by cross-accuracy acc_{i→target} on target's combined data; (3) take top-s as D_aux. 1-shot multi-task needs D_aux since meta-test can't supply gradients.
- GSE port: tabular game-feature encoder + Matching Network over support games for win/cover; task pool = historical team-seasons 2015–2025; sanity guard: if max acc_{i→target} below chance margin, fall back to league-average prior.

## Data sources named
Sentence Classification Service (proprietary, 12 clients/tasks, 10–28 classes/client, 175-task retrieval pool); Omniglot (50 alphabets as tasks, 20 used); Amazon Reviews (25 product categories); GloVe 100-dim text embeddings.

## Findings (numbers and facts, not vibes)
- SCS multi-task 1-shot FCE: Meta Metric-learner 58.13% vs Meta-learner LSTM 56.98% vs Matching FCE (+addl data) 54.24% vs basic 53.59%. 5-shot: 74.54% vs 72.54% vs 70.28%.
- Omniglot 1-shot: 95.79% vs Matching FCE 95.84% (≈tie); 5-shot: 98.83% vs 98.65% vs LSTM 97.22%.
- Amazon Reviews 1-shot: 49.38% vs Matching FCE 47.18% ("outperform the second-best around 2%"); 5-shot: 60.82% vs 54.64% ("improved matching network more than 5%").
- Single-task SCS 2-shot, 3-vs-5 split (meta-train fewer classes than meta-test): 50.56% vs Matching FCE 48.74%; LSTM not applicable. 5-vs-3: 61.27% vs 60.15% (LSTM) vs 59.57% (Matching FCE).
- Paper's own warnings: adding unrelated auxiliary data *decreases* performance; cross-accuracy scores are "usually low but their relative magnitudes could reflect relatedness."
- Adoption gate in ledger: retrieval+meta-metric-learner must beat plain Matching Network by ≥3pp accuracy on new-regime win prediction at K∈{2,4} support games (2023–2025), with random-auxiliary ablation showing no gain. Effort ~2 engineering weeks.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Regime librarian: retrieve top-s most related historical team-seasons for a new regime (rookie QB starts, new HCs) from 2–4 observed games (COACHING, QB-BEHAVIOR)
- Task-specific similarity metrics for win/cover classification instead of one global metric (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — build the retrieval pipeline (per-season matching networks, acc_{i→target} ranking, top-s auxiliary selection) for new-regime team-seasons, with the chance-margin fallback to league-average prior.
