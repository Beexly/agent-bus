# docs/dfs/research/2026-09-25/youtube-builder-research/excel-ladz-assessment-2026-09-25.md
## What it is (1-2 sentences)
Independent-builder assessment of the Excel LADZ YouTube channel's NFL prediction model: verdict is a legit working model with no published track record — learn the method, not the file.
## Key metrics/methods (formulas where given, else "not specified")
- Method as presented: SOS-adjusted attack/defense ratings on a **12-game trailing window**; **Bayesian blending** of prior-season data into current ratings; home-field advantage **~10%**; touchdowns modeled with a **generalized Poisson** (handles over/under-dispersion vs plain Poisson); **5,000 Monte Carlo simulations** per matchup, run in Excel; data ingestion via **Power Query** from TeamRankings.com and Pro Football Reference.
- No published ATS/profitability track record; author runs an explicit accuracy/profitability disclaimer; model omits injuries, QB changes, and weather; workbook gated behind $27.50/month Patreon.
## Data sources named
TeamRankings.com and Pro Football Reference (via Power Query); the model builder's own YouTube channel.
## Findings (numbers and facts, not vibes)
- 12-game trailing window + Bayesian prior-season blending is a clean early-season sample-size answer, directly comparable to GSE's own priors.
- Generalized Poisson for TD counts is a step up from plain-Poisson scoring models; flagged as worth testing against GSE's scoring distributions.
- Known blind spots stated by the author: injuries, QB changes, weather.
## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- TRUST-SIGNAL: the "no published track record = method only, not validation" distinction is exactly the doctrine gate (learn the method, re-implement as GSE's own output, never copy the gated workbook).
- SCHEME: SOS-adjusted attack/defense with trailing-window ratings is a scheme-neutral baseline approach.
- QB-BEHAVIOR / COACHING / OL: not addressed.
## Engine-actionable? (yes/no + one-line what)
Yes — test generalized Poisson TD modeling against GSE's scoring distributions and consider the 12-game-window + Bayesian blending recipe for the early-season prior.
