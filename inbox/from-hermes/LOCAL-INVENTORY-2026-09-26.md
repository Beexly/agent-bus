# LOCAL INVENTORY — 2026-09-26

- **From:** Hermes (builder agent)
- **To:** Garrett / Motif
- **Date:** 2026-09-26
- **Re:** TASK-local-inventory-2026-09-26 — push every local worktree and scratch artifact into the cloud
- **Branch:** `hermes/wip-local-inventory-2026-09-26` (from `agent-bus` `origin/main` @ `9d59cf3`)

Nothing was deleted. Six branches pushed across two repos, plus four more
commits on branches created earlier this session. No secrets, tokens or env
values appear in this manifest or in any commit it references.

---

## 1. Summary

| | |
|---|---|
| Repos on this host | 8 checkouts, 12 worktrees total |
| Branches pushed this session | **6 new** (`hermes/wip-*`), **4 updated** |
| Uncommitted work committed | 5 worktrees, 5 commits |
| Scratch recovered from outside any repo | 2 trees, ~2.6MB, 4 commits |
| Still unpushed | **1** — `/var/minis` working tree, personal scripts, deliberately not committed (see §5) |

---

## 2. Worktrees

### Beexly/Sports

| Path | Branch | Pushed commit | Clean? |
|---|---|---|---|
| `/tmp/wte1` | `hermes/e1-movement` | `4f5006503` → `hermes/wip-e1-movement-2026-09-26` | yes |
| `/tmp/sports` | `agent/ethandojo-handoff-v2-2026-09-25` | `2c6af8d2` → `hermes/wip-ethandojo-benchmark-film-2026-09-26` | yes |
| `/root/beexly-sports` | `B83e12f` | `db4b1899` → `hermes/wip-beexly-sports-local-2026-09-26` | yes |
| `/var/minis` | `wire/port-contract` | `f0b2c36e1` → `hermes/wip-wire-port-contract-2026-09-26` | no — see §5 |
| `/tmp/gsx` | `hermes/fix-trust-gate-surname` | already on remote @ `a3cc77e4f`; nothing local to push | yes |
| `/tmp/wt915` | detached @ `a3cc77e4f` | equals `origin/hermes/fix-trust-gate-surname` exactly | yes |
| `/tmp/wt918` | detached @ `9f37af2ff` | equals `origin/hermes/port-docscleanup-rest` exactly | yes |
| `/tmp/wtmain` | detached @ `d667351f9` | equals `origin/main` exactly | yes |
| `/tmp/wtinv` | `hermes/wip-kb-inventory-2026-09-26` | `570dd0279` (created this session) | yes |
| `/tmp/sports2` | `main` @ `aac2a78` | local `main` is a *stale ancestor* of remote `main` @ `d667351f9`; nothing to push | yes |
| `/tmp/Sports` | broken (no HEAD, 290MB `.git`, no worktree files) | n/a — see §5 | n/a |

**What was committed, per worktree:**

- **`/tmp/wte1` — the E1 movement build.** `movement.py` (1,164 lines),
  `test_movement.py` (756 lines), and 366 lines wiring `POST /predict/movement`
  into the FastAPI app with a `MODEL_CARDS` entry. Commit message records the
  contract decisions the module pins by test: no `probability` field (a missing
  finite probability is `malformed_response` in `remote-model-client.ts` and
  drops the model from consensus — that exclusion is correct until the
  calibration gate passes, and the endpoint is deliberately not consensus
  eligible); `vx = s·cos(dir)`, `vy = s·sin(dir)` because BDB repo1 swaps
  sin/cos; flip applied to **raw coordinates** with features recomputed, the
  documented failure that cratered a public leaderboard 0.589 → 3.674. Licence
  boundary stated: BDB 2026 is CC BY-NC 4.0, methodology only, never commercial
  training. Weights are seeded per request, not a trained checkpoint — the
  geometry and gates are real, the accuracy is not yet.

- **`/tmp/sports` — ethandojo residue.** `evaluateEthandojoBenchmark()` plus four
  film modules with tests (`film-splitter`, `highlight-detector`,
  `coverage-analyzer`, index barrel). Noted in the message: the benchmark test
  asserts the shape *honestly* — on a 2-week synthetic sample the model beats a
  coin flip but does **not** match the posted reference. The gate is meant to be
  able to fail.

- **`/root/beexly-sports` — scraper tooling.** `batch_sports_scraper.py`,
  `scripts/scraper_lib.py`, `scripts/sites_001_100.txt` (265 lines, batch 001 =
  sites 101-200). Research tooling, nothing imports it.

- **`/var/minis` — `wire/port-contract`.** The single commit `f0b2c36e1` (adopt
  frontier signal catalog, verifier loader, engine doctrine) was 1 ahead / 17
  behind the remote branch, so it was pushed by SHA to a new branch. A plain
  push would have been rejected as non-fast-forward.

### Beexly/agent-bus

| Path | Branch | Pushed commit | Clean? |
|---|---|---|---|
| `/tmp/agent-bus` | `main` (local, **unrelated history**) | `679ca7c8` → `hermes/wip-agent-bus-local-clone-2026-09-26` | yes |
| `/tmp/businv` | `hermes/wip-local-inventory-2026-09-26` | `0091f4d` (this manifest) | yes |

**`/tmp/agent-bus` is the important caveat.** The local `main` has **no merge
base** with `origin/main` — `git merge-base main origin/main` returns empty, and
local is 55 commits of 2026-09-12 work that remote does not contain, while remote
is 56 commits of newer handoffs that local does not contain. Unrelated
histories. It was therefore **not** force-pushed onto `main`; it went to its own
branch. Anyone reconciling these two needs to treat it as a rebase or a
file-level merge, not a fast-forward.

Committed there: `bin/bus.mjs` (26KB) + `bin/README.md` (MCP server and CLI over
one code path, claim-as-mutex via git push rejection), the sports-lane section in
`PROTOCOL.md`, the 2026-09-14/15/18 board entries in `STATUS.md` and `INDEX.md`,
9 previously-untracked OpenCode batch proofs, the deletion of
`TASK-002-props-production-pipeline.md` (dropped from scope 2026-09-12, file
never removed), and a `.gitignore`.

### Beexly/autonomous-revenue-engine

| Path | Branch | Pushed commit | Clean? |
|---|---|---|---|
| `/tmp/autonomous-revenue-engine` | `notes/grok-bot-galaxy` | `41c55f4` — already on remote, identical | yes |

Nothing to do. The 2026-09-23 Grok Bot Galaxy extraction package was pushed in
that session and the working tree is clean.

---

## 3. Scratch recovered from outside any repo

Swept `/tmp`, `/root`, and `/var/minis/{workspace,attachments,shared}` for files
newer than 48h, excluding `.git`, `node_modules`, caches, venvs, `__pycache__`
and `site-packages`. 60,352 candidate files; 413 outside any repo; the rest were
either inside a checkout or in the excluded directories.

### Committed

**`docs/research/2026-09-25-analytics-kb/`** (Sports,
`hermes/wip-kb-inventory-2026-09-26`, 3 commits, ~2.0MB)

- 13 recovered documents from `/tmp`: the `kb-*` digests (lessons master, gap
  analysis, NGS, props, benchmark extras, data-sources master, learnings, and a
  three-part metric catalog) and 4 raw inventories keyed to line offsets into
  the 2026-09-25 `AGENTS.md`.
- The 13,710-line / 1.4MB master consolidation, which supersedes the fragments
  and is now the documented entry point. Its two extra sections are the reason
  it was worth pushing on its own: **what was deliberately left out and why**,
  and an **OPEN ITEMS — do not use or guess** list naming the specific figures
  that must not be used until verified (a Josh Allen 55.3% CPOE conflict between
  a graphic transcription and the post text; several posts truncated behind X's
  "Show more"; a "highest sack" vs "highest sack rate" wording flag).
- A README stating the scope directive was *no filtering, no relevance
  judgements* — this is raw inventory, not conclusions — that the `[Lnnn]`
  anchors point into an `AGENTS.md` that has since moved and must be
  re-resolved, and that `inventory-sources.txt` was **0 bytes** in the original.
  It is listed as empty rather than reconstructed, so the gap is visible instead
  of quietly filled. Nothing here has been checked against a second source.

**`docs/research/2026-09-25-papers-extracts/`** (Sports, same branch)

Six pdf-to-text extracts (~78k words) from `/tmp/papers` for 2606.18512,
2603.03613, 2505.23703, 2504.08747, 2603.25901, 2604.01491. The ported *code* is
on `main`; the source text it was derived from was saved nowhere, so a claim
could not be checked against its paper. README records which six have a module
on `main` (checked by grepping for the arXiv id) and flags **2606.18512** and
**2603.25901** as having no port found. Also flagged: these are lossy
conversions, badly mangled in 2606.18512 where the author block is interleaved
with the body — check the arXiv HTML before quoting.

**`tools/host-harness/`** (agent-bus, `hermes/wip-local-inventory-2026-09-26`,
2 commits, 636KB)

`/tmp/vlog`, `/tmp/tsc` and `/tmp/logic` — the only way to get real evidence
out of this host, and one `rm` from gone:

- `vlog/` runs the repo's **real** vitest files under plain node (a ~200-line
  `describe`/`it`/`expect` shim plus per-file esbuild `--bundle
  --external:vitest`). Chosen over a hand-written harness because two earlier
  hand-written harnesses produced three false failures from my own wrong
  expectations — running the real tests is strictly better evidence.
- `tsc/` scoped tsconfig files (`files: [...]` + `@sports/*` path mapping). A
  scoped file list works where a full `createProgram` does not. The paths still
  point at the old `/tmp/wt918` worktree and were **left that way on purpose**,
  so nobody mistakes an unreproducible edit for a working config.
- `logic/` transpile-and-run checks against real ported logic, for verifying
  fail-closed conformal behaviour where vitest cannot run.
- `vlog/repo/` the bounded fixture tree that makes the guardrail script's
  silent death *provable* — the script resolves its vocab off its own path via
  `REPO_ROOT_STATIC`, not cwd, so the fixture has to be shaped correctly.
- `attempts-failed/` the three vitest workarounds that are walls, written down
  so nobody re-derives them.

The README leads with the two tool failures and, more usefully, the trap they
set: **`tsc` on this host exits 0 with no output when it is killed.** Empty
output means *killed*, not *clean*. Same for the guardrails full-repo walk. Run a
positive control before believing any clean result here.

### Listed, not committed

| Path | Size | Why not |
|---|---|---|
| `/tmp/tsc/`, `/tmp/tsprobe/`, `/tmp/mini/`, `/tmp/mini2/`, `/tmp/zscratch/` | 23–59MB each | `node_modules` sandboxes. The scripts in them are preserved under `tools/host-harness/`. |
| `/tmp/node-compile-cache/` | 36MB | V8 compile cache. Regenerable, worthless. |
| `/tmp/tmp.cBniBO`, `tmp.bPlgjh`, `tmp.HGcCom`, `tmp.mOPNFb`, `tmp.pcpBOM` | ~350KB each | Throwaway guardrail fixtures. The canonical copy is `tools/host-harness/vlog/repo/`. |
| `/tmp/verifier-nflverse-{KBMDlN,KfddGN,CDDfGO}` | 8KB, 8KB, 0 | Verifier fixture output: two CSVs (136B, 204B) and three manifests. Too small to be worth a commit; regenerate by running the harness. |
| `/tmp/xfp-research/` | 664KB | **Already fully in the cloud.** All 18 files verified present on `origin/hermes/port-xfp-research`. |
| `/tmp/handoffs/RESCUE-2026-09-26-{1..6}-*.md` | 40KB | **Already in the cloud.** All 6 verified byte-identical to `origin/main:inbox/from-hermes/`. |
| `/tmp/qc.md` | 4.9KB | Already upstream as `outbox/from-motif/2026-09-26-motif-reply-rescue-qc.md`, byte-identical. |
| `/tmp/handoff-ethandojo-v2.md` | 13KB | Already upstream as `inbox/from-motif/handoff-ethandojo-nfl-builds-v2-fullspec-2026-09-25.md`, byte-identical. |
| `/tmp/handoff.md` | 20KB | Local copy of the E1–E3 spec, but an **older revision** than upstream. Upstream `inbox/from-motif/handoff-engine-movement-video-builds-v1-fullspec-2026-09-26.md` is 221 lines with the "Decisions (locked 2026-09-26 — Garrett delegated, Motif decided)" section added. The local copy lacks those decisions. Pushing it would have *lost* content; not pushed. |
| `/tmp/mine-AGENTS.md` | 534KB | Verified zero content difference from `origin/main:AGENTS.md`. The `diff` that suggested a difference was a false read. |
| `/tmp/{papers-commit,rest-commit,verifier-commit,xfp-commit,factors-fix-commit,trust-gate-commit}.md`, `verifier-pr.md`, `pr884body.md`, `tcvbody.md` | 2–6KB each | Commit-message and PR-body drafts. Every one of these commits is already pushed; the drafts are the source text of commit messages that exist in the cloud. |
| `/tmp/{a_ddc,dxfp,ddc,dtcv,arxiv2607,datadog,a_dxfp}.txt`, `d_*.txt` | small | Git diff / job-log scratch from the 09-26 rescue work. The conclusions are in the pushed commits and handoffs. |
| `/root/*.html`, `methodology_clean.txt`, `methodology_structured.json` | ~2.4MB | Scraped pages dated 2026-09-18, outside the 48h window. |

---

## 4. Branches pushed this session

**Beexly/Sports** (5)

```
hermes/wip-e1-movement-2026-09-26            4f5006503
hermes/wip-ethandojo-benchmark-film-2026-09-26  2c6af8d24
hermes/wip-beexly-sports-local-2026-09-26    db4b18993
hermes/wip-kb-inventory-2026-09-26           570dd0279
hermes/wip-wire-port-contract-2026-09-26     f0b2c36e1
```

**Beexly/agent-bus** (2)

```
hermes/wip-agent-bus-local-clone-2026-09-26  679ca7c81
hermes/wip-local-inventory-2026-09-26        0091f4d   (this manifest)
```

Also confirmed already on the remote and byte-identical, no action needed:
`hermes/fix-trust-gate-surname` (`a3cc77e4f`), `hermes/port-docscleanup-rest`
(`9f37af2ff`), `notes/grok-bot-galaxy` (`41c55f4`).

---

## 5. Not pushed, and why

1. **`/tmp/agent-bus` local `main` was not reconciled with `origin/main`.**
   Unrelated histories, no merge base. Forcing it would have destroyed 56
   commits of newer handoffs. It is preserved intact on its own branch. **This
   needs a human decision** — see §2.

2. **`/tmp/Sports` is a broken clone** — 290MB of `.git`, no worktree files, no
   resolvable `HEAD`, `git status` fails with "your current branch appears to be
   broken". Nothing to preserve; the work in it was already pushed via `/tmp/gsx`
   and `/tmp/sports`. Not deleted, per instruction. Worth reclaiming the 290MB.

3. **`/var/minis` working tree, 41 untracked entries** — `memory/`, `skills/`,
   `shared/`, `offloads/` plus ~35 loose personal automation scripts
   (`smart_home.sh`, `send_sms.sh`, `workout_tracker.sh`, `scraper.py`, …).
   **Deliberately not committed.** These are Minis app runtime directories and
   personal shell scripts, not Sports source. Pushing them into
   `Beexly/Sports` would be wrong, and the app manages those paths itself. Listed
   here so the decision is visible rather than silent. If any of it is worth
   keeping, it needs a home repo of its own.

4. **`/tmp/sports2` local `main`** (`aac2a78`) is a stale ancestor of remote
   `main` (`d667351f9`). Behind, not ahead. Nothing to push.

5. **The `Test, type-check, lint, Prisma` job is still red repo-wide** — 348
   typecheck errors, byte-identical to `main`'s baseline, 0 new. Pre-existing
   `@sports/prediction-engine` / `ingestion-pipeline` debt, predating all of
   this. Not in any rescue PR's lane; it should be its own ticket. Noted here so
   the red job is not mistaken for damage from today's pushes.

---

## 6. One thing to know before trusting any local check on this host

`tsc` and the guardrails full-repo walk both **exit 0 with no output when they
die** here — heap cap ~587MB, `--jitless`, no JIT. Empty output means *killed*,
not *clean*. Every claim in the commits above that says "verified" was either
confirmed from a CI job log on a real runner or from a run with a positive
control. If you re-run any of it locally, run the control first.

Full detail: `tools/host-harness/README.md` on the agent-bus branch above.
