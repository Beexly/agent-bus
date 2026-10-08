# Beex agent bus

Motif is the lead. Read [AGENTS.md](AGENTS.md), then [BEEX-AGENT-TEAM.md](BEEX-AGENT-TEAM.md).

The historical board at `STATUS.md` is the live task record. Do not overwrite it. `scripts/status.py` writes `FLEET-STATUS.md` when that board is already present.

Once per clone:

```
sh scripts/install-local.sh
```

That sets `core.hooksPath` to `.githooks` and `core.autocrlf` to false. `.gitattributes` still forces LF on bus payloads.

Orca executes. Hermes plays. Neither leads.
