# c09 Intelligence Map — Beexly/Sports docs slice (mod 10 == 8)

**Generated:** 2026-10-02 ~03:55 UTC (Oct 1 late night CT)
**Coordinator:** c09 (Corpus Coordinator 9 of 10)
**Scope:** all markdown files under `~/workspace/vendor/Sports/docs/` where sorted index mod 10 == 8.

## 1. Inventory

| Item | Count |
|---|---|
| Files in slice | 299 |
| Briefs written | 299 |
| Source files covered | 299 / 299 (0 missing, 0 unmatched) |
| Reader deployments | 70 total |

**Wave 0** (wide, ~10 files each): 32 readers deployed. 8 completed cleanly (c09-r04, r07, r09, r10, r11, r17, r18, r22); 22 errored on inference-proxy 429s (30 concurrent saturated the proxy); 2 closed mid-run (their partial briefs preserved). 112 briefs banked.

**Dense wave** (~5 files each, ≤6 concurrent to respect the 429 ceiling): 38 readers c09-d00 → c09-d37, **all 38 completed**. 187 briefs banked.

**Brief locations:** `~/workspace/corpus-intelligence/briefs/c09/c09-rXX/` and `c09-dXX/`. Chunk manifests: `~/workspace/corpus-intelligence/chunks/c09/` (wave 0) and `chunks/c09d/` (dense).

**Slice character:** ~65% arXiv deep-read ledgers (methods/forecasting/decision-theory), ~20% engine ops/governance/calibration doctrine, ~15% football-substance research (DFS, props, QB tables, NGS, data sources). Nearly all arXiv ledgers carry pre-assigned ADAPT/REJECT verdicts with implementation specs and acceptance gates — intake-with-verdict, not raw paper reads.

## 2. Top 20 most engine-actionable findings

Ranked by a blend of intelligence-program relevance (QB-behavioral, coaching-tendency priority) and engine leverage. All numbers are file-sourced; INFERENCE-marked items are flagged.

### QB-behavioral / coaching / scheme / OL (the intelligence program's core)

**1. 21-QB standardized behavioral matrix — the QB-profile template in the wild.**
`deep/qb-full-pool-2026-09-19.md` (c09-d35). EPA/db, CPOE, pressure-to-sack rate, first-read rate, scramble rate, aggressiveness, aDOT, man/zone + pressure splits for every Week 2 starter with [ELITE]/[WEAK] percentile flags. Standouts: Cooper Rush quantifiably worst on the slate (QBR 2.6, CPOE −21.3, 80% pressure-to-sack, 52.6% RB target share); Geno Smith cleanest process (0.00% negatively graded dropbacks, 1st of 30); Stroud 0.45 EPA/db when clean with slate-high 21% aggressiveness. **Action:** adopt as the schema for the QB behavioral profile program — the fields already match (scramble/run, scheme splits, situational efficiency).

**2. QB vs-blitz/pressure/coverage splits + quantified trust targets.**
`dfs/research/2026-09-27/full-tables/README.md` (c09-d24). Mayfield vs blitz since last season: 5.42 YPA (31st of 31), 71.1 rating (29th) — while Minnesota blitzes at league-high 73.9%. Purdy vs zone: 8.71 YPA (4th of 39), 8.8% CPOE (4th). Shough vs pressure: 3rd-best YPA / 4th-best success. Garrett Wilson: 41.6% target share (1st of 93), 0.37 TPRR (2nd), 53.8% 1st Read% (1st) vs blitz; JSN Cover-4 first-read dominance 58.7% (1st of 91). **Action:** direct HHI/target-concentration inputs for QB profiles; per-matchup features for the game model.

**3. Expected Hypothetical Completion Probability — the QB-decision metric.**
`arxiv-deep/0402-expected-hypothetical-completion-probability.md` (c09-r04, arXiv:1910.12337). Reproducible catch-probability recipe (BART: MSE 0.086, log-loss 0.289) plus a genuinely new QB metric: % of throws to the max-EHCP receiver (Winston 26.8% vs Wilson 13.2%) and receiver credit/blame (Tate +11.8pp, Bryant −18.4pp). **Action:** build on public Big Data Bowl tracking (NGS-internal doctrine keeps NGS-derived models internal; BDB is public) → weekly QB Decision Grade.

**4. Player Chemistry — QB–receiver joint impact as a measured quantity.**
`arxiv-deep/0910-*.md` (c09-r09, arXiv:2003.01712). JOI/dropback prediction RMSE 0.04464 vs 0.05448 baseline (~18% reduction); matches-played-together effect diminishes after ~50; unseen-pair CatBoost predictor for new combos (trades, rookie QBs) with Spearman ρ ≥ 0.40 gate. Defensive JDI is a null result (ΔRMSE 0.0017) — skip. **Action:** turns DFS stacking intuition into a testable QB–WR trust quantity.

**5. Scheme fingerprints + OL injury flags as projection priors.**
`reasoning/week3-current-wire.md` (c09-d34). Charted per-team rates: SF motion 64.0%/PA 15.1%, LAC motion 66.2%/shotgun 61.3%, BUF shotgun 33.1%, CIN motion 29.8%, LAR RPO 0.0%. QB EPA/att extremes (Purdy 0.503, Penix −0.756 on 54 attempts). Named OL outs (Banks, Bako-Bewele, Ingram, Pipkins, Awosika, Stanley, Cosmi, Bartch) for trench/availability adjustments. **Action:** priors for the coaching-tendency program; OL-out list feeds the adjustment layer.

**6. Shell-conditioned splits as matchup adjustment.**
`props/research/2026-09-18/notes/ryanjheath.md` (c09-d33). Fantasy Points Advanced Matchups derive shell-weighted TPRR/YPRR and a pressure-mismatch index from in-house coverage charting (exact weights black-box, paywalled). **Action:** build matchup adjustments from coverage-shell-conditioned splits (e.g., target rate vs 2-high) using public charting — the man/zone gap the corpus can't buy.

**7. DST matchup features, ingestible now.**
`deep/dst-phase1.md` (c09-d35). FTN pressure-generated-vs-allowed mismatch (JAX 50.0% generated vs DEN 56.3% allowed = best mismatch; LV 6.5% allowed / NYJ 11.5% as sack caps), @Paganetti motion-at-snap pass EPA leaderboard (PIT −0.85 … CLE +0.66), SumerSports edge-rusher PRWR (Hunt 29.6%, Crosby 26.7%). **Action:** direct features for a DST projection module.

**8. QB Pressure Sensitivity is PARKED — the missing input is named.**
`strategy/vision-tracker.md` (c09-d37). QB-under-pressure behavioral modeling (sensitivity, scramble/run, INT-by-situation under pressure) is blocked on clean-vs-pressured efficiency splits "not in this feed." **Action:** sourcing those splits unblocks a core QB-BEHAVIOR layer — this is the intelligence program's #1 data gap, stated in-repo.

**9. NGS weekly tracking ingest spec — trust-model fields.**
`performance/radar-and-tracking-data-layer.md` (c09-d32). `player_id, week, position, avg_separation, route_efficiency, target_rate, snap_count_pct`, 7-day TTL, aggregates-only. avg_separation/route_efficiency/target_rate are exactly the receiver-tracking fields for QB target-concentration and trust modeling; licensing posture (internal learning OK) aligns with the NGS internal-only doctrine.

**10. Kneel/garbage-time end-state model.**
`data/EDGE_SUPREMACY_DOCTRINE.md` §C2.1 (c09-d22). Kneel-outs delete pass attempts for big favorites; hurry-up garbage time inflates trailing QBs — attempt props are systematically shape-wrong without an absorbing-state model. **Action:** small week-1-payoff build, coded once, run daily.

### Highest-leverage engine methods

**11. Expected Points statistical repair kit — highest-priority EPA work.**
`arxiv-deep/1801-*.md` (c09-d16). Four drop-in fixes on 492K NFL plays: team-quality bias (good teams run 32% of plays vs 26% for bad, +0.7 pts/drive); 1/N_i drive-row reweighting (weighted XGBoost log-loss 0.7506 vs 0.7670, significant); cluster bootstrap restores 95.6% coverage vs ~83–86%; catalytic prior (500k synthetic states) kills GBM overfitting. ~1 week, per-component gates.

**12. Calibration-over-accuracy mandate (two independent corroborations).**
`arxiv-deep/0282-*.md` (c09-d04): calibration-optimized models earn 69.86% higher average returns than accuracy-optimized. `MASTER-PAPER-INDEX.md` (c09-d20): classwise-ECE model selection beat accuracy selection +34.69% vs −35.17% average ROI and "saved Kelly from ruin." **Action:** bake-off directive for the probability stack.

**13. Confidence has ~zero resolution — treat as non-ranking.**
`ops/HERMES_ALL_NIGHT_2026-09-04.md` (c09-d29). Live: 1,663 graded picks, resolution 0.005; 152 picks at ≥80 confidence won only 40% (inverted). Historical: 27-season replay, confidence AUC 0.4965 (p=0.41) on 13,646 picks. Prescription: calibrate the MARKET, publish the reliability curve; keep calibration maps OFF while resolution ≈ 0 (isotonic do-not-apply rule, `ops/ISOTONIC_LOGLOSS_DEBUG_2026-08-10.md`).

**14. Game-clustered bootstrap — play-level resampling lies about uncertainty.**
`arxiv-deep/0503-*.md` (c09-d07, Brill/Yurko/Wyner). 4,101 games → 2,291 independent-play equivalents (56%); nominal 90% i.i.d. bootstrap intervals cover at 0.60 ± 0.01. Fractional randomized-cluster bootstrap (φ=0.35) reaches 0.90 coverage at 2.3× width. **Action:** swap resampling, tune φ on nflverse 2020–2024, ship WP ± intervals.

**15. δ/σ betting gate — the staking missing link.**
`arxiv-deep/1748-*.md` (c09-d15). E[Kelly growth] = 2(δ²−σ²)Φ(δ/σ) + 2σδφ(δ/σ): positive only when perceived edge exceeds probability-estimation RMSE. Spec: stake only if δ_perc > 1.5σ, scale Kelly by Φ(δ_perc/σ). ~1 day.

**16. Closing-line forecaster CL1–CL9.**
`data/CARDS_CLOSING_LINE.md` (c09-d22). 9-card plan: Shin de-vigging, ridge-on-logit(qClose), walk-forward-only eval with CLV referee, CL5 decision features (drift, velocity/hr, news-proxy jump flag, book dispersion), MARKET_PROP firewall. Gates: ≥200 close-both-sides markets, ≥400 trajectories ≥3.

**17. Mn-Dirichlet floor model — the complexity floor.**
`arxiv-deep/0673-*.md` (c09-r07). ~12-line Bayesian count forecaster beat Bradley–Terry (Brier −0.01, p=0.04; log score p=0.01; χ² 61.5, p=0.91). **Action:** NFL {cover, push, no-cover} analogue; any engine upgrade must beat it on log loss before shipping.

**18. Scalarizer activation gate — adopt verbatim.**
`reasoning/overnight-agent-prompt-2026-09-26.md` (c09-d34). f1 = |r| ≥ 0.08 AND |slope| > se on true holdout; anti-duplicate family rule; 16-direction prior map. Measured DARK failures documented (officials n=113 r=−0.0926; wind slope −0.135/mph se 0.1618; coaching 4th-down go rate r=−0.0136).

**19. As-of quarantine ruler — "fitting on the answer."**
`ops/hermes/BUILD-QUEUE-2026-09-18-rulers.md` (c09-d32). Sports backfill overwrote `trueProb` with post-settlement info (NFL EPA read is a whole-season aggregate). Fix: typed `post_settlement_backfill | as_of_mint` basis + `assertObservedAtOrBefore` guard. Companion rulers: same-book CLV over bookmaker-key intersection; conformal +infinity refusal below sample floor; fixture-identity group keys for walk-forward folds.

**20. xFP/FPOE verified negative — do not weight.**
`research/2026-09-26/RESCUE-2026-09-26-4-xfp-research.md` (c09-d36). Pre-registered FAIL on 2020–2025 holdout: Δrho = −0.0165, 95% CI [−0.0396, 0.0086] (n=6022). **Note:** contradicts d22's "FPOE = engine's #1 metric" — resolved against weighting air-yards expectation in next-week rank features. The 12-test guard pattern (pre-registered kill lines + artifact-shape pins + leak check) is the template for future research records.

## 3. Cross-file patterns

### Metrics that recur
- **Calibration-over-accuracy** (0282, MASTER-PAPER-INDEX, d29 resolution crisis, d28 PROVEN recipe α=0.88): the corpus's most repeated doctrine — now with two independent ROI quantifications.
- **Cluster-corrected uncertainty** (0503 game-clustered bootstrap, 1801 cluster bootstrap, d32 fixture group keys, d34 Elo ECE): play/drive/fixture dependence is handled inconsistently across modules — needs one resampling standard.
- **Kelly/sizing stack** — now coherent end-to-end: decision-objective ensemble weighting (0791) → multi-pick Kelly with finite-memory gates (0813: p=0.51 needs L≥1,761) → maximin-drawdown sizing (0834: 9.4% vs 5.7%, −3.3% vs −6.1% DD, no covariance) → δ/σ gate (1748) → NSGA-III bankroll-aware combination (1463) → fractional Kelly drawdown evidence (1222: full Kelly 89.8% max DD vs fractional 41.9%).
- **Garbage-time / score-dependency nesting** (0242 nested conditional, 0584 nested ZIGP, d22 kneel model): three independent arrivals at "model the trailing team's score conditional on the leader's" — compose into one dependency primitive.
- **Residual-correction architecture** (1851 CRAFTER, 0473 DeepGLEAM): new signals enter as corrector features on frozen-engine residuals, never as engine inputs.
- **Rating-layer upgrades** (0564 √K law, 0544 phantom-player BT, 0574 Kernel Rank Centrality, 1447 least-squares, 1172 ranking lasso): five compatible, separately-gated improvements to team strength.

### Contradictions (with resolutions where the corpus provides them)
- **xFP/FPOE**: #1 reproducible metric (d22) vs pre-registered FAIL Δrho=−0.0165 (d36). Resolution: do not weight in rank features; keep as descriptive only.
- **Elo game model**: invalidated vs devigged baseline (Brier 0.2312 vs 0.2122, d34) while rating-layer upgrades are still pursued — different layers (game-probability head vs team-strength inputs); no contradiction once separated.
- **CRPS-optimal vs decision-optimal ensembles** (0791): statistically-best ensemble earned *lower* trading profits than naive equal-weighting at ~500× compute. Resolution: optimize combination weights on the decision metric (CLV/P&L), keep equal-weight as the free baseline.
- **Confidence**: published as a ranking input in older docs vs measured resolution ≈ 0 (d29). Resolution: non-ranking until re-wired; calibrate the market instead.

### Methods that compose (build order suggestions, not builds)
1. **Sizing:** 0791 → 0813 → 0834 → 1748 → 1463 (weights → Kelly → drawdown → gate → multi-objective).
2. **Calibration:** scalarizer (d34) → Bayesian bake-off (d28) → floors Brier≤0.22/ECE≤0.05 (d30) → shadow promotion pipeline (d21) → settlement feedback loop (d21).
3. **Ratings:** LS/Elo/KRC/phantom-player → fixed-effects HFA (1050) → multivariate GLMM (0433).
4. **Simulation:** Diffuser whole-game (1946) → DIMA 22-player transition (2205) → nested scoring (0242/0584) → BBE synthetic live market (0292).
5. **Uncertainty:** game-clustered bootstrap (0503) → MIS/quantile heads (0473) → AC-RAC conformal decisions (2142) → SCoRE selective prediction (1777).
6. **Intelligence wiring:** QB matrix schema (d35) + trust splits (d24) + EHCP (0402) + JOI (0910) → QB behavioral profiles; scheme fingerprints (d34) + shell splits (d33) + DST features (d35) → coaching/matchup layer; rule-shape contract (d25) + scalarizer (d34) → adjustment layer intake.

## 4. Gaps — what this slice does NOT cover that the intelligence program needs

1. **Trust-signal intake: ~zero coverage.** No files on social/video quote mining, QB-receiver public trust dynamics, or press-conference signal extraction. The Rodgers-video lesson (Oct 1) has no corpus counterpart — this is the alpha layer Garrett named and it is unbuilt and unresearched in-slice.
2. **Coaching tendencies: thin.** Scheme fingerprints exist as snapshots (week3 wire) but no OC/DC tendency profiles, no playcalling fingerprints by coach, no blitz/coverage/man-zone tendency time series, no YoY coach-evolution studies.
3. **Clean-vs-pressured QB splits: explicitly blocked.** vision-tracker.md PARKED — the one input that unblocks QB Pressure Sensitivity modeling. NGS has it; the feed doesn't.
4. **OL beyond injuries: absent.** No continuity metrics, no run-blocking grades over time, no pressure-rate attribution (scheme vs talent).
5. **Man/zone coverage data: paywalled.** ryanjheath weights are black-box; public charting is the named workaround but no in-slice build.
6. **INT-by-situation / scramble triggers:** the QB matrix has scramble *rates* but no trigger analysis (when/why), no INT situational decomposition beyond EHCP's decision framing.
7. **Contradiction debt:** several in-slice findings are second-hand cited-study claims with no verification (d04's market numbers flagged as such); the map above resolves what the corpus resolves, but cited-claim provenance is uneven.

## 5. Notes for the parent

- **429 lesson:** 30 concurrent readers saturated the inference proxy; ≤6 concurrent ran clean for 38 straight readers. Recommend sibling coordinators use the same ceiling.
- **Filename discipline:** wave-0 readers used inconsistent brief naming (bare basenames, dropped `.md`); dense-wave readers followed the strict rule. The coverage matcher above handles both, but future waves should keep the strict rule.
- **All briefs are intake-only, read-only on repos.** No building or wiring was performed.
- **Two data-quality flags** carried in briefs: `1447` slug/content mismatch (soccer slug, USAU frisbee content); NGS playbook OPEN discrepancies (Van Ness <2.5s counts; Allen 55.3%) marked do-not-use.
- **REJECT verdicts were preserved**, not re-litigated (0382, 0443, 1092, 1192, 1202, 0302, 0312, 0453, 0463, 0038, 0048, 0322) — their briefs document why so the program doesn't re-read them.
