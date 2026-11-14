---
source: "2019 - The Paths We Take A Player Tracking Analysis of NHL Shootouts - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2019"
pages: 2
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5129
---

<NATIVE_REASONING>
The user wants me to analyze a source document about NHL shootouts using player tracking data. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

The source text appears to be from page 2 (or pages mentioned as 2 pages). I need to cite [PAGE 2] markers since the text says PAGES: 2. Wait, the user says "PAGES: 2" which might mean there are 2 pages or page 2. Looking at the source text, it seems like it's extracted from a PDF. I should cite [PAGE 2] since that's what's indicated, or perhaps [PAGE 1] and [PAGE 2] if I assume the text spans pages. Actually, looking at the source, it seems to be a single block. I'll cite [PAGE 2] as indicated, or perhaps the whole thing is page 2. Let me just use [PAGE 2] for citations since that's what the metadata says.

Wait, the user wrote "PAGES: 2" - this likely means the source has 2 pages total. The text provided seems to be the full text. I should cite [PAGE 2] for the content since that's the page given, or I could say [PAGE 1-2]. But to be safe and follow instructions "cite exact [PAGE N] markers", I'll use [PAGE 2] since that's what's specified. Actually, maybe I should check if the text contains page breaks. It doesn't seem to. I'll cite [PAGE 2] throughout, or perhaps [PAGE 2] for the main content. Hmm, the user might mean the text is from page 2. Let me just cite [PAGE 2] as instructed since that's the page reference given.

Now, important constraints:
- No betting lines whatsoever. No spreads, totals, moneylines, odds.
- No toy equations. Must use formal LaTeX equations with proper units.
- Must have >= 1000 words across the sections.

Let me think about the content:
The paper analyzes 1,154 shootout attempts from 2017-2018 and 2018-2019 NHL regular seasons using Sportlogiq computer vision tracking data.
- Trajectories smoothed with spline interpolation, clustered into 6 groups with Bézier curve functional cluster centers.
- Clustering on shooter paths from blue line to shot/deke location.
- Features: spatiotemporal/trajectory info, handedness, dekes, goal info, shootout rounds/scores.
- 6 clusters:
  1. Wide Left (173, 15.0%, 32.9% shooting %)
  2. Narrow Left (243, 21.1%, 32.9%)
  3. Wide Right (188, 16.3%, 30.9%)
  4. Down the Middle (212, 18.4%, 27.8%)
  5. Narrow Right (219, 19.0%, 25.6%)
  6. Right Dip (119, 10.3%, 32.8%)
  Total: 1,154 (30.2%)
- Left-hand shooters vs right-hand shooters percentages by cluster.
- Right-handed shooters performed better overall than left-handed (mostly against left-gloved goalies).
- Changing angles for goalie and skating to side of backhand gives higher chance.
- 5 of 6 most frequent shooters performed above average in respective clusters.
- Best/worst shooters and goalies per cluster.

I need to formalize this with LaTeX. Let me construct proper probability notation:
- Let \( S \in \{0,1\} \) be shootout success (goal=1, save=0).
- Let \( C \in \{1,\dots,6\} \) be cluster assignment.
- Let \( H \in \{L,R\} \) be shooter handedness.
- Let \( G \in \{L,R\} \) be goalie glove hand (implied).
- Empirical success rate: \( \hat{p}_c = \frac{n_{c,1}}{n_c} \) where \( n_c \) is attempts in cluster c, \( n_{c,1} \) goals.

Units: attempts dimensionless count, probabilities in [0,1], percentages dimensionless (or ×100). Spatiotemporal: meters (m), seconds (s), meters per second (m/s), meters per second squared (m/s²). Bézier curves: parametric \( \mathbf{B}(t) = \sum_{i=0}^{n} \binom{n}{i} (1-t)^{n-i} t^i \mathbf{P}_i, t \in [0,1] \).

Singularity/breakdown regimes: small n_c (e.g., cluster 6 n=119, minimum 5 attempts for best/worst designation), sparse data for specific shooter-goalie handedness matchups, small sample for frequent goalies (Markstrom 34/47 across all clusters? Actually J Markstrom (34/47) listed under frequent goalie for cluster 6 maybe). The text has some OCR errors but I should work with what's there.

For the sections:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I'll discuss the causal chain from tracking data -> spline smoothing -> Bézier clustering -> success rate heterogeneity -> handedness interaction -> goalie angle geometry. Gray zones: OCR errors in table (329% likely 32.9%), missing cluster 4 description mapping, small sample bias, selection bias (only attempts from blue line to shot/deke location clustered, potentially excluding some trajectories), confounding by shooter quality (frequent shooters above average may be selection on skill), endogeneity of cluster choice (shooters choose path based on goalie positioning), etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations [PAGE 2], breakdown of clusters with numbers, equations for spline interpolation, Bézier curves, empirical probability, conditional probability \( P(S=1|C=c,H=h) \), etc.

RETROCAUSAL_GENEALOGY: Historical lineage: from event-data shootout research to tracking-based path analysis. Predecessors: descriptive shooting percentages, event data (shots, goals), then Sportlogiq computer vision, functional data analysis (splines, Bézier curves), cluster analysis in sports (NHL, NBA, soccer tracking). Multi-week traps: overfitting to single-season clusters, small sample volatility across weeks, regression to mean for extreme shooters/goalies (e.g., Holtby 5/5, Rinne 13/13 likely unsustainable), hot hand fallacy.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is about game theory / adaptive behavior. Shooters may regress to habitual paths under crisis (high-pressure shootout rounds). Goalies anticipate based on shooter history (recursive theory of mind: I think that he thinks that I think...). Counter-trap: goalie cheats to expected cluster, shooter exploits by choosing unexpected path. Clock: shootout rounds and scores as contextual features; late-round pressure changes decision horizons.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: rink dimensions (IIRC NHL rink is 61m x 26m), blue line to goal distance, blade/ice friction, skate acceleration limits. Biomechanical: maximum human acceleration, deke mechanics, shot release time, goalie reaction time (~0.2-0.3s), lateral movement speed. Weather: indoor arena, climate controlled, so weather veto is null/indoor constant; ice temperature/resurfacing (Zamboni) affects glide. Veto proof: any claimed path advantage must satisfy physical feasibility (acceleration bounds, time-to-goal constraints) and not be confounded by arena microclimate.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards? Or some framework) veto scenarios + predictions. I'll create 3 counterfactual scenarios:
1. Veto: If shooter in Cluster 4 (Down the Middle, 27.8%) switches to Cluster 1 (Wide Left, 32.9%) but goalie pre-positions based on shooter handedness, success rate collapses to save rate due to reduced angle and shorter goalie reaction distance. Prediction: conditional success \( P(S=1|\text{switch}, \text{goalie pre-positioned}) < P(S=1|C=4) \).
2. Veto: Right-handed shooter attacking goalie's right (backhand side) per paper's finding, but if goalie is right-gloved (not left-gloved), the handedness advantage reverses or vanishes. Prediction: \( P(S=1|H=R, C=3, G=R) \approx P(S=1|H=L, C=3, G=L) \) or lower, nullifying the main effect.
3. Veto: Small-sample "best shooter" (e.g., 4/5 = 80%) regresses; over next 20 attempts, success rate approaches cluster mean (~30%) rather than maintaining 80%, due to binomial sampling variance and goalie adaptation. Prediction: \( \hat{p}_{new} \in [0.20, 0.40] \) with 95% CI excluding 0.80.

Wait, I must not mention odds/betting. RLVR counterfactual vetoes are fine as long as no betting lines.

I need to ensure total word count >= 1000 across all sections. Let me plan generously.

Also need exact verbatim quotes from source with [PAGE 2] citations. Let me extract some:
- "In the NHL, the shootout takes place if a tie remains at the end of overtime by pitting a single shooter against the opposing goalie in a mano a mano bid to seal the game." [PAGE 2]
- "The trajectories were smoothed with spline interpolation and clustered into 6 groups with functional cluster centres modelled as Bézier curves." [PAGE 2]
- "Cluster 1 consists of attempts where the shooter takes a wide path crossing the blue line near the left face-off dot, and attacking the net from the goalie’s right-hand side." [PAGE 2]
- "Right-handed shooters performed better overall than left-handed (although it’s worth noting this was mostly against left-gloved goalies as well)." [PAGE 2]
- "Based on the clusters, changing the angles for the goalie and skating to the side of ones backhand appear to give shooters a higher chance of scoring." [PAGE 2]

Let me start writing. I need to be careful with LaTeX formatting inside XML. I'll use standard LaTeX.

Word count check: I'll aim for roughly 200-250 words per section minimum, with THINK_TRACE being 400+. Total well over 1000.

Let me draft:

<THINK_TRACE>
(400+ words) Multi-hop derivation:
1. Data ingestion: 1,154 attempts, computer vision tracking. [PAGE 2]
2. Preprocessing: spline interpolation smoothing raw trajectories. Functional data analysis.
3. Clustering: 6 groups, Bézier curve cluster centers, domain blue line to shot/deke.
4. Feature augmentation: spatiotemporal + contextual (handedness, dekes, rounds, scores).
5. Outcome heterogeneity: empirical success rates vary by cluster (25.6% to 32.9%).
6. Effect modification: shooter handedness × goalie glove hand interaction; right-handed shooters better mostly vs left-gloved goalies.
7. Mechanism: changing angles + backhand side increases scoring chance.
Gray zones:
- OCR/table corruption: "329%" likely 32.9% [PAGE 2], missing values in best/worst goalie table.
- Selection bias: clustering restricted to blue-line-to-shot paths; attempts that don't reach shot/deke location excluded from cluster denominator but maybe included in total? Text says "allowed for more tracks to be clustered."
- Small-n inference: best/worst shooter requires min 5 attempts; cluster 6 n=119 but individual cells sparse.
- Endogeneity: shooter selects path based on goalie stance; cluster is not randomly assigned.
- Temporal non-stationarity: two seasons pooled; goalie adaptation across weeks.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal definitions:
Let \( \mathcal{D} = \{ \mathbf{x}_i(t) \}_{i=1}^{1154} \) be raw tracked shooter position \( \mathbf{x} \in \mathbb{R}^2 \) (meters) over time \( t \in \mathbb{R} \) (seconds), \( i \) indexes attempts. [PAGE 2]
Spline smoothing: \( \hat{\mathbf{x}}_i(t) = \text{Spline}(\mathbf{x}_i(t)) \).
Bézier cluster center for cluster \( c \): \( \mathbf{B}_c(u) = \sum_{k=0}^{K} \binom{K}{k}(1-u)^{K-k}u^k \mathbf{P}_{c,k}, u \in [0,1] \). [PAGE 2]
Assignment: \( C_i = \arg\min_c \int_0^1 \| \hat{\mathbf{x}}_i(u) - \mathbf{B}_c(u) \|^2 du \).
Success indicator: \( Y_i \in \{0,1\} \), \( Y=1 \) goal, \( Y=0 \) save.
Empirical rate: \( \hat{p}_c = \frac{1}{n_c} \sum_{i:C_i=c} Y_i \), \( n_c = \sum_{i:C_i=c} 1 \).
Cluster table: [PAGE 2]
\( n_1=173 (15.0\%), \hat{p}_1=0.329 \)
\( n_2=243 (21.1\%), \hat{p}_2=0.329 \)
\( n_3=188 (16.3\%), \hat{p}_3=0.309 \)
\( n_4=212 (18.4\%), \hat{p}_4=0.278 \)
\( n_5=219 (19.0\%), \hat{p}_5=0.256 \)
\( n_6=119 (10.3\%), \hat{p}_6=0.328 \)
\( n_{\text{tot}}=1154, \hat{p}_{\text{tot}}=0.302 \)
Conditional handedness: \( \hat{p}(c,h) \), e.g., cluster 1 left-hand 0.317, right-hand 0.336.
Breakdown regimes: \( n_c < 30 \) invalidates normal approximation; min-5-attempt filter for best/worst; split-season pooling assumes stationarity \( p^{(2017\text{-}18)} = p^{(2018\text{-}19)} \).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical lineage: Early shootout research relied on event data (shot location, outcome) without trajectory geometry [PAGE 2 implies "typically measured shooting success rates based on eventing data"]. Sportlogiq computer vision introduces spatiotemporal tracking. Functional clustering via splines/Bézier curves borrows from FDA (Ramsay & Silverman) and sports trajectory clustering (NBA player movement, soccer passing networks). Multi-week traps: (1) small-sample volatility—4/5 shooter (80%) vs cluster mean 30%; binomial standard error \( \sqrt{0.8(0.2)/5} \approx 0.179 \), so 4/5 is statistically indistinguishable from 0.30 at conventional levels. (2) Goalie adaptation: frequent goalies (Markstrom 34/47 across contexts) adjust over weeks, eroding initial path advantages. (3) Season-end standings pressure changes shooter risk preferences in late rounds; pooling 2017-18 and 2018-19 ignores playoff-race heterogeneity.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under high-leverage shootout rounds (contextual attribute: rounds and scores) [PAGE 2], shooters revert to well-rehearsed paths rather than optimizing against the specific goalie. Recursive theory of mind: Shooter chooses cluster \( c \) anticipating goalie positioning \( g(c) \); goalie chooses stance \( g \) anticipating shooter's anticipated cluster \( c(g) \); fixed point is a mixed-strategy equilibrium, not pure cluster dominance. Counter-trap: If Cluster 1 (Wide Left, 32.9%) becomes overused, goalies pre-shift to the shooter's backhand side, converting wide angle into a narrow shooting lane and collapsing \( \hat{p}_1 \). Clock: Shootout round index \( r \) and score differential \( \Delta \) act as time pressure; as \( r \) increases, exploration decreases and habit regression intensifies, making early-round cluster advantages non-stationary in later rounds.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NHL rink \( 60.96\text{m} \times 25.91\text{m} \); blue line to goal line \( \approx 18.3\text{m} \) (neutral zone + attacking zone). Skater must cover this distance while decelerating for shot/release; human sprint acceleration \( a \lesssim 3\text{ m/s}^2 \), max speed \( \approx 9\text{ m/s} \). Time-to-goal \( \tau \approx 2.5\text{--}3.5\text{s} \). Goalie lateral reaction time \( \approx 0.2\text{--}0.3\text{s} \); any path that forces goalie movement beyond \( v_{\text{goalie}} \tau \) creates scoring margin.
Biomechanical layer: Deke requires stickhandling frequency \( f \approx 2\text{--}3\text{ Hz} \) and lateral puck displacement \( \approx 0.3\text{--}0.5\text{m} \); backhand shots have lower release velocity than forehand but greater deception.
Weather layer: Indoor arena; ambient temperature and humidity held near constant, ice resurfacing (Zamboni) creates inter-period friction variance \( \mu_{\text{ice}} \in [0.01,0.03] \). Since no outdoor weather exists, weather veto is vacuous/constant; however, ice temperature drift across a multi-game week can alter glide coefficients and thus trajectory curvature.
Veto proof: Any path-selection prescription must satisfy \( \int_0^\tau \| \ddot{\mathbf{x}}(t) \| dt \le a_{\max} \tau \) and goalie-reachability constraint \( \| \mathbf{x}_{\text{shot}} - \mathbf{x}_{\text{goalie}}(0) \| > v_{\text{goalie}} \tau_{\text{reaction}} \); otherwise the cluster effect is physically unrealizable.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Veto by goalie pre-positioning. Counterfactual: All Cluster 4 (Down the Middle, \( n_4=212, \hat{p}_4=0.278 \)) shooters switch to Cluster 1 geometry (Wide Left), but goalies observe the switch and pre-position on the shooter's backhand side. Prediction: \( P(Y=1|\text{switch to C1}, \text{goalie pre-positioned}) < 0.278 \), likely near save-dominant because lateral angle is removed and goalie cut-down reduces open-net area. Verifiable via held-out tracking: compare actual C1 success against simulated C4 shooters forced into C1 paths with goalie reaction labeled pre-shifted.
Scenario 2: Veto by handedness-goalie interaction. Counterfactual: Right-handed shooters attack from goalie's right (backhand side) as recommended [PAGE 2], but goalie is right-gloved (not left-gloved). The paper notes right-handed superiority was "mostly against left-gloved goalies." Prediction: \( \hat{p}(H=R, C=\text{right-side}, G=R) \le \hat{p}(H=L, C=\text{right-side}, G=L) \); the main effect vanishes or reverses when glove hand is matched. Verifiable by stratifying the 1,154 attempts by goalie glove hand (if available) or by goalie catching hand metadata.
Scenario 3: Veto by regression to the mean. Counterfactual: "Best shooter" M. Cammalleri 4/5 (80%) in Cluster 1 [PAGE 2] is granted 20 additional attempts under identical cluster conditions. Prediction: Posterior predictive success rate \( \tilde{p} \) shrinks toward cluster mean 0.329; with Beta(1,1) prior, \( \tilde{p} = (4+1)/(5+2) \approx 0.714 \) after 5, but after 20 more attempts at cluster-average performance, \( \tilde{p} \approx (4+6)/(25+2) \approx 0.370 \), far below 0.80. A naive model that treats 4/5 as a stable skill parameter would fail this out-of-sample test; verifiable by tracking the same shooter's next 15-25 shootout attempts.
</RLVR_COUNTERFACTUAL_VETOES>

Now I need to check word counts. Let me estimate:
THINK_TRACE: probably around 350-450 words. Need to ensure >=400.
SOURCE_OPERATORS: around 250-300.
RETROCAUSAL: around 200.
RECURSIVE: around 200.
CROSS_LAYER: around 250.
RLVR: around 250.
Total likely around 1500+. Good.

I need to make sure I don't mention betting. I haven't.

I need to ensure exact [PAGE 2] citations and verbatim quotes. I included some quotes. Let me add more exact quotes with page markers.

Let me refine the text to ensure quality and word count.

I'll write it out fully now, ensuring the XML tags are exact.

One thing: The user said "PAGES: 2". I will treat the provided text as [PAGE 2]. If it spans multiple pages, I can't tell from the text, so I'll cite [PAGE 2] for all source claims as that's the page given.

Let me make sure to include verbatim quotes exactly as they appear (accounting for OCR weirdness but quoting the readable parts).

Verbatim quotes to use:
1. "In the NHL, the shootout takes place if a tie remains at the end of overtime by pitting a single shooter against the opposing goalie in a mano a mano bid to seal the game." [PAGE 2]
2. "The trajectories were smoothed with spline interpolation and clustered into 6 groups with functional cluster centres modelled as Bézier curves." [PAGE 2]
3. "Right-handed shooters performed better overall than left-handed (although it’s worth noting this was mostly against left-gloved goalies as well)." [PAGE 2]
4. "Based on the clusters, changing the angles for the goalie and skating to the side of ones backhand appear to give shooters a higher chance of scoring." [PAGE 2]
5. "Given how important each point is in the standings, finding a competitive advantage in these scenarios could be the difference between making the playoffs and ending the season early." [PAGE 2]
6. "Research on shootouts has typically measured shooting success rates based on eventing data and observable aspects of the shootout attempt. We consider these along with tracking the paths and changes in shooter speed and acceleration during their attempt." [PAGE 2]

These are good.

Now, about "ZERO TOY EQUATIONS": I need formal LaTeX equations with SI units. I have spline, Bézier, empirical probability, binomial SE, beta-binomial shrinkage, acceleration bounds, reaction time. All good. No fake ratios like Force/Fatigue.

I need to ensure the response uses the exact XML section names.

Let me write the final response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source text reports a player-tracking analysis of 1,154 NHL shootout attempts from the 2017-2018 and 2018-2019 regular seasons, collected by Sportlogiq using computer vision [PAGE 2]. The causal chain begins with raw spatiotemporal tracks \(\mathbf{x}_i(t)\) in meters over seconds for each shooter \(i\). These raw tracks are smoothed via spline interpolation, converting noisy computer-vision observations into differentiable functional objects. The smoothed trajectories are then clustered into six groups whose functional cluster centers are modeled as Bézier curves. Clustering is restricted to the path from the blue line to the shot or deke location, a design choice that increases the number of clusterable tracks but implicitly conditions the analysis on attempts that reach a shooting/deke decision point [PAGE 2].

Once cluster membership \(C_i \in \{1,\dots,6\}\) is assigned, the paper overlays contextual features: shooter and goalie handedness, dekes, goal information, shootout rounds, and scores [PAGE 2]. The outcome \(Y_i \in \{0,1\}\) is binary—goal or save—and the empirical success rate \(\hat p_c\) varies substantially across clusters, from 25.6% (Cluster 5, Narrow Right) to 32.9% (Clusters 1 and 2) [PAGE 2]. A second-order effect modifier is shooter handedness crossed with goalie glove hand: right-handed shooters outperformed left-handed shooters overall, but the authors caution this was mostly against left-gloved goalies [PAGE 2]. The proposed mechanism is geometric: changing the goalie’s angles and skating toward the shooter’s backhand side increases scoring probability [PAGE 2].

Gray-zone audit. First, the cluster success table contains OCR-corrupted entries (e.g., “329%” rather than 32.9%) and garbled best/worst goalie cells, so exact cell-level inference is fragile [PAGE 2]. Second, the best/worst shooter and goalie designations require a minimum of five attempts, which truncates the tails of the small-sample distribution and can label binomial noise as skill; a 4/5 shooter (80%) has a standard error of roughly 17.9 percentage points, making it statistically indistinguishable from the 30.2% league mean at conventional confidence levels. Third, cluster assignment is endogenous: shooters select paths based on goalie stance, ice conditions, and personal habit, so \(C\) is not a randomized treatment and \(\hat p_c\) conflates path geometry with shooter quality. Fourth, pooling two seasons assumes stationarity \(p^{(2017\text{-}18)} = p^{(2018\text{-}19)}\), but goalie adaptation across weeks and late-season standings pressure can shift choice probabilities. Fifth, the “frequent shooter” observation that five of the six most frequent shooters performed above their cluster average is subject to selection bias: frequent shooters are likely higher-skill players, so cluster-relative performance may reflect player fixed effects rather than path optimality. Finally, clustering only on blue-line-to-shot/deke paths excludes attempts that break down before that spatial boundary, potentially inducing survivorship bias in the estimated path-success relationship [PAGE 2].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and page-cited breakdown.

Let attempt \(i\) have raw tracked position \(\mathbf{x}_i(t) \in \mathbb{R}^2\) measured in meters (m) at time \(t \in \mathbb{R}\) measured in seconds (s), \(i = 1,\dots,1154\) [PAGE 2]. The spline-smoothed trajectory is denoted \(\hat{\mathbf{x}}_i(t) = \mathcal{S}\{\mathbf{x}_i(t)\}\), where \(\mathcal{S}\) is a smoothing-spline operator minimizing a penalized squared-error criterion with units of \(\text{m}^2\) plus a curvature penalty in \(\text{m}/\text{s}^2\).

Each cluster center \(c\) is a Bézier curve
\[
\mathbf{B}_c(u) = \sum_{k=0}^{K} \binom{K}{k}(1-u)^{K-k} u^k \mathbf{P}_{c,k}, \qquad u \in [0,1],
\]
with control points \(\mathbf{P}_{c,k} \in \mathbb{R}^2\) (m) and curve parameter \(u\) dimensionless [PAGE 2]. Shooter \(i\) is assigned to cluster
\[
C_i = \arg\min_{c \in \{1,\dots,6\}} \int_0^1 \left\| \hat{\mathbf{x}}_i(u) - \mathbf{B}_c(u) \right\|^2 du,
\]
where the integrand has units \(\text{m}^2\).

The binary outcome is \(Y_i = 1\) for a goal and \(Y_i = 0\) for a save. The cluster-conditional empirical success rate is
\[
\hat p_c = \frac{1}{n_c} \sum_{i: C_i = c} Y_i, \qquad n_c = \sum_{i: C_i = c} 1,
\]
with \(\hat p_c\) dimensionless probability in \([0,1]\), equivalently reported as percent (\(\times 100\)) [PAGE 2].

Cluster breakdown from the source table [PAGE 2]:
\[
\begin{array}{c|c|c|c}
\text{Cluster} & \text{Description} & n_c\;(\% \text{ of } 1154) & \hat p_c \\
\hline
1 & \text{Wide Left} & 173\;(15.0\%) & 0.329 \\
2 & \text{Narrow Left} & 243\;(21.1\%) & 0.329 \\
3 & \text{Wide Right} & 188\;(16.3\%) & 0.309 \\
4 & \text{Down the Middle} & 212\;(18.4\%) & 0.278 \\
5 & \text{Narrow Right} & 219\;(19.0\%) & 0.256 \\
6 & \text{Right Dip} & 119\;(10.3\%) & 0.328 \\
\hline
\text{Total} & - & 1154\;(100.0\%) & 0.302
\end{array}
\]
Handedness-conditioned rates (percent) from the same table [PAGE 2]: Cluster 1 left-hand 31.7%, right-hand 33.6%; Cluster 2 left-hand 29.7%, right-hand 34.9%; Cluster 3 left-hand 30.0%, right-hand 34.2%; Cluster 4 left-hand 24.2%, right-hand 31.0%; Cluster 5 left-hand 25.0%, right-hand 26.9%; Cluster 6 left-hand 33.7%, right-hand 26.7%; totals left-hand 28.7%, right-hand 32.3%.

Binomial standard error for a shooter with \(m\) attempts and observed rate \(\hat p\):
\[
\operatorname{SE}(\hat p) = \sqrt{\frac{\hat p(1-\hat p)}{m}} \quad \text{(dimensionless probability points)}.
\]
For a 4/5 shooter, \(\operatorname{SE} \approx \sqrt{0.8(0.2)/5} \approx 0.179\), i.e., 17.9 percentage points.

Breakdown / singularity regimes: (i) normal approximation invalid when \(n_c \hat p_c < 5\) or \(n_c(1-\hat p_c) < 5\); several best/worst shooter cells sit near this boundary; (ii) the min-5-attempt filter for “best/worst” designations induces left-censoring of low-volume players; (iii) two-season pooling assumes temporal stationarity of \(\hat p_c\), which fails if goalies adapt across weeks; (iv) cluster-specific handedness cells are sparse (e.g., Cluster 6 has only 119 total attempts split by handedness), so interaction estimates are high-variance.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The paper situates itself against prior shootout research that “typically measured shooting success rates based on eventing data and observable aspects of the shootout attempt” [PAGE 2]. That lineage descends from classical sports statistics: box-score and event-data goal percentages, shot-location heat maps, and binary logistic regressions on discrete covariates (shot type, distance, game state). The present work extends this by importing functional data analysis—spline smoothing and Bézier-curve cluster centers—from the broader trajectory-modeling literature used in NBA player movement, soccer passing networks, and GPS/wearable analytics. Sportlogiq’s computer-vision pipeline supplies the spatiotemporal layer (“changes in shooter speed and acceleration”) that event data cannot observe [PAGE 2].

Multi-week traps. First, small-sample volatility: the “best shooter” list includes 4/5 and 5/5 performances, but over a multi-week horizon these are unlikely to persist. A true skill of 32.9% sampled over five attempts yields 4 or more goals with probability \(\sum_{k=4}^{5} \binom{5}{k} 0.329^k (1-0.329)^{5-k} \approx 0.054\), i.e., roughly a 5% tail event; thus labeling such shooters as elite is a regression-to-the-mean trap. Second, goalie adaptation: frequent goalies such as J. Markstrom (34/47 across contexts listed in the table) [PAGE 2] accumulate shooter-specific scouting reports; as goalies learn a shooter’s favored cluster, the initial path advantage erodes, making early-season cluster coefficients non-stationary in later weeks. Third, contextual non-stationarity: shootout rounds and scores are explicit features [PAGE 2], but playoff-race intensity—“the difference between making the playoffs and ending the season early” [PAGE 2]—varies across the season, so a model fitted to the full two-season pool may misestimate late-round behavior when the stakes (and shooter risk preferences) shift. Fourth, surface microclimate: although the arena is indoor, ice-resurfacing cycles across a week of games alter friction and glide coefficients, which can change trajectory curvature enough to reassign borderline paths between adjacent clusters (e.g., Cluster 5 Narrow Right vs. Cluster 6 Right Dip).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: under high-leverage contextual states (late shootout rounds, close scores) [PAGE 2], shooters tend to regress to well-rehearsed path clusters rather than re-optimizing against the opposing goalie’s current stance. If a shooter’s crisis habit is Cluster 4 (Down the Middle, \(\hat p_4 = 0.278\)), the observed cluster average may overstate the value of that path in equilibrium because goalies anticipate the habit and pre-position.

Recursive theory of mind: the shooter chooses cluster \(c\) anticipating goalie positioning \(g(c)\); the goalie chooses stance \(g\) anticipating that the shooter anticipates \(g\). Formally, this is a fixed-point problem in which neither pure cluster dominance nor pure goalie positioning is stable; the solution is a mixed-strategy equilibrium over path geometries. The paper’s recommendation—“skating to the side of one’s backhand” to change the goalie’s angles [PAGE 2]—is only a strict advantage if the goalie does not recursively pre-adjust to that exact backhand-side approach.

Counter-trap: if Cluster 1 (Wide Left, \(\hat p_1 = 0.329\)) becomes overused because of its high observed rate, goalies cheat toward the shooter’s backhand side earlier in the approach. This collapses the angular advantage and can push the realized success rate below Cluster 4’s baseline, turning the “optimal” cluster into a trap.

Clock: the shootout round index \(r\) and score differential act as a finite-horizon clock. As \(r\) advances and the score remains tied, exploration declines and habit regression intensifies; therefore a cluster advantage estimated from all rounds [PAGE 2] may not hold in round 5 or sudden death, where shooters revert to dominant-hand, low-deke, direct paths and goalies play deeper. Any implementation that ignores the \((c, g, r)\) recursion will systematically overvalue static cluster rankings.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer. An NHL rink is approximately \(60.96\,\text{m} \times 25.91\,\text{m}\); the blue line to the goal line spans roughly \(18.3\,\text{m}\) across the attacking zone. A shooter must cover this distance while managing speed for the shot or deke release. Human on-ice acceleration is bounded above by roughly \(a_{\max} \lesssim 3\,\text{m}/\text{s}^2\), with elite sprint speed near \(9\,\text{m}/\text{s}\). Time-to-goal for a shootout approach is on the order of \(\tau \approx 2.5\text{–}3.5\,\text{s}\). Goalie lateral reaction time is approximately \(0.2\text{–}0.3\,\text{s}\), and goalie lateral speed is bounded by \(v_{\text{goalie}}\). A veto condition for any path-selection prescription is therefore
\[
\int_0^\tau \left\| \ddot{\mathbf{x}}(t) \right\| dt \le a_{\max}\,\tau,
\]
and the shot release must occur outside the goalie’s reachable set:
\[
\left\| \mathbf{x}_{\text{shot}} - \mathbf{x}_{\text{goalie}}(0) \right\| > v_{\text{goalie}}\,\tau_{\text{reaction}}.
\]
If a cluster’s empirical advantage relies on trajectories violating these bounds (e.g., requiring superhuman deceleration or instantaneous goalie displacement), the effect is physically unrealizable and vetoed.

Biomechanical layer. A deke imposes stickhandling frequency on the order of \(2\text{–}3\,\text{Hz}\) and lateral puck displacement of roughly \(0.3\text{–}0.5\,\text{m}\). Backhand shots generally have lower release velocity than forehand shots but greater deception, consistent with the authors’ claim that attacking from the backhand side raises scoring probability [PAGE 2]. However, release time must remain under the goalie’s reaction window; any “angle” benefit that adds excess stickhandling time and exceeds \(\tau_{\text{reaction}}\) is vetoed by biomechanics.

Weather layer. The shootout occurs indoors under climate control, so outdoor meteorological variables (wind, temperature, precipitation) are absent; the weather veto is vacuous/constant. The non-vacuous environmental variable is ice condition: Zamboni resurfacing produces inter-period friction variation, with ice friction coefficient \(\mu_{\text{ice}} \in [0.01,0.03]\) depending on temperature and wear. Across a multi-game week, ice softness can alter glide and therefore spline curvature, potentially shifting a trajectory from Cluster 5 to Cluster 6. Since the source pools two full seasons without reporting ice-temperature covariates, ice-induced cluster reassignment remains an unadjudicated confound.

Cross-layer verdict: a path is admissible only if it simultaneously satisfies the spline smoothness prior, the Bézier cluster geometry, the acceleration/time-to-goal physical bounds, the goalie reachability inequality, and the deke biomechanical release window. Cluster-level success rates \(\hat p_c\) that cannot be traced to admissible trajectories are vetoed as measurement or selection artifacts rather than actionable insights [PAGE 2].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios with predictions.

Scenario 1 — Goalie pre-positioning veto. Counterfactual: all Cluster 4 shooters (Down the Middle, \(n_4 = 212\), \(\hat p_4 = 0.278\)) are forced to execute Cluster 1 geometry (Wide Left), but goalies observe the switch and pre-position on the shooter’s backhand side before the shot. Prediction: the conditional success rate satisfies
\[
P(Y=1 \mid \text{switch to C1},\ \text{goalie pre-positioned}) < 0.278,
\]
likely collapsing toward the save-dominant regime because the lateral angle is removed and cut-down reduces open-net area. Verification: hold out a subset of Cluster 4 attempts, simulate C1 paths from their spline-smoothed trajectories, label goalies as pre-shifted or not using frame-by-frame goalie positioning, and test whether the realized goal rate falls below 0.278 with statistical significance.

Scenario 2 — Handedness-by-goalie-glove veto. Counterfactual: right-handed shooters attack from the goalie’s right (backhand side), per the authors’ recommendation [PAGE 2], but the goalie is right-gloved rather than left-gloved. The source notes right-handed superiority was “mostly against left-gloved goalies” [PAGE 2]. Prediction:
\[
\hat p(H=R,\ C=\text{right-side},\ G=R) \le \hat p(H=L,\ C=\text{right-side},\ G=L),
\]
so the main handedness effect vanishes or reverses when glove hand is matched. Verification: stratify the 1,154 attempts by shooter handedness, cluster side, and goalie catching hand (available from tracking or roster metadata); fit \(\hat p(c,h,g)\) and test the interaction contrast. If the interaction term is statistically indistinguishable from zero, the blanket backhand-side prescription is vetoed.

Scenario 3 — Small-sample regression veto. Counterfactual: a “best shooter” such as M. Cammalleri (4/5, 80%) in Cluster 1 [PAGE 2] receives 20 additional shootout attempts under identical cluster conditions. Prediction: a naive model treating 4/5 as stable skill forecasts \(\approx 0.80\) going forward, whereas the Bayesian shrinkage prediction using a Beta(1,1) prior and cluster-mean performance for the new attempts is
\[
\tilde p = \frac{4 + 6}{25 + 2} \approx 0.370
\]
(if the next 20 attempts yield cluster-average 6–7 goals), far below 0.80 and inside the cluster’s binomial confidence interval. Verification: track the shooter’s next 15–25 actual shootout attempts; if the observed rate falls in \([0.20,0.40]\) and excludes 0.80, the original “best shooter” label is rejected as a small-sample artifact and the cluster-level prior is reinstated.
</RLVR_COUNTERFACTUAL_VETOES>