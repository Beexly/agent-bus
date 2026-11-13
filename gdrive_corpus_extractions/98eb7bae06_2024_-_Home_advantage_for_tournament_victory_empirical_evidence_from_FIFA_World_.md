---
source: "2024 - Home advantage for tournament victory empirical evidence from FIFA World Cups and continental championships - Kalwij.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2024"
pages: 13
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3892
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about home advantage in football tournaments. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis of the Kalwij (2025) paper on home advantage for tournament victory in FIFA World Cups and continental championships.

Key details from the paper:
- Journal of Quantitative Analysis in Sports 2025; aop
- Author: Adriaan Kalwij
- DOI: 10.1515/jqas-2024-0056
- Received April 11, 2024; accepted April 4, 2025; published online November 13, 2025
- Data: 4,091 matches between 1916 and 2024 at 177 cup tournaments
- 158 national teams
- Six championships: AFC Asian Cup, Africa Cup of Nations, CONCACAF Gold Cup, CONMEBOL Copa América, OFC Nations Cup, UEFA European Football Championship, plus FIFA World Cup
- Elo ratings measured at end of calendar year preceding tournament
- Logistic regression models

Equations:
Equation (1): P_w^{i,j}(ΔElo_{i,j}, HT_i, D_{i,j}; β) = F(β₀ + β₁ΔElo_{i,j} + β₂HT_i + β₃HT_i ⋅ ΔElo_{i,j} − γD_{i,j})
Equation (2): HAM(ΔElo; β|D=0) = F(β₀ + β₁ΔElo + β₂ + β₃ΔElo) − F(β₀ + β₁ΔElo)
Equation (3): PV_{ic}(N_c, G_c, Ẽlo_{i,c}, HT_{ic}, NH_c; α) = F(α₀ + α₁N_c + α₂G_c + α₃Δ̃Elo_{i,c} + α₄HT_{ic}/NH_c + α₅HT_{ic}/NH_c ⋅ Δ̃Elo_{i,c})
Equation (4): HAT(Δ̃Elo; α|N, G) = F{α₀ + α₁N + α₂G + α₃Δ̃Elo + α₄ + α₅Δ̃Elo} − F(α₀ + α₁N + α₂G + α₃Δ̃Elo)

Key findings:
- Average cup tournament hosted by single country: HA for tournament victory is 22 percentage points (pp) for HT with average Elo rating
- Decreases to 9 pp for HT with one SD below-average Elo rating
- Increases to 42 pp for HT with one SD above-average Elo rating
- SD of Elo rating: 154 points (rounded to 150)
- Table 4 results: HT coefficient 0.918 (spec 3), ΔElo/100 0.448, HT⋅ΔElo/100 0.004 (p=0.923, no interaction)
- Table 5 results: HT/# hosts 2.322 (spec 1), Δ̃Elo/100 0.730, HT/# hosts ⋅ Δ̃Elo/100 0.050 (p=0.772, no interaction)
- 2010 World Cup South Africa: 1,521 Elo; 2014 World Cup Brazil: 2,132 Elo
- Brazil predicted probability: 0.96% to 51.9% (41 pp HA)
- South Africa predicted probability: 0.2% to 1.6% (1.4 pp HA)
- Difference about 41 pp (99% CI: 22.3–58.7)
- Appendix A.1: Compound probability derivation with 4 teams

Units: percentage points (pp), Elo points, probability (0-1), logit coefficients.

I need to be careful not to mention betting lines (spreads, totals, moneylines, odds). The paper mentions probabilities, not betting odds. I should avoid any gambling terminology.

Structure:
- THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). This should analyze the compound probability mechanism, the interaction terms, the identification strategy, potential issues (measurement error in Elo, seeding, time variation, choking), and gray zones.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Include Equations 1-4 and Appendix A.1 derivation. Cite pages.
- RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Trace from Pollard, Schwartz & Barsky, Dowie, Torgler, Monks & Husch, Elo, Tullock, Lazear & Rosen, etc. Multi-week traps could refer to tournament scheduling across weeks, accumulation of fatigue, etc.
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a more abstract/theoretical section about how teams/coaches adapt, crisis habits (choking under pressure), counter-traps (seeding advantages), and the clock (tournament duration, number of matches G).
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss crowd effects, travel fatigue, venue familiarity, playing tactics, weather, biomechanical factors, and how the paper addresses or fails to address these as vetoes.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning from Verifiable Rewards or similar. I need 3 counterfactual veto scenarios with verifiable predictions.

Word count: >= 1,000 words total across sections. THINK_TRACE alone >= 400 words.

Let me draft carefully.

THINK_TRACE (>=400 words):
- Multi-hop derivation: match-level HA → tournament-level HA via compound probability.
- Equation (1) logit for match win. HT effect β₂ ≈ 0.918 (spec 3), no interaction with ΔElo (β₃ ≈ 0.004, p=0.923). So match HA is roughly constant in Elo difference (21 pp at ΔElo=0).
- But tournament victory requires surviving G knockout matches (sample mean G=6). Compound probability: P(victory|HT) = [P(match win|HT)]^G roughly, vs P(victory|AT) = [P(match win|AT)]^G. Difference amplifies when base probability is higher.
- Strong HT has higher per-round survival probability, so exponentiating over G rounds creates convex amplification. Weak HT has low per-round probability, so exponentiating shrinks it further, reducing absolute HA.
- Identification: HT effect identified by HT vs AT matches and AT vs AT matches. Standard errors clustered at tournament level.
- Gray zones: Elo rating measured Dec 31 preceding year (stale by tournament time). Measurement error attenuation ~10% (IV evidence). Seeding gives HT first pot regardless of strength (avoids strongest in group stage). Time variation: p=0.043 for no variation over time; larger before 1971. Multiple host countries: HT/NH modeled; cannot reject against alternative specs (p=0.843, 0.891). Knockout-only subsample (968 matches) less precise but similar pattern.
- Choking under pressure: Brazil 2014 example (7-1 loss to Germany). HA and Elo explain only part of variation (Table 5 pseudo R² ~0.27-0.28).

SOURCE_OPERATORS_AND_EQUATIONS:
- Include all equations with LaTeX.
- Units: percentage points (pp), Elo points, probability dimensionless [0,1].
- Page citations: [PAGE 1], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 11], [PAGE 12].
- Breakdown: Table 1 (177 tournaments, 4,091 matches, 158 teams), Table 4 (HT coef 0.918), Table 5 (HT/# hosts 2.322, α₃ 0.730), Figure 2 values (3.3% vs 25.6% for average Elo; 9.2 pp below average; 42 pp above average).

RETROCAUSAL_GENEALOGY:
- Lineage: Schwartz & Barsky (1977) "The home advantage"; Pollard (2006, 2008); Dowie (1982) six of 22 World Cups won by hosts; Torgler (2004) 45 pp for 2002 World Cup; Brown et al. (2002) 56-70% points at home; Monks & Husch (2009) seeding/home continent; Tullock (1980) rent-seeking; Lazear & Rosen (1981) rank-order tournament; Elo (1978); Baumeister & Steinhilber (1984) choking; Jordet et al. (2012) penalty shootouts.
- Multi-week traps: Tournaments unfold over weeks; group stage round-robin then knockout. The "clock" of tournament duration (G matches, N teams) creates attrition. Home team plays all matches at home (single host), avoiding travel fatigue that accumulates across weeks. Away teams face cumulative travel, venue unfamiliarity, crowd hostility across multiple weeks. This temporal layering is a trap for away teams that the model approximates via G and N but does not explicitly model week-by-week fatigue or recovery.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under pressure, teams regress to crisis habits (choking). Brazil 2014 favored at home, regressed under pressure, lost 7-1. Baumeister & Steinhilber (1984) supportive audiences can cause home disadvantage under pressure.
- Counter-trap: Seeding assigns host to first pot regardless of strength (Lapré & Palazzolo 2023; Monks & Husch 2009). Strong host avoids strongest teams in group stage, creating an additional advantage not fully captured by Elo difference alone. Weak host (South Africa 2010) still gets seeding benefit but low Elo limits survival.
- Clock: Tournament clock measured in G matches (winner plays G=6 on average) and N teams (mean 16). More matches/teams reduce victory probability (α₁<0, α₂<0 though G not significant when N controlled due to ρ≈0.62). The clock imposes compound probability: each round is a filter; home advantage per match compounds over the tournament clock.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Travel fatigue (visitors' travel fatigue), venue familiarity, crowd effects on players/referees (Bryson et al. 2021; Gómez-Ruano et al. 2022; Pollard 2008; Staufenbiel et al. 2015).
- Biomechanical: Not directly measured; paper uses Elo as proxy for strength/ability to perform. No injury, travel distance, or circadian disruption variables.
- Weather: Not controlled; could affect home vs away if host climate differs.
- Veto proof: The paper cannot veto weather/biomechanical confounds because they are unobserved. However, the identification of HT effect comes from within-tournament HT vs AT comparisons, and Elo controls for relative strength. The lack of HT⋅ΔElo interaction (p=0.923) suggests HA in performance does not vary by strength, isolating compound probability as the driver of tournament HA variation. But weather and biomechanical factors remain potential omitted variable biases if correlated with hosting (e.g., host climate suits home team). The paper acknowledges Elo measurement error attenuation ~10% (Bound et al. 2001; Stefanski & Carroll 1985), making predicted variation conservative.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Neutral venue (no HT). Prediction: HA for tournament victory collapses to 0 pp; tournament outcomes determined solely by Elo and bracket structure. Verifiable: compare knockout-only subsample or multi-host two-legged ties where all countries are hosts (NH effect ≈ 0).
- Scenario 2: Weak host (1 SD below average Elo). Prediction: HA for tournament victory ≈ 9 pp (99% CI 3.8–14.7), much lower than average 22 pp. Verifiable: South Africa 2010 predicted 0.2%→1.6% (1.4 pp) vs Brazil 2014 0.96%→51.9% (41 pp); difference ~41 pp (99% CI 22.3–58.7).
- Scenario 3: Strong host (1 SD above average Elo) with seeded bracket. Prediction: HA for tournament victory ≈ 42 pp (99% CI 28.6–54.6); seeding amplifies beyond Elo-only estimate because host avoids top pot in group stage. Verifiable: restrict to single-host tournaments (spec 4) and compare predicted vs actual victory rates for hosts in top vs bottom Elo terciles.

Need to ensure no betting lines. I will not mention odds, spreads, moneylines, totals.

Need to ensure >=1000 words total. Let me estimate. THINK_TRACE ~500 words. SOURCE_OPERATORS_AND_EQUATIONS ~400 words. Others ~200-300 each. Should exceed 1000.

Let me write it out.

I need to be careful with LaTeX formatting inside XML. Use standard LaTeX.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s causal chain proceeds in three hops. First, at the match level, Equation (1) estimates a logit where the binary win outcome for team i against team j is a function of ΔElo, the home dummy HT, the interaction HT⋅ΔElo, and a draw threshold D. The preferred specification (Table 4, column 3) yields HT = 0.918 (p<0.001) and HT⋅ΔElo/100 = 0.004 (p=0.923), implying that match-level home advantage (HA) is statistically invariant to relative strength and equals roughly 21 percentage points (pp) when ΔElo = 0, peaking near 23 pp for a moderately weaker home side (ΔElo ≈ −100). Second, because cup tournaments are predominantly single-host, the home team plays every match at home while away teams never do; unlike league formats with reciprocal home-away fixtures, this asymmetry is not nullified over the tournament. Third, tournament victory requires surviving G knockout matches (sample mean G = 6) out of N participants (mean N = 16). Through compound probability, the home team’s per-round survival probability is exponentiated across G rounds, so a small per-match HA is magnified into a much larger tournament-level HA precisely because stronger home sides already possess a higher baseline survival probability per round. Equation (4) formalizes this: HAT = F(linear predictor with HT=1) − F(linear predictor with HT=0), evaluated at N=16 and G=6. The estimates produce 22.4 pp HA for an average-Elo host, 9.2 pp for a host one SD below average (SD = 154 Elo points, rounded to 150), and 41.6 pp for a host one SD above average.

Gray-zone audit. Identification of the HT effect rests on comparing HT–AT matches against AT–AT matches within the same tournament cluster, with standard errors clustered at tournament level. The model assumes Elo ratings (measured 31 December of the preceding year) capture pre-tournament strength without systematic bias correlated with hosting; however, the paper itself cites IV evidence that Elo measurement error attenuates predicted probabilities by roughly 10 percent, rendering the estimated HA variation conservative rather than inflated. Seeding introduces a counter-trap: hosts are typically placed in the strongest pot regardless of Elo, avoiding elite opponents in the group stage (Lapré & Palazzolo 2023; Monks & Husch 2009), a structural advantage only partly proxied by Δ̃Elo. Time heterogeneity is suggestive (p = 0.043 for no time variation; HA larger before 1971), and excluding multiple-host tournaments (specification 4 of Table 5) leaves conclusions unchanged, though the HT/NH functional form cannot be rejected against richer alternatives (p = 0.843; p = 0.891). The knockout-only subsample (968 matches) is underpowered but directionally consistent. The paper does not observe weather, travel distance, circadian disruption, or biomechanical fatigue, so these remain potential omitted variables if correlated with host selection. Finally, recursive psychology matters: the 2014 Brazil case illustrates choking under home pressure (7–1 semi-final loss), consistent with Baumeister & Steinhilber (1984), meaning HA and Elo explain only part of tournament variance (Table 5 pseudo-R² ≈ 0.27–0.28).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units. Let F(·) denote the standard logistic cumulative distribution function. Probabilities are dimensionless in [0,1]; home advantage is reported in percentage points (pp), where 1 pp = 0.01 probability units. Elo strength is measured in Elo points; the sample SD is 154 points (Table 1, bottom row), rounded to 150 for prediction steps. N = number of participating teams (sample mean 16); G = number of matches played by the tournament winner (sample mean 6); NH = number of host countries; D = 1 if a match can end in a draw, 0 for knockout matches.

Equation (1), match-level win probability ([PAGE 4], [PAGE 5]):
P^{i,j}_{w}(\Delta\mathrm{Elo}_{i,j}, HT_i, D_{i,j}; \boldsymbol{\beta}) = F\!\left(\beta_0 + \beta_1\Delta\mathrm{Elo}_{i,j} + \beta_2 HT_i + \beta_3 HT_i\cdot\Delta\mathrm{Elo}_{i,j} - \gamma D_{i,j}\right), \quad \Delta\mathrm{Elo}_{i,j} = \mathrm{Elo}_i - \mathrm{Elo}_j.

Equation (2), match-level HA for knockout matches ([PAGE 4]):
\mathrm{HAM}(\Delta\mathrm{Elo}; \boldsymbol{\beta}\mid D=0) = F\!\left(\beta_0 + \beta_1\Delta\mathrm{Elo} + \beta_2 + \beta_3\Delta\mathrm{Elo}\right) - F\!\left(\beta_0 + \beta_1\Delta\mathrm{Elo}\right).

Equation (3), tournament-victory probability ([PAGE 4], [PAGE 5]):
\mathrm{PV}_{ic}(N_c, G_c, \widetilde{\mathrm{Elo}}_{i,c}, HT_{ic}, NH_c; \boldsymbol{\alpha}) = F\!\left(\alpha_0 + \alpha_1 N_c + \alpha_2 G_c + \alpha_3\widetilde{\Delta\mathrm{Elo}}_{i,c} + \alpha_4\frac{HT_{ic}}{NH_c} + \alpha_5\frac{HT_{ic}}{NH_c}\cdot\widetilde{\Delta\mathrm{Elo}}_{i,c}\right), \quad \widetilde{\Delta\mathrm{Elo}}_{i,c} = \mathrm{Elo}_{i,c} - \mathrm{Elo}_c.

Equation (4), tournament-level HA ([PAGE 5]):
\mathrm{HAT}(\widetilde{\Delta\mathrm{Elo}}; \boldsymbol{\alpha}\mid N,G) = F\!\left\{\alpha_0 + \alpha_1 N + \alpha_2 G + \alpha_3\widetilde{\Delta\mathrm{Elo}} + \alpha_4 + \alpha_5\widetilde{\Delta\mathrm{Elo}}\right\} - F\!\left(\alpha_0 + \alpha_1 N + \alpha_2 G + \alpha_3\widetilde{\Delta\mathrm{Elo}}\right).

Estimation breakdown ([PAGE 6], [PAGE 7], [PAGE 8], [PAGE 9], [PAGE 11]): Table 4 specification 3 gives HT coefficient 0.918 (std. err. 0.080, p<0.001), ΔElo/100 coefficient 0.448 (std. err. 0.022, p<0.001), and HT⋅ΔElo/100 coefficient 0.004 (std. err. 0.041, p=0.923), so match-level HA does not vary meaningfully with Elo difference. Table 5 specification 1 gives HT/#hosts coefficient 2.322 (std. err. 0.218, p<0.001), Δ̃Elo/100 coefficient 0.730 (std. err. 0.066, p<0.001), and the interaction HT/#hosts⋅Δ̃Elo/100 coefficient 0.050 (std. err. 0.172, p=0.772), indicating no statistically detectable performance-HA interaction at the tournament level either. For an average single-host tournament (N=16, G=6, NH=1), Figure 2 and Section 3.3 report P(victory|HT=0) = 3.3 percent and P(victory|HT=1) = 25.6 percent at Δ̃Elo = 0, hence HAT ≈ 22.4 pp (99 percent CI: 12.7–32.0). At Δ̃Elo = +150 (one SD above average), HAT ≈ 41.6 pp (99 percent CI: 28.6–54.6); at Δ̃Elo = −150, HAT ≈ 9.2 pp (99 percent CI: 3.8–14.7). Illustrative 2010/2014 World Cup predictions ([PAGE 7], [PAGE 8]): South Africa (Elo 1,521) rises from 0.2 percent to 1.6 percent (≈1.4 pp HA); Brazil (Elo 2,132) rises from 0.96 percent to 51.9 percent (≈41 pp HA; inter-host difference ≈41 pp, 99 percent CI: 22.3–58.7). Appendix A.1 ([PAGE 12]) derives the four-team compound-probability identity HAT(α) = HAM(α)⋅{F(α+h−1) + F(α−1)} and generalizes to G knockout matches as a geometric sum increasing in α.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The study’s lineage begins with Schwartz & Barsky (1977), who documented home advantage as a social-psychological phenomenon, and Pollard (2006; 2008), who established worldwide regional variation in football and framed home advantage as an unsolved puzzle. Dowie (1982) observed that six of 22 World Cups through 2002 were won by host teams, though those hosts were among the world’s best, confounding strength with hosting. Torgler (2004) estimated a 45 pp match-win uplift for hosts at the 2002 World Cup, while Brown et al. (2002) and Pollard & Armatas (2017) found home points percentages of 56 percent (Europe) to 70 percent (Africa) in World Cup qualifying. Monks & Husch (2009) showed seeding and home-continent effects shape World Cup final standings. The game-theoretic apparatus draws on Tullock (1980) rent-seeking contests and Lazear & Rosen (1981) rank-order tournaments, which justify the logit specification; the strength measure descends from Elo (1978), with FIFA’s post-2018 Elo-based ranking correlating at 0.96 with the study’s Elo series ([PAGE 4]). Behavioral hazards enter through Baumeister & Steinhilber (1984) on supportive audiences producing home disadvantage under pressure and Jordet et al. (2012) on penalty-shootout choking.

Multi-week traps. Cup tournaments unfold across weeks via a group stage followed by knockout rounds, generating temporal traps the model approximates only crudely. Away teams accumulate travel fatigue, venue unfamiliarity, and crowd hostility match by match ([PAGE 2]), whereas the single host sleeps at home and trains at familiar facilities throughout the tournament clock. Because G (matches required to win) and N (participants) enter Equation (3) as scalar controls with correlation ρ ≈ 0.62, the model cannot disentangle pure match-count attrition from week-by-week recovery and scheduling congestion. The “multi-week trap” is therefore that away teams face a compounding hazard function across the tournament calendar, while Equation (3) treats G and N as static covariates, potentially underestimating the dynamic disadvantage for weaker away squads in long tournaments.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under home pressure, favored hosts can regress to crisis habits—choking—rather than executing their usual game plan. The 2014 Brazil case is the canonical illustration: predicted to win with 51.9 percent probability at home, Brazil suffered a 7–1 semi-final defeat to Germany, consistent with Baumeister & Steinhilber (1984) that supportive audiences can trigger home-field disadvantage under performance pressure ([PAGE 11], [PAGE 1]). The model’s average HA estimates therefore embed a behavioral variance term: Elo and hosting explain only part of outcomes (Table 5 pseudo-R² ≈ 0.27–0.28), and future work is urged to incorporate player/coach experience to capture choking propensity ([PAGE 11]).

Counter-trap. Seeding operates as a structural counter-trap that favors hosts independently of Elo. Hosts are typically assigned to the strongest pot regardless of actual strength, avoiding elite teams in the group stage (Lapré & Palazzolo 2023; Monks & Husch 2009; [PAGE 10]). A weak host such as South Africa (Elo 1,521 at the 2010 World Cup) receives this seeding shelter yet lacks the per-match survival probability to convert it into tournament HA (predicted 0.2 percent → 1.6 percent). A strong host such as Brazil (Elo 2,132) combines seeding shelter with high baseline match win probability, generating the 41 pp HA gap relative to South Africa. Because Equation (3)’s interaction HT⋅Δ̃Elo is statistically insignificant (p=0.772), the paper attributes the HA-by-strength gradient to compound probability rather than to performance-HA variation, but seeding means Δ̃Elo understates the true structural advantage of strong hosts.

Clock. The tournament clock is parameterized by G and N: more teams and more required winner matches lower victory probability (α₁ < 0, α₂ < 0 expected; α₂ insignificant when N is controlled because ρ ≈ 0.62, [PAGE 7]). Each knockout round is a filter; home advantage per match compounds across the clock. For weak hosts, the clock rapidly drives survival probability toward zero, collapsing HAT toward 9 pp; for strong hosts, repeated home filtering across G ≈ 6 rounds elevates HAT toward 42 pp.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The paper identifies crowd effects on players and referees, visitors’ travel fatigue, venue familiarity, and playing tactics as candidate mechanisms for match-level HA ([PAGE 2]). It does not measure stadium density, noise, travel distance, or time-zone shifts, so these physical mechanisms remain unobserved mediators rather than vetoed confounds. Because the HT effect is identified from within-tournament HT–AT versus AT–AT comparisons ([PAGE 4]), common shocks affecting all teams in a host nation (e.g., national team quality shocks) are absorbed, but host-specific physical advantages favoring the home squad exclusively are not ruled out.

Biomechanical layer. No injury burden, player-load, sprint-distance, or recovery variables enter the model. Elo rating serves as the sole strength proxy, measured at year-end preceding the tournament ([PAGE 3]). If hosting correlates with host-team biomechanical readiness (e.g., reduced travel, familiar pitches, climate acclimatization), this is partially absorbed into the HT coefficient but cannot be separated from psychological crowd effects. The absence of a statistically significant HT⋅ΔElo interaction (p=0.923) indicates that biomechanical/performance HA does not scale with Elo, which constrains—but does not eliminate—biomechanical confounding.

Weather layer. Climate and weather are not control variables. A host nation’s climatic advantage over visiting confederations (e.g., European teams in African or Asian heat) could bias the HT estimate upward if weather covaries with hosting and affects match outcomes. The paper finds no significant variation in HA by cup tournament (p=0.153 across seven groups, [PAGE 9]), which weakly suggests climate-confederation confounds are not dominant, but this is not a formal veto.

Veto adjudication. The study does not provide a biomechanical or weather veto proof; it instead relies on (i) clustered standard errors at tournament level, (ii) the stability of results under LPM and knockout-only subsamples ([PAGE 9]), and (iii) the small estimated Elo measurement-error attenuation of roughly 10 percent based on IV reasoning (Bound et al. 2001; Stefanski & Carroll 1985, [PAGE 9]), which makes the estimated HA variation conservative. Unobserved host-specific physical, biomechanical, and weather advantages therefore remain as residual threats to causal attribution of the full 22 pp average HA.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Neutral-venue elimination of HT. Verifiable setup: simulate the same 177-tournament bracket structure with HT forced to 0 for every team while holding Elo, N, G, and NH fixed. Prediction: HAT collapses to 0 pp for all Δ̃Elo values, because Equation (4) reduces to F(linear predictor at HT=0) − F(identical linear predictor) = 0. Empirical check: tournaments consisting solely of two-legged home-and-away ties where all participating countries are effectively hosts (six of the 21 multi-host tournaments) should show near-zero HT/#hosts effects; the paper reports such specifications cannot be rejected against the main model (p=0.891, [PAGE 9]), consistent with this veto.

Scenario 2 — Weak-host counterfactual (Δ̃Elo = −150). Verifiable setup: impose the observed 2010 South Africa profile (single host, N=32, G=7, Elo ≈ 1 SD below tournament average) on the estimated Equation (3). Prediction: P(victory|HT=1) − P(victory|HT=0) ≈ 9.2 pp (99 percent CI: 3.8–14.7), far below the 22.4 pp average. Empirical check: the paper’s illustrative calculation for South Africa at the 2010 World Cup yields 0.2 percent → 1.6 percent (≈1.4 pp) under the full 32-team, seven-match specification, below even the 9.2 pp average-tournament estimate because N=32 dilutes victory probability ([PAGE 7], [PAGE 8]).

Scenario 3 — Strong-host with seeding amplification (Δ̃Elo = +150). Verifiable setup: impose the observed 2014 Brazil profile (single host, N=32, G=7, Elo ≈ 1 SD above average) with the additional structural counter-trap that the host avoids the strongest pot in the group stage. Prediction: HAT ≈ 41.6 pp on Elo terms (99 percent CI: 28.6–54.6), with the true structural HA likely higher because seeding removes elite group-stage opponents not captured by Δ̃Elo alone. Empirical check: the paper’s Brazil prediction is 0.96 percent → 51.9 percent (≈41 pp HA; inter-host difference vs. South Africa ≈41 pp, 99 percent CI: 22.3–58.7, [PAGE 7]–[PAGE 8]); restriction to single-host tournaments (specification 4 of Table 5, [PAGE 9]) leaves the main findings unchanged, supporting the robustness of the strong-host amplification veto.
</RLVR_COUNTERFACTUAL_VETOES>