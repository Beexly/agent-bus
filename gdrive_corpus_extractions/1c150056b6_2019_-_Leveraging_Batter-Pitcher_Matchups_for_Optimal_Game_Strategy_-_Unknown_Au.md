---
source: "2019 - Leveraging Batter-Pitcher Matchups for Optimal Game Strategy - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 22
model: baidu/ernie-5.5-flash-preview:free
words: 7745
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with exact XML sections and >=1000 words. Need analyze deeply. User provided drive source path and pages 22 source text. Need likely output in specified XML sections: THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES. Must satisfy invariants: zero betting lines (no spreads, totals, moneylines, odds). Zero toy equations: no fake ratios like Force/Fatigue. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need deep multi-hop derivation & gray-zone audit >=400 words in THINK_TRACE. Overall >=1000 words. Need likely analyze paper: Leveraging Pitcher-Batter Matchups for Optimal Game Strategy. We need maybe generate a frontier reasoning analysis. No betting. Need avoid odds. Can mention expected runs, probabilities. No toy equations; use formal equations with units. Need exact citations from pages. Need discuss operators and equations: bipartite graph, biclique, maximum likelihood probabilities, Ward clustering, simulation Markov chain? Need formalization. Need breakdown regimes: N threshold, sparse data, cluster count, simulation simplifications. Need RLVR? Reinforced learning? RLVR counterfactoical vetoes: likely verifiable reinforcement learning vetoes? Need provide 3 verifiable RLVR veto scenarios + predictions. Maybe RLVR = Reinforcement Learning with Verifiable Rewards? We need define. Need crisis habit regression vs counter-trap vs clock in Recursive Theory of Mind. Cross-layer veto adjudication physical/biomechanical/weather veto proof. We can invent but must be rigorous. Need no betting lines. Need maybe mention SI units: probability dimensionless, runs per inning unit runs/inning, bitsnats for information, graph vertices dimensionless? Need formal equations.

Need ensure final XML sections only? User says ">=1,000-WORD DEPTH across these exact XML sections: ..." likely need output those sections. Could include title? Better only XML tags. Need count >1000. Need each section maybe 200-400 words; total >1000. THINK_TRACE >=400. Need cite [PAGE N] markers with verbatim quotes. Need exact quotes from provided text. Need be careful with page markers. We can quote exact lines: [PAGE 1] etc. Need not too long but enough.

Need think about content.

Paper: authors Harrison and Salmon, BYU, MIT Sloan 2019. Problem: optimize pitching strategy from defensive point of view using pitcher-batter matchup data. Two problems: dense matchup data and sparse. Use retrosheet event data >3.59 million matchup results, active 2018, N=30 significance, biclique max at N=36 with 5 pitchers, 10 batters. Simulate 500,000 innings per strategy, 2345 strategies up to three pitchers for 10 batters. Outcomes: HR, T, D, S, W, FO, GO, K, HBP. Sim rules. Clustering 5170 matchups with >=35 at-bats using Ward's method, 15 clusters. Correlation 0.9286 truth vs 15 clusters; handedness only correlation 0.4666. Test 2018 postseason.

Need formal equations:
1. Bipartite graph G=(U,V,E), N threshold. E_{u,v}=1 if count C_{u,v} >= N. Biclique U' subset U, V' subset V, K_{5,>=9}. Optimization: N* = max { N : exists U' subset U, |U'|=5, V'=∩_{u∈U'} N(u), |V'|≥9 }. Page 6. Max likelihood estimate for event x: 
\hat{p}_{u,v}(x) = n_{u,v}(x)/n_{u,v}, where n_{u,v}=sum_x n_{u,v}(x). Units: dimensionless probability; n counts. Page 6: "We can then use the maximum-likelihood estimates for probabilities of events for each matchup, which amounts to taking the ratio of occurrences of the event ... divided by the total number of matchups." 
2. Inning simulation as stochastic process. Let b_i = outcome at at-bat i with pmf P(b|X_i=s_i, p_{s_i}, batter_i). Runs r. Expected runs for strategy S: E[R|S] = ∑_ω r(ω) P(ω|S), unit runs/inning. Page 7-8. Maybe define state Markov chain: state x_t ∈ {batter index, outs, base occupancy}. Transition kernel T(x_{t+1}|x_t,S) using event probabilities. Need no fake equation.
3. Run expectancy: \mu(S)=\mathbb{E}_{P_S}[R_{inning}]. Unit runs/inning.
4. Clustering: Ward minimize within-cluster sum of squares over probability vectors z_j ∈ Δ^6 after merging D/T and ignoring HBP. z_j = [P(S),P(W),P(FO),P(GO),P(K),P(DT)]^T? Page 9 says seven statistics used? Actually original Table 3 includes HR, T, D, S, W, FO, GO, K, HBP = 9? They lump D/T and ignore HBP -> seven: HR, DT, S, W, FO, GO, K. Yes. Page 9: "We lump doubles and triples together and ignore HBP ... seven statistics". Vector dimension 7. Probability simplex constraints sum? Since T/D merged and HBP ignored, remaining probabilities may not sum to 1 if HBP excluded? In simulation HBP maybe included? Clustering uses seven stats likely normalized? They didn't mention renormalization. We can assume normalized or leave as is. Need mention assumption: if ignoring HBP, cluster vector may use raw proportions or renormalized; paper not explicit. Gray zone.
Ward objective: minimize Δ(C) = ∑_{k=1}^K ∑_{j∈C_k} || z_j - \bar z_k ||^2, unit squared probability dimensionless. K=15 selected by elbow/diminishing returns. Page 11: "The specific number of 15 cluster types was selected... law of diminishing returns". 
5. Classification of sparse matchup: assign to cluster minimizing distance to centroid: c* = argmin_k || z - \bar z_k ||. Page 11-12. Could use Mahalanobis? Paper says distance to mean value. Use Euclidean if not specified; assumption.
6. Correlation: Pearson r = cov(μ_cluster, μ_truth)/(σ_cluster σ_truth). r=0.9286, r=0.4666. Page 14-16.
7. Breakdown regimes: N < 36 biclique absent for active players? Page 6: "No bicliques exist ... N > 36." N too low leads noisy MLE; MLE variance approx p(1-p)/n; standard error sqrt(p(1-p)/n) in probability units; for n=30, worst-case SE ≈0.091; for n=36 ≈0.083; for n=10 ≈0.158. Could mention formal. But no toy equations? This is formal probability. Need maybe not overdo. Singularity: cluster centroid near boundary of simplex, distances can violate information geometry? Euclidean distance on probability simplex not Fisher metric; breakdown when clusters differ mainly by rare events. Ward can merge heterogeneous clusters. Simulation breakdown: Markov independence assumption, static lineup, no real-time adjustments, no pitcher fatigue, no in-game state, no stolen bases/errors etc. Page 8 rules. Page 17: "we produce strategies for the entire inning, and do not rerun our simulations at any point... Optimal real-time decisions would require us to rerun our simulations after each at-bat." Also page 14: "Since our approach does not yet take into account multi-game scheduling... must-win scenarios only".

Retro-causal genealogy: Historical/scientific lineage and multi-week traps. Need mention lefty-righty handedness [PAGE 1], Lindsey 1959 [PAGE 22], Hirotsu and Wright dynamic programming and handedness [PAGE 1, 22], Bill James/Moneyball [PAGE 1,22], Ward's method [PAGE 22], bicliques Malgrange, Zhang et al [PAGE 22], retrosheet [PAGE 22]. Multi-week traps: overfitting to platoon average, ignoring matchup-specific outliers, using handedness as sufficient statistic, clustering leakage, postseason small sample. Need retro-causal maybe how earlier decisions cause future constraints: using active 2018 filter conditions on known postseason; usingbiclique truth biases evaluation; must-win scenarios truncate generalizability. Need mention multi-week traps: over weeks, platoon scores can mask true effects; injuries, lineup changes; sequential game effects; pitcher rest; platoon advantage regression. Need formal? Could discuss in prose.

Recursive Theory of Mind: Crisis habit regression vs counter-trap vs clock. Need model managers, opponents, future games. Crisis habit regression: manager under must-win may overuse elite reliever due to immediate expected runs, regression to habitual closer usage. Counter-trap: contrarian uses pinch hitters or lefty to exploit? Clock: time state: season/postseason, pitch count, rest days, series leverage. Need formal maybe nested belief hierarchy: manager's type θ, belief about bullpen fatigue F, probability of extra innings. Need no toy ratios. Use equations: multi-stage objective with discounting λ for future games, budget constraints. Could mention Page 21: Astros conserving pitchers for extra innings. "If the Astros had been able to tie the game... stronger position by not using additional pitchers". Need recursive: If I pitch Osuna, I reduce 9th inning run expectancy but increase deficit probability in extra innings; opponent knows and may counter. Clock: game state, inning, outs, series. Need maybe crisis habit regression vs counter-trap vs clock: habits: default bring closer; counter-trap: exploit regression by using favorable matchup even if unconventional; clock: manage over series and pitcher availability.

Cross-layer veto adjudication: Physical/biomechanical/weather veto proof. Need adjudicate if model's predicted strategy is invalid due to physical/biomechanical/weather. Need proof maybe in Bayesian/veto form: final decision D = argmax E[R] subject to constraints C_phys, C_weather. If constraints violated, expected value veto. Need formal: weather factors (temperature, wind, humidity) affect ball flight and grip; biomechanics: pitch velocity decline, arm stress, injury risk; field conditions. Source doesn't include weather/biomechanics except simulation ignores wild pitches etc. We can state model lacks these, so cross-layer veto must be external. Need exact page? Source pages do not mention weather; can cite absence? Could cite simulation rules [PAGE 8] "no errors, wild pitches, or passed balls occur" etc. Need formal proof: If weather condition causes P(HR) distribution shift Δw and physical fatigue reduces effective velocity, then original p_hat biased; veto if KL divergence between baseline and conditioned pmf exceeds tolerance. Use formal LaTeX: p^{(c)}(x)=P(X=x | matchup, context c). Veto if D_KL(p^{(c)} || \hat p) > τ (units nats/bits). Or if expected runs difference under context > operational tolerance. Need no fake toy ratios. Need mention SI: probabilities dimensionless, KL divergence in nats or bits, time seconds, distance meters, wind speed m/s, temperature K, pitch velocity m/s. Need cite source for no weather? Maybe "no errors, wild pitches, or passed balls occur" [PAGE 8] indicates simplified simulation. Need not cite absence strongly.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR maybe Reinforcement Learning from Verifiable Rewards. Need provide scenarios with formal verifiable predictions. Could be:
1. Sparse-data counterfactual: If a matchup has n<15 and its empirical event pmf deviates from assigned cluster centroid by Mahalanobis/Euclidean distance d > threshold, then use cluster; RL agent that selects raw MLE should be vetoed because expected posterior predictive risk higher. Prediction: In cross-validation, cluster assignment reduces error / improves rank correlation; source validation shows 15-cluster correlation 0.9286 vs handedness 0.4666 [PAGE 14,16]. Need make verifiable: Withheld biclique, compare rankings; rank Spearman >=0.9.
2. Real-time state counterfactual: If at-bat changes base-out state, strategy optimized ex ante cannot be updated; RL policy that ignores state should be vetoed when posterior distribution over optimal pitcher changes after first batter. Prediction: Dynamic rerun policy has lower expected runs in high-volatility innings; source admits "Optimal real-time decisions would require us to rerun our simulations after each at-bat" [PAGE 17].
3. Multi-game/resource counterfactual: If using elite pitcher now reduces availability tomorrow and expected series value decreases, static single-inning optimal strategy vetoed when continuation value loss > immediate run saving. Formal: choose S if ΔE[R_9] < ΔC_future (unit runs equivalents). Prediction: In elimination games, if probability of extra innings > threshold, conservative reliever use improves expected wins. Source: "must-win scenarios only" [PAGE 14] and Astros conserving pitchers [PAGE 21].

Need include RLVR maybe define reward: run prevention and win probability? But no betting; win probability is okay? Could mention probability of advancing, not odds. Need avoid moneylines. Use expected runs, series advancement probability. No spreads.

Need exact XML. Could include line breaks. Need total >1000 words. Let's draft robustly.

Need ensure THINK_TRACE >=400 words. Maybe 500. Need include gray-zone audit. Need citations exact [PAGE N] and quotes. Use quotes from source. We can quote enough.

Potential structure:
<THINK_TRACE>
... Deep multi-hop derivation:
- parse source, identify problem.
- dense path: data to biclique to MLE to simulation.
- sparse path: clustering to centroid classification to simulation.
- evaluation: correlation.
- gray zones: N=36, active player selection, cluster K, distance metric, simulation simplifications, real-time.
Need include exact quotes. Ensure >=400 words. Let's draft ~550.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX equations with units, page citations, breakdown. Need maybe bullet-like but XML. Include equations in $$...$$. Need cite pages. Need mention assumptions and breakdown. Include equations for graph, MLE, simulation, Ward, classification, correlation, KL veto. Need no fake ratios. Need maybe use SI/information units. Include exact quote for biclique? "We search for the biclique with |V ′| ≥9 and |U′| = 5 that maximizes N" [PAGE 6]. MLE quote [PAGE 6]. Outcomes table [PAGE 8]. Sim rules [PAGE 8]. Clustering quote [PAGE 9]. 15 clusters quote [PAGE 11]. Correlation quote [PAGE 14]. Need exact enough. Use [PAGE 6] etc. Need careful: page 6 includes "We search for the biclique with |V ′| ≥9 and |U′| = 5 that maximizes N". Use.

<RETROCAUSAL_GENEALOGY>
Historical lineage and multi-week traps. Include citations: [PAGE 1] Dodgers platoon, lefty-righty; [PAGE 2] Jason Gore individual vs average; [PAGE 1] Hirotsu/Wright handedness; [PAGE 22] references Lindsey, Hirotsu, Ward, bicliques. Multi-week traps: platoon averages, small sample, series fatigue, clustering temporal drift. Need maybe "retro-causal" as how present model encodes past choices. No equations required but can mention.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Need formal nested beliefs maybe equation. Include page 21 tradeoff resource; page 14 must-win; page 17 real-time. Use no betting.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Formal: if context changes pmf, veto. Use source's simplified rules [PAGE 8]. Need "proof" maybe steps.

<RLVR_COUNTERFACTUAL_VETOES>
3 scenarios + predictions. Need verifiable RLVR. Define RLVR: reinforcement learning from verifiable rewards? Maybe "reinforcement learning with verifiable reward/veto". Need predictions. Use source quotes. Ensure no betting.

Need no mention "odds". Use "probability" not odds. Avoid "betting". No spreads/totals/moneylines. "expected runs" okay. "win probability" okay? It's not betting. But could avoid. Use "advancement probability".

Need think about exact word count. Let's estimate. THINK_TRACE maybe 600. Source operators maybe 600. Retro maybe 250. Recursive 250. Cross-layer 250. RLVR 350. Total 2300. Fine.

Need ensure "ZERO TOY EQUATIONS": use formal LaTeX, no fake ratios. We can include equations. Need not call any ratio toy. The MLE ratio is from source. The Ward objective formal. The correlation formula formal. KL divergence formal. Multi-stage objective formal. Need no invented Force/Fatigue. We can define fatigue index? Avoid. If need physical, use pitch velocity v, release time, arm torque τ. But not toy. Use constraints.

Need exact quotes with page markers. For verbatim quotes, ensure exact from provided text. Some quotes have weird punctuation. Need copy carefully.
Possible quotes:
[PAGE 1] "the choice certainly tailors to the well-known lefty-righty handedness matchup strategy" (there is [10] maybe omit citation). 
[PAGE 2] "To truly optimize with respect to matchup data, each pitcher-batter matchup should be tested in isolation until the data for that matchup is statically signiϐicant." Note weird "statically" and epsilon. Need quote exact? It says "statically signiϐicant" maybe typo. Could avoid or use [PAGE 2] "A clearer estimate of offensive and defensive output, therefore, requires an extensive amount of pitcher-batter matchup data". Exact: "A clearer estimate of offensive and defensive output, therefore, requires an extensive amount of pitcher-batter matchup data". Good.
[PAGE 2] "which unfortunately will never exist for all possible pitcher-batter matchups." exact? "which unfortunately will never exist for all possible pitcher-batter matchups." yes.
[PAGE 6] "Matchups that have occurred at least N = 30 times are reasonably signiϐicant from a statistical point of view" maybe. Exact: "Matchups that have occurred at least N = 30 times are reasonably signiϐicant from a statistical point of view". Good.
[PAGE 6] "We search for the biclique with |V ′| ≥9 and |U′| = 5 that maximizes N" exact. Good.
[PAGE 6] "We can then use the maximum-likelihood estimates for probabilities of events for each matchup, which amounts to taking the ratio of occurrences of the event (say a single, or a strike out) divided by the total number of matchups." Exact maybe "matchups" not at-bats? Use.
[PAGE 7] "There exist 2345 different strategies, for these constraints". Exact.
[PAGE 8] "no errors, wild pitches, or passed balls occur" exact.
[PAGE 9] "We lump doubles and triples together and ignore HBP when performing the clustering to prevent the algorithm from building cluster types for rare, and somewhat random, events". Exact.
[PAGE 11] "The specific number of 15 cluster types was selected based on a comparison of the parallel plot of the 16th cluster with those of the other 15." exact. Also "law of diminishing returns".
[PAGE 14] "A correlation coefficient of 0.9286 is calculated between these two data sets". exact. 
[PAGE 14] "The correlation coefficient of these two data vectors is calculated only to be 0.4666." exact? Page 14: "The correlation coefﬁcient of these two data vectors is calculated only to be 0.4666." Good.
[PAGE 17] "Optimal real-time decisions would require us to rerun our simulations after each at-bat." exact.
[PAGE 21] "If the Astros had been able to tie the game in the bottom of the 9th inning, necessitating extra innings of play, they would have found themselves in a stronger position by not using additional pitchers". exact.
[PAGE 14] "Since our approach does not yet take into account multi-game scheduling, we look at must-win scenarios only". exact.

Need include source page citations for equations. We can put after each equation: [PAGE 6], etc. Need maybe use exact [PAGE 6] markers. Good.

Need think about "RLVR" maybe stands for Reinforcement Learning from Verifiable Rewards. We can define in section. Need not source. Could be considered invented? But user asked RLVR_COUNTERFACTUAL_VETOES. We can define as "reinforcement-learning-with-verifiable-reward/veto". It's okay. Need formal. Could include equations:
Reward r_t = -R_inning (runs allowed) maybe unit runs. But RLVR uses verifiable constraints: V_i = 1 if data condition. Policy π. Veto if any V_i=0. Objective: maximize ∑ γ^t (-runs - λ C_resource) subject to V_i=1. But avoid fake? It's formal. Need not too complex.

Need cross-layer veto proof: Maybe use theorem-like:
Let strategy S have predicted expected runs μ(S) under baseline p. If physical/weather context c shifts pmf to p_c, then expected runs μ_c(S). If there exists c such that |μ_c(S)-μ(S)| > ε or physical constraint violation, veto. Proof: because simulation probabilities are estimated from historical data under unstated context, conditional expectation changes by law of total probability: μ = ∑_c μ_c P(c). If P(c) nontrivial and sensitivity nonzero, baseline biased. Need cite source's simplified rules [PAGE 8] as proof of omitted context. Need mention units: wind speed m/s, temperature K, pitch velocity m/s, pitch count dimensionless, time s. Need no betting.

Need maybe mention "SI units" in source operators: counts dimensionless, probabilities dimensionless, runs/inning, bits/nats, meters per second. Good.

Need be careful with "at-bats" vs "matchups". The MLE quote says total number of matchups but likely at-bats. We can formalize with plate appearances/at-bats n. Source event-level matchup results. Use n_{u,v}(x). Good.

Need maybe mention "biclique in graph theory" [PAGE 6]. Formal.

Need gray-zone audit in THINK_TRACE: The paper says N=30 reasonably significant but then N=36 biclique. The active-player filter conditions on future 2018 postseason; risk lookahead bias. Clustering on 5170 with >=35 at-bats, but classification uses 15 clusters; Euclidean distance to mean not necessarily optimal under simplex geometry; ignoring HBP and merging D/T reduces dimension but may distort rare events; simulation outcomes omit steals, errors, etc.; strategies fixed for 10 batters and not rerun; result may not generalize. Need cite pages. Good.

Need maybe include "singularities" in SOURCE_OPERATORS: e.g., Ward clustering singular if all matchup vectors identical; correlation undefined if variance zero; biclique search fails if no U' intersection >=9; KL veto undefined if p_hat zero where p_c positive (need smoothing). Include exact breakdown regimes. Good.

Need maybe include "information/probability units": probability dimensionless, Shannon information bits, KL nats/bits, correlation dimensionless, counts dimensionless, runs/inning. Good.

Need not mention "toy equations" maybe avoid phrase? Could mention "No speculative ratios are used" but invariant says never mention? It says ZERO TOY EQUATIONS: Never invent fake ratios. We can just not use them. Don't mention maybe.

Need final answer only XML sections. Ensure tags exactly: <THINK_TRACE> ... </THINK_TRACE> etc. Could include XML declaration? No. Need no markdown? Fine.

Let's draft in detail.

THINK_TRACE content:
- "The source converts a strategic baseball problem into three operator chains: data pruning, dense biclique MLE simulation, sparse cluster transfer." Need deep.
- Dense chain: Retrosheet >3.59M [PAGE 5], active players, N, graph, biclique. Then outcomes [PAGE 8], simulation 500k innings, strategies 2345 [PAGE 7]. 
- Sparse chain: clustering 5170 matchups [PAGE 9], Ward, 15 clusters [PAGE 11], classify [PAGE 11-12], validate [PAGE 14].
- Gray-zone audit: N threshold, active filter, cluster number, distance, simulation simplifications, real-time. 
Need >=400 words. Let's write maybe 600.

SOURCE_OPERATORS_AND_EQUATIONS:
Could be structured with equations and paragraphs. Need include exact quotes. Use LaTeX. Ensure no fake. Example:
Let C_{u,v}(x) be count... n_{u,v}=∑ C. MLE: \hat p_{u,v}(x)=C_{u,v}(x)/n_{u,v}. Source quote. Breakdown if n=0 undefined; n small high variance; SE. 
Biclique: N^*(G)=max{N: ∃U'...}. Quote. Breakdown no biclique if N>36 [PAGE 6].
Simulation: state X_t, transition kernel. 
\mathbb{E}[R|S]=\sum_{\omega} r(\omega) \prod_{t} K(...). Need maybe too much. We can define generic. 
Ward: K=15. 
Classification: c(z)=argmin_k ||z-\bar z_k||_2. 
Correlation: r. 
Veto: KL. 
Need include units. Could list: n dimensionless, p dimensionless, μ runs/inning, KL nats, distance sqrt-probability units (dimensionless), wind m/s. 
Need cite pages after each.

RETROCAUSAL_GENEALOGY:
Need historical lineage: Lindsey 1959, Hirotsu/Wright, platoon, Moneyball, Ward, biclique algorithms. Multi-week traps: platoon average masking, cluster drift, fatigue, schedule. Include citations. Maybe 300 words.

RECURSIVE_THEORY_OF_MIND:
Need crisis habit regression vs counter-trap vs clock. Use formal: manager utility U = -E[R_current] - γ E[C_future] - δ habit penalty? No fake ratio. Use γ discount, C_future resource cost in runs. Belief hierarchy. Include page 21 resource tradeoff. Page 17 real-time. Page 14 must-win. Good.

CROSS_LAYER_VETO_ADJUDICATION:
Formal proof. Let baseline pmf \hat p, context c. If D_KL or expected run delta > tolerance, veto. Need source: simulation rules omit errors etc [PAGE 8], no real-time [PAGE 17]. Physical variables: pitch velocity v (m/s), arm torque τ (N m), pitch count n_p (count), rest days d (days), temperature T (K), wind speed w (m/s). Strategy feasible if max pitch count etc. If infeasible, veto. Need maybe include "weather can alter ball flight and grip" as domain knowledge, not source. But okay. Need formal.

RLVR_COUNTERFACTUAL_VETOES:
Define RLVR as policy trained with reward and verifiable constraints. Three scenarios:
1. Sparse matchup raw MLE veto. Formal: if n<15, variance high, use cluster. Prediction: withheld validation rank correlation >=0.9, vs handedness ~0.47. Source [PAGE 14]. 
2. Static ex-ante policy veto in dynamic state. Formal: if after at-bat posterior P(S*|state) changes such that expected regret > ε. Prediction: rerun after each at-bat lower expected runs; source admits [PAGE 17].
3. Resource/multi-game veto. Formal: immediate run saving less than future cost. Prediction: in must-win/extra innings possibility, conserving reliever improves series advancement probability. Source [PAGE 14][PAGE 21].
Need make verifiable: data splits, predictions. No betting.

Need ensure no "odds" word. Search final for "odds". Avoid. "probability" okay.

Need final word count likely >2000. Good.

Let's craft carefully.

Potential issue: User requested "DRIVE SOURCE: ... PAGES: 22" and provided source text. Need likely cite exact pages. Good.

Need maybe mention "SI/information/probability units" explicitly. In SOURCE_OPERATORS, include "Units" list.

Need avoid saying "I think" maybe okay. Use formal.

Need ensure exact XML tags. Could put each section on separate. No extra text outside.

Let's write final.

Double-check quotes:
- [PAGE 6] quote "We search for the biclique with |V ′| ≥9 and |U′| = 5 that maximizes N" exact includes prime symbols. Good.
- [PAGE 6] quote "Matchups that have occurred at least N = 30 times are reasonably signiϐicant from a statistical point of view" source uses ϐ maybe. Use exact? It uses "signiϐicant" due PDF ligature. We can copy. Good.
- [PAGE 6] MLE quote exact. Good.
- [PAGE 8] quote "no errors, wild pitches, or passed balls occur". Good.
- [PAGE 9] quote exact. Good.
- [PAGE 11] quote "The specific number of 15 cluster types was selected based on a comparison of the parallel plot of the 16th cluster with those of the other 15." Good.
- [PAGE 14] quote "A correlation coefficient of 0.9286 is calculated between these two data sets". Good.
- [PAGE 14] quote "The correlation coefﬁcient of these two data vectors is calculated only to be 0.4666." Need maybe use "coefﬁcient" ligature. Could write "correlation coefficient" without exact? Invariant says cite verbatim quotes when source pages provided. If quote, should be verbatim. We can use text with normal 'fi'? Source text has "coefﬁcient" with ligature. To be safe copy exact: "The correlation coefﬁcient of these two data vectors is calculated only to be 0.4666." But in plain text, ligature may be okay. Or avoid direct quote and paraphrase? Invariant says when source pages are provided, cite exact markers and verbatim quotes. It likely expects quotes. Use exact as provided. 
- [PAGE 17] quote exact.
- [PAGE 21] quote exact.
- [PAGE 14] "Since our approach does not yet take into account multi-game scheduling, we look at must-win scenarios only" exact. Good.

Need maybe quote [PAGE 5] "more than 3.59 million matchup results". Exact: "The event-level data is from retrosheets.org [1], and consists of more than 3.59 million matchup results." Good.

Need maybe quote [PAGE 7] "There exist 2345 different strategies, for these constraints". Good.

Need maybe quote [PAGE 2] "A clearer estimate of offensive and defensive output, therefore, requires an extensive amount of pitcher-batter matchup data". Good.

Let's write. Ensure no accidental betting lines. 

Need think about "run expectancy" formal equation with product over at-bats. Could be:
\mathbb{E}[R|S] = \sum_{\omega \in \Omega} R(\omega) \prod_{i=1}^{10} P_\theta(\omega_i | \omega_{<i}, S_i)
This is formal but maybe too generic. Include state kernel.

Ward equation:
\mathcal{W}(C_1,...,C_K) = \sum_{k=1}^K \sum_{j \in C_k} \| z_j - \bar z_k \|_2^2.
At each merge, minimize increase:
\Delta(C_a,C_b) = \frac{|C_a||C_b|}{|C_a|+|C_b|} ||\bar z_a - \bar z_b||_2^2.
This is standard Ward. Is it a toy? It's formal. Units: squared probability dimensionless. Good.

Correlation equation:
\rho = \frac{\sum_i (\mu_i^{cluster}-\bar\mu^{cluster})(\mu_i^{truth}-\bar\mu^{truth})}{\sqrt{\sum_i(...) \sum_i(...)}}
Dimensionless. Source r values.

KL veto:
D_{KL}(p_c || \hat p) = \sum_x p_c(x) \log(p_c(x)/\hat p(x)) nats. Veto if > τ. Need note smoothing: if \hat p(x)=0 and p_c(x)>0, KL diverges -> breakdown; use Laplace smoothing or reject sparse matchup. Good.

Physical constraints:
C_phys: v_i <= v_{max,i}(n_p, rest, health), torque <= torque_limit. Units v m/s, torque N m, pitch count count. If violation, veto. Weather: T K, wind m/s, humidity %. Use context c.

RLVR: reward R = -runs_allowed - λ C_resource. Verifiable constraints. Maybe include.

Need ensure no "toy equations" by not using simple ratios. All equations are formal. Good.

Let's produce final. Ensure word count enough. We'll make sections detailed. 

Potential issue: The final may be very long but okay. Need no analysis in final. 

Let's draft final in mind:

<THINK_TRACE>
The paper's reasoning is a chain... (long). Need 400+ words. Let's count rough: I will write ~650.

Maybe include "multi-hop derivation" with numbered? XML text can include paragraphs. Good.

Then source operators.

Let's proceed.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central reasoning is a multi-hop conversion of a baseball strategy problem into a probabilistic optimization pipeline: first, identify pitcher-batter pairs with enough repeated observations to approximate “truth”; second, embed those pairs in a bipartite matchup graph and extract a dense complete subgraph, or biclique; third, simulate entire innings under exhaustive pitching strategies; fourth, transfer information from dense matchups to sparse matchups via hierarchical clustering; and fifth, validate the transfer by comparing simulated run outputs across “truth,” cluster-based, and handedness-based probability models. The first hop is data adequacy. The authors explicitly recognize that handedness is only a coarse prior and that individual matchups may behave anomalously: [PAGE 2] “A clearer estimate of offensive and defensive output, therefore, requires an extensive amount of pitcher-batter matchup data”. They then construct a graph-theoretic device for finding dense subsets where matchup counts are large enough: [PAGE 6] “We search for the biclique with |V ′| ≥9 and |U′| = 5 that maximizes N”. The second hop is event-probability estimation. For each dense pair, they use maximum-likelihood occurrence ratios: [PAGE 6] “We can then use the maximum-likelihood estimates for probabilities of events for each matchup, which amounts to taking the ratio of occurrences of the event (say a single, or a strike out) divided by the total number of matchups.” The third hop is inning simulation. The model advances runners, records outs, and accumulates runs until three outs or a fixed batter horizon. This is a discrete stochastic process, not a betting market model; the output is expected runs per inning, measured in runs per inning. The fourth hop handles sparsity. Because many pitcher-batter pairs never occur enough, the authors cluster high-count matchups using Ward’s method: [PAGE 9] “We lump doubles and triples together and ignore HBP when performing the clustering to prevent the algorithm from building cluster types for rare, and somewhat random, events”. They then assign sparse matchups to the nearest cluster mean. The fifth hop is validation. The cluster model reproduces strategy rankings with high correlation against dense truth: [PAGE 14] “A correlation coefficient of 0.9286 is calculated between these two data sets”. By contrast, handedness-only clustering performs much worse: [PAGE 14] “The correlation coefﬁcient of these two data vectors is calculated only to be 0.4666.”

The gray-zone audit begins with the statistical threshold. The authors treat at least 30 occurrences as reasonably significant: [PAGE 6] “Matchups that have occurred at least N = 30 times are reasonably signiϐicant from a statistical point of view”. Yet the actual biclique search requires a stricter threshold, and the maximum found is tied to a precise count structure: [PAGE 6] “No bicliques exist with at least ϐive pitchers and nine batters with N > 36.” This means the “truth” benchmark is not universal; it is a conditional truth defined by the existence of a dense subgraph. The active-player filter further conditions the sample on players available in 2018, creating a lookahead bias because the authors want to compare against actual 2018 postseason decisions. The simulation also simplifies the game: [PAGE 8] “no errors, wild pitches, or passed balls occur”. That omission matters because defensive miscues, pitcher command lapses, and weather-sensitive ball movement can alter the conditional distribution of outcomes. The model also fixes a batting lineup and does not rerun after each at-bat, which the authors acknowledge: [PAGE 17] “Optimal real-time decisions would require us to rerun our simulations after each at-bat.” Finally, the clustering choice of 15 types is partly qualitative: [PAGE 11] “The specific number of 15 cluster types was selected based on a comparison of the parallel plot of the 16th cluster with those of the other 15.” Thus the pipeline is strong for relative ranking of strategies under a dense empirical basis, but it is vulnerable to sparse-count variance, cluster distortion, temporal drift, and contextual physical state.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(U\) be the set of pitchers and \(V\) the set of batters. For a pair \((u,v)\), let \(n_{u,v}\) be the number of observed plate-appearance events, and let \(n_{u,v}(x)\) be the count of outcome \(x\). The maximum-likelihood probability operator is

\[
\hat p_{u,v}(x)=\frac{n_{u,v}(x)}{n_{u,v}},
\qquad x \in \{HR,T,D,S,W,FO,GO,K,HBP\}.
\]

Here \(n_{u,v}\) is a dimensionless count, \(n_{u,v}(x)\) is a dimensionless count, and \(\hat p_{u,v}(x)\) is a dimensionless probability. The source states this directly: [PAGE 6] “We can then use the maximum-likelihood estimates for probabilities of events for each matchup, which amounts to taking the ratio of occurrences of the event (say a single, or a strike out) divided by the total number of matchups.” Breakdown regime: if \(n_{u,v}=0\), the estimator is undefined; if \(n_{u,v}\) is small, sampling variance is high. Under a binomial approximation, the standard error of \(\hat p\) is \(\sqrt{p(1-p)/n}\), dimensionless. For \(n=30\), the worst-case standard error is approximately \(0.091\); for \(n=36\), approximately \(0.083\); for \(n=10\), approximately \(0.158\). This formalizes why the paper insists on dense counts for “truth.”

The bipartite graph operator is

\[
G=(U,V,E), \qquad E=\{(u,v): n_{u,v}\ge N\}.
\]

The biclique operator is

\[
N^*(G)=\max\left\{N:\exists U'\subseteq U,\ |U'|=5,\ V'=\bigcap_{u\in U'}\mathcal N(u),\ |V'|\ge 9\right\},
\]

where \(\mathcal N(u)=\{v:(u,v)\in E\}\). The source cites this as the core dense-subgraph construction: [PAGE 6] “We search for the biclique with |V ′| ≥9 and |U′| = 5 that maximizes N”. Breakdown regime: if no such intersection exists, the biclique is empty. The paper reports that for its active-player data, [PAGE 6] “No bicliques exist with at least ϐive pitchers and nine batters with N > 36.”

The inning simulation is a finite stochastic process. Let \(X_t\) be the game state at plate appearance \(t\), including batter index, outs, and base occupancy. Let \(K_\theta(X_{t+1}\mid X_t,S_t)\) be the transition kernel under strategy assignment \(S_t\) and matchup parameter \(\theta\). The expected runs for a strategy \(S\) over an inning horizon \(T\) are

\[
\mu(S)=\mathbb E_\theta[R\mid S]
=\sum_{\omega\in\Omega} R(\omega)
\prod_{t=1}^{T} K_\theta(\omega_t\mid \omega_{<t},S_t),
\]

with units of runs per inning. \(R(\omega)\) is a nonnegative run count; \(\Omega\) is the set of simulated inning paths; \(T\) is dimensionless. The source describes 500,000 simulated innings per strategy and 2345 strategies under the three-pitcher, ten-batter constraint: [PAGE 7] “There exist 2345 different strategies, for these constraints”.

The simulation rules add conditional base-running and double-play operators. Examples from the source include runners advancing on flyouts with probability \(0.0715\), extra-base advancement probability \(0.3356\), successful double-play probability \(0.6892\), and ground-ball advancement probability \(0.25\) [PAGE 8]. These are dimensionless conditional probabilities. The model also states: [PAGE 8] “no errors, wild pitches, or passed balls occur”. That is an explicit model-boundary condition; outside that boundary, the transition kernel is misspecified.

For sparse matchups, the clustering operator uses a feature vector

\[
z_j =
\begin{bmatrix}
P(HR), P(DT), P(S), P(W), P(FO), P(GO), P(K)
\end{bmatrix}^\top,
\]

where \(P(DT)=P(D)+P(T)\) and HBP is ignored. The source says: [PAGE 9] “We lump doubles and triples together and ignore HBP when performing the clustering to prevent the algorithm from building cluster types for rare, and somewhat random, events”. The vector \(z_j\) lies in a probability-coordinate space; if the seven retained probabilities are renormalized, \(\sum_i z_{j,i}=1\); if not, the sum may be less than one because HBP is omitted. The paper does not explicitly state whether renormalization occurs, so that is a gray-zone assumption.

Ward’s method minimizes within-cluster squared error:

\[
\mathcal W(C_1,\dots,C_K)
=
\sum_{k=1}^{K}\sum_{j\in C_k}
\left\|z_j-\bar z_k\right\|_2^2,
\]

with cluster mean

\[
\bar z_k=\frac{1}{|C_k|}\sum_{j\in C_k}z_j.
\]

At each agglomeration step, Ward’s criterion is often written as

\[
\Delta(C_a,C_b)
=
\frac{|C_a||C_b|}{|C_a|+|C_b|}
\left\|\bar z_a-\bar z_b\right\|_2^2.
\]

The distance has dimensionless squared-probability units. The paper selects \(K=15\): [PAGE 11] “The specific number of 15 cluster types was selected based on a comparison of the parallel plot of the 16th cluster with those of the other 15.” Breakdown regime: if two clusters have nearly identical centroids, the 16th cluster may not be identifiable; if cluster covariance differs strongly from Euclidean geometry, nearest-mean assignment may misclassify high-variance matchups.

Sparse matchup classification is a nearest-centroid operator:

\[
c^*(z)=\arg\min_{k\in\{1,\dots,15\}}
\left\|z-\bar z_k\right\|_2.
\]

The assigned cluster then supplies a surrogate probability vector \(\hat p_{c^*}\) for simulation. The source describes this as replacing sparse matchup statistics with cluster statistics: [PAGE 11] “the ‘matchup type’ may be useful to predict the result for a more accurate simulation.”

Validation uses correlation between strategy-level expected runs under cluster surrogates and truth:

\[
\rho
=
\frac{
\sum_{i=1}^{m}
(\mu_i^{\text{cluster}}-\bar\mu^{\text{cluster}})
(\mu_i^{\text{truth}}-\bar\mu^{\text{truth}})
}{
\sqrt{
\sum_{i=1}^{m}
(\mu_i^{\text{cluster}}-\bar\mu^{\text{cluster}})^2
}
\sqrt{
\sum_{i=1}^{m}
(\mu_i^{\text{truth}}-\bar\mu^{\text{truth}})^2
}
}.
\]

\(\rho\) is dimensionless. The source reports: [PAGE 14] “A correlation coefficient of 0.9286 is calculated between these two data sets”. For handedness-only clustering, the source reports: [PAGE 14] “The correlation coefﬁcient of these two data vectors is calculated only to be 0.4666.” Breakdown regime: if all simulated strategy means are constant, variance is zero and correlation is undefined.

A formal context-shift veto can be written with Kullback-Leibler divergence:

\[
D_{\mathrm{KL}}\!\left(p_c \,\|\, \hat p\right)
=
\sum_x p_c(x)\log\frac{p_c(x)}{\hat p(x)},
\]

with units of nats if natural logarithms are used, or bits if base-2 logarithms are used. Here \(p_c\) is the matchup outcome distribution under physical or weather context \(c\). A veto condition is

\[
D_{\mathrm{KL}}\!\left(p_c \,\|\, \hat p\right)>\tau,
\]

or, in run units,

\[
\left|\mu_c(S)-\mu(S)\right|>\epsilon_{\text{runs}},
\]

where \(\epsilon_{\text{runs}}\) is measured in runs per inning. If \(\hat p(x)=0\) but \(p_c(x)>0\), the divergence diverges; smoothing or matchup rejection is required. This is the formal breakdown regime for sparse or context-shifted matchups.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits inside a lineage that begins with classical baseball operations research, passes through handedness heuristics, and arrives at modern clustering plus bipartite-graph mining. The opening case study invokes the lefty-righty convention: [PAGE 1] “the choice certainly tailors to the well-known lefty-righty handedness matchup strategy”. That convention is not merely folklore; it is the historical baseline against which the paper measures improvement. The authors then critique prior handedness adjustment methods, especially Hirotsu and Wright, which adjust average statistics by pitcher-batter dominant-hand combinations [PAGE 1]. The retro-causal genealogical issue is that those earlier methods encode a population-average tendency, while the paper tries to recover matchup-specific exceptions. The authors explicitly motivate this by reference to individual athlete optimization rather than average athlete advice: [PAGE 2] the Jason Gore anecdote is used to show that an average-optimal action may be individually poor.

Scientifically, the paper inherits at least four lineages. First, baseball statistical analysis, including Lindsey’s early operations-research treatment [PAGE 22]. Second, platoon and matchup theory, where handedness is treated as a coarse categorical feature. Third, hierarchical clustering, specifically Ward’s method [PAGE 22]. Fourth, biclique enumeration in bipartite graphs, with references to genome-oriented algorithms [PAGE 22]. The paper’s novelty is the combination: use bicliques to create dense validation sets, then use cluster types to transfer dense knowledge to sparse matchups.

The multi-week traps are structural, not merely statistical. A trap arises when a team generalizes a platoon advantage observed over weeks of regular-season data into a postseason single-inning decision without checking whether the underlying matchup counts are stable. Another trap is temporal drift: player aging, injury, pitch-mix changes, and league adjustment can shift outcome probabilities across weeks. The paper’s active-player filter mitigates some irrelevance but intensifies selection bias because it conditions on who remained active into 2018. Another trap is cluster overfitting: if a cluster mean is dominated by frequent outcomes such as ground outs or fly outs, rare but high-leverage outcomes like home runs or extra-base hits may be underweighted. The paper partially addresses this by separating high-count training matchups from low-count classification matchups, but it still relies on nearest-mean assignment. A final retro-causal trap is the “must-win” framing. The authors restrict postseason case studies to elimination contexts: [PAGE 14] “Since our approach does not yet take into account multi-game scheduling, we look at must-win scenarios only”. That improves relevance for short-term resource usage but obscures longer series-level optimization.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The strategic problem is not only a matchup probability problem; it is a recursive belief problem among managers, players, and future game states. In the paper’s framing, the manager chooses a pitching strategy to minimize expected runs in the current inning. Formally, for a single inning,

\[
S^* = \arg\min_S \mu(S),
\]

subject to pitcher availability and simulation constraints. But a richer recursive model recognizes that the manager also values future innings. Let \(C(S)\) be the continuation cost of using relievers now, measured in future expected runs allowed or lost availability. A multi-stage objective can be written as

\[
S^*
=
\arg\min_S
\left[
\mu(S)
+
\gamma\,\mathbb E\left[C(S)\mid \text{future state}\right]
\right],
\]

where \(\gamma\) is a dimensionless discount or continuation weight. The source hints at this tradeoff when discussing the Astros: [PAGE 21] “If the Astros had been able to tie the game in the bottom of the 9th inning, necessitating extra innings of play, they would have found themselves in a stronger position by not using additional pitchers”.

Crisis habit regression is the tendency to revert to a familiar high-status option under elimination pressure. For example, a manager may reflexively use the best-known reliever because that choice is socially defensible, even if a less conspicuous matchup lowers expected runs. The recursive habit model can be expressed as a bias term:

\[
\tilde U(S)
=
-\mu(S)
-
\gamma\,\mathbb E[C(S)]
-
\beta\,\mathbf 1\{S\text{ deviates from crisis habit}\},
\]

where \(\beta\) is a nonnegative psychological or institutional cost. If \(\beta\) is large, the manager chooses the habitual closer even when the matchup-optimal strategy is better by a small run margin. The paper’s Yankees case study recognizes that the actual choice was not the formal optimum for the whole inning but was close for the observed portion: [PAGE 17] “Optimal real-time decisions would require us to rerun our simulations after each at-bat.”

The counter-trap is the adversarial response. If an opponent believes the manager is trapped by habit, the opponent can construct a lineup or pinch-hitting pattern that punishes the expected deviation. If the manager believes the opponent believes this, the manager may deliberately choose an unconventional matchup. In recursive notation, let \(b_1\) be the manager’s belief about the opponent’s lineup construction, and let \(b_2\) be the manager’s belief about the opponent’s belief about the manager’s habit. The optimal policy then depends not only on matchup probabilities but on the fixed point of these beliefs. The paper does not model this explicitly, but its sparse-matchup clustering provides a possible counter-trap tool: if the opponent expects handedness-based logic, a cluster-based matchup may reveal a hidden favorable type.

The clock variable is multi-layered. It includes the current inning clock, the series clock, and the pitcher-rest clock. The current inning clock is captured by the number of batters remaining before the simulation horizon. The series clock is captured by elimination status: [PAGE 14] “we look at must-win scenarios only”. The pitcher-rest clock is captured by availability and fatigue. The recursive theory of mind therefore requires separating three decisions: what is optimal for this inning, what is optimal for the series, and what is psychologically defensible under crisis. The paper’s model is strongest for the first, partially addresses the second through the resource-conservation discussion, and leaves the third as an implicit managerial constraint.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is required when the paper’s historical matchup model produces a strategy that is physically, biomechanically, or environmentally invalid. The model’s baseline probability vector \(\hat p_{u,v}\) is estimated under implicit historical conditions. The source’s simulation simplifications make this explicit: [PAGE 8] “no errors, wild pitches, or passed balls occur”. Those omissions mean that command failure, defensive misplay, and environmental effects are outside the baseline kernel.

Let \(c\) denote a physical context vector:

\[
c =
\begin{bmatrix}
T, & w, & h, & v, & n_p, & d, & \tau
\end{bmatrix},
\]

where \(T\) is temperature in kelvin, \(w\) is wind speed in meters per second, \(h\) is relative humidity as a dimensionless fraction, \(v\) is pitch velocity in meters per second, \(n_p\) is pitch count as a dimensionless count, \(d\) is rest days in days, and \(\tau\) is biomechanical load in newton-meters or another task-specific torque unit. The conditional matchup distribution is

\[
p_c(x)=P(X=x\mid u,v,c).
\]

If \(p_c\) differs materially from \(\hat p\), the historical estimator is no longer the correct decision operator. A formal veto condition is

\[
D_{\mathrm{KL}}\!\left(p_c \,\|\, \hat p\right)>\tau_{\mathrm{KL}},
\]

where \(\tau_{\mathrm{KL}}\) is a divergence tolerance in nats or bits. Alternatively, in run units,

\[
\left|\mu_c(S)-\mu(S)\right|>\epsilon_{\text{runs}},
\]

where \(\epsilon_{\text{runs}}\) is measured in runs per inning. This is not a toy ratio; it is a conditional expectation comparison.

Physical veto proof proceeds in three steps. First, suppose a pitcher’s velocity distribution is context-dependent: \(v\sim f(v\mid c)\). Lower velocity or altered spin can change the probability of hard contact. Therefore \(p_c(HR)\) and \(p_c(DT)\) may differ from \(\hat p\). Second, suppose biomechanical constraints impose a maximum safe pitch count or torque threshold:

\[
n_p \le n_{p,\max}(d,\text{health}),
\qquad
\tau \le \tau_{\max}.
\]

If a strategy requires \(n_p>n_{p,\max}\) or \(\tau>\tau_{\max}\), the strategy is infeasible regardless of its expected-run score. Third, suppose weather alters ball flight. Wind speed \(w\) and temperature \(T\) can change carry distance; humidity can affect grip and movement. These effects induce a context-shifted pmf \(p_c\). If the shifted expected runs cross a decision threshold, the baseline strategy is vetoed.

The source’s own boundary conditions support this veto logic. The simulation treats strategies as fixed before the inning and does not update after each at-bat: [PAGE 17] “Optimal real-time decisions would require us to rerun our simulations after each at-bat.” A real-time update layer must therefore verify whether the current physical state still lies inside the empirical distribution used to estimate \(\hat p\). If not, the cross-layer veto overrides the historical matchup optimizer. The adjudication rule is: baseline matchup optimization is valid only when \(D_{\mathrm{KL}}(p_c\|\hat p)\le \tau_{\mathrm{KL}}\), physical constraints are satisfied, and weather/biomechanical context lies within the empirical support of the training data. Otherwise, the strategy must be rejected or re-estimated.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Here RLVR is treated as reinforcement learning with verifiable reward and veto constraints. The reward can be negative expected runs allowed, while the veto constraints verify data adequacy, dynamic state consistency, and multi-game resource feasibility. Let a policy \(\pi\) propose a pitching strategy \(S\). The verifiable reward is

\[
r(\pi,S)=-\mu(S)-\gamma\,\mathbb E[C(S)],
\]

with units of runs, and \(\gamma\) dimensionless. A veto indicator \(V_i\in\{0,1\}\) invalidates the policy if any verifiable condition fails. The accepted policy is

\[
\pi^*
=
\arg\max_\pi
\mathbb E[r(\pi,S)]
\quad
\text{subject to}
\quad
V_i=1\ \forall i.
\]

Three counterfactual veto scenarios follow.

1. Sparse-matchup raw-frequency veto. If a matchup has small \(n_{u,v}\), the raw maximum-likelihood estimate \(\hat p_{u,v}\) has high variance. The verifiable condition is

\[
V_1 =
\mathbf 1\left\{
n_{u,v}\ge n_{\min}
\ \text{or}\ 
\|z-\bar z_{c^*}\|_2\le \delta
\right\}.
\]

If \(n_{u,v}<n_{\min}\) and the matchup is not close to a stable cluster centroid, the raw-frequency policy is vetoed. Prediction: in held-out biclique validation, cluster-assigned sparse matchups will preserve strategy rankings better than raw sparse frequencies, and the 15-cluster model will maintain a high correlation with dense truth, consistent with the reported value: [PAGE 14] “A correlation coefficient of 0.9286 is calculated between these two data sets”.

2. Static ex-ante policy veto in dynamic game state. The paper produces full-inning strategies without rerunning after each at-bat: [PAGE 17] “Optimal real-time decisions would require us to rerun our simulations after each at-bat.” Let \(X_t\) be the observed state after at-bat \(t\). A static policy \(S_{\text{static}}\) is vetoed if the posterior-optimal continuation strategy changes materially:

\[
V_2 =
\mathbf 1\left\{
\left|
\mu(S_{\text{static}}\mid X_0)
-
\mu(S_{\text{dynamic}}\mid X_t)
\right|
\le \epsilon_{\text{runs}}
\ \forall t
\right\}.
\]

If the difference exceeds \(\epsilon_{\text{runs}}\), the static policy fails verification. Prediction: dynamic rerunning will reduce expected runs allowed in innings where early at-bats produce high base-out volatility, while static pre-inning optimization will remain useful only when the inning remains near its expected state distribution.

3. Multi-game resource veto. A single-inning optimum may consume a scarce reliever and reduce future availability. The verifiable condition is

\[
V_3 =
\mathbf 1\left\{
\mu(S)
+
\gamma\,\mathbb E[C(S)]
\le
\mu(S')
+
\gamma\,\mathbb E[C(S')]
\right\},
\]

where \(S'\) is an alternative strategy using fewer future resources. If immediate run prevention is smaller than the discounted future cost, the aggressive single-inning policy is vetoed. This is consistent with the paper’s discussion of the Astros: [PAGE 21] “If the Astros had been able to tie the game in the bottom of the 9th inning, necessitating extra innings of play, they would have found themselves in a stronger position by not using additional pitchers”. Prediction: in elimination games with a nontrivial probability of extra innings, policies that conserve high-leverage relievers will have higher series-continuation probability than policies that minimize only current-inning expected runs, even when the current-inning run difference is small.
</RLVR_COUNTERFACTUAL_VETOES>