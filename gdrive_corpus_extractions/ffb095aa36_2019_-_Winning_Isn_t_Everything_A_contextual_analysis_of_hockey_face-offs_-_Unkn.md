---
source: "2019 - Winning Isn t Everything A contextual analysis of hockey face-offs - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5051
---

<NATIVE_REASONING>
The user wants a deep analysis of a hockey face-off research paper using specific XML sections. Let me carefully review the requirements:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is 18 pages (the user says PAGES: 17 but content shows pages 1-18). I need to cite exact [PAGE N] markers.

Let me analyze the paper thoroughly:

Key findings from the paper:
- 71,147 face-offs from 2017-18 NHL regular season
- Face-offs = 75% of all contested puck battles
- Face-off win % correlation with goals: -1.8%, with wins: 0.03% (2017-18)
- ~75 face-off wins needed for +1 goal differential
- Clean wins: 44.5% of face-off wins
- Clean wins led to shot event/zone exit/entry 48.0% vs 44.1% non-clean
- Offensive zone: clean wins shot event 38.6% vs non-clean 30.3%
- Backward-inside clean wins offensive zone: 43.6% vs non-clean 32.1%
- Clean wins directed to teammate's stick 25% faster
- Defensive zone clean wins: 35.4% clean; Offensive zone: 50.4% clean
- Directionality: backward most often (~1/3), backward-outside > backward-inside
- Backward-outside >16% faster than backward-inside
- Event probabilities by direction: backward 41.3%, backward-inside 42.7%, backward-outside 39.0%, forward <10%
- Offensive zone backward/backward-angled >2x lateral, nearly 10x forward
- Neutral zone attacking side: backward wins produced zone entries >60%, inside 45.5%, outside 37.4%
- Strong side deployments: 61.0% of sample; strong side won 11.1% more often
- ~65% of strong side face-offs won backward/backward-outside; weak side <50% those directions
- Weak side backward-inside offensive zone: 33.7% shot event vs strong side 26.7%
- Weak side backward-inside attacking neutral zone: 7% more zone entries
- EE model correlation: CF% 6.6%, XGD 7.3%
- WDBE model correlations: OZ 13.1% XGD, DZ 10.5% XGD, attacking neutral 7.2%, defending neutral 11.1%
- Overall win % correlation with XGD: -7%; clean win % correlation with XGD: 23.8%

Models:
- EE (Expected Events) model: league-wide events average per face-off win direction multiplied by wins in direction i over total face-offs.
- WDBE = ∑[P(WinDirection_jisc) * E(Event_jisc)] (Equation 2)

Page citations:
The text has page numbers at bottom: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18.

Let me map content to pages:
- Page 1: Title, Abstract, Introduction start (Kopitar example, correlations -1.8% and 0.03%, ~75 face-offs for +1 goal)
- Page 2: Methods 2.1 Data Setup (71,147 face-offs, Sportlogiq, clean definition, handedness, 45° sectors, center ice excluded 12,285=17.3%, 9 circles, 4 sections zones)
- Page 3: Methods 2.2 Model Methodology (EE model description, WDBE start, Equation 2)
- Page 4: Results 3.1 Clean Face-offs (44.5% clean, 48.0% vs 44.1%, offensive zone 38.6% vs 30.3%, backward-inside 43.6% vs 32.1%, 25% faster)
- Page 5: Clean face-offs continued (defensive zone exits 49.2% vs 47.5%, defensive zone only 35.4% clean vs offensive 50.4%, Figure 3)
- Page 6: Player Level Clean Face-offs (Table 1, Boyle 57.3%, Jankowski 31.6%, correlation clean % vs overall win % 2.0%, overall win % vs XGD -7%, clean % vs XGD 23.8%)
- Page 7: Face-off Directionality (backward ~1/3, backward-outside > backward-inside, 16% faster, Figure 4)
- Page 8: Directionality breakdown by location (left side OZ 33.1% backward, 31.3% backward-outside, right side OZ 30.4% backward, 31.4% backward-outside, defensive zone details)
- Page 9: Directionality and Subsequent Events (backward 41.3%, backward-inside 42.7%, backward-outside 39.0%, forward <10%, OZ backward >2x lateral, nearly 10x forward, offensive zone clean backward-inside >40% vs non-clean 19%, defensive zone inside exits 26% slower, neutral zone defending side backward, attacking side backward >60%, inside 45.5%, outside 37.4%)
- Page 10: Player Level Directionality (Table 2, EE metric correlations CF% 6.6%, XGD 7.3%, Crosby/Nash Figure 5)
- Page 11: Deployment (strong side 61.0%, strong side won 11.1% more often, Figure 6, ~65% strong side backward/backward-outside, weak side <50%)
- Page 12: Deployment and Subsequent Events (weak side backward-inside OZ 33.7% vs strong side 26.7% shot event, attacking neutral zone 7% more zone entries)
- Page 13: Aggregated Player Models (WDBE, Table 3 top 20, correlations OZ 13.1%, DZ 10.5%, attacking neutral 7.2%, defending neutral 11.1%)
- Page 14: Discussion (draw drop randomness, possession loss after win, predictability)
- Page 15: Conclusion
- Page 16: Acknowledgements
- Page 17: References
- Page 18: Appendix

Now I need to structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). This should analyze the methodology, statistical assumptions, gray zones (e.g., human drop variability, possession vs control distinction, predictability/mixing strategies, selection bias in deployment, center ice exclusion, direction binning assumptions, correlation vs causation, small sample issues for some players, etc.)

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations, units, page citations, breakdown. I need to reconstruct the models formally:
- Let D ∈ {forward, backward, inside, outside, forward-inside, forward-outside, backward-inside, backward-outside} be direction bins at 45° sectors.
- Let Z ∈ {OZ, DZ, NZ-N, NZ-S} be zone sections.
- Let s ∈ {strong, weak} be deployment.
- Let c ∈ {clean, non-clean} be win type.
- Let i index direction, j index zone section.
- EE model: E[E|player] = Σ_i (n_i / N) * λ_i where λ_i is league average events per win in direction i.
- WDBE = Σ_jΣ_iΣ_sΣ_c P(WinDirection_{jisc}) * E(Event_{jisc}) perhaps multiplied by something? The paper says "multiply this by 2 in order to produce an expected number of events for a win vs a loss. This number is finally then multiplied by the player's individual probability of winning..." So there might be a factor of 2.
- Correlations: r(win%, XGD) = -0.07; r(clean%, XGD) = 0.238; r(EE, CF%) = 0.066; r(EE, XGD) = 0.073.
- Units: events per face-off win (dimensionless probability), percentages, seconds (25% faster), feet? Not specified but distance measured.
- Breakdown regimes: center ice excluded (12,285 = 17.3%), minimum 200 face-offs for player tables, human drop randomness singularity.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. This should trace the intellectual lineage: traditional face-off win % (decades old), Liardi & Carron 2011 (home advantage), Sporer 2017 (SI article), Schuckers et al. 2017 (Statistical Sports Consulting), Schulte et al. 2017 Sloan (Apples-to-Apples), Dellow 2018 (The Athletic strong/weak side), and the "multi-week traps" likely refers to how small-sample win percentages regress over a season/weeks, and how clean% is more stable/predictive. Also the Kopitar example (Oct 28, 2017) as a specific historical moment.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a game theory / psychology section. "Crisis habit regression" = under pressure (0.9 seconds left, overtime), players revert to habit (win % focus) but Kopitar used directionality. "Counter-trap" = opponents adjust to predictable directions (Crosby vs Nash, mixing techniques to avoid patterns). "Clock" = game clock pressure (0.9 seconds left), clean wins 25% faster, time pressure affects decision-making.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: stick mechanics (strong side lower hand, full blade, backhand swing vs body rotation), puck drop randomness (human linesman, bounce, ricochet off skates), possession vs control distinction. Biomechanical: handedness, strong/weak side deployment, body rotation speed (backward-inside on strong side slower), 25% faster clean wins. Weather: not really applicable to indoor hockey, but rink temperature/ice conditions could affect puck bounce—though paper doesn't mention weather. I should note indoor climate control removes weather veto, but ice quality/puck bounce remains a physical veto. "Veto proof" means factors that override the model predictions.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I need to create 3 verifiable counterfactual veto scenarios (hypotheses that can be tested/falsified) with predictions. These must be verifiable (not betting lines). Examples:
1. If a center with high clean% but low overall win% is deployed on weak side in OZ, model predicts shot event probability increases by X%; veto if actual < threshold.
2. If backward-inside clean win in OZ occurs, predict shot event >40%; veto if observed rate falls below 30% in holdout season.
3. If strong side deployment >65% backward/backward-outside, predict event rate ~41.3%; veto if deployment shift to forward >20% collapses event rate below 10%.

Need to avoid betting lines. No spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

Need >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let me draft carefully with page citations [PAGE N]. I'll cite pages where content appears.

Word count plan:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1800 words. Good.

Let me write the content.

THINK_TRACE:
- Start with the multi-hop: win % → clean % → directionality → deployment → WDBE → XGD correlation chain.
- Gray-zone audit: (1) center ice exclusion removes 17.3% of draws but biases toward high-value zones; (2) direction binning at 45° assumes rotational symmetry that may not hold near boards; (3) clean vs non-clean definition depends on "directly to a teammate" vs "must skate from stationary position" - borderline tie-ups create measurement error; (4) possession ≠ control: team can win draw then immediately lose possession, still credited as win; (5) human drop variance (linesman, puck bounce, skate ricochet) introduces unmodeled noise; (6) deployment endogeneity: coaches deploy strong side more (61.0%), so strong-side success may reflect strategy not just skill; (7) minimum 200 face-offs threshold creates survivor bias; (8) correlations are small (max 23.8% clean% vs XGD), meaning face-off skill explains limited variance; (9) "multiply by 2" in WDBE is an unexplained scaling factor; (10) predictability/mixing means within-game adaptation violates stationarity assumption of season-long averages.

Need to ensure >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
Define notation formally with LaTeX.
Let \(\mathcal{F}\) be set of face-offs, \(|\mathcal{F}|=71{,}147\) [PAGE 2].
Direction bins \(D \in \{F, B, I, O, FI, FO, BI, BO\}\) at \(45^\circ\) sectors [PAGE 2].
Zone sections \(Z \in \{OZ, DZ, NZ_N, NZ_S\}\) [PAGE 2].
Deployment \(s \in \{S, W\}\) [PAGE 2, 11].
Win type \(c \in \{C, NC\}\) [PAGE 4].
Indicator \(\mathbb{1}[\text{clean}]\).
Event \(E \in \{\text{shot on net}, \text{slot attempt}, \text{zone entry}, \text{zone exit}\}\). Slot shots: 16.6% shooting % vs 9.0% all locations [PAGE 3].

EE model:
\[
\widehat{\mathrm{EE}}_p = \sum_{i \in D} \frac{n_{p,i}}{N_p} \cdot \bar{\lambda}_i
\]
where \(n_{p,i}\) = player wins in direction i, \(N_p\) = total face-offs, \(\bar{\lambda}_i\) = league average events per win in direction i. Isolated from teammate quality [PAGE 3].

WDBE model (Eq 2) [PAGE 3]:
\[
\mathrm{WDBE} = \sum_{j,i,s,c} P(\mathrm{WinDirection}_{jics}) \cdot E(\mathrm{Event}_{jics})
\]
with deployment/win-type/zone adjustment and factor 2 for win vs loss contrast (as described in text). Need to be careful not to invent the exact factor if not in equation, but text says "multiply this by 2". I can quote that.

Breakdown regimes/singularities:
- Center-ice exclusion: 12,285 draws (17.3%) removed [PAGE 2].
- Minimum 200 face-offs for player-level tables [PAGE 6].
- Forward direction events <10% [PAGE 9].
- Strong side win rate +11.1% vs weak side [PAGE 11].

RETROCAUSAL_GENEALOGY:
- Lineage: decades of win % as de facto measure [PAGE 1]; Liardi & Carron 2011 home advantage [PAGE 16]; Sporer 2017 SI [PAGE 16]; Schuckers et al. 2017 ~75 wins for +1 goal differential [PAGE 1]; Schulte et al. 2017 Sloan location clustering [PAGE 16]; Dellow 2018 strong/weak side deployment [PAGE 13, 16].
- Multi-week traps: small-sample win % regresses over weeks; Kopitar 8/23 (34.8%) on Oct 28 2017 yet delivered value [PAGE 1]; clean% correlation 23.8% with XGD vs overall win% -7% [PAGE 6] shows win% is a trap metric over multi-week samples; directional skill is more stable than win% because it captures intent and post-drop value.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under clock pressure (0.9s left, OT), coaches/players regress to habit of trusting "stars" and win% despite Kopitar's poor night (34.8%) [PAGE 1]. The crisis triggers recursive thinking: "Pastrnak is 100%, Kopitar is 34.8%, so send Pastrnak" but Kopitar's directional/clean skill overrides base rates.
- Counter-trap: opponent anticipates preferred direction; Crosby (left-handed) pulls to outside point from both OZ circles while Nash (right-handed) prefers back-right backhand [PAGE 10]. Players mix techniques to avoid predictability as game wears on [PAGE 14].
- Clock: clean wins 25% faster [PAGE 4]; 0.9s clock means only clean, pre-directed wins can generate shot before whistle [PAGE 1]; defensive zone inside exits 26% slower because center ties up opponent waiting for winger support [PAGE 9].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: human drop variance (linesman, puck bounce, skate ricochet) [PAGE 14]; possession vs control distinction—win credited even if possession lost immediately [PAGE 14].
- Biomechanical veto: strong side uses lower hand strength and full blade for backward/backward-outside (~65% of strong side wins) [PAGE 11]; weak side forces backward-inside via backhand even to middle of ice [PAGE 11]; strong side backward-inside requires greater/slower body rotation [PAGE 7]; Kopitar weak-side backhand backward-inside to Toffoli [PAGE 1, 12].
- Weather veto: indoor NHL rink, climate-controlled, so exogenous weather is negligible; however ice temperature/puck hardness and boards glass conditions alter bounce/ricochet probabilities—not modeled in paper. The veto is that physical stochasticity at drop sets a noise floor that season-long aggregation (71,147 face-offs) minimizes but cannot eliminate [PAGE 14].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable counterfactual veto scenarios + predictions. No betting lines.
Scenario 1: Holdout 2018-19 season. For centers with >200 draws, select those with top-quartile clean% but bottom-half overall win% (like David Perron 54.8% clean, 41.7% overall [PAGE 6]). Prediction: their clean-direction-attributed shot/event rate in OZ exceeds non-clean baseline by >6 percentage points (38.6% vs 30.3% [PAGE 4]). Veto: if holdout OZ clean-win shot-event rate ≤30.5%, the clean%→value link is not transportable.
Scenario 2: Directional intervention. Force weak-side deployed centers to take OZ draws and direct backward-inside. Paper: weak-side backward-inside OZ → 33.7% shot event vs strong-side 26.7% [PAGE 12]. Prediction: in a counterfactual where weak-side players execute clean backward-inside at league-average clean rate (50.4% [PAGE 5]), shot-event probability rises to ≥40%. Veto: if actual clean backward-inside OZ shot rate ≤32.1% (the non-clean baseline [PAGE 4]), the deployment-direction interaction is spurious.
Scenario 3: Temporal decay of predictability. Within a repeated center matchup, as game progresses, players mix directions [PAGE 14]. Prediction: in the third repeated matchup of the same center pair within a game, the entropy of direction distribution increases by ≥15% relative to first matchup, and event probability per win declines by ≥5 points due to defensive adjustment. Veto: if direction entropy is flat or event probability rises, the predictability/counter-trap mechanism is absent.

All predictions are verifiable via event-tracking data, not betting.

Now I need to assemble into XML exactly. No markdown code blocks around the XML? The user wants exact XML sections. I'll output just the XML content. I should not add extra text outside.

Need to be careful: "ZERO BETTING LINES" - I won't mention odds/spreads/totals/moneylines. I will mention probabilities and percentages but not as betting odds.

"ZERO TOY EQUATIONS" - I will state formal LaTeX and not invent fake ratios. I'll reference the paper's actual equations and describe the "multiply by 2" as textually reported.

Let me write it out fully now. I'll aim for high quality and exact page citations.

Double-check page numbers from text:
- Page 1: Abstract, Intro, Kopitar, correlations -1.8%/0.03%, ~75 face-offs.
- Page 2: Methods data setup, 71,147 face-offs, clean definition, handedness, 45° sectors, center ice 12,285 excluded (17.3%), 9 circles, 4 zone sections.
- Page 3: Model methodology, EE description, WDBE start, equation 2, "multiply by 2".
- Page 4: Clean breakdown, 44.5% clean, 48.0 vs 44.1, OZ 38.6 vs 30.3, backward-inside 43.6 vs 32.1, 25% faster.
- Page 5: DZ exits 49.2 vs 47.5, DZ clean 35.4 vs OZ 50.4, Figure 3.
- Page 6: Player clean table, Boyle 57.3, Jankowski 31.6, correlation clean% vs overall win% 2.0%, overall win% vs XGD -7%, clean% vs XGD 23.8%.
- Page 7: Directionality, backward ~1/3, backward-outside > backward-inside, 16% faster, Figure 4 start.
- Page 8: Direction breakdown by location, OZ left/right percentages, DZ details.
- Page 9: Subsequent events, backward 41.3, BI 42.7, BO 39.0, forward <10, OZ backward >2x lateral, nearly 10x forward, clean backward-inside OZ >40% vs non-clean 19%, DZ inside exits 26% slower, NZ defending backward, NZ attacking backward >60%, inside 45.5%, outside 37.4%.
- Page 10: Player directionality table, EE corr CF% 6.6%, XGD 7.3%, Crosby/Nash Figure 5.
- Page 11: Deployment strong side 61.0%, won 11.1% more, ~65% strong side backward/backward-outside, weak side <50%, Figure 6.
- Page 12: Deployment subsequent events, weak side backward-inside OZ 33.7 vs strong 26.7, NZ attacking 7% more entries.
- Page 13: Aggregated models, WDBE Table 3, correlations OZ 13.1, DZ 10.5, attacking NZ 7.2, defending NZ 11.1.
- Page 14: Discussion drop randomness, possession vs control, predictability mixing.
- Page 15: Conclusion.
- Page 16: Acknowledgements.
- Page 17: References.
- Page 18: Appendix.

The user said PAGES: 17 but the text goes to 18. I'll cite up to 18 as they appear.

Let's draft the final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s core inference chain proceeds through four nested hops: (1) raw face-off win percentage is weakly or negatively associated with team outcomes (goal differential correlation -1.8%, win correlation 0.03% in 2017-18; roughly 75 wins required for a +1 goal differential) [PAGE 1]; (2) win *quality* is decomposed into clean versus non-clean possession, where clean wins are 44.5% of all wins and generate a post-face-off shot event or zone exit/entry 48.0% of the time versus 44.1% for non-clean wins [PAGE 4]; (3) directional targeting is binned into 45° sectors (forward, backward, inside, outside, and compound angles) and shows backward-oriented wins produce events 41.3-42.7% of the time while forward wins produce events under 10% of the time [PAGES 7-9]; (4) deployment (strong side 61.0% of draws; strong-side centers win 11.1% more often) interacts with handedness and biomechanics to determine which directions are physically executable [PAGES 11-12]. The terminal model, WDBE, conditions expected events on zone section j, direction i, deployment s, and win-type c, reporting correlations with XGD of 13.1% (offensive zone), 10.5% (defensive zone), 7.2% (attacking neutral zone), and 11.1% (defending neutral zone) [PAGE 13].

Gray-zone audit: (a) Center-ice draws (12,285 events, 17.3% of the sample) are excluded because inside/outside and strong/weak side labels are undefined there [PAGE 2]; this selection conditions inference on high-value zones and limits generalizability to neutral-face-off contexts. (b) The clean/non-clean boundary rests on whether the puck is won “directly to a teammate” versus requiring a skater to leave a stationary position [PAGE 2]; tie-ups and scramble recoveries sit in a measurement gray zone that can misclassify intentional defensive tie-ups as non-clean losses of value. (c) Possession is credited to the team earning first possession after the drop, even if control is surrendered immediately; a forward/lateral win into danger that is instantly turned over still counts as a win with no subsequent event [PAGE 14], inflating win value in risky directions. (d) Human drop variance—linesman placement, puck bounce, skate ricochet—is acknowledged as a noise source that season-long aggregation (71,147 draws) minimizes but does not eliminate [PAGE 14]. (e) Deployment is endogenous: coaches select strong-side deployment (61.0% of draws) based on anticipated success, so observed strong-side superiority conflates causal biomechanical advantage with strategic selection [PAGE 11]. (f) Player-level tables impose a 200-face-off minimum [PAGE 6], inducing survivor bias against marginal centers. (g) Reported correlations are modest; clean-win percentage correlates with XGD at 23.8% while overall win percentage correlates at -7% [PAGE 6], meaning face-off craft explains at most a minority of on-ice goal expectancy. (h) The WDBE text describes a “multiply by 2” scaling to contrast expected events for a win versus a loss [PAGE 3], but the published LaTeX (Equation 2) does not display this factor, creating an ambiguity in the exact operator. (i) Within-game predictability and counter-mixing—centers altering techniques across repeated matchups to avoid defensive patterns [PAGE 14]—violates the stationarity assumption implicit in season-average direction probabilities.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and breakdown.

Let the face-off sample be \(\mathcal{F}\), \(|\mathcal{F}|=71{,}147\) draws from the 2017-18 NHL regular season, Sportlogiq computer-vision data [PAGE 2]. Define direction bins at \(45^\circ\) sectors:
\[
D \in \{F,\ B,\ I,\ O,\ FI,\ FO,\ BI,\ BO\},
\]
where \(F\)=forward, \(B\)=backward, \(I\)=inside (toward middle ice), \(O\)=outside (toward close-side boards), and compound terms combine vectors [PAGE 2]. Center-ice draws are excluded from direction and handedness analysis because no true inside/outside or strong/weak side frame exists; excluded count \(n_{\mathrm{center}}=12{,}285\) (\(17.3\%\)) [PAGE 2].

Zone sections:
\[
Z \in \{OZ,\ DZ,\ NZ_N,\ NZ_S\},
\]
with neutral zone split at the red line into attacking (\(NZ_N\)) and defending (\(NZ_S\)) sides; center ice omitted [PAGE 2]. Deployment \(s\in\{S,W\}\) (strong/weak side), defined by whether shooter handedness matches nearest board side [PAGE 2]. Win type \(c\in\{C,NC\}\) (clean/non-clean), where clean means the center wins the puck directly to a teammate’s stick [PAGE 2].

Event set \(E=\{\text{shot on net},\ \text{slot attempt},\ \text{zone entry},\ \text{zone exit}\}\). Slot attempts are weighted as high-danger: shooting percentage \(16.6\%\) for 2017-18 versus \(9.0\%\) all locations [PAGE 3]. Time is measured in seconds from puck drop to recovery/reception; clean wins reach a teammate’s stick \(25\%\) faster on average than non-clean wins [PAGE 4].

Expected Events (EE) model, league-average weighting isolated from teammate quality [PAGE 3]:
\[
\widehat{\mathrm{EE}}_p = \sum_{i\in D} \frac{n_{p,i}}{N_p}\cdot \bar{\lambda}_i,
\]
where \(n_{p,i}\) is player \(p\)’s clean or total wins in direction \(i\), \(N_p\) is total face-offs taken, and \(\bar{\lambda}_i\) is the league-wide average events per win in direction \(i\). Units: expected events per face-off (dimensionless probability in \([0,1]\)).

Win and Direction-Based Events Over Expectation (WDBE), Equation 2 [PAGE 3]:
\[
\mathrm{WDBE} = \sum_{j,i,s,c} P(\mathrm{WinDirection}_{jics})\ \cdot\ E(\mathrm{Event}_{jics}),
\]
conditional on zone section \(j\), with deployment \(s\) and win-type \(c\) adjustments; the text describes an additional multiplicative factor of 2 to generate expected events for a win versus a loss, then weighting by the player’s individual win probability in each direction-category cell [PAGE 3]. The displayed equation omits the explicit factor of 2, a notation-reporting gap.

Empirical constraints and singularity/breakdown regimes:
- Minimum 200 face-offs for player-level inclusion in Tables 1-3 [PAGES 6, 10, 13].
- Forward-directed wins generate events \(<10\%\) of the time [PAGE 9].
- Strong-side win rate exceeds weak-side by \(11.1\%\) (relative); strong-side deployment frequency \(61.0\%\) [PAGE 11].
- Roughly \(65\%\) of strong-side wins are backward or backward-outside; \(<50\%\) on weak side [PAGE 11].
- Weak-side backward-inside offensive-zone wins produce shot events \(33.7\%\) of the time versus \(26.7\%\) strong-side [PAGE 12].
- Offensive-zone clean backward-inside wins produce shot events \(43.6\%\) of the time versus \(32.1\%\) non-clean [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

The paper descends from a decades-old orthodoxy in which face-off win percentage is the de facto measure of draw-taking success [PAGE 1]. The cited lineage includes Liardi and Carron (2011) on NHL face-offs and home advantage [PAGE 16], Sporer (2017) questioning the link between face-off wins and long-term success [PAGE 16], Schuckers, Pasquali, and Curro (2017) estimating that roughly 75 face-off wins yield a +1 goal differential [PAGE 1], and Schulte, Zhao, Javan, and Desaulnier (2017) on location-based player clustering and scoring impact [PAGE 16]. Dellow (2018) documented strong-side versus weak-side deployment patterns among Canadian teams [PAGES 13, 16], directly precedenting this paper’s deployment analysis [PAGES 11-12]. The paper’s opening vignette anchors the lineage in a specific historical instant: October 28, 2017, Kings at Bruins, overtime, 0.9 seconds remaining, Kopitar (34.8% win percentage that night) defeating Pastrnak (100% that night) via a clean backward-inside direction to Toffoli for a one-timer [PAGE 1].

Multi-week traps: overall face-off win percentage is a high-noise, low-signal metric over short windows. Kopitar’s 8-for-23 night (34.8%) illustrates how a single-game or short-run win percentage misrepresents underlying skill [PAGE 1]. Over a multi-week or full-season sample, win percentage regresses toward team-deployment and opponent-quality effects rather than pure draw-taking talent [PAGE 6]. The paper identifies clean-win percentage as a more stable skill indicator: its correlation with XGD is 23.8% versus -7% for overall win percentage [PAGE 6]. Expected Events and WDBE further condition on direction and context, attempting to extract the causal component of face-off value that survives the regression of raw win percentages across weeks. The trap is that conventional scouting and coaching still overweight the win-percentage base rate in crisis moments even when directional clean skill dominates event generation [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock pressure.

Crisis habit regression: under extreme clock pressure (0.9 seconds left in overtime, tied game), the prevailing recursive heuristic is to select the draw-taker with the best observed win percentage—Pastrnak at 100% for the night—rather than the player with superior directional clean skill [PAGE 1]. Boston’s decision to send Pastrnak after an icing reflects a one-level theory of mind (he is winning, therefore send him). Los Angeles counter-regresses by sending Kopitar despite his 34.8% night because Kopitar models the post-drop geometry: he looks over his shoulder, identifies Toffoli’s position, and executes a clean backward-inside delivery [PAGE 1]. The crisis collapses the decision tree to a single executable action; only a clean, pre-directed win can generate a shot before the whistle, making win percentage irrelevant and clean directionality decisive.

Counter-trap: repeated center-versus-center matchups induce predictability traps. The paper notes that if the same players face off repeatedly in a game, they mix techniques to avoid giving opponents a pattern [PAGE 14]. Directional preference is itself exploitable: Crosby, a left-handed shot, pulls pucks to the outside point from both offensive-zone circles, whereas right-handed Riley Nash consistently wins back and to the right, likely via backhand [PAGE 10]. An opponent who learns Nash’s preferred back-right vector can shade defenders and convert a nominal win into a lost battle. The counter-trap is therefore to randomize direction within biomechanically feasible subsets while preserving clean execution, neutralizing the defender’s recursive anticipation.

Clock: temporal constraints modulate every layer. Clean wins reach the stick \(25\%\) faster than non-clean wins [PAGE 4], which matters when the game clock is near zero. In the defensive zone, inside wins that produce zone exits occur \(26\%\) slower on average than inside wins with no exit, because the center ties up his opponent while waiting for winger support [PAGE 9]. Weak-side backward-inside offensive-zone wins generate shot events \(33.7\%\) of the time versus \(26.7\%\) strong-side [PAGE 12], indicating that the clock-advantage of a backhand redirection can override deployment disadvantage. The recursive theory of mind therefore terminates at the clock: when time is scarce, the value function weights clean speed and backward direction above raw win probability.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers.

Physical veto: the face-off drop is a stochastic physical event subject to linesman placement error, puck bounce, and ricochet off centers’ skates or the linesman’s skates [PAGE 14]. This noise floor bounds the maximum explanatory power of any directional model; the paper mitigates it via season-long aggregation of 71,147 draws but cannot remove single-event variance [PAGE 14]. A second physical veto is the possession-versus-control distinction: a team credited with a face-off win may immediately surrender possession, yet the win and its assigned direction/timing stand with no subsequent event [PAGE 14]. This veto disproportionately invalidates forward and lateral win values, which already generate events under 10% of the time [PAGE 9].

Biomechanical veto: strong-side deployment permits use of the lower hand’s strength and the full blade, making backward and backward-outside wins natural and fast; roughly 65% of strong-side wins use these two directions versus less than 50% weak-side [PAGE 11]. Conversely, weak-side centers are mechanically steered toward backward-inside redirection even into the middle of the ice [PAGE 11]. A strong-side backward-inside win requires greater, slower body rotation than a weak-side backhand redirection of the same vector [PAGE 7]. Kopitar’s weak-side backhand backward-inside delivery to Toffoli demonstrates that elite technique can breach the biomechanical veto, but such breaches are skill-dependent and not universally transportable [PAGES 1, 12]. Event-rate asymmetry by deployment is evidence of this veto: weak-side backward-inside offensive-zone wins yield shot events 33.7% of the time versus 26.7% strong-side [PAGE 12].

Weather veto: NHL games occur in climate-controlled indoor rinks, so exogenous meteorological variables (wind, precipitation, temperature swings) do not directly enter the face-off data generating process. However, rink ice temperature, puck hardness, and boards/glass conditions alter puck bounce and skate-ricochet probabilities at the drop [PAGE 14]. These are not modeled in the paper. The veto is therefore partial: weather is negligible as an exogenous shock, but micro-physical ice/puck conditions contribute to the unmodeled randomness that season-long sample sizes only partially average out. Any deployment-direction prescription that assumes deterministic drop physics is vetoed by this physical layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards counterfactual veto scenarios with falsifiable predictions. All are testable with event-tracking data; none involves betting lines, spreads, totals, or odds.

Veto Scenario 1 (Clean-win value transportability): Select centers in a holdout 2018-19 season with top-quartile clean-win percentage but bottom-half overall win percentage (the David Perron archetype: 54.8% clean, 41.7% overall [PAGE 6]). Prediction: their offensive-zone clean-win shot-event rate exceeds the offensive-zone non-clean baseline by more than 6 percentage points (38.6% clean vs 30.3% non-clean [PAGE 4]). Veto: if holdout offensive-zone clean-win shot-event rate is \(\le 30.5\%\), the clean-percent-to-event-value link is not transportable and WDBE weights on clean% are misspecified.

Veto Scenario 2 (Deployment-direction interaction): Counterfactually require weak-side deployed centers to take offensive-zone face-offs and execute clean backward-inside wins at the league-average clean rate (50.4% in the offensive zone [PAGE 5]). Prediction: shot-event probability rises to \(\ge 40\%\), bounded below by the observed clean backward-inside offensive-zone rate of 43.6% [PAGE 4]. Veto: if actual clean backward-inside offensive-zone shot-event rate is \(\le 32.1\%\) (the non-clean baseline [PAGE 4]), the deployment-by-direction interaction is spurious and weak-side deployment does not confer directional flexibility.

Veto Scenario 3 (Within-game predictability decay): For repeated same-center-pair matchups within a single game, measure direction-distribution entropy across the first, second, and third matchup. Prediction: entropy increases by \(\ge 15\%\) from first to third matchup as players mix techniques to avoid defensive pattern recognition [PAGE 14], and event probability per win declines by \(\ge 5\) percentage points due to defensive adjustment. Veto: if direction entropy is flat or event probability per win increases across matchups, the counter-trap/predictability mechanism is absent and season-average direction probabilities remain stationary within games.
</RLVR_COUNTERFACTUAL_VETOES>