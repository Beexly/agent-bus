# arxiv-program/research/2026-09-21/arxiv-deep/1775-optimal-strategies-reject-option-classifiers.md
## What it is (1-2 sentences)
The optimal theory of classification with a reject option across three formulations (cost-based, bounded-improvement, bounded-coverage — all sharing one Bayes classifier and differing only in the selection rule, with bounded-coverage needing randomized selection) plus Fisher-consistent recipes for learning an uncertainty score from a fixed black-box predictor, beating native scores empirically.

## Key metrics/methods (formulas where given, else "not specified")
- REG objective (verbatim): `F_REG(θ) = (C/2)‖θ‖² + (1/n) Σ_i (ℓ(y_i, h(x_i)) − s_θ(x_i))²`, `s_θ(x) = ⟨θ, ψ(x)⟩` — ridge regression of realized loss on features.
- SELE objective (verbatim): `F_SELE(θ) = (C/2)‖θ‖² + (1/P) Σ_p ψ_sele(s, T_n^p)` over P chunks — pairwise ranking loss on selective-risk ordering; chunking `P = round(n/500)` avoids O(n²).
- Relative improvement metric (verbatim): `100 × (AuRC_baseline − AuRC_method) / AuRC_baseline`.
- Key theoretical claim: AuRC (area under risk–coverage curve) equals the expected quality of the bounded-coverage model under a uniformly random target coverage — comparing methods by AuRC = comparing expected performance across ALL coverage operating points.
- "Proper" uncertainty score = one preserving the ordering of conditional risk; Bayes selector thresholds it.
- Regularization C selected from {0, 1, 10, 100, 1000} by validation AuRC; 5 random train/test splits; significance via average ranks + Friedman + Nemenyi post-hoc (p = 0.10, critical distance reported).

## Data sources named
- Classification: 11 UCI-style benchmark datasets (named results: PHISHING, SATTELITE, SENSORLESS, SHUTTLE); pre-trained predictors LR, three SVM variants, GBT; baselines MCP (max class probability) for LR, margin score for SVM; TCP (Corbière et al. 2019) as competing learned-score method.
- Ordinal regression: 11 datasets (CALIFORNIA, ABALONE, BANK, CPU, BIKESHARE, CCPP, FACEBOOK, GPU, METRO, MSD, SUPERCONDUCT) with SVOR classifier, MAE loss; baseline margin score.
- Structured output: DLIB face detector/landmark task, n = 3,484 training examples, m = 2,448 learned parameters; baseline = detector's own score.

## Findings (numbers and facts, not vibes)
- Classification on SVM (AuRC, % misclassification, average ranks): REG 1.09, SELE 2.09, baseline 2.82.
- PHISHING: REG 0.72±0.12 vs baseline 6.37±0.44 (an ~8.8× error reduction). SATTELITE: 3.82±0.27 vs 15.36±0.37. SENSORLESS: 1.56±0.08 vs 6.92±0.17. SHUTTLE: 0.24±0.07 vs 2.02±0.15.
- Ordinal regression SVOR (MAE AuRC, average ranks): SELE 1.27, REG 1.73, Margin 3.00; Friedman rejects equivalence at p = 0.05; Nemenyi: SELE and REG both significantly better than Margin at p = 0.10, CD = 0.98.
- MSD: SELE 4.26±0.03 vs Margin 6.23±0.07 (base risk 6.22 — learned score recovers nearly all of it). GPU: 0.85±0.03 vs 1.43±0.02. FACEBOOK: 0.37±0.01 vs 0.51±0.01.
- Structured output (DLIB): both learned scores beat detector's own score; SELE slightly beats REG; gap largest at low coverage (SELE does not assign lowest uncertainty to the worst landmark predictions, the baseline does).
- AuRC improvement consistent across classifiers, tasks, loss functions; learned scores help most where predictor's native score is poor. TCP fails on fully discriminative models (SVMs) because it needs posterior estimates.
- Both learners proved Fisher consistent (recover the proper score when estimation/approximation/optimization error are zero); experiments deliberately violate all three (proof of concept, linear-only, convex small-scale).
- Three reject models induce the SAME Bayes classifier; differ only in selection rule; bounded-coverage needs a randomized Bayes selector (randomized tie-breaking at threshold).
- Limitations: linear scores only, hand-designed ψ features; AuRC averages uniformly over coverages — GSE cares about exact operating points (posted card size), where better AuRC can still lose.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL]: Core mechanism for the pick-gating lane. Current GSE gating is probability-thresholding — exactly the "baseline score from classifier output" this paper beats by large margins (PHISHING 0.72 vs 6.37). The engine-actionable recipe: freeze the pick model h; compute realized loss ℓ per graded pick (0/1 ATS hit or negative units); learn gate score via ridge regression on realized loss (REG) and pairwise SELE loss; select C by validation AuRC; bounded-coverage reading: pick coverage first (exactly the top-K card), threshold the learned score, with randomized tie-breaking at the threshold per the Bayes rule. Serves the trust-target intake program — the gate IS the trust signal.
- [OTHER — CALIBRATION/SIZING]: AuRC = expected quality over uniformly random target coverage; for GSE this means evaluating the gate by AuRC but ALSO hard-gating on the exact operating coverage — the acceptance gate in the file (≥10% relative AuRC gain on walk-forward seasons AND win at exact card size) is the right pattern. The risk function should be units-lost, not 0/1, since sports abstention has priced opportunity cost.
- [OTHER — ENGINE ARCHITECTURE]: The three-model unification says GSE's choice of reject formulation (cost-based vs fixed-card-size coverage) doesn't change the underlying classifier — only the selection rule — which simplifies the gating design space. Serves the gating stack.
- CONTRADICTION-adjacent tension: REG beat SELE on classification (1.09 vs 2.09) but SELE beat REG on ordinal regression (1.27 vs 1.73) and structured output — no universal winner, so GSE must test both on sports data, not pick one.
- Referenced: arXiv:2101.12523; Corbière et al. 2019 (TCP); ledger 0714 (bounded-abstention pairwise LTR); DLIB; SVOR; WEKA-era baselines. Corpus gap flagged: "learning-to-abstain with coverage-risk curves" was unread — this fills it; nothing else in corpus gives GSE a learned gate trained on realized pick loss.

## Engine-actionable? (yes/no + one-line what)
Yes — build GSE-SELE: ridge (REG) and pairwise (SELE) learned gate scores trained on realized pick loss (units variant), coverage-first thresholding with randomized tie-breaks; adopt if AuRC beats probability-threshold baseline by ≥10% relative walk-forward AND wins at the exact posted card size.
