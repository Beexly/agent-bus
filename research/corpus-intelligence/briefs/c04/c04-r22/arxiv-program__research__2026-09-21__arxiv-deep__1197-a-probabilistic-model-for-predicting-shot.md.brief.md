# docs/arxiv-program/research/2026-09-21/arxiv-deep/1197-a-probabilistic-model-for-predicting-shot.md

## What it is (1-2 sentences)
A full-text ledger of Wheatcroft & Sienkiewicz (2021), arXiv:2101.02104v1 — a parametric team shot-success rating model for pre-match P(score|shot) estimated with half-life-weighted MLE, honest calibration diagnostics (reliability diagrams with consistency bars, Platt scaling, climatology blending), and proper-scoring-rule evaluation against betting markets. Verdict: ADAPT — adopt the rating-decay + blending + reliability-gate pattern and the odds-augmentation double-counting test for GSE's NFL probability pipeline.

## Key metrics/methods (formulas where given, else "not specified")
- Shot-success ratings: p(G_h) = 1/(1+e^(−m_h)), m_h = c + h + ½(a_i + d_j); p(G_a) = 1/(1+e^(−m_a)), m_a = c − h + ½(a_j + d_i); 2T+2 parameters (team attacking a_i, defensive d_i with Σa=Σd=0, constant c, home advantage h) fit by half-life-weighted MLE (Matlab fmincon, zero init): w_time,m(x_m) = (1/2)^(x_m/H); likelihood L = Π_m φ(p_m, O_m)^{w_time,m}.
- Overfitting fixes: Platt scaling p̃ = 1/(1+exp(A+bp)); climatology blending p̃ = αp + (1−α)p_c with p_c = ΣG_m/ΣS_m (league-average shot success), α fit by minimizing mean ignorance — blending wins.
- Pipeline: GAP ratings (λ-weighted residual updates via fminsearch, Nelder-Mead) predict shot volumes Ŝ_h, Ŝ_a; expected goals E_h = Ŝ_h·P(G_h); ordered logistic regression on V = E_h − E_a → match outcome; logistic regression on V = E_h + E_a → P(over 2.5); odds-implied probabilities optionally added as regressors.
- Scoring: Brier = Σ(p_i − o_i)²; RPS = Σ_{i=1}^{r−1}(Σ_{j=1}^{i}(p_j − o_j))²; Ignorance = −log_2(p_y) — all proper; skill measured relative to climatology baseline (negative = skillful).
- Kelly stake proportion — published-paper typo verified 2026-09-21 against the arXiv LaTeX source: paper prints f_i = max((o_i + p̂_i − 1)/(o_i − 1), 0), but correct Kelly for decimal odds is f_i = max((o_i·p̂_i − 1)/(o_i − 1), 0) — the "+" in the numerator must be a multiplication. Implemented verbatim, the printed formula bets on negative-edge outcomes (e.g., o=2, p̂=0.4 gives f=1.4 instead of 0) and overbets positive edges (o=2, p̂=0.6 gives f=1.6 instead of 0.2). Stakes normalized so mean stake = 1 for comparability with level stakes.

## Data sources named
- football-data.co.uk repository (public): 162,435 matches across 22 European leagues since 2000/01 (through 2018/19); 77,124 with shots/corners data; 62,218 after excluding a 6-match-per-team-season burn-in; per-match shots, shots on target, corners, goals; bookmaker odds (match outcome, over/under 2.5, Asian handicap) from multiple bookmakers via BetBrain — maximum odds used for profit calculations. Example table: EPL 9,120 matches / 7,220 with data / 5,759 post-burn-in.
- Matlab (fmincon/fminsearch); no code link stated. Reliability diagrams use Bröcker & Smith (2007a) 95% consistency bars.

## Findings (numbers and facts, not vibes)
- Raw shot-success forecasts are overdispersed (high forecasts too high, low too low) and fail to beat climatology on Ignorance/Brier at every half-life — diagnosed as overfitting from 2T+2 simultaneous parameters.
- After calibration: Platt and blending both produce negative relative Ignorance/Brier (skillful); blending consistently better; optimal half-life H = 60 days for shot-success skill.
- Match outcome (no odds regressor): shot-success model adds skill at all H (negative relative Ignorance/RPS); optimal H = 30 days; but betting profit slightly decreases under both level stakes and Kelly — skill ≠ profit.
- Match outcome (with odds-implied regressor): relative skill positive (counterproductive) and profit falls — authors' interpretation: shot-success information is already efficiently in the match odds (double counting).
- Over/under 2.5 (no odds): skill improves at all H; major profit improvement under both strategies but still slightly negative overall; optimal H = 90 days.
- Over/under 2.5 (with odds-implied): skill improves (negative relative scores) and profit rises for most H; optimal H = 300 days — longer memory helps totals.
- Market-efficiency implication: the over/under 2.5 market does not fully account for team shot-conversion ability; the match-outcome market appears to.
- 62,218 match-outcome and 53,447 over/under-2.5 forecasts, each from parameters fit on all prior matches (expanding window, day-before cutoff; no lookahead). Profit results use maximum available odds (best-case execution, no limits/slippage); still negative for O/U 2.5. Half-life H selected on the same evaluation set (Figures 1, 3, 5–8) — mild selection bias in the reported optima.
- GSE implementation spec: (1) half-life-weighted MLE for team efficiency parameters (red-zone TD, third-down, explosive-play rate allowed), H swept in games; (2) climatology blending as standard shrinkage for high-parameter-count ratings, α fit on mean ignorance; (3) reliability-diagram gate with consistency bars before any rating model touches the ensemble; (4) odds-augmentation test — each new signal must improve relative Ignorance/RPS alongside odds-implied probabilities, else it is double-counted.
- Improvement experiments: (1) player-level conversion ratings (shot location × team/player ability with half-life decay) — for GSE the analog is situation+personnel-conditioned conversion ratings (e.g., QB-specific third-down ratings blended with team ratings); (2) adaptive half-life fit per market/target by cross-validated ignorance.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Half-life-weighted team-efficiency ratings + climatology blending + reliability-diagram gate → OTHER (rating/decay/calibration methodology; soccer-specific paper, no QB-behavior/coaching/OL/scheme content).
- The odds-augmentation double-counting test and the market-efficiency asymmetry (match-outcome market appears efficient; O/U 2.5 market does not fully price conversion ability) → OTHER (market-efficiency methodology; soccer-only evidence, analogical transfer to NFL).
- The verified Kelly-formula typo correction → OTHER (staking-correctness fix; applies to any Kelly reimplementation in GSE).

## Engine-actionable? (yes/no + one-line what)
Yes — (1) adopt half-life-weighted MLE + climatology blending (α fit on mean ignorance) + reliability-diagram gate for all GSE team-efficiency ratings, and run the odds-augmentation double-counting test per signal; (2) fix the Kelly numerator to (o_i·p̂_i − 1) wherever GSE reimplements staking, since the printed formula bets negative-edge outcomes.
