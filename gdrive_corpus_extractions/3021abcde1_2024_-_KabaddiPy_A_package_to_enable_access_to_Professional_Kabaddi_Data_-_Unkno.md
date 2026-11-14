---
source: "2024 - KabaddiPy A package to enable access to Professional Kabaddi Data - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2024"
pages: 12
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3370
---

<NATIVE_REASONING>
The user wants me to analyze a source paper about KabaddiPy, a Python package for professional Kabaddi data. I need to produce a structured response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully avoid any betting language. The paper is about Kabaddi data, not betting. So I must not mention odds, spreads, etc.

I need to cite page markers. The source text has page markers like "CMSAC REPRODUCIBLE RESEARCH 1", "2", etc. I should reference these as [PAGE 1], [PAGE 2], etc.

Let me draft content for each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to discuss:
- The data collection pipeline: web scraping from multiple sources (PKL website, Tableau, kabaddiadda, Global Sports Data Archive).
- Data cleaning and structuring into team overviews and player metrics.
- The play-by-play (PBP) event schema and how it enables causal inference about match turning points (e.g., Puneri Paltan vs Patna Pirates semi-final).
- Gray zones: missing zonal data for seasons 8-10, missing match breakdown for season 4, missing raider/defender skills for seasons 1-4.
- Singularity/breakdown: when data gaps prevent longitudinal analysis; when scraper breaks due to website changes; when play-by-play clock synchronization fails across halves.
- Multi-hop: from raw HTML/scraped tables → cleaned DataFrames → team/player metrics → strategic insights (zones, raider vs defender counts) → coaching decisions.
- Information units: events, timestamps (clock counting down from 20 minutes per half), scores as discrete integer vectors, player IDs as categorical identifiers.
- Probability units: successful raid percentage, tackle percentage, empty raid percentage.
- Assumptions: data cross-verified with official PKL website; scraper populated central repository; live data updated during PKL season.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define operators: scraped data S, cleaned data C, feature mapping Φ, play-by-play event stream E.
- Equations for raid success rate: P(success | n defenders) = N_success(n) / N_total(n).
- All-out: binary indicator A_t ∈ {0,1}, +2 points.
- Do-or-die: triggered after k=2 consecutive empty raids; penalty -1 if fail.
- Court dimensions: men 10m × 13m, women 8m × 12m; baulk line 3.75m from midline; bonus line 1m beyond baulk.
- Time: 2 halves × 20 min, 5 min halftime; raid clock τ_raid ≤ 30 s.
- Score progression: S(t) = S(t-1) + Δr + Δd + Δtechnical + Δallout.
- Page citations: [PAGE 1] abstract, [PAGE 2] court dimensions, [PAGE 3] methodology and tables, [PAGE 4] semi-final example, [PAGE 5] standings and team info, [PAGE 6] roster, [PAGE 7] player zones and RVD, [PAGE 8] limitations.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: traditional Indian sport, 1936 Berlin Olympics exhibition [PAGE 1], Asian Games 1990 [PAGE 1], Kabaddi World Cup 2004 [PAGE 1], PKL 2014 [PAGE 1], 2025 World Cup [PAGE 1].
- Scientific lineage: sportsdataverse (fastrhockey R package) [PAGE 1], Kabaddi quantitative ML models [PAGE 1], K-means clustering [PAGE 1], game theoretic analysis [PAGE 2].
- Multi-week traps: season-long roster changes, injuries, player form decay, substitution patterns; the trap of extrapolating season 5 standings to season 10 without accounting for player turnover; the trap of using aggregated season metrics to predict single-match outcomes when do-or-die and all-out events are path-dependent.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: teams reverting to default formations under pressure (e.g., after all-out or do-or-die).
- Counter-trap: opponent anticipating the regression and setting chain tackles/super tackles.
- Clock: 30-second raid breath constraint, 20-minute halves, countdown clock creating time-critical scarcity.
- Multi-level ToM: raider models defender's tackle probability; defender models raider's likely touch (toe vs hand vs kick); coach models substitution timing based on player fatigue and strong/weak zones.
- Example from paper: Patna Pirates' consecutive empty raids leading to do-or-die failure [PAGE 4].

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical: court dimensions, midline, baulk, bonus line; physical contact without protective gear; chain tackles; super tackles.
- Biomechanical: single-breath raid (30s max), chanting constraint, lung capacity, explosive sprint vs hold; defender grip strength for waist/back hold, ankle hold, thigh hold; raider leg thrust to escape.
- Weather: Kabaddi is typically indoor on mat; outdoor conditions could affect mat grip, but not detailed in paper. I should note that since it's an indoor mat sport, weather veto is low but not zero (venue humidity/temperature affecting mat surface).
- Veto adjudication: if a raider fails to cross baulk line, raid is illegal (veto). If defender tackles after raider returns, no point. Yellow/red card → technical point. All-out resets players and concedes 2 points.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll treat as verifiable counterfactual veto scenarios.
- Scenario 1: Data gap veto: Zonal data missing for seasons 8-10 [PAGE 8]. Prediction: Any model trained on zone strength for those seasons will have systematic bias; veto if zone_type='strong'/'weak' requested for S8-S10.
- Scenario 2: Clock/breath veto: Raid exceeds 30s or raider stops chanting. Prediction: event flagged as unsuccessful/out-of-bounds; model must not award touch points post-exhale.
- Scenario 3: All-out state veto: After all-out, all players reset; any carryover of "player on mat" state from pre-all-out is invalid. Prediction: state transition matrix must reset defender/raider counts to 7v7 (minus suspended cards) post-all-out.
- Need verifiable: can be checked against pkl.load_pbp() event logs.

Word count: Need >=1000 words total across sections, with THINK_TRACE >=400 words.

Let me start writing, ensuring no betting terms. Use LaTeX. Cite [PAGE N].

I need to be careful about verbatim quotes. I'll include a few short verbatim quotes with page markers.

Let's draft.

THINK_TRACE: >400 words. I'll write about 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, citations.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total should be >1000.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The KabaddiPy pipeline executes a multi-hop transformation from unstructured web sources to decision-relevant features. Hop 1 is ingestion: the package scrapes the official PKL website, ProKabaddi.com, SportsKPI Tableau dashboards, kabaddiadda.com, and the Global Sports Data Archive, as stated on [PAGE 3] in the Methodology/Data Collection section. Play-by-play and player statistics originate primarily from ProKabaddi.com; team-level data comes from the Tableau Dashboard; partial auction data is scraped from kabaddiadda. Hop 2 is cleaning and centralization: scraped tables are populated into a GitHub repository (github-kabaddi-data) and continuously updated during the PKL season. Hop 3 is structuring into team overviews and player metrics, filterable by season, with players classified as raiders or defenders [PAGE 1]. Hop 4 is feature derivation: zone strength maps, raider-versus-defender-count success rates, tackle percentages, all-out counts, and card counts. Hop 5 is application: causal attribution of match turning points and strategic lineup construction.

The paper demonstrates Hop 5 through a concrete match-level causal drilldown. Using season 10 semi-final Match_ID 3163 (Puneri Paltan vs Patna Pirates), the point progression plot shows Patna Pirates stagnating between events 20 and 35, unable to recover [PAGE 4]. Retrieving the play-by-play event stream reveals the mechanism: a sequence of empty raids, an unsuccessful do-or-die raid, failed tackles, and substitutions that concede a 4-point lead to Puneri Paltan [PAGE 4]. This establishes that the PBP schema—containing event_no, event_text, clock, raider_id, defender_id, score, raid_touch_points, defending_capture_points, super_raid, super_tackle, do_or_die, and all_out flags—is sufficient to resolve gray-zone ambiguity about *why* a team collapsed, provided the event log is complete and temporally aligned.

Gray zones and breakdown regimes are explicitly documented. On [PAGE 8], the Limitations section states that zonal data for seasons 8, 9, and 10 and match breakdown data for season 4 cannot be accessed publicly, and raider/defender skill metrics plus success-rate-by-defender-count are unavailable for seasons 1 through 4. This creates a singularity regime: any longitudinal model spanning seasons 1–10 will have missing covariates for early seasons and missing spatial covariates for recent seasons. A second breakdown regime is scraper fragility: because the module depends on external website HTML structure, a redesign of ProKabaddi.com or the Tableau Dashboard invalidates the parsing functions unless the repository is updated. A third regime is clock synchronization: the paper notes the clock counts down from 20 minutes for each half [PAGE 4], so any model that treats clock as absolute match time rather than half-relative time will misalign raid urgency and do-or-die triggers.

Information units are discrete and combinatorial. The raid is bounded by τ_raid ≤ 30 seconds and a single-breath constraint [PAGE 2]. Score increments are integer-valued: touch points, bonus points, technical points from cards, and all-out awards of two points [PAGE 2]. Player and team identifiers are categorical keys; positions on the mat are categorical zones (midline, baulk line, bonus left/right) [PAGE 7]. Probability units are conditional frequencies: P(successful raid | n defenders), P(empty raid), P(successful tackle) [PAGE 7]. Assumptions underlying validity include cross-verification with the official PKL website [PAGE 3] and the premise that scraped tables preserve semantic equivalence across seasons despite schema drift.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, SI units, page citations, and breakdown regimes.

Define the raw scraped corpus as \(\mathcal{S} = \{s^{(m)}\}_{m=1}^{M}\), where each \(s^{(m)}\) is a table or event log from source \(m \in \{\text{PKL, ProKabaddi, Tableau, kabaddiadda, GSDA}\}\) [PAGE 3]. The cleaning operator \(\mathcal{C}: \mathcal{S} \to \mathcal{D}\) produces a structured repository \(\mathcal{D}\) with team, player, and match entities. The feature operator \(\Phi: \mathcal{D} \to \mathcal{F}\) maps to the feature space \(\mathcal{F}\).

Court geometry [PAGE 2]:
- Men’s court: \(10\,\text{m} \times 13\,\text{m}\); women’s court: \(8\,\text{m} \times 12\,\text{m}\).
- Midline divides the court into two halves.
- Baulk line at \(d_{\text{baulk}} = 3.75\,\text{m}\) from the midline.
- Bonus line at \(d_{\text{bonus}} = 3.75 + 1.0 = 4.75\,\text{m}\) from the midline, active only when \(\ge 6\) defenders are on the mat.

Temporal structure [PAGE 2, PAGE 4]:
- Match duration: \(T_{\text{match}} = 2 \times 20\,\text{min} + 5\,\text{min halftime}\).
- Raid clock: \(\tau_{\text{raid}} \in [0, 30]\,\text{s}\), single-breath constraint.
- Clock counts down within each half; half-relative time \(t_h \in [0, 1200]\,\text{s}\).

Event stream \(\mathcal{E}\): each event \(e_i\) is a tuple
\[
e_i = (\text{event\_no}_i,\ \text{event\_type}_i,\ \text{clock}_i,\ \text{raider\_id}_i,\ \text{defender\_id}_i,\ \text{score}_i,\ \mathbf{a}_i)
\]
where \(\mathbf{a}_i\) is the attribute vector containing \(\text{raid\_touch\_points}\), \(\text{defending\_capture\_points}\), \(\text{super\_raid}_i \in \{0,1\}\), \(\text{super\_tackle}_i \in \{0,1\}\), \(\text{do\_or\_die}_i \in \{0,1\}\), and \(\text{all\_out}_i \in \{0,1\}\) [PAGE 4].

Raid success probability conditioned on defender count \(n \in \{1,\dots,7\}\):
\[
P(\text{success} \mid n) = \frac{N_{\text{successful}}(n)}{N_{\text{total}}(n)}, \qquad
P(\text{empty} \mid n) = \frac{N_{\text{empty}}(n)}{N_{\text{total}}(n)}.
\]
The paper reports empirical rows for Maninder Singh (PlayerID 143): at \(n=7\), \(P(\text{success}) = 46.60\%\); at \(n=2\), \(P(\text{success}) = 80.80\%\) [PAGE 7]. This non-monotonicity across \(n\) is a direct output of \(\Phi\) and violates any assumption that defensive pressure scales monotonically with defender count.

Score transition operator:
\[
S(t) = S(t-1) + \Delta r_t + \Delta d_t + \Delta \text{tech}_t + 2 \cdot \mathbb{I}(\text{all\_out}_t),
\]
where \(\Delta r_t\) are raiding points, \(\Delta d_t\) are defending/tackle points, and \(\Delta \text{tech}_t\) are card-derived technical points (yellow/red card awards one technical point to the opposition) [PAGE 2].

Do-or-die trigger: after \(k=2\) consecutive empty raids, the next raid is do-or-die; failure concedes one point [PAGE 2]. Formally, let \(E_t = \mathbb{I}(\text{empty raid at } t)\). Then
\[
\text{do\_or\_die}_t = \mathbb{I}\left(\sum_{j=t-2}^{t-1} E_j = 2\right).
\]

Breakdown/singularity regimes:
1. Missing zonal data for seasons 8–10 and match breakdown for season 4 [PAGE 8] \(\Rightarrow\) \(\Phi_{\text{zone}}\) undefined for those seasons.
2. Missing raider/defender skill and success-rate-by-defenders for seasons 1–4 [PAGE 8] \(\Rightarrow\) \(P(\text{success} \mid n)\) undefined for early seasons.
3. Scraper dependency on external HTML [PAGE 3] \(\Rightarrow\) \(\mathcal{C}\) fails under source-site schema drift without repository updates.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week analytical traps.

Kabaddi’s institutional lineage begins as a traditional Indian contact sport, exhibited at the 1936 Berlin Olympics and becoming a regular Asian Games feature in 1990 [PAGE 1]. The Kabaddi World Cup launched in 2004, with England set to host the 2025 edition involving over sixteen international teams [PAGE 1]. The Pro Kabaddi League (PKL), founded in 2014, now draws 230 million viewers, second only to the IPL in India, and Star Sports acquired media rights for $120 million over five years [PAGE 1]. Over thirty nations, including the United States, Japan, South Korea, and Iran, field national teams [PAGE 1].

The scientific lineage connects KabaddiPy to prior analytical work that was historically bottlenecked by data access. Earlier studies relied on manual web scraping from the official PKL website, creating high barriers to entry [PAGE 1]. The paper cites machine-learning approaches to PKL modeling [PAGE 1], K-means clustering and descriptive analytics for team and player recommendation [PAGE 1], and game-theoretic analysis of Kabaddi [PAGE 2]. It also positions itself within the sportsdataverse tradition, referencing the fastrhockey R package for hockey as an analog for open-source sports data infrastructure [PAGE 1].

Multi-week traps arise when analysts ignore the path-dependent structure of a Kabaddi season. Trap 1: roster volatility. Player inclusions, exclusions, suspensions (yellow/red cards), and substitutions change the effective 7v7 state week to week [PAGE 2, PAGE 4]. Using season-average tackle percentage to predict a specific knockout match ignores card suspensions and all-out resets that alter on-mat personnel. Trap 2: form decay and zone drift. A team’s strong and weak zones on the mat are season-specific [PAGE 6]; extrapolating Season 5 Bengal Warriorz zone maps to a later season assumes stationary spatial preferences, which player transfers invalidate. Trap 3: do-or-die chaining. Because two consecutive empty raids trigger a do-or-die raid with a one-point penalty for failure [PAGE 2], short-term sequences are autocorrelated. A model treating raids as i.i.d. events misses the crisis spiral visible in the Patna Pirates semi-final collapse, where consecutive empty raids culminated in an unsuccessful do-or-die and a conceded point [PAGE 4].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and the clock.

Recursive theory of mind in Kabaddi operates across three nested levels: the raider modeling the defender, the defender modeling the raider, and the coach modeling both under temporal pressure. The base level is the raid itself: a raider enters the opponent’s half with \(\tau_{\text{raid}} \le 30\,\text{s}\) and must tag defenders and return in a single breath [PAGE 2]. The raider forms a belief \(P(\text{tackle} \mid \text{formation}, n_{\text{defenders}})\) and selects a touch modality—toe touch, hand touch, front/side kick, reverse kick, leg thrust, or dubki—conditioned on that belief [PAGE 3]. The defender simultaneously forms \(P(\text{touch} \mid \text{raider type}, \text{zone})\) and selects a defensive move: waist/back hold, ankle hold, thigh hold, block, dash, or chain tackle [PAGE 3].

Crisis habit regression occurs when a team under pressure reverts to default, low-variance behaviors. After an all-out (which eliminates all opposing players and concedes two points, forcing a reset) [PAGE 2], or after consecutive empty raids that trigger do-or-die [PAGE 2], teams may regress to conservative raiding (empty raids to avoid risk) or predictable tackle formations. The paper shows this directly: Patna Pirates, stuck between events 20 and 35, produced repeated empty raids and an unsuccessful do-or-die, unable to tackle the offense and conceding momentum [PAGE 4]. This is habit regression under crisis: the team stopped varying its raid execution and fell into a pattern the opponent could anticipate.

The counter-trap is the opponent’s second-order response: anticipating the regression, Puneri Paltan increased raid success and tightened defense, converting the crisis into a 4-point lead [PAGE 4]. Defensive coordination—chain tackles by two or more defenders and super tackles by shorthanded units—exploits the raider’s predictable return path [PAGE 2].

The clock is the third recursive layer. The 30-second single-breath raid creates a hard deadline that compresses decision time; the 20-minute half countdown creates match-level scarcity [PAGE 2, PAGE 4]. As \(t_h \to 0\) in a half, the value of a successful raid rises nonlinearly, and the optimal policy shifts from point accumulation to clock management. A coach’s substitution decision (e.g., replacing a tired raider mid-raid sequence, as seen when Abinesh Nadarajan came in for Akash Shinde) reflects a third-order model: predicting how fatigue changes \(P(\text{success} \mid n)\) over the remaining clock [PAGE 4].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof with adjudication rules.

Physical layer: Kabaddi is played on a rectangular mat with no ball and no protective gear [PAGE 1]. The midline, baulk line at \(3.75\,\text{m}\), and bonus line at \(4.75\,\text{m}\) from the midline are hard geometric constraints [PAGE 2]. A raid is illegal—and vetoed—if the raider fails to cross the baulk line without making a tag; no points are scored [PAGE 2]. If defenders tackle the raider after the raider has already returned to their own half, the tackle is invalid. A dash that pushes the raider out of bounds earns a point for the defense [PAGE 3]. These physical rules are absolute vetoes independent of statistical models.

Biomechanical layer: the raid must be completed in one breath while chanting “kabaddi,” imposing \(\tau_{\text{raid}} \le 30\,\text{s}\) and a continuous phonation constraint [PAGE 2]. If the raider stops chanting (exhales) before returning, the raid fails and the defense scores [PAGE 2]. Defender holds—waist/back, ankle, thigh—require grip strength and dynamic pinning against a mid-air raider [PAGE 3]. The raider’s leg thrust is a biomechanical escape mechanism when trapped [PAGE 3]. A super tackle by a shorthanded defending team awards additional value, reflecting the biomechanical disadvantage of fewer defenders [PAGE 2]. Any model that awards points after the breath clock expires or after the raider crosses the midline back to safety violates the biomechanical veto.

Weather layer: standard Kabaddi is played indoors on a mat; the source does not describe outdoor weather effects [PAGE 2]. However, venue-level factors such as mat friction, ambient temperature, and humidity can indirectly affect grip for ankle/waist holds and sprint traction. Since the data pipeline contains no weather covariates, any cross-venue comparison that ignores mat condition introduces an unmodeled veto risk. Adjudication rule: if mat surface or environmental metadata is absent, spatial zone strength inferences must be flagged as venue-confounded.

Card vetoes: green (warning), yellow (temporary suspension), and red (ejection) cards mirror soccer sanctions; yellow or red cards award one technical point to the opposition [PAGE 2]. A suspended player creates a temporary 6v7 or lower state, changing \(n\) in \(P(\text{success} \mid n)\) and invalidating full-strength assumptions until the player is revived or the suspension ends.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios and predictions.

Scenario 1: Zonal data absence veto. Verifiable condition: a query for zone_type='strong' or 'weak' for seasons 8, 9, or 10 returns null because zonal data is not publicly accessible [PAGE 8]. Counterfactual: if a reinforcement-learning policy conditions on spatial zone strength for these seasons, it trains on imputed or missing data. Prediction: any model outputting zone-based lineup recommendations for S8–S10 will have systematically higher out-of-sample error than for seasons with complete zonal data, because the true strong/weak zones (e.g., midline vs bonus line vs baulk line preferences documented for Season 5 players [PAGE 7]) are unobserved.

Scenario 2: Breath-clock expiration veto. Verifiable condition: in pkl.load_pbp(), any raid event with clock timestamp indicating \(\tau_{\text{raid}} > 30\,\text{s}\) or where event_text indicates the raider stopped chanting before return is flagged unsuccessful [PAGE 2, PAGE 4]. Counterfactual: a policy that ignores the 30-second breath constraint may award touch points to raids that expired. Prediction: in play-by-play logs, events where clock exceeds 30 seconds since raid initiation will correspond to 'Unsuccessful Raid' or out-of-bounds outcomes; a model violating this veto will overestimate raider expected points by exactly the touch-point value of post-expiration tags.

Scenario 3: All-out state reset veto. Verifiable condition: an all-out event eliminates all opposing players, forces a reset, and concedes two points [PAGE 2]. Counterfactual: a state-transition model that carries pre-all-out defender/raider counts into the post-all-out possession violates the reset rule. Prediction: immediately after an all-out event in the event stream, the on-mat defender count returns to 7 (modulo card suspensions), and the next raid begins from a neutral formation; any model that preserves pre-all-out fatigue, tackle-count, or defender-position state will mispredict the success probability of the first post-reset raid.
</RLVR_COUNTERFACTUAL_VETOES>