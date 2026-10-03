# docs/ops/archive/root-museum/CODEX_FINAL_INFRA_HANDOFF.md

## What it is (1-2 sentences)
Final infrastructure handoff document (dated 2026-05-21) for the Galaxy Sports Edge production rollout on the `sports-intelligence-os-phase-9-ci` branch, recording that all code was locally green but production deployment was intentionally paused due to an Anthropic API key failure. It lists verified infrastructure checks, a single remaining blocker, and step-by-step continuation commands for a follow-on agent.

## Key metrics/methods (formulas where given, else "not specified")
- Local test state: `npm run typecheck` passed; brand-safety tests `19 files / 497 tests` passed; full web tests `110 files / 1,342 tests` passed; `git diff --check` passed; `npm run build` passed.
- `deploy:ready` readiness gates (all proven green in the pass): `DATABASE_URL` present; `DIRECT_URL` present; `REDIS_URL` present; Postgres reachable (`SELECT 1 returned`); Redis reachable (`PING -> PONG`); Odds API key valid with **74 sports listed, 20,000 requests remaining**; Stripe secret key valid in test mode; `STRIPE_PRO_PRICE_ID` → **$19.00/month**; `STRIPE_ELITE_PRICE_ID` → **$49.00/month**; `vercel.json` crons present: **3 schedules**; security headers present; bootstrap gate sanity passes.
- Prior production smoke: live with **1 warning** — `/api/health` returned **HTTP 503** before DB/Redis provisioning; latest `deploy:ready` returned **1 failure**: Anthropic API key **HTTP 401**.
- Formulas: not specified.

## Data sources named
- Neon Postgres (provisioned via Vercel integration) — `DATABASE_URL`, `DIRECT_URL` (unpooled).
- Upstash Redis (provisioned via Vercel integration) — `REDIS_URL`.
- The Odds API — paid key; 74 sports listed, 20,000 requests remaining.
- Stripe — test mode; `$19/mo` Pro and `$49/mo` Elite price IDs.

## Findings (numbers and facts, not vibes)
- The pass added `PublicPick.isAuditAvailable` so sample/demo picks no longer show a dead Evidence Audit button, while keeping real published picks eligible for the forensic Evidence Audit Drawer. [TRUST-SIGNAL]
- An Evidence Readiness Matrix was added at `packages/prediction-engine/src/evidence-readiness-matrix.ts`, with tests for factor activation, shadow-mode protection, staleness blocking, trust normalization, and true-EV blocking. [TRUST-SIGNAL, OTHER]
- Fixed `/picks` SSR origin handling so localhost/preview fetches the current host instead of production. [OTHER]
- Source strategy notes recorded in `docs/research/evidence-source-strategy-2026-05-21.md`. [OTHER]
- The only blocker to deploy was the Anthropic key (HTTP 401); the doc instructs creating a fresh key and updating `.env.production.local` + Vercel Production/Preview `ANTHROPIC_API_KEY`, never committing it. [OTHER]
- Explicit gate rule: "Do not enable public performance stats, true EV, Kelly, or public pick claims until canonical data is real and gates prove readiness." [TRUST-SIGNAL]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Evidence Audit Drawer + `isAuditAvailable` gating on real vs demo picks: TRUST-SIGNAL (auditable pick evidence surface; trust-by-construction pattern relevant to the honest-calibration doctrine).
- Evidence Readiness Matrix (shadow-mode protection, staleness blocking, trust normalization, true-EV blocking): TRUST-SIGNAL (calibration-state honesty machinery — shadow/uncalibrated signals must not publish).
- deploy:ready gate convention + "gates prove readiness" rule: OTHER (infra guardrails); TRUST-SIGNAL (no public performance claims without real data).
- Neon/Upstash/Odds API provisioning detail: OTHER (ops; no sports intelligence content).

## Engine-actionable? (yes/no + one-line what)
No — pure infrastructure/deployment status doc; the only engine-relevant takeaway is the standing gate rule that public performance stats, true EV, and Kelly stay disabled until canonical data is real and readiness gates pass, which reinforces the honesty/calibration guardrail architecture.
