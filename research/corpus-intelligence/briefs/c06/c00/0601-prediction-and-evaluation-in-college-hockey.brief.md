# arxiv-program/research/2026-09-21/arxiv-deep/0601-prediction-and-evaluation-in-college-hockey.md
## What it is (1-2 sentences)
Deep read of Whelan & Wodon (2020, arXiv:2001.04226v2): a Bayesian Bradley-Terry construction for NCAA hockey (MAP + Hessian-based Gaussian posterior approximation + importance sampling → posterior predictive probabilities), plus a Bayes-factor-vs-tossup protocol for evaluating probability models on realized tournament sequences, and a posterior-draw upgrade for the Pairwise Probability Matrix. Verdict in file: ADAPT — port the Hessian posterior-uncertainty machinery and Bayes-factor evaluation protocol into GSE's ratings/verification stack; skip the hockey PPM.
## Key metrics/methods (formulas where given, else "not specified")
- BT: θ_ij = e^{λ_i}/(e^{λ_i}+e^{λ_j}) = logistic(λ_i−λ_j); log-likelihood = Σ_i v_i λ_i − ½Σ_{i,j} n_ij ln(e^{λ_i}+e^{λ_j}); Ford iteration for MLE.
- Priors: Haldane (improper); generalized logistic f ∝ ∏ Γ(2η)/Γ(η)²·1/[(1+e^{λ_i})^η(1+e^{−λ_i})^η] (MAP = MLE with 2η fictitious half-win/half-loss games vs a zero-strength team); Gaussian N(0,σ²).
- Hessian: H_ij = −n_ij θ̃_ij θ̃_ji + δ_ij Σ_k θ̃_ik θ̃_ki − prior term; covariance = H^{−1} (Moore-Penrose pseudo-inverse for Haldane's degenerate direction ℓ^{(1)}).
- Bayes factor: B_12 = P(O|M_1)/P(O|M_2); tossup M_0: P(O) = 2^{−n_O}; B_mle,0 = ∏ 2θ̂_{w_g l_g} — each correct call multiplies by up to 2.
- Posterior predictive via N=20,000 Gaussian MC draws; importance sampling reweighting unstable on 59-dof posterior (weight outliers up to 0.00686 vs mean 0.00005 — honest negative result).
## Data sources named
NCAA D-I men's hockey game results (collegehockeynews.com, public/scrapable); 60 teams, ~30–40 games/season; tournaments 2003–2019 (17 tournaments × 15 games = 255 evaluation games). Code: gitlab.com/jtwsma/bradley-terry.
## Findings (numbers and facts, not vibes)
- 2019 tournament: cumulative Bayes factor vs tossup ends slightly below 1 — the American International upset of St. Cloud State wiped out all gains from correct calls.
- Cumulative 2003–2019: BT/KRACH clearly preferred over win-ratio model, which beats tossup; 255 games separate BT from win-ratio but cannot distinguish Haldane vs logistic(η=1) priors.
- Cornell (KRACH 415.3) vs Quinnipiac (93.30): single-game — point 81.7%, Gaussian 80.0%, IS 81.5–81.8%; best-of-three series — point 91.1%, Gaussian 88.2%, IS 89.5–89.9% — uncertainty induces correlation across games (a loss revises the strength gap downward), so point estimates overstate series probabilities materially.
- Limitations: no home-field term; NFL has only 17 games/season (wobblier estimates, needs stronger priors); IS instability; Bayes-factor comparisons need many games.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the Bayes-factor-vs-tossup protocol (B_engine,0 = ∏ 2θ_{winner,loser}, cumulated across seasons, engine vs de-vigged market) is a single-number "is the engine's distribution better than the market's?" answer for the verification dashboard; uncertainty-aware playoff simulation avoids the 91%-vs-88% overconfidence on correlated multi-game outcomes.
## Engine-actionable? (yes/no + one-line what)
yes — fit Bayesian BT with Gaussian prior + home-field parameter on nflverse, serve posterior-predictive win probabilities (Gaussian-approx MC); adopt if posterior-predictive beats point-estimate BT by ≥0.02 nats/game mean log-likelihood on 2015–2025 postseasons; adopt the posterior-draw playoff-simulation upgrade regardless if (A) passes.
