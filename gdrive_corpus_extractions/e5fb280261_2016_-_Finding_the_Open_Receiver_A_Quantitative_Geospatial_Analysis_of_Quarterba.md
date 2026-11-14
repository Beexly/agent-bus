---
source: "2016 - Finding the Open Receiver A Quantitative Geospatial Analysis of Quarterback Decision-Making - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2016"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4077
---

<NATIVE_REASONING>
The user wants me to analyze a sports research paper about quarterback decision-making using geospatial analysis. They want me to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

I need to:
- Analyze the provided source text (a 9-page paper, though the markdown shows pages 1-10 with appendix).
- Not mention any betting lines.
- Use formal LaTeX equations, not toy ratios.
- Cite page markers from the source text. Looking at the source, pages are marked with "2016 Research Papers Competition Presented by:" followed by page numbers 1-10. So I can cite [PAGE 1], [PAGE 2], etc.
- Ensure total word count across sections is >= 1,000 words, with THINK_TRACE >= 400 words.

Let me structure this carefully.

First, let me identify key content from the paper:
- Page 1: Motivation, RFID tracking since 2014, Zebra Technologies, Figure 1 passer rating vs concussions/losses.
- Page 2: Data Collection, 22 players, 3 fps, nearest 0.25 yard, 2014 Colts, 231 base offensive pass plays. Base offense defined: 1st & 2nd down, <15 point differential, >5 min remaining in half, between 20 yard lines. Removed end of half/end zone plays. Focus on 1st and 2nd down because marginal benefit of yardage more direct. Fig 2 team utility.
- Page 3: Receiver Openness, Voronoi Tessellation extended from NBA (Maheswaran et al.). Predictive tessellation because player velocities matter. Figure 3A traditional (immobile, identical acceleration), Figure 3B predictive (non-zero velocity, blue player owns ground behind orange). Section 3.1 Zone Size: project position forward two frames (2/3 second), zone area yards^2. Figure 4 distribution at QB decision point.
- Page 4: Section 3.2 Zone Integrity: projected distance to nearest defender. Section 3.3 Openness Classification thresholds: Wide-open >200 yd^2 or integrity >8 yd; Open 100-200 yd^2 or integrity 4-8 yd; Defended 50-100 yd^2 or integrity 2-4 yd; Well-defended <50 yd^2 or integrity <2 yd. Table 1: Luck's completion % by openness. Wide-open 69 plays, 49 completions, 71%; Open 70, 49, 70%; Defended 67, 39, 58%; Well-defended 21, 11, 52%; N/A 4, 0, 0%; Total 231, 148, 64%.
- Page 5: Section 4.1 Expected Gain: max y-value of receiver's predicted zone. Figure 5 Hilton smaller zone red, Wayne large zone blue, Wayne expected +26 yards, actual 21-yard gain. Figure 6 expected play gain vs actual gain for 148 completions.
- Page 6: Section 4.2 Player Elusiveness: difference actual yardage gained minus expected yardage. Table 2: additional yards gained from expectation by position/player. RB more elusive than TE/WR. Herron 34/7=4.86 mean; Richardson 55/12=4.58; Bradshaw 31/10=3.10; Fleener 36/15=2.40; Moncrief 9/4=2.25; Wayne 60/27=2.22; Doyle 8/5=1.60; Allen 8/14=0.57; Hilton 20/44=0.45; Nicks -1/10=-0.10; All RBs 120/29=4.14; All TEs 52/34=1.53; All WRs 88/85=1.04.
- Page 7: Section 5 QB Decision Analysis: expected payoff = P(CMP% for openness factor) * Expected Yards = Expected Payoff Yds. Target payoff compared to play population options to determine percentile. Decision types: percentile 80 ideal, 50 preferred, 20 neutral, below 20 undesirable. Table 3: Ideal 92 plays 40.5% (table has formatting errors "758%" likely meant something else), Preferred 80 35.2%, Neutral 45 19.8%, Undesirable 10 4.4%, N/A 4, Total 231. Notes Luck made ideal or preferred on >75% of plays.
- Page 8: Summary and Future Work limitations: constant velocity (no acceleration), no receiver distance from LOS in completion probability equation [Goldsberry 4], accuracy 0.25 yards at 3 Hz.
- Page 9: References.
- Page 10: Appendix I five frames from Colts first play.

Now I need to write the XML sections.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit, >=400 words. I should discuss the chain from raw RFID/video coordinates -> projected Voronoi -> openness classification -> expected gain -> elusiveness -> decision payoff percentile. Audit gray zones: 0.25 yard quantization at 3Hz, constant velocity assumption (no acceleration), 2-frame projection (2/3 sec), classification thresholds use "or" logic (zone area OR integrity) which creates non-convex decision boundaries, completion probability equation uses historical P(CMP% for openness factor) but doesn't condition on distance from LOS (acknowledged limitation), small sample (231 plays, one QB, one team), table 3 percentages seem garbled (40.5%, 35.2%, 19.8%, 4.4% sum to 99.9%, but "Percen tage of Plays" column has weird values like 758%, 242% - likely OCR/formatting errors). Also N/A=4 plays removed from decision analysis but included in total 231. Expected gain defined as max y-value of predicted zone assumes ideal tackle at boundary, ignoring defensive reaction variance. Elusiveness conflates QB throw quality and receiver post-catch movement.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define spatial coordinates \mathbf{x}_i(t) \in \mathbb{R}^2, units yards. Sampling f_s = 3 Hz, \Delta t = 1/3 s, quantization \epsilon_x = 0.25 yd. Base offense set \mathcal{B} = \{ \text{play} : \text{down} \in \{1,2\}, |\Delta \text{score}| < 15, t_{\text{rem}} > 300\text{ s}, \text{yardline} \in [20,80] \}. Predictive projection: \hat{\mathbf{x}}_i(t + 2\Delta t) = \mathbf{x}_i(t) + 2\Delta t \, \mathbf{v}_i(t), \Delta t = 1/3 \text{ s} \Rightarrow \tau_p = 2/3 \text{ s}. Voronoi cell: \mathcal{V}_i = \{ \mathbf{p} \in \mathbb{R}^2 : \|\mathbf{p} - \hat{\mathbf{x}}_i\|_2 \leq \|\mathbf{p} - \hat{\mathbf{x}}_j\|_2 \, \forall j \neq i \}. Zone area A_i = \text{Area}(\mathcal{V}_i) \text{ [yd}^2\text{]}. Zone integrity I_i = \min_{d \in \mathcal{D}} \|\hat{\mathbf{x}}_i - \hat{\mathbf{x}}_d\|_2 \text{ [yd]}. Openness classifier \mathcal{O}: \text{wide-open} \iff A_i > 200 \lor I_i > 8; \text{open} \iff 100 \leq A_i \leq 200 \lor 4 \leq I_i \leq 8; \text{defended} \iff 50 \leq A_i \leq 100 \lor 2 \leq I_i \leq 4; \text{well-defended} \iff A_i < 50 \lor I_i < 2. Units yards^2 and yards. Expected gain Y^{\text{exp}}_i = \max_{\mathbf{p} \in \mathcal{V}_i} p_y \text{ [yd]}. Elusiveness \mathcal{E}_i = Y^{\text{act}}_i - Y^{\text{exp}}_i \text{ [yd]}. Expected payoff \Pi_i = \hat{P}(\text{CMP} \mid \mathcal{O}_i) \cdot Y^{\text{exp}}_i \text{[yd]}. Percentile rank \rho_i = \text{rank}_{\text{pop}}(\Pi_i) / N_{\text{pop}}. Decision classes: \rho \geq 0.80 ideal; 0.50 \leq \rho < 0.80 preferred; 0.20 \leq \rho < 0.50 neutral; \rho < 0.20 undesirable. Singularity/breakdown: \Delta t \to 0 invalidates constant velocity if acceleration nonzero; A_i or I_i at exact threshold boundaries create measure-zero classification ambiguity; N_i catches = 0 makes mean elusiveness undefined (division by zero) though table avoids this by listing only players with catches > 0 except maybe N/A.

RETROCAUSAL_GENEALOGy: Historical lineage from Maheswaran et al. 2014 MIT Sloan "Three Dimensions of Rebounding" (NBA) to Voronoi tessellation in sports. Zebra RFID since 2014. Goldsberry Pass Atlas 2013. Multi-week traps: small sample single team/season means week-to-week variance not captured; defensive adaptations across weeks not modeled; opponent-specific coverage schemes not included; quarterback tendency stability over multiple weeks assumed but not verified.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it. Crisis habit regression: under pressure, QB regresses to habitual targets (e.g., Luck's primary target Wayne). Counter-trap: defense anticipates the QB's preferred read and jumps the route. Clock: game clock >5 min remaining constraint in base offense removes end-of-half clock-management distortions. I should discuss how the model assumes a static decision tree but in reality the QB and defense engage in recursive theory of mind: QB thinks defense thinks QB will throw to X, so QB throws to Y. The paper doesn't model this recursion; it treats openness as exogenous. The clock filter (>5 min) removes two-minute drill where utility is non-linear (clock management > yardage).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: 0.25 yd quantization at 3Hz means position error \pm 0.125 yd, velocity error amplified by projection \tau_p = 2/3 s. Biomechanical: constant velocity assumption ignores acceleration/deceleration, route breaks, cuts; human max acceleration ~3-5 m/s^2 (~3.3-5.5 yd/s^2) means over 2/3 s velocity change can be ~2-3.7 ft/s, materially shifting Voronoi boundaries. Weather: not mentioned in paper; wind/precipitation affects ball flight and player traction, not modeled. Veto conditions: if \| \mathbf{a}_i \| \tau_p^2 / 2 > \delta_{\text{cell}}, predictive tessellation invalid; if precipitation coefficient of friction \mu changes, cut radius changes, constant velocity projection fails.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll create 3 counterfactual veto scenarios:
1. Acceleration veto: If a receiver executes a hard cut (lateral acceleration > 2 m/s^2) within the 2/3 s projection window, predicted zone area misestimates true openness. Prediction: classification error rate for "open" vs "defended" increases by >15% on routes with >90° breaks.
2. Completion probability conditioning veto: If expected payoff does not condition on distance from line of scrimmage, deep passes with low completion probability but high yardage are overvalued relative to short passes. Prediction: \hat{P}(\text{CMP} \mid \text{wide-open}) deep (>20 yd downfield) overestimates payoff by >1.5 yards vs short (<10 yd) wide-open targets.
3. Sample size / single-QB veto: Extrapolating Luck's decision percentiles to other QBs without recalibrating openness thresholds. Prediction: applying Colts 2014 thresholds to a different QB with lower accuracy will misclassify 20-30% of decisions because completion probability mapping P(CMP | openness) is QB-specific.

I need to ensure no betting lines. No spreads, totals, moneylines, odds. I won't mention any.

Word count: Need >= 1000 words total. THINK_TRACE >= 400. I'll write substantial content in each.

Let me draft carefully with page citations. The source text has page markers: "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" after "2016 Research Papers Competition Presented by:". I'll cite [PAGE 1] through [PAGE 10].

Let me make sure I use verbatim quotes where appropriate. I'll quote short phrases.

Now I'll write the response.

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

I need to be careful that THINK_TRACE is >= 400 words. Let me write around 500-600 words there. Others can be 150-250 each to total >1000.

Let's write.

THINK_TRACE content:
- Multi-hop derivation: raw video coordinates (22 players, 3 fps, 0.25 yd) -> project forward 2 frames -> predictive Voronoi -> zone area & integrity -> openness classification -> completion probability by class -> expected gain (max y-value) -> expected payoff = P(CMP)*Expected Yards -> percentile decision classification -> Luck >75% ideal/preferred.
- Gray-zone audit: quantization error; constant velocity assumption; 2/3 s projection horizon; "or" logic in thresholds creates non-convex, overlapping classification regions (e.g., a receiver with 150 yd^2 zone but 1 yd integrity is classified Open by area but Well-defended by integrity; the OR operator makes the classifier non-deterministic unless priority is specified). Table 3 percentage formatting anomalies ("758%", "242%") suggest OCR/layout corruption. N/A=4 plays excluded from decision analysis but counted in total 231. Expected gain max y-value assumes ideal tackle at zone boundary; ignores defensive pursuit angle variance. Elusiveness table conflates receiver post-catch ability with throw placement; a low throw forces a dive and reduces actual yards, biasing elusiveness downward for the receiver even though the QB caused it. Single-team, single-QB, single-season sample limits external validity.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math with citations.

RETROCAUSAL_GENEALOGY: Maheswaran et al. 2014 NBA rebounding Voronoi [PAGE 3], Zebra RFID since 2014 [PAGE 1], Goldsberry Pass Atlas [PAGE 8 reference], Hochstedler & Mrkvicka concussion study [PAGE 1]. Multi-week traps: no opponent adjustment, no weather, no cross-week adaptation, Luck-specific.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (under duress regress to primary target), counter-trap (defense disguises coverage to induce bad read), clock (base offense excludes end-of-half and end-zone where clock management dominates). Paper models QB as optimizing expected payoff against static defensive geometry, ignoring second-order beliefs.

CROSS_LAYER_VETO_ADJUDICATION: Physical (0.25 yd @ 3Hz), Biomechanical (acceleration, cuts), Weather (not in paper, but would veto constant velocity and predictive horizon). Provide veto inequalities.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with formal veto conditions and predictions.

Let's write now. Ensure LaTeX is proper. No betting terms.

Word count check: I'll aim for ~1300 total.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds through five chained geospatial operators. First, raw observational data consist of x-y coordinates for all twenty-two on-field players captured from game video at f_s = 3 Hz with spatial quantization to the nearest 0.25 yard [PAGE 2]. Second, because quarterback decision-making depends on “where a player will be” rather than “where he currently stands,” each player’s position is projected forward by two frames, i.e. τ_p = 2/3 s, under a constant-velocity assumption [PAGE 3]. Third, a predictive Voronoi tessellation partitions the field into cells \mathcal{V}_i such that every point in cell i is closer (in projected Euclidean distance) to receiver i than to any other player [PAGE 3, Figures 3A-3B]. Fourth, each eligible receiver is assigned an openness class from zone area A_i = Area(\mathcal{V}_i) in yards² and zone integrity I_i = min_{d\in\mathcal{D}} \|\hat{\mathbf{x}}_i - \hat{\mathbf{x}}_d\|_2 in yards, using the thresholds in Table 1 [PAGE 4]: wide-open (A_i > 200 ∨ I_i > 8), open (100 ≤ A_i ≤ 200 ∨ 4 ≤ I_i ≤ 8), defended (50 ≤ A_i ≤ 100 ∨ 2 ≤ I_i ≤ 4), well-defended (A_i < 50 ∨ I_i < 2). Fifth, expected gain Y^{exp}_i is defined as the maximum downfield y-value within the predicted zone, representing an ideal throw, ideal catch, and ideal tackle at the zone boundary [PAGE 5, Section 4.1]. Expected payoff is then \Pi_i = \hat{P}(\mathrm{CMP} \mid \mathcal{O}_i) \cdot Y^{exp}_i, and the target receiver’s decision is ranked by percentile against all eligible options on that play [PAGE 6]. Decision classes are ideal (percentile ≥ 80), preferred (≥ 50), neutral (≥ 20), and undesirable (< 20) [PAGE 6]. Table 3 reports Andrew Luck made ideal or preferred decisions on more than 75% of analyzed base-offense pass plays [PAGE 6].

Gray-zone audit reveals several structural instabilities. The classifier uses an inclusive OR between zone area and integrity, so a receiver with A_i = 150 yards² but I_i = 1 yard satisfies the “open” area clause and the “well-defended” integrity clause simultaneously; the paper does not specify a tie-breaking priority, making the openness label non-unique on the measure-zero but operationally relevant boundary set where the two clauses disagree [PAGE 4]. Table 3 contains visibly corrupted percentage entries (“758%”, “242%”) in the “Percentage of Plays” column, indicating OCR or layout errors that prevent exact verification of the ideal/preferred/neutral/undesirable distribution without the original PDF [PAGE 6]. The expected-gain operator Y^{exp}_i = \max_{p\in\mathcal{V}_i} p_y assumes an ideal tackle exactly at the cell boundary, which ignores defensive pursuit angle variance and receiver deceleration after the catch; this conflates schematic openness with post-contact outcomes [PAGE 5]. Elusiveness \mathcal{E}_i = Y^{act}_i - Y^{exp}_i further conflates quarterback throw placement with receiver post-catch ability: a low throw forcing a dive reduces Y^{act} and biases \mathcal{E}_i downward for the receiver even when the QB caused the shortfall [PAGE 5, Section 4.2]. Finally, the sample is a single quarterback, single team, single season (231 base-offense plays, 148 completions), so the percentile thresholds and P(\mathrm{CMP} \mid \mathcal{O}) mapping are not transportable to other quarterbacks without recalibration [PAGE 2, PAGE 6].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the state of player i at frame t be \mathbf{x}_i(t) = (x_i(t), y_i(t)) \in \mathbb{R}^2, measured in yards. The observation pipeline samples at f_s = 3\,\mathrm{Hz}, so \Delta t = 1/3\,\mathrm{s} and spatial resolution is \epsilon_x = 0.25\,\mathrm{yd} [PAGE 2]. The base-offense admissible set is
\mathcal{B} = \{ \text{play}: \text{down} \in \{1,2\},\ |\Delta\text{score}| < 15\ \text{points},\ t_{\text{rem}} > 300\,\mathrm{s},\ \text{yardline} \in [20,80] \} [PAGE 2].
The predictive projection with zero acceleration is
\hat{\mathbf{x}}_i(t+\tau_p) = \mathbf{x}_i(t) + \tau_p\,\mathbf{v}_i(t), \qquad \tau_p = 2\Delta t = 2/3\,\mathrm{s} [PAGE 3].
The predictive Voronoi cell for receiver i is
\mathcal{V}_i = \{ \mathbf{p}\in\mathbb{R}^2 : \|\mathbf{p} - \hat{\mathbf{x}}_i\|_2 \le \|\mathbf{p} - \hat{\mathbf{x}}_j\|_2\ \ \forall j \neq i \} [PAGE 3].
Zone area and integrity are
A_i = \operatorname{Area}(\mathcal{V}_i)\ \ [\mathrm{yd}^2], \qquad
I_i = \min_{d\in\mathcal{D}} \|\hat{\mathbf{x}}_i - \hat{\mathbf{x}}_d\|_2\ \ [\mathrm{yd}] [PAGE 3, PAGE 4].
Openness \mathcal{O}_i \in \{\text{wide-open},\text{open},\text{defended},\text{well-defended}\} is assigned by the disjunctive rule in Table 1 [PAGE 4].
Expected gain is
Y^{\mathrm{exp}}_i = \max_{\mathbf{p}\in\mathcal{V}_i} p_y\ \ [\mathrm{yd}] [PAGE 5].
Expected payoff is
\Pi_i = \hat{P}(\mathrm{CMP}\mid\mathcal{O}_i)\,Y^{\mathrm{exp}}_i\ \ [\mathrm{yd}] [PAGE 6].
Receiver elusiveness is
\mathcal{E}_i = Y^{\mathrm{act}}_i - Y^{\mathrm{exp}}_i\ \ [\mathrm{yd}] [PAGE 5, Section 4.2].
Decision percentile and class:
\rho_i = \operatorname{rank}_{\text{play population}}(\Pi_i), \quad
\text{class} =
\begin{cases}
\text{ideal} & \rho_i \ge 0.80\\
\text{preferred} & 0.50 \le \rho_i < 0.80\\
\text{neutral} & 0.20 \le \rho_i < 0.50\\
\text{undesirable} & \rho_i < 0.20
\end{cases} [PAGE 6].
Breakdown/singularity regimes: (i) if receiver acceleration \mathbf{a}_i \neq 0, the constant-velocity projection incurs position error \delta \approx \tfrac{1}{2}\|\mathbf{a}_i\|\tau_p^2, which grows quadratically in \tau_p and invalidates the tessellation when \delta exceeds the local Voronoi edge spacing; (ii) if A_i or I_i lies exactly on a classification boundary (200, 100, 50 yards² or 8, 4, 2 yards), the OR rule yields conflicting labels; (iii) if a receiver has zero catches, mean elusiveness \bar{\mathcal{E}} = \sum \mathcal{E}/N_{\text{catch}} is undefined due to division by zero, though Table 2 lists only players with N_{\text{catch}} > 0 [PAGE 5, PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Maheswaran et al., “The Three Dimensions of Rebounding,” presented at the 2014 MIT Sloan Sports Analytics Conference, which applied Voronoi tessellation to NBA rebounding skill [PAGE 3, Reference 3]. Hochstedler extends that spatial-ownership concept to the NFL by adding velocity-driven prediction, because passing routes depend on future position rather than static location [PAGE 3]. The data source is Zebra Technologies RFID tracking, in use across the NFL since 2014, though at the time of writing the league data was not publicly available, forcing manual video capture at 3 Hz [PAGE 1, PAGE 2]. A related independent study by Mrkvicka and Hochstedler linked passer rating to receiver concussions and team losses using NFL injury data, motivating the claim that better quarterback decision-making reduces both team losses and player injury [PAGE 1, Reference 2]. Goldsberry’s “Pass Atlas” is cited as the missing completion-probability conditioning on receiver distance from the line of scrimmage [PAGE 8, Reference 4].

Multi-week traps emerge from this lineage. The analysis is locked to the 2014 Indianapolis Colts and Andrew Luck across only 231 base-offense plays, so it captures no opponent-specific defensive adaptation across weeks, no cross-season schematic evolution, and no weather-induced covariance in player traction or ball flight [PAGE 2, PAGE 8]. Because defensive coordinators adjust coverage patterns week-to-week, a static openness threshold (200 yards², 8 yards integrity, etc.) derived from one team’s film is vulnerable to coverage rotation: a zone that is “wide-open” against one cornerback’s technique may be “well-defended” against a press-man defender with different acceleration profile, yet the model holds the thresholds fixed [PAGE 4]. Similarly, the completion-probability map \hat{P}(\mathrm{CMP}\mid\mathcal{O}) is Luck-specific; applying it to another quarterback without recalibrating for arm strength, release time, and accuracy creates a distributional shift that the paper acknowledges only in its limitations section [PAGE 8]. The genealogical dependency on NBA rebounding also imports an implicit assumption of Euclidean, constant-velocity player motion that is weaker in football, where route cuts, accelerations, and defensive jams violate the motion model used to build the predictive tessellation [PAGE 3, PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The model treats quarterback decision-making as a single-level optimization: given observed geometric openness and expected yardage, choose the target maximizing expected payoff \Pi_i [PAGE 6]. This ignores recursive theory of mind in which the quarterback forms second-order beliefs about the defensive coverage call, and the defensive coordinator forms beliefs about the quarterback’s progression reads. Crisis habit regression predicts that under pressure—quantified here by small zone integrity or low percentile rank—the quarterback regresses to a habitual primary target rather than recomputing the full expected-payoff surface. The paper’s Appendix I play trace shows Luck looking left to hold the free safety before throwing to Wayne on a deep crossing route, consistent with a designed progression in which the quarterback manipulates defender positioning before selecting the highest-payoff option [PAGE 10, Appendix I, Frame 5–9].

A counter-trap operates when the defense disguises coverage to make a defended receiver appear open in the predictive tessellation, inducing the quarterback to select a low-integrity target. Because the model projects constant velocity for only 2/3 s, it cannot detect a defensive back who sits on a route after the projection horizon or a safety who rolls down late; the tessellation therefore labels the receiver as open at the decision point even though the defense is executing a bait [PAGE 3, Section 3.1]. The clock layer is explicit in the base-offense filter: plays are excluded if fewer than five minutes remain in a half, removing two-minute-drill scenarios where clock management dominates yardage utility and the quarterback’s objective function ceases to be purely expected-gain maximization [PAGE 2]. In those excluded regimes, the recursive pressure shifts from “find the open receiver” to “manage the clock and field position,” a regime change the model does not represent. The result is a decision model that is valid in non-crisis, non-clock-driven base-offense contexts but unstable exactly when game-theoretic recursion and crisis habit regression dominate quarterback behavior.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The data are accurate to within 0.25 yards at 3 Hz [PAGE 2]. Quantization induces position error \epsilon_x = 0.125\,\mathrm{yd} (half-quantization) and velocity error \epsilon_v \approx \epsilon_x / \Delta t = 0.375\,\mathrm{yd/s}. Over the projection horizon \tau_p = 2/3\,\mathrm{s}, position drift from velocity error alone is \epsilon_v \tau_p \approx 0.25\,\mathrm{yd}, which is non-negligible relative to the integrity classification bands of width 2 yards [PAGE 3, PAGE 4]. Veto condition: if \| \nabla \mathcal{V}_i \| \epsilon_x > \tfrac{1}{2}(I_{\text{upper}} - I_{\text{lower}}) for any integrity band edge, the classification is physically vetoed.

Biomechanical layer: The constant-velocity assumption ignores individualized acceleration profiles [PAGE 8]. Human lateral acceleration during a route cut can reach \|\mathbf{a}\| \approx 3\text{--}5\,\mathrm{m/s^2} (\approx 3.3\text{--}5.5\,\mathrm{yd/s^2}). Over \tau_p = 2/3\,\mathrm{s}, unmodeled displacement is \tfrac{1}{2}\|\mathbf{a}\|\tau_p^2 \approx 0.73\text{--}1.22\,\mathrm{yd}, sufficient to move a receiver across a Voronoi cell boundary or change the nearest-defender identity [PAGE 8]. Veto condition: if \tfrac{1}{2}\|\mathbf{a}_i\|\tau_p^2 > \min_{j\neq i} | \|\hat{\mathbf{x}}_i - \hat{\mathbf{x}}_j\|_2 - \|\hat{\mathbf{x}}_i - \hat{\mathbf{x}}_k\|_2 | for any defender pair j,k, the predictive tessellation topologically changes and the zone assignment is vetoed.

Weather layer: The paper contains no weather or surface-friction variables [PAGE 1–8]. Precipitation reduces the coefficient of friction \mu between cleats and turf, lowering maximum sustainable lateral acceleration and altering route-breaking geometry; wind affects ball flight and thus the mapping from throw release to catch point, neither of which is in the expected-gain operator Y^{exp}_i = \max_{p\in\mathcal{V}_i} p_y [PAGE 5]. Veto condition: if surface \mu falls below the threshold required to execute the projected cut radius r = v^2 / (\mu g), or if crosswind component exceeds the quarterback’s release accuracy cone, the constant-velocity geospatial model is biomechanically and aerodynamically vetoed regardless of computed openness.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (acceleration veto). Counterfactual: A receiver runs a 90-degree break route with peak lateral acceleration \|\mathbf{a}\| > 2\,\mathrm{m/s^2} within the 2/3 s projection window. Veto: The constant-velocity predictive tessellation misestimates \mathcal{V}_i because \tfrac{1}{2}\|\mathbf{a}\|\tau_p^2 > 0.44\,\mathrm{yd}, enough to reassign the nearest defender and flip integrity class. Prediction: On routes with hard breaks inside the projection horizon, the classifier’s disagreement rate between true post-catch coverage and modeled openness exceeds 15%, and expected payoff \Pi_i is systematically biased upward for the breaking receiver.

Scenario 2 (completion-probability conditioning veto). Counterfactual: Two receivers are both “wide-open” at the decision point, but one is 25 yards downfield and the other 8 yards downfield. The paper’s payoff uses \hat{P}(\mathrm{CMP}\mid\mathcal{O}) without conditioning on distance from the line of scrimmage, a limitation the authors explicitly note [PAGE 8, Reference 4]. Veto: If \partial \hat{P}(\mathrm{CMP}\mid\mathcal{O}, d_{\text{LOS}}) / \partial d_{\text{LOS}} \neq 0, then \Pi_i = \hat{P}(\mathrm{CMP}\mid\mathcal{O})Y^{\mathrm{exp}}_i overvalues deep targets because it ignores the steep drop in completion probability with depth. Prediction: Applying the unconditional payoff to deep wide-open targets overestimates expected payoff by more than 1.5 yards relative to short wide-open targets, causing the decision percentile to mis-rank deep shots as preferred or ideal when they are neutral or undesirable.

Scenario 3 (single-quarterback transport veto). Counterfactual: The openness thresholds and \hat{P}(\mathrm{CMP}\mid\mathcal{O}) mapping derived from Andrew Luck’s 2014 Colts are applied to a different quarterback with lower accuracy and slower processing speed. Veto: The decision classes (ideal \ge 80th percentile, etc.) are calibrated to Luck’s completion distribution (64% overall; 71% wide-open, 70% open, 58% defended, 52% well-defended) [PAGE 4, Table 1; PAGE 6, Table 3]. A different quarterback’s P(\mathrm{CMP}\mid\mathcal{O}) curve is vertically shifted, so the same geometric openness class yields a different payoff percentile. Prediction: Without recalibrating the percentile cutoffs to the new quarterback’s completion map, 20–30% of target selections are misclassified by at least one decision class, producing systematic over-aggression toward defended receivers and under-selection of open receivers.
</RLVR_COUNTERFACTUAL_VETOES>