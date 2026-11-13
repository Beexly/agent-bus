---
source: "2020 - Scoring a Touchdown with Variable Pricing Evidence from a Quasi-Experiment in the NFL Ticket Markets - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2020"
pages: 31
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5832
---

<NATIVE_REASONING>
The user wants a deep analysis of a specific research paper about NFL variable pricing. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. Wait, the paper mentions Vegas odds and Super Bowl odds. I need to be careful here. The invariant says "Never mention spreads, totals, moneylines, or odds." But the source text contains "Vegas odds" and "Super Bowl odds." I think the invariant means I should not create betting lines or discuss gambling odds as part of my analysis/predictions. However, since the source text uses odds as control variables, I may need to reference them as control variables in the paper but I should not present betting lines or gambling advice. Actually, re-reading: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This is strict. I should avoid mentioning odds entirely if possible, or if referencing the source, I should refer to them as "team strength controls" or similar without using the word "odds" or presenting them as betting lines. But the user provided source text with odds. Hmm. I think the safest approach is to refer to them as "preseason/weekly team strength controls" or "expected performance metrics" and avoid the word "odds" entirely, or use it only in direct quotes with [PAGE N] citation but not as part of my own analysis framing as betting. Actually, to be safe, I will avoid using the word "odds" in my own voice and refer to them as "team strength indicators" or similar. If I must quote, I'll cite but minimize.

2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.

3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis covering all these sections. Let's plan the content.

Paper: "Scoring a Touchdown with Variable Pricing: Evidence from a Quasi-Experiment in the NFL Ticket Markets" (MIT Sloan 2020). 31 pages provided.

Key facts:
- NFL allowed variable pricing before 2014 season. 15 of 32 teams switched.
- Difference-in-differences with propensity score weighting.
- Main result: 2.95% additional tickets per game through primary market (β=0.0291, exp(0.0291)-1 ≈ 2.95%).
- Moderated by -0.64% for each percentage increase in average ticket prices (actually coefficient -0.0065 on interaction VP × % Change in Average Ticket Price; interpreted as 0.64%? Let's check: column 2 Table 2: VP × % Change in Average Ticket Price = -0.0065***. The text says "negatively moderated by 0.64% for each percentage increase in the average ticket prices". Wait, coefficient is -0.0065. If % change is in percentage points (e.g., 1% increase = 1 unit?), then exp(-0.0065)-1 ≈ -0.65%. So yes, roughly 0.64% attenuation per percentage point increase in average ticket price.
- Mechanisms: quality signaling. More positive in lower income towns (δ_MedianIncome = -0.0288***) and higher income diversity (δ_IncomeDiversity = 1.1194***). More positive for less attractive games (η = -0.0221* on VP × Attractiveness). F-stat fails to reject β = |η|, meaning attractive games no significant change.
- Resale market: listings up for less attractive games (β=645.46*), down for attractive games (interaction -1,080.28**, net -435). Minimum resale price: no change for less attractive (β=-0.0784, ns), up for attractive (interaction 0.2370***). No cannibalization.
- Revenue impact hypothetical: 1.26% for average team; up to 5% for low income/high diversity hometown.
- Data sources: NFL.com game books (paid attendance), Wayback Machine/ESPN-Stubhub resale listings (Aug 1 and Sep 1), Team Marketing Report (avg ticket price), Pro-Football-Reference (capacity, championships, performance), SportsOddsHistory.com (preseason/weekly Super Bowl odds - need to avoid saying odds?), Census Bureau (income, Gini), DiversityData.org (ethnic diversity). Excluded 49ers (Levi's Stadium), Vikings (Metrodome collapse), Titans (broker scandal), international games, Jets-Bills in Detroit snowstorm.
- Attractiveness identified via ML algorithm in Appendix D, trained on 2012-2013, validated on 2014 high-priced games (85.4% TPR).
- Parallel trends: pre-treatment trends not significantly different (λ_NTreated = 0.0002, p>.10). Falsification test in 2013 placebo: 0.0104, p>.10.
- Robustness: exclude New Orleans Saints, results hold.

Now sections:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Need to discuss causal identification, propensity score weighting, parallel trends, potential confounders (stadium changes, weather, team performance), endogeneity of switch selection, quality-signaling vs price level effects, resale cannibalization vs option value, the "attractiveness" ML construction as a gray zone (supervised learning on post-treatment pricing choices to label pre-treatment games, risk of circularity), income diversity interaction interpretation (Gini coefficient log transform), breakdown regimes (when average ticket price increase fully offsets the 2.95% gain: solve exp(0.0291 - 0.0065*ΔP) - 1 = 0 → ΔP ≈ 4.48 percentage points? Actually 0.0291/0.0065 = 4.4769. So if average ticket price rises by ~4.48% (relative to previous season), the main effect is attenuated to zero. That's a breakdown regime. Also small N (32 teams, 15 treated), propensity score model has N=29 (Table 5), some covariates imprecise (SE large). The Gini income coefficient in propensity score is -16.4987 with SE 17.5588, not significant. Weighted p-values mostly >0.10 but sample small. Also the dependent variable is log(paid attendance), which assumes constant elasticity and may be bounded by stadium capacity (singularity at capacity). Attendance is capped at seat capacity (~53k-82k), so log-linear model can hit ceiling effects; for sellouts, cannot increase further. This is a physical veto/biomechanical analog.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper. Equation (1): ln(PMSales_ig) = α_i + β VP_ig + W_ig + Y_ig + O_ig + X'_ig γ + ε_ig. Effect: 100×(exp(β)-1). Equation (2) parallel trends. Equation (3) heterogeneity income. Equation (4) attractiveness. Equation (5) resale listings. Equation (6) resale min price. Propensity weight formula: w(T,x) = ... (need to reconstruct from text: they wrote something garbled but reference Hirano and Imbens 2001). Units: log points, percentage changes, ticket counts, USD prices, Gini coefficient (0-100 or 0-1?), population millions. Page citations for each.

RETROCAUSAL_GENEALOGY: Historical lineage: Pigou (1932) second-degree price discrimination, Rosen & Rosenfield (1997) ticket pricing, Leslie (2004) Broadway, Phillips (2005) variable pricing, Bennett et al. (2015) option-value/cannibalization, Su (2010) scalpers, Sweeting (2012) dynamic pricing resale, Talluri & van Ryzin (2004) revenue management. Multi-week traps: NFL season is 17 weeks, weekly fixed effects, season fixed effects, opponent fixed effects; the "clock" is the season timeline; intertemporal substitution (buy early vs wait for resale); the 2014 switch is a one-time quasi-experiment; teams that didn't switch eventually did (except Saints), creating a "eventual treatment" trap and limiting long-run control group purity.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Customers under fixed pricing defer to resale (habit regression under uncertainty). Variable pricing signals quality (counter-trap: low price signals unattractive but draws price-sensitive buyers; high price signals attractive and triggers option-value). Teams strategically switch based on observable demographics (endogeneity). The "clock" is the pre-season schedule release (April 2014) and Aug 1/Sep 1 resale snapshots. Crisis habit: price-sensitive customers habituated to waiting for resale discounts; variable pricing disrupts this by revealing organizer beliefs. Counter-trap: teams might use variable pricing to extract more from attractive games while disguising unattractive games as cheap. Multi-order reasoning: team predicts customer inference → customer updates belief about game quality → purchase timing shifts between primary/resale.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: stadium capacity hard cap (paid attendance cannot exceed seats; Table 1 capacity mean 70,964, SD 6,206). Biomechanical: fan travel, game day experience (not modeled). Weather: they excluded 9 games due to extreme weather/international (Footnote 7, Page 9-10), e.g., Jets-Bills in Detroit due to snowstorm; Metrodome roof collapse (Vikings); Levi's Stadium new facility. These are vetoes that remove confounds. Also team performance real-time effects excluded from attractiveness ML (Appendix D Step 2). Weather/snowstorm is a physical veto. Capacity singularity: if game is sellout, VP cannot increase sales further; this is a breakdown regime. The paper excludes teams with stadium changes to avoid capacity confounds.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable (can be tested/falsified) with predictions.
1. Veto: If a treated team raises average ticket price by >4.48% relative to previous season, the primary sales lift from VP should be statistically indistinguishable from zero (breakdown of main effect). Prediction: In the sub-sample of treated teams with ΔAvgPrice > 4.48%, β_VP ≈ 0 (p > .10).
2. Veto: If a stadium is at or near capacity (>98% paid attendance) for attractive games, VP should not increase primary sales for those games regardless of signaling, due to physical ceiling. Prediction: For treated teams × attractive games × pre-treatment sellout rate > 98%, the VP × Attractiveness coefficient should be null and primary sales should not rise.
3. Veto: If resale minimum listing price for unattractive games falls significantly after VP, cannibalization is occurring and the paper's "no threat" conclusion fails. Prediction: In a holdout season (2015+) or for teams switching later, ln(MinResalePrice) for unattractive games should show β_VP < 0 with p < .05 if cannibalization dominates; the paper found β=-0.0784 (ns), so a significant negative coefficient in a new dataset would veto the generalizability.

Need to ensure word count >= 1000 across sections. Each section should be substantial. THINK_TRACE >= 400 words alone. Total probably 1500-2500 words.

Also need to avoid betting lines. I will refer to "SportsOddsHistory.com" data as "preseason and weekly team strength indices" or "expected championship probability controls" without using the word "odds" or "moneyline". Actually, the text says "Vegas odds". I should probably just say "team strength controls" and cite page numbers. If I quote, I can say "weekly Vegas odds" but that's a direct quote from source. The invariant says "Never mention spreads, totals, moneylines, or odds." I'll interpret this as: I, the assistant, must not generate betting lines or discuss gambling odds as part of my analysis output. Referencing the source's control variable by its name might be okay if cited, but to be absolutely safe, I will paraphrase as "team strength indicators (SportsOddsHistory.com)" and avoid the word odds entirely in my own prose. In direct quotes from source, I'll use [PAGE N] but maybe avoid quoting the word "odds" if possible. Let's just say "team strength controls sourced from SportsOddsHistory.com" and cite [PAGE 9] or [PAGE 11]. I will not say "Vegas odds."

Let's draft carefully.

Structure:
- Start with <THINK_TRACE>
- Then <SOURCE_OPERATORS_AND_EQUATIONS>
- Then <RETROCAUSAL_GENEALOGY>
- Then <RECURSIVE_THEORY_OF_MIND>
- Then <CROSS_LAYER_VETO_ADJUDICATION>
- Then <RLVR_COUNTERFACTUAL_VETOES>

Make sure no markdown outside XML? The user didn't specify, but I'll just output the XML sections.

Let's write.

THINK_TRACE: Need >=400 words. Discuss:
- Causal identification: DiD with propensity score weighting. The switch is strategic (endogenous). Propensity score estimated via logistic regression on 29 teams (Table 5, Appendix B). Some covariates have huge SEs (e.g., ln(GiniIncome) SE 17.5588 vs coef -16.4987), indicating small-sample imprecision. Weighted balance tests (Table 6) show no significant differences at 10% level, but with N=29, power is low.
- Parallel trends: Equation (2), λ_NTreated = 0.0002, p > .10 [PAGE 13-14]. Supports identification but not conclusive [PAGE 14].
- Falsification: placebo 2013, coefficient 0.0104, p > .10 [PAGE 14, Table 7 Appendix C].
- Gray zone: Attractiveness variable constructed via ML algorithm trained on 2012-2013 actual attendance, then used to label pre-treatment games, and validated against 2014 high-priced game selections (85.4% TPR) [PAGE 29, Appendix D]. Risk: circularity because the 2014 high-priced games are themselves post-treatment choices by treated teams; using them to validate a pre-treatment classifier may leak treatment information into the definition of attractiveness. This is a multi-hop gray zone: treatment status influences the label used to moderate the treatment effect.
- Price-level confound: Column (2) Table 2 shows VP effect attenuated by average ticket price changes (-0.0065***). Breakdown: solve 0.0291 - 0.0065·ΔP̄ = 0 → ΔP̄ ≈ 4.48 percentage points. If a team raises average price by more than ~4.48%, the net lift vanishes [PAGE 14].
- Capacity ceiling: Dependent variable is log(paid attendance); attendance bounded by stadium capacity (mean 70,964, SD 6,206) [PAGE 9 Table 1]. For sellouts, no further primary sales possible; this is a singularity/breakdown regime for the log-linear model. The paper excludes stadium changes (49ers, Vikings) to mitigate [PAGE 9].
- Resale cannibalization vs option value: Listings rise for unattractive games (+645.46) but prices don't fall (β=-0.0784, ns) [PAGE 18-20, Table 3]. For attractive games, listings fall (-435 net) and min resale price rises (interaction 0.2370***) [PAGE 18-20]. This supports option-value effect, but the resale data are snapshots on Aug 1 and Sep 1 only [PAGE 8-9], which may not capture late-season listing dynamics. That's a temporal measurement gray zone.
- Small N and multiple comparisons: 32 teams, 15 treated, 688 team-game observations. Interactions tested extensively; risk of post-selection inference. The Gini income interaction coefficient is large (1.1194) but measured with SE 0.2830; income diversity is a Gini coefficient likely scaled 0-100 or 0-1? Table 1 says Gini Income (%) mean 46.8, so percentage points. The coefficient interpretation: a 1 percentage point increase in Gini multiplies the VP effect by exp(1.1194) ≈ 3.06? That seems huge. Need to check scaling: Table 1 Gini Income (%) mean 46.8, std 1.9. If it's in percentage points (0-100), a 1-point increase is tiny relative to std, but coefficient 1.1194 implies enormous sensitivity. Maybe it's entered as a ratio or the variable is not in percent despite table label. This is a measurement/gray-zone audit point: units of Gini are ambiguous between Table 1 label (%) and regression scaling; if entered as 0-1 vs 0-100, the coefficient changes by factor of 100. This affects economic magnitude claims.

Need to write this in >400 words. I'll aim for ~500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with LaTeX, units, page citations.

Equation 1 (Page 12): ln(PMSales_ig) = α_i + β VP_ig + W_ig + Y_ig + O_ig + X'_ig γ + ε_ig.
- Dependent variable: natural logarithm of paid attendance (primary market sales volume), unit: log tickets.
- VP_ig: binary indicator = 1 if team i switched to variable pricing before home game g.
- β coefficient: exp(β̂)-1; β̂ = 0.0291 → +2.95% [Page 14].
- X controls: median income, population, ln(Gini income), ln(Gini ethnicity), average ticket price, % change in avg ticket price, seating capacity, previous season performance, preseason team strength index, weekly team strength index.
- Fixed effects: team, NFL week (17), season (2012-2014), opponent team.

Equation 2 (Page 13-14): ln(PMSales_ig) = α_i + λ_1 t_ig + λ_NTreated × t_ig + O_ig + X'_ig γ + ξ_ig, pre-treatment only.
- λ_NTreated = 0.0002, p > .10; parallel trends check.

Propensity weight (Page 11): w(T,x) referencing Hirano and Imbens (2001); logistic regression on N=29 teams [Appendix B, Page 27]. Some coefficients imprecise: ln(GiniIncome) coef -16.4987, SE 17.5588.

Equation 3 (Page 15): heterogeneity by median income and income diversity.
- δ_MedianIncome = -0.0288*** [Page 16].
- δ_IncomeDiversity = 1.1194*** [Page 16].

Equation 4 (Page 16-17): VP × Attractiveness η = -0.0221* [Page 17].
- F-test fails to reject β = |η| (F = .01, p > .10) [Page 17].

Equation 5 (Page 18): RMListings_ig = α_i + β VP_ig + η VP_ig × Attractiveness_ig + ...
- β = 645.46* (less attractive games listings up) [Page 19; text says 645.56 in table, 645.46 in text; I'll note the discrepancy? The text says 645.46 but table says 645.56. I should cite what's there. Maybe use table value 645.56.*]
- Interaction = -1,080.28** [Page 19]. Net for attractive: 645.46 - 1,080.28 = -434.82 ≈ -435.

Equation 6 (Page 19-20): ln(MinResalePrice_ig) = ...
- β = -0.0784, p > .10 (less attractive, no price change) [Page 20].
- Interaction = 0.2370*** (attractive, price up) [Page 20].

Units and breakdown:
- Attendance bounded by stadium capacity (Table 1: mean 70,964, range 53,286–82,500) [Page 9]. Log model singularity at capacity.
- Average ticket price moderation: 0.0291 / 0.0065 ≈ 4.48 percentage points of average price increase fully offsets the VP lift [Page 14].
- Resale data: only two snapshots per season (Aug 1, Sep 1) [Page 8].

RETROCAUSAL_GENEALOGY:
- Lineage: Pigou (1932) second-degree price discrimination [Page 4]; Rosen & Rosenfield (1997) ticket pricing [Page 4]; Leslie (2004) Broadway uniform vs seat-based [Page 4]; Phillips (2005) variable pricing [Page 1]; Bennett et al. (2015) option-value vs cannibalization [Pages 1-2, 5]; Su (2010) scalpers/inventory risk [Page 5]; Sweeting (2012) dynamic pricing resale [Page 5]; Talluri & van Ryzin (2004) revenue management [Page 2]; Xu et al. (2019) MLB dynamic pricing [Page 4].
- NFL institutional history: NFL held fixed pricing longest; allowed team-level variable pricing before 2014; only 15/32 teams adopted due to short preparation after April 2014 schedule release [Page 7]. 3 teams excluded for stadium/PR shocks (49ers Levi's, Vikings Metrodome roof, Titans broker scandal) [Page 9]. Eventually all except Saints adopted, shrinking the pure control group [Page 17, Appendix C].
- Multi-week traps: 17-week regular season with weekly fixed effects; week-of-season importance changes (e.g., Thanksgiving, kickoff) [Appendix D, Page 30]; intertemporal substitution: season-ticket holders vs single-game buyers [Page 7]; option-value depends on expected sellout likelihood formed before season but resolved week-by-week; the "clock" is the pre-season pricing commitment (April) vs Aug/Sep resale snapshots vs game-day attendance.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under fixed pricing, price-sensitive customers learn to defer purchase to resale to avoid overpaying for unattractive games (habit regression to secondary market) [Pages 1-2].
- Counter-trap: Variable pricing is a signal of organizer beliefs. Low price signals unattractive, pulling price-sensitive buyers back to primary market. High price signals attractive and triggers option-value (buy now, resell later at premium) [Pages 1-2, 8].
- Multi-order reasoning: Team anticipates customer inference from price schedule → customer updates game-quality belief → shifts primary vs resale demand → team observes listings and adjusts future pricing. This is a Stackelberg-like recursive loop.
- Clock: Pre-season schedule release (April 2014) fixes the pricing regime; Aug 1/Sep 1 resale snapshots measure expectations before games are played; weekly team strength controls capture real-time belief updates; attractiveness ML excludes real-time effects to isolate pre-season perceived quality [Appendix D, Page 29].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Stadium capacity hard ceiling (mean 70,964 seats) [Page 9]. Paid attendance cannot exceed seats; for sellouts, VP has no margin to increase primary sales. This is a singularity where the log-linear effect must attenuate to zero. Teams excluded for stadium changes (new Levi's Stadium, temporary Vikings stadium) to avoid capacity confounds [Page 9].
- Biomechanical layer: Fan travel, game-day weather, health. The paper excludes 9 games for extreme weather/international relocation (e.g., Jets-Bills moved to Detroit due to snowstorm) [Page 9, Footnote 7]. Metrodome roof collapse forced Vikings relocation [Page 9]. These are physical vetoes removed from the sample.
- Weather veto: Snowstorm and extreme cold are explicitly excluded; however, real-time weather on game day remains in the error term and can bias attendance downward independent of pricing, which the attractiveness ML attempts to strip out by excluding real-time effects [Page 16, Appendix D].
- Breakdown regime: If a game is a near-certain sellout (>98% capacity), primary sales are capped; variable pricing cannot move quantity, only price reallocation. The paper finds no significant sales change for attractive games despite price increases, consistent with capacity or inelastic demand.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Price-level offset veto. Condition: treated team raises average ticket price by ΔP̄ > 4.48% relative to prior season. Verifiable test: re-estimate Equation (1) on sub-sample of treated team-games with above-median ΔP̄. Prediction: β_VP ≈ 0, p > .10; the 2.95% lift is fully absorbed. This directly tests the breakdown derived from Equation (1) and Table 2 Column (2) [Page 14].
- Scenario 2: Capacity ceiling veto. Condition: attractive games in stadiums with pre-treatment paid attendance > 98% of capacity. Verifiable test: interact VP × Attractiveness × HighCapacityDummy. Prediction: coefficient on VP × Attractiveness is null and primary sales do not increase; the log-linear model hits the physical singularity. This tests whether the null effect for attractive games is due to option-value signaling or simply physical scarcity [Page 17, Page 9 Table 1].
- Scenario 3: Resale cannibalization veto. Condition: in a subsequent adoption wave (post-2014 teams or 2015 season), minimum resale listing price for unattractive games falls significantly after VP. Verifiable test: estimate Equation (6) on new switchers. Prediction: if β_VP for unattractive games < 0 with p < .05, cannibalization is active and the paper's "no threat" conclusion [Page 20] does not generalize. If null, the finding holds.

I need to ensure total words across sections >= 1000. Let me count roughly as I write. THINK_TRACE ~600, SOURCE ~500, RETRO ~300, RECURSIVE ~300, CROSS ~300, RLVR ~300. Total > 2000. Good.

Also must cite exact [PAGE N] markers and verbatim quotes where appropriate. I'll include some short verbatim quotes with citations.

Check betting invariant: I will not say "odds", "spread", "moneyline", "total". I'll say "team strength index" or "championship probability control". If quoting source, I'll avoid the phrase "Vegas odds" or paraphrase. Actually I can say "SportsOddsHistory.com team strength controls" without saying odds.

Check toy equations: All equations are from the paper, formal LaTeX. No fake ratios like Force/Fatigue. The 4.48 percentage point breakdown is derived from the paper's coefficients, not invented; it's a legitimate algebraic manipulation.

Let's write it out.

Need to be careful with LaTeX syntax inside XML. It should be fine.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The causal architecture of this study rests on a difference-in-differences (DiD) design fortified by propensity-score weighting, but several multi-hop gray zones require audit. First, the treatment—switching to variable pricing before the 2014 NFL season—is a strategic team-level decision, not a randomized assignment. The authors address endogeneity by estimating propensity scores via logistic regression on 29 teams (Appendix B, Table 5; [PAGE 27]) and applying sampling weights to balance treatment and control groups. The weighted balance tests (Table 6; [PAGE 28]) report no statistically significant differences at the 10% level, yet the small sample (N = 29) yields imprecise estimates; for example, the coefficient on ln(Gini Income) is −16.4987 with a standard error of 17.5588, implying low power to detect residual covariate imbalance. This creates a gray zone: balance on observables does not rule out unobservable time-varying confounding correlated with both the switch decision and ticket demand.

Second, the parallel-trends identification check uses Equation (2) on pre-treatment seasons 2012–2013 and finds λ_NTreated = 0.0002 (p > .10), supporting parallel weekly sales trends ([PAGE 13]–[PAGE 14]). A falsification test assigning a placebo switch in 2013 yields 0.0104 (p > .10) ([PAGE 14], Appendix C Table 7). Neither test is conclusive, as the authors acknowledge ([PAGE 14]), leaving open the possibility of a pre-existing divergence masked by low statistical power.

Third, the core gray zone lies in the construction of the "Attractiveness" variable. The authors build a supervised machine-learning classifier trained on 2012–2013 actual attendance, then validate it against the 2014 high-priced game selections made by teams that switched to variable pricing (85.4% true positive rate; [PAGE 29], Appendix D). This is potentially circular: the labels used to validate a pre-treatment classifier are themselves post-treatment choices by the treated teams. Using a treatment-informed label to moderate the treatment effect creates a multi-hop feedback loop where the endogenous switch decision may leak into the very variable meant to unpack the mechanism. The authors mitigate this by excluding real-time performance effects from the attractiveness index ([PAGE 16], [PAGE 29]), but the validation step still conditions on treated teams’ post-switch behavior.

Fourth, the main effect of +2.95% (β̂ = 0.0291; [PAGE 14]) is moderated by average ticket price changes. Column (2) of Table 2 shows the interaction VP × % Change in Average Ticket Price equals −0.0065*** ([PAGE 14]). Solving for the attenuation breakdown: 0.0291 − 0.0065·ΔP̄ = 0 implies ΔP̄ ≈ 4.48 percentage points. If a treated team raises its season-average ticket price by more than roughly 4.48% relative to the prior season, the primary-market sales lift from variable pricing is fully offset. This is an exact singularity regime implied by the paper’s own estimates, not a toy ratio.

Fifth, the dependent variable—natural logarithm of paid attendance—is bounded above by stadium capacity (Table 1: mean 70,964 seats, range 53,286–82,500; [PAGE 9]). For sellout-constrained games, quantity cannot increase regardless of pricing, imposing a physical ceiling singularity on the log-linear model. The authors exclude teams with stadium changes (49ers’ Levi’s Stadium, Vikings’ temporary Metrodome replacement) to protect against capacity confounds ([PAGE 9]), but games approaching capacity within the sample still face this mechanical limit.

Sixth, resale-market data come from only two snapshots per season (August 1 and September 1; [PAGE 8]), which may not capture late-season listing surges or dynamic cannibalization closer to game day. The finding that minimum resale prices for unattractive games did not fall (β = −0.0784, p > .10; [PAGE 20]) is therefore a short-horizon result and may not generalize to the full sales window.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Equation (1) — Primary market sales ([PAGE 12]):
\[
\ln(\text{PMSales}_{ig}) = \alpha_i + \beta \text{VP}_{ig} + W_{ig} + Y_{ig} + O_{ig} + X'_{ig}\gamma + \varepsilon_{ig}
\]
Units: dependent variable is natural log of paid attendance (log tickets); VP is binary indicator for post-switch variable pricing; β̂ = 0.0291 implies 100 × (exp(0.0291) − 1) = 2.95% average lift ([PAGE 14]). Fixed effects: team (α_i), 17 NFL weeks, season (2012–2014), opponent team. Controls X: median income, population, ln(Gini income), ln(Gini ethnicity), average ticket price, percentage change in average ticket price, seating capacity, previous-season performance, preseason team-strength index, weekly team-strength index ([PAGE 12]). Breakdown regime: solving β̂ + (−0.0065)·ΔP̄ = 0 gives ΔP̄ ≈ 4.48 percentage points of average-price increase as the offset threshold ([PAGE 14], Table 2 Column 2).

Equation (2) — Parallel trends pre-treatment check ([PAGE 13]–[PAGE 14]):
\[
\ln(\text{PMSales}_{ig}) = \alpha_i + \lambda_1 t_{ig} + \lambda_{\text{NTreated}} \times t_{ig} + O_{ig} + X'_{ig}\gamma + \xi_{ig}
\]
λ_NTreated = 0.0002, p > .10, indicating no differential pre-2014 weekly trend ([PAGE 14]).

Propensity-score weighting ([PAGE 11], [PAGE 27]):
Weights derived from Hirano and Imbens (2001) via logistic regression on N = 29 teams; covariates include 2013 attendance moments, average ticket price, previous-season performance, preseason team-strength index, stadium capacity, championships, median income, ln(Gini income), ln(Gini ethnicity), and population ([PAGE 27], Table 5). Large standard errors (e.g., ln(Gini Income) SE = 17.5588) signal small-sample imprecision.

Equation (3) — Demographic heterogeneity ([PAGE 15]):
\[
\ln(\text{PMSales}_{ig}) = \dots + \delta_M \text{VP}_{ig} \times \text{MedianIncome}_{ig} + \delta_D \text{VP}_{ig} \times \text{IncomeDiversity}_{ig} + \dots
\]
δ_M = −0.0288*** (lower-income towns gain more); δ_D = 1.1194*** (higher income diversity amplifies the effect) ([PAGE 16]). Unit note: Table 1 reports Gini Income in percentage points (mean 46.8; [PAGE 9]), but regression scaling (0–1 vs 0–100) is not explicitly restated, creating a unit-ambiguity gray zone for the magnitude of δ_D.

Equation (4) — Attractiveness heterogeneity ([PAGE 16]–[PAGE 17]):
\[
\ln(\text{PMSales}_{ig}) = \dots + \eta \, \text{VP}_{ig} \times \text{Attractiveness}_{ig} + \dots
\]
η = −0.0221* ([PAGE 17]); F-test fails to reject β = |η| (F = .01, p > .10), implying no significant sales change for attractive games ([PAGE 17]).

Equation (5) — Resale listings ([PAGE 18]):
\[
\text{RMListings}_{ig} = \alpha_i + \beta \text{VP}_{ig} + \eta \, \text{VP}_{ig} \times \text{Attractiveness}_{ig} + W_{ig} + Y_{ig} + O_{ig} + X'_{ig}\gamma + \varepsilon_{ig}
\]
β = 645.56* (listings rise for unattractive games); interaction = −1,080.28** (net −435 listings for attractive games) ([PAGE 19], Table 3).

Equation (6) — Minimum resale price ([PAGE 19]–[PAGE 20]):
\[
\ln(\text{MinResalePrice}_{ig}) = \alpha_i + \beta \text{VP}_{ig} + \eta \, \text{VP}_{ig} \times \text{Attractiveness}_{ig} + \dots
\]
β = −0.0784, p > .10 (no price decline for unattractive games); interaction = 0.2370*** (minimum resale price rises for attractive games) ([PAGE 20], Table 3).

Physical boundary: Paid attendance is hard-capped by stadium capacity (Table 1 range 53,286–82,500 seats; [PAGE 9]), imposing a singularity where the log-linear quantity response must attenuate to zero for sellout-constrained games.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with second-degree price discrimination theory (Pigou 1932; [PAGE 4]) and seat-based ticket pricing (Rosen and Rosenfield 1997; [PAGE 4]), extended to event-level differentiation across a season (Phillips 2005; [PAGE 1]). The secondary-market mechanism draws directly on Bennett et al. (2015), who distinguish the option-value effect (customers buy primary tickets when resale upside is expected) from the cannibalization effect (customers defer to cheaper resale tickets when sell-out is unlikely) ([PAGE 1]–[PAGE 2], [PAGE 5]). Revenue-management foundations cite Talluri and van Ryzin (2004) ([PAGE 2]) and the advance-selling/scalper literature (Su 2010; Cui et al. 2014; [PAGE 5]), while Sweeting (2012) supplies the resale-pricing behavioral anchor ([PAGE 5]). Information-disclosure signaling links to Bagwell and Riordan (1991) on price as quality signal ([PAGE 6]).

Historically, the NFL was the last major U.S. league to abandon fixed pricing, holding out because of the short 8-home-game season; just before 2014 the league permitted team-level variable pricing, and only 15 of 32 teams were operationally ready after the April 2014 schedule release ([PAGE 7]). The sample is further purged of teams experiencing stadium or public-relations shocks: the San Francisco 49ers moved to Levi’s Stadium, the Minnesota Vikings relocated temporarily after the Metrodome roof collapse, and the Tennessee Titans faced a broker scandal ([PAGE 9]). The control group eventually eroded because every team except the New Orleans Saints later adopted variable pricing, shrinking the pool of pure controls and introducing an “eventual treatment” threat to long-run causal interpretation ([PAGE 17], Appendix C).

Multi-week traps are embedded in the NFL calendar. The 17-week regular season generates time-varying game importance (e.g., NFL kickoff, Thanksgiving, division games; [PAGE 30], Table 9), requiring week and season fixed effects. Intertemporal substitution operates across the pre-season pricing commitment (April), the August 1 / September 1 resale snapshots ([PAGE 8]), and weekly game-day attendance, so customer expectations are formed before the season but realized week by week. The attractiveness algorithm explicitly strips real-time effects (e.g., current team performance) to isolate pre-season perceived quality ([PAGE 16], [PAGE 29]), attempting to separate the organizer’s ex ante signal from ex post demand shocks.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under fixed pricing, price-sensitive customers learn a habit of deferring purchase to the resale market to avoid overpaying for unattractive games whose quality is uncertain ex ante ([PAGE 1]–[PAGE 2]). This is a regression to the secondary market triggered by pricing opacity.

Counter-trap: Variable pricing reverses the informational asymmetry. By posting high and low prices ex ante, the team signals its own belief about which games are attractive ([PAGE 8]). A low price signals an unattractive game, pulling price-sensitive buyers back into the primary market and weakening cannibalization; a high price signals an attractive game and activates the option-value effect, encouraging early primary-market purchase in anticipation of resale appreciation ([PAGE 1], [PAGE 20]).

Recursive theory of mind: The team anticipates how customers will infer game quality from the price schedule; customers update their beliefs and re-time purchases between primary and resale channels; the team then observes resale listings and prices and updates future pricing. This Stackelberg-like loop operates within a single season but is bounded by the pre-season pricing clock: once variable prices are posted before the 2014 season, customers cannot unsee the signal, and the team cannot credibly revise the ex ante quality disclosure game-by-game ([PAGE 7], [PAGE 8]).

Clock layer: The identification clock runs from the April 2014 schedule release and pricing switch through the August 1 / September 1 resale snapshots ([PAGE 8]) to game-day attendance. Weekly team-strength controls ([PAGE 12]) capture real-time belief revisions, while the attractiveness ML removes real-time attendance noise to preserve the ex ante signal ([PAGE 16], [PAGE 29]). If customers instead treat the price schedule as pure price discrimination rather than quality signaling, the recursive loop collapses and the estimated mechanism is misattributed.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer — Stadium capacity singularity: Paid attendance cannot exceed seat capacity (Table 1: mean 70,964, SD 6,206; range 53,286–82,500; [PAGE 9]). For sellout-constrained attractive games, variable pricing has no vertical margin to raise quantity, producing a breakdown regime where the log-linear effect must attenuate to zero. This explains the null sales effect for attractive games even as prices rose ([PAGE 17]). The authors exclude franchises with stadium changes (49ers’ Levi’s Stadium; Vikings’ temporary stadium after the Metrodome roof collapse) to prevent capacity shocks from confounding the treatment ([PAGE 9]).

Biomechanical / weather layer — Game-day physical constraints: Nine games were excluded for international relocation or unexpected extreme weather, including the Jets–Bills game moved to Detroit after a Buffalo snowstorm ([PAGE 9], Footnote 7). These are explicit physical vetoes that remove weather-driven attendance suppression from the error term. However, unexcluded game-day weather and fan travel fatigue remain in the residual and can downward-bias attendance independently of pricing; the attractiveness algorithm attempts to strip real-time effects to isolate the ex ante quality signal ([PAGE 16], [PAGE 29]).

Cross-layer adjudication: The finding that attractive-game primary sales did not fall despite price increases ([PAGE 17]) is consistent with either (a) option-value signaling dominating price sensitivity, or (b) a physical capacity ceiling preventing quantity response. Because the resale minimum price for attractive games rose (interaction 0.2370***; [PAGE 20]), customers did buy early expecting resale appreciation, supporting the option-value interpretation over pure capacity rationing. The capacity singularity remains a hard veto for any game at or near 100% paid attendance: no pricing signal can sell seats that do not exist.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Price-level offset breakdown. Verifiable condition: restrict the treated sample to team-games where the team raised its season-average ticket price by more than 4.48% relative to the prior season (the offset threshold derived from Equation (1) and Table 2 Column (2); [PAGE 14]). Re-estimate the VP coefficient on this sub-sample. Prediction: β_VP becomes statistically indistinguishable from zero (p > .10), because the −0.0065 moderation term fully absorbs the 0.0291 base effect. A statistically significant positive β_VP in this high-price-increase sub-sample would veto the paper’s claimed price attenuation mechanism.

Veto Scenario 2 — Capacity-ceiling saturation. Verifiable condition: identify attractive games in stadiums where pre-treatment paid attendance exceeded 98% of capacity (near the hard physical boundary in Table 1; [PAGE 9]). Estimate a triple interaction VP × Attractiveness × HighCapacityDummy. Prediction: the VP × Attractiveness coefficient is null and primary sales do not rise, confirming that the null attractive-game result is driven by physical scarcity rather than option-value signaling. If sales still rise significantly despite near-capacity pre-treatment attendance, the capacity veto is falsified and the signaling mechanism must be stronger than the paper allows.

Veto Scenario 3 — Resale cannibalization activation. Verifiable condition: apply Equation (6) to a later adoption wave (post-2014 switchers or the 2015 season) for unattractive games, testing whether the minimum resale listing price falls significantly after variable pricing. Prediction: under the paper’s logic, β_VP for unattractive games should remain statistically insignificant (as found: −0.0784, p > .10; [PAGE 20]). If a new dataset yields β_VP < 0 with p < .05, cannibalization is active and the paper’s “no threat to primary market” conclusion does not generalize beyond the 2014 switchers and the August–September measurement window.
</RLVR_COUNTERFACTUAL_VETOES>