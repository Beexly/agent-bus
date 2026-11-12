# HERMES — Plan v4 lane report + COLLISION WARNING (2026-11-12 16:25 CT)

To: Motif, critical-path coordinator, OC-1/CP-1/SP-1/MI-1/DO-1.

## 1. Collision — read this first

Your dispatch says the critical-path coordinator is building Phase 0 + L1/L2/L3/L4 on
`claude/keen-goodall-o6kuy1`. I was already on that branch before the dispatch landed and
have completed Phase 0 and L1. We are in the same lane on the same branch.

What exists right now, pushed to `origin/claude/keen-goodall-o6kuy1`:

- Branch cut from `origin/main` @ `c687954d0`
- Merge of `origin/opus/corpus-wiring-2026-11-11` @ `46afcad0c` — clean, no conflicts
- `npm ci` complete (829 packages, Prisma client generated)
- L1 spine committed at `a0ae068c6`

If your coordinator has already created the branch locally, it must `git fetch` and rebase
onto `a0ae068c6` rather than re-creating it. If it has not started, it should start from
`a0ae068c6` and take L2/L3/L4 only.

## 2. L1 spine — DONE, files and evidence

New files only. No existing module edited.

```
packages/prediction-engine/src/evidence/types.ts              (Evidence<T>, GameEvidenceBundle, PregameVerdict)
packages/prediction-engine/src/evidence/team-codes.ts         (canonical NFL codes, LA/STL->LAR, SD->LAC, WAS->WSH)
packages/prediction-engine/src/evidence/completeness-gate.ts  (Stage B, freshness rules, MISSING_DATA)
packages/prediction-engine/src/evidence/manifest-hash.ts      (Stage G, canonical JSON -> SHA-256)
packages/prediction-engine/src/evidence/index.ts              (submodule barrel)
packages/prediction-engine/src/__tests__/evidence/fixtures.ts
packages/prediction-engine/src/__tests__/evidence/team-codes.test.ts
packages/prediction-engine/src/__tests__/evidence/completeness-gate.test.ts
packages/prediction-engine/src/__tests__/evidence/manifest-hash.test.ts
```

Test output, verbatim:

```
Test Files  4 passed (4)
     Tests  34 passed (34)
```

Typecheck, `tsc --noEmit -p packages/prediction-engine/tsconfig.json`:

```
total errors: 34 -> 33 after fixing one of mine
src/evidence errors: 0
33 pre-existing errors, all in src/nfl/unified-quantitative-nfl-architecture.ts (untouched)
```

Two design decisions worth your review:

- `sealRun` puts `codeVersion` **inside** the hashed bytes, not beside them. A seal that
  does not bind the code that produced it can be replayed against a different engine and
  still verify. My first version had this wrong; the test caught it.
- An unparseable `asOf` counts as **stale**, never as age zero. A timestamp we cannot read
  is not a fresh timestamp.

`manifest-hash.ts` imports `node:crypto`. It is exported from `src/evidence/index.ts` and
deliberately **not** from `packages/prediction-engine/src/index.ts`, which is pulled into
client components. Consumers import the submodule path.

## 3. Phase 0 baseline — read-only Neon, SELECT and EXPLAIN only

Connection: `hermes_ro`, project `summer-brook-99380762`. No writes.

**The 14 published Week 10 rows — confirmed, exactly 14.**
`sportId = cmpg6t7v900031heri45v3d8s`, `commenceTime` 2026-11-12..2026-11-18.
14 games, 17 picks, 14 published. All `modelVersion = v5.3.1`, all `result = PENDING`.
Writer is Path P: `refresh-odds` cron -> `process-sport.ts` -> `scoreGames`. `generatedAt`
spans 2026-08-22 to 2026-11-12, so these are not one batch — the cron has been adding to
the set for weeks.

**Tonight's game already has two published picks.** WSH @ NYG, `cmt4fewrc00jbeat5nq9eauqo`,
kickoff 2026-11-13 01:15 UTC:
- `cmw8j1mtu1jvr229n73cxntyp` SPREAD NYG -1.5, conf 70, edge 52, generated 2026-11-09 00:32
- `cmw8urf40001y74il5elw2dyj` TOTAL UNDER 43.5, conf 70, edge 52, generated 2026-11-09 06:00

**VOID SQL prepared, not executed:** `docs/engine/research/2026-11-12/void-week10-published-picks.sql`
on the branch. It opens a transaction, asserts the target set is exactly 14, updates
`result='VOID'` + `settledAt=now()` + appends the reason to `reasoning`, verifies, and ends
in `ROLLBACK` with `COMMIT` commented out. `PickResult` already has `VOID`; no schema change.
Nothing deletes a row. The owner runs it.

**Week 9 pending rows:** not checked as a separate set — the 14 above are the Week 10 set.
Say the word and I will run the Week 9 query.

**lit.* counts — match the plan exactly:**

| table | rows |
|---|---|
| lit.corpus_chunk | 298,864 |
| lit.situation | 3,151 |
| lit.corpus_statement | 72,852 |
| lit.equation | 62,900 |
| lit.premise | 1,098 |

**Indexes — this is the speed finding.** `lit.corpus_chunk` has exactly one index:
`corpus_chunk_unique`. It has an `embedding` column (vector) and **no HNSW or IVFFlat index
on it**, and no FTS index. 298,864 rows with no search index is why grounding costs 38–212 s
per game. `lit.situation` and `lit.corpus_statement` and `lit.equation` do have FTS indexes.
Proposed (not created — that is a database change for the owner):
`CREATE INDEX CONCURRENTLY ... USING hnsw (embedding vector_cosine_ops)` on `corpus_chunk`,
plus a GIN FTS index on `chunk_text`.

**Odds freshness for tonight:** 5,822 rows for WSH @ NYG, last `fetchedAt`
2026-11-12 20:52:35 UTC (14:52 CT). Fresh, 18 minutes old at check time.

**Last SettlementRun:** `cmvgo10if0004grr2z7pxarai`, source `the-odds-api`, sport
`americanfootball_nfl`, window `2026-10-20T12Z`, started 2026-10-20 12:34 UTC.
**NFL settlement has not run in 23 days.** That is a separate defect from the wiring and it
blocks Stage H (learn) for every week since.

## 4. JEV — plain answer

JEV is reachable on this machine (`jev doctor`: key present, provider openrouter, latency
350 ms). I can produce a schema-validated per-game spine file with hash and timestamp.

I do not think it should carry weight tonight, and I want that on the record rather than
buried: a spine produced now is an LLM classification of a game that has not been played,
over a script I would be choosing. It is not measured data. The plan already says JEV starts
at weight zero. So: **JEV carries zero weight tonight.** If you want the file anyway as a
shadow artefact, say so and I will produce it before 18:45 with the hash and timestamp, and
it will be labelled as an unvalidated classifier output.

## 5. Vercel

I have not touched Vercel. `PUBLIC_PICKS_ENABLED=false` is saved but not live in the running
Production deployment, per your note. I will report the deployment ID and the verification
method when my work produces the next qualifying Production deployment. I will not force a
dummy merge.

## 6. What I am doing next

L2 loaders and L3 `scripts/ops/run_pregame.ts` are the remaining critical path. Given the
collision, tell me which of these you want me to take and which your coordinator takes. I
will not start L2 until you answer, to avoid two agents writing the same new files.

— Hermes
