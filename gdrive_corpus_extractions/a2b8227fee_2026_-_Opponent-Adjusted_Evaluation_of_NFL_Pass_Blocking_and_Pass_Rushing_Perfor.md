---
source: "2026 - Opponent-Adjusted Evaluation of NFL Pass Blocking and Pass Rushing Performance - Pipping-Gam n et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2026"
pages: 14
model: baidu/ernie-5.5-flash-preview:free
words: 7459
---

<NATIVE_REASONING>
We need answer user's request. Need produce >=1000 words across exact XML sections. Need zero betting lines, no toy equations, formal LaTeX, SI/information/probability units, assumptions, singularities, cite exact page markers and verbatim quotes when source pages provided. User provided source text pages. Need likely do reasoning about model, maybe no explicit question? They say DRIVE SOURCE etc. Need produce the requested XML sections. Must ensure sections exact. Need include >=1000 words. Need likely analyze the paper: opponent-adjusted evaluation NFL pass blocking/rushing, ridge Bradley-Terry models. Need include THINK_TRACE >=400 words. SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. RETROCAUSAL_GENEALOGY historical lineage and multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions.

Need be careful: strict invariants: zero betting lines, no fake ratios. Use formal equations. Need no mentions of spreads, totals, moneylines, odds. Avoid terms like odds? Could use log-odds? It's formal probability. But invariant says never mention spreads, totals, moneylines, or odds. "odds" maybe as betting term? But Bradley-Terry uses log odds; can phrase logit and probability without "odds"? It says zero betting lines; likely avoid betting terminology. But formal logistic uses log-odds. Could say log-linear probability transform. Need not use "odds" word. Use logit. Avoid "betting", "spread", "totals", "moneyline", "odds". Also avoid "lines"? maybe line? Paper uses pass line? It's okay? Maybe "lines" not betting? To be safe avoid "lines" except maybe "offensive lines"? Hmm strict zero betting lines: never mention spreads, totals, moneylines, or odds. "lines" alone might be okay? But maybe avoid "lines" except "offensive linemen" and "line play"? It's football. But to be safe, use "trenches", "blockers", "rushers". Avoid "betting". Use " wagering" no. 

Need cite exact [PAGE N] markers and verbatim quotes. Need many quotes. Need include formal equations from source. Need include units: tracking coordinates at 10 Hz, distance in meters? Source doesn't specify units for coordinates, but tracking likely field coordinates. Need say assume SI if coordinates are meters; if not, unit scale cancels in relative comparisons? Need formal. 2.5 seconds, log-loss dimensionless nats? Usually log-loss in bits if log2 or nats if ln; need specify. Source uses logit and log-loss but base not specified. We can assume natural logarithm, units nats per interaction; if log2, bits. Need state. EPA benchmarks dimensionless expected points? Eager EPA values maybe EPA units. Rescale to unit interval dimensionless. 

Need discuss singularity/breakdown regimes: λ -> 0 with incomplete graph, non-identifiability? Additive player effects have invariance: adding constant to all rusher and blocker? Let's inspect. Win model logit P= α + r_i - b_j + δ D. There is collinearity? α and shift of r/b. If add c to all r and all b? logit unchanged if r_i+c and b_j+c because difference same; α unchanged. Also α can absorb if shift only r? If all r shifted +c and α shifted -c? Because logit=α+r-b+δ. So identifiability needs constraints or ridge penalty but ridge not zero mean? Ridge selects min norm near zero; okay. Separation if class perfect? Finite data likely no complete separation due regularization. Breakdown when λ too small and matchup graph disconnected: effects not estimable across components, predictions in unseen player pairs rely defaults. Ordered split temporal drift: test distribution shift. Baseline unseen players defaults global. Severe class imbalance: p(sack)=0.0063, p(hit)=0.0109; rare events, multinomial coefficients for hit/sack high variance. Severity model classes hierarchical but fitted multinomial independent class logits? They assign most severe label, not ordinal model. The scalar severity weights from EPA mapping: w(o) = (EPA_no pressure - EPA_o)/(EPA_no pressure - EPA_sack). Let's compute to verify: EPAno=0.233, EPA hurry-only? They map win? They say no pressure = 0.233, hurry-only=0.019, hit-only=-0.161, sack=-1.856. Using defender perspective. w(o) = (0.233 - EPA_o)/(0.233 - (-1.856)) = (0.233 - EPA_o)/2.089. For win? They map win ≈0.10 likely hurry-only 0.019: (0.233-0.019)/2.089=0.214/2.089=0.1024. hit: (0.233 - (-0.161))=0.394/2.089=0.1886 -> 0.19, rounded to 0.20. sack = 2.089/2.089=1. loss no pressure=0. OK.

Need maybe discuss pass block win definition: rusher becomes closer to QB than blocker within 2.5 seconds. Equation distance d_{p,t} = sqrt((x_p,t - x_QB,t)^2 + ...). Need units: x,y coordinates. 10 Hz sampling, so Δt=0.1 s; 2.5 seconds corresponds to frames 0..25 after snap? Need include. Engagement labels. 

Need external validation: AUC Mann-Whitney. Enrichment@K. Need formal equations maybe include in SOURCE_OPERATORS? Could include AUC formula and Enrichment. Need units: dimensionless probabilities. 

Need multi-week traps: weekly path bootstrap, early weeks wide intervals. Need traps: small sample, prior smoothing, temporal ordered split, injury, weather? Need no fake. 

Need RLVR: Reinforcement Learning from Verifiable Rewards? User says RLVR_COUNTERFACTUAL_VETOES. Need produce 3 verifiable veto scenarios + predictions. Maybe RLVR means reinforcement learning with verifiable rewards, but in context could be counterfactual veto scenarios. Need ensure verifiable. Scenarios: If a rusher has high severity score but low exposure, veto leaderboard? If QB time-to-throw short causing no rusher win but blocker unaffected? Need predictions. Or if double-team rate changes. Need make them verifiable from data/paper? Could propose scenarios and predictions. Need 3. 

Need CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Need discuss physical layers: tracking distance and time, 2.5s threshold. Biomechanical: rusher win if closer to QB, but can be affected by blocker contact, rush lane, pocket collapse. Weather: NFL tracking 2021, weather might affect speed, field, QB time. Need proof of veto: If extreme weather (wind, rain, snow) systematically reduces pass rush or changes play-calling, model could misattribute to player unless controlled. But paper doesn't include weather covariates. Need formal: if weather W influences outcome and player assignment? Need show confounding. Could use inequality: omitted variable bias if Cov(r_i, W) nonzero. Need not invent equation? Formal causal proof. 

Need RETROCAUSAL_GENEALOGY: historical/scientific lineage & multi-week traps. Bradley-Terry 1952, ESPN PBWR 2018, PFF EPA 2018, STRAIN 2023, regularization Friedman 2010, bootstrap Efron. Multi-week traps: early season small sample, injury replacement, game scripts, weather, double-team help patterns, prior smoothing. 

Need RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. This is weird. Need discuss modeling decision behavior: teams in crisis (trailing) throw more, rush more, maybe opponent quality. Habit regression: if trailing team passes more, rushers get more high-quality reps, or blockers face more elite rushers. Counter-trap: adjust for opponent and baseline but still game script confounds. Clock: 2.5 second win, time-to-throw, trailing clock. Need recursive ToM: evaluator anticipates teams adjust to ratings, leading to regression. Need not bet.

Need final answer only XML sections? User says >=1,000-WORD DEPTH across these exact XML sections: list. Should output exactly those tags in order maybe. Need ensure total >1000 words. Each section substantial. THINK_TRACE >=400 words. Other sections maybe 150-250 each. Total >1200. Need not include markdown outside. 

Need no fake equations. Use formal LaTeX. Could include equations inside XML. Need ensure no betting terms. Avoid word "odds" entirely. But in AUC formula there is no odds. In logistic maybe "logit" okay. Avoid "line" maybe? Use "pass-blocking trenches". But page quote may include "line"? We can quote source with "line play"? It's okay? Invariant only betting lines. But to be safe avoid direct quote containing "lines"? It has "pass blocking and pass rushing". Fine. Avoid "spread", "totals", "moneylines", "odds". Check final for these words. "totals" maybe in "sum"? avoid. "spread" avoid. "odds" avoid. "line" as football line? Maybe use "trench". But source title includes "Pass Blocking and Pass Rushing" no line. However user source says "blocking engagements". Good. Avoid "lines" in "guidelines"? Maybe okay but no. Use "trenches".

Need cite exact [PAGE N] markers. Use [PAGE 1 of 14]? User says cite exact [PAGE N] markers. They gave [PAGE 1 of 14] but invariant says [PAGE N]. Use [PAGE 1], etc. Need maybe use [PAGE 3] etc. Need verbatim quotes. Need quote enough. Need ensure quotes exact from source. Need maybe include short quotes. 

Need equations: 
- Distance: d_{p,t} = sqrt((x_{p,t}-x_{QB,t})^2 + (y_{p,t}-y_{QB,t})^2). [PAGE 3]
- Win condition: ∃ t ≤ t_snap+2.5 s such that d_{i(t),t} < d_{j(t),t}. 
- Win model: logit P(Y_t=1) = α + r_{i(t)} - b_{j(t)} + δ D_t. [PAGE 4]
- Ridge objective: argminθ {-ℓ(θ)+λ||θ||_2^2}. [PAGE 4]
- Multinomial: P(C_t=c) = exp(η_{t,c}) / Σ exp(η_{t,c'}), η=α_c+r_{i(t),c}-b_{j(t),c}+δ_c D_t. [PAGE 4]
- Severity weight mapping: w(o)=... [PAGE 3-4]. Values. 
- Baselines: global win rate p_hat_global = 1/|Ttrain| Σ Y_t. [PAGE 5]
- Smoothed matchup: ptilde = (n Ybar + m pglobal)/(n+m). [PAGE 5]
- combine on logit scale: p_match = logit^{-1}((logit ptilde_R + logit ptilde_B)/2). Need avoid "logit"? It's formal. 
- AUC: formula. [PAGE 7]
- Enrichment@K: precision@K / (n+/n). [PAGE 8]
- Log loss: L = - (1/N) Σ [y_t log p_t + (1-y_t) log(1-p_t)] (nats if natural log). For multiclass cross-entropy. Need not source? Formal.

Need units: coordinates likely meters? Source doesn't say. We can state if x,y in meters, d in meters; if normalized, d in same coordinate units. Time seconds. 10 Hz => 0.1 s sampling. EPA dimensionless expected points (football value), mapped to unit interval dimensionless. Log-loss nats per interaction. λ dimensionless? Ridge penalty λ times squared coefficients; λ depends on scale of predictors (D binary, effects in logit units). Effects r,b,α,δ in logit units (dimensionless). Probability dimensionless. AUC and Enrichment dimensionless. 

Need breakdown regimes: 
- λ → 0 and graph disconnected: player effects not comparable across components, infinite variance, non-identifiable.
- λ too large: shrink to global α/0 effects, loses player separation.
- rare class: hit/sack counts low; p(sack)=0.0063, p(hit)=0.0109. Need expected counts: 153,138 * 0.0063 = 964? Let's compute: 153138*0.0063 = 964.77; hit 1669? 153138*0.0109=1669.2. Could mention. Test 30,628 expected sacks ~193, hits ~334. Need exact? We can compute approximate. 
- Ordered split: temporal distribution shift. Test may have different opponents, weather, injuries. 
- 2.5 threshold: if QB time-to-throw <2.5, rusher cannot win by definition, but may still affect pressure; blocker gets credit? Actually no outcome loss? If QB throws before 2.5 and no event, label loss, which conflates blocker success with QB quick decision. 
- Double-team indicator: coarse, only multiple blockers assigned same rusher overlapping windows. Does not capture chip by TE/RB? Actually page says double-team indicator records overlapping help when multiple blockers assigned same rusher. Limitations: help mechanisms only partially captured. 
- Opponent adjustment only interaction-level; teammate effects not modeled.

Need maybe discuss "severity model shows strongest alignment to expert recognition" [PAGE 1]. But All-Pro sample small. 

Need ensure no "odds" in "Mann-Whitney"? no. 

Potential issue: "Bradley–Terry" uses probability ratio? Could describe as paired comparison. Avoid "odds". But "logit" is okay. 

Need RLVR_COUNTERFACTUAL_VETOES: What is RLVR? Could define as verifiable counterfactual veto scenarios. Need 3 scenarios with predictions. Maybe:
1. QB time-to-throw shortening veto: If QB median time-to-throw falls below 2.5 s for many plays, rusher win rate cannot increase beyond threshold; model should not reward rusher severity for sacks? Prediction: rusher severity rating decreases or remains flat when controlling for QB TTT? Need verifiable: compute correlation between rusher rating and team QB TTT; if short TTT teams have lower rusher wins but higher blocker wins? 
2. Double-team help veto: If double-team rate increases against a rusher, his raw win/loss rises due to help? Actually double-team should reduce rusher win, δ likely negative? Model includes δD. If not, veto. Prediction: unadjusted rusher win rate should drop when D=1; severity model δ_sack <0. 
3. Weather/biomechanical veto: In wet/windy games, pass-rush severity decreases, QB accuracy/time changes. Without weather covariate, model attributes to players. Prediction: if game-level weather shock affects all players on both units, cross-player relative ratings within game unaffected if additive game effect? But if assignment not random, confounded. Need verifiable: Compare model ratings for players in weather-affected games vs not; if large residual game effect after controlling players, veto. Or use difference-in-differences? Need predictions. 

Maybe better RLVR scenarios tied to paper's validation: 
- Scenario A: If a rusher's All-Pro alignment is driven by raw sack counts, then baseline should match or beat model. Counterfactual veto: model must beat raw baseline AUC/enrichment. Observed severity blocker etc. Need prediction: severity model improves AUC for first team, but severity rusher first+second team AUC lower (-0.020) [PAGE 8]. Verifiable.
- Scenario B: If ordered holdout improvement is due to temporal leakage, random split would vanish? Need prediction: under leakage-free ordered split, improvement small; under random split maybe larger? Could be. 
- Scenario C: If double-team indicator omitted, model's rusher ratings inflate for rushers facing single blocks. Prediction: including D reduces rusher effects or changes rankings; if rankings unchanged, D not influential? Need. 

But "RLVR counterfactual vetoes" likely require veto scenarios that would falsify claim. Need 3 verifiable and predictions. We can present as: 
1. Temporal drift veto: If holdout gain is from future data leakage, then random split should improve more than ordered split; prediction: gain random > ordered. But paper only ordered. Verifiable by refitting random split. 
2. Rare-event severity veto: If severity model's external alignment is from All-Pro labels contaminated by reputation, then within-role permutation of labels should destroy enrichment; prediction: true enrichment > permuted distribution. Verifiable by permutation. 
3. Confounded QB time-to-throw veto: If rusher severity ratings reflect QB quick throws, then adding team-level time-to-throw or coverage covariates should reduce rusher effects; prediction: rank correlation between pre- and post-adjustment rusher ratings low for pass-rush-dependent players. Need maybe not in paper but verifiable. 

Need CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Could write formal omitted variable bias: Let θ_i be rusher effect. Observed outcome Y_t = f(r_i - b_j + δD + γ W_t + ε). If W correlated with assignment (e.g., teams with elite rusher play more in bad weather or game script), OLS/MLE estimates biased: E[r_hat_i] = r_i + γ * Cov(r_i, W)/Var... Need not too fake? Formal. Need say paper doesn't include W, so cannot veto physical/weather as confound unless within-game comparisons. Since model is interaction-level with player effects, if weather shock common to all interactions in a game, it may shift intercept but not player differences if assignment exchangeable. But if weather changes rush strategy, assignment to rushers, or blocker help, then bias. Need proof: If W_t affects outcome and rush assignment D_{i,t}, omitted variable. Need cite limitations: QB time-to-throw and play design indirectly represented [PAGE 13]. 

Need no toy equations. Formal causal equation okay. 

Need source operators: include formal equations and units, page citations, breakdown. Need not overdo but enough. 

Need THINK_TRACE deep multi-hop derivation & gray-zone audit >=400 words. Need maybe 500-600. Discuss how outcome construction leads to estimand, then model, then validation, then uncertainty, then external. Need audit gray zones: 2.5s label, double team, ordered split, small All-Pro, severity mapping. 

Need final length. Let's estimate words. THINK_TRACE 600. SOURCE 400. RETRO 200. TO_MIND 250. CROSS 250. RLVR 300. Total 2000. Good.

Need ensure exact section tags. No extra text. Use XML-like tags. Inside can have LaTeX. Need maybe escape ampersands? In XML content, & should be escaped? It's not strict XML? Use & in equations? Could cause issue. Better use LaTeX with \&? But user wants XML sections, not necessarily parse. Avoid raw & maybe. Use "and". But equations have &? Use align with &? Could use separate equations no alignment. Use \&? In LaTeX, alignment uses &, raw ampersand may break XML. Could avoid align. Use display equations with \[ ... \]. If using array, ampersand? Avoid. Use simple equations.

Need no markdown? The XML tags. Could include equations in $$...$$ or \[...\]. Fine. 

Need check for forbidden words: "odds" may appear if I say "log-odds". Avoid. "spread" avoid. "totals" avoid. "moneylines" avoid. "betting" avoid. "line" maybe in "head-to-head competition"? no. "offensive line" maybe source quote? Avoid. Use "blockers". "pass line" no. "lines" no. "linear" contains line? Not betting. But maybe okay. Avoid "line" word entirely? Could be hard. "ordered split" no. "baseline" no. "leaderboard" no. "weekly path" no. "pass-blocking trenches". 

Need cite verbatim quotes. Use quotes from source. Need ensure no quote includes forbidden? [PAGE 1] "ridge-regularized Bradley–Terry paired-comparison models" okay. "153,138 interactions" okay. "double-team indicator" okay. "2.5-second pass block win-rate definition" okay. "opponent dependent" okay. 

Need include page markers exact [PAGE 1], etc. Could cite multiple. 

Need discuss SI/information/probability units. In SOURCE section: units. 

Potential issue: "logit" maybe uses log probability ratio. Could be considered "odds"? It is not betting but maybe word not used. We can define as inverse link without saying ratio. 

Let's draft final. Need ensure no "odds". I'll mentally scan.

THINK_TRACE:
Start: The paper converts sparse trench outcomes into paired comparisons. Multi-hop: data -> distance -> labels -> BT -> regularization -> baselines -> bootstrap -> external. Discuss gray-zone. Need 400+ words. 

SOURCE_OPERATORS_AND_EQUATIONS:
List operators with equations and units. Include page citations and breakdown. Need formal. 

RETROCAUSAL_GENEALOGY:
Historical lineage. Multi-week traps. 

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression vs counter-trap vs clock. Need maybe weird but can discuss. 

CROSS_LAYER_VETO_ADJUDICATION:
Physical/biomechanical/weather veto proof. 

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios + predictions. 

Need maybe include exact page citations for each major equation. 

Let's write carefully. 

Check forbidden: "spread" not. "totals" not. "odds" not. "betting" not. "moneyline" not. "line" maybe if I write "baseline"? Contains line? baseline has line? It's okay? The invariant says zero betting lines, never mention spreads, totals, moneylines, or odds. "baseline" not betting line. But "line" substring? No. Use baseline heavily from source. Fine.

Need avoid "lines" in "front lines"? Use trenches.

Need no fake ratio like Force/Fatigue. We can include ratios only formal from paper: AUC, Enrichment, severity weights. No invented. 

Need mention exact singularity/breakdown regimes. 

Let's draft THINK_TRACE. Need >400 words. I'll write around 650. 

Potential word count: Let's create robust. 

THINK_TRACE text:
"The paper's central move is to convert non-i.i.d. trench events into exchangeable paired comparisons..." Need formal. Discuss distance. Then labels. Then model. Then regularization. Then baselines. Then validation. Then external. Gray zones: 2.5s, hit/sack priority, double-team, ordered split, All-Pro small sample. 

Need no "odds". Good. 

SOURCE_OPERATORS: equations.

Equations:
1. Sampling and distance:
\[
d_{p,t}=\sqrt{(x_{p,t}-x_{\mathrm{QB},t})^2+(y_{p,t}-y_{\mathrm{QB},t})^2}.
\]
Units: if x,y meters, d meters; 10 Hz means Δt=0.1 s. Page 3 quote "Tracking coordinates are recorded at 10 Hz". 

2. Win indicator:
\[
Y_t = 1\{\exists t \in [t_{\rm snap}, t_{\rm snap}+2.5\,{\rm s}]: d_{i(t),t} < d_{j(t),t}\}
\]
assuming engagement window. Page 3 quote. 

3. Binary BT:
\[
\operatorname{logit} P(Y_t=1) = \alpha + r_{i(t)} - b_{j(t)} + \delta D_t.
\]
Effects dimensionless. Page 4 quote. 

4. Ridge:
\[
\hat\theta = \arg\min_\theta \{-\ell(\theta)+\lambda \|\theta\|_2^2\}.
\]
λ dimensionless relative to likelihood. Page 4 quote. 

5. Multinomial:
\[
P(C_t=c)=\frac{\exp(\eta_{t,c})}{\sum_{c'}\exp(\eta_{t,c'})}, \eta_{t,c}=\alpha_c + r_{i(t),c} - b_{j(t),c}+\delta_c D_t.
\]
Page 4. 

6. Severity weight:
\[
w(o)=\frac{EPA_{\text{no pressure}}-EPA_o}{EPA_{\text{no pressure}}-EPA_{\text{sack}}}.
\]
Use values: 0.233, 0.019, -0.161, -1.856. Result w(win)≈0.10, w(hit)≈0.19, w(loss)=0, w(sack)=1.00. Dimensionless. Page 3-4. 

7. Baselines:
\[
\hat p_{\rm global}=\frac{1}{|T_{\rm train}|}\sum_{t\in T_{\rm train}}Y_t.
\]
Smooth:
\[
\tilde p_i^{(R)}=\frac{n_i^{(R)}\bar Y_i^{(R)}+m\hat p_{\rm global}}{n_i^{(R)}+m}.
\]
Combine:
\[
\hat p^{\rm match}_{ij}=\sigma\left(\frac{\operatorname{logit}\tilde p_i^{(R)}+\operatorname{logit}\tilde p_j^{(B)}}{2}\right).
\]
Use sigmoid not "logit inverse"? σ. Page 5. 

8. Severity baseline smoothing and combine maybe. 

9. Log loss:
\[
\mathcal L = -\frac{1}{N}\sum_t [y_t\ln p_t+(1-y_t)\ln(1-p_t)]
\]
units nats/interaction. Multiclass cross-entropy. Table values page 7. 

10. AUC:
\[
AUC = \frac{1}{n_+n_-}\sum_{i:y_i=1}\sum_{j:y_j=0}\left(1\{s_i>s_j\}+\frac12 1\{s_i=s_j\}\right).
\]
Page 7. 

11. Enrichment:
\[
Enrichment@K=\frac{hits@K/K}{n_+/n}.
\]
Page 8. 

Breakdown regimes: after equations. Need mention λmin values 1.31e-4 and 1.17e-4 [PAGE 7]. If λ too small etc. 

Need not too long but enough. 

RETROCAUSAL_GENEALOGY: lineage: Bradley-Terry 1952, ESPN PBWR Burke 2018, PFF EPA Eager 2018, STRAIN Nguyen 2023, ridge Friedman 2010, bootstrap Efron 1994, Glickman and Jones 2025. Multi-week traps: early season small sample, weekly path intervals widest early [PAGE 12], double-team rate 42.7% [PAGE 3], injury changes, game script, weather. 

RECURSIVE_THEORY_OF_MIND: Need phrase crisis habit regression. Could say if a blocker is known as elite, teams may scheme against him, changing double-team rates; ratings then feed scouting, altering future assignment. Counter-trap: use opponent adjustment and double-team indicator; clock: 2.5s and QB time. Need maybe include formal ToM: players/coaches anticipate evaluation. No fake. 

CROSS_LAYER_VETO_ADJUDICATION: Need physical proof. Use distance threshold: if rusher not closer by 2.5 s, no win regardless of physical disruption. Biomech: hand usage, pad level not observed; only tracking. Weather: rain/wind not in model. Formal omitted variable: outcome = latent + γW + ε; if W correlated with player assignment, player effects biased. But if W is game-common and additive, it cancels in within-game comparisons; if it changes play selection or engagement labels, it does not. Need proof. 

RLVR_COUNTERFACTUAL_VETOES: Need 3 scenarios. Could be:
1. Time-to-throw veto: If QB releases before 2.5 s, rusher cannot record win. Prediction: adding minimum time-to-throw filter would reduce win labels and shrink rusher effect separation; if severity model still aligns All-Pro after filter, veto fails. Verifiable by measuring fraction of interactions with QB release <2.5 s and re-estimating.
2. Double-team help veto: If rusher faces double-team more, raw win rate falls. Prediction: δ_win <0 and δ_sack<0; if δ not negative or double-team rate not 42.7? Verifiable from fitted δ. Page says double-team rate 42.7. 
3. Rare-event severity veto: If hit/sack labels are too sparse, severity model may overfit. Prediction: bootstrap CI for severity vs matchup overlaps zero [PAGE 7], so external enrichment must be tested against label permutation; if permuted All-Pro labels yield similar AUC, veto model's face validation. 

Need "verifiable RLVR veto scenarios + predictions" maybe format as numbered. 

Need ensure final not too terse. 

Let's check forbidden words in planned: "head-to-head" okay. "paired-comparison" okay. "baseline" okay. "ordered split" okay. "weekly path" okay. "time-to-throw" okay. "EPA" okay. "log-loss" okay. "logit" okay. "sigmoid" okay. "Mann–Whitney" okay. 

Potential issue: "totals" might appear if I say "subtotals"? Avoid. "sum" okay. 

Need no mention of "spread" as in spread of scores? Could use "distribution" instead. Avoid. 

Need no "line" maybe in "cross-entropy"? no. "linear" maybe avoid. 

Let's produce final with XML tags. Need no extra commentary. Ensure word count >1000. Let's write long. 

Double-check equations: Use \operatorname{logit}. If avoiding odds, okay. Use \sigma. 

Need cite page for severity weights: [PAGE 3] and [PAGE 4]. Quote: "The weights are anchored to EPA benchmarks for pass-rush outcomes reported in Eager (2018)." [PAGE 3]. 

Need mention exact λ values: [PAGE 7] "cross-validated ridge selected λmin = 1.31 × 10−4 for the win model and λmin = 1.17 × 10−4 for the severity model." Use. 

Need mention log-loss table improvements: [PAGE 7] Table 1. 

Need mention bootstrap CIs: [PAGE 7]. 

Need mention All-Pro: [PAGE 8] Table 3 severity rusher AUC -0.020. 

Need mention double-team rate 42.7% [PAGE 3]. 

Need mention data counts [PAGE 3]. 

Need mention minimum 200 interactions [PAGE 10? Table 4? Figure 2 page 10]. 

Need mention weekly path [PAGE 12]. 

Now final. Ensure no accidental forbidden. I'll scan as I write.

Potential phrase "probability odds" no. 

Let's start.

</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core epistemic move is to convert sparse, opponent-dependent trench events into a paired-comparison estimand. The authors do not ask, “Which blocker produced a box-score outcome?” Instead, they ask, “Conditional on a blocker–rusher engagement, which participant is more likely to achieve the operational outcome?” This is crucial because pass protection and pass rushing are not generated by isolated player actions; they emerge from a local interaction graph shaped by protection calls, rush lanes, quarterback timing, coverage pressure, and game script. The paper makes that dependence explicit by defining the unit of analysis as a blocker–rusher interaction and by estimating opponent-adjusted latent effects for both sides of the interaction [PAGE 2], [PAGE 3].

The first derivation hop is from tracking geometry to labels. The authors compute Euclidean quarterback distance for each player at each frame:
“For each frame t, we compute the Euclidean distance between the quarterback and any non-quarterback player” [PAGE 3]. This produces a time series for every blocker and rusher. The operational rusher win is then defined temporally: a rusher wins when, before 2.5 seconds after the snap, the rusher becomes closer to the quarterback than the blocker [PAGE 3]. That definition converts a continuous spatial process into a binary event with a fixed clock. The 2.5-second clock is therefore not cosmetic; it is an integral limit of the outcome operator. Any change in that threshold changes the estimand.

The second hop is from binary outcomes to severity. The paper assigns one label per interaction using priority “sack > hit > win > loss” [PAGE 3]. This avoids double-counting nested events: a sack is also a win in the loose sense, but it is coded as sack. The severity target is multinomial, not ordinal, even though the labels are narratively ordered. The model therefore learns separate class predictors for loss, win, hit, and sack, and only afterward maps class probabilities to a scalar severity score using EPA-anchored weights [PAGE 3], [PAGE 4]. That separation matters because the multinomial likelihood is not obligated to obey the monotone severity scale; the scale is a post-estimation interpretive device.

The third hop is regularization. The interaction table contains 153,138 interactions, 620 rushers, and 348 blockers [PAGE 3], so exposure is uneven. Some players face many matchups; some face few; some are isolated by opponent quality. Ridge regularization stabilizes this sparse bipartite comparison graph. The selected penalty values are tiny, “λmin = 1.31 × 10−4 for the win model and λmin = 1.17 × 10−4 for the severity model” [PAGE 7]. Tiny penalties indicate that the likelihood still carries most of the signal, but nonzero shrinkage helps prevent unstable estimates under incomplete overlap.

The fourth hop is validation. The authors use an ordered 80/20 split rather than a random split [PAGE 5]. This is conservative because future interactions may differ in opponent mix, injury context, weather, and game script. Their baselines are not trivial. The global baseline is only the training-set rate; the matchup baseline uses player-specific smoothed rates and combines them without a shared latent rating model [PAGE 5], [PAGE 6]. The reported holdout improvements are modest: win model versus global baseline improves by 0.0068 log-loss units, and versus matchup baseline by 0.0014; severity versus global improves by 0.0077, and versus matchup by 0.0015 [PAGE 7]. Those gains are small in absolute information-theoretic terms, but the paper is explicit that the baselines are already strong: “Because the matchup baselines already use player-specific training histories, the absolute gains are necessarily modest” [PAGE 7].

The gray-zone audit focuses on four unresolved layers. First, the 2.5-second label may miss functional pressure if the quarterback releases earlier. Second, the double-team indicator is coarse; it records overlapping help when multiple blockers are assigned to the same rusher [PAGE 3], but it does not fully encode protection slides, chip blocks, or backfield assistance. Third, the severity model’s scalar weights depend on an EPA calibration, not on the fitted multinomial itself. Fourth, external All-Pro validation is face validation, not gold-standard truth, because the number of positives is small [PAGE 7]. The paper’s own language is appropriately cautious: “we treat this exercise as an external face validation rather than a gold-standard outcome” [PAGE 7].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The tracking operator is a Euclidean distance measured per player and frame. For player \(p\) at frame \(t\),
\[
d_{p,t}=\sqrt{(x_{p,t}-x_{\mathrm{QB},t})^2+(y_{p,t}-y_{\mathrm{QB},t})^2}.
\]
The source states: “For each frame t, we compute the Euclidean distance between the quarterback and any non-quarterback player” [PAGE 3]. If tracking coordinates are expressed in meters, \(d_{p,t}\) has units of meters. The paper specifies 10 Hz tracking, so the sampling interval is
\[
\Delta t = 0.1\ \text{s},
\]
and the 2.5-second outcome window contains approximately 25 post-snap frames, depending on event timing conventions.

The binary rusher-win operator is a temporal crossing indicator. Let \(i(t)\) denote the rusher and \(j(t)\) the blocker in interaction \(t\). A win is defined when the rusher becomes closer to the quarterback than the blocker before 2.5 seconds:
\[
Y_t = \mathbf{1}\left\{\exists\, \tau \in [t_{\text{snap}}, t_{\text{snap}}+2.5\,\text{s}] : d_{i(t),\tau} < d_{j(t),\tau}\right\}.
\]
The source says: “A rusher win is recorded when, within the labeled engagement window and before 2.5 seconds after the snap, the rusher becomes closer to the quarterback than the blocker” [PAGE 3]. The indicator \(Y_t\) is dimensionless; time is measured in seconds; distance is measured in coordinate units, assumed meters for SI interpretability.

The binary opponent-adjusted model is a ridge-regularized Bradley–Terry logistic model:
\[
\operatorname{logit} P(Y_t=1) = \alpha + r_{i(t)} - b_{j(t)} + \delta D_t.
\]
The source gives exactly this structure: “logit P(Yt = 1) = α + ri(t) − bj(t) + δDt” [PAGE 4]. Here \(r_i\) is the rusher latent effect, \(b_j\) is the blocker latent effect, \(D_t\in\{0,1\}\) is the double-team indicator, and \(\alpha\) is an intercept. All coefficients are dimensionless because they operate on the logit scale, which is a transformed probability scale. Positive \(r_i\) means higher rusher-win probability; positive \(b_j\) means lower rusher-win probability because blocker effects enter with a negative sign [PAGE 4].

The severity operator is a multinomial Bradley–Terry model. For class \(c\in\{\text{loss},\text{win},\text{hit},\text{sack}\}\),
\[
P(C_t=c)=\frac{\exp(\eta_{t,c})}{\sum_{c'}\exp(\eta_{t,c'})},
\]
with
\[
\eta_{t,c}=\alpha_c+r_{i(t),c}-b_{j(t),c}+\delta_c D_t.
\]
The source states: “P(Ct = c) = exp(ηt,c) / P c′ exp(ηt,c′), ηt,c = αc + ri(t),c − bj(t),c + δcDt” [PAGE 4]. Probabilities are dimensionless; coefficients are dimensionless; the double-team coefficient \(\delta_c\) is class-specific.

The severity scalar mapping is an affine transformation of EPA benchmarks into the unit interval. The paper defines
\[
w(o)=\frac{EPA_{\text{no pressure}}-EPA_o}{EPA_{\text{no pressure}}-EPA_{\text{sack}}}.
\]
It cites “EPA benchmarks (no pressure = 0.233, hurry-only = 0.019, hit-only = −0.161, sack = −1.856)” [PAGE 3]. Substituting gives \(w(\text{win})\approx0.10\) and \(w(\text{hit})\approx0.19\), then rounded to
\[
w(\text{loss})=0,\quad w(\text{win})=0.10,\quad w(\text{hit})=0.20,\quad w(\text{sack})=1.00
\]
[PAGE 4]. The mapped severity score is dimensionless; EPA itself is an expected-points value, but the normalized mapping removes units by construction.

The global baseline for the binary task is the training-set mean:
\[
\hat p_{\text{global}}=\frac{1}{|T_{\text{train}}|}\sum_{t\in T_{\text{train}}}Y_t.
\]
The source defines this as “the train-set rusher win rate” [PAGE 5]. The smoothed rusher matchup estimate is
\[
\tilde p_i^{(R)}=\frac{n_i^{(R)}\bar Y_i^{(R)}+m\hat p_{\text{global}}}{n_i^{(R)}+m},
\]
and the analogous blocker estimate is
\[
\tilde p_j^{(B)}=\frac{n_j^{(B)}\bar Y_j^{(B)}+m\hat p_{\text{global}}}{n_j^{(B)}+m}.
\]
The source uses prior strength \(m=25\) for the win task [PAGE 5]. The matchup prediction is combined on the logit scale:
\[
\hat p_{ij}^{\text{match}}=\sigma\left(\frac{\operatorname{logit}\tilde p_i^{(R)}+\operatorname{lexact}\tilde p_j^{(B)}}{2}\right),
\]
where \(\sigma\) is the logistic inverse-link function. The source phrases this as “averaging on the logit scale” [PAGE 5].

For severity baselines, the global class frequencies are
\[
\hat\pi_c^{\text{global}}=\frac{1}{|T_{\text{train}}|}\sum_{t\in T_{\text{train}}}\mathbf{1}\{C_t=c\}.
\]
Player-specific class profiles are smoothed with \(m=50\) because “player-level multiclass frequencies are sparser and noisier than binary win rates” [PAGE 6]. The matchup severity logits use loss as reference:
\[
m_{ij,c}=\frac{\eta_{i,c}^{(R)}+\eta_{j,c}^{(B)}}{2},
\]
with \(m_{ij,\text{loss}}=0\) [PAGE 6]. The resulting class probabilities are softmax-normalized over the four classes.

The validation loss for the binary task is log-loss. If natural logarithms are used, units are nats per interaction:
\[
\mathcal L_{\text{win}}=-\frac{1}{N}\sum_{t=1}^{N}\left[y_t\ln \hat p_t+(1-y_t)\ln(1-\hat p_t)\right].
\]
If base-2 logarithms are used, units are bits per interaction. The paper reports holdout log-loss values in Table 1 [PAGE 7]. For severity, the loss is multiclass cross-entropy:
\[
\mathcal L_{\text{sev}}=-\frac{1}{N}\sum_{t=1}^{N}\ln \hat\pi_{t,C_t}.
\]
Again, units are nats or bits depending on logarithm base; the paper does not specify the base, so natural logarithms are the standard SI-compatible information assumption.

External validation uses rank AUC:
\[
AUC=\frac{1}{n_+n_-}\sum_{i:y_i=1}\sum_{j:y_j=0}\left[\mathbf{1}\{s_i>s_j\}+\frac{1}{2}\mathbf{1}\{s_i=s_j\}\right].
\]
The source gives this Mann–Whitney form [PAGE 7]. AUC is dimensionless and bounded in \([0,1]\). Enrichment@K is
\[
Enrichment@K=\frac{\text{precision}@K}{n_+/n},
\]
where \(K\) is the number of All-Pro positives in the role/accolade slice [PAGE 7], [PAGE 8]. Enrichment is dimensionless.

Breakdown regimes are explicit. If \(\lambda\to0\) and the matchup graph is disconnected, player effects in separate components are not comparable. If \(\lambda\) is too large, effects shrink toward zero and player separation disappears. If an unseen player appears in test, the baseline defaults to global rates [PAGE 5], [PAGE 6], but the fitted latent model cannot directly assign that unseen player a unique effect without imputation. For rare classes, the severity model has limited information: observed sample frequencies are “\(\hat p(\text{sack}) = 0.0063\)” and “\(\hat p(\text{hit}) = 0.0109\)” [PAGE 4], so hit and sack coefficients are high-variance relative to loss and win coefficients. The ordered split also creates temporal breakdown risk: if opponent quality, injuries, weather, or game script drift after the cutoff, the test distribution is not exchangeable with training. The paper’s own uncertainty reporting acknowledges that “for severity versus the stronger matchup baseline, the interval overlaps zero” [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological genealogy begins with paired-comparison theory. The paper cites Bradley and Terry (1952) as the origin of paired-comparison rank estimation [PAGE 14]. That lineage matters because trench play is naturally a contest graph: each blocker–rusher interaction is a local contest, and the latent parameters summarize repeated contest outcomes. The paper also cites Glickman and Jones (2025), connecting the approach to modern rating systems for head-to-head competition [PAGE 14]. This lineage gives the model a formal justification for opponent adjustment: a player’s rating should reflect who they faced, not merely the raw count of successful or unsuccessful engagements.

The football-specific lineage is shorter but important. The paper references ESPN’s pass block win rate, defined by whether a blocker sustains a pass block for 2.5 seconds, citing Burke (2018) [PAGE 1], [PAGE 14]. It also references STRAIN, a tracking-based pass-rush measure from Nguyen et al. (2023) [PAGE 14]. The current paper extends this lineage by constructing a blocker–rusher interaction dataset and fitting separate binary and severity models. The source states that prior metrics “do not by themselves separate a blocker’s performance from the quality of the opposing pass rush, nor do they produce opponent-adjusted joint ratings for blockers and rushers” [PAGE 2].

The statistical lineage includes ridge regularization through Friedman, Hastie, and Tibshirani (2010) [PAGE 14], and uncertainty estimation through Efron and Tibshirani (1994) [PAGE 6], [PAGE 14]. The paper uses two bootstrap procedures: end-to-end game resampling with \(B=1000\), and weekly path bootstrap with \(B=100\) [PAGE 6]. These procedures recognize that uncertainty is not only sampling uncertainty; it is also game-level clustering and longitudinal exposure accumulation.

Multi-week traps are inherited from the temporal structure of an NFL season. The paper reports 18 cumulative weekly checkpoints for each player-model-role series [PAGE 8], and the weekly path figure shows that “early-week intervals are widest when cumulative exposure is still limited” [PAGE 12]. This creates a classic early-season trap: a rusher or blocker may appear elite after two or three games because of favorable opponent mix, script, or injury replacement, but the uncertainty band remains wide. A second trap is role volatility: backup linemen and rotational rushers may accumulate high ratings in limited but favorable matchups. The paper mitigates this in leaderboards with “minimum 200 interactions” [PAGE 10], [PAGE 11], but that threshold does not eliminate game-script bias. A third trap is schedule-based opponent strength. If a player faces many low-quality blockers early, his rusher rating can inflate; if he faces elite blockers while injured or out of position, it can deflate. The Bradley–Terry structure corrects for observed opponents, but not for unobserved teammate help, protection calls, or quarterback behavior.

A further historical trap is outcome-label drift. The severity hierarchy depends on event annotations. Sacks come directly from event annotations; hits are non-sack quarterback-contact events; wins are pressure wins without contact; losses are the remainder [PAGE 3]. If annotation practices change across teams, stadium crews, or weeks, the model may infer player differences from label-generation artifacts. The paper does not report annotation reliability audits, so this remains a multi-week reproducibility risk. The safest genealogical interpretation is that the model is a stable comparison engine, but its long-run calibration depends on consistent event labeling and stable role definitions.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory of mind appears when coaches, coordinators, and evaluators anticipate how players will be rated, and then alter behavior to exploit or protect those ratings. In this paper, the rating system is not merely descriptive; it is a potential scouting input. If a rusher is known to have a high severity score, opposing protections may allocate extra help, chips, slide protections, or quicker quarterback answers. That changes the rusher’s future engagement distribution. If the model does not fully observe those help mechanisms, the rusher’s subsequent rating may regress because the player now faces more double-teams, not because his pass-rush ability declined. This is a crisis-habit regression trap: early-season performance may reflect favorable structure, while later performance reflects countermeasures.

The paper partially anticipates this with the double-team indicator. It defines the indicator when “multiple blockers are assigned to the same rusher within overlapping time windows” [PAGE 3]. It also notes that “the double-team rate is 42.7%” [PAGE 3]. That rate is high enough that ignoring help structure would materially distort rusher evaluation. The model includes the indicator as an observed covariate rather than absorbing it into player effects: “This indicator enters both BT models as an observed matchup covariate rather than being absorbed into player effects” [PAGE 3]. That design choice is important because it separates observed help from latent player quality.

The counter-trap is that the double-team indicator is still coarse. The paper admits: “help mechanisms (chip blocks, tight-end/running-back assistance, and protection-slide structure) are only partially captured by a coarse double-team indicator” [PAGE 13]. Thus, recursive opponent adjustment can occur even when the binary indicator is zero: a blocker may chip, a back may scan and help, or the pocket may be designed to move the quarterback away from pressure. The model sees only the outcome and the coarse indicator, not the full protection geometry. If a coaching staff anticipates that a rusher is highly rated and consistently sends help, the rating system may understate the rusher’s intrinsic disruption unless the help is measured more richly.

The clock layer is the 2.5-second outcome window and quarterback time-to-throw. If a quarterback answers quickly, the rusher may be physically dominant but still receive no win label because the outcome clock expired before the crossing. The paper notes that “the win label is based on a distance-to-quarterback rule and may not fully capture functional pressure quality” [PAGE 13]. It also notes that “sacks and pressure proxies are influenced by quarterback time-to-throw and play design, which are only indirectly represented” [PAGE 13]. In recursive terms, teams can manipulate the clock by choosing quick passes, max protection, or outside throws. A blocker may look better because the quarterback removes himself from the rusher’s path; a rusher may look worse because the clock denies him time to complete the pass-rush sequence.

The safest interpretive posture is therefore not to treat the ratings as pure ability measures. They are interaction-level efficiency estimates conditional on observed engagement outcomes. The paper itself says scores “should also be interpreted as interaction-level efficiency conditional on observed pass-rush engagements, not as an all-snap measure of overall player value” [PAGE 8]. In a recursive scouting environment, those ratings should be paired with role context, protection structure, quarterback timing, and opponent scheme. Otherwise, the model risks rewarding players who benefited from hidden help or penalizing players who were denied the clock needed to convert dominance into the defined outcome.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer is the tracking-distance operator. The model only records a rusher win if the rusher becomes closer to the quarterback than the blocker before 2.5 seconds [PAGE 3]. This creates a formal physical veto: if a rusher generates hand pressure, collapses the pocket edge, or forces a hurried throw but never becomes closer than the blocker within the window, the binary label remains a loss. The severity layer can partially rescue this because hit and sack are annotated outcomes, but the binary win model cannot. Therefore, any claim that a rusher’s binary rating measures total pressure value is vetoed by the geometry definition unless additional outcomes are included.

The biomechanical layer is unobserved. The model does not include pad level, hand placement, center of mass, acceleration, contact quality, or leverage. It observes only coordinates and event annotations. A rusher may be beaten physically because of a false step or poor pad level, while the model records only whether the blocker remained between the rusher and quarterback for 2.5 seconds. Conversely, a blocker may be physically overmatched but rescued by pocket collapse elsewhere or by the quarterback stepping up. The paper acknowledges that the win label “may not fully capture functional pressure quality” [PAGE 13]. This is a biomechanical veto against interpreting the rating as a complete measure of pass-rush or pass-protection skill.

The weather layer is not explicitly modeled. The paper uses 2021 regular-season tracking data [PAGE 2], but it does not include temperature, wind, precipitation, field surface, or stadium roof covariates. Weather can affect foot traction, release speed, quarterback timing, ball handling, and coaching conservatism. In a rain or wind game, teams may simplify protection, shorten dropbacks, or avoid aggressive deep passing. That can reduce the number of rusher wins independent of player skill. If weather is correlated with player assignment, season timing, or team schedule, it becomes an omitted-variable confounder.

A formal proof of potential bias is as follows. Let the latent interaction outcome be
\[
Y_t = f\left(\alpha + r_{i(t)} - b_{j(t)} + \delta D_t + \gamma W_t + \varepsilon_t\right),
\]
where \(W_t\) is an unobserved weather or field condition shock. If \(W_t\) affects outcomes and is correlated with the assignment of rushers to particular interactions, then the estimated player effects converge to
\[
\hat r_i \approx r_i + \gamma\frac{\operatorname{Cov}(r_i,W)}{\operatorname{Var}(r_i)}
\]
under simplified linear projection logic. In words, if certain rushers disproportionately participate in weather-affected games or in game scripts where weather changes rush opportunity, their estimated effects absorb the weather shock.

There is, however, a partial cancellation regime. If weather is a game-common additive shock and player assignment is exchangeable within each game, then the shock can shift the intercept for that game without changing relative blocker–rusher effects. The paper’s interaction-level paired structure helps in that case because both participants in an interaction share the same game environment. But the veto survives when weather changes strategy: for example, if bad weather causes more max-protection schemes, more quick passes, or more double-teams against a specific rusher. In that case, the shock is not game-common in a way that cancels; it is assigned to particular player paths.

The cross-layer adjudication is therefore conditional. The model is valid as an opponent-adjusted interaction model under the assumption that unobserved physical, biomechanical, and weather shocks are either negligible or ignorable given the observed interaction structure. The model is not valid as a complete physical skill estimator without richer tracking features, contextual covariates, and robustness checks across weather conditions. The paper’s own limitation section supports this veto: “sacks and pressure proxies are influenced by quarterback time-to-throw and play design, which are only indirectly represented” [PAGE 13]. That is a direct admission that the cross-layer proof is not fully satisfied for causal player valuation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Time-to-throw veto.  
If the rusher-win label is driven substantially by quarterback time-to-throw, then shortening the exposure clock should mechanically reduce rusher wins. Verifiable test: identify interactions where the quarterback releases before or near 2.5 seconds, then re-estimate rusher effects after excluding or downweighting those plays. Prediction: if time-to-throw is a major confound, the win-model rusher ratings will shrink or reorder when quick-release plays are removed, and the severity model’s rusher coefficients will also attenuate. If the elite rusher rankings remain stable after filtering quick-release plays, the time-to-throw veto is weakened. The paper’s own caution that the win label “may not fully capture functional pressure quality” [PAGE 13] makes this a live veto, not a hypothetical one.

Scenario 2: Double-team help veto.  
If observed double-teaming systematically suppresses raw rusher outcomes, then a model that ignores help structure will overstate rusher skill or understate it depending on assignment. The paper’s model includes the double-team indicator, so the veto test is to inspect the fitted coefficients \(\delta\) and \(\delta_c\). Verifiable test: compare win probability when \(D_t=1\) versus \(D_t=0\) while holding player effects fixed, and compare severity-class coefficients for sack, hit, win, and loss. Prediction: \(\delta_{\text{win}}<0\) should hold in the binary model, and the severity model should show negative class-specific effects for rusher-favorable severe outcomes under double-team conditions. If the fitted double-team coefficient is positive or statistically indistinguishable from zero despite a 42.7% double-team rate [PAGE 3], the help-structure veto would be triggered, suggesting either annotation noise or insufficient model sensitivity. Because the paper reports that the indicator enters both models [PAGE 3], this scenario is directly verifiable from fitted parameters.

Scenario 3: Severity alignment veto via label permutation.  
If the severity model’s external All-Pro alignment is real, it should exceed alignment obtained by randomly permuting All-Pro labels while preserving role and accolade counts. Verifiable test: keep the fitted severity scores fixed, randomly assign All-Pro labels within each role/accolade slice many times, recompute AUC and Enrichment@K, and compare the observed values to the permutation distribution. The paper already notes that “the number of positives is small within each role/accolade slice,” and it treats external validation as face validation rather than gold standard [PAGE 7]. Prediction: the observed severity AUC and Enrichment@K should lie above the upper tail of the permutation distribution. If they do not, the apparent expert alignment could be an artifact of small-sample role clustering or baseline structure. The paper’s own reported result for severity rushers in first+second team is “AUC 0.732, Base AUC 0.752, ∆AUC -0.020” [PAGE 8], so this veto is especially relevant there: the severity model does not uniformly dominate raw baselines, and permutation testing would clarify whether the mixed external validation is genuine signal or noise.
</RLVR_COUNTERFACTUAL_VETOES>