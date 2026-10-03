# operator-playbook.md
## What it is (1-2 sentences)
The founder's daily operating manual for the first 30 days post-launch: a 20-min/day routine (morning + evening), a Sunday 60-min weekly routine, the 30-day feature-gate progression, a break/fix runbook, the four metrics that matter, and the four things never to do.
## Key metrics/methods (formulas where given, else "not specified")
- 30-day gate progression: Day 7 (~30 settled picks) → `DERIVED_MODEL_HISTORY_ENABLED=true`; Day 14 → `PUBLIC_PICKS_ENABLED=true` + upgrade Odds API to $30 tier; Day 21 (~70 settled picks) → `PUBLIC_BLOG_ENABLED=true`; Day 28 (≥100 settled picks) → `PERFORMANCE_STATS_ENABLED=true` + Stripe Live mode; Day 30 → paywall live, first charges.
- Settled-pick gate threshold = 100 picks (`SELECT COUNT(*) FROM picks WHERE settled_at IS NOT NULL`).
- Four metrics that matter: settled picks count, calibration error, sign-ups/day, first real $ from Stripe Live.
- Infra numbers: Neon free tier 0.5 GB; Odds API 500/mo free → 20k/mo at $30.
## Data sources named
The Odds API (credits watched daily); Neon Postgres; Vercel deploy logs; Stripe (test → live); social post templates in `social/launch-day.md`.
## Findings (numbers and facts, not vibes)
- Daily routine: `npm run smoke:prod`, Vercel log glance, Postgres usage, Odds API credits, one social post (round-robin X→IG→Threads→FB); evening: `/api/picks` check for ≥1 pick generated, settled-pick counter query, 2-min engagement scan.
- Runbook failure causes: Neon free tier auto-pauses after 5 min inactivity (fix: redeploy or $19/mo Launch tier); 401 from Odds API = revoked key or exhausted quota; NextAuth "Configuration" is almost always `NEXTAUTH_URL` mismatch.
- Doctrine: "engagement is a settled-picks problem" — no earned right to be loud before the gates; a 60% confidence pick is supposed to lose 40% of the time (variance by design).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: the 30-day gate progression (30/70/100 settled-pick thresholds) and calibration-error-as-core-metric discipline directly govern how engine outputs get publicly trusted.
## Engine-actionable? (yes/no + one-line what)
Yes — the 100-settled-pick public-performance gate and calibration-error tracking should remain the engine's publication readiness bar.
