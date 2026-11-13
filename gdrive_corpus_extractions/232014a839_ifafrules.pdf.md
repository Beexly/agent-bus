---
source: "ifafrules.pdf"
folder: "/CorpusRoot"
pages: 201
model: deepseek/deepseek-v4.1-flash-1017
words: 5913
---

<NATIVE_REASONING>
The user wants me to analyze the IFAF 2023 Football Rules document across specific XML sections, producing at least 1,000 words of depth. I need to cite [PAGE N] markers with verbatim quotes, use formal LaTeX with units, and avoid betting lines/toy equations.

Let me plan my analysis. This is a rules corpus — I should treat it as a specification of state transitions in a formal system. I can derive operators from the rules: the 40/25-second play clock, the 10-second runoff, targeting/disqualification, the free-blocking zone, the tackle box, the 27-yard... wait, no, let me use what's actually there.

Key quantifiable constraints in the source:
- Field dimensions: hash marks 60 ft from sidelines (PAGE 18, 1-2-1-l); IFAF yard 36 in normally, minimum 34.12 in (86.67 cm) (PAGE 18, 1-2-1-a-1)
- Ball inflation 12.5–13.5 psi (PAGE 23, 1-3-1-g); weight 14–15 oz
- Play clock 40/25 s (PAGE 58, 3-2-4-b)
- 10-second runoff (PAGE 70, 3-4-4)
- Goal posts: uprights 30 ft above ground, crossbar 10 ft, 18 ft 6 in apart inside (PAGE 20, 1-2-5)
- Goal post padding at least 6 ft (PAGE 20, 1-2-5-e)
- Roof no less than 90 ft (PAGE 19, 1-2-1-n); roof closure decision 90 min before kickoff, 40°F (4°C), wind gusts > 40 mph (64 km/h) (PAGE 19, 1-2-1-o)
- Drone prohibition: 165 yards (150 metres) (PAGE 31, 1-4-11-g-1)
- Running clock at >34 points (PAGE 60, 3-3-2)
- Two-minute warning cannot happen before 2'00 (PAGE 5, IFAF difference 3-3-8)
- Free-blocking zone: 5 yards lateral, 3 yards longitudinal (PAGE 34, 2-3-6-a)
- Tackle box: 5 yards from middle lineman (PAGE 52, 2-34-1-a)
- Targeting crown = 6-inch radius from apex (PAGE 128, 9-1-3)
- Snapper contact protection: 1 second after snap in scrimmage kick formation (PAGE 134, 9-1-14)
- Blind-side block / one-yard halo for kick catch interference (PAGE 95, 6-4-1-b)
- One-second stop rule (PAGE 100, 7-1-2-a)
- 3 seconds — departing player / take-a-knee (PAGE 72, 3-5-2-c-2; PAGE 140, 9-2-2-d)
- 25 other individuals in team area (PAGE 20, 1-2-4-b)
- 5-yard penalty increments, 15-yard penalties
- Defensive pass interference: 15-yard cap or spot foul if < 15 yards (PAGE 112)
- Halving the distance (half-the-distance) — recursive
- Minimum time for a play after spiking: 3 seconds or more (PAGE 59, 3-2-5-a)

Let me build formal operators with units.

Ideas for operators:
1. Play-clock reset operator: P(t) mapping, with breakdown at the 20-second threshold (3-2-4-b-3). This is a well-defined "singularity" — actually a reset discontinuity.
2. The 10-second runoff operator R_10 — a map from game clock to game clock, with the "veto" conditions: both teams equally responsible (3-4-6-d), timeout expenditure (3-4-6-c).
3. Running clock indicator: Heaviside function of score margin vs 34, with hysteresis (3-3-2-g-2).
4. Penalty enforcement: half-the-distance map — this is a contraction, a geometric sequence. B_n = B_0 / 2^n approaching goal line but never reaching — an actual mathematical singularity proxy for the "cannot place inside the 2-yard line" rule (7-3-8 Penalty).
5. Targeting detection: the crown 6-inch radius region as a set-theoretic indicator.
6. The free-blocking zone as a disintegration operator — a time-varying domain.
7. Untimed down extension — a fixed-point operator on period length.

Breakdown regimes — I should specify exact conditions where each operator fails:
- Play clock: reset only if it drops below 20 seconds before ball is ready (PAGE 5, IFAF difference 3-2-4)
- Running clock: if margin drops to 34 or fewer, ends immediately on the relevant score (PAGE 62, 3-3-2-g-2)
- 10-second runoff: doesn't apply when clock wasn't running or event didn't stop clock (3-4-6-a)
- Half-the-distance: cannot place inside the 2-yard line from outside; if previous spot already on/inside the 2, "first down halfway between the previous spot and the goal line"

Retrocausal genealogy: I should trace lineage — IFAF rules retain affinity with NCAA (PAGE 2), the IAFOA/BAFRA officiating manual (PAGE 7), the 2011-2023 original material (PAGE 1), rule changes from 2018 (pants covering knees), 2022 (uniform compliance), 2023 (crown of helmet definition, forcible contact replacing initiate). Historical/scientific lineage: MRSA, NOCSAE standards, concussion protocols, lightning (Appendix B). Multi-week traps: officiating mechanics standardization across 3-8 crews (PAGE 7), the running clock adoption in competitions, feigning injury.

Recursive theory of mind: crisis habit regression — under pressure, teams revert to habitual patterns; counter-trap — the "hide-out" pass (9-2-2), the simulated punt (A.R. 9-2-2:II), the fake spike, the "take-a-knee" 3-second rule (9-2-2-d), clock management (spike at 3 seconds). The coach/opponent modeling: the rules explicitly model deception and counter-deception ("designed to cause an opponent to foul", PAGE 10).

Cross-layer veto adjudication: physical/biomechanical/weather veto — helmet comes off (3-3-9), lightning appendix, roof closure at 40°F/40mph, MRSA, blood-saturated uniforms (3-3-5-a-4), concussion. These veto rule-derived outcomes.

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions.

Let me write it. Aim for ~2,000+ words total. THINK_TRACE needs ≥400 words.

Let me make sure I use formal LaTeX with units. Use things like:

$$\mathcal{P}: t \mapsto P(t), \quad P \in [0,40]\ \text{s}$$

Units: seconds (s), yards (yd), inches (in), pounds per square inch (psi), ounces (oz), feet (ft), metres (m), °C, °F, km/h.

Let me write the sections.

For THINK_TRACE I need deep multi-hop derivation and gray-zone audit, ≥400 words.

Let me draft.

I'll be careful to quote verbatim and cite pages.

Verbatim quotes I can use:
- PAGE 7: "It is a recipe for disaster for officials who are working in their national competitions for most weeks of the year to have to switch to a somewhat arbitrarily different set of mechanics for the one or two weeks of the year when they work international competition."
- PAGE 8: "The definition of "crown of the helmet", approved starting with the 2023 season, focuses the attention on the top of the helmet. The term "forcible contact" has replaced the word "initiate" to ensure the intent of the rule is clear."
- PAGE 10: "With the advent of the up-tempo offences, there is a growing trend of defensive players feigning an injury in an attempt to slow down or break the rhythm of the offense and try to gain an unwarranted time out."
- PAGE 10: "To discourage tactics at the line of scrimmage designed to cause an opponent to foul or to give either team an unmerited advantage, officials must be on high alert for any type of illegal pre-snap actions by either team."
- PAGE 12: "It is the same as if a sprinter in a 100-metre dash had a secret arrangement with the starter to give them a tenth-of-a-second warning before firing the pistol."
- PAGE 59: "With two seconds or one second on the game clock there is enough time for only one play."
- PAGE 62: "If the margin drops to 34 or fewer points, the running clock session will end immediately on the relevant score"
- PAGE 128: "The crown of the helmet is the top segment of the helmet; namely, the circular area defined by a 6-inch radius from the apex (top) of the helmet."
- PAGE 134: "When a team is in scrimmage kick formation, a defensive player may not initiate contact with the snapper until one second has elapsed after the snap."
- PAGE 95: "It is an interference foul if, before the receiver touches the ball, a Team A player enters the area defined by the width of the receiver's shoulders and extending one yard in front of them."
- PAGE 72: "A departing player who leaves the huddle or their position within three seconds, after a substitute becomes a player, is considered to have left immediately."
- PAGE 140: "Team A may not advance the ball nor consume more than 3 seconds having indicated to their opponents that they do not intend to advance the ball (a "take-a-knee" play)."
- PAGE 5: "Play clock reset only if it drops below 20 seconds before ball ready."
- PAGE 19: "the roof must be closed if (from 90 minutes before the game until the end of the game) precipitation or lightning is within the vicinity of the stadium, the temperature drops below 40°F (4°C), or wind gusts are greater than 40 miles per hour (64 km/h)."
- PAGE 18: "An IFAF yard is normally 36 inches (91.44cm) long, but may be shortened to no less than 34.12 inches (86.67cm)"
- PAGE 23: "Inflated to the pressure of 12½ to 13½ pounds per square inch (psi)."
- PAGE 34: "The free-blocking zone is a rectangle centred on the middle lineman of the offensive formation and extending fiv e yards laterally and three yards longitudinally in each direction."
- PAGE 112: "No penalty enforced from outside the two-yard line may place the ball inside the two-yard line"
- PAGE 65: "If the player injury is the only reason for stopping the clock (other than their or a teammate's helmet coming off, Rule 3-3-9) with less than one minute in the half, the opponent has the option of a 10-second runoff."
- PAGE 71: "The 10-second rule only applies if the game clock is running when the event occurs and the event causes the game clock to stop."
- PAGE 71: "The 10-second runoff does not apply when both teams are equally responsible for stopping the clock (e.g. offsetting fouls, or injured or helmet-off players from both teams)."
- PAGE 142: "This is a blatant and obvious unfair act designed to take time off the clock. The referee will convert the holding fouls to unsportsmanlike conduct fouls."
- PAGE 31: "no drone may be flown within 165 yards (150 metres) of any area occupied by participants or spectators."
- PAGE 20: "Goal posts shall be padded with resilient material from the ground to a height of at least six feet."
- PAGE 5/15 difference: "The tackle box is centred on the middle lineman, not the snapper."
- PAGE 88: "A wedge is defined as two or more players aligned shoulder to shoulder within two yards of each other."
- PAGE 130: ""Directed from the front" is defined as within the clock face region between "10 o'clock and 2 o'clock" forward of the area of concentration of the player being blocked."
- PAGE 100: "all Team A players must come to an absolute stop and remain stationary in their positions without movement of the feet, body, head or arms for at least one full second before the ball is snapped."
- PAGE 5: "Two-minute warning cannot happen before 2'00."
- PAGE 5: "Running clock."
- PAGE 20: "The team area shall be limited to squad members in full uniform and a maximum of 25 other individuals directly involved in the game."

Good. Now write.

Let me be careful with the note that the transcript has "fiv e" and "fiv e-yard" spacing artifacts — I should preserve verbatim including those if I quote, or note it.

I'll write now. Structure the answer as the five XML sections with a brief preamble? The prompt says sections must exist; I'll go straight in.

Length: aim for substantial. Let me write ~2,200 words.

For the RLVR counterfactual vetoes, I need 3 verifiable scenarios with predictions:
1. Score margin crosses 34 with a touchdown + try — predict running clock hysteresis behavior. Test: 41-0 → TD 41-6 stops clock, then try 41-7 (A.R. 3-3-2:XI). Verifiable: clock stops at the try score, not the TD.
2. Play clock below 20 before ball ready → referee pump signal resets to 25, game clock does not stop if operator responds quickly (A.R. 3-2-4:II). Prediction: no game-clock stoppage; only if operator fails does referee declare timeout.
3. 10-second runoff with offsetting fouls → no runoff (A.R. 3-4-4:IV). Prediction: clock remains at 0:15, starts on snap.
4. Half-the-distance recursion: repeated penalties — predict ball asymptotically approaches goal line, never enters; "halfway between previous spot and goal line."
5. Snapper one-second protection with a shoot-the-gap defender (A.R. 9-1-14:III) — predict legal.

I'll use three, maybe four.

Now the cross-layer veto — physical/biomechanical/weather veto proof. I should show that the rules embed physical vetoes that override tactical optimization: roof closure at 40°F/40mph gust/90 min pre-kickoff (deterministic, non-discretionary: "must be closed"); helmet-off biomechanical disruption (3-3-9); lighting/lightning Appendix B; MRSA transmission pathway; blood saturation; NOCSAE recertification; drone 150 m. Also the IFAF yard compression (34.12 in minimum) as a physical-geometry veto.

Also biomechanical: the crown 6-inch radius as a geometric measure over the helmet apex; the DEFENSELESS state as a vulnerability predicate.

Let me now write the actual response.

I need to also include breakdown/singularity regimes in SOURCE_OPERATORS_AND_EQUATIONS. Good.

Write it.
</NATIVE_REASONING>

<THINK_TRACE>
The corpus is a 201-page specification of a discrete-event game with continuous physical embedding. To make it tractable I read it as a hybrid automaton: continuous quantities (game clock τ, play clock P, ball position along the long axis x, score margin Δ, penalty distance d) perturbed by discrete rule firings. The multi-hop derivation proceeds as follows.

Hop 1 — identify the primitive time bases. Two independent clocks exist: τ (game clock, 48 min nominal, divisible into four equal periods, adaptable to 60/48/40/32 by competition regulation) and P (play clock, programmable to 40 s or 25 s). They are not synchronised; P is reset by an event class enumerated at [PAGE 58–59] and τ is started either on the snap or on the referee's signal depending on a second event class at [PAGE 61–62]. Hop 2 — note the arbitration clause. Rule 3-3-2-f states that when a snap-starting event and a referee-signal-starting event coincide, the snap governs — except that the 10-second runoff supersedes this, except when a charged timeout is granted. This is a three-level priority lattice, not a single rule. Hop 3 — observe that the 10-second runoff is itself a conditional operator with a veto predicate: it applies only if the clock was running *and* the event stopped it ([PAGE 71], "The 10-second rule only applies if the game clock is running when the event occurs and the event causes the game clock to stop"), and it is vetoed entirely when both teams are equally responsible ("offsetting fouls, or injured or helmet-off players from both teams"). Hop 4 — therefore any clock-management strategy is not a function of remaining time alone but of the joint indicator state (running?, stopped-by-whom?, timeout inventory?, foul symmetry?). This is the gray zone: the space where σ = (running, responsibility, timeouts) is ambiguous.

The gray-zone audit now targets the genuinely underdetermined cases. (i) Rule 3-2-4-c-4 vs 3-3-5-e: an injury to a defensive player sets P = 40 s; an injury to an offensive player sets P = 25 s; injuries to both set 40 s. But these only apply "if the injury and/or helmet off was the only reason for stopping the clock." When a penalty also stops the clock, the play clock reverts to 25 s and no runoff option exists (A.R. 3-3-5:XI–XIII). The operator is therefore conjunctive-negative: P = 40 only under ¬(any other stop cause). (ii) The half-the-distance map is a contraction that provably never reaches the goal line: repeated enforcement yields d_{n+1} = d_n/2, so d_n → 0 but the ball never crosses; the rule closes this with a textual ceiling, "No penalty enforced from outside the two-yard line may place the ball inside the two-yard line," and a fallback placement "halfway between the previous spot and the goal line." That is an explicit truncation of a converging geometric series — the only true singularity-avoidance construct in the corpus. (iii) The running-clock predicate at Δ > 34 points is hysteretic, not memoryless: it latches on at the score event and unlatches "immediately on the relevant score" when Δ ≤ 34. A.R. 3-3-2:X–XI resolves the ambiguity of whether the touchdown or the try is "the relevant score" — the answer differs with the arithmetic, which is a genuine gray zone the corpus resolves by example rather than by formula.

Two further gray zones deserve audit. First, the one-second protection of the snapper under 9-1-14 applies only "when a team is in scrimmage kick formation," and scrimmage kick formation itself requires that "it must be obvious that a kick will be attempted" — an irreducibly intentional predicate embedded inside a biomechanical timer. Second, the substitution window uses a three-second heuristic ([PAGE 72], "A departing player who leaves the huddle or their position within three seconds … is considered to have left immediately") while the pre-snap freeze uses a one-second absolute stop. Three different temporal quanta (1 s, 3 s, and the continuous-integer play clock) coexist, and no rule harmonises them.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Operator 1 — Play-clock scheduling map.** Define the play clock state P ∈ [0, 40] s with reset target r ∈ {25, 40} s. The reset rule is event-conditioned: r = 25 s for the twelve enumerated causes at [PAGE 58–59] (penalty administration, charged timeout, media timeout, offensive-team injury, measurement, Team B first down other than after a free kick, post-kick downs where Team B next snaps, scores other than a Team A touchdown, period start, extra-period possession-series start, video review, other administrative stoppage). The IFAF-distinctive guard is stated at [PAGE 5]: "Play clock reset only if it drops below 20 seconds before ball ready." Formally, with t_ready the instant the ball is placed and the official steps away,

r(t_ready) = 25 s ⟺ P(t_ready) < 20 s, and r = 40 s otherwise.

Breakdown regime: the reset is *discretionary in execution, mandatory in intent* — [PAGE 59] A.R. 3-2-4:II holds that if the operator responds "quickly" to the referee's "pump" signal, "the game clock does not stop"; only non-response converts to a charged referee's timeout. The operator therefore bifurcates on an unmeasured reaction latency, which is the exact singularity.

**Operator 2 — Ten-second runoff.** Let τ be game-clock reading, and let σ ∈ {0,1} be the indicator that both teams are equally responsible for the stoppage. Then

R₁₀(τ) = max(τ − 10 s, 0 s) · (1 − σ) · 1[τ < 60 s] · 1[clock running] · 1[event stopped clock] · (1 − 1[timeout used]).

Units: seconds. The domain restriction τ < 60 s is explicit ("with the game clock running and less than one minute remaining in either half," [PAGE 70]). The veto set is enumerated at [PAGE 71]: "The 10-second runoff does not apply when both teams are equally responsible for stopping the clock (e.g. offsetting fouls, or injured or helmet-off players from both teams)." Breakdown: at exactly τ = 10 s the map returns 0 s and the half is over (A.R. 3-4-4:I(b)); at τ < 10 s it saturates and the period terminates, which is the absorbing state.

**Operator 3 — Running-clock latch.** Let Δ = |score_A − score_B| in points and h(·) the Heaviside step. The running-clock indicator

C(Δ) = h(Δ − 34 pt)

is stateful. It latches at a scoring event and unlatches "immediately on the relevant score" when Δ falls to or below 34 pt ([PAGE 62]). Units: points. Breakdown regime: the definition of "the relevant score" is only fixed by illustration — A.R. 3-3-2:X (35-0 → 35-6 stops the clock) versus A.R. 3-3-2:XI (41-0 → 41-6 → 41-7 stops it only at the try). The latch is therefore arithmetically, not symbolically, specified.

**Operator 4 — Half-the-distance contraction.** For a penalty of d yards with the goal line at distance g from the spot, enforcement yields

g_{n+1} = g_n − d_n, d_n = min(d, g_n / 2) ⟹ g_n = g_0 / 2^n.

Units: yards. Because g_n → 0⁺ but g_n ≠ 0 for finite n, the corpus imposes a hard floor: "No penalty enforced from outside the two-yard line may place the ball inside the two-yard line," with fallback "first down halfway between the previous spot and the goal line" ([PAGE 112]). This is the only mathematically expressed singularity-avoidance in the document; every other convergent process is truncated narratively.

**Operator 5 — Free-blocking-zone disintegration.** The zone is a rectangle "extending fiv e yards laterally and three yards longitudinally in each direction," [PAGE 34], i.e. Z = [−5 yd, +5 yd] × [−3 yd, +3 yd] in the plane centred on the middle lineman. The disintegration predicate is "The free-blocking zone disintegrates when the ball leaves the zone" ([PAGE 34]). Because IFAF centres the zone on the *middle lineman* rather than the snapper ([PAGE 5], "The tackle box is centred on the middle lineman, not the snapper"), the zone's origin is a function of formation geometry, not of the snap point — a non-obvious degree of freedom.

**Operator 6 — Targeting geometric indicator.** With helmet apex a and contact point c, the crown predicate is

T(c) = 1[‖c − a‖ ≤ 6 in] · 1[at least one indicator of targeting],

where the 6-inch radius is verbatim "[PAGE 128] the circular area defined by a 6-inch radius from the apex (top) of the helmet." Units: inches. The rule change marker is explicit: "The term 'forcible contact' has replaced the word 'initiate' to ensure the intent of the rule is clear" ([PAGE 8]). Breakdown: discerning discontinuity — T is a hard threshold over a continuous biomechanical impact, and the video judge may overturn the disqualification (A.R. 9-1-4:VII).

**Operator 7 — Snapper contact timer.** For scrimmage-kick formations, permitted contact time is

t_contact ≥ 1.000 s post-snap,

verbatim: "a defensive player may not initiate contact with the snapper until one second has elapsed after the snap" ([PAGE 134]). Units: seconds. Breakdown: A.R. 9-1-14:III permits a defender to "shoot the gap" and makes incidental subsequent contact legal — the timer protects the snapper but not the space adjacent to him.

**Operator 8 — Kick-catch interference volume.** The protected region is the receiver's shoulder width extended forward: "the area defined by the width of the receiver's shoulders and extending one yard in front of them" ([PAGE 95]). Units: yards/inches. Breakdown: A.R. 6-4-1:XIII holds that penetration of that volume "so early in the action" is not interference — the operator is time-gated, not purely spatial.

**Scalar constants with units:** ball pressure 12.5–13.5 psi and weight 14–15 oz ([PAGE 23]); uprights "at least 30 feet above the ground," crossbar 10 ft, upright separation 18 ft 6 in inside-to-inside, padding "at least six feet" ([PAGE 20]); IFAF yard "normally 36 inches (91.44cm) long, but may be shortened to no less than 34.12 inches (86.67cm)" ([PAGE 18]); roof clearance "no less than 90 feet" ([PAGE 19]); drone exclusion radius "165 yards (150 metres)" ([PAGE 31]); team area cap of "a maximum of 25 other individuals directly involved in the game" ([PAGE 20]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The document's provenance is layered and stated. Original material is "© IFAF 2011-2023" with edition timestamp 2023.2.8 ([PAGE 1]), and the change ledger at [PAGE 4] is a retrocausal index: it tells you which present rules were caused by which past seasons. Three genealogical threads matter.

*Thread A — pedagogical lineage.* The foreword states the rules must "retain some affinity with the rules adopted by NCAA in the USA" ([PAGE 2]), and [PAGE 5–6] enumerates the divergences as a standing delta table. The officiating-mechanics thread runs through a named manual: "The IAFOA manual is the one previously known as the 'BAFRA' manual" ([PAGE 7]). The reasoning given is a *training-transfer* argument, not a safety argument: "It is a recipe for disaster for officials who are working in their national competitions for most weeks of the year to have to switch to a somewhat arbitrarily different set of mechanics for the one or two weeks of the year when they work international competition" ([PAGE 7]). The genealogy is that a British-origin mechanics tradition (BAFRA) became the international default via an advisory committee that then became the IAFOA Mechanics Committee. The multi-week trap: crews trained at 4–5 officials must execute 8-official mechanics in tournament weeks, so any frontier evaluation that trains on domestic mechanics and tests on international mechanics will misgeneralise precisely at the crew-size boundary.

*Thread B — safety-regulation lineage.* The crown-of-helmet definition was "approved starting with the 2023 season," and the operative verb changed from *initiate* to *forcible contact* ([PAGE 8]). That is a one-generation descent from a causation-based rule to a contact-force rule, which shifts the burden of proof from intent to kinematics. The equipment thread descends from 2018 ("Since 2018, pants and knee pads must cover the knee to be legal," [PAGE 9]) and 2022 (uniform-compliance emphasis, [PAGE 8]), producing a ratchet: enforcement gets progressively stricter without any rollback clause in the corpus. The public-health thread descends from MRSA mortality, explicitly: "More seriously, it has caused the deaths of several football players in recent years" ([PAGE 9]). Equipment standards descend from an external body: helmets "must carry a warning label … and a manufacturer's or reconditioner's certification indicating satisfaction of National Operating Committee on Standards for Athletic Equipment (NOCSAE) test standards" ([PAGE 25]).

*Thread C — deception-economics lineage.* The Football Code devotes a whole ethics section to a single analogy: "It is the same as if a sprinter in a 100-metre dash had a secret arrangement with the starter to give them a tenth-of-a-second warning before firing the pistol" ([PAGE 12]). That analogy is the ancestral form of the 2023 points of emphasis on disconcerting signals ([PAGE 10]) and of the 2023 rule change "25-second clock on Team B touchdown" ([PAGE 4]). Multi-week traps: (1) feigning injury — the committee openly considered "adding additional time before a player could return from injury" but did not, electing instead to expose the conduct to disciplinary referral ([PAGE 10], [PAGE 65]); a naive evaluator will predict a mechanical penalty that the rules do not provide. (2) The running clock is competition-optional in four distinct ways ([PAGE 60]), so the same score state yields different clocks in different jurisdictions. (3) The two-minute warning "cannot happen before 2'00" ([PAGE 5]) — a divergence that inverts the NCAA behaviour at exactly the boundary.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The corpus is unusually explicit about opponent modelling. It says so directly: "To discourage tactics at the line of scrimmage designed to cause an opponent to foul or to give either team an unmerited advantage, officials must be on high alert for any type of illegal pre-snap actions by either team. Additionally, coaches should not teach illegal pre-snap actions designed to make their opponent foul" ([PAGE 10]). That is a second-order statement — a rule about rules-exploitation — and it defines the recursion depth the evaluator must model.

**Crisis habit regression.** Under clock pressure, the rules predict that teams revert to a narrow habit set, and the corpus legislates each habit. The spike is bounded: "With two seconds or one second on the game clock there is enough time for only one play" ([PAGE 59]), and the offense "must execute the spike in a timely manner" (A.R. 3-2-5:I). The instinct to kneel is bounded to a literal timer: "Team A may not advance the ball nor consume more than 3 seconds having indicated to their opponents that they do not intend to advance the ball (a 'take-a-knee' play)" ([PAGE 140]). The instinct to hold in the last minute is met with an override that is not a holding penalty at all: "This is a blatant and obvious unfair act designed to take time off the clock. The referee will convert the holding fouls to unsportsmanlike conduct fouls" ([PAGE 142]), with the clock *reset* to the pre-snap reading. So the regression-to-holding habit is countered by a clock-restoration operator, not by yardage.

**Counter-trap modelling.** The deception rules are a catalogue of expected opponent inferences. The "hide-out" pass is illegal because it exploits the defender's inference that a departing player is departing (A.R. 9-2-2:III). The shoe-request field-goal fake is illegal for the same reason (A.R. 9-2-2:IV). The simulated-punt substitution is illegal (A.R. 9-2-2:II). But the boundary is drawn by officiating *mechanics* rather than penalty: when Team A substitutes late, the umpire stands over the ball, and "No foul" is called the first time — the referee merely "informs the Team A head coach that any subsequent such actions will result in a foul" (A.R. 3-5-2:V). That is a one-shot warning structure, which means the optimal counter-trap is a single use — a strategy the rules structurally incentivise.

**Clock as third player.** The recursive layer includes the officials' own inference. The referee is given discretionary authority: "The referee shall order the game clock or play clock started or stopped whenever either team conserves or consumes playing time by tactics obviously unfair … referees should consider invoking this rule when the game clock is under fiv e minutes of each half" ([PAGE 69]). Note the asymmetry: the referee's intervention is *directional* toward the trailing team, and the guideline threshold (5 min) is a soft prior. The cleanest modelling result is that defensive feigning of injury is a losing strategy precisely when the clock is under one minute, because the runoff option transfers the time saved to the opponent: "If there is no 10-second runoff the game clock starts on the snap" ([PAGE 65]). The recursion therefore self-terminates: the defector's own tactic is the mechanism of its punishment.
</RECURSIVE_THEORY_OF_MMIND>
</RECURSIVE_THEORY_OF_MMIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A rule-level outcome is valid only if no higher-layer constraint vetoes it. Four veto layers are formally present in the corpus.

**Layer 1 — Atmospheric/structural (hard, non-discretionary).** Roof state is not a judgement call: "the roof must be closed if (from 90 minutes before the game until the end of the game) precipitation or lightning is within the vicinity of the stadium, the temperature drops below 40°F (4°C), or wind gusts are greater than 40 miles per hour (64 km/h)" ([PAGE 19]). The decision is timestamped at 90 minutes pre-kickoff and is irreversible — "Once the roof is closed, it is not allowed to be reopened during the game" ([PAGE 19]). This veto dominates every tactical layer; a passing game optimised for dry conditions is simply invalidated. Lightning is escalated to a dedicated appendix ([PAGE 3], Appendix B at p. 178), and indoor play requires "the roof shall be no less than 90 feet above the field" ([PAGE 19]) — a constraint on the punt trajectory, not on the players.

**Layer 2 — Geometric/physical (hard, measurable).** Field compression is permitted but bounded: an IFAF yard may shrink to "no less than 34.12 inches (86.67cm)" and "all other field dimensions and markings … shall be reduced commensurately," with the yardage chain reduced to match ([PAGE 18]). This vetoes any strategy whose assumed spatial constants are absolute; the 10-yard chain is a *ratio*, not a fixed length. Ball legality is a physical gate: 12.5–13.5 psi and 14–15 oz ([PAGE 23]), with "The ball may not be altered. This includes the use of any ball-drying or ball-warming substance" ([PAGE 23]). Goal-post padding is mandatory "from the ground to a height of at least six feet" with a defined waiver only "if the goal post is more than 12 feet outside the end line" ([PAGE 20]).

**Layer 3 — Biomechanical/medical (hard on participation, soft on inference).** The helmet-off rule is an automatic participation veto: the player "must leave the game for the next down" unless it is "the direct result of a foul by an opponent," and the clock stops ([PAGE 67]); the ball-carrier variant kills the play outright (4-1-3-q). Continued participation is separately penalised: "A player whose helmet comes completely off during a down may not continue to participate beyond the immediate action in which they are engaged, whether or not they put the helmet back on during the down" ([PAGE 136]). Blood is a saturation predicate, not a stain predicate: A.R. 3-3-5:III defines saturated as "soaked with moisture or drenched. If blood has penetrated through a garment to the skin or can be transferred to another player or game official, the garment is saturated." Concussion is a when-in-question trigger ("When in question, officials will declare an injury timeout for any player exhibiting signs of a concussion," [PAGE 10]) — the burden inverts, favouring the veto.

**Layer 4 — Administrative/hazard (hard, third-party).** Drones are prohibited with a metric radius: "no drone may be flown within 165 yards (150 metres) of any area occupied by participants or spectators," and "the referee shall order the game stopped until such time as the drone is removed" ([PAGE 31]). The referee's pregame inspection creates a standing duty on game management: "After the officials have completed their pregame inspection of the playing enclosure, it is the responsibility of game management personnel to ensure that the playing enclosure remains safe throughout the game" ([PAGE 22]).

Veto-proof summary: a frontier model that predicts a tactical outcome without first testing these four predicates is producing an inadmissible answer. The correct chain is: roof/lightning → field geometry → ball legality → participant medical state → then tactics.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Scenario 1 — Running-clock latch versus arithmetic.** Counterfactual: score 41-0; trailing team scores a touchdown (41-6) and then converts the try (41-7). Naive prediction: the running clock ends at the touchdown. Verifiable rule: A.R. 3-3-2:XI — "The clock stops when the try is scored – it is only then that the margin drops to 34 points." Prediction: running clock persists through the try, unlatches at the try's conclusion, and normal clock rules resume thereafter absent a new >34 margin. Falsifier: any play-by-play showing the clock stopping between the touchdown and the try. This vetoes the memoryless form of C(Δ).

**Scenario 2 — Play-clock reset threshold as a reaction-latency discriminator.** Counterfactual: a running play ends out of bounds, a 40-second clock starts, and the ball is delayed in retrieval. Naive prediction: the referee stops the game clock. Verifiable rule: A.R. 3-2-4:II — "If the play clock is quickly reset to 25, the game clock does not stop. Only if the play clock operator does not quickly respond to the referee's 'pump' signal will the referee declare a timeout." Prediction: with P < 20 s at ball-ready, the referee pumps for 25 s; the game clock remains running unless operator latency exceeds the referee's tolerance. This is a falsifiable, observable divergence between two candidate world models.

**Scenario 3 — Offsetting fouls nullify the runoff.** Counterfactual: game clock running, 0:15 remaining; Team A throws an illegal forward pass and Team B is offside at the snap. Naive prediction: 10-second runoff applies. Verifiable rule: A.R. 3-4-4:IV — "Offsetting fouls. No 10-second runoff. Second and five at the B-20. The game clock remains at 15 seconds and starts on the snap." Prediction: clock unchanged at 0:15, next play starts on the snap, prior down repeated. This vetoes the additive form of R₁₀ that ignores the σ indicator.

**Scenario 4 — Snapper protection versus gap penetration.** Counterfactual: Team A in scrimmage-kick formation, B71 aligned within one yard of the line and outside the frame of the snapper, "shooting the gap" and making first contact with the adjacent lineman. Naive prediction: 15 yards for contacting the snapper. Verifiable rule: A.R. 9-1-14:III — "Legal. Incidental contact with the snapper after this initial legal contact is not a foul." Prediction: no foul. This vetoes any model that treats the one-second timer as a spatial barrier rather than a first-contact rule.

**Scenario 5 (budgeted, optional) — Half-the-distance floor.** Counterfactual: repeated defensive pass-interference enforcement from a previous spot outside the two-yard line. Naive prediction: ball advances to the one-yard line, then half-yard, then quarter-yard. Verifiable rule: [PAGE 112] — "No penalty enforced from outside the two-yard line may place the ball inside the two-yard line," with the two-yard spot and the "halfway between the previous spot and the goal line" fallback. Prediction: enforcement saturates at the B-2, never inside it. This vetoes the unconstrained geometric-decay model.
</RLVR_COUNTERFACTUAL_VETOES>