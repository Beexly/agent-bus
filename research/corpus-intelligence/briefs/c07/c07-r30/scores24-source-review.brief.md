# source-providers/scores24-source-review.md
## What it is (1-2 sentences)
The full risk review of Scores24 as a potential Sports OS data source (Prompt 4 Final Wave, doctrine-level), classifying it ORANGE (owner approval required, no automated access) across a four-dimension risk framework.

## Key metrics/methods (formulas where given, else "not specified")
Four-dimension Source Risk Framework scores (scale implied 1–5, one LOW dimension triggers ORANGE): Data quality 3 (aggregator, provenance unclear); Legal/licensing 2 (no confirmed commercial license, ToS automated access unknown); Reliability 3 (no API uptime history); Manipulation risk 3 (downstream aggregator). Overall tier: ORANGE.

## Data sources named
Scores24 (the reviewed source); cross-refs: `docs/audit/final-wave-source-risk-register.md`, `docs/audit/piracy-malware-do-not-use-register.md`, `docs/brain/source-acquisition-mesh.md`. Approved alternatives named: The Odds API (T2, GREEN, licensed) for odds/lines; league official feeds (T1, GREEN) for scores; Sportradar/Stats Perform (T2, YELLOW, requires license) for future stats.

## Findings (numbers and facts, not vibes)
- Finding 1: ToS automated-access status UNCONFIRMED → doctrine treats unconfirmed as PROHIBITED; resolution requires written confirmation or a signed commercial agreement.
- Finding 2: No publicly documented official API → no integration pathway exists until a commercial agreement or documented API program.
- Finding 3: Scores24 is an aggregator; a license with Scores24 alone may be insufficient — needs confirmation it can sublicense for Sports OS's use case (derived intelligence, public-facing picks).
- Finding 4: No historical reliability data → a 90-day parallel evaluation against The Odds API required before production picks, even after licensing resolves.
- Path to GREEN: six steps (ToS confirmation → API documentation → provenance confirmation → license signed → 90-day evaluation → owner approval); all six required, owner approval mandatory.
- Path to RED: confirmed ToS prohibition, confirmed redistribution-prohibited upstream data, legal liability, or declined partnership → hard-ban register.
- Forbidden: scraping, any Scores24 data in pick evidence chains, ADMITTED registry entry without the six steps, public methodology claims, silent reclassification.
- Codex audit: no references to Scores24 domains/endpoints in `packages/data-ingestion/` or `workers/`; scraping code is a P1 violation.
- Explicitly states there is NO current data-coverage gap requiring Scores24 (odds = The Odds API; scores = league feeds).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: provenance and licensing rigor for any future data source; OTHER: legal/licensing doctrine, no football signal.

## Engine-actionable? (yes/no + one-line what)
yes — keep the four-dimension risk rubric (quality/licensing/reliability/manipulation) as the admission gate for any new source (e.g. SportsLine/Infinity Sports AI from Garrett's password-manager set) before any ingestion work.
