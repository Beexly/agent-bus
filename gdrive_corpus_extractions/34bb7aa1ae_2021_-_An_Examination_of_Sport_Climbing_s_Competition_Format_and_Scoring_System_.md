---
source: "2021 - An Examination of Sport Climbing's Competition Format and Scoring System - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2021"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5051
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided source text (a 10-page paper about sport climbing's competition format and scoring system). I need to produce output with exactly these XML sections, >= 1,000 words total depth, strict invariants about zero betting lines, zero toy equations, formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes, and page citations [PAGE N] with verbatim quotes where source pages are provided.

Sections required:
1. <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
2. <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
3. <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use real formalism.

Let me structure this carefully.

Key facts from source:
- Rank-product scoring: Score_i = R^S_i × R^B_i × R^L_i [PAGE 2, Eq 1]
- 20 climbers qualification, top 8 advance to finals [PAGE 2]
- 8 finalists, medals to top 3 [PAGE 3]
- Simulation: 10,000 simulations, ranks uniformly distributed [PAGE 3]
- P(advance | win any discipline) = 99.48% [PAGE 4]
- P(medal | win any discipline in finals) = 85.01% [PAGE 4]
- Average qualification score for 8th rank ≈ 435 [PAGE 4]
- Average final scores for gold/silver/bronze: 10, 21, 34 [PAGE 4]
- Kendall's tau women's qualification Tokyo 2020: Speed τ=0.147, p=0.386, CI (-0.191, 0.469); Bouldering τ=0.432, p=0.00735, CI (0.107, 0.691); Lead τ=0.463, p=0.00378, CI (0.112, 0.753) [PAGE 5-6]
- PCA: lead/bouldering load on PC1, speed on PC2, separated [PAGE 6-7]
- IIA violation example: 2018 Youth Olympics Women's Final, 6 climbers, removing 5th-place Krasovskaia moved Meul from 4th to 2nd (silver) [PAGE 7-8]
- Conclusion: speed should have separate medals, lead+bouldering combined [PAGE 9]
- Paris 2024 confirmed two competitions: combined lead+bouldering, speed-only [PAGE 9]

Now I need to write the sections. The tone should be analytical, frontier reasoning foundry style. Must avoid betting lines entirely. Must not invent fake ratios like Force/Fatigue. Must use formal LaTeX.

Let me draft each section with word counts in mind. Total >= 1000 words. THINK_TRACE alone >= 400 words.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. I'll derive the rank-product distribution properties, discuss the simulation assumptions (uniform ranks, independence), the gray zones (independence assumption unrealistic because disciplines correlate; simulation uses random permutation not actual performance distributions; leave-one-climber-out re-ranking creates rank coupling; small sample n=20 for Olympics, n=6 for youth; bootstrapped CIs wide; IIA violation mechanism; singularity when rank = 0? Actually ranks start at 1 so product is well-defined, but if a discipline is removed the score changes discontinuously). Breakdown regimes: n small, ties, disqualification, correlation between disciplines, non-uniform skill distributions.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define score operator, probability operators, Kendall tau formula, PCA loadings, IIA violation predicate. Units: ranks are dimensionless ordinal integers in {1,...,20}; probability dimensionless [0,1]; seconds for speed time; holds/tops are counts. Page citations. Breakdown: Eq (1) singular if any rank undefined (injury, DNF), ties require tie-breaking rules not specified; product scale is not interval-scale so averaging scores across simulations is mathematically suspect (though they report expected scores).

RETROCAUSAL_GENEALOGY: Arrow 1951, Luce 1959, Kendall 1938, Efron & Tibshirani 1986, Hammond 2007, Boudreau et al. 2018, Westera 2006, CrossFit 2021, Paris 2024 format change. Multi-week traps: if analyzing over weeks, athlete form correlates across weeks, rank-product compounds small disadvantages, "discipline specialist" trap.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (climbers reverting to specialist discipline under pressure), counter-trap (organizers anticipating specialist boycott by splitting medals), clock (Olympic cycle, Paris 2024 change). Model the strategic interaction.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (speed wall is standardized 15m, biomechanically distinct), biomechanical (explosive vs endurance), weather (outdoor lead/bouldering vs indoor speed; heat, humidity affecting glycogen). Veto proof: speed is separable because it's a time trial on a fixed route; lead/bouldering share perceptual-motor domain. Weather veto: outdoor lead walls affected by wind/heat; speed is indoor controlled.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
1. Veto: If speed rank variance → 0 (all speed times identical due to perfect standardization), rank-product collapses to R^B × R^L, eliminating speed specialist disadvantage. Prediction: advance probability for speed-only athletes rises from <1% to ~baseline.
2. Veto: If a lead/bouldering specialist wins both lead and bouldering but places 20th in speed, score = 20×1×1 = 20, beats a balanced 10×10×10 = 1000. Prediction: medal probability for such specialist > 85.01%? Actually need verifiable.
3. Veto: If a DNF (did not finish) is assigned rank = N+1 = 21 rather than excluded, product jumps by factor 21/R, creating rank-product singularity relative to finite ranks. Prediction: any climber with DNF in any discipline cannot advance (probability = 0 under simulation support).

I need to ensure no betting lines. No mention of odds, spreads, etc.

Let me write carefully with exact page citations and verbatim quotes where appropriate. The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include quotes like "[PAGE 2]" and quote text.

Word count: I'll aim for substantial depth in each section. Let's start writing.

THINK_TRACE: Need >=400 words. I'll write maybe 500-600 words.

Let me draft.

---

<THINK_TRACE>
The rank-product operator maps a triad of ordinal discipline ranks onto a scalar via multiplication. On [PAGE 2], the authors state: "A competitor’s combined score is computed as the product of their ranks in the three events; specifically, Score_i = RS_i × RB_i × RL_i." Because ranks are positive integers bounded below by 1, the product has no internal zero singularity; however, the operator is not translation-invariant and has discontinuous sensitivity to re-ranking. A multi-hop derivation begins with the qualification stage: 20 climbers, each receiving a rank in {1,...,20} per discipline. The simulation on [PAGE 3] assumes "randomly assigning the ranks of each event to every participant, with the assumption that the ranks are uniformly distributed." This uniformity assumption is the critical gray zone: it implies independence between disciplines and treats each rank permutation as equally likely, which contradicts the empirical correlation results reported on [PAGE 5]-[PAGE 6], where bouldering and lead show Kendall’s τ ≈ 0.43–0.46 with speed near zero. If discipline ranks are correlated, the joint support of the simulation is misspecified; the product’s right tail is overstated for balanced climbers and understated for specialists.

A second gray zone concerns the reporting of "average score" on [PAGE 4]. The authors report expected qualification scores by rank (e.g., 435 for 8th) and final medal scores (10, 21, 34). Because the rank-product is an ordinal construct, not an interval-scale performance measure, averaging products across simulations yields a number with no direct physical interpretation in seconds, holds, or tops. The mean is dominated by rare high-product outcomes, so the central tendency is skewed; the median would be more robust but is not provided.

Third, the leave-one-climber-out analysis on [PAGE 7]-[PAGE 8] re-computes ranks after deletion. This is where the rank-product system exhibits an IIA violation: removing Krasovskaia (5th) moves Meul from 4th to 2nd on [PAGE 8]. Mechanistically, when a competitor is removed, every rank below them decrements by one in each discipline where they were ahead. Because multiplication amplifies rank changes asymmetrically—a drop from 4th to 3rd in speed changes a factor of 4 to 3 (25% reduction), while a drop from 20th to 19th changes 20 to 19 (5% reduction)—the same deletion can reorder medalists depending on which disciplines the removed athlete occupied.

Breakdown regimes: (1) DNF/injury introduces an undefined rank; if assigned N+1, the product jumps by a factor of (N+1)/r, creating a non-removable singularity relative to finite-rank comparisons. (2) Ties require tie-breaking rules absent from Eq. (1); tied ranks break the strict total order needed for the product to induce a unique ranking. (3) Small n (20 Olympic qualifiers, 6 Youth Olympians) makes bootstrapped confidence intervals extremely wide, e.g., speed CI (-0.191, 0.469) on [PAGE 6], so the null of zero speed correlation cannot be distinguished from moderate positive or negative association.

The simulation’s advance probability of 99.48% conditional on winning any discipline [PAGE 4] rests on the uniform-rank assumption; under realistic positive correlation between lead and bouldering, a lead/bouldering specialist who wins one of those disciplines is even more likely to advance, whereas a speed specialist winning only speed gains less protection because speed rank correlates weakly with the others.
</THINK_TRACE>

That's probably around 500 words. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, citations, breakdown.

I'll define:
- Let \mathcal{D} = \{S, B, L\}. Rank operator R^d_i \in \{1,...,N\}, N=20 qualification, N=8 final.
- Score operator: \mathcal{S}(i) = \prod_{d \in \mathcal{D}} R^d_i. Units: dimensionless ordinal product.
- Advance operator: \mathbb{I}[\operatorname{rank}(\mathcal{S}) \le 8].
- Medal operator: \mathbb{I}[\operatorname{rank}(\mathcal{S}_{final}) \le 3].
- Conditional probabilities: P(adv | \exists d: R^d_i = 1) = 0.9948 [PAGE 4]; P(medal | win any in final) = 0.8501 [PAGE 4].
- Kendall's tau formula: \tau = (C - D) / (C + D) maybe, but cite values.
- PCA: covariance matrix \Sigma, eigenvectors v_1, v_2; speed loads on PC2, lead/bouldering on PC1 [PAGE 6-7].
- IIA violation predicate: \exists c \notin \{winner\} : \operatorname{rank}_{-c}(winner) \neq 1.

Breakdown: rank undefined if DNF; ties; small sample.

Need verbatim quotes and page markers.

RETROCAUSAL_GENEALOGY: Arrow (1951) IIA, Luce (1959) choice axiom, Kendall (1938) tau, Efron & Tibshirani (1986) bootstrap, Hammond (2007), Boudreau et al. (2018) cross country rank-sum, Westera (2006) decathlon, CrossFit (2021) points table, Paris 2024 split [PAGE 9]. Multi-week traps: over a season, rank-product compounds; a single bad speed day eliminates medal chances because product has no averaging; "discipline ghetto" trap where specialists are excluded from combined events; format-change lag between Tokyo 2020 and Paris 2024.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under pressure, climbers revert to their strongest discipline (speed climbers sprint, lead climbers conserve). Counter-trap: federation anticipates specialist boycott or poor spectacle, splits speed from lead+bouldering for Paris 2024 [PAGE 9]. Clock: Olympic quadrennial, format locked for Tokyo, changed for Paris; analysis in 2021 lands between Games. Model: athletes update beliefs about format each cycle; organizers respond to athlete sentiment (Lynn Hill quote [PAGE 2]). This is a Stackelberg-like dynamic: organizers commit to format, athletes specialize in response, organizers revise.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: speed wall is 15 m standardized, fixed route, time trial [not explicitly in text? Actually source mentions speed race time in seconds on PAGE 6]. The source says "racing time (in seconds) for speed" [PAGE 6]. Biomechanical: speed is explosive, alactic; lead/bouldering are aerobic/anaerobic endurance with route-reading. Veto: speed cannot be traded off against lead endurance because they tap distinct energy systems; combining them forces a physiologically incoherent "triathlon."
- Weather: if lead/bouldering are outdoors, wind, heat, humidity alter hold friction and glycogen depletion; speed is indoors on a standard wall (the source doesn't say indoor but speed walls are typically indoor standardized; I can phrase carefully as conditional). Actually source doesn't mention weather. I should be careful not to invent. But I can say: weather affects outdoor lead/bouldering holds (friction, temperature) but not speed time on a standardized route, creating a veto correlation: bad weather penalizes lead/bouldering specialists disproportionately, which then propagates through the rank product to their overall score.
- Physical/biomechanical veto proof: Since speed loads on PC2 alone while lead/bouldering load on PC1 [PAGE 6-7], the skills are separable; vetoing speed from the combined product removes the only orthogonal skill dimension, collapsing the effective dimensionality from 3 to 2.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.
1. Speed degeneracy: Var(R^S) → 0 (all speed ranks tied or times identical). Then Score_i ≈ constant × R^B_i × R^L_i. Prediction: the speed-specialist disadvantage vanishes; P(advance | speed win only) converges to P(advance | balanced) rather than remaining near zero. Verifiable by re-running the [PAGE 3] simulation with deterministic speed ranks.
2. DNF singularity: Assign DNF rank = N+1 = 21 in one discipline. Score multiplies by 21/r instead of r/(r-1) shift. Prediction: any climber with a DNF in any discipline has P(advance) = 0 under N=20 because minimum product with a 21 is 21×1×1 = 21, but wait, 21×1×1=21 could still be top 8? Let's check: average score for 8th is 435. A score of 21 would easily advance. Hmm, my logic is wrong. If someone DNFs and gets rank 21, but wins the other two (1×1), product = 21. That's extremely low and would advance easily. So a DNF is not necessarily disqualifying if they win the others. But realistically if you DNF you don't win others. Let me think of a better veto.

Actually, better veto scenario: tie at a rank boundary. If two climbers tie for 8th in qualification, the product score has no tie-break specified in Eq. (1). Veto: the advancement set is undefined under ties. Prediction: simulation must introduce tie-breaking (e.g., random or sum of ranks) or the top-8 set is not a well-defined function of the score vector.

Another: Perfect correlation regime. If R^B_i = R^L_i for all i (lead and bouldering identical ordering), then Score_i = R^S_i × (R^B_i)^2. Prediction: bouldering/lead double-weighting means a specialist in either dominates; speed becomes a tiebreaker only. This is verifiable by setting R^L = R^B in simulation.

Third: Removal of median climber. In the IIA analysis [PAGE 7-8], removing a non-medalist changes medal order. Veto: if the 5th-place climber is removed, the medal ranking is not a function of the original medalists’ performances alone. Prediction: re-running [PAGE 8] panel 5 with any climber ranked 4th–6th removed will change at least one medal position with probability > 0.5 (empirically observed for Krasovskaia).

Let me refine RLVR to be clear and verifiable.

Scenario 1 (Speed degeneracy): Set R^S_i = 1 for all i (speed abolished as a discriminator). Then Score_i = R^B_i × R^L_i. Prediction: climbers who win speed but place poorly in B/L no longer get a boost; P(advance | win speed only) drops from the simulation baseline toward the probability for a balanced climber. Verifiable by re-simulating [PAGE 3] with constant speed ranks.

Scenario 2 (Lead-bouldering perfect correlation): Impose R^L_i = R^B_i. Then Score_i = R^S_i × (R^B_i)^2. Prediction: the rank distribution collapses onto a 2D manifold; a climber ranked 1st in both B and L but 20th in S scores 400, tying the example of 1st/20th/20th given on [PAGE 3]; this climber beats a 10th/10th/10th climber (1000). Thus a B/L specialist with one bad discipline outranks a balanced climber. Verifiable analytically and by simulation.

Scenario 2 (DNF / undefined rank): If a climber does not finish (DNF) in lead, R^L is undefined. Under the common convention R^L = N+1 = 21, Score_i = R^S_i × R^B_i × 21. Prediction: even winning the other two disciplines yields Score = 21, which remains competitive because the product scale is not bounded by N^3 = 8000 in a way that excludes low products; the real veto is that Eq. (1) has no domain for DNF, so the advancement operator is partial, not total. Verifiable: the codebase on GitHub (referenced [PAGE 9]) either crashes or requires an ad hoc imputation rule not stated in the paper.

I need exactly 3 verifiable RLVR veto scenarios + predictions. I'll present them cleanly.

Word count total: THINK_TRACE ~500, SOURCE ~400, RETRO ~300, RTM ~300, CROSS ~300, RLVR ~300. Total ~2100. Well over 1000. THINK_TRACE over 400. Good.

No betting lines. No fake ratios. Formal LaTeX. Units. Citations. Verbatim quotes.

Let me write the final output carefully, ensuring all XML tags are present and properly closed.

I need to include verbatim quotes with [PAGE N]. Example: [PAGE 2] "Score_i = RS_i × RB_i × RL_i". Since LaTeX in XML might have special chars, I'll use LaTeX inline but keep it readable. XML doesn't mind backslashes. But < and > in LaTeX (like \le) are fine as text? Actually < in XML text would be parsed as a tag. I must avoid raw < and > in the text unless escaped. I'll use \le and \ge which are backslash commands, no raw <. Also avoid & unescaped. I'll write carefully.

For probabilities, use [0,1] dimensionless.

Let's write.

One more check: The user said "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." So I won't invent any ratios. I'll only use equations from the paper or standard definitions (Kendall tau, PCA).

Let me draft each section fully now.

THINK_TRACE content (approx 550 words):

Start: The rank-product operator... derive...
Mention gray zones: uniform ranks vs correlated disciplines; averaging ordinal products; IIA deletion re-ranking; small sample CIs; DNF singularity.
Mention specific quotes and pages.

I'll write it out.

For SOURCE_OPERATORS_AND_EQUATIONS, I'll present LaTeX block style but inline within XML. Use \displaystyle maybe.

Need to cite page numbers exactly like [PAGE 2].

Okay, let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The rank-product operator maps an ordered triple of discipline ranks onto a scalar via ordinary multiplication. On [PAGE 2], the authors state: "A competitor’s combined score is computed as the product of their ranks in the three events; specifically, Score_i = RS_i × RB_i × RL_i." Because every rank is a positive integer bounded below by 1, the product contains no internal algebraic zero singularity; however, the operator is not translation-invariant and exhibits discontinuous sensitivity to re-ranking when any single rank changes.

A multi-hop derivation begins at qualification: N = 20 climbers each receive a rank in {1,…,20} for speed (S), bouldering (B), and lead (L). The simulation on [PAGE 3] assumes "randomly assigning the ranks of each event to every participant, with the assumption that the ranks are uniformly distributed." This uniformity assumption is the primary gray zone. It imposes mutual independence between disciplines and treats all N! rank permutations as equally likely. That assumption directly conflicts with the empirical results on [PAGE 5]–[PAGE 6], where bouldering and lead climbing show Kendall’s τ ≈ 0.432 and 0.463 respectively with statistically significant p-values (0.00735 and 0.00378), while speed climbing shows τ = 0.147 with p = 0.386 and bootstrapped 95% CI (-0.191, 0.469). If discipline ranks are correlated, the joint support used in the simulation is misspecified: the right tail of the product distribution is overstated for balanced climbers and understated for specialists.

A second gray zone is the reporting of "average score" by placement on [PAGE 4]. The authors report expected qualification scores (e.g., 435 for 8th rank) and final medal scores (10, 21, and 34 for gold, silver, bronze). Because the rank-product is an ordinal construct rather than an interval-scale performance measure, averaging products across simulations yields a scalar with no direct physical interpretation in seconds, holds, or tops. The arithmetic mean is dominated by rare high-product outcomes; the distribution is right-skewed, so the central tendency reported may be a poor decision threshold for a climber "aiming" for a score.

The third gray zone appears in the leave-one-climber-out analysis on [PAGE 7]–[PAGE 8]. After an athlete is dropped, all ranks below them in each discipline are decremented by one, and products are recomputed. Because multiplication amplifies rank changes asymmetrically—a drop from 4th to 3rd reduces a factor by 25%, whereas a drop from 20th to 19th reduces a factor by only 5%—the same deletion can reorder medalists depending on which disciplines the removed athlete occupied. The paper documents this with [PAGE 8]: "Meul, whose actual final rank was fourth, moved up to the second spot and would have claimed the silver medal" when Krasovskaia (5th) was excluded. This is a direct Independence of Irrelevant Alternatives (IIA) violation.

Breakdown regimes: (1) DNF or injury leaves a rank undefined; if imputed as N+1 = 21, the product jumps by a factor of 21/r relative to a finite rank r, creating a non-removable singularity in the comparison domain. (2) Tied ranks break the strict total order required for Eq. (1) to induce a unique ranking; the paper supplies no tie-breaking rule. (3) Small sample sizes (20 Olympic qualifiers, 6 Youth Olympians) produce extremely wide bootstrapped intervals, so the null of zero speed correlation cannot be separated from moderate positive or negative association.

Finally, the conditional advance probability of 99.48% given a discipline win on [PAGE 4] rests entirely on the uniform-rank assumption. Under realistic positive correlation between lead and bouldering, a lead/bouldering specialist who wins one of those disciplines is even more likely to advance, whereas a speed specialist winning only speed gains less protection because speed rank correlates weakly with the others.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the discipline index set be \mathcal{D} = \{S, B, L\}. For climber i in a round with N competitors, define the rank operator
R^{d}_{i} \in \{1,\dots,N\}, \quad d \in \mathcal{D},
where ranks are dimensionless ordinal integers. On [PAGE 2], Eq. (1) defines the score operator
\operatorname{Score}_{i} = \prod_{d \in \mathcal{D}} R^{d}_{i} = R^{S}_{i}\, R^{B}_{i}\, R^{L}_{i}.
The score has units of "ordinal-rank cubed" but is not an interval-scale quantity; it cannot be added to times in seconds or hold counts. The advancement operator for qualification is
\mathbb{I}_{\text{adv}}(i) = \mathbb{I}\!\left[\operatorname{rank}\!\left(\operatorname{Score}_{i}\right) \le 8\right],
and the medal operator for the final of N_f = 8 is
\mathbb{I}_{\text{medal}}(i) = \mathbb{I}\!\left[\operatorname{rank}\!\left(\operatorname{Score}_{i}\right) \le 3\right].

Conditional probabilities estimated by 10,000 uniform-rank simulations on [PAGE 3]–[PAGE 4]:
P\!\left(\text{advance} \mid \exists d: R^{d}_{i} = 1\right) = 0.9948,
P\!\left(\text{medal} \mid \text{win any discipline in final}\right) = 0.8501.
Expected scores by placement on [PAGE 4]: qualification 8th-place mean \approx 435; final gold/silver/bronze means 10, 21, 34.

Kendall’s rank correlation between overall rank O and discipline rank R^d on [PAGE 5]–[PAGE 6]:
\tau = \frac{C - D}{C + D},
with empirical results: speed \tau = 0.147, test statistic 109, p = 0.386, 95% CI (-0.191, 0.469); bouldering \tau = 0.432, statistic 136, p = 0.00735, CI (0.107, 0.691); lead \tau = 0.463, statistic 139, p = 0.00378, CI (0.112, 0.753). All \tau values are dimensionless and bounded in [-1,1].

PCA on [PAGE 6]–[PAGE 7]: the covariance matrix \Sigma of performance variables (speed time in seconds; bouldering tops count; lead holds reached) is decomposed as \Sigma = V\Lambda V^{T}. Lead and bouldering load on PC1; speed time loads separately on PC2, indicating an orthogonal skill dimension.

IIA violation predicate on [PAGE 7]–[PAGE 8]: for removed climber c,
\exists c \notin \{w\} : \operatorname{rank}_{-c}(w) \neq 1,
where w is the original winner. The paper illustrates this with the 2018 Youth Olympics Women’s Final (N = 6): excluding 5th-place Krasovskaia moved 4th-place Meul to 2nd (silver).

Breakdown: Eq. (1) is a partial function if any R^d_i is undefined (DNF/injury); ties are unaddressed; small N invalidates asymptotic confidence-interval coverage.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage of this paper reaches back to Arrow (1951), cited on [PAGE 7] as the origin of the Independence of Irrelevant Alternatives criterion, and Luce (1959), whose choice axiom reformulates IIA in probabilistic terms. On [PAGE 2], the authors connect modern sport climbing to Kendall (1938) through the use of Kendall’s Tau for ordinal association, and to Efron & Tibshirani (1986) through bootstrapped confidence intervals. The broader social-choice critique draws on Hammond (2007) and Boudreau et al. (2018), both analyzing rank-sum violations in cross-country running, while Westera (2006) and CrossFit (2021) provide counter-examples of score-based and points-based multi-event scoring that avoid pure rank-products.

A multi-week trap emerges when this format is embedded in an Olympic cycle rather than treated as a one-off. The rank-product scoring system compounds discipline-specific variance across the entire competition: a single poor speed performance cannot be averaged away because multiplication has no recovery term. Over weeks of qualification and selection events, speed specialists face an asymmetric attrition risk: their narrow expertise is given equal multiplicative weight against bouldering and lead, yet the empirical correlation structure on [PAGE 5]–[PAGE 6] shows speed is nearly orthogonal to the other two. This creates a "discipline ghetto" trap in which athletes who specialize in speed are systematically excluded from medal contention despite elite performance in their own domain.

The institutional response confirms the paper’s causal diagnosis. On [PAGE 9], the authors note that Paris 2024 will award two sets of medals per gender: one for combined lead and bouldering, and one for speed-only. This is a retroactive validation of the 2021 analysis: the governing body accepted that speed climbing should be separated because it loads on a distinct principal component (PC2) while bouldering and lead share PC1. The trap is temporal: the Tokyo 2020 format locked athletes into a combined event for a full quadrennial, after which the format was abandoned. Any analysis that ignores the Olympic clock—the four-year lag between format adoption and format correction—will misread athlete behavior as static preference rather than constrained response to a known-to-be-transitional scoring rule.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the interaction as a Stackelberg sequence across the Olympic clock. In the commitment phase, the International Federation sets the combined format; in the response phase, athletes allocate training effort across speed, bouldering, and lead; in the revision phase, the Federation observes athlete sentiment and spectator outcomes and changes the format for the next Games.

Crisis habit regression: under high-stakes pressure, climbers regress to their dominant discipline-specific habit. Speed climbers revert to explosive, route-memorized sprinting; lead climbers revert to energy-conserving route-reading. On [PAGE 2], Lynn Hill is quoted comparing the combined format to "asking a middle distance runner to compete in the sprint," and Courtney Woods states that "Speed climbers will have the biggest disadvantage because their realm isn’t based on difficult movements." These are crisis-habit statements: when forced into a non-native discipline, performance collapses because the motor schema does not transfer.

Counter-trap: the Federation anticipates two failure modes. First, a specialist boycott or low-spectacle speed segment undermines the combined event’s legitimacy. Second, the IIA violation demonstrated on [PAGE 8]—where removing a non-medalist changes the silver medalist—creates governance risk because medal orderings depend on irrelevant alternatives. The counter-trap is the Paris 2024 split: separate speed medals remove the speed specialist from the lead/bouldering payoff matrix, eliminating the cross-discipline externality that caused the IIA violation.

Clock variable: the analysis was published for the 2021 CMSAC competition, one year after Tokyo 2020 and three years before Paris 2024. The paper therefore lands in the revision-phase window. Its empirical finding that bouldering and lead correlate strongly with each other and with overall rank (τ ≈ 0.43–0.46, [PAGE 5]), while speed does not (τ = 0.147, p = 0.386, [PAGE 6]), provides the formal justification for the clock-driven format change. Athletes who over-invested in speed for Tokyo faced a sunk-cost trap; athletes who anticipated the split could re-allocate to lead/bouldering with lower regression risk.

Recursive depth: the athletes’ belief about the next format update conditions their current specialization; the Federation’s next update depends on observing the current specialization distribution. This fixed point is unstable whenever a discipline is orthogonal (speed) because its marginal product in the combined score does not covary with the others, making the combined ranking a poor selector of all-around excellence.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: speed climbing is a standardized time trial on a fixed route; the source treats speed performance as "racing time (in seconds)" on [PAGE 6]. Biomechanically, speed is an explosive, alactic effort on a 15 m wall with identical holds, whereas bouldering and lead are perceptual-motor endurance tasks involving route-reading, hold-friction management, and glycogen-limited attempts. This is a physical veto: speed cannot be substituted for lead endurance because the energy systems and movement vocabularies are disjoint. Forcing them into one product score demands a physiologically incoherent comparison.

Biomechanical layer: the PCA on [PAGE 6]–[PAGE 7] shows lead holds reached and bouldering tops load together on PC1 with a small angle between their vectors, while speed time loads alone on PC2. Because PC1 and PC2 are orthogonal, the skill spaces are separable. The veto proof: any combined scoring rule that multiplies across all three assumes commensurability across orthogonal subspaces; since PC2 carries variance unrelated to PC1, speed rank introduces independent noise into the product that penalizes non-speed specialists without measuring all-around climbing ability.

Weather/environmental layer (conditional): lead and bouldering holds are friction- and temperature-dependent; wind, heat, and humidity alter hold texture and climber thermoregulation. Speed, conducted on a standardized route with fixed conditions, is environmentally insulated. Under adverse weather, lead/bouldering specialists suffer rank degradation that is exogenous to their sport-specific skill; because the rank-product multiplies this degradation by speed and the other discipline ranks, a weather shock in one discipline propagates multiplicatively into the overall score. This is an environmental veto: the score does not isolate sport performance from ambient conditions.

Cross-layer adjudication: the speed layer is separable (PC2), physiologically distinct (alactic vs. endurance), and environmentally robust relative to lead/bouldering. Therefore the rank-product system fails a cross-layer consistency check: it multiplies ranks across non-commensurate domains, and the resulting overall rank is not a valid measure of climbing excellence. Vetoing speed from the combined product collapses the effective dimensionality from three to two, which is exactly the Paris 2024 remedy cited on [PAGE 9].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 (Speed degeneracy). Set all speed ranks constant, R^S_i = 1 for every i, simulating the removal of speed as a discriminator. The score reduces to Score_i = R^B_i × R^L_i. Verifiable prediction: re-running the [PAGE 3] simulation with deterministic speed ranks eliminates the speed-specialist boost; P(advance | win speed only) falls from the baseline toward the probability for a balanced climber, and the 99.48% conditional advance figure on [PAGE 4] no longer applies to speed-only winners.

Veto Scenario 2 (Perfect lead–bouldering correlation). Impose R^L_i = R^B_i for all climbers, so Score_i = R^S_i × (R^B_i)^2. Verifiable prediction: the distribution collapses onto a two-dimensional manifold; a climber ranked 1st in both bouldering and lead but 20th in speed scores 1 × 20 × 20 = 400, tying the example given on [PAGE 3] and beating a balanced 10th/10th/10th climber (score 1000). Thus a bouldering/lead specialist with one weak discipline outranks an all-around climber, which is analytically verifiable and falsifiable by simulation.

Veto Scenario 3 (Undefined rank / DNF singularity). If a climber does not finish (DNF) in any discipline, R^d_i is undefined, so Eq. (1) on [PAGE 2] has no domain value; the advancement operator is partial, not total. Under the ad hoc imputation R^d_i = N + 1 = 21, even winning the other two disciplines yields Score_i = 21 × 1 × 1 = 21, which remains competitive because the product scale is not bounded above by N^3 in a way that excludes low scores; the real veto is that the paper supplies no rule for DNF, tie, or re-ranking after disqualification. Verifiable prediction: the GitHub repository referenced on [PAGE 9] either requires an unstated imputation convention or returns undefined advancement sets whenever any rank is missing.
</RLVR_COUNTERFACTUAL_VETOES>