# arxiv-program/research/2026-09-21/arxiv-deep/0125-design-implementation-and-evaluation-of-a.md
## What it is (1-2 sentences)
Deep read of Álvarez Casado et al. (2025, arXiv:2508.18787v1): Face2PPG, a real-time C++ remote photoplethysmography (rPPG) system extracting heart rate from ordinary camera video at 30+ fps on commodity hardware. Verdict in file: REJECT for GSE — no application surface in the sports-intelligence stack.
## Key metrics/methods (formulas where given, else "not specified")
- Pipeline: face detection/alignment → geometric ROI → RGB→CIE-Lab conversion → 12 s rolling buffer → 61-tap FIR band-pass → FFT/Welch spectral HR estimation; main loop 33 ms targeting 30 fps; REST /vhealth on port 8080, MJPEG on 8081.
- Color science: RGB gamma correction → 3×3 sRGB matrix to XYZ → L* = 116·f(Y/Y_n)−16, a* = 500·[f(X/X_n)−f(Y/Y_n)], b* = 200·[f(Y/Y_n)−f(Z/Z_n)].
## Data sources named
Four public rPPG benchmarks: COHFACE (160 videos, 40 subjects, 20 Hz), LGI-PPGI (24 videos, 6 subjects, 25 Hz), UBFC1 (8 videos), UBFC2 (42 videos, 30 Hz), PURE (60 videos, 10 subjects, 30 Hz). No code link stated.
## Findings (numbers and facts, not vibes)
- MAE ± std / PCC (exact): Server Multiregion — LGI-PPGI 4.5±3.3/0.57, COHFACE 8.0±4.4/0.06, UBFC1 0.9±0.4/0.96, UBFC2 0.9±0.9/0.98; RT Config 1 — 6.4±6.8/0.45, 10.8±5.5/−0.04, 1.4±0.5/0.80, 4.7±4.6/0.72.
- Speed: RT1 14.11 ms/frame (71 FPS), RT2 9.69 ms/frame (103 FPS), Server Normalized 116.46 ms (8.59 FPS), Multiregion 221.87 ms (4.51 FPS).
- Honest failure: COHFACE PCC ≈ 0.06/−0.04/−0.01 — method fails on compressed video; no comparison against standard rPPG baselines (POS/CHROM/DeepPhys).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: none sports-intelligent; only a generic engineering pattern (multi-threaded producer/consumer pipeline) worth nothing new.
## Engine-actionable? (yes/no + one-line what)
no — zero application surface: GSE has no camera/biometric inputs and no health-monitoring product.
