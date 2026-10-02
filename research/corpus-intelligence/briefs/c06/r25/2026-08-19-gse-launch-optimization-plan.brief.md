# ops/edge/2026-08-19-gse-launch-optimization-plan.md
## What it is (1-2 sentences)
A 2026-08-19 read-only pre-launch audit (verified against HEAD `39c1cb90` and live anonymous fetches) whose headline is that production was 112 commits stale and three surfaces served premium content to anonymous visitors; it ranks a 12-item ship list (~11–14 focused hours), permanently retires three false audit findings, lists a never-do "do not do" set, and closes with a strategic note that verifiable honesty is a tie-breaker, not a demand generator.

## Key metrics/methods (formulas where given, else "not specified")
No prediction formulas; the file's numbers are operational and model-statistical:
- Staleness: deployed sha b71f7e28569c9a263389c64362ca85d88482f5c8 vs HEAD — `git rev-list --count b71f7e28..HEAD` = 112 commits.
- Live anonymous /intelligence/engines returned full player-model tables verbatim (row 1: `Jared Goff | DET | 97 | 88 | +0.29 | 0.20 | 1.55 | In-line`).
- Daily-slate counts at /picks: "Games Today 155 · Total Picks 253 · Premium Picks 61" vs "115 picks published for this date" (open picks across dates vs the date-bound claim).
- Holdout Brier 0.2556 sits above base-rate uncertainty 0.2499 → rule: never publish a win rate, ROI, hit rate, or beat-close rate.
- Free tier: `dailyPickLimit = 2` (packages/types/src/index.ts:180); free-teaser split `confidence >= 70` (constants.ts:28).
- Calibration: snapshot ECE 0.0699 disagrees with post-sweep 0.0044 (INFERENCE: six missed `40 */6 * * *` runs left calibrationEligibility.generatedAt ~39h stale).
- `analytics/events.ts:89-96` inert → every funnel decision is labeled inference, none rests on a conversion number.

## Data sources named
None — all evidence from repo source at HEAD plus anonymous live-site fetches.

## Findings (numbers and facts, not vibes)
- Three anonymous premium leaks: /board exposed market/selection + rankingP (not confidence — the file corrects the overclaim); /intelligence/engines showed full analytics tables; /observatory showed confidence/premium picks without entitlement checks. Highest-value fix: redeploy main (1–2h), no gate change.
- 12 ship items ranked by (revenue or trust impact)/solo hours: free teaser delivers 2 not 1 (truncate after filter); fix /faq "Every pick, free" falsehood in JSON-LD; risk disclosure on /pricing; checkout UUID bug; date-bound daily-slate; delete /clv profit clause; tier-branch post-checkout banner; billing/cancel for lapsed payers (PAST_DUE resolves to FREE after 7-day grace, losing the cancel path — gate on stripeCustomerId); Edge Index renders /100 with caption; remove unsourced sharp/public-split framing (factor class BS-023 bans "sharp money"/"smart money" claims without a sourced factor).
- Permanently retired false findings: receipt minting had NOT silently stopped (/api/proof/receipts filters to settled picks by design); /verify demo is NOT a dead end (free card already links a working receipt); 405 on GET for a POST-only route is correct behavior.
- Do-not-do list (never): universal "every pick sealed" copy (process-sport.ts:846-853 skips mint when entryOdds===0, making it false); publish win rate/ROI; re-select free teaser as "best pick"; allow_promotion_codes (bypasses promo state machine); auto-fire checkout from URL params; widen CLIENT_INTENT_ID_RE; free per-pick settlement emails; settle a count on a gate-darkened surface; snap lines without recording source book + price; edit sealed guardrail/CI paths.
- Strategic: honesty positioning has a higher internal-consistency bar than tout positioning — one screenshot of inconsistency destroys it; the strongest pitch is WHY_PAY_FOR_HONESTY_LEAD ("A subscription does not buy a promise about results. It buys access to the reasoning behind each refusal…").
- Revenue view: $14.99/mo honesty pitch is a hard sell vs free Twitter models; Fantasy at $4.99 (concrete deliverable) is nearer-term revenue.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the do-not-do list is a permanent claim doctrine (no win-rate publishing, no universal receipt claims, Edge Index /100 caption not % win probability, BS-023 factor-sourcing rule); the consistency-bar argument is core brand intelligence.
- OTHER: entitlements/redeploys/ops.

## Engine-actionable? (yes/no + one-line what)
yes — import the do-not-do list into engine claim doctrine and audit any public surface for anonymous premium leaks (market/selection redaction).
