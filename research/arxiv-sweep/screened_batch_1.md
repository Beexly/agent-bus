# arXiv Sweep — Batch 1 Screening (for GSE engine-benchmark lane)

Screened: 2026-09-21. All 143 abstracts in `batch_1.jsonl` read individually.
Scoring: 0 = irrelevant / no transferable method · 1 = tangentially relevant · 2 = directly relevant to GSE · 3 = HIGH VALUE (novel method, new math, public dataset/code, contrarian or market-beating result, or a method class GSE likely doesn't use yet).

## Counts

| Score | Count |
|---|---|
| 3 (high value) | 16 |
| 2 (directly relevant) | 43 |
| 1 (tangential) | 29 |
| 0 (irrelevant) | 55 |
| **Total** | **143** |

Sanity check: 16 + 43 + 29 + 55 = 143 ✓

---

## Score 3 — HIGH VALUE (all 16, full detail)

### 1. A Fairness Audit of the Duckworth-Lewis-Stern Method (+ DLS-Cal calibration layer)
- **arXiv:** 2609.04754v1 — https://arxiv.org/abs/2609.04754v1
- **Authors:** (not extracted — see JSONL), 2026
- **Method:** Large-scale empirical audit of the DLS target-revision method on 8,150 international cricket matches (3,095 ODIs, 5,055 T20Is from Cricsheet), generating 233,550 synthetic interruption scenarios with temporal splits. Documented two structured biases: DLS prediction error spans a 137-run range across (overs-remaining, wickets-lost) match-state buckets, and a gender-differential bias (mean over-prediction +1.51 runs for men vs +7.63 for women on ODIs, F = 195.16, p < 10⁻⁴³). Benchmarked DLS against Bi-LSTM, XGBoost, enriched XGBoost, a deep context-aware model, and a stacking ensemble. Proposed **DLS-Cal: a lightweight interpretable calibration layer (27K parameters) that outputs a state-conditioned correction added on top of DLS**, plus a gender-aware variant. DLS-Cal cut absolute bias by 31% on ODI / 19% on T20I; the gender-aware variant cut women's ODI residual bias from +6.19 to +0.65 runs while leaving men's calibration unchanged.
- **Results (numbers):** 31% / 19% bias reduction; gender residual bias +6.19 → +0.65 runs; code, models, and data released.
- **GSE component:** Calibration (CQR lane). This is the single most directly portable idea in the batch: instead of replacing a base model, train a small state-conditioned *correction layer* on top of it. GSE's engine is the "DLS" here — a 27K-param correction head conditioned on game state could sit on top of existing EPA/WP outputs.
- **Why high value:** Exact recipe for a post-hoc calibration layer, quantified gains, AND a public code/model/data release. Also a warning: any long-standing "standard" method (like our own engine baselines) should be audited for structured subgroup bias before being trusted.

### 2. ParlayMarket: Automated Market Making for Parlay-style Joint Contracts
- **arXiv:** 2603.22596v3 — https://arxiv.org/abs/2603.22596v3
- **Authors:** (see JSONL), 2026
- **Method:** Automated market-maker for parlay/joint-outcome contracts. Maintains a **shared pairwise exponential-family belief state**, so all base and parlay prices are marginals of one coherent joint distribution — compressing the 2^M outcome space into O(M²) sufficient statistics so one liquidity pool supports an exponentially large family of contracts. Main result characterizes learning and loss dynamics: under repeated trading, prices converge to the best pairwise approximation of the true joint distribution; induced expected market-maker loss grows **at most quadratically in the number of base events** (rather than exponentially in listed parlays), and this quadratic dependence is worst-case optimal for dense pairwise dependence (there are O(M²) independent correlation directions to learn). Parlay trades themselves are essential to the guarantee — they constrain joint outcomes directly and reduce steady-state error vs. learning from marginal trades alone.
- **Results (numbers):** 2^M → O(M²) compression; loss O(M²) not O(2^M); worst-case optimal bound.
- **GSE component:** Market/odds modeling — parlay pricing and correlation-aware multi-leg valuation. GSE prices parlays for the DFS/betting lanes; this is a principled pricing engine for joint contracts.
- **Why high value:** Market microstructure flag. Novel, publishable-grade math for exactly the object GSE prices (correlated multi-leg bets). Implementable: maintain pairwise sufficient statistics over legs, derive marginal prices from the coherent joint.

### 3. Gaining Momentum: Uncovering Hidden Scoring Dynamics in Hockey through Deep Neural Sequencing and Causal Modeling
- **arXiv:** 2511.00615v1 — https://arxiv.org/abs/2511.00615v1
- **Authors:** (see JSONL), 2025
- **Method:** Five-stage pipeline on 541,000 NHL event records (Sportlogiq): (1) interpretable momentum weighting of micro-events via logistic regression; (2) nonlinear xG estimation via gradient-boosted decision trees; (3) temporal sequence modeling with LSTM networks; (4) spatial formation discovery via PCA followed by K-Means clustering on standardized player coordinates; (5) **X-Learner causal inference estimator to quantify the average treatment effect (ATE) of adopting the identified "optimal" event sequences and formations**. Claims ATE = 0.12 (95% CI: 0.05–0.17, p < 1e-50), i.e., a 15% relative gain in scoring potential from structured sequences/compact formations.
- **Results (numbers):** ATE 0.12, 95% CI 0.05–0.17, p < 1e-50 → 15% relative scoring-potential gain.
- **GSE component:** New capability — causal evaluation of play sequences / formations (transfers to NFL play sequencing, personnel packages, formation value).
- **Why high value:** Causal-inference flag. Rare paper that puts a *causal* number (with CI and p-value) on a tactical claim instead of a correlational one. X-Learner on top of sequence discovery is a template GSE could lift for "which play sequences/formations actually cause EPA" rather than "which correlate with EPA."

### 4. Boltzmann-Informed Probabilities
- **arXiv:** 2505.21543v1 — https://arxiv.org/abs/2505.21543v1
- **Authors:** (see JSONL), 2025
- **Method:** Assigns hypothetical energy levels to the outcomes of a random variable, then derives probabilities via the Boltzmann distribution (probability ∝ exp(−energy/temperature) — standard statistical-mechanics form; abstract states the concept, not the formula). Applied to five seasons of English Premier League data in a sports-betting context.
- **Results (numbers):** When fed into the Kelly criterion, Boltzmann-informed probabilities **consistently outperformed probabilities derived from the original betting odds** over five EPL seasons.
- **GSE component:** Market/odds modeling + staking (Kelly sizing lane).
- **Why high value:** Contrarian, weird, and claims to beat market-implied probabilities. A genuinely *different* probability construction (energy-based rather than frequency- or model-based). Testable in an afternoon on GSE's odds data: map outcomes to "energy" states, compute Boltzmann probabilities, compare vs. engine probs under Kelly growth. Low cost to falsify.

### 5. OpenSTARLab: Open Approach for Spatio-Temporal Agent Data Analysis in Soccer
- **arXiv:** 2502.02785v2 — https://arxiv.org/abs/2502.02785v2
- **Authors:** (see JSONL), 2025
- **Method:** Open-source framework for event + tracking data: a Pre-processing Package that standardizes data through **Unified and Integrated Event Data and State-Action-Reward formats**, an Event Modeling Package implementing deep-learning-based event prediction, and an **RLearn package for reinforcement learning tasks**. Positioned to democratize spatio-temporal agent data analysis; event-prediction model reported superior on action and time prediction.
- **Results (numbers):** Superior event-prediction performance (action + time) vs. baselines in their evaluations.
- **GSE component:** Data pipeline + tracking metrics. The State-Action-Reward data format and the event→RL pipeline design are directly liftable for NFL tracking data (Big Data Bowl / NGS-style).
- **Why high value:** Public framework (code release) purpose-built for the tracking-data stack GSE is now benchmarking against. Study its data schema and RL package before building GSE's own tracking pipeline — avoid reinventing the SAR representation.

### 6. Match predictions in soccer: Machine learning vs. Poisson approaches
- **arXiv:** 2408.08331v1 — https://arxiv.org/abs/2408.08331v1
- **Authors:** (see JSONL), 2024
- **Method:** Head-to-head comparison of neural networks, random forests, and Poisson models for single-match prediction across 5 European top leagues, using a full season of match results as features.
- **Results (numbers):** Two contrarian findings — (a) team performance levels **do not change systematically during a season** (statistical analysis), so all past match results can be used with **equal weighting** (no time decay needed); (b) **both the exact choice of features and the choice of model have only a minor influence on prediction quality**.
- **GSE component:** Engine ratings. Directly challenges the "more features / fancier model / clever decay" arms race.
- **Why high value:** The most important negative result in the batch. If model and feature choice barely matter for match prediction, GSE's edge must come from elsewhere (markets, calibration, props, timing) — this paper is the evidence to cite. Also: test the equal-weighting claim on NFL data; if it holds, simplify the engine's time-decay machinery.

### 7. SportsNGEN: Sustained Generation of Realistic Multi-player Sports Gameplay
- **arXiv:** 2403.12977v3 — https://arxiv.org/abs/2403.12977v3
- **Authors:** (see JSONL), 2024
- **Method:** **Transformer decoder trained on player + ball tracking sequences** as a sports simulation engine. Demonstrated on professional tennis tracking data: simulations predict rally outcomes, determine best shot choices at any point, and evaluate **counterfactual / what-if scenarios** for coaching and broadcast. Combined with a shot classifier and rally start/end logic, it simulates entire matches. Model output sampling parameters are crucial to realism; SportsNGEN is **probabilistically well-calibrated** to real data. A generic model can be **fine-tuned to a specific player** on that player's match subset; qualitative results show the same approach works for football.
- **Results (numbers):** Simulation statistics match real match statistics between the same players; well-calibrated.
- **GSE component:** Tracking metrics / new capability — a generative simulation engine for plays (counterfactual "what if the defense had blitzed" analysis, calibrated scenario sims for content).
- **Why high value:** The closest thing in the batch to a "Next Gen Stats simulator." A tracking-data transformer that is both calibrated and player-fine-tunable is exactly the backend Garrett asked about. Blueprint for GSE's own play-simulation engine once tracking data is in hand.

### 8. XGBoost Learning of Dynamic Wager Placement for In-Play Betting on an Agent-Based Model of a Sports Betting Exchange
- **arXiv:** 2401.06086v1 — https://arxiv.org/abs/2401.06086v1
- **Authors:** (see JSONL), 2024
- **Method:** Uses the **Bristol Betting Exchange (BBE)** — an open-source agent-based model simulating a sports-betting exchange with in-play betting (built for track racing) — as a **synthetic data generator**. Minimally-simple bettor agents generate training data; XGBoost learns from the more profitable agents' bets; the learned decision tree(s) are then deployed as a new bettor agent inside the ABM and evaluated on profitability across market scenarios.
- **Results (numbers):** XGBoost-trained agents learned profitable strategies and **generalized to outperform every strategy used to create the training data**.
- **GSE component:** Market/odds modeling — a sandbox for testing GSE betting strategies against simulated market participants before risking anything.
- **Why high value:** Public code release (BBE + XGBoost integration on GitHub). Gives GSE a full agent-based exchange simulator for strategy testing — the "test it" half of Garrett's loop, for free.

### 9. Analytics, have some humility: a statistical view of fourth-down decision making
- **arXiv:** 2311.03490v6 — https://arxiv.org/abs/2311.03490v6
- **Authors:** (see JSONL), 2023
- **Method:** Standard fourth-down analysis maximizes estimated win probability from ML models fit on a few thousand games — a noisy binary outcome against game-state variables full of interactions and nonlinearities. The paper **knits uncertainty quantification into the decision procedure via bootstrapping** and examines the resulting decision uncertainty.
- **Results (numbers):** Uncertainty in the estimated optimal fourth-down decision is **far greater than what sports analysts express in popular media** — the confident "go for it" graphics are statistically overconfident.
- **GSE component:** Engine ratings / decision analysis (4th-down content, WP-based recommendations).
- **Why high value:** Directly relevant to anything GSE publishes about fourth downs or WP-based decisions, and a content differentiator: GSE can show decision *uncertainty bands* where competitors show false precision. Method is trivially implementable (bootstrap the WP model, report decision-stability rates).

### 10. Rethinking Evaluation Metric for Probability Estimation Models Using Esports Data
- **arXiv:** 2309.06248v1 — https://arxiv.org/abs/2309.06248v1
- **Authors:** (see JSONL), 2023
- **Method:** Argues accuracy only measures discrimination for win-probability models; investigates Brier score and Expected Calibration Error (ECE), then proposes a novel **Balance score** — claimed to satisfy six desirable properties of a probability-estimation metric and, under general conditions, to be an **effective approximation of the true expected calibration error that ECE-with-binning only imperfectly approximates**.
- **Results (numbers):** Simulation + real game-snapshot data support the Balance score for evaluating win-probability models.
- **GSE component:** Calibration (CQR lane) — a better metric for judging GSE's probability outputs.
- **Why high value:** GSE's calibration lane currently uses CQR; this is a candidate *evaluation metric* upgrade. If Balance score approximates true ECE better than binned ECE, adopt it as the internal calibration scoreboard. Cheap to implement, immediate use.

### 11. Boldness-Recalibration for Binary Event Predictions
- **arXiv:** 2305.03780v3 — https://arxiv.org/abs/2305.03780v3
- **Authors:** (see JSONL), 2023
- **Method:** Identifies a **fundamental tension between calibration and boldness** (spread-out, informative predictions): calibration metrics can look great on overly cautious, non-bold forecasts. Develops a **Bayesian model-selection approach to assess calibration** and a **boldness-recalibration strategy**: the user pre-specifies a desired posterior probability of calibration, and the method **maximally emboldens predictions subject to that constraint**.
- **Results (numbers):** Case study on hockey home-team win probabilities: relaxing the posterior calibration probability from 0.99 → 0.95 **widened predictions from .26–.78 to .10–.91** — dramatically more informative, barely less calibrated.
- **GSE component:** Calibration (CQR lane) — directly addresses the "our probs are calibrated but cluster near 50%" problem.
- **Why high value:** Names and solves a problem every calibrated sports model has: calibration without boldness is useless for betting/DFS. The constrained-optimization framing (maximize spread subject to a calibration guarantee) is implementable and gives GSE a principled "sharpness dial."

### 12. Going Deep: Models for Continuous-Time Within-Play Valuation of Game Outcomes in American Football with Tracking Data
- **arXiv:** 1906.01760v3 — https://arxiv.org/abs/1906.01760v3
- **Authors:** (see JSONL), 2019
- **Method:** General framework for **continuous-time within-play valuation in the NFL using player-tracking data**. Modular sub-models; an **LSTM ball-carrier model** estimates expected yards to gain from the ball-carrier's current position conditional on locations/trajectories of all 22 players. Extension via **conditional density estimation** so the expectation of *any* play-value measure (EP, WP) can be computed in continuous time — claimed as never before possible at that granularity.
- **Results (numbers):** Framework + ball-carrier model; no single headline accuracy number in abstract.
- **GSE component:** Tracking metrics — this is the foundational paper behind NGS-style within-play valuation (expected yards / win probability added during a play).
- **Why high value:** The canonical academic ancestor of the NGS tracking metrics GSE is benchmarking against. Read this first in any tracking-metrics build: it defines the modular architecture (ball-carrier sub-model → continuous EP/WP) that NGS products implement.

### 13. Risk-Neutral Pricing and Hedging of In-Play Football Bets
- **arXiv:** 1811.03931v1 — https://arxiv.org/abs/1811.03931v1
- **Authors:** (see JSONL), 2018
- **Method:** Develops a **risk-neutral valuation framework for pricing and hedging in-play football bets**, modeling scores as independent Poisson processes with constant intensities. Applies the **Fundamental Theorems of Asset Pricing** to derive novel **arbitrage-free valuation formulae** for contracts currently traded in the market; describes calibration of the model to the market and how trades can be replicated and hedged.
- **Results (numbers):** Closed-form arbitrage-free prices; calibration + replication recipe.
- **GSE component:** Market/odds modeling — in-play pricing and hedging of live positions.
- **Why high value:** Imports real derivatives math (risk-neutral pricing, replication) into live betting. If GSE ever prices or hedges in-play exposure, this is the theoretical foundation — and its assumptions (independent Poisson, constant intensity) are explicit enough to stress-test.

### 14. nflWAR: A Reproducible Method for Offensive Player Evaluation in Football
- **arXiv:** 1802.00998v2 — https://arxiv.org/abs/1802.00998v2
- **Authors:** (see JSONL), 2018
- **Method:** Four contributions: (1) the **nflscrapR R package** for public NFL play-by-play data back to 2009; (2) a **multinomial logistic regression for expected points per play**; (3) a **generalized additive model (GAM) for win probability per play** from EP; (4) the **nflWAR framework** — multilevel models isolating individual offensive skill-player contributions as wins above replacement, with uncertainty via a football-specific resampling approach. 2017 season results presented.
- **Results (numbers):** Full 2017 NFL player WAR estimates with uncertainty bands.
- **GSE component:** QB & props / engine ratings — player-level value attribution, the direct ancestor of modern NFL WAR work.
- **Why high value:** Reproducible, public-data, interpretable player valuation with uncertainty — the template for any GSE "player value" metric. The multinomial-logit EP + GAM WP pipeline is simple enough to reimplement as a baseline before fancier models.

### 15. Exploiting oddsmaker bias to improve the prediction of NFL outcomes
- **arXiv:** 1710.06551v2 — https://arxiv.org/abs/1710.06551v2
- **Authors:** (see JSONL), 2017
- **Method:** Tests whether **biases in oddsmakers' spreads** (set by human + algorithmic judgment) can be exploited to improve NFL outcome prediction. Trains/tests predictive models on real gambling data under varying assumptions, comparing bias-exploiting methods against baselines.
- **Results (numbers):** Bias-exploiting methods performed best under tested conditions; authors suggest this can increase profit for financially interested parties.
- **GSE component:** Market/odds modeling — using the spread *itself* (and its biases) as a feature rather than just a benchmark.
- **Why high value:** Market-beating claim flag, NFL-specific. Directly actionable: GSE already models against the spread — this says model the spread's *biases* as signal. Test: which spread situations (primetime, public teams, etc.) show systematic bias in GSE's historical odds data.

### 16. LinNet: Probabilistic Lineup Evaluation Through Network Embedding
- **arXiv:** 1707.01855v2 — https://arxiv.org/abs/1707.01855v2
- **Authors:** (see JSONL), 2017
- **Method:** Builds a **directed network of lineups** (nodes = lineups; edge j→i if lineup i outperformed j, annotated with point-margin-per-minute), learns latent node features with **node2vec**, then models P(lineup A beats lineup B) in that latent space. Evaluated on 5 NBA seasons of lineup data.
- **Results (numbers):** **69% out-of-sample accuracy vs. 56%** for player-adjusted-plus-minus-based prediction; probabilities **well-calibrated** (validation curves). Sport-agnostic — only needs lineup matchup performances.
- **GSE component:** Engine ratings — lineup/personnel-package evaluation (NFL OL combinations, defensive personnel groupings, skill-position packages).
- **Why high value:** 13-point accuracy gap over APM-based prediction with calibrated outputs, on sparse lineup data — the exact sparsity problem GSE faces with NFL personnel groupings. node2vec on matchup graphs is a method GSE likely doesn't use. Implementable on play-by-play personnel data.

---

## Score 2 — directly relevant (compact table)

| arXiv ID | Title | One-line method | GSE component |
|---|---|---|---|
| 2609.07617v1 | Forecasting the Winner of a Live Tennis Match | Hybrid pre-match + live model ("Trace"); 76–88% accuracy at 25/50/75% match progress on 1.5M points | Engine ratings (live WP) |
| 2608.27362v1 | How exceptional was the Big Three era? | Bayesian dynamic Bradley-Terry state-space model on 197,926 tennis matches; dominance via high-threshold exceedances | Engine ratings (dynamic ratings) |
| 2608.12291v1 | When should one stop the most exciting game? | Optimal stopping of win-martingales; free-boundary PDE characterization for diffusion win-prob processes | Market/odds (live cash-out timing) |
| 2607.18009v1 | Bayesian Conway-Maxwell-Poisson with spike-and-slab priors | CMP likelihood + spike-and-slab on dispersion params; Metropolis-within-Gibbs; applied to EPL scores, beats Poisson | Engine ratings (score modeling) |
| 2606.17345v1 | Counterfactual Optimization of Baseball Pitch Sequences | Transformer predicts in-play prob; counterfactual sequence swaps; regression links to season stats (>1.0 K/9 gain) | New capability (counterfactual strategy eval) |
| 2603.11016v3 | Model-based restricted Shapley value for shot actions | xGA + Player Restricted Shapley Value on passing-network coalitions; 8,421 Serie A shot-actions | QB & props (player contribution) |
| 2602.19513v1 | Real-time Win Probability and Latent Player Ability via STATS X | T-score continuous dominance indicator + T-process stochastic representation; STATS X latent contribution index | Engine ratings + QB & props |
| 2602.15673v1 | Leicester's Tale: EPL 2015/16 through xG Modelling | Shot-level xG → season simulations; mid-season xG predicts second-half points beyond league position | Engine ratings (underlying-metrics lesson) |
| 2601.15000v1 | Lineup Regularized Adjusted Plus-Minus (L-RAPM) | Regression controlling opposition + informed player priors for sparse lineup data; beats baseline, gap grows as n shrinks | Engine ratings (lineup ratings) |
| 2601.03099v1 | Time-Aware Synthetic Control | State-space + Kalman filter/RTS smoother + EM for counterfactuals; evaluated on sports prediction | Engine ratings (trend handling) |
| 2512.08591v1 | Long-Sequence LSTM for NBA Game Outcome Prediction | LSTM over 9,840-game sequences (8 seasons); novel 2004–2025 dataset; 72.35% acc, 76.13 AUC | Engine ratings |
| 2512.00312v2 | Kicking for Goal or Touch? EP Framework for Rugby Penalties | Two EP surfaces (lineout possession vs. kick) → decision maps; team-specific kicker/lineout tailoring | Engine ratings (decision surfaces) |
| 2511.12606v3 | Pixels or Positions? (SoccerNet-GAR) | Tracking-vs-video benchmark; role-aware GNN; tracking 77.8% vs video 60.9% balanced acc; dataset release | Tracking metrics (+ dataset) |
| 2508.19848v1 | Hierarchy and ranking in pairwise sports contests | Match-result networks; elimination tournaments → less hierarchy, more cycles; network metrics predict ≈ Elo | Engine ratings |
| 2508.00200v1 | Predicting Formula 1 Race Outcomes | Time-decayed ridge RAPM + LOESS; constructors explain 64% of variance | QB & props (decomposition template) |
| 2412.21181v1 | Causal Hangover Effects | Causal effect via bookmaker spreads as the observable-control (efficient-market identification); party-city study | Market/odds (causal ID trick) |
| 2411.15075v1 | Effects of MLB's Ban on Infield Shifts | Difference-in-differences + synthetic control; +9 pts BABIP/OBP for LHB; some players +70 pts | New capability (rule-change causal eval) |
| 2409.05714v2 | Forecasting Ice Hockey Championships, Dynamic Ranking | Plackett-Luce with score-driven time-varying strengths; tournament/medal/playoff forecasts | Engine ratings |
| 2403.03862v1 | NCAA CFP team selections using Elo | Elo audit of CFP picks (FSU 2023 ranked 11th); top-4 by Elo differ from committee nearly every year | Engine ratings (CFB lane) |
| 2312.04338v1 | Stochastic modelling of football matches | Cox (doubly-stochastic Poisson) processes, concave log-likelihood; red card −30% goal intensity; trailing boosts scoring | Engine ratings (in-game dynamics) |
| 2310.11459v1 | Glicko-2 Ratings of Football Leagues (modified) | Glicko-2 + draw prob + HFA + league-transition effects; marginally beats Poisson regression; GitHub code | Engine ratings (+ code) |
| 2307.02139v1 | Extending the Dixon and Coles model | Dixon–Coles as special case of Sarmanov family; new multiplicative score models; women's football application | Engine ratings (score modeling) |
| 2303.16741v1 | Predicting Sports Performance with GATv2-GCN | Graph attention + temporal convolution on player interaction graphs; betting-context evaluation | QB & props |
| 2303.16648v1 | Beating the average: exploiting soccer betting inefficiencies | Stochastic recipe for TOTO 13er Wette; hypergeometric approximations; claims moderate consistent profits | Market/odds |
| 2210.06327v3 | Betting the system: Using lineups to predict football scores | SVR on EPL lineups; GK stats > attacker stats; lineups don't improve predictions; claims 42% betting return | Market/odds |
| 2209.07274v5 | Grid WAR: Rethinking WAR for Starting Pitchers | Convex per-game WAR (diminishes blow-ups, upweights gems); better predicts future WAR; public Shiny app + data | QB & props (aggregation insight) |
| 2207.13770v1 | Calibrate: Interactive Analysis of Probabilistic Model Output | Interactive reliability diagrams; subgroup + instance-level calibration inspection | Calibration (tooling) |
| 2205.04173v3 | Nested Zero-Inflated Generalized Poisson for WC 2022 | ZI generalized Poisson + Elo/attack/defense covariates; Monte Carlo tournament sim; validated vs prior WCs | Engine ratings |
| 2112.13001v3 | Forecasting corner kicks via compound Poisson | Compound Poisson regression (geometric-Poisson, Bayesian); betting odds as covariates; margin-adjustment discussion | Market/odds (odds-as-features) |
| 2102.07545v2 | Computing an Optimal Pitching Strategy (zero-sum game) | At-bat as zero-sum stochastic game; DNN outcome prediction; pitcher/batter representations | New capability (game theory) |
| 2106.14345v2 | Verification of probability forecasts for football | Score decompositions (Brier/RPS/log), reliability/discrimination diagnostics, multiple binning techniques | Calibration (evaluation) |
| 2003.09384v2 | Efficiency of the Asian handicap betting market | Ratings + Bayesian networks on 13 EPL seasons; AH shares traditional-market inefficiencies; ROI/profit optimization | Market/odds |
| 1910.03203v1 | Random forest: serve strength predicts tennis outcomes | Simple ML, 80%+ accuracy, beats odds alone; serve strength key; recreates bookmaker-implied distribution | Market/odds |
| 2109.12990v1 | DeepHoops: Evaluating Micro-Actions in Basketball | Tracking → running EPV stream via terminal-action probabilities; well-calibrated; values off-ball actions | Tracking metrics |
| 1806.01930v1 | On Elo based prediction models for the FIFA World Cup 2018 | Poisson regression with Elo + team attack/defense effects; Monte Carlo; ordinal score functions + RPS validation | Engine ratings |
| 1803.02940v1 | The Advantage of Doubling (deep RL, NBA) | Deep RL on 643k possessions of trajectory data; defensive policy values predict PPP and win% | Tracking metrics |
| 1704.00197v3 | iWinRNFL: In-Game Win Probability for NFL | Logistic regression, 10 variables, 7 NFL seasons; 75% winner accuracy; well-calibrated | Engine ratings (live WP) |
| 1608.03793v2 | Applying Deep Learning to Basketball Trajectories | RNN on raw sequential positions beats static feature-rich ML on 20k SportVu threes | Tracking metrics (method lesson) |
| 1512.07208v3 | Statistics-Free Sports Prediction | Logistically-weighted regularized least squares on schedule+scores only; basketball subsumed by scores, football needs more | Engine ratings (baseline) |
| 1405.0231v3 | Spatial structure of defensive skill (NBA) | Spatial/spatio-temporal processes + matrix factorization + hierarchical regression on tracking data | QB & props (defense) |
| 1208.0799v2 | Competing Process Hazard Models for NHL Player Ratings | Semi-Markov hazard processes per team; Bayesian hierarchical shrinkage + penalized MLE | QB & props (player ratings) |
| 1111.0693v1 | Scoring Strategies for the Underdog | Analytical mean–variance tradeoff for underdog strategy; NFL run/pass/Hail Mary examples | Engine ratings (strategy) |
| 1011.1941v1 | Optimization-Based Framework for Automated Market-Making | Convex-potential market design over arbitrary security spaces; reachable prices = convex hull of payoffs | Market/odds (theory) |

## Novelty notes (most surprising / contrarian findings in this batch)

- **Model and feature choice barely matter for match prediction** (2408.08331v1): across 5 leagues, NN vs. random forest vs. Poisson with different feature sets — "only a minor influence on prediction quality." If true for NFL too, the engine-benchmark war is fought on calibration, markets, and props, not model architecture.
- **No time decay needed within a season** (same paper): team strength doesn't change systematically during a season, so equal-weighting all past games works. Directly contradicts the recency-weighting instinct — test on NFL.
- **Simple ML beats bookmaker odds on tennis** (1910.03203v1): 80%+ accuracy with random forests, and the combined models nearly recreate the bookmaker-implied distribution — i.e., books use similar info, but a simple model still edges them.
- **Lineups don't improve football score prediction; goalkeeper stats matter most** (2210.06327v3): counterintuitive feature-importance result plus a claimed 42% betting return.
- **Fourth-down "optimal" decisions are far less certain than TV graphics claim** (2311.03490v6): bootstrap the WP model and the confident go-for-it recommendations dissolve into wide uncertainty bands.
- **Elimination tournaments systematically destroy hierarchy information** (2508.19848v1): knockout brackets produce flatter networks and more rock-paper-scissors cycles than round-robins — relevant to how much signal March Madness / playoff results actually carry.
- **Oddsmaker bias is exploitable signal, not just a benchmark** (1710.06551v2): the spread's human/algorithmic biases can be modeled and traded against for NFL games.
- **A 27K-parameter correction layer beats rebuilding the model** (2609.04754v1): state-conditioned calibration on top of a legacy method cut bias 31% — the "don't rebuild, recalibrate" pattern.
- **Calibration without boldness is a trap** (2305.03780v3): perfectly calibrated but timid probabilities are useless; relaxing calibration probability 0.99→0.95 widened hockey forecasts from .26–.78 to .10–.91.
- **Energy-based probabilities beat odds-derived ones under Kelly** (2505.21543v1): the strangest method in the batch, and it claims five seasons of outperformance. Costs an afternoon to falsify.

## Public datasets / code releases mentioned in abstracts

- **2609.04754v1** — DLS-Cal: code, models, and data released (cricket calibration; 8,150 matches).
- **2512.08591v1** — Novel multi-season NBA dataset, 2004-05 to 2024-25 (longitudinal game outcomes).
- **2511.12606v3** — SoccerNet-GAR: 64 World Cup 2022 matches, 87,939 annotated group activities, broadcast video + tracking synchronized.
- **2504.15072v1** — VISTA: 159 trending topics, 47,207 posts, 327k+ comments, sentiment-labeled (opinion dynamics; Hawkes-Graph paper).
- **2503.18282v2** — TrackID3x3: 3x3 basketball multi-player tracking + identification + pose dataset (indoor/outdoor/drone) with baseline algorithm.
- **2502.02785v2** — OpenSTARLab: full open-source framework (preprocessing, event modeling, RL) for spatio-temporal agent data.
- **2410.07401v1** — Soccer camera-calibration code: github.com/NikolasEnt/soccernet-calibration-sportlight (tracking infrastructure).
- **2401.06086v1** — Bristol Betting Exchange + XGBoost integration, open-source on GitHub (agent-based betting exchange simulator).
- **2310.11459v1** — GlickoSoccer: github.com/andreyshelopugin/GlickoSoccer (modified Glicko-2 for soccer leagues).
- **2209.07274v5** — Grid WAR Shiny app + data: gridwar.xyz (every MLB game since 1952, career/season/game level).
- **2104.12574v1** — COCO+Torso dataset + code + pretrained models: github.com/foreverYoungGitHub/detect-and-match-related-objects.
- **2009.05224v2** — HAA500: 500-class human atomic-action video dataset, 591K labeled frames.
- **2608.10045v1** — BoRa_EM: code + data for worker-reliability-aware pairwise comparison learning (score-1 paper, but the code is public).

---
*Screening method: every abstract read individually; no full papers fetched; no equations invented — math reported only as stated in abstracts. Score-1/0 papers omitted from detail above but counted. See batch_1.jsonl for full records.*
