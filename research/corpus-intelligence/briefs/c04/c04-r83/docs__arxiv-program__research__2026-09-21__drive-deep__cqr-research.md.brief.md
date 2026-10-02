# docs/arxiv-program/research/2026-09-21/drive-deep/cqr-research.md
## What it is (1-2 sentences)
A compiled research-brief survey (converted from a Google Drive doc "CQR Research"; docx original 1,414,914 bytes; author unclear, likely a research assistant/AI for Garrett) on conformal prediction / quantile regression / uncertainty quantification — NOT a single paper. It has four parts: A (100 numbered arXiv abstract fragments, 1905.xxxxx–2609.xxxxx), B (a separate deep analysis of an earlier 60-paper batch with full mechanics and formulas), C (detailed coverage of the 100 fragments), D (a raw arXiv listing dump). Note: the file ends abruptly mid-sentence in §3.4; sections referenced as §4 (code) and §8 ("What I Could Not See") are not present in this file.

## Key metrics/methods (formulas where given, else "not specified")
- CQR (Romano, Patterson & Candès 2019, arXiv:1905.03222): (1) train two quantile regressors at α/2 and 1−α/2; (2) calibration scores E_i = max{ q̂_α/2(X_i) − Y_i, Y_i − q̂_{1−α/2}(X_i) }; (3) expand band by the (1−α)(1+1/n)-th empirical quantile of scores. Interval: C(x) = [ q̂_α/2(x) − Q̂_{1−α}(E), q̂_{1−α/2}(x) + Q̂_{1−α}(E) ]. Guarantee: P(Y ∈ C(X)) ≥ 1−α under exchangeability.
- Jackknife+ (Barber, Candès, Ramdas & Tibshirani 2019, arXiv:1905.02928): interval = [ α-th quantile of { μ̂_{−i}(X_{n+1}) − |Y_i − μ̂_{−i}(X_i)| }, (1−α)-th quantile of { μ̂_{−i}(X_{n+1}) + |Y_i − μ̂_{−i}(X_i)| } ]. Guarantee: ≥ 1−2α coverage for any symmetric algorithm, any distribution; original jackknife can have zero/vanishing coverage.
- Nested conformal + QOOB (Gupta, Kuchibhotla & Ramdas 2019, arXiv:1910.10562): nested sets F_t(x) = { y : score(x,y) ≤ t }, calibrates threshold t; QOOB combines quantile regression + cross-conformalization + ensembles + out-of-bag predictions to avoid train/calibration split inefficiency.
- Reweighting (Amoukou & Brunel 2023, arXiv:2303.12695): w_i = ρ(x_i, x_{n+1}) / ( (1/n) ∑_j ρ(x_j, x_{n+1}) ); weighted empirical quantile of nonconformity scores adapts intervals to local difficulty.
- KOWCPI (Lee, Xu & Xie 2024, arXiv:2405.16828): kernel-based, optimally weighted conformal time-series prediction; temporal proximity weighting (recent observations higher weight); conditional coverage theory under strong mixing.
- Missing values (Zaffran, Dieuleveut, Josse & Romano 2023, arXiv:2306.02732): theorem — if data satisfy exchangeability (A1) and imputation satisfies symmetry (A2), imputed variables are exchangeable and the conformal guarantee holds; impute-then-predict+conformalize is marginally valid for any missingness distribution (even MNAR). Caveat: mask-conditional coverage can fail dramatically.
- SEMF (Azizi, Boldi & Chavez-Demoulin 2024, arXiv:2405.18176): EM-style (E-step posterior of latent target, M-step maximize expected complete-data likelihood), VAE-like Monte Carlo sampling; works with XGBoost/MLPs; evaluated on 11 tabular datasets; robustness diminishes with missing data.
- Also named with formulas/claims: TQA (arXiv:2205.09940, post-hoc wrapper preserving cross-sectional coverage, improving longitudinal coverage); LPCI (arXiv:2310.02863); skew-adaptive CP (interval asymmetry from residual skewness); EOC/BFQR (NeurIPS 2023); Colorful Pinball (density-weighted QR, ICML 2026); SPI (synthetic data in calibration when scarce); AS-CQR bolted onto GE-Mamba spatiotemporal model (KDD 2026 AI4S).

## Data sources named
NGSIM (trajectory), German EPEX electricity market 2015–2023, PantheonPlus supernovae, 11 tabular datasets (SEMF), 10 benchmarks (Self-Organized CP), three years of hourly in-situ irrigation measurements, AION-1 (7 UQ methods on galaxy-property regression), DrivAerML, ICON climate model; synthetic designs from Athey & Imbens (2016).

## Findings (numbers and facts, not vibes)
- CQR appears explicitly/implicitly in ≥20 of the 100 surveyed papers — the single most influential method in the batch.
- Forward collision warning (Hu et al., arXiv:2511.19952, NGSIM): inference 73% faster than Transformer methods; ADE 0.73 m, stated as 42.2% better than Social_LSTM; CQR intervals achieved 91.3% coverage at 90% nominal.
- Jackknife+ bake-off: Jumbo-Visma calorie prediction (van Kuijk et al., arXiv:2304.03778) compares jackknife+, jackknife-minmax, jackknife-minmax-after-bootstrap, CV+, CV-minmax, CQR (numeric winner not visible in this file).
- Steel fatigue (Boruah, arXiv:2608.07589): first CP application to steel fatigue; 7 interval methods × 50 independent splits; distinguishes marginal from within-spectrum coverage (numeric outcome not visible).
- Theory guarantees stated: CQR ≥1−α coverage under exchangeability; jackknife+ ≥1−2α; impute-then-predict marginally valid under MNAR; naive split CP longitudinal coverage degrades over time because the calibration set goes stale (repaired by TQA/KOWCPI/LPCI/rolling-origin).
- Theme clusters: energy/electricity-price forecasting (6+ papers), wind power (2), sequential/online CP, federated CP, LLM factuality (CFC, 2603.27403), covariate shift — list cut off when file ends.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: calibrated, distribution-free prediction intervals with finite-sample coverage guarantees are the core trust layer for engine outputs — CQR turns point predictions into honest intervals that adapt to local noise (heteroscedasticity), and the time-series extensions repair coverage drift across a season.
- OTHER: uncertainty-quantification methodology catalog; missing-data handling (impute-then-predict+CP marginal validity under MNAR) for sparse player-game data.

## Engine-actionable? (yes/no + one-line what)
yes — Wrap engine point predictions (fantasy points, margins, totals) in CQR intervals: train quantile regressors at α/2 and 1−α/2 on the projection model, calibrate the expansion quantile on recent weeks, and use rolling/online recalibration (TQA-style) so longitudinal coverage holds as the season drifts; publish the interval, not just the point.
