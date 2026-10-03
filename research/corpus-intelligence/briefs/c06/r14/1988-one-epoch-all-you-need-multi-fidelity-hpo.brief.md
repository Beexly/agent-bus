# arxiv-program/research/2026-09-21/arxiv-deep/1988-one-epoch-all-you-need-multi-fidelity-hpo.md

## What it is (1-2 sentences)
Ledger digest of Egelé et al. (2023) "Is One Epoch All You Need For Multi-Fidelity Hyperparameter Optimization?" (arXiv:2307.15422). Verdict: ADAPT — the trivial 1-epoch screen + top-K full-train tournament exposes whether fancy multi-fidelity schedulers buy anything; adopted as the mandatory baseline every HPO scheduler must beat.

## Key metrics/methods (formulas where given, else "not specified")
- Baseline: random search over HP configs; evaluate each at minimum fidelity (1 epoch); select top-K=3; train only those to max fidelity (100 epochs). No equations stated.
- GSE analog: for neural models, 1-epoch screen + top-3 full train; for GBDTs, N=50 trees (or 2-season fidelity) screen + top-3 full train; log epochs/season-fits consumed vs final log-loss.
- Policy: no multi-fidelity scheduler (FastBO, halving, ASHA) adopted unless it beats this baseline on both final log-loss and total compute.

## Data sources named
HPOBench (Naval Propulsion tabular regression detailed in main text), LCBench, YAHPO-Gym, JAHS-Bench-201 (CIFAR-10, Colorectal Histology, Fashion-MNIST slices).

## Findings (numbers and facts, not vibes)
- Final test RMSE of 1-Epoch ≈ 100-Epochs policy (curves converge to the same point), but 1-Epoch uses 40× fewer training epochs: 200×1 + 3×100 = 500 epochs vs 200×100 = 20,000 epochs.
- SHA uses ~10× fewer epochs than 100-Epochs but still 4× MORE than 1-Epoch; Hyperband slightly more than SHA; SHA/HB/LCE "do not differ significantly from each other" in final RMSE — all similar, all costlier than the trivial baseline.
- Mechanism: learning curves show a few dominant curves; good vs bad models separable in the first epoch; ranking of GOOD models stabilizes after ~5 epochs while bad models stay noisy.
- Only one prior study (PASHA) included a similar baseline, with similar findings.
- Adoption gate in ledger: on GSE's tabular task, the min-fidelity screen's top-3 must contain a config within 0.002 log-loss of the full-search best while using ≤10% of the fits; reject the transfer claim if min-fidelity/full-fidelity rank correlation < 0.5 for GBDTs or top-3 misses best by >0.005 log-loss. Effort ~1 day.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Mandatory cheap HPO baseline discipline: every multi-fidelity scheduler must beat 1-epoch/top-K before adoption (OTHER)

## Engine-actionable? (yes/no + one-line what)
Yes — add the 1-epoch (or 50-tree / 2-season) screen + top-3 tournament to GSE's HPO harness on nflverse ATS-cover configs, gated on the rank-stability and log-loss criteria above.
