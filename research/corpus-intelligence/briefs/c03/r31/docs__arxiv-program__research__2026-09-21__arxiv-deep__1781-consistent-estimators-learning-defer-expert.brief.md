# docs/arxiv-program/research/2026-09-21/arxiv-deep/1781-consistent-estimators-learning-defer-expert.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2006.01862, a learning-to-defer paper giving a convex, Bayes-consistent cost-sensitive generalized cross-entropy surrogate for jointly learning a classifier and a deferral rule that routes each instance to the model or an expert whose errors are instance-dependent. Verdict: ADAPT — the right formalism for routing GSE picks among the engine model, market consensus, and Garrett's own judgment.

## Key metrics/methods (formulas where given, else "not specified")
- System loss: (1 − r(x))·ℓ(h(x), y) + r(x)·ℓ_exp(m, y) — model loss when not deferred, expert loss when deferred.
- Surrogate: cost-sensitive generalized cross-entropy — convex, Bayes-consistent (minimizer = Bayes-optimal classifier-rejector pair); rejector explicitly models P(expert correct | x).
- Assumptions: expert demonstrations (x, y, m) available at training (features, true label, expert prediction); expert's error pattern learnable from triples; deferral cost captured by ℓ_exp.

## Data sources named
CIFAR-10 (50k train / 10k test; reduced WideResNet baseline 90.47%) with synthetic experts (perfect on first k classes, random elsewhere). Hate-speech dataset: 24,783 tweets, 60/10/30 splits × 5, AAE-dialect-biased expert.

## Findings (numbers and facts, not vibes)
- [OTHER] CIFAR-10: system accuracy beats confidence-threshold routing across expert-competence levels; surrogate routes to the expert exactly on the expert's competent classes.
- [OTHER] Hate speech, AAE-biased expert: proposed method 92.91 ± 0.17 vs confidence-threshold baseline 92.42 ± 0.40 vs oracle routing 93.22 ± 0.11 — captures most of the oracle's routing gain.
- [OTHER] Crucially learns NOT to defer the dialect subpopulation the expert is biased against (bias-audit template).
- [OTHER] Synthetic experts are unrealistically clean (perfect-on-k-classes); real experts (Garrett, market consensus) have correlated, structured errors — INFERENCE: translation to sports needs real (x, y, m) triples at scale, a dataset that may not exist yet.
- [OTHER] 0/1 loss must become units P&L; the expert's "prediction" is a price (market line, Garrett's lean), not a class label.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Build a GSE router: log triples (game features x, graded outcome y, Garrett's lean / market-implied pick m) for 1–2 seasons (prerequisite); train classifier-rejector with the consistent surrogate, ℓ in units; deploy as pre-card routing (model-pick / expert-pick / route decision per game). Effort ~3 weeks, dataset logging is the long pole.
- [TRUST-SIGNAL] Reuse the bias-audit protocol: verify the router doesn't systematically route away from an expert on any subpopulation where the expert is actually good (the AAE lesson).
- [OTHER] Improvement: add a third route — abstain (no bet) — extending the surrogate with abstention cost d from ledger 1780's 0-d-1 framing; test three-way vs two-way on risk-adjusted units.
- [OTHER] Gate: ADAPT accepted if router system units beat always-model and confidence-threshold routing on walk-forward seasons + clean per-subpopulation audit; else keep routing heuristic.
## Engine-actionable? (yes/no + one-line what)
Yes — build the (x, y, m) triple dataset (Garrett's graded leans + market lines vs outcomes), then train the consistent deferral router as a pre-card routing step.
