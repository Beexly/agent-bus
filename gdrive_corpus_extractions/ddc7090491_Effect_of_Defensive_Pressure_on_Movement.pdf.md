---
source: "Effect_of_Defensive_Pressure_on_Movement.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4478
---

<NATIVE_REASONING>
The user wants me to analyze a sports science paper about defensive pressure in basketball and produce a structured response with specific XML sections, each meeting certain criteria. Let me break down the requirements:

1. **ZERO BETTING LINES**: Never mention spreads, totals, moneylines, or odds.
2. **ZERO TOY EQUATIONS**: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. **>= 1,000-WORD DEPTH** across these exact XML sections:
   - `<THINK_TRACE>`: Deep multi-hop derivation & gray-zone audit (>=400 words).
   - `<SOURCE_OPERATORS_AND_EQUATIONS>`: Formal LaTeX, units, page citations, breakdown.
   - `<RETROCAUSAL_GENEALOGY>`: Historical/scientific lineage & multi-week traps.
   - `<RECURSIVE_THEORY_OF_MIND>`: Crisis habit regression vs counter-trap vs clock.
   - `<CROSS_LAYER_VETO_ADJUDICATION>`: Physical/biomechanical/weather veto proof.
   - `<RLVR_COUNTERFACTUAL_VETOES>`: 3 verifiable RLVR veto scenarios + predictions.

The paper: "Effect of Defensive Pressure on Movement Behaviour During an Under-18 Basketball Game" by Leite NM et al., Int J Sports Med, 2014.

Key details from the paper:
- 20 international male U18 basketball players (age M=16.05, SD=2.09 years; weekly practice M=10.9 SD=1.94 h; playing experience M=7.1 SD=1.1 years)
- Two 10-min quarters (actually simulated game of 4 quarters of 10 min each, but each team played 2 quarters)
- Defensive conditions: F¼ (first 4 min man-to-man ¼-court), FULL (next 3 min full court man-to-man), S¼ (last 3 min man-to-man ¼-court)
- Ubisense Real Time Location System, mean deviation M=0.09, SD=5.43%, sampling rate 3.74 Hz (SD=0.45), 6 base stations at ~5m height, covering 33×18 m area, UWB radio signals TDOA/AOA, Kalman + low pass filtering
- Team centroid = mean position of all 5 players
- Variables: distance to team/opponent centroid, distance between centroids, accumulated distance between oscillation movements, relative-phase in lateral/longitudinal displacements, ApEn
- ApEn: length=1.0 m, tolerance r=0.5, range 0-2, lower = more regular/predictable
- Relative-phase: Hilbert transform, 0° = in-phase/synchronous, 180° = anti-phase/asynchronous
- Repeated measures ANOVA, Mauchly's test, Greenhouse-Geisser, Bonferroni post-hoc, effect sizes (Cohen's d thresholds), Friedman test for eFG%, alpha=5%
- Results: FULL increased distance to centroids (3.7±0.3 vs 4.3±0.7 m to own centroid; 4.2±0.4 vs 4.8±0.8 m to opponent centroid), distance between centroids increased (1.8±0.1 vs 2.1±0.2 vs 2.2±0.2 m), ApEn for distance to basket decreased from F¼ to FULL (1.03±0.15 vs 0.91±0.22; 1.02±0.16 vs 0.92±0.22), no difference in eFG%
- Indoor wood floor 28m×15m, temperature 18-21°C, RH 45-55%, started 10:30h
- 15-min passive recovery between quarters for each team, time-outs at 4th and 7th minutes to switch defense

Now I need to write this in the required format without betting lines, without toy equations, with formal LaTeX, citations, and deep analysis.

Let me structure each section carefully.

**THINK_TRACE (>=400 words)**: Deep multi-hop derivation and gray-zone audit. I need to analyze the causal chain: defensive pressure → spatial dispersion → centroid dynamics → ApEn irregularity → decision-making constraints. I should audit gray zones: small sample (n=20, but only 4 teams, repeated measures), single game, simulated vs real, order effects not counterbalanced, ApEn parameter choices (m=2? actually not specified but r=0.5, length=1.0m), interpolation of UWB data (consecutive transmitters), fatigue confounded with defensive condition (FULL comes in middle of quarter, S¼ comes after accumulated workload), no physiological measures, eFG% normalized to 100 possessions/min but high variability. The "crisis habit regression" might relate to how under pressure teams revert to simpler coordination (in-phase) but lateral irregularity increases.

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX equations.
- Centroid: $\mathbf{C}_k(t) = \frac{1}{5}\sum_{i=1}^{5} \mathbf{x}_{i,k}(t)$ where $\mathbf{x} \in \mathbb{R}^2$, units meters.
- Distance to centroid: $d_{i,k}(t) = \|\mathbf{x}_{i,k}(t) - \mathbf{C}_k(t)\|_2$ [m]
- Distance between centroids: $D_{AB}(t) = \|\mathbf{C}_A(t) - \mathbf{B}(t)\|_2$ [m]
- ApEn: formal definition with embedding dimension m (not given in paper but standard ApEn), tolerance r=0.5 m, length=1.0 m (probably refers to filter or time series length? Paper says "values used to calculate ApEn were 1.0 for length (m) and 0.5 for tolerance (r)" - likely embedding dimension m=2? Actually "length" might mean something else. I should cite what paper says and note ambiguity as gray zone.)
- Relative phase via Hilbert transform: $\phi(t) = \angle \{ z_1(t) z_2^*(t) \}$ where $z = x + i\mathcal{H}[x]$, units degrees/radians, $0^\circ$ in-phase, $180^\circ$ anti-phase.
- ANOVA model: $Y_{ijk} = \mu + \alpha_i + \epsilon_{jk} + (\alpha\epsilon)_{ijk}$ etc.
- Cohen's d: $d = \frac{\bar{x}_1 - \bar{x}_2}{s_p}$
- Breakdown regimes: ApEn breaks down for short time series ($N < 10^m$ to $10^{m+1}$), sampling rate 3.74 Hz vs Nyquist for basketball movements, interpolation error when transmitters sequential, UWB error 5.43% SD.

**RETROCAUSAL_GENEALOGY**: Historical lineage. Pincus 1991 ApEn, Richman & Moorman 2000 sample entropy, dynamical systems in sport (Davids et al. 2003), Bourbousson et al. 2010 basketball space-time coordination, Sampaio & colleagues tactical behavior, Duarte et al. superorganisms, ecological dynamics (Araújo & Davids). Multi-week traps: fatigue accumulation across a week of training, defensive pressure effects changing over microcycles, order effects if not counterbalanced across weeks.

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock. This is more interpretive/theoretical. Under crisis (full-court pressure), players regress to habitual coupling (in-phase centroid attraction) but the offense tries to create irregularity (counter-trap). The clock: 24-second shot clock, 10-minute quarters, 4th/7th minute switches. How defenders model offense modeling defense.

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof.
- Physical: court 28×15 m, wood floor, indoor, temp 18-21°C, RH 45-55%. No weather veto because indoor.
- Biomechanical: UWB tags on head brackets, sampling 3.74 Hz may alias cutting movements (foot contact frequencies higher), head position vs center of mass offset.
- Veto conditions: if court dimensions change, if temperature/humidity outside range (but indoor controlled), if tag occlusion, if sampling rate < 2× movement frequency.

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable veto scenarios + predictions.
1. If ApEn tolerance r scaled to player height or court width rather than fixed 0.5 m, the FULL vs F¼ significance may vanish. Prediction: effect size Cohen's d drops below 0.60 (moderate threshold).
2. If sampling rate is increased to 10 Hz and head-tag offset modeled via rigid-body transform to CoM, the relative-phase in-phase attraction may attenuate or shift toward anti-phase in lateral direction. Prediction: mean relative-phase lateral > 20° deviation from 0°.
3. If physiological load (HR, blood lactate) is covariate-adjusted, the S¼ vs F¼ centroid distance increase (ES=2.60) may be mediated by fatigue rather than defensive system per se. Prediction: partial eta-squared for defensive condition drops from reported F(2,4)=6.9 to <0.06 when workload covariate included.

Word count: Need >=1000 words total across all sections, with THINK_TRACE >=400 words.

Let me draft carefully, ensuring no betting language. I will not mention odds, spreads, etc.

I need to include verbatim quotes with [PAGE N] markers. Let me identify good quotes:

[PAGE 1]: "The most frequent level of defensive pressure is the man-to-man ¼-court defence, where the defensive players only defend their direct opposing player when he is positioned in the offensive ¼-court"
[PAGE 1]: "20 international male players (age: M = 16.05, SD = 2.09 years old; weekly practice: M = 10.9, SD = 1.94 h; playing experience: M = 7.1, SD = 1.1 years)"
[PAGE 2]: "The data were collected during a simulated basketball game that was played during the competitive period of the season and that consisted of 4 quarters of 10 min each"
[PAGE 2]: "indoor official wood floor surface court (dimensions: 28 m by 15 m) and started at 10:30 h with optimal environmental conditions (temperature 18–21 °C, relative humidity 45–55 %)"
[PAGE 2]: "mean sampling rate of the position measurements was 3.74 (SD = 0.45) Hz per transmitter/player"
[PAGE 2]: "mean deviation of M = 0.09, SD = 5.43 %"
[PAGE 3]: "The values used to calculate ApEn were 1.0 for length (m) and 0.5 for tolerance (r)"
[PAGE 3]: "values close to 0 ° identify synchronous patterns of coordination (in-phase pattern) and values close to 180 ° identify asynchronous patterns of coordination (anti-phase pattern)"
[PAGE 3]: "lower values corresponding to more regular and predictable series"
[PAGE 4]: "The FULL defensive system increased the distance from the players to both team and opponents’ centroid."
[PAGE 4]: "after the FULL defensive system period, the players were able to restore their previous distances to team centroid, but not their distances to the opponents’ centroid."
[PAGE 5]: "In this sense, inducing low-to-moderate levels of fatigue to training drills may improve their representativeness."

Now let's write. I'll aim for rich, formal, detailed prose.

THINK_TRACE: I'll write about 500-600 words. Cover the causal chain, the confound between defensive condition and temporal position within quarter (FULL is minutes 4-7, S¼ is minutes 7-10 after workload), ApEn interpretation, centroid coupling, gray zones (sample size, single game, interpolation, no counterbalancing, no physiology), and the multi-hop derivation from pressure to behavior.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math with LaTeX. Units. Page citations. Breakdown regimes.

RETROCAUSAL_GENEALOGY: Historical lineage, multi-week traps.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Veto proof.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Total word count should exceed 1000. Let me ensure each section is substantial.

Let me write the final output now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal architecture can be reconstructed as a three-layer constraint cascade. Layer 1 is the task constraint: defensive pressure level (man-to-man ¼-court vs full-court man-to-man vs return to ¼-court) [PAGE 1]. Layer 2 is the emergent spatial configuration: inter-player distances, team centroids, and centroid-to-centroid separation [PAGE 2, PAGE 4]. Layer 3 is the informational-dynamic signature: approximate entropy (ApEn) of positional series and relative-phase of centroid oscillations [PAGE 3]. The multi-hop derivation runs as follows: increasing defensive pressure from ¼-court to full court forces defenders to cover greater court length, which mechanically increases the Euclidean distance between offensive and defensive players and between the two team centroids [PAGE 4, Table 1]. Because full-court defence occurs in minutes 4–7 of each 10-minute quarter, it is temporally confounded with accumulated activity workload; the subsequent return to ¼-court (minutes 7–10) tests whether spatial distortions persist after the pressure is removed [PAGE 2]. The results show that distance to own centroid and to opponents’ centroid is significantly higher in FULL than F¼, and that after FULL, distance to own centroid restores but distance to opponents’ centroid does not, producing a lasting increase in centroid-to-centroid separation from F¼ to S¼ [PAGE 4, Table 1]. This indicates hysteresis: the defensive perturbation leaves a spatial after-effect not fully reversed within the same quarter.

Gray-zone audit. (1) Sample and design: 20 players organized into 4 teams; each team plays only 2 quarters, so the repeated-measures ANOVA has limited independent units despite the F(2,38) and F(2,4) degrees of freedom reported [PAGE 2, PAGE 4]. The design is explicitly not counterbalanced because coaching interest favored a fixed order (F¼ → FULL → S¼) [PAGE 2], creating an order/workload confound that cannot be statistically separated from the defensive-system effect. (2) Measurement chain: UWB tags are worn on brackets atop the head, not at the center of mass [PAGE 2]. Head position is a proxy for whole-body CoM; during rapid decelerations, cuts, and jumps, head–CoM offset introduces biomechanical noise that the Kalman + low-pass filter may not fully remove [PAGE 2]. Furthermore, the Ubisense system provides positional data for transmitters consecutively, requiring interpolation to obtain synchronous x–y pairs [PAGE 2]; interpolation at a mean sampling rate of 3.74 Hz (SD = 0.45 Hz) risks aliasing higher-frequency basketball movements (plant-and-cut, jump-land transients) [PAGE 2]. The reported system deviation (mean M = 0.09, SD = 5.43 %) is non-trivial relative to the observed centroid-to-centroid differences (~0.3–0.4 m) [PAGE 2, Table 1]. (3) ApEn parameter opacity: the paper states length = 1.0 m and tolerance r = 0.5, but does not explicitly report embedding dimension m or series length N [PAGE 3]. ApEn is known to be biased downward for short records and sensitive to r relative to the standard deviation of the series [PACE 3 references Pincus 1991 and Richman & Moorman 2000]; without reporting N and m, the comparability of ApEn across variables and conditions is a gray zone. (4) Physiological omission: workload is inferred from time position within the quarter and defensive condition, but no heart rate, lactate, or RPE was collected [PAGE 5], so the claim that "increased workload might have positive effects" remains speculative. (5) Ecological validity: the game is simulated, indoors on wood (28 m × 15 m), 18–21 °C, 45–55 % RH, with referees and time-outs at minutes 4 and 7 [PAGE 2]; this controls weather but sacrifices the stochasticity of competition, meaning the observed "collective behaviour" may not transfer to elite 40-minute games with crowd and travel stressors.

The theoretical implication is that defensive pressure acts as a symmetry-breaking constraint: it increases lateral irregularity (the main contributor to unsettling the opponent) while producing stronger in-phase attraction of team centroids in both lateral and longitudinal directions [PAGE 4, PAGE 5]. Offensive creativity is operationalized as unpredictability (higher ApEn) relative to fixed informational constraints (baskets) and dynamic constraints (centroids) [PAGE 5]. However, because no betting-relevant performance metric (effective field goal percentage) showed a defensive-system difference despite medium-to-large spatial effect sizes (Cohen’s d up to 2.60 for centroid separation), the paper supports a dissociation between tactical positioning and shooting outcome under short-duration simulated pressure [PAGE 4, Table 1]. This dissociation is the critical gray zone: spatial reorganization under pressure does not, in this sample, translate into measurable scoring efficiency within 10-minute quarters.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, SI/information units, assumptions, and breakdown regimes.

Define player position for team $k \in \{A,B,C,D\}$, player $i \in \{1,\dots,5\}$, at time $t$ as $\mathbf{x}_{i,k}(t) = [x_{i,k}(t), y_{i,k}(t)]^\top \in \mathbb{R}^2$, units metres (m), sampled by the Ubisense UWB TDOA/AOA system at mean rate $f_s = 3.74$ Hz (SD = 0.45 Hz) [PAGE 2]. Base stations: six, mounted ~5 m height around the court, covering approximately $33\,\text{m} \times 18\,\text{m}$ [PAGE 2].

Team centroid operator:
$$
\mathbf{C}_k(t) = \frac{1}{5}\sum_{i=1}^{5}\mathbf{x}_{i,k}(t), \quad [\mathbf{C}_k] = \text{m}.
$$

Player-to-centroid distance:
$$
d_{i,k}(t) = \left\|\mathbf{x}_{i,k}(t) - \mathbf{C}_k(t)\right\|_2, \quad [d] = \text{m}.
$$

Inter-centroid distance:
$$
D_{AB}(t) = \left\|\mathbf{C}_A(t) - \mathbf{C}_B(t)\right\|_2, \quad [D_{AB}] = \text{m}.
$$

Reported descriptive statistics (means $\pm$ SD, metres) from Table 1 [PAGE 4]:
- Distance to own centroid: $F\frac{1}{4}: 3.7 \pm 0.3$; FULL: $4.3 \pm 0.7$; S$\frac{1}{4}: 3.9 \pm 0.4$.
- Distance to opponents’ centroid: $F\frac{1}{4}: 4.2 \pm 0.4$; FULL: $4.8 \pm 0.8$; S$\frac{1}{4}: 4.5 \pm 0.5$.
- Distance between centroids: $F\frac{1}{4}: 1.8 \pm 0.1$; FULL: $2.1 \pm 0.2$; S$\frac{1}{4}: 2.2 \pm 0.2$.

Approximate entropy (ApEn), units arbitrary (a.u.), range $[0,2]$, lower = more regular/predictable [PAGE 3]. The paper states tolerance $r = 0.5$ and “length” $= 1.0$ m [PAGE 3]; embedding dimension $m$ and record length $N$ are not explicitly reported, which is a breakdown-regime gray zone because ApEn bias scales with $N$ relative to $10^m$–$10^{m+1}$ [PAGE 3 references 29,30]. Standard ApEn operator for scalar series $u(1),\dots,u(N)$:
$$
\phi^m(r) = \frac{1}{N-m+1}\sum_{i=1}^{N-m+1} \ln C_i^m(r), \quad
\operatorname{ApEn}(m,r,N) = \phi^m(r) - \phi^{m+1}(r).
$$
Assumption: series are stationary over the defensive block; breakdown if non-stationarity from workload drift within the 3–4 minute blocks dominates the tolerance scale $r$.

Relative-phase operator via Hilbert transform [PAGE 3]. For analytic signal $z_j(t) = x_j(t) + i\,\mathcal{H}[x_j](t)$:
$$
\phi_{12}(t) = \angle\!\left\{ z_1(t)\,z_2^*(t) \right\}, \quad [\phi_{12}] = \text{degrees} \,[^\circ].
$$
Interpretation from source: values near $0^\circ$ = in-phase synchronous coordination; values near $180^\circ$ = anti-phase asynchronous coordination [PAGE 3]. Stronger in-phase attraction in lateral and longitudinal directions was identified for all defensive systems [PAGE 4].

Repeated-measures ANOVA model:
$$
Y_{ijk} = \mu + \alpha_i + \pi_j + (\alpha\pi)_{ij} + \epsilon_{ijk},
$$
where $\alpha_i$ is defensive system ($i=1,2,3$), $\pi_j$ is participant/team, sphericity assessed by Mauchly’s test with Greenhouse–Geisser correction when violated, Bonferroni post-hoc pairwise comparisons [PAGE 3]. Effect size thresholds (Cohen’s d): $<0.20$ trivial; $0.20$–$0.59$ small; $0.60$–$1.19$ moderate; $1.20$–$2.00$ large; $>2.00$ very large [PAGE 3]. Reported statistics: distance to centroid $F(2,38) = 14.1, p < 0.001$; distance to opponents’ centroid $F(2,38) = 9.8, p < 0.001$; distance between centroids $F(2,4) = 6.9, p = 0.006$; ApEn distance to basket $F(2,38) = 3.8, p = 0.026$; ApEn distance to opponents’ basket $F(2,38) = 3.3, p = 0.042$ [PAGE 4]. Alpha maintained at 5 % [PAGE 3].

Breakdown regimes:
1. UWB sequential transmission + interpolation: if true inter-player event frequency exceeds $f_s/2 \approx 1.87$ Hz, aliasing occurs; basketball cuts and rebounds can exceed this, so phase estimates near $0^\circ$/$180^\circ$ may be attenuated [PAGE 2].
2. ApEn: breaks down for $N < \sim 10^m$ to $10^{m+1}$ or if $r$ is not scaled to series standard deviation; fixed $r=0.5$ m may be inappropriate across variables with different variances (e.g., centroid distance vs basket distance) [PAGE 3].
3. Environmental envelope: indoor wood floor, $18$–$21$ °C, RH $45$–$55$ % [PAGE 2]; outside this envelope (e.g., outdoor wind, temperature drift), the ecological-constraints interpretation is invalid because the paper’s results are bounded to these controlled conditions.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The paper sits inside the ecological-dynamics and dynamical-systems tradition in team-sports performance analysis. Its intellectual ancestry runs through Davids, Glazier, Araújo, and Bartlett (2003), who framed movement systems as dynamical systems and argued that variability has a functional role in sports medicine [PAGE 1, ref 6; PAGE 5, ref 6]. Approximate entropy enters via Pincus (1991) as a measure of system complexity [PAGE 3, ref 29] and Richman & Moorman (2000) for physiological time-series analysis [PAGE 3, ref 30], both cited for the proposition that lower ApEn means more regular, predictable movement variation [PAGE 3]. Relative-phase coordination is grounded in Schmidt & Lee’s motor-control tradition [PAGE 3, ref 36] and operationalized in sport via Palut & Zanone’s dynamical analysis of tennis [PAGE 3, ref 27] and the Hilbert-transform approach common in coordination dynamics.

The basketball-specific lineage is dense. Bourbousson, Sève, and McGarry (2010, Parts 1 and 2) established intra- and inter-coupling among player dyads and the interaction between two teams in basketball space-time coordination [PAGE 1, refs 3–4; PAGE 5, refs 3–4]. Sampaio and colleagues form the immediate methodological core: measuring tactical behaviour in football [PAGE 3, ref 35], exploring basketball tactical performance under activity workload [PAGE 5, ref 31], and examining pacing/status/unbalance in small-sided football [PAGE 5, ref 34]. Duarte et al. (2012) conceptualize sports teams as superorganisms, which supports the paper’s claim that players’ decisions are influenced more by nearest teammates than direct opponents, allowing self-organized collective movement solutions [PAGE 5, ref 7]. The fixed informational constraint (basket) and dynamic informational constraint (team centroid) language echoes Passos et al. (2006) on interpersonal dynamics and Travassos et al. (2012) on spatiotemporal coordination guided by informational constraints [PAGE 5, refs 28, 38].

Multi-week traps. Because the data come from a single simulated game during the competitive period [PAGE 2], extending these results across a microcycle or mesocycle is a trap: defensive-pressure effects are likely state-dependent on accumulated weekly load (the players practice 10.9 h/week on average [PAGE 1]), so the FULL-condition spatial dispersion observed in minutes 4–7 of a quarter may magnify or attenuate across a week of training depending on fatigue phase. The paper itself notes that physiological variables were not measured and should be added for a holistic overview [PAGE 5]. A second trap is order confound: because quarters were not counterbalanced (fixed F¼ → FULL → S¼ sequence) [PAGE 2], repeating this sequence across multiple weeks risks embedding a systematic fatigue-by-condition interaction that looks like a defensive-system effect but is actually a time-on-task effect. A third trap is the small-N, single-team-set generalization: 20 Austrian U18 national-team players from different junior clubs [PAGE 2] may not represent the centroid-coupling and ApEn signatures of senior elite teams, where game pace, possession length, and defensive switching differ materially.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. Under full-court defensive pressure (FULL), the system regresses toward a lower-dimensional, more stable coordination mode: stronger in-phase attraction of team centroids in lateral and longitudinal directions [PAGE 4], and reduced ApEn irregularity in distance-to-basket variables from F¼ to FULL [PAGE 4, Table 1]. This is the “crisis habit”: when the defensive constraint intensifies, both teams couple their centroid motions more tightly, presumably to protect the basket and rebound area and to stop penetrations [PAGE 5]. The regression is functional in the short run—it reduces degrees of freedom under threat—but it produces a spatial after-effect: centroids remain farther apart after returning to ¼-court, and opponents’ centroid distance does not restore [PAGE 4].

Counter-trap. The offense counters this regression by generating irregularity: lateral displacements show higher ApEn for all defensive systems [PAGE 4], and attacking players are stimulated to develop “irregular and creative spatiotemporal synchrony” with defenders to impair defensive performance [PAGE 5]. The counter-trap is recursive: the offense models the defender’s regression toward in-phase stability and injects lateral variability to break symmetry and increase the angle to goal [PAGE 5]. However, effective field goal percentage did not differ across defensive systems (F¼ 10.9 ± 2.2 %, FULL 11.9 ± 7.8 %, S¼ 16.6 ± 7.5 %) despite rising variance [PAGE 4, Table 1], suggesting the counter-trap did not convert spatial irregularity into scoring efficiency within this 10-minute window. The lack of scoring difference implies that the offensive recursion was neutralized or that the 24-second possession constraint (mentioned in the introduction as being consumed by full-court pressure [PAGE 1]) truncated the time needed for the irregularity to pay off.

Clock. Multiple temporal layers govern the recursion. The defensive blocks are 4 minutes (F¼), 3 minutes (FULL), 3 minutes (S¼) [PAGE 2]. Time-outs at minutes 4 and 7 switch the defensive system [PAGE 2]. The shot clock is 24 seconds, explicitly referenced as the target that full-court defence aims to consume [PAGE 1]. Game pace is normalized to 100 ball possessions per minute to allow comparison [PAGE 2]. The crisis habit therefore operates inside a bounded clock: if the offensive counter-trap requires more than one or two possessions to destabilize a regressed defence, the clock (quarter end, 24-second limit, time-out switch) cuts the recursion short, leaving spatial reorganization without a scoring signature. This is the critical multi-loop failure: defensive pressure changes collective movement behaviour within the quarter, but the clock prevents that behaviour from propagating into outcome variance in the simulated game.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer (court and environment). The game is played indoors on an official wood floor, dimensions 28 m × 15 m [PAGE 2]. Environmental conditions are controlled: 18–21 °C, relative humidity 45–55 %, start time 10:30 h [PAGE 2]. Veto: any condition outside this envelope—outdoor wind, precipitation, temperature outside 18–21 °C, non-wood surface—invalidates direct generalization because the centroid and ApEn signatures were derived under these specific physical constraints [PAGE 2]. No weather veto is active *within* the study because it is indoors, but extrapolation to outdoor or uncontrolled venues is vetoed.

Biomechanical and measurement layer. Tags are worn on brackets atop the head [PAGE 2], sampling at 3.74 Hz (SD 0.45 Hz), with system deviation mean 0.09 m, SD 5.43 % [PAGE 2]. Veto conditions: (a) if movement events (plant-and-cut, jump landing, body contact) generate frequencies above ~1.87 Hz (Nyquist for the mean sampling rate), head-tag position aliases CoM trajectory and relative-phase estimates near 0°/180° are unreliable [PAGE 2]; (b) if head–CoM offset during vertical acceleration is not modelled, the centroid operator $\mathbf{C}_k(t)$ is biased by several decimetres, which is material relative to the observed inter-centroid differences of ~0.3–0.4 m [PAGE 4, Table 1]; (c) if UWB occlusion or base-station geometry changes (six stations ~5 m height, 33 × 18 m coverage [PAGE 2]), interpolation error from consecutive-transmitter sequencing introduces synchronous-pair bias [PAGE 2]. The reported ApEn tolerance r = 0.5 m [PAGE 3] is comparable in magnitude to the UWB error SD (5.43 % of typical distances ~4 m ≈ 0.22 m, but potentially larger near basket distances ~13–14 m ≈ 0.7–0.8 m), so ApEn near basket variables may be dominated by sensor noise rather than behavioural irregularity [PAGE 2, Table 1].

Statistical veto. Sphericity violations corrected via Greenhouse–Geisser [PAGE 3]; if the correction fails (epsilon near lower bound), the F(2,38) and F(2,4) statistics for centroid distances are not trustworthy. Effect sizes with confidence intervals show distance-to-centroid Cohen’s d 1.14 (F¼ vs FULL) and distance-between-centroids d 2.60 (F¼ vs S¼) [PAGE 4, Table 1]; these large effects survive the veto screen only if the measurement and sphericity assumptions hold.

Weather veto summary: because temperature and humidity are held at 18–21 °C and 45–55 % RH indoors [PAGE 2], there is no in-study weather variation to adjudicate; however, any external application to games played outside these bounds is vetoed unless the environmental constraint is re-parameterized.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Veto scenario 1 (ApEn tolerance rescaling). Replace the fixed tolerance r = 0.5 m [PAGE 3] with a subject- or court-scaled tolerance $r_k = 0.05 \times H_k$ (5 % of player height, mean 183.10 cm → r ≈ 0.92 m [PAGE 2]) or $r = 0.5\% \times$ court width (28 m → r = 0.14 m), keeping embedding dimension and N constant. Recompute ApEn for distance-to-basket and distance-to-opponents’-centroid across F¼, FULL, S¼. Verification: run repeated-measures ANOVA on the rescaled ApEn series. Prediction: the F¼ vs FULL ApEn reductions for distance to basket (ES d = 0.64 [PAGE 4, Table 1]) and distance to opponents’ basket (ES d = 0.53 [PAGE 4, Table 1]) fall below the moderate threshold (d < 0.60), and the corresponding F-statistics cease to be significant at alpha = 5 % because the fixed 0.5 m tolerance was artificially compressing irregularity in the FULL condition.

Veto scenario 2 (sampling-rate and CoM offset correction). Increase the position sampling rate from 3.74 Hz to ≥ 20 Hz and apply a rigid-body head-to-center-of-mass transform using anthropometric segment parameters, removing interpolation from consecutive-transmitter sequencing [PAGE 2]. Recompute relative-phase via Hilbert transform [PAGE 3] for lateral centroid oscillations. Verification: compare mean lateral relative-phase and its circular variance across F¼, FULL, S¼ against the reported in-phase attraction near 0° [PAGE 4]. Prediction: with ≥ 20 Hz sampling and CoM correction, the lateral relative-phase mean shifts away from 0° by more than 10° (toward anti-phase or quasi-phase), and the reported “stronger in-phase attraction in both lateral and longitudinal directions” [PAGE 4] is attenuated specifically in the lateral direction, because the original 3.74 Hz head-tag measurement aliased cutting transients that contribute to lateral irregularity.

Veto scenario 3 (physiological workload covariate). Collect heart rate (HR, bpm) and blood lactate (mmol/L) or session-RPE (AU) during each defensive block and include workload as a time-varying covariate in the ANOVA for distance between centroids [PAGE 2, Table 1]. Verification: compare partial eta-squared for the defensive-system factor before and after covariate adjustment; the unadjusted F(2,4) = 6.9, p = 0.006, ES d = 2.60 between F¼ and S¼ [PAGE 4]. Prediction: after workload covariate adjustment, the defensive-system effect on centroid separation drops by at least 40 % (partial eta-squared reduced from the unadjusted value to below the small-effect benchmark), indicating that the S¼ vs F¼ centroid-distance increase is mediated by accumulated fatigue rather than by the defensive-system manipulation per se; the paper’s own caveat that physiological variables should be considered [PAGE 5] is thereby confirmed as a necessary veto condition.
</RLVR_COUNTERFACTUAL_VETOES>