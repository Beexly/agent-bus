# docs/arxiv-program/research/2026-09-21/arxiv-deep/1872-trajfm-vehicle-trajectory-foundation-model-region-task-transfer.md
## What it is (1-2 sentences)
Deep read of arXiv:2408.15251, TrajFM: a vehicle-trajectory foundation model with learnable relative-spatial rotary attention (STRPE) and a masking-and-recovery scheme that unifies all downstream tasks as masking patterns with zero retraining. Ledger verdict: ADAPT — the task-unification pattern (frozen model serving trajectory prediction, time-to-event, imputation) and region-agnostic relative attention transfer to NFL tracking, with team/season transferability.
## Key metrics/methods (formulas where given, else "not specified")
- STRFormer: per-point 3 modalities — spatial (UTM projection, center-normalized, scale s_x=s_y=4000 → linear embed e^s_i), temporal (day-of-week, hour, minute, Δt-minutes → 4 features → learnable Fourier encoding), POI (nearest POI text description → OpenAI text-embedding-3-large → linear projection e^p_i); e_i = MeanPool(TransEnc(⟨e^s_i,e^t_i,e^p_i⟩)) (1-layer Transformer).
- STRPE: q_i=R_{Φ(x_i,y_i)}W_q e_i, k_j=R_{Φ(x_j,y_j)}W_k e_j, v_j=W_v e_j; Φ(x,y)=W_Φ(x‖y); θ_k=10000^{−2k/d}; q_iᵀ·k_j = e_iᵀ W_qᵀ R_{Φ(x_i,y_i)−Φ(x_j,y_j)} W_k e_j — attention depends only on relative displacement (region-agnostic). L=2 layers, d=128.
- Masking-and-recovery pretraining: (1) modality masking — mask spatial or temporal modality of a point, recover at same step; (2) sub-trajectory masking — replace ⟨p_s,…,p_e⟩ with mask point p_[m], append start token p_[s], recover autoregressively; loss = Σ MSE (spatial/temporal) + BCE (end-token); L^s_i=(x̂_i−x_i)²+(ŷ_i−y_i)²; L^t_i=‖t̂_i−t_i‖₂; L^e_i=BCE(r̂,r).
- Task unification: travel-time estimation = temporal modality masked everywhere except first point, read recovered temporal of last point; OD travel time = ⟨p_1,[m],p_n′⟩; trajectory prediction = history + [m] → autoregressive future.
- Pretrain: 30 epochs, Adam 1e-3, 5 runs, mean±dev; chronological 8:1:1 train/val/test.
## Data sources named
Didi Chengdu + Xi'an taxi trajectories (gaia.didichuxing.com), 3-hop resampling (intervals ≥6 s), 5–120 points per trajectory; POIs from AMap API. Baselines: t2vec, Trembr, CTLE, Toast, TrajCL, START, LightPath (frozen and fine-tuned variants).
## Findings (numbers and facts, not vibes)
- Task transfer (arrival-time, OD arrival-time, trajectory prediction): TrajFM "consistently promising" frozen vs fully fine-tuned competitors; gap largest on OD-time and trajectory prediction (incomplete inputs — competitors "rely on input integrity"); most competitors show "significant performance degradation" in frozen (wo ft) mode.
- Region transfer (train Chengdu → test Xi'an and vice versa, no fine-tuning): TrajFM superior in all settings; "in some cases, TrajFM performs better when transferred" than in-domain (mechanism unexplained).
- Efficiency: model size comparable to RNN baselines (t2vec, Trembr), "much smaller than" START and LightPath; efficient train/test.
- Ablations: STRPE > vanilla Transformer; removing POI hurts; removing pre-training hurts; optimal L=2, d=128 (larger L "overly complicated and harder to train").
- Exact table values were figure-rendered in the source and not recovered; only qualitative rankings reported by the reader.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- One frozen encoder serving multiple tracking tasks ("predict remaining yards" = mask future sub-trajectory; "time-to-throw" = mask temporal modality; frame imputation = random point masking): QB-BEHAVIOR (time-to-throw estimation) and OTHER (multi-task serving architecture).
- STRPE relative-displacement attention as formation-agnostic mechanism transferring across teams/seasons: SCHEME (formation-agnostic interaction modeling).
- Multi-agent STRPE extension proposed (query = ball-carrier, keys = defenders) for yards-after-contact: OTHER.
## Engine-actionable? (yes/no + one-line what)
Yes — train STRFormer-style encoder (L=2, d=128–256) with modality + sub-trajectory masking on 7 seasons of NFL 10Hz tracking (~3 engineer-weeks), replacing POI-text embeddings with learned field-landmark embeddings; acceptance gate: frozen model within 5% of per-task fine-tuned baselines on future-trajectory FDE / time-to-throw MAE / frame-imputation RMSE, AND cross-season degradation ≤10% on trajectory prediction.
