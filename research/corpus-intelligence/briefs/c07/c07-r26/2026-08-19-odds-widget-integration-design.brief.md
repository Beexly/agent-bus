# ops/edge/2026-08-19-odds-widget-integration-design.md
## What it is (1-2 sentences)
Design-only (no app code changed) integration plan for The Odds API affiliate widget — a vendor-hosted, vendor-branded embed carrying the site's affiliate link — routed through the repo's `RevenueSurface`/`RevenuePartner`/`RevenueOffer` partner system with full high-risk sportsbook compliance gating.

## Key metrics/methods (formulas where given, else "not specified")
- Compliance guard mechanics: disclosure text must contain one of `sponsor|affiliate|commission|paid` (case-insensitive); `responsibleGamingText` minimum **12 chars** trimmed; `minimumAge >= 21`; state eligibility **fail-closed** (unknown/empty state → offer blocked); CSP `script-src` currently allow-lists only `'self' 'unsafe-inline' 'unsafe-eval' https://www.clarity.ms https://scripts.clarity.ms https://js.stripe.com` — no Odds API host.
- Proposed new `RevenueSurface` value: `"odds_widget"` (9 existing surfaces: media_kit, partners_page, newsletter, youtube, short_form, podcast, blog, api_docs, internal_only).
- Hard dependency: sealed `scripts/guardrails/partner-offer-compliance-scan.mjs` `VALID_SURFACES` must add `"odds_widget"` or every case naming it fails `SURFACE_NOT_ALLOWED`.

## Data sources named
- `the-odds-api.com/widget/` (live vendor docs — **not fetched**; explicitly unverified); vendor's public GitHub org (`github.com/the-odds-api`) holds only 4 repos (samples-nodejs, samples-python, samples-php, apps-script) — no widget code, ruled out as a shortcut.
- Repo-local: `apps/web/lib/revenue/*` (partner-types, offer-eligibility, responsible-gaming-policy, disclosure-policy), sealed guards `partner-offer-compliance-scan.mjs` and `affiliate-structural-separation.mjs`, `source-rights-registry.ts` (existing approved_api data relationship with The Odds API).

## Findings (numbers and facts, not vibes)
- `THE_ODDS_WIDGET_KEY` is a **new, second secret**, distinct from `THE_ODDS_API_KEY` (raw feed backing the engine); widget is a revenue placement, not a data source — must never be wired into the prediction engine's import graph (existing sealed import-graph guard enforces this both directions).
- Classification decision: widget is `category: "sportsbook"`, **not** `"sports_data"` — classifying as sports_data would bypass the high-risk bundle (`isHighRiskOffer` on `["sportsbook","dfs"]`, terms URL, responsible-gaming text, 21+ policy, state lists). Real `termsUrl`, `eligibleStates`, `restrictedStates` depend on which bookmaker the key activates — founder/legal input, unconfirmed.
- Placement recommendation: picks-page footer (`apps/web/app/picks/page.tsx` below pick grid at lines 525-535, above `<Footer />`), dedicated `/odds` page as v1.1; dashboard sidebar rejected for v1. Widget must never render inside a `PickCard` or the picks grid, must carry its own bordered card + adjacent disclosure, must be labeled e.g. "Live odds from [bookmaker] ... not a Galaxy Sports Edge prediction," and must not share pick-grade iconography/colors.
- Two candidate widget mechanics (a: publishable client-side config key; b: server-fetched config) — **unconfirmed**, needs live vendor docs check; CSP origin unconfirmed; whether the pasted key is rotate-on-leak or publishable is unconfirmed.
- **8 founder-review items** before shipping (bookmaker identity, state lists, user-state signal source, partner/offer approval flip, vendor script host + mechanism, sealed-guard surface edit, legal review of copy, placement decision); 7 safe-to-build-without-review items (enum edits, server-only env resolver, inert partner/offer scaffolds, placeholder widget behind eligibility check, tests) estimated ~half day.
- Adjacent gap surfaced: nothing in `apps/web/lib/revenue/` records post-click conversion (signup/deposit) — S2S postback tracking flagged as a separate future design (webhook, HMAC verification, idempotency).
- Open product risk: without a `userState` source (geolocation or profile state), the fail-closed rule blocks the widget for **all anonymous traffic** — founder scope decision.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Structural + visual separation of bookmaker odds from model confidence ("not a Galaxy Sports Edge prediction") — **TRUST-SIGNAL**
- Affiliate revenue placement mechanics (surfaces, postback gap, S2S attribution) — **OTHER**

## Engine-actionable? (yes/no + one-line what)
No — affiliate/compliance integration design; contains no prediction math or factor research (the engine-separation rule is product doctrine, already enforced).
