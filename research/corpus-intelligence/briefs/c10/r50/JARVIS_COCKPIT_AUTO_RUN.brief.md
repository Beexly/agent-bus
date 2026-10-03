# ops/JARVIS_COCKPIT_AUTO_RUN.md
## What it is (1-2 sentences)
AI-first auto-run spec for the GSE cockpit: law is "minimize founder clicks" — the founder watches `/cockpit`, agents + crons do the running; explicitly forbids inventing a parallel control plane (wire the existing cockpit).
## Key metrics/methods (formulas where given, else "not specified")
Not specified — operating law + inventories, no formulas.
## Data sources named
Free-path data only: Gamma (free quotes via `*/30` cron), nflverse, refuse-default APIs; GSE truth APIs `/api/gse/v1/*`.
## Findings (numbers and facts, not vibes)
- Existing surfaces (do not rebuild): /cockpit, /cockpit/agents, /cockpit/tasks, /cockpit/review, /cockpit/history, /cockpit/calibration, /cockpit/sources, /cockpit/brief, /cockpit/market-twin, /cockpit/api-costs; Jarvis APIs at /api/cockpit/jarvis; 18x /api/cron/* spine. Code SoT registries: `lib/jarvis/capability-registry.ts` (16 capabilities), `lib/jarvis/agent-council.ts` (6 registered cockpit agents), `lib/cockpit/cockpit-operating-map.ts` (24 surfaces), `lib/cockpit/agents.ts` (JARVIS, SARAH, TAL, SCOUT, AVA, BOBBY). Inventory export: docs/ops/GSE_RUNTIME_INVENTORY.json.
- Human input budget (only these need a human, once): Neon DATABASE_URL + DIRECT_URL; CRON_SECRET (re-verify); optional free AI keys; explicit YES later for LIVE_BOARD / publish / #226 / Phase C.
- Agent advance queue without gate flips: keep capability registry honest (status ladder only upgrades with proof); wire free-path market intelligence using Gamma + continuous CLV on MAIN; auto-settlement design using ESPN/public results adapters; stale-ingestion alerts → decision queue; DESIGNED surfaces (Tasks, Moderation, Film Room) implemented as draft queues not public publish; memory surface NOT_WIRED → candidate writes only.
- Forbidden auto-upgrades: ACTIVE status, public picks, affiliate publish, LIVE_BOARD.
- Agent session prompt: operate Beexly/Sports, prefer /cockpit + lib/jarvis + lib/cockpit, no parallel dashboard, no LIVE_BOARD flip, minimize founder input (secrets only), advance DESIGNED/DRAFT_ONLY with free-path data, run gse-verify on code change, regenerate GSE_RUNTIME_INVENTORY.json on registry change.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Continuous CLV already on MAIN cited as the live market-intelligence path — OTHER (ops architecture, no game intelligence).
## Engine-actionable? (yes/no + one-line what)
No — cockpit/agent-ops operating spec, no sports-intelligence content.
