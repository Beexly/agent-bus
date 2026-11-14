---
source: "2022 - fastRhockey A Package For Women s Hockey Data - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2022"
pages: 5
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3909
---

<NATIVE_REASONING>
The user wants me to analyze a source document about `fastRhockey`, an R package for women's hockey data. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No fake toy equations. Formal LaTeX only with units, assumptions, breakdown regimes.
- Cite [PAGE N] markers for source pages. The source text indicates pages 1-6 are available (though user says PAGES: 5, the text shows pages 1-6 at bottom). I should cite page numbers based on the page markers visible in the text. Looking at the text: "1" appears after section 2, "2" appears after schedule example, "3" appears after player box example, "4" appears after pbp example, "5" appears after NHL functions list, "6" appears after conclusion. So I have pages 1-6 available. I need to cite exact [PAGE N] markers.
- Must be >= 1000 words total across sections.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words here. Discuss:
- Data pipeline: PHF API -> R package -> data frames -> analysis
- Multi-hop: game_id from schedule -> team box -> player box -> play-by-play -> ELO ratings
- Gray zones: API key access, inconsistent data quality, missing location data post NWHL->PHF transition, no shift/TOI data for PHF unlike NHL, faceoff win % impact claim without citation
- Units: game_id as integer, scores as counts, time as MM:SS strings, save_percent as probability [0,1], attendance as integer or NA
- Breakdown regimes: API key changes, website restructuring, missing play_by_play flag, overtime/shootout edge cases

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define operators: phf_schedule, phf_team_box, phf_player_box, phf_pbp
- Data types: game_id ∈ ℕ, home_score, away_score ∈ ℕ₀, save_percent ∈ [0,1] ⊂ ℝ, time ∈ {MM:SS}
- ELO update formula (formal, not toy): R'_i = R_i + K(S_i - E_i), E_i = 1/(1 + 10^((R_j - R_i)/400)). This is a real ELO formula, not a fake ratio. Units: rating points. Assumptions: K constant, binary outcome S_i ∈ {0, 0.5, 1}. Breakdown: K sensitivity, cold start, non-stationary competition.
- Cite pages: [PAGE 1] abstract, [PAGE 1-2] structure, [PAGE 2] schedule example and game_id 514869, [PAGE 2-3] team box and player box, [PAGE 3-4] play-by-play 78 columns, [PAGE 4] ELO figure, [PAGE 5-6] NHL and conclusion.
- No toy equations. Only formal ones.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: SportsDataverse, hockeyR, fastRhockey, R packages, rvest/jsonlite/stringr
- Historical: NWHL -> PHF rebrand, website changes broke APIs, ESPN coverage
- Multi-week traps: season-to-season API inconsistency, playoffs vs regular season schema drift, goalie rotation (4 goalies in box but only 2 active?), faceoff research dependency on play-by-play that may lack location data

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: analysts reverting to men's hockey models when PHF data is sparse/inconsistent
- Counter-trap: assuming faceoff win % has same predictive weight in PHF as claimed without PHF-specific validation
- Clock: game clock (periods, OT, shootout) vs data freshness clock (API updates, rolling ELO within game)

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical: no location data (coordinates) means cannot compute shot distance, angle, xG; velocity not tracked; body contact not quantified
- Biomechanical: no shift/TOI data for PHF (unlike NHL nhl_game_shifts), so fatigue, ice time distribution unavailable; player physical load unobservable
- Weather: indoor rink, minimal direct weather veto, but facility conditions (ice quality, rink dimensions) unobservable from API metadata
- Veto proof: any model requiring spatial coordinates, TOI, or weather is vetoed at data layer

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll treat as verifiable counterfactual veto scenarios.
- Scenario 1: API key rotation breaks phf_schedule() -> prediction: pipeline fails at data ingestion, no downstream features computable. Verifiable: check install.packages("fastRhockey") and API access.
- Scenario 2: Faceoff ELO used without K-factor calibration on PHF sample size -> prediction: rating instability, overfitting to small N faceoffs per game. Verifiable: compute rolling ELO variance across PHF vs NHL.
- Scenario 3: Goalie save_percent compared across goalies with different shots_against (e.g., 0 shots vs 34 shots) -> prediction: small-sample save_percent is non-identifiable, Bayes shrinkage required. Verifiable: compare Fujimagari (0 SA, 0 GA) vs Burt (34 SA, 2 GA).

Word count: Need >= 1000 words total. I'll make sure each section is substantial.

Let me verify page citations. The source text has page numbers embedded:
- Page 1: after section 2 intro ("While the code for these functions..."), ends with "1"
- Page 2: after schedule output, ends with "2"
- Page 3: after player box skaters table, ends with "3"
- Page 4: after pbp snippet and figure reference, ends with "4"
- Page 5: after NHL functions list, ends with "5"
- Page 6: after conclusion, ends with "6"

I will cite [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 5], [PAGE 6] appropriately.

I must not mention betting lines. No spreads, totals, moneylines, odds. I can mention probabilities (save_percent) but not betting odds.

I must not invent fake ratios. I can use the actual ELO formula which is standard. I should label assumptions and breakdown regimes.

Let's draft.

Structure:
<THINK_TRACE>
(>=400 words)
- Multi-hop derivation: schedule -> game_id -> team_box -> player_box -> pbp -> ELO
- Gray zones: API key, data consistency, missing location data, no PHF shifts/TOI, attendance NA
- Breakdown regimes
- No betting lines
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal definitions
- LaTeX ELO equation
- Units table
- Page citations for each function
- Breakdown regimes
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
- SportsDataverse, hockeyR, rvest, jsonlite, stringr
- NWHL to PHF transition
- Multi-week traps
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression (importing NHL models)
- Counter-trap (faceoff ELO generalization)
- Clock (game clock vs data pipeline clock)
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical layer vetoes (no coordinates)
- Biomechanical vetoes (no TOI/shifts)
- Weather/minimal environmental
- Proof of veto completeness
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios with predictions
</RLVR_COUNTERFACTUAL_VETOES>

I need to ensure total word count >= 1000. Let me write generously.

Let's think about exact quotes:
- [PAGE 1]: "fastRhockey was developed to recreate access to PHF data given those changes."
- [PAGE 2]: "game_id = 514869" and Boston Pride defeated Connecticut Whale 4-2 on March 28th, 2022.
- [PAGE 3]: player box output with 36x23 skaters, 4x13 goalies.
- [PAGE 4]: "The function returns about 78 columns of data" and rolling ELO faceoff ratings.
- [PAGE 5]: NHL functions list, "nhl_game_shifts : returns NHL shift and time on ice data; there is no PHF equivalent for this data".
- [PAGE 6]: conclusion.

Now write carefully.

For LaTeX:
ELO: $R_i^{(t+1)} = R_i^{(t)} + K \left[ S_i - \frac{1}{1 + 10^{(R_j^{(t)} - R_i^{(t)})/400}} \right]$
Units: $R$ in rating points (dimensionless points scale), $K$ in points per game, $S_i \in \{0, 0.5, 1\}$, $E_i \in [0,1]$ probability.
Breakdown: $K$ misspecification, cold start ($N_i < N_{crit}$), non-stationarity (roster turnover), tied games (shootout).

Save percent: $\text{SV\%} = \frac{\text{saves}}{\text{shots against}} \in [0,1]$. Breakdown: $SA = 0$ division by zero / undefined (as in Fujimagari, Selander with 0 shots against).

Faceoff win pct: $\text{FOW\%} = \frac{\text{faceoffs won}}{\text{faceoffs won} + \text{faceoffs lost}} \in [0,1]$.

These are formal, not toy.

Time format: $t \in \{00{:}00, \dots, 20{:}00\}$ per period, MM:SS string, not continuous SI seconds unless parsed.

I will write the full response now. Need to keep track of word count roughly. I'll aim for ~1500-2000 words total to be safe.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
The deep multi-hop derivation for `fastRhockey` begins at the data ingestion boundary and proceeds through four analytical hops before reaching any inferential claim. Hop 1: `phf_schedule(season=2022)` returns a metadata dataframe with 46 columns, including `game_id`, `home_team`, `away_team`, `home_score`, `away_score`, `facility`, `date_group`, `game_type`, `overtime`, and `shootout` [PAGE 2]. From this table the analyst isolates the 2022 Isobel Cup clinching game: Connecticut Whale vs. Boston Pride, `game_id = 514869`, final score 4-2, played 2022-03-28 at AdventHealth Center Ice [PAGE 2]. Hop 2: `phf_team_box(game_id=514869)` collapses the game into team-level aggregates—`total_scoring`, `total_shots`, `successful_power_play`, `penalty_minutes`, `faceoff_percent`, and period-scored vectors—revealing Boston scored three of four goals in period 3 and won more faceoffs [PAGE 2]. Hop 3: `phf_player_box(game_id=514869)` returns a 36×23 skater tibble and a 4×13 goalie tibble, exposing individual `goals`, `assists`, `shots_on_goal`, `save_percent`, and `faceoffs_win_pct` [PAGE 3]. Hop 4: `phf_pbp(game_id=514869)` returns a 168×78 event-level tibble containing `play_type`, `time`, `play_description`, `scoring_team_on_ice`, `offensive_player_name_1…6`, `defensive_player_name_1…6`, and goal on-ice rosters [PAGE 3–4]. This play-by-play stream is the substrate for rolling ELO faceoff ratings, where each faceoff updates a skater’s rating conditional on opponent strength [PAGE 4].

Gray-zone audit. The first gray zone is the API access layer: `fastRhockey` requires a PHF API key retrievable from the PHF website, and the paper notes the PHF data is “not always consistent and clean thanks to extraneous factors on the PHF side of things” [PAGE 1]. The second gray zone is structural discontinuity: the NWHL-to-PHF rebrand and accompanying website changes destroyed prior scrapers and location-data API access, meaning `fastRhockey` cannot reproduce event coordinate spatial models that existed pre-transition [PAGE 1]. The third gray zone is asymmetric observability: NHL capability integrated via `hockeyR` includes `nhl_game_shifts` for shift and time-on-ice data, but the paper explicitly states “there is no PHF equivalent for this data” [PAGE 5]. Any downstream model requiring time-on-ice, shift frequency, or player load is therefore unverifiable for PHF. A fourth gray zone is small-sample goalie inference: the 2022 Isobel Cup box lists four goalies, two with zero shots against (`shots_against = 0`, `save_percent = 0` displayed as `0` though mathematically undefined) and two with 29 and 34 shots against [PAGE 3]. Comparing raw `save_percent` across these cells without Bayesian shrinkage or a minimum-shots threshold is a breakdown regime. The paper’s claim that “winning faceoffs in the women’s game has a more profound impact on winning than in the men’s game” is stated as prior research context but is not derived or cited within this document, so treating it as an established PHF causal weight is an unverified leap [PAGE 2]. Finally, attendance is returned as `NA` for the championship game in the schedule example, showing metadata sparsity even at the league-final level [PAGE 2].

Breakdown regimes. The ingestion pipeline breaks if the PHF API key rotates, the website schema changes again, or `has_play_by_play = FALSE` for a given `game_id` [PAGE 2]. The ELO recursion breaks under cold-start conditions (fewer than a critical number of faceoffs per skater), under non-stationary roster turnover between PHF seasons, and under shootout/tie resolution if faceoff outcomes are not correctly encoded as binary wins/losses. The team-box comparison breaks when `total_shots` and `total_scoring` are simple counts without shot quality or location covariates, rendering them insufficient statistics for win probability. All units are discrete counts (goals, shots, penalty minutes), probabilities in [0,1] (`save_percent`, `faceoff_percent`), calendar dates (`date_group`), and MM:SS clock strings (`time`) [PAGE 2–4]. No betting lines, spreads, totals, or moneylines are invoked anywhere in this derivation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operator definitions and units.

Let $\mathcal{G}$ denote the set of PHF games indexed by $g \in \mathbb{N}$ (the `game_id`). The schedule operator is
$$
\Phi_{\text{sched}}: \text{season} \mapsto \mathcal{D}_{\text{sched}} \subset \mathbb{N}^{46} \times \{\text{chr},\text{lgl},\text{dbl},\text{int}\}^{46},
$$
returning the 46-column metadata frame [PAGE 2]. The boxscore operator
$$
\Phi_{\text{team}}: g \mapsto (\text{team},\text{winner},\text{total\_scoring},\text{total\_shots},\text{successful\_power\_play},\text{penalty\_minutes},\text{faceoff\_percent},\text{period\_1\_scoring},\text{period\_2\_scoring},\text{period\_3\_scoring})
$$
[PAGE 2]. The player-box operator
$$
\Phi_{\text{player}}: g \mapsto (\mathcal{D}_{\text{skaters}} \in \mathbb{R}^{36 \times 23},\; \mathcal{D}_{\text{goalies}} \in \mathbb{R}^{4 \times 13})
$$
[PAGE 3]. The play-by-play operator
$$
\Phi_{\text{pbp}}: g \mapsto \mathcal{D}_{\text{pbp}} \in \mathbb{R}^{168 \times 78}
$$
[PAGE 3–4].

Units and domains. `home_score`, `away_score`, `total_scoring`, `total_shots`, `penalty_minutes`, `shots_against`, `goals_against`, `saves`, `shots_on_goal`, `blocks`, `giveaways`, `takeaways`, `powerplay_goals`, `shorthanded_goals` are count variables in $\mathbb{N}_0$ [PAGE 2–3]. `winner` is Boolean $\{\text{TRUE},\text{FALSE}\}$ [PAGE 2]. `save_percent` and `faceoff_percent` and `faceoffs_win_pct` are probabilities in $[0,1] \subset \mathbb{R}$ [PAGE 2–3]. `time` is a character string in MM:SS format, bounded by regulation period length (nominally 20:00) plus stoppage, with overtime and shootout as separate flags [PAGE 2]. `date_group` is an ISO date [PAGE 2]. `attendance` is $\mathbb{N}_0 \cup \{\text{NA}\}$ [PAGE 2].

Formal equation (rolling ELO faceoff rating). For skater $i$ facing opponent $j$ in faceoff event $e$,
$$
R_i^{(e+1)} = R_i^{(e)} + K\left[ S_i - E_i^{(e)} \right], \qquad
E_i^{(e)} = \frac{1}{1 + 10^{(R_j^{(e)} - R_i^{(e)})/400}},
$$
where $R$ is measured in rating points (dimensionless ELO scale), $K$ is points per faceoff (units: points/event), $S_i \in \{0,1\}$ is the observed faceoff outcome (1 = win, 0 = loss; ties are not faceoff-relevant), and $E_i \in [0,1]$ is the modeled win probability [PAGE 4]. Assumptions: (i) $K$ is constant across the PHF population; (ii) opponent rating $R_j$ is contemporaneously observed; (iii) faceoff outcomes are conditionally independent given ratings; (iv) no home-ice or fatigue term is included because `fastRhockey` supplies no PHF shift/time-on-ice data [PAGE 5]. Breakdown regimes: cold start when $N_i(\text{faceoffs}) < N_{\text{crit}}$ (rating not identifiable); non-stationarity under PHF roster churn and franchise movement [PAGE 1]; $K$-factor misspecification causing overreaction to small samples; and division-by-zero / undefined `save_percent` when `shots_against = 0`, as observed for goalies Mariah Fujimagari and Lovisa Selander (0 shots against, 0 goals against, 0 saves, `save_percent` printed as 0 though the ratio $0/0$ is undefined) [PAGE 3].

Save-percent formalism:
$$
\text{SV\%}_k = \frac{\text{saves}_k}{\text{shots\_against}_k}, \quad \text{shots\_against}_k > 0,
$$
undefined at $\text{shots\_against}_k = 0$ [PAGE 3]. Faceoff percentage formalism:
$$
\text{FOW\%}_i = \frac{\text{faceoffs\_won}_i}{\text{faceoffs\_won}_i + \text{faceoffs\_lost}_i}, \quad \text{denominator} > 0,
$$
[PAGE 3]. These are formal statistical estimators, not toy ratios; they carry no predictive weight unless embedded in a validated outcome model.

Page citations: [PAGE 1] Abstract and Introduction (PHF data unevenness, API loss, package motivation); [PAGE 2] Structure, installation, `phf_schedule`, Isobel Cup example (`game_id = 514869`), 46-column schedule frame, team-box inference; [PAGE 3] Player-box skaters (36×23) and goalies (4×13), `save_percent` cells with zero shots against; [PAGE 3–4] Play-by-play (168×78), `phf_pbp` columns, rolling ELO faceoff ratings figure; [PAGE 4] ELO rating description and within-game updating; [PAGE 5] NHL integration via `hockeyR`, explicit absence of PHF shift/time-on-ice equivalent; [PAGE 6] Conclusion (reliability, inconsistency handling, consolidation).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of `fastRhockey` is rooted in the SportsDataverse ecosystem and the preceding `hockeyR` package, which supplied NHL API wrappers later merged under the `fastRhockey` umbrella [PAGE 1, 5]. Dependency inheritance runs through `rvest` and `jsonlite` for API access and JSON parsing, and `stringr` for text play-by-play parsing [PAGE 1]. This makes `fastRhockey` a descendant of the broader R sports-analytics toolchain rather than a standalone greenfield system.

Historically, the Premier Hockey Federation (formerly the NWHL) underwent continuous year-to-year league and website changes [PAGE 1]. The transition from NWHL to PHF destroyed prior API access and eliminated granular event location data; previous scrapers broke and were not maintained [PAGE 1]. `fastRhockey` was therefore created as a restoration project: to recreate public access to PHF boxscores, rosters, and play-by-play after the legacy infrastructure failed [PAGE 1]. As the PHF gained broadcast distribution on ESPN, demand for public team and player statistics increased, motivating long-term maintenance [PAGE 1].

Multi-week traps. A multi-week analyst pipeline built on `fastRhockey` faces at least three temporal traps. Trap 1: schema drift. Because PHF data is “not always consistent and clean,” a function that parses `play_description` via `stringr` in week 1 may fail in week 4 if the PHF website alters event-string formatting [PAGE 1]. Trap 2: postseason/regular-season asymmetry. The schedule example demonstrates filtering by `game_type=='Playoffs'` to isolate the Isobel Cup; playoff games may carry different columns, overtime flags, or shootout indicators than regular-season games, so a model trained on regular-season `phf_pbp()` output and applied to playoff data risks distribution shift [PAGE 2]. Trap 3: goalie rotation and small-sample drift. Across a multi-week series, goalie `save_percent` is computed over varying `shots_against` denominators; a goalie with one 34-shot game and one 0-shot game will display volatile raw percentages unless the analyst enforces a minimum exposure filter [PAGE 3]. Trap 4: missing location data means any spatial model (shot distance, angle, pre-shot movement) that worked in men’s hockey with coordinate-rich data cannot be replicated for PHF through this package [PAGE 1]. Trap 5: the absence of PHF shift/time-on-ice data (unlike NHL `nhl_game_shifts`) removes the ability to model fatigue or line rotation across a week of games [PAGE 5]. These traps are retrospective in the sense that they are caused by prior infrastructure loss (NWHL API deprecation) and propagate forward into every subsequent week of PHF analysis.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. When PHF data are sparse, incomplete, or schema-broken, an analyst under cognitive load regresses to the most familiar reference class: NHL men’s hockey models. Because `fastRhockey` bundles NHL functions (`nhl_teams`, `nhl_game_boxscore`, `nhl_player_stats`, `load_nhl_pbp`) alongside PHF functions [PAGE 5], the analyst may import an NHL-derived expected-goal or faceoff-weight model into the PHF context without re-estimating coefficients on PHF events. This is crisis habit regression: under uncertainty, the default is to assume the men’s game’s feature weights transfer to the women’s game. The paper itself notes that prior research indicated faceoff winning has “a more profound impact on winning” in women’s hockey than in men’s hockey [PAGE 2], but it provides no PHF-specific coefficient, so adopting an NHL faceoff weight would be a regressive error masked as cross-sport generality.

Counter-trap. The counter-trap is the inverse over-correction: assuming that because `fastRhockey` enables rolling ELO faceoff ratings, those ratings are automatically valid for prediction [PAGE 4]. The ELO recursion assumes a constant $K$ and stationary opposition strength, but PHF rosters turn over, teams fold or relocate, and the number of faceoffs per skater per game is small relative to the full NHL schedule [PAGE 1, 4]. An analyst who treats the rolling ELO output as a stable player trait rather than a noisy, game-adaptive estimate commits the counter-trap of over-trusting a data product because the pipeline is “reliable and consistent” at the ingestion layer [PAGE 6]. Reliability of extraction does not imply validity of inference.

Clock. Two clocks operate simultaneously. The game clock is the discrete MM:SS event time within periods, bounded by regulation and overtime/shootout flags [PAGE 2]. The data-pipeline clock is the refresh cadence of the PHF API and the rolling recalculation of ELO ratings after each faceoff, “even within an individual game” [PAGE 4]. A recursive theory of mind must distinguish these: an analyst querying `phf_pbp()` mid-game sees only events up to the API’s last update, while the game clock continues; a model that conditions on “current” ELO ratings may be using ratings computed from a stale API snapshot. The singularity occurs when the pipeline clock and game clock desynchronize—e.g., a goal is scored on ice but the play-by-play row has not yet propagated—making any real-time inference causally misaligned with physical events.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto. The PHF play-by-play schema returned by `fastRhockey` contains player names, teams, event type, time, and on-ice rosters for goals, but the paper explicitly states that detailed location data was lost with the NWHL-to-PHF website transition and is no longer available [PAGE 1]. Therefore any model requiring spatial coordinates—shot distance to net, shot angle, pre-shot velocity, or expected-goal geometry—is vetoed at the physical data layer. The operator `phf_pbp()` returns 78 columns, none of which are documented as $x,y$ coordinates or shot location [PAGE 3–4]. Veto is absolute for spatial physics models unless an external data source is fused.

Biomechanical layer veto. `fastRhockey` has no PHF equivalent for NHL shift and time-on-ice data; the paper states “there is no PHF equivalent for this data” regarding `nhl_game_shifts` [PAGE 5]. Consequently, player load, shift frequency, ice-time distribution, and fatigue accumulation are unobservable. Any biomechanical model depending on time-on-ice, shift count, or recovery windows between shifts is vetoed. The boxscore supplies only aggregate counts (`penalty_minutes`, `shots_on_goal`, `blocks`) and goalie `minutes_played` as a character field [PAGE 3], which is insufficient for continuous biomechanical state estimation.

Weather/environmental layer. PHF games are played indoors at facilities such as AdventHealth Center Ice [PAGE 2]. The schedule frame includes `facility` and `facility_address` but no ice temperature, humidity, rink dimensions, or ice-quality metric [PAGE 2]. Because all games are indoor and environmental covariates are absent from the API, weather-based vetoes are moot for direct weather variables; however, facility-specific ice conditions remain unobservable and thus any model attributing outcome variance to rink-level environmental factors is vetoed at the metadata layer.

Adjudication proof. The veto set is complete over the observable schema: $\text{Veto}(\mathcal{M}) = \text{TRUE}$ if model $\mathcal{M}$ requires (a) event coordinates, (b) player shift/time-on-ice, (c) outdoor weather, or (d) facility ice-quality telemetry. Each prerequisite is absent from `fastRhockey` outputs [PAGE 1–5]. The only models not vetoed are those operating on discrete event counts, categorical play types, Boolean winners, probabilities bounded in [0,1] with sufficient denominators, and MM:SS time strings parsed into seconds. Any model crossing into spatial, biomechanical, or environmental domains is rejected by data-layer absence, independent of statistical power.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR = verifiable counterfactual veto scenarios. Each scenario specifies a perturbation, the veto condition, and a falsifiable prediction.

Scenario 1 (API key rotation / ingestion failure). Perturbation: the PHF API key is rotated or the PHF website schema changes, breaking `rvest`/`jsonlite` access. Veto condition: `phf_schedule(season=2022)` returns an empty frame or throws an HTTP error. Prediction: all downstream operators $\Phi_{\text{team}}, \Phi_{\text{player}}, \Phi_{\text{pbp}}$ return no rows because they are conditioned on a valid `game_id` drawn from $\Phi_{\text{sched}}$ [PAGE 2]. Verifiable test: run `install.packages("fastRhockey")`, set an invalid API option, and confirm `phf_schedule()` yields zero games for season=2022. Falsification: if the pipeline still returns the 2022 Isobel Cup game (`game_id = 514869`, Boston 4, Connecticut 2) under a rotated key, the ingestion-layer dependency assumption is false [PAGE 2].

Scenario 2 (ELO cold start and $K$-misspecification). Perturbation: rolling ELO faceoff ratings are computed for a skater with fewer than $N_{\text{crit}} = 20$ faceoffs in a PHF month using default $K=32$. Veto condition: rating variance $\text{Var}(R_i)$ exceeds a threshold (e.g., $>150$ points) driven by fewer than 20 faceoffs, indicating cold-start instability. Prediction: faceoff ELO ratings exhibit high week-to-week variance for low-exposure skaters and fail to predict subsequent faceoff outcomes out-of-sample compared to a simple shrinkage baseline. Verifiable test: extract all faceoffs from `phf_pbp()` across a month of PHF games, stratify skaters by faceoff count, and compute rolling ELO variance; skaters below $N_{\text{crit}}$ should show statistically larger variance than those above [PAGE 3–4]. Falsification: if low-exposure skaters’ ELO ratings are stable and predictive, the cold-start veto is not binding.

Scenario 3 (Goalie small-sample save-percent comparison). Perturbation: an analyst ranks goalies by raw `save_percent` after one game, including goalies with `shots_against = 0`. Veto condition: `shots_against_k = 0` makes $\text{SV\%}_k = 0/0$ undefined; the table displays `0` but mathematically the estimator is non-identifiable [PAGE 3]. Prediction: goalies with zero shots against are incorrectly ranked above goalies with high-volume, high-save performances (e.g., Katie Burt: 34 shots against, 2 goals against, SV% = 0.941; vs. Fujimagari/Selander: 0 shots against, displayed 0.000) [PAGE 3]. Verifiable test: query `phf_player_box(game_id=514869)$goalies`, compute raw SV% including zeros, and show that sorting descending places zero-exposure goalies at the bottom not because they performed poorly but because the estimator is undefined; a Bayesian shrinkage estimator with prior mean reorders them correctly. Falsification: if raw `save_percent` with zeros is shown to be a well-calibrated predictor of future goalie performance without shrinkage, the small-sample veto is invalid.
</RLVR_COUNTERFACTUAL_VETOES>