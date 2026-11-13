---
source: "arxiv_2006.14930v1.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 64
model: deepseek/deepseek-v4.1-flash-1017
words: 8940
---

<NATIVE_REASONING>
We need answer as GSE + GSI Frontier Reasoning Foundry. Need analyze provided source about metabolomic measure etc. User asks DRIVE SOURCE pages, source text. They likely expect deep multi-hop derivation, gray-zone audit, formal equations, citations, historical lineage, recursive theory of mind, cross-layer veto, RLVR counterfactual vetoes. But no explicit question other than provide analysis under strict XML sections. We must comply with invariants: zero betting lines; no fake ratios; formal LaTeX equations with units, assumptions, singularity breakdown regimes; cite exact [PAGE N] markers and verbatim quotes when source pages provided. >=1000 words across exact XML sections. Need produce sections exactly. Need think carefully.

We need infer task: probably evaluate source and produce "GSE+GSI Frontier Reasoning Foundry" analysis maybe for a "drive source" PDF. Need include THINK_TRACE >=400 words. SOURCE_OPERATORS_AND_EQUATIONS formal LaTeX, units, page citations, breakdown. RETROCAUSAL_GENEALOGY historical/scientific lineage & multi-week traps. RECURSIVE_THEORY_OF_MIND crisis habit regression vs counter-trap vs clock. CROSS_LAYER_VETO_ADJUDICATION physical/biomechanical/weather veto proof. RLVR_COUNTERFACTUAL_VETOES 3 verifiable RLVR veto scenarios + predictions. Need no betting lines. Need perhaps also derive causal graph from paper and audit.

We need cite exact [PAGE N] and verbatim quotes. We can quote relevant phrases. Need be precise. Need not fabricate equations? We can present paper equations as source operators plus derived formal equations. Need units. Need assumptions and singularity regimes. Avoid "toy equations" like Force/Fatigue. We can state formal statistical equations from paper: cHAE_Th,i = sum u(PTA_k,i - Th); aHAE_Th,i = cHAE/sessions; moderation DV = beta0 + beta1 IV + beta2 M + beta3 IV*M + epsilon; permutation p = K/Q; Sobel z and Teff; network fingerprint as correlation between submatrices pre/post. Need units: PTA in G units (g? "G-units" [PAGE 7]); HAE counts dimensionless; cHAE count; aHAE count/session; Δ measures in native scale per variable; beta coefficients in DV units per predictor unit; interaction beta3 in DV units per (IV unit * M unit); p dimensionless probability; Q = 100000 permutations; Teff percent. Network fingerprint correlation dimensionless [-1,1]. We can give equations and breakdown: regression singular when design matrix rank deficient, high collinearity, perfect separation? For moderation: if IV and M collinear, interaction term collinear; Cook's distance outlier removal can make small n; Q finite yields p resolution 1/Q = 1e-5; p_perm can be 0 if K=0; small sample; multiple comparisons. Need exact singularity regimes: S < predictors+1; zero variance in IV/M; interaction X*M perfectly collinear with X or M if moderator constant; duplicate rows; equal pre/post? For fingerprint: zero variance in submatrix correlation; constant connectivity; undefined if ROI time series variance zero; correlation denominator zero. For permutation: when Q insufficient; p_perm = K/Q has granularity; no p below 1/Q; K=0 leads p=0 (not valid exact? use (K+1)/(Q+1)). For mediation Sobel: denominator zero if se terms zero; Teff denominator zero if total effect zero; unstable near zero. Also HAE threshold u piecewise discontinuity at PTA=Th; sensor quantization.

Need mention source doesn't provide raw data / exact values. Need distinguish what paper claims vs what can be inferred. Need maybe "gray zone audit": small n=17 with all measures, 23 athletes, 20 MRI; 16 non-athletes. Cross-sectional age-matched comparison has different scan parameters (3T GE vs 3T? athletes likely 3T? [PAGE 13] vs [PAGE 37] eyes-open vs eyes-closed; TR/TE etc different). Important gray-zone: athletes rs-fMRI eyes-closed 10 min, 300 volumes, 2mm; non-athletes eyes-open, 294 volumes, 3.125x3.125x3.80, TR/TE 2000/26, flip angle 35 vs 90. This is huge confound for fingerprint comparison Figure 3. Need mention. Also no games monitored [PAGE 7], only practices; max 53 sessions; HAE thresholds 25 and 80 G chosen from prior reports. "Twenty-three male collegiate varsity student football athletes" but "seventeen (17) subjects had both Pre and Post data for all five measurements" [PAGE 15]. "Twenty (20) athletes participated in two MRI sessions" [PAGE 13]. No participants excluded due to history of concussion; 9/23 prior concussions [PAGE 7]. Blood samples pre/post; no diagnosed concussion in 9 months preceding preseason [PAGE 7]. None mediation significant [PAGE 22]; only two moderation results. Need caution: "moderation" statistical interaction, not causal proof. The paper uses "moderates" but cannot establish mechanism. Need mention "tridecenedioate" is candidate ROS scavenger based on double bond, not measured ROS. Need "miR-505" inflammatory miRNA but paper cites tumor etc. Need "DMN fingerprint less similar in athletes relative to age-matched non-athletes" but confounded by scan protocol and eyes open/closed. Need mention "aHAE25G positive with ΔmiR-505" and "cHAE80G negative with DMN fingerprint" are two-way nominal? They are in Figure 2; likely from pairwise associations after Cook's removal. Need cite.

Need perhaps discuss "retrocausal genealogy": historical/scientific lineage: Luria's neuropsychology [61-63], VR balance [64-66], functional connectome fingerprinting [75-81], Yeo networks [89], neuroinflammation model [28-34], DAI [35-42], neurovascular decoupling [20-27], metabolomics in mTBI [50-59], miRNA TBI [45,46], ROS scavenging fatty acids [95-98]. Multi-week traps: subconcussive HAE exposure over season; blood and MRI sampling only pre/post, not weekly; HAE monitored contact practices only not games; no weekly resolution; "more HAEs meant lower similarity in DMN" could be cumulative dose; reverse causation or preexisting differences; no baseline non-athlete longitudinal. "Multi-week traps" maybe in reasoning context means traps from temporal aggregation: acute vs chronic; season length; practice vs game exposure; window between last game and post sample within one week; pre before contact; unknown off-season. Need state.

Recursive theory of mind: "Crisis habit regression vs counter-trap vs clock." This is cryptic. Need interpret: in crisis reasoning, agents may regress to habit (simple heuristics) vs counter-trap (opposite bias) vs clock (temporal urgency). Need map to study: clinicians/researchers may over-interpret p-values (habit regression), or dismiss entirely due small n (counter-trap), vs clock: season timeline and window. Need discuss "theory of mind" perhaps modeling investigators/athletes: athletes asymptomatic, self-report unreliable; researchers hypothesis; clinicians. Need produce section. Could frame as "recursive observer model": athlete's lack of symptoms -> underreport; researcher's confirmation bias; statistical model's assumptions. Need handle carefully.

Cross-layer veto adjudication: physical/biomechanical/weather veto proof. Need discuss whether proposed causal chain is vetoed by physics/biomechanics/weather. The paper has no weather data. We need state weather cannot adjudicate; no meteorological variables in source. Biomechanical: helmet sensors measure peak translational acceleration, not rotational acceleration; 25G/80G thresholds; sensor mounted in helmet; no games; no impact location used in analysis? Page 7 says sensor outputs included impact location but analysis only PTA thresholds. Physical: tridecenedioate double bond ROS scavenging hypothesis is chemically plausible but not directly measured; no ROS assay; no lipid peroxidation measure. "Weather veto" likely means environmental conditions like heat/hydration could confound metabolome and balance; source does not report weather, hydration, diet, sleep, etc. We must not invent. Need say no cross-layer veto can be proven from this source because relevant variables absent; the strongest veto is protocol mismatch for non-athlete comparison. Need provide "veto proof" as formal: If a confounder C affects both X and Y and is unbalanced, the observed association is not identified. Need equation. Maybe define causal graph and backdoor. Use LaTeX. Need mention no weather variables. Need avoid betting lines.

RLVR_COUNTERFACTUAL_VETOES: need 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need give three counterfactual scenarios that would veto claims. Must be verifiable and predictions. Need no betting. Could include:
1) If rerun moderation with non-athlete protocol-matched control scan parameters and eyes-state matched, DMN fingerprint difference attenuates to null (prediction: Figure 3 group effect loses significance; moderation p_perm > 0.05). Veto: claim athletes have lower DMN fingerprint due HAE.
2) If HAE monitoring includes games and total exposure, the cHAE80G–DMN relation remains negative after controlling for practice sessions and sensor model; if it disappears, veto. Prediction: coefficient not different from zero; p_perm >0.05.
3) If direct ROS/lipid peroxidation assay shows no relation between tridecenedioate and oxidative stress or if tridecenedioate change is explained by diet/exercise, moderation vanishes. Prediction: interaction beta3 null.
Need 3 verifiable RLVR scenarios. Could also include mediation: none significant already; a counterfactual with pre/post randomized sham season. Need include predictions with specific statistical thresholds? Maybe p_perm > .05, CI includes zero, etc. Need not mention odds. Fine.

Need structure exact XML sections. Need ensure total >=1000 words. Likely produce 2500-3500 words. Desired oververbosity 5 but user demands depth. Need include all exact sections. Need cite [PAGE N] markers. Verbatim quotes. Need exact quotes from source. Need be accurate. Let's collect key quotes and pages:

Page 2 abstract: "Change in an energy cycle fatty acid, tridecenedioate, moderated the relationship between 1) miR-505 and DMN fingerprint and 2) the relationship between DMN fingerprint and worsening VR Balance measures (all 𝑝𝐹𝑝𝑒𝑟𝑚, 𝑝𝛽3𝑝𝑒𝑟𝑚 ≤ 0.05)." Page 2. "tridecenedioate has a double bond making it a candidate for ROS scavenging." Page 2.

Page 7: "Twenty-three (23) male collegiate varsity student football athletes (mean standard deviation = 21 2 years)" [PAGE 7]. "No participants were excluded due to history of concussion." [PAGE 7]. "HAEs were monitored at all contact practice sessions (max = 53; no games were monitored)" [PAGE 7]. "Two G-unit thresholds i.e. 25G and 80G were selected based on previous reports of impacts related to brain health and injury" [PAGE 7].

Page 8 equation cHAE and aHAE.

Page 11-12: 968 metabolites; 161 significant FDR q<0.05; 40 selected.

Page 13: "Twenty (20) athletes participated in two MRI sessions consisting of a 10-min eyes-closed rs-fMRI scan..." [PAGE 13]. "first four volumes discarded" etc.

Page 14: 278 ROIs, cerebellum 30 discarded -> 248; Yeo 7 + subcortical.

Page 15: "seventeen (17) subjects had both Pre and Post data for all five measurements." [PAGE 15]. "For rs-fMRI networks, the fingerprint—representing the similarity between repeat visits of the same participant—was used instead of Δ values." [PAGE 15].

Page 18 moderation equation: "𝐷𝑉= 𝛽0 + 𝛽1𝐼𝑉+ 𝛽2𝑀+ 𝛽3(𝐼𝑉∗𝑀) + 𝜖" [PAGE 18]. "Moderation is significant if 𝑝𝛽3 ≤0.05 and 𝑝𝐹≤0.05" [PAGE 18].

Page 19-20 permutation: Q=100,000; p_perm = K/Q.

Page 22: "None of the three-way associations resulted in a significant mediation." [PAGE 22]. Page 23: "Two moderation results were observed meeting permutation criteria." [PAGE 23].

Page 23-24 first moderation pF=0.03, pβ3=0.05; second pF=0.02, pβ3=0.02. Need note discrepancy in Figure caption Page 25 says first pF=0.05, pβ3=0.03 (swapped vs text) — gray-zone. Important. Page 23 text: "with 𝑝𝐹𝑝𝑒𝑟𝑚 = 0.03, 𝑝𝛽3𝑝𝑒𝑟𝑚= 0.05." Page 25 caption: "( 𝑝𝐹𝑝𝑒𝑟𝑚= 0.05, 𝑝𝛽3𝑝𝑒𝑟𝑚= 0.03)." That's inconsistency. Need mention as audit. Also Page 26 caption second pF=0.02 pβ3=0.02 consistent.

Page 26: "there was a positive relationship between miR-505 and aHAE25G" and "negative relationship between DMN fingerprint and cHAE80G." Page 26. Page 27 Figure 2 caption.

Page 28: "Age-matched non-athletes exhibited significantly higher network fingerprint values, using two-sample t-test following Bonferroni correction, for all networks except the Limbic system (L)" [PAGE 28]. Page 37: "A cohort of sixteen undergraduate and graduate students (age: mean ± st. deviation = 22.8± 2.12 years; nine female and seven male) from Purdue University participated in imaging session" [PAGE 37]. "ten minutes eyes-open resting-state fMRI scan" [PAGE 37]. Different parameters. Need quote.

Page 33: "Better performance in the VR Balance task was related to higher DMN similarity ... and lower levels of the ROS scavenging compound, tridecenedioate." [PAGE 33]. Need note "lower levels" maybe confusing with negative relationship.

Page 34 limitations: "The primary limitation of the study was the modest sample size for which all five measures were available" [PAGE 34]. "HAE metrics were only allowed to be collected at practices and not during competitive play" [PAGE 34].

Page 38 Sobel equation and Teff equation. Need quote maybe. Page 38: Sobel z-score equation; Teff equation. Need formal.

Page 39 mediation significant if p_perm <=0.05 and Teff>50%. But none significant.

Need equations:
Define cHAE:
\[
cHAE_{Th,i} = \sum_{k=1}^{N_i} u(PTA_{k,i}-Th),\quad u(x)=\begin{cases}1,&x>0\\0,&x\le0\end{cases}
\]
units: PTA G; Th G; cHAE count; N_i impacts count. aHAE = cHAE/sessions_i count/session. Singularity: sessions_i=0 -> undefined; PTA = Th exactly -> u=0; sensor resolution.

Fingerprint:
\[
F_{n,i} = \operatorname{corr}(\operatorname{vec}(C_{n,i}^{Pre}), \operatorname{vec}(C_{n,i}^{Post}))
\]
or submatrix correlation. C is 248x248 Pearson correlation coefficients dimensionless. Corr undefined if zero variance; if no edges (constant). F dimensionless [-1,1]. Paper says network fingerprint calculated by correlating submatrix corresponding to each network from Pre and Post [PAGE 14,15]. Need mention not thresholded/binarized [PAGE 14].

Moderation:
\[
DV_i = \beta_0+\beta_1 IV_i+\beta_2 M_i+\beta_3(IV_i M_i)+\epsilon_i
\]
with DV and IV/M variables as specified. Units: DV native, beta1 DV/IV, beta2 DV/M, beta3 DV/(IV·M). Significance p_beta3 and p_F. Breakdown: if IV*M collinear with IV/M (M constant), rank deficient; S small; Cook's distance removes influential points and changes n; multiple testing.

Permutation:
\[
p_{\beta_3}^{perm} = \frac{1}{Q}\sum_{q=1}^Q \mathbf{1}\{|t_q'|\ge |t_0|\} = K_1/Q,
\]
same for F. Q=100,000. Units probability. Granularity 1/Q=1e-5; K=0 yields 0; exact permutation p should be (K+1)/(Q+1). Breakdown: permutation distribution invalid if exchangeability violated (e.g., paired pre/post not exchangeable? They randomly select from x1 and x2 to assign to x1', x2'—that's permutation of time labels per subject; valid under sharp null of no season effect but not if variance differs; need mention). If sample S=17 and Q huge, Monte Carlo error ~sqrt(p(1-p)/Q). Also multiple comparisons within 3-way triangulation; they use permutation but selection of three-way associations based on p<=0.05 two-way may induce selection bias; not corrected for discovery? Need gray-zone audit: "all two-way associations with p<=0.05 passed forward" leads multiple testing; permutation only for moderation after selection. This is a key trap. Need mention.

Sobel:
\[
z = \frac{\beta_{1,1C}-\beta_{1,2C}}{\sqrt{(\beta_{2,2C})^2(\epsilon_{1A})^2 + (\beta_{1A})^2(\epsilon_{2C})^2}}
\]
Actually paper uses standard error terms? They wrote (𝜖1𝐴)^2 but likely se? We can quote as source. Need note notation ambiguity: epsilon used for error terms vs standard errors; Sobel denominator zero if both se products zero -> undefined; Teff denominator zero if total effect zero. Paper says p_Sobel^perm<=0.05 and Teff>50% [PAGE 39]. None significant. Need include.

Need perhaps define identification/backdoor for cross-layer:
\[
P(Y|do(X=x)) = \sum_c P(Y|X=x,C=c)P(C=c)
\]
if C satisfies backdoor. If unmeasured confounder U, not identified. Need maybe not necessary but formal. Units probability. Breakdown when positivity violation P(C=c|X=x)=0. Weather absent -> cannot condition. Need mention physical/biomechanical/weather veto proof: no weather variables in source; no rotational acceleration, no impact location analysis, no game exposure. Therefore any weather veto is unsupported; biomechanical veto partially: sensor only PTA; rotational acceleration is known important but not measured. But "proof" maybe we need demonstrate no veto? We can say "cannot veto or confirm; absence of evidence." Need avoid overclaim.

Need perhaps discuss "GSE + GSI" maybe from prompt: GSE = ? GSI = ? Not defined. We can ignore or incorporate "gray-zone audit". The answer should be in XML sections only.

Need decide tone: critical scientific audit. Need include "zero betting lines" no betting. Fine.

Need ensure every section has citations. THINK_TRACE >=400 words. Need include multi-hop derivation and gray-zone audit. Let's draft.

Potential outline:

<THINK_TRACE>
- Parse source as observational pre-post cohort with 23 football athletes, 17 complete, 20 MRI, 16 age-matched non-athletes.
- Derive causal chain proposed: HAE -> neuroinflammation (miR-505) + energy/ROS metabolite tridecenedioate -> DMN fingerprint -> VR balance.
- Multi-hop: HAE metrics computed via thresholds; miR-505 positive with aHAE25G; DMN fingerprint negative with cHAE80G; tridecenedioate moderates DMN–balance and miR505–DMN; no mediation.
- Audit p-values: first moderation text vs caption inconsistency; p_perm at boundary; Q=100k; n small; Cook's outlier removal; multiple comparisons selection; cross-sectional non-athlete comparison protocol mismatch; no games; sensor only PTA; no ROS/diet; no weather; no rotational acceleration.
- Need distinguish moderation vs causation; "candidate ROS scavenger" not measured.
- Conclude evidence is hypothesis-generating, not mechanism proof.
Need >=400 words. We'll write ~650.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Quote equations and page citations.
- List variables, units, assumptions, singularity/breakdown.
- Include cHAE, aHAE, fingerprint, moderation, permutation, Sobel/Teff.
- Mention exact page quotes.
Need formal LaTeX. Cite [PAGE 7], [PAGE 8], [PAGE 14], [PAGE 15], [PAGE 18], [PAGE 19], [PAGE 20], [PAGE 38], [PAGE 39]. Need use exact quote maybe "𝐷𝑉= 𝛽0 + 𝛽1𝐼𝑉+ 𝛽2𝑀+ 𝛽3(𝐼𝑉∗𝑀) + 𝜖" [PAGE 18]. "Q=100,000" [PAGE 19-20]. "Moderation is significant if pβ3≤0.05 and pF≤0.05" [PAGE 18]. "None ... significant mediation" [PAGE 22]. Good.

<RETROCAUSAL_GENEALOGY>
- Historical lineage: Luria, VR, connectome fingerprinting, Yeo, neuroinflammation, DAI, neurovascular, miRNA TBI, ROS fatty acids.
- Multi-week traps: season pre/post only; HAE practice only; no weekly; post within one week of last game; no off-season; cumulative vs average; exposure misclassification; prior concussion history; age-matched comparison cross-sectional; different MRI protocol.
- Cite pages.
Need maybe "retrocausal" means how later findings interpreted through earlier concepts. Discuss how paper retrofits Luria triad and ROS scavenging. Fine.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression vs counter-trap vs clock. Need explain in context of athletes/researchers/clinicians.
- Habit regression: default to "no symptoms = no injury"; or "p<.05 = mechanism"; or "small n = dismiss". Counter-trap: overcorrect by ignoring any signal. Clock: season clock and sampling window; post within one week; HAE max 53 sessions; no games. Need say recursive ToM: athlete self-report may be suppressed; researcher sees asymptomatic; clinician may under-test. Need predictions/decision rules: require protocol-matched controls, game HAE, weekly sampling, direct ROS. Cite [PAGE 4] Luria; [PAGE 7] asymptomatic/no exclusion; [PAGE 34] limitations.
Need maybe "crisis habit regression" term not in source; present as reasoning audit. Fine.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical: PTA only; no rotational; thresholds; sensor in helmet; no games; no weather. Biomechanical: impact location collected but not used? [PAGE 7] says outputs included impact location; analysis uses PTA thresholds. Need not assume not used? It says "Two G-unit thresholds... For each i-th athlete HAEs quantified as cumulative number of hits exceeding threshold" only PTA. So impact location not in equations. Need quote.
- Weather: no weather variables; cannot adjudicate heat/hydration. Need formal backdoor equation and positivity. Cross-layer veto: strongest veto is scan protocol mismatch for Figure 3: athletes eyes-closed 10-min 2mm 300 volumes TR 2000 TE 35.8 flip 90 [PAGE 13]; non-athletes eyes-open 10-min 294 volumes 3.125x3.125x3.80 TR/TE 2000/26 flip 35 [PAGE 37]. This is a direct physical/acquisition-layer confound for "athletes vs non-athletes" DMN fingerprint. Need quote exact.
- Also blood metabolome confounded by diet/exercise/heat; not measured. No weather veto proof possible.
- Biomechanical: 25G/80G thresholds; cHAE80G negative with DMN; aHAE25G positive with miR505. But no rotational acceleration; no game exposure. Veto proof: if unmeasured rotational acceleration C drives both HAE and DMN, observed association not causal. Need formal. Fine.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios with predictions. Need verifiable. Could structure numbered.
1. Protocol-matched control counterfactual: acquire non-athletes with same eyes-closed, same TR/TE/voxel; if group DMN difference attenuates and p>0.05, veto claim. Prediction: Figure 3 non-limbic network differences shrink; DMN group difference CI includes zero. Need cite.
2. Full exposure counterfactual: monitor games + practices with same sensor and include rotational acceleration; if cHAE80G–DMN negative remains after adjustment, supports; if not, veto. Prediction: coefficient for cHAE80G not significant after adjustment; p_perm >0.05.
3. ROS/diet counterfactual: direct lipid peroxidation/ROS assay and diet/exercise control; if tridecenedioate moderation disappears when controlling for oxidative stress or diet, veto "candidate ROS scavenger" mechanism. Prediction: beta3 interaction p_perm >0.05; no association with ROS marker.
Need mention RLVR = "verifiable reward" maybe each scenario has measurable outcome and pre-registered decision threshold. Need no betting. Good.

Need total word count. We can write 3000 words. Need exact XML tags. No extra outside? Probably okay to output only sections. Need avoid markdown? XML sections with LaTeX. We can use paragraphs. Need not wrap in root? They specified exact XML sections. We'll output those tags in order. No betting lines.

Need ensure "verbatim quotes" exact. Use quotes carefully. Source text has unicode. We can quote small phrases. Need not quote too much. Need "PAGE N" exact markers. Use [PAGE 2], etc.

Let's draft with depth.

Need include "formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Ensure each equation has units and breakdown. For statistical probabilities dimensionless. For correlations dimensionless. For counts. For time? sessions count. For PTA G. For beta coefficients. For Sobel z dimensionless. Teff percent. Need mention "G" is acceleration in multiples of standard gravity? Paper says G-units; we can write \(G\) as source notation, dimensionless acceleration in g (1 G ≈ 9.80665 m/s²). But don't overdo. Need no fake ratios.

Need perhaps mention "aHAE" units count/session; "cHAE" count. "sessions_i" count. "PTA" G. "Th" G. "F" dimensionless correlation. "C" Pearson correlation between ROI BOLD time series, dimensionless. "BOLD" arbitrary units. "Delta" variable units native; for miRNA concentration? Paper says concentration miRNA/μL PCR reaction; but ΔmiRNA units are concentration per μL. Could mention "miRNA concentration per μL" [PAGE 9]. Metabolite log-transformed normalized AUC, dimensionless? Paper says peaks quantified area-under-curve, normalized, log-transformed [PAGE 11]. So Δ metabolite in log-normalized AUC units. VR scores scaled 0-10? Comprehensive 10-point; individual scores scaled higher better [PAGE 13]. Balance score units maybe arbitrary scaled. Need not overdetail.

Need include "Cook's distance" outlier removal is a modeling operator, not an equation? Could present:
\[
D_i = \frac{e_i^2}{p s^2}\frac{h_i}{(1-h_i)^2}
\]
But user says no toy equations? This is real Cook's distance. But source cites Cook [92] and says outliers removed based on Cook's distance. Could include or just mention. Formal maybe not necessary. But could include as operator. Need units: D dimensionless. Breakdown: if h_i=1 denominator zero; with small n removing outliers can induce overfit. Good. But maybe too many equations. We can include only source operators. Cook's distance not fully specified threshold in source; they don't state cutoff. That's gray-zone: "outliers were removed based on Cook's distance" [PAGE 15] but no threshold reported. Mention.

Need mention "multiple comparisons" – permutation-based moderation but selection of two-way at p<=0.05. The paper claims "directly address issue of multiple comparisons" [PAGE 6]. But selection bias not fully addressed. Need cite [PAGE 15] "all two-way associations with p≤0.05 were passed forward". Good.

Need mention "no mediation" [PAGE 22], so only moderation. "Moderation" means interaction; cannot infer temporal order. Need in THINK_TRACE.

Need discuss "tridecenedioate decreased pre to post" [Figure 4 caption page 36 says significantly decreased]. Source page 30 says "association between across-season decreases in tridecenedioate with inflammatory miR-505" [PAGE 30-31]. Need mention. "Tridecenedioate is a long-chain monounsaturated dicarboxylic fatty acid" [PAGE 30]. Good.

Need "miR-505 positive with aHAE25G" [PAGE 26/33]. "DMN fingerprint negatively related to cumulative number of HAEs above 80G" [PAGE 2 abstract]. Good.

Need "DMN fingerprint less similar across season in athletes relative to age-matched non-athletes" [PAGE 2]. But Figure 3 says all networks except limbic. Need cite.

Need "weather veto proof" maybe say "no weather data are present in the 64-page source; therefore any claim that weather explains or vetoes the result is not verifiable from this drive." That's important. "Physical/biomechanical/weather veto proof" maybe they want proof of veto? We can provide "adjudication": physical/biomechanical vetoes are partial; weather veto cannot be evaluated. Need maybe "veto proof" as "the only defensible cross-layer veto is acquisition-protocol non-equivalence for the non-athlete comparison." Need present.

Need "RLVR counterfactual vetoes" with predictions maybe include "If X then claim is vetoed; prediction is Y." Need ensure verifiable. Use pre-registered thresholds. Good.

Need maybe use "GSE/GSI" terms? Could mention "gray-zone audit" in THINK_TRACE. Fine.

Let's write. Need avoid accidental betting lines. None.

Need ensure XML tags exactly:
<THINK_TRACE>...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>...</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>...</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>...</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>...</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>...</RLVR_COUNTERFACTUAL_VETOES>

Need not include root. Good.

Let's craft detailed content.

THINK_TRACE ~700 words:
Start: source is not a mechanistic experiment; observational pre/post. Multi-hop derivation. Step1 HAE operator. Step2 two-way. Step3 moderation. Step4 secondary. Audit: small n; p values; inconsistency; protocol mismatch; no mediation; multiple comparisons; unmeasured confounders; sensor limitations. Mention "candidate ROS" not measured. Mention "asymptomatic" and no exclusion. "The strongest inference is a hypothesis of a multi-scale chain, not proof." Include exact quotes. Need cite.

SOURCE_OPERATORS_AND_EQUATIONS ~900 words:
List equations with units and breakdown. Need formal. Use source equations. Include "cHAE_{Th,i}" and "aHAE". "F_{n,i}". "DV". "p_perm". "Sobel". "Teff". "Cook's distance" maybe. Need mention "permutation resampling randomly selected from x1 and x2" [PAGE 19]. "Q=100,000" [PAGE 19-20]. "Moderation significant if pβ3^perm≤0.05 and pF^perm≤0.05" [PAGE 20]. "Mediation significant if p_Sobel^perm≤0.05 and Teff>50%" [PAGE 39]. But none mediation [PAGE 22]. Need exact quote "None of the three-way associations resulted in a significant mediation." [PAGE 22]. Good.

Need "breakdown regimes":
- cHAE: sessions_i=0; PTA quantization; threshold exact equality; no games.
- fingerprint: zero variance; missing ROIs; different parcellation; correlation attenuation due noise; scan protocol mismatch.
- moderation: S≤4; rank deficiency; constant M; IV*M collinear; outlier removal; non-normal errors; heteroscedasticity; p_F and p_beta conflict.
- permutation: exchangeability; Q finite; K=0; selection of variables; multiple comparisons; n=17.
- Sobel: denominator zero; Teff denominator zero; non-normal; no mediation.
Need maybe mention "permutation p-values cannot be smaller than 1/Q if using K/Q; reported p=0 possible if K=0." Good.

RETROCAUSAL_GENEALOGY ~500 words:
Lineage: Luria 1948/1962/1973; VR Teel/Slobounov; connectome fingerprint Finn/Amico; Yeo; neuroinflammation; DAI; neurovascular; miRNA; ROS. Multi-week traps. Need cite. Mention "post within one week of last game" [PAGE 7]. "HAE monitored at all contact practice sessions (max = 53; no games were monitored)" [PAGE 7]. "seventeen (17) subjects had both Pre and Post data for all five measurements" [PAGE 15]. "modest sample size" [PAGE 34]. "age-matched non-athletes ... eyes-open" [PAGE 37] vs athletes eyes-closed [PAGE 13]. Good.

RECURSIVE_THEORY_OF_MIND ~500 words:
This section might be more abstract. Explain "crisis habit regression": when uncertainty high, investigators regress to familiar p-value ritual or "no symptoms no injury" habit. "Counter-trap": overcorrecting to nihilism. "Clock": season clock and biological clock. Need model agents: athlete, researcher, clinician. "Recursive ToM" = athlete models researcher expectations? Could be too speculative. Need stay anchored. Mention "self-reports of prior history... 9 of 23" [PAGE 7]; asymptomatic; VR can detect residual abnormalities [PAGE 5]. "No participants excluded due to history of concussion" [PAGE 7]. Clinician under-testing because no overt symptoms. Need discuss "counter-trap" = concluding causality from moderation; "clock" = post sample within one week may capture acute not chronic; multi-week. Provide decision rule: triangulate with protocol-matched controls, game HAE, direct ROS. Good.

CROSS_LAYER_VETO_ADJUDICATION ~600 words:
Formal backdoor and positivity. Physical/biomechanical/weather. Need cite exact quotes:
- "Sensor outputs included peak translational acceleration (PTA; G-units) and impact location." [PAGE 7]
- "Two G-unit thresholds i.e. 25G and 80G were selected..." [PAGE 7]
- "no games were monitored" [PAGE 7]
- "Twenty (20) athletes participated in two MRI sessions consisting of a 10-min eyes-closed rs-fMRI scan..." [PAGE 13]
- "ten minutes eyes-open resting-state fMRI scan" [PAGE 37]
- "TR/TE = 2000/26 msec; flip angle = 35; 34 slices; acceleration factor = 2; Field of View = 20 cm; voxel size = 3.125 x 3.125 x 3.80 mm and 294 volumes" [PAGE 37].
- Athletes "TR = 2000 ms, flip angle = 90°, 72 contiguous 2-mm axial slices... voxel resolution = 2 mm × 2 mm × 2 mm... 300 total volumes" [PAGE 13].
Need not quote all. Use quotes.

Weather: no weather variables. "No weather data are reported anywhere in the 64-page source." Is that true? I scanned source; no weather. Good. Need "therefore cannot prove a weather veto; absence." Fine.

RLVR_COUNTERFACTUAL_VETOES ~600 words:
3 scenarios. Need include "verifiable reward" by measurable endpoints. Maybe each with "Veto condition" and "Prediction". Use exact thresholds. Need no betting. Good.

Need maybe include "RLVR" not defined; we can say "verifiable-reward counterfactual". Fine.

Potential issue: user says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." Our equations are from source or standard. Good.

Need "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." We will cite many. Need exact verbatim quotes. Ensure not misquote. Use quotation marks.

Let's write carefully.

Need maybe mention "pF^perm=0.03, pβ3^perm=0.05" and caption swapped. In THINK_TRACE: "Text says first moderation has \(p_F^{perm}=0.03, p_{\beta3}^{perm}=0.05\) [PAGE 23]; Figure 1 caption says \(p_F^{perm}=0.05, p_{\beta3}^{perm}=0.03\) [PAGE 25]." This is a gray-zone audit. Good.

Need "Abstract says all p_F^perm, p_beta3^perm ≤0.05" [PAGE 2]. Fine.

Need "two moderation results" [PAGE 23]. "None mediation" [PAGE 22]. Good.

Need "Figure 2 positive miR-505 and aHAE25G" [PAGE 26]. Good.

Need "DMN fingerprint negative cHAE80G" [PAGE 26]. Good.

Need "tridecenedioate has a double bond making it a candidate for ROS scavenging" [PAGE 2] and "hypothesized to act as ROS scavengers" [PAGE 30]. Good.

Need "miR-505 was upregulated in both mild to moderate and severe TBI" [PAGE 31]. Good.

Need "tridecenedioate significantly decreased from pre- to post-season" [PAGE 36]. Good.

Need "Luria" [PAGE 4]. Good.

Need "VR can detect residual abnormalities in absence of self-reported symptoms" [PAGE 5]. Good.

Need "age-matched non-athletes exhibited significantly higher network fingerprint values ... all networks except Limbic" [PAGE 28]. Good.

Need "Twenty-three (23) male collegiate varsity student football athletes" [PAGE 7]. Good.

Need "seventeen (17) subjects had both Pre and Post data for all five measurements" [PAGE 15]. Good.

Need "968 metabolites... 161 significant... 40 selected" [PAGE 11-12]. Good.

Need "40 metabolites used in all subsequent analyses" [PAGE 12]. Good.

Need "miRNA concentration per μL of PCR reaction" [PAGE 9]. Maybe include in units. Good.

Need "Peaks quantified using area-under-curve... normalized... log-transformed" [PAGE 11]. Good.

Need "network fingerprint: correlating submatrix from Pre and Post" [PAGE 14]. Good.

Need "FC matrices not thresholded or binarized" [PAGE 14]. Good.

Need "248 ROIs" [PAGE 14]. Good.

Need "Cook's distance outliers removed" [PAGE 15]. They don't give threshold. Mention.

Need "permutation data permutation: values randomly selected from x1,i and x2,i to assign to x1',i and x2',i" [PAGE 19]. This is paired permutation. Good.

Need "Q=100,000" [PAGE 19-20]. Good.

Need "p_perm = K/Q" [PAGE 19]. Good.

Need "Sobel z-score" [PAGE 38]. Good.

Need "Teff" [PAGE 38]. Good.

Need "Teff >50%" [PAGE 39]. Good.

Need "all three-way associations no mediation" [PAGE 22]. Good.

Need "No participants excluded due to history of concussion" [PAGE 7]. Good.

Need "self-reports... 9 of 23" [PAGE 7]. Good.

Need "no diagnosed concussion in 9 months preceding preseason" [PAGE 7]. Good.

Need "blood samples taken prior to contact practices and within one week of last game" [PAGE 7]. Good.

Need "max 53 contact practice sessions" [PAGE 7]. Good.

Need "no games monitored" [PAGE 7]. Good.

Need "twenty (20) athletes participated in two MRI sessions" [PAGE 13]. Good.

Need "age-matched non-athletes sixteen" [PAGE 37]. Good.

Need "nine female and seven male" [PAGE 37]. This is a sex mismatch: athletes all male [PAGE 7], non-athletes 9 female/7 male. Huge confound. Need mention in cross-layer veto and genealogy. Very important. Also age 22.8 vs 21. Good. Need cite. This strengthens protocol/sex confound for Figure 3. Need mention.

Need "non-athletes eyes-open" vs athletes eyes-closed. Good.

Need "different scanner? athletes likely 3T? Page 13 doesn't specify scanner but parameters TE=35.8, TR=2000, 72 slices 2mm; non-athletes 3T GE Signa HDx. Could be same? Not sure. But protocol mismatch undeniable. Need mention.

Need "HAE sensor BodiTrak from Head Health Network" [PAGE 7]. Good.

Need "impact location" collected but not used in equations. [PAGE 7]. Good.

Need "peak translational acceleration only" [PAGE 7]. Good.

Need "rotational acceleration not measured" source doesn't mention; we can say "not reported" not "not measured"? It says outputs included PTA and impact location; no rotational acceleration. So "not reported/used". Good.

Need "weather" no data. Good.

Need "diet/exercise/sleep" no data. Good.

Need "exogenous compounds related to consumption" [PAGE 6] they selected xenobiotics. But no diet control. Good.

Need "tridecenedioate candidate ROS scavenger" not direct ROS. Good.

Need "miR-505 tumor suppressor etc." lineage. Good.

Need "neuroinflammation model focus" [PAGE 3]. Good.

Need "DAI model" [PAGE 3]. Good.

Need "neurovascular decoupling" [PAGE 3]. Good.

Need "two of three models overlap" [PAGE 3]. Good.

Need "intermediate phenotype imaging genetics" [PAGE 6]. Good.

Need "omics can be clinically manipulated" [PAGE 6]. Good.

Need "permutation-based mediation/moderation may provide methodology for complex multi-scale biological data within humans alone" [PAGE 2]. Good.

Need "current controversies about animal models" [PAGE 35]. Not necessary.

Need "multi-week traps" perhaps mention "post sample within one week of last game" means acute recovery not chronic; "pre before any contact practices" means no within-season trajectory; "HAE max 53 sessions" but no games; "no off-season or follow-up" so cannot distinguish persistent vs transient. Good.

Need "retrocausal genealogy" maybe title implies causal arrow reversed: later behavioral deficits attributed to earlier HAE. Need discuss "retrocausal" as retrospective inference from post-season state to cumulative exposure, but no time-resolved data. Good.

Need "Recursive theory of mind" maybe use "crisis habit regression" as under pressure, humans regress to prior habits. In scientific crisis: default to p-values; in clinical: default to symptom absence; in athlete: default to hiding symptoms to play. "Counter-trap" = overcorrecting and dismissing all subconcussive risk. "Clock" = season schedule and biological recovery. Need tie to source: "HAEs may produce no overt symptoms" [PAGE 2], "VR can detect residual abnormalities in absence of self-reported symptoms" [PAGE 5]. Good.

Need maybe mention "theory of mind" recursion: athlete knows clinician uses symptom reports, so may mask; researcher knows athlete may mask, so uses VR/omics; statistical model doesn't know. Fine. Need not overdo.

Need ensure no "odds" etc. Fine.

Let's produce final with sections. We need enough depth but not too long. Aim ~3300 words. We'll write clearly.

Need be cautious with XML: LaTeX contains `<`? In equations, maybe use `\le` not `<`. Avoid raw `<` in XML? XML tags only; text with `<` could be problematic. Use `\le` and `>`? `>` is okay in text? XML text can contain >, but `<` not. Use `\le`, `\ge`, `\lt`? Better use LaTeX `\le` and `\ge` to avoid `<`. Also in text "p≤0.05" is okay unicode. Avoid ampersand? Use `\&`? In XML, `&` must be escaped as `&amp;` if used. Avoid ampersands. Use "and". Need check quotes. Fine.

Need if using `\(x\)` okay. No `<`.

Need maybe use `\operatorname{corr}`. Fine.

Need no `<` characters in text. Use "less than or equal" or `\le`. In equations, `\le` okay. Avoid `\lt`. Good.

Need not use `>`? XML allows >. But we can use `\ge`. Fine.

Need output only sections.

Let's draft.

Need include in THINK_TRACE maybe "Step 0". Good.

Let's write final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is an observational, pre-post, multi-scale cohort study, not a mechanistic experiment. The paper’s proposed chain is: repetitive head acceleration events (HAEs) produce neuroinflammatory and metabolic perturbations, which in turn relate to resting-state functional connectivity, especially default mode network (DMN) fingerprinting, which then relates to virtual-reality balance performance. The key multi-hop derivation is therefore not “HAE causes injury” but a conditional statistical triangulation: HAEs are associated with \(\Delta\)miR-505 and with DMN fingerprint; \(\Delta\)tridecenedioate moderates the DMN-fingerprint-to-balance relation; and \(\Delta\)tridecenedioate also moderates the miR-505-to-DMN relation. The paper explicitly reports that mediation failed: “None of the three-way associations resulted in a significant mediation” [PAGE 22]. Thus the evidential weight rests on two moderation results, not on a demonstrated causal pathway.

The first gray-zone issue is sample structure. There are “Twenty-three (23) male collegiate varsity student football athletes” [PAGE 7], but only “seventeen (17) subjects had both Pre and Post data for all five measurements” [PAGE 15]. The non-athlete comparison uses “sixteen undergraduate and graduate students ... nine female and seven male” [PAGE 37], while the athletes are all male [PAGE 7]. The athlete MRI protocol is described as a “10-min eyes-closed rs-fMRI scan” with “TR = 2000 ms, flip angle = 90°, 72 contiguous 2-mm axial slices” and “300 total volumes” [PAGE 13]. The non-athlete protocol is “ten minutes eyes-open resting-state fMRI” with “TR/TE = 2000/26 msec; flip angle = 35; 34 slices; acceleration factor = 2; Field of View = 20 cm; voxel size = 3.125 x 3.125 x 3.80 mm and 294 volumes” [PAGE 37]. The group comparison of DMN fingerprint is therefore confounded by sex composition, eyes-open versus eyes-closed state, slice thickness, voxel size, and flip angle. A physical acquisition-layer veto applies to any strong claim that the athlete-versus-non-athlete DMN difference is caused by HAEs.

The second gray-zone issue is exposure misclassification. HAEs were monitored at “all contact practice sessions (max = 53; no games were monitored)” [PAGE 7]. The sensor outputs included “peak translational acceleration (PTA; G-units) and impact location” [PAGE 7], but the implemented HAE metrics use only PTA thresholds of 25G and 80G [PAGE 7-8]. Rotational acceleration, impact location, and game exposure are not incorporated into the reported equations. The paper acknowledges that “HAE metrics were only allowed to be collected at practices and not during competitive play” [PAGE 34]. This is a biomechanical and exposure-layer limitation: the measured cumulative dose is incomplete, and the unmeasured game dose may correlate with practice dose, athlete position, or recovery time.

The third gray-zone issue is statistical. The moderation equation is stated as “𝐷𝑉= 𝛽0 + 𝛽1𝐼𝑉+ 𝛽2𝑀+ 𝛽3(𝐼𝑉∗𝑀) + 𝜖” [PAGE 18], with significance requiring both \(p_{\beta3}\le0.05\) and \(p_F\le0.05\) [PAGE 18]. The permutation procedure uses \(Q=100,000\) [PAGE 19-20]. But two-way screening at \(p\le0.05\) passes many variables forward [PAGE 15], and Cook’s-distance outlier removal is not fully specified with a threshold. With 17 complete cases, removing outliers can materially change interaction estimates. The text reports the first moderation as \(p_F^{perm}=0.03, p_{\beta3}^{perm}=0.05\) [PAGE 23], while the Figure 1 caption reports \(p_F^{perm}=0.05, p_{\beta3}^{perm}=0.03\) [PAGE 25]. That inconsistency does not invalidate the result, but it lowers audit confidence. The second moderation is \(p_F^{perm}=0.02, p_{\beta3}^{perm}=0.02\) [PAGE 24]. The abstract says all permutation criteria were \(\le0.05\) [PAGE 2]. The correct inference is “hypothesis-generating interaction,” not “mechanism proven.”

The fourth gray-zone issue is biochemical interpretation. The paper says tridecenedioate “has a double bond making it a candidate for ROS scavenging” [PAGE 2] and that monounsaturated compounds are “hypothesized to act as reactive oxygen species (ROS) scavengers” [PAGE 30]. That is plausible but indirect; no ROS assay, lipid-peroxidation measure, dietary control, or exercise-load covariate is reported. The source also says tridecenedioate “significantly decreased from pre- to post-season” [PAGE 36]. A decrease in a putative scavenger is consistent with consumption by oxidative stress, but it is also consistent with diet, training, or analytic batch effects. The paper itself flags a “modest sample size” [PAGE 34].

The strongest defensible conclusion is a multi-scale association network: HAE burden relates to miR-505 and DMN fingerprint; tridecenedioate moderates two relations involving DMN fingerprint, miR-505, and VR balance. The weakest defensible conclusion is that this proves chronic neuroinflammation or a causal HAE-to-brain-to-behavior pathway. The source supports the former and only hypothesizes the latter.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The HAE operator is defined on [PAGE 7-8] as
\[
cHAE_{Th,i}=\sum_{k=1}^{N_i}u(PTA_{k,i}-Th),\qquad
u(x)=\begin{cases}1,&x>0\\0,&x\le0\end{cases}
\]
where \(PTA_{k,i}\) is peak translational acceleration for impact \(k\) of athlete \(i\), in source G-units; \(Th\) is the threshold in G-units, with \(Th\in\{25G,80G\}\) [PAGE 7]; \(N_i\) is the number of monitored impacts; and \(cHAE_{Th,i}\) is a dimensionless count. The average is
\[
aHAE_{Th,i}=\frac{cHAE_{Th,i}}{sessions_i},
\]
with units count per session, where \(sessions_i\) is the number of monitored contact-practice sessions for athlete \(i\). Source assumptions: impacts are monitored in contact practices, not games; “no games were monitored” [PAGE 7]; sensor output includes PTA and impact location, but the equations use PTA thresholds only [PAGE 7-8]. Breakdown regimes: \(sessions_i=0\) makes \(aHAE\) undefined; exact equality \(PTA_{k,i}=Th\) contributes zero because the indicator is \(x>0\); sensor quantization and helmet mounting create exposure misclassification; unmonitored game impacts are a structural missingness mechanism.

The network fingerprint operator is described on [PAGE 14-15]: a functional connectome matrix is computed “through correlation of the mean time series from each of the 248 ROIs” [PAGE 14], and the fingerprint is “calculated by correlating the submatrix corresponding to each of the networks from Pre and Post sessions” [PAGE 14]. Formally, for network \(n\) and subject \(i\),
\[
F_{n,i}=\operatorname{corr}\left(\operatorname{vec}(C_{n,i}^{Pre}),\operatorname{vec}(C_{n,i}^{Post})\right),
\]
where \(C_{n,i}^{t}\) is the submatrix of Pearson functional-connectivity coefficients for network \(n\) at time \(t\), dimensionless and bounded in \([-1,1]\); \(F_{n,i}\) is dimensionless and bounded in \([-1,1]\). The source says FC matrices “were not thresholded or binarized” [PAGE 14]. Breakdown regimes: the correlation is undefined if either vector has zero variance; if the submatrix has constant or near-constant entries, the denominator approaches zero; motion, censoring, and different scan protocols alter the correlation; the non-athlete comparison uses a different eyes-open protocol and different voxel geometry [PAGE 37], so \(F_{n,i}\) is not protocol-invariant across groups.

The moderation operator is given on [PAGE 18] as
\[
DV_i=\beta_0+\beta_1 IV_i+\beta_2 M_i+\beta_3(IV_i M_i)+\epsilon_i,
\]
with \(DV_i\) in native units of the dependent variable, \(IV_i\) in native units of the independent variable, \(M_i\) in native units of the moderator, \(\beta_1\) in DV units per IV unit, \(\beta_2\) in DV units per M unit, \(\beta_3\) in DV units per (IV unit times M unit), and \(\epsilon_i\) as residual error in DV units. The source states: “Moderation is significant if \(p_{\beta3}\le0.05\) and \(p_F\le0.05\)” [PAGE 18]. Breakdown regimes: if \(M_i\) is constant, \(IV_iM_i\) is collinear with \(IV_i\); if \(IV_i\) and \(M_i\) are highly collinear, the interaction design matrix is ill-conditioned; if the sample size is less than or equal to the number of estimated parameters, the fit is rank-deficient; Cook’s-distance outlier removal [PAGE 15] changes both leverage and residual variance, so the interaction can be unstable under small \(n\). The source does not report a Cook’s-distance cutoff.

The permutation operator is described on [PAGE 19-20]. For the moderation statistic \(t_0\),
\[
p_{\beta3}^{perm}=\frac{K_1}{Q}
=\frac{1}{Q}\sum_{q=1}^{Q}\mathbf{1}\left\{|t_q'|\ge |t_0|\right\},
\]
and analogously for \(F_0\) with \(K_2\). Here \(p_{\beta3}^{perm}\) and \(p_F^{perm}\) are dimensionless probabilities; \(Q=100,000\) [PAGE 19-20]; \(K_1,K_2\) are integer counts. The permutation step “values were randomly selected from \(x_{1,i}\) and \(x_{2,i}\) to assign to \(x_{1,i}'\) and \(x_{2,i}'\)” [PAGE 19], then \(\Delta x_i'=x_{2,i}'-x_{1,i}'\). Breakdown regimes: the permutation null assumes exchangeability of pre and post labels within subject; if variance differs by time or if the sharp null is false in a variance-changing way, the permutation distribution is not exact; with \(K=0\), \(K/Q=0\), and the Monte Carlo resolution is \(1/Q=10^{-5}\); using \(K/Q\) without the \(+1\) correction can understate small \(p\)-values; and permutation after \(p\le0.05\) two-way screening [PAGE 15] does not automatically correct selection bias from the screening step.

The mediation operator is in the supplement [PAGE 38]. The Sobel statistic is
\[
z=\frac{\beta_{1,1C}-\beta_{1,2C}}
{\sqrt{(\beta_{2,2C})^2(\epsilon_{1A})^2+(\beta_{1A})^2(\epsilon_{2C})^2}},
\]
where the source uses \(\epsilon\) notation for error/standard-error terms; \(z\) is dimensionless. The mediation effect percentage is
\[
T_{eff}=100\cdot
\frac{\beta_{1A}\beta_{2,2C}}
{\beta_{1A}\beta_{2,2C}+\left[\beta_{1,1C}-\beta_{1A}\beta_{2,2C}\right]},
\]
in percent. The source requires “\(p_{Sobel}^{perm}\le0.05\) and \(T_{eff}>50\%\)” for significance [PAGE 39]. Breakdown regimes: the Sobel denominator is zero if both standard-error products vanish; \(T_{eff}\) is undefined or unstable if the total-effect denominator is zero; non-normal residuals and small \(n\) degrade the \(z\)-approximation. The paper reports that no mediation survived: “None of the three-way associations resulted in a significant mediation” [PAGE 22].

The two reported moderation outcomes are: first, \(\Delta\)VR Balance as DV with DMN fingerprint as IV and \(\Delta\)tridecenedioate as moderator, text \(p_F^{perm}=0.03, p_{\beta3}^{perm}=0.05\) [PAGE 23]; second, DMN fingerprint as DV with \(\Delta\)miR-505 as IV and \(\Delta\)tridecenedioate as moderator, \(p_F^{perm}=0.02, p_{\beta3}^{perm}=0.02\) [PAGE 24]. The Figure 1 caption swaps the first pair as \(p_F^{perm}=0.05, p_{\beta3}^{perm}=0.03\) [PAGE 25], which is an internal reporting inconsistency. The secondary HAE associations are positive \(\Delta\)miR-505 with \(aHAE25G\) and negative DMN fingerprint with \(cHAE80G\) [PAGE 26]. These are association operators, not dose-response causal operators.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicitly multi-generational. The behavioral endpoint descends from Alexander Luria’s triad of spatial orientation, visual-spatial processing, and postural control [PAGE 4], operationalized through a validated VR system that measures “Spatial Memory,” “Reaction Time,” “Balance,” and a “Comprehensive” score [PAGE 4-5]. The paper cites Luria’s 1948, 1962, and 1973 works [PAGE 52] and states that “VR can detect residual abnormalities in the absence of self-reported symptoms by HAE recipients” [PAGE 5]. The imaging endpoint descends from resting-state fMRI and functional-connectome fingerprinting: the paper cites Biswal, Beckmann, Fox and Raichle, Greicius, Shehzad, Finn, Amico, and Bari [PAGE 53-54], and defines the fingerprint as “the similarity between repeat visits of the same participant” [PAGE 15]. The network taxonomy is Yeo’s seven cortical networks plus subcortical regions [PAGE 14], with the DMN as the central network in both moderation results [PAGE 32].

The molecular lineage is the neuroinflammation model, the diffuse axonal injury model, and the neurovascular decoupling model [PAGE 3]. The paper notes that “vascular function is a fundamental part of the initiation phase of inflammatory response” [PAGE 3], so two models overlap. The miRNA lineage comes from prior TBI and football-season studies: miR-505, miR-30d, and miR-92a were previously associated with emergency-room TBI and clinical CT abnormalities [PAGE 3], and prior work found that miR-30d and miR-92a mediated more than 70 percent of the imaging-to-VR relationship [PAGE 4]. The metabolomic lineage comes from MRS and metabolomic studies of mTBI [PAGE 4] and from the companion Vike et al. dataset [PAGE 35]. Tridecenedioate is placed in the fatty-acid/ROS-scavenging lineage: long-chain polyunsaturated fatty acids have anti-inflammatory and superoxide-scavenging properties, and monounsaturated fatty acids have neuroprotective effects in animal models [PAGE 30]. The paper’s retrocausal move is to interpret a post-season decrease in a putative ROS scavenger as evidence of prior oxidative stress, even though ROS itself was not measured.

The multi-week traps are substantial. Blood was taken “prior to any contact practices (Pre) and within one week of the last game (Post)” [PAGE 7], so the design has only two time points and cannot resolve weekly trajectories, acute recovery, or chronic persistence. HAEs were monitored at “all contact practice sessions (max = 53; no games were monitored)” [PAGE 7], so the exposure window is incomplete and the “cumulative” dose is a practice-only cumulative dose. The paper reports “seventeen (17) subjects had both Pre and Post data for all five measurements” [PAGE 15], and calls the “modest sample size” the primary limitation [PAGE 34]. The non-athlete comparison is cross-sectional and uses a different scan state and geometry [PAGE 37]. The “age-matched” controls are age-matched but not sex-matched or protocol-matched: athletes are all male [PAGE 7], controls include “nine female and seven male” [PAGE 37]. Thus the group difference in network fingerprint [PAGE 28] is vulnerable to a multi-week trap: the post-season state may reflect acute recovery, practice load, scan-state differences, or sex composition rather than cumulative HAE burden. The paper’s own conclusion that “limiting HAE exposure over the season could potentially mitigate the alterations” [PAGE 33] is therefore a hypothesis, not a demonstrated intervention effect.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
In a crisis-reasoning frame, three habits compete. “Crisis habit regression” is the reversion to the most familiar decision rule under uncertainty: for a clinician, “no overt symptoms means no injury”; for an analyst, “a \(p\)-value below 0.05 means mechanism”; for an athlete, “I feel fine, so I should keep playing.” The source directly supports the first and third: HAEs “may produce no overt symptoms” [PAGE 2], and VR can detect “residual abnormalities in the absence of self-reported symptoms” [PAGE 5]. The study also reports that “No participants were excluded due to history of concussion” [PAGE 7] and that 9 of 23 athletes reported prior concussions [PAGE 7]. A symptom-first habit would therefore under-detect exactly the population the paper is trying to study.

The “counter-trap” is the opposite overcorrection: because the sample is small, the exposure is practice-only, and the non-athlete protocol differs, one might dismiss every signal as noise. That is also a habit, not a calibrated inference. The correct counter-trap is not nihilism; it is to demand the specific counterfactuals that would separate signal from protocol and exposure artifacts. The paper supplies some of those demands itself: it calls for comparison to “age-matched, non-contact sports athletes” and for HAE collection “over more impact events in future studies” [PAGE 34]. The recursive theory-of-mind point is that each observer is modeling the other’s incentives: the athlete may minimize symptoms to remain eligible; the clinician may rely on self-report because overt signs are absent; the researcher may over-trust permutation \(p\)-values because the method is rigorous. A defensible model must represent all three.

The “clock” is both biological and institutional. The biological clock is the pre-to-post season interval: blood and imaging are sampled before contact practices and within one week of the last game [PAGE 7], so the post measurement may capture acute post-season recovery rather than steady-state chronic change. The institutional clock is the practice schedule: HAEs are counted over up to 53 contact practices, but games are unmonitored [PAGE 7]. The paper’s own summary says the combination of repetitive long-term exposure, chronic inflammatory miRNA increases, and acute resting-state changes “could result in behavioral disturbances later in life” [PAGE 36]. That is a multi-year clock, but the data are one season. The recursive failure mode is to let the later-life hypothesis borrow credibility from a one-season pre-post correlation without a follow-up clock.

A calibrated counter-habit is therefore: treat the moderation results as a prioritized hypothesis, not a verdict; require protocol-matched controls before interpreting the athlete-versus-non-athlete DMN difference; require game-inclusive and rotational-impact exposure before interpreting the HAE-to-DMN relation; and require direct oxidative-stress and diet/exercise measures before interpreting tridecenedioate as an ROS-scavenging mechanism. Those requirements are consistent with the paper’s own limitations [PAGE 34] and with its stated aim of generating mechanistic hypotheses from human multi-scale data [PAGE 35].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The formal identification issue is a backdoor problem. If \(X\) is HAE exposure, \(Y\) is DMN fingerprint or VR balance, and \(C\) is an unmeasured confounder, the causal effect is identified only if
\[
P(Y\mid do(X=x))=\sum_c P(Y\mid X=x,C=c)P(C=c)
\]
and the positivity condition \(P(C=c\mid X=x)>0\) holds for all relevant \(x,c\). Here \(P\) denotes probability, dimensionless. If \(C\) is unmeasured and unbalanced, the observed association is not a causal effect. The source leaves several plausible \(C\) variables unmeasured or incompletely measured: game exposure, rotational acceleration, impact location in the analysis, sex, scan state, diet, hydration, sleep, and weather. Therefore a strong causal veto or a strong causal confirmation is not available from this source alone.

The physical and biomechanical layer partially vetoes over-interpretation. The HAE sensor reports “peak translational acceleration (PTA; G-units) and impact location” [PAGE 7], but the reported equations use only PTA thresholds of 25G and 80G [PAGE 7-8]. Rotational acceleration is not reported in the HAE equations, even though rotational kinematics are a plausible biomechanical mediator of axonal and vascular injury. The paper also says “no games were monitored” [PAGE 7], so the measured cumulative dose is a practice-only dose. A biomechanical veto applies to any claim that the calculated \(cHAE80G\) is the total season dose. It does not apply to the narrower claim that monitored practice PTA burden is associated with DMN fingerprint.

The acquisition-layer veto is strongest for the non-athlete comparison. Athletes underwent a “10-min eyes-closed rs-fMRI scan” with “TR = 2000 ms, flip angle = 90°, 72 contiguous 2-mm axial slices” and “300 total volumes” [PAGE 13]. Non-athletes underwent “ten minutes eyes-open resting-state fMRI” with “TR/TE = 2000/26 msec; flip angle = 35; 34 slices; acceleration factor = 2; Field of View = 20 cm; voxel size = 3.125 x 3.125 x 3.80 mm and 294 volumes” [PAGE 37]. The source then reports that “Age-matched non-athletes exhibited significantly higher network fingerprint values ... for all networks except the Limbic system” [PAGE 28]. Because the groups differ in eyes-open versus eyes-closed state, voxel geometry, slice count, flip angle, and sex composition, the group difference cannot be cleanly attributed to HAE exposure. This is a protocol-level confound, not a minor nuisance.

The weather layer cannot be adjudicated from the source. No weather, temperature, humidity, hydration, or heat-index variable appears in the 64-page text. Weather could plausibly affect hydration, cardiovascular strain, balance, and metabolomic profiles, but the source provides no data with which to test or control that pathway. Therefore a “weather veto” is not proven by this source; the correct statement is that weather is an unmeasured cross-layer candidate confounder and must be included in any future adjudication. The same holds for diet and exercise: the paper selected “exogenous compounds related to consumption” [PAGE 6], which makes dietary confounding salient, but no dietary intake measure is reported.

The cross-layer adjudication is therefore asymmetric. The physical/biomechanical layer partially vetoes total-dose and rotational-injury claims; the acquisition layer strongly vetoes causal interpretation of the athlete-versus-non-athlete fingerprint comparison; the weather layer is unadjudicable because it is absent. The paper’s own language is appropriately cautious in places: it calls tridecenedioate “a candidate for ROS scavenging” [PAGE 2] and says the findings “suggest” chronic neuroinflammation [PAGE 2], rather than proving it. The correct audit conclusion is that the multi-scale association network is real within the measured data, but the cross-layer causal chain is underdetermined.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Protocol-matched control counterfactual. Reacquire the age-matched non-athlete group with the same eyes-closed state, same TR/TE, same flip angle, same slice thickness, same voxel size, same volume count, and sex-balanced composition as the athlete group. Verifiable endpoint: the group difference in DMN fingerprint and the other non-limbic network fingerprints from Figure 3 [PAGE 28]. Veto condition: if the DMN group difference attenuates to a confidence interval that includes zero and the Bonferroni-corrected two-sample test is non-significant, then the claim that athletes have lower DMN fingerprint because of HAE exposure is vetoed. Prediction under the protocol-confound hypothesis: the largest group differences will shrink substantially after matching, and the DMN effect will not survive Bonferroni correction. Prediction under the HAE hypothesis: the DMN difference will remain negative and significant after protocol and sex matching.

2. Full-exposure and rotational-kinematics counterfactual. Monitor both practices and games with the same sensor system, retain impact location, and add rotational acceleration or a validated rotational proxy. Verifiable endpoint: the coefficient relating \(cHAE80G\) to DMN fingerprint and the coefficient relating \(aHAE25G\) to \(\Delta\)miR-505, estimated after adjustment for practice sessions, game sessions, sensor model, and rotational dose. Veto condition: if the \(cHAE80G\)-to-DMN coefficient becomes non-significant and its confidence interval includes zero after full-exposure and rotational adjustment, then the claim that cumulative high-magnitude HAE burden drives DMN fingerprint change is vetoed. Prediction under the exposure-misclassification hypothesis: the practice-only \(cHAE80G\) association will weaken once game exposure is included. Prediction under the dose-response hypothesis: the negative \(cHAE80G\)-to-DMN association will persist and the positive \(aHAE25G\)-to-miR-505 association will persist after adjustment.

3. Direct oxidative-stress and lifestyle counterfactual. Add a direct ROS or lipid-peroxidation assay, a validated dietary intake measure, and training-load or hydration covariates, then retest the tridecenedioate moderation equations. Verifiable endpoint: the interaction term \(\beta_3\) in \(DV=\beta_0+\beta_1IV+\beta_2M+\beta_3(IV\cdot M)+\epsilon\) [PAGE 18] for the two reported moderation models: \(\Delta\)VR Balance with DMN fingerprint and \(\Delta\)tridecenedioate, and DMN fingerprint with \(\Delta\)miR-505 and \(\Delta\)tridecenedioate [PAGE 23-24]. Veto condition: if both \(\beta_3\) interaction terms become non-significant with \(p_{\beta3}^{perm}>0.05\) after controlling for the direct oxidative-stress marker, diet, and training load, then the “candidate ROS scavenger” mechanism is vetoed. Prediction under the ROS-consumption hypothesis: tridecenedioate will be inversely related to the direct oxidative-stress marker and the moderation will survive adjustment. Prediction under the lifestyle-confound hypothesis: