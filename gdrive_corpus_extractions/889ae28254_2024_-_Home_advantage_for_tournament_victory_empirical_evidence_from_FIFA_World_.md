---
source: "2024 - Home advantage for tournament victory empirical evidence from FIFA World Cups and continental championships - Kalwij.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2024"
pages: 25
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5336
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about home advantage in football tournaments. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
   - <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.

Let me carefully extract information from the source text.

Key facts from the paper:
- Title: Home advantage for tournament victory: empirical evidence from FIFA World Cups and continental championships
- Author: Adriaan Kalwij
- Journal: J. Quant. Anal. Sports 2025; aop
- DOI: 10.1515/jqas-2024-0056
- Received April 11, 2024; accepted April 4, 2025; published online November 13, 2025
- Data: 4,091 matches between 1916 and 2024 at 177 cup tournaments, 158 national teams
- Six championships: AFC Asian Cup, Africa Cup of Nations, CONCACAF Gold Cup, CONMEBOL Copa América, OFC Nations Cup, UEFA European Football Championship, plus FIFA World Cup
- 156 single host, 21 multiple host countries
- Elo ratings measured at end of calendar year preceding tournament
- Average Elo rating: 1,682 (SD 154) - Table 1 bottom row
- SD rounded to 150 points for predictions

Equations:
Equation (1): Probability team i wins match against j
P(win) = F(β0 + β1·HT_i + β2·ΔElo_i,j + β3·HT_i·ΔElo_i,j + γ·D)
where F is standard logistic CDF, ΔElo = Elo_i - Elo_j, D=1 if match can end in draw.

Actually looking at the text, the equation seems to be:
P(win_{i,j}) = F(β0 + β1·HT_i + β2·ΔElo_{i,j} + β3·HT_i·ΔElo_{i,j} + γ·D)

Wait, the text says "with parameters β' = (β0, β1, β2, β3, γ)". And mentions HT ⋅ ΔElo included.

Equation (2): HA for winning a match (knockout, D=0)
HA^M(ΔElo; β | D=0) = P(win|HT=1) - P(win|HT=0)

Equation (3): Probability team i wins tournament c
P(victory_{i,c}) = F(α0 + α1·G + α2·N + α3·ΔElo_{i,c} + α4·HT/NH + α5·(HT/NH)·ΔElo_{i,c})
where ΔElo_{i,c} = Elo_{i,c} - Elo_c, NH = number of host countries, N = number of participating teams, G = number of matches winner plays.

Equation (4): HA for tournament victory (single host, NH=1)
HA^T(ΔElo; α | N, G) = P(victory|HT=1) - P(victory|HT=0)

Key findings:
- HA for tournament victory for average HT: 22 pp (99% CI: 12.7–32.0). Text says 22.4 pp in discussion, 22 pp in abstract.
- HA decreases to 9 pp for one SD below-average Elo (9.2 pp, 99% CI: 3.8–14.7)
- HA increases to 42 pp for one SD above-average Elo (41.6 pp, 99% CI: 28.6–54.6)
- SD of Elo: 154 points, rounded to 150
- HA for winning a match: 21 pp at ΔElo=0 (Figure 1), max 23 pp at ΔElo ≈ -100
- Descriptive: HT win rate 60.3% vs 37.5% baseline = 22.8 pp for draw matches; 65.7% vs 50% = 15.7 pp for knockout
- Table 4 results: HT coefficient 0.918 (spec 3), ΔElo/100 0.448, HT·ΔElo/100 0.004 (p=0.923, not significant)
- Table 5 results: HT/# hosts 2.322 (spec 1), ΔElo/100 0.730, interaction not significant (p=0.772)
- 2010 South Africa (Elo 1,521) vs 2014 Brazil (Elo 2,132): Brazil HA 41 pp higher than South Africa (99% CI: 22.3–58.7). Predicted probability: SA 0.2% to 1.6%; Brazil 9.6% to 51.9%
- Compound probability argument in Appendix A.1: 4-team tournament, HA^T(α) = HA^M(α) · [F(α+h-1) + F(α-1)], increasing in α.

No betting lines to mention. Good.

Now I need to write the response. I need to be careful about:
- Not mentioning odds, spreads, moneylines, totals.
- Using formal LaTeX equations.
- Citing page markers [PAGE N] - since the text has page markers like > 2 —, > 3 —, etc., I should use those.
- Word count >= 1,000 across sections, with THINK_TRACE >= 400 words.

Let me structure this carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I'll discuss the compound probability mechanism, the identification strategy (HT vs AT matches, two-AT matches), the clustering at tournament level, the Elo rating timing (end of preceding calendar year), the 0.5% significance threshold, the interaction terms being insignificant for match-level HA but significant for tournament-level variation via compound probability, the 2010/2014 example, measurement error attenuation (~10%), seeding effects, time variation (p=0.043), etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX for Equations (1)-(4), units (percentage points, Elo points), page citations [PAGE 2], [PAGE 4], [PAGE 5], [PAGE 7], [PAGE 8], [PAGE 10], [PAGE 12], breakdown of parameters, singularity/breakdown regimes (e.g., when α4 + α5ΔElo < 0, measurement error attenuation, G > F(h)·ln{...} in Appendix).

RETROCAUSAL_GENEALOGY: Historical lineage from Pollard 2006, Schwartz & Barsky 1977, Dowie 1982, Torgler 2004, Monks & Husch 2009, Tullock 1980, Lazear & Rosen 1981, Elo 1978, Baumeister & Steinhilber 1984, Jordet et al. 2012. Multi-week traps: tournament scheduling, seeding, choking under pressure, measurement error in Elo ratings.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract/theoretical. I need to interpret "crisis habit regression" as teams regressing to habitual performance under tournament pressure, "counter-trap" as the statistical trap of assuming constant HA regardless of team strength, "clock" as the temporal dynamics (pre-1971 vs 1971-1999 vs 2000-2024). Multi-hop reasoning about how organizers and teams update beliefs.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss crowd effects, referee bias, travel fatigue, venue familiarity (Bryson et al. 2021; Gómez-Ruano et al. 2022), weather not explicitly in paper but travel fatigue is. The veto: if biomechanical/travel/crowd layers don't vary by Elo, then match-level HA shouldn't vary by Elo (confirmed: HT·ΔElo p=0.923). Tournament-level variation emerges purely from compound probability (survival through rounds), not from performance HA varying by strength.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
1. Veto: If HA in performance varied by Elo, then Table 4 HT·ΔElo would be significant. It is not (p=0.923). Prediction: Tournament HA gradient must come from compound probability (survival), not match-level performance modulation.
2. Veto: If measurement error in Elo were large (>20%), the predicted HA gradient would attenuate toward zero. Study finds ~10% attenuation (Bound et al. 2001; Kaminski 2022). Prediction: True gradient is slightly steeper than 9→22→42 pp.
3. Veto: If seeding gave weak hosts easier paths, the knockout-only subsample should show no gradient. Study finds similar pattern in knockout subsample (968 matches), though less precise. Prediction: Gradient persists independent of group-stage seeding advantages.

Word count: I need to ensure total is >= 1,000 words. THINK_TRACE alone needs >= 400. Let me aim for roughly 200-250 words per section on average, with THINK_TRACE being the longest.

Let me draft carefully, making sure to use [PAGE N] citations. Looking at the source, page markers appear as:
> **2 —** A. Kalwij...
> **3 —** A. Kalwij...
> etc.
I'll cite as [PAGE 2], [PAGE 3], etc.

Important: No betting lines. I will not mention odds, spreads, moneylines, or totals. I will mention probabilities and percentage points.

Let me write the LaTeX equations properly.

Equation (1):
\[
\Pr(win_{i,j}) = F\left(\beta_0 + \beta_1 HT_i + \beta_2 \Delta Elo_{i,j} + \beta_3 (HT_i \cdot \Delta Elo_{i,j}) + \gamma D\right)
\]
where \(F(\cdot)\) is the standard logistic CDF, \(\Delta Elo_{i,j} = Elo_i - Elo_j\), \(D \in \{0,1\}\).

Equation (2):
\[
HA^M(\Delta Elo; \boldsymbol{\beta} \mid D=0) = \Pr(win \mid HT=1, D=0) - \Pr(win \mid HT=0, D=0)
\]

Equation (3):
\[
\Pr(victory_{i,c}) = F\left(\alpha_0 + \alpha_1 G + \alpha_2 N + \alpha_3 \Delta Elo_{i,c} + \alpha_4 \frac{HT}{NH} + \alpha_5 \frac{HT}{NH} \cdot \Delta Elo_{i,c}\right)
\]

Equation (4):
\[
HA^T(\Delta Elo; \boldsymbol{\alpha} \mid N, G, NH=1) = \Pr(victory \mid HT=1) - \Pr(victory \mid HT=0)
\]

Appendix A.1 compound probability for 4-team, 2-round:
\[
HA^M(\alpha) = F(\alpha + h - 1) - F(\alpha - 1)
\]
\[
HA^T(\alpha) = [F(\alpha + h - 1)]^2 - [F(\alpha - 1)]^2 = HA^M(\alpha) \cdot [F(\alpha + h - 1) + F(\alpha - 1)]
\]
Generalized for \(G\) knockout matches:
\[
\frac{HA^T(\alpha)}{HA^M(\alpha)} = \sum_{g=0}^{G-1} [F(\alpha + h - 1)]^g [F(\alpha - 1)]^{G-1-g}
\]

Singularity/breakdown: Appendix says \(HA^T(1)\) is decreasing in \(G\) for \(G > F(h) \cdot \ln\{F(0)\}\) ... wait the text is garbled: "HA^T(1) is a decreasing function of G for G > F(h)·ln{F(0)} with F(0)=2^1..." Actually F(0)=0.5 for logistic. The text says "with F(0) = 2^1" which is likely a typo/OCR for 1/2. I'll note the breakdown regime: when \(G\) exceeds a threshold dependent on \(h\), marginal HA for tournament victory declines because survival probability compounds downward.

Also breakdown: if \(\alpha_4 + \alpha_5 \Delta Elo < 0\), no HA. But estimated \(\alpha_4 > 0\) and interaction not significant.

Measurement error: ~10% attenuation bias (Bound et al. 2001; Stefanski & Carroll 1985).

Significance: 0.5% level for plausibly replicable (Benjamin et al. 2018), 5% suggestive.

Now let me write. I'll aim for density and accuracy.

THINK_TRACE section needs to be >=400 words. Let me make it rich.

I should not invent fake ratios. I can mention the ratio HA^T/HA^M from Figure 3, but that's from the paper, not invented. The paper says ratio increases monotonically with Elo. That's fine.

Let me draft.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I need to count words roughly. Let me write generously.

THINK_TRACE draft (~500 words):
The paper's core identification rests on a multi-hop chain: (1) match outcomes are observed for HT-AT pairings and AT-AT pairings across 4,091 matches [PAGE 3]; (2) the HT effect is identified from within-tournament variation because some matches feature a host and others do not [PAGE 3]; (3) Elo ratings are lagged to December 31 of the preceding year, reducing reverse causality from tournament performance to rating [PAGE 3]. The statistical model in Equation (1) allows HA in performance to vary with strength differential via \(HT \cdot \Delta Elo\), yet Table 4 reports this interaction at \(p=0.923\) [PAGE 6], implying match-level HA is effectively constant across Elo strata (~21 pp at \(\Delta Elo=0\), peaking near 23 pp at \(\Delta Elo \approx -100\)) [PAGE 6].

The gray zone lies in translating match-level constancy into tournament-level heterogeneity. Compound probability provides the mechanism: a strong HT survives more knockout rounds, so the home-field edge compounds multiplicatively rather than additively. Appendix A.1 formalizes this for a four-team bracket: \(HA^T(\alpha) = HA^M(\alpha) \cdot [F(\alpha+h-1) + F(\alpha-1)]\), which is strictly increasing in team strength \(\alpha\) when \(\alpha > 1\) [PAGE 12]. The empirical analog in Equation (3) estimates \(\alpha_4 = 2.322\) (\(p<0.001\)) for \(HT/NH\), confirming a baseline tournament-level HA [PAGE 8]. Because \(\alpha_5\) is insignificant (\(p=0.772\)), the gradient in HA by Elo is not driven by performance interactions but by the mechanical survival calculus of the knockout tree.

A second gray zone is significance calibration. Following Benjamin et al. (2018), the author treats \(p<0.005\) as plausibly replicable and \(p<0.05\) as merely suggestive [PAGE 6]. The time-trend test yields \(p=0.043\) [PAGE 10], which is suggestive but not confirmatory: HA appears larger before 1971 and stable thereafter. This sits near the boundary of evidentiary standards and should not be overweighted. Measurement error in Elo ratings induces attenuation; instrumental-variables checks suggest roughly 10% attenuation [PAGE 10], meaning the reported 9 pp → 22 pp → 42 pp gradient is conservative. Seeding introduces a third gray zone: hosts are placed in the strongest pot regardless of Elo, potentially weakening group-stage opponents [PAGE 10]. The knockout-only subsample (968 matches) mitigates this and preserves the gradient, though with wider standard errors [PAGE 10].

The 2010 vs. 2014 World Cup comparison [PAGE 8] translates the abstract gradient into a concrete counterfactual: South Africa (Elo 1,521) gained roughly 1.4 pp in tournament-victory probability from hosting, while Brazil (Elo 2,132) gained roughly 42.3 pp. Because only one team can win, the host's gain is an away-team's loss; the average away disadvantage therefore varies inversely with host strength. This completes the derivation from individual match probabilities to distributional tournament outcomes.

SOURCE_OPERATORS_AND_EQUATIONS draft (~250 words):
Equations and units:
- Elo rating: points, mean 1,682, SD 154 (rounded to 150 for prediction steps of 10 Elo points) [PAGE 4, PAGE 6].
- Equation (1): \(\Pr(win_{i,j}) = F(\beta_0 + \beta_1 HT_i + \beta_2 \Delta Elo_{i,j} + \beta_3 HT_i \Delta Elo_{i,j} + \gamma D)\), \(F\) = standard logistic CDF, \(D=1\) if draw possible [PAGE 4]. Threshold \(\gamma\): performance difference must exceed \(\gamma - \beta_0\) to win drawable matches [PAGE 4].
- Equation (2): \(HA^M(\Delta Elo; \boldsymbol{\beta} \mid D=0) = \Pr(win \mid HT=1) - \Pr(win \mid HT=0)\), knockout only [PAGE 4]. Computed for \(\Delta Elo \in [-400, 400]\) [PAGE 4].
- Equation (3): \(\Pr(victory_{i,c}) = F(\alpha_0 + \alpha_1 G + \alpha_2 N + \alpha_3 \Delta Elo_{i,c} + \alpha_4 HT/NH + \alpha_5 (HT/NH)\Delta Elo_{i,c})\), \(N=16\), \(G=6\) means, \(NH=1\) [PAGE 4]. \(\Delta Elo_{i,c} = Elo_{i,c} - Elo_c\).
- Equation (4): \(HA^T(\Delta Elo; \boldsymbol{\alpha} \mid N,G,NH=1) = \Pr(victory \mid HT=1) - \Pr(victory \mid HT=0)\), \(\Delta Elo \in [-250, 250]\) [PAGE 5].
- Appendix A.1: \(HA^T(\alpha) = [F(\alpha+h-1)]^2 - [F(\alpha-1)]^2\) for two-round four-team bracket; generalized \(G\)-match ratio \(HA^T/HA^M = \sum_{g=0}^{G-1} F(\alpha+h-1)^g F(\alpha-1)^{G-1-g}\) [PAGE 12]. Breakdown: \(HA^T(1)\) decreases in \(G\) when \(G > F(h)\ln\{F(0)\}\), \(F(0)=0.5\).
- Table 4 estimates: \(\hat\beta_{HT}=0.918\), \(\hat\beta_{\Delta Elo/100}=0.448\), \(\hat\beta_{HT\cdot\Delta Elo/100}=0.004\) (\(p=0.923\)) [PAGE 6].
- Table 5 estimates: \(\hat\alpha_{HT/\#hosts}=2.322\), \(\hat\alpha_{\Delta Elo/100}=0.730\), interaction \(p=0.772\) [PAGE 8].
- Units of effect: percentage points (pp); 99% CIs reported: average HT HA 22.4 pp (12.7–32.0), +1 SD HA 41.6 pp (28.6–54.6), −1 SD HA 9.2 pp (3.8–14.7) [PAGE 10].

RETROCAUSAL_GENEALOGY (~200 words):
Lineage: Pollard (2006) on worldwide regional HA; Schwartz & Barsky (1977) on crowd/referee effects; Dowie (1982) noting six of 22 World Cups won by hosts; Torgler (2004) estimating 45 pp match win boost at 2002 World Cup; Monks & Husch (2009) on home-continent effects [PAGE 2]. Theoretical base: Tullock (1980) rent-seeking and Lazear & Rosen (1981) rank-order tournaments justify logit specification [PAGE 4]. Elo (1978) provides the strength metric, correlated 0.90 with FIFA rankings (1992–2023) and 0.96 with FIFA's post-2018 Elo-based ratings [PAGE 3]. Behavioral literatures: Baumeister & Steinhilber (1984) and Jordet et al. (2012) on choking under pressure [PAGE 2].

Multi-week traps: (1) Tournament scheduling over weeks creates cumulative fatigue and recovery asymmetries not captured by static Elo; (2) seeding pots are fixed before Elo is measured, so group-draw luck covaries with host strength; (3) the 2010/2014 comparison shows a host's identity can shift tournament outcomes for away teams across entire confederations, meaning host selection is a tournament-design variable, not a neutral backdrop [PAGE 8].

RECURSIVE_THEORY_OF_MIND (~200 words):
Crisis habit regression: under knockout pressure, teams revert to habitual tactics; the 2014 Brazil semifinal collapse (7–1) exemplifies a host choking when favorite, implying Elo and HA explain only part of variance [PAGE 10]. Counter-trap: assuming HA is a fixed match-level constant (~21 pp) ignores that tournament-level HA is endogenous to host strength via compound probability; organizers who treat HA as invariant misprice hosting bids. Clock: time-trend evidence suggests HA was larger pre-1971 and stable across 1971–1999 and 2000–2024 (\(p=0.043\)) [PAGE 10], indicating the "clock" of home advantage regimes shifted around the 1970s, possibly with penalty-shootout adoption and media commercialization. Recursive model: organizers observe past host performance, update beliefs about host strength, select bids accordingly, which alters the distribution of host Elo in future tournaments, which then changes the expected HA gradient—a self-referential loop not modeled in Equation (3).

CROSS_LAYER_VETO_ADJUDICATION (~150 words):
Physical layer: crowd effects, referee bias, travel fatigue, venue familiarity (Bryson et al. 2021; Gómez-Ruano et al. 2022; Pollard 2008) operate at match level. If these scaled with Elo, Table 4's \(HT \cdot \Delta Elo\) would be significant; it is not (\(p=0.923\)) [PAGE 6]. Biomechanical layer: travel fatigue affects away squads irrespective of Elo; since knockout matches cannot draw and travel distances are exogenous to team rating, this layer is absorbed into the constant \(\beta_1\), not the interaction. Weather veto: not explicitly modeled, but because match-level HA does not vary with \(\Delta Elo\), weather-induced HA cannot be strength-dependent in this sample. Veto proof: any physical/biomechanical/weather factor that varies with Elo is empirically vetoed at the match level; the residual tournament-level gradient must therefore arise from tournament structure (compound probability), not from on-field performance modulation [PAGE 6, PAGE 8].

RLVR_COUNTERFACTUAL_VETOES (~200 words):
1. Veto scenario: Match-level HA varies by Elo. Prediction under veto: Table 4 interaction \(HT \cdot \Delta Elo\) significant at \(p<0.005\). Actual: \(p=0.923\) [PAGE 6]. Veto stands. Counterfactual prediction: if a future dataset finds significant interaction, the paper's compound-probability-only mechanism is incomplete and HA^T gradient would partly reflect performance modulation.
2. Veto scenario: Elo measurement error exceeds 20%. Prediction under veto: attenuation collapses the 9→22→42 pp gradient toward zero. Actual: IV checks indicate ~10% attenuation [PAGE 10]. Veto stands. Counterfactual prediction: correcting for larger measurement error would steepen the gradient slightly above 42 pp for +1 SD hosts.
3. Veto scenario: Seeding gives weak hosts easy group paths, driving tournament HA. Prediction under veto: knockout-only subsample shows no gradient. Actual: knockout subsample (968 matches) shows similar increasing pattern, albeit less precise [PAGE 10]. Veto stands. Counterfactual prediction: if a future tournament eliminates seeding entirely and the gradient disappears, seeding—not compound probability—was the driver.

Total words: I think this will exceed 1,000. Let me make sure THINK_TRACE is >=400 words. I'll expand it slightly.

Also need to ensure no betting lines. I won't mention odds, spreads, moneylines, totals. I will use "probability", "percentage points", "win probability".

Let me check the page citations against the text:
- Page 2: Abstract, intro, six of 22 World Cups, Monks & Husch 2009.
- Page 3: Data section, 4,091 matches, 177 tournaments, 156 single host, Elo ratings end of preceding year.
- Page 4: Table 1, empirical framework, Equations (1), (2), (3), (4).
- Page 5: Equation (4) discussion, range -250 to 250, N=16, G=6.
- Page 6: Significance threshold 0.5%, Table 2, Table 4, Figure 1 discussion.
- Page 7: Table 4 notes, Figure 1.
- Page 8: Table 5, Figure 2, 2010/2014 example (South Africa 1,521 vs Brazil 2,132).
- Page 10: Robustness, multiple hosts excluded, LPM, measurement error ~10%, seeding, time effect p=0.043, knockout subsample 968 matches.
- Page 12: Appendix A.1 compound probability.

These look correct.

I'll write the final response now, ensuring each XML tag is exactly as specified.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core identification rests on a multi-hop chain that begins with match-level observation and ends with distributional tournament outcomes. First, the sample contains 4,091 matches across 177 cup tournaments between 1916 and 2024, with 156 tournaments hosted by a single country and 21 by multiple hosts [PAGE 3]. Second, the home-team effect is identified from within-tournament variation: some matches feature a home team versus an away team, while other matches feature two away teams, allowing the HT coefficient to be separated from team strength [PAGE 3]. Third, Elo ratings are measured at December 31 of the calendar year preceding the tournament, which reduces reverse causality from tournament performance to rating [PAGE 3].

The statistical model in Equation (1) explicitly allows home advantage in performance to vary with the strength differential via the term \(HT \cdot \Delta Elo\). Yet Table 4 reports this interaction as statistically inert (\(p=0.923\)) [PAGE 6], implying match-level home advantage is effectively constant across Elo strata—roughly 21 percentage points at \(\Delta Elo = 0\), peaking near 23 percentage points at \(\Delta Elo \approx -100\) [PAGE 6]. The gray zone is therefore translational: how does a constant match-level edge generate a strongly varying tournament-level edge? The answer is compound probability. A stronger home team survives more knockout rounds, so the home-field edge compounds multiplicatively across the bracket rather than additively. Appendix A.1 formalizes this for a four-team, two-round bracket: \(HA^T(\alpha) = [F(\alpha+h-1)]^2 - [F(\alpha-1)]^2 = HA^M(\alpha) \cdot [F(\alpha+h-1) + F(\alpha-1)]\), which is strictly increasing in team strength \(\alpha\) [PAGE 12]. The empirical analog in Equation (3) estimates \(\alpha_4 = 2.322\) for \(HT/NH\) (\(p<0.001\)) [PAGE 8], confirming a baseline tournament-level home advantage. Because the interaction \(\alpha_5\) is insignificant (\(p=0.772\)) [PAGE 8], the gradient in home advantage by Elo is not driven by performance interactions but by the mechanical survival calculus of the knockout tree.

A second gray zone concerns significance calibration. Following Benjamin et al. (2018), the author treats \(p<0.005\) as plausibly replicable evidence and \(p<0.05\) as merely suggestive [PAGE 6]. The time-trend test yields \(p=0.043\) [PAGE 10], which falls in the suggestive band: home advantage appears larger before 1971 and roughly stable across 1971–1999 and 2000–2024. This result should not be overweighted as confirmatory. A third gray zone is measurement error in Elo ratings. Instrumental-variables checks indicate attenuation of roughly 10 percent [PAGE 10], meaning the reported gradient—9 percentage points for a home team one standard deviation below average, 22 points for an average team, and 42 points for one standard deviation above average—is conservative; the true gradient is likely somewhat steeper. Seeding introduces a fourth gray zone: hosts are assigned to the strongest pot regardless of Elo, potentially weakening group-stage opponents [PAGE 10]. The knockout-only subsample (968 matches) mitigates this and preserves the increasing pattern, though with wider standard errors [PAGE 10].

The 2010 versus 2014 World Cup illustration [PAGE 8] completes the derivation from individual match probabilities to distributional tournament outcomes. South Africa (Elo 1,521) gained roughly 1.4 percentage points in tournament-victory probability from hosting (0.2 percent to 1.6 percent), whereas Brazil (Elo 2,132) gained roughly 42.3 percentage points (9.6 percent to 51.9 percent). Because only one team can win the tournament, the host's gain is an away team's loss; the average away disadvantage for tournament victory therefore varies inversely with host strength. The derivation closes the loop from match-level constancy to tournament-level heterogeneity through compound probability, while the gray zones—significance thresholds, measurement error, seeding, and time trends—define the boundaries of the claim.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and equations:

Elo rating: measured in Elo points; sample mean 1,682, standard deviation 154 points (rounded to 150 points for prediction steps of 10 Elo points) [PAGE 4, PAGE 6]. All probability effects are reported in percentage points (pp); 99 percent confidence intervals are used for headline quantifications [PAGE 10].

Equation (1), match win probability [PAGE 4]:
\[
\Pr(win_{i,j}) = F\Bigl(\beta_0 + \beta_1 HT_i + \beta_2 \Delta Elo_{i,j} + \beta_3 (HT_i \cdot \Delta Elo_{i,j}) + \gamma D\Bigr)
\]
where \(F(\cdot)\) is the standard logistic cumulative distribution function, \(\Delta Elo_{i,j} = Elo_i - Elo_j\), \(HT_i \in \{0,1\}\), and \(D=1\) if the match can end in a draw (\(D=0\) for knockout matches). The threshold parameter \(\gamma\) indicates that the performance difference must exceed \(\gamma - \beta_0\) to win a match that can end in a draw [PAGE 4]. Model estimated by maximum likelihood with standard errors clustered at the tournament level [PAGE 4].

Equation (2), home advantage for winning a match [PAGE 4]:
\[
HA^M(\Delta Elo; \boldsymbol{\beta} \mid D=0) = \Pr(win \mid HT=1, D=0) - \Pr(win \mid HT=0, D=0)
\]
Computed for \(\Delta Elo \in [-400, 400]\), approximately the 5th to 95th percentile of the empirical \(\Delta Elo\) distribution [PAGE 4].

Equation (3), tournament victory probability [PAGE 4]:
\[
\Pr(victory_{i,c}) = F\Bigl(\alpha_0 + \alpha_1 G + \alpha_2 N + \alpha_3 \Delta Elo_{i,c} + \alpha_4 \tfrac{HT}{NH} + \alpha_5 \tfrac{HT}{NH}\cdot \Delta Elo_{i,c}\Bigr)
\]
where \(\Delta Elo_{i,c} = Elo_{i,c} - Elo_c\), \(NH\) is the number of host countries, \(N\) is the number of participating teams, and \(G\) is the number of matches the winner plays. Predictions condition on sample means \(N=16\) and \(G=6\), and on \(NH=1\) [PAGE 4, PAGE 5].

Equation (4), home advantage for tournament victory [PAGE 5]:
\[
HA^T(\Delta Elo; \boldsymbol{\alpha} \mid N, G, NH=1) = \Pr(victory \mid HT=1) - \Pr(victory \mid HT=0)
\]
Computed for \(\Delta Elo \in [-250, 250]\), approximately the 5th to 95th percentile of the empirical tournament-level \(\Delta Elo\) distribution [PAGE 5].

Appendix A.1, compound probability mechanism [PAGE 12]:
For a four-team bracket with two elimination rounds and team strength \(\alpha\):
\[
HA^M(\alpha) = F(\alpha + h - 1) - F(\alpha - 1)
\]
\[
HA^T(\alpha) = [F(\alpha + h - 1)]^2 - [F(\alpha - 1)]^2 = HA^M(\alpha) \cdot \Bigl[F(\alpha + h - 1) + F(\alpha - 1)\Bigr]
\]
Generalized to \(G\) knockout matches:
\[
\frac{HA^T(\alpha)}{HA^M(\alpha)} = \sum_{g=0}^{G-1} [F(\alpha + h - 1)]^g [F(\alpha - 1)]^{G-1-g}
\]
which is increasing in \(\alpha\). Breakdown regime: \(HA^T(1)\) is a decreasing function of \(G\) when \(G > F(h)\ln\{F(0)\}\), with \(F(0)=0.5\) for the logistic CDF [PAGE 12].

Estimation results [PAGE 6, PAGE 8]:
Table 4, specification 3: \(\hat\beta_{HT} = 0.918\) (\(p<0.001\)); \(\hat\beta_{\Delta Elo/100} = 0.448\) (\(p<0.001\)); \(\hat\beta_{HT \cdot \Delta Elo/100} = 0.004\) (\(p=0.923\)).
Table 5, specification 1: \(\hat\alpha_{HT/\#hosts} = 2.322\) (\(p<0.001\)); \(\hat\alpha_{\Delta Elo/100} = 0.730\) (\(p<0.001\)); interaction \(HT/\#hosts \cdot \Delta Elo/100\): \(p=0.772\) [PAGE 8].
Headline quantifications [PAGE 10]: average Elo home team HA for tournament victory = 22.4 pp (99% CI: 12.7–32.0); +1 standard deviation home team = 41.6 pp (99% CI: 28.6–54.6); −1 standard deviation home team = 9.2 pp (99% CI: 3.8–14.7).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this study traces through several historical layers. The foundational home-advantage literature includes Schwartz and Barsky (1977) on crowd and referee effects, Pollard (2006) on worldwide regional variation in football home advantage, and Pollard (2008) on the unsolved puzzle of home advantage mechanisms [PAGE 2]. Early World Cup evidence includes Dowie (1982), noting that six of the 22 World Cups through 2002 were won by host teams, though those hosts were among the best teams in the world, complicating causal inference [PAGE 2]. Torgler (2004) estimated that playing at home increased the probability of winning a match by 45 percentage points at the 2002 World Cup [PAGE 2]. Monks and Husch (2009) demonstrated significant home advantage on final standings at the 1982–2006 World Cups for teams playing on the same continent as the host [PAGE 2].

The theoretical basis for the logit specification draws on Tullock's (1980) rent-seeking contest model and Lazear and Rosen's (1981) rank-order tournament model, which provide a game-theoretical foundation for modeling win probabilities as logistic functions of effort or performance differences [PAGE 4]. The strength metric, Elo rating, originates in Elo (1978); in this study it correlates at 0.90 with FIFA rankings for 1992–2023 and at 0.96 with FIFA's post-2018 Elo-based ratings [PAGE 3]. Behavioral mechanisms capable of generating heterogeneity by team strength include choking under pressure (Baumeister and Steinhilber, 1984; Jordet et al., 2012) and seeding effects that place hosts in favorable pots regardless of Elo (Monks and Husch, 2009; Lapré and Palazzolo, 2023) [PAGE 2, PAGE 10].

Multi-week traps specific to cup tournaments: (1) Tournament schedules unfold over weeks, generating cumulative travel fatigue and recovery asymmetries that static pre-tournament Elo ratings cannot capture; (2) seeding pots and group draws are fixed before the tournament, so draw luck covaries with host strength and can mimic a strength-dependent home advantage; (3) because only one team wins, a host country's identity shifts the entire distribution of away-team outcomes across confederations, meaning host selection is an active tournament-design variable rather than a neutral backdrop [PAGE 2, PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under knockout pressure, teams regress to habitual tactics rather than optimized ones. The 2014 Brazil semifinal collapse (a 7–1 loss to Germany) exemplifies a heavily favored host choking under the pressure of home expectation; the author notes this shows Elo and home advantage explain only part of tournament variance [PAGE 10]. If crisis habit regression systematically affects strong hosts more than weak hosts, it would introduce a negative interaction between Elo and tournament home advantage that is not captured by Equation (3)'s insignificant \(\alpha_5\).

Counter-trap: the statistical trap is to assume home advantage is a fixed match-level constant (approximately 21 percentage points at parity) and to extrapolate that constant linearly to tournament outcomes. This ignores that tournament-level home advantage is endogenous to host strength via compound probability: a strong host survives more rounds, mechanically amplifying its edge. Organizers who treat home advantage as invariant will misprice hosting bids and misjudge the competitive consequences of selecting a strong versus a weak host nation [PAGE 2, PAGE 5].

Clock: the temporal regime of home advantage appears to have shifted around 1971. The paper finds suggestive evidence (\(p=0.043\)) that home advantage was larger before 1971 and about the same across 1971–1999 and 2000–2024 [PAGE 10]. This clock shift may reflect the adoption of penalty shootouts in the mid-1970s, changes in media commercialization, or evolving referee-crowd dynamics. Because the clock is not modeled as a time-varying coefficient in Equation (3), the estimated average home advantage blends distinct historical regimes; future work should allow the home-advantage parameter to evolve over time, as is already done for Elo ratings of European club football [PAGE 10].

Recursive model of belief formation: organizers observe past host performance, update beliefs about how host strength interacts with home advantage, and select future bids accordingly. This alters the distribution of host Elo in subsequent tournaments, which changes the expected home-advantage gradient—a self-referential loop that Equation (3) treats as exogenous rather than as an equilibrium outcome of host-selection behavior.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: crowd effects on players and referees, visitor travel fatigue, venue familiarity, and playing tactics are the canonical sources of home advantage (Bryson et al., 2021; Gómez-Ruano et al., 2022; Pollard, 2008; Staufenbiel et al., 2015) [PAGE 2]. If these physical forces scaled with team strength, the match-level interaction \(HT \cdot \Delta Elo\) in Table 4 would be significant. It is not (\(p=0.923\)) [PAGE 6]. Therefore the physical layer is empirically vetoed as a source of Elo-dependent home advantage at the match level.

Biomechanical layer: travel fatigue affects away squads irrespective of their Elo rating; because knockout matches cannot end in a draw and travel distances are exogenous to team rating, this layer is absorbed into the constant home coefficient \(\beta_1\), not into a strength-dependent interaction. No biomechanical term is specified in Equation (1), and the estimated interaction null result supports exclusion [PAGE 4, PAGE 6].

Weather layer: weather is not explicitly modeled in the paper. However, because match-level home advantage does not vary with \(\Delta Elo\) (\(p=0.488\) for knockout matches in Table 2's descriptive test; \(p=0.923\) in the regression interaction), any weather-induced home advantage cannot be strength-dependent in this sample. The weather veto holds: the residual tournament-level gradient must arise from tournament structure (compound probability across rounds), not from on-field performance modulation by physical or biomechanical factors [PAGE 6, PAGE 8].

Veto adjudication summary: all physical, biomechanical, and weather channels that could plausibly vary with team strength are rejected at the match level. The surviving mechanism is the mechanical compounding of a roughly constant match edge across a fixed number of knockout rounds, which mechanically produces \(HA^T > HA^M\) for strong hosts and \(HA^T \approx HA^M\) for weak hosts [PAGE 5, PAGE 12].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1 — Match-level home advantage varies by Elo. Prediction under veto: Table 4's \(HT \cdot \Delta Elo\) interaction is significant at the \(p<0.005\) replicability threshold. Actual result: \(p=0.923\) [PAGE 6]. Veto stands. Counterfactual prediction: if a future dataset finds a significant match-level interaction, the paper's compound-probability-only mechanism is incomplete, and part of the tournament-level gradient would reflect performance modulation rather than survival arithmetic alone.

Veto scenario 2 — Elo measurement error exceeds 20 percent. Prediction under veto: attenuation bias collapses the 9 pp → 22 pp → 42 pp gradient toward zero. Actual result: instrumental-variables checks indicate attenuation of approximately 10 percent (Bound et al., 2001; Stefanski and Carroll, 1985; Kaminski, 2022) [PAGE 10]. Veto stands. Counterfactual prediction: correcting for larger measurement error would steepen the gradient slightly above 42 pp for a +1 standard deviation host and slightly below 9 pp for a −1 standard deviation host.

Veto scenario 3 — Seeding gives weak hosts easy group paths, driving tournament home advantage. Prediction under veto: the knockout-only subsample (968 matches, excluding group-stage seeding effects) shows no increasing gradient in home advantage by Elo. Actual result: the knockout subsample preserves a similar increasing pattern, though estimates are less precise because only three matches are played by the winner on average [PAGE 10]. Veto stands. Counterfactual prediction: if a future tournament eliminates seeding entirely and the gradient disappears, seeding—not compound probability—was the primary driver of the observed heterogeneity.
</RLVR_COUNTERFACTUAL_VETOES>