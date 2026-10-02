# FREE_FIRST_DATA.md
## What it is (1-2 sentences)
Architecture doc for GSE's zero-cost data strategy: free public sources cover scores, schedules, weather, and deep NFL stats, with The Odds API as the sole paid dependency (odds/lines), gated by a per-call spend guard (`paidCallJustified`) and in-season gating.
## Key metrics/methods (formulas where given, else "not specified")
- Trust-tiered finals from cross-source fusion: CONFIRMED (two free sources agree) / SINGLE_SOURCE / DISPUTED (conflict → held, never settled blindly).
- `crossCheckNcaaScores()` joins ESPN ↔ henrygd by team abbreviation + date proximity (±1 day), reporting agreement/disagreement/coverage gaps.
- Free settlement path grades picks via the engine's `calculatePickResult` only when trusted; DISPUTED finals HOLD, unmatched stay PENDING.
## Data sources named
ESPN public API (scores/schedule/status 7 sports, AP/Coaches rankings, standings); henrygd NCAA API (CFB/MBB/WBB, self-hostable via docker); Open-Meteo (game-time weather); nflverse (deep NFL stats); The Odds API (paid, odds only).
## Findings (numbers and facts, not vibes)
- After free-first wiring, odds/lines are the only paid need; `paidCallJustified()` enforces spend per call.
- `npm run free:doctor` hits every free source live (no key, no spend) and exits non-zero on any failure.
- Settlement health reference (from related log): 2,780 picks with 0 overdue.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: two-independent-free-sources-agree = confirmed fact; conflicts flagged and held — the settlement trust discipline behind the proof-gated track record.
- OTHER: cost architecture (free-first ingestion with paid-only-for-odds) — operational, not predictive.
## Engine-actionable? (yes/no + one-line what)
Yes — free ingestion already wired; the engine gets scores/weather/nflverse depth at $0 with trust-tiered finals feeding settlement.
