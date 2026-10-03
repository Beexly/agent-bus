# ops/SIGNAL_VS_MARKET_BOARD.md
## What it is (1-2 sentences)
The public-board surface doctrine distinguishing the market board (book/exchange lines, requires warm Odds API key) from the signal board (model signal only, never book prices), including the kill switches and integrity rules for each.

## Key metrics/methods (formulas where given, else "not specified")
- Env switch: `PUBLIC_BOARD_SURFACE=market` (default) vs `PUBLIC_BOARD_SURFACE=signal`
- Market board kill switch: Odds-fresh = SUCCESS + **oddsInserted>0** within **240m** (240 minutes)
- Signal board kill switch: Slate-fresh = recent **published non-seed pick** within **240m**
- LIVE_BOARD always requires odds-fresh, independent of board surface
- OddsProvider abstraction + failover stays; offline provider is **not certifiable** for LIVE_BOARD
- FOUNDING mode: for model-first public open without warm odds, set `PUBLIC_BOARD_SURFACE=signal`
- Integrity: no synthetic fair lines labeled as book lines; performance publish still requires eligibility GREEN + policy, independent of board surface

## Data sources named
- The Odds API key (required for live lines + edge on market board; optional enrichment only for signal board)
- OddsProvider abstraction (failover between odds providers)

## Findings (numbers and facts, not vibes)
- Freshness threshold for both boards: **240 minutes**
- Market board cannot function without a live Odds key; signal board can show signals without odds, never inventing book prices
- Free-tier cron cadence stays conservative (standing constraint)
- Performance publishability is orthogonal to board surface: GREEN + policy required either way

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **TRUST-SIGNAL**: The no-synthetic-lines rule (model signal labeled "Model signal — never book/exchange") is a standing honesty constraint: engine outputs may be shown publicly without live odds, but must never be presented as market lines (serves trust-target intake / public launch).
- **OTHER**: The 240-minute freshness kill switches are concrete data-freshness SLAs the engine's public surfaces inherit — stale boards go dark rather than show stale lines (serves the tracking lane).

## Engine-actionable? (yes/no + one-line what)
yes — any engine public board must implement the signal-vs-market split: signal surface with explicit "model signal, not book lines" labeling and a 240-minute freshness kill switch when live odds are unavailable.
