# Corpus Coordinator c07 — Slice Map

**Slice definition:** `find ~/workspace/vendor/Sports/docs -name "*.md" | sort | awk 'NR%10==6'` → 300 files of 2,996 total.
**Coverage:** 300/300 briefed (30 readers × 10 files). Briefs: `~/workspace/corpus-intelligence/briefs/c07/c07-r{01..30}/`.
**Readers deployed:** 30 (c07-r01…c07-r30). 17 completed clean on first wave; 13 hit inference-proxy 429s at init and were re-dispatched in 3 waves — all 13 completed. One partial (r24 wrote 2 briefs before 429; completion reader wrote the remaining 8). Zero files skipped as unreadable; empty/corrupt files were briefed as such per protocol.

## Slice composition

| Dir | Files | Nature |
|---|---|---|
| arxiv-program | 156 | arXiv deep-read ledgers (statistical/ML methods, ADAPT/ADOPT/REJECT verdicts) |
| ops | 42 | Platform ops, launch plans, deprecations, alerting |
| fable | 14 | Fiction/content lane |
| research | 12 | Dated research notes incl. CV corpus deep-dives |
| engine | 7 | Engine specs |
| dfs | 7 | DFS lane |
| gse/props/api/product/etc | ~62 | Scattered specs, catalogs, strategy |

The slice is **method-heavy, football-light**: 52% is the arXiv methods corpus. Direct NFL-behavioral content is a minority — the value for the intelligence program is in the *portable methods*, not in football findings already made.

## Top 20 most engine-actionable findings

Ranked by relevance to the QB-behavioral and coaching-tendency programs first, then general engine value. All numbers from the briefs; file refs are brief paths.

### Football-intelligence tier (direct program relevance)

**1. Target Allocation Efficiency (TAE) — the trust-target metric, specified.**
`c07-r06/0602-measuring-spatial-allocative-efficiency-in-basketball.brief.md`
Port of Sandholtz/Mortensen/Bornn (2020) LPL to NFL: per-team-week, rank receivers by efficiency (EPA/target, YPRR) vs allocation (target share/TPRR) stratified by route-depth × field zone (3×3 cells). NFL LPL = Σ_j (EPA/target)_j × (optimal_targets_j − actual_targets_j), permutation-constrained. Receiver TPC (target points contribution) flags over/under-targeted players. Source finding: 1 LPL point cost 0.62 actual points (θ posterior mean −0.62, 95% HPD (−1.08,−0.17)); 10% of games decided by ≤2 points. **Caveat from the brief:** Westbrook drive-and-kick blind spot — naive LPL punishes the creator; needs a usage-curve guardrail (replace rank-permutation optimum with constrained optimization max Σ targets_j·eff_j(targets_j)). Gate: game-level regression θ<0, 95% CI excludes 0, ≥0.5 pts out-of-sample RMSE gain. ~4–5 days empirical version.
*Program impact: this is the quantitative form of the trust-circle thesis — weekly TAE per team is the trust-signal intake's core metric.*

**2. Per-team 2–3 state HMM for play-calling regimes.**
`c07-r05/0431-predicting-play-calls-in-the-national.brief.md`
Ötting (2020): per-team 2-state HMM, transition probabilities via multinomial logit on game-context covariates (home, ydstogo, down dummies, shotgun, no-huddle, scorediff, goaltogo, yardline90 + AIC-selected interactions). Weighted out-of-sample accuracy 0.715 on 2018 (vs 0.67 pbp baselines, 0.584 naive pass baseline); per-team 0.602 (SEA) to 0.779 (NE). Port: per-team 2–3 state HMM on nflverse 2015–2025 with personnel groupings, hierarchical partial pooling, weekly refits. Decoded states = neutral / pass-heavy comeback / run-heavy kill-clock regimes → game-script-conditioned prop projections; latent-state stickiness = coordinator predictability audit. Adopt only if beats covariate-only logistic by ≥0.5pp accuracy and ≥0.005 log-loss on 2025 holdout. **Gap flagged in brief:** no plain-logistic baseline shown, so HMM's marginal value over a static model is unproven — the gate handles this.

**3. QB decision multinomial + target-probability architecture.**
`c07-r06/0511-going-deep-models-for-continuoustime-withinplay.brief.md`
Yurko et al. (2019): dropback tree = QB decision multinomial {throw away, run/sack, pass} → target probabilities over 5 receivers (softmax-normalized) → global catch probability → per-player catch probabilities → ball-carrier model. Ball-carrier LSTM beat LASSO/XGBoost/NN on leave-one-week-out CV RMSE at every sequence point (ordering only; exact values in figure). XGBoost top features: closest-defender distance, ball-carrier speed. Voronoi "bubble" features (9 tessellation features) are direct OL-run-blocking quality signals. Action: implement ball-carrier LSTM + Voronoi pipeline on NGS tracking for within-play EP/WP curves and yards-above-expectation attribution. **Coaching note in brief:** Alex Collins led sample in yards/carry but was negative in yards-above-expectation at handoff; Le'Veon Bell under-performed at handoff, over-performed 1s in (≥20 carry cutoff, flagged unstable).

**4. OL evaluation pipeline without film grades.**
`c07-r08/0908-offensive-linemen-performance-evaluation-nfl.brief.md`
Byanna & Klabjan (2016): five differential statistics (to-side minus not-to-side): stuff % differential, yards/attempt differential, successful-run % differential, pressures-allowed %, sack %. Salary model adj. R² = 0.50; differential stats beat PFF for salary explanation (current-year PFF not significant; avg prior PFF +56,697 p=0.00268; stuff% differential −82,247 p=0.012; yds/att differential +382,197 p=0.045). Adding not-to-side terms lifted R² 0.47→0.50 with opposite-signed coefficients (control logic confirmed). k-means k=7 (Krzanowski–Lai), weak silhouette ≈0.16. Flagged undervalued: John Jerry ($795,635), Mike McGlynn ($1,037,594); overvalued: Scott Wells ($5,283,150), Davin Joseph ($6,889,518) — Joseph and Wells both released post-season. **Paper-internal inconsistency flagged:** abstract/§5 say five players, §7 says six, §5.2 says twelve→six. Action: cluster-based DFS salary-value screen + to-role/off-role differential features for props on nflverse + DK salary CSVs; 2–3 days. *Program impact: the OL-gates-everything layer finally has a specified measurement pipeline; GSE has no OL-evaluation lane today.*

**5. Coaching aggressiveness index with causal-adjacent estimation.**
`c07-r13/1638-coaching-tactics-home-advantage-serie-a.brief.md`
Serie A 1,140 matches: offensiveness index s = defenders×1 + midfielders×2 + forwards×3 (10–30); aggressive opening +0.30 goal diff (p<0.001), marginal win-prob effect +9.44–16.17% (BCa). Triple-outcome OLS/logit/ordered-logit + Akaike-weight model averaging + BCa bootstrap; authors explicitly flag coach-selection endogeneity. Port: per-game NFL coaching aggressiveness indices (Q1 game plan vs Q4 adjustments) from early-down pass rate vs expected, 4th-down go-rate vs WP model, blitz rate; use within-coach variation (coordinator changes) for causal claims. *Program impact: gives the coaching-tendency program its effect-size metric and its honesty standard.*

**6. GAT play-graph → ΔEPA attribution (hidden pivotal players).**
`c07-r06/0562-unveiling-hidden-pivotal-players-with-goalnet.brief.md`
GoalNet (Jiang/Cai/Kyrillidis 2025): graph over 22 players, predicts ΔxT, distributes credit by embedding-magnitude share. NFL port: players as nodes, routes/blocks/coverage/rush matchups as edges, ΔEPA as value → surfaces linemen, blocking TEs, coverage safeties that EPA/WPA never credits. **Brief's improvement over the paper:** replace embedding-magnitude attribution with per-player leave-one-out (mask node features, measure predicted ΔEPA drop) — strictly more defensible than the paper's ungrounded axiom. Gate: PFF-grade correlation Spearman ρ ≥ 0.4; 3–4 weeks; participation data is the gating dependency. Paper's own validation is weak (no test set, no CIs, circularity flag on edge features).

**7. Tactic-conditioned trajectory generation with NGS scheme labels.**
`c07-r04/0380-learning-group-interactions-and-semantic-intentions.brief.md`
Counterfactual tactic conditioning ("what if the defense were in Cover 2 instead of recognized Cover 3?") turns trajectory models into a scheme-sensitivity engine for live-prop uncertainty bands. Banzhaf values reveal which players drive a scheme (e.g., which receiver's movement most influences the coverage call) — matchup analysis. Maps to NGS Route Classification 2.0, Run Scheme Classification, FTN coverage shells.

**8. Per-player action-vector clustering for comps.**
`c07-r05/0410-analyzing-ingame-movements-of-soccer-players.brief.md`
Mini-batch K-means (K=200 on 660,848 movement vectors, 542 players); player = normalized cluster histogram; cosine distance → comps; uniqueness U_i and consistency C_i^k scores. Port: K≈50 on nflverse for draft-prospect/free-agent WR/RB/TE comps; archetype labels as target-share/YAC model features. Gates: half-to-half ARI ≥ 0.5, ≥0.02 out-of-sample R² lift on target-share regression. No formal validation in source paper; K arbitrary.

**9. Personnel-aware ratings for backup-QB spots + QB-change drift detection.**
(Tag-level finding; brief: `c07-r05/0451-adaptive-prediction-theory-combining-offline-and.brief.md`)
Relate a backup's starts through his own shared personnel, not the team label. QB-change weeks as concept-drift detection (when miscalibration persists, P(Y|X) drift dominates). *Program impact: directly supports the QB-behavioral program's backup-QB coverage.*

**10. Regime-conditional team strength via covariate Bradley-Terry.**
`c07-r06/0542-bradleyterry-rankings-for-recommender-systems-across.brief.md`
Fusion-regularized covariate BT on nflverse game covariates — fit team strengths conditional on Sunday's regime (home/away, rest differential, dome/outdoor, wind, QB-missing flags). Usable as margin-model feature and regime-sliced edge detection.

### Engine-calibration tier (wiring-lane value)

**11. Empirical-rate teacher table for calibration.** Fit calibrator against hierarchical empirical-Bayes teacher rates (probability decile × days-to-kickoff × spread × league, backoff M=25) rather than binary outcomes; ADAPT if test ECE drops ≥20% with Brier no worse than isotonic within 0.002. (~2–4 days, no GPU.)

**12. Decoupled slate Kelly.** Binary closed forms + empirical slate covariance + exposure caps; walk-forward 2024→2025 vs independent capped Kelly on log-bankroll growth and max drawdown.

**13. Weekly meta-drift layer (8–16 probes)** over frozen forecast; adopt if 2022–2025 walk-forward shows ≥0.005 Brier or ≥0.15 pts MAE-vs-close improvement concentrated weeks 6–18, max weekly Brier increase <0.02.

**14. Three Brier decompositions + weekly logistic-calibration monitor** (alert if Wald rejects α=0 or β≠1) + discrimination dashboard on GSE vs de-vigged market over ~1,900 nflverse games (2020–2026).

**15. φ-null pipeline from nflverse** as regime indicator for bankroll sizing and irreducible-error diagnostics (1–2 day effort); gate on positive correlation between season-ahead engine log-loss and (1−φ).

### Modeling-method tier (composable pieces)

**16. Post-sort isotonization of quantile vectors** (Prop. 2 guarantees no WIS downside) + medium aggregation (per-model × per-quantile weights via pinball SGD); gate ≥3% WIS improvement on 2025 data.

**17. NFL live Cox/Hawkes-style event model** on nflverse (scoring events + intensity shocks, log-linear intensities, 100k-path forward simulation) for live WP/spread/total surfaces; adopt only if it beats pregame-spread-carry on per-game log-likelihood (paired t-test p<0.05).

**18. Per-team linear DYNAMO** (NOTEARS + kernel-localized) on per-drive series for crew-aware home-field decomposition; gate ≥10% xP-MSE improvement on held-out weeks.

**19. BQN weather model** on HRRR + ASOS at 30 NFL stadiums (2022–2024) for calibrated kickoff wind/gust/temp quantiles; gate ≥10% CRPS gain vs naive on holdout season.

**20. Logistic-regime discriminator + weighted conformal intervals** for totals/spreads (last-4-weeks vs trailing-2-seasons on QB flags, injuries, weather, line movement); ADOPT if episode-conditional coverage within 3pp of nominal without >10% width inflation.

## Cross-file patterns

### Metrics that recur (mention counts across 300 briefs)
- NGS 598 · EPA 179 · ECE 155 · Kelly 138 · Brier 112 · nflverse 101 · CLV 60 / ROI 69 · PFF 32 · CPOE 8 · Sharpe 10
- **Calibration is the corpus's dominant religion.** ECE appears in more briefs than Brier; the standard promotion gate across ledgers is some form of calibration check (classwise-ECE, temperature scaling, isotonic links, empirical-Bayes teacher tables, Wald α=0/β=1 monitors). The wire-first program should treat "uncalibrated signal computes in shadow" as already-consensus.
- **Kelly sizing is a first-class research lane**, not an afterthought: fractional, decoupled-slate, drawdown-constrained (d≈0.2), survivalClamp, pick-inclusion rules, IPR reporting. At least 6 distinct Kelly variants with acceptance gates.
- **NGS is the premium layer, nflverse the workhorse.** 598 vs 101 mentions. The tracking lane (Voronoi, LSTM ball-carrier, trajectory diffusion, Banzhaf scheme attribution) is where the most distinctive edge is claimed; nflverse is where everything gets validated.
- **CPOE is nearly absent (8).** Pressure/CPOE-under-pressure — the exact lens that would have caught the Watson TNF miss — is not developed in this slice.

### Methods that compose
A composable stack emerges across independent ledgers:
1. **Regime detection** (HMM play-calling states → covariate-BT team strength → logistic-regime discriminator) — three independent papers converging on regime-conditional modeling.
2. **Attribution ladder** (differential teammate-controlled stats → GAT play-graph ΔEPA → Banzhaf scheme values → Voronoi blocking features) — four granularities of "who enabled the play," composable from cheap (nflverse differentials) to expensive (NGS graphs).
3. **Calibration ladder** (temperature scaling → isotonic links → empirical-Bayes teacher tables → conformal intervals → selective-risk abstention heads) — pick one per model class; they stack.
4. **Sizing ladder** (fractional Kelly → decoupled slate Kelly → drawdown constraint → survivalClamp → publish-volume governor) — defense in depth for bankroll.
5. **Allocation efficiency** (TAE/LPL → aggressiveness index → TPC over/under-targeted lists) — the coaching-tendency program's measurement suite.

### Contradictions between sources
- **Substantive:** to-side-only vs differential OL stats — resolved empirically (differentials win, R² 0.47→0.50). The Westbrook LPL case contradicts naive TAE deployment (shot-creation blind spot) — resolved by the usage-curve guardrail, but the tension is real: any allocation-efficiency metric needs the creator adjustment.
- **Paper-internal:** Byanna & Klabjan player counts (5 vs 6 vs 12→6 across sections); Elo-for-luck paper rejected for internal contradiction (β>0 required, reported negative).
- **Process-level (not modeling):** compliance scanner bans "guarantee" while a test requires "does not guarantee future results"; MIT badge vs no-LICENSE-file (resolved RESEARCH-ONLY); Roboflow 503 vs 443 image count discrepancy.
- **No direct contradictions** between two football-modeling claims were found in this slice — the arXiv ledgers are mostly non-overlapping methods, not competing answers to the same question.

### TRUST-SIGNAL semantic collision (flag for the program)
Readers used TRUST-SIGNAL overwhelmingly for **compliance/trust infrastructure** (claim gates, license gates, refusal-native copy, NGS internal-only doctrine, calibration floors) — 572 raw mentions, nearly all in this sense. The football sense (trusted targets, trust circles) appears only via the TAE brief's usage-curve discussion. **Recommendation:** the intelligence program should disambiguate — e.g. TRUST-TARGET for the receiver-trust metric vs TRUST-SIGNAL for the compliance layer — before the tags pollute the intake spec.

## Gaps: what this slice doesn't cover that the intelligence program needs

1. **No man/zone, blitz, personnel, formation, motion, or time-to-throw data.** Same gap as nflverse. The charting-data acquisition need is confirmed, not filled.
2. **No QB-individual behavioral profiles.** Nothing like the Rodgers-HHI / Watson-pressure work exists in the corpus slice — the QB-behavioral program is greenfield relative to the corpus.
3. **No coaching-tenure/play-caller mapping.** The HMM and aggressiveness methods assume you know who called plays when; the mapping itself isn't in the corpus.
4. **No target-concentration time series.** HHI-style trust metrics, target-share concentration trends — absent. TAE gives the efficiency-vs-allocation frame; the concentration dynamic isn't specified.
5. **OL coverage is one stale paper (2016, 2013–14 data).** No OL-as-unit vs individual decomposition on modern data; no OL injury-adjustment method.
6. **CPOE/pressure-splits underdeveloped (8 mentions).** The pressure-funnel lens that failed on TNF has no corpus backing in this slice.
7. **No 2026-season content.** Slice is methods + ops; nothing on current teams/players/schemes.
8. **Weather/totals lane thin.** One BQN paper (actionable), one wind paper explicitly rejected in-file. No snow/cold/altitude systematics.
9. **Backup-QB modeling is a tag-level suggestion, not a specified method.** Personnel-aware ratings are sketched, not derived.
10. **Injury/availability modeling exists but is siloed** (DeepHit reimplementation, landmark-horizon protocols, GP-DTW) — not connected to the QB/coaching programs.

## Anything that changes the QB-behavioral or coaching-tendency programs

1. **TAE is the trust-signal metric, specified end-to-end** (finding #1). The trust-target intake should be built around weekly TAE + TPC, with the usage-curve guardrail. This is the single biggest program upgrade in the slice.
2. **The OL program has a starting pipeline** (finding #4) — differential teammate-controlled stats on nflverse, no film grades needed. The "OL gates everything" layer is now measurable.
3. **The coaching program has its regime model (HMM, #2) and its effect-size metric (aggressiveness index, #5)** — plus the honesty standard (endogeneity flagging) for coaching-effect claims.
4. **Disambiguate TRUST-SIGNAL vs TRUST-TARGET** before the intake spec is written — the tag collision will otherwise corrupt the corpus-wide aggregation.
5. **CPOE/pressure is a confirmed corpus gap** — the pressure-funnel failure mode has no backing in the 1900 pages; it needs primary research, not corpus mining.
