# arxiv-program/research/2026-09-21/arxiv-deep/1884-exponentially-weighted-moving-average-charts.md
## What it is (1-2 sentences)
Deep-read note on arXiv:1212.6018 (Ross, Adams, Tasoulis, Hand, 2012): ECDD, an Exponentially Weighted Moving Average chart adapted into a concept-drift detector for streaming classifiers — O(1), zero stored history, classifier-as-black-box, with a constant controllable false-positive rate via ARL_0. Verdict in file: ADAPT — ideal weekly binary error-stream monitor for GSE's win-probability model.
## Key metrics/methods (formulas where given, else "not specified")
- Reduce classifier output to Bernoulli error stream X_t ∈ {0,1} (1 = misclassified). Fast estimator Z_t = (1−λ)Z_{t−1} + λX_t (λ=0.2 recommended; insensitive in [0.1,0.3]); slow running mean p̂_{0,t} = (t−1)/t·p̂_{0,t−1} + (1/t)X_t (pre-change rate).
- Alarm when Z_t > p̂_{0,t} + L_t·σ_{Z_t}, where σ_{Z_t} = sqrt(p̂_{0,t}(1−p̂_{0,t})·λ/(2−λ)·(1−(1−λ)^{2t})).
- L_t is time-varying, chosen each step from pre-computed degree-7 polynomial lookup tables mapping (p̂_{0,t}, ARL_0) → L_t, fit once offline via Monte Carlo to hold average run length between false positives ARL_0 constant; e.g. ARL_0=1000: L = 1.17 + 7.56p̂_0 − 21.24p̂_0³ + 112.12p̂_0⁵ − 987.23p̂_0⁷ (Table 1 gives ARL_0 = 100, 400, 1000).
- On alarm the classifier is reset and relearned from post-change data; ECDD-WT variant adds a warning-threshold tier (retain recent data instead of full reset).
- Evaluation: accuracy over synthetic streams (10,000 realizations, McNemar tests p<10⁻⁵); ARL_0 regimes 100 and 600 vs Paired Classifier (PC) and SPRT tuned to same target ARL_0.
## Data sources named
Synthetic: GAUSS (bivariate Gaussian class flip at T=50/200) and SINE (y=sin(x) boundary flip), 10,000 realizations each, 100–400 observations per stream. Real: NSW Electricity Market (elec2 benchmark: 45,312 half-hourly points, May 1996–Dec 1998, price-movement classification), colonoscopic imaging dataset. Base classifiers: streaming LDA and 3-NN.
## Findings (numbers and facts, not vibes)
- Synthetic accuracy: LDA alone 0.51–0.52 on Gauss50/200 → LDA-ECDD 0.59–0.71 (ARL_0=600) / 0.63–0.71 (ARL_0=100); SINE: 0.50–0.52 → 0.77–0.90; KNN similar (0.54–0.62 → 0.61–0.92). ECDD ≈ PC ≈ SPRT in all configs.
- Electricity: LDA 0.70 → 0.86 with ECDD (KNN 0.73 → 0.88); best ARL_0=100, degrading only to 0.85/0.87 at ARL_0=1000. Colon: LDA 0.68 → 0.90.
- λ ∈ {0.1,0.2,0.3} changes accuracy by ≤0.02 everywhere — λ=0.2 is a safe default.
- Structural: ARL_0=100 beats 600 when change is early (T=50); 600 beats 100 when change is late (T=200) — matching FP rate to change frequency matters, which is what the ARL_0 knob provides.
- Limitations: binary-only; assumes abrupt drift (gradual drift conceded to ensembles); needs immediate label feedback; blind to drift that doesn't move accuracy (gap filled by PUDD/1882).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — operational engine monitoring: weekly binary correctness stream (1 = model picked the loser) through ECDD with λ=0.2, ARL_0 ≈ 272 games (one false alarm per season on average); alarm ⇒ post-drift refit policy (retrain on trailing post-alarm games); O(1) per game, ~half-day build, ~30 lines of NumPy.
- COACHING — drift alarms flag regime changes that often trace to coaching/QB/system changes; regime-change episode labels pair with 1882's PUDD labels for alarm precision/recall.
## Engine-actionable? (yes/no + one-line what)
Yes — deploy ECDD as the production win-probability drift monitor on nflverse 2020–2025 stream; acceptance: Brier within 0.001 of a 4-week fixed refit schedule, observed false alarms ≤1.5× nominal ARL_0 rate; improvement experiment: feed 1882's PU-index stream (u_i = 1 − P(actual)) into ECDD as a continuous-valued variant for earlier detection.
