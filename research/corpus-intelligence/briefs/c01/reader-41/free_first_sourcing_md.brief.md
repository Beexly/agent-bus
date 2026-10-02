# data/FREE_FIRST_SOURCING.md
## What it is (1-2 sentences)
Operating doctrine for Galaxy Sports Edge data sourcing: always use free, cleared data sources before any paid API, with a hard rule that cost order never overrides the rights/clearance gate and higher-quality wins among equal-cost sources.

## Key metrics/methods (formulas where given, else "not specified")
- `paidCallJustified(need, sport)` / `requiresPaidEscalation(need, sport)` spend-guard functions: return true ONLY when no cleared free source covers the need.
- Quota guards: 500/mo free credit cap on The Odds API; in-season gating (`getInSeasonSports`) to protect it.
- Free odds candidates: TheRundown (20k pts/day), Big Balls (1–2k/day), Sports Game Data (2,500/mo).
- Smoke proof: `npx tsx scripts/free-ingest-smoke.mjs` → ESPN scores for all 7 sports + Open-Meteo weather, 8/8 ok, zero key/spend.
- `noFakeLiveData` invariant: an unproven/stale source LOWERS confidence; never dressed up as fresh.

## Data sources named
nflverse (NFL scores/schedules/player & team stats), ESPN public API (scores for 7 sports, standings, AP/Coaches polls for ncaaf/ncaab), Open-Meteo (CC-BY weather), The Odds API (licensed, in-season gated — only paid need: odds). Free-odds candidates gated: TheRundown, Big Balls, Sports Game Data.

## Findings (numbers and facts, not vibes)
- Live free coverage verified (HTTP 200, no key): scores/results, schedules, standings, rankings, weather, NFL player/team stats — all covered at zero spend.
- Only remaining paid need is **odds** (free odds providers still gated). The Odds API is the current licensed provider, constrained to 500 free credits/mo.
- Quality rule: facts only from public sources; attribution propagates; adapters built against live-verified schemas and tested against captured fixtures; cross-source agreement (ESPN vs licensed scores) is the next quality layer and a credit saver.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — data-sourcing doctrine; not a football intelligence file. Useful as a trust-signal calibration note: engine confidence must degrade on stale/unproven sources rather than faking freshness (ties to the noFakeLiveData invariant and Garrett's honest-calibration stance).

## Engine-actionable? (yes/no + one-line what)
no — internal cost/sourcing doctrine; no player/team behavioral data. (Note for the program: the noFakeLiveData confidence-degradation rule is a calibration safeguard, not a stat feed.)
