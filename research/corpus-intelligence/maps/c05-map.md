# C05 Slice Map — Corpus Intelligence Program

**Coordinator:** c05 (10th-slice coordinator, mod-10 == 4)
**Date:** 2026-10-02
**Slice definition:** `find ~/workspace/vendor/Sports/docs -name "*.md" | sort | awk 'NR%10==4'` → **300 files**

## Inventory

| Item | Count |
|---|---|
| Files in slice | 300 |
| Files briefed (verified on disk, both naming conventions) | 300/300 |
| Briefs on disk | 312 (12 duplicates from inconsistent `.md.brief.md` vs `.brief.md` naming across readers; all 300 source files covered, 0 missing) |
| Readers deployed | 46 total (14 original @ 10 files + 32 density-wave @ 5 files) |
| Readers lost to inference-proxy 429s | 16 (all 160 files re-covered by density wave) |
| Empty/corrupt/binary files | 0 |
| Brief output root | `~/workspace/corpus-intelligence/briefs/c05/` (60 reader dirs: `c05-r02`…`c05-r28`, `c05b-r01`…`c05b-r32`) |

**Coverage verification method:** every path in `/tmp/c05-filelist.txt` matched against brief filenames under both naming conventions — 0 unmatched.

**Content mix of slice:** ~60% arXiv deep-read ledgers (numbered 0001–2609, ADAPT/ADOPT/REJECT verdicts with acceptance gates), ~25% engine ops/governance docs (calibration, CLV, props pipeline, release boards), ~15% research notes (DFS weeklies, sweeps, film/CV plans, strategy).

---

## Top 20 most engine-actionable findings

Ranked by leverage for the intelligence program (QB-behavioral + coaching-tendency tracks first, then highest-EV engine items). All numbers are from-file per reader briefs.

### Intelligence-program direct hits

1. **Pressure creation is the stable trench skill; sacks are noise** — `research/2026-10-01` advanced-analytics landscape + scrape-wave-2 (c05b-r31). FTN charting inside nflverse (free, CC-BY-SA 4.0) exposes `pressure_pct`, `cpoe`, `adot`, `succ` via NFL/Savant JSON API keys. The engine's OL/DL blindness has an **unblocked wiring path today**. Directly feeds Garrett's hierarchy layer 1 (OL). File refs: `2026-09-17-advanced-analytics-landscape.md`, `scrape-wave-2-results.md`.

2. **Share-core recipe for compositional target/carry modeling** — `data/CARDS_SHARE_CORE_WIRING.md` (c05b-r32). Masked Minka Dirichlet-multinomial share fit + Beta-Binomial×trials mixture pmf with closed-form mean `E[N]·s_i` and law-of-total-variance formula. Complete, test-pinned recipe for modeling target shares where teammate means sum to team total — **this is the trust-target/HHI machinery** the QB-behavioral track needs for Rodgers-style fixation quantification.

3. **De-vigged closing moneylines are already calibrated — skip recalibration** — `data/MARKET_CALIBRATION_2026-09-04.md` (c05b-r32). Over 5,281 NFL games 2006–2025: pooled Brier 0.2106 (CI [0.2050, 0.2172]), adaptive ECE 0.0126; isotonic/Platt/beta calibrators beat identity by ≤0.0005. Use the closing line as-is. One flag: the 6.5–9.5 pt favorite leaf drifted 8.7 pts train→test (65.86%→57.12%, n=576, ≈3.6 SE) — follow-up era-drift study owed on moderate-favorite covers.

4. **Coverage-responsibility transformer on NGS tracking** — ledger `0489` (c05-r05). Factorized-attention transformer predicts per-defender receiver matchups at **0.894 accuracy** (target defender 0.882 vs 0.764 nearest-defender heuristic). Derivative metrics directly portable: **"disguise rate"** (Spagnuolo's Chiefs most deceptive pre-snap) and double-coverage rate (1,179 = 5.5% of 21,567 2024 pass plays; Chase/Wilson/Lamb/Jefferson top-5). Reimplementation path on Big Data Bowl 2025 tracking fully specified. → SCHEME + coaching-tendency (DC disguise tendencies).

5. **NRI latent interaction graphs for coverage inference** — ledger `0408` (c05-r05). Unsupervised graph inference recovers planted graphs at 99.9% (springs)/82.1% (charged), beats LSTM on trajectory prediction. Coverage framing: man = defender↔receiver edges, zone = defender↔area edges. Acceptance gate: ≥90% synthetic edge recovery + classifies charted man/zone above majority baseline. Composes with 0489 (supervised frame assignments) into a tracking→coverage pipeline. → SCHEME.

6. **Week 1 run-identity thesis + QB pressure-elasticity flags** — `dfs/research/2026-09-13/deep/matchup-scheme-2026-09-13.md` (c05b-r13). 12 of 16 Week 1 2025 games went under; run identity holds early. Computable QB signals: pressure elasticity (e.g., Goff 92.1 clean vs 43.8 pressured) and scheme-fit friction ratios (Murray 14.7% career under-center vs 46.9% scheme rate). → QB-BEHAVIOR + COACHING.

7. **`qb-burden-index` / `role-volatility-index` are engine-ready features** — `docs/math/GSE_SHADOW_METRIC_EVIDENCE_REPORTS.md` (c05b-r20). Contextual QB burden (STABLE drift, PSI 0.08) and role instability (WATCH, PSI 0.21), each with explicit "not win probability" doctrines + reusable PSI watch/severe threshold template. → QB-BEHAVIOR.

8. **Mean-APY-gap trench feature cleared for wiring** — `reasoning/narrative-cross-validation-2026-09-27.md` (c05-r28). Two independent lanes cleared |r|≥0.08 and |slope|>se on 2025 holdout (lane B: player-slot-weighted, 98.09% slot resolution via jersey-to-GSIS crosswalk). Verdict STORED, g=0.2. Wire once a week-3 row exists. → OL.

9. **ARBY blend recipe as prior-shrink template** — `reasoning/x-sweep-2026-09-26-pm.md` (c05-r28). 65% prior season / 35% current, blended 65/35 with YPC-vs-defense term, 50/50 offense/defense split. Directly implementable prior-shrink template for trench/personnel priors + reusable margin-residualization vetting rule (|r|≥0.08 after residualizing on prior point margin). → OL/COACHING.

10. **DML harness for causal coaching analysis** — ledger `1318` (c05b-r11). Three-stage double-machine-learning (XGBoost max_depth 5 nuisance models, effect-coded treatment dummies, cross-fit by season) ports to nflverse play-by-play to make 4th-down go-vs-kick and personnel-grouping analyses **causal not associational**, with placebo-permutation refutation gate. → COACHING.

11. **Signal-ledger scale-fit discipline** — `docs/brain/signal-ledger-scale-fit.md` (c05-r17). Uniform weight=1 across keys on a 103x raw-SD spread was arithmetically real but semantically meaningless; fix is per-key −1..1 normalized scale + within-player evidence-scaled weights (target_share now outranks passing_epa 39:1, was ~1:100). Between-vs-within player correlation gap runs **4x–68x** — weighting on between-player r advertises power the data doesn't contain. Standing rule for all QB-behavioral features. → QB-BEHAVIOR.

12. **Bellcow XFP share × route participation × TPRR triple-screen** — `research/2026-09-19-dk-week2/deep/rb-phase2.md` (c05b-r27). Caught the Saquon route collapse (8 vs 14.5/g) and Javonte receiving-role change (.25 TPRR/14th vs .19/38th 2025) as genuine role change, not noise. Implement as weekly role-change detector — **this is the usage-trend layer** (Wilson 3-5-7 receptions pattern). → QB-BEHAVIOR (trust-target usage).

### Highest-leverage engine items (cross-track)

13. **Soft-Elo in Bradley-Terry ratings** — ledger `0540` (c05-r06). Fit temperature β by MLE mapping point-margin to win prob σ(β·m), then BT with soft targets instead of hard W/L: cut held-out Elo MAE **39–73%** (mean 45.9→17.9), narrowed 90% conformal intervals 39–70%. GSE's Elo/BT uses hard outcomes only — direct upgrade lane with built-in β* untrustworthiness diagnostic.

14. **L2-logistic ensemble over error decorrelation** — ledger `0797` (c05-r08). 15-LLM ensemble cut Brier 23% (0.313→0.241) weighting on error decorrelation (r_s=+0.482), not individual accuracy (r_s=−0.075); 9 of 15 models got negative weights used contrastively. Action: fit on GSE's source probabilities, keep biased sources as contrastive correctors.

15. **Conformal Risk Control for selective publishing** — ledger `0743` (c05b-r06). λ̂ = inf{λ : R̂_n(λ) ≤ α − (B−α)/n} guarantees expected posted-pick loss-rate ≤ α (validated 0.0987 vs α=0.1 over 1,000 trials). Fills the pick-selection/abstention gap — ~3 days including backtest. Composes with 1646 RCPS finite-sample version.

16. **Ising joint-probability layer for SGP pricing** — ledger `0278` (c05-r03). Pairwise exponential-family model gives coherent joint prices over correlated legs in O(M²); Kalshi audit: 39% of near-independent combo quotes violate the Fréchet upper bound (some by 5.7×); standalone Ising MM posted Sharpe 1.0049 (86.8% win, 3,973 trades). Direct machinery for pricing sportsbook same-game parlays.

17. **CMP-SAS Bayesian totals model** — ledger `0298` (c05-r03). Conway-Maxwell-Poisson with spike-and-slab dispersion priors beat Poisson on WAIC every season and on out-of-sample Ignorance in every market (2023/24 O/U 2.5 IGN 0.929 vs 0.974). Public repo `github.com/nzhang98/compoisson_goal` ready to port to NFL team points.

18. **BOA online expert aggregation** — ledger `1555` (c05-r12). Weekly-updating, regret-bounded ensemble combiner with tail-risk halving (max DD 0.08 vs 0.17 of best expert) on 30 years of data. ~1 engineer-week to layer over GSE sub-models with separate favorite/underdog aggregations.

19. **Informed-bettor market-efficiency clock** — ledger `1613` (c05-r12). Fitted r_inf(n) = 0.334 + 0.658·(n−1)/49 (R²=0.90): parametric model of line convergence for timing GSE's own releases and detecting favorite-herding bias. ~1 week port to NFL line history.

20. **KellyBoost growth-optimal XGBoost objective** — ledger `1744` (c05-r13). Custom loss −log(1+wᵀy) over picks + cash leg with CRRA fractional-Kelly dial; two-stage LGBM+optimizer beat full-Kelly 0.82 vs 0.47 log G OOS. Fills GSE's missing bankroll layer. (Pairs with 0288 multivariate Kelly SQP, 1370's principled λ = t/(t+t₀) fractional rule, and 1218's crash-aware Kelly.)

---

## Cross-file patterns

### Metrics that recur
- **Brier score / log-loss / Ignorance** as the universal currency across ~40 ledgers; ECE and its variants (adaptive ECE, selectedSliceEce) second.
- **Kelly fractions** appear in 7 files (0288, 1208, 1218, 1228, 1370, 1479, 1744) — the staking lane is the most redundantly covered method family in the slice.
- **PSI (Population Stability Index)** for drift monitoring recurs in engine docs (qb-burden 0.08 STABLE / role-volatility 0.21 WATCH template).
- **Conformal prediction** family (CQR, CRC, RCPS, CPIT, SA-MSCP, EnbPI) is the dominant uncertainty paradigm — 8+ files.
- **Elo/Bradley-Terry/Massey/Colley/Glicko** rating inventory recurs; gaps identified: PageRank-style centrality (0094), soft targets (0540), SBM tier priors (0982).

### Contradictions between sources
- **Fixed vs fitted ensemble weights:** 0906 (Elo+Transfermarkt) finds estimated weights never beat fixed 0.5/0.5; 0797 finds fitted L2-logistic weights cut Brier 23%. INFERENCE: weight-fitting wins when sources have diverse, decorrelated errors; fixed splits win when combining one model + one market. Test both per lane.
- **Post-hoc calibration:** 1088 warns post-hoc isotonic *increased* calibration error up to +34 pts on small slices (ban it there); 1521 CPIT and c05b-r32's market doc show calibrators add nothing (≤0.0005) on large, already-calibrated samples. Rule: calibrate only with adequate slice N; never recalibrate the closing line.
- **Pooled vs segmented performance:** engine's pooled CLV 23.2% vs MLB TOTALS 57.76% (n=438) segmentation (c05-r24); pooled "public backs losers" 5.8pp gap vanishes under favorite-identity stratification (c05b-r02). Standing lesson: pooled metrics manufacture phantom edges — always stratify.
- **Engine's own `confidence`:** measured anti-predictive at top (conf 80+ claims 0.8663 vs realizes 0.5191, z=−10.7) across multiple docs (c05b-r16, c05b-r14, c05-r17) — unanimous verdict: stop calibrating confidence; build divergence-vs-market flags instead.

### Methods that compose
- **tracking → coverage → calibration pipeline:** 0580 NETS embeddings → 0408 NRI / 0489 supervised coverage → 0439-style state-conditioned calibration (noted by c05-r05).
- **Abstention stack:** 0743 CRC (expectation guarantee) + 1646 RCPS (finite-sample guarantee) + 1026 CSR interval-width reject rule + 1004 structured leg-level abstention — a complete selective-publishing architecture.
- **Kelly stack:** 1744 KellyBoost (training objective) + 0288 multivariate SQP (portfolio sizing) + 1370 λ=t/(t+t₀) (fractional rule) + 1218 crash-aware scaling + 1626 Bayes-Kelly miscalibration monitor — full bankroll lane.
- **DGM archive (2086)** sits on the 2082/2085 discovery harness; **2165 SINDy+conformal** pairs with 2163/2164; **2148 drawdown policy** composes with 2144/2147 (noted by c05-r16).
- **1168 adaptive market blending** (0.5 top-tercile / 0.1–0.15 bottom-tercile) composes with 0906's fixed 0.5 blend as its fallback.

---

## Gaps: what this slice doesn't cover that the intelligence program needs

1. **QB-behavioral depth is nearly absent.** Only 4 files touched QB behavior (signal-ledger scale fit, qb-burden-index, Week-1 pressure elasticity, share-core). Nothing on: INT-situational splits (Garrett's Watson question — when/why he throws picks), run-vs-throw game-type classification, trust-target time series beyond HHI, QB-vs-scheme-fit friction beyond one Murray datapoint, backup-QB behavioral profiles. The QB track built tonight (17 seasons, 741 QB-seasons) has **no corpus counterpart in this slice** — it is net-new capability.

2. **Coaching-tendency tables are absent.** Only 1318 (DML causal harness), 1685 (timeout effects), and Week-1 matchup notes. No coordinator YoY tendency tables, no play-calling fingerprints, no HC/OC/DC tenure-mapped data. The coaching track's Monken/McCarthy/Shanahan/McVay/Fangio/Joseph profiles have **no corpus counterpart here** either.

3. **OL layer is thin.** Two files (mean-APY-gap, pressure_pct wiring path). No OL-specific grading metrics, no unit-cohesion measures, no injury-adjusted OL strength — despite OL being hierarchy layer 1.

4. **Trust-signal (social/video) intake has zero coverage.** No files on social sentiment, video-derived trust signals, beat-writer aggregation, or viral-moment detection. The Rodgers "this mfer sucks ass" class of signal — the one that called tonight's game — has no method anywhere in this slice. This is the biggest alpha gap.

5. **SCHEME coverage is narrow.** Only coverage inference (0408/0489) and target-share composition (share-core). No run-scheme taxonomy (zone/gap/power), no personnel-grouping tendency data, no motion/shift tracking methods, no blitz-design classification.

6. **No defensive-line / pass-rush behavioral modeling** beyond pressure_pct availability. Watt-style individual matchup modeling (the one prop that hit tonight) has no method file.

7. **Stale-data discipline is documented but not enforced in-code** in several places (c05-r24, c05-r17, c05b-r27 all flag point-in-time numbers presented as current truth; the 2026-10-01 audit note says v5.3.0's five calibration moves are NOT implemented despite shipping).

---

## Notes for the parent orchestrator

- **Rate-limit reality:** 16 of the first 30 readers died to `inference_proxy_rate_limited` 429s. The fix that worked: staggered waves of 10–12 readers (waves 1–4 all completed clean, 0 casualties). Recommend other coordinators use ≤12 concurrent readers.
- **Brief naming inconsistency:** readers used both `<name>.md.brief.md` and `<name>.brief.md`. Coverage was verified against both patterns (300/300). Suggest normalizing in post-processing.
- **Ledger verdicts are trustworthy triage:** the arxiv-deep ledgers carry ADAPT/ADOPT/REJECT verdicts with numeric acceptance gates — readers preserved them verbatim. REJECTs were still briefed (finance lecture notes, CV calibration, badminton datasets) so nothing was silently dropped.
- **Integrity flags preserved:** 1636 (Olympic STGCN-LSTM) REJECTED on hallucinated Lang Ping table + wrong half-life math; 0208 carries a citation mismatch (Zhang et al. 2024 keypoint claim maps to an underwater-imaging paper); 0509 test>train accuracy (suspicious split); 0540 table/text Spearman disagreement. All recorded in briefs.
- **Two stale-identifier flags for Garrett:** `brand-guidelines.md` lists X handle @GalaxySportsAI (MEMORY says @GalaxySportsHQ) and mandates first-person "I" vs the approved "we" team bio (c05-r17).
