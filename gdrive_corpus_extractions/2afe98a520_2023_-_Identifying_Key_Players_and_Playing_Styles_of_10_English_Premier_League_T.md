---
source: "2023 - Identifying Key Players and Playing Styles of 10 English Premier League Teams During Offensive Sequences in 2021-2022 Season - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2023"
pages: 29
model: baidu/ernie-5.5-flash-preview:free
words: 5177
---

<NATIVE_REASONING>
The user wants me to analyze this academic paper using a specific framework (GSE + GSI Frontier Reasoning Foundry). This is a research paper about network centrality analysis of English Premier League teams during offensive sequences.

Let me understand the request. The user has provided:
- A source PDF path
- Page count (29)
- The full source text of the paper

And they want me to respond with a specific structured analysis using these XML sections:
- `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
- `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
- `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
- `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
- `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
- `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

The strict invariants:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds
2. ZERO TOY EQUATIONS - real LaTeX equations, units, assumptions, singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across those exact XML sections

Let me think about the content safety here. This is a legitimate academic analysis request about a sports analytics paper on soccer/football network analysis. There's nothing harmful here. The "foundry" framing is a roleplay structure for producing deep technical analysis. The betting prohibition is actually a safety feature I should respect (no betting lines).

This is fine to do. It's an academic/technical analysis task. Let me produce a genuinely rigorous analysis of the network centrality methods described in the paper.

Let me analyze the actual paper content:

The paper by Upadhyay & Backhaus (Hudl StatsBomb 2023 research competition) analyzes 10 EPL teams in 2021/2022 season using network analysis of passing sequences.

Key methodology:
- Possession sequence framework: 3 categories (Shot & Goal, Partially Successful, Unsuccessful)
- Each possession sequence converted to adjacency matrix X, where X_{i,j} = count of passes from player i to player j
- Study parameters: closeness centrality, betweenness centrality, On Ball Value (OBV)
- Centrality measures normalized (equations 1-4)
- Inclusion criteria: minimum 1000 minutes played
- Sample: 10 teams, 38 matches each

Let me get the exact equations. The paper references figures/formulas from setzeus.com [19] for closeness and betweenness. These are standard graph theory formulas.

Closeness centrality (standard):
$$C(v) = \frac{1}{\sum_{u} d(v,u)}$$
or normalized by (n-1):
$$C(v) = \frac{n-1}{\sum_{u \neq v} d(v,u)}$$

Betweenness centrality (standard):
$$C_B(v) = \sum_{s \neq v \neq t} \frac{\sigma_{st}(v)}{\sigma_{st}}$$
where σ_{st} is total shortest paths from s to t, σ_{st}(v) is those passing through v.

The paper's equations 1-4:

Equation 1 (Parameter Value of a player):
$$Parameter_{p} = \frac{\sum_{i}\sum_{j} CentralityScore_{p,i,j}}{k \cdot n}$$
Wait, let me re-read. The text is garbled:

"Parameter Value of a player = ∑∑𝐶𝑒𝑛𝑡𝑟𝑎𝑙𝑖𝑡𝑦 𝑆𝑐𝑜𝑟𝑒 𝑝, 𝑖, 𝑗 / 𝑘, 𝑗, 𝑛, 𝑖"

Actually it seems to be sum over sequences j and games i of centrality score, divided by k and n. Let me reconstruct:

$$Parameter_{p} = \frac{\sum_{i}^{n}\sum_{j}^{k_i} CentralityScore_{p,i,j}}{k \cdot n}$$

where:
- CentralityScore_{p,i,j} = centrality score of player p in sequence j in match i
- k_i = number of sequences a player p involved in
- n = number of games p played in

Equation 2 (Weighted CM value):
$$WeightedCM = CM_{player} \times \frac{MinutesPlayedInMatch}{TotalMinutesPlayedInSeason}$$

Equation 3 (Average Parameter values):
$$AverageParameter = \sum X[all\ weighted\ parameter\ values\ in\ all\ matches]$$

Wait, that's odd. "Average Parameter values of a player = X All weighted Parameter values of a player in all matches" — probably the sum (Σ) of all weighted parameter values. Actually "X" here might be a typo for Σ (summation).

Equation 4 (Player Centrality Parameter Ratio):
$$Ratio = \frac{AverageCentralityParameter_{Unsuccessful}}{AverageCentralityParameter_{Shot\&Goal}}$$

This is a key point for analysis: the ratio is Unsuccessful / Shot&Goal, so a ratio < 1 means the player is more central in shot & goal sequences. The paper's interpretation ("higher ratio values" being better) is actually a gray-zone issue because the numerator is unsuccessful sequences. Wait — let me think carefully.

If Ratio = Unsuccessful / Shot&Goal, then:
- Higher ratio (>1) = player MORE central in unsuccessful sequences (worse)
- Lower ratio (<1) = player MORE central in shot & goal sequences (better)

But the paper says "players with high ratio value" indicate involvement in shot & goal sequences. This is a CONTRADICTION / potential error in the paper. This is a great "gray-zone audit" point.

Actually wait, let me re-read. The paper says in 3.3.4 and 4.4 that high closeness ratio values indicate more involvement in shot & goal sequences. But eq. 4 defines ratio as Unsuccessful/Shot&Goal. So if a player has HIGH ratio, that means they're MORE central in unsuccessful. This is contradictory unless... 

Hmm, let me reconsider. Maybe I'm misreading the equation direction. The text says:

"Player Centrality Parameter Ratio = Player Average Centrality Parameter value in Unsuccessful Sequences / Player Average Centrality Parameter value in Shot & Goal Sequences"

So numerator = Unsuccessful, denominator = Shot & Goal. Ratio = U/SG.

If a player is equally central in both, ratio = 1.
If more central in unsuccessful, ratio > 1.
If more central in shot & goal, ratio < 1.

The paper then says (page 15): "players in higher-ranked teams tend to have higher closeness ratios" and (page 16): "Manchester City players exhibit the highest closeness values, indicating their higher involvement in shot & goal sequences."

This is a genuine internal inconsistency. A HIGH ratio (numerator = unsuccessful) would indicate MORE involvement in unsuccessful, not shot & goal. So either:
1. The equation is inverted in the write-up (should be SG/Unsuccessful)
2. The interpretation is wrong

This is exactly the kind of gray-zone audit I should flag. Good.

Also OBV correlation: "moderate correlation with an R-square value of 0.34" for both betweenness and closeness. R² = 0.34 means r ≈ 0.583. The paper calls this "moderate."

Also note the paper's labeling errors: Figure 9 and 10 numbering conflicts (Figure 2 referenced multiple times), Figure 10 caption says "Betweenness Ratio" but should be "Closeness Ratio."

Let me also think about the actual math properties:

Adjacency matrix X: X_{i,j} = passes from i to j. This is a directed, weighted graph. The paper says "our approach treats both inbound and outbound passes equally, without incorporating centrality measures based on the direction of passes." So they may be symmetrizing or using an undirected representation. This affects the closeness/betweenness definitions.

Graph properties:
- Number of nodes = number of players in possession sequence (varies, up to 11)
- The example sequence has 51 passes (Manchester City, Figure 1)
- Distance d(i,j) = shortest path in the pass graph

Singularity/breakdown regimes:
- If a player receives/never connects, closeness denominator → their reachable set is limited
- Disconnected graph → d(i,j) = ∞ for unreachable pairs → closeness = 0 or undefined
- Betweenness normalization depends on directed vs undirected: for undirected, divide by 2

Let me think about the "average betweenness ratio" vs "player betweenness ratio" distinction. There's team-level average and player-level.

Now for the framework sections. Let me be careful:

1. THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. I'll walk through the methodology, reconstruct equations, identify the ratio inversion issue, the R² interpretation, symmetrization effects, disconnected graph handling.

2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. I'll write the actual centrality formulas, the paper's eq 1-4, with page citations and verbatim quotes.

3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage. The lineage of network analysis in soccer: Peña & Touchette (2012) [20], Clemente et al. [13,14], Grund (2012) [21], Balkundi & Harrison (2006) [22], Korte et al. (2019) play-by-play network [16], the REOFUT framework [2,7,8,17]. "Multi-week traps" — I interpret this as research pitfalls that recur across studies (e.g., normalization choices, directedness).

4. RECURSIVE_THEORY_OF_MIND: "Crisis habit regression vs counter-trap vs clock." This is about how teams/players adapt under pressure (crisis) — regression to habitual passing patterns, counter-strategies, and the temporal clock within possessions. I'll map this to the paper's shot & goal vs unsuccessful distinction and the dynamic role changes limitation.

5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. How physical/biomechanical/weather factors could veto the network conclusions — e.g., a player's high betweenness might be an artifact of positional role rather than skill, and physical fatigue/weather affect passing accuracy. I need to prove these as "vetoes" — i.e., conditions under which the network metric conclusions don't hold.

6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards) veto scenarios + predictions. I'll construct 3 testable counterfactuals with predictions that could falsify the paper's claims.

I need >=1000 words total across these sections. Let me make it substantial and rigorous.

Let me be careful about the betting invariant — I must NOT mention any betting lines, odds, spreads, moneylines. I won't. This is pure analytics.

Let me also make sure I cite exact [PAGE N] markers and verbatim quotes where I can.

Let me verify some verbatim quotes from the source:
- Page 4: "each entry, represented as Xi,j, signifies the count of passes from player i to player j during the respective possession sequence. Notably, our approach treats both inbound and outbound passes equally, without incorporating centrality measures based on the direction of passes."
- Page 6: eq 4 "Player Centrality Parameter Ratio = Player Average Centrality Parameter value in Unsuccessful Sequences / Player Average Centrality Parameter value in Shot & Goal Sequences"
- Page 7: "The study only includes the players in the analysis who played a minimum of 1000 minutes."
- Page 17: "Figure 9. shows a moderate correlation with an R-square value of 0.34 between the OBV values of players in shot & goal sequences and the Player Betweenness ratio."
- Page 3: "the possession starts with Riyad and ends at Joao. The entire possession sequence consists of 51 passes."
- Page 3: possession ends when "the opponent's team name appears in the possession variable for two consecutive events, accompanied by the detection of either a 'Pass' or 'Carry Ball' event by the opposing team."
- Page 21: "these matrices exhibit a moderate correlation (R-squared value of 0.34) with the OBV method"
- Page 24: limitations — opponent quality, dynamic role changes, external influences, contextual data, longitudinal studies.

Let me also reconstruct the betweenness ratio issue. Actually there might be a subtlety. Let me look at the betweenness ratio description on page 11: "Figure 5. suggested average Betweenness ratio is higher of higher rank teams in shot & goal sequences than in unsuccessful sequences." So they're comparing across teams. And page 29: "Players' average betweenness values in rank teams are much higher in unsuccessful sequences than in shot & goal sequences."

Hmm wait — page 29 says average betweenness VALUES (not ratio) are higher in unsuccessful sequences. And the ratio = Unsuccessful/SG. So if unsuccessful values > SG values, ratio > 1. Then the "ratio is higher" would mean MORE unsuccessful involvement. But they interpret high ratio as good (shot & goal involvement). This confirms the inversion confusion. This is a solid gray-zone finding.

Actually, let me reconsider — maybe there's a consistent reading. Let me re-read page 6 eq 4 very carefully:

"Player Centrality Parameter Ratio = Player Average Centrality Parameter value in Unsuccessful Sequences / Player Average Centrality Parameter value in Shot & Goal Sequences"

Yes, numerator is Unsuccessful. So high ratio = more central in unsuccessful = bad. But the paper repeatedly interprets high ratio as indicating shot & goal involvement (good). This is a definitive internal inconsistency — either eq 4 is written backwards relative to intent, or the interpretations are inverted. This is my key gray-zone audit finding.

Actually, hold on. Let me reconsider whether the interpretation might be self-consistent under a different reading. If the ratio is U/SG and it's HIGH, that's bad. The paper says high closeness ratio = important in shot & goal. Contradiction. Unless the ratio were SG/U. So I'll flag this as either a transcription error in eq. 4 or an interpretation error. Both are worth noting. Since I don't have the actual figures (only captions), I can't fully resolve it, but I can flag it as an unresolved sign convention that materially affects all player rankings in Figures 13 and 14. Good — this is exactly the kind of rigorous audit the framework wants.

Now let me also think about the betweenness formula and directedness. In the example, passes have direction (i to j). But they say they treat inbound/outbound equally (symmetrize). If symmetrized, the graph becomes undirected and weighted. Closeness and betweenness on undirected graph. The standard betweenness normalization for undirected: divide by 2 (since each pair counted twice). This matters for magnitude but not ranking.

Also, shortest-path distance on weighted graph: if edge weight = pass count (more passes = stronger tie), then "distance" should be inverse (more passes = shorter distance). But if they use raw count as distance, that inverts the semantics. The paper doesn't specify. Another gray-zone: weight-to-distance transformation ambiguity. In many soccer network papers, distance = 1/frequency or they use the raw count with a specific convention. Peña & Touchette used the inverse. This matters for closeness centrality meaning.

Let me also consider: within a single possession sequence, adjacency matrix X is built from that sequence's passes. With 51 passes among ~11 players, the graph is likely dense and connected. Closeness differences may be small. With few passes, graph may be sparse/disconnected → closeness breakdown.

Now let me think about OBV. OBV (On-Ball Value) is a StatsBomb metric based on expected threat / possession value added. R² = 0.34 with centrality ratios. The paper treats 0.34 as "moderate." In effect size terms, r = sqrt(0.34) ≈ 0.583, which is a moderate-to-large correlation. But R² = 0.34 means centrality explains 34% of variance in OBV. So 66% unexplained. This is the key quantitative caveat.

Alright, let me now also think about the sample and statistics. 10 teams × 38 matches. Players with ≥1000 minutes. Betweenness/closeness computed per sequence, aggregated. No confidence intervals reported, no significance tests mentioned. Another audit point.

Let me now write the response. I need to hit >=1000 words across the sections, with the THINK_TRACE alone being >=400 words. Let me be thorough and rigorous. I'll write real LaTeX.

Let me draft.

For equations I'll use standard graph-theoretic definitions with proper citations to the paper's [19], [20] references and page markers.

Closeness (undirected, from [19] setzeus, referenced page 5):
$$C_C(v) = \frac{N-1}{\sum_{u \in V \setminus \{v\}} d(v,u)}$$

Betweenness (from [19], page 5):
$$C_B(v) = \sum_{s \neq v \neq t} \frac{\sigma_{st}(v)}{\sigma_{st}}$$

where σ_{st} = number of shortest paths from s to t, σ_{st}(v) = those through v.

For undirected normalization:
$$C_B^{norm}(v) = \frac{1}{(N-1)(N-2)} \sum_{s \neq v \neq t} \frac{\sigma_{st}(v)}{\sigma_{st}}$$
(with an extra 1/2 for undirected.)

Distance on weighted graph: d(v,u) = shortest path sum of edge weights. If weight w_{ij} = pass count X_{ij}, and we want frequent passes to mean "close," we need transformation like $w'_{ij} = 1/X_{ij}$ or a topological (unweighted) shortest path. The paper doesn't specify — flag.

Paper's Eq 1:
$$P_p = \frac{\sum_{i=1}^{n}\sum_{j=1}^{k_i} CS_{p,i,j}}{k \cdot n}$$
Units: centrality is dimensionless (normalized), so P_p dimensionless; k dimensionless count, n dimensionless. Actually dividing by k·n but summing over i (n) and j (k_i)... the normalization by k·n when the double sum already spans n·k terms — this is effectively an average per (game, sequence). Units dimensionless.

Hmm, actually there's a subtle inconsistency: sum over i=1..n and j=1..k_i gives up to n·⟨k⟩ terms, divided by k·n. If k = ⟨k_i⟩ (mean sequences per game), then P_p is a proper mean. But if k is total sequences (not per game), the normalization differs. The notation "k is the number of sequence a player p involved" (page 6) suggests k is TOTAL sequences, and n is total games. Then sum over i=1..n, j=1..k double-counts (k already total). This is a notation ambiguity — another gray-zone. I'll flag the index-domain mismatch.

Eq 2 (weighted):
$$W_p^{(m)} = CM_p^{(m)} \cdot \frac{m_p^{(m)}}{M_p^{season}}$$
where m_p^{(m)} = minutes played by p in match m, M_p^{season} = total season minutes. Units: CM dimensionless × (minutes/minutes) = dimensionless. Weight ∈ [0,1].

Eq 3 (average):
$$\bar{C}_p = \sum_{m} W_p^{(m)}$$
Wait, "Average Parameter values of a player = X All weighted Parameter values" — the "X" is likely Σ. But calling a SUM an "average" is a misnomer. If it's a sum of weighted values across matches, that's not an average. Another audit flag. Actually the weights sum to 1 over the season (Σ_m m_p^{(m)}/M_p^{season} = 1), so Σ_m CM·weight is a weighted average of per-match CM. So it IS a weighted average (weights sum to 1). OK so eq 3 = weighted mean of per-match centrality, weighted by minute-share. Good — that's actually sound. Let me note that.

Eq 4 (ratio):
$$R_p = \frac{\bar{C}_p^{Unsucc}}{\bar{C}_p^{ShotGoal}}$$
Dimensionless. R_p < 1 ⟹ more central in shot & goal (the "good" regime). But paper interprets high R as good — inversion flag.

Singularity: if denominator $\bar{C}_p^{ShotGoal} \to 0$ (player never central in shot & goal sequences), R_p → ∞. Breakdown. Also if a player has zero shot & goal sequences (e.g., a deep-lying defender who never in an attacking sequence that reaches a shot), denominator = 0 → undefined. This is a real singularity for defensive players.

Good, I have a lot of rigorous material. Let me write.

Let me structure carefully and ensure I hit the word counts. THINK_TRACE ≥ 400 words. Total ≥ 1000.

Let me write the sections now. I'll aim for genuine depth, not padding.

One more: I should acknowledge the framing constraints briefly but not belabor. Actually the instructions say respond directly. I'll just produce the analysis. I should not add a preamble that's too long. Let me maybe give one short orienting sentence then the sections. Actually, given the strict format demand, I'll just go straight into the XML sections. Maybe a single sentence noting the sign-convention issue up top. But the framework wants the analysis in the sections. Let me just deliver the sections.

Let me write real verbatim quotes with page markers.

Let me draft each section with care on word count.

THINK_TRACE — I'll trace: (1) reconstruction of the pipeline, (2) the graph construction and symmetrization, (3) weight-to-distance ambiguity, (4) the eq 4 sign inversion, (5) eq 1 index-domain mismatch, (6) eq 3 weighted-mean correctness, (7) OBV R² interpretation, (8) aggregation/statistics gaps, (9) singularity regimes for defensive players, (10) disconnected-sequence breakdown. That's plenty for 400+ words.

Let me write it all out.

I'll make sure the LaTeX is formal and correct.

Let me write.
</NATIVE_REASONING>

Analysis of the Hudl StatsBomb 2023 entry by Upadhyay & Backhaus. I flag one load-bearing issue up front: the centrality ratio in [PAGE 6] eq. (4) is defined as Unsuccessful-over-Shot&Goal, yet every downstream interpretation in [PAGE 15], [PAGE 16], [PAGE 21] treats a *high* ratio as evidence of shot-&-goal involvement. That sign convention is either mis-transcribed or mis-interpreted, and it governs the entire ranking in Figures 13–14. The audit below reconstructs the pipeline rigorously and marks every breakdown regime.

<THINK_TRACE>
Multi-hop reconstruction. The pipeline is: (1) segment event data into possession sequences [PAGE 3]; (2) emit an adjacency matrix per sequence; (3) compute closeness and betweenness on each matrix; (4) minute-weight and average across matches; (5) form a shot/unsuccessful ratio; (6) correlate with On-Ball Value.

Hop 1 — Segmentation boundary. A sequence terminates when, quoting [PAGE 3], "the opponent's team name appears in the possession variable for two consecutive events, accompanied by the detection of either a 'Pass' or 'Carry Ball' event by the opposing team." This dual-key stopping rule (two consecutive opponent events AND a pass/carry) is a hysteresis gate. Gray zone: it can *under-segment* (a team that loses then regains within one opponent touch-chain stays fused) or *over-segment* (a legitimate continuation split by a single opponent interception). The worked example [PAGE 3] — "The entire possession sequence consists of 51 passes" — sits at the dense extreme; sequences with 2–3 passes sit at the sparse extreme where centrality estimators degrade.

Hop 2 — Matrix construction and directedness. [PAGE 4]: "each entry, represented as Xi,j, signifies the count of passes from player i to player j... our approach treats both inbound and outbound passes equally, without incorporating centrality measures based on the direction of passes." So X is nominally directed but *symmetrized* to $\tilde{X}=X+X^{\top}$ before metric computation. Consequence: in/out betweenness collapse; a player's role as distributor vs receiver is erased. This is why the paper can only speak of "connectivity" not "control."

Hop 3 — Weight→distance ambiguity (unresolved in source). Closeness needs a distance $d(v,u)$. On a *weighted* graph, the semantic choice is decisive: raw pass-count as edge length means more passes = *farther*, inverting intuition; the standard convention (Peña–Touchette [20], cited [PAGE 5]) uses $w'_{ij}=1/X_{ij}$ so frequent links are *short*. The paper never states the transform. Every closeness number is therefore interpretation-conditional.

Hop 4 — Eq. (4) sign audit. [PAGE 6] verbatim: "Player Centrality Parameter Ratio = Player Average Centrality Parameter value in Unsuccessful Sequences / Player Average Centrality Parameter value in Shot & Goal Sequences." With numerator = Unsuccessful, a ratio >1 means *more* central when the attack fails. But [PAGE 16] reads the ratio as "higher involvement in shot & goal sequences," and [PAGE 29] notes average betweenness is "much higher in unsuccessful sequences." These cannot both be "good." Either eq. (4) should be Shot&Goal/Unsuccessful, or every "high ratio = key attacker" claim is inverted. Unresolvable without the figure pixels; flagged as the paper's central hazard.

Hop 5 — Eq. (1) index-domain mismatch. The double sum $\sum_{i=1}^{n}\sum_{j=1}^{k}$ normalized by $k\cdot n$ double-counts if $k$ is the *total* sequence count (as [PAGE 6] defines: "k is the number of sequence a player p involved") rather than per-match. Sound only if $k$ is per-match mean.

Hop 6 — Eq. (3) is actually a weighted mean. Because minute-share weights satisfy $\sum_m m_p^{(m)}/M_p^{\text{season}} = 1$, the "sum of weighted values" is a legitimate minute-weighted average of per-match centrality. Good — this part is defensible.

Hop 7 — OBV calibration. [PAGE 17]/[PAGE 21]: "moderate correlation (R-squared value of 0.34)." $R^2=0.34 \Rightarrow r\approx 0.583$. That leaves ~66% of OBV variance unexplained by network structure; "moderate" is generous.

Hop 8 — Statistics gap. No confidence intervals, no significance tests, no cross-validation across the 10×38 design. Rankings in Figures 13–14 are point estimates.

Hop 9 — Singularity. If $\bar{C}_p^{ShotGoal}\to 0$ (a deep defender never in a shot sequence), eq. (4) diverges. Disconnected sub-graphs (a player who only receives, never passes in a sequence) drive $d=\infty$ and closeness → 0.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let $G=(V,E)$ be the sequence graph, $N=|V|$ (players in sequence), $X_{ij}$ = pass count $i\to j$ ([PAGE 4]).

Symmetrization (per [PAGE 4] "treats both inbound and outbound passes equally"):
$$\tilde{X} = X + X^{\top}.$$

Closeness centrality (standard form, source ref [19], [PAGE 5]); distance $d(v,u)$:
$$C_C(v)=\frac{N-1}{\sum_{u\in V\setminus\{v\}} d(v,u)}\quad[\text{dimensionless}].$$
Breakdown: undefined if any $d(v,u)=\infty$ (disconnected); weight-to-distance map $d(\cdot)$ unspecified in source (see THINK_TRACE Hop 3).

Betweenness centrality (source ref [19]/[20], [PAGE 5]):
$$C_B(v)=\sum_{s\neq v\neq t}\frac{\sigma_{st}(v)}{\sigma_{st}},\qquad \sigma_{st}=\#\{\text{shortest } s\!\to\! t\},\ \sigma_{st}(v)=\#\{\text{through } v\}.$$
Undirected normalization (extra $\tfrac12$ because symmetrized):
$$C_B^{\text{norm}}(v)=\frac{1}{(N-1)(N-2)}\sum_{s\neq v\neq t}\frac{\sigma_{st}(v)}{\sigma_{st}}.$$

Per-player aggregation. Eq. (1) [PAGE 6]:
$$P_p=\frac{\sum_{i=1}^{n}\sum_{j}^{k} CS_{p,i,j}}{k\,n},$$
$CS_{p,i,j}$ = centrality of player $p$ in sequence $j$, match $i$; $k$ = sequences; $n$ = games ([PAGE 6], units dimensionless).

Minute weighting, Eq. (2) [PAGE 6]:
$$W_p^{(m)} = CM_p^{(m)}\cdot\frac{m_p^{(m)}}{M_p^{\text{season}}},\qquad \text{weight}\in[0,1]\ [\text{min/min}].$$

Season average, Eq. (3) [PAGE 6]:
$$\bar{C}_p=\sum_{m} W_p^{(m)},\qquad \text{since}\ \sum_m \frac{m_p^{(m)}}{M_p^{\text{season}}}=1\ \Rightarrow\ \text{minute-weighted mean}.$$

Ratio, Eq. (4) [PAGE 6, verbatim above]:
$$R_p=\frac{\bar{C}_p^{\text{Unsucc}}}{\bar{C}_p^{\text{ShotGoal}}}.$$
Interpretation regime (audited): $R_p<1 \Leftrightarrow$ more central in shot/goal sequences; $R_p>1 \Leftrightarrow$ more central in unsuccessful. Singularity: $\bar{C}_p^{\text{ShotGoal}}=0 \Rightarrow R_p\to\infty$ (defenders with no shot-sequence participation).

OBV calibration [PAGE 17, PAGE 21]:
$$R^2_{\text{OBV}\sim R}=0.34\ \Rightarrow\ r=\sqrt{0.34}\approx0.583;\quad 1-R^2\approx0.66\ \text{variance unexplained}.$$

Inclusion filter [PAGE 7]: $\text{minutes}_p \ge 1000$; sample $=10\text{ teams}\times 38\text{ matches}$ ([PAGE 7]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The method is a direct descendant of the pass-network lineage. Its proximate parents are Peña & Touchette [20] ("A network theory analysis of football strategies," 2012, cited [PAGE 5] and [PAGE 27]), who imported closeness/betweenness into ball-flow graphs, and the setzeus practitioner note [19] that supplies the exact formulas. The empirical backbone is Grund [21] (2012) and Balkundi & Harrison [22] (2006), quoted at [PAGE 19]: "teams with much denser networks have a tendency to perform better and remain more viable" — the density→performance hypothesis this paper inherits uncritically. Clemente et al. [13][14], Mclean et al. [15], and especially Korte, Link, Groll & Lames [16] ("Play-by-Play Network Analysis in Football," 2019) form the methodological spine; the acknowledgements ([PAGE 25]) name Lames and Link, situating the work firmly in the TUM sports-informatics school.

The genealogy's "multi-week traps" are inherited methodological reflexes that recur across this literature and reappear here:
- Trap A — Directed→undirected collapse. Early pass-network work kept direction; this paper symmetrizes ([PAGE 4]), discarding the distributor/receiver asymmetry that betweenness was designed to capture.
- Trap B — Undefined weight-to-distance map. Peña–Touchette used inverse-frequency edge weights; this paper omits the transform entirely, so closeness semantics drift.
- Trap C — Ratio-direction confusion. Prior ratio-style metrics (e.g., possession-value ratios) established "successful/unsuccessful," and this paper likely transposed numerator/denominator — the exact eq. (4) hazard.
- Trap D — Density-as-virtue overreach. Grund's league-level correlation is re-applied at team level without controlling for opponent quality ([PAGE 24] concedes this).

These are not novel errors; they are the field's sediment, re-surfacing.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the actors as a three-level belief stack over passing behavior.

Level 0 (crisis-habit regression). Under pressure — chasing a goal late, or protecting a lead — teams regress to habitual topology. The paper's own split (shot&goal vs unsuccessful, [PAGE 2] Table 1) is a proxy for this: a player's betweenness rising in shot sequences is evidence they are *recruited into* the crisis-habit chain, not that they authored it. Prediction: high betweenness-ratio players (per eq. 4, correctly read) should show *reduced* betweenness variance in the final 15 minutes — habit lock-in.

Level 1 (counter-trap). Opponents model these hubs. A rational adversary starves the highest-betweenness node (man-marking the pivot), forcing the attack onto second-tier nodes. Because the paper symmetrizes the graph ([PAGE 4]), it cannot see *who initiates* the bypass, so a "counter-trap" that shifts control to a winger reads identically to baseline connectivity. The metric is blind to exactly the adaptation that matters.

Level 2 (the clock). Tempo compresses decisions. Within a 51-pass sequence ([PAGE 3]) the pass rate is high and per-decision value low; in a 4-pass direct move, each node's marginal betweenness spikes. The ratio eq. (4) averages over both regimes, so a "possession" side and a "direct" side can post identical ratios with opposite clock profiles. The paper's Liverpool-vs-Manchester City contrast ([PAGE 19]–[PAGE 21]: City "possession-based," Liverpool "mixed... direct") is the paper half-detecting this, but the aggregate ratio cannot separate the two clocks.

Adjudication: crisis regression and the counter-trap are only distinguishable with *time-indexed, directed* centrality. The present undirected, season-averaged ratio collapses Level 1 into Level 0.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is a physical/biomechanical/weather condition under which the network conclusion is *provably* void, independent of the graph math.

Veto 1 — Positional-role confound (biomechanical/topological). Betweenness is heavily determined by formation geometry, not skill. A single-pivot 4-3-3 mechanically routes ball-flow through one node; its betweenness is high by *construction*. Proof: fix a formation template, randomize pass targets uniformly among on-pitch teammates subject to the template's adjacency — the pivot's expected betweenness is already maximal. Therefore high $C_B$ does not license the inference "key player" ([PAGE 21]) without conditioning on role. The paper's [PAGE 24] "Dynamic Role Changes" limitation concedes the mechanism but does not veto the claims.

Veto 2 — Pass-completion physics (fatigue). Closeness rewards frequent, short links. Fatigue degrades pass velocity/accuracy; late-match sequences shorten and cluster, *inflating* apparent closeness of whoever remains central purely from tired, safe recycling. Under this veto, a "well-connected" late-game hub is a fatigue artifact. Falsifier: closeness-ratio should correlate with a fatigue proxy (distance covered, high-speed decel); if it does, the metric is measuring tiredness.

Veto 3 — Weather/wind and surface. High wind and wet/low-friction pitches bias teams toward short ground passing, raising network density and lowering betweenness dispersion for *all* nodes ([PAGE 29] already sees betweenness "much higher in unsuccessful sequences" for weak teams — a plausible low-skill, rushed, wet-weather signature). Under persistent adverse weather the entire season-level ratio distribution shifts, so cross-team ranking (Figures 5, 9) partly encodes fixture weather, not tactics.

Veto 4 — Sample-time singularity. With the $\ge1000$-minute filter [PAGE 7], a player with exactly 1000 minutes has $\ge$4× fewer observations than a 4000-minute peer; their eq. (4) ratio has much larger estimator variance. Ranking them together (Figures 13–14) violates homoscedasticity. This is a statistical veto on the leaderboards themselves.

Adjudication proof: each veto identifies a covariate $Z$ (role, fatigue, weather, minutes) such that $\text{Centrality} \not\perp Z$; unless $Z$ is conditioned out, the causal reading "centrality ⇒ importance" is unidentified. The paper conditions on none.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactuals (RLVR = reward-verifiable), each with a pre-registered prediction and a falsification condition. No betting content — these are experimental vetoes on the paper's inferences.

Veto Scenario A — Directionality ablation. Rebuild all metrics on the *directed* $X$ (drop the symmetrization of [PAGE 4]) and re-rank. Prediction: the top-20 betweenness list (Figure 13) changes materially — players whose value is purely *receptive* (high in-degree, low out-degree) fall out. Verifiable reward: rank correlation (Kendall's $\tau$) between directed and undirected betweenness leaderboards. Falsifier of the paper: if $\tau < 0.7$, the undirected metric the paper actually uses does not identify ball *flow controllers*, contradicting [PAGE 5]–[PAGE 6].

Veto Scenario B — Ratio-direction sign test. Recompute eq. (4) both ways (Unsuccessful/ShotGoal as written [PAGE 6] vs its inverse) and check which orientation correlates *positively* with OBV. Prediction: only Shot&Goal/Unsuccessful yields $r>0$ with OBV; the as-written orientation yields $r<0$. Verifiable reward: sign and magnitude of $\text{corr}(R_p, \text{OBV}_p)$. Falsifier of the paper: if the as-written eq. (4) is negatively correlated with OBV, then every "high ratio = key attacker" statement ([PAGE 16], [PAGE 21]) is inverted, and Figures 13–14 must be read upside-down.

Veto Scenario C — Role/formation control. Regress OBV on centrality *with formation-role fixed effects* (back/mid/forward as the paper already bins, [PAGE 9]). Prediction: the partial $R^2$ of centrality on OBV drops well below 0.34 once role is controlled — because formation geometry (Veto 1) carries much of the signal. Verifiable reward: $\Delta R^2 = R^2_{\text{full}} - R^2_{\text{role-only}}$. Falsifier of the paper: if $\Delta R^2 \le 0.05$, network centrality adds negligible explanatory power beyond "which position you play," undercutting the paper's core claim that centrality reveals individual key-player importance ([PAGE 21]).

Cross-cutting prediction: because all three vetoes attack the same undirected, season-averaged, ratio-based construction, I expect them to be *correlated* — a team that passes Scenario A (direction matters) will likely fail Scenario C (role explains the rest), since receptive hubs are usually the same positional bin.
</RLVR_COUNTERFACTUAL_VETOES>

Bottom line: the paper's pipeline is a competent import of Peña–Touchette pass-network centrality, but three defects are load-bearing — the eq. (4) ratio orientation (sign), the missing weight→distance transform (semantics), and the undirected symmetrization (loss of flow control). The OBV link at $R^2=0.34$ is real but modest, and the Scenarios above give concrete, figure-independent tests to falsify or confirm the key-player claims.