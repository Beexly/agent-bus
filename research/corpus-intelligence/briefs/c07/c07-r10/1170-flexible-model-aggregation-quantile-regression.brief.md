# arxiv-program/research/2026-09-21/arxiv-deep/1170-flexible-model-aggregation-quantile-regression.md
## What it is (1-2 sentences)
"Flexible Model Aggregation for Quantile Regression" (Fakoor, Kim, Mueller, Smola, Tibshirani 2023, JMLR 24, arXiv:2103.00083) is a framework for ensembling any number of conditional quantile models via learnable weights at coarse/medium/fine × global/local granularity, with guaranteed non-crossing isotonization and conformal calibration. Ledger verdict: ADAPT — the medium-resolution aggregation, post-sort isotonization guarantee, and nested CV+ conformalization map to GSE's interval pipeline (and to repairing a known cqr.ts coverage bug).
## Key metrics/methods (formulas where given, else "not specified")
- Weighted ensembles ĝ_w(x) = Σ_j w_j(x)·ĝ_j(x); coarse = one weight per model, medium = w_{jτ} per model × quantile level, fine = w_{jτ,ν} per model × level × input level; global (constant, softmax-parametrized SGD on pinball loss) vs local (NN mixture-of-experts w^τ(x) = SoftMax(W^τ f_θ(x))).
- Pinball loss ψ_τ(Z−q); WIS = 2Σ_τ ψ_τ(Y−F^{−1}(τ)); optimizing pinball ≡ optimizing WIS.
- Non-crossing: crossing penalty ρ(g) = ΣΣ (g(x;τ) − g(x;τ') + δ_{τ,τ'})_+; isotonization operators Sort, PAVA, min-max sweep — usable post hoc or as differentiable layers.
- Prop. 2 (new): post-sort/post-PAVA never worsens summed pinball/WIS (strict if sorting nontrivial).
- Conformal: CQR (finite-sample coverage ≥ 1−α) and CV+ (guarantee ≥ 1−2α − √(2/n)); nested CV+ scheme halves base-model refits via ĝ_j^{−k,ℓ} = ĝ_j^{−ℓ,k} symmetry.
- Code: https://github.com/amazon-research/quantile-aggregation.
## Data sources named
34 datasets: 8 UCI ML Repository + 26 AutoML Benchmark for Regression (OpenML); 5 random 72/18/10 splits each; m=99 quantile levels; p=6 base models (CGN, SQR, DQR, quantile RandomForest, ExtraTrees, LightGBM); metric WIS on out-of-sample predictions.
## Findings (numbers and facts, not vibes)
- DQA (local-fine, CrossPenalty+PostSort): best average relative WIS across all 34 datasets; QRA/FQRA runners-up, up to 50% worse (relative factor 1.5) on some datasets, never beat DQA.
- Flexibility trend: local > global and fine > medium > coarse, especially at higher signal-to-noise.
- Isotonization gains are second-order (relative WIS ~0.90–1.10) vs first-order aggregation gains; PostSort/PostPAVA never hurt WIS on any dataset (PostMinMax hurts on a few).
- Conformalized DQA (nominal 0.8): ≥0.8 coverage on every individual dataset; interval inflation never more than 75% (factor 1.75), typically 0–30%; the only method robust to base-model miscalibration.
- Conformal guarantees are marginal, not conditional on x; CV+ guarantee weaker (1−2α) than split CQR (1−α).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Interval pipeline: post-sort isotonization is ADOPT-ready for GSE's quantile outputs (props/totals intervals) — guaranteed non-crossing with no WIS downside (OTHER — interval/projection pipeline).
- TRUST-SIGNAL: the paper's CQR/CV+ treatment is the reference for repairing GSE's cqr.ts coverage-certification bug (clamping rank to n−1, falsely certifying 90% coverage at 83.33%) — a calibration-trust fix.
## Engine-actionable? (yes/no + one-line what)
Yes — apply post-sort isotonization to GSE's quantile vectors immediately (Prop. 2 guarantees no WIS downside), and adapt medium aggregation (per-model × per-quantile weights via pinball SGD on OOF predictions) for tail-vs-center model specialization, gated on ≥3% WIS improvement on 2025 data.
