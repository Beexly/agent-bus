# arxiv-program/research/2026-09-21/arxiv-deep/0441-a-statistical-audit-of-physical-ai.md

Source paper: Navasardyan & Davtyan (2026), arXiv:2608.25940v2. Ledger verdict: ADAPT — the physical-AI domain doesn't transfer; the benchmark-redundancy audit machinery does.

## What it is (1-2 sentences)
A statistical audit of redundancy across 12 physical-AI benchmarks: pairwise Spearman correlations, leave-one-model-out ridge predictability (uniqueness = 1 − LOO R²), greedy utility forward-selection U(b|S) = g(b)·(1 − R²(b∼S)), and Bradley–Terry benchmarks-as-judges ranking. The ledger ports the full machinery to pruning GSE's own metric catalog and to ranking GSE engine variants instead of averaged leaderboards.

## Key metrics/methods (formulas where given, else "not specified")
- Redundancy: pairwise Spearman ρ on z-scored columns; average-linkage hierarchical clustering on distance 1−ρ.
- Predictability: ridge regression of each benchmark on the other 11, LOO cross-validated R²; uniqueness = 1 − LOO R².
- Greedy utility (eq. 1): U(b|S) = g(b)·(1 − R²(b∼S)), g(b) = Gini coefficient of the score distribution; R²(b∼S) = OLS fit of candidate on selected set; product form (failure of either criterion → zero utility).
- Bradley–Terry (eq. 2): P(i≻j) = σ(r_i − r_j) by MLE with L2 penalty 1e-3; Elo_i = 1500 + 400·r_i/ln10.
- Shared-capability analysis: single principal component, residualization on a general-capability axis.

## Data sources named
Registry of 51 physical-AI benchmarks and 152 models from model cards, papers, official blogs (final: 51 models × 12 benchmarks, models released 2024–2026 from 15 providers); 12 benchmarks listed with item counts (VSI-Bench, EmbSpatial, RefSpatial-Bench, Where2Place, ERQA, CV-Bench, SAT, RoboSpatial, RealWorldQA, OmniSpatial, MindCube, BLINK); project home https://metric-ai-lab.github.io/metabench/.

## Findings (numbers and facts, not vibes)
- Mean pairwise Spearman ρ = 0.487 (all positive); substitute pairs >0.8: EmbSpatial↔CV-Bench ρ=0.876 [0.78,0.93] n=49; Where2Place↔RefSpatial-Bench ρ=0.860 [0.73,0.93] n=50. BLINK most isolated.
- LOO predictability: most redundant — Where2Place R²=0.727 (uniqueness 0.273), RefSpatial-Bench 0.721 (0.279), ERQA 0.706 (0.294); least predictable — RealWorldQA 0.319 (0.681), RoboSpatial 0.351 (0.649), BLINK 0.378 (0.622). Median benchmark has ~half its variance reconstructible from the other 11.
- Collapsing the two substitute pairs moves 22 of 51 models by ≥3 places under equal weighting (MiMo-Embodied-7B −9, GPT-4o +9, Claude-Sonnet-4 +8).
- Minimal suite: RefSpatial-Bench → MindCube → VSI-Bench → BLINK reaches 78.5% of all-12 utility with 4 of 12; final four benchmarks add only 4.4%.
- One PC explains 55.2% of suite variance and tracks general vision-language capability at Spearman ρ=0.952; residualizing halves mean pairwise correlation 0.487 → 0.250 and drops pairs >0.5 from 34 of 66 to 6.
- Suppression: VSI-Bench and BLINK uncorrelated in raw scores (ρ=0.002) but −0.363 in residuals.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: pairwise-correlation + LOO-predictability audit of GSE's own metric suite (EPA/play vs success rate vs DVOA vs QBR likely cluster) to find substitute pairs; collapsing pairs and showing rank displacement justifies de-duplicating the published edge sheet.
- OTHER: Bradley–Terry metrics-as-judges as an alternative to averaged leaderboards for comparing GSE engine variants.

## Engine-actionable? (yes/no + one-line what)
Yes — run the GSE metric-redundancy audit on team×metric matrices from gse-lab CSVs (2015–2025), greedy forward-select a ≤6-metric edge-sheet core, and adopt it if it keeps ≥95% of the full suite's out-of-sample predictive correlation on 2023–2025.
