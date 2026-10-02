# arxiv-program/research/2026-09-21/arxiv-deep/2167-t-shred-symbolic-regression-regularization-model-discovery-transformer.md

## What it is (1-2 sentences)
Full-paper read (ar5iv HTML) of T-SHRED (arXiv:2506.15881v3, Yermakov et al., 2026): a transformer-based SHRED (shallow recurrent decoder) for reconstructing full spatio-temporal states from sparse sensors, whose core novelty — SINDy-Attention — embeds symbolic regression *inside* each attention head as a trainable regularizer, so every head learns an interpretable coupled ODE for the latent dynamics. Ledger verdict ADAPT — the blueprint for an interpretable neural momentum/forecasting model for GSE, the during-training alternative to post-hoc distillation.

## Key metrics/methods (formulas where given, else "not specified")
- SINDy latent loss: Ξ^(i) = argmin ‖z_{t+1} − (z_t + Σ Θ(z_{t+ih})Ξ^(i)h)‖²₂ + ‖Ξ^(i)‖₀ (Eq. 1; trained via ℓ₂ + pruning on Ξ every 10 epochs as an ℓ₀ approximation).
- SINDy-Attention: per-head Q^(h)=xW_{h,q}, K^(h)=xW_{h,k}, V^(h)=xW_{h,v} (Eq. 10); T^(h)=rowsoftmax(QKᵀ/√k)V (Eq. 11); S^(h)=Θ_SINDy(T^(h)′)Ξ^(h) (Eq. 12); S=concat(S^(h)) (Eq. 13); z=(SW_ff1)W_ff2 (Eq. 14). Grounded in the attention-as-ODE result (Geshkovski et al. 2024, Eq. 9). After training, each head reads out as a coupled ODE over the latent space.
- Also studied: plain SINDy-loss regularization (loss term only, no architectural change); CNN vs MLP decoders; CNN decoder y = σ(Conv₁(σ(Conv₂(z)))) (Eq. 8).
- Assumptions: Takens-embedding regime (lag 50 suffices); sensors fixed in space; ℓ₂+pruning ≈ ℓ₀ under regularity conditions; separation-of-variables motivation u(x,t)=T(t)X(x) for SHRED.

## Data sources named
Three dynamical systems, 50 random persistent sensors, temporal lag 50, next-step full-state prediction, 80/10/10 time splits: Sea Surface Temperature (NOAA, 1,400 weekly snapshots 1992–2019, 180×360 grid, 44,219 ocean points, 179 MB, min-max normalized); complex plasma physics (2,000 timesteps × 14 fields of 257×256 points, rSVD-reduced to 280-dim ROM, 785 MB); rotating shallow water (PlanetSWE from "The Well": ∂u/∂t = −u·∇u − g∇h − ν∇⁴u − 2Ω×u; ∂h/∂t = −H∇·u − ∇·(hu) − ν∇⁴h + F; 10 tracks, 15.5 GB). Code: https://github.com/yyexela/T-SHRED. All data public (NOAA; plasma [31]; The Well [44]).

## Findings (numbers and facts, not vibes)
- Experiment 1 (128 configs/dataset × 5 seeds, best-by-validation, mean±std test loss): SST — best overall = 1-layer GRU SHRED + MLP decoder, **1.50×10⁻³** (25.14 MB); best T-SHRED = 1-layer SINDy-Attention + CNN, **1.87×10⁻³** (75.31 MB). Plasma — best = 3-layer GRU SHRED + MLP, **2.10×10⁻⁴** (0.74 MB); best T-SHRED = SINDy-Attention + CNN, **4.90×10⁻⁴** (1.23 MB). PlanetSWE — best = 1-layer SINDy-loss GRU SHRED + MLP, **2.49×10⁻³** (151.86 MB); best T-SHRED = SINDy-Attention + CNN, **3.58×10⁻³** (452.52 MB).
- Within T-SHRED, SINDy-Attention (SA-T, SASL-T) beat all other transformer variants on all three datasets; CNN decoders paired best with transformer latents.
- Interpretability run: latent 100→6 cost only ~2× test loss on PlanetSWE (7.76×10⁻³) while model size fell 16× (28.51 MB vs 452.52 MB), and every head emitted a readable 3-variable linear ODE (e.g., SST L₀H₀: ż₀ = −0.699z₀ + 0.275z₂).
- Honest headline: transformers still lose to GRUs on next-step state prediction (consistent with prior literature [14, 58]) — the paper's real contribution is the regularization mechanism, not SOTA forecasting.
- Limitations from the ledger: ℓ₂+pruning only approximates ℓ₀; the Koopman linear-polynomial library restricts discovered dynamics to linear ODEs (nonlinear libraries not shown at latent-6); heavy tuning (128 configs × 5 seeds × 3 datasets); sports "sensors" are nothing like gridded PDE fields — the mapping is conceptual.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (interpretable neural forecasting): the direct sports analog is a "GameSHRED" — sparse weekly "sensors" per team (EPA margin, success rate, explosive-play rate, turnover luck, rest days — ~10 sensors, lag-8) feeding a transformer encoder with SINDy-Attention heads (linear + quadratic + Fourier-seasonality library), decoding to next-week full team state; head ODEs become GSE's "momentum laws" (e.g., INFERENCE for shape: ṁ = −0.3m + 0.5·rest_advantage — mean-reverting momentum).
- SCHEME (INFERENCE): the improvement experiment — cross-team SINDy-Attention with *team-agnostic* shared heads — tests whether universal symbolic "laws of football momentum" exist vs. team-specific dynamics; if shared heads match within 0.2 spread-MAE points, GSE gets publishable universal equations of NFL team dynamics (a content/product asset).

## Engine-actionable? (yes/no + one-line what)
Yes — build GameSHRED on 2015–2024 nflverse weekly team data (latent 6–10, ℓ₂+pruning on Ξ every 10 epochs), compare spread-MAE/Brier vs the engine's black-box neural forecaster, and publish the stable head-ODEs as interpretable findings; ADOPT gate: spread MAE within 0.5 points of the engine's neural forecaster on 2025 AND ≥2 heads yield stable human-readable ODEs (≤4 terms, coefficient cosine similarity ≥0.8 across 3 seeds) AND model size < 100 MB.
