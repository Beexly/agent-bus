# docs/ops/cursor-cloud-agents-reachability.md
## What it is (1-2 sentences)
A 2026-09-29 correction memo documenting that Cursor cloud agents were blocked by an account on-demand spend limit — not by an API read/write asymmetry as originally (and wrongly) concluded — with the measured API surface preserved as raw observation and a "check billing state before inferring capability limits from 404s" lesson.
## Key metrics/methods (formulas where given, else "not specified")
- Account state: hit the $200 on-demand spend limit set the previous week; runs blocked since; usage resets 2026-10-23; founder instruction: maximize current subscription, spend nothing further — limit stays, Cursor dark until reset; do not raise the limit.
- Measured API surface (raw observations, still accurate as stated):
  - `GET /v1/models` → 200, 43 models
  - `GET /v1/repositories` → 200, `Beexly/Sports` present
  - `Agent.create({...}).send(prompt)` → returned real `agentId` (`bc-…`) and `runId` (`run-…`) for all six agents
  - `Agent.get({agentId})` → throws `t.startsWith is not a function` (SDK 1.0.32 bug)
  - `agent.getStatus()` → does not exist on the handle
  - `GET /v1/agents` → 200, empty array
  - `GET /v1/agents/{id}`, `/status`, `/v1/runs/{runId}` → 404
- The 404s were a symptom of agents that never ran (queued/never started), not a missing read surface — `send()` returning an id is consistent with "queued and never started."
- Name-squat warning (independently verified): `cursor-agent@1.0.3` on npm is a name-squat — installs, reports version, ships `bin: null` with no executable; removed. Real integration: `@cursor/sdk`; API host `https://api2.cursor.sh`.
- Credential hygiene: founder-pasted key treated as burned; never in argv/env/shell; stored only at `%LOCALAPPDATA%\hermes\.secrets\cursor_api_key` outside every git repo; helpers redact before printing; revoke regardless.
- No formulas; no sports metrics.
## Data sources named
Cursor API (api2.cursor.sh) — account state reported by Cursor's own notice.
## Findings (numbers and facts, not vibes)
- $200 on-demand spend limit; reset date 2026-10-23; no payment needed to resume.
- Six agents returned ids from `send()` but never executed — no work was lost because there was never any work; nothing consumed from the included plan.
- The original wrong inference was committed to both a ledger row and a doctrine doc before correction; both were corrected the same day; original reasoning preserved as auditable.
- Lesson recorded: never infer a capability limitation from a 404 when billing/quota state is also plausible — check account state first. Same error class previously published a wrong research measurement (name-matching rule counted conventions as content).
- npm name-squat `cursor-agent@1.0.3` verified and removed.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — the standing lesson ("check account state before inferring capability limits from 404s") is a general verification doctrine for any automated measurement pipeline, including engine data-feed health checks.
- OTHER — account/billing state of the Cursor lane; vendor API surface notes.
## Engine-actionable? (yes/no + one-line what)
No for the engine; the verification lesson (verify billing/quota state before diagnosing a data-feed outage) is worth adding to feed-monitoring runbooks as a standing check, but that is ops runbook content, not model content.
