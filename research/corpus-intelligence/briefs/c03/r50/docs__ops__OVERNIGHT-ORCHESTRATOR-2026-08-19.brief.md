# docs/ops/OVERNIGHT-ORCHESTRATOR-2026-08-19.md
## What it is (1-2 sentences)
The wake-sweep runbook for the 2026-08-19 overnight orchestrator (Claude session `claude/cron-config-placement-verify-qsl19t`): ordered steps for ingesting Hermes fleet results, checking stalled workflows, integrating finished work, watching PR #435 CI, and dispatching next work while the founder sleeps.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — process runbook, no formulas.
## Data sources named
Hermes intake branches (`hermes/l7-clv-forensics`, `hermes/l9-clv-slices`, `hermes/l10-provider-probes`); workflow transcript dirs `wf_5c954243-d28`, `wf_034d9ad2-8db`, `wf_e533eeaf-8d2`; PR #435; C-13 merge, C-14 CLV forensics verdict, C-15 CLV lock-price provenance fix, C-16 research.
## Findings (numbers and facts, not vibes)
- Stalled-run detection: if a workflow's `journal.jsonl` has not grown across two consecutive sweeps, TaskStop it and relaunch via `Workflow({resumeFromRunId})` — completed prefix returns from cache, only the stalled agent re-runs. [OTHER]
- Integration outputs expected: `docs/ops/edge/2026-08-19-clv-forensics-verdict.md` (code-path verdict + Hermes L-7/L-9 data), `docs/ops/edge/2026-08-19-research-frontier-dossier.md`, `docs/ops/edge/2026-08-19-eprocess-novelty-audit.md` (compare `forecast-skill-eprocess.ts` + roadmap preregistration vs dossier literature for defensible novelty/paper outline). [TRUST-SIGNAL]
- Token hygiene (founder-flagged): unsubscribed from #435 PR activity at 08:03 UTC — each push fired 4–5 bot-echo wakes (Vercel building/ready, CodeRabbit draft-skip, duplicate owner-held CI), each a full billed turn for zero new information; hourly backstop sweep covers CI directly; batch ledger/doc edits into ONE commit+push since every push triggered the wake cascade. [OTHER]
- Hard rules: push only to the designated branch; never edit sealed paths; never weaken guards/tests; never flip production gates; never message the founder unless something needs his hands; ledger is single-writer tonight. [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
The CLV-forensics verdict and e-process novelty-audit artifacts are TRUST-SIGNAL-adjacent (CLV lock-price provenance is the honest measurement spine; the e-process protocol is a candidate publication differentiator). Everything else is OTHER (orchestration process).
## Engine-actionable? (yes/no + one-line what)
No — pure orchestration process; the CLV verdict and novelty-audit docs it names would be the actionable artifacts, not this runbook.
