---
source: "2022 - Go For It A Data Driven Analysis of NFL 4th Downs - Lerman et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2022"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3725
---

<NATIVE_REASONING>
The user wants me to analyze a specific source paper about NFL 4th down decisions. They've provided the source text (page 1 of a Wharton Sports Analytics Journal paper by Lerman et al., 2022). I need to produce output with the exact XML sections specified:

1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- >= 1,000-word depth across these exact XML sections.
- When source pages are provided, cite exact [PAGE 1] markers and verbatim quotes.

Let me carefully analyze the source text first.

Source details:
- Title: "Go For It? A Data Driven Analysis of NFL 4th Downs"
- Authors: Solomon Lerman, Bennett Stein, Nakul Solai, Ricky Martin
- Journal: Wharton Sports Analytics Journal, Spring 2022
- Page: 1 (only page provided)
- Data: NFL play-by-play 2009-2019
- Filter: non-fourth down plays removed, penalties removed, field goals removed, punts removed
- Result: all plays where team went for it on fourth down
- Sorted by yards to go, mean fourth down conversion % for each distance
- Used formula online for expected points for first and ten starting at each yardline
- Found expected points if kick field goal from any yardline: overall percentage from each two yard bin over last 10 years multiplied by 3 (value of field goal)
- Expected points on fourth down: first and ten expected points for specific yardline * conversion percentage for each fourth down distance
- Example: 4th and 3 at 35 yard line, multiply first and ten expected points at 32 yard line by chance of converting fourth and 3
- Final model: field goal expected points + expected points of each fourth down distance 1-10 yards
- Model displays both for each yardline 40 yards and in
- Baseline prediction, based on average statistics of all NFL teams, not intended explicitly or situationally
- Blue lines: expected points of each fourth down from within 40 yards
- Red line: expected points of field goal attempt from 40 yard line and in

Findings:
- 4th and 3 or shorter within opponent's 40: go for it > FG expected points
- 4th and 5 or farther within opponent's 40: FG > go for it
- 4th and 4: go for it within 10 yard line or beyond 35 yard line; otherwise overlaps with FG line
- Teams need to be more aggressive on fourth down in plus territory

Now I need to write this in the required format. This is a technical/analytical response, not betting advice. I must avoid betting lines.

Let me draft each section.

THINK_TRACE (>=400 words):
Need deep multi-hop derivation and gray-zone audit. I should discuss:
- The epistemological chain: raw play-by-play → filtered fourth-down attempts → conditional conversion rates by distance → expected points (EP) for first-and-ten by yardline → EP for field goals by distance bin → comparison matrix.
- Gray zones: the "overlaps with field goal line" for 4th-and-4 between 10 and 35 yard lines means indifference region; sample size issues in two-yard bins; baseline model not situational (ignores score, time, team quality, weather, personnel); the "formula online" for first-and-ten EP is unspecified; 2009-2019 era may not reflect modern rule changes or offensive trends; 40-yard cutoff arbitrary; red line vs blue lines are population averages, not team-specific.
- Multi-hop: conversion probability p(yards_to_go) × EP(first_and_ten, yardline_after_success) vs EP_field_goal(yardline). The example given: 4th-and-3 at own 35? Wait, "at the 35 yard line" - likely opponent's 35? They say "within 40 yards of the goalline" meaning opponent's 40 and in. So 4th and 3 at the 35 (opponent's 35), convert → first and ten at the 32 (3 yards closer). Multiply EP at 32 by conversion %. But what about failure? The model seems to only count success branch? Let me re-read: "we multiplied the first and ten expected points for each specific yardline by the conversion percentage of each fourth down distance. For example, if it was a fourth and 3 at the 35 yard line, we multiplied the first and ten expected points at the 32 yard line by the chance of converting a fourth and 3." This appears to ignore the expected value of failure (turnover on downs, opponent gets ball). That's a major gray zone / breakdown regime. The model implicitly sets EP(failure) = 0 or doesn't include it, which is wrong because failed fourth down gives opponent possession with some EP. Actually, expected points should be: P(convert) * EP(success state) + (1-P(convert)) * EP(failure state). If they only do P(convert) * EP(success), they're underestimating the cost of failure or assuming failure EP is zero relative to something. Wait, expected points models usually define EP as points scored by the offense on that possession minus points scored by opponent? Or net points? If failure means opponent takes over, there's a negative EP to the offense. The paper's simplification is a significant assumption. I need to audit this.

Also: field goal EP = make probability × 3. But what about miss? If missed, opponent gets ball (unless blocked etc.), again failure state not fully modeled? They say "multiplied each value by three (the value of a field goal)" - they might be ignoring miss outcomes or treating miss as 0 points and no turnover value? Actually if you miss a FG, opponent gets ball with some field position. That has negative EP for the kicking team. Again, simplified.

I'll write about 500+ words here.

SOURCE_OPERATORS_AND_EQUATIONS:
Need formal LaTeX, units, page citations, exact breakdown.
Define:
- Dataset D = {plays}_{2009-2019} ⊂ NFL play-by-play [PAGE 1]
- Filter: 4th down only, no penalties, no FG, no punts → D_go
- Conversion rate: \hat{p}(d) = (1/N_d) Σ_{i∈D_go, y2g=i} 1{success_i}, d ∈ {1,...,10} yards
- EP first-and-ten: V_10(y) from external formula, y ∈ yardline [PAGE 1]
- EP FG: V_FG(y) = 3 × \hat{q}(y), where \hat{q}(y) is make rate in 2-yard bin containing y [PAGE 1]
- EP go-for-it (as specified): V_go(d, y) = \hat{p}(d) × V_10(y - d) [PAGE 1] — note: this omits failure continuation value.
- Decision rule: go if V_go(d, y) > V_FG(y), else kick.
- Breakdown/singularity regimes: d > 10 not modeled; y > 40 not modeled (model limited to 40 yards and in); p(d) estimated from sparse bins; V_10 formula unspecified ("formula online"); no discounting for time/score; no failure-state EP term.

Units: yards (yd), expected points (pts), probability dimensionless.

Citations: [PAGE 1] for all claims since only page 1 provided.

RETROCAUSAL_GENEALOGY:
Historical lineage: Romer (2006) "Do firms maximize? Evidence from NFL fourth down" - found teams under-go. Then Advanced NFL Stats / Brian Burke EP models. Then this Wharton 2022 student paper applying similar framework. Multi-week traps: coaches reacting to prior week's failed aggressive call (loss aversion, recency bias), leading to conservative regression; "momentum" narrative; job security over conservatism mentioned in source [PAGE 1]. The trap: a single failed 4th-down conversion in Week N causes coach to punt in Week N+1 despite identical expected-point calculus, creating path dependence in decision-making that is retroactively justified by "feel."

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure (late game, close score), coaches regress to conservative punts/FGs because fear of criticism is salient [PAGE 1]. Counter-trap: offensive coordinator knows head coach will regress, so calls safe plays on earlier downs to manage field position for the inevitable punt. Clock: the 40-yard line threshold and 4th-and-4 indifference zone create a "clock" of situational specificity—coaches who wait until inside the 10 to go for it on 4th-and-4 are already ceding EP in the 10-35 zone.

CROSS_LAYER_VETO_ADJUDICATION:
Physical/biomechanical/weather vetoes. Even if EP says go, physical constraints can veto:
- Weather: high winds reduce FG success probability q(y) and conversion p(d) (wobbly slips, poor footing). If wind speed > threshold, V_FG drops and V_go drops; the indifference point shifts.
- Biomechanical: 4th-and-1 vs 4th-and-3 depends on offensive line push vs defensive front; injury to starting QB or RB changes p(d).
- Physical: altitude (Denver) affects ball flight; extreme cold affects grip.
I need to present these as veto proofs: conditions under which the model's recommendation is overridden.

RLVR_COUNTERFACTUAL_VETOES:
3 verifiable RLVR (Reinforcement Learning Verifiable Rewards?) veto scenarios + predictions. I should frame them as counterfactual scenarios where the baseline model would recommend "go" but a veto condition flips it.
1. Weather veto: 4th-and-3 at opponent's 20, baseline says go (within 40, ≤3). Counterfactual: sustained crosswind > 20 mph. Prediction: kick FG despite EP baseline because p(d) degrades nonlinearly with wind and FG hold/snap reliability drops.
2. Personnel veto: 4th-and-2 at opponent's 15, baseline says go. Counterfactual: starting RB and backup RB inactive; third-string QB in shotgun. Prediction: punt/FG because p(2) collapses below league average used in baseline.
3. Game-state veto (score/time): 4th-and-4 at opponent's 8 with 0:02 left, down by 2. Baseline says go (within 10). Counterfactual: time expired after play; a failed conversion ends game. Prediction: kick FG because EP model ignores terminal clock and score asymmetry; the "expected points" frame is singular at end-of-half.

Wait, RLVR might mean "Reinforcement Learning from Verifiable Rewards" but I'll treat it as "verifiable counterfactual vetoes" with clear prediction statements.

Word count: Need >= 1,000 words across sections. Let me ensure each section is substantial.

Important: No betting lines. I will not mention odds, spreads, etc.

Let me draft carefully, ensuring exact XML tags and page citations.

I need to include verbatim quotes from [PAGE 1]. Some good ones:
- "At what point is it beneﬁcial for an NFL team to go for it on fourth down rather than settling for a ﬁeld goal?"
- "we multiplied the first and ten expected points at the 32 yard line by the chance of converting a fourth and 3."
- "For an average NFL offense, we can conclude that at any yardline within the opponents 40, and you have a 4th and 3 or shorter, you are predicted to have more expected points if you go for it rather than kicking a ﬁeld goal"
- "This model is a baseline prediction on whether or not go for it on fourth down. It is based on the average statistics of all NFL teams. It is not intended to be used explicitly or situationally."

Now let's write. I'll aim for roughly:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~200 words
- RECURSIVE_THEORY_OF_MIND: ~200 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1550 words. Good.

Let me ensure formal LaTeX is correct. Use \mathbb{E}, \hat{p}, etc.

Breakdown regimes:
- d ∉ {1,...,10}: model undefined (no EP curve for 4th-and-11+).
- y > 40 (opponent's 40+): model not displayed / not applicable per [PAGE 1].
- p(d) → 0: V_go → 0, always kick.
- q(y) → 0: V_FG → 0, always go (if within range).
- The omitted failure term: true Bellman equation should be V_go = p·V_success + (1-p)·V_failure. The paper uses V_go ≈ p·V_success, which is exact only if V_failure = 0 relative to the reference frame or if V_success is defined as net EP differential including turnover cost—which [PAGE 1] does not state.

Let's write it out.

One thing: The source says "from within 40 yards of the goalline" and "40 yard line and in". This means opponent's 40-yard line or closer. I'll refer to it as "opponent's 40-yard line and closer" to be precise.

Let me draft the final response.

Need to be careful: The user said "PAGES: 1" and "When source pages are provided, cite exact [PAGE 1] markers". So I will cite [PAGE 1] throughout.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain in Lerman et al. [PAGE 1] proceeds through four nested hops: (1) raw play-by-play ingestion (2009–2019), (2) structural filtering to isolate fourth-down attempts while excising penalties, field goals, and punts, (3) conditional estimation of conversion probability by yards-to-go distance, and (4) expected-points (EP) comparison against field-goal (FG) EP. The first hop imports an eleven-season universe, but the filter removes all non-go-for-it plays, which means the sample for any given distance d is conditional on coaches already having chosen to go; this induces a selection bias because the observed p̂(d) reflects only situations where a coach judged the risk acceptable, not the full counterfactual conversion rate that would obtain under a mandate to always attempt.

The second hop converts distance into a mean conversion percentage p̂(d) for d ∈ {1,...,10} yards. The third hop retrieves an external “formula online” for first-and-ten EP at each yardline, V₁₀(y), but the paper does not specify the functional form, smoothing kernel, or whether V₁₀ is net of opponent possession value after a turnover. The fourth hop constructs the go-for-it EP as V_go(d,y) = p̂(d) × V₁₀(y−d), illustrated by “fourth and 3 at the 35 yard line” mapping to “first and ten expected points at the 32 yard line” multiplied by the conversion chance [PAGE 1]. This algebraic reduction is where the model enters a gray-zone singularity: it omits the failure continuation term (1−p̂(d)) × V_failure(y,d), where V_failure is the EP of the opponent taking over on downs. The stated model is exact only under the implicit assumption V_failure = 0 relative to the chosen reference frame, or that V₁₀(y−d) is already defined as a net EP differential including turnover cost—neither of which is stated in [PAGE 1]. Likewise, FG EP is computed as 3 × q̂(y) over two-yard bins, ignoring the expected field-position cost of a miss.

A second gray zone is the indifference band. For fourth-and-4, the paper reports the blue go-for-it line “overlaps with the field goal line” between the opponent’s 10- and 35-yard lines [PAGE 1]. In that region the decision is mathematically unstable to small perturbations in p̂(4), bin width, or V₁₀ specification, yet the paper offers no confidence interval, bootstrap standard error, or sensitivity analysis. A third gray zone is temporal and personnel stationarity: aggregating 2009–2019 assumes league-wide conversion rates and FG accuracy are invariant across offensive schemata, rule changes, and quarterback eras, which is violated by the modern passing explosion. Finally, the model is explicitly “not intended to be used explicitly or situationally” [PAGE 1], meaning its recommendations are population-average baselines that veto out score, clock, timeout, weather, and injury covariates. These gray zones do not falsify the directional finding—that short-yardage attempts in plus territory dominate FGs on average—but they bound the domain in which the point estimates can be treated as actionable.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the play-by-play universe be D = {πᵢ}ᵢ₌₁ᴺ over NFL seasons 2009–2019 [PAGE 1]. Define the filter operator 𝔉 such that D₄ = 𝔉(D) retains only fourth-down plays with no penalty, no field goal, and no punt [PAGE 1]. For each yards-to-go distance d ∈ {1,…,10}, the empirical conversion rate is

p̂(d) = (1 / N_d) Σ_{πᵢ∈D₄ : y₂g(πᵢ)=d} 1{success(πᵢ)},

with units of probability (dimensionless) and N_d the count of fourth-down attempts at distance d. Let V₁₀(y) denote expected points for a first-and-ten at yardline y, sourced from an unspecified online formula [PAGE 1], measured in expected points (pts). The paper’s go-for-it operator is

V_go(d,y) = p̂(d) · V₁₀(y − d),

illustrated for d = 3 at y = 35 (opponent’s 35-yard line) as V₁₀(32) scaled by the fourth-and-3 conversion chance [PAGE 1]. The field-goal operator uses two-yard bins B(y):

q̂(y) = mean FG make percentage over the 10-year sample in bin B(y),  
V_FG(y) = 3 · q̂(y),

where 3 is the point value of a field goal and V_FG is in pts [PAGE 1]. The decision rule is:

go if V_go(d,y) > V_FG(y); kick otherwise.

Reported results from the model curves [PAGE 1]: (i) for d ≤ 3 and y within the opponent’s 40, V_go > V_FG; (ii) for d ≥ 5 and y within the opponent’s 40, V_FG > V_go; (iii) for d = 4, V_go > V_FG within the opponent’s 10 or beyond the opponent’s 35, with overlap/indifference between the 10 and 35.

Breakdown / singularity regimes: the model is undefined for d > 10 (no curve estimated), for y beyond the opponent’s 40 (not graphed), and when p̂(d) or q̂(y) are estimated from sparse two-yard bins with high variance. The omitted Bellman failure term means the true recursion should be V_go = p̓(d)·V_success + (1−p̓(d))·V_failure; the paper’s expression is a degenerate special case valid only if V_failure is normalized to zero or absorbed into V₁₀, which is not stated [PAGE 1]. Because [PAGE 1] is the only page provided, all citations herein reference [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage traces to Romer (2006), which used dynamic programming to show NFL teams systematically under-go on fourth down relative to expected-points maximization, and to the public expected-points models popularized by Brian Burke / Advanced NFL Stats, which established V₁₀(y) as the standard currency for in-game decisions. Lerman et al. [PAGE 1] descend directly from this tradition but simplify it into a baseline graphical model for a student journal. The “retrocausal” element is the coach’s tendency to let a single prior outcome rewrite future calculus: if a team goes for it on fourth down in Week N and fails, the resulting narrative of “poor process” often triggers conservative regression in Week N+1 even when the underlying EP comparison is unchanged. This is a multi-week trap because the decision at time t becomes path-dependent on a binary realization at t−1 rather than on the stationary distribution p̂(d). The source itself identifies the cultural mechanism: coaches rely on “feel” and “momentum,” and “personal image and job security” drive over-conservatism to avoid criticism [PAGE 1]. Thus a fourth-and-3 at the opponent’s 20 that succeeds today may embolden next week’s call, while an identical call that fails next week may induce a punt the following week—an unstable, retrocausal loop unsupported by the paper’s own baseline math.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
From a recursive theory-of-mind perspective, the offensive coordinator must model the head coach’s crisis habit regression: under high-stakes conditions (close score, late clock), the coach regresses to the conservative mean because the salience of criticism after a failed fourth-down attempt outweighs the abstract expectation of points [PAGE 1]. The coordinator’s counter-trap is therefore to structure earlier-down play-calling to preserve manageable fourth-down distances (e.g., staying within fourth-and-3) precisely because the coach’s stated threshold for aggression is narrow; if the offense stalls into fourth-and-5 or longer, the baseline model itself says to kick within the 40 [PAGE 1], so the coordinator avoids creating long-yardage fourth-down scenarios that would force the coach into the model’s “kick” region. The clock layer is the forty-yard cutoff and the fourth-and-4 indifference band between the opponent’s 10 and 35 [PAGE 1]: within that band the model offers no strict preference, so clock management, timeouts, and score become the de facto tie-breakers even though the baseline excludes them. A coach who waits until inside the opponent’s 10 to embrace fourth-and-4 aggression has already ceded expected points across the 10–35 “overlap” zone where the model is silent, creating a recursive disadvantage: the team plays conservatively exactly where the model is ambiguous, then aggressively only where the model is already strongest (short yardage near the goal line).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The baseline model can be vetoed by physical, biomechanical, and weather constraints not represented in [PAGE 1]. (1) Weather: sustained wind alters both p̂(d) and q̂(y); a crosswind degrades spiral stability on short-yardage QB sneaks or shotgun snaps and reduces FG hold/snap reliability, shifting V_go downward nonlinearly while V_FG falls roughly with make probability. If wind exceeds a venue-specific threshold, the recommended “go” for fourth-and-3 within the 40 is vetoed in favor of a FG despite the baseline curve. (2) Biomechanical personnel: p̂(d) is league-average, but a third-string quarterback, injured starting running back, or depleted offensive line changes the conversion distribution. For fourth-and-2 at the opponent’s 15, baseline says go, but if the power-running personnel are unavailable, the empirical p(2) for that roster may drop below the league mean used to draw the blue line, vetoing the attempt. (3) Physical environment: altitude changes ball flight on long FGs, and extreme cold reduces grip and ball security, both of which compress the gap between V_go and V_FG. These are veto proofs because they operate outside the stationarity assumptions of the 2009–2019 aggregate [PAGE 1] and can flip the sign of V_go − V_FG even when the yardline and distance fall squarely inside the model’s stated “go” region.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Weather veto): Fourth-and-3 at the opponent’s 20-yard line. Baseline prescription [PAGE 1]: go for it, since d ≤ 3 within the 40 implies V_go > V_FG. Counterfactual: sustained crosswind ≥ 20 mph with gusts, verified by on-site anemometer. Prediction: the FG is attempted instead, because wind-driven degradation of snap-hold operation and conversion mechanics collapses p̂(3) below the break-even where 3·q̂(20) exceeds p̂(3)·V₁₀(17). Verifiable check: post-game chart shows the FG made and no fourth-down attempt despite standard model output favoring the attempt.

Scenario 2 (Personnel veto): Fourth-and-2 at the opponent’s 12-yard line. Baseline prescription [PAGE 1]: go for it (within 10, d = 4 is also favorable; d = 2 clearly favors going). Counterfactual: starting and backup running backs inactive; emergency quarterback under center with a practice-squad offensive lineman at right guard. Prediction: the team punts or kicks a FG because roster-specific p̂(2) falls below the league-average curve that generated the blue line. Verifiable check: inactive report lists the two primary backs; play-by-play records a FG attempt or punt on fourth down.

Scenario 3 (End-of-half singularity): Fourth-and-4 at the opponent’s 8-yard line with 0:02 remaining, trailing by 2 points. Baseline prescription [PAGE 1]: go for it, since d = 4 within the opponent’s 10 implies V_go > V_FG. Counterfactual: no timeouts; a failed conversion ends the half/game because the clock runs out after the play. Prediction: the team kicks the FG despite the EP model, because V_go omits terminal clock asymmetry and score-state discontinuity; expected points is singular at game end where a field goal wins while a failed fourth down loses outright. Verifiable check: game clock expires immediately after a successful FG or after a turnover on downs, confirming the baseline’s non-situational limitation [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>