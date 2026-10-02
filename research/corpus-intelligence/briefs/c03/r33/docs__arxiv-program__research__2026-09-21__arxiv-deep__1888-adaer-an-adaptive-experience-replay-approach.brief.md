# docs/arxiv-program/research/2026-09-21/arxiv-deep/1888-adaer-an-adaptive-experience-replay-approach.md
## What it is (1-2 sentences)
Deep read of arXiv:2308.03810v2, AdaER: an adaptive experience replay method for continual learning that (1) selects replay examples by interference score from a virtual one-step-ahead classifier (C-CMR) and (2) maintains a class-entropy-balanced buffer with importance-aware eviction (E-BRS). Ledger verdict: ADAPT — the vision benchmarks don't transfer, but the two buffer mechanics transfer directly to GSE's weekly model refit pipeline.
## Key metrics/methods (formulas where given, else "not specified")
- C-CMR (replay stage): virtual classifier θ′ = θ − α∇_θ l(f_θ; B_t) — one SGD step on the new batch without replay (Eq. 3); interference score s(m) = l(f_θ′(x_m),y_m) − l(f_θ(x_m),y_m), s∈R^{M×1}; higher s(m) = more forgotten by new batch (Eq. 4). Top-p → example-interfered buffer R_e; then task-level transfer/interference analysis builds task-associated buffer R_t; replay R = R_e ∪ R_t.
- E-BRS (update stage): entropy-balanced reservoir sampling — per-class counts balanced (uniform class distribution as cheap proxy for entropy maximization); on eviction remove the *least important* example by the C-CMR score, protecting the most-forgotten examples.
- Metrics from result matrix R∈R^{T×T} (R_{i,j} = accuracy on task j after learning task i): Acc, Forget, backward transfer Bwt, forward transfer Fwt = (1/(T−1))·Σ_{i=1}^{T−1}(R_{i,i} − b̄_i).
- Protocol: class-incremental, single pass per incoming batch, batch sizes |B_t|=|R|=20, memory M=100 (ablated 50–200), SGD; MNIST/FMNIST on 2-layer MLP (400 hidden), CIFAR on ResNet-18. Baselines: Online SGD, Joint training, oEWC, SI, GEM, AGEM, iCaRL, ER, MIR, GSS, HAL.
## Data sources named
Split-MNIST, Split-FMNIST (5 tasks × 2 classes), Split-CIFAR10 (5 tasks × 2 classes), Split-CIFAR100 (long-sequence test). No code URL stated; benchmarks are standard public splits.
## Findings (numbers and facts, not vibes)
- Split-MNIST: AdaER 89.6% accuracy (+3.7% over ER); Split-FMNIST: 74.0% (+6.3% over ER); best overall on every metric vs all 9 baselines (Table II, paper's claim).
- Split-CIFAR10: backward transfer +4.4 for AdaER vs −19.9 for ER (positive backward transfer = later tasks help earlier ones); forgetting 18.0, 28.0% lower than MIR.
- Forward transfer on Split-FMNIST: −6.78, 69.5% higher than GSS (paper's phrasing) — still negative.
- Memory robustness: growing M from 50→200 lifts GEM accuracy by 49.9% but AdaER by only 2.5% — far less buffer-size-sensitive.
- GEM collapses on CIFAR10 (limited scalability of gradient-projection methods); GSS ≈ MIR on accuracy but worse on backward transfer.
- Reader caveats: single-pass regime is artificial for NFL; R_t half needs task IDs (no direct NFL analog, likely droppable); forced class balance can distort calibration; no statistical significance / seed counts reported.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Interference-scored replay selection (replay games most "damaged" by the new week, e.g. a scheme-change week breaking old defensive-matchup patterns): COACHING (scheme-change / matchup-regime detection) and OTHER (weekly refit training-set design).
- Stratum-balanced buffer (spread band × season-half, protecting underdog wins and early-season games from recency flush): TRUST-SIGNAL (calibration stability of the weekly refit) and OTHER.
- Free byproduct idea: forward-looking interference scored against the upcoming slate's matchups rather than the past week: OTHER (INFERENCE in reader's improvement experiment).
## Engine-actionable? (yes/no + one-line what)
Yes — implement as GSE's weekly refit policy P3: reader's gradient-free variant, s(m) = loss(challenger) − loss(champion) per game via one cheap LightGBM fit on the new week only; strata = spread band × season-half; protect high-s(m) games from eviction; O(buffer) LightGBM predictions = seconds, ~1–2 days effort; acceptance gate on 2020–2025 walk-forward: P3 beats plain replay P2 on ≥3 of 4 metrics (final Brier, worst-4-week Brier, anytime Brier, early-season forgetting) with worst-4-week Brier improving ≥0.002, no metric degrading >0.001 vs P2, and no ECE increase >0.005 from the balancing half.
