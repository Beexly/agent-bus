---
source: "2016 spatio temporal analysis for team sports.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 42
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3335
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "Spatio-Temporal Analysis of Team Sports – A Survey" by Joachim Gudmundsson and Michael Horton (2016). They've provided the full text across 42 pages.

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No fake ratios. I must use real equations from the paper, cite pages, and produce 1000+ words total across those sections.

Let me plan the content:

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation:
- Start from data representation: object trajectories (10-30 Hz) and event logs [PAGE 4].
- Move to intensity matrices X ∈ R^(N×K)_+ [PAGE 7].
- Matrix factorization WB ≈ X, K << N,V [PAGE 8].
- Motion model: m dv/dt = F - kv [PAGE 9], solution v = F/k - (F/k - v0) exp(-k/m t), v_max = F/k, α = k/m [PAGE 9-10].
- Dominant regions via reachable sets, RPR, Voronoi equivalence [PAGE 10-11].
- Network tools: passing networks G=(V,E), PageRank x_i = p Σ A_ji/L_out_j x_j + q [PAGE 19].
- Performance metrics: EPV, ESQ, EFG+, EGV [PAGE 29-30].
Gray-zone audit: limitations of dominant region models (no physiological constraints, Open 1 [PAGE 12]); pass models assume shortest path/constant velocity (Open 2 [PAGE 14]); spatial pressure ignores facing direction (Open 3 [PAGE 15]); density-performance hypothesis untested (Open 5 [PAGE 20]); football lacks spatially-informed metrics compared to basketball (Open 7 [PAGE 31]).

**SOURCE_OPERATORS_AND_EQUATIONS:**
Formal LaTeX equations from the paper:
- Eq (1): m dv/dt = F - kv [PAGE 9]
- v(t) solution [PAGE 9-10]
- Circular reachable region: center x0 + (1-e^(-αt))/α · v0, radius v_max · (1-e^(-αt))/α [PAGE 10]
- Micro-transition: x_l(t+ε) = x_l(t) + α_l^x[x_l(t) - x_l(t-ε)] + η_l^x(t) [PAGE 10]
- Spatial pressure: m·(1-P) + (1-m)·(1-d/D) [PAGE 14]
- PageRank: x_i = p Σ_{j≠i} A_ji/L_out_j · x_j + q [PAGE 19]
- Intensity matrix X ∈ R^(N×K)_+ [PAGE 7]
- NMF: WB ≈ X [PAGE 8]
Units: Hz, m/s, dimensionless probabilities, etc.
Breakdown regimes: motion model invalid over long distances (no deceleration) [PAGE 9]; dominant region may be disconnected [PAGE 10]; RPR approximation 1000x speedup, ~10% accuracy drop [PAGE 11]; passing models assume constant velocity/shortest path [PAGE 14].

**RETROCAUSAL_GENEALOGY:**
Historical lineage:
- Manual notation since 1950s [70], expert recollection only 42% [Franks and Miller [32], PAGE 1].
- Taki et al. [79] Motion Model / Dominant Region [PAGE 9].
- Fujimura and Sugihara [36] resistive force model [PAGE 9].
- Gould and Gatrell [39] 1977 FA Cup Final passing networks [PAGE 15].
- Passos et al. [64] passing networks introduced [PAGE 15].
- Borgatti [8] centrality survey [PAGE 16].
- Shannon entropy [73] [PAGE 21].
- Braess' paradox / Price of Anarchy [Skinner [75], PAGE 21].
Multi-week traps: formation stability over time, home/away differences [Bialkowski et al. [4], PAGE 24], clustering of formations into six [PAGE 24], role swaps before three-point shots [Lucey et al. [54], PAGE 24].

**RECURSIVE_THEORY_OF_MIND:**
This section needs to talk about crisis habit regression vs counter-trap vs clock. I need to interpret this through the lens of the paper:
- Crisis habit regression: teams reverting to predictable patterns under pressure; dominant regions of defending team more irregular/unpredictable [Fonseca et al. [29], PAGE 12]; successful attacks have thinner dominant regions [Ueda et al. [80], PAGE 13].
- Counter-trap: passing networks, betweenness centrality as impact of removal of player [Peña and Touchette [65], PAGE 18]; Skinner's Braess paradox - removing key player may improve performance [PAGE 21].
- Clock: temporal segmentation [Section 5.5], possession averages 92 per game in basketball [PAGE 28], predicting possession after 2s with 99.25% accuracy [Wei et al. [86], PAGE 22], EPV as continuous "stock ticker" [Cervone et al. [17], PAGE 29].

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof:
- Physical: dominant region computation requires motion model; Taki et al. linear interpolation of acceleration, no deceleration, only accurate short distances [PAGE 9]; Fujimura-Sugihara resistive force model parameters α=1.3, v_max=7.8 m/s empirically estimated [PAGE 9-10].
- Biomechanical: maximum speed bounded, resistive force decreases acceleration [PAGE 9]; players accelerate away from court boundary [Cervone et al., PAGE 10].
- Weather: league-wide datasets control for external factors such as weather, injuries, home/road [PAGE 4]; but individual stadia data may not.
- Veto: if optical tracking fails due to collisions (rugby, American football) confounding edge-detection [PAGE 2], then trajectory-based dominant region analysis is vetoed; must fall back to event logs.

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR veto scenarios + predictions:
1. Veto scenario: Optical tracking unavailable for rugby/American football due to collisions confounding edge detection [PAGE 2]. Prediction: analysis must rely solely on event logs (passes, tackles), making dominant region and motion-model-based spatial pressure inapplicable; pass quality classification accuracy drops below Horton et al.'s 85.8% [PAGE 22] because dominant region features are unavailable.
2. Veto scenario: Taki/Fujimura motion model assumes no deceleration and is only accurate over short distances [PAGE 9]. Prediction: for long sprints (> short distance), reachable region radius v_max·(1-e^(-αt))/α overestimates reachable area because v_max is hard-bound and deceleration is ignored; dominant region computation yields false positives for open-pass receivers.
3. Veto scenario: Passing network PageRank assumes stationary adjacency matrix A and fixed p, q [PAGE 19]. Prediction: in matches with high betweenness centralization (Grund [40], PAGE 17), removing the highest-centrality node triggers Braess paradox [Skinner [75], PAGE 21]; predicted team performance may increase despite losing a key player, vetoing the assumption that centrality correlates positively with performance.

Now I need to write this all out with proper XML tags, >=1000 words total, no betting lines, no toy equations.

Let me draft carefully, ensuring page citations and verbatim quotes where appropriate. I need to be careful with word count. Let me aim for roughly:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~200 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1650 words. Good.

Let me write it now.

For verbatim quotes, I should quote exact text from the provided pages.
- Page 4: "The trajectories produced by these systems are dense, in the sense that the location points samples are uniform and frequent – in the range of 10 to 30 Hz."
- Page 7: "This can be represented as an RN×K + intensity matrix containing the counts X for N players in each of the R regions of the subdivision."
- Page 9: "m d/dt v = F − kv"
- Page 10: "vmax = F/k and the magnitude of the resistance α = k/m"
- Page 19: PageRank formula
- Page 14: spatial pressure formula

I'll include these.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation chain begins at the data layer: Gudmundsson and Horton distinguish object trajectories from event logs, noting trajectories are dense samples in the range of 10 to 30 Hz while event logs are sparse but semantically richer [PAGE 4]. From trajectories, one constructs intensity matrices X ∈ R^(N×K)_+ by counting player visits or events per region [PAGE 7]. These matrices are factorized via non-negative matrix factorization into W ∈ R^(N×K)_+ and B ∈ R^(K×V)_+ such that WB ≈ X with K ≪ N, V, yielding spatial bases that represent coherent shooting or occupancy zones [PAGE 8]. The motion layer is governed by Fujimura and Sugihara’s resistive force model m dv/dt = F − kv, whose closed-form solution v = F/k − (F/k − v0)·exp(−k/m·t) imposes a hard ceiling v_max = F/k and resistance α = k/m [PAGE 9–10]. This yields a circular reachable region centred at x0 + (1 − e^(−αt))/α · v0 with radius v_max · (1 − e^(−αt))/α [PAGE 10]. Dominant regions partition the pitch by earliest arrival time; under no acceleration they collapse to Voronoi cells, but with realistic motion models they may become disconnected [PAGE 10]. Network centrality enters via passing graphs G = (V,E), where PageRank x_i = p Σ_{j≠i} A_ji/L_out_j · x_j + q estimates ball possession likelihood after fixed passes [PAGE 19]. Performance metrics such as expected possession value (EPV) treat possession as a continuous “stock ticker” over a Markov chain combining micro- and macro-transition models [PAGE 29].

Gray-zone audit: Open Problem 1 states motion functions ignore physiological constraints and a priori momentum, making faithful yet tractable modeling an open problem [PAGE 12]. Open Problem 2 notes pass-receiver models assume shortest-path, constant-velocity ball travel, excluding aerial passes, spin, and variable velocities [PAGE 14]. Open Problem 3 identifies that spatial pressure omits player facing direction and opponent pressuring vector [PAGE 15]. Open Problem 5 leaves the density-performance hypothesis untested systematically [PAGE 20]. Open Problem 7 observes spatially informed metrics are mature for basketball but absent for football [PAGE 31]. These gaps mean any downstream inference that treats dominant regions as static Voronoi partitions, or PageRank as time-invariant, operates outside the paper’s stated validity regime.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations extracted verbatim from the source, with units and breakdown regimes:

1. Object trajectory sampling rate [PAGE 4]: f_s ∈ [10, 30] Hz. “The trajectories produced by these systems are dense, in the sense that the location points samples are uniform and frequent – in the range of 10 to 30 Hz.” Breakdown: below 10 Hz, aliasing of cutting maneuvers invalidates dominant-region geometry.

2. Intensity matrix [PAGE 7]: X ∈ R^(N×K)_+, where N = player count, R = spatial regions, X_{nr} = count of visits/events by player n in region r.

3. Non-negative matrix factorization [PAGE 8]: Given X ∈ R^(N×V)_+, compute W ∈ R^(N×K)_+, B ∈ R^(K×V)_+ minimizing D(X || WB) subject to W,B ≥ 0, K ≪ N,V. Spatial bases in B correspond to coherent court regions; rows of W encode player shooting-style mixtures.

4. Fujimura–Sugihara equation of motion [PAGE 9]: m d**v**/dt = **F** − k**v**, where m = player mass (kg), **F** = maximum driving force (N), k = resistive coefficient (kg/s), **v** = velocity (m/s). Solution: **v**(t) = **F**/k − (**F**/k − **v**_0)·exp(−(k/m)t). Empirical estimates: α = k/m = 1.3 s^(−1), v_max = ‖**F**‖/k = 7.8 m/s [PAGE 9–10]. Breakdown regime: “their model did not account for deceleration and hence is only accurate over short distances” [PAGE 9].

5. Reachable region [PAGE 10]: All points reachable from x_0 with v_0 within time t form a circular region centred at **x**_0 + (1 − e^(−αt))/α · **v**_0 with radius v_max · (1 − e^(−αt))/α. Units: metres. Breakdown: for t → ∞, radius asymptotes to v_max/α, ignoring fatigue-induced v_max decay.

6. Micro-transition model [PAGE 10]: x_ℓ(t+ε) = x_ℓ(t) + α_ℓ^x[x_ℓ(t) − x_ℓ(t−ε)] + η_ℓ^x(t), ε = time-step (s), η = higher-order jerk/acceleration residual (m/s²). Breakdown: valid only within a single possession; resets on turnover.

7. Spatial pressure [PAGE 14]: Π(p) = m·(1 − P) + (1 − m)·(1 − d/D), dimensionless ∈ [0,1], where P = fraction of disk radius r centred at p lying in opponent dominant regions, d = distance to ball (m), D = maximal pitch distance (m), m = preset weight. Breakdown: does not model facing direction or pressuring vector [PAGE 15, Open 3].

8. PageRank centrality [PAGE 19]: x_i = p Σ_{j≠i} (A_ji / L_out_j) · x_j + q, where A = pass-count adjacency matrix, L_out_j = Σ_k A_jk, p = probability of turnover/shoot decision, q = baseline popularity. Units: dimensionless probability mass. Breakdown: assumes stationary A and ignores pass directionality beyond out-degree weighting.

9. Dominant region equivalence [PAGE 10]: Without acceleration, dominant region = Voronoi cell; computable via Fortune’s sweepline in O(n log n) [PAGE 10, citing [30]]. With resistive motion model, regions may be disconnected [PAGE 10, Fig. 6a]. Nakanishi et al. reachable-polygonal-region approximation claims ~1000× speedup at ~10% accuracy cost [PAGE 11].

10. Prediction horizon [PAGE 22]: Wei et al. aHCRF predicts ball possessor after Δt = 2 s with 99.25% accuracy. Breakdown: degrades beyond short-term possession windows; no multi-possession forecast provided.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage traces from manual notation methods used since the 1950s [70], which the authors critique via Franks and Miller’s finding that expert observers’ recollection of significant match events is as low as 42% [PAGE 1]. This motivates the shift to automated optical and device tracking [PAGE 1–2]. Geometrically, Taki et al. [79] introduced the Minimum Moving Time Pattern (Motion Model) and Dominant Region [PAGE 9]; Fujimura and Sugihara [36] extended this with a resistive drag term to bound maximum speed [PAGE 9]. The dominant region concept bifurcated into computational geometry (Voronoi equivalence, sweepline algorithms [30]) and reachable-set approximation (RPR, Nakanishi et al. [59], Gudmundsson and Wolle [41]) [PAGE 10–11].

In network science, Gould and Gatrell [39] analysed the 1977 FA Cup Final passing network, identifying Liverpool’s disconnected subsystems and Kevin Keegan as linchpin [PAGE 15]. Passos et al. [64] formally introduced passing networks [PAGE 15]. Centrality measures drew on Borgatti [8] and Freeman [33,34]; Grund [40] used 283,259 passes from 760 English Premier League games to show high centralization decreases performance [PAGE 17–18]. Peña and Touchette [65] applied betweenness, closeness, and PageRank to 2010 FIFA World Cup data, finding Spain and Germany relied on highly central individuals (Xavi, Schweinsteiger) whereas Dutch and Uruguayan passing was distributed [PAGE 19]. Skinner [75] connected basketball transition networks to traffic networks via the Price of Anarchy and Braess’ paradox, suggesting removing a key player can improve team performance [PAGE 21].

Multi-week trap: formation structures are not static. Bialkowski et al. [4] found teams defend more deeply away from home, shifting formation centroids toward their own goal [PAGE 24]. Lucey et al. [54] showed role-swaps in the moments preceding a three-point shot significantly alter shooter openness (at least 6 feet from nearest marker) [PAGE 24]. Thus a model calibrated on a team’s average formation commits a retrospective veto error if it ignores within-game phase transitions and home/away spatial offsets. The survey’s Open Problems 1, 2, 3, 5, and 7 mark where this lineage halts: no unified motion model, no aerially aware pass model, no facing-aware pressure metric, no large-scale density-performance test, and no football-specific spatial metrics comparable to basketball’s EPV/ESQ [PAGE 12,14,15,20,31].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under defensive pressure, teams do not revert to randomness but to structurally predictable modes. Fonseca et al. [29] found defending teams exhibit more irregular individual dominant regions and smaller inter-teammate distances, indicating less predictable movement than attacking teams [PAGE 12]. Ueda et al. [80] showed successful attacks produce thinner dominant regions than unsuccessful attacks that terminate in central-zone turnovers [PAGE 13]. This implies a crisis habit: when possession is threatened, attacking compresses into narrow dominant regions, raising turnover risk near the pitch centre.

Counter-trap: The recursive countermeasure is to attack the opponent’s centrality structure rather than their physical space. Betweenness centrality estimates the impact of removing a player via isolation or dismissal [Peña and Touchette [65], PAGE 18]. Skinner’s Braess’ paradox posits that eliminating the highest-flow node can raise team utility by removing over-concentration on the highest-percentage option [PAGE 21]. Grund’s finding that centralization decreases performance [PAGE 17–18] supports a counter-trap: force the opponent’s ball through a single high-betweenness conduit, then remove that conduit, inducing a network collapse rather than a localized defensive stop.

Clock: Temporal segmentation imposes a hard boundary on both habits and traps. Basketball averages ~92 possessions per game, each naturally segmenting into shot/non-shot outcomes [PAGE 28]. Wei et al.’s aHCRF forecasts the 2-second possessor at 99.25% accuracy [PAGE 22], but this clock is short-term; Cervone et al.’s EPV extends valuation continuously across a possession as a Markov chain over game-state events (passes, shots, turnovers) [PAGE 29]. The recursive interaction is therefore: crisis habit regression compresses space over seconds; the counter-trap exploits centrality over possessions; the clock bounds both, because EPV updates at event granularity and formation detection algorithms (Hungarian algorithm, EM convergence) operate on trajectory windows that assume quasi-stable role assignments [PAGE 23–25]. If the match clock enters a stoppage or formation-shift phase, the counter-trap’s centrality target may have already vacated the vertex set, voiding the prediction.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: Optical tracking fails in sports with frequent collisions (rugby, American football) because edge-detection is confounded [PAGE 2]. Without dense trajectories, dominant region computation and motion-model reachable regions are physically vetoed; analysis must collapse to event logs only. The Fujimura–Sugihara model’s omission of deceleration [PAGE 9] further vetoes long-distance reachable-region predictions: for t beyond the short-distance validity regime, radius v_max·(1−e^(−αt))/α overestimates reachable space because v_max is treated as a hard bound with no fatigue decay.

Biomechanical layer veto: Cervone et al. note players accelerate away from court boundaries as they approach them [PAGE 10], a boundary-reflection behavior not encoded in the planar resistive model m dv/dt = F − kv. Additionally, spatial pressure Π(p) ignores the direction a player is facing and the direction of pressuring opponents [PAGE 15, Open 3], so a defender backing toward their own goal receives the same pressure score as one squaring up to the attacker, a biomechanical false equivalence.

Weather/external factor veto: League-wide datasets (NBA, German Football Leagues) permit controls for weather, injuries, and home/road effects [PAGE 4], but team-level stadia-only datasets do not. Bialkowski et al. [4] demonstrate home/away formation shifts (deeper defending away) [PAGE 24]; applying a home-calibrated intensity matrix to an away fixture invokes a covariate-shift veto.

Adjudication: Any pipeline using dominant regions, spatial pressure, or pass-receiver openness must first verify (i) trajectory availability at ≥10 Hz, (ii) match phase is within a single possession for micro-transition use, and (iii) the sport is not collision-dense enough to defeat optical edge-detection. Failure at any check voids the spatial inference layer and forces fallback to event-log network metrics (passing graph centrality, clustering) alone.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Sensor modality removal: Optical tracking is unavailable for rugby or American football because collisions confound edge-detection [PAGE 2]. Verifiable condition: dataset contains only event logs (passes, tackles, fouls), no 10–30 Hz trajectories. Prediction: Dominant-region-based pass quality classification (Horton et al. [43], 85.8% accuracy [PAGE 22]) collapses because dominant region features are unavailable; fallback to event-log features only yields accuracy statistically indistinguishable from random for spatial pass quality. Counterfactual: If device tracking (GPS/RFID) at ≥10 Hz is substituted, dominant regions remain computable but with lower spatial resolution than optical systems, inducing a bounded error in reachable-region radius proportional to sampling jitter.

Veto Scenario 2 — Motion-model temporal extrapolation: The Fujimura–Sugihara model is accurate only over short distances due to omitted deceleration [PAGE 9]. Verifiable condition: prediction horizon t exceeds the short-distance regime such that v approaches v_max = 7.8 m/s and α = 1.3 s^(−1) no longer captures fatigue. Prediction: Reachable region radius v_max·(1−e^(−αt))/α asymptotically overestimates true reachable space; a receiver predicted “open” at t = 3 s will in fact be covered because the passer’s ball travel time exceeds the receiver’s decelerated reach. Counterfactual: If a deceleration term −γ‖v‖v is added, the reachable radius becomes time-bounded below v_max/α and the open-pass classifier’s false-positive rate drops below the ~10% approximation error already admitted by Nakanishi et al.’s RPR method [PAGE 11].

Veto Scenario 3 — Centrality node removal (Braess paradox): PageRank x_i = p Σ_{j≠i} A_ji/L_out_j · x_j + q assumes stationary passing adjacency and positive value of centrality [PAGE 19]. Verifiable condition: Grund’s centralization metric is high and the highest-betweenness player is removed (red card or tactical isolation) [PAGE 17–18, 21]. Prediction: Per Skinner’s Price of Anarchy and Braess’ paradox [PAGE 21], team performance may increase despite losing the most central player, because the community optimum differs from the Nash equilibrium; the model’s prediction that performance falls with centrality removal is vetoed. Counterfactual: If the passing network exhibits low heterogeneity (uniform degree distribution, Cintia et al. [20], PAGE 20), node removal degrades performance monotonically, and the PageRank-based forecast holds.
</RLVR_COUNTERFACTUAL_VETOES>