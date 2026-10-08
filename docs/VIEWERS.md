# Viewers

Motif is the lead. A viewer does not accept, publish, or spend.

## Fleet board (this repo)

Read-only. Columns map to `bus/<project>/{inbox,claimed,done,failed,quarantine}`.

```
python scripts/fleet_view.py
```

Then open `viewer/index.html`. Header line is `Lead: Motif`. No claim button. No accept button. No spend button.

Live token streams stay in Orca Agent Activity View. Memory UI stays on the Motif VM at `127.0.0.1:9999` after Hindsight is started there.

## Hermes Studio

https://github.com/JPeetz/Hermes-Studio (MIT, React/TanStack).

Optional Hermes viewer only. It talks to the Hermes gateway at `HERMES_API_URL=http://127.0.0.1:8642` and stores crews in `.runtime/`. That store is not the bus.

It cannot see `Beexly/agent-bus` unless a human is looking at both. Do not point it at accept.py. `reports_to: motif`. It may not accept, publish, or lead.

Do not install it as the fleet board. The fleet board is `scripts/fleet_view.py`.

## Not the brain

kubernetes-retired/dashboard is an archived Kubernetes UI. nuxt-ui-templates/dashboard is a visual shell; layout only, not installed. openclaw-mission-control and edict are OpenClaw boards. hive has a Queen. DeepCode and openai-agents-python are other runtimes. None of them are installed here.
