---
source: "2017 Body Shots - Analyzing Shooting Styles in the NBA using Body-Pose Attributes.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 11
model: baidu/ernie-5.5-flash-preview:free
words: 6242
---

<NATIVE_REASONING>
We need answer user's request. Need produce final with required XML sections, >=1000 words. Need follow strict invariants: zero betting lines. no toy equations. formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided. Need likely analyze body shots paper, perhaps generate frontier reasoning? User only provided source, no explicit question. Likely need produce a structured analysis/assessment based on source. Need include THINK_TRACE etc exact sections. Must not mention spreads/totals/moneylines/odds. Also no invented ratios. Need maybe discuss formal operators: attributes, chi-squared, EPV logistic classifier, pose representation. Need maybe create RLVR counterfactual vetoes scenarios. Need include predictions. Need maybe multi-week traps in genealogy. Need ensure word count >=1000. We can produce around 2000-2500 words. Need exact citations: [PAGE 1], [PAGE 2], etc and verbatim quotes. Need formal LaTeX equations. Need units: probability dimensionless, entropy bits, distance meters, time seconds, angle radians, chi-square units dimensionless. Need assumptions and breakdown regimes. Need avoid odds. Betting lines? no. Could mention success probability threshold 0.53/0.47 but not betting. Fine. Need no toy equations. Use formal equations only. Need maybe mention EPV model: EPV(x_t) = E[points | state], etc. But source only says EPV model. We can formalize general expected points as sum over event probabilities and point values. Need not invent fake Force/Fatigue. Could define attributes as categorical variables A_k. Chi-squared statistic. Logistic regression likelihood. Pose joints coordinates. Balance maybe as function? Need avoid fake ratios. Could define balance qualitatively from attributes. Need maybe cite [PAGE 1] quote about no body-pose data. [PAGE 2] 17 attributes. [PAGE 3] timeline bins. [PAGE 4] Table 1. [PAGE 5] classifier features, thresholds. [PAGE 6] p-values table. [PAGE 8] Curry. Need maybe note small p-values but multiple comparisons. Need gray-zone audit: statistical significance, observational causal inference, selection bias, Golden State Warriors, 2015/16, 3PT only, 1500 clips, attribute labeling coarse, visibility. Need RLVR counterfactural vetoes: maybe three verifiable scenarios that would veto using body-pose attributes for outcome forecasting: (1) if pose extraction error high in broadcast due occlusion, (2) if shot difficulty distribution shifts, (3) if made/miss is dominated by unobserved release mechanics not captured by 17 attributes. Provide predictions and measurable tests. Need cross-layer veto adjudication: physical/biomechanical/weather veto proof. Weather? Indoor NBA, weather not direct, but external physical constraints: floor friction, arena air, ball pressure? Need formal proof? We can state veto if physical constraints invalidate causal claim. Maybe use inequalities: horizontal displacement > base of support? For balance: COM projection outside support polygon leads torque. Need formal but not toy. Could define center of mass projection and support polygon. Use SI units: meters. Breakdown if COM_x,y outside support polygon over time interval. That's physics, okay. Weather: indoor arena, no wind, temperature/humidity stable; weather veto only if court conditions outside thresholds? We can formalize as exogenous environmental variable E; if variation in E is negligible, no weather veto. But requirement says Physical/biomechanical/weather veto proof. Need maybe prove veto: for this paper's setting, weather does not break inference because indoor controlled; but physical/biomechanical can. Need exact singularity regimes: when support polygon degenerates (single foot landing) balance inference underdetermined? Hmm.

Need maybe title sections exactly as XML tags. Need include <THINK_TRACE> etc. Need final only those sections? likely. Ensure >=1000 words. Let's draft in English.

Need think about equations:

- Data: shot i has pose joints J_i(t) ∈ R^{3×N}? Actually 2D joints from broadcast; source says positions of shooter's 2D body joints in 181-frame clips. Define j_{i,m}(t) ∈ R^2, m=1..M. t in seconds? frames. Attribute vector a_i = (a_{i,1},...,a_{i,17}) categorical.

- Shot bins: B = {B1,...,B5}, time windows. Source [PAGE 3]. Could define temporal segmentation T_i = ∪_b B_{i,b}.

- EPV/difficulty: state s_i at shot includes SportVU trajectories p(t) ∈ R^2 for players/ball z? ball x,y,z. Logistic classifier: \hat{p}_i = P(Y_i=1|s_i) = σ(β^T φ(s_i)). Thresholds: open if >0.53, tough if <0.47 [PAGE 5]. Units probability dimensionless. Indeterminate interval [0.47,0.53] excluded.

- Attribute difference test: For attribute k with c_k categories, histogram counts n_{r,c}. Pearson chi-square: χ² = Σ (O-E)^2/E, df = (r-1)(c-1) or table df values. p-value. Assumptions: independent shots, sufficient expected counts, mutually exclusive categories. Breakdown when expected counts <5, combined categories [PAGE 6].

- Attribute representation: one-hot vector x_i ∈ {0,1}^V. Entropy H(A_k) = -Σ p log2 p bits. Conditional entropy H(Y|A_k). Mutual information I(Y;A_k) = H(Y)-H(Y|A_k) bits. Could mention as formal info metric not in paper. Need no toy.

- Biomechanical balance: support polygon P_i(t) = convex hull of contact points feet. COM q_i(t) = Σ m_j r_j(t)/Σ m_j ∈ R^2. Projection q_{xy}. Balance if q_{xy}(t) ∈ P_i(t). Margin d_i(t) = min_{p∈∂P_i(t)} ||q_{xy}(t)-p||_2? Actually signed distance inside. Units m. Break if d_i<0. For single-foot landing support polygon degenerates; margin may be small. Source says one-legged landing for Curry [PAGE 8]. Need quote.

- Weather/environment: For indoor shot, environmental covariate e = (T, RH, P, air velocity). Formal sensitivity: Y_i = f(A_i, S_i, E_i). If ∂E variation small and no correlation with A, omitted variable bias zero. But we can't assume causal. Veto if air density changes ball flight? Basketball 3pt distance ~6-7m, but no source. Need avoid unsupported numbers? Could state generic. Maybe no exact numeric. But formal condition: weather veto if H(E) > threshold and I(E;Y|A,S)>0. For NBA indoor, e bounded, but not measured. Need proof? Could say veto not triggered due to indoor controlled environment, but residual uncertainty remains.

- RLVR: Reinforcement Learning from Verifiable Results? Need define verifiable reward. Could create scenarios:
1. Occlusion veto: If pose keypoint error ε_j > tolerance for critical attributes (balance/footwork), then attribute labels unreliable. Prediction: re-annotating 20% sample with multi-view yields label flip >10%, veto.
2. Distribution shift veto: If shot context prior P(Y=1|S) shifts such that thresholds [0.47,0.53] misclassify >15% of shots, EPV normalization fails. Prediction: applying 2015/16 Warriors thresholds to other season yields calibration error >0.1 Brier.
3. Mechanism ablation veto: If made/miss variance explained by attributes after controlling for shot difficulty and player identity is near zero. Prediction: mixed-effects model coefficient p>0.05 or mutual information I(Y;A|S) < 0.01 bits, veto.

Need include verifiable predictions and RLVR counterfactural vetoes. Could phrase as reward hacking/veto.

Need source operators and equations with page citations and verbatim quotes. Need include exact quotes. Ensure quotes are exact from provided text. Some ligature characters? Source has 󰅭 weird for fi. We can quote but maybe use normal? User asks verbatim quotes. If we quote, preserve as given? It has weird glyph. Could use short quotes that avoid fi? But need exact. Example: [PAGE 1] “no body-pose data to inform how a player executes a speciﬁic skill” but source has speci󰅭ic. We can quote as displayed? To be safe copy exact from user: “no body-pose data to inform how a player executes a speci󰅭ic skill” (weird). Or choose simpler: “Do various types of body motion correlate with a made vs missed shot?” [PAGE 2] exact. “We 󰅭irst map the skeleton to 17 attributes” [PAGE 2]. “We divided the time-line of a shot into 󰅭ive bins” [PAGE 3]. “In the 󰅭irst column, we 󰅭ine the 17 labelled attributes.” [PAGE 4]. “We labeled approximately 1500 three point shots in 29 Golden State Warriors games from the 2015/16 NBA regular season.” [PAGE 4]. “Logistic Regression classi󰅭ier outperforms” [PAGE 5]. “shots with probability of success greater than 0.53 were considered open shots, and those with probability of success lower than 0.47 were considered tough shots.” [PAGE 5]. “At a 90% con󰅭idence level, we observe many attributes with different distributions” [PAGE 6]. “Curry noticeably takes a higher proportion of off-balance shots compared to everyone else” [PAGE 8]. Need use exact weird chars? Maybe okay.

Need ensure no betting lines. No odds. The word "moneylines" not mention. Fine.

Need maybe discuss "body shots" term but not adult? It's paper title. Fine.

Need produce 6 sections exactly. Each section with detailed content. Need maybe use XML tags only. Could include headings inside. Need ensure final answer is only those sections. Need not mention analysis.

Let's outline final:

<THINK_TRACE> Deep multi-hop derivation & gray-zone audit (>=400 words)
- derive chain: SportVU lacks pose -> pose extraction -> attributes -> shot bins -> EPV context -> chi-square -> Curry case.
- gray zones: observational, single team, small attribute granularity, label visibility, multiple testing, threshold gap, statistical significance vs causal.
- maybe discuss balance and physical inference.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown.
- Operators: pose map, attribute map, EPV logistic, chi-square, entropy, COM support.
- Units, assumptions, singularities. Cite pages.
- Include equations in LaTeX.

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
- lineage from Goldsberry CourtVision, SportVU, EPV/POINTWISE, pose estimation, attribute fine-grained recognition. Multi-week traps: assuming tracking equals technique; ignoring context; overgeneralizing Curry; label noise; temporal leakage.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
- Coaches/players/crisis: under defensive pressure, habit regression? Need interpret. Maybe crisis habit regression: when pressured, shooter reverts to dominant pattern; counter-trap: if opponent knows off-balance tendency, can bait; clock: late shot clock reduces set time, increases movement. Formalize as policy under state s and time τ. Need no fake. Use probability. Could say if crisis increases P(Move_Before_Pass=yes) etc. Predictions.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
- Biomech proof: COM/support polygon. Weather: indoor negligible but not zero. Adjudicate: paper's claims about attributes remain within observed data; physical veto only if COM outside support and injury? Wait veto proof: if physical constraint invalidates attribute inference? We can state proof of veto condition: if d_i(t)<0 then balance attribute must be off-balance; if extracted pose error > support margin, cannot verify. Weather: if E has no measurable variation, no veto. But "veto proof" maybe prove veto? We'll present conditions under which cross-layer veto blocks deployment.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1 pose-occlusion, scenario 2 context calibration, scenario 3 attribute-information collapse. Each with measurable threshold, counterfactual, prediction.

Need ensure word count. We can write ~2500 words. Need no markdown? XML tags with content. Could include LaTeX inside. Ensure no equations with fake units. Let's draft carefully.

Potential issue: user says ">= 1,000-WORD DEPTH across these exact XML sections". Need each section? It says across sections. Ensure total >1000. THINK_TRACE >=400 words explicitly. Others maybe substantial. We'll make total ~2200.

Need ensure no " Force / Fatigue " fake ratio. We won't.

Need maybe not mention "odds" even in context? Avoid. "probability" okay.

Let's write final. Need check word count roughly. THINK_TRACE 500. Other sections maybe 300 each total 1800. Good.

Need exact source citations. We can cite [PAGE 1] etc. Include verbatim quotes with weird chars. Might be okay. Could avoid weird by quoting shorter phrases without fi? But many quotes have fi. We can quote as in source. Need maybe no long quote due weird? Let's use exact from provided. Ensure no accidental alteration. For [PAGE 2] quote: “Do various types of body motion correlate with a made vs missed shot?” Good no weird. [PAGE 2] “We 󰅭irst map the skeleton to 17 attributes” has weird. Could use. [PAGE 3] “We divided the time-line of a shot into 󰅭ive bins” weird. [PAGE 4] “We labeled approximately 1500 three point shots in 29 Golden State Warriors games from the 2015/16 NBA regular season.” no weird? It has no weird? Good. [PAGE 5] thresholds quote no weird? “shots with probability of success greater than 0.53 were considered open shots, and those with probability of success lower than 0.47 were considered tough shots.” Good. [PAGE 6] “At a 90% con󰅭idence level” weird. Could quote table note: “The p-values for per-attribute Pearson’s Chi-squared tests for four shot comparisons” no weird? It has Chi-squared. Good. [PAGE 8] “Curry noticeably takes a higher proportion of off-balance shots compared to everyone else” no weird. Good.

Need maybe formal LaTeX equations with units. Let's define:
1. Pose: $\mathbf{J}_i(\tau) \in \mathbb{R}^{2\times M}$ units meters if calibrated; source only says 2D joints. If image coordinates, pixels; we can note assumption. Use meters after camera calibration.
2. Attribute vector: $\mathbf{a}_i \in \prod_{k=1}^{17} \mathcal{C}_k$, categorical. $A_k$ random variable.
3. Bins: $B_b = [t_{b}^{start}, t_{b}^{end}]$ seconds.
4. State features: $\phi(s_i) \in \mathbb{R}^d$; logistic $\hat p_i = \sigma(\beta^T \phi(s_i)) = 1/(1+e^{-...})$, dimensionless. Threshold open/tough.
5. Chi-square: $\chi^2 = \sum_{r,c} (O_{rc}-E_{rc})^2/E_{rc}$, dimensionless, df.
6. Mutual information: $I(Y;A_k) = \sum_{y,a} p(y,a) \log_2 \frac{p(y,a)}{p(y)p(a)}$ bits.
7. Balance: $P_i(\tau) = conv\{c_{i,m}(\tau)\}$ support polygon in m^2; $q_i(\tau)$ COM m; signed distance $\delta_i(\tau) = d_2(q_{xy}, P_i) \in \mathbb{R}$ m. If δ<0, outside.
8. Error propagation: label error ε_attr = P(â_k ≠ a_k). If ε > ε*, downstream P(Y|A) unreliable. Could include total variation bound? Maybe formal.

Need mention breakdown regimes: EPV thresholds have dead zone [0.47,0.53] no class. Chi-square invalid if expected counts low. Logistic calibration fails if feature distribution shift. Pose breakdown if keypoint confidence below threshold. Balance singular when support polygon area zero.

Need maybe source operators: "expected point value (EPV) model" [PAGE 2] [PAGE 4]. Formal expected points: $EPV(s) = \mathbb{E}[Points | s] = \sum_{o} P(o|s) \cdot v(o)$, where $v$ is points value. Units points. But source only says EPV. We can say reconstructed as formal operator not claim paper used this exact equation? Need avoid invent? We can state "A compatible formal representation of the paper’s EPV-based difficulty operator is...". It is not fake. Good.

Need maybe use "made vs missed" outcome Y_i ∈ {1,0}. Units probability.

Need no citations outside source? Could mention lineages but no formal citations needed. But maybe include known references from source. Good.

Let's produce. Ensure no betting lines. Need maybe no "odds". Good.

Double-check if "mAP" average precision in table? Source Table 2 says Average Precision (AP), but table columns Made Missed mAP? weird. Could mention mean Average Precision. Not necessary.

Potential issue: Strict invariant ZERO TOY EQUATIONS: Never invent fake ratios. We will only formal equations grounded. Good.

Need maybe "SI/information/probability units" in equations. We'll explicitly state units. Good.

Need maybe "exact singularity/breakdown regimes". We'll list.

Let's craft final in XML. Ensure tags closed. Use no markdown? Could include plain text with LaTeX. Fine.

Need ensure THINK_TRACE >=400 words. Let's count roughly. I can write long. Let's draft.

Potential concern: user's requested sections exact. Use exactly:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
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
...
</RLVR_COUNTERFACTUAL_VETOES>

Need maybe no additional text. Good.

Let's write final now. Ensure over 1000. We'll make detailed.

</NATIVE_REASONING>

<THINK_TRACE>
The source paper is a computer-vision and sports-analytics study, not a causal biomechanics proof. Its central inferential chain is: first, replace coarse tracking coordinates with body-pose attributes; second, segment the shot into temporal bins; third, normalize shot difficulty with an expected point value (EPV) classifier; fourth, test whether categorical attribute distributions differ between made and missed shots; and finally, apply the same representation to Stephen Curry to show that his shot taxonomy is unusually movement-heavy. The paper explicitly motivates the move beyond SportVU by saying that tracking gives player coordinates but not how a skill is executed, with the quoted limitation “no body-pose data to inform how a player executes a speci󰅭ic skill” [PAGE 1]. That quotation is the epistemic hinge of the entire work: if the outcome model only sees location and motion, it can estimate opportunity quality but not the postural mechanism of the attempt.

A rigorous multi-hop reconstruction requires treating each hop as a conditional probability operator. Let \(Y_i \in \{0,1\}\) denote missed versus made three-point attempt \(i\). Let \(S_i\) denote SportVU-derived spatial-temporal state features, and let \(A_i\) denote the 17-dimensional categorical body-pose attribute vector introduced by the paper. The EPV stage estimates a shot-difficulty propensity, \(\hat{p}(S_i)=P(Y_i=1\mid S_i)\), using a logistic classifier [PAGE 5]. The attribute stage asks whether \(A_i\) carries additional information about \(Y_i\) after conditioning on context: \(P(Y_i=1\mid A_i,S_i)\neq P(Y_i=1\mid S_i)\). The chi-squared tests in Table 3 are a marginalized version of that question, because they compare categorical distributions without explicitly including player identity, defender kinematics, fatigue, or release mechanics [PAGE 6]. The Curry analysis is a further distributional question: does \(P(A_i\mid \text{Curry})\) differ materially from \(P(A_i\mid \text{other shooters})\)? The paper’s answer is yes, especially for balance and movement, with the key sentence “Curry noticeably takes a higher proportion of off-balance shots compared to everyone else” [PAGE 8].

The gray-zone audit begins with the fact that the dataset is narrow. The authors state: “We labeled approximately 1500 three point shots in 29 Golden State Warriors games from the 2015/16 NBA regular season” [PAGE 4]. This is enough for exploratory fine-grained analysis, but it is not enough for league-wide causal inference. Golden State in 2015/16 is a unique offensive ecosystem: high pace, high three-point volume, and a star shooter whose movement patterns are atypical. Any model trained or tested on this sample inherits that ecological specificity. A second gray zone is temporal binning. The paper divides the shot into five bins: pre-possession, post-possession before shot, immediate pre-shot, jump-release, and landing [PAGE 3]. This is sensible, but the bins are coarse. A pump fake, a pass adjustment, a micro-hesitation, or a release-timing error can occur inside one bin and be averaged away. A third gray zone is attribute visibility. The authors mark attributes only when visible in broadcast footage and leave invisible attributes unmarked [PAGE 4]. Missingness is therefore not random: occlusion, camera angle, and player orientation correlate with the very movement patterns being measured. A fourth gray zone is statistical multiplicity. Table 3 contains many p-values across 17 attributes and four comparisons. At \(\alpha=0.1\), several apparent discoveries may survive even under weak assumptions, but without a multiple-comparison correction the effective false-discovery rate is higher than a single p-value suggests. The paper’s claim is therefore best read as hypothesis-generating rather than confirmatory.

The deepest gray zone is the leap from statistical association to biomechanical explanation. The paper shows that attribute distributions differ between made and missed shots in some contexts, but it does not estimate the mechanical path by which an off-balance posture changes ball-flight error. A formal model would require joint kinematics, release angle, release velocity, angular momentum, and ball trajectory. The source paper does not provide those operators directly; it provides pose-derived labels and shot outcomes. Therefore, the safe inference is: body-pose attributes are informative correlates of shot outcome and shot context, especially in a limited sample, but they are not sufficient proof of a causal shooting mechanism. This audit conclusion survives even if one accepts the paper’s statistical tests at face value.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The paper’s core empirical operator can be written as a mapping from video-derived pose to categorical attributes:

\[
\mathbf{J}_i(\tau)\in\mathbb{R}^{2\times M}
\quad\mapsto\quad
\mathbf{a}_i=(a_{i,1},\ldots,a_{i,17}),
\]

where \(\mathbf{J}_i(\tau)\) is the 2D skeleton configuration of shooter \(i\) at frame or time \(\tau\), \(M\) is the number of tracked joints, and \(a_{i,k}\) is the value of attribute \(k\). The paper states that it maps the skeleton to 17 attributes [PAGE 2] and that “In the 󰅭irst column, we 󰅭ine the 17 labelled attributes” [PAGE 4]. Units: if the pose is in calibrated court coordinates, \(\mathbf{J}_i(\tau)\) has units of meters; if raw video coordinates are used, units are pixels. The paper does not specify calibration in the supplied text, so the dimensional assumption should be stated explicitly whenever the operator is reused.

The temporal segmentation operator is:

\[
\mathcal{T}_i = \bigcup_{b=1}^{5} B_{i,b},
\]

where \(B_{i,b}\) is the time interval for bin \(b\). The paper defines the bins as: “(1) prior to possession of the ball, (2) after possession of the ball but prior to the moment just before the shot, (3) the moment immediately before the shot, (4) the jump and release, and (5) the landing and after” [PAGE 3]. If \(\tau\) is measured in seconds, each \(B_{i,b}\) has units of seconds. The paper also describes the visual binning: “We divided the time-line of a shot into 󰅭ive bins” [PAGE 3].

The shot-context operator is an expected-point-value model. A compatible formal representation is:

\[
\mathrm{EPV}(s_i)=\mathbb{E}[\mathrm{Points}\mid s_i]
=\sum_{o\in\mathcal{O}} P(o\mid s_i)\,v(o),
\]

where \(s_i\) is the game state immediately before shot \(i\), \(\mathcal{O}\) is the set of possible offensive outcomes, \(P(o\mid s_i)\) is an outcome probability, and \(v(o)\) is the point value of outcome \(o\) in points. Units: EPV is in points. The paper describes this as “an expected point value (EPV) model to estimate the 󰅭ifficulty of the shot based on the events, location and motion of the surrounding players” [PAGE 2]. The actual classifier used is logistic regression on spatial-temporal features:

\[
\hat{p}_i
=
P(Y_i=1\mid s_i)
=
\sigma(\boldsymbol{\beta}^{\top}\boldsymbol{\phi}(s_i))
=
\frac{1}{1+\exp(-\boldsymbol{\beta}^{\top}\boldsymbol{\phi}(s_i))},
\]

where \(Y_i=1\) denotes a made shot, \(\boldsymbol{\phi}(s_i)\) is the feature vector, and \(\boldsymbol{\beta}\) is the fitted coefficient vector. The output is a dimensionless probability in \([0,1]\). The paper states: “shots with probability of success greater than 0.53 were considered open shots, and those with probability of success lower than 0.47 were considered tough shots” [PAGE 5]. This creates a formal indeterminate interval:

\[
\hat{p}_i\in[0.47,0.53]
\quad\Rightarrow\quad
\text{shot difficulty is unlabeled in the open/tough partition.}
\]

That dead zone is important: it prevents forced classification of ambiguous shots, but it also discards information and may bias the remaining sample toward more extreme context states.

The attribute-association operator is Pearson’s chi-squared test. For attribute \(k\), with row classes \(r\) such as made/missed or easy/tough, and category values \(c\), the statistic is:

\[
\chi^2_k
=
\sum_{r,c}
\frac{(O_{r,c,k}-E_{r,c,k})^2}{E_{r,c,k}},
\]

where \(O_{r,c,k}\) is the observed count and \(E_{r,c,k}\) is the expected count under independence. Units: dimensionless. Degrees of freedom are typically:

\[
\nu_k=(R-1)(C_k-1),
\]

except where the paper collapses categories to avoid sparse cells, as with pass quality and jump foot [PAGE 6]. The paper’s table caption says: “The p-values for per-attribute Pearson’s Chi-squared tests for four shot comparisons” [PAGE 6]. The null hypothesis is:

\[
H_0:\; P(A_k=c\mid Y=y)=P(A_k=c)
\quad
\text{for all }c,y.
\]

The alternative is that the categorical distribution of attribute \(A_k\) depends on shot class. Breakdown regimes: if any expected count \(E_{r,c,k}\) is too small, the chi-squared approximation becomes invalid. The paper explicitly collapses categories where needed: “For both of these attributes, there were not enough data points of the original attribute values for comparison” [PAGE 6].

An information-theoretic operator that is not in the paper but is useful for audit is mutual information:

\[
I(Y_i;A_{i,k})
=
\sum_{y,a}
p(y,a)
\log_2
\frac{p(y,a)}{p(y)p(a)}.
\]

Units: bits. This measures the reduction in uncertainty about made/missed outcome when attribute \(k\) is observed. It is more interpretable than a p-value when sample sizes are small because it estimates effect size rather than only incompatibility with independence.

For biomechanics, define the shooter’s center of mass as:

\[
\mathbf{q}_i(\tau)
=
\frac{\sum_{j=1}^{N} m_j \mathbf{r}_{i,j}(\tau)}
{\sum_{j=1}^{N} m_j},
\]

where \(m_j\) is segment mass and \(\mathbf{r}_{i,j}(\tau)\) is segment position. Units: meters. The horizontal projection is \(\mathbf{q}_{i,xy}(\tau)\in\mathbb{R}^2\). The support polygon from foot contacts is:

\[
\mathcal{P}_i(\tau)
=
\operatorname{conv}
\left\{
\mathbf{c}_{i,1}(\tau),\ldots,\mathbf{c}_{i,F(\tau)}(\tau)
\right\},
\]

where \(\mathbf{c}_{i,f}\) is a foot contact point and \(F(\tau)\) is the number of contacting feet. A signed stability margin can be defined as:

\[
\delta_i(\tau)
=
\operatorname{dist}
\left(
\mathbf{q}_{i,xy}(\tau),\partial\mathcal{P}_i(\tau)
\right)
\]

when the projection lies inside, and negative when outside. Units: meters. Balance is plausible when \(\delta_i(\tau)>0\). Breakdown singularity: if \(F(\tau)=1\), the support polygon may degenerate to a narrow region or line, making \(\delta_i(\tau)\) small and highly sensitive to pose-extraction error. This is directly relevant to the paper’s observation that Curry often lands on a single foot and separates his legs [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this paper runs through three traditions: optical tracking in professional basketball, expected-value modeling of shot context, and fine-grained visual-attribute recognition. The source text situates itself inside the tracking revolution by noting that “Over the 󰅭ast 󰅭ve years, the STATS SportVU system has fueled a basketball analytics revolution” [PAGE 1]. That lineage begins with player-coordinate analytics, where the primary objects are \(x,y\) positions and ball \(x,y,z\) positions. The paper’s contribution is a deliberate move from coordinates to articulated pose, because coordinates alone cannot answer how a shooter’s body is configured. The same page says the limitation is “no body-pose data to inform how a player executes a speci󰅭ic skill” [PAGE 1]. This is the genealogical break: tracking answers “where,” while pose attributes begin to answer “how.”

The second lineage is decision-value modeling. The paper references prior work on spatial and temporal analytics, including Goldsberry’s CourtVision, rebounding analyses, EPV-style pointwise decision valuation, and related optical-tracking studies [PAGE 9–PAGE 10]. The EPV component is not the main theoretical claim, but it is an essential control layer. Without context normalization, a missed open shot and a missed tightly contested shot would be pooled together, contaminating the inference. The paper makes this explicit: “As the shot-context, or the 󰅭iculty of the shot taken can bias the analysis, we 󰅭irst segmented the shot into easy or tough shots” [PAGE 2]. Genealogically, this is the basketball-analytics version of confounding control: separate the effect of body pose from the effect of defensive pressure.

The third lineage is computer vision. The paper’s pose extraction relies on monocular broadcast imagery and deep-learning pose estimation, citing pose-machine and convolutional-pose-machine work [PAGE 11]. It also draws from fine-grained visual attributes, citing Yu and Grauman [PAGE 11]. The paper’s own formulation says: “Inspired by the recent work in 󰅭ine-grain analysis using visual attributes, we 󰅭irst map the skeleton to 17 attributes” [PAGE 2]. This lineage matters because it means the attributes are not direct biomechanical variables; they are human-readable summaries of pose. They are intentionally interpretable, but that interpretability comes with compression loss.

A multi-week analytic trap appears when a researcher treats the 17 attributes as if they were a complete kinematic model. The attributes include balance, move before pass, direction, pass quality, pump fake, dribble, move just before shot, turn, footwork, set foot stance, jump foot, legs during jump, legs during fall, landing foot, land foot stance, and move after shot [PAGE 4]. This taxonomy is rich enough to distinguish a set shooter like Draymond Green from movement shooters like Klay Thompson or Damian Lillard, but it is not rich enough to model release height, wrist snap, angular velocity, or ball spin. Another multi-week trap is temporal leakage. If shot attributes are extracted from footage centered on the recorded shot time, and if the recording window includes post-release events, then attributes such as landing or after-shot movement may be consequences of the shot rather than causes. The paper’s binning mitigates this by separating pre-shot and post-shot bins, but any downstream model must respect the causal ordering.

A third genealogical trap is overfitting to the Golden State ecosystem. The training data for the EPV classifier come from “all three point shots in the remaining 53 regular season Warriors games in 2015/16,” while the attribute labels come from 29 games [PAGE 5]. This is a within-team design. It is excellent for studying Curry, but weak for league-wide inference. If the research question is “Does body motion correlate with made/missed shots in the NBA?” the sample should include multiple teams, multiple systems, and multiple defensive schemes. Otherwise, the result may reflect Warriors-specific spacing, pace, or shot selection. The paper’s own question is narrower enough to survive: it asks whether various body motions correlate with shot outcome and how Curry’s style differs, not whether the league can be reduced to these attributes.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
A recursive theory-of-mind layer asks how players, coaches, and defenses model the shooter’s body-pose habits. In crisis situations—late shot clock, tight coverage, transition scramble, or a forced relocation—an athlete may regress to a dominant motor pattern. The paper’s taxonomy gives a language for this regression. If a shooter normally sets his feet but under pressure begins to hop, step, turn, or land on one foot, the attribute distribution shifts toward movement-heavy states. Formally, let \(C\) denote crisis context, such as low remaining shot-clock time or high defender proximity. A crisis-regression model can be written as:

\[
P(A_{\text{move}}\mid C)
>
P(A_{\text{move}}\mid \neg C).
\]

This is not a causal law, but it is a testable habit hypothesis.

The counter-trap is that defenses can learn the regression. If an opposing coaching staff observes that a shooter’s off-balance tendency rises under closeout pressure, they can design closeouts to force the shooter into the same destabilizing state. In that case, the observed correlation between off-balance posture and missed shots is not purely a skill failure; it is an equilibrium outcome of adversarial modeling. A formal game-theoretic sketch is:

\[
\pi_D = \arg\max_{\pi_D}
\mathbb{E}
\left[
1-Y
\mid
A\sim P(A\mid S,\pi_D)
\right],
\]

where \(\pi_D\) is the defensive policy and \(1-Y\) is a miss. The defender chooses actions that induce the shooter’s high-risk attribute states. This does not require a fake ratio; it is simply an expected-value objective over binary outcome \(Y\).

The clock adds a third variable. Let \(\tau_{\text{shot}}\) be remaining shot-clock time in seconds. As \(\tau_{\text{shot}}\downarrow 0\), the feasible set of pre-shot stabilization actions shrinks. A stylized constraint is:

\[
\mathcal{A}_i(\tau_{\text{shot}})
=
\{a: t_{\text{setup}}(a)\le \tau_{\text{shot}}\},
\]

where \(t_{\text{setup}}(a)\) is the time required to realize attribute configuration \(a\). If the shooter’s preferred set-foot stance requires \(t_{\text{setup}}\) greater than available time, the model predicts a shift toward rushed movement attributes. This is a clock-induced selection effect, not a psychological story. It can be audited by comparing attribute distributions for shots with low versus high remaining clock, holding shot location and defender distance fixed.

The recursive habit loop can also fail in the opposite direction. A shooter who is unusually successful while moving may develop a counter-habit: he learns to trust off-balance shots. Curry is the paper’s example. The authors say “Curry noticeably takes a higher proportion of off-balance shots compared to everyone else” [PAGE 8], and they add that “All this movement may contribute to the higher proportion of off-balance shots he takes compared to average” [PAGE 8]. The theory-of-mind question is whether Curry’s movement is a weakness, a trained adaptation, or a selection effect caused by his exceptional release quickness. The paper cannot settle that because it does not model defender reaction time or release mechanics. A rigorous counter-trap audit would therefore require a counterfactual: if Curry were forced to set his feet more often, would his expected make probability rise, fall, or remain unchanged? The observed data alone cannot identify that counterfactual because Curry’s off-balance shots are not randomly assigned.

The final recursive layer is meta-learning by analysts. If a team believes that “movement before shot” is bad, it may overcorrect by forcing static catch-and-shoot actions. But the paper’s own evidence suggests that movement is not uniformly bad: in some comparisons, movement attributes distinguish good from bad made shots [PAGE 6]. A crisis regression that overemphasizes stillness may reduce adaptability. Thus the recursive loop is: shooter habit → defensive adjustment → shooting adjustment → analytic model update → coaching intervention. The safest institutional rule is to treat the attributes as diagnostic features, not universal prescriptions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The cross-layer veto must separate physical plausibility, biomechanical identifiability, and environmental stability. For a basketball shot, the physical layer concerns the shooter’s center of mass, base of support, joint kinematics, and ball-flight boundary conditions. The biomechanical layer concerns whether pose-derived labels are accurate enough to support inference. The weather layer is unusually weak for indoor NBA basketball, but it is not formally irrelevant because arena temperature, humidity, air pressure, and court friction can affect ball and shoe behavior. The adjudication below proves when a veto should block or qualify the paper’s inferences.

First, biomechanical veto proof. Define the support polygon \(\mathcal{P}_i(\tau)\) and the center-of-mass projection \(\mathbf{q}_{i,xy}(\tau)\). If \(\mathbf{q}_{i,xy}(\tau)\notin\mathcal{P}_i(\tau)\), the shooter is mechanically unstable unless corrective torque or flight dynamics compensate. A necessary condition for the paper’s “off-balance” label to be physically meaningful is:

\[
\delta_i(\tau)<0
\quad\text{or}\quad
\delta_i(\tau)\approx 0
\]

during the pre-release interval. If pose error \(\varepsilon_{\text{pose}}\) is larger than the absolute margin \(|\delta_i(\tau)|\), the label is not identifiable:

\[
\varepsilon_{\text{pose}} > |\delta_i(\tau)|
\quad\Rightarrow\quad
\text{balance label is unreliable.}
\]

This is a true veto condition for using the balance attribute in a high-stakes model. The paper’s labels are human-viewed broadcast labels, so they may capture gross imbalance, but they cannot resolve small stability margins. The singularity regime is single-foot landing or split-leg landing, where the support polygon may be narrow or disconnected. The paper notes Curry’s one-foot landing tendency and leg separation [PAGE 8]; in that regime, balance inference is most fragile.

Second, physical-layer veto. If the shot’s physical constraints are violated—shooter airborne beyond feasible flight time, release point inconsistent with joint kinematics, or ball trajectory impossible under gravity and drag—then the pose-to-outcome model should be vetoed. For a projectile after release, vertical motion obeys:

\[
z(t)
=
z_0 + v_{z,0}t - \frac{1}{2}gt^2,
\]

with \(g\approx 9.81\ \mathrm{m/s^2}\). This equation is not used to predict shot success, but it defines a feasibility envelope. If extracted pose implies a release velocity or angle outside the envelope consistent with the observed ball trajectory, the pose extraction or temporal alignment is wrong. In that case, attribute inference is blocked until sensor fusion or manual review resolves the inconsistency.

Third, weather/environmental veto. For outdoor basketball, wind, precipitation, temperature, and court moisture can change ball flight and friction. For NBA indoor play, the environmental variable \(E\) is usually bounded and approximately constant across games. Let \(E=(\text{temperature}, \text{humidity}, \text{pressure}, \text{air velocity}, \text{court friction})\). The omitted-variable condition for no environmental confounding is:

\[
I(E;Y\mid A,S)\approx 0,
\]

in bits. If environmental variation is negligible and uncorrelated with shooter attributes, weather does not veto the paper’s association claim. However, if a dataset includes outdoor games, arena changes, or extreme humidity, the veto becomes active because \(E\) can alter ball trajectory and shoe traction. For the supplied source, which concerns 2015/16 NBA regular-season games, the weather veto is weak but not zero: arena conditions are not reported, so the conservative assumption is bounded uncertainty rather than exact zero.

Fourth, cross-layer adjudication rule. The paper’s claim that body motion correlates with made/missed shots survives physical and weather vetoes within its stated sample, but it is conditionally vetoed for causal deployment when any of the following holds:

1. \(\varepsilon_{\text{pose}} > |\delta_i(\tau)|\) for balance-critical shots.
2. Attribute missingness is strongly related to defender proximity or shot difficulty.
3. Environmental variables vary materially across the evaluation set.
4. Temporal binning leaks post-release information into pre-shot attributes.

The first condition is the strongest biomechanical veto. The second is a statistical identification veto. The third is environmental. The fourth is causal-ordering. Under those conditions, the paper remains valuable as an attribute taxonomy and exploratory analysis, but it cannot be treated as a validated causal model of shot success.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
An RLVR-style audit asks for verifiable counterfactual scenarios that would overturn or block the operational use of the paper’s attribute framework. The veto must be measurable, the threshold must be explicit, and the prediction must be falsifiable. Below are three such scenarios.

Veto 1: Pose-occlusion veto.
Counterfactual: if broadcast pose extraction is evaluated on a held-out set with multi-view or manual keypoint ground truth, and critical attributes such as balance, footwork, landing foot, or set-foot stance have label error above a pre-specified tolerance, then the attribute model is vetoed for outcome prediction. A reasonable threshold is \(\varepsilon_{\text{attr}} > 0.15\) for balance-critical attributes. Prediction: in a manually audited sample of 200 three-point attempts, at least 15% of balance labels will flip if keypoint error exceeds 5 cm near the ankle, knee, and hip joints. Verification protocol: compare monocular-derived attributes against two-camera reconstruction, compute Cohen’s kappa and raw error, and test whether \(\varepsilon_{\text{attr}}\) exceeds the threshold. If yes, the paper’s balance findings, including the Curry observation [PAGE 8], remain descriptive but cannot support automated coaching triggers.

Veto 2: Context-calibration veto.
Counterfactual: if the EPV difficulty classifier is transferred to a new season, team, or league and its open/tough thresholds no longer align with empirical make probability, then the paper’s context normalization fails. The paper’s thresholds are \(\hat{p}>0.53\) for open and \(\hat{p}<0.47\) for tough [PAGE 5]. A verifiable veto condition is a calibration error above 0.10 in expected calibration error, or a false-open rate above 0.30 in the \(\hat{p}>0.53\) bin. Prediction: applying the 2015/16 Warriors logistic model to a different NBA season will produce at least a 0.08 increase in expected calibration error because of changes in pace, three-point volume, and defensive schemes. Verification protocol: compute reliability diagrams and Brier score decomposition on the new season. If calibration fails, the tough/open partition is no longer valid, and any downstream chi-squared comparison inherits selection bias.

Veto 3: Attribute-information collapse veto.
Counterfactual: if, after controlling for shot difficulty and player identity, the attributes provide negligible additional information about shot outcome, then the core claim that body motion matters is vetoed as a practical predictor. A formal test is conditional mutual information:

\[
I(Y;A\mid S)
=
H(Y\mid S)-H(Y\mid A,S).
\]

If \(I(Y;A\mid S) < 0.01\) bits, or if a mixed-effects logistic model yields no attribute coefficient with posterior probability above 0.95, the attribute layer should be vetoed. Prediction: in a replicated sample of 1,500 three-point attempts from multiple teams, most individual attributes will have conditional mutual information below 0.01 bits once defender distance, shot location, and player identity are controlled. Verification protocol: fit a hierarchical model with random intercepts for player and game, include SportVU context features, and test whether adding the 17 attributes improves out-of-sample log loss by at least 0.005. If improvement is absent, the paper’s attributes remain useful for style description but fail as outcome predictors.

These three vetoes are independent. The first attacks measurement validity, the second attacks context normalization, and the third attacks incremental predictive value. Together they define a rigorous RLVR boundary: the paper’s contribution is real as a fine-grained attribute representation and as a Curry-specific descriptive analysis, but it should be deployed only after pose error, context calibration, and conditional information gain are verified.
</RLVR_COUNTERFACTUAL_VETOES>