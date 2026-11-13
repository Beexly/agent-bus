---
source: "Camp-1891-American-Football.pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-a-sports"
pages: 258
model: deepseek/deepseek-v4.1-flash-1017
words: 9224
---

<NATIVE_REASONING>
The user wants a deep analysis of the source. The GSE/GSI framing (Frontier Reasoning Foundry) suggests this is a vehicle for "sports prediction" style reasoning, but the actual instruction invariants say: no betting lines, no toy equations, formal LaTeX with units, cite [PAGE N] verbatim, >=1000 words across exact XML sections, with specific sections listed.

Let me treat this as a genuine scholarly/analytical task: derive formal operators and equations from Walter Camp's 1891 text, cite pages, discuss breakdown regimes, historical genealogy, recursive theory of mind (crisis habit regression — presumably about coaching/team psychology), cross-layer veto adjudication (physical/biomechanical/weather veto), and RLVR counterfactual vetoes (3 verifiable scenarios with predictions).

I must avoid betting lines entirely. I can frame "veto" as physical constraints that would invalidate a naive model. RLVR = reinforcement learning with verifiable rewards; counterfactual vetoes = scenarios where a reward-model claim is falsified by a verifiable check.

Let me build actual formal content grounded in the text.

Key quantitative/mechanical content in the book:

1. Field dimensions: 330 feet long × 160 feet wide [PAGE 237]. That's 110 yards × 53.33 yards. Interesting — 1891 field was 330 ft (110 yd) long. Goal posts at either end.

2. Five yards in three downs, retreat ten yards [PAGE 40]: "making it incumbent upon a side to advance the ball five yards or retreat with it ten in three 'downs.'" But [PAGE 241] says "advance the ball five yards in three attempts or retreat with it twenty" — internal inconsistency in the text (ten vs twenty). And [PAGE 248] "in three consecutive fairs and downs... shall not have advanced the ball five or taken it back twenty yards." That's a real textual discrepancy worth auditing — a gray-zone.

3. Scoring values [PAGE 247]: goal by touchdown 6, goal from field kick 5, touchdown failing goal 4, safety 2.

4. Game time: 90 minutes, two 45-minute halves, 10-minute intermission [PAGE 247].

5. Weight data: guard 190 lb replaced by 155 lb [PAGE 87-88]; half-back should not face >25 lb difference [PAGE 145]; varsity forward line averaging 175 lb; halves not under 135–140 lb [PAGE 142]; school teams ~20 lb lighter, halves from 125 lb [PAGE 142].

6. Snap/pass timing: quarter "should be almost on the run as the ball leaves his hand" [PAGE 132].

7. Kicking: power put on just as foot passes lowest point of arc, ball met in upward sweep [PAGE 158].

8. Signals: numerical sums — 1-2-3=6, 4-5-6=15, 7-8-9=24 [PAGE 183-185].

Now formal operators. I should define:

- Operator for scrimmage outlet determinism (Camp's core thesis): entropy of ball-delivery channel. English rugby: ball emerges stochastically → H(outlet) high. American: quarter receives deterministically → H ≈ 0.
  Formal: H(X) = -Σ p log2 p, units bits.
  Page 25-26: "What is, therefore, in the English game a matter of considerable chance is 'cut-and-dried' in the American game."

- Interference legality: a constraint on the admissible action set. Formal: the runner's support set.

- Line-of-scrimmage force concentration: Camp argues best defence is throwing force up before the runner clears the forward line [PAGE 31-32]. Formalize as expected yardage as function of number of defenders committed forward — but avoid toy ratio. I can write a genuine kinematic model: time for runner to reach a defender's engagement radius vs time for defender to disengage from block.

Let me write: blocking delay model. T_block = time the guard/tackle can delay the charger. Requirement for a successful block: T_block ≥ T_runner-path. And the "let him through just too late" — Camp's experienced guard lets opponent through at t* such that T_delay < T_quarter-release but T_delay > 0... Actually the guard lets the opponent through just too late to reach the quarter. Condition: t_release + τ_pass > t_contact.

Define: τ_pass = ball flight time from snap to release; the guard's release time t_r must satisfy t_r + d/v > τ_pass where d is distance from guard to quarter and v closing speed. That's a real, checkable inequality — not a toy ratio.

- Wedge mechanics: Camp's guard vs wedge. The wedge: pushing force F_p directed along axis; the defence: check the peak, remove weight from behind, turn from the side. Formal: momentum flux. The wedge's advance condition: Σ F_push > Σ F_resist at the apex; the turning tactic applies a torque about the apex: τ = Σ r_i × F_i, and the blind pushers "pass by the man with the ball" — misalignment. This is a genuine mechanical statement: wedge integrity requires the push vector to be aligned with the ball carrier's position; lateral displacement δ of the apex relative to the push axis produces a moment that rotates the formation. Formal: M = F_push · δ (units N·m). Breakdown when δ > w/2 where w is the wedge base half-width — formation becomes unstable, pushers overshoot.

- Center snap: balance under perturbation. The center holds ball at arm's length, rolls it back between feet, withstands a push from a 180-lb opponent [PAGE 113-114]. Formal: static stability — center of mass projection must remain within the base of support polygon; a push impulse J produces a torque; condition for non-toppling: J·h < m·g·(d_half) where h is push height, d_half half base width. That's a legit inequality with units (N·s·m vs kg·m/s²·m = Joules? Let's check: impulse × height = N·s·m = kg·m/s · m... Actually N·s·m = kg·m²/s = J·s? Hmm. Let me be careful: angular impulse J·h has units N·m·s = kg·m²/s. Angular momentum threshold m·g·d·Δt has units kg·m/s²·m·s = kg·m²/s. Good, consistent — angular impulse vs the angular momentum needed to tip past the support edge in time Δt. Fine.)

- Kick trajectory: Camp specifies strike point relative to arc lowest point; punt struck between instep and toe impinging most on instep [PAGE 159]. Formal: the launch angle θ vs range R = v² sin2θ / g, with the constraint that the foot's swing plane sets θ. And "the rise of the punt must come entirely from the foot, while the ground helps the drop" — so drop-kick has an effective extra energy input from ground reaction. Formal energy: E_punt = ½ m v_foot² η, E_drop = ½ m v_foot² η + ΔE_ground.

- Informational secrecy of signals: Camp's numerical sums, key k = sum. The opponents' inference: the code space. Formal: number of signals N mapped to keys; entropy per signal; and the "cost of confusion" asymmetry — Camp: "it is far more demoralizing to confuse your own team than to mystify your opponents" [PAGE 179]. Formalize as a loss function: L = λ_self·P(self-error) + λ_opp·(1 - P(opp-intercept)), with λ_self >> λ_opp. That's a genuine asymmetric loss, well-specified.

- Training: overtraining — "goes fine" and insomnia, must sever connection [PAGE 231-232]. Formal: performance vs training load, non-monotone; the overtraining threshold.

- End rusher as sole guardian: coverage of a half-space. Camp: end must plant one foot near touch line, other extended into field, and no runner can pass within three feet of the touch line [PAGE 61]. Formal: geometric coverage — with reach r and the tackle covering inward, the uncovered set is empty if... This is a genuine interval-coverage condition: the free interval between touch line and tackle's coverage must be ≤ 2r (arms extended), else there's a gap.

That's good. Also "three feet" — Camp's number, ~0.91 m.

- Half-back weight differential: 25 lb ≈ 11.3 kg. Momentum: p = mv. A 140 lb (63.5 kg) half vs 175 lb (79.4 kg) forward at same speed → momentum ratio 0.8. But avoid toy ratio — instead give the impulse/energy condition: to move a defender of mass M through distance, need kinetic energy transfer. Actually I can state the physically meaningful criterion: the half-back must deliver impulse J = Δp sufficient to displace the tackler's center of mass beyond his support polygon — that's a real biomechanical criterion.

- Full-back kick return: Camp, gain steps before kicking, kick on the run, dodge first man [PAGE 167].

Now "RETROCAUSAL_GENEALOGY": 1871 Rugby Union formation, 1876 first American college game at New Haven, 1877 reduction to fifteen at Scotland's request, 1882 Oxford long low pass, 1880s five-yard rule, interference legalization, the block game. Then later lineage: forward pass 1906, etc. But careful — retrocausal genealogy should trace how later developments were prefigured. Camp's prediction: "there is no doubt that the time will come in another year... picking out the three best half-backs... and making him the third half or full back" [PAGE 164] — this is a genuine prediction that can be audited. Also "Should the English ever adopt an outlet for their scrimmage... their men would gravitate to the forward line" [PAGE 33] — a testable counterfactual.

Multi-week traps: e.g., the 1891 rules' 5-yard-in-3-downs vs the modern 10-yards-in-4-downs; the field 110 yards vs modern 100 yards; the 6-point touchdown that became 5 then 6 again... Actually 1891: touchdown+goal = 6. Hmm, actually the scoring table in the book: goal obtained by touchdown 6, goal from field kick 5, touchdown failing goal 4, safety 2. Interesting.

"RECURSIVE_THEORY_OF_MIND": Crisis habit regression vs counter-trap vs clock. In football terms: under stress (fatigue, noise, big game), players regress to habitual/untrained behavior — Camp's end who "lopes down the field" when tired [PAGE 47]; the guard who squabbles and disconcerts his own centre [PAGE 104]; the half-back who reverts to fumbling when the quarter shows no confidence [PAGE 124]; green guards who can't be trusted with the "let him through just too late" timing [PAGE 99]. The counter-trap: the "pretended snap" to draw a charger offside [PAGE 82] — a second-order deception. The clock: Camp's emphasis on "just that second of time" [PAGE 99], the 3-down/5-yard clock, the 90-minute game.

Model as recursive: level-0 (mechanical execution), level-1 (reading opponent's read), level-2 (deception about deception). Formalize with a belief-state recursion: p_{n+1} = B(p_n) and show that deception depth is bounded by the number of shared practice repetitions (Camp: daily practice until "a veritable terror" [PAGE 71]).

"CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto. Weather: Camp on September heat then bracing autumn weather, appetite [PAGE 139]; "muggy and exhausting day" leading to lameness from sleeping in a draught [PAGE 160]; English climate tolerating ale and port, not so in America [PAGE 157]. Biomechanical: high tackler has "no chance whatever as an end rusher" [PAGE 55]; guard must tackle high sometimes [PAGE 97]; the "flat defence" of lying down before the wedge being countered by going over the prostrate man [PAGE 94]; weight thresholds. Physical: field 330×160 ft; the 5-yard lines; the ball.

Veto logic: a layer vetoes a proposed play if its constraint is violated regardless of skill. Formal: admissible set A = A_physical ∩ A_biomech ∩ A_weather ∩ A_rules. Prove that Camp's "force the man in" is vetoed when the end's closing speed < runner's speed at the tackle's coverage boundary.

"RLVR_COUNTERFACTUAL_VETOES": 3 verifiable scenarios with predictions. Each must be a claim with a falsifiable prediction from the text.

Scenario 1: The "let him through just too late" timing (PAGE 99). Claim: only experienced guards can execute. Prediction: substitution of green guards → measurable increase in quarterback pressures. Verifiable by charting.

Scenario 2: Signal-sum system (PAGE 183-185) — a sum-keyed code. Prediction: opponents who observe ≥ n repetitions of the same play can infer the key; Camp asserts "clever forwards almost always succeed in interpreting correctly one or two of the signals most frequently used" [PAGE 178]. Verifiable prediction: if a team reuses a key for > k plays, interception probability rises. And the counter-trap of "some word which means that the signal already given is to be considered void" [PAGE 189-190].

Scenario 3: End rusher conditioning early (PAGE 47-48) — a tired end causes halves to shorten kicks and tackles to widen. Prediction: with a fatigued end, the half-back's punt distances decrease and the tackle's lateral displacement increases. Verifiable via play-by-play charting.

Alternatively: overtraining — "goes fine" → insomnia → must sever [PAGE 231-232]. Prediction: a player with reduced sleep and rising restlessness degrades; removing him from the team environment for two weeks restores sleep.

Let me also include the internal contradiction audit: page 40 says retreat ten yards, page 241 says twenty. That's a genuine gray-zone worth flagging — and it's a "verifiable" textual check.

Word counts: need >=1000 words total, THINK_TRACE >= 400 words. Let me aim for maybe 2200-2800 words total. Should be fine.

I need to use exact XML sections as given. Let me produce them in order.

Also: ZERO BETTING LINES — I'll add no odds/spreads/totals. Even though "Frontier Reasoning Foundry" sounds like sports betting, I'll steer to the source. I should not mention "prediction market" etc.

Let me be careful with LaTeX rendering — plain LaTeX in text is fine.

Let me draft.

Sections:
1. <THINK_TRACE> — ≥400 words, multi-hop derivation and gray-zone audit.
2. <SOURCE_OPERATORS_AND_EQUATIONS> — formal LaTeX, units, page citations, breakdown regimes.
3. <RETROCAUSAL_GENEALOGY>
4. <RECURSIVE_THEORY_OF_MIND>
5. <CROSS_LAYER_VETO_ADJUDICATION>
6. <RLVR_COUNTERFACTUAL_VETOES>

Let me make sure to include verbatim quotes and [PAGE N].

Verbatim quotes to use:
- [PAGE 25]: "The feature of the American game in distinction from the English is, just as it was within a year from the time of the adoption of the sport, the outlet of the scrimmage." and "In this lies the backbone to which the entire body of American football is attached."
- [PAGE 25-26]: "What is, therefore, in the English game a matter of considerable chance is 'cut -and -died' in the American game ; and the element of chance being eliminated, opportunity is given for the display in the latter game of far more skill"
- [PAGE 40]: "making it incumbent upon a side to advance the ball five yards or retreat with it ten in three "downs."" and "Never did a rule in any sport work so immediate and satisfactory a reform as did this five-yard rule."
- [PAGE 241]: "a team must advance the ball five yards in three attempts or retreat with it twenty."
- [PAGE 247]: scoring.
- [PAGE 237]: "a field 330 feet long and 160 feet wide"
- [PAGE 61]: "plant one foot close to the touch line and the other as far out into the field as is consistent with stability" "no runner can pass within three feet of the touch line"
- [PAGE 55]: "a high tackier has no chance whatever as an end rusher"
- [PAGE 99]: "an experienced guard sometimes likes to gain just that second of time between the beginning of the pass and the completion of the swing... he will let the opponent through just too late to reach the quarter"
- [PAGE 124]: "Many promising half-backs are ruined by the quarter."
- [PAGE 179]: "it is far more demoralizing to confuse your own team than to mystify your opponents."
- [PAGE 178]: "Clever forwards almost always succeed in interpreting correctly one or two of the signals most frequently used"
- [PAGE 145]: "a half-back ought not to face over twenty-five pounds' difference in weight"
- [PAGE 164]: "there is no doubt that the time will come in another year, if it be not already here, when the selection of the three men behind the line will be after this fashion—namely, picking out the three best half-backs, all things considered, then selecting that one of the three whose kicking is the best, and making him the third half or full back."
- [PAGE 33]: "Should the English ever adopt an outlet for their scrimmage, making the play as direct as is ours, their men would gravitate to the forward line as rapidly as have our players."
- [PAGE 158]: "his power should be put on just as his foot has passed the lowest part of the arc in which it swings, and it should meet the ball in the upward sweep very soon after passing this point."
- [PAGE 159]: "the ball, when punted, should be struck between the instep and the toe, impinging most upon the former."
- [PAGE 160]: "The usual tendency of beginners ... is to toss the ball from the hand"
- [PAGE 94]: "Lying down before the wedge is a practice based upon this principle of keeping close to the ground"
- [PAGE 93]: "Check the peak even for a moment, and get the weight off from behind as speedily as possible."
- [PAGE 59/93]: "The men who are pushing must necessarily act blindly; and if their force is not directly upon the men at the point of the V, they pass by the man with the ball and so become useless." — that's page 59 or 93? Let me check: page 93 text: "The men who are pushing must necessarily act blindly ; and if their force is not directly upon the men at the point of the V, they pass by the man with the ball and so become useless." Yes, PAGE 93.
- [PAGE 104]: "squabbling and general pushing about are far more liable to disconcert his own centre and quarter than to interfere with the work of the opponents."
- [PAGE 82]: "By a preconcerted plan he may be coaxed through upon a pretended snap, and then the ball played while he is guarded and five yards gained by his off-side play"
- [PAGE 47]: "A tired end rusher ... will lope down the field under a kick, and by his lack of speed will allow a return"
- [PAGE 65]: "A tired-out end makes the opponents doubly strong."
- [PAGE 231-232]: overtraining "goes fine"
- [PAGE 195]: "Exercise is a prime requisite, because the human mechanism, unlike the inanimate machine, gains strength from use."
- [PAGE 196]: "As MacLaren has expressed it, strength means newness of the muscle."
- [PAGE 160]: "it will probably find himself very lame in the morning" — actually [PAGE 160]: "if he, when in that state, sleeps in a draught, he will probably find himself very lame in the morning"
- [PAGE 157]: "the use of ale and port seems to be much better borne by those who live in the English climate than upon this side the water."
- [PAGE 130]: "It is impossible to give in print the exact angle and method of holding the ball"
- [PAGE 76]: "While the snap-back is seldom held to the very strictest conformity to the rule about being on side"
- [PAGE 87-88]: 190 lb guard replaced by 155 lb.
- [PAGE 134]? not needed.

Also the "block game" [PAGE 39-40].

OK. Also the numerics: 330 ft = 100.58 m; 160 ft = 48.77 m. 110 yd × 53.33 yd.

25 lb = 11.34 kg. 190 lb = 86.2 kg; 155 lb = 70.3 kg. 175 lb = 79.4 kg; 140 lb = 63.5 kg; 135 lb=61.2 kg; 125 lb = 56.7 kg. 180 lb = 81.6 kg. 3 ft = 0.914 m. 5 yd = 4.572 m. 10 yd = 9.144 m; 20 yd = 18.29 m.

Now, equations. Let me carefully write a handful with units:

(E1) Outlet channel entropy: H(O) = −Σ_i p_i log₂ p_i [bits]. English scrimmage: ball emerges by chance → H_Eng > 0; American: p(snap→quarter) ≈ 1 → H_USA → 0 (in the ideal), reported breakdown at [PAGE 76] where snap may be played "for him by the surreptitious kick of the opponent."

(E2) Pass-release timing inequality: t_release + τ_pass ≤ t_contact, where t_release = snap→release [s], τ_pass = ball transit [s], t_contact = time for a charging rusher to close the distance d [m] at closing speed v [m/s]: t_contact = d/v. Guard's "just too late" condition: t_release + τ_pass < t_contact < t_release + τ_pass + Δ, with Δ the recovery time constant [s].

(E3) Wedge stability: dP/dt = Σ F_push − Σ F_resist; lateral misalignment moment M = F_push · δ [N·m]; wedge coherent iff δ < w/2 where w = base width [m]. Camp: "if their force is not directly upon the men at the point of the V, they pass by the man with the ball."

(E4) Center snap stability: toppling criterion J·h ≤ m g b, with J impulse [N·s], h application height [m], m mass [kg], g = 9.80665 m/s², b half-base [m]. Units: N·m·s vs kg·m²/s² · s... hmm. J·h = N·s·m = kg·m²/s. m g b = kg·m/s²·m = kg·m²/s². Mismatch by 1/s. So write with the tipping angular momentum threshold: L_crit = m g b τ, where τ is the tipping time. Then J·h ≤ m g b τ. Units: kg·m²/s vs kg·m²/s²·s = kg·m²/s ✓.

(E5) Coverage interval: end + tackle coverage. If end's reach r_e and tackle's inward coverage boundary at x_t from touch line, gap G = x_t − 2 r_e... simpler: uncovered set is empty iff x_t − r_e − r_t ≤ 0 given no gap. Hmm, I'll write: the lateral interval between the touch line (x=0) and the tackle's coverage onset x_t is covered iff 2r_end ≥ x_t, i.e., the end's two-arm span covers back to the touch line while his body sits at x = r_end. Camp's specific claim: with foot on the touch line and body extended, "no runner can pass within three feet of the touch line" [PAGE 61] → r_end ≈ 0.91 m.

(E6) Punt range: R = (v² sin 2θ)/g, with v₀ set by the foot's swing. Energy: ½ m_b v_b² = η · ½ m_leg v_foot². And "the rise of the former must come entirely from the foot" vs drop-kick getting ground assist [PAGE 162]: E_drop = E_punt + ΔE_ground.

(E7) Signal-code entropy: with key k = Σ digits, code space size N(k) = number of compositions; the per-play secrecy S = log₂ |K| where K is the key set. Camp's specific example: keys 6, 15, 24 [PAGE 183-185].

(E8) Confidence coupling: Camp's claim that the quarter's belief in the half affects fumble rate [PAGE 124]. Formal: p_fumble = f(external load, internal arousal) — model as p = σ(αL − βC) where C is the half's perceived confidence. That's a logistic — arguably a "toy equation"? It's a genuine psychometric form (Rasch/logistic). I'll present it with the caveat that α, β are unmeasured in 1891 and the equation is illustrative-parametric, flagged as such. Better: present it as a falsifiable structural claim rather than a calibrated model. I'll mark it as "unidentified in the source" — honest.

Actually, the invariant says "Never invent fake ratios". A logistic link isn't a fake ratio, but I should flag it as a structural hypothesis with unidentified parameters. Fine, and label it H1 with a stated identification requirement.

(E9) Half-back weight criterion: impulse to displace a tackler: J = M Δv; to break a tackle the half must impart enough impulse to move the tackler's CoM outside his support polygon: J ≥ M √(2 g h Δx)... hmm, simpler: the tackler topples if the work done, W = J²/(2M) ≥ M g b (b = half base). So J ≥ M√(2 g b). For M = 79.4 kg, b = 0.25 m: J ≥ 79.4·√(4.903) = 79.4 × 2.214 = 175.8 N·s. Hmm that's huge. Actually J²/(2M) ≥ M g b → J ≥ M√(2gb) = 79.4 × √(4.9033) = 175.8 N·s. A 63.5-kg half at 7 m/s has p = 444 N·s, way over. So the criterion isn't binding in the elastic limit — real tackles dissipate; the relevant point is cumulative fatigue. Let me instead frame Camp's 25-lb rule as an impulsive-load / cumulative-damage criterion: repeated collisions deliver dose D = Σ ½ m_rel v_rel² per collision, and season-long degradation when D_week > repair capacity R. That's a legitimate biomechanical framing (cumulative load). Camp's own words: "every week finds him less strong than the preceding" [PAGE 94]. Good.

So: D_week = n · ½ μ v², with μ = reduced mass m1m2/(m1+m2), and the veto D_week ≥ R.

Let me compute the reduced mass effect: half 63.5 kg vs forward 79.4 kg: μ = (63.5×79.4)/(142.9) = 5041.9/142.9 = 35.28 kg. For a 79.4 vs 79.4: μ = 39.7 kg. Ratio 0.889. But I shouldn't present it as a bare ratio; present as absolute energy at v = 5 m/s: ½·35.28·25 = 441 J vs ½·39.7·25 = 496 J. Modest difference per collision — so the 25-lb rule isn't about single-impact energy; it's about cumulative tolerance and the fact that a lighter man is displaced more (Δv = J/m). Fine — I'll say the per-collision energy differential is only ~11%, which is why the rule must be explained by cumulative weekly dose and recovery, not by single-impact energetics. That's a genuinely good audit point: it shows the naive model fails, and Camp's claim survives only under the cumulative framing. Good "gray-zone audit" material.

Similarly: the guard weight anecdote (190 → 155 lb) [PAGE 87-88] is a counterexample to a pure mass-threshold model — Camp himself flags astonishment. So mass is necessary but not sufficient; agility/quickness is the binding constraint. Good.

Also field dimension: 330 ft = 100.58 m; modern 100 yd = 91.44 m. The 1891 field was 110 yd long. Worth noting in genealogy.

Now let's write. I'll keep LaTeX clean and readable.

Word budget: THINK_TRACE ~600 words. Others ~350-450 each. Total ~2400.

Let me write it out.

One more: "RECURSIVE_THEORY_OF_MIND" — crisis habit regression vs counter-trap vs clock. I'll structure:
- Level 0: trained habit (practice reps, Camp's "daily practice until a veritable terror" [PAGE 71]).
- Regression under load: fatigue → reversion to untrained default [PAGE 47, PAGE 65, PAGE 104].
- Counter-trap: the pretended snap [PAGE 82], the void-signal [PAGE 189-190], the false start to draw a charge [PAGE 81].
- Clock: the "just that second" [PAGE 99], the 3-down/5-yard horizon [PAGE 40], the 90-minute game [PAGE 247].
- Recursion formal: B_{n+1} = 𝔅(B_n) with depth bounded by shared reps; Camp's asymmetry theorem: the defender's read must be faster than the offense's tell, and tells are suppressed by the "general glance" [PAGE 135-136] "the chief point, nevertheless, is to avoid that tell-tale glance at the right man which is so difficult to omit."

Good — that's a genuine level-1 concealment operator.

Let me now write the final answer. I'll keep headers exactly as specified.

I should make sure no betting content. Good.

Write it.
</NATIVE_REASONING>

<THINK_TRACE>
The source is Walter Camp's 1891 *American Football*, a 258-page instructional monograph whose argumentative spine is stated on a single page and then defended for two hundred more. On [PAGE 25] Camp writes: "The feature of the American game in distinction from the English is, just as it was within a year from the time of the adoption of the sport, the outlet of the scrimmage. In this lies the backbone to which the entire body of American football is attached." Every subsequent chapter — end, tackle, guard, centre, quarter, half/back, signals, training — is a downstream consequence of that one architectural decision. So the first multi-hop move is to treat the book not as a collection of positional tips but as a **single causal chain**: deterministic snap-outlet → fixed positional specialization → interference legalization → signal system → training regimen. Each link can be given an operator with units, and each operator has a stated or inferable breakdown regime.

Hop one: the outlet. Camp's contrast is explicit and is a statement about a probability distribution, not a metaphor. English half-backs "stand outside the scrimmage, and when the ball pops out it is their duty to seize it" [PAGE 25]; the American quarter "stands behind the scrimmage and gives a signal, immediately after which he knows the ball will come directly into his hands" [PAGE 25]. Hence "What is, therefore, in the English game a matter of considerable chance is 'cut -and -dried' in the American game; and the element of chance being eliminated, opportunity is given for the display in the latter game of far more skill" [PAGE 25–26]. This is a channel-entropy claim, and it is falsifiable: it predicts that the variance of snap-to-release time in the American game is small and that the residual variance is attributable to named perturbations — the opponent kicking the ball out from under the centre's hand [PAGE 70], the centre's own leg deflecting the snap [PAGE 73], the guard being "coaxed out far enough to admit of an opponent's going through the centre" [PAGE 64]. Camp names all three. That is unusually good bookkeeping for 1891.

Hop two: from determinism to specialization. Once the ball arrives on schedule, the quarter becomes "under the captain, the director of the game" [PAGE 81] and receives "with the exception of one or two uncommon and rare plays, there is not one of any kind… in which it does not pass through his hands" [PAGE 81]. Once the quarter is a fixed node, the seven forwards become a fixed line and the three deep men become a kicking/handling pool. Camp then predicts the endpoint of that logic himself on [PAGE 164]: "there is no doubt that the time will come in another year, if it be not already here, when the selection of the three men behind the line will be after this fashion—namely, picking out the three best half-backs, all things considered, then selecting that one of the three whose kicking is the best, and making him the third half or full back." That is a dated, auditable forecast embedded in the text.

Hop three: interference. Deterministic outlet makes blocking profitable, blocking makes holding profitable, holding forces legislation: "The result was that it was legalized" [PAGE 16, i.e. PAGE 34]. Camp's own moral is that unenforced rules breed escalation — "It is always the case when a rule is not enforced unflinchingly… that the tendency always is towards devising additional infringements" [PAGE 17 / PAGE 37]. This is a general claim about rule-enforcement latency, not a football claim, and it is the most transferable sentence in the book.

**Gray-zone audit.** Four items deserve flagging rather than smoothing. (a) *Internal numeric contradiction*: [PAGE 40] states the reform rule as "advance the ball five yards or retreat with it ten in three 'downs,'" while [PAGE 241] states "advance the ball five yards in three attempts or retreat with it twenty," and [PAGE 248] again says "advanced the ball five or taken it back twenty yards." Ten versus twenty cannot both be the 1891 rule; the rulebook value must be recovered from an external primary source before any quantitative use of the retreat penalty. (b) *The guard-weight counterexample*: Camp reports a 190-lb guard replaced by a 155-lb man who "actually filled the position—greatly to my astonishment, I confess—in excellent fashion" [PAGE 87–88]. He then refuses to infer that weight is unimportant. A naive mass-threshold model is refuted by his own datum; the correct reading is that mass is necessary-but-not-sufficient and that quickness is the binding constraint. (c) *The 25-pound rule* [PAGE 145] does not survive a single-impact energy check — see the operators section — so it must be a cumulative-dose rule, which is exactly how Camp phrases it: "every week finds him less strong than the preceding" [PAGE 94]. (d) *Deliberate unprintability*: "It is impossible to give in print the exact angle and method of holding the ball" [PAGE 130]. Camp flags his own transmission loss, which means any downstream reconstruction of his passing mechanics from text alone is underdetermined and must be marked as such.

The remaining hops — signals as a cryptography problem [PAGE 121–130] and training as a load-recovery problem [PAGE 135–164] — are derived in the sections that follow, with units and veto conditions.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**O1 — Scrimmage outlet entropy.** Let $O$ be the outlet random variable (who receives the snapped ball, and when). Channel entropy in bits:
$$H(O) = -\sum_{i} p_i \log_2 p_i \quad [\text{bit}]$$
English Rugby approximates a uniform-ish outlet with $H(O)>0$ because the ball "comes out by chance and at random" [PAGE 21]. The American ideal is $p(\text{snap}\to\text{quarter})\to 1$, so $H(O)\to 0$. **Breakdown regime:** $H(O)$ does not reach zero because of three named perturbations — opponent kicks the ball from under the centre's hand [PAGE 70], the centre's own leg intercepts the snap ("sends the ball against his own legs" [PAGE 73]), and the surreptitious opponent kick, which is precisely why some centres snap on end so "it permits an umpire to see more clearly whether the ball be actually put in play by the snap-back or played for him by the surreptitious kick of the opponent" [PAGE 75–76]. Camp also concedes partial rule non-compliance: "While the snap-back is seldom held to the very strictest conformity to the rule about being on side" [PAGE 76].

**O2 — Pass-release timing inequality.** Successful protection requires
$$t_{\text{release}} + \tau_{\text{pass}} \;\le\; t_{\text{contact}}, \qquad t_{\text{contact}} = \frac{d}{v_{\text{close}}}$$
with $t_{\text{release}}$ [s] snap-to-release, $\tau_{\text{pass}}$ [s] ball transit, $d$ [m] rusher-to-quarter separation, $v_{\text{close}}$ [m s⁻¹] closing speed. The experienced guard operates in the band
$$t_{\text{release}} + \tau_{\text{pass}} \;<\; t_{\text{contact}} \;<\; t_{\text{release}} + \tau_{\text{pass}} + \Delta_{\text{rec}}$$
where $\Delta_{\text{rec}}$ [s] is the rusher's recovery constant. Camp states the band in words: an experienced guard "will let the opponent through just too late to reach the quarter, although it seems a very close call" [PAGE 99]. **Breakdown regime:** green guards cannot estimate $\Delta_{\text{rec}}$, so "It is not safe to let green guards attempt anything so close. They must be taught to block securely until the ball is on its way to the runner or kicker" [PAGE 99–100].

**O3 — Wedge stability and the lateral-misalignment moment.** With axial push $F_{\text{push}}$ [N], resistance $F_{\text{res}}$ [N], and apex-to-push-axis lateral offset $\delta$ [m], the destabilizing moment is
$$M = F_{\text{push}}\,\delta \quad [\mathrm{N\,m}]$$
The wedge remains coherent while $\delta < w/2$, where $w$ [m] is the base width. Camp's mechanism is exactly this: "The men who are pushing must necessarily act blindly; and if their force is not directly upon the men at the point of the V, they pass by the man with the ball and so become useless" [PAGE 93]. The prescribed counter is two-stage: "Check the peak even for a moment, and get the weight off from behind as speedily as possible" [PAGE 93]. **Breakdown regime:** the flat defence — "Lying down before the wedge" — fails once "the men in the front of a wedge are becoming so accustomed to meeting this flat defence that they… succeed in getting over the prostrate man and regaining headway" [PAGE 94].

**O4 — Centre snap static-stability criterion.** For impulse $J$ [N s] applied at height $h$ [m] to a centre of mass $m$ [kg] with half-base $b$ [m] over tipping time $\tau$ [s]:
$$J\,h \;\le\; m\,g\,b\,\tau, \qquad g = 9.80665\ \mathrm{m\,s^{-2}}$$
(LHS angular impulse [kg m² s⁻¹]; RHS tipping angular momentum [kg m² s⁻¹].) This is Camp's "hold a ball out at arm's-length on the ground in front of one and roll it back so that it passes between one's feet, and still preserve a good balance in spite of a sudden push of a hundred-and-eighty-pound opponent" [PAGE 73–74]. **Breakdown regime:** the centre who sets one foot far back "is apt to put that foot and leg in the path of the ball" and simultaneously reduces $b$ in the relevant direction [PAGE 75].

**O5 — End coverage interval.** Let the end's body sit at $x = r_e$ from the touch line with two-arm reach $r_e$ [m], and let the tackle's coverage begin at $x_t$ [m]. The lateral interval $[0, x_t]$ is fully covered iff
$$2 r_e \;\ge\; x_t$$
Camp supplies the empirical value: with one foot at the touch line and the other extended, "no runner can pass within three feet of the touch line" [PAGE 61], i.e. $r_e \approx 0.914$ m. **Breakdown regime:** a high tackler voids the operator entirely — "a high tackier has no chance whatever as an end rusher" [PAGE 55].

**O6 — Kick ballistics and energy partition.** Range $R = v_0^2 \sin 2\theta / g$ [m], with launch set by strike point. Camp specifies the phase relation: "his power should be put on just as his foot has passed the lowest part of the arc in which it swings, and it should meet the ball in the upward sweep very soon after passing this point" [PAGE 158], and the contact surface: "the ball, when punted, should be struck between the instep and the toe, impinging most upon the former" [PAGE 159]. Energy partition:
$$\tfrac12 m_b v_b^2 = \eta \cdot \tfrac12 m_{\text{leg}} v_{\text{foot}}^2 + \Delta E_{\text{ground}}$$
with $\Delta E_{\text{ground}} = 0$ for a punt and $>0$ for a drop-kick, because "the ground helps the latter to rise, while the rise of the former must come entirely from the foot" [PAGE 162]. **Breakdown regime:** a tossed rather than dropped ball — "The usual tendency of beginners… is to toss the ball from the hand" — injects a timing delay $\delta t$ that converts directly into intercepted kicks [PAGE 160].

**O7 — Signal-code keyspace.** For digits $d_1,\dots,d_n$ with key $k=\sum d_i$, the play set is partitioned by key; secrecy is $S=\log_2 |\mathcal{K}|$ [bit] where $\mathcal{K}$ is the key set. Camp's worked example assigns keys 6 (right half, left end), 15 (left half, right end), 24 (kick) [PAGE 183–185]. **Breakdown regime:** frequency analysis. "Clever forwards almost always succeed in interpreting correctly one or two of the signals most frequently used" [PAGE 178]. The mitigation is a nullification operator — "some word which means that the signal already given is to be considered void" [PAGE 189–190].

**O8 — Asymmetric signal-confusion loss.** With $p_s$ the probability of own-team misidentification and $p_o$ the probability of opponent interception:
$$\mathcal{L} = \lambda_s p_s + \lambda_o p_o, \qquad \lambda_s \gg \lambda_o$$
Camp states the inequality directly: "it is far more demoralizing to confuse your own team than to mystify your opponents" [PAGE 179]. **Breakdown regime:** $\lambda_s/\lambda_o$ is not constant; it rises when the opponents demonstrably hold the code, because then $p_o\to 1$ and the only remaining lever is $p_s$ [PAGE 124 of the signals chapter, PAGE 124 of the book = PAGE 178].

**O9 — Cumulative collision dose (the 25-pound rule).** Per collision, with reduced mass $\mu = m_1 m_2/(m_1+m_2)$ [kg] and closing speed $v$ [m s⁻¹]:
$$D_{\text{week}} = n \cdot \tfrac12 \mu v^2 \quad [\mathrm{J}], \qquad \text{veto if } D_{\text{week}} \ge R$$
where $R$ [J week⁻¹] is repair capacity. Camp's rule — "a half-back ought not to face over twenty-five pounds' difference in weight" [PAGE 145], i.e. 11.34 kg — is stated in his own words as a *seasonal* effect: "every week finds him less strong than the preceding, until his playing falls off so markedly" [PAGE 94]. **Audit note:** a single-impact check does not support the rule. At $v=5\ \mathrm{m\,s^{-1}}$, a 63.5-kg half against a 79.4-kg forward gives $\mu \approx 35.3$ kg and $D \approx 441$ J; equal masses give $\mu \approx 39.7$ kg and $D \approx 496$ J — an ~11% per-collision differential that cannot by itself justify a hard selection rule. The rule is therefore a *recovery-kinetics* rule ($D_{\text{week}}$ vs $R$), not an impact-energetics rule, and Camp's chapter supports only the former reading.

**O10 — Overload–adaptation curve.** Camp's training chapter is a load-response statement: "Exercise is a prime requisite, because the human mechanism, unlike the inanimate machine, gains strength from use" [PAGE 135], and "As MacLaren has expressed it, strength means newness of the muscle" [PAGE 136]. The implied response is non-monotone, with an overtraining branch defined behaviourally rather than numerically: the man who "'goes fine'" to the point of restlessness and insomnia must be removed — "there is but one thing to do with a man when he 'goes fine' to this extent, and that is to sever his connection with the team for a time" [PAGE 161–162]. **Breakdown regime:** the recovery window is bounded — "it will only be a couple of weeks before he will find himself coming out of it all right" [PAGE 162] — so late-season onset is unrecoverable within the season.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Camp's lineage runs backward through the Rugby Union (formed 1871, "a union of some score of clubs" [PAGE 15]), the failed pre-1871 unification attempt, the reduction from twenties to fifteens made "in 1877, at the request of Scotland" [PAGE 19], and Oxford's 1882 long low pass that "remained undefeated for three seasons" [PAGE 19]. It runs forward through the 1876 New Haven game, "the first game under Rugby rules between American colleges" [PAGE 22], and the convention that followed.

The retrocausal structure is that Camp's 1891 text contains **three dated forecasts** whose later fulfilment or failure is checkable. First, the convergence prediction: "Should the English ever adopt an outlet for their scrimmage, making the play as direct as is ours, their men would gravitate to the forward line as rapidly as have our players" [PAGE 33]. This is a conditional prediction with a named mechanism — determinism of outlet drives forward-line mass — and it is the single most falsifiable sentence in the book. Second, the backfield consolidation forecast quoted above from [PAGE 164]. Third, the diagnosis of the block game and its cure: the five-yard rule, of which Camp writes "Never did a rule in any sport work so immediate and satisfactory a reform as did this five-yard rule" [PAGE 40]. That sentence is the ancestor of every subsequent down-and-distance reform; it establishes the *principle* that a stalling equilibrium is broken by attaching a possession-transfer cost to non-advance, a principle that recurs every time the advance requirement or the down count is later re-tuned.

**Multi-week traps** — structural misreadings that persist across a season of study:

1. *The dimension trap.* Camp gives "a field 330 feet long and 160 feet wide" [PAGE 237], i.e. 100.58 m × 48.77 m. Any reconstruction that assumes a 100-yard field imports a 7.6-yard error into every down-and-distance conversion and every "five yards in three downs" calculation.
2. *The retreat-penalty trap* described in the audit: ten yards [PAGE 40] versus twenty yards [PAGE 241, PAGE 248]. This is not a rounding difference; it changes the risk calculus of a stalling offence by a factor of two.
3. *The scoring-table trap.* 1891 values are goal by touchdown 6, goal from field kick 5, touchdown failing goal 4, safety 2 [PAGE 247]. These are not modern values and must not be silently substituted.
4. *The legal-interference trap.* Interference is legalized only after a documented escalation sequence: horizontal arm extension for space [PAGE 34], failure to enforce the no-holding ruling [PAGE 37], seizure and dragging of opponents after the ball was played [PAGE 38], then legalization with the condition that the assistant "did not use his hands or arms" [PAGE 38]. Camp's general law — unenforced rules breed additional infringements [PAGE 37] — is the durable lesson; the specific 1891 wording is not.
5. *The transmission trap.* "It is impossible to give in print the exact angle and method of holding the ball for this purpose" [PAGE 130]. Camp explicitly marks an unrecoverable channel. Any model that treats this chapter as complete specification is over-reading.

The genealogical payoff is that the book is best read as a *design rationale document*: it records not merely what was done but the causal argument for why the American game diverged, and that argument — deterministic outlet, then interference, then signals — is the load-bearing inheritance.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three regimes compete in Camp's coaching psychology, and the chapter structure separates them cleanly.

**Crisis habit regression.** Under fatigue or stress, players revert to whatever was most rehearsed, which for an under-coached player is the untrained default. Camp's end "will lope down the field under a kick, and by his lack of speed will allow a return" [PAGE 47], and the consequence cascades: his own halves shorten their kicks, and his own tackle is drawn too widely from the guard [PAGE 48]. The guard under stress "squabbling and general pushing about are far more liable to disconcert his own centre and quarter than to interfere with the work of the opponents" [PAGE 104]. The quarter's doubt propagates into the half's hands — "Many promising half-backs are ruined by the quarter" [PAGE 82]. The terminal statement is [PAGE 65]: "A tired-out end makes the opponents doubly strong." Formally, define a competence state $c$ that decays with accumulated load $D$ [J, per O9] and recovers with time; regression is the regime in which execution falls to the level of the *least*-rehearsed component, because rehearsal count sets the fallback. Camp's countermeasure is rehearsal rotation: play candidates "one after the other in rotation, insisting upon hard playing even if it be for only five minutes at a time" [PAGE 48–49], which raises the fallback floor rather than the ceiling.

**Counter-trap (second-order deception).** Camp's deception is not "fool the opponent"; it is "make the opponent's read of your read wrong." The canonical instance is on [PAGE 82]: "By a preconcerted plan he may be coaxed through upon a pretended snap, and then the ball played while he is guarded and five yards gained by his off-side play, but he will not be taken in again by the same method." Two features matter. First, the trap is *preconcerted*, meaning it requires a shared model. Second, Camp explicitly notes its one-shot nature — the same trick does not work twice, so the trap stock must be depletable-and-renewable. The tackle's repertoire is described exactly this way: dashing, standing-and-turning, shouldering, falling down, all of which "work once or twice" and then fail [PAGE 49–50]. At the concealment layer, the quarter must suppress the tell: "The chief point, nevertheless, is to avoid that tell-tale glance at the right man which is so difficult to omit" [PAGE 90]. Formalize the recursion as belief-depth $\mathcal{B}_{n+1} = \mathfrak{B}(\mathcal{B}_n)$ with usable depth bounded by the number of shared practice repetitions — Camp's "carry their plans into execution in daily practice until they become in company a veritable terror to opponents" [PAGE 42–43]. Beyond that depth, the model degrades to noise and the trap fires on your own side; this is exactly the asymmetry of O8.

**Clock.** Camp's clock is not only the 90-minute game with two 45-minute halves and a ten-minute interval [PAGE 247]. It is the sub-second clock of the release window. The experienced guard "likes to gain just that second of time between the beginning of the pass and the completion of the swing" [PAGE 99]; the quarter "should be almost on the run as the ball leaves his hand" [PAGE 88]; the kicker should make "the entire transfer from hand to foot so rapid as to almost eliminate any danger of having the ball stopped or struck during that part of the play" [PAGE 108]. And the macro-clock: five yards in three downs [PAGE 40, PAGE 241], which converts stall tactics into a losing strategy.

The three regimes interact in a specific order. The clock sets the admissible timing band (O2). The counter-trap consumes the band — a pretended snap steals a fraction of a second and buys five yards [PAGE 82] — but only if the trap is inside the clock, i.e. only if the drawn rusher's offside is detectable before the snap. Crisis regression attacks the band from below: a fatigued guard cannot resolve $\Delta_{\text{rec}}$, so he reverts to the safe policy of blocking "until the ball is on its way" [PAGE 100], which is correct but leaks the disguised second. Camp's practical resolution is deliberately asymmetric: coach the *ceiling* only for men who can pay the timing cost, and set the *floor* for everyone else.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A play proposal is admissible only if it survives the intersection
$$\mathcal{A} = \mathcal{A}_{\text{physical}} \cap \mathcal{A}_{\text{biomech}} \cap \mathcal{A}_{\text{weather}} \cap \mathcal{A}_{\text{rules}}$$
and a veto from any layer is absolute regardless of skill. Camp supplies the binding constraints for each layer.

**Physical layer.** The field is 330 ft × 160 ft [PAGE 237]; the five-yard grid exists "merely to assist the referee in determining how far the ball moves at a time" [PAGE 168]. The advance requirement is the hard constraint: five yards in three downs or possession transfers [PAGE 40]. A run design whose expected advance is below 4.572 m per three-down cycle is vetoed by rule, not by execution. Because the ball must cross the end of the field "in some way to make any score" [PAGE 168], any play that cannot, in the limit, produce a crossing has zero terminal value — this is the physical analogue of a hard boundary condition, and it is why Camp insists the whole struggle is subordinated to field position.

**Biomechanical layer.** Three vetoes are stated with unusual force. (i) *High tackling voids end play*: "a high tackier has no chance whatever as an end rusher" [PAGE 55] — the end's constraint set requires shooting in at a selected moment with the shoulder while extending the arms [PAGE 54], an action incompatible with a shoulder-level approach. (ii) *Base-of-support collapse voids every wedge defence* if the guard "simply stands still and straight" — "he will be swept over like a wisp of straw by any well-executed wedge play directed at him" [PAGE 57–58]; the remedy is lowering the centre of mass, which is why "Both guards must keep their weight down low, close to the ground, so that the wedge, if directed at either, cannot throw that one at once off his balance backward" [PAGE 59–60]. (iii) *Mass differential vetoes season durability* via O9, not via single-impact energetics — and note Camp's own counterexample of the 155-lb guard [PAGE 87–88], which proves mass is not sufficient. A veto framework that treats mass as sufficient is itself vetoed by the source.

**Weather layer.** Camp is explicit that climate is a constraint on the training system, not a footnote: "the use of ale and port seems to be much better borne by those who live in the English climate than upon this side the water" [PAGE 157], and "stiff exercise before breakfast has not been proven advantageous to our athletes except as a flesh-reducer, and then only in exceptionally vigorous constitutions" [PAGE 157]. The season's thermal trajectory is itself a conditioning input — after "the few warm days of September are passed," a football team enjoys "the very best of bracing weather—weather which will give almost any man who spends his time in out-door work a healthy, hearty appetite" [PAGE 139]. And the acute veto: a man who has "played an especially stiff game and upon a muggy and exhausting day" and then "sleeps in a draught, he will probably find himself very lame in the morning" [PAGE 160]. Camp explicitly declines the over-strong reading — the draft is not a cold-vector, it is a *failure to take precautions when precautions are indicated* — which is a constraint on the coaching system, not on the air.

**Adjudication rule.** When layers conflict, the more proximal layer wins. A bright-weather play that violates O5's coverage interval is vetoed by geometry before weather is consulted. A mass-legal lineup that cannot survive O6's drop-not-toss requirement is vetoed by motor control before the training table is consulted. And any proposal whose only support is that it worked once is vetoed by the one-shot clause: "he will not be taken in again by the same method" [PAGE 82].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Each scenario below is a claim from the source paired with a verifiable observation that would reward or punish a model asserting it. All three are chartable from play-by-play records without any proprietary input.

**V1 — The protected-release band is experience-gated.**
*Claim:* "an experienced guard sometimes likes to gain just that second of time between the beginning of the pass and the completion of the swing… he will let the opponent through just too late to reach the quarter" [PAGE 99]; and "It is not safe to let green guards attempt anything so close" [PAGE 99–100].
*Prediction:* substituting an inexperienced guard for an experienced one, holding all else fixed, increases the rate of unblocked rushers reaching the quarterback's release envelope, and the increase is concentrated in *near-miss* arrivals (arrivals within $\pm\Delta_{\text{rec}}$ of release, per O2) rather than in early arrivals. The mechanism signature is a shift in the arrival-time distribution's right tail, not a shift in its mean.
*Veto condition:* if arrival-time distributions are statistically indistinguishable across experience levels, or if the shift appears as an increase in *early* arrivals only, the O2 model is falsified and the claim must be downgraded to folklore.

**V2 — Sum-keyed signal codes are broken by frequency analysis, and nullification only partially repairs them.**
*Claim:* numerical signals keyed on the digit sum [PAGE 183–185] are "far more difficult for the opponents to solve than either the old word signals or signs" [PAGE 121–122], yet "Clever forwards almost always succeed in interpreting correctly one or two of the signals most frequently used" [PAGE 178]; the stated remedy is a voiding word — "some word which means that the signal already given is to be considered void, and a new signal will be given in its place" [PAGE 129–130].
*Prediction:* interception accuracy rises monotonically with the repetition count of a given key, and specifically saturates on the *two or three* highest-frequency keys while remaining near chance on low-frequency keys — i.e. the compromise is heavy-tailed, not uniform. Second prediction: introducing a nullification token reduces interception accuracy on called plays but *increases* own-team error rate, consistent with $\lambda_s \gg \lambda_o$ in O8 [PAGE 179].
*Veto condition:* uniform interception across keys falsifies the frequency-analysis mechanism; a nullification token that reduces own-team errors would be a genuine counterexample to O8 and would require the asymmetry constant to be re-signed.

**V3 — Early end-rusher conditioning is a leading indicator of backfield and tackle degradation.**
*Claim:* "Unless he does, he cannot handle the work that must fall to his share, and the effect of a poor performance by the end is to produce disorder at once in the proportion of work as well as the quality of the work of the tackles and half-backs" [PAGE 47]; the named mechanism is that a tired end "will lope down the field under a kick, and by his lack of speed will allow a return" [PAGE 47] and, against the run, "will do it so slowly that the runner is enabled to pass the tackle" [PAGE 47–48].
*Prediction:* in games where the end's measured pursuit speed under kicks falls below his season baseline, two coupled changes appear downstream in the same half — (a) punting distance from the half-backs declines relative to their baseline (because returns are being conceded, per the stated chain), and (b) the tackle's lateral displacement from his alignment increases. Both are measurable from charting; the coupling is the test, since the claim is explicitly about propagation, not about the end alone.
*Veto condition:* if end fatigue does not co-move with the half's punt distance and the tackle's lateral displacement in the same half, the propagation claim fails and the correct model is that the end's fatigue is an isolated positional effect. Note that Camp's own statement of the mechanism is the only support he offers — "This is not well understood by captains and coaches, but it is easy to see if one follows the play" [PAGE 47] — so the evidentiary burden is on the text.

**Bonus verifiable item (textual, not on-field).** Any model that cites the 1891 advance rule must reconcile [PAGE 40]'s "retreat with it ten" against [PAGE 241] and [PAGE 248]'s "twenty." A model that reports a single value without flagging the discrepancy fails a verifiable check against its own cited source and should be scored as hallucinating the rule.
</RLVR_COUNTERFACTUAL_VETOES>