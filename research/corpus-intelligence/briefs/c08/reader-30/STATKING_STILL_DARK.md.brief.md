# docs/research/STATKING_STILL_DARK.md (found at this path; the chunk list's `2026-10-01/` path did not exist)
## What it is (1-2 sentences)
Research note explaining why StatKing stays dark: `STATS_PUBLIC` defaults OFF; no product flip until rights, live feeds, settlement/CLV health, and readiness gates are green.
## Key metrics/methods (formulas where given, else "not specified")
Not specified. Unlock checklist (founder): rights memo per feed on `/stats*`; live feed SLA green; settlement not CRITICAL ("0 overdue HEALTHY" is necessary, not sufficient); explicit `STATS_PUBLIC=1`; trust-gate + unfinished-copy clean on StatKing copy.
## Data sources named
Live feed health (nflverse); settlement/CLV health; `canExposePerformanceStats` readiness gate.
## Findings (numbers and facts, not vibes)
- Current state: `/stats` 404s; robots Disallow; sitemap omits StatKing.
- Why dark, in order: (1) rights — player/team stat surfaces need redistribution rights; (2) live feeds — nflverse health unknown until runtime fetch evidence; no fake "stats live" UI; (3) settlement/CLV oxygen — public proof must not outrun graded outcomes; (4) bootstrap/readiness — performance API still refuses under gates.
- Contests/waitlist may stay public as "paper skill" without live-edge claims.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the no-fake-live-stats integrity rule — never pretend blocked/metadata-only/fixture-backed data is active — is the same honesty doctrine that must gate any public engine output.
## Engine-actionable? (yes/no + one-line what)
Yes — the gate law is a standing constraint: any engine stat surface stays behind `STATS_PUBLIC`-style gating until rights, live-feed SLA, and settlement health are green.
