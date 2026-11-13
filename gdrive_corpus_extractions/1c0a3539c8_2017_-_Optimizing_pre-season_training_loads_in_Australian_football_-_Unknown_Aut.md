---
source: "2017 - Optimizing pre-season training loads in Australian football - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2017"
pages: 1
model: deepseek/deepseek-v4.1-flash-1017
words: 8470
---

<NATIVE_REASONING>
We need answer to user. Need follow system? User asks with source PDF pages 1. Need provide structured XML sections exact. Need no betting lines. Need >=1000 words depth. Need formal LaTeX, units, page citations, verbatim quotes. Need cite [PAGE 1] markers and exact quotes. Need analyze paper. It is a conference poster? Source text is one page. Need produce THINK_TRACE >=400 words, all sections. Need be careful: source has typos/formulas mangled. Need reconstruct formal operators/equations. Need units. Need assumptions. Exact singularity/breakdown regimes. Need ret causal genealogy. Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Cross layer veto adjudication: physical/biomechanical/weather veto proof. RLVR counterfactual vetoes: 3 verifiable veto scenarios + predictions. No betting. This seems maybe a meta prompt for sports research. Need answer sophisticated. Need cite page marker. Need not mention odds etc. We can mention "no betting line" not necessary. Need ensure no forbidden betting content.

Need parse source. Need include all exact sections. Must be >=1000 words total. Desired oververbosity 5. Need write XML tags exactly. Need maybe use <THINK_TRACE> etc. Need include deep multi-hop derivation & gray-zone audit >=400 words. Need include source operators and equations. Need mention source is a one-page abstract/poster; no full methods details. Need cite [PAGE 1]. Need quote exact phrases. Need perhaps quote: "Optimisation was performed using the MATLAB software package"; "Constrained nonlinear solver (fmincon)"; "Sequential quadratic programming algorithm (SQP)"; "Default step and function convergence tolerances (10-6)"; "0 ≤𝑤𝑖≤50,000"; "0.6 < 𝑟𝑖< 1.3"; "𝐶𝑖< 73,721"; "𝑘1 = 1, 𝑘2 = 2, 𝑡1 = 45, 𝑡2 = 11"; "𝜇, 𝜎𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒= 3 km, 1 km" etc. Need reproduce formula precisely. Since text mangled: acute chronic workload ratio formula:

r_i = (sum_{j=i-6}^{i-1} w_j / 6) / (sum_{j=i-24}^{i-1} w_j / 24)

0.6 < r_i < 1.3. There may be mismatch: acute is 7-day? If i-6 to i-1 inclusive = 6 days? Actually inclusive count 6: i-6,...,i-1 is 6 values? Let's count: i-6, i-5, i-4, i-3, i-2, i-1 = 6. Chronic i-24 to i-1 = 24 values. Usually acute 7 days, but formula says 6? They wrote j=i-6 to i-1 over 6. Need preserve as source. However source text has "j=i−6 i−1 w_j /6" and "j=i−24 i−1 w_j /24". It is 6-day acute numerator. Need note possible source typographical ambiguity; if intended acute 7-day, denominator should be 7 and j=i−7. But we cite verbatim? We can quote exact with mangled? Better state "as printed". Need mention this is gray-zone: acute window is 6-day by formula but paper likely uses acute:chronic ratio. Do not invent. Constraint daily max: 0 ≤ w_i ≤ 50,000. Units? Training distance or sprint distance; w_i training load on day i. If distance, units m presumably. 50,000 likely m (50 km) for distance, but for sprint could be m. They considered total training distance and sprint running distance. Need say units are ambiguous in abstract: daily cap 50,000 likely metres because totals in km and means 3 km/1 km for distance, 30 m/10 m sprint. But source doesn't explicitly state units. We can mark ambiguity. Total training distance objective f_A sum w_i. If w_i in m, f_A m; if km, km. Since w_i max 50,000 and totals 314–411 km: 50,000 m = 50 km, plausible. For sprint, 50,000 m sprint daily is unlikely. Hmm they considered total distance and sprint distance separately, but daily max 50,000 might be only for distance? Need note model likely applied separately with same generic bound? Source: "We considered total training distance and sprint running distance." Constraint 1 "Daily maximum and minimum: 0 ≤ w_i ≤50,000". If sprint distance, 50 km sprint impossible. This is gray-zone. Maybe the poster omits scaling per metric; could be typo or generic. Need flag.

Cumulative workload rolling 21 days C_i = sum_{j=i-21}^{i-1} w_j < 73,721. Count? i-21 to i-1 inclusive = 21 values? Let's count: i-21 through i-1: 21 values? For i-21,...,i-1: difference (i-1)-(i-21)+1=21. Yes. So 21-day rolling sum. Bound 73,721 (units m? if distance). This number maybe from Colby 2014. Need mention inequality strict. Need note no upper bound on i? Decision variables i=1..125 days, but sums at early i require negative indices. Need boundary conditions? Source doesn't specify; gray-zone: initial off-season chronic loads 14 km/week distance and 150 m/week SD (sprint distance). How used to initialize? They likely used for chronic load baseline for ratio before day 1. But not explicit. Need mention need padding pre-study values to compute r_i and C_i for i near start.

Objective B Banister impulse-response model:
p_i = p_0 + k1 sum_{j=1}^{i-1} w_j e^{-(i-j)/t1} - k2 sum_{j=1}^{i-1} w_j e^{-(i-j)/t2}
with k1=1, k2=2, t1=45, t2=11. f_B(w)=p_125. Units: p_i arbitrary performance units; w_j training load; t1,t2 days; k1,k2 units? If p in performance units and w in m, k coefficients have performance per (m·day?) Wait discrete convolution. The exponent dimensionless. Sum w_j over days; k1 has performance units per load. Since w is distance (m), k1 units p/m. But because exponentials not normalized? In Banister model w often "training impulse" arbitrary units. The source uses w_i training load and distance. Need state as abstract does not give p0 or units; coefficients not dimensionally closed unless p0, k1, k2 are given in compatible arbitrary units. We can mention t1=45 d, t2=11 d. Positive term fitness, negative term fatigue.

Objective A: maximize sum i=1 to 125 w_i. Objective B: maximize p_125. Constraints. Optimizer: MATLAB fmincon SQP with tolerances 10^-6. Initialization random sampling from normal distributions: distance μ=3 km σ=1 km; sprint μ=30 m σ=10 m. Need mention variables possibly initial guesses, and normal can generate negative? Constraints clamp 0. Could be gray-zone.

Results: 20 simulated plans, convergence. Figure 2 optimal plans. Off-season chronic 14 km/week distance and 150 m/week SD. Comparable μ total distance 314–411 km & μ sprint 2.7–8.9 km. Increasing off-season chronic: ↑ safe training, ↑ projected performance. Objective A frequent moderate intensity; Objective B taper prior to competition, more variation, fatigue accumulation. Practical apps. Need include.

Need sections:

<THINK_TRACE> Deep multi-hop derivation & gray-zone audit >=400 words. Need write about problem as constrained optimal control / NLP. Derive from discrete-time. Need mention decision vector w ∈ R^125. Need objective A/B. Multi-hop: training load -> acute chronic ratio -> injury risk constraints -> optimization. Need audit gray zones: one-page source, formula ambiguities, units, window counts, missing initial conditions, strict vs non-strict inequalities, sprint vs distance scaling, p0/units, random init distributions possibly unconstrained, SQP local optima, no validation, no uncertainty quantification, "safe" is constraint not probabilistic, "performance" Banister linear model, no injury outcome model, off-season chronic baseline used not formal constraint. Need perhaps compute acute window count and chronic count. Need mention 125 days pre-season, first match day 125? Actually f_B=p_125; "Reach peak projected performance levels on day of first match"; p_i uses sum j=1 to i-1. So p_125 excludes day 125 load? If match day, training load on match day not counted? Could be taper. Need gray-zone. Constraint C_i uses j=i-21 to i-1 excludes current day. r_i also excludes current day, uses prior days. Objective sum includes all days. This means day 125 load contributes to f_A but not p_125 (since j=1..124). That is important. Need mention if i=125, p_125 includes w_1..w_124, not w_125. So objective B does not value final-day training except through constraints maybe not at all? It affects no future p. Thus optimizer may not care except f_A? Actually f_B excludes w_125, so w_125 unconstrained by acute/chronic? r_125 uses w_124...; w_125 doesn't affect any constraint except daily max? C_125 uses prior 21 days, not w_125. So w_125 entirely free in objective B, leading non-uniqueness. That's a gray-zone. Good. Also day 1: r_1 and C_1 require previous days not in decision set; need baseline. Off-season chronic loads given. Need mention.

Need include exact singularity/breakdown regimes. For this model, singularities: chronic denominator zero -> r_i undefined/infinite; logistic? No. Need say if sum chronic=0, r_i singular; if w_i all zero, objective A=0 and Banister p_i=p0. If chronic baseline too low, r_i >1.3 or <0.6 constraints infeasible. If cumulative bound 73,721 less than minimum required? Strict inequalities and SQP tolerances can yield feasibility at boundary. If t1 or t2 zero? t1,t2 positive fixed; if zero, exponential undefined/infinite. If k2/t2 large, fatigue dominant; if k1=0 no fitness. If p0 unspecified. In optimization, breakdown if objective B unbounded? With bounded w and daily cap, bounded. But if constraints absent, maximize sum up to 6.25e6 m. With ratio constraints, bounded. Need mention chronic denominator near zero causes numerical overflow. Strict inequalities in fmincon: must implement as non-strict with margin; otherwise boundary violation. SQP convergence to local minima due nonconvex? Objective B linear in w (since p_i linear) with linear? Actually p_i linear in w; constraints r_i nonlinear ratio; C linear. Objective A linear. So NLP has linear objective, linear cumulative, nonlinear ratio constraints. Ratio constraints are linear-fractional? For each i, ratio of two linear forms bounded => two linear inequalities if chronic positive (0.6*S24 < S6 <1.3*S24) but denominators sign matters. So actually can transform to linear constraints if S24>0. But SQP. Need mention. Objective B linear too. So global optimum could be LP? But ratio constraints linearized? Because S6/S24 within bounds => linear inequalities. Nonconvex only due strict and denominator sign. If chronic positive, feasible set convex polytope. But source used fmincon SQP. Gray-zone: "constrained nonlinear solver" despite linear-fractional. Need mention.

Need include "source operators and equations" formal LaTeX. Need cite [PAGE 1] markers and exact quotes. We can quote exact with typos? Need preserve source. Use blockquote maybe. Need not overdo. Need include assumptions, units, exact singularity/breakdown regimes. Need mention exact page marker [PAGE 1] for every quote.

Need <RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps. Need write about lineage: Banister 1975 systems model, impulse-response; Fitz-Clarke/Morton 1990 optimization; Colby 2014 cumulative running loads 3-4 weeks; Gabbett 2016 acute:chronic ratio; Carey 2016; IOC consensus Soligard 2016; Drew & Finch 2016; Borresen & Lambert 2009; Hellard 2006 limitations; Malone 2016 high chronic loads; Akenhead/Nassis monitoring; Schaefer 2015 training plan evolution; Wisbey 2015 GPS. Multi-week traps: acute:chronic ratio using 6/24 days? Usually 7/28; cumulative 21 days; off-season chronic baseline 14 km/wk and 150 m/wk; if chronic load increases, ratio constraints allow more acute load; if baseline low, false "safe" volume limited. Trap: optimizing safe volume under ratio may produce chronic underload or monotony; objective A frequent moderate can be monotonous; objective B taper; overfitting to Banister parameters; using fixed k/t from Morton; ignore injury lag, tissue adaptation, biomechanics, weather. Need mention "retrocausal" maybe historical decisions create future constraints; multi-week traps include: off-season chronic load determines future permissible acute load, so low off-season loads may "retrocausally" cap in-season performance; high chronic loads enable higher safe training but may increase injury if too high. Need not be weird. Need include exact "Increasing the off-season chronic training loads (Fig 1): ↑ amounts of ‘safe’ training ↑projected performance levels" [PAGE 1]. Good.

Need <RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Need interpret. This is likely asking about strategic decision-making? Need adapt to training plan: crisis habit regression = coaches/athletes revert to familiar high-load or low-load habits under injury crisis; counter-trap = overcorrecting by suppressing all load, causing detraining; clock = time-to-first-match and taper timing. Need include recursive theory of mind: coach models athlete's response, athlete models coach expectations, staff model each other's risk tolerance. Need discuss how optimization framework counters subjective biases but can create automation bias. Need mention Objective A vs B: crisis habit regression (if injury occurs, revert to high chronic loads? or excessive caution); counter-trap (if acute ratio near 1.3, reduce too much causing <0.6 and underloading; or chasing performance with high load then taper). Clock: 125-day pre-season, day 125 first match; p_125 peak; taper in Objective B; 21-day rolling cumulative; 45/11 day time constants. Need formulate recursive ToM as nested optimization: coach chooses w; athlete's injury/performance response; medical staff constraints; coach anticipates staff veto; staff anticipates coach. Need mention multi-agent: athlete's adherence, coach's objective. Need exact "Objective A: Prescribed frequent, moderate intensity training" and "Objective B: Plans included a taper prior to competition" [PAGE 1]. Good.

Need <CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need include physical (tissue load tolerance, cumulative distance, sprint distance), biomechanical (max velocity running, accelerometer/GPS, high-speed running, asymmetries, fatigue), weather (heat, rain, surface, travel? Not in source but cross-layer veto). Need "veto proof" means constraints that veto plans if unsafe. Need formalize. Need cite source: "High cumulative running loads (3-4 weeks) (Colby 2014)" [PAGE 1]; "High and low relative training loads (Gabbett 2016, Carey 2016)" [PAGE 1]; "Daily maximum and minimum: 0 ≤𝑤𝑖≤50,000" [PAGE 1]; "Maximum cumulative workload (rolling 21 days): ... 𝐶𝑖< 73,721" [PAGE 1]; "0.6 < 𝑟𝑖< 1.3" [PAGE 1]. Need add external cross-layer vetoes not in source? We can say source lacks explicit biomechanical/weather variables; to adjudicate, treat as hard veto constraints outside optimization: if wet/heat, reduce sprint volume or move session; if biomechanical asymmetry, cap max velocity; if tissue soreness, veto. Need not invent fake equations? Need formal LaTeX. We can define veto function V = 1 if unsafe. But should avoid toy equations? Need formal equations with units. We can state "not in source; proposed adjudication layer" and define indicator. Need be careful: user demands formal LaTeX, units, assumptions, breakdown. We can include equations for veto thresholds as generic variables? It says zero toy equations, never invent fake ratios. We can state "No source values for weather/biomechanical thresholds; thus no numeric threshold can be claimed." For adjudication, use hard constraints as indicator not fake ratio. Example:
\[
\mathcal{V}_{\mathrm{phys}}(w)=\mathbf{1}\{\exists i: C_i \ge 73{,}721 \ \mathrm{m}\ \text{or}\ r_i\notin(0.6,1.3)\}
\]
But that's just source constraints. For weather, if no source, define \(\mathcal{V}_{\mathrm{env}}=1\) if WBGT exceeds a governing policy; no numeric value in source. Need not invent. Use units: WBGT °C, surface hardness, precipitation mm/h. But thresholds depend on policy. Could say "thresholds must be supplied by medical/league policy; source gives none." That satisfies. Need "veto proof" maybe show if any veto true, plan is inadmissible regardless objective. Need mention physical proof: because constraints are hard, any plan violating C_i or r_i is inadmissible; Objective A/B cannot override. But source uses strict inequalities; numerical tolerance can violate by 10^-6, so implement margin δ. Need mention breakdown: if chronic load zero denominator, ratio veto undefined, treat as veto unless baseline established. Weather veto cannot be proved from source. Good.

Need <RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need define RLVR? Reinforcement Learning with Verifiable Rewards? We need 3 verifiable counterfactual veto scenarios. Need likely "veto scenarios" for plan: If certain condition, veto. Need predictions. Need make them verifiable by checking plan against constraints. Need include exact calculations. Need avoid betting. Need maybe:
1. Chronic denominator zero/insufficient baseline: Counterfactual: set off-season chronic distance = 0 instead of 14 km/week. Then r_i undefined for early days; strict bound cannot be computed; optimizer cannot certify feasibility. Prediction: the plan cannot satisfy r_i constraint without baseline padding; any reported plan must either impute baseline or use margin. Veto if baseline< required? Need maybe compute minimum chronic for r_i>0.6? Actually if chronic 0, singular. Veto.
2. Daily cap violation for sprint: Counterfactual: apply same 50,000 m cap to sprint distance. Since source's sprint initializer μ=30 m σ=10 m and reported sprint totals 2.7–8.9 km over 125 days, a single-day 50 km cap is 50000 m; not binding for realistic sprint. But if w_i units misapplied (km vs m), 50,000 km cap would be absurd. Prediction: if w_i is in km, cap is 50,000 km/day, not 50 km, and totals 314–411 km are below daily cap? Actually no. We can make veto: If \(w_i\) is treated as km for total distance, daily cap 50,000 km and cumulative 73,721 km are non-binding; objective A becomes unbounded? Wait w_i bounded by 50,000 km/day, total up to 6.25 million km, but ratio constraints still bind. But reported totals 314–411 km would not hit daily cap. The model would not match. Prediction: verify units by checking reported μ_total 314–411 km: if w_i in m, sum w_i ≈314,000–411,000 m; if km, sum w_i≈314–411, so daily cap 50,000 km is 121–159× total volume, nonbinding. Veto if units not resolved. Good verifiable.
3. Objective B final-day non-uniqueness: Counterfactual: set w_125 to 0 vs 50,000 m. Since p_125 = p0 + k1 sum_{j=1}^{124} w_j e^{-(125-j)/t1} - k2 sum_{j=1}^{124} w_j e^{-(125-j)/t2}, w_125 does not appear. Prediction: f_B unchanged; only f_A changes. Therefore any objective-B-only "optimal" plan is non-unique on day 125. Veto claims of unique taper if w_125 not regularized. Need include exact equation. Good.
Could also:
4. Ratio window count: if acute uses 6-day but intended 7-day, ratio differs. Counterfactual: add one day to numerator window; prediction: r_i changes by factor depending on w_{i-7}; if w_{i-7} high, crossing 1.3. Veto if source ambiguity unresolved. Need 3 scenarios. We can choose best three. Need "RLVR" maybe verifiable rewards: each scenario has an observable check. Need include predictions.

Need ensure no betting. Fine.

Need total word count >=1000. We can write ~2500-3500 words. Need not too huge but enough. Need exact XML sections. Need include [PAGE 1] markers. Need maybe use "SOURCE PAGE 1" citations. Need not cite page numbers beyond 1. All quotes from [PAGE 1].

Need think about formatting. We can use XML tags exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need include exact quote markers. For quotes, use quotation marks and [PAGE 1]. Need be verbatim. Source has weird characters. We can quote plain text. E.g. "Optimisation was performed using the MATLAB software package" [PAGE 1]. "Constrained nonlinear solver (fmincon)" [PAGE 1]. "Sequential quadratic programming algorithm (SQP)" [PAGE 1]. "Default step and function convergence tolerances (10-6)" [PAGE 1]. "0 ≤𝑤𝑖≤50,000" [PAGE 1]. "0.6 < 𝑟𝑖< 1.3" [PAGE 1]. "𝐶𝑖< 73,721" [PAGE 1]. "𝑘1 = 1, 𝑘2 = 2, 𝑡1 = 45, 𝑡2 = 11" [PAGE 1]. "𝜇, 𝜎𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒= 3 km, 1 km" [PAGE 1]. "𝜇, 𝜎𝑠𝑝𝑟𝑖𝑛𝑡= 30 m, 10 m" [PAGE 1]. "off-season chronic loads: 14km/week distance and 150m/week SD" [PAGE 1]. "𝜇𝑡𝑜𝑡𝑎𝑙𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒= 314 −411 km & 𝜇𝑠𝑝𝑟𝑖𝑛𝑡𝑑𝑖𝑠𝑡𝑎𝑛𝑐𝑒= 2.7 −8.9 km" [PAGE 1]. "Objective A: Prescribed frequent, moderate intensity training" [PAGE 1]. "Objective B: Plans included a taper prior to competition" [PAGE 1]. Need quote exactly? The source says "• Objective A: • Prescribed frequent, moderate intensity training (Fig 2a,c)" so quote "Prescribed frequent, moderate intensity training" [PAGE 1]. "Plans included a taper prior to competition" [PAGE 1]. "Favoured more variation in daily training loads" [PAGE 1]. "Gives consideration to fatigue accumulation" [PAGE 1]. "Provides an adaptable framework for physical preparation staff to quickly create training plans that" [PAGE 1]? Maybe not.

Need reconstruct equations in LaTeX. Need be careful with indices. Use \(i\in\{1,\ldots,125\}\). Decision variables \(w_i\). Objective A \(f_A(\mathbf w)=\sum_{i=1}^{125}w_i\). Objective B \(f_B(\mathbf w)=p_{125}\). Banister:
\[
p_i=p_0+k_1\sum_{j=1}^{i-1}w_j e^{-(i-j)/t_1}-k_2\sum_{j=1}^{i-1}w_j e^{-(i-j)/t_2},
\]
with \(k_1=1, k_2=2, t_1=45, t_2=11\). Need note source uses \(e^{-(i-j)\over t_1}\) maybe. Good.

Ratio:
\[
r_i=\frac{\frac{1}{6}\sum_{j=i-6}^{i-1}w_j}{\frac{1}{24}\sum_{j=i-24}^{i-1}w_j},\quad 0.6<r_i<1.3.
\]
Need mention if denominator positive. Actually source doesn't state denominator positive, but loads nonnegative and daily max >0; chronic sum can be zero if no load. Need assume positive baseline. Good.

Cumulative:
\[
C_i=\sum_{j=i-21}^{i-1}w_j<73{,}721.
\]
Units? If \(w_j\) in metres, \(C_i\) in metres; 73,721 m. If \(w_j\) in km, \(C_i\) in km; but reported totals suggest metres. We can say "assuming \(w_i\) in metres for total distance; source does not state units explicitly." But source says μ distance 3 km σ 1 km, sprint 30 m 10 m, daily max 50,000. Hmm initializer in km for distance and m for sprint, but decision variable bound 50,000. If distance initializer in km, w_i maybe km? But daily max 50,000 km? No. Could be initializer in m: 3 km = 3000 m, σ=1000 m; sprint 30 m, σ=10 m. The text says "3 km, 1 km" but maybe they mean μ=3 km and σ=1 km for distance; for sprint μ=30 m σ=10 m. If w_i in m, initializer should be 3000 m, 1000 m. They wrote km. So units mismatch. Need flag. In equations, use generic "load units" and assume metres where needed. Good.

Need "exact singularity/breakdown regimes": 
- \(D_i=\frac{1}{24}\sum_{j=i-24}^{i-1}w_j=0\): r_i undefined (0/0) or infinite (positive/0). Need pre-sample baseline. If all zero, no r_i. 
- \(D_i<0\) impossible if w≥0 but if negative due numerical, ratio sign flips; breakdown. 
- strict inequalities \(0.6<r_i<1.3\), \(C_i<73,721\): fmincon with tolerance 10^-6 can converge to boundary; need margin. 
- \(t_1,t_2>0\); if zero or negative, exponential singular/explosive. Fixed positive.
- \(p_0\) unspecified; f_B can be shifted by arbitrary constant, doesn't affect argmax but affects reported predicted performance. If p0 missing, absolute performance predictions not identifiable.
- \(f_B\) excludes \(w_{125}\), non-unique final day.
- \(r_i\) excludes current day; current day load can spike after ratio check? Actually ratio for day i uses prior days, so current day's load not in r_i; but it affects future r. The constraint doesn't bound day i relative to day i? It bounds day i based on prior. So a single day load can be high (up to 50,000) if prior chronic high, and ratio for next day includes it. Need mention.
- \(C_i\) excludes current day; so current day can push cumulative over bound after the fact? It checks previous 21 days, not including current. This is a gray-zone: a 50,000 m day could make next day's C exceed. But next day's C includes it; if plan has next day, constraint catches. On final day no future C. Good.
- Objective A maximizing sum under cumulative rolling 21 days and daily cap and ratio. Since C_i bound is 73,721 m over 21 days, max total over 125 days roughly 5.95×73,721? Actually rolling 21-day bound limits average to ~3510 m/day, total ~438,800 m, close to reported 314–411 km. Nice! Wait compute 73,721/21=3510.5 m/day; over 125 days = 438,815 m = 438.8 km. Reported 314–411 km. This is good consistency. Need mention: the cumulative bound is a major volume governor. 73,721 m over 21 days is 3,510.5 m/day average; over 125 days max ~438.8 km, consistent with 314–411 km. Nice. This is a multi-hop derivation. Good. Need include. If w_i in metres. This helps unit audit. We can calculate. 73,721 m / 21 d = 3,510.52 m/d; ×125 d = 438,815 m = 438.8 km. Reported 314–411 km < 438.8 km, plausible. If w_i in km, 73,721 km /21 ×125 = 438,815 km, absurd vs 314–411 km. So units must be metres. Great. Need include in THINK_TRACE and source equations. Excellent.

Need maybe compute acute ratio: if chronic avg = 14 km/week = 2 km/day = 2000 m/day. Acute must be between 0.6*2000=1200 m/day and 1.3*2000=2600 m/day initially. With daily max 50,000. Off-season chronic 14 km/week = 2,000 m/day. For sprint 150 m/week = 21.43 m/day; acute between 12.86 and 27.86 m/day. But initializer sprint μ=30 m/day? Hmm not matching. Need mention off-season chronic 150 m/week = 21.4 m/day; initializer sprint μ=30 m/day (if per day) would exceed 1.3? 30/21.4=1.4; but ratio uses 6/24 averages. Could be gray-zone. Maybe initializer is daily training load random, not chronic. Need maybe not compute. But can mention.

Need evaluate objective A "safe" training volume: The cumulative 21-day bound of 73,721 m implies max average ~3.51 km/day; total max ~438.8 km over 125 days. The reported 314–411 km is 71.5–93.7% of that. Need compute: 314/438.8=0.715; 411/438.8=0.936. Good.

Need include "Figure 1/2" results. Need mention "20 simulated pre-season training plans" [PAGE 1]. Good.

Need "retrocausal genealogy" historical lineage: Banister 1975 systems model; Fitz-Clarke 1991 optimizing performance by influence curves; Morton 1990 modeling human performance; Colby 2014 accelerometer/GPS; Gabbett 2016 training-injury prevention paradox; Carey 2016 acute:chronic; Soligard 2016 IOC consensus; Drew & Finch 2016 systematic review; Hellard 2006 limitations; Malone 2016 high chronic loads; Wisbey 2015 GPS; Schaefer 2015 training plan evolution. Need maybe discuss "retrocausal" as later constraints shape earlier loads: off-season chronic loads determine admissible acute loads, so future match/performance peak determines earlier taper. Multi-week traps: (1) chasing high chronic load early causes cumulative 21-day violation; (2) low chronic baseline makes r_i>1.3 if acute load normal; (3) objective A monotony; (4) objective B taper with fatigue time constant 11 days; (5) fixed Banister parameters from Morton 1990 not individualized; (6) injury risk associations are observational and not causal; (7) ratio using rolling averages can mask day-to-day spikes; (8) increasing off-season chronic load increases safe volume but may increase injury risk if too high. Need mention "High and low relative training loads" [PAGE 1] both risky. Good.

Need "recursive theory of mind": Need maybe frame as "coach's model of athlete's model of coach". Use nested constraints. Need mention "crisis habit regression": under injury crisis, coach may revert to high-load "harder" habit (Gabbett paradox) or low-load "protect" habit. Counter-trap: optimization may exploit ratio by keeping chronic high to permit acute high, but this is a trap; or if athlete reports fatigue, coach reduces load, athlete hides fatigue to avoid reduction, leading to underreporting. Clock: 125 days, taper, 21-day cumulative, 45/11 day constants. Need mention "subjective biases" from source: "Are not exposed to subjective biases" [PAGE 1]. But automation can introduce model bias. Need mention recursive ToM with medical staff veto and coach objectives. Good.

Need "cross-layer veto adjudication": Need provide a proof-like structure:
- Define admissible set \(\mathcal{A} = \{\mathbf w: 0\le w_i\le 50,000; 0.6<r_i<1.3; C_i<73,721\}\).
- Any optimizer result \(\mathbf w^*\) must be in \(\mathcal A\); if not, veto. 
- Physical layer: cumulative load C_i and ratio r_i are hard vetoes from source. 
- Biomechanical layer: source mentions "total training distance and sprint running distance" [PAGE 1] and "High cumulative running loads (3-4 weeks)" [PAGE 1]; but no explicit acceleration, asymmetry, or max-velocity thresholds. So any biomechanical veto must be external; cannot be numerically proven from source. We can say veto if high-speed sprint load exceeds clinical threshold; no source threshold. 
- Weather layer: no weather variables in source; cannot prove weather veto. Need require external policy. 
- Adjudication rule: if any layer veto true, plan rejected; if layers conflict, hard medical veto > performance objective. Need formal:
\[
\text{Admit}(\mathbf w)=\prod_{\ell\in\{\text{phys},\text{bio},\text{env}\}}(1-\mathcal V_\ell(\mathbf w))
\]
with \(\mathcal V_\ell\in\{0,1\}\). But this is a toy equation? It's an indicator product, formal. Could be acceptable. Need not invent ratios. 
- Breakdown: if veto layer lacks data, default to veto for high-consequence? Or "unknown" state. Need mention. 
- Weather thresholds require WBGT, precipitation, surface; no source values. 
Need include exact source quotes. Good.

Need "RLVR counterfactual vetoes": Need make 3 scenarios with predictions. Let's craft detailed:

Scenario 1: Zero chronic denominator. Counterfactual: replace off-season chronic with \(w_j=0\) for all pre-day-1 padding or set \(D_i=0\). Check: \(r_i = S_6/6 / (S_{24}/24)\). If \(D_i=0\) and \(S_6>0\), r_i=∞; if both zero, 0/0 undefined. Prediction: no plan can satisfy \(0.6<r_i<1.3\) for that i; any optimizer output using fmincon may report constraint violation or NaN. Veto: plan inadmissible unless baseline imputation is documented. Verify by recomputing r_i with/without baseline. Good.

Scenario 2: Unit mismatch for daily cap. Counterfactual: interpret \(w_i\) in km rather than m for total distance. Check: \(C_i<73,721\) with reported total 314–411 km. If w_i in km, 21-day cumulative bound is 73,721 km, and 125-day bound max 438,815 km; reported total is 0.07–0.09% of bound? Wait 314/438815=0.000715 =0.0715%, not 71.5%. Actually if w_i in km, C bound 73,721 km, total max 438,815 km; reported 314–411 km is 0.07–0.09%. If w_i in m, bound 73,721 m, total max 438.8 km; reported 314–411 km is 71.5–93.7%. Thus the m interpretation is consistent. Prediction: if model is run with km, the cumulative constraint is effectively nonbinding and optimal f_A would be much larger than reported; if run with m, reported totals fall under bound. Veto any plan claiming consistency without unit declaration. Good. Need include exact calculations.

Scenario 3: Final-day objective B non-identifiability. Counterfactual: set \(w_{125}=0\) versus \(w_{125}=50,000\) m, all other \(w_j\) fixed. Check \(p_{125}\): sum j=1 to 124 only. Prediction: \(f_B\) identical to machine precision; \(f_A\) differs by 50,000 m. Therefore objective B alone cannot determine day 125; if paper reports unique optimal plan under B, must have omitted regularization or figure display. Veto uniqueness claims unless \(w_{125}\) is externally fixed or constrained by next-match day. Good.

Could also scenario 4: strict inequality margin. But need 3. Maybe include 4? User says 3. We can include exactly 3 but maybe mention additional. Need "3 verifiable RLVR veto scenarios + predictions." We'll do 3 numbered.

Need ensure no "betting lines" words. Avoid "odds", "spread", "moneyline", "totals". We might use "total training distance" which contains "total" but not betting. That's okay? The invariant says never mention spreads, totals, moneylines, or odds. "total training distance" includes "total" but not betting total. Should be fine. But to be safe, maybe don't use "totals" as noun. We can say "aggregate training distance" instead of "total" sometimes. But source has "total training distance". We can quote. It's not betting. Fine.

Need answer as final only. Need not include analysis. We'll write final with XML sections. Need ensure >=1000 words. Let's draft with moderate detail. Need count roughly. Let's target ~2800 words. Need XML well-formed; use escaped ampersands? In XML, ampersand must be escaped as &amp; if inside text. We may use "and" instead. But source quotes include "&" in "314 −411 km &". In XML, raw & invalid. Need escape as &amp;. We can avoid raw & by using "and". But if quoting exact, "μ_totaldistance=314−411 km & μ_sprintdistance=2.7−8.9 km" contains &. Better escape &amp; or rephrase. Since output is XML-like, should be well-formed? The instruction gives tags. We should escape ampersands. Use &amp; in text. Also < and > inside equations? In XML text, < must be escaped unless in CDATA. But we are writing LaTeX with < and >. That would break XML. The prompt itself uses tags and expects LaTeX with < maybe. But if we want well-formed XML, need escape < as &lt; and > as &gt;. However many models output raw < in equations inside XML tags. The user likely expects sections but not strict XML parser. But to be safe? Hmm. The tags are XML-like, but content with \(0.6<r_i<1.3\) includes <. If parsed as XML, invalid. But typical LLM response not parsed strictly. The instruction says exact XML sections; maybe need valid XML? We can use &lt; and &gt; for inequalities in text. But LaTeX with &lt; looks ugly. Could use \(\lt\)? LaTeX doesn't have \lt maybe. We can write "less than" in prose and use \(0.6 < r_i < 1.3\) raw. It might be acceptable. But if strict XML, invalid. The prompt likely not machine parsing. We'll use raw < in LaTeX? Hmm.

Maybe use CDATA? Not requested. Simpler: use raw. Most answers in these tasks use raw < in equations inside XML tags. We'll do raw. But maybe escape ampersand in exact quote. We'll use "&amp;" for ampersand. For less-than in equations, raw. Fine.

Need include page citations [PAGE 1] after quotes. Need exact quote with source typos. We can quote "0 ≤𝑤𝑖≤50,000" [PAGE 1]. Fine.

Need write.

Let's outline final:

<THINK_TRACE>
Paragraph 1: Source is one-page abstract/poster; reconstruct optimization. Decision vector. Multi-hop: load -> rolling averages -> constraints -> objective. Derive unit consistency: C bound 73,721 m over 21 days gives 3,510.5 m/day, 438.8 km over 125 days, matching reported 314-411 km. Thus w_i in metres for distance. If km, inconsistency. Mention sprint separate.
Paragraph 2: Objective B linear in w and excludes w125; non-uniqueness; p0 missing; Banister parameters fixed; local solver. Ratio formula as printed uses 6-day numerator and 24-day denominator; possible typo vs 7-day acute. Need baseline for early i. Strict inequalities. Gray-zone audit: "safe" is constraint not probabilistic injury model; no validation; no weather/biomechanical; random normal init can produce negative; fixed model. 
Paragraph 3: Multi-hop derivation of taper: p_125 depends on w1..w124 with kernels e^{-(125-j)/45} and e^{-(125-j)/11}; fatigue kernel decays faster, so late loads penalized more? Actually at day 125, term for w_j: k1 e^{-(125-j)/45} - k2 e^{-(125-j)/11}. For a load at j, negative fatigue has exponent denominator 11 (decays faster? Wait e^{-Δt/11} decays faster than e^{-Δt/45} as Δt increases. For recent loads Δt small, fatigue big; for old loads Δt large, both decay but fatigue decays faster. So recent loads produce net negative? Let's check coefficient: k1 e^{-Δt/45} - k2 e^{-Δt/11}. At Δt=0: 1-2=-1 negative; at Δt=11: e^{-0.244}=0.783 - 2 e^{-1}=0.736 => 0.047 positive? Actually e^{-1}=0.368, 2*0.368=0.736, 0.783-0.736=0.047 positive. So recent loads within ~10 days negative; older loads positive. This induces taper. Good. Could include. Need maybe not too much. This is formal multi-hop. 
</THINK_TRACE>

Need be >=400 words. We'll make ~600.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Decision variables and constraints with LaTeX.
- Objective A/B.
- Optimizer.
- Initialization.
- Results.
- Units assumptions and singularities.
- Quotes with [PAGE 1].
Need not repeat too much. Include exact quotes.

<RETROCAUSAL_GENEALOGY> ~400 words.
<RECURSIVE_THEORY_OF_MIND> ~350 words.
<CROSS_LAYER_VETO_ADJUDICATION> ~400 words.
<RLVR_COUNTERFACTUAL_VETOES> ~500 words.

Total >1000.

Need ensure "formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes." We'll include units. For information/probability? Not relevant. We can mention no probability units in source; constraints deterministic. If "RLVR" maybe reward units? We can mention reward is binary veto (dimensionless). Good.

Need maybe define "SD" in source: "σ_distance" maybe standard deviation? Source says "SD under objective A" and "off-season chronic loads: 14km/week distance and 150m/week SD". SD likely sprint distance? Actually "SD" might be "sprint distance" (not standard deviation) because earlier "distance and sprint running distance"; in figure "SD" likely sprint distance. Need not confuse. In source: "μ, σ_distance=3 km, 1 km" and "μ, σ_sprint=30 m, 10 m". Later "distance under objective A, distance under objective B, SD under objective A and SD under objective B" where SD = sprint distance. "off-season chronic loads: 14km/week distance and 150m/week SD". Yes SD = sprint distance. Need note not standard deviation. Good.

Need mention "Figure 1: Convergence of 20 simulated pre-season training plans" [PAGE 1]. Good.

Potential issue: "0 ≤ w_i ≤ 50,000" for sprint distance: if w_i in m, 50 km sprint daily cap is not binding; if in m for total distance, 50 km daily cap also high but possible? Elite AFL daily total distance maybe 10-15 km; 50 km cap high. The cumulative 21-day bound is main. Good.

Need "exact singularity/breakdown regimes" include "if \(C_i=73,721\) exactly, strict inequality fails; with tolerance 10^-6 SQP may accept near-boundary." Good.

Need "cross-layer veto" maybe include "weather veto proof" with variables:
- WBGT \(T_{wbgt}\) in °C.
- precipitation \(P\) mm h\(^{-1}\).
- surface hardness \(H\) in gravities? Could be g. 
- no source thresholds. Use policy function \(V_{env}(t)=1\) if policy threshold exceeded. 
- biomechanical: asymmetry \(A\) in %; peak speed \(v_{max}\) m s\(^{-1}\); no source thresholds.
- physical: source constraints.
Need formal adjudication:
\[
\mathcal{V}(\mathbf w)=\max\{\mathcal{V}_{phys},\mathcal{V}_{bio},\mathcal{V}_{env}\}
\]
where 1 = veto. Admit iff 0. This is formal. No toy ratios. It's an indicator, not a fake ratio. Good.

Need "RLVR" maybe "Reinforcement Learning with Verifiable Rewards" but not in source. We can say "For a verifiable-reward audit, each veto must be computable from the candidate plan." Good.

Need maybe mention "no betting line" not in answer. Fine.

Let's craft final now. Need be careful with exact quote "Optimising Pre-Season Training Loads in Australian Football" title. Use [PAGE 1]. Good.

Need include "Unknown Authors" no, source lists authors. Not necessary.

Let's write final with XML tags. Use raw < in equations; acceptable. We'll avoid ampersand except escaped. Use "and" not &. For exact quote with &, use "and" not verbatim? We can paraphrase. But need exact quotes. We can quote "μ_totaldistance=314 −411 km" without &? Hmm exact quote marker can be partial. We can quote "314 −411 km" [PAGE 1]. Fine.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a one-page conference abstract/poster, not a full paper, so the derivation must separate what is explicitly printed from what is only implied. The optimization problem is a finite-dimensional nonlinear program over a 125-day pre-season. The decision vector is \(\mathbf w=(w_1,\ldots,w_{125})\), where the source defines \(w_i\) as “training load on day \(i\)” and states \(i\in\{1,2,\ldots,125\}\) [PAGE 1]. The model is run separately for “total training distance and sprint running distance” [PAGE 1]. The first multi-hop derivation is unit consistency. The cumulative constraint is \(C_i=\sum_{j=i-21}^{i-1}w_j<73,721\) [PAGE 1]. If \(w_i\) is in metres, then \(73,721/21=3,510.5\) m d\(^{-1}\), and over 125 days the maximum scale is \(73,721\times125/21=438,815\) m \(=438.8\) km. This is consistent with the reported “314 −411 km” [PAGE 1] for distance, because 314–411 km is 71.5–93.7% of that upper scale. If \(w_i\) were in km, the same arithmetic would give an absurd 438,815 km scale, so the distance model must be read in metres despite the initializer being printed as “3 km, 1 km” [PAGE 1]. That unit ambiguity is a gray-zone: the sprint distance initializer is printed as “30 m, 10 m” [PAGE 1], but the daily cap “0 ≤ w_i ≤ 50,000” [PAGE 1] is implausibly large for sprint metres if applied literally day-by-day; it is not binding for realistic sprint volumes.

The second multi-hop derivation is the taper. Objective B uses the Banister impulse-response form with \(p_i=p_0+k_1\sum_{j=1}^{i-1}w_j e^{-(i-j)/t_1}-k_2\sum_{j=1}^{i-1}w_j e^{-(i-j)/t_2}\), \(k_1=1\), \(k_2=2\), \(t_1=45\), \(t_2=11\) [PAGE 1]. The coefficient of a load applied \(\Delta=125-j\) days before the first match is \(e^{-\Delta/45}-2e^{-\Delta/11}\). At \(\Delta=0\) it is \(-1\), at \(\Delta=11\) it is about \(+0.047\), and for larger \(\Delta\) the positive fitness term dominates because the fatigue time constant is shorter. This mathematically produces a taper: very recent loads are net negative for match-day performance, while older loads are net positive. That is why Objective B “Plans included a taper prior to competition” and “Favoured more variation in daily training loads” [PAGE 1].

The gray-zone audit is substantial. The acute ratio is printed as \(r_i=\frac{\sum_{j=i-6}^{i-1}w_j/6}{\sum_{j=i-24}^{i-1}w_j/24}\) with \(0.6<r_i<1.3\) [PAGE 1]. As printed, the numerator spans six prior days, not seven; a conventional acute:chronic ratio often uses seven days. The source does not resolve whether this is a typographical ambiguity or an intentional six-day acute window. Early days \(i<25\) require pre-study load history; the source only gives “off-season chronic loads: 14km/week distance and 150m/week SD” [PAGE 1], without stating the padding rule. The Banister model omits \(p_0\), so absolute performance levels are not identifiable from the abstract, although the argmax of \(f_B\) is unaffected by an additive constant. The final-day load \(w_{125}\) does not appear in \(p_{125}\) because the sum is \(j=1\) to \(i-1\); with \(i=125\), only \(w_1,\ldots,w_{124}\) enter. Therefore Objective B alone leaves \(w_{125}\) non-unique unless another regularizer or constraint is supplied. The solver is “fmincon” with “Sequential quadratic programming algorithm (SQP)” and “Default step and function convergence tolerances (10-6)” [PAGE 1]; strict inequalities can be numerically violated at \(10^{-6}\) scale, and the model is not validated against prospective injury outcomes. The word “safe” is a constraint label, not a probabilistic injury guarantee.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The formal decision problem, as printed and reconstructed only where necessary, is:

\[
i\in\{1,\ldots,125\},\qquad \mathbf w=(w_1,\ldots,w_{125}),\qquad w_i=\text{training load on day }i.
\]
The source states: “Decision Variables \(w_i= training load on day i; i\in\{1,2,\ldots,125\}\)” [PAGE 1].

Daily bounds:
\[
0\le w_i\le 50{,}000.
\]
The source states: “Daily maximum and minimum: \(0 \le w_i \le 50,000\)” [PAGE 1]. For total distance, the consistent unit interpretation is metres, by the cumulative-volume arithmetic above. The source does not explicitly print the unit beside the 50,000 bound.

Acute:chronic ratio constraint:
\[
r_i=\frac{\frac{1}{6}\sum_{j=i-6}^{i-1}w_j}{\frac{1}{24}\sum_{j=i-24}^{i-1}w_j},
\qquad
0.6<r_i<1.3.
\]
The source states: “Bounded acute:chronic workload ratio (relative load progression)” and “\(0.6 < r_i < 1.3\)” [PAGE 1]. Assumption: the chronic denominator must be strictly positive for the ratio to be defined. If \(\sum_{j=i-24}^{i-1}w_j=0\), then \(r_i\) is either undefined as \(0/0\) or infinite if the numerator is positive; that is an exact singularity/breakdown regime. If numerical noise makes the denominator negative, the inequality direction can flip; this must be vetoed. Because the printed numerator spans six prior days while the denominator spans twenty-four prior days, the window convention is a documented gray-zone.

Cumulative rolling 21-day constraint:
\[
C_i=\sum_{j=i-21}^{i-1}w_j<73{,}721.
\]
The source states: “Maximum cumulative workload (rolling 21 days)” and “\(C_i<73,721\)” [PAGE 1]. If \(w_i\) is in metres, \(C_i\) is in metres and \(73,721\) m is 73.721 km over 21 days. The exact boundary \(C_i=73,721\) is excluded by the strict inequality; an SQP solver with \(10^{-6}\) tolerance may accept a plan within \(10^{-6}\) of the boundary, so a practical implementation needs an explicit margin. Early \(i\) again require pre-study padding.

Objective A:
\[
f_A(\mathbf w)=\sum_{i=1}^{125}w_i.
\]
The source states: “Objective A: Maximise total ‘safe’ training volume” and “Simple objective” [PAGE 1]. Units: if \(w_i\) is metres, \(f_A\) is metres over the 125-day block; if converted to km, divide by 1000.

Objective B:
\[
p_i=p_0+k_1\sum_{j=1}^{i-1}w_j e^{-(i-j)/t_1}
-k_2\sum_{j=1}^{i-1}w_j e^{-(i-j)/t_2},
\]
\[
f_B(\mathbf w)=p_{125},
\qquad
k_1=1,\quad k_2=2,\quad t_1=45,\quad t_2=11.
\]
The source states: “Banister impulse-response model (Banister 1975)” and “\(k_1 = 1, k_2 = 2, t_1 = 45, t_2 = 11\) (Morton 1990)” [PAGE 1]. Units: \(t_1,t_2\) are days; the exponent is dimensionless; \(p_i\) is in arbitrary performance units because the source does not state \(p_0\) or the performance scale. If \(w_i\) is in metres, \(k_1\) and \(k_2\) carry performance units per metre, but the abstract does not print those units. Breakdown regimes: \(t_1\le0\) or \(t_2\le0\) makes the exponential kernel singular or explosive; here both are fixed positive. A missing \(p_0\) shifts all \(p_i\) by a constant and does not change the optimal \(\mathbf w\), but it prevents absolute performance claims.

Optimizer and initialization:
\[
\mu_{\text{distance}}=3\text{ km},\quad \sigma_{\text{distance}}=1\text{ km};
\qquad
\mu_{\text{sprint}}=30\text{ m},\quad \sigma_{\text{sprint}}=10\text{ m}.
\]
The source states: “Training plans were initialised by random sampling from a normal distribution” and “\(\mu, \sigma_{distance}= 3 km, 1 km\)” and “\(\mu, \sigma_{sprint}= 30 m, 10 m\)” [PAGE 1]. The solver is “MATLAB” with “fmincon” and “SQP” [PAGE 1]. Random normal initialization can generate negative values before projection to \(w_i\ge0\); the abstract does not state the projection rule.

Results reported: “Convergence of 20 simulated pre-season training plans” [PAGE 1]; plans satisfied constraints; comparable to professional AFL values “\(\mu_{total distance}=314-411\) km” and “\(\mu_{sprint distance}=2.7-8.9\) km” [PAGE 1]; increasing off-season chronic loads increased “amounts of ‘safe’ training” and “projected performance levels” [PAGE 1]. Objective A “Prescribed frequent, moderate intensity training” [PAGE 1]; Objective B included “a taper prior to competition,” “more variation in daily training loads,” and “consideration to fatigue accumulation” [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit in the reference list and poster text. The Banister systems model from 1975 supplies the impulse-response performance model; the source cites “Banister E, Calvert T, Savage M, Bach T. A systems model of training for athletic performance” and uses “Banister impulse-response model (Banister 1975)” [PAGE 1]. Morton, Fitz-Clarke, and Banister’s 1990 and 1991 work supplies the optimization/parameter lineage: “Morton RH, Fitz-Clarke JR, Banister EW. Modeling human performance in running” and “Fitz-Clarke JR, Morton RH, Banister EW. Optimizing athletic performance by influence curves” [PAGE 1]. Colby 2014 supplies the cumulative running-load warning: the source states “High cumulative running loads (3-4 weeks) (Colby 2014)” [PAGE 1]. Gabbett 2016 and Carey 2016 supply the relative-load warning: “High and low relative training loads (Gabbett 2016, Carey 2016)” [PAGE 1]. Soligard et al. 2016 and Drew and Finch 2016 supply the consensus/review layer on load and injury, while Hellard et al. 2006 supplies a limitation check on the Banister model; Malone et al. 2016 supplies the high-chronic-load and maximal-velocity-running context; Wisbey and Montgomery 2015 supplies AFL GPS quantification; Schaefer et al. 2015 supplies training-plan evolution [PAGE 1].

The retrocausal structure is that later match-day performance and later injury constraints reach backward to determine what can be trained now. The off-season chronic load is the clearest example: “Increasing the off-season chronic training loads (Fig 1): ↑ amounts of ‘safe’ training ↑projected performance levels” [PAGE 1]. A low off-season chronic load retroactively caps the acute load that can be prescribed without violating \(r_i<1.3\), while a high off-season chronic load permits more acute work but may itself be a risk exposure. The 21-day cumulative constraint \(C_i<73,721\) creates a multi-week trap: a coach cannot “catch up” with a large early block without consuming the rolling budget for the next three weeks. The 45-day fitness and 11-day fatigue time constants create a second trap: a plan that looks good on aggregate volume can still fail the match-day objective if it places too much load in the final 7–14 days, because the fatigue term has the shorter decay. The fixed Banister parameters are also a genealogy trap: they come from prior running models, not from this AFL squad, so individualized parameter shifts are not represented. The observational injury literature is another trap: the constraints encode associations from prior studies, but the optimization treats them as hard safety rules, which is a stronger causal claim than the source can prove.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive decision problem has at least four agents: the athlete, the coach, the physical-performance staff, and the medical staff. Each models the others’ risk tolerance. The coach wants “as much time as possible to coach” under Objective A, while also wanting match-day performance under Objective B [PAGE 1]. The athlete models the coach’s selection risk and may hide soreness to avoid load reduction; the coach models the athlete’s reporting bias and may discount self-report; the medical staff models both and applies vetoes. The optimization framework claims plans “Are not exposed to subjective biases” [PAGE 1], but the recursive theory-of-mind audit says that automation does not remove bias; it relocates bias into the objective, constraints, and parameter choices.

Crisis habit regression appears in two opposite forms. Under an injury crisis, staff may regress to the “harder is better” habit implied by the training-injury prevention paradox, or to a “protect at all costs” habit that suppresses acute load below \(r_i>0.6\). Both are dangerous: the source warns that “High and low relative training loads” are associated with injury risk [PAGE 1]. A counter-trap is to exploit the ratio mechanically: keep chronic load high enough to permit high acute load, then taper late, without checking tissue-specific or biomechanical tolerance. The clock layer is the 125-day pre-season and the match-day \(p_{125}\) target. Objective B’s taper is not a moral preference; it is a time-constant consequence: recent loads are penalized by the fatigue kernel \(e^{-(125-j)/11}\), while older loads remain fitness-positive through \(e^{-(125-j)/45}\). The recursive trap is that the coach may read the taper as “less work is safer,” while the athlete may read it as “the coach has lost confidence,” and the medical staff may read a late load spike as non-adherence. The correct counter-trap is to make the clock explicit: the 21-day cumulative window, the 45/11-day kernels, and the first-match day must be shown to all agents so that load changes are interpreted as planned periodization rather than crisis response.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source gives hard physical constraints, not weather or biomechanical constraints. The physical veto is therefore provable from the printed inequalities: any candidate \(\mathbf w\) with \(w_i<0\), \(w_i>50,000\), \(r_i\notin(0.6,1.3)\), or \(C_i\ge73,721\) is inadmissible. These are not soft preferences; they are the model’s constraint set [PAGE 1]. A practical veto proof must also handle the exact singularities: if the chronic denominator in \(r_i\) is zero, the ratio is undefined and the plan is vetoed unless a documented pre-study baseline is supplied; if \(C_i=73,721\) exactly, the strict inequality fails; if SQP returns a point within \(10^{-6}\) of a boundary, it should be treated as a numerical-boundary flag and rechecked with an explicit margin.

The biomechanical layer is only partially represented. The source considers “total training distance and sprint running distance” [PAGE 1] and cites “High cumulative running loads (3-4 weeks)” and “High and low relative training loads” [PAGE 1], but it does not print acceleration, asymmetry, peak-speed, or tissue-specific thresholds. Therefore a biomechanical veto cannot be numerically derived from this page alone. It must be an external clinical rule: for example, a veto if an athlete’s high-speed running exposure exceeds a medical policy limit, if asymmetry exceeds a clinical threshold, or if soreness/pain modifies gait. The source provides no such numbers, so any numeric claim would be invented. The correct adjudication is to mark those thresholds as “policy-supplied” and not pretend they are in the abstract.

The weather/environment layer is also absent from the source. There is no WBGT, precipitation, surface hardness, travel, or altitude variable in the printed model. A weather veto must be an external hard gate: if WBGT exceeds the governing heat policy, if precipitation or surface conditions make sprint exposure unsafe, or if travel/altitude changes the athlete’s load tolerance, the plan is vetoed or rescheduled. Again, the source gives no threshold, so the only defensible statement is that the optimizer’s feasibility is necessary but not sufficient.

Formal adjudication can be written as a binary veto:
\[
\mathcal V_{\text{phys}}(\mathbf w)=\mathbf 1\{\exists i: w_i<0\ \text{or}\ w_i>50,000\ \text{or}\ r_i\notin(0.6,1.3)\ \text{or}\ C_i\ge73,721\},
\]
\[
\mathcal V(\mathbf w)=\max\{\mathcal V_{\text{phys}},\mathcal V_{\text{bio}},\mathcal V_{\text{env}}\}.
\]
Admission requires \(\mathcal V(\mathbf w)=0\). This is not a fake ratio; it is a hard indicator gate. The breakdown regime is an unknown layer: if biomechanical or weather data are missing, the model cannot prove safety, so the plan should be classed as “optimizer-feasible but not medically cleared,” not “safe.”
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
For a verifiable-reward audit, each veto below is computable from a candidate plan and a stated counterfactual. The reward is binary: 0 = veto, 1 = admissible.

1. Zero chronic denominator veto. Counterfactual: set the pre-study chronic load to zero, or evaluate a day \(i\) where \(\sum_{j=i-24}^{i-1}w_j=0\). Then
\[
r_i=\frac{\frac{1}{6}\sum_{j=i-6}^{i-1}w_j}{\frac{1}{24}\sum_{j=i-24}^{i-1}w_j}
\]
is \(0/0\) if the acute sum is also zero, or infinite if the acute sum is positive. Prediction: no plan can satisfy \(0.6<r_i<1.3\) at that day without an imputed baseline; an optimizer run with a zero denominator will either return NaN, violate the constraint, or silently use a padding rule. Veto any claim of feasibility unless the baseline padding is printed and reproducible. This is directly tied to the source’s off-season chronic values “14km/week distance and 150m/week SD” [PAGE 1].

2. Unit-mismatch veto. Counterfactual: interpret \(w_i\) in km rather than metres for the distance model. Then the cumulative bound \(C_i<73,721\) becomes 73,721 km over 21 days, and the 125-day scale is \(73,721\times125/21=438,815\) km. Prediction: the reported professional range “314 −411 km” [PAGE 1] would be only 0.07–0.09% of the constraint scale, so the cumulative constraint would be effectively non-binding and Objective A would not produce the reported volumes. Under the metre interpretation, the scale is 438.8 km and the reported 314–411 km is 71.5–93.7% of it. Veto any plan or code output that does not declare units and reproduce this consistency check. This is a verifiable arithmetic veto, not a judgment call.

3. Final-day non-identifiability veto under Objective B. Counterfactual: hold \(w_1,\ldots,w_{124}\) fixed and set \(w_{125}=0\) versus \(w_{125}=50,000\) m. Since
\[
p_{125}=p_0+k_1\sum_{j=1}^{124}w_j e^{-(125-j)/t_1}
-k_2\sum_{j=1}^{124}w_j e^{-(125-j)/t_2},
\]
the final-day load does not appear. Prediction: \(f_B=p_{125}\) is identical to machine precision under both counterfactuals, while \(f_A\) changes by 50,000 m. Therefore any Objective-B-only optimal plan is non-unique on day 125 unless \(w_{125}\) is fixed by an external rule or a regularizer. Veto uniqueness claims, and require the final-day load to be reported separately. This also exposes a broader gray-zone: the source’s “Reach peak projected performance levels on day of first match” [PAGE 1] is evaluated at \(p_{125}\), but the match-day training load itself is outside the performance kernel.
</RLVR_COUNTERFACTUAL_VETOES>