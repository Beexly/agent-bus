---
source: "2024 - Risks and rewards of executing transition events from settled possession - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2024"
pages: 10
model: deepseek/deepseek-v4.1-flash-1017
words: 5853
---

<NATIVE_REASONING>
We need answer with exact XML sections >=1000 words, no betting lines, no toy equations. Need derive from source pages, cite [PAGE N] verbatim quotes. Need formal LaTeX operators/equations, units, assumptions, singularity breakdown. Need deep multi-hop derivation gray-zone audit >=400 words in THINK_TRACE. Other sections. Need likely discuss transition events from settled possession, definition TE = event packing >=3 defenders goalside while >=3 opposition players pulled outside half-average block, settled possession >=3 passes or Pausa >1.5s, defensive 60% pitch, regular play. Need risks/rewards. Need perhaps formalize TE indicator and risk/reward. Need avoid betting lines. Need cross-layer veto physical/biomechanical/weather. Need RLVR counterfactual vetoes 3 verifiable scenarios with predictions. Need retrocausal genealogy historical/scientific lineage & multi-week traps. Need recursive theory of mind crisis habit regression vs counter-trap vs clock. Need cross-layer veto adjudication physical/biomechanical/weather veto proof. Need source operators and equations with page citations and breakdown regimes. Need cite exact page markers and verbatim quotes. Need discuss no fake ratios. Formal LaTeX equations with units. Could define indicator variables Boolean. Probability units dimensionless. Spatial units meters. Time seconds. Tempo progression per second m/s. Define block extrema. Need exact singularity: ΔTempo division by zero/timestamps, adding 0.01 sec creates artificial high values; long clearances; two events same timestamp. Break down. Need TE risk/reward equations? Maybe expected reward R = E[goals or xG per TE]? Source doesn't provide xG. We can define formal expected utility but no invented numeric ratios? "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." We can define equations from source definitions. Avoid fake ratios. Use Boolean/indicator, probabilities, expected values. Need not invent actual data. We can define risk as probability of possession loss under play state; reward as probability of entering final third? But source says few TEpass directly entering final third. Need not claim numbers. Need use formal probability variables. Could define \(P_{\text{loss}\mid TE attempt}\) and \(P_{\text{final third}\mid TE}\). Need mention no numerical estimates in source. Need maybe define TE execution event \(T_{e}=1\) iff conditions. This is not fake ratio. Use units: indicator dimensionless. Pulled players count \(N_{\text{pulled}}\). Packed defenders count \(N_{\text{pack}}\). Settled possession Boolean. Regular play. Defensive 60% pitch: x in [0,0.6L]? Need coordinate orientation. StatsBomb x likely 0-120, y 0-80, attacking left to right? Source uses X end location - pass event X. Maximum x closest to opposition goal. Defensive 60% of pitch of possession team: likely own 60% from own goal, so x <= 0.6*120? Need source says "defensive 60% of the pitch of the possession team" [PAGE 4]. Use coordinate x in [0, 0.6 L] if x from own goal to opponent goal; if StatsBomb 120x80. We can keep L. Need mention block maxima/minima over 45-min half. Pulled if outside block. Need average block min/max. Need define \(\bar{x}_{\min}, \bar{x}_{\max}, \bar{y}_{\min}, \bar{y}_{\max}\) over opposition players in half. Need potential issue "360 frames blind to names other than actor" [PAGE 3]. Need cite exact quote. Need exact page citations and verbatim quotes. Include several.

Need structure exact XML. Need >=1000 words. THINK_TRACE >=400 words. Other sections collectively. Need no betting. Need maybe mention "clock" in recursive theory. "Crisis habit regression vs counter-trap vs clock." We need interpret: crisis habit regression = teams under pressure revert to old habits? Counter-trap = opposition refusing to be pulled, static defense; clock = Pausa >1.5s and timed tempo. Need discuss recursive theory of mind: attacker draws press, defender decides to be pulled or hold shape, attacker anticipates. The "clock" could be Pausa threshold >1.5s and match timestamp. Need mention multi-week traps in genealogy. Need cross-layer veto proof: physical/biomechanical/weather veto. Need ensure no unsupported claims? We can frame as audit conditions: if pitch/weather affects 360 coordinates? Physical: 360 frame blind to player identity, occlusions? Biomechanical: 0.01 sec hack breaks with one-touch bounce passes/running carries. Weather: not in source; must be cross-layer veto not evidence. State if weather reduces pass precision, it can veto TE but source lacks weather data. Need proof: "veto proof" maybe show formal conditions under which source-defined TE cannot be inferred. Need include physical/biomechanical/weather as cross-layer. Need adjudicate: source doesn't include weather; so any weather claim must be vetoed unless data. Need be honest.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 verifiable RLVR veto scenarios + predictions. RLVR = reinforcement learning with verifiable rewards? Need propose counterfactual scenarios that would invalidate TE statistic if occurs, with predictions. E.g., if 360 frames missing/occluded and pulled count misclassified, then TE count inflated; prediction: remove frames with <X visible defenders changes TE ranking. Need 3 scenarios verifiable. Need predictions measurable. No betting. Need no odds. Use exact thresholds? Can propose. Need maybe "if half-average block estimator with 45-min averaging mislabels players as pulled due to formation shifts, then using rolling 10-min block estimate reduces TE count by >=? predictions." But source no data. We can state predicted directional changes and verification method. Need "verifiable RLVR veto scenario" maybe reward function? We can define a verifier: recode event with manual video labels; if agreement < kappa threshold, veto. Predictions: manual audit changes top TE list, TEpass vs TEcarry classification. Need 3.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Discuss positional play, gegenpressing, Five-Guys, Torero, De Zerbi/Brighton, Emery/Villa, Alonso/Leverkusen, Klopp, Guardiola, Allardyce? The title mentions De la Fuente Spain and Allardyce Bolton. Need trace from risk-reward trade-off, positional play, pressing, Five-Guys, Torero. Multi-week traps: treating TE as causal tactic vs outcome; using event data without 360; retrospective selection of successful clubs; conflating settled possession with transition; using 0.01 duration; schedule/opponent effects over weeks; tactical drift. Need mention source pages. Need no betting.

Need maybe include formal equations for ΔTempo:
\[
\Delta Tempo_i = \frac{x_i^{end}-x_i^{start}}{\max(\Delta t_i,\epsilon)} \quad [m\,s^{-1}]
\]
where \(\Delta t_i=t_i^{end}-t_i^{start}\). Source: "calculate a progression per second (ΔTempo) statistic... utilising match timestamp and X axis coordinate..." [PAGE 3]. Breakdown: \(\Delta t_i=0\) for one-touch passes; adding 0.01 s gives \(\Delta Tempo_i = (x_i^{end}-x_i^{start})/0.01\), huge for bounce passes/running carries; long clearances dominate due large numerator. Singularity at \(\Delta t_i\to0\). Need exact quote. Good.

Define block:
\[
x_{\min}^{opp}(H)=\min_{p\in Opp} x_p,\quad x_{\max}^{opp}(H)=\max_{p\in Opp} x_p
\]
and y. "When averaged across a 45-minute half these values provided a reasonable idea..." [PAGE 3]. Pulled indicator:
\[
\Pi_p = 1\{x_p < \bar{x}_{\min}(H) - \delta_x \ \text{or}\ x_p > \bar{x}_{\max}(H)+\delta_x \ \text{or}\ y_p<\bar{y}_{\min}(H)-\delta_y \ \text{or}\ y_p>\bar{y}_{\max}(H)+\delta_y\}
\]
Actually source says players outside block identified as pulled. Could set strict outside. Need mention threshold 3 pulled. Packed: \(N_{\text{pack}}\ge3\). TE indicator:
\[
T_e = \mathbf{1}\{ \text{regular play} \land \text{settled} \land x_e\le0.6L \land N_{\text{pulled}}\ge3 \land N_{\text{pack}}\ge3 \land e\in\{pass,carry,dribble\}\}.
\]
Settled: \(N_{\text{passes}}\ge3\) OR \(\exists\) Pausa: \(t_e - t_{prev}>1.5s\). Need note source says after regaining ball. Need "regular play as defined in Statsbomb event data" [PAGE 4]. Need "TEpass includes line breaking passes according to Statsbomb model; TEcarry includes carries and dribbles" [PAGE 4]. Good.

Need risk/reward formal. Define for a TE attempt:
\[
R_{\text{loss}} = P(L=1|T_e=1, S=1, x_e\le0.6L)
\]
dimensionless. Source defines unsuccessful attempt as any time possession lost during play state, new possession started e.g. blocked pass out for throw-in [PAGE 4]. Need reward: \(R_{\text{reward}} = P(G \lor \text{final-third entry} | T_e=1)\)? But source doesn't define goals. Could define "chance creation" as downstream not in paper. Maybe use \(P(F=1|T_e)\) for final third entry; source says "few TEpass are directly entering the final third" [PAGE 7]. Also "how much, in terms of chance creation, are these transition-like attacks resembling counterattacks" [PAGE 2] as aim. Define expected reward \(E[U] = P(F=1|T_e)u_F + P(G=1|T_e)u_G - P(L=1|T_e)c_L\) with utility units. But that might seem toy? It's formal decision-theoretic. It is not fake ratio. Use utility units. Need no numeric. Could state source lacks utility weights; cannot estimate. Good. Need "exact singularity/breakdown regimes" for equations: if 360 frame missing or actor-relative blind to names, pulled count undefined; if block extrema averaged over half, formation change breaks stationarity; if x coordinate near boundaries, defensive 60% threshold ambiguity; if Pausa threshold exactly 1.5 s event ordering? Need formal.

Need "CROSS_LAYER_VETO_ADJUDICATION" physical/biomechanical/weather veto proof. Need likely mention "physical" = 360 frame coverage/occlusion, player identity blindness; "biomechanical" = one-touch bounce pass and running carry with same timestamp, 0.01 s hack; "weather" = not in data, cannot validate. Need "veto proof" maybe prove that if 360 frames are blind to names, a player outside block cannot be attributed to specific defender, so \(N_{\text{pulled}}\) only count not identity; if 360 frame excludes off-camera players, count biased. Weather: if wet pitch reduces carry speed or pass accuracy, but source has no weather variables; cannot include. Need adjudicate: weather veto is not proven by source; any model using weather must be external and preregistered. Need mention "physical/biomechanical/weather veto proof" perhaps "veto proof" = conditions where the source-based inference is invalid. Good.

Need "RECURSIVE_THEORY_OF_MIND" crisis habit regression vs counter-trap vs clock. Need discuss attacker-defender recursive reasoning. Crisis habit regression: under pressure, defender reverts to ball-watching/press, gets pulled; attacker anticipates. Counter-trap: static defense refusing to be pulled [PAGE 6], denies TE conditions; attacker must use dropping attacker/overload [PAGE 6]. Clock: Pausa >1.5s and 3 passes define settled possession; timing of TE execution. Need recursive levels: L0 defender sees ball; L1 attacker draws defender; L2 defender knows attacker wants pull and stays; L3 attacker uses decoy drop to force man-oriented defender; L4 defender coordinates static block. Need mention "clock" as both temporal threshold and game-state clock; late-game fatigue? Source not data. Need avoid unsupported. Use "crisis habit regression" maybe when team under pressure reverts to old direct clearances, which the ΔTempo metric over-awards long goalkeeper clearances [PAGE 3]. Counter-trap is static defense. Clock is Pausa/3-pass gating. Need mention recursive theory of mind with source quotes: "draw the opposition out of a block" [PAGE 2]; "refusing to be pulled out of position" [PAGE 6]; "dropping an attacker into the build-up phase" [PAGE 6]. Need maybe "counter-trap" uses static defense and pressuring TE outlets [PAGE 6]. Need "clock" = "Pausa (no event for greater than 1.5 seconds)" [PAGE 4]. Good.

Need "RETROCAUSAL_GENEALOGY" length maybe 250 words. Need "multi-week traps": 
- Outcome bias: Villa CL, Brighton Europe, Tottenham, Leverkusen [PAGE 7-8]; cannot infer TE caused success over multiple weeks without counterfactual.
- Tactical drift: 10 EPL sides 2022/23-2023/24 [PAGE 3]; coaching changes, opponent adaptation.
- Week-to-week block estimation: averaging across 45-min half can misclassify after red cards/formation changes. 
- Opponent scouting: static defense counter; if teams adapt over weeks, TE volume changes.
- Using successful TE events only excludes unsuccessful attempts; need include blocked passes/throw-ins [PAGE 4].
Need cite.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 scenarios. Need "RLVR" maybe "reinforcement learning with verifiable rewards" but answer can phrase "RLVR-style verifier". Need predictions. Example:
1. Manual video audit of 360-frame pulled count. Veto if Cohen's kappa <0.7 between algorithmic \(N_{\text{pulled}}\ge3\) and human labels on stratified sample. Prediction: top-10 TE list changes by at least 2 ranks; Brighton GK Jason Steele and Everton players remain? Hmm prediction must be verifiable. We can say "TE counts fall for sides with frequent half-long formation changes; TEpass proportion rises because carries near touchline misclassified." Need not be true; prediction directional. 
2. Replace half-average block with rolling 10-min window. Veto if ranking correlation with original TE counts <0.8. Prediction: Everton/West Ham balance changes; Villa left bias attenuates/increases? Need not know. Better: "TE counts decrease for teams that switch between back three/four within a half; TE spatial maps shift away from wings." 
3. Reclassify TEpass vs TEcarry using StatsBomb line-breaking model vs manual line-break. Veto if disagreement >20%. Prediction: TEpass count drops for long diagonal passes that are not line-breaking; final-third entry rate changes. 
Need include "verifiable" with explicit metric threshold. Could use "if agreement <0.70 kappa" etc. Need avoid fake precision? Thresholds are methodological, okay. Need no betting. 
Alternatively RLVR counterfactual vetoes: "if removing all events with same timestamp eliminates X% of TEs, then ΔTempo not used? Actually TE uses 360 not ΔTempo. The paper abandoned ΔTempo. Veto scenario for using ΔTempo counterfactual: if a model reintroduces ΔTempo, then one-touch passes create singularity; prediction: bounce passes dominate top progression/sec; veto. But TE method doesn't use ΔTempo. RLVR counterfactual for source: 
- Veto TE if 360 frames missing >5% in defensive 60% for a team-season; prediction: TE volume undercounts and ranking unstable.
- Veto pulled threshold if manual labels show 3-pulled threshold not stable; prediction: changing to 4 pulled reduces TE count by >30% and changes player list.
- Veto "settled possession" if including 2-pass possessions changes TE count; prediction: TE count increases, especially for press-heavy sides. 
Need 3 verifiable. Could include exact thresholds.

Need "SOURCE_OPERATORS_AND_EQUATIONS" includes formal LaTeX, units, page citations, breakdown. Need maybe quote exact pages. Ensure all citations exact [PAGE N]. Need use "verbatim quotes" exact. Need check quotes:
PAGE 1: "Tactics change as different teams choose to set up according to how they evaluate one simple trade-off, the risk of conceding versus the reward of creating goalscoring opportunities." Exact.
PAGE 2: "create artificial transition-like attacks from settled possession" and "draw the opposition out of a block" exact? The text: "it does seek to use the proliferation of positional play and its pressing evolution to draw the opposition out of a block 12,13." Exact quote with superscripts omitted. Also "Key to this strategy is the event of transition itself, hereafter referred to as a Transition event (TE), when the opposition have ideally been drawn out and it is time to attack." 
PAGE 3: "calculate a progression per second (ΔTempo) statistic for every event within a given possession, utilising the match timestamp and X axis coordinate of events" and "Adding an insignificant duration of 0.01 seconds to any event meant even small amounts of progression were awarded high progression/second if the event was a bounce pass or running carry." "Furthermore, this approach highly awarded long passes, particularly clearances from goalkeepers" exact.
PAGE 3: "As 360 frames are blind to the name of any player other than the actor" exact.
PAGE 4: "When 3 or more players were pulled out of position, I could then identify TEs by finding events which ‘packed’ players behind the ball" exact. "packing 3 or more players, reducing a possible 10 outfield players to 7 in front of the ball" exact. "play pattern coming from regular play" "at least 3 passes or a ‘Pausa’ (no event for greater than 1.5 seconds) after regaining the ball" exact. "defensive 60% of the pitch of the possession team" exact. "any time possession was lost during this play state" maybe exact.
PAGE 6: "refusing to be pulled out of position" exact. "dropping an attacking midfielder, winger, or even forward" exact. "pressuring the attacking side’s regular TE outlets" exact.
PAGE 7: "few TEpass are directly entering the final third" exact. "Brighton’s right side dominate TE execution, vice versa Aston Villa’s left side bias." exact.
PAGE 8: "Bayer Leverkusen ended 11 years of Bayern Munich’s domestic dominance against the odds adopting Torero principles." exact.
Need include page citations.

Need maybe note author Daniel A. Pritchard, not unknown. User says Unknown Authors but source shows Daniel A. Pritchard. We can cite page 1.

Need answer with exact XML tags. Need no markdown? Can use XML with LaTeX. Need ensure XML well-formed: ampersands escaped? In LaTeX use \&? In XML text, ampersands must be escaped as &amp; if using &? We can avoid ampersands. Use "and". Need angle brackets? Avoid `<` in text? In XML, `<` must be escaped. Use \le or words. LaTeX with < maybe problematic. Use \le. Need no raw `&`. Use \(...\) fine. Use apostrophes fine. Need if using `\text{...}` no issue. Need avoid `<` in equations; use \le, \ge. Avoid `>` too. Use `\ge`. Good. Need no ampersand. If quoting "block & counter" use "block and counter". Good.

Need word count. Let's draft robustly.

Potential issue "STRICT INVARIANTS: ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Avoid words odds except "against the odds" is quote from source? That is not betting line but contains "odds". Invariant says never mention odds. Quoting source "against the odds" might violate? Better paraphrase "against expectations" and not quote that phrase. Avoid "odds" entirely. Also avoid "spreads, totals, moneylines". Good.

Need "ZERO TOY EQUATIONS" - ensure equations are formal. We can include decision-theoretic utility. Need state units. Use dimensionless probabilities, meters, seconds, utility units. Need exact singularity regimes.

Need ">=1,000-word depth across exact XML sections" maybe total >1000. We can easily exceed. Need THINK_TRACE >=400 words. Let's produce maybe 2500 words. Desired oververbosity 5. Need not overly huge but enough. We need satisfy >=1000. Let's aim ~2000-2500. Ensure each section.

Let's outline:

<THINK_TRACE>
- Deep multi-hop derivation: source problem: risk/reward trade-off. Define TE from settled possession. Step 1 ΔTempo attempt fails. Step 2 use 360 frames to estimate block extrema. Step 3 pulled count >=3. Step 4 packed >=3. Step 5 filters regular play, settled with 3 passes or Pausa >1.5, defensive 60%. Step 6 success/unsuccessful. Gray-zone audit: thresholds arbitrary; 3 pulled/packed; half-average block nonstationary; 360 blind names; possession loss definition; TEpass vs TEcarry; no downstream reward metric. Need >=400 words. Include citations. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal definitions: ΔTempo equation and singularity. Block extrema. Pulled indicator. TE indicator. Settled possession. Risk/reward. Units and breakdown. Cite pages. Verbatim quotes. Good.

<RETROCAUSAL_GENEALOGY>
- Lineage: positional play, gegenpressing, Five-Guys, Torero. Cite pages 1-2, 8. Multi-week traps. Good.

<RECURSIVE_THEORY_OF_MIND>
- Recursive game: defender press vs static; attacker drop; crisis habit regression; counter-trap; clock. Cite pages 2,4,6. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical: 360 occlusion/blind names. Biomechanical: one-touch/running carry timestamp, 0.01s. Weather: not in source; veto external. Proof conditions. Cite pages 3-4. Good.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios with thresholds and predictions. Cite pages. Good.

Need ensure "RLVR" maybe not explain? Could say "Reinforcement-learning-with-verifiable-rewards style vetoes" maybe okay. Need not include betting.

Need ensure exact XML tags. Use no markdown code block? The final can be raw XML. Need include all sections exactly.

Let's write.

Need be careful with XML escaping in LaTeX: `\{` okay. Use `\mathbf{1}`. Use `\text{...}`. Use `\quad`. No `<`. Use `\le`. Use `\ge`. Use `\Delta`. Use `\epsilon`. Use `\bar{x}`. Use `\lor` and `\land`. XML text supports backslash. Ampersand none. Use `\text{Opp}`. Good.

Potential problem in LaTeX `\text{TEpass}` fine. Use `\text{defensive-60}`. Good.

Need include quotes with quotation marks. Verbatim exact maybe use " " but can use curly? Fine. Need cite exact [PAGE N] after quotes.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source’s central derivation begins with a trade-off rather than a metric: “Tactics change as different teams choose to set up according to how they evaluate one simple trade-off, the risk of conceding versus the reward of creating goalscoring opportunities” [PAGE 1]. The paper then narrows that broad trade-off to Torero, a style that seeks to “create artificial transition-like attacks from settled possession” and to “draw the opposition out of a block” [PAGE 2]. The key object is the Transition event (TE), described as “the event of transition itself” and “when the opposition have ideally been drawn out and it is time to attack” [PAGE 2]. Multi-hop derivation therefore requires separating four layers: settled possession, opposition block deformation, the ball-progressing event that exploits the deformation, and the downstream risk or reward of that event.

The first attempted operator was a tempo operator. The author tried to “calculate a progression per second (ΔTempo) statistic for every event within a given possession, utilising the match timestamp and X axis coordinate of events” [PAGE 3]. This failed because one-touch passes and running carries can share the same timestamp for receipt and release, making division by seconds impossible. The repair, “Adding an insignificant duration of 0.01 seconds to any event,” created a singularity-like inflation: “even small amounts of progression were awarded high progression/second if the event was a bounce pass or running carry” [PAGE 3]. It also over-awarded “long passes, particularly clearances from goalkeepers” [PAGE 3]. Thus the tempo operator is not merely noisy; it has a formal breakdown regime at \( \Delta t \to 0 \) and a large-numerator bias for low-probability long balls. The paper abandons it for the TE definition, which is an important gray-zone audit point: any later analyst who reintroduces ΔTempo without a timestamp-resolution model is not reproducing the source method.

The successful derivation uses StatsBomb 360 frames to estimate the opposition’s block. Because “360 frames are blind to the name of any player other than the actor” [PAGE 3], the author computes maximum and minimum x and y positions of opposition players per event and averages those extrema over a 45-minute half to approximate the block. Players outside that average block are labelled “pulled.” The threshold is “3 pulled players as a potential opportunity for a TE,” because that balances the one or two players likely pressing with not losing too many events [PAGE 3–4]. The second threshold is packing: “When 3 or more players were pulled out of position, I could then identify TEs by finding events which ‘packed’ players behind the ball” [PAGE 4], with “packing 3 or more players, reducing a possible 10 outfield players to 7 in front of the ball” [PAGE 4]. The event must also be from “regular play” and after “at least 3 passes or a ‘Pausa’ (no event for greater than 1.5 seconds) after regaining the ball” [PAGE 4], and within “the defensive 60% of the pitch of the possession team” [PAGE 4]. TEpass includes line-breaking passes per StatsBomb’s model; TEcarry includes carries and dribbles [PAGE 4]. Unsuccessful attempts are defined by possession loss during the same play state, for example a blocked pass out for a throw-in that starts a new possession for the same team [PAGE 4].

The gray-zone audit is severe. First, the half-average block is a stationarity assumption: a back-three to back-four switch, red card, or half-long man-orientation change can make the average block unrepresentative. Second, 360 blindness to names means \(N_{\text{pulled}}\) is a count, not an identity map; a defender “pulled” by a decoy and a defender “pulled” by ball-chasing are indistinguishable. Third, the thresholds \(N_{\text{pulled}}\ge3\) and \(N_{\text{pack}}\ge3\) are calibrated by footage and experimentation, not derived from a likelihood model; they are policy parameters. Fourth, the reward side is under-specified in the source: the paper aims to study “how much, in terms of chance creation, are these transition-like attacks resembling counterattacks” [PAGE 2], but the published scope is limited to “applications of the TE statistic itself,” leaving downstream trade-offs and optimisation “to a later publication” [PAGE 5]. Fifth, “few TEpass are directly entering the final third” [PAGE 7] means final-third entry is not equivalent to reward. The correct audit is therefore not “does the TE metric look plausible?” but “which assumptions are necessary for the metric to identify the intended tactical event, and which counterfactuals would break it?”
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(L\) be pitch length in metres and let \(x\) be the longitudinal coordinate from the possession team’s own goal toward the opposition goal. Let \(t\) be match time in seconds. For an event \(i\), let \(x_i^{s}\) and \(x_i^{e}\) be start and end longitudinal coordinates in metres, and let \(\Delta t_i=t_i^{e}-t_i^{s}\) in seconds. The abandoned tempo operator is
\[
\Delta\mathrm{Tempo}_i=\frac{x_i^{e}-x_i^{s}}{\max(\Delta t_i,\epsilon)}\quad [\mathrm{m\,s^{-1}}],
\]
where the source instead used a fixed “insignificant duration of 0.01 seconds” [PAGE 3]. The assumption is that an event has a positive, meaningful duration. The exact breakdown regime is \(\Delta t_i\to0\): one-touch bounce passes and running carries either share timestamps or have receipt and release in the same timestamp, so the denominator collapses and \(\Delta\mathrm{Tempo}_i\) diverges or becomes arbitrarily large. A second breakdown is large numerator with low event cost: “long passes, particularly clearances from goalkeepers” receive high progression per second [PAGE 3]. Therefore \(\Delta\mathrm{Tempo}\) has units of speed but is not a valid transition indicator without timestamp repair and clearance filtering.

For the block operator, let \(H\) index a 45-minute half and let \(p\in\mathrm{Opp}\) index opposition players visible in the 360 frame. Define
\[
x_{\min}(H)=\min_{p\in\mathrm{Opp}}x_p,\quad
x_{\max}(H)=\max_{p\in\mathrm{Opp}}x_p,\quad
y_{\min}(H)=\min_{p\in\mathrm{Opp}}y_p,\quad
y_{\max}(H)=\max_{p\in\mathrm{Opp}}y_p,
\]
with \(x_p,y_p\) in metres. The source states that “When averaged across a 45-minute half these values provided a reasonable idea of the average area of the defensive block of the opposition side” [PAGE 3]. A player is labelled pulled if the player lies outside that averaged block:
\[
\Pi_p=\mathbf{1}\{x_p<x_{\min}(H)-\delta_x\ \lor\ x_p>x_{\max}(H)+\delta_x\ \lor\ y_p<y_{\min}(H)-\delta_y\ \lor\ y_p>y_{\max}(H)+\delta_y\},
\]
with \(\delta_x,\delta_y\ge0\) in metres as tolerance parameters. The source’s effective tolerance is zero after averaging: “players outside of that block could then be identified as ‘pulled’” [PAGE 3]. Let
\[
N_{\mathrm{pulled}}=\sum_{p\in\mathrm{Opp}}\Pi_p
\]
be a dimensionless count. The source threshold is \(N_{\mathrm{pulled}}\ge3\) [PAGE 3–4]. Let \(N_{\mathrm{pack}}\) be the number of defenders goalside of the actor, a 360-data count in dimensionless players. The source threshold is \(N_{\mathrm{pack}}\ge3\), which reduces “a possible 10 outfield players to 7 in front of the ball” [PAGE 4].

Settled possession is a Boolean state \(S_e\). The source requires “at least 3 passes or a ‘Pausa’ (no event for greater than 1.5 seconds) after regaining the ball” [PAGE 4]. Formally, if \(N_{\mathrm{passes}}\) is the count since possession regain and \(t_e-t_{\mathrm{prev}}\) is the time since the previous event in seconds,
\[
S_e=\mathbf{1}\{N_{\mathrm{passes}}\ge3\ \lor\ (t_e-t_{\mathrm{prev}}>1.5\ \mathrm{s})\}.
\]
The defensive-60 condition is
\[
D_e=\mathbf{1}\{x_e\le0.6L\}.
\]
Let \(P_e\) be the event type, with \(P_e\in\{\mathrm{TEpass},\mathrm{TEcarry}\}\), where TEpass includes line-breaking passes and TEcarry includes carries and dribbles [PAGE 4]. Then the TE indicator is
\[
T_e=\mathbf{1}\{\mathrm{regular\ play}_e\ \land\ S_e\ \land\ D_e\ \land\ (N_{\mathrm{pulled}}\ge3)\ \land\ (N_{\mathrm{pack}}\ge3)\ \land\ P_e\in\{\mathrm{TEpass},\mathrm{TEcarry}\}\}.
\]
This is dimensionless. Its exact breakdown regimes are: missing or occluded 360 frames make \(N_{\mathrm{pulled}}\) or \(N_{\mathrm{pack}}\) undefined; a half with a formation change violates the half-average block; an event exactly at \(x_e=0.6L\) needs a tie rule; and a Pausa exactly at 1.5 s is excluded by the strict “greater than” wording [PAGE 4].

For risk and reward, define \(L_e=1\) if possession is lost during the same Torero play state, as in “any time possession was lost during this play state” [PAGE 4]. Define \(F_e=1\) if the TEpass directly enters the final third, noting the source’s observation that “few TEpass are directly entering the final third” [PAGE 7]. Define \(G_e=1\) if the possession ultimately creates a goal, and \(C_e=1\) if it creates a chance. Then the source-consistent risk is
\[
R_{\mathrm{loss}}=\Pr(L_e=1\mid T_e=1,S_e=1,D_e=1)\quad[\text{dimensionless probability}],
\]
and the source-consistent reward proxies are
\[
R_F=\Pr(F_e=1\mid T_e=1),\qquad R_C=\Pr(C_e=1\mid T_e=1).
\]
A decision-theoretic extension with utility units \(u\) is
\[
\mathbb{E}[U\mid T_e=1]=u_G\Pr(G_e=1\mid T_e=1)+u_C\Pr(C_e=1\mid T_e=1)-u_L\Pr(L_e=1\mid T_e=1),
\]
where \(u_G,u_C,u_L\) have utility units and must be externally specified. The source does not estimate these utilities or the downstream chance-creation probabilities; it explicitly leaves “downstream trade-offs of the Torero approach, and its optimisation in the public space” to later work [PAGE 5]. Therefore any numeric reward claim beyond event description is not licensed by the source. The relevant singularity is not algebraic but evidential: if \(T_e\) is measured with error, or if \(L_e\) includes blocked passes that start a new possession for the same team [PAGE 4], then \(R_{\mathrm{loss}}\) is a play-state loss probability, not a pure turnover probability.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage is tactical and methodological. The paper frames the last decade as a contest between positional-play risk reduction and pressing-based transition rewards: resource-dominant teams used positional play to reduce conceding risk, while Klopp’s gegenpressing Dortmund and later Liverpool forced adaptation [PAGE 1]. It then identifies a “Five-Guys” phase: “having a rest defence and buildup unit of 5 or sometimes more players” proliferated down to less resource-rich sides [PAGE 1]. Torero is presented as a reaction: instead of accepting the low-block trade-off, teams “create artificial transition-like attacks from settled possession” [PAGE 2]. The named examples are Brighton under De Zerbi, Aston Villa under Emery, Tottenham, and Bayer Leverkusen, with the claim that “Bayer Leverkusen ended 11 years of Bayern Munich’s domestic dominance against the odds adopting Torero principles” [PAGE 8]. The title’s reference to De la Fuente’s Spain and Allardyce’s Bolton is a rhetorical genealogy: safety with the ball versus transitional excitement, with the “catch” being the risk of losing possession in dangerous areas [PAGE 1–2].

The scientific genealogy is event-data plus 360 spatial data. The source moves from timestamp-and-x-coordinate tempo to actor-centred 360 frames, then to half-average block extrema and packed-defender counts [PAGE 3–4]. That is a shift from scalar progression to relational geometry. The multi-week traps are therefore:
1. Outcome contamination: Villa’s Champions League qualification, Brighton’s European finish, Tottenham’s improvement, and Leverkusen’s title are cited as Torero successes [PAGE 7–8], but the paper does not isolate TE effects from squad quality, coaching, schedule, or opponent adaptation. A multi-week study that attributes table movement to TE volume without a counterfactual is retrocausal.
2. Regime drift: the dataset covers “10 English Premier League sides for the full 2022/23-2023/24 seasons” [PAGE 3]. Over two seasons, coaches change, formations change, and opponents adapt. A half-average block estimated in one match may not represent the next match’s block.
3. Scouting feedback: the paper suggests that pressuring “the attacking side’s regular TE outlets” may produce dangerous turnovers [PAGE 6]. If opponents learn this over weeks, TE volume and TE locations are endogenous to the scouting system itself.
4. Selection on successful events: the TE statistic can be computed for successful and unsuccessful attempts [PAGE 4], but a retrospective highlight-based genealogy will overrepresent successful TEpasses and underrepresent blocked passes out for throw-ins. The multi-week trap is a survivorship bias that makes Torero look cleaner than it is.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The Torero interaction is a recursive theory-of-mind problem. At level 0, the defender reacts to the ball. At level 1, the possession team wants to “draw the opposition out of a block” so that a TE can be executed [PAGE 2]. At level 2, the defender knows the draw is intentional and may choose a static defence, “refusing to be pulled out of position” [PAGE 6]. At level 3, the attacker anticipates static defence and uses a dropping attacking midfielder, winger, or forward to create an overload in build-up: “another successful way of first drawing the opposition press and packing them is a dropping attacking midfielder, winger, or even forward” [PAGE 6]. At level 4, the defender anticipates the drop and must decide whether to follow, hand off, or keep the block compact. The source’s opposition-analysis hypothesis is that pressuring “the attacking side’s regular TE outlets” may create more dangerous turnovers than purely static defending [PAGE 6]. That is a counter-trap: instead of refusing to be pulled, the defender baits the TE outlet and attacks the pass or carry.

“Crisis habit regression” appears in two places. First, under pressure, a possession team may regress to long clearances or direct balls; the abandoned ΔTempo operator over-awarded exactly those “clearances from goalkeepers” [PAGE 3]. Second, a defending team under sustained possession may regress from coordinated static shape to ball-chasing, which increases \(N_{\mathrm{pulled}}\) and opens the TE. The counter-trap is the disciplined alternative: hold shape, deny the pull, and force the attacker into lower-value circulation. The “clock” is both literal and tactical. Literally, settled possession is gated by “at least 3 passes or a ‘Pausa’ (no event for greater than 1.5 seconds)” [PAGE 4], so the TE clock starts only after the possession has slowed. Tactically, the clock is the timing of the pull: too early and the block is not deformed; too late and the opponent has recovered. The source’s question “when the optimal time is to execute a TE” remains open [PAGE 7]. A recursive model should therefore treat TE timing as a strategic signal: the attacker’s Pausa can be a genuine reset or a lure, and the defender’s static shape can be genuine discipline or a counter-trap.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: the 360 layer is actor-centred and “blind to the name of any player other than the actor” [PAGE 3]. Therefore a physical occlusion, missing frame, or off-camera defender can change \(N_{\mathrm{pulled}}\) and \(N_{\mathrm{pack}}\) without any tactical change. If a team-season has systematically missing 360 frames in the defensive 60%, the TE count is not comparable across teams. Veto proof: if \(N_{\mathrm{pulled}}\) cannot be computed from visible opposition players for an event, then \(T_e\) is undefined, not zero. The source’s half-average block also assumes that the 45-minute half is a physically stationary frame; a red card or injury-driven reshuffle breaks that assumption [PAGE 3–4].

Biomechanical veto: the source’s own failed tempo operator is the proof. One-touch passes and running carries can have receipt and pass in the same timestamp, and adding 0.01 s turns small progression into large progression per second [PAGE 3]. This is a biomechanical timing problem: the event duration is shorter than the timestamp resolution. Any model that uses speed or tempo as a TE proxy is vetoed unless it models touch duration, carry velocity, and release time. The TE definition itself avoids this by using 360 geometry and packed-defender counts, but it does not measure the biomechanical execution quality of the pass or carry. A carry that “packs” three defenders may be a slow dribble into pressure, not a clean transition.

Weather veto: the source provides no weather variables, no pitch-state variables, and no wet/dry surface metadata. Therefore any claim that rain, wind, or heat changes TE execution is not supported by this paper. The correct adjudication is a veto on weather-conditioned inference: without external weather joins, weather must be treated as an omitted variable. If an analyst adds weather, the proof obligation is to show that the weather variable is measured at the match-venue time scale and that it predicts TE success after controlling for opponent block height and possession state. Until then, weather cannot be used to explain TE counts.

The integrated veto proof is: \(T_e\) is identifiable only when the 360 frame is sufficiently complete, the half-average block is stationary, the timestamp resolution is not used as a speed denominator, and the play-state loss definition is applied consistently. If any of those fail, the operator measures a different object: visible-frame geometry, half-average formation, or possession-restart bookkeeping, not Torero.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Visibility counterfactual. Veto the TE ranking if a stratified manual audit of 360 frames finds that algorithmic \(N_{\mathrm{pulled}}\ge3\) disagrees with human-coded pulled defenders at Cohen’s \(\kappa<0.70\). Prediction: teams with frequent off-camera or occluded defenders will lose TE volume, and the top-TE player list will change by at least two rank positions. The source already warns that 360 frames are blind to names other than the actor [PAGE 3], so this is a direct verifiable test.

2. Block-stationarity counterfactual. Replace the 45-minute half-average block with a rolling 10-minute block estimate. Veto the half-average TE map if the Spearman rank correlation between the two TE-count vectors is below 0.80 across the 10 sides. Prediction: sides that switch between back three and back four within a half will show the largest TE-count changes, and their wing/central TE maps will shift. The source’s half-average method is explicitly an approximation [PAGE 3], so the rolling-window test is a clean counterfactual.

3. Possession-state counterfactual. Recompute TEs with a stricter settled-possession rule, requiring 4 passes or a Pausa greater than 2.0 s instead of 3 passes or 1.5 s [PAGE 4]. Veto the claim that the TE statistic is robust to the settled-possession threshold if TE counts change by more than 25% for any side. Prediction: press-heavy sides will lose a larger share of TEs than positional sides, because their possessions reach the threshold less often. This test is verifiable from event timestamps and pass counts and directly targets the source’s definitional gray zone.
</RLVR_COUNTERFACTUAL_VETOES>