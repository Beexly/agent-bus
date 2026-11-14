---
source: "2016 - Using Digital Signals To Measure Audience Brand Engagement At Major Sports Events The 2015 MLB Season - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2016"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4925
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about measuring audience brand engagement at MLB events using digital signals. I need to follow strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully analyze the source text provided. The paper is "Using Digital Signals To Measure Audience Brand Engagement At Major Sports Events: The 2015 MLB Season" by Peter Ibarra and Peter E. Lenz from Dstillery.

Key points from the paper:
- Page 1: Introduction - mobile device location data from all MLB stadiums during 2015 season, online browsing behavior. Three steps: identify devices per stadium, probabilistic matching to link devices, calculate affinity index.
- Page 2: Data Collection - three primary sources: RTB bid requests, online clickstream from third party app service providers, location behavior from SDK integrations. Device graph concept.
- Page 2: Geolocation - centroid of pitcher's mount, geofence polygon around stadium grounds. Figure 1 Citifield example.
- Page 3: Device Graph - bi-partite graph, IP addresses, location data, time. Only wifi based IP signals. Devices on same IP within specific period considered connected. Public access IPs excluded.
- Page 3: User Affinity - brand affinity (site/app visitation), market affinity, interest affinity. Classification models.
- Page 3-4: Filtering Erroneous Data - Spatial, Behavioral, Associative filters.
- Page 4: Spatial filter - IP lookup locations less accurate, filter high-count IP-lookup locations.
- Page 4: Behavioral filter - distance and speed between locations, impossible travel speeds (Austin to Miami in 5 mins example).
- Page 4: Associative filter - bot nets, fraudulent ad impressions, machine learning to identify clusters.
- Page 4: Final Data Set - over 16 million unique and accurate location data points across entire 2015 MLB season.
- Page 4-5: Measurement Model - devices only during scheduled baseball games. Fan base definition. Empirical probability P of visit to URL j for team fan base i: P = Zj,i / Ni where Zj,i is sum of visits to URL j by users in fan base i, Ni is total users in fan base i.
- Page 5: Affinity index formula (appears to be missing in text but referenced).
- Page 5: Engagement Evaluation - airline (Colorado Rockies), hotel chain (Chicago Cubs), bank (New York Yankees). Monthly breakdown July, August, September.
- Page 6: Summary Statistics - 20-30% of devices seen at only one game, 70% seen multiple times. Top 3 unique audience: Dodger Stadium, Marlins Park, Oakland Coliseum. Bottom 3: Great American Ballpark, Kauffman Stadium, PNC Park. Five venues with highest count: Dodger Stadium, Busch Stadium, Yankee Stadium, Target Field, PNC Park.
- Page 6: Casual fan (1-2 times) vs avid fan (3+ times). Casual: college websites .edu, entertainment, music (younger). Avid: financial planning, vacation, investment (older).
- Page 6-7: Singular Brand Affinity Score Over Time - scores higher among MLB fan bases exposed to sponsorship, increased as season went on. Regional airline (Rockies) highest engagement. National hotel chain (Cubs), national bank (Yankees). Figure 2 shows July, August, September.
- Page 7: Per Stadium Audience Interest Affinity Scores - Appendix B. Top five eco-conscious: Seattle, San Francisco, Oakland, Washington DC, Denver. Grill Masters top five: Kansas City, St. Louis, Minneapolis, Houston, Dallas.
- Page 7-8: In-Market Affinity Scores - Top 5 auto: Pittsburgh, Detroit, Tampa, Atlanta, Kansas City. Bottom 5: NY-Queens, NY-Bronx, Seattle, San Diego, Boston.
- Page 8-9: Conclusion.
- Appendix A: Stadium centroids with lat/long.

Now I need to write the response with the exact XML sections. I need to be careful about:
- No betting lines whatsoever.
- Formal LaTeX equations only, no toy ratios. The paper itself has formulas like P(j|i) = Zj,i / Ni. I should present this formally.
- Page citations [PAGE N] - the source text has page numbers embedded (1, 2, 3, etc.). I should cite them appropriately.
- Verbatim quotes where appropriate.
- >=1000 words total across sections, with THINK_TRACE >=400 words.

Let me structure this carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I'll discuss the derivation from raw BRQs to affinity index, the probabilistic device graph, the filtering pipeline, the spatial/temporal assumptions, gray zones like IP-based geolocation centroid errors, public WiFi false positives, device-to-person attribution fallacy, stadium attendance vs device presence (not all devices in stadium are ticket holders; could be employees, vendors, nearby residents), temporal window (two weeks of online behavior), seasonality effects, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define:
- Let D be set of BRQ events. Each event e ∈ D has tuple (device_id, timestamp, lat, lon, ip, publisher, ad_category).
- Geofence G_s for stadium s defined as polygon P_s around centroid c_s = (lat_pitcher, lon_pitcher).
- Indicator I_s(e) = 1 if point_in_polygon(lat(e), lon(e), P_s) else 0.
- Device graph bipartite graph B = (M ∪ Desktop, E) where edge exists if same WiFi IP within Δt and IP not public.
- Probabilistic matching p(m ↔ d) ∈ [0,1].
- Fan base F_i = {users u : ∃ e ∈ D, device(u) matches e, stadium(e)=s_i, time(e) ∈ game_time(s_i)}.
- N_i = |F_i|.
- Z_{j,i} = Σ_{u∈F_i} visits(u, URL j) over two-week window W.
- Empirical probability P(j | i) = Z_{j,i} / N_i.
- Population probability P(j) = Z_j / N_pop.
- Affinity index AI(j,i) = P(j|i) / P(j) or similar (the paper's formula is missing visually but referenced). I should note the singularity when P(j)=0 or N_i=0.
- Units: probabilities dimensionless [0,1], visits count dimensionless, N_i count of users, lat/lon degrees, Δt seconds/minutes, distances meters/km.
- Breakdown regimes: N_i → 0 (division by zero), P(j) → 0 (index undefined), geolocation IP centroid error radius > geofence dimensions, impossible travel filter threshold, public WiFi IP collision.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Lineage: RTB bidstream (Stitelman et al. ADKDD 2011 [PAGE 10]), transfer learning (Dalessandro et al. KDD 2014 [PAGE 10]), location from bid requests patent (Provost et al. [PAGE 10]), covisitation fraud detection (Stitelman et al. [PAGE 10]). Multi-week traps: two-week online behavior window may not capture sponsorship effect latency; brand affinity measured in July/Aug/September but exposure may have occurred earlier in season (April-June); carryover effects; autocorrelation in panel data; survivorship bias in avid fans.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. Crisis habit regression: under pressure (e.g., low engagement), marketers revert to legacy metrics (impressions, GRPs) rather than digital signals. Counter-trap: the paper's method might be gamed by location spoofing, VPNs, shared devices. Clock: the seasonal clock (July-Aug-Sep measurement) vs sponsorship exposure clock; mismatch between ad exposure timing and measurement window. Need to write this as theory of mind about the researchers/marketers/adversaries.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: geofence around pitcher's mound centroid; stadium geometry; GPS accuracy vs IP lookup. Biomechanical: impossible travel speed filter (Austin to Miami in 5 mins); human mobility constraints (~100 m/s air travel, ~30 m/s highway). Weather: rainouts change scheduled games; devices collected only during scheduled games [PAGE 4], so postponed games create missing data; weather affects attendance and device density. Veto proof: show that physical layer constraints (geofence, speed of light, biomechanical speed) bound the data quality.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios. Need 3 scenarios where the methodology would fail or be vetoed, with predictions.
1. IP-lookup geolocation centroid error: If a device's location is determined by IP to city centroid rather than GPS, and city centroid falls inside geofence, false positive stadium attendance. Prediction: spatial filter removes high-count IP locations [PAGE 3-4], but suburban stadiums near city centroid may still leak.
2. Device graph public WiFi collision: Airport/coffee shop IP connects many devices; system excludes public IPs [PAGE 3], but if threshold miscalibrated, false device links inflate N_i and dilute Z_{j,i}/N_i. Prediction: affinity index biased toward 1.0 (null effect).
3. Two-week browsing window misalignment: Sponsorship exposure in April, measurement in July-Sept [PAGE 5]. Prediction: measured affinity underestimates true causal effect due to memory decay and cookie deletion; AI(j,i) → 1.0 as lag increases.

Need to ensure word count. THINK_TRACE needs >=400 words. Total >=1000 words.

Let me draft carefully, ensuring no betting language. No "spread", "moneyline", "odds", "total", "line", "handicap". Avoid anything that sounds like wagering.

Citations: Use [PAGE 1], [PAGE 2], etc. The source text shows page numbers at bottom: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13. I should reference the actual content pages. The PDF pages seem to be numbered 1-13 in the text. I'll cite accordingly.

Verbatim quotes: Use exact phrases from source.

Let me write.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I need to make sure total words >= 1000. Let's aim for ~150-200 words per section except THINK_TRACE which is 400+. Actually total across all sections.

Let's draft content.

THINK_TRACE (400+ words):
Start with derivation chain: RTB bid requests -> geofence -> device graph -> two-week clickstream -> affinity index. Discuss gray zones: (1) device presence != ticketed attendance (stadium employees, vendors, passersby within geofence, people in nearby bars); paper says "we referenced the MLB schedule and collected devices only during scheduled baseball games" [PAGE 4] but doesn't distinguish ticket holders from non-ticket holders inside geofence. (2) IP-based location accuracy: spatial filter counts devices per unique location and filters high-count IP-lookup locations [PAGE 3]; but this assumes urban density correlates with fraud, which may accidentally remove legitimate dense stadium WiFi clusters. (3) Device graph false positives/negatives: same IP within time period = connected [PAGE 3]; but CGNAT, mobile hotspots, and dynamic IP assignment break the assumption. Only WiFi-based IP signals included [PAGE 3], excluding cellular-only users, biasing sample toward WiFi-enabled devices (often higher socioeconomic status). (4) Two-week behavioral window [PAGE 4]: "empirical probability ... determined by collecting two weeks of online behavior for every unique user"; this window is arbitrary and may not align with sponsorship exposure windows or purchase cycles for high-consideration goods (auto, travel). (5) Monthly segmentation July/Aug/Sept [PAGE 5] creates multiple comparisons and survivorship bias; fans who attend in September may differ systematically from April attendees. (6) The affinity index formula (visually omitted from text but described [PAGE 4-5]) divides by total population P(j); rare URLs produce unstable ratios. (7) Causal inference gap: correlation between stadium presence and site visitation does not establish sponsorship causality; regional airline affinity for Rockies could reflect pre-existing brand loyalty in Denver market rather than in-stadium ad exposure.

SOURCE_OPERATORS_AND_EQUATIONS:
Define notation formally.
- Let \mathcal{E} be the multiset of BRQ/clickstream records. Each record r has fields (device_id, ts, lat, lon, ip, publisher, category).
- Stadium s has centroid c_s = (lat_pitcher, lon_pitcher) from Appendix A [PAGE 11-12]. Geofence \mathcal{G}_s = polygon(c_s) containing stadium grounds [PAGE 2].
- Indicator: \mathbb{1}_s(r) = 1 iff point_in_polygon(lat(r), lon(r), \mathcal{G}_s).
- Spatial filter: For each unique IP-derived location \ell, count n_\ell = |\{r : loc(r)=\ell\}|. Filter if n_\ell > \tau_spatial [PAGE 3].
- Behavioral filter: For consecutive records r_a, r_b from same device, compute \Delta d = haversine(loc_a, loc_b), \Delta t = ts_b - ts_a. Reject if \Delta d / \Delta t > v_max (impossible travel) [PAGE 4]. Example: Austin to Miami in 5 min [PAGE 4].
- Device graph: bipartite graph \mathcal{B} = (\mathcal{M} \cup \mathcal{D}, \mathcal{E}_{bi}) where edge (m,d) exists iff IP_wifi(m) = IP_wifi(d) \land |ts_m - ts_d| < \Delta t_{graph} \land IP \notin \mathcal{P}_{public} [PAGE 3].
- Probabilistic match weight w(m,d) \in [0,1].
- Fan base for team i at stadium s_i: \mathcal{F}_i = \{ u : \exists r \in \mathcal{E}, device(r) \sim u, \mathbb{1}_{s_i}(r)=1, ts(r) \in \text{GameTimes}(s_i) \} [PAGE 4]. N_i = |\mathcal{F}_i|.
- Two-week window W_u for user u. Z_{j,i} = \sum_{u \in \mathcal{F}_i} \sum_{t \in W_u} \mathbb{1}[url(u,t)=j] [PAGE 4].
- P(j|i) = Z_{j,i} / N_i [PAGE 4]. Units: visits/user, dimensionless probability \in [0,1].
- Population P(j) = Z_j / N_{pop}.
- Affinity Index AI(j,i) = P(j|i) / P(j) (formula referenced but image omitted [PAGE 4-5]). Dimensionless ratio \in [0, \infty).
- Singularities: N_i = 0 \Rightarrow undefined. P(j) = 0 \Rightarrow AI undefined/infinite. Z_{j,i} = 0 \Rightarrow AI = 0.
- Lat/lon in degrees (WGS84). Time in UTC seconds. Distances in meters via haversine. Counts dimensionless.

RETROCAUSAL_GENEALOGY:
Historical lineage: RTB bidstream measurement traces to Stitelman et al. ADKDD 2011 on display advertising conversion [PAGE 10]; transfer learning/classification models from Dalessandro et al. KDD 2014 [PAGE 10]; location-from-bid-request patent Provost et al. [PAGE 10]; fraud/covisitation detection Stitelman et al. [PAGE 10]. This places the paper in the lineage of programmatic advertising measurement, not sports science. Multi-week traps: (1) Exposure-effect lag: sponsorship visible all season, but affinity measured July-Sept; early-season exposure may decay before measurement. (2) Two-week online window [PAGE 4] cannot capture purchase cycles for autos/travel (weeks to months), causing right-censoring of conversion. (3) Panel attrition: devices seen in April may not appear in July-Sept; conditioning on attendance in late season creates survivor bias. (4) Temporal confounding: team performance (Rockies contention) covaries with month and brand attention.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: When brand managers see ambiguous AI scores, they regress to habit—legacy GRP/impression buying—because digital attribution feels opaque. Counter-trap: Adversaries (bot nets, fraudulent sites) mimic stadium geofence traffic to inflate N_i or fabricate affinity [PAGE 4 associative filter]. The paper's associative filter removes bot-net clusters [PAGE 4], but an adaptive adversary could use residential IP arrays inside geofences to pass spatial/behavioral filters. Clock: The seasonal clock (MLB schedule [PAGE 4]) dictates measurement windows; if brand flight dates do not overlap GameTimes(s_i), the measured audience is not the exposed audience. Marketers may misread the clock, attributing off-season brand lift to in-stadium ads.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer veto: Geofence is polygon around pitcher's mound centroid [PAGE 2]. GPS error (~5-10 m) is negligible vs stadium size (~100 m scale), but IP-centroid error can be city-scale (tens of km), causing false positives if centroid falls in polygon. Spatial filter mitigates [PAGE 3]. Biomechanical veto: Impossible travel filter uses human speed bounds. Austin-Miami ~1,800 km in 5 min implies 6,000 km/h, far above commercial aircraft (~900 km/h) [PAGE 4]. This is a hard physical veto; any record violating it is removed, removing the device entirely. Weather veto: Data collected only during scheduled games [PAGE 4]. Rainouts/postponements remove entire game observations; summer thunderstorms reduce attendance and device density, creating missing-not-at-random data. Cross-layer: A veto is sustained if physical (GPS/IP error), biomechanical (speed), or weather (rainout) constraints invalidate the event. The system has no explicit weather model; rainout games are simply absent from N_i.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable scenarios + predictions.
Scenario 1: IP-centroid leakage. A large ISP assigns all suburban users near a stadium to a single IP centroid that lies inside the geofence. The spatial filter counts devices per location [PAGE 3]; if n_\ell < \tau, these users pass as stadium attendees. Prediction: N_i inflated with non-attendees; Z_{j,i} diluted by general-population browsing; AI(j,i) biased toward 1.0 (null) for all brands.
Scenario 2: Device graph over-merging on public WiFi. A stadium's public WiFi uses one IP; if the public-IP detection threshold fails, thousands of devices are linked as one user. Prediction: N_i collapses (many devices mapped to few user IDs); Z_{j,i} aggregated over merged identities; AI(j,i) variance artificially suppressed and mean distorted.
Scenario 3: Temporal misalignment veto. Sponsorship activation occurs in April-May, but affinity measured only July-Sept [PAGE 5] with a two-week lookback [PAGE 4]. Prediction: Causal effect decays exponentially with lag; measured AI(j,i) in July underestimates April exposure effect by factor e^{-\lambda \Delta t}; for \Delta t > 8 weeks, AI(j,i) \to 1.0 even if true effect exists.

Word count check: THINK_TRACE alone will be 400+. Others will add up to >1000 total.

Need to ensure no mention of betting. None planned.

Need verbatim quotes: I'll include a few exact quotes like "over 16 million unique and accurate location data points" [PAGE 4], "impossible travel speeds" [PAGE 4], "collected devices only during scheduled baseball games" [PAGE 4], etc.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain runs from raw bid-request telemetry to a sponsorship affinity index, and each link carries a gray-zone assumption that the paper acknowledges only implicitly. First, the system ingests RTB bid requests and SDK clickstream records, each carrying a device identifier, timestamp, IP address, and latitude/longitude [PAGE 2]. For every MLB stadium the authors define a geofence polygon centered on the pitcher’s mound centroid, taken from Appendix A coordinates [PAGE 2, PAGE 11-12]. Any record whose point falls inside that polygon is tagged as stadium-attendance telemetry. This is the first gray zone: physical presence inside the geofence is not equivalent to ticketed attendance. Stadium employees, vendors, passersby in adjacent plazas, and residents of buildings within the polygon all generate qualifying records, yet the paper defines the observed set as the team’s “fan base” without an attendance-verification layer [PAGE 4].

Second, the device graph probabilistically stitches mobile devices to desktops using shared WiFi IP addresses within a time window, while excluding public-access IPs such as coffee shops [PAGE 3]. The second gray zone is identity resolution. Carrier-grade NAT, mobile hotspots, and dynamic IP reassignment mean that a shared IP does not guarantee a shared human, while cellular-only users are excluded because only WiFi-based IP signals enter the graph [PAGE 3]. This biases the sample toward WiFi-capable devices and systematically under-represents any demographic segment that relies exclusively on cellular data.

Third, the data pass through three filters. The spatial filter removes IP-lookup locations that accumulate abnormally high device counts, under the assumption that dense IP clusters are imprecise neighborhood or city centroids rather than genuine stadium concentrations [PAGE 3]. However, a large ISP assigning an entire suburb to one centroid that happens to lie inside a geofence would either be falsely retained (if below the count threshold) or falsely purged (if above it), creating stadium-specific leakage. The behavioral filter rejects impossible travel speeds—e.g., Austin to Miami in five minutes [PAGE 4]—which is a hard biomechanical veto but also deletes the entire device history, not just the offending record. The associative filter excises bot-net site clusters using machine learning [PAGE 4], but it cannot detect human fraud rings that physically carry devices into stadiums.

Fourth, measurement occurs only during scheduled baseball games [PAGE 4]. Rainouts and postponements create missing-not-at-random gaps; a July thunderstorm that empties a stadium removes that game’s devices from N_i, which is the denominator of the empirical probability P(j|i) = Z_{j,i}/N_i [PAGE 4]. Fifth, online behavior is observed over a fixed two-week window per user [PAGE 4]. This window is arbitrary relative to sponsorship exposure. If a fan sees an airline advertisement in April but is measured in July-September [PAGE 5], the affinity index may capture neither the immediate exposure effect nor the delayed purchase decision for high-consideration categories such as automotive or travel, which the paper itself studies in Section 4.4 [PAGE 7-8]. The monthly segmentation into July, August, and September further induces survivorship bias: fans attending late-season games differ systematically from April attendees, and the paper does not re-weight for team performance or weather covariates.

The final gray zone is causal. A higher brand affinity score for the Colorado Rockies’ regional airline sponsor [PAGE 6] may reflect pre-existing Denver-market loyalty rather than in-stadium advertising exposure. The design lacks a control group of non-sponsor stadiums matched on market demographics, so the observed seasonal growth in affinity [PAGE 6] cannot be attributed to sponsorship without stronger identifying assumptions. These layers compound: geofence leakage, device-graph false positives, two-week window misalignment, and weather-driven missingness all bias the same index in directions that are not bounded by the paper’s reported statistics.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(\mathcal{E}\) be the multiset of real-time bid requests and clickstream records. Each record \(r \in \mathcal{E}\) carries fields \((d_r, \tau_r, \phi_r, \lambda_r, \iota_r, c_r, a_r)\), where \(d_r\) is device ID, \(\tau_r\) is timestamp in UTC seconds, \((\phi_r,\lambda_r)\) is latitude/longitude in WGS84 degrees, \(\iota_r\) is IP address, \(c_r\) is publisher/category, and \(a_r\) is ad-monetization flag [PAGE 2].

For stadium \(s\), the centroid is the pitcher’s mount coordinates \((\phi_s,\lambda_s)\) from Appendix A [PAGE 11-12]. The geofence \(\mathcal{G}_s\) is the polygon around that centroid containing the stadium grounds [PAGE 2]. Define the stadium indicator
\[
\mathbb{1}_s(r) =
\begin{cases}
1 & \text{if } \operatorname{point\_in\_polygon}(\phi_r,\lambda_r,\mathcal{G}_s) = \text{true}\\
0 & \text{otherwise}
\end{cases}
\]

The spatial filter operates on unique IP-derived locations \(\ell\). Let \(n_\ell = |\{r \in \mathcal{E} : \operatorname{loc}(r)=\ell\}|\). Records from locations exceeding threshold \(\tau_{\text{spatial}}\) are removed [PAGE 3].

The behavioral filter computes consecutive records \(r_a,r_b\) from the same device. Haversine distance \(\Delta d\) in meters and time difference \(\Delta \tau = \tau_b - \tau_a\) in seconds yield speed \(v = \Delta d/\Delta \tau\). Records are rejected if \(v > v_{\max}\) for impossible travel [PAGE 4]. Example from source: Austin, TX to Miami, FL in five minutes implies roughly \(6{,}000\ \text{km/h}\), far above commercial aircraft cruise speed [PAGE 4].

The device graph is bipartite \(\mathcal{B} = (\mathcal{M} \cup \mathcal{D}, \mathcal{E}_{\text{bi}})\), where \(\mathcal{M}\) is mobile devices, \(\mathcal{D}\) is desktop/laptop devices, and an edge \((m,d)\) exists iff
\[
\iota_m^{\text{wifi}} = \iota_d^{\text{wifi}} \quad \land \quad |\tau_m - \tau_d| < \Delta \tau_{\text{graph}} \quad \land \quad \iota_m^{\text{wifi}} \notin \mathcal{P}_{\text{public}}
\]
Only WiFi-based IP signals are included; public-access IPs (coffee shops, libraries) are excluded [PAGE 3]. Edge weights are probabilistic match confidences \(w(m,d) \in [0,1]\).

The fan base for team \(i\) at stadium \(s_i\) is
\[
\mathcal{F}_i = \left\{ u : \exists r \in \mathcal{E},\ d_r \sim u,\ \mathbb{1}_{s_i}(r)=1,\ \tau_r \in \operatorname{GameTimes}(s_i) \right\}
\]
with cardinality \(N_i = |\mathcal{F}_i|\) [PAGE 4]. The source states the final dataset contains “over 16 million unique and accurate location data points across the entire 2015 Major League Baseball season” [PAGE 4].

For a two-week online behavior window \(W_u\) per user, define visit counts
\[
Z_{j,i} = \sum_{u \in \mathcal{F}_i} \sum_{t \in W_u} \mathbb{1}\!\left[\operatorname{url}(u,t) = j\right]
\]
The empirical probability of visiting URL \(j\) for fan base \(i\) is
\[
P(j \mid i) = \frac{Z_{j,i}}{N_i}
\]
units: visits per user, dimensionless probability in \([0,1]\) [PAGE 4]. The population baseline is \(P(j) = Z_j/N_{\text{pop}}\). The affinity index, referenced but whose image is omitted from the extracted text, takes the form
\[
\operatorname{AI}(j,i) = \frac{P(j \mid i)}{P(j)}
\]
dimensionless, range \([0,\infty)\) [PAGE 4-5].

Singularity and breakdown regimes:
1. \(N_i = 0\) (no devices observed at stadium during scheduled games, e.g., rainout with zero telemetry): \(P(j\mid i)\) undefined.
2. \(P(j) = 0\) (URL never visited in population): \(\operatorname{AI}(j,i)\) undefined or infinite.
3. \(Z_{j,i} = 0\): \(\operatorname{AI}(j,i) = 0\), but cannot distinguish true disaffection from two-week window truncation.
4. Geolocation regime: IP-centroid error radius larger than geofence dimensions causes false-positive attendance tagging; spatial filter mitigates but cannot eliminate [PAGE 3].
5. Identity regime: \(\Delta \tau_{\text{graph}}\) too large merges distinct households on shared IPs; too small fragments true users, biasing \(N_i\) and \(Z_{j,i}\) in opposite directions.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s methodological lineage sits in programmatic advertising measurement rather than sports economics. It cites Stitelman et al. (ADKDD 2011) on estimating the effect of online display advertising on browser conversion [PAGE 10], establishing the real-time bid request as a unit of exposure measurement. It cites Dalessandro et al. (KDD 2014) on scalable hands-free transfer learning for online advertising [PAGE 10], which underpins the classification models used to infer market and interest affinities from sparse online actions [PAGE 3]. Location inference descends from Provost, Eliassi-Rad, and Moores’ patent on determining location information from real-time bid requests [PAGE 10], while fraud removal descends from Stitelman et al.’s patent on detecting non-intended traffic using covisitation information [PAGE 10]. This genealogy means the instrument is optimized for ad-tech yield, not for causal inference about stadium sponsorships.

Multi-week traps arise from the temporal architecture. Exposure to in-stadium advertising occurs continuously from April through September [PAGE 4], yet the authors measure affinity only for July, August, and September [PAGE 5]. The effect of an April sponsorship impression may decay before the July measurement window, creating a right-censoring trap: early-season exposure is unobserved in the outcome window. The two-week online lookback per user [PAGE 4] is too short to capture purchase cycles for the automotive and travel categories examined in Sections 4.3 and 4.4 [PAGE 7-8], so in-market affinities reflect stated browsing intent rather than completed transactions. Panel attrition compounds this: devices observed in April may drop out by July, conditioning the late-season sample on fans who attended repeatedly, which overlaps with the paper’s own casual/avid distinction [PAGE 6]. Finally, team performance is a time-varying confounder: a contending team draws different crowds in September than in April, and brand attention covaries with win-loss records, yet the model contains no performance covariate.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
From the brand manager’s perspective, the affinity index produces a number without an error band. When the score is ambiguous or flat, crisis habit regression occurs: the manager reverts to legacy metrics—gross rating points, impression counts, sponsorship fee ratios—because they are legible to finance, whereas the digital signal requires trusting a proprietary device graph and a two-week behavioral window. The paper offers no counterfactual or uncertainty quantification, so the habit regression is not corrected by the instrument itself.

The counter-trap lives in the data-generation process. An adversary seeking to inflate a sponsorship’s apparent value could operate residential IP arrays inside a stadium geofence during games, generating spatial- and behavioral-filter-clean records that mimic genuine attendees [PAGE 2-4]. Because the associative filter targets bot-net site clusters rather than physical location spoofing [PAGE 4], a human-powered device farm passing phones through the turnstiles would evade detection and inflate \(N_i\) with non-fan browsing profiles, diluting \(P(j\mid i)\) toward the population mean and masking true brand effects.

The clock layer is the most consequential mismatch. The measurement clock is fixed to the MLB schedule and to July-September windows [PAGE 4-5], while the sponsorship clock runs on brand flight dates and creative rotation. If a bank’s Yankees sponsorship creative changes in June but affinity is measured in July-September [PAGE 5], the index conflates multiple creatives into one score. If the brand runs no in-stadium ads in August but the paper still reports August affinity, the manager may misattribute baseline brand awareness to the sponsorship. Recursive theory of mind therefore predicts that the sponsor over-credits the stadium exposure for effects that are actually driven by off-stadium media, seasonal demand, or pre-existing regional brand strength.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: The geofence is a polygon around the pitcher’s mound centroid [PAGE 2]. GPS-grade mobile locations have error on the order of meters, negligible against stadium scale, but IP-lookup locations resolve to neighborhood, city, or state centroids [PAGE 3]. If a city centroid falls inside a stadium polygon, the spatial filter must remove it based on device-count distribution [PAGE 3]; failure here vetoes the entire stadium sample because the denominator \(N_i\) is contaminated with non-attendees.

Biomechanical layer veto: The impossible-travel filter enforces human mobility bounds [PAGE 4]. A record pair implying Austin-to-Miami in five minutes implies speeds above \(6{,}000\ \text{km/h}\), violating commercial aviation and physics; the system removes all impressions from that device [PAGE 4]. This is a hard veto: once triggered, the device’s full two-week behavioral history is deleted from \(Z_{j,i}\), not merely the anomalous record.

Weather veto: Data are collected only during scheduled baseball games [PAGE 4]. Rainouts, postponements, and severe weather reduce attendance and remove entire game observations from \(\mathcal{F}_i\). Summer thunderstorms are spatially correlated across regions, so weather-induced missingness is not random across stadiums and biases cross-stadium comparisons in Section 4.3 [PAGE 7].

Adjudication rule: A stadium-game observation is admitted only if it passes the physical (geofence + spatial filter), biomechanical (speed bound), and weather (scheduled game occurrence) layers simultaneously. The paper provides no explicit rainout model or imputation for missing games; thus any game removed by weather is treated as if zero fans attended, which systematically undercounts \(N_i\) for open-air stadiums in high-precipitation months.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: IP-centroid leakage veto. A suburban ISP assigns all users within a 10 km radius to a single IP centroid that lies inside a stadium’s geofence polygon. If the device count for that centroid is below the spatial-filter threshold \(\tau_{\text{spatial}}\) [PAGE 3], these non-attendees are admitted to \(\mathcal{F}_i\). Prediction: \(N_i\) is inflated with general-population devices; \(Z_{j,i}\) is diluted by baseline browsing; \(\operatorname{AI}(j,i)\) is biased toward 1.0 for every brand, producing false nulls for all sponsorships at that stadium.

Scenario 2: Device graph over-merging veto. A stadium’s public WiFi uses one external IP, and the public-IP detection rule fails to classify it as \(\mathcal{P}_{\text{public}}\) [PAGE 3]. Thousands of distinct attendees are probabilistically linked as one user. Prediction: \(N_i\) collapses because many devices map to few user IDs; \(Z_{j,i}\) aggregates visits across merged identities, artificially inflating per-user visit counts; the variance of \(\operatorname{AI}(j,i)\) collapses and the index becomes unstable across monthly windows [PAGE 5].

Scenario 3: Temporal misalignment veto. Sponsorship exposure occurs in April-May, but affinity is measured only in July-September with a two-week online lookback [PAGE 4-5]. Prediction: Causal effect decays exponentially with exposure-to-measurement lag, \(\Delta t\). For \(\Delta t > 8\) weeks, \(\operatorname{AI}(j,i) \to 1.0\) even when a true sponsorship effect existed, because cookie deletion, device churn, and memory decay erase the behavioral signal. The paper’s reported seasonal growth in affinity [PAGE 6] may thus reflect measurement-window alignment rather than cumulative ad exposure.
</RLVR_COUNTERFACTUAL_VETOES>