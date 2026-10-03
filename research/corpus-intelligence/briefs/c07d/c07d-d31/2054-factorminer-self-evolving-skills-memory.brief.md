# arxiv-program/research/2026-09-21/arxiv-deep/2054-factorminer-self-evolving-skills-memory.md
## What it is (1-2 sentences)
A full-paper read (ar5iv, ~12,900 words) of FactorMiner (arXiv:2602.14670v2, Wang, Xu, Zhang et al., 2026): a self-evolving financial factor-mining agent with a modular skill architecture (60+ operator library + multi-stage validation pipeline) and a structured experience memory (successful templates + forbidden regions), running a retrieve→generate→evaluate→distill "Ralph Loop" across sessions. The paper's core claim is that the memory keeps library redundancy low ("Correlation Red Sea" framing) as the factor library scales. Verdict in file: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Absolute-IC summary metrics: |E[IC_t]| and |E[IC_t]| / std(IC_t) (ICIR on absolute IC).
- Redundancy measure: avg |ρ| (mean absolute pairwise correlation across the factor library).
- Protocol: Top-40 factors selected ONCE on CSI500-2024, frozen, evaluated out-of-sample on 2025 across CSI500, CSI1000, HS300, and crypto. Factor selection via train-2024/test-2025 Lasso and XGBoost.
- Combination: frozen Top-40 with equal-weight (EW) and IC-weighted (ICW); weights/signs from 2024.
- Baselines: random exploration (RF), Alpha101 (Classic + Adapted), GPLearn, AlphaForge, AlphaAgent.
- Skill: curated 60+ financial operator library; validation pipeline = IC screening → correlation checking → deduplication → full validation. Upgradable without retraining the agent.
- Experience memory: successful patterns (templates consistently passing thresholds) + forbidden regions (factor families highly correlated with existing library). Mining direction chosen by how candidates COMPLEMENT the library (global-library perspective), not by individual quality.
- Ralph Loop: retrieve (patterns from memory) → generate (invoke skill with priors) → evaluate (parallel validation) → distill (outcomes back into memory).
- Assumptions stated: 60+ operator library is sufficiently expressive; distilled patterns transfer across sessions/markets; parallel validation is unbiased; correlation-to-library is the right novelty gate.
- GSE improvement spec: SIGNED-IC memory (store per-season signed IC trajectories; forbid regions whose signs flip across regimes); skill versioning with rollback (re-run memory-template regression suite when the operator library is upgraded; auto-rollback on degradation).
- Reproducible test: nflverse 2009–2025; Ralph-Loop mining vs. session-independent mining (same budget) on 2009–2019; test 2020–2025; metrics = accepted-signal count, avg |ρ| vs. zoo, test RankIC, redundancy growth curve as library scales.
- Acceptance gate: ADAPT→build if Ralph-Loop mining keeps avg |ρ| ≤ 0.35 as the zoo grows past 100 signals while session-independent mining's |ρ| rises above 0.5, with test RankIC at parity or better. REJECT if memory provides no scaling benefit (redundancy grows identically with and without it).

## Data sources named
- Datasets: CSI500, CSI1000, HS300 (Chinese equities), crypto. Selection 2024 / evaluation 2025.
- Features: OHLCV-derived market fields. Target: forward returns (intraday prediction mentioned in keywords).
- References within file: 2043-class (AlphaForge), 2051-class (AlphaAgent) methods; complements 2048 (MinervaScore as the skill's validation stage) and 2053 (AlphaPROBE's DAG as the memory's structural index). No code repo stated ("None stated — no repo URL found in text").

## Findings (numbers and facts, not vibes)
Table 1 (2025 out-of-sample; Factor Library Top-40; IC % / ICIR / avg |ρ|):
- CSI500: FactorMiner **8.25 / 0.77 / 0.31** vs AlphaAgent 5.90/0.46/0.32, GPLearn 6.04/0.43/0.44, Alpha101-Adapted 5.06/0.43/0.21, AlphaForge 4.48/0.38/0.36.
- CSI1000: FactorMiner **7.78 / 0.76 / 0.30** (best IC/ICIR).
- HS300: FactorMiner **7.46 / 0.38 / 0.31** (best).
- Crypto: FactorMiner **3.82 / 0.28 / 0.25** (best; cross-asset generalization).
- Combination (EW IC/ICIR, CSI500): FactorMiner 14.95 / 1.29 vs next-best Alpha101-Adapted 11.53 / 0.86.
- Redundancy: FactorMiner avg |ρ| ≈ 0.30–0.31 — near the low-redundancy RF floor (0.07–0.13, random noise, not useful) while GPLearn hits 0.44–0.45 (the "Red Sea"). Alpha101-Adapted actually lower at 0.21 on CSI500 but with much weaker IC (5.06).
- Leakage flag: Top-40 selected on CSI500-2024 then tested on 2025 INCLUDING CSI500 — same-market selection/evaluation overlap; cross-dataset results (CSI1000/HS300/crypto) are the cleaner read.
- Sign-instability flag: IC values are absolute-value summaries (|E[IC]|) — sign flips hidden; a factor flipping sign year to year still scores.
- No portfolio backtest with costs (library/combination metrics only); crypto dataset details thin; the 60+ operator library is hand-curated (the "self-evolving" claim sits atop a fixed human prior).
- File's own assessment: the skill + experience-memory + Ralph Loop architecture is "the most operationally practical self-evolving miner in this lane"; solves the exact failure mode a growing signal library hits.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the global-library-perspective design (choose mining direction by how candidates complement the zoo, tasking the generate step with filling low-coverage regions of the zoo's correlation matrix) is a direct mechanism for the trust-target/signal-intake problem — it turns "add another signal" into a portfolio-filling operation with a measured novelty gate (correlation-to-library), preventing the trust-signal set from degenerating into many correlated views of the same underlying information. Relevant program: trust-target intake / total-signal wiring.
- OTHER (calibration/sizing): the forbidden-regions mechanism (families with |ρ| > 0.7 vs. zoo) and the avg |ρ| ≤ 0.35 acceptance gate give a quantitative redundancy thermostat for any multi-signal composite (e.g., a GSE pick-composite or projection ensemble), with the paper's RF floor (0.07–0.13) as a sanity bound that near-zero correlation means noise, not diversification. Relevant program: calibration/sizing — portfolio construction of signals, not just picks.
- OTHER (engine memory / discovery loop): the Ralph Loop (retrieve→generate→evaluate→distill) plus the signed-IC-memory improvement experiment (store per-season signed IC trajectories, forbid sign-unstable regions across regimes) is the memory discipline for the MOVE-37 discovery lane — every lab run becomes a retained/distilled case rather than a forgotten trial. This directly composes with 2088 (DS-Agent's CBR case bank) as the schema for what gets retained. Relevant program: MOVE-37 execution lab / continuous-learning engine.
- QB-BEHAVIOR (via 2048 MinervaScore complement): the file states the skill's validation stage should be the MinervaScore Seal — so FactorMiner's architecture is the container and per-signal quality gates (MinervaScore) slot inside it; any QB-behavioral signal discovered by the loop must pass that Seal, keeping the pipeline auditable per the paper's interpretability requirement. Relevant program: QB-behavioral profiles via the discovery loop.

## Engine-actionable? (yes/no + one-line what)
Yes — package the mining pipeline as an invocable skill (sports operator primitives: EPA, success rate, rest, travel, line moves, weather; validation = RankIC screen → correlation vs. zoo → dedup → walk-forward + MinervaScore Seal) with a versioned experience memory running the Ralph Loop per session, gating on avg |ρ| ≤ 0.35 as the zoo passes 100 signals; estimated ~2 weeks, mostly reorganization of existing code.
