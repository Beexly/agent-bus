# docs/data-sources/research/2026-09-28/neon-backend-overview-2026-09-28.md
## What it is (1-2 sentences)
A 2026-09-28 evaluation of Neon's backend-as-code platform (one `neon.ts` declaring six capabilities, `neon deploy` provisioning them) read from the official docs orientation page, assessing which of the six capabilities GSE should adopt beyond the Postgres predictions/signals DB it already uses.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. The six capabilities named: Postgres (on by default), Object Storage (S3-compatible), Functions (long-running serverless compute), AI Gateway (one credential → many LLM providers), managed Auth (Better Auth), Data API (PostgREST-compatible HTTPS). Branching forks the whole backend copy-on-write; per-branch policy (e.g. auto-expire non-default branches after 7d) lives in `neon.ts`.
## Data sources named
Neon's backend overview docs page (https://neon.com/docs/get-started/backend-overview, read 2026-09-28). Internal: Neon Postgres (predictions/signals DB); `docs/engine/research/2026-09-28/hf-leverage-round2/laneB-cost-arbitrage.md`.
## Findings (numbers and facts, not vibes)
- Only Postgres is currently wired; nothing else from the page is used.
- Five UNTESTED items queued per doctrine: (1) branch-per-feature DB isolation with 7-day TTL for agent DB work — "cheapest, most reversible," explicitly recommended (fleet keeps testing writers/migrations against prod-adjacent state; cites the signal-ledger 0-row/504 incidents); (2) AI Gateway — needs real cost comparison vs OpenRouter/NVIDIA NIM, tied to the inference-arbitrage lane; (3) Data API — evaluate vs current API routes for the ops read surface; (4) Object Storage — candidate home for backtest artifacts/research corpus snapshots; (5) Functions — interesting given the signal-ledger writer's 504/deadline history, but moving compute off Vercel is a big call.
- Auth is not relevant (single-operator system).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Backend infrastructure evaluation — branch-isolation for safe agent DB testing, inference-cost arbitrage, read-surface simplification. No QB/coaching/line/scheme content.
## Engine-actionable? (yes/no + one-line what)
Yes — adopt the throwaway-branch convention (non-default branches with 7d TTL) for agent DB testing, which became a standing rule; queue a real AI Gateway vs OpenRouter/NVIDIA NIM cost comparison for the inference-arbitrage lane.
