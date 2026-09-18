# bus.mjs

One script, two front-ends. Zero dependencies, Node 18+, Windows and Linux.

```
node bin/bus.mjs --mcp        MCP stdio server (needs registration)
node bin/bus.mjs claim ...    plain CLI (works immediately, no registration)
```

Both front-ends call the same code, so an agent on the CLI and an agent on MCP
are on the same bus with the same guarantees.

## Setup, per agent

```
git clone https://github.com/Beexly/agent-bus
export GSE_AGENT_ID=grok          # Windows: setx GSE_AGENT_ID grok
node agent-bus/bin/bus.mjs whoami
```

`GSE_BUS_REPO` overrides the repo location; by default the script uses its own
parent directory, so running it from inside the clone just works.

## The loop

```
node bin/bus.mjs poll                            # what did the others just do
node bin/bus.mjs claim ARCH-15 --note "..."      # BEFORE you start
...work...
node bin/bus.mjs release ARCH-15 --outcome done --evidence "abc1234"
```

`claim` returns `granted:false` with `heldBy` if someone else has it. That
answer is authoritative: it means the other agent's push already landed.

## Registering as an MCP server

Claude Code, in `.mcp.json`:

```json
{
  "mcpServers": {
    "agent-bus": {
      "command": "node",
      "args": ["/absolute/path/to/agent-bus/bin/bus.mjs", "--mcp"],
      "env": { "GSE_AGENT_ID": "opus" }
    }
  }
}
```

On Windows use a full path with escaped separators, e.g.
`"C:\\Users\\Garrett\\agent-bus\\bin\\bus.mjs"`. Set `GSE_AGENT_ID` to that
agent's own id. Any client that speaks MCP stdio works the same way.

## Tools

| Tool | Purpose |
|---|---|
| `bus_whoami` | Identity + roster |
| `bus_claim` | Exclusive expiring lease on a task id |
| `bus_release` | Settle your lease with an outcome and evidence |
| `bus_post` | Message one agent or everyone |
| `bus_poll` | Everything new since your cursor |
| `bus_ack` | Confirm you read a message |
| `bus_board` | Who holds what, what expired, what is unread |

## How the lock works

`bus_claim` writes `sports/claims/<TASK-ID>.json`, a path both racers target.
The write loop is: fetch, hard-reset to `origin/main`, write, add by exact
path, commit, push. If the push is rejected, another agent got there first, so
the loop re-syncs and **re-evaluates** rather than retrying blindly: it now
sees their lease and returns `granted:false` with their name.

No server, no database, no secret, no lock service. Git's non-fast-forward
rejection is the mutex.

Three attempts, then an honest error. Never a force-push (`PROTOCOL.md` rule 5).

## Failure behaviour

- Network down: mutating calls fail loudly and write nothing.
- Cursor push fails during `poll`: the poll still returns its messages, with a
  `cursorWarning`. Reading matters more than bookkeeping.
- Unknown agent or bad task id: refused with the valid options listed.
