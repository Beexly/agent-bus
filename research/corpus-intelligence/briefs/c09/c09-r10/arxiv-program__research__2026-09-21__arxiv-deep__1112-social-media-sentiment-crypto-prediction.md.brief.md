# arxiv-program/research/2026-09-21/arxiv-deep/1112-social-media-sentiment-crypto-prediction.md
## What it is (1-2 sentences)
Deep-read ledger of Raheman et al. 2204.10185 (Twitter/Reddit sentiment metrics for crypto market prediction). Verdict: ADAPT with explicit snooping caveats — an interpretable lexicon-and-lag-feature recipe (per-channel sentiment incl. a "contradictive" compound, lagged correlations, selectively weighted indicators) worth porting as GSE's sports-news sentiment lag experiment.
## Key metrics/methods (formulas where given, else "not specified")
- contradictive = SQRT(positive × ABS(negative))
- Per-channel sentiment scoring with 21 base models (22 after Aigents fine-tuning); aggregate temporal metrics; selectively weighted compound indicator combining channels and metrics; correlations with market moves at lags 0/1/2 days (exact weighting scheme not re-implementable from the paper per the file)
## Data sources named
- ~100,000 Twitter/Reddit items across 77 public feeds/subreddits, July–December 2021 (six months); reference labeling set: 490 posts from 5 Twitter feeds labeled by 2 reviewers
## Findings (numbers and facts, not vibes)
- Pearson correlation with ground-truth labels: Aigents 0.33, fine-tuned Aigents 0.57, finBERT 0.32 (best of 22)
- Aggregate temporal correlations ~0.15 at 1–2 day lags; selectively weighted compound indicator reached 0.55 correlation at lag −1 day — but the file flags serious snooping risk: channel/metric selection was optimized on the same six-month series used to report the 0.55, with no held-out predictive backtest
- File's proposed GSE port: 2024-season player/team news sentiment from X + beat-writer RSS, per-entity daily metrics incl. the contradictive compound, lagged correlation with next-week projection error at 1–7 day lags; acceptance gate: out-of-sample |r| ≥ 0.10 on locked 2025 evaluation with correct sign and RMSE improvement in a bivariate blend; REJECT if out-of-sample |r| < 0.05
- Improvement experiment: nested walk-forward time-series CV (refit quarterly) plus a channel-disagreement (variance) metric — the file hypothesizes disagreement predicts projection error and mispricing better than sentiment level
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL (adjacent: sentiment/disagreement metrics on player/team news are a weak form of the same public-signal extraction that trust-signal mining uses — the disagreement-metric idea ports directly); OTHER (news-sentiment lag features for the projection pipeline). No QB behavior, coaching, OL, or scheme content.
## Engine-actionable? (yes/no + one-line what)
Yes — port the per-channel sentiment + contradictive-compound + lag-feature recipe to player/team news and test lagged correlation with GSE projection error, accepting only on locked out-of-sample |r| ≥ 0.10 with a disagreement (variance-across-channels) metric included.
