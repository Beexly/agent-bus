# arxiv-program/research/2026-09-21/arxiv-deep/2052-factorengine-program-level-knowledge-infused.md
## What it is (1-2 sentences)
Research ledger for FactorEngine (arXiv:2603.16365), a program-level knowledge-infused factor mining framework for quantitative investment. It casts factors as Turing-complete code programs with three separations (LLM macro logic revision vs. Bayesian micro parameter tuning; directional vs. hyperparameter search; LLM vs. local compute), plus multi-agent bootstrapping of factor programs from unstructured research reports with explicit leakage control. Ledger verdict: ADAPT — the report-to-program bootstrapping maps directly to GSE's sports-report/text corpus.
## Key metrics/methods (formulas where given, else "not specified")
- Fitness weights α=β=γ=1 (Eq. 2, 4) — unweighted, admittedly arbitrary.
- Predictive metrics: IC/ICIR/RankIC/RankICIR; portfolio metrics: AR/IR/MDD/SR (excess over benchmark).
- Search config: 200 and 400 iterations, one factor per iteration; 2 islands, migration every 7 iterations; init with 5/10 alphas or reports; backbone Gemini-2.5-Pro (ablations on Gemini-2.5-Flash-Lite, GPT-4o).
- Three separations: (1) LLM macro logic revision + Bayesian micro parameter tuning; (2) LLM-guided directional search vs. Bayesian hyperparameter search; (3) LLM calls reserved for logic, everything else local.
- Knowledge-infused bootstrapping: extraction→verification→code-generation pipeline over pre-2017 financial reports only; experience knowledge base learns from failure trajectories.
- Integration: mined factors merged with Alpha-158 into LGBM; top-50 assets held 5 days. Baselines: GPLearn, LGBM, LSTM, Transformer, TRA, AlphaAgent, RD-Agent-Quant, Alpha-158.
## Data sources named
- Qlib full-market data; CSI300/CSI500 evaluation. Train 2008-01–2014-12, validation 2015–2016, test 2017-01–2024-12. OHLCV only.
- Financial research reports published before 2017 (knowledge-infused bootstrapping pool; no test-period overlap).
## Findings (numbers and facts, not vibes)
- CSI300, 400-iteration, FE-report-2 best in all 8 columns: IC 0.0474 (Alpha158 0.0299, AlphaAgent-2 0.0314), ICIR 0.3185, RankIC 0.0475, RankICIR 0.3146, AR 18.99% (Alpha158 8.40%, RD-Agent-2 9.17%), |MDD| 12.61%, IR 1.6001, SR 1.0093.
- CSI500: FE-report-2: IC 0.0536, ICIR 0.4140, AR 8.36%, IR 0.6719, SR 0.2945 (best or near-best).
- FE-report > FE-alpha at both budgets (report knowledge beats hand seeds); FE beats AlphaAgent and RD-Agent (2043/2051-class baselines) on every metric.
- Ablation: Bayesian micro-search → best program score 0.38 vs 0.25 without, steeper improvement trajectory.
- Limitations from file: Gemini-2.5-Pro trained on post-2017 data may smuggle future knowledge (authors acknowledge); only 200/400 iterations; Turing-complete programs risk overfitting more than symbolic forms; no complexity-vs-performance curve shown.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — factor/signal discovery architecture: report-to-program mining pipeline, macro/micro evolution loop, experience knowledge base of failed signal trajectories (feeds the GSE discovery loop, ledgers 2082–2085/2045/2046).
## Engine-actionable? (yes/no + one-line what)
Yes — bootstrap signal mining from GSE's own research corpus + licensed sports-analytics text (pre-season-cutoff publication dates only) into point-in-time-safe executable signal programs, with LLM macro-revision / Bayesian micro-tuning loop and a failure-trajectory experience KB; adopt only if report-seeded mining beats hand-seeded by ≥25% test IR with ≥30% of surviving programs traceable to an extracted report passage.
