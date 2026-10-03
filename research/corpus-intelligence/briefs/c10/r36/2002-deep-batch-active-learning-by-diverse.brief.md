# arxiv-program/research/2026-09-21/arxiv-deep/2002-deep-batch-active-learning-by-diverse.md
## What it is (1-2 sentences)
Deep read of BADGE (arXiv:1906.03671): a hyperparameter-free batch active-learning rule that blends uncertainty and diversity by running k-means++ seeding over hallucinated last-layer gradient embeddings. Verdict in file: ADAPT — directly adaptable to GSE's budgeted charting/game-selection problem, but built for classification, so needs a regression adaptation for spread/total targets.
## Key metrics/methods (formulas where given, else "not specified")
Method: seed labeled set with M=100 random examples; per round compute hallucinated label ŷ(x)=argmaxᵢ f(x;θₜ)ᵢ, gradient embedding gₓ = ∂ℓ_CE(f(x;θ),ŷ)/∂θ_out (final layer only), select batch via k-means++ on {gₓ} (favors high magnitude = uncertainty, non-redundant directions = diversity), retrain from scratch each round. Key equations: block decomposition (gₓ)ᵢ = (pᵢ − I(ŷ=i)) · z(x;V); Proposition 1: ‖gₓʸ‖² = (Σᵢ pᵢ² + 1 − 2p_y) ‖z(x;V)‖², so ŷ = argmin_y ‖gₓʸ‖ — the hallucinated-gradient norm is a lower bound on the true-label gradient norm. Pairwise comparison t-statistic: t = √5 μ̂/σ̂; algorithm i beats j iff t > 2.776 (two-sided, p=0.05). Aggregation: pairwise penalty matrix + CDF of normalized errors neᵢ = ēᵢ/ē_rand.
## Data sources named
SVHN, CIFAR10, MNIST (MLP only), four OpenML non-image datasets (#6, #155, #156, #184; ≥10,000 samples each; NNs significantly beat linear models). 231 total experiments = 7 algorithms × 33 (dataset, batch, architecture) combos. Baselines (libact): Coreset (FF k-center), Conf, Marg, Entropy, ALBL, Rand.
## Findings (numbers and facts, not vibes)
- BADGE has the best overall performance across all 231 experiments (penalty matrix Figure 4; normalized-error CDF Figure 5 dominates).
- Small batch (100, 1000) or MLP: BADGE and Marg best. Large batch (10000): Marg degrades; BADGE, ALBL, Coreset best.
- k-means++ vs k-DPP sampling: statistical performance "nearly perfectly overlaps" (Figure 1, 5 repeats) with large runtime advantage for k-means++.
- Figure 2: k-means++ on gradient embeddings yields higher log-det Gram determinant (diversity) AND higher average gradient magnitude (uncertainty) than FF-k-center and even than k-DPP itself.
- Early rounds favor diversity sampling, later rounds favor uncertainty sampling (Figure 3a); BADGE matches whichever is winning — the "good choice regardless of labeling budget" result.
- Coreset often performs worse than random on complex non-image data with MLP (diversity on meaningless penultimate representations is deleterious); uncertainty-only methods fail at large batch sizes by selecting near-identical batches.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- BADGE as budgeted charting/game acquisition rule (which games/plays to chart or buy next under weekly charting-labor budget) → OTHER (new capability: no active-learning machinery exists in the corpus; complements FTN charting catalog which tells what exists, BADGE tells what to acquire next)
- Binary pick heads (P(home cover), P(over)) are classification, so Prop. 1's hallucinated-label structure applies directly; spread/total regression needs expected-gradient (Fisher-style) adaptation → OTHER (implementation note)
- Early-diversity / late-uncertainty regime flip → OTHER (acquisition scheduling: diversity-weight early in season, uncertainty-weight later)
- No cost-awareness in paper (every query costs the same); GSE's charting/data costs vary per game/source → TRUST-SIGNAL (caveat: rule must be cost-extended for real budgeting)
## Engine-actionable? (yes/no + one-line what)
yes — Weekly acquisition: score unlabeled game/play pool with current model, compute final-layer gradient embeddings on hallucinated labels, k-means++ sample the charting batch; ADOPT gate: 20% BADGE-acquired budget achieves held-out log-loss within 0.005 of random-acquired 40% budget on two consecutive simulated seasons.
