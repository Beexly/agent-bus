# docs/arxiv-program/research/2026-09-21/arxiv-deep/0468-optimal-team-economic-decisions-in-counterstrike.md
## What it is (1-2 sentences)
Deep-read of Xenopoulos, Coelho & Silva (2021, arXiv:2109.12990v1) — values Counter-Strike team "buy" decisions by counterfactual win-probability deltas (optimal vs. actual choice) and aggregates decision quality into the OSE metric. Ledger verdict: ADAPT the decision-valuation template (not the WP model) to NFL coaching decisions, fixing the paper's causal flaw with overlap trimming.

## Key metrics/methods (formulas where given, else "not specified")
- Game-level win probability: multiclass (CT win / T win / draw) models from round-start state — logistic regression baseline (scores only), XGBoost (Hyperopt-tuned), and a 2-layer ReLU neural network with dropout and softmax output; trained per-map and with one-hot-encoded map features; early stopping (patience 10).
- Decision valuation: for each observed game state, substitute each buy type counterfactually into the WP model; the "optimal" buy is the argmax; cost of the actual decision = WP delta.
- OSE (Optimal Spending Error): paper prints OSE_T = Σ_r (W_{T,r} − O_{T,r})² (Eq. 2) — a sum of squared gaps between actual-decision and optimal-decision WPs — though the prose describes it as a mean-squared error (formula/prose mismatch noted by the reader).
- Buy types: Eco / Low Buy / Half Buy / Hero Low Buy / Hero Half Buy / Full Buy. Model comparison by weighted log-loss (Eq. 1).
- Stated assumptions: WP model correctly specified enough for counterfactual buy substitution (flagged as weakest assumption); team strength captured by included features (no explicit team-strength model); rounds conditionally independent given round-start state; test-period meta stable enough for the time-ordered split to be fair.
- NFL adaptation (file's own spec): restrict counterfactual substitution to game states with overlap — only evaluate decisions where both actual and candidate choices are observed with adequate support (propensity-trimmed); decision types: 4th-down go/kick, 2-point conversions, timeout usage, challenges; aggregate to team-season "Decision Quality Error" (DQE, the OSE analog — defined explicitly as a mean, fixing the sum/mean ambiguity).
- Improvement experiment: model decision sequences via a lightweight game-tree (2–3 plies) and value decisions by full expected-WP rather than myopic round-WP.

## Data sources named
6,538 professional/semi-professional CSGO demofiles from HLTV.org, April 1, 2020 – April 20, 2021. Time-ordered splits: train April–September 2020 (3,308 games); validation October–November 2020 (1,108); test December 1, 2020 – April 20, 2021 (2,122). Schema per game: round-start team scores, score differential, equipment values, team money, spending decisions, buy types, map; target = game outcome. Parsed dataset not released. NFL transfer spec names nflverse play-by-play 2020–2025 + an existing nfl4th-style/GSE WP model.

## Findings (numbers and facts, not vibes)
- Weighted log-loss (Table 2, exact): logistic regression 0.793; XGBoost 0.739; neural network 0.736; OHE-map XGBoost 0.730; OHE-map NN 0.732. OHE-map XGBoost wins.
- Observed round win rates by buy type: Eco 3%, Low Buy 27%, Half Buy 34%, Hero Low Buy 25%, Hero Half Buy 48%, Full Buy 59%.
- CT eco rounds: the predicted-optimal buy was low/half buy in over 90% of cases, with ~3% average lost win probability per suboptimal eco.
- Second round after losing the pistol: actual T buys 27% eco / 10% low / 63% half vs optimal 0% / 0% / 100%; actual CT buys 6% / 3% / 91% vs optimal 4% / 0% / 96%.
- Team decision quality: OSE correlates with round win rate at r = −0.45 (better decisions → more wins).
- Held-out-map experiment: more-data (fine-tuned) models matched or beat prior per-map models on 6 of 7 maps.
- Leakage/limitations: counterfactual substitution into an associational WP model is not a causal estimate — buy decisions correlate with team strength and unobserved game state ("optimal" buy may just be the buy good teams choose); OSE's correlation with HLTV rank may reflect competition tier rather than decision quality; pro/semi-pro only; rare buy types have thin support; CSGO economy specifics don't transfer.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Decision-valuation template: value each coaching decision (4th-down go/kick, 2-pt conversions, timeout usage, challenges) by the WP delta between actual and optimal choice; aggregate to team-season Decision Quality Error (DQE) — COACHING (directly targets coaching-decision quality; INFERENCE: no QB-specific findings in the paper, but go/kick decisions interact with QB quality).
- Overlap/propensity trimming to fix the paper's causal flaw; game-tree (2–3 plies) sequence valuation — OTHER (methodological).
- "Coaching decisions cost Team X ~Y wins" weekly/edge-sheet narrative product — COACHING (content product).

## Engine-actionable? (yes/no + one-line what)
Yes — implement the overlap-trimmed DQE on 2022–2024 NFL 4th-down decisions (2–3 engineer-weeks, WP model already exists) and adopt as a coaching-decision metric only if cross-season stability r ≥ 0.3 and it adds ΔR² ≥ 0.02 to next-season wins over the EPA/luck baseline.
