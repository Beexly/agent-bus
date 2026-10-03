# ops/situation-signal-vs-quote-plane.md
## What it is (1-2 sentences)
A naming/architecture note disambiguating two different "SituationSnapshot" usages in GSE: situation signals (game-context fields) vs the quote plane's book market-state merge ladder.
## Key metrics/methods (formulas where given, else "not specified")
Not specified.
## Data sources named
Situation signals lane: nflverse / ESPN plugins. Quote plane lane: `packages/quote-plane` — book market-state merge ladder: Rundown → Sharp ×3 → Odds-free → Parlay → OddsPapi → Apify.
## Findings (numbers and facts, not vibes)
- Situation signals contain: rest, roof, surface, weather, stadium, teams, kickoff — NO prices.
- Quote plane packet 03 contains the book market-state merge ladder (source precedence: Rundown → Sharp×3 → Odds-free → Parlay → OddsPapi → Apify).
- Join seam: situation signal `eventId` is filled FROM a MarketQuote identity match.
- Rule: quote planes must not write odds into situation signal objects.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Situation signal fields named: rest, roof, surface, weather, stadium, kickoff — these are the game-context inputs the engine treats as situation signals. [SCHEME]
- Book-price data and situation data are kept in separate objects with a one-way join (eventId from MarketQuote match only). [OTHER]
## Engine-actionable? (yes/no + one-line what)
Yes — confirms the canonical situation-signal field list (rest, roof, surface, weather, stadium, teams, kickoff) and the book-merge precedence ladder for any quote-plane wiring audit.
