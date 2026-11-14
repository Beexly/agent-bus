---
source: "2025 - A Fatigue Penalty Model for x G Conor Malone - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Hudl StatsBomb/Research Competitions/2025"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3652
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about "A Fatigue Penalty Model for xG" by Conor Malone. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided source text that spans pages 1-12 in the markdown, but says PAGES: 11. I need to cite exact [PAGE N] markers based on the provided source. Looking at the source text, I see page numbers embedded: **1**, **2**, **3**, **4**, **5**, **6**, **7**, **8**, **9**, **10**, **11**, **12**. The user says PAGES: 11, but the source shows 12 pages of content (pages 1-12). I should cite based on what's visible in the source text markers. Actually, looking carefully:
- Abstract ends with **1**
- Page **2**
- Page **3**
- Page **4**
- Page **5**
- Page **6**
- Page **7**
- Page **8**
- Page **9**
- Page **10**
- Page **11**
- Page **12** (References)

But the user specified PAGES: 11. I should probably cite [PAGE 1] through [PAGE 11] as available, but the source text clearly has **12** at the end. I'll cite the exact page markers visible in the text. Since the user said PAGES: 11 but provided 12 markers, I'll use the ones present. Actually, to be safe and accurate to the provided text, I'll reference the page numbers that appear in bold at the end of sections.

Important: No betting lines. This is about football (soccer) fatigue and xG. I must not mention betting odds, spreads, etc.

No toy equations. I must state formal LaTeX equations. The paper defines ACWR but the actual formula appears to be missing in the text (there's a blank where the equation should be). I need to note this breakdown/singularity. The formal definition would be:

ACWR = W_acute / W_chronic

Where W_acute is 1-week workload, W_chronic is 4-week workload. I can state this as the formal equation based on the text description, but I must be careful not to invent fake ratios. I can reconstruct the standard ACWR formula because the text describes it: "ratio between short-term (1-week) and long-term (4-week) distance-weighted running metrics". I should state it formally and note that the paper's typeset equation is missing/blank on [PAGE 7], which is a breakdown regime.

Units: distance in km, time in weeks, speed in km/h, metabolic power in W/kg (25.542 W/kg threshold for HMLD), ACWR dimensionless.

xG is in units of probability (0 to 1). Shot volume is count (shots per game). p-values dimensionless. R² dimensionless (coefficient of determination).

Now let's structure each section:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Need to trace derivations: how workload metrics -> composite -> ACWR -> team average -> shot volume/quality/conversion. Gray zones: missing equation on page 7, imputation for international fixtures (45 min assumption), cup matches proportional to minutes, omission of training load, 5-sub rule selection bias, aggregated team ACWR averaging starting outfield players only (ignores subs?), xG model assumptions not detailed, R²=0.12 means 88% variance unexplained, p=0.1 for xG one-week delay. Multi-hop: from GPS/computer vision data -> HMLD concept -> normalization 0-1 -> unweighted average -> ACWR bucket -> regression. Gray-zone audit: the composite is unweighted average of normalized distance and count variables, which mixes units and assumes equal importance; normalization to 0-1 across entire dataset makes ACWR relative to sample, not absolute physiological threshold; team-level averaging masks individual heterogeneity; shot-level physical metrics aggregated over 15-min, half, full match windows but ACWR uses 1/2/4-week rolling windows—temporal misalignment possible.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- ACWR equation: \text{ACWR} = \frac{W_{\text{acute}}}{W_{\text{chronic}}} = \frac{\frac{1}{7}\sum_{t \in \text{last 7 days}} w_t}{\frac{1}{28}\sum_{t \in \text{last 28 days}} w_t} (dimensionless). Note: paper's equation blank on [PAGE 7].
- Composite workload: \bar{w} = \frac{1}{N}\sum_{i=1}^{N} \frac{x_i - \min(x)}{\max(x) - \min(x)} for each component then unweighted average. Components: HSR distance, sprint distance, high-speed accel count, high-speed decel count. Units: km for distance, count for accelerations, normalized to [0,1].
- HMLD threshold: P_met > 25.542 W/kg [PAGE 6].
- Shot volume model: \Delta \text{Shots} \approx -1 \text{ shot/game per unit ACWR}, p < 0.001, R² = 0.12 [PAGE 9].
- Shot quality: p = 0.1, R² = 0.007 [PAGE 9].
- xG \in [0,1] probability units.
- Team fatigue index: \bar{\text{ACWR}}_{\text{team}} = \frac{1}{11}\sum_{j=1}^{11} \text{ACWR}_j for starting outfield players [PAGE 7].
- Singularity/breakdown: max(x) = min(x) in normalization causes division by zero; ACWR undefined if W_chronic = 0; imputation error for international fixtures; missing training load.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: IOC consensus Soligard et al. 2016 [PAGE 3, 12]; ACWR concept; Gabbett? (not cited but implied); Russell et al. 2011 [PAGE 3]; Teoldo et al. 2024 [PAGE 3]; Brink et al. 2010 [PAGE 3]; Hart et al. 2022 rugby [PAGE 3]; Osgnach et al. 2010 [PAGE 11, 12]; STATSports HMLD [PAGE 6, 12]; Young et al. 2019 hurling [PAGE 12].
- Multi-week traps: The 1-week vs 4-week window creates a rolling trap where fixture congestion inflates acute load; international fixtures imputed at 45 min regardless of actual exertion; cup matches proportional; 5-sub rule mitigates acute fatigue within match but not across weeks; the paper analyzes 2023/24–2024/25 seasons [PAGE 1], capturing post-pandemic congested schedules; Chelsea example Aug 2024–Jul 2025 [PAGE 2]. Multi-week trap: chronic load baseline lags actual fitness, so a 4-week window may under-represent recovery after injury or over-represent after light weeks.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When teams are fatigued, do they revert to habitual patterns (long balls, lower pressing)? The paper suggests fatigued teams less effective at winning ball back in advanced areas or sustaining possession [PAGE 9].
- Counter-trap: Managers anticipate fatigue and rotate/substitute, creating a counter-trap where the measured effect is attenuated because the most fatigued players aren't selected [PAGE 9, 10]. This is selection bias / healthy player effect.
- Clock: Match clock (15-min segments, half, full match) vs weekly clock (1/2/4 week ACWR) vs seasonal clock (Aug–Jul, 12 months Chelsea example [PAGE 2]). The recursion: fatigue accumulates across the seasonal clock, is managed by substitution clock within match, and measured by weekly ACWR. Mismatch between these clocks creates measurement error.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: HMLD > 25.542 W/kg [PAGE 6]; total distance ~10 km/match [PAGE 6]; speed zones 15-20, 20-25, >25 km/h [PAGE 5].
- Biomechanical layer: acceleration/deceleration counts without distances [PAGE 6]; shooting precision decline under fatigue (Russell et al. 2011 [PAGE 3]); tactical behavior changes (Teoldo et al. 2024 [PAGE 3]).
- Weather veto: Not explicitly in paper. I must be careful not to invent. I can say weather is not controlled for and acts as an unadjudicated veto layer because running profiles depend on match context (game state, scoreline) [PAGE 10], and weather could modulate metabolic load but is absent.
- Veto proof: The study does not control for tactical role, opposition style, game state [PAGE 10]. Thus physical layer is partially vetoed by context. Biomechanical layer vetoed by missing acceleration distances and unweighted normalization. Weather layer absent entirely (veto not testable).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or just verifiable scenarios. I'll interpret as verifiable counterfactual veto scenarios—situations where the model's predictions would be vetoed/falsified.
1. Scenario: Knockout fixture with extra time (beyond 90 min). Prediction: Fatigue penalty on shot volume should increase beyond -1 shot/game per ACWR unit because acute workload exceeds chronic baseline and recovery is impossible within match. Veto: If no increase in shot volume penalty is observed in extra-time games, the ACWR-shot volume link is not generalizable to extreme fatigue.
2. Scenario: Player with ACWR > 1.5 (IOC danger threshold) who is still selected to start. Prediction: Individual shot quality (mean xG) should decline significantly for that player. Veto: If no decline in individual xG is observed for ACWR > 1.5 starters, the individual-level null result holds and team effect is purely tactical.
3. Scenario: Match with zero substitutions used (or all 5 used early). Prediction: Teams using all 5 substitutions should show attenuated shot volume decline relative to ACWR compared to teams using fewer subs. Veto: If substitution count does not moderate the ACWR-shot volume relationship, the 5-sub mitigation hypothesis is false.

Need to ensure total word count >= 1,000 words across all sections. I'll aim for roughly 200-250 words per section to be safe, with THINK_TRACE being >=400 words.

Also, must not mention betting lines. I'll avoid any gambling terminology.

Must include exact [PAGE N] markers and verbatim quotes where applicable. I'll quote key phrases.

Let's draft carefully.

Word count check: I'll write generously.

THINK_TRACE (>=400 words):
I need to do deep multi-hop derivation. Start from raw tracking data -> speed zones -> counts/distances -> normalization -> composite workload -> acute/chronic windows -> ACWR -> team average -> shot-level aggregation -> regression outputs. Gray-zone audit: missing equation, normalization singularity, imputation assumptions, selection bias, R² interpretation, temporal misalignment between within-match windows and rolling weekly windows, omitted variable bias (training load, tactics, game state).

Let's write.

SOURCE_OPERATORS_AND_EQUATIONS: Include LaTeX.

RETROCAUSAL_GENEALOGY: Historical lineage.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression, counter-trap, clock.

CROSS_LAYER_VETO_ADJUDICATION: Physical, biomechanical, weather.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Need to be careful: The source text has page markers like **1**, **2** etc. I'll cite [PAGE 1], [PAGE 2], etc.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's causal chain begins with raw computer-vision tracking data (Wyscout) that captures locomotor activity across speed zones: high-speed running (20–25 km/h), sprinting (>25 km/h), running distance (15–20 km/h), maximum speed, and acceleration/deceleration counts [PAGE 5]. Because acceleration and deceleration distances are unavailable, the authors construct a composite workload metric by normalizing each contributing variable independently to a 0–1 scale and then taking an unweighted average [PAGE 7]. This is a multi-hop transformation: raw kinematic signals are compressed into dimensionless indices, which are then averaged without physiological weighting, producing a sample-relative workload score rather than an absolute metabolic cost. The next hop applies the Acute:Chronic Workload Ratio (ACWR), defined textually as the ratio of short-term (1-week) to long-term (4-week) workload [PAGE 1], though the typeset equation itself is absent from the manuscript [PAGE 7]. Team-level fatigue is then derived by averaging individual ACWR values across the 11 starting outfield players for each fixture [PAGE 7]. Finally, this team fatigue index is regressed against shot volume, mean shot expected goals (xG), and shot conversion, with shot-level physical metrics additionally aggregated over three within-match windows (15 minutes preceding the shot, current half to shot time, full match to shot time) [PAGE 5].

Several gray zones threaten internal validity. First, the min–max normalization \frac{x_i - \min(x)}{\max(x) - \min(x)} becomes undefined when \max(x) = \min(x), a singularity that can occur for players or matches with zero variation in a speed zone; the paper does not report how such cases were handled. Second, international fixtures are imputed at a fixed 45 minutes of "regular intensity" regardless of actual minutes played or exertion [PAGE 6], injecting structured noise into the chronic load denominator. Third, training load is omitted entirely [PAGE 10], meaning teams with high match congestion may compensate by reducing training intensity, attenuating the observable ACWR–performance relationship. Fourth, the five-substitution rule and squad rotation create a selection bias: extremely fatigued players are less likely to be fielded, so the sample is restricted to relatively managed workloads [PAGE 9–10]. Fifth, the reported R² = 0.12 for shot volume implies 88% of variance remains unexplained, and the xG relationship (p = 0.1, R² = 0.007) is statistically non-significant [PAGE 9], weakening the claim of a meaningful "fatigue penalty." Sixth, temporal misalignment exists between rolling weekly ACWR windows and within-match 15-minute physical aggregates; a player's acute weekly load may not reflect their instantaneous metabolic state at the moment of shooting. Finally, contextual variables—tactical role, opposition style, game state, scoreline—are not controlled [PAGE 10], so running profiles may reflect strategy rather than fatigue. These gray zones collectively suggest the observed net effect is conservative and likely biased toward null.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

Composite workload normalization (dimensionless):
\[
z_i = \frac{x_i - \min(x)}{\max(x) - \min(x)}, \qquad z_i \in [0,1]
\]
where \(x_i\) is a raw metric (HSR distance in km, sprint distance in km, high-speed acceleration count, high-speed deceleration count) [PAGE 7]. The final composite workload score is the unweighted mean of the normalized components [PAGE 7].

High Metabolic Load Distance (HMLD) threshold [PAGE 6]:
\[
P_{\text{met}} > 25.542 \ \text{W/kg}
\]
This is the metabolic power threshold above which distance is classified as HMLD; SI unit is watts per kilogram.

Acute:Chronic Workload Ratio [PAGE 7]:
\[
\text{ACWR} = \frac{W_{\text{acute}}}{W_{\text{chronic}}}
= \frac{\frac{1}{7}\sum_{t \in \text{last 7 days}} w_t}{\frac{1}{28}\sum_{t \in \text{last 28 days}} w_t}
\]
Dimensionless ratio. \(W_{\text{acute}}\) is the 1-week workload; \(W_{\text{chronic}}\) is the 4-week workload. Values > 1.0 indicate acute load exceeding chronic baseline [PAGE 7]. Breakdown/singularity: if \(W_{\text{chronic}} = 0\) (no recorded workload history), ACWR is undefined; the paper's typeset equation is missing from the manuscript [PAGE 7].

Team-level fatigue index [PAGE 7]:
\[
\overline{\text{ACWR}}_{\text{team}} = \frac{1}{11}\sum_{j=1}^{11} \text{ACWR}_{j}
\]
averaged across starting outfield players only; substitutes are excluded.

Regression outputs [PAGE 9]:
\[
\Delta \text{Shot Volume} \approx -1 \ \text{shot per game per unit ACWR}, \quad p < 0.001, \ R^2 = 0.12
\]
\[
\text{Shot Quality (mean xG)}: \quad p = 0.1, \ R^2 = 0.007
\]
where xG \in [0,1] is a probability in units of expected goals per shot. Shot volume is a count (shots per 90-minute match). No significant association was found for shooting-player-level volume, quality, or conversion [PAGE 1].

Units summary: distance (km), speed (km/h), time (minutes, weeks), metabolic power (W/kg), ACWR (dimensionless), xG (probability), shot volume (count per match).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage traces to the IOC consensus statement on load in sport (Soligard et al., 2016), which defines load as the total "sport and non-sport burden" and links maladaptation to reduced "capacity to accept load" [PAGE 3, 12]. The ACWR framework operationalizes this by positing that risk spikes when short-term load rapidly exceeds chronic preparedness, particularly above 1.5 [PAGE 3]. Empirical precursors include Russell et al. (2011), demonstrating that soccer-specific fatigue reduces shooting precision and passing speed in late match stages [PAGE 3]; Teoldo et al. (2024), showing acute fatigue alters tactical behavior and reduces high-intensity actions near the ball [PAGE 3]; and Brink et al. (2010), connecting psychosocial stress and poor recovery to illness in elite youth players [PAGE 3]. Hart et al. (2022) in rugby provides a methodological benchmark, translating an ~11.5% reduction in sprint velocity into one fewer tackle break per game [PAGE 3]. The metabolic foundation draws on Osgnach et al. (2010) for energy cost and match analysis [PAGE 11, 12], STATSports' HMLD definition at 25.542 W/kg [PAGE 6, 12], and Young et al. (2019) on metabolic power in hurling [PAGE 12].

Multi-week traps are central to the study's design. The 1-week acute window is highly sensitive to fixture congestion: a midweek cup match followed by a weekend league fixture inflates \(W_{\text{acute}}\) relative to the 4-week chronic baseline, potentially pushing ACWR into overload territory without a corresponding drop in fitness [PAGE 7]. The chronic 4-week window lags behind real-time physiological state; a player returning from injury may have a deceptively low chronic load while still being match-fit, or a player coming off a light month may have a low baseline that exaggerates ACWR after a single congested week. International fixtures are imputed at 45 minutes regardless of actual exertion [PAGE 6], which distorts the chronic denominator for players with heavy national-team duties. The seasonal clock compounds this: Chelsea's 2024/25 campaign ran from 18 August 2024 to the FIFA Club World Cup Final on 13 July 2025, nearly twelve consecutive months, with the first 25/26 preseason game just three weeks later on 8 August [PAGE 2]. This leaves minimal recovery between seasonal clocks, meaning the chronic baseline is itself elevated across the entire observation window (2023/24–2024/25) [PAGE 1]. The ACWR may therefore detect deviations from an already fatigued baseline rather than true acute overload, attenuating the measurable fatigue penalty.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under fatigue, teams may regress to habitual, lower-intensity tactical patterns rather than optimizing shot creation. The authors suggest a fatigued team may be "less effective at winning the ball back in advanced areas or sustaining possession to create shooting angles," indirectly reducing shot volume [PAGE 9]. This is a regression to default structures—deeper defensive blocks, fewer overlapping runs, less final-third pressing—when cognitive-physical resources are depleted, consistent with the two-channel model (cognitive-physical degradation of technique and tactical-channel breakdown of pressing/overlaps) [PAGE 4].

Counter-trap: Managers anticipate fatigue and deploy countermeasures that mask the effect. The five-substitution rule allows dynamic in-game load offset [PAGE 9–10], while rolling squad rotation prevents extremely fatigued players from starting [PAGE 10]. This creates a "healthy player" selection bias: the sample is conditioned on players being fit enough to play, so the right tail of the fatigue distribution is truncated. The counter-trap is recursive: because load management works, the observed effect size is small; because the effect is small, the value of load management is reinforced. The absence of individual-level effects (H1 and H2 not supported at player level) supports this—shooters' technique is preserved because the most fatigued shooters are not selected [PAGE 9].

Clock: Three nested temporal clocks operate simultaneously. (1) The match clock: within-game physical metrics are aggregated over 15-minute segments, halves, and full match [PAGE 5]. (2) The weekly clock: ACWR uses 1-week and 4-week rolling windows [PAGE 7]. (3) The seasonal clock: the 2023/24–2024/25 observation window and the near year-round Chelsea example [PAGE 1–2]. Mismatches among these clocks generate measurement error. A player can have a low weekly ACWR (managed load) but be acutely fatigued in the 75th minute of a match (match clock), or vice versa. The study links weekly ACWR to shot-level outcomes without explicitly bridging the intra-match temporal resolution, meaning the fatigue measure may not align with the physiological state at the moment of shooting. The recursion closes when match-level fatigue influences substitution decisions (clock intervention), which then alters the next week's acute workload, feeding back into ACWR.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The paper relies on locomotor metrics—total distance (~10 km per match for outfield players) [PAGE 6], HSR distance (20–25 km/h), sprint distance (>25 km/h), and maximum speed [PAGE 5]—informed by the HMLD concept (metabolic power > 25.542 W/kg) [PAGE 6]. However, the dataset lacks acceleration/deceleration distances, so counts are substituted [PAGE 6]. Contextual factors such as tactical role, opposition style, and match context (game state, scoreline) influence running profiles independently of fatigue and are not controlled [PAGE 10]. A possession-dominant team or a team defending deep may record lower high-intensity distance without lower fatigue, creating a false negative. Verdict: physical layer is partially vetoed by unmeasured tactical context.

Biomechanical layer: Shooting precision and passing speed decline under match-simulation fatigue (Russell et al., 2011) [PAGE 3], and acute fatigue alters tactical behavior near the ball (Teoldo et al., 2024) [PAGE 3]. Yet the study finds no significant individual-level relationship between shooter ACWR and shot quality or conversion [PAGE 9]. This suggests biomechanical degradation is either mitigated by elite technical resilience under fatigue [PAGE 10] or masked by selection bias (fatigued shooters not fielded). Verdict: biomechanical layer is vetoed at the individual level by selection and substitution effects; team-level volume effect may be tactical rather than biomechanical.

Weather layer: The source text does not mention weather, temperature, humidity, or pitch conditions as variables [PAGES 1–12]. Because metabolic load and running intensity are modulated by ambient conditions, the absence of weather controls leaves an unadjudicated veto: hot or humid conditions could elevate HMLD for the same kinematic output, confounding the workload–fatigue mapping. No weather-based robustness check is reported. Verdict: weather layer is entirely absent; cannot be vetoed or confirmed from this source.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Extra-time knockout fixture. Construct a counterfactual sample of knockout matches exceeding 90 minutes (extra time), where acute workload cannot be mitigated by substitutions within the same match. Prediction: The shot-volume penalty per unit ACWR should exceed the observed −1 shot per game, and the R² should rise above 0.12 as physiological fatigue approaches the extreme tail. Veto condition: If extra-time matches show no larger shot-volume penalty than regular 90-minute league fixtures, the ACWR–volume link is not generalizable to maximal fatigue environments and the observed league effect is likely driven by mild congestion rather than true overload.

Scenario 2: Individual shooter with ACWR > 1.5. Construct a counterfactual subsample of starting outfield players whose individual ACWR exceeds the IOC-informed danger threshold of 1.5 [PAGE 3] and who take at least one shot. Prediction: Mean shot xG for these players should decline significantly relative to players with ACWR ∈ [0.8, 1.2], supporting H2 at the individual level. Veto condition: If individual shot quality does not differ significantly across the ACWR > 1.5 threshold, the null individual-level finding holds and the team-level volume effect must be attributed to collective tactical breakdown rather than shooter degradation.

Scenario 3: Full substitution utilization. Construct a counterfactual comparison between matches where a team uses all five substitutions versus matches where fewer than three are used, matched on team ACWR. Prediction: Teams using all five substitutions should exhibit an attenuated shot-volume decline relative to ACWR compared to teams using fewer substitutions, because fresh legs offset acute fatigue within the match clock [PAGE 9–10]. Veto condition: If substitution count does not moderate the ACWR–shot-volume relationship, the five-substitution mitigation hypothesis is false and the observed team effect is independent of in-game load management.
</RLVR_COUNTERFACTUAL_VETOES>