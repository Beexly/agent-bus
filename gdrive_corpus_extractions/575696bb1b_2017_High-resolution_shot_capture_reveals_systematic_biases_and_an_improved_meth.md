---
source: "2017 High-resolution shot capture reveals systematic biases and an improved method for shooter evaluation.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4786
---

<NATIVE_REASONING>
The user wants a rigorous analysis of the provided research paper ("High-resolution shot capture reveals systematic biases and an improved method for shooter evaluation", 2018 Research Papers Competition, 17 pages, but only text up to page 10 provided in the prompt; wait, the prompt says PAGES: 17 but the source text ends at page 10 marker? Let's check: the text has page markers "2018 Research Papers Competition Presented by: 1" ... "10" at the end. It seems only pages 1-10 are provided. However, the user says PAGES: 17. I must work with what is provided. I should cite exact [PAGE N] markers from the text. The page numbers appear at bottom: 1,2,3,4,5,6,7,8,9,10. No pages 11-17 text. I should not hallucinate content from pages 11-17. I will cite only pages 1-10 where content exists. Need to be careful: the prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I must use [PAGE 1] etc. corresponding to the printed page numbers in the document.

Requirements:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds. Avoid gambling terminology entirely.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- >= 1,000-WORD DEPTH across exact XML sections:
  <THINK_TRACE> (>=400 words)
  <SOURCE_OPERATORS_AND_EQUATIONS>
  <RETROCAUSAL_GENEALOGY>
  <RECURSIVE_THEORY_OF_MIND>
  <CROSS_LAYER_VETO_ADJUDICATION>
  <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

Need to produce all sections. Total words likely >1000.

Content of paper:
- 22 million shots from Noahlytics, sensor 13 feet above basket.
- 5,649 individuals, male/female, NBA/WNBA/NCAA/high school.
- Three attributes: Left-Right (-9" to +9", 0 straight), Depth (0" front to 18" back), Angle (36° flat to 55° high arcing). Page 2.
- Systematic biases: Left-Right biases vary by court position. Right side shoots left of center, left side shoots right of center. Corner 3-pointers: right corner average 2.34 inches left of hoop center; left corner 1.05 inches right. NBA player LR std dev ~4 inches from corner. Simulated LR distributions; average NBA player sacrifices up to 4% shooting percentage from right corner and up to 2% from left corner. Page 3.
- Depth bias: shorter shots go deeper, longer shots shorter. Mid-range ~11 inch Depth, long 2-point ~10 inch, 3-point ~9 inch. GMZ center ~11.5 inches at 15-18 ft to 10.5 inches at 27-30 ft. Mean Depth decreases from 10.1 inches at 15-18 ft to 7.8 inches at 27-30 ft. Players shoot shorter than GMZ center. Estimated ~1.5% decrease for typical NBA 3-point shot 24-27 ft vs optimal Depth; long 3-point 27-30 ft has 2.9% decrease. Page 4.
- Ranking players: shots 18-22 feet. Players A, B, C with 27,636, 25,031, 10,524 shots; averages 50%, 58%, 75%. Raw shooting percentage from small samples has high variance. Sessions over 1,000 shots necessary to rank reliably. Page 5.
- Spatial rim pattern: nine features from 25-shot sessions: mean and std dev for each of LR, Depth, Angle (6 features) plus Spearman correlation between each pair (3 features) = 9 dimensions. t-SNE visualizes clustering by player without prior knowledge. Page 6.
- Prediction model: Gradient Boosting Regression on 10 dimensions (raw percentage + 9 rim pattern features). Dataset: 25-shot sessions from players with >1,000 stationary shots in 18-22 ft range. Labels: overall shooting percentage for all stationary shots in distance range. Train/test split 2/3 players, 1/3 players. Down-sampled for even distribution across observed shooting percentages. MSE half of raw shooting percentage. Spearman rank increased correlation. Bias due to limited training range (30%-90% overall shooting percentages); model only predicts between those values; poor shooters skewed upward, great shooters skewed downward. Page 7-8. Appendix Section 2 confirms training data only 30%-90%. Page 10.
- Appendix Section 1: strong correlation between shooter movement and shooting percentage; excluded sessions with average movement >2 feet. Page 9-10.

Need to produce formal LaTeX equations. Could define:
- Let \(S \subset \mathbb{R}^2\) be court positions, discretized into \(6\text{ in} \times 6\text{ in}\) cells \(c_{ij}\).
- For shot \(k\) from cell \(c\), entry vector \(\mathbf{x}_k = (LR_k, D_k, \theta_k)^\top \in [-9,9] \times [0,18] \times [36^\circ,55^\circ]\).
- Mean Left-Right per cell: \(\mu_{LR}(c) = \frac{1}{N_c}\sum_{k\in c} LR_k\).
- Shooting percentage estimator from \(n\) shots: \(\hat{p}_n = \frac{1}{n}\sum_{i=1}^n \mathbb{I}(y_i=1)\), where \(y_i \sim \text{Bernoulli}(p)\). Variance \(\text{Var}(\hat{p}_n) = p(1-p)/n\). For \(n=25\), standard error \(\sqrt{p(1-p)/25}\). At \(p=0.5\), SE = 0.1 (10 percentage points). This explains overlap in Fig 4A. For \(n>1000\), SE < 1.6 pp at p=0.5.
- Nine features: \(\boldsymbol{\phi} = (\mu_{LR}, \mu_D, \mu_\theta, \sigma_{LR}, \sigma_D, \sigma_\theta, \rho_{LR,D}, \rho_{LR,\theta}, \rho_{D,\theta}) \in \mathbb{R}^9\). Augmented with raw \(\hat{p}_{25}\), \(\mathbf{z} = (\hat{p}_{25}, \boldsymbol{\phi}) \in \mathbb{R}^{10}\).
- Gradient boosting regression: \(\hat{p}_{\text{pred}} = \sum_{m=1}^M \eta h_m(\mathbf{z})\), \(h_m\) regression trees, loss \(L(y,\hat{p}) = (y-\hat{p})^2\) (MSE).
- Spearman rank correlation \(\rho_s\) between predicted and ground-truth cumulative percentage.
- Breakdown/singularity: model trained on players with overall \(p \in [0.30,0.90]\); prediction range limited to \([0.30,0.90]\). For true \(p < 0.30\), \(\hat{p} \ge 0.30\) (upward bias); for \(p > 0.90\), \(\hat{p} \le 0.90\) (downward bias). Saturation/clipping at boundaries. Also sessions with average inter-shot movement \(>2\) ft excluded to isolate stationary catch-and-shoot type; breakdown if player movement >2 ft because correlation between movement and percentage confounds skill estimate.
- Depth bias quantification: optimal GMZ center \(d^*(r)\) depends on distance \(r\); observed mean \(\bar{d}(r) < d^*(r)\). Loss \(\Delta p(r) \approx \int_{d} [P(\text{make}|d^*) - P(\text{make}|d)] f(d;\bar d(r), \sigma_d) dd\). For 24-27 ft, \(\Delta p \approx 1.5\%\); for 27-30 ft, \(\Delta p \approx 2.9\%\). Left-Right loss: right corner up to 4%, left corner up to 2% for average NBA player with \(\sigma_{LR} \approx 4\) in.

Need to avoid toy equations. These are real statistical formulations based on the paper. Must state units: inches, degrees, feet, percentage points, dimensionless Spearman \(\rho_s \in [-1,1]\), MSE in squared percentage points (or proportion squared).

Need exact page citations. I will cite [PAGE 2] for attributes, [PAGE 3] for LR bias and corner values, [PAGE 4] for depth bias and GMZ, [PAGE 5] for players A/B/C and 1000 shots, [PAGE 6] for nine features and t-SNE, [PAGE 7] for model and train/test, [PAGE 8] for MSE half and bias, [PAGE 9-10] for appendix movement and prediction range.

Wait, page numbers in text: after page 8 conclusion, page 9 acknowledgements/resources/references, page 10 appendix figures. Actually:
- Page 1: title/abstract/intro start.
- Page 2: 1.1 continued, 1.2 data collection, 1.3 attributes.
- Page 3: Figure 2, section 2.1 corner biases.
- Page 4: Figure 3, section 2.2 depth bias.
- Page 5: section 3, 3.1 limitations, players A B C, Figure 4.
- Page 6: Figure 4 continued, spatial rim pattern nine features, t-SNE.
- Page 7: Figure 5, section 3.2 prediction model, gradient boosting, dataset.
- Page 8: section 3.3 results, MSE half, Spearman, bias, discussion start.
- Page 9: discussion continued, conclusion, acknowledgements, resources, references.
- Page 10: Appendix Section 1 and Section 2.

I will cite accordingly.

Now structure the response:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words). Need to discuss derivation from raw data to systematic biases, sample-size variance, rim-pattern features, gradient boosting, breakdown regimes, gray zones (handedness not collected, bank shots ignored, training range limited to 30-90%, movement cutoff >2 ft, stationary shots only 18-22 ft, no future ability validation yet). Also gray-zone: small-sample ranking reliability threshold "over 1,000 shots" is empirical, not a hard singularity; t-SNE is unsupervised visualization not proof of causality; bias correction not developed. Must be >=400 words.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown. Include equations with definitions. Cite pages. Mention singularity/breakdown regimes: n=25 vs n>1000; p in [0.30,0.90]; movement >2 ft; bank shot regions excluded; distance ranges 18-22 ft for ranking; corner 3-point distance; GMZ center shift. Units: inches ("), degrees (°), feet (ft), proportion (dimensionless), percentage points (pp), MSE (pp^2), Spearman rho (dimensionless).

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps. Lineage: Goldsberry 2012 Courtvision (spatial shot charts) [PAGE 1 ref [1]]; Marty & Lucey 2017 MIT Sloan data-driven method for 3-point shooting [PAGE 2 ref [3]]; van der Maaten & Hinton t-SNE 2008 [PAGE 6 ref [6]]; Pedregosa et al. scikit-learn 2011 [PAGE 6 ref [7]]; NBA Combine spot-up data [PAGE 2 ref [2]]. Multi-week traps: small-sample evaluation over a week or combine session leads to high variance; regression to mean; ranking instability; "hot hand" anecdotal assessment; bias correction over weeks/months requires accumulation of high-resolution data. Need to connect to paper.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock. Crisis habit regression: coaches/players revert to raw percentage after a bad game/small sample because it's cognitively available; overcorrect based on 25-shot session. Counter-trap: using rim-pattern features to resist narrative; but risk of overfitting to spatial features or misreading bias correction; model range saturation means elite shooters (>90%) get deflated, poor shooters (<30%) inflated—agents might exploit by selecting players near boundary. Clock: accumulation of high-resolution data over years; model learning potential future ability; draft/trade timeline. Need to discuss theory of mind: what the coach thinks the player thinks, etc. Maybe multi-level: shooter knows coach uses raw pct; shooter adjusts shot selection to game the metric; coach anticipates and uses rim patterns; shooter adapts entry attributes; recursion.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof. Physical: hoop geometry 18" diameter, rim depth 0-18", sensor 13 ft above basket [PAGE 2]. Biomechanical: shooter movement >2 ft excluded because movement correlates with percentage [PAGE 9 appendix]; stationary shots only 18-22 ft [PAGE 7]; handedness not collected [PAGE 3]—potential confound for LR bias (right-handed majority hypothesis). Weather: indoor vs outdoor not specified; Noahlytics sensor likely indoor; environmental factors (wind, lighting) could alter entry angle/depth but not addressed; breakdown if applied to outdoor courts without recalibration. Veto: any analysis ignoring bank-shot regions (45 degrees from hoop) is invalid because bank shots have distinct LR/Depth signatures [PAGE 3-4]. Any ranking using <1000 shots is vetoed due to overlap [PAGE 5]. Any prediction outside [30%,90%] is vetoed due to saturation bias [PAGE 10 appendix].

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some evaluation framework. Need 3 scenarios that are verifiable (can be tested/falsified) with predictions.
Scenario 1: Sample-size veto. Take a player with true cumulative p=0.60 over >10,000 stationary 18-22 ft shots. Draw 25-shot sessions; raw % will overlap substantially with player true p=0.50. Prediction: rank inversion rate >40% between adjacent skill tiers using raw 25-shot pct; ten-dimension model reduces inversion. Verifiable via bootstrap.
Scenario 2: Range-saturation veto. Apply model to a shooter with true overall p=0.95 (outside training [0.30,0.90]). Prediction: predicted p <=0.90, systematically deflated; Spearman rank preserved but absolute error biased downward. Verifiable by holding out elite shooters.
Scenario 3: Movement-confound veto. Include sessions with average inter-shot movement >2 ft. Prediction: model's MSE increases and player clustering in t-SNE degrades because movement confounds skill; excluding movement >2 ft restores clustering. Verifiable by comparing Appendix Figure 1 correlation.

Need to phrase predictions concretely.

Word count: Need >=1000 across sections. THINK_TRACE alone >=400. I'll aim for substantial length in each.

Need to ensure no betting lines. Do not mention odds, spreads, etc. "Percentage loss" is fine (shooting percentage). Avoid "moneyline". Avoid "betting". Fine.

Zero toy equations: I will not invent fake ratios. All equations are standard statistical definitions grounded in the paper. I will explicitly label assumptions.

Need to cite verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include some verbatim quotes with page citations. E.g., "Sessions of over 1,000 shots are necessary to rank shooters reliably." [PAGE 5]. "The model has half the mean squared error of raw shooting percentage" [PAGE 8]. "Left-Right value of -9”, a straight shot has a Left-Right value of 0” ... +9”" [PAGE 2]. I'll include a few.

Let's draft carefully.

Word count estimate: THINK_TRACE ~500 words. SOURCE_OPERATORS ~400. RETROCAUSAL ~250. RECURSIVE ~250. CROSS_LAYER ~250. RLVR ~200. Total ~1850. Good.

Need exact XML section names. No extra sections.

Let's write.

Be careful with LaTeX in XML: use standard LaTeX, no issues.

Need to mention "SI/information/probability units". Use bits? Information units maybe not needed but can mention Shannon entropy? Not necessary. Probability units: proportion, percentage points. SI: meters? The paper uses feet and inches; I can convert to SI where appropriate but better to state paper units and note SI equivalents (1 in = 0.0254 m, 1 ft = 0.3048 m). That satisfies SI units mention.

Let's compose.

THINK_TRACE content:
- Multi-hop: 22M shots -> cell-wise mean LR/Depth -> systematic biases -> quantify percentage loss via simulation -> small-sample variance of raw % -> nine-dimensional rim pattern -> t-SNE clustering -> gradient boosting -> MSE reduction -> rank improvement.
- Gray zones: handedness not collected (hypothesis only); bank shots excluded from depth analysis; training range limited 30-90%; stationary shots only; movement cutoff >2 ft is heuristic; t-SNE unsupervised doesn't prove predictive causality; bias correction not developed; "over 1,000 shots" is empirical threshold not a mathematical singularity; angle included in features but not deeply analyzed in bias section; depth distributions skewed/non-normal so median used; GMZ center shifts with distance but players shoot shorter; corner 3 is strategically important but bias differs by side (right corner 2.34 in left vs left corner 1.05 in right).
- Breakdown regimes: n=25 high variance; p outside [0.30,0.90] saturation; movement >2 ft confound; outdoor/environmental unmodeled.

I'll write it out.

Now produce final. Ensure all sections present. Use [PAGE N] markers.

Check page citations:
- Attributes definitions: Page 2.
- LR bias corner values: Page 3.
- NBA player LR std dev ~4 inches: Page 3.
- Up to 4% right corner, up to 2% left corner: Page 3.
- Depth bias: Page 4.
- Mid-range 11 in, long 2-point 10 in, 3-point 9 in: Page 4.
- Mean Depth 10.1 at 15-18 ft to 7.8 at 27-30 ft: Page 4.
- GMZ center 11.5 to 10.5: Page 4.
- 1.5% decrease for 24-27 ft, 2.9% for 27-30 ft: Page 4.
- Players A/B/C shot counts and averages: Page 5.
- Sessions over 1,000 shots necessary: Page 5.
- Nine features: Page 6.
- t-SNE: Page 6.
- Gradient Boosting, dataset >1000 stationary shots 18-22 ft, train/test 2/3 1/3: Page 7.
- MSE half, Spearman: Page 8.
- Bias due to limited range 30%-90%: Page 8 and Appendix Section 2 Page 10.
- Movement >2 ft excluded: Page 9-10 Appendix Section 1.

I'll cite accordingly.

Let's write final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s causal chain proceeds across four analytical hops, each with a distinct gray-zone and breakdown regime. Hop one constructs cell-wise statistics from 22,000,000 high-resolution shots captured by a Noahlytics sensor suspended approximately 13 feet above the basket [PAGE 2]. The court is discretized into six-inch by six-inch squares, and for each cell the mean Left-Right (LR) and Depth attributes are computed [PAGE 3]. Because bank shots are excluded from the non-bank analysis, any inference that includes the 45-degree bank-shot regions emanating from the left and right sides of the hoop is invalid; bank shots possess distinct LR and Depth signatures that would otherwise contaminate the population mean [PAGE 3, PAGE 4]. Hop two quantifies the consequence of systematic LR bias: right-corner three-point shooters average 2.34 inches left of hoop center, while left-corner shooters average 1.05 inches right [PAGE 3]. Assuming an average NBA player LR standard deviation of about 4 inches from the corner, simulation implies up to 4% shooting-percentage loss from the right corner and up to 2% from the left corner [PAGE 3]. A gray zone here is handedness: the Noahlytics system does not collect shooter handedness, so the asymmetry between corners is hypothesized, not established, to stem from a higher proportion of right-handed shooters [PAGE 3].

Hop three translates shot distance into Depth bias. Non-bank shots show shorter shots entering deeper and longer shots entering shorter; mid-range shots average roughly 11 inches Depth, long two-point shots about 10 inches, and three-point shots about 9 inches [PAGE 4]. Relative to the Guaranteed Make Zone (GMZ) center—which shifts only modestly from 11.5 inches at 15–18 feet to 10.5 inches at 27–30 feet—players consistently shoot short, with mean Depth falling from 10.1 inches at 15–18 feet to 7.8 inches at 27–30 feet [PAGE 4]. Estimated percentage loss is approximately 1.5% for a typical NBA 24–27 foot three-point shot and 2.9% for the longer 27–30 foot shot [PAGE 4]. Because Depth distributions are skewed and non-normal, the authors use median Depth rather than mean for the simulation; applying Gaussian assumptions to Depth would be a breakdown regime [PAGE 4].

Hop four addresses small-sample evaluation. Three players tracked over 10 months took 27,636, 25,031, and 10,524 stationary 18–22 foot shots, averaging 50%, 58%, and 75% respectively [PAGE 5]. Despite large cumulative samples, 25-shot sessions produce heavy overlap in raw shooting percentage distributions; the paper states sessions of over 1,000 shots are necessary to rank shooters reliably [PAGE 5]. This is an empirical threshold, not a mathematical singularity: the standard error of a 25-shot proportion at p=0.5 is 10 percentage points, so adjacent skill tiers are statistically indistinguishable at n=25. The authors augment raw percentage with nine spatial rim-pattern features per 25-shot session—the mean and standard deviation of LR, Depth, and Angle (six features), plus the pairwise Spearman correlations among those attributes (three features) [PAGE 6]. t-SNE visualization clusters sessions by player without supervision, suggesting the nine dimensions carry skill information beyond raw percentage [PAGE 6].

The final hop is a Gradient Boosting Regression on a ten-dimensional input (raw percentage plus the nine rim features), trained on players with more than 1,000 stationary shots in the 18–22 foot range, split two-thirds training and one-third testing by player [PAGE 7]. The model achieves half the mean squared error of raw percentage and improves Spearman rank correlation against cumulative shooting percentage [PAGE 8]. Breakdown regimes are explicit: the training data span overall shooting percentages only between 30% and 90%, so the predictor saturates at those bounds, inflating poor shooters and deflating elite shooters [PAGE 8, PAGE 10]. Sessions with average inter-shot movement greater than two feet are excluded because movement correlates negatively with percentage; including them reintroduces confound [PAGE 9–10]. Angle is collected (36° flat to 55° arcing) but receives less bias-analysis attention than LR and Depth [PAGE 2]. Additional gray zones include the absence of environmental variables (indoor versus outdoor, lighting, air resistance), the restriction to stationary catch-and-shoot-type shots rather than pull-ups or off-the-dribble attempts, and the unproven claim that the model will eventually predict future potential rather than merely current ability [PAGE 8].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the court be partitioned into cells c of area 6 in × 6 in (0.1524 m × 0.1524 m). For shot k originating in cell c, define the entry vector
\[
\mathbf{x}_k = \begin{pmatrix} LR_k \\ D_k \\ \theta_k \end{pmatrix} \in [-9,9]\text{ in} \times [0,18]\text{ in} \times [36^\circ,55^\circ],
\]
where LR is left-right deviation relative to shooter perspective (-9" left edge, 0" straight, +9" right edge), D is entry depth (0" front rim, 18" back rim), and θ is entry angle [PAGE 2]. The cell-wise mean operator is
\[
\mu_{LR}(c) = \frac{1}{N_c} \sum_{k\in c} LR_k,\qquad \mu_D(c) = \frac{1}{N_c} \sum_{k\in c} D_k.
\]
Systematic bias is declared when \(\mu_{LR}(c)\neq 0\) outside bank-shot regions [PAGE 3]. For the corner three-point case, \(\mu_{LR}(\text{right corner}) = -2.34\) in and \(\mu_{LR}(\text{left corner}) = +1.05\) in [PAGE 3].

Raw shooting percentage from n shots is the Bernoulli sample mean
\[
\hat{p}_n = \frac{1}{n}\sum_{i=1}^n \mathbb{I}(y_i=1),\qquad y_i\sim\mathrm{Bernoulli}(p),
\]
with sampling variance
\[
\operatorname{Var}(\hat{p}_n) = \frac{p(1-p)}{n},\qquad \mathrm{SE}(\hat{p}_n)=\sqrt{\frac{p(1-p)}{n}}.
\]
At p=0.50 and n=25, SE = 0.10 (10 percentage points); at n>1000, SE < 0.016 at p=0.50. This explains why the authors find sessions of over 1,000 shots necessary for reliable ranking [PAGE 5].

The nine-dimensional spatial rim-pattern feature vector per session is
\[
\boldsymbol{\phi} = \big(\mu_{LR},\mu_D,\mu_\theta,\sigma_{LR},\sigma_D,\sigma_\theta,\rho_{LR,D},\rho_{LR,\theta},\rho_{D,\theta}\big)\in\mathbb{R}^9,
\]
where \(\sigma\) denotes standard deviation and \(\rho\) denotes Spearman correlation between attribute pairs [PAGE 6]. The augmented input to the predictor is \(\mathbf{z}=(\hat{p}_{25},\boldsymbol{\phi})\in\mathbb{R}^{10}\) [PAGE 7].

Gradient boosting regression fits
\[
\hat{p}_{\mathrm{pred}}(\mathbf{z}) = \sum_{m=1}^{M} \eta\, h_m(\mathbf{z}),
\]
with regression trees \(h_m\), learning rate \(\eta\), and differentiable squared-error loss \(L(y,\hat{p})=(y-\hat{p})^2\) [PAGE 7]. The label is the player’s cumulative shooting percentage over all stationary 18–22 foot shots [PAGE 7]. Performance is assessed by mean squared error (in squared proportion units) and Spearman rank correlation \(\rho_s\in[-1,1]\) against ground-truth cumulative percentage [PAGE 8].

Singularity and breakdown regimes:
1. Sample-size singularity: at n=25 the sampling distribution of \(\hat{p}_{25}\) is wide enough that Player A (true 50%) and Player C (true 75%) distributions overlap substantially, making raw-percentage ranking unreliable [PAGE 5].
2. Range saturation: training labels span \(p\in[0.30,0.90]\); for true \(p<0.30\), \(\hat{p}_{\mathrm{pred}}\) is biased upward, and for true \(p>0.90\), \(\hat{p}_{\mathrm{pred}}\) is biased downward [PAGE 8, PAGE 10].
3. Movement confound: sessions with mean inter-shot distance >2 ft (0.6096 m) are excluded because shooter movement correlates negatively with percentage; including them invalidates the stationary-shot skill isolation [PAGE 9–10].
4. Bank-shot exclusion: cells at 45 degrees from the hoop are dominated by bank shots and must be ignored in non-bank Depth/LR analysis [PAGE 3–4].

Depth loss simulation uses the empirical non-normal Depth distribution; because Depth is skewed short, the median rather than the mean is varied to estimate percentage loss [PAGE 4]. Estimated loss relative to optimal GMZ Depth is approximately 1.5% for 24–27 foot threes and 2.9% for 27–30 foot threes [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a direct methodological lineage from Kirk Goldsberry’s 2012 Courtvision work, which introduced spatial shot charts and moved evaluation beyond summary percentages toward position-conditional shooting ability [PAGE 1, reference [1]]. The current study extends that spatial component into the physical plane of the hoop by measuring how the ball enters the rim—Left-Right, Depth, and Angle—thereby answering not just where a shooter misses, but why [PAGE 1]. It also builds on Marty and Lucey’s 2017 MIT Sloan Sports Analytics Conference work on data-driven methods for understanding and increasing three-point shooting percentage, which previously identified the Guaranteed Make Zone and a two-inch short bias for three-pointers [PAGE 2, reference [3]; PAGE 4]. The unsupervised visualization step relies on van der Maaten and Hinton’s t-SNE (2008), and the supervised implementation on scikit-learn (Pedregosa et al., 2011), grounding the pipeline in established machine-learning tooling [PAGE 6, references [6]–[7]].

A multi-week trap is embedded in conventional evaluation: NBA draft and trade decisions often rest on shooting percentage from a minimal number of shots, such as combine spot-up sessions or short summer-league samples [PAGE 1, reference [2]]. Because the standard error at n=25 is roughly 10 percentage points at p=0.50, a player observed over one week or one tournament can be ranked several tiers away from their true cumulative ability; the paper demonstrates that even elite shooters can have 25-shot sessions worse than weaker shooters by chance [PAGE 5]. The regression-to-the-mean trap is therefore temporal: a coach who reacts to a single bad week by changing a shooter’s role or mechanics is likely correcting noise. The authors’ proposed remedy requires accumulation of high-resolution rim-pattern data over months and years, with individual spatial bias maps developed per player [PAGE 8]. The trap persists if organizations continue to weigh anecdotal, small-sample assessment over the ten-dimensional model, particularly because the model’s advantage is largest precisely in the low-sample regime where traditional scouting is most confident [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Level zero: the coach evaluates the shooter using raw percentage from a small sample. Level one: the shooter knows the coach uses raw percentage and may adjust shot selection—taking easier, stationary catch-and-shoot attempts within 18–22 feet—to inflate the observed percentage, since the model’s training set explicitly restricts to stationary shots in that range [PAGE 7]. Level two: the coach anticipates this and switches to the ten-dimensional rim-pattern model, which captures mean and variance of entry attributes plus their correlations, making it harder to game through shot selection alone [PAGE 6–7]. Level three: the shooter, aware that Depth and Left-Right biases are penalized, consciously trains to shift entry depth toward the GMZ center and to center Left-Right deviation, potentially altering biomechanics in ways that improve measured rim patterns without improving in-game defensive-adjusted shooting.

Crisis habit regression occurs when, after a poor 25-shot game, the coach or player regresses to raw percentage narrative—“he can’t shoot”—rather than consulting the spatial rim pattern. The counter-trap is to institutionalize the ten-dimensional model so that single-session variance is smoothed by the nine feature dimensions; however, this introduces a new trap: overreliance on a model saturated between 30% and 90% cumulative percentage [PAGE 8, PAGE 10]. If an agent represents a shooter known to be outside that band—either below 30% or above 90%—the model’s absolute predictions are biased (upward for the poor shooter, downward for the elite shooter), even though Spearman rank ordering may remain informative. A recursive trap emerges when teams draft or trade based on predicted percentage near the saturation boundary, mistaking a clamped output for a true skill estimate.

The clock operates on two timescales. Short-term: within a single season, 25-shot sessions dominate available data, and the model’s MSE reduction—half that of raw percentage—matters most [PAGE 8]. Long-term: as more high-resolution data accumulates over several years, the authors foresee the model learning to predict potential future shooter ability rather than only current ability, which would shift draft and trade valuation from observed to projected skill [PAGE 8]. The recursive theory of mind thus ends on an asymmetry: the shooter can observe the coach’s metric, but the coach may not observe the shooter’s latent adaptation to that metric unless rim-pattern data continues to be collected at scale.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The hoop geometry fixes Depth at 0” (front) to 18” (back) and Left-Right at -9” to +9”, with the sensor mounted approximately 13 feet above the basket [PAGE 2]. Any analysis claiming to measure entry attributes without this physical frame is vetoed. Bank shots must be excluded from non-bank Depth/Left-Right maps because their trajectories would pass behind the rim absent the backboard, producing systematic outliers at 45 degrees from the hoop [PAGE 3–4].

Biomechanical layer: Sessions with average inter-shot movement greater than two feet are excluded because movement correlates significantly and negatively with shooting percentage [PAGE 9–10]. The ranking analysis is restricted to stationary 18–22 foot shots; applying the model to pull-up, off-the-dribble, or contested shots outside that distance band is a veto condition because the training distribution does not cover them [PAGE 7]. Shooter handedness is not collected, so Left-Right bias asymmetry between corners remains a hypothesis rather than a confirmed biomechanical mechanism [PAGE 3].

Environmental layer: The Noahlytics system is described as capturing shots with a suspended sensor, but indoor/outdoor conditions, lighting, and air resistance are not modeled [PAGE 2]. Deployment on outdoor courts or in varying arenas without recalibration risks breakdown because entry angle (36°–55°) and depth are sensitive to release conditions [PAGE 2].

Veto summary:
- VETO 1: Any shooter ranking based on fewer than 1,000 shots is invalidated by the demonstrated overlap of 25-, 100-, and 500-shot distributions [PAGE 5].
- VETO 2: Any Depth or Left-Right population map that includes bank-shot regions is invalidated by the distinct trajectory of bank shots [PAGE 3–4].
- VETO 3: Any absolute percentage prediction outside the [30%, 90%] training range is invalidated by saturation bias [PAGE 8, PAGE 10].
- VETO 4: Any model input containing sessions with average movement >2 ft is invalidated by the movement-percentage confound [PAGE 9–10].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Sample-size veto): Construct a hold-out set of players with cumulative stationary 18–22 foot percentages between 45% and 65% measured over more than 10,000 shots. Draw 10,000 bootstrap resamples of 25 shots per player. Rank adjacent players by raw 25-shot percentage. Verifiable prediction: rank inversion between adjacent true-skill tiers occurs in more than 40% of resamples because the standard error is approximately 10 percentage points at p≈0.50 [PAGE 5]. Counterfactual: ranking by the ten-dimensional model should reduce inversions below 20%, reflecting the reported half-MSE improvement [PAGE 8].

Scenario 2 (Range-saturation veto): Hold out elite shooters with verified cumulative percentage above 90% and poor shooters below 30%. Apply the trained gradient boosting model to their 25-shot sessions. Verifiable prediction: predicted percentages are clipped such that no elite shooter is predicted above 90% and no poor shooter below 30%, producing systematic downward bias for the elite group and upward bias for the poor group [PAGE 8, PAGE 10]. Spearman correlation may remain high, but mean absolute error will exceed the in-range error, exposing the breakdown regime.

Scenario 3 (Movement-confound veto): Take the same player cohort and create two analysis sets: one excluding sessions with mean inter-shot movement >2 ft, and one including them. Verifiable prediction: including movement-heavy sessions degrades t-SNE cluster separability by player (Figure 4B analogue) and increases model MSE relative to the stationary-only protocol [PAGE 6–7, PAGE 9–10]. Exclusion restores clustering, confirming that movement is a confound rather than a skill signal. If inclusion improves prediction, the veto is falsified and the movement cutoff must be revisited.
</RLVR_COUNTERFACTUAL_VETOES>