---
source: "2023 - Evaluating plate discipline in Major League Baseball with Bayesian Additive Regression Trees - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2023"
pages: 4
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5039
---

<NATIVE_REASONING>
The user wants me to analyze a source paper about plate discipline in MLB using Bayesian Additive Regression Trees (BART). I need to produce output with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Let me carefully parse the source text.

Source: Ryan Yee, University of Wisconsin – Madison Department of Statistics, NESSIS 2023, September 23, 2023. Title: Evaluating plate discipline in Major League Baseball with Bayesian Additive Regression Trees. Authors: Yee & Deshpande (UW Madison).

Key content:
- Slide 2/7: "What is the optimal decision?" Picture text: HOME 2, AWAY 3, 7 2 Outs 1-2. Then Batter: Shohei Ohtani, Umpire: Angel Hernandez.
- Slide 3/7: "Evaluating Plate Discipline": not enough to just look at location. Depends on location, game factors, personnel. Some pitches harder to evaluate. Traditional metrics O-Swing%, Z-Swing% rely solely on location, treat every pitch inside/outside strike zone same. Contribution: framework accounting for contextual factors in addition to location; facilitates uncertainty quantification.
- Slide 4/7: Framework. Picture text: E[R|swing=1], Swing 1-P(contact), Decision, Take P(strike), E[R|swing=0], 1-P(strike). Optimal decision is to swing if E[R|swing=1] > E[R|swing=0]. Then expanded: E[R|swing=1, contact=1] P(contact), E[R|swing=1, contact=0], Swing, Decision Take E[R|swing=1, strike=1] Take P(strike) E[R|swing=0] 1-P(strike) E[R|swing=1, strike=0].
- Slide 5/7: Estimation. Desiderata: estimate each intermediate quantity as functions of conditioning variables. P(strike) = f(game state, personnel, location, ...). Nonlinear, complex interactions, functional form difficult to specify, propagate uncertainties. Solution: BART (Chipman et al.). Nonparametric Bayesian model approximating target function through ensemble of piecewise constant step functions. Ideal for complex interactions due to tree-based structure. Do not need to specify functional form. Generates samples from posterior distribution. Use same approach for P(contact) and E[R|swing, outcome].
- Slide 6/7: Results. Pitches where Trout made optimal decision (umpire's perspective, Trout stands to the left). Pitches where Trout made sub-optimal decision.
- Slide 7/7: Takeaways. Introduced framework for determining optimal swing decision utilizing contextual information. Bayesian approach facilitates uncertainty propagation. BART outperforms traditional approaches. Additional results in pre-print. Contact info. Pre-print, Rshiny app.
- Appendix: Strike Model Validation, Contact Model Validation, Expected Runs Model Validation, Additional Figures.

Important: The text has page markers like NESSIS 2023 2 / 7, 3 / 7, etc. I should cite [PAGE 2], [PAGE 3], etc. or [PAGE 2/7]? The instruction says exact [PAGE N] markers. I'll use [PAGE 2/7], [PAGE 3/7], etc., or maybe [PAGE 2] etc. Let's use [PAGE 2/7] style as they appear. Actually, the markers say "NESSIS 2023 2 / 7". I can cite as [PAGE 2/7] or [PAGE 2]. I'll use [PAGE 2/7] for exactness, but maybe simpler [PAGE 2]. I think [PAGE 2/7] captures the exact marker.

Now, I need to generate formal LaTeX equations. From the paper:

Optimal decision rule:
Swing if $\mathbb{E}[R \mid \text{swing}=1] > \mathbb{E}[R \mid \text{swing}=0]$

Law of total expectation expansion for swing:
$\mathbb{E}[R \mid \text{swing}=1] = \mathbb{E}[R \mid \text{swing}=1, \text{contact}=1] P(\text{contact}) + \mathbb{E}[R \mid \text{swing}=1, \text{contact}=0] (1 - P(\text{contact}))$

Wait, the text says "Swing 1 −P(contact)" and "Take P(strike)". Actually the decision tree seems to be:
- If swing: outcome depends on contact. If contact=1, get E[R|swing=1, contact=1] with probability P(contact). If contact=0, get E[R|swing=1, contact=0] with probability 1-P(contact).
- If take: outcome depends on strike. If strike=1, get E[R|swing=0, strike=1] with probability P(strike). If strike=0, get E[R|swing=0, strike=0] with probability 1-P(strike).

But the text in the picture is a bit garbled. Let me reconstruct carefully.

From page 4/7:
"E[ R| swing = 1] Swing 1 −P ( contact ) Decision Take P ( strike ) E[ R| swing = 0] 1 −P ( strike )"
Then later:
"E[ R| swing = 1 , contact = 1] P ( contact ) E[ R| swing = 1] Swing 1 −P ( contact ) E[ R| swing = 1 , contact = 0] E[ R| swing = 1 , strike = 1] Take P ( strike ) E[ R| swing = 0] 1 −P ( strike ) E[ R| swing = 1 , strike = 0]"

Wait, there's some confusion in the OCR. It seems like:
For swing branch:
- contact=1: E[R|swing=1, contact=1] with weight P(contact)
- contact=0: E[R|swing=1, contact=0] with weight 1-P(contact)

For take branch:
- strike=1: E[R|swing=0, strike=1] with weight P(strike) [but text says E[R|swing=1, strike=1]? Probably typo in OCR or paper, should be swing=0]
- strike=0: E[R|swing=0, strike=0] with weight 1-P(strike)

Actually the text says "E[ R| swing = 1 , strike = 1] Take P ( strike ) E[ R| swing = 0] 1 −P ( strike ) E[ R| swing = 1 , strike = 0]". This is likely a formatting issue where the branches got interleaved. But conceptually:

$\mathbb{E}[R \mid \text{swing}=0] = \mathbb{E}[R \mid \text{swing}=0, \text{strike}=1] P(\text{strike}) + \mathbb{E}[R \mid \text{swing}=0, \text{strike}=0] (1 - P(\text{strike}))$

And $\mathbb{E}[R \mid \text{swing}=1] = \mathbb{E}[R \mid \text{swing}=1, \text{contact}=1] P(\text{contact}) + \mathbb{E}[R \mid \text{swing}=1, \text{contact}=0] (1 - P(\text{contact}))$

Estimation:
$P(\text{strike}) = f(\text{game state, personnel, location, ...})$
$P(\text{contact}) = f(\dots)$
$\mathbb{E}[R \mid \text{swing}, \text{outcome}] = f(\dots)$

BART: sum of trees:
$f(x) = \sum_{m=1}^{M} g(x; T_m, M_m)$
where $T_m$ are tree structures and $M_m$ are terminal node values.

Posterior sampling: generates samples from posterior distribution $p(f \mid \mathcal{D})$.

Units: Runs (R) presumably in expected runs units. Probabilities dimensionless [0,1]. Game state includes outs, count, score, inning, base runners (discrete/categorical). Personnel includes batter, pitcher, umpire (categorical). Location is continuous (x,y coordinates in feet or normalized zone).

Breakdown regimes: BART can break down when:
- Extrapolation far outside training covariate space (piecewise constant step functions cannot extrapolate beyond observed ranges; predictions flatten to nearest leaf mean).
- Sparse cells for rare personnel combinations (e.g., specific batter-pitcher-umpire triads) causing high posterior variance or non-identifiability.
- Non-stationarity: umpire strike zones change over time; if not modeled, concept drift invalidates $P(\text{strike})$.
- Censoring: contact only observed if swing=1; strike only observed if take=0? Actually strike can be called on taken pitches. Contact only on swings. This creates missingness mechanisms / selection bias.
- Singularity: if $P(\text{contact}) \in \{0,1\}$ exactly for some region, the swing expectation collapses to one branch; if $P(\text{strike}) \in \{0,1\}$, take expectation collapses. With BART posterior, this happens if all trees in a leaf agree perfectly (rare but possible with overfitting).

Now I need to write the sections.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). This is where I reason through the paper, derive equations, audit gray zones (selection bias, umpire heterogeneity, Trout vs Ohtani example, context dependency). Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown. I'll write equations with [PAGE 4/7] etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Connect to traditional O-Swing%/Z-Swing%, PITCHf/x, Statcast, BART lineage (Chipman et al.), decision theory (expected utility), retrosheet, etc. Multi-week traps: small sample over weeks, hot/cold streaks, umpire drift, pitcher fatigue.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is more speculative/psychological. Batter's recursive theory of mind: what does batter think pitcher thinks batter will do? Crisis habit regression: under pressure, regress to habitual swing/take. Counter-trap: pitcher exploiting known optimal decision. Clock: game clock/pitch clock, tempo.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: bat speed, launch conditions. Biomechanical: batter's swing mechanics, injury, fatigue. Weather: wind, temperature, humidity affecting ball flight and movement. Veto proof: even if model says swing, physical constraints may veto.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable counterfactuals. I'll create 3 scenarios with verifiable conditions and predictions.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. Others should be substantial.

Let me ensure no betting lines. No mention of odds, spreads, moneylines, totals.

No toy equations. All equations must be formal LaTeX with proper justification.

Let's draft.

THINK_TRACE (>=400 words):
I will discuss the derivation from the decision tree, the identification problem (contact only on swings, strike only on takes), the BART solution, uncertainty propagation, the Ohtani/Trout examples, gray zones: umpire-specific strike zones (Angel Hernandez example), Trout's handedness/standing position (umpire's perspective, Trout stands to the left), the fact that traditional metrics ignore context, the curse of dimensionality in conditioning variables, the issue of partial identification due to counterfactual outcomes (we never observe both swing and take on same pitch), etc.

SOURCE_OPERATORS_AND_EQUATIONS:
Define R as expected run value (units: runs). Let $a \in \{0,1\}$ denote take/swing. Let $c \in \{0,1\}$ contact, $s \in \{0,1\}$ strike. Let $X$ be covariate vector including game state (outs, count, inning, score differential, base occupancy), personnel (batter ID, pitcher ID, umpire ID), location $(x,z)$ in feet from home plate.

Equations:
Optimal policy:
$\pi^*(X) = \mathbb{I}\{ \mathbb{E}[R \mid a=1, X] > \mathbb{E}[R \mid a=0, X] \}$ [PAGE 4/7]

Swing value decomposition:
$\mathbb{E}[R \mid a=1, X] = \mathbb{E}[R \mid a=1, c=1, X] P(c=1 \mid a=1, X) + \mathbb{E}[R \mid a=1, c=0, X] (1 - P(c=1 \mid a=1, X))$ [PAGE 4/7]

Take value decomposition:
$\mathbb{E}[R \mid a=0, X] = \mathbb{E}[R \mid a=0, s=1, X] P(s=1 \mid a=0, X) + \mathbb{E}[R \mid a=0, s=0, X] (1 - P(s=1 \mid a=0, X))$ [PAGE 4/7]

Constituent models:
$P(s=1 \mid X) = f_s(X)$ [PAGE 5/7]
$P(c=1 \mid X, a=1) = f_c(X)$
$\mathbb{E}[R \mid a, o, X] = f_R(a, o, X)$

BART:
$f(X) = \sum_{m=1}^{M} T_m(X; \mathcal{T}_m, \mathcal{M}_m)$ where $\mathcal{T}_m$ is tree structure, $\mathcal{M}_m$ leaf values. Posterior samples $\tilde f^{(b)} \sim p(f \mid \mathcal{D})$, $b=1,\dots,B$. Uncertainty propagation: for each posterior draw, compute $\Delta R^{(b)} = \mathbb{E}^{(b)}[R|a=1,X] - \mathbb{E}^{(b)}[R|a=0,X]$, then credible interval for $\Delta R$.

Breakdown:
- Extrapolation: BART leaf means are bounded by training range; outside convex hull, prediction collapses to boundary average. Singularity when $P(c|X)=0$ or $1$ exactly (degenerate branch).
- Selection bias: $c$ only observed when $a=1$; $s$ only meaningfully defined when $a=0$ (though called strikes occur on takes; swinging strikes are contact=0). Missing not at random.
- Rare personnel cells: specific batter-pitcher-umpire triads yield wide posterior intervals.

RETROCAUSAL_GENEALOGY:
Lineage: traditional plate discipline metrics O-Swing%, Z-Swing% (location-only) [PAGE 3/7]. Predecessors: PITCHf/x (2006-2019), Statcast (2015-present), expected run value matrices (Tango, etc.), decision theory (expected utility). BART: Chipman, George, McCulloch (1998, 2010). Multi-week traps: weekly small-sample noise, batter/pitcher adjustments over a series, umpire strike zone drift across a week, weather shifts, pitcher fatigue accumulating over a week, batter's recent habit regression.

RECURSIVE_THEORY_OF_MIND:
Level 0: batter swings based on pitch location alone.
Level 1: pitcher targets location based on batter's known tendencies.
Level 2: batter anticipates pitcher's targeting and adjusts swing decision.
Crisis habit regression: under high leverage (e.g., 1-2 count, 2 outs, score differential), batter regresses to habitual swing/take pattern rather than context-optimal decision. Counter-trap: pitcher exploits known optimal decision rule by throwing pitches that induce sub-optimal swings (e.g., pitcher knows batter will chase based on model). Clock: pitch clock (15/20 seconds) reduces deliberation time, increasing habit regression; game clock/inning timing affects bullpen usage and pitcher fatigue.

CROSS_LAYER_VETO_ADJUDICATION:
Physical veto: Even if $\pi^*=swing$, if bat speed or launch angle physically cannot produce positive run value given pitch velocity/movement, veto. Biomechanical: batter's swing mechanics (hip-shoulder separation, stride length) alter contact probability $P(c=1|X)$ beyond what BART estimates from aggregate data. Weather: air density $\rho$, wind vector $\vec w$, temperature $T$ alter pitch movement and ball flight; effective strike zone shifts. Veto proof: The model conditions on observed outcomes but cannot observe counterfactual physical states (e.g., batter injured but playing, wind gust at exact release). Thus vetoes are unverifiable from play-by-play alone.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios:
1. Umpire strike zone expansion: If umpire's called strike probability shifts by >5 percentage points for a specific count (verifiable via called-strike rate on taken pitches), prediction: model's optimal swing threshold shifts toward taking more borderline pitches; expected runs from swinging decreases by $\Delta R < -0.02$ runs per pitch.
2. Batter contact collapse: If batter's observed contact rate on swings drops below 0.50 for fastballs >95 mph in a given week (verifiable via Statcast), prediction: BART posterior for $P(c=1|X)$ contracts, swing value falls below take value; model reverses optimal decision from swing to take.
3. Rain delay / temperature drop: If temperature drops below 50°F with headwind >10 mph (verifiable via weather API), prediction: drag increases, ball flight shortens, expected run value of contact drops; model increases take threshold for borderline pitches; observed wOBAcon decreases by >0.020.

Each must be verifiable and include predictions.

Now word count. I need to make sure total >=1000 words. THINK_TRACE ~500. SOURCE ~300. RETRO ~250. RECURSIVE ~250. CROSS ~250. RLVR ~200. Total ~1750. Good.

I must include verbatim quotes where citing pages. The instruction says: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include short verbatim quotes from the source with page citations.

Let's find exact quotes:
[PAGE 2/7]: "HOME 2<br>AWAY 3<br>7 2 Outs 1-2" and "Batter: Shohei Ohtani<br>Umpire: Angel ´ Hern´andez"
[PAGE 3/7]: "It is not enough to just look at location..." and "Traditional plate discipline metrics: `O-Swing%` , `Z-Swing%`" and "Treats every pitch inside (outside) the strike zone the same"
[PAGE 3/7]: "Our Contribution ... Introduce framework for evaluating plate discipline which accounts for contextual factors in addition to location ... Framework facilitates uncertainty quantification in evaluations"
[PAGE 4/7]: "The optimal decision is to swing if E[ _R|_ `swing` = 1] _>_ E[ _R|_ `swing` = 0]"
[PAGE 4/7]: The expanded decision tree text with P(contact), P(strike).
[PAGE 5/7]: "$P( \text{`strike`} ) = f( \text{`game state, personnel, location, ...` })$" and "Nonlinear Complex interactions Functional form difficult to specify Propagate uncertainties from constituent models" and "Solution: Bayesian Additive Regression Trees (BART; see Chipman, et. al.)" and "Generates samples from the posterior distribution of target function"
[PAGE 6/7]: "Pitches where Trout made the optimal decision" "Note: Pitches shown from umpire’s perspective (Trout stands to the left)"
[PAGE 7/7]: Takeaways list.

I need to embed these as quotes.

Let's write carefully. Avoid any betting terminology. Use "runs" as unit.

I will structure the response with exactly the XML tags requested. No extra text outside. The tags must be exact.

Let's begin drafting each section.

THINK_TRACE: I need to derive the multi-hop logic. Start from the decision problem on page 2: count 1-2, 2 outs, home 2 away 3, batter Ohtani, umpire Hernandez. This sets up a high-leverage context where location alone is insufficient. Then page 3: traditional metrics fail. Page 4: decision rule. Page 5: estimation via BART. Gray zones: counterfactual missingness (we never observe both swing and take on same pitch), umpire-specific strike zones (Hernandez known for inconsistent zone), batter handedness/perspective (Trout stands to the left), sparse cells, posterior uncertainty. I'll write >400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math. Include BART ensemble equation. Include units. Include breakdown regimes (singularity at P=0 or 1, extrapolation boundary, selection bias). Cite pages.

RETROCAUSAL_GENEALOGY: Historical lineage from O-Swing/Z-Swing to BART. Chipman et al. Multi-week traps: small samples, umpire drift, pitcher fatigue, batter slump, weather series.

RECURSIVE_THEORY_OF_MIND: Levels of intentionality. Crisis habit regression. Counter-trap. Clock (pitch clock).

CROSS_LAYER_VETO_ADJUDICATION: Physical, biomechanical, weather. Vetoes.

RLVR_COUNTERFACTUAL_VETOES: Three numbered scenarios with verifiable conditions and predictions.

Word count check: I need to ensure >=1000 words total. I'll write generously.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper frames plate discipline as a sequential decision problem under uncertainty, beginning with a concrete game-state cue on [PAGE 2/7]: “HOME 2 AWAY 3 7 2 Outs 1-2” featuring batter Shohei Ohtani and umpire Angel Hernandez. This is not a neutral backdrop; it establishes a high-leverage context (two outs, late count, one-run differential) in which the same physical pitch location can carry different optimal prescriptions depending on who is batting, who is pitching, and who is calling balls and strikes. The paper explicitly rejects location-only evaluation, stating on [PAGE 3/7] that “It is not enough to just look at location… Analysis depends on location, game factors, and personnel” and that traditional metrics such as O-Swing% and Z-Swing% “Treats every pitch inside (outside) the strike zone the same.” This is the first gray zone: plate discipline metrics conflate the physical strike zone with the called strike zone and ignore the strategic value of the count.

The formal decision apparatus appears on [PAGE 4/7], where the optimal decision rule is stated as “The optimal decision is to swing if E[ R| swing = 1] > E[ R| swing = 0].” The diagram decomposes each branch into conditional expectations: swinging branches on contact (P(contact) and 1−P(contact)), while taking branches on the called strike probability (P(strike) and 1−P(strike)). This reveals a second gray zone: fundamental counterfactual missingness. On any single pitch we observe either a swing or a take, never both; consequently we never directly observe E[R|swing=1] and E[R|swing=0] for the same realization. The paper attempts to close this gap by modeling intermediate quantities—strike probability, contact probability, and expected run value conditional on outcome—as functions of conditioning variables. On [PAGE 5/7] the desiderata are listed: P(strike) = f(game state, personnel, location, …), with explicit acknowledgment that the relationship is “Nonlinear,” involves “Complex interactions,” and that the “Functional form [is] difficult to specify.” The proposed solution is Bayesian Additive Regression Trees (BART; see Chipman, et. al.), a nonparametric Bayesian ensemble of piecewise constant step functions that “Generates samples from the posterior distribution of target function.”

The deeper derivation, therefore, is a chain of conditional expectations. If C ∈ {0,1} indicates contact and S ∈ {0,1} indicates a called strike, then the swing value is E[R|swing=1,X] = E[R|swing=1,C=1,X]P(C=1|X) + E[R|swing=1,C=0,X](1−P(C=1|X)), and the take value is E[R|swing=0,X] = E[R|swing=0,S=1,X]P(S=1|X) + E[R|swing=0,S=0,X](1−P(S=1|X)). The optimal policy swings whenever the posterior mean of the swing value exceeds the posterior mean of the take value. Uncertainty propagation is not cosmetic; because BART yields posterior samples, each constituent probability and expected run value carries a distribution, and the difference ΔR(X) = E[R|swing=1,X] − E[R|swing=0,X] inherits a full posterior credible interval. A decision is only robustly optimal if that interval excludes zero with sufficient confidence.

Gray-zone audit: [PAGE 6/7] shows results for Mike Trout “from umpire’s perspective (Trout stands to the left),” which introduces a spatial conditioning bias—left-handed batters see the zone differently than right-handed batters, and the umpire’s perspective may not align with the batter’s visual angle. The Ohtani/Hernandez example on [PAGE 2/7] flags umpire heterogeneity; Hernandez is widely associated with a wide or inconsistent called zone, meaning P(strike|X) is not stationary across umpires. Sparse personnel cells are another regime: a specific batter–pitcher–umpire triad may occur rarely, inflating posterior variance and threatening the claim that BART “outperforms traditional approaches” without sufficient calibration evidence. Finally, the contact model is only defined for swings, and the strike model is most naturally estimated on takes, creating selection-on-treatment bias that the paper does not fully resolve in the provided slides. The appendix sections (Strike Model Validation, Contact Model Validation, Expected Runs Model Validation) hint at these checks but are not reproduced here, leaving the external validity of the framework partially unsubstantiated in this document.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let R denote expected run value in units of runs. Let X be the conditioning covariate vector comprising game state (inning, outs, count, score differential, base occupancy), personnel (batter ID, pitcher ID, umpire ID), and pitch location coordinates in feet relative to home plate. Let A ∈ {0,1} be the action (0 = take, 1 = swing), C ∈ {0,1} contact, and S ∈ {0,1} called strike.

From [PAGE 4/7], the optimal decision rule is:

\pi^*(X) = \mathbb{I}\Big\{ \mathbb{E}[R \mid A=1, X] > \mathbb{E}[R \mid A=0, X] \Big\}

where \mathbb{I}\{\cdot\} is the indicator function. Quoting the slide verbatim: “The optimal decision is to swing if E[ _R|_ `swing` = 1] _>_ E[ _R|_ `swing` = 0].”

By the law of total expectation, decomposing the swing branch as shown on [PAGE 4/7]:

\mathbb{E}[R \mid A=1, X] = \mathbb{E}[R \mid A=1, C=1, X] \, P(C=1 \mid A=1, X) + \mathbb{E}[R \mid A=1, C=0, X] \, \big(1 - P(C=1 \mid A=1, X)\big)

Decomposing the take branch:

\mathbb{E}[R \mid A=0, X] = \mathbb{E}[R \mid A=0, S=1, X] \, P(S=1 \mid A=0, X) + \mathbb{E}[R \mid A=0, S=0, X] \, \big(1 - P(S=1 \mid A=0, X)\big)

Constituent models from [PAGE 5/7] are written as:

P(S=1 \mid X) = f_S(\text{game state, personnel, location, } \dots)

P(C=1 \mid X, A=1) = f_C(X)

\mathbb{E}[R \mid A, O, X] = f_R(A, O, X), \quad O \in \{C, S\}

The paper states on [PAGE 5/7] that these functions are “Nonlinear,” involve “Complex interactions,” and that the “Functional form [is] difficult to specify,” motivating “Propagate uncertainties from constituent models.”

BART representation (per Chipman et al. as cited on [PAGE 5/7]):

f(X) = \sum_{m=1}^{M} g\big(X; \mathcal{T}_m, \mathcal{M}_m\big)

where each \mathcal{T}_m is a binary tree structure and \mathcal{M}_m is the vector of leaf values; g is a piecewise constant step function. The Bayesian formulation yields posterior draws f^{(b)} \sim p(f \mid \mathcal{D}), b = 1,\dots,B. For each draw one computes:

\Delta R^{(b)}(X) = \mathbb{E}^{(b)}[R \mid A=1, X] - \mathbb{E}^{(b)}[R \mid A=0, X]

and summarizes with posterior credible intervals. The paper states BART “Generates samples from the posterior distribution of target function” [PAGE 5/7].

Breakdown and singularity regimes:
1. Degenerate probability boundary: if P(C=1|X) \in \{0,1\} exactly for some region of X, the swing expectation collapses to a single branch and \Delta R(X) loses sensitivity to contact quality; similarly if P(S=1|X) \in \{0,1\}, the take branch collapses.
2. Extrapolation failure: BART leaf means are bounded by the range of observed training responses. Outside the convex hull of the covariate space, predictions revert to boundary leaf averages rather than extrapolating physically meaningful trends.
3. Sparse personnel cells: rare batter–pitcher–umpire triads produce wide posterior intervals, potentially causing \Delta R(X) credible intervals to contain zero and rendering the optimal decision statistically indeterminate.
4. Selection bias: C is observed only when A=1, and S is best estimated on A=0, so the constituent models are fitted on non-overlapping subsets unless missingness is modeled explicitly.
5. Umpire non-stationarity: as suggested by the Angel Hernandez example on [PAGE 2/7], P(S=1|X) may drift across games or seasons, invalidating a static f_S(X) unless time-varying random effects are included.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage of this work begins with traditional plate discipline metrics. As noted on [PAGE 3/7], O-Swing% and Z-Swing% rely “solely on the location of the pitch” and treat every pitch inside or outside the strike zone identically. These metrics descend from the PITCHf/x era (2006–2019) and early Statcast descriptors, which reduced discipline to a binary zone-membership problem. The paper’s contribution on [PAGE 3/7] is to “Introduce framework for evaluating plate discipline which accounts for contextual factors in addition to location,” thereby reversing the causal arrow: instead of asking whether a pitch was in the zone, the framework asks what expected run value a specific batter should anticipate from swinging or taking in a specific game state.

Methodologically, BART connects to the nonparametric Bayesian regression tree literature pioneered by Chipman, George, and McCulloch (1998, 2010). Unlike logistic regression or generalized additive models that require prespecified functional forms, BART approximates f(X) through an ensemble of piecewise constant step functions, making it “Ideal for modeling complex interactions due to tree-based structure” [PAGE 5/7]. This places the paper in a broader sabermetric genealogy that includes expected run matrices (Tango et al.), win-probability added, and Statcast-based expected run value on contact. However, whereas expected run value conditions on realized outcomes, this paper conditions on the pre-decision state, producing a counterfactual decision rule.

Multi-week traps in this lineage include: (1) small-sample instability over weekly aggregates, where a few extreme at-bats can swing O-Swing% by several percentage points; (2) umpire strike-zone drift across a homestand or road trip, which violates stationarity in P(S=1|X); (3) pitcher fatigue accumulating across a week of appearances, altering movement profiles and thus contact probabilities; (4) batter mechanical slumps or adjustments that render a season-long contact model stale; and (5) weather sequences (cold front, rain delay) that change air density and ball flight within a week, invalidating location-only priors. The paper’s appendix sections on Strike, Contact, and Expected Runs Model Validation suggest awareness of these instabilities, but the slides do not demonstrate longitudinal stability across multiple weeks, which remains a gray zone for deployment.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Plate discipline is inherently a recursive game of incomplete information. At level zero, the batter swings or takes based on pitch location alone—the approach critiqued on [PAGE 3/7] as inadequate. At level one, the pitcher observes the batter’s tendency (e.g., chasing low-and-away breaking balls) and targets locations that exploit it. At level two, the batter anticipates the pitcher’s targeting and adjusts the swing decision, possibly taking a pitch that looks like a strike because the pitcher is expected to miss the zone. The Yee–Deshpande framework operationalizes level-two reasoning by conditioning P(S=1|X) and P(C=1|X) on personnel and game state, effectively modeling the batter’s belief about the pitcher’s strategy and the umpire’s zone.

Crisis habit regression enters under high-leverage states such as the one pictured on [PAGE 2/7] (two outs, 1-2 count, one-run game). In these states, batters often regress to habitual swing/take patterns rather than executing the context-optimal decision. If a batter habitually swings at 1-2 breaking balls regardless of expected value, the realized action diverges from \pi^*(X), and the model’s sub-optimal classification on [PAGE 6/7] reflects this regression rather than a pure information deficit.

The counter-trap is the pitcher’s inverse problem: knowing the batter’s approximate decision rule, the pitcher can throw “model-bait” pitches—locations that induce the batter to swing when \pi^*(X) = take, or to take when \pi^*(X) = swing. Because BART estimates f_S and f_C from historical outcomes, a pitcher who systematically varies sequencing can shift the conditional distributions and invalidate previously optimal decisions, creating an adversarial arms race not captured in the static framework.

The clock operates on two timescales. The pitch clock (15 seconds with bases empty, 20 with runners on) compresses deliberation time, increasing the likelihood of crisis habit regression because the batter cannot fully compute \Delta R(X) before the pitcher begins motion. The game clock and inning timing affect bullpen deployment and pitcher fatigue, which in turn modulate P(C=1|X) and pitch movement over the course of a week. Thus, the recursive theory of mind must be computed under a deadline, and the optimal decision is only valid if the batter’s cognitive and physiological state can support it within the clock constraint.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Even when the statistical model prescribes a swing, physical, biomechanical, and environmental layers can veto the decision.

Physical layer: The model outputs expected run value in units of runs, but the physical realization of contact depends on bat speed, pitch velocity, spin axis, and intercept timing. If \pi^*(X) = swing but the pitch velocity exceeds the batter’s physical reaction window (roughly 0.4 seconds for >95 mph fastballs), the contact probability P(C=1|X) estimated from aggregate data overestimates the batter’s realized probability, and the swing branch should be vetoed. BART cannot observe this micro-physical constraint directly; it only infers contact from realized outcomes.

Biomechanical layer: A batter’s swing mechanics—stride length, hip-shoulder separation, bat path—determine whether a given pitch location can be driven with positive run value. Injury, fatigue, or mechanical drift alters f_C(X) and f_R(·|A=1,C=1,X) without changing X as recorded in play-by-play data. If a batter is playing through a wrist injury, the model’s expected value of contact may be positive while the biomechanical reality produces weak contact or foul balls. This is a veto that is invisible to the covariates listed on [PAGE 5/7] unless specific injury flags are included.

Weather layer: Air density \rho, wind vector \vec{w}, temperature T, and humidity alter both pitch movement and batted-ball flight. A headwind reduces expected run value of fly-ball contact; cold air increases drag. The location coordinates in X are static, but the effective strike zone and run value surface shift with weather. If temperature drops below approximately 50°F with a strong headwind, E[R|swing=1,C=1,X] should be revised downward, potentially flipping \pi^*(X) from swing to take. The paper’s framework accounts for “game state” broadly but does not explicitly include meteorological covariates in the listed desiderata on [PAGE 5/7], so weather vetoes are exogenous to the current specification.

Veto proof: Because these layers operate on time scales and physical resolutions finer than pitch-level play-by-play data, they are not fully identifiable from the model’s conditioning set. A veto is proven when the realized contact outcome is physically impossible under the model’s assumed parameter region (e.g., exit velocity below the measurable threshold given the model’s predicted contact quality), but such proof requires high-speed kinematic data beyond the scope of the provided slides.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Umpire zone shift (verifiable): Condition is a verified change in an umpire’s called-strike rate on taken pitches at the 1-2 count by more than 5 percentage points over a one-week window (observable from pitch-by-pitch called-strike logs). Prediction: BART’s posterior for P(S=1|X) shifts upward for that umpire, increasing the take branch value E[R|swing=0,X] and lowering \Delta R(X); the model prescribes taking more borderline pitches, and observed swing rates at the 1-2 count against that umpire decline by at least 0.03.

Scenario 2 — Batter contact collapse (verifiable): Condition is a verified drop in a batter’s contact rate on swings against fastballs above 95 mph below 0.50 over a rolling seven-day span (observable from Statcast). Prediction: The posterior mean of P(C=1|X) for that batter–pitch class contracts, reducing E[R|swing=1,X]; the optimal decision flips from swing to take for high-velocity pitches in the zone, and the batter’s swing rate against such pitches falls by more than 0.05 while wOBAcon on contact remains unchanged or declines.

Scenario 3 — Cold-weather headwind veto (verifiable): Condition is game-time temperature below 50°F with a headwind component exceeding 10 mph blowing toward the batter’s pull side (verifiable via stadium weather API). Prediction: Increased air density and drag reduce expected run value of contact, particularly for fly balls; the model raises the swing threshold, \Delta R(X) becomes negative for borderline zone pitches, and observable slugging percentage on contact drops by more than 0.030 compared with warm-weather games for the same batter–pitch profiles.

Each scenario is verifiable from publicly available play-by-play, Statcast, or weather records, and each generates a falsifiable directional prediction about the model’s optimal decision rule or the resulting observable outcomes.
</RLVR_COUNTERFACTUAL_VETOES>