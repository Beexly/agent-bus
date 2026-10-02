# arxiv-program/research/2026-09-21/arxiv-deep/1119-triumphs-tragedies-fandom-emotional-arcs-nfl.md
## What it is (1-2 sentences)
Maps the geographic shape of NFL fandom from geotagged tweets (fandom radius per team) and traces collective sentiment arcs across pregame/halftime/end-of-game windows, conditioned on wins vs losses. Purely descriptive; no predictive validation in the paper.
## Key metrics/methods (formulas where given, else "not specified")
- Activity: A(M_i) = Tweets(M_i)/Population(M_i) × 100,000 per metro
- Fandom radius = first distance from stadium where normalized activity falls below background (70% cumulative-population core threshold)
- Sentiment: lexicon (hedonometer-style, ~6.0 scale) in pregame/halftime/end windows; seven-day game windows
- Scaling: activity ∝ population^α, α = 0.53, R² = 0.64 (19,174 team-season-metro observations)
## Data sources named
Twitter Decahose (random 10% sample), 2011–2014 NFL regular seasons, geotagged tweets only
## Findings (numbers and facts, not vibes)
- Fandom radius: Ravens 121 km to Seahawks 782 km
- Sentiment winner/loser: pregame 6.14/6.09; halftime 5.86/5.80; end 6.12/5.77 — winners rebound, losers stay depressed (losses linger)
- Inside-fandom vs overall sentiment Spearman ρ = 0.85, p<0.001; win% vs sentiment Pearson 0.33
- 2011–2014 data (decade old); hashtag team assignment; matchup tweets double-counted; lexicon fails on sarcasm; no code released
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: content targeting (geo-target clips by rebuilt fandom radii, e.g. Seahawks 782 km vs Ravens 121 km); engagement features — pregame/halftime sentiment arcs as inputs to viewership/handle models; post-loss sentiment depression as a ready-made asymmetry feature; method fix required: replace lexicon with sports-tuned transformer sentiment
## Engine-actionable? (yes/no + one-line what)
Yes — rebuild fandom radii on 2024–2026 X data for geo-targeting and test sentiment-arc features in viewership models; gate: ≥2pp out-of-sample R² gain, or radii rank-correlate Spearman ≥0.7 with an independent fanbase measure.
