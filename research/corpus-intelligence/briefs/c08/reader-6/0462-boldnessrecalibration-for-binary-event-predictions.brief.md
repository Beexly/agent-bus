# docs/arxiv-program/research/2026-09-21/arxiv-deep/0462-boldnessrecalibration-for-binary-event-predictions.md

## What it is (1-2 sentences)
Guthrie & Franck (2023, arXiv:2305.03780): recalibrate binary-event probability forecasts to be maximally **bold** (sharp, high-variance) subject to a Bayesian posterior probability of calibration ≥ threshold t, using the two-parameter Linear-in-Log-Odds (LLO) family. File verdict: **ADAPT** — a principled upgrade over blind Platt/temperature scaling for publishable probabilities, but only if re-fit on rolling out-of-sample windows and gated on log-loss/CLV, not extremization alone.

## Key metrics/methods (formulas where given, else "not specified")
- LLO recalibration family: c(x; δ, γ) = δx^γ / [δx^γ + (1−x)^γ] (shift δ, shape γ).
- Bernoulli likelihood of outcomes given recalibrated probabilities; Bayes factor via BIC approximation vs the saturated (perfectly calibrated) alternative; equal prior model probabilities 1/2.
- Posterior probability of calibration: P(M_c | y) = [1 + BF⁻¹]⁻¹.
- Boldness-recalibration: maximize SD of recalibrated predictions subject to P(M_c | y) ≥ t, t ∈ {0.95, 0.90, 0.80}; keep the local optimum with largest SD.
- Misspecification study uses the Prelec function; simulation DGP n ∈ {30,100,800,2000,5000} × noise σ ∈ {0,0.1,0.5,1,2} × forecaster archetypes (hedger/boaster/biased).

## Data sources named
- Real: 868 FiveThirtyEight NHL game win probabilities, 2020–21 season; home-win base rate 0.53; original forecast range 0.26–0.78, SD 0.091.
- Synthetic comparator: 868 draws from Uniform(0.26, 0.77) as a random-noise forecaster.
- Simulation: 17,500 total sets; optimization success rates 99.4% (95% B-R), 99.2% (90%), 98.7% (80%).

## Findings (numbers and facts, not vibes)
- Table 2 (paper's exact): Original — posterior 0.9904, SD 0.091, BS 0.236, ECE 0.052, AUC 0.65; MLE — posterior 0.9988, SD 0.124, δ̂ 0.95, γ̂ 1.40; 95% B-R — posterior 0.95, SD 0.165, δ̂ 0.87, γ̂ 1.96; 90% B-R — SD 0.169, γ̂ 2.01; 80% B-R — SD 0.173, γ̂ 2.07. (Brier/AUC cells for MLE and B-R variants were not reported in the extract.)
- Headline: boldness-recalibration roughly doubles forecast SD (0.091 → 0.165–0.173) while holding posterior calibration at threshold, on data where the original forecaster was already calibrated (posterior 0.9904).
- Simulation: B-R improves Brier and ECE over the original in the large majority of 17,500 sets; ~0.6–1.3% optimization failures (separation/degenerate likelihoods).
- Central weakness (file's note): everything is in-sample — parameters fit and assessed on the same 868 games; no walk-forward or held-out test.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: "be as decisive as calibration allows" objective layered onto the existing calibration stack (temperature, Platt, isotonic, Venn-Abers per the corpus map — none has a sharpness objective), for post-processing engine probabilities before publication (X cards, edge sheets) where decisiveness has audience value but miscalibration has monetary cost.
- TRUST-SIGNAL: extremization risk — maximizing SD pushes probabilities toward 0/1; under the wrong threshold this manufactures overconfidence that log-loss would punish.

## Engine-actionable? (yes/no + one-line what)
Yes — fit LLO (δ,γ) per market on a rolling trailing window maximizing SD subject to posterior ≥ 0.90, applied as a final pre-publication/Kelly-sizing transform, versioned and refreshed weekly, accepted only if out-of-sample log-loss ≤ MLE-LLO and SD ≥ 1.15× raw (~1–2 engineer-weeks).
