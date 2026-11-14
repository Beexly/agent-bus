---
source: "2017 Shooting Styles Body Shots - SportVu.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3413
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about NBA shooting styles using body pose. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "PAGES: 10" but the source text actually has page markers up to 11. Let me check the page citations. The text shows page numbers 1 through 11. I need to cite exact [PAGE N] markers.

Let me structure this carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words).
- Need to derive connections between attributes, p-values, game context, shot outcome.
- Analyze Table 3 p-values.
- Discuss Chi-squared test, dof, significance levels.
- Gray zones: unmarked attributes, mutually exclusive values, 3-second window, egocentric direction, open/tough thresholds (0.53/0.47), logistic regression mAP.
- Multi-hop: SportVU trajectories -> expected point value model -> open/tough classification -> attribute analysis -> Curry case study.
- Gray-zone audit: small sample sizes for some attributes (combined bad pass, left/right jump feet), p-hacking concerns with multiple comparisons (17 attributes x 4 comparisons = 68 tests, alpha=0.1 means ~6.8 expected false positives), unmarked attributes handled how? Missing data mechanism?

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Pearson's Chi-squared test: $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$, dof, p-values.
- Logistic regression: $P(y=1|X) = \sigma(\beta^T X)$.
- Thresholds: $P(\text{success}) > 0.53$ open, $< 0.47$ tough.
- Table 3 exact p-values with [PAGE 5] citation.
- Table 2 classifier performance [PAGE 4].
- Bins: 5 temporal bins [PAGE 2-3].
- 17 attributes [PAGE 3].
- Sample: 1500 labeled shots, 29 Warriors games 2015/16 [PAGE 3].
- Training data: remaining 53 games [PAGE 4].
- Units: probabilities dimensionless, p-values dimensionless, dof integer.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Vicon motion capture [PAGE 1], SportVU [1], pose machines [14,15], fine-grained attributes [16], Cervone POINTWISE [8], Goldsberry CourtVision [2], Miller et al. [3].
- Multi-week traps: small sample (29 games), single team (Warriors), single season (2015/16), attribute labeling by experts (inter-rater reliability not reported), 3-second window may miss pre-shot movement, egocentric direction assumptions.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- This is a bit abstract but I need to interpret it in context of the paper. Crisis habit regression: under pressure (tough shots), players regress to habitual movement patterns (freezing after landing, off-balance). Counter-trap: defense expects certain styles (Curry off-balance, high movement) and adjusts. Clock: game clock, shot clock context not explicitly modeled but implied by expected point value model using temporal features.
- Need to discuss how Curry's unique style creates a recursive loop: defense adapts to his movement, he adapts further, etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: balance, footwork, jump mechanics.
- Biomechanical: single-foot landing vs both feet, leg separation during fall, off-balance shots.
- Weather: indoor NBA arena, negligible weather effect, but court conditions (humidity, slickness) could affect landing stability—though not in paper.
- Veto: if a shot is off-balance with single-foot landing, biomechanical stability is vetoed regardless of open/tough classification.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios.
- Scenario 1: Tough shot, right foot step prior (made more likely), but if defender contests within 1 foot, veto.
- Scenario 2: Open shot, no movement prior to pass, narrow stance, legs split during fall (made more likely), but if pass quality is bad, veto.
- Scenario 3: Curry off-balance, single-foot landing (his norm), but if leg separation during fall is extreme, veto for missed shot prediction.
- Each needs verifiable conditions and predictions.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400 words. I'll make sure all sections are substantial.

Let me draft carefully, ensuring no betting language (no spreads, totals, moneylines, odds). I can mention probabilities but not betting odds.

Page citations: I see page numbers 1-11 in the text. I'll cite [PAGE 1], [PAGE 2], etc. where relevant.

Let me write the response.

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

I need to be careful with LaTeX formatting. Use proper math mode.

Let me count approximate words as I write to ensure >1000.

THINK_TRACE: I'll aim for ~500 words.
SOURCE_OPERATORS: ~250 words.
RETROCAUSAL: ~200 words.
RECURSIVE: ~200 words.
CROSS_LAYER: ~200 words.
RLVR: ~200 words.
Total ~1550 words. Good.

Let me draft.

THINK_TRACE content:
- Multi-hop derivation: SportVU (x,y, ball x,y,z) -> expected point value classifier (logistic regression) -> open/tough thresholds -> attribute chi-squared tests -> made/missed and open/tough differences -> Curry case study.
- Gray-zone audit: Table 3 has 17 attributes, 4 comparisons = 68 chi-squared tests at alpha=0.1. Expected ~6.8 false positives under null. Several p-values are borderline (0.070, 0.096, 0.064). Some dof marked with * due to combined categories because insufficient data (bad pass combined, jump feet combined). This is a singularity/breakdown regime: sparse cells violate chi-squared asymptotic assumptions (expected cell counts <5).
- Missing data: attributes not visible in 3-second window left unmarked. Missing not at random potentially (fast movement occludes pose).
- Direction attributes egocentric: introduces coordinate frame dependency.
- Open/tough classification uses probability thresholds 0.53/0.47 leaving a gray zone [0.47, 0.53] unclassified.
- Sample restricted to 29 Warriors games, ~1500 shots, single team, single season. External validity limited.
- The logistic regression mAP 57.1% means the classifier is weak; expected point value is noisy, so open/tough labels are themselves probabilistic and error-prone.

SOURCE_OPERATORS:
- Define Chi-squared: $\chi^2 = \sum_{k=1}^{K} \frac{(O_k - E_k)^2}{E_k}$, $E_k = N p_k$, units dimensionless, dof = (rows-1)(cols-1).
- Logistic regression: $P(\text{made}|X) = \frac{1}{1+e^{-\beta^T X}}$, $X \in \mathbb{R}^d$ spatial/temporal features.
- Thresholds: $\hat{p} > 0.53 \implies \text{open}$; $\hat{p} < 0.47 \implies \text{tough}$; $[0.47,0.53]$ excluded.
- Table 3 exact p-values from [PAGE 5]: Balance 0.222/0.114/0.939/0.644; Move(1) 0.202/**0.004**/0.195/0.328; Direction() 0.483/0.454/**0.034**/0.201; Pass Quality 0.117/0.697/**0.049**/0.178; Pump Fake 0.325/**0.020**/0.423/**0.048**; Dribble 0.161/0.329/0.315/0.153; Move(3) **0.070**/0.297/0.253/0.721; Direction(3) 0.101/0.212/**0.064**/**0.013**; Turn 0.884/0.288/0.550/0.453; Footwork **0.016**/0.420/0.265/**3e-9**; Set Foot Stance 0.718/**0.096**/0.266/0.121; Jump Foot 0.318/0.268/0.422/0.338; Legs During Jump 0.213/0.741/0.698/0.637; Legs During Fall 0.559/**0.024**/0.803/**0.008**; Landing Foot 0.297/0.769/0.906/**0.006**; Land Foot Stance 0.731/0.353/0.103/**0.003**; Move(5) **0.002**/0.247/0.456/**1e-6**.
- Bold indicates significant at alpha=0.1 [PAGE 5].
- Table 2 [PAGE 4]: Logistic Regression made AP 69.8, missed AP 44.3, mAP 57.1.
- Sample: ~1500 shots, 29 games [PAGE 3]. Training: remaining 53 games [PAGE 4].
- Bins: 5 temporal bins [PAGE 2-3].

RETROCAUSAL:
- Lineage: Vicon lab mo-cap [PAGE 1] -> SportVU optical tracking [PAGE 1] -> pose estimation from monocular video [PAGE 1, refs 14,15] -> attribute-based fine-grained analysis [PAGE 2, ref 16] -> POINTWISE expected value [PAGE 4, ref 8].
- Multi-week traps: single season 2015/16, single team Warriors, small labeled set, no inter-rater reliability, 3-second window may miss pre-shot movement patterns that develop over weeks, no game clock/shot clock interaction in attribute model.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under defensive pressure (tough shots), players freeze after missed shots (not move after landing) vs move after made shots [PAGE 7-8]. This is a habit regression under crisis.
- Counter-trap: defense learns Curry's off-balance, high-movement style and contests differently; Curry's style is an adaptation to defensive pressure.
- Clock: expected point value model uses time since last event and player velocities [PAGE 4], but shot clock not explicit. The temporal bins are relative to shot, not absolute game time.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: balance attribute overall [PAGE 3], off-balance vs balanced.
- Biomechanical layer: jump foot (left/right/both), landing foot, land foot stance vs torso, legs during fall [PAGE 3]. Single-foot landing + off-balance = veto for shot quality regardless of open classification.
- Weather: indoor arena, controlled; but court friction/shoe-surface interaction not modeled. Veto: if surface conditions unknown, biomechanical stability claims are unverifiable.
- Cross-layer veto: An open shot classified by SportVU trajectories can be vetoed by pose attributes showing off-balance recovery from poor pass [PAGE 1 Figure 1].

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Tough shot, right foot step just prior to shot (associated with made tough shots [PAGE 7]). Veto condition: defender closes out within 1.0 m during release. Prediction: miss probability increases; made shot vetoed.
- Scenario 2: Open shot, no movement prior to receiving pass, no pump fake, narrow stance (associated with made open shots [PAGE 7]). Veto condition: pass quality rated bad (too high/low/left/right). Prediction: made open shot vetoed to miss.
- Scenario 3: Curry off-balance, single-foot landing, legs split during fall (his signature [PAGE 9]). Veto condition: landing foot stance vs torso marked as "behind" or extreme separation > threshold. Prediction: miss.
- Each verifiable via broadcast video re-labeling.

Need to make sure no betting terms. "Probability of success" is fine, not odds. Avoid "spread", "total", "moneyline".

Let me write it out fully now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s causal chain operates across four abstraction layers: raw SportVU trajectories $(x,y)$ for players and $(x,y,z)$ for the ball [PAGE 1]; an expected-point-value logistic-regression classifier that converts spatial-temporal game context into a shot-success probability [PAGE 4]; a hard partition into “open” ($\hat p > 0.53$) and “tough” ($\hat p < 0.47$) shots, with the interval $[0.47, 0.53]$ left unclassified [PAGE 4]; and finally per-attribute Pearson Chi-squared tests in the resulting $2 \times 2$ contingency space of (tough/open) $\times$ (made/missed) [PAGE 5]. The multi-hop derivation is therefore: trajectory $\rightarrow$ context features (time since last event, player velocities, player-ball angles/distances) $\rightarrow$ classifier score $\rightarrow$ difficulty label $\rightarrow$ attribute distribution comparison.

A gray-zone audit reveals multiple breakdown regimes. First, Table 3 conducts $17 \times 4 = 68$ Chi-squared tests at $\alpha = 0.10$ [PAGE 5]. Under the global null, one expects roughly $6.8$ false positives; several reported p-values sit in the gray zone—$0.070$ (Move bin 3, tough made vs tough missed), $0.096$ (Set Foot Stance, open missed vs open made), $0.064$ (Direction bin 3, tough missed vs open missed)—and are therefore sensitive to multiple-comparison correction. Second, two attributes required category collapsing because of sparse cells: “all bad pass values combined” and “left and right jump feet into one single leg jump value” [PAGE 5]. When expected cell counts fall below five, the Chi-squared asymptotic approximation breaks down, invalidating the p-values for Jump Foot and Pass Quality. Third, attributes not visible in the three-second broadcast window around the SportVU time stamp were left unmarked [PAGE 3]; this missingness is not necessarily random, since rapid motion or occlusion systematically hides pose data precisely in high-velocity, high-difficulty shots. Fourth, direction attributes are egocentric [PAGE 3], so the coordinate frame rotates with the shooter, introducing frame-dependence into Direction distributions. Fifth, the labeled sample is restricted to roughly 1,500 three-point shots from 29 Golden State Warriors games in the 2015/16 season [PAGE 3], while the classifier trains on the remaining 53 Warriors games [PAGE 4]. The external validity is therefore bounded to one team, one season, and one optical-tracking vendor. Finally, the classifier itself is weak: Logistic Regression achieves mAP 57.1% [PAGE 4], meaning the open/tough labels inherit substantial label noise, which propagates into every downstream attribute test. The “freezing phenomenon” after tough misses [PAGE 7–8] may reflect a real post-shot behavioral regression, but it may equally be an artifact of the unclassified probability middle band and sparse-cell Chi-squared violations.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Pearson’s Chi-squared operator for attribute $a$ with $K$ categories:
$$\chi^2_a = \sum_{k=1}^{K} \frac{(O_{a,k} - E_{a,k})^2}{E_{a,k}}, \quad E_{a,k} = N \cdot p_{a,k},$$
where $O$ is observed count, $E$ is expected count under independence, $N$ is total shots in the comparison cell, and the statistic is dimensionless. Degrees of freedom $\text{dof} = (R-1)(C-1)$ are tabulated in Table 3 [PAGE 5]; the asymptotic regime requires $E_{a,k} \ge 5$ for all cells, a condition violated for Jump Foot and Pass Quality, which were collapsed [PAGE 5].

Logistic-regression expected-point-value operator:
$$P(y=\text{made}\mid X) = \sigma(\beta^\top X) = \frac{1}{1+e^{-\beta^\top X}}, \quad X \in \mathbb{R}^d,$$
where $X$ contains temporal features (time since last event: free throw, field goal, rebound, dribble, pass, possession, block, drive) and spatial features (player and ball $x,y$, angle and distance to ball, offense/defense ordering) [PAGE 4]. Output is a probability in $[0,1]$.

Open/tough partition thresholds [PAGE 4]:
$$\text{open} \iff \hat p > 0.53, \qquad \text{tough} \iff \hat p < 0.47, \qquad [0.47, 0.53] \text{ excluded.}$$

Exact p-values from Table 3 [PAGE 5], ordered (Tmi vs Tma, Omi vs Oma, Tmi vs Omi, Tma vs Oma): Balance 0.222 / 0.114 / 0.939 / 0.644; Move bin 1 0.202 / **0.004** / 0.195 / 0.328; Direction bin 1 0.483 / 0.454 / **0.034** / 0.201; Pass Quality $2^*$ dof 0.117 / 0.697 / **0.049** / 0.178; Pump Fake 0.325 / **0.020** / 0.423 / **0.048**; Dribble 0.161 / 0.329 / 0.315 / 0.153; Move bin 3 **0.070** / 0.297 / 0.253 / 0.721; Direction bin 3 0.101 / 0.212 / **0.064** / **0.013**; Turn 0.884 / 0.288 / 0.550 / 0.453; Footwork **0.016** / 0.420 / 0.265 / **3e-9**; Set Foot Stance 0.718 / **0.096** / 0.266 / 0.121; Jump Foot $1^*$ 0.318 / 0.268 / 0.422 / 0.338; Legs During Jump 0.213 / 0.741 / 0.698 / 0.637; Legs During Fall 0.559 / **0.024** / 0.803 / **0.008**; Landing Foot 0.297 / 0.769 / 0.906 / **0.006**; Land Foot Stance 0.731 / 0.353 / 0.103 / **0.003**; Move bin 5 **0.002** / 0.247 / 0.456 / **1e-6**. Boldface marks significance at $\alpha=0.10$ [PAGE 5].

Classifier performance [PAGE 4]: Random Chance mAP 50.0; Random Forest mAP 54.7; SVM mAP 51.5; Logistic Regression made AP 69.8, missed AP 44.3, mAP **57.1**. Labeled corpus: $\approx 1,500$ three-point shots, 29 Warriors games, 2015/16 regular season [PAGE 3]. Training corpus: remaining 53 Warriors games [PAGE 4]. Timeline bins: five phases (pre-possession, possession-pre-shot, immediate pre-shot, jump/release, post-landing) [PAGE 2–3]. Seventeen anatomy attributes catalogued in Table 1 [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The method’s historical lineage runs from controlled laboratory motion capture—Vicon reflective-marker arrays used in film production [PAGE 1, ref 13]—to the STATS SportVU optical-tracking revolution that supplied player $(x,y)$ and ball $(x,y,z)$ trajectories across five years of NBA games [PAGE 1, ref 1]. SportVU enabled court-spacing and rebound analytics [PAGE 1, refs 2–6] and team-movement prediction [PAGE 1, refs 7–12], but lacked body pose. The paper bridges this gap via monocular 2D pose estimation (Pose Machines [PAGE 1, ref 14]; Convolutional Pose Machines [PAGE 1, ref 15]) and fine-grained visual attributes [PAGE 2, ref 16]. The expected-point-value classifier descends from POINTWISE-style spatial-temporal valuation [PAGE 4, ref 8].

Multi-week traps specific to this dataset: (1) the labeled attribute set covers only one team (Warriors) in one season (2015/16), so any week-to-week defensive scheme adjustment within that window is confounded with team identity; (2) the three-second labeling window around the SportVU time stamp [PAGE 3] cannot capture movement patterns that develop across multiple possessions or weeks, such as fatigue-driven footwork degradation across a road trip; (3) inter-rater reliability among the basketball experts who built the attribute dictionary is unreported, so the mapping from broadcast video to attribute labels may drift across the labeling period; (4) the model excludes absolute game-clock and shot-clock state, using only relative time-since-last-event [PAGE 4], which means end-of-quarter crisis behavior is indistinguishable from early-game behavior if the five-second feature window looks identical.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under high defensive pressure (tough shots), players who miss exhibit a “freezing” habit—lower post-landing movement—whereas tough made shots are followed by more movement [PAGE 7–8]. This is a state-dependent motor regression: the crisis of a close-out triggers off-balance shooting, and the outcome (miss) reinforces a static post-shot pose. Conversely, open made shots show no freezing [PAGE 8], indicating the habit is contingent on perceived difficulty rather than outcome alone.

Counter-trap: Stephen Curry’s signature is recursive in the game-theoretic sense. He takes a higher proportion of off-balance shots, moves more than average in every shot phase, shoots off the dribble more than off the pass, and lands on a single foot more often [PAGE 9]. Defenses that learn this prior will over-close on his off-balance appearances; Curry’s counter-trap is to maintain high movement variance so that the defender cannot pre-position his own feet, turning the defender’s anticipation into a spacing error.

Clock: the expected-point-value model uses temporal features measured in the five seconds before the shot [PAGE 4], but the shot clock and game clock are not explicit covariates. Thus the model cannot distinguish a rushed end-of-shot-clock heave from a rhythm open look if the instantaneous player configuration is similar. This is a temporal aliasing trap: the same spatial configuration at different points in the clock carries different decision utility, yet the attribute model treats them as identical difficulty labels.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: SportVU trajectories classify an open, wide-open shooter as high-percentage [PAGE 1, Figure 1], but the broadcast pose layer reveals an off-balance shooter recovering from a poorly placed pass during a defender close-out [PAGE 1]. The pose attribute “Balance” (overall: balanced vs off-balance) [PAGE 3] can therefore veto a trajectory-based opportunity assessment.

Biomechanical layer: Table 1 enumerates Jump Foot (left/right/both), Landing Foot (left/right/both), Land Foot Stance vs Torso (aligned/behind/right/left/front), Legs During Fall (straight up/together/swing fwd/wide/separate/split), and Footwork (l. foot step/r. foot step/hop) [PAGE 3]. A shot that is spatially open but exhibits off-balance + single-foot landing + split legs during fall is biomechanically unstable. The significant Chi-squared results for Legs During Fall (tough missed vs tough made $p=0.008$; tough made vs open made $p=0.008$) [PAGE 5] and Land Foot Stance vs Torso (tough made vs open made $p=0.003$) [PAGE 5] quantify that foot-landing geometry separates made from missed within fixed difficulty. Therefore any open-shot classification made purely from $(x,y)$ trajectories is vetoed when the pose layer reports unstable landing mechanics.

Weather layer: NBA games occur indoors under climate control, so exogenous weather is negligible. However, shoe–court friction and arena humidity—unmeasured in SportVU—moderate landing stability and are not represented in the attribute schema. Until floor-traction data is synchronized with pose data, biomechanical veto claims carry an unquantified residual uncertainty: an off-balance landing on a slick surface has a different miss probability than the same pose on a dry surface, but the model cannot distinguish them.

Cross-layer adjudication rule: an opportunity is only treated as genuinely open when both (i) the logistic-regression context probability exceeds 0.53 [PAGE 4] and (ii) the pose attribute vector reports Balance = balanced and Landing mechanics consistent with stability. Otherwise, the trajectory signal is vetoed by the pose layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Tough shot with right-foot step prior to release. Table 3 reports that right-foot step just prior to the shot is more common in tough made than tough missed shots [PAGE 7]. Veto condition: the defender’s close-out radius at release is $<1.0$ m and the shooter’s Balance attribute is off-balance. Counterfactual prediction: the made-shot probability collapses below the tough-shot base rate; the right-foot step no longer predicts success because the biomechanical stability condition is violated. Verifiable by re-labeling broadcast video for defender distance and balance.

Scenario 2 — Open shot with no movement before receiving a pass, no pump fake, narrow set foot stance. Table 3 and Section 3.2 associate these with open made shots [PAGE 7]. Veto condition: Pass Quality is marked bad (too high/too low/too left/too right), which is significantly associated with open vs tough contexts ($p=0.049$ for Tmi vs Omi) [PAGE 5]. Counterfactual prediction: an open-shot classification is vetoed to a miss despite favorable spatial openness; poor pass quality forces balance compensation that the SportVU-only model cannot see. Verifiable by cross-referencing pass quality labels with shot outcome in the 29-game labeled set.

Scenario 3 — Stephen Curry off-balance, single-foot landing, legs split during fall. Curry’s idiosyncratic style shows higher off-balance proportion and single-foot landings than the league average [PAGE 9]. Veto condition: Land Foot Stance vs Torso is marked “behind” or “front” (misaligned with torso) combined with Legs During Fall = “split.” Counterfactual prediction: even when Curry’s spatial context is open and his classifier score is high, this landing configuration predicts a miss at a rate above the league average for open shots. Verifiable by comparing Figure 7 (Curry made vs missed, open vs tough) [PAGE 9] against holdout broadcast footage and checking whether all Curry misses in tough contexts contain the misaligned-landing veto pattern.
</RLVR_COUNTERFACTUAL_VETOES>