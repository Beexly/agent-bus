# arxiv-program/research/2026-09-21/arxiv-deep/1306-kelly-betting-bayesian-model-evaluation.md
## What it is (1-2 sentences)
A 2026 paper (Michael Beuoy) that pits competing time-updating probabilistic forecast models against each other as Kelly bettors, interpreting bankroll share as Bayesian credibility — a sequential, order-sensitive model-evaluation metric that beats averaged log-loss/Brier at identifying the correct model. Ledger verdict: ADAPT (first Kelly paper in the corpus; fills a documented sizing gap).
## Key metrics/methods (formulas where given, else "not specified")
- Kelly with existing bets: f = p − ((1−p)/o)(1 + w/b), where w = win shares, b = bankroll.
- Market-clearing probability (binary): m = Σ pᵢbᵢ / (1 − Σ pᵢwᵢ); multinomial update: wᵢ′ = (pᵢ/mᵢ) Σₖ mₖwₖ; multinomial market-clearing m = eigenvector of pwᵀ with eigenvalue 1 (PageRank analogy).
- Shown identical to Bayes' theorem under the bankroll-as-credibility interpretation.
- Accuracy metric used: fraction of simulated games where the correct model scores higher.
## Data sources named
- Simulated volleyball-like contests (constant per-point win probability, first to 100, win by 2; 10,000 games/scenario; 11×11 grid of point probs 0.45–0.55).
- Real illustrations: 4 NFL games (ESPN vs nflfastR in-game win probabilities); 2022 MLB division races (FiveThirtyEight vs FanGraphs, weekly, six divisions); 2023 NBA playoffs (FiveThirtyEight vs inpredictable.com, 84 games, 31,000+ plays).
- No code/data stated (author's site inpredictable.com).
## Findings (numbers and facts, not vibes)
- Single-game: wrong-point-prob model — Kelly picks correct model 55.1% vs log-loss/Brier 49.9%; recency-bias incorrect model — Kelly 96.0% vs log-loss 73.1% / Brier 80.2%; non-predictive random-walk — Kelly 74.4% vs 57.6% / 58.3%.
- Iterated 110 scenarios: after 5 games Kelly wins 98 (89%) + 1 tie; after 25 games 76 + 31 ties; after 50 games 61 + 47 ties (only 2 scenarios not at least tied).
- NFL example PHI@SEA 12/18/23: ESPN credibility dropped ~50% → 37% on the game-winning TD.
- NBA 2023 playoffs: FiveThirtyEight ended +13.8% credibility vs inpredictable over 84 games / 31,000+ plays.
- Caveat: credibility can swing hard on single improbable plays (Derrick White tip-in shifted 47%→69% in one play).
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (model evaluation: live model-selection/ensemble-weighting via sequential Kelly contest)
- OTHER (staking: fills the documented Kelly/sizing gap — first Kelly paper in corpus)
- TRUST-SIGNAL (terminal credibility as ensemble weights for forward predictions)
## Engine-actionable? (yes/no + one-line what)
yes — run GSE model variants as competing Kelly bettors over 2024 games with historical odds, carry bankrolls across the season, and use terminal credibility as ensemble weights for 2025 (adoption bar: Kelly ranking predicts 2025 forward-RMSE ranking with Spearman ≥ 0.7).
