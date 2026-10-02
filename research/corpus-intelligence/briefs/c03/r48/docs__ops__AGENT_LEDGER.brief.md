# docs/ops/AGENT_LEDGER.md

## What it is (1-2 sentences)
A 593-row append-only incident/decision ledger (C-series, A-series, ARCH, V3, SURF, FIX, TUNE, CLV, RANK, NEON rows) recording measured production defects in the Galaxy Sports Edge engine and web app — each row states the finding, the owner, DONE/OPEN/BLOCKED status, and the evidence (commit SHA, measured numbers) — spanning June through September 2026.

## Key metrics/methods (formulas where given, else "not specified")
- Brier decomposition: BS ≈ REL − RES + UNC (Murphy identity; see BRIER_IMPROVEMENT_STEPS.md).
- Live Brier ~0.2478; floor ≤0.22; live REL ~0.004; RES ~0.0048; UNC ~0.248 (per BRIER_IMPROVEMENT_STEPS.md).
- Binned ECE biased upward at finite n (perfect forecaster ≈0.09 at n=100); per-bin debiased estimator: SUM_k w_k sqrt(max(0, g_k²−v_k)).
- Pooled ECE had 44.2% cancellation vs honest weighted mean 0.0938.
- Confidence 80+ measured anti-predictive: claims 0.8663, realizes 0.5191, z = −10.7 (n=2,385); current-era (2026-08-01+) monotone: 0.5360/0.5863/0.6047/0.5826/0.7143 by band; conf 80+ 0.6164 (n=146).
- CLV (2,272 settled non-bootstrap picks w/ clvVerdict, matched-close collapsed, one-tailed binomial): SPREAD 169 beat/301 lost p<0.00001 (LOSING); MONEYLINE 29 beat/165 lost p<0.00001 (LOSING HARD); TOTAL 452 beat/371 lost p=0.0026 (BEATING); aggregate −8.2%.
- CORP decomposition DSC−MCB ≈ −0.0057 (negative net skill vs base rate).
- Fixture triplication: every NFL fixture is 3 game rows (odds-api id, espn:americanfootball_nfl:, espn:nfl:); evidence floors must count DISTINCT fixtures.
- Engine reachability (TS checker getAliasedSymbol): 900 modules on disk; 482 LOADED (53.6%), 336 INVOKED, 146 loaded-but-never-invoked, 418 never loaded; 336 of 900 genuinely live.
- Signal census: 3,493 settled non-bootstrap picks over 1,896 distinct fixtures; 12 of 15 signal-family weights rest on no measured evidence; signals table reached 84,500 real measured rows.
- Ranking basis census (2,913 real rows, real comparator): rankingP 65.2%, rankingScore 0% (dead branch), confidence branch 34.8% (all June–July 2026 legacy).

## Data sources named
- ESPN (event IDs, scoreboard/summary; ground-truth audits against ESPN finals)
- The Odds API (line snapshots; EVENT_ODDS_INGEST_ENABLED; credit cap 8 calls)
- nflverse (injuries, player stats, depth charts; projection-source recommendation; 35,490 player_game_stats rows, 1,436 players)
- Neon Postgres gse-postgres (production measurements via hermes_ro read-only role; NEON-KEY verified)
- baseball-savant / Statcast (batter/pitcher/sprint-speed CSVs; use-with-caution registry entry)
- Kalshi (eventTickerMatchesGame date-fragment join; 26SEP14 time-rot trap in tests)
- moneypuck, penaltyblog, Sleeper, Scores24, Airwave/Beat reporter meshes (source stack; source catalog fenced 2026-09-28)

## Findings (numbers and facts, not vibes)
- Line-integrity defects: published lines are arithmetic means of books' spreads, not quoted prices. 355/725 (49%) MLB spreads off the run-line ladder; 8 of 12 MLB books carry impossible spreads (±19.5); 938 of 1,901 published SPREAD/TOTAL lines off any book-quoted grid (MLB TOTAL 383/686, MLB SPREAD 299/774); mean-fingerprint values like -1.375 (n=23), -1.4375 (n=17), -1.227272727272727 (n=11); off-grid cohort flattered the record ~3.8 points. Guards: `isPublishableSpreadLine` (ladder {1.5,2.5,3.5}); published-line.ts snaps artifacts to nearest quoted book number; push counting excluded from win rates; bet terms frozen write-once at creation (confidence/grade/trail still refresh).
- Settlement corruption: free-score-persist's ±48h window + team-name-only matching wrote phantom finals onto unplayed games (87 picks settled before kickoff, C-114 remediated); root cause later INVERTED — picks graded correctly against ESPN finals, then game rows were overwritten by loose cross-fixture score backfill (3/3 verified vs ESPN), and SCORE_MISMATCH_CROSS_PATH froze wrong scores with no authenticated correction path (founder-gated). Ground-truth audit vs ESPN event ID: 68/590 moneylines WRONG (11.5%), all on wrong-score rows; MLB 169/491 wrong rows (34.4%); NFL 0/66; 1,529/2,199 settled picks (69.5%) carry no ESPN event id → unauditable.
- In-play look-ahead bias measured on production: in_play 170 graded at 73.53% vs pre_game 2,119 at 52.34%; in_play MONEYLINE 121 at 83.47% vs pre_game MONEYLINE 792 at 62.37% — a 21-point class above the rest. Guarded by `hasKickedOff` fail-closed mint rule.
- Public record contradictions (measured live 2026-09-11): /performance published a 500-row window as the record while the ops truth surface said the ≥80 tail is overconfident (n=222, winRate 0.5225 vs claimed 0.8663); two sample sizes on one screen (500 vs 496); false "No official record yet" copy at 2,298 settled picks because performance_summaries had ZERO rows; "Brier 0.236 - Better than a coin flip" copy. Clean population (pre-game AND (moneyline OR on half grid)): 1,464 graded at 54.10%.
- Calibration gates: only ECE binds (Brier 0.22 floor cleared by a constant 0.69 forecaster, UNC=0.2139); Murphy REL floor 0.05 = 22.4-pt RMS gap vs ECE's 5-pt absolute (4.47× looser); RES has NO floor — zero-skill base-rate forecaster reads GREEN. 2026-09-06: n=458, Brier 0.1926, REL 0.0053, ECE 0.0524 (floor 0.05) → RED; deployed v5.2.7 debiased ECE 0.0520–0.0579. Monotone transforms (Venn-Abers, temperature, Platt, beta, isotonic) provably cannot create resolution; only new conditioning information can. no_rows audit: 297 settled ML picks had bookmakerCount=0 (signal slate writes no odds rows), no recoverable price.
- Ranking law: board now sorts primarily on readSignedEdge() (engine's own expectedClv) via comparePicksByRanking; the comparator was correct but unpinned — now pinned by board-ranking-law tests. Rank basis census: 34.8% of published graded picks fell through to the confidence branch, all June–July 2026 legacy; August–September carry rankingP on 100% of rows. RankingScore branch is dead code (0/2,913). Confidence-value itself still uncalibrated; ranking only changes order of already-gated rows.
- CLV (CLV-1, prod 2026-09-27): engine loses to the closing line on SPREAD and MONEYLINE, beats it on TOTAL — the actionable claim is per-bet-type, not blended Brier 0.2042.
- Signal machinery: 52 fabricated provenance strings (16 naming predictLogistic which does not exist; uniform 0.75–0.88 hand-picked confidence menu across 6–11 adapter files) were relabelled to engine-inline:<file>#<fn> or wired to real functions (guard now at 0, PR #965); signal-ledger writers had producers but no loader (V3-350/351/352/353); tuner blocked on a nonexistent player↔team crosswalk (TUNE-BLOCK-1, depth_chart NFL-only covers ≤4.9% of settled picks, settled = MLB 2,185/NCAAF 757/MLS 325/NFL 169/NHL 8/NBA 7); signals table reached 84,500 measured rows with wall-clock-deadline shard rotation (SIGNALS-1/2, SURF-21); 12 of 15 family weights are priors with no measured evidence (SURF-10: rest +0.211 z=2.54 earned, line_movement +0.317 z=5.31 earned on a thin 295-row arm, 8 families never present on a settled pick).
- Public/private doctrine enforced in code: 7 genuinely open surfaces fenced (/methodology, /intelligence/metrics, /nflverse, /players, /parlay-mri, /api/calibration, /api/gse/v1/truth; DEFAULT DARK + founder opt-in env), source catalog anonymized, fictional DFS/NBA pages fenced and noindexed, fictional-data-honesty guard shipped.
- Jarvis/J-1: the reasoning layer is STRUCTURAL — model reasons/explains/converses but NEVER produces a probability; build fails if the module gains an LLM client, fetch, or a predict/probability/forecast/estimate/winRate/edge export.
- Operational: "cap before collapse" defect class 5× in one night → fixture-query-inventory guard on all 18 game/gateDecision queries; FIX-1/2/3/4: board down from bridge-premises.jsonl path bug then untraced serverless file; red-checked guards caught lint failures from merged PRs; ARCH-13: CI red from wall-clock time rot (KICKOFF 2026-09-14T17:00:00Z pinned, test closed 2026-09-28); DOC-1 (BLOCKED): short-week-road-deficit signal live with unbacktested magnitudes (−1.75, −0.65, 34%) — needs backtest or demotion; SURF-2/SURF-8: projection-source lock still founder-open, nflverse (35,490 rows, 1,436 players) measured and recommended.
- Meta-findings: 4 corrections to the author's own first measurements recorded (SURF-7 SQL-vs-JS census, SURF-13 row-count framing, SURF-16 guard regex under-reporting 35→52, SURF-10 pooling artifact reversed by stratification); every number carries the command that produced it (agent charter rule).

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Published lines are book-spread means, not quoted prices; push-terms, frozen bet terms, and published-line snapping guards restore subscriber-visible honesty (line-integrity rows).
- [TRUST-SIGNAL] 69.5% of settled picks have no ESPN event id — unauditable; grading-line vs displayed-line divergence on 73% of TOTAL picks (34 outcome-flipping) is a founder-pending honesty defect.
- [TRUST-SIGNAL] Public /performance contradictions (500-row window presented as record; false "no official record yet" at 2,298 settled) — display honesty measured live, not assumed.
- [TRUST-SIGNAL] Fictional DFS slate and NBA fictional page presented as real — fenced, labeled, noindexed; fictional-data-honesty guard shipped.
- [SCHEME] RES is the skill lever: monotone calibration transforms provably cannot create resolution; only new conditioning information (independentEdge.trueProb, new signals) can.
- [SCHEME] CLV per bet type (TOTALS beat the close, SPREAD/MONEYLINE lose) is the external referee — sharper than blended Brier.
- [SCHEME] Anchor census (Welford, MIN_CENSUS_ROWS=30) + group-aware tuner (fixture-distinct evidence floors) — measurement discipline for signal weights.
- [COACHING] Coach-report signal tier added to news impact (moderate positive, fires on explicit coach/report framing, checked last).
- [OTHER] Public/private surface doctrine: 7 surfaces fenced, source catalog anonymized — competitive-intel hygiene.
- [OTHER] Jarvis grounded-reasoning: LLM explains but never predicts — structural safety, not prompt convention.
- [OTHER] Tenancy foundation (RLS + Prisma extension), props lane live (EVENT_ODDS_INGEST_ENABLED confirmed 2026-09-18), DFS optimizer on engine slate (illustrative slate retired), lineup repair manual-shipped, 146 loaded-but-never-invoked modules — the wiring backlog is measured, not guessed.

## Engine-actionable? (yes/no + one-line what)
Yes — the ledger IS the engine's defect backlog: quote real book lines (never means), grade on ESPN event-id evidence, keep in-play out of the record, bind calibration to debiased ECE with a RES floor, rank on expectedClv not confidence, and measure every signal weight on settled fixture-distinct samples before it touches a published probability.
