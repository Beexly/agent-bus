# docs/arxiv-program/research/2026-09-21/arxiv-deep/1176-predictive-decision-synthesis-for-portfolios.md
## What it is (1-2 sentences)
Deep read of arXiv:2405.01598 (Tallman & West 2024): Bayesian Predictive Decision Synthesis (BPDS) — combination weights tilted via relaxed entropic tilting toward models that score best on the downstream portfolio decision (target return with risk control) rather than one-step forecast accuracy. Verdict: ADAPT — portable to GSE's betting-portfolio layer as the missing link between the probability layer and the staking layer.
## Key metrics/methods (formulas where given, else "not specified")
- Standard discounted BMA: discount α=0.8 weights models by one-step-ahead predictive likelihood.
- BPDS: relaxed entropic tilting — choose tilted model probabilities minimizing KL(tilted || BMA) subject to improving the expected decision score (expected utility of the portfolio decision under target-return constraint); "relaxed" caps how far the tilt can move.
- Greedy forward selection with correlation bar 0.95 (drop near-duplicate models) and state discount 0.9995 selected 7 of 27 candidate model/decision pairs.
- Decision: portfolio weights maximizing expected return subject to target d* in {.05,.10,.15} and risk-aversion φ (φ=0.01 in reported tables).
- GSE mapping: candidate set = engine model components × stake-size/risk-target settings; decision score = realized Kelly log-growth (or ROI) on a selection window; serve tilted weights recomputed monthly for the weekly portfolio.
## Data sources named
Daily log returns for nine currencies (FX), January 2001–December 2021, from public FX data sources. Fit through 2014; model-selection window 2015–2018; holdout evaluation 2019–2021. VAR orders {1,2,3} × volatility discount factors {.94,.98,.995} × target returns {.05,.10,.15} = 27 initial model/decision pairs.
## Findings (numbers and facts, not vibes)
- Example annual Sharpe values for d*=0.05, φ=0.01: selected individual models 2.21, 0.21, 1.98 (wide dispersion across 27 pairs); discounted BMA (α=0.8) 2.17, 0.23, 0.88 across reported settings. (Reader notes these are the file's own table readings.)
- Paper's claim: BPDS-tilted combination improves decision scores over plain BMA by overweighting models good for the decision, not just good one-step forecasters.
- Limitations: transaction costs barely modeled (vig/limits unaddressed — first-order in betting); decision-score improvement sensitive to chosen d* and φ; 7-of-27 selection on 4-year window risks selection overfitting — 2019–2021 holdout is the honest evidence and is one regime; finance signal/noise and cost structure differ from sports betting edges.
- GSE overlap: new capability — repo's model combination weights by predictive accuracy, never by betting-decision performance; prediction-market lane sizes bets given probabilities but does not tilt the probability combiner toward decision utility.
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Decision-tilted combination (tilt component weights toward realized Kelly log-growth, not accuracy): OTHER (betting-portfolio/staking lane).
- Acceptance gate: ADOPT iff 2025 holdout Kelly log-growth exceeds accuracy-weighted baseline by ≥10% relative (or ROI ≥1.0 point at matched stake) with bootstrap p<0.05; hard veto if tilted worst-month drawdown exceeds baseline's by >25%: OTHER.
- Improvement: tilt on risk-aware score (expected Kelly growth − λ·max-drawdown), compare relaxed-entropic-tilt vs hard subset vs fully Bayesian decision-theoretic weighting: OTHER.
## Engine-actionable? (yes/no + one-line what)
yes — Build a decision-score backtester + tilting optimizer that replaces accuracy-weighted component combination with BPDS-tilted weights on realized Kelly log-growth (~1 week, uses picks history + historical odds).
