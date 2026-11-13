---
source: "2020 Dynamically scheduling NFL games to reduce strength of schedule variability - Elizabeth L. Bouzarth, Andrew W. Cromer, William J. Fravel, Benjamin C. Grannan and Kevin R. Hutson.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 8224
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE + GSI Frontier Reasoning Foundry with strict invariants. Need analyze source paper. Need sections exact XML tags. >=1000 words depth. No betting lines. Need not mention odds/spreads/totals/moneylines. Need formal LaTeX, units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need at least 1000 words. Need include THINK_TRACE >=400 words. Need SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions.

Need answer grounded in paper. User likely expects "drive source" research synthesis. Need maybe no direct question except source text. We need produce detailed analysis. Need avoid betting lines. Could mention sports scheduling, fairness, SOS, RPI, CP, TD, WD, optimization. Need "GSE + GSI Frontier Reasoning Foundry" perhaps treat as analytical dossier. Need no gambling references. Need mention "no betting lines". Need formal equations with units. Units: RPI dimensionless 0-100? Equation (1) has weights 100/4 etc. Since WP fraction dimensionless, r_i dimensionless on [0,100] if WP as fraction. SOS s_i = 200/3 OWP +100/3 OOWP dimensionless [0,100]. Probability p_ij dimensionless. α dimensionless? Equation exponent α(r_j-r_i). Since r in points (RPI units), α units inverse RPI. They say α=0.056 for RPI points; in Elo α=1/400 per Elo point. We can state α has units RPI^{-1}. Utility u^SD dimensionless (difference of SOS standard deviations in RPI points). u^CP? Equation 7 sum over c_kl - c_kl^{ij} /2? Need parse: uCP_ij = sum_{k=1}^{32}\sum_{l=1}^{32} ( (c_kl - c_kl^{ij}) / 2 ) maybe braces? Text: "uCP ij =  32  k=1 32  l=1  ckl −ckl ij 2 " likely uCP_{ij} = \sum_{k=1}^{32}\sum_{l=1}^{32} \left( \frac{c_{kl}-c^{ij}_{kl}}{2} \right). Units edge count / comparison steps, dimensionless integers. TD u = d_ij distance miles/km (paper no units but stadium distance; can state distance unit, typically miles). WD = |w_i-w_j| wins (games). Multiobjective normalized utilities dimensionless after dividing by max.

Need cite exact quotes. Need include pages exact markers. We can quote short verbatim. Need ensure quotes exact from source. Use [PAGE 1] etc. Need maybe cite formulas and assumptions. Need mention breakdown regimes: disconnected graphs after parity removal in 2012 and 2015 -> CP undefined; greed heuristic incomplete second week -> swap; optimization constraints; random simulation tie excluded; number of games rescheduled only 2 per team; limited six seasons; TV/stadium constraints; same conference/not previously played constraints absent. Singularities: denominator in p_ij? p = 1/(1+10^{α(r_j-r_i)}) never singular finite. If α negative? no. Breakdown when RPI difference extreme? Saturation p→1/0, probability overconfidence; α calibration depends on selected teams, not global. CP shortest path can be infinite/disconnected; c_ij undefined if no path; after removing parity games 2012/2015 disjoint graphs. CP utility non-additive due to overlapping edge effects; one game overrides utility of another; no guarantee optimal. Strength SOS standard deviation nonnegative; can become zero? if all SOS equal, σ=0; utility zero; if no feasible schedule due divisional/venue constraints. Multiobjective normalization by max can fail if max=0 (all utilities zero) -> division by zero; weights arbitrary. Travel distance minimization may conflict with fairness; weather/physical travel not modeled. Need physical/biomechanical/weather veto proof: paper mentions travel costs and adverse performance (Entine & Small, etc.; Leatherwood & Dragoo; Samuels; Watanabe etc.) but dynamic scheduling model only uses distance d_ij, not weather, jet lag, circadian, injury, rest, surface, biomechanical load. Need "veto proof": physical constraints that can veto schedule: road travel across time zones, short rest, altitude, heat/cold, stadium availability, shared stadium NY Giants/Jets, broadcast. Need cite page 7 travel; page 13 stadium/broadcast. Biomechanical: no biomechanical model, no injury load; can veto if travel/rest causes injury, performance. Weather: not in model except travel? no weather. Need "cross-layer veto adjudication" prove physical/biomechanical/weather veto. We can say the paper's schedule is a mathematical feasibility set only, so a dynamic schedule is vetoed if it violates non-modeled physical constraints. Need formulate perhaps a veto condition: accept schedule x only if C_phys(x)=0, C_biomech(x)≤B, C_weather(x)=0. Since source does not include these, optimization cannot prove real-world feasibility; it is a necessary but not sufficient condition. Need use "proof" maybe as argument. Could create formal boolean: V_phys = ¬[stadium availability & rest & travel & weather etc.]? But avoid inventing fake ratios. We can define hard constraints as indicators.

Need RETROCAUSAL_GENEALOGY: historical lineage: round-robin fairness, RPI, Elo, PageRank-like rating? Paper cites Langville & Meyer; RPI; Elo; Conference USA tiered scheduling 2018; Nate Silver dynamic debate; Karwan et al integer programming; Dilkina & Havens TV scheduling; Murray rest; Entine/Small home court; Rottenberg/Neale uncertainty of outcome. Need multi-week traps: previous season results stale; roster/coaching/injury changes; schedule built years in advance; "season to season change in wins" 34% ±4, 48% ±3; parity games based on previous standings; weekly weighting future work; final two weeks only; conference tiebreak. Need mention "multi-week traps" as lagged information, cumulative schedule effects, short-rest, travel, broadcast, stadium. Need "retrocausal genealogy" maybe historical/scientific lineage. Cite pages 1-3, 13. Verbatim quotes. Need ensure exact quotes. Let's identify exact quotes:
- Page 1 abstract: "This paper proposes methods to produce an NFL schedule that combine some of its traditional elements with dynamically scheduled games aimed at optimizing different objectives, such as reducing the variability of teams’ strength of schedule or minimizing the number of pairwise comparisons needed to differentiate team quality so as to make each teams’ regular season schedule as fair as possible." [PAGE 1]
- Page 2: "An NFL team plays 16 regular season games, 14 of which are set by the conference/division structure while two games are scheduled based off the previous season’s standings (nfl.com 2018)." [PAGE 2]
- Page 3: "Scheduling games based on previous season’s results presents some issues because the composition and quality of a team can change dramatically from season to season." [PAGE 3] Actually page 3 has that. 
- Page 4: "These teams account for approximately 34% of all NFL teams during this timeframe. When considering a change of three or more wins from season to season, this increases to 48% of all teams." [PAGE 4]
- Page 4 table? 
- Page 5 equation RPI: "ri = 100 4 WPi + 200 4 OWPi + 100 4 OOWPi" [PAGE 5] exact formatting weird. Quote maybe "RPI of team i is defined as ..." [PAGE 5].
- Page 5: "pij = 1 −pji = 1 1 + 10α(rj−ri)" [PAGE 5]
- Page 6: "uSD ij = σS −σSij." [PAGE 6]
- Page 6: "cij = cji = min dij, dji" [PAGE 6]
- Page 7: "Sometimes the cyclic nature of the official schedule creates disjoint graphs after the parity games are removed; 2012 and 2015 have this problem. In these cases, initial comparison paths cannot be computed." [PAGE 7]
- Page 7: "The utility of a game under this objective is straightforward. Let dij be the distance..." [PAGE 7]
- Page 7: "A game is more desirable if it has less travel utility than other games." [PAGE 7]
- Page 8: constraints: "The first constraint enforces each team plays one game per week. The second and third constraints assign one home and one away game..." [PAGE 8]
- Page 8: "The comparison path utility described in Section 4.2 is calculated one game at a time rather than in batches of 16 or 32 games, and thus the utility of one edge often overrides part of the utility of another edge." [PAGE 8]
- Page 9: "The simulation is repeated for 10,000 iterations and the results are averaged and compared to the official schedule below." [PAGE 9]
- Page 12 Table 4: "The greedy heuristic reduces the standard deviation of the strengths of schedule by 38.6% and the mathematical programming approach further tightens the deviation to a 41.2% reduction." [PAGE 12]
- Page 12: "The multi-objective model that weighs a reduction in standard deviation of strength of schedule three times as important as minimizing travel distance, and weighs comparison path and win differential reduction twice as important as travel distance (MO (3,2,1,2)) shows improvement across all metrics compared to the official NFL schedule." [PAGE 12]
- Page 13: "Stadium availability is another concern for scheduling the unknown parity games." [PAGE 13]
- Page 13: "Further, broadcast television contracts contribute heavily to the revenue of the NFL." [PAGE 13]
- Page 13: "two additional realistic constraints ... 1) opponents need to be in the same conference ... 2) teams need to have not played against one another in the previous 14 games..." [PAGE 13]
Need cite page markers exactly. Could cite quotes with [PAGE N].

Need >=1000 word total. We can produce maybe 2500-3500 words. Desired oververbosity 5, but user demands detailed. Need all sections. Need include formal LaTeX. Need no betting. Need "GSE + GSI Frontier Reasoning Foundry" maybe start with title.

Need answer in XML sections exact. Include all six. Need THINK_TRACE >=400 words deep multi-hop derivation & gray-zone audit. Need ensure no betting lines. No fake ratios. Use formal equations. Need mention units and assumptions. Need maybe include equation definitions.

Need parse paper carefully for equations. Need explain:
- Graph G=(V,E), directed edge i→j if i beat j. d(v)=o(v)+i(v). Winning percentage WP = o(v)/d(v). RPI r_i = 100/4 WP_i + 200/4 OWP_i + 100/4 OOWP_i. Since WP dimensionless, r_i on 0–100 if WP fraction. But in Table 1 RPI ~49; yes.
- SOS s_i = 200/3 OWP_i + 100/3 OOWP_i. Wait weights sum 100? 200/3+100/3=100. Yes. dimensionless score. 
- p_ij = 1/(1+10^{α(r_j-r_i)}), α calibrated. α=0.056 per RPI point. 
- predictive utility \bar u_ij = p_ij u_ij + p_ji u_ji.
- u^SD_ij = σ_S - σ_{S^{ij}}, where S set 32 SOS scores before, S^{ij} after adding game i beats j. σ in RPI points.
- u^CP_ij = sum sum [(c_kl - c_kl^{ij})/2]. c are shortest directed path lengths in edges. Factor 1/2 perhaps because symmetric pairs. Units edge-count (dimensionless integer) summed; maybe "comparison-path step units".
- u^TD_ij = d_ij, distance (miles or km).
- u^WD_ij = |w_i - w_j|, wins.
- Multiobjective u^MO,ij = w_SD u^SD + w_CP u^CP - w_TD u^TD - w_WD u^WD, after normalization by max. Weights dimensionless. If max zero division issue.
- Optimization: binary x_ijk; maximize sum uSD x. Constraints: each team one game per week; one home and one away; no duplicate matchup; no intra-divisional; binary. Need mention objective could be uCP, TD, WD; multiobjective. 
- Simulation: for each new game draw n~Uniform[0,1], if n<p_ij team i wins else j. 10,000 iterations. Ties not considered. 
- Results: SOS greedy 38.6%, SOS IP 41.2%, CP Reduced CP 2.2% (relative? Table 4), TD 11.4%, WD 9.5%, MO(3,2,1,2) all metrics positive. Need mention these are percent improvements over official schedule averaged over six years; WB m=3/4 only 2015-2017. 
- Table 2: divisions with stronger schedules get weaker opponents; e.g. NFC South avg SOS 52.62 gets parity avg RPI 43.54. 
- Table 1: Jacksonville/Tennessee vs Seattle/Detroit/Dallas. Need maybe mention SOS 45.17/45.59 vs 50.00/51.07/50.82 and RPI. Cite [PAGE 4]. 
- 2017 Eagles/Cowboys: Eagles played Chicago (RPI 45.47, -6 wins) and Carolina (54.46, -1); Cowboys Green Bay (50.35, -2), Atlanta (54.04, +1); Dallas lost both, Eagles won both; four-game difference. [PAGE 10]. Good.
Need maybe include in THINK_TRACE.

Need "gray-zone audit" maybe discuss ambiguous: fairness objective trade-offs; CP utility non-additive; greedy local; simulation independent? Need mention paper's assumptions: RPI as quality proxy, Elo-derived win probability calibrated on 2017 extremes, no ties, games outcomes independent? Simulation draws random per game; no correlation, no home field, no injuries, no margin, no weather. Also "results tied to optimization framework" [PAGE13]. Need note CP method may not improve much in NFL because official network already dense; likely more benefit in sparse college football [PAGE12]. Need "multi-week traps" in genealogy: stale previous year's results; dynamic schedule only last two weeks; weekly weighting future work; fixed 14 games; conference same constraint absent. 
Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. This is weird. Interpret: recursive theory of mind in scheduling: teams/league/broadcasters/players anticipate dynamic scheduling; strategic behavior; crisis habit regression = falling back to static previous-year heuristic under uncertainty; counter-trap = teams may game win totals? Or optimizing for win differential can create perverse incentives? Need explain. "clock" = end-of-season two-week window, timing; dynamic schedule set after 14 games; teams may manage injuries/rest to manipulate tier; broadcasters prefer marquee. Need include recursive: league chooses schedule; teams anticipate schedule and may adjust; fans/broadcasters anticipate. The paper doesn't model strategic response. Need state "no game-theoretic equilibrium; recursive theory-of-mind layer is not in source." But we can analyze. Need mention "counter-trap": if teams know last two games are matched by record, they may not prefer wins? Actually power pairing matches similar win totals, so winning can lead to tougher opponents? The paper's WD objective minimizes win differential, which pairs similar records. Could create incentive effect: teams may prefer to be in same win tier? Hmm. Multi-week traps: late-season rest/injury decisions; teams may manipulate? Need phrase carefully. "Crisis habit regression" = under late-season uncertainty, organizations revert to legacy schedule heuristics (previous-season standings, TV slots) rather than dynamic fairness. "Counter-trap" = the dynamic model could be gamed or counterproductive if teams anticipate power pairing and alter effort; not modeled. "Clock" = two-week end window and 14-game lock; scheduling decisions must occur after week 14; any delay reduces feasibility; broadcast/stadium lead times. Need include.
Need CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Could present formal veto:
For candidate schedule X, define hard feasibility indicator H(X) = H_stadium * H_rest * H_travel * H_weather * H_broadcast * H_conference ... If any H=0 then X vetoed regardless of objective. Paper includes only divisional constraint and one-game per week, home/away, no duplicate; does not include stadium availability, shared stadium, TV, same conference, prior opponent, rest, travel time zones, weather, biomechanical load. Travel distance is soft utility uTD, not hard veto; even if minimization, it can trade off. Physical: travel distance d_ij not equal travel time; no circadian/time-zone; no altitude/heat/cold; no surface; no rest days; no accumulated load. Biomechanical: no injury risk, no soft-tissue load, no neuromuscular fatigue; paper cites travel adversely affects performance but no model. Weather: no weather state; outdoor stadium conditions not included. Therefore, proof of veto: any schedule that maximizes fairness but violates hard physical constraints must be rejected; the optimization is necessary but not sufficient. Need cite [PAGE 7] travel and [PAGE 13] stadium/broadcast. 
Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely "Reinforcement Learning from Verifiable Rewards" or "Reinforcement Learning with Verifiable Rewards"? Need create three counterfactual scenarios with verifiable checks and predictions. Must avoid betting. Could be:
1. Disconnected CP graph veto: If parity games removed and graph disconnected (as in 2012/2015), then any CP objective using initial c_kl is undefined. Verifiable check: compute weak connectivity of G after removing two parity games; if >1 component, CP model invalid or must alter edge removal. Prediction: solver returns no finite c_kl or arbitrary large value; must fall back to one parity removed or CP objective excluded.
2. Stadium-sharing conflict veto: If two teams share stadium (NY Giants and NY Jets) and both assigned home in same week or same venue unavailable, schedule infeasible. Verifiable check: venue-week capacity and home/away assignment; if conflict, H=0. Prediction: IP solution violates real venue constraint; must add same-stadium/home-week constraints, reduce feasible set, potentially lower SOS improvement.
3. Travel/time-zone physical veto: If schedule assigns a west-coast team multiple cross-country away games in consecutive weeks or short rest, travel distance minimization alone doesn't capture recovery. Verifiable check: compute away travel miles and time-zone shifts and rest days; if exceeds threshold (e.g., >2 time zones and <6 days rest? Need avoid fake ratios; but can use threshold as scenario parameter not fake ratio. Need not invent arbitrary? Could use "verifiable threshold" maybe not from paper. Better: check if dynamic schedule increases travel distance or time-zone shifts relative to official despite fairness gain; paper's uTD only distance and is soft. Prediction: TD objective improves distance 11.4%, but SOS-only model may worsen TD (Table 4 shows SOS IP TD 3.0% improvement? Actually SOS IP TD 3.0% improvement, not worsen. SOS Greedy TD 2.1% improvement. But CP reduced TD 0.6. TD minimized SOS 6.4 improvement. Hmm). Scenario: If a schedule maximizes SOS but has same or worse travel/time-zone load for a team, physical veto overrides. Verifiable by computing per-team travel miles/time zones. Prediction: fairness optimum not Pareto-efficient across physical layers; multiobjective weights can choose schedule with lower physical load. 
Could include "tie policy" as verifiable? Paper ties as wins except two games; simulation no ties; prediction bias. But RLVR veto should be about counterfactual. Need 3 scenarios with predictions.

Need "RLVR_COUNTERFACTUAL_VETOES" maybe include "RLVR" as verifiable reward. Avoid betting lines. We can phrase "Reinforcement-learning / verifiable-reward veto tests" not gambling. 
Need maybe include "clock" in RECURSIVE_THEORY_OF_MIND: end-of-season clock. 
Need cite exact pages for results. Need include [PAGE 12] table. Need mention "Percent improvements" table: SOS Greedy 38.6, SOS IP 41.2; CP Reduced SOS 5.0, CP 2.2, TD 0.6, WD 3.0; TD Minimized SOS 6.4, CP -6.5, TD 11.4, WD 0.1; WD Minimized SOS -2.5, CP -2.3, TD 0.7, WD 9.5; WB m=4 28.8, -9.2, 2.8, 3.5; WB m=3 19.4, -11.6, 2.2, 5.1; MO (3,2,1,2) 20.4, 1.2, 4.5, 4.5. Need mention CP negative improvements in SOS models: CP gets worse by 10.8% for SOS IP. That is gray zone. Need note multiobjective MO(3,2,1,2) improves all. 
Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe subheadings. Need formal LaTeX. Include assumptions and breakdown. Need not too verbose but enough.

Need "THINK_TRACE" >=400 words. Should be deep multi-hop derivation & gray-zone audit. We can write ~600-800 words. It must be in XML. Need no bullet? Can use paragraphs. Need include equations maybe but main equations in next section. THINK_TRACE can reference. Need ensure >=400 words. I'll count approximate. We'll produce maybe 700 words.

Need maybe start with "All statements are derived from source and formal modeling; no betting lines are used." Good.

Need overall >=1000 words. We'll write substantial.

Need be careful with XML: tags must be exact. We can include LaTeX inside. Use no unescaped `<` maybe in equations? In XML, `<` in text could be parsed as tag. Need avoid raw `<` in XML content. Use `\le` instead of `<`. Use `>` okay? In XML, `>` is fine generally. Use `\lt`? Use `\leq`. Use `&`? Avoid ampersand or escape? We can use "and" not &. Need not include unescaped `<` or `&`. In equations, use `\le`, `\ge`, `\in`, `\sum`. Use `{{`? Fine. Need avoid `&` in text. Use "and". Need avoid `<` in "n < p_ij"; use `n \lt p_{ij}` or "n less than p". In LaTeX, `\lt` not standard? `n < p` raw < problematic. Use `n \leq p_{ij}` maybe but exact simulation uses n < p. Could write "if \(n\) is below \(p_{ij}\)" to avoid `<`. Or use `n \prec p`? Better "if \(n \in [0,p_{ij})\)" but `)` not `<`. Actually interval `[0,p_{ij})` no <. Use that. Good. Need avoid `<=`? no. Use `\leq`. XML parser sees `\leq` not `<`. Good. Avoid `>`? okay but can use `\gt`? Use `\ge`. 
Need ">= 1,000-word depth" satisfied. 
Need "ZERO TOY EQUATIONS" no fake ratios. We have real equations from paper. We can mention "no invented Force/Fatigue ratio." Good.
Need "ZERO BETTING LINES" no mention spreads/totals/moneylines/odds. We can say "No betting lines are used" but that mentions betting lines? The invariant says never mention spreads, totals, moneylines, or odds. It doesn't ban phrase "betting lines"? It says zero betting lines. But maybe avoid all betting terms. We can say "No wager-related quantities are used." Good. 
Need "source operators and equations" formal LaTeX, units, page citations, breakdown. Include "dimensionless" etc. 
Need "retrocausal genealogy" maybe historical lineage. 
Need "recursive theory of mind" maybe human/team anticipation. 
Need "cross-layer veto adjudication" physical/biomechanical/weather. 
Need "RLVR counterfactual vetoes" 3 scenarios.

Let's draft.

Need maybe include exact quotes:
"14 of which are set by the conference/division structure while two games are scheduled based off the previous season’s standings" [PAGE 2].
"composition and quality of a team can change dramatically from season to season" [PAGE 3].
"34% of all NFL teams" and "48% of all teams" [PAGE 4].
"Sometimes the cyclic nature of the official schedule creates disjoint graphs after the parity games are removed; 2012 and 2015 have this problem. In these cases, initial comparison paths cannot be computed." [PAGE 7].
"the utility of one edge often overrides part of the utility of another edge" [PAGE 8].
"Stadium availability is another concern for scheduling the unknown parity games." [PAGE 13].
"broadcast television contracts contribute heavily to the revenue of the NFL." [PAGE 13].
"The simulation is repeated for 10,000 iterations" [PAGE 9].
Need exact "nfl.com" has ligature? Source has "nﬂ.com" maybe. Use "nfl.com" okay? For quote exact maybe not. Avoid that quote. 

Need page citations for equations:
- RPI [PAGE 5]
- p_ij [PAGE 5]
- u^SD [PAGE 6]
- c_ij [PAGE 6]
- u^CP [PAGE 6]
- u^TD [PAGE 7]
- u^WD [PAGE 7]
- optimization [PAGE 8]
- multiobjective [PAGE 9]
- results [PAGE 12]
- future constraints [PAGE 13].

Need "breakdown regimes" in source operators section:
1. RPI and SOS assume WP fractions and complete schedule; if graph disconnected? WP still computed but comparison path not. Ties assigned as wins except two games [PAGE 5] can bias. 
2. p_ij: calibration α=0.056 from two extreme 2017 matchups; if RPI scale shifts or teams outside calibration, p saturated; no home field, no injuries; probability not singular except finite exponential. 
3. u^CP: defined only if all c_kl finite; disconnected graph -> breakdown (2012/2015). Non-additivity. 
4. u^SD: σ difference can be negative for undesirable games; if all SOS equal σ=0. 
5. Multiobjective: normalization by max; if max=0 division by zero; weights arbitrary. 
6. Optimization: binary LP feasibility; only two games, no same-conference or previous-opponent constraints; if added, feasible set may shrink; same stadium venue. 
7. Simulation: independent Bernoulli draws, ties excluded; 10,000 iterations; no correlation. 
Need mention "units" for distances: paper doesn't specify, but d_ij as distance; can state "distance units, e.g., miles or km; the paper does not fix the unit." Is that okay? Need formal units. For TD utility, use miles/km. But source no units; we can say "unit of distance (miles or kilometres; paper leaves scale implicit)." For α, "inverse RPI point." For CP, "edge-count steps." For WD, "wins." 
Need "SI/information/probability units" in invariant? It says state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. We can state probability dimensionless, RPI/SOS dimensionless scores. No SI except distance. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe formal:
Let \(X\) be a candidate schedule. Define hard feasibility \(H(X)=\prod_{c\in\mathcal{C}} H_c(X)\) with \(H_c\in\{0,1\}\). If \(H(X)=0\), veto \(X\) regardless of \(U(X)\). Source gives only \(H_{\text{division}}\) (no intra-division), \(H_{\text{weekly}}\), \(H_{\text{home/away}}\), \(H_{\text{unique}}\). It does not give \(H_{\text{stadium}}\), \(H_{\text{rest}}\), \(H_{\text{weather}}\), \(H_{\text{biomech}}\), \(H_{\text{broadcast}}\), \(H_{\text{conference}}\), \(H_{\text{prior-opponent}}\). Thus \(U(X)>U(X')\) does not imply \(X\) admissible. Need cite [PAGE 8] constraints, [PAGE 13]. 
Need "physical/biomechanical/weather veto proof": 
- Physical: travel distance d_ij only, no travel time; west coast teams most affected [PAGE 7]. 
- Biomechanical: paper cites travel adversely affects performance and rest (Entine and Small etc.) [PAGE 7], but no load variables; no hard veto.
- Weather: no weather input; no stadium roof; not modeled. 
Proof: If any external hard condition fails, the objective's feasible set is incomplete; any optimum in incomplete feasible set is not guaranteed realizable. 
Need maybe mention "singularity" in p equation? The logistic is nonsingular; but at \(r_j-r_i\to\pm\infty\), p→1/0, probability degenerates; at \(r_i=r_j\), p=0.5. Good.

Need "RLVR counterfactual vetoes" with predictions:
Scenario A: CP disconnected graph veto. Check: after removing parity games, build directed graph and compute transitive closure; if not strongly? Actually directed graph connectivity. If any pair no directed path either direction, c_ij undefined. Paper says disjoint graphs after parity removal in 2012/2015. Prediction: CP objective cannot be evaluated; solver may skip pair or return invalid; fallback one parity removal changes baseline and invalidates comparison across seasons. 
Scenario B: Venue/home-away shared stadium veto. Check: map each week to venue capacity and tenant teams; if Giants and Jets both assigned home same week or venue unavailable, H_stadium=0. Prediction: IP schedule may violate; need add constraints; SOS improvement may drop below 41.2% and feasibility may require different opponents. 
Scenario C: Travel/time-zone recovery veto. Check: compute per-team away distance and time-zone displacement across two dynamic weeks plus previous 14 games; if a team's physical load exceeds a pre-registered threshold (e.g., no two consecutive cross-country away games without recovery) then veto. Prediction: SOS-optimum may be vetoed even if uTD positive; multiobjective with TD weight or hard rest constraints selects lower fairness but admissible schedule. 
Could also mention "tie-handling counterfactual" as third? Need 3 verifiable. Use these. 
Need "predictions" specific: e.g., "CP model reports 2.2% improvement but is undefined for 2012/2015; excluding those seasons changes average." Good.

Need maybe include "multi-week traps" in RETROCAUSAL_GENEALOGY: previous-season parity games stale; schedule repeats every 12 years; 14 structured games set years in advance; two parity games based on previous rank. Need cite [PAGE 2] quote. Also "season-to-season change in wins" [PAGE 3-4]. "The order of games does not match... locations assigned..." [PAGE 2]. "weekly weighting future work" [PAGE 13]. "same conference/previous 14 games" [PAGE 13]. "TV contracts" [PAGE 13]. Good.

Need maybe mention "historical/scientific lineage": round-robin ideal; RPI; Elo; Langville and Meyer; Conference USA tiered scheduling; Nate Silver debate; Karwan integer programming; Dilkina/Havens TV; Murray rest; Entine/Small rest; Rottenberg/Neale uncertainty of outcome. Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe:
- Level 0: league solver chooses schedule based on RPI and SOS.
- Level 1: teams know last two games are dynamic and matched by current record; they may adjust late-season incentives (rest, injury disclosure, effort). Not modeled.
- Level 2: broadcasters and venues anticipate marquee matchups; they may veto or lobby; paper says broadcasts contribute revenue [PAGE 13].
- Level 3: fans/playoff selectors interpret SOS; dynamic schedule changes narrative.
Crisis habit regression: under time pressure/uncertainty, league reverts to static previous-year parity games and TV slots; counter-trap: power pairing with similar records may make late-season games tougher for borderline teams, but teams may prefer easier path; WD objective can reward being in a lower win tier? Need careful. "Counter-trap" = the fairness patch can create new unfairness: win-differential matching may pair a 9-7 team with another 9-7 team, but if tiebreakers favor conference wins, teams may prefer different opponents; not modeled. Clock: two-game window at end; if schedule set too late, venue/broadcast constraints dominate; if too early, current-season info stale. Need mention "clock" as end-of-season timing. 
Need maybe "recursive theory of mind" not too long.

Need ensure no "odds" etc. Avoid "betting", "wager". We can mention "No wager-related quantities are used." Is that okay? It says never mention spreads, totals, moneylines, or odds. "wager-related" maybe okay. But to be safe, avoid any gambling words. Start "Invariant note: no market-derived quantities are used." That doesn't mention banned. Good.

Need include "GSE + GSI Frontier Reasoning Foundry" maybe title. 
Need final answer only, no extra. Need maybe use markdown within XML. 

Let's write.

Need count words. THINK_TRACE maybe 700. Other sections substantial. Total >2500. Good.

Need exact XML sections. Use tags. No extra outside? Maybe include a short preamble? The user specified exact XML sections. We can start directly with `<THINK_TRACE>`. Good.

Need be careful: In THINK_TRACE, if I use `<` in text like "less than", avoid. Use "below". Use `\lt`? LaTeX `\lt` may not render but okay. Use "below". 
Need no `&` in text. Use "and".
Need no `<` in equations. Use `\leq`. 
Need `\prod` etc. 
Need `\mathcal{C}` fine. 
Need `\mathbf{1}`? fine. 
Need `\operatorname{min}`. 
Need `\mathbb{R}`? fine.

Let's craft THINK_TRACE.

Draft THINK_TRACE:
"Source-derived multi-hop audit. The paper's chain is: (i) NFL's 16-game schedule = 14 structural + 2 parity based on previous standings [PAGE 2]; (ii) stale parity games can create unfair SOS because team quality changes; 34% ±4 wins, 48% ±3 [PAGE 3-4]; (iii) fairness is defined as equalized SOS via RPI [PAGE 5]; (iv) candidate last-two-week games are scored by predictive utility \bar u = p u + (1-p) u' [PAGE 6]; (v) four utilities: SOS SD reduction, CP reduction, TD minimization, WD minimization [PAGE 6-7]; (vi) greedy and binary LP schedule 16 games [PAGE 7-8]; (vii) simulate 10,000 iterations [PAGE 9]; (viii) report percent improvements [PAGE 12]. Multi-hop: RPI is not just win pct; it weights OWP twice OOWP; SOS s_i uses same weights; SD reduction objective is convex? Standard deviation is nonlinear, so u^SD is not additive across games; but the IP maximizes sum of precomputed expected utilities, treating each game's marginal effect as if independent. This is a gray-zone: marginal SD reduction for game A depends on whether game B is also scheduled. The paper computes u^SD per game relative to baseline, then sums. For CP, paper explicitly says utility one edge often overrides part of another [PAGE 8]. So the IP is a linearization/approximation. Gray-zone audit: (a) RPI and SOS are derived from win percentages; ties assigned as wins except two 2016 games [PAGE 5] which can bias. (b) p_ij calibration uses 2017 extremes; α=0.056 inverse RPI points; outside calibration, saturation. (c) CP undefined for disconnected graphs in 2012 and 2015 [PAGE 7]. (d) Greedy needs swap; may not find complete schedule. (e) Simulation independent Bernoulli, no ties, no home field. (f) Only two games per team; the paper says more games may improve [PAGE 12]. (g) Constraints omit same-conference and no-rematch [PAGE 13]. (h) Multiobjective normalization by max can fail if max zero; weights arbitrary. (i) Results are average over six seasons, WB only 2015-2017. The top-line 41.2% SOS improvement is real in the model but not a physical guarantee; the same model can worsen CP by 10.8% [PAGE 12]. Thus the correct interpretation is Pareto-front exploration, not universal fairness. The gray-zone is where "fair schedule" means SOS variance, not playoff selection under tiebreakers, revenue, travel recovery, or player health. Cross-layer veto: any candidate must pass external hard constraints; otherwise optimization is necessary but insufficient. This sets up the next sections." 
Good ~500 words? Need >=400. Good.

Need SOURCE_OPERATORS_AND_EQUATIONS. Include all equations. Use bullet list. Need cite. Need mention units. 
Need maybe not too many paragraphs.

Need avoid raw `<` in "0 ≤ r_i ≤ 100"? Use `\le`. Good.
Need "p_{ij} = ..." with `10^{\alpha(r_j-r_i)}`. Good.
Need "u^{CP}_{ij}" etc. 
Need "n \in [0,p_{ij})" no `<`. Good.
Need "s_i = ..." 
Need "r_i = 100/4..." maybe use \frac{100}{4}. 
Need "u^{MO,ij} = ..." after normalization. 
Need "x_{ijk}\in\{0,1\}" 
Need "constraints" maybe use `\sum` and `=1`. 
Need "no intra-division" constraint: \(\sum_{j\in \text{division}_i}\sum_{k=1}^2 (x_{ijk}+x_{jik})=0\). 
Need "breakdown" sublist:
- \(p_{ij}\) logistic: at \(r_j=r_i\), 0.5; as \(r_j-r_i\to\pm\infty\), 1 or 0; no finite singularity, but calibration breakdown.
- \(\sigma_S\): if all \(s_i\) equal, \(\sigma=0\); \(u^{SD}=0\). 
- \(c_{ij}\): if no directed path either direction, undefined; disconnected graphs 2012/2015. 
- \(u^{CP}\): non-additive.
- \(u^{TD}\): distance unit; no time zones/rest. 
- \(u^{WD}\): wins; ignores tiebreakers. 
- Multiobjective: normalization by max; max zero issue.
- IP: only two games, no venue/broadcast/conference/rematch constraints.
- Simulation: independent draws, no ties, 10,000 iterations.

Need RETROCAUSAL_GENEALOGY. Historical lineage. Include multi-week traps. Maybe ~400 words.
Need RECURSIVE_THEORY_OF_MIND ~300-400.
Need CROSS_LAYER_VETO_ADJUDICATION ~400.
Need RLVR ~300-400.
Total >2500.

Need mention "GSE + GSI" maybe not necessary but can title. 
Need include "Frontier Reasoning Foundry" maybe in preamble? Could add `<THINK_TRACE>` first. 
Need not mention "betting lines" banned? Avoid. 
Need no "odds". Avoid words "odds" even in "odds ratio". 
Need no "spread" etc. Avoid "spread" maybe only "spread" not in text. 
Need no "total". Avoid "total" maybe "total predictive utility" is in paper. Is "total" banned? Ban is "totals" as betting line. But to be safe, avoid "totals" as noun; "sum" instead. Could use "sum predictive utility". Good.
Need no "moneyline". Fine.

Need "RLVR" maybe spelled out? "RLVR counterfactual vetoes" tag exact. Inside, "RLVR" can be "verifiable-reward counterfactual checks." Good. 

Need "predictions" with concrete. 
Need maybe "verifiable" means each scenario has a check. Good.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
Source-derived multi-hop audit. The paper’s causal chain is explicit: the NFL’s 16-game schedule consists of 14 structurally fixed games and two “parity games” scheduled from the previous season’s standings [PAGE 2]. That lag is the central fairness problem: “Scheduling games based on previous season’s results presents some issues because the composition and quality of a team can change dramatically from season to season” [PAGE 3]. The paper quantifies the instability: teams with at least a four-win season-to-season change account for “approximately 34% of all NFL teams during this timeframe”; at three or more wins, “this increases to 48% of all teams” [PAGE 4]. The proposed fix removes the two parity games and dynamically schedules replacements after 14 games, using current-season information. Fairness is operationalized as equalized strength of schedule through RPI, with SOS defined from opponents’ and opponents’ opponents’ winning percentages [PAGE 5]. Candidate games are scored by predictive utility, \( \bar u_{ij} = p_{ij}u_{ij} + p_{ji}u_{ji} \), where \(p_{ij}\) is an Elo-style win probability [PAGE 5–6]. Four utility layers are then built: reduce the standard deviation of league-wide SOS, reduce comparison-path length in the directed win graph, reduce travel distance, and reduce win differential [PAGE 6–7]. A greedy heuristic and a binary linear program schedule the final two weeks [PAGE 7–8]; outcomes are simulated 10,000 times [PAGE 9]; improvements are reported against the official schedule [PAGE 12].

The multi-hop derivation exposes several gray zones. First, the RPI/SOS chain is a rating proxy, not a playoff-selection rule. RPI is \(r_i = \frac{100}{4}WP_i + \frac{200}{4}OWP_i + \frac{100}{4}OOWP_i\) [PAGE 5], and SOS is \(s_i = \frac{200}{3}OWP_i + \frac{100}{3}OOWP_i\) [PAGE 6]. These are dimensionless scores, but they inherit any tie-handling convention; the paper assigns ties as wins except for two 2016 games [PAGE 5], which is a small but real bias. Second, \(p_{ij}\) is calibrated with \(\alpha = 0.056\) inverse RPI points using 2017 extreme teams [PAGE 5–6]. At equal RPI, \(p_{ij}=0.5\); as \(r_j-r_i \to \pm\infty\), the probability saturates at 1 or 0. There is no finite singularity, but there is a calibration-breakdown regime outside the observed RPI range. Third, the SOS utility \(u^{SD}_{ij} = \sigma_S - \sigma_{S^{ij}}\) is a marginal standard-deviation change [PAGE 6]. Standard deviation is nonlinear, so summing precomputed marginal utilities in the integer program is a linearization: the marginal value of game A depends on whether game B is also selected. The paper does not claim global optimality for this nonlinearity. Fourth, the comparison-path utility is explicitly non-additive: “the utility of one edge often overrides part of the utility of another edge” [PAGE 8]. Fifth, the comparison-path baseline can break: “Sometimes the cyclic nature of the official schedule creates disjoint graphs after the parity games are removed; 2012 and 2015 have this problem. In these cases, initial comparison paths cannot be computed” [PAGE 7]. That is a hard undefined regime, not a numerical inconvenience. Sixth, the optimization model schedules only two games per team; the paper itself says more games may yield more improvement [PAGE 12]. Seventh, the real-world constraint set is incomplete: the model lacks same-conference and no-rematch constraints [PAGE 13], and it does not include stadium availability or broadcast requirements [PAGE 13]. Eighth, the simulation treats each game as an independent Bernoulli draw with no ties [PAGE 9], so it does not encode home-field, injuries, rest, weather, or correlated team form. The reported headline results are therefore model-conditional: SOS improvement is 41.2% for the integer program and 38.6% for the greedy heuristic [PAGE 12], but the same integer program worsens comparison-path performance by 10.8% [PAGE 12]. The correct reading is Pareto-front exploration under a rating model, not a universal proof of fairness. The gray-zone audit also shows why a “fair” schedule can fail physically: the objective can prefer a mathematically balanced schedule that violates venue, rest, travel-recovery, or weather constraints. That is the bridge to the veto sections below.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines a directed graph \(G=(V,E)\), with \(V\) the 32 teams and a directed edge \(i\to j\) when team \(i\) beat team \(j\) [PAGE 4–5]. Degree \(d(v)=o(v)+i(v)\), where \(o(v)\) is outdegree wins and \(i(v)\) is indegree losses; winning percentage is \(WP_v = o(v)/d(v)\), dimensionless [PAGE 5]. The RPI is
\[
r_i=\frac{100}{4}WP_i+\frac{200}{4}OWP_i+\frac{100}{4}OOWP_i,
\]
where \(r_i\) is a dimensionless RPI score on a 0–100 scale, \(WP_i\) is team \(i\)’s winning percentage, \(OWP_i\) is opponents’ winning percentage, and \(OOWP_i\) is opponents’ opponents’ winning percentage [PAGE 5]. The SOS score is
\[
s_i=\frac{200}{3}OWP_i+\frac{100}{3}OOWP_i,
\]
also dimensionless, with the same weighting convention as RPI [PAGE 6]. The win probability is
\[
p_{ij}=1-p_{ji}=\frac{1}{1+10^{\alpha(r_j-r_i)}},
\]
where \(p_{ij}\in[0,1]\) is a probability, \(r_i,r_j\) are RPI points, and \(\alpha\) has units of inverse RPI points; the paper sets \(\alpha=0.056\) for the 2012–2017 NFL seasons after calibration [PAGE 5–6]. Predictive utility is
\[
\bar u_{ij}=\bar u_{ji}=p_{ij}u_{ij}+p_{ji}u_{ji},
\]
where \(\bar u_{ij}\) and the underlying utilities are dimensionless when the utility is dimensionless, and \(p_{ji}=1-p_{ij}\) [PAGE 6].

The four source utilities are:
\[
u^{SD}_{ij}=\sigma_S-\sigma_{S^{ij}},
\]
where \(S\) is the set of 32 SOS scores before the game and \(S^{ij}\) is the set after adding a game in which \(i\) beats \(j\); the unit is RPI/SOS points, and the objective is to maximize expected reduction in the standard deviation [PAGE 6]. The comparison-path utility is
\[
u^{CP}_{ij}=\sum_{k=1}^{32}\sum_{l=1}^{32}\left(\frac{c_{kl}-c^{ij}_{kl}}{2}\right),
\]
where \(c_{kl}\) is the shortest directed comparison-path length between teams \(k\) and \(l\) before the game, \(c^{ij}_{kl}\) is the length after the game, and the unit is comparison-path edge steps, dimensionless integer counts [PAGE 6]. The travel utility is
\[
u^{TD}_{ij}=u^{TD}_{ji}=d_{ij},
\]
where \(d_{ij}\) is stadium-to-stadium distance in a distance unit such as miles or kilometres; this is a minimization objective and does not depend on the game outcome [PAGE 7]. The win-differential utility is
\[
u^{WD}_{ij}=u^{WD}_{ji}=|w_i-w_j|,
\]
where \(w_i,w_j\) are wins and the unit is games/wins; this is also minimization-oriented and outcome-independent [PAGE 7]. The multi-objective utility, after normalization by each utility’s maximum, is
\[
u^{MO,ij}=u^{MO,ji}=w_{SD}u^{SD}_{ij}+w_{CP}u^{CP}_{ij}-w_{TD}u^{TD}_{ij}-w_{WD}u^{WD}_{ij},
\]
with dimensionless weights \(w_{SD},w_{CP},w_{TD},w_{WD}\) [PAGE 9]. The binary linear program uses \(x_{ijk}\in\{0,1\}\), equal to 1 if team \(i\) is home against \(j\) in week \(k\), and maximizes \(\sum_{i,j\in T}\sum_{k=1}^{2}u^{SD}_{ij}x_{ijk}\), subject to one game per team per week, one home and one away game per team over two weeks, no duplicate matchup, no intra-divisional game, and binary variable restrictions [PAGE 8]. The simulation draws \(n\in[0,1]\) for each of 16 new games and awards the game to \(i\) if \(n\in[0,p_{ij})\), otherwise to \(j\), with no ties, repeated 10,000 times [PAGE 9].

Assumptions and breakdown regimes are explicit. The RPI/SOS layer assumes win percentages are meaningful quality signals and that ties can be assigned as wins; the paper’s tie convention is a small bias [PAGE 5]. The probability layer has no finite singularity, but it degenerates at extreme RPI separation: \(p_{ij}\to 1\) or \(0\), and calibration is based on 2017 extremes, so it is not guaranteed outside that range [PAGE 5–6]. The CP layer is undefined when the directed graph is disconnected and no comparison path exists; the paper reports this for 2012 and 2015 after parity-game removal [PAGE 7]. The CP utility is also non-additive because one edge can override another edge’s marginal value [PAGE 8]. The SD utility can be zero or negative depending on the candidate game; if all SOS scores are equal, \(\sigma_S=0\), so no further SD reduction is possible [PAGE 6]. The multi-objective normalization divides by each utility’s maximum; if a maximum is zero, that normalization is undefined, and the chosen weights are policy choices rather than estimated parameters [PAGE 9]. The integer program is feasible only under its stated weekly, home-away, uniqueness, and divisional constraints; it does not include stadium availability, shared-stadium conflicts, broadcast requirements, same-conference tiebreak constraints, or prior-opponent constraints [PAGE 8, PAGE 13]. The simulation assumes independent game outcomes and excludes ties, so it is a model-conditional Monte Carlo, not a physical forecast [PAGE 9].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage runs from the round-robin ideal to practical league scheduling. The introduction states that a full round-robin would equalize strength of schedule, but football’s short season makes that unrealistic [PAGE 1]. In college football, non-conference games are often scheduled years in advance, when opponent quality is uncertain, and cross-divisional games are set before quality is known [PAGE 1]. The NFL’s structural alternative is a 14-game fixed core plus two parity games based on the previous standings [PAGE 2]. That is a retrocausal mechanism: current-season fairness is partly determined by last season’s rank. The paper’s empirical warning is that this lag is not small: 34% of teams changed by at least four wins from 2010–2018, and 48% changed by at least three wins [PAGE 4]. The 2017 table makes the point concrete: Jacksonville and Tennessee made the playoffs with SOS scores of 45.17 and 45.59, while Seattle, Detroit, and Dallas had SOS scores of 50.00, 51.07, and 50.82 but did not make the playoffs [PAGE 4]. The paper therefore treats dynamic scheduling as a corrective to stale parity information.

The scientific genealogy includes RPI from college sports, Elo-style win probabilities from rating and ranking literature, and the Langville–Meyer rating/ranking tradition [PAGE 5]. It also includes integer-programming scheduling work by Karwan et al. on rest and divisional balance, Dilkina and Havens on television assignment, and Murray on short-rest effects [PAGE 2–3]. The dynamic “power pairing” idea is traced to Nate Silver’s debate-tournament discussion and Conference USA’s 2018 tiered basketball scheduling [PAGE 2]. The travel layer is grounded in literature on travel costs and performance, including Entine and Small, Watanabe et al., Samuels, and Leatherwood and Dragoo [PAGE 7]. The uncertainty-of-outcome framing cites Rottenberg and Neale [PAGE 7]. This lineage matters because the paper is not inventing a new rating; it is recombining established rating, graph, and optimization operators into a late-season scheduling mechanism.

The multi-week traps are the most important genealogy layer. Trap one is the lag trap: parity games use previous-season rank, but roster, coaching, injuries, and form change [PAGE 3]. Trap two is the rotation trap: the 14 structural games repeat on a 12-year cycle, so schedule effects are locked in long before current quality is known [PAGE 2]. Trap three is the late-window trap: dynamic scheduling is limited to the final two weeks, after 14 games; the paper says rescheduling more games would reasonably be expected to improve results [PAGE 12]. Trap four is the weekly-weighting trap: the paper explicitly lists “weighting games week-to-week” as future work to reflect trajectory, personnel changes, and key injuries [PAGE 13]. Trap five is the venue-and-broadcast trap: stadium availability and television contracts are major real-world constraints not in the current model [PAGE 13]. Trap six is the tiebreak trap: the paper notes that realistic constraints would include same-conference opponents because conference winning percentage is a wild-card tiebreaker, and no rematch within the previous 14 games [PAGE 13]. These traps mean the model’s 41.2% SOS improvement [PAGE 12] is an upper-bound-style model result under a narrow constraint set, not a plug-in league policy.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer is not formalized in the paper, so it must be audited as an omitted strategic-response layer. At level zero, the league solves for a schedule using RPI, SOS, CP, TD, and WD utilities [PAGE 6–9]. At level one, teams know that the last two games are dynamically matched after 14 games. A team near a win tier boundary can anticipate that winning more may change its opponent tier under a win-differential or power-pairing objective; the paper’s WD objective pairs teams with similar win counts [PAGE 7]. That creates a counter-trap: the fairness patch can change late-season incentives. A team might prefer a particular win total or tiebreak position, not simply maximize wins, because opponent quality and conference tiebreaks interact. The paper does not model this strategic response. At level two, broadcasters and venues anticipate marquee matchups; the paper says broadcast television contracts contribute heavily to revenue and that marquee matchups are currently protected in the official schedule [PAGE 13]. A dynamic schedule that maximizes SOS variance reduction may produce less attractive late-season inventory, so broadcast preference can veto or reshape the optimization. At level three, playoff selectors and fans interpret SOS; a dynamically scheduled team’s resume is partly endogenous to the scheduling rule, so “quality win” narratives become recursive.

The crisis-habit regression is the default under time pressure: when the end-of-season window is tight, the league is likely to fall back to the legacy static parity rule, previous-year standings, and pre-booked television slots, because those are operationally familiar. The paper’s own conclusion says the traditional NFL approach is “a static heuristic that is executed before the season and is dependent on stale information” [PAGE 12]. The counter-trap is that a dynamic rule can create new forms of unfairness if teams game the tier boundaries or if the WD objective creates harder games for teams that win more. The clock is the two-week end-of-season window: the schedule cannot be set until after 14 games, but venue and broadcast commitments require lead time. If the clock is too early, current-season information is stale; if too late, physical and commercial constraints dominate. The correct recursive design would pre-register the rule, publish the utility weights, disclose tiebreak-relevant constraints, and model team response; the source does not do this. It only demonstrates that dynamic scheduling can improve model metrics under fixed behavior.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is formal. Let \(X\) be a candidate dynamic schedule and let \(H_c(X)\in\{0,1\}\) be a hard feasibility indicator for layer \(c\). Define
\[
H(X)=\prod_{c\in\mathcal{C}}H_c(X).
\]
If \(H(X)=0\), then \(X\) is vetoed regardless of its utility \(U(X)\). The source supplies only a partial \(\mathcal{C}\): weekly one-game-per-team, one home and one away game, no duplicate matchup, no intra-divisional game, and binary assignment [PAGE 8]. It does not supply \(H_{\text{stadium}}\), \(H_{\text{rest}}\), \(H_{\text{weather}}\), \(H_{\text{biomech}}\), \(H_{\text{broadcast}}\), \(H_{\text{conference}}\), or \(H_{\text{prior-opponent}}\). The paper explicitly flags stadium availability and shared-stadium complications: “Stadium availability is another concern for scheduling the unknown parity games,” and the New York Giants and New York Jets sharing a stadium would require additional constraints [PAGE 13]. It also flags broadcast contracts and marquee-matchup preferences [PAGE 13], plus same-conference and no-rematch constraints [PAGE 13]. Therefore, the optimization is necessary but not sufficient for real admissibility.

The physical veto is travel and recovery. The paper’s travel utility is only \(u^{TD}_{ij}=d_{ij}\), stadium-to-stadium distance [PAGE 7]. It does not model travel time, time-zone displacement, circadian disruption, altitude, heat, cold, surface, or consecutive-road-game accumulation. The paper does acknowledge that travel “adversely affects performance in sports” and cites west-coast teams such as Seattle and Los Angeles as most affected [PAGE 7]. But distance is a soft minimization objective, not a hard recovery constraint. A schedule can improve SOS variance while increasing a team’s travel burden; the paper’s own trade-off table shows that SOS optimization is not uniformly best on travel or comparison-path metrics [PAGE 12]. The biomechanical veto is similar: the paper cites rest and travel literature [PAGE 7], but no model variable encodes soft-tissue load, injury risk, neuromuscular fatigue, or return-to-play. The weather veto is entirely absent: no weather state, roof status, or outdoor-condition variable appears in the equations [PAGE 5–9]. Thus, a candidate schedule that is mathematically optimal can still be physically, biomechanically, or weather-inadmissible. Proof: if the true feasible set is \(\mathcal{F}_{\text{true}}\subset\mathcal{F}_{\text{model}}\), then \(\arg\max_{X\in\mathcal{F}_{\text{model}}}U(X)\) need not lie in \(\mathcal{F}_{\text{true}}\). The source’s results are therefore conditional on an incomplete feasible set; they are a screening layer, not a final schedule.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR-style verifiable-reward counterfactual 1: disconnected comparison-path graph. Check: remove the two parity games for a season, build the directed win graph, and test whether every pair has at least one directed path in one direction. If not, \(c_{kl}\) is undefined. The source reports this exact failure for 2012 and 2015: “Sometimes the cyclic nature of the official schedule creates disjoint graphs after the parity games are removed; 2012 and 2015 have this problem. In these cases, initial comparison paths cannot be computed” [PAGE 7]. Prediction: any CP-optimized schedule for those seasons is either invalid or must change the baseline by removing only one parity game, as the paper does; the reported CP improvement of 2.2% [PAGE 12] is therefore conditional on a repaired baseline. A verifier should reject a CP claim whenever the baseline graph is disconnected.

RLVR-style verifiable-reward counterfactual 2: shared-stadium and venue-week conflict. Check: map every dynamic home game to a venue and week, then test whether two tenant teams are assigned home in the same week or whether a venue is unavailable. The source says stadium availability is a concern and that the Giants and Jets sharing a stadium would require additional constraints [PAGE 13]. Prediction: the integer program as written can return a schedule that violates venue-week feasibility; adding the conflict constraint shrinks the feasible set and can reduce the SOS improvement below the reported 41.2% [PAGE 12]. A verifier should reject any schedule that fails the venue-week indicator, regardless of SOS, CP, TD, or WD utility.

RLVR-style verifiable-reward counterfactual 3: travel-recovery and weather veto. Check: compute each team’s away distance, time-zone shift, rest days, and outdoor weather exposure across the two dynamic weeks plus the preceding 14-game load. The source’s travel utility is only distance \(d_{ij}\) [PAGE 7], and it has no weather or rest constraint in the optimization [PAGE 8–9]. Prediction: an SOS-maximizing schedule can be vetoed for a team with a high cumulative travel/recovery load even if its \(u^{TD}\) is favorable; a multi-objective schedule such as MO(3,2,1,2), which reports improvement across SOS, CP, TD, and WD [PAGE 12], is more likely to survive the veto than a pure SOS schedule that worsens CP by 10.8% [PAGE 12]. A verifier should require the candidate schedule to pass pre-registered recovery and weather thresholds before accepting any fairness claim.
</RLVR_COUNTERFACTUAL_VETOES>