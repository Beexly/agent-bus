# docs/dfs/research/2026-09-25/arxiv-deep/2609.07617-live-tennis-match-winner.md
## What it is (1-2 sentences)
A deep-read ledger of arXiv paper 2609.07617 ("Forecasting the Winner of a Live Tennis Match"), VERDICT: ADAPT — the tennis scoring model is domain-locked and worthless to GSE, but the Bayesian pseudo-count shrinkage of live in-game rates toward pre-game priors and the logit-space stacked gradient-boosting meta-learner are deemed directly implementable for GSE's live NFL win-probability and calibration stack.

## Key metrics/methods (formulas where given, else "not specified")
- Elo expected win prob: q_i,t = 1/(1 + 10^((Rj,t − Ri,t)/400)); Elo update Ri,t+1 = Ri,t + Ki,t(Si,t − qi,t) with Ki,t = 250/(mi,t + 5)^0.4; all players start at 1500.
- Bayesian shrinkage: θ̂ = (n·r + κ·π)/(n + κ) where π = prior (Elo-based serve prob), r = observed in-match rate, n = observed sample, κ = pseudo-count. Selected κ per match-progress checkpoint: 640/160/40 at 25%/50%/75%.
- Trace hybrid feature vector: [p̂M(s), p̂S(s), logit(p̂M), logit(p̂S), p̂S − p̂M, z(s)] → HistGradientBoostingClassifier; logit(p) = log(p/(1−p)).
- Evaluation: log loss L = −(1/N)·Σ[y·log(p) + (1−y)·log(1−p)] as the primary selection metric; calibration bins Pred_k vs Obs_k per bin; strictly chronological splits (train 2011–2021, val 2022, test 2023–2024).
- HGBM tuned over (learning rate, max leaf nodes, L2), max 250 iterations, early stopping, random_state fixed.
- Paper results (test): Trace accuracy 0.7606/0.8215/0.8834 at 25/50/75% match progress; log loss 0.4753/0.3530/0.2002 — best in every column. Serve-shrink Markov barely beat Elo-asymmetric Markov on accuracy (77.68% vs 77.56% all-points) but consistently won on log loss.
- Ledger's own adversarial notes: 1.5M "point states" share only 8,222 outcome labels (late points near-deterministic); "25% progress" framing uses ex-post total point count; three models per checkpoint (different configs/κ/random states) — not one deployable model; single 473-match validation year; no CIs.

## Data sources named
Jeff Sackmann's public repos: tennis_atp, tennis_slam_pointbypoint, tennis_wta (Grand Slam point-by-point + ATP/WTA results for pre-match Elo). Code: github.com/cx-57/live-tennis-research. Implementation: Python 3.12.3, NumPy 2.5.0, pandas 3.0.3, scikit-learn 1.9.0, XGBoost 3.3.0, LightGBM 4.6.0.

## Findings (numbers and facts, not vibes)
- Trace (hybrid stacking) beat all baselines on accuracy and log loss at every match-progress checkpoint on a strictly chronological test set.
- The serve-shrink mechanism improved probability *quality* (log loss) without moving the argmax (accuracy) — the ledger's canonical argument for calibration over accuracy-chasing.
- Pure-HGBM baseline was worse than the symmetric Markov baseline early (0.6944 vs 0.6851 at 25%) but beat every Markov model on log loss at 50% (0.3788) and 75% (0.2299) — live features dominate structure late; Trace's largest accuracy edge was mid-match (~40–70% progress).
- WTA accuracy curves fluctuate more sharply than ATP (authors attribute to ~79% men vs ~66% women service hold rates).
- DeepTennis comparison (non-chronological split): Trace 81.30% overall vs DeepTennis 79.5% — but the ledger flags this as confessed leakage (non-chronological split).
- GSE implementation spec §11–13 specifies: a live NFL win-probability updater with per-metric Bayesian shrinkage (κ grid {20,40,80,160,320} scaled to NFL sample sizes, selected on validation log loss), a single HGBM stacking meta-learner with logit-space features, calibration by game-progress decile; acceptance gate = ≥3% log-loss reduction vs best structural baseline on 2024–2025 test + max decile calibration deviation ≤5pp + ≥50% of gain from Q2–Q3; fallback = shrinkage-only if stacking fails (shrinkage is "5 lines of code").

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Methodological recipe only — Bayesian shrinkage of live rates toward pre-game priors + logit-space stacking + chronological log-loss evaluation is a portable modeling recipe applicable to any live NFL metric (QB efficiency, team rates), but the paper contains no NFL content: OTHER.
- Paper's finding that live in-match efficiency features dominate structural priors late in the game implies GSE's live in-game models should increasingly trust observed rates over pre-game ratings as sample accumulates: OTHER (live-WP methodology).

## Engine-actionable? (yes/no + one-line what)
Yes — implement the per-metric Bayesian shrinkage (θ̂ = (n·r + κ·π)/(n + κ), κ tuned on validation log loss) and the logit-space HGBM stacking of structural + shrunk live win probabilities in the prediction engine's calibration-ladder / multi-market-ensemble lane, per the numeric acceptance gate (≥3% log-loss gain, ≤5pp decile calibration deviation) in the ledger.
