# docs/ops/RANKING_SIGNAL_SECOND_PASS.md
## What it is (1-2 sentences)
The 2026-08-09 second pass enforcing the "ranking law" after the MODEL_VERSION v5.2.2 audit: every user-visible and operator surface sorts/displays by rankingP, public docs updated to match code, and the self-correction tripwire restated.
## Key metrics/methods (formulas where given, else "not specified")
Ranking law: display order follows rankingP via shared helper `apps/web/lib/ranking/sort-key.ts` (`rankingSortKey`, `comparePicksByRanking`); fetch-then-rank budgets: board/Cockpit overview 48→top 12, Cockpit brief 80→top 50, matchup preview nested 8→best, admin pending 120→top 60, dashboard today fetch-wide→tier limit. Self-correction tripwire: if selective RES on independent/blend stays < 0.02 after settle sample under v5.2.2 → engine resolution hard-stop (sport models/features), not more maps. Eligibility still conf/100 provisional (documented); ML-only independents (spread/total conf-echo ranking until ATS models).
## Data sources named
None new (factorBreakdown.rankingP).
## Findings (numbers and facts, not vibes)
- `/methodology` Ranking probability: SPEAK/LEAN gate language removed (finite trueProb incl. PASS); v5.2.1 changelog explicit "incl. PASS". [TRUST-SIGNAL]
- Tests: `apps/web/__tests__/ranking-sort-key.test.ts` — 6 cases (incl. demotion); proven-path rows still green (honest pIndependent load). [OTHER]
- Intentionally unchanged: ML-only independents; floors / AUTO_PUBLISH / map apply still OFF; no Prisma `rankingScore` column (optional follow-up: persist `rankingScore Int?` for cheap SQL orderBy). [OTHER]
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- RES<0.02 tripwire → engine resolution hard-stop (not more maps) → SCHEME (calibration-vs-resolution sequencing)
- Ranking-law display ordering and SPEAK/LEAN removal → TRUST-SIGNAL (public honesty)
## Engine-actionable? (yes/no + one-line what)
No — this is a shipped-and-verified change record; the durable value is the standing rule (surfaces sort by rankingP; RES tripwire 0.02 fires sport-model work, not more maps).
