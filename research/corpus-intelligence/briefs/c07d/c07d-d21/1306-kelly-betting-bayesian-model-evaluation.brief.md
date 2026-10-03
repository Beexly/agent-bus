# arxiv-program/research/2026-09-21/arxiv-deep/1306-kelly-betting-bayesian-model-evaluation.md

## What it is (1-2 sentences)
Deep-research ledger (full 31-page PDF read) of arXiv:2602.09982v1 (Beuoy, 2026): "Kelly Betting as Bayesian Model Evaluation" — each competing forecast model acts as a Kelly bettor with bankroll; bankroll share is interpreted as Bayesian credibility (posterior probability the model is correct), giving a real-time, order-sensitive, pre-outcome model-evaluation metric. Verdict ADAPT (replacement for REJECT 1103).

## Key metrics/methods (formulas where given, else "not specified")
- Kelly with existing bets: `f = p − ((1−p)/o)(1 + w/b)`, where w = win shares, b = bankroll.
- Market-clearing probability (binary): `m = Σ pᵢbᵢ / (1 − Σ pᵢwᵢ)`.
- Multinomial update: `wᵢ′ = (pᵢ/mᵢ) Σₖ mₖwₖ`.
- Market-clearing multinomial odds: m is the eigenvector of pwᵀ with eigenvalue 1 (PageRank analogy); credibility vector c = wᵀm is the eigenvector of the self-evaluating matrix S = wᵀp. Shown identical to Bayes' theorem under bankroll-as-credibility.
- Procedure: (1) compute market-clearing probability from bankrolls, win shares, latest estimates; (2) convert to odds, compute each bettor's Kelly wager fraction; (3) mark portfolios to market for real-time credibility; (4) update bankrolls/win shares; (5) repeat as new information arrives; (6) settle at outcome.
- Assumptions: fair market odds (no vig); Kelly bettors maximize expected log wealth; bankrolls sum to 1; win shares sum to 0 (zero-sum).
- Validation metric: fraction of 10,000 games where the correct model scores higher ("accuracy").

## Data sources named
- Simulated volleyball-like contests: constant per-point win probability, first to 100 points (win by 2); 10,000 simulated games per scenario; iterated contest over 11×11 grid of point probabilities {0.45..0.55}, 50 games per sequence, 1,000 simulations per combination.
- Real illustrations (not formal tests): 4 NFL games with ESPN vs Open Source Football (nflfastR) in-game win probabilities; 2022 MLB division races (FiveThirtyEight vs FanGraphs, weekly, six divisions); 2023 NBA playoffs (FiveThirtyEight vs inpredictable.com, 84 games, 31,000+ plays).
- Code/data: none stated (author's site inpredictable.com).

## Findings (numbers and facts, not vibes)
- Single-game scenarios, correct model identified ("accuracy"): wrong-point-prob (0.50 vs 0.53): Kelly 55.1% vs log-loss/Brier 49.9%; recency-bias incorrect model: Kelly 96.0% vs log-loss 73.1% / Brier 80.2%; non-predictive random-walk model: Kelly 74.4% vs log-loss 57.6% / Brier 58.3%.
- Iterated 110 scenarios: after 1 game Kelly wins 50 (45%); after 5 games 98 (89%) + 1 tie; after 25 games 76 + 31 ties; after 50 games 61 + 47 ties (only 2 scenarios not at least tied). Bankrolls carry over (sequential Bayesian updating).
- NFL example: PHI@SEA 12/18/23 — ESPN credibility dropped from ~50% to 37% on the game-winning TD.
- NBA 2023 playoffs: FiveThirtyEight ended +13.8% credibility vs inpredictable over 84 games / 31,000+ plays.
- Credibility can swing hard on single improbable plays: the Derrick White tip-in shifted 47%→69% in one play — desirable Bayesian behavior but high variance for short contests.
- Acceptance gate (ledger §13): ADOPT as GSE's live model-selection metric if the Kelly contest's 2024 ranking predicts the 2025 forward-RMSE ranking (Spearman ≥ 0.7 across ≥5 variants); REJECT if ranking is unstable under small probability perturbations or disagrees with log-loss without forward justification.
- Improvement experiment: add fractional-Kelly (half-Kelly) bettors + vig-aware market-clearing (mᵢ summing to >1), test robustness of evaluation ranking to bettor risk-aversion and real book margins (paper assumes full Kelly + fair odds).
- Reproducible test: 2024 NFL season, GSE weekly win-probability outputs for 2–3 model variants vs closing lines; success = Kelly ranking agrees with log-loss on ≥80% of variant pairs and identifies the variant with best 2025 forward RMSE.
- Limitations: stylized simulations (constant point probability, no real game dynamics; "incorrect" models are author-crafted); real-data sections are illustrations, not controlled comparisons; market-clearing math assumes fair odds, real books have vig; single author, independent, not peer-reviewed.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing + ensemble programs): directly fills the documented corpus gap `~/workspace/arxiv-sweep/existing-research-map.md` GAP 1 — "Kelly criterion / optimal bet sizing under uncertainty — mentioned 12× in repo, zero papers read"; first Kelly paper in the corpus. It complements GSE's calibration and ensemble lanes with a live model-selection/ensemble-weighting mechanism: terminal bankroll credibility as ensemble weights.
- OTHER (model-selection mechanism): the mark-to-market credibility gives pre-outcome, order-sensitive differentiation that average log-loss/Brier cannot — the wrong-point-prob result (55.1% vs 49.9%) shows Kelly discriminates near-identical models better, and the recency-bias result (96.0% vs 73.1%/80.2%) shows it strongly penalizes models that chase recent information — a property the GSE engine wants in variant selection. Serves the calibration/sizing and model-validation programs.
- OTHER (companion to ledger 1230): both papers use betting as an evaluation/decision device — 1306 evaluates *models* as Kelly bettors; 1230 evaluates *edges* via betting e-processes. Together they define a betting-based model-evaluation stack: 1306 for live model comparison, 1230 for deadline-bounded edge confirmation.
- CONTRADICTION (vs ledger 1357, same sweep): 1357's Algorithm 2 FTL fair-odds price converges between the book's belief and the crowd's average — a market-consensus benchmark for probabilities; 1306's market-clearing m is the analogous internal-model consensus. Both assume fair odds (no vig) — GSE applications must add vig-awareness per 1306's own improvement experiment.
- UNCERTAIN: no code/data links given — the binary + multinomial evaluator must be reimplemented from the paper (numpy eigenvector solve for m); numerical fidelity to the author's results is unverified until the §12 reproducible test is run.

## Engine-actionable? (yes/no + one-line what)
Yes — implement the Kelly-contest evaluator (binary + multinomial) and run GSE's model variants as competing bettors over 2024 games with carried-over bankrolls, using terminal credibility as 2025 ensemble weights (acceptance gate: Spearman ≥ 0.7 vs 2025 forward-RMSE ranking across ≥5 variants).

## Referenced files/papers/datasets
Papers: arXiv:2602.09982v1; cited method Kelly (1956). Data: nflfastR (Open Source Football) in-game win probabilities; FiveThirtyEight, FanGraphs, inpredictable.com. GSE-internal: `~/workspace/arxiv-sweep/existing-research-map.md` (GAP 1); improvement spec references "1169-style logarithmic pooling".
