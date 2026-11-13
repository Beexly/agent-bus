---
source: "2026 - Characterizing and Controlling the Perceived Competitive Balance in Sports Leagues - Vaz-de-Melo et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2026"
pages: 29
model: deepseek/deepseek-v4.1-flash-1017
words: 8375
---

<NATIVE_REASONING>
We need answer with exact XML sections, >=1000 words depth, zero betting lines despite paper uses betting market odds. Need not mention lines/moneylines/odds? Invariant says zero betting lines: never mention spreads, totals, moneylines, or odds. We can discuss betting-market prediction accuracy? Better avoid "odds" word? The source has odds. But strict invariant: zero betting lines, never mention odds. We can refer to market-implied favorite accuracy / market forecasts without specifying prices. Need formal LaTeX equations with units and page citations exact quotes. Need >=400 word THINK_TRACE. Need source operators and equations, page cites, exact quotes. Need retrotcausal genealogy. Recursive theory of mind. Cross layer veto. RLVR counterfactual vetoes 3 scenarios + predictions. We can discuss sports analytics, not actual betting. Need avoid actual wagering recommendations. The source is a paper, not matchup. Need mention no lines. The drive source is academic. We need perhaps analyze the paper and possible application. User asked only DRIVE SOURCE. We should produce deep synthesis and audit. Need >=1000 words across exact XML sections. Need be careful with LaTeX and units. Need cite [PAGE N] exact quotes. Need formal equations, assumptions, singularity/breakdown. We can use paper equations. Need "source operators" maybe operators: variance, empirical CDF, quantile, argmax, expectation over permutations, schedule tensor, max-weight matching. Need units: points^2 for variance, dimensionless for τ%, probability dimensionless, rounds/matchdays for τ, schedule tensor binary dimensionless. Need breakdown regimes: K insufficient, α extremes, schedule degeneracy, non-round-robin, K permutations infeasible, true skill drift, draws absent, small n, unbalanced matches, iMWM uses ranks and can be gamed, "oracle" leakage, home advantage only, quantile envelope, multiple testing. Need cross-layer veto: physical/biomechanical/weather veto proof. Need for sports scheduling: travel, recovery, weather, venue, player workloads. Need exact: iMWM may schedule elite vs weak early, can increase congestion, travel, weather, competitive integrity. Need prove veto? We need present "veto proof" as conditions that override schedule optimization: if physical load exceeds thresholds, weather cancels etc. Formal thresholds and units. Need no fake ratios? We can state formal equations with units. We can invent? Invariant says no toy equations; formal LaTeX with SI units and assumptions. For veto, can state explicit constraints, not ratios. E.g., recovery time \Delta t_{rec} = t_{next} - t_{prev} in hours; veto if \Delta t_{rec} < H_{rec} = 48 h for collision sport? Need be careful. These are applied scenario thresholds, not from paper. We can label as auditing heuristics, not paper-supported. Need no fake ratios. We can use physical quantities: cumulative load (arbitrary units?) We can define mechanical work Joules? For biomechanical: cumulative high-speed running distance m, player load AU not SI. But invariant says SI/information/probability units. We can use J, s, m, K, kg, m/s, etc. But exact thresholds require assumptions. We can state "if using established sports-science load measures, e.g., cumulative external mechanical work W in J or distance in m, define veto when measured value exceeds team's validated threshold." No fake ratio.

Need source citation with [PAGE N] markers and verbatim quotes. Need include exact quotes from paper. We can quote short phrases. Need ensure not too many? Fine.

Need likely answer should not give actual betting advice. It's about a paper. We can mention betting markets? But zero odds. Avoid "odds" entirely. The paper says "odds"; we cannot quote that part verbatim if includes odds? We can cite page 10: "accuracy of the betting market" no odds. Exact quote: "We measure predictability using the accuracy of the betting market for the tournament, that is, what fraction of the season matches the team with the smallest odds won." Contains odds. Cannot quote because invariant zero odds. We can paraphrase. Need exact quotes from other parts.

Need discuss "perceived competitive balance" metric: τ. Need "observed turning point τ" and expected τ-hat. Need equations.

Need formal LaTeX:
- Null model: X_{i,t} = sum_{j<=t} x_{i,j}; x ∈ {0,1,3} points.
- Probabilities P_h, P_d, P_a; nonnegative sum 1.
- μ_t = (1/K) Σ V_t^{(k)}.
- q_t = inf{q: (1-α) ≤ \hat F_t(q)}; \hat F_t(q) = (1/K) Σ I(V_t^{(k)} ≤ q_t) (the paper has q_t in indicator, likely typo; correct q). Note paper equation (3) writes I(V_t^(k) ≤ q_t) not q. We can note "as printed" and correct interpretation. Need cite page 6. The exact printed equation uses q_t inside indicator. We can state as printed and note should be q. If exact equation, use q_t? We can use \tilde q. But formal. We can quote.
- τ = argmax{t: V_t < q_t}; but paper equation (4) "τ = argmax{t : V_t < q_t}"? Actually first moment observed imbalance becomes at least as large as q_t and stays. They define as argmax set where V_t < q_t. Need careful: τ = last t with V_t < q_t. It says first moment becomes at least as large and stays until end. Equation printed: τ = argmax {t : V_t < q_t}. That means last round below envelope. If no τ, τ=T. Use.
- τ% = τ/T dimensionless.
- E[τ] = Σ_{M∈S_{M0}} τ(M) P(M); approximation τ-hat = 1/|S^RR| Σ τ(M). Eq 7. Units rounds.
- Schedule tensor S ∈ {0,1}^{T×n×n}; S_{tij}=1 if ordered match (i home, j away) at round t.
- X_{i,t}(S)=Σ_{t'=1}^t Σ_{j=1}^n (x_i(i,j) S_{t'ij} + x_i(j,i) S_{t'ji}). Points.
- V_t(S)=1/(n-1) Σ_{i=1}^n (X_{i,t}(S) - \bar X_t)^2. Units points^2.
- τ(S)=argmax{t: V_t(S) ≤ Q_{1-α}[V_t(S)]}. Here the envelope is recomputed for schedule? In paper: quantile envelope \mathbb Q_{1−α}(V_t(S)). It says as function of schedule S. But schedule-dependent null model? If schedule changes, null model simulations should follow S? They might. But for same outcomes, envelope likely maybe schedule dependent. In practice, for controlling they use envelope? We can note.
- S* = argmax_S τ(S); τ* = τ(S*).
- DRR constraints (13-16).
- w(r_i,r_j)=(i-j)^2 dimensionless squared rank distance.
- Max-weight matching: A_t adjacency; S'_t = A_t ⊙ U, U strict upper triangular; home to higher-ranked team for minimizer, etc.

Need discuss "τ-minimizer" and "τ-maximizer": For maximizer, reverse minimizer with home-away swapped? Paper says construct S' minimizes τ, then S* set to S' reversed; but no guarantee. It says for maximization "favorable to set worst team as home". Need state.

Need source operators: variance as imbalance metric; empirical CDF; quantile; argmax; expectation over permutation group; combinatorial optimization; max-weight matching; element-wise multiplication.

Need page citations: [PAGE 3] for pattern; [PAGE 7] for means; [PAGE 8] for Sada Cruzeiro quote; [PAGE 9] for expected turning point definitions; [PAGE 10] for market correlation; [PAGE 13] for constraints; [PAGE 14] for iMWM; [PAGE 16] for weights; [PAGE 17] table; [PAGE 18] maxmin; [PAGE 25] synthetic validation; [PAGE 26] controlling; [PAGE 27] generalized formulation.

Need exact quotes. Examples:
- [PAGE 1]: "The concept of competitive balance, which refers to a well-balanced distribution of sporting talent across teams, is widely considered fundamental to a league's long-term viability and success"
- [PAGE 3]: "the real competitive imbalance remains within the shaded area until a specific matchday τ is reached. Beyond this point, the real variance permanently diverges"
- [PAGE 4]: "we introduce the \hat τ estimator, which represents the expected turning point of a tournament. This coefficient is independent of the schedule"
- [PAGE 5]: "The null model simulates a perfectly balanced version of a competitions’ regular season following the same schedule S as the original tournament C."
- [PAGE 6]: "We define the observed turning point τ as the first moment the observed imbalance V_t becomes at least as large as q_t and stays as such until the end of the tournament"
- [PAGE 7]: "Soccer leagues are the most balanced ones: the ones that present, on average, the highest turning point values."
- [PAGE 8]: "the likelihood of Sada Cruzeiro winning all five matches was only 3.9% if all teams were equally matched, yet they won them."
- [PAGE 9]: "Since generating all |S^RR_{M0}| permutations for tournaments with as few as 15 teams is unfeasible"
- [PAGE 10]: "there is a notable negative correlation across all four sports between the expected turning point \hat τ and the accuracy of the betting market"
- [PAGE 11]: "only 4.02% of all seasons were below the CI_{\hat τ}, while 3.09% were above."
- [PAGE 14]: "we propose a greedy approach that matches teams with the greatest skill discrepancy in each round"
- [PAGE 16]: "we define the discrepancy as the squared difference between their ranks"
- [PAGE 17]: "at least 96% of the seasons considered experienced a strict increase in their perceived competitive balance" (page 16 maybe)
- [PAGE 18]: "we propose an intermediate scheduler approach, namely τ-maxmin, which uses the τ-maximizer for the first half and the τ-minimizer for the second half"
- [PAGE 26]: "our maximizer still raises the median τ% by about 20-25%."
- [PAGE 27]: "Allowing teams to not play in a given round means that the optimal schedule S* would always be achieved by making each match a different, separate round."

Need exact quote with "odds" avoid. Page 10 quote includes betting market but not odds. Is "betting market" a betting line? Invariant says zero betting lines: never mention spreads, totals, moneylines, or odds. It doesn't forbid betting market generally? But to be safe, avoid "betting" too? It says zero betting lines, not zero betting. But "betting market" may be okay. Yet to be safe, use "market-implied favorite accuracy" and cite page 10 without quote? But need exact quotes. Could quote another phrase on page 10: "tournaments that are more balanced tend to exhibit greater difficulty in predicting match outcomes". That's safe. Avoid quoting odds sentence. Good.

Need maybe mention source paper uses market odds as indicator? We can say "market-implied favorite accuracy" but no odds. Fine.

Need "retrocausal genealogy": historical lineage: Rottenberg 1956, Neale 1964, uncertainty of outcome hypothesis, Jennett, Fort & Quirk, Szymanski, Bradley-Terry 1952, round-robin scheduling Rasmussen & Trick 2008, max-weight matching Galil 1986, competitive balance metrics Haan, Owen, Zimbalist, Csató. Multi-week traps: treating τ as true skill; schedule gaming; maxmin trade-off; "oracle" leakage; yesterday model promotion/relegation; market accuracy as validation but not causal; synthetic BT excludes draws/home advantage? They include home advantage in appendix controlling. Need multi-week traps: schedule manipulation can delay perception but not actual balance; if repeated over weeks, can create stakeless late matches; can violate broadcast; can be gamed by teams; using rank weights squared can overemphasize rank gaps; circularity when using final rankings to design schedule (oracle) could "predict" known outcomes; yesterday model has promotion/relegation issues.

Need "recursive theory of mind": crisis habit regression vs counter-trap vs clock. Interpret? Need discuss audience/fans/leagues/teams. Crisis habit regression: under pressure, leagues revert to legacy scheduling (big teams early, rivalry dates, broadcast windows) and ignore PCB. Counter-trap: if schedule delays τ, mid-table fans attend, but late-season games may become stakeless; if advance τ, loss-averse fans may prefer decisive matches but neutral fans lose. Clock: τ is a clock; manipulating it changes perceived time-to-separation. Need use recursive theory of mind: leagues model fans' beliefs; fans model leagues' manipulation; if detected, trust erodes. Need mention "perceived competitive balance" is belief-dependent. Need formal? Maybe not.

Need "cross-layer veto adjudication": physical/biomechanical/weather veto proof. Need show schedule optimization cannot override:
- physical: recovery time; if \Delta t < recovery threshold, veto. Use SI hours. Need formal: For team i, let t_{i,r} be scheduled match start times. Minimum inter-match recovery R_i = min_r (t_{i,r+1} - t_{i,r}) in hours. Veto if R_i < H_req, where H_req is sport/medical policy threshold. E.g., 48 h for collision team sports? We can state as policy parameter, not universal. But no fake equations? This is formal. Need units. 
- biomechanical: cumulative external load. Let L_i = \sum_r \int_{t_{r,0}}^{t_{r,1}} \dot E_i(t) dt in J or distance. Veto if L_i > L_max validated. Or peak acceleration? Use m/s^2. 
- weather: WBGT (wet-bulb globe temperature) in °C; wind speed m/s; precipitation mm/h; lightning distance km. Veto if WBGT > policy, wind > threshold, etc. Need exact thresholds? Could be venue-specific. We can give examples: WBGT > 32°C; lightning within 8 km; wind > 15 m/s? Need not be universal. Mark as illustrative. 
- travel: cumulative travel distance km and time zones. Veto if time zone shift > 6 h? Maybe.

Need "veto proof" maybe formal: The scheduling objective τ(S) is a scalar on perceived balance. Add constraints C_phys(S), C_bio(S), C_weather(S) ∈ {0,1}. Feasible set S_feas = {S∈S_DRR: C_phys=C_bio=C_weather=1}. Any S* from Eq 11 not in S_feas is inadmissible. Proof: Since τ(S) is defined solely on points and schedule; physical variables are outside the model; if constraints fail, the realized match outcomes distribution changes or match cannot be played, so null model probabilities P_h,P_d,P_a and X_{i,t} are invalid; thus τ(S) estimate not identified. Need formal. Good.

Need RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. RLVR = reinforcement learning with verifiable rewards? Need give 3 counterfactual veto scenarios and predictions. Each should be verifiable: e.g., 
1. Schedule maxizer proposes elite vs weak early with <48h recovery due to travel: veto; prediction: observed τ won't increase; if enforced, injury/withdrawal probability increases and match outcomes deviate; verifiable via recovery hours, travel logs, injury reports.
2. Weather: outdoor league with WBGT > 32°C; veto; prediction: match postponement or performance degradation; τ estimate biased; verifiable via WBGT records.
3. Biomechanical: cumulative high-speed distance > threshold; veto; prediction: late-season performance decline and increased injury; τ may diverge early independent of skill; verifiable via GPS load and injury database.
Need maybe include "counter-trap" prediction: if league hides manipulation, fan trust decreases; measurable via attendance? But RLVR verifiable? We can predict market-implied favorite accuracy? Avoid betting. Use attendance and broadcast viewership. But "verifiable RLVR veto scenarios" likely wants 3 scenarios where a model reward would be vetoed. We can define reward: \Delta τ(S) > 0. Veto if physical constraint fails. Predictions: if veto ignored, actual \tau decreases or injury rate increases. Need no betting lines.

Need "THINK_TRACE" deep multi-hop derivation and gray-zone audit >=400 words. Need include reasoning and audit. Could be ~600 words. The total answer needs >=1000 words. We'll make each section substantial. Desired oververbosity 5. Need not be too huge but >1000. We can write ~2500-3500 words. Need exact XML tags. Ensure no markdown? XML sections. Use LaTeX. The answer should be one response with tags. Need avoid malformed XML? Use plain text inside tags. Need include equations with LaTeX. XML tags cannot contain < in text? If we write inequalities like <, it may break XML? The instructions ask exact XML sections, but we can use LaTeX with \lt or \le to avoid raw <. Use \lt, \gt. Need not be valid XML? To be safe, avoid raw < and > in text, use \lt, \gt. But tags themselves. Use &lt;? Better use LaTeX \le, \lt. Avoid ampersands. Use "and" not &. Use "\hat{\tau}". Need not escape underscores? In XML text, underscores fine. But LaTeX braces fine. Need avoid raw ampersand. Use "and". Use "≤" unicode? XML okay. Use "≥". Unicode okay. Use Greek. Fine.

Need cite exact [PAGE N]. Use "verbatim: “...”" Need ensure quotes don't contain raw < or &. Use quotes from source. For page 6 equation, we can quote "We define the observed turning point τ as the first moment the observed imbalance V_t becomes at least as large as q_t and stays as such until the end of the tournament" (no <). Good.

Need mention "zero betting lines" maybe explicitly state "No spreads, totals, moneylines, or odds are used or recommended." But invariant says never mention spreads, totals, moneylines, or odds. If I mention them to say zero, that violates? It says never mention. So don't list them. Say "No wagering prices or market lines are used or recommended." But "market lines" is close. Hmm. Avoid any mention. Just don't discuss betting. The paper's market validation can be described as "market-implied favorite accuracy" but "market" maybe okay. Could avoid "betting" entirely. Use "forecast-market accuracy" maybe not. Better say "a separate market-forecast accuracy check" without details. But need cite page 10. Hmm.

Need "source operators and equations" include "betting market" maybe not. We can say "The paper validates \hat τ against forecast-market favorite accuracy." Is that a betting line? No. But source says betting market. To avoid "betting", use "pre-match market favorite accuracy." Fine.

Need "retrocausal genealogy" mention "uncertainty of outcome hypothesis" and "loss aversion" from paper. Good.

Need "recursive theory of mind" use "fans' beliefs about league manipulation" etc.

Need formal assumptions and breakdown regimes. Let's draft.

Structure:
<THINK_TRACE>
- Summarize derivation: paper's core trick: compare observed variance trajectory V_t to null envelope q_t from same schedule; τ is last round below envelope; τ% normalized; τ-hat averages over round-robin permutations to remove order. Then control via schedule tensor and max-weight matching.
- Multi-hop: from τ to τ-hat to S* to iMWM to τ-maxmin. Explain each.
- Gray-zone audit: 
  * τ is not true skill; it's perceptual/detection time. 
  * Null model uses empirical P_h/P_d/P_a from real tournament; this leaks home advantage and league scoring rates; if schedule changes, probabilities may not be invariant.
  * q_t empirical quantile with K simulations; K finite; α=5% in appendix; multiple comparisons across t and seasons; 4.02%/3.09% outside CI not independent.
  * τ depends on variance metric; paper uses variance in control but could use other metrics; not unique.
  * τ-hat uses uniform RR permutations; excludes real irregularities; sampled K; not exact expectation; round-robin constraints.
  * iMWM uses ranks; oracle vs yesterday; oracle uses final rankings = leakage if evaluating actual schedule; success rates not causal.
  * Maximizer may postpone separation but not improve true balance; can create late stakeless matches; maxmin trades.
  * Draws absent in BT; home advantage only; no travel/weather.
- Need >=400 words. We can write ~700.

<SOURCE_OPERATORS_AND_EQUATIONS>
- List operators and equations with units/citations.
- Include null model, empirical CDF, quantile, τ, τ%, Eτ, S tensor, X, V, optimization, constraints, weights, matching.
- Assumptions and breakdown regimes: K, α, n, T, T even, no self matches, one per round, two turns, draws, home advantage, rank estimation, combinatorial infeasibility, generalized formulation.
- Use page cites and quotes. Need exact quotes. Keep concise.

<RETROCAUSAL_GENEALOGY>
- Lineage: Rottenberg 1956, Neale 1964, uncertainty of outcome, Jennett 1984, Fort & Quirk 1995, Szymanski 2003, competitive balance metrics (Zimbalist, Haan, Owen, Manasis, Gerrard & Kringstad), Bradley-Terry 1952, scheduling (Rasmussen & Trick 2008), matching (Galil 1986), Csató 2020/2025. 
- Multi-week traps: schedule effect accumulates; early easy games for strong teams; Sada Cruzeiro example; τ-hat stabilizes; maxmin; broadcast; promotion/relegation; oracle leakage; market validation not causal.
- Maybe quote page 8 and 9.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: under crisis, leagues return to legacy scheduling, big teams in prime slots, rivalry weeks, ignore PCB; teams/fans anticipate. 
- Counter-trap: maximizer may fool fans into thinking balance; once fans infer manipulation, trust/attendance drop; maxmin balances. 
- Clock: τ is a clock; manipulating clock changes perceived suspense. Need recursive: league models fan inference; fans model league incentives; media model both. Need counter-trap: if τ is delayed, mid-table fans engage but top fans may discount; if advanced, loss-averse fans like decisive games but neutral fans leave. 
- Maybe mention "crisis habit regression" as when schedule compression due to weather/COVID, organizers revert to ad hoc scheduling, increasing τ variance; τ-hat can detect anomalies.

<CROSS_LAYER_VETO_ADJUDICATION>
- Formal veto constraints. 
- Physical: recovery time H_req in hours; travel distance km; time zones. 
- Biomechanical: cumulative load J or distance m; peak acceleration m/s^2; injury risk. 
- Weather: WBGT °C, wind m/s, precipitation mm/h, lightning km. 
- Proof: If constraints fail, the null model's probabilities and outcomes are not invariant; τ estimate is not identified; any schedule S* is inadmissible. Use formal set. 
- Need "physical/biomechanical/weather veto proof" maybe include a proof sketch.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios:
1. Recovery/travel: Maximizer assigns top vs bottom early but forces <48 h recovery and >6 h time-zone shift. Veto. Prediction: if ignored, injury/withdrawal risk, performance degradation, actual V_t rises for non-skill reasons; τ estimate biased downward; verifiable via recovery hours, travel logs, injury reports.
2. Weather: Outdoor summer league with WBGT > 32°C or lightning within 8 km. Veto. Prediction: postponement or reduced intensity changes P_h/P_d/P_a; τ not comparable; verifiable via weather station, match logs.
3. Biomechanical load: Maximizer creates repeated high-intensity matches for key players exceeding cumulative high-speed distance threshold. Veto. Prediction: late-season injury and performance drop; τ diverges early; verifiable via GPS load and injury records.
- Maybe include "counterfactual prediction": If veto applied, schedule still can have τ increase? Need "RLVR veto scenarios + predictions": For each, describe reward would be vetoed, and prediction under veto. Use verifiable metrics.

Need maybe include "no betting lines" not mention. Good.

Need exact quotes with [PAGE]. Ensure quotes are verbatim. Let's pick quotes carefully:
- Page 1: "The concept of competitive balance, which refers to a well-balanced distribution of sporting talent across teams, is widely considered fundamental to a league's long-term viability and success"
- Page 3: "the real competitive imbalance remains within the shaded area until a specific matchday τ is reached. Beyond this point, the real variance permanently diverges, displaying a more pronounced rate of increase."
- Page 4: "we introduce the τ^ estimator, which represents the expected turning point of a tournament. This coefficient is independent of the schedule"
- Page 5: "The null model simulates a perfectly balanced version of a competitions’ regular season following the same schedule S as the original tournament C."
- Page 6: "We define the observed turning point τ as the first moment the observed imbalance V_t becomes at least as large as q_t and stays as such until the end of the tournament"
- Page 7: "Soccer leagues are the most balanced ones: the ones that present, on average, the highest turning point values."
- Page 8: "the likelihood of Sada Cruzeiro winning all five matches was only 3.9% if all teams were equally matched, yet they won them."
- Page 9: "Since generating all |S^RR_{M0}| permutations for tournaments with as few as 15 teams is unfeasible"
- Page 10: "tournaments that are more balanced tend to exhibit greater difficulty in predicting match outcomes"
- Page 11: "only 4.02% of all seasons were below the CI_{\hat τ}, while 3.09% were above."
- Page 13: "Equation 13 states that no team will ever face itself during the competition"
- Page 14: "we propose a greedy approach that matches teams with the greatest skill discrepancy in each round"
- Page 16: "we define the discrepancy as the squared difference between their ranks"
- Page 17: "at least 96% of the seasons considered experienced a strict increase in their perceived competitive balance" (Actually page 16 last paragraph? The source page 16 includes "at least 96%". Yes page 16. But table page 17. Use [PAGE 16].)
- Page 18: "we propose an intermediate scheduler approach, namely τ-maxmin, which uses the τ-maximizer for the first half and the τ-minimizer for the second half of the tournament."
- Page 26: "our maximizer still raises the median τ% by about 20-25%."
- Page 27: "Allowing teams to not play in a given round means that the optimal schedule S* would always be achieved by making each match a different, separate round."
Need exact quote on page 4 uses τ^ maybe. Use "τ-hat" in quote? The source text has "τ^" due PDF. We can write "τ̂" or "\hat τ". Verbatim? Hmm. We can quote with \hat τ? The source text: "we introduce the  estimator, τ ^ which represents..." It's garbled. Better avoid quote there or use paraphrase. Need exact quote marker. We can quote "which represents the expected turning point of a tournament. This coefficient is independent of the schedule" from [PAGE 4] without the garbled symbol. It is verbatim enough? It has "This coefficient is independent of the schedule". Good.

Need not use raw < in equations. Use \lt. In LaTeX, \lt is not standard? It is. Use \le. For argmax set, use \{t:\mathcal V_t \lt q_t\}. Good.

Need mention "quantile" equation as printed has \hat F_t(q) = (1/K)Σ I(\mathcal V_t^{(k)} ≤ q_t). The indicator should use q not q_t; note as printed. We can write "as printed" and "interpreted as q". Maybe no need.

Need "units" in equations: 
- x_{i,j} ∈ {0,1,3} points.
- V_t in points^2.
- q_t in points^2.
- τ in rounds/matchdays.
- τ% dimensionless.
- P(M) dimensionless.
- S binary dimensionless.
- w dimensionless (squared rank difference).
- W (weather) °C, m/s, mm h^{-1}. Use h^{-1} with LaTeX.
- Recovery hours h.

Need "breakdown regimes" include exact singularity: 
- K → 0 or small: empirical CDF/quantile undefined; q_t not estimable; τ unstable.
- α → 0: quantile near max; envelope too wide, τ → T; α → 1: envelope too tight, τ → 0. 
- n=1 or n=2? n≥8 in dataset; n<2 invalid variance denominator n-1. 
- T odd with DRR? n odd needs bye; paper generalized. 
- T/2 in constraints requires even T. 
- Schedule tensor constraints infeasible if n odd in strict DRR? Actually DRR can handle odd with byes but Eq 15 requires exactly one match per team per round; n odd impossible. Breakdown.
- If all teams equal? τ=T by definition; if true imbalance huge and top vs second gap huge, iMWM cannot mimic balance; max decrease.
- If rank estimate wrong (yesterday model), success 64.3/69.4 etc.
- If outcomes not exchangeable (COVID, rescheduling), τ-hat not identified.
- If home advantage not constant or P_h/P_d/P_a vary by match, null model misspecified.
- If multiple metrics, τ depends on variance; not invariant.

Need "cross-layer veto" proof. Let's formulate:
Let \mathcal S be all schedules satisfying DRR. Let \tau(S; M0) be paper's objective. Define feasibility indicators:
C_phys(S)=1 iff for every team i and consecutive matches r, t_{i,r+1}-t_{i,r} ≥ H_req and travel time ≥ T_travel. Units h.
C_bio(S)=1 iff L_i(S) ≤ L_max and A_i(S) ≤ A_max. Units J, m, m s^{-2}.
C_weather(S)=1 iff at each scheduled venue time, WBGT ≤ WBGT_max, wind ≤ v_max, lightning distance ≥ d_min, etc.
Admissible set \mathcal S_adm = {S ∈ \mathcal S: C_phys=C_bio=C_weather=1}. If S* ∉ \mathcal S_adm, then S* cannot be implemented; more importantly, the observed X_{i,t} under S* are not generated by the same null model because match availability and probabilities change. Therefore τ(S*) is a counterfactual not identified by M0. Veto. This is proof sketch.

Need "RLVR" maybe mention reward: R(S)=τ%(S) - λ violations. Veto if violations >0. Predictions. Good.

Need ensure answer has >=1000 words. We'll write around 3000. Need not be overly verbose. But enough.

Potential issue: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." Our veto equations are not ratios. Good. "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We'll do.

Potential issue: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We'll include many.

Potential issue: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Avoid words. Do not mention "betting" maybe. Use "market-implied favorite accuracy" not "odds". But source page 10 quote "accuracy of the betting market" includes betting. Is that a betting line? It's not line/odds. To be ultra safe, avoid quote with "betting". Use quote "tournaments that are more balanced tend to exhibit greater difficulty in predicting match outcomes" from page 10. No betting. Good.

Need maybe not mention "market" at all? We can say "The paper's external validation uses pre-match favorite prediction accuracy" without saying betting. Fine.

Need "source operators and equations" maybe include "market accuracy" as validation: "The paper correlates \hat τ with pre-match favorite prediction accuracy [PAGE 10]." No odds. Good.

Need exact quote page 10: "there is a notable negative correlation across all four sports between the expected turning point τ^ and the accuracy of the betting market" would include betting. Avoid. Use other quote. But cite [PAGE 10] and quote "tournaments that are more balanced tend to exhibit greater difficulty in predicting match outcomes". Yes.

Need "retrocausal genealogy" mention "Rottenberg, 1956; Neale, 1964" etc. Good.

Need "recursive theory of mind" maybe "crisis habit regression" needs define: under uncertainty, leagues regress to habitual scheduling practices; counter-trap: if they manipulate τ, sophisticated fans adjust beliefs; clock: τ as perceived clock. Need perhaps formal? Not necessary.

Need "cross-layer veto adjudication" include "physical/biomechanical/weather veto proof" with formal constraints. Good.

Need "RLVR counterfactual vetoes" include predictions. Good.

Let's craft final answer carefully. Use XML tags exactly. Use no raw < or > in text. Use \lt and \gt. Use ≤ etc. For tags, okay.

Need maybe include "word count" not needed.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central derivation is a change of measurement target: instead of asking only whether final standings are unequal, it asks how long the observed points distribution remains statistically indistinguishable from a perfectly balanced league that preserves the same schedule and the same empirical match-result frequencies. The first operator is the null-model imbalance trajectory. For each simulated balanced season, the paper records a variance trajectory \(\mathcal V_t^{(k)}\) in points squared, then forms the average \(\mu_t\) and an empirical \((1-\alpha)\)-quantile envelope \(q_t\). The observed turning point \(\tau\) is the last round at which the real imbalance remains below that envelope; \(\tau\%\) divides by season length \(T\). The source states the pattern plainly: “the real competitive imbalance remains within the shaded area until a specific matchday \(\tau\) is reached. Beyond this point, the real variance permanently diverges, displaying a more pronounced rate of increase” [PAGE 3]. This is not a measure of true skill dispersion. It is a detection-time measure: when does a league’s accumulated points table become too dispersed to be plausible under a balanced null model?

The second move is schedule de-biasing. Because \(\tau\) depends on match order, the paper defines the expected turning point \(\hat\tau\) by averaging \(\tau(M)\) over admissible round-robin permutations \(M\) of the same observed match results \(M_0\). The paper says the estimator “represents the expected turning point of a tournament. This coefficient is independent of the schedule” [PAGE 4]. The Sada Cruzeiro example is the motivating gray zone: a world-championship entrant played five early matches while most rivals played two; the paper notes “the likelihood of Sada Cruzeiro winning all five matches was only 3.9% if all teams were equally matched, yet they won them” [PAGE 8]. That produces \(\tau=4\), an observed turning point that is really a scheduling artifact. The expected version is designed to neutralize exactly that artifact.

The third move is control. The schedule is encoded as a binary tensor \(S_{tij}=1\) when team \(i\) hosts team \(j\) in round \(t\). Given the fixed observed match outcomes \(x_i(i,j)\) and \(x_i(j,i)\), the points table \(X_{i,t}(S)\), variance \(\mathcal V_t(S)\), and turning point \(\tau(S)\) become functions of \(S\). The optimization \(S^*=\arg\max_S \tau(S)\) is a combinatorial schedule-design problem. The heuristic iMWM constructs a \(\tau\)-minimizer by repeatedly choosing maximum-weight matchings in which weights are squared rank differences \((i-j)^2\), then reverses and home-away-flips that schedule as a maximizer heuristic. The paper reports that under the oracle ranking, “at least 96% of the seasons considered experienced a strict increase in their perceived competitive balance” [PAGE 16]. The \(\tau\)-maxmin compromise uses the maximizer in the first half and the minimizer in the second half “to ensure the most thrilling matches occur towards the tournament’s conclusion” [PAGE 18].

The gray-zone audit is where the paper is strongest and most vulnerable. First, \(\tau\) inherits the chosen imbalance metric; the control formulation uses variance, but the paper acknowledges that different competitive-balance metrics capture different facets and that there is no consensus on the best one [PAGE 2]. Second, the null model estimates home-win, draw, and away-win probabilities from the real tournament, so the envelope is not a universal balanced-league prior; it is a league-specific, schedule-specific, era-specific null. Third, the empirical quantile depends on the number of simulations \(K\); small \(K\) makes \(q_t\) noisy, and \(\alpha\) controls a multiple-round envelope, not a single pre-registered test. The reported 4.02% below and 3.09% above the expected confidence interval [PAGE 11] are descriptive, not independent confirmatory tests. Fourth, \(\hat\tau\) is an approximation: the paper explicitly says generating all round-robin permutations for as few as 15 teams is unfeasible [PAGE 9]. Fifth, iMWM uses rank estimates; the oracle uses final rankings, which is a leakage-prone upper bound, while the “yesterday” model is a lower bound with promotion and relegation complications. Sixth, the objective is perceived balance, not fairness, welfare, or true competitive balance. A schedule can postpone visible separation while leaving the same underlying skill hierarchy; it can also create late-season stakeless matches. Seventh, the model treats home advantage as the main non-skill determinant and does not embed travel, recovery, weather, or biomechanical load. That omission is exactly why cross-layer vetoes must sit outside the \(\tau\) optimizer.

The multi-hop chain is therefore: observed variance \(\rightarrow\) null envelope \(\rightarrow\) observed \(\tau\) \(\rightarrow\) permutation-averaged \(\hat\tau\) \(\rightarrow\) schedule tensor \(S\) \(\rightarrow\) combinatorial maximization \(\rightarrow\) iMWM heuristic \(\rightarrow\) maxmin compromise. The audit should not reject the chain; it should restrict its claim. The chain identifies a perceptual timing effect under fixed outcomes and a maintained null model. It does not identify a causal effect of scheduling on true competitive balance, attendance, fairness, or player health. Those require separate evidence and constraints.

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper defines the accumulated points of team \(i\) through round \(t\) as
\[
X_{i,t}=x_{i,1}+\cdots+x_{i,t},\qquad x_{i,j}\in\{0,1,3\}\ \text{points},
\]
where 3 points are awarded for a win, 1 for a draw, and 0 for a loss [PAGE 5]. The null model simulates a balanced league using the same schedule \(S\) as the real tournament \(C\): “The null model simulates a perfectly balanced version of a competitions’ regular season following the same schedule \(S\) as the original tournament \(C\)” [PAGE 5]. The empirical probabilities are \(P_h\), \(P_d\), and \(P_a\), dimensionless and summing to 1.

For simulation \(k\), the imbalance at round \(t\) is \(\mathcal V_t^{(k)}\), measured in points squared when variance is used. The expected balanced imbalance is
\[
\mu_t=\frac{1}{K}\sum_{k=1}^{K}\mathcal V_t^{(k)}\quad [\text{points}^2],
\]
and the empirical cumulative distribution is
\[
\hat F_t(q)=\frac{1}{K}\sum_{k=1}^{K} I\!\left(\mathcal V_t^{(k)}\le q_t\right),
\]
with \(I\) an indicator variable. The paper’s printed equation uses \(q_t\) inside the indicator [PAGE 6]; operationally the argument should be the running value \(q\). The quantile envelope is
\[
q_t=\inf\{q:(1-\alpha)\le \hat F_t(q)\}\quad [\text{points}^2],
\]
where \(\alpha\) is a dimensionless significance level. The observed turning point is
\[
\tau=\arg\max\{t:\mathcal V_t\lt q_t\}\quad [\text{rounds or matchdays}],
\]
and the paper states: “We define the observed turning point \(\tau\) as the first moment the observed imbalance \(\mathcal V_t\) becomes at least as large as \(q_t\) and stays as such until the end of the tournament” [PAGE 6]. Normalization gives
\[
\tau\%=\frac{\tau}{T}\quad [\text{dimensionless}],
\]
where \(T\) is the number of rounds [PAGE 7]. If no divergence occurs, \(\tau=T\) by convention.

The expected turning point is
\[
E[\tau]\coloneqq E[\mathcal T\mid M_0]=\sum_{M\in\mathfrak S_{M_0}}\tau(M)\mathbb P(M)\quad [\text{rounds}],
\]
and the feasible approximation is
\[
\hat\tau=\frac{1}{|\mathfrak S^{RR}_{M_0}|}\sum_{M\in\mathfrak S^{RR}_{M_0}}\tau(M)\quad [\text{rounds}],
\]
where \(\mathfrak S^{RR}_{M_0}\) is the set of round-robin permutations of the observed results \(M_0\) [PAGE 9]. The paper notes: “Since generating all \(|\mathfrak S^{RR}_{M_0}|\) permutations for tournaments with as few as 15 teams is unfeasible” [PAGE 9]; hence \(K\) sampled permutations are used.

For control, the schedule is a binary tensor
\[
S\in\{0,1\}^{T\times n\times n},\qquad S_{tij}=1
\]
if ordered match \((i,j)\) with \(i\) at home and \(j\) away occurs in round \(t\), and 0 otherwise [PAGE 12]. The points of team \(i\) through round \(t\) under schedule \(S\) are
\[
X_{i,t}(S)=\sum_{\tilde t=1}^{t}\sum_{j=1}^{n}
\left(x_i(i,j)S_{\tilde t i j}+x_i(j,i)S_{\tilde t j i}\right)\quad [\text{points}],
\]
and the variance imbalance is
\[
\mathcal V_t(S)=\frac{1}{n-1}\sum_{i=1}^{n}\left(X_{i,t}(S)-\bar X_t\right)^2\quad [\text{points}^2],
\]
where \(\bar X_t\) is the average point total across the \(n\) teams [PAGE 12]. The schedule-dependent turning point is
\[
\tau(S)=\arg\max\{t:\mathcal V_t(S)\le \mathbb Q_{1-\alpha}[\mathcal V_t(S)]\}\quad [\text{rounds}],
\]
and the control problem is
\[
S^*=\arg\max_S \tau(S),\qquad \tau^*=\tau(S^*)\quad [\text{rounds}].
\]
For double round-robin, the paper imposes \(S_{tii}=0\); each ordered pair occurs exactly once; each team plays at most once per round; and the tournament is divided into two turns in which teams face each other once before repeating [PAGE 13]. The paper says: “Equation 13 states that no team will ever face itself during the competition” [PAGE 13].

The iMWM heuristic uses a weighted graph \(G_t=(N,E_t,w)\), where \(w(r_i,r_j)=(i-j)^2\) is dimensionless squared rank distance [PAGE 16]. The paper says: “we define the discrepancy as the squared difference between their ranks” [PAGE 16]. A maximum-weight matching returns an adjacency matrix \(A_t\); multiplication by a strictly upper-triangular matrix \(U\) filters the lower triangle, \(S'_t=A_t\odot U\), assigning home status to the higher-ranked team for the minimizer [PAGE 15]. The paper’s greedy logic is: “we propose a greedy approach that matches teams with the greatest skill discrepancy in each round” [PAGE 14]. The maximizer reverses the minimizer schedule and flips home-away status as a heuristic; the paper warns there is no guarantee that reversal produces an exact maximizer.

Key assumptions and breakdown regimes: \(n\ge 2\) for the variance denominator \(n-1\); the dataset uses at least 8 teams and 50 matches [PAGE 4]; strict DRR requires even \(T\) and no byes, so odd \(n\) breaks the exact one-match-per-team-per-round constraint unless the generalized formulation is used; \(K\) must be large enough for stable empirical quantiles, and \(K\to 0\) makes \(q_t\) undefined; \(\alpha\to 0\) makes the envelope too wide and drives \(\tau\to T\), while \(\alpha\to 1\) makes it too tight and drives \(\tau\to 0\); non-exchangeable outcomes such as pandemic rescheduling break the permutation interpretation; misspecified \(P_h,P_d,P_a\) break the null model; a wrong rank input breaks iMWM; and if the top-two skill gap is enormous, no schedule can mimic balance. The paper’s generalized formulation adds a fourth-order tensor \(S_{tijk}\) and relaxes the one-match-per-round constraint, but it also notes that unconstrained relaxation would make “the optimal schedule \(S^*\) would always be achieved by making each match a different, separate round” [PAGE 27].

<RETROCAUSAL_GENEALOGY>
The scientific lineage runs from the uncertainty-of-outcome tradition in sports economics to modern combinatorial schedule design. Rottenberg (1956), Neale (1964), Jennett (1984), Fort and Quirk (1995), and Szymanski (2003) frame competitive balance as a demand and league-viability problem; the paper cites this lineage and states that competitive balance “is widely considered fundamental to a league's long-term viability and success” [PAGE 1]. The measurement lineage includes Zimbalist (2002), Haan et al. (2007), Owen (2013), Owen and King (2015), Manasis et al. (2022), and Gerrard and Kringstad (2022): the paper explicitly notes that different metrics capture distinct facets and that there is no consensus on the best measure [PAGE 2]. The statistical lineage includes Bradley and Terry (1952), used for synthetic validation [PAGE 25], and the scheduling lineage includes Rasmussen and Trick (2008) on round-robin scheduling and Galil (1986) on maximum matching [PAGE 9, PAGE 15].

The retrocausal trap is that later schedule design can appear to “prove” earlier competitive-balance claims. A league that schedules strong teams against weak teams early will show rapid points dispersion; the observed \(\tau\) will fall; a naive analyst may infer declining true balance. But the paper’s own Sada Cruzeiro case shows that match order alone can create an extreme \(\tau=4\) [PAGE 8]. Reversing the causal arrow—using \(\hat\tau\) to standardize schedules—helps, but it also creates a new trap: if the standardized \(\hat\tau\) is treated as the league’s “true” balance, then schedule irregularities are erased rather than explained. The paper is careful to say \(\hat\tau\) “neutralizes this influence but disregards the potential importance of match order” [PAGE 19]. That is a retrocausal warning: the corrected measure is not the same object as the experienced tournament.

A second multi-week trap is the maxmin temptation. The \(\tau\)-maximizer can keep the table tight early, but it may place the most attractive matches before the final rounds. The paper proposes \(\tau\)-maxmin: “we propose an intermediate scheduler approach, namely \(\tau\)-maxmin, which uses the \(\tau\)-maximizer for the first half and the \(\tau\)-minimizer for the second half of the tournament” [PAGE 18]. That compromise is sensible for broadcast and late-season stakes, but it can sacrifice perceived balance in leagues whose real \(\tau\) is already high. The paper observes that blue dots indicating decreased \(\tau\) “mainly occur after the tournament’s first half” [PAGE 18]. Over multiple weeks, a league could drift into a schedule that looks balanced in the first half and then manufactures separation in the second; fans may learn the pattern.

A third trap is oracle leakage. The iMWM evaluation uses final rankings as an “oracle” upper bound and previous-season rankings as a “yesterday” lower bound [PAGE 16–17]. If a practitioner uses end-of-season rankings to design the next season’s schedule and then evaluates on the same season, the result is not a forecast; it is retrospective fitting. The paper’s success rates must be read as algorithmic potential under known rank order, not as field evidence. The “yesterday” model is more realistic, but promotion and relegation force assumptions about promoted teams’ ranks [PAGE 17]. A multi-week deployment should pre-register the rank model and evaluate only out-of-sample seasons.

A fourth trap is metric substitution. The paper uses variance in the control formulation, but the initial detection can be run with “any competitive balance metric” [PAGE 6]. Changing the metric changes the envelope and therefore \(\tau\). A league could inadvertently optimize a variance-based \(\tau\) while claiming improvement in a broader competitive-balance construct. The genealogy therefore warns against reifying one number: \(\tau\), \(\tau\%\), and \(\hat\tau\) are operational constructs tied to a null model, a metric, and a permutation class.

<RECURSIVE_THEORY_OF_MIND>
The recursive game has three layers: the league models fans’ beliefs about balance; fans model the league’s incentive to manipulate the schedule; and media or analysts model both. The paper’s construct is explicitly “perceived” competitive balance, not latent skill parity. That makes the schedule a signal. In a crisis, leagues often regress to habitual scheduling: marquee teams in prime slots, rivalry weeks, broadcast windows, and travel minimization. This “crisis habit regression” can override \(\tau\)-optimization even when the optimizer says a different order would extend perceived balance. The regression is not irrational; it protects revenue and traditional audience expectations. But it means the \(\tau\)-maximizer will rarely be implemented in pure form. The likely equilibrium is a constrained schedule that satisfies broadcast and rivalry constraints first, then uses iMWM only inside the remaining degrees of freedom.

The counter-trap is sophisticated fan inference. If a league delays \(\tau\) by pairing strong teams with weak teams early and adjusting home status to equalize win probabilities, mid-table fans may experience more suspense for more weeks. But sophisticated fans may infer that the table is artificially tight. If they believe the league is manipulating perception, the effect can reverse: perceived integrity falls, and the “balanced” table becomes evidence of engineering rather than uncertainty. The paper’s own maxmin compromise anticipates this: it keeps the most consequential matches late, which is more defensible to fans than a pure maximizer that front-loads attractive matches. The recursive equilibrium is therefore not “maximize \(\tau\)” but “maximize \(\tau\) subject to a perceived-integrity constraint.” That constraint is belief-mediated and not directly estimable from points alone.

The clock metaphor sharpens the trap. \(\tau\) is a perceived clock: it tells fans how long the league appears undecided. Postponing the clock extends suspense; advancing it accelerates separation. A league that advances the clock may appeal to loss-averse fans who prefer consequential late matches, but it risks losing neutral fans who value uncertainty. A league that postpones the clock may appeal to mid-table fans but risks late-season stakeless matches if the underlying hierarchy eventually asserts itself. The paper captures this tension with the maxmin design and notes that late matches “could become stakeless and have less impact on the standings” [PAGE 18]. The recursive theory-of-mind prediction is conditional: if fans believe the schedule is fair, delaying \(\tau\) raises engagement; if fans believe the delay is engineered, the same schedule lowers trust. The observable difference is not in \(\tau\) alone but in attendance, viewership, and public criticism across multiple weeks.

A second-order effect is team behavior. Coaches and players know the schedule and may adjust effort or rotation based on perceived stakes. If the optimizer creates a early stretch of balanced-looking matches but later creates stakeless games, teams with no championship or relegation incentive may reduce effort. The paper cites the risk that matches become “stakeless” and threaten fairness [PAGE 1]. That is a recursive failure: the schedule changes beliefs, beliefs change effort, and effort changes the very match outcomes that the null model treats as fixed. The \(\tau\) estimate is therefore valid only under a fixed-effort assumption. In a multi-week deployment, effort responses can invalidate the ex ante optimization.

The clock also interacts with crisis habit regression. When a weather or travel crisis compresses the calendar, organizers revert to ad hoc rescheduling. That raises the variance of observed \(\tau\) and makes \(\hat\tau\) more valuable as a diagnostic. But if the crisis is visible to fans, a sudden schedule change may be interpreted as manipulation rather than necessity. The league must therefore communicate the constraint set, not just the optimized schedule. The recursive recommendation is transparency: publish the physical, travel, and broadcast constraints; show that the schedule is feasible; and avoid claiming that \(\tau\) measures true balance.

<CROSS_LAYER_VETO_ADJUDICATION>
The \(\tau\)-optimizer is a scalar objective on points and schedule. It has no internal representation of recovery, mechanical load, travel, heat, wind, or lightning. Cross-layer vetoes must therefore be imposed as hard feasibility constraints before optimization. Let \(\mathcal S\) be the set of schedules satisfying the paper’s DRR constraints [PAGE 13]. For team \(i\), let \(t_{i,r}\) be the start time of its \(r\)-th match in hours. Define the minimum recovery interval
\[
R_i(S)=\min_r\left(t_{i,r+1}-t_{i,r}\right)\quad [\text{hours}].
\]
A physical veto applies if \(R_i(S)\lt H_{\mathrm{req}}\), where \(H_{\mathrm{req}}\) is a sport- and league-specific recovery threshold in hours. Similarly, let \(D_i(S)\) be cumulative travel distance in km and \(Z_i(S)\) the maximum time-zone shift in hours. A travel veto applies if \(D_i(S)\gt D_{\max}\) or \(Z_i(S)\gt Z_{\max}\). These are not ratios; they are measured quantities with explicit units and policy thresholds.

For biomechanical load, let \(L_i(S)\) be cumulative external mechanical work in joules, or cumulative high-speed running distance in metres, or peak acceleration in \(\mathrm{m\,s^{-2}}\), depending on the validated monitoring system. A biomechanical veto applies if
\[
L_i(S)\gt L_{\max}\quad \text{or}\quad A_i(S)\gt A_{\max},
\]
where \(L_{\max}\) and \(A_{\max}\) are pre-registered, sport-specific safety thresholds. For weather, let \(W_i(S)\) be the wet-bulb globe temperature in \(^\circ\mathrm{C}\), \(v_i(S)\) wind speed in \(\mathrm{m\,s^{-1}}\), \(p_i(S)\) precipitation in \(\mathrm{mm\,h^{-1}}\), and \(d_i(S)\) lightning distance in km at the scheduled venue and time. A weather veto applies if \(W_i(S)\gt W_{\max}\), \(v_i(S)\gt v_{\max}\), \(p_i(S)\gt p_{\max}\), or \(d_i(S)\lt d_{\min}\).

The adjudication set is
\[
\mathcal S_{\mathrm{adm}}=\{S\in\mathcal S:\ C_{\mathrm{phys}}(S)=1,\ C_{\mathrm{bio}}(S)=1,\ C_{\mathrm{weather}}(S)=1\},
\]
where each \(C\) is a binary indicator. The proof sketch is straightforward: if \(S^*\notin\mathcal S_{\mathrm{adm}}\), then \(S^*\) is either impossible to play as scheduled or changes the physical conditions under which the fixed match outcomes \(M_0\) were generated. In either case, the null-model probabilities \(P_h,P_d,P_a\) and the points \(X_{i,t}(S^*)\) are no longer identified by the observed data. The estimated \(\tau(S^*)\) is a counterfactual outside the model’s support. The optimizer must be rerun on \(\mathcal S_{\mathrm{adm}}\), or the schedule must be rejected. This is a veto proof, not a soft penalty: a penalty could trade safety for perceived balance, which is inadmissible.

A concrete example: a maximizer might assign the strongest team to host the weakest team early to equalize win probabilities, but if that assignment forces the weakest team into a 36-hour turnaround after a 2,000 km trip, the physical veto fires. Another: a maximizer might schedule outdoor matches in a heat wave because the points-table variance would look balanced on paper, but if WBGT exceeds the venue policy, the weather veto fires. Another: a maximizer might concentrate high-intensity matches for a key player because the rank-weight matching likes the pairing, but if cumulative high-speed distance exceeds the validated threshold, the biomechanical veto fires. The cross-layer rule is lexicographic: feasibility first, then \(\tau\).

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Recovery and travel veto. The iMWM maximizer proposes an early block pairing top-ranked teams with bottom-ranked teams and flipping home status to equalize win probabilities. The schedule satisfies the paper’s DRR constraints but forces one team into \(R_i=36\) hours between matches and a 7-hour time-zone shift. The RLVR reward \(\Delta\tau\%\) is positive in the paper’s model, but the physical veto fires. Prediction if the veto is ignored: the team’s performance declines, match outcomes are no longer exchangeable with \(M_0\), and the observed \(\mathcal V_t\) rises for non-skill reasons; \(\tau\) is biased downward and the perceived-balance gain is not identified. Prediction if the veto is applied: the rerun schedule may have a smaller \(\tau\) gain, but the gain is measurable under stable recovery. Verification: recovery hours from match logs, travel distance from flight/ground records, time-zone data, and injury/withdrawal reports.

Scenario 2: Weather veto. An outdoor league applies the maximizer to a summer block. The schedule is feasible in the paper’s tensor, but the venue forecast exceeds the league’s WBGT policy, or lightning is within the minimum distance. The weather veto fires. Prediction if ignored: match postponement, shortened play, or reduced intensity changes \(P_h,P_d,P_a\); the null model is misspecified; \(\tau\) comparisons across seasons are invalid. Prediction if applied: the optimizer is rerun on indoor or cooler-venue assignments; the \(\tau\) estimate remains comparable because the environmental conditions are within policy. Verification: venue weather-station records for WBGT, wind, precipitation, and lightning distance; match logs for postponement or format change.

Scenario 3: Biomechanical-load veto. The maximizer creates a repeated sequence of high-intensity matches for a small set of key players because the squared-rank weighting concentrates strong-weak pairings. The schedule passes the DRR constraints but exceeds a pre-registered cumulative load threshold \(L_{\max}\) or peak acceleration threshold \(A_{\max}\). The biomechanical veto fires. Prediction if ignored: late-season injury incidence rises, player availability falls, and \(\tau\) diverges early for reasons unrelated to skill; the perceived-balance improvement is confounded. Prediction if applied: the schedule may sacrifice some \(\tau\%\) gain, but the remaining gain is attributable to schedule order rather than load collapse. Verification: GPS or local positioning system load data in metres and \(\mathrm{m\,s^{-2}}\), medical injury records, and availability logs.

A fourth, softer counterfactual is integrity veto. If the maximizer’s rank input is the oracle final ranking, the RLVR reward is leakage-contaminated. The verifiable prediction is that out-of-sample seasons will show a smaller success rate than the oracle table; the paper’s own “yesterday” results, with 64.3% success in the unmirrored case [PAGE 17], support this direction. Verification: pre-register the rank model, hide final rankings, and compare predicted versus realized \(\tau\%\) on held-out seasons. In all four cases, the veto rule is the same: no schedule is admissible if its reward depends on violating a measured safety, environmental, or leakage constraint.