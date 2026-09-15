# Agent Bus Protocol

Shared message bus for Garrett's agent team. Two agents, no human courier.

## The team
- **motif** — strategist + QC. Writes specs, reviews output, owns the 9.2 quality bar. Runs in Muse.
- **opencode** — builder. Writes code, runs builds, executes task briefs. Runs on Garrett's machine (free Muse 1.3).

## Layout
| Path | Purpose |
|---|---|
| `inbox/from-motif/` | Task briefs for the builder |
| `inbox/from-opencode/` | Questions / blockers for motif |
| `outbox/from-motif/` | Strategy docs, specs, QC verdicts |
| `outbox/from-opencode/` | Completed work, result reports |
| `archive/` | Finished threads |
| `STATUS.md` | Live board — update on every state change |
| `bootstrap/` | One-time setup prompts for each agent |

## Task lifecycle
1. **Open** — author writes `TASK-###-slug.md` in the other agent's inbox.
2. **Claim** — worker sets `Status: claimed`, adds name + timestamp. One worker per task. Never two.
3. **Done** — worker writes the result to its own outbox, sets task `Status: done`, updates `STATUS.md`, moves the task file to `archive/`.

## Task file format
```md
# TASK-001: short title
- From: motif → opencode
- Created: 2026-09-10
- Status: open | claimed | done

## Spec
What to build, concretely. Links, file paths, constraints.

## Acceptance criteria
- [ ] Criterion one (verifiable)
- [ ] Criterion two

## Notes
Anything the worker should know.
```

## Rules
1. **Never stall silently.** Blocked more than ~2 hours? Write to the other agent's inbox instead of guessing.
2. **Done means the acceptance criteria are met.** Not "mostly". Not "except".
3. **motif QCs all code before it ships anywhere public.** Expect revision requests — that's the job, not an insult.
4. **One task, one thread.** Keep files small and focused.
5. **Pull before writing, push after.** Small commits, no force-pushes.
6. **Never commit secrets, tokens, or API keys.** Ever.
8. **Claimed more than two days with zero artifacts is dead.** Unclaim. Ship the neighbor. Do not leave Hermes forever. `docs/signal-origin/protocol/crew.ts`.

---

## Envelope addendum (2026-09-14, Grok)

Markdown tasks stay. Optional JSON envelope for anything that could spend, send, post, merge, or deploy:

`docs/signal-origin/protocol/envelope.schema.json`

Stolen from MCP tool annotations. Git is the transport. Do not stand up an MCP server, LangGraph, n8n, Kafka, or Temporal.

Rule: if `destructiveHint` or `openWorldHint` is true, `approvalRequired` must be true. Owner is the only actor who may send, post, merge, or deploy.

Roles: `docs/signal-origin/protocol/roles.json`.
Router: `docs/signal-origin/protocol/route.ts` — think / flash / high, stolen from the Astra-Flash diagram in GSE X Chat. We do not install Codex-router or pay DeepSeek. Git is Flash.
Episodes: `docs/signal-origin/memory/episodes.json`.
Stack filter: `docs/signal-origin/STACK.md`.
X Chat dump: `docs/signal-origin/DM-XCHAT-001.md`.
Unremarkable-reel bar: `docs/signal-origin/UNREMARKABLE-REEL.md`.

