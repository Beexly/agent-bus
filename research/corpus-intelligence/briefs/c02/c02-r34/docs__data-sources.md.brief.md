# docs/data-sources.md

## What it is (1-2 sentences)
The repository's canonical data-source catalog: The Odds API as the primary live-odds source (with supported markets/sports, rate limits, endpoints, and a freshness policy), plus the Anthropic Claude API as a content-generation-only layer explicitly barred from pick decisions.

## Key metrics/methods (formulas where given, else "not specified")
- **Freshness policy**: data older than 60 minutes is stale; every ingestion run records `fetched_at`; picks are only generated from non-stale data; stale data triggers an alert and skips pick generation.
- **Rate limits**: free tier 500 req/mo; Starter 10,000/mo; Standard 100,000/mo.
- **Validation rules**: (1) game data must have `commence_time` in the future (or < 3hr ago for live); (2) odds must have valid bookmaker source; (3) every pick traces back to an ingestion run ID; (4) ingestion runs logged with status, record count, duration, errors.
- No predictive formulas given.

## Data sources named
- **The Odds API** (https://the-odds-api.com) — live/upcoming odds; auth via `THE_ODDS_API_KEY`. Markets: `h2h`, `spreads`, `totals`. Sports: `americanfootball_nfl`, `americanfootball_ncaaf`, `basketball_nba`, `basketball_ncaab`, `baseball_mlb`, `icehockey_nhl`, `soccer_usa_mls` (7 sports, verified against `SUPPORTED_SPORTS`).
- **Anthropic Claude API** — content generation ONLY, never a pick data source. Model catalog in `apps/web/lib/claude-api/model-router.ts`: `haiku = "claude-haiku-4-5-20251001"`, `sonnet = "claude-sonnet-4-6"`, `opus = "claude-opus-4-8"`; active default across all surfaces is `claude-sonnet-4-6` (`SURFACE_TIER` routes everything to sonnet; only `calibration-insight` and `brief` are flipped to `haiku`). INFERENCE: the doc's mention of `claude-opus-4-6` is stale — that id exists nowhere in the repo.
- Endpoints used: `GET /v4/sports`, `GET /v4/sports/{sport}/odds`, `/scores`, `/events`.
- Config location corrected: real path is `packages/data-ingestion/src/config.ts` (doc's `packages/data-ingestion/config.ts` was wrong).

## Findings (numbers and facts, not vibes)
- [OTHER] Exactly 7 sports are supported (NFL, NCAAF, NBA, NCAAB, MLB, NHL, MLS) — verified against `SUPPORTED_SPORTS` in the real config path.
- [TRUST-SIGNAL] Stale data never feeds picks: >60-min-old data triggers an alert and skips pick generation entirely — a hard data-freshness gate consistent with the cockpit spec's freshness gate.
- [TRUST-SIGNAL] Full traceability: every pick traces back to an ingestion run ID; runs log status, record count, duration, errors.
- [TRUST-SIGNAL] The LLM is explicitly firewalled from decisions: it generates blog summaries, narratives from factual odds/line data, and SEO metadata — it does not invent stats, make independent pick recommendations, or access external live data.
- [OTHER] Update dated 2026-06-30 corrected two doc-vs-code mismatches (model id, config path) via verification against the actual code — the doc self-corrects rather than asserts.
- [OTHER] MEMORY CONTEXT NOTE: memory records Garrett's Odds API account (baxley.garrett@gmail.com, 20K credits/mo, $30/mo, active 2026-09-28) as the live key source — the doc's tier table (free 500 / Starter 10k / Standard 100k) gives the surrounding context for that account's credit budget.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
TRUST-SIGNAL (60-min staleness gate blocking pick generation; ingestion-run traceability for every pick; LLM firewalled off decisions). OTHER (7-sport coverage, tier limits, endpoint inventory, config-path/model-id corrections). No football-behavior content.

## Engine-actionable? (yes/no + one-line what)
Yes — the freshness policy (60-min stale cutoff), ingestion-run-ID traceability, and LLM-firewall doctrine are wiring contracts the engine must enforce; the 7-sport list bounds engine coverage.
