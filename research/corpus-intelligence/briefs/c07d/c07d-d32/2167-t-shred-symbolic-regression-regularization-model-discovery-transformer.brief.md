# arxiv-program/research/2026-09-21/arxiv-deep/2167-t-shred-symbolic-regression-regularization-model-discovery-transformer.md
## What it is (1-2 sentences)
arXiv:2506.15881v3 (Yermakov, Zoro, Gao & Kutz, 2026): T-SHRED — transformer-based SHRED (shallow recurrent decoder) with **SINDy-Attention**, embedding symbolic regression *inside* the attention mechanism so each head learns an interpretable coupled ODE for the latent dynamics (interpretability as a training objective, not a post-hoc analysis). Ledger verdict ADAPT: the blueprint for an interpretable neural momentum/forecasting model for the engine (the proposed "GameSHRED").

## Key metrics/methods (formulas where given, else "not specified")
Formulas copied verbatim from the file:
- SINDy latent loss: `Ξ^(i) = argmin ‖z_{t+1} − (z_t + Σ Θ(z_{t+ih})Ξ^(i)h)‖²₂ + ‖Ξ^(i)‖₀` (Eq. 1).
- Standard attention (Eqs. 2–7); CNN decoder `y = σ(Conv₁(σ(Conv₂(z))))` (Eq. 8); attention-as-ODE formulation (Eq. 9, Geshkovski et al. 2024).
- SINDy-Attention: `Q^(h)=xW_{h,q}, K^(h)=xW_{h,k}, V^(h)=xW_{h,v}` (Eq. 10); `T^(h)=rowsoftmax(QKᵀ/√k)V` (Eq. 11); `S^(h)=Θ_SINDy(T^(h)′)Ξ^(h)` (Eq. 12); `S=concat(S^(h))` (Eq. 13); `z=(SW_ff1)W_ff2` (Eq. 14).
- Shallow-water ground truth: `∂u/∂t = −u·∇u − g∇h − ν∇⁴u − 2Ω×u`; `∂h/∂t = −H∇·u − ∇·(hu) − ν∇⁴h + F` (Eqs. 15–16).
- Separation-of-variables motivation `u(x,t)=T(t)X(x)` for SHRED.
- Training: ℓ₂ + pruning on Ξ^(h) every 10 epochs (approximation of the ℓ₀ SINDy loss, Eq. 1 with forward-Euler mini-steps).
- Assumptions: Takens-embedding regime (lag 50 suffices); sensors fixed in space; ℓ₂+pruning ≈ ℓ₀ under regularity conditions.
- Method details: T-SHRED = SHRED with transformer encoder (replacing LSTM) + MLP or CNN decoder. Each head's attention output T^(h) is passed through a SINDy library Θ_SINDy and sparse coefficients Ξ^(h). Also studied: plain SINDy-loss regularization (loss term only, no architectural change) and CNN vs MLP decoders. Interpretability experiment: latent dim shrunk 100 → 6, 2 layers × 2 heads, linear polynomial library (Koopman SINDy-Attention), 200 epochs; each head then readable as a coupled ODE (e.g. SST L₀H₀: `ż₀=−0.699z₀+0.275z₂`).

## Data sources named
- Three dynamical systems, 50 random persistent sensors as input, temporal lag 50, next-step full-state prediction; 80/10/10 time splits.
- Sea Surface Temperature (NOAA): 1,400 weekly snapshots 1992–2019, 180×360 grid (44,219 ocean points), 179 MB, min-max normalized to [0,1].
- Complex plasma physics: 2,000 timesteps × 14 fields of 257×256 points, rSVD-reduced to a 280-dim ROM, 785 MB.
- Rotating shallow water equations (PlanetSWE, from "The Well"): 10 tracks, 15.5 GB total.
- Code: https://github.com/yyexela/T-SHRED. All data public (NOAA; plasma [31]; The Well [44]).

## Findings (numbers and facts, not vibes)
- Experiment 1 scale: 8 encoders (GRU/LSTM/vanilla-transformer/SINDy-loss-transformer/SINDy-attention-transformer/SINDy-attention+loss) × 2 decoders (MLP/CNN) × layers {1–4} × lr {1e-2, 1e-3} = **128 configs per dataset, 5 seeds**, best-by-validation reported as mean±std test loss. Baselines: GRU/LSTM SHRED variants (same protocol).
- **SST:** best overall = 1-layer GRU SHRED + MLP decoder, test loss **1.50×10⁻³** (25.14 MB); best T-SHRED = 1-layer SINDy-Attention + CNN decoder, **1.87×10⁻³** (75.31 MB).
- **Plasma:** best = 3-layer GRU SHRED + MLP, **2.10×10⁻⁴** (0.74 MB); best T-SHRED = SINDy-Attention + CNN, **4.90×10⁻⁴** (1.23 MB).
- **PlanetSWE:** best = 1-layer SINDy-loss GRU SHRED + MLP, **2.49×10⁻³** (151.86 MB); best T-SHRED = SINDy-Attention + CNN, **3.58×10⁻³** (452.52 MB).
- Within T-SHRED, SINDy-Attention (SA-T, SASL-T) beat all other transformer variants on all three datasets; CNN decoders paired best with transformer latents.
- Interpretability run: latent 100→6 cost only ~2× test loss on PlanetSWE (7.76×10⁻³) while model size fell 16× (28.51 MB vs 452.52 MB), and every head emitted a readable 3-variable linear ODE.
- Honest headline (from the ledger's adversarial read): **transformers still lose to GRUs on next-step state prediction on all three datasets** (consistent with prior literature [14, 58]) — the win is interpretability + SINDy-Attention dominance among transformer variants.
- Limitations stated: (a) GRU-SHRED won everywhere — the contribution is the regularization mechanism, not SOTA forecasting; (b) ℓ₂+pruning only approximates ℓ₀ SINDy — the "interpretable ODEs" inherit that approximation; (c) the linear polynomial library (Koopman) in experiment 2 restricts discovered dynamics to linear ODEs — readable but expressively limited; nonlinear libraries not shown at latent-6; (d) 128 configs × 5 seeds × 3 datasets is heavy tuning; the T-SHRED-vs-GRU gap may partly reflect tuning effort; (e) sensors fixed/random — no sensor-placement optimization; (f) sports "sensor" data is nothing like gridded PDE fields — the mapping to sports is conceptual (sparse observations → full game-state), not direct.
- External references: attention-as-ODE (Geshkovski et al. 2024); prior literature [14, 58] on transformers vs RNNs for state prediction; datasets: NOAA SST, plasma [31], The Well [44].

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER (interpretable forecasting / total-signal lane):** The engine has no interpretable neural forecasting model — its neural components are black boxes, and ledger 2162's SymTorch distills them only post-hoc. T-SHRED is the during-training alternative: bake symbolic dynamics into the architecture. The sports analog "GameSHRED": input = lag-8 weekly "sensor" vector per team (EPA margin, success rate, explosive-play rate, turnover luck, rest days — ~10 sensors); transformer encoder with SINDy-Attention heads (library: linear + quadratic terms in sensor latents + Fourier terms for season periodicity); shallow MLP decoder to next-week full team-state (predicted EPA, predicted spread vs market). Serves the **tracking lane** and general forecasting.
- **SCHEME (momentum dynamics as discovered laws):** After training, read out each head's ODE as "momentum laws" — e.g. a head might learn ṁ = −0.3m + 0.5·rest_advantage (mean-reverting momentum), published as interpretable findings. The improvement experiment: **cross-team SINDy-Attention with shared heads** — one GameSHRED across all 32 teams with team-agnostic shared Ξ but team-specific sensor embeddings — testing whether universal symbolic "laws of football momentum" exist (shared mean-reversion ODE) vs team-specific dynamics. If shared heads match team-specific accuracy within 0.2 spread-MAE points, this becomes a publishable "F = ma of football" content/product asset.
- **OTHER (acceptance criteria with numbers):** ADOPT if GameSHRED's spread MAE is within 0.5 points of the engine's neural forecaster on the 2025 test AND ≥ 2 heads yield stable, human-readable ODEs (≤4 terms each, coefficient cosine similarity ≥ 0.8 across 3 seeds) AND total model size < 100 MB. REJECT if MAE trails the engine by > 1.0 point, or ODEs are seed-unstable (cosine < 0.5), or SINDy-Attention collapses to dense coefficients (pruning fails — interpretability void).
- **TRUST-SIGNAL (caution):** The headline result is negative for transformers — a sports team analog must be run against the paper's own honest protocol including a GRU-SHRED equivalent baseline, since RNNs won all three datasets in the paper. UNCERTAIN whether SINDy-Attention's interpretability survives the jump from gridded PDE fields to sparse tabular sports sensors.

## Engine-actionable? (yes/no + one-line what)
**Yes** — build GameSHRED: lag-8 weekly team "sensor" inputs → SINDy-Attention transformer → next-week team-state decoder, trained on 2015–2024 nflverse with 2025 as test; ~2 weeks using the open T-SHRED code adapted to tabular sports data, no new data cost; interpretability (readable momentum ODEs) is the product even at forecast-accuracy parity.
