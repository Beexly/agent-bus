# docs/ops/LAUNCH_EXECUTION_EVIDENCE_2026-09-12.md
## What it is (1-2 sentences)
Launch audit evidence from 2026-09-12: L0 release identity check (local vs deployed SHA), an L5 benefit-to-route verification matrix of every pricing claim against real sources, and the L7/L8/L9 session audit with test counts. Notes a serious process violation (all 6 session commits used `--no-verify`).
## Key metrics/methods (formulas where given, else "not specified")
not specified — reported measurements only (test pass counts, calibration cohort numbers), no formulas.
## Data sources named
- Production endpoint (`generatedAt=2026-09-12T15:04:44.345Z`) — endpoint-reported cohort, not independently recomputed
- Local git (`5ddafd37e826793cbc78dd623e8a68b7765e3af6`, branch `hermes/c298-inplay-parity-2026-09-12`)
## Findings (numbers and facts, not vibes)
- SHAs DIFFER: local `5ddafd37e826793cbc78dd623e8a68b7765e3af6` vs deployed `abceb40e1f22aa6d78f5e6cae47206daba3778de`; deployed object not present locally — release identity NOT confirmed.
- Endpoint-reported cohort: eligibility GREEN n=407, Brier 0.2103, raw ECE 0.0549, debiased 0.038688; gates statsPublic=true, canExposePublicPicks=true, canExposePerformanceStats=true, calibrationPublished=true.
- Benefit-to-route matrix: free calculators/tools PASS pending L13; Academy PASS; methodology/calibration PASS; Draft Assistant + Best Ball on real cleared data PASS (claim attaches to paid tier); Pro board/confidence/factor trail PASS (server-side gates); Elite alerts/tracker/staking NOT VERIFIED (needs paid-path walkthrough); Studio is a free internal-style tool with ILLUSTRATIVE_NOTE (fidelity limit, not a paid promise); legacy deep-links PASS.
- 3-day money-back window (pricing x3): NO in-repo enforcement found; charge.refunded wired to revocation only — FOUNDER OPS QUESTION, do not rewrite the promise unilaterally.
- Age 21+ gate (`assertAtLeast21`) intact at checkout route lines 39/49/106; removal blocked pending founder authority.
- Suites: entitlements-family 89/89; L7 47/47; L8 35/35 (event-driven repair BLOCKED — no gsis→DK crosswalk, lagged weekly report, no saved-lineup store); L9 39/39; audit extras 60/60; `npm run lint` (max-warnings=0) exit 0; build passed on retry after one transient Windows failure.
- Known limitation: dk-import derives missing projections/ownership from salary (modeled assumptions); repair treats finite derived projections as known — imported pools need explicit user-assumption labeling before repair output counts as forecast.
- Guardrails 24/26: both fails in other sessions' files (trust-gate "lock" hits in uncommitted AGENTS.md appendix; em-dash hits in L2-committed the-beat files), left untouched.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: money-back promise with no in-repo enforcement (founder ops gap), age-21 gate integrity, calibration cohort numbers as the public-proof basis.
- OTHER: launch-ops audit, no football signal.
## Engine-actionable? (yes/no + one-line what)
No — launch audit evidence; the only model-relevant fact (cohort n=407, Brier 0.2103, debiased ECE 0.0387) is a snapshot of published calibration state, not a tuning input.
