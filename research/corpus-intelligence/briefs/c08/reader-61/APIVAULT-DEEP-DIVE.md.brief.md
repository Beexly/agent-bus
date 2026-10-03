# Sports/docs/props/research/2026-09-18/firecrawl/APIVAULT-DEEP-DIVE.md
## What it is (1-2 sentences)
Public-only research deep dive (fetches ~16:10 CDT on 2026-09-18) on apivault.uk, concluding it is a generic "one key for every API" proxy-aggregation service with zero sports, odds, or NFL endpoints in its catalogue — contradicting the assumption it had relevant free sports-data tiers.
## Key metrics/methods (formulas where given, else "not specified")
- No metrics or modeling formulas; the service is an API proxy. Technical facts: proxy routing `/{service}` proxy routes with `x-vault-key` header; per-user throttle 60 requests/min, daily cap 1000 (from public repo `middleware/rateLimit.js`, INFERRED to apply to apivault.uk); prepaid atomic Postgres `deduct_credits` per call; upstream 5xx → automatic refund + log; pool solvency floor = 7-day rolling daily average × 3 days, hourly cron top-up, empty pool → HTTP 503 with `retry_after`; request bodies capped at 32 KB.
- Catalogue: "17 APIs ready now" (16 free + NewsAPI/OpenWeather/Claude per doc text) vs hero claim of "49 APIs" — documented as marketing inflation (17 + 8 "soon" = 25, not 49). Zero sports/odds/NFL entries.
## Data sources named
apivault.uk homepage catalogue: Exchange Rates, REST Countries, IP Geolocation, Open Meteo, NewsAPI, OpenWeather, GitHub API, JokeAPI, Chuck Norris, PokeAPI, SpaceX Data, Cat Facts, Advice Slip, CoinGecko, Frankfurter Forex, Open FDA, Claude (Anthropic); "soon": GPT-4o, Gemini Flash, HeyGen Video, Africa's Talking, Twilio SMS, M-Pesa, Flutterwave. Codebase: public repo github.com/jemeralds/apivault (Node.js + Express, Supabase Postgres, React + Vite + Tailwind, Stripe webhooks).
## Findings (numbers and facts, not vibes)
- CONFIRMED: apivault.uk is NOT a sports-data or odds-data API provider.
- Explicit verdict: no engineering value as a data source for Sports/GSE — do NOT build an APIvault adapter; a sports API could theoretically be requested ("Request any API and we'll add it") but would just be upstream price + markup (repo documents a `markup` field), strictly worse than direct integration (The Odds API key already exists).
- 4 unrelated GitHub repos with the same name identified and excluded (flitnetics, tobi-maru, sulavtimsina, apivault-labs); apivault-directory possibly related but unverified.
- No archived/leaked datasets found; no credential used/requested/stored; Garrett login required for any live per-plan check (not done by agents).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Negative result on a candidate data source (route around APIvault for sports data) — OTHER
- CONFIRMED/INFERRED/UNVERIFIED evidence labeling discipline — TRUST-SIGNAL (methodology note for future intake)
## Engine-actionable? (yes/no + one-line what)
Yes — dead-end resolution: do not build an APIvault adapter; integrate sports data upstream directly (The Odds API key already exists).
