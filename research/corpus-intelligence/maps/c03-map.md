# c03 Slice Map — Corpus Intelligence Aggregation

**Slice:** `~/workspace/vendor/Sports/docs/`, sorted index mod 10 == 2 → **300 files** (of 2,996 total, verified 2026-10-01)
**Map written:** 2026-10-01 (late session)
**Coordinator:** Corpus Coordinator 3 of 10

## Inventory

### Files covered
- **300/300 slice files** briefed. Verified per-chunk on disk: every chunk `c03_d_00`–`c03_d_59` has briefs ≥ its file count. **Zero files skipped** — no empty/corrupt/binary files; no `*-skipped.log` entries anywhere in the c03 tree.
- **352 briefs on disk** under `~/workspace/corpus-intelligence/briefs/c03/r00/`–`r59/`: 300 slice briefs + ~52 extra from the first-wave readers (partial coverage of the same dirs, distinct content — retained as valid intake).
- Chunk manifests: `/tmp/c03_d_00.txt` … `/tmp/c03_d_59.txt` (4–8 files each).

### Readers deployed (91 total)
- **First wave:** 15 readers (~8–12 files each), superseded by density upgrade; 59 partial briefs retained in `r00/`–`r14/`.
- **Second wave:** 60 readers r00–r59 (~4–7 files each), one chunk each.
- **Retries:** 10 (r03, r05, r08, r09, r12, r17, r18, r28, r33, r37) — all hit transient inference-proxy 429s on first attempt; all succeeded on retry.
- **Re-dispatches:** 2 (r34b, r38b) — the original r34/r38 readers reported "complete" but wrote zero briefs (silent write failure; dirs were missing entirely). Lesson: verify briefs on disk, never trust a completion report alone. Also repaired: r21 wrote one brief with a `.md` instead of `.brief.md` extension (renamed on disk).
- **Aggregators:** 4 (A0: r00–r14 = 116 briefs; A1: r15–r29 = 62; A2: r30–r44 = 73; A3: r45–r59 = 101).

### Slice character
Roughly: **arXiv deep-read ledgers** (the bulk — ADOPT/ADAPT/REJECT verdicts with numeric acceptance gates, mostly method-transfer: ratings, calibration, Kelly, ensembles, conformal, point processes, CV/tracking), **GSE ops/c Calibration doctrine** (Murphy decomposition, PROVEN gates, CLV ledgers, market-leak autopsies), and a **sports-research core** (props reports, DK Week 2 consensus/scheme lanes, Keenum QB study, Big Data Bowl methods, NGS inventory). Genuine QB-BEHAVIOR and COACHING intelligence is thin — most papers are method-transfer tagged OTHER/TRUST-SIGNAL (see Gaps).

---

## Top 20 most engine-actionable findings

### 1. Fourth-down coach risk-preference τ — the coaching-tendency estimand
`r22/docs__arxiv-program__research__2026-09-21__arxiv-deep__1575-learning-risk-preferences-fourth-down.brief.md`
Inverse-optimization recovers each coach's implicit risk quantile τ from 9 seasons (2014–2022) of 4th-down decisions: coaches optimize low quantiles of next-state value (conservative) vs the 4th Down Bot; τ̂_opponent-half − τ̂_own-half > 0 with 95% CIs excluding 0 until WP ≥ 0.8; risk tolerance rose 2014–2022 in every WP×region cell; performance regression (N=622 coach-season-WP-region cells) β_1(τ̂) = 0.769*** (SE 0.138), partial R² 0.048 — higher τ̂ → more points gained. ~Half of coaches (Nagy, Gruden, McCarthy, Pederson) are risk-seeking vs risk-neutral in the opponent half at low WP. Code released (github.com/nsandholtz/fourth_down_risk), nflfastR data.
**Action:** the exact estimand (τ per coach-team × field region × WP bin) for GSE's 4th-down coaching-tendency model, WP-edge detection, and opponent-tendency content. **Tags: COACHING**

### 2. Covariate Bradley-Terry — omitted covariates corrupt ratings permanently
`r25/docs__arxiv-program__research__2026-09-21__arxiv-deep__1451-inference-generalized-bradley-terry-covariates.brief.md`
CBTM: P(i beats j) = exp(βᵢ−βⱼ+Zᵢⱼₖᵀγ)/(1+exp(...)). Fitting plain BT when truth has covariate effects produces ℓ∞ merit error that grows with γ and does NOT shrink with n — permanent, non-vanishing bias (omitted home/rest/QB-status covariates corrupt every rating; more data cannot fix it). NBA 2018–19: home γ̂ = 0.45 (SE 0.065, p = 2.1×10⁻¹²), merit ordering reproduced East playoff seeding exactly. Corollary-1 separability gate: publish "Team A > Team B" only when the merit gap clears the √(log n/n) scale at 95%.
**Action:** replace plain BT/Elo win-prob core with covariate-adjusted merits (home, rest differential, travel, QB-change flag, dome mismatch) + publishable-ranking gate. Gate: CBTM walk-forward log-loss beats plain BT by ≥0.01 on NFL 2019–2023 weeks 7–17; |γ̂₁|/SE > 3 in ≥4 of 5 seasons. **Tags: TRUST-SIGNAL, QB-BEHAVIOR**

### 3. Post-2011 bye mispricing — a directly mispriced schedule feature
`r07/docs__arxiv-program__research__2026-09-21__arxiv-deep__0677-bye-bye-bye-advantage-estimating-the.brief.md`
Post-2011 CBA structural break: bye-week PD effect fell +2.21 pts/game pre-2011 (95% CI 0.61–3.80, P(>0)=99.6%) → +0.31 post-2011 (CI −1.01 to 1.64, P(>0)=67.9%; P(decline)=96.6%), while the market priced it the wrong way: +0.39 pre → +0.97 post (P(increase)=98.8%). Markets overvalue the post-2011 bye by ~0.66 pts; bye ATS cover rates flipped (2002–2010 home 55.8%/away 56.9% → 2011–2023 home 44.6%/away 52.7% — edge flipped anti-bye). Mini-bye PD +0.48 (n.s.), MNF +0.14 (n.s.); market prices HA near-perfectly (2023 PD +1.65 vs market +1.74). 5,679 games 2002–2023, Bayesian state-space.
**Action:** practice-time rest categories (MNF/Mini/Bye) as spread-model schedule features; run an anti-bye fade on teams getting >0.97 pts of market bye credit. **Tags: TRUST-SIGNAL, COACHING**

### 4. Severity-weighted OL/DL Bradley-Terry ratings — the trench feature source
`r07/docs__arxiv-program__research__2026-09-21__arxiv-deep__0667-opponent-adjusted-evaluation-of-nfl-pass.brief.md`
Ridge-regularized BT on 153,138 blocker–rusher interactions (2021 NFL, Hudl 10 Hz) with EPA-anchored severity weights w(loss)=0, w(win)=0.10, w(hit)=0.20, w(sack)=1.00 (benchmarks: no pressure 0.233, hurry 0.019, hit −0.161, sack −1.856 EPA). Holdout log-loss gains: win/global 0.0068 (CI [0.0047, 0.0093]); severity/global 0.0077 (CI [0.0049, 0.0106]); severity model leads All-Pro AUC in 3 of 4 slices (largest ΔAUC +0.150). Leaderboards: T.J. Watt 0.531 rusher, Joe Thuney 0.258 blocker (min 200 interactions); double-team rate 42.7%.
**Action:** opponent-adjusted rusher/blocker ratings feeding dropback-EPA and sack-probability submodels; brief suggests a QB time-to-throw interaction as the improvement. Gate: beat smoothed-frequency matchup baseline by ≥0.5% relative log-loss AND cross-season rusher-rating Spearman ≥0.50 (reimplement on Big Data Bowl tracking; source data proprietary). **Tags: OL, QB-BEHAVIOR, TRUST-SIGNAL**

### 5. Fisher/James-Stein shrinkage — NFL-validated rating accuracy gain
`r31/docs__arxiv-program__research__2026-09-21__arxiv-deep__1795-improving-pairwise-comparison-models-using.brief.md`
Empirical-Bayes shrinkage on BT team-strength MLEs (inversion-free direction from expected Fisher information) cut NFL2016 win% MSE 0.0591→0.0491 (−16.8%, parametric blocked bootstrap) and matchup Brier MSE −9.2%; semi-synthetic NFL schedule: parameter MSE −51% (α=0.51), pairwise-probability error −12% (β=0.12). Non-parametric bootstraps were useless at ≈−1% on sparse data ("cannot resample single-occurrence matchups" — use parametric/Fisher routes).
**Action:** post-process each ratings update (R̂=(I+AS)⁻¹), zero change to the rating model (~2 days), targeting the small-data early-season/cross-conference regime. **Tags: SCHEME**

### 6. Weighted-hybrid Ω ratings — interpretable, beats Elo/Glicko/TrueSkill everywhere
`r18/docs__arxiv-program__research__2026-09-21__arxiv-deep__0936-weighted-hybrid-behavioral-ratings.brief.md`
Factor analysis → logistic-regression-weighted factors beat Elo/Glicko/TrueSkill in ALL 12 dataset×setup cells: CS:GO all Ω 65.2% vs Elo 64.7; top-tier Ω 67.0 vs TrueSkill 57.2 (~10-point collapse of the incumbent); PUBG top-tier NDCG Ω 79.2 vs Elo 71.7. Weights named (CS:GO: Skill 0.5523, Experience 0.2767, Support 0.1710). Unsettled: team = max-member (0936) vs sum (0934) — QB is the natural max-candidate position.
**Action:** NFL Ω-rating — factor-analyze QB features (Skill: EPA/play, CPOE, success rate; Strategy: pace, play-action rate, 4th-down aggressiveness; Experience), test max-QB vs sum aggregation. Gate: beat GSE Elo log-loss by ≥0.005 on 2022–2025 walk-forward, linear form intact (publishable as named-factor breakdowns). **Tags: QB-BEHAVIOR, TRUST-SIGNAL**

### 7. Dynamic Rank Centrality — principled forgetting window, 5–10× faster
`r18/docs__arxiv-program__research__2026-09-21__arxiv-deep__0892-dynamic-ranking-btl-rank-centrality.brief.md`
Spectral method with theoretically optimal window δ* ≃ T^{2/3} (numerically confirmed): beats MLE on NFL 2011–2015 strength–Elo correlations (0.284–0.518 vs −0.337–0.092), 5–10× faster (59.6s vs 551.5s at n=400/T=100).
**Action:** per-week trailing-window union graph + leading left eigenvector, ℓ∞ bound as published uncertainty envelope. Gate: week-ahead log-likelihood within 0.005/game of current GSE rating at ≥3× rebuild speed. **Tags: SCHEME**

### 8. MMWU spectral reweighting — kill the divisional echo chamber
`r12/docs__arxiv-program__research__2026-09-21__arxiv-deep__0548-entrywise-error-bounds-for-spectral-ranking.brief.md`
The NFL schedule is an assortative SBM (dense intra-division, sparse inter-division). Near-linear MMWU SDP finds edge weights maximizing weighted Fiedler value λ_{n−1}(L^W), achieving ER-optimal entrywise error ‖π̂−π‖_∞/‖π‖_∞ ≤ C√(log n/(npk)).
**Action:** downweight intra-division games, upweight inter-division/inter-conference in power ratings; report λ_{n−1}(L^W) as a "schedule connectivity" health metric and widen CIs when it dips (Braess paradox: more data ≠ better spectral ranking). Gate: beat unweighted on end-of-season ℓ∞ error in ≥5/7 seasons AND next-week SU log-loss ≥0.001/game (nflverse 2018–2024). **Tags: SCHEME, TRUST-SIGNAL**

### 9. Cost-based (K+1) abstain head — learned, priced no-bet
`r57/research__2026-09-21__arxiv-program__phase2__quarantined__1029-node-classification-integrated-reject-option.brief.md`
arXiv:2412.03190, ADAPT: implement l_ce^d = −log f_y − (1−d)·log f_{K+1} as an abstain head on GSE's pick classifier, d from P&L economics. NCwR-Cost: Cora d=0.5 → 95.8±0.05 acc @ 42.6 coverage; beats Softmax-Response at every coverage level; cost-based > coverage-constrained (NCwR-Cov, λ=32, unstable).
**Action:** replaces post-hoc confidence thresholding with a learned priced abstention head — the publish/no-publish gate under the public/private doctrine. Gate: ≥8% higher backtested profit than post-hoc thresholding at matched abstain rate, abstain ≤30%. 2–3 days. **Tags: OTHER**

### 10. CQL staking — the slice's single ADOPT
`r34/docs__arxiv-program__research__2026-09-21__arxiv-deep__1923-conservative-q-learning-for-offline-reinforcement-learning.brief.md`
Conservative Q-Learning provably lower-bounds the true policy value (Theorem 3.3): 2–3× prior methods on complex D4RL, 36×/6× on Atari Q*bert/Breakout at 1% data, >40% Franka Kitchen success. GSE spec: discrete stake actions (0/0.25u/0.5u/1u/2u), per-week max-exposure cap, fractional-Kelly fallback on OOD states. Note: 1933's own table shows CQL (48.00±3.75% return, Sharpe 2.23±0.10) beating DT-LoRA-GPT2 (43.72±2.04, 1.76±0.08) — within-slice evidence favors CQL over pretrained decision transformers for staking.
**Action:** replace heuristic fractional-Kelly with a learned conservative stake/abstain policy; the lower-bound guarantee is a trust property. Gate: 2024 holdout ≥2pp ROI over fractional-Kelly, drawdown within 0.5u, lower-bound diagnostic holds ≥90% of weeks. **Tags: TRUST-SIGNAL**

### 11. KellyBench — the knowledge–action gap demands an integration test
`r05/docs__arxiv-program__research__2026-09-21__arxiv-deep__0276-kellybench-a-benchmark-for-longhorizon-sequential.brief.md`
Frontier LLMs articulate Kelly yet 7/25 wrote Kelly code never invoked at bet time; all five models lost money on average (−7.9% to −89.6% ROI; only 3/25 seeds positive). Fully adaptive seeds −11.1% ROI vs −70.0% static; 22/25 seeds had no promoted-team handling.
**Action:** integration test asserting the invoked sizing function equals the specified Kelly function on 100% of placed bets; walk-forward season simulator scoring on log-wealth R, not per-pick calibration; mandated retraining triggers + distributional-shift playbook (rookie QBs, mid-season coaching changes, scheme shifts). **Tags: TRUST-SIGNAL**

### 12. In-play updating gap — drift signal + liquidity-gated blender
`r28/docs__arxiv-program__research__2026-09-21__arxiv-deep__1611-when-do-markets-fully-process-public-information.brief.md`
Kalshi NBA: markets move only ~6.4pp per 10pp of benchmark win-prob change (β=0.638); the residual gap predicts 5–15 min drift (net ρ up to 0.484, all ***). Caution: executable midpoint drift dies at the bid-ask spread — evaluate at executable prices.
**Action:** build GSE's own out-of-sample NFL in-play win-prob benchmark on nflverse play-by-play, estimate NFL β + Gap→drift, blend market vs model by liquidity (trust market in liquid states, model in thin states). **Tags: TRUST-SIGNAL**

### 13. Risk-constrained Kelly + simultaneous-singles shrinkage — the singles-first math
`r28/docs__arxiv-program__research__2026-09-21__arxiv-deep__1624-risk-constrained-kelly-mutually-exclusive.brief.md` + `...__1634-optimal-parlay-wagering-whitrow-asymptotics.brief.md`
CRRA constraint Σ p_i W_i^{−λ} ≤ 1 cuts stakes ~33% in the worked example (0.0909→0.0606) with identical active support, 1-D log-scale calibration. 1634: simultaneous singles need only cubic (1 − Λ_jε²) shrinkage vs naive isolated Kelly; the singles-only restriction costs merely O(ε⁴) growth — quantitative backing for the singles-first stance.
**Action:** closed-form risk-constrained Kelly as the conservative sizing mode. Gates: ≥90% unconstrained bankroll with ≥20% smaller max drawdown than half-Kelly; ≥10% drawdown cut vs naive isolated Kelly. **Tags: OTHER**

### 14. ProbFM NIG evidential head — epistemic-gated staking, regime-shift detector
`r37/docs__arxiv-program__research__2026-09-21__arxiv-deep__2129-probfm-probabilistic-foundation-model-uncertainty.brief.md`
Normal-Inverse-Gamma head, single forward pass: aleatoric = β/(α−1), epistemic = β/((α−1)·λ). Crypto analog: Sharpe 1.33 vs 0.90, Sortino 2.27 vs 1.52. Epistemic → abstain/min-stake (should spike on new-QB/coach regime shifts); aleatoric → no-bet width around the line.
**Action:** attach to the sports TSFM backbone; epistemic is a principled new-QB/new-coach regime-shift detector. Hard gate: REJECT for sizing if 80% intervals miss nominal by >4 pts on 2022–2024 walk-forward; hard REJECT if epistemic does not rise on held-out regime-shift games. **Tags: QB-BEHAVIOR, COACHING, TRUST-SIGNAL**

### 15. 2025 prop regression slopes — passing attenuates hardest
`r56/docs__reasoning__week3-props.brief.md`
2025 projection→actual slopes (all <1.0 — projections over-extrapolate): passing_yards 0.623 (n=583, MAE 68.04, intercept 75.743, w=0.6), rushing_yards 0.837 (n=2007, MAE 17.14, w=0.3), receiving_yards 0.780 (n=4844, MAE 16.18, w=0.1), receptions 0.790 (n=4844, MAE 1.234, w=0.3). QB passing 0.623; QB rushing 0.6073 vs RB rushing 0.8273 (QB rushing far less sticky); RB receptions 0.7302 (least predictable reception family) vs WR 0.7939. 2026 watch rows (passing slope 0.2472, n=34) flagged watch-only.
**Action:** ready-to-use shrinkage weights for every player-prop projection; passing-yard lines need the largest regression of any prop family. **Tags: QB-BEHAVIOR**

### 16. RB zone/gap scheme-matchup matrix — scheme mismatch > role edge
`r57/research__2026-09-19-dk-week2__deep__rb-full-pool-scheme-2026-09-19.brief.md`
46-RB Week 2 matrix (zone/gap attempt shares vs opponent zone/gap yards allowed): Bijan Robinson 57% zone vs CAR 124.9 zone yards allowed (2.6× league avg) + 77% snaps + 52.6% target share (highest by an RB since 2011); Achane 55% gap vs SF 77.9 gap allowed (worst on slate; SF elite vs zone at 23.4); Tuten balanced 47/53 vs DEN (71.1 zone + 86.3 gap, ~60 worse than next). Downward flips: Hampton 75% zone into LV's 11.7; Love 73% zone into SEA's 16.8. One-game Week 1 samples, sub-10-attempt splits flagged directional-only.
**Action:** ingest opponent zone/gap defensive yards-allowed + RB zone/gap attempt-share splits (computable from nflverse play data) as a DFS matchup adjustment feature; use rolling-season rates. **Tags: SCHEME**

### 17. QB first-read rate + aggressiveness → WR target concentration
`r57/research__2026-09-19-dk-week2__deep__wr-phase2.brief.md`
Love 78.6% first-read (1st in dataset) → Watson/Golden; Brissett 77.5% → ARI concentration; Stroud 62.2% + 21% aggressiveness → Boutte X-role concentration; Lock 64.0% → JSN keeps volume (0.42 TPRR, 45.8% share). High first-read + high aggressiveness (Stroud, Brissett) = WR1 force-feed combo. Coverage-liability mapping: Stevenson (CHI) +158.3 passer rating allowed, Lassiter (HOU) +153.3, Sainristil (WAS) +149.3. Supporting: JSN YPRR 3.79; separation scores (Ayomanor 0.111 best, McMillan −0.108 fragile at 2.03 YPRR).
**Action:** QB first-read rate, aggressiveness %, and opponent-CB passer-rating-allowed as weekly DFS matchup features. Exact corpus CSVs named (qb-read-progression-week1.csv, qb-aggressiveness-by-team-week1.csv, passer-rating-allowed-week1.csv) — replicable from primary sources. **Tags: QB-BEHAVIOR, SCHEME**

### 18. Rusty-QB target behavior — individual blanket, not checkdown bias
`r57/research__2026-09-24__keenum-target-splits.brief.md`
Case Keenum career (n=2,270 targets 2013–2023): WR 59.6%, TE 20.4%, RB/FB 20.0% vs league 59.3%/20.9%/19.7% — dead-average system-follower. Layoff-return set (10 games, n=323): WR 62.2% (+2.6), TE 20.1% (−0.3), RB/FB 17.6% (−2.4) — rusty QBs are LESS RB-heavy, contradicting the checkdown-safety-blanket hypothesis. Canonical rusty starts show player-level blankets: 2019 Wk1 (Chris Thompson 10 targets = 23%), 2021 Wk7 (Jarvis Landry slot, 8 = 25%), 2023 Wk15 (Noah Brown 11 = 32%). The blanket is whoever owns the most separation-friendly role (slot, receiving RB, WR1) in that offense.
**Action:** model backup/rusty-QB spots as individual-blanket concentration on separation-friendly roles with explicit small-sample flags — replicate across the backup-QB population (single study, n=323). **Tags: QB-BEHAVIOR, SCHEME**

### 19. Trace hybrid live win probability — port spec with shrinkage schedule
`r05/docs__arxiv-program__research__2026-09-21__arxiv-deep__0487-forecasting-the-winner-of-a-live.brief.md` (+ r11 second brief)
Trace (Markov structural recursion + Elo prior + Bayesian-shrinkage live updates + HGBM stack) on 8,222 Grand Slam matches (1,505,355 point-level states, strictly chronological): test accuracy 0.7606/0.8215/0.8834 at 25/50/75% progress (77.84% all-points), log loss 0.4753/0.3530/0.2002 — best in every column, largest lead mid-match (~40–70%). Bayesian shrinkage kappa decays 640→160→40 as live evidence accumulates; HGBM weak early (below symmetric Markov at 25%) but strongest late (75%: acc 0.8738, log loss 0.2299).
**Action:** port to NFL live win probability — nflfastR wp as structural prior + shrinkage of live EPA toward pregame priors + HGBM stack. Gate: ≥0.01 log-loss beat over nflfastR wp at ≥2 of 3 progress checkpoints with ECE within 0.005. **Tags: OTHER**

### 20. Pregame bridge holdout — measured skill vs base rate, eligible not published
`r56/docs__reasoning__morning-2026-09-27.brief.md`
2025 holdout (n=285): Brier 0.223743 vs always-base-rate 0.249848 vs always-0.5 0.250000; log loss 0.636548; ECE (10 bins) 0.051868; skill vs base rate +0.026190, 95% CI (paired bootstrap, 10k) [+0.010734, +0.041393], P(skill>0)=0.9997. Contract: 285 ≥ 250 sample, 0.0519 ≤ 0.06 ECE → eligible but NOT published (two independent gates, only one moved; f2=1 blocks LIVE as pregame_context_logit duplicates LIVE historical_strength). Same brief kills the officials scalarizer: 2025 holdout n=269, r=+0.0274, slope=+0.209, |r|≥0.08 fails → DARK (f1). Also: 2018–2022 participation↔roster joins structurally impossible (bare numeric ids vs GSIS ids; per-season match 0.0000 vs 1.0000) — roster-dependent measurement uses 2023–2025 only.
**Action:** closest-to-shippable calibrated context module — clear the f2 deduplication decision to publish; keep officials DARK; restrict roster joins to 2023–2025. **Tags: SCHEME, COACHING**

---

## Cross-file patterns

### Metrics/methods that recur (2+ briefs)

- **Murphy decomposition `BS ≈ REL − RES + UNC`** — 4+ briefs (`r48/AGENT_LEDGER`, `r48/BRIER_IMPROVEMENT_STEPS`, `r50/LEVERAGE_LOOP`, `r50/RESOLUTION_INSUFFICIENT`). Live RES ~0.0048 vs ~0.03–0.05 needed for Brier ≤0.22. Standing doctrine: monotone transforms cut REL only; only new conditioning information creates RES. **The r48 finding that changes the calibration program:** the gate reads a zero-skill base-rate forecaster GREEN (RES unfloored, Brier 0.22 floor cleared by a constant 0.69 forecaster, only ECE binds at 0.05) — add a RES floor and gate on the debiased ECE estimator.
- **PROVEN ladder gates** — Brier ≤0.22, ECE ≤0.05, n≥100, consecutiveGreen K=3 (`r50/LEVERAGE_LOOP`, `r54/path-to-70`, `r58/session-handoff-2026-09-12`, `r52/COMPETITIVE_PRICING_AND_PACKAGING`: PROVEN = ≥100 settled + published calibration; ESTABLISHED = ≥500 settled + ≥52.4% CLV beat-close).
- **Debiased ECE estimator** `Σ_k w_k √(max(0, g_k² − v_k))` — binned ECE is biased upward at finite n (perfect forecaster ≈0.09 at n=100); gate on the debiased estimator (`r48/AGENT_LEDGER`, `r48/CALIBRATION_GATE_SCALE_2026-09-06`).
- **CLV as the external referee** — 2,272 settled picks: TOTAL 452 beat/371 lost (p=0.0026, BEATING), SPREAD 169/301 (p<0.00001, LOSING), MONEYLINE 29/165 (p<0.00001, LOSING HARD) — aggregate −8.2% hides the split (`r48/AGENT_LEDGER` CLV-1). Break-even 52.4% recurs across ledgers; CLV beat-close 23.0% vs 52.4% is the standing ESTABLISHED blocker.
- **Kelly staking family** (5+ briefs: 0276 KellyBench, 1216 correlation-aware Kelly +55% ELG, 1368 OU dynamic Kelly, 1487 ½/¼-Kelly + empirical-Bayes shrinkage, 1624 risk-constrained, 1634 Whitrow asymptotics). Consensus stack: fractional Kelly on shrunk edges, correlated-slate caps, conservative constraint mode. Note 0838's Bayesian shrinkage of sizing coefficients (Laplace priors: max DD −37.21%→−24.50%, Sharpe 1.05→1.32, 605 months).
- **Abstention / reject option** (6+ briefs: 0697 softmax-response + β=0.01 entropy, 0719 hybrid-U framework-only, 1012 two-stage rejector, 1029 NCwR-Cost, 1146 data-replication reject, 1156 RCPS bound-selection, 1002 abstention-as-reliability). The publish/no-bet gate is one of the highest-ROI lanes in the slice. Open disagreement on mechanism (see Contradictions).
- **Bradley-Terry rating family** — 0667 (ridge BT severity), 0882 (BT diagnostics), 0892 (dynamic rank centrality), 1451 (CBTM covariates), 1795 (Fisher shrinkage). Doctrine: put situational covariates inside the likelihood; diagnose assumptions before promoting a pairwise model.
- **Ensemble combination** — 0795 (diversity-weighted Bayesian TVW: oil 1-step RMSFE 1.337 vs 1.507, 11.3% gain; LS 0.643 vs 0.849, 24.3%; θ₂ consistently positive; θ₁ turns negative under misspecification), 1670 (FDRQS quantile synthesis; COVID-resilient via factor structure), 1176 (BPDS: tilt weights toward realized Kelly log-growth), 1680 (honest negative: λ-grid gain small, non-significant), 1166 (crowd beats most only 66.8% of 8,650 experiments; 85% of collective predictions fail unbiasedness).
- **CRPS / proper-scoring loss-alignment** — 0741, 0763 (train-with-the-score-you're-judged-on; Brier-vs-log-score forecaster rank correlation only 0.15 — scoring-rule choice changes model selection), 0795, 1585, 1670. Related: interval score 0763/1529/1644; Murphy diagrams 1086 (challenger must dominate on ≥95/100 grid points).
- **Conformal / interval rigor** — 1644 (localized conformal: 18–26% narrower at equal coverage; naive weighted quantile undercovers arbitrarily — must use adjusted level; effective-sample guard (Σw)²/Σw² < 50 → fall back to Mondrian); fail-closed rules: n<9 at α=0.1 → +∞/No-Bet; ECE>0.05 → fail-closed; Venn-Abers width>0.20 → refuse (`conformal-prediction-small-sample-calibration-audit`).
- **Walk-forward / purged-embargoed / chronological validation** — the dominant acceptance ritual; its absence is a kill-shot (0062 random split invalidates 92% accuracy; 0306 rateS tuned 2010–11/tested 2012 as the honest pattern; 0517 one-season test = uninterpretable).
- **Shrinkage toward priors** — 0578 (β<2v cap), 0487 (kappa 640→160→40), 0838 (BPPP), 1795 (James-Stein), 1680 (BIC-weighted).
- **Hawkes / neural point processes for game flow** — 1820 (decoupled marks/times; prior events ~500× background weight; shot AUC 0.67 vs 0.48–0.50 MAs) and 0427 (NMSTPP loss 4.40 vs AR(2) 6.98; HPUS correlates 0.92 with goals/xG). Both proposed as NFL adaptations; neither built.
- **Trajectory embeddings for tracking** — 1862 (HiT-JEPA d=256), 1872 (TrajFM L=2 d=128, STRPE relative attention), 2210 (Neural Game Engine: 23-node player graph, n=3 message passing; F1=1.0 on 100×100 grids over 500 steps), Big Data Bowl deep-dive (delta prediction, FiLM ball-landing conditioning; RMSE 0.518 top-5%).
- **Symbolic/equation discovery** — 1830 (AI Feynman 2.0), 2173 (ERBench: PySR secret-set recovery 0.29±0.04 — run the 200-formula panel as the mandatory SR regression test), 2163 (SINDy; metric-optimal ≠ structurally correct — human structural review must pair with numeric gates), 2050 (warm-start GP).
- **Isotonic / PAVA calibration** — conformal audit, WIRING-PLAN W-1 (`pavaIsotonic`), model-process-checklist (isotonic ONLY if holdout Brier improves), CARDS_PROOF_LADDER.
- **n ≥ 30 before public claims** — ask-the-brain (30 settled picks per model version), conformal audit (n≥30 public win-rate displays), public-trust-layer (win-loss published at 30th settled pick).
- **Leakage / kickoff-cutoff discipline** — 1845 (cutoff-timestamp enforcement, 100% replay-audit gate), handoff V1/V2 (chronological split only, post-kickoff fields never features, missing stays null), model-process-checklist (0 leakage-probe failures).
- **Regime/change detection** — 0236 (doubly-online changepoint; 40% rate = over-aggressive), 0598 (permutation two-sample; NFL 2016–17 vs 2017–18 fail-to-reject p=0.971 — rejection gate for refitting team-strength priors), 1905 (z^t drift as unsupervised scheme/coaching-change detector), 2129 (epistemic rise on regime shift).
- **QB aggressiveness % + first-read rate** (Wk1 @GridironInfo): Mahomes 4% lowest, Stroud 21%, Brissett/Willis 22%; Love 78.6% first-read, Brissett 77.5%, Purdy 27.0% — across consensus-qb, games-phase1, wr-phase2 briefs.
- **Zone/gap scheme data** — rb-full-pool-scheme (Razzball) corroborated by full-tables README (Henry 5.25 YPC on zone since last season, 61.4% zone share; Price 87% zone; Irving 48% gap, 5th-best gap YPC).
- **Pressure generated vs allowed trench matrix** — games-phase1 (KC 56.3% generated highest vs IND 32.4% allowed; CLE allowed 50.0% worst), wr-phase2 (MIA allowed 40.5%, DEN 56.3%), reverse-engineering-intake (qb_hit/dropback r=0.241 on 250 games).
- **Opponent-adjusted efficiency / "our DVOA"** — statking-coverage-map (`epa ≈ leagueMean + offense + defense`, iterative coordinate descent over nflverse pbp) and reverse-engineering-intake (2025 defensive EPA prior + 2026 observations): same methodological family, one formalized, one wired.
- **News/text sentiment → markets** — 0860 (5-dim LLM news rubric → NFL injury/beat news), 1116 (DistilBERT headline log-odds + VADER lags; ridge ≈4.5% RMSE reduction), 1106 (lexicon-CNN; SD halved vs plain CNN).
- **Live win probability anchoring** — 1542 (time-decayed pre-game anchor drives the entire 11.4% Brier gain 0.1451→0.1284; dynamic prior alone barely helps), 1611 (Kalshi β=0.638 underreaction).

### Contradictions between sources

1. **Short rest: directional adjustment (live, unbacktested) vs variance-only doctrine.** `r50/NIGHTLY-2026-09-28` records `short-week-road-deficit.ts` emitting `res.spreadPointAdjustment` (−1.75 baseline, −0.65 over 1500 miles, "34% increase in 4th-quarter explosive plays") with no backtest and no source (spec-rule-6 violation; DOC-1 ledger row). `r47/research-brief-rest-travel` holds the opposite: short rest → higher result variance; the defensible read is wider uncertainty bands, not a direction — with a pre-registered 50-game falsification rule. **Resolution required:** backtest or demote the live magnitudes.
2. **Market prices in the confidence path: exploit vs remove.** `r58/session-handoff-2026-09-12` reports the selective path turned ON (δ=0.1, rank on marketFairProb; filtered set Brier 0.150, RES 0.041). `r55/REDTEAM-AUDIT-2026-09-27` records the opposite structural decision: Wave 4 rewired confidence market-independent for SPREAD/TOTAL (0-movement pin; edgeComponentScore removed — "no model in it; it is the vig asymmetry"); MONEYLINE stays market-anchored (fairProb ≥ 0.58). `r56/confidence-market-leak-2026-09-27` documents the original leak (57→50, 61→54 on byte-identical bets). INFERENCE: marketFairProb belongs in the ranking/slate layer, not in published confidence — but no single brief states both halves together.
3. **Which gate statistic binds: Brier vs ECE.** `r48/CALIBRATION_GATE_SCALE_2026-09-06`: only ECE binds — Brier 0.22 is cleared by a constant 0.69 forecaster (UNC=0.2139) and RES has no floor, so "the gate as written can pass a model with no skill." `r50/LEVERAGE_LOOP` and `r54/path-to-70` continue to operationalize Brier ≤0.22 as the binding target. **The r48 critique is the stronger evidence** — add the RES floor.
4. **CLV blocker: model problem vs data-quality problem.** session-handoff (2026-09-12): CLV beat-close 23.0% vs 52.4% is "a model problem, not a gate problem." `r53/edge__2026-08-19-deepseek-adversary-round3`: the #1 false-certification mode is contaminated closing prices (stale/model-derived/non-executable). `r48/AGENT_LEDGER`: 355/725 MLB spreads were off-ladder arithmetic means (fingerprints like −1.375, −1.4375); 938/1,901 published SPREAD/TOTAL lines off any book-quoted grid, flattering the record ~3.8 pts; grading line ≠ displayed line on 73% of TOTAL picks (34 outcome-flipping); 69.5% of settled picks lack an ESPN event id and are unauditable. **The line-integrity defect class pollutes every historical CLV read** — ship only quoted-ladder lines (guards exist: `isPublishableSpreadLine`, published-line snapping, write-once bet terms), grade on ESPN event-id evidence.
5. **Abstention mechanism: learned reservation head vs softmax-response.** 0618 (Deep Gamblers) ADAPTs the reservation-class head as a no-bet filter (retained-picks ROI beats all-picks by ≥2pp, ≥60% retention). 0697 counters: external selection heads fail catastrophically (SelectiveNet head 99.00% error at 10% coverage); discard the head, use Softmax Response ranking + entropy regularizer (β=0.01, up to 85% relative error reduction). Both agree abstention gates the publish lane; 0697's direct falsification of learned heads is the stronger evidence.
6. **Momentum: dead premise vs unfinished problem.** 0062 REJECTs momentum outright (92.37% headline accuracy invalidated by random split; Garrett's own lab falsified Koopman/DMD momentum at p=0.89, AR(1) beats DMD). 0427 claims its neural marked point process "supersedes the DMD/AR(1) negative result" (NMSTPP 4.40 vs AR(2) 6.98). 0427 is honest about the negative result it inherits but reopens a lane 0062 treats as closed.
7. **Diversity in ensembles: helps vs hurts.** 0795: diversity-weighted combination improves (θ₂ consistently positive). 1166: more diverse human-forecaster crowds are LESS accurate (diversity–collective-error Spearman ρ=0.31, p<10⁻⁶); unbiased virtual crowds ≈10× more accurate than real expert crowds. INFERENCE: diversity-as-disagreement among calibrated models is exploitable; diversity among biased humans is bias dispersion — screen for bias first (1166), then reward diversity (0795).
8. **Recency weighting: helps vs λ≈0.** 0914: linearly-weighted recency average the most consistent estimator across fantasy gameweeks. 1553: Bayesian posterior mean λ≈0.098, mode ≈0 — "setting λ=0 would possibly provide the best forecasts." INFERENCE: domain matters (noisy weekly fantasy data vs analyst-forecast combination); test locally.
9. **Broadcast pixels: REJECT vs ADAPT.** 1076 REJECTs broadcast-camera calibration as domain-disjoint; 0366 ADAPTs the broadcast-video 3D annotation-mining pipeline (PnLCalib → triangulation → box optimization, JaC_0.5% > 0.75 gate) as an NGS-replacement lane. 0366 is the actionable one; resolve before committing to a tracking-from-video lane.
10. **1933's own table contradicts its emphasis.** DT-LoRA-GPT2 (43.72±2.04% return, Sharpe 1.76±0.08) vs CQL (48.00±3.75%, 2.23±0.10) — value-based offline RL still competitive despite the pretraining gain. Combined with 1923's ADOPT, within-slice evidence favors CQL for the staking lane.
11. **Paper prose vs its own tables.** 1036 GTA-Net claims to "outperform across all metrics," but its Table 3 shows Yu et al. beating it on every MPI-INF-3DHP metric (PCK 98.19 vs 95.2, AUC 76.53 vs 70.8, MPJPE 31.36 vs 48.0 mm). TRUST-SIGNAL lesson: trust tables, not prose.
12. **2191 (pruning never hurts) vs 1845 (deletion can hurt).** NFS ≥ full-set on every model/dataset — but 1845's adversarial notes: drift-feature removal can delete legitimately predictive regime features. Synthesis (from 1845): quarantine into a regime-risk list with an f×1[season ≥ drift_point] indicator instead of deleting; treat 2191's result as conditional on task-supervised pruning criteria.
13. **1705 (constraints cost accuracy) vs 2094 (constraints are safety).** Dropping the monotonic-decrease constraint lifted PSO accuracy 79.25%→80.25% — but 2094's Two-Gate rule exists because utility-driven changes erode learnability. Keep both: report the accuracy cost of each constraint rather than deleting it silently.
14. **Lasso as feature selector: works vs over-shrinks.** 1136 uses per-position Lasso successfully (CV-R² 48.5–61.5%); 1467 documents Lasso-prior over-shrinkage classifying EVERY coefficient as zero while spike-and-slab discriminated. Dataset/scale-dependent — validate the prior on target data.
15. **1680 tempers combination enthusiasm.** λ-grid combination gain small and non-significant (MCS retains both) — reconcilable: 0795/1176/1670 combine diverse sources, 1680 combines hyperparameter variants of one estimator.
16. **Simulated numbers cited as evidence.** 0719 FinAbstain's attractive numbers (selective accuracy 0.688 at 72% coverage, ECE 0.026, Sharpe 1.08) are explicitly simulated — flagged by its own limitations section; never cite as measured lift.

### Methods that compose (stacks worth building)

- **Rating stack:** CBTM (covariates inside the likelihood) + Fisher/James-Stein shrinkage (post-process) + DRC δ*≃T^{2/3} forgetting window + MMWU divisional reweighting + Elo K-scheduler (0578: K_k = s′·β_{o,k}, cap K<2v̂·s′, optimal K ~160–190 not the FIFA/FIDE range) + cycle-enrichment parity diagnostic (0558: |z|>2 in ≥3 of last 6 seasons → widen uncertainty). Each is a thin layer with its own numeric gate.
- **Publish/stake stack:** NCwR-Cost abstain head (publish/no-publish) → CQL conservative staking policy → risk-constrained Kelly conservative mode → KellyBench integration test (invoked == specified on 100% of bets). ProbFM NIG epistemic as the regime-shift override.
- **Live lane:** Trace hybrid (nflfastR wp prior + shrinkage kappa 640→160→40 + HGBM) + Hawkes decoupled marks/times event model + in-play Gap→drift blender (liquidity-gated). 1611's functional form transfers; its NBA coefficients do not.
- **Player intelligence:** Ω factor ratings (Skill/Support/Strategy/Experience) + SIDO own/ally/enemy attribution (adopt discrimination/independence/stability as the mandatory metric-QC gate: discrimination ≥0.5, stability concordance ≥0.6, else 5-category buckets) + severity-weighted OL/DL ratings + QRCF QB–receiver chemistry latent factors (0406) + competing-risk drive-outcome ratings (0437) + TMLE causal kicker evaluation (0142).
- **Combiner:** FDRQS-lite quantile synthesis (L=3, δ=0.8, 9-quantile grid; gate ≥4% cumulative CRPS over best single agent, PIT KS ≤0.05) with diversity-weighted Bayesian TVW as the challenger; decision-utility weighting (BPDS) as the improvement experiment.
- **Interval engine:** localized conformal (18–26% narrower at equal coverage) with the effective-sample guard, routed by target type — continuous → CQR, binary → Venn-Abers/Platt-Isotonic, time-series → rolling-origin/SPCI (CQR residual math is invalid for Y∈{0,1}).
- **QA/release gates:** quantitative probe suite (1967: ~25 football probes, hit rate ≥0.8, all null probes hold; 14/1,378 runs had perfect hit rate with catastrophic target error — probes must sit in the same connected component as the target) + MeT-Pose label-free pose QA (mirror/rotate/blur/downscale rule taxonomy) + ERBench 200-formula panel for SR changes + Two-Gate promotion (ΔBrier CI lower bound >0.001 AND complexity B ≤ 2×seasons).

---

## Gaps — what this slice doesn't cover that the intelligence program needs

### QB-behavioral program gaps
- **QB mechanics:** time-to-throw distributions (clean vs pressure), CPOE-under-pressure, play-action/dropback splits, scramble-vs-throwaway behavior, pocket movement/exit direction, progression-read tendencies, checkdown rates, pre-snap motion/audible rates, accuracy-by-route-type. Only fragments exist (CPOE, first-read rate, aggressiveness %, INT-worthy rates, Allen 71% scramble composition).
- **QB-by-coverage / QB-vs-pressure response tables** are intake-grade only (X-metric dumps flagged unverified: Baker 5.42 YPA vs blitz 31st of 31; Purdy 8.71 YPA vs zone 4th; JSN vs Cover 4 0.47/5.89/58.7%). No first-party measured tables; charted pressure data unavailable (only qb_hit/dropback; sack modeling vetoed at R²<0.005).
- **Target-concentration-under-stress** is a single study (Keenum n=323) — needs replication across the backup-QB population; no general rust/layoff model.
- **No man/zone WR split coverage for main slates** — explicitly flagged in wr-phase2; man/zone splits need fresh charting.
- **QB availability/mobility decay:** injury lane is critiques and frameworks (1565 ACWR fixes, 0773 landmark discipline, 1312 rejected, 1693 concussion kinematics on mouthguard data) — no NFL QB-specific availability or mobility-decline model.
- **No rookie/age curves for QBs; no college-to-pro QB projection** (only 0649's combine null: matriculation accuracy 0.83, career snaps R²=0.17).
- **QB-status as a rating covariate** is named in 1451 but its magnitude is unestimated anywhere.
- **No QB archetype × scheme fit predictive feature** — 0958's EventGPT does player-context substitution (Haaland 1.37 in Højlund's context vs 2.71 at City) but no NFL QB-archetype-by-scheme feature set exists.
- **QB↔OC fit and QB college→NFL scheme-transition learning-curve discount** are named as strategy-doc signals with no deep-read brief behind them.

### Coaching-tendency program gaps
- **Play-calling tendencies beyond 4th down:** early-down pass rate over expectation, neutral-script play-action rates, 2-point conversion tendency, red-zone run/pass mix, tempo/no-huddle rate (only week-2 snapshots: LAC motion 84.3%, TEN no-huddle 22.4%, WAS RPO 14.7%), blitz rate (DC side), play-action/under-center vs shotgun scheme signatures. **The single biggest named-lane gap** — 1575's τ estimand covers only 4th downs.
- **Coordinator-change regime effects:** 1905's z^t drift detector and 1888's scheme-change replay are pre-registered specs, not run results; 2129's epistemic-rise-on-regime-shift gate is pre-registered, not run.
- **In-game coaching behavior:** aggression shifts, timeout usage, challenge rates, halftime adjustments — nothing.
- **HC-vs-OC attribution** — nothing.
- **Situational splits exist only as week-2 research** (2026 league 2nd-&-1 pass rate 32.7% vs 20.6% in 2025; Panthers 87.5% pass after successful 1st-down run vs Jets 0.0%) — never wired as standing engine features; the only measured coaching signals are NULLs (fourth-down aggressiveness r=−0.014; officials r=+0.027).
- **No NFL play-sequencing model** — 1820's Hawkes framework is soccer; fitting a marked point process to NFL down/distance/play-type sequences is proposed but unbuilt.
- **No coverage-scheme × QB-behavior interaction** — scheme content is metric-level (motion-at-snap 36.9%, target EPA, yards/coverage snap) with no link from coverage shells to QB decision outcomes.

### OL / trust-signal gaps
- **OL lane is metrics-without-modeling:** time-to-pressure-allowed (Linderbaum 3.64s), pressure-rate-allowed (Seumalo 3.7%, Vera-Tucker 4.3%, Edwards 0.7% quick), double-team pressures (Allen 64 since 2021) — no OL-continuity/injury adjustment model, no OL→QB-pressure→turnover causal path, no run-blocking scheme fit, no pressure-attribution beyond win/loss.
- **Published-line integrity:** off-ladder arithmetic-mean lines (355/725 MLB spreads; 938/1,901 lines off any book grid), grading line ≠ displayed line on 73% of TOTAL picks, 69.5% of settled picks unauditable (no ESPN event id). Every historical CLV read is polluted until the quoted-ladder guards are the only published path.
- **12-of-15 signal-family weights rest on no measured evidence; the fixture-triplication trap** (100 rows over 11 fixtures ≠ 100 fixtures) — measure first (Welford anchor census, fixture-distinct floors), weight only on settled evidence.
- **NFL-native market microstructure is thin:** 1477 (election BSTS) and 1611 (Kalshi NBA) are cross-domain adaptations; no brief directly measures NFL steam/prop-line-move informedness. The 5-dim LLM news rubric (0860) is the unbuilt structured beat-writer/injury-news feature extractor.
- **Totals weather is a stated hole** (wind/temperature shelved to roof-only); rest/travel directionally unresolved (contradiction #1).
- **Backtest infrastructure for QB-behavioral features:** the props-report's recommended next step — backtest projection method vs 2025 Weeks 1–18 closing prop lines — is still outstanding; "gaps are hypotheses, not edges, until validated."
- **Depth-chart/training window:** depth_chart NFL-only, capped tuner coverage at 4.9% of settled corpus; participation↔roster joins only work 2023–2025 (player-id crosswalk from REDTEAM-AUDIT legitimately unlocks 2018–2024 for personnel features — the exception).
- **~60% of the A3 slice (FABLE governance, launch ops, credit lanes, media strategy, moderation, sponsor kit) carries no sports signal at all** — intake-grade for the intelligence program.

---

## Notable verdicts with numeric gates (carry-forward list)

- **ADOPT 0122 (ATB rate limiting):** 70.13–97.3% fewer 429s at 11.7–27.6% longer completion — replace fixed-sleep retries in GSE fetch scripts (Odds API 20K credits/mo), α/β from the GitHub code.
- **ADOPT 0142 (TMLE kickers):** direct-standardized rate must predict held-out next-season FG% with ≥10–15% lower RMSE than raw rate (n=9,786 attempts, 46 kickers, 85.3% success; indirect standardization is a misuse — Shahian et al. 2020).
- **ADOPT 1923 (CQL staking):** ≥2pp ROI over fractional-Kelly, drawdown within 0.5u, lower-bound diagnostic ≥90% of weeks.
- **ADAPT 1029 (NCwR-Cost):** ≥8% backtested profit over post-hoc thresholding, abstain ≤30%.
- **ADAPT 0892 (DRC):** week-ahead LL within 0.005/game of current rating at ≥3× rebuild speed.
- **ADAPT 0548 (MMWU):** beat unweighted on end-of-season ℓ∞ error in ≥5/7 seasons AND next-week SU log-loss ≥0.001/game.
- **ADAPT 1795 (shrinkage):** beat unshrunk on rest-of-season Brier in ≥2 of 3 seasons (2023–2025), ECE within 0.003.
- **ADAPT 0936 (Ω ratings):** beat GSE Elo log-loss by ≥0.005 on 2022–2025 walk-forward.
- **ADAPT 1451 (CBTM):** walk-forward log-loss beats plain BT by ≥0.01 (NFL 2019–2023 weeks 7–17); |γ̂₁|/SE > 3 in ≥4 of 5 seasons.
- **ADAPT 0667 (severity OL):** beat smoothed-frequency matchup baseline by ≥0.5% relative log-loss AND cross-season rusher Spearman ≥0.50.
- **ADOPT 0677 (anti-bye fade):** permanent if replication confirms post-2011 bye PD < 1.0 with market pricing ≥0.5 pts above it.
- **ADAPT 1575 (τ coaching):** the estimand itself is the deliverable — τ per coach-team × region × WP bin on nflfastR 2014–2022+.
- **ADAPT 0487 (Trace live-WP):** ≥0.01 log-loss beat over nflfastR wp at ≥2 of 3 progress checkpoints, ECE within 0.005.
- **ADAPT 2129 (ProbFM NIG):** CRPS within 1% of quantile-head baseline; 80% intervals within ±4 pts of nominal; hard REJECT if epistemic doesn't rise on regime-shift games.
- **ADAPT 2111 (CLIP football):** ≥70% top-1 on held-out football concepts; REJECT if <55%.
- **ADAPT 1888 (AdaER P3):** beat plain replay on ≥3 of 4 walk-forward metrics, worst-4-week Brier +0.002, no metric degrading >0.001.
- **ADAPT 2066 (TabSyn):** column-density error ≤50% of TabDDPM; real+synthetic GBDT log-loss ≥0.003 better on 2024 holdout.
- **ADAPT 2191 (NFS pruning):** 2024 held-out log-loss +0.003 with k ≤ 40 streams.
- **ADAPT 1967 (quantitative probes):** hit rate ≥0.8, all null probes hold; adopt as release gate iff hit rate correlates with downstream Brier improvement (Spearman ρ ≤ −0.5).
- **ADAPT 2146 (CVaR category selection):** CVaR_0.25(weekly profit) ≥1.15× best baseline AND mean ≥0.9× post-all, posted picks ≥60% of post-all volume.
- **ADAPT 1611 (in-play gap):** build GSE's own NFL in-play benchmark; functional form transfers, NBA coefficients do not.
- **ADAPT 1644 (localized conformal):** worst-stratum coverage gap −30% vs marginal CQR at ≤105% mean width, else Mondrian fallback.
- **ADAPT 1670 (FDRQS-lite):** ≥4% cumulative CRPS over best single agent, ≥2% over univariate DRQS-lite, PIT KS ≤0.05 (paper's MCMC infeasible — sequential Laplace/variational filter).
- **ADAPT 0276 (KellyBench integration test):** invoked sizing == specified Kelly on 100% of placed bets; score walk-forward on log-wealth R.
- **ADAPT 1624/1634 (constrained Kelly):** ≥90% unconstrained bankroll with ≥20% smaller max drawdown than half-Kelly; ≥10% drawdown cut vs naive isolated Kelly.
- **ADAPT 1862/1872 (tracking pretraining):** ≥40% top-1 same-play-concept retrieval (vs ≤15% random) OR ≥0.002 downstream log-loss improvement; frozen encoder within 5% of fine-tuned, cross-season degradation ≤10%.
- **ADAPT 2210 (Graph Neural Game Engine):** n=3 beats n=1 on +1s position error by ≥15%, roster-subset degradation <10%, 500-step rollouts within 2.0 yards mean error.
- **ADAPT 2173 (ERBench):** gate every SR pipeline change on the 200-formula panel (PySR 0.29±0.04 secret-set recovery is the champion to beat).
- **Fail-closed gates (conformal audit):** n<9 at α=0.1 → +∞/No-Bet; ECE>0.05 → fail-closed; Venn-Abers width>0.20 → refuse; n≥30 before public win-rate displays.
- **Two-Gate promotion (2094):** bootstrap CI lower bound of ΔBrier > 0.001 AND complexity B ≤ 2×training seasons.
- **Honored REJECTs:** 1076 (TVCalib broadcast — though 0366 partially contradicts), 1096 (solar weather — replaced by 1302), 1196 (soccer tactics), 1206 (Meta-CTA toy), 1312 (tennis duplicate), 0062 (TCDformer — leaky split + lab-rejected momentum), 0256 (cotton phenotyping), 0527 (VLM robotics), 0537 (table-tennis robot), 0386 (IMUDiffusion — no IMU data; keep the PID-1 synthetic-stress lesson), 1765 (ICM poker — no transfer), 0517 (2015 QB fantasy — paper's own verdict: errors too large; keep the EWMA feature idea), 0608 (cricket GP — superseded by 0604; keep per-player form-timescale + probabilistic head-to-head nuggets), 0719 (FinAbstain numbers — simulated, never cite as evidence).
- **From reader handoffs (briefs on disk, aggregator top-8 overflow):** CQR fail-closed calibration stack spec; 12 NGS metric builds with numeric adoption gates (CPOE Brier skill ≥0.9, pressure prob ±2pp of 10.3%, etc.); trust-layer tier-to-confidence coupling; BSTS τ²/σ² steam-vs-noise classifier; fractional-Kelly staking layer (GSE has no stake sizing — Kelly cited 12×, never read); totals tie-break bug (6,868/6,868 OVER on replay, 0.5068 win rate at 67 confidence — same bug class in spread path); player-id crosswalk unlocking 2018–2024 personnel training (hop 1 4,932,894/4,932,894, hop 2 100% per-season); historical-odds backfill priority (SportsbookReview 2011–2021 open/close, Bobby King 1.8M-row 2025–2026 tracker, Covers 1952-present); MDPI 20-px GT-matching eval harness (threshold sweep 0.05–0.95, operating point 0.35; exactly-11-players merge invariant); FieldCoachAI route-metric panel (breakAngle 92°, sepAtBreak 2.1 yds, sepAtCatch 1.4 yds) as the CV output target; GameNGen conditioning-noise recipe (flatten 64-play divergence ≥30%); Bernstein-UCB CVaR pick-category selection; QRCF QB–receiver chemistry; neural drive point process + utilization score; competing-risk drive-outcome ratings; Bayesian shrinkage stake sizing (BPPP); lag-dependent causal steam graphs (Pinnacle→followers); path-decomposition form features (PP, MDD, R); OC-SORT + central-distance recovery (HOTA 67.107→71.764→73.968); MeT-Pose label-free pose QA; size-weighted ball-detection loss (6–14 m per ±10% size error vs 0.6–1.6 m per ±2% center shift).

---

*End of c03 map. All numbers trace to briefs under `~/workspace/corpus-intelligence/briefs/c03/`; items marked INFERENCE in the aggregator syntheses (`/tmp/c03_agg_0.md` … `/tmp/c03_agg_3.md`) are flagged there.*
