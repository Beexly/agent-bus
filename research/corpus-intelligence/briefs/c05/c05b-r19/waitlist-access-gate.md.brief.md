# docs/gse/waitlist-access-gate.md
## What it is (1-2 sentences)
A design doc for a zero-cost, app-level Basic Auth gate on the GSE `/waitlist` pages (Next.js middleware), standing in for Vercel Deployment Protection on the custom domain.

## Key metrics/methods (formulas where given, else "not specified")
- Why app-level: custom domain `galaxysportsedge.com` bypasses Vercel Deployment Protection (only applies to `.vercel.app` preview aliases); enabling it on a custom domain requires the paid **Vercel Pro plan**.
- Cost: $0 — no add-ons, no third parties.
- Mechanism: middleware `apps/web/middleware.ts` intercepts `/waitlist` and `/waitlist/*` before render; calls `checkWaitlistGate()` from `apps/web/lib/waitlist/access-gate.ts`; if `GSE_WAITLIST_GATE_ENABLED !== "true"` → pass-through (current production behavior); else checks `Authorization: Basic <base64>` header vs `GSE_WAITLIST_BASIC_USER` / `GSE_WAITLIST_BASIC_PASSWORD` (server-side env only).
- Denied requests: HTTP 401 with `WWW-Authenticate: Basic realm="GSE Waitlist", charset="UTF-8"` and `Cache-Control: no-store`; browsers pop native dialog, bots stop at 401.
- NOT protected: all other routes; `/api/waitlist` is excluded (middleware matcher excludes `/api/`) — API-level protection is a separate step if needed.
- Env vars (all server-side, no `NEXT_PUBLIC_`): `GSE_WAITLIST_GATE_ENABLED` (="true" to activate), `GSE_WAITLIST_BASIC_USER`, `GSE_WAITLIST_BASIC_PASSWORD`; set in Vercel Project Settings, then redeploy.
- Rollback: Option A — set `GSE_WAITLIST_GATE_ENABLED=false` and redeploy (instant, no code change); Option B — `git revert <commit-sha>` + push. No DB/schema side effects.
- Tests: `apps/web/__tests__/waitlist-access-gate.test.ts` — 15 tests covering gate, no-claim, credential isolation.
- Gates preserved: `BACKTEST_TRUTH.beatsNaive === false` untouched; `robots: { index: false, follow: false }` untouched; no Stripe/pricing; no schema migration; no DB write; no performance claims; no `NEXT_PUBLIC_` secrets; no paid Vercel features.
- Local test: `.env.local` vars + `npm run dev`, or curl `curl -I http://localhost:3000/waitlist` (401) vs `curl -I -u localuser:localpass http://localhost:3000/waitlist` (200).

## Data sources named
- None (infrastructure/security doc; no data sources).

## Findings (numbers and facts, not vibes)
- $0 alternative to Vercel Pro for protecting the waitlist route.
- 15 tests cover the gate, no-claim compliance, and credential isolation.
- Kill switch is env-var-only (no code change needed to disable).
- `/api/waitlist` deliberately left outside the gate.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: backtest-truth invariant (`beatsNaive === false`) and noindex preserved through the security change — trust posture survives the infra change.
- OTHER: web security/infrastructure (Basic Auth middleware, env-var config, rollback plan).

## Engine-actionable? (yes/no + one-line what)
No — web infrastructure doc; note only that `/api/waitlist` is unprotected if engine services ever call it.
