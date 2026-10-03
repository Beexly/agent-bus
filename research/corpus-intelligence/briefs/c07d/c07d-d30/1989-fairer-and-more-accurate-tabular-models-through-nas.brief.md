# arxiv-program/research/2026-09-21/arxiv-deep/1989-fairer-and-more-accurate-tabular-models-through-nas.md
## What it is (1-2 sentences)
Deep read (ledger completed 2026-09-22, lane nas_automl, verdict ADAPT) of Das & Dooley (arXiv:2310.12145), the only true tabular-NAS paper in the pool: multi-objective NAS+HPO over MLP/ResNet/FT-Transformer search spaces jointly optimizing balanced accuracy and fairness, finding that joint optimization Pareto-dominates SOTA bias-mitigation methods and accuracy-only NAS. The GSE adaptation swaps the paper's fairness objective for calibration, yielding an accuracy-vs-calibration Pareto search over tabular architectures for the win-probability model.

## Key metrics/methods (formulas where given, else "not specified")
- Search spaces (built on the rtdl package): MLP (875 architectural combos: layers × widths), ResNet (350 combos), FT-Transformer (324 combos: attention blocks × heads × hidden dims) + continuous training HPs (learning rate, weight decay, batch size, dropout).
- Two multi-objective strategies: weighted mean-aggregation (scalarization) and ParEGO (multi-objective extension of efficient global optimization), jointly optimizing balanced accuracy + one fairness metric.
- Fairness metrics used in the paper: disparate impact, statistical parity difference, average odds difference, equal opportunity difference. Balanced accuracy as the accuracy metric.
- Baselines: SOTA bias-mitigation methods (Reweighing, Disparate Impact Remover, Learning Fair Representations + LR) and naive off-the-shelf models (LR, MLP, ResNet, FT-Transformer with defaults).
- Validation: multi-objective optimization runs per model class per fairness metric; Pareto-front comparison vs bias-mitigation baselines and vs single-objective (accuracy-only) NAS runs.
- No equations stated in extracted text (the reader notes figures/tables rendered poorly from converted text). Assumptions: architecture/HP choices materially affect the secondary objective (not just accuracy); the accuracy–fairness Pareto front is discoverable by black-box multi-objective optimization; rtdl implementations are faithful.

## Data sources named
- Diverse tabular datasets with protected attributes (loan approval, medical, housing-type tasks per intro; exact dataset list not extracted from converted text).
- Code: search spaces built on the rtdl package (public). Method code link not extracted ("not stated in paper" as extracted — verify).
- Cross-referenced corpus items: calibration lane (CQR, isotonic regression, temperature scaling — characterized as POST-HOC fixes, i.e. the "debiasing as post-processing" paradigm the paper argues against).

## Findings (numbers and facts, not vibes)
- Search-space sizes: MLP 875 architectural combos, ResNet 350 combos, FT-Transformer 324 combos.
- Reported claims (quantitative tables not extractable from the converted text; treat numeric magnitudes as unverified from this read): (1) "significant variation and tradeoffs in the accuracy and fairness of the model predictions with changes in hyperparameters — certain subspaces of the search landscape are inherently fairer, more accurate, or both"; (2) joint NAS+HPO "consistently Pareto dominate[s] state-of-the-art bias mitigation methods either in fairness, accuracy or both"; (3) "models optimized solely for accuracy with NAS often fail to inherently address fairness concerns."
- Paper's thesis mapping: post-hoc bias-mitigation = "debiasing as post-processing"; the paper argues for architectures that are inherently fair. The ledger maps this to GSE's calibration lane: CQR, isotonic, temperature scaling are all POST-HOC fixes; the GSE adaptation is to search architectures that are inherently well-calibrated instead.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER — calibration/sizing program] This is the core transfer: the win-probability tabular model's calibration directly prices Kelly stakes, so the GSE implementation spec runs multi-objective NAS+HPO with objectives = (a) log-loss on OOF, (b) ECE (expected calibration error) on OOF, using ParEGO or NSGA-II, selecting the Pareto knee point and comparing against the current log-loss-only champion + post-hoc isotonic. Directly serves the calibration/sizing lane (stake pricing lives downstream of calibration).
- [OTHER — HPO methodology warning] Finding (3) — accuracy-only NAS failing on the secondary objective — transfers as a warning: GSE's log-loss-only HPO likely leaves calibration on the table. UNCERTAIN: the numeric magnitudes are unverified from this read (tables rendered poorly), so the strength of the Pareto-dominance claim rests on the paper's text, not on numbers the reader could verify.
- [OTHER — search-scale realism] The architecture spaces are small and discrete (875/350/324 combos) — the "NAS" is closer to structured HPO than open-ended architecture search. This bounds the engineering claim: the GSE test plans 200 configs across the three architecture families on nflverse game-level tabular data (win-probability target, binary home win, 2015–2025, rolling-origin OOF), evaluated on log-loss + ECE on a 2023–2025 holdout.
- [OTHER — latency-constrained inference] The improvement experiment adds a THIRD objective, inference latency (≤100ms/game for the Sunday-morning batch window), testing whether a latency-constrained Pareto pick sacrifices >0.002 log-loss vs unconstrained. Serves the production/serving lane.

## Engine-actionable? (yes/no + one-line what)
Yes — run a ParEGO/NSGA-II accuracy-vs-calibration (ECE) Pareto search over MLP/ResNet/FT-Transformer spaces for the win-probability tabular model, and ADOPT the knee point only if it beats the log-loss champion + post-hoc isotonic on BOTH log-loss (≥0.001) and ECE (≥10% relative) on the 2023–2025 holdout; REJECT if search exceeds 100 GPU-hours for <0.001 log-loss gain (~1–2 weeks effort, GPU-light since tabular nets are small).
