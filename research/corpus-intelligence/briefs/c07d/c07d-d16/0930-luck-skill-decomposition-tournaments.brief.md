# arxiv-deep/0930-luck-skill-decomposition-tournaments.md
## What it is (1-2 sentences)
Agent-based tournament simulation (Sobkowicz et al. 2019, arXiv:1910.03400, Physica A 2020, doi 10.1016/j.physa.2020.124899) modeling performance as a linear talent–luck mix, fitted to empirical Olympic 100m dash results from 13 Olympic Games (1968–2016); the tightly controlled 100m serves as a lower bound on the role of chance in less controlled domains.

## Key metrics/methods (formulas where given, else "not specified")
- Performance: P_j(t) = a·T_j + (1 − a)·L_j(t) ...(1)
- T_j ∈ [0,1], fixed per agent; symmetric, centered at 0.5; uniform or truncated Gaussian with σ_T ∈ {0.1, 0.2} (fitted 0.15 men / 0.14 women).
- L_j(t) ~ U(0,1), i.i.d. per round.
- Tournament: 1,000,000 agents grouped in tens; highest performance advances; 6 rounds select a winner (round-5 winners = "finalists", 10 agents; round-4 = "semi-finalists", 100 agents); whole tournament repeated 1000 times per configuration.
- Run-to-run difference identity: since talent is fixed and the weighted luck component is U(0, 1−a), the difference of two subsequent runs has a symmetric triangular distribution on [−(1−a), (1−a)] with SD = (1 − a)/√6.
- Injustice metric: Z_t = Q / ΔTL_t, ΔTL_t = TL(t+1) − TL(t) (difference of average talent of stage-t losers vs stage-(t+1) losers), Q = 1 payoff step, normalized so Z_1 ≡ 1.
- For a = 0 (pure luck) the expected average winner performance is 0.9, independent of stage.
- Numeric gate in ledger: ADAPT confirmed if the NFL luck-share estimate is stable (±0.1 across rolling 5-year windows 2010–2025) and implies a calibration entropy floor that improves log-loss on 2023–2025 holdout by ≥ 0.005 vs current engine probabilities.

## Data sources named
- Olympic 100m dash: 13 Olympic Games 1968 (Mexico City) → 2016 (Rio), men and women; raw run times per round (RO, QF, SF, FIN; London 2012/Rio 2016 RO merged with QF). Source: SportsReference web page (2018). Performance rescaled p = t_WR / t (world-record time at race date / run time), so p = 1 is a world record; p ≈ 0.5 ≈ 20–22 s ("average man"). RO+QF combined for averaging.
- National championships: 70 countries, 1980–2006, 100m champions. Source: GBRAthletics (2018).
- Referenced: Alfano et al. 2017, Hopkins 2005, Malcata & Hopkins 2014, Paton & Hopkins 2006, Pyne et al. 2004.

## Findings (numbers and facts, not vibes)
- Best-fit parameters: men σ_T = 0.15, a = 0.96; women σ_T = 0.14, a = 0.94.
- Headline: random luck accounts for ~4% of performance for men and ~6% for women at the Olympic level — presented as a strong lower bound for less controlled domains.
- Stage averages — empirical (Table 3): Men RO+QF 0.934 (SD 0.032), SF 0.959 (SD 0.014), FIN 0.975 (SD 0.013); Women RO+QF 0.915 (SD 0.046), SF 0.947 (SD 0.020), FIN 0.959 (SD 0.022). Model (Table 1): Men 0.935 / 0.968 / 0.975; Women 0.908 / 0.949 / 0.962. Agreement within ~0.007 everywhere.
- Individual run-to-run variability: histogram of consecutive-run performance differences ~ Gaussian; empirical SD ≈ 0.012–0.013 for both men and women. Model-predicted SD = 0.04/√6 ≈ 0.016 (men), 0.06/√6 ≈ 0.024 (women) — "remarkably close" per the paper, but the women's empirical value is notably below the model prediction (under-explained limitation).
- Men's run-to-run distribution shifted significantly positive (p < 0.0001) — men run faster in later rounds (coasting early); women's centered at zero.
- National-championship check: simulated round-3 winner averages 0.939 (men) / 0.915 (women) vs empirical 0.938 ± 0.017 (men) / 0.898 ± 0.027 (women). Women's empirical average jumps to 0.905 when excluding 6 lowest countries (Seychelles, Luxembourg, Egypt, Tunisia, Madagascar, Ethiopia).
- Lucky-streaks (σ_T = 0.2, a = 0.5): of 1000 final winners, 852 were "moderately lucky" (L > 0.5) in all 6 rounds; 232 were "very lucky" (L > 0.75) in all 6; almost no final winner was moderately lucky in fewer than 5 of 6 rounds.
- Talent among winners (σ_T = 0.2, a = 0.5): practically no agent with talent < 0.5 won round 3; cutoff ~0.7 for round 4, ~0.8 for round 5 — despite 50% luck weight per round.
- Injustice metric: with linear payoff growth, for a = 1, σ_T = 0.2, normalized unjust payoff disadvantage Z_t reaches 2700 for finalists vs the winner (2700× the bottom-of-hierarchy disadvantage); Z_t grows at late stages for all a. Z_t admitted as arbitrary; illustrative.
- Limitations: in-sample fit (no held-out Games); model attrition 1-of-10 vs Olympic 3–4 of 8 (acknowledged); talent fixed across rounds, luck i.i.d. uniform, no form/injury/lane/strategic-effort effects; p = t_WR/t conflates era effects; women's variability miss; 100m is a near-zero-interaction discipline — transferring the 4% luck floor to team sports is the paper's stated extrapolation, not demonstrated.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- OTHER (calibration/sizing lane — the headline): the (1−a) luck share is the irreducible noise floor under which no model's Brier/log-loss can go; the ledger's NFL adaptation is a "luck share" estimator (fit a, σ_T to within-team consecutive-game spread-residual differences via the (1−a)/√6 identity, expecting estimated 1−a ∈ [0.5, 0.8] for NFL point margins, stable within ±0.1 across rolling windows), which then serves as (a) a hard floor on predicted outcome entropy — no team-game probability may imply less variance than the luck share permits, shrink toward the noise floor instead of toward 0/1; and (b) the honest scale for Kelly sizing — cap fractional-Kelly growth rates at the talent share a, never size as if the talent component were the whole edge. This is gap-list item 1 (Kelly sizing under uncertainty) plus the calibration lane, directly.
- TRUST-SIGNAL: the 852/1000 "moderately lucky in all 6 rounds" result is a mechanistic warning for trust-signal intake — champions' observed luck histories are biased upward, so regression-to-mean on past champions/favorites is expected, not anomalous; UNCERTAIN for NFL given the 100m-to-team-sports extrapolation is explicitly not demonstrated.
- OTHER (improvement path): replace uniform luck with a heavy-tailed two-component mixture (routine noise + rare shocks — injuries, weather) fitted via the full consecutive-game difference distribution's kurtosis; the shock component maps onto GSE's causal-injury and weather lanes. The paper never tested non-uniform luck.
- CONTRADICTION (with naive noise narratives): the "talent cutoffs" result (practically no sub-0.5 talent wins round 3 even at 50% luck weight) cuts against pure "it's all luck" readings of tournaments — talent gates participation in late stages even when luck dominates individual rounds. Relevant to the QB-behavioral profiles program only by analogy (elite-QB persistence across playoff rounds is consistent with talent-gated advancement), INFERENCE-level.

## Engine-actionable? (yes/no + one-line what)
Yes — build the (1−a)/√6 moment-matching noise-floor estimator on 2010–2025 NFL spread residuals (1–2 days), use the estimated luck share as a hard entropy floor on team-game probabilities and a cap scale for fractional-Kelly sizing, gated on ≥0.005 holdout log-loss improvement.
