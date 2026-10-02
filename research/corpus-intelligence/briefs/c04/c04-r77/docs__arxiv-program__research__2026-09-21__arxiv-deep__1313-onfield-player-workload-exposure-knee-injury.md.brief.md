# docs/arxiv-program/research/2026-09-21/arxiv-deep/1313-onfield-player-workload-exposure-knee-injury.md
## What it is (1-2 sentences)
Ledger for arXiv:1809.08016v3 (Johnson, Mian, Lloyd, Alderson, 2019, Journal of Biomechanics) — tests whether deep learning can estimate 3D knee joint moments (KJM, an ACL-risk indicator) directly from motion-capture kinematics without lab force plates, as a step toward on-field workload-exposure monitoring. Verdict: ADAPT.
## Key metrics/methods (formulas where given, else "not specified")
- Spatio-temporal → image encoding: 8 marker (x,y,z) trajectories mapped to RGB; 8 markers → image width, 125 time samples → height, warped to 227×227 via cubic spline interpolation.
- CaffeNet (pre-trained on 1.3M ImageNet images) fine-tuned with final 1,000-dim SoftMax replaced by a Euclidean loss layer → multivariate regression network.
- Output compression: 6 KJM waveforms (LKJMx/y/z, RKJMx/y/z) deinterlaced (90 features each), each PCA-reduced with threshold t=0.999 (e.g., RKJMz 90→59 features).
- Double-cascade transfer learning: fine-tune once from ImageNet (single), or twice — from an earlier GRF/M model's weights, then on KJM (double-cascade).
- Prediction over initial 33% of stance phase; metrics: correlation r and relative RMSE (rRMSE). No novel equations stated; standard Euclidean-loss regression on PCA-compressed waveform outputs.
## Data sources named
- UWA 17-year biomechanics archive (2001–2017): 458,372 motion-capture files; healthy athletic population (amateur to professional), male 62.8% / female 37.2%, height 1.766 ± 0.097 m, mass 74.5 ± 12.2 kg.
- Only 8 passive markers (C7, sacrum, bilateral hallux/calcaneus/lateral malleolus). Usable trials: walk L 570 / R 646; run L 233 / R 884; sidestep L 566 / R 1,527.
- Ground truth: KJM from inverse dynamics with synchronized force plates. Supplementary material at digitalathlete.org; no public dataset or code release stated.
## Findings (numbers and facts, not vibes)
- Single fine-tune best: sidestep left r(LKJMmean) = 0.9179; weakest: sidestep right 0.8168.
- Double-cascade: sidestep left 0.9277 (components: ext/flex 0.9829, abd/add 0.9050, int/ext 0.8953); sidestep right 0.8168 → 0.8512 (+4.2%, p < 0.01); mean improvement +1.8% across movement types; sidestep pair combined r(KJMmean) = 0.8895.
- 5-fold CV on sidestep right: mean r(RKJMmean) = 0.8472 vs single-fold 0.8512 — overfitting avoided.
- Weakest component throughout: KJMz (internal/external rotation) — run right 0.7430 (single-tune); sidestep right 0.7304 (double-cascade).
- Cited epidemiology in paper: non-contact ACL events are 51–80% of team-sport ACLs, >80% in sidestepping/single-leg landing.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (injury-risk biomechanics / player availability): portable biomechanical-load-estimation primitive for an injury lane; closest paper in its wave to a real-time load-monitoring method.
- TRUST-SIGNAL: acceptance gate is explicit and testable (adopt if modern-backbone port beats linear regression on KJMz by ≥0.05 correlation with 5-fold CIs excluding zero; reject if gains are confined to KJMx).
- OTHER: connects to corpus injury ledgers 0768, 0772, 1120 — this one extends the injury cluster into mechanistic load monitoring rather than injury prediction.
## Engine-actionable? (yes/no + one-line what)
Yes — prototype knee-load estimation: modern-backbone port (temporal CNN/transformer) with NGS tracking data (10 Hz) or practice wearable IMU streams as inputs replacing mocap, lab mocap+force-plate data as training ground truth, outputting per-player per-week workload-exposure scores for the fantasy/injury-risk lane (effort ~4–6 engineer-weeks, data partnership is the long pole).
