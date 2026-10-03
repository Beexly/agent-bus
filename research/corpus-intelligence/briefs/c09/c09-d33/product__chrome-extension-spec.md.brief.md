# product/chrome-extension-spec.md
## What it is (1-2 sentences)
Phase 4 build spec for a browser extension that overlays Galaxy's Edge Index (e.g. `EDGE 2.7`) directly on DraftKings / FanDuel / BetMGM / Caesars game tiles, with a Pro+ expandable card showing the factor breakdown and pre-mortem preview.
## Key metrics/methods (formulas where given, else "not specified")
- Edge Index shown as a single float (e.g. 2.7) with tiers: `SOLID_PLAY` label shown in expanded card; badge text variants: `EDGE <n>`, `GATED`, `BOOTSTRAP`.
- Expanded card: top contributing factors with weights (example: Rest advantage 0.81, Schedule stress 0.74, Consensus 0.72); "what would change our mind" bullets (e.g. sharp money moving line >2 pts).
- Published-at confidence display (e.g. "Published at 73% confidence at 8:00 PM ET").
- Gate states: `PUBLISHED | GATED | BOOTSTRAP`. Rate limit: 60 requests/minute per anonymous install; 30s edge cache.
## Data sources named
not specified (extension is a display surface; game detection via per-book DOM parsers at `apps/extension/parsers/<book>.ts`; API endpoints `/api/extension/match-game`, `/api/extension/factor-breakdown`, `/api/extension/connect`, `/api/extension/parser-health`).
## Findings (numbers and facts, not vibes)
- MVP covers 4 books (DK, FanDuel, BetMGM, Caesars); Phase 5+ adds BetRivers, Underdog, PrizePicks, ESPN BET, Hard Rock Bet.
- Badge capped at 24px height, ultraviolet `#7B61FF`; one badge per game tile.
- Anonymous mode = Edge Index only, no login; Linked mode (OAuth via `chrome.storage.sync` refresh token) unlocks factor breakdown for Pro+.
- Extension does NOT read bets, balances, or bet history; does NOT auto-place bets; affiliate deep-links default OFF.
- 10 acceptance criteria before shipping to Chrome Web Store; 4 open items (in-play lines, per-book toggle, local caching, Firefox timing).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (product distribution — not engine intelligence per se, but surfaces the model's edge in-bettor-workflow)
## Engine-actionable? (yes/no + one-line what)
no — product distribution spec; no modeling content for the engine (Edge Index display surface only).
