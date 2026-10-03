# compose/spec/overnight-reasoning-queue.md
## What it is (1-2 sentences)
Design spec (status: designed, updated 2026-09-26, branch `grok/reasoning-layer-2026-09-26`) for an overnight reasoning queue: a 13-slice agent work queue that reconciles a stale overnight-agent prompt against live repo state, splits work into two physically isolated lanes, and wraps the four most context-degrading mechanical steps (file hashing, 62-directory module census, feature catalog, slice loop bookkeeping) in four Node scripts under `scripts/overnight/`.

## Key metrics/methods (formulas where given, else "not specified")
Gate thresholds and verdict machinery, verbatim:
- `|r| >= 0.08` and `|slope| > se` — LIVE scalarizer gates (the 4-leg guard also named, count not further specified).
- `minSampleCount`, `maxECE` — named as hard gates, values not specified in this file.
- `g = 0` is the only LIVE path; the only producer of a `parts-registry.jsonl` row is a recorded walk-forward fit with `n`, `r`, `slope`, `se` (the scalarizer fit schema).
- Verdict vocabulary: `PASS | DARK | STORED | NOT_EVALUATED | BLOCKED | STUCK`.
- Script contracts:
  - `verify-files.mjs`: streaming SHA-256 per file, line counts, manifest `publishes_pick` check, `players_on_field` array check, snap-row `gsis_id` absence, `punt_wp: null` presence. Emits JSON; non-zero exit on any mismatch.
  - `log-slice.mjs`: one JSON object appended atomically to `data/reasoning/overnight-loop.jsonl` plus one row to the audit md; refuses a non-monotonic cycle number; prints the new `next`.
  - `scan-modules.mjs`: walks `packages/prediction-engine/src/*` deterministically; per directory emits file count, whether any file exports a number, matched blocked-kernel names, data-file reference. Rows only ever `catalogued` or `blocked` — never `wired` or `measured_zero`.
  - `scan-features.mjs`: derives candidate grains from the headers of five nflverse JSONL files + the manifest; emits `feature-catalog.jsonl` with `status: catalogued` and real `source_file`; skips grains whose required keys are absent from observed headers; the count will be well under 240 and that is a pass ("the 240-row trap").
- Lane topology: Lane 1 (worktree `C:\Users\Garrett\Sports-wt-grok-reasoning`, branch `grok/reasoning-layer-2026-09-26`) owns slices 0–7 and 10–12, is the sole writer of all TypeScript source, `parts-registry.jsonl`, `dark-candidates.jsonl`, `data/decision-time-prices/`, and the loop/audit logs. Lane 2 (worktree `C:\Users\Garrett\Sports-wt-night-lane2`, branch `mimo/night-lane2-2026-09-26`, based on `b6723fd5a`) owns slices 8 and 9, sole writer of `module-ledger.jsonl` and `feature-catalog.jsonl`. Lane 2 never runs a fit, never edits source, never touches the parts registry; Lane 1 never hand-walks the 62 directories.

## Data sources named
- The 13-slice overnight queue defined at `docs/reasoning/overnight-agent-prompt-2026-09-26.md` (the original work order; slices 0–12).
- Five nflverse JSONL files (as feature-catalog grain sources; exact filenames not listed, identified via headers + manifest).
- nflverse seasons data extended under enlarged heap (T10: manifest `rows` equals line count, `read` equals `kept` plus refusals).
- `bridge-premises.jsonl` (T5: audit `signal_id` histogram, `sample_count` distribution, out-of-range probability count, duplicate `game_id` count; never fed to `aggregateSignals`).

## Findings (numbers and facts, not vibes)
- The queue is unstarted as of spec date: `data/reasoning/overnight-loop.jsonl`, `docs/reasoning/overnight-audit-2026-09-27.md`, `docs/reasoning/morning-2026-09-27.md`, `data/reasoning/module-ledger.jsonl`, `data/reasoning/feature-catalog.jsonl`, and `data/decision-time-prices/` did not exist.
- Reconciled baseline (five deltas, each measured from live repo):
  1. Prompt said HEAD is `87d727475`; live branch was `b6723fd5a` ("Merge origin/main into grok/reasoning-layer-2026-09-26") — Slice 0's descendant check passes.
  2. Prompt warned origin may be at `fed4ef3cc`; PR #919 merged and `origin/main` was `d6197a3aa` — the "stop if someone moved the branch" gate does not fire.
  3. Prompt FORBIDDEN 1 ("feature branch not pushed") was stale — branch was pushed and merged to `main`; the prohibition binds only prospectively.
  4. Prompt claimed no `from-bridge.ts` / no `reasonAbout`; `packages/ingestion-pipeline/src/reasoning-trace/from-bridge.ts` exists and calls `reasonAbout` — FORBIDDEN 12 re-read as "no second copy"; `AGENTS.md:27` already recorded the correction.
  5. Prompt's `npm install --ignore-scripts --no-audit --no-fund`; `AGENTS.md` law 7 forbids `--ignore-scripts` for new installs; AGENTS.md is newer and is law.
- Live repo state verified unchanged and still gating: eight LIVE parts, four DARK verdicts, the `SignalFamily` eight-member union, and all 62 slice-8 directories (`packages/prediction-engine/src/*`, plus `__tests__` not listed by the prompt).
- 51 worktrees already existed on the repo; lane membership asserted by branch name.
- A third process (`grok.exe`, PID 32168) was still writing to Lane 1's worktree; the concurrency guard treats any modification to a file this run didn't touch as a collision — the slice stops and logs `BLOCKED` rather than committing over another writer. `AGENTS.md:83` names exactly one overnight agent; the owner was running two; isolation (not deference) is the engineering answer.
- The hasher was first written as `verify-files.ps1` but couldn't be committed because `.gitignore:195` is `*.ps1` and `AGENTS.md` law 2 forbids editing `.gitignore` — reimplemented as `.mjs`. Both implementations were run and agreed on every hash before the `.ps1` was deleted (cross-check, not a guess).
- T8 acceptance: a unit test shows entryOdds `-33` rejected and `-110` accepted; the 199 historical rows are byte-identical before and after.
- T11: joiner match rate/unmatched/ambiguous counts computed from a full hashed pass; null `players_on_field` returns null, not an empty roster.
- T12: the LAC edge is recomputed and stated after the single walk-forward measurement through `selectPart`.
- Out-of-scope list (notable): no second `from-bridge.ts`/`reasonAbout` and no edit to the existing one; no edit to blocked kernels (`props-dfs`, GLMF, `fitAlpha`, `ooEpc`, `bucketRoi`, `gaussCopulaJoint`, `opponent-adjusted-epa`, `reasoning-surface.ts`); no loosening of `|r| >= 0.08`, `|slope| > se`, `minSampleCount`, `maxECE`, or the 4-leg guard; no `priced: true`, no I/O inside `pricePropAgainstMarket`, no public win rate/ROI/units; no scraping PFF, SIS, scores24, `pfr_advstats`, or SiriusXM; no porting the nfl4th R model; no reading `DATABASE_URL`/`DIRECT_URL`; no edit to `AGENTS.md`, `.githooks/**`, `.gitignore`, or any `LAUNCH` file.
- T14 morning report acceptance: `HEAD start` records `b6723fd5a`, `pushed: no`, `publishes_pick: false`, and no number appears that was not computed this run.
- Referenced but external to the spec: `docs/reasoning/overnight-agent-prompt-2026-09-26.md`; the overnight work-order contract; `AGENTS.md` lines 7, 27, 83; PR #919; commits `87d727475`, `fed4ef3cc`, `b6723fd5a`, `d6197a3aa`.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER — calibration/sizing lane (the scalarizer program).** This spec is the process infrastructure for how engine parts earn LIVE status: the hard gates `|r| >= 0.08`, `|slope| > se`, `minSampleCount`, `maxECE`, and the 4-leg guard are the quantitative calibration floor; `g = 0` being the only LIVE path means only measured walk-forward fits with `(n, r, slope, se)` promote. Any QB-behavioral, coaching, OL, or scheme feature proposed from the other four files must pass these gates to be wired LIVE. The "no number appears that was not computed this run" acceptance criterion is Garrett's audit-receipts doctrine operationalized.
- **OTHER — trust-signal and publication safety.** The verdict vocabulary (`PASS | DARK | STORED | NOT_EVALUATED | BLOCKED | STUCK`) and the "no public win rate, ROI, or units" / "`publishes_pick: false`" constraints map directly onto the public/private surface doctrine: parts that haven't passed the gate stay DARK and internal, never published.
- **TRUST-SIGNAL — evidence discipline as QC.** "Every number in the morning report traces to a command whose output is in context"; script output is JSON so claims can be diffed against source files. This is the mechanical backstop for the trust lane: settled evidence the matrix file (see COMPETITOR_INTELLIGENCE_MATRIX brief) demands.
- **COACHING — potential intake.** The blocked-kernel list names `reasoning-surface.ts` and `opponent-adjusted-epa` as edit-forbidden; coaching-tenant features (e.g., fourth-down aggressiveness priors from the metrics catalog) would enter through the scalarizer path, not via editing these kernels.

## Engine-actionable? (yes/no + one-line what)
Yes — adopt the gate constants (`|r| >= 0.08`, `|slope| > se`, `g = 0` LIVE-only, verdict vocabulary) as the quantitative acceptance criteria every new engine feature (QB, coaching, OL, scheme) must clear before LIVE wiring.
