# arxiv-program/research/2026-09-21/arxiv-deep/1779-aspest-bridging-gap-between-active-learning.md

## What it is (1-2 sentences)
A ledger note on arXiv:2304.03870 ("ASPEST: Bridging the Gap Between Active Learning and Selective Prediction") — a protocol for spending a small active-learning label budget where a shifted model is most uncertain, then self-training, to restore selective-prediction quality under domain shift. Ledger verdict: **ADAPT** — the right loop shape for GSE's weekly regime-shift problem (new season phases, roster shocks).

## Key metrics/methods (formulas where given, else "not specified")
- Metric: **AUACC** = area under the accuracy–coverage curve (selective-prediction quality across all coverages).
- ASPEST stack: (1) **checkpoint ensemble** — ensemble the source model's training checkpoints for better-calibrated target-domain uncertainty; (2) **active acquisition** — spend the label budget on the **lowest-margin** (smallest top-two probability gap) target examples; (3) **target fine-tuning** — fine-tune on acquired labels; (4) **pseudo-label self-training** — self-train on high-confidence target pseudo-labels. Loop: uncertainty → label a few → adapt → re-estimate uncertainty → select.
- Assumptions: a small number of target labels obtainable on demand (human in the loop); shift is fine-tunable, not extreme; checkpoint ensembling approximates Bayesian uncertainty.
- Label budgets in the low hundreds (headline: budget 100).

## Data sources named
MNIST→SVHN, CIFAR-10→CINIC-10, FMoW (satellite, temporal shift), Amazon Review, DomainNet, Otto. Code: https://github.com/google-research/google-research/tree/master/active_selective_prediction. All vision/NLP benchmarks — GSE analog: game features → pick outcome; the "label budget" becomes analyst deep-review time on the week's most uncertain games.

## Findings (numbers and facts, not vibes)
- MNIST→SVHN, label budget 100: AUACC improves **79.36% → 88.84%** — a **+9.48 point gain** from 100 labels.
- Consistent gains reported across CIFAR-10→CINIC-10, FMoW, Amazon Review, DomainNet, Otto (headline numbers quoted from abstract; details in paper's tables).
- Claimed: the full combination (ensemble + active acquisition + fine-tuning + self-training) beats any subset — "more optimal utilization of humans in the loop."
- Limitations noted: sports labels arrive on a fixed schedule (can't buy next week's labels early), so the loop must be retrospective (deep review of already-played games); pseudo-labels only valid for already-observed target inputs (never train on own pseudo-labels for unplayed games); benchmark shifts are more extreme than week-to-week NFL drift, so the +9.48 gain may not transfer; no cost model for wrong analyst labels.
- Ledger's improvement experiment: make acquisition **market-aware** — prioritize games where ensemble uncertainty is high AND the market line disagrees with the model (the paper acquires purely on model margin; the market is a free second labeler). Test market-aware vs margin-only on AUACC per review-hour.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — Model-ops / calibration methodology: uncertainty-driven weekly refresh protocol, checkpoint-ensemble infrastructure (shared with ledger 1778's snapshots), selective-prediction gating. Not a player, coaching, or scheme finding; no quotes.

## Engine-actionable? (yes/no + one-line what)
Yes — build the weekly ASPEST loop: checkpoint ensemble of the pick model → rank each slate by ensemble margin → spend ~5 games/week analyst deep-review budget on the most uncertain resolved games (gold-standard graded features) → fine-tune + self-train on high-confidence pseudo-labels → re-estimate uncertainty and set the week's gate. Ledger gate: ADOPT if the loop beats the static baseline by ≥ 3 AUACC points on shifted deployment windows within the 5-game review budget; ~2 weeks effort.
