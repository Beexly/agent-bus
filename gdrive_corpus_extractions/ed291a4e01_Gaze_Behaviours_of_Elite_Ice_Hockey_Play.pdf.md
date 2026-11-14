---
source: "Gaze_Behaviours_of_Elite_Ice_Hockey_Play.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3215
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided research paper about gaze behaviors of elite ice hockey players. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive response. Let me structure it carefully.

Key content from source:
- Paper: Vickers & Martell (2001) "Gaze Behaviours of Elite Ice Hockey Players: A Pilot Study" International Journal of Sports Vision, 7, 30-39.
- 9 pages provided.
- VIA system, ASL 501 eye tracker, 30 Hz (33.33 ms/frame), accuracy 2 deg visual angle, precision 1 deg, weight 700 g [PAGE 4].
- Participants: E (expert, plus-minus +6) and NE (near-expert, minus 5) Team Canada male ice hockey players [PAGE 3].
- Protocol: defensive plays (contain play), phases PR, SA, DM. Eyes closed at center ice, whistle, puck shot, second whistle at blue line to open eyes and defend. Third whistle ends. No shots on goal [PAGE 4].
- 15 total trials (5 per play, 3 plays random order), no fatigue problems [PAGE 4].
- F/T defined as stable gaze min 99.9 ms (3+ frames at 30 Hz) [PAGE 5].
- Normalization to relative time (%) [PAGE 5].
- Results:
  - PR phase: both similar ~722.95 ms [PAGE 6].
  - SA phase: both avg 5204.22 ms [PAGE 6].
  - DM phase: avg 1562.45 ms [PAGE 6].
  - PR frequency did not differ by skill/outcome, both avg one F/T [PAGE 6].
  - SA phase: NE higher frequency (9 F/T) vs E (6 F/T) [PAGE 6].
  - F/T durations longer for E than NE [PAGE 6].
  - Durations shorter at beginning of SA than end for both [PAGE 6].
  - E allocated more time to each location: longest on O-D combo, then open space, offensive opponents, defensive teammates, least 'other' [PAGE 6].
  - NE same locations but shorter durations [PAGE 6].
  - Neither fixated puck; monitored via peripheral/ambient system [PAGE 6].
  - Discussion: 2 on 3 evolved to 1 on 1. Far distance = wider field of view = higher frequency lower duration. Near distance = lower frequency higher duration [PAGE 6-7].
  - Conclusions: economy of F/T defines expertise. E more economical: fewer F/T longer duration [PAGE 8].
  - QE equivalent in open sports located much earlier than closed skills [PAGE 8].

Now I need to write the sections. Important: no betting lines. No toy equations. Formal LaTeX only. Exact page citations. Verbatim quotes where appropriate.

Word count >= 1,000 across sections, with THINK_TRACE >= 400 words.

Let me draft.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I'll discuss the logic chain from visual search literature to the specific hockey findings, the gray zones (pilot study n=2, plus-minus as selection criterion, relative duration normalization collapsing absolute timing, F/T conflation of fixation and tracking, peripheral monitoring of puck, generalizability from controlled trials to live games, etc.).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define F/T detection criterion: $t_{\min} = 99.9\,\mathrm{ms} \approx 3 \times 33.33\,\mathrm{ms}$. Define relative duration $\rho_{ij} = \frac{\Delta t_{F/T,ij}}{T_{\mathrm{phase},j}} \times 100\%$. Phase durations: $T_{\mathrm{PR}} = 722.95\,\mathrm{ms}$, $T_{\mathrm{SA}} = 5204.22\,\mathrm{ms}$, $T_{\mathrm{DM}} = 1562.45\,\mathrm{ms}$ [PAGE 6]. Frequency counts: $N_{\mathrm{F/T},E}^{\mathrm{SA}} = 6$, $N_{\mathrm{F/T},NE}^{\mathrm{SA}} = 9$ [PAGE 6]. VIA specs: $f_s = 30\,\mathrm{Hz}$, $\Delta t = 33.33\,\mathrm{ms}$, accuracy $2^\circ$ visual angle, precision $1^\circ$, mass $700\,\mathrm{g}$ [PAGE 4]. Cite pages.

RETROCAUSAL_GENEALOGY: Historical lineage: Carpenter (1988) minimum duration; Vickers (1996) VIA and quiet eye; Helsen & Pauwels (1992) soccer; Williams et al (1994, 1998, 1999); Abernethy & Russell (1987); Rodrigues et al (2002). Multi-week traps: fatigue not encountered in 15 trials [PAGE 4] but multi-week tournament fatigue could alter plus-minus selection; learning effects across randomized plays; selection bias via plus-minus statistic which is team-dependent [PAGE 3].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it in context. Crisis habit regression: under pressure, NE reverts to high-frequency short-duration scanning (ballistic, motor-driven). Counter-trap: E maintains economical low-frequency long-duration F/T even as distance closes (1 on 1). Clock: phase timing (PR 723 ms, SA 5204 ms, DM 1562 ms) creates a temporal deadline; the third whistle ends trial [PAGE 4]. Discuss how expertise is the ability to hold gaze (perceptually "hold" opponents) under temporal compression.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: helmet-mounted 700 g VIA system, 30 m cord, near-normal mobility but potential neck load [PAGE 4]. Biomechanical: skating at game speed, monocular corneal reflection, accuracy $2^\circ$ visual angle limits resolution at distance [PAGE 4]. Weather: indoor Olympic Oval rink, controlled, no weather variance, but ice temperature/resurfacing not reported; no shots on goal removes goalie biomechanics [PAGE 4]. Veto: if helmet mass > threshold or cord tugs, gaze data invalid; if monocular tracking fails during rapid head saccades, F/T misclassified.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll treat as counterfactual veto scenarios that are verifiable.
1. Veto: If phase duration $T_{\mathrm{SA}}$ is not normalized but absolute, does the E vs NE duration difference persist? Prediction: With absolute ms, E still shows longer mean F/T because raw data supports it; but relative % may exaggerate if NE phases are shorter. However source says SA did not differ [PAGE 6], so normalization is not driving the main effect.
2. Veto: If puck fixation is required (forced central vision), performance should degrade because elite players use peripheral/ambient monitoring [PAGE 6]. Prediction: forcing foveal puck tracking increases DM errors.
3. Veto: If the trial begins with eyes open (no PR eyes-closed period), the high-frequency far-field scanning phase may be skipped or compressed, altering F/T sequence [PAGE 4]. Prediction: E advantage diminishes because the PR phase sets up the economical scan; removing it removes the distance-dependent frequency modulation.

Need to ensure total words >= 1000. THINK_TRACE >= 400. I'll aim for roughly 1500-2000 words total to be safe.

Let me write carefully with exact page markers and verbatim quotes.

Verbatim quotes to use:
- [PAGE 4]: "Time was recorded at 30 frames per second, or 33.33 ms per frame, simultaneously in the three images."
- [PAGE 4]: "The VIA system has an accuracy of 2 degrees of visual angle, precision of 1 degree, and an output frequency of 30 Hz (33.33 ms per frame)."
- [PAGE 5]: "F/T gaze were defined using minimum duration parameters from the eye movement literature (Carpenter, 1988) and occurred when the gaze was stable on a location, object, player or players for a minimum of 99.9 ms (3 or more frames)."
- [PAGE 6]: "E and NE were similar in the time needed to identify the play averaging 722.95 ms."
- [PAGE 6]: "E and NE did not differ in the SA phase, averaging 5204.22 ms of skating over half the length of the ice."
- [PAGE 6]: "The DM phase averaged 1562.45 ms and was similar for E and NE."
- [PAGE 6]: "The NE player had a higher frequency of F/T than the E, using nine F/T gaze compared to six for the E."
- [PAGE 6]: "Neither player fixated the puck during any of the trials, indicating both players monitored the movement of the puck using their peripheral or ambient system."
- [PAGE 8]: "The results also showed that the gaze of the E athlete is more efficient and economical than the NE with fewer F/T directed to critical locations for longer relative durations."
- [PAGE 8]: "the equivalent of QE in open sports appears to be located much earlier in the team sports than what occurs in closed sport setting."
- [PAGE 3]: "The E player had a plus-minus score of plus six ... while the NE had a plus-minus score of minus five..."

No betting lines. Check: no mention of spreads, totals, moneylines, odds. Good.

No toy equations: I will only use formal definitions grounded in the text: sampling period, relative duration normalization, F/T minimum duration. No invented ratios like Force/Fatigue.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper by Vickers & Martell (2001) presents a pilot study of two Team Canada male ice hockey players—one expert (E, plus-minus +6) and one near-expert (NE, minus 5)—performing defensive "contain" plays on ice while wearing the Vision-in-Action (VIA) system. The core multi-hop derivation proceeds as follows. First, the literature conflict is whether elite athletes use high-frequency/low-duration fixation/tracking (F/T) or low-frequency/high-duration F/T. Second, the study resolves this by showing both regimes occur within a single play, gated by tactical geometry: when opponents are far (2 on 3), the athlete scans a wide field of view, producing high F/T frequency and low relative duration; as the play collapses to 1 on 1 and distance decreases, frequency drops and duration rises. Third, expertise is indexed not by phase duration—PR, SA, and DM means are statistically similar between E and NE (722.95 ms, 5204.22 ms, and 1562.45 ms respectively, [PAGE 6])—but by F/T economy: E uses six F/T gazes versus NE’s nine in the SA phase, with longer relative duration per location, prioritizing offensive-defensive combinations (O-D combo) and open space ([PAGE 6], [PAGE 7]).

Gray-zone audit. (1) N = 2 makes the expertise contrast a case study rather than a population inference; plus-minus is a team-embedded statistic contaminated by line-mates and goaltending, so the E/NE label may conflate individual defensive skill with systemic outcomes ([PAGE 3]). (2) The study explicitly conflates fixation and tracking gaze into a single F/T class because of ice hockey’s dynamic nature ([PAGE 5]), which prevents dissociating foveal lock-on from smooth pursuit and may obscure different cognitive computations. (3) All absolute durations are normalized to relative phase percentages ([PAGE 5]); because SA phase duration did not differ by skill ([PAGE 6]), this normalization does not appear to drive the main frequency/duration interaction, but it removes cross-trial temporal scaling information that could matter in fatigue or late-game contexts. (4) Neither player fixated the puck, relying instead on peripheral/ambient monitoring ([PAGE 6]); this implies the oculomotor strategy is not object-centric on the puck but relation-centric on player configurations, a boundary condition that may break down if puck velocity or occlusion changes. (5) The protocol used eyes-closed pattern recognition with a whistle-triggered start ([PAGE 4]), which eliminates anticipatory gaze but also eliminates the natural pre-whistle visual scanning that occurs in live games; thus the measured PR phase (722.95 ms) is a reaction-time-bound construct, not an ecological pre-play scan. (6) No fatigue was encountered across 15 trials ([PAGE 4]), but a multi-week tournament introduces cumulative fatigue, visual-cognitive load, and plus-minus volatility that the pilot cannot capture. These gray zones define the singularity/breakdown regimes: the findings hold for controlled, short-duration, eyes-closed-initiated defensive contain plays in an indoor rink with monocular VIA recording at 30 Hz; they do not automatically extend to power-play complexity, line-change fatigue, outdoor lighting, or binocular free gaze.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(i \in \{E, NE\}\) denote player skill class and \(j \in \{ \mathrm{PR}, \mathrm{SA}, \mathrm{DM} \}\) denote phase. The VIA system samples at \(f_s = 30\,\mathrm{Hz}\), giving frame period \(\Delta t = 33.33\,\mathrm{ms}\) ([PAGE 4], [PAGE 5]). The monocular corneal-reflection tracker reports eye-line-of-gaze relative to the helmet with accuracy \(2^\circ\) of visual angle and precision \(1^\circ\); helmet-plus-optics mass is \(700\,\mathrm{g}\), tethered by a \(30\,\mathrm{m}\) waist cord ([PAGE 4]).

Fixation/tracking (F/T) is defined operationally as gaze stable on a location, object, player, or players for a minimum duration
\[
t_{\min} = 99.9\,\mathrm{ms} \approx 3\,\Delta t \quad \text{(3 or more frames)}
\]
following Carpenter (1988), with no attempt to separate fixation from tracking because of the dynamic task ([PAGE 5]).

Because trial and phase duration vary, absolute measures are normalized to relative time:
\[
\rho_{ij} = \frac{\Delta t_{F/T,ij}}{T_{\mathrm{phase},j}} \times 100\,\%,
\]
where every trial onset maps to \(0\%\) and offset to \(100\%\) ([PAGE 5]; Schmidt & Lee, 1999). Reported mean phase durations ([PAGE 6]):
\[
\overline{T}_{\mathrm{PR}} = 722.95\,\mathrm{ms}, \qquad
\overline{T}_{\mathrm{SA}} = 5204.22\,\mathrm{ms}, \qquad
\overline{T}_{\mathrm{DM}} = 1562.45\,\mathrm{ms},
\]
with no significant E/NE difference in any phase ([PAGE 6]).

F/T counts in the SA phase ([PAGE 6]):
\[
N_{F/T,\,E}^{\mathrm{SA}} = 6, \qquad N_{F/T,\,NE}^{\mathrm{SA}} = 9,
\]
so the NE player uses \(50\%\) more F/T events than the expert. Expert F/T durations are longer per location; location hierarchy for E on plus plays: O-D combo \(>\) open space \(>\) offensive opponents \(>\) defensive teammates \(>\) other ([PAGE 6]). Puck fixation count \(= 0\) for both players ([PAGE 6]); puck is monitored via peripheral/ambient vision ([PAGE 6]).

Breakdown/singularity conditions: (i) If gaze stability falls below \(99.9\,\mathrm{ms}\), the event is not coded as F/T, producing right-censoring of short saccadic glances; (ii) if head movement exceeds the tracker’s corneal-reflection capture range, data are coded “other” ([PAGE 5]); (iii) accuracy of \(2^\circ\) visual angle limits discrimination of closely spaced opponents at distance, which is precisely when the high-frequency wide-field regime is engaged ([PAGE 4], [PAGE 6]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The experimental lineage traces from Carpenter (1988) minimum-duration eye-movement criteria ([PAGE 5]) through Vickers’ (1996) Vision-in-Action system and the quiet-eye construct in closed skills (basketball free throw, billiards, darts, rifle shooting; [PAGE 2]), then into open-skill tactical settings via Vickers & Adolphe (1997) volleyball reception, Rodrigues et al (2002) table tennis, and soccer work by Helsen & Pauwels (1992) and Williams et al (1994, 1998, 1999) ([PAGE 2], [PAGE 8]). Helsen & Pauwels found elite soccer shooters use low fixation frequency with long duration ([PAGE 2]); Williams et al found context-dependent search rates across 1 on 1, 3 on 3, and 11 on 11 soccer ([PAGE 2]). The present study generalizes this to ice hockey by embedding the VIA system on ice at the Olympic Oval rink ([PAGE 4]) and showing that the same far-to-near compression—2 on 3 evolving to 1 on 1—produces the frequency/duration inversion within one athlete ([PAGE 6], [PAGE 7]).

Multi-week traps. Plus-minus selection was drawn from “a recent international tournament” ([PAGE 3]); over a multi-week tournament, plus-minus drifts with line deployment, opponent strength, and goaltending variance, so the E/NE classification may not be stable across weeks. The protocol randomized three defensive plays with five trials each and explicitly encountered “no problems with fatigue” ([PAGE 4]), but 15 trials over a single session does not capture cumulative visual-cognitive fatigue across a multi-game week, which would likely degrade F/T economy first in the NE player and shift him toward even higher-frequency, shorter-duration scanning. The claim that “the equivalent of QE in open sports appears to be located much earlier in the team sports than what occurs in closed sport setting” ([PAGE 8]) depends on the follow-up Olympic-team study (Martell, 2002; Martell & Vickers, in progress; [PAGE 8]) and remains outside the pilot’s direct data.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under temporal compression in the SA-to-DM transition, the near-expert regresses to a ballistic, high-frequency search habit—nine F/T events of shorter duration—as if more samples compensate for uncertainty ([PAGE 6]). Counter-trap: the expert resists this regression by maintaining an economical low-frequency, long-duration F/T set (six events), perceptually “holding” opponents in gaze longer and prioritizing O-D combinations and open space ([PAGE 6], [PAGE 8]). The crisis clock is the phase timeline itself: PR must identify the play within roughly \(723\,\mathrm{ms}\), SA consumes \(5.2\,\mathrm{s}\) of skating over half the ice, and DM closes in \(1.56\,\mathrm{s}\), all terminated by a third whistle ([PAGE 4], [PAGE 6]). Because SA duration does not differ by skill ([PAGE 6]), the expert’s advantage is not speed of phase execution but gaze allocation within the fixed temporal envelope: fewer, longer fixations on higher-value locations reduce the number of saccadic re-acquisitions required as distance closes and the play becomes 1 on 1 ([PAGE 6], [PAGE 7]). The recursive theory of mind embedded here is that each player models the opponent’s intended trajectory; the expert’s longer F/T on O-D combos reflects a richer internal model of the offensive-defensive coupling, whereas the NE’s frequent short glances indicate model instability and reactive re-sampling. Breakdown occurs if the clock is shortened (shorter whistle interval) or if the far-field complexity increases beyond the wide-field scanning capacity, at which point even the expert may be forced into high-frequency/low-duration mode and lose the economy advantage.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the VIA helmet carries \(700\,\mathrm{g}\) of optics, illuminator, and visor, attached by a \(30\,\mathrm{m}\) cord to a waist unit ([PAGE 4]). During game-speed skating, cord tension or helmet shift can introduce head-relative gaze error beyond the stated \(1^\circ\) precision / \(2^\circ\) accuracy ([PAGE 4]); if the cord tugs during a lateral crossover, the recorded gaze vector rotates with the helmet rather than the world, producing a veto on F/T validity for that trial.

Biomechanical layer: the tracker is monocular and corneal-reflection based, measuring eye-line-of-gaze relative to the helmet ([PAGE 4]). Rapid head saccades during 1 on 1 defensive transitions can violate the corneal-reflection assumption or push gaze outside the scene-camera field, causing frames to fall into the uncodable “other” category ([PAGE 5]). No shots on goal were permitted ([PAGE 4]), so the biomechanics of shooting, goalie interference, and post-shot rebound are excluded; the gaze strategy measured here is purely defensive containment and may not generalize to offensive or transitional phases.

Weather/environmental layer: collection occurred on the indoor Olympic Oval ice hockey rink ([PAGE 4]), so outdoor lighting, wind, rink temperature variability, and ice-resurfacing cycles are controlled away. The absence of environmental variance is itself a veto boundary: the findings do not transfer to outdoor or poorly lit arenas where contrast and glare alter fixation duration.

Adjudication: a trial is vetoed if (a) helmet/cord artifact exceeds \(2^\circ\) visual angle, (b) monocular tracking is lost during a head saccade, or (c) environmental contrast falls below the tracker’s operational envelope. Under these constraints, the E/NE F/T economy difference remains valid only for controlled indoor defensive-contain plays with intact VIA calibration.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Normalization veto). Counterfactual: re-analyze F/T duration in absolute milliseconds instead of relative phase percent. Because SA phase duration did not differ between E and NE (\(5204.22\,\mathrm{ms}\) for both; [PAGE 6]), the normalization to relative percent is not the source of the E/NE duration gap. Verifiable prediction: absolute mean F/T duration per event remains longer for E than NE; veto is rejected if absolute analysis inverts the sign of the expertise effect.

Scenario 2 (Puck-foveation veto). Counterfactual: instruct participants to foveate the puck continuously rather than monitor it peripherally/ambiently ([PAGE 6] states neither player fixated the puck). Verifiable prediction: forced foveal puck tracking increases DM-phase errors and reduces time allocated to O-D combinations and open space; the expert’s economy advantage collapses because central-channel capacity is monopolized by the puck, degrading player-configuration sampling.

Scenario 3 (Eyes-open start veto). Counterfactual: remove the eyes-closed PR period and whistle-triggered eye opening ([PAGE 4]), allowing natural pre-play visual scanning. Verifiable prediction: the high-frequency, low-duration far-field scanning regime observed at SA onset is compressed or eliminated because the distance-dependent field-of-view scan no longer begins from a visual reset; the E/NE F/T frequency divergence in early SA is attenuated, and the expert’s relative advantage in the 1 on 1 endpoint is reduced.
</RLVR_COUNTERFACTUAL_VETOES>