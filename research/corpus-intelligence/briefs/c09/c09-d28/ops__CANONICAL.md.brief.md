# ops/CANONICAL.md
## What it is (1-2 sentences)
Single source-of-truth ops page declaring code paths (not docs) as the authority, listing the authoritative code layers, the thin live ops docs, the archive policy, and an explicit "lies to refuse" list.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — governance doc.
## Data sources named
- Code SoT table: Operator OS (`apps/web/app/cockpit/*`), JARVIS (`apps/web/lib/jarvis/*`), Integrity (`apps/web/lib/platform/integrity-ledger.ts`), Free data + settle (`apps/web/lib/data-sources/*`, `free-spine-health` cron), AI dispatch (`apps/web/lib/ai-control-plane/*`), Agents (draft-only, externalActions: NONE).
## Findings (numbers and facts, not vibes)
- Law layer: LIVE_BOARD off, oddsApiRequired=false, refuse-default, CPA blocked.
- Explicit lies to refuse: Vite/app-builder decks as operator OS; "agents run the company autonomously" for external actions; LiteLLM as deployed product before proxy exists; public ROI/guaranteed wins; Neon PROVEN without `scripts/ops/prove-neon.mjs` green.
- Archive policy: `docs/ops/archive/**` is archaeology only; `handoff/**` is a session museum.
- Founder human budget (max): Neon dual URLs (gse-postgres); CRON_SECRET + redeploy; smoke + optional free AI keys — then watch Production /cockpit only.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: ops governance — establishes what constitutes a trustworthy GSE surface (ties to the public/private doctrine).
## Engine-actionable? (yes/no + one-line what)
No — governance only; enforce by routing any "is this live/PROVEN?" question through the code paths and integrity ledger.
