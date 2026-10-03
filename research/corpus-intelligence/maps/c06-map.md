# c06 Intelligence Map — Corpus Slice 6 of 10

**Slice definition:** `find ~/workspace/vendor/Sports/docs -name "*.md" | sort | awk 'NR%10==5'` → **300 files**
**Coverage:** 300/300 briefs written. Every file read fully; empty/corrupt/binary files logged in briefs (none corrupted; several stubs noted).
**Briefs:** `~/workspace/corpus-intelligence/briefs/c06/` (subdirs r00–r29, c00–c01, d00–d27)

## Reader inventory (60 deployed)

| Group | Readers | Files each | Outcome |
|---|---|---|---|
| r00–r29 (original fan-out) | 30 | 10 | 14 completed clean; 16 hit inference-proxy 429 rate limits (r00, r01, r05, r07, r08, r09, r10, r12, r15, r17, r18, r20, r21, r23, r26, r28). Partial briefs from r02 (9/10) and r10 (4/10) kept. |
| c00–c01 (cleanup) | 2 | 41–42 | Both completed; c01 noted its list held 41 files not 42 and separately missed `1099-climate-risk` — brief written directly by coordinator. |
| d00–d27 (density upgrade, ~3 files each) | 28 | 2–3 | All 28 completed clean. No 429s in the deep-reader waves. |

**Rate-limit lesson:** 30 concurrent readers → 16 failed with 429s. Waves of 7–16 concurrent readers → zero failures. Future coordinators: cap concurrent reader spawns at ~15.

**Slice composition:** ~155 arXiv deep-read ledgers (arxiv-deep), ~60 ops/calibration/governance docs, ~40 research notes (DFS/props/CV), ~25 engine/wiring docs, ~20 product/strategy docs.

**Actionability split:** 211 briefs answered Engine-actionable YES, 85 NO, 4 partial. The NOs are concentrated in governance/compliance/product-spec docs (real constraints, not intelligence).

## Top 20 most engine-actionable findings

1. **Old-QB RB dump rate** (`nflverse-data-catalog.md`, r22): RB share of team targets is +14.7% relative when the starting QB is 34+ (20.9% vs 18.2%), z=8.0, p=1.3e-15, n=4,936 team-weeks 2016–2024, concentrated in the 37+ cohort. → QB-BEHAVIOR: age-conditional target-distribution feature. (Honest debunk in same file: WR separation-by-age is flat, p=0.18.)
2. **Coverage-conditional QB tendencies** (`dfs/research/2026-09-25/week3-multi-episode-transcripts.md`, d06): Cam Ward targets first read 84% when unpressured; Geno Smith targets Wilson 44% of routes vs man, 33% when blitzed (9.0 YPA vs blitz); Drew Lock targets JSN on 41% of blitz dropbacks; Drake Maye "terrible against cover six" (JAX runs it 2nd-most). → QB-BEHAVIOR: price coverage×situation tendencies, not flat team adjustments.
3. **Net pressure is the dominant situational signal** (`reasoning/situational-edges.md`, d23): home-minus-away net pressure (qb_hits/dropbacks) r=+0.2414 walk-forward — the only situational signal that enters the game tilt. Fourth-down go rate (−0.0136) and ST EPA (−0.0648, wrong direction, deliberately not sign-flipped) stay dark.
4. **NGS week-3 gate components** (`reasoning/ngs-st-pace.md`, d23): five components pass |r|≥0.08 — CPOE +0.176, air-yards differential +0.184 (strongest), time-to-throw +0.110, rush yards over expected +0.124, YAC over expected +0.171 — capped at 0.15 of signed family value. (Caveat in file: 2025 r's are same-season associations, not walk-forward.)
5. **QB is the most volatile position** (`fantasy/research/2026-09-28/variance-model-and-mccaffrey-falsifier.md`, d10): within-player CV 2020–2024 (n=771): QB 0.993, TE 0.936, WR 0.876, RB 0.872. Posted priors had magnitudes and ordering wrong. → QB-BEHAVIOR: prop bands must be widest for QBs. (Also: McCaffrey spot-check was a label leak — posted 417 = his actual season total, true fitted 248.0.)
6. **Target-concentration splits** (`dfs/research/2026-09-13/deep/stack-players-2026-09-13.md`, d04): Goedert 18.8% targets-per-route with Brown on vs 27.1% off (2 seasons), 40.9% of PHI inside-the-10 targets 2025. → TRUST-SIGNAL-adjacent: absence-driven target concentration is measurable.
7. **Market-implied team rating recipe** (`props/research/2026-09-18/notes/benbbaldwin.md`, d21): Odds API v4 (h2h/spreads/totals, DK/FD/Pinnacle) + team-incidence matrix regression (home−away, intercept=HFA, demeaned) + no-vig futures de-vig + joint spread/futures solve via margin→win logistic. 2021 market HFA ≈0.62 spread points.
8. **Bridge-model calibration bar** (`reasoning/bridge-fit.md`, d22): logistic on leak-free priors, 6,955 pre-2025 games, 285 sealed 2025 games → Brier 0.2237, loses to spread-bucket table's 0.2120. Rest-days slope +0.411 (se 0.254) used in engine; wind (−0.135/mph) and temp (+0.029/°F) measured but zeroed as too noisy; 12 of 18 referee crews pass the 12-game minimum.
9. **Structural model adds zero over the close** (`arxiv-deep/0670-does-a-structural-model-add.md`, r06): Dixon–Coles log-opinion-pool weight ŵ=0.000 (boundary); market RPS 0.1905 vs model 0.1972 (2,660 Serie A). → TRUST-SIGNAL: the market-benchmark protocol (fit ŵ for engine-vs-close) plus match leverage L_m = P(Ω|win) − P(Ω|loss).
10. **Hierarchical BT early-season shrinkage** (`arxiv-deep/0611-*.md`, r06): previous-season Γ(2N,2N/σ̂²) parity hyperprior cut mean absolute rest-of-season win error 24.65→8.82 by Apr 15. Gate: must beat dynamic Elo on 2015–2025 walk-forward (MLB's 162-game assumption is weak on 17-game NFL).
11. **LEAP likelihood elicitation** (`arxiv-deep/0440-*.md`, r04): per-evidence-item LLM likelihood + tempered Bayesian aggregation halved ECE (0.1840→0.0876), Brier −16.5 macro-average; removing the engine prior drops it below baseline — the prior carries the weight, news items calibrate around it. → news-as-features design.
12. **Corrected forecast combinations** (`arxiv-deep/1556-*.md`, r11): γ=0.5 lagged-consensus-error correction cut MSFE ~50% (0.466–0.513 vs 1.03 OLS-optimal); gains smaller than correction gains (forecast-combination puzzle mitigated). Gate: weekly consensus ACF(1)≥0.15; skip after |e_t|>3σ weeks.
13. **Spread→win-prob map + steam null** (`arxiv-deep/1614-*.md`, r11): LD~Normal(0,13.588) on 2,560 games 2002–2011 → Φ(p/13.588) (p=7: 0.697 vs 0.689 actual); P(|move|>1)≈0.20 as steam-detector null. (Paper's own 53.5% home-underdog claim contradicts its Table 1's 50.8% — dead-edge exhibit.)
14. **Margin-as-gate** (`arxiv-deep/1784-*.md`, r13): top-two margin selected 10% of cases at 29.0% accuracy vs 13.3% overall; top score unreliable as gate. → gate the card on model-prob minus market-prob, not raw confidence. Feasibility ceiling min(1,p/c).
15. **Partial Kelly rebalancing** (`arxiv-deep/1755-*.md`, r13): under fees, moving ε-fraction toward new Kelly stake beats periodic resizing — one-line sizer change s_t = s_{t−1} + ε(s*_t − s_{t−1}), vig (−110≈4.55%) as fee mapping.
16. **Calibration-selected beats accuracy-selected** (`arxiv-deep/1079-calibration-vs-accuracy-sports-betting.md`, c01): calibration-selected NBA model +34.69% avg ROI vs accuracy-selected −35.17% under eighth-Kelly — Kelly amplifies miscalibration into ruin.
17. **Kalshi CLV pipeline** (`source-providers/kalshi-and-odds-api-io-evaluation-2026-06-03.md`, r29): live probe overround 100.0–100.5% vs sportsbooks' 4–5%; public /markets → lock/near-start snapshot → computePickClv. Free, no auth.
18. **Model confidence is inverted; RES≈0 is the blocker** (`ops/LAUNCH_FINISH_LINE_2026-09-05.md`, d16): ≥80 scores won 43.7% claiming 86.2% (AUC 0.4965); Brier 0.275 = REL 0.026 − RES 0.002 + UNC 0.250. Mandate: fix RES (selective publish, better features, dead-group pruning) before any recalibration; never lower floors to greenwash.
19. **The agreement field was a lie** (`engine/research/2026-09-28/signal-agreement-source-count-defect.md`, r19): 990 published rows (2026-06-15→2026-09-27) labeled CONFIRMS by source-counting, not direction comparison. Fix landed 14/14. Adjacent: NFL signal path structurally SOLO because NFL_EPA_MIN_GAMES=4 (avg 2.94 games/team weeks 1–3) kills the EPA source by construction.
20. **Sloan 2018 CV recipe** (`research/2026-10-01/cv-corpus/deep-dive-sloan2018.md`, d27): CART beat SVM/k-NN on coordinate features — 86.5% QB-position (Shotgun/Under Center/Pistol), 72.3% on 29 formations, from 500+ auto-tagged All-22 screenshots. Stage 1 (Hough yard lines → LOS-by-proximity → arccosine rotation → per-screenshot yard scale) is the closest public recipe for the homography gap; file ships a 4-kernel implementation spec.

## Cross-file patterns

**Metrics that recur:**
- **Brier/ECE/Murphy decomposition** is the shared calibration language across the slice: publish floors Brier ≤0.22 / ECE ≤0.05 / Murphy REL ≤0.05 appear in the wiring manifest (`FULL_REPO_WIRING_MANIFEST.md`: Knowability ≥0.35, Evidence health ≥0.3), `CALIBRATION_PUBLISH_CHECKLIST.md` (N≥500/ECE≤0.05/MCE≤0.12), and `LAUNCH_FINISH_LINE` (Brier 0.275 = REL 0.026 − RES 0.002 + UNC 0.250). The decomposition consistently identifies **resolution (RES≈0)** as the binding constraint, not reliability.
- **Kelly sizing** appears in 25 briefs (0820, 1079, 1209, 1229, 1356, 1500, 1732, 1755…) with a unified warning: Kelly amplifies miscalibration into ruin (1079), can be too conservative under fitted normals (1209), and needs fee-aware partial rebalancing (1755) plus proper-betting replacements (1732, live-validated on Kalshi at +80.33% ROI, Sharpe 3.35).
- **Market-beats-model** is the repeated empirical verdict: 0670 (ŵ=0.000), 1614 (Φ map validates; edges dead), d16 (displayed prob = de-vigged market prob because model confidence is inverted), d22 (bridge 0.2237 loses to spread-bucket 0.2120).
- **Conformal coverage defects** recur as a bug class: r16 (fail-closed doctrine — clamp-to-n delivers 83.33% as 90%), d17 (CQR at n=5, α=0.1: 83.33% actual), r04/0450 (19% of calibration sets <85% conditional coverage at m=10). The slice's consensus fix: refuse-via-+∞, bootstrap conditional-coverage audits, minimum-m sizing.

**Contradictions between sources:**
- 1614's home-underdog claim (53.5%) vs its own Table 1 (50.8%) — flagged as dead-edge exhibit, not a system.
- "nflverse has no closing lines" asserted in multiple reviews vs disproved 3× by repo data (d02: 7,276 games.csv rows with spread_line/total_line/moneylines; corr(spread_line,result)=+0.4260; 15,939-settled-pick replay built on them).
- Model-confidence display: `path-to-70` target (≥70% band) vs 27 seasons showing the 70–79 band hit 48.33% vs 49.47% for 65–69 (d03, NFL_REPLAY_CALIBRATION: ROI −5.48%, every market negative).
- r29 found 4 duplicate-shell files (body-identical pairs) carrying audit metadata only — corpus hygiene flag for other coordinators.

**Methods that compose (a full pipeline from this slice):**
shrink (0611 hierarchical BT parity prior) → elicit (0440 LEAP news likelihoods around the engine prior) → correct (1556 γ=0.5 consensus-error correction) → combine (1169 log-pooling mandated by log-loss; 1673 regime-dependent hierarchical weights; 1490 Bates–Granger per-market) → gate (1784 top-two margin; 0700 dual-threshold conformal abstention) → size (1755 partial-Kelly; 1732 proper-betting) → benchmark-vs-close (0670 ŵ protocol; 1614 Φ map). Every stage carries a numeric acceptance gate from its source file.

## Gaps — what this slice doesn't cover

- **OL intelligence is nearly absent.** Readers repeatedly marked OL "not applicable." Only scattered hits: Barkley YBC collapse 3.55→2.11 (d04), benbbaldwin pass-protection composite (PFF 40%/SIS blown-block 40%/ESPN PBWR 20%, d05), ThunderDanDFS O-line-augmented RB grades (d21, by reference), CIN pressure 12.9th vs HOU allowed 66.1 (d24). No systematic OL-vs-DL matchup quantification in-slice. The TNF "OL mismatch" thesis had no corpus support here.
- **Trust-concentration (HHI) is absent.** Only 1 brief mentions HHI/Herfindahl. The target-concentration metric central to the QB-behavioral program (Rodgers HHI 0.141 career, 0.112 in 2025) has no in-slice methodological counterpart — the closest are the Goedert on/off splits (d04) and first-read rates (d06), which are raw materials, not the metric.
- **Coaching tendencies are thin.** Beyond the entity-graph coach→scheme links (r16), the creator-pipeline tendency tables (motion/screen/PA/RPO rates via @sfdata9ers, d21), and transcript mentions of Mannion/Petzing/Stefanski (d04), there is no coordinator-level playcalling-tendency quantification. The Monken quick-game transformation (0.476→0.639) has no in-slice analogue.
- **Charting data is absent.** No blitz rate, man/zone splits, or time-to-throw distributions beyond the NGS TTT correlation (+0.110, d23). Consistent with the known nflverse gap; the PFF/SIS/NGS acquisition need stands.
- **QB-behavioral hits are concentrated, not broad.** The strong finds (old-QB RB dump rate, coverage-conditional tendencies, volatility ordering, first-read rates) come from ~6 files. The remaining ~294 files contribute calibration/sizing/trust infrastructure, not behavior. The 180-QB metrics table built 2026-10-01 has no in-slice methodological precedent to lean on — it is novel construction.

## What changes the QB-behavioral / coaching-tendency programs

**QB-behavioral program (direct feeds):**
- Add **age-conditional target distribution** as a profile dimension (finding 1: 34+ QBs dump to RBs at 20.9% vs 18.2%). Rodgers at 41 sits in the extreme cohort — his 2025 check-down tendency should be profiled, not assumed.
- Add **coverage×situation tendency cells** (finding 2): first-read rate unpressured, primary-target rate vs man, blitz-dropback target shares. These are the behavioral primitives the trust-signal intake should capture per QB.
- **Volatility ordering** (finding 5) reframes prop-band construction: QB bands widest, and the McCaffrey label-leak arithmetic (floor+ceiling=2·proj symmetry check) is an adoptable anti-fabrication audit for any published projection band.
- **Absence-driven concentration** (finding 6) operationalizes the trust-circle read: measure target-share deltas when the alpha is on/off field, per QB.

**Coaching-tendency program (direct feeds):**
- **Net pressure as the scheme-beats-talent check** (finding 3): home-minus-away net pressure r=+0.2414 is the only tilt-entering situational signal — a coordinator's scheme is first measurable through the pressure it generates/prevents, before playcalling tendencies.
- **Creator-pipeline tendency tables** (d21/MISSION-BRIEF): @sfdata9ers's Motion/Screen/Play Action/No Huddle/RPO table (FTN data) and @MagicSportsGuy's CB/WR assignment maps (man/zone, TPRR/YPRR, Cover 1/3/4) are the concrete artifacts to reverse-engineer for the coordinator profiles — ranked #1–5 replicable metrics in `report.md` (d22).
- **Regime-change machinery** (r14/1908 meta-metric learners; d00/2184 differentiable forgetting with group-specific decay for scheme/coaching features): new-HC regimes need retrieval-based priors and faster forgetting on scheme features — directly relevant to 2026's HC turnover (Monken to CLE, McCarthy to PIT).

**Calibration/sizing posture (cross-cutting):** the slice's unanimous verdict is that the engine's binding constraint is resolution, not reliability; that model confidence must never be displayed as probability; and that every new feature must beat the market-benchmark protocol (0670) and the sealed bridge bar (0.2120/0.2237) before it earns weight. The compose-chain above is the wire-order.

## Supplement — c00 final report (arrived after initial aggregation)

Three finds from the cleanup reader's 42-file batch that belong in the top tier:

- **Honest baseline in EXECUTION_LEDGER.md:** definitive 2021–2025 backtest (71 walk-forward folds, 18,344 OOS player-weeks, purged+embargoed): Newton-Tweedie MAE 5.3087 vs naive 4.9064 → beats-naive = FALSE, Clark-West gate withheld publication. Wiring baseline captured: shrinkage `w = n/(n+k)` (k=12), yard-pool conservation, no-bet governor calibration policy, **16 SHADOW proprietary metrics** (QB Burden Index, Rush Environment Index, Role Volatility Index, Playable Window Score, etc.). → The SHADOW metric inventory (QBI, REI, RVI, PWS + 12 more) is a direct input to the QB-behavioral program's feature set.
- **UniTraj (0065) — strongest single ADOPT in the batch:** unified masked-trajectory CVAE on NFL Big Data Bowl tracking (10,762 train / 2,624 test sequences), open code+data+checkpoints, beating 9 baselines 11–28% on minADE20 (Football-U 3.55 vs 4.95 yards). Unifies prediction/imputation/recovery — aimed at the NGS tracking lane with reproduction gate minADE20 ≤ 3.73 yards.
- **Market-microstructure cluster:** 0002 measured TTE-conditional calibration on Kalshi (~23M trades; near-expiry Platt slopes up to ~4.5; parlay mispricing ~3% per leg, empirical hit rate 2–10 pp below price); 0863 measured independent:herding bettor ratio 1:3 (r_i = 0.244 via β = 0.488) with a portable t^{−β} convergence estimator. Together: measurable market-structure priors for the sizing layer. Also 0530's BoRaEM — first corpus method learning per-source reliability inside the rating estimator (joint source-reliability + Bradley-Terry EM).
