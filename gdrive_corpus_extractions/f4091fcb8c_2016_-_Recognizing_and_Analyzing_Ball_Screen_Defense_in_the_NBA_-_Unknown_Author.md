---
source: "2016 - Recognizing and Analyzing Ball Screen Defense in the NBA - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2016"
pages: 12
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4393
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about ball screen defense in the NBA. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source text that appears to be the full paper (12 pages based on the page count indicator, though the markdown seems to cover pages 1-10 based on the footer "Presented by: 10" at the end, but they said PAGES: 12). Let me check the page markers in the text. The text has "2016 Research Papers Competition Presented by: 1", "2", etc. up to "10" at the end. But the user says PAGES: 12. I should cite based on the visible page markers in the text, which go from page 1 to page 10 explicitly. However, the user says PAGES: 12, so maybe there are pages 11-12 not fully shown? Or maybe I should treat the provided text as the source and cite the page numbers visible in the text. Let me look carefully:

- Page 1: Abstract, Introduction start, "Presented by: 1"
- Page 2: Section 3, Definitions, "Presented by: 2"
- Page 3: Section 3.2, 3.3, "Presented by: 3"
- Page 4: Section 4, Team-Level, "Presented by: 4"
- Page 5: Section 4.2 Player-Level, "Presented by: 5"
- Page 6: Figure 4, text, "Presented by: 6"
- Page 7: Table 4, text, "Presented by: 7"
- Page 8: Figure 7, Figure 8, text, "Presented by: 8"
- Page 9: Text continued, Figure 9?, "Presented by: 9"
- Page 10: Conclusion, References, "Presented by: 10"

So visible pages are 1-10. User says PAGES: 12. I should cite what I can see. If I need to reference pages 11-12, I can't because they're not in the text. But maybe the user considers the PDF to be 12 pages and I should just cite the ones I see. I'll cite [PAGE N] where N matches the footer numbers visible: [PAGE 1] through [PAGE 10].

Important constraints:
- No betting lines whatsoever.
- No toy equations. Must use formal LaTeX, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact page markers and verbatim quotes when source pages are provided.
- The XML sections must be exact.
- Total word count >= 1,000 words across sections. THINK_TRACE alone >= 400 words.

Let me plan each section.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the classifier pipeline, discuss the SportVU data (25 fps, x,y positions, ball x,y,z), the alignment at screen moment (minimum distance between screen and on-ball defender), feature extraction (pairwise distances, summary statistics), multinomial logistic regression, class weights inverse proportional to frequencies, threshold h=0.6 for precision-recall tradeoff, confusion matrix analysis, KL divergence for team distributions, points per possession analysis. Gray-zone audit: small training set (340 attempts, trap only 28), class imbalance, trap recall 0.19, precision variability, h=0.6 leading to 219,372 unclear labels (81% of data), small sample sizes in Table 4 (e.g., 11-20 instances), survivor bias in player-level analysis (only players with >300 labeled instances), temporal alignment assumptions, the "screen moment" definition, potential label leakage, 2013-2014 focus vs four seasons, etc. Must be >=400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. I should write:
- Multinomial logistic regression: P(y=j|x) = exp(w_j^T x) / sum_k exp(w_k^T x)
- Feature vector x in R^d from summary statistics of z_i in R^{d_i}
- Class weights w_c inversely proportional to class frequencies
- Threshold rule: assign label only if max_j P(y=j|x) > h, else unclear
- Symmetric KL divergence: D_sym(P||Q) = D_KL(P||Q) + D_KL(Q||P)
- Points per possession: PPP = points / possession (dimensionless, points per 1 possession)
- SportVU sampling rate: 25 Hz (frames per second)
- Screen moment: t* = argmin_t ||p_onball_defender(t) - p_screener(t)||_2
- Alignment window: 10 frames prior to t*
- Class distribution counts: over 146,314; under 69,721; switch 37,336; trap 17,451 (h=0)
- h=0.6 counts: over 33,421; under 9,252; switch 8,394; trap 383; unclear 219,372
- Accuracy 0.69 ± 0.03
- Table 2 metrics
- Units: SI (meters, seconds), dimensionless probabilities, points per possession.

Citations: [PAGE 3] for classifier equations, [PAGE 2] for data, [PAGE 4] for team distributions, etc.

<RETROCAUSAL_GENEALOGy>: Historical/scientific lineage & multi-week traps. Discuss reference [2] (McQueen, Wiens, Guttag 2014 MIT Sloan), reference [3] Murphy 2012, reference [4] scikit-learn 2011. Trace lineage from on-ball screen recognition to defensive scheme classification. Multi-week traps: small training set from six games of 2012-2013; temporal drift across seasons; overfitting to 2012-2013 film; class imbalance trap (trap class underrepresented); threshold h trap (precision-recall tradeoff causing massive unclear set); survivor bias trap (only players with >300 screens); small sample trap in Table 4 (fractions like 0.58 from 14 total). Also the "causal" direction: does scheme cause outcome or does offensive personnel cause scheme choice? Endogeneity.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is interesting. I need to discuss how coaches adjust (recursive theory of mind): if defense traps more, offense adjusts; if offense shoots well against over, defense switches; crisis habits (reliance on over for Irving/Holiday despite success against it); clock management (shot clock, game clock in data); the classifier's temporal alignment relative to screen moment; how defenses regress to habitual schemes under pressure; counter-trap (offense exploiting trap by passing out); shot clock as a forcing function. Must discuss the paper's mention of Stephen Curry's 2015 Finals three-pointers involving pick and rolls.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This section is about physical constraints that veto certain classifications or outcomes. Since it's basketball indoors, weather is not a factor, but I can discuss court dimensions (NBA court 94x50 feet), player velocity limits, pairwise distance thresholds, physical impossibility of certain trajectories (e.g., defender cannot be in two places), biomechanical limits on closeouts, the SportVU tracking error, occlusion, frame rate (25 Hz) limiting temporal resolution of fast screens (a player moving at 5 m/s moves 0.2 m per frame, which is small relative to screen width), the minimum distance definition for screen moment. "Veto proof" means conditions under which the classification must be vetoed/rejected: e.g., if pairwise distance < 0.3m (physical collision), if trajectories leave court bounds, if frame drops occur. No weather (indoor arena, climate controlled), but mention temperature/humidity are constant so no veto from weather. Physical layer: court boundaries, hoop height 10 ft, ball radius ~0.12m. Biomechanical: human acceleration limits.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios where the classifier's output would be vetoed, with predictions.
1. Low-confidence trap classification: if max probability < h=0.6, veto as "unclear". Prediction: for h=0.6, 219,372 screens (81.0%) are unclear; trap classifications drop from 17,451 to 383 (97.8% reduction).
2. Temporal misalignment veto: if screen moment not detected within alignment window (e.g., no minimum distance found in 10 frames prior), veto. Prediction: screens where ball-handler never reaches screener (failed screens) would be misclassified or excluded.
3. Pairwise distance physical impossibility veto: if defender-screener distance < 0.3m (collision) or > 28.7m (diagonal court), veto as tracking error. Prediction: such frames would corrupt summary statistics (mean/min/max) and shift logistic regression logits.

Word count: Need >= 1000 total. THINK_TRACE >= 400. I'll aim for roughly 150-250 words per other section, totaling well over 1000.

No betting lines: I must avoid any mention of odds, spreads, etc. The paper itself doesn't mention betting, so easy.

Verbatim quotes: I need to include some exact quotes with page citations.
Examples:
- Page 1: "As the NBA’s go-to offensive play, determining how to defend the ball screen is among the most critical decisions faced by NBA coaching staffs."
- Page 2: "This dataset contains all (x, y) positions of every player on the court and the (x, y, z) coordinates of the ball at 25 frames per second."
- Page 3: "We achieve an overall average accuracy of 0.69 (± 0.03)."
- Page 3: "Trap is also the least represented in the training set."
- Page 4: "The 2013-2014 Miami Heat trapped nearly twice as frequently (13.2% of opponent screens) as the average team that season (just 7.5%)."
- Page 6: "Of all the 53 players we investigated, LeBron James faced the switch most often."
- Page 7: Table 4 numbers.

I need to be careful: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote and cite.

Let's draft.

Structure:

THINK_TRACE (>=400 words):
- Start with data pipeline: SportVU 25 Hz, trajectories.
- Screen detection stages 1-2 (referencing [2]).
- Stage 3: classification.
- Formal derivation of features: pairwise distances between 4 players = 6 pairwise distances? Actually pairwise among 4 players = 6 distances. But they say pairwise distances between the four player trajectories. Each segment aligned at screen moment t*.
- Summary statistics -> fixed length vector x in R^d.
- Multinomial logistic regression with class weights.
- Training set: 340 labeled attempts from six games 2012-2013. Distribution: 199 over, 56 under, 57 switch, 28 trap.
- Performance: accuracy 0.69±0.03. Trap recall 0.19±0.13.
- Threshold h=0.6: precision up, recall down, 219,372 unclear.
- Gray zones: small N for trap, temporal misalignment, label noise from film review, class imbalance, endogeneity (scheme choice depends on offensive player), survivor bias (>300 instances), small sample in Table 4 (11-40 samples), 2013-2014 focus vs four seasons.
- Multi-hop derivation: how a misclassified trap affects team-level KL divergence and player-level PPP.

SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX equations.
- Citations [PAGE N].

RETROCAUSAL_GENEALOGY:
- Lineage: McQueen et al. 2014 -> this paper 2016. Murphy 2012. Scikit-learn 2011.
- Multi-week traps: small training set from six games; temporal drift; trap class scarcity; threshold trap; survivor bias; small-sample table trap.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: teams stick to over despite ineffectiveness (Irving/Holiday >75% over).
- Counter-trap: offense exploits trap by passing; Heat forced turnovers but trap rare.
- Clock: shot clock, game clock in data; alignment window 10 frames prior to screen moment; end of possession (shot, pass, turnover, stoppage).
- 2015 Finals Curry example.
- Coach adjusts based on classification; offense adjusts; recursive loop.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: court dimensions (94x50 ft implied), pairwise distances cannot exceed court diagonal ~32.7m? Actually NBA court is 94 ft by 50 ft = 28.65m x 15.24m, diagonal ~32.46m. Ball radius ~0.12m, hoop 3.05m.
- Biomechanical: max human speed ~7-8 m/s, at 25 Hz displacement per frame ~0.28-0.32m. Screen moment defined by min distance; if distance never below threshold, no screen.
- Weather: indoor, climate controlled; no weather veto, but HVAC failure could be a veto (not in paper).
- Veto conditions: tracking gaps, out-of-bounds coordinates, duplicate player IDs, frame rate aliasing for fast screens.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Confidence threshold veto. If max_j P(y=j|x) < h=0.6, output "unclear". Verifiable: 219,372/270,823 = 81.0% unclear at h=0.6. Prediction: trap class collapses from 17,451 to 383 (-97.8%).
- Scenario 2: Temporal alignment veto. If screen moment t* not found (min distance not attained within alignment window), veto screen instance. Prediction: failed screens where ball-handler never contacts screener are excluded, biasing sample toward completed screens.
- Scenario 3: Physical distance veto. If any pairwise distance d_{ab} < 0.25m (implausible collision given player radii) or > 33m (beyond court diagonal), veto as SportVU tracking error. Prediction: corrupts min/mean/max summary statistics, shifting logistic regression logits and causing systematic misclassification of "over" vs "under".

I need to ensure total word count >= 1000. Let's estimate:
THINK_TRACE: ~500 words.
SOURCE_OPERATORS: ~300 words.
RETROCAUSAL: ~250 words.
RECURSIVE: ~250 words.
CROSS_LAYER: ~250 words.
RLVR: ~250 words.
Total ~1800 words. Good.

Now, page citations: The text has footers like "Presented by: 1" etc. I'll cite [PAGE 1] through [PAGE 10]. The user said PAGES: 12 but only 10 are visible. I'll cite what I see.

I must avoid fake ratios like Force/Fatigue. All equations must be formal and sourced or standard ML.

Let's write carefully.

I'll include verbatim quotes:
[PAGE 1] "As the NBA’s go-to offensive play, determining how to defend the ball screen is among the most critical decisions faced by NBA coaching staffs."
[PAGE 2] "This dataset contains all (x, y) positions of every player on the court and the (x, y, z) coordinates of the ball at 25 frames per second."
[PAGE 3] "We achieve an overall average accuracy of 0.69 (± 0.03)."
[PAGE 3] "Trap is also the least represented in the training set."
[PAGE 4] "The 2013-2014 Miami Heat trapped nearly twice as frequently (13.2% of opponent screens) as the average team that season (just 7.5%)."
[PAGE 6] "Of all the 53 players we investigated, LeBron James faced the switch most often."
[PAGE 3] "In total our training set consisted of 199 instances of over, 56 instances of under, 57 instances of switch, and 28 instances of trap."

Make sure to mention no betting lines.

Let's compose the final response with exact XML tags.

I need to be careful that THINK_TRACE is >=400 words. I'll write richly.

Double-check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper constructs a three-stage pipeline on SportVU player-tracking data: (1) segment unlabeled trajectories into on-ball screen “actions,” (2) identify screens, and (3) classify the defensive scheme. On [PAGE 2], the authors state that SportVU records “all (x, y) positions of every player on the court and the (x, y, z) coordinates of the ball at 25 frames per second,” yielding a 25 Hz multivariate time series per possession. Stage 3, which is the focus of this paper, takes the four relevant trajectories—ball handler, on-ball defender, screener, screener defender—and aligns them on a “screen moment,” defined as the instant when the distance between the screener and the on-ball defender is minimized [PAGE 2]. Ten frames prior to that moment are retained, and observations continue until a shot, pass, turnover, or stoppage. Each aligned segment produces variable-length pairwise-distance vectors z_i ∈ R^{d_i}; summary statistics (mean, maximum, minimum, etc.) are concatenated into a fixed-length feature vector x ∈ R^d [PAGE 2]. A multinomial logistic regression maps x to one of four classes {over, under, switch, trap}, with class weights inversely proportional to class frequencies to mitigate the severe imbalance seen in the hand-labeled film from six 2012-2013 games: 199 over, 56 under, 57 switch, and only 28 trap instances [PAGE 3].

The gray-zone audit begins with sample-size pathology. The trap class, which is operationally the most consequential because it double-teams the ball handler, has only 28 training examples; consequently the classifier achieves recall of 0.19 (± 0.13) for trap while over achieves 0.83 (± 0.05) [PAGE 3]. Overall accuracy is 0.69 (± 0.03) [PAGE 3], which means nearly one-third of labeled screens are misassigned even under cross-validation. When the authors raise the decision threshold to h = 0.6 to boost precision, 219,372 of 270,823 screens—roughly 81%—are labeled “unclear,” and the trap category collapses from 17,451 to just 383 instances [PAGE 3]. This creates a selection bias: subsequent team-level Kullback-Leibler divergence comparisons and player-level points-per-possession analyses rest on a highly filtered, non-random subset of screens.

A second gray zone is endogeneity. Defensive scheme is not randomly assigned; it is chosen in response to the offensive ball handler’s skill set. The paper notes that teams go “over” against Irving and Holiday more than 75% of the time even though those players remain effective versus over [PAGE 6]. Because the classifier is trained on film from a single season (2012-2013) and then applied across 2011-2015, temporal drift in defensive conventions is unmodeled. Table 4’s “most effective defensive pairs” rest on totals as low as 11–20 observed screens [PAGE 7], so standard errors are large and survivor bias is severe: only pairings with sufficient samples appear, hiding ineffective defenders who simply are not assigned to screens. Player-level analysis further restricts to 53 ball handlers with >300 labeled instances, excluding low-usage players and potentially distorting the league-wide scheme-outcome relationship. These interlocking pathologies—class imbalance, threshold-induced missingness, endogeneity, small-N pair rankings, and temporal non-stationarity—form a multi-hop derivation chain in which a single misclassified trap at the feature level propagates into distorted team-strategy rankings and false conclusions about individual defensive value.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let x ∈ R^d be the fixed-length feature vector for one aligned ball-screen segment, constructed from summary statistics of pairwise-distance signals z_i ∈ R^{d_i}, i = 1…n [PAGE 2]. The multinomial logistic regression defines class-conditional probabilities as

P(y = j | x) = \frac{\exp(w_j^T x)}{\sum_{k=1}^{4} \exp(w_k^T x)}, \quad j \in \{\text{over}, \text{under}, \text{trap}, \text{switch}\},

where w_j are learned coefficient vectors and the predicted label is \hat{y} = \arg\max_j P(y=j|x) [PAGE 3]. Class weights are set inversely proportional to class frequencies [PAGE 3]. With a confidence threshold h, the decision rule becomes

\hat{y} = \begin{cases}
\arg\max_j P(y=j|x), & \max_j P(y=j|x) \ge h \\
\text{unclear}, & \max_j P(y=j|x) < h
\end{cases}

[PAGE 3]. At h = 0.6 the labeled counts are over = 33,421; under = 9,252; switch = 8,394; trap = 383; unclear = 219,372 out of 270,823 total screens [PAGE 3].

The screen-moment alignment operator is

t^* = \arg\min_t \| p_{\text{on-ball defender}}(t) - p_{\text{screener}}(t) \|_2,

and features are extracted from the window [t^* - 10/25\,\text{s},\, t^* \cup [t^*,\, t_{\text{end}}]], where t_{\text{end}} is the first shot, pass, turnover, or stoppage [PAGE 2]. The sampling rate is f_s = 25\,\text{Hz}, so ten frames correspond to a 0.4 s pre-screen lookback. Team-level strategy divergence uses the symmetric Kullback-Leibler divergence

D_{\text{sym}}(P\|Q) = D_{\text{KL}}(P\|Q) + D_{\text{KL}}(Q\|P),

computed over each team’s empirical scheme distribution [PAGE 4]. Possession efficiency is measured in points per possession (dimensionless ratio of points scored to one possession), e.g., 0.83 points per possession when the defense switches on LeBron James [PAGE 6]. Overall classifier accuracy is reported as 0.69 (± 0.03) across 100 random train/test splits [PAGE 3].

Breakdown and singularity regimes: (i) if \max_j P(y=j|x) < h, the instance is singular with respect to labeling and is discarded as unclear; (ii) if the screen detector never finds a minimum pairwise distance in the pre-screen window, t^* is undefined and the segment cannot be aligned; (iii) with only 28 trap training examples, the trap class weight becomes very large, pushing the multinomial logits into a high-variance regime where recall collapses to 0.19 (± 0.13) [PAGE 3]. All spatial coordinates use SI units (meters) from SportVU; temporal units are seconds. No betting lines, spreads, totals, or odds appear in this analysis.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this work traces to three references cited on [PAGE 10] and [PAGE 2]. Reference [2], McQueen, Wiens, and Guttag (2014 MIT Sloan), developed the upstream “automatically recognizing on-ball screens” detector that supplies stages 1 and 2 of the pipeline [PAGE 2]. Reference [3], Murphy’s _Machine Learning: A Probabilistic Perspective_ (2012), supplies the multinomial logistic regression formalism [PAGE 3]. Reference [4], Pedregosa et al.’s scikit-learn paper (2011), underpins the implementation [PAGE 3]. The paper thus sits at the intersection of computer-vision track association and probabilistic classification, applied to a domain where the action of interest—the ball screen—occurs hundreds of thousands of times across four NBA seasons [PAGE 1].

A multi-week trap is embedded in the training protocol. The authors hand-labeled only 340 defensive attempts from six games of the 2012-2013 regular season [PAGE 3]. Because the classifier is then applied to 2013-2014 and 2014-2015 data, any week-to-week tactical drift—such as the league-wide increase in “under” or the Miami Heat’s 13.2% trap rate versus a 7.5% league average in 2013-2014 [PAGE 4]—is absorbed as label noise rather than modeled as a time-varying parameter. The scarcity of trap examples (28 in training, 17,451 at h=0 but only 383 at h=0.6) creates a second trap: the analyst is tempted to interpret the rare, high-variance trap class as strategically decisive when it may simply be under-observed [PAGE 3]. A third trap is survivor bias in Table 4, where defensive pairs are ranked by average points per possession using totals as low as 11 screens [PAGE 7]; pairs that fail to appear are not necessarily worse, merely under-sampled, so the “most effective” list conditions on having enough observed screens to rank, which is itself a strategic choice by coaches. Finally, the endogeneity trap runs backward from outcome to cause: teams choose schemes based on the offensive personnel they face, so regressing points per possession on scheme without instrumenting for ball-handler quality conflates defensive choice with offensive matchup [PAGE 6].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper describes a recursive coaching loop in which defensive scheme selection is a best response to offensive ball-handler type, and offensive behavior is in turn a best response to the anticipated scheme. On [PAGE 1], the authors cite the 2015 NBA Finals, noting that half of Stephen Curry’s 25 three-pointers involved pick and rolls, illustrating how offensive design forces defensive adaptation. Coaches observe classification output—over, under, switch, trap—and adjust; if a team traps frequently, as Miami did at 13.2% of opponent screens [PAGE 4], the offense’s counter-trap is to attack the double team by passing to the screener or the open weak-side shooter. Yet the data show habitual regression: teams still defend Irving and Holiday with “over” more than 75% of the time even though those ball handlers generate high points per possession against it [PAGE 6], suggesting a crisis habit in which coaches default to a familiar scheme despite disconfirming evidence.

The temporal operator “clock” enters at two layers. First, SportVU records game clock and shot clock alongside trajectories [PAGE 2], so screen defenses are conditioned on time pressure; a trap late in the shot clock has different strategic value than one early in the possession. Second, the classifier’s alignment window is bounded by the screen moment and the end of the possession (shot, pass, turnover, or stoppage) [PAGE 2], which means the clock of the possession itself truncates the observation sequence and censors long-developing screens. LeBron James faced the switch most often of all 53 players studied and remained effective against it, implying that switching as a default counter to him may be suboptimal—a recursive miscalculation by opposing defenses [PAGE 6]. Durant punishes the switch even more severely but sees it less often, consistent with a theory-of-mind equilibrium in which defenses avoid switching against elite scorers but overuse it against weaker handlers such as Chalmers and Prigioni, for whom the switch outperforms going over [PAGE 6]. This dynamic system has no fixed point in the data: as soon as a classification becomes public, the offense can counter, and the coach must regress to a new habit under clock pressure.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NBA court dimensions impose hard bounds on all pairwise distances extracted from SportVU coordinates [PAGE 2]. The court is approximately 28.65 m by 15.24 m, so any pairwise Euclidean distance exceeding the diagonal (~32.5 m) is physically impossible and must veto the frame as a tracking error. Player radii (~0.2 m) imply that distances below ~0.4 m between distinct players indicate collision or identity-switch noise; such frames corrupt the minimum-distance statistic used to define the screen moment t^* [PAGE 2]. Ball coordinates include z (height), with the rim at 3.05 m; any ball trajectory intersecting the floor outside a possession event indicates a dropped frame.

Biomechanical layer: at f_s = 25 Hz, a player moving at 7 m/s traverses only 0.28 m per frame [PAGE 2], which is adequate to resolve a screen but not to distinguish a “show” from a “hedge” within a single frame; those subtypes are explicitly excluded from the analysis [PAGE 2]. Human acceleration limits bound the rate of change of pairwise distances; features derived from signals violating kinematic feasibility (e.g., instantaneous direction reversals exceeding ~10 m/s²) should be vetoed before summary statistics (mean, max, min) are computed [PAGE 2]. Because the four-player feature vector depends on all pairwise distances, one corrupted trajectory cascades into the multinomial logistic regression logits w_j^T x [PAGE 3].

Weather layer: games are played indoors under climate control, so ambient temperature, humidity, and wind are constant and do not veto classifications. The only environmental veto would be catastrophic HVAC failure altering air density enough to affect ball flight, which is not modeled and not present in the data [PAGE 2].

Veto adjudication: if any pairwise distance lies outside [0.4 m, 32.5 m], or if t^* is undefined because no minimum is attained in the ten-frame pre-screen window, the screen instance is excluded from classification. This is a veto, not an imputation, because the paper already produces an “unclear” category under low confidence [PAGE 3]; extending vetoes to physically impossible geometry prevents silent label corruption in downstream team-level KL divergence and player-level points-per-possession estimates.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Confidence-threshold veto): Verifiable rule — if \max_j P(y=j|x) < h = 0.6, the instance is vetoed as “unclear.” Prediction — applying this to all 270,823 screens yields 219,372 unclear labels (≈81.0%) and collapses the trap class from 17,451 at h=0 to 383 at h=0.6, a 97.8% reduction [PAGE 3]. Any team-level or player-level analysis restricted to h=0.6 labeled data is therefore conditioned on only 19% of screens and is not representative of the full distribution.

Scenario 2 (Temporal-alignment veto): Verifiable rule — if the screen detector fails to find a minimum pairwise distance between on-ball defender and screener within the alignment window, t^* is undefined and the screen is vetoed. Prediction — screens in which the ball handler never reaches the screener (failed or aborted screens) are systematically excluded, biasing the sample toward completed pick-and-roll interactions and inflating measured offensive efficiency because non-events cannot produce points per possession [PAGE 2].

Scenario 3 (Physical-distance veto): Verifiable rule — if any pairwise distance d_{ab} < 0.4 m (implausible player collision) or d_{ab} > 32.5 m (beyond court diagonal), the frame is vetoed as SportVU tracking error [PAGE 2]. Prediction — corrupted minimum, maximum, and mean distance statistics shift the feature vector x, moving multinomial logistic regression logits w_j^T x across decision boundaries and causing systematic misclassification of “over” versus “under” because those classes are distinguished primarily by defender-screener separation geometry [PAGE 3].
</RLVR_COUNTERFACTUAL_VETOES>