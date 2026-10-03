# docs/arxiv-program/research/2026-09-21/arxiv-deep/1684-timeout-stopping-opposing-run-nba.md
## What it is (1-2 sentences)
Deep-read ledger of Gibbs, Elmore & Fosdick (arXiv:2011.11691): a Rubin-potential-outcomes causal study asking whether calling a timeout stops an opposing NBA scoring run, using genetic matching on 4,684 run plays from 1,230 games (2017-18, 2018-19) and a novel integrated centered-score-difference outcome. Verdict in the file: ADAPT — the pipeline (run definition + SUTVA-aware unit construction + genetic matching + integrated outcome) transfers to NFL in-game decisions (4th-down, 2-pt, challenges); the NBA timeout estimand itself is not a GSE product input.

## Key metrics/methods (formulas where given, else "not specified")
- Run definition: ≥9-point change in score difference Δ(t) within prior 2 minutes; run duration δt = min{argmax_d(|Δ(t)−Δ(t−d)| : 0<d≤2)}; signed run total s(t) = Δ(t)−Δ(t−δt).
- Units: plays meeting 4 criteria (run occurring; no timeout in 2-min pre-treatment window; no timeout in 1-min post-treatment window; windows not truncated by period end). Final sample: 4,684 runs (834 RwT treated, 3,850 RwoT controls); |moneyline|>2400 units dropped for positivity.
- Estimand: ATT = E[Yi(1)−Yi(0) | Ti=1].
- Novel outcome (Eq. 5): yi = −sgn(s(ti)) ∫_{ti}^{ti+1} [Δ(x)−Δ(ti)] dx — integrated, centered score difference over the 1-minute post-treatment window; positive = run stopped/reversed.
- Franchise ATT (Eq. 6): ATTf = E[Yi(1)−Yi(0) | Ti=1, Bi=1] with non-parametric bootstrap 95% CIs, paired permutation tests + Benjamini–Hochberg FDR.
- Propensity: GAM on 13 covariates (teams, run point total, run duration, time left, win probability, signed score diff at run start/end, possession, home, week, over/under, spread, moneyline); 1,000 Monte-Carlo 70/30 splits: PPV 0.612, NPV 0.847.
- Matching: genetic matching (R Matching package) minimizing generalized Mahalanobis distance on covariates + propensity score, one-to-many with replacement; balance checked via Love plot (standardized bias < ±0.2), bootstrapped KS/t/chi-squared with FDR 0.05.
- Sensitivity: 4×4 grid of alternative run definitions (7–10 points × 1.5–3 min) and Rosenbaum Γ bounds for unmeasured confounding.

## Data sources named
NBA official API via R package nbastatR (Bresler 2019). All regular-season games 2017-18 and 2018-19: 1,230 unique games; 1,144,461 raw events collapsed to 778,828 plays; 31,081 run plays identified (1,149 with timeout, 29,932 without). Code: none stated (no repo linked).

## Findings (numbers and facts, not vibes)
- Naïve (unmatched) estimate: −0.08 (insignificant).
- Matched ATT: −0.35, Abadie–Imbens SE 0.07, p < 0.001 — calling a timeout during an opposing run is slightly disadvantageous on average (opposing team continues to outscore at a faster rate than in matched no-timeout runs).
- Balance: pre-matching propensity standardized bias "well past ±0.2"; post-matching all covariates < 0.2 absolute; no distributional discrepancy post-matching (FDR 0.05).
- Franchise ATTs: 20 of 30 franchises negative point estimates; after FDR control, Indiana Pacers and Utah Jazz significant negative; no positive franchise effect survives correction.
- Robustness: effect negative and significant for every alternative run definition (7–10 points × 1.5–3 min); 20 genetic-matching re-runs consistent.
- Rosenbaum sensitivity: 95% CI includes 0 at Γ ≈ 1.50 (authors note the bound is conservative).
- Sample: Chicago Bulls most RwTs (41); median 27.5 RwTs/franchise.
- File's GSE transfer gate: on nflverse 4th-down replication, (a) post-match |standardized bias| < 0.2 all covariates, (b) ATT |t| > 2 with sign stable when FG attempts are excluded from controls, (c) Rosenbaum Γ ≥ 1.5.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- COACHING: causal measurement of in-game coaching decisions (timeout efficacy) with a per-coach/franchise heterogeneity analysis — directly ports to coaching-decision evaluation (4th-down aggressiveness, 2-pt, challenges).
- SCHEME (secondary, INFERENCE): team-identity covariates and franchise heterogeneity map naturally onto scheme/coaching-style differences as causal heterogeneity dimensions.

## Engine-actionable? (yes/no + one-line what)
yes — build the NFL 4th-down analog: nflverse pbp 2019–2024, units = go-for-it vs punt/FG decisions, propensity GAM/GBM on yard line/distance/score/time/spread/coach/weather, genetic matching, outcome = integrated centered win-probability over rest-of-half; feeds a "coaching edge" feature and a "Was it the right call?" causal content series; 2–3 weeks per the file's spec.
