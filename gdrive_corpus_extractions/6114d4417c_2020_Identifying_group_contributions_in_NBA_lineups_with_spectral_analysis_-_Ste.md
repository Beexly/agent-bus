---
source: "2020 Identifying group contributions in NBA lineups with spectral analysis - Stephen Devlin and David Uminsky.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 20
model: deepseek/deepseek-v4.1-flash-1017
words: 7871
---

<NATIVE_REASONING>
We need answer user. They provided GSE/GSI Frontier Reasoning Foundry prompt and source paper. Need produce response with required XML sections, >=1000 words depth, no betting lines. Need analyze paper, formal LaTeX, units, page citations verbatim quotes, breakdown/singularities, retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication physical/biomechanical/weather veto proof, 3 verifiable RLVR counterfactual vetoes predictions. Need likely answer as research analysis? User just gives source and invariants. Need infer want analysis of paper using framework. Need craft comprehensive. Need include exact [PAGE N] markers and verbatim quotes. Need avoid betting lines. They didn't ask specific question, likely need produce frontier reasoning answer grounded in source. Need follow exact XML sections. Need >=1000 words. Need no "toy equations". Need formal LaTeX equations with units, assumptions, singularity/breakdown regimes. Need cite exact pages and verbatim quotes. Need be careful: source pages 1-20. We need mention paper's spectral analysis, group contributions, orthogonal decomposition, SCLP, dimensions, stability, L2 mass, connection to linear models. Also cross-layer veto adjudication: physical/biomechanical/weather veto proof. This paper basketball only; no weather. Need adjudicate: physical/biomechanical/weather vetoes? Need show how physical/biomechanical/weather constraints would veto inferences from spectral model? The prompt likely from a sports prediction frontier foundry; wants combine source with physical, biomechanical, weather veto proof. But source is academic paper on lineup spectral analysis. Need not invent betting. Need discuss no weather in indoor NBA, but travel/venue? Physical/biomechanical veto: player load, injuries, minutes, possession counts, lineup co-occurrence, matchup quality, garbage time. We need "proof" perhaps formal: any deployment of spectral contribution as causal/predictive must be vetoed if biomechanical load thresholds exceed? Need avoid fake ratios. We can formalize valid inference conditions. Need maybe include "CROSS_LAYER_VETO_ADJUDICATION" with equations like measurement model \(f(L)=pm_L\), SCLP, projection. Physical/biomechanical veto: spectral decomposition is descriptive, not causal, opponent-unadjusted, roster-constrained, and cannot be used if minutes/loads outside empirical support. Weather veto: NBA indoor, weather not direct; but schedule/travel can affect performance. Need exact singular/breakdown regimes: if \( |X| \) etc? The projector has null spaces, lower dimensional than groups; inner product uses pr; if group indicator projects to zero? SCLP divides by log possession \( \log(\mathrm{Poss}_g)\), breakdown when Poss=1? log(1)=0, undefined. Need mention SCLP normalizes spectral contribution by log possessions; for possession=1 denominator zero. Need exact singularity: \( \mathrm{SCLP}_g = \langle \mathrm{pr}_{V_k}(\phi_g), f_k\rangle / \log(\mathrm{Poss}_g) \) if Poss_g=1 => division by zero; if Poss_g=0 not observed. Also dimension deficiency: \( \dim V_i < \binom{15}{i}\) for i=1...4? For i=5 dim V5=1638 < 3003. This means individual indicator spaces linearly dependent; projection of indicator not unique? Mallows method handles. Need mention orthogonal decomposition \(L(X)=\oplus_{i=0}^5 V_i\), \(f=\sum f_i\), \(\|f\|^2=\sum\|f_i\|^2\). Units: pm in points? Paper computes plus-minus as (PPP difference)*possessions, dimensions points? Let's see example: (6/3 -3/2)*3 =1.5. Points per possession dimensionless? They call plus-minus; units points? Actually points-per-possession times possessions = points, but difference times possessions = points. In example 1.5 points? It's points (net points). PM values thousands. SCLP "spectral contribution per log possession" maybe points per log-possession? Units ambiguous; need state units inherited from \(f\), and division by \(\log(\text{possessions})\) makes unit points per log-count (not physically meaningful, normalization). Need maybe mention inner product average over lineups; units of \(f\) squared? Projection coefficients in same units as f. Need formal equations.

Need include source citations and verbatim quotes. Use [PAGE 1 of 20] etc. We can quote exact phrases. Need exact marker format [PAGE N]. The source text has markers [PAGE 1 of 20]. Prompt says cite exact [PAGE N] markers and verbatim quotes. Use [PAGE 3 of 20] etc. Need not overdo. Need include enough.

Need structure exactly XML tags. The tags names must match. Maybe include preamble? User requested exact XML sections. We can output XML sections only. Need ensure no betting lines; never mention odds/spreads etc. Avoid even "betting". Need use word "non-betting"? Better avoid term.

Need produce >=1000 words. We can do ~3000. Desired oververbosity 5. Need deep but not too huge. Need multi-hop derivation. Need "RLVR_COUNTERFACTUAL_VETOES" with 3 verifiable scenarios and predictions. Need be concrete and testable: (1) low-possession pair SCLP sign instability: bootstrap; prediction if <200 possessions? Paper uses 200 threshold; test with resampled seasons, sign flips >? Need verify. (2) possession-normalization singularity: if Poss=1, SCLP undefined; prediction for groups with log possession near zero. (3) opponent/garbage-time confound: raw plus-minus no opponent adjustment; prediction SCLP ranking changes if garbage-time removed, or if opponent strength adjusted. Need "verifiable" with metrics: sign agreement, rank correlation, confidence interval. Need mention exact predictions and falsification conditions. Need ensure no fake ratios? We can use probability/CI and correlation, not fake ratios. Equations formal.

Need "RETROCAUSAL_GENEALOGY": historical/scientific lineage & multi-week traps. Need trace from Fourier/spectral analysis, Diaconis, representation theory, ANOVA, Johnson graph, Mallows, ridge, Sill, Maymin/Kuehn/Grassetti. Multi-week traps: treating orthogonal components as causal; ignoring aggregation over season; using SCLP across spaces/teams; low-possession noise; time window leakage? Need explain retrocausal: if you look back from result to assign group synergy after the season, you can overfit; the method is descriptive, not prospective. Need mention "retrocausal genealogy" perhaps from source's lineage and traps: the decomposition is retrospective on complete season; any forward-looking use must avoid using future data. The paper's bootstrapping is retrospective; to predict future, need out-of-sample. Multi-week traps: weekly lineup changes, roster changes, minutes variation, opponent adjustments not included. Need maybe mention "retrocausal" meaning using full-season aggregated data to infer earlier causal contributions; causal direction not established. Formal: \(f\) is aggregated after season; projection \(f_k\) depends on all games, so player group contribution at week t is not identified by full-season \(f_k\). Need define time-indexed \(f^{(t)}\), missing.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. This is likely sports crisis decision-making: coaches/players under pressure regress to habits; spectral analysis might identify lineups but coaches' behavior (substitution patterns) creates selection bias. Need explain recursive theory of mind: analyst models coach, coach models opponent, players model roles; spectral contribution is not intention. Need discuss crisis habit regression: high-pressure minutes for stars, lineup continuity; counter-trap: opponent adjusts, spectral synergy may be matchup-specific; clock: late-game possessions, garbage time. Need include that paper notes "garbage time" future work [PAGE 14?]. Actually page 14 conclusion says devaluing garbage time. Need quote. Need mention "recursive theory of mind" as modeling agents' beliefs: lineups selected by coaches based on perceived synergy; observed \(f(L)\) conditioned on selection. Need formal selection model: \(P(L \text{ observed}| \mathcal{I}_t)\) and bias. Need not overdo.

Need "CROSS_LAYER_VETO_ADJUDICATION": physical/biomechanical/weather veto proof. Need formal conditions. Could structure as veto tests:
- Physical: possession/minutes load. If player group's observed possessions exceed biomechanical load envelope or if injury/rest status changes, spectral contribution cannot be transported. Formal: define load vector \( \ell_{p,t}=(\text{minutes}, \text{distance}, \text{accelerations}, \text{jumps})\); need not invent ratios. State threshold \( \ell_{p,t} > L^{\max}_{p}\) (clinically/physiologically defined) vetoes deployment; no ratio. But no data in source; source lacks biomechanical data. So "proof" is epistemic: paper only has play-by-play PM and possessions; no physical/biomechanical/weather covariates. Thus cross-layer claims are unidentifiable and vetoed. Need quote paper: "we ignore individual production statistics and infer synergies directly from observed team success" [PAGE 2]. "we model group contributions aggregated over all opponents, and without controlling for the quality of the opponents faced" [PAGE 11? Actually page 11 text near Table 11: "we model group contributions aggregated over all opponents, and without controlling for the quality of the opponents faced." Page 11? In source page 11 of 20 is printed page 225. Yes [PAGE 11]. "adjusting the lineup level plus-minus to account for quality of opponent... valuable next step" [PAGE 14]. "devaluing so-called garbage time" [PAGE 14]. Need cite. Weather: NBA indoor; source has no weather variable; any weather claim is outside scope. But schedule/travel/venue can be a proxy; not identified. "Physical/biomechanical/weather veto proof": we can say no valid cross-layer inference unless data include those layers; formal absence of covariates means SCLP is a projection in lineup-function space, not in physical load space. Need maybe use "veto" as condition: if an external layer changes the mapping from lineup to success, \(f\) is not invariant. Need define \(f^{(c)}(L)\) under conditions c; transport requires \(f^{(c_1)}=f^{(c_2)}\) or known adjustment; otherwise veto. Need cite paper's "roster constrained" [PAGE 2] and "not a model-based approach... free of modeling assumptions" [PAGE 2]. Actually this "free of modeling assumptions" is a claim; our audit: not free of measurement/aggregation assumptions. Need carefully phrase.

Need "SOURCE_OPERATORS_AND_EQUATIONS": Need list operators:
- \(X = \binom{[15]}{5}\), \(|X|=3003=\binom{15}{5}\).
- \(f:X\to \mathbb{R}\), \(f(L)=pm_L\).
- PM computation \(pm_L = (\frac{P_L}{N_L} - \frac{P_M}{N_M})N_L\)? Wait example: (6/3 -3/2)3 =1.5. Yes \(pm_L=(P_L/N_L - P_M/N_M)N_L\), \(pm_M=(P_M/N_M - P_L/N_L)N_M\). Units: net points; \(P\) points, \(N\) possessions. Actually points per possession times possessions = points. Need include.
- Inner product \(\langle g,h\rangle = \frac{1}{|X|}\sum_{x\in X} g(x)h(x)\).
- Decomposition \(L(X)=\oplus_{i=0}^5 V_i\), \(f=\sum f_i\), \(f_i=\mathrm{pr}_{V_i}f\).
- \(\|f\|^2=\sum \|f_i\|^2\).
- Mallows: \(\phi_g\) indicator, contribution \(C_g=\langle \mathrm{pr}_{V_k}(\phi_g), f_k\rangle\), \(k=|g|\).
- SCLP \(=C_g/\log(\mathrm{Poss}_g)\).
- Dimensions table: V0 1; V1 14 vs 15; V2 90 vs 105; V3 350 vs 455; V4 910 vs 1365; V5 1638 vs 3003. Cite [PAGE 4? Table 1 on page 4 of 20? Actually page 4 of 20 has Table 1. Yes [PAGE 4 of 20]. Need quote "Space Dimension Number of Groups" maybe.
- Johnson graph J(15,5) has 6 eigenvalues associated with effect spaces. Cite [PAGE 4].
- Ridge model \( \hat\beta_{\rm ridge} = \arg\min_\beta \{\|y-X\beta\|^2+\lambda\sum_{i=1}^p\beta_i^2\}\), \(y=f(L)\), nonorthogonal \(V=W_0+\cdots+W_5\). Need cite [PAGE 10-11].
- Bootstrap: sample plays with replacement, 500 bootstrapped seasons; correlation r=0.953 etc. Cite [PAGE 12-13].
- L2 mass table and null distribution. Cite [PAGE 13].
Need singularities:
1. \( \log \mathrm{Poss}_g=0 \) when Poss=1; SCLP undefined. If Poss=0, group absent; no contribution.
2. \( \dim V_i < \binom{15}{i}\) for i=1..4 and V5; impossible to assign unique coordinate to every group; Mallows projection not an inverse; contribution is projection onto subspace, not a unique coefficient.
3. Orthogonality is only in lineup-function space, not causal or across conditions; if selection/opponent/garbage time changes, decomposition changes.
4. Ridge regression non-orthogonal and p>>N; coefficients not pure; regularization path λ changes; no uniqueness? Ridge has unique for λ>0 but not group-pure.
5. Low possession: high variance; paper says lineups with few possessions inherently noisier [PAGE 7]. Need quote.
6. SCLP not comparable across teams/effect spaces: source says "SCLP values are not directly comparable across teams... relative values within an effect-space are comparable" [PAGE 9]. Also "values are not directly comparable across effect spaces" [PAGE 9]. Need quote exact.

Need "THINK_TRACE" >=400 words. Need include multi-hop derivation and gray-zone audit. Could write 700 words. Need no hidden chain-of-thought? The prompt asks THINK_TRACE. We can provide a transparent audit, not private chain. We should not reveal hidden chain-of-thought; instead provide a concise reasoning trace. But prompt explicitly wants deep multi-hop derivation. We can provide summary reasoning, not actual internal monologue. Need comply. The system says no explicit restriction on chain-of-thought? We need not give detailed private CoT; but we can provide rationale. Since it's requested, we can include "audit trace" with steps. Fine.

Need answer should be self-contained. Let's draft.

Need exact XML tags. No markdown? Could include LaTeX inside. Use XML sections exactly. Need "SOURCE_OPERATORS_AND_EQUATIONS" etc.

Need word count >=1000. We'll produce ~2500-3500.

Need cite exact [PAGE N] markers. Use quotes.

Let's plan sections.

<THINK_TRACE>
- Start: Paper defines team success function f on lineups, computes PM from play-by-play. Need note \(X\) size 3003. Decomposition via S15 and Johnson graph. Orthogonal effect spaces V0..V5. Mallows method projects indicator to Vk to get pure group contribution. SCLP normalizes by log possessions.
- Multi-hop: Step 1 measurement: PM units net points; aggregation over possessions and lineups. Step 2 group structure: S15 action; V_i invariant/irreducible; dimensions. Step 3 projection: \(f_i\). Step 4 interpretability: indicator projection. Step 5 normalization SCLP. Step 6 stability: bootstrap; correlation depends on possessions. Step 7 causal/transport: orthogonal decomposition is descriptive; not opponent adjusted; not physical/weather.
- Gray-zone audit: "pure" means orthogonal to lower-order in function space, not causal. The phrase "pure triple" can be misinterpreted. Need quote "Contributions attributed to a group of three, for example, have been separated from the lower-order contributions..." [PAGE 1]. But "orthogonality" doesn't remove opponent, selection, load, weather. The paper acknowledges opponent and garbage time future work [PAGE 14]. Also "roster constrained" [PAGE 2]. So any cross-layer claims vetoed.
- Breakdown: SCLP division by log possession; low possession variance; dimension deficiency; SCLP not cross-team/space comparable; non-model-based claim not assumption-free. 
- Conclude: valid use is within-team, within-season, descriptive ranking with possession thresholds; use out-of-sample and load/opponent/garbage-time adjustments before deployment.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Need list formal. Use paragraphs and equations. Include units and assumptions. Include page citations.

Equations:
\(X=\{L\subset[15]: |L|=5\}\), \(|X|=\binom{15}{5}=3003\) [PAGE 2].
\(pm_L = (P_L/N_L - P_M/N_M)N_L\), \(pm_M=(P_M/N_M - P_L/N_L)N_M\). Units net points; \(P\) points, \(N\) possessions. Quote example maybe.
\(f(L)=pm_L\).
\(\langle g,h\rangle = |X|^{-1}\sum_{x\in X}g(x)h(x)\).
\(L(X)=\oplus_{i=0}^5 V_i\), \(f=\sum_i f_i\). \(f_i=\mathrm{pr}_{V_i} f\). \(\|f\|^2=\sum_i\|f_i\|^2\).
\(C_g=\langle \mathrm{pr}_{V_{|g|}}(\phi_g), f_{|g|}\rangle\). \(\phi_g(L)=1\) if g⊂L else 0.
\(\mathrm{SCLP}_g = C_g/\log(\mathrm{Poss}_g)\). Assumption Poss_g>1.
Dimensions table. Need maybe use LaTeX table? Could include inline.
Ridge: \(\hat\beta_{\rm ridge}=\arg\min_\beta\{\|y-X\beta\|_2^2+\lambda\sum_{i=1}^p\beta_i^2\}\). \(V=W_0+\cdots+W_5\) nonorthogonal. Need note \(W_i\) dims larger.
Bootstrap: 500 seasons, sample plays with replacement. Correlation examples: Thomas-Bradley-Crowder r=0.953 mean possessions 2574; Thomas-Turner-Zeller r=0.688 mean 305; Sullinger-Smart negative SCLP 90.6% vs PM negative 32.4%. Need cite [PAGE 13].
L2 mass: \(\|f\|^2 = \sum \|f_i\|^2\). Table 13 null etc. Correlations r=0.51,0.58,0.55 with win pct for V1,V2,V3; V5 r=-0.54 [PAGE 14].
Assumptions and breakdown:
- A1 fixed 15-player roster and no trades/injuries; paper restricts top 15 by possessions and filters play-by-play to periods with only those players [PAGE 2].
- A2 complete season aggregation; no time-varying.
- A3 plus-minus is success metric; no opponent adjustment, garbage time.
- Breakdown: Poss=1 log zero; low possession noise; dimension deficiency; cross-team/space incomparability; selection bias; nonorthogonal ridge; no causality.
Need citations quotes:
"we restrict attention to the 15 players on the roster having the most possessions played on the season, and filter the play-by-play data to periods of games involving only those players." [PAGE 2]
"the decomposition is orthogonal" [PAGE 1].
"we model group contributions aggregated over all opponents, and without controlling for the quality of the opponents faced." [PAGE 11]
"adjusting the lineup level plus-minus to account for quality of opponent... devaluing so-called garbage time" [PAGE 14].
"lineups with few possessions will be inherently noisier" [PAGE 7].
"SCLP values are not directly comparable across teams" and "not directly comparable across effect spaces" [PAGE 9].
Need exact quotes. Check page 9: "While SCLP values are not directly comparable across teams (they depend, for instance, on the norm of the overall team success function when projected into each effect space), the relative values within an effect-space are comparable. Similarly, the SCLP values also depend on the norm of the interpretable vector used in Mallow’s method. As a result, the values are not directly comparable across effect spaces– a problem we return to below." [PAGE 9]. Use that.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Need historical/scientific lineage and multi-week traps. Trace:
- Fourier analysis → algebraic signal processing → spectral analysis on symmetric group (Diaconis 1988).
- Representation theory (Serre), symmetric group S15, Young tableaux, Johnson graph J(15,5), Lanczos/Maslen.
- ANOVA special case. Mallows method. 
- Sports lineage: PER, APM, BPM, WS, VORP etc [PAGE 1]; Maymin et al. 2013, Kuehn 2016, Grassetti et al. 2019a/b; Sill 2010 ridge. 
- Retrocausal trap: full-season data used to explain within-season group success; the projection is computed after outcome. If used to infer "what caused" earlier wins, it can create reverse causality: lineup selection responds to performance; coach sees plus-minus and adjusts. Need time-indexed \(f_t\). 
- Multi-week traps: (1) roster churn/injury: top-15 filter and fixed roster invalid across weeks. (2) opponent adjustments: aggregated over all opponents; weekly schedule strength changes. (3) garbage time: late blowouts inflate lineups; changes by week. (4) possession accumulation: low-possession groups over short weeks noisy; need thresholds. (5) cross-team/space SCLP incomparability. (6) orthogonal "pure" interpretation can lead to over-attributing synergy. 
- Need cite "roster constrained" [PAGE 2], "aggregated over all opponents" [PAGE 11], "garbage time" [PAGE 14]. 
Need mention multi-week traps maybe in terms of betting? Avoid betting. Use "forecasting/deployment". No lines.

<RECURSIVE_THEORY_OF_MIND>
Need crisis habit regression vs counter-trap vs clock. Interpret:
- Agents: analyst, coach, opponent coach, players. Recursive beliefs: coach selects lineups based on perceived synergy; opponent adjusts matchups; players alter roles. Observed \(f(L)\) is outcome of equilibrium selection, not exogenous. Need formal selection: \(P(L \text{ used}| \mathcal{F}_t)\) depends on past \(f\), coach beliefs. If high-pressure (crisis), coach regresses to habit: star-heavy, familiar lineups, reduced experimentation. This creates selection bias: high-possession groups are those trusted, not necessarily pure high synergy. Spectral analysis may identify them as effective because they played more, not because they cause success. 
- Counter-trap: opponent uses scouting to counter known strong groups; observed SCLP may be depressed for heavily used groups if opponents target them. Recursive: if analyst uses SCLP to suggest lineup, opponent adapts. Need out-of-sample and matchup-specific. 
- Clock: late-game possessions and garbage time. Paper notes garbage time future work [PAGE 14]. Time pressure: crisis habit regression increases usage of high-status players; SCLP computed over all possessions mixes clutch and non-clutch. Need separate \(f_{\text{clutch}}\) vs \(f_{\text{garbage}}\). 
- Counter-trap vs clock: If a group's SCLP is high only in low-leverage minutes, not transportable. Need "clock" as game clock/season clock? Could be shot clock? Use game clock. Need formal: \(f(L)=f^{\text{clutch}}(L)+f^{\text{nonclutch}}(L)\). Without decomposition, cannot infer crisis performance. 
- Need quote paper: "devaluing so-called garbage time possessions when the outcome of the game is not in question" [PAGE 14]. Also "over time, lineups with large numbers of possessions will settle closer to their true mean value while lineups with few possessions will be inherently noisier" [PAGE 7]. 
- Need mention "crisis habit regression" not in paper; our theory. Need be clear.

<CROSS_LAYER_VETO_ADJUDICATION>
Need physical/biomechanical/weather veto proof. Structure:
- Claim: SCLP is a projection of season plus-minus in lineup-function space. It contains no physical load, biomechanical, or weather variables. Therefore any cross-layer assertion (e.g., group will remain effective under different load/weather) requires an invariance or adjustment. 
- Formal transport veto: Let \(c\) be context (load, matchup, venue/weather, rules). \(f_c(L)\). Spectral contribution \(C_g(c)\). Valid transport from c0 to c1 if \(C_g(c0)=C_g(c1)\) or known mapping; otherwise veto. Source does not estimate \(C_g(c)\), so default veto.
- Physical veto: load vector \(\ell_{p,t}\) (minutes, distance, accelerations, jumps, collisions) not in data. If \(\ell_{p,t}\) exceeds clinically established safe envelope or changes materially, performance mapping may change. No ratio; use threshold/CI. Source's possession count is not load; it's exposure. Cite source only uses possessions and PM. 
- Biomechanical veto: group synergy may depend on movement patterns, screening, spacing, joint load; paper explicitly says "Setting good screens, ability to draw defenders, individual defense, and off-ball movement are all examples of important contributions that are difficult to measure" [PAGE 1]. So spectral PM does not measure those mechanisms. If a proposed lineup change alters biomechanical roles, SCLP cannot adjudicate. 
- Weather veto: NBA games indoor; direct weather effect is weak/absent, but travel/schedule/venue can alter sleep, humidity? Actually indoor climate controlled; weather via travel delays. Source has no weather variables. Any weather claim is unidentifiable; veto. For outdoor sports would need weather covariates; here not applicable. Need mention no weather layer in source, so cross-layer weather inference vetoed by absence.
- "Proof" maybe formal: \(f(L)=g(\text{skill}, \text{load}, \text{matchup}, \text{env})+\epsilon\). Spectral projection \(\mathrm{pr}_V f\) only captures component in lineup-function basis; components orthogonal to V are discarded. If load/weather effects are not in span of lineup indicators, they are in residual and not attributed. But if correlated with lineup selection, they bias \(f\). Since paper doesn't adjust, cannot separate. Need maybe equation: \(f = f_{\text{lineup}} + r\), \(r\) contains opponent/load/weather; \(\mathrm{pr}_V f = f_{\text{lineup}} + \mathrm{pr}_V r\). If \(\mathrm{pr}_V r \ne 0\), SCLP biased. Source's orthogonality only removes lower-order lineup functions, not external layers. 
- Need cite paper "not a model-based approach... free of modeling assumptions" [PAGE 2] but our audit: it is free of parametric model, not free of measurement assumptions. Quote: "spectral analysis is not a model-based approach. As such, our methodology is notably free of modeling assumptions–rather than fitting the data, spectral analysis reports the observed data..." [PAGE 2]. We can say this does not imply external validity.
- "Veto proof": If physical/biomechanical/weather variables are unavailable, then statement "group g is effective" is admissible only as a descriptive conditional on observed context, not as a causal/deployable claim. This is a proof by identifiability: no variation in those variables is observed/controlled; parameter not identified. Need mention "roster constrained" [PAGE 2] and "without controlling for quality of opponents" [PAGE 11].

<RLVR_COUNTERFACTUAL_VETOES>
Need 3 verifiable RLVR veto scenarios + predictions. RLVR maybe "Reinforcement Learning with Verifiable Rewards"? We need give counterfactual veto scenarios, each with prediction and verification. Need not use betting lines. Use metrics and thresholds. 
Scenario 1: Low-possession SCLP sign instability. Counterfactual: If we resample plays with replacement (as paper) and restrict to groups with mean possessions below some threshold e.g. <200, SCLP sign should flip frequently. Prediction: sign agreement between original and bootstrap < 70%? Need not arbitrary? Need "verifiable" with bootstrap. Paper already shows low possession r=0.688 and Sullinger-Smart negative 90.6% despite positive PM. We can define: For groups with mean possessions <300, the 95% bootstrap interval for SCLP contains zero in >50%? Or sign flips. Need exact. Use paper's example Thomas-Turner-Zeller r=0.688 mean 305. Prediction: at 305 possessions, correlation lower than 0.953 at 2574. We can state: if a group has mean possessions ≤305, expect bootstrap correlation \(r<0.8\) and sign instability; if not, veto. Verify with 500 bootstrapped seasons. 
Scenario 2: SCLP denominator singularity/possession=1. Counterfactual: Set Poss=1; formula undefined. Prediction: any pipeline that reports SCLP for 1-possession group must be rejected. Verifiable by unit test: \(\mathrm{SCLP}\) is NaN/∞; if implementation returns finite, bug. Also low-possession groups not stable. 
Scenario 3: Opponent/garbage-time adjustment changes ranking. Counterfactual: Recompute \(f\) after removing garbage-time possessions or adjusting for opponent strength; if top SCLP groups remain? Prediction: source says raw PM not opponent adjusted and garbage time future work [PAGE 14]; groups with high SCLP but large garbage-time share should drop. Verifiable: rank correlation between unadjusted and adjusted SCLP. If Spearman <0.8 for top-20, veto unadjusted deployment. Need specific: GSW small lineup? Not enough. Need perhaps "top five pairs" could change. Prediction: at least one top-five pair by SCLP in Table 6 changes rank outside top five after garbage-time removal/opponent adjustment? Hard to verify from paper. But scenario is testable if data available. Need be precise: We predict that after removing garbage-time possessions, SCLP signs for groups with high blowout exposure will change; if no sign changes, the confound is low. This is a counterfactual veto: if the adjustment changes sign/rank beyond tolerance, veto. 
Need "RLVR" maybe repeated local validation? We can label RLVR-1,2,3. Need include predictions.

Need avoid mention betting lines. Fine.

Need include exact quotes. Need ensure quotes are verbatim. Let's list quotes with pages:
[PAGE 1]: "we address the question of how to quantify the contributions of groups of players to team success." and "the decomposition is orthogonal so that contributions of a player group can be thought of as pure: Contributions attributed to a group of three, for example, have been separated from the lower-order contributions of constituent pairs and individuals." Also "Setting good screens, ability to draw defenders, individual defense, and off-ball movement are all examples of important contributions that are difficult to measure and quantify." 
[PAGE 2]: "we restrict attention to the 15 players on the roster having the most possessions played on the season, and filter the play-by-play data to periods of games involving only those players." "we don't suggest trades based on prospective synergies across teams" maybe quote "our analysis is roster constrained". Exact: "As a consequence of this approach, our analysis is roster constrained–we don’t suggest trades based on prospective synergies across teams." [PAGE 2]. "spectral analysis is not a model-based approach. As such, our methodology is notably free of modeling assumptions–rather than fitting the data, spectral analysis reports the observed data" [PAGE 2].
[PAGE 3]: decomposition formula and dimensions? Table 1 on page 4. Page 3 has \(L(X)=V0...\). "each Vi can be interpreted as the space of functions encoding i-th order effects" [PAGE 4? Actually page 4 has that]. Wait source [PAGE 4 of 20] starts "Several computational approaches..." and includes Table 1 and paragraph "The decomposition in (2) is particularly useful..." and "each Vi can be interpreted as the space of functions encoding i-th order effects." Yes [PAGE 4].
[PAGE 4]: "each Vi can be interpreted as the space of functions encoding i-th order effects." "The decomposition in (2) is orthogonal" maybe page 4. "a contribution attributed to a group of three players can be understood as a pure third-order contribution."
[PAGE 7]: "over time, lineups with large numbers of possessions will settle closer to their true mean value while lineups with few possessions will be inherently noisier." [PAGE 7].
[PAGE 9]: "SCLP values are not directly comparable across teams" and "not directly comparable across effect spaces". 
[PAGE 11]: "we model group contributions aggregated over all opponents, and without controlling for the quality of the opponents faced." 
[PAGE 12]: "A fully aggregated NBA season is, in a sense, a complete record of all events and lineup outcomes in that season." Maybe not needed.
[PAGE 13]: bootstrap results. "the Thomas–Bradley–Crowder triple... r = 0.953"; "Thomas–Turner–Zeller... r = 0.688 with a mean of 305 possessions"; Sullinger-Smart "negative in 90.6% of bootstrapped seasons". 
[PAGE 14]: "adjusting the lineup level plus-minus to account for quality of opponent... devaluing so-called garbage time possessions when the outcome of the game is not in question." Also correlations with win percentage r=0.51,0.58,0.55 and fifth -0.54. 
Need maybe page 14 exact: "Still, adjusting the lineup level plus-minus to account for quality of opponent, for example, seems like a valuable next step. Another straight forward adjustment to raw plus-minus data would involve devaluing so-called garbage time possessions when the outcome of the game is not in question." [PAGE 14]. Good.

Need include "formal LaTeX equations, SI/information/probability units". Units: We can define points, possessions, probability. No SI? Sports data not SI. We can say plus-minus in net points; possession count dimensionless count; SCLP in net points per log(possessions) (notation, not physically meaningful). Probability \(p\) dimensionless. Information units? Entropy? Could use \(\log\) natural log? Paper says log possession unspecified; we can state base \(e\) if not specified; units "log-count". The prompt says SI/information/probability units. We can include probability and log units. Maybe mention "\(\log\) in SCLP is a normalization; if base-e, units are net points per natural-log possession count, a dimensionless-count denominator; it is not a physical energy unit." That satisfies.

Need no toy equations. Avoid fake ratios like Force/Fatigue. Use formal equations only. Good.

Need "singularity/breakdown regimes" exact. We'll include a subsection "Singular and breakdown regimes" in SOURCE_OPERATORS_AND_EQUATIONS. Include:
- \(Poss_g=1\) → \(\log Poss_g=0\), SCLP undefined; \(Poss_g=0\) not in domain.
- \(\dim V_k < \binom{15}{k}\) for k≥1; no unique group coordinate; Mallows projection can have multiple groups same projection? Need say "projection is many-to-one; \(C_g\) is not an inverse coefficient."
- Low \(Poss_g\) → high variance; no stable sign.
- Cross-team/effect-space SCLP non-comparability.
- Ridge λ→0? If p>>N, multicollinearity; coefficients unstable; λ=0 no unique least squares (if rank deficient); ridge λ>0 unique but biased. Include.
- Orthogonality only within fixed \(X\) and fixed roster; if roster changes, \(X\) changes, V spaces change.
- \(f\) aggregation over season: time-varying \(f_t\) not identified.

Need mention "information units" maybe "the squared L2 norms are in net-point²; the mass fractions are dimensionless probabilities/variances." Actually \(\|f\|^2\) units net points squared; fraction dimensionless. Null distribution mass proportional to dimension; probabilities. Good.

Need format. We can use paragraphs and equations. The XML tags exact. Need no extra text outside? Probably okay to output just sections.

Need ensure word count. We'll produce maybe 3000 words. Let's draft carefully.

Need be precise with "RLVR" acronym? Could say "RLVR (verifiable-reward) counterfactual vetoes". Need not define if not sure.

Need "RECURSIVE_THEORY_OF_MIND" include "crisis habit regression vs counter-trap vs clock" explicitly. Use subheads. Need mention "recursive" with equations for beliefs? Could include formal belief update: \(b_t^{\text{coach}}(g) = \Pr(\text{use } g | \text{past } f, \text{score margin}, \text{clock})\). But avoid fake? It's a formal probability model, okay. Need not overdo.

Need "CROSS_LAYER_VETO_ADJUDICATION" include "physical/biomechanical/weather veto proof." Could include a table? XML text. Need formal:
Let \(c=(\ell, m, w)\) load, matchup, weather/venue. \(f_c(L)\). SCLP \(C_g(c)\). Transport condition: \( \left|C_g(c_1)-C_g(c_0)\right| \le \varepsilon \) with pre-specified \(\varepsilon\) and uncertainty interval. If not, veto. Because source estimates only \(C_g(c_0)\) for observed c0, no \(c_1\) variation. Thus cross-layer claims are not identified. That's a proof sketch: parameter not identified due to no independent variation. 
Physical veto: if load vector exceeds threshold or changes by more than clinically meaningful amount, use veto. Biomechanical: if movement role changes (screens, spacing) not measured; veto. Weather: indoor NBA, direct weather effect absent; but if claim involves travel weather, no data; veto. Need say "weather is not a valid explanatory layer for this source; any weather-conditioned claim is outside the paper's measurement space." Good.

Need "physical/biomechanical/weather veto proof" perhaps use "veto" as decisive. Need not say "proof" too strong? We can say "proof of veto eligibility" not empirical proof. 

Need "RETROCAUSAL_GENEALOGY" "multi-week traps" maybe list. Need include "historical/scientific lineage". Good.

Let's write final with XML tags. Need no markdown? We can use plain text with LaTeX. Use line breaks. Ensure all tags close. Let's compose.

Need be careful with page marker format: [PAGE 4 of 20] etc. Prompt says exact [PAGE N] markers. The source uses [PAGE 1 of 20]. We'll use that exact. Good.

Need quote verbatim. Use quotation marks. Ensure no paraphrase inside quotes. Check quotes:
- "we address the question of how to quantify the contributions of groups of players to team success." Exact from abstract? It says "We address the question of how to quantify the contributions of groups of players to team success." We'll quote.
- "the decomposition is orthogonal so that contributions of a player group can be thought of as pure: Contributions attributed to a group of three, for example, have been separated from the lower-order contributions of constituent pairs and individuals." Exact.
- "Setting good screens, ability to draw defenders, individual defense, and off-ball movement are all examples of important contributions that are difficult to measure and quantify." Exact.
- "we restrict attention to the 15 players on the roster having the most possessions played on the season, and filter the play-by-play data to periods of games involving only those players." Exact.
- "our analysis is roster constrained" exact phrase: "As a consequence of this approach, our analysis is roster constrained–we don’t suggest trades based on prospective synergies across teams." We'll quote "our analysis is roster constrained" only.
- "spectral analysis is not a model-based approach. As such, our methodology is notably free of modeling assumptions–rather than fitting the data, spectral analysis reports the observed data" exact.
- "each Vi can be interpreted as the space of functions encoding i-th order effects." Exact? Source: "First, each Vi can be interpreted as the space of functions encoding i-th order effects." Yes.
- "lineups with few possessions will be inherently noisier." Exact from page 7: "lineups with few possessions will be inherently noisier." Good.
- "SCLP values are not directly comparable across teams" exact.
- "the values are not directly comparable across effect spaces" exact (with dash). Good.
- "we model group contributions aggregated over all opponents, and without controlling for the quality of the opponents faced." Exact.
- "devaluing so-called garbage time possessions when the outcome of the game is not in question." Exact.
- "adjusting the lineup level plus-minus to account for quality of opponent" exact? Source: "Still, adjusting the lineup level plus-minus to account for quality of opponent, for example, seems like a valuable next step." Good.
- "A fully aggregated NBA season is, in a sense, a complete record of all events and lineup outcomes in that season." Exact [PAGE 12]. Good.
- "the Thomas–Bradley–Crowder triple" etc. Need exact: "The mean possessions for the Thomas–Bradley–Crowder triple in Fig.3 is 2574, and has a Pearson correlation of r = 0.953." We'll quote "r = 0.953" and "mean of 305 possessions" from Thomas–Turner–Zeller. "negative in 90.6% of bootstrapped seasons" exact? Source: "their SCLP as a pure pair is negative in 90.6% of bootstrapped seasons". Good.

Need include "Table 1 dimensions" quote maybe "V5 1638 3003" etc. No quote needed.

Need word count. Let's estimate: THINK ~600, SOURCE ~800, GENEALOGY ~500, RECURSIVE ~400, CROSS ~500, RLVR ~400 = 3200. Good.

Need avoid forbidden betting lines: Do not mention spreads/totals/moneylines/odds. We won't.

Need "ZERO TOY EQUATIONS": We use formal equations only. Good.

Need maybe include "information/probability units": In SOURCE section: "All probability statements are dimensionless; squared norms are in net points squared; SCLP in net points per log possession-count." Good.

Need "exact singularity/breakdown regimes": We'll explicitly state.

Need "multi-hop derivation" in THINK_TRACE. Good.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
This audit follows the paper’s own construction, not an invented model. The first hop is measurement: the authors define a team-success function on five-player lineups, \(f(L)=pm_L\), from play-by-play plus-minus [PAGE 2 of 20]. The second hop is group structure: the set of lineups \(X\) has \(\binom{15}{5}=3003\) elements, and the symmetric group \(S_{15}\) acts by relabeling players. The third hop is representation-theoretic decomposition: \(L(X)=V_0\oplus V_1\oplus V_2\oplus V_3\oplus V_4\oplus V_5\), where \(V_i\) encodes \(i\)-th-order effects [PAGE 3 of 20]. The fourth hop is attribution: for a group indicator \(\phi_g\), the contribution is the inner product of \(\operatorname{pr}_{V_{|g|}}(\phi_g)\) with \(f_{|g|}\), i.e. a projection-based Mallows contribution, not a raw plus-minus and not a regression coefficient [PAGE 4 of 20]. The fifth hop is normalization: spectral contribution per log possession, SCLP, divides by \(\log(\text{possessions})\) to balance possession-count disparity [PAGE 7 of 20].

The gray-zone audit is where most interpretations fail. “Pure” in this paper means orthogonal to lower-order lineup-function spaces within the fixed season, fixed roster, fixed \(X\). It does not mean causally purified of opponent quality, lineup selection, player load, biomechanics, travel, or garbage time. The authors are explicit that they “model group contributions aggregated over all opponents, and without controlling for the quality of the opponents faced” [PAGE 11 of 20]. They also identify opponent adjustment and “devaluing so-called garbage time possessions when the outcome of the game is not in question” as future work [PAGE 14 of 20]. Thus the valid claim is descriptive and conditional: within this season, this roster, this aggregation, and this plus-minus construction, the projected component is large or small. The invalid claim is transportable causal superiority under changed physical, biomechanical, matchup, or clock conditions.

The decomposition also has non-negotiable breakdown regimes. SCLP is undefined when \(\mathrm{Poss}_g=1\) because \(\log(1)=0\); zero-possession groups are outside the observed domain. Low-possession groups are explicitly noisier [PAGE 7 of 20]. The effect spaces are dimension-deficient relative to the number of natural groups: \(V_1\) has dimension 14 versus 15 individuals, \(V_2\) has dimension 90 versus 105 pairs, and so on through \(V_5\) with dimension 1638 versus 3003 lineups [PAGE 4 of 20]. Therefore group contributions are projection summaries, not unique per-group coefficients. SCLP is also not comparable across teams or across effect spaces [PAGE 9 of 20]. These are not minor caveats; they are the boundary conditions for any deployment.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source defines the lineup set
\[
X=\{L\subset\{1,\dots,15\}: |L|=5\},\qquad |X|=\binom{15}{5}=3003,
\]
with \(f:X\to\mathbb{R}\), \(f(L)=pm_L\) [PAGE 2 of 20]. For a lineup \(L\) against opposing lineup \(M\), the paper’s plus-minus construction is
\[
pm_L=\left(\frac{P_L}{N_L}-\frac{P_M}{N_M}\right)N_L,\qquad
pm_M=\left(\frac{P_M}{N_M}-\frac{P_L}{N_L}\right)N_M,
\]
where \(P\) is points and \(N\) is possessions. The example on [PAGE 2 of 20] gives \(pm_L=(6/3-3/2)3=1.5\) and \(pm_M=(3/2-6/3)2=-1\). Units are net points; possession counts are dimensionless counts. The function space has inner product
\[
\langle g,h\rangle=\frac{1}{|X|}\sum_{x\in X}g(x)h(x),
\]
and the orthogonal decomposition
\[
L(X)=V_0\oplus V_1\oplus V_2\oplus V_3\oplus V_4\oplus V_5,
\qquad
f=\sum_{i=0}^{5}f_i,\qquad f_i=\operatorname{pr}_{V_i}f.
\]
Because the sum is orthogonal,
\[
\|f\|^2=\sum_{i=0}^{5}\|f_i\|^2,
\]
with squared norms in net-point² and mass fractions dimensionless. The paper states that “each Vi can be interpreted as the space of functions encoding i-th order effects” [PAGE 4 of 20]. The key abstract claim is that “the decomposition is orthogonal so that contributions of a player group can be thought of as pure: Contributions attributed to a group of three, for example, have been separated from the lower-order contributions of constituent pairs and individuals” [PAGE 1 of 20].

For a group \(g\), let \(\phi_g(L)=1\) if \(g\subset L\) and \(0\) otherwise. The Mallows-style projected contribution is
\[
C_g=\left\langle \operatorname{pr}_{V_{|g|}}(\phi_g),\, f_{|g|}\right\rangle,
\]
and the possession-normalized score used in the results is
\[
\mathrm{SCLP}_g=\frac{C_g}{\log(\mathrm{Poss}_g)}.
\]
The denominator is a normalization, not a physical energy unit; with natural log it is net points per natural-log possession count. The paper’s dimension table is decisive: \(V_0\) has dimension 1; \(V_1\) dimension 14 versus 15 individuals; \(V_2\) dimension 90 versus 105 pairs; \(V_3\) dimension 350 versus 455 triples; \(V_4\) dimension 910 versus 1365 fours; \(V_5\) dimension 1638 versus 3003 lineups [PAGE 4 of 20]. Thus \(\dim V_k<\binom{15}{k}\) for \(k\ge1\), so no unique coordinate exists for every natural group; \(C_g\) is a projection-based summary, not an inverse coefficient.

The linear-model comparison is
\[
\hat\beta_{\mathrm{ridge}}
=\arg\min_{\beta}\left\{\|y-X\beta\|_2^2+\lambda\sum_{i=1}^{p}\beta_i^2\right\},
\]
with \(y=f(L)\), nonnegative penalty \(\lambda\), and interaction indicators for player groups [PAGE 10 of 20]. The corresponding spaces satisfy \(V=W_0+W_1+W_2+W_3+W_4+W_5\), but this is a non-orthogonal sum, not a direct orthogonal sum [PAGE 11 of 20]. The authors note that “the decomposition in (8) is highly non-orthogonal” and that \(W_5\) has dimension 3003 while \(V_5\) has dimension 1638 [PAGE 11 of 20].

Breakdown and singularity regimes are exact. First, \(\mathrm{SCLP}_g\) is undefined at \(\mathrm{Poss}_g=1\) because \(\log 1=0\); \(\mathrm{Poss}_g=0\) is outside the observed domain. Second, low-possession groups are unstable: “lineups with few possessions will be inherently noisier” [PAGE 7 of 20]. The bootstrap section reports that the Thomas–Bradley–Crowder triple had \(r=0.953\) with mean possessions 2574, while Thomas–Turner–Zeller had \(r=0.688\) with a mean of 305 possessions [PAGE 13 of 20]. Third, SCLP is not cross-team or cross-space comparable: “SCLP values are not directly comparable across teams” and “the values are not directly comparable across effect spaces” [PAGE 9 of 20]. Fourth, the fixed-roster construction assumes the authors “restrict attention to the 15 players on the roster having the most possessions played on the season, and filter the play-by-play data to periods of games involving only those players” [PAGE 2 of 20]; roster changes alter \(X\), hence alter every \(V_i\). Fifth, the method is not assumption-free in the external-validity sense even though the authors say “spectral analysis is not a model-based approach. As such, our methodology is notably free of modeling assumptions–rather than fitting the data, spectral analysis reports the observed data” [PAGE 2 of 20]. It is free of a parametric fit, not free of measurement, aggregation, opponent, or selection assumptions.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is Fourier analysis generalized through algebraic signal processing and representation theory. The paper positions spectral analysis as “a generalization of traditional Fourier analysis” [PAGE 2 of 20] and uses Diaconis’s group-representation program, symmetric-group actions, Johnson graph \(J(15,5)\), and eigenprojection methods [PAGE 3 of 20 and PAGE 4 of 20]. The applied lineage includes classical individual metrics such as PER, wins produced, adjusted plus-minus, box plus-minus, win shares, VORP, and offensive/defensive ratings [PAGE 1 of 20]; lineup-synergy work by Maymin et al. and Kuehn; Italian-league adjusted plus-minus work by Grassetti et al.; and ridge-type adjusted plus-minus by Sill [PAGE 2 of 20 and PAGE 10 of 20]. The method also contains traditional analysis of variance as a special case, as the paper notes [PAGE 4 of 20].

The retrocausal trap is that the decomposition is computed after a fully aggregated season. The authors themselves call a full season “a complete record of all events and lineup outcomes in that season” [PAGE 12 of 20]. A post-season projection can explain which groups co-varied with success, but it cannot by itself identify what would have happened under different lineup assignments during earlier weeks. If a coach’s substitution pattern responds to prior plus-minus, then later lineup usage is selected on earlier outcomes. That creates reverse-direction dependence: observed \(f(L)\) is not an exogenous treatment; it is a record of chosen \(L\) under changing beliefs. The paper’s “roster constrained” framing [PAGE 2 of 20] and its aggregation over all opponents [PAGE 11 of 20] make this especially clear.

Multi-week traps follow directly. First, roster churn and injury break the fixed top-15 filtering rule. Second, opponent quality is not controlled, so a group’s SCLP can change with schedule composition. Third, garbage-time possessions are not devalued; the authors flag that as future work [PAGE 14 of 20]. Fourth, low-possession groups accumulate noise over short windows; the paper’s own bootstrap shows possession-dependent correlation [PAGE 13 of 20]. Fifth, cross-team and cross-effect-space SCLP comparisons are invalid [PAGE 9 of 20]. A multi-week analyst must therefore re-estimate time-indexed success functions \(f^{(t)}\), keep roster and opponent context fixed or explicitly modeled, and avoid treating a full-season orthogonal projection as a causal genealogy of weekly outcomes. The historical lineage is elegant; the retrocausal misuse is not.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer has three agents: the analyst, the coach, and the opposing coach, with players also updating roles. The coach selects lineups using beliefs about group fit; the opponent selects matchups using scouting beliefs about those groups; the analyst observes the resulting \(f(L)\) and projects it. Formally, the observed lineup distribution is not random:
\[
\Pr(L\text{ used}\mid \mathcal{F}_t)
=g\bigl(\text{past }f,\ \text{score margin},\ \text{clock},\ \text{coach belief},\ \text{opponent belief}\bigr),
\]
where \(\mathcal{F}_t\) is information available at time \(t\). The spectral contribution \(C_g\) is computed conditional on that selection process. This is why “pure” cannot be read as “causal.”

Crisis habit regression: under high leverage, coaches and players tend to regress to familiar, trusted, star-heavy lineups and familiar substitutions. That increases possessions for incumbent groups and can make their SCLP look stable simply because they are repeatedly selected. The paper’s possession disparity is extreme: the ’16 Warriors’ starting lineup played approximately 1140 possessions while the next most used lineup played 535; Boston’s starters played 1413 versus 257 for the next most utilized [PAGE 6 of 20]. Stability of high-possession groups is therefore partly a selection artifact, not proof of synergy.

Counter-trap: once a group is identified as strong, opponents can game-plan against it. The recursive belief loop means that a high SCLP group may face stronger counters, while a lower-used group may retain surprise value. The paper’s results already show that raw plus-minus can mislead: Bogut–Iguodala had a positive plus-minus of 107, but the spectral interpretation is that the pairing’s success should be attributed to individual contributions; after those are removed, the group lacks pure-pair value [PAGE 8 of 20]. A counter-trap analysis must ask whether the group’s SCLP survives opponent adjustment, which the paper explicitly does not perform [PAGE 11 of 20].

Clock: the paper aggregates all possessions, including late-game and non-competitive minutes. It recommends “devaluing so-called garbage time possessions when the outcome of the game is not in question” as a future adjustment [PAGE 14 of 20]. Without a clock/leverage decomposition, a group’s SCLP can be driven by low-leverage minutes. Crisis behavior, counter-adjustment, and clock leverage therefore form a three-way confound: the coach’s habit regression changes who plays, the opponent’s counter changes what they face, and the clock changes what the possessions mean. Spectral analysis can flag candidate synergies, but it cannot adjudicate these recursive effects without time-indexed, leverage-indexed, and matchup-indexed data.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The source’s measurement space is lineup plus-minus and possessions only. It contains no physical-load vector, no biomechanical joint/movement data, and no weather or venue covariate. Therefore any cross-layer claim must pass an invariance test. Let \(c=(\ell,m,w)\) denote load, matchup, and weather/venue context. The source estimates \(C_g(c_0)\) only at the observed season context \(c_0\). Transport to \(c_1\) is admissible only if
\[
\left|C_g(c_1)-C_g(c_0)\right|\le \varepsilon
\]
with a pre-specified tolerance \(\varepsilon\) and uncertainty interval, or if a validated adjustment maps \(C_g(c_0)\) to \(C_g(c_1)\). Because the source provides no independent variation in \(\ell\), \(m\), or \(w\), the cross-layer parameter is not identified. That is the veto proof: the claim is outside the identifiable measurement space.

Physical veto: possession count is exposure, not load. Minutes, distance, accelerations, jumps, collisions, and recovery are not in the model. If a group’s deployment changes its physical-load envelope beyond a clinically or physiologically justified threshold, the plus-minus mapping cannot be assumed invariant. The paper’s own scope is play-by-play plus-minus; it does not estimate load-response functions. Biomechanical veto: the paper explicitly notes that “Setting good screens, ability to draw defenders, individual defense, and off-ball movement are all examples of important contributions that are difficult to measure and quantify” [PAGE 1 of 20]. Those mechanisms are exactly the biomechanical and role-dependent channels that a lineup projection does not measure. If a proposed lineup change alters screening, spacing, closeout, or landing mechanics, SCLP cannot adjudicate the change.

Weather veto: for indoor basketball, direct weather is not a measured layer in this source. Travel and schedule can proxy for environmental disruption, but no such variable is included. Any weather-conditioned claim about these lineups is therefore unidentifiable and must be vetoed. The residual \(r\) in \(f=f_{\text{lineup}}+r\) may contain opponent, load, venue, and clock effects; the projection \(\operatorname{pr}_V f\) removes only components inside the lineup-function basis. If \(\operatorname{pr}_V r\ne0\), SCLP is biased for the cross-layer question. The correct adjudication is: use SCLP as a within-roster, within-season, descriptive screen; do not use it as a physical, biomechanical, or weather transport certificate.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR-1: Low-possession sign-instability veto. Counterfactual: resample plays with replacement to construct 500 bootstrapped seasons, as in the paper [PAGE 12 of 20], and recompute SCLP for groups with mean possessions at or below the paper’s unstable regime. Prediction: groups near the Thomas–Turner–Zeller scale, mean possessions about 305, will show materially lower bootstrap correlation than high-possession groups; the paper reports \(r=0.688\) at mean 305 versus \(r=0.953\) at mean 2574 [PAGE 13 of 20]. Verification: reject any low-possession SCLP claim whose 95% bootstrap interval crosses zero or whose sign agrees with the full-season sign in fewer than a pre-specified fraction of resamples. If the sign is stable despite low possessions, the veto is not triggered; if it flips, the claim is not transportable.

RLVR-2: Possession-denominator singularity veto. Counterfactual: set \(\mathrm{Poss}_g=1\). Prediction: \(\mathrm{SCLP}_g=C_g/\log(1)\) is undefined; a correct implementation must return a non-finite value or an explicit “not estimable” flag. Verification: unit-test the pipeline on one-possession groups. If a finite SCLP is reported at \(\mathrm{Poss}_g=1\), the implementation is invalid. A second prediction: groups with very small \(\mathrm{Poss}_g\) will have wider bootstrap intervals and less stable signs than groups above the paper’s 200-possession thresholds [PAGE 7 of 20 and PAGE 8 of 20]. This veto is directly falsifiable by the denominator behavior and by interval width.

RLVR-3: Opponent/garbage-time adjustment veto. Counterfactual: recompute \(f(L)\) after removing garbage-time possessions and after opponent-quality adjustment, then compare SCLP rankings with the unadjusted paper rankings. Prediction: the source does not control opponent quality and flags both opponent adjustment and garbage-time devaluation as future work [PAGE 11 of 20 and PAGE 14 of 20]; therefore at least some unadjusted top-group claims will change rank or sign under adjustment. Verification: compute Spearman rank correlation between unadjusted and adjusted SCLP for the top groups; if the correlation is below a pre-specified threshold, or if any claimed “pure” group changes sign, the unadjusted deployment is vetoed. If the rankings are invariant, the confound is empirically weak for that group. This scenario is verifiable because the adjustment is a deterministic reweighting/filtering of the same play-by-play data, and the prediction is a measurable rank/sign change.

</RLVR_COUNTERFACTUAL_VETOES>