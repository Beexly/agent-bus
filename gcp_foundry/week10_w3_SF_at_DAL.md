---
job_id: SF_at_DAL
model: baidu/ernie-5.5-flash-preview:free
worker: 3
timestamp: 2026-11-13T18:13:06.832700+00:00
words: 6879
---

<NATIVE_REASONING>
The user wants a full pre-kickoff dossier for SF at DAL, dated 2026-11-15. That's a future date relative to the current time (2026-08-27). So this is a hypothetical/forward-looking analysis — Week 10 of the 2026 NFL season hasn't happened. I should be honest about that: I cannot have tape from the 2026 season, so I need to frame this as a structural/generative analysis based on durable schematic and coaching-tree invariants rather than fabricated 2026 game data.

Key honesty constraints:
- I must not invent fake 2026 stats, injuries, or results. I should flag that no 2026 Week 10 data exists as of 2026-08-27 (the season hasn't started; Week 1 is early September 2026).
- I should not invent betting lines (invariant 1).
- I must not invent toy equations (invariant 2). Every operator must have exact LaTeX, units, assumptions, singularity conditions.
- Need >= 1,000 words with the exact XML headers.

Also there's a tension: the system prompt says "Only create markdown files when the user explicitly requests them" — no file needed here. And "search first" for time-sensitive info — but I have no tools available in this conversation (no tool definitions given). I should note I can't verify current rosters/status. Actually, I should be careful: I have no tools listed, so I can't search. I'll state the epistemic status clearly.

Let me be honest and rigorous. I'll build the dossier on:
- Kyle Shanahan's married-run / wide-zone / motion conflict-defender framework (durable, well-documented schematic DNA)
- Mike McDaniel / Gary Kubiak / Shanahan tree (note: I should be careful about who the Cowboys' DC and HC are in 2026 — unknown. I'll frame conditionally.)
- Cowboys defensive front: Dallas has run variants of 4-3 under Dan Quinn (Quinn was hired in 2024). By 2026 unknown. I'll frame as conditional on front structure (4-2-5 nickel-heavy vs. 3-4) and note the analysis branches.
- AT&T Stadium: retractable roof, air handling, HVAC, no wind, temperature-controlled, the giant center-hung video board, artificial turf (MatrixTurf), the acoustics (record crowd noise ~126 dB Guinness record from 2014). Also the "Jerry World" scoreboard hangs 90 ft above field, ~120 ft long. These are real, durable facts.
- Weather: indoor, so weather is a vetoed variable — that's actually a good cross-layer veto: the naive model that applies outdoor wind/temperature corrections is invalid. But there's a nuance: retractable roof may be open or closed; kickoff temperature 15:25 CST mid-November in Arlington; roof position affects HVAC stratification and turf surface temperature/hardness.

Let me build real math with proper units.

Candidate formal operators:

1. Married-run conflict-defender bind: A formal model of defender conflict assignment. Define the conflict set. Use a measure-theoretic assignment: for a given play, the offensive action creates a set of run-fit responsibilities $R \subset D$ (defenders) whose optimal response differs between the run key and the play-action key. Define a conflict index as a probability over defender's read.

Let me define: For defender $i$, let $\pi_i(\text{run})$ be the probability the defender assigns to run given pre-snap + first-step cues. Expected value of defender's aggression. The offense's gain from misdirection is proportional to the derivative of defender's run-fit commitment with respect to the fake cue.

Better: define a signaling game. Offense chooses action $a \in \{R, PA\}$; defender observes signal $s$ and chooses response $r$. Bayes: $\pi = P(R|s) = \frac{P(s|R)P(R)}{P(s|R)P(R) + P(s|PA)P(PA)}$. Defender's optimal response threshold: play run-fit if $\pi > \pi^* = \frac{c_{\text{explosive}}}{c_{\text{explosive}} + c_{\text{completion}}}$... let me set it up cleanly with payoffs in yards.

Let defender's payoff (negative yards allowed): if defender fits run and it's run: $-y_R$; if defender fits run and it's PA: $-y_{PA}$ (big, since vacated). If defender plays pass: run yields $-y_R'$ (larger), pass yields $-y_P$. Defender minimizes expected yards allowed. Indifference threshold:

$\pi^* = \frac{y_P - y_{PA}}{(y_P - y_{PA}) + (y_R' - y_R)}$

Units: yards per play (yd·play⁻¹). Singularity: denominator → 0 when $y_P - y_{PA} = -(y_R' - y_R)$, i.e., when the PA gain exactly equals the run-fit loss — no unique threshold; the game becomes degenerate (any $\pi$ is optimal), which is precisely the "illusion" regime where the offense's leverage is indeterminate and the defense's assignment discipline, not the math, decides.

That's a genuinely correct derivation. Good.

2. Kyle Shanahan's motion-at-snap: quantify pre-snap information. Define information in bits: $I = \log_2(1/\pi)$... Actually define the "conflict-generation rate" as mutual information between offensive formation/motion and defensive rotation. $I(M; \Theta) = \sum \sum p(m,\theta)\log_2\frac{p(m,\theta)}{p(m)p(\theta)}$ bits per play. Units: bits·play⁻¹. Singularity: undefined when $p(m)p(\theta) = 0$ (zero-probability formation/rotation pair), and biased estimator with finite samples — plug-in MI estimator bias is $O(|\mathcal{M}||\Theta|/(2N\ln 2))$ bits, so with small N (a season is ~17 games × ~65 plays = ~1,105 plays) the bias dominates. That's a real, citable bias formula (Miller-Madow). Good — this is a legitimate statistical caveat, not a toy.

3. Play-action leverage: EPA differential. Define $\Delta_{\text{PA}} = \text{EPA}_{PA} - \text{EPA}_{\text{std}}$ in units of expected points added per play (EPA·play⁻¹). Note EPA is dimensionless points, and it's league-relative, so it's a valid unit.

4. Biomechanical veto: QB internal clock. Define time-to-throw $t_{TT}$ in seconds. Pressure arrival time $t_p$. Pocket half-width. The key veto: the Cowboys' pass rush win rate vs. the QB's sack-avoidance. Formal: probability of sack as a function of $t_{TT}$ and $t_p$. Use a survival/hazard framing: $h(t) = $ instantaneous pressure hazard rate, units s⁻¹. $P(\text{sacked by } t) = 1 - \exp(-\int_0^t h(u)du)$. Singularity: $h(t)$ non-constant and non-stationary; the exponential assumes a homogeneous Poisson process, which is violated because pressure arrival is highly non-uniform (off-tackle/stunt timing clusters at 2.4–3.1 s). So the naive exponential underestimates tail risk. That's a legitimate veto of naive EV.

5. Acoustic veto: AT&T Stadium crowd noise. Sound pressure level $L_p = 20\log_{10}(p_{rms}/p_0)$ dB re 20 µPa. The record is 126 dB (2014, Guinness). Effect on snap-cycle: the silent-count / cadence. Formal: the offense's cadence-based timing mechanism has a signal-to-noise constraint. Define the audibility margin: $M = L_{\text{shout}} - L_{\text{noise}}$ dB; a lineman's ability to hear the cadence requires $M \gtrsim 6$ dB (roughly, for speech intelligibility in noise; actually speech reception threshold in noise requires SNR of about -5 to +5 dB for closed-set, more for open-set). I should be careful and honest: I'll present the standard psychoacoustic framing that speech intelligibility (Speech Intelligibility Index, SII) degrades as SNR falls, and give the AI/SII relation qualitatively with the caveat that exact thresholds are task-dependent. Better to state: SII ∈ [0,1] dimensionless; the Articulation Index / SII framework; and note that a hard number for "lineman hears cadence" is not established in literature — flag that as an assumption, not a fact. Good, that's honest.

Actually, the deeper acoustic point: AT&T Stadium is enclosed with a hard roof and hard surfaces → long reverberation time. Sabine: $RT_{60} = \frac{0.161 V}{A}$ where V is volume in m³ and A is total absorption in m² sabins. Enclosed stadium with retractable roof closed → higher RT60 → temporal smearing of the cadence → the QB's verbal cadence loses intelligibility, which pushes the offense toward silent count / visual cadence, which delays the snap and compresses the play clock. That's a real, defensible causal chain. Units check: 0.161 s·m⁻¹ × m³ / m² = s. Good.

6. Turf/surface: AT&T Stadium uses artificial turf. Surface temperature and rotational stiffness affect cleat traction. Define available traction coefficient $\mu$ dimensionless. Cutting force $F = \mu N$ N. Singularity: as $\mu$ exceeds the athlete's neuromuscular capacity to modulate force, non-contact injury risk rises — but that's not a per-play EV operator.

Better biomechanical veto: the wide-zone stretch requires the ball carrier to make a single-cut decision at ~0.35–0.5 s after handoff. Define the decision window $\tau_d$ and the defender's closing time. Let me formalize: the cut must be committed before the conflict defender's angle closes. Define the "leverage window" $\tau = \frac{d_\perp}{v_{closing}}$ where $d_\perp$ is perpendicular distance in m and $v_{closing}$ is closing velocity in m·s⁻¹. Units: s. Singularity: $\tau \to 0$ when $v_{closing} \to$ ... well, $\tau \to 0$ as $d_\perp \to 0$; and $\tau$ is undefined/negative if the defender is already past the leverage point (i.e., the play is dead). Also the model assumes constant closing velocity — violated by acceleration phases.

7. Weather/roof: Since indoor, the naive model's weather adjustment must be zeroed. But: roof-open vs roof-closed changes HVAC stratification. Define air density $\rho = \frac{p}{R_{sp}T}$ kg·m⁻³, with $R_{sp} = 287.05$ J·kg⁻¹·K⁻¹ for dry air. A 15 K temperature difference (open roof, 12 °C vs closed, 27 °C) gives $\rho$ ratio of ~ (300.15/285.15) ≈ 1.053, i.e., ~5.3% density difference. Effect on a pass: aerodynamic drag $F_D = \frac{1}{2}\rho v^2 C_D A$ N. A 5.3% drag change on a deep ball → small but nonzero change in range. Let me compute: for a football, C_D ≈ 0.2–0.3 (a well-thrown spiral is quite low drag, maybe 0.15-0.25), A ≈ π(0.089 m)² ≈ 0.0249 m² (NFL ball circumference ~28 in → diameter ~0.223 m → radius 0.1115 m → A ≈ 0.039 m²). Let me use diameter 0.223 m: A = π(0.1115)² = 0.03905 m². At v = 25 m/s, q = 0.5 × 1.2 × 625 = 375 Pa. F_D = 375 × 0.2 × 0.039 = 2.93 N. Ball mass ~0.411 kg (14-15 oz → 0.397-0.425 kg). Weight = 4.03 N. So drag is ~73% of weight — significant! A 5.3% change in ρ → 0.155 N change → over a 1.5 s flight, impulse change 0.23 N·s → Δv ≈ 0.57 m/s. That's a real, computable effect. Nice — this is a legitimate cross-layer veto: the "indoor = weather-neutral" assumption is false at the ~0.5 m/s level, which matters at the margin of a deep-ball catch radius.

Let me double check the deep ball: a 40-yard (36.6 m) pass at 25 m/s launch with a 1.6-1.8 s flight. Δv of 0.57 m/s over the flight → position error ~0.5 m ≈ 1.6 ft. That's about the width of a receiver's catch radius margin. Reasonable, and I'll present it as an order-of-magnitude with explicit assumptions.

8. Neurological: QB internal clock acceleration under pressure. Formalize as a change in the hazard of throw. Actually I did that. Add: the "internal clock" as a drift-diffusion model. DDM: decision variable $dx = A\,dt + c\,dW$, where $A$ is drift rate (evidence·s⁻¹... units: decision units per second), $c$ is noise. First-passage time to boundary $\pm z$. Mean decision time for unbiased DDM: $\bar{T} = \frac{z}{A}\tanh\left(\frac{Az}{c^2}\right)$ — that's the standard result. Units: s. Singularity: as $A \to 0$ (no evidence), $\bar{T} \to \infty$ (actually the formula gives $z/A \cdot (Az/c^2) = z^2/c^2$, finite — hmm). Let me recall: For DDM with drift $v$, boundary $a$, starting at $z$, the mean decision time (for correct decisions) is $T = \frac{a}{2v}\tanh\left(\frac{av}{2\sigma^2}\right)$... The standard: with symmetric boundaries at $\pm a$, starting at 0, drift $v$, diffusion $\sigma^2$: mean first passage time $= \frac{a}{v}\tanh\left(\frac{av}{\sigma^2}\right)$. As $v \to 0$: $\tanh(x) \approx x$, so $T \to \frac{a}{v}\cdot\frac{av}{\sigma^2} = \frac{a^2}{\sigma^2}$. Finite. Good, so no singularity there; the singularity is at $\sigma \to 0$ with $v \to 0$ jointly, or the formula's breakdown when $v<0$ (drift toward the wrong boundary) — then $\tanh$ goes negative and the expression is invalid; must use the two-boundary conditional formulation. That's a legitimate breakdown condition. 

Under pressure: $A$ (drift, i.e., quality of read) falls and $c$ (noise) rises → $\bar{T}$ rises toward $a^2/c^2$ AND error rate rises. This is the mechanistic veto: pressure doesn't just make the QB slower, it makes him slower AND less accurate, which is a covariance term the naive EV model omits. That's the key insight: $\text{Cov}(t_{TT}, \epsilon) > 0$ under pressure, and naive models treat time-to-throw and accuracy as independent.

Good. That's a genuinely strong analytical point.

9. Recursive theory of mind: the 100-rep comfort call. Define a level-k hierarchy. Level-0: QB executes. Level-1: DC predicts QB tendency. Level-2: Shanahan predicts DC's prediction. Formal: equilibrium concept. Define $\sigma^* $ as a Nash equilibrium of the signaling game; the "100-rep call" is a commitment device that shifts the offense's own type distribution. Key: repeated reps change the *offense's* execution variance, not just the defense's belief. Quantify: skill acquisition as variance reduction, $\sigma_{exec}^2(n) = \sigma_\infty^2 + (\sigma_0^2 - \sigma_\infty^2)e^{-n/\lambda}$ where $n$ is reps and $\lambda$ is a time constant in reps. Units: (yd)². This is a learning-curve model — I should flag it as a phenomenological model, not a law.

10. RLVR counterfactual vetoes: need 3 concrete verifiable training scenarios where a surface statistical model fails and cross-layer veto reasoning succeeds, plus falsifiable Sunday predictions. RLVR = reinforcement learning from verifiable rewards. So: training scenarios where the reward is verifiable (i.e., checkable ground truth). I'll design three: (a) a pressure/time-to-throw covariance scenario, (b) a retracted-roof density scenario, (c) a cadence-intelligibility scenario. Each with a verifiable reward function and a falsifiable prediction.

Falsifiable predictions must be checkable on Sunday. I'll make them concrete and quantitative with explicit thresholds and a falsification condition.

Now, honesty framing. Critical: I must state up front that as of 2026-08-27, the 2026 season has not begun, so I have zero 2026 tape, rosters, injuries, or coaching-staff confirmations. I cannot verify who the Cowboys' DC is in 2026, whether Dak Prescott is healthy, who SF's QB is (Brock Purdy's status), etc. I'll frame the entire dossier as a structural/schematic analysis conditioned on durable invariants, with explicit conditional branches. That's the intellectually honest approach and it's actually what makes the analysis valuable.

Let me also be careful about specific factual claims I make:
- Kyle Shanahan: 49ers HC since 2017. Widely documented wide-zone / outside-zone, motion-heavy, play-action, "married run" (run + PA off same action), heavy use of pre-snap motion, unbalanced formations, 13 personnel, tight end utilization. Coaching tree: Mike Shanahan (father), Gary Kubiak, Mike McDaniel (off on his own path), Chip Kelly influence on outside zone, Alex Smith/Kaepernick era. Kubiak's zone-blocking lineage traces to Alex Gibbs. Real.
- "Married run" — a term used in Shanahan-tree coaching for pairing an outside-zone run with play-action off the same look. Real terminology.
- Dan Quinn hired as Cowboys HC in 2024. Real. His defense: Seattle-style Cover 3 with heavy pattern-matching, single-high, and a 4-man-ish front with Micah Parsons as a hybrid rusher. In 2025 Parsons was traded to Green Bay (that happened in Aug 2025 — I believe that's right; Parsons was traded to the Packers in late August 2025). I should be cautious. I'll mention it as "if Parsons is no longer on the roster" conditional framing, or just avoid asserting. Better: frame the Cowboys front structurally without asserting personnel, and explicitly flag that personnel must be verified.
- AT&T Stadium: retractable roof, opened 2009, capacity ~80,000 (expandable to 100,000), Guinness record crowd noise 126 dB set in 2014 (I believe that was set during a Cowboys game vs. Detroit? Actually the 126 dB record was set at AT&T Stadium in 2014). Center-hung video board: 60 yards long (from 20 to 20), ~90 ft above the field, ~2,100 inches diagonal total. MatrixTurf artificial surface. Real enough; I'll keep numbers approximate and flag them.
- Arlington, TX mid-November: typical highs ~68-70 °F (20-21 °C), lows ~48 °F. Reasonable climatology.

I'll be careful to mark uncertain facts.

Let me also handle: no betting lines. I'll avoid any spread/total/odds. I can discuss win probability as a model output but must not frame it as a market line. Actually, to be safe and to honor invariant 1, I'll avoid win probabilities framed as betting-adjacent and instead focus on play-level and situational operators. I can mention "no market-implied quantities appear in this dossier" briefly. Actually better to just not mention betting at all except perhaps one clean line noting the invariant. I'll include a brief note.

Word count: need >= 1,000 words. I'll aim for ~2,000-2,500 words of dense content.

Format: The user asked for exact XML headers. I'll use them. I should use LaTeX. Plain prose mostly, headers as specified. Let me not add extra top-level headers beyond what's requested — but I do need an epistemic-status note. I'll put it as a short preamble before <THINK_TRACE>. That seems acceptable and necessary for honesty.

Let me write it.

Let me double-check the MI bias formula: Miller-Madow bias correction for plug-in entropy estimator: bias ≈ (K-1)/(2N) nats where K is number of bins. For MI: bias ≈ (K_x K_y ... ) — the standard result is bias of plug-in MI ≈ $\frac{(|\mathcal{X}|-1)(|\mathcal{Y}|-1)}{2N}$ nats. I'll state it in that form and note units (nats; divide by ln 2 for bits). Good.

DDM mean first passage: for drift $v$, symmetric boundaries $\pm a$, zero start, diffusion coefficient $\sigma^2$ (so $dx = v\,dt + \sigma\,dW$): mean first passage time $T = \frac{a}{v}\tanh\left(\frac{av}{\sigma^2}\right)$. Check limit $v\to 0$: $\tanh(av/\sigma^2) \approx av/\sigma^2$, so $T \to a^2/\sigma^2$. Correct, matches known result for pure diffusion exit time from $(-a,a)$: $a^2/\sigma^2$. Good.

Breakdown: for $v < 0$ the expression yields negative $T$ — invalid; must use conditional first-passage formulation. Also assumes constant drift (stationarity), violated under time-varying pressure. Good.

Sabine: $RT_{60} = 0.161 V / A$ (metric, V in m³, A in m² sabins, result in s). AT&T Stadium enclosed volume: field is ~110 m × 49 m, plus seating bowl; total enclosed volume maybe ~1.5-2.5 million m³? Cowboys stadium interior volume is often cited around 3 million cubic feet? Hmm. Let me estimate: footprint ~ 270 m × 220 m? Actually the stadium is about 3 million sq ft total. Let's estimate interior volume: if the roof encloses roughly 220 m × 200 m × 60 m average height = 2.64 million m³. I'll use V ≈ 2.5×10⁶ m³ with an explicit "order-of-magnitude estimate" flag. Absorption: hard surfaces, seats, and ~80,000 people. A person contributes ~0.4-0.5 m² sabins (occupied, upholstered seat ~0.4-0.5). 80,000 × 0.45 ≈ 36,000 m² sabins. Plus surfaces: if total interior surface area is ~200,000 m² with α ≈ 0.05 → 10,000 m² sabins. Total A ≈ 46,000 m². RT60 = 0.161 × 2.5e6 / 46,000 ≈ 8.7 s. That's very high — real stadiums with crowds measure RT60 more like 4-9 s at low frequencies in enclosed bowls; Sabine overestimates for large coupled volumes and air absorption matters. I'll present it as an upper-bound estimate and note that air absorption and volume coupling reduce it, and that the empirical range for enclosed NFL bowls is roughly 3-6 s. Honest framing. And note the key point: RT60 of several seconds means the direct-to-reverberant ratio at the line of scrimmage is poor, so the cadence is temporally smeared.

Actually the more important acoustic point for football: crowd noise masking. At 110-125 dB(A) crowd noise, a shouted cadence at ~1 m produces maybe 100-105 dB at the source, so SNR is negative → the center/quarterback verbal channel is unusable → silent count. That's the operative mechanism. And the Guinness 126 dB figure is a peak, sustained game levels are more like 95-110 dB(A). I'll be honest about that distinction — it's a good example of a naive model using a peak as a sustained value.

Air density calc: Arlington mid-Nov kickoff 15:25 CST. Roof closed: HVAC holds ~ 22-24 °C. Roof open: ambient ~20 °C. So the difference is smaller than my earlier 15 K. Let me redo with a more defensible spread: closed roof with solar gain and 80,000 bodies → 24-27 °C; open roof at 20 °C. ΔT = 5 K. ρ ratio = 297/292 ≈ 1.017, i.e., 1.7%. Then ΔF_D = 0.017 × 2.93 N = 0.05 N; impulse over 1.7 s = 0.085 N·s; Δv ≈ 0.21 m/s; position error over flight ≈ 0.35 m ≈ 1.1 ft. Still meaningful at the catch-radius margin. Good, and more honest. I'll present both the formula and the honest smallness, and note that the bigger effect is on kickoff/punt ball flight and on the ball's pressure (Gay-Lussac: a ball inflated to 12.5 psi gauge at 20 °C will read lower when cold — but indoors it stays warm, which is actually an advantage; that's a nice veto: the "cold-weather ball deflation" adjustment must be zeroed indoors).

Gay-Lussac: $p/T = $ const at fixed V. Ball at 12.5 psig = 86.2 psia at 293 K. At 297 K: p = 86.2 × 297/293 = 87.4 psia = 12.7 psig. So ~0.2 psi difference. Small. Good.

Let me now write. I'll keep it tight but thorough. Target ~2,300 words.

One more: "conflict defender" — in zone-read/RPO/motion concepts, the conflict defender is the one defender (usually a LB or safety or the end) whose run/pass responsibility conflicts. Shanahan binds them via motion + PA. I'll formalize the conflict set.

Also "married run": in Shanahan terminology, running the same run action from the same formation with both a run and a play-action off it, so the defense cannot key the formation. Actually "married" often refers to pairing a run with a specific concept off the same action. I'll define it carefully and note terminology varies by coaching tree.

Let me write the final answer.

I should keep the preamble short and clear about epistemic status.

For the RLVR section, I need "3 concrete, verifiable RLVR training scenarios where a surface statistical model fails and cross-layer veto reasoning succeeds, plus falsifiable Sunday predictions." I'll design each as: environment, surface-model policy, veto-informed policy, verifiable reward, and a Sunday falsifiable prediction.

Write it.
</NATIVE_REASONING>

## Epistemic Status (read first)

As of 2026-08-27, the 2026 NFL season has not begun. There is no Week 10 tape, no 2026 injury report, no confirmed 2026 coaching staffs, and no verified 53-man rosters. I have no browsing capability in this session to verify any of it. Everything below is therefore a **structural and generative analysis conditioned on durable schematic invariants**, with explicit conditional branches where personnel or staff identity would change the conclusion. Where I cite a physical constant, a stadium parameter, or a coaching-tree lineage, I mark confidence. Nothing here is a claim about what has happened in 2026.

Per invariant, no market-implied quantities appear anywhere in this dossier.

---

<THINK_TRACE>

The causal spine of SF–DAL is a **signaling game with a commitment asymmetry**, and the AT&T Stadium enclosure is not a neutral container for it — it is an active participant that selectively degrades one channel of the offense's signaling apparatus while leaving the defense's untouched.

Start with the offense. Kyle Shanahan's system is not "outside zone plus play action." It is a machine for manufacturing **conflict**: pre-snap motion that forces a rotation, formation that forces a declaration, run action that forces a fit, and a distribution of run/pass reads that makes the *first* conflict defender wrong regardless of which way he jumps. The "married run" concept — pairing a run and a play-action off identical formation, motion, and OL action, so the pre-snap picture carries zero information about the post-snap intent — is the terminal form of this. Its output is not yards; its output is **the collapse of the defense's posterior**.

Formally, let the offense choose action $a \in \{R, PA\}$ and let the defense observe signal $s$ (formation, motion, OL depth, RB alignment). The conflict defender's posterior is

$$\pi(s) = P(R \mid s) = \frac{P(s\mid R)P(R)}{P(s\mid R)P(R) + P(s\mid PA)P(PA)}$$

with $\pi \in [0,1]$ dimensionless. A perfectly married concept drives $P(s\mid R) = P(s\mid PA)$, hence $\pi(s) = P(R)$ for all $s$ — the signal is *uninformative*, and mutual information $I(S;A) = 0$ bits·play⁻¹. That is the mathematical definition of the illusion. The defense is not being fooled; it is being **deprived of a channel**.

Now the multi-hop step that most models miss. Zero mutual information is necessary but not sufficient for offensive advantage. The defender still has a threshold rule. Let $y_R$ = yards allowed if the defender run-fits and it *is* a run, $y_R'$ = yards allowed if he pass-fits and it is a run, $y_{PA}$ = yards allowed if he run-fits into play-action, $y_P$ = yards allowed if he pass-fits into a pass. All in $\mathrm{yd \cdot play^{-1}}$. The defender minimizes expected yards allowed, yielding indifference at

$$\pi^{*} = \frac{y_P - y_{PA}}{(y_P - y_{PA}) + (y_R' - y_R)}$$

**Singularity:** the denominator vanishes when $(y_P - y_{PA}) = -(y_R' - y_R)$. At that point every $\pi$ is optimal — the game is degenerate and the outcome is decided not by information but by **assignment discipline and eye training**. This is the gray zone. Against a Cover-3 pattern-matching shell with disciplined conflict rules (the Seattle/Dan Quinn lineage), $\pi^*$ sits in exactly this degenerate band, because pattern-matching is *designed* to make $y_{PA}$ small without making $y_R'$ large. The offense's leverage over that defense is therefore not informational — it is **temporal**, and that is where the stadium enters.

The temporal channel is the cadence. Shanahan offenses run on snap-timing: motion at the snap, the ball carrier's landmark relative to a moving picture, the QB's internal clock calibrated to a rhythm established by the cadence. That rhythm is an **acoustic signal**, and its transmission depends on signal-to-noise ratio at the ear of the center and guards.

AT&T Stadium is a hard-surfaced enclosed bowl. Two consequences follow. First, masking: a shouted cadence produces on the order of 100–105 dB(A) at 1 m; a loud NFL crowd produces sustained levels in the 95–110 dB(A) band with peaks higher. The often-quoted 126 dB Guinness figure is a **peak**, not a sustained level, and using it as a mean is a category error that inflates any masking model by 15–25 dB. At negative SNR, open-set speech intelligibility collapses; the Speech Intelligibility Index (dimensionless, $\mathrm{SI} \in [0,1]$) falls toward the floor. Second, reverberation: by Sabine,

$$RT_{60} = \frac{0.161\,V}{A} \quad [\mathrm{s}], \qquad V \approx 2.5\times10^{6}\ \mathrm{m^3},\ A \approx 4.6\times10^{4}\ \mathrm{m^2\,sabins}$$

giving $RT_{60} \approx 8.7$ s as an *upper bound* (Sabine overestimates for large coupled volumes; air absorption and volume coupling pull empirical enclosed-bowl values into roughly 3–6 s). Either way, the direct-to-reverberant ratio at the line is poor, and the cadence arrives **temporally smeared** — the lineman hears energy but not onset timing.

The predicted behavioral response is a shift to **silent count** (visual cadence). This is the load-bearing inference of the entire dossier: a silent count adds variance to snap timing, delays the snap within the play clock, and — critically — **decouples the motion timing from the snap by a variable lag**. Motion-at-snap concepts assume a fixed lag. Variable lag degrades exactly the conflict-generation mechanism described above, partially restoring $I(S;A) > 0$ for the defense.

So the causal chain is: enclosure → negative SNR + long $RT_{60}$ → silent count → variable snap lag → degraded motion-conflict timing → partial restoration of defensive information → offense must win on **personnel and execution variance** rather than on illusion. That is a materially different game than the same two teams in an open-air venue, and any model that treats venue as a scalar home-field adjustment of fixed magnitude has mis-specified the mechanism entirely.

The countervailing branch: the same enclosure **removes** the defense's most common ally. No wind, no precipitation, no cold-weather ball deflation. A dome is a *variance compressor* for both sides, and variance compression systematically favors the team with the lower execution variance — historically, the more heavily coached, more rep-dense offense. Which of the two enclosure effects dominates is not determinable a priori. That indeterminacy is the honest answer, and it is the reason the RLVR section below is built around falsifiable tests rather than a point estimate.

</THINK_TRACE>

<RETROCAUSAL_GENEALOGY>

**Coaching-tree DNA.** Kyle Shanahan's offense descends from the Mike Shanahan / Gary Kubiak / Alex Gibbs outside-zone lineage, with the distinctive mutation being the *proliferation of conflict* rather than the zone scheme itself. The critical genealogical fact for this matchup is that the Cowboys' defensive architecture under Dan Quinn (hired 2024) is a direct descendant of the Seattle Cover-3 pattern-matching tradition — the same tradition that spent 2011–2016 specifically engineering answers to the zone-read and married-run family. This is not a schematic mismatch; it is a **matched counter-lineage**. The 49ers' answer historically has not been to out-scheme that shell but to attack it with motion-induced rotation conflicts, unbalanced and heavy personnel, and tight-angle distribution that punishes the third defender. Confidence: high on lineage, unverified on 2026 staffing — the 2026 Cowboys staff must be confirmed before this branch is trusted.

**Situational scars.** The Shanahan-tree offense carries a documented multi-year scar pattern: **early-down efficiency is high, third-and-medium efficiency is where the tree's leverage decays**, because pattern-matching shells converge on the same conflict defenders the offense is trying to bind, and the married-run illusion loses value as the defense's expected down-distance distribution sharpens. The scar is not "can't convert third down"; it is that the *marginal* value of illusion is a decreasing function of the defense's prior concentration.

**Tape traps.** Two multi-week traps are structural. First, the **motion-tell trap**: heavy-motion offenses accumulate a large sample of motion-to-run and motion-to-pass frequencies, and by mid-season a well-resourced DC has a usable posterior on motion direction → run strength. The Miller–Madow bound tells us how much of that apparent signal is real:

$$\mathrm{Bias}\big[\hat{I}(M;\Theta)\big] \approx \frac{(|\mathcal{M}|-1)(|\mathcal{T}|-1)}{2N\ln 2}\ \mathrm{bits}$$

With $N \approx 1{,}100$ offensive plays in a season and a realistic formation × rotation grid of, say, $30 \times 8$, the bias term is roughly $\frac{29 \times 7}{2(1100)(0.693)} \approx 0.13$ bits. Any claimed motion-tell edge below ~0.13 bits is **estimator artifact, not signal**. Most published "tendency" edges fail this test. Second, the **scoreboard trap**: late-season tape is disproportionately trailing-game tape, which inflates observed pass rate and depresses observed run-fit quality, biasing both the offense's self-scout and the opponent's.

**Proof barriers.** The formal barrier is the degeneracy identified above: when $\pi^*$ falls in the band where the defender is indifferent, no amount of additional evidence resolves the play, and the outcome distribution is governed by execution variance rather than by scheme. Scheme-based models hit a hard epistemic wall there.

</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>

Model the situation as a level-$k$ hierarchy with a commitment device.

**Level 0 — QB execution.** The QB runs the called concept. His output distribution is $\mathcal{N}(\mu_{exec}, \sigma^2_{exec}(n))$ where $n$ is rep count on that specific call. Phenomenological learning curve (explicitly *not* a law):

$$\sigma^2_{exec}(n) = \sigma^2_{\infty} + (\sigma^2_0 - \sigma^2_{\infty})e^{-n/\lambda}, \qquad [\sigma^2] = \mathrm{yd^2},\ \lambda \sim \mathcal{O}(10\text{–}30)\ \mathrm{reps}$$

**The 100-rep comfort call.** A call repped 100 times sits at $n/\lambda \approx 3$–10, i.e., $\sigma^2_{exec}$ within 5–0.05% of asymptote. Its true function is **not** to gain schematic leverage. It is to move the *offense's own* variance, converting a high-mean/high-variance option into a slightly-lower-mean/very-low-variance option. Under existential pressure (trailing, late, negative script), a risk-neutral EV model prefers the high-mean option. A variance-aware model with a convex loss near the boundary of a scoring window prefers the low-variance option. **This is the single most common failure of surface statistical models in this spot.**

**Level 1 — DC tendency bait.** The DC's counter is not to stop the comfort call; it is to make it *cheap to defend and expensive to check*. Bait structure: show a pre-snap picture that invites the comfort call, then rotate post-snap into a coverage that makes the comfort call's primary read the *wrong* read while leaving the check-with-me option unavailable (because the check requires an audible the acoustic environment has degraded — see the cross-layer section). The DC is exploiting the coupling between the offense's cadence channel and its audible channel.

**Level 2 — Shanahan's counter.** Anticipate the bait, and refuse the audible dependency entirely: put the answer in the *formation and the motion*, not in the huddle-to-line information transfer. Motion becomes the check. This is precisely why heavy-motion offenses are robust in loud enclosed venues — motion is a **visual** channel with high SNR, immune to the acoustic degradation that kills the verbal one.

**Level 3 — QB internal clock under acceleration.** Here the recursion becomes quantitative. Model the QB's read as a drift-diffusion process, $dx = A\,dt + c\,dW$, symmetric absorbing boundaries at $\pm a$, where $A$ is drift (evidence accumulation rate, decision-units·s⁻¹) and $c^2$ is the noise intensity (decision-units²·s⁻¹). Mean first-passage time:

$$\bar{T} = \frac{a}{A}\tanh\!\left(\frac{aA}{c^{2}}\right)\ [\mathrm{s}], \qquad \bar{T} \xrightarrow{A\to 0} \frac{a^{2}}{c^{2}}$$

**Breakdown conditions:** (i) the closed form is invalid for $A < 0$ (drift toward the wrong boundary) — it returns negative $\bar{T}$; the conditional first-passage formulation is required. (ii) It assumes stationary $A$ and $c$; under a collapsing pocket both are strongly time-varying, so $\bar{T}$ must be computed from the time-inhomogeneous Fokker–Planck solution, not this expression. (iii) It assumes a single decision; real reads are sequential.

The load-bearing result: pressure reduces $A$ **and** raises $c$ simultaneously. Therefore $\bar{T}$ rises *and* error probability rises. The two are **positively coupled**:

$$\mathrm{Cov}(t_{TT}, \varepsilon) > 0 \quad \text{under pressure}$$

Surface models regress completion probability on time-to-throw and treat the residual as independent noise. That omits a positive covariance term, which means they **underestimate** the joint tail: the specific failure mode of "held it too long *and* threw it badly." That tail is where picks and drive-killing sacks live.

</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>

**VETO 1 — The "indoor = weather-neutral" fallacy (fluid layer).**

The naive model zeroes all weather adjustments at AT&T Stadium. That is wrong at the fourth significant figure, and the error is not negligible for deep balls. Air density:

$$\rho = \frac{p}{R_{sp}T}, \qquad R_{sp} = 287.05\ \mathrm{J\,kg^{-1}\,K^{-1}}$$

Roof closed with solar gain plus ~80,000 occupants: $T \approx 297\ \mathrm{K}$. Roof open, Arlington mid-November: $T \approx 292\ \mathrm{K}$. Density ratio $\approx 297/292 = 1.017$ — a **1.7% density difference**.

Drag on the ball: $F_D = \tfrac{1}{2}\rho v^{2} C_D A$, with $A = \pi r^2 = \pi(0.1115)^2 = 0.0391\ \mathrm{m^2}$ (NFL ball circumference ≈ 28 in), $C_D \approx 0.20$ (well-thrown spiral; literature range 0.15–0.30), $v = 25\ \mathrm{m\,s^{-1}}$, $\rho = 1.20\ \mathrm{kg\,m^{-3}}$:

$$q = \tfrac{1}{2}(1.20)(625) = 375\ \mathrm{Pa}, \qquad F_D = 375 \times 0.20 \times 0.0391 = 2.93\ \mathrm{N}$$

Ball mass $m \approx 0.411\ \mathrm{kg}$, so weight $= 4.03\ \mathrm{N}$ — **drag is 73% of weight**. A 1.7% density change gives $\Delta F_D = 0.050\ \mathrm{N}$; over a $1.7\ \mathrm{s}$ flight, impulse $= 0.085\ \mathrm{N\,s}$, so $\Delta v \approx 0.21\ \mathrm{m\,s^{-1}}$ and a range error on the order of $0.3$–$0.4\ \mathrm{m}$ ($\approx 1$ ft). That is a meaningful fraction of a receiver's catch-radius margin on a 40-yard (36.6 m) ball.

**Veto:** any model applying a nonzero wind/precipitation term at AT&T Stadium is misspecified; any model applying *exactly zero* density sensitivity to roof state is also misspecified. Correct specification: zero wind, zero precip, nonzero $\rho(T)$.

Ball pressure via Gay-Lussac at fixed volume: $p/T = \text{const}$. At $12.5\ \mathrm{psig} = 86.2\ \mathrm{psia}$ and $293\ \mathrm{K}$, warming to $297\ \mathrm{K}$ gives $87.4\ \mathrm{psia} = 12.7\ \mathrm{psig}$ — a $0.2\ \mathrm{psi$ effect. The cold-weather grip/pressure penalty is **zeroed indoors**, which is a real and usually unmodeled offensive tailwind for a cold-weather-adapted passing game.

**VETO 2 — The acoustic singularity (neuro/acoustic layer).**

Formal operator: audibility margin $M = L_{\text{cadence}} - L_{\text{crowd}}$ [dB], with intelligibility governed by $\mathrm{SI}(M) \in [0,1]$. With $L_{\text{cadence}} \approx 100$–$105$ dB(A) at 1 m and sustained crowd at $95$–$110$ dB(A), $M \in [-10, +10]$ dB — straddling the intelligibility cliff. **Singularity:** $\mathrm{SI}$ is a sigmoid in $M$; near $M \approx 0$ its derivative is maximal, meaning the offense's cadence reliability is in the region of *maximum sensitivity to small changes in crowd level*. A 3 dB swing in crowd noise produces a discontinuous-looking change in effective cadence reliability.

Compounding operator: reverberant temporal smearing on the order of $RT_{60} \sim 3$–$6$ s (empirical enclosed-bowl range; Sabine's 8.7 s is an upper bound) means the *onset* of the cadence is masked even where its energy is audible. Onset timing is the operative variable for motion-at-snap, not loudness.

**Veto:** any model that assigns the offense a fixed motion-timing precision indoors is invalid. Motion timing precision must be modeled as a *decreasing function of crowd level*, and the offense's optimal response is to shift leverage from the acoustic channel (cadence/audible) to the visual channel (motion/formation) — which is exactly the level-2 counter in the ToM section. The two layers are not independent; the acoustic layer **selects** the strategic layer.

**VETO 3 — The pocket-geometry / closing-velocity singularity (biomechanical layer).**

Leverage window for a single-cut decision:

$$\tau = \frac{d_{\perp}}{v_{\text{closing}}}\ [\mathrm{s}]$$

with $d_\perp$ the perpendicular distance from the defender to the intended cut landmark [m] and $v_{\text{closing}}$ the closing speed [$\mathrm{m\,s^{-1}}$]. Human simple reaction time plus movement initiation is $\approx 0.20$–$0.25\ \mathrm{s}$; a committed cut needs $\tau \gtrsim 0.30\ \mathrm{s}$ to be executable.

**Singularities:** (i) $\tau \to 0$ as $d_\perp \to 0$ — the cut is unmakable; (ii) $\tau$ becomes negative once the defender has crossed the leverage plane, i.e., the model returns a physically meaningless value rather than an error, which will silently corrupt any automated pipeline; (iii) constant-$v_{\text{closing}}$ is violated during the defender's acceleration phase, biasing $\tau$ upward by roughly 20–35% for defenders in their first 0.4 s of pursuit.

**Veto:** the naive EV model treats outside zone as a fixed-yards-per-carry operator. It is not. It is a **conditional** operator whose value is gated by $\tau$, and $\tau$ is set by the specific conflict defender's first-step quickness and the interior linemen's reach-block surface. Against a front whose linebackers trigger downhill fast, the married-run illusion *increases* $v_{\text{closing}}$ on the run action — the scheme's own success at selling run makes the subsequent handoff less executable. That is a **negative feedback term** absent from every static EPA model I am aware of.

**VETO 4 — Pressure hazard non-stationarity.**

Naive: $P(\text{sacked by } t) = 1 - e^{-ht}$ with constant hazard $h$ [$\mathrm{s^{-1}}$]. Reality: pressure arrival is clustered — stunt and twist timing concentrates at roughly $2.4$–$3.1\ \mathrm{s}$, and edge-plus-interior games produce a bimodal hazard. Fitting a homogeneous Poisson model to a bimodal hazard **underestimates the tail** at exactly the time-to-throw values ($2.6$–$3.2\ \mathrm{s}$) where a rhythm-based offense operates. Combined with VETO 3's covariance result $\mathrm{Cov}(t_{TT}, \varepsilon) > 0$, the joint failure probability is underestimated multiplicatively, not additively.

</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>

Three training environments with **verifiable** rewards — ground truth checkable from broadcast/tracking data, not from a model's own opinion.

**Scenario A — The covariance trap.**
*Environment:* synthetic pocket with bimodal pressure arrival at 2.4–3.1 s; agent chooses time-to-throw $t_{TT}$.
*Surface policy:* regresses $P(\text{completion})$ on $t_{TT}$ alone; learns a smooth inverted-U; throws at 2.8 s regardless of pressure phase.
*Reward (verifiable):* $R = \mathbb{1}[\text{completion}] - 2\cdot\mathbb{1}[\text{interception}] - 0.3\cdot\mathbb{1}[\text{sack}]$. Measurable from tracking + result data.
*Why the surface model fails:* it cannot represent $\mathrm{Cov}(t_{TT},\varepsilon)>0$; it treats the residual as independent noise and therefore never learns to *shorten* the clock when drift $A$ collapses.
*Veto-informed policy:* estimates $A$ and $c$ online, computes $\bar{T} = \frac{a}{A}\tanh(aA/c^2)$, and throws at $\min(t_{\text{optimal}}, \bar{T} + \delta)$.
*Falsifiable Sunday prediction:* if the 49ers' QB faces pressure arrival concentrated in the 2.4–3.1 s band on ≥ 12 dropbacks, then his interception-plus-strip-sack rate on dropbacks with $t_{TT} > 2.8\ \mathrm{s}$ will exceed his rate on dropbacks with $t_{TT} \le 2.5\ \mathrm{s}$ by a factor ≥ 2. **Falsified** if the two rates are within 25% of each other.

**Scenario B — The roof-density counterfactual.**
*Environment:* identical pass plays simulated at $\rho = 1.184$ and $1.204\ \mathrm{kg\,m^{-3}}$ (292 K vs 297 K at 101.3 kPa).
*Surface policy:* sets all weather coefficients to zero because "indoor."
*Reward:* $-\lVert \mathbf{x}_{\text{landing}} - \mathbf{x}_{\text{target}}\rVert_2$ in metres. Directly verifiable via ball-tracking landing coordinates.
*Why the surface model fails:* it cannot represent a mechanism it has assigned probability zero.
*Veto-informed policy:* retains $\rho(T)$ and $F_D = \frac{1}{2}\rho v^2 C_D A$; adjusts launch for roof state.
*Falsifiable Sunday prediction:* deep attempts ($>30$ air yards) will show a systematic landing-point bias whose sign correlates with roof state at kickoff, magnitude ≥ 0.25 m. **Falsified** if the mean bias is < 0.10 m or shows no roof-state correlation.

**Scenario C — The cadence-channel reallocation.**
*Environment:* agent chooses the fraction of leverage allocated to the acoustic channel (verbal cadence, check-with-me) vs the visual channel (motion-as-check, formation-declared answers), under a stochastic crowd-noise level $L_{\text{crowd}}$.
*Surface policy:* treats venue as a fixed scalar; allocates leverage by season-long run/pass tendency.
*Reward:* offense EPA·play⁻¹ minus a penalty for pre-snap penalties (false start, illegal shift, delay of game). All three are **objectively verifiable** from the official record.
*Why the surface model fails:* it has no representation of $\mathrm{SI}(M)$ or $RT_{60}$, so it cannot predict that its own audible-check option degrades.
*Veto-informed policy:* allocates to the visual channel as $M = L_{\text{cadence}} - L_{\text{crowd}}$ falls, since $\partial\,\mathrm{SI}/\partial M$ is maximal near $M \approx 0$.
*Falsifiable Sunday prediction:* the 49ers' pre-snap penalty rate at AT&T Stadium will exceed their road-season baseline by ≥ 60%, and their motion-at-snap frequency will exceed their season baseline by ≥ 15%. **Falsified** if pre-snap penalties are at or below baseline, or if motion frequency does not rise.

**Cross-cutting falsification test.** The entire dossier rests on one claim: that the enclosure's acoustic effect dominates its variance-compressing effect. That claim is falsified if the game's total play count and the 49ers' early-down EPA·play⁻¹ both land within one standard deviation of their open-air road baseline. If both do, the acoustic channel was not the binding constraint and the analysis should be discarded in favor of a pure personnel-and-execution model.

**What I cannot tell you.** Whether the 2026 Cowboys staff runs the Quinn pattern-matching shell, who is rushing the passer, who is under center in San Francisco, and the injury state of either roster. Those are the inputs that would convert this structural analysis into a game-specific one, and I will not fabricate them.