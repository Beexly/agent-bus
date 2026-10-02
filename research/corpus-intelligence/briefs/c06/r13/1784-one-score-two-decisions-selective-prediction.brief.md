# arxiv-program/research/2026-09-21/arxiv-deep/1784-one-score-two-decisions-selective-prediction.md
## What it is (1-2 sentences)
Selective prediction on ranked outputs (arXiv:2608.14683): two results — a **feasibility ceiling** showing many selective-accuracy targets are arithmetically impossible given base accuracy p and coverage c, and a **score decomposition** showing the top-two margin reads "which candidate is correct" while the top score reads "is any answer present" (and which signal gates better is unidentifiable from unlabeled scores). Adjudicated ADAPT — the feasibility check is a mandatory pre-gate and margin-over-top-score is the most actionable gating change.
## Key metrics/methods (formulas where given, else "not specified")
- Feasibility ceiling (Eq. 2, §5.2): selective accuracy ≤ min(1, p/c), where p = base accuracy, c = coverage; recalibration/rescoring cannot beat it.
- Score decomposition (Eq. 3): s_i(x) = a(x) + r_i(x) — shared case-level term + candidate-specific residual; the top-two margin s_1 − s_2 = r_1 − r_2 cancels a(x).
- Eq. (5): no zero-sum contrast over candidates can recover the discarded case-level information.
- Proposition 1 (unidentifiability): two joint laws with identical unlabeled score distributions and identical base accuracy, but margin-vs-top-score gains of opposite sign (+1/2 vs −1/2) — the better gate needs labeled data or an intervention.
## Data sources named
Phenopacket Store v0.1.27: 10,374 real patient cases with confirmed OMIM diagnoses; 780 distinct diagnoses; retriever ranks all 8,553 candidates per case; eight small open-weight LLMs + phenotype-only Exomiser; auxiliary confirmation on SciFact retrieval and biomedical entity linking.
## Findings (numbers and facts, not vibes)
- Across 2,000 prevalence-stratified records, eight small LLMs achieve at most 4.6% Recall@1 on ultra-rare diseases — so at 10% coverage even perfect confidence ranking can't reach 50% selective accuracy (ceiling min(1, 0.046/0.10) = 46%).
- Exomiser: top-two margin selects 10% of cases at 29.0% accuracy vs 13.3% overall; the top score provides no reliable gate. SciFact + entity linking confirm the split.
- Prop. 1's construction: margin selects perfectly under P_+, top score selects perfectly under P_−, identical unlabeled scores.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (TRUST-SIGNAL) Gate the card on the margin (model-implied prob minus market-implied prob — edge over the alternative), not raw model confidence; the margin cancels game-level "everybody's uncertain" effects (weather, backup-QB news) that inflate/deflate all probabilities together.
- (OTHER) Feasibility gate: compute min(1, p/c) before any gating project — no threshold tuning beats arithmetic.
## Engine-actionable? (yes/no + one-line what)
Yes — (a) run the feasibility ceiling check on every card-sizing target, and (b) test margin gating vs top-score gating at fixed coverage on walk-forward seasons; adopt margin if it wins ≥2 points of selective hit-rate (per Prop. 1 the win must be proven empirically, not assumed).
