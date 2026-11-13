---
source: "BarocasHardtNarayanan-2023-FairnessAndMachineLearning.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-d-models"
pages: 294
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4214
---

<NATIVE_REASONING>
The user wants me to process the provided source text (Barocas, Hardt, Narayanan - Fairness and Machine Learning, 2023) and produce a response following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is pages 1-155 of 294 (provided in the prompt). I need to cite exact [PAGE N] markers.

The user didn't ask a specific question beyond "DRIVE SOURCE" and providing the text. Since there's no explicit question, I should treat this as an analysis/synthesis task of the source material, structured according to the required XML sections. I need to make sure the content is grounded in the provided pages.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. I need to discuss the formal tension between independence, separation, sufficiency from Chapter 3, the normative views from Chapter 4, causal models from Chapter 5, and legal doctrines from Chapter 6. Gray zones: observational criteria vs causal mechanisms, legitimate vs illegitimate automation, target-goal mismatch. Need >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the text:
- Independence: A ⊥ R, demographic parity P{Ŷ=1|A=a} = P{Ŷ=1|A=b}
- Separation: R ⊥ A | Y, equivalent to TPR and FPR parity
- Sufficiency: Y ⊥ A | R, calibration by group P{Y=1|R=r, A=a}=r
- Optimal predictor: f(x) = 1 if P{Y=1|X=x} > 1/2 else 0
- ROC curve, AUC
- Average treatment effect: E[Y|do(X=1)] - E[Y|do(X=0)]
- Adjustment formula: P{Y=y|do(X:=x)} = Σ_z P{Y=y|X=x, PA=z}P{PA=z}
- Counterfactual: Y_{X:=x}(E) via abduction, action, prediction
- Natural direct/indirect effects
- Propositions 2-5 about mutual exclusivity.
Need page citations [PAGE N]. Units: probabilities dimensionless, bits for mutual information, etc. Breakdown regimes: binary target assumption for Prop 3, non-degenerate positive probability for Prop 4, etc.

<RETROCAUSAL_GENEALOGy>: Historical lineage: Halley's life table 1693 [PAGE 44], Quetelet social physics/average man [PAGE 44], Galton eugenics [PAGE 44], Cleary criterion 1960s/70s psychometrics [PAGE 73], Darlington 1971 [PAGE 73], FAT/ML 2014 [PAGE 21], ProPublica COMPAS [PAGE 73], Bostock v. Clayton County 2020 [PAGE 129], SFFA v. Harvard [PAGE 130], Griggs v. Duke Power [PAGE 119], UC Berkeley 1973 Simpson's paradox [PAGE 105]. Multi-week traps: feedback loops in predictive policing (Lum & Isaac 2016) [PAGE 14], distribution shift over weeks/months [PAGE 38], temporal drift [PAGE 23], ontological instability/Hacking looping effect [PAGE 134].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is abstract but I need to map it to the source. Crisis habit regression: institutions reverting to biased historical patterns when under stress (e.g., predictive policing feedback loops, Amazon delivery disparities). Counter-trap: using statistical parity to paper over legitimacy problems [PAGE 23], or fairness-washing. Clock: temporal dynamics of feedback loops, distribution shift, drift [PAGE 23, 38]. Need to discuss recursive theory of mind: decision makers modeling subjects who model the decision maker back (e.g., gaming, teaching to the test [PAGE 42], strategic behavior).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This seems oddly specific but I must interpret it through the source. Physical layer: measurement bias in cameras/dynamic range [PAGE 9], BMI scaling issues for taller people [PAGE 49], weather confounding traffic example [PAGE 107]. Biomechanical: recidivism prediction, spur-of-the-moment crimes [PAGE 39], driving experience vs age [PAGE 104]. Weather: not explicitly in source except traffic example [PAGE 104-107]. I need to be careful not to invent fake ratios. I can discuss veto conditions: when causal graph is misspecified (mediator vs confounder, religion example [PAGE 132]), when unobserved confounding exists [PAGE 116], when ontological instability of race/gender makes causal nodes invalid [PAGE 133-135].

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable counterfactual vetoes. I'll create 3 scenarios grounded in the text:
1. UC Berkeley admissions / Simpson's paradox: veto if department choice is a collider confounded by residence [PAGE 118-119]. Prediction: conditioning on department without adjusting for residence opens backdoor path A→Z←R→Y, biasing direct effect estimate.
2. Harvard admissions / attribute flipping: veto counterfactual fairness if race has descendant nodes (e.g., interview performance influenced by race) [PAGE 130-131]. Prediction: naive race-flipping overestimates disparity because it ignores mediation.
3. Predictive policing / feedback loop: veto model update if new arrests are downstream of prior predictions [PAGE 14-15]. Prediction: error rate disparity compounds over time (Lum & Isaac simulation) [PAGE 14].

Need to ensure total word count >= 1000 words across sections. Each section should be substantial. No betting lines. No toy equations like Force/Fatigue. Use real equations from the text.

Let me draft carefully, citing pages.

Word count check: I'll aim for ~2000+ words total to be safe.

Important: The prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include verbatim quotes where relevant.

Let's write.

Structure:
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

I need to be careful with LaTeX formatting inside XML. Use standard LaTeX.

Let's start writing.

THINK_TRACE: Discuss the triad of criteria and their mutual exclusivity. Gray zone: the book admits none of the criteria is sufficient [PAGE 6]. The jump from observational to causal requires structural assumptions that are often ontologically unstable [PAGE 133-135]. The target-goal mismatch [PAGE 34-35] means even a perfectly calibrated model can serve an illegitimate goal (e.g., healthcare cost reduction vs health benefit [PAGE 34]). Feedback loops violate i.i.d. assumption [PAGE 23]. I'll write >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page citations.
- Classification setup [PAGE 46]: (X,Y) jointly distributed, classifier bY = f(X).
- Accuracy/error [PAGE 46]: P{Y=bY}, P{Y≠bY}.
- Optimal predictor [PAGE 47-48]: f(x) = 1{P{Y=1|X=x} > 1/2}.
- Risk score [PAGE 48]: r(x) = P{Y=1|X=x} = E[Y|X=x]. Minimizes squared loss E[(Y-r(X))²].
- Independence [PAGE 55]: A ⊥ R. Demographic parity [PAGE 55]: P{bY=1|A=a} = P{bY=1|A=b}. Mutual information I(A;R)=0 [PAGE 55].
- Separation [PAGE 56]: R ⊥ A | Y. Binary: TPR parity and FPR parity [PAGE 56-57].
- Sufficiency [PAGE 60]: Y ⊥ A | R. Binary: P{Y=1|R=r, A=a} = P{Y=1|R=r, A=b} [PAGE 60]. Calibration by group [PAGE 60]: P{Y=1|R=r, A=a}=r. Fact 3: optimal score calibrated by group [PAGE 62].
- Impossibility props [PAGE 64-66]: Prop 2 (indep vs suff), Prop 3 (indep vs sep, binary Y), Prop 4 (sep vs suff, positive prob), Prop 5 (sep vs suff, binary classifier nonzero FPR).
- Causal [PAGE 114]: ATE E[Y|do(X=1)] - E[Y|do(X=0)]. Adjustment formula [PAGE 114]: sum over PA.
- Counterfactual [PAGE 123]: abduction, action, prediction. Y_{X:=x}(E).
- Natural direct/indirect [PAGE 127-128].

Units: probabilities dimensionless [0,1], mutual information in bits if log base 2 (text doesn't specify base but standard), AUC dimensionless.

Breakdown regimes: Prop 3 requires binary Y; Prop 4 requires all events positive probability; separation vs sufficiency degenerates if TPR=0 or FPR=0 [PAGE 66].

RETROCAUSAL_GENEALOGY: Halley 1693 [PAGE 44], Quetelet [PAGE 44], Galton [PAGE 44], Cleary 1966 [PAGE 73], Darlington 1971 [PAGE 73], FAT/ML 2014 [PAGE 21], ProPublica 2016 [PAGE 73], Lum & Isaac 2016 [PAGE 14], Bostock 2020 [PAGE 129], SFFA/Harvard [PAGE 130], Griggs v. Duke Power [PAGE 119], UC Berkeley 1973 [PAGE 105]. Multi-week traps: feedback loop amplification over repeated deployments [PAGE 14-15], distribution shift across time [PAGE 38], ontological instability/Hacking looping effect [PAGE 134], recursive updates where predictions alter training distribution [PAGE 14].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = under institutional stress, systems revert to historically biased patterns (e.g., predictive policing concentrates on already-policed areas [PAGE 14-15]). Counter-trap = adopting a statistical criterion (like independence) to create appearance of fairness while legitimacy remains unaddressed [PAGE 23]. Clock = temporal dimension: drift, feedback loops, compounding disparities [PAGE 23, 38]. Also recursive theory of mind in gaming: subjects anticipate model and change features (teaching to the test [PAGE 42]), requiring causal modeling to prevent gaming [PAGE 42]. Decision makers model subjects who model the decision rule back.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: camera dynamic range bias against darker skin [PAGE 9], BMI scaling error for taller people [PAGE 49]. Biomechanical/behavioral: asthma/pneumonia spurious correlation due to inpatient care [PAGE 12], recidivism spur-of-the-moment unpredictability [PAGE 39]. Weather: traffic example, bad traffic days U [PAGE 132]. Veto proof conditions: (1) mediator mistaken for confounder (religion/education graph ambiguity [PAGE 132]); (2) unobserved confounding makes causal effect unidentifiable [PAGE 116]; (3) ontological instability of race/gender means no stable node [PAGE 133-135]. These are veto conditions: if any holds, causal fairness claims collapse.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Berkeley admissions: Veto direct-effect claim if department Z is a collider between A and residence R [PAGE 118-119]. Prediction: conditioning on Z opens path A→Z←R→Y, so estimated direct effect is biased; the apparent absence of direct discrimination is an artifact of collider bias.
2. Harvard admissions: Veto attribute-flipping counterfactual if A (race) has descendants in X (e.g., interview performance shaped by racialized experiences) [PAGE 130-131]. Prediction: naive flip yields ΔP admission (25%→36%→77%→95%) but valid counterfactual requires adjusting downstream mediators; magnitude of disparity is not identified without a causal graph.
3. Predictive policing: Veto retraining on post-deployment arrest records when arrests are downstream of prior predictions [PAGE 14-15]. Prediction: error rate disparity for targeted demographic grows over simulation steps; initial 2× targeting rate amplifies into a self-fulfilling feedback loop [PAGE 14].

Need to ensure no betting lines. Check: none.
No toy equations: all equations are from text.

Word count: I'll write generously.

Let's compose the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The source text establishes a formal impossibility architecture: independence, separation, and sufficiency are mutually exclusive under non-degeneracy conditions, and none is sufficient to certify fairness [PAGE 6]. A multi-hop derivation must trace how this statistical triad interacts with the legitimacy problem in Chapter 2, the causal identification problem in Chapter 5, and the legal proceduralism in Chapter 6. The first gray zone is target-goal mismatch: predictive optimization assumes a single explicit target that proxies institutional goals, but when the target is a convenience measure (e.g., arrest records as a proxy for crime, healthcare cost as a proxy for need), optimizing accuracy can systematically undermine the stated mission [PAGE 34-35]. The second gray zone is observational versus causal inference: Simpson's paradox at UC Berkeley shows that aggregate disparities can reverse upon conditioning on department, yet the data alone cannot determine whether department choice is a legitimate mediator or a site of prior discrimination [PAGE 105-107]. Causal graphs require ontological commitments about nodes such as race or religion that are historically unstable and socially constructed [PAGE 133-135]; mistaking a mediator for a confounder is described as a "deadliest sin" in causal inference [PAGE 132]. The third gray zone is feedback: the machine learning loop is explicitly closed, meaning predictions alter the distribution they were trained to model, violating the i.i.d. textbook assumption and producing distribution shift over operational timescales [PAGE 23, 38]. Predictive policing simulations demonstrate that an initial two-fold targeting disparity amplifies as new arrest records enter the training set [PAGE 14-15]. Legitimacy is distinct from distributive fairness: an institution can satisfy demographic parity while remaining illegitimate if its underlying purpose is oppressive or its procedural protections are absent [PAGE 23-24]. The recursive structure implies that decision subjects anticipate the decision rule and modify their behavior (gaming, teaching to the test), which invalidates purely correlational models and demands causal modeling [PAGE 42]. Gray-zone audit concludes that formal criteria function as diagnostic sanity checks rather than normative certificates: calibration is implied by unconstrained learning when group membership is redundantly encoded, so imposing it is often no intervention at all [PAGE 62]; separation can be satisfied only by sacrificing group-wise optimality when base rates differ [PAGE 57]; independence can be satisfied by careless selection at equal rates, producing a "glass cliff" dynamic [PAGE 55]. Any deployment that ignores these couplings risks converting a statistical constraint into a fairness-washing counter-trap while the underlying legitimacy deficit remains unaddressed [PAGE 23].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Classification formalism: Let covariates $X$ and target $Y$ be jointly distributed random variables over a population. A classifier or predictor is a function $f$ mapping observed covariates to a guess $\hat{Y}=f(X)$; the output is called a label or prediction [PAGE 46]. Classification accuracy is $\mathbb{P}\{Y=\hat{Y}\}$; classification error is $\mathbb{P}\{Y\neq\hat{Y}\}$ [PAGE 46].

Optimal predictor under zero-one loss: With losses $\ell(0,1)=\ell(1,0)=1$ and $\ell(1,1)=\ell(0,0)=0$, the optimal predictor minimizing expected loss (classification risk) satisfies
\[
\hat{Y}=f(X),\qquad
f(x)=
\begin{cases}
1 & \text{if }\mathbb{P}\{Y=1\mid X=x\}>1/2,\\
0 & \text{otherwise.}
\end{cases}
\]
[PAGE 47-48]. Units: probabilities are dimensionless in $[0,1]$. The threshold $1/2$ shifts if false-positive and false-negative costs are asymmetric [PAGE 48].

Risk score and regression reduction: The optimal classifier can be written as a threshold on the risk score
\[
r(x)=\mathbb{P}\{Y=1\mid X=x\}=\mathbb{E}[Y\mid X=x],
\]
which minimizes squared loss $\mathbb{E}[(Y-r(X))^2]$ among real-valued scores [PAGE 48]. Units: $r(x)$ is a conditional probability / posterior mean in $[0,1]$.

ROC curve and AUC: Varying a threshold $t$ on a score traces true positive rate against false positive rate; the area under the curve equals $\mathbb{P}\{\text{random positive instance scores higher than random negative instance}\}$, with $1/2$ for random guessing and $1$ for perfect classification [PAGE 50]. Units: dimensionless.

Statistical non-discrimination criteria [PAGE 54-60]:
\begin{itemize}
\item Independence: $A \perp R$ (sensitive attribute statistically independent of score). For a binary classifier, this is demographic parity: $\mathbb{P}\{\hat{Y}=1\mid A=a\}=\mathbb{P}\{\hat{Y}=1\mid A=b\}$ for all groups $a,b$ [PAGE 55]. Mutual-information formulation: $I(A;R)=0$, where $I(A;R)=H(A)+H(R)-H(A,R)$ [PAGE 55]. Units: mutual information in bits if logarithm base 2 is used.
\item Separation: $R \perp A \mid Y$. For a binary classifier, equivalent to equal true positive rates and equal false positive rates across groups (error-rate parity):
\[
\mathbb{P}\{\hat{Y}=1\mid Y=1,A=a\}=\mathbb{P}\{\hat{Y}=1\mid Y=1,A=b\},\quad
\mathbb{P}\{\hat{Y}=1\mid Y=0,A=a\}=\mathbb{P}\{\hat{Y}=1\mid Y=0,A=b\}.
\]
[PAGE 56-57].
\item Sufficiency: $Y \perp A \mid R$. In the binary case:
\[
\mathbb{P}\{Y=1\mid R=r,A=a\}=\mathbb{P}\{Y=1\mid R=r,A=b\}
\quad\text{for all groups }a,b\text{ and score values }r.
\]
[PAGE 60]. Calibration by group strengthens this to $\mathbb{P}\{Y=1\mid R=r,A=a\}=r$ [PAGE 60]. Fact 3 states the optimal score $r(x)=\mathbb{E}[Y\mid X=x]$ satisfies group calibration for any group [PAGE 62].
\end{itemize}

Impossibility propositions (breakdown regimes):
\begin{itemize}
\item Proposition 2: If $A$ and $Y$ are not independent, independence and sufficiency cannot both hold [PAGE 64]. Proof via contraction rule: $A\perp R$ and $A\perp Y\mid R \Rightarrow A\perp (Y,R) \Rightarrow A\perp Y$; contrapositive yields exclusion.
\item Proposition 3: If $Y$ is binary, $A\not\perp Y$, and $R\not\perp Y$, then independence and separation cannot both hold [PAGE 65]. Breakdown: the binary-target assumption is essential; the claim fails for ternary targets [PAGE 65].
\item Proposition 4: If all events in the joint distribution of $(A,R,Y)$ have positive probability and $A\not\perp Y$, then separation and sufficiency cannot both hold [PAGE 66]. Breakdown: non-degeneracy (strictly positive probabilities) is required; the proposition implies optimal Bayes scores generally violate separation [PAGE 66].
\item Proposition 5: If $Y\not\perp A$ and $\hat{Y}$ is a binary classifier with nonzero false positive rate, separation and sufficiency cannot both hold [PAGE 66]. Breakdown: sufficiency implies equal positive predictive value $\text{PPV}_a=\frac{\text{TPR}\,p_a}{\text{TPR}\,p_a+\text{FPR}(1-p_a)}$, which equality across groups forces only if $\text{TPR}=0$ or $\text{FPR}=0$; nonzero FPR rules out equality unless degenerate [PAGE 66].
\end{itemize}

Causal operators [PAGE 113-115]:
Average treatment effect for binary treatment $X$:
\[
\mathbb{E}[Y\mid do(X:=1)]-\mathbb{E}[Y\mid do(X:=0)].
\]
Adjustment formula (backdoor) using parent set $\text{PA}$ of $X$:
\[
\mathbb{P}\{Y=y\mid do(X:=x)\}
=
\sum_z \mathbb{P}\{Y=y\mid X=x,\text{PA}=z\}\,\mathbb{P}\{\text{PA}=z\}.
\]
[PAGE 114]. Units: probabilities dimensionless; causal effects are population-level expectations.

Counterfactual procedure [PAGE 123]: Given structural causal model $M$, observed event $E$, action $X:=x$, and target $Y$, define $Y_{X:=x}(E)$ by (1) Abduction: condition noise variables $U$ on $E$ to obtain biased distribution $U'$; (2) Action: perform $do(X:=x)$ yielding $M'=M[X:=x]$; (3) Prediction: compute target using $U'$ as random seed in $M'$ [PAGE 123]. Natural direct effect: $\mathbb{E}[Y_{X:=1,Z:=Z_{X:=0}}-Y_{X:=0,Z:=Z_{X:=0}}]$; natural indirect effect: $\mathbb{E}[Y_{X:=0,Z:=Z_{X:=1}}-Y_{X:=0,Z:=Z_{X:=0}}]$ [PAGE 127-128]. Under no confounding, the natural indirect effect is identifiable from observational conditional probabilities [PAGE 128].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The statistical foundations of the text reach back to Halley's 1693 life table, which tabulated births and deaths to estimate life expectancy and price annuities [PAGE 44]. Quetelet's 19th-century "social physics" introduced the "average man" and treated normally distributed population means as a normative ideal, later influencing Galton's eugenics program [PAGE 44]. These historical commitments persist in the modern act of representing dynamic human populations as static probability distributions, an abstraction the authors describe as immutable: "Nothing we do can change the population" [PAGE 45].

The fairness criteria themselves descend from mid-20th-century psychometrics and educational testing. Cleary's criterion (1966) and Darlington's criteria (1971) prefigured independence, separation, and sufficiency; Darlington offered a visual argument that four criteria are incompatible except in degenerate cases [PAGE 73]. The machine-learning community rediscovered these works after the FAT/ML workshop was established in 2014 [PAGE 21]. ProPublica's 2016 COMPAS analysis implicitly adopted equality of false positive rates, while Northpointe emphasized calibration by group [PAGE 73]; Chouldechova and Kleinberg et al. subsequently formalized the trade-off between separation and sufficiency [PAGE 73].

Causal lineage enters through Pearl's structural causal models and the potential-outcomes framework. The UC Berkeley 1973 admissions data exemplify Simpson's paradox: aggregate admission favored men (44% vs 35%), yet department-level analysis showed mixed or female-favorable rates [PAGE 105-106]. The original study attributed the disparity to a "pipeline problem" of socialization, but the text stresses the data cannot resolve whether department preferences were shaped by prior discrimination [PAGE 106-107]. Legal genealogy includes Griggs v. Duke Power Co. (1970), where the Supreme Court ruled that a high-school diploma requirement was unjustified despite being facially neutral, because it had adverse impact on minority groups [PAGE 119]. Bostock v. Clayton County (2020) introduced but-for causation via counterfactual sex-changing, a move the authors characterize as a narrow understanding of causality [PAGE 129]. SFFA v. Harvard (discovery beginning 2015) turned on conditional statistical parity and race attribute-flipping, with expert reports claiming admission probabilities would rise from 25% to 36% (white), 77% (Hispanic), or 95% (African-American) upon race change [PAGE 130].

Multi-week traps arise from the temporal structure of the machine learning loop. Lum and Isaac's 2016 analysis of PredPol in Oakland found Black people targeted for drug-crime predictive policing at roughly twice the rate of White people despite equal drug-use rates; simulation showed the initial bias would be amplified by a feedback loop as new arrests entered the training set [PAGE 14-15]. Distribution shift is a foundational problem: training-test splits drawn from the same collection procedure are more similar to each other than to the future population [PAGE 38]. Ontological instability compounds this: Hacking's "looping effect" means people conform or disconform to the categories they are placed in, invalidating the theories underlying those categorizations [PAGE 134]. Race and gender lack stable ontologies for causal modeling; they are socially constructed and historically contingent [PAGE 133-135]. These traps operate over weeks to months of retraining cycles, such that a model fair at deployment can become discriminatory as the population distribution drifts and predictions alter behavior [PAGE 23, 38].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of institutions under pressure to revert to historically patterned decision rules rather than adopt reflexively justified ones. In the source, predictive policing provides the clearest instance: deploying more officers to high-risk areas or lowering stop thresholds makes the prediction appear validated even if it originated in data bias; the resulting arrests then enrich the training set, concentrating policing on the same areas and compounding disparity [PAGE 14-15]. This is a closed-loop regression: the model's output shapes the world, which reshapes the training distribution, which the model then relearns. The clock is the operational time scale of retraining and feedback; distribution shift means the i.i.d. assumption is a simplification "might be unachievable in practice" [PAGE 23], so disparities can emerge not from static bias but from dynamic drift of sub-populations [PAGE 23].

A counter-trap is the adoption of a narrow statistical criterion to simulate legitimacy while leaving the underlying decision architecture unexamined. The authors warn that firms can "co-opt fairness discourse" and ensure demographic parity between groups without addressing legitimacy concerns [PAGE 23]. Similarly, imposing independence via group-specific post-processing thresholds uses group membership explicitly and can produce careless selection at equal acceptance rates—the "glass cliff" dynamic in which one group's appointees are set up to fail [PAGE 55]. The counter-trap is therefore not the criterion itself but the substitution of a mathematical stamp for procedural justification: explainability, recourse, and target-goal alignment remain unaddressed [PAGE 24-25, 40-42].

Recursive theory of mind enters through strategic response. Decision subjects model the decision rule and adapt: gaming occurs when subjects change features to alter decisions without changing the underlying outcome the features were meant to predict, as in teaching to the test [PAGE 42]. Because most models do not discover causal mechanisms, preventing gaming requires causal modeling [PAGE 42]. The decision maker must therefore model the subject modeling the decision maker: if credit criteria use location, one applicant can move neighborhoods while another cannot, making recourse unequally distributed [PAGE 41]. Agency and culpability further complicate the recursion: criteria based on immutable characteristics deny subjects any adaptive path, while easily gameable mutable characteristics degrade the model's validity [PAGE 40-42]. The institutional challenge is to maintain a decision rule that is simultaneously accurate, robust to subject adaptation, and normatively defensible—a condition that observational criteria alone cannot certify [PAGE 6-7].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Measurement technologies embed population bias at the physical capture stage. Cameras historically had limited dynamic range and color balance optimized for lighter skin, making darker tones harder to render [PAGE 9]; computational techniques can mitigate but not fully retire this bias. The body mass index $R=W/H^2$ (height in meters, weight in kilograms) is inflated as a risk measure for taller people due to scaling issues, producing classification errors that systematically align with demographic groups [PAGE 49]. Veto condition: if a physical sensor or index systematically mis-measures a protected group, no downstream statistical criterion can repair the corrupted input distribution.

Biomechanical/behavioral layer veto: The healthcare asthma-pneumonia example shows a true correlational rule (asthmatic patients lower measured pneumonia risk) that is invalid for causal action because asthma patients receive more inpatient care [PAGE 12]. Recidivism contains spur-of-the-moment crimes not predictable in advance, imposing an accuracy ceiling regardless of model class [PAGE 39]. Veto condition: if the target construct is not stably measurable or the outcome is not causally manipulable by the decision, the model's outputs cannot justify intervention.

Weather/exogenous layer veto: The traffic counterfactual uses a binary bad-traffic day variable $U\sim B(1/2)$ and route-specific accidents $U_0,U_1\sim B(1/2)$; observing bad traffic on the chosen route biases beliefs about $U$, altering the counterfactual probability for the alternative route from $1/4$ to $1/6$ [PAGE 132]. Veto condition: unobserved common causes (weather) confound route and outcome; conditioning on the observed choice without updating noise distributions yields the wrong interventional distribution.

Structural veto conditions from the text:
1. Mediator-confounder inversion: Modeling religious affiliation as a source node makes education a mediator; modeling it as an effect of education makes education a confounder. "Mistaking a mediator for a confounder is one of the deadliest sins in causal inference" [PAGE 132]. Veto: without external ontological grounding, the adjustment set is unidentified.
2. Unobserved confounding: The adjustment formula requires observed parents; with unobserved confounders the causal effect is unidentifiable unless a valid backdoor set exists [PAGE 114-116]. Veto: no amount of observational data rescues an unblocked backdoor path.
3. Ontological instability: Race, religion, and gender lack stable biological or social essences; treating them as immutable source nodes assumes a naturalistic perspective contradicted by social constructivism [PAGE 133-135]. Veto: if the node's referent is unstable, counterfactuals over that node are not well-defined.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — UC Berkeley admissions collider bias. Verifiable veto: Conditioning on department choice $Z$ to estimate the direct effect of sex $A$ on admission $Y$ is invalid if $Z$ is a collider between $A$ and an unobserved confounder such as state of residence $R$, because this opens the backdoor path $A\rightarrow Z\leftarrow R\rightarrow Y$ [PAGE 118-119]. Prediction: The apparent absence of a direct sex effect (department-adjusted admission rates favoring women in four of six departments) will be an artifact of collider conditioning; the true direct effect remains unidentified without measuring $R$ and blocking the path.

Scenario 2 — Harvard admissions attribute-flipping. Verifiable veto: Counterfactual demographic parity via race flipping ($A:=a\to a'$) holding all other features $X$ fixed is valid only if race has no descendant nodes in the causal graph; if interview performance, extracurriculars, or other $X$ variables are influenced by race, flipping $A$ without adjusting descendants produces invalid counterfactuals [PAGE 130-131]. Prediction: The reported increases from 25% to 36% (white), 77% (Hispanic), and 95% (African-American) overstate the identifiable disparity magnitude; the true counterfactual effect requires a causal graph specifying which features are mediators versus confounders.

Scenario 3 — Predictive policing feedback retraining. Verifiable veto: Retraining a predictive policing model on post-deployment arrest records is vetoed when arrests are downstream of prior predictions, because the new training labels are themselves caused by the model's allocations [PAGE 14-15]. Prediction: Starting from a baseline where Black residents are targeted at roughly twice the rate of White residents despite equal drug-use rates [PAGE 14], the error-rate disparity for the targeted group will compound across retraining cycles; the model's apparent precision on new arrests reflects selection bias rather than improved ground-truth estimation.
</RLVR_COUNTERFACTUAL_VETOES>