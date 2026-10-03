# vendor/Sports/docs/arxiv-program/research/2026-09-21/arxiv-deep/1854-smartfeat-efficient-feature-construction-foundation-models.md

## What it is (1-2 sentences)
SMARTFEAT (Lin, Ding, Jagadish, Zhou; arXiv:2309.07856) is a two-stage LLM feature-engineering system: a GPT-4 operator selector picks transformations from an operator library at the feature level (so API cost scales with features, not rows), and a GPT-3.5 function generator turns selections into executable pandas code, with proposal vs sampling prompting strategies chosen by search-space richness.

## Key metrics/methods (formulas where given, else "not specified")
- No equations beyond sampling/proposal formulations: proposal strategy — candidates ∼ propose(· | descr, y, model), FM lists all plausible operators with confidence {certain/high/medium/low}, keep certain/high; sampling strategy — i.i.d. ∼ p(descr, y, model) via chain-of-thought until budget 10 or error threshold hit.
- Operator types: unary (normalization, bucketization, get_dummies, date splitting), binary (+, −, ×, ÷), high-order (groupby aggregations: mean/max/etc. over categorical columns), extractor (weighted indices, external-source lookups like city population density).
- Pipeline order: unary via proposal on each original feature → binary + high-order via sampling on original+unary features → extractors via sampling.
- Verification: drop highly-null, single-valued, or high-cardinality-dummy features; drop heuristic (remove unary-transformed originals used by no other operator). New features appended to the "data agenda" so later iterations compose on them.
- Assumptions: dataset description carries enough semantics for operator selection; FM open-world knowledge trustworthy for external sources (authors flag error risk); proposal efficient for small spaces, sampling for rich spaces.

## Data sources named
8 Kaggle binary-classification datasets: Diabetes (769×9), Heart (3,657, 7 cat/7 num), Bank (41,189, 8/10), Adult (30,163, 8/6), Housing (20,641, 1/8), Lawschool (4,591, 5/7), West Nile Virus (10,507, 3/8), Tennis (944, 0/12 — sports). Six downstream models (LR, GaussianNB, RF, Extra Trees, DNN 2×100 ReLU, defaults). Metric AUC; protocol 75/25 train/test, 10-fold CV, 60-min timeout. Baselines: Featuretools/DSM, AutoFeat, CAAFE (GPT-4, 10 iterations). Repo: github.com/niceIrene/SMARTFEAT.

## Findings (numbers and facts, not vibes)
- Average AUC (Table 4): SMARTFEAT wins 5/8 datasets. Adult 76.81 → 87.00 (+13.3%); Tennis 77.93 → 87.39 (+9.5%); Heart 67.38 → 72.15 (+7.0%); Housing 86.72 → 92.19 (+6.3%); Diabetes 82.20 → 86.76 (+4.3%); West Nile Virus 78.96 → 82.12 (+4.0%). Bank ≈ unchanged; Lawschool −0.4% (well-constructed original features — honest null). [OTHER]
- Median AUC (Table 5): same pattern; Tennis median 80.41 → 88.06 (+9.5%). [OTHER]
- CAAFE beats SMARTFEAT on Tennis (avg +13.6% vs +9.5%) — numerical-combination tasks favor CAAFE's free-form code gen; SMARTFEAT wins where diverse operator types matter (West Nile Virus). [OTHER]
- Featuretools and AutoFeat frequently hurt AUC (AutoFeat −10.5% on Housing, −15.6% median on Tennis) — context-agnostic enumeration is actively harmful. [OTHER]
- Tennis feature-importance (Table 6): SMARTFEAT generated 25 features, IG@10 90%, RFE@10 80%, FI@10 80% (80–90% of generated features land in top-10 by IG/RFE/tree importance; vs AutoFeat 1,978 generated/5 selected, 10%). Tennis ablation: binary and extractor operators contribute most of the gain. [OTHER]
- Feature-description ablation (Tennis, names only, no descriptions): AUC dropped to 77.86 (−1.4%) average, 79.39 (+2.2%) median — descriptions matter most when names are uninformative (e.g., "FSW.1"). [OTHER]
- Per-model AUCs flat for LR on Tennis (88.17→88.53 across methods) — LR gains nothing from FE there. [OTHER]
- Efficiency: SMARTFEAT and Featuretools finish under 10 min on all datasets; AutoFeat exceeds 60-min timeout; CAAFE times out on DNN for the three large datasets. [OTHER]
- Leakage cautions: extractor's external-source path has no timestamp guard — external lookups can leak post-outcome info; no temporal/lookahead discipline (tabular-classification only); CAAFE's Diabetes divide-by-zero NaN crash is a cautionary tale — generated code needs sandboxed validation. [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Tennis +9.5% AUC on a sports dataset is the closest sports-domain validation of FM feature engineering in this wave → OTHER: green light to trial the architecture on NFL panels.
- Extractor operator (external data: weather-API wind chill, injury-report counts) → OTHER: analog of ELATE's open-world knowledge, but every external lookup needs a pre-prediction timestamp check.
- High-order groupby operators = rolling team-strength features GSE needs; Tennis ablation says prioritize binary interaction + extractor features over unary transforms for sports → OTHER.
- Proposal (certain/high confidence) vs sampling (budget 10) split → OTHER: cost-controlled LLM pipeline knob; confidence-calibration study (FM stated confidence vs realized log-loss lift) converts the heuristic into a measured cost dial.
- Proposal for unary on a fixed column list; sampling for open-ended groupby/market-interaction search → OTHER: concrete mapping to GSE's pipeline.
- Feature-level (not row-level) interaction design → OTHER: cost scales with features, not rows — production-relevant for GSE's wide game panels.
- Leakage discipline gap → TRUST-SIGNAL: groupby aggregations restricted to past rows (walk-forward); external sources must predate the prediction point.

## Engine-actionable? (yes/no + one-line what)
yes — Port the two-stage operator-selector/function-generator architecture (feature-level FM interaction, proposal for unary / sampling-budget-10 for binary+high-order+extractor) to the NFL cover-prediction panel, gated on ≥0.003 held-out 2025 log-loss lift vs raw features with ≤30 generated features and AST+timestamp-verified causality.
