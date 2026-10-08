# Orca harness manifest

`agents/orca-harness.yaml` is an allowlist, not a launch script. Orca can show 22 CLIs and still have one legal claimer.

## How a claim is allowed

1. Motif writes the inbox task. Muse is Motif. Muse `reports_to: garrett` and `may_claim: false`.
2. The runner yaml must `reports_to: motif`, except Motif.
3. `TASK.project` must be in that row's `projects_allowed`.
4. `may_claim` must be true. Unknown billing or an empty project list stays false.
5. `bus/FREEZE` blocks every new claim.
6. Hermes is the only true row. Projects: `signal-origin`, `framefit`. Not `gse`. Not `desk`. Hermes cannot accept.

Installed is not connected. Connected means a claim on the bus and a result Motif can accept.

## Why the other 21 stay dark

Most are launched with `--yolo`, `--dangerously-skip-permissions`, or `bypassPermissions`. That is a capability hole. A dark row can still be opened by hand in Orca. It must not `git mv` an inbox item.

## Together models are not seats

Three LoRA jobs exist on Together (inventory 2026-10-08). No dedicated endpoint is running. They are not harness rows until a project owner is named and an endpoint is a Garrett decision. See `docs/EXTERNAL-PLAYERS.md`.
