# arxiv-deep/1472-forecastbench-sim-simulated-world-forecasting.md
## What it is (1-2 sentences)
Deep read of Lee, Merrill & Karger (2026), arXiv:2606.18686: a simulated-world (Freeciv) forecasting benchmark that resolves unconditional, observational, and interventional forecasts via controlled simulation rollouts. Verdict in file: ADAPT — GSE can resolve engine forecasts against repeated stochastic rollouts of historical game states instead of waiting for real outcomes.
## Key metrics/methods (formulas where given, else "not specified")
- Binary scored with Brier = (p − o)²; continuous forecasts elicit p10/p25/p50/p75/p90, scored with normalized CRPS from quantile elicitation (normalization in paper's appendix).
- Harness: generate worlds with rule-based agents → freeze at turn 60 → structured report → pose questions about turns 90–270 (horizons H1–H7) → resolve by rolling out simulation; interventional questions via savegame mutation (do-operator).
- Model-skill validation: Spearman correlation of model rankings on ForecastBench-Sim vs real-world ForecastBench.
## Data sources named
Freeciv game rollouts: 4,655 binary questions, 2,310 continuous questions, plus 562 H0 binary and 165 H0 continuous report-reading checks. 30 binary models and 31 continuous models evaluated; human pilot 10 participants × 24 continuous questions. Existing interventions: change government to Republic; add 500 treasury gold.
## Findings (numbers and facts, not vibes)
- Curated models: Brier 0.220–0.313; normalized CRPS 0.283–0.590.
- Sim-to-real skill correlation: Spearman ρ = +0.43 (p = 0.018, N = 30) — modest but significant; vs Epoch capability benchmark |ρ| = 0.48 (p = 0.007).
- Horizon degradation: Brier 0.205 at H1 → 0.264 at H7 (peak 0.287 at H5); CRPS 0.134 → 0.639 (4.8×).
- Limitations: fixed rules/rule-based agents; question wording measurably affects elicited forecasts; only two interventions powered; simulated resolution is only as good as the simulator.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- **OTHER:** new calibration capability — no existing GSE ledger proposes simulator-resolved calibration (GSE calibration lane covers conformal prediction and probability calibration on real outcomes only).
- **TRUST-SIGNAL:** counterfactual/interventional tests (QB injury, weather shift) calibrate where real data is too sparse — "the tails are where the bankroll lives or dies."
- **OTHER:** simulator as fast-resolution proxy for long-horizon forecasts, enabling calibration-curve measurement without waiting seasons.
## Engine-actionable? (yes/no + one-line what)
**Yes** — build a drive-level Markov game simulator; freeze historical halftime states, pose engine forecasts, resolve by Monte-Carlo rollout, score Brier/CRPS; accept as valid only if sim-resolved calibration matches real-outcome calibration within ±0.05 slope on 2024.
