# docs/ops/MONEY_PATH_LIVE_2026-08-06.md
## What it is (1-2 sentences)
Live money-path state as of 2026-08-06: Stripe webhook/product audit, founding prices with live price IDs, the required Vercel env block, funnel step status, and the ordered highest-leverage revenue moves. Core honesty doctrine: site is sellable under Founding pricing; do not enable performance/public surfaces until calibration + proof bar.
## Key metrics/methods (formulas where given, else "not specified")
not specified — price points and funnel states only, no formulas.
## Data sources named
- Stripe live (account Galaxy Sports Network `acct_1TPE9kQ2wPZMxx60`)
- Ops surface `stripeWebhookHosts` live host probing
## Findings (numbers and facts, not vibes)
- Webhook audit (2026-08-07 autonomous): GSE webhook `https://www.galaxysportsedge.com/api/webhooks/stripe` (`we_1TcXVf…`) enabled with correct checkout/subscription/invoice events; foreign medusa (`lumeralabel.medusajs.app`) already disabled, safe to delete.
- Founding prices: Fantasy $4.99/mo or $49/yr (`price_1TrOEIQ2wPZMxx60sgo6r9K5` / `price_1TrOESQ2wPZMxx603FyIWvOe`); Pro $14.99/mo or $99/yr (`price_1TdsqBQ2wPZMxx6094V2T9cY` / `price_1TdsqCQ2wPZMxx60z4GWzgu9`); Elite $24.99/mo or $179/yr (`price_1TdsqLQ2wPZMxx60eKtNl1cZ` / `price_1TdsqLQ2wPZMxx60XVzOFPxd`).
- Active paid subs: **0** (founder canceled / incomplete only — funnel proven, no paying customers yet).
- Checkout path: Sign in → /pricing → Subscribe → Stripe Checkout (auth required for entitlement binding); webhook stamps entitlements on `checkout.session.completed` / subscription events.
- Funnel: /pricing CTAs live; checkout session creation proven (live sessions exist); paid→dashboard proven once (founder paid then canceled); `/waitlist` page Basic-Auth locked (`GSE_WAITLIST_GATE_ENABLED=true`) blocking public lead capture; `/api/waitlist` POST works (422 validation), not blocked by the page gate.
- Revenue ladder honesty: step FOUNDING; next PROVEN blocked on "Calibration not published"; do NOT enable PERFORMANCE_STATS / LIVE_BOARD until calibration + proof bar; contests public free paper skill OK.
- Highest-leverage moves: confirm six `STRIPE_*_PRICE_ID` env vars in Vercel Production (Fantasy especially — 503 if missing); open waitlist for leads; close one paid seat yourself end-to-end and leave it active; margin via free content lane (`CONTENT_FREE_LANE_ENABLED=true` + Cerebras key) and Claude credits (`CLAUDE_PROVIDER=auto` + cloud maps); do NOT flip LIVE_BOARD / PUBLIC_PICKS / STATS_PUBLIC, rights fork, #258 brand rename, or claim public ROI/locks/guaranteed edge without YES.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: billing/ops state, no football signal.
- TRUST-SIGNAL: revenue-ladder honesty rule (no performance/public surfaces until calibration + proof), no ROI/locks/guaranteed-edge claims — the money doctrine mirrors the engine's calibration gates.
## Engine-actionable? (yes/no + one-line what)
No — billing and funnel state; the actionable calibration bar is set by the engine, not this file.
