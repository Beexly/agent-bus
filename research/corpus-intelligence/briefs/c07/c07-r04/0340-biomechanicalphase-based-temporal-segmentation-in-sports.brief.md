# arxiv-program/research/2026-09-21/arxiv-deep/0340-biomechanicalphase-based-temporal-segmentation-in-sports.md
## What it is (1-2 sentences)
Unsupervised temporal segmentation of sports movement into biomechanical phases (demo: javelin throw — steps, drive, throw, recovery) from video pose sequences without frame-level labels, via a two-stage pipeline: an Adaptive ST-GCN denoising autoencoder learning a latent pose representation, then structured unbalanced optimal transport over latent "phase prototypes" with a pseudo-label cross-entropy loop. Verdict recorded: ADAPT — transferable recipe for unsupervised play-phase segmentation in NFL film, but must be rebuilt without the paper's phase-count oracle (K) and validated on NFL play segments.

## Key metrics/methods (formulas where given, else "not specified")
Stage 1: 3 Adaptive ST-GCN blocks (Chebyshev filters order 7, 64-d features) + MLP to 40-d latent; denoising objective L_total = L_MSE + λ_vel L_vel (pose reconstruction MSE + velocity-consistency loss; λ_vel not stated in text); Gaussian noise σ=0.1 injected; Adam lr 1e-4 (encoder)/1e-3 (MLP), weight decay 1e-4, temporal window 30. Stage 2: structured unbalanced OT — visual cost = cosine distance between latent embeddings; OT objective = fused Gromov-Wasserstein temporal-structure term + Kantorovich appearance-cost term + KL relaxation toward a prior class distribution; final frame label = rowwise argmax of the transport plan; pseudo-label cross-entropy loop closes unsupervised training. Critical assumption: K (number of phases) is fixed to the known ground-truth phase count — a phase-count oracle. Evaluation uses global Hungarian alignment across the entire dataset (offline/transductive).

## Data sources named
New javelin dataset: 211 videos (111 men / 100 women) from major competitions; poses via MMPose as 16-joint MPII skeletons; four manually annotated phases for evaluation only (steps, drive, throw, recovery). No frame counts or per-phase duration statistics stated; train/test split sizes not stated; subject-disjointness of splits not stated. Released: https://github.com/Bikudebug/Javelin_Throw_Dataset. Model code link: none stated.

## Findings (numbers and facts, not vibes)
- Ours: 71.02 mAP, 74.61 F1, 48.01 mIoU, 64.04 MoF (test, against manual annotations)
- Baselines: TOT 33.32/33.70/20.21/34.90; TOT+TCL 39.30/50.03/41.32/50.87; CTE 54.82/62.74/50.58/63.42; ASOT 60.20/57.55/41.80/61.19 (same metric order)
- mIoU (48.01) markedly lower than F1 (74.61) — frame classification strong, boundary localization weak
- No confidence intervals or significance tests stated
- Limitations recorded: K-oracle is a hard blocker for NFL (phase inventory of a play is unknown, never tested without oracle); Hungarian alignment inflates operational realism; MMPose error treated as denoiseable noise without ablation; one sport, one movement, 211 videos — cross-sport generality asserted, not shown

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — unsupervised play-phase segmentation as a preprocessing step: NFL plays segmented into tactical phases (presnap → dropback → throw → catch/run-after-catch; pass-rush phases) from tracking data, generating phase-conditioned features for the engine. Boundary-localization weakness matters for timing-sensitive applications (snap timing, release time).

## Engine-actionable? (yes/no + one-line what)
Yes, with a gate — rebuild on NGS tracking (players as graph nodes) with automatic K-selection (BIC/elbow) per play type; adopt only if automatic-K boundary F1 (±3 frames) matches a supervised BiLSTM baseline on a 500-play annotated set AND phase mIoU ≥ 0.55.
