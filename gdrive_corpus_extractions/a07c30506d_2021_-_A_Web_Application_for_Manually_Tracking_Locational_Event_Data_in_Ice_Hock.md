---
source: "2021 - A Web Application for Manually Tracking Locational Event Data in Ice Hockey - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2021"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3872
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about Shot-Plotter, a web application for manually tracking locational event data in ice hockey. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis covering all these sections, with at least 1000 words total, THINK_TRACE alone needs >=400 words.

Key source facts from the text (pages are marked by page numbers in the PDF text):
- Page 1: Title, abstract, introduction, prior work (Tape to Tape 2018, ShotPlot late 2018, Hockey Plotter late 2020), Shot-Plotter released early April 2021.
- Page 2: Figure 1 caption, Section 2 Structure, Section 2.1 Rink. NHL rulebook specs 2021-2022. Center (0,0). x-axis -100 to 100 feet. y-axis -42.5 to 42.5 feet.
- Page 3: Section 2.2 Details Panel, Section 2.3 Table. Default columns: Period, Team, Player, Type, X, Y, #. Table pages of rows, last ten events. Highlighting, deletion.
- Page 4: Figure 2 caption, Section 2.4 Table Download/Upload. CSV format. Figure 3 CSV content: Period,Team,Player,Type,X,Y / 1,Finland,12,Miss,-82.00,6.50. Section 2.5 Sample Workflow.
- Page 5: Section 3 Customizing Setup. Section 3.1 Reordering, Hiding, Deleting Details. Coordinate details X and Y cannot be hidden/deleted. Example: delete Period, hide Type, reorder Team last. Table columns #, Player, X, Y, Team.
- Page 6: Figure 4 caption, Figure 5 caption, Section 3.2 Creating New Details. Four widget types: radio buttons, text fields, dropdowns, countdown/countup timers (time widgets). Example Strength: EV, PP, PK.
- Page 7: Figure 7 caption, Section 3.3 Appearance Preferences. Two widgets per row default, adjustable 1-3. Ten rows per page default, range 1-999.
- Page 8: Section 3.4 2-Location Events. X2 and Y2 added. Cannot be hidden/deleted. Toggle "1-location" and "2-location". Shift key or toggle. First click creates smaller less opaque dot, second click creates normal dot with line/arrow. Events not logged until both locations marked. First location in X,Y; second in X2,Y2.
- Page 9: Figure 8, Figure 9 captions, Section 3.5 Setup Download/Upload. JSON file custom-setup.json. Preserves widget values, appearance preferences, 2-location enabled, order/visibility. Modular source code on GitHub, adaptable for other sports by swapping rink SVG and default details JSON.
- Page 10: Section 4 Conclusion, References.

I need to avoid betting lines entirely. No odds, spreads, etc.

I need formal LaTeX equations. I can define coordinate transformations, event logging as a function, CSV schema as a tuple, information entropy of customization, etc. But no toy equations like Force/Fatigue. Formal equations with SI units (feet converted to meters perhaps, seconds, bits, etc.) and exact breakdown regimes.

Citations: [PAGE 1], [PAGE 2], etc. Verbatim quotes.

Let's draft:

<THINK_TRACE>: >=400 words. Deep multi-hop derivation & gray-zone audit. Discuss the chain from manual tracking necessity -> prior tools limitations (Tape to Tape NHL-specific, ShotPlot no details, Hockey Plotter latency) -> Shot-Plotter design decisions (instant feedback, customizability, 2-location, JSON setup). Gray zones: coordinate system fidelity to NHL play-by-play, manual entry error correction, privacy reset on refresh, CSV/JSON schema drift, widget-value-to-column mapping as a state machine, breakdown when events exceed table pagination or when custom setup is applied with events logged (button disabled). Also discuss singularity: 2-location mode requires two clicks; if user abandons after first click, state is incomplete (miniature dot but no table row). Breakdown of CSV upload if column names don't match exactly. Multi-hop: from Alyssa Longmuir's workflow to Shot-Plotter's creation; from ShotPlot's unit toggling to Shot-Plotter's fixed NHL coordinate system; from Tape to Tape's NHL integration to Shot-Plotter's league agnosticism.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
- Coordinate system: $\mathcal{R} = [-100,100] \times [-42.5,42.5] \subset \mathbb{R}^2$, units feet. Origin at center. Conversion to SI: $1 \text{ ft} = 0.3048 \text{ m}$, so $\mathcal{R}_{SI} = [-30.48, 30.48] \times [-12.954, 12.954] \text{ m}$.
- Event tuple: $e = (p, t, pl, \tau, x, y) \in \mathbb{N} \times \Sigma^* \times \Sigma^* \times \Sigma^* \times \mathbb{R} \times \mathbb{R}$ where columns are Period, Team, Player, Type, X, Y. Default table adds $n \in \mathbb{N}$ for event number.
- 2-location event: $e_2 = (p,t,pl,\tau,x,y,x_2,y_2)$. First click state $s_1 = (x,y)$ with provisional marker; second click commits $e_2$.
- Widget column mapping: Let $W = \{w_1,\dots,w_k\}$ be widgets. Each widget $w_i$ has value $v_i \in V_i$. On click at $(x,y)$, row $r = (v_1,\dots,v_k,x,y)$ appended. If 2-location mode and first click: provisional state $P \leftarrow (x,y)$; if second click at $(x',y')$: row $r = (v_1,\dots,v_k,x,y,x',y')$ committed, $P \leftarrow \emptyset$.
- Information capacity: CSV schema entropy $H = \log_2 |\mathcal{C}|$ where $\mathcal{C}$ is set of possible column names. Custom setup JSON state space $S_{setup}$ includes visibility bits $b_i \in \{0,1\}$, order permutation $\pi \in S_k$, appearance widgets-per-row $a \in \{1,2,3\}$, rows-per-page $m \in \{1,\dots,999\}$, 2-location flag $\lambda \in \{0,1\}$.
- Breakdown/singularity: If events logged, customize button disabled: constraint $N_{events} > 0 \implies \text{customize\_enabled} = \text{false}$. CSV upload requires exact column-name match: $\forall c \in \text{file\_cols}, c \in \text{app\_cols}$ else rejection. Coordinate bounds: clicking outside $\mathcal{R}$? The text doesn't explicitly say, but coordinate system matches NHL play-by-play; singularity if click maps outside domain.
- Units: X,Y in feet relative to NHL rulebook 2021-2022 [PAGE 2]. Period in $\mathbb{N}$. Time widget (countdown/countup) presumably seconds but not specified; I should note unit underspecification as gray zone.

Citations: [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 8], [PAGE 9], [PAGE 10].

<RETROCAUSAL_GENEALOGY>: Historical lineage. Tape to Tape (2018, Rushil Ram, Meta Hockey) [PAGE 1] -> NHL-specific, passes/zone entries/exits, not accommodating other use cases. ShotPlot (late 2018, Andrew Pucci) [PAGE 1] -> location recording, custom units, NA/international rink toggle, no additional details. Longmuir's Hockey Plotter (late 2020) [PAGE 1] -> Shiny, heat map, team/player radio/text, 1-2 second shot appearance delay. Shot-Plotter (early April 2021) [PAGE 1] -> built after frustration with Hockey Plotter delay, instant feedback. Multi-week traps: if a tracking project spans weeks, custom setup JSON must be version-controlled; refreshing app resets to default [PAGE 9]; CSV merge across periods requires consistent schema [PAGE 4]; widget defaults persist only within session unless setup saved [PAGE 9].

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it in context of the tool. Crisis habit regression: under pressure during live game, tracker reverts to default widgets, forgets to adjust Player/Type, logs erroneous shots. Counter-trap: highlighting events to ensure correct deletion [PAGE 4], downloading period CSVs as checkpoints [PAGE 4]. Clock: period breaks [PAGE 4], shift key for 2-location mode [PAGE 8], rows-per-page pagination [PAGE 7]. Recursive theory of mind: the tracker anticipates their own future errors and the analyst's future interpretation of the CSV; the app design (legibility via dot color/shape/number [PAGE 3]) attempts to model the observer's cognition.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Ice hockey context: physical rink dimensions [PAGE 2], biomechanics of clicking vs actual skating events (locational data doesn't capture player speed, fatigue, etc.), weather (indoor rink, but manual tracking requires human visual attention; if video feed lags or quality poor, human error). Veto proof: The app does not validate physical plausibility of coordinates (e.g., two events at same exact coordinate same timestamp impossible? No timestamp column by default). It doesn't know if a shot was actually taken or if click was accidental. Weather veto: indoor climate controlled, but tracking from broadcast video introduces visual occlusion veto. Biomechanical: human click latency, misclicks.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 scenarios where the system would be vetoed (counterfactual). 
1. Scenario: Tracker attempts to log a 2-location event (pass) but only marks first location then game moves on; the provisional miniature dot persists but no table row is created. Veto: incomplete state not logged; prediction: data loss for that pass unless user remembers and reconstructs.
2. Scenario: User uploads a CSV with column names that do not exactly match the app's current widget/coordinate column names (e.g., "x" instead of "X" or missing "Player"). Veto: upload rejected or table wiped without valid population [PAGE 4]; prediction: data loss if user clicks upload expecting append but app removes current events first [PAGE 4].
3. Scenario: User customizes setup while events are logged; customize button is greyed/disabled [PAGE 5]. Veto: cannot restructure schema mid-game; prediction: forced to either complete game with current schema or wipe all events [PAGE 3 trash can] and restart, losing longitudinal continuity.

Need predictions for each.

Word count: Need >=1000 words total. THINK_TRACE >=400. I'll aim for roughly 1500-2000 total to be safe.

Let's ensure no betting lines. None.

No toy equations. My equations are formal with units and domains.

Citations with [PAGE N]. Verbatim quotes: I'll include a few.

Let's start writing.

THINK_TRACE section needs to be deep multi-hop. I'll write ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: LaTeX heavy, units, citations.

RETROCAUSAL_GENEALOGY: historical.

RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let's draft carefully.

Word count estimation:
THINK_TRACE: 500
SOURCE_OPERATORS: 350
RETROCAUSAL: 200
RECURSIVE: 200
CROSS_LAYER: 200
RLVR: 200
Total ~1650. Good.

I need to include exact [PAGE N] markers and verbatim quotes in SOURCE_OPERATORS and elsewhere where appropriate.

Let's write.

Important: The user said "DRIVE SOURCE: ..." and "PAGES: 11". The source text shows pages 1-10 content but says 11 pages? Actually the text ends at page 10 references. I'll cite [PAGE 1] through [PAGE 10]. If there's an 11th page not shown, I won't cite it or can say [PAGE 11] not present? Better not to cite unseen page. I'll cite 1-10.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source document describes Shot-Plotter, a browser-based manual event logger for ice hockey, and its design is best understood as a multi-hop response to prior tool failures. On [PAGE 1], the paper identifies three ancestral systems: Tape to Tape (2018), built with Rushil Ram and Meta Hockey for NHL passes, zone entries, and zone exits; ShotPlot (late 2018), by Andrew Pucci, which added unit toggling and North American versus international rink switching but recorded no additional event details; and Hockey Plotter (late 2020), by Alyssa Longmuir, a Shiny app that introduced heat-map visualization but suffered a one-to-two-second shot-appearance delay. Shot-Plotter, released in early April 2021, was explicitly triggered by frustration with that latency, and it answers each ancestor’s limitation: it is league-agnostic rather than NHL-locked, it supports arbitrary detail widgets beyond coordinates, and it renders events instantly upon clicking the rink [PAGE 1, PAGE 2]. The multi-hop logic is therefore: Longmuir’s need for women’s Olympic shot charts exposed Hockey Plotter’s feedback lag; that lag motivated Shot-Plotter’s instant-dot architecture; the instant architecture required a lightweight client-side state machine because server round-trips would reintroduce delay.

The gray zones cluster around state persistence and schema rigidity. On [PAGE 9], the paper states that “the application completely resets to default once refreshed to help ensure data privacy,” which creates a single-point-of-failure for any multi-game or multi-week tracking campaign unless the user exports the custom-setup JSON before closing the tab. This is a privacy-by-design choice that imposes an operational burden: the tracker must remember to download both the event CSV and the setup JSON, then re-upload the setup before the next session. A second gray zone is the 2-location event protocol on [PAGE 8]: in “2-location” mode, the first click creates a small, low-opacity provisional dot, and the event is not written to the table until the second click completes the arrow. If the play shifts before the second click—say, a pass attempt is broken up—the tracker is left with a phantom provisional marker and no committed row, introducing an unobservable data-loss regime. A third gray zone is CSV upload semantics on [PAGE 4]: uploading a CSV wipes all current events and repopulates the table; if the uploaded column names do not exactly match the application’s widget and coordinate names, the import fails or silently misaligns. Because the table defaults to showing only the last ten events across paginated pages [PAGE 3], a user can lose sight of earlier rows while believing they are still present, creating a working-memory trap during fast-paced games.

The exact singularity regime for customization is formally constrained: the “Customize Setup” button is disabled whenever events are logged [PAGE 5], meaning schema evolution is forbidden mid-game. The tracker must therefore freeze their ontology before the first puck drop or accept destructive reset via the header trash can [PAGE 3]. These constraints interact to produce a counter-trap logic: the safest workflow is to finalize the custom JSON setup, download it, then track period by period, downloading CSVs at intermissions as checkpoints [PAGE 4]. Any deviation from this sequence invites either schema lock-in or irreversible data deletion.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, and breakdown regimes.

Coordinate domain. The rink coordinate system matches NHL play-by-play data and the NHL rulebook for 2021-2022 [PAGE 2]. The spatial domain is
\[
\mathcal{R} = [-100,\,100]\times[-42.5,\,42.5]\ \text{ft}^2,
\]
with origin \((0,0)\) at rink center, \(x\) along the length, and \(y\) along the center line. In SI units, using \(1\ \text{ft}=0.3048\ \text{m}\),
\[
\mathcal{R}_{\text{SI}} = [-30.48,\,30.48]\times[-12.954,\,12.954]\ \text{m}^2.
\]
Breakdown: any click mapped outside \(\mathcal{R}\) is undefined by the specification; the source does not describe clamping or out-of-bounds rejection, constituting a coordinate-singularity gap.

Event tuple and default schema. The default table has seven columns [PAGE 3]: \(\#,\ \text{Period},\ \text{Team},\ \text{Player},\ \text{Type},\ X,\ Y\). A committed one-location event is the tuple
\[
e = \bigl(n,\,p,\,\tau_{\text{team}},\,\tau_{\text{player}},\,\tau_{\text{type}},\,x,\,y\bigr)
\in \mathbb{N}\times\Sigma^*\times\Sigma^*\times\Sigma^*\times\Sigma^*\times\mathbb{R}\times\mathbb{R},
\]
where \(x\in[-100,100]\) and \(y\in[-42.5,42.5]\) in feet. The downloaded CSV excludes the internal \(\#\) column [PAGE 4]; a sample row is
\[
(1,\ \text{Finland},\ 12,\ \text{Miss},\ -82.00,\ 6.50).
\]

Widget-to-column operator. Let \(W=\{w_1,\dots,w_k\}\) be the active detail widgets, each with current value \(v_i\in V_i\). On a rink click at \((x,y)\), the table-append operator is
\[
\mathcal{A}(x,y) = \bigl(v_1,\dots,v_k,\,x,\,y\bigr).
\]
The visual encoding maps \(\text{Team}\) to dot color and \(\text{Type}\) to dot shape; \(\text{Player}\) values of two characters or fewer are printed on the dot [PAGE 3].

Two-location state machine. Enabling 2-location events appends immutable coordinate columns \(X_2,Y_2\) that cannot be hidden or deleted [PAGE 8]. Let \(\lambda\in\{0,1\}\) be the mode flag and \(P\) the provisional first-click state. The transition operator on click \(c=(x,y)\) is
\[
\mathcal{T}_\lambda(c,P)=
\begin{cases}
\bigl(\varnothing,\ \text{commit } e_2=(v_1,\dots,v_k,x,y,x_2,y_2)\bigr), & \lambda=1 \land P=(x_1,y_1)\neq\varnothing,\\[4pt]
\bigl((x,y),\ \text{no commit}\bigr), & \lambda=1 \land P=\varnothing,\\[4pt]
\bigl(\varnothing,\ \text{commit } e=(v_1,\dots,v_k,x,y)\bigr), & \lambda=0.
\end{cases}
\]
Breakdown/singularity: if \(P\neq\varnothing\) and the session ends before the second click, the provisional marker is not persisted to the table; data is lost without an undo or auto-commit timeout, neither of which is specified.

Setup state space. A custom setup JSON preserves widget values, appearance preferences, 2-location flag, and detail order/visibility [PAGE 9]. The configuration space is
\[
\mathcal{S} = \Bigl(\prod_{i=1}^k V_i\Bigr)\times\{1,2,3\}\times\{1,\dots,999\}\times\{0,1\}\times\mathfrak{S}_k\times\{0,1\}^k,
\]
corresponding to widget values, widgets-per-row, rows-per-page, 2-location toggle, ordering permutation, and visibility bits. Coordinate columns \(X,Y\) (and \(X_2,Y_2\) when enabled) are excluded from hiding/deletion [PAGE 5].

Customization lock constraint. The customize button is disabled when events exist [PAGE 5]:
\[
N_{\text{events}}>0 \;\Longrightarrow\; \text{customize\_enabled}=\text{false}.
\]

CSV upload constraint. Upload requires exact column-name correspondence between the file and the active table widgets/coordinates [PAGE 4], and upload deletes all currently logged events before repopulating [PAGE 4]:
\[
\mathcal{U}(\text{file}) \implies \text{table}\leftarrow\varnothing;\quad
\forall c\in\text{file\_cols},\ c\in\text{app\_cols}.
\]
Violating the column-name constraint is a hard rejection regime.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week traps.

Shot-Plotter sits at the end of a short causal chain of grassroots hockey tracking tools. The first ancestor, Tape to Tape (2018), was released by Rushil Ram with Meta Hockey and was purpose-built for NHL passes, zone entries, and zone exits, with direct NHL play-by-play integration [PAGE 1]. Its fatal limitation for broader adoption was that it was “not accommodating to other use cases” [PAGE 1], binding it to the NHL’s proprietary event ontology. The second ancestor, ShotPlot (late 2018) by Andrew Pucci, generalized the rink interface by allowing custom units of measurement and toggling between North American and international rink specifications [PAGE 1], but it recorded no event details beyond location, making it unsuitable for multi-attribute logging. The third ancestor, Hockey Plotter (late 2020) by Alyssa Longmuir, added radio buttons for team and player and a heat-map tab, yet imposed a one-to-two-second latency between clicking the rink and the shot appearing [PAGE 1]. Longmuir’s use of Hockey Plotter for historical women’s Olympic digitization exposed that latency as unacceptable, which directly motivated Shot-Plotter’s release in early April 2021 with instant event feedback [PAGE 1].

Retrocausally, Shot-Plotter’s design decisions are inverses of its ancestors’ failure modes: league agnosticism replaces Tape to Tape’s NHL lock-in; arbitrary widget creation replaces ShotPlot’s detail barrenness; and client-side instant rendering replaces Hockey Plotter’s server-side rendering delay. However, this lineage also embeds multi-week traps. Because the app resets to default on refresh for privacy [PAGE 9], a tracker running a season-long project must version-control the custom-setup JSON and re-upload it before every session; failure to do so silently reverts the schema to Period/Team/Player/Type, corrupting longitudinal comparability. Similarly, the period-by-period CSV download workflow described on [PAGE 4] assumes the tracker remembers to save at intermissions; if the browser tab crashes between periods, all unsaved events vanish because there is no auto-save or server-backed state. The merge-later workflow [PAGE 4] further presumes that column names remain identical across files, which is only guaranteed if the same custom setup is loaded each time. These are not bugs in the code but structural traps inherited from the privacy-first, client-only architecture.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Recursive theory of mind here concerns the tracker’s model of their own future errors and the downstream analyst’s model of the tracker. Under live-game crisis conditions—fast transitions, crowded creases, rapid line changes—the tracker is prone to habit regression: clicking the wrong location, forgetting to adjust the Player or Type widget, or logging an event under the wrong Period. Shot-Plotter’s counter-trap architecture addresses this through three affordances. First, immediate visual feedback—an instant dot whose color and shape encode Team and Type [PAGE 3]—lets the tracker verify the encoding before the next play develops. Second, row highlighting enlarges the corresponding dot on the rink [PAGE 3], allowing the tracker to isolate and delete a specific erroneous event without wiping the whole table. Third, the period-boundary checkpoint workflow [PAGE 4]—downloading a period CSV at the break—acts as a forced commit point that limits the blast radius of any single mistake.

The clock layer operates at multiple scales. The shift-key toggle for 2-location mode [PAGE 8] creates a temporary, high-attention window: holding shift commits the tracker to a two-click protocol, but if play resumes before the second click, the provisional state is abandoned (see the state machine above). The rows-per-page setting, adjustable from 1 to 999 with a default of ten [PAGE 7], determines how much of the recent event history remains visible; a tracker who sets too few rows may lose situational awareness of earlier events during the game. The recursive failure mode is that the tracker, anticipating their own future misclicks, may over-rely on the “delete all” trash can [PAGE 3], which wipes the entire session and destroys the very temporal sequence the analyst needs for within-game trend analysis. The counter-trap to that is the period-segmented download strategy, which converts continuous risk into discrete, recoverable checkpoints.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The physical layer is fixed by the NHL rink specification: \([-100,100]\times[-42.5,42.5]\) feet [PAGE 2]. The application performs no physical plausibility checking; it will accept a click at any coordinate within the SVG bounds and treat it as a valid event location. Because there is no timestamp column in the default schema [PAGE 3, PAGE 4], two events cannot be distinguished by time within the CSV itself, so a veto based on physical impossibility (e.g., two shots from the same player at the same coordinate in the same second) is not computable from the exported data alone.

The biomechanical layer concerns human-computer interaction. Manual tracking requires the operator to visually locate an event on a broadcast or live feed and then click the corresponding SVG coordinate. Click latency, misclicks, and parallax between the video frame and the rink graphic introduce unmodeled error. The app’s instant-dot feedback [PAGE 2] mitigates but does not eliminate this: the operator may click correctly but on the wrong frame of a fast break, producing a systematically biased spatial sample that no post-processing can recover because ground-truth video synchronization is not logged.

The weather layer is largely neutralized because ice hockey is played indoors under climate-controlled conditions; the source contains no weather variables. However, the tracking environment inherits broadcast-veto risk: poor video quality, camera angle occlusion, or streaming lag degrades the operator’s ability to identify the true event location. Since Shot-Plotter is agnostic to league and level [PAGE 1], it may be used for youth or women’s hockey where broadcast quality is sparser than the NHL, amplifying this veto risk. There is no built-in confidence flag or “occluded” widget by default, so such vetoes are invisible in the CSV output unless the tracker creates a custom detail to capture them—a step the default workflow does not encourage.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1: Incomplete two-location commit. A tracker enables 2-location mode to log a pass [PAGE 8], clicks the first location creating a small low-opacity provisional dot, but play transitions before the second click. The event is not written to the table [PAGE 8]. Veto condition: \(P\neq\varnothing\) at session end with no matching row in the CSV. Prediction: the pass is absent from the dataset; any expected-goals or pass-danger model trained on this log will undercount transition events from that game, with bias proportional to the number of abandoned provisional states.

Scenario 2: Destructive CSV upload with schema mismatch. A user attempts to upload a historical CSV whose columns do not exactly match the active widgets and coordinate names [PAGE 4]. Because upload removes all current events before repopulating [PAGE 4], a failed or mismatched upload can leave the table empty. Veto condition: \(\exists c\in\text{file\_cols}: c\notin\text{app\_cols}\), or \(\exists c\in\text{app\_cols}: c\notin\text{file\_cols}\) when strict matching is enforced. Prediction: all events logged since the last download are irreversibly lost unless an external backup exists; the tracker will likely reconstruct from memory, introducing recall bias.

Scenario 3: Mid-game customization lock-in. A tracker realizes after logging ten events that they need an additional Strength widget (EV/PP/PK) [PAGE 6], but the Customize Setup button is disabled because events are already logged [PAGE 5]. Veto condition: \(N_{\text{events}}>0 \implies \text{customize\_enabled}=\text{false}\). Prediction: the tracker must either complete the game without the Strength dimension, creating a schema gap for that half of the season, or delete all events via the header trash can [PAGE 3] and restart, losing the first ten events and breaking the game’s event-time continuity. Downstream analysis comparing power-play shot rates across games will show a structural break at the point of the forced reset.
</RLVR_COUNTERFACTUAL_VETOES>