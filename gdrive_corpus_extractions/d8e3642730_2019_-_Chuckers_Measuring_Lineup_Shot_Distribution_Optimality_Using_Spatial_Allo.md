---
source: "2019 - Chuckers Measuring Lineup Shot Distribution Optimality Using Spatial Allocative Efficiency Models - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 13
model: baidu/ernie-5.5-flash-preview:free
words: 5605
---

<NATIVE_REASONING>
The user has provided a specific academic paper: "Chuckers: Measuring Lineup Shot Distribution Optimality Using Spatial Allocative Efficiency Models" from MIT Sloan Sports Analytics Conference 2019 by Sandholtz, Mortensen, and Bornn.

They want me to produce a structured analysis with these XML sections:
- THINK_TRACE (>=400 words)
- SOURCE_OPERATORS_AND_EQUATIONS (formal LaTeX, units, page citations, breakdown)
- RETROCAUSAL_GENEALOGY (historical/scientific lineage & multi-week traps)
- RECURSIVE_THEORY_OF_MIND (crisis habit regression vs counter-trap vs clock)
- CROSS_LAYER_VETO_ADJUDICATION (physical/biomechanical/weather veto proof)
- RLVR_COUNTERFACTUAL_VETOES (3 verifiable RLVR veto scenarios + predictions)

Total >= 1,000 words.

Strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across those exact XML sections.

This is a legitimate request to analyze an academic paper. The paper is a real published paper on spatial allocative efficiency in NBA shot distribution. Let me engage with the actual content.

Let me think about what this paper actually does:

The paper introduces LPL (Lineup Points Lost) and PLC (Player LPL Contribution) metrics. The core idea:
- Build Bayesian hierarchical models to estimate FG% surfaces and FGA rate surfaces for players across court locations
- Rank players within a lineup by FG% and by FGA rate at each spatial cell
- Optimal allocative efficiency = perfect rank correspondence (best shooters take most shots)
- LPL measures expected points lost from deviation from this optimum
- PLC attributes LPL to individual players (undershooting vs overshooting)

Key equations:
1. FG% model (logit): logit(p) = α_j + f_j(z), where f_j(z) is a player-specific Gaussian process, approximated with basis functions f_j(z) = Σ φ_d β_d^(j)
   - basis function φ_d(·) = H^(j) φ(·), where φ is piecewise linear (Lindgren SPDE approach), H^(j) from NMF of Poisson regression coefficients
   - CAR priors on weights β_d^(j)

2. FGA surfaces: Poisson point process smoothing, normalized to FGA per 100 possessions

3. Rank surfaces: Θ^FG%_ij and Θ^FGA_ij, rank 1-5 of player i's FG% / FGA relative to teammates in cell j

4. Rank correspondence: Θ^FGA_ij − Θ^FG%_ij (positive = under-use, negative = over-use)

5. LPL_j = Σ_{i=1}^{5} [OEP_ij − AEP_ij]
   where OEP_ij = V_j × FG%_ij × ᾱ_i(j_opt) and AEP_ij = V_j × FG%_ij × ᾱ_ij
   V_j = point value of made shot from cell j
   FG%_ij = model-based FG% for player i
   ᾱ_ij = smoothed FGA per 100 possessions
   Player ordering: i=1 = highest FGA rate in location j
   ᾱ_i(j_opt) = r̂_ij^FG%-th order statistic of shot attempt vector (redistribution)
   
   Wait, let me re-read. "The term ᾱ_i(j_opt) is the r̂_ij^FG% order statistic of the shot attempt vector (ᾱ_1j, ..., ᾱ_5j)". So the optimal redistribution assigns to player i the shot volume that is the rank-matched order statistic. This means the highest FG% player gets the highest shot volume, etc. This is the "sort by FG% rank and match to sorted shot volumes" operation.

   Note LPL_j ≥ 0 and if r̂^FG% = r̂^FGA for all i then LPL_j = 0.
   LPL_j scaled to per 100 possessions.
   LPL per shot = LPL_j / Σ_i ᾱ_ij

6. PLC_ij = LPL_j × (OEP_ij − AEP_ij) / Σ_i |OEP_ij − AEP_ij|
   Second term apportions LPL among 5 players proportional to contribution size.
   PLC > 0 = undershooting; PLC < 0 = overshooting.

Now, this is a formal analysis. I need to be rigorous. The invariants say:
- No toy equations. State formal LaTeX, units, assumptions, breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes.

Let me think about the breakdown/singularity regimes:
- The optimality guarantee LPL_j ≥ 0 depends on the rearrangement inequality. Actually this is a rearrangement inequality! The optimal allocation is achieved by matching sorted FG% to sorted shot volumes. Wait, let me think more carefully.

Actually the LPL construction is based on a rearrangement-type inequality. Let me verify:

LPL_j = Σ_i [OEP_ij − AEP_ij] = Σ_i V_j × FG%_ij × [ᾱ_i(j_opt) − ᾱ_ij]

Wait no. Let me re-read. OEP_ij = V_j × FG%_ij × ᾱ_i(j_opt). Here ᾱ_i(j_opt) is the reassigned shot volume for player i under optimal. AEP_ij = V_j × FG%_ij × ᾱ_ij. So:

LPL_j = Σ_i V_j × FG%_ij × [ᾱ_i(j_opt) − ᾱ_ij]

The optimal redistribution: sort players by FG% descending, assign the sorted shot volumes descending. So the highest FG% player gets the most shots. This is exactly the rearrangement inequality: to maximize Σ_i a_i b_{σ(i)}, you sort a and b in the same order. Here a_i = FG%_ij (the value we want to maximize the sum of products) and b_i = shot volumes. To maximize expected points Σ FG%_ij × (shots assigned to i), we pair the largest FG% with the largest shot count.

Wait, but the players are already ordered by shot volume (i=1 = highest FGA). And the optimal assigns shot volume by FG% rank. So OEP uses ᾱ sorted by FG% rank. Since the multiset of shot volumes {ᾱ_1j, ..., ᾱ_5j} is fixed, and we're just permuting which player gets which volume. The optimum permutes to maximize Σ FG%_ij × (assigned volume). By rearrangement inequality, this is maximized when FG% and assigned volumes are sorted in the same order — i.e., assign the r-th largest FG% player the r-th largest shot volume. The order statistic r̂_ij^FG% (the FG% rank of player i) indexes into the sorted shot volume vector.

So OEP is the maximum of Σ FG%_ij × (permutation of shot volumes) over all permutations, and AEP is the identity permutation. Therefore LPL_j = OEP − AEP ≥ 0 by the rearrangement inequality. Good, this is a rigorous mathematical foundation. And LPL_j = 0 iff the FG% rank order equals the FGA order (identity already sorted), i.e., r̂^FG% = r̂^FGA.

Breakdown/singularity regimes:
1. Ties in FG% or FGA — the order statistics are not unique, and the "rank" is ambiguous. When two players have equal FG% (e.g., from identical empirical rates or from the prior), the rank assignment is ill-defined. The CAR prior + GP smoothing tends to make surfaces continuous, so exact ties are measure-zero, but on a discrete grid with rounded posterior means, ties can occur. This is a discrete-tie singularity.

2. The FG%-independence assumption: FG% surfaces are lineup-independent. This breaks when defensive attention/spacing changes FG% (Curry gravity). The paper explicitly acknowledges this on [PAGE 3]. Under this violation, the "optimal" allocation is mis-specified — a player may look under-used because his FG% surface is inflated by gravity effects that would disappear if he shot more.

3. Zero shot volume: if ᾱ_ij = 0 in some cell (player never shoots there), FGA surface smoothing prevents exact zeros, but the Poisson point process can produce very small values. When Σ_i ᾱ_ij → 0, LPL per shot = LPL_j / Σ ᾱ_ij → 0/0 indeterminate. This is a genuine breakdown regime. The paper smooths to prevent this, but at the tails (far corners, low-frequency cells) the denominator can be tiny, inflating LPL-per-shot variance.

4. Confounding (Section 3.4): drive-and-kick, play calls, shot clock, defensive pressure. Westbrook corner-3 example. The metric attributes over-use/under-use to individuals when the actual cause is the generative play structure. This is a specification/omitted-variable breakdown, not a mathematical singularity but an interpretive one.

5. Rank coarsening: reducing FG%/FGA to ranks discards magnitude info (Section 3.2 acknowledges). LPL then reintroduces magnitude through FG% × ᾱ, but the optimal redistribution is defined only on ranks (order statistics), so the "optimum" is constrained to be a permutation of observed shot volumes — it cannot recommend taking MORE total shots, only reallocating existing ones. This is a structural constraint: LPL is invariant to total shot volume and measures only distribution.

Now the derivation for RLVR counterfactuals. RLVR = Reinforcement Learning with Verifiable Rewards. The idea is to propose verifiable predictions that could falsify/validate the metric. The "veto" framing: scenarios where the model's prediction would be vetoed by physical/biomechanical reality.

Let me think about the requested sections more concretely and the "GSE + GSI Frontier Reasoning Foundry" framing. This seems to be a roleplay/analytical framework. GSE = maybe "Game State Estimation" or some acronym; GSI = "Game Situation Inference"? The framework wants deep multi-hop reasoning about the paper. I'll engage with the substance.

Note: The framing includes some odd elements like "RETROCAUSAL_GENEALOGY" and "multi-week traps" and "crisis habit regression vs counter-trap vs clock." These seem to be part of a persona/methodology. I should engage with them in a way that's substantive to the paper analysis rather than inventing fake sports-betting stuff. The invariant explicitly forbids betting lines and toy equations, so I should keep it rigorous and tied to the actual paper.

Let me interpret these sections in the context of analyzing this basketball analytics paper:
- RETROCAUSAL_GENEALOGY: The historical/scientific lineage of the methods (SPDE/GMRF Lindgren-Rue-Lindström, Besag CAR, Lee-Seung NMF, Cervone et al. shot satisfaction, Goldman-Rao allocative efficiency, Oliver usage curves, process convolutions Higdon). Multi-week traps = methodological pitfalls that take weeks to detect (e.g., identifiability issues in the hierarchical model, MCMC convergence).
- RECURSIVE_THEORY_OF_MIND: Modeling the decision-makers (players/coaches) — why does a player over-shoot? Game-theoretic recursive reasoning about shot selection. Crisis habit regression = under high-pressure/stressed game states, players regress to dominant habits (Westbrook volume shooting). Counter-trap vs clock = shot clock considerations.
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto — well "weather" doesn't apply to basketball (indoor sport), so the veto would be biomechanical (shot mechanics, fatigue, court geometry) and the indoor-environment (no weather) note.
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable predictions that would falsify the LPL framework or where it would be vetoed.

I need to be careful about the "weather" veto — basketball is indoor, so I should note that the weather-veto channel is structurally inapplicable (a genuine cross-layer veto: the domain has no weather exogenous variable). That's a nice honest observation.

Let me be rigorous about units:
- FG%: dimensionless probability in [0,1]
- ᾱ_ij: FGA per 100 possessions, units [attempts / 100 possessions] — this is a rate
- V_j: points per made shot ∈ {2, 3} (and 1 for FT but they excluded tip-ins/putbacks; actually free throws aren't in shot chart location — the shot chart is field goals, so V_j ∈ {2,3})
- OEP_ij, AEP_ij: V_j [points] × FG% [dimensionless] × ᾱ [attempts/100 poss] = points per 100 possessions [points / 100 possessions]
- LPL_j: points per 100 possessions
- PLC_ij: points per 100 possessions (LPL_j times a dimensionless share)
- LPL per shot: LPL_j [points/100 poss] / Σᾱ [attempts/100 poss] = points per attempt [points/attempt]

Information units: the CAR prior encodes spatial information via a precision matrix; the KL divergence or mutual information could be invoked. The rank surfaces discard information (Section 3.2) — reducing continuous surfaces to 5-level ranks is a quantization that loses information; we can quantify this as a reduction in entropy / mutual information between FG% and FGA. Actually, I can note the rank quantization maps a continuous surface to a discrete ordinal variable with 5 levels, information loss bounded by log2(5) bits per cell per player relative to... hmm, I should be careful not to invent fake equations. Let me keep information-theoretic claims qualitative or clearly marked as my own formalization (not the paper's).

The invariant says "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units." So I can state formal equations from the paper and standard math, but I must not invent nonsense ratios. I should attribute equations to the paper and mark any of my own derivations clearly.

Let me now also verify the rearrangement inequality claim carefully since that's my main mathematical contribution.

Setup: In cell j, players i = 1..5. Fixed inputs:
- FG%_ij: model-based make probability for player i in cell j (lineup-independent surface value)
- ᾱ_ij: smoothed FGA per 100 poss for player i in cell j (lineup-specific), and players indexed so that i=1 has the largest ᾱ (i.e., ᾱ_1j ≥ ᾱ_2j ≥ ... ≥ ᾱ_5j).

Wait, the paper says "B is sorted so that B = 1 corresponds to the player with the highest FGA rate in location B for a given lineup." So index i (they use B but let me use i) is the FGA-rank order. So ᾱ_1j ≥ ᾱ_2j ≥ ... in the actual allocation.

AEP_ij = V_j · FG%_ij · ᾱ_ij (actual: player i takes his own observed volume ᾱ_ij).

OEP: redistribute the shot attempt vector (ᾱ_1j, ..., ᾱ_5j) according to FG% rank. Player i's optimal volume is the r̂_ij^FG%-th order statistic of the vector (ᾱ_1j,...,ᾱ_5j). The order statistics of the shot volume vector, sorted descending, are ᾱ_(1) ≥ ᾱ_(2) ≥ ... ≥ ᾱ_(5). Player i gets ᾱ_(r̂_ij^FG%), i.e., the shot volume corresponding to his FG% rank. So the player ranked #1 in FG% gets the largest volume ᾱ_(1), etc.

OEP_ij = V_j · FG%_ij · ᾱ_(r̂_ij^FG%).

Then LPL_j = Σ_i (OEP_ij − AEP_ij) = V_j Σ_i FG%_ij [ᾱ_(r̂_ij^FG%) − ᾱ_ij].

Total optimal expected points in cell = Σ_i V_j FG%_ij ᾱ_(r̂_ij^FG%) = V_j Σ_r FG%_(r) ᾱ_(r) where both sorted descending (FG%_(r) is r-th largest FG%). By the rearrangement inequality, Σ_r FG%_(r) ᾱ_(r) ≥ Σ_i FG%_ij ᾱ_{σ(i)} for any permutation σ, in particular ≥ the actual (identity in FG% vs volume). Hence LPL_j ≥ 0. Equality iff FG% order = FGA order (the actual allocation is already sorted-matched), i.e., r̂^FG%_ij = i for all i, equivalently r̂^FG% = r̂^FGA. 

This is rigorous. The rearrangement inequality is the exact mathematical backbone. I should present this.

Now breakdown regimes for the rearrangement construction:
- Ties: if FG% has ties, r̂^FG% is not a strict order and the "order statistic" assignment is non-unique; LPL depends on tie-breaking. Measure-zero under continuous GP posterior means but real on discrete grid.
- The optimum is a permutation of the SAME multiset of shot volumes; it conserves total FGA. So LPL cannot capture "the lineup should shoot more/less total" — it's purely allocative. This is by construction (Section 3.3: "LPL and PLC say nothing about whether shots from a given region are efficient or not").
- Zero/tiny denominators: LPL per shot blows up when Σ_i ᾱ_ij → 0. Poisson smoothing keeps it positive but at low-frequency cells variance explodes.

Now let me also address the "spatial allocative efficiency" as an information/probability statement.

Let me structure my answer. I need >= 1,000 words across the six sections. THINK_TRACE >= 400 words. Let me make sure to hit that.

I'll be careful with the persona framing (GSE + GSI Frontier Reasoning Foundry) but keep it professional and grounded in the actual paper. I won't invent betting content (forbidden). I'll cite page markers and verbatim quotes.

Let me gather verbatim quotes I can use:
- [PAGE 1]: "This aspect of efficiency—the allocation of shots within a lineup—is the primary focus of our paper."
- [PAGE 1]: "Allocative efficiency is fundamentally a spatial problem."
- [PAGE 2]: the model "logit(p) = α_j + f_j(z)" (garbled in OCR but I can reconstruct) — actually the OCR shows "log %! 1 −!( = *+ + -(/)(1)" which is logit(p_ij) = α_j + f_j(z). Let me quote carefully but note OCR.
- [PAGE 2]: "we use a low-dimensional basis function representation"
- [PAGE 3]: "In order to have sufficient data to reliably estimate the FG% surfaces, we assume that these surfaces are lineup independent. We recognize this assumption may be violated in some cases, as players who draw a lot of defensive attention can improve the FG% of their teammates"
- [PAGE 5]: "LPL is defined as the difference in expected points between the actual distribution of shot attempts from a given lineup and the expected points had those same shots been taken according to the optimal redistribution."
- [PAGE 5-6]: "Note that by our definition of the optimum, LPL@ ≥0 and if ?̂@/A = ?̂@/K for all B then LPL@ = 0." (LPL_j ≥ 0 and =0 iff FG%=FGA rank)
- [PAGE 6]: "The term ᾱ_i(j_opt) is the r̂_ij^FG% order statistic of the shot attempt vector (ᾱ_1j, ..., ᾱ_5j)"
- [PAGE 7]: "by the nature of how LPL is constructed, there cannot be any areas where the entire lineup overshoots or undershoots. For this reason, our method does not shed light on shot selection."
- [PAGE 7-8]: Westbrook corner-3 drive-and-kick example: "Westbrook can't both drive down the lane and simultaneously pass to himself in the corner."
- [PAGE 9]: Table 2 values, e.g., "Lawson, Afflalo, Gay, Cousins, Koufos ... Tot LPL 2.50" (highest), "Teague, Ellis, George, Young, Turner ... 0.26" (lowest).
- [PAGE 3]: "FGA surfaces are estimated by smoothing a player's empirical shot attempts using a Poisson point process. We then normalize the surfaces to FGA per 100 possessions"
- [PAGE 3]: "spatial grid of 1 ft by 1 ft cells"
- [PAGE 4]: Pachulia example.

References for genealogy [PAGE 11]:
- [6] Cervone et al. "A Multiresolution Stochastic Process Model for Predicting Basketball Possession Outcomes" JASA 2016 (shot satisfaction)
- [5] Goldman and Rao "Allocative and dynamic efficiency in nba decision making" MIT Sloan 2011
- [8] Lindgren, Rue, Lindström SPDE approach JRSS-B 2011
- [9] Lee and Seung NMF Nature 1999
- [10] Besag CAR JRSS-B 1974
- [7] Higdon process convolutions 2002
- [4] Oliver Basketball on Paper 2004 (usage curves)
- [15] Sandholtz and Bornn "Replaying the NBA" MIT Sloan 2018

Good. Now let me write.

Let me be mindful: The invariant wants "SI/information/probability units." I'll give units for each quantity. Information units: I'll discuss the rank-quantization information loss with proper framing (entropy of a 5-level ordinal, mutual information between FG% rank and FGA rank) — but I must present these as my formalization, clearly, and not claim they're in the paper. Actually to be safe and rigorous, I can present the mutual information I(FG%-rank; FGA-rank) as a natural information-theoretic restatement of "rank correspondence," noting it's my formalization. This is legitimate formal math, not a toy equation.

Let me define: Let R = r̂^FG% (random rank over cells, weighted by shot volume), Q = r̂^FGA. Perfect allocative efficiency ⟺ R = Q a.s. ⟺ I(R;Q) = H(R) = log2(5) bits if uniform. The rank-correspondence surface Θ^FGA − Θ^FG% is a per-cell realization of Q − R; its volume-weighted expected absolute value E[|Q−R|] is a Gini-Kendall-type discrepancy (Kendall tau distance). This connects to Kendall's tau! The rank correspondence is essentially related to Kendall's tau distance between the two rankings. I can note this. LPL is a value-weighted version.

Actually, LPL is not exactly Kendall tau; it's the expected-points gap. But there's a clean relationship: LPL_j = V_j Σ_i FG%_ij [ᾱ_(r̂^FG%_ij) − ᾱ_ij], and the sign pattern of the per-player term (OEP − AEP) is what PLC uses. Good.

Now, let me also think about the "gray-zone audit" in THINK_TRACE: the ambiguous cases — Pachulia/Curry left mid-range (PAGE 4), where the metric could misfire due to tiny samples. And the tie-handling. And the lineup-independence assumption being the biggest gray zone.

Let me write the response now. I'll aim for depth and rigor. Let me make sure each section is substantial.

I want to make sure I clearly reconstruct the OCR'd equations into proper LaTeX:

FG% model (PAGE 2): 
logit(p_ij) = log(p_ij / (1 − p_ij)) = α_j + f_j(z_i)
where p_ij = probability shot by player j at location z_i is made; α_j player intercept; f_j(z) player-specific GP.
Basis representation: f_j(z) = Σ_{d=1}^{D} φ_d(z) β_d^(j)
φ_d(·) = H^(j) φ(·) where φ(·) is length-(m+1) vector from piecewise linear function (Lindgren), H^(j) is 1×(m+1) NMF weight vector for player j.
CAR priors on β_d^(j) using player adjacency from clustering shot profiles.

FGA: Poisson point process smoothing of empirical attempts, normalized to per 100 possessions.

Rank surfaces: Θ^FG%_ij, Θ^FGA_ij ∈ {1,...,5}.

Rank correspondence: Θ^FGA_ij − Θ^FG%_ij.

LPL_j = Σ_{i=1}^{5} [OEP_ij − AEP_ij]
OEP_ij = V_j × FG%_ij × ᾱ_i^(j_opt)
AEP_ij = V_j × FG%_ij × ᾱ_ij
ᾱ_i^(j_opt) = r̂_ij^FG%-th order statistic of (ᾱ_1j,...,ᾱ_5j)
LPL_j scaled per 100 possessions.
LPL per shot = LPL_j / Σ_{i=1}^{5} ᾱ_ij.

PLC_ij = LPL_j × (OEP_ij − AEP_ij) / Σ_{i=1}^{5} |OEP_ij − AEP_ij|
PLC per shot = PLC_ij / Σ_i ᾱ_ij.

Good. Now the rearrangement inequality proof and breakdown. Let me write everything.

For word count, THINK_TRACE alone should be 400+ words. Then the other five sections combined plus that should easily exceed 1,000. I'll write thoroughly.

Let me draft.

One more consideration: The framework name and section names include "WEATHER veto" — I'll honestly note basketball is indoors so the weather channel is a structural null (a cross-layer veto that is vacuously satisfied/inapplicable), and the real physical vetoes are biomechanical (shot fatigue, range limits, kinematic constraints) and geometric (court geometry, 1-ft grid resolution). This is an honest and rigorous treatment rather than forcing a fake weather analysis.

Now writing the final answer. I won't use tools since this is an analysis of provided text; no files to read (the drive source is referenced but the full text is given). I'll just produce the structured analysis. Let me make sure to not over-narrate.

Let me write it out.

I should keep the equations in LaTeX blocks. Let me produce clean markdown with the XML sections as headers/tags.

Let me count rough words as I go to ensure depth. I'll write generously.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper's spine is a single, elegant move: convert two continuous spatial surfaces (make-probability and attempt-rate) into per-cell ordinal ranks within a five-man lineup, then measure the *distance* between the two rank orderings, and finally re-inflate that rank distance with FG% and volume magnitudes to express it in expected points. The first hop is estimation (Section 2): a Bayesian hierarchical logit model for FG% and a Poisson point-process smoother for FGA. The second hop is ranking (Section 2.2): for each 1 ft × 1 ft cell, rank each player 1–5 on each surface. The third hop is correspondence (Section 3.1): difference the FGA rank from the FG% rank. The fourth hop is valuation (Section 3.2–3.3): convert the rank mismatch into Lineup Points Lost (LPL) and Player LPL Contribution (PLC).

The mathematically load-bearing claim is on [PAGE 5]–[PAGE 6]: "Note that by our definition of the optimum, LPL@ ≥0 and if ?̂@/A = ?̂@/K for all B then LPL@ = 0." My multi-hop reconstruction is that this non-negativity is not an empirical coincidence — it is the discrete rearrangement inequality in disguise. The construction fixes the multiset of shot volumes {ᾱ_1j,…,ᾱ_5j} in cell j and asks how to permute them across players to maximize total expected points Σ_i V_j·FG%_ij·(assigned volume). The rearrangement inequality says the maximizing permutation pairs the largest FG% with the largest volume, the second-largest FG% with the second-largest volume, and so on. That maximizing assignment is exactly what the paper calls the "optimal redistribution," indexed by the FG% order statistic r̂_ij^FG% ([PAGE 6]: "The term ᾱ_i(j_opt) is the r̂_ij^FG% order statistic of the shot attempt vector"). The *actual* allocation is one particular permutation (identity between volume-rank and volume). Therefore OEP is the maximum over permutations and AEP is a feasible permutation, forcing LPL_j = OEP − AEP ≥ 0, with equality iff FG%-rank equals FGA-rank everywhere. This is a genuine proof, not a heuristic.

The gray-zone audit surfaces four soft spots. (1) Ties. The rearrangement argument assumes strict orderings; on a discrete 1-ft grid with posterior means rounded to ranks, exact FG% ties (identical empirical rates, or prior-dominated cells) make r̂_ij^FG% non-unique, so LPL inherits a tie-breaking ambiguity. Under the continuous GP posterior this is measure-zero, but on the realized grid it is real. (2) The optimum conserves total attempts — it only redistributes the fixed volume vector. This is why [PAGE 7] insists "there cannot be any areas where the entire lineup overshoots or undershoots. For this reason, our method does not shed light on shot selection." LPL is invariant to whether the lineup shoots too much or too little; it is purely allocative. (3) The lineup-independence of FG% ([PAGE 3]: "we assume that these surfaces are lineup independent") is the deepest confound — Curry-gravity means a player's true make probability is endogenous to how often teammates shoot, so the "optimum" can mislabel a gravity-vacuum specialist as under-used. (4) The drive-and-kick identification failure ([PAGE 7]–[PAGE 8]): Westbrook's positive corner-3 PLC is not under-use because "Westbrook can't both drive down the lane and simultaneously pass to himself in the corner." These four are the recurring traps a modeling team hits.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All operators below are transcribed from the paper (OCR-garbled glyphs on [PAGE 2] reconstructed to standard notation) and given with explicit units.

1. FG% surface (Bayesian hierarchical logit), [PAGE 2]: "we build a Bayesian hierarchical model to estimate the probability, !, that a shot is made by player j at location z":

$$\operatorname{logit}(p_{ij}) \;=\; \log\!\frac{p_{ij}}{1-p_{ij}} \;=\; \alpha_j + f_j(z_i)$$

- $p_{ij}\in[0,1]$ (dimensionless probability); $\alpha_j\in\mathbb{R}$ (player intercept, log-odds); $f_j(\cdot)$ player-specific Gaussian process, units log-odds.
- Low-rank basis [PAGE 2]: $f_j(z)=\sum_{d=1}^{D}\phi_d(z)\,\beta_d^{(j)}$, with $\phi_d(\cdot)=H^{(j)}\boldsymbol{\varphi}(\cdot)$, where $\boldsymbol{\varphi}(\cdot)$ is the length-$(m{+}1)$ piecewise-linear SPDE basis (Lindgren [8]) and $H^{(j)}$ is a $1\times(m{+}1)$ non-negative-matrix-factorization weight vector (Lee–Seung [9]) of independent Poisson-regression shot-count coefficients.
- Spatial smoothing prior: conditionally autoregressive (CAR, Besag [10]) on $\beta_d^{(j)}$ using a player-adjacency graph from clustering shot profiles.

2. FGA surface, [PAGE 3]: "FGA surfaces are estimated by smoothing a player's empirical shot attempts using a Poisson point process. We then normalize the surfaces to FGA per 100 possessions." Units: $\bar\alpha_{ij}$ = attempts per 100 possessions $\left[\tfrac{\text{attempts}}{100\ \text{poss}}\right]$, evaluated on a "1 ft by 1 ft" grid.

3. Rank surfaces [PAGE 3]: $\Theta^{FG\%}_{ij},\,\Theta^{FGA}_{ij}\in\{1,\dots,5\}$, the within-lineup ordinal rank of player $i$ in cell $j$ (discrete, dimensionless). Players indexed so $\bar\alpha_{1j}\ge\bar\alpha_{2j}\ge\dots\ge\bar\alpha_{5j}$.

4. Rank correspondence [PAGE 5]: $S_{ij}=\Theta^{FGA}_{ij}-\Theta^{FG\%}_{ij}$ (units: rank levels); $S_{ij}>0$ = under-use, $S_{ij}<0$ = over-use. This is a per-cell realization of a Kendall-$\tau$-type rank discrepancy between the two orderings.

5. Lineup Points Lost [PAGE 5]:
$$\mathrm{LPL}_j=\sum_{i=1}^{5}\bigl(\mathrm{OEP}_{ij}-\mathrm{AEP}_{ij}\bigr),\quad
\mathrm{OEP}_{ij}=V_j\,\mathrm{FG\%}_{ij}\,\bar\alpha_i^{(j_{\text{opt}})},\quad
\mathrm{AEP}_{ij}=V_j\,\mathrm{FG\%}_{ij}\,\bar\alpha_{ij}$$
where $V_j\in\{2,3\}$ [points/made FG]; $\mathrm{OEP},\mathrm{AEP}$ carry units $\left[\tfrac{\text{points}}{100\ \text{poss}}\right]$; and $\bar\alpha_i^{(j_{\text{opt}})}=\bar\alpha_{(\hat r^{FG\%}_{ij})}$ is the $\hat r^{FG\%}_{ij}$-th order statistic of the fixed volume vector $(\bar\alpha_{1j},\dots,\bar\alpha_{5j})$ [PAGE 6]. Scaled per 100 possessions.

Breakdown/singularity proof (rearrangement): with $\mathrm{FG\%}_{(1)}\ge\dots\ge\mathrm{FG\%}_{(5)}$ and $\bar\alpha_{(1)}\ge\dots\ge\bar\alpha_{(5)}$,
$$\sum_{i}V_j\,\mathrm{FG\%}_{ij}\,\bar\alpha_{(\hat r^{FG\%}_{ij})}=V_j\sum_{r=1}^{5}\mathrm{FG\%}_{(r)}\bar\alpha_{(r)}\;\ge\;V_j\sum_{i}\mathrm{FG\%}_{ij}\bar\alpha_{\sigma(i)}\ \ \forall\sigma,$$
so $\mathrm{LPL}_j\ge0$, with equality iff $\hat r^{FG\%}_{ij}=\hat r^{FGA}_{ij}\ \forall i$ ([PAGE 6]). Singular regimes: (a) FG%-tie ⇒ non-unique $\hat r^{FG\%}$; (b) $\sum_i\bar\alpha_{ij}\to0$ ⇒ LPL-per-shot $\to 0/0$ (indeterminate, variance blow-up in low-frequency corner cells).

6. LPL per shot [PAGE 6]: $\mathrm{LPL}_j\big/\sum_{i=1}^{5}\bar\alpha_{ij}$, units $\left[\tfrac{\text{points}}{\text{attempt}}\right]$.

7. Player LPL Contribution [PAGE 6]:
$$\mathrm{PLC}_{ij}=\mathrm{LPL}_j\times\frac{\mathrm{OEP}_{ij}-\mathrm{AEP}_{ij}}{\sum_{i=1}^{5}\lvert \mathrm{OEP}_{ij}-\mathrm{AEP}_{ij}\rvert}$$
Dimensionless share $\in[-1,1]$ times LPL ⇒ units $\left[\tfrac{\text{points}}{100\ \text{poss}}\right]$; $\mathrm{PLC}_{ij}>0$ undershooting, $<0$ overshooting; $\sum_i\mathrm{PLC}_{ij}=\mathrm{LPL}_j$ by construction (zero-sum within lineup, [PAGE 7]).

Information units: reducing continuous surfaces to 5-level ordinals is a quantization; the correspondence field is a realization of $Q-R$ (FGA-rank minus FG%-rank), and volume-weighted $\mathbb{E}\lvert Q-R\rvert$ is the natural rank-mismatch information measure; perfect efficiency ⇔ mutual information $I(R;Q)=H(R)\le\log_2 5\approx2.32$ bits/cell at the uniform maximum.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage (all cited on [PAGE 11]): the spatial-statistical substrate is Lindgren–Rue–Lindström's SPDE/GMRF bridge [8], which turns a continuous Gaussian field into a sparse Markov random field, made tractable here via Higdon's process convolutions [7] and regularized with Besag's CAR prior [10] on a player-similarity graph; the NMF compression of Poisson shot-count coefficients is Lee–Seung [9]. The allocative-efficiency question descends from Goldman–Rao's mixed-strategy shooting equilibrium [5] and Cervone et al.'s "shot satisfaction" multiresolution process model [6]; the paper's stated novelty is "disaggregating the allocative efficiency component of shot satisfaction smoothly in space" ([PAGE 2]). Oliver's usage curves [4] supply the missing ingredient the authors explicitly defer ("We do not account for usage curves," [PAGE 9]).

Multi-week traps (methods-level, not betting): (1) Identifiability between $\alpha_j$ and the GP intercept of $f_j$ — a sum-to-zero constraint on the basis weights is required or the player effect and the baseline drift trade off silently across weeks of MCMC without obvious divergence. (2) CAR adjacency sensitivity: the player-similarity graph from clustering shot profiles determines the smoothing length; a poorly chosen cluster count over-smooths role players (Korver/Anderson specialists) into their stars. (3) The rank quantization discards magnitude ([PAGE 5]: "focusing solely on ordering renders the distance between player FG%'s irrelevant"), and LPL only re-injects magnitude through $V_j\,\mathrm{FG\%}_{ij}$; a subtle bug that ranks on the wrong posterior summary (mean vs. median vs. MAP) shifts the whole LPL surface without tripping any error. (4) Non-negativity of NMF weights $H^{(j)}$ is a hard constraint; violating it flips signs of basis contributions and can produce $\mathrm{LPL}_j<0$, immediately falsifying the [PAGE 6] claim — a clean unit test.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The metric silently models three nested decision-makers: shooter, teammates, and coach. Recursive reasoning: player $i$ shoots when his continuation value exceeds the pass's expected value to the highest-$\mathrm{FG\%}$ open teammate. LPL treats the coach's desired policy as "match shot volume to make-probability rank," a level-1 prescription. But a level-2 shooter anticipates the level-1 rule and may *pre-empt* — a high-$\mathrm{FG\%}$ player who is double-teamed rationally declines volume, which LPL will flag as undershooting (false positive). Conversely, "crisis habit regression" is the documented tendency for volume creators to revert to dominant shot diets under fatigue or late-clock stress: Westbrook's 43-attempt playoff line ([PAGE 1]) is the canonical regression to a high-usage prior. The metric captures the *outcome* of that regression as over-use PLC but cannot see the clock state that triggered it — the paper admits "time remaining on the shot clock" is unmodeled ([PAGE 7]). Counter-trap: a coach could game the metric by manufacturing artificial "undershooting" for a favored player (feeding him low-difficulty looks in his strong cells) to justify a role change; because FG% is assumed lineup-independent, the ruse is invisible. Clock coupling: the last-shot-of-clock heave and the drive-and-kick are both high-PLC events generated by *play structure*, not by allocative greed — exactly the [PAGE 8] Westbrook corner-3 case where recursive attribution to the shooter is provably wrong.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical veto layer: the optimality target $\bar\alpha_{(r)}$ assumes shot volume is freely reallocatable across the 1-ft grid. Biomechanically it is not — a rim specialist cannot instantiate a corner-3 volume regardless of rank, because release kinematics, range, and fatigue impose hard per-cell feasibility ceilings. Thus any cell where the FG%-rank-1 player has a biomechanical volume ceiling below the assigned order statistic is a physical veto: LPL there is *not* recoverable by reallocation. The paper's own example (Steven Adams near the rim vs. beyond the arc, [PAGE 1]) is a biomechanical veto of cross-region reallocation, which is why analysis is done per-cell, not across cells.

Weather veto layer: structurally inapplicable. Basketball is an indoor, climate-controlled sport; there is no exogenous meteorological state variable in the NBA stats API endpoints used ([PAGE 2]: `shotchartdetail`, `playbyplayv2`). The weather channel is therefore a vacuous cross-layer veto — correctly returns "no constraint" rather than a spurious signal. Forcing a weather term would be a category error.

Geometric/instrumental veto: the 1 ft × 1 ft grid quantizes a continuous court; near the restricted-area boundary and the three-point arc, a single cell straddles a discontinuity in $V_j$ (2 vs 3 points). A shot placed on the wrong side of that boundary mis-assigns $V_j$, and since $V_j$ multiplies both OEP and AEP, a boundary cell can produce an LPL artifact that is pure discretization, not allocative inefficiency. This is a genuine physical-geometric veto on the smallest-scale claims, and it interacts with the tie/zero-denominator singularities identified above.

Adjudication: within-region, magnitude-feasible reallocations pass the veto (LPL is meaningful); cross-region and boundary-straddling claims fail the physical veto and must be suppressed or flagged as diagnostic-only, consistent with [PAGE 7]: the method "does not shed light on shot selection."
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable (RLVR-checkable) veto scenarios with concrete, falsifiable predictions.

Veto 1 — Non-negativity invariance under permutation. Claim to test: $\mathrm{LPL}_j\ge0$ for every cell and lineup, and $\mathrm{LPL}_j=0$ iff $\hat r^{FG\%}=\hat r^{FGA}$. Verifiable check: recompute LPL after randomly permuting the FGA volume vector while holding FG% fixed; LPL must be non-negative for all $5!=120$ permutations and minimized (zero achievable) only at the FG%-sorted permutation. Prediction: any negative LPL indicates an NMF sign violation or a rank-sort bug, not a real result. Falsifier: a single $\mathrm{LPL}_j<0$ under a valid continuous posterior.

Veto 2 — Lineup-independence falsification via gravity. Claim: FG% surfaces are lineup-independent ([PAGE 3]). Verifiable test: hold shot locations fixed, vary a star's on/off status, and check whether estimated teammate FG% in the vacuum cells shifts beyond posterior noise. Prediction: for high-gravity players (Curry, Harden, [PAGE 9] Korver/Anderson specialists) the FG% surface *will* shift, so their "undershooting" PLC (Korver rim 0.72, [PAGE 8]) is partly a gravity artifact — a systematic over-statement of recoverable LPL for star-adjacent specialists. Falsifier: teammate FG% invariance within credible intervals across star on/off.

Veto 3 — Drive-and-kick attribution veto. Claim: positive corner-3 PLC = undershooting. Verifiable test: cross-reference PLC with play-type tags; corner-3 attempts immediately following a teammate's rim drive must show near-zero recoverable PLC. Prediction: Westbrook's positive corner-3 PLC ([PAGE 8]) collapses to ~0 once drive-and-kick possessions are excluded, because the create-and-kick possession is a single indivisible action, not a lost corner allocation. Falsifier: corner-3 PLC unchanged after removing drive-initiated kick-outs. The paper's own words set the prediction: "Westbrook can't both drive down the lane and simultaneously pass to himself in the corner" ([PAGE 8]). All three vetoes are decidable from the public endpoints and the released code, making them RLVR-grade verifiable.
</RLVR_COUNTERFACTUAL_VETOES>

Summary: The paper's core object — Lineup Points Lost — is rigorously grounded in the discrete rearrangement inequality (non-negativity proved, zero iff ranks coincide), estimated on a 1-ft grid via a Bayesian SPDE/CAR logit FG% surface and a Poisson-point-process FGA surface, and expressed in points per 100 possessions. Its honest limits are the lineup-independence assumption, rank quantization, per-cell biomechanical feasibility, and unmodeled play structure (drive-and-kick, shot clock) — all of which I've turned into falsifiable vetoes rather than accepting the surfaces at face value.