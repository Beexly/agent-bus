# ops/MASTER_PLAN_INDEX.md
## What it is (1-2 sentences)
The canonical ops truth document for the Sports repo: declares the code sources of truth (Operator OS at `/cockpit`, JARVIS, integrity ledger, free data/settle, AI control plane, draft-only agents, legal defaults) and states that anything conflicting with it is discarded.
## Key metrics/methods (formulas where given, else "not specified")
Not specified (no formulas). Legal-default states named: LIVE_BOARD off, oddsApiRequired=false, refuse-default, CPA blocked; agents draft-only with `externalActions: NONE` and no public auto-publish.
## Data sources named
Code SoT paths: Production `/cockpit` (`apps/web/app/cockpit/*`), JARVIS (`apps/web/lib/jarvis/*`, `apps/web/lib/cockpit/jarvis*.ts`), integrity ledger (`apps/web/lib/platform/integrity-ledger.ts`), free data + settle (`apps/web/lib/data-sources/*`, `docs/FREE_FIRST_DATA.md`), AI dispatch (`apps/web/lib/ai-control-plane/*`, LiteLLM optional), thin ops docs (CURRENT_STATE, OPEN_LEDGER, CRON_MATRIX, SMOKE, CREDENTIALS_CHECKLIST, etc.), `docs/ops/archive/**` (leverage lists, dated audits), `handoff/**` (session museum).
## Findings (numbers and facts, not vibes)
- Canonical conflict-resolution rule: "If anything conflicts with this page + the code paths below, discard the other document."
- Explicit lies to refuse: Vite/app-builder decks as operator OS; "agents run the company autonomously" for external actions; LiteLLM as deployed product before the proxy exists; public ROI / guaranteed wins; "Neon PROVEN" without `scripts/ops/prove-neon.mjs` green.
- Founder human budget (max): 1) Neon dual URLs (gse-postgres), 2) CRON_SECRET + redeploy, 3) smoke + optional free AI keys — then watch Production `/cockpit` only.
- Docs thin-ops root list: CURRENT_STATE, OPEN_LEDGER, CRON_MATRIX, SMOKE, CREDENTIALS_CHECKLIST, FOUNDER_ONLY_CHECKLIST, FOUNDER_HANDOFF_MESSAGE, CLAUDE_COWORK_PROMPT_P0, JARVIS_COCKPIT_AUTO_RUN, BRUTAL_AUDIT_2026-07-29, FREE_FIRST_DATA, plus go-live runbooks (GO_LIVE_RUNBOOK, GATE_OPENING_RUNBOOK, STRIPE_GO_LIVE_CHECKLIST, PHASE_05B_REVEAL_PROTOCOL, INDEPENDENCE_GATES).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] Conflict-resolution canon + explicit "lies to refuse" list (no public ROI/guaranteed-wins claims, no faked Neon PROVEN) are trust infrastructure for the prediction product.
- [OTHER] Ops-only; no QB/coaching/OL/scheme content.
## Engine-actionable? (no — governance/index doc, no model inputs)
