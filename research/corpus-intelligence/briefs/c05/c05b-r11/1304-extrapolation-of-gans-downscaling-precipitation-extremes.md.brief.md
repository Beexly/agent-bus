# arxiv-program/research/2026-09-21/arxiv-deep/1304-extrapolation-of-gans-downscaling-precipitation-extremes.md
## What it is (1-2 sentences)
Deep-research ledger of arXiv:2409.13934v1 (Rampal, Gibson, Sherwood, Abramowitz, physics.ao-ph, 2024) testing whether conditional GANs downscale precipitation extremes under future warming better than deterministic downscalers. Finding: CGANs trained only on the historical climate capture 77% of the warming-driven increase in extreme precipitation vs 63–65% for deterministic CNNs — generative downscaling extrapolates tail behavior out of distribution. Verdict: ADAPT — the recipe ports to synthetic extreme-weather scenario generation for GSE's tail-risk modeling. (Replacement for REJECT 1099.)

## Key metrics/methods (formulas where given, else "not specified")
- Conditional GAN downscaling: generator maps coarse-resolution fields → fine-scale precipitation, adversarially trained (initial LR 2×10⁻⁴ for generator and discriminator).
- Evaluation target: 99.5th percentile of precipitation (extreme tail).
- RCM-projected ground truth: ~5.8%/°C average increase in 99.5th-percentile precipitation across five simulations.
- Skill metric: capture fraction = downscaler's projected increase ÷ RCM-projected increase.
- Three training regimes: GAN trained on historical climate only, GAN trained on future climate, deterministic CNN baselines.
- Assumptions: RCM tail response is reference truth; CGAN's learned fine-scale physics transfers across climate regimes; 99.5th percentile is the decision-relevant tail.

## Data sources named
CCAM regional climate model output over New Zealand (165°E–184°W); five independent SSP370 simulations; historical vs end-of-century warming scenarios. CCAM data: research access. Code: not stated in paper.

## Findings (numbers and facts, not vibes)
- Future-trained GANs capture 97% of the warming-driven increase in extreme precipitation vs 65% for the deterministic baseline.
- Historically trained GANs still capture 77% — substantially better than deterministic CNNs (63–65%), which underestimate future tail increases even when trained on future climates.
- Key result: generative downscaling extrapolates tail behavior out of distribution where regression downscaling cannot.
- Limitations: single region (New Zealand), single RCM family, precipitation only; GAN training instability not quantified; 99.5th percentile is one tail slice; no leakage (historical-trained models evaluated on genuinely unseen warmer climate).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Generative extreme-weather scenario generation for GSE's Monte Carlo engine — tail-risk pricing of totals and weather-sensitive props (Gap 8 weather physics for totals; complements ledgers 1301/1303/1305).
- [TRUST-SIGNAL] The capture-fraction metric (77%-vs-65%) is a portable out-of-distribution validation test for any synthetic-scenario generator before trusting its extremes.
- [OTHER] Improvement experiment: condition generator on large-scale circulation indices (ENSO/NAO phase); ensemble multiple GAN seeds and measure tail-spread calibration; test diffusion-based downscalers on the same metric.

## Engine-actionable? (yes/no + one-line what)
Yes — train a conditional GAN to downscale coarse reanalysis (e.g., ERA5) to stadium-scale gust/precipitation fields on historical data only, validate its tail-extrapolation on held-out extreme-weather seasons with the paper's capture-fraction metric, then use the generator inside the Monte Carlo engine for extreme-weather game scenarios in totals/weather-prop tail-risk pricing.
