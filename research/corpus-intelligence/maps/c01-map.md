# c01 Slice Map — Galaxy Sports Edge Corpus Intelligence

**Coordinator:** c01 (Corpus Coordinator 1 of 10)
**Slice definition:** `find ~/workspace/vendor/Sports/docs -name "*.md" | sort | awk 'NR%10==0'` — sorted-index mod 10 == 0
**Files in slice:** 299 | **Files briefed:** 299 (100%) | **Coverage verified:** 2026-10-02
**Readers deployed:** 61 (60 chunk readers at ~5 files each + 1 cleanup reader for 7 stragglers)
**Briefs:** `~/workspace/corpus-intelligence/briefs/c01/reader-*/` (359 brief files; some files have 2 briefs from the 30→60 wave re-split — coverage counted on unique `# <filepath>` headers, normalized)
**Slice character:** Heavy on (a) arXiv deep-paper briefs (~150 files: models, ratings, tracking, calibration), (b) ops/methodology docs, (c) DFS/props research, (d) GSE engine internals (metric stack, calibration, staleness gates). Light on raw game recaps.

---

## 1. Inventory

| Cluster | Approx. files | Notes |
|---|---|---|
| arxiv-deep papers (2026-09-21) | ~150 | 1-page-per-paper deep reads: method, math, datasets, GSE application, implementation spec, acceptance gates |
| ops / methodology / calibration | ~60 | AGENTS-history, metric stack, CLV slices, staleness gates, settlement |
| DFS / props / fantasy research | ~50 | Phase deep-dives (qb-phase2, dst-phase3, te-phase3), full-tables READMEs, salary data |
| GSE engine internals | ~25 | LEVERAGE_STATUS, scorecards, expected-metrics, intelligence passes |
| X-intake / dossiers / misc | ~14 | Analytics X dossiers, intake notes |

**Tag distribution across briefs** (a brief may carry several): QB-BEHAVIOR 95, COACHING 70, OL 137, TRUST-SIGNAL 128, SCHEME 92, OTHER 498. Engine-actionable "yes": 239 unique files.

---

## 2. Top 20 most engine-actionable findings (with file refs)

Ranked by expected engine impact, QB/coaching-weighted per the intelligence program.

1. **Pressure-to-sack rate is a QB trait, not an OL metric.** It moves year-over-year for individual QBs against a flat ~18% league baseline. Adopt the <2.5s quick-pressure split to separate coverage sacks from true rush wins in the pressure-attribution chain. — `arxiv-program/research/2026-09-21/sweep-2026-09-21.md` (QB-BEHAVIOR, OL)
2. **Per-QB dropback-outcome split (scramble % / sack % / INT % per QB).** The Fantasy Points Defensive Tendencies tool ships this per-QB; it feeds QB behavioral profiles directly alongside team blitz-rate tendencies. — `dfs/research/2026-09-29/full-tables/README.md` (QB-BEHAVIOR)
3. **QB behavioral profiles from first-read rate + scramble rate + pressure EPA/db + sack-vs-blitz + aggressiveness/aDOT, crossed with team playcalling rates (motion/PA/RPO/no-huddle) and playcaller ratings as coaching priors.** The full feature recipe, already specified. — `research/2026-09-19-dk-week2/deep/qb-phase2.md` (QB-BEHAVIOR, COACHING)
4. **Pitts-with/without-London TPRR split (0.18 → 0.28) as the template for QB trust-target profiles under WR absence.** Directly generalizes: recompute trust-target shares conditional on each receiver's presence/absence. — `dfs/research/2026-09-25/full-tables/README.md` (QB-BEHAVIOR)
5. **The metric bible.** Baselines: 1.867% INT/dropback, 0.640% fumble-lost/play, ~3.0% turnover-worthy-play rate (52.3% convert to INT). Filters: 11.2% garbage-time removal (4Q, WP>0.95 or <0.05), Success = EPA > 0, kneels/spikes excluded. Veto: R² < 0.005 for pressure→sack at the level tested. — `props/research/2026-09-17/props-consensus/our-metric-stack.md` (OTHER)
6. **Brier 0.247 vs 0.22 threshold quantifies the calibration gap; player-archetype, player-rate-posteriors, and opponent-adjusted modules already exist as wire targets for QB behavioral profiles.** — `intelligence/LEVERAGE_STATUS.md` (QB-BEHAVIOR)
7. **Scramble-rate and QB-sneak conversion splits under heavy blitz + 20+ mph QB ball-carrier speed frequency are ingestible behavioral QB features** (Allen / Williams archetypes); under-center vs shotgun rushing split is a scheme-alignment feature. — `arxiv-program/research/2026-09-21/nextgenstats-profile/post-inventory-2026-09-21.md` (QB-BEHAVIOR, SCHEME)
8. **CPOE / RYOE / xYAC feature contracts, formulas, floors, validation thresholds** — a ready-made over-expected grading kernel for player-behavior profiles. — `math/GSE_EXPECTED_METRICS.md` (QB-BEHAVIOR)
9. **Opponent-adjusted EPA residual method (80 pass-att / 40 carry shrinkage, 2025-defense baseline, 55/15/15/10/5 recency blend) as the canonical on-field efficiency family**; reject duplicate CPOE/EPA/OL/scheme pastes from competitor dossiers. — `reasoning/competitive-intel-intake-2026-09-26.md` (SCHEME)
10. **HB Analytics' opponent-adjusted, time-blended, double-team-aware pressure-rate grade** — the top OL methodology candidate (composite family incl. run-block "Disruption rate grade"). — `dfs/research/2026-09-17/full-tables/README.md` (OL)
11. **Calibrated feature-weighting correlations: passing 0.53–0.61 vs rushing 0.13–0.19** (what actually predicts); lab metric inventory with exact formulas (ARBY 65/35, Baldwin 40/40/20 — CAUTION per 2026-10-02 deep research: both are competitor X-thread formulas mislabeled as lab inventory, and the ARBY formula changed between posts; treat as directional, not canonical); Wilson-lower-bound falsification gate. — `ops/AGENTS-history-main-2026-09-26.md` (OTHER)
12. **QB-change/injury personnel source is queued, not built — the highest-leverage pick-quality fix.** The staleness gate is wired but `isPublished` has no provenance column. — `predictions/research/2026-09-28/signal-staleness-gate.md` (TRUST-SIGNAL)
13. **BUILD 1: per-QB EPA/dropback keyed by passer_player_id with snap-share anti-leakage: log loss 0.633 → 0.625, AUC 0.690 → 0.700.** Measured gain, ship it. — `dfs/research/2026-09-25/youtube-builder-research/handoff-indie-builders-v2-fullspec-2026-09-25.md` (QB-BEHAVIOR)
14. **Operationalize first-read share, TPRR, and air-yard share as QB trust-target features;** encode goal-line rush-share monopolies as red-zone tendency priors; ingest zone/gap scheme-vs-defense mismatch table + DC-tendency deltas. — `research/2026-09-19-dk-week2/deep/advanced-matchups-deep-dive-2026-09-19.md` (QB-BEHAVIOR, SCHEME)
15. **Suppress QB-specific uncertainty bands** (measured z-coverage curve) — a "don't": per-QB bands miscalibrate; pair with the calibration claim-gate before any band productization. — `fantasy/research/2026-09-28/half-life-and-band-calibration.md` (QB-BEHAVIOR)
16. **Minerva validation suite** (`gse.validation.minerva`): per-signal DSR (deflated by actual candidate count), PBO over seasons (S=16), SPA vs benchmarks, MinTRL, 0–100 score with Seal ≥ 80 required for production entry; fail-closed. — `arxiv-program/research/2026-09-21/arxiv-deep/2048-minervascore-backtest-robustness-grade.md` (OTHER)
17. **OpenSkill Plackett-Luce vs house Elo on 2020–2024 walk-forward** (log-loss + MAE vs spread); adopt as team-strength feature if within 0.002 log-loss at materially lower runtime. — `arxiv-program/research/2026-09-21/arxiv-deep/0425-openskill-a-faster-asymmetric-multiteam-multiplayer.md` (OTHER)
18. **Hierarchical Bayesian log5 unit-matchup models (QB vs defense, OL vs DL)** with 40/30/20/10 recency weighting on nflverse 2015–2024; adopt dual-metric reporting (predictive GMP + simulated added wins) as a standing feature gate. — `arxiv-program/research/2026-09-21/arxiv-deep/0495-the-impacts-of-increasingly-complex-matchup.md` (QB-BEHAVIOR, OL)
19. **Receiver-conditional TD decomposition for anytime-TD/receiving props:** P(TD) = Σ_t P(TD|target=t)·P(target=t) — marginalization over the trust-target distribution; numeric gate ≥5% holdout log-loss improvement. — `arxiv-program/research/2026-09-21/arxiv-deep/0912-tacticai-ai-assistant-football-tactics.md` (QB-BEHAVIOR)
20. **D/S/I metric audit:** run discrimination/stability/information scoring over all metric families; flag D<0.5 or I<0.2 metrics for shrinkage/removal; adopt as annual QA. — `arxiv-program/research/2026-09-21/arxiv-deep/1184-meta-analytics-tools-for-understanding-the.md` (OTHER)

---

## 3. Cross-file patterns

### Metrics that recur
- **HHI / target concentration / top-1 & top-2 target share** — the canonical QB fixation measure (Rodgers template), recomputed in DFS, props, and profile research independently.
- **First-read share, TPRR (targets per route run), air-yard share** — the trust-target trinity; appears in qb-phase2, advanced-matchups, and the Pitts/London absence split.
- **Pressure-to-sack rate** — appears as OL metric, QB trait (YoY-moving vs 18% baseline), and betting feature; the level of analysis matters (see contradictions).
- **EPA/dropback with situational splits** (quarter, script, pressure) — the universal QB efficiency unit.
- **Garbage-time filters** — 11.2% removal at WP>0.95/<0.05 is the house convention; recurs across metric-stack, projections, and DFS research.
- **Recency blends** — 55/15/15/10/5 and 40/30/20/10 weighting schemes recur; exponential-decay half-life tuning is the open question.
- **Walk-forward validation with numeric acceptance gates** — nearly every arxiv-deep brief carries a "gate" (log-loss deltas, p-values, correlation thresholds). This is the slice's dominant methodological culture.

### Contradictions between sources
- **Pressure→sack R² < 0.005 (veto, our-metric-stack) vs pressure-to-sack as a YoY-moving QB trait (sweep-2026-09-21).** Resolution (INFERENCE): the veto is at the team/season level; the trait is at the QB level with a <2.5s split. Both can be true — the engine must model it at the right level.
- **"Suppress QB-specific uncertainty bands" (half-life-and-band-calibration) vs the entire QB-profiling program** built on QB-specific splits. The bands paper is about display calibration, not point estimates — but any per-QB interval product must pass its claim-gate.
- **OpenSkill-vs-Elo and nfelo-vs-Elo baselines** disagree on which simple rating to benchmark against; treat both as baselines, pick by walk-forward.
- **Passing correlation 0.53–0.61 vs rushing 0.13–0.19** (AGENTS-history) sits uneasily with heavy rushing-QB archetype work (Williams 20+ mph, Allen sneak splits) — rushing matters situationally, not as a season efficiency driver.

### Methods that compose
- **The L3 pressure chain** (reasoning-depth-spec §3): HB composite OL grades (10) → Monken-style quick-game adjustment → pressure-to-sack QB trait (1) → first-read/trust-target features (3, 4, 14) → receiver-conditional TD (19). This is the full QB-vs-pass-rush causal stack, and every link has a named method in this slice.
- **Opponent-adjusted EPA residual (9) + QB unit-matchup log5 (18) + OpenSkill (17)** = the team-strength feature family; all three are shrinkage-based, combinable by stacking.
- **Minerva (16) + D/S/I audit (20) + metric bible (5)** = the validation/governance layer for everything the engine adopts.
- **TacticAI TD decomposition (19) + trust-target-under-absence (4)** = the prop engine's WR/CB-shadow core.
- **Pay-out-by-market-class harness (0435) + Kelly F* ceiling (1366) + Prelec distortion mapping (0535)** = the staking/selection doctrine.

---

## 4. Gaps — what this slice doesn't cover that the intelligence program needs

1. **Man/zone and blitz/no-blitz EPA splits per QB** — nflverse pbp doesn't carry coverage charting; the profiles note this as queued for NGS/charting data. NGS is internal-only per the 2026-09-28 doctrine, but the wiring path is unbuilt.
2. **QB-change / injury personnel feed** — named as the highest-leverage pick-quality fix, still queued (signal-staleness-gate).
3. **Licensed route data / PFF-like grades** — standing gaps bounding the OL and QB-behavior lanes (king-standard-scorecard).
4. **Trust-signal intake automation** — spec'd (x-intake-registry) but no automation; the Rodgers–Metcalf miss class is still open.
5. **Live in-game state** — the slice is pre-game research; live WP surfaces (1052) and momentum-blend models (0040) are proposals, not wired.
6. **Weather / travel / referee / public-money factors** — named as missing factor families (intelligence-pass-prompt), no systematic intake.
7. **Off-ball tracking features** — the slice's tracking papers are mostly offensive-ball-carrier; coverage-role ghosting (0324) and defender-assignment HMMs (0415) are proposals.
8. **Backup-QB profiles at depth** — the 8 built profiles cover starters; the Keenum control case proves backups need the same treatment (64+ players per the program).

---

*Map complete. 299/299 files briefed. Phase 2 deep research: `~/workspace/corpus-intelligence/deep/c01/`.*
