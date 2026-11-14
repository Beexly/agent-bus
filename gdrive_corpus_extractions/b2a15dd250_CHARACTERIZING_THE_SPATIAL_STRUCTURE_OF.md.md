---
source: "CHARACTERIZING_THE_SPATIAL_STRUCTURE_OF.md"
folder: "/GSE-Research/sports-research-papers/md/randoms"
pages: 29
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 7116
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about defensive skill in professional basketball using optical tracking data. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes from source pages.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source is the provided text, which appears to be pages 1-31 of the paper (though the user says PAGES: 29). I need to cite exact [PAGE N] markers. Looking at the text, there are page numbers visible: 1, 2, 3, etc. I need to map content to pages.

Let me scan the text for page numbers:
- Page 1: Title, abstract, keywords, contents start.
- Page 2: Contents continued, Introduction starts.
- Page 3: Introduction continued.
- Page 4: Who's Guarding Whom section starts.
- Page 5: HMM details.
- Page 6: Inference, EM algorithm.
- Page 7: M-step updates.
- Page 8: Results, Gamma estimates.
- Page 9: Table 1, defensive entropy.
- Page 10: Table 2, team entropies.
- Page 11: Parameterizing Shot Types.
- Page 12: Point Process Decomposition.
- Page 13: LGCP fitting.
- Page 14: NMF Optimization.
- Page 15: Basis and Player Summaries.
- Page 16: Figure 4 discussion.
- Page 17: Frequency and Efficiency section.
- Page 18: Shrinkage, Figure 5.
- Page 19: Shot Frequency.
- Page 20: Shot Frequency continued, Figure 7.
- Page 21: Shot Efficiency.
- Page 22: Inference.
- Page 23: Inference continued, Section 5 Results starts.
- Page 24: Table 3.
- Page 25: Results, Tables 4/5 mentioned.
- Page 26: Table 4 (Basis 1).
- Page 27: Table 5 (Basis 5), Hibbert/Howard discussion.
- Page 28: Figure 8, discussion.
- Page 29: Discussion continued.
- Page 30: Supplementary Material.
- Page 31: References and author addresses.

I need to be careful with citations. Since the text is provided as a continuous block with page breaks implied by the numbers, I'll cite [PAGE N] where N corresponds to the visible page numbers in the text.

Now let me plan each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. >=400 words. I need to derive the model chain: HMM for who's guarding whom -> LGCP-NMF for shot types -> multinomial logit for shot frequency -> Bayesian logistic for shot efficiency. Identify gray zones: identifiability of matchups, geometric vs semi-Markov assumption, shrinkage hyperparameter selection, variational approximation bias, CAR prior neighbor selection, defender heterogeneity assumption, discretization at 1 sq ft tiles, distance capping at inferred maximum, half-normal prior for distance effect. Multi-hop: tracking data -> canonical position -> matchup matrix -> shot type basis -> frequency/efficiency -> defensive shot chart. Gray-zone audit: EM local optima, HMM state duration misspecification, variational lower bound gap, CAR positivity-definiteness condition (I - ζM)^{-1}D symmetric positive-definite, σβ² < σα² identifiability constraint.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations with units and page citations. Must include:
- μ_tk = γ_o O_tk + γ_b B_t + γ_h H, Γ1=1 (page 4-5)
- D_tj | I_tjk=1 ~ N(μ_tk, σ_D²) (page 5)
- HMM complete data likelihood (page 5-6)
- EM E-step expectations (page 6)
- M-step GLS update Γ̂_GLS = (X^T Ω^{-1} X)^{-1} X^T Ω^{-1} D (page 7)
- σ̂_D² update (page 7)
- ρ update, Q=1-ρ odds (page 7)
- Γ̂ = (0.62 ± 0.02, 0.11 ± 0.01, 0.27 ± 0.02) (page 8)
- ρ range 0.96 to 0.99 (page 8)
- LGCP likelihood approx: product over tiles of ppois(n_kv | λ_kv ΔA) (page 14)
- GP prior z_k ~ N(0, Σ) with kernel (page 14)
- NMF: Λ ≈ WL, KL divergence (page 15)
- Multinomial logit for shot frequency: η_nk = α_kb + Σ_j Z_n(j,k) β_jb (page 19-20)
- Hierarchical priors α_kb ~ N(μ_αb, σ_α²), β_jb ~ N(μ_βGb, σ_β²) (page 20)
- Shot efficiency: logit(P(Y_n=1)) = θ_kb + φ_jb + ξ_b D_n (page 21)
- CAR prior: θ_k | neighbors ~ N(mean of neighbors, ...) ζ=0.9 (page 22)
- Joint proper condition: (I - ζM)^{-1}D symmetric positive-definite (page 22)
- Distance prior ξ_b ~ N^+ (half-normal) (page 22)
- Variational inference bound (page 23)
- HMC/STAN, 2000 samples, R̂ ≈ 1 (page 23)
- Cross-validation log-likelihoods Table 3 (page 24)
- Defensive effect tables Basis 1 and 5 (pages 26-27)

Breakdown regimes: HMM geometric state duration too restrictive for brief help defense (page 11); LGCP discretization ΔA=1 sq ft tile may miss sub-foot variation (page 12); NMF KL divergence requires non-negativity; variational approximation gap unknown (page 23); CAR prior requires ζ ∈ [0,1) and positive-definiteness (page 22); distance capped at inferred maximum, beyond which ξ_b D_n has no effect (page 21); σβ² < σα² for identifiability (page 23).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Lineage: plus/minus (Kubatko et al. 2007), regression adjusted plus/minus (Rosenbaum 2004, Sill 2010, Macdonald 2011), hockey competing process hazard (Thomas et al. 2013), Cervone et al. 2014 POINTWISE semi-Markov, Goldsberry courtvision, NMF Lee & Seung 1999/2001, LGCP Møller et al. 1998, CAR Cressie 1993, HMM Bishop et al. 2006, EM. Multi-week traps: overreliance on single-game sample (30 possessions), stability across 100 games but ρ variable (0.96-0.99), small sample per player for defensive effects, shrinkage hyperparameter tuning via cross-validation may overfit to 2013-14 season, team context confounding (playing with good center changes individual effect), offensive similarity network not clustering by position.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is more abstract/metacognitive. Crisis habit regression: under pressure, analysts revert to box score steals/blocks because they are salient/easy. Counter-trap: the paper's spatial model avoids this by using tracking data, but risks its own trap—overfitting spatial noise via variational approximation and CAR priors. Clock: possession clock, 5-second minimum possession filter, half-court only, shot clock implied, defensive switches are brief (geometric distribution too restrictive), time-varying defensive performance (maturation) not modeled. Need to weave in theory of mind: what does the offense think the defender will do? HMM infers intent. Defensive entropy measures unpredictability (switches/double teams). Crisis habit regression = reverting to traditional metrics under data scarcity. Counter-trap = assuming spatial data automatically solves identifiability when team confounding remains.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: court dimensions 47 ft x 50 ft offensive half court (page 12), 25 fps tracking (page 3), distance in feet (page 21), defender distance capped, effect diminishes after ~5-6 ft (page 21, Figure 7). Biomechanical: defender positioning as convex combination of offender/ball/hoop (page 4), canonical position 0.62 O + 0.11 B + 0.27 H (page 8), ball carrier guarded at 0.73 O + 0.27 H (page 8), velocity covariates not included (page 11), help defense brief duration violates geometric HMM (page 11). Weather: indoor NBA, no weather, but rafter-mounted cameras (page 3), lighting/camera occlusion not modeled. Veto conditions: if defender distance > cap, ξ_b term zeroed? If possession < 5 seconds excluded (page 23). If foul/stoppage excluded. If not half-court excluded. These are veto rules. No betting lines.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning Verifiable Rewards? Or just verifiable scenarios. I'll interpret as verifiable counterfactual veto scenarios where the model's predictions can be tested/falsified.
1. Scenario: Roy Hibbert vs Dwight Howard in restricted area. Model predicts Hibbert reduces efficiency more (φ = -0.618) but Howard suppresses frequency more (β more negative). Veto: if in a held-out set of 2014-15 games, Howard's φ in basis 1 is more negative than Hibbert's, the frequency/efficiency dissociation is vetoed. Prediction: Hibbert's efficiency effect remains significantly lower (more negative) than Howard's across ≥50 matchups.
2. Scenario: Chris Paul on-ball attention. Model predicts double-teamed 20% of possession time (Table 1 caption). Veto: if tracking data from a different season shows Paul's on-ball attention ratio (time guarded / total time) ≤ 1.0 (no double teaming), the attention metric is vetoed. Prediction: DeMar DeRozan and Kevin Durant remain top-2 on-ball attention with ratio >1.15.
3. Scenario: Miami Heat defensive entropy. Model predicts highest team entropy 0.574 and induced entropy 0.535 (Table 2). Veto: if a subsequent season's entropy for Miami drops below 0.45 while maintaining similar roster, the stationarity of defensive switching is vetoed. Prediction: Miami remains top-3 in defensive entropy for at least 2 consecutive weeks/multi-week span if roster stable.

I need to ensure total word count >= 1000 across sections. Let's aim for roughly:
- THINK_TRACE: ~450-500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300-400 words (mostly equations)
- RETROCAUSAL_GENEALOGY: ~200-250 words
- RECURSIVE_THEORY_OF_MIND: ~200-250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200-250 words
- RLVR_COUNTERFACTUAL_VETOES: ~150-200 words

Total ~1500+. Good.

Need to avoid betting lines: no spreads, totals, moneylines, odds. I can mention probabilities/log-odds as statistical concepts (the paper uses log-odds), but not betting odds. The user said "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Wait, "odds" is mentioned. But the paper uses log-odds extensively. I think "odds" here refers to betting odds. However, to be safe, I should avoid the word "odds" in a betting context. The paper uses "log-odds" as a statistical term. I think it's okay to mention "log-odds" since it's a statistical concept from the paper, but I should be careful not to mention betting odds. I'll use "log-odds" sparingly and only in the statistical sense from the paper. Actually, the instruction says "Never mention spreads, totals, moneylines, or odds." This could be interpreted strictly. But the paper itself is full of log-odds. I think the intent is no betting lines. I will mention "log-odds" only when quoting the paper's statistical framework, clearly as a statistical link function, not as a betting line. Or I could avoid the word "odds" entirely and say "logit scale" or "logarithmic probability ratio". To be safe, I'll avoid "odds" and use "logit" or "log-probability ratio". Wait, the paper says "log-odds". If I quote it, I might use the word. I'll minimize it. Use "logit" instead.

No toy equations: no fake ratios. All equations must be formal from the paper. I will cite pages.

Let me check page numbers carefully from the text provided:

The text has page numbers embedded:
- "1" after contents? Actually the first page shown has title and contents, then "1" appears at bottom? Let's look:
After keywords: "1" then contents table.
Then "2" appears: "FRANKS ET AL." header.
Then "3"
Then "4"
Then "5"
Then "6"
Then "7"
Then "8"
Then "9"
Then "10"
Then "11"
Then "12"
Then "13"
Then "14"
Then "15"
Then "16"
Then "17"
Then "18"
Then "19"
Then "20"
Then "21"
Then "22"
Then "23"
Then "24"
Then "25"
Then "26"
Then "27"
Then "28"
Then "29"
Then "30"
Then "31"

Yes, the page numbers are clear. I'll cite them as [PAGE 4], etc.

Now let's draft each section carefully.

THINK_TRACE:
Need deep multi-hop derivation:
1. Optical tracking at 25 Hz yields (x,y) for ball and 10 players [PAGE 3].
2. Unknown defensive matchups I_tjk inferred via HMM where canonical defender location μ_tk = γ_o O_tk + γ_b B_t + γ_h H, Γ1=1 [PAGE 4-5].
3. Emission D_tj | I_tjk=1 ~ N(μ_tk, σ_D²) [PAGE 5].
4. EM algorithm estimates Γ, σ_D², ρ; closed-form GLS for Γ [PAGE 6-7].
5. Result Γ̂ = (0.62, 0.11, 0.27), meaning defenders stand ~70% of the way from hoop to offender [PAGE 8].
6. Shot types via LGCP intensity λ_k on 1 sq ft tiles over 47×50 ft half-court [PAGE 12].
7. NMF decomposes Λ ≈ WL with KL divergence, B=6 bases [PAGE 15-16].
8. Shot frequency: multinomial logit η_nk = α_kb + Σ_j Z_n(j,k) β_jb over 5×B shooter-basis outcomes plus no-shot [PAGE 19-20].
9. Shot efficiency: Bayesian logistic logit(P(Y_n=1)) = θ_kb + φ_jb + ξ_b D_n, D_n capped defender distance [PAGE 21].
10. Hierarchical shrinkage: defender types G∈{1,2,3} via K-means on PCA of time-in-basis matrix [PAGE 18]; offender CAR prior with ζ=0.9 [PAGE 22].
11. Inference: variational for frequency (approx posterior), HMC/STAN for efficiency (2000 samples, R̂≈1) [PAGE 23].
12. Out-of-sample log-likelihood shows full model beats no-defense/no-spatial [PAGE 24].

Gray-zone audit:
- HMM assumes geometric state durations, but NBA help/double teams are brief; semi-Markov would be better [PAGE 11].
- EM can converge to local optima; only 30 possessions used for Γ estimation, though stable across 100 games [PAGE 8].
- Variational inference gap unquantified; KL bound may underestimate posterior uncertainty [PAGE 23].
- CAR prior requires (I−ζM)⁻¹D symmetric positive-definite; ζ=0.9 chosen to guarantee this [PAGE 22].
- Identifiability constraint σβ² < σα² and fixed σ_total [PAGE 23].
- Discretization ΔA=1 sq ft may alias sub-foot shooting variation [PAGE 12].
- Distance effect linear until ~5-6 ft then flat; beyond cap, ξ_b D_n vetoed [PAGE 21].
- Team confounding: individual effects interpreted in team context; cannot isolate true individual defense without team interaction model [PAGE 28].

Word count check: This will be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations with LaTeX, units, pages, breakdown regimes.

Equation 1: Canonical defender position [PAGE 4-5]:
μ_tk = γ_o O_tk + γ_b B_t + γ_h H, subject to Γ1 = 1, Γ = [γ_o, γ_b, γ_h].
Units: feet (court coordinates). Breakdown: if offender, ball, hoop collinear, convex combination still valid but degenerates; if Γ not constrained to simplex, weights uninterpretable.

Equation 2: Emission density [PAGE 5]:
D_tj | (I_tjk=1, Γ, σ_D²) ~ Normal(μ_tk, σ_D²).
Units: feet² for variance.

Equation 3: HMM complete data likelihood [PAGE 5-6]:
L = ∏ P(D_tj | I_tjk, Γ, σ_D²) P(I_t | I_{t-1}, ρ).
Transition homogeneity: P(switch) = ρ constant for all j [PAGE 6]. Breakdown: geometric state duration too restrictive for brief switches [PAGE 11].

Equation 4: EM M-step GLS update [PAGE 7]:
Γ̂_GLS = (Xᵀ Ω⁻¹ X)⁻¹ Xᵀ Ω⁻¹ D, constrained Γ̂1=1.
Where X = [O, B, H], Ω diagonal weights σ²/Ê_tjk. Units: dimensionless weights. Breakdown: singular if XᵀΩ⁻¹X not invertible (collinearity among O, B, H).

Equation 5: Transition update [PAGE 7]:
Q = 1−ρ = odds of staying; ρ̂ from expected transitions. Range ρ̂ ∈ [0.96, 0.99] across games [PAGE 8].

Equation 6: Estimated Γ [PAGE 8]:
Γ̂ = (0.62±0.02, 0.11±0.01, 0.27±0.02). Interpretation: 0.27+0.62 ≈ 0.70 toward hoop-offender line; ball carrier case 0.73 O + 0.27 H.

Equation 7: LGCP discretized likelihood [PAGE 14]:
∏_v Poisson(n_kv | λ_kv ΔA), ΔA = 1 ft².
Breakdown: assumes complete spatial randomness within tiles; misses sub-tile structure.

Equation 8: GP prior for log intensity [PAGE 14]:
z_k ~ Normal(0, Σ_k), Σ_k encoded by squared-exponential kernel with length scale ν_k ~ Gamma(mean ~8 ft).
Units: feet for length scale. Breakdown: ν_k → 0 gives white noise (no smoothness); ν_k → ∞ gives constant intensity.

Equation 9: NMF factorization [PAGE 15]:
Λ ≈ WL, W ≥ 0, L ≥ 0, minimize KL(Λ || WL).
Dimensions: Λ ∈ ℝ₊^(N×V), W ∈ ℝ₊^(N×B), L ∈ ℝ₊^(B×V), B=6 ≪ V. Breakdown: KL divergence undefined if Λ has zeros where WL is positive or vice versa without smoothing; non-negativity enforces parts-based but may be non-unique.

Equation 10: Shot frequency multinomial logit [PAGE 19-20]:
η_nk = α_kb + Σ_{j=1}^5 Z_n(j,k) β_jb, where Z_n(j,k) = fraction of possession n defender j guards offender k, Σ_k Z_n(j,k)=1.
Outcomes: 5×B shooter-basis pairs + no-shot. Breakdown: if Z_n is misestimated from HMM, β_jb absorbs matchup error.

Equation 11: Hierarchical priors [PAGE 20]:
α_kb ~ Normal(μ_αb, σ_α²), β_jb ~ Normal(μ_βGb, σ_β²), G ∈ {1,2,3} defender types. Constraint σ_β² < σ_α² for identifiability [PAGE 23].

Equation 12: Shot efficiency Bayesian logistic [PAGE 21]:
logit(P(Y_n=1 | ·)) = θ_kb + φ_jb + ξ_b D_n.
D_n = defender-shooter distance in feet, capped at inferred maximum. φ_jb distance-independent contesting skill; ξ_b ≥ 0 half-normal prior [PAGE 22]. Breakdown: effect of distance vanishes beyond ~5-6 ft empirically [PAGE 21, Figure 7]; if D_n exceeds cap, ξ_b term saturates.

Equation 13: CAR prior for offense [PAGE 22]:
θ_k | θ_{N(k)}, µ_θb ~ Normal(ζ · mean(neighbors), ...), ζ=0.9.
Joint proper iff (I − ζM)⁻¹D symmetric positive-definite, where M adjacency of 10 nearest neighbors in shot-weight space [PAGE 22]. Breakdown: if ζ ≥ 1 or matrix not positive-definite, prior improper.

Equation 14: Variational bound [PAGE 23]:
Lower bound on multinomial likelihood using Gaussian bound on log-sum-exp Hessian [Böhning 1992]. Approximate posterior; gap unmeasured.

Equation 15: HMC/STAN [PAGE 23]:
2000 samples, R̂ ≈ 1 for all parameters.

Equation 16: Out-of-sample log-likelihoods [PAGE 24, Table 3]:
Full model shooter log-likelihood −25474.93 vs no defense −25725.17; efficiency −3202.09 vs no spatial −3270.99.

I need to keep this section formal but not too long. Include units and breakdown.

RETROCAUSAL_GENEALOGY:
Historical lineage:
- Box score steals/blocks/defensive rebounds are salient but limited [PAGE 1-2].
- Individual plus/minus suffers player confounding [PAGE 2].
- Regression adjusted plus/minus: Rosenbaum 2004, Sill 2010, Macdonald 2011 [PAGE 2].
- Hockey competing process hazard: Thomas et al. 2013 [PAGE 3].
- Cervone et al. 2014 POINTWISE semi-Markov real-time evaluation [PAGE 3].
- NMF parts-based decomposition: Lee & Seung 1999, 2001 [PAGE 15-16].
- LGCP: Møller et al. 1998 [PAGE 12, 14].
- CAR spatial prior: Cressie 1993 [PAGE 22].
- HMM/EM: Bishop et al. 2006 [PAGE 6].
Multi-week traps:
- 30 possessions to estimate Γ; stable across 100 games but ρ variable 0.96–0.99 [PAGE 8].
- Small per-player defensive sample; shrinkage borrows strength but assumes defender types are homogeneous [PAGE 18, 20].
- Team context confound: Hibbert/Howard effects depend on teammates [PAGE 28].
- Offensive players do not cluster by listed position; position is poor predictor of shot selection [PAGE 18-19].
- Cross-validation hyperparameter tuning on 2013-14 may not generalize across weeks/seasons; defensive performance matures over time (future work) [PAGE 28-29].

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under uncertainty, analysts revert to box-score steals/blocks because they are easy to observe [PAGE 1-2]. The paper counters with spatial tracking but introduces its own trap: assuming high-resolution data resolves identifiability when team defensive strategy still confounds individual effects [PAGE 28].
Counter-trap: The HMM infers mental state (who is guarding whom) from spatial coordinates, effectively modeling opponent theory of mind. Defensive entropy quantifies unpredictability of switches/double teams [PAGE 9-10]. However, if the offense anticipates a defender's habitual help position, the spatial model may misattribute intent.
Clock: 5-second minimum possession filter, half-court only [PAGE 23]. Defensive switches are brief; geometric HMM durations may not match shot-clock pressure dynamics [PAGE 11]. Future work: time-varying defensive performance across weeks [PAGE 28-29].

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer:
- Court 47 ft × 50 ft offensive half court; 1 sq ft tiles [PAGE 12].
- Tracking at 25 frames/sec [PAGE 3].
- Defender distance D_n in feet, capped; empirical effect flat after ~5-6 ft [PAGE 21].
- Canonical position 0.62 O + 0.11 B + 0.27 H; ball carrier 0.73 O + 0.27 H [PAGE 8].
Biomechanical layer:
- Defender velocity not included as covariate [PAGE 11].
- Brief help/double-team durations violate geometric HMM assumption [PAGE 11].
- No zone defense modeling; rare in NBA [PAGE 10-11].
Weather/environment layer:
- Indoor arena, rafter-mounted cameras; no weather variation [PAGE 3].
- Camera occlusion/lighting not modeled; tracking errors propagate to I_tjk [PAGE 3-4].
Veto rules:
1. If possession < 5 seconds or not half-court: exclude [PAGE 23].
2. If foul or stoppage: exclude [PAGE 23].
3. If defender distance beyond cap: ξ_b D_n term set to zero/saturated [PAGE 21-22].
4. If (I − ζM)⁻¹D not positive-definite: CAR prior improper; veto inference [PAGE 22].
5. If XᵀΩ⁻¹X singular: GLS update breaks down [PAGE 7].
All vetoes are structural, not betting-related.

RLVR_COUNTERFACTUAL_VETOES:
3 verifiable scenarios:
1. Hibbert vs Howard restricted area dissociation. Veto: If held-out 2014-15 data shows Howard's φ in basis 1 more negative than Hibbert's across ≥50 defended shots, the claim that efficiency and frequency are distinct defender skills is weakened. Prediction: Hibbert's φ + ξD* remains ≤ −0.45 while Howard's remains > −0.20 in basis 1 [PAGE 26].
2. Chris Paul on-ball double-team rate. Veto: If a different season's tracking shows Paul's attention ratio (time guarded / total time) ≤ 1.0 (no average double teaming), Table 1's attention metric is not portable. Prediction: DeRozan/Durant remain top-2 with ratio >1.18 [PAGE 9-10, Table 1].
3. Miami Heat defensive entropy stationarity. Veto: If Miami's defensive entropy falls below 0.45 in a subsequent 5-week span with stable roster, the claim that Miami is the most active switching defense is context-dependent. Prediction: Miami remains top-3 in entropy for at least 2 consecutive multi-week evaluation windows [PAGE 10, Table 2].

Now I need to make sure total words >= 1000. Let me estimate. I'll write generously.

Also, I must not mention betting lines. I will not use "spread", "total", "moneyline", or "odds" in a betting sense. I will use "logit" instead of "log-odds" mostly, but if quoting, I might say "log-probability ratio". Actually, I can use "log-odds" as a statistical term but I'll be careful. The user said "Never mention spreads, totals, moneylines, or odds." I'll avoid the word "odds" entirely to be safe, using "logit" or "log-probability ratio". But the paper itself uses "log-odds". I can paraphrase as "logit scale".

Let's draft.

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

No other text outside these tags? The user said "across these exact XML sections". I'll output only the sections.

Let me write carefully with citations.

Page citations: I need to use [PAGE N] exactly.

Double-check page numbers for specific content:
- Page 3: tracking data 25 fps, x,y coordinates. Yes.
- Page 4: canonical position convex combination, μ_tk. Yes.
- Page 5: normal density, HMM complete data likelihood. Yes.
- Page 6: EM algorithm, E-step, forward-backward. Yes.
- Page 7: M-step, GLS, σ², ρ update. Yes.
- Page 8: Γ̂ results, 0.62/0.11/0.27, ρ range. Yes.
- Page 9: Table 1 attention. Yes.
- Page 10: Table 2 entropy, discussion of extensions, semi-Markov. Wait, semi-Markov discussion is on page 10-11. Page 10 has the end of Table 2 and discussion of extensions. Page 11 starts section 3. Actually looking: Page 10 ends with "Modeling the defense with a hidden semi-Markov model..." no, that's on page 10-11 boundary. Let me check: Page 10 has Table 2 and then "We also make simplifying assumptions...". Page 11 starts with "In this paper we emphasize..." and then Section 3. So semi-Markov is page 10. Good.
- Page 11: Section 3 starts, LGCP-NMF. Yes.
- Page 12: 47x50 ft, tiles. Yes.
- Page 13: LGCP likelihood approximation. Yes.
- Page 14: GP prior, length scale gamma prior around 8 feet. Yes.
- Page 15: NMF optimization, KL divergence. Yes.
- Page 16: B=6, basis vectors. Yes.
- Page 17: Section 4 starts. Yes.
- Page 18: defender clusters, Figure 5. Yes.
- Page 19: shot frequency multinomial. Yes.
- Page 20: shot frequency continued, hierarchical priors. Yes.
- Page 21: shot efficiency, logit, distance. Yes.
- Page 22: CAR prior, ζ=0.9, half-normal distance. Yes.
- Page 23: variational inference, prior parameters σ², HMC/STAN, Section 5 results start. Yes.
- Page 24: Table 3 log-likelihoods. Yes.
- Page 25: results, Tables 4 and 5, Hibbert/Howard. Yes.
- Page 26: Table 4 Basis 1. Yes.
- Page 27: Table 5 Basis 5, Hibbert/Howard discussion. Yes.
- Page 28: Figure 8, discussion, team context. Yes.
- Page 29: Discussion conclusion. Yes.

Good.

Now writing the content. I'll aim for high quality and word count.

I need to ensure no fake equations. All equations are from the paper. I'll cite them properly.

Let me start writing.

THINK_TRACE content:
The paper's inferential chain is a multi-hop spatial-temporal pipeline. First, optical tracking at 25 Hz provides (x, y) coordinates for the ball and all ten athletes [PAGE 3]. Because defensive matchups are not annotated, the authors infer who is guarding whom via a hidden Markov model. The canonical defender location μ_tk for defender j guarding offender k at time t is modeled as a convex combination of offender location O_tk, ball location B_t, and hoop location H: μ_tk = γ_o O_tk + γ_b B_t + γ_h H, with Γ1 = 1 [PAGE 4-5]. Observed defender locations are emitted as D_tj | I_tjk = 1 ~ Normal(μ_tk, σ_D²) [PAGE 5]. The HMM transition matrix assumes a constant switching probability ρ across defenders [PAGE 6]. EM estimates Γ, σ_D², and ρ; the M-step solves a constrained generalized least squares problem Γ̂_GLS = (XᵀΩ⁻¹X)⁻¹XᵀΩ⁻¹D [PAGE 7]. The fitted weights Γ̂ = (0.62, 0.11, 0.27) place the average defender roughly 70% of the way from the hoop to the guarded offender [PAGE 8].

Second, the court is parameterized into shot types. Shot attempts are modeled as a log Gaussian Cox process on a 47 ft × 50 ft offensive half court, discretized into 1 sq ft tiles [PAGE 12]. The posterior over log intensity z_k uses a Gaussian process prior with a squared-exponential kernel and length scale ν_k ~ Gamma centered near 8 feet [PAGE 14]. Non-negative matrix factorization decomposes the player-by-tile intensity matrix Λ ≈ WL using KL divergence, with B = 6 bases corresponding to interpretable shot types such as restricted area and corner threes [PAGE 15-16].

Third, defensive influence is split into shot frequency and shot efficiency. Frequency uses a multinomial logit over 5 × B shooter-basis outcomes plus a no-shot category: η_nk = α_kb + Σ_j Z_n(j,k) β_jb, where Z_n(j,k) is the fraction of possession n that defender j guards offender k [PAGE 19-20]. Efficiency uses a Bayesian logistic regression on the make/miss outcome: logit(P(Y_n = 1)) = θ_kb + φ_jb + ξ_b D_n, where D_n is capped defender-shooter distance in feet [PAGE 21].

Gray-zone audit. Several assumptions create failure modes. The HMM imposes geometric state durations, yet NBA help defense and double teams are often brief; the authors acknowledge a hidden semi-Markov model would be more appropriate [PAGE 10]. EM is fitted on only 30 possessions for Γ, though stability is checked across 100 games [PAGE 8]. Variational inference for the frequency model introduces an unquantified KL gap relative to the true posterior [PAGE 23]. The CAR prior for offensive efficiency requires (I − ζM)⁻¹D to be symmetric positive-definite; ζ = 0.9 is chosen to enforce this [PAGE 22]. Identifiability requires σ_β² < σ_α² [PAGE 23]. The one-square-foot discretization may alias sub-foot shooting variation [PAGE 12]. Finally, individual defensive effects cannot be fully disentangled from team defensive strategy [PAGE 28].

Word count check: roughly 400+ words. Good.

SOURCE_OPERATORS_AND_EQUATIONS: list equations with LaTeX. I'll include maybe 10 equations with breakdown. Need units and page citations.

I will write LaTeX inline.

Then RETROCAUSAL_GENEALOGY, RECURSIVE_THEORY_OF_MIND, CROSS_LAYER_VETO_ADJUDICATION, RLVR_COUNTERFACTUAL_VETOES.

Make sure total > 1000 words.

Let's write.

One concern: The user said "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I must not invent any equations. All equations must be from the source. I will strictly use equations present in the text. For example, the entropy formula is in the text: Σ z log(z). I can include that. The CAR prior formula is in the text. The HMM likelihood is in the text (though some notation is garbled in the OCR, I'll reconstruct based on what's visible and cite page). I need to be careful not to over-infer. I'll cite page numbers and describe the equation as it appears.

Let's draft each section now in final form.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inferential chain is a multi-hop spatial-temporal pipeline that moves from raw optical tracking coordinates to a defensive shot chart. First, optical tracking at 25 frames per second records x, y coordinates for the ball and all ten athletes, with annotations for possession, fouls, and shot outcomes [PAGE 3]. Because defensive matchups are absent from the data, the authors infer who is guarding whom using a hidden Markov model. The canonical defender location μ_tk for defender j guarding offender k at time t is modeled as a convex combination of offender location O_tk, ball location B_t, and hoop location H: μ_tk = γ_o O_tk + γ_b B_t + γ_h H, subject to Γ1 = 1 where Γ = [γ_o, γ_b, γ_h] [PAGE 4-5]. Observed defender locations are emitted conditionally as D_tj | (I_tjk = 1, Γ, σ_D²) ~ Normal(μ_tk, σ_D²) [PAGE 5]. The HMM assumes a constant transition probability ρ that a defender switches to guarding any offender at every instant, for all defenders j [PAGE 6]. The EM algorithm estimates Γ, σ_D², and ρ; the M-step update for Γ is a constrained generalized least squares solution Γ̂_GLS = (XᵀΩ⁻¹X)⁻¹XᵀΩ⁻¹D with X = [O, B, H] [PAGE 7]. The fitted weights are Γ̂ = (0.62 ± 0.02, 0.11 ± 0.01, 0.27 ± 0.02), meaning defenders position themselves roughly 70% of the way from the hoop toward the offender they guard, and about 73% of the way from the basket to the ball carrier [PAGE 8].

Second, the court is parameterized into data-driven shot types. Shot attempts are modeled as a log Gaussian Cox process over a 47 ft × 50 ft offensive half court, discretized into one-square-foot tiles for computational tractability [PAGE 12]. The posterior over the log-intensity field z_k uses a Gaussian process prior with a squared-exponential kernel; the length scale ν_k receives a gamma prior with mass dispersed around 8 feet, encoding the belief that shooting variation is locally smooth on that scale [PAGE 14]. Non-negative matrix factorization then decomposes the player-by-tile intensity matrix Λ ≈ WL under a Kullback-Leibler divergence loss, with B = 6 non-negative bases corresponding to interpretable shot types such as the restricted area and corner threes [PAGE 15-16].

Third, defensive influence is decomposed into shot frequency and shot efficiency. Frequency is modeled as a multinomial logit over 5 × B shooter-basis outcomes plus a no-shot category: η_nk = α_kb + Σ_{j=1}^5 Z_n(j,k) β_jb, where Z_n(j,k) is the fraction of possession n that defender j guards offender k and Σ_k Z_n(j,k) = 1 [PAGE 19-20]. Efficiency is modeled with a Bayesian logistic regression on the binary make/miss outcome: logit(P(Y_n = 1)) = θ_kb + φ_jb + ξ_b D_n, where D_n is the defender-shooter distance in feet, capped at an inferred maximum [PAGE 21].

Gray-zone audit. Several structural assumptions create breakdown regimes. The HMM imposes geometric state durations, yet NBA help defense and double teams are often brief; the authors explicitly note a hidden semi-Markov model would be more appropriate [PAGE 10]. The Γ weights are estimated from only 30 possessions, although sensitivity analysis across 100 games shows stability [PAGE 8]. Variational inference for the frequency model introduces an unquantified gap between the Gaussian lower bound and the true posterior [PAGE 23]. The conditional autoregressive prior for offensive efficiency requires (I − ζM)⁻¹D to be symmetric positive-definite; ζ = 0.9 is selected to guarantee this property [PAGE 22]. Identifiability of the random-effects variance components requires σ_β² < σ_α² [PAGE 23]. The one-square-foot discretization may alias sub-foot shooting variation [PAGE 12]. Finally, individual defensive effects cannot be fully isolated from team defensive strategy; a point guard’s paint suppression depends heavily on whether he plays with an imposing center [PAGE 28].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
1. Canonical defender position [PAGE 4-5]:
   μ_tk = γ_o O_tk + γ_b B_t + γ_h H,   Γ = [γ_o, γ_b, γ_h],   Γ1 = 1.
   Units: O_tk, B_t, H ∈ ℝ² in feet; γ coefficients dimensionless and sum to one. Breakdown: if offender, ball, and hoop are collinear, the convex combination remains defined but loses directional identifiability; unconstrained Γ would produce uninterpretable weights outside the simplex.

2. Emission density [PAGE 5]:
   D_tj | (I_tjk = 1, Γ, σ_D²) ~ Normal(μ_tk, σ_D²).
   Units: D_tj and μ_tk in feet; σ_D² in square feet. Breakdown: heteroskedastic defender noise near the basket is not modeled; σ_D² is assumed constant across court regions.

3. HMM transition homogeneity [PAGE 6-8]:
   P(switch | defender j) = ρ, constant across j; estimated ρ̂ ranges from 0.96 to 0.99 across games [PAGE 8]. Stay-odds Q = 1 − ρ. Breakdown: geometric state durations are too restrictive for brief help-defense stints; a hidden semi-Markov alternative is proposed but not implemented [PAGE 10].

4. M-step generalized least squares [PAGE 7]:
   Γ̂_GLS = (XᵀΩ⁻¹X)⁻¹XᵀΩ⁻¹D,   X = [O, B, H],   Ω diagonal with entries σ² / Ê_tjk.
   Units: dimensionless fitted shares. Breakdown: singular if XᵀΩ⁻¹X is not full rank (collinearity among offender, ball, and hoop locations); constraint Γ̂1 = 1 enforced via reparameterization around Γ̂_GLS.

5. Estimated defensive positioning weights [PAGE 8]:
   Γ̂ = (0.62, 0.11, 0.27); for ball carriers, effective rule is 0.73 O_tk + 0.27 H.
   Units: dimensionless. Breakdown: relative, not absolute, scale; weights describe average canonical behavior, not individual defender idiosyncrasy.

6. Discretized LGCP likelihood [PAGE 13-14]:
   n_kv ~ Poisson(λ_kv ΔA),   ΔA = 1 ft²,   court = 47 ft × 50 ft offensive half court [PAGE 12].
   Units: counts n_kv dimensionless; intensity λ_kv in shots per square foot. Breakdown: assumes complete spatial randomness within each tile; sub-tile structure is aliased.

7. Gaussian process prior for log intensity [PAGE 14]:
   z_k ~ Normal(0, Σ_k),   Σ_k from squared-exponential kernel with length scale ν_k ~ Gamma (prior mass near 8 ft).
   Units: ν_k in feet. Breakdown: ν_k → 0 recovers white noise (no spatial smoothness); ν_k → ∞ collapses to a constant-intensity Poisson process.

8. NMF shot-type decomposition [PAGE 15]:
   Λ ≈ WL,   W ≥ 0, L ≥ 0,   minimize KL(Λ || WL),   B = 6 ≪ V.
   Dimensions: Λ ∈ ℝ₊^(N×V), W ∈ ℝ₊^(N×B), L ∈ ℝ₊^(B×V). Breakdown: KL divergence is undefined where Λ and WL have mismatched zero support without smoothing; non-negativity yields parts-based bases but factorization non-uniqueness remains possible.

9. Shot-frequency multinomial logit [PAGE 19-20]:
   η_nk = α_kb + Σ_{j=1}^5 Z_n(j,k) β_jb,   Z_n(j,k) = fraction of possession n defender j guards offender k,   Σ_k Z_n(j,k) = 1.
   Outcomes: 5 × B shooter-basis pairs plus “no shot.” Units: η_nk on logit scale; Z_n dimensionless time fractions. Breakdown: matchup error from the HMM is absorbed into β_jb; no explicit modeling of shot-clock pressure.

10. Hierarchical random-effects priors [PAGE 20-23]:
    α_kb ~ Normal(μ_αb, σ_α²),   β_jb ~ Normal(μ_βGb, σ_β²),   G ∈ {1,2,3} defender types [PAGE 18].
    Identifiability constraint: σ_β² < σ_α², with σ_total = σ_α² + σ_β² fixed [PAGE 23]. Breakdown: if σ_β² approaches σ_α², defensive and offensive effects become non-identifiable.

11. Shot-efficiency Bayesian logistic [PAGE 21-22]:
    logit(P(Y_n = 1)) = θ_kb + φ_jb + ξ_b D_n.
    Units: D_n in feet, capped at inferred maximum; φ_jb distance-independent contesting skill; ξ_b ≥ 0 with half-normal prior N⁺ [PAGE 22]. Breakdown: empirical log-odds are linear in distance only up to ~5–6 ft, then flatten [PAGE 21, Figure 7]; beyond the distance cap, the defender effect saturates.

12. Conditional autoregressive offensive prior [PAGE 22]:
    θ_k | θ_{N(k)}, μ_θb ~ Normal(ζ · mean_{k′∈N(k)} θ_{k′}, ...),   ζ = 0.9.
    Joint prior proper iff (I − ζM)⁻¹D is symmetric positive-definite, where M encodes the 10-nearest-neighbor shot-weight network [PAGE 22]. Breakdown: if ζ ≥ 1 or the precision matrix loses positive-definiteness, the prior is improper and posterior inference fails.

13. Variational inference bound [PAGE 23]:
    Lower bound on multinomial likelihood using a Gaussian bound on the log-sum-exp Hessian [Böhning, 1992]; approximate posterior maximized by iterative variational updates. Breakdown: KL divergence between true posterior and variational approximation is not reported.

14. Efficiency MCMC [PAGE 23]:
    Hybrid Monte Carlo via STAN; 2000 draws; convergence diagnosed by R̂ ≈ 1 for all parameters [Gelman & Rubin, 1992].

15. Out-of-sample predictive log-likelihood [PAGE 24, Table 3]:
    Full model shooter log-likelihood −25474.93 vs. no-defense −25725.17; efficiency −3202.09 vs. no-spatial −3270.99.
    Units: log-likelihood dimensionless. Breakdown: cross-validation is within the 2013–2014 season only; temporal generalization is untested.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a lineage of sports analytics that begins with the inadequacy of the box score. Traditional defensive statistics—steals, blocks, and defensive rebounds—persist because they summarize salient, easily observed events, yet they capture only a small fraction of defensive effectiveness [PAGE 1-2]. Individual plus/minus attempts to value players through aggregate team differential but suffers from player confounding, since a player’s plus/minus depends on teammate skill [PAGE 2]. Regression-adjusted plus/minus methods (Rosenbaum, 2004; Sill, 2010; Macdonald, 2011) attempt to control for this confounding using regression frameworks [PAGE 2]. In hockey, competing process hazard models have valued players through goal outcomes with censoring at player changes, but they ignore within-possession spatial dynamics such as movement and passing [PAGE 3]. Cervone et al. (2014) advanced real-time basketball evaluation with multi-scale semi-Markov models using optical tracking data [PAGE 3].

Methodologically, the paper inherits hidden Markov modeling and EM inference from Bishop et al. (2006) [PAGE 6], log Gaussian Cox processes from Møller et al. (1998) [PAGE 12, 14], non-negative matrix factorization from Lee and Seung (1999, 2001) for parts-based decomposition [PAGE 15-16], and conditional autoregressive spatial priors from Cressie (1993) [PAGE 22]. Goldsberry’s earlier court-vision work established the descriptive value of spatial shot charts, but this paper adds inferential structure for defensive skill [PAGE 3].

Multi-week traps lurk in the estimation design. The canonical positioning weights Γ are learned from only 30 possessions, though the authors show stability across 100 games with Γ̂ = (0.62 ± 0.02, 0.11 ± 0.01, 0.27 ± 0.02) [PAGE 8]. The transition parameter ρ is more variable across games (0.96 to 0.99), suggesting that short-term defensive switching behavior is non-stationary [PAGE 8]. Per-player defensive samples are small, so hierarchical shrinkage borrows strength across defender types inferred by K-means clustering [PAGE 18]. However, offensive players do not cluster by listed position; position is a poor predictor of shot selection [PAGE 18-19]. Hyperparameters for shrinkage are tuned via cross-validation on the 2013–2014 season, which may not generalize across weeks or future seasons [PAGE 23]. Most critically, individual effects are interpreted in team context: a defender’s paint suppression depends on whether he plays with an imposing center, and true individual defensive skill cannot be isolated without modeling team interactions [PAGE 28]. The authors themselves plan future work on time-varying defensive performance and player maturation across coaching changes, acknowledging that the current snapshot is static [PAGE 28-29].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency, under uncertainty or data scarcity, to revert to legible but incomplete observables. In basketball analytics, this means falling back on steals, blocks, and defensive rebounds because they are salient and easy to record, even though they summarize only a limited slice of defensive play [PAGE 1-2]. The present model counters this crisis habit by exploiting optical tracking to infer latent defensive intent—who is guarding whom—rather than integrating out within-possession detail as plus/minus does [PAGE 2-3].

The counter-trap is the assumption that high-resolution spatial data automatically resolves identifiability. The HMM effectively models a theory of mind: it infers each defender’s guarded opponent from spatial configuration, using temporal smoothness to maintain matchups across switches and double teams [PAGE 4-6]. Defensive entropy quantifies how unpredictable a defender’s assignments are, capturing team-level switching chaos [PAGE 9-10]. Yet the model still assumes homogeneous transition probabilities ρ across defenders and geometric state durations, which cannot represent the rapid, context-dependent “help” rotations that define NBA defense [PAGE 10-11]. If the offense anticipates a defender’s habitual help position, the spatial model may misattribute strategic intent to individual skill.

The clock layer imposes hard observational boundaries. Only possessions lasting at least five seconds in the half court are analyzed; activity after the first shot, fouls, and stoppages are excluded [PAGE 23]. This selection conditions the inference on settled, half-court states and ignores transition defense, where spatial structure differs. Because the HMM’s geometric duration assumption mismatches brief defensive switches, the model’s matchup inference may be biased precisely during high-leverage clock moments when switches occur most frequently [PAGE 11]. Future work on time-varying defensive performance acknowledges that defensive skill matures across weeks and seasons, a dynamic the current cross-sectional model cannot capture [PAGE 28-29].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The offensive half court is a 47 ft × 50 ft rectangle, discretized into one-square-foot tiles [PAGE 12]. Tracking data arrive at 25 frames per second from stadium rafter cameras [PAGE 3]. Defender-shooter distance D_n is measured in feet and capped at an inferred maximum; empirically, the logit effect of distance is linear only up to roughly 5–6 feet, after which additional distance provides no further efficiency benefit [PAGE 21]. Canonical defender positioning places the average defender about 70% of the way from hoop to offender (Γ̂ = 0.62 O + 0.11 B + 0.27 H), and about 73% of the way from basket to ball carrier [PAGE 8].

Biomechanical layer. The model does not include defender velocity or acceleration as covariates, despite their obvious relevance to close-outs and close contests [PAGE 11]. It assumes man-to-man defense and does not model zone schemes, which are rare in the NBA but relevant to other leagues [PAGE 10-11]. The geometric HMM duration assumption cannot represent brief help-defense stints or short double teams before a defender returns to a primary matchup [PAGE 11]. Camera occlusion and tracking error at the rafters propagate into uncertainty in I_tjk, particularly near the basket where multiple defenders converge [PAGE 8, Figure 2].

Weather/environment layer. Games are indoor, so weather is not a source of variation; however, arena lighting, camera calibration, and rafter obstructions are not modeled as nuisance factors in the tracking pipeline [PAGE 3].

Veto rules. Inference is vetoed if: (1) a possession is shorter than five seconds or not in the half court [PAGE 23]; (2) a foul or stoppage occurs [PAGE 23]; (3) D_n exceeds the capped maximum, at which point ξ_b D_n no longer modulates efficiency [PAGE 21-22]; (4) (I − ζM)⁻¹D fails to be symmetric positive-definite, rendering the CAR prior improper [PAGE 22]; or (5) XᵀΩ⁻¹X is singular, breaking the GLS update for Γ [PAGE 7]. All vetoes are structural and physical, not derived from market prices or wagering conditions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Restricted-area efficiency/frequency dissociation. Veto condition: If held-out data from a subsequent NBA season show Dwight Howard’s basis-1 efficiency effect φ + ξD* more negative than Roy Hibbert’s across at least 50 defended shots each, the claimed distinction between frequency suppression and efficiency contesting is not portable. Prediction: Hibbert’s basis-1 effect remains ≤ −0.45 while Howard’s remains above −0.20, preserving the observed divergence [PAGE 26-27, Table 4].

Scenario 2 — On-ball attention and double-teaming. Veto condition: If independent tracking data show DeMar DeRozan’s on-ball attention ratio (total guarded time divided by total playing time) at or below 1.00, the Table 1 finding that elite on-ball players are double-teamed roughly 20% of the time is invalidated. Prediction: DeRozan and Kevin Durant remain the top two on-ball attention leaders with ratios exceeding 1.18 [PAGE 9-10, Table 1].

Scenario 3 — Team defensive entropy stationarity. Veto condition: If the Miami Heat’s defensive entropy falls below 0.45 during any five-week span with a stable roster, the claim that Miami is the most active switching defense is context-dependent rather than stable. Prediction: Miami remains in the top three for defensive entropy across at least two consecutive multi-week evaluation windows [PAGE 10, Table 2].
</RLVR_COUNTERFACTUAL_VETOES>