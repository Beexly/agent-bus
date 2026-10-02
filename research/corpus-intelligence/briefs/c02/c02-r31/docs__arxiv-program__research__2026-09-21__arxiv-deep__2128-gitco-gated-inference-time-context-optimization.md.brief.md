# docs/arxiv-program/research/2026-09-21/arxiv-deep/2128-gitco-gated-inference-time-context-optimization.md
## What it is (1-2 sentences)
GITCO is a training-free, model-agnostic serving-time wrapper for frozen time-series foundation models (demonstrated on frozen TimesFM 2.5): a binary gate predicts whether intervening on the context helps, and if so a router → probe → critic pipeline identifies the single most harmful context patch and repairs it with a 5-point simple moving average, all at inference time. Verdict in file: ADOPT as a serving-layer safety wrapper around any frozen sports TSFM (backbones 2122–2126) to suppress poisoned context games.

## Key metrics/methods (formulas where given, else "not specified")
- Gate: g(x) ∈ {0,1}; intervene iff P(improvement|x) > τ. Precision 78.0%, recall 57.6%; intervened on 24/53 datasets.
- Router chooses among three probes (ShapeProbe, StatProbe, UniProbe); classification accuracy 33.3%±28.4%, but captured-improvement ratio = 0.899 of oracle gain (flat improvement surface).
- Critic: j* = argmax_j harmfulness(patch_j) (leave-one-patch-out influence proxy).
- Repair: ỹ_{j*} = SMA_5(y_{j*}) (5-point moving average over the harmful patch only).
- Pipeline: Gate → (if intervene) Router → probe → Critic → SMA repair → forecast with repaired context.
- Evaluation metric: MASE vs frozen TimesFM 2.5 baseline.

## Data sources named
- 53 GIFT-Eval datasets, strict K=11 cross-validation protocol (public benchmark).
- TimesFM 2.5 (frozen) as base forecaster (public weights).
- Code: https://github.com/birla-ai-labs/gitco.

## Findings (numbers and facts, not vibes)
- Total MASE improvement: +1.032 summed across 53 datasets vs frozen TimesFM 2.5. [OTHER]
- Mean MASE reduction: 1.95% across all 53 datasets; 4.30% among the 24 intervened datasets. [OTHER]
- Gate precision 78.0%, recall 57.6% — conservative, intervenes selectively. [TRUST-SIGNAL]
- Captured-improvement ratio 0.899 despite router accuracy of only 33.3%±28.4% — routing errors cost little because the improvement surface is flat. [OTHER]
- Limitations stated: single-patch assumption (a backup-QB stretch with 2 anomalous games gets only one repair — multi-patch untested); SMA repair assumes point-anomaly structure and would destroy signal on a genuine regime shift (new coach); gate misses 42.4% of improvable cases (1 − 57.6% recall); MASE-only evaluation with no probabilistic extension; GIFT-Eval is generic, not sports-structured. [SCHEME]
- INFERENCE: the failure mode named in the file (one anomalous game poisoning the context, e.g. a backup-QB or weather game) is the direct analog of anomalous team games in GSE's series.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- One anomalous game poisoning the context (e.g., backup-QB game) degrading forecasts → backup-QB detection as a context-hygiene trigger: QB-BEHAVIOR.
- Regime-shift abstention probe (coaching change flags must force gate abstention — never SMA a coaching change): COACHING.
- Gate precision (78.0%) as the safety metric for a default-on serving wrapper; conservative intervene-selectivity: TRUST-SIGNAL.
- Complements ChronosX (2127): adapters add covariates, GITCO repairs context — serving-layer composition: SCHEME.
- Proposed fourth sports probe — regime-shift detector (coaching/QB change flags) forcing abstention: SCHEME.

## Engine-actionable? (yes/no + one-line what)
yes — Implement Gate→Router→Critic→SMA_5 as a default-on serving wrapper around the frozen sports TSFM, with a hard requirement that a regime-shift abstention probe (coaching/QB change flags) is built before deployment.
