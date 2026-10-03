# C10 Section Map — Corpus Coordinator 10 of 10

**Slice:** `~/workspace/vendor/Sports/docs/` files where sorted index mod 10 == 9
**Enumeration:** `find ~/workspace/vendor/Sports/docs -name "*.md" | sort | awk 'NR%10==9'`
**Coverage:** **299 / 299 files** deep-read and briefed (100%)
**Briefs:** `~/workspace/corpus-intelligence/briefs/c10/r01/` … `r60/`
**Readers deployed:** 60 primary + 34 cleanup/retry readers (94 total dispatches; ~600-agent fleet-wide spawn storm tripped inference-proxy 429s mid-run; recovery via controlled waves of 8–13)
**Date completed:** 2026-10-02
**Rules honored:** read-only on all repos; intake only; no building/wiring; every number from the file; inferences marked INFERENCE.

---

## 1. Inventory

| Chunk | Files | Reader(s) | Status |
|---|---|---|---|
| 00 | 8 | r01 | done (infra/governance docs) |
| 01 | 4 | r02 | done |
| 02 | 4 | r03 | done |
| 03 | 4 | r04 | done |
| 04 | 5 | r05 | done |
| 05 | 4 | r06 | done |
| 06 | 4 | r07 (+retry) | done |
| 07 | 4 | r08 (+retry) | done |
| 08 | 5 | r09 (+retry) | done |
| 09 | 4 | r10 | done |
| 10 | 3 | r11 | done |
| 11 | 4 | r12 (+retry) | done |
| 12 | 5 | r13 (+retry) | done |
| 13 | 4 | r14 | done |
| 14 | 4 | r15 | done |
| 15 | 4 | r16 | done |
| 16 | 4 | r17 | done |
| 17 | 4 | r18 | done |
| 18 | 4 | r19 | done |
| 19 | 4 | r20 | done |
| 20 | 4 | r21 | done |
| 21 | 5 | r22 | done |
| 22 | 4 | r23 | done |
| 23 | 3 | r24 | done |
| 24 | 4 | r25 | done |
| 25 | 5 | r26 | done |
| 26 | 3 | r27 | done |
| 27 | 4 | r28 | done |
| 28 | 4 | r29 | done |
| 29 | 4 | r30 | done |
| 30 | 4 | r31 | done |
| 31 | 4 | r32 | done |
| 32 | 4 | r33 | done |
| 33 | 4 | r34 | done |
| 34 | 4 | r35 | done |
| 35 | 4 | r36 | done |
| 36 | 4 | r37 | done |
| 37 | 4 | r38 | done |
| 38 | 4 | r39 | done |
| 39 | 5 | r40 | done |
| 40 | 7 | r41 | done |
| 41 | 7 | r42 | done |
| 42 | 6 | r43 | done |
| 43 | 5 | r44 | done |
| 44 | 6 | r45 | done |
| 45 | 8 | r46 | done |
| 46 | 6 | r47 | done |
| 47 | 8 | r48 | done |
| 48 | 8 | r49 | done |
| 49 | 8 | r50 | done |
| 50 | 7 | r51 | done |
| 51 | 7 | r52 | done |
| 52 | 6 | r53 | done |
| 53 | 6 | r54 | done |
| 54 | 7 | r55 | done |
| 55 | 6 | r56 | done |
| 56 | 7 | r57 | done |
| 57 | 5 | r58 | done |
| 58 | 6 | r59 | done |
| 59 | 7 | r60 | done |

**Slice composition:** ~60% arXiv deep-read ledgers (`arxiv-program/research/2026-09-21/arxiv-deep/`), ~40% GSE/Beexly operational docs (ops, engine research, DFS/prop research, governance, calibration forensics). Roughly 15% of files were REJECT-verdict or no-actionable-content (wrong-domain, superseded, governance-only) — briefed as one-liners per the no-pad rule.

**Filename hygiene notes (for downstream consumers):** brief naming was inconsistent across readers — most used `<basename>.brief.md` (basename *with* `.md`, e.g. `0039-....md.brief.md`), some used basename-without-`.md` (e.g. `MOVED.brief.md`); three README collisions disambiguated with directory prefixes (`clean-rooms-demo-README.brief.md` etc.); one brief landed without the suffix and was renamed (`0911-skill-identification-fantasy-premier-league.brief.md`).

---

## 2. Top 20 most engine-actionable findings (with file refs)

Ranked by (concreteness of acceptance gate × leverage on GSE's stated gaps). All numbers from the files.

1. **rGAX: residualized completion-% above expectation with valid CIs (QB-BEHAVIOR)**
   `arxiv-program/research/2026-09-21/arxiv-deep/1143-rethinking-player-evaluation-gax-beyond.md` → brief `c10/r22/1143-...brief.md`
   Double-machine-learning recipe putting frequentist CIs + BH-corrected p-values on QB above-expectation metrics; worked NFL application (rCPAE 2022/23, corr(CPAE,rCPAE)=0.997, Geno Smith 1|1, Mahomes 2|2, Burrow 3|3, Herbert 4|4 verified); scheme-vs-accuracy decomposition separates true accuracy from scheme-generated easy throws; residualization buys ~20 pts robustness-slope stability (0.936 vs 0.757). Code+data open (comets R pkg, nflfastR). **This is the single biggest QB-program input in the slice.**

2. **Covariate-assisted Bradley–Terry + QB decomposition (QB-BEHAVIOR)**
   `arxiv-program/research/2026-09-21/arxiv-deep/0213-recent-advances-in-the-bradleyterry-model.md` → brief `c10/r05/0213-...brief.md`
   P(i beats j) = σ(u_i − u_j + x_ijᵀv), dynamic covariates (home, rest differential, travel/altitude, QB-out), ridge MLE from Newman FPI init, RankCentrality weeks-1–4 fallback; extension u_i = τ_team + q_QB(i) moves rating on QB change without refit. Gate: beat plain BT + Elo on 2022–2024 rolling log-loss by ≥0.003. ~2–3 days effort, nflverse in hand.

3. **Expected-metric residual contamination discipline (QB-BEHAVIOR / props)**
   `arxiv-program/research/2026-09-21/arxiv-deep/0424-biases-in-expected-goals-models-confound.md` → brief `c10/r10/0424-...brief.md`
   Elite high-volume players self-contaminate training sets (Messi's GAX shifted >5% on contamination; Mahrez's GAX 14.61→9.03 excluding deflected shots; single-season GAX for +25% finisher at 150 shots: SD 3.73 around mean 3.70 — mostly noise). Rule: cross-fit every CPOE-style residual (never evaluate on a model trained on the player's own plays), multi-calibrate within position×volume bins, shrink toward positional means before any prop edge.

4. **G-Elo margin-of-victory rating (OTHER / ratings)**
   `arxiv-program/research/2026-09-21/arxiv-deep/1448-margin-of-victory-differential-skill-ratings.md` → brief `c10/r25/1448-...brief.md`
   7-category NFL discretization beat Elo-Davidson on every metric: LS 0.6224 vs 0.6304, RPS 0.2166 vs 0.2200, accuracy 0.6656 vs 0.6375 (+2.8pp); closed-form frequency estimators (Eqs. 43–46) generalized *better* than ML optimization. Numeric adoption gate: ΔLS ≥ 0.005, accuracy ≥ baseline +1pp on NFL 2019–2023 backtest. Implementable, testable.

5. **Relativization audit: opponent-relative features (QB-BEHAVIOR / features)**
   `arxiv-program/research/2026-09-21/arxiv-deep/0049-relative-advantage-quantifying-performance-in-noisy.md` → brief `c10/r03/0049-...brief.md`
   Opponent-relative difference features beat two-feature absolute by +5.2% AUC. Gate: any absolute feature must clear ≥0.01 AUC vs its relativized twin or be dropped. NFL extension needs team-specific environmental loadings.

6. **NGS Zoo 2D-CNN distributional recipe (QB-BEHAVIOR / internal reasoning fuel)**
   `arxiv-program/research/2026-09-21/nextgenstats-profile/ngs-methodology-backend-2026-09-21.md` → brief `c10/r40/ngs-methodology-backend-2026-09-21.brief.md`
   2020 Big Data Bowl winner (Singer & Gordeev, >2,000 entrants): 5 vector features for all 22 players (X, Y, speed, acceleration, direction) at handoff/catch → probability distribution over outcomes, scored with CRPS; xRY = Σ(outcome×probability). Same paradigm reused for xRY, xYAC, kickoff-return. AWS released PyTorch code + demo notebook for the QB Passing Score spliced binned-Pareto model; third-party transformer (SumerSports) improved tackle-location ADE 4.61 vs Zoo 5.78. **NGS doctrine applies: internal reasoning fuel only, never public, never metric names.**

7. **Train on almost-fair CRPS, not MSE (OTHER / probabilistic models)**
   `arxiv-program/research/2026-09-21/arxiv-deep/0748-aifs-crps-ensemble-forecasting-loss.md` → brief `c10/r16/0748-...brief.md`
   afCRPS (α=0.95) over M=8–16 seed ensemble with the paper's positive-terms rearrangement for fp16 stability; MSE smooths away exactly the tail variability a proper forecast needs; afCRPS beat operational 9km physics IFS by 5–20% CRPS. Gate: ≥2% holdout CRPS gain, no ensemble collapse (monitor effective ensemble variance).

8. **EnbPI no-split conformal for early-season calibration (TRUST-SIGNAL)**
   `arxiv-program/research/2026-09-21/arxiv-deep/1641-conformal-prediction-for-time-series-enbpi.md` → brief `c10/r29/1641-...brief.md`
   No-data-splitting bootstrap-LOO conformal hit 0.893 coverage vs 0.646 for split conformal (ICP) at 10% train ratio — exactly GSE's weeks-1–4 calibration problem. Gate: weeks-1–4 coverage beats ICP by ≥3pp, full-season within ±2pp of nominal. 3–5 days reusing `model-parliament.ts`.

9. **Angular combining of forecast CDFs (OTHER / ensemble)**
   `arxiv-program/research/2026-09-21/arxiv-deep/1550-angular-combining-forecasts-probability-distributions.md` → brief `c10/r27/1550-...brief.md`
   Pool margin/total CDFs (engine bootstrap + de-vigged market + Elo) with angular averaging; optimized θ beat linear opinion pool by up to +2.7% MQS, DM-significant wins in >half of 24 series, zero significant losses; fallback θ=67.5° (+1.4% skill, no optimization). Especially strong in tails/95% intervals — exactly what alt-spread props need.

10. **Ensemble information-graph audit (TRUST-SIGNAL / ensemble design)**
    `arxiv-program/research/2026-09-21/arxiv-deep/1677-expert-interaction-networks-pooling.md` → brief `c10/r30/1677-...brief.md`
    Star-topology input sharing (e.g. every component fed by the Vegas consensus line) gives zero bias reduction but *maximum* variance inflation (σ²(1−ρ)/4 as n→∞); d-regular topologies give zero network bias and zero network-induced variance. Action: map each component's top inputs, compute star-concentration diagnostic, decorrelate/down-weight the hub. Diversify *information sources*, not just model classes.

11. **Kelly stop-loss PDE staking rule (OTHER / bankroll)**
    `arxiv-program/research/2026-09-21/arxiv-deep/1203-kelly-growth-optimal-with-stop-loss.md` → brief `c10/r23/1203-...brief.md`
    Stake fraction = αK·u(z,θ), z = stop-level/current-bankroll, θ = time-to-monthly-reset; long-horizon asymptote u ≈ 1−z; sit-out rule for the "dead zone". Gate: ≥95% of free-Kelly log growth on 2024–2025 NFL while cutting stop-hit frequency ≥50%. Paper's own improvement — discrete-time per-slate DP with Bayesian-shrunk engine edges — matches real enforcement.

12. **Azéma–Yor α-governor drawdown control (OTHER / bankroll)**
    `arxiv-program/research/2026-09-21/arxiv-deep/1749-numeraire-property-drawdown-constrained-growth-optimal.md` → brief `c10/r32/1749-...brief.md`
    Scale weekly Kelly stake by π = 1 − α/d_t (risk only the cushion above the α floor, e.g. α=0.7 → never drop >30% from peak). Fills a capability the ledger confirms GSE lacks entirely. Gate: guarantee holds empirically, cost ≤20% of terminal log growth.

13. **Dominant Asset Theorem cross-pick screen (OTHER / portfolio)**
    `arxiv-program/research/2026-09-21/arxiv-deep/1213-rebalancing-frequency-considerations-for-kelly-optimal.md` → brief `c10/r24/1213-...brief.md`
    Evaluate E[(1+X_i)/(1+X_j)] ≤ 1 on the calibrated outcome distribution for correlated picks on the same slate (spread + moneyline, correlated props); suppress/merge dominated picks. `kelly-investigation.ts` currently sizes independently — genuinely new capability.

14. **Effective-price accounting vs posted odds (TRUST-SIGNAL / CLV)**
    `arxiv-program/research/2026-09-21/arxiv-deep/0283-shrouded-sin-taxes.md` → brief `c10/r06/0283-...brief.md`
    p = 1 − Σ(1/decimal_odds) as the standard margin metric; posted prices understate consumer prices when books shroud surcharges (shrouding books passed 90% of German 5% turnover tax vs 16% non-shrouding, ~80pp gap). Test: how often a posted +EV pick flips −EV under effective-price accounting; adopt pipeline if flips hit ≥2% of positive-EV picks for any book. 1–2 days.

15. **Fail-closed leak-wall discipline (TRUST-SIGNAL / integrity)**
    `docs/data/CARDS_EDGE_VALIDATE.md` → brief `c10/r42/CARDS_EDGE_VALIDATE.md.brief.md`
    `latestPriorRow`'s leak wall silently admits FUTURE data when `kickoffWeek`/`row.week` is NaN (NaN comparisons all false → every week qualifies, latest wins); `knownAtWeek` stamped at emission, enforced nowhere at consumption; one poisoned CSV row kills a validation run. Rules: non-finite week stamps fail closed (return null, never select); missing market feeds refuse `no_market_feed` rather than proxy a close; tests must pin values via independent derivation (a test recomputing the implementation's own formula is vacuous).

16. **Look-ahead contamination punchlist (TRUST-SIGNAL / integrity)**
    `docs/ops/handoff/2026-09-18-architecture-handoff.md` → brief `c10/r54/2026-09-18-architecture-handoff.brief.md`
    `backfill-independent-trueprob.ts:96-101, 172-183, 235-257` runs in the six-hourly calibration cron, selects settled rows, rewrites `factorBreakdown.independentEdge.trueProb` with non-as-of inputs — any model fit on that column fits on the answer. Plus: `clv-capture.ts` scoring book-mix drift as market movement (un-attributable 23% beat-close), n=5 conformal-coverage failure (90% claimed, 83.33% delivered), in-play null-clock leakage hole.

17. **The loop was never closed (TRUST-SIGNAL / program)**
    `docs/architecture/2026-09-18-llm-playbook-for-the-engine.md` → brief `c10/r02/2026-09-18-llm-playbook-for-the-engine.brief.md`
    Engine's entire labelled dataset: **2,641 settled picks**; two contaminations measured in-repo (trueProb rewrite on settled rows; walk-forward cutting folds by row index despite fixture triplication); every loop-closing component (walk-forward scheduling, trials-registry, placebo, logit-pool, logistic, calibration-blend, evidence-readiness-matrix with 13 factor keys, feature-store with zero registered features, BAEE pinned at 1 model) exists but **has never run** — "ten months of work has not compounded because the loop was never closed."

18. **MAML rookie-QB adapter (QB-BEHAVIOR / new regimes)**
    `arxiv-program/research/2026-09-21/arxiv-deep/1912-model-agnostic-meta-learning-fast-adaptation.md` → brief `c10/r35/1912-...brief.md`
    Meta-learned init, 1–5 gradient steps on 2–4 games for new-regime (rookie QB, new HC) prediction. Gate: ≥0.02 Brier improvement on new-regime prediction. Complements 1902 NGGP (few-shot GP with calibrated uncertainty, ≥0.01 Brier gate) — two independent shots at the same gap.

19. **Time-aware synthetic control for QB injury (COACHING / counterfactuals)**
    `arxiv-program/research/2026-09-21/arxiv-deep/0323-timeaware-synthetic-control.md` → brief `c10/r07/0323-...brief.md`
    QB-injury counterfactual module, ~3–5 engineer-days. Directly serves the coaching-tendency lane's what-if analysis (backup-QB game plans).

20. **INT projection method + sack-prop veto (OTHER / props)**
    `docs/props/research/2026-09-17/props-consensus/kicker-defense-props.md` → brief `c10/r56/kicker-defense-props.brief.md`
    Worked INT method: FTN "worthy" INT rate × expected dropbacks × 52.3% conversion (Allen 3.66% × 27.0 × 52.3% = 0.5; Goff 1.44% × 34.2 × 52.3% = 0.3). Literature veto: individual sack props unprojectable (pressure→sack conversion R² < 0.005); team sacks project from forced-rates. Two adoptable rules in one file.

**Honorable mentions (strong but narrower):** Beep play-calling DNA via MDL sequential pattern mining on nflverse pbp (1474, COACHING/SCHEME); Lopez 4th-down causal hygiene — precise distance-to-go cuts aggressiveness benefit ~40% (0403, COACHING); live-market overreaction fade-Q1–Q2/follow-Q4 (1736, OTHER); two-layer CVaR staking (2143, OTHER); CQRA-T per-quantile pinball combiner (1560, OTHER); OpenFE time-safe GroupBy industrialization (1842, OTHER); mean ignorance (log₂) as primary variant-selection metric with ≥0.05-bit promotion gate (1083, TRUST-SIGNAL); conformal reject option as publish/abstain gate (0987, TRUST-SIGNAL); pass efficiency r=0.53–0.61 vs rushing r=0.13–0.19 team-strength weighting + 50% fumble-recovery prior (dossier-v2-methods, SCHEME); tsflex extraction backbone 3× faster than TSFEL (2188, OTHER); AlphaEvolve redundancy-pruning for signal miners (2047, OTHER); feature-store (event_timestamp, creation_timestamp) merge semantics (2022, TRUST-SIGNAL); 15-test calibration evidence guard that already caught a live contamination (RESCUE-2026-09-26-5, TRUST-SIGNAL); ENGINEERING_PRINCIPLES proof-ledger doctrine — Wilson 95% LB must clear 52.4% (TRUST-SIGNAL); S3 failed-closed source-ingestion doctrine — "no receipt means HELD or FAILED, never promoted" (S3_SOURCE_RUNTIME, TRUST-SIGNAL); CONFIRMS-stamp defect — persist per-source homeFairProb + direction on every pick row (confirms-stamp-impact, TRUST-SIGNAL); DK salary import lanes verified live (draftGroupId 154078, 1,135 draftables → 619 players) — needs Garrett's call on the forbidden-endpoint rule (salary-import-lanes, DFS); FPL template-team chalk meter + transfer-regret KPI (0911, DFS); Keenum rusty-backup target-concentration model (keenum-target-splits, QB-BEHAVIOR).

---

## 3. Cross-file patterns

### 3a. Metrics that recur across the slice

- **CRPS / almost-fair CRPS as the proper score for distributional forecasts.** Recurs in 0748 (train-on-afCRPS), the NGS Zoo recipe (CRPS-scored outcome distributions for xRY/xYAC), 1550 (MQS/CRPS for angular combining), 0792 (IDR Shapley share >75% in volatile regimes). The slice's consensus: point forecasts are a legacy habit; everything that matters (margins, totals, QB metrics) should be distributional and scored properly.
- **Calibration + abstention as a joint stack.** 0987 (conformal reject option), 0694 (controlled abstention), 0716 (MC-Dropout variance abstention, +2.3–3.0pp at 80% coverage — 5× the IRT baseline, which *invalidates* difficulty/consensus heuristics), 1009 (online abstention), 1641 (EnbPI), 1526 (MSCP), 0738 (SplineCalib). The cluster agrees: coverage must be certified on a rolling origin, never asserted from a single split.
- **Kelly and its discontents.** 1203 (stop-loss PDE), 1360 (all-or-nothing closed form f=(q−p)/(1−p); probability errors cost linearly, fraction errors quadratically), 1213 (rebalancing frequency / Dominant Asset screen), 1749 (α-governor drawdown control), 2143 (two-layer CVaR), 1631 (drawdown optimizer — REJECTed, no edge input). The pattern: fractional-Kelly-with-drawdown-control is the settled doctrine; anything that optimizes drawdown without an edge input is decorative.
- **Paired-comparison ratings.** 0213 (BT survey + QB decomposition), 1494 (dynamic BT), 0565 (dynamic Plackett–Luce, only wins when penalized λ=0.01), 1448 (G-Elo MOV), 0414 (NFL stabilization never plateaus: +1.4pp/game vs NBA 0.34). NFL ratings need longer memory than other leagues' — prior half-life is a first-class parameter.
- **Residualization discipline.** 1143 (rGAX double-ML) and 0424 (xG contamination) independently converge: never evaluate a residual on data that trained its expectation; cross-fit, stratify by volume, shrink. This is the slice's strongest methodological through-line for the QB program.
- **Time-safety.** 1842 (OpenFE expanding-window semantics), 2022 (feature-store point-in-time retrieval with per-source delay configs: NGS re-runs 48h, odds 0), 2188 (tsflex index-based strided windows — the bye-week gap is its design case), EV9–EV17 (NaN fail-closed), the architecture-handoff contamination list. The GSE corpus independently re-discovers what the arXiv ledgers prescribe: separate train/serve code paths are the default failure mode.

### 3b. Contradictions between sources

- **Market efficiency vs exploitability.** 1736 (markets overreact to weak early signals, underreact to strong late ones — fade Q1–Q2, follow Q4) sits uneasily with the EMH-flavored baselines in several rating ledgers. Resolution offered by 1618 (Polymarket payoff-identity framework: 2,098-vs-36 YES/NO violation asymmetry, $1.00→$0.20→$0.08 competition-decay curve) — inefficiencies exist but decay with competition; the half-life is measurable, not assumed.
- **Drawdown optimizers.** 1631 (nonlinear minimal-drawdown portfolios) was REJECTed — optimizes drawdown with no edge input, so it can only shrink stakes toward zero. 1749 (Azéma–Yor α-governor) and 1203 (stop-loss Kelly) are the non-contradictory versions: drawdown control *layered on top of* a positive-edge sizer. Do not wire 1631.
- **Dirichlet-process forecast combination.** 1173 was REJECTed (decorative DP; tables contradict claims) while 1350 (Bayesian bivariate CMP) and 1550 (angular combining) are ADAPT. The lesson is local but sharp: nonparametric flexibility without a calibration gate is worse than a well-scored parametric.
- **Abstention signals.** 0716 explicitly invalidates difficulty/consensus heuristics as abstention signals (MC-Dropout variance gives 5× the lift). Any engine abstention rule built on "the models disagree" should be re-examined.
- **Public-surface promises vs HARD doctrines.** Two product docs in chunk-55 (`galaxy-memory-persistence-spec.md`, `monetization-map.md`) promise public surfaces (Memory panels, Public Ledger with signal snapshots, methodology page, factor breakdowns) that directly conflict with the 2026-09-28 HARD doctrines (public = projections/rankings only; all data/metrics/methodology internal). Flagged in briefs; needs a decision, not a default.
- **ESPN provider status.** The L-10 probe file internally contradicts itself (classification claims 200-with-JSON; detailed probes record HTTP 403 FAILs). Treat ESPN as blocked until a fresh probe says otherwise.

### 3c. Methods that compose (buildable pipelines from slice parts)

1. **Calibrated probabilistic QB-metric pipeline:** rGAX residualization (1143) → cross-fit + volume-stratified shrinkage (0424) → train on afCRPS (0748) → EnbPI no-split intervals for weeks 1–4 (1641) → angular combining across engine/market/Elo CDFs (1550) → conformal reject publish/abstain gate (0987). Every stage has a numeric gate from its file.
2. **Rating stack:** relativized features (0049) → covariate-assisted BT with QB decomposition (0213) → G-Elo MOV categories (1448) → NFL-specific prior half-life from stabilization analysis (0414) → dynamic PL only if penalized (0565).
3. **Staking stack:** effective-price accounting (0283) → fractional Kelly with stop-loss PDE (1203) → α-governor drawdown floor (1749) → Dominant Asset cross-pick screen (1213) → two-layer CVaR sizing (2143). Mean ignorance (log₂) with ≥0.05-bit promotion gate (1083) selects among staking variants.
4. **Trust/integrity stack:** S3 failed-closed ingestion doctrine → EV9–EV17 NaN fail-closed leak walls → CONFIRMS per-source provenance persistence → 15-test calibration evidence guard (RESCUE) → ENGINEERING_PRINCIPLES proof-ledger (Wilson LB ≥ 52.4%) → model-benchmark-lab 5-dimension gates (≥30 picks per bucket, p<0.05 on 100+ holdout). This stack exists in docs; per the LLM playbook, the loop running it has never been closed.
5. **New-regime module (rookie QB / new HC):** MAML 1–5-step adapter (1912) or NGGP few-shot GP (1902) → both gate on Brier improvement (≥0.02 / ≥0.01). Two independent shots at GSE's highest-leverage calibration gap.
6. **Coaching-tendency lane:** Beep opponent play-calling DNA (1474) → Lopez 4th-down causal hygiene (0403) → time-aware synthetic control for QB-injury counterfactuals (0323) → Keenum rusty-backup target-concentration (keenum-target-splits).

---

## 4. Gaps — what this slice does NOT cover

1. **OL (offensive line) is nearly absent.** Almost nothing in the 299 files tags OL: no OL-vs-DL matchup modeling, no pressure-attribution, no OL injury adjustment. The QB-behavioral program's biggest missing covariate lives outside this slice.
2. **Coaching tendency specifics are thin.** Beyond 0403 (4th-down), 1474 (play-calling DNA), and 0323 (injury counterfactuals), there is little on HC/OC scheme fingerprints, in-game adjustment rates, or timeout/challenge behavior.
3. **Injury modeling.** Only 1123 (tackle injury-risk assessment, briefed) and 1464 (ACL landing simulation) touch injury; no injury-adjusted win-prob or availability-projection methods.
4. **Weather.** Zero files on weather effects or weather-adjusted totals.
5. **Live in-game beyond one architecture.** 0494 (axial transformer) is the only live in-game forecasting architecture; no win-prob updating cadence, no drive-chart momentum features beyond 1654 (copula-HMM, briefed).
6. **College football.** The slice is NFL/European-soccer/general-theory; no NCAA-specific transfer (talent disparity, opt-outs, playoff expansion).
7. **Officiating.** No referee-crew effects, penalty-propensity, or challenge modeling.
8. **DFS ownership/projection infrastructure is GSE-internal only.** The slice's DFS content is GSE's own research (Keenum splits, DK salary lanes, FPL chalk meter) — no external DFS theory papers beyond 1093 (contest recommendation) and 0911.
9. **Several ADOPT-verdict methods need reimplementation with no public code** (StruSR 2170, parts of the Zoo pipeline beyond the released QB-score notebook) — effort estimates in briefs, but no drop-in artifacts.

---

## 5. Method note

This map aggregates 299 structured briefs, not the underlying papers — several briefs note they summarize prior deep-read ledgers rather than primary sources. Verdicts (ADAPT/REJECT) quoted above are the ledger authors' verdicts as recorded in the briefs. Every number in the Top 20 was reported by a reader as coming from its file; spot-checks were not re-run at the coordinator level. The 429-induced re-dispatch waves mean ~1/3 of briefs were written by cleanup readers; brief format compliance was spot-verified, not exhaustively audited.

---

## 6. Addendum — late-arriving cleanup handoffs (2026-10-02 ~03:46 UTC)

Four partial-chunk cleanup readers reported after the main map was written. Their findings are significant enough to record:

**A1. Bradley–Terry production algorithms (QB-BEHAVIOR / ratings)** — `dfs/research/2026-09-25/arxiv-deep/2601.14727-bradley-terry-advances.md` → brief `c10/r43/2601.14727-bradley-terry-advances.brief.md`
Three production-ready algorithms with exact equations: (1) async Newman fixed-point iteration for fast team-rating refits (landmine: synchronous version may diverge on near-bipartite graphs); (2) EM-MAP gamma-prior regularization fixing early-season undefeated-team MLE divergence (Ford condition failure); (3) PlusDC home-advantage formulation. Integration gate: `bt-team-ratings` module gated on ≥2% walk-forward Brier improvement (2022–2024) over current engine baseline. Pairs with 0213 (covariate-assisted BT) — this is the implementation companion. Runner-up from the same chunk: Datadog observability mapping — wire `source-reliability` scores into `multi-market-ensemble` precision weights; stand up the nightly calibration report cron.

**A2. Edge Sheet luck-layer pipeline (OTHER / margin pricing)** — `predictions/research/2026-09-17/edge-sheet/README.md` → brief `c10/r55/edge-sheet-README.brief.md`
Expected turnovers from nflfastR `cp`/`ep` family; hard neutral band |actual − expected| < 1.5; fumble recovery treated as pure noise (year-to-year correlation ~0.00); turnover-to-points conversion ~4.5 points per turnover. Fair-margin formula: `fair margin = (home net EPA/play − away net EPA/play) × 63 + 2.0 home field` (garbage-time and kneel/spike exclusions). Directly portable as a shadow-model prototype for expected-turnover and margin-pricing components, with honest small-sample rules baked in (2026 Week 1 shown as isolated dots, "one game each, not a rating").

**A3. Honest calibration baselines (TRUST-SIGNAL / calibration)** — `ops/LAUNCH_CALIBRATION_COHORT_2026-09-12.md` → brief `c10/r50/LAUNCH_CALIBRATION_COHORT_2026-09-12.brief.md`
The engine already has a documented honest calibration baseline: **Cohort E — 5,281 settled NFL games 2006–2025** (nflverse, walk-forward folds, never one pooled number); pooled held-out 2016–2025 n=2,750: base rate 55.02%, Brier 0.2106 [0.2050, 0.2172], reliability 0.0324, resolution 0.0361, adaptive-bin ECE 0.0126. Two directives: (1) the adaptive binner is the honest one — equal-width ECE (0.0180) is inflated by sparse tails; (2) the publish-time `market_p` recompute (`mean_implied_proportional_devig`: per-book American→implied, mean per side, proportional two-way de-vig, snapshot = latest row fetchedAt ≤ generatedAt, ≥MIN_BOOKMAKERS distinct books quoting both sides) is the canonical market-anchored probability pipeline. Cohort A gives the honest current posture: n=407 eligibility floor, Brier 0.2103, debiased ECE 0.0387, CLV beat-rate 0.2273 over 1,443 graded picks with clearsBreakEven=false — no edge claimed. Secondary: `FREE_OPEN_EXTRACTORS_INTO_GSE.md` pins the two wired fair-value levers (MLB standings win% logistic in `standings-strength.ts`; nflverse opponent-adjusted EPA → ML fair in `nfl-epa-fair-value.ts`); `GO_LIVE_RUNBOOK.md` pins shipped-but-dark conviction-tier constants (max(0.65, price break-even) calibrated prob + independent SPEAK edge + ≥50% CLV beat over ≥20 graded picks; 100-pick learning floor; out-of-sample ECE validation before any MODEL_VERSION bump).

**A4. On-field efficiency blend weights + 8-dim QB vector (QB-BEHAVIOR)** — `reasoning/week3-engine-readings.md`, `research/2026-09-19-dk-week2/deep/qb-phase1.md` → briefs `c10/r57/week3-engine-readings.brief.md`, `c10/r57/qb-phase1.brief.md`
Concrete, copyable prior-weighting spec for GSE's game-edge sum: **55% pass EPA residual / 15% rush EPA residual / 15% CPOE / 10% explosive-pass rate / 5% interception luck**, shrunk and opponent-adjusted, 2025 season as prior + 2026 W1-2 as observation; dark families (0.24 share by design) contribute exactly zero; live families never re-scaled. The 8-dimension QB-behavior vector (EPA/db, CPOE, aggressiveness %, first-read %, scramble %, deep rate, pressure-to-sack %, time-to-throw) applied across 28 QBs is directly portable to GSE QB projection/turnover models. **This materially advances the QB-behavioral program: it is an in-house, already-computed feature spec, not just literature.**

**A5. Sports-science evidence vault (doctrine)** — `performance/sports-science-evidence-vault.md` → brief `c10/r55/performance-sports-science-evidence-vault.brief.md`
Doctrine/spec only (not yet implemented); its T1/T2/T3 licensing tiers and public/private boundary are reusable as GSE's intake-licensing doctrine — consistent with Garrett's standing NGS internal-only hard rule and the INGEST-AND-LEARN doctrine.
