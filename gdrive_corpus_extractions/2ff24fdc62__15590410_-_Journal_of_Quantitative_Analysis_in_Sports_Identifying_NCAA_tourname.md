---
source: "[15590410 - Journal of Quantitative Analysis in Sports] Identifying NCAA tournament upsets using Balance Optimization Subset Selection.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 26
model: deepseek/deepseek-v4.1-flash-1017
words: 6362
---

<NATIVE_REASONING>
We need answer. Need obey strict invariants. User wants GSE + GSI Frontier Reasoning Foundry. Need produce sections exact XML? They list sections exact. Need >=1000 words depth. Need no betting lines/odds/moneyline/spreads/totals. Source text includes mentions of spreads/odds but we must not mention. We can discuss as "market-derived inputs" maybe avoid prohibited words entirely. Need cite exact [PAGE N] markers and verbatim quotes when source pages provided. We have only page numbers embedded? Source text shows journal pages 79-93, not PAGE N markers. User says PAGES: 26 and source text. Need cite exact [PAGE N] markers? We need map PDF pages? The source text has page headers and page numbers. Could cite [PAGE 79], [PAGE 80] etc. They ask PAGE N markers likely PDF page count? Hmm source has journal pages. We can use [PAGE 79] etc and verbatim quotes. Need avoid betting lines. Need formal LaTeX, units, assumptions, singularities/breakdown regimes. Need discuss BOSS. Need sections: THINK_TRACE >=400 words. SOURCE_OPERATORS_AND_EQUATIONS. RETROCAUSAL_GENEALOGY. RECURSIVE_THEORY_OF_MIND. CROSS_LAYER_VETO_ADJUDICATION. RLVR_COUNTERFACTUAL_VETOES with 3 verifiable scenarios+predictions. Need maybe mention no lines. Need likely answer as research audit. Need cite exact quotes and page markers. Need be careful quotes verbatim exact. Use quotes from source. Need no toy equations. Formal equations from paper: KS statistic, relative difference, balance measure M(G), BOSS MILP equations (not all visible due missing formulas). We can state equations from paper using text. Need units: ordinal ranks dimensionless; KS dimensionless proportion; R dimensionless ratio; M dimensionless; counts; variance. Need assumptions: independence across years, Bernoulli outcomes, historical weighting, etc. Singularity/breakdown regimes: R denominator zero? Paper R definition missing formula; likely R = |sum(f1)-sum(f2)| / max? Need infer? Since formula omitted in text. We should not invent if not source. Can define R generically as relative difference in sums with denominator? We can say source defines R between sums f1 and f2 but formula absent from extracted text, so exact denominator cannot be certified; breakdown at zero denominator if denominator is sum or mean. Need not invent. But requirement formal LaTeX. Use M(G) equation maybe from paper: M(G)=? Text: combination of (1) difference empirical distributions for each statistic i in S and (2) relative difference between sum each statistic for each game. Then terms. M(G) set to be [formula missing]. Appendix gives y_i=max(K_i,R_i), MILP minimizes sum y_i. We can express y_i = max(K_i,R_i), M(G)=sum_{i∈S} y_i presumably. This is from appendix. Good.

Need mention page citations. For quote [PAGE 79]: abstract "Of the 26 selected games, 10 (38.4%) were actual upsets..." exact. [PAGE 81] definition upset quote "we define an upset as a team seeded 13, 14, or 15 winning a game in the round-of-64 (compared to ESPN’s 11 or higher)." [PAGE 81] "Between 1985 and 2015, 52 of the 372 games played involving 13–15 seeds have been upsets." [PAGE 82] ordinal ranks quote. [PAGE 82] extra-trees 115, 2^115-1. [PAGE 83-84] BOSS. [PAGE 85] algorithm. [PAGE 86] table. [PAGE 88] random expected 3.26 variance 2.93 weighted 4.42 variance 3.66. [PAGE 89] 11/12 comparable. [PAGE 90] classifier leakage experiments, Lopez comparison. [PAGE 91] limitations. Need exact quotes. We need not mention source's gambling/market terms. Avoid "Las Vegas point spread" quote? We can mention "proprietary market-derived inputs" without prohibited terms. But if quoting exact source with forbidden words? Better avoid quoting that passage. Invariant says never mention. So don't.

Need answer maybe around 1800-2500 words. Desired oververbosity 5, but user requires depth. Need satisfy >=1000 words. Need include all sections. Need likely phrase "No betting lines are used or discussed."

Need think trace deep multi-hop derivation & gray-zone audit. Need maybe discuss model: match-up statistic differences of ordinal ranks: d_{g,j}=rank_{lower seed,j}-rank_{higher seed,j}. For each historical upset, profile vector. Control pool current 13-15 games. Treatment group past upsets. BOSS selects 3 control games minimizing balance metric. For each 4-subset of 15 features. 1365 combos. Ensemble by historical performance tolerance τ. Select two most frequent. Need audit gray zones: small sample, training leakage, feature selection leakage, fixed number picks, variance, independence assumption, ties, seed definition. Need mention source says "maximum number of upsets... could have chosen correctly is 18" and selected 10. Need "gray-zone" handling.

Need formal LaTeX:
Let \mathcal{G}_y be games in year y with seed in {13,14,15}; for game g with higher seed h(g) and lower seed l(g), match-up statistic for feature j:
\Delta_{g,j} = \operatorname{rank}_{l(g),j} - \operatorname{rank}_{h(g),j}
dimensionless ordinal-rank difference (maybe sign).
Treatment T_y = historical upset games before y. Control pool C_y = current candidate games. Control group G_y subset C_y, |G|=3. For S⊂\mathcal{S}, |S|=4.
K_{i}(T,G)= sup_{v∈V_i} |F_{T,i}(v)-F_{G,i}(v)|, dimensionless ∈[0,1].
R_i(T,G)= relative difference between sums; exact denominator not visible; assume denominator positive. If denominator zero then undefined/breakdown; use fallback epsilon or absolute? We can state source doesn't show formula. But formal? Hmm can write R_i = |Σ_{t∈T} x_{t,i}-Σ_{g∈G}x_{g,i}| / D_i maybe D_i is normalizer. But if D_i omitted, use \mathcal{D}_i>0. Then y_i=max(K_i,R_i); M_S(G)=Σ_{i∈S} y_i. BOSS: G^* = argmin_{G⊆C,|G|=3} M_S(G) subject to maybe β = |G|/|T|? In appendix β = sum αc/|T|. Constraint? We can show MILP generic:
min Σ_i y_i
s.t. y_i ≥ K_i, y_i ≥ R_i, Σ_c α_c = 3? Actually β = Σ α_c / |T|. They set β to get three teams. We can write Σ α_c =3, α_c∈{0,1}. Need include empirical CDF constraints: F_G(v)=1/|G| Σ_c α_c 1[x_{c,i}<v], maybe tie handling not exact. We can state with page citation.

Random expectation: For weighted selection, expected over years y1..y2:
E[Σ U_y]=Σ_y 2 Σ_{s∈{13,14,15}} P(select seed s in y) P(upset | seed s before y). But paper formula maybe. We can state expected total 4.42, variance 3.66; uniform 3.26, variance 2.93. Our 10 vs weighted: z=(10-4.42)/√3.66=2.92. Uniform z=(10-3.26)/√2.93=3.94. Need check: variance total? yes.

Need "units, assumptions, exact singularity/breakdown regimes":
- Ordinal ranks dimensionless but scale-dependent to field size; ties averaged.
- KS statistic dimensionless [0,1], no units.
- R dimensionless if denominator same units as sum; if denominator zero -> singular.
- M dimensionless.
- U_y count of games, variance games^2.
- Independence assumption across years.
- Bernoulli outcome assumption.
- Treatment/control balance is not causal effect; no guarantee.
- BOSS exhaustive enumeration O(C choose 3) not scalable; breakdown when C large; MIP formulation.
- Feature selection trained on 1998-2015 all years violates temporality; leakage experiments show 8/26 vs 10/26 and 2/10 vs 4/10 [PAGE 90].
- 11/12 no better than weighted random [PAGE 89].
- Small sample: all 26 picks; 10 successes; confidence? We can compute exact? Not necessary. But can mention binomial? Maybe not toy. Could calculate z.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Discuss lineage: observational causal inference, matching (Rubin 1973, 1980), propensity scores (Rosenbaum & Rubin 1983), covariate balance (Diamond & Sekhon 2013), BOSS (Nikolaev et al. 2013; Sauppe et al. 2014), extra-trees (Geurts et al. 2006), Gini importance (Breiman et al. 1984), ensemble (Opitz & Maclin 1999), NCAA upset literature Bryan et al. 2006, Lopez & Matthews 2015. Multi-week traps: tournament bracket cycles, annual data drift, retrofitting feature set to all years, tolerance parameter selected over prior years, "constant tolerance from 2009" may be overfit, conference tournament data future, rule changes, pace/efficiency, transfer portal? Source old 2017; don't need modern? We can mention as audit.

Need "RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. Interpret? Need align to sports forecasting? This section likely wants model of agents? We need discuss how forecasters under crisis regress to habits, counter-trap, clock. Maybe frame as decision-maker: bracket picker regresses to seed heuristic or expert consensus; counter-trap is overcorrecting to contrarian upset picks; clock is temporal leakage / deadline. Need connect BOSS: The algorithm itself has "crisis habit regression" when limited data -> reuse all-year classifier; "counter-trap" -> avoiding overfit by ensembling and historical tolerance; "clock" -> Selection Sunday data cutoff [PAGE 81] and no tournament stats. Need mention recursive theory of mind: forecasters anticipate other forecasters, public bracket pools, but model doesn't model opponents; only game outcome. But user asks "Crisis habit regression vs counter-trap vs clock." We can provide a triage: crisis habit = fallback to seed/rating when data sparse; counter-trap = contrarian selection to exploit public bias; clock = time-indexed information set. Need not mention betting. Need maybe say "not a betting-line problem."

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. Need for basketball: physical/biomechanical (injury, fatigue, travel, pace, fouls, player availability), weather (travel delays, arena conditions?) Need adjudicate whether these veto the statistical selection. Source says future work could include distance teams travel or injury status [PAGE 91]. Source feature list includes personal fouls, steals, rebounds, etc. Need state BOSS selection is vetoed if physical layer overrides statistical balance: e.g., injury to key player not in covariates, travel distance, altitude, illness, referee crew? Weather can affect travel. Need "proof" maybe formal: claim selected upset is invalid if there exists a layer variable z not in S with material effect and not balanced. We can state veto condition: if |Δz| > threshold and z is predictive, then match-up similarity in S doesn't identify upset; needs augmentation. But avoid toy equations? This is formal. Need use source citations: source says data from TeamRankings.com as of Selection Sunday, no tournament game stats [PAGE 81]; limitations future work includes distance/injury [PAGE 91]. So cross-layer veto: physical/biomechanical/weather metrics absent from 115? Actually TeamRankings tracks 115 stats but source selected 15; injury/travel not in selected. So any such event is an unmodeled covariate. Veto proof: Because BOSS optimizes balance only over S, if z∉S and z differs between T and G, the balance measure M_S(G) can be arbitrarily small while outcome distribution changes. There is no identification. Need cite. Also weather: indoor basketball, but travel weather can delay; no data. If severe, selection loses validity. Need say not a proof of no effect, but veto condition. Need maybe "physical/biomechanical/weather veto proof" means demonstrate that physical layer can veto statistical selection. We can provide formal counterexample: two games identical in selected covariates but different injury status; BOSS cannot distinguish. Need not use fake ratio. This is legitimate.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need produce 3 scenarios that would veto model: e.g., temporal leakage audit, permutation/randomization test, out-of-sample prospective test. Need include predictions. Must be verifiable. Need no betting lines. Need likely scenarios:
1. Temporal holdout veto: Retrain extra-trees only on years < y and BOSS only prior upsets; predict y. Prediction: performance drops from 10/26 to ≤8/26 (source already saw 8/26 leave-one-year-out and 2/10 for pre-target) [PAGE 90]. If prospective < weighted random expectation 4.42? Hmm source says 8/26 still above 4.42? 8 > 4.42. But prediction maybe drop. Verifiable.
2. Label/definition sensitivity veto: Change upset definition to ESPN seed diff ≥5 or include 11/12; model should not outperform weighted random. Source already 11/12 10.67 vs expected 12.71 [PAGE 89]. Prediction: no significant advantage. This is verifiable.
3. Stability/feature-importance veto: Re-run feature selection on bootstrap years; if selected 4-feature subsets and final picks unstable, then original 10/26 is not robust. Prediction: top-15 feature set and final two selections change; overlap low; accuracy variance high. Need quantify? Could predict <50% overlap. Verifiable via rerun.
Alternative 3: Exhaustive randomization/permutation: permute upset labels within years, rerun full pipeline; if observed 10/26 not above 95th percentile, veto. Prediction p>0.05 due small n? We can state. Need maybe three scenarios with predictions. "RLVR" likely reward verification. Need define reward: pass/fail. Good.

Need perhaps include exact page citations in each section. Need quotes. Ensure verbatim quotes exact. We can quote with [PAGE 79] etc. Need not overquote. Need use source page numbers not PDF page markers? The prompt says PAGES: 26, but source text has journal pages. I think use [PAGE 79] etc. That likely acceptable. Need mention "source page markers are journal pages as supplied."

Need avoid prohibited terms: "spread", "total", "moneyline", "odds", "betting lines", "Las Vegas point spread". Do not include. Need avoid "wagering" maybe not prohibited? It mentions betting lines only. But safer avoid all gambling. The source has "Americans wagering" but don't quote. We can mention "market-derived inputs" but maybe "market" okay. But to be safe, no gambling terms at all. Also "odds" not mention. Need not mention "Covers." Good.

Need answer with exact XML tags. Should include maybe an intro line "No betting lines..." But invariant 1 says never mention betting lines. Saying "No betting lines" mentions them? Oops. Avoid phrase entirely. Don't mention. We can say "All quantities below are statistical/optimization quantities." No mention.

Need word count >=1000 across sections. We'll write ~2500. Need ensure THINK_TRACE >=400 words. Let's draft.

Structure:

<THINK_TRACE>
... Deep derivation. cite pages. Discuss four-step. Gray-zone audit.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX. Units. Assumptions. Breakdown. Page citations.
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
3 scenarios.
</RLVR_COUNTERFACTUAL_VETOES>

Need include exact quotes:
- Abstract "Of the 26 selected games, 10 (38.4%) were actual upsets, which is more than twice as many as the expected number of correct selections when using a weighted random selection method." [PAGE 79]
- Definition "we define an upset as a team seeded 13, 14, or 15 winning a game in the round-of-64 (compared to ESPN’s 11 or higher)." [PAGE 81]
- "Between 1985 and 2015, 52 of the 372 games played involving 13–15 seeds have been upsets." [PAGE 81]
- "All raw data was obtained from TeamRankings.com (TeamRankings 2015) and are obtained as of Selection Sunday for each year (so no tournament game statistics are included in the data)." [PAGE 81]
- "Because both players and play styles in college basketball can change from year to year, we use ordinal rankings instead of the raw statistic value when looking at team statistics." [PAGE 82]
- "Trying every combination of statistics is infeasible, as there are 2^115 − 1 possible combinations." [PAGE 82]
- "For each combination of four match-up statistics S ⊂ S, BOSS is used to select three match-ups as potential upsets." [PAGE 83]
- "The balance measure used was a combination of (1) the difference between the empirical distribution of the treatment and control group for each statistic i ∈ S and (2) the relative difference between the sum of each statistic for each game in the control and treatment group." [PAGE 83]
- "Due to the small size of both T and C, we solved BOSS by enumerating all possible sets of G and choosing the one with the smallest M(G)." [PAGE 84]
- "Of the 26 selected games, 10 (38.4%) were actual upsets" [PAGE 79 or 85? Table? Actually abstract page 79; results page 85 maybe "In total, the presented technique selected 10 upsets correctly out of 26 picks (38.4%) over 13 years." [PAGE 85? The text says after Table 3? Page 85? The source page header 85 near algorithm. Let's locate: "In total, the presented technique selected 10 upsets correctly out of 26 picks (38.4%) over 13 years." appears after Table 3? It is on page 85 or 86? The text before "Analysis of results" maybe page 85? Actually page header 85 then algorithm, then section 4 Results begins page 85? Wait page 85 header appears before Algorithm 1, then after algorithm page 86? The quote "In total..." after Table 3 maybe page 85? In source: "## 4 Results" after algorithm and before table 1, likely page 86? The page header 86 appears before Table 1. So "In total..." probably page 86? Let's use [PAGE 86] for Table 1? Hmm source: "**86** | ... Table 1" yes. "In total..." is before Table 1? Actually in source:
"## 4 Results ... The games selected as upsets are listed in Table 1. ... In total, the presented technique selected 10 upsets correctly out of 26 picks (38.4%) over 13 years. Analysis..." Then page header "86 | ... Table 1". So "In total..." might be page 85? The header 86 appears after "Analysis..."? Let's not overcite exact page for that quote if unsure. Use abstract [PAGE 79] for same. Good.

- "We also applied our technique to the 11 and 12 seeded games... accuracy ... comparable to that expected by weighted random selection." [PAGE 89]
- "If weighted random selection were used, the expected number of correct selections would be 12.71 with a variance of 8.56, while our technique selected 10.67 upsets correctly." [PAGE 89]
- "This led to us selecting 8 of 26 games correctly (compared to 10 using all the games as described above)." [PAGE 90]
- "In those five years, we selected 2 of 10 games correctly, compared to 4 using the full dataset for training." [PAGE 90]
- "The technique was shown to significantly outperform random selection..." [PAGE 90? conclusion page 90? maybe page 90]. 
- "Our technique selected 10 upsets over the 13 year period between 2003 and 2015. Therefore, our technique produced a number of correct selections that is 2.92 standard deviations above the expected number of correct predictions if weighted random selection were used." [PAGE 88?] The text appears page 88 after Table 4. Use [PAGE 88].
- "If uniform random selection is used, our technique produces a number of correct selections that is 3.94 standard deviations above the expected value of 3.26 correct selections." [PAGE 88]
- "The value of τ was determined separately for each year." [PAGE 84]
- "A constant tolerance could be evidence of some level of stability" [PAGE 86?] But no need.
- "Some potential areas for future work ... distance teams have to travel ... injury status" [PAGE 91].

Need be careful exact quotes with en-dashes. Use quotes around exact. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS": Need include equations. Let's formulate:

For game g, seed s_h, s_l, features j=1..115. Ordinal rank r_{t,j} dimensionless. Tie rank average. \Delta_{g,j}=r_{l(g),j}-r_{h(g),j} (lower-seed minus higher-seed). Could be sign. For each S with |S|=4, treatment T_y = {historical upsets before y}, control C_y = {current 13-15 games}. BOSS picks G^*_S(y) = argmin_{G⊆C_y, |G|=3} M_S(G). Balance:
K_i(T,G)=\sup_{v∈V_i}|F_{T,i}(v)-F_{G,i}(v)|, F empirical CDF. Units: dimensionless.
R_i(T,G)= relative difference between sums; source formula not in supplied text. To be rigorous, write R_i(T,G)=\frac{|\sum_{t∈T}x_{t,i}-\sum_{g∈G}x_{g,i}|}{D_i(T,G)} where D_i is the source's positive normalizer; exact D_i omitted. If D_i=0 or |T|=0 or |G|=0, singular. y_i=max(K_i,R_i). M_S(G)=Σ_{i∈S} y_i. BOSS MILP:
min Σ_{i∈S} y_i
s.t. y_i≥K_i, y_i≥R_i, Σ_{c∈C} α_c=3, α_c∈{0,1}, F_G constraints, etc.
Need mention β = Σ α_c/|T|. Source says β chosen depending on treatment size to get three teams [PAGE 92].
Ensemble:
N_{S,y}=Σ_{y'<y} n_{S,y'}, n∈{0,1,2,3}. N_y^*=max_S N_{S,y}. P_y={S∈binom(S,4): N_{S,y}≥N_y^*-τ}. Select two games most frequent across S∈P_y. τ∈{1..20}. The algorithm uses historical years 2002..Y-1 to choose τ, then year Y. Need units: counts, τ count of correct selections.
Random baseline: U_y ∈ {0,1,2}; E[Σ U_y]=3.26 uniform, variance 2.93; weighted 4.42, variance 3.66. z. Units counts/games. Independence across years.
Breakdown regimes:
1. |T|=0 or |G|=0 -> empirical CDF/KS undefined; M undefined.
2. D_i=0 -> R singular; if all selected covariates constant.
3. C size explodes -> exhaustive enumeration C(C,3) infeasible; MIP needed.
4. Feature selection leakage: classifier trained all years; no temporal validity.
5. Fixed G=3 and final 2; if actual upsets 0, false positives; if >2, truncation.
6. Covariate shift: rules/pace changes; ordinal ranks not absolute.
7. Unmodeled variables physical/weather.

Need cite pages.

Need "RETROCAUSAL_GENEALOGY": maybe discuss "retrocausal" meaning how future outcomes/selection criteria leak backward? We can coin. Need not be too odd. Multi-week traps: "tolerance τ chosen separately each year using previous outcomes" is adaptive; "constant from 2009 onward" could be overfit [PAGE 86?]. Need mention "The model is an observational-study matcher, not a causal estimator of upset mechanism." The lineage from Rubin matching to BOSS. Extra-trees and Gini. Ensemble. The retrocausal trap: using all years to select features and using future years in classifier creates reverse information flow; source acknowledges "This could potentially cause data leakage" [PAGE 90]. Good. Multi-week traps: tournament weeks: Selection Sunday cutoff, first-round window, conference tournaments missing, injury news between selection and tip-off. Source says data as of Selection Sunday [PAGE 81], future work distance/injury [PAGE 91]. Good.

Need "RECURSIVE_THEORY_OF_MIND": Maybe write as "Agent triage". Crisis habit regression: under sparse data, analyst falls back to seed/rating habits; the model itself falls back to all-year training and fixed two picks. Counter-trap: overcorrecting by contrarian picks or by over-ensembling; BOSS attempts to avoid via balance, but no opponent model. Clock: information cutoff and tournament clock; no tournament stats; cannot use late injury? Need discuss recursive: forecasters know others use seed, so contrarian picks; but BOSS doesn't model field. Need say to avoid trap, use rule: if data sparse, use historical prior; if consensus, counter-trap only with covariate evidence; if clock, freeze data at Selection Sunday and version. This section can be ~300 words.

Need "CROSS_LAYER_VETO_ADJUDICATION": Formal veto. Let z be layer variable. If z∉S and z affects outcome, then two games can have same M_S but different P(upset|z). BOSS cannot distinguish. Veto condition: physical/biomechanical: key player injury/availability, minutes load, foul trouble propensity, pace/efficiency mismatch, travel/altitude, rest days. Weather: travel disruption/arena humidity? Indoor but travel. Since source selected 15 stats includes fouls, steals, rebounds, scoring margin, but not injury/travel. Source future work explicitly lists distance travel and injury status [PAGE 91]. Thus any material unmodeled event vetoes the pick. Need "proof" as counterexample: T and G balanced on S; z differs; outcome distribution shifts; selection invalid. Not a fake ratio. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Make them verifiable with predictions and pass/fail thresholds. Avoid betting. Use "reward" as verification. Need no prohibited terms. Use counts. Good.

Need final answer only sections. Need no markdown? XML tags. Can include LaTeX. Need ensure >=1000 words. We'll write concise but deep.

Need include exact quotes with page citations. Use [PAGE 79] etc. Are these "exact [PAGE N] markers"? Yes. Need maybe mention "Page markers refer to supplied journal pagination." Good.

Need not mention "spread" etc. Check draft for prohibited words:
- "market-derived" okay? Maybe avoid.
- "odds" no.
- "betting" no.
- "spread" no. But "spread" could appear as "horizontal spread" in source quote about distributions. The invariant says never mention spreads (betting lines). "horizontal spread" is statistical, but word "spread" might trigger? Avoid. Use "horizontal separation" instead. Don't quote the KS paragraph with "spread". Good.
- "total" appears as "total number" maybe prohibited? Invariant says "totals" betting lines. But word "total" could appear. Avoid "totals"; use "sum" or "aggregate". But "total" as adjective maybe okay? To be safe avoid "total". Use "aggregate" or "overall". Do not mention "totals" plural.
- "moneyline" no.
- "odds" no.
- "line" maybe in "lineage" includes line? "lineage" okay? It contains line but not betting. Fine.
- "point spread" no.
- "Covers" no.

Need maybe no "expected number of correct selections when using weighted random selection" fine.

Need write. Need ensure equations use LaTeX. Use \[
...
\]. Need not too long? But >=1000 words. Let's estimate. THINK_TRACE ~600 words. SOURCE ~600. Others ~300 each. Total ~2500. Good.

Need cite exact quotes. Let's draft final. Be precise.

Potential issue: "Balance Optimization Subset Selection" acronym BOSS. Good.

Let's ensure no fake ratio. We are not inventing; equations from source. The R_i normalizer D_i is an explicit placeholder, not fake. State exact formula omitted. Good.

Need mention "singularity/breakdown regimes" exact. Good.

Need "units" explicitly: dimensionless, games, games^2. Good.

Need "citation exact [PAGE N] markers and verbatim quotes." We'll include. Good.

Need maybe "GSE + GSI Frontier Reasoning Foundry" not necessary.

Let's produce final with exact XML.
</NATIVE_REASONING>

<THINK_TRACE>
The supplied source is an optimization/matching paper, not a physics paper. I treat its operators as statistical operators over ordinal team ranks. The pipeline is: (1) compute match-up differences; (2) use an extra-trees classifier to retain 15 features; (3) for every 4-feature subset, run BOSS to choose three candidate games; (4) ensemble by historical tolerance \(\tau\) and return the two most frequently selected games. The source states the target directly: “we define an upset as a team seeded 13, 14, or 15 winning a game in the round-of-64 (compared to ESPN’s 11 or higher)” [PAGE 81]. It also fixes the data clock: “All raw data was obtained from TeamRankings.com (TeamRankings 2015) and are obtained as of Selection Sunday for each year (so no tournament game statistics are included in the data)” [PAGE 81]. That clock is essential because any later injury, travel, or tournament-game information would violate the paper’s information set.

The core multi-hop derivation is: historical upsets form a treatment group \(T\); current 13–15 seed games form a control pool \(C\); BOSS chooses a small control group \(G\subset C\) whose selected covariates are distributionally and aggregately similar to \(T\). The paper says “For each combination of four match-up statistics \(S \subset \mathcal{S}\), BOSS is used to select three match-ups as potential upsets” [PAGE 83]. The balance measure is “a combination of (1) the difference between the empirical distribution of the treatment and control group for each statistic \(i \in S\) and (2) the relative difference between the sum of each statistic for each game in the control and treatment group” [PAGE 83]. The source solves this by enumeration because “Due to the small size of both \(T\) and \(C\), we solved BOSS by enumerating all possible sets of \(G\) and choosing the one with the smallest \(M(G)\)” [PAGE 84]. That is a finite, verifiable operator, but it is also a fragile one: the similarity is only with respect to the selected covariates, not with respect to unmodeled physical or logistical variables.

The headline result is “Of the 26 selected games, 10 (38.4%) were actual upsets, which is more than twice as many as the expected number of correct selections when using a weighted random selection method” [PAGE 79]. The source further reports that “Our technique selected 10 upsets over the 13 year period between 2003 and 2015” and that this is “2.92 standard deviations above the expected number of correct predictions if weighted random selection were used” [PAGE 88]; under uniform random selection the result is “3.94 standard deviations above the expected value of 3.26 correct selections” [PAGE 88]. Those are the strongest quantitative claims in the paper.

The gray-zone audit is where the result must be handled carefully. First, the feature selector is trained on 1998–2015 for all target years, which the authors admit: “This could potentially cause data leakage” [PAGE 90]. Their sensitivity checks are not reassuring in a pure temporal sense: leave-target-year-out gave “8 of 26 games correctly (compared to 10 using all the games as described above)” [PAGE 90], and training only on prior years for 2011–2015 gave “2 of 10 games correctly, compared to 4 using the full dataset for training” [PAGE 90]. Second, the method is tuned: “The value of \(\tau\) was determined separately for each year” [PAGE 84], so the reported 10/26 includes an adaptive tolerance selected with historical outcomes. Third, the fixed selection of exactly two games is a design choice, and the paper notes that historical upsets range from zero to three [PAGE 91]. Fourth, the extension to 11–12 seeds is not better than weighted random selection: “If weighted random selection were used, the expected number of correct selections would be 12.71 with a variance of 8.56, while our technique selected 10.67 upsets correctly” [PAGE 89]. So the model’s evidence is concentrated in the 13–15 seed band, where the seed gap is large enough that the covariate signal may survive.

The deepest audit point is identification. BOSS is a balance optimizer inherited from observational causal inference; it does not estimate a causal effect of an upset mechanism. It only asserts that \(G\) resembles \(T\) on \(S\). If an unselected variable \(z\) affects the outcome, two games can have identical \(M_S(G)\) and different upset probabilities. This is exactly the regime the authors leave open when they list “the distance teams have to travel for each game or the injury status of each team at the time of the game” as future covariates [PAGE 91]. The correct use of this paper is therefore not as a universal upset oracle, but as a reproducible, covariate-limited candidate generator whose claims must be frozen at Selection Sunday and re-tested prospectively.

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(t\) index a team, \(g\) a game, \(j\) a TeamRankings statistic, and \(y\) a target year. The paper uses ordinal ranks rather than raw values: “we use ordinal rankings instead of the raw statistic value when looking at team statistics” [PAGE 82]. Let \(r_{t,j}\in\{1,\dots,n_y\}\) be the ordinal rank for team \(t\) on statistic \(j\) in year \(y\), dimensionless. Ties are assigned the average rank, as described on [PAGE 82]. For a game \(g\) with lower-seeded team \(\ell(g)\) and higher-seeded team \(h(g)\), the match-up covariate is
\[
\Delta_{g,j}=r_{\ell(g),j}-r_{h(g),j},
\]
a dimensionless ordinal-rank difference. The paper’s set \(\mathcal{S}\) is the 15 retained match-up statistics; for each \(S\subset\mathcal{S}\) with \(|S|=4\), BOSS is run.

For a treatment group \(T\) of historical upsets and a control group \(G\) of candidate games, let \(F_{T,i}\) and \(F_{G,i}\) be empirical distribution functions for covariate \(i\) over the value set \(V_i\). The Kolmogorov–Smirnov operator is
\[
K_i(T,G)=\sup_{v\in V_i}\left|F_{T,i}(v)-F_{G,i}(v)\right|\in[0,1],
\]
dimensionless. The source also uses a relative-difference-in-sums operator \(R_i(T,G)\). The extracted text gives the verbal definition on [PAGE 83] but omits the exact denominator formula. To avoid inventing a ratio, write it schematically as
\[
R_i(T,G)=\frac{\left|\sum_{t\in T}x_{t,i}-\sum_{g\in G}x_{g,i}\right|}{D_i(T,G)},
\]
where \(D_i(T,G)>0\) is the source’s normalizer and is dimensionless only if \(D_i\) has the same units as the summed statistic. The appendix defines \(y_i=\max(K_i,R_i)\) and uses
\[
M_S(G)=\sum_{i\in S}y_i
\]
as the balance objective; this is the quantity minimized by BOSS [PAGE 92]. The MILP form is
\[
\min \sum_{i\in S} y_i
\]
subject to \(y_i\ge K_i\), \(y_i\ge R_i\), binary inclusion variables \(\alpha_c\in\{0,1\}\), \(\sum_{c\in C}\alpha_c=3\), and empirical-distribution constraints encoding \(F_{G,i}\); the appendix also defines \(\beta=\sum_{c\in C}\alpha_c/|T|\) and states that \(\beta\) was chosen so that the control group would contain three teams [PAGE 92]. The selected control group is
\[
G_S^*(y)=\arg\min_{G\subseteq C_y,\ |G|=3} M_S(G).
\]
In the ensemble step, let \(n_{S,y}\in\{0,1,2,3\}\) be the number of historical upsets correctly selected by covariate set \(S\) in year \(y\). Let
\[
N_{S,y}=\sum_{y'<y}n_{S,y'},\qquad
N_y^*=\max_{S\in\binom{\mathcal{S}}{4}}N_{S,y},
\]
and
\[
P_y=\{S\in\binom{\mathcal{S}}{4}:N_{S,y}\ge N_y^*-\tau\},
\]
where \(\tau\in\{1,\dots,20\}\) is a count of correct selections, not a physical quantity [PAGE 84]. The final two games are those most frequently selected across \(S\in P_y\). Counts \(n_{S,y},N_{S,y},N_y^*,\tau\) have units of games; variances have units of games\(^2\).

Assumptions and breakdown regimes are explicit. \(K_i\) is undefined if \(T=\varnothing\) or \(G=\varnothing\); \(R_i\) is singular if \(D_i=0\); \(M_S(G)\) is undefined if any selected covariate has zero variance and the relative-difference denominator vanishes. Exhaustive enumeration is \(O(\binom{|C|}{3})\) and becomes infeasible as \(|C|\) grows beyond the paper’s small pools; the MIP is the stated alternative [PAGE 84, PAGE 92]. The fixed \(|G|=3\) and final two picks break when the true number of upsets is zero or greater than two; the paper acknowledges this fixed-count limitation [PAGE 91]. Temporal validity breaks if the feature selector uses all years, because “This could potentially cause data leakage” [PAGE 90]. Finally, the random-selection comparison assumes independent years and Bernoulli game outcomes; the paper reports weighted-random expectation \(4.42\) and variance \(3.66\), and uniform-random expectation \(3.26\) and variance \(2.93\), over 2003–2015 [PAGE 88]. Those are the correct units and denominators for the reported \(z\)-comparisons.

<RETROCAUSAL_GENEALOGY>
The scientific lineage is observational-causal-inference matching: Rubin-style matching [PAGE 83], propensity-score methods, and covariate-balance matching. BOSS is the descendant that “drops the matching component in favor of directly optimizing covariate balance” [PAGE 83]. The classifier lineage is extremely randomized trees: the paper uses 100,000 trees, \(\sqrt{115}\) features per split, and two samples to split, citing Geurts et al. [PAGE 82]. Feature importance comes from Gini importance, citing Breiman et al. [PAGE 82]. The ensemble step cites Opitz and Maclin for error reduction [PAGE 85]. The NCAA-specific lineage includes Bryan, Steinke, and Wilkins (2006) and Lopez and Matthews (2015), with the latter compared directly: the Lopez–Matthews model gave “an average of 7.46 upsets correctly out of 26 selections, with a maximum of nine and a minimum of six,” while this paper reports 10 of 26 [PAGE 90]. The paper’s own comparison also notes that the other model has “a variance of 0.669 in the number of correctly predicted upsets, which is significantly better than ours” [PAGE 90].

The retrocausal trap is the reverse flow of information from later seasons into earlier feature selection. Training the extra-trees classifier on 1998–2015 to choose features for a 2003 target is not a pure pre-registered pipeline. The authors flag this and report degraded results under temporal splits: 8/26 under leave-target-year-out and 2/10 for the 2011–2015 pre-target test versus 4/10 with the full data [PAGE 90]. A second multi-week trap is tolerance adaptation: choosing \(\tau\) separately for each year uses prior outcomes, so the reported accuracy is a backtest of an adaptive rule, not a frozen rule. A third is data-clock drift. The paper freezes at Selection Sunday [PAGE 81], but real tournament windows include conference-tournament fatigue, travel, illness, and injury news between Selection Sunday and tip-off. Those are not in the 15 selected covariates. The authors themselves list “distance teams have to travel” and “injury status” as future additions [PAGE 91]. Thus the genealogy is sound as a balanced-sampling method, but the upset claim is historically contingent on a small 13–15 seed sample and on a feature set chosen with future seasons included.

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when the data are sparse: the analyst or model falls back to seed reputation, power ratings, or “pick the stronger seed” habits. The paper’s own fallback is visible in the all-years classifier training and in the fixed two-pick rule: those are stability habits adopted because “the limited quantity of available historical data” made cleaner temporal training difficult [PAGE 82]. Counter-trap behavior is the opposite failure: overcorrecting into contrarian picks because the crowd is assumed to be on the favorite. BOSS is a partial counter-trap because it requires covariate similarity to historical upsets, not mere disagreement with consensus. But it does not model other forecasters, public bracket composition, or strategic selection; it models only game-level similarity. The clock is the Selection Sunday information cutoff [PAGE 81] plus the tournament calendar. A disciplined recursive agent should ask: at what clock time is this pick being made? If before Selection Sunday, the covariate set is incomplete because the bracket is unknown. If after tip-off, the model is invalid because tournament statistics have entered. If between Selection Sunday and tip-off, injury and travel updates are live but unmodeled. The correct habit is to freeze a versioned pre-tournament record, then treat any late physical update as a separate veto layer rather than silently editing the pick. The counter-trap is to use the model’s 38.4% backtest as a license for unlimited contrarianism; the paper’s fixed-count limitation and high variance argue against that. The clock rule is therefore: one pre-registered run per year, one pre-tournament data snapshot, and no retroactive tolerance tuning.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical and biomechanical veto: BOSS balances only the selected \(S\). If a key player’s availability, minutes load, foul propensity, injury status, or rest differential is not in \(S\), then two games can have nearly identical \(M_S(G)\) while having different outcome distributions. This is not a speculative objection; the paper’s own future-work list names “injury status” and travel distance [PAGE 91]. A formal veto condition is: for a selected game \(g\), if there exists a layer variable \(z\notin S\) with material predictive effect and \(z_g\) differs from the treatment profile by more than the pre-specified tolerance, then the BOSS selection is vetoed until \(z\) is added or the game is removed. The proof is by non-identification: \(M_S(G)\) is invariant to \(z\), so a small \(M_S(G)\) cannot certify a small difference in upset probability when \(z\) is unbalanced.

Weather/logistics veto: the sport is indoor, so direct weather is less relevant than travel disruption, delayed arrival, arena assignment, and rest. Because the paper uses “no tournament game statistics” and Selection Sunday data [PAGE 81], any post-selection travel disruption is outside the model. If a team’s arrival is delayed or its rest pattern changes after the data freeze, the statistical match-up remains but the physical layer has changed. The adjudication rule is: statistical selection remains a candidate, but physical/logistical veto has priority when the event is material and verifiable. The paper’s feature list includes personal fouls, steals, rebounds, scoring margin, and second-half margin, but not travel or injury [PAGE 91], so these are genuine unmodeled covariates, not refinements of an already complete model. Therefore the correct verdict is conditional: BOSS can select a candidate, but a physical/biomechanical/weather veto can invalidate the candidate without contradicting the optimization result.

<RLVR_COUNTERFACTUAL_VETOES>
1. Temporal-holdout veto. Re-run the entire pipeline for each target year using only data and upsets strictly before that year for both feature selection and BOSS; do not use the target year or later years. Reward is pass only if the prospective 2003–2015 count is at least 8/26 and remains above the weighted-random expectation of 4.42. Prediction: the count falls from 10/26 toward 8/26 or lower, consistent with the paper’s leave-target-year-out result of 8/26 [PAGE 90], and the pre-target 2011–2015 test remains near 2/10 versus 4/10 [PAGE 90]. If it falls to or below 4.42, the original claim is vetoed as leakage-sensitive.

2. Seed-definition and 11–12 extension veto. Change the upset definition to include 11–12 seeds and require three selections per year, exactly as the paper’s extension did. Reward is pass only if the technique beats weighted random selection by a pre-specified margin. Prediction: it does not; the paper reports 10.67 correct versus weighted-random expectation 12.71 with variance 8.56 [PAGE 89]. This veto tests whether the 13–15 result is a genuine covariate signal or a seed-gap artifact. If the 11–12 extension fails, the model is restricted to the 13–15 band and cannot be generalized.

3. Feature-stability and permutation veto. Bootstrap the historical years, re-select the top 15 features, re-run all 1,365 four-feature BOSS models, and permute upset labels within year as a null. Reward is pass only if the observed 10/26 exceeds the 95th percentile of the permutation distribution and if the final two picks overlap the original picks in at least half of the years. Prediction: the top-15 feature set and final picks are unstable because the sample has only 52 historical 13–15 seed upsets from 1985–2015 [PAGE 81] and the paper itself reports high variance, 4.667 for the technique versus 3.66 for weighted random selection [PAGE 88]. If the permutation null often reaches 10/26, the 38.4% headline is not a verifiable reward signal and the model is vetoed as an overfit backtest.