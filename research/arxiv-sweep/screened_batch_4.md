# arXiv sweep — Batch 4 screening (GSE sports-prediction)

Screened: 2026-09-21. 142 papers, abstracts only (no full-paper reads, no web browsing).
Scoring: 0 = irrelevant | 1 = tangential/transferable-but-off-domain | 2 = directly relevant | 3 = HIGH VALUE (novel method, new math, public data/code, contrarian result, or something GSE likely doesn't do yet).

## 1. Counts

- Total: 142
- Score 3 (high value): 16
- Score 2 (directly relevant): 49
- Score 1 (tangential): 42
- Score 0 (irrelevant): 35

Notable: this batch is unusually rich in betting-market, calibration, and rating-method papers. Several claim to beat markets or beat incumbent methods with numbers.

---

## 2. Score-3 papers (full detail)

### 2.1 Regularization in Paired Comparison Models via Pseudo-Games and Phantom Players
- **arXiv:** 2606.03805v1 — https://arxiv.org/abs/2606.03805v1 — Mark E. Glickman — 2026
- **Method:** Two data-augmentation views of regularization for Bradley-Terry / Thurstone-Mosteller paired-comparison models. (1) Add *fractional pseudo-games* between every pair of competitors. (2) Add a *fixed-strength phantom player* and give each real competitor a weighted pseudo-win and pseudo-loss against it. Both yield finite, shrunken estimates; the phantom-player construction additionally resolves the usual location nonidentifiability without an explicit linear constraint. For Bradley-Terry, the augmentations produce transparent penalty functions directly comparable to ridge penalties. Demo on the 2025 MLB regular season: tuned pseudo-game and phantom-player regularization "can closely reproduce ridge-regularized strength estimates while retaining an intuitive augmented-data representation."
- **Results:** matches ridge-regularized BT strength estimates with an intuitive augmented-data interpretation.
- **GSE component:** engine ratings.
- **Why high value:** An implementable, interpretable regularization for BT/Elo-type ratings — pseudo-observations can be added straight into the likelihood with no new optimizer. GSE's rating layers can adopt the phantom-player trick today as a prior.

### 2.2 Forecast Sports Outcomes under Efficient Market Hypothesis: Odds-Only and GLM methods
- **arXiv:** 2604.17194v1 — https://arxiv.org/abs/2604.17194v1 — Kaito Goto, Naoya Takeishi, Takehisa Yairi — 2026
- **Method:** (1) **OO-EPC (Odds-Only-Equal-Profitability-Confidence):** converts betting odds to probabilities with no historical data, aligned with the bookmakers' pricing objective of "equal confidence in profitability for each outcome" — correcting biases the authors found in a 90,014-match, five-bookmaker football odds dataset. (2) **FL-GLM (Favourite-Longshot-Bias-Adjusted GLM):** uses historical data but fits *just one parameter* to capture the favourite-longshot bias — a deliberately minimal, interpretable alternative to multinomial/logistic GLMs. OO-EPC was also stress-tested live across six iterations of an annual basketball outcome forecasting competition.
- **Results:** OO-EPC beats existing odds-only converters (Multiplicative, Shin, Power) for the majority of bookmakers; FL-GLM beats existing multinomial and logistic GLMs for *all* bookmakers in the dataset.
- **GSE component:** market/odds modeling.
- **Why high value:** A concrete, testable challenger to Shin/Power normalization for GSE's market-implied probabilities — and a one-parameter favourite-longshot correction. Implement both, backtest against Shin on NFL odds, compare log-loss.

### 2.3 The Counterfactual Combine: A Causal Framework for Player Evaluation
- **arXiv:** 2602.23233v1 — https://arxiv.org/abs/2602.23233v1 — Herbert P. Susmann, Antonio D'Alessandro — 2026
- **Method:** Recasts player evaluation as a causal inference problem (imported from healthcare provider profiling). Using *stochastic interventions*, it compares a player's observed success rate on repeated tasks (field-goal attempts, plate appearances) against the *counterfactual* success rate had those same attempts been randomly reassigned to players per prespecified reference distributions. Covers direct/indirect standardization estimands plus a new **"performance above random replacement"** estimand designed for sports interpretability. Estimation via doubly robust estimators and Targeted Minimum Loss-based Estimation (TMLE) with machine learning for the nuisance relationships. Case studies: NFL field-goal kickers and MLB batters.
- **Results:** different causal estimands yield distinct interpretations of the same players' performance.
- **GSE component:** QB & props / player ratings.
- **Why high value:** Causal player evaluation is something GSE likely doesn't do — it adjusts performance for *attempt difficulty* (who attempted what, under what conditions) rather than raw rates. "Performance above random replacement" is a directly usable replacement-level stat for props and DFS ownership.

### 2.4 The Blown Lead Paradox: A Pathwise Calibration Benchmark for Win Probability Forecasts
- **arXiv:** 2601.18774v4 — https://arxiv.org/abs/2601.18774v4 — Jonathan Pipping-Gamón, Abraham J. Wyner — 2026
- **Method:** Targets the familiar stat "highest win probability attained by the team that eventually lost" — a selected pathwise extreme. Under ideal sequential calibration, derives an *exact continuous-path benchmark* for this statistic, a conservative bound for discretely reported paths, and a probability-integral-transform (PIT) diagnostic for collections of games. Applied separately to public regular-season NFL and NBA win-probability feeds from 2018–2024, using a season-stratified dyadic bootstrap for recurring teams.
- **Results:** **no global departure detected in the NFL**; the NBA shows a systematic excess of extreme losing-team peaks (upper-5% tail excess 1.3%, 95% CI 0.4–2.3%); first crossings of a published 0.95 show the same positive observed-vs-implied loss-rate gap.
- **GSE component:** calibration.
- **Why high value:** A ready-made diagnostic GSE can run on its own live win-probability feed and on competitors' feeds — it asks whether severe losing paths occur as often as a calibrated sequential model should, which fixed-time calibration summaries miss.

### 2.5 Exploring the Difficulty of Estimating Win Probability: A Simulation Study
- **arXiv:** 2406.16171v5 — https://arxiv.org/abs/2406.16171v5 — Ryan S. Brill, Ronald Yurko, Abraham J. Wyner — 2024
- **Method:** Builds a simplified random-walk version of football in which the *true* win probability at each game state is known, then fits standard ML win-probability estimators to noisy, correlated observational data and measures recovery.
- **Results:** "the dependence structure of observational play-by-play data substantially inflates the bias and variance of estimators and lowers the effective sample size"; to get approximately valid marginal coverage, "win probability confidence intervals need to be substantially wide." The finding generalizes: many sports datasets are clustered into groups of observations sharing the same outcome.
- **GSE component:** calibration / engine ratings.
- **Why high value:** Contrarian and directly actionable — GSE's play-by-play sample sizes are far smaller than they look. Argues for wider reported CIs on win probabilities and heavier shrinkage in play-level models. Test: replicate the random-walk-football simulation against GSE's own WP estimator.

### 2.6 Sports Betting: neural networks + modern portfolio theory on the EPL
- **arXiv:** 2307.13807v1 — https://arxiv.org/abs/2307.13807v1 — Vélez Jiménez, Lecuanda Ontiveros, Possani — 2023
- **Method:** Combines Von Neumann-Morgenstern expected utility theory, deep neural networks for match-outcome forecasting, and "advanced formulations of the Kelly Criterion" with portfolio optimization for bet sizing. Evaluates complete and restricted strategies with risk management and diversification.
- **Results:** **135.8% profit relative to initial wealth during the latter half of the 20/21 EPL season.**
- **GSE component:** market/odds modeling + bankroll sizing.
- **Why high value:** Claims market-beating returns; the Kelly + portfolio-theory sizing layer is directly relevant to GSE's staking engine. **Caveat:** single half-season — high overfit risk. Replicate the sizing framework on NFL odds before trusting the headline number.

### 2.7 Leapfrog Diffusion Model for Stochastic Trajectory Prediction (LED)
- **arXiv:** 2303.10895v1 — https://arxiv.org/abs/2303.10895v1 — Weibo Mao, Chenxin Xu, Qi Zhu, Siheng Chen, Yanfeng Wang — 2023
- **Method:** Diffusion-based stochastic trajectory prediction with a **trainable leapfrog initializer** that directly learns an expressive multi-modal distribution of future trajectories, skipping a large number of denoising steps; the initializer is trained to allocate *correlated samples* to produce diverse predicted trajectories.
- **Results:** **23.7%/21.9% ADE/FDE improvement on NFL** trajectory data; inference speedups of 19.3×/30.8×/24.3×/25.1× vs standard diffusion on NBA/NFL/SDD/ETH-UCY. **Code: https://github.com/MediaBrain-SJTU/LED**
- **GSE component:** tracking metrics / new capability.
- **Why high value:** Diffusion models applied to *NFL* tracking data with public code and large reported gains — directly feeds GSE's Next Gen Stats benchmarking lane (route/trajectory modeling, completion-probability surfaces).

### 2.8 Inferring Player Location from Limited Observations (LSTM + GNN imputation)
- **arXiv:** 2302.06569v1 — https://arxiv.org/abs/2302.06569v1 — Gregory Everett, Ryan J. Beal, Tim Matthews, Joseph Early, Timothy J. Norman, Sarvapali D. Ramchurn — 2023
- **Method:** LSTM + Graph Neural Network components learn temporal and inter-agent patterns to impute the location of *all* agents at every timestep from non-uniform observations with **~95% missing values**. Applied to soccer: imputes all player locations from sparse event data (shots, passes) alone.
- **Results:** player locations estimated to within **~6.9 m; ~62% error reduction** vs the best baseline. Unlocks downstream tasks — physical metrics, player coverage, pitch control — that normally require expensive optical tracking data "only available to elite clubs."
- **GSE component:** tracking metrics / new capability.
- **Why high value:** If player positions can be imputed from event data, GSE could approximate NGS-style spatial metrics (coverage, separation, pitch control) from play-by-play alone, without tracking feeds. Directly testable: train on any available NFL tracking sample, evaluate imputation error.

### 2.9 Graph Neural Networks to Predict Sports Outcomes
- **arXiv:** 2207.14124v1 — https://arxiv.org/abs/2207.14124v1 — Peter Xenopoulos, Claudio Silva — 2022
- **Method:** A **sport-agnostic graph-based representation of game states** (permutation-invariant, with flexible player-interaction weights) fed into GNNs to predict outcomes — avoiding the usual lossy aggregations (distance-to-ball anchors, role assignments).
- **Results:** statistically significant improvements over state of the art on **American football** and esports: **9% and 20% test-set loss reductions**, respectively. The model also supports "what if" counterfactual queries and visualization of player relationships.
- **GSE component:** engine ratings / new capability.
- **Why high value:** GNNs on American football with significant gains and a counterfactual ("what if") capability — a new modeling paradigm for GSE's play-level engine, plus built-in matchup analysis.

### 2.10 Markov Cricket: Forward and Inverse RL for Game Modeling
- **arXiv:** 2103.04349v1 — https://arxiv.org/abs/2103.04349v1 — Manohar Vohra, George S. D. Gordon — 2021
- **Method:** Models the game as a Markov process with three tools: (1) Monte-Carlo learning fitting a **nonlinear approximation of the state value function** with a score-based reward — used as a proxy for remaining scoring resources; (2) **inverse RL** (a guided-cost-learning variant) inferring a linear reward model from winning teams' play sequences, yielding an explicit optimal policy per state; (3) a game simulator sampling the posterior of final scores under different policies.
- **Results:** the learned value function as a resource proxy **outperforms the Duckworth-Lewis-Stern method by 3 to 10 fold**; inferred optimal policies agree with expert intuition.
- **GSE component:** engine ratings / live win probability / new capability.
- **Why high value:** The state-value-function + inverse-RL pattern transfers to NFL (down/distance/field-position value surfaces; inferring implicit coaching objectives from play-calling). Beating an established resource model 3–10× is the kind of result worth replicating in football.

### 2.11 Evaluating real-time probabilistic forecasts (calibration surface plots)
- **arXiv:** 2010.00781v1 — https://arxiv.org/abs/2010.00781v1 — Chi-Kuang Yeh, Gregory Rice, Joel A. Dubin — 2020
- **Method:** New tools for continuously-updated probabilistic forecasts: **calibration surface plots** (with simple graphical summaries) to judge at a glance whether a live probability feed is well-calibrated, plus statistical tests and graphical tools for the relative skill of two competing live forecasters. Validated on Monte Carlo simulated basketball games, then applied to ESPN's published NBA home-team win probabilities.
- **Results:** ESPN's forecasts are well-calibrated and beat naïve models — but **do not demonstrate significantly improved skill over simple logistic regression on team relative strength + evolving score difference.**
- **GSE component:** calibration.
- **Why high value:** Two gifts in one: (a) calibration surface plots, a diagnostic GSE can implement for its live WP feed; (b) a humbling contrarian result — GSE should benchmark its live model against "logistic regression on strength + score diff" as the null to beat.

### 2.12 Predicting play calls in the NFL using hidden Markov models
- **arXiv:** 2003.10791v1 — https://arxiv.org/abs/2003.10791v1 — Marius Ötting — 2020
- **Method:** Hidden Markov models on a 289,191-observation NFL play-by-play dataset (Kaggle) to predict play calls (run/pass etc.).
- **Results:** **71.5% out-of-sample accuracy for the 2018 NFL season**, "substantially higher compared to similar studies."
- **GSE component:** engine ratings / new capability (play-call prediction).
- **Why high value:** NFL-specific, concrete accuracy benchmark, latent-state approach GSE may not use. Run/pass tendency prediction feeds directly into EPA-based matchup models and prop pricing (e.g., rush-attempt props).

### 2.13 Beating the House: Identifying Inefficiencies in Sports Betting Markets
- **arXiv:** 1910.08858v1 — https://arxiv.org/abs/1910.08858v1 — Sathya Ramesh, Ragib Mostofa, Marco Bornstein, John Dobelman — 2019
- **Method:** Collects a "novel dataset of bets," builds a **non-parametric win probability model** to find positive-expected-value situations, and runs a betting strategy across **NFL, NBA, NCAAF, NCAAB, and WNBA** markets.
- **Results:** claims the algorithm "generates above market returns" in all five markets.
- **GSE component:** market/odds modeling.
- **Why high value:** Explicitly claims to beat NFL and NCAAF betting markets — must be flagged per sweep criteria. **Caveat:** reads as an undergraduate project; verify methodology (sample size, transaction costs, out-of-sample discipline) before taking the claim seriously.

### 2.14 Neural Relational Inference for Interacting Systems (NRI)
- **arXiv:** 1802.04687v2 — https://arxiv.org/abs/1802.04687v2 — Thomas Kipf, Ethan Fetaya, Kuan-Chieh Wang, Max Welling, Richard Zemel — 2018
- **Method:** Unsupervised VAE in which the **latent code is the underlying interaction graph** and reconstruction is done by GNNs — simultaneously learning interaction structure and dynamics from observational data alone. Recovers ground-truth interactions on simulated physical systems; on real motion-capture and **sports tracking data** finds interpretable structure and predicts complex dynamics.
- **Results:** accurate unsupervised recovery of interaction graphs; interpretable structure + dynamics prediction on sports tracking data.
- **GSE component:** tracking metrics / new capability.
- **Why high value:** Unsupervised discovery of *who interacts with whom* from tracking data — e.g., which rusher keys off which blocker, coverage interaction structure. A genuinely new capability for the NGS-benchmark lane that GSE doesn't currently have.

### 2.15 Scoring dynamics across professional team sports: tempo, balance, predictability
- **arXiv:** 1310.4461v2 — https://arxiv.org/abs/1310.4461v2 — Sears Merritt, Aaron Clauset — 2013
- **Method:** Scoring **tempo** (when events occur) follows a common **Poisson process** with sport-specific rate; scoring **balance** (which team wins an event) follows a common **Bernoulli process** with a parameter that varies with lead size. Combined into a generative model of gameplay. Data: nearly a dozen seasons of scoring events across college football, NFL, NHL, NBA.
- **Results:** the combined model reproduces observed dynamics in all four sports and "accurately predicts game outcomes."
- **GSE component:** engine ratings / simulation.
- **Why high value:** A compact, implementable generative scoring model with NFL data behind it — the lead-dependent balance parameter is a concrete in-game dynamic GSE's simulator can adopt and test.

### 2.16 The ranking lasso and its application to sport tournaments
- **arXiv:** 1301.2954v1 — https://arxiv.org/abs/1301.2954v1 — Guido Masarotto, Cristiano Varin — 2013
- **Method:** Fits paired-comparison models (Bradley-Terry) with a **lasso-type penalty that forces contestants with similar abilities into the same group** — automatic tiering. Applied to the NFL 2010–11 season and college hockey; detailed discussion of numerical aspects.
- **Results:** easier interpretation of rankings and **"a significant improvement of the quality of predictions"** vs standard MLE fitting.
- **GSE component:** engine ratings.
- **Why high value:** Lasso-grouped ratings = automatic team/player tiering with a claimed prediction improvement on NFL data. Directly testable against GSE's current rating regularization (ridge) — run both, compare log-loss.

---
## 3. Score-2 papers (compact)

| arXiv id | Title | One-line method | GSE component |
|---|---|---|---|
| 2609.12468v1 | Gibbs Sampling for Bayesian Generalized Poisson Matrix Factorization | Bayesian GPMF w/ Gibbs sampler, credible intervals; applied to football event data | tracking metrics / player ratings |
| 2609.08060v1 | Pre-game paired-comparison modeling of professional League of Legends map outcomes | EWMA + ridge-shrunk Bradley-Terry logistic, walk-forward slope 0.995; Diebold-Mariano vs Polymarket | engine ratings / market modeling |
| 2609.06610v1 | Statistical and ML framework for quantifying offensive impact in professional box lacrosse | xG via logistic/RF/ERT, leave-one-game-out CV; expected assists; Expected Pick Value (exploratory) | QB & props (xG analog) |
| 2608.14377v1 | A Survey of Large Models in Sports | Survey of LLM sports tasks + datasets/benchmarks; GitHub repo maintained | data pipeline (reference) |
| 2608.09887v1 | Space-Creating versus Dead Possession: off-ball possession-quality index | Junk-possession flag (expected-threat grid) + Space-Creation Index from broadcast video; adds info beyond VAEP (p<0.0001) | tracking metrics (method analog) |
| 2608.07168v1 | Bayesian bivariate conditional Poisson regression for goal dependence in EPL | BCP regression capturing home/away goal dependence (negative correlation found) | market modeling (score models) |
| 2607.19783v2 | Do in-match hydration breaks alter match momentum? 2026 World Cup | Within-match case-crossover; break effect +1.6 momentum pts per 100 Elo advantage for stronger side | calibration (causal inference) |
| 2607.11432v1 | Pitwall: calibrated real-time Monte Carlo engine for F1 briefings | Vectorized MC (N=2000/lap) calibrated on 126 races; held-out Brier 0.0745; "calibration-optimal is not decision-optimal" | calibration / simulation |
| 2605.29395v2 | Low Rank for Rank: uncertainty-aware LLM ranking under sparse comparisons | Low-rank task×model matrix, debiased estimators, valid CIs for ranks under sparsity | engine ratings (uncertainty) |
| 2605.31529v2 | SVI-Bench: dynamic microworld for strategic video intelligence | 35K hrs video, 15M actions, 15K hrs commentary, 23K reports, 103K stat records (basketball/soccer/hockey) | data pipeline (dataset) |
| 2603.04999v1 | AI Driven Soccer Analysis Using Computer Vision | YOLO/Faster R-CNN + SAM2 + homography to field coordinates; speed/distance/heatmaps | tracking metrics (pipeline analog) |
| 2602.16137v2 | Experimental assortments for choice estimation and nest identification | O(log n) assortment design; data-driven nest identification for Nested Logit; deployed at Dream11 (70M users) | DFS optimizer (contest choice) |
| 2602.11492v1 | Data-driven modelling of low-dimensional dynamics of baseball pitching | Neural ODEs: ~50% of late-motion variance from first ~8% of sequence (R²>0.45) | tracking metrics (state-space) |
| 2512.18013v1 | Empirical parameterization of the Elo Rating System | Data-driven tuning of Elo parameters by maximizing predictive accuracy; extends to multiplayer | engine ratings |
| 2512.01075v1 | Commanding the Foul Shot: a new ensemble of free throw metrics | "Command" metric (accuracy+precision near bullseye) predicts late-season success better than FG%; launch-consistency physics model; 21,964 attempts | QB & props (skill metrics) |
| 2511.19629v2 | Darts Analysis | Score-dependent Massey model beats null/logistic/simulations on Brier + head-to-head betting game | engine ratings |
| 2511.14537v1 | Assessing win strength in MLB win prediction models | Win prob ↔ score differential relationship; positive run-line betting returns with proper strategy, naive ML betting loses | market modeling |
| 2508.15299v1 | BasketLiDAR: first LiDAR-camera multimodal dataset for basketball MOT | 4,445 frames, 3,105 player IDs, 3 LiDAR + 3 cameras; real-time 3D tracking | tracking metrics (data modality) |
| 2508.11569v1 | TrajSV: trajectory-based model for sports video representations | Trajectory-enhanced Transformer (CRNet+VRNet), triple contrastive loss, unsupervised; SOTA on retrieval/action spotting | tracking metrics (pipeline) |
| 2508.02725v1 | Forecasting NCAA basketball with LSTM vs Transformer | Transformer+BCE best AUC (0.8473); LSTM+Brier best calibration (Brier 0.1589) — loss function drives calibration | engine ratings / calibration |
| 2505.05120v1 | Simulating MLB seasons using Bayesian inference and random walks | Bayesian posterior per matchup, Bernoulli simulation; random-walk batting avg, Kalman-filter ERA forecasts | simulation / engine |
| 2504.09759v1 | Enhancing classifier evaluation: IRT + Glicko-2 | IRT ability + Glicko-2 rating/deviation/volatility via simulated classifier tournaments | data pipeline (model eval) |
| 2504.08747v1 | GridMind: multi-agent NLP framework for unified NFL data insights | Multi-agent RAG + LLMs for natural-language querying of multimodal NFL data | data pipeline (interface) |
| 2502.21242v1 | Long-term player tracking with graph hierarchies (SportsSUSHI) | Hierarchical graphs + jersey number/team ID/field coords; hockey dataset + code released | tracking metrics (pipeline) |
| 2501.17711v3 | STGCN-LSTM for Olympic medal prediction | STGCN + LSTM + Zero-Inflated Compound Poisson separating random vs structural zeros | engine ratings (count models) |
| 2409.13098v1 | Predicting soccer matches with complex networks and ML | Passing-network metrics + match stats fused in ML; half-level networks beat full-game networks | engine ratings (network features) |
| 2406.16171v5 | Speed-accuracy tradeoff in cricket (power-law) | Run rate vs dismissal probability follow power law; exponent as player-archetype measure | QB & props (risk/reward) |
| 2402.01914v1 | Predicting batting averages in specific matchups via Generalized Linked MF | Alternating-GLM dimension reduction across 3 linked data sources for binomial matchup data | QB & props (matchup models) |
| 2401.06412v1 | Whole-body inter-personal dynamics via neural Granger causality | NGC (first-layer weight magnitudes) on pitcher-batter joint velocities; batter→pitcher causality correlates with performance | tracking metrics (causal) |
| 2308.11142v1 | Graph encoding + GNNs for volleyball analytics | Contact-by-contact graph encoding; GNNs for rally outcome, set location, hit type | engine ratings (GNN) |
| 2211.04459v3 | flexBART: flexible Bayesian regression trees | BART assigning multiple categorical levels per split; spatial contiguity prior; baseball-motivated; package released | engine ratings (modeling) |
| 2209.06999v1 | Data science approach to winning Dream11 fantasy cricket team | Player performance regression + greedy/knapsack 11-player selection | DFS optimizer |
| 2205.07193v2 | Home field advantage in soccer: causal inference approach (EPL) | Hierarchical causal model; HFA lives more in offensive than defensive/referee stats; weaker teams keep more HFA | engine ratings (HFA) |
| 2107.07561v1 | Multivariate Conway-Maxwell-Poisson (Sarmanov) with doubly-intractable Bayes | MultCOMP w/ flexible covariance (±), exchange algorithm; COVID empty stadiums → reduced home scoring | market modeling (score models) |
| 2106.05799v1 | Hybrid ML forecasts for UEFA EURO 2020 | Ranking methods + bookmaker consensus + plus-minus player ratings + RF; tournament simulation | engine ratings / simulation |
| 2011.11178v1 | Bayesian nonparametric point processes for NBA shot locations | Dirichlet process + Markov random field intensity surfaces; beats competitors | tracking metrics (spatial) |
| 2007.14870v2 | Decoding machine learning benchmarks (decodIRT) | IRT + Glicko-2 on OpenML-CC18; 84% of datasets mostly easy instances; decodIRT tool | data pipeline (model eval) |
| 2005.12661v2 | DAG-Net: double attentive GNN for trajectory forecasting | Goal-conditioned + interaction attention GNN; SOTA incl. sports applications | tracking metrics |
| 2105.12196v1 | Prediction and evaluation in college hockey via Bradley-Terry-Zermelo | Bayesian BT w/ MAP + Gaussian approx + importance sampling; Bayes-factor model evaluation | engine ratings |
| 1908.08991v2 | Football is becoming more predictable (88k matches, 11 leagues) | Network-science predictability trend; rising inequality; home-field advantage vanishing ubiquitously | market modeling |
| 1906.05029v2 | Bayesian in-game win probability in soccer | Bayesian running win/tie/loss probabilities from contextual game-state features; well-calibrated on 8 seasons | calibration |
| 1806.06696v1 | SMOGS: social network metrics of game success | Passing as dynamic relational network + multiplicative latent factors; MCMC; college basketball tracking | engine ratings (network) |
| 1712.05879v1 | Hierarchical Bayesian Bradley-Terry for MLB | Hierarchical Bayes BT beats MLE analogues for ranking and prediction | engine ratings |
| 1708.02715v1 | Order flows and limit order book resiliency (meso-scale) | Nonlinear trade-imbalance→price link linearized by weighted order flows; limit flows most predictive; deep book shape matters | market modeling (microstructure analog) |
| 1604.05090v1 | Footballonomics: 7 years of NFL data | Rejects rational coaching (PAT/4th down); logistic regression on turnovers/time of possession etc.; ~63% accuracy, beats experts 60% | engine ratings |
| 1510.02172v2 | Hockey player performance via regularized logistic regression | Joint regularized logistic model for on-ice goal probability; partial player effects | QB & props (player effects) |
| 1406.3402v2 | Relieving and Readjusting Pythagoras | Linear combination of Weibulls for run distributions; ~25% better win% prediction (~4 games → ~3 games error) | engine ratings |
| 1201.0317v2 | Adjusted Plus-Minus for NHL via ridge regression | Ridge APM with goals/shots/Fenwick/Corsi; 10× data from shot-based metrics shrinks error bounds | QB & props (APM analog) |
| 1011.1996v1 | Hierarchical Bayesian modeling of hitting performance in baseball | Mixture-shrinkage across time/players balancing past performance with age/position; beats sabermetric methods on held-out season | QB & props (shrinkage) |

## 4. Novelty notes (most surprising / contrarian)

1. **ESPN's live NBA win probabilities are no better than logistic regression on team strength + score difference** (2010.00781v1). A humbling null benchmark every GSE live model should be tested against — complexity must earn its keep.
2. **NFL public win-probability feeds pass a pathwise calibration test; NBA feeds are systematically overconfident** (2601.18774v4). Same methodology, different leagues — miscalibration is league-specific, not model-universal.
3. **Play-by-play data massively overstates its own sample size.** Correlated, outcome-clustered observations inflate bias/variance and shrink effective N; WP confidence intervals need to be "substantially wide" (2406.16171v5). Argues for heavier shrinkage across GSE's play-level models.
4. **Shin/Power odds conversion is beaten** — OO-EPC (no history needed) and a *one-parameter* favourite-longshot GLM beat incumbents on 90k matches across five bookmakers (2604.17194v1). GSE's market-implied probabilities should be re-derived and backtested.
5. **Inverse-RL state value functions beat Duckworth-Lewis-Stern 3–10×** as a proxy for remaining scoring resources (2103.04349v1). The forward/inverse RL pattern ports to NFL game-state valuation.
6. **Two interpretable regularizations for ratings**: phantom-player/pseudo-game augmentation reproduces ridge BT estimates (2606.03805v1); the ranking lasso auto-tiers teams and *improves* NFL predictions vs MLE (1301.2954v1). GSE should race ridge vs lasso vs phantom-player on its own ratings.
7. **Player locations imputed from event data alone** (~95% missing) to 6.9 m with 62% error reduction (2302.06569v1) — a path to NGS-style spatial metrics (coverage, pitch control) without tracking hardware.
8. **NRI discovers latent player-interaction graphs unsupervised** from sports tracking data (1802.04687v2) — e.g., which rusher keys off which blocker. A genuinely new analytic capability.
9. **Sterile possession is separable from space-creating possession** — a junk-possession flag adds information beyond VAEP/xG (p<0.0001) in World Cup data (2608.09887v1). The analog for NFL: separating "empty" completions/yards from structure-moving plays.
10. **Academic sports-ML claims often don't reproduce**: a cricket shot-classification baseline study found published 96–99% accuracies re-implemented at 46–58% (2510.09187v1). Treat every "beats the market" claim in this batch (2.6, 2.13) with out-of-sample discipline.
11. **Football is getting more predictable; home-field advantage is vanishing ubiquitously** across 88k matches in 11 leagues (1908.08991v2) — and COVID empty stadiums specifically reduced *home* scoring (2107.07561v1). Market efficiency is a moving target.
12. **Calibration-optimal is not decision-optimal** (2607.11432v1, Pitwall). GSE should track calibration and decision quality as separate objectives, gated separately.

## 5. Public datasets & code releases mentioned in abstracts

- **LED (Leapfrog Diffusion) code** — https://github.com/MediaBrain-SJTU/LED — NFL trajectory prediction (2303.10895v1)
- **SportsSUSHI** — dataset + code — https://github.com/mkoshkina/sports-SUSHI — long-term hockey player tracking w/ jersey numbers, team IDs (2502.21242v1)
- **BasketLiDAR** — first LiDAR+camera basketball MOT dataset (4,445 frames, 3,105 IDs) — available on request: https://sites.google.com/keio.jp/keio-csg/projects/basket-lidar (2508.15299v1)
- **SVI-Bench corpus** — ~35K hrs broadcast video, 15M annotated actions, 15K hrs commentary, 23K game reports, 103K stat records across basketball/soccer/hockey (2605.31529v2)
- **ShuttleSet** — largest public badminton stroke-level dataset: 104 sets, 3,685 rallies, 36,492 strokes, 18 shot classes + player locations (2303.17707v4)
- **eSkiTB** — synthetic event-based ski tracking dataset + code — https://github.com/eventbasedvision/eSkiTB (2601.06647v1)
- **Easy2Hard-Bench** — difficulty-labeled datasets (IRT/Glicko-2) — https://huggingface.co/datasets/furonghuang-lab/Easy2Hard-Bench (2409.18433v2)
- **flexBART** — R package for Bayesian regression trees w/ categorical predictors (2211.04459v3)
- **decodIRT** — IRT+Glicko-2 benchmark evaluation tool (2007.14870v2)
- **Ball 3D localization code** — https://github.com/gabriel-vanzandycke/deepsport (2204.00003v3)
- **Awesome Large Models in Sports** — survey repo w/ datasets & benchmarks list — https://github.com/Road2Redemption/Awesome_Large_Models_In_Sports1 (2608.14377v1)
- **Sports VR/multimodal competition dataset + code** — "will be released soon" (2405.01112v1)
- **Awesome Constraint Inference in RL** (survey paper list) — https://github.com/Jasonxu1225/Awesome-Constraint-Inference-in-RL (2409.07569v3)

---
*End of batch 4 screening. 142/142 abstracts read. No web browsing or full-paper reads performed.*
