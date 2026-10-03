# arxiv-program/research/2026-09-21/arxiv-deep/1313-onfield-player-workload-exposure-knee-injury.md
## What it is (1-2 sentences)
Ledger on Johnson et al. (2019, arXiv:1809.08016v3): a deep-learning protocol that estimates 3D knee joint moments (a strong ACL-injury-risk indicator) directly from motion-capture kinematics, using a CaffeNet regressor with double-cascade transfer learning (ImageNet → ground-reaction-force/moment model → knee-joint-moment model). The ledger's verdict is ADAPT, as a portable biomechanical-load-estimation primitive for GSE's player-availability/injury lane.
## Key metrics/methods (formulas where given, else "not specified")
- Spatio-temporal → image encoding: marker (x,y,z) mapped to image (R,G,B); 8 markers → image width; 125 samples → image height; warped to 227×227 pixels via cubic spline interpolation.
- CaffeNet pre-trained on 1.3M ImageNet images, final 1,000-dim SoftMax replaced by a Euclidean loss layer → multivariate regression network.
- Output compression: 6 knee-joint-moment waveforms (LKJMx/y/z, RKJMx/y/z) deinterlaced (90 features each), each PCA-reduced at threshold t=0.999 (e.g., RKJMz 90→59 features).
- Double-cascade transfer learning: fine-tune once from ImageNet (single), or twice — from an earlier GRF/M model's weights, then on KJM (double-cascade).
- Prediction over the initial 33% of stance phase (the injury-relevant window). Metrics: correlation r and relative RMSE (rRMSE).
- Validation: random 80/20 split (single fold primary); 5-fold CV on the largest subset (sidestep right); Mann-Whitney significance test on the +4.2% double-cascade improvement (p < 0.01).
## Data sources named
UWA 17-year biomechanics archive (2001–2017); 458,372 motion-capture files mined; population: healthy amateur-to-professional athletes, male 62.8% / female 37.2%, height 1.766 ± 0.097 m, mass 74.5 ± 12.2 kg. Usable trial counts: walk L 570 / R 646; run L 233 / R 884; sidestep L 566 / R 1,527. Only 8 passive markers (C7, sacrum, bilateral hallux/calcaneus/lateral malleolus). Ground truth: KJM from inverse dynamics with synchronized force plates. Supplementary material at digitalathlete.org; no public code or dataset release stated.
## Findings (numbers and facts, not vibes)
- Single fine-tune best: sidestep left r(LKJMmean) = 0.9179; weakest: sidestep right 0.8168.
- Double-cascade: sidestep left 0.9277 (components: ext/flex 0.9829, abd/add 0.9050, int/ext 0.8953); sidestep right 0.8168 → 0.8512 (+4.2%, p<0.01); mean improvement +1.8% across movement types; sidestep pair combined r(KJMmean) = 0.8895.
- 5-fold CV: mean r(RKJMmean) = 0.8472 vs single-fold 0.8512 — no overfitting.
- Weakest component throughout: KJMz (internal/external rotation) — e.g., run right 0.7430 single-tune; sidestep right 0.7304 double-cascade. Per the ledger, rotational moments are central to the ACL mechanism, so the method is strongest where it matters least.
- Paper's cited epidemiology: non-contact ACL events are 51–80% of team-sport ACLs, >80% in sidestepping/single-leg landing — cutting is football's core movement.
- Limitations per ledger: still lab-bound (marker mocap, not on-field sensors; accelerometer-driven regression is future work); KJM samples (233–1,527) smaller than the earlier GRF/M work (2,196); systematic/manual errors in the legacy archive propagate into ground truth; 2019-era tech (CaffeNet); not football-specific.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: biomechanical knee-load estimation feeds a player-availability/injury lane (weekly workload-exposure reports for fantasy/injury-risk content) — distinct from all tabular/video/multimodal injury ledgers in the corpus.
- OTHER: extends the injury cluster into mechanistic load monitoring rather than injury prediction; the ledger flags the corpus map's "causal injury impact" area as thin.
- OL (adjacent, INFERENCE): the method is explicitly strongest on ext/flex (r≈0.99) and weakest on rotational (KJMz) moments; its direct value is to cutting/jumping athletes, not line-play units specifically — the file names no OL application.
## Engine-actionable? (yes/no + one-line what)
yes — Modern port: replace CaffeNet with a temporal CNN/transformer backbone and marker trajectories with NGS tracking data (10 Hz player coordinates) or practice wearable IMU streams to produce per-player weekly knee-load/workload-exposure proxies (weekly batch reports first; real-time is a later phase). Adopt only if the port beats linear regression on KJMz (the ACL-relevant rotational component) by ≥0.05 correlation with 5-fold CIs excluding zero on held-out subjects; improvement experiment adds a physics-informed loss term (penalizing inverse-dynamics violations between predicted KJM and measured GRF) weighted on KJMz, hypothesizing ≥0.05 KJMz correlation gain without degrading KJMx/KJMy. Effort: ~4–6 engineer-weeks for a prototype; data partnership is the long pole.
