# engine/research/2026-09-28/consolidation-neon-vercel-vs-paid-services-2026-09-28.md
## What it is (1-2 sentences)
A 2026-09-28 consolidation audit arguing the real savings are services Neon Launch and Vercel Pro already include: it ranks 8 consolidation findings (C1–C8) by dollars killed, lists honest gaps with no native replacement, and names consolidation traps to avoid.

## Key metrics/methods (formulas where given, else "not specified")
- Service map of 14 items: Vercel Pro $20/mo + usage (23 crons); Neon Postgres SoT (tier unconfirmed); OpenRouter with 5.5% Stripe deposit fee; NVIDIA NIM free tier flaky; Hugging Face PRO (Beexly, prepaid); The Odds API $30/mo 20K credits; Resend free tier 3k/mo; Sentry DSN-optional; next-auth v5 beta self-hosted $0; Cloudflare Web Analytics + Clarity $0; Upstash Redis NOT provisioned ($0).
- C1 (biggest structural win): Vercel AI Gateway — zero markup over provider list, per-key budgets at 4 scopes (team/project/key/user, CLI-managed), 360+ models, OpenAI-compatible; Neon AI Gateway alternative (Databricks FM passthrough, no markup, prepaid credits 12-mo expiry). Caveat: Vercel assumes providers train unless disallow-prompt-training/ZDR set explicitly.
- C6: Neon Object Storage $0.023/GB-mo, no per-operation fees, branches with the DB.
- C7: Neon Functions $0.10/$0.025 per Capacity-Hour + $0.60/M invocations on Launch.
- Traps: Vercel Web Analytics on Pro has NO included events ($0.03/1K); Neon read replicas bill their own CU-hours; Neon Scale is 2.1× the compute rate for unneeded compliance features.
- Suggested order: (1) founder taps — Neon plan tier + burn, SENTRY_DSN tier; (2) C1 pilot one budget-capped Vercel AI Gateway key vs OpenRouter for one month; (3) HF PRO usage-vs-price audit; (4) resolve Sentry; (5) C6 backtest artifacts; (6) C7 Neon Functions for signals writer; (7) C5 Lakebase Search when embeddings land; C4/C8 only on measured pain.

## Data sources named
- Repo evidence: package.json, code search, docs/ops/CREDENTIALS_CHECKLIST.md (Beexly/Sports @ motif/orchestration-v4-2026-09-28).

## Findings (numbers and facts, not vibes)
- Four LLM routers in use (OpenRouter / NIM / direct keys / 2 unevaluated gateways) with zero per-key budgets — the fleet's biggest structural waste; C1 is the top-dollar finding.
- Honest gaps with NO native replacement: email (Resend), payments (Stripe fees are the cost of getting paid), odds data (The Odds API $30/mo — data not infra), push (self-hosted web-push, $0).
- Vercel Web Analytics on Pro charges $0.03/1K events with NO included events — switching to it from free Cloudflare/Clarity would CREATE spend.
- Upstash Redis deliberately held at $0 ("path-ready until set"); if a shared cache is needed, honest options are paid Upstash or a Postgres-backed cache table.
- Duplicate-spend watchlist: 4 LLM routers → C1; Sentry + Vercel observability overlap → C3 (check DSN/tier first); Cloudflare + Clarity both free — leave alone.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — pure cost/infrastructure consolidation audit; no football intelligence, no QB/coaching/OL content.

## Engine-actionable? (yes/no + one-line what)
**No** — infrastructure cost consolidation audit; the only engine-adjacent items (Lakebase Search for future vector DB, C1 gateway per-key budgets for the fleet) are cost/governance ops, not football-intelligence signals.
