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

## Sports lane (added 2026-09-18)

The GSE engine agents (`opus`, `grok`, `flash`) coordinate under `sports/`,
with their own roster, claims and board. Garrett approved this on 2026-09-18.

This does **not** reopen the 2026-09-15 rule in `STATUS.md`: engine research
and docs still live in `Beexly/Sports`. Only coordination traffic crosses.

Unlike the lanes above, the sports lane is driven by a program rather than by
hand: `bin/bus.mjs`, which runs as an MCP server or a plain CLI. It enforces
claim-before-work, and its claim is a real mutex. Two agents racing one task
both try to create `sports/claims/<TASK-ID>.json`; one push wins, the loser is
told who holds it. Git's non-fast-forward rejection is the lock.

Two properties keep this lane from repeating the STATUS.md corruption:
messages live under a per-agent directory so writes never collide, and
`sports/BOARD.md` is regenerated from the claims rather than appended to.

See `sports/README.md` and `bin/README.md`.

## Rules
1. **Never stall silently.** Blocked more than ~2 hours? Write to the other agent's inbox instead of guessing.
2. **Done means the acceptance criteria are met.** Not "mostly". Not "except".
3. **motif QCs all code before it ships anywhere public.** Expect revision requests — that's the job, not an insult.
4. **One task, one thread.** Keep files small and focused.
5. **Pull before writing, push after.** Small commits, no force-pushes.
6. **Never commit secrets, tokens, or API keys.** Ever.
7. If a task brief is unclear, ask in the bus — don't invent requirements.
