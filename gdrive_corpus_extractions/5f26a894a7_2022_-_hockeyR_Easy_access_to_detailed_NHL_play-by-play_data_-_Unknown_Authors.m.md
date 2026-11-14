---
source: "2022 - hockeyR Easy access to detailed NHL play-by-play data - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2022"
pages: 6
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5361
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source document (hockeyR paper from CMU Sports Analytics Conference 2022). They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No fake ratios. Formal LaTeX. Units. Assumptions. Singularity/breakdown regimes. Page citations [PAGE N] with verbatim quotes from source.

The source is 6 pages? The text says pages but the document has page numbers 1-10 at bottom? Wait, user says PAGES: 6 but source text has page markers 1-10? Actually the markdown shows page numbers 1,2,3,4,5,6,7,8,9,10 scattered. But user says PAGES: 6. I should cite [PAGE N] where N corresponds to the page numbers visible in the source text. The visible page numbers in the text are 1,2,3,4,5,6,7,8,9,10. But user says PAGES: 6 maybe meaning the PDF had 6 pages? However the text includes content up to page 10. I'll cite using the page numbers explicitly shown in the source text (e.g., [PAGE 1], [PAGE 3], etc.) because that's what is provided. I must be careful not to fabricate page numbers; I'll only cite pages that appear in the text: 1 through 10. Wait, user said PAGES: 6. Hmm. Maybe they mean only pages 1-6 are relevant? But the text includes up to page 10. I think I should cite based on the visible page markers in the provided source text. The instruction: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I will cite the page numbers as they appear in the text.

Let me map content to pages:

Page 1: Introduction, Loading data with hockeyR, code snippets, pbp load, head output. Ends with "1".
Page 2: Play-by-play data going back to 2010-11, load_pbp details, unique events list (first 9 events), shift change events. Ends with "2".
Page 3: Single season over 100,000 unblocked shots, heatmap code, Figure 1 caption "n shots: 122349". Ends with "3".
Page 4: Investigating player stats, filtering, leaders table (Auston Matthews 60 goals etc.), matthews assist code, Figure 2 description. Ends with "4".
Page 5: Figure 2 table content, Single game charts section begins, sportyR, ggimage, team logos, game filter 2021-12-01 TOR, code. Ends with "5".
Page 6: geom_hockey code, Figure 3 Colorado Avalanche @ Toronto Maple Leafs 2021-12-01 COL 3-8 TOR, caption Figure 3. Ends with "6".
Page 7: Scraping functions section, scrape_day, scrape_season, scrape_game, get_game_ids, code with Dallas/Ottawa. Ends with "7".
Page 8: scrape_game output table (111 variables), list of variables (period_seconds_remaining, etc.), rosters functions, get_current_rosters table (New Jersey players). Ends with "8".
Page 9: get_draft_class, player_details footnote, leaders_2016 table (2016 draft class goal scorers). Ends with "9".
Page 10: What's next (xG model, pre-2010-11 scraping), References. Ends with "10".

Since user said PAGES: 6 but text has up to 10, I will cite [PAGE 1] through [PAGE 10] as they appear. But maybe I should limit to pages 1-6? The user explicitly said PAGES: 6. However the source text provided contains page markers up to 10. To be safe and accurate to provided text, I'll cite whichever page the quote is on, using the visible page number. I won't say "only pages 1-6" because that would be ignoring provided content. I'll just cite accurately.

Now structure:

<THINK_TRACE> (>=400 words) Deep multi-hop derivation & gray-zone audit.
Need to derive something meaningful from hockeyR data. Maybe derive expected shot value or shot probability kernel? But no toy equations. Formal LaTeX. Use data: 122,349 unblocked shot attempts in 2021-22 [PAGE 3]. Shot locations x,y. Heatmap. Could define spatial intensity λ(x,y) = N(x,y)/T. But that's not a toy ratio; it's a formal point process intensity. Units: shots per square meter? The rink coordinates are in feet? NHL rink is 200 ft x 85 ft. sportyR coordinates likely in feet. Could define shot density ρ(x,y) = ∂²N/∂x∂y [shots/ft²]. Binwidth c(5,5) [PAGE 3]. So each hex bin is 25 ft². 122,349 shots over ice area ~ 17,000 ft²? Actually playing surface area is 200*85 = 17,000 ft². But shots only in offensive zones etc. Could compute empirical density. Singularity: as binwidth → 0, density estimate → Dirac deltas at observed shot coordinates; variance explodes (kernel density estimation breakdown). Gray zone: event_type classification includes SHOT, MISSED_SHOT, GOAL but excludes BLOCKED_SHOT in the "unblocked shots" filter [PAGE 3]? Wait text: filter(pbp,event_type%in%c("SHOT","MISSED_SHOT","GOAL")) and says "over 100,000 unblocked shots". But blocked shots are separate event type. So unblocked = shot + missed + goal. Good. Gray zone: shot locations x_fixed, y_fixed are preprocessed; coordinate system origin? Not specified in source. That's a gray zone. Also shot clock/time not used. Multi-hop: from raw RTSS JSON → hockeyR scrape → R dataframe → filter event_type → spatial binning → heatmap → inference about shooting locations. Cite pages.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown.
Define:
- Event space E = {GameScheduled, Faceoff, Hit, Stoppage, Shot, Takeaway, BlockedShot, MissedShot, Giveaway, PeriodEnd, Goal, Penalty, GameEnd, OfficialChallenge, ShootoutComplete, EarlyIntermissionStart, EarlyIntermissionEnd, EmergencyGoaltender} [PAGE 2].
- Shot subset S = {e ∈ E : event_type(e) ∈ {"SHOT","MISSED_SHOT","GOAL"}} [PAGE 3].
- Cardinality |S_2021-22| = 122,349 [PAGE 3, Figure 1].
- Spatial binning operator: B_{w_x,w_y}(x,y) = (⌊x/w_x⌋, ⌊y/w_y⌋), w_x = w_y = 5 ft [PAGE 3].
- Empirical intensity: \hat{λ}(b) = N(b)/A_b, where A_b = w_x w_y = 25 ft², N(b) = count in bin b. Units: shots·ft⁻².
- Shot percentage: \hat{p}_{shooter} = G / SA where G = count(event_type="GOAL"), SA = count(event_type ∈ {SHOT, MISSED_SHOT, BLOCKED_SHOT, GOAL}) [PAGE 4]. This is from source code. Units: dimensionless probability [0,1]. Assumptions: regular season, period < 5 (excludes overtime? Actually period<5 includes OT? NHL periods: 1-3 regulation, 4 OT, 5 shootout? They filter period<5, so includes OT but excludes shootout? The comment says excluding shootout goals. period<5 excludes period 5 (shootout). Good.)
- Breakdown/singularity: SA = 0 → undefined (division by zero). Also if shot locations are exactly at bin edges, assignment ambiguous; measure-zero set but floating-point boundary issues. RTSS data only from 2010-11 [PAGE 10], so pre-2010 requires HTML scraper (not yet implemented) → coverage singularity.
- Variable count: 107 variables in standard pbp [PAGE 2], 111 variables in scrape_game output [PAGE 7/8].

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps.
Lineage: nflscrapr (Yurko et al. 2018) [PAGE 1], nflfastR (Carl & Baldwin 2021) [PAGE 1], nhlscrapr (Ventura & Thomas, lost when hired by NHL teams) [PAGE 1], Emmanuel Perry scraper, Josh & Luke Younggren scrapers (taken down) [PAGE 1]. hockeyR fills gap [PAGE 1]. RTSS as source [PAGE 1]. Expected goals model planned [PAGE 10]. Multi-week traps: scrapers go down when authors hired; API changes; JSON endpoint changes pre-2010; nightly repository update means latency; scrape_day used for nightly updates [PAGE 7]; live game scraping requires get_game_ids then scrape_game [PAGE 7]; multi-week trap: relying on compiled data without understanding RTSS schema drift; 2016 draft class join requires player_details=TRUE which adds ~45 seconds vs ~1 second [PAGE 9 footnote]; temporal leakage if using future roster info; draft year join on player_id assumes stable IDs across sources.

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock.
This is a weird section but I need to interpret it analytically. "Crisis habit regression" = under pressure, analysts revert to simple counting stats (goals, shots) rather than spatial models [PAGE 4]. "Counter-trap" = building expected goals model to correct for shot quality bias [PAGE 10]. "Clock" = game_seconds, period_seconds_remaining, game_seconds_remaining variables [PAGE 8]; time-aware decay of shot value; end-of-game desperation shots. Multi-hop: analysts see raw counts → regress to habit of leaderboard (Matthews 60 goals) [PAGE 4] → fail to account for shot location (heatmap shows proximity to net) [PAGE 3] → counter-trap is xG model [PAGE 10] → clock imposes temporal constraints: shots in last minute of period have different strategic value; empty_net flag [PAGE 8]. Crisis habit regression = defaulting to unweighted shot counts under deadline; counter-trap = spatiotemporal point process with time-to-event hazard; clock = hard constraint from period_seconds_remaining → 0 singularity (end of period).

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof.
Physical: rink dimensions fixed (200 ft × 85 ft), boards, glass. Shot coordinates bounded within rink geometry; any x,y outside [-100,100]×[-42.5,42.5] is vetoed as sensor error. Biomechanical: shot release speed, stick flex, player fatigue not in data; 107 variables do not include biomechanics [PAGE 2], so models claiming shot velocity from x,y alone are vetoed. Weather: NHL is indoor, climate-controlled; weather veto is null (no outdoor weather effects) except for rare outdoor games (Stadium Series) not in standard RTSS? The source doesn't mention outdoor games. Veto proof: because indoor, temperature/humidity/wind do not affect puck physics in the dataset; any model including weather covariates for regular NHL games is vetoed. Also shift change events optional [PAGE 2]; excluding them means time-on-ice estimates are derived, not directly observed, vetoing precise fatigue models.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll treat as verifiable counterfactual veto scenarios. Need 3 scenarios with predictions.
1. Shot location boundary veto: If a shot event reports x_fixed = 200 ft (beyond end boards), veto event as RTSS coordinate error; prediction: heatmap bin at boundary will have zero true shots; empirical density should drop to zero beyond rink bounds.
2. Zero shot attempts singularity: For a player with SA=0 (e.g., traded mid-season with no shots in filtered subset), shot percentage undefined; veto inclusion in leaderboard; prediction: filter requires SA>0 else NaN, removing players like [any with 0 shots] from top shooters list.
3. Pre-2010 data unavailability: Requesting season 2008-09 via load_pbp returns empty or error because RTSS JSON didn't exist until 2010 [PAGE 10]; veto backward extrapolation; prediction: load_pbp(season="2008-09") yields zero rows or error, not historical data.

Word count: Need >=1000 words total across sections, THINK_TRACE alone >=400 words.

Need to avoid betting lines. No spreads etc.

Need formal LaTeX. Use \( ... \) or \[ ... \]. SI units: feet (ft) is not SI but it's the unit used; I can convert to meters (1 ft = 0.3048 m) and state both. Information units: bits maybe for entropy? Probability units: dimensionless. Need assumptions and exact singularity/breakdown regimes.

Need verbatim quotes with [PAGE N]. I'll include several.

Let's draft carefully.

Word count estimation: THINK_TRACE needs >400 words. Other sections need to fill to >1000 total. I'll write substantial content.

Let's compose.

Start with THINK_TRACE:

Multi-hop derivation: Start with RTSS (Real Time Scoring System) public data [PAGE 1]. hockeyR scrapes JSON nightly via scrape_day [PAGE 7]. Compiled repository goes back to 2010-11 [PAGE 1]. load_pbp(season="2021-22") returns event-based tibble with 107 variables [PAGE 2]. Nine on-ice events plus game state events [PAGE 2]. Filter for unblocked shots: event_type ∈ {"SHOT","MISSED_SHOT","GOAL"} yields n=122,349 for 2021-22 [PAGE 3]. Spatial coordinates x,y with binwidth c(5,5) [PAGE 3]. Multi-hop: raw JSON → tidy dataframe → spatial point process → heatmap inference. Gray zones: coordinate origin not stated in source [PAGE 3/6]; x_fixed,y_fixed preprocessing opaque; blocked shots excluded from "unblocked" but blocked shot events exist separately [PAGE 2]; shift changes excluded by default, so player time-on-ice is not directly in core data [PAGE 2]; period<5 excludes shootout but includes overtime? Need to check: NHL periods: 1,2,3 regulation, 4 overtime, 5 shootout? Actually shootout isn't a period in RTSS maybe period 5? The code comment says excluding shootout goals and filters period<5. So period 5 is shootout. Fine.

Breakdown regimes: As bin width → 0, \hat{λ} becomes sum of Dirac masses; variance diverges (kernel density estimation singularity). At SA=0, shooting percentage undefined. RTSS JSON absent pre-2010 → coverage singularity [PAGE 10]. Nightly update latency means scrape_day and repository may diverge by up to 24h [PAGE 7].

Gray-zone audit: The heatmap uses geom_hex with alpha=.7 but no statistical test for clustering; "shooters frequently look to take their shots from as close to the net as possible" is descriptive, not causal [PAGE 3]. The leaders table uses period<5 and season_type=="R" [PAGE 4]; playoff data excluded, so regular-season shooting percentages may not generalize to postseason. Assist network for Matthews uses event_player_2_name and event_player_3_name; source does not document whether player 2 is primary assist and player 3 secondary, or vice versa [PAGE 4]; this is a semantic gray zone that could invert A1/A2 interpretation.

That's plenty for >400 words.

SOURCE_OPERATORS_AND_EQUATIONS:

Define event space, shot subset, intensity, shot percentage, variable counts, coordinates conversion.

LaTeX:
\[
\mathcal{E} = \{...\}
\]
\[
\mathcal{S} = \{ e \in \mathcal{E} : \text{event\_type}(e) \in \{\text{SHOT}, \text{MISSED\_SHOT}, \text{GOAL}\} \}
\]
\[
|\mathcal{S}_{2021-22}| = 122{,}349 \quad \text{[PAGE 3, Figure 1]}
\]
Spatial binning:
\[
b(x,y) = \left( \left\lfloor \frac{x}{w_x} \right\rfloor, \left\lfloor \frac{y}{w_y} \right\rfloor \right), \quad w_x = w_y = 5\,\text{ft} = 1.524\,\text{m}
\]
\[
\hat{\lambda}(b) = \frac{N(b)}{A_b}, \quad A_b = w_x w_y = 25\,\text{ft}^2 \approx 2.323\,\text{m}^2
\]
Units: shots·ft⁻² or shots·m⁻². Probability:
\[
\hat{p}_i = \frac{G_i}{SA_i}, \quad G_i = \sum \mathbb{1}[\text{event\_type}=\text{GOAL}], \quad SA_i = \sum \mathbb{1}[\text{event\_type}\in\{\text{SHOT},\text{MISSED\_SHOT},\text{BLOCKED\_SHOT},\text{GOAL}\}]
\]
Dimensionless [0,1]. Assumptions: regular season, period<5, event_player_1_name is scorer [PAGE 4].
Breakdown: SA_i=0 ⇒ undefined; bin edge assignment; pre-2010 missing [PAGE 10].
Variable counts: 107 [PAGE 2], scrape_game returns 111 [PAGE 7/8].

RETROCAUSAL_GENEALOGY:

Lineage: nflscrapr → nflfastR [PAGE 1]; nhlscrapr lost [PAGE 1]; Perry and Younggren scrapers taken down [PAGE 1]; hockeyR [PAGE 1]; RTSS backbone [PAGE 1]; planned xG model [PAGE 10]; pre-2010 HTML scraper needed [PAGE 10].
Multi-week traps: scraper mortality when authors hired [PAGE 1]; nightly update latency [PAGE 7]; schema drift between 2010-11 JSON and older HTML [PAGE 10]; player_details scrape cost ~45s vs ~1s [PAGE 9 footnote]; stable player_id assumption across draft join [PAGE 9]; period<5 excludes shootout but includes OT [PAGE 4]; reliance on compiled repository without scraping live [PAGE 7]; team logos from ESPN via ggimage [PAGE 5] external dependency.

RECURSIVE_THEORY_OF_MIND:

Crisis habit regression: under deadline, analysts revert to counting stats (goals, shots) and leaderboards [PAGE 4], ignoring shot location. Counter-trap: xG model appending expected goal value per shot [PAGE 10]; spatiotemporal intensity. Clock: variables period_seconds_remaining, game_seconds_remaining, home_score, away_score, empty_net [PAGE 8]; as period_seconds_remaining → 0⁺, strategic value of shot changes (pull goalie, empty net). Singularity at end of period: clock = 0, play stops, shot value discontinuous. Multi-week trap: using static shot percentage without time decay misvalues late-game shots.

CROSS_LAYER_VETO_ADJUDICATION:

Physical: rink bounds [-100 ft,100 ft] × [-42.5 ft,42.5 ft]; any coordinate outside vetoed. Biomechanical: no shot speed, stick flex, player load in 107 variables [PAGE 2]; models inferring velocity from coordinates vetoed. Weather: indoor arena, controlled climate; wind/temp/humidity do not enter RTSS physics; veto weather covariates for indoor games (outdoor games not addressed in source). Shift changes excluded by default [PAGE 2]; time-on-ice derived, not measured; fatigue models vetoed without shift data. Empty net flag [PAGE 8] interacts with goalie presence: shots on empty net have different goalie biomechanics (no goalie), so goalie-specific save models vetoed when empty_net=TRUE.

RLVR_COUNTERFACTUAL_VETOES:

1. Coordinate boundary veto: Input shot with x_fixed > 100 ft or |y_fixed| > 42.5 ft. Veto: remove as RTSS sensor error. Prediction: heatmap density at bins adjacent to boards will show artificial spikes if not vetoed; after veto, boundary bins drop to near-zero and total N remains 122,349 minus O(10⁻³N) errors.

2. Zero-attempt percentage veto: Player i with SA_i = 0 in filtered regular-season subset. Veto: exclude from shooting percentage leaderboard; do not assign \hat{p}=0. Prediction: players with 0 shots appear in raw event data but vanish from leaders table [PAGE 4]; including them as 0.000 biases league mean downward by O(1/N_players).

3. Temporal coverage veto: load_pbp(season="2008-09") requested. Veto: return empty/error because RTSS JSON files did not exist until 2010 [PAGE 10]. Prediction: no rows returned; any backtest spanning 2007-2010 using hockeyR alone is invalid and must use separate HTML scraper (not yet built).

Need to ensure >1000 words total. Let's count roughly. THINK_TRACE ~450. SOURCE_OPERATORS ~350. RETROCAUSAL ~250. RECURSIVE ~250. CROSS_LAYER ~250. RLVR ~250. Total ~1800. Good.

No betting lines. No fake ratios. Formal LaTeX. Units. Assumptions. Singularity/breakdown regimes. Citations [PAGE N]. Verbatim quotes: include some exact quotes from source.

Let's include verbatim quotes:
- "Play-by-play data from the NHL has long been available to the general public through the NHL’s Real Time Scoring System (RTSS)" [PAGE 1].
- "A single season’s worth of play-by-play data generally includes records of over 100,000 unblocked shots and their locations." [PAGE 3]
- "n shots: 122349" [PAGE 3, Figure 1].
- "The next steps for hockeyR will be to include the package’s own expected goals model" [PAGE 10].
- "while the RTSS data existed as far back as 2007, the JSON files utilized by hockeyR didn’t exist until 2010" [PAGE 10].
- footnote: "adding the details makes the scrape take ~45 seconds instead of ~1 second" [PAGE 9].

Check page numbers for quotes:
[PAGE 1] for RTSS quote. Yes page 1.
[PAGE 3] for over 100,000 and n shots. Yes.
[PAGE 10] for next steps xG and JSON didn't exist until 2010. Yes page 10.
[PAGE 9] for footnote ~45 seconds. Yes page 9.

Make sure not to mention any betting terms. Good.

Now write final answer with exact XML sections. No extra text outside sections? The user wants across these exact XML sections. I should output only those sections or can have intro? Safer to output exactly the sections in order, no markdown outside? I'll output just the XML blocks. The content inside can be markdown/LaTeX.

Need to ensure THINK_TRACE >= 400 words. I'll write it long enough.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The data pipeline in the source begins with the NHL’s Real Time Scoring System (RTSS), described as the public backbone for play-by-play: “Play-by-play data from the NHL has long been available to the general public through the NHL’s Real Time Scoring System (RTSS), but it was up to the end user to scrape that data themselves” [PAGE 1]. hockeyR collapses the first hop by pre-scraping RTSS JSON nightly via scrape_day into a public GitHub repository, then exposing load_pbp(season="2021-22”) as a single R call [PAGE 1] [PAGE 2]. The second hop is the event-based tibble itself: 107 variables per row, nine on-ice event types plus game-state events, spanning 2010-11 onward [PAGE 2] [PAGE 10]. The third hop is the analyst filter: unblocked shots are defined as event_type ∈ {“SHOT,” “MISSED_SHOT,” “GOAL”}, and the source states that “A single season’s worth of play-by-play data generally includes records of over 100,000 unblocked shots and their locations” [PAGE 3]; Figure 1 reports the exact empirical count “n shots: 122349” [PAGE 3]. The fourth hop is spatial binning with geom_hex(binwidth=c(5,5)) [PAGE 3], producing a heatmap from which the authors infer that “shooters frequently look to take their shots from as close to the net as possible” [PAGE 3].

Gray-zone audit: first, the coordinate origin and orientation for x_fixed / y_fixed are never documented in the provided text [PAGE 3] [PAGE 6], so any metric derived from absolute rink position inherits an unstated reference frame. Second, “unblocked” excludes BlockedShot as a separate event type [PAGE 2], yet the semantic boundary between a missed shot and a blocked shot is determined by RTSS scorer judgment, not by a physical observable in the data; misclassification here is a measurement gray zone. Third, shift-change events are excluded by default because they “nearly double[s] the size of the data” [PAGE 2], which means time-on-ice and fatigue proxies are not directly observed in the core dataframe; any downstream model claiming to condition on shift boundaries must first reconstruct shifts from on-ice player arrays, an unvalidated derivation. Fourth, the leaderboard code filters season_type=="R" & period<5 [PAGE 4], which includes overtime but excludes the shootout (period 5), yet the commentary only says “excluding shootout goals”; the treatment of overtime shots as equivalent to regulation shots is an unstated stationarity assumption. Fifth, the assist alluvium for Auston Matthews groups by event_player_3_name and event_player_2_name [PAGE 4] without documenting which column is primary versus secondary assist, creating an A1/A2 inversion risk in any network centrality metric.

Breakdown regimes: (a) as the hex bin width w → 0, the empirical intensity \hat{λ}(b) = N(b)/A_b converges to a sum of Dirac masses at observed shot coordinates, and the variance of the density estimate diverges (kernel-density singularity); the fixed choice w = 5 ft = 1.524 m is therefore a regularization, not a physical constant [PAGE 3]. (b) Shooting percentage \hat{p} = G / SA is undefined when SA_i = 0; players with zero shot attempts in the filtered subset are mathematically singular and must be excluded rather than assigned \hat{p}=0 [PAGE 4]. (c) Coverage singularity: RTSS JSON files “didn’t exist until 2010” [PAGE 10], so load_pbp cannot return valid rows for 2007-08 through 2009-10 without a separate HTML scraper that the authors state is not yet built. (d) Temporal latency: scrape_day updates the repository nightly [PAGE 7], so a live-game analysis using the compiled file may lag RTSS by up to roughly 24 hours unless the user calls scrape_game directly.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and singularity breakdown.

Event space (verbatim enumeration from the source) [PAGE 2]:
\[
\mathcal{E} = \{ \text{GameScheduled}, \text{Faceoff}, \text{Hit}, \text{Stoppage}, \text{Shot}, \text{Takeaway}, \text{BlockedShot}, \text{MissedShot}, \text{Giveaway}, \text{PeriodEnd}, \text{Goal}, \text{Penalty}, \text{GameEnd}, \text{OfficialChallenge}, \text{ShootoutComplete}, \text{EarlyIntermissionStart}, \text{EarlyIntermissionEnd}, \text{EmergencyGoaltender} \}.
\]

Shot-attempt subset (unblocked) [PAGE 3]:
\[
\mathcal{S} = \{ e \in \mathcal{E} : \text{event\_type}(e) \in \{ \text{“SHOT”}, \text{“MISSED\_SHOT”}, \text{“GOAL”} \} \}.
\]

Empirical season count [PAGE 3, Figure 1]:
\[
| \mathcal{S}_{2021-22} | = 122\,349 \quad \text{shots}.
\]

Spatial binning operator with binwidth c(5,5) [PAGE 3]:
\[
b(x,y) = \left( \left\lfloor \frac{x}{w_x} \right\rfloor, \left\lfloor \frac{y}{w_y} \right\rfloor \right), \qquad w_x = w_y = 5\,\text{ft} = 1.524\,\text{m}.
\]

Bin area and empirical intensity:
\[
A_b = w_x w_y = 25\,\text{ft}^2 \approx 2.323\,\text{m}^2, \qquad
\hat{\lambda}(b) = \frac{N(b)}{A_b} \quad \left[ \frac{\text{shots}}{\text{ft}^2} \right] \text{ or } \left[ \frac{\text{shots}}{\text{m}^2} \right].
\]
Assumption: x,y are measured from a fixed but unstated rink origin; bins at the rink boundary are truncated by the physical boards.

Shooter percentage estimator (verbatim logic from the leaderboard code) [PAGE 4]:
\[
G_i = \sum_{g} \mathbb{1}\bigl[\text{event\_type}(g)=\text{“GOAL”} \land \text{event\_player\_1\_name}(g)=i\bigr],
\]
\[
SA_i = \sum_{g} \mathbb{1}\bigl[\text{event\_type}(g) \in \{ \text{“SHOT”}, \text{“MISSED\_SHOT”}, \text{“BLOCKED\_SHOT”}, \text{“GOAL”} \} \land \text{event\_player\_1\_name}(g)=i\bigr],
\]
\[
\hat{p}_i = \frac{G_i}{SA_i} \in [0,1] \quad \text{(dimensionless probability)}.
\]
Assumptions: regular season only (season_type=="R"), periods 1-4 only (period<5, thus excluding the shootout), and event_player_1_name is the scorer [PAGE 4].

Data dimensionality [PAGE 2] [PAGE 7] [PAGE 8]:
- Compiled pbp: 107 variables [PAGE 2].
- scrape_game output: 111 variables, including period_seconds_remaining, game_seconds_remaining, home_score, away_score, empty_net, event_goalie_name, strength_state [PAGE 7] [PAGE 8].

Singularity and breakdown regimes:
1. SA_i = 0 \Rightarrow \hat{p}_i undefined (division by zero); must be vetoed, not imputed as zero [PAGE 4].
2. Bin-edge assignment: shots with x or y exactly on a 5-ft boundary have measure-zero probability under continuous coordinates but positive probability under floating-point RTSS quantization; boundary allocation rule is unspecified [PAGE 3].
3. Pre-2010 coverage hole: RTSS JSON absent before 2010 [PAGE 10]; load_pbp(season="2008-09") returns no valid rows.
4. Nightly latency: scrape_day updates once per night [PAGE 7]; compiled data may be stale by up to O(24 h) relative to live RTSS.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week failure traps.

Lineage. The source explicitly positions hockeyR in the ancestry of R sports-scraping packages: the NFL analog is nflfastR (Carl and Baldwin 2021) and its predecessor nflscrapr (Yurko, Ventura, and Horowitz 2018) [PAGE 1]. For hockey, the direct ancestor nhlscrapr was lost when Samuel Ventura and Andrew C. Thomas were hired by NHL teams [PAGE 1]. Independent scrapers by Emmanuel Perry and by Josh and Luke Younggren existed but were taken down [PAGE 1]. hockeyR therefore fills a vacancy created by researcher attrition to league employment, a pattern that makes the package’s own continuity contingent on Dan Morse’s continued maintenance. The underlying data remain the NHL RTSS [PAGE 1]; the compiled repository begins at 2010-11 because RTSS JSON did not exist before 2010, while RTSS itself existed as far back as 2007 [PAGE 10].

Forward-looking lineage. The authors state the next step is “to include the package’s own expected goals model… an extra column appended to it to include an expected goal value for every shot attempt” [PAGE 10]. This implies all current analyses are pre-xG and therefore shot-count-weighted rather than shot-quality-weighted. A second planned extension is an HTML scraper for pre-2010 games [PAGE 10], which is not yet available.

Multi-week traps. (1) Scraper mortality: nhlscrapr and the Perry/Younggren scrapers did not fail because of code bugs but because authors were hired away or removed the tools [PAGE 1]; hockeyR inherits the same institutional risk. (2) Schema drift across eras: pre-2010 RTSS data require a different HTML scraper than the post-2010 JSON pipeline [PAGE 10]; any multi-season analysis straddling 2009-10 and 2010-11 will silently truncate or misalign. (3) Nightly refresh lag: scrape_day populates the repository each night [PAGE 7]; analyses that pull compiled data on game day may miss the final RTSS corrections. (4) Computational asymmetry: get_draft_class with player_details=TRUE takes ~45 seconds versus ~1 second by default [PAGE 9, footnote 1], so batch jobs that accidentally request details for many draft classes will hang. (5) Identifier stability: joining player stats to draft class by player_id assumes the NHL player ID is immutable across draft and play-by-play sources [PAGE 9]; if IDs are recycled or renamed, the join produces false negatives. (6) External asset dependency: single-game shot charts pull team logos from ESPN via ggimage [PAGE 5]; if ESPN changes URL structure, Figure 3-style plots break without any change to hockeyR itself.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. Under deadline pressure, an analyst using hockeyR is likely to regress to the most legible counting stats in the package: goals and shot attempts, exactly as demonstrated in the leaderboard example for Auston Matthews (60 goals, 599 shot attempts, \hat{p}=0.100) [PAGE 4]. This habit ignores the spatial structure that Figure 1 makes explicit—122,349 unblocked shots binned across the ice surface [PAGE 3]—and treats every shot attempt as exchangeable regardless of x,y location, game state, or time remaining.

Counter-trap. The stated remedy is the forthcoming expected-goals column [PAGE 10]. Formally, this upgrades the shot process from a Bernoulli count model G_i ~ Binomial(SA_i, \hat{p}_i) to a marked spatiotemporal point process in which each shot carries a continuous mark xG(x,y,\text{game\_seconds\_remaining},\text{strength\_state}) \in [0,1]. The counter-trap defeats simple shot-volume regression by assigning higher value to high-danger locations near the net (consistent with the heatmap’s concentration of red bins) [PAGE 3], but it introduces a new dependency: the xG model itself must be trained and validated, or it becomes a black-box habit regression of its own.

Clock. The play-by-play schema contains explicit temporal operators: period_seconds_remaining, game_seconds_remaining, game_seconds, home_score, away_score, and empty_net [PAGE 8]. As period_seconds_remaining \to 0^{+}, the game enters a boundary regime where strategic incentives change discontinuously (pulled goalie, empty-net situations, last-shot rushes). A shot taken at game_seconds_remaining = 5 in a one-goal game has a different decision-theoretic value than the same shot at game_seconds_remaining = 600, even if x,y and event_type are identical. The clock therefore imposes a hard truncation: at period end, play stops and the shot-value function is discontinuous at zero remaining time.

Multi-week trap in theory-of-mind terms. An analyst who builds a static shooter rating in Week 1 and redeploys it in Week 4 without re-conditioning on empty_net and game_seconds_remaining will systematically overvalue shooters who accumulate garbage-time shots on empty nets late in games and undervalue clutch high-leverage shooters. The crisis habit (raw counts) plus clock ignorance (ignoring time remaining) is a recursive error: the model predicts what the shooter did, not what the shooter was asked to do under temporal constraints.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer veto. The NHL rink is a fixed rectangular domain; coordinates outside the boards are physically impossible. Any shot event with x_fixed \notin [-100\,\text{ft},\,100\,\text{ft}] or |y_fixed| \notin [42.5\,\text{ft},\,42.5\,\text{ft}] must be vetoed as RTSS coordinate corruption or preprocessing error, because no shot can originate beyond the end boards or side glass. The heatmap binning with binwidth c(5,5) implicitly assumes all shots fall inside this domain [PAGE 3]; boundary bins adjacent to the boards should not contain mass from illegal coordinates.

Biomechanical layer veto. The standard pbp object contains 107 variables and scrape_game contains 111 [PAGE 2] [PAGE 7] [PAGE 8]; none include shot speed, stick flex, player heart rate, or shift duration unless shift-change events are optionally loaded [PAGE 2]. Therefore any model that purports to infer puck velocity, shooter fatigue, or goalie reaction time from x,y coordinates alone is vetoed. The empty_net flag [PAGE 8] creates a biomechanical sub-population: shots on an empty net are uncontested by a goalie, so goalie-centric save-probability models must be vetoed (or retrained with a separate empty-net class) whenever empty_net = TRUE.

Weather layer veto. NHL games are played indoors in climate-controlled arenas; the source describes no outdoor weather covariates, wind, temperature, or humidity effects on puck physics [PAGE 1] [PAGE 10]. For regular RTSS games, weather variables are causally inert and must be vetoed. The sole exception would be outdoor NHL games (Stadium Series, Heritage Classic), which are not discussed in this source and would require a separate physical model; applying an indoor-trained xG or shot-location model to an outdoor game without recalibration is vetoed.

Adjudication summary. When physical bounds are violated → drop event. When SA_i = 0 → drop from percentage leaderboard. When biomechanical covariates are claimed but absent from the 107/111-variable schema → reject model. When weather is included for an indoor game → reject covariate. When empty_net = TRUE → segregate from goalie-faced shots.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios with predictions.

Veto Scenario 1 — Rink-boundary coordinate violation.
Setup: An analyst ingests scrape_game output and finds a shot event with x_fixed = 112 ft (beyond the attacking end boards at 100 ft). Verifiable rule: Physical domain is [-100 ft, 100 ft] × [-42.5 ft, 42.5 ft]; any coordinate outside is a sensor or preprocessing error [PAGE 3] [PAGE 6]. Veto: Remove the event before binning. Prediction: If not vetoed, the boundary hex bin at x ≈ 110 ft will show a spurious density spike and \hat{\lambda}(b) > 0 in a physically empty region. After veto, boundary-adjacent bins drop to near-zero, total unblocked-shot count falls by O(10^{-3} \times 122{,}349) ≈ O(10^2) or fewer events, and the heatmap’s maximum density remains in the high-danger slot area near the net [PAGE 3].

Veto Scenario 2 — Zero shot-attempt singularity.
Setup: A skater appears in the event data for the 2021-22 regular season but has SA_i = 0 under the filter period<5, season_type=="R" [PAGE 4]. Verifiable rule: \hat{p}_i = G_i / SA_i is undefined at SA_i = 0; assigning \hat{p}_i = 0 is a category error [PAGE 4]. Veto: Exclude the player from any shooting-percentage leaderboard rather than listing them as 0.000. Prediction: The raw leaderboard code arranges by goals descending [PAGE 4], but a percentage-based ranking that includes zero-attempt players would artificially depress the league mean \bar{p} by O(1/N_{\text{players}}) and create false “cold shooter” narratives. After veto, the denominator of any aggregate percentage calculation contains only players with SA_i > 0, preserving the empirical distribution of \hat{p} observed for Matthews (0.100), Draisaitl (0.114), Kreider (0.126), etc. [PAGE 4].

Veto Scenario 3 — Pre-2010 temporal coverage request.
Setup: A user calls load_pbp(season="2008-09") expecting historical play-by-play. Verifiable rule: “while the RTSS data existed as far back as 2007, the JSON files utilized by hockeyR didn’t exist until 2010” [PAGE 10]; therefore no compiled rows exist for 2007-08, 2008-09, or 2009-10. Veto: Return an empty tibble or explicit error, not synthetic data. Prediction: Any backtest or multi-season trend that begins before 2010-11 using hockeyR alone will show an abrupt drop to zero events at the 2009-10/2010-11 boundary. The correct counterfactual is to route pre-2010 requests to the not-yet-built HTML scraper [PAGE 10] or to truncate the analysis window at 2010-11; failure to veto produces a false coverage singularity mistaken for a real cessation of NHL scoring.
</RLVR_COUNTERFACTUAL_VETOES>