# docs/props/research/2026-09-18/notes/sumersports-app-lead.md
## What it is (1-2 sentences)
A one-note research lead (2026-09-18): @SumerSports posted that Linebacker, Defensive Interior, and Edge Rusher position data tables went live in their app, with preseason/postseason data available from 2022 — flagged as a candidate positional data source for the engine to research.
## Key metrics/methods (formulas where given, else "not specified")
Not specified — lead only, no metrics or methods documented.
## Data sources named
SumerSports app / SumerPass; sumersports.com public pages and pricing page to confirm tiers (research steps named but not executed in this file).
## Findings (numbers and facts, not vibes)
- SumerSports app now serves Linebacker, Defensive Interior, Edge Rusher position data tables (announced 2026-09-18).
- Preseason and postseason data available from 2022.
- SumerPass pricing: $10/week, $20/month, $100/year, 7-day free trial, promo code WELCOME15 = 15% off.
- Research open items: how the app serves data, whether any documented/public API endpoints serve the tables, pricing confirmation.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- (OL) Defensive Interior and Edge Rusher position tables are pass-rush/defensive-line positional data — directly relevant to OL-DL matchup modeling and the pressure-model inputs the props report's sack-NULL veto depends on (pressure data quality determines whether sacks stay unmodelable).
- (OTHER) Linebacker position tables feed tackling/personnel modeling — adjacent to the rotational-noise veto on tackle props.
- (OTHER) Preseason/postseason data from 2022 extends the usable sample beyond regular season — useful for the total-signal intake lane's off-field/defensive signals.
- (OTHER) Pricing tiers ($100/year with trial) make this a low-cost candidate source; API availability still unverified.
## Engine-actionable? (yes/no + one-line what)
Yes — verify whether SumerSports exposes a documented public API for the LB/DI/Edge tables and trial one SumerPass cycle to evaluate positional pass-rush data quality for the OL-DL matchup and pressure-model signals.
