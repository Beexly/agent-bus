# arxiv-program/research/2026-09-21/arxiv-deep/1719-twitterpaul-extracting-aggregating-twitter-predictions.md
## What it is (1-2 sentences)
TwitterPaul extracts explicit predictions from tweets with a hand-built context-free grammar (strong/weak/support/retweet/question categories) and aggregates them with trust-weighted voting; on the 2010 World Cup it came close to the betting line (RMSE 0.4147 vs line 0.3959) but never beat it. ADAPT the extraction taxonomy and trust-weighted aggregation to NFL social data with a learned, negation-aware extractor — not the CFG or the "beats the market" framing.
## Key metrics/methods (formulas where given, else "not specified")
- CFG over prediction patterns (team mention + prediction verb + outcome), English only, negation explicitly ignored
- Aggregation: per-match weighted vote; schemes: unweighted, trust-weighted (user history reliability), logistic-regression-weighted (prediction strength + user features)
- Baselines: betting line, team-rank probability, raw aggregations (all/strong/support)
## Data sources named
2010 FIFA World Cup: 16,157,749 tweets (37-day window); 538,000 extracted predictions (~150,000 "strong"); extraction evaluated on 300 hand-labeled tweets; 64 matches, actual outcomes, pre-match betting lines; no public code/data
## Findings (numbers and facts, not vibes)
- Extraction: strong predictions — precision 0.886, recall 0.786, F1 0.833; all predictions — precision 0.693, recall 0.931, F1 0.794
- RMSE (vs actual / vs market): betting line 0.3959/0.0000; team-rank 0.4215/0.1614; strong predictions 0.4197/0.1159; trust-weighted 0.4147/0.1131; logistic-weighted 0.4183/0.1117; support-only 0.4416/0.2217
- Neither weighting scheme beats the market outright on outcome RMSE; RMSE differences between schemes within noise at n=64
- Limitations: CFG English-only, negation-blind; no sarcasm handling; 2010 Twitter demographics unrepresentative; no calibration analysis; 538K predictions/64 matches ≈ 8.4K per match was the density that made aggregation work
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: social-signal lane — build gse/signals/social_predictions.py: fine-tuned classifier (XLM-R-class) extracting (game, side, strength, negation-aware) from NFL X posts; per-account trust scores from historical accuracy; trust×strength-weighted crowd-consensus probability; feed as public-lean proxy into market-microstructure model and as contrarian indicator vs the line; improvement: isotonic-calibrated crowd consensus as divergence signal (bet against the crowd when |crowd−line| large and crowd historically overconfident)
## Engine-actionable? (yes/no + one-line what)
Yes — adapt the taxonomy + trust-weighted aggregation with learned extractor; gate: extraction F1 ≥0.80 on 500-post labeled set (negation subset ≥0.75) AND consensus feature improves line-plus-consensus model by ≥0.005 Brier on 2024 backtest; reject the signal for any game/week where extraction volume falls below coverage threshold.
