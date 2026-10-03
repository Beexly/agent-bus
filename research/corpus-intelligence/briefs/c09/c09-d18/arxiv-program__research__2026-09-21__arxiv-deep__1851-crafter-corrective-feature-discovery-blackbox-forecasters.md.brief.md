# arxiv-program/research/2026-09-21/arxiv-deep/1851-crafter-corrective-feature-discovery-blackbox-forecasters.md
## What it is (1-2 sentences)
Deep-read note on CRAFTER (arXiv:2608.05207), a post-hoc corrective feature-discovery agent for frozen black-box forecasters: an agent mines interpretable features of the backbone's residual (y − ŷ) via compositional MCTS search plus LLM-proposed features, gated source-blind, feeding a validation-selected corrector. Verdict in file: ADOPT — the headroom characterization tells exactly where residual correction helps vs. where markets are saturated.
## Key metrics/methods (formulas where given, else "not specified")
- Target metric: wMAPE of the horizon total (the deployment-consumed quantity).
- Two generators: (a) compositional MCTS (4-layer conditioned UCB1 tree: family → arity → channels → operator; κ=1.4, R=3 rounds, reward r_proxy = 0.4|ρ| + 0.3·I[accepted] + γ=0.3·(round Δval-wMAPE)); (b) LLM proposing named combos (LLMcombo), binary flags (LLMflag), short code (LLMcode); ~12 LLM queries per 3-round run.
- Source-blind acceptance gate: accept iff |ρ_Spearman(candidate, unexplained validation residual)| > τ=0.05 AND pairwise |ρ| ≤ 0.75 with accepted features AND ≤2 features/family AND ≤10 features/round.
- Corrector selected from {NONE, additive GBDT, multiplicative GBDT} (histogram GB: 200 trees, depth 4, lr 0.1, min_samples_leaf 20); NONE is an asymmetric floor — never ships a corrector worse than doing nothing on validation.
- Correction factor: multiplicative f = clip(ŷ_h/ŷ_h̃... ỹ_h/ŷ_h, 0.3, 3.0), plus an additive-offset option.
- Routing choice: covariates enter only as corrector features, never as backbone inputs — feeding covariates directly to a covariate-capable backbone (Moirai-2.0) can substantially degrade the raw forecast.
- Validation: rolling-origin backtest, three expanding train:val:test splits (6:1:1, 7:1:1, 8:1:1), 3 seeds, 9 runs per cell, 36 cells (6 datasets × 6 backbones); significance via one-sided Wilcoxon signed-rank.
## Data sources named
Six public forecasting datasets: EPF-DE (German day-ahead electricity prices), ROSSMANN, ROHLIK (retail panels), BIZITOBS-L2C (hourly business ops), FAVORITA (store sales), M5 (weekly competition). Six frozen pretrained backbones: Timer, Chronos, Moirai, Toto, Chronos-2, Moirai-2.0. Baselines: tsfresh, CAAFE, LLM-FE, covariate-only corrector (COV), head-only/full finetuning (FT).
## Findings (numbers and facts, not vibes)
- CRAFTER beats tsfresh, CAAFE, LLM-FE at every feature budget K ∈ {5,10,20,50,All}; paired Wilcoxon p<0.01. At K=5 CRAFTER already exceeds the best external system's uncapped budget.
- Mean test-wMAPE lift over RAW: Timer +25.7/+25.8, Chronos +8.5/+11.4, Moirai +27.2/+26.8, Toto +14.8/+16.6, Chronos-2 +6.4/+7.4, Moirai-2 +12.5/+12.8; wins 3–6/6 datasets per backbone.
- Roughly doubles the corrector-only (COV) lift — discovered features add value beyond raw covariates.
- ~74% of selected features are LLM-sourced; survival rates: LLMcombo 68%, LLMflag 41–44%, LLMcode 9% (code almost always pruned); atomic search 58–61%. Atomic UCB search alone moves accuracy by ≈0; adding the LLM is decisive (mean −0.037 wMAPE, better on 28/30 cells).
- K=20 is the practical operating point (K=20/50/All nearly identical); budget amplifies existing gaps — on raw-weak cells mean lift −0.131 at K=20 vs +0.008 on raw-strong cells.
- Saturated cells (M5 rows; BIZITOBS under Chronos/Moirai-2.0): every method collapses onto RAW — headroom condition honest and stated.
- Full-parameter finetuning does not remove the gain; finetuning rarely beats correcting the frozen backbone.
- Transferability: features transferred from an earlier split match target's own features at median relative +0.2%; but 7/30 catastrophic transfers (worse than self by >15%) concentrate on single-series EPF with Moirai.
- Compute: backbones run once on A100/A40 and cache; residual-correction loop on CPU; full single-seed 36-cell sweep ~30 min on warm caches.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — engine architecture: residual-mined correction layer for a frozen pick engine; NONE-floor asymmetric risk posture; headroom-gated deployment (props/totals = structured-residual lanes; mature spread markets may be saturated).
- OTHER — signal routing: route new signals (injuries, weather, market data) to a residual corrector first, not into engine inputs, where they can degrade the raw forecast.
## Engine-actionable? (yes/no + one-line what)
Yes — build a residual store (game_id, engine forecast, actual, residual, pre-kickoff covariates) and a source-blind gated corrector {NONE, additive/multiplicative GBDT} over accepted LLM-named + compositional features, deployed only where residual headroom is measured (acceptance gate: ≥0.003 held-out 2025 NFL log-loss improvement vs both RAW and COV corrector).
