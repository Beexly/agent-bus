# docs/architecture/2026-09-18-signal-architecture.md
## What it is (1-2 sentences)
GSE's calibration-first engine architecture (author: Fable, status PROPOSED): one certified logistic head probability per (sport, market, side) replaces the anti-predictive additive confidence sum, with a signal registry of ~98 signals adjudicated into five verdicts, seven concurrent build tracks (capture, feature store, estimators, gates, rulers, trainer, surfaces), and a certification predicate governing the only customer-facing gate.
## Key metrics/methods (formulas where given, else "not specified")
- Head form: `logit(p) = logit(q) + f(x)` where `logit(q)` is the market logit as a FIXED offset (coefficient 1, never fit) and `f(x)` is ridge-penalized toward zero WITH a penalized intercept; identity test: as penalty → ∞, head reproduces the market exactly.
- Certification floors (byte-identical, `apps/web/lib/ops/calibration-eligibility.ts:131-136`): n 100 fixture-clustered out-of-fold rows, Brier 0.22, debiased ECE 0.05, Murphy reliability 0.05, read at the conservative (95th percentile) end; binding skill test: paired out-of-fold log-loss lower bound over market-only baseline > 0.
- Vig break-even for -110: `VIG_BREAK_EVEN_MINUS_110 = americanToImpliedProbability(-110) = 0.524` (four significant places); beat-close target 0.524 at bootstrap 5th percentile over ≥500 fixture-clustered rows.
- Elo from results: K 20, HFA 65. Signal slate stretch: 1.12 (retires under bump). Ranking blend: `rankingP = 0.7·trueProb + 0.3·(confidence/100)` (`ranking-prob.ts:57-107`).
- Margin-mixture spread independent: Stern-normal continuous + Laplace-smoothed mass at key numbers (signed 3, 6, 7, 10), fits on ≥64 settled margins; recenters on Elo-implied margin via OLS.
- Margin scale: NFL HFA 0.025 EPA/play (`nfl-epa-fair-value.ts:27`), margin scale 0.12 (`:25`).
- Promotion Leg 1: empirical-Bernstein lower bound on paired Brier differential, range width 2 (not 1 — a width-1 draft understated uncertainty by ~0.017 at n 500); log-loss leg: clip probabilities at epsilon 1/1000, range width ~13.8 nats.
- Logit-pool admission test: fit `logit(p) = w0 + w1·logit(market) + w2·logit(candidate)`; FIRE_NOTHING if Wald 95% CI of w2 includes 0.
- Freshness bound: 4 hours binds at mint and serve (`config.ts:131-132`); head refit cadence weekly in season; three consecutive green runs necessary, not sufficient.
## Data sources named
- nflverse play-by-play (CC-BY 4.0), nflverse officials dataset (2015+, columns fixture-verified), nflverse `NextGenStat` (persisted daily: avgCushion, avgSeparation, avgTimeToThrow, avgTimeToLos, cpoe, expectedCompletionPct, pctAttemptsGte8Defenders).
- FTN charting + pbp_participation (CC-BY-SA-4.0, internal modeling clean per 2026-07-16 rights verdict, public display share-alike-restricted); hurries absent from both — proxy is a sack-and-hit FLOOR.
- Odds API (licensed), TheRundown (rationed), MLB Stats API, NWS (public domain), Open-Meteo (free tier non-commercial — founder ruling owed), Statcast/Savant (use-with-caution), ESPN public, HistoricalGame archive (1999+, closing lines only, no opening line).
- Rights-banned sources: Sports Reference family (ToS §5(j) bans ML use, no internal carve-out), Basketball-Reference forbidden, MoneyPuck non-commercial-only.
## Findings (numbers and facts, not vibes)
- The book path's additive confidence is measured anti-predictive at the top: at confidence ≥80, n 235, claims 0.8663, realizes 0.5191, z = -10.7; Brier 0.3617 vs 0.25 for constant-0.5; win rate inverts from 0.6146 (75–79) to 0.4643 (90–94). [TRUST-SIGNAL]
- Book-path scoring saturates: consensusScore caps at 30, marketDepthScore at 20 — 50 points fixed before the game is read; book-depth term contributes a constant 20 points on any deep board. [TRUST-SIGNAL]
- Beat-close reads 23.0% vs the 0.524 requirement, measured on a consensus-vs-consensus basis across drifting book sets — unattributable to model or ruler until same-book CLV exists. [TRUST-SIGNAL]
- Receipt's marketFairProb diverges from the odds-table de-vig by 0.169 on average; 15 of 46 receipted rows >0.15 off. [TRUST-SIGNAL]
- Line archive died 2026-08-22 to 2026-09-13 (three weeks, one Prisma arg-shape bug) with no alarm — how the staleness monitor came to be. [TRUST-SIGNAL]
- Engine shape: 299 non-test files, 80 with external value importer, 87 ORPHAN, 48 DEAD-CHAIN; 22 files `vi.mock` the engine (note says 19); `GateDecision`, `Signal` tables have no writer; `GameSignal` has one writer emitting exactly 2 keys (schedule_density_7d_home/away).
- Post-settlement contamination verified: six-hourly cron `backfillIndependentTrueProb` rewrites `independentEdge.trueProb` on settled rows using whole-season NFL EPA and undated MLB standings — rows carrying that rewrite are excluded from training under reason `backfilled_post_settlement`. [TRUST-SIGNAL]
- Evidence inventory: market de-vig monotone, every band within 0.07, n 622 (RE-MEASURE flagged); signal-path Elo buckets 60–69 at 57.0% (n 423), 70–79 at 66.0% (n 247); MLB totals n 535 at .456, NFL totals n 14 at .357 (too small to read).
- QB-behavior numbers: CPOE/aDOT kill test excludes throwaways (cp is NA on throwaways in nflverse); interception-worthy throws converted at 52.3% in measured sample; passing efficiency correlates with wins 0.53–0.61 vs rushing 0.13–0.19. [QB-BEHAVIOR]
- OL/DL: pressure-to-sack conversion luck explains <0.5% of variance (R² < 0.005, PFF) — KILLED as a feature; no hurry column exists in nflverse/FTN so pressure reads are a sack-and-hit floor, never "true pressure"; pressure-matchup module carries a mandatory sign-convention test. [OL]
- Turnover: recovery is near-pure noise (year-to-year correlation ≈ 0); league mean recovery 46.3% — one 2025 team forced 19 fumbles, recovered 26.3%. [OTHER]
- Coaching: Move-37 W4 (adaptive coaching) killed: test -0.031 at 2.6 sd, sign reversed; cited 0.5–1.5 points/game aggressiveness figure has NO primary source — flagged NOT VERIFIED, never to be cited as fact. [COACHING]
- Scheme: gap labels mislabel outside-zone runs (NFL gamebook calls); box-count personnel (defenders in box, personnel groupings) is CONFIRMED buildable from FTN/participation; man-vs-zone coverage claimed by the rights verdict but NOT listed in this repo's own dataset description — verify-before-building. [SCHEME]
- League baselines measured: 2.10 points/drive, 24.0% TD, 20.4% three-and-out, 11.1% turnover-drive; kicker 85.6% FG / 95.9% XP; late-and-close carries 50–80 plays/season; prop stack produced 12 leans, all inside uncertainty bands, nothing actionable.
- Adversarial findings applied: ranking uses confidence via THREE routes (30% of rankingP, 100% when trueProb missing, twice as terminal fallback); CQR clamps at n=5/α=0.1 claiming 90% delivering 83.33%; percentile code double-inverts lower-is-better metrics (worst team reads 100); pre-registration `recordedAt` is caller-supplied so chain timestamps are satisfied by construction — must be a committed file that is an ancestor of HEAD.
- External-build fabrication rule: an absent source is closed by acquiring data, by a cleared source, or by staying absent — never by a default, heuristic profile, or rule-based matrix reported under the measurement's name. [TRUST-SIGNAL]
- Registry: ~98 rows; 77 BUILDING-NOW, 8 CAPTURING-NOW, 3 SHADOW-NOW, 2 FOUNDER-BLOCKED (Kalshi/Polymarket rights; ESPN Power Index licence flag), 8 KILLED. INFERENCE: header says "99 registry rows" while body counts 98 (77+8+3+2+8=98).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- QB efficiency composite: own dropback EPA + own CPOE, opponent-adjusted, keyed to observed passerId (starter-change test required) — highest-leverage single QB input named in the corpus. [QB-BEHAVIOR]
- QB read progression capture (charting-only, scramble-convention must be pinned first). [QB-BEHAVIOR]
- CPOE throwaway exclusion (cp NA on throwaways) — a QB-stat convention rule to enforce in any CPOE feature. [QB-BEHAVIOR]
- Coaching aggressiveness prior: unverified 0.5–1.5 PPG estimate must never be cited; pre-register a fresh kill line. [COACHING, TRUST-SIGNAL]
- Move-37 W4 adaptive-coaching family killed by sign-reversed -0.031 (2.6 sd); W1 killed at -0.0212; W2 killed at r 0.0112 vs required 0.15; IRL quarantined (73.70% vs 79.07% baseline). [COACHING]
- OL-vs-DL pressure matchup: sign-convention test mandatory (pressure-allowed as offValue inverted would score bad protection as good); output labelled a floor, never true pressure. [OL]
- Pressure-to-sack conversion KILLED (R²<0.005) — relevant only as a veto against individual sack props, never a feature. [OL]
- Coverage/box-count rows split: box-count & personnel are features (BUILDING-NOW); named-defender coverage grades, time-to-pressure, receiver-vs-defender matchup stay absent-silent until real data exists. [SCHEME]
- Formation usage by efficiency (shotgun/no_huddle flags already in nflverse) buildable today; EPA by run-gap carries the outside-zone mislabel caveat. [SCHEME]
- Certification predicate, pre-registration-as-committed-file, kill-lines-written-before-tests, no-added-conviction type (VetoVerdict carries publish:boolean only), gate promotion requires kept-vs-withheld lower bound > 0 on both outcome and same-book CLV at n≥100 — the corpus's complete trust doctrine. [TRUST-SIGNAL]
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the certification floors (n 100 / Brier 0.22 / ECE 0.05 / Murphy 0.05 at the conservative end), the market-offset head form, and the no-fabrication/absent-means-silent rule for every engine feature and gate.
