---
source: "2019 - The Horizon of Sports is Digital Using Fantasy Sports, e-Sports and Electronic Gambling to Find Next Generation of Ticket Buyers - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2019"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4855
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper. I need to follow the STRICT INVARIANTS:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important: The source text provided is a Markdown rendering of a PDF. I need to cite page markers. The text has page numbers like "2019 Research Papers Competition Presented by: 1" etc. I should reference [PAGE N] where N corresponds to the page number in the document. Let me map content to pages:

Page 1: Title, Introduction, start of Methodology (up to reproducibility statement)
Page 2: 2.1 Data Sources (BRQs, third party, SDK, device graph, data quality)
Page 3: 2.2 Behavioral Model Based Device Selection (seed set, top half-million predictive indices, 10000 devices per model); 2.3 Location Based Device Selection (geofence, stadium centroids, privacy deletion); start of 2.4?
Page 4: 2.4 Stochastic Independent Device Sampling Process (observational period Aug 30-Sep 15 2018, 40,070,299 unique devices, 40000 constraint, pseudo-random, Figure 2.2 table with counts); 2.5 Agglomerative Clustering (128-dim URL space, 430648822 devices, CNN Skipgram, cosine similarity, Ward's method, 10 cluster seeds, patent pending)
Page 5: 2.6 Behavioral index profiles (formula Zj,i/Ni, index calculation, two baselines: national and seed population)
Page 6: Results Section 3 (Figure 3.1 table of subpopulations sizes, threshold 1000 devices, subpopulations 1,3,4 disregarded)
Page 7: Figure 3.3 table (subpop audience breakout); start of Section 4 Discussion
Page 8: Figure 4.1 (Subpopulation 2), Figure 4.2 (Subpopulation 5)
Page 9: Figure 4.3 (Subpopulation 6), Figure 4.4 (Subpopulation 7)
Page 10: Figure 4.5 (Subpopulation 8), Figure 4.6 (Subpopulation 9), Figure 4.7 (Subpopulation 10)
Page 11: Section 5 Conclusion
Page 12: Section 6 Acknowledgement
Page 13: References

Wait, the text shows page markers embedded like "2019 Research Papers Competition Presented by: 1" then content, then "2 ... 3 ... 4 ... 5 ... 6 ... 7 ... 8 ... 9 ... 10 ... 11 ... 12 ... 13". I need to be careful about exact page citations. The text says "PAGES: 11" but the markdown shows page numbers up to 13 (including references and presentation slides). Actually, looking closely: The source says "PAGES: 11" but the embedded text has page numbers 1-13 because it includes title page, content pages, and reference pages. I should cite using the page numbers visible in the document as [PAGE N]. Since the user said "When source pages are provided, cite exact [PAGE N] markers", I will use the page numbers visible in the text.

Let me map specific content to page numbers as they appear:

- Page 1: Introduction ends with methodology intro. "We utilized a random sampling process..."
- Page 2: 2.1 Data Sources, BRQ description, device graph, data quality.
- Page 3: 2.2 seed set, 10000 devices each; 2.3 Location Based Device Selection, geofence, stadium centroids, privacy deletion, raw location deleted leaving POI. Then "2019 Research Papers Competition Presented by: 3" and "We randomly selected 5000 devices observed at NFL and MLB stadiums... combined 10000 device group."
- Page 4: 2.4 Stochastic Independent Device Sampling Process: observational period Aug 30-Sep 15 2018, 40,070,299 unique device IDs, 40000 device constraint, pseudo-random number generator, Figure 2.2 table. Then 2.5 Agglomerative Clustering: 128-dimensional URL space, 430,648,822 devices, CNN Skipgram, cosine similarity, Ward's method, 10 randomly selected devices as cluster seeds, patent pending.
- Page 5: 2.6 Behavioral index profiles: formula P = Zj,i / Ni, baseline P(j), behavioral index calculation (though the actual LaTeX formula images are missing in markdown, text describes it). Two baselines: national and seed population.
- Page 6: Section 3 Results: Figure 3.1 table, 10 mutually exclusive subpopulations, threshold 1000 devices, subpopulations 1,3,4 disregarded.
- Page 7: Figure 3.3 table (subpop audience breakout). Last goal measure behavioral segment participation rates.
- Page 8: Section 4 Discussion intro. Figure 4.1 Subpopulation 2. Figure 4.2 Subpopulation 5.
- Page 9: Figure 4.3 Subpopulation 6. Figure 4.4 Subpopulation 7.
- Page 10: Figure 4.5 Subpopulation 8. Figure 4.6 Subpopulation 9. Figure 4.7 Subpopulation 10.
- Page 11: Section 5 Conclusion. e-gambling best, fantasy sports viable alternative.
- Page 12: Section 6 Acknowledgement.
- Page 13: References.

I need to ensure no betting lines. The paper mentions e-Gambling, horse racing, sports gambling, but I must not mention spreads, totals, moneylines, or odds. I can mention probabilities and indices as behavioral indices (multiples like 9.91x) but not betting odds.

I need formal LaTeX equations. The paper describes:
- P(j|i) = Z_{j,i} / N_i where Z_{j,i} is count of devices in both segment j and subpopulation i, N_i is total devices in subpopulation i.
- Behavioral index = P(j|i) / P(j) relative to baseline. Though the exact index formula image isn't rendered, I can formalize it: Index(i,j; baseline) = P(j|i) / P_base(j).
- Cosine similarity in URL space: sim(u,v) = (u · v) / (||u|| ||v||).
- Agglomerative clustering Ward's method minimizes increase in total within-cluster variance: Δ = (|C_a|+|C_b|)/(|C_a|+|C_b|+...) actually Ward's criterion: minimize increase in error sum of squares. Δ(C_i, C_j) = (n_i n_j)/(n_i + n_j) || μ_i - μ_j ||^2.
- Skipgram objective: maximize sum over context words log P(w_c | w_t) using softmax over 128-dim embeddings.

Units: dimensionless index (multiples), devices count (unitless count), probability (unitless [0,1]), URL space dimension 128 (unitless), observational period dates.

Breakdown regimes/singularity:
- N_i = 0 leads to undefined probability (division by zero). Subpopulations 1,3,4 below 1000 device threshold disregarded (Page 6).
- Cosine similarity undefined if zero vector (device with no visited URLs or all-zero embedding).
- Baseline P_base(j) = 0 leads to undefined index (division by zero).
- Observation period limited to Aug 30-Sep 15 2018 (Page 4), temporal singularity: cannot generalize beyond this window.
- 40,000 device clustering hardware constraint (Page 4) induces sampling bias / aliasing if true population structure requires more clusters.

RETROCAUSAL_GENEALOGY: Historical lineage: Skipgram (Mikolov et al. 2013, though paper cites Tensorflow Abadi 2016 and Arora et al. 2017 sentence embeddings), Ward's method (1963 hierarchical clustering), Dstillery device graph, RTB bidstream. Multi-week traps: observational period is only ~16 days (Aug 30-Sep 15 2018), which spans preseason/early NFL and late MLB regular season; temporal mismatch means findings may not hold across full season or playoffs. Also clustering seeds random (10 randomly selected devices) introduces stochastic instability across weeks.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. I need to interpret: marketing teams facing declining linear TV/attendance (crisis) regress to habitual digital channels (fantasy, e-sports, e-gambling) as a "counter-trap" assuming digital engagement converts to physical ticket purchases. The paper tests this and finds e-sports enthusiasts under-index (counter-trap: digital-native gaming audience does not migrate to stadium), while e-gambling and fantasy sports overlap with attendees. The "clock" is the 16-day observational window vs season-long ticket buying cycles; habit regression assumes stable cross-channel affinity but the clock shows seasonality (MLB late season, NFL early season) breaks stationarity.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This paper is purely digital behavioral data; no physical, biomechanical, or weather variables are collected. Therefore any claim of physical conversion (ticket purchase) is vetoed because there is no measurement of actual ticket transactions, weather effects on attendance, biomechanical stadium access, etc. The geofence only captures device presence at stadium centroids during game times, not ticket purchase or physical layer conditions. Veto: cannot prove ticket buying, only digital co-visitation.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? I need to provide 3 counterfactual veto scenarios that are verifiable, with predictions.
1. Veto: If the clustering is re-run with a different random seed for the 10 cluster seeds (Ward's initialization), subpopulation membership shifts such that e-Sports no longer isolates as a distinct 79.8% cluster (Page 7, Figure 3.3). Prediction: Subpopulation 2's e-Sports dominance collapses below 50% and the "not a fit" conclusion reverses or becomes statistically insignificant.
2. Veto: If the observational window is extended beyond Sep 15 2018 to include NFL regular season weeks 4-10 and MLB playoffs (Page 4), the location-based attendee segments change composition because NFL attendees are measured only during early preseason/early regular season. Prediction: NFL-attendee overlap with Fantasy Sports (Subpop 8, 33.9% Page 7) drops or Fantasy Sports index no longer predicts ticket purchase.
3. Veto: If baseline P_base(j) is computed per-market (local DMA) rather than national baseline (Page 5), the behavioral index for local sports teams in Subpopulation 10 (local sports teams ideal audience Page 10) falls below 1.0 because national baseline dilutes local intensity. Prediction: Subpopulation 10 ceases to be an "ideal audience" and its Sports index drops from 2.08x to <1.2x.

Word count: Need >=1000 words total across sections. THINK_TRACE >=400 words. I'll aim for substantial depth.

Let me draft carefully, ensuring exact [PAGE N] citations and verbatim quotes where appropriate. I must not invent fake ratios. I can use the actual indices from the paper (e.g., 9.91x, 79.8%) as they are reported values, not toy equations.

Let me verify verbatim quotes I might use:
- Page 1: "We test this by overlapping samples of digital behaviors between NFL and MLB attendees with behavioral models of e-Sports enthusiasts, e-gamblers and fantasy sports players to find which are most likely to convert into purchasers of in-stadium experiences."
- Page 2: "Real time bid requests (BRQs) occur when a device appears on an ad-monetized website or an app."
- Page 3: "In the interest of privacy and following the automated location quality and contextualization step, the raw location data was deleted, leaving only the point of interest data, in this case “MLB Stadium” or “NFL Stadium”." and "We randomly selected 5000 devices observed at NFL and MLB stadiums, during game times, for a combined 10000 device group of game attendees."
- Page 4: "Our observational period ran from August 30, 2018 to September 15, 2018 that resulted in 40,070,299 unique device IDs..." and "Due to hardware constraints, the clustering technique outlined in section 2.5, can only consider 40000 devices..."
- Page 5: "A device in this subpopulation is X times more likely to be a member of this behavioral audience, compared to a baseline population." and formulas described.
- Page 6: "Subpopulations 1, 3 and 4 do not meet our 1000 device threshold required for producing significant results and are disregarded for the purposes of this study."
- Page 7: Figure 3.3 shows Subpopulation 2: e-Sports 79.8%.
- Page 10: Subpopulation 10 conclusion "indexes highly for their local sports teams and is an ideal audience for becoming ticket purchasers."
- Page 11: Conclusion "we do not believe e-Sports is an ideal channel for finding future ticket purchasers." and "e-gambling... is the best audience for investment..."

Now I need to structure the response with exactly those XML sections. No extra sections. Ensure word count.

Let me write THINK_TRACE first. >=400 words. Deep multi-hop derivation & gray-zone audit.

I'll write it now.

Make sure to cite [PAGE N] after claims.

For SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
Define:
- Device set D, |D| = 40,070,299 during observational period [PAGE 4].
- Subpopulation i, N_i = |{d ∈ D : d ∈ cluster i}|.
- Behavioral segment membership indicator M_j(d) ∈ {0,1}.
- Z_{j,i} = Σ_{d∈i} M_j(d).
- Propensity: p_{j|i} = Z_{j,i} / N_i. Unitless probability in [0,1]. Breakdown if N_i = 0 (undefined). Threshold N_i ≥ 1000 for statistical significance [PAGE 6].
- Baseline: p_j^{(b)} for baseline b ∈ {national, seed}. Index: I(i,j;b) = p_{j|i} / p_j^{(b)}. Dimensionless multiplicity. Breakdown if p_j^{(b)} = 0 (division by zero) or if baseline is non-representative (national vs local market mismatch).
- URL embedding: φ: URL → ℝ^{128} via CNN Skipgram trained on 430,648,822 devices [PAGE 4]. Device centroid: \bar{φ}(d) = (1/|H_d|) Σ_{u∈H_d} φ(u).
- Distance: cosine similarity s(d_a,d_b) = (\bar{φ}_a · \bar{φ}_b) / (||\bar{φ}_a|| ||\bar{φ}_b||). Undefined if zero norm.
- Agglomerative Ward linkage: Δ(C_r,C_s) = (n_r n_s)/(n_r + n_s) || μ_r - μ_s ||^2. Ten seeds randomly selected [PAGE 4]; stochastic instability.
- Observational window T = [2018-08-30, 2018-09-15] [PAGE 4]. Seasonality singularity: early NFL/late MLB only.

RETROCAUSAL_GENEALOGY: Lineage from Skipgram/Mikolov (though paper cites Arora et al. 2017 [PAGE 5] and Tensorflow Abadi 2016 [PAGE 13]), Ward 1963, RTB ecosystem, Dstillery device graph [PAGE 2]. Multi-week traps: 16-day window cannot capture season-long ticket purchase cycle; NFL preseason vs regular season; MLB pennant race; clustering seeds random per run causing non-determinism across weeks; geofence privacy deletion means raw location lost [PAGE 3] so cannot reconstruct actual entry times or weather exposure.

RECURSIVE_THEORY_OF_MIND: Crisis = decline of linear TV and in-stadium ticket buying [PAGE 1]. Habit regression = investing in fantasy/e-sports/e-gambling because they are "digital" [PAGE 1]. Counter-trap = assuming digital affinity implies physical conversion; paper shows e-sports subpopulation 2 under-indexes on professional sports (0.48x population observation [PAGE 8]) and is not a fit. Clock = 16-day observational window vs multi-week ticket purchase consideration; stationarity assumption fails.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer veto: no ticket purchase data, only device geofence presence [PAGE 3]; raw location deleted [PAGE 3]. Biomechanical veto: no stadium ingress/egress, mobility, accessibility data. Weather veto: no meteorological covariates; game-time presence does not control for rain/heat. Conclusion: claims of "ticket purchaser" are inferential, not measured; veto applies unless purchase data added [PAGE 11].

RLVR_COUNTERFACTUAL_VETOES: Three scenarios as above. Must be verifiable and include predictions.

Word count check: I'll write generously.

Let's begin composing.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper constructs a causal bridge between digital audience segments and physical stadium ticket buying using a three-stage pipeline: (1) seed-set behavioral modeling to identify devices belonging to Fantasy Sports, e-Sports, and e-Gambling audiences; (2) location-based geofencing to identify NFL and MLB attendees during game times; and (3) agglomerative clustering in a 128-dimensional URL embedding space to partition a 40,000-device down-sample into ten mutually exclusive subpopulations [PAGE 4]. The first gray zone is the observational window: data were collected only from August 30, 2018 to September 15, 2018 [PAGE 4], a sixteen-day span that captures early NFL preseason/early regular season and late MLB regular season but excludes playoffs, holidays, and the bulk of the ticket-purchase consideration cycle. Any cross-channel affinity estimated inside this window is temporally local and cannot be assumed stationary across a full season or across weeks.

The second gray zone is the clustering initialization. Ward’s method was applied with “ten randomly selected devices as cluster seeds” [PAGE 4]. Because agglomerative clustering is deterministic given a fixed distance matrix but the seeds are random, the resulting partition—and specifically the isolation of Subpopulation 2 as 79.8% e-Sports [PAGE 7]—is a function of a particular stochastic draw. Re-running with different seeds could merge or split the e-Sports-dominant cluster, which directly attacks the paper’s central negative finding that e-Sports is “not a fit for driving new ticket purchasers” [PAGE 8].

The third gray zone is the behavioral index itself. The index is defined as a ratio of conditional propensities: for subpopulation i and segment j, p_{j|i} = Z_{j,i} / N_i, where Z_{j,i} counts devices in both segment j and subpopulation i, and N_i is subpopulation size [PAGE 5]. The index then divides p_{j|i} by a baseline probability p_j^{(b)} computed against either the national baseline or the seed population [PAGE 5]. This creates two singularity regimes: N_i = 0 makes p_{j|i} undefined, which is why subpopulations 1, 3, and 4 (sizes 132, 524, and 631 devices) were discarded for failing the 1,000-device threshold [PAGE 6]; and p_j^{(b)} = 0 makes the index undefined via division by zero. More subtly, the national baseline may dilute market-specific signals: Subpopulation 10 is declared ideal because it “indexes highly for their local sports teams” [PAGE 10], yet a national baseline cannot verify local ticket-buying intent without DMA-stratified baselines.

The fourth gray zone is measurement ontology. The geofence captures device presence inside a stadium polygon during game times, after which raw latitude/longitude is deleted and only the point-of-interest label “MLB Stadium” or “NFL Stadium” is retained [PAGE 3]. This means the paper never observes ticket transactions, seat location, purchase timing, weather at the gate, or biomechanical ingress. The conclusion that e-gambling is “the best audience for investment in finding future in-stadium ticket purchasers” [PAGE 11] is therefore an inference from digital co-visitation, not a measured conversion. The authors themselves acknowledge that adding “purchase data … would only increase the effectiveness of this methodology” [PAGE 11], which is an implicit admission that the current endpoint is a proxy.

Multi-hop synthesis: The crisis motivating the study is the erosion of linear TV and traditional in-stadium revenue [PAGE 1]. The habit regression is to treat fantasy, e-sports, and e-gambling as interchangeable digital acquisition channels. The data reject the e-sports leg of that regression (Subpopulation 2 under-indexes on professional sports at 0.48x in the Population Observation [PAGE 8]) but support e-gambling (Subpopulations 5 and 6) and fantasy sports (Subpopulations 9 and 10) as higher-overlap audiences. However, the clock—the sixteen-day observational window and the randomly seeded clustering—means these results are a local minimum of a non-stationary, stochastic system, not a generalizable channel-allocation law.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, page citations, and breakdown regimes.

Let the full device universe observed during the experimental window be \mathcal{D}, with |\mathcal{D}| = 40,070,299 unique device IDs collected from 2018-08-30 to 2018-09-15 [PAGE 4]. Because the agglomerative clustering hardware constraint limits analysis to 40,000 devices [PAGE 4], a pseudo-random down-sample is drawn per audience (Figure 2.2) [PAGE 4], producing seed-set audiences of 10,000 devices each for Fantasy Sports, e-Sports, and e-Gambling, plus 5,000 devices each for NFL and MLB stadium attendees [PAGE 3].

URL embedding operator: Each URL u is mapped to \phi(u) \in \mathbb{R}^{128} by a Convolutional Neural Network trained with the Skipgram algorithm on the ordered visitation histories of 430,648,822 devices [PAGE 4]. The device-level centroid in embedding space is
\bar{\phi}(d) = \frac{1}{|H_d|} \sum_{u \in H_d} \phi(u), \quad d \in \mathcal{D},
where H_d is the set of URLs visited by device d.

Distance operator: Pairwise device distance uses cosine similarity in the 128-dimensional URL space:
s(d_a, d_b) = \frac{\bar{\phi}(d_a) \cdot \bar{\phi}(d_b)}{\|\bar{\phi}(d_a)\|_2 \, \|\bar{\phi}(d_b)\|_2}.
Units are dimensionless similarity in [-1, 1]. Breakdown regime: if \bar{\phi}(d) = \mathbf{0} (device visited no URLs or all-zero embeddings), the norm is zero and similarity is singular/undefined.

Clustering operator: Agglomerative clustering with Ward’s linkage on the device distance matrix, initialized from ten randomly selected cluster seeds [PAGE 4]. Ward’s merge criterion between clusters C_r and C_s of sizes n_r, n_s and centroids \mu_r, \mu_s is
\Delta(C_r, C_s) = \frac{n_r n_s}{n_r + n_s} \| \mu_r - \mu_s \|_2^2,
minimizing the increase in total within-cluster variance. Units are squared embedding distance. Breakdown regime: random seed dependence means the partition is not reproducible across runs without fixing the RNG state; subpopulation composition can change week-to-week.

Behavioral index operator: For behavioral segment j and subpopulation i, define M_j(d) \in \{0,1\} as segment membership. The empirical propensity is
p_{j|i} = \frac{Z_{j,i}}{N_i}, \quad Z_{j,i} = \sum_{d \in i} M_j(d),
where N_i = |i| is subpopulation size. Units: probability, dimensionless [0,1]. Breakdown regime: N_i = 0 \Rightarrow p_{j|i} undefined; this motivated the 1,000-device threshold that removed subpopulations 1, 3, and 4 [PAGE 6].

Baseline probability p_j^{(b)} is computed for baseline b \in \{\text{national}, \text{seed population}\} [PAGE 5]. The behavioral index is the dimensionless multiplicity
I(i, j; b) = \frac{p_{j|i}}{p_j^{(b)}}.
Verbatim interpretation from the text: “A device in this subpopulation is X times more likely to be a member of this behavioral audience, compared to a baseline population” [PAGE 5]. Breakdown regime: p_j^{(b)} = 0 \Rightarrow I undefined via division by zero; national baseline may misrepresent local market intensity (e.g., Subpopulation 10’s “local sports teams” claim [PAGE 10] cannot be verified against a national baseline).

Reported indices (verbatim values, not invented ratios): Subpopulation 2 indexes 9.91x on Video Games and 0.48x on Professional Sports in the Population Observation [PAGE 8]; Subpopulation 5 indexes 5.23x on Horse Racing and 2.45x on Fantasy Sports [PAGE 8]; Subpopulation 6 indexes 4.86x on Horse Racing and 1.75x on Fantasy Sports [PAGE 9]; Subpopulation 9 indexes 5.96x on Fantasy Sports and 3.71x on Professional Sports [PAGE 10]; Subpopulation 10 indexes 2.08x on Sports and 2.18x on Fantasy Sports nationally [PAGE 10]. Audience composition within clusters: Subpopulation 2 is 79.8% e-Sports, 13.5% Sports Gambling [PAGE 7]; Subpopulation 8 is 33.9% NFL Attendees [PAGE 7].

Temporal operator: The observational indicator \mathbb{1}_{t \in [2018-08-30,\, 2018-09-15]} truncates all location and URL signals [PAGE 4]. Breakdown regime: seasonality singularity—NFL early-season and MLB late-season attendee behavior may not generalize to postseason or off-season ticket windows.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week trap identification.

The methodological genealogy traces to three distinct lineages. First, the URL embedding layer descends from distributional representation learning: the paper uses a CNN with Skipgram training on 430,648,822 devices to produce 128-dimensional vectors [PAGE 4], citing Arora et al. (2017) on sentence embeddings [PAGE 13] and TensorFlow (Abadi et al., 2016) as the computational substrate [PAGE 13]. This places the device clustering in the same family as word2vec-style skip-gram objectives, where context co-occurrence defines semantic proximity. Second, the agglomerative clustering with Ward’s method dates to hierarchical clustering theory (Ward, 1963), here made “patent pending” and operationalized at ad-tech scale [PAGE 4]. Third, the data-ingestion layer relies on the real-time bidding (RTB) bidstream, SDK integrations, and a probabilistic device graph linking desktop and mobile identifiers [PAGE 2], a lineage rooted in programmatic advertising infrastructure rather than sports science.

The multi-week traps are structural. Trap 1: the observational window is sixteen days [PAGE 4], yet season ticket and single-game purchase decisions often occur over multi-week or multi-month consideration cycles. A device observed at a stadium on September 10, 2018 may have purchased its ticket in July; the digital behavior measured in August–September is therefore contemporaneous with attendance but not necessarily causal of the purchase decision. Trap 2: NFL data are collected during early preseason/regular season while MLB data are late regular season [PAGE 3, PAGE 4]; the two sports are at different points in their respective calendars, so pooling them into one “game attendees” segment [PAGE 3] conflates distinct fan mindsets (e.g., pennant-race urgency versus exhibition-game experimentation). Trap 3: the ten cluster seeds are randomly selected [PAGE 4]; if the experiment were re-run the following week with new data and new seeds, Subpopulation 2’s 79.8% e-Sports purity [PAGE 7] could dissolve, invalidating the blanket dismissal of e-Sports as a channel. Trap 4: raw location data are deleted after geofence matching, retaining only “MLB Stadium” or “NFL Stadium” labels [PAGE 3]; this destroys the ability to reconstruct entry timing, duration, weather exposure, or repeat-visit behavior across weeks, making any longitudinal claim about ticket-buying habit unverifiable from the provided data.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

The recursive theory of mind models the sports marketer as an agent facing a crisis: linear TV is threatened by streaming/OTT [PAGE 1], traditional methods of converting fringe followers into ticket purchasers are losing effectiveness [PAGE 1], and leagues are investing heavily in digital audiences [PAGE 1]. The habit regression is the assumption that because fantasy sports, e-sports, and e-gambling are “digital” and growing [PAGE 1], investment in them will automatically flow through to in-stadium ticket purchases. This is a categorical habit: digital engagement is treated as a fungible proxy for physical conversion.

The counter-trap is embedded in the results. The marketer expects e-sports enthusiasts—digital natives, high video-game index—to be the most convertible. The data instead show Subpopulation 2 (e-Sports-centric) under-indexing on professional sports (0.48x in Population Observation) and college sports (0.85x) [PAGE 8], leading to the conclusion that it “is not a fit for driving new ticket purchasers” [PAGE 8]. Conversely, the e-gambling and fantasy-sports subpopulations (5, 6, 9, 10) show meaningful overlap with stadium attendees: Subpopulation 8 contains 33.9% NFL Attendees [PAGE 7], and Subpopulation 10 is declared an ideal audience because it “indexes highly for their local sports teams” [PAGE 10]. The counter-trap is thus that the presumed best channel (e-sports) is the worst, while the presumed ancillary channels (e-gambling, fantasy) are the best.

The clock is the non-stationarity constraint. All behavioral indices are computed from a fixed sixteen-day observation [PAGE 4]. Habit regression assumes the cross-channel affinity structure is stable enough to guide multi-week budget allocation. The clock vetoes that assumption: the window excludes NFL weeks 3–17 and MLB playoffs, when ticket pricing, attendance drivers, and fan demographics shift. A subpopulation that indexes highly on sports in early September may not index identically in October. Therefore the recursive loop is: crisis triggers habit regression toward digital channels; data reveal a counter-trap where e-sports fails; but the clock means even the supported channels (e-gambling, fantasy) are validated only for a narrow seasonal slice, so the regression must be re-run before each budget cycle rather than treated as a durable strategy.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

The physical layer is absent. The study never observes a ticket transaction; it observes device geofence presence inside a stadium polygon during game times [PAGE 3]. Therefore the endpoint “in-stadium ticket purchaser” is a constructed inference from digital co-visitation, not a measured conversion. The authors state the methodology’s ability to measure interests “without the need for first party data sources” and explicitly note that adding “purchase data … would only increase the effectiveness” [PAGE 11], which is an admission that the current physical layer is a proxy vetoed by lack of transactional ground truth.

The biomechanical layer is absent. No data are collected on stadium ingress/egress, gate entry times, mobility within the venue, seating section, accessibility needs, or physical capacity constraints. The geofence contains “the entirety of the stadium grounds” [PAGE 3], but once inside the polygon the device is reduced to a binary POI label after raw location deletion [PAGE 3]. Any claim about “converting into purchasers of in-stadium experiences” [PAGE 1] cannot be biomechanically verified: a device inside the geofence could be an employee, a vendor, or a spectator who did not buy a ticket through the team’s channel.

The weather layer is absent. No meteorological covariates (temperature, precipitation, wind) are linked to the game-time location signals [PAGE 2, PAGE 3]. Game-time attendance is highly weather-sensitive, yet the model treats all stadium-presence events as equivalent. A fantasy-sports enthusiast indexed highly in a dry early-September window may not attend a cold or rainy late-season game; the index carries no weather-risk adjustment.

Adjudication: All three physical-layer vetoes are active. The paper’s conclusion that e-gambling is “the best audience for investment” [PAGE 11] is therefore admissible only as a digital-propensity ranking, not as a proof of physical ticket conversion. The veto is lifted only if first-party purchase data, stadium-access telemetry, and weather controls are integrated; until then, any recommendation to allocate marketing budget based on these indices is inferential and carries unverified physical-layer risk.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) counterfactual veto scenarios with predictions.

Veto Scenario 1 — Cluster-seed stochasticity. Re-run the agglomerative clustering on the same 40,000-device distance matrix [PAGE 4] with a different random seed for the ten cluster-initialization devices [PAGE 4]. Verification condition: if Subpopulation 2’s e-Sports composition drops from 79.8% [PAGE 7] to below 50%, or if a new cluster merges e-Sports devices with NFL/MLB attendees such that an e-Sports-rich subpopulation exceeds 5,000 devices, the original “e-Sports is not a fit” conclusion [PAGE 8] is statistically unstable. Prediction: the negative e-Sports finding reverses or becomes insignificant; at least one re-seeded partition yields an e-Sports-dominant cluster with meaningful attendee overlap (e.g., >10% NFL/MLB), contradicting Subpopulation 2’s 1.4% NFL + 1.7% MLB composition [PAGE 7].

Veto Scenario 2 — Temporal-window extension. Extend the observational period from 2018-08-30 to 2018-09-15 [PAGE 4] to include NFL regular-season weeks 4 through 10 and the 2018 MLB postseason. Verification condition: recompute location-based attendee segments using the same geofence and game-time filter [PAGE 3]. Prediction: because NFL attendees are currently sampled only during early-season games [PAGE 3], their overlap with Fantasy Sports (currently 33.9% of Subpopulation 8 [PAGE 7]) will attenuate as weather, playoff contention, and weekday scheduling alter the attendee mix. Subpopulation 8’s Sports index (5.53x nationally [PAGE 10]) and its classification as “inconclusive” due to size [PAGE 9] will not hold; the Fantasy Sports → NFL-attendee conversion pathway will weaken.

Veto Scenario 3 — Baseline relocalization. Replace the national baseline [PAGE 5] with DMA-specific baselines for the home markets of the geofenced stadiums [PAGE 3]. Verification condition: recompute I(i, j; b) for Subpopulation 10’s “local sports teams” affinity [PAGE 10] using local rather than national P_j^{(b)}. Prediction: the national index of 2.08x on Sports [PAGE 10] is partly an artifact of comparing a locally concentrated sports audience against a diffuse national baseline. Under DMA baselines, Subpopulation 10’s Sports index falls toward unity (e.g., <1.3x), and its designation as an “ideal audience for becoming ticket purchasers” [PAGE 10] is vetoed; the apparent advantage over Subpopulation 9 (3.71x Professional Sports nationally [PAGE 10]) collapses when both are judged against their respective local markets.
</RLVR_COUNTERFACTUAL_VETOES>