# docs/arxiv-program/research/2026-09-21/arxiv-deep/1127-upselling-in-online-fantasy.md
## What it is (1-2 sentences)
Deep-read of arXiv:2409.00629, "Upselling in Online Fantasy Sports": Dream11 ran an 8-week live experiment (Jan 1–Feb 28, 2024) with four upsell intensity arms (1x, 1.25x, 1.5x, 2x deposit-offer discount multipliers), then fit S/T/X/R CATE learners with XGBoost to derive a per-user offer-assignment policy. Verdict ADAPT — not for the prediction engine, but the multi-treatment experiment design transfers to GSE's pricing/packaging experiments.
## Key metrics/methods (formulas where given, else "not specified")
- Stage 1 supervised comparison (weighted-F1): heuristic 0.736, LightGBM regressor 0.758, LightGBM classifier 0.804, focal-loss classifier 0.852.
- Stage 2: 8-week randomized live experiment, four intensity arms vs control.
- Stage 3: S/T/X/R learners with XGBRegressor, fixed propensity score 0.5, 1,000 Hyperopt trials for hyperparameter search. No formal CATE equations stated in extracted text.
## Data sources named
Proprietary Dream11 transaction dataset: millions of deposit transactions (exact row counts not stated), user cohorts (new vs existing), deposit amounts, completion, treatment arm, timestamps 2024-01-01 to 2024-02-28. Not public, not replicable.
## Findings (numbers and facts, not vibes)
- Upselling raised per-transaction value +5.6%, but the most aggressive 2x arm showed a 4.8% transaction decline; conversion fell ~2.1% overall.
- Offline-derived CATE assignment policy estimated 10.7% revenue uplift; no online A/B validation of the derived policy reported.
- New-user 1x assignment arm: reported 2.1% conversion improvement.
- Limitations flagged: outcome definition shifts between "total deposit" and "deposit completion" across sections; fixed propensity 0.5 is suspect with five policy arms; split protocol for the supervised stage not stated; no confidence intervals.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- ALL: OTHER. No QB, coaching, OL, or scheme content — this is a monetization/pricing experiment design paper for the Kit/pick-pack revenue lane, not the prediction engine.
## Engine-actionable? (yes/no + one-line what)
Yes — adapt the dual-margin experiment template (measure intensive-margin revenue-per-user AND extensive-margin conversion; pre-register the primary outcome to avoid this paper's outcome drift) for GSE Kit/pick-pack pricing experiments; the CATE-assignment half only ships if it replicates in a live A/B.
