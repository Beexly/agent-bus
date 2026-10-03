# docs/ops/archive/prompts/FOUNDER_COWORK_PROMPT_GO_LIVE_CHROME.md
## What it is (1-2 sentences)
2026-07-09 copy-paste prompt for a browser-driving Claude session to finish GSE production go-live configuration (Vercel env vars, Stripe webhook endpoint, redeploy + verification). Design principle: secrets move dashboard→dashboard in the browser, never typed/read aloud/pasted into chat.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — configuration checklist, no formulas.
## Data sources named
None named.
## Findings (numbers and facts, not vibes)
- Stripe webhook endpoint: `https://www.galaxysportsedge.com/api/webhooks/stripe` (www, NOT apex — apex 307-redirects and Stripe won't follow); exactly 7 events: checkout.session.completed, customer.subscription.created, customer.subscription.updated, customer.subscription.deleted, invoice.payment_succeeded, invoice.payment_failed, invoice.payment_action_required.
- Flag set to be pasted (non-secret): PRICING_PHASE=FOUNDING, PUBLIC_PICKS_ENABLED=true, FORCE_NO_BET_IF_STALE=true, CANONICAL_HISTORY_ENABLED=true, OUTCOME_LEARNING_ENABLED=true, PERFORMANCE_STATS_ENABLED=true; six price IDs (Pro/Elite/Fantasy monthly+annual) and NEXT_PUBLIC_APP_URL=https://www.galaxysportsedge.com; six flags deliberately left unset (DERIVED_MODEL_HISTORY_ENABLED, FEATURED_PICK_PROMOTION_ENABLED, CALIBRATION_ADJUSTMENTS_ENABLED, PUBLIC_BLOG_ENABLED, DEMO_PICKS_ENABLED).
- Verification: /api/health → 200; /picks renders WITHOUT a "SAMPLE DATA" banner; /pricing shows Founding rates; test webhook event should return 200 after redeploy.
- After completion: daily learning loop runs unattended — odds ingest 10:00 UTC, settlement 07:00 UTC, canonical record + calibration evidence accruing daily, gates opening on data thresholds (see GATE_OPENING_RUNBOOK.md).
- Secret-handling rule: if the user pastes a secret into chat, tell them to rotate it immediately.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — go-live ops configuration; launch flags (e.g. FORCE_NO_BET_IF_STALE) are gating posture, not sports intelligence.
## Engine-actionable? (yes/no + one-line what)
No — founder configuration runbook; no modeling content.
