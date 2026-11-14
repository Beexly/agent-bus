---
source: "Ayubjon-decontam.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5856
---

<NATIVE_REASONING>
The user is asking me to act as the GSE + GSI Frontier Reasoning Foundry and process a source document about "Ayubjon/decontam" — a contamination detection CLI tool. They want me to output specific XML sections with strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE 1] markers and verbatim quotes since source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Important constraints:
- No betting lines whatsoever.
- Formal LaTeX equations, units, assumptions, singularity/breakdown regimes.
- Cite [PAGE 1] and verbatim quotes.
- Total >= 1000 words.
- THINK_TRACE alone >= 400 words.
- The content should be about applying the decontam pattern to GSE (Game Sports Evaluation? or some sports analytics framework) year-split enforcement, temporal identity keys, contamination gates, etc.

Wait, the user says "PAGES: 1" and "SOURCE TEXT" is provided. So I should cite [PAGE 1] and quote verbatim from the provided text.

Let me plan the structure:

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to think through:
- The source text describes a CLI that detects benchmark/eval contamination via n-gram overlap.
- GSE lens says replace text n-grams with temporal identity keys: (game_id, feature_window) pairs.
- Output contract: cleaned dataset + leak report.
- Year-split enforcement: input candidate training frame, output (cleaned frame, contamination report listing every dropped row and why).
- Gate that only warns gets ignored; gate that produces cleaned artifact gets used.
- Honest scope note: n-gram overlap wrong for tabular sports data because different games can share stat lines legitimately. Don't copy metric; copy gate position and cleaned-output contract. Real check is temporal: does any training row's feature window or label touch validation/live-check period.
- Pair with NeMo Curator: production vehicle, decontam is 50-line mental model.
- Verdict: REBUILD — reimplement detect→report→emit-cleaned gate with temporal identity keys for year splits (MIT).
- 4 tricks: wiki, diagram, stars, code links.

I need to do multi-hop derivation:
1. Source artifact is a hobby JS repo, 1 star, single commit, MIT license.
2. Pattern: shingle both sets into n-grams, intersect, report and remove.
3. Transfer to GSE: temporal identity keys instead of text shingles.
4. Formalize the contamination condition: ∃ r_train ∈ Train, r_val ∈ Val such that key(r_train) ∩ key(r_val) ≠ ∅, where key = (game_id, feature_window).
5. Gray zones: overlapping feature windows across year boundaries, label leakage from future games, partial season carryover, playoff vs regular season boundaries, truncated windows at split edge.
6. Breakdown regimes: when feature window length > gap between train/val, when game_id collision across seasons (if not season-qualified), when label depends on future events.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define sets: Train T, Eval E.
- N-gram shingle function S_n(text) from source.
- Temporal key function K(g, w) = (game_id, feature_window_start, feature_window_end) or (game_id, feature_window).
- Contamination predicate C(t, e) = 1[K(t) ∩ K(e) ≠ ∅].
- Leak set L = {t ∈ T : ∃ e ∈ E, C(t,e)=1}.
- Cleaned set T' = T \ L.
- Report R = {(t, reason) : t ∈ L}.
- Units: game_id (categorical identifier), feature_window (ISO 8601 interval or Unix timestamp seconds [s]), label horizon (seconds).
- Assumptions: game_id globally unique per season or globally; feature windows are closed intervals; no relabeling after split.
- Singularity/breakdown: if feature_window spans the split boundary (t_start < split < t_end), row is inherently contaminated regardless of game_id overlap. If two different games share identical stat lines but different game_ids, n-gram overlap would falsely flag (scope note says don't copy metric). If label y(t) depends on events in E, label leakage.
- Page citations: [PAGE 1] for all source quotes.

RETROCAUSAL_GENEALOGY:
- Historical lineage: GPT-3 paper-style 13-gram overlap checks (cited in source). Brown et al. 2020 language model contamination. N-gram overlap detection in eval sets.
- NeMo Curator: production vehicle for data curation/decontamination at scale.
- Ayubjon/decontam: 50-line mental model, MIT, hobby artifact.
- GSE adaptation: temporal identity keys, year splits.
- Multi-week traps: rolling windows that straddle splits, bye weeks, international games, rescheduled games, preseason vs regular season, carryover fatigue/injury status across split boundary.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under pressure, analysts revert to simple warning-only gates because implementing cleaned-output contract is engineering cost.
- Counter-trap: the gate produces an artifact; downstream consumers cannot ignore a missing row. If the pipeline expects N rows and gets N-k, it breaks visibly, forcing acknowledgment.
- Clock: year-split enforcement has a hard deadline (season start). The cleaned frame must be emitted before model training begins; otherwise contamination leaks silently.
- Theory of mind of the pipeline: the data engineer assumes "if I just flag it, they'll fix it"; the modeler assumes "the split is clean because I used year < 2023". Both are wrong without enforced emit-cleaned contract.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: game_id uniqueness, stadium/time conflicts. Two games cannot occupy same (game_id, feature_window) if game_id is primary key.
- Biomechanical layer: player-level feature windows (e.g., workload over last 7 days) crossing the train/val boundary cause physiological carryover. Veto if any player's window intersects both T and E.
- Weather layer: weather features derived from a window that includes eval-period weather in training row. Veto if weather observation timestamp > split.
- Proof: show that if any of these layers intersects, the row is dropped and reported. Formal veto condition: V(t) = 1 if ∃ layer ℓ such that window_ℓ(t) ∩ E_period ≠ ∅.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions. RLVR likely means scenarios that can be verified programmatically.
1. Scenario: Training row feature window ends exactly at split boundary T=2023-12-31 23:59:59, eval starts 2024-01-01 00:00:00. No overlap. Prediction: row retained, no report entry.
2. Scenario: Training row feature window extends 1 second into eval period (overlap by 1s). Prediction: row dropped, report entry with reason "temporal_boundary_violation".
3. Scenario: Two different games share identical stat lines (same points, yards) but different game_ids; one in train, one in eval. Prediction under n-gram metric: false positive contamination. Prediction under temporal key metric: no contamination (retained) because game_id differs. This tests the scope note.
4. (Bonus) Label y(t) depends on a game occurring after split but feature window is pre-split. Prediction: dropped for label leakage.

Need exactly 3, so I'll pick 3 strong ones.

Word count check: Need >=1000 words total. THINK_TRACE >=400 words. Let me ensure each section is substantial.

Let's draft carefully.

Tone: Technical, rigorous, no betting lines.

Citations: Use [PAGE 1] after every verbatim quote or reference to source text. Verbatim quotes must be exact.

Verbatim quotes from source:
- "A zero-dependency CLI + library that detects benchmark/eval data contamination against a training corpus via n-gram overlap, flags leaks, and emits a *cleaned* dataset."
- "GPT-3-paper-style 13-gram overlap checks"
- "License: MIT (verified). 1 star, 0 forks, single commit (2026-06-17), JavaScript — a hobby artifact, not maintained tooling. Included for the pattern, not the package."
- "The whole method is: shingle both sets into n-grams, intersect, report and remove."
- "GSE's version replaces text n-grams with *temporal identity keys*: (game_id, feature_window) pairs."
- "the tool doesn't just warn — it **emits a cleaned dataset** plus a leak report."
- "Our year-split enforcement should do exactly this: input = candidate training frame, output = (cleaned frame, contamination report listing every dropped row and why)."
- "A gate that only warns gets ignored; a gate that produces the cleaned artifact gets used."
- "n-gram overlap is the wrong test for tabular sports data (two different games can share stat lines legitimately). Don't copy the metric; copy the gate position and the cleaned-output contract."
- "The real check for us is temporal: does any training row's feature window or label touch the validation/live-check period."
- "Pair with the NeMo Curator dossier: Curator is the production vehicle, decontam is the 50-line mental model."
- "**REBUILD** — reimplement the detect→report→emit-cleaned gate with temporal identity keys for our year splits (MIT)."

LaTeX equations:
Let \(\mathcal{T}\) be candidate training frame, \(\mathcal{E}\) be eval/live frame.
Let \(k: \text{Row} \to \mathcal{K}\) where \(\mathcal{K} = \text{GameID} \times \mathbb{I}\) and \(\mathbb{I}\) is set of closed time intervals \([t_s, t_e] \subset \mathbb{R}\) measured in seconds since Unix epoch [s].
Contamination predicate:
\[
C(r, r') = \mathbb{1}\{ k(r) \cap k(r') \neq \emptyset \}
\]
Actually intersection of keys: keys are pairs. Intersection means same game_id AND overlapping feature_window? Or either? The source says "temporal identity keys: (game_id, feature_window) pairs". Contamination if any training row's feature window or label touches validation/live-check period. So perhaps:
\[
C(r) = \mathbb{1}\{ \exists r' \in \mathcal{E} : \text{game\_id}(r) = \text{game\_id}(r') \land [t_s(r), t_e(r)] \cap [t_s(r'), t_e(r')] \neq \emptyset \}
\]
Plus label leakage:
\[
L(r) = \mathbb{1}\{ \text{label\_horizon}(r) > t_{\text{split}} \}
\]
Leak set:
\[
\mathcal{L} = \{ r \in \mathcal{T} : C(r) \lor L(r) \}
\]
Cleaned frame:
\[
\mathcal{T}' = \mathcal{T} \setminus \mathcal{L}
\]
Report:
\[
\mathcal{R} = \{ (r, \rho(r)) : r \in \mathcal{L} \}
\]
where \(\rho(r)\) is reason string.

Breakdown/singularity:
- If \(t_e(r) > t_{\text{split}}\) while \(t_s(r) < t_{\text{split}}\), the row straddles the split; inherently contaminated.
- If game_id is not globally unique across seasons (e.g., reused IDs), false negatives possible.
- If feature window length \(w = t_e - t_s\) exceeds the gap between \(\mathcal{T}\) and \(\mathcal{E}\), carryover contamination is guaranteed for boundary rows.

Units:
- game_id: categorical, dimensionless identifier.
- feature_window: interval in seconds [s], or ISO 8601.
- label_horizon: seconds [s] from row timestamp to label event.
- n: dimensionless (13-gram in source).

No betting lines. I must avoid words like spread, total, moneyline, odds, bet, wager, etc. Also avoid "line" in betting context. "Line" as in line of code is fine but might be risky; better avoid.

Let's write.

THINK_TRACE: I'll write ~500 words. Cover multi-hop: source → pattern → GSE transfer → formalization → gray zones → output contract → veto logic → RLVR scenarios.

Gray-zone audit: The source is a hobby artifact (1 star, single commit). Using it as mental model is fine but productionizing requires NeMo Curator. Gray zone: n-gram overlap on tabular data yields false positives because different games can share stat lines. Also "feature window or label touch validation/live-check period" defines touch but doesn't specify closed vs open intervals at boundary. Need exact boundary convention: split at \(t_{\text{split}}\), train \(t_e \le t_{\text{split}}\), eval \(t_s > t_{\text{split}}\). If equality allowed on both sides, ambiguous.

Let's draft all sections now, ensuring word count.

I will write in one block with XML tags.

Need to be careful: The user wants exact XML section names. I'll output only those sections, no extra text outside? Probably okay to just output the sections. I'll include all six.

Let's count words roughly as I write.

THINK_TRACE:

Start: The source document [PAGE 1] describes Ayubjon/decontam as “A zero-dependency CLI + library that detects benchmark/eval data contamination against a training corpus via n-gram overlap, flags leaks, and emits a *cleaned* dataset.” That sentence establishes the core output contract: detection plus emission. The GSE lens [PAGE 1] states: “GSE's version replaces text n-grams with *temporal identity keys*: (game_id, feature_window) pairs.” This is a multi-hop transfer: the source metric (character or word n-gram shingles) is discarded, but the gate position and the emit-cleaned artifact contract are preserved. The first derivation hop is to define the shingle function from the source, \(S_n(\text{text})\), and replace it with a temporal key function \(K(r) = (g(r), W(r))\), where \(g(r)\) is the game identifier and \(W(r) = [t_s, t_e] \subset \mathbb{R}_{\ge 0}\) is the feature-observation window in seconds since the Unix epoch. The second hop is to define the contamination predicate not as set intersection of shingles but as temporal-touch plus identity-match: \(C(r, r') = \mathbb{1}\{ g(r) = g(r') \land W(r) \cap W(r') \neq \emptyset \}\). However, the source’s honest scope note [PAGE 1] warns that “n-gram overlap is the wrong test for tabular sports data (two different games can share stat lines legitimately),” so the metric must not be ported. The real check [PAGE 1] is “temporal: does any training row's feature window or label touch the validation/live-check period.” This adds a second predicate, label leakage \(L(r) = \mathbb{1}\{ h(r) > t_{\text{split}} \}\), where \(h(r)\) is the label horizon. The gray zone emerges at the boundary: if \(t_s(r) < t_{\text{split}} < t_e(r)\), the row straddles the split and is inherently contaminated regardless of game_id overlap. Another gray zone is game_id non-uniqueness across seasons; if identifiers are recycled, the key collision test yields false negatives unless qualified by season or a global namespace. A third gray zone is the distinction between “warn” and “emit.” The source [PAGE 1] says “A gate that only warns gets ignored; a gate that produces the cleaned artifact gets used.” Thus the pipeline must materialize \(\mathcal{T}' = \mathcal{T} \setminus \mathcal{L}\) and a report \(\mathcal{R}\) listing every dropped row and reason. The final hop pairs this 50-line mental model [PAGE 1] with NeMo Curator as the production vehicle, meaning the gate is a specification first and a Scala/Python Spark job second. Breakdown regimes: window length exceeding train/eval gap, recycled game_ids, open-interval boundary ambiguity, and label-horizon leakage through future fixtures.

That's about 350 words. Need >=400. I'll expand a bit more on gray zones and multi-hop.

Continue: Expand on multi-hop: source repo is MIT, 1 star, single commit (2026-06-17), JavaScript — hobby artifact. So we don't import code; we import the detect→report→emit pattern. The GSE implementation must define exact interval semantics: closed vs open at endpoints. If \(W(r)\) is closed on both ends and the split is a single instant, a row ending exactly at \(t_{\text{split}}\) and an eval row starting exactly at \(t_{\text{split}}\) would intersect at a point measure-zero in continuous time but representable in discrete seconds. The convention must be declared: train windows satisfy \(t_e \le t_{\text{split}}\), eval windows satisfy \(t_s > t_{\text{split}}\). Any violation triggers the veto. This precision is absent in the source’s prose [PAGE 1], which says “shingle both sets into n-grams, intersect, report and remove,” but n-gram intersection is discrete and unambiguous; temporal interval intersection is not unless boundaries are fixed. The gray-zone audit concludes that the contract’s value is not in the n-gram metric but in forcing every dropped row to be accounted for in a report, converting silent leakage into an auditable artifact.

That should push THINK_TRACE well over 400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Include formal LaTeX, units, page citations, breakdown.

Define:
- \(\mathcal{T}\): candidate training frame, rows \(r\).
- \(\mathcal{E}\): eval/live frame.
- \(g: \text{Row} \to \text{GameID}\), categorical, dimensionless.
- \(W(r) = [t_s(r), t_e(r)]\), interval in seconds [s] since Unix epoch 1970-01-01T00:00:00Z.
- \(t_{\text{split}}\): year-split boundary in seconds [s].
- \(h(r)\): label horizon in seconds [s], time from row construction to label event.
- Key \(K(r) = (g(r), W(r))\).
- Contamination predicate:
\[
\mathcal{C}(r) = \mathbb{1}\Big( \exists r' \in \mathcal{E} : g(r) = g(r') \land W(r) \cap W(r') \neq \emptyset \Big) \lor \mathbb{1}\big( h(r) > t_{\text{split}} - \tau(r) \big)
\]
Wait, label horizon needs careful definition. If row timestamp is \(t_{\text{row}}(r)\) and label event at \(t_{\text{label}}(r)\), then \(h(r) = t_{\text{label}}(r) - t_{\text{row}}(r)\). Label leakage if \(t_{\text{label}}(r) > t_{\text{split}}\). Simpler:
\[
\mathcal{L}(r) = \mathbb{1}\{ t_{\text{label}}(r) > t_{\text{split}} \}
\]
But rows in train should have labels before split? Usually labels are outcomes of games in train window. If label depends on future game, leak.
I'll define \(t_{\text{label}}(r)\) as timestamp of label-determining event. Leak if \(t_{\text{label}}(r) > t_{\text{split}}\).

Leak set:
\[
\mathcal{L} = \{ r \in \mathcal{T} : \mathcal{C}(r) \lor \mathcal{L}(r) \}
\]
Cleaned:
\[
\mathcal{T}' = \mathcal{T} \setminus \mathcal{L}
\]
Report:
\[
\mathcal{R} = \{ (r, \rho(r)) : r \in \mathcal{L} \}, \quad \rho(r) \in \{\text{game\_id\_overlap}, \text{window\_straddle}, \text{label\_leak}, \text{recycled\_id}\}
\]

Units:
- Time: seconds [s].
- Window width: \(w(r) = t_e(r) - t_s(r)\), seconds [s].
- n: dimensionless (source uses 13-gram [PAGE 1]).
- game_id: dimensionless categorical identifier.

Assumptions:
1. game_id is unique within the namespace used (or globally unique). [PAGE 1] notes “two different games can share stat lines legitimately,” implying game_id is the discriminator, not stat vectors.
2. Feature windows are constructed solely from observations at or before \(t_e(r)\).
3. Labels are determined by events at \(t_{\text{label}}(r)\).
4. \(t_{\text{split}}\) is a single instant per year-split.

Breakdown/singularity regimes:
- Boundary straddle: \(t_s(r) < t_{\text{split}} < t_e(r)\) guarantees \(r \in \mathcal{L}\).
- Zero-gap adjacency: if \(t_e(r) = t_{\text{split}}\) and eval row starts at \(t_{\text{split}}\), closed-interval intersection at a point; convention must decide. I will adopt half-open \([t_s, t_e)\) for train and \([t_s, t_e)\) for eval with split as exclusive boundary to avoid measure-zero ambiguity. Or declare exact convention.
- Recycled game_id: if \(g\) is not injective across seasons, \(g(r)=g(r')\) may match different games; false positive contamination if we require same game_id but they are different games? Actually if recycled, same ID different game -> false positive if we drop. Better to qualify game_id by season: \(G(r) = (\text{season}(r), \text{game\_id}(r))\).
- Label leakage through postponed/rescheduled games: \(t_{\text{label}}(r)\) may move after split even if game was pre-split.

Citations: [PAGE 1] everywhere.

RETROCAUSAL_GENEALOGY:
- Lineage: GPT-3 paper-style 13-gram overlap checks [PAGE 1] (Brown et al., language model eval contamination). N-gram overlap as membership inference / leakage proxy.
- Ayubjon/decontam: 50-line mental model, MIT, single commit, 1 star [PAGE 1].
- NeMo Curator: production vehicle [PAGE 1].
- GSE adaptation: year splits, temporal identity keys.
- Historical traps: n-gram contamination detection assumes text uniqueness; tabular sports data violates this because different games share stat lines. Multi-week traps: rolling 7-day workload windows that cross Dec 31 / Jan 1, bye-week carryover, rescheduled games whose feature windows were built pre-split but labels resolved post-split, international games in different time zones shifting the effective split instant, playoff games labeled as regular season.
- Multi-week: if training set is years < Y and eval is year Y, a row in Dec Y-1 with a 14-day feature window extends into Jan Y. If label is outcome of game in early Jan Y, label leakage. The contamination gate must catch this because feature window or label touches validation period [PAGE 1].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: when under deadline pressure, data engineers revert to warning-only logs because building a cleaned-output contract requires pipeline refactoring (new artifact schema, downstream consumer updates).
- Counter-trap: the emit-cleaned artifact forces visibility. If downstream model loader expects \(|\mathcal{T}|\) rows and receives \(|\mathcal{T}'|\), the mismatch breaks the run or triggers a schema alert, making ignorance costly.
- Clock: the year-split gate must execute before training starts; if it runs after model ingestion, contamination has already entered the weights and cannot be unlearned by post-hoc row deletion.
- Theory of mind of stakeholders: the engineer believes “I flagged it in the log”; the modeler believes “year < 2023 means clean”; both are false without the contract. The gate’s report \(\mathcal{R}\) is the shared observable that aligns their mental models.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: game_id uniqueness and stadium/time constraints. Two distinct games cannot share the same (season, game_id) key. If the key space is violated, the row is invalid and vetoed.
- Biomechanical layer: player workload features over \(W(r)\). If \(W(r)\) intersects the eval period for any player in the row, physiological carryover exists. Veto condition: \(\exists p \in \text{players}(r) : W_p(r) \cap \mathcal{E}_{\text{period}} \neq \emptyset\).
- Weather layer: meteorological observations used as features. If any weather timestamp \(t_w \in W(r)\) satisfies \(t_w > t_{\text{split}}\), the training row contains future atmospheric state. Veto.
- Adjudication proof: A row survives iff \(g(r)\) matches no eval row on overlapping window, \(t_e(r) \le t_{\text{split}}\), \(t_{\text{label}}(r) \le t_{\text{split}}\), and all sub-layer windows respect the split. Any violation places \(r \in \mathcal{L}\) with reason \(\rho(r)\). The veto is sound (no contaminated row passes) if the interval convention is total; it is complete (no clean row dropped) only if game_id and window definitions are exact, which breaks down under recycled IDs or imprecise timestamps.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: Boundary-adjacent but clean.
- Setup: \(t_{\text{split}} = 1704067200\) (2024-01-01T00:00:00Z). Train row \(r\): \(W(r) = [1704067200 - 86400, 1704067200]\), i.e., ends exactly at split. Eval row \(r'\): \(W(r') = [1704067200, 1704067200 + 3600]\). game_id differs. Label event at \(1704067200 - 1\).
- Prediction: \(r \notin \mathcal{L}\); retained in \(\mathcal{T}'\); no report entry. Verifiable by checking row count and report emptiness for this row.

Scenario 2: One-second straddle.
- Setup: Same split. Train row \(r^*\): \(W(r^*) = [1704067200 - 43200, 1704067200 + 1]\). game_id matches eval row \(r'\) in \(\mathcal{E}\).
- Prediction: \(r^* \in \mathcal{L}\); dropped; report entry reason = “window_straddle” or “game_id_overlap.” Verifiable by report containing row ID.

Scenario 3: Stat-line collision, different games.
- Setup: Train game A and eval game B have identical box-score stat lines (same points, yards, turnovers) but different game_ids and different seasons. Feature windows do not overlap in time.
- Prediction under n-gram metric (if wrongly applied): false positive contamination. Prediction under temporal key metric: no contamination; both rows retained. Verifiable by comparing outputs of the two metrics on the same frame. This validates the source’s scope note [PAGE 1] that n-gram overlap is the wrong test for tabular sports.

Need exactly 3. Good.

Word count: Let's estimate. THINK_TRACE ~450. SOURCE_OPERATORS ~350. RETROCAUSAL ~300. RECURSIVE ~250. CROSS_LAYER ~250. RLVR ~200. Total ~1800. Good.

Ensure no betting terms. Check: I haven't used spread, total, moneyline, odds, bet, wager, line (betting), handicap, juice, vig. I used "line" maybe? Let's check: "line of code" not used. "boundary" is fine. "Line" as in "betting line" not used. Good.

Check verbatim quotes: I need to quote exactly from source. Let's list quotes I plan to use:
1. “A zero-dependency CLI + library that detects benchmark/eval data contamination against a training corpus via n-gram overlap, flags leaks, and emits a *cleaned* dataset.” [PAGE 1]
2. “GPT-3-paper-style 13-gram overlap checks” [PAGE 1]
3. “License: MIT (verified). 1 star, 0 forks, single commit (2026-06-17), JavaScript — a hobby artifact, not maintained tooling. Included for the pattern, not the package.” [PAGE 1]
4. “The whole method is: shingle both sets into n-grams, intersect, report and remove.” [PAGE 1] — wait, is this exact? Source says: "**The whole method is:** shingle both sets into n-grams, intersect, report and remove." Yes.
5. “GSE's version replaces text n-grams with *temporal identity keys*: (game_id, feature_window) pairs.” [PAGE 1]
6. “the tool doesn't just warn — it **emits a cleaned dataset** plus a leak report.” [PAGE 1]
7. “Our year-split enforcement should do exactly this: input = candidate training frame, output = (cleaned frame, contamination report listing every dropped row and why).” [PAGE 1]
8. “A gate that only warns gets ignored; a gate that produces the cleaned artifact gets used.” [PAGE 1]
9. “n-gram overlap is the wrong test for tabular sports data (two different games can share stat lines legitimately). Don't copy the metric; copy the gate position and the cleaned-output contract.” [PAGE 1]
10. “The real check for us is temporal: does any training row's feature window or label touch the validation/live-check period.” [PAGE 1]
11. “Pair with the NeMo Curator dossier: Curator is the production vehicle, decontam is the 50-line mental model.” [PAGE 1]
12. “**REBUILD** — reimplement the detect→report→emit-cleaned gate with temporal identity keys for our year splits (MIT).” [PAGE 1]

All good.

Now formatting: Use LaTeX inline and display. Use [PAGE 1] after quotes.

Let's assemble final output.

Make sure each section tag is exact.

<SOURCE_OPERATORS_AND_EQUATIONS> etc.

I should avoid markdown code fences inside XML maybe, but LaTeX is fine.

Double check for any fake ratios: none. No Force/Fatigue. Good.

Double check for betting: none.

Word count: I'll write generously.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The source document [PAGE 1] describes Ayubjon/decontam as “A zero-dependency CLI + library that detects benchmark/eval data contamination against a training corpus via n-gram overlap, flags leaks, and emits a *cleaned* dataset.” That single sentence establishes the core output contract: detection plus emission, not detection plus warning. The GSE lens [PAGE 1] states: “GSE's version replaces text n-grams with *temporal identity keys*: (game_id, feature_window) pairs.” This is a multi-hop transfer: the source metric (character or word n-gram shingles) is discarded, but the gate position and the emit-cleaned-artifact contract are preserved. The first derivation hop is to define the source shingle function \(S_n(\text{text})\) and replace it with a temporal key function \(K(r) = (g(r), W(r))\), where \(g(r)\) is the game identifier and \(W(r) = [t_s(r), t_e(r)] \subset \mathbb{R}_{\ge 0}\) is the feature-observation window measured in seconds since the Unix epoch. The second hop is to define the contamination predicate not as set intersection of shingles but as temporal-touch plus identity-match. However, the source’s honest scope note [PAGE 1] warns that “n-gram overlap is the wrong test for tabular sports data (two different games can share stat lines legitimately),” so the metric must not be ported. The real check [PAGE 1] is “temporal: does any training row's feature window or label touch the validation/live-check period.” This adds a second predicate, label leakage, where the label-determining event occurs after the split boundary.

The gray-zone audit begins with the artifact’s provenance: the repo is MIT-licensed, has 1 star, 0 forks, a single commit dated 2026-06-17, and is JavaScript — “a hobby artifact, not maintained tooling. Included for the pattern, not the package” [PAGE 1]. Therefore the GSE implementation must not import code; it must import the detect→report→emit pattern and re-implement it with production-grade temporal semantics. A critical gray zone is boundary convention. The source says “shingle both sets into n-grams, intersect, report and remove” [PAGE 1], but n-gram intersection is discrete and unambiguous, whereas temporal interval intersection is not unless endpoints are fixed. If train windows are closed at the end and eval windows are closed at the start, a row ending exactly at \(t_{\text{split}}\) and an eval row starting exactly at \(t_{\text{split}}\) intersect at a measure-zero point in continuous time but collide in discrete-second representations. The convention must be declared ex ante: train windows satisfy \(t_e(r) \le t_{\text{split}}\), eval windows satisfy \(t_s(r') > t_{\text{split}}\). Any violation triggers the veto.

Another gray zone is game_id non-uniqueness across seasons. If identifiers are recycled, \(g(r) = g(r')\) may match different games, yielding false positives under a naive key collision. The key should therefore be season-qualified, \(G(r) = (\text{season}(r), \text{game\_id}(r))\), unless a global namespace is guaranteed. A third gray zone is the distinction between “warn” and “emit.” The source [PAGE 1] says “A gate that only warns gets ignored; a gate that produces the cleaned artifact gets used.” Thus the pipeline must materialize \(\mathcal{T}' = \mathcal{T} \setminus \mathcal{L}\) and a report \(\mathcal{R}\) listing every dropped row and reason. A warning-only gate fails because downstream consumers can silently ignore log lines; a missing row count breaks the pipeline schema and forces acknowledgment. The final hop pairs this 50-line mental model [PAGE 1] with NeMo Curator as the production vehicle: the gate is a specification first and a distributed job second. Breakdown regimes include feature-window length exceeding the train/eval gap, recycled game_ids, open-interval boundary ambiguity, and label-horizon leakage through postponed or rescheduled fixtures whose outcomes resolve after the split.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(\mathcal{T}\) be the candidate training frame and \(\mathcal{E}\) the eval/live-check frame. Define row-level operators:

- \(g(r) \in \text{GameID}\): categorical, dimensionless game identifier.
- \(W(r) = [t_s(r), t_e(r)]\): feature window, closed interval in seconds [s] since 1970-01-01T00:00:00Z.
- \(t_{\text{split}} \in \mathbb{R}_{\ge 0}\): year-split boundary in seconds [s].
- \(t_{\text{label}}(r)\): timestamp in seconds [s] of the event that determines the label \(y(r)\).
- \(h(r) = t_{\text{label}}(r) - t_{\text{row}}(r)\): label horizon in seconds [s], where \(t_{\text{row}}(r)\) is row construction time.
- Temporal identity key: \(K(r) = (g(r), W(r))\).

Contamination predicate (temporal-touch plus identity-match):
\[
\mathcal{C}(r) \;=\; \mathbb{1}\Big\{ \exists r' \in \mathcal{E} :\; g(r) = g(r') \;\land\; W(r) \cap W(r') \neq \emptyset \Big\}.
\]

Label-leakage predicate:
\[
\mathcal{L}_{\text{label}}(r) \;=\; \mathbb{1}\big\{ t_{\text{label}}(r) > t_{\text{split}} \big\}.
\]

Composite leak indicator:
\[
\mathcal{I}_{\text{leak}}(r) \;=\; \mathbb{1}\big\{ \mathcal{C}(r) \lor \mathcal{L}_{\text{label}}(r) \big\}.
\]

Leak set, cleaned frame, and report:
\[
\mathcal{L} = \{ r \in \mathcal{T} : \mathcal{I}_{\text{leak}}(r) = 1 \},
\qquad
\mathcal{T}' = \mathcal{T} \setminus \mathcal{L},
\]
\[
\mathcal{R} = \{ (r, \rho(r)) : r \in \mathcal{L} \},
\]
where \(\rho(r) \in \{ \text{game\_id\_overlap}, \text{window\_straddle}, \text{label\_leak}, \text{recycled\_id} \}\) is the drop reason.

Units: time in seconds [s]; window width \(w(r) = t_e(r) - t_s(r)\) in seconds [s]; \(n\) (source uses 13-gram overlap [PAGE 1]) is dimensionless; game_id is dimensionless categorical.

Assumptions: (1) \(g(r)\) is unique within its namespace or season-qualified; the source notes “two different games can share stat lines legitimately” [PAGE 1], so stat vectors are not valid identity keys. (2) Feature windows are constructed solely from observations at or before \(t_e(r)\). (3) Labels are determined by events at \(t_{\text{label}}(r)\). (4) \(t_{\text{split}}\) is a single instant per year-split.

Singularity / breakdown regimes: if \(t_s(r) < t_{\text{split}} < t_e(r)\), the row straddles the split and is inherently contaminated regardless of game_id. If \(t_e(r) = t_{\text{split}}\) and an eval row begins at the same instant, closed-interval intersection at a point creates ambiguity; the pipeline must adopt an explicit half-open or split-exclusive convention. If game_ids are recycled across seasons, \(g(r)=g(r')\) produces false positives unless qualified by season. If \(w(r)\) exceeds the temporal gap between \(\mathcal{T}\) and \(\mathcal{E}\), carryover contamination is guaranteed for boundary rows. Source citations for all operational claims: [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage traces from the GPT-3 paper-style 13-gram overlap checks [PAGE 1], where n-gram intersection served as a membership-inference proxy for eval contamination in language-model pretraining. Ayubjon/decontam compresses that idea into a 50-line mental model [PAGE 1]: a zero-dependency CLI, MIT-licensed, single commit, 1 star — explicitly “a hobby artifact, not maintained tooling” [PAGE 1]. NeMo Curator is identified as the production vehicle, with decontam serving only as the pattern reference [PAGE 1]. GSE’s adaptation substitutes text shingles with temporal identity keys \((game\_id, feature\_window)\) [PAGE 1], shifting the contamination test from lexical overlap to calendar-touch.

Historical traps in this genealogy include the category error of applying text-n-gram logic to tabular sports data: two different games can legitimately share identical stat lines, so shingle intersection over box-score text would generate false positives [PAGE 1]. The correct invariance is temporal, not lexical. Multi-week traps specific to year-split enforcement are: (1) rolling workload windows (e.g., 7-day or 14-day player load) constructed in December of year \(Y-1\) that extend into January of year \(Y\), causing feature-window straddle; (2) bye-week or international-game scheduling that shifts the effective local date of the split instant across time zones; (3) rescheduled or postponed games whose feature windows were locked pre-split but whose labels resolve post-split, creating label leakage even when the feature window appears clean; and (4) playoff games miskeyed as regular-season rows, allowing post-split outcomes to contaminate pre-split training labels. Each trap violates the source’s stated real check [PAGE 1]: “does any training row's feature window or label touch the validation/live-check period.”
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency, under deadline pressure, for data engineers to revert to a warning-only gate because implementing the emit-cleaned contract requires refactoring downstream schemas, revalidating row counts, and handling missing data in model loaders. The source is explicit about the failure mode of that regression: “A gate that only warns gets ignored; a gate that produces the cleaned artifact gets used” [PAGE 1]. A log line is ignorable; a cleaned frame \(\mathcal{T}'\) with cardinality \(|\mathcal{T}'| < |\mathcal{T}|\) is not.

The counter-trap is the visibility inversion created by the emit contract. If the downstream model loader expects \(N\) training rows and receives \(N-k\), the pipeline either halts or emits a schema-mismatch alert. This makes ignorance costly and forces the contamination report \(\mathcal{R}\) into the review loop. The report must list every dropped row and why [PAGE 1], converting silent leakage into an auditable artifact that aligns the mental models of the engineer (who may believe “I flagged it”) and the modeler (who may believe “year < Y means clean”). Both beliefs are false without the contract.

The clock variable is the hard deadline before training ingestion begins. If the gate executes after feature matrices have already been assembled or model weights have started updating, post-hoc row deletion cannot unlearn contamination. The gate must therefore be positioned upstream of tensorization, with \(t_{\text{split}}\) fixed and \(\mathcal{T}'\) emitted before any gradient step. The recursion is: the engineer assumes the split is clean because it is expressed as a calendar filter; the modeler assumes the data is clean because the pipeline ran; the gate disproves both by emitting \(\mathcal{L}\) and \(\mathcal{R}\), and the system only proceeds when \(\mathcal{R}\) has been inspected.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: game_id uniqueness and stadium/time constraints. Two distinct games cannot share the same season-qualified key \((\text{season}, \text{game\_id})\). If the key space is violated — e.g., duplicate IDs from a feed re-ingestion — the row is invalid and vetoed. Biomechanical layer: player workload features over \(W(r)\). If any player’s individual window \(W_p(r)\) intersects the eval period \(\mathcal{E}_{\text{period}} = [t_{\text{split}}, \infty)\), physiological carryover exists and the row is vetoed. Weather layer: meteorological observations used as features. If any weather timestamp \(t_w \in W(r)\) satisfies \(t_w > t_{\text{split}}\), the training row contains future atmospheric state and is vetoed.

Adjudication proof: A row \(r\) survives iff all four conditions hold: (a) no \(r' \in \mathcal{E}\) shares \(g(r)\) with overlapping \(W\); (b) \(t_e(r) \le t_{\text{split}}\); (c) \(t_{\text{label}}(r) \le t_{\text{split}}\); (d) all sub-layer windows (player, weather, venue) respect the split. Any violation places \(r \in \mathcal{L}\) with reason \(\rho(r)\). The veto is sound — no contaminated row passes — provided the interval convention is total and timestamps are exact. It is complete — no clean row dropped — only under exact game_id uniqueness and precise boundary semantics; it breaks down under recycled IDs, sub-second clock drift, or label events that are rescheduled after the row is otherwise finalized.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Boundary-adjacent but clean: \(t_{\text{split}} = 1704067200\) [s] (2024-01-01T00:00:00Z). Train row \(r_1\) has \(W(r_1) = [1703980800,\; 1704067200]\), ending exactly at the split, and a distinct game_id from all eval rows. Its label event occurs at \(1704067199\) [s]. Prediction: \(r_1 \notin \mathcal{L}\); retained in \(\mathcal{T}'\); \(\mathcal{R}\) contains no entry for \(r_1\). Verifiable by asserting row retention and report emptiness for this row ID.

Scenario 2 — One-second straddle: same split. Train row \(r_2\) has \(W(r_2) = [1704067140,\; 1704067201]\), overlapping the eval period by one second, and shares its game_id with an eval row \(r'_2\). Prediction: \(r_2 \in \mathcal{L}\); dropped from \(\mathcal{T}'\); \(\mathcal{R}\) contains \((r_2,\; \text{window\_straddle})\). Verifiable by asserting row absence from \(\mathcal{T}'\) and presence of the reason string in \(\mathcal{R}\).

Scenario 3 — Stat-line collision, different games: Train game A and eval game B have identical box-score stat lines (same points, yards, turnovers) but different game_ids and different seasons; their feature windows do not overlap in time. Prediction under the source’s n-gram metric if wrongly applied: false-positive contamination. Prediction under the temporal key metric [PAGE 1]: no contamination; both rows retained. Verifiable by running both metrics on the same frame and comparing outputs; this directly tests the scope note that “n-gram overlap is the wrong test for tabular sports data” [PAGE 1].
</RLVR_COUNTERFACTUAL_VETOES>