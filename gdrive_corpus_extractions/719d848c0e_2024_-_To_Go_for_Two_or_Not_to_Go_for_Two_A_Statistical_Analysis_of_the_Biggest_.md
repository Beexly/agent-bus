---
source: "2024 - To Go for Two or Not to Go for Two A Statistical Analysis of the Biggest Prisoner s Dilemma in the National Football League - Venkatesh et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2024"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3788
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about NFL two-point conversion vs extra point decisions. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important notes about the source:
- The source text says "machine conversion from the stored PDF via pdftotext + scripted reflow, 2026-10-04; equations, tables and figures are NOT preserved - consult the PDF for those"
- No page markers are explicitly provided in the source text (no [PAGE N] markers visible in the text). I need to cite exact [PAGE N] markers where possible, but since none are provided, I may need to reference sections or note that page markers are not present in the converted text. However, the user says "PAGES: 6". I should probably treat sections as pages or note the absence. Wait, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since pages aren't explicitly marked in the source text, I should be careful. I can cite section numbers or note that the provided machine conversion lacks explicit page breaks. But to satisfy the constraint as much as possible, I can refer to sections and note [PAGE N] unavailability, or infer page ranges. Actually, looking at the text, there are no [PAGE N] markers. I should probably cite by section and mention that the OCR/conversion did not preserve page numbers, but I will reference the section headers. However, the invariant says "cite exact [PAGE N] markers and verbatim quotes." If none are provided, I cannot invent them. I will quote verbatim from the text and note section headers.

Let me structure the response:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Analyze the prisoner's dilemma framing
- Expected payoff calculations
- Monte Carlo simulation details
- Team-specific analysis (19 of 32 teams, Chiefs +177 points)
- Situational factors (late game tie example: 93% vs 49% win probability)
- Limitations: psychological factors, sample size, team variance
- Gray zones: equilibrium distance 22 yards, dominant strategy shift, sample size issues for two-point conversions

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define binary outcomes, success rates
- Expected payoff: E[XP] = p_XP * 1, E[2PC] = p_2PC * 2
- Outcome matrices pre/post rule change
- Delta_n formula from text: ∆n = 2µi+1 × (xi + xi+1) − (xiµi + 2xi+1µi+1)
- Monte Carlo: normal distribution sampling, linear model slope per yard, 10,000 iterations
- Units: points, yards, probability (dimensionless [0,1])
- Breakdown regimes: small sample size for 2PC, situational context (late game), kicker skill heterogeneity

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- 2015 NFL rule change moving XP from 20 to 33 yards
- Prisoner's dilemma framing in game theory
- Historical tendency to kick XP
- Multi-week traps: teams sticking to habit despite math, psychological loss aversion, end-game tactics only

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Coaches regress to conservative habits in crisis (late game)
- Counter-trap: going for two when conventional wisdom says kick
- Clock management: last snap vs multiple possessions remaining

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: 33-yard kick vs 2-yard conversion, kicker leg strength, holder/snapper operation
- Biomechanical: offensive line vs defensive line in 2PC, snap-hold-kick timing
- Weather: wind, precipitation affecting 33-yard kick more than 2-yard run/pass
- Veto conditions where kicking remains correct despite expected value

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- Scenario 1: Late game tie, last snap -> kick XP (93% win vs 49% win) - veto the "always go for two" dominant strategy
- Scenario 2: Team with elite kicker (>99% from 33 yards) and below-average offense -> kick XP
- Scenario 3: Large lead late in game -> kicking XP minimizes risk, 2PC reward minimal

Word count check: Need >=1000 words total across sections. THINK_TRACE alone needs >=400 words.

Let me draft carefully, ensuring no betting lines are mentioned. No spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

I need to be careful with [PAGE N] citations. Since the source text doesn't have explicit page numbers, I will reference sections and note that the machine-converted text does not preserve explicit [PAGE N] markers, but I will quote verbatim from sections. Actually, I can use [PAGE 1] through [PAGE 6] loosely corresponding to the flow if I must, but that might be inventing. Better to cite by section and say [SECTION: Introduction] etc., or note [PAGE N not preserved in machine conversion]. However, the instruction says "When source pages are provided, cite exact [PAGE N] markers". They weren't provided explicitly, so I'll cite sections and verbatim quotes without fake page numbers, or I can refer to the pages as the logical sections. Let me just use section-based references and be transparent.

Wait, I should check if there are implicit page breaks. The text has headers but no page markers. I will cite as [PAGE: unmarked, Section 1 Introduction] etc. Or I can say [PAGE N marker absent in provided conversion; text quoted from Section N]. That's honest.

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

I need to ensure total words >= 1000. THINK_TRACE >= 400. Let's aim for ~150-250 words per other section, totaling well over 1000.

Let's draft content.

THINK_TRACE:
- Start with the core problem: binary choice after TD, XP vs 2PC.
- Pre-2015: XP from 20 yards, >99% success, 11,356 attempts. Expected payoff ~0.99 points.
- Post-2015: XP from 33 yards, success rate dropped 5 percentage points (so ~94%?). 11,447 attempts. Two-point attempts doubled from 529 to 1,126. 2PC rate ~49% both periods. Expected payoff 2PC ~0.98 points. Post-change XP expected payoff lower than 2PC, making 2PC dominant.
- Outcome matrices: multiply XP rate by 1, 2PC rate by 2.
- Monte Carlo: linear model of XP % vs distance (18-35 yards), slope = change per yard. 10,000 iterations. Equilibrium at 22 yards. Over 22 yards, 2PC better; under 22 yards, XP better.
- Team-specific: ∆n formula. 19/32 teams would have scored more points going for two every time 2015-2023. Chiefs +177 points.
- Gray zone / audit: Situational veto. Late game tie, last snap: kick XP at 93% conversion -> ~93% win probability vs 2PC at 49% -> ~49% win probability. This is not captured by expected points alone. Psychological loss aversion, small sample size for 2PC (variance), kicker heterogeneity, offensive prowess.
- Multi-hop derivation: The rule change altered the payoff matrix but did not alter coaching utility functions fully; teams still kick >90% of the time. This is a Nash equilibrium deviation issue: if one team goes for two and others don't, there may be strategic complementarities or substitution effects not modeled.
- Breakdown: The linear model extrapolates XP% to 18-35 yards from only two data points (20 and 33 yards). This is a strong assumption. Breakdown regime: non-linear decay of kick accuracy at longer distances, weather, altitude, kicker-specific distributions.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define variables.
- p_XP_pre, p_XP_post, p_2PC_pre, p_2PC_post.
- Expected payoff: E_XP = p_XP * 1 [points], E_2PC = p_2PC * 2 [points].
- t-test for significance.
- Monte Carlo: p_XP(d) ~ Normal(μ(d), σ(d)), μ(d) = α + β*d where d in yards.
- ∆n formula from text.
- Units: yards (yd), points (pt), probability (dimensionless).
- Page/section citations: note no explicit [PAGE N] in conversion; cite sections.
- Breakdown regimes: small n for 2PC; binary outcome ignores game state; linear distance model invalid outside observed range or under environmental stress.

RETROCAUSAL_GENEALOGY:
- Lineage: von Neumann-Morgenstern expected utility, prisoner's dilemma, 2015 NFL rule change (Patra 2015), nflfastR data 2006-2023.
- Historical: XP was nearly automatic, so 2PC reserved for desperation.
- Multi-week traps: Teams face repeated decisions; habit persistence; coaches fired for unconventional failures (career risk); loss aversion makes a failed 2PC feel worse than a missed XP though expected value may favor 2PC post-2015.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under clock pressure (late 4th quarter), coaches regress to conservative XP even when 2PC has higher expected value.
- Counter-trap: Opponent expects kick; going for two creates surprise and changes defensive preparation across a season.
- Clock: If multiple possessions remain, expected points dominate. If final snap, win probability dominates. The paper's own example: up by 1 vs tie game.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: 33-yard kick requires snap, hold, kick; biomechanical timing ~1.3 seconds (typical, but I shouldn't invent specifics unless sure. I'll speak generally). 2PC from 2-yard line involves line of scrimmage collision.
- Weather: Wind and precipitation degrade long-distance kick accuracy more than short-yardage conversion. Veto condition: high wind -> kick? Actually wind makes kick harder, so might favor 2PC. But cold affects muscle. I need to be careful not to invent fake ratios.
- Veto proof: The paper's situational example provides the veto: win-probability context can override expected-point dominance.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Final possession, tied game, last snap. Veto "always go for two." Prediction: XP maximizes win probability (~0.93 vs ~0.49).
- Scenario 2: Team with elite kicker (p_XP_post > 0.98) and bottom-quartile offense (p_2PC < 0.40). Veto league-level dominant strategy. Prediction: XP expected payoff exceeds 2PC for this team.
- Scenario 3: Leading by 8+ points with <2:00 remaining. Veto going for two; the marginal point does not change possession calculus meaningfully. Prediction: XP minimizes variance and preserves win probability.

Need to ensure no betting terms. "Odds" is banned. I will avoid "odds" entirely. Use "probability" or "likelihood."

Word count: Let's estimate. THINK_TRACE ~450 words. Others ~150 each = 600. Total ~1050. Good.

Let's write it out fully now, ensuring formal LaTeX and no banned words.

Check for "odds": I must not use the word "odds." I'll use "probability" or "likelihood."
Check for "spread", "total", "moneyline": avoid.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The paper frames the post-touchdown decision as a prisoner's dilemma in which the league-wide payoff matrix shifted after the 2015 rule change moved the extra point from a 20-yard attempt to a 33-yard attempt. The multi-hop derivation proceeds as follows. First, the authors isolate binary outcomes for extra point (XP) and two-point conversion (2PC) attempts from nflfastR play-by-play data spanning 2006–2023, split into pre-change (2006–2014) and post-change (2015–2023) epochs. Pre-change, 11,356 XPs were attempted with a conversion rate above 99 percent; post-change, 11,447 XPs were attempted and the success rate fell by five percentage points. Two-point attempts more than doubled, from 529 to 1,126, while the 2PC success rate remained stable at roughly 49 percent across both periods.

Second, the expected payoff operator is applied to each strategy: E[XP] = p_XP × 1 point and E[2PC] = p_2PC × 2 points. Pre-change, E[XP] ≈ 0.99 points dominated E[2PC] ≈ 0.98 points. Post-change, the five-point-percentage-point XP decline pushes E[XP] below E[2PC], rendering the 2PC the dominant strategy in expectation. The authors construct outcome matrices for both epochs and confirm this reversal.

Third, a Monte Carlo simulation estimates the equilibrium XP distance. A linear model relating XP percentage to distance is generated from the two observed distances (20 and 33 yards), with the slope representing the per-yard decay in conversion probability. Ten thousand normal-distribution samples are drawn for each distance from 18 to 35 yards, averaged to account for parameter uncertainty, and compared against the constant 2PC expected payout. The simulation identifies 22 yards as the equilibrium distance: below 22 yards, kicking dominates; above 22 yards, going for two dominates in expectation.

Fourth, a team-level counterfactual operator ∆n is defined in the text as ∆n = 2µ_{i+1} × (x_i + x_{i+1}) − (x_i µ_i + 2 x_{i+1} µ_{i+1}), where x_i and x_{i+1} are team XP and 2PC attempt counts, and µ_i and µ_{i+1} are team-specific success rates. Applying this to 2015–2023 data, the authors find that 19 of 32 teams would have scored more points by attempting a 2PC after every touchdown, with the Kansas City Chiefs gaining the most at 177 additional expected points.

Gray-zone audit: The linear distance model is extrapolated from only two data points (20 and 33 yards) across a 17-yard range, creating a breakdown regime if XP accuracy decays non-linearly at longer distances or if kicker-specific variance dominates distance effects. The 2PC sample size is an order of magnitude smaller than the XP sample, inflating uncertainty around the 49 percent figure. Crucially, expected-point dominance does not imply situational dominance. The paper's own late-game example shows that when a touchdown ties the game on the final snap, kicking an XP at ~93 percent success yields a ~93 percent win probability, whereas going for two at ~49 percent success yields only ~49 percent win probability. This win-probability veto overrides the expected-point calculation. Additionally, >90 percent of post-touchdown decisions remain XP kicks, indicating persistent habit regression, coach career-risk aversion, and psychological loss aversion that the static payoff matrix does not capture.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let d denote extra point distance in yards (yd), p_XP(d) the probability of XP success at distance d (dimensionless, [0,1]), and p_2PC the probability of two-point conversion success from the 2-yard line (dimensionless, [0,1]). Point values are in points (pt).

Expected payoff operators:
E[XP](d) = p_XP(d) · 1 pt
E[2PC] = p_2PC · 2 pt

Pre-change epoch (2006–2014): d = 20 yd, n_XP = 11,356, p_XP_pre > 0.99.
Post-change epoch (2015–2023): d = 33 yd, n_XP = 11,447, p_XP_post = p_XP_pre − 0.05 (five percentage point decline), n_2PC_pre = 529, n_2PC_post = 1,126, p_2PC ≈ 0.49 in both epochs.

Outcome matrix entries multiply the scalar probability by the point value:
M_XP = p_XP · 1
M_2PC = p_2PC · 2

Monte Carlo equilibrium model:
p_XP(d) ~ Normal(μ(d), σ(d)), μ(d) = α + β·d, where β is the change in XP percentage per one-yard increase in distance. Ten thousand iterations are averaged over d ∈ [18, 35] yd. Equilibrium condition: E[XP](d*) = E[2PC], solved numerically at d* = 22 yd. For d > 22 yd, E[2PC] > E[XP]; for d < 22 yd, E[XP] > E[2PC].

Team-level counterfactual (verbatim from source):
∆n = 2µ_{i+1} × (x_i + x_{i+1}) − (x_i µ_i + 2x_{i+1} µ_{i+1})
where x_i = total XP attempts, x_{i+1} = total 2PC attempts, µ_i = XP success rate, µ_{i+1} = 2PC success rate for team i over 2015–2023.

Statistical inference: significance of rate differences assessed via t-test; no closed-form p-values are reported in the converted text.

Citation note: The provided machine-converted text does not preserve explicit [PAGE N] markers; verbatim quotes and figures are referenced by section header (Introduction, Materials and Methods, Results, Discussion) rather than page number, per the conversion disclaimer that equations, tables, and figures are not preserved.

Breakdown/singularity regimes: (1) The linear μ(d) model is identified from only two distances (20 and 33 yd); it breaks down if kick accuracy follows a non-linear decay curve, if weather or altitude introduces interaction terms, or if d falls outside the [18, 35] yd simulation range. (2) The 2PC proportion has a small sample size relative to XPs, so the ~49 percent estimate carries wide sampling variance; the dominant-strategy conclusion is sensitive to this uncertainty. (3) Expected-point maximization is singular in end-game contexts where win probability, not expected points, is the relevant objective function.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage traces to von Neumann–Morgenstern expected utility and the formal prisoner's dilemma, in which individually rational choices produce sub-optimal collective outcomes. In the NFL context, the pre-2015 equilibrium was stable because the extra point at 20 yards was nearly automatic (above 99 percent), making the two-point conversion an end-of-game desperation tactic rather than a recurring strategic option. The 2015 rule change, moving the snap back 13 yards to the 33-yard equivalent, altered the payoff structure without immediately altering coaching behavior.

Historically, teams treated the two-point conversion as a high-variance, low-frequency instrument. The data show attempts more than doubling after the rule change (529 to 1,126), yet the league still kicks on more than 90 percent of post-touchdown possessions. This persistence represents a multi-week trap: coaches face repeated decisions across a 17-game season, and deviation from the conservative norm carries asymmetric career risk. A failed two-point conversion is visibly consequential and attributable to the coach, whereas a missed extra point after a long-distance kick is partially excused by difficulty. Loss aversion therefore binds the league to the sub-optimal (in expectation) strategy even after the payoff matrix has inverted.

The paper's retrospective frame—asking how many points teams "left on the table" by not going for two every time—imposes a counterfactual genealogy on a path-dependent institution. If the equilibrium distance is truly 22 yards, then the current 33-yard placement is a historical artifact of the 2015 competition-committee decision rather than an optimized design. The multi-week trap is reinforced by Figure 6 and Figure 7, which show that two-point attempts cluster at specific score differentials, suggesting that the league has not re-solved the dynamic game; it has only expanded the set of "appropriate" situations marginally while retaining the kicking default.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind centers on what the opposing coach expects you to do and how that expectation changes the value of deviation. In crisis habit regression, a head coach under clock pressure reverts to the socially safe extra point kick even when the expected-point calculus favors the two-point conversion. The paper explicitly models this in its late-game tie example: if the after-touchdown play is the final snap, kicking an extra point at roughly 93 percent success produces a roughly 93 percent win probability, while going for two at roughly 49 percent success produces roughly a 49 percent win probability. The recursive step is that the coach knows the opponent expects the kick, and the opponent knows the coach knows, collapsing the game to a conservative Nash outcome despite a positive expected-value deviation available.

The counter-trap operates when a team systematically goes for two in situations where the opponent assumes a kick. Because two-point conversion preparation (goal-line defense, short-yardage packages) differs from extra-point protection (rush-block, block-the-kick), a team that credibly threatens the two-point conversion forces the opponent to allocate practice reps and roster snaps to a rarely used defensive package. Over multiple weeks, this creates a strategic externality: the mere threat of going for two raises the opponent's preparation cost even on weeks when the team ultimately kicks.

The clock variable is the moderating recursion. When multiple possessions remain, expected-point maximization is the appropriate objective because variance can be averaged out over future scoring events. When the clock is near zero and the possession is terminal, win probability dominates expected points. The paper's discussion acknowledges this boundary but does not formalize the clock-state transition point at which the objective function should switch from E[points] to P(win). That switch point is the decisive recursive node: before it, the dominant strategy is two-point conversion; after it, the dominant strategy reverts to the extra point.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The extra point requires a snap, hold, and kick sequence from 33 yards, exposing the operation to long-snap precision, holder stability, and kicker leg mechanics under rush pressure. The two-point conversion from the 2-yard line is a scrimmage play governed by offensive-line versus defensive-line force collisions at short range. These are distinct physical failure modes; a team with an elite offensive line but an average kicker may have a 2PC success rate above its post-2015 XP rate, invalidating the league-average dominant strategy.

Biomechanical layer: Kicker accuracy decays with distance due to angular error propagation and wind drift over a longer flight path. The paper's linear model assumes a constant per-yard slope β, but biomechanically, kick accuracy may exhibit a threshold effect beyond which small increases in distance produce disproportionate drops in success. If that threshold lies near 33 yards, the post-2015 XP collapse is a biomechanical singularity rather than a smooth linear decay, and extrapolating to 22 yards as equilibrium is unreliable.

Weather layer: Wind, precipitation, and temperature degrade long-distance kicking more than short-yardage conversion. In high-wind or cold conditions, p_XP(33) may fall below the league average while p_2PC remains comparatively stable because the play occurs at the line of scrimmage. This creates a weather-contingent veto: even if the league-wide expected payoff favors going for two, a specific game played in severe weather shifts the posterior toward kicking.

Veto adjudication: The paper's own situational example is the decisive veto proof. When the objective function switches from expected points to terminal win probability on the final snap, the extra point kick dominates despite lower long-run expected value. Therefore, no unconditional dominant strategy exists; the extra point is veto-proof in terminal, high-leverage contexts, and the two-point conversion is veto-proof only in non-terminal, expectation-maximizing contexts where team-specific parameters (kicker skill, offensive line strength) support the deviation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Terminal possession, tied game, final snap after touchdown.
Veto: Reject the "always go for two" dominant-strategy prescription.
RLVR verification: Observe win probability after XP kick versus after 2PC attempt in end-of-game tie scenarios from 2015–2023 play-by-play data.
Prediction: Teams kicking the extra point win at approximately the XP conversion rate (~0.93 conditional on success producing a one-point lead), whereas teams going for two win at approximately the 2PC conversion rate (~0.49 conditional on success producing a two-point lead). The kick maximizes terminal win probability.

Scenario 2: Team with elite kicking unit (post-2015 p_XP > 0.98) and below-average offense (p_2PC < 0.40).
Veto: Reject the league-level conclusion that 19 of 32 teams should have gone for two every time.
RLVR verification: Stratify team-level ∆n by kicking-specialist quality and offensive DVOA-equivalent; test whether high-p_XP / low-p_2PC quadrants yield negative ∆n.
Prediction: For this subset, E[XP] = p_XP > 2 · p_2PC = E[2PC], so the observed kicking behavior is ex post optimal, and the team would lose points by switching to an exclusive two-point strategy.

Scenario 3: Leading by eight or more points with under two minutes remaining.
Veto: Reject going for two when the marginal point does not alter possession or win-probability calculus.
RLVR verification: Compare win probability trajectories for teams leading by 8+ that kick versus those that go for two in late-game subsets.
Prediction: Because an extra point already extends the lead to a two-possession gap (or preserves it), the two-point conversion's added point yields negligible win-probability marginal utility while introducing 51 percent failure risk. Kicking is the dominant strategy in this clock-and-score region.
</RLVR_COUNTERFACTUAL_VETOES>