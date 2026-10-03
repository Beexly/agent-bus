# docs/data-sources/research/2026-09-28/neon-backend-overview-2026-09-28.md
## What it is (1-2 sentences)
Evaluation (2026-09-28, from neon.com backend-overview docs) of Neon's backend-as-code platform: one `neon.ts` declares six capabilities (`neon deploy` provisions them and injects env vars), with per-capability adoption recommendations — all queued UNTESTED per doctrine.

## Key metrics/methods (formulas where given, else "not specified")
- Six capabilities: **Postgres** (on by default), **Object Storage** (S3-compatible), **Functions** (long-running serverless compute next to the DB), **AI Gateway** (one credential → many LLM providers), **managed Auth** (Better Auth), **Data API** (PostgREST-compatible HTTPS for Postgres).
- Branching forks the whole backend copy-on-write; per-branch policy (e.g. auto-expire non-default branches after 7d) lives in `neon.ts`.
- Note: frontier models need access requests (AI Gateway).

## Data sources named
- Source page: https://neon.com/docs/get-started/backend-overview (read 2026-09-28).
- Already used: Neon Postgres — the predictions/signals DB (the "on by default" capability). Nothing else wired.
- Tied lane: inference-arbitrage lane `docs/engine/research/2026-09-28/hf-leverage-round2/laneB-cost-arbitrage.md` (cost comparison vs OpenRouter, NVIDIA NIM).

## Findings (numbers and facts, not vibes)
- 5 worth-evaluating items, none adopted: (1) Branch-per-feature DB isolation with TTL — `neon checkout <name> --create` + `ttl: "7d"`; recommended as cheapest, most reversible (each agent gets a throwaway copy-on-write DB); (2) AI Gateway — one credential for many providers, model-swap by changing a string; needs real cost comparison first; (3) Data API — PostgREST-compatible HTTPS endpoint; could simplify read surfaces (ops read surface for the signals table); (4) Object Storage — S3-compatible, branches with the DB so files and rows stay in sync; candidate for backtest artifacts/research corpus snapshots; (5) Functions — long-running compute next to the DB (Hono app, `pg` pool reused across requests); signal-ledger writer's 504/deadline history makes this interesting but moving compute off Vercel is a big call — evaluate only.
- Auth not relevant: single-operator system, no multi-user app.
- Known incident context: signal-ledger 0-row/504 incidents cited as motivation for throwaway-branch DB testing.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [OTHER] Branch-per-feature DB isolation with 7d TTL as the convention for agent DB work — prevents testing against prod-adjacent state (signal-ledger 504 history).
- [OTHER] AI Gateway cost-arbitrage evaluation vs OpenRouter/NVIDIA NIM — inference cost lane.
- [OTHER] Object Storage as candidate home for backtest artifacts / research corpus snapshots.

## Engine-actionable? (yes/no + one-line what)
No — infrastructure evaluation (all UNTESTED/queued); no sports metrics or modeling methods, only engineering ops.
