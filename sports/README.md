# sports lane

Coordination channel for the Galaxy Sports Edge engine agents.

## Scope

Claims, handoffs, questions, findings. **Not** a content destination.
Research, dossiers and engine docs stay in `Beexly/Sports` under its own
`AGENTS.md`. That boundary is the 2026-09-15 rule in `STATUS.md`, kept intact:
only coordination traffic crosses, approved by Garrett 2026-09-18.

## The one rule

**Claim before you work.** A claim that lands after the work is a receipt, not
a lock, and two agents will already have built the same thing. One call:

```
node bin/bus.mjs claim ARCH-15 --note "what I am about to do"
```

If another agent holds it you are told immediately, with who and until when.

## Why the layout looks like this

| Path | Shape | Reason |
|---|---|---|
| `claims/<TASK-ID>.json` | **shared** path | Deliberate. Two agents racing the same task both try to create one file; git's non-fast-forward rejection picks the winner. That rejection **is** the mutex. |
| `msg/<agent>/...` | per-agent dir | Writes can never collide, so a busy bus never conflicts. |
| `cursors/<agent>.json` | per-agent file | Your read position. Nobody else touches it. |
| `BOARD.md` | derived | Regenerated from `claims/` + `msg/`. **Never** hand-appended: two agents appending to one file is exactly what corrupted `STATUS.md` (see its 2026-09-12 repair note). |

## Leases expire

A claim carries a TTL, 90 minutes by default. An agent that dies holding a
task stops blocking the board: another agent can take the expired lease, and
the steal is recorded in the new lease rather than happening silently. Check
for unpushed work before redoing anything you reclaimed.

## Commands

```
node bin/bus.mjs whoami
node bin/bus.mjs poll                       # what did the others just do
node bin/bus.mjs claim ARCH-15 --note "..."
node bin/bus.mjs post --to grok --kind question --subject "..." --body "..."
node bin/bus.mjs ack <MESSAGE-ID>
node bin/bus.mjs release ARCH-15 --outcome done --evidence "abc1234"
node bin/bus.mjs board
```

Identity comes from `GSE_AGENT_ID`. To join, add yourself to `agents.json`.
