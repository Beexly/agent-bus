# arxiv-program/research/2026-09-21/arxiv-deep/0504-velocity-disambiguation-for-video-frame-interpolation.md
## What it is (1-2 sentences)
Deep-read of arXiv:2311.08007v4 (Zhong et al., 2023): a distance-map formulation plus iterative reference-based estimation and multi-frame refinement to resolve velocity ambiguity in video frame interpolation. Corpus verdict: REJECT — no prediction-modeling application, and generating/interpolating footage is prohibited by Garrett's standing video rule.
## Key metrics/methods (formulas where given, else "not specified")
- Distance map: D_t(x,y) = ||V_{0→t}(x,y)|| · cos θ / ||V_{0→1}(x,y)||, where V_{0→t} is motion field frame 0 → intermediate time t, V_{0→1} full inter-frame motion, θ the angle between them.
- Iterative reference-based estimation of the distance map; CPFlow continuous motion maps for dense correspondence; multi-frame refiner as drop-in addition to VFI backbones (RIFE, IFRNet, AMT-S, EMA-VFI).
- Evaluation metrics: PSNR, SSIM, LPIPS, NIQE; user study n=30 (exact ranking percentages not printed).
## Data sources named
Vimeo90K septuplets (91,701 seven-frame sequences at 448×256, from 39,000 clips) for training; Vimeo90K test, Adobe240, X4K1000FPS for evaluation. Project page: https://zzh-tech.github.io/InterpAny-Clearer/
## Findings (numbers and facts, not vibes)
- RIFE on Vimeo90K (LPIPS / NIQE): base 0.105 / 6.663; +distance map 0.092 / 6.344; +distance + reference-based estimation 0.086 / 6.220.
- Multi-frame RIFE (PSNR / SSIM / LPIPS / NIQE): base 28.22 / 0.912 / 0.105 / 6.663; estimated-map refiner 28.34 / 0.928 / 0.089 / 6.173; ground-truth-map upper bound 31.63 / 0.952 / 0.062 / 5.990.
- Cost on A100 at 448×256: RIFE + distance 0.03 s, 10.21 MB; multi-frame 0.06 s, 20.46 MB; estimated-map multi-frame 0.10 s, 30.68 MB.
- Ground-truth-map upper bound (PSNR 31.63 vs 28.34) shows estimated maps are roughly half the headline ablation gain from ideal; 448×256 evaluation far below broadcast 1080p.
- No test on sports broadcast footage; no prediction-modeling application.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Interpolation creates footage that was never filmed — the opposite of the real-clips-only rule: OTHER (standing video rule compliance, negative signal).
## Engine-actionable? (yes/no + one-line what)
No — generative-video technique with no path into prediction models and prohibited as content material; verdict REJECT stands.
