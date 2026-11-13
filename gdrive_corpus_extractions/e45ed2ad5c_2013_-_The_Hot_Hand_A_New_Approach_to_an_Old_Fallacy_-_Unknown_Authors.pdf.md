---
source: "2013 - The Hot Hand A New Approach to an Old 'Fallacy' - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/New England Symposium on Statistics in Sports/2013"
pages: 28
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3710
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about the "Hot Hand" fallacy in basketball. They've provided the full text of a 28-page paper from the New England Symposium on Statistics in Sports (2013) by Bocskocsky, Ezekowitz, and Stein.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said ">= 1,000-WORD DEPTH across these exact XML sections" but then lists 6 sections. The THINK_TRACE needs >=400 words. The total across sections needs to be >=1000 words.

Let me structure this carefully.

Key content from the paper:
- Page 2: Table of contents
- Page 3: Definition of Hot Hand - belief that player who made several past shots is more likely to make next shot. Shots not independent.
- Page 4: Gilovich, Vallone, and Tversky 1985 disproved it. P(Hit) does not vary conditional on consecutive hits/misses. Streak length consistent with independence. No streakiness in free throws.
- Page 5: Larry Summers, David Brooks op-ed. Random statistical noise.
- Page 6: GVT assumption - each player has ensemble of shots varying in difficulty, each shot randomly selected from ensemble. This is the assumption challenged.
- Page 7: Two questions: 1) Do players attempt more difficult shots as they become hotter? 2) Are hot players more likely to make next shot, controlling for difficulty?
- Page 9-10: Data sources: NBA Roster, NBA Expanded Play-by-Play, SportVU Optical Tracking (x,y,z coordinates at 1/25 sec increments), SportVU Play-by-Play Optical. 6 cameras per court, 15 arenas, ~3500 events/game, 83,000 shot attempts 2012-2013, 600M+ optical observations.
- Page 11: Shot log variables: Shot conditions (location, type - 13 mutually exclusive categories), game conditions (score differential, time remaining, quarter), defensive conditions (locations of all defenders, defender angle).
- Page 13: Shot difficulty model: ˆP_is = α + β*(Game Condition Controls_is) + γ*(Shot Controls_is) + δ*(Defensive Controls_is) + θ*(Player Fixed Effects_is)
- Page 14: Model tested on randomized training set.
- Page 15: Heat measures: Simple Heat_n (shooting percentage over past n shots) and Complex Heat_n (actual minus expected percentage over past n shots based on ˆP values).
- Page 16: Complex Heat better because it measures true overperformance and controls for serial correlation between shots. Complex Heat = Actual Pct - Expected Pct = Simple Heat - Expected Pct (difficulty of past shots).
- Page 18: Questions: Do hot players take shots from further away? Do defenders cover more closely? Are hot players more likely to take team's next shot? Does overall shot difficulty increase with heat?
- Page 19: Empirical strategy equations: Shot Distance_is = α + β*(Heat_is) + γ*(Controls_is) + θ*(Player Fixed Effects_is). Defender Distance same. P(Same_is) = Φ(α + β*(Heat_is) + γ*(Controls_is) + θ*(Player Fixed Effects_is)) [probit]. ˆP_is = α + β*(Heat_is).
- Page 20: Results table. Simple Heat (4): Distance coefficient 2.385*** (0.186), Defender Distance 0.0578*** (0.00871). Complex Heat (4): Distance 2.240*** (0.185), Defender Distance -0.151*** (0.0397), P(Same) 0.0637*** (0.00909). Effect sizes: Shot Distance 7.0 in, 4.6%. Defender Distance 0.5 in, 1.0%. P(Take Next Shot) 1.4%, 7.2%. These reflect making an additional shot of last four attempts.
- Page 23: Testing for Hot Hand - heat affects shot selection, proving Tversky assumption of random shot selection doesn't hold.
- Page 24: Empirical strategy: Baseline P(Make_is) = α + β*(Heat_is) + θ*(Player Fixed Effects_is). Difficulty-controlled: P(Make_is) = α + β*(Heat_is) + γ*ˆP_is.
- Page 25: Simple Heat no evidence without difficulty controls.
- Page 26: Complex Heat with difficulty controls: positive significant Hot Hand effect emerges.
- Page 28: Conclusions: Players believe in Hot Hand and act accordingly (further away shots, defenders cover closer, more likely to take next shot, more difficult shots). Hot players more likely to make next shot controlling for next shot's difficulty. Hot Hand emerges when controlling for both past and current shot difficulty.

Now I need to write this in the required format. No betting lines. Formal LaTeX equations with units. Page citations with [PAGE N] and verbatim quotes.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation and gray-zone audit.
- Discuss the identification problem: GVT 1985 assumed random shot selection from ensemble. This paper challenges that.
- Multi-hop: If heat -> shot selection difficulty -> observed make probability. If hot players take harder shots, raw make probability stays flat even if underlying ability increases. Controlling for ˆP isolates the heat effect.
- Gray zones: Fixed effects absorb time-invariant player skill but not time-varying defensive attention or fatigue. Optical tracking gives defender distance but not defensive intent. The probit model P(Same) assumes normality of latent utility; breakdown if heteroskedasticity or endogeneity (heat is not randomly assigned - players choose when to shoot). The "additional shot of last four" interpretation is a local average treatment effect around the margin of Complex Heat moving from 0 to 0.25 (one extra make out of four).
- Singularity/breakdown: n=0 in heat measure undefined; perfect collinearity between player fixed effects and heat if player only shoots once; ˆP model misspecification if shot difficulty nonlinear in defender angle/distance.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, citations.
- Define ˆP_is equation from page 13.
- Simple Heat_n = (1/n) Σ_{j=1}^n Y_{i,t-j} where Y ∈ {0,1}.
- Complex Heat_n = (1/n) Σ Y - (1/n) Σ ˆP.
- Shot distance equation page 19. Units: feet? The effect size says 7.0 in (inches) for shot distance, 0.5 in for defender distance. Wait, that's odd - shot distance in inches? Let me re-read. Page 20: "Shot Distance 7.0 in 4.6%". Defender Distance "0.5 in 1.0%". This seems like inches, but shot distance is usually feet. Maybe the model output is in feet but they converted to inches for effect size? Actually looking at the table: Distance coefficients around 2.24-2.385 with constants around 7-8 feet. So distance is in feet. The effect size of 7.0 inches = 0.583 feet. If coefficient is ~2.24 per unit heat (0 to 1 scale?), moving heat by 0.25 (one extra make out of 4) gives 2.24 * 0.25 = 0.56 feet ≈ 6.7 inches. Yes, that matches. So units: feet for distance, probability [0,1] for P(Make), dimensionless for heat.
- P(Same) probit equation.
- Testing equation P(Make_is) = α + β Heat_is + γ ˆP_is.
- Units: probability dimensionless, ˆP in [0,1], heat in [-1,1] or [0,1] depending on definition.
- Breakdown regimes: Complex Heat requires n ≥ 1; if n is too large, heat measure dilutes recent form; if too small, high variance. Player fixed effects θ_i require multiple observations per player.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Gilovich, Vallone, Tversky (1985) -> cognitive illusion, random sequences. Larry Summers speech. David Brooks NYT op-ed. This paper (2013) revisits using SportVU.
- Multi-week traps: Over a multi-week slate, a player's "heat" may be confounded with matchup schedule (weak defenders), home/away, back-to-backs (fatigue), and defensive adjustments (teams scout hot players). If a player is hot because he faces weak defenders for two weeks, then cools when facing strong defenders, the autocorrelation in heat is spurious. The paper controls for player fixed effects and shot difficulty but not explicitly for opponent strength week-to-week beyond defensive controls in ˆP.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure (close game, end of quarter), players regress to habitual shot selection; hot hand belief may amplify or suppress.
- Counter-trap: Defenders know the hot hand fallacy debate; if they over-guard a "hot" shooter, they leave open the weaker teammate. The offense can exploit this meta-belief.
- Clock: Game clock and shot clock constrain shot selection. End of shot clock forces difficult shots regardless of heat. The paper controls for time remaining but the interaction between heat and shot-clock pressure is a gray zone.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: Indoor basketball, no weather veto (controlled arena). SportVU optical tracking at 25 Hz gives x,y,z coordinates; measurement error in defender distance is sub-foot but not zero.
- Biomechanical: Shot release mechanics not observed. A player can be "hot" due to altered release angle or arc; optical data tracks ball position but not shooter's joint kinematics. If heat changes release mechanics, ˆP model (based on location/type/defense) misses this mediator.
- Veto proof: The paper's identification relies on conditional independence given controls. If there is an unobserved time-varying confounder (e.g., micro-injury, adjustment to arena lighting, rim conditions), the estimated β on Heat is biased. No explicit weather veto needed (indoor), but arena-specific rim bounce could matter.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios.
- Scenario 1: Perfect collinearity / no within-player variation. If a player takes exactly one shot per game, heat_n cannot be computed (n=0) or player fixed effects absorb all variation. Prediction: model fails to converge or β unidentified.
- Scenario 2: Shot difficulty model misspecification. If true shot difficulty depends on shooter fatigue (minutes played) omitted from ˆP, then Complex Heat is biased upward for tired players taking hard shots. Prediction: controlling for minutes played in ˆP attenuates β to zero.
- Scenario 3: Defensive endogeneity. Defenders choose distance based on observed heat, so Defender Distance is a collider or endogenous regressor. Prediction: instrumenting defender distance with team defensive scheme eliminates the -0.151 coefficient.

Let me make sure I have >=1000 words total. THINK_TRACE alone needs >=400 words. Let me aim for substantial depth in all sections.

I need to avoid betting lines completely. No mentions of odds, spreads, etc.

I need to include verbatim quotes with page citations.

Let me draft carefully.

Word count estimate:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total: ~1800 words. Good.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s central multi-hop derivation proceeds as follows. Gilovich, Vallone, and Tversky (1985) [PAGE 4] established the canonical null: under the assumption that each shot is randomly drawn from a player’s ensemble of shot difficulties, P(Hit) does not condition on recent makes or misses, and observed streak lengths match independence [PAGE 4]. Bocskocsky, Ezekowitz, and Stein [PAGE 6] identify the critical fragility in that null: it requires "each shot is randomly selected from this ensemble" of shot difficulties. They argue this assumption is violated if players’ beliefs about heat alter shot selection. The causal chain is therefore heat → perceived shot-selection adjustment → increased difficulty of next shot → offsetting of any underlying hot-hand make probability. If hot players take harder shots, raw make probability remains flat even if conditional shooting talent temporarily rises.

The authors formalize shot difficulty with a linear probability model for player i, shot s [PAGE 13]: 
\(\hat{P}_{is} = \alpha + \beta \cdot (\text{Game Condition Controls}_{is}) + \gamma \cdot (\text{Shot Controls}_{is}) + \delta \cdot (\text{Defensive Controls}_{is}) + \theta \cdot (\text{Player Fixed Effects}_i)\). 
Here \(\hat{P}_{is} \in [0,1]\) is a probability estimate, not an odds ratio or betting line; the controls are categorical and continuous court/state variables. They then define heat over the previous n shots [PAGE 15]: Simple Heat\(_n = n^{-1}\sum_{j=1}^n Y_{i,t-j}\) with \(Y \in \{0,1\}\), and Complex Heat\(_n = n^{-1}\sum Y_{i,t-j} - n^{-1}\sum \hat{P}_{i,t-j}\). Complex Heat has units of probability (percentage points) and measures overperformance relative to expected difficulty. This decomposition is key: Complex Heat = Simple Heat − Expected Pct., where the subtracted term is the average difficulty of past shots [PAGE 16]. It controls for serial correlation in shot difficulty because a player making three open layups registers low Complex Heat, while the same raw percentage from three contested three-pointers registers high Complex Heat.

The identification strategy then runs two stages [PAGE 19–20, 23–26]. First, they test whether heat predicts shot selection: Shot Distance\(_{is} = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is} + \theta_i + \epsilon\), and similarly for Defender Distance and P(Same Shot via probit). Results show Complex Heat (4) increases shot distance by 2.240 feet (standard error 0.185, p<0.01) and makes the shooter 6.37 percentage points more likely to take the team’s next shot [PAGE 20]. These effect sizes are local: they correspond to converting one additional make out of the last four attempts [PAGE 20]. Second, they test whether heat predicts makes conditional on difficulty: baseline \(P(\text{Make}_{is}) = \alpha + \beta \cdot \text{Heat}_{is} + \theta_i\) yields null results for Simple Heat [PAGE 25], while \(P(\text{Make}_{is}) = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \hat{P}_{is}\) with Complex Heat yields a positive significant hot-hand effect [PAGE 26]. The conclusion is that the hot hand emerges only when both past and current shot difficulty are controlled [PAGE 28].

Gray-zone audit: (1) Player fixed effects \(\theta_i\) absorb time-invariant skill but not time-varying fatigue, defensive game-planning, or arena-specific rim effects. If unobserved time-varying confounders correlate with both heat and make probability, \(\hat{\beta}\) is biased. (2) Heat is not randomly assigned; players self-select into shooting after makes, creating endogeneity. The paper addresses this via fixed effects and difficulty controls but not via an external instrument. (3) The n=4 window is arbitrary; n too small yields noisy heat estimates, n too large dilutes recent form. (4) The 7.0-inch shot-distance effect [PAGE 20] implies distance is modeled in feet despite being reported in inches for interpretability; unit mismatches in replication could distort effect sizes. (5) Optical tracking at 25 Hz [PAGE 9–10] measures defender location but not defensive intent; a close closeout is observationally similar to a passive defender.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators from the source:

Shot difficulty model [PAGE 13]:
\[
\hat{P}_{is} = \alpha + \beta \cdot (\text{Game Condition Controls}_{is}) + \gamma \cdot (\text{Shot Controls}_{is}) + \delta \cdot (\text{Defensive Controls}_{is}) + \theta \cdot (\text{Player Fixed Effects}_i)
\]
Units: \(\hat{P}_{is}\) is a predicted make probability in \([0,1]\); controls include shot location, 13 mutually exclusive shot-type categories [PAGE 11], score differential, time remaining, quarter [PAGE 11], defender locations and angles [PAGE 11]. Player fixed effects \(\theta_i\) are dimensionless player intercepts.

Heat measures [PAGE 15–16]:
\[
\text{Simple Heat}_n = \frac{1}{n}\sum_{j=1}^{n} Y_{i,t-j}, \quad Y \in \{0,1\}
\]
\[
\text{Complex Heat}_n = \frac{1}{n}\sum_{j=1}^{n} Y_{i,t-j} - \frac{1}{n}\sum_{j=1}^{n} \hat{P}_{i,t-j} = \text{Simple Heat}_n - \text{Expected Pct.}_n
\]
Units: probability units (fraction), range \([-1,1]\) in principle though bounded by data.

Shot-selection equations [PAGE 19]:
\[
\text{Shot Distance}_{is} = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is} + \theta_i
\]
\[
\text{Defender Distance}_{is} = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is} + \theta_i
\]
\[
P(\text{Same}_{is}) = \Phi(\alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \text{Controls}_{is} + \theta_i)
\]
where \(\Phi\) is the standard normal CDF (probit link), output in \([0,1]\).

Hot-hand testing equations [PAGE 24]:
Baseline: \(P(\text{Make}_{is}) = \alpha + \beta \cdot \text{Heat}_{is} + \theta_i\).
Difficulty-controlled: \(P(\text{Make}_{is}) = \alpha + \beta \cdot \text{Heat}_{is} + \gamma \cdot \hat{P}_{is}\).

Empirical results [PAGE 20]: Complex Heat (4) coefficient on Distance = 2.240*** (SE 0.185); on Defender Distance = -0.151*** (SE 0.0397); on P(Same) = 0.0637*** (SE 0.00909). Effect sizes: Shot Distance +7.0 inches (4.6%), Defender Distance +0.5 inches (1.0%), P(Take Next Shot) +1.4 percentage points (7.2%) per additional make in last four attempts [PAGE 20].

Breakdown/singularity regimes: Complex Heat\(_n\) undefined for \(n=0\); player fixed effects unidentified if a player appears in only one shot; \(\hat{P}_{is}\) breaks down if shot difficulty is nonlinear in defender angle or distance and is misspecified linearly; probit \(P(\text{Same})\) breaks down under heteroskedasticity or if heat is endogenous to unobserved shot-selection shocks. Data coverage: 83,000 shot attempts in 2012–2013, 15 of 30 arenas with SportVU, ~600 million optical observations [PAGE 10].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage: The paper explicitly inherits the Gilovich, Vallone, and Tversky (1985) framework [PAGE 4], which treated the hot hand as a cognitive illusion under random shot selection. It cites Larry Summers telling Harvard players they were wrong to believe in the hot hand, explaining that "people apply patterns to random data" [PAGE 5], and David Brooks’s New York Times op-ed framing hot-hand belief as intuition leading astray, with performance "devolv[ing] back to the player’s career shooting percentage" [PAGE 5]. The 2013 NESSIS paper reverses the burden of proof: rather than asking whether streak lengths deviate from independence, it asks whether the Tversky assumption of random shot selection from a fixed difficulty ensemble fails [PAGE 6–7].

Multi-week traps: Over a multi-week slate, heat may be confounded by opponent schedule strength. A player facing weak perimeter defenders for two weeks accumulates high Complex Heat not from a transient state but from a favorable matchup sequence; when the schedule strengthens, measured heat collapses, generating spurious negative serial correlation in makes. The model controls for defensive conditions in \(\hat{P}\) [PAGE 13] and player fixed effects [PAGE 13], but it does not explicitly model week-to-week opponent adjustment cycles or back-to-back fatigue. Another trap: defensive scouting adapts within a week. If a player is identified as hot, defenders close out harder in subsequent games, mechanically lowering \(\hat{P}_{is}\) and potentially reversing the heat–make relationship. This is a counter-cyclical trap where the measured hot hand decays not because the player cooled, but because the defense adjusted. Finally, arena effects: half the data lacks SportVU coverage [PAGE 10], creating an unbalanced panel where road games without optical tracking may have systematically different shot-difficulty measurement error than home games.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under high-leverage game states (close score, late quarter), players regress to habitual shot profiles. The model includes game-condition controls [PAGE 13] but the interaction between heat and crisis pressure is not isolated. If hot players in crisis moments revert to their default difficulty mix rather than escalating difficulty, the estimated heat–difficulty slope \(\beta\) understates selection effects in clutch time.

Counter-trap: The recursive layer is strategic. Defenders who believe (or disbelieve) in the hot hand adjust their closeout distance. The paper finds defenders cover hot players closer by 0.5 inches [PAGE 20], a small but statistically significant effect. If defenders over-guard a "hot" shooter, they create open opportunities for teammates; if they under-guard because they reject the hot hand, they concede higher-percentage shots to the hot player. The offense can exploit this meta-belief: a shooter who knows defenders over-guard heat may pass to the open teammate, inducing a defensive correction that oscillates around the rational expectations fixed point. This is a counter-trap because the paper’s finding that hot players take harder shots may reflect defensive response rather than shooter overconfidence.

Clock: Shot-clock and game-clock constraints truncate shot-selection freedom. As the shot clock winds down, shot difficulty rises exogenously, independent of heat. The model controls for time remaining [PAGE 13], but clock pressure interacts multiplicatively with heat: a hot player with five seconds on the shot clock cannot express his shot-selection preference. This truncation biases the heat–distance coefficient toward zero in late-clock observations, potentially masking the true selection effect. The recursive theory of mind thus nests three levels: shooter belief about own heat, defender belief about shooter belief, and clock-imposed constraints on the feasible action set.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Games are indoors; no weather veto (wind, temperature, precipitation) applies [PAGE 9–10 indoor optical tracking context]. SportVU uses six cameras per court at 1/25-second resolution, producing x, y, z coordinates for players and ball [PAGE 9–10]. Measurement error in defender distance is sub-foot but nonzero; the 0.5-inch defender-distance effect [PAGE 20] is near the resolution edge of optical tracking and should be treated as a lower-bound signal.

Biomechanical layer: The shot-difficulty model conditions on shot type, location, and defensive pressure [PAGE 13], but it does not observe shooter joint kinematics, release angle, arc, or fatigue-induced mechanics changes. If "heat" operates through a biomechanical mediator—e.g., a hot shooter achieves a more consistent release angle—then \(\hat{P}_{is}\) omits that mediator and the difficulty-controlled make equation misattributes the gain to heat itself. This is a mediation veto: the estimated \(\beta\) on Complex Heat in \(P(\text{Make})\) may capture unobserved mechanical improvement rather than a discrete hot-hand state.

Weather/arena layer: No outdoor weather exists, but arena-specific conditions (rim tightness, background depth perception, lighting) vary and are not explicitly controlled beyond player fixed effects and game controls. If a player shoots well in a particular arena because of favorable rim bounce, Complex Heat inflates there and the cross-arena comparison breaks down.

Veto adjudication: The paper’s identification is conditionally robust only if (a) all time-varying shot-difficulty determinants are captured in \(\hat{P}_{is}\), and (b) no unobserved confounder correlates with heat and makes. Because biomechanical release quality is unobserved, the physical veto is not fully proven; the result holds under the maintained assumption that shot difficulty is fully summarized by location, type, and defensive controls [PAGE 13–14].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios (RLVR = verifiable reward/counterfactual validation):

Scenario 1 — Degenerate heat window. Counterfactual: restrict the sample to players who take exactly one shot per game. Prediction: Complex Heat\(_n\) is undefined or perfectly collinear with player fixed effects; the design matrix loses rank and \(\beta\) on Heat is unidentified. Verification: run the difficulty-controlled make regression on this subsample; the coefficient should fail to converge or return standard errors tending to infinity.

Scenario 2 — Omitted fatigue in shot difficulty. Counterfactual: augment \(\hat{P}_{is}\) with player minutes played (fatigue) and re-estimate Complex Heat. Prediction: if heat was partly a proxy for rested players taking difficult shots, the \(\beta\) on Complex Heat in the make equation attenuates toward zero; if heat is genuine, \(\beta\) remains positive and significant. Verification: compare the magnitude and p-value of \(\beta\) before and after adding minutes to the \(\hat{P}\) model.

Scenario 3 — Defensive endogeneity / collider bias. Counterfactual: instrument defender distance with the team’s pre-game defensive scheme (e.g., switch vs. hedge) rather than observed defender distance. Prediction: if the -0.151 defender-distance coefficient [PAGE 20] was driven by defenders endogenously closing out on hot shooters, the IV estimate will differ substantially from the OLS estimate, possibly reversing sign. Verification: perform a Hausman-style comparison between OLS and IV; a statistically significant difference invalidates the exogeneity assumption.
</RLVR_COUNTERFACTUAL_VETOES>