# arxiv-program/research/2026-09-21/arxiv-deep/2054-factorminer-self-evolving-skills-memory.md

## What it is (1-2 sentences)
Full-paper read (ar5iv HTML, ~12,900 words) of FactorMiner (arXiv:2602.14670v2, Yanlong Wang, Jian Xu, Hongkang Zhang et al., 2026): a self-evolving agent for financial alpha discovery built on a modular skill architecture (60+ financial operator library, multi-stage validation pipeline) plus a structured experience memory (successful templates + forbidden regions), run through a retrieve→generate→evaluate→distill "Ralph Loop". Ledger verdict ADAPT — it solves the "Correlation Red Sea" (a factor zoo choking on its own redundancy as it scales), the exact failure mode GSE's growing signal library will hit.

## Key metrics/methods (formulas where given, else "not specified")
- Absolute-IC summaries: |E[IC_t]| and |E[IC_t]|/std(IC_t) (ICIR-style); avg |ρ| as the redundancy measure.
- Top-40 factors selected once on CSI500 (2024), frozen, evaluated out-of-sample on 2025 across four datasets (CSI500, CSI1000, HS300, crypto); factor combination via frozen Top-40 equal-weight (EW) and IC-weighted (ICW) (weights/signs from 2024); factor selection via Lasso and XGBoost on train-2024/test-2025.
- Ralph Loop: retrieve relevant patterns from memory → generate (invoke skill with priors) → evaluate (parallel validation) → distill outcomes back into memory. Generation is steered by a global-library perspective: choose mining direction by how candidates complement the existing library (correlation-to-library as novelty gate), not individual quality.

## Data sources named
CSI500, CSI1000, HS300, crypto datasets (2024 train / 2025 test); 60+ hand-curated financial operator library over OHLCV-derived market fields; baselines: random exploration (RF), Alpha101 (Classic + Adapted), GPLearn, AlphaForge, AlphaAgent. No code repo stated in the paper.

## Findings (numbers and facts, not vibes)
- Factor Library Top-40, 2025 out-of-sample (IC % / ICIR / avg |ρ|): CSI500 — FactorMiner **8.25 / 0.77 / 0.31** vs. AlphaAgent 5.90/0.46/0.32, GPLearn 6.04/0.43/0.44, Alpha101-Adapted 5.06/0.43/0.21, AlphaForge 4.48/0.38/0.36. CSI1000 — 7.78/0.76/0.30 (best IC/ICIR). HS300 — 7.46/0.38/0.31 (best). Crypto — 3.82/0.28/0.25 (best; cross-asset generalization).
- Combination (EW IC/ICIR, CSI500): FactorMiner 14.95/1.29 vs. next Alpha101-Adapted 11.53/0.86.
- Redundancy: FactorMiner avg |ρ| ≈ 0.30–0.31 vs. GPLearn 0.44–0.45 (the Red Sea); random-noise RF floor is 0.07–0.13.
- Leakage notes from the ledger: Top-40 selected on CSI500-2024 then evaluated on 2025 *including CSI500* (same-market overlap; the cross-dataset results are the cleaner read); absolute-value IC summaries hide sign instability across years; no portfolio backtest with costs (library/combination metrics only); the "self-evolving" claim sits atop a fixed hand-curated operator library.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the skill's multi-stage validation pipeline (IC screening → correlation checking → deduplication → full validation) with standardized evaluation protocols is a template for GSE's MinervaScore-style signal validation.
- OTHER (signal-zoo management): the global-library perspective — mining to fill low-coverage regions of the zoo rather than maximizing individual RankIC — is directly portable to GSE's growing signal library as the antidote to the Correlation Red Sea.

## Engine-actionable? (yes/no + one-line what)
Yes — package GSE's mining pipeline as an invocable skill (sports operator primitives: EPA, success rate, rest, travel, line moves, weather; multi-stage validation ending in the MinervaScore Seal) with a persistent versioned experience memory (successful templates + forbidden regions at |ρ| > 0.7 vs. zoo), running the Ralph Loop per mining session; ADAPT gate: avg |ρ| ≤ 0.35 as the zoo passes 100 signals while session-independent mining's |ρ| exceeds 0.5, at test-RankIC parity or better.
