# arxiv-program/research/2026-09-21/arxiv-deep/1989-fairer-and-more-accurate-tabular-models-through-nas.md
## What it is (1-2 sentences)
Fairer and More Accurate Tabular Models Through NAS (arXiv:2310.12145): multi-objective NAS+HPO over tabular architectures (MLP, ResNet, FT-Transformer, built on the rtdl package) jointly optimizing balanced accuracy + a fairness metric via weighted mean-aggregation and ParEGO. GSE re-targets it: swap the fairness objective for calibration (ECE) to get an accuracy-vs-calibration Pareto search over tabular architectures.

## Key metrics/methods (formulas where given, else "not specified")
- Search spaces: MLP (875 architectural combos: layers × widths), ResNet (350 combos), FT-Transformer (324 combos: attention blocks × heads × hidden dims) + continuous training HPs (learning rate, weight decay, batch size, dropout)
- Two multi-objective strategies: weighted mean-aggregation (scalarization) and ParEGO (multi-objective extension of efficient global optimization), jointly optimizing balanced accuracy + one fairness metric
- No equations stated in extracted text
- Fairness metrics in paper: disparate impact, statistical parity difference, average odds difference, equal opportunity difference; balanced accuracy as accuracy metric
- Baselines: SOTA bias-mitigation (Reweighing, Disparate Impact Remover, Learning Fair Representations + LR) and naive off-the-shelf models (LR, MLP, ResNet, FT-Transformer with defaults); single-objective (accuracy-only) NAS runs

## Data sources named
Diverse tabular datasets with protected attributes (loan approval, medical, housing-type tasks per intro; exact dataset list not extracted from converted text). Search spaces built on the rtdl package (public). Method code link not extracted.

## Findings (numbers and facts, not vibes)
- Quantitative tables not extracted from converted text (figures/tables rendered poorly) — numeric magnitudes unverified from this read.
- Reported claims: (1) "significant variation and tradeoffs in the accuracy and fairness of the model predictions with changes in hyperparameters — certain subspaces of the search landscape are inherently fairer, more accurate, or both"; (2) joint NAS+HPO "consistently Pareto dominate[s] state-of-the-art bias mitigation methods either in fairness, accuracy or both"; (3) "models optimized solely for accuracy with NAS often fail to inherently address fairness concerns."
- Transferred warning: GSE's log-loss-only HPO likely leaves calibration on the table — calibration lane methods (CQR, isotonic, temperature scaling) are all POST-HOC fixes, exactly the "debiasing as post-processing" paradigm this paper argues against. Thesis maps directly: instead of post-hoc calibration fixes, search architectures that are inherently well-calibrated.
- The "NAS" is closer to structured HPO than open-ended architecture search (875/350/324 discrete combos).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: accuracy-vs-calibration Pareto search for the win-probability tabular model — calibration directly prices Kelly stakes, so the accuracy–calibration tradeoff is the business-relevant frontier. Selection rule: pick the Pareto knee; compare against current log-loss champion + post-hoc isotonic.
- OTHER: first multi-objective tabular-NAS paper in the corpus; no multi-objective search exists in GSE (HPO is single-objective log-loss). 3D extension adds inference latency as a third objective (Sunday-morning batch window constraint).

## Engine-actionable? (yes/no + one-line what)
yes — run ParEGO/NSGA-II over MLP/ResNet/FT-Transformer architectures + training HPs with objectives (a) OOF log-loss, (b) OOF ECE on the win-probability model; ADOPT the Pareto-knee config only if it beats log-loss-champion+isotonic on BOTH log-loss (≥0.001) and ECE (≥10% relative) on 2023–2025 holdout — i.e., joint search finds something post-hoc calibration cannot.
