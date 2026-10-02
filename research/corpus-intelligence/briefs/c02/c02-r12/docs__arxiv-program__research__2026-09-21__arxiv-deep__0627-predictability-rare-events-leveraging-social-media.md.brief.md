# docs/arxiv-program/research/2026-09-21/arxiv-deep/0627-predictability-rare-events-leveraging-social-media.md

## What it is (1-2 sentences)
A PLOS ONE 2015 paper (arXiv:1502.05886v1) testing whether pre-game Twitter supporter sentiment in the 6 hours before kickoff predicts soccer upsets — the games where bookmaker odds are hardest to set — using a Gaussian Naive Bayes classifier on per-team mood features across 56 potential-upset games. It reports AUROC ~0.73–0.79 and an 8.57% average marginal profit in betting simulation, but everything rests on n=56 with in-sample cross-validation.

## Key metrics/methods (formulas where given, else "not specified")
- Potential upset score: PU(g) = (O^g_max − 1)/(O^g_min − 1); realized upset score U(g) = (O^g − 1)/(O^g_min − 1); games with PU(g) > θ, θ = 5 (results consistent for 3 ≤ θ ≤ 5) are "potential upsets."
- Marginal profit: P = (r − b)/b (paper equation 3), r = total payoff, b = total staked.
- Feature vector P(g): discrete representation of average mood of each team's supporters over the 6 pre-game hours (12 time windows tested; sentiment via lexicon scoring — paper's §3).
- Classifier: Gaussian Naive Bayes (best among scikit-learn classifiers tried; classifier optimization explicitly not the point).
- Validation: stratified 3-fold cross-validation on the 56 potential-upset games (FIFA and live sets evaluated separately); baseline = reshuffled-odds random model (≈50% accuracy/AUROC).
- Betting simulation: 100 rounds — stratified 3-fold CV each round, $1 per test-set game: predict "no upset" → $1 on the favorite; predict "upset" → $0.50 on underdog win + $0.50 on draw; compared against four fixed strategies (always favorite / always anti-favorite / always underdog / always tie).

## Data sources named
2014 FIFA World Cup (64 games; Twitter gardenhose 10% sample from Indiana University, June 12 – July 13, 2014; keyword-filtered by FIFA abbreviations, team names, hashtags); live-monitoring dataset (full Twitter stream, real-time collection, October 25 – November 26, 2014, covering EPL, Serie A, La Liga, Bundesliga, and the 2014 UEFA Champions League). 56 potential-upset games total (25 World Cup + 31 live-monitoring). Tweet corpora not re-released; no code stated.

## Findings (numbers and facts, not vibes)
- **World Cup (25 games):** accuracy 0.7898, precision 0.8512, recall 0.5431, F1 0.6631, AUROC 0.7286. [TRUST-SIGNAL]
- **Live-monitoring (31 games):** accuracy 0.8363, precision 0.5833, recall 0.6667, F1 0.6190, AUROC 0.7887. [TRUST-SIGNAL]
- **Betting simulation:** average marginal profit 8.57%; odds-reshuffled control 8.43%; all four fixed baseline strategies lose money (the safest, always-tie, still loses). [TRUST-SIGNAL, OTHER]
- **Signal significance:** U-test on sentiment scores significant at p < 0.0001 across time windows (Tables 2–3); random reshuffle ≈50% on both metrics, confirming the signal is real, not a class artifact. [TRUST-SIGNAL]
- **Limitations in-file:** n = 56 games total — the classifier, profit, and AUROC are all estimated on 56 potential upsets; CV is within the same 56-game pool (optimism inherited); bookmaker margins and stake limits ignored; 2014 Twitter bot/lexicon noise unquantified; the NFL has no draws, so the $0.50/$0.50 underdog+draw betting split needs redesigning, not just porting. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Pre-game fan-sentiment divergence as a contrarian upset feature (X/Reddit mood in the 6 hours before kickoff): TRUST-SIGNAL — entirely new NLP/sentiment lane in the corpus; nearest neighbor is consensus-odds wisdom-of-the-crowd (ledger 0629), but from fans rather than books.
- PU(g) upset-score construction from moneyline odds ratios: OTHER — NFL "potential upsets" = moneyline odds-ratio games above a tuned θ.
- Sentiment × line-movement interaction (away-fan optimism divergence with a sticky line): TRUST-SIGNAL — INFERENCE: isolates the mispricing cases the paper's independent mood features blur.
- No-draw NFL adaptation (underdog moneyline stake-or-pass rule): OTHER — two-outcome betting rule must be rebuilt, not ported.

## Engine-actionable? (yes/no + one-line what)
Yes — run a strict out-of-sample pilot: X/Reddit NFL team-community sentiment in the 6 hours before kickoff (2022–2023 train, locked 2024 test), mood-divergence classifier vs upset; adopt iff locked-test AUROC ≥ 0.60 with positive flat-stake profit, since the paper's 8.57% rests on in-sample CV over n=56.
