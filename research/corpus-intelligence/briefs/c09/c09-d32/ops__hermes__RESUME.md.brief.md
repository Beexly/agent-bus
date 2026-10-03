# ops/hermes/RESUME.md
## What it is (1-2 sentences)
Runbook for relaunching a Hermes builder agent mid-run: how to locate the live ledger, sync with the other builder agents over the agent-bus git channel, recover interrupted (CLAIMED) tasks from a clean tree, and continue the claim-do-verify-release loop until cut off.
## Key metrics/methods (formulas where given, else "not specified")
not specified (procedural only)
## Data sources named
Live ledger `docs/ops/AGENT_LEDGER.md`; frozen (do-not-resume) files `handoff/LEDGER.md` and `docs/ops/hermes/CONTINUOUS.md`; bus clone `../agent-bus` with `bin/bus.mjs` (`poll`, `claim <ROW-ID> --note`, `release <ROW-ID> --outcome done --evidence`); repo `AGENTS.md` laws; build queues `docs/ops/hermes/BUILD-QUEUE-*.md`; runner log.
## Findings (numbers and facts, not vibes)
- If `docs/ops/AGENT_LEDGER.md` does not exist: stop, write BLOCKED in the runner log ("live ledger missing, fetch origin/main"), wait for relaunch — do not recreate `handoff/LEDGER.md` or invent a backlog from `CONTINUOUS.md`.
- Bus protocol: claim the ledger row on the bus BEFORE starting work (a claim that lands after the work is a receipt, not a lock); `granted:false` means another agent holds it, take the next row; agent id must come from `GSE_AGENT_ID` env — never guess an id.
- Interrupted-state recovery: for any CLAIMED row, run its test; if green and committed, mark DONE; otherwise `git checkout -- <task files>` and re-claim/redo; `git status --short` must be clean every session start.
- Verify block per task: `npm run typecheck`, `npm run lint`, plus the task's own test file green; two attempts then BLOCKED with the exact error.
- KNOWN BLOCKED TASK: P1-15 (isotonic-pava) — prior run concluded the failure is a REAL CODE DEFECT, not test drift; do not "fix" by editing the test or patching the algorithm; mark BLOCKED with the defect description in the evidence column.
- A missing bus never stops the loop — write one line saying so and continue with the ledger; with no unclaimed rows, open the latest `docs/ops/hermes/BUILD-QUEUE-*.md` (never fall back to `CONTINUOUS.md` or `handoff/LEDGER.md`).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (builder-agent ops): ledger/bus claim protocol and resume procedure for the Hermes fleet.
## Engine-actionable? (yes/no + one-line what)
No — agent-ops tooling only; no engine methodology or sports content.
