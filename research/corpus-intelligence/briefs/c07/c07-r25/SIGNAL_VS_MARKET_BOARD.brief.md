# ops/SIGNAL_VS_MARKET_BOARD.md
## What it is (1-2 sentences)
The spec for the platform's two public board surfaces — market board (book/exchange lines) vs signal board (model signals) — including kill switches, labeling rules, and integrity constraints.

## Key metrics/methods (formulas where given, else "not specified")
- Env: `PUBLIC_BOARD_SURFACE=market` (default) vs `PUBLIC_BOARD_SURFACE=signal`.
- Kill switches: market board = Odds-fresh: SUCCESS + `oddsInserted>0` within 240m; signal board = Slate-fresh: recent published non-seed pick within 240m.
- Line labels: market = Book/exchange (OddsProvider only); signal = "Model signal" — never book/exchange.
- Integrity: no synthetic fair lines labeled as book lines; performance publish still requires eligibility GREEN + policy, independent of board surface; OddsProvider abstraction + failover stays; offline provider not certifiable for LIVE_BOARD.

## Data sources named
- OddsProvider abstraction; The Odds API (required for live lines + edge on the market board); free-tier cron cadence stays conservative.

## Findings (numbers and facts, not vibes)
- For model-first public open without warm odds: set `PUBLIC_BOARD_SURFACE=signal`; market board remains available when odds are warm.
- The odds key is required only for live lines + edge; it is optional enrichment for the signal board.
- LIVE_BOARD still requires odds-freshness regardless of which surface is public.
- Never invent book prices; free-tier cron cadence stays conservative.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- "Model signal" vs "book line" labeling discipline — never label model output as market prices — [TRUST-SIGNAL]
- 240-minute freshness kill switches as live-data honesty gates — [TRUST-SIGNAL]
- OddsProvider abstraction + failover pattern for data-source redundancy — [OTHER]

## Engine-actionable? (yes/no + one-line what)
yes — Any public board surface must carry a freshness kill switch (240m) and strict label discipline: model outputs are never presented as market/book lines.
