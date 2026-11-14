---
source: "2019 - The Horizon of Sports is Digital Using Fantasy Sports, e-Sports and Electronic Gambling to Find Next Generation of Ticket Buyers - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 13
model: deepseek/deepseek-v4.1-flash-1017
words: 5095
---

<NATIVE_REASONING>
We need answer. Need satisfy XML sections, >=1000 words, no betting lines, formal equations units page quotes, etc. Need analyze paper. User provides source. They expect "GSE + GSI Frontier Reasoning Foundry" likely sports research analysis with trap/veto. Need include exact sections. We need be careful: zero betting lines: no spreads, totals, moneylines, odds. Avoid odds word? "odds" forbidden. Can say probabilities/indexes. We must not mention betting lines. Need not discuss actual game. This paper about sports marketing. Need provide deep multi-hop derivation and gray-zone audit >=400 words in THINK_TRACE. Need cite [PAGE N] and verbatim quotes. Need formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Need discuss source operators/equations. Need retrocausal genealogy historical/scientific lineage & multi-week traps. Recursive theory of mind crisis habit regression vs counter-trap vs clock. Cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes: 3 verifiable scenarios + predictions. Need all within maybe 1500-2000 words. Need no betting lines. Since paper is business analytics, cross-layer physical/biomechanical/weather veto proof? We can frame: no on-field physical/biomechanical/weather variables in source; veto any use for in-game prediction; only marketing audience conversion. Need "proof" based on absence and data layers. We must not invent fake ratios. Equations: use source's P(j|i)=Z_{j,i}/N_i; index I_{j,i}=P(j|i)/P(j) maybe source doesn't explicitly show due missing formula but describes. Need formal LaTeX, units: probability dimensionless, index dimensionless multiplier (x). Info units: bits maybe if using entropy? We can avoid toy. Could express sample selection. Need exact singularity/breakdown regimes: Ni=0 -> undefined; P(j)=0 -> index undefined/infinite; sample size <1000 threshold; clustering constrained 40k; geofence; observation window; device graph probabilistic; behavioral model features top half-million; 128-dimensional embedding; cosine similarity; Ward clustering; 10 seeds; pseudo-random sampling. Need quote exact markers. Need verbatim quotes. Need include [PAGE 2], etc. Need not overdo but with citations.

Need maybe answer as if adjudicating "drive source" and "GSE/GSI"? GSE maybe "Game State Engine"? GSI? Not defined. But likely their framework. Need provide rigorous analysis. Could mention "No predictive claim for a specific contest; source is audience-conversion study."

Need ensure >=1000 words. Let's draft with sections exactly. Need include XML tags. The answer can be 2000+ words. Need no "odds". Avoid words "moneyline", "spread", "total", "betting line". But paper includes "gambling" allowed? Zero betting lines only, not zero gambling mentions. We can mention e-gambling as segment. But be careful not to mention "odds" at all. "Horse Betting" quote contains betting? It's not line. Fine. We can quote source quotes with "Horse Betting" etc. No lines.

Need include "formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes." Let's write equations:

For subpopulation \(i\) and behavior \(j\):
\[
P(j\mid i)=\frac{Z_{j,i}}{N_i},\quad N_i=\sum_j Z_{j,i}? 
\]
Actually Z_{j,i} number devices in both segment j and subpop i, Ni total users in subpop i. Probability dimensionless [0,1]. Baseline \(P(j)=Z_j/N_b\). Behavioral index:
\[
I_{j,i}^{(b)}=\frac{P(j\mid i)}{P(j\mid b)}
\]
Dimensionless ratio, expressed as x in paper. If using info:
\[
D_{\mathrm{KL}}(P_i\|P_b)=\sum_j P(j|i)\log_2 \frac{P(j|i)}{P(j|b)}
\]
units bits. But not in source; label as audit metric. Is that inventing? It's standard formal. They asked equations. Could include as optional. Need avoid fake ratios. Maybe include only source-derived and standard entropy for uncertainty. But there are no probabilities in source formula displayed (missing formulas in text). We can reconstruct. Cite page 5. Good.

For clustering:
Device vector \(v_d = \frac{1}{|H_d|}\sum_{u\in H_d} e_u\), \(e_u\in R^{128}\). Cosine similarity \(s(d,d') = \frac{v_d\cdot v_{d'}}{\|v_d\|\|v_{d'}\|}\), distance \(d=1-s\). Ward objective \(\Delta = \frac{|A||B|}{|A|+|B|}\|\mu_A-\mu_B\|^2\). Units dimensionless. Breakdown: empty histories, zero norm, tie distances, cluster count fixed 10, sample 40k cap, subpop threshold 1000. Need exact singularities.

Need "retrocausal genealogy": historical lineage from audience segmentation, behavioral targeting, device graphs, word embeddings (Skipgram), agglomerative clustering (Ward), MIT Sloan sports analytics 2019, Dstillery taxonomy, prior Lenz/Ibarra 2016. Multi-week traps: observation window Aug 30-Sep 15 2018 only 17 days; sports calendar confounds; geofence game-time only; device graph probabilistic; downsampling. "Retrocausal" means interpreting later conclusions as if causal; lineage. Need mention "The paper selected methodology before collecting data [PAGE 1]" quote. "In order to promote reproducibility we selected our analysis methodology prior to collecting any data." Good.

Need "Recursive theory of mind": crisis habit regression vs counter-trap vs clock. Need interpret: crisis habit regression = e-sports audience? Counter-trap = not assume e-sports -> tickets because subpop2 under-indexes professional sports 0.64x and 0.48x [PAGE 8]. Clock = observation window and season phase. Also team marketers' mental model: target e-sports, but data says no; target fantasy/gambling, but causal conversion unknown. "clock" = temporal decay/seasonality; need prospective test across weeks. Need mention recursive beliefs: fans' self-selection, ad-targeted messaging changes behavior (reflexivity), device graph privacy. Need "crisis habit regression" maybe when audience under pressure defaults to e-sports hype. Counter-trap: don't overcorrect to gambling; gambling affiliation may be older, finance, etc. Clock: 17-day observation and one season. Need cite.

Cross-layer veto: physical/biomechanical/weather veto proof. Source lacks physical/biomechanical/weather telemetry; all data are BRQs, geofences, app SDK, URL vectors. Veto any model that maps these to in-stadium attendance probability without purchase/attendance outcomes. Physical variables (stadium capacity, travel, weather) not collected; "location shared as latitude/longitude" [PAGE 2]. Weather not in paper. Biomechanical not in paper. Therefore cross-layer veto for using as GSE/GSI match predictor. Marketing use only. Need "proof": exhaustive source audit: no weather, biomechanics, injury, roster, field surface, etc. Need maybe mention "game times" geofence only. Good.

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions. Need define verifiable. Example:
1. If e-sports subpopulation 2 were converted into ticket buyers, then a prospective campaign should yield higher stadium attendance for subpop2 than fantasy/gambling. Prediction: based on 0.64x professional sports and 0.48x population observation [PAGE 8], conversion lift should be lower; veto if not. Metric: ticket purchases per 1000 targeted devices, pre-registered. But no betting lines.
2. If observation window (Aug 30-Sep 15 2018) drives result, then re-run across full MLB/NFL seasons should preserve cluster profiles; prediction: subpop labels may shift; veto if e-sports cluster membership changes >? Need not invent threshold? "verifiable" needs threshold. We can specify pre-registered confidence intervals? Need not fake ratio? We can use paper threshold 1000 devices [PAGE 6]. Prediction: subpop 1,3,4 remain below 1000? Hmm.

3. If device graph/probabilistic linkage noise causes apparent overlap, then using deterministic/opt-in panel with purchase outcome should reproduce index ordering; veto if ranking reverses. Metric: Spearman rank correlation? Formal. Prediction: gambling/fantasy > e-sports. We can specify "rank correlation > 0.7" but that's invented. It's an audit prediction, not source. Is that allowed? "RLVR counterfactual vetoes" likely wants verifiable scenarios. We can state thresholds as hypothetical pre-registered. Need maybe avoid "fake equations" but thresholds okay. Could use "if lift ordering reverses". Predictions based on source. Better: "Veto if..." with clear metric.

Need include "3 verifiable RLVR veto scenarios + predictions". RLVR = reinforcement learning with verifiable rewards? We can map to counterfactual reward checks. Need make them verifiable: outcome data (ticket scans, purchases), prospective campaign A/B, replication. Predictions:
- Counterfactual V1: allocate to e-sports vs fantasy/gambling. Prediction: e-sports arm has lower incremental ticket purchase rate than fantasy/gambling; if e-sports arm equals/exceeds, veto source conclusion. Because source says e-sports not ideal.
- V2: Expand window across full season and multiple markets. Prediction: index ordering stable for subpop 5/6/9 vs 2; if not, veto due temporal confound. Use "same direction and rank".
- V3: Add first-party purchase data. Prediction: purchase conversion correlates positively with sports/fantasy index; e-sports negative/weak. Veto if e-sports high. This is from paper's own suggestion "Adding additional data sources, such as purchase data..." [PAGE 11].
Need mention "no betting lines" not relevant.

Need word count >=1000. We can write ~2500 words. Need exact XML sections with required tags. They require ">=1,000-word depth across these exact XML sections". Need include tags exactly. Avoid extra headings? We can include text inside.

Need quote exact [PAGE N] markers. Use verbatim quotes:
PAGE 1: "we selected our analysis methodology prior to collecting any data."
PAGE 2: "Location, shared as a latitude/longitude, is one of the key signals collected from mobile apps"
PAGE 3: "If the location data fell into the polygon dimensions, we qualified that data for inclusion in our experiment."
PAGE 4: "We used this same technique to randomly select an additional 40000 devices observed during the observation period to serve as a baseline for comparison."
PAGE 5: "A device in this subpopulation is X times more likely to be a member of this behavioral audience, compared to a baseline population."
PAGE 6: "Subpopulations 1, 3 and 4 do not meet our 1000 device threshold required for producing significant results and are disregarded for the purposes of this study."
PAGE 8: "Subpopulation 2 under-indexes across multiple sports properties, it is not a fit for driving new ticket purchasers."
PAGE 11: "e-Sports centric subpopulation 2 showed the lowest behavioral overlap with in-stadium attendees."
PAGE 11: "Adding additional data sources, such as purchase data, would only increase the effectiveness of this methodology"
Need cite.

Need formal "assumptions": (A1) behavior model membership approximates propensity; (A2) device graph link stable; (A3) geofence captures attendance; (A4) 17-day window representative; (A5) index ratio monotonically relates to conversion. Explicitly state A5 is not proven. Breakdown regimes:
- \(N_i=0\): undefined P(j|i); clusters below 1000 excluded.
- \(P_b(j)=0\): index undefined/infinite; no baseline membership.
- \(\|v_d\|=0\): empty visitation history or vector cancellation -> cosine undefined.
- Ward clustering local minima / tie distances.
- downsampling 40,070,299 to 40,000; hardware constraints [PAGE 4].
- geofence polygon misses indoor/roof? not in source.
- observational window Aug 30-Sep 15 2018.
- device ID fragmentation/co-location.
- "probabilistic network" not deterministic.

Need "SI/information units": probability dimensionless; index dimensionless; embedding dimensions count 128 (dimensionless); bits if KL. Distances in embedding space dimensionless cosine. Geofence lat/long degrees, but stored as POI; location in degrees; time UTC? Not specified. Maybe mention timestamp units not specified. "40,070,299 unique device IDs" count. "128-dimensional" dimension. "430648822 devices" count.

Need "exact singularity/breakdown regimes" perhaps in SOURCE section and CROSS_LAYER. Good.

Need "gray-zone audit" in THINK_TRACE. Need multi-hop derivation: source paper -> audience indices -> conclusion -> limits -> counterfactual. Need mention "gray-zone" where index vs conversion. Write 450 words.

Need not include "spreads". Avoid "odds" anywhere. The word "gambling" okay. "Betting" appears in quotes maybe "Horse Betting"; no line. Could avoid quote "Horse Betting" to be safe? The source has "Horse Betting" but not line. Zero betting lines: "betting" word maybe could be interpreted? It says never mention spreads, totals, moneylines, or odds. Betting itself not banned. But to be safe, avoid "betting" except quote? We can say e-gambling. If quote includes "Horse Betting", it's source quote, not line. Fine.

Need "DRIVE SOURCE" maybe mention exact paper. Good.

Need "GSE + GSI Frontier Reasoning Foundry" maybe adopt adjudicator voice. Could include "Adjudication: no line/trading content." Good.

Need be concise but thorough. Let's outline:

<THINK_TRACE>
- Source identity and task: business-of-sports audience study; not game-state engine.
- Multi-hop: PAPER's method: data sources BRQ/SDK/device graph; sampling; clustering; index; results; conclusion. Then audit: index != conversion; observational; no ticket outcome; no weather/biomech; limited window; sample cap; threshold.
- Gray-zone: "e-sports not fit" supported for overlap with attendees but not for all digital acquisition; "e-gambling best" is relative within catalog, not causal; "fantasy viable" from indices. Need distinguish "behavioral affinity" vs "ticket purchase". Cite pages.
- Derive: P(j|i) formula; index. If P_b(j) small, ratio unstable. If Ni<1000 excluded. Device graph probabilistic. 128-d embedding. etc.
- Conclusion: Use for audience triage only; veto for predictive GSE/GSI. Word 450+.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Formal equations with LaTeX and units.
- Cite page 5 for index interpretation, page 4 for sampling, page 5 for clustering, page 6 threshold.
- Assumptions and singularities.
- Breakdown regimes.

<RETROCAUSAL_GENEALOGY>
- Lineage: audience taxonomy, device graph, behavioral modeling, skipgram URL embedding, Ward clustering, MIT Sloan 2019. Historical lineage: 2016 Lenz/Ibarra [15], Dstillery patents, etc. Retrocausal trap: reading 2019 conclusion backward to earlier sports analytics as if validated; e-sports hype trap; gambling/fantasy older demographic; multi-week trap: observation 17 days around Aug-Sep; NFL/MLB season overlap; one window; no longitudinal conversion. Mention quote "selected methodology prior to collecting any data" supports pre-reg but not outcome validation. Good.

<RECURSIVE_THEORY_OF_MIND>
- Crisis habit regression: marketer under linear TV threat defaults to e-sports; paper contradicts. Counter-trap: overcorrect to e-gambling without purchase outcome; don't confuse affinity with purchase. Clock: seasonality and timing; "during game times" only; 17-day window; need multi-week. Recursive: fans' behavior is reactive to targeting; device graph; self-selection. Need cite P1 linear TV quote? "linear TV is increasingly threatened by streaming and over-the-top (OTT)" [PAGE 1]. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical/biomechanical/weather veto proof: source has no physical, biomech, weather; only digital/geospatial. Cite P2 location. Therefore cannot adjudicate in-game physical/weather. Veto any use. Also no ticket purchase outcome. Need proof list: variables absent. Cross-layer: digital layer -> physical attendance layer requires purchase data; paper acknowledges [PAGE 11]. Thus veto. Good.

<RLVR_COUNTERFACTUAL_VETOES>
- Three scenarios:
1. Prospective A/B campaign target e-sports vs e-gambling/fantasy, outcome ticket purchases per 1000 devices; prediction e-sports lower; veto if e-sports >=. Cite P8/P11.
2. Replication across full season/multiple markets with same pipeline; prediction stable ordering; veto if subpop2 not lowest overlap or subpop5/6/9 not high; cite P6/P11. Metric: index signs/rank.
3. Add first-party purchase/scan data; prediction purchase conversion follows sports/fantasy indices; veto if e-sports exceeds; cite P11. Metric: incremental lift, confidence interval excludes zero? Need perhaps "pre-registered CI". No fake ratio.
Need each with "verifiable" and "prediction".

Need mention "RLVR" maybe "verifiable reward checks: outcome metric must be observable (ticket scan or purchase)". Good.

Need final no extra. Need ensure word count. Let's produce around 2200 words. Need ">=400 words" THINK_TRACE. Let's count approximate. I'll write generously.

Need exact tags: They specify `<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX...` maybe no closing? We'll use closing properly. They want exact XML sections names. Ensure `<RLVR_COUNTERFACTUAL_VETOES>` not typo. Use all caps.

Need no "odds". Avoid "over/under". Avoid "moneyline". Avoid "spread" except maybe "spread" not used. Avoid "total" maybe can appear as "total number" but that's okay? They said totals as betting. To be safe avoid "total" in betting context. Use "sum". Avoid "line" except "lineage" and "linear TV". "line" in linear TV is not betting line. Fine.

Need mention "zero betting lines" maybe "No wagering lines are used." That's okay? It mentions "wagering lines" maybe includes betting line. The invariants say never mention spreads, totals, moneylines, or odds. We can say "No contest-pricing or wagering content is used." That's okay. But avoid "line". Hmm.

Need maybe not mention "odds" at all. Good.

Need include source quote "Subpopulation 5 consists of hardcore gamblers..."? Not necessary. Avoid "gamblers" maybe okay.

Need formal equations with source. Let's craft.

Need be careful: "e-Gambling" in paper; "gambling" not a line. Good.

Need maybe "GSE/GSI" undefined. We can frame "GSE/GSI adjudication". But not elaborate. Could mention "game-state engine / game-state information"? Might not be needed. Maybe use "GSE/GSI". Hmm.

Need answer likely evaluated by exact structure and content. Let's write with strong analysis.

Let's draft:

<THINK_TRACE>
... ~600 words.
</THINK_TRACE>

Need include quotes and page markers. Let's ensure exact quote marks. For page 8 quote: "As Subpopulation 2 under-indexes across multiple sports properties, it is not a fit for driving new ticket purchasers." Actually source: "As Subpopulation 2 under-indexes across multiple sports properties, it is not a fit for driving new ticket purchasers." Yes.
Page 11: "the e-Sports centric subpopulation 2 showed the lowest behavioral overlap with in-stadium attendees." Source exact "In summary, the e-Sports centric subpopulation 2 showed the lowest behavioral overlap with in-stadium attendees." Good.
Page 5 quote: "A device in this subpopulation is X times more likely to be a member of this behavioral audience, compared to a baseline population." Good.
Page 4 quote: "Due to hardware constraints, the clustering technique outlined in section 2.5, can only consider 40000 devices and requires a down sample of our total population." Good.
Page 6 quote: "Subpopulations 1, 3 and 4 do not meet our 1000 device threshold required for producing significant results and are disregarded for the purposes of this study." Good.
Page 1 quote: "we selected our analysis methodology prior to collecting any data." Good.
Page 2 quote: "Location, shared as a latitude/longitude, is one of the key signals collected from mobile apps through BRQs or our third party licensing agreements." Good.
Page 11 quote: "Adding additional data sources, such as purchase data, would only increase the effectiveness of this methodology" Good.

Need "SI/information/probability units". Mention:
- \(P(j|i)\) dimensionless [0,1].
- \(I\) dimensionless multiplier.
- \(D_{KL}\) bits if log base 2; not source metric, audit-only.
- Embedding \(e_u\in\mathbb{R}^{128}\), 128 dimensions; cosine distance dimensionless.
- Geofence coordinates in decimal degrees; not SI.
- Time window dates; timestamps unspecified.
- Counts devices.

Need "exact singularity/breakdown regimes":
1. \(N_i=0\) or \(N_b=0\) -> undefined.
2. \(P_b(j)=0\) -> index undefined/infinite.
3. \(\|v_d\|_2=0\) -> cosine undefined.
4. \(H_d=\emptyset\) -> vector undefined.
5. \(Z_{j,i}<1000\)? Actually subpopulation threshold not behavior. But cluster <1000 excluded.
6. Downsample cap 40k.
7. 10 cluster seeds and fixed K; local minima.
8. Probabilistic device graph errors.
9. Geofence centroid/polygon: edge/roof error.
10. Observational window.

Need "formal LaTeX equations" with "Ward". Good.

Need "retrocausal genealogy" maybe "Retrocausal" as reading back from 2019 paper to 2016 paper [15] and patents [4][6]. "multi-week traps": 17-day window, NFL and MLB overlapping? Aug 30-Sep 15 NFL season starts, MLB regular season. It captures NFL opening and MLB stretch, not full season; weather? no. Good.

Need "recursive theory of mind" maybe use "crisis habit regression" term. Good.

Need "cross-layer veto adjudication" "physical/biomechanical/weather veto proof" maybe mention "There is no biomechanical variable, no weather variable, no field-surface variable, no injury variable, no roster variable, no game-state variable in the source." This is proof by absence. "The only physical layer is geofence at stadium." Good.

Need "RLVR counterfactual vetoes" maybe "RLVR reward must be verifiable: ticket scans, purchases, campaign assignment." Good.

Need maybe mention "No betting lines" not necessary but can say "No contest-pricing variables appear." Good.

Need final only XML. Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The source is not a game-state or in-game forecasting paper. It is a 2019 MIT Sloan Sports Analytics Conference business-of-sports paper by Lenz, Sabban, and Ibarra, titled “The Horizon of Sports is Digital: Using Fantasy Sports, e-Sports and Electronic Gambling to Find Next Generation of Ticket Buyers.” Its claim chain is: digital audience memberships are observable; stadium attendees are observable through geofenced mobile location; devices can be clustered in a learned URL space; subpopulation behavioral indices can rank which digital audiences overlap most with stadium attendees; therefore teams should invest in e-gambling first, fantasy sports second, and not e-sports as a ticket-buyer channel [PAGE 1][PAGE 11]. The chain is plausible for audience triage but not for causal ticket conversion. The paper explicitly says the methodology was chosen before data collection: “we selected our analysis methodology prior to collecting any data” [PAGE 1]. That supports pre-registration of analysis, not validation of purchase behavior.

Multi-hop derivation: first, Dstillery combines real-time bid requests, licensed app traffic, SDK app usage, and a probabilistic device graph [PAGE 2]. Second, behavioral models are built from seed URL sets and the top half-million predictive URL indices [PAGE 2]. Third, stadium attendance is inferred from latitude/longitude matching to a polygon geofence around each stadium: “Location, shared as a latitude/longitude, is one of the key signals collected from mobile apps through BRQs or our third party licensing agreements” [PAGE 2]. The raw location is deleted and replaced by point-of-interest labels such as “MLB Stadium” or “NFL Stadium” [PAGE 3]. Fourth, 10,000 devices per behavioral segment and 5,000 per league stadium are sampled, but the clustering step is hardware-capped: “Due to hardware constraints, the clustering technique outlined in section 2.5, can only consider 40000 devices and requires a down sample of our total population” [PAGE 4]. Fifth, URLs are embedded in 128 dimensions using time-ordered histories from 430,648,822 devices and a Skipgram-style training procedure; device vectors are averages of visited-URL vectors; cosine distance and Ward agglomerative clustering produce ten mutually exclusive clusters [PAGE 4-5]. Sixth, each cluster receives behavioral index profiles: “A device in this subpopulation is X times more likely to be a member of this behavioral audience, compared to a baseline population” [PAGE 5]. Seventh, clusters 1, 3, and 4 are discarded because “Subpopulations 1, 3 and 4 do not meet our 1000 device threshold required for producing significant results and are disregarded for the purposes of this study” [PAGE 6]. Eighth, results identify subpopulation 2 as e-sports-heavy and sports-under-indexing; the paper concludes: “As Subpopulation 2 under-indexes across multiple sports properties, it is not a fit for driving new ticket purchasers” [PAGE 8]. The final summary says “the e-Sports centric subpopulation 2 showed the lowest behavioral overlap with in-stadium attendees” and recommends e-gambling and fantasy sports [PAGE 11].

The gray-zone audit is the gap between behavioral affinity and ticket buying. The paper measures membership probabilities in audience segments and stadium-geofence presence, not ticket purchase, ticket scan, seat occupancy, or incremental conversion under a campaign. A device seen inside a stadium polygon during game time is evidence of presence, but not necessarily paid attendance, nor future purchase propensity. The paper itself proposes adding purchase data: “Adding additional data sources, such as purchase data, would only increase the effectiveness of this methodology” [PAGE 11]. That sentence is an admission that the current design lacks the strongest conversion outcome. Therefore the correct adjudication is: the paper supports a hypothesis that e-sports overlap is weak and that e-gambling/fantasy overlap is stronger within this catalog and window; it does not prove that reallocating marketing budget to e-gambling causes more ticket sales. Any GSE/GSI-style engine that treats these indices as physical attendance predictions would be overreading the source. The cross-layer gap is especially severe because no weather, biomechanical, injury, roster, field-surface, travel, or game-state variables are collected. The observable physical layer is only a geofence centroid/polygon at stadium scale [PAGE 2-3]. The temporal layer is only August 30, 2018 to September 15, 2018 [PAGE 4], which is a short overlap of MLB late season and NFL opening, not a multi-week or full-season conversion panel. The sample layer is also capped at 40,000 devices for clustering [PAGE 4], so the ten-cluster solution is a downsampled representation, not a census. The conclusion’s direction is credible as an audience-overlap triage, but the causal claim “best audience for investment” requires a prospective purchase-outcome test. That is the gray zone: strong descriptive index separation, weak interventional proof.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal source-derived operators. For subpopulation \(i\) and behavioral segment \(j\), the source defines an empirical inclusion probability in words and by the displayed relation around page 5:

\[
P(j\mid i)=\frac{Z_{j,i}}{N_i},
\]

where \(Z_{j,i}\) is the count of devices in both behavioral segment \(j\) and subpopulation \(i\), and \(N_i\) is the count of devices in subpopulation \(i\). \(P(j\mid i)\) is dimensionless with support \([0,1]\). The baseline probability for baseline population \(b\) is

\[
P_b(j)=\frac{Z_{j,b}}{N_b},
\]

also dimensionless on \([0,1]\). The behavioral index is

\[
I_{j,i}^{(b)}=\frac{P(j\mid i)}{P_b(j)},
\]

a dimensionless multiplier, printed by the paper as “X times more likely” [PAGE 5]. If an information-unit audit is desired, the separation between a subpopulation profile \(P_i\) and baseline \(P_b\) over behaviors \(j\) can be measured by

\[
D_{\mathrm{KL}}(P_i\|P_b)=\sum_j P(j\mid i)\log_2\frac{P(j\mid i)}{P_b(j)}
\]

with units of bits; this is an audit metric, not a source-reported quantity.

Clustering operators: for device \(d\) with visitation history \(H_d\), the embedded device vector is

\[
v_d=\frac{1}{|H_d|}\sum_{u\in H_d} e_u,\qquad e_u\in\mathbb{R}^{128},
\]

where the 128 dimensions are dimensionless embedding coordinates [PAGE 4]. Cosine similarity and distance are

\[
s(d,d')=\frac{v_d\cdot v_{d'}}{\|v_d\|_2\|v_{d'}\|_2},\qquad
\delta(d,d')=1-s(d,d').
\]

Ward agglomerative clustering minimizes the increase in within-cluster sum of squared error; for clusters \(A,B\) with centroids \(\mu_A,\mu_B\),

\[
\Delta(A,B)=\frac{|A||B|}{|A|+|B|}\|\mu_A-\mu_B\|_2^2.
\]

The source fixes ten cluster seeds and produces ten mutually exclusive clusters [PAGE 5].

Assumptions: (A1) behavioral-model membership is a usable proxy for audience affinity; (A2) the probabilistic device graph gives a coherent cross-device user view [PAGE 2]; (A3) a stadium geofence polygon captures game attendance with acceptable error [PAGE 2-3]; (A4) the August 30-September 15, 2018 observation window generalizes beyond that period [PAGE 4]; (A5) index separation maps monotonically to ticket-purchase conversion. A1-A4 are source-internal assumptions; A5 is not established by the paper and is the main breakdown point.

Exact singularity and breakdown regimes: if \(N_i=0\) or \(N_b=0\), \(P(j\mid i)\) or \(P_b(j)\) is undefined; the paper avoids some small-cluster instability by excluding clusters below 1,000 devices [PAGE 6]. If \(P_b(j)=0\), \(I_{j,i}^{(b)}\) is undefined or unbounded, so rare behaviors cannot produce finite indices. If \(H_d=\varnothing\) or if averaged embedding vectors cancel to \(\|v_d\|_2=0\), cosine similarity is undefined. Ward clustering has local-minimum and tie-distance regimes; fixed \(K=10\) and random seeds make cluster labels non-identifiable across replications. The 40,000-device clustering cap is a hard downsampling regime [PAGE 4]. Geofence edge effects, indoor/roofed location error, device-ID fragmentation, and probabilistic graph linkage are additional breakdown regimes. The observation window is a temporal breakdown regime: 17 days cannot represent full MLB and NFL seasons, off-season behavior, or multi-week campaign response. All counts are device counts, not persons; all indices are dimensionless ratios; latitude/longitude are decimal degrees, and time units are dates/timestamps as recorded by the source, not SI seconds in a calibrated physical model.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is audience segmentation plus computational advertising, not physics. The paper inherits Dstillery’s behavioral taxonomy [PAGE 8, reference 3], prior MIT Sloan work by Lenz and Ibarra on digital signals at 2015 MLB events [PAGE 13, reference 15], device-graph and anti-fraud patents [PAGE 2, references 4 and 6], and embedding/clustering methods: Skipgram-style URL embeddings and Ward clustering [PAGE 4-5]. It also inherits the 2019 sports-business anxiety that “linear TV is increasingly threatened by streaming and over-the-top (OTT) service providers” [PAGE 1], which motivates the search for digital ticket-buyer channels. Retrocausally, later readers may treat the 2019 conclusion as if it validated earlier audience-targeting practice. That is a genealogy trap: the paper’s own pre-analysis choice—“we selected our analysis methodology prior to collecting any data” [PAGE 1]—is a reproducibility virtue, but it does not retroactively create purchase outcomes. Multi-week traps: the observation window is only August 30 to September 15, 2018 [PAGE 4]; NFL opening and MLB late-season behavior are mixed; game-time-only stadium collection [PAGE 4] excludes non-game visitors and off-season events; the 40,000-device cap and 1,000-device cluster threshold [PAGE 6] mean small but real audiences can disappear. A second trap is historical category drift: “e-Sports” in 2018-2019 is not identical to 2020s streaming/creator gaming, and “e-Gambling” audience labels may mix legal wagering, horse-racing content, fantasy, and general gambling media. A third trap is retroactive label stability: device-graph segments are probabilistic and can shift across seasons and privacy regimes [PAGE 2]. Thus the paper is a 2019 snapshot in a lineage of behavioral targeting; it should not be back-projected as a durable law of sports-ticket demand.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when linear-TV revenue is threatened, team marketers may habitually regress to the newest digital audience—e-sports—as the default next-generation buyer. The paper is a counter-signal: subpopulation 2 is e-sports-heavy but under-indexes professional sports at 0.64x nationally and 0.48x against the seed population, and the paper concludes it is “not a fit for driving new ticket purchasers” [PAGE 8]. The counter-trap is overcorrecting into e-gambling without purchase data. Subpopulations 5 and 6 are described as gambling/fantasy-heavy and good candidates [PAGE 8-9], but “candidate” is an affinity conclusion, not an incremental-sales conclusion. A recursive theory of mind must model three agents: the team marketer who wants new buyers, the fan who may respond to targeted messaging by changing device behavior, and the analyst who knows the device graph is probabilistic. The fan’s response is reflexive: targeted ads can create the very visitation signals used to infer affinity. The clock matters. The data clock is August 30-September 15, 2018 [PAGE 4]; stadium collection is “Only collected during game time” [PAGE 4]. That clock captures opening-week excitement and late-season baseball, not a full multi-week purchase cycle. A counter-trap is treating the paper’s cross-sectional index as a time-stable habit. The correct recursive stance is: e-sports hype is not automatically a ticket channel; e-gambling/fantasy affinity is not automatically conversion; and any campaign must be read against the season clock, the device-graph clock, and the fan’s reactive clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof: the source contains no biomechanical variables, no injury or roster variables, no field-surface variables, no weather variables, and no in-game physical telemetry. Its physical layer is a stadium geofence derived from latitude/longitude: “Location, shared as a latitude/longitude, is one of the key signals collected from mobile apps through BRQs or our third party licensing agreements” [PAGE 2]. If location matched the polygon, the record qualified for inclusion [PAGE 3]. That is a coarse presence signal, not a biomechanical or weather measurement. Therefore any GSE/GSI use that claims to adjudicate physical performance, weather effects, injury risk, or in-stadium physical readiness is vetoed by absence of the required cross-layer variables. The only legitimate cross-layer inference is digital-audience overlap with stadium-geofence presence. Even that inference is vetoed as a purchase-conversion proof because the paper lacks ticket-scan or purchase outcomes and explicitly suggests adding purchase data [PAGE 11]. The physical layer and digital layer are not joined by a calibrated transfer function; they are joined by a polygon and a device graph. Veto anything stronger.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
1. Prospective channel-allocation veto. Verifiable setup: randomize a fixed marketing budget across e-sports-heavy subpopulation 2 versus e-gambling/fantasy-heavy subpopulations 5/6/9, with ticket purchases or ticket scans as the reward. Prediction from the source: the e-sports arm should produce lower incremental ticket conversion than the e-gambling/fantasy arms, consistent with the 0.64x/0.48x sports under-index and the paper’s conclusion [PAGE 8][PAGE 11]. Veto rule: if the e-sports arm equals or exceeds the e-gambling/fantasy arms on the pre-registered purchase metric, the source’s investment ranking is falsified for that market and clock.

2. Full-season replication veto. Verifiable setup: rerun the same device-graph, geofence, embedding, and Ward-clustering pipeline across a full MLB and NFL season and multiple stadium markets, not only August 30-September 15, 2018 [PAGE 4]. Prediction: the ordering “subpopulation 2 lowest sports overlap; subpopulations 5/6/9 high sports/fantasy overlap” should preserve sign and approximate rank. Veto rule: if subpopulation 2 is not the lowest-overlap sports audience, or if the gambling/fantasy clusters do not remain above the e-sports cluster, the 17-day window is a temporal confound and the 2019 conclusion is not portable.

3. First-party purchase-data veto. Verifiable setup: link the audience clusters to actual ticket-purchase and ticket-scan records, as the paper itself recommends by saying purchase data “would only increase the effectiveness of this methodology” [PAGE 11]. Prediction: purchase conversion should follow the sports/fantasy index direction, with e-sports-heavy subpopulation 2 weak and subpopulations 5/6/9 stronger. Veto rule: if e-sports-heavy devices show equal or higher purchase conversion after controlling for market, season, and campaign exposure, then behavioral affinity is not a valid proxy and the paper’s channel recommendation must be rejected.
</RLVR_COUNTERFACTUAL_VETOES>