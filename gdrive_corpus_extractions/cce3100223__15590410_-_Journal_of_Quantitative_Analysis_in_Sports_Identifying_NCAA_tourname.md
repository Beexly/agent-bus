---
source: "[15590410 - Journal of Quantitative Analysis in Sports] Identifying NCAA tournament upsets using Balance Optimization Subset Selection.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 15
model: deepseek/deepseek-v4.1-flash-1017
words: 7834
---

<NATIVE_REASONING>
We need answer user wants deep analysis of the paper with exact XML sections and >=1000 words. Need obey no betting lines, no odds etc. Need mention source pages and exact quotes. Need formal LaTeX equations units assumptions singularities. Need not invent toy ratios. Need all exact sections. Need perhaps no mention spreads/totals/moneylines/odds at all. We can mention paper references Las Vegas point spread? Invariant says never mention spreads totals moneylines odds. So avoid quoting that. Avoid odds word. Need careful: source has "betting", "wager", "Las Vegas point spread", "odds" maybe if citing? Don't cite those. Can say excluded proprietary market inputs. No betting line.

Need produce 6 XML sections. Need >=1000 words total, THINK_TRACE >=400. We can do 2000-3000 words. Need cite exact [PAGE N] markers and verbatim quotes. Need formal equations, units. Source operators: BOSS equation M(G)=sum max{K,R}; KS K; relative R; MIP equations; pyth? Maybe include because source has rating. Need formal LaTeX with units/assumptions and breakdown regimes. Explain units: KS sup norm dimensionless in [0,1]; R dimensionless ratio but if denominator zero singular; M sum dimensionless; BOSS objective. Gini importance not necessarily probability? Extra-trees feature importance dimensionless. Seed difference integer. Accuracy proportion. Expected counts dimensionless counts.

Need address "gray-zone audit". Need ret causal genealogy. Recursive theory of mind: crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication: physical/biomechanical/weather veto proof. This is sports research paper about NCAA basketball; no players? Need adapt. Physical/biomechanical/weather veto proof for basketball contexts: travel, injury, pace, venue, weather (not relevant indoor), etc. But paper future work mentions travel/injury. Need not give betting advice. Need protect invariant no betting lines. We can say no wagering.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable veto scenarios + predictions. Need design counterfactual tests: if leakage removed (classifier all years) correct selections drop from 10 to 8 [PAGE 11-12]. If select 4 per year accuracy drops 25%; if 11/12 seeds not better than weighted random; if τ changes? Need verifiable predictions.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. Interpret as model behavior under pressure? Need map to paper: habit regression = low-seed "giant killer" heuristics; counter-trap = overfitting to historical upset profile; clock = selection Sunday cutoff/no tournament stats. Need multi-week traps? This might be from broader prompt (sports frontier foundry). Need tailor to NCAA upset paper. "multi-week traps" maybe historical leakage, epoch drift, bracket composition. Need describe.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage. Matching methods Rubin, propensity, BOSS; extra-trees; Gini; Pomeroy; ESPN giant killers; Kaggle. Multi-week traps maybe 13-year backtest. Need cite pages. Need mention not causal inference? BOSS borrowed from observational studies.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. For basketball: BOSS uses game stats only, ignores injury status, travel distance, weather indoor, biomechanics fatigue, fouls. It includes personal fouls per possession, etc. Veto proof: any physical/weather factor not in 15 features cannot be adjudicated by BOSS; external layer can veto selection if injury/travel/venue. Need cite future work [PAGE 13] "distance teams have to travel" and "injury status". Need exact quote. Also "no tournament game statistics" [PAGE 3]. Need adjudicate: BOSS is a statistical similarity selector, not a physical model. If physical layer contradicts, veto? The prompt asks "Physical/biomechanical/weather veto proof." We can state BOSS has no physical/biomechanical/weather operators; proof by feature list. Weather for indoor basketball mostly not relevant, except travel/disruption not included. Need not mention betting.

Need "ZERO BETTING LINES": avoid words "odds", "spread", "moneyline", "totals", "betting", "wager". Need avoid source has "Las Vegas point spread" quote. Do not mention "odds". Need avoid "random weighted selection" is okay; "weighted random" not betting. "Expected number" okay. Avoid "probability of winning" okay. "seed" okay.

Need maybe mention source pages in each section. Need "verbatim quotes" with exact [PAGE N]. Ensure quotes are exact from source. Let's pick short quotes:

PAGE 1: "Of the 26 selected games, 10 (38.4%) were actual upsets" exact.
PAGE 3: "we define an upset as a team seeded 13, 14, or 15 winning a game in the round-of-64" exact. Also "no 16-seed has ever won a round-of-64 game" exact.
PAGE 3: "All raw data was obtained from TeamRankings.com ... as of Selection Sunday ... (so no tournament game statistics are included in the data)." Exact? It says "All raw data was obtained from TeamRankings.com (TeamRankings 2015) and are obtained as of Selection Sunday for each year (so no tournament game statistics are included in the data)." We'll quote fragment.
PAGE 4: "there are 2115−1 possible combinations" source formatting weird (2^115 -1). We can quote "Trying every combination of statistics is infeasible". 
PAGE 5: list feature. Page 5 has 1-4? Actually page 4 has features 1-4 and page 5 5-15. Need cite.
PAGE 6: equations K, R, M. Quote? "The Kolmogorov-Smirnov statistic measures the maximum vertical distance between two empirical distributions." exact.
PAGE 6: "We then find group G with size |G| = 3 such that M(G) is minimized." exact maybe formatting.
PAGE 7: Algorithm 1. Quote "The final selections are the two match-ups that are most selected by the chosen combinations." exact? PAGE 7.
PAGE 8: Table 1 and Table 2. Quote "we selected 10 out of the 18 possible upsets that we could have selected correctly." exact? Page 8 yes.
PAGE 11: "This could potentially cause data leakage" exact. Also "This led to us selecting 8 of 26 games correctly (compared to 10 using all the games as described above)." exact.
PAGE 11: "Selecting four teams each year resulted in 13 of 52 correct selections" exact.
PAGE 11: "the accuracy of the model for the 11 and 12 seeded games was comparable to that expected by weighted random selection." exact? Page 11 yes.
PAGE 12: "our technique was better over the given time period. However, their approach has a variance of 0.669..." maybe.

Need formal equations:
- Pomeroy pyth: pyth = AdjO^10.25 / (AdjO^10.25 + AdjD^10.25). Units: AdjO, AdjD points per 100 possessions; exponent dimensionless; pyth dimensionless [0,1]. Singular if both zero? AdjO and AdjD nonnegative; denominator zero only both zero; if AdjD=0 and AdjO>0 pyth=1. But maybe include not central.
- KS: K(f1,f2,V)=max_{v∈V}|F1(v)-F2(v)|. Units dimensionless; range [0,1]; assumption empirical CDFs; breakdown if V empty or f empty.
- R: R(f1,f2)= | mean(f1)-mean(f2)| / mean(f2). Units: same numerator/denominator cancel; denominator mean(f2) must nonzero; breakdown if mean(f2)=0; sign? absolute. Actually equation denominator is (1/|f2|) sum g∈f2 g; not absolute. If mean f2 negative? Values are ordinal ranks positive, so positive. R can exceed 1. Need state.
- M(G)=Σ_{x∈X} max{K(T_i,G_i), R(T_i,G_i)}. Units dimensionless; lower better; singular if G_i mean zero? For ordinal ranks no. Breakdown if T or G empty; if all covariates uninformative and distributions identical M=0 but no unique.
- BOSS MIP: min Σ y_i; constraints (21b)-(21i). Need include some constraints maybe not all? We can include key objective and constraints. Need formal LaTeX with units. The MIP variables z, T_i,j, beta. Need not replicate all, but enough. "β = Σ α_c / |T|" source says constant relates size of treatment to control; Actually equation 21h Σ α_c = β|T|. In text beta = Σ α_c/|T|. If |G|=3, β |T|=3. Need caution: source says β = ∑ α_c/|T| but in constraints uses β|T|. This is odd. Use as source. Need state β dimensionless if α and |T| counts; but β|T| counts. If beta = |G|/|T| dimensionless. Equation 21h sum α = β|T|. Units: counts.
- Algorithm 1 tolerance τ integer count 1..20; P_y set; N_{S,y} integer count 0..3? Actually n_S,y ∈ {0,1,2,3}; N sum across years. Need include formula: P_y = {S ∈ C(S,4): N_{S,y} ≥ N*_y - τ}. Units: count of correct selections. Breakdown if tie? Source tie never occurred. In Algorithm line 9 uses > not ≥? Text says ≥. Source has "N S,y ≥ N*y −τ" and Algorithm line "N_s,y > N*_y - τ". Note inconsistency! Need gray-zone audit mention. Good.

- Expected random selection equations: Eq 7, 8. Maybe include because formal. Units counts. Singularity: denominator 4n_y - x_sy? If zero? n_y is total upsets prior; x_sy number games seed s has won before y. If n_y=0? denominators zero. For early years maybe? If no historical upsets, weighted selection undefined. Also G_y denominator if zero. Need mention.

Need "exact singularity/breakdown regimes." For each important operator mention. Eg KS when f1/f2 empty; R when mean f2=0; M when any G_i empty or covariate sum zero; BOSS MIP when |T| zero or β|T| not integer; random expectation when n_y=0 or G_y=0; pyth when AdjO=AdjD=0; classifier feature importance if no trees or no splits. Also BOSS enumeration combinatorial: C(|C|,3) huge; breakdown when control pool large, MIP required.

Need ">=1,000-word depth" likely final answer can be ~2500 words. Need include exact XML tags only? User says exact XML sections. We should output only XML? Probably include sections exactly. No preamble? Maybe include all tags. Need ensure THINK_TRACE >=400 words. Count not exact but enough. We can write 500+ words.

Need not mention "betting lines" at all? Invariant says never mention spreads totals moneylines or odds. If I say "no betting line" includes "betting" but not "betting line"? It says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. It doesn't forbid word betting? But safer avoid all betting-related terms. Avoid "wager". Avoid "Las Vegas". Avoid "market". Avoid "sportsbook". Use "proprietary point-margin inputs" maybe not.

Need not mention "odds" even "odds ratio". Avoid. Use "probability", "likelihood", "accuracy".

Need maybe mention "random weighted selection" okay; "weighted random" not betting.

Need source citations exact [PAGE N]. Use [PAGE 1], etc.

Need "DRIVE SOURCE" maybe cite paper. We can say "Dutta, Jacobson, Sauppe (2017)".

Need not use bullet? Fine.

Need answer structure:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit. Discuss:
- The paper's target: identify round-of-64 upsets for seeds 13-15, not 16; two selections per year; 2003-2015; 10/26 correct.
- Multi-hop chain: raw TeamRankings stats -> ordinal rank differences -> extra-trees Gini importance -> 15 features -> C(15,4)=1365 BOSS runs selecting 3 each -> ensemble/tolerance τ -> two picks -> audit vs random and Lopez-Matthews.
- Gray-zone: data leakage: classifier trained all years 1998-2015 including target years; later tests 8/26 when excluding target year, 2/10 for 2011-2015 when pre-target only. Thus headline 10/26 is optimistic.
- Small sample: 26 picks; 10 correct; variance high; 4 years zero; 2 of those had zero actual upsets. 10/18 possible max. Accuracy by seed: 13:6/14, 14:3/8, 15:1/4. 
- Algorithm inconsistency: text says P_y = {S: N_{S,y} ≥ N*_y - τ}; pseudo-code line 9 uses >; minor but reproducibility gray. τ selected using target prior years; τ constant from 2009 onward. Hyperparameter tuned on backtest can overfit.
- Random baseline: expected 4.42 weighted, 3.26 uniform; technique 10; 2.92/3.94 SD. But variance technique 4.667 vs random 3.66; so mean lift but instability.
- Upset definition: 13-15 only, not 11/12. 16 excluded. For 11/12, comparable to weighted random; suggests signal specific.
- Need not overclaim causation. BOSS selects similarity, not causal effect. 
- Cross-layer omitted variables: injury, travel, weather, venue, pace etc. Future work notes.
- "clock": as of Selection Sunday no tournament stats; no within-tournament updating.
- Multi-week traps: training on full dataset leakage; backtest horizon; fixed two picks even years zero/three upsets; threshold selection.
- Audit: exact equations and singularities. Maybe cite.
Need >=400 words. We can aim 700.

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX:
pyth formula with units.
Ordinal rank definition maybe: r_{t,s} = average rank for ties; d_{g,s}=r_{lower,s}-r_{higher,s}. Units rank. Not fake ratio? It's source. 
Extra-trees: feature importance \mathcal{I}_j via Gini; dimensionless. No formula in source, but can state variable.
KS eq (2), R eq (3), M eq (4). Include assumptions, singularities.
BOSS MIP objective and constraints. Include β, α, z, T_i,j; objective dimensionless. Need maybe "source calls it MILP" [PAGE 13].
Algorithm ensemble: N_{S,y}=Σ_{y'<y} n_{S,y'}, P_y = {S: N_{S,y} ≥ N*_y - τ}; units count. Note pseudocode >.
Random expectation Eq (7)-(8); maybe include only E formula and mention variance; units counts; singularities n_y=0, G_y=0.
Accuracy stats: \bar X=10/13, S^2=0.359, s=0.599 [PAGE 8]. Units count per year.
Breakdown regimes.
Page citations and quotes. Need mention exact quote "Of the 26 selected games, 10 (38.4%) were actual upsets" [PAGE 1]. "The Kolmogorov-Smirnov statistic measures the maximum vertical distance between two empirical distributions." [PAGE 6]. "We then find group G with size |G| = 3 such that M(G) is minimized." [PAGE 6]. "This could potentially cause data leakage" [PAGE 11]. 
Need keep not too long but detailed.

<RETROCAUSAL_GENEALOGY>
Lineage: Rubin matching 1973/1980; Rosenbaum-Rubin propensity 1983; Diamond-Sekhon genetic matching; BOSS Nikolaev 2013; Sauppe complexity 2014. Extra-trees Geurts 2006; Gini Breiman 1984; Pomeroy ratings; ESPN Giant Killers; Kaggle Lopez-Matthews. Multi-week traps: historical backtest data from 1998-2015; target 2003-2015; training all years leakage; treatment group built from 1998-2000 for 2001; τ selected per year; constant from 2009. "Multi-week traps" maybe "data leakage across seasons; changing NCAA rules/pace; conference tournament data excluded; feature definitions from TeamRankings change; seed definition 13-15; fixed two picks; ties; small n." Need include exact quotes maybe "there are 2115−1 possible combinations" [PAGE 4] but weird. Use "Trying every combination of statistics is infeasible" [PAGE 4]. "The earliest year used was 2001 because detailed data for years prior to the 1997–1998 season were unavailable" [PAGE 6]. That is exact? Page 6: "The earliest year used was 2001 because detailed data for years prior to the 1997–1998 season were unavailable from TeamRankings.com and forming a treatment group requires historical upsets..." Good. 
Need maybe mention "extra-trees classifier was trained using games from 1998 to 2015 rather than training the classifier to identify features for each year separately" [PAGE 5]. Good.

<RECURSIVE_THEORY_OF_MIND>
Need map "crisis habit regression vs counter-trap vs clock." Define:
- Crisis habit regression: under uncertainty, analysts fall back to seed heuristic (higher seed wins; 13 more likely than 15). Paper observes picks favor stronger seeds: 13-seed 14 times, 14 eight, 15 four [PAGE 8]. This is rational but can blunt model. 
- Counter-trap: reacting to past upsets by overfitting 15-feature similarity and τ; data leakage; variance; 11/12 failure. The model "self-identifies" but can overfit small data. Need cite "difficult to optimize the parameters" [PAGE 13] and "some of the parameters chosen might not be optimal, but rather happened to perform slightly better" [PAGE 13].
- Clock: Selection Sunday cutoff; no tournament game stats; fixed two picks per year despite 0-3 actual upsets. Clock creates blind spot: no within-tournament injury/availability updates. 
Need "counter-trap vs clock" maybe: if you update after games, leakage; if you don't, stale. Need recursive theory of mind: model anticipates opponent? Not relevant. But we can frame "what does the model think the bracket committee/opponent knows?" It uses ordinal ranks and seed only in outcome label; no opponent modeling. 
Need maybe mention "two teams most frequently selected" ensemble. Tie never occurred [PAGE 7]. Need cite.
Need not overdo.

<CROSS_LAYER_VETO_ADJUDICATION>
Need physical/biomechanical/weather veto proof. State BOSS has no physical layer; features are box-score/possession stats [PAGE 4-5, 13]. It cannot prove injury, fatigue, travel, weather. Future work: "distance teams have to travel" and "injury status" [PAGE 13]. Weather indoor not in model; if arena roof/weather travel disruption, external veto. Biomechanical: personal fouls per possession, steals etc are proxies but not load/kinematics. Veto proof: if a key player injury or travel disruption not captured, model's similarity score remains unchanged; therefore its selection cannot be adjudicated as robust. Need exact quote "Additional match-up statistics to consider could include statistics such as the distance teams have to travel for each game or the injury status of each team at the time of the game." [PAGE 13]. Good. "All raw data... as of Selection Sunday... no tournament game statistics" [PAGE 3]. That proves no within-tournament physical updates. 
Need "biomechanical" proof: the only biomechanical-ish features are personal fouls per possession/defensive play, steals, rebounds, etc; no load, acceleration, jump count, fatigue. Weather: indoor basketball, but travel and schedule disruption not included. Cross-layer veto: BOSS output should be vetoed if external layer says key injury/travel/venue/altitude? Basketball altitude maybe. But paper no weather. 
Need "physical/biomechanical/weather veto proof" maybe prove by absence: feature set \mathcal{S} has 15 variables; none are weather or biomechanical load. The model cannot output a veto; we as auditor impose veto. Need define veto predicate: V=1 if key player unavailable, travel > threshold, schedule congestion, arena disruption; then final pick rejected regardless of M(G). But no fake ratios. Use formal predicate maybe not fake ratio. Use boolean. Need say not in source; audit-level decision rule. 
Need avoid betting. Good.

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. Need describe counterfactual experiments and predicted outcomes based on paper. Use exact numbers. 
1. Leakage veto: retrain extra-trees excluding target year and all future years; paper reports 8/26 vs 10/26 [PAGE 11]. Prediction: headline accuracy falls to 8/26=30.8%; if only pre-target for 2011-2015, 2/10 vs 4/10 [PAGE 11-12]. Veto claim of 38.4% generalization. Verify by reproducing.
2. Seed-scope veto: apply same method to 11/12 seeds with three picks; paper reports 10.67 correct vs expected 12.71 weighted; not better [PAGE 11]. Prediction: if signal is real, should exceed weighted random; it doesn't. Veto generality to all upsets. 
3. Fixed-cardinality/τ overfit veto: select four per year; 13/52=25%, marginal 3/26=11.5% [PAGE 11]. Prediction: adding next-best picks degrades sharply; if true signal, marginal should remain above random baselines (weighted expected per two picks ~0.34/year; for 26 picks ~4.42). Actually 3/26 marginal 11.5% vs weighted random 4.42/26=17%? Wait weighted expected 4.42 over 26 picks = 17.0%. Uniform 3.26/26=12.5%. Marginal 11.5% is below weighted and slightly below uniform. This is a strong veto. Need compute: 3/26=0.1154. Weighted random expected 4.42/26=0.17; uniform 3.26/26=0.125. So marginal not above random. Prediction: next-best selection loses signal. 
Could also use τ constant from 2009; if τ changed, output changes. But need 3. Use these three. Add predictions with exact pages. 
Need "RLVR" maybe Reinforcement Learning from Verifiable Rewards? We can say verifiable counterfactual tests. 
Need not mention betting. Good.

Need final answer only XML. Need ensure word count >=1000. Will be lengthy. Need avoid any "spread" or "odds" etc. The word "spread" might appear in "horizontal spread" from paper. Invariant says never mention spreads. Avoid "spread" entirely. Use "dispersion" not spread. Avoid "totals" word? "totals" maybe not. Avoid "moneyline". Avoid "odds". Avoid "betting". Avoid "wager". Avoid "Las Vegas". Avoid "point spread". Good.

Need be careful with "random weighted selection" includes "weighted" not "odds". fine.
Need mention "Kolmogorov-Smirnov" okay.
Need exact quotes with "PAGE". Need verbatim quote must be exact. Let's verify quotes:

- PAGE 1: "Of the 26 selected games, 10 (38.4%) were actual upsets" yes.
- PAGE 3: "we define an upset as a team seeded 13, 14, or 15 winning a game in the round-of-64" yes (paper says "In this paper, we define an upset as a team seeded 13, 14, or 15 winning a game in the round-of-64"). Good.
- PAGE 3: "so no tournament game statistics are included in the data" yes.
- PAGE 4: "Trying every combination of statistics is infeasible" yes? Page 4: "Trying every combination of statistics is infeasible, as there are 2115−1 possible combinations." Good.
- PAGE 5: "The extra-trees classifier was chosen for its resistance to overfitting" yes? Page 4 actually says "The extra-trees classifier was chosen for its resistance to overfitting (Geurts et al. 2006)" PAGE 4. Good.
- PAGE 5: "The decision to train the extra-trees classifier on games from 1998 to 2015 instead of only on games from 1998 to the year for which upsets were being identified was made due to the limited quantity of available historical data." PAGE 5. Good.
- PAGE 6: "The Kolmogorov-Smirnov statistic measures the maximum vertical distance between two empirical distributions." yes.
- PAGE 6: "We then find group G with size |G| = 3 such that M(G) is minimized." The text: "We then find group G with size |G| = 3 such that M(G) is minimized." yes.
- PAGE 7: "The final selections are the two match-ups that are most selected by the chosen combinations." yes? Page 7: "The final selections are the two match-ups that are most selected by the chosen combinations." Good.
- PAGE 8: "we selected 10 out of the 18 possible upsets that we could have selected correctly." yes.
- PAGE 11: "This could potentially cause data leakage" yes.
- PAGE 11: "This led to us selecting 8 of 26 games correctly (compared to 10 using all the games as described above)." yes.
- PAGE 11: "Selecting four teams each year resulted in 13 of 52 correct selections" yes.
- PAGE 11: "the accuracy of the model for the 11 and 12 seeded games was comparable to that expected by weighted random selection." yes.
- PAGE 13: "some of the parameters chosen might not be optimal, but rather happened to perform slightly better on the small amount of data we had." yes? Page 13: "This means that some of the parameters chosen might not be optimal, but rather happened to perform slightly better on the small amount of data we had." Good.
- PAGE 13: "Additional match-up statistics to consider could include statistics such as the distance teams have to travel for each game or the injury status of each team at the time of the game." yes.

Need include "PAGE 8" for variance? Eq 5-6 page 8: \bar X = 10/13 ≈0.769; S^2 ≈0.359; s≈0.599. Good.

Need "singularity/breakdown regimes" exact. Let's craft with formal definitions and units.

Potential issue: "pyth = AdjO10.25" formatting from source is AdjO^10.25. Need write \mathrm{pyth} = \frac{\mathrm{AdjO}^{10.25}}{\mathrm{AdjO}^{10.25}+\mathrm{AdjD}^{10.25}}. Units: AdjO/AdjD points per 100 possessions; exponent makes odd units but dimensionless ratio if both same units; pyth dimensionless. Assumption positive. Breakdown if denominator zero. But the paper says "pythagorean winning percentage" and "expected fraction" [PAGE 2]. Good.

BOSS MIP objective: \min \sum_{i\in X} y_i. Variables y_i = max(K_i,R_i) but linearized. Constraints. Need include β. Units: α binary; |T| count; β = |G|/|T| dimensionless; β|T| count. z_i,j counts; T_i,j counts; constraints 21d/e differences of proportions; y_i dimensionless. Breakdown if |T|=0, if β|T| not integer in 21h, if mean of T_i zero in 21f/g. Also if covariates ordinal with ties. Good.

Need mention "M(G)" has units dimensionless because KS and R dimensionless. But R denominator mean of T_i? Actually R(T_i,G_i) denominator mean of T_i? Source eq (3) denominator is mean of f2; in M(G) max{K(T_i,G_i), R(T_i,G_i)}. It doesn't specify order? It says R(Ti,Gi). Eq 3 R(f1,f2) denominator mean f2. So denominator mean G_i. If G_i mean zero undefined. Since ordinal ranks positive, not zero. Good.

Need "K" range [0,1] if empirical CDFs. Good.

Need "random expectation equation" maybe simplified:
E[U_{[y1,y2]}] = \sum_y \sum_{s∈{13,14,15}} P_y(s) (x_{s,y}/G_y)
where P_y(s)=... Eq 10. Units count. Singular if n_y=0, G_y=0, 4n_y-x_{s,y}=0. Need not include full Eq 7? But user asked formal equations. Include enough.

Need "accuracy" maybe 10/26. Units proportion. 
Need "Algorithm tolerance" formula. Good.

Need careful "τ" units: integer count of correct selections; P_y set of feature subsets; N*_y max count. If τ=20 can include all subsets; if τ negative? no. Breakdown if τ too large: P_y includes all subsets, ensemble becomes frequency over all combos; if N*_y < τ, threshold negative includes all. Actually they choose 1-20. If all N_S,y =0, N*=0, P_y={S: N_S,y ≥ -τ} all. Then two most frequent. Might be okay. But breakdown if tie. Source says tie never occurred [PAGE 7]. 
Need mention "Algorithm line 9 uses strict > while text uses ≥" gray zone. Good.

Need "multi-hop derivation" maybe in THINK_TRACE: Step1 stats ordinal rank difference; Step2 feature selection; Step3 BOSS; Step4 ensemble; Step5 evaluation. Good.

Need not include "SOURCE_OPERATORS_AND_EQUATIONS" too huge. Let's draft.

Potential final length maybe 3000 words. That's okay. Desired oververbosity 5. User demands depth. We'll produce.

Need ensure XML tags exactly as specified. No markdown? Inside XML, use LaTeX. Fine.

Need avoid invalid XML due to < or > inside text. In XML, raw < > problematic. But user wants XML sections. We can use LaTeX with \le and \ge, avoid raw < >. But we may need quotes. Use "less than" etc. For mathematical inequalities use \le, \ge. Avoid raw ampersands. Avoid `<` except tags. Avoid `>` except tags. In text, "greater than" words. Good. Need escape? We can use \lt? Use LaTeX \le \ge. For "|G|=3" fine. For "C(15,4)" fine. Avoid `&`. Use "and". For quotes with "≥" use \ge. In XML, "≥" is okay unicode. Use unicode instead of raw. Fine. Avoid "&" in text; use "and". 
Need maybe use "PAGE 1" etc.

Need no raw "<" in "less than". Use "below". 
Need no raw ">" in "greater than". Use "above" or \gt? Use \ge. Good.

Need include equations with braces; fine. 
Need no `<!` etc.

Let's write.

Need maybe mention "RLVR" without defining? fine.

Need word count. THINK_TRACE >400. Let's ensure.

Let's compose final.

Potential issue: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I must not include "random selection based on historical frequency" maybe okay. Avoid "weighted random selection" okay. Avoid "odds" word. Avoid "point spread". Avoid "market". Avoid "wagering". Good. The source quote "Of the 26 selected games..." no betting. Good.

Need maybe mention "expected number of correct selections" not "odds". fine.

Let's write final with exact tags.

Need maybe include "verbatim quotes" exactly. Use quotation marks. Ensure no alterations. For PAGE 5 quote long; exact? "The decision to train the extra-trees classifier on games from 1998 to 2015 instead of only on games from 1998 to the year for which upsets were being identified was made due to the limited quantity of available historical data." Yes. 
For PAGE 4 "Trying every combination of statistics is infeasible" exact. 
For PAGE 6 "The Kolmogorov-Smirnov statistic measures the maximum vertical distance between two empirical distributions." exact. 
For PAGE 8 "we selected 10 out of the 18 possible upsets that we could have selected correctly." exact. 
For PAGE 11 "Selecting four teams each year resulted in 13 of 52 correct selections" exact. 
For PAGE 13 quote exact. 
Need if source uses "2115−1" not "2^115−1"; avoid quote with weird. 
Need "PAGE 11" quote "This could potentially cause data leakage" exact. Good.

Let's final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is Dutta, Jacobson, and Sauppe’s 2017 paper on using Balance Optimization Subset Selection (BOSS) to identify NCAA round-of-64 upsets. The multi-hop derivation is: (1) define an upset narrowly as a 13-, 14-, or 15-seed winning a round-of-64 game, excluding 16-seeds because “no 16-seed has ever won a round-of-64 game” [PAGE 3]; (2) convert team statistics to ordinal ranks and then to within-game rank differences [PAGE 4]; (3) train an extra-trees classifier on historical round-of-64 games to rank 115 match-up statistics by Gini importance and retain the top 15 [PAGE 4–5]; (4) for every 4-statistic subset of those 15, run BOSS to select three historical-similar match-ups [PAGE 5–6]; (5) ensemble the 1,365 BOSS outputs by selecting the two games most frequently chosen by historically high-performing statistic subsets [PAGE 6–7]; and (6) evaluate against random selection and a published logistic model.

The headline result is cleanly stated: “Of the 26 selected games, 10 (38.4%) were actual upsets” [PAGE 1]. That is 10 correct out of 26 fixed picks across 2003–2015. The gray-zone audit is more important than the headline. First, the classifier is trained on 1998–2015 rather than only on pre-target years; the authors admit, “This could potentially cause data leakage” [PAGE 11]. They also report that excluding the target year gives “8 of 26 games correctly (compared to 10 using all the games as described above)” [PAGE 11]. For 2011–2015 only, using only pre-target games gives 2 of 10 correct versus 4 with full-data training [PAGE 11–12]. Thus the 38.4% figure is not a pure out-of-sample estimate.

Second, the sample is tiny. The 13-year sequence has 10 correct selections, sample mean 10/13, sample variance about 0.359, sample standard deviation about 0.599 [PAGE 8]. The technique’s variance across years is 4.667, while weighted random selection has variance 3.66 [PAGE 8, PAGE 10]. The mean lift is real relative to the stated baselines—10 versus expected 4.42 weighted or 3.26 uniform [PAGE 10]—but the variability is large. The authors themselves note that in four years they got zero correct, though two of those years had zero actual upsets, and they selected at least one upset correctly in nine of the eleven years that had at least one actual upset [PAGE 8]. They also state, “we selected 10 out of the 18 possible upsets that we could have selected correctly” [PAGE 8]. That is a better denominator for evaluating the fixed-two-pick design than 26, because many years simply did not contain two eligible upsets.

Third, there is an algorithmic gray zone: the text defines \(P_y=\{S: N_{S,y}\ge N^*_y-\tau\}\) [PAGE 6], while Algorithm 1 line 9 uses a strict inequality \(N_{s,y}\gt N^*_y-\tau\) [PAGE 7]. This is a reproducibility issue, though probably small when counts are integers. The tolerance \(\tau\) is tuned from 1 to 20 on prior years, and the authors note that “some of the parameters chosen might not be optimal, but rather happened to perform slightly better on the small amount of data we had” [PAGE 13]. A constant \(\tau\) from 2009 onward is suggestive but not proof of stability.

Fourth, scope matters. When the same method is applied to 11- and 12-seeded games with three picks, the authors report that “the accuracy of the model for the 11 and 12 seeded games was comparable to that expected by weighted random selection” [PAGE 11]. That is a scope veto: the signal is claimed for 13–15 seeds, not for all upsets. When four picks per year are made, “Selecting four teams each year resulted in 13 of 52 correct selections” [PAGE 11], a drop from 38% to 25%, with only 3 additional correct selections from 26 additional picks. The marginal rate is about 11.5%, below both the weighted-random and uniform-random baselines over the full set. This suggests the first two picks are where the model concentrates signal and that “next-best” picks decay quickly.

The causal interpretation must also be restrained. BOSS is borrowed from observational-study matching; it selects a control group with good covariate balance to a treatment group [PAGE 5–6]. It does not estimate a causal effect of any statistic on upset probability. It is a similarity selector. The paper is explicit that it uses BOSS “to identify three match-ups that are similar to historical upsets” [PAGE 4]. That is a description, not a causal claim.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s formal core begins with rating aggregation. Pomeroy’s pythagorean winning percentage is given as
\[
\mathrm{pyth}=\frac{\mathrm{AdjO}^{10.25}}{\mathrm{AdjO}^{10.25}+\mathrm{AdjD}^{10.25}},
\]
where AdjO and AdjD are adjusted offensive and defensive efficiencies in points per 100 possessions [PAGE 2]. The exponent 10.25 is dimensionless; pyth is a dimensionless fraction. Assumptions: AdjO and AdjD are nonnegative and not both zero. Breakdown: if AdjO = AdjD = 0, the denominator vanishes; if AdjD = 0 and AdjO is positive, pyth = 1; if AdjO = 0 and AdjD is positive, pyth = 0. This equation is background, not the selector.

The match-up construction uses ordinal ranks rather than raw statistics because “Relative ranking allows teams from different years to be compared while accounting for the way that the league as a whole may change” [PAGE 4]. For game \(g\), statistic \(s\), lower-seeded team \(L\), and higher-seeded team \(H\), the match-up covariate is
\[
d_{g,s}=r_{L,s}-r_{H,s},
\]
where \(r\) is the ordinal rank with ties assigned the average rank [PAGE 4]. Units are rank positions, not physical units. The sign encodes which team has the better rank. The 15 retained covariates are listed on [PAGE 4–5], beginning with Effective Possession Ratio and ending with Average 2nd Half Margin.

Feature importance comes from an extra-trees classifier trained with 100,000 trees and \(\sqrt{115}\) features sampled per split [PAGE 4]. Gini importance is dimensionless. The classifier is used only for feature ranking: “None of the decision trees generated by the extra-trees classifier are being used in any way to select potential upsets” [PAGE 5]. Assumption: historical upsets and non-upsets are exchangeable enough for feature ranking. Breakdown: if there are too few upsets, importance estimates are unstable; the authors acknowledge limited data [PAGE 5].

BOSS uses the Kolmogorov–Smirnov statistic
\[
K(f_1,f_2,V)\equiv \max_{v\in V}|F_1(v)-F_2(v)|,
\]
where \(F_1,F_2\) are empirical distribution functions over value set \(V\) [PAGE 6]. \(K\) is dimensionless and lies in \([0,1]\) when the empirical CDFs are proper. Assumptions: nonempty samples and nonempty \(V\). Breakdown: if \(f_1\) or \(f_2\) is empty, or \(V\) is empty, the statistic is undefined. The paper notes, “The Kolmogorov-Smirnov statistic measures the maximum vertical distance between two empirical distributions” [PAGE 6].

Because the KS statistic ignores horizontal displacement, the paper adds the relative difference
\[
R(f_1,f_2)\equiv
\frac{\left|\frac{1}{|f_1|}\sum_{g\in f_1}g-\frac{1}{|f_2|}\sum_{g\in f_2}g\right|}
{\frac{1}{|f_2|}\sum_{g\in f_2}g}.
\]
This is dimensionless because numerator and denominator have the same units. Assumption: the denominator mean is nonzero. Breakdown: if the control or treatment mean is zero, \(R\) is undefined or infinite; because the covariates are positive ordinal ranks, exact zero is unlikely, but near-zero denominators make \(R\) unstable. \(R\) can exceed 1. The balance measure is
\[
M(G)=\sum_{x\in X}\max\{K(T_i,G_i),R(T_i,G_i)\},
\]
where \(T\) is the treatment group, \(C\) the control pool, \(G\) the selected control group, and \(X\) the covariate set [PAGE 6]. \(M(G)\) is dimensionless; lower is better. The paper states, “We then find group G with size |G| = 3 such that M(G) is minimized” [PAGE 6]. Assumptions: \(T\) and \(G\) are nonempty for every covariate; the control pool is large enough to contain three units. Breakdown: if a covariate has zero control mean, \(R\) fails; if the control pool has fewer than three units, BOSS is infeasible.

The appendix gives the mixed-integer linear programming form:
\[
\min \sum_{i\in X} y_i
\]
subject to empirical-distribution and relative-difference constraints [PAGE 13–14]. Variables include binary \(\alpha_c\) for inclusion of control \(c\), cumulative counts \(z_{i,j}\), treatment counts \(T_{i,j}\), and \(\beta=\sum_{c\in C}\alpha_c/|T|\) [PAGE 14]. Units: \(\alpha_c\) is binary; \(z_{i,j}\) and \(T_{i,j}\) are counts; \(\beta\) is dimensionless; \(\beta|T|\) is a count. Assumptions: \(|T|\gt 0\), \(\beta|T|\) is an integer, and the treatment means in the relative-difference constraints are nonzero. Breakdown: if \(|T|=0\), \(\beta\) is undefined; if \(\beta|T|\) is noninteger, the equality constraint is infeasible; if treatment means vanish, the relative-difference constraints fail. The paper notes this formulation as the MILP for BOSS [PAGE 13–14].

The ensemble operator uses historical counts. Let \(n_{S,y}\in\{0,1,2,3\}\) be the number of correct selections in year \(y\) using statistic subset \(S\), and
\[
N_{S,y}=\sum_{y'\lt y}n_{S,y'}.
\]
Then
\[
N^*_y=\max_{S\subseteq\mathcal{S},\,|S|=4}N_{S,y},
\qquad
P_y=\{S: N_{S,y}\ge N^*_y-\tau\}.
\]
Units are counts of correct selections; \(\tau\) is an integer count. Assumptions: historical selection counts are comparable across years; the tolerance \(\tau\) is tuned on prior years. Breakdown: if all \(N_{S,y}=0\), the threshold becomes negative and \(P_y\) includes every subset; ties in the “two most frequently selected” step would require a tie rule, but the paper says “such a tie never occurred” [PAGE 7]. The pseudo-code uses a strict inequality on line 9 [PAGE 7], an inconsistency with the displayed formula [PAGE 6].

The random-selection baseline is formalized as a Bernoulli count. With \(x_{s,y}\) historical wins by seed \(s\), \(G_y\) historical games by seed \(s\), and \(n_y\) prior upsets, the expected number of correct picks is
\[
E[U_y]=\sum_{s\in\{13,14,15\}}P(\text{select seed }s\text{ in year }y)\frac{x_{s,y}}{G_y},
\]
with \(P(\text{select seed }s)\) given by equation (10) [PAGE 9]. Units are counts. Assumptions: independent Bernoulli games and stable within-year seed frequencies. Breakdown: if \(n_y=0\), the weighted selection denominator is zero; if \(G_y=0\), the correctness probability is undefined; if \(4n_y-x_{s,y}=0\), the selection probability expression is singular. The reported baseline expected correct counts are 3.26 under uniform random selection and 4.42 under weighted random selection over 2003–2015 [PAGE 10].

The accuracy statistics are
\[
\bar X=\frac{1}{13}\sum_{i=1}^{13}X_i=\frac{10}{13}\approx0.769,
\qquad
S^2\approx0.359,
\qquad
s\approx0.599,
\]
where \(X_i\) is the number correct in year \(i\) [PAGE 8]. Units are correct selections per year and squared correct selections per year squared. Assumption: independence across years, which the paper invokes. Breakdown: with only 13 years, the normal approximation is weak, and a single year can dominate the variance.

The paper’s own scope claims are: 10 of 26 correct [PAGE 1]; 10 of 18 possible eligible upsets correct [PAGE 8]; 8 of 26 under target-year exclusion [PAGE 11]; 2 of 10 for 2011–2015 under pre-target-only training [PAGE 12]; 13 of 52 when selecting four per year [PAGE 11]; and 11–12 seed performance “comparable to that expected by weighted random selection” [PAGE 11].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicit. BOSS comes from observational-study matching: Rubin’s matching work in 1973 and 1980, Rosenbaum and Rubin’s propensity-score methods in 1983 and 1985, and Diamond and Sekhon’s genetic matching in 2013 [PAGE 5, PAGE 14–15]. The BOSS framework itself is attributed to Nikolaev et al. (2013), with complexity and approximation results by Sauppe, Jacobson, and Sewell (2014) [PAGE 5, PAGE 14]. The paper imports that machinery into sports forecasting: treatment group = historical upsets; control pool = 13-, 14-, and 15-seed round-of-64 games; control group = three selected similar match-ups [PAGE 5–6]. That genealogy matters because BOSS was designed to optimize covariate balance, not to maximize predictive accuracy in a small-sample classification task.

The classifier lineage is also explicit: extra-trees from Geurts, Ernst, and Wehenkel (2006), chosen “for its resistance to overfitting” [PAGE 4], and Gini importance from Breiman et al. (1984) [PAGE 4]. The sports-rating lineage includes Pomeroy’s pythagorean ratings, ESPN’s BPI, Sagarin’s ratings, and FiveThirtyEight’s ensemble [PAGE 2]. The upset-taxonomy lineage is ESPN’s “Giants” and “Giant killers” categories [PAGE 2–3]. The comparison model is Lopez and Matthews (2015), the Kaggle competition winner, which used logistic regression with proprietary point-margin inputs and Pomeroy efficiencies [PAGE 3]. The paper’s contribution is to avoid those opaque inputs and use “only statistics that can be obtained from watching the games” [PAGE 3].

The retrocausal genealogy also exposes multi-week traps. The first trap is temporal leakage across seasons. The classifier is trained on 1998–2015, including the target years, because of limited historical data [PAGE 5]. The authors test a mitigation and get 8 of 26 rather than 10 of 26 [PAGE 11]. The second trap is backtest horizon drift. The earliest usable year is 2001 because TeamRankings data before 1997–1998 are unavailable and early years are needed to build a treatment group [PAGE 6]. The target evaluation starts in 2003, leaving very few years for tuning \(\tau\). The third trap is feature-definition drift: the 115 statistics are TeamRankings definitions [PAGE 4, PAGE 13], and college basketball pace, foul rules, and three-point usage change across eras. The fourth trap is fixed-cardinality selection: the model always picks two games, but historical upsets per year range from zero to three [PAGE 8, PAGE 12]. The fifth trap is label definition: the paper’s upset label is 13–15 seeds only, while ESPN’s is a seed difference of at least five [PAGE 2–3]; comparisons to other papers are therefore not apples-to-apples. The sixth trap is the “next-best” decay: four picks per year produce 13 of 52, not 20 of 52 [PAGE 11], so marginal picks are much weaker.

The most important genealogical caution is that BOSS’s observational-study origin does not license causal language. The paper’s own language is similarity: “find similar match-ups” [PAGE 4] and “identify three match-ups that are similar to historical upsets” [PAGE 4]. The historical lineage explains why the method optimizes balance, but it does not prove that any statistic causes an upset. The proper claim is predictive selection under a similarity metric, not causal effect.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive failure modes are best seen as three competing habits. The first is crisis habit regression: when uncertainty is high, the analyst falls back to seed logic. The paper shows this tendency in its own selections: 13-seeds are picked fourteen times, 14-seeds eight times, and 15-seeds four times, because “the 13-seeds are more likely to win than the 15-seeds” [PAGE 8]. That is rational under small data, but it means the model is partly a seed-frequency prior wearing a 15-feature costume. The second is counter-trap: the analyst reacts to historical upsets by overfitting a rich similarity profile. The paper’s 1,365 BOSS runs, 15-feature set, and tuned \(\tau\) are exactly the kind of high-capacity response that can memorize noise. The authors concede limited data and parameter uncertainty [PAGE 13]. The third is the clock: all raw data are “obtained as of Selection Sunday for each year (so no tournament game statistics are included in the data)” [PAGE 3]. The clock prevents leakage, but it also blinds the model to within-tournament injuries, travel disruptions, and availability changes. The model cannot update after the first game.

The recursive theory-of-mind question is: what does the model assume the opponent knows? In this paper, the “opponent” is the bracket’s hidden data-generating process. The model assumes historical upset profiles are stable enough that a current match-up with similar ordinal-rank gaps has elevated upset likelihood. That assumption is recursive because the feature set was chosen by a classifier that saw all years, and the tolerance was chosen by looking at prior years. Each layer can overfit the layer below. The counter-trap is to keep adding features, trees, and subsets until backtest accuracy rises; the clock says stop at Selection Sunday and do not peek. The paper’s best defense is the out-of-sample audit: 8 of 26 under target-year exclusion [PAGE 11] and 2 of 10 under pre-target-only training for 2011–2015 [PAGE 12]. The recursive lesson is that the model’s confidence should be tied to the leakage-free result, not the headline 10 of 26.

There is also a tie-handling and ensemble-recursion issue. The final two picks are “the two match-ups that are most selected by the chosen combinations” [PAGE 7]. If multiple subsets disagree, frequency is a second-order model over models. The paper reports that ties never occurred [PAGE 7], but with a larger control pool or a different \(\tau\), ties become likely. The recursive mind should therefore anticipate that ensemble frequency is not a probability; it is a vote count. A vote count can be stable while the underlying per-game probability is near 0.5. That is why the high variance—4.667 versus 3.66 for weighted random selection [PAGE 8, PAGE 10]—is not a minor footnote. It is the signature of a selector that is confident in relative similarity but not calibrated in absolute probability.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto proof is mostly a proof by absence. BOSS’s 15 covariates are box-score and possession-derived statistics: Effective Possession Ratio, Games Played, Extra Scoring Chances per Game, Opponent Floor Percentage, Personal Fouls per Possession, Opponent Steals per Defensive Play, Assist / Turnover Ratio, Personal Fouls per Defensive Play, Opponent Steals per Possession, Opponent Average Scoring Margin, Average Scoring Margin, Opponent Three Point Percentage, Steals per Defensive Play, Steals per Possession, and Average 2nd Half Margin [PAGE 4–5]. None is a direct measure of player injury, biomechanical load, travel distance, venue geometry, or weather. The paper explicitly lists future extensions: “Additional match-up statistics to consider could include statistics such as the distance teams have to travel for each game or the injury status of each team at the time of the game” [PAGE 13]. That sentence is the admission that the current feature set lacks those layers.

The physical layer veto is straightforward. If a key player is unavailable or limited, the ordinal-rank match-up vector does not change unless the team’s season statistics change. Because all raw data are as of Selection Sunday and “no tournament game statistics are included in the data” [PAGE 3], the model cannot see a tournament-time injury, illness, or availability change. A cross-layer adjudicator should therefore attach a veto predicate: if a validated injury/availability event exists, reject the BOSS pick regardless of \(M(G)\). This is not a claim that injuries always cause upsets; it is a claim that the BOSS operator has no term for the event, so its similarity score cannot adjudicate it.

The biomechanical layer is also absent. Personal fouls per possession and per defensive play are proxies for style and aggression, not for fatigue, acceleration load, jump count, or soft-tissue risk [PAGE 5]. Steals per defensive play and per possession are event counts, not kinematic measures [PAGE 5]. Therefore, a biomechanical veto is proof by non-representation: the model cannot distinguish a team that is physically fresh from a team with cumulative load if both have the same ordinal ranks. The paper’s “Games Played” feature is only a count [PAGE 5], not a load measure. If an external biomechanical layer says a team is in a high-fatigue state, the BOSS pick should be flagged as unadjudicated rather than treated as confirmed.

The weather layer is mostly irrelevant indoors but not entirely irrelevant to travel and schedule disruption. The model has no weather covariate. It also has no travel-distance covariate, which the authors identify as a future addition [PAGE 13]. A weather or travel veto therefore applies at the event-logistics level: if a team’s arrival is disrupted, the season-rank vector is unchanged, so the BOSS score is unchanged. The correct cross-layer rule is: BOSS selects a statistical match-up; physical, biomechanical, and logistics layers can veto that selection but cannot be inferred from it. The paper’s own scope—Selection Sunday data only [PAGE 3]—makes this veto proof exact: any within-tournament physical event is outside the operator’s domain.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto 1: leakage veto. The headline claim is 10 of 26 correct [PAGE 1]. The verifiable counterfactual is to retrain the extra-trees classifier without the target year and without future years. The paper reports that this yields “8 of 26 games correctly (compared to 10 using all the games as described above)” [PAGE 11]. For 2011–2015 with pre-target-only training, it yields 2 of 10 versus 4 with full-data training [PAGE 12]. Prediction: a clean leakage-free replication will produce 8/26, not 10/26, and the 2011–2015 subset will produce 2/10, not 4/10. If a replication reports 10/26 while using target-year features, the claim is vetoed as leakage-contaminated.

Veto 2: seed-scope veto. The paper’s signal is claimed for 13–15 seeds. When the same procedure is applied to 11- and 12-seeded games with three picks, the authors report “the accuracy of the model for the 11 and 12 seeded games was comparable to that expected by weighted random selection” [PAGE 11]. The reported weighted-random expectation is 12.71 correct with variance 8.56, while the technique selects 10.67 correctly [PAGE 11]. Prediction: a preregistered test on 11–12 seeds will not exceed the weighted-random baseline. If it does not, the method is vetoed as a general upset detector and retained only as a 13–15 seed selector.

Veto 3: marginal-pick veto. The fixed-two-pick design is the paper’s strongest regime. When four picks per year are made, “Selecting four teams each year resulted in 13 of 52 correct selections” [PAGE 11]. That is 25% overall, and the marginal yield is only 3 correct from 26 additional picks, about 11.5%. The weighted-random baseline over 26 picks is 4.42 correct [PAGE 10], about 17.0%; the uniform baseline is 3.26 correct, about 12.5%. Prediction: a preregistered “next-best” expansion will show marginal accuracy at or below the random baselines. If the marginal picks do not beat random, the model’s apparent strength is concentrated in the first two votes, which is evidence of ensemble concentration rather than broad predictive signal. A replication that reports a high four-pick marginal rate would contradict the published 13/52 result and require an explanation of changed \(\tau\), changed feature set, or changed seed scope.
</RLVR_COUNTERFACTUAL_VETOES>