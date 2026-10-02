# arxiv-program/research/2026-09-21/arxiv-deep/0023-experimental-assortments-for-choice-estimation-and.md
## What it is (1-2 sentences)
Deep read of Yu/Ma/Zhao (2026, arXiv:2602.16137v2): a nonadaptive combinatorial assortment design using O(log n) experiments for choice-model estimation plus an information-theoretically optimal boost-factor algorithm for identifying nested-logit nest partitions, deployed live at Dream11 (Indian fantasy-sports platform, 70M users, 21 days). Verdict in file: ADAPT — strongest "choice among contest types" methodology seen; adapt to DFS contest selection and pick-em menu modeling.
## Key metrics/methods (formulas where given, else "not specified")
- Design: unique base-b encoding per item, assortments S_{ℓ,c} = {i : digit ℓ of i ≠ c}; guarantees every ordered pair (i,j) appears with i present and j absent; O(log n) assortments (lower bound Ω(log n) even adaptively).
- Boost factor BF(i,S) = P(i,S)/P(i,[n]); under nested logit BF(i,S) = Mult(n(i),S)·BF(0,S) with item-independent nest multiplier; finite-sample version uses pooled two-proportion z-statistic with ±√(3 log(2/δ)) thresholds.
- Nested logit: P(i,S) = P(n(i)|S)·P(i|n(i),S); nest weight V_n(S) = (Σ v_i^{1/γ_n})^{γ_n} (equation forms flagged uncertain — PDF extraction mangled subscripts).
- Soft RMSE = sqrt(Σ_{S,i}(π−π̂)² / Σ_S(|S|+1)); evaluation also by Rand index vs. true nest partition.
## Data sources named
Synthetic benchmarks (1,440 Berbeglia et al. 2022 instances, n=10; well-specified n=16 with 500 random MC/Exponomial/MNL ground truths; nest-ID: 500 random nested-logit ground truths); SFWork public dataset (Koppelman & Bhat 2006, 6 commute options, N=5,000); Dream11 proprietary deployment (72 contest types, 14 experimental assortments, 70M users 50/50 split, May 20–Jun 10 2025).
## Findings (numbers and facts, not vibes)
- Well-specified Markov Chain: up to 16.9% soft-RMSE reduction vs 9 randomized assortments (95% CIs separated); misspecified: up to 5.5% at small N (300–750).
- Nest-ID pipeline vs Benson et al. (2016): up to 46% RMSE_soft reduction, mostly from the experiment design (size≈n/2 assortments reveal richer substitution info).
- Dream11: data-driven nests lowest OOS RMSE_soft in first half of horizon; both nested-logit variants beat MNL; identified nests economically interpretable (Winner Ratio 0.50/Prize Ratio 0.83 contests grouped despite different entry fees).
- SFWork: nested logit no better than MNL; Markov Chain dominated — method misleads when the world isn't nested.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: choice-modeling / contest-substitution machinery — no existing GSE work covers MNL/nested logit, assortment-experiment design, or contest-substitution; ports to DFS contest-type substitution clustering (entry-share shifts when menus change) and pick-em/content slate A/B design (binary-encoding design over n variants, 2⌈log2 n⌉ cells).
## Engine-actionable? (yes/no + one-line what)
yes — implement the binary-encoding assortment generator + boost-factor nest-ID for DFS contest-type substitution analysis (offline batch, weekly re-run) and gated on reproducing the synthetic Rand-index claim first.
