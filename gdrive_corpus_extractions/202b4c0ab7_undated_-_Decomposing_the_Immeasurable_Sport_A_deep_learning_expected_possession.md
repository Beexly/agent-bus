---
source: "undated - Decomposing the Immeasurable Sport A deep learning expected possession value framework for soccer - Fernandez et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 20
model: baidu/ernie-5.5-flash-preview:free
words: 4969
---

<NATIVE_REASONING>
The user wants a deep, formal analysis of the Fernández, Bornn & Cervone 2019 MIT Sloan paper "Decomposing the Immeasurable Sport: A deep learning expected possession value framework for soccer."

The instructions require:
1. Zero betting lines - I'll comply.
2. Zero toy equations - formal LaTeX, units, page citations with verbatim quotes, breakdown regimes.
3. >= 1,000 word depth across exact XML sections.

Let me reconstruct the actual equations. The paper mentions:
- Equation (1): EPV as composition of independent models for passes (ρ), shots (ζ), ball-drives (δ). Text says "Equation (1) presents EPV, the expected outcome of the possession given all the spatiotemporal information at time t (T_t), as the composition of independent models for three main types of actions (A): passes (𝜌), shots (𝜍) and ball-drives (𝜕)."

The equations themselves aren't rendered in the extracted text (the (1) and (2) placeholders appear blank), but I can reconstruct the standard form based on the description. Let me be careful and honest — the equations are shown as (1) and (2) but their mathematical content wasn't captured in the OCR. I should state this and reconstruct the canonical form.

The standard EPV decomposition from this paper:

EPV(T_t) = Σ_{a ∈ A} P(a | T_t) · V(a, T_t)

where A = {pass (ρ), shot (ζ), ball-drive (δ)}.

Actually, the standard formulation is:

$$EPV(T_t) = \sum_{a \in A} \mathbb{P}(a \mid T_t) \, E[\text{outcome} \mid a, T_t]$$

where the action likelihood P(a|T_t) is modeled by a CNN on pitch control/influence surfaces, and the value expectations are learned by deep neural networks.

For passes (Equation 2), the decomposition into success and turnover:

$$V_\rho(y \mid T_t) = \mathbb{P}(\text{success} \mid T_t, y) \cdot E[\text{EPV} \mid \text{successful pass to } y, T_t] + \mathbb{P}(\text{turnover} \mid T_t, y) \cdot E[\text{EPV} \mid \text{turnover to } y, T_t]$$

where y is the destination location on the pitch, and probabilities are estimated via logistic regression.

Let me define notation carefully:
- T_t: full spatiotemporal information at time t
- A: set of action types {ρ (pass), ζ (shot), δ (ball-drive)}
- P(a|T_t): action likelihood (modeled via CNN on pitch control surfaces)
- V_a: expected value of action a

EPV ∈ [-1, 1]: -1 means goal for defending team after immediate regain, +1 means goal for attacking team.

Let me now write the full response following the exact XML sections required. I need >= 1000 words total across those sections, with THINK_TRACE >= 400 words.

Let me think about the technical content deeply:

**EPV framework:**
- EPV(T_t) real number in [-1, 1]
- Value +1 = attacking team scores, -1 = defending team scores after immediate possession regain
- Frame-by-frame estimation ("stock ticker")
- Decoupled: deep learning components + high-level stochastic process model

**Equation 1 (composition):**
$$EPV(T_t) = \sum_{a \in A} \mathbb{P}(a \mid T_t) \, \mathbb{E}[EPV \mid a, T_t]$$

with A = {ρ, ζ, δ}.

**Equation 2 (pass decomposition):**
Pass value = probability-weighted sum of successful pass value and turnover value at each destination y.

$$V_\rho(y) = p_{succ}(y) \cdot v_{succ}(y) + p_{turn}(y) \cdot v_{turn}(y)$$

with p_succ + p_turn = 1 (complementary, since a pass either succeeds or fails).

**Modeling components:**
- Pass/turnover probabilities: logistic regression
- Action likelihood: CNN on pitch control & pitch influence surfaces (based on reference [9] Fernández & Bornn 2018 "Wide open spaces")
- Pass and ball-drive value expectation: deep neural networks
- Shots: variants of expected goals (xG) models

**Pitch control:** probabilistic surface PCS(x, y, t) ∈ [0, 1] representing probability a team controls a location.

**Context via pressure lines:**
- Spectral clustering on mean X-coordinate of defenders in a 2-second window, fixed k=3 clusters → three pressure lines
- Relative zones Z1 (behind first line), Z2 (between first and second), Z3 (between second and third), Z4 (between third line and goal)

**Metrics derived:**
- EPV added = EPV_after − EPV_before
- Reward = pass EPV component (expected value if successful)
- Risk = turnover EPV (probability opponent scores if turnover)
- Risk-reward balance

**Data:**
- STATS LLC optical tracking, 2012-2013 Premier League
- Footovision optical tracking, FC Barcelona 2017-2018 and 2018-2019 La Liga

Now let me think about breakdown/singularity regimes (as the invariants require "exact singularity/breakdown regimes"):

1. **Spatial discretization of infinite action space:** The model provides continuous surfaces, so "the set of possible actions is theoretically infinite." To make decision analysis tractable they discretize. This is a genuine singularity/breakdown: the continuous surface → discrete selection is a projection that loses information. Quote from [PAGE 16].

2. **No body orientation:** [PAGE 17] "the data (and hence the model) lacks body orientation information" — this is a stated limitation. The model recommends a pass that's physically implausible due to required body rotation.

3. **Average player assumption:** Model trained on average Premier League/La Liga player, "does not have individual player information." Breakdown when applied to exceptional players (Messi keeping ball).

4. **Ball-in-flight gap:** [PAGE 16] "During the time between a pass or a shot being taken until it reaches its destination... the EPV is not calculated" — EPV is undefined during ball transit. A genuine domain restriction / gap in the process.

5. **EPV normalization:** EPV ∈ [-1,1] but the "immediate possession regain" definition for -1 introduces asymmetry: a turnover doesn't automatically mean -1; it means the defending team's possession value, which the model must also evaluate.

6. **Plateau definition:** possession plateaus are windows where EPV stabilizes — a quasi-stationary detection problem.

7. **Spectral clustering k=3 fixed:** assumption that exactly 3 pressure lines exist; breakdown when defending team doesn't organize into 3 vertical bands (e.g., man-marking, high press with 2 lines, or back-5).

Now, RLVR counterfactual vetoes — I need 3 verifiable veto scenarios with predictions. These should be falsifiable predictions about when the model breaks.

Let me think about "crisis habit regression" and "clock" for RECURSIVE_THEORY_OF_MIND. Since there are no teams playing a specific match here (this is a methodology paper, not a match prediction), I'll interpret the ToM section around the adversarial dynamic between the modeler and the tactical reality — the coach's counter-trap, the player's habit, and the "clock" of possession phases. The "clock" is interesting: soccer has no possession time limit, which the paper explicitly notes [PAGE 2]: "there is no time limit for soccer possessions (aside from the 45 minute half)." This is a key structural difference from basketball EPV. I'll build the ToM around the recursive loop: player decision ↔ model prediction ↔ opponent adaptation ↔ phase clock.

Wait — I need to be careful about the "clock." The paper says there's no shot clock / possession clock. But there's the match clock (45-min halves) and the 2-second windows for spectral clustering, and quarter-second discretization of ball-drives. These are the relevant "clocks" in the model. I'll use these.

Let me also be honest about what I can and cannot verify. The equations (1) and (2) were not rendered in the provided source text (they appear as blank placeholders). I should note this clearly and reconstruct the canonical/standard form consistent with the textual description, labeling it as reconstruction. This aligns with the verification/honesty guidelines — I must not present reconstructed equations as verbatim when they weren't in the source. The invariants demand "exact [PAGE N] markers and verbatim quotes" — I'll provide verbatim quotes for the textual claims and clearly mark equation content as reconstruction from the surrounding prose since the equation images weren't OCR'd.

Let me now think about the formal LaTeX I'll present with units:

1. EPV definition: dimensionless, EPV(T_t) ∈ [-1, 1].

2. Master decomposition (Eq 1, reconstructed):
$$EPV(T_t) = \sum_{a \in \{\rho,\zeta,\delta\}} \lambda_a(T_t)\, \mu_a(T_t)$$
where λ_a(T_t) = P(action a | T_t) is dimensionless probability (from CNN), μ_a(T_t) = E[EPV | do(a), T_t] ∈ [-1,1].

Actually more precisely, for passes and drives which have a continuous destination, it's an integral over destination locations y:
$$EPV(T_t) = \int_{\Omega} \lambda_\rho(y\mid T_t)\,\mu_\rho(y\mid T_t)\, dy + \int_{\Omega} \lambda_\delta(y\mid T_t)\,\mu_\delta(y \mid T_t)\, dy + \lambda_\zeta(T_t)\,\mu_\zeta(T_t)$$

Hmm, but the paper frames it as action types with the value surfaces being over locations. Let me be careful. The action likelihood CNN gives the probability/density of each action type and (for passes/drives) each destination. Shots are from the current location. Let me present both the discrete-type view and the continuous-destination view.

3. Pass decomposition (Eq 2, reconstructed): For a pass to destination y:
$$\mu_\rho(y \mid T_t) = \underbrace{\Pr(\text{succ}\mid T_t,y)}_{p(y)}\, V^{\text{succ}}_\rho(y\mid T_t) + \underbrace{\big(1 - p(y)\big)}_{1-p(y)}\, V^{\text{turn}}_\rho(y\mid T_t)$$

where p(y) is the logistic-regression pass-completion probability at destination y, V^succ is expected EPV given completion, V^turn is expected EPV given turnover (this is the "risk").

Units: all V terms dimensionless in [-1,1]; p(y) dimensionless in [0,1].

4. EPV added:
$$\Delta EPV_t = EPV(T_{t^+}) - EPV(T_{t^-})$$

5. Reward and risk (Section 4.3):
- Reward = V^succ_ρ (pass EPV component)
- Risk = V^turn_ρ (turnover EPV)
- "difference between reward and risk": Reward − Risk

6. Pitch control surface: PCS(x,y,t) ∈ [0,1]. The action-likelihood CNN operates "on top of pitch control and pitch influence surfaces." Influence surface is the decaying contribution of each player, e.g., influence_i(x,y) ~ exp(−d²/ (2σ²)) type kernels, though the exact form from [9] isn't given here.

7. Pressure line extraction via spectral clustering: Given the set of mean X-coordinates {x_i} of defending players over a 2-second window, spectral clustering with k=3 partitions them into three groups → three vertical lines. This is on the mean X coordinate.

Now singularity/breakdown regimes I can formalize:

- **Normalization asymmetry / turnover definition:** The −1 endpoint requires "a goal by the defending team after an immediate possession regain." So EPV is not symmetric around a simple turnover model; the value of a turnover is itself a full EPV evaluation of the opponent's ensuing possession. If the model's turnover value V^turn is evaluated as the opponent's EPV, then there's a sign convention to track.

- **Infinite action set / discretization projection:** "the set of possible actions is theoretically infinite" [PAGE 16]. The decision analysis projects onto a finite set: best pass to each teammate, next-second ball-drive location by velocity, shoot-from-current. This projection is a non-injective map from a continuous surface to a discrete argmax set — information loss singularity.

- **Ball-in-flight undefined:** EPV(T_t) is undefined for t in (pass-release, first-touch). Domain hole in the stochastic process.

- **k=3 clustering breakdown:** If defending team does not present 3 vertical bands (e.g., back-4 with a high press = effectively 2 lines, or a back-5 = 4 lines), the relative-zone contextualization Z1–Z4 degenerates.

- **Average-player bias:** μ_a is trained on league-average; for out-of-distribution players (Messi), the argmax action diverges from true optimal. This is a covariate-shift breakdown.

Now RLVR counterfactual vetoes (3 falsifiable scenarios):

Veto 1: **Body-orientation blindness.** The paper itself states the model fails to account for body orientation [PAGE 17]. Prediction: In any possession where the model's "best pass" requires a >90° body rotation for the ball-carrier (e.g., a backward pass while facing forward under pressure), the executed pass rate for that option will be materially below the model's λ_ρ assignment, and realized EPV-added will fall below the model's μ^succ_ρ prediction. Falsifiable via tracking + orientation annotation.

Veto 2: **High-press line collapse (k=3 violation).** Prediction: In matches where a defending team defends with a compact 2-line block (mid/low block) or an aggressive man-oriented press, the spectral-clustering k=3 partition will merge or split lines inconsistently, and the relative-zone EPV-added estimates for Z2/Z3 will show inflated variance and reduced predictive calibration vs. build-up phases. Falsifiable: compare calibration (reliability) of ΔEPV by phase.

Veto 3: **Turnover-value non-stationarity / counterattack.** The turnover EPV V^turn depends on the opponent's counterattack potential, which the average-player model may underweight for elite counter-attacking teams. Prediction: For passes completed in advanced zones (Z3/Z4) by teams facing elite transition sides, the realized post-turnover opponent EPV will exceed V^turn, causing the model to systematically under-predict risk (over-value ambitious forward passes). Falsifiable via realized post-turnover outcomes.

I could add a 4th around the ball-in-flight gap but 3 is required. Let me make them crisp and each with a concrete, measurable prediction.

Now let me think about RETROCAUSAL_GENEALOGY — historical/scientific lineage:
- Basketball EPV lineage: Cervone et al. 2016 JASA "multiresolution stochastic process model" [1]; POINTWISE 2014 [2].
- Soccer event-value lineage: Rudd 2011 Markov chains [7]; Decroos et al. 2018 "Actions Speak Louder Than Goals" (VAEP) [8]; Heiner et al. 2014 [6].
- Pass risk/reward: Power et al. 2017 [3]; Spearman et al. 2017 physics-based pass probability [11].
- Space creation / pitch control: Fernández & Bornn 2018 "Wide Open Spaces" [9].
- Off-ball / dangerousity: Link et al. 2016 [4]; Spearman 2018 "Beyond Expected Goals" [5].
- Formations: Wei et al. 2013 [13]; Decroos et al. 2017 [12].
- Dick & Brefeld 2019 neural positioning [10].

The "multi-week traps" — I'll interpret as: the analytic community's repeated traps (accumulation fallacy of counting passes; the Tiki-taka pass-count trap cited on PAGE 6 with Spain's 1100 passes but elimination; distance-traveled trap on PAGE 15). These are conceptual "traps" the field fell into repeatedly.

Multi-week traps could also refer to the modeling lineage pitfalls: Markov models' low interpretability (PAGE 2-3), summary-statistic collapse of pass distributions (PAGE 9-10 — "coloring based on a sole summary statistic such as the mean or median EPV added will provide a considerable loss of information").

Let me now write everything out, aiming for depth and hitting each required section. Let me make sure total >= 1000 words, THINK_TRACE >= 400 words.

Let me be mindful of the invariants: no betting lines (easy — pure analytics), no fake toy equations (I'll use only defensible formal equations and clearly label reconstructions), page citations with verbatim quotes.

One honesty point: I must flag that equations (1) and (2) were not present as rendered math in the provided OCR (they show as "(1)" and "(2)" with blank content), so my LaTeX is a reconstruction from the surrounding prose. This is important for the "zero toy equations" invariant — I should not fabricate and pass off as verbatim. I'll reconstruct the canonical form and label it explicitly as reconstruction consistent with the text.

Let me draft.

For THINK_TRACE (>=400 words), I'll do the deep multi-hop derivation and gray-zone audit: how EPV decomposes, why decoupled, the units, the asymmetries, the gray zones (ball-in-flight, discretization, average player, clustering).

Let me write carefully and count roughly.

I'll write the full thing now. I want it thorough but not bloated. Let me target roughly: THINK_TRACE ~450, SOURCE_OPERATORS ~350, RETROCAUSAL ~200, ToM ~200, VETO ~250, RLVR ~300. Total ~1750 words. Good.

Let me make the LaTeX clean.

Actually for the master equation, let me reconsider the structure based on the text: "the composition of independent models for three main types of actions (A): passes (𝜌), shots (𝜍) and ball-drives (𝜕). Different sets of these components are estimated independently, such as the value surface for passes, the value surface for ball-drives, the likelihood of one of these events taking place, and the expectation of goals for shots."

So EPV = sum over action types of [likelihood of event × value expectation]. For passes and drives, value is a surface over destinations y; likelihood includes choosing that action and destination. For shots, it's the goal expectation from current location.

I'll present:

$$EPV(T_t)=\underbrace{\int_{\Omega}\!\lambda_{\rho}(y\mid T_t)\,v_{\rho}(y\mid T_t)\,dy}_{\text{passes}}+\underbrace{\int_{\Omega}\!\lambda_{\delta}(y\mid T_t)\,v_{\delta}(y\mid T_t)\,dy}_{\text{ball-drives}}+\underbrace{\lambda_{\zeta}(T_t)\,v_{\zeta}(T_t)}_{\text{shots}}$$

with λ being action(-location) likelihood from the CNN over pitch-control/influence surfaces, v being the value expectation (deep nets for pass/drive; xG-type for shots).

And Equation 2:

$$v_{\rho}(y\mid T_t)=p_{\mathrm{succ}}(y\mid T_t)\,v^{\mathrm{succ}}_{\rho}(y\mid T_t)+\big(1-p_{\mathrm{succ}}(y\mid T_t)\big)\,v^{\mathrm{turn}}_{\rho}(y\mid T_t)$$

where p_succ from logistic regression.

Risk R(y) = v^turn_ρ(y|T_t); Reward W(y) = v^succ_ρ(y|T_t). Net = W − R.

Good.

Pitch control: $\text{PCS}(x,y,t)\in[0,1]$. Influence: I'll note it's from [9] and give the typical form without overclaiming — I'll present it as "the statistical pitch-control model of [9]" and give the generic control-probability form, clearly labeled as the standard construction, not verbatim from this paper.

Actually, to avoid a "toy equation," I'll keep pitch control qualitative + cite [9], since the exact functional form isn't in this paper. I'll mention the standard logistic-of-influence-difference form as background but flag it's from the cited work.

Spectral clustering: given defender mean X-coords in 2s window, k=3. I can write the objective generically. I'll keep it as described (spectral clustering, k=3) with the verbatim quote.

Let me write it all now.

Let me count words roughly as I go to ensure depth.

I'll write the response now.
</NATIVE_REASONING>

<THINK_TRACE>

The paper defines a single scalar state variable and then refuses to treat it as a monolith. That refusal is the whole intellectual move, so the derivation has to begin by reconstructing why. The state is $T_t$, "the full spatiotemporal information at time $t$" [PAGE 3], meaning all 22 player coordinates, ball position, velocities, and derived context at frame $t$. Onto this the authors map a real-valued functional $EPV(T_t)\in[-1,1]$, where the endpoints are not symmetric scores but conditional eventualities: "$1$" is a goal for the attacking team and "$-1$" is "a goal by the defending team (-1) after an immediate possession regain" [PAGE 2]. This asymmetry is the first gray zone. A turnover is not automatically $-1$; it triggers a fresh evaluation of the opponent's ensuing possession. So the "$-1$" branch is itself a recursive EPV evaluation, and any accounting of turnover value $v^{turn}$ inherits that recursion. If a modeler forgets this and treats turnover as a flat penalty, the risk term is miscalibrated from the root.

The second structural decision is decoupling. Rather than regressing EPV directly, they factor it into (i) the likelihood that each action type occurs and (ii) the expected value conditional on that action, summed over passes $\rho$, shots $\zeta$, and ball-drives $\delta$ [PAGE 3]. The payoff of this factorization is interpretability: you can inspect the value surface for passes to every pitch location, decompose it further into success and turnover surfaces, and read off reward and risk separately. The cost is that the factors are estimated "independently" [PAGE 3] and then fused by "a high-level stochastic process model" [PAGE 2]. Independence-then-fusion is an approximation; the true joint distribution over (action, location, outcome) has cross-terms the decoupled estimator cannot represent. That is a modeling singularity worth flagging: the fused EPV is exact only if action likelihood and conditional value are truly variation-independent, which pitch control feedback loops (a dangerous pass changes defensive positioning, which changes future likelihoods) violate.

The pass equation is where the framework earns its keep. Each destination $y$ carries a completion probability $p_{succ}(y)$ from logistic regression and two conditional values, a success value and a turnover value. The pass value is their probability-weighted blend. Because $p_{succ}$ is logistic (bounded in $[0,1]$) and both values live in $[-1,1]$, the pass value is a convex combination and is itself bounded in $[-1,1]$ — a clean, verifiable invariant. The "EPV added" metric is then a first difference $\Delta EPV_t = EPV(T_{t^+})-EPV(T_{t^-})$, and reward/risk are simply the two conditional surfaces read off the decomposition.

Now the gray zones the paper openly concedes. First, the ball-in-flight hole: "During the time between a pass or a shot being taken until it reaches its destination ... the EPV is not calculated" [PAGE 16]. The stochastic process has a domain gap; $T_t$ during ball transit is undefined, so the "stock ticker" [PAGE 2] flatlines mid-action. Second, the infinite-action problem: "the set of possible actions is theoretically infinite" [PAGE 16], forcing a non-injective projection onto a finite candidate set (best pass per teammate, next-second drive point, shoot). Third, covariate shift: the value nets are trained on "an average player of the Premier League and Spanish League" and "does not have individual player information" [PAGE 17], so argmax actions can be systematically wrong for tail players — the Messi-dribble example. Fourth, body-orientation blindness, explicitly named: "the data (and hence the model) lacks body orientation information" [PAGE 17]. These four are not footnotes; they bound the claims the framework can support.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Caveat on provenance: in the supplied source the display equations appear only as the placeholders "(1)" and "(2)" with no rendered math [PAGE 3–4]. The LaTeX below is a reconstruction consistent with the verbatim prose ("the composition of independent models for three main types of actions (A): passes (𝜌), shots (𝜍) and ball-drives (𝜕)" [PAGE 3] and "a further decomposition of the passing model to account for the success of a pass" [PAGE 4]); it is not a verbatim transcription.

Master decomposition (Eq. 1, reconstructed). With $\Omega\subset\mathbb{R}^2$ the pitch, $T_t$ the full state, $\lambda$ the action(-location) likelihood from the CNN, and $v$ the conditional value expectation:

$$EPV(T_t)=\int_{\Omega}\lambda_{\rho}(y\mid T_t)\,v_{\rho}(y\mid T_t)\,dy+\int_{\Omega}\lambda_{\delta}(y\mid T_t)\,v_{\delta}(y\mid T_t)\,dy+\lambda_{\zeta}(T_t)\,v_{\zeta}(T_t).$$

Units: $EPV$ dimensionless in $[-1,1]$; $\lambda_\rho,\lambda_\delta$ are densities over location (units $\text{m}^{-2}$, integrating to a dimensionless probability); $\lambda_\zeta$ dimensionless; all $v$ dimensionless in $[-1,1]$. The CNN operates "on top of pitch control and pitch influence surfaces based on a recent statistical model for pitch control [9]" [PAGE 4]; the control surface $\mathrm{PCS}(x,y,t)\in[0,1]$ is a probability field, and influence surfaces are the per-player decaying contributions defined in Fernández & Bornn [9] (functional form not restated in this paper, so not reproduced here to avoid a fabricated kernel).

Pass decomposition (Eq. 2, reconstructed). For a pass to destination $y$:

$$v_{\rho}(y\mid T_t)=p_{\mathrm{succ}}(y\mid T_t)\,v^{\mathrm{succ}}_{\rho}(y\mid T_t)+\bigl(1-p_{\mathrm{succ}}(y\mid T_t)\bigr)\,v^{\mathrm{turn}}_{\rho}(y\mid T_t),$$

with $p_{\mathrm{succ}}\in[0,1]$ from logistic regression and $p_{\mathrm{succ}}+(1-p_{\mathrm{succ}})=1$. Because it is a convex combination, $v_\rho\in[-1,1]$ (verifiable invariant). Risk $R(y)=v^{\mathrm{turn}}_{\rho}(y\mid T_t)$; Reward $W(y)=v^{\mathrm{succ}}_{\rho}(y\mid T_t)$; the paper's "difference between reward and risk" [PAGE 13] is $W(y)-R(y)$.

Context operator (pressure lines). Verbatim: "applying spectral clustering to the set of mean X coordinate position of each defending team player in a fixed 2-second time window. For simplicity of application we fix the number of clusters to be three" [PAGE 5]. Formally, given defender mean abscissae $\{x_i\}_{i=1}^{10}$ over the window, spectral clustering with $k=3$ yields three vertical lines partitioning the pitch into zones $Z_1$ (own goal → line 1), $Z_2$ (line 1 → line 2), $Z_3$ (line 2 → line 3), $Z_4$ (line 3 → opponent goal) [PAGE 9].

Metric operators. $\Delta EPV_t=EPV(T_{t^+})-EPV(T_{t^-})$; ball-drives discretized "every quarter of second" ($\Delta t=0.25\,\text{s}$) [PAGE 16]; off-ball value sampled "every 1 second of ball-drives" [PAGE 14].

Breakdown regimes. (a) Ball-in-flight: $EPV(T_t)$ undefined for $t\in(\text{release},\text{first touch})$ [PAGE 16]. (b) Discretization projection: continuous surfaces → finite argmax set is non-injective, lossy [PAGE 16]. (c) $k=3$ degeneracy: if defenders do not form three vertical bands (back-4 in a two-line block, or a back-5), $Z_1$–$Z_4$ contextualization collapses. (d) Covariate shift: league-average value nets diverge from optimal for out-of-distribution players [PAGE 17].

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The lineage is explicitly basketball-first. Cervone et al.'s multiresolution stochastic process model for NBA possessions (JASA 2016) [1] and POINTWISE (2014) [2] supply the "stock ticker" [PAGE 2] conceit and the possession-outcome expectation. The paper is candid that the shared goal is high-level while "our approach is drastically different" [PAGE 2] because soccer has "no time limit for soccer possessions (aside from the 45 minute half)" [PAGE 2] and passes "played into open space" [PAGE 2] rather than to a player's location.

The soccer event-value branch runs through Rudd's Markov-chain framework [7], Heiner et al. [6], and Decroos et al.'s VAEP ("Actions Speak Louder Than Goals") [8]; the authors note Markov approaches give "lower interpretability" [PAGE 2–3]. Pass risk/reward descends from Power et al. [3] and Spearman et al.'s physics-based pass probabilities [11]; off-ball danger from Link et al. [4] and Spearman's "Beyond Expected Goals" [5]; space and pitch control from Fernández & Bornn "Wide Open Spaces" [9]; formation detection from Wei et al. [13] and Decroos et al. [12]; neural positioning from Dick & Brefeld [10].

The multi-week traps are the field's recurring analytical fallacies. Trap one, the volume fallacy: praising "Tiki-taka" by pass count, then noting Spain "reaching over 1100 passes in the match where they got eliminated" [PAGE 6] — counting without valuing. Trap two, the summary-statistic collapse: "coloring based on a sole summary statistic such as the mean or median EPV added will provide a considerable loss of information" [PAGE 9], which is why they use percentile-25/50/75 blocks. Trap three, the distance trap: "distances tend to vary little from one player to another, independently from their performance" [PAGE 15]. Each is a prior-generation shortcut the value decomposition is built to defeat.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Model the adversarial loop as three coupled agents: the ball-carrier (habit), the coaching staff (counter-trap), and the phase clock. There is no possession clock in soccer [PAGE 2], so the operative clocks are the match half, the $2\,\text{s}$ clustering window [PAGE 5], the $0.25\,\text{s}$ drive discretization [PAGE 16], and the possession phase (build-up → progression → finalization) that "could return to a previous phase" [PAGE 5].

Crisis-habit regression: under high pressure the ball-carrier regresses to trained habit. The paper shows exactly this — Sergi Roberto, pressed by "three different players coming from opposite directions" [PAGE 16], abandons the model's best pass (forward to Rakitic) for the habitual safe outlet (back to Iniesta). The model predicted the reward-maximizing action; the human executed the variance-minimizing one because "the required body rotation ... makes it more difficult than it seems" [PAGE 17]. Habit is a risk-averse projection of the reward surface under a physical feasibility mask the model cannot see.

Counter-trap: the opponent shapes the value surface itself. "Sometimes even marking the best player is not a good option" [PAGE 5] — Cruyff's point that denying space can beat denying a player. Xavi's stated intent, "I'm always between the opposition's two holding midfielders ... I go there to where the space is" [PAGE 6], is a second-order move: he reads the two holding mids (a ToM step) and occupies the residual gap, which is precisely a local maximum of $v_\rho$. The surface and the opponent's formation lines are co-adaptive.

Clock pressure: because there is no shot clock, patience is a legal strategy. The "possession plateaus" the authors define [PAGE 17] — windows where EPV stabilizes while the ball is recycled side to side without "overcom[ing] an additional line" — are the signature of a team waiting out the defensive shape rather than the clock. The recursive equilibrium is: reward surface invites ambition → defense compresses to lower $W(y)$ → attacker recycles (plateau) → defense must eventually expand → a $Z_3/Z_4$ gap opens → $\Delta EPV$ jumps. The model's value is detecting the jump frame, not prescribing it.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

Physical veto (body orientation). The paper self-reports the veto: "the data (and hence the model) lacks body orientation information to understand that the required body rotation to make that pass makes it more difficult than it seems" [PAGE 17]. Bi给omechanically, a pass requiring torso rotation beyond the player's current facing under time pressure has a completion probability strictly below $p_{\mathrm{succ}}(y)$ estimated without orientation. Proof sketch: let $\theta$ be the angle between facing vector and pass vector; the true completion probability is $p_{\mathrm{succ}}(y)\cdot g(\theta)$ with $g$ decreasing and $g(0)=1$; the model sets $g\equiv 1$. Therefore whenever the model's argmax pass has large $\theta$, realized success $<$ predicted, and realized $\Delta EPV <$ predicted. This is a hard physical veto on the model's reward ranking for backward/turn passes.

Biomechanical veto (drive vs. pass feasibility). Ball-drives are discretized to the "location of the player in the next second according to his velocity" [PAGE 16], i.e., a kinematic extrapolation $y_{t+1}=y_t+v_t\cdot 1\,\text{s}$. This ignores acceleration limits and defender contact. Under "intense pressure from three different players" [PAGE 16], the achievable $y_{t+1}$ lies inside the velocity-extrapolated point, so $v_\delta$ is optimistically biased in congested frames.

Weather veto. The framework is silent on weather/wet-pitch effects. Practically, ball roll and pass speed distributions shift on a wet or heavy pitch, biasing $p_{\mathrm{succ}}(y)$ for long ground passes; the logistic model, trained on 2012-13 Premier League and 2017-19 La Liga optical data [PAGE 5] without a surface-condition covariate, cannot condition on it. This is a distributional veto, not a physical impossibility, so it degrades calibration monotonically with pitch-condition divergence from the training set rather than producing a hard singularity.

Data-layer veto (ball-in-flight). By construction $EPV(T_t)$ is undefined during transit [PAGE 16]; any claim about instantaneous value mid-pass is outside the model's domain. This is an adjudicable domain hole: statements about value "as the ball travels" are inadmissible.

Net adjudication: physical (orientation) veto is decisive and self-admitted; kinematic (drive) veto is a signed bias under pressure; weather veto is a soft calibration decay; ball-in-flight is a hard domain exclusion.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Veto 1 — Orientation-blindness falsification. Hypothesis: the model's recommended best pass will be systematically biased toward high-reward passes requiring large body rotation, which players under-execute. Prediction: across a labeled sample, passes where the model's argmax location $y^\star$ has facing-to-pass angle $\theta>90^\circ$ will show realized completion rate below $p_{\mathrm{succ}}(y^\star)$ by a margin increasing in $\theta$, and realized $\Delta EPV$ below $v_\rho(y^\star)$. Falsifier: if realized success matches $p_{\mathrm{succ}}$ independent of $\theta$, the orientation veto is void. The paper's Sergi Roberto example [PAGE 16–17] is the existence proof.

Veto 2 — $k=3$ clustering collapse. Hypothesis: forcing three spectral clusters [PAGE 5] mis-partitions defenses that are not three vertical bands. Prediction: for back-4 mid/low-block and back-5 shapes, the $Z_2$/$Z_3$ relative-zone $\Delta EPV$ estimates will show degraded calibration (reliability curves deviating from diagonal) and inflated variance versus build-up phases where three bands genuinely exist. Falsifier: if calibration by phase is statistically indistinguishable across block shapes, the clustering assumption holds and the veto fails.

Veto 3 — Turnover-value non-stationarity (transition asymmetry). Hypothesis: $v^{\mathrm{turn}}_\rho$ underestimates risk for elite counter-attacking opponents because the league-average value net [PAGE 17] underweights transition speed. Prediction: for ambitious forward passes into $Z_3/Z_4$ against top transition sides, realized post-turnover opponent EPV will exceed $v^{\mathrm{turn}}_\rho$, so $W(y)-R(y)$ overstates net value and the model over-recommends forward passes in those matchups. Falsifier: if realized post-turnover EPV is calibrated to $v^{\mathrm{turn}}_\rho$ across opponent transition-strength strata, the risk term is stationary and the veto is void.

Cross-cutting invariant to test all three: since $v_\rho$ is a convex combination of two $[-1,1]$ surfaces, any veto that breaks the $[0,1]$ range of $p_{\mathrm{succ}}$ or the $[-1,1]$ range of the conditional values indicates a fusion or estimation error upstream, not a genuine value effect.

</RLVR_COUNTERFACTUAL_VETOES>