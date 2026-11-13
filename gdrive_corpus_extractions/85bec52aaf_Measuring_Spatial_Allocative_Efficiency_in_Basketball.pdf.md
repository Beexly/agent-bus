---
source: "Measuring Spatial Allocative Efficiency in Basketball.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 28
model: baidu/ernie-5.5-flash-preview:free
words: 6272
---

<NATIVE_REASONING>
The user wants a deep analytical response following their specific XML structure. This is a legitimate sports analytics paper analysis. Let me engage with it seriously.

The paper is "Measuring Spatial Allocative Efficiency in Basketball" by Sandholtz, Mortensen, and Bornn. I have the full 28 pages of source text. This is a legitimate analytical/research task with no safety concerns. The invariants about "zero betting lines" and "no toy equations" are reasonable — they want real formal math with proper citations, not fabricated ratios.

Let me work through the actual content:

Key equations:
- Eq (1): logit of π_j(s) = β'x + Z_j(s), the FG% model
- Eq (2): Z_j(s) = w'_j Λ Ψ(s), Gaussian process basis representation
- Eq (3): NMF factorization P ≈ B Λ
- Eq (4): CAR prior on w_j
- LGCP for FGA rate: log λ(s) = β_0 + Z(s)
- Eq (5): FG% rank transformation
- Eq (6): FGA rate rank
- Eq (7)/(8): LPL definition
- Eq (9): LPL per shot
- Eq (10): PLC
- Eq (11): PLC per shot
- Eq (12-14): permutation test statistic T
- Eq (15): game LPL weighted
- Eq (16): total game LPL
- Eq (17-18): score regression model

Key findings:
- LPL for Cavs starters sums to 0.68 over half court
- p-value 1/500 = 0.002 for Cavs permutation test
- GSW and POR had no variates < 0 (p=0.000)
- SAC worst at p=0.442
- θ posterior mean -0.62, 95% HPD (-1.08, -0.17)
- 1-point reduction in LPL → 0.6-point gain in actual score
- ~3 points off TGLPL → 2 points gained
- 10% of games decided by 2 points or less
- Houston most efficient (~1 pt/game lost), Washington worst (>3 pts/game)
- Favors example: 1500+ mid-range shots at 0.76 PPS (2013-17), then 141 3-point shots at 0.66 PPS (2017-19)

I need to write >= 1,000 words across the six exact XML sections. Let me make sure I hit the depth. I need real math, cite [PAGE N], verbatim quotes, and address the gray-zone issues (Simpson's paradox, usage curves, lineup independence assumption, selection bias, CAR prior shrinkage problems).

Let me write this properly. The sections:
1. <THINK_TRACE> (>=400 words) - multi-hop derivation & gray-zone audit
2. <SOURCE_OPERATORS_AND_EQUATIONS> - formal LaTeX, units, page citations, breakdown
3. <RETROCAUSAL_GENEALOGY> - historical/scientific lineage & multi-week traps
4. <RECURSIVE_THEORY_OF_MIND> - crisis habit regression vs counter-trap vs clock
5. <CROSS_LAYER_VETO_ADJUDICATION> - physical/biomechanical/weather veto proof
6. <RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable RLVR veto scenarios + predictions

Let me be rigorous and not invent things. I'll ground everything in the source. Where I extend beyond the source I'll flag it as my inference.

Let me write a genuinely substantive analysis. This is a spatial statistics paper. The core ideas:

Spatial allocative efficiency = whether shots within a lineup are allocated to the best shooters at each location. LPL (lineup points lost) quantifies expected points foregone by not matching FG% ranks to FGA ranks.

The deep intellectual content:
- Opportunity cost framing: one player's shot eliminates teammates' potential shots
- Simpson's paradox: aggregate FGA-PPS relationship is slightly negative, but conditional on court region it's positive in every region
- Goldman & Rao (2011) allocative efficiency: equilibrium where lineup can't reallocate ball to increase marginal productivity — equal marginal efficiency
- The rank-correspondence insight: reduce continuous FG%/FGA to ranks 1-5, match them
- LPL retains magnitudes via the permutation constraint (A* is a permutation of A)

Gray zones / breakdown regimes:
- Usage curve / skill curve: FG% is NOT independent of FGA rate (Oliver 2004, Goldman & Rao 2011). This is the biggest tacit assumption. If you allocate more shots to a player, their FG% drops.
- Lineup independence of FG%: violated when star draws defensive attention (gravity)
- Selection bias from defensive pressure — not in public data
- CAR prior shrinkage: centers who never shoot 3s get their 3P% inflated toward global mean
- Shot creation (drive-and-kick): Westbrook example — can't reallocate a corner 3 to Westbrook because he created it by driving
- Game theory: predictable offense is easier to defend
- Shot clock not accounted for
- 1 LPL ≠ 1 actual point (it's 0.6)

Let me write the formal math carefully.

FG% model (Cervone et al. 2016 adapted):
logit(π_j(s)) = log(π_j(s)/(1-π_j(s))) = β'x + Z_j(s) [Eq 1, PAGE 5]
- β: 4×1 covariate effects (intercept, position, shot distance, position×distance interaction)
- x: 4×1 observed covariates
- Z_j(s) = w'_j Λ Ψ(s) [Eq 2]
- w_j ~ N(ω_j, Σ_j)
- GP mean ω'_j Λ Ψ(s), covariance Cov(s1,s2) = Ψ(s1)'Λ'Σ_j Λ Ψ(s2)

NMF: P ≈ [B_{L×D}][Λ_{D×K}] [Eq 3, PAGE 6], D=16 bases, L=433 players, K mesh vertices

CAR prior [Eq 4, PAGE 7]:
(w_j | w_{-(j)}, τ²) ~ N( (1/n_j) Σ_{ℓ:H_jℓ=1} w_ℓ, (τ²/n_j) I_D )
τ² ~ InvGam(1,1)
- 5 nearest neighbors by Euclidean distance in loadings B, symmetrized
- adjacency matrix H

FGA rate surface: LGCP
log λ(s) = β_0 + Z(s) [PAGE 8]
Z(s) = Σ_{b=1}^B z_b φ_b(s)
normalized to FGA per 36 min

Ranking [Eq 5, 6, PAGE 10]:
R^ξ_ij = {(n^ξ_i + 1) - k : ξ_ij ≡ ξ_(k)_i}
R^A_ij = {(n^A_i + 1) - k : A_ij ≡ A_(k)_i}

LPL [Eq 7-8, PAGE 12]:
LPL_i = Σ_{j=1}^5 v_i · ξ_ij · (A_i[g(R^ξ_ij)] - A_ij) = Σ v_i ξ_ij (A*_ij - A_ij)
- v_i: point value (2 or 3)
- g(R^ξ_ij) = {k : R^ξ_ij ≡ R^A_ik} reallocates shots by FG% rank
- Constraint: A*_i is a permutation of A_i, so Σ A_ij = Σ A*_ij

LPL per shot [Eq 9]:
LPL^Shot_i = LPL_i / (Σ_{j=1}^5 A_ij)

PLC [Eq 10]:
PLC_ij = LPL_i × ((A*_ij - A_ij) / (Σ_{j=1}^5 |A*_ij - A_ij|))

Toy example [PAGE 12-13]: Irving 40%, James 38%, Love 35%, Smith 32%, Thompson 25%
Actual: Irving 4 shots, James 9, Love 3, Smith 1, Thompson 1 (total 18... wait let me check)
Actually looking at figure 7: actual shots taken 4,3,9,1,1 for Irving, Love, James, Smith, Thompson
Optimal redistribution: Irving 9, Love 4, James 3, Smith 1, Thompson 1
Optimal points: (.40×9 + .38×4 + .35×3 + .32×1 + .25×1)×3 = (3.6+1.52+1.05+0.32+0.25)×3 = 6.74×3 = 20.22... 

Hmm the figure says 20.34. Let me recompute. Figure 7 top equation:
Optimal: (.40×9) + (.38×4) + (.35×3) + (.32×2)... wait the layout is confusing. Let me re-read.

"((.40 × 9) (.25 × 1)) × 3 ... Optimal points: = 20.34"
"((.40 × 4) (.25 × 1)) × 3 ... Actual points: = 21.18"

Wait that gives optimal < actual which contradicts LPL being a loss. Let me re-read.

Actually the text says "Optimal points: = 20.34, Actual points: = 21.18, Optimal - Actual = 0.84". But 20.34 - 21.18 = -0.84. And LPL should be positive (points lost). So the figure caption/text has them and the sign. Actually the text on PAGE 12 says "LPL is the difference (in expectation) between the optimal points and the actual points, which comes out to 0.84." So they mean |optimal - actual| or actual - optimal... Actually LPL should be optimal minus actual (points gained). But 20.34 < 21.18. 

Hmm, this is confusing. Let me recompute carefully.

FG%: Irving 40%, James 38%, Love 35%, Smith 32%, Thompson 25% (ordered best to worst left to right)

Actual shots: from figure, the numbers below players: 4, 3, 9, 1, 1 (Irving, Love, James, Smith, Thompson)? The text says "James takes the most shots" = 9. "Irving is allocated James' nine shots." "Love... allocated Irving's four shots (second most)." "James... allocated the third most shot attempts (Love's three shots)." "Smith and Thompson's shot allocations unchanged."

So actual shots: Irving 4, Love 3, James 9, Smith 1, Thompson 1. Total = 18.
Optimal (by FG% rank): best shooter (Irving) takes most (9), 2nd (James) takes 2nd most (4), 3rd (Love) takes 3rd most (3), 4th (Smith) takes 1, 5th (Thompson) takes 1.

Wait but the ordering best-to-worst is Irving(40), James(38), Love(35), Smith(32), Thompson(25).

Actual shots in FG% order: Irving 4, James 9, Love 3, Smith 1, Thompson 1.
Actual points = 3 × (.40×4 + .38×9 + .35×3 + .32×1 + .25×1)
= 3 × (1.6 + 3.42 + 1.05 + 0.32 + 0.25)
= 3 × 6.64 = 19.92

Optimal: sort shots descending: 9,4,3,1,1 assigned to shooters in FG% descending order: Irving 9, James 4, Love 3, Smith 1, Thompson 1.
Optimal points = 3 × (.40×9 + .38×4 + .35×3 + .32×1 + .25×1)
= 3 × (3.6 + 1.52 + 1.05 + 0.32 + 0.25)
= 3 × 6.74 = 20.22

LPL = 20.22 - 19.92 = 0.30? That doesn't match 0.84 either.

Hmm. The OCR of the figure is garbled. The numbers in the figure text are scrambled by the PDF extraction. Let me not rely on the exact arithmetic from the garbled figure. The paper states LPL = 0.84 for that toy example. The individual player FG%s and shot counts are somewhat garbled in OCR. I should note the stated result (0.84) and describe the mechanism rather than reproduce possibly-garbled arithmetic. Actually let me try to honor what the text says precisely and note the OCR ambiguity.

The figure caption values: Optimal = 20.34, Actual = 21.18? That would be negative LPL. Actually wait — maybe I have FG% assignments and shot counts mismatched due to OCR. Let me look at the raw:

"((.40 × 9) (.25 × 1)) × 3 / ((.32 × 2) (.35 × 3) (.38 × 4)) ... Optimal points: = 20.34"
"((.40 × 4) (.25 × 1)) × 3 / ((.32 × 2) (.35 × 9) (.38 × 3)) ... Actual points: = 21.18"

Hmm so in the OCR, both have ".25 × 1" and ".32 × 2". 

Optimal: .40×9, .38×4, .35×3, .32×2, .25×1 = 3.6+1.52+1.05+0.64+0.25 = 7.06, ×3 = 21.18
Actual: .40×4, .38×3, .35×9, .32×2, .25×1 = 1.6+1.14+3.15+0.64+0.25 = 6.78, ×3 = 20.34

So Optimal = 21.18, Actual = 20.34. The OCR swapped the labels! Optimal (21.18) - Actual (20.34) = 0.84. 

So actual shots: Irving 4, James 3, Love 9, Smith 2, Thompson 1. Total = 19.
Wait: .40(Irving)×4, .38(James)×3, .35(Love)×9, .32(Smith)×2, .25(Thompson)×1.
So actual: Irving 4, James 3, Love 9, Smith 2, Thompson 1 = 19 total.
Optimal redistribution sorted desc: 9,4,3,2,1 → Irving 9, James 4, Love 3, Smith 2, Thompson 1.
Optimal: .40×9, .38×4, .35×3, .32×2, .25×1 = 3.6+1.52+1.05+0.64+0.25 = 7.06 ×3 = 21.18. ✓
Actual: .40×4, .38×3, .35×9, .32×2, .25×1 = 1.6+1.14+3.15+0.64+0.25=6.78 ×3=20.34 ✓
LPL = 21.18-20.34 = 0.84 ✓

So the narrative text ("Irving allocated James' nine shots") maps: in the actual, Love took 9 shots (the most) despite being 3rd best; James took 3. Under optimal, Irving (best) takes 9. So actually the text's "James takes the most shots" seems to be an OCR/naming inconsistency, but the math is now clear. The key point: LPL = 0.84 for this 3-point region. Good, I can cite this precisely now.

Actually wait, the narrative on PAGE 12 says "James takes the most shots despite both Love and Irving being better shooters." But the math shows Love took 9 (the most). There's an internal inconsistency, likely the figure ordering. I'll present the arithmetic that reconciles to 0.84 and note the narrative. Actually, I'll just present the reconciled version cleanly since the arithmetic is what matters and it's now verified. Let me note there's an apparent labeling slip but the computation is internally consistent at 0.84.

Hmm, let me reconsider — I should be careful. Let me just present: best shooter 40%, then 38/35/32/25; actual shot vector vs FG%-rank-sorted shot vector; expected points 20.34 (actual) vs 21.18 (optimal); LPL = 0.84. I'll note the OCR garbling. Good.

Now let me think about the "multi-hop derivations" for THINK_TRACE:
1. Why Simpson's paradox matters: aggregation over court location masks the within-region positive FGA-skill relationship. The marginal (aggregate) relationship pools heterogeneous regions. Formally, the aggregate slope is a weighted average of within-region slopes plus a between-region confounding term. The sign flip indicates the between-region term dominates.
2. The permutation constraint ensures conservation of shot mass — LPL is a pure reallocation cost, not a shot-selection statement.
3. The 0.62 mapping (θ) — the attenuation from LPL to actual points reflects the usage curve + unmodeled context.

Let me think about the usage curve more formally. If FG% depends on volume, ξ_ij = ξ_ij(A_ij), then holding ξ fixed while reallocating overstates optimal points. The true optimum is a constrained optimization: max Σ v_i ξ_ij(A*_ij) A*_ij s.t. Σ A*_ij = Σ A_ij. First-order condition: marginal points equalized, i.e., d/dA [v ξ(A) A] equal across players — this is exactly Goldman-Rao equal marginal efficiency, and it generally implies the optimal allocation is LESS extreme than pure rank-matching (you don't give the best shooter ALL the shots, you equalize marginal returns). This is a genuine multi-hop result I can derive.

Gray-zone audit items:
- The rank transform discards magnitude, LPL restores it via permutation — but permutation still assumes constant ξ.
- CAR prior mean-reversion inflates never-taken regions (centers' 3P%).
- Lineup-independent FG% but lineup-dependent FGA — an asymmetry. The paper is explicit: FGA is a choice (non-random, controlled), FG% is a latent skill. This asymmetry drives the whole method.

RETROCAUSAL_GENEALOGY: lineage
- Oliver (2004) usage/skill curve → Goldman & Rao (2011) allocative & dynamic efficiency (mixed-strategy equilibrium, continuation value) → Cervone et al. (2016) shot satisfaction / multiresolution stochastic process → Miller et al. (2014) factorized point process (NMF bases) → Sandholtz & Bornn (2020) MDP with dynamic transition probabilities → this paper.
- Statistical lineage: Besag (1974) CAR; Lindgren, Rue & Lindström (2011) SPDE link between GRF and GMRF; Simpson et al. (2015) off-grid LGCP; Banerjee et al. (2015) hierarchical spatial; Lee & Seung (1999) NMF; Dixon & Coles (1997) score model (the regression template).
- "Multi-week traps": the Favors six-year example — the Jazz took four seasons (2013-14 to 2016-17) running Favors mid-range at 0.76 PPS, then two more (2017-19) forcing him to 3s at 0.66 PPS, before the front office concluded he wasn't a fit. Six years to learn what PLC could surface faster. That's the "multi-week/multi-season trap."

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock
- The Westbrook example: 30+ shots, 45.5% usage, 43 attempts for 46 points in a loss. Media conjectured high usage limits success. Recursive ToM: offense minimizes LPL, defense maximizes it (explicitly stated PAGE 16). Coaches' habit regression: under playoff pressure / elimination-game crisis, star players revert to high-usage shot creation (the drive-and-kick that LPL would misclassify as under-use of corner 3s). The "clock" — shot clock and game clock as unmodeled contextual variables. End-game: minimizing LPL may be sub-optimal (predictability, game theory).

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto
- Physical: shot creation is physically exclusive — Westbrook can't drive to rim and shoot the corner 3 simultaneously (paper PAGE 22 verbatim). This is a hard physical veto on naive LPL minimization.
- Biomechanical: usage curve is partly biomechanical — fatigue/fatigue-induced efficiency decline with volume. FG%-FGA independence is physically false.
- "Weather": in basketball there's no weather, but the analog is defensive pressure / court congestion — the density of shot attempts (LPL highest near rim and 3-line because density is highest there). I'll interpret "weather" as the exogenous environmental layer (defense, shot clock) that isn't in public data. I should be careful — the invariant says "physical/biomechanical/weather veto proof" — I'll map weather to the environmental/defensive layer.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions
RLVR = reinforcement learning from verifiable rewards. I'll frame 3 falsifiable scenarios where the LPL framework's recommendation would be vetoed, with concrete predictions:
1. Usage-curve veto: If you increase a player's FGA in a region, FG% drops. Prediction: measured FG% post-reallocation < ξ_ij used in LPL; net points < predicted. Verifiable via the θ=0.62 attenuation.
2. Shot-creation veto (Westbrook drive-and-kick): reallocating corner-3 attempts to the driver reduces open-shot generation for teammates. Prediction: team 3P% and total PPS drop after forced reallocation.
3. Defensive-adjustment / predictability veto: rigid LPL minimization → more predictable offense → defense counters. Prediction: opponent defensive efficiency improves over games where a team minimizes LPL rigidly.
Plus the CAR-shrinkage veto on never-shot regions (centers' 3P).

Let me also incorporate the empirical validation numbers precisely:
- θ posterior mean -0.62, 95% HPD (-1.08, -0.17) [PAGE 18]
- Cavs total LPL sum 0.68 [PAGE 16]
- permutation p = 1/500 = 0.002 [PAGE 17]
- GSW, POR p=0.000; SAC p=0.442 [PAGE 17, Table 1]
- Houston ~1 pt/game lost, Washington >3 pts/game [PAGE 19]
- 10% of games decided by ≤2 points [PAGE 18-19]
- 224,567 shots, 433 players, 2016-17 [PAGE 4]
- M = 2350 cells (1ft × 1ft) [PAGE 7]
- D=16 bases [PAGE 6]
- 500 posterior draws [PAGE 16]

Let me now also derive the permutation test statistic simplification [Eq 12-14]:
T = Σ_i (LPL^H0_i - LPL_i)
= Σ_i Σ_j v_i ξ̃_ij (A_ij - A†_ij)  [Eq 14]
where A† is a random permutation of A_i. The A* terms cancel because under both H0 (random) and observed, the optimal A* is the same (same FG% ranking applied). Neat — the optimal reallocation A*_ij appears in both and cancels, leaving only observed vs random-permutation difference. That's an elegant algebraic point worth highlighting.

Actually let me verify: LPL^H0 uses A† (random perm) as the "observed" and A* as its optimal. LPL uses A (actual) and A* as optimal. But is the optimal the same A* for both? The optimal reallocation g(·) sorts the actual attempt vector and assigns by FG% rank. For a random permutation A† of A_i, the sorted vector is the SAME multiset, so A* (the optimally sorted assignment) is identical. Hence A*_ij is common and cancels in the difference. Yes! So T = Σ_i Σ_j v_i ξ̃_ij (A_ij - A†_ij). Beautiful. This is a real derivation I can present.

Wait, let me double check the sign in Eq 14. 
LPL^H0_i - LPL_i = Σ_j v ξ (A*_ij - A†_ij) - Σ_j v ξ (A*_ij - A_ij) = Σ_j v ξ (A_ij - A†_ij). Yes matches Eq 14. 

Now the null: if random allocation A† performs better (higher points), that means actual A is worse, contributing negatively... The test counts variates < 0. p = proportion of T variates < 0. For Cavs, only 1/500 were < 0, so observed allocation beats random in 499/500 → strongly minimizes LPL.

Let me make sure I present units:
- ξ_ij: probability (dimensionless), FG% in cell i for player j
- A_ij: FGA per 36 minutes (dimension: attempts / 36 min)
- v_i: points (2 or 3)
- LPL_i: v · ξ · A → points per 36 min (expected points lost per 36 min)
- TGLPL: sum over cells, regions, lineups → expected points per game
- θ: actual points per LPL unit (dimensionless-ish, points/point)
- λ(s): Poisson intensity (shots per unit area)
- log λ(s): units of log-intensity

Alright. Let me also note the CAR prior breakdown regime: when an entire neighborhood (e.g., all centers) has near-zero shots from a region, shrinkage pulls them to the global mean 3P%, "inaccurately inflating these players' FG%s beyond the 3-point line" [PAGE 8 verbatim]. That's a formal breakdown regime for the estimator.

Also the NMF breakdown: D must be chosen (15-20 per Miller et al.); too few → residual basis absorbs structure; too many → overfit. Residual basis = locations infrequently attempted [PAGE 6].

Let me write. I need >= 1000 words total across the six sections, with THINK_TRACE >= 400 words. Let me aim for substantial depth. I'll write real LaTeX in the equations section.

Let me be careful about the invariants:
- No betting lines: none. Good.
- No toy equations like "Force/Fatigue": I must state formal equations with units, assumptions, singularity/breakdown regimes. Cite [PAGE N] and verbatim quotes. I'll do that.

I should treat the XML sections as the deliverable. Let me write it all out. I'll keep prose for reasoning and use LaTeX code blocks / inline for math.

One more consideration: I should not fabricate. The "weather" veto — there's genuinely no weather in basketball; I'll explicitly note the mapping and flag it as an interpretive mapping rather than pretending the paper discusses weather. That's honest.

Let me write the response now. I'll make it rigorous and genuinely analytical. Let me count words roughly as I go to ensure I hit the depth requirement.

I'll write each section substantively. Let me draft.

For THINK_TRACE (>=400 words): multi-hop derivation. I'll do:
- Hop 1: opportunity cost → allocation problem
- Hop 2: Simpson's paradox formal decomposition
- Hop 3: rank transform + permutation constraint → LPL as pure reallocation cost
- Hop 4: permutation test algebra (A* cancellation)
- Hop 5: θ attenuation and usage-curve first-order condition
- Gray-zone audit: CAR shrinkage, lineup independence asymmetry, selection bias, shot creation, constant-ξ assumption.

Let me write ~500-600 words for THINK_TRACE.

Now writing everything. Let me make sure I use [PAGE N] citations and verbatim quotes throughout.

Verbatim quotes I can use:
- PAGE 1: "Every shot in basketball has an opportunity cost; one player's shot eliminates all potential opportunities from their teammates for that play."
- PAGE 3: "This instance of Simpson's paradox has non-trivial implications in the context of allocative efficiency"
- PAGE 4: Goldman & Rao "a team achieves optimal allocative efficiency when, at any given time, the lineup cannot reallocate the ball to increase productivity on the margin."
- PAGE 14: "a 1-point reduction in LPL corresponds to a 0.6-point gain (on average) in a team's actual score."
- PAGE 14: "the more shots a player is allocated, the less efficient their shots become. This concept, referred to as the 'usage-curve' or 'skill-curve', was introduced in Oliver (2004)"
- PAGE 7: lineup independence: "we assume that player FG%s are lineup independent."
- PAGE 8: "the entire neighborhood shrinks toward the global mean 3-point FG%, inaccurately inflating these players' FG%s beyond 3-point line."
- PAGE 22: "Westbrook cannot both drive to the rim and simultaneously pass to himself in another area of the court."
- PAGE 16: "while the offense is trying to minimize LPL, the defense is trying to maximize LPL."
- PAGE 18: "for each additional lineup point lost, a team loses 0.62 actual points."
- PAGE 21: Favors "took over 1500 mid-range shots for an average of 0.76 points per shot (PPS)" ... "his average PPS for these 141 shots was 0.66."
- PAGE 9: "If a player has no observed shot attempts from a certain region ... this simply means they chose not to shoot from that region"
- PAGE 15: "there cannot be any areas where the entire lineup overshoots or undershoots. For this reason, our method does not shed light on shot selection."

Great, these anchor the analysis.

Let me write it all now. I'll aim for a thorough, genuinely expert-level response.
</NATIVE_REASONING>

<THINK_TRACE>

Multi-hop derivation and gray-zone audit. The paper's logical spine is a single asymmetry stated on [PAGE 8–9]: FGA rate is treated as a *choice* ("We view a player's decision to shoot the ball as being completely within their control and hence non-random") while FG% is a *latent skill*. Everything else follows from that split.

Hop 1 — Opportunity cost as allocation. [PAGE 1]: "Every shot in basketball has an opportunity cost; one player's shot eliminates all potential opportunities from their teammates for that play." Formally, a lineup's offensive output over a possession is $\sum_j v\,\xi_j$ subject to a fixed shot budget; the allocation $\{A_{ij}\}$ that maximizes expected points is not necessarily the observed one. This is a constrained assignment problem, and LPL is its regret.

Hop 2 — Simpson's paradox, made precise. [PAGE 3] shows the aggregate FGA-rate/PPS slope is "slightly negative, if there exists a relationship at all," yet "becomes positive in every region" after conditioning on court cell. Decompose the pooled slope: $\hat\beta_{\text{pool}} = \underbrace{\mathbb{E}_c[\beta_c]}_{\text{within-region}} + \underbrace{\text{Cov}(c,\ \bar{x}_c\text{-shift})}_{\text{between-region confound}}$. The sign flip means the between-region term is negative and dominant: high-skill zones (rim, corner 3) are also high-frequency zones for *different* players, so pooling induces a spurious negative correlation. This is the formal justification for the entire spatial program — allocative efficiency is only legible after disaggregation.

Hop 3 — Rank transform + permutation constraint. [PAGE 10, Eq 5–6] reduce continuous $\xi_{ij},A_{ij}$ to integer ranks in $\{1,\dots,5\}$. [PAGE 12, Eq 7–8] then re-inject magnitude: $A^\ast_i$ is constrained to be a *permutation* of $A_i$, so $\sum_j A_{ij}=\sum_j A^\ast_{ij}$. This guarantees LPL is a pure reallocation cost — [PAGE 15]: "there cannot be any areas where the entire lineup overshoots or undershoots... our method does not shed light on shot selection." The metric is silent on *where* to shoot and speaks only to *who*.

Hop 4 — The permutation-test cancellation. [PAGE 16, Eq 12–14] looks like a sum of two LPL surfaces, but the optimal term cancels. Because $A^\dagger_{ij}$ is a random permutation of $A_i$, it shares the same sorted multiset as $A_i$; the rank-matching map $g(\cdot)$ therefore produces the *same* $A^\ast_{ij}$ under both the observed and the null allocation. Hence $T=\sum_i\sum_j v_i\tilde\xi_{ij}(A_{ij}-A^\dagger_{ij})$ [Eq 14]. The test reduces to "does the observed allocation beat a random reshuffle of the *same* shots?" — elegant, because it holds the shot histogram fixed and tests only the assignment.

Hop 5 — Attenuation and the usage curve. The empirically estimated $\hat\theta=-0.62$ (95% HPD $(-1.08,-0.17)$, [PAGE 18]) means one LPL unit returns only 0.6 actual points. The paper's own diagnosis [PAGE 14]: LPL holds $\xi_{ij}$ fixed while reallocating volume, "implicitly assum[ing] that a player's FG% is independent of their FGA rate," which "does not hold." If $\xi_{ij}=\xi_{ij}(A_{ij})$, the true optimum is $\max_{A^\ast}\sum_j v_i\,\xi_{ij}(A^\ast_{ij})\,A^\ast_{ij}$ s.t. $\sum_j A^\ast_{ij}=\sum_j A_{ij}$. The first-order condition equalizes *marginal* points, $v_i[\xi_{ij}+A^\ast_{ij}\,\xi'_{ij}]=\text{const}$ across $j$ — which is exactly Goldman & Rao's "equal marginal efficiency for every shot" [PAGE 4]. Since $\xi'_{ij}<0$ (usage fatigue), the marginal condition yields a *less extreme* reallocation than pure rank-matching. LPL therefore systematically over-states attainable gains — the theoretical root of the 0.62 attenuation.

Gray-zone audit. (a) CAR shrinkage breakdown: with five nearest neighbors [PAGE 7, Eq 4], neighborhoods that collectively never shoot from a zone collapse toward the global mean; [PAGE 8] "the entire neighborhood shrinks toward the global mean 3-point FG%, inaccurately inflating these players' FG%s beyond [the] 3-point line." (b) Lineup-independence of $\xi$ is assumed [PAGE 7] though "gravity" violates it. (c) Selection bias from unmodeled defensive pressure biases $\xi$ non-randomly by skill. (d) Shot creation (Hop 4 of the veto analysis below) breaks the permutation's physical feasibility. Each is a genuine breakdown regime, not a rounding error.

</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

Units and definitions. $s\in$ offensive half-court; grid = $M=2350$ cells of $1\text{ ft}\times1\text{ ft}$ [PAGE 7]. $\xi_{ij}\in[0,1]$ = player $j$'s make-probability at centroid of cell $i$ (dimensionless). $A_{ij}$ = field-goal attempts per 36 minutes (unit: attempts·$36\,\text{min}^{-1}$). $v_i\in\{2,3\}$ points. $L=433$ players, $224{,}567$ shots, 2016-17 [PAGE 4].

FG% surface (adapted from Cervone et al. 2016) [PAGE 5]:
$$\operatorname{logit}\pi_j(s)=\log\!\frac{\pi_j(s)}{1-\pi_j(s)}=\beta'x+Z_j(s),\qquad \beta\in\mathbb{R}^{4},\ x\in\mathbb{R}^{4}\tag{1}$$
$$Z_j(s)=w_j'\Lambda\Psi(s),\qquad w_j\sim\mathcal N(\omega_j,\Sigma_j)\tag{2}$$
GP mean $\omega_j'\Lambda\Psi(s)$; covariance $\operatorname{Cov}(s_1,s_2)=\Psi(s_1)'\Lambda'\Sigma_j\Lambda\Psi(s_2)$ [PAGE 5]. Covariates in $x$: intercept, position, distance, position×distance.

NMF bases [PAGE 6]:
$$P\approx \big[B\big]_{L\times D}\,\big[\Lambda\big]_{D\times K},\qquad D=16\tag{3}$$
$B$ = per-player LGCP loadings (made-shot intensities evaluated at mesh vertices, exponentiated); $\Lambda$ = deterministic spatial bases. $D=16$ chosen from Miller et al.'s recommended 15–20. Breakdown regime: as $D$ shrinks, a residual basis absorbs rarely-attempted locations ("Residual," [PAGE 6]); as $D$ grows, bases overfit idiosyncratic noise.

CAR prior on weights [PAGE 7]:
$$(w_j\mid w_{-(j)},\tau^2)\sim\mathcal N\!\Big(\tfrac{1}{n_j}\sum_{\ell:H_{j\ell}=1}w_\ell,\ \tfrac{\tau^2}{n_j}I_D\Big),\qquad \tau^2\sim\text{InvGam}(1,1)\tag{4}$$
Neighbors = 5 nearest in Euclidean distance among rows of $B$, symmetrized via adjacency $H$. Singularity: if an entire neighborhood has near-zero data from a region, $\hat\xi$ collapses to the population mean there (the inflation regime flagged on [PAGE 8]).

FGA surface (LGCP) [PAGE 8]:
$$\log\lambda(s)=\beta_0+Z(s),\qquad Z(s)=\sum_{b=1}^{B}z_b\phi_b(s)$$
$\lambda(s)$ = Poisson intensity (shots per unit area); refit *per lineup* and rescaled so $\int\lambda=\text{observed attempts}$, then normalized to per-36-min. No posterior uncertainty is propagated here by design [PAGE 9].

Ranking transforms [PAGE 10]:
$$R^{\xi}_{ij}=\{(n^{\xi}_i+1)-k:\ \xi_{ij}\equiv\xi_{(k)i}\},\qquad R^{A}_{ij}=\{(n^{A}_i+1)-k:\ A_{ij}\equiv A_{(k)i}\}\tag{5,6}$$
$R^\xi$ is distributional (discrete support $\{1..5\}$); $R^A$ deterministic.

Lineup Points Lost [PAGE 12]:
$$LPL_i=\sum_{j=1}^{5} v_i\,\xi_{ij}\big(A_i[g(R^{\xi}_{ij})]-A_{ij}\big)=\sum_{j=1}^{5} v_i\,\xi_{ij}\big(A^{\ast}_{ij}-A_{ij}\big)\tag{7,8}$$
$g(R^{\xi}_{ij})=\{k:R^{\xi}_{ij}\equiv R^{A}_{ik}\}$ maps each player to the attempt-count of the peer holding the matching FGA rank. Constraint: $A^\ast_i$ is a permutation of $A_i$, so $\sum_j A_{ij}=\sum_j A^\ast_{ij}$. Units: (points)·(probability)·(attempts·$36\text{min}^{-1}$) = expected points·$36\text{min}^{-1}$.
$$LPL^{\text{Shot}}_i=\frac{LPL_i}{\sum_{j=1}^{5}A_{ij}}\tag{9}$$

Verified toy instance [PAGE 12–13]. FG% (best→worst): $0.40,0.38,0.35,0.32,0.25$; actual attempts (same order) $4,3,9,2,1$; rank-matched $A^\ast=9,4,3,2,1$. Optimal $=(0.40\cdot9+0.38\cdot4+0.35\cdot3+0.32\cdot2+0.25\cdot1)\times3=7.06\times3=21.18$; Actual $=(0.40\cdot4+0.38\cdot3+0.35\cdot9+0.32\cdot2+0.25\cdot1)\times3=6.78\times3=20.34$; $LPL=21.18-20.34=0.84$. (The extracted figure transposes the two totals; the internal arithmetic reconciles only to $0.84$ as stated.)

Player contribution [PAGE 14]:
$$PLC_{ij}=LPL_i\cdot\frac{A^{\ast}_{ij}-A_{ij}}{\sum_{j=1}^{5}\lvert A^{\ast}_{ij}-A_{ij}\rvert}\tag{10}$$
$\sum_j PLC_{ij}=LPL_i$; $\text{sign}(PLC_{ij})>0\Rightarrow$ undershooting. Denominator vanishes (division singularity) when no reallocation occurs in cell $i$, i.e. $A^\ast_i=A_i$ — there $LPL_i=0$ too, so the ratio is defined as $0$.

Permutation test [PAGE 16]:
$$T=\sum_{i=1}^{M}\Big(LPL^{H_0}_i-LPL_i\Big)=\sum_{i=1}^{M}\sum_{j=1}^{5}v_i\,\tilde\xi_{ij}\big(A_{ij}-A^{\dagger}_{ij}\big)\tag{12–14}$$
$\tilde\xi_{ij}\sim$ posterior draw; $A^\dagger_{ij}$ = random permutation of $A_i$. $A^\ast$ cancels (identical multiset). $p\approx\#\{T<0\}/500$.

Game-level regression [PAGE 18]:
$$Score^{ab}_g=\mu+\alpha_a+\beta_b+\gamma\,\mathbb I(\text{Home})+\theta\,TGLPL^{a}_g+\epsilon,\quad \epsilon\sim\mathcal N(0,\sigma^2)\tag{17,18}$$
Priors $\mu\sim\mathcal N(100,100)$, others $\mathcal N(0,100)$, $\sigma\sim\text{Gamma}(2,0.2)$. Posterior: $\hat\theta=-0.62$, 95% HPD $(-1.08,-0.17)$.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>

The metric sits at the convergence of two lineages.

Economic/decision lineage. Oliver (2004) introduced the usage/skill curve — efficiency declines with volume. Goldman & Rao (2011) formalized allocative and dynamic efficiency, modeling the shot as a "dynamic mixed-strategy equilibrium weighing both the continuation value of a possession and the value of a teammate's potential shot," with the optimality condition that "the lineup cannot reallocate the ball to increase productivity on the margin" [PAGE 4]. Cervone et al. (2016) contributed both the multiresolution stochastic-process machinery and the "shot satisfaction" concept (expected possession value conditional on a shot minus the unconditional value). Sandholtz & Bornn (2020) supplied the MDP-with-dynamic-transition-probabilities view that motivates treating FGA as controlled. The present paper's distinctive move is to *spatialize* the Goldman–Rao margin: they show the "no relationship" on the aggregate [PAGE 4] is a Simpson artifact, and that the margin lives at court-cell resolution.

Statistical lineage. Besag (1974) → CAR prior [Eq 4]. Lindgren, Rue & Lindström (2011) → the SPDE bridge between Gaussian fields and Gaussian Markov random fields that makes the mesh $\Psi(s)$ tractable. Simpson et al. (2015) → "off-grid" INLA fitting of the LGCP used for both surfaces. Banerjee et al. (2015) → hierarchical spatial modeling substrate. Lee & Seung (1999) → NMF for the basis construction [Eq 3]. Miller et al. (2014) → factorized point-process intensities (the direct ancestor of the $\Lambda$ bases and the $D\in[15,20]$ heuristic). Dixon & Coles (1997) → the exact template for the score regression [Eq 17], retooled from football to basketball.

Multi-week / multi-season trap. The paper's own cautionary genealogy is Derrick Favors [PAGE 21]: "from the 2013-14 season through 2016-17... Favors took over 1500 mid-range shots for an average of 0.76 points per shot," then across 2017-19 the Jazz forced him to the 3-point line, where "his average PPS for these 141 shots was 0.66." The front office ultimately declined to re-sign him. That is a *six-year* feedback loop to learn what a PLC surface flags immediately — the archetypal slow-variable trap the metric is designed to compress. The recurring failure mode across this lineage: treating a player's shot distribution as a fixed trait rather than a coachable, defense-coupled, context-dependent policy.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

The framework is explicitly adversarial. [PAGE 16]: "while the offense is trying to minimize LPL, the defense is trying to maximize LPL." This is a two-player game on the same surface; the permutation null is precisely the test of "whether offenses are able to pull closer to the minimum than defenses are able to pull toward the maximum."

Crisis habit regression. Under elimination-game pressure, star usage spikes and reverts to a dominant-isolation prior. [PAGE 1]: Westbrook "attempted over 30 shots and had an average usage rate of 45.5%," with the 43-attempt, 46-point loss to Utah as the extreme. Modeling the opponent's mind: a defense facing a high-usage star will *concede* the star's low-$\xi$ zones and pack the high-$\xi$ zones — deliberately maximizing LPL. The offense's counter-habit (star keeps shooting) is exactly what the defense wants. LPL/PLC is the instrument that reveals whether the star's crisis regression is justified (dismal supporting shooters → 43 attempts "defensible but also desirable," [PAGE 2]) or self-defeating.

Counter-trap. The recursion deepens because the metric assumes a *static* opponent reading. If a coach rigidly minimizes LPL, [PAGE 22] warns of "a more predictable offense and thus make it easier to defend" (D'Amour et al. 2015). So the equilibrium is not "minimize LPL" but "keep LPL low while remaining unpredictable" — a mixed strategy over the allocation itself, mirroring Goldman–Rao's mixed-strategy origin. A sophisticated defense that anticipates the reallocation will over-rotate to the newly-favored shooters, converting the paper's predicted gain back into a loss.

The clock. Two clocks are unmodeled and decisive. Shot clock: late-clock possessions compress the feasible allocation set — the physically optimal player may be unavailable, so LPL's static reallocation is infeasible. Game clock: the Westbrook corner-3 "underuse" [PAGE 21–22] is a *created* look off a drive; the shot clock and drive timing make the reallocation non-simultaneous. The paper concedes shot clock and defensive pressure "are not available in public data sources" [PAGE 21] and even suggests shot-clock times "could be reverse engineered" [PAGE 22]. Recursive ToM verdict: LPL is a diagnostic prior over intentions, not a decision rule; the coach must model the defense modeling the coach.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

Physical veto (hard, feasibility). [PAGE 22]: "Westbrook cannot both drive to the rim and simultaneously pass to himself in another area of the court." PLC's positive corner-3 signal for Westbrook [Figure 13] is physically unrealizable because the corner look is *generated by* his rim drive. This is a strict veto: the feasible set of $A^\ast_i$ is not the full permutation group but the subset reachable given shot-creation coupling across cells. LPL's per-cell independence assumption (Eq 7 sums over $i$ as if cells were separable) is physically false wherever one player's action in cell $i$ produces another's opportunity in cell $i'$. Proof sketch: let $c_{i\to i'}$ be a creation coupling; the true constraint is $A^\ast_{i'j'}\le f(\text{drive}_{ij})$, so forcing $A^\ast_{ij}\uparrow$ can drive $A^\ast_{i'j'}\downarrow$ for a teammate, lowering total $\sum v\xi A$. QED veto on naive minimization.

Biomechanical veto (soft, magnitude). The usage curve is partly biomechanical fatigue: $\xi_{ij}=\xi_{ij}(A_{ij})$ with $\xi'_{ij}<0$. Since LPL's optimum is derived holding $\xi$ fixed [PAGE 14], it overstates gains — confirmed empirically by $\hat\theta=-0.62\neq1$ [PAGE 18]. The corrected objective is the marginal-equalization program $\max\sum_j v_i\xi_{ij}(A^\ast_{ij})A^\ast_{ij}$ s.t. $\sum A^\ast=$const, whose solution is strictly less extreme than rank-matching. This does not veto the *sign* of the signal, only inflates its *magnitude* by roughly $1/0.62\approx1.6\times$.

"Weather"/environmental veto (soft, bias). Basketball has no weather; the correct analog is the exogenous environmental layer — defensive pressure and court congestion — that public data omit. Two effects: (1) selection bias in $\xi$: "Selection bias is introduced by unequal amounts of defensive pressure applied to shooters of different skill levels" [PAGE 7]; (2) density confounding: LPL concentrates near rim and arc "because the density of shot attempts is highest in these areas" [PAGE 13], so raw $LPL$ conflates inefficiency with traffic — mitigated only by the per-shot normalization [Eq 9]. Adjudication: physical veto is dispositive (block any auto-execution of PLC recommendations); biomechanical and environmental vetoes are magnitude/bias corrections, not sign reversals. Net: LPL is admissible as a *ranking/diagnostic* signal, inadmissible as a *prescriptive* control law.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Framing: reinforcement learning from verifiable rewards needs checks that a policy improvement survives contact with reality. Three falsifiable veto scenarios, each with a measurable prediction.

Veto 1 — Usage-curve reward miss. Policy: shift attempts toward a high-$\xi$, low-usage player per positive PLC. Reality: $\xi$ drops with added volume. Verifiable prediction: post-change realized $PPS_{\text{new}}<\xi_{ij}$ used in the LPL computation, and realized point gain $<$ predicted $LPL$ by the attenuation factor; aggregate test $\hat\theta\in(-1.08,-0.17)$, mean $-0.62$ [PAGE 18], i.e. expected realized gain $\approx0.62\times$ predicted. Falsifiable: if realized gain equals predicted at ratio $1.0$, the constant-$\xi$ assumption is exonerated (it is not — the paper reports the shortfall directly).

Veto 2 — Shot-creation collapse. Policy: force the driver (Westbrook-type) to cede corner-3 volume to himself/others per positive corner PLC [Figure 13]. Reality: removing the drive removes the *created* open corner look. Verifiable prediction: team-wide open-corner-3 frequency and team 3P% fall; total team $PPS$ decreases even as per-cell $LPL$ decreases. Measurable via shot-clock/drive tracking or the drive-and-kick event count. Falsifiable: if corner-3 efficiency and volume are unchanged after removing drives, the physical veto fails (it will not).

Veto 3 — Predictability counter-adjustment. Policy: rigidly minimize $TGLPL$ every game. Reality: a modeling defense anticipates the favored allocations. Verifiable prediction: over a rolling window, opponent defensive rating improves against the minimizing team, and the realized $\hat\theta$ drifts toward $0$ (gains erode) as the season progresses; game-theoretic prediction consistent with D'Amour et al. (2015) [PAGE 22]. Measurable by regressing opponent defensive efficiency on the team's LPL-minimization streak. Falsifiable: if opponents show no adjustment and $\hat\theta$ stays fixed at $-0.62$ across the window, the counter-trap is disproven.

Bonus estimator-level veto (CAR shrinkage). For any player whose entire neighbor set rarely shoots from a region (archetype: centers beyond the arc), $\hat\xi$ is inflated toward the global mean 3P% [PAGE 8], producing a *false* positive PLC there. Verifiable prediction: applying a per-cell minimum-attempt threshold (as the appendix suggests [PAGE 23]) removes the phantom signal; empirical-vs-model rank divergences (the Love–Thompson far-right midrange flip, [PAGE 23], driven by 8/26 vs 4/6 samples) disappear once the threshold binds. This is a direct, checkable filter for spurious LPL contributions.

Consolidated predictions (2016-17 anchored, extensible): Houston near $\approx1$ point/game lost and Washington $>3$ [PAGE 19] should persist as *diagnostic* rankings but *not* as prescriptive targets; any team executing the raw argmax reallocation should realize $\approx0.62\times$ the model's promise and risk Veto-2/3 erosion. These are testable against tracking data the public API lacks — which is precisely the paper's stated frontier [PAGE 22].

</RLVR_COUNTERFACTUAL_VETOES>