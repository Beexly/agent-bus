# product/ledger-and-loss-room-spec.md
## What it is (1-2 sentences)
Phase 2 product spec for the Public Ledger (/ledger) — the historical record of every settled pick with its publish-time signal snapshot — and the Loss Room (/performance/losses), a sub-archive of losses with authored LossAutopsy records. Both are free and public; no tier gating on the historical record itself.
## Key metrics/methods (formulas where given, else "not specified")
not specified. Ledger table columns: Matchup, Pick (line + side), Pick grade, Edge Index at publish, Confidence at publish, Settled outcome (W/L/Push), Published at, Settled at, Game Room link. /api/ledger: limit default 50, max 200, cursor pagination; filters sport, confidenceBand (e.g. 60-65, 65-70), pickGrade, outcome, date range. Pagination: 50 rows/page. Autopsy headline ≤140 chars. No aggregate win-rate computation anywhere on the page.
## Data sources named
/api/ledger endpoint; LossAutopsy records (headline, whatWeSaw, whatHappened, whatWeLearned, rootCause, lessonTags, isPublic, status); Game Intelligence Room (/room/[gameId]); pre-mortems generated at publish; Galaxy Memory slot; compliance scanner + docs/positioning.md banned vocabulary.
## Findings (numbers and facts, not vibes)
- Trust gates: when PERFORMANCE_STATS_ENABLED=false, the page renders an empty state ("We're building the ledger from canonical signals. Bootstrap-era picks are not surfaced."); bootstrap-era picks never render.
- The page does NOT compute aggregate win rates or claim percentages; users compute their own from filter results.
- Per-row badges: "📋 Autopsy" links to the Loss Room detail; "📝 Pre-mortem" for picks with pre-mortems.
- Loss autopsy detail renders five sections (pick headline, autopsy headline, what we saw, what happened, what we learned) plus a pre-mortem comparison tagging each bullet ✅ called it / ⚪ did not happen / ❌ missed, plus root-cause badge and lesson tags.
- Autopsy voice rules (locked): no "tough loss," no "we'll get 'em next time," specific factor names/events/data; "what we learned" must commit to one of three outcomes — (1) changes factor weight X, (2) variance, (3) known limitation for model version N; no comparisons to other operators.
- Compliance scanner hard-refuses: banned vocab, aggregate win-rate claims, "best book"/"sharpest" claims, competitor comparisons, guarantee language.
- 12 acceptance criteria for Phase 2 green (7 Ledger, 5 Loss Room). Open items: CSV export default yes in Phase 4 per DEC-006; publish-vs-settlement Edge Index delta interesting; losses-without-autopsy show headline + queue marker only; no public comments (Phase 5 at earliest).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the entire Ledger + Loss Room architecture is the engine's public accountability system — full signal snapshots at publish, loss autopsies with forced weight/variance/limitation conclusions, and a ban on win-rate marketing claims.
## Engine-actionable? (yes/no + one-line what)
yes — loss autopsies are required to conclude with a factor-weight change, variance call, or model-version limitation, so route every autopsy outcome into the factor-weight calibration backlog as a structured signal.
