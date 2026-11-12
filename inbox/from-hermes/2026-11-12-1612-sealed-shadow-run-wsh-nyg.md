# HERMES — sealed shadow run complete, WSH @ NYG (2026-11-12 16:12 CT)

Branch `claude/keen-goodall-o6kuy1`. Commits `dedb0f82c` (evidence spine, loaders,
entrypoint, ratchet, form refresh) and `b84818e7f` (fail-closed publication).

## The run

```
run_pregame v5.3.1+evidence-spine.1
game WSH @ NYG  week 10  id cmt4fewrc00jbeat5nq9eauqo
started 2026-11-12T22:07:47Z

STAGE A — evidence
  market.spread              -2.0000        the-odds-api      2026-11-12T22:00:15Z
  market.total               41.0000        the-odds-api      2026-11-12T22:00:15Z
  market.consensusNoVigHome  0.5486         consensusNoVig    2026-11-12T22:00:15Z
  market.bookmakerCount      5              the-odds-api      2026-11-12T22:00:15Z
  injuries                   50 rows        db:injuries       2026-11-12T11:19:43Z
  weather                    present        nws:weather       2026-11-12T22:07:47Z
  rest                       present        games             2026-11-12T22:00:28Z
  homeForm                   present        trends:nflverse   2026-11-12T21:55:01Z
  awayForm                   present        trends:nflverse   2026-11-12T21:55:01Z
  homeCharting               MISSING (no pressure-rate column in trends or ftn_charting)
  awayCharting               MISSING (same)
  homeCoaching               present        coach-sim:COACH_32_STAFF_PROFILES
  awayCoaching               present        coach-sim:COACH_32_STAFF_PROFILES
  corpus                     7 rows         lit:corpus-grounding
  jev                        MISSING (no spine file supplied)

STAGE B — READY (degraded: homeCharting, awayCharting, jev, identity.venue)
STAGE C — 10,000 drives: winProbHome 0.4182  marginMean 2.95  totalP10 29.4  totalP90 63.4
STAGE D — 8 families computed, 0 live (all shadow, weight 0)
STAGE E — market prior 0.5486  live delta 0.0000  posterior 0.5486
STAGE F — best home price -125  implied 0.5556  edge -0.0070  threshold 0.02  verdict NO_BET
STAGE G — sha256 3a12451cd8a5e834ec51cbffca5077cc876aa17ebc82b984f3b2b6d6db4f3f0b
          publishable false — the walk-forward emission gate is closed
```

Sealed artefact: `data/engine/shadow/wsh-nyg-2026-11-12.json` (54 KB, full bundle
plus outputs plus manifest). Committed before kickoff.

**The hash is the deliverable.** It is the first honest data point in the loop:
the engine looked at real inputs, produced a number, and refused to bet.

## What is wired

| lane | state |
|---|---|
| L1 spine | done — Evidence<T>, completeness gate, canonical seal, team codes |
| L2 loaders | done — schedule, market, rest, injuries (db + ESPN), weather, team-form, charting, coaching, corpus, venues |
| L3 entrypoint | done — `scripts/ops/run_pregame.ts`, Stages A–G |
| L4 ratchet | done — fails on numeric `??`/`||` in the evidence path |
| L5 publication gate | done — fail-closed at both publishing call sites |
| L6 equation census | done — 41 of 62,900 candidate-bindable (0.065%) |
| L7 calibration proposal | drafted — `docs/calibration-proposals/2026-11-12-evidence-spine.md` |
| L8 form refresh | done — Weeks 1–8 from nflverse pbp, 32 distinct values |
| L9 ledger truth | NOT STARTED — needs owner clearance, per the plan |

Tests: 91 passed (ingestion-pipeline evidence-loaders + publication gate),
45 passed (prediction-engine evidence), 87 passed (process-sport).

## Findings that change the plan

1. **ESPN injuries returns HTTP 403 to this client's User-Agent.** Verified:
   403 with `GalaxySportsEdge/1.0`, 200 with a browser UA. The database is now
   the primary injury source; ESPN is the fallback. The `injuries` table has
   Week 10 rows for all 32 teams, fetched 11:19 CT today.

2. **The games table has no venue column.** `identity.venue` is MISSING, so
   weather had nothing to resolve. Fixed with a static home-venue table (32
   entries). No venue still means MISSING weather — never Denver.

3. **The trends artefact is keyed `WAS`, the contract uses `WSH`.** The loader
   now canonicalises the file's keys, not just the requested team. Without this,
   Washington had no form row at all.

4. **No pressure-rate column exists** in the trends file or in
   `ftn_charting_2026.parquet` (30 columns, verified). `qb_hit_rate_allowed_pct`
   is hits, not pressure. Charting is MISSING rather than filled with a
   substitute. This is a real data gap, not a wiring gap.

5. **The play-by-play covers Weeks 1–8, not 1–9.** 18,926 plays, 108 games.
   Week 8 has 188 plays (partial); Week 9 is absent entirely. The rebuilt
   artefact says so in `weeks_covered` and `coverage_note`.

6. **The equation corpus is not a football corpus.** 41 of 62,900 equations
   mention a football symbol and have an `=`. The earlier "7,050 evaluated"
   figure measured whether LaTeX parses, not whether the symbols mean anything.

7. **NFL settlement has not run since 2026-10-20.** Last `SettlementRun` is
   `cmvgo10if0004grr2z7pxarai`, window `2026-10-20T12Z`. Week 9 still has 11
   published PENDING picks. Stage H cannot score anything until this is fixed.

8. **`lit.corpus_chunk` has one index** (`corpus_chunk_unique`) and no vector
   index. EXPLAIN confirms a Seq Scan over 297,326 rows at cost 75,200 for the
   vector query. That is the 38–212 s per game. Proposed, not created:
   `CREATE INDEX CONCURRENTLY ... USING hnsw (embedding vector_cosine_ops)`.

## JEV

Zero weight tonight, as I said. No spine file was supplied and I did not
fabricate one. The bundle records `jev: MISSING (no JEV spine file supplied)`.

## Vercel

Untouched by me. `PUBLIC_PICKS_ENABLED=false` is saved but not live in the
running Production deployment. I will report the deployment ID and the
verification method when my work produces the next qualifying deployment.

## What I did not do

- L9 (ledger truth / calibration page) — the plan requires owner clearance and
  coordination with Carbon 4's storefront lane. Not started.
- The VOID SQL is prepared and committed, not executed. It ends in ROLLBACK.
- No database writes of any kind. Every query was SELECT or EXPLAIN.
- No gate or flag flipped. MODEL_VERSION is still v5.3.1.

— Hermes
