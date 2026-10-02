# arxiv-deep/0339-continuous-spacetime-video-superresolution-with-3d.md
## What it is (1-2 sentences)
Video super-resolution paper (arXiv:2509.26325v2, Becker et al. 2026) introducing V3 ("VFF"): a single model that upsamples video in space AND time at arbitrary continuous scales, using a 3D Fourier-fields head (sum of 512 local sinusoidal bases per patch) plus a Gaussian anti-aliasing mechanism, on top of an RVRT backbone. Verdict in file: ADAPT — a film-enhancement front end for low-quality broadcast/All-22 footage, with the hard rule that synthetic detail must never be treated as measured tracking data.
## Key metrics/methods (formulas where given, else "not specified")
- Basis: B_i(x,y,t) = a_i sin(ω_i·(x,y,t) + φ_i); reconstruction V̂(x,y,t) = Σ_i B_i; anti-aliasing scale ξ(ω_i,σ) = exp(−‖ω_i‖²/(8π²σ²)), σ set from requested scale.
- Training: random continuous spatial scales U(1.2,4), temporal subsampling to 30 fps with continuous target positions; 80×80 patches × 14 frames, batch 16, 2.5M iterations, AdamW lr 1e-4 (β 0.9/0.999, ε 1e-8, grad clip 1), RAFT fine-tuned only in last 300k iters; embedding dim 90, 12 attention heads. V3-Large: 20.6M vs 13.7M params.
## Data sources named
Adobe240 (133 videos, 1280×720, 240 fps; training + eval), Vid4 (eval), GoPro Center/Average crops (eval), REDS (240 videos, 1280×720, 100 frames, 24 fps; eval), AVSR/Vimeo (appendix training only). Code page: https://v3vsr.github.io. All datasets public; all evals use synthetic bicubic-downsampling degradation.
## Findings (numbers and facts, not vibes)
- Adobe240-trained V3 PSNR/SSIM: Vid4 26.76/0.818; GoPro Center 32.93/0.922, Average 32.24/0.918; Adobe Center 32.85/0.921, Average 32.24/0.916. V3-Large: Vid4 26.82/0.821; GoPro Center 33.09/0.925, Average 32.36/0.921.
- REDS ×2–×8: 36.46/0.963, 32.25/0.907, 29.87/0.847, 27.35/0.752, 25.94/0.689. Appendix V2.5 (AVSR-trained) REDS: 37.89/0.970 … 26.80/0.725. Spatial-only 34.20/0.937; temporal-only 33.31/0.935.
- Temporal consistency tOF on Vid4: V3 0.257, V3-Large 0.250 vs BF-STVSR 0.323 (lower better). Efficiency: V3 1.27 s, 6.1 GiB peak vs VideoINR 3.03 s/2.6 GiB, MoTIF 1.88 s/8.4 GiB, BF-STVSR 1.90 s/10.4 GiB.
- Acknowledged limitations: regression oversmoothing (fine detail hallucinated as smooth), 512-basis bottleneck, only downsampling degradation tested — real broadcast degradations (H.264 artifacts, interlacing, motion blur) untested; no per-pixel uncertainty output; 1.27 s/clip not real-time; trained on consumer-camera data, not stadium footage.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — film-pipeline infrastructure: enhance low-quality/older All-22 or compressed clips before visual review or before running detection/pose pipelines, flagged synthetic_detail=1, quarantined from measurement.
- TRUST-SIGNAL — the quarantine rule is the trust point: enhanced frames must never feed tracking/measurement pipelines; a per-pixel "trust map" head is the natural improvement.
## Engine-actionable? (yes/no + one-line what)
No (not an engine input) — adoptable only as an offline film-preprocessing layer gated by ≥2 dB PSNR over bicubic on realistic NFL degradations, ≥50% recovery of detection-mAP lost to degradation, and blind-review hallucination check; never feed enhanced frames into tracking/measurement pipelines.
