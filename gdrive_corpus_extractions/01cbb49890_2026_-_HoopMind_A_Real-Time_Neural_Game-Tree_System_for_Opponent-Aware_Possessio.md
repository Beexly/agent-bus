---
source: "2026 - HoopMind A Real-Time Neural Game-Tree System for Opponent-Aware Possession Planning - Gong et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 5
model: deepseek/deepseek-v4.1-flash-1017
words: 8761
---

<NATIVE_REASONING>
We need answer user's prompt: They provided paper pages 1-5 and strict instructions. Need produce structured XML exact sections, >=1000 words depth, no betting lines, no toy equations, formal LaTeX, units, cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need discuss derivation & gray-zone audit >=400 words in THINK_TRACE. Source operators/equations formal LaTeX units page citations breakdown. Retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication physical/biomechanical/weather veto proof, RLVR counterfactual vetoes 3 verifiable scenarios + predictions.

Need infer task? They didn't explicitly ask question beyond drive source. We need analyze paper in specified format. Must obey "ZERO BETTING LINES." Avoid spreads/totals/moneylines/odds. "ZERO TOY EQUATIONS" means don't invent fake ratios. We can write equations from paper and formal derivations, formal LaTeX, SI/information/probability units, assumptions, singularity/breakdown regimes. Need cite exact page markers and verbatim quotes. Need not use betting lines. Need include equations like finite-horizon expectimax V(s,d)=max{EP(s), max_{a∈A(s)}(1−λ_a)V(f(s,a,π_D),d−1)}. Include EP(s)=(1−β_blk(s)) p_make(s) pts(s). Include complexity numbers, pruning table, alignment rates, calibration, AUC, log loss. Units: probabilities dimensionless [0,1]; expected points in points per possession (pts/poss); λ turnover probability per action, dimensionless; depth d in plies; beam k integer; epsilon in points; τ_i reaction/lag seconds; Δt seconds; speed ft/s; distance feet; EP gap points; ECE dimensionless; AUC dimensionless; log-loss nats or bits; parameters 46k; JSON 362 KB; multiply-adds per forward pass; nodes saved percent. Need exact singularity/breakdown regimes: d=0 terminal only, k too small, ε too large, U heuristic non-admissible, λ=1 leads zero value, p_make undefined? Need mention breakdown if λ_a→1, f undefined, π_D out-of-distribution, no public matchup before 2017-18, backcourt heaves excluded, zero-vs-missing score recoding, post-shot leakage, assignment bias. Need adjudicate cross-layer veto: physical/biomechanical/weather veto proof. Since basketball indoor, weather not relevant? Need discuss physical/biomechanical vetoes: player height/weight included, but no fatigue, injury, load, neuromuscular, surface friction, air density? For indoor basketball weather veto mostly not applicable; could veto if arena HVAC changes ball flight? Need be rigorous. "Physical/biomechanical/weather veto proof" means prove veto conditions under which model should be overruled by cross-layer constraints. Need state no betting. Could mention if biomechanical load or injury status unavailable, planner must veto high-drive actions. Weather indoor neutral, but travel/altitude? Need careful.

Need include "RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock." Interpret: in high-pressure clutch, players regress to habits; opponent anticipates and counter-traps; clock pressure. Need connect to paper: clutch FG% drops 47.7 to 43.9, 3PT 36.9 to 31.7; planner recommends weak-side kick 1.24 vs contested pull-up 0.79. Need recursive theory of mind: offense models defense model of offense; coach mode recomputes. Habit regression: player under crisis reverts to contested pull-up; counter-trap: defense hides weak defender, helps off weak side, bait; clock: finite horizon d=2 and 0.25s re-solve; shot clock. Need mention recursive levels: player's habit, defender's expectation, coach's model, opponent's counter-model. But source doesn't include explicit ToM; derive. Need label inference vs source.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage and multi-week traps. Need trace to Reich et al spatial shot charts, Miller et al factorized point process, Franks defensive skill, Cervone EPV, Le ghosting, Skinner shot selection, Seidl play sketching, Buckland game AI, Littman Markov games, Knuth alpha-beta, empirical Bayes. Multi-week traps: leakage via post-shot score, zero vs missing score, assignment bias, time-split leakage, calibration vs AUC, heuristic pruning not admissible, backcourt heave exclusion, 99.9% same scorer not independent validation. Need describe how future deployment can "retrocause" dataset construction? Hmm retrocausal genealogy means historical lineage and traps over multi-week. Need include.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need formal proof perhaps theorem: planner recommendation is admissible only if state s in domain and constraints C_phys, C_bio, C_weather not violated. If veto, override action. Need equations: Veto indicator maybe \mathcal{V}(s,a)=1 if ... Need avoid toy ratios. Use Boolean predicates, not ratios. Could define feasible action set A_feasible(s)=A(s)∩{a: C_phys=...}. Then planner value under veto. Need formal. Need not invent fake ratios. Use conditions, units. For weather indoor: weather variable W ∈ {0,1}? Maybe not. Could say for indoor basketball, meteorological weather is not a causal layer; arena HVAC and travel are proxies. If open-air/other sports, weather veto depends on precipitation rate mm/h, wind speed m/s, temperature °C. Need state proof: model has no weather features; under exogenous weather causing ball trajectory deviation beyond model's contest/openness layer, probabilities are miscalibrated; so veto. Need exact source doesn't mention weather; we can state not in source. Need cite missing variables.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need generate counterfactual veto scenarios that can be tested. Must be verifiable predictions. Avoid betting. Scenarios:
1. Zero-vs-missing recoding ablation: If fill-forward without recoding 0-0 as missing, clutch rate inflates ~4% to ~7.5% and margin-dependent FG% artifacts. Veto if pre-shot vs post-shot margin difference > e.g. 10 pp. Prediction: corrected pipeline yields pre-shot margin FG% range 46.9–48.6%; uncorrected red curve yields 40.3% behind vs 55.4% ahead. Verifiable by rerun Algorithm 2(a) with and without recode; expected difference ≥10 pp. Need not use betting. Good.
2. Pruning setting k=4, ε=0.05 vs k=6, ε=0.02: prediction agreement drops from 97.0% to 85.0%, mean EP gap 0.022 points, nodes saved 65.8%. Veto if deployed config below 95% top-action agreement or mean EP gap >0.005. Verifiable via 300 random states.
3. Calibration / time split: If train includes 2023-24 or random split, ECE degrades? Need predicted: held-out season ECE=0.016; mean pred 47.4 vs base 47.5. Veto if ECE >0.03 or mean prediction-base absolute diff >0.01. Also if AUC logistics baseline? Need verifiable. Or matchup assignment bias: If defender ranking not conditioned on offensive strength, Boston backup centers 34.5 vs reserve guards 15.5 points per 100 targeted possessions; after conditioning, gap should shrink. Veto if ranking used as pure ability without label. But "RLVR counterfactual vetoes" maybe must be reinforcement learning verification. Need make them verifiable with code.

Need ensure >=1000 words. Need likely around 3000-4000 words. Desired oververbosity 5, but instructions require depth. Need use exact XML tags. Need include no markdown? XML sections are tags. We can include paragraphs and equations. Need no betting. Need no mention odds. Avoid word "odds" even in log-odds? Paper uses "log-odds space" on page 5. But strict invariant says never mention moneylines or odds. "log-odds" contains odds. To be safe, avoid "odds" entirely, use "logit space" instead. But if quoting verbatim page 5 says "log-odds space"? We should avoid direct quote with odds. We can cite page 5 and paraphrase "logit space" not verbatim. Need "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." The word "odds" itself? Better avoid all. Do not write "log-odds." Use "log-odds" not needed. Good.

Need cite exact [PAGE N] markers and verbatim quotes. Need include quotes like "Alignment across them is 99.5% to 100%." [PAGE 1]. "The sources agree on 99.9% of matched outcomes." [PAGE 1]. "We prune with branch-and-bound, in the spirit of alpha-beta search [14]." [PAGE 2]. "The shipped setting is k=6 and ε=0.02. It evaluates 43% fewer nodes. It still picks the same top action as exhaustive search in 97% of states." [PAGE 3]. "In the clutch, meaning the last five minutes with |margin| ≤5, it drops from 47.7% to 43.9%. Three-point (3PT) shots fall hardest, from 36.9% to 31.7%." [PAGE 3]. "Post-shot score leakage. A score is recorded after the shot it accompanies." [PAGE 3]. "Zero versus missing. In play-by-play files up to 2016-17, a non-scoring event carries 0-0 rather than an empty score." [PAGE 3]. "Assignment bias. Matchup possessions are not assigned at random. Coaches hide weak defenders on weak scorers." [PAGE 4]. "A contested pull-up three against Boston is worth 0.79 expected points, while driving middle and kicking to the weak-side shooter is worth 1.24." [PAGE 5]. "Reaction time comes from the defender’s matchup difficulty and ranges from 0.10 to 0.34 seconds." [PAGE 5]. "Every shot in the simulator is one in-browser forward pass of ShotNet" [PAGE 1]. "It runs in about 104 multiply-adds, one forward pass per frame in the browser." [PAGE 4]. "10-bin expected calibration error is 0.016" [PAGE 4]. "AUC 0.646" etc. Need exact.

Need "Formal LaTeX, units, page citations, breakdown." In SOURCE_OPERATORS_AND_EQUATIONS, structure:
- Game tuple and assumptions.
- Value equation.
- Terminal payoff.
- Transition f.
- Turnover λ.
- Pruning bound.
- Complexity.
- Data fusion alignment.
- ShotNet metrics.
Need mention units and breakdown regimes.

Need "THINK_TRACE" deep multi-hop derivation & gray-zone audit >=400 words. Need not reveal hidden chain-of-thought? The instruction asks THINK_TRACE. We can provide a reasoned audit, not private chain-of-thought. Should be okay: "multi-hop derivation & gray-zone audit." Need not say "I thought". Provide analysis. Ensure >=400 words. Could be 600-800. Need include derivation from Markov game to MDP, expectimax, pruning, calibration, data fusion, gray-zone. Need exact.

Need "SOURCE_OPERATORS_AND_EQUATIONS" maybe 1000 words? Overall >=1000. Need sections all present. Could be 3500 words.

Need careful with "ZERO TOY EQUATIONS": We can define formal equations only from paper and derived feasibility predicates. Avoid fake ratios. We should not invent ratios like Force/Fatigue. Feasibility predicates okay, not ratios. Use indicator functions. Formal LaTeX with units. Need state assumptions. Need exact singularity/breakdown regimes. For equations, define variables with units. Need maybe mention "probability is dimensionless" not units. "Expected points in points per possession." "log-loss in nats per shot" (if natural log) or bits if log2. Paper doesn't specify base; log-loss values 0.648 likely natural? We can state "nats per shot if natural logarithm; the paper does not specify base." Good.

Need "CROSS_LAYER_VETO_ADJUDICATION" formal proof. We can write:
Let \mathcal{C}_{phys}(s) = 1 iff player load/injury/neuromuscular state within validated envelope; \mathcal{C}_{bio}(s,a)=1 iff action a's required joint torque/acceleration etc. within athlete capacity; \mathcal{C}_{weather}(s)=1 iff environmental variables within indoor/venue domain. Then feasible action set A^\dagger(s)=A(s)∩{a: \mathcal{C}=1}. Planner output a^*=argmax V(s,d) is admissible only if a^*∈A^\dagger(s). If not, veto and choose next best feasible. Proof by calibration: V uses p_make estimated on historical population not conditioned on injury/load; if out of domain, p_make not calibrated; expected points cannot be interpreted; so override. Weather: source has no weather features; indoor basketball weather mostly not a direct variable; if venue changes (humidity/temperature) affect ball/rim/shoe friction, model lacks it. Need not use ratios. Use inequalities with units: e.g., if player's load > baseline + 2 SD or joint torque demand > measured max, veto. But avoid invented thresholds? We can state "operationalized by team medical staff; not estimated by paper." Need "proof" of veto conditions, not empirical proof. Use domain argument.

Need "RECURSIVE_THEORY_OF_MIND" maybe detail:
- Level 0: player habit policy π_habit.
- Level 1: defender model of habit δ[i] and ρ[t,z].
- Level 2: coach model of defender model; planner computes V.
- Level 3: opponent counter-model anticipates planner and hides weak defender, helps off weak side; assignment bias. 
Crisis habit regression: under clutch, FG% drop; 3PT drop; player reverts to contested pull-up (0.79 EP) instead of kick-out (1.24 EP). Clock: 0.25s re-solve, depth 2, 57 leaves, shot clock and game clock. Counter-trap: defense baits habit; helper leaves; weak-side shooter re-priced; if offense uses model, counter-counter. Need discuss recursive ToM limitations: matchup data only 2017-18 onward; no movement tracking; behavior AI not real. The "clock" is both shot clock and computational clock; at 0.25s, depth-limited search; if computation exceeds, fallback to EP(s) (shoot now). Need mention if ε too large, branch cut can lock habitual action; if k too small, counter-trap branch may be pruned. Good.

Need "RETROCAUSAL_GENEALOGY": Historical lineage. Use citations from paper. Need mention "retrocausal" maybe data leakage is a retrocausal trap: future information (post-shot score) leaks backward to pre-shot state. Multi-week traps: one week to reconcile IDs, one week to recode 0-0, one week to subtract shot points, one week to enforce season split, one week to test pruning vs exhaustive, one week to audit assignment bias. Need make it clear.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios with predictions. Need include exact numbers. Maybe scenario 1: Recode-veto. Scenario 2: Pruning-veto. Scenario 3: Calibration/time-split-veto. Each has intervention, observed metric, veto condition, prediction. Need ensure "verifiable" with code. Use exact page citations. Maybe include assignment-bias scenario instead of calibration? Need three. Could include both? Need exactly 3. We can include 3 detailed. Need predictions with thresholds. Use no betting.

Need maybe include "SOURCE_OPERATORS_AND_EQUATIONS" with table? XML text can include LaTeX. No markdown tables maybe okay. Use paragraphs.

Need no mention "spreads, totals, moneylines, odds." Avoid "bet", "line", "over/under". Use "line" only in "lineage"? That's not betting line but word "line" could be okay? To be safe, avoid "betting lines" phrase? We can mention "No wagering constructs are used" but that includes "wagering"? Better not mention. The invariant says never mention spreads, totals, moneylines, or odds. We can avoid those terms entirely. "line" in "lineage" okay? "line" alone not prohibited? But "line" could be ambiguous. Use "lineage" is fine. "moneylines" avoid. "odds" avoid. "spreads" avoid. "totals" avoid. "over/under" avoid. Good.

Need maybe not use word "bet" at all. Good.

Need exact page markers. Use [PAGE 1] etc. The source has pages 1-5. Need cite every section. Good.

Let's draft.

Need begin with XML tags exactly? The answer should include all sections. Could start directly <THINK_TRACE>. Need maybe include no preamble. Good.

Need word count >=1000. Our draft likely 3500. Need ensure THINK_TRACE >=400. We'll write ~700. Need all sections.

Let's outline:

<THINK_TRACE>
Define audit. Multi-hop derivation:
1. Paper treats possession as zero-sum stochastic Markov game G=(S,AO,AD,T,r) [PAGE 2]. Fixing πD yields MDP. Need note finite horizon d.
2. Value recursion. Need explain why expectation at leaf is OK if payoff linear in outcome probabilities; only explicit chance nodes turnovers. Terminal EP includes block probability, make prob, points. Units.
3. Search: A(s)=8 actions, depth 2, 57 leaves; branch-and-bound with optimistic U not admissible; k=6 ε=0.02. Gray zone: 97% agreement, 43.4% nodes saved, mean EP gap 0.001. Non-admissible U can prune optimal branch. Need audit.
4. Data: 4.23M shots, 21 seasons, alignment 99.5-100%, 99.9% outcome agreement. Leakage pitfalls. Need audit: 99.9% agreement not independent, same scorer feed. Post-shot leakage 15.2 pp artifact. Zero vs missing clutch 4 to 7.5.
5. Model: ShotNet metrics; calibration ECE 0.016; AUC 0.646; baseline 0.631/0.639; log-loss 0.648. AUC modest; calibration important. Need audit: public features only; no closest defender distance. 
6. Interactive: 0.25s re-solve, under 1 ms, 104 multiply-adds, 362KB JSON. Need note 0.25s vs under 1ms; "one real-time minute compresses to about one quarter" [PAGE 5]. 
Gray-zone: no weather features, no load/injury, no movement tracking; assignment bias; matchup only 2017-18. Need veto. 
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal definitions. Use LaTeX.
Game:
\[
\mathcal{G}=(\mathcal{S},\mathcal{A}_O,\mathcal{A}_D,T,r)
\]
with T:S×AO×AD→Δ(S), r:S×AO×AD→R. Units r points per possession. πD=(ρ,δ,ι). 
Assumptions A1-A3. 
Value:
\[
V(s,d)=\max\{ EP(s), \max_{a\in A(s)}(1-\lambda_a)V(f(s,a,\pi_D),d-1)\}
\]
d∈N plies, λ∈[0,1], V points per possession. Boundary d=0 returns EP(s). 
Terminal:
\[
EP(s)=(1-\beta_{\mathrm{blk}}(s)) p_{\mathrm{make}}(s) pts(s)
\]
β∈[0,1], p∈[0,1], pts∈{2,3} points per made shot. Expected points per possession. 
Turnover λ_dr=0.06, λ_ps=0.035. Note if λ→1, continuation zero; if λ=0 no turnover. 
Pruning:
U(a,s) optimistic heuristic; cut if U≤Vbest−ε. ε points. k beam. Non-admissible: U not guaranteed ≥ true value; so approximate. 
Complexity: |A(s)|=8, depth 2, 57 leaves. Table I metrics. 
Data:
Alignment rate A = matched shots / total shots? That's a ratio but not toy; it's a rate. Formal okay. Quote. 
Calibration ECE formula maybe:
\[
\mathrm{ECE}=\sum_{b=1}^{10}\frac{|B_b|}{N}\left|\mathrm{acc}(B_b)-\mathrm{conf}(B_b)\right|
\]
dimensionless. Need not invent? ECE is standard; paper says 10-bin ECE. Good.
AUC, log-loss. Units. 
ShotNet architecture: embeddings dims, 96-64-1 MLP, 46k parameters; export 362 KB; 104 multiply-adds. 
Simulator: τ_i ∈ [0.10,0.34] s; Δt=0.25 s; reaction update \hat{x}_i←\hat{x}_i+(1-e^{-Δt/τ_i})(x_{m(i)}-\hat{x}_i). Units: positions ft, τ s, Δt s; coefficient dimensionless. This is from Algorithm 2(b) [PAGE 4]. Speed bounded acceleration; 2.4 ft separation. 
Breakdown regimes:
- d=0: shoot now only.
- k too small or ε too large: top action agreement degrades; table.
- U non-admissible: exactness lost.
- λ=1: branch value zero; λ outside [0,1] invalid.
- πD out of support: no matchup before 2017-18; assignment bias.
- p_make outside calibration: no defender distance, no biomechanical/weather.
- backcourt heaves 0.2% dropped.
- zero/missing score and post-shot leakage.
Need cite pages.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: Reich et al. 2006 spatial shot chart [PAGE 5 ref], Miller et al. 2014 factorized intensities, Franks defensive skill, Cervone EPV, Le ghosting, Skinner shot selection, Seidl play sketching, Buckland game AI, Littman Markov games, Knuth alpha-beta. Explain each contributed operator: spatial zone, EP, defensive skill, ghost defenders, interactive play sketching, game AI stack, Markov game, pruning. 
Retrocausal trap: post-shot score leaks future into pre-shot state; zero-vs-missing corrupts past. Multi-week traps:
Week 1: join keys and 0-0 recoding; inflated clutch 4→7.5 [PAGE 3].
Week 2: subtract shot points; 15.2 pp artifact [PAGE 3-4].
Week 3: time split by season; train ≤2021-22, val 2022-23, test 2023-24 [PAGE 4].
Week 4: calibration vs AUC; ECE 0.016; mean 47.4 vs 47.5 [PAGE 4].
Week 5: pruning vs exhaustive; k=6 ε=0.02; 97% agreement, 0.001 EP gap [PAGE 3].
Week 6: assignment bias; label output when targeted not ability [PAGE 4].
Need mention 99.9% outcome agreement not independent because same official scorer feed [PAGE 3]. 
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Define levels:
L0 habit π_habit. Crisis: clutch FG drop 47.7→43.9; 3PT 36.9→31.7 [PAGE 3]. Player reverts to contested pull-up. 
L1 defender model: δ[i], ρ[t,z], ι[t,q]; reaction time 0.10–0.34s [PAGE 5]. 
L2 coach/planner: V(s,2) re-solved every 0.25s; top-3 branches; example 0.79 vs 1.24 [PAGE 5].
L3 opponent counter-model: hides weak defenders on weak scorers [PAGE 4]; helps off weak side; bait. Counter-trap: leave weak-side shooter open then close late? Need not invent too much. Use source: drive pulls weak-side helper, frees weak-side teammate [PAGE 2]. Defense can counter by not helping or by fake help; model will re-price. 
Clock: shot clock, game clock, computational clock. At 0.25 s search, depth 2. If computation exceeds, fallback EP(s) (shoot now) because Algorithm 1 line 1. If ε too large, cut can preserve habit. If k too small, counter-trap branch pruned. 
Recursive ToM failure: model's πD estimated from behavior, not worst-case; if opponent anticipates, πD shifts; no equilibrium guarantee. Need cite A1 "empirical opponent" [PAGE 2]. 
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Formal veto. Define predicates:
C_phys(s)=1 iff venue playing surface, equipment, ball pressure, lighting, temperature/humidity within validated indoor envelope; C_bio(s,a)=1 iff athlete's load/injury/neuromuscular capacity and joint torque demand within medically cleared envelope; C_weather(s)=1 iff meteorological variables within indoor/closed-roof domain (or for outdoor ports, precipitation/wind/temp within training support). 
Feasible set:
\[
A^\dagger(s)=\{a\in A(s): C_{\mathrm{phys}}(s)=1, C_{\mathrm{bio}}(s,a)=1, C_{\mathrm{weather}}(s)=1\}
\]
If a^*∉A^\dagger, veto and set a^\dagger=argmax_{a∈A^\dagger}V(s,a;d). 
Proof sketch: V is calibrated only on historical distribution D. If C=0, p_make and β_blk are not conditional on that stratum; EP is not a valid expected points. Override. 
Physical: indoor basketball weather not direct; but HVAC, ball pressure, floor friction. Source has biometrics height/weight only [PAGE 4], no load. Thus veto for injury/load. Biomechanical: drive requires acceleration/deceleration; if not cleared, veto drive. Weather: for indoor, C_weather mostly 1; if roof open or extreme, veto. For soccer/hockey ports [PAGE 5], weather is direct and must be added. 
Need cite exact source: "player biometrics" page 1; "shooter’s height and weight" page 4; "movement tracking is not published" page 5. 
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Recode-veto. Intervention: run Algorithm 2(a) with and without recoding 0-0 as missing. Predicted: without recode clutch rate ~7.5% vs ~4%; with post-shot score used, FG% 55.4% for ahead ≥16 vs 40.3% behind ≥16; after subtracting shot points, 46.9–48.6% [PAGE 3]. Veto if any pre-shot margin bin deviates >1.7 pp? Need not. Use exact: veto if uncorrected curve spread >10 pp or clutch rate >6%. Prediction: corrected passes, uncorrected fails. 
Scenario 2: Pruning-veto. Intervention: k=4 ε=0.05 vs k=6 ε=0.02. Predicted: k=4 saves 65.8% nodes but agreement 85.0% and mean EP gap 0.022 points; k=6 saves 43.4%, agreement 97.0%, gap 0.001 [PAGE 3]. Veto if agreement <95% or mean EP gap >0.005 points. Prediction: k=6 passes; k=4 vetoed. 
Scenario 3: Calibration/time-split-veto. Intervention: season split vs random split? Paper uses time split; test 2023-24. Predicted: ShotNet ECE 0.016, mean prediction 47.4% vs base 47.5%, AUC 0.646 vs zone 0.631 and logistic 0.639 [PAGE 4]. Veto if ECE >0.03 or |mean prediction−base|>1 pp or test season touched. Prediction: compliant pipeline passes; random split or post-shot leakage fails by ECE/leakage. 
Need "verifiable" specify rerun make, inspect JSON, compare. 
</RLVR_COUNTERFACTUAL_VETOES>

Need maybe include closing? Not necessary. Ensure exact XML tags. Need avoid too much fluff. Need include quotes. Need no betting terms. Need no "odds." Good.

Need think about "SOURCE_OPERATORS_AND_EQUATIONS" maybe use \operatorname{EP}. Formal. Need mention "SI/information/probability units" explicitly. Include "dimensionless probability," "points per possession," "seconds," "feet," "nats per shot," "bits" for log-loss? The paper doesn't specify log base. We can state both. "AUC and ECE dimensionless." "JSON size in kilobytes (1 KB = 1000 bytes or 1024 bytes; paper says 362 KB, base unspecified)." Good.

Need "exact singularity/breakdown regimes" use "Breakdown regimes" paragraph. Include "If λ_a=1, continuation value is zero; if λ_a∉[0,1], model invalid. If d=0, recursion terminates at EP(s). If U is not admissible and ε>0, branch-and-bound may discard the true optimal branch; table shows empirical cost. If k<number of relevant branches, beam truncation can omit counter-trap branch. If π_D has no support (pre-2017-18 matchup, assignment bias, out-of-distribution opponent), A1 fails. If p_make outside calibration support (no defender distance, biomechanical state, weather), EP not valid." Good.

Need mention "backcourt heaves 0.2% dropped" page 3. "14 zones" page 3. "4.23M shots over 21 seasons" page 1. "3.79M train, 217k validation, 218k test" page 4. "AdamW batch 16384 four epochs" page 4. "46k parameters" page 4. "362 KB JSON" page 4. "104 multiply-adds" page 4. Good.

Need ensure THINK_TRACE includes exact quotes and citations. It can include quotes. Good.

Need maybe mention "single-blind review" not relevant. Fine.

Need be careful "AUC of about 0.60 to 0.68 [9]" page 1. ShotNet 0.646 inside public band. Good.

Need "log-loss 0.648" vs baselines 0.663/0.666. Good.

Need "mean prediction 47.4% against 47.5% base rate." Good.

Need "The shipped setting is k=6 and ε=0.02." Good.

Need "At depth d=2 the exhaustive tree evaluates 57.0 leaf shots on average." Good.

Need "All training happens offline on a GPU. The browser therefore re-solves the tree every 0.25 seconds in well under a millisecond." Page 3. Good.

Need "Reaction time ... ranges from 0.10 to 0.34 seconds." Page 5. Good.

Need "Every shot in the simulator is one in-browser forward pass of ShotNet" page 1. Good.

Need "The whole system is reproducible ... make" page 5. Good.

Need "two data pitfalls easy to miss" page 1. Good.

Need "zero versus missing" quote exact: "In play-by-play files up to 2016-17, a non-scoring event carries 0-0 rather than an empty score." [PAGE 3]. Good. "Filling scores forward then gives margin 0 for most shots. That inflates the rate of “clutch” shots, meaning the last 5 minutes with |margin| ≤5, from about 4% to about 7.5%." [PAGE 3]. Good.

Need "Post-shot score leakage. A score is recorded after the shot it accompanies." [PAGE 3]. "Teams ahead by 16 or more appear to shoot 55.4%, against 40.3% when behind by 16 or more (Fig. 3(b), red)." [PAGE 3]. "The curve flattens to a range of 46.9% to 48.6% across all margin bins (blue)." [PAGE 3]. Good.

Need "Assignment bias. Matchup possessions are not assigned at random. Coaches hide weak defenders on weak scorers." [PAGE 4]. Good.

Need "Boston ... backup centers concede 34.5 points per 100 targeted possessions. Its reserve guards concede 15.5." [PAGE 4]. Good.

Need "In the state shown, a contested pull-up three against Boston is worth 0.79 expected points, while driving middle and kicking to the weak-side shooter is worth 1.24." [PAGE 5]. Good.

Need "The difference between a habitual shot and a better branch becomes a number the player can question." [PAGE 5]. Good quote for recursive ToM.

Need "A coach could use something in between: a fast, visual tool..." [PAGE 1]. Good.

Need "A model that only scores shots after the fact cannot tell a player what to do next." [PAGE 1]. Good for genealogy.

Need "The defense plays a behavioral policy πD estimated from data rather than a worst-case adversary." [PAGE 2]. Good.

Need "Note that U is a heuristic, not a provably admissible bound, so the pruning is approximate." [PAGE 3]. Good.

Need "All training runs offline, so the online system stays light." [PAGE 1]. Good.

Need "Matchup tracking starts in 2017-18" [PAGE 3]. Good.

Need "Backcourt heaves ... 0.2% of attempts, and we drop them everywhere below." [PAGE 3]. Good.

Need "The two sources also agree on 99.9% of matched outcomes, since both come from the same official scorer feed." [PAGE 3]. Good.

Need "The 2023-24 test season, 218k shots, is never touched during development." [PAGE 4]. Good.

Need "10-bin expected calibration error is 0.016" [PAGE 4]. Good.

Need "It runs in about 104 multiply-adds" [PAGE 4]. Good.

Need "The trained network exports to 362 KB of JSON." [PAGE 4]. Good.

Need "Reaction time comes from the defender’s matchup difficulty and ranges from 0.10 to 0.34 seconds." [PAGE 5]. Good.

Need "Substitutions at quarter boundaries follow the real rotation." [PAGE 5]. Good.

Need "One real-time minute compresses to about one quarter." [PAGE 5]. Good.

Need "Any invasion sport with open event data qualifies. Soccer through StatsBomb’s open data and ice hockey through public shot logs are the two we port to next." [PAGE 5]. Good for weather veto? Good.

Need "The interface is explicit about what each number is." [PAGE 5]. Good.

Need avoid "odds" even in "log-odds"; use "logit." If quoting page 5 "log-odds space" avoid. We can paraphrase "combines profiles in logit space" but source says log-odds. Is that okay? It is a mathematical term but contains prohibited "odds"? To be safe, use "logit scale" and cite [PAGE 5] but not quote. Good.

Need no "spread" word? We have "spread" in table? We might need quote "15.2 pp spread from leakage alone" from Fig 3. The invariant says never mention spreads. That's betting spreads. But word "spread" could be interpreted. Avoid using "spread" unless quoting? Better avoid. Use "15.2 percentage-point effect" instead. Good.

Need no "total" word? Avoid. "sum" okay. "Totals" no. "Total shots" maybe "total" word? To be safe, use "number of shots" not "total shots." But "total" not prohibited if not betting? Still avoid. Use "all shots." Good.

Need no "line" word? We have "lineage" and "online." "online" okay? Contains "line" but not betting. Fine. "branch line" no. Avoid "line" alone. "score margin" okay. "margin" not betting? Margin can be score margin, allowed. "spread" avoid. "moneyline" no. "odds" no.

Need "expected points" okay. "points per 100 targeted possessions" is a rate, not betting. Good.

Need final answer only XML. Let's write with clarity. Need ensure each section has enough depth. We can use paragraphs with LaTeX. Need not include markdown headings outside XML. XML tags within text okay. Need escape? Use no special `<` except tags. LaTeX can include `<`? Avoid. Use \le instead of ≤? In text can use ≤. XML okay with ≤. Use `\leq` in LaTeX. Avoid `&`? Use "and" not ampersand. Avoid raw `<` in text. Use `\lt`? In LaTeX use `<` maybe XML parser? Since output likely text, but safe use `\leq`, `\geq`. Avoid `<` in text. Use "less than" instead. Good.

Need include quotes with `|margin| ≤ 5` uses ≤ not `<`. Good.

Need maybe include "d−1" etc. Fine.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The audit begins by separating what the paper actually proves from what it only operationalizes. The possession model is a two-team zero-sum stochastic game \(\mathcal{G}=(\mathcal{S},\mathcal{A}_O,\mathcal{A}_D,T,r)\), as stated on [PAGE 2]. Fixing the defense to an estimated behavioral policy \(\pi_D=(\rho,\delta,\iota)\) turns the game into a finite-horizon MDP for the offense. This is the key derivation: A1 replaces a worst-case adversary with an empirical opponent; A2 pushes contest and block uncertainty into the terminal payoff; A3 truncates search at depth \(d\). The value recursion is therefore the paper’s Eq. (1): shoot-now value versus the best continuation after turnover risk. The terminal payoff is \(EP(s)=(1-\beta_{\mathrm{blk}}(s))\,p_{\mathrm{make}}(s)\,pts(s)\), with \(p_{\mathrm{make}}\) from ShotNet and block probability read from \(\rho\) and \(\delta\). Units matter: \(EP\) is points per possession; \(\beta_{\mathrm{blk}}\), \(p_{\mathrm{make}}\), and \(\lambda_a\) are dimensionless probabilities in \([0,1]\); \(pts(s)\) is 2 or 3 points per made shot.

The first gray-zone issue is that \(U(a,s)\), the optimistic branch-ordering bound, is not admissible. The paper is explicit: “Note that U is a heuristic, not a provably admissible bound, so the pruning is approximate” [PAGE 3]. Thus the 97.0% top-action agreement at \(k=6,\varepsilon=0.02\) is an empirical result over 300 random states, not a theorem. The second gray-zone issue is depth. At \(d=2\), the exhaustive tree evaluates 57.0 leaf shots on average [PAGE 2]. The paper stops there because deeper search cost more browser time without changing the selected action [PAGE 2]. That is a deployment compromise, not a claim that depth 2 captures all counterfactual branches.

The data layer has two plausible-looking but corrupting paths. The first is “Zero versus missing”: in play-by-play files up to 2016-17, a non-scoring event carries 0-0 rather than an empty score, and filling scores forward inflates the clutch rate “from about 4% to about 7.5%” [PAGE 3]. The second is post-shot score leakage: “A score is recorded after the shot it accompanies” [PAGE 3]. Used as-is, teams ahead by 16 or more appear to shoot 55.4%, against 40.3% when behind by 16 or more; after subtracting the shot’s own points, the range flattens to 46.9% to 48.6% [PAGE 3]. This is a retrocausal encoding trap: future information is written back into the pre-shot state. The 99.9% outcome agreement across the two feeds is reassuring but not independent validation, because both come from the same official scorer feed [PAGE 3].

The model audits cleanly on calibration but only modestly on discrimination. ShotNet reports AUC 0.646, log-loss 0.648, and 10-bin ECE 0.016 on the held-out 2023-24 season [PAGE 4]. The zone-rate baseline is AUC 0.631 and the logistic baseline is 0.639 [PAGE 4]. The paper’s own framing is correct: public-feature shot models sit around 0.60 to 0.68 AUC [PAGE 1], and the paper’s contribution is fused features, time-split evaluation, and interactive deployment, not a large AUC gain. The calibration is the load-bearing property because Eq. (1) consumes probabilities, not rankings [PAGE 4]. A planner built on poorly calibrated probabilities can still rank actions plausibly while producing invalid expected-point differences.

The gray-zone audit also flags missing cross-layer state. The paper includes shooter height and weight among nine numeric features [PAGE 4], but it does not include load, injury status, neuromuscular fatigue, joint torque capacity, shoe-surface friction, or venue environmental state. Movement tracking is not published; defender paths are behavior AI driven by the same estimates [PAGE 5]. Matchup data starts in 2017-18 [PAGE 3], and assignment is biased because “Coaches hide weak defenders on weak scorers” [PAGE 4]. Therefore the planner’s \(V(s,d)\) is valid only inside the empirical distribution where \(\pi_D\), \(p_{\mathrm{make}}\), and \(\beta_{\mathrm{blk}}\) were estimated. Outside that domain, the correct response is not to reinterpret the number but to veto the action or widen the model.

The final audit point is the recursive one. The paper’s example on [PAGE 5] makes the conflict concrete: “a contested pull-up three against Boston is worth 0.79 expected points, while driving middle and kicking to the weak-side shooter is worth 1.24.” That is not merely a shot-quality comparison. It is a model of a habit, a model of the defense’s help behavior, and a model of the defense’s model of the offense. If the defense anticipates the kick-out, the empirical \(\pi_D\) shifts; if the offense anticipates that shift, the value tree must be re-solved. The paper re-solves every 0.25 seconds [PAGE 3], but the opponent’s counter-adjustment is not necessarily inside the training distribution. That is the central recursive gray zone: the planner is calibrated against historical behavior, not against an adversary who is actively modeling the planner.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s formal object is a finite-horizon, two-team zero-sum stochastic game
\[
\mathcal{G}=(\mathcal{S},\mathcal{A}_O,\mathcal{A}_D,T,r),
\]
where \(T:\mathcal{S}\times\mathcal{A}_O\times\mathcal{A}_D\to\Delta(\mathcal{S})\) is the transition kernel and \(r:\mathcal{S}\times\mathcal{A}_O\times\mathcal{A}_D\to\mathbb{R}\) is the possession reward in points per possession [PAGE 2]. The defense is not treated as a worst-case adversary. Under A1, “The defense plays a behavioral policy \(\pi_D\) estimated from data rather than a worst-case adversary” [PAGE 2]. That policy is factored as \(\pi_D=(\rho,\delta,\iota)\): \(\rho[t,z]\) is what team \(t\) concedes in zone \(z\), \(\delta[i]\) is how attackable defender \(i\) is, and \(\iota[t,q]\) is how hard team \(t\) defends in quarter \(q\) [PAGE 2]. Fixing \(\pi_D\) leaves a Markov decision process for the offense, so planning is well defined [PAGE 2].

A2 places randomness in the terminal payoff and in explicit turnover chance nodes. The paper states that contest and block uncertainty enter the terminal payoff, and because that payoff is linear in outcome probabilities, taking expectations at the leaf loses nothing [PAGE 2]. The only explicit chance nodes are turnovers: a drive succeeds with probability \(1-\lambda_{\mathrm{dr}}\), and a pass succeeds with probability \(1-\lambda_{\mathrm{ps}}\), with \(\lambda_{\mathrm{dr}}=0.06\) and \(\lambda_{\mathrm{ps}}=0.035\) taken from development-season turnover rates [PAGE 2]. A3 limits search to depth \(d\) and expands only the subset \(A(s)\subset\mathcal{A}_O\) shown in Fig. 2; SHOOT is available in every state, and every cut-off leaf is a real terminal [PAGE 2].

The value operator is
\[
V(s,d)=\max\left\{EP(s),\ \max_{a\in A(s)}(1-\lambda_a)\,V\!\left(f(s,a,\pi_D),d-1\right)\right\},
\]
with \(d\in\mathbb{N}\) measured in plies, \(\lambda_a\in[0,1]\) dimensionless, and \(V\) in points per possession [PAGE 2]. The boundary condition is \(V(s,0)=EP(s)\). The terminal payoff is
\[
EP(s)=\left(1-\beta_{\mathrm{blk}}(s)\right)\,p_{\mathrm{make}}(s)\,pts(s),
\]
where \(\beta_{\mathrm{blk}}(s)\in[0,1]\) is the block probability read from \(\rho\) and \(\delta\), \(p_{\mathrm{make}}(s)\in[0,1]\) is the ShotNet forward pass adjusted by openness and contest, and \(pts(s)\in\{2,3\}\) is points per made shot [PAGE 2]. The transition \(f(s,a,\pi_D)\) is the defensive-response operator: a drive moves the ball 8 to 10 feet toward the rim, tightens the on-ball defender, and pulls in the weak-side helper; a pass moves the ball in 0.9 seconds and every defender recovers toward its mark [PAGE 2]. Those distances are in feet and that time is in seconds, as stated on [PAGE 2].

The search complexity is explicit. The action set has \(|A(s)|=8\): one shoot, three drives, and four passes [PAGE 2]. At depth \(d=2\), the exhaustive tree evaluates 57.0 leaf shots on average [PAGE 2]. Branch-and-bound is applied “in the spirit of alpha-beta search” [PAGE 2]. Algorithm 1 sorts children by an optimistic bound \(U(a,s)\), expands at most \(k\) children per node, and cuts when
\[
U(a,s)\leq V_{\mathrm{best}}-\varepsilon,
\]
where \(V_{\mathrm{best}}\) and \(\varepsilon\) are in points per possession [PAGE 3]. The bound is not admissible; the paper says so directly: “Note that U is a heuristic, not a provably admissible bound, so the pruning is approximate” [PAGE 3]. Table I reports the measured cost over 300 random states. At \(k=4,\varepsilon=0.05\), nodes saved are 65.8%, top-action agreement is 85.0%, and mean EP gap is 0.022 points. At \(k=5,\varepsilon=0.02\), the corresponding values are 55.0%, 91.3%, and 0.008 points. At the shipped setting \(k=6,\varepsilon=0.02\), nodes saved are 43.4%, agreement is 97.0%, and mean EP gap is 0.001 points [PAGE 3]. The paper’s summary is exact: “The shipped setting is k=6 and ε=0.02. It evaluates 43% fewer nodes. It still picks the same top action as exhaustive search in 97% of states” [PAGE 3].

The data-fusion operators are also quantified. The system fuses five public sources into “one per-shot dataset of 4.23M shots over 21 seasons” with “Alignment across them is 99.5% to 100%” [PAGE 1]. The join key is (game, player, quarter, min-left, sec-left), and across 21 seasons the match rate is 99.5% to 100% [PAGE 3]. The two sources “agree on 99.9% of matched outcomes, since both come from the same official scorer feed” [PAGE 3]. Court zones are the 14 combinations of range and side labels: restricted area, three paint sectors, five mid-range sectors, and five three-point sectors; backcourt heaves are 0.2% of attempts and are dropped everywhere below [PAGE 3]. Matchup tracking starts in 2017-18 [PAGE 3]. Profiles use empirical-Bayes shrinkage with prior strength 100 attempts [PAGE 3]. Defender ranking is points allowed per 100 partial possessions when targeted, shrunk, over at least 400 possessions [PAGE 3]. Boston’s backup centers concede 34.5 points per 100 targeted possessions, while its reserve guards concede 15.5 [PAGE 4].

ShotNet’s operator is an embedding MLP. It learns four embeddings: shooter 16-d, defending team 8-d, zone 6-d, and action group 6-d, concatenated with nine numeric features: \(x\), \(y\), distance, a 3PT flag, quarter, seconds left, pre-shot margin, shooter height, and shooter weight [PAGE 4]. A 96-64-1 MLP sits on top, about 46k parameters, trained with AdamW, batch size 16384, four epochs, on 3.79M shots up to 2021-22; validation is 217k shots from 2022-23; test is 218k shots from 2023-24, never touched during development [PAGE 4]. The trained network exports to 362 KB of JSON and runs in about 104 multiply-adds per browser forward pass [PAGE 4]. Table II gives AUC 0.646 and log-loss 0.648 for ShotNet, against AUC 0.631 and log-loss 0.663 for the league zone rate, and AUC 0.639 and log-loss 0.666 for logistic regression on numeric features [PAGE 4]. The 10-bin expected calibration error is 0.016, and mean prediction is 47.4% against a 47.5% base rate [PAGE 4]. Log-loss is reported here without a stated logarithm base; if natural logarithms are used, its unit is nats per shot; if base-2 logarithms are used, its unit is bits per shot. AUC and ECE are dimensionless.

The online simulator adds a lag operator. Algorithm 2(b) updates each defender’s perceived mark by
\[
\hat{x}_i\leftarrow \hat{x}_i+\left(1-e^{-\Delta t/\tau_i}\right)\left(x_{m(i)}-\hat{x}_i\right),
\]
where \(\hat{x}_i\) and \(x_{m(i)}\) are positions in feet, \(\tau_i\) is a lag in seconds, and \(\Delta t\) is the frame step in seconds [PAGE 4]. Reaction time “ranges from 0.10 to 0.34 seconds” [PAGE 5]. The browser re-solves the tree every 0.25 seconds, and the paper says the solve is “well under a millisecond” [PAGE 3]. One real-time minute compresses to about one quarter [PAGE 5]. The simulator separates defenders closer than 2.4 ft and uses bounded acceleration [PAGE 4].

Breakdown regimes are exact and should be treated as validity boundaries. If \(d=0\), the recursion collapses to \(EP(s)\) and no continuation is evaluated. If \(\lambda_a=1\), the continuation value is zero by multiplication; if \(\lambda_a\notin[0,1]\), the probabilistic interpretation is invalid. If \(k\) is too small or \(\varepsilon\) too large, the beam or cut can remove the true best branch; Table I quantifies this as 85.0% agreement and 0.022-point mean EP gap at \(k=4,\varepsilon=0.05\) [PAGE 3]. If \(U\) is non-admissible and \(\varepsilon>0\), branch-and-bound can discard an optimal branch; the paper does not claim exactness [PAGE 3]. If \(\pi_D\) has no support in the state, A1 fails; examples include pre-2017-18 matchup states, assignment-biased defender rankings, and opponents outside the training distribution [PAGE 3, PAGE 4]. If \(p_{\mathrm{make}}\) is outside its calibration support, \(EP\) is not a valid expected-point quantity; missing defender-distance tracking, missing biomechanical state, and missing venue-environment state are the main such regimes [PAGE 4, PAGE 5]. If the score state is built with post-shot leakage or with 0-0 treated as observed, the margin feature is corrupted: the clutch rate shifts from about 4% to about 7.5%, and the apparent margin effect reaches 15.2 percentage points before correction and flattens to 46.9% to 48.6% after correction [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is visible in the paper’s own citations. Reich et al. model shot charts spatially, and later work splits shot intensity into spatial bases; the paper uses “the same zone view of the court” [PAGE 1, PAGE 5]. Franks et al. estimate defensive skill, Cervone et al. estimate expected possession value, and Le et al. learn “ghost” defenders by imitation; the paper describes those three as closest in goal to its planner, but all three need private optical tracking [PAGE 1]. Skinner derives optimal shot thresholds analytically, and the paper uses “the same expected-points idea” but places it inside a searchable action tree tied to one named opponent [PAGE 2]. Seidl et al. let a user sketch plays against a learned defense, the same interactive goal as coach mode, again from private tracking [PAGE 2]. Buckland supplies the game-AI stack of finite-state machines, influence maps, and steering behaviors; the paper keeps perception delay, steering, and simplified execution [PAGE 2]. Littman supplies the Markov-game framing, and Knuth and Moore supply alpha-beta pruning [PAGE 2, PAGE 5].

The retrocausal genealogy is not a metaphor here; it is a data-construction warning. A post-shot score is recorded after the shot it accompanies, so using it as a pre-shot feature writes the future into the past [PAGE 3]. The symptom is a strong and steady trend: teams ahead by 16 or more appear to shoot 55.4%, against 40.3% when behind by 16 or more; subtracting the shot’s own points flattens the curve to 46.9% to 48.6% [PAGE 3]. That is a 15.2-percentage-point artifact generated by encoding, not by basketball. The second retrocausal trap is the 0-0 missingness convention in files up to 2016-17. Filling scores forward treats non-scoring events as observed zeros, which gives margin 0 for most shots and inflates the clutch rate from about 4% to about 7.5% [PAGE 3]. The giveaway is “a jump at the 2017/2018 file boundary” [PAGE 3].

The multi-week trap sequence is therefore longer than a single modeling sprint. Week 1 is identity and missingness: join shots to play-by-play on (game, player, quarter, min-left, sec-left), recode 0-0 as missing, and fill forward only after recoding [PAGE 4]. Week 2 is temporal leakage: subtract the points of the shot itself before constructing pre-shot margin [PAGE 4]. Week 3 is split discipline: train on seasons up to 2021-22, validate on 2022-23, and hold out 2023-24 untouched [PAGE 4]. Week 4 is calibration rather than ranking: check 10-bin ECE, mean prediction against base rate, and log-loss, not only AUC [PAGE 4]. Week 5 is search validation: compare pruned search against exhaustive depth-2 search on random states, because \(U\) is not admissible [PAGE 3]. Week 6 is assignment-bias audit: matchup possessions are not random, because “Coaches hide weak defenders on weak scorers,” so a defender ranking measures output when targeted, not pure ability [PAGE 4]. Each week can look successful while preserving a hidden defect; the paper’s contribution is that it records both the defect and the correction.

There is also a lineage trap in the 99.9% agreement statistic. The two feeds agree on 99.9% of matched outcomes because both come from the same official scorer feed [PAGE 3]. That is internal consistency, not independent ground truth. A downstream analyst who treats 99.9% as external validation will over-trust the fused margin, block, and assist fields. The correct retrocausal reading is narrower: the fusion is highly aligned on identifiers and scorer-recorded outcomes, but it is not an independent measurement of the underlying game. This is precisely why the paper reports the two pitfalls rather than only the alignment number.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer can be written as a stack of policies. Level 0 is the player’s habit policy \(\pi_{\mathrm{habit}}\): under crisis, the player regresses to the action that has worked or felt familiar. Level 1 is the defender’s model of that habit, encoded through \(\delta[i]\), the attackability of defender \(i\), and through \(\rho[t,z]\), what team \(t\) concedes in zone \(z\) [PAGE 2]. Level 2 is the coach/planner’s model of the defender’s model: the search evaluates \(V(s,d)\) against \(\pi_D\), prices the weak-side branch, and displays the top three branches in coach mode [PAGE 5]. Level 3 is the opponent’s counter-model of the planner: if the defense expects the kick-out, it can change help depth, recover earlier, or bait the drive. The paper does not solve a full equilibrium; A1 explicitly uses an empirical opponent rather than a worst-case adversary [PAGE 2].

Crisis habit regression is measurable in the paper’s own fusion. In the clutch, defined as the last five minutes with \(|margin|\leq5\), FG% drops from 47.7% to 43.9%; three-point shots fall from 36.9% to 31.7% [PAGE 3]. The recursive reading is that the player’s habit policy becomes more rigid precisely when the value of switching branches is highest. The paper’s Boston example makes the gap concrete: a contested pull-up three is worth 0.79 expected points, while driving middle and kicking to the weak-side shooter is worth 1.24 [PAGE 5]. The difference is not a moral judgment about the player; it is a branch-price difference that the coach mode can display. The paper’s own sentence is the right frame: “The difference between a habitual shot and a better branch becomes a number the player can question” [PAGE 5].

The counter-trap is the defense’s answer to that questioning. A drive moves the ball 8 to 10 feet toward the rim, tightens the on-ball defender, and pulls in the weak-side helper, which frees every weak-side teammate and re-prices their shots [PAGE 2]. A pass moves the ball in 0.9 seconds, and every defender recovers toward its mark [PAGE 2]. If the defense knows the planner prefers the kick-out, it can keep the helper home longer, fake help, or recover on the second pass. The model’s counter is to re-solve every 0.25 seconds [PAGE 3], but the empirical \(\pi_D\) may not contain the counter-adjusted behavior. This is where recursive theory of mind becomes a validity problem: the planner is calibrated against a defense that is not yet modeling the planner.

The clock layer has three distinct clocks. The game clock and shot clock constrain the possession; the computational clock constrains the browser search. The paper’s implementation re-solves the tree every 0.25 seconds and reports the solve as “well under a millisecond” [PAGE 3]. The first line of Algorithm 1 sets \(V_{\mathrm{best}}\leftarrow EP(s)\), the shoot-now value, before any expansion [PAGE 3]. That is the natural fallback when the clock or computation fails: take the terminal action rather than an unfinished branch. But the fallback also preserves habit if \(EP(s)\) is the habitual shot. A too-large \(\varepsilon\) or too-small \(k\) can cut the counter-trap branch before it is priced; Table I shows that at \(k=4,\varepsilon=0.05\), top-action agreement falls to 85.0% and mean EP gap rises to 0.022 points [PAGE 3]. Thus the recursive loop is bounded by three failure modes: crisis habit regression at Level 0, counter-trap adaptation at Level 3, and computational truncation at the search layer.

The healthy recursive design is not to pretend the planner has a perfect theory of mind. It is to expose the branch prices, label the defender ranking as output when targeted rather than pure ability [PAGE 4], and re-solve as the play develops. The paper’s coach mode lists the top three branches with expected points and draws the best one on the court [PAGE 5]. That makes the recursive model auditable: a player can see whether the recommended branch is a genuine counter to the defense or merely a model artefact caused by assignment bias, stale \(\pi_D\), or a pruned branch.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto is a feasibility filter on the planner’s action set. Define three predicates. Let \(C_{\mathrm{phys}}(s)\in\{0,1\}\) be 1 only when the venue, ball, rim, lighting, surface friction, and equipment state are inside the validated indoor-basketball envelope used to estimate \(p_{\mathrm{make}}\) and \(\beta_{\mathrm{blk}}\). Let \(C_{\mathrm{bio}}(s,a)\in\{0,1\}\) be 1 only when the athlete’s load, injury status, neuromuscular capacity, and the action’s required acceleration, deceleration, and joint-torque demand are within medical and biomechanical clearance. Let \(C_{\mathrm{weather}}(s)\in\{0,1\}\) be 1 only when meteorological or venue-environment variables are inside the training support; for a closed indoor arena this is usually satisfied, but for open-roof or outdoor ports it is a direct constraint. Then the admissible action set under veto is
\[
A^\dagger(s)=\left\{a\in A(s): C_{\mathrm{phys}}(s)=1,\ C_{\mathrm{bio}}(s,a)=1,\ C_{\mathrm{weather}}(s)=1\right\}.
\]
If the unconstrained planner returns \(a^\star=\arg\max_{a\in A(s)}V(s,d)\) and \(a^\star\notin A^\dagger(s)\), the correct operation is to veto \(a^\star\) and choose
\[
a^\dagger=\arg\max_{a\in A^\dagger(s)}V(s,d).
\]
The proof obligation is calibration, not aesthetics. \(V(s,d)\) is an expected-points functional estimated on a historical distribution \(\mathcal{D}\). If \(C_{\mathrm{bio}}(s,a)=0\), then \(p_{\mathrm{make}}(s)\) and \(\beta_{\mathrm{blk}}(s)\) are not conditioned on that biomechanical stratum; the expectation is therefore not identified for that action. The same argument applies to \(C_{\mathrm{phys}}\) and \(C_{\mathrm{weather}}\). The veto is not a claim that the model is wrong everywhere; it is a claim that the model’s output is outside its support and cannot be used as a decision value.

The paper supplies the physical-layer inputs only partially. It fuses player biometrics, and ShotNet uses shooter height and weight among its nine numeric features [PAGE 1, PAGE 4]. It does not include load, soreness, previous injury, or in-game fatigue. It also does not publish movement tracking; defender paths are behavior AI driven by the same estimates, “because movement tracking is not published” [PAGE 5]. Therefore a biomechanical veto must be external to the paper’s pipeline. A drive that requires a hard deceleration and plant is not automatically admissible because its modeled \(EP\) is high; if the athlete is not cleared for that demand, the action must be removed before search. The planner can still price the next-best pass or shoot action inside the feasible set.

The weather-layer adjudication is asymmetric between sports. For indoor basketball, meteorological weather is not a direct variable in the paper’s feature set, and the paper does not claim to model it. The relevant physical proxies are arena temperature, humidity, ball pressure, and floor friction, none of which appear in the nine numeric features [PAGE 4]. If those proxies are outside the venue envelope, the model’s shot probabilities are not validated. For the paper’s proposed ports to soccer and ice hockey [PAGE 5], weather becomes a first-class layer: precipitation rate in mm per hour, wind speed in m/s, and surface temperature in degrees Celsius can change ball or puck trajectories and traction. The same veto logic applies: if the weather state is outside training support, the action value is not identified. The correct response is to restrict \(A^\dagger(s)\), not to add an unsupported correction factor.

The physical-layer veto also covers court geometry and data exclusions. The paper uses 14 zones and drops backcourt heaves, which are 0.2% of attempts [PAGE 3]. If a live state falls into an unmodeled zone, the zone embedding is outside its training support. If the state is a backcourt heave, the paper’s own preprocessing excludes it, so the planner should not silently extrapolate. The veto is therefore both external and internal: external for biomechanical and venue state, internal for zones, matchup coverage, and assignment bias. The planner’s output is admissible only when the state lies inside the learned support and the athlete is physically cleared for the selected action.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: the missingness and leakage veto. Intervention: rerun Algorithm 2(a) twice, once with the paper’s recoding of 0-0 as missing and subtraction of the shot’s own points, and once with the naive fill-forward plus post-shot score. Verifiable prediction: the naive run will reproduce the paper’s failure signatures, with the clutch rate inflated “from about 4% to about 7.5%” and the apparent margin effect reaching 55.4% for teams ahead by 16 or more versus 40.3% for teams behind by 16 or more [PAGE 3]. The corrected run will flatten that curve to 46.9% to 48.6% [PAGE 3]. Veto rule: reject the pipeline if any margin-bin FG% range exceeds 3 percentage points after correction, or if the clutch flag rate exceeds 6% without an explicit competition-state explanation. Prediction: the corrected pipeline passes; the naive pipeline fails by a large margin. This is verifiable by rebuilding the dataset with make and inspecting the margin-bin table.

Scenario 2: the pruning-agreement veto. Intervention: run the pruned search at \(k=4,\varepsilon=0.05\) and at \(k=6,\varepsilon=0.02\) on the same 300 random states used in Table I. Verifiable prediction: the aggressive setting will save 65.8% of nodes but agree with exhaustive depth-2 search on only 85.0% of top-level actions, with a mean EP gap of 0.022 points; the shipped setting will save 43.4% of nodes, agree on 97.0%, and produce a mean EP gap of 0.001 points [PAGE 3]. Veto rule: reject a deployed search configuration if top-action agreement is below 95% or if mean EP gap exceeds 0.005 points on the audit set. Prediction: \(k=6,\varepsilon=0.02\) passes; \(k=4,\varepsilon=0.05\) is vetoed. This is verifiable because Algorithm 1 and the exhaustive comparator are both specified, and the state sample and metrics are reported.

Scenario 3: the calibration and time-split veto. Intervention: evaluate ShotNet on the held-out 2023-24 season under the paper’s season split, then repeat with a random split or with any 2023-24 data touched during development. Verifiable prediction: the compliant run will report AUC 0.646, log-loss 0.648, 10-bin ECE 0.016, and mean prediction 47.4% against a 47.5% base rate [PAGE 4]. A leaky random split or a post-shot margin feature will improve apparent discrimination while degrading calibration or inflating the margin effect. Veto rule: reject the model if ECE exceeds 0.03, if the absolute difference between mean prediction and base rate exceeds 1 percentage point, or if the test season appears in training. Prediction: the compliant season-split model passes; the leaky variant is vetoed even if its AUC rises. This is verifiable from the exported JSON, the test-season predictions, and the reported calibration bins.
</RLVR_COUNTERFACTUAL_VETOES>