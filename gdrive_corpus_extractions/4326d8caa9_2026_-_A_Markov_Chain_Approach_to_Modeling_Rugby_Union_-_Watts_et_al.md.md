---
source: "2026 - A Markov Chain Approach to Modeling Rugby Union - Watts et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5705
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "A Markov Chain Approach to Modeling Rugby Union" by Watts & Pipping-Gamón (arXiv 2610.04813). They provided the source text (10 pages worth, though it appears to be about 9 pages of content).

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

Important notes:
- The source text mentions page numbers in the PDF. I need to cite exact [PAGE N] markers. Looking at the text, there are page markers like "1", "2", etc. at the bottom of pages. Let me trace through:
  - Page 1: Title, abstract, introduction start
  - Page 2: Introduction continued, Section 2 First-order Markov Chain, Eq (1)
  - Page 3: Section 3 Defining States, state space, Eq maybe not shown but state definitions
  - Page 4: Section 4 Transition Matrix, Eq (2), Section 5 Simulation, Table 1
  - Page 5: Table 2, Section 6, Eq (3), Eq (4)
  - Page 6: Section 6.2 Results, Table 3, Section 7 Calibration, R² values
  - Page 7: Section 8 Non-win probability analysis, Figure 2, Figure 3
  - Page 8: Section 9 Conclusion, Section 9.1 Data
  - Page 9: References

Wait, looking carefully at the text provided:
- Page marker "1" appears after abstract/intro start
- Page marker "2" appears after Section 2 intro
- Page marker "3" appears after Section 3 state encoding
- Page marker "4" appears after Section 4 matrix
- Page marker "5" appears after Section 5 example sequence and Table 1, and Section 6 intro + Eq (4)? Actually looking:
  - "5" is at bottom of page with Table 1 and Eq (3)? Let's look:
    - Page 4 ends with Section 5 intro and example sequence mention
    - Page 5 has Table 1, then "5.2 Aggregating Simulations", Eq (3), Table 2, Section 6 intro, Eq (4) at bottom? Actually Eq (4) appears after Section 6.1 Performance Metrics. The page marker "5" seems to be at bottom of page with Eq (4).
- Page marker "6" is at bottom of page with Table 3 and Section 7 calibration start.
- Page marker "7" is at bottom of page with Figure 2 discussion and Section 8.2 Final Score Margin.
- Page marker "8" is at bottom of page with Section 9 Conclusion and Section 9.1 Data.
- Page marker "9" is References.

So citations should be like [PAGE 1], [PAGE 2], etc.

I must not mention betting lines (spreads, totals, moneylines, odds). The paper discusses win probability, expected points, etc. I can mention those as long as I don't frame them as betting odds or lines. "Odds" specifically is prohibited. I should avoid saying "odds" and instead use "probability" or "likelihood".

Zero toy equations: I cannot invent fake ratios like Force/Fatigue. I must use the actual equations from the paper:
- Eq (1): Markov property P(S_n = s_new | ...)
- Eq (2): Transition matrix structure
- Eq (3): Win probability = Number of simulations where Home wins / N
- Eq (4): Error Reduction = (MSE_baseline - MSE_model) / MSE_baseline * 100%

I need to state assumptions, SI/information/probability units, exact singularity/breakdown regimes.

Breakdown regimes from paper:
- Small sample size: test set only 26 games [PAGE 6]
- One season, 132 games total [PAGE 8]
- Binning choice: 10 bins spreads fewer observations thinly [PAGE 6]
- First-order Markov assumption ignores path-dependent effects [PAGE 2]
- Team strength only implicit in transition matrix [PAGE 8]
- Fewer time and scoring states due to data constraints [PAGE 8]
- Variability of estimates for transition or absorption probabilities, each observation potentially having large weight [PAGE 8]

I need >= 1000 words total across sections. Each section has specific focus.

Let me plan content:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Derive how state space S = T × F × G with |S|=336 works.
- Multi-hop: how transition probabilities feed into Monte Carlo simulation, which feeds into win probability, calibration, expected points.
- Gray-zone audit: first-order Markov assumption vs path dependence in rugby (phases, fatigue, momentum). The paper admits path-dependent effects may exist but assumes memoryless. Audit the bucketing: time buckets are coarse (2 min start/end, middle rest), field position 8 zones, score 7 buckets. Singularity when N transitions in a cell is small or zero (smoothing not mentioned?). Breakdown when test set has only 26 games and 10 calibration bins -> ~2.6 games/bin on average, noisy observed win rates. Also the state is from possession team perspective, symmetric by construction but loses home/away fixed effects except through score differential.
- Word count: aim for ~500-600 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- List equations (1)-(4) with LaTeX.
- Define state tuple s=(t,f,g), t in seconds? Actually time bucket is categorical. Field position in meters from opposition try line. Score margin delta = score_poss - score_opp in points.
- Transition matrix P rows sum to unity.
- Win probability estimator Eq (3).
- Error Reduction Eq (4).
- Cite pages for each: Eq (1) [PAGE 2], Eq (2) [PAGE 4], Eq (3) [PAGE 5], Eq (4) [PAGE 5].
- Units: time in buckets (categorical), field position in meters (m), score in points (dimensionless count), probabilities dimensionless [0,1], MSE dimensionless (probability squared), R² dimensionless.
- Breakdown regimes: |S|=336 finite, row sum constraint sum_{s_{n+1}} p = 1, zero-count cells, small N in test set (26 games), binning 10 deciles.
- Word count: aim for ~300-400 words.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Markov chains in sports: American Football (Goldner 2012), Baseball (Bukiet et al. 1997), Tennis (Newton & Aslam 2009) [PAGE 1-2]. NFL win probability (Lock & Nettleton 2014; Yurko et al. 2019; Baldwin 2021) [PAGE 2]. Romer (2006) fourth-down [PAGE 2]. Rugby expected points: Martinez-Arastey et al. (2025) [PAGE 2, 8], Watts & Pipping-Gamón (2026) penalty kick decision [PAGE 2].
- Multi-week traps: The paper uses one season (132 games). Multi-week trap = overfitting to season-specific noise, team strength implicit only, no stratification by team strength across weeks, injuries/form not modeled, transition probabilities estimated from single season may not generalize to next season due to roster changes, coaching changes, law variations. Calibration R² drops from 0.974 in-sample to 0.915 out-of-sample [PAGE 6], showing temporal instability trap.
- Word count: ~250-350 words.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This section is more abstract. "Crisis habit regression" = teams reverting to habitual patterns under pressure (e.g., kicking for touch vs goal). The paper's penalty decision work (Watts & Pipping-Gamón 2026) is relevant. Counter-trap = opponent adapting to your predictable state-based decisions. Clock = time buckets (1h_end, 2h_end) where remaining time dominates final margin [PAGE 7].
- How the Markov model handles (or fails to handle) recursive theory of mind: it assumes memoryless transitions, so it doesn't model opponent adaptation to your strategy within a game. If a team repeatedly kicks for touch from a certain state, opponent may adjust defensive line speed, but the transition matrix doesn't encode this counter-adaptation. Crisis habit regression: in end-game buckets, teams may regress to habitual plays; model captures empirical frequency but not intentional deviation under crisis.
- Clock: as time runs out, current score difference dominates final margin [PAGE 7].
- Word count: ~250-350 words.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- The paper does not include weather, biomechanics, or physical player data. State space is only (time, field position, score). Vetoes: weather (rain, wind) affects kicking for goal/touch and handling errors; biomechanics (player fatigue, substitution patterns) affects phase length and scoring probability in late game; physical (pitch condition, altitude) affects territorial game. These are exogenous veto layers not represented in the Markov chain.
- Because the model is estimated empirically from one season, it absorbs average weather/biomechanics of that season but cannot condition on a specific rainy match or a team with exhausted front row. Breakdown regime: extreme weather or red-card-induced numerical disparity invalidates the stationary transition probabilities because the underlying physical layer changes.
- Word count: ~250-350 words.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need 3 verifiable counterfactual veto scenarios. These should be specific, testable predictions where the model would fail or be vetoed.
  1. Veto scenario: A state with zero observed transitions in training (e.g., 2h_end, 97.5m, up_14p) -> model cannot estimate transition probabilities; prediction: uniform prior or smoothing required, otherwise win probability is undefined/uniform. Verifiable by holding out a state and checking coverage.
  2. Veto scenario: Sudden change in team strength (e.g., red card, key injury) mid-match not reflected in historical transition matrix; prediction: model overestimates win probability for team down a player because transition matrix assumes 15-a-side symmetric conditions. Verifiable by comparing model WP vs actual win rate in matches with red cards.
  3. Veto scenario: Extreme weather (high wind) affecting kicking accuracy; prediction: expected points from penalty kicks near touchline will be overestimated because matrix averages across all weather conditions. Verifiable by stratifying by weather and observing calibration drift.
- Each with prediction.
- Word count: ~250-350 words.

Total words should be >= 1000. Let's make sure each section is sufficiently detailed.

I must avoid the word "odds" entirely. I will use probability, likelihood, chance.

I must not invent fake equations. All equations must be from the paper or clearly formal definitions I'm deriving from the paper (but not toy ratios). I can derive the state space cardinality |S| = 6 × 8 × 7 = 336, that's fine. I can define delta = score_poss - score_opp. That's from the paper.

Page citations: I need to cite exact [PAGE N] markers. Let's map carefully:

[PAGE 1]: Title, abstract, intro start, structural features, data efficiency argument, American football WP models.
[PAGE 2]: Rugby quantitative work, Martinez-Arastey, Watts & Pipping-Gamón penalty decision, Section 2 Markov property Eq (1).
[PAGE 3]: Section 3 states, S=T×F×G, time buckets, field position zones, score buckets, state encoding example, |S|=336.
[PAGE 4]: Section 4 transition matrix Eq (2), row sums to unity, columns PC/S3/S5/S7.
[PAGE 5]: Section 5 simulation, Table 1, Eq (3), Table 2 example (21-14 lead), Section 6 intro, Eq (4) error reduction.
[PAGE 6]: Table 3 results, Section 7 calibration, R² 0.974 in-sample, 0.915 out-of-sample, 26 games test set, 10 bins.
[PAGE 7]: Section 8 next score/expected points, Figure 2, Section 8.2 final score margin, Figure 3, time dominance as clock runs out.
[PAGE 8]: Section 9 conclusion, data limitations, one season 132 games, team strength implicit, future work stratify by team strength.
[PAGE 9]: References.

I'll cite these accordingly.

Word count check: I need to ensure >=1000 words total. I'll write generously.

Tone: analytical, rigorous, no betting references.

Let's draft each section.

THINK_TRACE:
Start with deep multi-hop derivation:
- State definition s=(t,f,g). t ∈ T, |T|=6. f ∈ F, |F|=8, units meters from opposition try line. g ∈ G, |G=7, derived from δ = score_poss - score_opp in points.
- Markov property Eq (1): memoryless. This implies the transition kernel p(s_n, s_{n+1}) is a function only of current tuple.
- Multi-hop: p matrices -> Monte Carlo trajectories -> distribution over final margins -> win probability via Eq (3) -> calibration via decile binning -> expected points via weighted scoring events (S3=3, S5=5, S7=7 points).
- Gray-zone audit: The first-order assumption is the central gray zone. Rugby has continuous possession, phase dependence, set-piece territory, fatigue. The paper concedes path-dependent effects may exist but are excluded for computational efficiency. Coarse bucketing: time segments are 2 minutes at edges, middle is large. Score buckets are wide (±1-6, ±7-13, ≥14). Field zones are 8 ordinal zones. This creates a finite state space of 336, but many cells may have sparse counts. Since dataset is one season (132 games), each game contributes dozens of transitions, but low-frequency states (e.g., deep in own half, 2h_end, down_14p) may have n=0 or n=1 observations. Singularity: any row of P with zero observed transitions for a successor is undefined without smoothing (not specified in text). Breakdown: out-of-sample test set N=26 games; 10 calibration bins means ~2.6 games per bin on average, so observed win rates are noisy and R² drops to 0.915. Home/away asymmetry is removed by conditioning on possession team, which is elegant but strips fixed home advantage except through score differential possession state.
- Need to mention no toy equations. All derivations use formal notation from source.

SOURCE_OPERATORS_AND_EQUATIONS:
- Eq (1) LaTeX: P(S_n = s_{new} | S_{n-1}=s_{n-1}, ..., S_1=s_1) = P(S_n=s_{new} | S_{n-1}=s_{n-1})
- State: s=(t,f,g) ∈ S = T×F×G, |S|=336.
- T buckets: {1h_start, 1h_middle, 1h_end, 2h_start, 2h_middle, 2h_end}; start/end = first/last 120 seconds? Wait text says "first and last two minutes". So 120 seconds. Middle covers remainder. Units: categorical time, not continuous seconds.
- F zones: {2.5, 13.5, 31, 45, 55, 69, 86.5, 97.5} meters from opposition try line. Unit: meters (m).
- G buckets based on δ = score_poss - score_opp (points, dimensionless count). Buckets: down_14p (δ ≤ -14), down_7_13 (-13 ≤ δ ≤ -7), down_1_6 (-6 ≤ δ ≤ -1), tied (δ=0), up_1_6 (1 ≤ δ ≤ 6), up_7_13 (7 ≤ δ ≤ 13), up_14p (δ ≥ 14).
- Transition matrix P ∈ R^{336×336}, row-stochastic: Σ_{s_{n+1}∈S} p(s_n,s_{n+1}) = 1 ∀ s_n.
- Columns include field position shifts, possession changes (PC), scoring events S3 (3 points), S5 (5 points), S7 (7 points).
- Win probability estimator Eq (3): P(Home Win | State) = (1/N) Σ_{i=1}^N 1{home wins in sim i}. Unit: dimensionless probability [0,1].
- Error Reduction Eq (4): 100 × (MSE_baseline - MSE_model) / MSE_baseline. Unit: percent (%).
- Breakdown regimes: zero-count cells in P; row-stochastic constraint fails if no observations for a state (undefined row); test set N=26 games [PAGE 6]; calibration bins=10 causing sparse bin counts [PAGE 6]; single season 132 games [PAGE 8]; team strength not explicit [PAGE 8].

RETROCAUSAL_GENEALOGY:
- Lineage: Markov chains in sport: baseball (Bukiet et al., 1997) [PAGE 1], American football (Goldner, 2012) [PAGE 1], tennis (Newton & Aslam, 2009) [PAGE 1]. NFL win probability: random forests/GAM (Lock & Nettleton, 2014; Yurko et al., 2019) [PAGE 2], gradient boosting (Baldwin, 2021) [PAGE 2]. Decision theory: Romer (2006) fourth-down [PAGE 2]. Rugby EP: Martinez-Arastey et al. (2025) phase-level data [PAGE 2, 8]; Watts & Pipping-Gamón (2026) penalty kick/touch expected points [PAGE 2].
- Multi-week traps: single-season data (132 games) [PAGE 8]. Temporal instability: roster turnover, coaching changes, law variations across weeks mean transition matrix from week 1-106 may not generalize to weeks 107-132. The out-of-sample test set is the final 20% of season (approx 26 games) [PAGE 6]. Calibration decay R² 0.974 -> 0.915 [PAGE 6] indicates distribution shift across the season. Multi-week trap: a model trained on early-season transitions may misestimate late-game scoring because playoff intensity, fatigue, and team separation evolve. No stratification by team strength means strong/weak team transitions are pooled, creating Simpson's paradox-like aggregation bias across weeks.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under time pressure (1h_end, 2h_end), teams may regress to habitual tactical choices (e.g., always kicking for touch from a penalty). The Markov matrix records empirical frequency of these choices but cannot distinguish a deliberate strategic shift from a crisis habit. Because the model is memoryless, it does not track whether a team has repeatedly kicked from the same state and is now predictable.
- Counter-trap: An opponent observing a team's state-dependent tendencies can adapt (e.g., compress defensive line when the possession team is in up_1_6 near the goal line). The transition probabilities p(s_n,s_{n+1}) are stationary and do not condition on the opponent's belief state or adaptation layer. Thus, recursive theory of mind (I know that you know that I am in state X) is absent.
- Clock: As remaining time decreases (2h_end bucket), current score differential δ increasingly dominates final margin distribution [PAGE 7]. The Markov chain captures this through time bucket transitions, but the clock is exogenous and categorical; it does not model clock management (e.g., deliberately slowing play) as an action variable. Breakdown: in the final two minutes, the coarse 2-minute bucket may lump together states with materially different clock management options.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: The state space excludes player-level biomechanics (fatigue, substitution, injury), weather (wind, rain), pitch condition, and referee/law interpretation. These are exogenous vetoes.
- Weather veto: Kicking for goal success probability and carrying efficiency are wind- and rain-dependent. The matrix averages across all conditions in one season [PAGE 8]. In a high-wind match, scoring transition probabilities (S3, S5, S7) from the matrix are invalid because the underlying physical process changed.
- Biomechanical veto: Late-game fatigue alters phase length and offload rates. The model does not condition on minutes played per player or cumulative collisions, so the 2h_end transition probabilities assume average fatigue, not match-specific depletion.
- Physical veto: Numerical disadvantage (red card) changes possession dynamics fundamentally. Since the matrix is symmetric and conditioned only on possession team, a 14-vs-15 state is indistinguishable from 15-vs-15 at the same (t,f,g). This is a structural veto: the model cannot condition on player count.
- Adjudication: Any operational use must check for these vetoes before trusting WP or EP estimates. Breakdown regime: when physical layer deviates from season mean (extreme weather, red card, multiple injuries), the stationary Markov assumption fails.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Sparse-state veto. Select a state with zero training observations, e.g., 2h_end at 97.5 m with down_14p (trailing by 14+, deep in opponent territory, final two minutes). The transition row has no empirical support. Prediction: Without smoothing, p(s_n, ·) is undefined; any reported win probability is arbitrary. Verifiable by computing state coverage in the training set and comparing simulated outcomes for held-out rare states vs actual results.
- Scenario 2: Red-card veto. Match where a team receives a red card at 2h_middle while trailing by 3 points at field position 45. The model continues to use 15-a-side transition probabilities. Prediction: The model will overestimate the trailing team's win probability because scoring and possession retention probabilities degrade with one fewer player. Verifiable by comparing model WP vs realized win rate in matches with second-yellow/red cards.
- Scenario 3: Weather veto. Match played in sustained high wind (>30 km/h) or heavy rain. Prediction: Expected points from penalty kicks and long-range passing will be overestimated because the transition matrix averages kicking/catching success across all weather in a single season [PAGE 8]. Verifiable by stratifying test games by weather and observing calibration decay in high-wind subsets relative to the full-sample R² of 0.915 [PAGE 6].

Now I need to write it all out in the required XML tags. Ensure total word count >= 1000. Let's estimate:
THINK_TRACE: ~550 words.
SOURCE_OPERATORS: ~350 words.
RETROCAUSAL: ~300 words.
RECURSIVE_TOM: ~300 words.
CROSS_LAYER: ~300 words.
RLVR: ~250 words.
Total ~2050 words. Good.

Need to ensure no mention of "odds", "spreads", "totals", "moneylines". I will scan for those words. I won't use them.

Also ensure exact [PAGE N] markers. I'll use [PAGE 1] etc. as appropriate.

Let's write carefully.

One thing: The source text uses "P (Sn = snew | ...)" etc. I need to reproduce LaTeX properly.

I will structure the final response with the XML sections exactly as named.

Double-check: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I should include some verbatim quotes from the source with page citations. I can quote short phrases.

Examples:
- "memoryless" [PAGE 2]
- "each row sums to unity" [PAGE 4]
- "only 26 games" [PAGE 6]
- "one singular season with a total of 132 games" [PAGE 8]
- "current score difference increasingly dominates, becoming the most likely final margin" [PAGE 7]

I'll include a few.

Now write the response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper defines a finite state space S as the Cartesian product T × F × G [PAGE 3]. Time T has six buckets: first-half start/middle/end and second-half start/middle/end, where start and end correspond to the first and last two minutes of each half [PAGE 3]. Field position F consists of eight ordinal zones in meters from the opposition try line: {2.5, 13.5, 31, 45, 55, 69, 86.5, 97.5} [PAGE 3]. Score bucket G is derived from the signed margin δ = score_poss − score_opp, measured in points, and coarsened into seven ordinal categories from down_14p (δ ≤ −14) to up_14p (δ ≥ 14) [PAGE 3]. The resulting state space has cardinality |S| = 6 × 8 × 7 = 336 [PAGE 3]. Each state is encoded as a string key such as 2h_end_22_up_1_6 [PAGE 3].

The first-order Markov property is stated formally as P(S_n = s_new | S_{n−1} = s_{n−1}, ..., S_1 = s_1) = P(S_n = s_new | S_{n−1} = s_{n−1}) [PAGE 2]. The authors describe this as “memoryless,” meaning the model conditions only on the current game situation rather than the full history of prior plays [PAGE 2]. This is the central gray-zone assumption: rugby is continuous, phase-dependent, and path-dependent (set pieces, ruck speed, fatigue, momentum), yet the model deliberately excludes path information for computational tractability and data efficiency [PAGE 2]. The authors admit path-dependent effects may exist but treat them as unobservable noise [PAGE 2].

A multi-hop derivation proceeds as follows. Empirical transition frequencies from the single-season dataset populate a row-stochastic matrix P ∈ R^{336×336}, where each row corresponds to a current state and each column to a successor state, including field-position shifts, possession changes (PC), and scoring events S3, S5, S7 (3, 5, 7 points) [PAGE 4]. From any state s_n, Monte Carlo simulation samples successor states according to P, generating full match trajectories [PAGE 4]. Aggregating N trajectories yields a distribution over final outcomes; win probability is the fraction of simulations in which a designated team wins [PAGE 5]. Expected points arise as the weighted sum of scoring-event probabilities from a given state, reproducing an asymmetric increase near the opposition goal line [PAGE 7]. Calibration is assessed by binning predicted probabilities into deciles and comparing mean predicted probability to observed win rate, with R² of 0.974 in sample and 0.915 out of sample [PAGE 6].

The gray-zone audit identifies several breakdown regimes. First, the state space is coarse: time buckets are categorical (two-minute edges, large middle), score buckets span up to seven points, and field position is binned into eight zones [PAGE 3]. This discards within-bin granularity that could be decision-relevant. Second, data sparsity: one season comprises only 132 games [PAGE 8], and the test set contains only 26 games [PAGE 6]. With ten calibration bins, the test set spreads roughly 2.6 games per bin, making observed win rates noisy and deflating out-of-sample R² [PAGE 6]. Third, rare or unobserved states create singular rows in P: if a state s_n has no observed transitions to a particular successor, the entry p(s_n, s_{n+1}) is zero or undefined absent a smoothing rule, which the paper does not specify [PAGE 4]. Fourth, conditioning on the possession team enforces symmetry by construction but strips fixed home/away effects except as mediated through score differential and possession [PAGE 3]. Fifth, team strength is implicit only, not stratified [PAGE 8]. The model is therefore most reliable in densely observed central states and least reliable in extreme score/time/field combinations late in the season.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal notation and units follow the source.

State definition [PAGE 3]:
s = (t, f, g) ∈ S = T × F × G, with |S| = 336.
t ∈ T = {1h_start, 1h_middle, 1h_end, 2h_start, 2h_middle, 2h_end}; start/end denote first/last 120 seconds of each half; middle covers the remainder [PAGE 3]. Unit: categorical time bucket, not continuous seconds.
f ∈ F = {2.5, 13.5, 31, 45, 55, 69, 86.5, 97.5}, measured in meters (m) from the possession team’s perspective to the opposition try line [PAGE 3].
g ∈ G derived from δ = score_poss − score_opp, in points (dimensionless count) [PAGE 3]:
g(δ) = down_14p if δ ≤ −14;
down_7_13 if −13 ≤ δ ≤ −7;
down_1_6 if −6 ≤ δ ≤ −1;
tied if δ = 0;
up_1_6 if 1 ≤ δ ≤ 6;
up_7_13 if 7 ≤ δ ≤ 13;
up_14p if δ ≥ 14 [PAGE 3].

Markov property [PAGE 2]:
P(S_n = s_new | S_{n−1} = s_{n−1}, ..., S_1 = s_1) = P(S_n = s_new | S_{n−1} = s_{n−1}) \tag{1}

Transition matrix [PAGE 4]:
P(S_{n+1} = s_{n+1} | S_n = s_n) = p_{s_n, s_{n+1}}, ∀ s_n, s_{n+1} ∈ S \tag{2}
Row-stochastic constraint: ∑_{s_{n+1} ∈ S} p_{s_n, s_{n+1}} = 1 for all s_n ∈ S [PAGE 4].
Columns encode field-position transitions, possession changes (PC), and scoring absorptions S3 (3 points), S5 (5 points), S7 (7 points) [PAGE 4]. Unit: dimensionless probability in [0,1].

Win probability estimator [PAGE 5]:
P(Home Win | State) = (Number of simulations where Home wins) / N \tag{3}
Unit: dimensionless probability in [0,1]. Table 2 gives an illustrative state (home leading 21–14, possession at 45 m line) with 832 home wins / 1000 simulations = 0.832 [PAGE 5].

Error reduction [PAGE 5]:
Error Reduction = (MSE_baseline − MSE_model) / MSE_baseline × 100% \tag{4}
Unit: percent (%). Table 3 reports Markov model MSE = 0.188 with 21.4% error reduction vs. naive baseline MSE = 0.239 [PAGE 6].

Calibration [PAGE 6]:
R² of binned predicted probabilities vs. observed frequencies = 0.974 in sample, 0.915 out of sample [PAGE 6]. Test set N = 26 games; 10 bins used for both train and test [PAGE 6].

Exact singularity / breakdown regimes [PAGE 4, 6, 8]:
(i) Zero-count cells: if state s_n has no observed transitions in training, row s_n of P lacks empirical support and p_{s_n,·} is undefined without smoothing (not specified in text) [PAGE 4].
(ii) Sparse test binning: N_test = 26 games across 10 deciles yields noisy bin-level observed win rates [PAGE 6].
(iii) Single-season sample: 132 games total limits granularity and inflates variance of transition and absorption probabilities [PAGE 8].
(iv) Team-strength omission: offensive/defensive parameters are not explicit; strength is only implicit via score-differential conditioning [PAGE 8].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces Markov modeling in sport to baseball (Bukiet et al., 1997), American football (Goldner, 2012), and tennis (Newton & Aslam, 2009) [PAGE 1]. The paper situates itself alongside NFL win-probability work using random forests and generalized additive models (Lock & Nettleton, 2014; Yurko et al., 2019) and gradient-boosted nonlinear interactions (Baldwin, 2021) [PAGE 2]. It also cites Romer (2006) on fourth-down decision rationality as precedent for state-based expected-value frameworks [PAGE 2]. Within rugby, the direct antecedents are Martinez-Arastey et al. (2025), who lay methodological foundations for expected points using phase-level data, and Watts & Pipping-Gamón (2026), who apply expected points to the penalty kick-or-touch decision [PAGE 2, 8]. The dataset itself originates from Martinez-Arastey et al. (2025) [PAGE 8].

The multi-week trap is structural. The model trains on one singular season of 132 games [PAGE 8]. Across a season, rosters change through injury, substitution, and selection; coaching emphasis evolves; and law interpretations may shift. Because transition probabilities are estimated from pooled in-game transitions rather than stratified by team or week, early-season matrices may not generalize to late-season fixtures. The out-of-sample test set consists of the final 20% of the season, only 26 games [PAGE 6]. Calibration quality decays from R² = 0.974 in sample to R² = 0.915 out of sample [PAGE 6], a signature of temporal distribution shift. The authors attribute part of the decline to binning sparsity (10 bins over few observations), but the drop also signals that stationary transition probabilities estimated from weeks 1–106 are a weak prior for weeks 107–132. Without team-strength stratification, strong and weak opponents are pooled into the same transition kernel, creating aggregation bias that varies week-to-week as team separation increases. A multi-week deployment would therefore face a retraining cadence problem: the matrix must be re-estimated frequently enough to capture form and personnel changes, yet each season remains too small for granular state-level stability [PAGE 8].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression refers to the tendency of teams, under temporal pressure, to revert to habitual tactical choices rather than state-optimal ones. In the model’s terminal buckets (1h_end, 2h_end), a team may repeatedly elect the same exit strategy from a penalty—always to touch, always to goal—because of coaching habit or player preference. The Markov transition matrix records the empirical frequency of that choice but cannot distinguish a deliberate strategic response from a crisis habit [PAGE 2, 7]. Because the chain is memoryless, it has no state variable tracking “how many times has this team kicked from this exact situation recently?” and therefore cannot predict when a habit will break under crisis pressure.

Counter-trap describes opponent adaptation to a team’s revealed state-contingent tendencies. If the possession team is in up_1_6 at field position 22 and has kicked to touch in the last three identical states, the defending team can compress its defensive line or alter its rush speed. The transition probabilities p(s_n, s_{n+1}) are stationary and condition only on (t, f, g); they do not condition on the opponent’s belief state or on the history of repeated actions [PAGE 2, 4]. Thus the model lacks a recursive layer: it does not represent “I know that you know that I am in state X.” Any strategic manipulation of transition dynamics—such as deliberately varying kick choice to induce defensive displacement—is invisible to the chain.

Clock refers to the exogenous time bucket. As remaining time depletes into 2h_end, the current score differential δ increasingly dominates the final margin distribution, becoming the most likely outcome [PAGE 7]. The Markov chain captures this statistically through time-bucket transitions, but clock management itself is not an action variable. A team trailing by 3 in the final two minutes may deliberately slow or accelerate play; the model treats the 2-minute bucket as a single categorical interval and cannot distinguish clock-killing from urgent attack. Breakdown occurs when intra-batch clock variation is decision-relevant: two states both labeled 2h_end may have 110 seconds versus 10 seconds remaining, but the model assigns them identical transition dynamics.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The Markov state space contains only (t, f, g) [PAGE 3]. Physical, biomechanical, and weather layers are entirely exogenous and therefore function as vetoes: if any of these layers deviates materially from the season average, the stationary transition matrix is invalid.

Weather veto. Kicking accuracy for goal, carrying success, and handling error rates are wind- and rain-dependent. The matrix averages transition probabilities across all weather conditions observed in one season [PAGE 8]. In a match with sustained high wind or heavy rain, scoring transitions (S3, S5, S7) and territorial shifts will deviate from the pooled empirical frequencies. The model cannot condition on wind speed or precipitation, so expected-points and win-probability outputs in extreme weather are vetoed.

Biomechanical veto. Fatigue, substitution patterns, and cumulative collision load alter phase length and offload rates, especially in 2h_end [PAGE 7]. The state tuple has no player-level fatigue or minutes-played variable. A match in which one team’s front row is depleted by minute 70 will exhibit different possession-retention and scoring transitions than the season average, but P assigns identical probabilities to both [PAGE 4].

Physical veto. Numerical disparity from a red card changes the fundamental possession-contest geometry. The model conditions only on the possession team and enforces symmetry across teams [PAGE 3]. A 14-versus-15 state is indistinguishable from a 15-versus-15 state at the same (t, f, g), so the matrix cannot represent the degradation of set-piece and phase play under numerical disadvantage. Any red-card event is a hard veto on the transition kernel.

Adjudication rule. Before trusting a win probability or expected-point estimate from any state, the operator must verify that weather is near seasonal norm, no red card or multiple injuries have altered team composition, and fatigue is within the range implied by the time bucket. Breakdown regime: when the physical layer shifts from the season mean (extreme weather, red card, mass substitution), the first-order Markov assumption fails because p(s_n, s_{n+1}) is no longer stationary conditional only on (t, f, g).
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 (Sparse-state singularity). Select a state with zero observed training transitions, for example 2h_end at field position 97.5 m with score bucket down_14p (trailing by 14 or more inside the opposition 22 in the final two minutes). Because the dataset contains one season of 132 games, such extreme states may have n = 0 observations [PAGE 8]. Prediction: without an explicit smoothing rule, the row p(s_n, ·) is undefined and any reported win probability is arbitrary rather than model-derived. Verification: compute state coverage in the training set, hold out all zero-count states, and compare simulated outcomes for those states against actual match results; a calibrated model should either decline prediction or apply a documented prior.

Veto Scenario 2 (Red-card counterfactual). Consider a match state at 2h_middle, field position 45 m, score bucket down_1_6 (trailing by 1–6), where the possession team receives a red card, reducing it to 14 players. The model continues to apply 15-versus-15 transition probabilities because player count is not in the state tuple [PAGE 3]. Prediction: the model will overestimate the trailing team’s win probability because possession retention, territory gain, and scoring probabilities all degrade with one fewer player. Verification: isolate all test-set matches containing a second-yellow or red card, compare model-implied win probability at the card event against realized win rate, and test for systematic overestimation relative to non-red-card matches.

Veto Scenario 3 (High-weather counterfactual). Select test matches played in sustained high wind or heavy rain. The transition matrix averages kicking and carrying outcomes across all weather in a single season [PAGE 8]. Prediction: expected points from penalty kicks and long-range passing will be overestimated because adverse weather suppresses conversion and completion rates; correspondingly, win probabilities for teams reliant on the kicking game will be mis-calibrated. Verification: stratify the 26-game test set by weather severity, compute calibration R² within each stratum, and confirm that high-wind subsets exhibit lower R² than the full-sample out-of-sample R² of 0.915 [PAGE 6].
</RLVR_COUNTERFACTUAL_VETOES>