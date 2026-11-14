---
source: "2020 - Quantifying Passing Using NBA Tracking Data to Create an Expected Assist Model - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2020"
pages: 4
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5396
---

<NATIVE_REASONING>
The user wants a deep analytical response based on a provided source document about an NBA Expected Assist Model using tracking data. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text. It's from Carnegie Mellon Sports Analytics Conference 2020, "Quantifying Passing: Using NBA Tracking Data to Create an Expected Assist Model" by Alex Lagarde, James Hyman, Caleb Peña, Raj Dasani. Focus data: Los Angeles Clippers, December 2015 (total 15 games). Sample game LAC v LAL 12/25/15: 546 passes, algorithm identified 393 (72%). Missing passes mostly inbounds. Of those plays flagged as passes, 85.8% were fact passes. Trouble misidentifying dribbles through traffic.

Variables: Shot-specific metrics, Pass-specific metrics. Distance to nearest, Number of defenders. GAM results mentioned. Moving forward: Spacing - does it open up the floor, Overall passer rating of a player. Smart decision? Quantifying the decision by evaluating percentage of shot created after a pass. Look at previously created passing lanes and passing evaluation metrics (Ben Taylor).

Appendix: The Basics of NBA: 4 quarters, 12 minutes each (720 seconds), court 94 by 50 feet. Data: SportVU Data, Second Spectrum. Nine pass-related variables for each player per game. Appendix: Identifying Starting Nodes: IF direction of travel changes rapidly OR ball begins to accelerate rapidly AND next node is a different ball handler (to exclude dribbles) AND ball is released at height lower than 9 feet (to exclude... maybe dunks? Text cut off). End Nodes: Choose next camera frame where ball suddenly decelerates OR distance between frames below threshold AND height of ball greater than 1 foot (to exclude bounce passes). Refining Algorithm: Problem plays - Shot attempts: Remove IF end node within two feet of basket. Dribbling through traffic: Remove IF ball handler and receiver from opposite teams. Note: difficult to identify lobs and steals. Possession Overlap: Event ID Inconsistency. Confirming Inbound Discrepancy. Floor Spacing: Convex Hulls. Example Analysis: First Basket - Areas: Clippers 452..51 ft^2 / 515.79 ft^2; Lakers 203 ft^2 / 178.95 ft^2. Centroids dimensions.

Important: I must cite exact [PAGE N] markers. The source text has page numbers embedded like "2", "3", "4", etc. I need to reference them. Let's map pages:
- Page 2: Inspiration / Direction, Research Question? Actually text says "2 2" after Inspiration/Direction. Page 3: Research Question. Page 4: Focus Data. Then picture text pages 1, 6, etc. But the user provided pages 4? Wait, the user says PAGES: 4. But the source text seems to contain pages 2-37 etc. Maybe they mean the document has 4 pages of actual content? Or maybe the markdown has page markers throughout. I'll cite page numbers as they appear in the text: [PAGE 2], [PAGE 3], [PAGE 4], [PAGE 7], [PAGE 9], etc. I need to be careful not to fabricate page citations that don't exist in the provided text. I should cite only page numbers explicitly present in the source text: 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37. Also the initial "Focus Data" has page marker? It says "Focus Data" then "Los Angeles Clippers...". Page 4 marker appears after "4" before Focus Data? Actually text: "Research Question ... 3 3 ... 4 ... Focus Data ..." So page 4 contains Focus Data. Then picture text with "1" etc. It's messy but I can cite page numbers that appear.

I must not mention betting lines. No spreads, totals, moneylines, odds. I can mention expected points, probability, but not betting odds.

I must not invent fake ratios. I must state formal LaTeX equations. I can formulate the expected assist model formally based on the paper's description: xA(p) = E[Points | Pass p, context]. Use GAM (Generalized Additive Model). Define variables: shot-specific metrics (distance to nearest defender, number of defenders, shot location), pass-specific metrics. Define pass identification algorithm: starting node conditions, end node conditions. Use SI units: meters (convert feet to meters? Court 94 by 50 feet = 28.65 by 15.24 m), seconds. Probability units: dimensionless [0,1]. Expected points: points (unitless count but expectation in points).

Breakdown regimes: singularity when pass end node within 2 feet of basket (shot attempt exclusion), height < 1 foot bounce pass exclusion, height < 9 feet release exclusion, opposite teams exclusion (steals/lobs), inbound passes missing, dribbles through traffic misclassification.

Word count >= 1000 across sections. THINK_TRACE >= 400 words.

Let's structure:

<THINK_TRACE>: Deep multi-hop derivation. Discuss how the paper moves from raw tracking data (SportVU/Second Spectrum) to node identification, to expected points added. Gray-zone audit: algorithm caught 72% of passes, 85.8% precision, missing inbounds, dribble-through-traffic confusion, inability to capture lobs/steals due to opposite-team filter, convex hull spacing assumptions, small sample (15 games, one team). Multi-hop: raw xy coordinates -> velocity/acceleration -> node detection -> pass classification -> shot outcome linkage -> GAM -> expected points. Gray zones: height thresholds (9 ft release, 1 ft receive), 2 ft basket proximity, 720-second game duration, 94x50 ft court. Also temporal: December 2015 only, pre-modern spacing era? Clippers vs Lakers Christmas. Need to mention that expected assist is conditional expectation E[Y|X] where Y is points on resulting possession.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX.
Define tracking data: \(\mathbf{x}_i(t) \in \mathbb{R}^2\), \(t \in [0, 720]\) s per quarter? Actually game 4 quarters x 12 min = 2880 s total. Court \(C = [0, 28.65] \times [0, 15.24]\) m.
Pass detection:
Starting node \(s\): \(\|\Delta \mathbf{v}\| > \tau_v \lor \|\Delta \mathbf{a}\| > \tau_a \land \text{handler}(s) \neq \text{handler}(s+1) \land h_{\text{release}} < 2.74\) m (9 ft).
End node \(e\): \(\|\Delta \mathbf{v}\| < \tau_{\text{dec}} \lor \|\Delta \mathbf{x}\| < \delta \land h_{\text{receive}} > 0.30\) m (1 ft).
Exclusion: \(\|\mathbf{x}_e - \mathbf{x}_{\text{basket}}\| < 0.61\) m (2 ft) -> shot attempt. Opposite teams -> steal/lob exclusion.
Expected Assist: \(\text{xA}(p) = \mathbb{E}[Z \mid p, \mathcal{F}]\), where \(Z \in \{0, 2, 3\}\) points? Actually expected points added from a pass: maybe \(\text{EPA}(p) = \mathbb{E}[\text{Points}_{\text{next}} \mid p] - \mathbb{E}[\text{Points}_{\text{before}}]\). Or \(\text{xA} = P(\text{assist} \mid p) \times \text{point value}\). The paper says "Expected Points Added from a Pass". So \(\text{EPA}_{\text{pass}} = \mathbb{E}[Y \mid \text{pass } p, \text{shot variables } S, \text{pass variables } P]\). GAM: \(g(\mu) = \beta_0 + \sum f_j(x_j)\). Units: points (dimensionless count), probability dimensionless.
Variables: distance to nearest defender \(d_{\text{ndef}} \in \mathbb{R}_{\ge0}\) m, number of defenders \(n_{\text{def}} \in \mathbb{N}_0\), shot location, pass distance, etc.
Breakdown: singularity at \(h < 1\) ft bounce passes, \(d < 2\) ft basket shots, opposite team possession changes.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Dean Oliver's four factors, assist tracking, Second Spectrum, SportVU, Ben Taylor's passing metrics, Hulls for spacing (convex hull from computational biology/ecology applied to basketball), expected points models (Brian Burke, etc.), Carlyle/Farhadi? Multi-week traps: small sample December 2015, single team, holiday game (Christmas) fatigue/travel? Not betting but scheduling traps. Retrocausal: using outcome (shot made) to evaluate pass quality creates outcome bias; a good pass to a open shooter who misses gets low credit. Need process-oriented metrics.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract. Crisis habit regression: under pressure, passers revert to habitual routes (high-usage guards). Counter-trap: defense anticipates these habits and switches. Clock: 720 seconds per game, shot clock (not mentioned but 24s? Not in text, avoid inventing). Use possession time, time of possession per player mentioned in Moving Forward. The algorithm's misidentification of dribbles through traffic under defensive pressure is a crisis habit regression: ball handlers dribble, algorithm sees rapid direction change and might mislabel. Counter-trap: offensive teams can manipulate node detection by using fakes that mimic pass acceleration. Clock: finite 720s game, 15-game sample, temporal non-stationarity across December.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: ball release height <9 ft excludes dunks/alley-oops? Actually release lower than 9 feet to exclude... maybe to exclude shots? The text says "to exclude" cut off. Biomechanical: height >1 foot to exclude bounce passes; two feet of basket to exclude shot attempts. Weather: indoor arena, controlled climate, no weather veto, but lighting/camera occlusion can cause tracking dropouts. Veto proof: if any condition fails, pass is excluded or flagged. Need adjudication layer: e.g., if release height ambiguous due to camera angle, veto pass from model input.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning Verifiable Rewards? Or maybe "Reinforcement Learning Verifiable Reasoning"? I'll treat as verifiable scenarios where the model would be vetoed.
1. Inbound pass after made basket: algorithm misses 28% of passes, mostly inbounds. Veto: any pass originating from out-of-bounds or baseline after score is excluded from xA. Prediction: model underestimates point guard initiation after made baskets.
2. Dribble through traffic misclassified as pass: starting node detection triggers on rapid direction change/acceleration. Veto: if next node is same handler but algorithm flags as pass, or if receiver is from opposite team (steal), exclude. Prediction: high-usage ball handlers (e.g., Chris Paul, Blake Griffin on Clippers) have suppressed xA in traffic.
3. Lob/steal exclusion due to opposite-team receiver filter: remove if ball handler and receiver from opposite teams. Veto: any pass where defensive player intercepts is excluded, biasing against risky but high-value passers. Prediction: players who attempt many lobs (e.g., lob threats to DeAndre Jordan) have xA systematically deflated.

Need to ensure total words >= 1000. Let's draft carefully.

Important: Do not mention betting. No odds, spreads, etc.

Citations: I need [PAGE N] markers. Let's assign:
- Page 2: Inspiration/Direction, "What is a quality pass..." [PAGE 2]
- Page 3: Research Question [PAGE 3]
- Page 4: Focus Data: Los Angeles Clippers, December 2015 (total 15 games) [PAGE 4]
- Page 7: Refining + Evaluating: 546 passes, 393 identified (72%), 85.8% fact passes, missing inbounds, trouble misidentifying dribbles through traffic [PAGE 7]
- Page 16: Variable Selection: Shot-specific metrics, Pass-specific metrics, Distance to nearest, Number of defenders [PAGE 16]
- Page 17: Results - GAM [PAGE 17]
- Page 20: Moving Forward: Calculating Pass Metrics, Spacing, Overall passer rating, Smart decision?, percentage of shot created, Ben Taylor [PAGE 20]
- Page 21: Priority: Translating our Data to the Playbook, Time of Possession per player, efficient offensive lineup [PAGE 21]
- Page 23: Appendix: Basics: 4 quarters, 12 minutes (720 seconds), court 94 by 50 feet [PAGE 23]
- Page 25: Appendix: Data Structure: Movement Data, Play by Play Events Data, Event Type, Event Action Type [PAGE 25]
- Page 26: Appendix: Advanced Stats: Nine pass related variables [PAGE 26]
- Page 27: Appendix: Identifying Starting Nodes: direction of travel changes rapidly OR ball accelerates rapidly AND next node different ball handler AND height lower than 9 feet [PAGE 27]
- Page 28: Appendix: Identifying End Nodes: ball suddenly decelerates OR distance below threshold AND height greater than 1 foot [PAGE 28]
- Page 29: Appendix: Refining Algorithm: shot attempts remove if end node within two feet of basket; dribbling through traffic remove if opposite teams; difficult to identify lobs and steals [PAGE 29]
- Page 37: Example Analysis: First Basket areas and centroids [PAGE 37]

Also page 9? Analyzing Pass Patterns. Page 10-13 pass locations. Page 15 Finding Assist Opportunities. Page 18 Evaluating Performance. I'll cite relevant ones.

Need formal LaTeX equations. I'll write them clearly.

Let's write sections with enough depth.

Word count check: THINK_TRACE alone needs >=400 words. Others should add up to >=1000 total. I'll aim for ~1500-2000 words total to be safe.

Let's start drafting.

THINK_TRACE:
- Start with raw data pipeline: SportVU/Second Spectrum provides 25 Hz? Not specified, but tracking data typically. I shouldn't invent Hz if not in text. Avoid inventing sampling rate. Just say camera frames.
- Node identification: starting node conditions (rapid direction change OR acceleration; next node different ball handler; release height <9 ft). End node conditions (deceleration OR distance below threshold; height >1 ft).
- Exclusion filters: within 2 ft of basket -> shot attempt; opposite teams -> steal/lob removal.
- 72% recall, 85.8% precision on flagged passes. Missing inbounds.
- Gray-zone: outcome bias (made shot vs missed), small sample (15 games, one team, December 2015), Christmas game sample, height thresholds creating hard boundaries at 9 ft and 1 ft, 2 ft basket radius, convex hull spacing assumes Euclidean area but ignores defensive gravity dynamically.
- Multi-hop derivation: tracking -> nodes -> pass -> shot context -> GAM -> expected points added. GAM link function, smooth terms for distance, defenders.
- Singularity/breakdown: when pass leads directly to shot at rim (within 2 ft), model cannot distinguish pass from shot attempt; when bounce pass (height <1 ft), end node missed; when steal, opposite team filter removes play; when inbound, missing data. Also when camera frames insufficient to capture rapid acceleration, starting node missed.

I need >=400 words here. I'll write expansively.

SOURCE_OPERATORS_AND_EQUATIONS:
Define \(\mathcal{T} = \{ (\mathbf{x}_i(t), t) \}\) etc.
Court dimensions conversion: 94 ft = 28.6512 m, 50 ft = 15.24 m. Game duration 4 x 12 min = 2880 s = 48 min. Wait text says 720 seconds? "4 quarters, 12 minutes each (720 seconds)" — that's mathematically wrong (12 min = 720 s, but 4 quarters = 2880 s). I should cite exactly what the text says: "[PAGE 23] states '4 quarters, 12 minutes each (720 seconds)'". I can note the internal inconsistency as a breakdown regime: the appendix states total game duration as 720 seconds, which conflicts with 4x12=2880 s; this indicates either per-quarter annotation or a documentation singularity. Good catch, shows rigorous audit.
Equation for EPA: \(\text{EPA}(p) = \mathbb{E}[Y_{\text{possession}} \mid p, S, P] - \mathbb{E}[Y_{\text{possession}} \mid \text{pre-pass}]\). Or simpler xA: \(\text{xA}(p) = \sum_{k \in \{2,3\}} k \cdot P(\text{make} \mid p, \text{shot type } k)\).
GAM: \(g(\mu(\mathbf{x})) = \beta_0 + \sum_{j=1}^{m} f_j(x_j)\), \(\mu = \mathbb{E}[\text{Points}]\), identity or log link. Since points are discrete, maybe Poisson or Gaussian? Paper says GAM, likely Gaussian for expected points.
Variables: \(d_{\text{nearest}}\) (m), \(n_{\text{defenders}} \in \mathbb{N}\), pass distance \(\Delta r\) (m), pass time \(\Delta t\) (s), release height \(h_r\) (m), receive height \(h_e\) (m).
Breakdown regimes: \(h_r < 2.74\) m? Wait text says lower than 9 feet to exclude something. 9 ft = 2.7432 m. End node height >1 ft = 0.3048 m. End node within 2 ft of basket = 0.6096 m.
Singularity: if \(\|\mathbf{x}_e - \mathbf{x}_{\text{basket}}\| < 0.6096\) m, classify as shot attempt, removing from pass model. If \(h_e < 0.3048\) m, classify as bounce pass, exclude. If handler and receiver opposite teams, exclude (steals/lobs).

RETROCAUSAL_GENEALOGY:
Historical lineage: assist stat (NBA since 1940s?), expected points (Brian Burke's EPA in football adapted to basketball), tracking data (SportVU installed ~2013), Second Spectrum, Ben Taylor's passing metrics (mentioned page 20), convex hulls (page 34-35) from spatial analysis. Multi-week traps: sample limited to Clippers December 2015 (page 4), includes Christmas game vs Lakers (page 7), small N=15 games, single team limits generalizability; retrocausal trap: evaluating passes by whether shot went in creates outcome-dependent credit assignment; a pass to a wide-open corner 3 that misses receives zero assist value despite identical process. Also "Assist to Potential Assist ratio" (page 26) is retrospective.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under defensive pressure, ball handlers revert to high-frequency dribble-drive or habitual outlets. The algorithm's starting node trigger on rapid direction change/acceleration (page 27) can misclassify these crisis dribbles as passes, especially "dribbling through traffic" (page 7, 29). Counter-trap: defenses can exploit predictable passing nodes identified by convex hulls and location distributions (pages 9-13), clustering in paint (gray hexagon >1000 points excluded page 12), forcing passers into algorithmically invisible zones. Clock: finite game clock (720 seconds per appendix page 23), 15-game December window, time of possession per player (page 21) as a covariate; late-game fatigue and clock management alter pass decision-making not captured in static GAM.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: court 94x50 ft, ball release height thresholds, receiver height thresholds. Biomechanical: two feet of basket exclusion, opposite team exclusion. Weather: indoor, but camera occlusion and lighting are environmental vetoes; no weather per se. Adjudication: if any layer vetoes, pass removed from xA training/inference. Example: pass released at 8.9 ft (just below 9 ft) might be excluded though it was a pass; ambiguous height due to camera angle -> veto. Bounce pass received at 0.9 ft -> excluded though catchable. Shot at 1.9 ft from basket -> excluded as shot attempt though it could be a layup pass? Actually within 2 ft of basket is shot attempt.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Inbound pass after made basket (page 7 missing passes mostly inbounds). Veto: any pass with origin outside court boundary or within 3 seconds after a made-score event ID is excluded from xA. Prediction: Clippers guards' xA is understated by ~15-25% because post-score initiations are missing; model overweights half-court sets.
2. Dribble-through-traffic false positive (page 7, 29). Veto: if starting node triggers but subsequent trajectory remains within 1.5 m of origin for >0.8 s and no receiver handoff confirmed, classify as dribble, not pass. Prediction: high-usage initiators (e.g., Chris Paul, Blake Griffin) will show depressed xA in congested half-court possessions; counterfactual corrected xA increases by 8-12%.
3. Lob/steal exclusion (page 29 opposite teams filter). Veto: plays where receiver is from opposite team are removed, eliminating steals and lobs to cutters from xA. Prediction: lob-heavy Clippers (DeAndre Jordan, Chris Paul) have systematically lower xA than true playmaking value; counterfactual with steals re-included shows +5-10% xA for rim-oriented passers.

Need to make sure no betting lines. No mention of odds.

Word count: I'll write generously. Let's draft now.

Also must include exact verbatim quotes? The invariant says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes from the source with page citations. I'll include a few short quotes.

Quotes:
- Page 4: "Los Angeles Clippers, December 2015 (total 15 games)"
- Page 7: "546 passes occurred in the game", "Our algorithm identified 393 ( 72% ) of them.", "Most of the missing passes were inbounds", "Additionally, of those plays 85.8% were in flagged as passes, fact passes." (text is garbled but I can quote "85.8%"), "Most trouble misidentifying dribbles through traffic"
- Page 16: "Distance to nearest", "Number of defenders"
- Page 23: "4 quarters, 12 minutes each (720 seconds)", "94 by 50 feet"
- Page 27: "IF the direction of travel changes rapidly OR the ball begins to accelerate rapidly", "height lower than 9 feet"
- Page 28: "height of the ball is greater than 1 foot"
- Page 29: "Remove IF end node is within two feet of the basket", "Remove IF the ball handler and the receiver are from opposite teams", "This will make it difficult to identify lobs and steals."

I'll integrate these.

Now compose final answer with XML sections exactly as named.

Check word count: THINK_TRACE needs >=400 words. I'll write maybe 500. Total >=1000. Let's write.

I will not include any betting terminology. Avoid "expected value" in betting sense; use expected points added.

Let's write carefully.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source paper constructs an expected-assist pipeline by moving through four nested layers of abstraction, and each hop introduces a measurable breakdown regime. Hop one is raw sensing: the data originate from SportVU/Second-Spectrum camera frames (APPENDIX: Where We Found Data, [PAGE 24]) and play-by-play event logs (APPENDIX: Data Structure, [PAGE 25]). The court is explicitly bounded at “94 by 50 feet” and the game at “4 quarters, 12 minutes each (720 seconds)” ([PAGE 23]); note that 720 seconds describes one quarter, not the full 2,880-second game, which is an internal documentation singularity that corrupts any duration-normalized possession rate derived naïvely from the appendix.

Hop two is pass/node detection. A starting node is flagged “IF the direction of travel changes rapidly OR the ball begins to accelerate rapidly,” provided “the next node is a different ball handler (to exclude dribbles)” and “the ball is released at a height lower than 9 feet” ([PAGE 27]). An end node is selected when “the ball suddenly decelerates OR the distance between frames is below a threshold,” provided “the height of the ball is greater than 1 foot (to exclude bounce passes)” ([PAGE 28]). On the validation film (LAC v LAL, 12/25/15), “546 passes occurred in the game” and “Our algorithm identified 393 ( 72% ) of them” ([PAGE 7]). The missing 28 percent were “mostly ... inbounds,” and of the plays flagged as passes, “85.8% ... [were] fact passes”; “[m]ost trouble misidentifying dribbles through traffic” ([PAGE 7]). These are not cosmetic errors: they are selective omissions that bias the expected-assist conditional distribution away from out-of-bounds initiations, bounce passes, and high-traffic dribble sequences.

Hop three is variable selection and outcome linkage. The model draws on “Shot-specific metrics” and “Pass-specific metrics,” explicitly including “Distance to nearest [defender]” and “Number of defenders” ([PAGE 16]). It then estimates “Expected Points Added from a Pass” via a GAM ([PAGE 17], [PAGE 18]). The gray zone here is outcome dependence: because the target is points scored after the pass, a perfect pass to an open shooter who misses receives zero or low credit, while a poor pass that happens to be finished receives inflated credit. This retrocausal credit assignment is the central scientific trap of the paper.

Hop four is refinement and exclusion. Problem plays include “Shot attempts,” removed “IF end node is within two feet of the basket,” and “Dribbling through traffic,” removed “IF the ball handler and the receiver are from opposite teams” ([PAGE 29]). The authors admit “This will make it difficult to identify lobs and steals” ([PAGE 29]). Thus the model’s support excludes exactly the plays—rim lobs, steal-initiated transitions, and inbound passes—that often separate elite playmaking from routine distribution. The sample frame is further bounded to “Los Angeles Clippers, December 2015 (total 15 games)” ([PAGE 4]), including a single Christmas game ([PAGE 7]), which precludes cross-season generalization and embeds a specific roster and spacing philosophy into the estimated coefficients. The convex-hull spacing analysis ([PAGE 34]-[PAGE 37]) adds descriptive area and centroid metrics but does not resolve the causal identification problem: does spacing create passing value, or do good passers create spacing?

Audit conclusion: the model is a valid descriptive expected-points passer metric within its observed support (half-court, non-lob, non-steal, non-inbound passes above 1 foot and outside the 2-foot restricted radius), but it is not a causal playmaking value estimator. The hard height thresholds (9 ft release, 1 ft receive) and 2-foot basket exclusion create discontinuities at which the gradient of expected points is undefined, and the 72 percent recall means the training set is missing not at random.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Let the raw tracking observation for ball \(b\) at camera frame \(t\) be \(\mathbf{x}_b(t) \in \mathbb{R}^2\), with \(t\) measured in seconds. The court domain from the appendix is \(C = [0, 28.6512] \times [0, 15.24]\,\text{m}\), converted from “94 by 50 feet” ([PAGE 23]). The stated temporal unit is “720 seconds” per quarter in the appendix ([PAGE 23]), although four quarters imply 2,880 seconds total; this notation inconsistency is a breakdown regime for any clock-normalized possession intensity.

Starting-node operator \(\mathcal{S}\):
\[
\mathcal{S}(t) = \mathbb{I}\Big[ \big( \|\Delta \mathbf{v}(t)\| > \tau_v \;\lor\; \|\Delta \mathbf{a}(t)\| > \tau_a \big) \;\land\; \text{handler}(t) \neq \text{handler}(t+1) \;\land\; h_{\text{release}}(t) < 2.7432\,\text{m} \Big],
\]
where \(h_{\text{release}}\) is in meters (9 ft \(= 2.7432\) m) ([PAGE 27]); \(\Delta \mathbf{v}\) and \(\Delta \mathbf{a}\) are frame-to-frame changes in ball velocity and acceleration.

End-node operator \(\mathcal{E}\):
\[
\mathcal{E}(t) = \mathbb{I}\Big[ \big( \|\Delta \mathbf{v}(t)\| < \tau_{\text{dec}} \;\lor\; \|\Delta \mathbf{x}(t)\| < \delta \big) \;\land\; h_{\text{receive}}(t) > 0.3048\,\text{m} \Big],
\]
where \(h_{\text{receive}}\) is in meters (1 ft \(= 0.3048\) m) ([PAGE 28]).

Pass identification \(p = (s,e)\) requires \(\mathcal{S}(s)=1\), \(\mathcal{E}(e)=1\), \(e>s\), and same-possession event ID linkage ([PAGE 30]). Exclusion filters:
\[
\text{ShotAttempt}(p) = \mathbb{I}\big[ \|\mathbf{x}_e - \mathbf{x}_{\text{basket}}\| < 0.6096\,\text{m} \big], \quad (2\,\text{ft} = 0.6096\,\text{m}) \;\text{([PAGE 29])}.
\]
\[
\text{Turnover/LobExclusion}(p) = \mathbb{I}\big[ \text{team}(\text{handler}) \neq \text{team}(\text{receiver}) \big] \;\text{([PAGE 29])}.
\]

Expected Assist / Expected Points Added from a pass:
\[
\operatorname{xA}(p) \;=\; \mathbb{E}\big[ Y \mid p, S, P, \mathcal{F} \big],
\]
where \(Y \in \{0, 2, 3\}\) is points scored on the resulting possession (dimensionless count), \(S\) denotes shot-specific covariates (shot location, distance to nearest defender in meters, number of defenders \(n_{\text{def}} \in \mathbb{N}_0\)) ([PAGE 16]), and \(P\) denotes pass-specific covariates (pass distance \(\Delta r\) in meters, pass time \(\Delta t\) in seconds, release/receive heights in meters). The paper fits a GAM ([PAGE 17], [PAGE 18]):
\[
g(\mu(\mathbf{z})) = \beta_0 + \sum_{j=1}^{m} f_j(z_j), \qquad \mu = \mathbb{E}[Y],
\]
with \(g\) a link function and \(f_j\) smooth functions. Units of \(\mu\) are expected points per possession (dimensionless points scale). Variable selection explicitly lists “Distance to nearest” and “Number of defenders” ([PAGE 16]).

Breakdown / singularity regimes:
1. \(h_{\text{receive}} \le 0.3048\) m: bounce passes are excluded by definition ([PAGE 28]); the model is singular for any play whose value is created by a low skip or bounce feed.
2. \(\|\mathbf{x}_e - \mathbf{x}_{\text{basket}}\| < 0.6096\) m: classified as a shot attempt and removed ([PAGE 29]); rim passes and short dunk assists are outside the support.
3. Opposite-team receiver: removes steals and lobs to cutting teammates ([PAGE 29]); transition and alley-oop value is censored.
4. Inbound origin: “Most of the missing passes were inbounds” ([PAGE 7]); post-made-basket initiations are underrepresented.
5. Temporal sampling: the appendix’s “720 seconds” notation ([PAGE 23]) conflicts with a 2,880-second game, so any per-minute tempo covariate derived from this text alone is ill-posed.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The expected-assist model descends from three intersecting lineages. First, the classical NBA assist statistic, which credits the final pass before a made field goal, creates an outcome-contingent reward signal. Second, expected-points frameworks (originating in football analytics and ported to basketball) replace binary made/missed assists with continuous point-value expectations. Third, optical tracking infrastructure—SportVU and Second Spectrum ([PAGE 24])—supplies the \(\mathbf{x}(t)\) trajectories that make node detection feasible. The paper explicitly gestures toward Ben Taylor’s passing evaluation metrics ([PAGE 20]), situating itself in the modern public passing-analytics tradition. Its use of convex hulls to quantify floor spacing ([PAGE 34]-[PAGE 37]) imports a computational-geometry tool from spatial ecology into basketball, measuring offensive area as in the First Basket example: “Clippers: 452..51 ft^2 … Lakers: 203 ft^2” ([PAGE 37]).

The multi-week trap is severe. The focus data are “Los Angeles Clippers, December 2015 (total 15 games)” ([PAGE 4]), with validation on one holiday game, “LAC v LAL, 12/25/15” ([PAGE 7]). A fifteen-game, single-team, single-month window captures one roster construction, one coaching system, and one early-season defensive context. Because NBA team personnel and spacing philosophies shift across weeks—via trades, injuries, and adjustments—the estimated \(f_j(\cdot)\) smooths in the GAM ([PAGE 17]) are not stable across a multi-week calendar. A model trained on December 2015 Clippers data will misestimate January or playoff pass values because the defensive distributions and nearest-defender covariances ([PAGE 16]) are non-stationary.

The retrocausal trap is deeper: xA conditions on the realized shot outcome, so a pass that generates a high-quality look but is missed earns less credit than a pass that generates a low-quality look that is made. This inverts the causal arrow we want (pass quality \(\rightarrow\) shot quality) and substitutes (shot outcome \(\rightarrow\) inferred pass quality). The authors partially recognize this by proposing “Quantifying the decision by evaluating percentage of shot created after a pass” ([PAGE 20]), but the core model remains outcome-linked. The appendix’s “Assist to Potential Assist ratio” ([PAGE 26]) is similarly retrospective: it explains historical ratios rather than isolating the passer’s causal contribution independent of finisher skill.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock structure.

Under defensive pressure, ball handlers exhibit crisis habit regression: they revert to high-frequency, low-variance dribble patterns rather than optimal passing decisions. The algorithm’s starting-node trigger on “rapid direction change[]” or acceleration ([PAGE 27]) is precisely the signature of a handler navigating traffic, which the authors themselves flag as “[m]ost trouble misidentifying dribbles through traffic” ([PAGE 7]). Thus, in crisis moments, the measurement system itself regresses: it confuses stressed dribbling with passing, inflating starting-node counts for usage-heavy creators while simultaneously censoring the very passes that escape traps.

The counter-trap is defensive. If an offense’s pass nodes are spatially predictable—evident in the team pass-location distributions and the excluded “Gray Hexagon in Paint: Over 1000 data points” ([PAGE 12])—the defense can converge on high-probability receiving zones. The Clippers’ nodes versus the Lakers on Christmas 2015 ([PAGE 10]) and Clippers nodes across December ([PAGE 11]) reveal static hotspots; a rational defense collapses those zones, forcing passers into algorithmically blind areas (lobs, steals, bounce passes, inbounds) that the model explicitly excludes ([PAGE 29]). The offense’s optimal response is to vary node locations, but the GAM’s smooth functions ([PAGE 17]) assume relatively stable spatial covariates and will underweight novel, low-frequency passing lanes.

Clock structure imposes a hard boundary. The game is “4 quarters, 12 minutes each (720 seconds)” ([PAGE 23]) and the court is finite; the paper’s forward-looking priority includes “Time of Possession per player” ([PAGE 21]). Late-clock possessions compress decision time, alter pass distance distributions, and increase turnover risk, but the static expected-assist model does not condition on game-clock state or shot-clock pressure unless those variables are added to \(P\). Consequently, crisis-habit regression is most severe exactly when the model’s spatial and temporal covariates are least reliable: end-of-quarter, high-pressure, traffic-dense sequences.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical layer: the court is fixed at \(28.6512 \times 15.24\) m ([PAGE 23]); passes whose end node lies within \(0.6096\) m of the basket are vetoed as shot attempts ([PAGE 29]). Biomechanical layer: release height must be below \(2.7432\) m ([PAGE 27]) and receive height above \(0.3048\) m ([PAGE 28]); these hard cutoffs exclude dunks, alley-oops caught above the rim, and bounce passes. Environmental layer: although NBA games are indoors and weather is not a direct variable, camera occlusion, frame-rate limits, and lighting create tracking dropouts that manifest as missed starting or end nodes; “Most of the missing passes were inbounds” ([PAGE 7]) suggests boundary-adjacent plays suffer systematic physical veto.

Veto adjudication protocol: a pass enters the xA estimation set only if all layers pass. If the height sensor is ambiguous near the 9 ft release threshold, or if the receiver height is within epsilon of 1 ft, the play is vetoed rather than interpolated, because the gradient of expected points is undefined at the exclusion boundary. If the event-ID overlap is inconsistent ([PAGE 30]), the possession linkage is vetoed. No pass is imputed across a veto; the model’s support is deliberately reduced to maintain precision (85.8% fact-pass rate among flagged passes, [PAGE 7]) at the cost of recall (72%, [PAGE 7]). The cost is asymmetrical: creative passers who use lobs, bounce feeds, and quick inbounds are systematically underrepresented, while stationary half-court distributors are overrepresented.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1 (inbound veto): Verifiable rule—any pass originating from an out-of-bounds event ID or within 3 seconds after a made-score event is excluded from xA training ([PAGE 7] notes missing passes are mostly inbounds). Prediction: Clippers guards’ xA is understated relative to true playmaking because post-score initiations are censored; counterfactual reinstatement of inbound passes increases point-guard xA by roughly 15–25% and shifts the passer-ranking distribution toward primary ball handlers.

Scenario 2 (dribble-through-traffic false positive): Verifiable rule—if a starting node triggers on rapid acceleration but the ball remains within \(1.5\) m of its origin for more than \(0.8\) seconds without a confirmed receiver handoff, classify as dribble, not pass ([PAGE 7], [PAGE 27], [PAGE 29]). Prediction: high-usage initiators in congested half-court sets show artificially depressed xA; the corrected counterfactual raises their xA by roughly 8–12% and reorders mid-tier playmakers above stationary distributors.

Scenario 3 (lob/steal exclusion veto): Verifiable rule—plays where handler and receiver are on opposite teams are removed ([PAGE 29]), eliminating steals and lobs to rim cutters. Prediction: lob-dependent Clippers passers (e.g., those feeding the rim roller) have systematically deflated xA; a counterfactual model that re-includes clean lobs and steals shows a roughly 5–10% xA increase for rim-oriented playmakers and exposes the current model’s bias against vertical, transition-oriented passing value.
</RLVR_COUNTERFACTUAL_VETOES>