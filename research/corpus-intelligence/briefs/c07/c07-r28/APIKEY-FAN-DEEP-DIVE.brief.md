# props/research/2026-09-18/firecrawl/APIKEY-FAN-DEEP-DIVE.md
## What it is (1-2 sentences)
A 2026-09-18 deep-dive that disproves Garrett's belief that apikey.fan has sports data (it's an AI-model relay at 7–20% of official rates) and, more importantly, documents OddsPapi (oddspapi.io) as a real odds API with a free unmetered `/v4/historical-odds` endpoint.
## Key metrics/methods (formulas where given, else "not specified")
- OddsPapi free tier: 250 requests/month; 1 request = 1 call to a billable endpoint regardless of response size.
- `/v4/historical-odds` is ALWAYS FREE (never increments the request count); `/v4/account` unmetered.
- Working pattern (from sharp-ev-picks recon): GET `/v4/historical-odds?fixtureId=…&bookmakers=…` (max 3 bookmakers per call), reduce chronological per-outcome price history to (open, close) with UTC-aware times; Pinnacle open = anchor, Pinnacle close = CLV reference.
- OddsPapi claims 300+ bookmakers, 60+ sports, 12,000+ yearly competitions; 69 sports as of June 2026.
- apikey.fan: successor domain of apikey.fun (migration 2026-09-13, confirmed via loongport commit); FAQ claims "roughly 20% of official rates," sub2api lists pricing from 7%.
## Data sources named
apikey.fan (homepage); GitHub repos fan-van/sub2api, sailingloong/loongport; oddspapi.io (homepage, /pricing, /en/docs/requests-and-quota, /blog/the-odds-api-free-tier-limits/); GitHub mxvsatv321/cleatiq (oddspapi_recon.md, 2026-05-02); GitHub alexandrosh8/sharp-ev-picks (2026-07-05 crosscheck evaluation); freepublicapis.com; api.betonline.ag (fetch failed, UNVERIFIED).
## Findings (numbers and facts, not vibes)
- apikey.fan is CONFIRMED NOT a sports/odds data provider: zero sports, odds, or NFL statistics endpoints on its public site. It is an AI-inference relay only.
- OddsPapi IS a genuine sports odds API: real-time, pre-match, live, historical; bookmakers include Pinnacle, Bet365, DraftKings, FanDuel, BetMGM, Unibet, Bwin, Sbobet.
- OddsPapi free tier: 250 requests/month + unmetered `/v4/historical-odds`. Auth is `apiKey` as query parameter. Base URL `https://api.oddspapi.io/v4`.
- NFL sportId UNVERIFIED in this pass — must resolve via GET `/v4/sports` (soccer=10, MLB=13 per docs).
- Free Public APIs lists a "5Dollar Football API" (live scores, fixtures, odds, statistics; health 95) — directory listing confirmed only, its docs/pricing NOT fetched.
- apikey.fan free-account tier exists but free-quota amount NOT published; free-account signup was out of scope.
- OddsPapi ToS/redistribution terms NOT captured — must read before persisting or republishing data.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: OddsPapi free Pinnacle open/close histories = free CLV reference anchor for grading engine picks; free historical-odds endpoint never burns credits.
- OTHER: OddsPapi as cheap historical line-movement ingestion source (spike task outlined in Section 8).
## Engine-actionable? (yes/no + one-line what)
Yes — free unmetered Pinnacle historical odds give the engine a zero-cost CLV anchor and line-movement feed (pending ToS check).
