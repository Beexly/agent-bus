# docs/arxiv-program/research/2026-09-21/arxiv-deep/1558-adaweather-adaptive-mixing.md
## What it is (1-2 sentences)
Deep-read ledger entry on Dhanuka et al. (2026, arXiv:2606.02663): AdaWeather — a hybrid ensemble combiner with an offline U-Net trained by CRPS ERM fed as expert N+1 into the novel online VT-MOS aggregator, carrying a logarithmic regret bound against the best static mixture in hindsight. Verdict: ADAPT — the offline->online two-stage design ports to GSE's sub-model combination.

## Key metrics/methods (formulas where given, else "not specified")
- CRPS with unbiased M(M-1) plug-in estimator; VT-MOS maintains a measure mu_t over the whole simplex, update d mu_{t+1}/d mu_t(p) = exp(-eta * CRPS(F_t^{(p)}, y_t)); closed form via explicit CDF (Eqs. 6-8); Monte-Carlo via Dirichlet/Exp(1) draws with variance reduction.
- Theorem 3: Reg_T <= ((b-a)(N-1)/2) * ln T + C vs. best static mixture — logarithmic in T, linear in (N-1) and support length. Lemma 4: quadratic structure L(p) = A'p - 1/2 p'Bp.
- Offline stage: spatio-temporal U-Net trained by CRPS ERM (2019-2022), FiLM conditioning, DoubleConv 32/64/128/256, per-pixel softmax weights with availability mask, AdamW 3e-4, 30 epochs, ~5h on 1x H100, S=50 fair-CRPS loss.
- Oracle benchmark: per-lead best-in-hindsight (BIH) static convex combination via SLSQP simplex optimization — regret measured as gap to this oracle.
- Assumptions: bounded outcomes y in [a,b] (essential); CRPS (b-a)/2-mixable; exact simplex integration (M->infinity).

## Data sources named
N=5 weather ensemble systems for 2m temperature over India 0.25 deg (FourCastNet v3/FGN-style, GenCast, IFS-ENS, named "FEM"), 12h-72h leads; ground truth ERA5 reanalysis 2019-2026; train 2019-2022 / val 2023 / test 2024-2025; 2019 cutoff chosen per base-model training windows (anti-leakage); no public code repo stated.

## Findings (numbers and facts, not vibes)
- Table 1 overall CRPS (lower better): VT-MOS+U-Net 0.503 < VT-MOS+MoWE 0.515 = VT-MOS 0.515 < Vovk-AA 0.537 < U-Net offline 0.541 < MoWE 0.557 < Equal Weight 0.699 < best individual expert FCN3 0.583 (worst IFS-ENS 1.193).
- Gains vs equal weight ~28%; vs best individual expert ~14%; online stage adds ~7% over offline U-Net alone (0.541 -> 0.503); offline stage adds ~2.3% over VT-MOS alone (0.515 -> 0.503).
- Table 3 per-city: VT-MOS+U-Net best in all 10 cities (e.g., Delhi 0.588 vs U-Net 0.644 vs Vovk AA 1.055). Table 4 tail events: hybrid best overall 0.526 and in every bucket (cold 0.717, normal 0.503, hot 0.516). Regret curves grow logarithmically, consistent with Theorem 3.
- Ablations: FCN3 and FGN are the biggest contributors. MC sensitivity: per-step RMSE vs 32,000-sample reference 0.0233 (M=100) -> 0.0133 (M=1000, production choice) -> 0.0108 (M=4000).
- Stated limitations: short train window, N=5, M->infinity analysis ignores Monte-Carlo error, no comparison to simple exponentially-weighted CRPS mixtures, CRPS theory needs bounded support.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: missing architecture in GSE corpus — offline-learned combiner that keeps learning with regret guarantees; the BIH-oracle regret evaluation (gap to best static mixture computable in hindsight) is an evaluation discipline GSE should adopt for every weighting scheme.
- OTHER: pairs with 1548 (WIRED) in the ensemble-combination lane; with 1580 (weather post-processing) — calibrated weather is a candidate sub-model expert in the hybrid.
- OTHER: NFL caveat from file — 17 discrete weekly events give far lower online-stage statistical power than weather, so GSE's offline stage must carry more weight (or pool across seasons with regime handling).

## Engine-actionable? (yes/no + one-line what)
yes — build v1 two-stage combiner (GBM/MLP offline combiner trained on 2020-2023 sub-model forecasts -> outcomes + weekly exponentially-weighted CRPS mixture), evaluate with the paper's exact discipline: CRPS + cumulative regret vs season BIH static mixture (SLSQP); adopt if hybrid beats both ablations by >=2% and regret stays logarithmic.
