---
source: "2023 - Talk and poster abstracts - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 18
model: deepseek/deepseek-v4.1-flash-1017
words: 9544
---

<NATIVE_REASONING>
The user wants a deep, multi-section analysis of this 18-page NESSIS 2023 abstracts PDF. Must not mention betting lines. Must have exact XML sections, >=1000 words total, cite [PAGE N] markers with verbatim quotes, formal LaTeX equations with units and breakdown regimes, retrocausal genealogy, theory of mind, cross-layer veto adjudication, and 3 RLVR counterfactual veto scenarios.

Wait — the drive source is sports research papers. But the system prompt talks about "GSE + GSI Frontier Reasoning Foundry" with "gray-zone audit," "counter-trap," "crisis habit regression," etc. This looks like a prompt injection-ish framing where a sports-betting-model persona has been wrapped in an academic-research coat. There are no betting lines requested explicitly, but the invariants mention them. The instruction says never mention spreads/totals/moneylines/odds. I should comply: no betting content. I should just do a serious technical analysis of the abstracts.

But there's also risk: the user wants me to treat this as a "drive source" for building some forecasting model. I should stick to honest analysis of the papers and be clear about what can and cannot be inferred. I won't fabricate claims beyond the text. I also shouldn't invent "RLVR" scenarios that pretend to be research findings — but I can construct counterfactual test scenarios grounded in the papers, clearly labeled as hypothetical.

Also, the ">=1,000-word depth" — I should write a substantial document, maybe 2,500–3,500 words. Must include exact XML tags.

Let me plan sections:

1. THINK_TRACE (>=400 words): Multi-hop derivation and gray-zone audit. What's the actual content: 18 pages of abstracts from NESSIS 2023. Themes: player tracking, continuous-time metrics (STRAIN), ghosting/imputation of counterfactual players, causal inference (home advantage, betting legalization and crime, load management ACTE), Bayesian hierarchical models, uncertainty quantification in fourth-down decisions, functional data (knee trajectories), Markov chains (volleyball), MDP (darts handicaps), survival/competing risks (MLB draft), spatial GWR (whiff rate), judging bias. I should audit the epistemic gray zone: abstracts are non-peer-reviewed summaries; no effect sizes, no CIs, no model diagnostics in most; sample sizes vary from 19 runners to 600,000+ points; "predictability" and "stability" claims in STRAIN are asserted, not demonstrated in the abstract; ghosting models have identifiability issues; causal claims (home advantage, betting/crime) rest on design assumptions (parallel trends) not stated fully; p-hacking/selection in "top pass rusher rankings"; ecological fallacy; the Devon Allen 0.099s case — measurement error vs. true reaction time, the 0.1s threshold is a rule not a physiological constant; multiple comparisons across 5 leagues; etc.

Key formal operators I can extract:
- STRAIN: function of distance d(t) and closing rate \dot d(t). I can state it as S(t) = f(d(t), -\dot d(t)) with units m and m·s⁻¹. The paper says "Inspired by the concept of strain rate in materials science." Real strain rate is s⁻¹. So STRAIN could be normalized: \dot\varepsilon = (1/L) dL/dt. I should be careful: paper doesn't give the formula. I should state the abstract's qualitative definition and then give a formalization with explicit assumption that f is monotone decreasing in d and increasing in closing speed, and flag that the exact functional form is not given in the abstract. Good—honest.
- Strain rate in materials science: \dot\varepsilon = d\varepsilon/dt, \varepsilon = \Delta L/L_0, units s⁻¹. This is a legitimate formal operator from continuum mechanics.
- Weighted K-means with Bézier reparameterization: objective \sum_k \sum_{i \in C_k} \int_0^1 w_i(t) \| \gamma_i(t) - \mu_k(t) \|^2 dt. Note: paper says "curves which may be assigned weights at each observation of the curve," and weights = "probability of pressuring the quarterback." So w_i(t) ∈ [0,1]. Objective with weighted distance. Units: position in yards, so squared yards (yd²). Actually I should avoid American football field units? No, they're fine—not betting lines. I can use yards. Or SI meters. I'll use both: yards as native tracking unit, note 1 yd = 0.9144 m.
- Bézier curve reparameterization: B(t) = \sum_{j=0}^{n} \binom{n}{j} (1-t)^{n-j} t^j P_j, t∈[0,1], removes arc-length/duration variability.
- Bayesian two-stage rebounding model: hierarchical, Binomial likelihood with logit link, partial pooling. Something like \logit(p_{ij}) = \alpha + \gamma_i + \delta_j + ... Not given exactly; I should mark as schematic reconstruction, not the authors' equation.
- Conway–Maxwell–Poisson: P(Y=y) = \lambda^y / (y!)^\nu Z(\lambda,\nu), ν<1 underdispersion, ν=1 Poisson, ν>1 overdispersion. Units: dimensionless counts. Breakdown: Z normalization sum divergence issues; copula bivariate extension.
- Volleyball Markov chain: state s = (contact index, rotation, ...), point-win probability P(win | s); value change ΔV = V(s') - V(s) attributed to player. Units: probability, dimensionless. Breakdown: Markov assumption violated by within-rally momentum/set-score context; state space explosion.
- Competing risks: cause-specific hazard h_k(t) = lim_{Δt→0} P(t ≤ T < t+Δt, K=k | T ≥ t)/Δt, units s⁻¹ (or per year). Cumulative incidence F_k(t) = ∫_0^t h_k(u) S(u) du. Breakdown: non-informative censoring violated if retirement correlates with unobserved talent; draft-round truncation.
- GWR: y_i = β_0(u_i,v_i) + Σ β_p(u_i,v_i) x_ip + ε_i; weights w_ij = K(d_ij/h). Units: strike-zone coordinates in feet; bandwidth h in feet. Breakdown: collinearity among local estimates, edge effects, bandwidth selection.
- GLMM for reaction time: RT_ij = μ + a_i + v_j + ε, with a_i athlete random effect, v_j venue random effect; units seconds. Breakdown: measurement floor/rounding at 0.001 s, heteroscedasticity, the disqualification threshold is a sharp null.
- Causal: potential outcomes Y_i(1), Y_i(0) for home/away; ATE = E[Y(1)-Y(0)]. ACTE (age-conditioned): τ(a) = E[Y(1)-Y(0) | A=a]. Units: points/goals per match or summary statistic. Breakdown: ignorability/overlap violations; age is post-treatment? no, age is a covariate; but rest is assigned by coaches based on anticipated performance → confounding by indication. That's a crucial gray-zone point: load management is endogenous.
- Diff-in-diff for sports betting legalization: Y_it = α + β·Treat_i·Post_t + γ_i + δ_t + ε_it. Units: crimes per 100,000 per year, or incident counts. Breakdown: staggered adoption, TWFE bias (Goodman-Bacon), SUTVA violations via cross-border betting.
- STRAIN multilevel model: S_{ij} = β_0 + u_j + ... with u_j ~ N(0, τ²); units: STRAIN (dimensionless if normalized, or m/s).

Also "expected points" EP and "win probability" WP; CPOE.

Information-theoretic: ELPD/LOO, Brier score, calibration. ELPD is in units of log predictive density (nats or bits). Brier score in squared probability units. I can state: ELPD = Σ_i log p(y_i | y_{-i}), units nats; Brier = (1/N)Σ(p_i - o_i)², dimensionless in [0,1].

2. SOURCE_OPERATORS_AND_EQUATIONS: the formal stuff with citations. I'll include 6-9 operators with LaTeX, units, assumptions, breakdown regimes, and verbatim quotes from pages.

3. RETROCAUSAL_GENEALOGY: lineage. Carl Morris → James–Stein / empirical Bayes → multilevel models → modern tracking metrics. Strain rate (materials science) → STRAIN. Franks et al. 2015 (basketball HMM) → lineman blocking. Kubatko point shares → NHLe. Conway–Maxwell–Poisson (Conway & Maxwell 1962) → referee cards. Gelman LOO/ELPD → home advantage model comparison. Bézier curves (Casteljau) → route clustering. Potential outcomes (Rubin causal model) → home advantage, ACTE. Difference-in-differences → PASPA. Survival analysis (Fine & Gray competing risks) → draft data. Multi-week traps: (a) treating abstract-stated rankings as validated; (b) reusing "ghost" counterfactuals without checking conditioning set sensitivity; (c) assuming Markov property in volleyball; (d) assuming parallel trends; (e) treating the 0.1s barrier as a natural constant; (f) conflating "not fully priced into payroll" with causal coaching effect.

4. RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." I need to interpret this in a non-betting way. I'll frame as: analyst epistemic habits under time pressure — the "clock" is the decision deadline (in-game 40-second play clock, transfer window, Olympic quadrennial). "Crisis habit regression" = reverting to legacy heuristics (raw counting stats, eye test) under pressure. "Counter-trap" = over-correcting by adopting a sophisticated model without validating its identifiability (e.g., ghost defenders, ACTE). Theory of mind: modeling what the coach/analyst/front office believes, and what the model believes about the opponent's beliefs (e.g., setter rotation tendencies, referee threshold behavior, batter's belief about the umpire's zone). Two-level recursive: batter models umpire's zone model; umpire models batter's model; referee consistency across leagues. In darts handicap, MDP models opponent skill and the weaker player's optimal response. In fourth-down, the analyst's model of the coach's loss function.

5. CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. Concretely:
- Knee trajectory functional data: ACL loading, ground reaction forces ~2-3× body weight; sub-second knee location trajectories; HRV/fatigue. Veto: any model that ignores biomechanical load ceilings gets invalidated by injury.
- Downhill marathon: net drop 3000 ft (~914 m) → gravitational potential energy reduction mgh; for 70 kg runner, ΔE ≈ 70×9.81×914 ≈ 6.28×10^5 J. That's the physical proof behind the qualifying advantage. Also eccentric quadriceps loading, muscle damage. This is a genuine cross-layer veto: the qualifying-standard adjustment must be grounded in energetics, not just observed proportions.
- Weather: wind, rain, temperature affecting soccer/y football; not addressed in most abstracts, so a veto on generalizing outdoor metrics without weather covariates.
- Reaction time: neuromuscular latency floor ~100 ms; the 0.1 s rule sits near the physiological boundary; measurement rounding at 1 ms is comparable to the margin (0.001 s). Physical veto: you cannot statistically distinguish a true 0.099 from 0.100 with a 1-ms-resolution sensor plus block-force dynamics.
- Tennis/volleyball: none.
- Materials science analogy: strain rate validity domain — linear elastic regime; beyond yield, the analogy breaks.

6. RLVR_COUNTERFACTUAL_VETOES: three verifiable scenarios with predictions. RLVR = reinforcement learning from verifiable rewards (I'll interpret: scenarios whose outcomes are objectively checkable). Each must be falsifiable. E.g.:
(a) STRAIN stability: pre-register week-to-week Spearman correlation of STRAIN rankings for edge rushers over 2021 weeks 1-8; predict ρ ≥ 0.5 (paper claims "stability over time"). Veto if ρ < 0.3. Also predict STRAIN's predictive AUC for pressure on held-out weeks exceeds discrete-time pressure rate.
(b) Ghost defender conditioning sensitivity: re-run YAC-ghost with conditioning set restricted to pre-throw positions; predict rankings of defenders change (Kendall τ < 0.7 vs. full conditioning). Veto if τ ≥ 0.7 meaning robustness.
(c) Devon Allen threshold: fit GLMM with venue random effect; predict 2022 Worlds venue effect is positive (faster RTs) and that the 0.099 is within the 95% predictive interval for that athlete-venue; also predict that the proportion of sub-0.1 RTs rises with sensor resolution. Veto if venue effect ≈ 0.
(d) Fourth-down: bootstrap decision — predict that the fraction of "obvious" 4th-down decisions drops below 50% under uncertainty quantification.
(e) Downhill marathon: predict that among Boston qualifiers via downhill courses, the BQ-to-Boston delta is larger by ≥ 2 minutes; verified against BAA data.

I need only three, but can include more. Keep them verifiable.

I also need to be careful: the user says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I'll avoid. I can mention "sports betting legalization" because it's literally a paper topic (PASPA, crime) — that's not a line. Hmm, "betting" as a policy topic. That's fine; the invariant is about lines/odds. I'll discuss the PASPA paper as a policy-causal study, not wagering advice. I'll explicitly note no wagering content.

Also "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So my equations must be real formal constructs with units, assumptions, and singularity regimes. Good.

Let me now count words. I'll aim ~3,000.

I need verbatim quotes with [PAGE N]. Let me pick accurate quotes:

- PAGE 1: "Inspired by the concept of strain rate in materials science, STRAIN is a simple and interpretable means for measuring defensive pressure in football. It is a directly-observed statistic as a function of two features: the distance between the pass rusher and QB, and the rate at which this distance is being reduced."
- PAGE 1: "Our metric possesses great predictability of pressure and stability over time."
- PAGE 2: "where the aim is to automatically detect effective pass rushing routes from specific players or teams"
- PAGE 2: "Since pass rush routes vary in length due to the variability in the duration of each play, the weighted route data is first preprocessed using B´ezier curves, such that each trajectory is of the same length."
- PAGE 3: "These models, however, are subject to serious statistical flaws: selection bias, overfitting, ignoring autocorrelation, and ignoring uncertainty quantification."
- PAGE 3: "we find that that far fewer fourth down decision are as obvious as analysts claim."
- PAGE 3: "we introduce a framework for evaluating the ability of pass defenders to limit yards gained after the catch (YAC) by opposing receivers relative to expected defenders known as “ghosts”."
- PAGE 3-4: "The underdispersed nature of the data from the small counts, and likely dependence of the cards issued within a game, leads us to a bivariate Conway-Maxwell-Poisson copula model"
- PAGE 4: "We find that the home field advantage resides more heavily in offensive statistics than it does in defensive or referee statistics."
- PAGE 5: "we model the progression of a point as a Markov chain with the state space defined by the sequence of contacts in the current volley and additional context variables"
- PAGE 7: "We estimate functional intra-class correlation coefficient to evaluate the reliability of recorded measurements across multiple sessions of the same training type."
- PAGE 12: "We show that when we make use of these contributions in a hierarchical Bayesian linear model, we are able to identify top performing pass rushers and offensive linemen."
- PAGE 13: "Devon Allen was disqualified in the men’s 110 meter hurdle final of the 2022 World Track and Field World Championships after registering a reaction time of 0.099 seconds, 0.001 seconds faster than what is allowed."
- PAGE 13: "We employ a generalized linear mixed model (GLMM) with a random venue effect"
- PAGE 17: "We find that net drop of at least 3000 feet leads to a higher proportion of qualifying times than non-downhill races."
- PAGE 17: "making qualifying times for women 3-5 minutes faster and times for men 1-3 minutes faster if a downhill race is used for qualifying."
- PAGE 8: "Monte Carlo simulations by sampling from athlete i’s distribution which is parameterized by the mean and variance of these m × n predictions"
- PAGE 9: "We find that it is a source of wins not fully explained by player payroll, and therefore it is not fully priced into the player market."
- PAGE 15: "we conduct regularized ordinal regression modeling with an elastic penalty that allows variable selection with an added novelty of partial relaxation for the proportional odds assumption."
- PAGE 11: "Models are subsequently compared based on expected log pointwise predictive density (ELPD) estimated via the leave-one-out cross-validation (LOO) approach of Gelman and colleagues."
- PAGE 16: "we propose a methodology to construct an age-conditioned treatment effect (ACTE) for a given treatment."

Good.

Now let me write the equations carefully.

**E1. Materials-science strain rate and the STRAIN analogy.**
True strain: ε = ln(L/L₀), dimensionless. Strain rate: \dot ε = dε/dt = (1/L) dL/dt, units s⁻¹. For a Lagrangian material element. Assumption: continuum, affine deformation, small-to-moderate strain for linear elasticity. Breakdown: at yield/fracture the linear relation σ = Eε fails; in granular/biological media (football players) the continuum assumption fails entirely — the analogy is dimensional/behavioral, not constitutive. So I state STRAIN formally as:

S(t) = Φ( d(t), -ḋ(t) ), with ∂Φ/∂d < 0, ∂Φ/∂(-ḋ) > 0, units: Φ returns dimensionless if normalized by a reference length L*: S(t) = [L*/d(t)] · [(-ḋ(t))₊ / v*]. That's a candidate normalization, but the paper doesn't specify it. I'll explicitly flag it as "a normalization consistent with the abstract's two features, not the authors' published formula."

Singularity: d(t) → 0 (contact) gives divergence; require d ≥ d_min or a saturating transform (e.g., tanh). That's a genuine breakdown regime and a good audit point.

**E2. Weighted Bézier + weighted K-means.**
Bézier: γ(t) = Σ_{j=0}^{n} C(n,j)(1-t)^{n-j} t^j P_j, P_j ∈ ℝ². t ∈ [0,1] dimensionless; P_j in yards.
Objective: J = Σ_{k=1}^{K} Σ_{i∈C_k} ∫₀¹ w_i(t) ||γ_i(t) - μ_k(t)||² dt. Units yd². w_i(t) ∈ [0,1] is the ML-estimated pressure probability. Assumption: w_i(t) independent of cluster assignment (otherwise it's an errors-in-variables problem → attenuation bias). Breakdown: when w_i(t) is itself a model output correlated with route shape (e.g., vertical routes get high pressure probabilities by construction), the objective is self-confirming; K selection unstable.

**E3. Multilevel model for STRAIN.**
S_{ij} = β₀ + x_{ij}ᵀβ + u_j + ε_{ij}, u_j ~ N(0, τ²), ε ~ N(0, σ²). Units: STRAIN. Assumption: exchangeability of pass rushers conditional on covariates; Gaussian residual. Breakdown: τ² → 0 (no player heterogeneity, rankings meaningless); heavy tails from blow-by sacks; play-level non-independence within drives.

**E4. CMP copula for cards.**
P(Y=y) = λ^y / ((y!)^ν Z(λ,ν)), Z = Σ_{y≥0} λ^y/(y!)^ν, ν ∈ ℝ. Underdispersion when ν > 1? Let's check: CMP variance < mean when ν > 1. Yes, for CMP, ν > 1 gives underdispersion, ν = 1 Poisson, ν < 1 overdispersion. Good. Units: dimensionless counts. Bivariate copula: P(Y₁=y₁, Y₂=y₂) = C_θ(F₁(y₁), F₂(y₂)) with F from CMP marginals. Assumption: correct marginal family, copula captures within-match dependence. Breakdown: when λ is large, Z computation unstable (need truncation); ν estimated near boundary; copula misspecification (Frank vs Gaussian) drives home/away dependence estimates.

**E5. Volleyball Markov value.**
State s_t; V(s) = P(team wins point | s). ΔV_t = V(s_{t+1}) - V(s_t), attributed to the player at contact t. Units: probability. Assumption: Markov property — future depends only on current state. Breakdown: state doesn't include score/set context? Actually paper says context includes rotation. But the Markov assumption fails with momentum, server streak, and scouting adaptation. Also credit assignment: ΔV includes opponent error, so player attribution is biased. This is the "gray zone."

**E6. Competing risks.**
h_k(t) = lim_{Δt↓0} P(t ≤ T < t+Δt, K = k | T ≥ t)/Δt, units yr⁻¹. CIF: F_k(t) = ∫₀^t h_k(u) S(u) du, S(t) = exp(-Σ_k ∫ h_k). Assumption: independent censoring. Breakdown: if retirement is informative (unobserved talent), CIF biased; draft-round truncation and the 2021 20-round change create a structural break — the paper's window straddles a policy change, so a naive pooled model is confounded by regime shift.

**E7. GWR for whiff rate.**
y_i = β₀(u_i, v_i) + Σ_p β_p(u_i, v_i) x_{ip} + ε_i, with β̂(u,v) = (XᵀW(u,v)X)⁻¹XᵀW(u,v)y; W_ij = K(d_ij/h). Units: (u,v) in ft; h in ft; β_p in whiff-probability per unit covariate. Assumption: spatial stationarity of the kernel, no unmeasured spatial confounding. Breakdown: XᵀWX singular in sparse regions (edge of zone / few pitches); bandwidth h → 0 gives exact interpolation with infinite variance; h → ∞ reduces to global OLS.

**E8. Reaction-time GLMM.**
RT_ij = μ + a_i + v_j + ε_ij, a_i ~ N(0, σ_a²), v_j ~ N(0, σ_v²), ε ~ N(0, σ²). Units: s. Assumption: Gaussian, additive venue shift. Breakdown: RT has a physiological floor (~100 ms) and a hard lower bound at 0; Gaussian is wrong near the boundary; quantization at 0.001 s means a 0.001 s margin is within one quantization step. Also, RT is a *post hoc* variable — the false-start rule uses a threshold calibrated on a different sensor/era, and the "venue effect" is confounded with sensor hardware, starter protocol, and athlete selection.

**E9. Difference-in-differences.**
Y_{it} = α + β (Treat_i × Post_t) + γ_i + δ_t + ε_{it}. Units: incidents per 100,000. Assumption: parallel trends, SUTVA, no anticipation. Breakdown: staggered adoption → TWFE weights can be negative (Goodman-Bacon); cross-border betting means control states are partially treated → attenuation; crime reporting changes.

**E10. ACTE.**
τ(a) = E[Y_i(1) - Y_i(0) | A_i = a]. Units: performance metric per game. Assumption: unconfoundedness given covariates, positivity (overlap) at each age. Breakdown: positivity fails at extreme ages (no 40-year-old gets 3 days rest); confounding by indication — coaches rest players precisely when they expect decline.

That's plenty. Maybe I'll present 8 in the operators section.

Also information criteria: ELPD = Σ_i log p(y_i | y_{-i}), units nats (or bits if log₂). Brier = (1/N) Σ_k Σ_i (p_{ik} - o_{ik})², units probability².

Now the THINK_TRACE must be >=400 words. I'll write ~700.

Total word count target ~3,200.

Let me write it well, with a clear "audit" tone: this is a corpus of 18 pages of abstracts; the "drive" is not a dataset but a set of claims. I should note explicitly: "No wagering content appears in this analysis; the invariants exclude lines/odds, and the source contains none."

I should also flag the epistemic status: abstracts, not full papers; several are student/postdoc work; no reported confidence intervals in the abstract text except a handful.

One more: "CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof." I'll do a table-ish narrative with three layers:
- Layer P (physical energetics): downhill marathon, mgh; reaction time neuromuscular floor; sprint/hurdle.
- Layer B (biomechanical): knee trajectory functional data, ACL, load management, eccentric damage; pass rush ground reaction forces and leverage.
- Layer W (weather/environment): wind effects on ball flight, rain on grip/fumble, altitude, temperature on marathon; and sensor/hardware environment (venue effect) as a "weather" analog.
- Veto rule: if a model's implied effect exceeds the physical bound derivable from these layers, the model is vetoed regardless of fit.
I'll give the numeric bound: 70 kg × 9.81 m/s² × 914.4 m = 627,996 J ≈ 6.28×10⁵ J. Equivalent to ~150 kcal (1 kcal = 4184 J → 150.1 kcal). Good sanity check. Actually that's mechanical work of descent (negative), meaning the runner gets ~150 kcal of "free" mechanical energy relative to flat — roughly 1.5 miles of flat running at ~100 kcal/mile. That's a defensible physical anchor. Note this is a gross energetic bound, ignoring braking/eccentric cost, which is real; so the true advantage is smaller than the naive bound. That's a nice "veto with correction."

Also for knee: peak vertical GRF during running ≈ 2–3 body weights; for 70 kg, 1.37–2.06 kN. Sub-second knee location trajectories. Functional ICC. Veto: any fatigue model that predicts >X% change in knee trajectory without corresponding GRF change is physically implausible.

For reaction time: 0.099 vs 0.100 is 1 ms; force-plate/starting-block sensors sample at ≥1000 Hz typically, so 1 ms is 1 sample at best, and the electronic timing chain has latency jitter. Physical veto: the rule cannot be enforced to 1 ms precision without specifying hardware uncertainty; the GLMM venue random effect partially absorbs this but doesn't fix it.

For weather: wind-assisted marathon times; Boston is point-to-point; net drop + tailwind. Veto: qualifying adjustment should be a function of net drop AND prevailing wind, not drop alone.

OK. RLVR scenarios: three, each with a stated prediction and a veto condition.

Scenario 1 — STRAIN temporal stability (PAGE 1 claim: "stability over time"). Protocol: compute STRAIN for all edge rushers with ≥ 150 pass-rush snaps in 2021 weeks 1–8; split-half by odd/even weeks; Spearman ρ. Prediction: ρ ∈ [0.4, 0.75]. Veto: ρ < 0.3 → "stability" claim falsified; ρ > 0.9 → suspect leakage of play-level outcome into the feature (e.g., using pressure outcome to define closing rate window).

Scenario 2 — Ghost conditioning sensitivity (PAGE 3). Protocol: recompute defender YAC-suppression rankings under three conditioning sets (pre-snap only, at-throw, at-catch) and compute Kendall τ between rankings. Prediction: τ(at-throw, at-catch) < 0.7 because the catch-moment conditioning includes the outcome-adjacent information; τ(pre-snap, at-throw) also moderate. Veto: if all τ > 0.85, ghost rankings are robust and the paper's sensitivity concern is minor.

Scenario 3 — Devon Allen threshold (PAGE 13). Protocol: fit the stated GLMM on all Worlds/ Diamond League RTs 2016–2022 with venue random effects; compute posterior predictive probability that a given athlete records RT ≤ 0.099 at the 2022 venue. Prediction: venue effect for Eugene 2022 is negative (faster) at ≥ 1 SE, and P(RT ≤ 0.099 | athlete, venue) > 0.05, i.e., not an astronomically rare event. Veto: if the 2022 venue effect is within ±0.5 SE of zero and P < 0.01, the DQ is statistically defensible at the 1 ms margin.

Maybe add Scenario 4 — fourth-down bootstrap (PAGE 3): predict the share of 4th-down decisions labeled "obvious" falls by ≥ 20 percentage points once WP uncertainty is bootstrapped. Veto if the share changes < 5 pp.

I'll include 4, three is minimum.

Now write. Use XML tags exactly. Ensure no betting lines/odds. I'll include a brief header line outside tags? The spec says exact XML sections; a short preamble is probably fine. I'll keep preamble minimal.

Word count: let me be generous.

Let me also make sure the THINK_TRACE is genuinely multi-hop: 
Hop 1: What is the object? 18 pages of abstracts, not papers.
Hop 2: What claims are falsifiable from the abstract alone? Almost none; they are existence claims.
Hop 3: Which claims admit external verification? Those with pre-registered correlations, held-out data, and public code (only the knee paper and home-advantage paper explicitly promise open data/code).
Hop 4: Where is the gray zone? Credit assignment, counterfactual imputation, causal identification, threshold rules.
Hop 5: What would change my mind?

Good. Writing now.

One thing: the user's persona framing ("GSE + GSI Frontier Reasoning Foundry", "crisis habit regression", "counter-trap", "clock") — I'll interpret these as epistemic operators and define them in-section, since they're jargon. I'll be transparent that I'm operationalizing them.

Length check: I'll write substantial paragraphs.

Let me draft the RETROCAUSAL_GENEALOGY:
- Morris (empirical Bayes, 1983 "Parametric empirical Bayes inference") → James–Stein → today's multilevel pass-rush models (Nguyen/Yurko/Matthews; Kiriazis/Genest/Leblanc). The lineage is: shrinkage → partial pooling → player rankings that are honest about uncertainty. Retrocausal twist: the 2023 abstracts retroactively validate Morris by using his machinery, and Morris's own sports work retroactively frames "value" as a posterior quantity.
- Strain rate: Newtonian/Airy/Bailey–Allen creep → materials science → STRAIN. Note that the analogy is dimensional, and the actual constitutive law has no counterpart.
- Franks et al. 2015 (basketball HMM, "counterfactual" ghosting) → NFL ghosts (Yurko/Pelechrinis) and → Brahme/Mehta lineman HMM. This is a genuine citation lineage inside the corpus: PAGE 12 says "we adapt a Hidden Markov Model method from basketball (Franks et al. 2015)".
- Kubatko point shares → hockey NHLe (PAGE 15).
- Conway–Maxwell (1962) → CMP copula referee cards.
- Gelman LOO/ELPD → home-advantage model selection (PAGE 11).
- Rubin causal model → Hu's home-field causal inference (PAGE 4) and Nakamura-Sakai/Macdonald ACTE (PAGE 16) and Gong/Wang DiD (PAGE 14).
- Fine–Gray / cause-specific hazards → MLB draft (PAGE 11).
- Bézier (de Casteljau) → Bajons/Hornik route clustering.
- Multi-week traps: I'll list 5, each with a "trap window" in weeks.

RECURSIVE_THEORY_OF_MIND:
Define three operators:
- CLOCK: the decision deadline; sources of deadline: 40-second play clock (football), 15-second serve clock, transfer window, Olympic quadrennial, weekly game cycle. Information decays relative to the clock.
- CRISIS HABIT REGRESSION: under deadline pressure, agents revert to lower-dimensional representations (counting stats, eye test, "hot hand"). Evidence in the corpus: traditional volleyball stats "do not allow apples-to-apples comparisons across skills" (PAGE 5); traditional rebounding metrics miss "players who are excellent at stealing rebounds away from the opposing team" (PAGE 6).
- COUNTER-TRAP: over-correction, adopting a high-capacity model as an epistemic authority. E.g., ghost defenders whose conditioning set encodes the answer; ACTE at ages with no positivity; "not fully priced into the player market" (PAGE 9) read as a coaching effect.
Recursive ToM levels:
L0: player's own belief.
L1: player models opponent's belief (batter models umpire zone; setter models block).
L2: coach models player's model of opponent.
L3: analyst models coach's model.
The corpus gives explicit L1/L2 instances: PAGE 6 "we first fit flexible Bayesian nonparametric models to estimate (i) the probability that the pitch is called a strike if the batter takes the pitch" — this is literally a model of the umpire's decision rule, i.e., the batter's ToM of the umpire. PAGE 18 setter rotation: opponent's attack tendencies → coach's ToM. PAGE 7 darts MDP: weaker player's optimal policy given stronger player's checkout distribution.
Add: the failure mode is ToM collapse — when the analyst's model of the coach is fit on the coach's past decisions, and the coach adapts to the analyst, the loop is non-stationary. That's a genuine gray zone (Goodhart).

CROSS_LAYER_VETO: as above.

Let me write now. I'll keep equations in LaTeX delimiters.

Careful with "RLVR" — I'll define it as "reinforcement learning with verifiable rewards" and note these are checkable protocols.

Also add a closing note? The spec lists six sections; I'll not add a 7th, or if I do, it should be minimal. I'll keep exactly the six tags. Maybe a one-sentence preamble before the tags.

Word count estimate — I'll aim high.

Writing.

For units in E1: d in m (or yd), ḋ in m·s⁻¹.

For STRAIN normalization I'll propose S(t) = (L*/d(t))·(v_close(t)/v*)·θ, dimensionless. Flag as reconstruction.

Now, one more honesty check: I should not imply the authors published an equation they didn't. I'll label each equation as either [verbatim-defined], [standard form], or [schematic reconstruction]. That's a strong epistemic move and satisfies "assumptions."

Let's go.
</NATIVE_REASONING>

<THINK_TRACE>
The drive source is not a dataset. It is eighteen pages of camera-ready abstract text from the 2023 New England Symposium on Statistics in Sports, containing roughly forty oral and poster summaries. The first multi-hop move is therefore taxonomic: what *kind* of object is a conference abstract? It is an existence claim plus a method sketch, stripped of point estimates, confidence intervals, model diagnostics, and usually of sample size. The second move is to ask which of the abstracts' assertions are falsifiable *from the abstract alone*. Almost none. "Our metric possesses great predictability of pressure and stability over time" [PAGE 1] is a two-part empirical claim with no reported correlation coefficient, no split-half design, and no held-out window. "We find that far fewer fourth down decision are as obvious as analysts claim" [PAGE 3] is a comparative claim whose magnitude is unstated. The third move is to separate claims that admit *external* verification — pre-registered correlations, held-out seasons, public code — from claims that only admit internal verification by the original authors. Only two abstracts in the corpus explicitly commit to open artifacts: the multilevel functional regression paper on knee trajectories ("make both data and the R code for all analyses freely available online on GitHub" [PAGE 8]) and the home-advantage survey ("all code and data for this project is open-source" [PAGE 12]). That asymmetry is the single most important audit finding: the corpus's reproducibility surface is roughly five percent of its claim surface.

The fourth hop is the gray zone. Four distinct gray-zone mechanisms recur. (i) *Credit assignment*: volleyball point probability changes on each contact, and the change is attributed to "the player(s) responsible for each contact" [PAGE 5]; but a ΔV that includes opponent error is not a player effect, it is a joint effect. (ii) *Counterfactual imputation*: the "ghost" defender framework [PAGE 3] requires estimating a 2D position distribution for a defender who does not exist, and the authors themselves flag "sensitivity to which moments of time and features are conditioned on." Conditioning on the catch moment risks encoding outcome-adjacent information into the counterfactual. (iii) *Causal identification under self-selection*: rest between games is assigned by coaches who anticipate decline, so the age-conditioned treatment effect [PAGE 16] is confounded by indication, not by omitted covariates in the ordinary sense. (iv) *Threshold rules mistaken for natural constants*: the 0.1 s false-start barrier [PAGE 13] is a rule, not a physiological invariant, and the disputed margin (0.001 s) is one quantisation step of the timing chain.

The fifth hop is adversarial. Suppose I wanted to break each headline claim using only information in the corpus. For STRAIN, I would note that closing rate is mechanically higher for rushers who ultimately reach the quarterback, so any "predictability of pressure" statement must be evaluated on plays where pressure did *not* occur, otherwise the feature leaks the label. For the weighted K-means route clustering, I would note that the weights are themselves machine-learning outputs ("gradient boosted trees are used in this work" [PAGE 2]); if those weights correlate with route geometry — and they will, because deep vertical routes generate pressure differently from inside counters — then the weighted objective is self-confirming and will appear to beat unweighted K-means for reasons that are artefacts of the weight model, not of the clustering. For the referee study, the bivariate Conway–Maxwell–Poisson copula is well chosen for underdispersion, but the paper's headline comparison is *heterogeneity across five leagues*, which is a variance-components question, and shrinkage of league-level variance depends on the number of referees per league. For the home-advantage causal paper, the claim that "the home field advantage resides more heavily in offensive statistics than it does in defensive or referee statistics" [PAGE 4] is a ranking of eleven separate causal estimates, which invites a multiple-comparisons problem that the abstract does not address.

The sixth hop is constructive. What survives the audit is a set of *transferable operators*: continuous-time strain as a normalised closing-rate functional; Bézier reparameterisation to remove duration heterogeneity; weighted curve clustering with explicit weight provenance; hierarchical partial pooling for player effects; cause-specific hazards for career transitions; geographically weighted regression for spatial coefficient drift; and bootstrapped decision rules that propagate win-probability uncertainty into the decision itself. These are the durable exports. The rankings are not. The final audit judgement is that the corpus is best treated as a *hypothesis generator with named authors*, and the RLVR section below converts four of its weakest claims into pre-registrable, checkable protocols.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Scope note.** No wagering content appears in this analysis; the invariants exclude lines, totals, moneylines, and odds, and the source contains none. Every equation below is tagged as **[defined]** (the authors state the construction in words and this is its direct formalisation), **[standard]** (an established form the authors invoke by name), or **[schematic]** (a reconstruction consistent with the abstract but not the authors' published formula, and flagged as such).

---

**E1 — Continuum strain rate and the STRAIN analogy. [standard + schematic]**

Materials-science true strain and strain rate:

$$\varepsilon = \ln\!\left(\frac{L}{L_0}\right), \qquad \dot{\varepsilon} = \frac{d\varepsilon}{dt} = \frac{1}{L}\frac{dL}{dt}$$

Units: $\varepsilon$ dimensionless; $\dot{\varepsilon}$ in $\mathrm{s^{-1}}$. Assumption: a continuum element undergoing affine deformation, with $\sigma = E\varepsilon$ only in the linear-elastic regime.

The football construction is stated only qualitatively: "It is a directly-observed statistic as a function of two features: the distance between the pass rusher and QB, and the rate at which this distance is being reduced" [PAGE 1]. A normalisation consistent with that description is

$$S(t) \;=\; \underbrace{\frac{L^{*}}{d(t)}}_{\text{proximity}} \cdot \underbrace{\frac{\big(-\dot{d}(t)\big)_{+}}{v^{*}}}_{\text{closing rate}},\qquad d>0,\; \dot{d}<0 \text{ under approach}$$

Units: $d$ in $\mathrm{m}$ (native tracking is in yards; $1\ \mathrm{yd}=0.9144\ \mathrm{m}$), $\dot{d}$ in $\mathrm{m\,s^{-1}}$, so $S$ is dimensionless. **[schematic]** — the authors supply no formula on the page.

*Singularity / breakdown regimes.* (a) $d(t)\to 0$ at contact drives $S\to\infty$; a saturating map such as $S\mapsto \tanh(S/S_0)$ or a floor $d\ge d_{\min}$ is required, and the choice of floor will dominate the top of any ranking. (b) The materials analogy is *dimensional and behavioural*, not constitutive: there is no yield stress, no elastic modulus, and no fracture criterion for a 110 kg human in a three-point stance. Extrapolating the analogy past "monotone in proximity and closing rate" is unjustified. (c) The feature leaks the label: closing rate is mechanically larger on plays that end in pressure, so predictive validity must be assessed on non-pressure plays.

---

**E2 — Weighted Bézier reparameterisation and weighted K-means. [defined + standard]**

Each trajectory is first mapped to a Bézier curve so that all routes share a common parameter domain:

$$\gamma_i(t) = \sum_{j=0}^{n}\binom{n}{j}(1-t)^{\,n-j}t^{\,j}\,P_{ij},\qquad t\in[0,1],\; P_{ij}\in\mathbb{R}^2$$

The clustering objective with observation-level weights:

$$J(\{\mu_k\},\{C_k\}) = \sum_{k=1}^{K}\sum_{i\in C_k}\int_0^1 w_i(t)\,\big\|\gamma_i(t)-\mu_k(t)\big\|^2\,dt$$

Units: $P_{ij}$ in yards; $\|\cdot\|^2$ in $\mathrm{yd^2}$; $J$ in $\mathrm{yd^2}$; $w_i(t)\in[0,1]$ dimensionless, described as "the probability of pressuring the quarterback" [PAGE 2].

*Assumptions.* Bézier reparameterisation removes duration variability ("pass rush routes vary in length due to the variability in the duration of each play" [PAGE 2]); weights are exogenous to cluster membership.

*Breakdown regimes.* (a) The exogeneity assumption fails whenever $w_i(t)$ is produced by a model that also reads route geometry — the abstract confirms gradient-boosted trees generate the weights, so the objective is partly self-confirming. (b) $K$ selection is unstable when $w_i(t)$ has high play-level variance; the effective sample size per cluster is $\sum_i \int w_i$, not the raw route count. (c) Bézier degree $n$ too low ⇒ corner-cutting of sharp breaks; too high ⇒ overfitting to tracking jitter.

---

**E3 — Multilevel model for player-level STRAIN. [schematic]**

$$S_{ij} = \beta_0 + \mathbf{x}_{ij}^{\top}\boldsymbol{\beta} + u_j + \varepsilon_{ij},\qquad u_j\sim\mathcal{N}(0,\tau^2),\quad \varepsilon_{ij}\sim\mathcal{N}(0,\sigma^2)$$

Units: $S$ dimensionless; $\tau^2,\sigma^2$ in $S^2$. This is the partial-pooling structure the abstract describes as "a multilevel model for STRAIN to understand the defensive pressure contribution of every pass rusher at the play-level" [PAGE 1].

*Breakdown regimes.* $\tau^2\to 0$ collapses all rushers to a common mean and renders rankings pure noise; $\sigma^2$ inflated by sack/blow-by tails violates Gaussianity; plays nested within drives violate the independence of $\varepsilon_{ij}$ and understate standard errors.

---

**E4 — Bivariate Conway–Maxwell–Poisson copula for disciplinary cards. [standard]**

Univariate CMP mass function:

$$P(Y=y)=\frac{\lambda^{y}}{(y!)^{\nu}\,Z(\lambda,\nu)},\qquad Z(\lambda,\nu)=\sum_{y\ge 0}\frac{\lambda^{y}}{(y!)^{\nu}}$$

Units: $y$ dimensionless count; $\lambda>0$; $\nu\in\mathbb{R}$. $\nu=1$ recovers Poisson; $\nu>1$ gives underdispersion (variance below mean); $\nu<1$ gives overdispersion. The bivariate construction couples the home and away marginals through a copula:

$$P(Y_1=y_1,Y_2=y_2)=C_\theta\big(F_1(y_1),F_2(y_2)\big)$$

justified by "the underdispersed nature of the data from the small counts, and likely dependence of the cards issued within a game" [PAGES 3–4].

*Breakdown regimes.* $Z$ requires truncation for large $\lambda$ and the truncation error propagates into $\nu$; $\nu$ near the Poisson boundary makes league-level heterogeneity estimates non-identified; the copula family (Frank vs. Gaussian vs. Clayton) is not identified from marginals alone and will move the estimated within-match dependence more than the data can adjudicate.

---

**E5 — Volleyball Markov value and contact attribution. [defined]**

$$V(s)=\Pr(\text{team wins the point}\mid s),\qquad \Delta V_t = V(s_{t+1})-V(s_t)$$

Units: probability (dimensionless). State $s$ is "defined by the sequence of contacts in the current volley and additional context variables (e.g. the team's current rotation)" [PAGE 5].

*Breakdown regimes.* The Markov property fails under within-rally momentum, server streaks, and scouting adaptation between sets. Attribution $\Delta V_t \mapsto$ player is biased whenever the transition probability depends on the opponent's action (a block and a hitting error are not the same causal object). State-space cardinality grows combinatorially with contact depth; sparse cells force parametric smoothing that reintroduces the very assumptions the framework was meant to avoid.

---

**E6 — Cause-specific hazards for draft outcomes. [standard]**

$$h_k(t)=\lim_{\Delta t\downarrow 0}\frac{\Pr(t\le T<t+\Delta t,\;K=k\mid T\ge t)}{\Delta t},\qquad F_k(t)=\int_0^t h_k(u)\,S(u)\,du$$

Units: $t$ in years; $h_k$ in $\mathrm{yr^{-1}}$; $F_k$ dimensionless.

*Breakdown regimes.* Independent censoring fails if retirement is informative about unobserved talent. The corpus itself documents a structural break: "Since 2021, the MLB draft was reduced from 40 rounds to 20" [PAGE 11] — a pooled hazard across the policy change estimates a mixture of two regimes. Left truncation by signing class and right truncation by observation window both distort $F_k$.

---

**E7 — Geographically weighted regression for whiff probability. [standard]**

$$y_i=\beta_0(u_i,v_i)+\sum_{p}\beta_p(u_i,v_i)\,x_{ip}+\varepsilon_i,\qquad \hat{\boldsymbol{\beta}}(u,v)=\big(\mathbf{X}^{\top}\mathbf{W}(u,v)\mathbf{X}\big)^{-1}\mathbf{X}^{\top}\mathbf{W}(u,v)\mathbf{y}$$

with kernel weights $W_{ij}=K(d_{ij}/h)$. Units: $(u,v)$ in feet within the pitch frame; bandwidth $h$ in feet; $\beta_p$ in whiff-probability per unit of $x_p$.

*Breakdown regimes.* $\mathbf{X}^{\top}\mathbf{W}\mathbf{X}$ becomes ill-conditioned or singular in sparse regions of the zone (few pitches at the extreme edges), producing explosive local coefficients; $h\to 0$ gives exact interpolation with unbounded variance; $h\to\infty$ degenerates to global OLS. Local collinearity between pitch-quality covariates flips coefficient signs across neighbouring cells — the paper's "confounded coefficient estimates" critique [PAGE 10] applies equally to its own remedy.

---

**E8 — Reaction-time GLMM against a fixed threshold. [defined]**

$$\mathrm{RT}_{ij}=\mu+a_i+v_j+\varepsilon_{ij},\qquad a_i\sim\mathcal{N}(0,\sigma_a^2),\; v_j\sim\mathcal{N}(0,\sigma_v^2)$$

Units: seconds. This is the model the authors state: "a generalized linear mixed model (GLMM) with a random venue effect" [PAGE 13].

*Breakdown regimes.* Reaction time has a neuromuscular floor near $0.1\ \mathrm{s}$ and a hard lower bound at zero, so Gaussian tails are wrong exactly where the decision is made. The disputed margin is $0.001\ \mathrm{s}$ — one millisecond — which is at or below the quantisation and latency jitter of a starting-block chain. A venue random effect absorbs hardware and protocol differences only if venues are exchangeable, which they are not across timing suppliers.

---

**E9 — Difference-in-differences for a legalisation shock. [standard]**

$$Y_{it}=\alpha+\beta\,(\mathrm{Treat}_i\times\mathrm{Post}_t)+\gamma_i+\delta_t+\varepsilon_{it}$$

Units: incidents per $10^5$ population per year. Assumptions: parallel trends, SUTVA, no anticipation.

*Breakdown regimes.* Staggered adoption makes two-way fixed-effects $\hat\beta$ a weighted average that can place negative weight on some 2×2 comparisons; cross-border access partially treats control states, attenuating $\hat\beta$ toward zero; reporting-rate changes coincide with the policy window.

---

**E10 — Age-conditioned treatment effect for rest. [defined]**

$$\tau(a)=\mathbb{E}\big[Y_i(1)-Y_i(0)\mid A_i=a\big]$$

Units: performance metric per game. The abstract names this the "age-conditioned treatment effect (ACTE)" [PAGE 16].

*Breakdown regimes.* Positivity fails at the age extremes — no 40-year-old is randomly assigned three days' rest. Confounding by indication is the dominant threat: coaches rest players when they already expect decline, so $\tau(a)$ is biased downward for exactly the ages of greatest interest. Age is measured with coarse granularity relative to the rest interval.

---

**E11 — Predictive-fit currencies used across the corpus. [standard]**

$$\mathrm{ELPD}=\sum_{i=1}^{N}\log p(y_i\mid y_{-i})\ \ [\text{nats}],\qquad \mathrm{Brier}=\frac{1}{N}\sum_{i=1}^{N}\sum_{k}(p_{ik}-o_{ik})^2\ \ [\text{probability}^2]$$

ELPD is the criterion the home-advantage survey uses — "compared based on expected log pointwise predictive density (ELPD) estimated via the leave-one-out cross-validation (LOO) approach" [PAGE 11]; Brier scores anchor the Olympic projection claim [PAGE 8]. Both are *relative* currencies: they rank models, they do not certify a mechanism.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The corpus has a named ancestor and it is not shy about it. The opening abstract is a memorial: "Carl Morris was well-known for his pioneering research in Bayesian multiparameter inference and prediction" [PAGE 1]. Everything downstream in these eighteen pages that shrinks a player estimate toward a population mean is a descendant. Morris's empirical-Bayes programme, transmitted through James–Stein shrinkage into modern multilevel software, is the same operator that appears as "a multilevel model for STRAIN" [PAGE 1], as the two-stage Bayesian rebounding framework [PAGE 6], as the population-prior golf model [PAGE 9], and as the hierarchical Bayesian linear model for linemen [PAGE 12]. The retrocausal reading is exact: the 2023 corpus *validates Morris backwards* by demonstrating that his 1980s machinery is now the default substrate for athlete evaluation, and simultaneously *re-frames* his sports writing as an early statement of the posterior-as-value thesis.

A second lineage is mechanical. Strain rate in materials science descends from Hooke through Airy and the creep literature; the football abstraction borrows its *dimensional form* and discards its constitutive content. This is a legitimate cross-domain transfer of a monotone functional, and an illegitimate transfer of anything resembling a failure criterion — a point the abstract's language quietly acknowledges by calling the metric "inspired by the concept" rather than derived from it [PAGE 1].

A third lineage is explicitly internal to the corpus and therefore auditable. The lineman paper states: "we adapt a Hidden Markov Model method from basketball (Franks et al. 2015) in order to determine an offensive line's pass blocking responsibilities" [PAGE 12]. The same Franks-style counterfactual machinery reappears, generalised to continuous space, as the "ghosts" framework [PAGE 3] and again as the contextualised generative ghosting model using a conditional Variational Recurrent Neural Network [PAGES 4–5]. Three independent teams in one corpus converge on the same idea — replace an observed player with a distribution over what an average player would have done — which is a strong signal that the operator is canonical, and a warning that its identifiability problems are canonical too.

Fourth: Bézier reparameterisation, a de Casteljau construction from nineteenth-century approximation theory, is repurposed to solve a twenty-first-century data problem — variable play duration — in the route-clustering abstract [PAGE 2]. Fifth: Conway and Maxwell's 1962 queueing distribution resurfaces as a copula marginal for underdispersed card counts [PAGES 3–4]. Sixth: the Rubin causal model splits into three descendants in this single volume — the hierarchical home-field causal model [PAGE 4], the ACTE for load management [PAGE 16], and the difference-in-differences design for legalisation [PAGE 14]. Seventh: cause-specific hazards from the survival literature are applied to draft outcomes [PAGE 11], and Kubatko's point-shares method is carried from basketball into hockey equivalency translation [PAGE 15].

The multi-week traps are where genealogy becomes operational. *Trap 1 (weeks 1–8 window).* The STRAIN paper reports "results for the first eight weeks of the 2021 regular season" [PAGE 1]. An eight-week window is long enough to produce a stable-looking ranking and short enough to be dominated by schedule strength; the stability claim is untested across a season boundary. *Trap 2 (conditioning-set drift).* Ghost-defender rankings are functions of the chosen conditioning moment; a practitioner who adopts the ranking this week and the model's updated conditioning set next week is comparing two different estimands. *Trap 3 (policy-window confounding).* The draft-hazard study's window straddles the 2021 reduction from 40 to 20 rounds [PAGE 11]; pooling pre- and post-policy hazard curves estimates neither. *Trap 4 (adoption staggering).* Legalised sports betting rolled out state by state after 2018 [PAGE 14], so a naive two-way fixed-effects estimate is a weighted average of heterogeneous 2×2 comparisons, some negatively weighted. *Trap 5 (rule drift).* The 0.1 s false-start barrier is a federation rule; rule revisions silently invalidate any model trained across them, and the disputed 0.001 s margin sits below the resolution of the historical data used to justify the rule in the first place [PAGE 13].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three operators govern this section, and they are defined here rather than assumed.

**CLOCK** — the deadline against which inference is priced. The corpus supplies four clocks of different periods: the within-play clock (sub-second tracking frames at 10 Hz, the granularity at which ball-touch detection operates via "horizontal ball acceleration magnitudes" [PAGE 16]); the play clock (tens of seconds, the window in which a fourth-down decision must be made); the weekly game cycle (the retraining interval for any player-effect model); and the quadrennial Olympic cycle, which the projection paper makes explicit by stacking models across past Games to aggregate "$m \times n$ predictions" [PAGE 8].

**CRISIS HABIT REGRESSION** — under clock pressure, agents revert to lower-dimensional representations. The corpus documents this regression in its own domain. Traditional volleyball statistics "do not allow apples-to-apples comparisons across skills, and they do not measure the impact of the performances on team success" [PAGE 5]. Traditional rebounding metrics miss that "there are some players who are excellent at stealing rebounds away from the opposing team without collecting them themselves" [PAGE 6]. Existing pass-rush metrics are "either discrete-time quantities or based on subjective judgment" [PAGE 1]. Each sentence is a description of habit regression: the analyst reaches for the counting stat because it is computable before the clock expires.

**COUNTER-TRAP** — the over-correction that follows. Having abandoned the counting stat, the analyst adopts a high-capacity model as an epistemic authority and stops auditing its identification. Four instances are visible here: ghost rankings whose conditioning set encodes outcome-adjacent information [PAGE 3]; ACTEs evaluated at ages where positivity fails [PAGE 16]; market-inefficiency findings read as coaching effects when the abstract only supports "not fully priced into the player market" [PAGE 9]; and cross-sport frame matching between NFL routes and soccer off-the-ball runs, where the "fingerprint" features are positions and velocities and the labelled targets come from a different sport's taxonomy [PAGES 13–14].

**Recursive levels.** The theory-of-mind ladder here has at least four rungs, and the corpus occupies all of them.

*L0 — the athlete's own belief.* The golfer's self-model of strengths and weaknesses, elicited through strokes gained against a population prior [PAGE 9].

*L1 — the athlete's model of the official.* This is stated with unusual directness: "we first fit flexible Bayesian nonparametric models to estimate (i) the probability that the pitch is called a strike if the batter takes the pitch" [PAGE 6]. That model *is* the batter's theory of the umpire's zone, estimated from data, and the swing/take decision is the action taken under it.

*L2 — the athlete's model of the opponent's model.* The setter-rotation study asks how attack distribution shifts with setter position [PAGE 18]; the answer is only meaningful as an opponent's anticipatory model. The darts MDP formalises the same rung: a weaker player's optimal policy depends on the stronger player's checkout distribution, and the proposed dynamic-credit handicap explicitly grants "a player to deterministically select an outcome for a single dart throw" [PAGE 7] — a manipulation of the opponent's belief about variance.

*L3 — the analyst's model of the coach's model.* The fourth-down paper is the purest case: the analyst builds an EP/WP value function and then discovers that "far fewer fourth down decision are as obvious as analysts claim" [PAGE 3] once decision uncertainty is bootstrapped. That gap is precisely the difference between the analyst's model of the coach and the coach's actual loss function, which includes job security, locker-room effects, and media narrative.

The recursive instability is Goodhart's: once the analyst's L3 model is published, the coach's L2 policy shifts, and the L3 model's training distribution is stale. This is not a hypothetical — bootstrapping the fourth-down decision "changes substantially" the set of decisions classified as obvious [PAGE 3], which means the published classification is itself an intervention on future coaching behaviour. The correct response is not to abandon the model but to timestamp it: every L3 estimate in this corpus is valid only for the coaching population that generated it, and the referee-consistency study makes the same point about officials — heterogeneity across the Big 5 leagues [PAGES 3–4] is an estimate of a behavioural parameter that responds to scrutiny.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is a bound derived from physics, biomechanics, or environment that a statistical model cannot cross regardless of fit. Four such bounds are derivable from this corpus.

**Veto 1 — Gravitational energetics vs. downhill qualifying times.** The marathon paper reports that "net drop of at least 3000 feet leads to a higher proportion of qualifying times than non-downhill races" [PAGE 17] and proposes "making qualifying times for women 3-5 minutes faster and times for men 1-3 minutes faster" [PAGE 17]. The physical anchor: for a runner of mass $m$ descending net height $h$, the gravitational potential released is

$$\Delta E = m g h \approx 70\ \mathrm{kg}\times 9.81\ \mathrm{m\,s^{-2}}\times 914.4\ \mathrm{m} \approx 6.28\times 10^{5}\ \mathrm{J} \approx 150\ \mathrm{kcal}$$

This is a *gross* upper bound on the free mechanical work of descent; it is not the net time advantage, because eccentric quadriceps loading, braking impulses, and altered stride frequency consume a substantial fraction of it. The veto rule: any proposed adjustment exceeding the time-equivalent of $\Delta E$ under realistic running economy is physically impossible, and any adjustment ignoring net drop entirely is physically indefensible. The paper's 1–5 minute proposals sit plausibly inside the bound, which is a point in their favour — but the bound is a function of net drop *and* prevailing wind *and* surface, so a drop-only adjustment is under-specified at the weather layer.

**Veto 2 — Neuromuscular latency vs. millisecond thresholds.** Allen's disqualification turned on "a reaction time of 0.099 seconds, 0.001 seconds faster than what is allowed" [PAGE 13]. Human simple reaction time has a floor near 0.1 s set by afferent conduction, central processing, and efferent conduction. The veto: a threshold placed at the physiological floor cannot be enforced to a precision finer than the measurement chain's latency jitter, and 1 ms is at or below that jitter for standard starting-block hardware. The venue random effect in the GLMM absorbs *average* hardware offsets but not *variance* differences, so a venue with a noisy chain will produce both more false starts and more near-misses. Statistically significant venue heterogeneity would therefore be evidence about equipment as much as about athletes, and the paper's own framing — questioning "whether this is a reasonable threshold" [PAGE 13] — is the correct layer to contest.

**Veto 3 — Tissue load ceilings vs. load-management effects.** The knee-trajectory study records "subsecond-level data of knee location trajectories collected in 19 recreational runners" across MICR and HIIT sessions with "multiple steps recorded in each participant-session" [PAGE 7], and estimates a functional intra-class correlation "to evaluate the reliability of recorded measurements across multiple sessions of the same training type" [PAGE 7]. The biomechanical veto: during running, peak vertical ground reaction force is roughly 2–3 body weights, i.e. $1.4\text{–}2.1\ \mathrm{kN}$ for a 70 kg runner. Any ACTE for rest [PAGE 16] that implies a large performance gain from additional rest *without* a corresponding change in estimated tissue load or functional ICC is physically unsupported — the mechanism by which rest helps is load reduction, and if load is unchanged the effect has no pathway. Conversely, an ACTE that implies *zero* effect across all ages contradicts the known age-dependence of recovery kinetics.

**Veto 4 — Environmental and hardware confounds.** Outdoor team-sport metrics in this corpus are reported without weather covariates: pass-rush closing rates, whiff probability in coordinate space, and home advantage all depend on wind, precipitation, temperature, and altitude. The veto is directional: because wind alters ball flight and footing, a model that attributes a change in these metrics entirely to player skill across venues and seasons is mis-specified, and the mis-specification will appear as inflated player-level variance $\tau^2$. For the GWR whiff model specifically, the "pronounced spatial heterogeneity in whiff rate" [PAGE 10] is a *within-strike-zone* finding and is therefore largely immune to weather, which is a genuine strength; the same immunity does not extend to batted-ball outcomes, and the abstract correctly restricts itself to whiffs.

**Adjudication summary.** Vetoes 1 and 2 are hard physical constraints that bound the magnitude of any claimed effect. Veto 3 is a mechanistic consistency requirement. Veto 4 is a variance-attribution requirement. None of the four can be satisfied by better model fit alone; each requires an external measurement layer that the statistical model does not contain.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
"RLVR" here means reinforcement learning with verifiable rewards, operationalised as *pre-registerable protocols whose outcomes are objectively checkable against public data or public code*. Each scenario names the corpus claim, the verification procedure, a directional prediction, and the veto condition that would falsify the claim or the model.

---

**Scenario 1 — STRAIN temporal stability.**
*Claim under test:* "Our metric possesses great predictability of pressure and stability over time" [PAGE 1], evaluated on "the first eight weeks of the 2021 regular season" [PAGE 1].
*Protocol:* compute STRAIN for every edge rusher with ≥150 pass-rush snaps across weeks 1–8; split half by odd/even weeks; report Spearman $\rho$ between half-season rankings. Separately, fit the multilevel model of E3 and report $\hat\tau^2/(\hat\tau^2+\hat\sigma^2)$, the player-level share of variance.
*Prediction:* $\rho \in [0.40,\,0.75]$ and the variance share in $[0.15,\,0.45]$. Stability should be real but moderate.
*Veto:* $\rho < 0.30$ falsifies "stability over time" as stated. $\rho > 0.90$ is *also* a veto — against the model, not the claim — because such a correlation implies the closing-rate feature is contaminated by play outcome (rushers who reach the quarterback define high closing rate on the same plays that define pressure), i.e. label leakage.

---

**Scenario 2 — Ghost-defender conditioning sensitivity.**
*Claim under test:* the ghost framework yields defensible defender rankings, with the authors themselves flagging "the challenges of modeling 'ghost' defenders, exploring sensitivity to which moments of time and features are conditioned on" [PAGE 3].
*Protocol:* recompute YAC-suppression rankings under three conditioning sets — pre-snap only, at-throw, and at-catch — holding the density estimator fixed. Compute pairwise Kendall $\tau$ between the three rankings over all defenders with ≥200 coverage snaps.
*Prediction:* $\tau(\text{at-throw},\text{at-catch}) < 0.70$ and $\tau(\text{pre-snap},\text{at-catch}) < 0.55$; the catch-moment conditioning borrows outcome-adjacent information and should shift rankings materially.
*Veto:* if all three $\tau > 0.85$, the sensitivity concern is empirically minor and the framework is robust — which would be a surprising and publishable negative result against the authors' own caution. If $\tau(\text{pre-snap},\text{at-catch}) < 0.30$, the framework cannot support cross-defender comparison at all and should be reported as a diagnostic tool only.

---

**Scenario 3 — The 0.1 s false-start threshold at 1 ms resolution.**
*Claim under test:* the disqualification of a 0.099 s reaction time is a defensible application of the rule [PAGE 13], and venue effects are estimable via a GLMM with random venue effects.
*Protocol:* fit the stated GLMM to all publicly available championship and Diamond-League reaction times from the same timing era; extract the posterior for the 2022 venue effect; compute the posterior predictive probability that an athlete of Allen's estimated random effect records $\mathrm{RT}\le 0.099$ at that venue.
*Prediction:* the 2022 venue effect is negative (faster) by at least one posterior standard deviation, and $\Pr(\mathrm{RT}\le 0.099 \mid \text{athlete},\text{venue}) > 0.05$ — i.e. a one-in-twenty event, not an outlier.
*Veto:* if the venue effect is within $\pm 0.5$ posterior SD of zero *and* the predictive probability is below 0.01, the rule as applied is statistically defensible at the 1 ms margin and the critique fails. Either outcome is checkable and neither requires private data.

---

**Scenario 4 — Bootstrapped fourth-down decisiveness.**
*Claim under test:* "we find that that far fewer fourth down decision are as obvious as analysts claim" [PAGE 3], following the authors' alteration of "the existing fourth down decision procedure to incorporate uncertainty quantification in win probability models by bootstrapping the fourth down decision itself" [PAGE 3].
*Protocol:* on a single published season, compute the fraction of fourth-down decisions whose bootstrapped optimal action is unanimous across $B=1000$ resamples, versus the fraction classified as decisive by a point-estimate WP model. Report the difference in percentage points with a bootstrap interval.
*Prediction:* the unanimity fraction falls by at least 20 percentage points relative to the point-estimate classification.
*Veto:* a drop of less than 5 percentage points falsifies the "far fewer" characterisation and reduces the finding to a technical caveat. A drop greater than 50 percentage points would indicate that the bootstrap is propagating model mis-specification rather than genuine decision uncertainty, and would require a specification check before the result could be trusted.
</RLVR_COUNTERFACTUAL_VETOES>