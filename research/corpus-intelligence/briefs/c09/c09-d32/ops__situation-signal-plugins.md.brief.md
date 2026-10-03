# ops/situation-signal-plugins.md
## What it is (1-2 sentences)
Spec for situation signal plugins (nflverse-situation, espn-situation) feeding the Galaxy Sports Edge SituationSnapshot context plane, plus the join contract that links situation snapshots to MarketQuote rows without leaking price keys onto the context plane.
## Key metrics/methods (formulas where given, else "not specified")
Join contract in `packages/quote-plane/src/situation-join.ts`: (1) `sport` must match; (2) home/away with abbr↔full normalization; (3) `commenceTime` within ±12 hours; (4) `eventId` filled from the quote side only — never invented, ambiguous → null; (5) never copy price keys onto the situation snapshot.
## Data sources named
nflverse-situation plugin, espn-situation plugin, `packages/quote-plane/src/situation-join.ts`, `situation-snapshot.ts`, packet 03 (free-quote precedence: Rundown → Sharp×3 → Odds-free → Parlay → OddsPapi → Apify); TeamRankings — HELD while Beexly/Sports PR #884 is open (do not touch).
## Findings (numbers and facts, not vibes)
- Hard wall on the context plane: no moneylines, spreads, totals, or `consensusDeviggedProb*` — situation plugins emit only rest/stadium/weather context; the quote plane owns prices and free-quote precedence must not be conflated with situation data.
- Runnable plugins stay workspace-side until Sports has a `plugins/` home; ESPN/nflverse plugins are offline stubs outside this repo until then.
- Join is tolerant on team names (abbr↔full) and time (±12h commenceTime) but strict on identity: `eventId` is never invented and ambiguous joins resolve to null.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (data plumbing): context-plane/quote-plane separation and the market-context join contract.
- SCHEME (adjacent): the rest/stadium/weather context emitted by the situation plane is a scheme/coaching-adjacent input (e.g., weather affecting playcalling), though the file names no specific tendencies.
## Engine-actionable? (yes/no + one-line what)
Yes — the join contract (abbr↔full normalization, ±12h commenceTime tolerance, never-invented eventIds) is a reusable spec for any GSE market↔context join, and the free-quote precedence chain (Rundown→Sharp×3→Odds-free→Parlay→OddsPapi→Apify) is the documented quote-plane ordering.
