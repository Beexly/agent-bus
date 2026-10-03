# docs/arxiv-program/research/2026-09-21/arxiv-deep/0677-bye-bye-bye-advantage-estimating-the.md

## What it is (1-2 sentences)
Research-ledger read of arXiv:2408.10867 (Lopez & Bliss, 2024): estimates NFL rest-differential effects (MNF, Mini-bye, Bye) on point differential and point spreads with Bayesian state-space models, testing the 2011 CBA structural break (bye-week practice eliminated) and whether betting markets price rest correctly. Verdict in file: ADAPT — rest-differential categories are essential schedule features for GSE's spread model, with a market-mispricing angle (anti-bye) to exploit.

## Key metrics/methods (formulas where given, else "not specified")
- Bayesian state-space models (Glickman & Stern 1998/2017; Lopez et al. 2018) with time-varying team strength, linear-trend home advantage, three categorical rest indicators I(MNF), I(Mini), I(Bye) (±1 home/away symmetric). Four models: 1 (constant bye, PD), 2 (bye split pre/post-2011 CBA, PD), 3 (constant bye, spread), 4 (bye split, spread).
- Model equation: E[Y_{s,ij}] = θ_{s,i} − θ_{s,j} + μ_{HA,s} + α_MNF·I(MNF) + α_Mini·I(Mini) + α_Bye·I(Bye); Model 2 splits α_Bye,pre·I(S≤2010) + α_Bye,post·I(S≥2011).
- θ_{(s,i)} ~ N(γ·θ_{(s−1,i)}, σ²_teamstrength); μ_{HA,s} = (α_HA_Trend·s + α_HA_Intercept)·I(HA); Models 3/4 identical with Z_{s,ij} = pregame point spread as outcome.
- Priors: θ_2002 ~ N(0, σ²), σ ~ HalfNormal(0,5²), γ ~ Uniform(0,1), rest α ~ N(0,5²). Stan fit: 4 chains × 3000 iterations, 1000 burn-in. Comparison via LOO ELPD; posterior P(α_Bye,post < α_Bye,pre) computed directly.
- Rest categories: MNF = ≥1-day rest diff with disadvantaged team ≤6 days rest; Mini = one team 9–11 days rest with ≥2-day diff; Bye = did not play prior week.

## Data sources named
- 5,679 NFL regular-season games, 2002–2023 (256/season 2002–2020, 272 in 2021/2023, 271 in 2022); game info from internal NFL sources (authors are NFL employees, disclosed); point spreads from nflreadR (sportsbook aggregate). 52 games (0.9%) dropped for unclassifiable rest (COVID/weather reschedules). Rest edges observed: MNF 410 away/290 home, Mini 526, Bye 593. Code + data: https://github.com/ThompsonJamesBliss/restadvantageinamerfootball.

## Findings (numbers and facts, not vibes)
- Bye on point differential: pre-2011 +2.21 pts/game (95% CI 0.61–3.80, P(>0)=99.6%, "as beneficial as home field"); post-2011 +0.31 (CI −1.01 to 1.64, P(>0)=67.9%); P(decline)=96.6%.
- Market pricing of bye (Model 4): +0.39 pre (CI 0.00–0.78) → +0.97 post (CI 0.65–1.28), P(increase)=98.8% — markets OVERVALUE the post-2011 bye by ~0.66 pts vs the +0.31 reality.
- Mini-bye: PD +0.48 (CI −0.65 to 1.57, n.s.); market −0.06 (P(>0)=31.8%). MNF: PD +0.14 (CI −0.86 to 1.18, n.s.); market +0.37 (CI 0.14–0.61, P=99.9%).
- Home advantage 2023: PD +1.65 vs market +1.74 (markets near-perfect on HA); HA declined ~1 pt/game over the period.
- Postseason bye (descriptive, 2011–2023): 34-10 SU (+7.34 avg PD), 21-22-1 ATS — still real.
- Bye cover rates: 2002–2010 home 55.8%/away 56.9% → 2011–2023 home 44.6%/away 52.7% (edge flipped to anti-bye).
- GSE gate (per file): adopt as spread-model features if 2015–2024 replication confirms post-2011 bye PD effect <1.0 pt/game with market pricing ≥0.5 pts above it; drop the anti-bye angle if markets corrected.

## Intelligence connections (tag each finding: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Post-2011 bye rest advantage collapsed (+2.21 → +0.31 pts) while markets moved the wrong way (+0.39 → +0.97) — a market-invented edge the engine can fade systematically — **TRUST-SIGNAL**, **OTHER** (spread-model pricing inefficiency)
- 2011 CBA eliminated bye-week practice; practice-time-based categorical rest (MNF/Mini/Bye) outperformed continuous rest days — **COACHING**
- Postseason bye remains a real effect (34-10 SU, +7.34 avg PD post-2011) even as the regular-season bye edge died — playoff context differs — **OTHER**
- Markets price MNF (+0.37) and Mini (+0.48 vs −0.06) rest edges too — separate reality-vs-market features per category, not one blended rest variable — **TRUST-SIGNAL**
- Home advantage declined ~1 pt/game over 2002–2023 while markets track it near-perfectly — trend the model must carry, not a constant — **OTHER**
- 2020 CBA Thursday-practice limits may already be eroding the mini-bye further (per file, noted as limitation) — rest effects are regime-dependent, require periodic re-estimation — **COACHING**, **TRUST-SIGNAL**

## Engine-actionable? (yes/no + one-line what)
yes — Add I(MNF)/I(Mini)/I(Bye) rest-differential features (exact paper definitions) to the spread model plus the market's implied rest valuation from closing lines as a separate feature to bet the reality-vs-market gap (post-2011 bye: fade teams getting >0.97 pts of market bye credit).
