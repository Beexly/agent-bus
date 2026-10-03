# arxiv-program/research/2026-09-21/arxiv-deep/0585-bayesian-analysis-of-formula-one-race.md
## What it is (1-2 sentences)
Deep read of van Kesteren & Bergkamp (2022, arXiv:2203.08489v2): a Bayesian multilevel rank-ordered logit model that disentangles driver skill from constructor (car) advantage in F1 2014-2021, finding ~88% of outcome variance comes from the constructor. Verdict ADAPT — the decomposition structure (QB vs team/coach/units, identified via team-changes and teammate comparisons) transfers to GSE's NFL variance-attribution problems; the F1 likelihood does not.
## Key metrics/methods (formulas where given, else "not specified")
- Rank-ordered logit: p(y_r|ϑ_r) = ∏_{i=1}^{m_r−1} exp(ϑ_i)/Σ_{j=i}^{m_r} exp(ϑ_j) (Plackett–Luce); latent ability ϑ_c = θ_d + θ_ds + θ_t + θ_ts, each cross-classified random effect ~ N(0,σ²)
- Logit link, no intercept → parameters are log-odds ratios of beating an average competitor (θ_d=0.3 ⇒ P(beat average) ≈ 0.57, Elo-like)
- Counterfactual win prob: π_{ham>rai} = exp(θ_{ham:alfa:2021})/(exp(θ_{ham:alfa:2021})+exp(θ_{rai:merc:2021}))
- Model selection by LOO-CV ELPD; fit in Stan, 8 chains × 1250 post-warmup, all R̂ < 1.01, ESS > 2500
## Data sources named
Ergast API dataset (Newell 2021) for 160 races / 51 drivers / 19 constructors 2014-2021; Wikipedia scraping (wet/dry, street vs permanent circuit); scripts + preprocessed data at doi.org/10.5281/zenodo.7632045; comparison baseline Bell et al. (2016).
## Findings (numbers and facts, not vibes)
- Variance shares: σ_c=1.63 [89% CI 1.14,2.27], σ_cs=0.73, σ_d=0.54, σ_ds=0.35 ⇒ ~88% of variance from constructor (89% CI [0.775, 0.945]); consistent with Bell et al. (2016) 86%
- Basic model beats extensions (wet-race slope, circuit slope) on ELPD: differences within SE (−1.07 ± 6.35) — parsimony wins
- Counterfactual: Hamilton in Alfa Romeo vs Räikkönen in Mercedes 2021: E[π_{ham>rai}] = 0.36 (car beats driver)
- 2021 points/race: Verstappen expected 15.30 [12.32,18.00] vs 18.00 observed; Hamilton 14.58 [11.45,17.50] vs 17.59 — shrinkage at extremes
- Non-finisher exclusion shrinks effects toward 0; including all data moves Maldonado from 19th to 6th-worst (reliability is part of skill if included)
- Authors state the model is "probably not suitable for prediction" (year effects unknowable pre-season); assumes no driver×constructor interaction
## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- 88% team-vs-12% driver variance share → the NFL QB-vs-team-vs-coach decomposition question, same identification logic (team-changes, teammate comparisons) — QB-BEHAVIOR, COACHING, OTHER
- Counterfactual P(QB X on team Y beats QB W on team Z) = trade/free-agency valuation content — OTHER
- Interaction assumed away (star elevating a weak roster) flagged as the exact failure mode GSE cares about → QB×team random interaction term, "scheme-fit rating" — QB-BEHAVIOR, SCHEME
- Parsimony lesson: random-slope extensions added nothing (within SE) — OTHER
- The file's own spec proposes NFL likelihood swap: pairwise logistic on games with QB + head coach + unit random effects + seasonal form — COACHING, OL, QB-BEHAVIOR
## Engine-actionable? (yes/no + one-line what)
Yes — port the cross-classified Bayesian decomposition (QB + team + coach + unit effects as log-odds ratios with variance shares and credible intervals) to the engine as a new variance-attribution/counterfactual feature layer, per the file's 2-3-week Stan implementation spec.
