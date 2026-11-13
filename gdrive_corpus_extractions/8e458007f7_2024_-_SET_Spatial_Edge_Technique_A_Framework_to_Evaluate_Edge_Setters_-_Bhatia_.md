---
source: "2024 - SET Spatial Edge Technique A Framework to Evaluate Edge Setters - Bhatia et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Wharton Sports Analytics Journal/2024"
pages: 13
model: baidu/ernie-5.5-flash-preview:free
words: 4613
---

<NATIVE_REASONING>
The user wants a deep analysis of this paper using the specified XML section format. Let me first understand what's being asked.

The instructions require:
1. Zero betting lines - never mention spreads, totals, moneylines, odds
2. Zero toy equations - only formal LaTeX equations with SI/information/probability units, assumptions, exact breakdown regimes, cite exact [PAGE N] markers and verbatim quotes
3. >= 1,000 word depth across exact XML sections:
- THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit
- SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown
- RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock
- CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof
- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions

This is a legitimate academic analysis task. The paper is a real sports analytics paper about "Spatial Edge Technique (SET)" for evaluating edge setters in the NFL. There's nothing harmful here. Let me do a genuine, rigorous analysis.

Let me extract the actual mathematical/technical content from the paper:

1. **Runner intention projection** (PAGE 4-5): Project velocity vectors from behind the line of scrimmage forward for 0.5 seconds. "Where would the runner end up if they continued at this speed and direction for half a second more?" If any endpoints land outside the extended tackle box, assume intention to run outside.

2. **Bivariate distribution model / PDF** (PAGE 5-6): Built off Bornn & Fernandez (2018) and Inayatali, White, Hocevar (2023). Uses runner's speed and direction to model runner's location 0.5 seconds in the future. Probability density function.

3. **Voronoi regions** (PAGE 6-7): Geometric tool that splits field into sections based on proximity to nearest player. The angle of the bisector between regions represents blocking leverage. Shoelace algorithm to calculate area.

4. **Overlap metric** (PAGE 7): Percentage of overlap between runner's PDF and defender's Voronoi region = extent to which edge setter places himself in correct position. Number between 0 and 1 per frame.

5. **Direction change** (PAGE 8-9): 
- Making the tackle = value 1
- Losing the edge = value 0
- Failed attempt if runner's direction shifts outside after encountering edge setter
- If edge defender forces runner inside: relative value between 0 and 1, representing extent runner's angle changes in five frames, standardized by 90°. Example: 45° inside angle displacement five frames to future = 0.5 (45/90). 90° is complete side-to-side change.

6. **SET Final Composition** (PAGE 9): Both scores added and divided by two for final frame score. Frame scores added at end of play.

Now let me construct the formal equations.

**Runner velocity projection:**
$$\mathbf{x}_{\text{proj}} = \mathbf{x}_0 + \mathbf{v}(t_0) \cdot \Delta t, \quad \Delta t = 0.5\,\text{s}$$
where $\mathbf{v}(t_0) = s_0 (\cos\theta_0, \sin\theta_0)$, $s_0$ in m/s, $\theta_0$ in radians.

**Bivariate distribution (PDF):** Model runner's future location as a 2D Gaussian:
$$f(\mathbf{x}) = \frac{1}{2\pi\sqrt{|\Sigma|}} \exp\left(-\frac{1}{2}(\mathbf{x} - \boldsymbol{\mu})^\top \Sigma^{-1} (\mathbf{x} - \boldsymbol{\mu})\right)$$
where $\boldsymbol{\mu} = \mathbf{x}_0 + \mathbf{v}\Delta t$ (units: meters, in field coordinate frame), $\Sigma$ is the 2×2 covariance matrix (units: m²) encoding directional uncertainty. The paper doesn't specify the covariance construction, which is a gray zone.

**Voronoi region:** For defender $i$ at position $\mathbf{p}_i$:
$$V_i = \{\mathbf{x} \in \mathbb{R}^2 : \|\mathbf{x} - \mathbf{p}_i\| \le \|\mathbf{x} - \mathbf{p}_j\| \;\forall j \ne i\}$$
The bisector between two players $\mathbf{p}_i, \mathbf{p}_j$ is the perpendicular bisector (leverage line).

**Shoelace formula for area:** For polygon with vertices $(x_1, y_1), ..., (x_n, y_n)$:
$$A = \frac{1}{2}\left|\sum_{k=1}^{n}(x_k y_{k+1} - x_{k+1} y_k)\right|$$
Units: m² (assuming field coordinates in meters).

**Overlap / spatial control score:**
$$S_1(\text{frame}) = \frac{\int_{V_i \cap \text{field}} f(\mathbf{x})\, d\mathbf{x}}{\int_{\text{field}} f(\mathbf{x})\, d\mathbf{x}} \in [0, 1]$$
This is the probability mass of the runner's PDF that falls within the defender's Voronoi region. This is elegant because it's naturally normalized — the PDF integrates to 1 over the field (assuming the Gaussian is truncated/renormalized to the field).

**Directional score (Question 2):**
$$S_2(\text{frame}) = \begin{cases} 1 & \text{if tackle made} \\ 0 & \text{if runner shifts outside (lost edge)} \\ \min\left(\frac{|\Delta\theta|}{90°}, 1\right) & \text{if forced inside} \end{cases}$$
where $\Delta\theta$ is the angle change over 5 frames, measured as an inside displacement, in degrees. Units: degrees, dimensionless ratio after division.

Actually let me be careful. The angle change over 5 frames. $\Delta\theta = \theta_{t+5} - \theta_t$. Units: radians/degrees. Standardized by 90° = π/2 rad.

**SET composition:**
$$\text{SET}_{\text{frame}} = \frac{S_1 + S_2}{2}$$
$$\text{SET}_{\text{play}} = \sum_{\text{frames}} \text{SET}_{\text{frame}}$$
Units: dimensionless (per frame), summed to a dimensionless play total (or "frame·unit").

Now the breakdown/singularity regimes:
- $S_1$ is undefined when $f(\mathbf{x})$ is degenerate (Σ singular, e.g., runner at rest, v=0 → no motion → covariance collapses). If $s_0 = 0$, the velocity projection is zero and the bivariate model degenerates to a Dirac delta at $\mathbf{x}_0$.
- Voronoi is undefined at ties (equidistant points) — measure-zero set but numerically relevant on the bisector itself.
- $S_2$: when $\Delta\theta$ measured, if runner's velocity is zero, angle is undefined (no direction vector). Division by 90° is safe (constant), but the sign/orientation convention (inside vs outside) needs a reference — the paper uses "inside" relative to the field, which requires defining the inside direction per gap.

Let me now think about the multi-week traps. The paper uses 9 weeks of 2022 data (PAGE 12). The "multi-week traps" — this refers to temporal validity issues: season-long form vs single-week, injury, scheme changes, opponent adjustments.

The "clock" in RECURSIVE_THEORY_OF_MIND — this is about game clock / down-and-distance context. Run-probable scenarios. The 0.5s projection and 5-frame windows are the temporal "clocks" of the model.

Let me think about weather. Edge setting is a run-defense phenomenon. Weather affects run vs pass balance (rain/snow/wind → more running). Cold affects footing (traction for edge defenders). Wind affects... not much for run. Field surface (grass vs turf) affects traction and cut.

Biomechanical veto: Edge setting requires lateral agility, backpedal-to-drive transition, hand usage. A defender's body type matters. A player who wins SET via positioning (like Judon described) vs via physical block-winnning. The model rewards positioning even without winning the block.

Let me now think about the retro-causal genealogy — the historical/scientific lineage:
- Voronoi diagrams: Georgy Voronoi (1908), used in many spatial analysis contexts.
- Spatial control in sports: Bornn & Fernandez (2018) "Principal Convex Hulls" / convex hull models of space control in soccer.
- ESPN run-stop win rate.
- Expected Possession Value, expected points.
- The shoelace formula (Gauss's area formula), attributed to Gauss, also Meister.
- Tracking data revolution (NFL Next Gen Stats / Big Data Bowl).
- The paper cites Inayatali, White, Hocevar (2023).

Multi-week traps: 2022 season, 9 weeks. Week 7 highlighted (Lions vs Cowboys). Player rankings by SET percentile over first 9 weeks. Trap: small sample of edge-setting opportunities per player per week; regression to the mean; ranking instability across weeks.

Now RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock."
- Crisis habit regression: when a team is losing or in a "crisis" (trailing, must stop the run), do they change edge-setting behavior? Do edge defenders regress to habits (over-pursue, gamble) under pressure?
- Counter-trap: offenses counter by running away from the strong edge setter, or using misdirection, or the "spill" technique (PAGE 12).
- Clock: game script / time pressure. Run-probable scenarios near end of half.

Let me think about the "counter-trap" more carefully. The paper acknowledges (PAGE 12) the "spill" technique where a defender deliberately slashes inside to open outside contain for another linebacker — the model may erroneously flag the DE as the edge setter. This is a known technique (spill vs force). Also the offense counter: if a defense has a great edge setter on one side, the offense runs to the other side or uses the backside. This is a game-theoretic counter.

RLVR (Reinforcement Learning from Verifiable Rewards) counterfactual vetoes — 3 verifiable scenarios + predictions. This is asking me to construct falsifiable predictions from the model that can be checked against data.

Let me construct 3:
1. **Positioning-without-disruption prediction:** Players high in SET-position (S1) but low in tackle production should exist and be identifiable (e.g., Judon example). Verifiable: find players whose S1 percentile >> their traditional tackle stats. Prediction: such players exist and rank high in SET.

2. **Inside-force directionality prediction:** On plays where SET forces inside, the runner's average yards-per-carry should be lower than on plays where the edge is lost. Verifiable with EPA/RYOC data. Prediction: negative correlation between SET S2 and rushing EPA allowed on that side.

3. **Multi-week stability prediction:** SET percentile rankings should be more stable week-over-week than single-game tackle stats but less stable than a full-season aggregate (regression). Verifiable: compute week-over-week rank correlation. Prediction: moderate positive autocorrelation that increases with sample size.

Actually, let me make the vetoes sharper — "veto" meaning a scenario where the model's claim could be falsified.

Let me now write the full analysis. I need >= 1000 words across the six sections. Let me be rigorous and cite pages/verbatim quotes.

Let me make sure I follow the constraints:
- No betting lines ✓ (I won't mention odds/spreads)
- No toy equations — only formal LaTeX with units, assumptions, breakdown ✓
- Cite exact [PAGE N] and verbatim quotes ✓
- Word depth ✓

Let me write it now. I'll aim for substantial depth in each section.

Let me draft each section carefully.

For THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I'll trace the derivation of the metric from raw tracking data to final grade, and audit the gray zones (covariance construction unspecified, inside/outside sign convention, frame sampling rate, Voronoi ties, Gaussian renormalization to field bounds).

Let me write.

Actually, I should note the paper says "standardized by 90°" and "45/90 = 0.5" — so the angle is in degrees. And 5 frames — NFL tracking data is 10 Hz (Next Gen Stats), so 5 frames = 0.5 seconds. Interesting — that ties the "0.5 seconds" projection and the "5 frames" together. Both 0.5s. That's a nice multi-hop observation. At 10 fps, 0.5s = 5 frames. This is a gray zone worth noting — is the frame rate 10 Hz? NFL NGS is 10 Hz (some is 100 Hz for ball). Actually the NFL Big Data Bowl tracking data is 10 frames per second. So 5 frames = 0.5s. Good.

Let me verify: NFL Next Gen Stats / Big Data Bowl player tracking is 10 Hz. Yes. So 0.5s projection = 5 frames. The paper uses both "0.5 seconds" (PAGE 4, 5) and "five frames" (PAGE 9) — likely the same temporal horizon. This is a strong internal consistency observation.

Let me write the equations with proper SI units.

Coordinate frame: NFL field is 120 yards long (100 yards playing + 2×10 end zones) × 53.33 yards wide. Tracking data typically in yards or feet. Let me use meters (SI) but note the source likely uses yards/feet. 1 yard = 0.9144 m.

Let me write.

For the covariance / bivariate PDF — Bornn & Fernandez (2018) is "Principal Convex Hulls: A New Approach to Field Position Estimation" or their space-control work. Actually Fernández & Bornn (2018) "Novel presentations of soccer analytics" / "Playing on the same team" — they developed convex hull / Voronoi-based pitch control. Let me be careful not to over-claim the exact reference. The paper cites "Bornn & Fernandez (2018)". I'll reference it as cited.

Inayatali, White, Hocevar (2023) — I don't have exact details; I'll treat as cited.

Let me write the whole thing now. I'll be thorough.

I want to make sure the math is genuinely formal and correct.

Bivariate Gaussian PDF with full covariance:
$$f(\mathbf{x}) = \frac{1}{2\pi |\Sigma|^{1/2}} \exp\left(-\tfrac{1}{2}(\mathbf{x}-\boldsymbol\mu)^\top \Sigma^{-1}(\mathbf{x}-\boldsymbol\mu)\right)$$

with units: $\mathbf{x}, \boldsymbol\mu$ in m; $\Sigma$ in m²; $f$ in m⁻² (so it integrates to dimensionless 1 over area in m²). Good.

Marginal along direction of travel vs perpendicular — could decompose Σ into along-track σ_∥² and cross-track σ_⊥². This matters because a runner's future position uncertainty is larger along the direction of motion (speed varies) than perpendicular (direction more stable over 0.5s). Gray zone: paper doesn't specify.

Voronoi: Euclidean metric assumed. Could be anisotropic (weighted by speed) but paper uses standard proximity.

Overlap:
$$S_1 = \iint_{V_i} f(\mathbf{x})\,dA$$
assuming $f$ normalized over the field. If the full Gaussian tail extends beyond the field, either renormalize over the field polygon $\mathcal{F}$: $S_1 = \frac{\iint_{V_i \cap \mathcal F} f\,dA}{\iint_{\mathcal F} f\,dA}$. Breakdown: if runner near boundary, mass leaks out of field.

$S_1 \in [0,1]$, dimensionless (probability).

Directional:
$$S_2 = \begin{cases}1 & \text{tackle}\\ 0 & \text{runner outside}\\ \operatorname{clip}\!\left(\frac{\Delta\theta_{\text{in}}}{\pi/2},0,1\right) & \text{forced inside}\end{cases}$$
$\Delta\theta_{\text{in}}$ = inside-directed heading change over 5 frames, in rad (paper uses degrees, 90°=π/2 rad). Dimensionless after normalization.

SET frame = (S1+S2)/2. Play = Σ frames. Units: frame score dimensionless, play total in "frames" (dimensionless count × per-frame score).

Breakdown regimes:
- $\mathbf v = 0$: projection degenerate, $\Sigma \to 0$, $f \to$ Dirac delta. S1 becomes indicator of whether the point is in $V_i$. Well-defined but non-smooth.
- Ties in Voronoi: bisector set has measure zero; numerically the frame on the bisector is ambiguous → S1 jump discontinuity.
- $\Delta\theta$ with near-zero speed after the encounter: heading ill-defined; sign of "inside" flips. Need gap-relative inside reference.
- Frame count $N$ varies by play (tackle happens at different frames). Play total not comparable across plays unless normalized by frames or by runner yards — comparability breakdown.

Great, that's a rich breakdown analysis.

Now let me write everything cohesively and hit the word count. Let me write generously.

For units I'll be explicit. Let me produce the final answer.

Let me count rough words as I go to ensure >= 1000 across sections (THINK_TRACE alone >= 400).

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
Multi-hop derivation from raw tracking to a single grade, then a gray-zone audit.

Hop 1 — Play admission. The pipeline starts by filtering rushing attempts and terminating each evaluation at the earlier of line-to-line crossing or tackle ("ending our evaluation once the runner passed the line of scrimmage or was tackled, whichever came first" [PAGE 4]). Two disjoint admission channels feed the sample: (a) all plays coded as gap `end` in Next Gen Stats run-gap data ("We assume all end runs require an edge setter and automatically include these plays" [PAGE 4]); and (b) interior-coded plays rescued by a kinematic test. The rescue projects the carrier's velocity vector forward Δt = 0.5 s and admits the play if the projected endpoint exits the extended tackle box ("If any of these endpoints landed outside of the extended tackle box... we assume an intention to run outside" [PAGE 5]).

Hop 2 — Spatial-value field. The paper rejects a global field-value model ("found this to ignore team-specific differences" [PAGE 5]) and instead localizes value to the runner's projected future position, modeled as a bivariate PDF ("use this probability density function (PDF) to model a runner's location 0.5 seconds in the future" [PAGE 5-6]), built on Bornn & Fernandez (2018) and Inayatali, White, Hocevar (2023).

Hop 3 — Territorial control. Defender field control is a Voronoi tessellation ("a geometric tool that splits the football field into sections based on proximity to the nearest player" [PAGE 6]), with the inter-player bisector encoding leverage ("The angle of the bisector between the regions... represents the blocking leverage" [PAGE 6]); region area via the shoelace algorithm ("We use the shoelace algorithm listed below to calculate area" [PAGE 7]).

Hop 4 — Question 1 score = probability mass of the runner PDF captured by the defender's Voronoi cell ("The percentage of overlap between the runner's PDF and defender's Voronoi region... a number between 0 and 1 for each frame" [PAGE 7]).

Hop 5 — Question 2 score = normalized inside-heading change over five frames, with terminal anchors 1 (tackle) and 0 (edge lost) ("if an edge setter's presence forces a 45° inside angle displacement five frames to the future, a value of 0.5 (45/90) is earned" [PAGE 9]).

Hop 6 — Composition: mean of the two per frame, summed over the play ("Both scores are added and divided by two to give a final frame score... these frame scores are added" [PAGE 9]).

Gray-zone audit. (i) Temporal-unit fusion: "0.5 seconds" [PAGE 4-5] and "five frames" [PAGE 9] coincide only if tracking is 10 Hz (5 frames = 0.5 s), the NFL NGS rate; the paper never states it, so the two horizons are implicitly welded. If a 100 Hz feed were used, 5 frames = 0.05 s and Q2 collapses. (ii) Covariance construction of the bivariate PDF is unspecified — the directional anisotropy (along-track speed variance vs cross-track heading variance) is the single most consequential free parameter and is never pinned. (iii) Inside/outside sign convention: "inside" is gap-relative, but the metric text uses a field-frame 90° standard, so a run toward the near sideline could be mis-signed. (iv) Voronoi ties on the bisector produce a measure-zero but numerically live discontinuity in S1. (v) Play-total comparability: plays end at different frames, so summing raw frame scores confounds opportunity length with skill — an uncorrected length bias. (vi) The "spill" technique ("deliberately slash inside the offensive line to open outside contain" [PAGE 12]) can misattribute the edge setter, an acknowledged labeling error that propagates into both training targets and grades.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

All field coordinates $\mathbf{x}=(x,y)$ are expressed in an SI frame with $x$ along the line of scrimmage (m) and $y$ across it (m); conversion $1\,\text{yd}=0.9144\,\text{m}$ applies since NGS stores yards. Time $t$ in s; angles in rad.

1. Kinematic projection (admission + PDF mean). With state $(\mathbf{x}_0,\mathbf{v}_0)$ at snap-referenced time $t_0$ and $\Delta t = 0.5\,\text{s}$:
$$
\mathbf{v}_0 = s_0\,(\cos\theta_0,\ \sin\theta_0),\quad s_0\ [\text{m/s}],\ \theta_0\ [\text{rad}]; \qquad
\boldsymbol{\mu} = \mathbf{x}_0 + \mathbf{v}_0\,\Delta t \ [\text{m}].
$$
Admission to the sample iff $\boldsymbol{\mu}\notin \mathcal{B}_{\text{ext}}$ (extended tackle box, m), or gap $= \text{end}$.

2. Future-position density (bivariate Gaussian, as cited from Bornn & Fernandez 2018).
$$
f(\mathbf{x}) = \frac{1}{2\pi\,|\Sigma|^{1/2}}\exp\!\Big(-\tfrac12(\mathbf{x}-\boldsymbol\mu)^{\top}\Sigma^{-1}(\mathbf{x}-\boldsymbol\mu)\Big),\qquad f\ [\text{m}^{-2}].
$$
Assumption (unstated by source, required for closure): $\Sigma = R(\theta_0)\,\mathrm{diag}(\sigma_\parallel^2,\sigma_\perp^2)\,R(\theta_0)^{\top}$ with $\sigma_\parallel^2>\sigma_\perp^2$ (along-track speed variance dominates), $\Sigma\ [\text{m}^2]$. Breakpoint: $s_0\to 0 \Rightarrow \Sigma\to 0$, $f\to\delta(\mathbf{x}-\mathbf{x}_0)$ (Dirac), Q1 degenerates to an indicator.

3. Defender territorial set (Voronoi, Euclidean).
$$
V_i = \{\mathbf{x}\in\mathcal{F}:\ \|\mathbf{x}-\mathbf{p}_i\|\le\|\mathbf{x}-\mathbf{p}_j\|\ \forall j\neq i\},\qquad \mathbf{p}_i\ [\text{m}].
$$
Bisector (leverage line) between $i,j$: $\{\mathbf{x}:(\mathbf{p}_j-\mathbf{p}_i)^{\top}\mathbf{x}=\tfrac12(\|\mathbf{p}_j\|^2-\|\mathbf{p}_i\|^2)\}$. Region area (shoelace / Gauss):
$$
A(V_i)=\tfrac12\Big|\textstyle\sum_{k=1}^{n}(x_k y_{k+1}-x_{k+1}y_k)\Big|\ [\text{m}^2].
$$

4. Question-1 score (captured probability mass; field-normalized to handle boundary leakage).
$$
S_1 = \frac{\displaystyle\iint_{V_i\cap\mathcal{F}} f(\mathbf{x})\,dA}{\displaystyle\iint_{\mathcal{F}} f(\mathbf{x})\,dA}\ \in[0,1]\quad(\text{dimensionless probability}).
$$
Breakpoint: on the bisector set (measure zero in $\mathbb{R}^2$) $S_1$ is discontinuous; near a boundary a large $\sigma$ pushes mass outside $\mathcal{F}$, deflating the denominator and inflating variance.

5. Question-2 score (inside-heading change over five frames; terminal anchors).
$$
S_2=\begin{cases}
1, & \text{tackle (most valuable end-state)}\\[2pt]
0, & \text{runner's direction shifts outside (edge lost)}\\[2pt]
\operatorname{clip}\!\Big(\dfrac{|\Delta\theta_{\text{in}}|}{\pi/2},\,0,\,1\Big), & \text{forced inside}
\end{cases}
$$
with $\Delta\theta_{\text{in}}=\theta_{t+5}-\theta_t$ signed toward field interior (source: $45^\circ/90^\circ=0.5$ [PAGE 9], $90^\circ=\pi/2$). Units: rad (or deg) before normalization, dimensionless after. Breakpoint: if post-encounter speed $\to 0$, heading is undefined and the inside/outside sign is ill-posed without a gap-relative interior reference.

6. Composition (per-frame mean; play total).
$$
\text{SET}_{\text{frame}}=\tfrac12\big(S_1+S_2\big),\qquad
\text{SET}_{\text{play}}=\sum_{k=1}^{N}\text{SET}_{\text{frame},k}.
$$
Units: $\text{SET}_{\text{frame}}$ dimensionless; $\text{SET}_{\text{play}}$ scales with frame count $N$ (dimensionless × frames). Breakpoint (comparability): because $N$ varies with when the tackle occurs, $\text{SET}_{\text{play}}$ conflates skill with opportunity length; a per-frame or per-yard normalization $\text{SET}_{\text{play}}/N$ is required for cross-play/cross-player ranking (source ranks by percentile [PAGE 12] but does not expose the normalization).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage. The metric sits on a well-defined scientific spine. Proximity-based territorial partitioning traces to Georgy Voronoi (1908) and the Gauss shoelace area formula, both repurposed here for pitch/field control. In sports analytics, spatial-control estimation via convex hulls and tessellation was formalized by Fernández & Bornn (2018) in soccer; the paper explicitly builds "off Bornn & Fernandez (2018) and Inayatali, White, Hocevar (2023)" [PAGE 5] to make a bivariate, motion-conditioned occupancy density rather than a static Voronoi map. On the evaluation side, it declares itself an extension of "ESPN Analytics' revolutionary run-stop win-rate" [PAGE 3], moving from a binary win/loss to a continuous, positional grade that "includes defensive backs and outside linebackers" [PAGE 3]. The framing also descends from the NFL tracking-data revolution (Next Gen Stats / Big Data Bowl), which supplies the 10 Hz state vectors that make velocity projection and five-frame derivatives possible.

Conceptual ancestors. The coaching axioms — Saleh's "throwing up a stop sign" and Belichick's cutback-lane argument ("if you can set the edge... then all of those players are in their cutback lanes" [PAGE 4]) and the Harbaugh/Arians creed "no edge, no chance" [PAGE 13] — are the qualitative priors the math is trying to operationalize. The Hutchinson/Pollard example ("a 25% drop off in speed and a 75-degree change in direction in 0.5 seconds" [PAGE 3]) is the founding anecdote that ties Q1 (position) and Q2 (direction change) together.

Multi-week traps. The corpus is "nine weeks of data" from 2022, with Week 7 highlighted and rankings taken "throughout the first nine weeks" [PAGE 12]. Three temporal traps follow. (1) Sampling: edge-setting opportunities are sparse and left/right asymmetric per player per week; nine-week SET percentiles carry wide confidence intervals, so top-graded names (Allen, Smith, Mack, Newsome, Gardner [PAGE 10-11]) can be small-sample artifacts. (2) Regime drift: an edge defender's role changes with game script, injuries along the line, and opponent run tendencies; a nine-week aggregate mixes early-season and mid-season schemes. (3) Autocorrelation illusion: week-to-week rank persistence for a positional metric like SET should be moderate — higher than single-game tackle counts (noisy) but well below a full-season grade — and the paper's short window cannot separate signal from regression to the mean. These traps mean any retro-grade of 2022 should be re-fit with per-opportunity normalization and shrink-age estimators before it is treated as talent signal.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Modeling the offense as an adaptive adversary against the SET-graded defense.

Crisis-habit regression. Under duress — trailing late, short-yardage, or goal-line — edge defenders regress to trained habits: hard inside hands, over-pursuit, or gambling for the sack. In SET terms this inflates S2 variance: forced-inside frames mix with "runner shifts outside" (S2 = 0) catastrophes. Because S2 clips to [0,1] with a hard 0 floor, a single habit-driven bust is not compensated by prior good frames within the summed play total, so crisis reps are systematically under-credited relative to a normalized design. Prediction: a player's SET variance rises monotonically with late-clock, close-score run snaps even as his mean SET falls.

Counter-trap. Offenses counter a strong edge setter in three ways: (a) run away from the graded defender to the weak side; (b) misdirection/`end`-gap fold that removes the defender from the box; and (c) the defensive "spill" the paper flags, where "edge defenders deliberately slash inside... to open outside contain for an outline linebacker" [PAGE 12], risking misattribution of who set the edge. Game-theoretically, if the offense knows one side's SET grade, it shifts run probability to the other side, mechanically suppressing the graded player's opportunity count $N$ and thus his raw $\text{SET}_{\text{play}}$. This is a reflexivity loop: the metric changes the behavior it measures.

Clock. The two temporal constants (0.5 s projection, five-frame derivative) define the reaction clock, while down-and-distance and game clock define the strategic clock. In run-probable, clock-controlled states (first-and-10 early, two-minute run-out), the offense narrows play design toward the interior or the weak edge, and the defense's edge responsibility becomes both more valuable and more exposed. The interaction that breaks naive ranking: high SET percentiles accumulate in early-down, run-heavy, non-crisis snaps; if a team faces that player with counters (misdirection, away-run), his opportunity sample thins and his grade becomes erratic. The correct read is conditional: evaluate SET per gap, per down, per score-state, never as an unconditional nine-week scalar.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical and weather vetoes that gate the metric's validity.

Biomechanical layer. Edge setting is a lateral-mobility skill: backpedal-to-drive transition, ankle/knee flexion for leverage, and hand placement to hold the blocker's outside shoulder. The metric's core claim — that positioning (Q1) can dominate outcome — is exemplified by Judon, who "does not appear to 'win' the block, although it's clear he's in effective position" [PAGE 8]. Proof of validity for the physical layer: if $S_1$ (position) is high while block-win rate is low, the defender is trading mass/leverage for angle — physically consistent only when the defender's initial alignment already sits inside the blocker's shoulder, i.e., the bisector leverage angle in Q1 is genuinely favorable. Veto condition: if a player accrues high $S_1$ purely because his Voronoi cell is large due to distant teammates (sparse defenders) rather than true leverage, the biomechanical interpretation is void — area inflation is a confound the shoelace area does not correct. Adjudication: SET is physically interpretable only when Voronoi cell size is bounded by adjacent-defender proximity, not isolation.

Weather/surface layer. Run frequency and traction both shift with conditions. Cold, wet, or snow states increase interior run tendency (Belichick's cutback lanes compress under poor footing), raising the base rate of edge-setting opportunities and thus $N$; a defender's SET total is weather-inflated independent of skill. Turf vs natural grass changes cut sharpness and the achievable $|\Delta\theta_{\text{in}}|$ in Q2 — a 90° standard is harder to reach on slick grass, systematically deflating S2 for defenders in cold-weather road games. Wind is largely orthogonal to run-fit (minimal direct effect on ground pursuit), so a wind veto is weak; the strong vetoes are precipitation (opportunity inflation) and surface/temperature (S2 deflation via traction-limited heading change). Net: raw cross-venue SET comparisons are confounded unless stratified by surface and temperature band. Any single-game or nine-week SET claim that ignores surface/weather strata is vetoed at the physical layer.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable, falsifiable scenarios derived from the operators above; each states a checkable prediction and the data that would refute the metric.

Veto 1 — Positioning-without-production existence proof. Claim under test: SET uniquely rewards off-ball positioning that box-score stats miss. Verifiable scenario: identify defenders whose Q1 percentile ($S_1$) greatly exceeds their traditional run-stop/tackle percentile. Prediction: such players exist and rank top in SET (consistent with Judon [PAGE 8] and the CBs Newsome/Gardner whose value is "dramatically force the runner inside" [PAGE 11] rather than tackle volume). Refutation test: if no player shows high $S_1$ with low tackle production, or if all top-SET players are also top-tacklers, the "prelude to the tackle" value-add collapses to a redundant stat.

Veto 2 — Inside-force EPA monotonicity. Claim: forcing the runner inside (higher $S_2$) reduces rushing efficiency on that rep. Verifiable scenario: join per-frame $S_2$ to Next Gen rushing EPA / yards-over-expected on the same play and gap. Prediction: negative association between $S_2$ and rushing EPA-allowed; plays with $S_2\to 0$ (edge lost, runner outside) show the highest EPA-allowed. Refutation test: if forced-inside reps (high $S_2$) show equal or higher EPA than edge-lost reps, the direction-value anchoring is invalid and 90° standardization is miscalibrated.

Veto 3 — Opportunity-length invariance (normalization falsification). Claim: SET is a skill metric, not an opportunity-count artifact. Verifiable scenario: regress $\text{SET}_{\text{play}}$ on frame count $N$ and on gap/side; then test whether per-frame $\text{SET}_{\text{play}}/N$ preserves week-over-week rank correlation while raw $\text{SET}_{\text{play}}$ does not. Prediction: raw play-total correlates positively with $N$ (longer plays inflate the grade), and normalization removes most of that dependence, with per-opportunity SET showing moderate positive autocorrelation across the nine 2022 weeks [PAGE 12]. Refutation test: if raw and normalized SET produce identical rankings, or if neither shows week-over-week persistence beyond chance, the "talent signal" interpretation is falsified and the metric is measuring noise or run-call volume.

Cross-veto synthesis. Vetoes 1–3 jointly stress the three unverified assumptions in SOURCE_OPERATORS: the covariance anisotropy (Veto 1, position realism), the S2 sign/scale convention (Veto 2, inside anchoring), and the play-total normalization (Veto 3, comparability). Passing all three is necessary but not sufficient; the acknowledged "spill" misattribution [PAGE 12] and weather/surface confounds remain residual threats that require gap-resolved, strata-matched validation before SET grades can be promoted from a Week-1-through-9 2022 diagnostic to a decision-grade evaluation.
</RLVR_COUNTERFACTUAL_VETOES>