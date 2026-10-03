# arxiv-program/research/2026-09-21/arxiv-deep/0021-physicsconsistent-deep-learning-for-blind-aberration.md
## What it is (1-2 sentences)
Mobile-optics deep learning paper (Jhawar et al., arXiv:2603.04999, 2026) — ResNet-18 ("Lens2Zernike") blindly recovers physical optical aberration parameters (Zernike coefficients Z2–Z37) from a single blurred smartphone image, with physics-consistent auxiliary losses. The reader's verdict was REJECT — no sports, betting, or prediction content; flagged for replacement.
## Key metrics/methods (formulas where given, else "not specified")
- Total loss: L_total = λz·Lcoeff + λp·Lphysics + λm·Lmap (Eq. 1).
- Lcoeff: MSE in normalized Zernike coefficient space; Lphysics: MSE on wavefront/PSF derived via differentiable optics layer (Fourier transform of predicted coefficients); Lmap: auxiliary decoder heads predicting high-resolution wavefront and PSF maps.
- Target: 36-dim Zernike coefficient vector (Z2–Z37, Noll indexing); evaluation in unnormalized physical wave space (λ).
- Hyperparameters (LR, optimizer, epochs, λ weights): not stated in paper.
## Data sources named
- IDMxS Mobile Camera Lens Database (proprietary/patented, 109 smartphone lens designs as Zemax OpticStudio files; via idmxs.org).
- Public smartphone microscopy dataset (2025) as clean patches; 110,090 synthetic blurred images generated via Fourier-optics forward simulation. 5-fold CV split strictly by lens design.
## Findings (numbers and facts, not vibes)
- Full model (z+p+m) MAE 0.00128λ / MSE 4.20×10⁻⁵ vs baseline coeff-only 0.00197λ / 5.82×10⁻⁵ — ~35% MAE improvement.
- Beat literature baselines: DLWFS (Xception) 0.00173λ; DLAO (LAPANet) 0.00324λ.
- Downstream Wiener deconvolution: mean PSNR 24.66 dB (predicted PSFs) vs oracle 25.02 dB (−0.36 dB gap).
- Synthetic-only training; real-hardware validation is future work; fold-level variance not reported.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- None actionable. Faint generic motif: physics-informed auxiliary losses regularizing a regressor — OTHER.
## Engine-actionable? (yes/no + one-line what)
No — mobile-camera optics with proprietary irreproducible data; no GSE regressor has a known physical constraint to supervise.
