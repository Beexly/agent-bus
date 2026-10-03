# arxiv-program/research/2026-09-21/arxiv-deep/1582-ens10-dataset-postprocessing-ensemble-weather-forecasts.md
## What it is (1-2 sentences)
Ledger for arXiv:2206.14786 (Ashkboos et al. 2022), ENS-10 — a standard public benchmark dataset for ML ensemble post-processing with baselines and a novel extreme-event metric (EECRPS). Verdict ADAPT — the differentiable-CRPS Gaussian recipe and EECRPS metric are directly adoptable for GSE's kickoff-weather ensemble correction lane.
## Key metrics/methods (formulas where given, else "not specified")
- Gaussian closed-form differentiable CRPS (Baringhaus–Franz identity): CRPS(F,x) = σ[2ψ((x−μ)/σ) + ((x−μ)/σ)(2φ((x−μ)/σ) − 1) − 1/√π].
- EECRPS(F,y) := |EFI(i,j)| × CRPS(F,y), where EFI (Extreme Forecast Index) ∈ [−1,1] measures ensemble deviation from climatology (|EFI| 0.5–0.8 unusual, >0.8 very unusual).
- Baselines: raw ensemble, EMOS (min–max normalized), MLP (per-grid-point), LeNet-style CNN, U-Net, per-pixel transformer (self-attention over ensemble members); training Adam, lr 1e-5 (transformer 1e-3), 10 epochs, single A100.
- Improvement experiment: train Gaussian baselines with EECRPS-weighted loss (optimize what extreme games need); replace Gaussian output head with spline-flow head (from [1580]) and test whether non-Gaussian outputs close the wind-speed gap.
## Data sources named
ENS-10: ECMWF IFS reforecasts (Cy43r1/Cy45r1, 91 vertical levels, 0.5° lat/lon), 10 ensemble members, lead times 0/24/48 h, 1998–2017 (20 years), ~3 TB, CC BY 4.0; ground truth ERA5. Splits: train 1998–2015, test 2016–2017. (Paper references Python interfaces for download/train/compare.)
## Findings (numbers and facts, not vibes)
- CRPS, 10-ENS: T2m — raw 0.733, EMOS 0.749 (worse), MLP 0.672, LeNet 0.659, U-Net 0.644, Transformer 0.626 (best, ~15% under raw); T850 — Transformer 0.665 best; Z500 — LeNet 74.41 best (raw 78.24).
- EECRPS, 10-ENS: T2m raw 0.25 → Transformer 0.214 best; Z500 LeNet 27.30 (raw 28.78); trends match CRPS (extreme-event skill tracks average skill; no extreme-event breakthrough).
- 5-ENS vs 10-ENS: all models degrade with 5 members (e.g., T2m Transformer 0.649 vs 0.626) — member count matters.
- Training cost: 0.75 h EMOS, 0.25 h MLP, 1.25 h LeNet, 1 h U-Net, 1 h transformer on one A100.
- Only three variables baselined (Z500, T850, T2m) — no wind speed, no precipitation, the two variables GSE needs most; Gaussian outputs can't represent multimodal precipitation or bounded quantities; 48 h global benchmark ≠ stadium-scale nowcasting; model cycle changes (Cy43r1/Cy45r1) mean reforecasts can't be pooled across eras.
- Acceptance gate specified: ADOPT if any NN baseline cuts CRPS ≥ 10% vs raw on wind speed AND EECRPS ranking matches CRPS ranking; REJECT if Gaussian-CRPS post-processing can't beat raw on wind speed (fall back to flow/LGBM recipes, [1580]/[1581]).
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- EECRPS metric: score weather edges on extreme games (blizzards, hurricanes), not just average — extreme games are where weather edges pay (OTHER)
- Per-pixel transformer strongest on temperature fields, LeNet on geopotential — architecture choice per variable (OTHER)
## Engine-actionable? (yes/no + one-line what)
Yes — adopt EECRPS-style extreme-weighted scoring on GSE's NFL stadium weather models and train the MLP→LeNet→transformer baseline ladder with the differentiable Gaussian-CRPS recipe on GEFS reforecasts for 30 stadium neighborhoods (not the 3 TB dataset).
