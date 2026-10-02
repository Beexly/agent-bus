# docs/arxiv-program/research/2026-09-21/arxiv-deep/0468-optimal-team-economic-decisions-in-counterstrike.md
## What it is (1-2 sentences)
Deep-read ledger of Xenopoulos, Coelho & Silva (2021) "Optimal Team Economic Decisions in Counter-Strike" (arXiv:2109.12990v1): trains game-level CSGO win-probability models and values round-by-round equipment "buy" decisions by the WP delta of actual vs. optimal choice, aggregating into a per-team OSE (optimal-spending-error) decision-quality metric. Verdict: ADAPT the decision-valuation template to NFL coaching decisions (4th downs, 2-pointers, timeouts, challenges), with the paper's associational-causal flaw fixed via overlap trimming.
## Key metrics/methods (formulas where given, else "not specified")
- Win-probability model: multiclass (CT win / T win / draw) from round-start state; logistic baseline, XGBoost (Hyperopt-tuned), 2-layer ReLU NN with dropout + softmax; per-map and OHE-map variants; early stopping (patience 10); compared by weighted log-loss.
- Decision valuation: substitute each buy type counterfactually into the WP model; "optimal" buy = argmax; cost = WP delta of actual vs. optimal.
- OSE_T = Σ_r (W_{T,r} − O_{T,r})² over rounds r for team T (paper prints a sum though the prose calls it a mean — mismatch noted).
- Buy types: Eco / Low Buy / Half Buy / Hero Low Buy / Hero Half Buy / Full Buy.
## Data sources named
6,538 professional/semi-professional CSGO demofiles from HLTV.org, April 1, 2020 – April 20, 2021 (train April–Sept 2020: 3,308 games; val Oct–Nov 2020: 1,108; test Dec 2020 – April 2021: 2,122). Parsed dataset not released; demo parsing builds on the authors' 2020 CSGO parser.
## Findings (numbers and facts, not vibes)
- Weighted log-loss: logistic regression 0.793; XGBoost 0.739; NN 0.736; OHE-map XGBoost 0.730 (winner); OHE-map NN 0.732.
- Observed round win rates: Eco 3%, Low Buy 27%, Half Buy 34%, Hero Low Buy 25%, Hero Half Buy 48%, Full Buy 59%.
- CT eco rounds: predicted-optimal buy was low/half buy in >90% of cases, with ~3% average lost WP per suboptimal eco.
- Second round after losing the pistol: actual T buys 27% eco / 10% low / 63% half vs. optimal 0% / 0% / 100%; actual CT 6% / 3% / 91% vs. optimal 4% / 0% / 96%.
- OSE correlates with round win rate at r = −0.45 (better decisions → more wins; confounded with competition tier).
- Held-out-map experiment: more-data (fine-tuned) models matched or beat per-map specialists on 6 of 7 maps.
- Fatal limitation flagged: counterfactual buy substitution into an associational WP model is not a causal estimate (buy choice correlates with team strength); OSE ranking may reflect who teams face, not decision quality.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, OTHER)
- Per-decision WP-delta valuation + team-level decision-quality metric (DQE, the OSE analog) for NFL coaching: 4th-down go/kick, 2-point conversions, timeout usage, challenges — COACHING.
- Feed into "edge-sheet narrative" ("coaching decisions cost Team X ~Y wins") and offseason coaching-decision report — COACHING.
- Improvement: extend single-decision substitution to 2–3-ply game trees (a 4th-down call changes downstream state) — COACHING.
- No QB behavior, OL, trust-quote, or scheme content in the file.
## Engine-actionable? (yes/no + one-line what)
Yes — build overlap-trimmed DQE for 4th-down decisions on nflverse 2022–2024 (evaluate only game states with adequate support for both actual and candidate choices), test cross-season stability (target r ≥ 0.3) and ΔR² ≥ 0.02 on next-season wins over EPA/luck; adopt iff both gates pass.
