# docs/arxiv-program/research/2026-09-21/arxiv-deep/1011-ood-reject-option-double-score.md

## What it is (1-2 sentences)
Ledger deep-read of Franc, Prusa & Paplham (2023), arXiv:2307.05199 — derives the optimal prediction strategy for OOD setups (test = mixture of ID and OOD) and shows a simple double-score method combining two uncertainty scores beats SOTA single-score OOD detectors. Verdict in file: ADAPT — gives GSE a principled two-headed no-bet score ("is this game weird?" × "would we be wrong anyway?").

## Key metrics/methods (formulas where given, else "not specified")
- Test mixture: p(x,ȳ) = p_O(x)·π for ȳ=∅ (OOD), p_I(x,ȳ)·(1−π) for ȳ∈Y (Eq. 1).
- Main theorem: cost-based, bounded TPR-FPR, and bounded precision-recall reject models all share the same optimal strategy class — a Bayes ID classifier plus a selective function that is a **linear combination of the conditional risk r(x) and the likelihood ratio p_O(x)/p_I(x)** of OOD vs ID.
- Practical method: double-score — combine one score good at OOD/ID discrimination with one score good at misclassification detection (instances tested: KNN+MSP and VIM+MSP; MSP = asymptotically best misclassification detector; KNN/VIM = best OOD discriminators by AUROC).
- New metrics proposed: selective risk at guaranteed TPR/FPR; paper shows AUROC and OSCR often rank methods in reverse order (inconsistent evaluation).
- 0/1 loss; target TPR fixed at 0.8; FPR set per-database to max attained by any method.

## Data sources named
- OpenOOD benchmark; ID: MNIST and CIFAR-10; three OOD datasets each (OOD fraction π>0.5, unrealistically high — π-independent metrics used). Evaluation data and OODD implementations from OpenOOD (public). No new code URL stated.

## Findings (numbers and facts, not vibes)
- CIFAR-10 as ID, three OOD datasets (selective risk / AUROC / OSCR per column): MSP: 0.00984/0.861/0.973, 0.00984/0.885/0.971, 0.00984/0.905/0.971; KNN: 0.00665/0.896/0.974, 0.00665/0.914/0.972, 0.00665/0.916/0.973; VIM: 0.01232/0.872/0.972, 0.01232/0.888/0.971, 0.01236/0.873/0.974; KNN+MSP: 0.00652/0.896/0.977, 0.00652/0.914/0.976, 0.00652/0.916/0.976; VIM+MSP: 0.00676/0.879/0.977, 0.00676/0.894/0.976, 0.00676/0.900/0.976. [TRUST-SIGNAL: double-score consistently best in ALL metrics]
- Double-score consistently best in all metrics; single-score leaders differ by metric (AUROC vs OSCR rankings reversed). MNIST table shows the same pattern. [TRUST-SIGNAL: metric critique transfers — evaluating the no-bet layer on hit-rate alone vs coverage alone can reverse rankings]
- Limitations: theory assumes known p_I, p_O — learning the selective function is out of scope; benchmark OOD fractions (π>0.5) unrealistic; double-score gains consistent but small in absolute terms (selective risk 0.00665 → 0.00652).
- Numeric gate in file: ADOPT iff double-score gate cuts selective risk by ≥25% relative to the better single-score gate at the same coverage (±2 pp) on 2024 time-ordered data.
- GSE's concrete OOD games named: rookie-QB first starts, extreme weather games, international/travel games, mid-week coaching changes, games with anomalous line movement. [COACHING: mid-week coaching changes as a named OOD trigger; QB-BEHAVIOR: rookie-QB first starts]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Double-score no-bet rule (a·P(engine wrong|x) + b·OOD-score(x) > τ): TRUST-SIGNAL — principled pick-withholding layer with the optimal linear form; evaluate on selective risk at guaranteed coverage, not hit-rate or coverage alone.
- Rookie-QB first starts as OOD trigger: QB-BEHAVIOR — novel-signal games the engine has thin support for.
- Mid-week coaching changes as OOD trigger: COACHING — regime-change games belong in the no-bet candidate set.
- AUROC vs OSCR ranking reversal: TRUST-SIGNAL — metric discipline for the no-bet layer.
- Direct extension of 1008 (CARL) OOD angle with the optimal form: OTHER (cross-ledger linkage, gap #4).

## Engine-actionable? (yes/no + one-line what)
Yes — build the double-score no-bet gate: score_A = calibrated P(engine's pick is wrong | features) from a meta-model on past engine errors; score_B = OOD discriminator (Mahalanobis/kNN distance of game feature vector from training distribution, or isolation-forest score); no-bet if a·score_A + b·score_B > τ with (a, b, τ) tuned on 2024 time-ordered data; learn (a,b) by direct optimization of selective risk at target coverage (2–3 days effort).
