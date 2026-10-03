# arxiv-program/research/2026-09-21/arxiv-program/index/SIGNAL-GAPS.md
## What it is (1-2 sentences)
Signal-coverage audit of the 1,251-paper research corpus: raw vs "honest" (false-positive-discounted) coverage per signal tag, identifying the five emptiest-but-most-valuable signal territories as next research targets.

## Key metrics/methods (formulas where given, else "not specified")
Coverage accounting: raw tagged counts vs honest estimates per signal (e.g., officials 31 raw → ~5 true). Gap-closure criteria: (a) a dedicated wave adds 15–25 full-text-read papers, (b) at least one ADOPT-grade paper yields a BUILD-QUEUE.md build with a numeric gate, (c) the signal flows into a named GSE score component.

## Data sources named
corpus-index.jsonl signal tags, SIGNAL-TAXONOMY.md false-positive patterns. Gap research directions name: public interviews/transcripts, roster tenure overlap, social graph proxies, beat-reporter sentiment (gap 1); public projections (538, FTN, FantasyPros ECR archives), open-sourced models, published methodologies (gap 2); nflverse penalty-by-official data, Pro Football Reference referee pages (gap 3); stadium metadata + game weather merged to play-by-play, kicking splits by stadium (gap 4); schedule-derived travel (gap 5).

## Findings (numbers and facts, not vibes)
- Coverage table: historical_results 350→~300 (saturated); game_state 195→~180 (strong); player_tracking 158→~150 (strong); market_odds_baseline 158→~150 (strong); weather_environment 123→~100 (adequate); news_narrative 83→~70 (adequate); player_physiological 75→~40 true physiology (thin); stadium_physics 35→~5 true (GAP); officials 31→~5 true (GAP); competitor_intel 26→~0 true (GAP); social_relationships 10→~2 true (GAP).
- The one real social_relationships paper is SMOGS (social network metrics of game success).
- Most `officials` tags were Twitter event detection or "official data", not referees; most `competitor_intel` tags were generic forecasting papers.
- Secondary gaps: live_ingame lane has 1 paper; multimodal_fusion 12 + sports_cv 12 (young); continual_online_learning 13 (theory exists, production wiring missing); MONITOR bucket holds 219 concept-drift papers.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: Gap 1 — QB–receiver trust / locker-room cohesion is ~2 papers, explicitly the "cohesion factor" build target.
- COACHING: Gap 1 includes coaching relationships; gap-2 competitor schemes; gap-3 crew effects; gap-4 stadium physics for kicking.
- OL: nothing direct.
- SCHEME: gap 2 covers competitor scheme classification from charting data.
- OTHER: officials crew-tendency layer (penalty rates by crew, home-bias, over/under splits by crew assignment); stadium physics (air density from temperature/altitude, wind-tunnel effects); freshness factor (travel distance + timezone shift, rest-day differentials, circadian effects of west-coast teams at 1pm ET).

## Engine-actionable? (yes/no + one-line what)
Yes — provides the ranked research-target map (trust/chemistry factor, referee crew adjustment layer, stadium-physics kicking adjustments, circadian travel fatigue) for the engine's next signal intakes.
