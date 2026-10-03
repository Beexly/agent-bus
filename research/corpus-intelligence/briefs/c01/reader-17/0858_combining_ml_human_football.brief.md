# arxiv-program/research/2026-09-21/arxiv-deep/0858-combining-ml-human-football.md
## What it is (1-2 sentences)
Ledger brief for Beal et al. (2020, arXiv:2012.04380) on combining NLP-extracted expert opinion from pre-match journalist previews with statistical ML to predict soccer match outcomes. Verdict: ADAPT — it fills GSE gap #12 (text/news as model features beyond the price), beat-writer text embeddings for injury news being otherwise untested.

## Key metrics/methods (formulas where given, else "not specified")
Five-stage pipeline: OpenIE relation-tuple extraction per sentence → sentence→team allocation (home α, away β, or no team) → Count Vectorizer sentence vectors f(s) → per-team aggregation V(α)=Σf(s), V(β)=Σf(s) → Random Forest on X=[μ·V(α), V(β)] with home-advantage weight μ (Clarke & Norman 1995). Ensemble (Model 4): RF stacked on the 9-vector of outcome probabilities from the three base models (text RF, Dixon & Coles, bookmaker favourite).

## Data sources named
- 1,770 EPL games, 2013/14–2018/19, with Guardian match previews (released: github.com/RyanBeal7/GuardianPreviewData)
- Bookmaker odds from OddsPortal (oddsportal.com/results/soccer), pre-match only
- Class priors over 25 EPL seasons: 46.2% home wins, 27.52% draws, 26.32% away wins

## Findings (numbers and facts, not vibes)
- Ensemble Model 4 accuracy 63.19% (precision 0.612, recall 0.563, F1 0.586) vs Dixon & Coles 59.11% vs bookmaker favourite 52.43% vs text-only RF 53.53% — averaged over 3 seasons, 300 games/season test sets.
- Ablating text features from Model 4: −10% F1, −7pp accuracy — the boost is attributable to text.
- Draws: models 1–3 predicted ZERO of 75 test draws; Model 4 predicted 26.5%. Longshots (bookmaker prob <20%): Model 1 38.9%, Model 4 22.2%, models 2–3 none.
- Walk-forward 2018/19: Model 4 accuracy rose +2.23% from week 1 to week 38, attributed to late-season human factors (relegation battles, European qualification, rotation).
- Paper's cited accuracy ceiling: prior statistical models plateaued at ~56.7% and ~59.1%; bookmaker accuracy ~54% football vs 67% NFL vs 74% NBA.
- Beats Schumaker et al. (2016) Twitter-sentiment approach by 13%.
- Leakage note: Exp 2 used a random (non-temporal) 80/20 split — treat draw/longshot numbers as optimistic.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: preview text encodes intangibles — mood, rivalries, rotation, new signings/managers — that stats miss; this is the template for turning beat-writer text into calibrated features.
- COACHING: touchline bans, managerial changes, rotation/lineup news in previews is team-attributable coaching-context signal.
- OTHER: methodology import (entity-allocated per-team text vectors ensembled with stats + market probabilities) for the NFL beat-writer pipeline.

## Engine-actionable? (yes/no + one-line what)
Yes — scrape pre-game beat-writer articles (ESPN team writers, The Athletic, local beats), modernize with sentence-transformer embeddings + NER team-allocation, and stack text-model probabilities with engine + de-vigged market probabilities; numeric gate: reproduce Model 4 ≈63% and the ≥7pp text-ablation drop on an NFL pilot before production.
