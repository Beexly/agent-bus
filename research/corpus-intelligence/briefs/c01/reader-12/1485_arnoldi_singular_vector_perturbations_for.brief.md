# arxiv-program/research/2026-09-21/arxiv-deep/1485-arnoldi-singular-vector-perturbations-for.md

**Ledger:** [1485] (arXiv:2506.22450v1) — **Verdict in file: ADAPT**

## What it is (1-2 sentences)
An adjoint-free Arnoldi singular-vector method (A-SV) that finds dynamically meaningful initial-condition perturbations for ML weather prediction (Pangu Weather) using only nonlinear forward runs — building a Krylov subspace via Gram–Schmidt to extract the fastest-growing error directions, enabling cheap K-member ensembles.

## Key metrics/methods (formulas where given, else "not specified")
- Evolved increment: I_{τ,x0,h}(v) = M_τ(x0+hv) − M_τ(x0); evolved increment matrix (EIM) A_{τ,x0,h} = (I(e1),…,I(en)) — linear map of local error growth from nonlinear runs.
- A-SV: start from Gaussian noise; iterate 24h Pangu model on perturbed states; Gram–Schmidt builds Krylov basis Q (n×m) and low-dim projection H (m×m) with AQ = QH + RES; SVD of H; leading right SVs (×Q) = fastest error-growth directions. Block version (blocksize 8, Ruhe variant) parallelizes; runs once at initial time, yielding K ensemble members from K leading SVs.
- Growth rate: log(‖δτ‖/‖δ0‖) = ½ log(δ0ᵀAᵀAδ0 / δ0ᵀδ0) → eigenvectors of AᵀA = right SVs of A.
- EGR/MEGR: (1/Δt)·log(‖M_t(x0+hv)−M_t(x0)‖ / ‖M_{t−Δt}(x0+hv)−M_{t−Δt}(x0)‖), averaged over runs.
- Amplitude h=500 (guidance range 100–10000; calibrate against nearby real states × [0.1,0.6]); diagnostic: if A-SVs don't grow from t=0, h was too large. Optimization window τ = 24h = Pangu timestep.
- Contrast: Lanczos-SV needs tangent-linear + adjoint; GenCast (diffusion) needs K stochastic trajectories; A-SV needs one initialization run.

## Data sources named
Daily 00 UTC DWD-ICON global analyses, Dec 2024–Feb 2025, northern hemisphere >35°N; temperature + U/V wind on Pangu's 13 pressure levels + surface (2m T, 10m U/V); total-energy (massless) measure; Pangu Weather 24h model (public); ICON analyses via DWD. Pseudocode in appendix; no repo link.

## Findings (numbers and facts, not vibes)
- Singular spectrum (96 SVs): outstanding leading SV; somewhat less than one third of values > 1 (growing inside the Krylov subspace); tail shows blocksize-8 steps.
- SV patterns physically sensible: near-surface temperature, upper-troposphere jet-stream winds (~75°N polar-front shift); global run concentrates perturbations in mid-latitudes, vanishes from tropics automatically.
- Growth: A-SVs grow right from the beginning; random Gaussian perturbations are heavily dampened by Pangu in the first 24h (latent-space bottleneck = implicit denoiser; no "butterfly effect" in Pangu per Selz & Craig 2023), take ~4 days to recover initial amplitude, and only organize into SV-like patterns after ~48h.
- Caveats: MEGR values small; SV growth rates similar across SVs (limited Krylov diversity); no skill-score comparison against NWP ensembles; ensemble construction (zero-mean ± pairs) left to future work; amplitude tuning heuristic.
- Paper's key lesson for GSE: ML models damp extremes — deterministic MLWP systematically understates tail weather events.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (weather lane): probabilistic game-day weather for outdoor venues — run public Pangu Weather (10,000× cheaper than IFS per paper), apply A-SV (blocksize 8, ~12 loops, K≈16 ± pairs), roll to game time, extract stadium-grid wind/temp/precip as an ensemble distribution, and feed the DISTRIBUTION (not the mean) into totals via GSE's wind elasticity — specifically to widen/narrow totals confidence and catch tail-wind games the deterministic forecast misses.
- TRUST-SIGNAL (weak/INFERENCE): spread–skill relationship on ensemble spread could become an honest totals-confidence signal, but only after the paper's un-run validation (spread–skill correlation on hold-out games) passes.

## Engine-actionable? (yes/no + one-line what)
Yes — but conditional: prototype A-SV ensembles for outdoor-stadium weather on one season and accept only if ensemble spread shows positive spread–skill correlation and tail-wind detection beats the deterministic baseline on totals residuals.
