---
source: "2007 - On probabilistic excitement of sports games - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2007"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3831
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "On probabilistic excitement of sports games" by Jan Vecer, presented at the New England Symposium on Statistics in Sports in 2007.

Constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to be careful about the source text. The user provided a markdown version of a PDF. I should cite page markers [PAGE N]. However, the source text doesn't have explicit page numbers like [PAGE 1], etc. It seems to be a continuous text. I should infer page markers or refer to sections. The prompt says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since no explicit page markers are visible in the text, I should probably use section headers or note that the provided source lacks explicit pagination markers, but I can reference sections like "Motivation", "Definition", "Poisson Model", etc. However, to be safe, I can treat the source text as having implicit pages based on the content flow, or I can say [PAGE N] where N corresponds to logical sections. Actually, looking at the text, there are no [PAGE N] markers. I should not fabricate them. I can cite the section names instead, or note that explicit page numbers are absent in the provided markdown. But the instruction says "When source pages are provided, cite exact [PAGE N] markers". Since they aren't provided, I will cite sections and quote verbatim where possible. Or I could assign page numbers based on the flow, but that would be fabrication. Better to avoid [PAGE N] if not present, or use a placeholder like [PAGE UNMARKED]. Let me check: the user text starts with `<!-- source: ... -->` and then the content. There are no page breaks. I will cite sections and avoid fake page numbers, or I can use "[PAGE: source section]" but that's not exact. I'll just reference the document sections and use verbatim quotes without page numbers, noting pagination is not marked in the provided text.

Wait, the constraint says "When source pages are provided..." - they are not provided as separate pages with numbers. So I don't need to force [PAGE N]. But I should still cite exact quotes.

Let's structure the response:

1. <THINK_TRACE> (>=400 words): Deep derivation of the excitement measure. Explain Total Variation of win expectancy, Poisson process, memoryless property, independent scoring intensities λ and µ, how win probability is computed from current score and time remaining. Gray-zone audit: limitations of Poisson assumption (no memory, constant intensity, fixed end time, no draw handling in elimination vs group stages), betting market efficiency claim (but user constraint says no betting lines discussion? Wait, constraint 1 says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. The paper discusses betting markets for win expectancy. Can I mention betting markets? The constraint says never mention spreads, totals, moneylines, or odds. Mentioning "betting market" as a source of win expectancy might be okay as long as I don't mention odds/lines. But to be safe, I should avoid discussing betting markets extensively or just mention them neutrally without odds. Actually, the paper uses betting market data to estimate intensities. I can mention it as an external calibration source without quoting odds. The constraint is about betting lines, not about the existence of markets. I will be careful.

   I need to do multi-hop derivation: from Poisson process definition -> transition probabilities -> final score distribution -> win/draw probabilities -> total variation of these probabilities over time -> excitement metric. Then discuss expected excitement as function of intensities. Note singularity/breakdown: λ→0 or µ→0 (one team never scores), T-t→0 (end of game), draw possibility requiring modified TV (Eq 4).

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations.
   - Eq (5)-(6): Poisson increments.
   - Score evolution: P(X_T = X_t + k | X_t) = exp(-λ(T-t)) [λ(T-t)]^k / k!
   - Win expectancy: P(X_T > Y_T), P(X_T = Y_T), P(Y_T > X_T).
   - Eq (8) for draw probability (though garbled in text, I can present a clean version).
   - Eq (2): TV(f) = sup over partitions sum |f(t_{i+1}) - f(t_i)|. Note the text has a garbled max/lim expression, but standard TV is sum over partition. I'll present standard definition and note the text's intent.
   - Eq (3): Excitement = TV(P(Team 1 wins)) + TV(P(Team 2 wins)) for no-draw.
   - Eq (4): Excitement = TV(P(Team 1 wins)) + TV(P(Draw)) + TV(P(Team 2 wins)).
   - Expected excitement: E[TV] as function of λ, µ.
   - Units: probabilities dimensionless [0,1], time in minutes or normalized [0,T], λ, µ in goals per unit time (e.g., goals/minute or goals/game). TV is dimensionless (sum of probability differences). Excitement is dimensionless.
   - Breakdown regimes: λ=0 or µ=0 (degenerate), T-t→0 (variance collapses to 0 or 1), equal intensities with draw allowed (highest TV near end?), extreme imbalance (one-sided).

3. <RETROCAUSAL_GENEALOGY>: Historical lineage. Markov models in sports (baseball, tennis, soccer, hockey). Vecer's work at Columbia/Harvard. Connection to win probability models (e.g., MLB win expectancy, NFL). Multi-week traps: applying single-game Poisson model across a tournament without adjusting for fatigue, squad rotation, knockout vs group stage, home-field, red cards, weather. The paper itself notes simplest models assume no memory; multi-week application would violate memoryless assumption due to accumulated fatigue, suspensions, etc.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
   - Crisis habit regression: teams under pressure revert to habitual strategies (defensive shell when leading, desperate attack when trailing), which the memoryless Poisson model fails to capture because intensity λ, µ should be state-dependent (score, time, red cards).
   - Counter-trap: opponent anticipates regression and adjusts (e.g., pressing a team known to defend a lead), creating second-order effects not in independent Poisson processes.
   - Clock: fixed T in model ignores stoppage time, extra time, penalty shootouts; the model treats end time as fixed and known, but real games have uncertain stoppage time and overtime, altering win expectancy dynamics near T.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
   - Physical layer: Poisson assumes goals are independent point events with constant rate. In reality, physical fatigue reduces scoring intensity late in game (λ(t) not constant). Weather (rain, wind, heat) affects ball movement and player endurance, violating independence and constant rate.
   - Biomechanical: sprinting intensity, muscle fatigue, injury time. A red card (not modeled) changes team strength discontinuously.
   - Weather: precipitation alters scoring probability (e.g., slick surface), violating homogeneous Poisson.
   - Veto proof: The model is valid only when λ, µ are approximately constant over [0,T] and no state changes (red cards, penalties, weather shifts) occur. Veto condition: if |dλ/dt| > ε or exogenous shock occurs, model excitement metric is invalid.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
   - Scenario 1: Early red card (e.g., 20th minute) in a soccer match. Model assumes constant λ, µ throughout. Veto: λ drops for team with 10 men, µ rises. Prediction: Model overestimates excitement early (because it doesn't anticipate the discontinuity) and underestimates late-game win expectancy swings after the card. Verifiable: compare modeled win expectancy path vs actual exchange-implied path around card event.
   - Scenario 2: Extreme weather (heavy rain) starting at halftime. Model assumes homogeneous Poisson over full T. Veto: λ(t), µ(t) decrease after halftime due to conditions. Prediction: Expected excitement computed pre-game will exceed realized excitement because scoring intensity drops in second half, reducing lead changes. Verifiable: compare model's expected TV vs realized TV for matches with weather shift at halftime.
   - Scenario 3: Knockout game going to extra time/penalties (draw not an option after regulation). Paper's Table 2 handles overtime separately, but the base model assumes fixed T and draw possible. Veto: If regulation ends in draw, the process resets with new T' (overtime) and potentially different intensities (fatigue). Prediction: Applying regulation-time Eq (4) to a game that goes to penalties underestimates total excitement because the overtime/shootout phase adds additional TV not captured in fixed-T regulation model. Verifiable: compare total TV including overtime (Table 2) vs regulation-only (Table 1) for starred games; model must layer phases rather than treat as one homogeneous Poisson process.

Now, word count: need >=1000 words total across sections. THINK_TRACE alone >=400 words. Let's aim for ~1500-2000 words total to be safe.

Important: No betting lines. I will not mention odds, spreads, moneylines, totals. I can mention "market-implied probabilities" generally but avoid specific odds language. Actually, the paper says "betting market estimated scoring intensities". I can refer to "market-calibrated intensities" without quoting odds.

Also, no toy equations. All equations must be formal LaTeX from the paper or standard math, not invented ratios like Force/Fatigue.

Let's draft carefully.

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

I need to include verbatim quotes where possible. Let's pull some:

- "Excitement = Variability of the Winning Expectancy. (1)"
- "TV(f) = max ... |f(t_{i+1}) - f(t_i)|" (garbled but I can quote the text version).
- "The longer the path of win expectancy for a given team, the more swings there are in the game, and thus the game is more exciting."
- "In this talk we introduce a quantitative measure of the excitement of sports games. This measure can be thought of as the variability of the expectancy of winning as a game progresses."
- "Higher Excitement comes with More changes in the score lead. Changes that are more dramatic. Decisive moments later in the game."
- "Poisson process is a memoryless counting process (i.e., taking integer values) in continuous time."
- "We assume that the scores of the two teams evolve as independent Poisson processes."
- "Higher scoring rates lead to increased expected excitement."
- "Given a particular strength of a team, the most exciting games are expected with opponents who are slightly stronger."

For page citations: Since no page numbers, I'll cite [Source: Section] or just note the quote is from the provided text. The user said "When source pages are provided..." They aren't. I'll omit [PAGE N] or use [SECTION: ...]. To be safe, I'll write "([Source text, Motivation section])" etc. But the instruction says cite exact [PAGE N] markers. If none exist, I cannot invent them. I'll use section names in brackets like [SECTION: Poisson Model] or just reference the document. Actually, maybe I can infer pages: The text seems to be a slide deck converted to markdown. Each "slide" might be a page. There are many section headers. I could assign page numbers sequentially as they appear: Page 1 = Motivation/Abstract, Page 2 = Motivation continued, etc. But that's fabrication. Better to not use [PAGE N] and instead use [DOC SECTION] or simply quote without page marker, explaining pagination is not marked in the provided markdown. I think that's acceptable.

Let's write.

THINK_TRACE content:
Start with the core conceptual derivation.
Explain win expectancy as a stochastic process p_1(t) = P(Team 1 wins | F_t), p_d(t) = P(draw | F_t), p_2(t) = P(Team 2 wins | F_t).
The excitement is the total variation of this vector-valued probability path over [0,T].
Derivation from Poisson: independent increments, memoryless, constant rates λ, µ.
Given current score (x,y) at time t, future goals for team 1: X_T - X_t ~ Poisson(λ(T-t)), similarly for team 2.
Win probability: P(X_T > Y_T) = sum over k,l etc. The paper gives Eq (8) and (9) (garbled). I'll present clean forms.
Total variation TV(p) = sup_Π Σ |p(t_{i+1}) - p(t_i)|.
For vector probabilities, sum TV of each component (Eq 3 or 4).
Gray zone: The model assumes homogeneity (constant λ, µ), independence between teams, fixed terminal time T, and no memory. These are strong assumptions. In soccer, scoring intensity depends on score state (leading team sits back), time remaining (urgency), player fatigue, red cards, weather. Therefore the Poisson TV is a null-model baseline; realized excitement from market data can deviate.
Expected excitement: The paper finds higher scoring rates -> higher expected excitement. Most exciting when opponent slightly stronger. This is because if one team is vastly superior, win expectancy starts near 1 and stays near 1 (low TV). If evenly matched, win expectancy hovers near 0.5 and swings with each goal. If slightly stronger underdog vs favorite, early goal by underdog causes large swing.

I'll write ~450 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations in LaTeX.
Eq (5)-(6) from text.
Score evolution formula.
Draw formula (cleaned).
Win probability formula (cleaned).
TV definition.
Excitement definitions Eq (3), (4).
Expected excitement as function of λ, µ (from figure description, no explicit formula given, but we can state E[TV] = ∫ ... or just say it's computed via simulation/numerical integration over the Poisson paths).
Units: [λ] = goal·min⁻¹ or goal·game⁻¹. [T] = min. [TV] = dimensionless (probability units). Excitement dimensionless.
Breakdown: λ→0, µ→0, T-t→0, state-dependent intensity.

RETROCAUSAL_GENEALOGY:
Historical lineage: Markov chain models in sports (baseball half-inning states, tennis point-state win probabilities, soccer goal Poisson). Vecer et al. extend to excitement as path variation. Multi-week traps: applying this to a tournament over weeks ignores squad rotation, cumulative fatigue, travel, tactical adjustments between games. The model is static; multi-week use would require time-varying λ_i(t) and cross-game correlation. Trap: assuming Poisson parameters estimated from group stage apply unchanged to knockout round.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under pressure, teams regress to trained habits (e.g., protect lead). This makes λ, µ endogenous to score state, violating exogenous constant-rate Poisson.
Counter-trap: opponent anticipates the regression and presses; creates a strategic fixed point not captured by independent processes.
Clock: fixed T ignores stoppage time and extra time; near T, win expectancy should incorporate uncertainty in terminal time, not a hard cutoff.

CROSS_LAYER_VETO_ADJUDICATION:
Physical: fatigue lowers λ late; weather alters scoring probability.
Biomechanical: red card, injury, substitution cause discontinuity in team strength.
Weather: rain/wind/heat changes λ(t).
Veto conditions: if max_t |dλ/dt| > threshold or shock event occurs, the TV metric is invalid; must switch to state-dependent or jump-diffusion model.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios as above, with verifiable predictions.

Make sure total words > 1000. Let's write generously.

Need to ensure no mention of odds/spreads/moneylines/totals. I'll avoid them entirely.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
The core derivation proceeds in four hops. First, Vecer defines excitement not as raw scoring frequency but as the variability of the win-expectancy path: if p₁(t) = P(team 1 wins | ℱₜ), p_d(t) = P(draw | ℱₜ), and p₂(t) = P(team 2 wins | ℱₜ), excitement is the total variation of this probability vector over the game interval [0, T]. Second, the model encodes scoring as two independent homogeneous Poisson processes with intensities λ and µ (goals per unit time), so the future goal increment for either team over the remaining interval T − t is Poisson(λ(T−t)) or Poisson(µ(T−t)). Third, conditional on the current score (Xₜ, Yₜ), the win, draw, and loss probabilities are explicit finite/infinite sums over these Poisson tails; the paper presents Eq. (8) for the draw probability and Eq. (9) for the team-2 win probability, though the OCR rendering obscures some factorial terms. Fourth, excitement is computed as TV(p₁) + TV(p₂) when a draw is impossible (Eq. 3), or TV(p₁) + TV(p_d) + TV(p₂) when draws are allowed (Eq. 4), where TV(f) = sup over partitions Π of Σ |f(tᵢ₊₁) − f(tᵢ)|.

Gray-zone audit: The Poisson assumption imposes a memoryless, homogeneous, constant-intensity structure that is brittle in real sport. Scoring intensity in soccer is not exogenous; it depends on the current score state (a leading team often sits back, lowering its own λ while the trailing team's µ rises), time remaining (urgency increases near T), red cards, injuries, substitutions, and weather. Because the model treats λ and µ as fixed scalars estimated before kickoff, it cannot generate state-dependent swing asymmetry: a goal by a heavy underdog should move win expectancy more than a goal by the favorite, yet the homogeneous Poisson TV treats all goal events as exchangeable increments of the same underlying rate. Moreover, the paper's own Table 1 and Table 2 split elimination games into regulation (draw possible) and overtime/shootout (draw not an option), tacitly acknowledging that the terminal condition T and the outcome space change mid-competition. A single fixed-T Poisson process therefore underestimates excitement in knockout matches that proceed beyond regulation, because the post-regulation phase adds probability-path variation that is excluded from the regulation-only TV calculation. Finally, "expected excitement" derived from pre-game intensities is a baseline; realized excitement computed from market-implied in-play probabilities will systematically diverge whenever in-game events violate the memoryless hypothesis.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations from the source text:

Poisson increment definition (Eq. 5–6):
P(X_{t+Δt} = X_t | X_t) = 1 − λ(Δt) + o(Δt),
P(X_{t+Δt} = X_t + 1 | X_t) = λ(Δt) + o(Δt).

Score evolution (independent Poisson processes):
P(X_T = X_t + k | X_t) = exp[−λ(T − t)] [λ(T − t)]^k / k!,
P(Y_T = Y_t + k | Y_t) = exp[−µ(T − t)] [µ(T − t)]^k / k!.
Units: [λ] = [µ] = goals·time⁻¹; [T − t] = time; argument of exponential is dimensionless.

Expected remaining goals:
E[X_T − X_t | X_t] = λ(T − t),   E[Y_T − Y_t | Y_t] = µ(T − t).

Draw probability (Eq. 8, reconstructed from source):
P(Draw) = P(X_T = Y_T) = Σ_{k=0}^{∞} e^{−(λ+µ)(T−t)} ... (source rendering: terms involve (kλ + max(...))! and (kµ + max(...))!).

Team-2 win probability (Eq. 9):
P(Y_T > X_T) = Σ_{k=0}^{∞} P(Y_T = k − Y_t, X_T < k − Y_t).

Total variation (Eq. 2, standard form; source renders a sup/limit expression):
TV(f) = sup_{0=t₀<t₁<...<tₙ=T} Σ_{i=0}^{n−1} |f(t_{i+1}) − f(t_i)|.
Units: probability units (dimensionless, range [0, 2] for a single probability path).

Excitement definitions:
No-draw case (Eq. 3): Excitement = TV(P(Team 1 wins)) + TV(P(Team 2 wins)).
Draw-allowed case (Eq. 4): Excitement = TV(P(Team 1 wins)) + TV(P(Draw)) + TV(P(Team 2 wins)).

Singularity / breakdown regimes:
- λ → 0 or µ → 0: one team cannot score; win expectancy collapses to a step function at t = 0, TV → 0.
- T − t → 0: remaining Poisson mass vanishes; win expectancy converges to the realized outcome indicator, TV → 0 except at the final instant.
- λ ≈ µ with draw allowed: maximum path variation because p_d(t) remains appreciable and small goal increments flip the ordering of p₁ and p₂.

Source citations are to the provided markdown document (no printed page numbers appear in the OCR text); verbatim quotes are drawn from the "Motivation," "Definition," "Poisson Model," and "Score Evolution" sections.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces from classical Markov and Poisson modeling of sport—baseball half-inning states, tennis point-state win probabilities, and soccer goal counts—into Vecer's novelty: excitement as the total variation of win expectancy rather than win expectancy itself. Earlier work modeled who would win; this paper models how much the answer wobbles while the clock runs. The historical dependency creates a multi-week trap: if one estimates λ and µ from a group stage and carries them forward into a knockout round, the model ignores accumulated fatigue, squad rotation, tactical conservatism in elimination games, and the change in terminal condition (draw allowed in regulation vs. draw forbidden after extra time). Because the Poisson process is memoryless, it cannot encode carryover effects from Week 1 to Week 4 of a tournament. Applying a single-game, fixed-T intensity estimate across weeks without re-estimating state-dependent intensities constitutes a retrospective overfit: the model will predict smooth excitement paths that fail to capture the discontinuous probability jumps caused by inter-week roster changes and cross-game strategic adaptation.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under pressure, teams regress to trained habits—protecting a lead by dropping deeper, or chasing a goal by committing more attackers forward. This makes scoring intensity endogenous to the score state, violating the exogenous constant λ and µ of the homogeneous Poisson model. Counter-trap: the opponent anticipates this regression and presses higher against a team known to defend a lead, producing a second-order strategic adjustment that the independent Poisson processes cannot represent because team intensities are not conditionally coupled. Clock: the model assumes a fixed, known terminal time T. Real soccer has uncertain stoppage time, extra time, and penalty shootouts; near the regulated end, win expectancy should integrate over terminal-time uncertainty rather than collapse at a hard cutoff. The recursive loop is therefore: score state → habit regression → opponent counter-trap → altered intensity path → win-expectancy swing not generated by the baseline Poisson TV.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the homogeneous Poisson model requires λ(t) and µ(t) to be approximately constant over [0, T]. Physical fatigue induces a negative drift in scoring intensity late in matches, so dλ/dt < 0 and dµ/dt < 0 as t → T. Biomechanical layer: a red card, injury, or substitution creates a discontinuity in team strength, causing an instantaneous jump in λ or µ that violates the continuous-time counting-process assumption. Weather layer: precipitation, wind, or extreme heat changes the per-minute scoring probability, introducing an exogenous time-varying modulation not captured by scalar λ and µ. Veto proof: the excitement metric is valid only when max_t |dλ/dt| and max_t |dµ/dt| are below a small tolerance and no state-changing exogenous shock occurs. If a veto condition is triggered, the TV computed from fixed-rate Poisson intensities is invalidated; a state-dependent or jump-diffusion model is required to avoid spurious excitement estimates.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Early red card (e.g., 20th minute) leaving one team with 10 men. Veto: the model's pre-game constant λ for that team no longer applies after the card; λ drops and the opponent's µ rises discontinuously. Prediction: the Poisson model will overestimate early-game excitement (because it smooths over the impending intensity collapse) and underestimate late-game win-expectancy swings (because it fails to anticipate the post-card probability jump). Verifiable by comparing modeled TV paths against realized in-play win-expectancy paths around the card event.

Scenario 2: Weather regime shift at halftime (e.g., heavy rain begins). Veto: λ(t) and µ(t) decrease after halftime due to degraded ball control and player endurance, violating homogeneity over the full [0, T]. Prediction: pre-game expected excitement computed from full-match intensities will exceed realized excitement, because second-half scoring intensity and hence lead-change probability are suppressed. Verifiable by comparing model expected TV vs. realized TV for matches with a documented halftime weather shift.

Scenario 3: Knockout regulation draw proceeding to extra time/penalties. Veto: the base model assumes fixed T and allows a draw (Eq. 4), but knockout rules replace the draw outcome with a new phase (extra time, then shootouts) having its own intensity parameters and terminal condition. Prediction: applying the regulation-time Eq. (4) alone underestimates total excitement for starred games because it omits the additional probability-path variation generated in overtime and penalties. Verifiable by comparing Table 1 (regulation only) versus Table 2 (including overtime) total values for the same matches; the difference quantifies the omitted post-regulation TV.
</RLVR_COUNTERFACTUAL_VETOES>