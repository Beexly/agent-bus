---
source: "2024 - Noisy Judgments A probability surface-based analysis of umpiring variability - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2024"
pages: 17
model: deepseek/deepseek-v4.1-flash-1017
words: 8503
---

<NATIVE_REASONING>
We need answer to user. Need produce deep multi-section XML exactly. Need parse task: They provide source paper "Noisy Judgments..." 17 pages. Need likely analyze with invariants. They didn't ask explicit question beyond DRIVE SOURCE/PAGES/SOURCE TEXT. We need generate sections with >=1000 words, formal equations, citations [PAGE N], verbatim quotes. Need no betting lines. Need perhaps discuss "GSE + GSI Frontier Reasoning Foundry" maybe sports analytics? Need infer expected output: We need produce analysis of source using specified XML sections. Need include source operators/equations, retrocausal genealogy, recursive theory of mind, cross-layer veto, RLVR counterfactuals. Need zero betting lines. Need no fake ratios. Need cite exact [PAGE N] markers and verbatim quotes. Need use page numbers? Source text has page numbers at bottom: 1..20? PAGES:17 but source text seems pages 1-20? Wait first page 1, then 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. PAGES:17 maybe mismatch. Need cite [PAGE N] markers based on source text page numbers. Need exact quotes. Need quote verbatim from source. Need be careful: We can quote strings from provided text exactly. Need formal LaTeX equations. Source has Equation 1 and Equation 2 not explicitly rendered in text. Need reconstruct? Need not invent fake ratios. We can state Eq1 strike percentage p_{ij}=S_{ij}/N_{ij}. Eq2 general form with 8 sigmoid params. Need derive likely:
P(x,z)=σ(a_x,b_x,x)*[1-σ(c_x,d_x,x)]*σ(a_z,b_z,z)*[1-σ(c_z,d_z,z)]? Need include exactly? Source says "two sigmoids in x direction and two in y direction... eight free parameters... alpha positional terms define where value surface is 0.5... beta terms determine steepness." The general function likely product of four logistics? Need define with constraints. We can formalize. Need mention source lacks explicit rendered Eq2? Actually source text says Equation 2 but formula omitted due PDF extraction. We can write a canonical reconstruction and flag as reconstruction from verbal description. Need avoid "fake equations" but formal equations with assumptions. We can state Eq. 1 from text, Eq. 2 reconstructed as product of sigmoids:
P(x,z)= [1/(1+e^{-β_{xL}(x-α_{xL})})] [1-1/(1+e^{-β_{xR}(x-α_{xR})})] [1/(1+e^{-β_{zB}(z-α_{zB})})] [1-1/(1+e^{-β_{zT}(z-α_{zT})})].
Need handle signs. But source says "two sigmoids in x direction and two in y direction account for rise and fall". Equation 2 general. Need units: x,z cm, alpha cm, beta cm^{-1} if logistic argument dimensionless. P dimensionless probability. Need include heteroscedastic cost:
C(θ)=sqrt( (1/M) Σ_{i,j} w_{ij} [p_{ij}-P_θ(x_i,z_j)]^2 ), w_{ij}=1/σ_{ij}^2 or N_{ij}/(p(1-p))? Since binomial variance p(1-p)/N. Need be precise: expected error in strike percentage based on sample size. For binomial, Var(\hat p)=p(1-p)/N. Weight w=N/[p(1-p)]. But source says normalized distances between data points and candidate surface before summing. We can express RMS with normalized residual. Need not invent? This is standard. We can cite [PAGE 5] "utilizing the heteroscedastic errors present in each cell location during the fitting process is necessary to mitigate noise". Good.

IOU equation: source Equation 3 omitted. Define IOU = |Z_ump ∩ Z_MLB| / |Z_ump ∪ Z_MLB|. Need cite [PAGE 12]. Units dimensionless. Mention rectangular zones. Need exact quote "We calculate the percent overlap as the intersection-over-union—the IOU—ratio (Equation 3)." [PAGE 12]. Good.

Need discuss height normalization: z_norm = (z - z_bottom)/(z_top - z_bottom) * (104-49)+49? Source: average top 104 cm bottom 49 cm. Proportional scaling. Eq:
\tilde z = 49 + (z - z_bottom)/(z_top - z_bottom) (104-49) cm. x unchanged. Need cite [PAGE 4]. Good.

Need "probability surface-based analysis" details: 5,307,386 called pitches; 1 cm grid; 139 umpires; 1,433 pitchers; 1,688 batters; 228 catchers; dates. Need cite [PAGE 2-3]. Need mention Statcast vs PITCHf/x measurement effects ignored [PAGE 2 footnote]. Umpire no-change assumption. Need exact quote: "The umpire does not change within the game." [PAGE 3]. Sample size limits: umpires <1000, batters <100, pitchers <100 removed [PAGE 3].

Need multi-hop derivation and gray-zone audit >=400 words in THINK_TRACE. Need include reasoning chain: instrument measurement → probability surface → grid binomial → sigmoid product → weighted optimization → alpha extraction rectangle → IOU → season/handedness normalization → 2-strike bias via subsampling distribution → FISZ → pitcher/batter effects → robot zone. Gray-zone audit: identifiability of eight params, grid cell sparsity, heteroscedastic weighting, height normalization, umpire assignment, catcher starter assumption, no closed-form expected distribution, season cohort confounding, lefty strike shift, effect size vs significance. Need cite pages.

Need include exact verbatim quotes. We need use quotes from source text. Need ensure quotes exact. We can quote short snippets.

Need sections:
<THINK_TRACE> ... >=400 words. Include deep multi-hop derivation & gray-zone audit. Maybe 600 words.
<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown. Need equations, variables, assumptions, singularity/breakdown regimes. Include citations and verbatim quotes. Maybe 700 words? Overall >=1000. Need not be too huge but enough. Desired oververbosity 5. Need exact XML sections. Could include all required tags and content. Need no markdown? XML sections with LaTeX okay. Need include >=1000 words across sections. Need ensure no betting lines.

Need discuss "singularity/breakdown regimes": e.g., when N_ij→0 weights undefined, when p=0 or1 variance zero, beta→0 sigmoid non-identifiable, alpha outside data support, season/handedness subgroup small, overlapping alpha ordering (left/right edges cross) causing nonphysical surface, height normalization degeneracy when top=bottom, umpire assignment ambiguity. Need state exact. Good.

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps. Need discuss PITCHf/x 2007, Carruth 2012 50% ellipse, Roegele 2013 1-inch grid 50%, Ben-Porat 2019 superellipse, Umpire Scorecards EUZ 2021 kernel density Bayes 50% contour. Then paper's lineage: sigmoid product probability surface, heteroscedastic fitting, alpha extraction. Multi-week traps: treating 50% contour as official zone, ignoring height normalization, assuming stationarity across 2008-2022, confounding umpire cohort with rule/technology changes, 2-strike bias significance vs effect size, FISZ catcher assignment. Need cite pages 2, 6, 16. Need mention "lefty strike" disappears starting 2017 [PAGE 11]. "multi-week traps" maybe research traps requiring weeks to uncover? We can phrase as latent traps. Need no betting.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. Need interpret? Need discuss umpire decision process: umpire internal prior, catcher framing, pitcher reputation, batter eye, count (2-strike), game clock? "clock" maybe time pressure? Need align: crisis habit regression = under pressure/2-strike, umpire reverts to stricter top/bottom? Counter-trap = catcher/pitcher/batter adapting to called zone; recursive beliefs: umpire expects catcher to frame, catcher expects umpire bias, pitcher targets edges, batter adjusts stance; clock = season-scale drift/cohort turnover. Need formal? Maybe include recursive Bayesian update: P(umpire calls strike | location, count, catcher, pitcher, batter) = ... Need cite 2-strike bias, framing, Votto/Soto/Judge, automated. Need say "crisis habit regression" is 2-strike bias: high/low tightening. "counter-trap" is players exploit measured zone, creating endogeneity: FISZ and pitcher zones reflect equilibrium responses, not pure causal umpire bias. "clock" is 15-season drift and cohort replacement; umpires change over time; new umpires adapt. Need cite [PAGE 13] "umpires are changing their strike zones over time; new additions to the umpire corps are generally adapting to the existing zone rather than driving the changes." Good. Need exact quote. Need no betting.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Need discuss physical constraints: baseball radius 3.7 cm, plate width 43.2 cm, official width 50.6 cm. Need cite [PAGE 4] "width...= 43.2 + (2 * 3.7) = 50.6 cm." Need biomechanical: batter height/stance changes zone; Judge 6'7" frame distorts perception from crouched position [PAGE 18]; Soto stance [PAGE 18]; catcher framing biomechanics; pitcher arsenals. Weather? Source doesn't discuss weather; need state no weather variable in paper; any weather claim would be a veto because absent from source. Need "veto proof" maybe: physical layer vetoes claims that called zone equals official rectangle; biomechanical vetoes using raw z without height normalization; weather layer vetoes unsupported weather causal claims because source has no weather data. Need include exact quote: "his 6’7” frame probably distorts the umpire’s perception from a crouched position." [PAGE 18]. Need cite [PAGE 18]. Need mention measurement layer: PITCHf/x to Statcast/TrackMan ignored [PAGE 2]. Good.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. Need RLVR = reinforcement learning with verifiable rewards? Need propose counterfactual veto scenarios: If rerun with (1) raw z instead of height normalization, expect lefty/righty area/centroid shifts change and IOU shifts; prediction: normalized model recovers 3.9 cm LHB shift [PAGE 9] while unnormalized confounds height. (2) If remove heteroscedastic weights or use unweighted RMS, sparse edge cells dominate; prediction: alpha/beta variance increases at low N; sensitivity boxplots widen; 2-strike significance maybe inflated? Need verifiable. (3) If assign umpire by game crew but allow in-game changes or use catcher starter assumption wrong, FISZ and umpire IOU change; prediction: FISZ attenuates for catchers with partial games. Or 2-strike bias: if split by count and compare to random subsamples matched on season/handedness, 2-strike area remains smaller by >400 cm^2 and chance ~1e-104 [PAGE 14]. Need create 3 scenarios with predictions. Need mention verifiable operationalization and pass/fail. Need no betting lines.

Need include word count? Not necessary but ensure >=1000. Need cite exact [PAGE N] markers. Need use exact quotes. Need be careful with page numbers. Source text page numbers: The first page is "1" at bottom after outline? Then page 2, etc. We can use [PAGE 1], [PAGE 2], etc. Need map quotes:
- Motivation paragraph page 1? It is before "1" at bottom, so [PAGE 1].
- Previous explorations page 2? It starts after "3. Previous Explorations" and page number 2 at bottom after Data? Actually page 2 includes section 3 and 4? In text: "## **3. Previous Explorations**" then paragraphs, then "## **4. Data**", then paragraph, footnote, then "2" at bottom. So section 3 and beginning 4 on page 2. Good.
- Data continues page 3 with Figure 1, sample limits, characteristics, Methods 5.1 start. Page 3 bottom? The text after "5.1. The MLB Strike Zone" then "3" at bottom. Yes.
- 5.1 continues page 4? It includes official zone, Figure 2, 5.2 Height Normalization, then "4" at bottom. Yes.
- 5.3 page 5? It starts "### 5.3..." then phases, equation 1, second, third, then "5" at bottom. Actually page 5 includes 5.3 start and second/third? Let's check: After "### **5.3. The Best-Fit Strike Zone Surface**" text through "Equation 1." Then "Second..." Then "Third..." Then "5" at bottom? Yes likely [PAGE 5].
- Page 6 includes sigmoidal curves, Figure 3, Equation 2, optimization, alpha/beta. Bottom "6". Good.
- Page 7 includes Figure 4, extraction rectangle, Results start, best-fit dimensions, Figure 5? Actually page 7 bottom after "7"? Text: after "7" page number at bottom? Let's see: It says "7" after "Figure 5..."? Actually in source: after Results paragraph "The shift... discussed further below." then "7" at bottom? Then Figure 5, Figure 6, etc on page 8? Need not exact for all. We can cite approximate pages. Need not overcite exact for every. But invariant says cite exact [PAGE N] markers and verbatim quotes when source pages provided. We should cite page numbers as displayed. We'll use page numbers from source. Need ensure quotes are on those pages. Let's map carefully maybe.

Let's reconstruct page boundaries from source text markers. The text has page numbers as standalone lines. Let's list:
Start: title, no page number until after outline? It shows "1" after Outline. So page 1 includes title, motivation, outline. [PAGE 1].
Then "## **3. Previous Explorations**" ... "## **4. Data**" ... footnote 1, footnote 2 ... "2". So page 2 includes sections 3 and 4 start, footnotes. [PAGE 2].
Then "Statcast data retrieved..." ... Figure 1 ... sample limits ... data characteristics ... "## **5. Methods and Assumptions**" ... "### **5.1. The MLB Strike Zone**" ... "3". So page 3 includes data continuation, Figure 1, sample limits, 5.1 heading. [PAGE 3].
Then "The official MLB strike zone..." ... Figure 2 ... "5.2 Height Normalization" ... average top 104 bottom 49 ... "4". So page 4 includes official zone, Figure 2, 5.2. [PAGE 4].
Then "### **5.3. The Best-Fit Strike Zone Surface**" ... Equation 1 ... second ... third ... "5". Page 5 includes 5.3 start phases. [PAGE 5].
Then "The value of a sigmoidal function..." Figure 3 ... Equation 2 ... Fourth ... alpha/beta ... "6". Page 6 includes sigmoid, Eq2, optimization. [PAGE 6].
Then "to be called a strike..." Figure 4 ... extraction ... "## **6. Results**" ... best-fit dimensions ... Figure 5? Wait after Results start: "Looking at full set... Figures 5 and 6... The shift... discussed further below." Then "7" page number. Then Figure 5, Figure 6, then "When we derive..." etc, then "8" page number? Let's see source: after "discussed further below." there is "7" then blank then Figure 5 caption, Figure 6 caption, paragraph "When we derive..." then "8" then 6.1. So page 7 includes end of 5.3, Results start, dimensions. Page 8 includes Figures 5/6 and start 6.1. Need cite dimensions [PAGE 7]. Figure 5 [PAGE 8]? Actually caption on page 8. Good.
Then 6.1 page 8-9: "To test reliability..." through LHB/RHB area and lefty strike, Figure 7, then "9" page number. Page 9 includes Figure 7 and further LHP/RHP. [PAGE 9].
Then 6.2 page 9-10: "The 5.3 million..." sensitivity study, Figure 8, "10". Page 10 includes sensitivity results. [PAGE 10].
Then 6.3 page 11: time series, Figure 9, "11". [PAGE 11].
Then Figures 10/11 page 12? Actually "11" after Figure 9? Wait source: after Figure 9 caption, "11" at bottom? Then "**_Figure 10:_**" and "**_Figure 11:_**" then "12" maybe. Let's see text: After Figure 9 caption, there is "11" page number, then Figure 10 caption, Figure 11 caption, then "12" page number? Actually source: 
"**_Figure 9:_** ... Figure 9.\n\n\n\n11 \n\n\n\n**_Figure 10:_** ... \n\n**_Figure 11:_** ... \n\n12 \n\n## **6.4. Umpire Evaluation**"
So page 11 includes 6.3 and Figure 9. Page 12 includes Figures 10/11 and 6.4 start? Actually 6.4 starts after "12". Hmm page 12 bottom? Let's not overmap. We can cite [PAGE 11] for time series, [PAGE 12] for Figures 10/11 and 6.4? Need exact. Good enough.

Page 12/13: 6.4 IOU, Figure 12, "13". Page 13 includes Figure 13. [PAGE 12] for IOU quote, [PAGE 13] for cohort quote.
Page 14: 7 Discussion, 7.1 2-strike bias, Figure 14, "14". [PAGE 14] for 2-strike chance quote.
Page 15: Figure 15, "15". [PAGE 15] for consistency.
Page 16: Figure 16, 7.2 Pitch Framing, FISZ, "16". [PAGE 16] for FISZ.
Page 17: 7.3 Pitchers, "17". [PAGE 17] for pitcher.
Page 18: 7.4 Batter's Eye, "18". [PAGE 18] for Votto/Soto/Judge.
Page 19: 7.5 Automated, Conclusions, References, "19". [PAGE 19].
Page 20: References continuation, "20". [PAGE 20].

Need maybe cite [PAGE 2] for PITCHf/x; [PAGE 2] for Carruth 50%; [PAGE 2] for Roegele 1x1 inch; [PAGE 2] for Ben-Porat; [PAGE 2] for EUZ. Good.

Need decide overall response length. Need >=1000 words. Our sections can be ~2000-2500 words. Need ensure not too huge? Desired oververbosity 5. But invariants require depth. Let's aim ~2200 words. Need all XML tags exact. No extra outside? We can just output XML sections. Need include LaTeX. Need not use markdown headings outside. Need no betting lines. Need mention "no betting lines" not necessary.

Need be precise with equations:
Define S_{ij} count called strikes in cell (i,j); N_{ij}=S_{ij}+B_{ij}; p̂_{ij}=S_{ij}/N_{ij}. Eq1. Units dimensionless.
Binomial model: S_{ij} ~ Binomial(N_{ij}, π_{ij}). Var(p̂)=π(1-π)/N. Weight w_{ij}=N_{ij}/[π(1-π)] (or p̂(1-p̂)). If p̂=0 or 1, add continuity correction 1/(N+2) or truncate. This is a breakdown regime.
Sigmoid: σ(t)=1/(1+e^{-t}). Define:
π_θ(x,z)=σ(β_{xL}(x-α_{xL}))[1-σ(β_{xR}(x-α_{xR}))]σ(β_{zB}(z-α_{zB}))[1-σ(β_{zT}(z-α_{zT}))].
But need ensure α ordering. For x, left edge α_{xL} < α_{xR}; for z bottom α_{zB}<α_{zT}. β positive. Then rise at left, fall at right. At x=α_{xL}, left factor=.5; right factor ~1 if α_{xR} sufficiently far. At x=α_{xR}, right factor=.5; left factor ~1. At z similar. The 0.5 contour rectangle boundaries are α terms only if cross-talk small? Source says alpha terms define where surface is 0.5, edges. But in product, at corner cross-talk. Need note "under the paper's separability/rectangular extraction assumption" [PAGE 6]. Actually source: "alpha parameters are positional terms that define where the value of the surface is 0.5—or a 50% chance to be called a strike. These alphas define the edges of the strike zone after the fitting process" [PAGE 6]. Good.
Need maybe include "β in cm^{-1}" because logistic argument β(x-α) dimensionless. x,z,α in cm. P dimensionless. If β positive. 
Weighted cost: 
\hat θ = argmin_θ Σ_{ij} w_{ij} [p̂_{ij}-π_θ(x_i,z_j)]^2, w_{ij}=N_{ij}/[p̂_{ij}(1-p̂_{ij})+ε] or N max? Then RMS = sqrt(C/M). Need cite [PAGE 5-6].
Height normalization: 
z̃ = z_b + (z - z_{b,obs})/(z_{t,obs}-z_{b,obs}) (z_t - z_b), z_b=49 cm, z_t=104 cm. If z_t,obs=z_b,obs breakdown. Use [PAGE 4].
IOU: 
IOU(Z_u,Z_MLB)=A(Z_u∩Z_MLB)/A(Z_u∪Z_MLB). For rectangles A=w h. Units cm²/cm² dimensionless. Cite [PAGE 12].
FISZ: 
FISZ_c = A(Z_c) - A(\bar Z_{season,hand}). Units cm². Cite [PAGE 16]. Good.
2-strike bias test: 
T_{2S} = A(Ẑ_{2S}) - A(Ẑ_{0/1}) or vs null distribution. Use z-score: z=(A_2S - μ_null)/σ_null. Source says chance 1 in 10^104 for 2008 RHB, area >400 cm² smaller, σ~20. Cite [PAGE 14]. Need not compute exact.
Need "singularity/breakdown regimes" in SOURCE_OPERATORS. Include:
- N_ij=0 -> p undefined, weight undefined; grid sparsity at tails and small subgroups.
- p̂=0 or 1 -> binomial variance zero, infinite weight; needs smoothing/continuity correction.
- β=0 -> sigmoid constant 0.5, alpha non-identifiable; β→∞ step function, gradient vanishes near edges.
- α_xL≥α_xR or α_zB≥α_zT -> nonphysical inverted zone, product may have no interior 0.5 contour.
- z_top=z_bottom -> height normalization singularity.
- raw z without normalization -> mixed heights, biased alpha.
- umpire assignment assumption violated -> label noise.
- catcher starter assumption violated -> FISZ attenuation.
- season/handedness nonstationarity -> pooled fit is not causal.
Need cite pages.

Need "gray-zone audit" in THINK_TRACE. Good.

Need "retrocausal genealogy" maybe "retrocausal" means how later methods reinterpret earlier? We'll state historical lineage and traps. Need mention multi-week traps: "A multi-week trap is to fit all 5.3M pitches without season/handedness stratification; the 14% narrowing and 29% aspect-ratio drop confound." [PAGE 11]. "Another is to treat 50% contour as official zone; the paper shows called zone 57.7 cm wide vs official 50.6 cm [PAGE 7]." Need exact quote: "the best-fit surface gives us a strike zone 57.7 cm wide–7.1 cm wider than the official MLB zone width" [PAGE 7]. Good.
Need "lefty strike largely disappears starting with 2017" [PAGE 11]. Exact quote: "The ‘lefty strike’ largely disappears starting with the 2017 season." [PAGE 11]. Good.
Need "umpires are changing their strike zones over time; new additions ... adapting" [PAGE 13]. Good.

Need "recursive theory of mind" more formal. We can define nested expectations:
Let U call y∈{0,1}; umpire's latent threshold τ_U(x,z,c,h_c,h_p,h_b). Catcher chooses presentation action a_c to maximize P(y=1 | a_c, U's prior). Pitcher chooses target a_p anticipating catcher and umpire. Batter chooses stance a_b anticipating zone. This is a Bayesian game. Need no fake ratios? It's formal, okay. But invariant says no toy equations; formal LaTeX with assumptions. We can include:
P_U(y=1 | x,z,c,a_c,a_p,a_b)=σ(π_θ(x,z)+γ_c 1_{catcher}+γ_p 1_{pitcher}+γ_b 1_{batter}+δ_c 1_{count=2}), 
where δ_c is 2-strike shift. But this is an extension not in paper; maybe label "testable extension, not estimated in source." Need avoid inventing. We can state "The paper's own operator is π_θ; player effects are measured as area differences, not as additive coefficients." Better.

Need "crisis habit regression vs counter-trap vs clock": Explain:
- Crisis habit regression: 2-strike count triggers stricter top/bottom zone; paper: 2-strike zone >400 cm² smaller, chance 1e-104 [PAGE 14]. It's a habitual regression under pressure? Maybe "crisis" = 2-strike. 
- Counter-trap: catchers frame (FISZ), pitchers with reputations get larger zones, batters with eye get smaller zones; these are equilibrium responses. If you train a model on called zone, players adapt to model, so counterfactual robot zone may shift behavior. Need cite FISZ, Arroyo etc, Votto/Soto/Judge.
- Clock: season-scale drift and cohort turnover; umpires change over time; new umpires adapt [PAGE 13]; lefty strike disappears 2017 [PAGE 11]. Need mention "clock" as slow institutional clock. Good.

Need "cross-layer veto adjudication" physical/biomechanical/weather veto proof. Need include:
Physical layer: official width 50.6 cm derived from plate 43.2 + 2*3.7; called width 57.7 cm; cannot claim exact rulebook execution. [PAGE 4, 7]. Height normalized mean top 104 bottom 49; raw z not comparable. [PAGE 4].
Biomechanical: batter stance/height changes zone; Judge 6'7" frame distorts perception; Soto stance; catcher framing; pitcher arsenal. [PAGE 18, 16, 17].
Weather: source has no weather covariate; any weather causal claim is vetoed. Measurement layer: PITCHf/x to Statcast ignored [PAGE 2]. Umpire change assumption [PAGE 3]. Catcher starter assumption [PAGE 16 footnote]. Good.

Need "RLVR counterfactual vetoes" 3 scenarios. Need make them verifiable with predictions:
1. Height-normalization ablation. Train same sigmoid surface on raw z. Prediction: LHB/RHB centroid shift and area equality degrade; the reported 3,156 vs 3,146 cm² and 3.9 cm LHB shift [PAGE 8-9] will not replicate as cleanly; IOU distribution widens. Veto if raw-z model matches normalized within tolerance? We can state pass/fail: normalized model should recover LHB shift ~3.9 cm; raw model should not. 
2. Heteroscedastic weighting ablation. Replace weighted cost with unweighted RMS. Prediction: edge alpha/beta estimates become more sample-size sensitive; low-N cells produce heavier tails; sensitivity boxplots at 1,000 pitches widen; 2-strike area effect may remain but null distribution variance changes. Veto if unweighted and weighted 2-strike effect sizes statistically indistinguishable at matched N.
3. Umpire/catcher assignment perturbation. Randomly swap 5% of umpire labels or use game-level crew instead of plate umpire; and allow catcher substitutions. Prediction: IOU histogram shifts down and FISZ for Molina/Hanigan/Grandal attenuates; 2-strike bias remains because count is within-pitch. Veto if FISZ ranking is invariant under label noise. 
Could include 4? They asked 3. Use exactly 3.

Need maybe include "RLVR" as "reinforcement learning with verifiable rewards" but not necessary. Need say "verifiable reward signal" for each. Good.

Need ensure no betting lines. No spreads/totals/moneylines/odds. Avoid "odds" except quote "odds of randomly sampling" from source? Invariant says never mention odds. But source quote includes "odds"? It says "the odds of randomly sampling..." If we quote it, that's mentioning odds? The invariant says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. To be safe, avoid the word "odds" entirely. Instead paraphrase probability: "roughly 1 chance in 10^104" is from source. Does "chance" count? Not betting line. Fine. Avoid "odds." Need not quote the sentence with "odds." Use exact quote "it is an outlier by any definition of the word" [PAGE 14] and "roughly 1 chance in 10^104" [PAGE 14]. Good.

Need include exact verbatim quotes. We can use quotes with page markers. Need not too many. Need ensure quotes exact:
- "A measurement is only as good as its instrument." [PAGE 1]
- "In any repeated event involving judgment, we expect variability in the instruments’ assessment." [PAGE 1]
- "The umpire does not change within the game." [PAGE 3]
- "utilizing the heteroscedastic errors present in each cell location during the fitting process is necessary to mitigate noise introduced by small(er) sample sizes" [PAGE 5]
- "The alpha parameters are positional terms that define where the value of the surface is 0.5—or a 50% chance to be called a strike." [PAGE 6] Check exact: Source: "The alpha parameters are positional terms that define where the value of the surface is 0.5—or a 50% chance to be called a strike. These alphas define the edges of the strike zone after the fitting process is completed." Yes [PAGE 6].
- "the best-fit surface gives us a strike zone 57.7 cm wide–7.1 cm wider than the official MLB zone width" [PAGE 7]. Source has "57.7 cm wide–7.1 cm wider" yes.
- "The ‘lefty strike’ largely disappears starting with the 2017 season." [PAGE 11].
- "umpires are changing their strike zones over time; new additions to the umpire corps are generally adapting to the existing zone rather than driving the changes." [PAGE 13]. Source exact: "This indicates umpires are changing their strike zones over time; new additions to the umpire corps are generally adapting to the existing zone rather than driving the changes." We can quote substring.
- "the 2-strike bias is very, very real." [PAGE 14]. Source exact: "Put plainly, the 2-strike bias is very, very real." Good.
- "Jose Molina has the largest FISZ" maybe exact: "Jose Molina has the largest FISZ compared to other catchers with 3+ seasons of catching." [PAGE 16]. Good.
- "his 6’7” frame probably distorts the umpire’s perception from a crouched position." [PAGE 18]. Exact includes "Judge’s height, his 6’7” frame probably distorts..." Good.
- "Using the best-fit strike zone from across the umpire corps as the target for a ‘robot umpire’ would preserve the zone as it’s currently called while incorporating an automated system." [PAGE 19]. Good.

Need no "odds" quote. Good.

Need include "PAGES: 17" but source has 20 pages. We can cite as given. No need mention mismatch? Maybe not.

Need XML structure exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need content in XML. LaTeX can include < and >? Avoid raw < inside equations? In XML, raw `<` must be escaped if in text. But we can use LaTeX with `<`? XML sections require valid XML? Probably not strict; but to be safe, avoid `<` in text except tags. Use `\lt` or words. For equations, `\alpha_{xL} \lt \alpha_{xR}`? In LaTeX, `<` is common, but raw `<` inside XML may be interpreted as tag. Better use `\lt` or `\le`? LaTeX `\lt` not standard? `\lt` is a relation? Actually LaTeX has `\lt`? It is not standard; use `\mathbin{<}`? But raw `<` can break XML. Since output is not parsed? But better avoid. Use `\alpha_{xL} \;\text{is less than}\; \alpha_{xR}` or use `\alpha_{xL} \prec \alpha_{xR}`. For equations with `>` use `\gt`? We can use `\to` etc. Avoid `<` and `>`. Use `\leq` (contains no <). For sigmoid `1/(1+e^{-t})` okay. For "0 to 1" okay. For `10^{104}` okay. For `cm^{-1}` okay. For `\hat{p}_{ij}` okay. For `\cap` etc.

Need use ampersand? Avoid raw `&` in text. Use "and". Good.

Need no markdown table? Fine.

Need include equations with `\[` etc. XML content can include backslashes. Good.

Need write THINK_TRACE >=400 words. Let's draft.

Potential THINK_TRACE:
"The source's central inference chain is: (i) called pitch is a binary human judgment; (ii) at each spatial cell, repeated judgments estimate a local strike probability; (iii) a smooth separable sigmoid product regularizes sparse cells; (iv) alpha parameters turn the surface into a rectangle for comparison; (v) IOU compares that rectangle to official zone; (vi) repeated subsampling builds null distributions for subgroup effects. The derivation is not a causal model of umpire cognition; it is a measurement model. The target estimand is π(x,z)=Pr(called strike | location, normalized height, season, handedness, ...). The paper pools 5,307,386 called pitches [PAGE 2] into 1 cm cells [PAGE 5]. Because cells near the shadow zone have mixed calls, raw cell fractions are heteroscedastic; the paper explicitly says 'utilizing the heteroscedastic errors present in each cell location during the fitting process is necessary to mitigate noise introduced by small(er) sample sizes' [PAGE 5]. The eight-parameter surface has two sigmoids per dimension, so alpha locates 0.5 crossings and beta controls steepness [PAGE 6]. The gray-zone audit: The paper does not estimate a full 3D prism; it flattens to x-z at the front of the plate [PAGE 4]. Height normalization maps each batter's reported top/bottom to 49/104 cm [PAGE 4]. The umpire label join assumes 'The umpire does not change within the game.' [PAGE 3]. The catcher analysis assumes the starter catches the whole game [PAGE 16 footnote]. These are not minor: they define the conditioning set. A pooled fit over 2008-2022 is nonstationary because the called zone narrowed nearly 14% and aspect ratio dropped 29% [PAGE 11]. The 2-strike test avoids some confounding by matching within season and handedness, then comparing the 2-strike fit to 1,000 random same-size samples [PAGE 14]. The result is an outlier: area more than 400 cm² smaller, roughly 1 chance in 10^104 [PAGE 14]. But effect size is top/bottom tightening, not all edges [PAGE 16]. The main trap is reifying the 50% contour as the official zone; the paper shows called width 57.7 cm vs official 50.6 cm [PAGE 4,7]. Another trap is treating FISZ or pitcher-zone sizes as pure causal effects when players are already adapting to the called zone. The gray-zone verdict: the surface is a strong descriptive instrument, but causal claims about umpire bias require counterfactual assignment and player-response modeling."
This is ~400? Count maybe 370. Need >=400. Add more. We can expand.

Need include "multi-hop derivation" and "gray-zone audit" explicitly. Good.

Need SOURCE_OPERATORS... detailed. Let's draft equations.

Need mention "Equation 1" as in source. "Equation 1 not rendered in source text but described: number of called balls and strikes in each cell defined strike percentage." We can write. Need maybe note "The PDF extraction omits the rendered Eq. 1 and Eq. 2; the following is the operator reconstructed from the surrounding prose." This is honest. But maybe not necessary. Need avoid "fake equations". We can state "Reconstructed from the prose; not a new empirical claim." Good.

Need include "assumptions":
A1 measurement at front of plate center of mass.
A2 height normalization.
A3 umpire fixed.
A4 catcher starter.
A5 stationarity within season/handedness.
A6 rectangular extraction.
A7 binomial cell noise.
Need cite.

Need include "breakdown regimes" as bullet list. Good.

Need RETROCAUSAL_GENEALOGY: ~350 words. Include lineage and traps. Good.

Need RECURSIVE_THEORY_OF_MIND: ~350 words. Include crisis habit regression vs counter-trap vs clock. Good.

Need CROSS_LAYER_VETO: ~300 words. Include physical/biomechanical/weather. Good.

Need RLVR: ~300 words. Include 3 scenarios. Good.

Total ~2000. Good.

Need be careful "odds" word not appear. Avoid "bet", "line", "spread", "total", "moneyline". "total" could appear in "total of eight free parameters" — invariant says never mention totals? It says betting lines: spreads, totals, moneylines, odds. "total" in non-betting context maybe okay but to be safe avoid "total" word? Could use "eight free parameters" instead of "total of eight". Avoid "odds." Avoid "over/under." Good.

Need not mention "MLB betting" etc.

Need "PAGES: 17" maybe cite [PAGE 17] for pitchers. Good.

Need use "probability surface" not "surface" only. Good.

Need include exact quotes with page markers. Need quote `“Shadow Zone”`? Fine.

Need maybe mention "Figure 1" quote? Not necessary.

Need ensure XML valid: Avoid raw `&` and `<`. In text, use "and" not ampersand. Avoid raw `>`? We can use `\gt`? In text, "0.5 or greater" no >. Avoid `<`. Equations with `\leq` okay. In text "less than" okay. Good.
Need avoid raw `&` in LaTeX? We can use `\quad` etc. No `&` alignment. Good.
Need raw `%`? LaTeX comments? Avoid. Use "percent". Good.

Need maybe include `$`? Fine.

Need output only XML sections. Good.

Let's craft carefully.

Potential issue: The source text page numbers are not [PAGE N] markers; user says "PAGES: 17" but source has page numbers. We will use [PAGE N] exactly.

Need maybe mention "Equation 2" as `\pi_\theta(x,z)` with four sigmoids. Need ensure formula product can exceed? Each factor [0,1], product [0,1]. At center, left factor 1, right factor 1? Wait if using `[1-\sigma(...)]`, for x far right, right factor 0, product 0. For x inside between alphas, left factor near 1, right factor near 1, product near 1. Good. But at x=α_xL, left factor 0.5, right factor near 1; product 0.5. At x=α_xR, right factor 0.5, left factor near 1; product 0.5. Good. If beta small, factors don't saturate, cross-talk reduces center below 1 and 0.5 contour shifts. But okay.
Need define `\sigma(\beta(x-\alpha))` with beta positive. For left edge rising: as x increases past α_xL, factor increases. For right edge falling: `1-\sigma(\beta_{xR}(x-\alpha_{xR}))` decreases. Good. For z bottom rising: `\sigma(\beta_{zB}(z-\alpha_{zB}))`; top falling. Good.
Need units: `\alpha` cm, `\beta` cm^{-1}, `x,z` cm, `\pi` dimensionless probability. Good.

Need weighted cost:
`\hat{\theta} = \arg\min_{\theta} \sum_{i,j} w_{ij} [\hat p_{ij} - \pi_\theta(x_i,z_j)]^2`
`w_{ij} = N_{ij}/[\hat p_{ij}(1-\hat p_{ij}) + \epsilon]`
This is inverse variance weight. If p=0/1 epsilon. Units: `w` dimensionless? N dimensionless, p dimensionless, so w dimensionless. Good. RMS = sqrt(weighted mean residual^2). Good.
Need mention `\epsilon` small regularizer. Breakdown if epsilon not set. Good.

Need IOU:
`\mathrm{IOU}(Z_u,Z_{\mathrm{MLB}}) = A(Z_u \cap Z_{\mathrm{MLB}})/A(Z_u \cup Z_{\mathrm{MLB}})`.
For rectangles area `w h`. Good.

Need FISZ:
`\mathrm{FISZ}_c = A(\hat Z_{c,\mathrm{season},h}) - A(\hat Z_{\mathrm{umpire\ corps},\mathrm{season},h})`. Units cm². Positive means larger called zone. Good.

Need 2-strike test:
`\Delta A_{2S} = A(\hat Z_{2S}) - A(\hat Z_{\mathrm{null\ sample}})`; null distribution from 1,000 resamples. Source says area more than 400 cm² smaller. Good.
Need maybe include z-score:
`z_{2S} = [A(\hat Z_{2S}) - \mu_{\mathrm{null}}]/\sigma_{\mathrm{null}}`. Good.

Need "singularity/breakdown regimes" exact:
- `N_{ij}=0` -> `\hat p` undefined.
- `\hat p=0` or `1` -> weights unbounded; continuity correction.
- `\beta=0` -> sigmoid constant 0.5; alpha and beta non-identifiable; gradient flat.
- `\beta \to \infty` -> step function; numerical gradient saturates; edge localization unstable.
- `\alpha_{xL} \geq \alpha_{xR}` or `\alpha_{zB} \geq \alpha_{zT}` -> inverted/nonphysical rectangle; no 0.5 contour.
- `z_{\mathrm{top,obs}} = z_{\mathrm{bottom,obs}}` -> height normalization division by zero.
- `N` small for subgroup -> repeated-fit null distribution wide; inference weak.
Need cite [PAGE 5,6,10].

Need "retrocausal genealogy" maybe mention "PITCHf/x introduced 2007 [PAGE 2]" and "Carruth 2012 50% probability [PAGE 2]" "Roegele 2013 1x1 inch grid [PAGE 2]" "Ben-Porat 2019 superellipse [PAGE 2]" "Umpire Scorecards 2021 kernel density and Bayes [PAGE 2]". Then paper's novelty: continuous sigmoid surface with heteroscedastic weighting and alpha extraction, repeated sampling. Then multi-week traps. Good.

Need "recursive theory of mind" maybe use "crisis habit regression" term. We need explain "crisis habit regression vs counter-trap vs clock." We can phrase:
- Crisis habit regression: In 2-strike counts, the umpire's decision policy regresses to a stricter top/bottom zone; measured as >400 cm² smaller area [PAGE 14]. This is a habit under crisis (strike 3).
- Counter-trap: Catchers (FISZ), pitchers (Arroyo etc.), batters (Votto/Soto/Judge) alter the observed surface; if the league adopts robot zone based on the called surface [PAGE 19], players will re-optimize against it, so the measured surface is not a stable target. This is the recursive trap.
- Clock: Slow institutional clock: umpire cohorts change over time and adapt to existing zone [PAGE 13]; lefty strike disappears 2017 [PAGE 11]. Any policy evaluation must be on the same clock.
Need maybe "recursive theory of mind" formal:
`P_U(y=1 | x,z,c) = \pi_\theta(x,z) + \delta_{2S}(x,z) + \eta_c + \eta_p + \eta_b` as testable extension, but paper doesn't estimate additive terms. Maybe not.

Need "cross-layer veto adjudication" include "weather" absent. Need state "The source contains no weather layer; therefore a weather explanation is vetoed unless new data are adduced." This satisfies. Need maybe "physical veto proof" with exact official width. Good.

Need "RLVR counterfactual vetoes" include "verifiable reward" maybe no need. Need 3 scenarios and predictions. Good.

Need final answer only XML. Let's write.

Need ensure word count >=1000. Our draft likely >2000. Good.

Need check no raw `<` in text. I need avoid `<` in equations. Use `\leq` and `\geq`. In text "from 0 to 1" no <. In equations, use `\alpha_{xL} \leq \alpha_{xR}` no raw <. `\beta \to 0` etc. Good. Avoid `>` in text: "more than" not >. In equations use `\geq`. Good. Avoid raw `&`. Good.

Need ensure no "odds" word. I will avoid. In THINK_TRACE don't quote "odds". Use "probability". Good.

Need maybe "1 chance in 10^{104}" is not betting. Fine.

Need not mention "spread" etc. Avoid "total" word? I might use "overall" not "total". Avoid "total" entirely. "The source's overall..." okay. "sum" okay. Avoid "moneyline". Good.

Need "probability surface" equations. Good.

Let's compose final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inference chain is a measurement-model derivation, not a causal model of umpire cognition. First, a called pitch is treated as a binary human judgment: “A measurement is only as good as its instrument.” [PAGE 1]. Second, repeated judgments at the same x-z location are binned into 1 cm by 1 cm cells, so each cell estimates a local strike probability [PAGE 5]. Third, because the number of pitches in a cell can be small, the paper explicitly accounts for heteroscedastic cell errors: “utilizing the heteroscedastic errors present in each cell location during the fitting process is necessary to mitigate noise introduced by small(er) sample sizes” [PAGE 5]. Fourth, the fitted surface is a separable product of four sigmoids—two in x and two in z—with eight free parameters; the alpha terms locate the 0.5 probability crossings and the beta terms set steepness [PAGE 6]. Fifth, the paper extracts a rectangle from the alpha terms so that called zones can be compared with the official zone [PAGE 6]. Sixth, IOU converts rectangle overlap into a dimensionless accuracy score [PAGE 12]. Seventh, repeated random subsampling generates empirical null distributions for subgroup comparisons, which is how the 2-strike bias is tested [PAGE 14].

The multi-hop derivation has several gray zones. The model flattens the official 3D pentagonal prism into an x-z rectangle at the front of the plate, because pitch location is measured where the ball’s center of mass crosses the front of home plate [PAGE 4]. Height is normalized per pitch: the average reported top is 104 cm and the average bottom is 49 cm, and each pitch is proportionally scaled into that frame [PAGE 4]. The umpire join assumes “The umpire does not change within the game.” [PAGE 3]. The catcher analysis assumes the starting catcher plays the whole game [PAGE 16 footnote]. These are not cosmetic assumptions; they define the conditioning set and therefore the estimand. A pooled 2008-2022 fit is also nonstationary: the called zone narrowed nearly 14% and the aspect ratio dropped 29% over the period [PAGE 11]. The 2-strike test partially controls for this by splitting by season and batter handedness, then comparing the 2-strike fit with 1,000 random same-size fits [PAGE 14]. The reported effect is large: the 2-strike zone is more than 400 cm² smaller, and the paper says “the 2-strike bias is very, very real” [PAGE 14]. But the effect is mainly top-and-bottom tightening, not a uniform edge shift [PAGE 16].

The central reification trap is treating the 50% contour as the official strike zone. The paper shows the called zone is 57.7 cm wide, 7.1 cm wider than the official width [PAGE 7], so the fitted surface is a behavioral instrument, not a rulebook reconstruction. Another trap is treating catcher FISZ or pitcher-zone size as pure causal effects; those quantities are equilibrium measurements in which catchers, pitchers, and batters are already adapting to the called zone. The surface is therefore strong for description and weak for causal attribution unless assignment is randomized or a player-response model is added. The gray-zone audit verdict: the operator is a well-behaved descriptive probability-surface estimator, but its alpha/beta parameters are identifiable only under sufficient cell counts, positive beta constraints, ordered alpha constraints, stable height normalization, and season/handedness stratification.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s first operator is the cell-level strike fraction. For cell \((i,j)\) in the x-z grid, let \(S_{ij}\) be the number of called strikes, \(B_{ij}\) the number of called balls, and \(N_{ij}=S_{ij}+B_{ij}\). The paper states that “the number of called balls and strikes in each cell defined the strike percentage for that location in the grid as shown in Equation 1” [PAGE 5]. Reconstructed from that prose, the operator is
\[
\hat p_{ij}=\frac{S_{ij}}{N_{ij}},\qquad N_{ij}=S_{ij}+B_{ij},
\]
with \(\hat p_{ij}\) dimensionless, \(S_{ij}\) and \(B_{ij}\) in counts, and \(N_{ij}\) in counts. The binomial working assumption is
\[
S_{ij}\sim \mathrm{Binomial}(N_{ij},\pi_{ij}),
\]
so the cell variance is \(\mathrm{Var}(\hat p_{ij})=\pi_{ij}(1-\pi_{ij})/N_{ij}\), dimensionless. The paper’s warning is explicit: cells can have much smaller samples than the 5.3 million-pitch corpus, so “utilizing the heteroscedastic errors present in each cell location” is necessary [PAGE 5].

The second operator is the fitted probability surface. The source says the function has “two sigmoids in the x direction and two in the y direction” and “a total of eight free parameters” [PAGE 6]. A faithful formal reconstruction, with \(x,z,\alpha\) in cm and \(\beta\) in \(\mathrm{cm}^{-1}\), is
\[
\sigma(t)=\frac{1}{1+e^{-t}},
\]
\[
\pi_{\theta}(x,z)=
\sigma\!\left(\beta_{xL}(x-\alpha_{xL})\right)
\left[1-\sigma\!\left(\beta_{xR}(x-\alpha_{xR})\right)\right]
\sigma\!\left(\beta_{zB}(z-\alpha_{zB})\right)
\left[1-\sigma\!\left(\beta_{zT}(z-\alpha_{zT})\right)\right],
\]
where \(\theta=(\alpha_{xL},\alpha_{xR},\alpha_{zB},\alpha_{zT},\beta_{xL},\beta_{xR},\beta_{zB},\beta_{zT})\). Here \(\pi_{\theta}\) is dimensionless probability; \(x,z\) are cm; \(\alpha\) are cm; \(\beta\) are \(\mathrm{cm}^{-1}\). The ordering constraints are \(\alpha_{xL}\leq \alpha_{xR}\), \(\alpha_{zB}\leq \alpha_{zT}\), and \(\beta\) positive. The paper states: “The alpha parameters are positional terms that define where the value of the surface is 0.5—or a 50% chance to be called a strike. These alphas define the edges of the strike zone after the fitting process is completed.” [PAGE 6]. The beta terms “determine how steeply the probability surface rises from 0 to 1 or falls from 1 back to 0” [PAGE 6].

The third operator is the heteroscedastic weighted fit. The paper says it “created a custom cost function for the optimizer that first normalized distances between the data points and a candidate fitted surface before summing them” [PAGE 6]. A standard inverse-variance form is
\[
\hat\theta=\arg\min_{\theta}\sum_{i,j}w_{ij}\left[\hat p_{ij}-\pi_{\theta}(x_i,z_j)\right]^2,
\qquad
w_{ij}=\frac{N_{ij}}{\hat p_{ij}(1-\hat p_{ij})+\epsilon},
\]
with \(\epsilon\) a small positive regularizer and \(w_{ij}\) dimensionless. The reported misfit is
\[
\mathrm{RMS}(\theta)=\sqrt{\frac{1}{M}\sum_{i,j}w_{ij}\left[\hat p_{ij}-\pi_{\theta}(x_i,z_j)\right]^2},
\]
where \(M\) is the number of populated cells and RMS is dimensionless.

The fourth operator is height normalization. The paper reports average top 104 cm and average bottom 49 cm [PAGE 4]. For an observed pitch height \(z\), observed bottom \(z_{b,\mathrm{obs}}\), observed top \(z_{t,\mathrm{obs}}\), and normalized bottom \(49\) cm and top \(104\) cm,
\[
\tilde z
=
49
+
\frac{z-z_{b,\mathrm{obs}}}{z_{t,\mathrm{obs}}-z_{b,\mathrm{obs}}}
\left(104-49\right),
\]
with all heights in cm. The paper’s example is proportional: if a pitch is 25% above the reported bottom, its adjusted value is 25% above the normalized bottom [PAGE 4].

The fifth operator is IOU. The paper says “We calculate the percent overlap as the intersection-over-union—the IOU—ratio (Equation 3).” [PAGE 12]. With \(A(\cdot)\) denoting area in \(\mathrm{cm}^2\),
\[
\mathrm{IOU}(Z_u,Z_{\mathrm{MLB}})
=
\frac{A(Z_u\cap Z_{\mathrm{MLB}})}{A(Z_u\cup Z_{\mathrm{MLB}})},
\]
dimensionless. For rectangles \(Z_u\) and \(Z_{\mathrm{MLB}}\), the areas are width times height in \(\mathrm{cm}^2\).

The sixth operator is the framing-induced strike zone:
\[
\mathrm{FISZ}_c
=
A(\hat Z_{c,\mathrm{season},h})
-
A(\hat Z_{\mathrm{umpire\ corps},\mathrm{season},h}),
\]
in \(\mathrm{cm}^2\), where \(h\) is batter handedness. The paper defines FISZ as “the difference between the area of the umpires’ average strike zone and the strike zone for a particular catcher” [PAGE 16].

The seventh operator is the 2-strike null test:
\[
z_{2S}
=
\frac{A(\hat Z_{2S})-\mu_{\mathrm{null}}}{\sigma_{\mathrm{null}}},
\]
where \(\mu_{\mathrm{null}}\) and \(\sigma_{\mathrm{null}}\) are estimated from repeated random fits of the same sample size [PAGE 14]. The source reports a 2008 RHB 2-strike zone more than 400 cm² smaller and roughly “1 chance in \(10^{104}\)” under the Gaussian null [PAGE 14].

Breakdown and singularity regimes are exact and material. If \(N_{ij}=0\), \(\hat p_{ij}\) is undefined and \(w_{ij}\) is undefined. If \(\hat p_{ij}=0\) or \(1\), the binomial variance is zero and \(w_{ij}\) is unbounded without continuity correction or regularization. If \(\beta=0\), each sigmoid is constant at 0.5 and alpha/beta are non-identifiable; if \(\beta\to\infty\), the sigmoid becomes a step and numerical gradients saturate near the edge. If \(\alpha_{xL}\geq \alpha_{xR}\) or \(\alpha_{zB}\geq \alpha_{zT}\), the surface can become inverted or nonphysical and the rectangle extraction has no valid interior. If \(z_{t,\mathrm{obs}}=z_{b,\mathrm{obs}}\), height normalization divides by zero. If subgroup \(N\) is small, the repeated-fit null distribution widens and inference weakens [PAGE 10]. If the umpire label is wrong, the surface is label-noise-contaminated; the paper explicitly assumes “The umpire does not change within the game.” [PAGE 3]. If the catcher substitution assumption fails, FISZ attenuates [PAGE 16 footnote].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage begins with PITCHf/x in 2007, which made pitch-by-pitch location data public [PAGE 2]. Carruth in 2012 defined the called zone as the area where a pitch has at least a 50% chance of being called a strike and found an approximately elliptical best fit [PAGE 2]. Roegele in 2013 divided the x-z plane into one-inch squares and defined the zone as cells where more than 50% of pitches were strikes; those zones were more rectangular, and Roegele linked zone area to pitch count, out count, pitch type, velocity, batter handedness, and base-runner state [PAGE 2]. Ben-Porat in 2019 used a superellipse to approximate the true shape [PAGE 2]. Umpire Scorecards in 2021 used kernel density estimation and Bayes’s Theorem to derive a strike-probability function and took the 50% contiguous contour as the Estimated Umpire Zone [PAGE 2]. The present paper’s retrocausal contribution is to replace the 50% contour-as-zone convention with a continuous eight-parameter probability surface, weighted by cell-level heteroscedasticity, and to extract alpha-based rectangles for explicit umpire-to-official comparisons [PAGE 6].

The multi-week traps in this lineage are mostly traps of reification and nonstationarity. The first is to treat the 50% contour as the rulebook zone. The paper’s own result refutes that: the called zone is 57.7 cm wide, 7.1 cm wider than the official width [PAGE 7], and the official width is 50.6 cm from plate width 43.2 cm plus two baseball radii of 3.7 cm [PAGE 4]. The second trap is to pool 2008-2022 without season and handedness stratification. The called zone narrowed nearly 14%, the bottom dropped nearly 9 cm, and the aspect ratio dropped 29% [PAGE 11]. The third trap is to read the “lefty strike” as a fixed umpire trait; the paper reports that “The ‘lefty strike’ largely disappears starting with the 2017 season.” [PAGE 11]. The fourth trap is to confuse cohort replacement with individual learning. The paper’s tenure plot indicates “umpires are changing their strike zones over time; new additions to the umpire corps are generally adapting to the existing zone rather than driving the changes.” [PAGE 13]. The fifth trap is to overread statistical significance without effect size; the 2-strike bias is robust, but its dominant effect is top-and-bottom tightening [PAGE 16]. The sixth trap is to treat FISZ, pitcher-zone size, or batter-eye effects as pure causal quantities when they are equilibrium measurements of players already adapting to the called zone [PAGE 16, PAGE 17, PAGE 18].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive layer has three distinguishable dynamics. The first is crisis habit regression: on a 2-strike count, the umpire’s decision policy regresses toward a stricter top-and-bottom zone. The paper measures this as a 2-strike zone more than 400 cm² smaller than the season/handedness-matched null and says “the 2-strike bias is very, very real” [PAGE 14]. This is a habit under strike-three pressure, not a uniform shrinking of all edges; the paper states the dominant driver is “the tightening of the top and bottom of the zone” [PAGE 16].

The second is the counter-trap. Catchers learn that framing changes the probability surface; the paper’s FISZ measures that influence directly, and Jose Molina has the largest FISZ among catchers with at least three seasons [PAGE 16]. Pitchers with reputations or arsenals get different called zones: Bronson Arroyo, Livan Hernandez, Derek Lowe, Ryan Vogelsong, and Jered Weaver consistently earn larger zones [PAGE 17]. Batters also face recursive expectations: Joey Votto’s called zone is slightly smaller than average for a left-handed batter, while Juan Soto’s is more than 200 cm² larger and nearly 5 cm taller, and Aaron Judge’s bottom edge sits at 42.8 cm, nearly 3 cm lower than the RHB average [PAGE 18]. The counter-trap is that if the league adopts a robot zone based on the called surface, players will re-optimize against it. The paper explicitly proposes using the best-fit corps zone as the robot target to “preserve the zone as it’s currently called while incorporating an automated system” [PAGE 19], but that target is an equilibrium object, not an exogenous rule.

The third is the clock. The slow institutional clock is season-scale drift and cohort turnover: the called zone moves down and to the right across seasons, and umpire cohorts move together [PAGE 13]. The lefty strike fades after 2017 [PAGE 11]. A recursive policy model therefore needs a clock variable \(t\) and a cohort variable \(g\), not a single pooled intercept. In formal terms, the estimand should be \(\pi_{\theta}(x,z\mid t,h,g,c)\), where \(h\) is batter handedness, \(g\) is umpire cohort, and \(c\) is count state; the paper’s own operators already condition on season and handedness for subgroup work [PAGE 14]. The theory-of-mind verdict is that the umpire is reacting to catcher presentation, pitcher reputation, batter stance, and count pressure, while those players are reacting to the umpire’s revealed zone. That loop makes the measured surface diagnostic but not policy-invariant.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer vetoes any claim that the called zone is the official rectangle. The official width is fixed by geometry: home plate width 43.2 cm plus two baseball radii of 3.7 cm gives 50.6 cm [PAGE 4]. The fitted called zone is 57.7 cm wide [PAGE 7]. The fitted height is 56.1 cm against an average reported height of 55.3 cm [PAGE 7]. These are physical measurements in cm, and they veto the assumption that umpires execute the rulebook prism exactly.

The biomechanical layer vetoes raw-height comparisons. The paper normalizes each batter’s reported top and bottom to 104 cm and 49 cm [PAGE 4]. Without that normalization, batter height and stance contaminate alpha estimates. The paper’s Judge example is explicit: “his 6’7” frame probably distorts the umpire’s perception from a crouched position” [PAGE 18]. Soto’s taller called zone is attributed in part to a wider or lower two-strike stance [PAGE 18]. Catcher framing is also biomechanical: FISZ is defined as the difference between the catcher-specific zone area and the umpire-corps zone area [PAGE 16]. Pitcher arsenal and mechanics are another biomechanical layer: pitcher zones are more variable than umpire zones, averaging 3,100 cm² with roughly \(\pm 450\) cm² spread for pitchers with more than 500 pitches [PAGE 17].

The weather layer is not present in the source. The paper contains no weather covariate, no temperature, wind, humidity, or precipitation operator. A weather explanation for called-zone shifts is therefore vetoed unless new data are adduced. The measurement layer also vetoes overconfidence: the paper ignores PITCHf/x-to-Statcast/TrackMan measurement effects across the 2017 transition [PAGE 2 footnote], and it assumes no in-game umpire change [PAGE 3]. The catcher layer assumes the starter catches the entire game [PAGE 16 footnote]. Cross-layer verdict: physical geometry, normalized biomechanics, and measurement provenance all support the surface as a descriptive instrument; weather and unmodeled measurement breaks have no evidentiary standing in this source.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: height-normalization ablation. Re-run the identical eight-parameter fit on raw \(z\) instead of the normalized \(\tilde z\). The verifiable prediction is that the clean LHB/RHB result should degrade: the paper reports nearly identical areas of 3,156 cm² for RHB and 3,146 cm² for LHB, with the LHB midpoint shifted 3.9 cm toward the outside of the plate [PAGE 8-9]. If raw-height fitting reproduces that 3.9 cm shift and the area equality within the reported tolerance, the height-normalization operator is vetoed as unnecessary. If raw-height fitting widens the IOU distribution and changes the LHB centroid, the normalization operator survives.

Scenario 2: heteroscedastic-weight ablation. Replace the inverse-variance weighted cost with an unweighted RMS over populated cells. The prediction is that sparse edge cells will dominate alpha/beta estimates, the 1,000-pitch sensitivity boxplots will widen, and edge alpha estimates will become more sample-size-sensitive [PAGE 10]. A verifiable veto occurs if the unweighted and weighted fits produce statistically indistinguishable 2-strike area deficits and indistinguishable null-distribution widths at matched \(N\). If the weighted fit is more stable and the 2-strike effect remains an outlier, the heteroscedastic operator survives.

Scenario 3: label and catcher-assignment perturbation. Randomly swap a small fraction of umpire labels, or replace the plate-umpire label with the game crew label, and allow catcher substitutions instead of assuming the starter catches the whole game [PAGE 3, PAGE 16 footnote]. The prediction is that the IOU histogram shifts downward and FISZ rankings attenuate, especially for catchers with partial-game appearances. A verifiable veto occurs if Jose Molina’s largest-FISZ result and the broader FISZ ranking are invariant under 5% label noise and catcher-substitution leakage [PAGE 16]. If the rankings attenuate, the source’s label assumptions are boundary conditions on the causal claim, not harmless details.
</RLVR_COUNTERFACTUAL_VETOES>