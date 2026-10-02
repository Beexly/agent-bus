# arxiv-program/research/2026-09-21/arxiv-deep/1154-bounded-abstention-multi-horizon-forecasting.md
## What it is (1-2 sentences)
Full-ledger read of arXiv:2602.04714v1 (Stradiotti et al. 2026, KU Leuven/Univ. of Pisa/Univ. of Trento): formalizes bounded abstention for multi-horizon time-series forecasting (minimize selective risk subject to a coverage constraint) and derives optimal selection rules for full, partial, and interval abstention modes. Verdict: ADAPT — not the horizon machinery, but the exact-coverage calibration machinery (Lagrangian γ reward calibrated by binary search on a calibration set with probabilistic mixing on ties), as a principled replacement for fixed pick-posting thresholds.

## Key metrics/methods (formulas where given, else "not specified")
- Selective risk: R(f,g) = E[Σ_{t=T+s}^{T+e} ℓ(y_t,f_t(y))] / φ(g), φ(g) = E[e−s+1].
- Objective: g* = argmin_g R(f,g) s.t. φ(g) ≥ cH (coverage constraint).
- Optimal full-abstention rule (Thm. 1): accept iff Σ_t ρ_t(y) < τ_c, τ_c = c-quantile of summed conditional-risk distribution (randomized tie-break κ).
- Optimal partial rule (Thm. 2): e* = argmin_e [Σ_{t=T+1}^{T+e} ρ_t − γ*e], γ* = λ* + η* (optimal risk + KKT multiplier); accept extra step iff marginal risk < γ*.
- Optimal interval rule (Thm. 3): (s*,e*) = argmin_{s,e} [Σ_{t=s}^{e} ρ_t − γ*(e−s+1)].
- Learning (FAbFor/PAbFor/IntAbFor): two-headed network — one MLP head predicts H steps, other predicts H conditional variances σ̂²_t — trained jointly with β-NLL loss: L = Σ_t s(σ̂^{2β}_t)( log σ̂²_t / 2 + (y_t − f̂_t)² / (2σ̂²_t) ), β = 0.5; s(·) = stop-gradient.
- Coverage enforcement: empirical c-quantile (FAbFor) or binary search for γ̂ bounds with randomized mixing p = (cH − φ̂_{γ̂r})/(φ̂_{γ̂ℓ} − φ̂_{γ̂r}) to hit coverage exactly (eqs. 9–10; App. C Algorithms 1–2).
- Coverage satisfaction: ConSat(ε) = 1{φ̂(ĝ)/H ≥ c − ε}.

## Data sources named
- 24 public time-series datasets (App. D Table 2): 5 real-world (eeg: 38,400 trials×channels, T=40/H=10; covid: 380 UK local-authority series, T=100/H=10; temperature: 832 US locations, T=698/H=30; ERA5: 2,048 grid locations, T=358/H=7) + 19 UCR benchmark datasets (H ∈ [6,50]).
- Min-max normalization; 60/20/20 train/calibration/test; 10 random seeds; 1-layer LSTM (20 hidden) + MLP heads (40 neurons, ReLU); 500 epochs, Adam 0.001.
- Baselines: AdaptiveCF, MQ-RNN (q=0.05), DP-RNN (MC dropout, 100 samples), Accept-cH; 6 coverage levels c ∈ {0.70,…,0.95}.

## Findings (numbers and facts, not vibes)
- FAbFor beats baselines on 22/24 datasets; average selective-risk reduction 14% vs AdaptiveCF/MQ-RNN, 19% vs DP-RNN; wins ~80% of experiments vs the two runners-up.
- Average ranks (lower better): IntAbFor ≈1.54–1.64, PAbFor ≈1.65–1.73, FAbFor ≈2.58–2.79, Accept-cH ≈3.85.
- PAbFor −7% risk vs FAbFor; IntAbFor −2% further vs PAbFor; on ITpower/sonyaiborobot IntAbFor sets s>1 for ~40% of series (uncertainty not always front-loaded).
- Coverage: PAbFor/IntAbFor satisfy ConSat best; all methods meet coverage at tolerance ε ≥ 0.05.
- Theory: Lemma 1 (fractional objective ⇔ linearized parametric N(e)−λ*D(e)); Lemma 2 (e(γ) non-decreasing in γ, so binary search hits coverage); randomized policy handles the continuity assumption.
- Limitations: exchangeability across series is strong (sports games aren't exchangeable); partial/interval machinery has no sports analogue — only full abstention transfers; joint forecaster+variance training context-dependent; novelty (not ambiguity) rejection is future work.
- Improvement experiment in file: adaptive c_w = c_base + α·(mean calibration-set edge) — post more games in high-edge weeks, keeping season-average coverage at c.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: pick-posting gate — exact-coverage calibration layer for GSE weekly picks (fix target coverage c, e.g., post ~half the slate; calibrate τ̂_c as empirical c-quantile of engine edge on rolling calibration window; post games with risk < τ̂_c).
- OTHER: variance-head selection model trained with β-NLL (β=0.5) so abstention scores are learned conditional variances, not hand-built confidence.
- OTHER: acceptance gate — realized coverage within ±0.05 of target c across ≥3 consecutive weeks AND selective ROI ≥ fixed-threshold baseline; REJECT partial/interval machinery.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the exact-coverage calibration layer (quantile/binary-search γ on a rolling calibration window) as post-processing on existing engine scores to hit a target weekly posting coverage exactly, with optional adaptive c_w per slate quality.
