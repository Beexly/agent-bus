# docs/ops/NIGHTLY-2026-09-28-0155.md

## What it is (1-2 sentences)
An autonomous nightly status from 2026-09-28 (01:55 CT / 06:55 UTC) covering two production outages debugged to their true root causes, the six-item spec build-order status for the engine, three bugs found only by running the new `signals` writer, a `rankingP`-vs-`confidence` measurement with a redaction correction, an intel-repo audit, and four open blockers needing founder action.

## Key metrics/methods (formulas where given, else "not specified")
- `sort-key.ts` sorts the board preferring `rankingP` (**measured monotone**) over `confidence` (**measured anti-predictive, z = −10.7**). Threshold/significance method not specified beyond the z-value.
- DOC-1: short-week road deficit coded at **−1.75** in docs; measured **−0.534, t = −0.53** (indistinguishable from zero) on **2,622 settled games**.
- Calibration offline (referenced): CIR vs PAVA + paradox + CLV gate — formulas not specified.
- Spec item 5 (off-field intake) partial: rest/travel exists; nutrition/psych/cognitive do not.

## Data sources named
Live production logs (deploy `dpl_CJYjQ13QPRtrBNGWrJnP4sEUTWKa`, `sports-ock6qzjc9`), `generate-signal-slate` cron, `board-fill` cron, player `signals` writer reading four census tables, `rankingBasisCensus` (same population as `confidenceTail`), live DFS slate provider (#927), settled-games corpus (2,622 settled games for short-week test), settled picks (63% MLB).

## Findings (numbers and facts, not vibes)
- Two outages verified dead by log, neither matching the first assumed cause: (a) board 500s were not path arithmetic (#928 fixed the path; the data file was never traced into the serverless bundle); (b) OOM was not a gunzip-buffer problem (#929 released gz bytes but kept parsed records; the season filter ran after the whole 33MB multi-season table was built). The author also broke the next deploy by tracing a 445MB directory into a 250MB function; repo guardrails caught both. [OTHER — eng]
- `generate-signal-slate`: 200, "collapsed 523 rows to 522 fixtures, slating 80". [OTHER — eng]
- Spec build order: (1) lock projection source — founder decision, open; (2) live DFS slate provider — wired (#927); (3) adjustment layer v1 — wired (#927), honestly labeled uncalibrated defaults, gated from published projections; (4) fill player `signals` — writer built + running, count not yet read back; (5) off-field intake — partial (rest/travel only); (6) backtest every rule — 1 of N (short-week done), adjustment layer fail-closed by design. [OTHER — eng / QB-BEHAVIOR-adjacent below]
- Player `signals` table had **0 rows, no writer, no reader**; writer upserts measured columns off four census tables, `value` verbatim with `valueRaw` retained, idempotent upsert on the schema's unique tuple; it does NOT weight or rank (weights are priors; inventing priors would fabricate the ranking the tuner measures). [OTHER — eng]
- Three bugs found only by running the writer: (1) every upsert failed — `Argument 'fetchedAt' is missing`; (2) first live tick 504 — one-row-at-a-time over ~71k candidate rows, fixed with a wall-clock deadline (safe because upserts converge on re-runs); (3) a 200 proved nothing, so a read surface was added (empty vs full tables looked identical from outside). [OTHER — eng]
- `rankingP` measured **null on 100% of live board rows** — corrected from "missing data" to **redaction** (`/api/board/state` nulls it for non-premium viewers by design, GSE-SEC-026). Deliberately did not reorder the comparator; reorder is a founder decision. [OTHER — eng]
- `loadRankingBasisCensus` (#937) reads the same population as `confidenceTail` so the numbers are comparable, test-pinned. [OTHER — eng]
- Intel audit (gse-competitive-intel): P0-1 `/ai.txt`→localhost FIXED (now serves `llms.txt` 200, 5,200 bytes); P0-2 `entryOdds` write-guard FIXED (`isPlausibleEntryOdds` at `process-sport.ts:1518`); P0-3 confidence inversion suppression closed, ranking measured, reordering founder's call. Proof API sha256 recomputed with python `hashlib`, no GSE code: `claimed == recomputed == ad420a9d…` MATCH. [TRUST-SIGNAL]
- Blockers: **TUNE-BLOCK-1** — `teams` has 0 rows; settled picks are **63% MLB** but the only depth-chart source is NFL, so the tuner caps at **4.9%** even with a perfect crosswalk. DFS_PROVIDER unset (founder-only). DOC-1 short-week road deficit ships −1.75 but measured −0.534 (t = −0.53) on 2,622 settled games — rescale/demote/widen; author refused to rescale a live magnitude on one backtest. No read-only DB credential locally; `signals` count and `confidenceShare` need an authenticated ops call. [OTHER — eng / QB-BEHAVIOR-adjacent below]
- Verification line: 2455/2455 data-ingestion · 6236/6236 prediction-engine · 13/13 writer · 5/5 ranking census · tsc 0 · lint 0 · ledger 428 rows, guard passing. [OTHER — eng]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- `confidence` measured anti-predictive (z = −10.7), `rankingP` measured monotone (TRUST-SIGNAL): the engine's own confidence number is empirically anti-predictive while the ranking probability is monotone — strongest evidence in the corpus so far for which number a public surface may show; do not invert.
- Short-week road deficit −1.75 vs measured −0.534 (t = −0.53) (COACHING): a coaching/scheduling adjustment rule is unproven on 2,622 settled games — INFERENCE: any scheduling-rest edge claim must be backtested, not assumed.
- Tuner caps at 4.9% because depth-chart source is NFL-only while 63% of settled picks are MLB (OTHER — eng, adjacent COACHING): data-coverage mismatch caps calibration; cross-sport tuning needs sport-native depth charts.
- `entryOdds` plausibility write-guard `isPlausibleEntryOdds` (TRUST-SIGNAL): garbage-in guard on the line input that CLV math depends on.
- Proof API sha256 match with independent recomputation (TRUST-SIGNAL): publish-then-verify commitment scheme proven intact — model for any public pick ledger.
- All remaining items (OTHER): engineering postmortem and infra.

## Engine-actionable? (yes/no + one-line what)
Yes — confidence is empirically anti-predictive (z = −10.7) while rankingP is monotone, so the board must rank on rankingP, and the short-week −1.75 rule is unproven (measured −0.534, t = −0.53) and must not ship unscaled.
