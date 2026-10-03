# arxiv-deep/1492-human-ai-selective-prediction.md
## What it is (1-2 sentences)
Deep read of Bondi et al. (2022), AAAI, arXiv:2112.06751v2 (DeepMind): a human-subject experiment testing how communicating the deferral decision and/or the AI's uncertain prediction affects human accuracy in selective-prediction systems. Verdict in file: ADAPT — adopt the deferral-budget thresholding rule and the deferral-status-only messaging design for GSE's pick-abstention/human-review workflow; the anchoring result is directly actionable.
## Key metrics/methods (formulas where given, else "not specified")
- Selective prediction sp(x;θ) = h(x) if defer(x;θ) else m̂(x); deferral rule defer(x;θ) = 1[m(x)∈[θ1,θ2]].
- Objective: max_θ Accuracy(D;θ) subject to DeferralRate(D;θ) ≤ r (r = human-effort budget); thresholds chosen by brute-force grid over [0,1]²; deferral objective weighted 0.5·sensitivity + 0.5·specificity.
- 2×2×2 within-subject design (198 Prolific participants, 80 deferred images each): messaging conditions NM (neither), DO (deferral-status only), PO (prediction only), BM (both); repeated-measures ANOVA.
- "Conformity" metric: per-image increase in rater-model agreement from NM to PO.
## Data sources named
Snapshot Serengeti camera-trap images (binary: animal present or not; ground truth from multi-rater consensus, mean Cohen's kappa 0.886; individual-vs-consensus accuracy 0.961/0.973). AI: ensemble model filtering blank images (AI-only accuracy 0.972). Aggregated experiment data at https://github.com/deepmind/HAI (selective prediction path).
## Findings (numbers and facts, not vibes)
- Chosen deferral model: r=1% deferral rate (1,297 of ~150k images deferred; model accuracy 0.978 on non-deferred, 0.577 on deferred — genuine complementarity).
- DO 61.9% vs NM 58.4% (p<0.001); deferral-status shown (DO+BM) 60.4% vs not shown (PO+NM) 57.4% (p<0.001); prediction shown 57.8% vs not shown 60.2% (p=0.003) — showing the uncertain prediction HURTS.
- Conformity: +0.08 overall (p<0.0001); 0.116 low-confidence vs 0.045 high-confidence (p=0.014).
- On model-wrong images: PO human accuracy 41.9% (below chance) vs 50.6% in other conditions (p<0.001) — showing wrong predictions makes humans 8.7% worse than no message; on model-correct images showing predictions gains only 5.1%.
- Human–model errors correlated: agreement 69.6% where model correct vs 44.9% where model incorrect (p=0.007); human Likert scores correlate with model scores r=0.27 (p=0.021).
- Authors' caveat: results "not likely to be robust across datasets, human-AI scenarios, or expertise levels"; domain-expert check showed deferral-status help replicated but interactions differed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER:** abstention lane fill — no existing abstention/selective-prediction machinery in GSE; GSE's posted-card workflow has a human-review step (analyst reviews engine output) where this applies directly.
- **TRUST-SIGNAL:** correlated-errors guardrail — require written justification for analyst overrides on abstained picks, since reviewer and engine are weakest in exactly the same cases (agreement 44.9% where model is wrong).
- **OTHER:** deferral-budget r as an explicit, auditable parameter for the daily posted card (max share of matchups withheld) instead of a vibes-based confidence cutoff.
## Engine-actionable? (yes/no + one-line what)
**Yes** — implement deferral-budget thresholding (grid-search θ on backtested scores to trace the accuracy–deferral curve; verify deferred-region accuracy < non-deferred) and surface abstained games in the review interface as "ENGINE ABSTAINS — low confidence" WITHOUT showing the engine's lean (replicate DO vs BM in an internal experiment before making it standing policy).
