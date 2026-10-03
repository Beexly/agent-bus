# arxiv-program/research/2026-09-21/arxiv-deep/0495-the-impacts-of-increasingly-complex-matchup.md

## What it is (1-2 sentences)
arXiv:2511.17733v1 (Mott, Bradshaw, Grimsman, Archibald, BYU, 2025) compares progressively more complex hierarchical Bayesian log5 baseball matchup models (pitcher-only → +batter → +recency → +base-running), evaluating them on prediction quality AND simulated win value. Verdict: ADAPT — port hierarchical log5 matchup models with Marcel-style recency weighting for NFL unit-vs-unit interactions, and adopt the decision-simulation evaluation gate.

## Key metrics/methods (formulas where given, else "not specified")
- (1) state_{i+1} ~ f(state_i, pitcher, batter).
- (2) Handedness offsets: a_i(n,h) = â_i(n)^{o_i(n)} if h=0 (opposite), â_i(n)^{1/o_i(n)} if h=1 (same); o_i ~ Gamma prior, â_i ~ Beta prior.
- (3) Log5 combination: S_i(n,m,h) = P_i·ln[a_i/(1−a_i)] + B_i·ln[b_i/(1−b_i)] − (P_i+B_i−1)·ln[c_i/(1−c_i)], P_i, B_i ~ Uniform(0.25, 1.75), 1 ≤ P_i+B_i ≤ 2 (negative league weight creates "extreme factor" amplifying extreme-on-extreme matchups).
- (4) x_i = 1/(1+e^{−S_i}); (5) X ~ Categorical(x_i/Σ_j x_j); (6) posterior-predictive SB rate = (α+x)/(α+β+n).
- Four models: (P) pitcher-only; (PB) + learned batter rates; (PBR) + recency — 4 chains over 500-PA blocks, weights ~40%/30%/20%/10% (Marcel-inspired), max 2,000 PAs/player; (BR) + base-running (216 transitions per each of five SB-tendency strata).
- NUTS sampling, posterior means for prediction; each model embedded in a "pseudo-full game manager" solved by approximate subgame-perfect Nash equilibrium (substitutions, intentional walks). Win value: beta-posterior win-rate differences normalized to added wins per 162-game season.

## Data sources named
pybaseball/Statcast MLB plate appearances (train March 2015–June 2024, validation July–October 2024); real 2024 playoff context from MLB Stats API (actual batting orders, starting pitchers, rosters; bench/bullpen curated). 9 PA outcomes (K, BB, HBP, groundout, flyout, 1B, 2B, 3B, HR); 24 base-out states; 216 outcome×state transitions. Simulation: 43 2024 playoff games replayed 1.6M times per model; odds from OddsPortal consensus lines.

## Findings (numbers and facts, not vibes)
- Outcome log-loss / GMP: P 1.788/16.73%; PB 1.772/17.00%; PBR 1.771/17.02%; BR 1.771/17.02%. Transition: P 1.171/31.00%; PB 1.168/31.09%; PBR 1.168/31.10%; BR 1.166/31.15%. Vs BR-as-ground-truth outcome GMP: P 16.48%, PB 16.79%, PBR 16.82%.
- Simulation: P loses ~1 win/season vs better models; PBR ≈ BR essentially tied. GMP gap PBR−P only 0.15pp (0.34pp vs BR-ground-truth) yet buys ~1 added win/season — a top-50 position-player-level impact (~1 WPA).
- Core dissociation: recency barely changed log-loss but had a notable win-probability impact (PBR clearly beat PB in simulation); base-running improved log-loss but had ~zero decision impact.
- Betting (43 games, $1,000 bets where model P(win) beat consensus-implied beyond overround+cushion): 15/43 within overround (no bet); 28 bets at 0% cushion → −15.5% ROI; 3% → +9.1% (16 bets, 90% CI [−21%,+48%]); 4.5% → +13.5% (10 bets); 6% → +29.4% (5 bets); 7.5% → +52.0% (3 bets); 9% → +128.0% (2 bets); 9.5% → +125% (1 bet). Model never bet home team — no home-field advantage term (acknowledged flaw).
- Betting results statistically unsupported (90% CI at 3% cushion includes negative; 128% ROI on 2 bets is noise).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- [SCHEME] Hierarchical log5 matchup model ports directly to NFL unit-vs-unit interactions: QB vs defensive unit (and OL vs DL on run plays), with scheme-matchup offsets (man vs zone coverage splits, blitz-rate splits) replacing the handedness offsets.
- [QB-BEHAVIOR] Recency weighting (40/30/20/10 chains over ~2,000-play windows) maps to QB-form and defensive-unit form weighting — per-play success/turnover/explosive-play probabilities with trailing windows.
- [OL] OL vs DL run-game matchup as a second unit-pair instance of the same log5 template; INFERENCE: run-game matchups may have longer effective memory (continuity) than pass-game matchups (form/injuries turn over faster) — test learned per-matchup-type decay instead of fixed 40/30/20/10.
- [OTHER] Methodological gate for GSE: evaluate every feature by decision-WPA (simulated added wins), not predictive loss alone — the paper shows log-loss misranks features by decision value. Any feature with log-loss gain but zero decision-WPA gain is deprioritized (the base-running lesson).
- [COACHING] The game-manager Nash-equilibrium framing (substitutions, intentional walks) is adjacent to 4th-down/go-for-it decision models; feed matchup probabilities into GSE's existing 4th-down model and measure expected win-probability added — replicating the paper's simulation protocol.

## Engine-actionable? (yes/no + one-line what)
Yes — build hierarchical Bayesian log5 unit-matchup models (QB vs defense, OL vs DL) with 40/30/20/10 recency weighting on nflverse 2015–2024, and adopt dual-metric reporting (predictive GMP + simulated added wins) as a standing feature gate.
