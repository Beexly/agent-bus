# arxiv-program/research/2026-09-21/arxiv-deep/1480-local-temperature-scaling-for-probability.md
## What it is (1-2 sentences)
Extends temperature scaling from a single global scalar to a spatially-varying *local* temperature field T(x) predicted by a network from (logit map, image), for multi-label semantic segmentation. LTS beats global TS on ECE/MCE/SCE/ACE across COCO, CamVid, and LPBA40 with statistical significance; because T(x) > 0, class order is preserved — calibration gains come with accuracy unchanged. Includes an entropy-theoretic proof that TS-style NLL minimization counteracts NLL's overconfidence pressure.
## Key metrics/methods (formulas where given, else "not specified")
- Q̂ᵢ(x, Tᵢ(x)) = max_l σ_SM(zᵢ(x)/Tᵢ(x))(l); Tᵢ(x)∈R⁺ from network H(α, zᵢ, Iᵢ, x); T>1 damps overconfidence, T<1 boosts underconfidence, T→∞→uniform
- Baselines: uncalibrated, global TS, IBTS (per-image T), isotonic, vector scaling, ensemble TS, Dirichlet calibration; MMCE and focal loss joint-training, each +LTS post-hoc
- Theorem 4 (Appx E): when overconfident (entropy < cross-entropy), NLL minimization w.r.t. TS params ≡ maximizing entropy under the overconfidence constraint; underconfident ⟹ NLL coincides with entropy minimization; equilibrium at optimal T
- Calibration metrics: ECE/MCE/SCE/ACE, 10 bins, All/Boundary/Local regions; Mann-Whitney U + Benjamini/Hochberg FDR 0.05
## Data sources named
COCO (FCN+ResNet-101, 1000 test, mIoU 63.7%); CamVid (Tiramisu, 233 test); LPBA40 (3D U-Net, 40 test); VoteNet+ multi-atlas (640 test)
## Findings (numbers and facts, not vibes)
- COCO ECE All (%): UC 12.44 → TS 12.53 → IBTS 11.92 → LTS 10.04
- CamVid ECE All: UC 7.79 → TS 3.45 → IBTS 3.63 → LTS 3.40; Boundary ECE: UC 22.79 → LTS 11.80
- LPBA40 ECE All: UC 5.58 → TS 1.43 → LTS 0.90; VoteNet+ ECE: UC 7.26 → TS 5.07 → IBTS 2.77 → LTS 0.71
- Joint training: MMCE 4.45 → MMCE+LTS 4.15; focal loss 3.47 → FL+LTS 3.13 (CamVid ECE)
- Downstream MAS label fusion Dice: 81.19 (UC) → 81.27 (LTS); still far from theoretical upper bounds; MCE stays high everywhere (boundary annotation noise)
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: calibration lane — context-conditional temperature scaling for engine win probabilities: fit small regressor T(c)>0 on (sport, market type, days-to-kickoff, odds bucket, model version) minimizing val-season NLL; deployed p = σ(z/T(c)) preserves pick ranking (positive scaling preserves order) — pure calibration gain; require significant ECE/SCE/ACE reduction vs global TS per context slice; fallback to global TS if T(c) collapses to constant
## Engine-actionable? (yes/no + one-line what)
Yes — implement context-conditional T(c) on one hold-out NFL season vs global TS; adopt if statistically significant ECE/SCE/ACE improvement with significance (paired test, FDR 0.05); improvement: bin-wise/context-mixture temperature + additivity test with grouping-loss calibration.
