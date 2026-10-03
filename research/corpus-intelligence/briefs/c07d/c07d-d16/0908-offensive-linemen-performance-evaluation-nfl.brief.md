# arxiv-deep/0908-offensive-linemen-performance-evaluation-nfl.md
## What it is (1-2 sentences)
Five-stage pipeline (Byanna & Klabjan 2016, arXiv:1603.07593v2) for evaluating NFL offensive linemen without film grades: stepwise OLS learns what the salary market prices, "differential statistics" (to-side minus not-to-side) control for teammates, k-means clustering groups comparable players, and parametric salary distributions per cluster flag over/undervalued linemen.

## Key metrics/methods (formulas where given, else "not specified")
- Salary model: Salary_i = X_i′β + ε (OLS; eq. 1). Eqs. (2)–(5) define normalized coefficient weights and Experience/Performance composites; (6) Krzanowski–Lai statistic on within-cluster SS for choosing k; (7) silhouette gate s(i) > mean s — exact formulas for (2)–(7) garbled in PDF extraction; procedure fully described in prose.
- Five "differential statistics" (each = to-side minus not-to-side, or allowed-rate ratios): stuff % differential, yards/attempt differential, successful-run % differential, pressures-allowed %, sack %. Line split into 5 directional splits (LS, L, M, R, RS); "to side" per position (e.g., LT: LS,L; C: L,M,R), "not to side" = all other splits.
- k-means (Hartigan–Wong) on standardized salary-model predictors; k=7 chosen via Krzanowski–Lai statistic local maxima.
- Per-cluster salary distribution fits from income families (Lognormal, Gamma, Beta, Pareto, Weibull — McDonald 1984); chosen by χ² + AIC + P-P/Q-Q plots; clusters with n too small skipped.
- Anomaly rule: flag players with P(salary ≥ S) < 5% (one-sided) as over/undervalued, plus silhouette-value gate s(i) > sample mean.
- Numeric gate in ledger (DFS transplant): ADOPT the cluster-salary value screen as a weekly DFS input iff flagged "undervalued" players outscore their positional slate average in points-per-$1K by ≥ 10% with a paired t-test p < 0.05 over the 2023–2025 test window (≥ 40 slates).

## Data sources named
- STATS LLC play-by-play aggregated game-by-game: every OL with ≥1 snap in 2013-14 and 2014-15 regular + playoff games; 5,383 player-game data points × 44 variables (game code, date, player, team, opponent, position, rookie year, draft round/pick, birthday; salary: base, signing bonus, incentives, cap value, snaps; rushing/passing splits).
- Pro Bowl / All-Pro selections (Pro-Football-Reference, manual); PFF grades 2007–2015 (manual extract, regressor candidate + validation).
- STATS LLC data proprietary; paper's exact data not released.

## Findings (numbers and facts, not vibes)
- Salary model (Table 11, adj. R² = 0.50): intercept 5,399,261 (p=2.12e-15); avg PFF prior to contract +56,697 (p=0.00268); experience −199,134 (p=0.00831); draft round −264,405 (p=5.38e-5); Pro Bowl selections +624,910 (p=0.000338); stuff % differential −82,247 (p=0.012284); yds/attempt differential +382,197 (p=0.012284/0.044516 — ledger prints p=0.044516); sack % −2,516 (p=0.022994). Final model = 8 predictors; exclusions: rookie contracts, non-UFAs, pre-2011-CBA contracts; duplicate-contract players averaged to one row.
- Current-year PFF rating NOT significant (dropped) — differential stats beat PFF for salary explanation.
- Differential vs to-side-only (Appendix A): to-side-only adj. R² = 0.47; adding not-to-side terms → 0.50, with not-to-side coefficients opposite-signed to to-side (as the control logic predicts) and successful-run % to-side losing significance. Team (adjacent-lineman) controls tested, not significant, dropped.
- Clusters (k=7, n=133): sizes 25/17/18/23/24/8/18; salary means $5.12M/$2.97M/$3.84M/$2.21M/$2.53M/$6.66M/$3.10M (sample mean $3,518,357, SD $2,146,048). Cluster 6 (n=8) dropped as too small. Mean silhouette ≈ 0.16 (weak; Kaufman–Rousseeuw suggest >0.25, ideally >0.5).
- Flagged (Tables 5–6): undervalued — John Jerry (NYG G, 2014, $795,635), Mike McGlynn (KC G, 2014, $1,037,594); overvalued — Scott Wells (STL C, 2013 & 2014, $5,283,150), Davin Joseph (TB G, 2013, $6,889,518).
- PFF-rank corroboration (Table 7): 4 of 5 agree in direction (Jerry 23 vs 28; Wells 11/13 vs 3; Joseph 30 vs 1); McGlynn disagrees (31 vs 27). Joseph released by TB post-2013; Wells released by STL post-2014.
- Paper-internal inconsistency (flagged, unresolved): abstract §5 say five players; §7 conclusion says "3 overvalued and 3 undervalued… 4 of the 6"; §5.2 says "eleven… eliminated six of the twelve". Tables list 5 — the headline finding's exact N is unreliable.
- No out-of-sample validation of the flagging rule; corroboration anecdotal (2 releases, PFF ranks).
- Differential stats can't handle pull/stretch/counter plays (lineman contributes away from his side); no control for defensive-line quality or scheme (authors acknowledge).
- 2013–2015 data; salary-cap regime and tracking data have both moved on. Leakage note: differential stats use same-season outcomes that post-date contract signing — fine for "was he worth it," not forecasting.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OL: this is the only corpus file with a film-grade-free OL evaluation framework; the differential-statistic construction (to-side minus not-to-side) is a teammate-control trick directly portable to attributing team EPA/rushing outcomes to individual linemen for the OL lane.
- SCHEME (props lane): the mechanism ports to teammate-adjusted skill-player features — WR yards/target when targeted vs team yards/play when not targeted; RB yards/carry to his primary gap vs other gaps (nflverse run location); TE production with/without a co-TE on field. These are the prop model's missing controls for surrounding-cast quality.
- OTHER (DFS lane): the cluster → salary-distribution → 5%-tail anomaly pipeline transplants directly to weekly DFS salary mispricing: cluster each slate by position on standardized trailing features, fit lognormal per cluster, flag bottom-5% salary anomalies as value plays, validate against actual points-per-$1K over 2023–2025 slates. Improvement path named: Gaussian mixture + BIC instead of k-means (fixes the 0.16 silhouette), conformal p-value instead of the 5% tail rule (calibrated anomaly score feeding the optimizer as a value prior).
- COACHING: UNCERTAIN — the "team (adjacent-lineman) controls not significant" result is thin evidence about coaching-adjacency effects; with n=133 and weak clusters it should not be read as a claim that coaching/adjacent quality doesn't matter.
- TRUST-SIGNAL: the labor-market lesson that PFF grades did NOT explain salary (p not significant, dropped) while on-field differentials did (+56,697 per prior PFF point did matter in the prior-to-contract form) — grades' pricing power is limited to reputation proxies (Pro Bowls +624,910/selection), a useful caution for any trust signal that ingests PFF.

## Engine-actionable? (yes/no + one-line what)
Yes — two cheap builds on data GSE already holds (nflverse + DK salary CSVs, 2–3 days): (1) cluster-based DFS salary-value screen with the ≥10%/p<0.05 gate, (2) differential (to-role minus off-role) teammate-control features for the prop model.
