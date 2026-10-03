# arxiv-program/research/2026-09-21/arxiv-deep/0673-comparing-probabilistic-predictive-models.md
## What it is (1-2 sentences)
Deep-read ledger of Diniz et al. (2017) "Comparing probabilistic predictive models applied to football" — two Bayesian multinomial-Dirichlet models using only each team's win/draw/loss counts versus established goal-based models (Arruda, Lee bivariate-Poisson) and Bradley–Terry–Davidson on Brazilian championship matches. Verdict: ADAPT the multinomial-Dirichlet model as GSE's minimum-viable Bayesian forecaster and permanent calibration/complexity floor.

## Key metrics/methods (formulas where given, else "not specified")
- Mn-Dir1: mixture (w=1/2) of two Dirichlet posteriors (team A's home matches, team B's away matches) combined by linear opinion pooling (Stone 1961), uniform D(1,1,1) prior, first-half results as prior for second half.
- Mn-Dir2: weight w and symmetric Dirichlet D(α,α,α) chosen by grid search over 400 (w,α) pairs minimizing first-half Brier scores.
- Posterior predictive: P(X_{n+1}=k) = (n_k + α_k)/(n + α_•).
- Baselines: bivariate Poisson P(Y1=y1,Y2=y2|λ1,λ2,λ3) (Holgate 1964); log λ1 = μ + ATT_A − DEF_B + γ; log λ2 = μ + ATT_B − DEF_A; Bradley–Terry–Davidson: p^W_ij = γπ_i/(γπ_i + π_j + ν√(π_iπ_j)), p^D_ij = ν√(π_iπ_j)/(γπ_i + π_j + ν√(π_iπ_j)).
- Metrics: Brier, logarithmic, spherical proper scoring rules (mean + total + SE), error rate, calibration curves (smoothing splines, 95% bands), goodness-of-fit χ², predictive entropy; ANOVA + post-hoc pairwise tests.

## Data sources named
1,710 matches from the Brazilian first division, seasons 2006–2014 (20 teams, 380 matches/season); benchmark predictions from chancedegol.com.br (Arruda) and previsaoesportiva.com.br (Lee); comparisons restricted to second-half matches (190/season). No code stated (R used).

## Findings (numbers and facts, not vibes)
- Total Brier scores (n=1,710): BT 1085.9 (SE 14.9), Arruda 1053.2 (12.6), Lee 1075.5 (14.9), Mn-Dir1 1067.59 (10.4), Mn-Dir2 1073.5 (8.8).
- Post-hoc: Mn-Dir1 beats BT on Brier (estimate −0.01, p=0.04) and log score (p=0.01); Mn-Dir2 beats BT on log score (p=0.02); Arruda best on all three scoring rules but not significantly different from Mn-Dir1; no model differences on proportion of errors (ANOVA p=0.86).
- Calibration: Arruda and both Mn-Dir models track the 45° line; BT and Lee over-estimate probabilities of frequent events.
- Goodness of fit χ² (40 df): BT 112.8 (p=0.001, rejected), Arruda 76.9 (p=0.48), Lee 91.5 (p=0.14), Mn-Dir1 61.5 (p=0.91, best), Mn-Dir2 77.2 (p=0.50).
- All models similar entropy, all more informative than trivial (1/3,1/3,1/3).

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER: baseline discipline — a 12-line count-based Dirichlet forecaster (calibrated, best goodness-of-fit) beat Bradley–Terry on proper scoring rules; any GSE engine upgrade must beat this floor before shipping.
- OTHER: methodology — the paper's protocol (first-half priors, second-half walk-forward predictions, proper scoring rules + calibration curves + χ² fit) is a clean Bayesian-forecaster evaluation template.

## Engine-actionable? (yes/no + one-line what)
Yes — build the NFL analogue (Dirichlet posteriors over {cover, push, no-cover} from ATS results, home/away split, linear opinion pooling) as a permanent floor: any engine upgrade must beat it on log loss before shipping, and use it as a calibration reference curve.
