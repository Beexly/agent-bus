# ops/archive/leverage/CREDITS_STACK.md
## What it is (1-2 sentences)
Short ops playbook for maximizing free/paid program leverage (cloud credits, free tiers, startup programs) across 9 providers for the GSE stack, with an activation order and an explicit refuse list; founder/ops activates credentials while the agent keeps code path-ready.
## Key metrics/methods (formulas where given, else "not specified")
- Not specified — no formulas, thresholds, or quantities beyond program names. Notable structural items: Vercel runs "gamma + 11 crons"; Anthropic/Claude API is "internal tools only; never customer pick generator" (gated); The Odds API (paid, founder residual Phase C) is "enrichment only — not spine" after the gamma free path.
## Data sources named
- Providers: Neon (Free/scale Postgres → SoR Prisma via `DATABASE_URL`), Upstash Redis (free tier → multi-instance online store, later, optional), Vercel (Pro/Hobby crons → `/api/cron/*` + `CRON_SECRET`, "gamma + 11 crons"), Stripe (live keys → FREE/PRO/ELITE entitlements, session tier on `/values`), Anthropic/Claude (API + credits programs), Google Cloud (free trial/credits → batch OCR eval DARK only), AWS/Azure (startup credits → future workers, "not required for honesty OS"), Cloudflare (free DNS/CDN → galaxysportsedge.com edge), The Odds API (paid → enrichment only).
## Findings (numbers and facts, not vibes)
- 9 providers listed with GSE use and status: Neon, Upstash Redis, Vercel, Stripe, Anthropic/Claude, Google Cloud, AWS/Azure, Cloudflare, The Odds API.
- Activation order (one sitting): (1) Neon → DATABASE_URL + DIRECT_URL; (2) Vercel env: CRON_SECRET, NEXTAUTH_*, Stripe, Neon; (3) Stripe live prices → reconcile-entitlements; (4) CLOSING_ARCHIVE_PATH (writable) for gamma durability; (5) Upstash only when multi-instance memory proven insufficient.
- Refuse list: never claim "credits activated" without env proof; never put Odds API on the critical path after the gamma free path.
- Vercel: "gamma + 11 crons."
- Anthropic/Claude is gated to internal tools only — explicitly never the customer pick generator (doctrinal separation of LLM use from pick generation).
- Google Cloud free trial/credits earmarked for "batch OCR eval DARK only."
- The Odds API posture: paid data is enrichment only, not the spine; the gamma free path comes first (free-data-first doctrine).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: Infra/ops standing record — the free-data-first doctrine ("enrichment only — not spine" for The Odds API, "not required for honesty OS" for AWS/Azure workers) constrains the tracking lane: engine data spine must remain the free gamma path, so any intake design for tracking/watch tables should not assume paid feeds on the critical path.
- OTHER: "Claude internal tools only; never customer pick generator" is a doctrine statement relevant to the trust-target intake program — trust content must not imply LLM-generated picks; numeric-grounding and evidence-gating rules are consistent with this elsewhere in the corpus.
- OTHER: The refuse list ("claiming 'credits activated' without env proof") is an evidence-discipline rule of the same family as the engine's no-fabricated-stats rules; serves calibration/tracking audit culture.
## Engine-actionable? (yes/no + one-line what)
No — pure ops/credits bookkeeping; no model or prediction parameters.
