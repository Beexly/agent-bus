# ops/archive/root-museum/AGENT_HANDOFF.md
## What it is (1-2 sentences)
The archived agent handoff for finishing GSE to 100%: track-by-track work for a local coding agent (deploy wiring, Stripe + affiliate, Brand-Safety v2) with a verification gate, one batched owner question, and a done-list.
## Key metrics/methods (formulas where given, else "not specified")
- Verification gate after every code change: typecheck + lint + vitest + build + em-dash scan + trust-gate; baseline 5,620 web tests, build 191 pages.
## Data sources named
- LAUNCH_LEDGER.md §B (silent-launch env block), §E (Stripe); Stripe IDs in apps/web/lib/stripe.ts; gate vars in packages/prediction-engine/src/platform-config.ts; operator registry apps/web/lib/cockpit/operator-registry.ts.
## Findings (numbers and facts, not vibes)
- Track 0: canonical work lived on Beexly/Sports@claude/blissful-hamilton-d7edx1 (prior audits ran against a behind local clone C:\Users\Garrett\Sports).
- Track A: provision Neon (DATABASE_URL pooled, DIRECT_URL direct), Upstash Redis, Google OAuth, paid Odds API ("the existing key is likely expired; renew it"), Anthropic key; silent launch = marketing surface only, no public picks/stats until Track C of ledger.
- Track B: Stripe LIVE via `npm run stripe:seed` capturing four per-interval price IDs (PRO/ELITE × monthly/annual), webhook at /api/webhooks/stripe; affiliate requires EIN + program signup (owner), then operator-registry flip KNOWN_NOT_PARTNERED → APPROVED_PARTNER with real licensedStates (no fabrication).
- Track C: BS-004 shipped ("AI picks" ban, precise to `pick(s)`, lock-in test); BS-010…014/020/050…053 blocked on unbuilt Evidence Engine; BS-023 sharp-money ban NOT safe as blanket regex (17+ legitimate places: glossary, tout-services explainer, jarvis capability-registry sourced signal) — implement as context-aware rule or leave; BS-002/030…035 largely already enforced by readiness gates; target ≥60 brand-safety cases.
- Track D owner questions: canonical deploy source; BS-021 Kelly (engine sizing banned vs user-driven educational calculator allowed); BS-024 CLV gate (platform CLV gated at 200 settled picks vs personal bet tracker out of scope); Evidence Engine build-now vs defer.
- Done list: 7 R4 surface waves, ingestion data-loss guards, settled-pick freeze, calibration crash-safety, Stripe per-interval fix + webhook hygiene, rate limits, affiliate compliance rail /go/[slug], accessibility pass, BS-004.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: CLV platform gate at 200 settled picks, /go/[slug] affiliate compliance gate, brand-safety rule set (BS-004 "AI picks" ban, context-aware BS-023), no-fabricated-licensedStates.
- OTHER: deploy/secret/credential provisioning, Stripe wiring, Evidence Engine dependency map.
## Engine-actionable? (yes/no + one-line what)
Partial — the CLV-gate-at-200-settled-picks and context-aware phrase-ban lessons are reusable; the rest is archived deploy ops.
