# arxiv-program/research/2026-09-21/arxiv-deep/0419-expected-by-whom-a-skilladjusted-expected.md
## What it is (1-2 sentences)
Deep-read ledger of arXiv:2511.07703v2 (J.T.P. Noel 2025), a skill-adjusted expected-goals (xG) model for NHL shooters and goaltenders that injects recency-weighted player-skill estimates into a context-only LightGBM shot model. Verdict: ADAPT — port the skill-adjusted expected-goal framework (recency-weighted shooter/goalie priors with spatial bins and similarity features) into NFL expected-yards/prop models, replacing raw ratios with shrunk, temporally-validated player adjustments.
## Key metrics/methods (formulas where given, else "not specified")
Shooter GAX = (weighted goals) − (cumulative weighted xG); goalie GSAX = (cumulative weighted xG) − (weighted goals allowed); shooter talent ratio = (weighted goals)/(weighted xG); goalie talent ratio = (weighted xG against)/(weighted goals against); "true" talent = sum of total + locational + situational variants. Recency weighting: linear decay over each player's prior shot history; shots aggregated into nine spatial bins; Gower similarity between players stabilizes sparse histories. Baseline: LightGBM binary classifier on context-only shot features, tuned with Optuna; skill features added as inputs. Evaluated per skill bracket (low p≤0.5, mid 0.5<p≤0.75, high p>0.75) on log loss, AUC, Brier score.
## Data sources named
Public NHL API via the open-source `hockey-scraper` package; 5v5 shots only, seasons 2010–2022; skill features estimated on 2012–2020, adjusted model evaluated on held-out 2021–2022. No proprietary data; no code stated.
## Findings (numbers and facts, not vibes)
Table 5 (adjusted vs. baseline):
- High bracket (p>0.75): log loss 0.2982→0.2844 (−0.0138), AUC 0.7238→0.7616 (+0.0378), Brier 0.0849→0.0816 — largest gain.
- Mid bracket: log loss 0.2831→0.2792, AUC 0.7424→0.7519, Brier 0.0809→0.0798.
- Low bracket: log loss 0.2126→0.2100, AUC 0.7531→0.7630, Brier 0.0567→0.0560.
Consistent directional improvement across all 9 metric–bracket cells, but low/mid gains are small and the baseline is self-admittedly not state-of-the-art (part of the gain may be skill features compensating for an underfit baseline). Limitations: talent ratio uses the same weighted xG model being evaluated (self-referential circularity risk); sparse players' talent set to exactly zero (crude — shrinkage to league average would be standard); 5v5 only; no defender-proximity tracking; loose temporal validation (possible leakage); hockey shots are discrete binary events, NFL props are continuous accumulations — transfers as player-context residuals, not directly.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Recency-weighted player talent priors on expected-metric residuals — a direct template for the props lane (anytime-TD, yardage overs/unders, first-TD markets) — OTHER
- Empirical-Bayes shrinkage toward positional mean (replacing the paper's crude zero-default for sparse players) — TRUST-SIGNAL
- Shooter×goalie pairing = NFL ball-carrier×defender pairing; interaction term for matchup-specific props (e.g., WR vs. specific CB) — SCHEME
- Existing-research-map gap named directly: "methods that transfer player/context adjustment to NFL props" — OTHER
## Engine-actionable? (yes/no + one-line what)
Yes — build a player/context-adjusted expected-yards module for props: LightGBM baseline on context features + recency-weighted (linear decay over trailing ~2 seasons) per-player yards-above-expected ratios for ball carrier and primary defender, aggregated into field-zone spatial bins mirroring the nine hockey bins, with empirical-Bayes shrinkage to positional mean; acceptance gate = ≥0.02 RMSE yards/play reduction AND ≥0.005 Brier improvement on 2025 holdout, gains in ≥3 of 4 position groups (QB, RB, WR, TE).
