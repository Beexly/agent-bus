# docs/ops/launch/C12-02-BLOCKERS.md
## What it is (1-2 sentences)
A C12-02 launch-blocker closeout (Hermes runtime, branch `hermes/c12-close-the-pass` @ `4e5a58963`, scoring per C12 0.6) recording five blockers as fixed or decided: S1 honesty banner, S2 Elite alert promises, S3 minor age gating, S10 ESPN rights contradiction, #16 terms-page counsel review.
## Key metrics/methods (formulas where given, else "not specified")
not specified (verification was exit-code-based: `npm run typecheck` exit 0 across 24 workspaces; `npm run lint` exit 0 with `--max-warnings=0`; `npx vitest run` 116/116 pass exit 0 across 6 test files; `node scripts/ops/backfill-learning-eligibility.mjs` dry run exit 2, refused because OUTCOME_LEARNING_ENABLED is off).
## Data sources named
Codebase files verified by read: `apps/web/lib/board/state.ts`, `lib/watchlist/channels/push-channel.ts`, `components/push/push-alert-opt-in.tsx`, `apps/web/lib/age-verify/surface.ts`, `apps/web/lib/auth/age-gate.ts`, `apps/web/lib/data-sources/espn-public.ts` + 4 free-adapters, `apps/web/app/terms/page.tsx:15-16`.
## Findings (numbers and facts, not vibes)
- S1: `liveBoardOn` was hardcoded `false` at 4 call sites; landed `liveBoardOn()` reading `LIVE_BOARD` (trimmed, case-insensitive "true"); 8/8 board-classify-state tests green; confidence 93%.
- S2: Elite sold "real-time" alerts but the push dispatch path had no mount (opt-in component mounted nowhere) and email fires on graded settlement only; fixed by correcting FAQ/pricing copy to graded-settle framing and mounting the opt-in on /watchlist (dark until VAPID keys exist); confidence 88%.
- S3: shipped one-click 21+ cookie attestation gate (`gse_age_ok`, 180d, httpOnly, sameSite=lax), always-on, no env flag, covering 16 gated prefixes (/board /picks /performance /today /intelligence /ledger /glass-ledger /kill-ledger /stats /vault /watchlist /pricing /compare /fantasy /contests /live); /age-verify form has no client JS; server-side `assertAtLeast21` already present at checkout; DOB capture deferred as owner decision (requires schema change); confidence 90%.
- S10: ESPN registry says YELLOW/Tier-3 ("do not scrape structured data feeds without a license"); code uses site.api.espn.com public logged-off scores API as fallback; fix = customer-visible disclosure on /data (hidden undocumented JSON API refused for ingestion; public scores API used as fallback with "Scores data via ESPN" attribution; commercial display rights labeled UNVERIFIED pending legal review); confidence 85%; rights status itself marked UNKNOWN.
- #16: "must be reviewed by counsel" text was a code comment only (`terms/page.tsx:15-16`), never rendered; the substantive gate is now structural (PART 4 free-only switch PAID_CHECKOUT_OPEN with server-side 503 on new paid checkouts; counsel sign-off on the paid-opening checklist); confidence 95%/100%.
- Verify block: typecheck, lint, lint:brand all exit 0; 116/116 vitest pass; learning-backfill dry run demonstrably refused.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL — honesty postures landed as launch gates: graded-settle-only alert copy, age-gate attestation, ESPN rights disclosure labeled UNVERIFIED; OTHER — launch-ops verification record.
## Engine-actionable? (yes/no + one-line what)
yes — the ESPN disclosure posture (internal signal until rights verified) and alert-copy honesty rules are standing trust constraints on data sourcing and marketing copy.
