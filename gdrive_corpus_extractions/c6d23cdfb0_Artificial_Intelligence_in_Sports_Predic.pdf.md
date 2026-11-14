---
source: "Artificial_Intelligence_in_Sports_Predic.pdf"
folder: "/GSE-Research/sports-research-papers/randoms"
pages: 4
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4213
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper "Artificial Intelligence in Sports Prediction" by McCabe and Trevathan. The output must follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting terminology. No spreads, totals, moneylines, odds.
- Must use formal LaTeX equations. No toy equations.
- Must cite [PAGE N] markers.
- Must include verbatim quotes where appropriate.
- Word count >= 1000 total across sections, with THINK_TRACE >= 400 words.

Let me structure this carefully.

**THINK_TRACE (>=400 words):**
Deep multi-hop derivation and gray-zone audit.
I need to analyze the paper's methodology, identify gray zones, derive implications.
- MLP architecture: 19 or 20 inputs, 10 hidden, 1 output.
- Output normalized [0,1].
- RMS error cost function.
- Backpropagation vs conjugate gradient.
- Feature extraction: points-for, points-against, overall performance (2 points win, 3 EPL win, 1 draw), home/away performance, previous game, previous n games (n=1..5), team ranking, points-for/against in previous n games, location (1 home, 0 away), player availability (proportion of star players unavailable /17).
- Training: all examples from previous rounds, retrained after each round.
- Prediction: team with highest output value wins.
- Results table: AFL best 68.1%, worst 58.9%, avg 65.1%; NRL best 67.2%, worst 52.2%, avg 63.2%; Super Rugby best 75.4%, worst 58.0%, avg 67.5%; EPL best 58.9%, worst 51.8%, avg 54.6%.
- Human experts: NRL/AFL/Super Rugby 60-65%; EPL 50-55%.
- EPL draws: 23% draw rate, tolerance level for draw prediction, 35 draws predicted, 16 correct (45.7%).
- World Cup: 2003 45/48 (93.8%), 2007 40/48 (83.3%).
- Player availability: 9 differences, 1 extra correct (0.5% improvement), abandoned due to maintenance and instability.
- Gray zones: No home ground advantage in 2007 NRL caused 11% drop; retraining after each round causes look-ahead? No, uses previous rounds only. But small feature set, no real-time. Noise from individual form, star player unavailability. Subjectivity excluded but league structure differences (relegation in EPL). World Cup teams have different histories.
- Multi-hop derivation: The system is essentially a function approximator mapping feature vector x_t ∈ R^19 (or R^20) to win probability p ∈ [0,1]. The decision rule is argmax over the two teams. The cost function is RMS error. Breakdown regimes: distribution shift (new teams in Super Rugby 2006), non-stationarity (injuries, form), draw prevalence in EPL requiring tolerance threshold, World Cup sparse data and heterogeneous opposition.

**SOURCE_OPERATORS_AND_EQUATIONS:**
Formal LaTeX, units, page citations, breakdown.
Define:
- Feature vector φ_i(t) for team i at round t.
- Components: PF_i(t), PA_i(t) (negative), OP_i(t), HP_i(t), AP_i(t), PG_i(t), Pn_i(t) for n=1..5, TR_i(t), PFn_i(t), PAn_i(t), L_i(t) ∈ {0,1}, PA_avail_i(t).
- MLP: f(φ; W) = σ( W_2 · σ( W_1 · φ + b_1 ) + b_2 ), output ŷ ∈ [0,1].
- Cost: J(W) = sqrt( (1/N) Σ (ŷ_k - y_k)^2 ) (RMS).
- Decision rule: 
  ŷ_home vs ŷ_away; predict home if ŷ_home > ŷ_away else away.
- EPL draw tolerance: if |ŷ_home - ŷ_away| < τ, predict draw.
- Player availability: a_i(t) = (star unavailable)_i(t) / 17.
- Units: probabilities dimensionless [0,1]; accuracy percentage %; points dimensionless counts.
- Page citations: [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4].
- Verbatim quotes: "The output unit was normalised to be a value between zero and one inclusive." [PAGE 2]; "back-propagation was a little slower to learn than the conjugate-gradient approach, but both methods resulted in almost identical error rates, with back-propagation slightly more accurate." [PAGE 2]; etc.

**RETROCAUSAL_GENEALOGY:**
Historical/scientific lineage & multi-week traps.
- Lineage: McCabe previous work [8] (Artificial Intelligence '02, Canberra, 2002). Bishop 1995, Hassoun 1995, Russell & Norvig 2002. Stock market NN comparisons [6,9,10,11,17]. Other sporting systems [2,14].
- Multi-week traps: Super Rugby 2006 new teams required weight averaging; normalized within 2-3 weeks [PAGE 3]. NRL 2007 missing home ground advantage caused 11% drop vs previous worst [PAGE 3]. TopTipper 2006-2007 season performance improved steadily, took first by final week [PAGE 3]. Figure 2 shows early period of adjustment roughly equivalent to random, then steady improvement [PAGE 3]. Player availability caused predictions to change repeatedly in days leading up to game [PAGE 4]. These are temporal instability traps.

**RECURSIVE_THEORY_OF_MIND:**
Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: When system faces anomaly (e.g., 2007 NRL home advantage omission), does it regress to simpler heuristics? The paper notes system had not been applying home ground advantage, requiring continued analysis. This is a failure mode where the model's internal state diverges from reality.
- Counter-trap: Human tipsters have 60-65% in NRL/AFL/Super Rugby, 50-55% EPL. MAIT sometimes beats them (e.g., World Cup 93.8% vs human 42/48=87.5%). But in regular league, MAIT avg 63.2% NRL vs human 60-65%, so competitive but not dominant. The counter-trap is that human experts adapt to narrative/injuries that the objective feature set misses.
- Clock: Retraining after each round creates a rolling window. The "clock" is the season epoch; early season has small sample size, leading to random-like performance (Super Rugby Fig. 2). The model needs 2-3 weeks to normalize new teams. The clock also refers to pre-match volatility: player availability predictions changed repeatedly in days leading up to game [PAGE 4], causing instability near game time.

**CROSS_LAYER_VETO_ADJUDICATION:**
Physical/biomechanical/weather veto proof.
- The paper's feature set explicitly excludes subjective features and does not include weather, biomechanics, individual player form beyond team aggregates, venue weather, travel fatigue, etc. [PAGE 1] notes noise from individual form and star player unavailability. [PAGE 1] "there are obviously details influencing the contest outside of those which are being captured in the feature set."
- Therefore any physical/biomechanical/weather factor not encoded in scoreline/ladder position is a veto layer the model cannot see. Example: EPL draws (23%) are not predicted unless tolerance threshold triggers; weather affecting draw probability is unmodeled. Player availability was tested but abandoned [PAGE 4], meaning injury/star absence is largely unmodeled in final system.
- Veto proof argument: Because the model is purely objective and historical-scoreline based, it lacks causal physical variables. It cannot adjudicate vetoes from red cards, weather events, or biomechanical fatigue. The only partial physical proxy is points-for/against (offense/defense capability) and home/away location.

**RLVR_COUNTERFACTUAL_VETOES:**
3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning via Verifiable Rewards? Or just counterfactual veto scenarios. I need 3 scenarios that are verifiable and include predictions.
1. Scenario: New team expansion (like Super Rugby 2006 two new teams). Veto: If a league introduces expansion teams without seeded weights, the MLP will perform at random (~50% binary accuracy) for 2-3 weeks until weights normalize [PAGE 3]. Prediction: In first 3 rounds with expansion teams, accuracy ≤ random baseline + ε; by week 4-5 returns to historical mean.
2. Scenario: Omission of home-ground advantage feature (like NRL 2007). Veto: If home/away location feature is disabled or corrupted, accuracy drops by ≥10 percentage points relative to season baseline [PAGE 3 says 11% lower than previous worst]. Prediction: Disabling location input on AFL/NRL data will reduce seasonal accuracy from ~65% to ≤55%.
3. Scenario: High-draw regime (EPL 23% draws). Veto: If draw tolerance τ is set to 0 (never predict draw), accuracy ceiling is bounded by non-draw outcomes; since 23% are draws and draws count as incorrect unless predicted, maximum accuracy ≤ 77% + correct draw predictions. With τ=0, expected accuracy ≤ (1 - 0.23) + 0 = 0.77, but realistically lower due to model error. Prediction: EPL accuracy with no draw tolerance will remain ≤58.9% (best recorded) because unmodeled draw variance dominates.

Need to ensure total words >= 1000. Let me draft carefully, ensuring each section is substantial.

Also must avoid betting terms. I will not mention odds, spreads, etc. I will use "accuracy", "success rate", "prediction", "tip", "output value".

Let me write the XML sections.

Check for verbatim quotes and [PAGE N] markers.

Word count: THINK_TRACE alone needs >=400. I'll make it around 500-600. Others around 200-250 each. Total should exceed 1000.

Let's compose.

THINK_TRACE content:
- Start with the formal setup: MLP as function approximator.
- Multi-hop: Input features -> weights -> hidden -> output -> argmax decision -> accuracy metric.
- Gray zones: 
  1. Feature noise / omitted variables (individual form, star player availability). Paper admits this on [PAGE 1].
  2. Non-stationarity and retraining cadence: retrained after each round using all previous rounds. This creates an expanding window but no forgetting factor; early season data may dominate or stale patterns persist.
  3. Structural breaks: relegation in EPL [PAGE 1], new teams in Super Rugby 2006 [PAGE 3], World Cup heterogeneity [PAGE 4].
  4. EPL draw problem: 23% draw rate [PAGE 3], tolerance threshold, draw counted as incorrect unless predicted [PAGE 3].
  5. 2007 NRL collapse due to missing home advantage: 11% below previous worst [PAGE 3].
- Derive implication: The system is a myopic, scoreboard-only Bayesian-ish approximator without causal physical layer. It will fail under distributional shift or when unobserved physical states dominate.

Need to be careful with word count. Let's write.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define φ_i(t) ∈ R^19 or R^20.
- List features with equations.
- MLP equations with LaTeX.
- Cost function RMS.
- Decision rule.
- Draw tolerance τ.
- Player availability proportion /17.
- Cite pages for each.
- Verbatim quotes.
- Breakdown of Table I values.
- Units: probabilities dimensionless, accuracy %, points count.

RETROCAUSAL_GENEALOGY:
- Cite [8] previous work.
- Cite Bishop, Hassoun, Russell & Norvig.
- Stock market lineage [6,9,10,11,17].
- Other sporting systems [2,14].
- Multi-week traps: Super Rugby 2006 normalization 2-3 weeks [PAGE 3]; NRL 2007 home advantage lapse [PAGE 3]; TopTipper seasonal arc [PAGE 3]; player availability pre-match volatility [PAGE 4].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: when model misses home advantage, does it revert to naive ranking? Paper says continued analysis required.
- Counter-trap: human experts 60-65% vs MAIT 63.2% avg NRL; MAIT wins TopTipper by final week [PAGE 3].
- Clock: retraining after each round, early season random-like performance [PAGE 3 Fig 2], pre-match instability [PAGE 4].

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer absent. Weather, biomechanics, red cards, individual fatigue not in features.
- Only proxies: points-for/against, home/away location.
- Player availability tested but abandoned [PAGE 4], so injury veto is not modeled in production.
- EPL weather/draw relationship unmodeled; 23% draws [PAGE 3].

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Expansion teams without seed weights. Prediction: random accuracy for first 2-3 rounds, recovery by week 4-5.
- Scenario 2: Location feature disabled/corrupted. Prediction: accuracy drop ≥10 points (based on NRL 2007 11% drop).
- Scenario 3: Draw-blind EPL (τ=0). Prediction: accuracy capped below best recorded 58.9% because 23% draws are unforced errors unless predicted; actual expected accuracy roughly (1 - draw_rate) * base_accuracy, but model error reduces it.

Need to avoid toy equations. All equations must be formal and justified by the text.

Let's draft now, keeping an eye on word count. I will write generously.

I must ensure no mention of betting terms. I'll scan for "odds", "spread", "moneyline", "total". None.

Let's write the response.
</NATIVE_REASONING>

<THINK_TRACE>
The paper describes a multi-layer perceptron (MLP) that maps a team-specific feature vector to a scalar output in [0,1], interpreted as confidence of victory. The derivation proceeds in multiple hops: raw match scorelines are aggregated into season-to-date features (points-for, points-against, win/loss/draw performance), split by home/away and recent windows (previous 1 game, previous n games for n=1..5), combined with league-ladder rank and binary location, and then normalized by matches played so that teams with unequal schedules remain comparable [PAGE 2]. The MLP architecture uses 19 input units, or 20 when the player-availability proportion is appended, ten hidden units, and a single sigmoid-normalized output [PAGE 2]. Training uses back-propagation or conjugate-gradient descent to minimize root-mean-squared error across all examples from prior rounds, with retraining after each round [PAGE 2]. Prediction for a match is the argmax of the two team outputs: the team with the higher normalized confidence is tipped [PAGE 2].

A gray-zone audit reveals several structural fragilities. First, the feature set is explicitly scoreboard-derived and excludes subjective judgment [PAGE 2], yet the authors acknowledge on [PAGE 1] that "there are obviously details influencing the contest outside of those which are being captured in the feature set," namely individual player form and the unavailability of star players through injury, suspension, or representative duties. Second, the retraining schedule uses all previous rounds without an explicit forgetting factor, so early-season noise can persist in the weights while the model simultaneously requires an adaptation period when the underlying distribution shifts. Third, league-specific structural breaks are not uniformly handled: the EPL relegation system changes team composition year-over-year [PAGE 1]; Super Rugby's 2006 expansion required seeding new-team weights as the average of existing teams and required two to three weeks to normalize performance [PAGE 3]; and World Cup formats involve teams with heterogeneous match counts, intervals, and opposition quality, requiring the system to disregard non-active team ratings at tournament outset [PAGE 4]. Fourth, the EPL draw prevalence (23% of matches over three years) forces a tolerance-threshold mechanism: if the two team ratings differ by less than τ, a draw is predicted; otherwise the higher-rated team is tipped, and unless a draw is specifically predicted an actual draw counts as incorrect [PAGE 3]. Fifth, the 2007 NRL season suffered an 11% drop below the previous worst performance because home-ground advantage was not being applied, demonstrating that a single omitted binary feature can collapse seasonal accuracy [PAGE 3].

Multi-hop implication: the model is a myopic, scoreboard-only function approximator with no causal physical layer (weather, biomechanics, red cards, travel fatigue). Its accuracy is bounded by the stationarity of the feature-to-outcome mapping and by the fidelity of scoreboard aggregates as proxies for latent team state. When star-player availability was tested in 2006 NRL, only nine prediction flips occurred and one extra correct tip resulted (just over 0.5% gain), after which the feature was abandoned because of maintenance burden and pre-match volatility [PAGE 4]. This indicates that the system's gray zone is precisely where unobserved physical states dominate short-term outcomes, and where the retraining clock cannot converge quickly enough to absorb them.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let team i at round t be represented by a feature vector φ_i(t). The paper constructs φ from objective scoreline and ladder data only [PAGE 2]. Define:

- Points-for: PF_i(t) = Σ_{m≤t} points scored by i in match m.
- Points-against: PA_i(t) = - Σ_{m≤t} points conceded by i in match m (stored as a negative number).
- Overall performance: OP_i(t) = Σ_{m≤t} r_m, where r_m = 2 for a win (3 in EPL), 1 for a draw, 0 for a loss [PAGE 2].
- Home/Away performance: HP_i(t), AP_i(t) computed analogously using only home or only away matches [PAGE 2].
- Previous game performance: PG_i(t) = r_{t} (or previous season final for round 1) [PAGE 2].
- Previous n games performance: Pn_i(t) = (1/n) Σ_{k=1}^{n} r_{t-k+1}, n ∈ {1,…,5} [PAGE 2].
- Team ranking: TR_i(t) = rank of team i when all teams are sorted by OP_i(t) [PAGE 2].
- Points-for/against in previous n games: PFn_i(t), PAn_i(t), n ∈ {1,…,5}, each as separate features [PAGE 2].
- Location: L_i(t) ∈ {0,1}, where 1 = home, 0 = away [PAGE 2].
- Player availability (optional): A_i(t) = (number of unavailable star players)_i(t) / 17, appended as the 20th input [PAGE 2, PAGE 4].

When teams have played different numbers of matches, feature values are averaged by matches played to permit comparison [PAGE 2].

The MLP implements:
ŷ_i(t) = σ( w^{(2)} · σ( W^{(1)} φ_i(t) + b^{(1)} ) + b^{(2)} ),   ŷ_i(t) ∈ [0,1] ⊂ ℝ,
where σ is the logistic squashing function, W^{(1)} ∈ ℝ^{10×d}, d ∈ {19,20}, and the output unit is normalised to be a value between zero and one inclusive [PAGE 2]. Verbatim: "The output unit was normalised to be a value between zero and one inclusive" [PAGE 2].

Training minimizes the root-mean-squared cost:
J(W) = sqrt( (1/N) Σ_{k=1}^{N} (ŷ_k - y_k)^2 ),
over all examples from previous rounds, with back-propagation and conjugate-gradient descent; verbatim: "back-propagation was a little slower to learn than the conjugate-gradient approach, but both methods resulted in almost identical error rates, with back-propagation slightly more accurate" [PAGE 2].

Decision rule for match between home team h and away team a at round t: tip h iff ŷ_h(t) > ŷ_a(t), otherwise tip a [PAGE 3]. For EPL, a draw tolerance τ is applied: if |ŷ_h(t) - ŷ_a(t)| < τ, predict draw; otherwise tip the higher-rated team. Unless a draw is specifically predicted, an actual draw is counted as incorrect [PAGE 3]. Verbatim: "Over the last two seasons, 35 draws have been predicted, with 16 of those being correct at a 45.7% success rate" [PAGE 3].

Table I accuracy (whole-season, %) [PAGE 3]:
AFL: best 68.1, worst 58.9, average 65.1.
NRL: best 67.2, worst 52.2, average 63.2.
Super Rugby: best 75.4, worst 58.0, average 67.5.
EPL: best 58.9, worst 51.8, average 54.6.

Units: all probabilities and accuracies are dimensionless ratios expressed as percentages (%); points are integer counts; n is dimensionless game count; τ is a dimensionless rating-difference tolerance. Breakdown regime: the model assumes feature stationarity within a season and breaks down under structural breaks (new teams, relegation, omitted home advantage, World Cup heterogeneity) and under high-draw regimes when τ is mis-specified.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces to McCabe's earlier work [8], "An Artificially Intelligent Sports Tipper" (Artificial Intelligence '02, Canberra, 2002), extended here to four leagues and World Cup formats [PAGE 1]. The MLP methodology draws on standard neural-network texts: Bishop (1995), Hassoun (1995), and Russell & Norvig (2002) [PAGE 2]. The authors explicitly situate sport prediction alongside financial applications, citing stock-market neural systems [6,9,10,11,17] and noting that such systems rarely outperform naive human investors because of high-dimensional, poorly quantified variables [PAGE 3]. Other published sporting systems exist with varying success [2,14], and the best single-season result in purely NN systems before this work was 58% in the NRL [PAGE 3].

Multi-week traps are evident across the temporal axis. In Super Rugby, the 2006 introduction of two new teams necessitated seeding their weights as the average of all existing team models; performance normalized within two to three weeks, and Figure 2 shows early accuracy roughly equivalent to random assignment before steady improvement [PAGE 3]. In the NRL, the 2007 season collapsed because home-ground advantage was not applied, yielding the worst recorded performance, 11% lower than the previous worst [PAGE 3]. In the TopTipper international competition (2006-2007), the MAIT system's relative percentile improved steadily through the season, taking first position only by the final week [PAGE 3]. These cases share a common retro-causal structure: the model's current weights are a function of the entire past training trajectory, so a structural break at time t₀ propagates forward until enough post-break examples accumulate to re-dominate the gradient. The "clock" is therefore the season epoch; early rounds suffer from small-sample instability, and pre-match injury volatility caused repeated prediction changes in the days before games when player availability was included [PAGE 4]. This makes the system vulnerable to multi-week hysteresis: a mis-specified feature at round 1 can distort rankings for weeks until retraining washes it out.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when the MLP encounters an unmodeled structural shock, it does not possess a meta-cognitive switch to a conservative heuristic; it continues to emit the argmax of its current weights. The 2007 NRL home-advantage lapse illustrates this: the system kept tipping without the location signal, and accuracy fell 11% below the previous worst, requiring "continued analysis and monitoring" rather than an automatic fallback [PAGE 3]. This is a regression to a degraded internal policy, not a graceful fallback to rank-based tipping.

Counter-trap: human expert tipsters achieve 60-65% success in NRL, AFL, and Super Rugby, and 50-55% in EPL, where draws depress accuracy [PAGE 3]. MAIT's seasonal averages (63.2% NRL, 65.1% AFL, 67.5% Super Rugby, 54.6% EPL) sit inside or just above these bands, but the system's decisive counter-trap is its World Cup performance: 45/48 (93.8%) in 2003 versus the Sydney Morning Herald human expert's 42/48 (87.5%), and 40/48 (83.3%) in 2007 despite unusual results [PAGE 4]. In short-horizon, high-stakes tournaments, the model's consistency outstrips human variance, whereas in long league seasons the human edge from narrative, injury news, and tactical context narrows the gap.

Clock: the retraining cadence binds the model to a rolling season clock. After each round, the network is re-trained on all prior rounds [PAGE 2], so early-season outputs are conditioned on sparse data and resemble random assignment until sufficient history accumulates (Super Rugby Fig. 2 [PAGE 3]). Pre-match, the clock compresses: player-availability inputs caused predictions to change repeatedly in the days leading up to a game, producing instability precisely when the decision is locked [PAGE 4]. Thus the model faces a double bind: too little history early in the season, and too much volatility late in the week. A counter-tactic would be to freeze features 24-48 hours before kickoff to avoid recursive chasing of late injury news, but the paper abandoned the availability feature entirely rather than solve this clock problem [PAGE 4].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The MLP has no physical, biomechanical, or weather veto layer. Its inputs are exclusively objective scoreboard and ladder aggregates [PAGE 2], and the authors state that details outside the feature set—individual player form, star-player unavailability due to injury/suspension/representative duty—contest noise [PAGE 1]. The only spatial variable is binary home/away location [PAGE 2]; there is no temperature, precipitation, wind, travel-time, altitude, or red-card/disciplinary input. Biomechanical fatigue is proxied at best by recent points-for/against averages, but not measured directly.

Player availability was experimentally added as the proportion of unavailable star players divided by seventeen [PAGE 4], but abandoned in 2007 because of maintenance burden and pre-match prediction instability [PAGE 4]. Consequently, in production the model cannot veto a tip when a star is ruled out shortly before the match; it lacks the input channel to register that veto. Similarly, EPL draws occur in 23% of matches [PAGE 3]; weather-driven draw propensity is not modeled, so the tolerance threshold τ is the only defense against draw outcomes, and unless τ is triggered, a draw is an automatic error [PAGE 3].

Adjudication rule: any physical layer event (weather stoppage, key injury, red card, travel-induced fatigue) that is not already reflected in season-to-date scorelines and ladder position constitutes an unmodeled veto. Because the system's accuracy is bounded by the feature set's information content, a veto from the physical layer will systematically degrade accuracy when that layer's variance is high. The 2007 NRL collapse (missing home advantage) and the EPL draw problem demonstrate that even a single omitted physical/spatial variable or a high-frequency stochastic outcome class can break the model's seasonal performance. Therefore, the model is veto-proof only within the narrow manifold where scoreboard history is sufficient and physical noise is stationary; it is not veto-proof against weather, biomechanics, or late-breaking team news.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Expansion-team seeding failure: If a league admits expansion teams without seeding their MLP weights as the average of incumbent teams (as was done for Super Rugby 2006 [PAGE 3]), the new-team inputs will be untrained and the output for matches involving them will approximate random assignment. Verifiable prediction: for the first two to three rounds involving expansion teams, match-level accuracy involving at least one expansion team will fall to the binary baseline plus noise (≈50% for win/loss, lower for EPL where draws count as errors), and will recover to the league seasonal mean only after roughly three weeks of post-expansion retraining [PAGE 3].

Scenario 2 — Location feature corruption: If the home/away location input L_i(t) is disabled or set to a constant across a full season, the model loses the home-ground signal whose omission caused the 2007 NRL worst performance, 11% below the previous worst [PAGE 3]. Verifiable prediction: disabling L on AFL or NRL data will reduce whole-season accuracy from the historical average (AFL 65.1%, NRL 63.2% [PAGE 3]) to at most the historical worst minus a margin, i.e., NRL ≤52.2% and AFL ≤58.9%, because home advantage is a structural prior the MLP cannot re-derive from points-for/against alone within one season.

Scenario 3 — Draw-blind EPL operation: If the EPL draw tolerance τ is set to zero so that draws are never predicted, every actual draw is counted as incorrect [PAGE 3]. Given that 23% of EPL matches over the last three years ended in draws [PAGE 3], and the best recorded EPL whole-season accuracy is 58.9% [PAGE 3], a draw-blind policy imposes an upper bound: even a perfect classifier of non-draw matches would score no more than 77% before model error, and the actual MLP, lacking weather/draw covariates, will perform materially below its best recorded EPL result. Verifiable prediction: running the EPL pipeline with τ=0 will yield whole-season accuracy strictly below 58.9%, with the shortfall concentrated in rounds where the draw frequency exceeds the seasonal 23% average, because the model has no mechanism to convert rating parity into a draw tip.
</RLVR_COUNTERFACTUAL_VETOES>