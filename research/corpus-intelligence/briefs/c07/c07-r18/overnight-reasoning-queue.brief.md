# compose/spec/overnight-reasoning-queue.md
## What it is (1-2 sentences)
Design spec (status: designed, 2026-09-26, branch grok/reasoning-layer-2026-09-26) for a 13-slice overnight reasoning queue that reconciles a stale work-order prompt against measured live repo state, defines a two-lane isolation topology for two concurrent agents, and a four-script night harness that survives context compaction.
## Key metrics/methods (formulas where given, else "not specified")
- LIVE scalarizer gate: `|r| >= 0.08`, `|slope| > se`, minSampleCount, maxECE, 4-leg guard; `g = 0` is the only LIVE path, produced only by a recorded walk-forward fit with n, r, slope, se.
- Scan scripts may only emit verdicts `catalogued` / `blocked` / `absent` — never `wired` or `measured_zero` (those require an agent-computed measurement; FORBIDDEN 11).
- Verdict vocabulary: PASS | DARK | STORED | NOT_EVALUATED | BLOCKED | STUCK.
- verify-files.mjs: streaming SHA-256 per file, line counts, manifest `publishes_pick` check, `players_on_field` array check, snap-row `gsis_id` absence, `punt_wp: null` presence; JSON output, non-zero exit on mismatch.
- log-slice.mjs: atomic single-line append, refuses non-monotonic cycle numbers.
## Data sources named
Five nflverse JSONL files (headers feed the feature catalog); repo-local: `data/reasoning/overnight-loop.jsonl`, `overnight-audit-2026-09-27.md`, `morning-2026-09-27.md`, `module-ledger.jsonl`, `feature-catalog.jsonl`, `parts-registry.jsonl`, `dark-candidates.jsonl`, `bridge-premises.jsonl`, `data/decision-time-prices/`; 62 directories under `packages/prediction-engine/src/*`; `packages/ingestion-pipeline/src/reasoning-trace/from-bridge.ts` (exists, calls `reasonAbout`).
## Findings (numbers and facts, not vibes)
- Queue unstarted as of 2026-09-26: all six output artifacts (loop jsonl, audit md, morning md, module ledger, feature catalog, decision-time prices dir) do not exist.
- Reconciled baseline: prompt's HEAD `87d727475` vs live `b6723fd5a` (merge commit); PR #919 merged so `origin/main` is `d6197a3aa`; branch pushed AND merged to main, so FORBIDDEN 1 binds only prospectively; from-bridge.ts exists → FORBIDDEN 12 means "no second copy"; AGENTS.md law 7 forbids `--ignore-scripts`.
- 8 LIVE parts, 4 DARK verdicts, SignalFamily 8-member union, 62 slice-8 directories verified unchanged.
- House pattern: 51 worktrees already exist; lane membership asserted by branch name. Lane 1 (`C:\Users\Garrett\Sports-wt-grok-reasoning`) owns slices 0–7, 10–12; Lane 2 (`C:\Users\Garrett\Sports-wt-night-lane2`, branch mimo/night-lane2-2026-09-26) owns read-only slices 8–9 with disjoint write sets.
- `grok.exe` PID 32168 still running/writing in Lane 1's worktree; concurrency guard: before each Lane 1 commit, any untouched-file modification = collision → slice stops, logs BLOCKED (FORBIDDEN 13).
- T8 acceptance: unit test shows entryOdds `-33` rejected and `-110` accepted; 199 historical rows byte-identical before/after.
- Feature-catalog "240-row trap": count will be well under 240 and that is a pass — no padding.
- Out of scope includes: no push/rebase/amend of pushed commits; no edits to blocked kernels (props-dfs, GLMF, fitAlpha, ooEpc, bucketRoi, gaussCopulaJoint, opponent-adjusted-epa, reasoning-surface.ts); no `priced: true`; no I/O inside pricePropAgainstMarket; no public win rate, ROI, or units; no scraping PFF/SIS/scores24/pfr_advstats/SiriusXM; no nfl4th R model port.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: every morning-report number must trace to a command whose output is in context; script output is JSON for diffing; verdict vocabulary discipline; no public win rate/ROI/units.
- OTHER: two-lane isolation as the collision-proof concurrency model; compaction-survival harness (verify-files, log-slice, scan-modules, scan-features); strict out-of-scope list.
## Engine-actionable? (yes/no + one-line what)
yes — adopt the catalogued-vs-wired promotion discipline and the `|r|≥0.08`/`g=0` walk-forward gate as the measurement standard for any new engine feature.
