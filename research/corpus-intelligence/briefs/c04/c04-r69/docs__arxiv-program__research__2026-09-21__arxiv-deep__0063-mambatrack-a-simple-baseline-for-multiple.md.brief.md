# docs/arxiv-program/research/2026-09-21/arxiv-deep/0063-mambatrack-a-simple-baseline-for-multiple.md
## What it is (1-2 sentences)
A full-paper deep-read of Xiao et al. (2024, arXiv:2408.09178v1, MM '24): a learned bi-Mamba state-space motion predictor (MTP) replaces the Kalman filter inside tracking-by-detection multi-object tracking, plus a Tracklet Patching Module (TPM) that autoregressively patches occluded tracklets. The verdict is ADAPT: it is the first generative (predict-where-players-go-next) trajectory model in the corpus — directly testable on NFL Next Gen Stats tracking data.
## Key metrics/methods (formulas where given, else "not specified")
- MTP: input O_in = [o_{t-q},...,o_{t-1}] in R^{q x 4} with o = [delta_cx, delta_cy, delta_w, delta_h] (normalized bbox changes), q=10 lookback; linear embedding to d_model=512; L=3 bi-Mamba blocks (forward + backward input-dependent selective SSM to fix Mamba's unidirectionality; residual X = (Xhat_fwd + Xhat_bwd) + LN(MLP(...))); average pooling + 2 FC layers predicting next-frame offsets; smooth-L1 loss.
- TPM: for lost tracklets, p_hat_{t+1} = MTP(T, p_hat_t) autoregressively; patched boxes get a second IoU + Hungarian matching pass; new tracks from detections > 0.6 confidence; terminate after 30 frames without update.
- Training: Adam (beta1=0.9, beta2=0.98, eps=1e-8), batch 64, LR = d_model^-0.5 * min(step^-0.5, step*warmup^-1.5), warmup=4000; sliding-window samples from frame q+2.
- Metrics: HOTA (primary), IDF1, AssA, MOTA, DetA, FP/FN/IDs.
- Flag in file: the paper labels Eq. (3) as ZOH discretization, but the form is the bilinear/Tustin transform (true ZOH is exp(Delta*A)) — math mislabeled, inconsequential to results.
## Data sources named
Public benchmarks DanceTrack (40 train / 25 val / 35 test videos, uniform-appearance dancers) and SportsMOT (basketball, football, volleyball; 45 train / 45 val / 150 test sequences), YOLOX pretrained weights from the benchmarks. No code URL found in the PDF. Inference cost: 67 ms/frame on a laptop RTX 4060 (tracking component 11.37 ms).
## Findings (numbers and facts, not vibes)
- SportsMOT test: MambaTrack HOTA 72.6 / IDF1 72.8 vs ByteTrack (Kalman) 62.8 / 69.8 — +9.8 HOTA, +3.0 IDF1, +9.1 AssA ("lead ... by nearly 10 percentage points in HOTA"). vs OC-SORT 71.9 HOTA.
- DanceTrack test: MambaTrack HOTA 56.8 / IDF1 57.8 vs OC-SORT 54.6 / 54.6 (+2.2 HOTA, +3.2 IDF1, "highest IDF1"); vs SORT 47.9.
- Ablation (DanceTrack val): Kalman baseline HOTA 45.9 -> +MTP 54.9 (+9.0 HOTA, +3.6 IDF1, +7.8 AssA); +TPM -> 55.1/56.1/39.2 (+1.6 IDF1 consistency gain).
- Motion-model shootout HOTA: IoU-only 44.7, KF 45.9, LSTM 51.3, Transformer 52.5, MTP 54.9. Plugging MTP into other trackers: SORT +9.0, ByteTrack +6.8, MixSort +5.7 HOTA. Bi-Mamba vs vanilla Mamba: 54.9 vs 52.4 (+2.5); 3 blocks optimal.
- Limitations: broadcast-view sports tracking, not top-down NFL NGS tracking — domain gap; TPM autoregression can compound drift (only the 30-frame termination guards it); batch sibling MambaMOT (0066) and the diffusion-trajectory dossier (2503.18589) must be de-duplicated before building.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: generative trajectory prediction on NGS tracking — first in corpus (STRAIN and the 27-family NGS taxonomy are descriptive); complements the state-space/Kalman lane as a direct learned replacement.
- SCHEME: per-role (QB/RB/WR/DB) heads with role embeddings + interaction terms would capture assignment-dependent routes — a scheme-informed extension proposed in the file.
## Engine-actionable? (yes/no + one-line what)
Yes — pilot MTP on 2023-2024 NGS tracking (predict (x,y) 10 frames ahead; [dx,dy,speed,dir] 10-frame lookback), adopting only if it beats the Kalman baseline by >=15% mean displacement error on a held-out 4-week window with inference <50 ms/frame; check the 2503.18589 dossier first to de-duplicate.
