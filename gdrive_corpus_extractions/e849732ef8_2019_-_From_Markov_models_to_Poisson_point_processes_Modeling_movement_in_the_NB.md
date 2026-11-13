---
source: "2019 - From Markov models to Poisson point processes Modeling movement in the NBA - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4285
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper. Let me carefully follow the strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the last two sections seem oddly named for this paper context (sports tracking, NBA movement). But I must include them exactly as named. I need to adapt the content to fit the paper while keeping the section headers exact.

Let me plan:

THINK_TRACE: Need >=400 words. Deep multi-hop derivation:
- From discrete Markov chain transition probabilities p_ij to continuous transition densities via Poisson point process.
- Likelihood equivalence: Markov chain likelihood (Eq 1, Page 3) proportional to product of multinomials.
- Multinomial-Poisson transformation (Page 3): independent Poissons factorize into multinomial times Poisson over total count j. Birch's result under constraint j=Λ.
- PPP intensity function λ(s) and likelihood (Eq 2, Page 3-4).
- Conditional transition density formula: 0(z_t | z_{t-1}) = λ(z_{t-1}, z_t) / ∫ λ(z_{t-1}, e) de (Page 4).
- Kernel density estimator (Page 4) vs LGCP (Page 4-5): λ(s) = exp(η(s)), η is GP.
- Process convolutions for computation (Page 5).
- Application specifics: 25 Hz tracking, 1230 games 2015-16, 2,280,281 transitions after thinning (Page 5). Four-dimensional LGCP (origin x,y and destination x,y). Grid 1.25x1.25 ft squares, n=1480 cells, n_c = 2,190,400 combinations (Page 5). Hexagonal kernel locations k=50, k_c=2500 (Page 5).
- Macro regions r=15, model log λ(s) = Zβ + Xγ (Page 5).
- Gray zones: absorbing states (shots, fouls, turnovers), temporal homogeneity assumption violated (Page 8), collinearity with teammates for Curry effect (Page 7), grid cell size arbitrary (Page 5), separable covariance assumption.

SOURCE_OPERATORS_AND_EQUATIONS:
- Eq (1) Page 3: conditional likelihood product of p_ab^{n_ab}.
- Multinomial(n_a•, p_a1...p_a@).
- Poisson factorization: p(e) = Poisson(j|Λ) Multinomial(e|w, j), w_a = λ_a / Λ.
- PPP likelihood Eq (2) Page 3-4: L(λ; s_1...s_n) = ∏ λ(s_a) exp(-∫_S λ(s) ds).
- Conditional density: p(z_t|z_{t-1}) = λ(z_{t-1}, z_t) / ∫ λ(z_{t-1}, e) de.
- KDE: λ̂(s) ≡ 1/0_î(s) Σ_{A=1}^n >_î(s - |_A).
- LGCP: λ(ï) = exp(ñ(ï)), ñ GP.
- Process convolution basis expansion.
- Units: coordinates (!, #) likely feet (basketball court dimensions), time at 25 Hz (s^{-1}), probability dimensionless, intensity has units of inverse area? Actually intensity function for PPP over domain S⊆ℝ^V. For 4D origin-destination space, intensity units would be per unit 4-volume (feet^{-4}) if coordinates in feet. But paper doesn't explicitly state units for coordinates. Need to be careful. I can say if court coordinates are in feet, intensity has units ft^{-4} in the joint origin-destination space; conditional density is dimensionless (ft^{-2} / ft^{-2})? Wait: λ(s) where s=(origin, destination) in ℝ^4. ∫ λ(s) ds has units of expected count (dimensionless). So λ has units ft^{-4}. Conditional density p(dest|origin) = λ(origin,dest) / ∫ λ(origin, e) de. Numerator ft^{-4}, denominator ∫ over destination ft^{-2} * ft^{-4}? No: if integrating over destination only (2 dimensions), de has units ft^2. λ has units ft^{-4}. So denominator ft^{-2}. Ratio ft^{-2}, which is a 2D density (per square foot), correct for conditional transition density over destination location. Good.

RETROCAUSAL_GENEALOGY:
- Historical lineage: Cervone et al. 2016 JASA (EPV), dynamic linear models West & Harrison 1997, Birch 1963 multinomial-Poisson, Møller & Waagepetersen 2004 PPP, Diggle 1985 kernel smoothing, Higdon 2002 process convolutions.
- Scientific lineage: Markov chains -> spatial statistics -> point processes -> LGCP.
- Multi-week traps: temporal homogeneity assumption (Page 8) breaks over weeks as rosters/coaching/scheme change. Curtis? Not in paper. But can mention that assuming stationary transition densities across a season ignores mid-season trades, injuries, coaching changes (Blatt fired Jan 22, 2016, Page 7). The paper itself notes Blatt comparison across 41 games before/after firing. This is a multi-week regime shift trap.

RECURSIVE_THEORY_OF_MIND:
- Need to adapt "crisis habit regression vs counter-trap vs clock" to the paper context. Maybe interpret as:
  - Crisis habit regression: teams/players regress to familiar transition patterns under pressure (e.g., Curry on-court effect, Blatt coaching effect).
  - Counter-trap: opponent adjusts defensive positioning based on observed transition surfaces, creating a feedback loop.
  - Clock: game clock, shot clock, possession time causing non-stationarity; paper assumes temporal homogeneity which breaks down as clock winds down.
  Since the section header must be exact, I'll write content mapping these concepts to basketball movement modeling, being careful not to invent toy equations.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: court dimensions, three-point line discontinuity (Page 1, 5, 9). Grid cell 1.25 ft. Biomechanical: player movement speed limits not explicitly modeled; first-order Markov assumption ignores momentum/inertia (Page 1 billiard balls critique). Weather: indoor NBA, no weather, but arena effects? Not really. Veto conditions: if tracking data sampling rate drops below Nyquist for player velocity, model breaks. If grid resolution too coarse relative to feature scale (three-point line), discontinuity mis-specified. If LGCP computational approximations (process convolutions) fail due to non-separable covariance.

RLVR_COUNTERFACTUAL_VETOES:
- 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just "RLVR counterfactual vetoes." I'll interpret as scenarios where the model's predictions would be vetoed (invalidated) under counterfactual conditions, with verifiable predictions.
  1. Veto: Temporal non-stationarity. If a mid-season trade changes ball-handling responsibilities, the stationary LGCP fitted on full season fails. Prediction: out-of-sample log-likelihood drops significantly post-trade vs pre-trade; can be verified by refitting on sliding windows.
  2. Veto: Separable covariance assumption. If origin-destination interactions are not separable (e.g., fast breaks depend jointly on full court length), Kronecker product design matrix mis-specifies. Prediction: residual spatial autocorrelation remains significant after model fit; verified by Moran's I on residuals.
  3. Veto: Absorbing state handling. If shots/fouls/turnovers are treated as absorbing but the model thins to event locations only, conditioning on events biases transition surfaces. Prediction: comparing event-thinned vs full-transition surfaces shows divergent mass near basket; verified by Kolmogorov-Smirnov test on destination distributions.

Need to ensure no betting lines. No odds, spreads, etc.

Word count: Need >=1000 words total across sections. THINK_TRACE >=400 alone. Let's aim for:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1850 words. Good.

Need exact [PAGE N] citations and verbatim quotes where source pages provided. Since I have all 10 pages, I'll cite heavily.

Let me draft carefully, ensuring LaTeX is formal and no fake ratios.

Section order must be exactly as specified.

Let's write.

THINK_TRACE content:
Start with Markov chain definition on page 2-3. Partition domain into m states. Likelihood Eq (1) on page 3. Explain product of multinomials. Multinomial-Poisson transformation page 3: independent Poissons factorize. Birch result constraint j=Λ. PPP page 3-4: intensity function, likelihood Eq (2). Conditional transition density page 4. KDE page 4, LGCP page 4-5, process convolutions page 5. Application details page 5. Gray-zone audit: temporal homogeneity violation page 8, collinearity page 7, arbitrary grid page 5, absorbing states page 5, computational concessions page 5.

Need verbatim quotes:
- Page 3 Eq (1) area: "The conditional likelihood listed in (1) is proportional to the product of > independent multinomial likelihoods [5]."
- Page 4: "Estimating continuous transition densities permits us to balance fidelity and interpretability..."
- Page 5: "Due to the scale of the data, some concessions must be made to improve computational performance."
- Page 8: "Thus far we have assumed that transition densities are temporally homogeneous. Due to the nature of sports in general, this is a simplifying assumption that will frequently be violated."

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with page numbers and units.

LaTeX:
(1) Page 3: \(L) = \prod ...\) Actually from text:
\(L) = P(Z_+ \in ?_B | Z_{+-} \in ?_A) = \prod ... p_{ab}^{n_{ab}}\). I'll reproduce faithfully based on text: "where P(...) = p_AB and n_AB = sum ..." Better to write exactly what is visible:
\(L) = \prod_{a=1}^m \prod_{b=1}^m p_{ab}^{n_{ab}}\) maybe? The text says:
\(L) = P(Z_+ \in ?_B | Z_{+-} \in ?_A) = \prod ...\) Hmm the OCR is messy. I'll describe it generically but cite page 3 and give the formal expression consistent with the text: likelihood proportional to product of multinomials, \(p_{ab}^{n_{ab}}\).

Multinomial-Poisson: \(p(e) = \text{Poisson}(j|\Lambda) \text{Multinomial}(e|w, j)\), \(w_a = \lambda_a / \Lambda\).

PPP likelihood Eq (2) page 3-4:
\(L(\lambda(\cdot); s_1, ..., s_n) = \prod_{a=1}^n \lambda(s_a) \exp\left(-\int_S \lambda(s) \, ds\right)\).

Conditional density page 4:
\(p(z_t | z_{t-1}) = \frac{\lambda(z_{t-1}, z_t)}{\int \lambda(z_{t-1}, e) \, de}\).

KDE page 4:
\(\hat{\lambda}(s) \equiv \frac{1}{0_{\hat{h}}(s)} \sum_{A=1}^n K_{\hat{h}}(s - s_A)\). Wait text uses >_î and 0_î. I'll write: \(\hat{\lambda}(s) \equiv \frac{1}{\omega_{\hat{h}}(s)} \sum_{A=1}^n K_{\hat{h}}(s - s_A)\), citing page 4, noting \(\omega\) edge correction.

LGCP page 5: \(\lambda(\tilde{s}) = \exp(\eta(\tilde{s}))\), \(\eta\) GP.

Application: 25 Hz page 1, coordinates (!,#) page 1, ball (!,#,&) page 1. 1230 games page 5. 2,280,281 transitions page 5. Four-dimensional LGCP page 5. Grid 1.25x1.25 ft, n=1480, n_c=2,190,400 page 5. k=50, k_c=2500 page 5. r=15 regions page 5. Model \(\log \lambda(s) = Z\beta + X\gamma\) page 5.

Units: If coordinates in feet, intensity over 4D origin-destination space has units ft^{-4}; conditional density over destination has units ft^{-2}; probability dimensionless. Time at 25 Hz implies sampling interval Δt = 0.04 s.

RETROCAUSAL_GENEALOGY:
Historical: Cervone et al. 2016 JASA EPV page 1; West & Harrison dynamic linear models page 2; Birch 1963 page 3; Møller & Waagepetersen 2004 page 3; Diggle 1985 page 4; Higdon 2002 page 5; INLA etc page 5.
Lineage: Markov transition matrix -> multinomial-Poisson equivalence -> spatial point process -> LGCP with process convolutions -> NBA tracking application.
Multi-week traps: temporal homogeneity (page 8) violated over weeks; Blatt fired Jan 22 2016 page 7; team personnel changes; the paper compares 41 games pre/post to capture coaching shift, showing regime change within a season. This is a multi-week structural break trap.

RECURSIVE_THEORY_OF_MIND:
Interpret headers:
- Crisis habit regression: Under defensive pressure, ball movement regresses to high-frequency transition patterns encoded in the intensity surface (e.g., Curry on-court vs off page 7; Blatt tenure page 7).
- Counter-trap: Opposing defense observes transition surface and adjusts positioning, invalidating the stationarity of λ(s); model assumes exogenous movement, but movement is endogenous to defensive adaptation.
- Clock: Game/shot clock introduces non-stationarity; temporal homogeneity assumption breaks near end of shot clock or game. No clock variable in model page 5-8.
I'll write carefully without toy equations.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: court geometry, 3-point line discontinuity (page 1, 5, 9); grid cell 1.25 ft may be too coarse to capture line exactly if line doesn't align (page 5 says arbitrary). Biomechanical: first-order Markov treats players as billiard balls (page 1), ignores momentum, acceleration limits, physiological fatigue (not modeled). Weather: indoor arena, negligible; but venue-specific effects (e.g., altitude? not in paper) could be veto. Veto proofs:
- If the three-point line discontinuity is not aligned with grid cell boundaries, macro transition indicators Z mis-specify the jump, biasing log intensity near the line (page 5). Veto triggered when residual error concentrates near x = three-point line coordinate.
- If sampling rate falls below 25 Hz (e.g., 12.5 Hz), the Markov assumption P(z_t|z_{t-1}) aliases velocity, violating the billiard-ball approximation (page 1).
- LGCP separability/concession: separable covariance and Kronecker product (page 5) vetoed if origin-destination coupling is non-separable (e.g., full-court passes after turnovers).

RLVR_COUNTERFACTUAL_VETOES:
Three verifiable scenarios with predictions:
1. Mid-season coaching/trade regime shift. Counterfactual: Fit LGCP on games 1-41 (Blatt) and predict games 42-82. Veto if KL divergence between predicted and observed transition density exceeds threshold. Prediction: The paper's own Figure 3 (page 7-8) shows elevated entropy under Blatt; model fitted on full season would mispredict post-firing concentration around origin. Verifiable by refitting on sliding 10-game windows and monitoring deviance.
2. Separability failure. Counterfactual: Compare full non-separable 4D GP vs separable Kronecker approximation on a held-out subset of transitions. Veto if out-of-sample log-score difference is statistically significant (paired t-test, p<0.01). Prediction: Long-distance transitions (e.g., outlet passes after defensive rebounds) will show largest residuals because origin-destination coupling is not separable.
3. Event-thinning bias. Counterfactual: Model fitted only on event transitions (2,280,281) vs all ball locations. Veto if destination distribution near basket differs by KS test p<0.001. Prediction: Event-only surface overstates mass near scoring regions relative to continuous movement because dribbles without recorded events are omitted (page 5 thinning).

Now write final output with exact XML tags. Ensure word count. Let's estimate words as I write. I'll aim for rich content.

Check: No mention of betting. No spreads, totals, moneylines, odds. Good.

Check: Formal LaTeX equations. Good.

Check: Exact [PAGE N] markers. Good.

Check: Verbatim quotes. Include a few.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation proceeds through three linked equivalences established on pages 2-4. First, a first-order Markov chain over a partitioned court domain \(S \subseteq \mathbb{R}^V\) yields a conditional likelihood that is proportional to a product of \(m\) independent multinomial likelihoods, one per origin state. On page 3, equation (1) expresses this likelihood in terms of transition probabilities \(p_{AB}\) and observed transition counts \(n_{AB}\), where \(n_{A\bullet} = \sum_{b=1}^m n_{AB}\). The text explicitly states: "The conditional likelihood listed in (1) is proportional to the product of > independent multinomial likelihoods [5]." This means maximum-likelihood estimation of \(p_{AB}\) reduces to \( \hat{p}_{AB} = n_{AB}/n_{A\bullet} \), but only for coarse partitions; as \(m \to \infty\), most \(\hat{p}_{AB}\) collapse to zero despite non-zero underlying densities (page 2).

Second, the multinomial-Poisson transformation on page 3 decouples estimation by supposing independent Poisson counts \(e_a \sim \text{Poisson}(\lambda_a)\). The joint distribution factorizes as \(p(e) = \text{Poisson}(j|\Lambda)\text{Multinomial}(e|w,j)\), with \(j = \sum_b e_b\), \(\Lambda = \sum_b \lambda_b\), and \(w_a = \lambda_a/\Lambda\). Birch's result, cited on page 3, shows that under the constraint \(j = \Lambda\), maximizing the multinomial density or the product of independent Poisson densities yields equivalent estimates for \(w\). Consequently, transition probabilities can be estimated via \(p_{AB} = \lambda_{AB} / \sum_{b=1}^m \lambda_{AB}\), turning a sparse multinomial problem into independent Poisson estimation.

Third, the Poisson point process (PPP) on pages 3-4 extends this to continuous space. A realization is a finite set \(s = \{s_1, \dots, s_n\}\) governed by intensity \(\lambda(s): S \to [0, \infty)\). Equation (2) on pages 3-4 gives the likelihood \(L(\lambda(\cdot); s_1, \dots, s_n) = \prod_{a=1}^n \lambda(s_a) \exp\left(-\int_S \lambda(s)\,ds\right)\). For Markov transitions, the conditional density is \(p(z_t|z_{t-1}) = \lambda(z_{t-1}, z_t) / \int \lambda(z_{t-1}, e)\,de\), a direct continuous extension of the discrete ratio. The paper then proposes two intensity estimators: a kernel density estimator (page 4) and a log-Gaussian Cox process (LGCP) where \(\lambda(\tilde{s}) = \exp(\eta(\tilde{s}))\) with \(\eta\) a Gaussian process (page 4-5). Because LGCPs are doubly stochastic, the authors use process convolutions with a truncated normal kernel and a separable covariance in origin and destination dimensions (page 5).

Gray-zone audit: (1) The data are thinned to event-recorded ball locations only, leaving 2,280,281 transitions (page 5), which conditions the surface on recorded actions and may bias continuous movement inference. (2) Temporal homogeneity is assumed but explicitly acknowledged as violated in sports (page 8). (3) The court region model uses \(r=15\) regions and a grid of \(1.25 \times 1.25\) foot squares producing \(n=1,480\) cells and \(n_c = 2,190,400\) origin-destination combinations (page 5); the grid size is called "somewhat arbitrary," creating a mis-specification risk at the three-point line discontinuity (page 1, 5, 9). (4) Collinearity prevents causal attribution of the Stephen Curry effect to Curry alone (page 7).
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, with page citations and units.

Page 3, Eq. (1) — Markov chain conditional likelihood:
\[
L = P(Z_{+} \in \,?_B \mid Z_{+-} \in \,?_A) \;\propto\; \prod_{a=1}^{m}\prod_{b=1}^{m} p_{ab}^{n_{ab}},
\qquad
n_{A\bullet} = \sum_{b=1}^{m} n_{AB},
\quad
\hat{p}_{AB} = \frac{n_{AB}}{n_{A\bullet}}.
\]
Units: \(p_{ab}\) dimensionless probabilities; counts \(n_{ab}\) dimensionless. Breakdown: as partition count \(m \to \infty\), \(\hat{p}_{ab} \to 0\) for most cells even when true \(p_{ab} > 0\) (page 2).

Page 3 — Multinomial-Poisson transformation:
Independent \(e_a \sim \text{Poisson}(\lambda_a)\) imply
\[
p(e) = \text{Poisson}(j \mid \Lambda)\;\text{Multinomial}(e \mid w, j),
\qquad
\Lambda = \sum_{b} \lambda_b,\quad w_a = \frac{\lambda_a}{\Lambda},
\quad j = \sum_b e_b.
\]
Under constraint \(j=\Lambda\), Birch's equivalence gives \(p_{AB} = \lambda_{AB} / \sum_{b}\lambda_{AB}\) (page 3).

Page 3-4, Eq. (2) — Poisson point process likelihood over domain \(S\):
\[
L\bigl(\lambda(\cdot); s_1, \dots, s_n\bigr)
= \prod_{a=1}^{n} \lambda(s_a)\,
\exp\!\left(-\int_{S} \lambda(s)\,ds\right).
\]
Units: If court coordinates are in feet, the joint origin-destination domain is \(\mathbb{R}^4\); intensity \(\lambda\) has units \(\text{ft}^{-4}\), so \(\int_S \lambda(s)\,ds\) is dimensionless (expected count).

Page 4 — Conditional transition density from intensity:
\[
p(z_t \mid z_{t-1})
=
\frac{\lambda(z_{t-1}, z_t)}
{\displaystyle \int \lambda(z_{t-1}, e)\,de}.
\]
Units: Numerator \(\text{ft}^{-4}\); denominator integrates over destination \(\text{ft}^2\), yielding \(\text{ft}^{-2}\); ratio is a 2-D spatial density over destination location in \(\text{ft}^{-2}\), with total probability dimensionless and equal to 1.

Page 4 — Kernel density intensity estimator:
\[
\hat{\lambda}(s) \equiv \frac{1}{\omega_{\hat{h}}(s)}
\sum_{A=1}^{n} K_{\hat{h}}(s - s_A),
\]
where \(K_{\hat{h}}\) is a kernel with bandwidth \(\hat{h}\) and \(\omega\) is an edge correction. Units: \(\text{ft}^{-4}\) in 4-D origin-destination space.

Page 5 — Log Gaussian Cox process:
\[
\lambda(\tilde{s}) = \exp\bigl(\eta(\tilde{s})\bigr), \qquad \eta \sim \text{GP}.
\]
Computational concession: process-convolution basis expansion with separable origin-destination covariance and Kronecker design matrix (page 5).

Page 5 — Application data and grid:
Optical tracking at 25 Hz (\( \Delta t = 0.04\,\text{s} \)); player coordinates \((!,\#)\) and ball \((!,\#,\&)\) (page 1). Season: 1,230 regular-season games, 2015-16 NBA (page 5). Thinned event transitions: 2,280,281 (page 5). Grid: \(1.25 \times 1.25\) ft squares, \(n=1,480\) cells, \(n_c = 2,190,400\) origin-destination combinations; kernel locations \(k=50\) hexagonal, \(k_c = 2,500\) in origin-destination space (page 5). Macro model with \(r=15\) court regions:
\[
\log \lambda(s) = Z\beta + X\gamma,
\]
where \(Z\) is \(n_c \times r^2\) indicator matrix for region-to-region transitions and \(X\) is \(n_c \times k_c\) kernel weights (page 5).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage runs from classical stochastic processes to spatial statistics and finally to NBA optical tracking. Cervone et al. (2016, JASA) used Markov transition probabilities to propagate expected possession value (EPV), but assumed position as a function of location, velocity, and acceleration (page 1), a parametric restriction the present paper seeks to relax. Dynamic linear models from West and Harrison (1997) provide the conventional sequential relationship \(z_t = \Phi(z_{t-1}) + \epsilon_t\) with Gaussian error (page 2), which breaks down under nonlinear, non-Gaussian movement (page 2). The multinomial-Poisson transformation traces to Birch (1963) and subsequent refinements by Palmgren (1981) and Baker (1994) (page 3), establishing that Poisson factorization can recover multinomial parameters under the total-count constraint. Poisson point process theory draws on Møller and Waagepetersen (2004) and Banerjee et al. (2015) (page 3); kernel smoothing inherits from Diggle (1985) (page 4); and the computational workaround—process convolutions—comes from Higdon (2002) (page 5).

The multi-week trap is structural non-stationarity embedded in a single-season fit. The paper analyzes all 1,230 games of the 2015-16 season but acknowledges on page 8: "Thus far we have assumed that transition densities are temporally homogeneous. Due to the nature of sports in general, this is a simplifying assumption that will frequently be violated." Within that season, David Blatt was fired as Cleveland Cavaliers head coach on 22 January 2016 (page 7), creating an explicit mid-season regime shift. The authors compare 41 games under Blatt to 41 games after his firing (page 7), demonstrating that coaching changes alter the transition surface—Blatt-era games show "greater offensive entropy and increased ball movement" (page 8). This is a multi-week trap because a stationary LGCP fitted across the full season conflates two distinct coaching regimes, biasing the estimated intensity and invalidating any inference that assumes a single data-generating process across weeks. Similarly, roster changes, injuries, and tactical adjustments over an 82-game season violate temporal homogeneity, meaning the transition surface fitted on early-season data is not transportable to late-season play without re-estimation or time-varying coefficients.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under defensive pressure, offensive ball movement tends to regress to high-frequency attractors encoded in the empirical intensity surface. The paper documents this for individual actors: when Stephen Curry is on the court, the probability of moving into the key region is 0.151 higher than when he is off, conditioned on the same origin (page 7). Under Blatt, Cleveland exhibited elevated transition density to a wide range of locations from a conditioned point on the right side of the key; after his firing, probability mass concentrated near the origin, indicating lower offensive entropy (page 7-8). These are crisis-habit regressions in the sense that ball movement collapses to player- or coach-specific transition modes when situational stakes rise, and the LGCP surface captures the mode but not the causal pressure that triggers the regression.

Counter-trap: The model treats transitions as emanating from an exogenous intensity \(\lambda(s)\), but in a strategic game the defense observes the same transition surface and adjusts positioning. If the opposing defense learns that Golden State transitions into the key more frequently from a given origin (page 6-7), it will shift resources to that region, endogenously altering the very transition density the model estimates. Because the paper's framework does not include a defensive reaction term or game-theoretic equilibrium condition, the estimated \(\lambda(s)\) is valid only as a descriptive summary of past behavior, not as a forward prediction against an adapting opponent. Any counter-trap that successfully shrinks the observed transition density into the key invalidates the surface's predictive use for that origin.

Clock: The model assumes temporal homogeneity (page 8) and includes no game-clock or shot-clock covariate. Basketball movement is strongly clock-dependent: end-of-shot-clock possessions exhibit different transition dynamics than early possessions, and end-of-game strategy alters ball movement. Without a time-varying intensity \(\lambda(s; t_{\text{clock}})\), the model cannot distinguish a transition driven by offensive scheme from one driven by clock pressure. The authors flag time-varying transitions as future work (page 8), which means the current surface implicitly averages over clock states, blurring crisis-habit regression with clock-induced non-stationarity.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The court is modeled as a partitioned domain with a \(1.25 \times 1.25\) ft grid, yielding 1,480 cells and 2,190,400 origin-destination combinations (page 5). The three-point line is a hard spatial discontinuity; the authors handle it via \(r=15\) macro regions in the design matrix \(Z\) (page 5). Veto condition: if the grid cell boundaries do not align with the physical three-point line coordinates, the indicator matrix \(Z\) misplaces the discontinuity, and the log-intensity surface \(\log\lambda(s) = Z\beta + X\gamma\) (page 5) will smooth across a true jump, biasing estimates near the line. Verifiable veto trigger: residual error concentrated at the three-point line coordinate invalidates the region-decomposition assumption.

Biomechanical layer: Page 1 critiques Markov models for treating players "as billiard balls" where position depends only on the previous position. This ignores momentum, acceleration limits, and physiological constraints. Veto condition: if the sampling rate drops below the optical tracking standard of 25 Hz (\(0.04\) s intervals, page 1), the first-order Markov assumption aliases player velocity and the billiard-ball approximation fails. Verifiable veto trigger: subsampled tracking data at 12.5 Hz or lower should produce significantly worse held-out transition-density log-scores than 25 Hz data.

Weather layer: NBA games are indoors, so meteorological weather is negligible. However, venue-specific physical effects (e.g., backboard dimensions, rim height, court surface friction) are invariant across the data and thus absorbed into \(\lambda(s)\). No weather veto applies because the domain is environmentally controlled; any cross-arena generalization would require verifying that court dimensions and camera calibration are identical, which is not addressed in the paper.

Cross-layer adjudication summary: A transition surface is vetoed if (i) the three-point line discontinuity is misaligned with the grid, (ii) temporal sampling aliases biomechanical motion, or (iii) the separable covariance/Kronecker concession fails to capture origin-destination coupling (page 5). Under any of these, the LGCP intensity \(\lambda(\tilde{s}) = \exp(\eta(\tilde{s}))\) (page 5) no longer identifies the true conditional transition density \(p(z_t|z_{t-1})\) (page 4).
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) counterfactual veto scenarios with testable predictions:

Veto Scenario 1 — Mid-season coaching regime shift. Counterfactual: Fit the LGCP on games 1–41 (David Blatt as Cavaliers coach) and predict transitions for games 42–82 (post-firing). Veto rule: if the Kullback-Leibler divergence between predicted and observed conditional transition densities on the post-firing holdout exceeds a pre-set threshold, the stationary model is vetoed. Prediction: The paper's Figure 3 shows Blatt-era density spread across a wide range of destinations versus post-firing concentration near the origin (page 7-8). Therefore, a full-season fit will systematically over-predict diffuse movement and under-predict local concentration after January 22. Verification: Refit on sliding 10-game windows and monitor out-of-sample deviance; a structural break at the firing date confirms the veto.

Veto Scenario 2 — Separability failure of the covariance. Counterfactual: Compare the separable Kronecker process-convolution approximation against a full non-separable 4-D Gaussian process on a held-out random subset of transitions. Veto rule: if the paired difference in out-of-sample log predictive density is statistically significant (e.g., paired t-test, \(p < 0.01\)), the separability concession is vetoed. Prediction: Long-distance transitions—such as outlet passes after defensive rebounds or full-court advances after turnovers—exhibit strong origin-destination coupling that a separable kernel cannot capture. These transitions should show the largest residuals. Verification: Compute Moran's I on spatial residuals; significant positive autocorrelation in the origin-destination residual matrix rejects separability.

Veto Scenario 3 — Event-thinning selection bias. Counterfactual: Fit the model on all recorded ball locations versus only the 2,280,281 thinned event transitions (shots, passes, dribbles flagged as events, page 5). Veto rule: if the destination distribution near the basket differs between the two fits by a Kolmogorov-Smirnov test (\(p < 0.001\)), the thinning procedure is vetoed as biasing the surface. Prediction: The event-only surface overstates mass near scoring regions because non-event dribbles that move the ball without a recorded action are omitted. Verification: Compare kernel-smoothed destination histograms from the full sequence against the thinned sequence; systematic divergence near the basket confirms selection bias.
</RLVR_COUNTERFACTUAL_VETOES>