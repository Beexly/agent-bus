---
source: "2021 - Extended Model for Expected Threat in Soccer - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2021"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3426
---

<NATIVE_REASONING>
The user wants me to analyze a source document about an Extended Model for Expected Threat in Soccer. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

I must cite exact [PAGE N] markers and verbatim quotes since source pages are provided. The source text appears to be from page 1 (only one page provided).

Let me carefully analyze the source text:

Title: Extended Model for Expected Threat in Soccer
Authors: Jirka Poropudas (SportIQ) and Ville-Pekka Inkilä (Football Association of Finland)
Event: NESSIS 2021

Key content:
- Question: What is the value of ball possession? Probability of scoring when a team has ball at given location.
- Original xT by Karun Singh (2018 blog post)
  - Simple Markov chain
  - Only ball event data (no locations for other players)
  - Offensive model (goals for)
  - Short time scope (next 5 events)
- Definition: "Probability of scoring a goal in next 5 events, when in possession of the ball at the given location"
- Two event types: Shot (scoring probability from xG model) or Movement to another location
- Field divided into grid of locations
- Event probabilities from real-life event data
- Equation: xT = S·xG + M·P_M·xT (approx from garbled text)
- Numerical value solved by iteration (repeating equation five times)
- Two-way xT model: xT = S·xG + M·P_M·xT + T·P_TO·(-xT) ... loss of possession denoted by minus sign
- Decision model: Shoot, Move, Turnover
- Dynamics: xG scoring probability
- P_M: Move to new location, transition probabilities
- P_TO: Move to new location following turnover
- Extended events: xT = S·xG + M·P_MS·xT + M·P_ML·xT + T·P_TOS·(-xT) + T·P_TOL·(-xT)
  - Short or Long move
  - Short or Long turnover
- Minus signs denote loss of possession
- Sections on Move probability, Transition probabilities for move events, Turnover probability, Transition probabilities for turnovers, Shot probability and xG model, Extended xT, Expected value of movement, Expected cost of turnovers, Expected value of shot
- Discussion: Extended xT gives better representation, two-way model includes opponent's scoring, time horizon up to next shot, more detailed state transitions, expected value/cost of events
- Future work: Rewarding players properly ("xT added"), include player locations (StatsBomb 360 data)

I need to formulate formal LaTeX equations based on this, being careful not to invent fake ratios but to represent what's in the source accurately.

Since the source text has garbled equations (bullet points instead of proper math), I should reconstruct them formally based on the verbal description, citing the source page.

Let me draft the sections:

<THINK_TRACE>: Deep multi-hop derivation and gray-zone audit. Need >=400 words. I should discuss the Markov chain structure, the Bellman-like equation, the iteration to 5 events (finite horizon), the extension to two-way (zero-sum-ish opponent threat), short vs long moves/turnovers, and identify gray zones: missing data on other players, finite horizon truncation, grid discretization, iteration convergence vs exact solution, stationarity assumption, independence of events, no player locations, no game state (score, time remaining), etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define state space as grid locations l ∈ L. Define xT(l) as probability of scoring in next 5 events given possession at l. Original: xT(l) = p_shoot(l)·xG(l) + p_move(l)·Σ_{l'} P(l'|l, move)·xT(l'). Iterated 5 times. Two-way: subtract opponent's expected threat after turnover: xT(l) = p_shoot(l)xG(l) + p_move(l)ΣP_M(l'|l)xT(l') − p_TO(l)[p_TOS(l)ΣP_TOS(l'|l)xT(l') + p_TOL(l)ΣP_TOL(l'|l)xT(l')]. Extended: split moves into short/long, turnovers into short/long. Units: dimensionless probability [0,1]. Time horizon: 5 events (discrete event steps, not seconds). Breakdown: if p_move + p_TO + p_shoot ≠ 1 (incomplete event space), singularity if spectral radius of transition matrix ≥ 1 (though finite horizon avoids infinite series divergence), grid resolution limits, no defensive player coordinates means conditional probabilities are marginalized over unseen states.

<RETROCAUSAL_GENEALOGY>: Lineage from Karun Singh 2018 blog -> Markov decision processes / Bellman equations -> expected goals models -> spatial decomposition (grid) -> two-way extension -> StatsBomb 360 future work. Multi-week traps: overfitting to event data, ignoring defensive gravity, temporal non-stationarity across weeks (tactical adjustments), small-sample locations in grid cells.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression: teams under pressure revert to high-xT zones or safe backward passes; counter-trap: opponents compress space exactly where xT model predicts movement; clock: finite 5-event horizon mismatches actual game clock (end-of-game desperation changes decision model).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical veto: pitch dimensions, gravity, ballistics limit shot xG. Biomechanical: player sprint speed, acceleration limit short vs long move feasibility. Weather: rain/wind alter ball movement and transition probabilities. Since source lacks other-player locations, physical layer is only implicitly via xG. Veto proof: if biomechanical reachability set R(l) does not include l' then P(l'|l) must be zero regardless of historical frequency.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable scenarios.
1. Grid-cell sparsity veto: if a grid cell has < N historical events, transition probabilities are statistically unverifiable; prediction defaults to prior or adjacent-cell smoothing. Verifiable by checking cell counts.
2. Turnover asymmetry veto: if possession loss occurs in defensive third, opponent's xT from resulting location exceeds current xT, making the move negative-value; model must veto the move action. Verifiable by comparing xT(l) vs xT(l') after turnover.
3. Non-Markovian fatigue veto: if the same high-xT corridor is used repeatedly within a short window, defender recovery invalidates stationary transition probabilities; prediction must decay. Verifiable by tracking event inter-arrival times and defender location history (if available) or workload metrics.

Need predictions for each.

Word count: Need >=1000 words total. THINK_TRACE >=400. I'll write generously across all sections.

Let's ensure no betting lines. No mention of odds, spreads, etc.

No toy equations: I will use proper LaTeX with definitions. Avoid invented ratios like Force/Fatigue. All equations derived from source text.

Page citations: [PAGE 1] since only one page is provided. I'll cite verbatim quotes with [PAGE 1].

Let's write the response now.

Structure:
- Start with the XML sections exactly as named.
- THINK_TRACE >= 400 words.
- SOURCE_OPERATORS_AND_EQUATIONS with LaTeX.
- RETROCAUSAL_GENEALOGY.
- RECURSIVE_THEORY_OF_MIND.
- CROSS_LAYER_VETO_ADJUDICATION.
- RLVR_COUNTERFACTUAL_VETOES with 3 scenarios + predictions.

I need to be careful about verbatim quotes. Let me extract exact quotes:
- "What is the value of ball possession?" [PAGE 1]
- "In other words, what is the probability of scoring when a team has the ball at a given location?" [PAGE 1]
- "Probability of scoring a goal in next 5 events, when in possession of the ball at the given location" [PAGE 1]
- "The numerical value of xT is solved by iteration. That is, by repeating the equation five times." [PAGE 1]
- "The minus sign in last term denotes loss of possession!" [PAGE 1]
- "The minus sign in last two terms denotes loss of possession!" [PAGE 1]
- "Extended xT model gives a better representation of soccer dynamics" [PAGE 1]
- "Two-way model includes also opponent’s scoring" [PAGE 1]
- "Time horizon up to the next shot" [PAGE 1]
- "Rewarding players properly for their actions" [PAGE 1]
- "Include player locations into xT models’ state space?" [PAGE 1]
- "For example, StatsBomb 360 data" [PAGE 1]

Good.

Now let's draft with depth.
</NATIVE_REASONING>

<THINK_TRACE>
The source document describes a finite-horizon Markov decision model for possession value in soccer, originally introduced by Karun Singh in 2018 and extended by Poropudas and Inkilä at NESSIS 2021 [PAGE 1]. The core object is xT(l), defined verbatim as the "Probability of scoring a goal in next 5 events, when in possession of the ball at the given location" [PAGE 1]. This is a discrete-event horizon, not a continuous-time clock: the model iterates exactly five times to solve for xT [PAGE 1]. Because the field is discretized into a grid of locations l ∈ L, the state space is finite but coarse-grained, and all event probabilities are estimated from real-life event data without locations for other players [PAGE 1]. That last omission is a first-order gray zone: the transition kernel P(l′ | l, a) is marginalized over unobserved defender positions, goalkeeper positioning, and tactical spacing, so the Markov assumption conditions only on the ball carrier's grid cell.

The original model is offensive-only, considering goals for and a short time scope of the next 5 events [PAGE 1]. Its decision model at each state is binary: Shoot or Move [PAGE 1]. Shooting yields an immediate expected-goals value xG(l); moving yields a discounted continuation value Σ_{l′} P_M(l′ | l) xT(l′), where the discount is implicit in the finite horizon rather than an explicit multiplicative γ. The two-way extension adds Turnover as a third decision branch [PAGE 1], with a minus sign denoting loss of possession [PAGE 1]: possession transfers to the opponent, who then faces their own xT from the post-turnover location, subtracting from the original team's possession value. The extended model further factorizes Move into Short-Move (P_MS) and Long-Move (P_ML), and Turnover into Short-Turnover (P_TOS) and Long-Turnover (P_TOL), each with separate transition kernels to new locations [PAGE 1]. This granularity is intended to capture expected value/cost of events more precisely, but it multiplies the number of parameters that must be estimated per grid cell.

Gray-zone audit: (1) The iteration count is fixed at five regardless of game context, so end-of-game states where a team is trailing and needs a goal within two minutes are treated identically to early-match states [PAGE 1]. (2) The model assumes stationarity of transition probabilities across match minutes, score states, and fatigue levels; no such conditioning variables appear in the source [PAGE 1]. (3) Grid discretization creates boundary singularities: a cell near the penalty spot may aggregate shots from 11 m and 16 m, each with radically different xG, yet the model assigns one xG per cell [PAGE 1]. (4) If the row-stochastic condition p_shoot(l) + p_move(l) + p_TO(l) = 1 fails for any cell because of missing event classes (e.g., interceptions, fouls, out-of-play), the Bellman backup is not a proper contraction over the simplex [PAGE 1]. (5) Solving by five iterations yields a finite-horizon approximation; the exact infinite-horizon solution would require the spectral radius of the move-transition submatrix to be strictly less than one, a condition not verified in the text [PAGE 1].

These structural limitations set up the veto layers in later sections: physical reachability, biomechanical urgency, and weather-dependent ball physics can all invalidate historically estimated P_M and P_TO when the current state lies outside the support of the training event distribution.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(L\) be the finite set of grid locations partitioning the pitch, and let \(l \in L\) denote the ball location at possession onset. Define the state value

\[
xT(l) \equiv \Pr(\text{goal scored by possessing team within next 5 events} \mid \text{possession at } l).
\]

Units: dimensionless probability, \(xT(l) \in [0,1]\). Time horizon: \(H = 5\) discrete events, not seconds [PAGE 1].

Original one-way xT (Singh 2018, summarized in source) [PAGE 1]:
The decision set is \(\mathcal{A}(l) = \{\text{Shoot}, \text{Move}\}\). The Bellman-type backup at iteration \(h\) is

\[
xT_h(l) = p_S(l)\, xG(l) \;+\; p_M(l) \sum_{l' \in L} P_M(l' \mid l)\, xT_{h-1}(l'),
\]

with terminal condition \(xT_0(l) = 0\) and \(xT(l) = xT_5(l)\) obtained by repeating the equation five times [PAGE 1]. Here \(p_S(l) + p_M(l) \le 1\); any residual probability mass corresponds to unmodeled events and must be absorbed into a termination or turnover class for the operator to be stochastic. \(xG(l)\) is the scoring probability from a suitable expected-goals model, conditional on shooting from cell \(l\).

Two-way extension [PAGE 1]:
Add turnover action \(a = TO\) with loss-of-possession sign:

\[
xT(l) = p_S(l)\, xG(l) 
+ p_M(l) \sum_{l'} P_M(l' \mid l)\, xT(l') 
- p_{TO}(l)\, \widehat{xT}_{\text{opp}}(l^{\text{TO}}),
\]

where \(\widehat{xT}_{\text{opp}}(l^{\text{TO}})\) is the opponent's scoring probability from the post-turnover location \(l^{\text{TO}}\). The minus sign denotes loss of possession [PAGE 1]. If the opponent's xT from the turnover destination exceeds the value retained by moving safely, the move branch is negative-expected-value.

Extended event factorization [PAGE 1]:
The model splits movement and turnover into short and long variants:

\[
xT(l) = p_S(l)\, xG(l)
+ p_{MS}(l) \sum_{l'} P_{MS}(l' \mid l)\, xT(l')
+ p_{ML}(l) \sum_{l'} P_{ML}(l' \mid l)\, xT(l')
- p_{TOS}(l) \sum_{l'} P_{TOS}(l' \mid l)\, \widehat{xT}_{\text{opp}}(l')
- p_{TOL}(l) \sum_{l'} P_{TOL}(l' \mid l)\, \widehat{xT}_{\text{opp}}(l').
\]

All transition probabilities are location-dependent and estimated from real-life event data [PAGE 1]. No locations for other players are included, so every \(P(\cdot \mid l)\) is a marginal over unseen defensive configurations [PAGE 1].

Expected values discussed in the source sections (not numerically populated in the text) [PAGE 1]:
- Expected value of movement: \(V_M(l) = p_M(l) \sum_{l'} P_M(l' \mid l) [xT(l') - xT(l)]\).
- Expected cost of turnovers: \(C_{TO}(l) = p_{TO}(l) [xT(l) + \widehat{xT}_{\text{opp}}(l^{\text{TO}})]\).
- Expected value of shot: \(V_S(l) = p_S(l)\, xG(l)\).

Singularity and breakdown regimes:
1. If \(\sum_{a} p_a(l) < 1\) at any cell because of omitted event types, the backup operator is not trace-preserving over the probability simplex.
2. If a grid cell contains zero historical shots, \(xG(l)\) is unidentifiable without spatial smoothing or hierarchical pooling.
3. The five-iteration truncation is exact only if the game truly ends or possession certainly resolves within five events; in overtime or desperate late-match states, the effective horizon is clock-driven, not event-driven.
4. The spectral radius condition \(\rho(\mathbf{P}_M) < 1\) is required for convergence of the unrolled infinite series; the finite-horizon iteration avoids divergence but introduces horizon bias.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs from Karun Singh's 2018 blog post, cited in the source, through classical Markov decision processes and Bellman equations, into spatial sports analytics [PAGE 1]. Singh's original xT rests on a simple Markov chain using only ball-event data, no off-ball player locations, an offensive-only goals-for objective, and a short time scope of the next five events [PAGE 1]. Poropudas and Inkilä extend this by making the model two-way—explicitly incorporating opponent scoring after turnovers—and by refining the state-transition alphabet into short versus long moves and short versus long turnovers [PAGE 1]. The discussion section flags two future directions: rewarding players properly through "xT added" models that consider the expected value of actions, and including player locations in the state space, for example via StatsBomb 360 data [PAGE 1].

Multi-week traps arise from treating the estimated transition kernels as stable across micro-cycles. Over a single week, a team may not repeat a tactical shape; over three to four weeks, opponents film and adjust to the same high-xT corridors, rendering historical \(P_M(l' \mid l)\) and \(P_{TO}(l)\) stale. Grid-cell sparsity compounds this: a cell observed 12 times in a month yields a maximum-likelihood turnover probability with a standard error on the order of \(\sqrt{p(1-p)/12}\), easily ±25 percentage points for mid-range \(p\), yet the source presents no regularization or Bayesian shrinkage [PAGE 1]. Another trap is the "next shot" time-horizon claim in the discussion [PAGE 1], which conflates event count with game clock; in cup matches with extra time, or in matches where a team is trailing by one goal in the 85th minute, the optimal decision rule is not the stationary five-event backup but a clock-sensitive, score-sensitive dynamic program that the source does not specify.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when a team is under pressure or protecting a lead, the decision model regresses to high-frequency, low-variance actions—backward passes to the goalkeeper or lateral moves within the defensive third—because the historical \(P_{TO}(l)\) in advanced cells is elevated and the loss-of-possession term \(-p_{TO}(l)\widehat{xT}_{\text{opp}}\) dominates [PAGE 1]. The model itself does not encode score state or time remaining, so it cannot distinguish a 0–0 match in the 20th minute from a 1–0 match in the 88th; both receive the same \(xT(l)\) backup, yet human coaches switch to crisis habits that violate the stationarity assumption.

Counter-trap: an opponent who knows the extended xT grid can compress precisely the cells with high continuation value \(xT(l')\), forcing the ball carrier into long moves (\(P_{ML}\)) or turnovers (\(P_{TOL}\)) whose transition kernels were estimated under less defensive pressure. Because the model has no defender-location state [PAGE 1], it cannot anticipate this adaptive coverage and will overvalue movement into cells that are historically reachable but currently guarded.

Clock mismatch: the five-event horizon is agnostic to match clock. In the final minutes, the value of possession is path-dependent—holding the ball may be more valuable than shooting because it denies the opponent possession—yet the source's objective is purely goals-for within five events [PAGE 1]. Thus the model's implicit theory of mind assumes the opponent plays a stationary best response, ignoring that both managers are recursively reasoning about each other's xT maps under a binding clock constraint.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: pitch geometry imposes a hard constraint on the support of \(P_M\) and \(P_{ML}\). A long move from cell \(l\) to \(l'\) is physically impossible if the Euclidean distance exceeds the maximum ball-travel distance achievable in one event under aerodynamic drag; the source's event data may still record a nonzero historical frequency if "long move" is defined by grid-cell displacement rather than physical reachability, creating a phantom transition. Biomechanical layer: the ball carrier's sprint speed and acceleration bound the set of reachable \(l'\) within the inter-event time; if the observed historical \(P_{ML}(l' \mid l) > 0\) but \(l'\) lies outside the biomechanical reachability set \(\mathcal{R}(l)\) given fatigue and surface conditions, the transition must be vetoed to zero. Weather layer: wind velocity and precipitation alter ball roll and flight, shifting the conditional distribution of shot \(xG(l)\) and the transition kernel for long passes; the source's xG model and event probabilities are calibrated on pooled weather conditions, so a veto is required when wind speed exceeds the calibration envelope.

Veto proof: For any candidate move \(l \to l'\), define \(\mathcal{V}_{\text{bio}}(l,l') = 1\) iff \(l' \in \mathcal{R}(l)\), where \(\mathcal{R}(l)\) is the biomechanically reachable set given player speed, ball speed, and surface friction. The admissible transition kernel is

\[
\tilde{P}_M(l' \mid l) = \frac{P_M(l' \mid l)\, \mathcal{V}_{\text{bio}}(l,l')}{\sum_{l''} P_M(l'' \mid l)\, \mathcal{V}_{\text{bio}}(l,l'')},
\]

provided the denominator is nonzero; if the denominator is zero, the state \(l\) is a dead-end under current physical constraints and the model must default to a shoot or safety action rather than renormalize an impossible kernel. Because the source explicitly omits other-player locations [PAGE 1], this veto operates on ball-carrier physics alone; full adjudication would require the StatsBomb 360 state-space expansion noted as future work [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Grid-cell sparsity veto. If a grid cell \(l\) contains fewer than \(N = 30\) historical possession events in the training window, the maximum-likelihood estimates of \(p_S(l), p_M(l), p_{TO}(l)\) and all associated transition kernels are statistically unverifiable. Veto rule: replace cell-specific estimates with a spatial prior pooled over adjacent cells and flag the output as low-confidence. Verification: query the event log for cell \(l\) over the preceding four matchweeks; if count \(< 30\), the veto triggers. Prediction: in matches where a team builds play through a rarely occupied channel (e.g., the left half-space between lines), the model's raw \(xT(l)\) will be overconfident; after vetoing and smoothing, predicted possession value in that channel drops by at least 15% relative to the unsmoothed estimate.

Scenario 2 — Turnover asymmetry veto. If possession is lost in the defensive third and the opponent's post-turnover xT satisfies \(\widehat{xT}_{\text{opp}}(l^{\text{TO}}) > xT(l) + V_M(l)\), then retaining possession via a safe move dominates any risky long move or shot. Veto rule: set \(p_{ML}(l) = p_{TOL}(l) = 0\) and renormalize over Shoot and Short-Move only. Verification: compute \(xT(l)\) and \(\widehat{xT}_{\text{opp}}(l^{\text{TO}})\) from the model; if the inequality holds, any recommendation of a long move from \(l\) is invalid. Prediction: teams that violate this veto (i.e., attempt long balls from deep when opponent counter-attack xT exceeds retained value) will exhibit turnover-to-shot ratios at least 40% higher than teams obeying the veto over a three-week sample.

Scenario 3 — Non-Markovian fatigue veto. If the same high-xT corridor is used for three or more consecutive possessions within a 10-minute window, defender recovery and pressing intensity invalidate the stationary \(P_M(l' \mid l)\) estimated from match-wide averages. Veto rule: decay the continuation value \(xT(l')\) by a factor \(\exp(-\lambda k)\) where \(k\) is the number of recent uses of that corridor and \(\lambda\) is calibrated to sprint-recovery physiology; if the decayed value falls below the shoot value \(xG(l)\), the veto forces a shot. Verification: track possession sequences by corridor ID and event timestamp; if \(k \ge 3\) within 600 seconds, the veto is active. Prediction: after the third consecutive possession through the same corridor, the observed shot conversion rate will exceed the model's baseline move-continuation prediction by at least 8 percentage points, because defenses are out of position and the stationary kernel underestimates shot value.
</RLVR_COUNTERFACTUAL_VETOES>