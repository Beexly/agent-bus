# arxiv-program/research/2026-09-21/arxiv-deep/1463-multi-objective-probabilistic-forecast-combination.md

## What it is (1-2 sentences)
Full-paper read (8 pages) of Wang, Kang, Spiliotis & Petropoulos (2026), arXiv:2606.04900 — combining probabilistic forecasts via linear CDF pools with weights optimized jointly on a proper probabilistic score (DRPS) and a downstream operational cost using NSGA-III. Ledger verdict: ADAPT.

## Key metrics/methods (formulas where given, else "not specified")
- Combined predictive CDF: **F(x) = Σᵢ wᵢ Fᵢ(x), wᵢ ≥ 0, Σᵢ wᵢ = 1** (linear opinion pool on CDFs).
- Statistical objective: DRPS (Discrete Ranked Probability Score) — discrete-outcome analogue of CRPS, proper for count predictive distributions; no closed form quoted in read notes.
- Operational objective: inventory cost from a single-period newsvendor-style ordering decision applied to the combined predictive distribution over the validation window.
- Optimizer: NSGA-III (Deb & Jain) — reference-point-based multi-objective evolutionary algorithm maintaining a population of candidate weight vectors and returning a Pareto front over (DRPS, cost); final combination = Pareto knee. Two variants tested: NSGA-III-c (constrained) and NSGA-III-hs (hybrid-seeded).
- Baselines compared: DRPS-opt (optimize DRPS only), Cost-opt (optimize cost only), simple equal-weight average.

## Data sources named
- M5 (Walmart daily retail demand, public via Kaggle): 30,490 daily series (3,049 products × 10 stores), 1,941 days; 60.1% of observations are zeros; 1,587 "problematic series" excluded, leaving 28,903 series used. Splits: train through day 1,857 / validation days 1,858–1,913 / test days 1,914–1,941.
- RAF (internal retailer aggregate forecast, available on request): 5,000 monthly series × 84 periods; splits 72 / 6 / 6.

## Findings (numbers and facts, not vibes)
- NSGA-III combinations achieve lower DRPS than Cost-opt and lower inventory cost than DRPS-opt, sitting on the Pareto frontier ahead of the simple average on both datasets (directional result from the paper's tables; exact cost tables not transcribed in read notes).
- The NSGA-III knee solution strictly dominates the single-objective weights on the opposing objective while remaining near-optimal on the fitted one.
- The 60.1% zero rate in M5 is what makes DRPS the appropriate proper score for the sparse-count regime.
- Limitations stated in read: weights fit on a single fixed validation window (days 1,858–1,913) — nonstationarity outside the window unhandled, refit cadence not studied; NSGA-III is heavy for a low-dimensional weight vector (simpler scalarized grid search may reach the same knee cheaper — not ablated); single-period inventory framing only; 1,587 excluded M5 series could bias reported gains.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER — model-ensemble combination for GSE's pick models: GSE currently combines models for accuracy first and sizes bets after (Kelly/sizing lane ledgers 1368, 1500); this paper's move is to make the downstream utility (bankroll growth / CLV) a first-class objective in the combination itself. No existing corpus work jointly optimizes combination weights on calibration AND a downstream money objective — an extension, not a duplicate.

## Engine-actionable? (yes/no + one-line what)
Yes — build per-model predictive distributions for NFL game outcomes (spread/ML/total), fit linear-pool weights via NSGA-II/III on (log-loss/CRPS, Kelly-simulated bankroll growth with 0.25-fraction cap) over a rolling validation season, deploy the knee weight; acceptance gate: on 2024 test season, knee-weight ROI ≥ log-loss-optimal weights' ROI while log-loss stays within 2% of log-loss-optimal.
