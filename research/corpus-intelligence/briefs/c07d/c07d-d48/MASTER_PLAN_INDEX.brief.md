# ops/MASTER_PLAN_INDEX.md
## What it is (1-2 sentences)
The canonical ops index: "If anything conflicts with this page + the code paths below, discard the other document." It declares the code as the single source of truth for the Operator OS, JARVIS, integrity, data, AI dispatch, agents, and law layers.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified: no metrics, formulas, or numbers in this file. It is a routing/authority document, not a measurement document.

## Data sources named
- None as data sources. Code paths named instead: `apps/web/app/cockpit/*` (Operator OS), `apps/web/lib/jarvis/*` + `apps/web/lib/cockpit/jarvis*.ts` (JARVIS), `apps/web/lib/platform/integrity-ledger.ts` (Integrity), `apps/web/lib/data-sources/*` + `docs/FREE_FIRST_DATA.md` (free data + settle), `apps/web/lib/ai-control-plane/*` (AI dispatch, LiteLLM optional).

## Findings (numbers and facts, not vibes)
- Canon rule: conflicts with this page + listed code paths → discard the other document.
- Code always wins over docs.
- Agents are draft-only: `externalActions: NONE`; no public auto-publish.
- Law: LIVE_BOARD off; `oddsApiRequired=false`; refuse-default; CPA blocked (Certified Public Accountant? — INFERENCE: likely "certified-public-accountant-style claims" blocked, but the file does not expand CPA; UNCERTAIN — flag rather than assume).
- Thin ops docs (live root only): `CURRENT_STATE` · `OPEN_LEDGER` · `CRON_MATRIX` · `SMOKE` · `CREDENTIALS_CHECKLIST` · `FOUNDER_ONLY_CHECKLIST` · `FOUNDER_HANDOFF_MESSAGE` · `CLAUDE_COWORK_PROMPT_P0` · `JARVIS_COCKPIT_AUTO_RUN` · `BRUTAL_AUDIT_2026-07-29` · `FREE_FIRST_DATA` (under docs/) · go-live runbooks (`GO_LIVE_RUNBOOK`, `GATE_OPENING_RUNBOOK`, `STRIPE_GO_LIVE_CHECKLIST`, `PHASE_05B_REVEAL_PROTOCOL`, `INDEPENDENCE_GATES`, etc.).
- Archive: `docs/ops/archive/**` (leverage lists, mega-prompts, dated audits — archaeology only); `handoff/**` (session museum; start at `handoff/00-READ-CANONICAL.md`).
- "Explicit lies to refuse": Vite/app-builder decks as operator OS; "agents run the company autonomously" for external actions; LiteLLM as deployed product before a proxy exists; public ROI / guaranteed wins; Neon PROVEN without `scripts/ops/prove-neon.mjs` green.
- Founder human budget (max): 1) Neon dual URLs (gse-postgres), 2) CRON_SECRET + redeploy, 3) Smoke + optional free AI keys. Then: watch Production `/cockpit` only.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [TRUST-SIGNAL] "Explicit lies to refuse" serves the **trust-target intake** program: public ROI/guaranteed wins and Neon PROVEN claims (without `scripts/ops/prove-neon.mjs` green) are flagged as untrustworthy artifacts — any historical intake from the site era when these appeared must be down-weighted.
- [OTHER] "Agents are draft-only, externalActions: NONE" serves the **tracking lane**: any pick or content attributed to agent auto-publish is false by law — published items required a human action, which matters for provenance of historical picks.
- [OTHER] Code-always-wins + the canonical doc list serves **intake hygiene**: when two docs conflict, this file is the tiebreaker, so intelligence sweeps should prefer code paths over prose for how the platform actually behaved.
- [OTHER] UNCERTAIN: "CPA blocked" — if it means certified-public-accountant-style credentialed claims, it serves the trust-target program; if it means cost-per-acquisition advertising, it serves the revenue lane. File does not expand it.

## Engine-actionable? (yes/no + one-line what)
No — it is an authority/routing index with no model numbers, formulas, or data; useful only as provenance policy for interpreting other docs.

**References named:** `apps/web/app/cockpit/*`, `apps/web/lib/jarvis/*`, `apps/web/lib/cockpit/jarvis*.ts`, `apps/web/lib/platform/integrity-ledger.ts`, `apps/web/lib/data-sources/*`, `docs/FREE_FIRST_DATA.md`, `apps/web/lib/ai-control-plane/*`, `scripts/ops/prove-neon.mjs`, `handoff/00-READ-CANONICAL.md`, and the thin-ops-doc list above.
