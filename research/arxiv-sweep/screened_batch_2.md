# arXiv Sweep — Batch 2 Screening Report (142 papers)

Scored from abstracts only (2026-09-21). Score rubric: 0 = irrelevant to sports prediction; 1 = tangentially relevant/transferable method; 2 = directly relevant to GSE; 3 = HIGH VALUE (novel method, new math, public dataset/code, result challenging conventional approaches, or flagged GSE keyword: conformal prediction, diffusion models, optimal transport, TDA, causal inference, Hawkes processes, state-space models, market microstructure, information theory, advanced game theory, beating Vegas lines).

## Counts

- Total: 142
- Score 0: 51
- Score 1: 55
- Score 2: 28
- Score 3: 8

---

## SCORE 3 — HIGH VALUE (full detail)

### 1. Prices, Probabilities, and Parlays: Systematic Bias in Sports Prediction Markets
- **arXiv:** 2607.14430v1 — https://arxiv.org/abs/2607.14430v1
- **Authors:** Niusha Moshrefi
- **Year:** 2026
- **Method summary:** Uses 23 million moneyline trades on Kalshi across major US sport leagues to test whether prediction-market prices can be read as probabilities. Two systematic deviations documented: (a) calibration is time-dependent — fitting calibration models within time-to-expiry (TTE) buckets shows parameters sit at their perfect-calibration reference values mid-contract but depart sharply near expiry; in the final 10 minutes the empirical calibration curve becomes step-like and fits a Prelec weighting form with curvature parameter well above one (the opposite sign of the canonical lottery-choice fit), interpreted as insurance-demand behavior by traders holding losing positions; (b) cross-game parlays are systematically overpriced relative to the product of their contemporaneous leg prices, with the overpricing growing in leg count — and this holds even when parlay legs are drawn from the TTE regime where leg-level calibration is essentially perfect, i.e., a separate market-level markup at the parlay-pricing stage. Both deviations are systematic and "admit computational correction"; practical use of market prices as probabilities requires conditioning on time-to-expiry and product type, not price alone.
- **Claimed results:** Empirical, descriptive — 23M trades; no single accuracy number, but quantified curvature/overpricing structure.
- **GSE component:** market/odds modeling. Directly feeds any lane that consumes market prices as probabilities (line shopping, fair-odds computation, Kelly/parlay pricing, vig decomposition).
- **Why high value:** Flags two correctable biases in the exact data source GSE would mine for market truth. The parlay-overpricing finding is actionable: even in the regime where legs are perfectly calibrated, the sportsbook's parlay markup is a separate additive layer — that is computable alpha against public parlay products. Also tells GSE that late-expiring contracts (live betting / final minutes) have a structural insurance-demand bias.

### 2. Neural Sabermetrics with World Model: Play-by-play Predictive Modeling with Large Language Model
- **arXiv:** 2602.07030v1 — https://arxiv.org/abs/2602.07030v1
- **Authors:** Young Jin Ahn, Yiyang Du, Zheyuan Zhang, Haisen Kang
- **Year:** 2026
- **Method summary:** Casts baseball games as long auto-regressive event sequences and continuously pretrains a single LLM on >10 years of MLB tracking data — over 7 million pitch sequences, ~3 billion tokens. The resulting model predicts multiple aspects of game evolution (pitch types, swing decisions, plate-appearance outcomes) within one backbone rather than separate single-step models. The "world model" framing treats the trained LLM as a generative simulator of how games unfold.
- **Claimed results:** Correctly predicts ~64% of next pitches within a plate appearance and 78% of batter swing decisions; beats strong neural baselines on both in-distribution regular-season and out-of-distribution postseason data.
- **GSE component:** new capability (generative game/play simulation). Complements Monte Carlo sims: a neural world model conditioned on real tracking could generate full game trajectories for DFS tail analysis and live win-probability.
- **Why high value:** Novel paradigm for GSE — the engine currently simulates games via mechanistic Monte Carlo; this shows an LLM trained on play-by-play token sequences can become a credible simulator. Directly transferable to NFL: play-by-play + NGS tracking as "language," pre-train, then query for situational probabilities GSE currently hard-codes.

### 3. Conversational Collective Intelligence (CCI) using Hyperchat AI in a Real-world Forecasting Task
- **arXiv:** 2511.03732v2 — https://arxiv.org/abs/2511.03732v2
- **Authors:** Hans Schumann, Louis Rosenberg, Ganesh Mani, Gregg Willcox
- **Year:** 2025
- **Method summary:** "Hyperchat AI" — agentic technology that networks groups of humans in real-time conversation to deliberate and converge on forecasts, amplifying collective intelligence. Formal study: over 8 weeks, networked groups of ~24 sports fans conversationally forecast the winners of 59 MLB games with AI agents facilitating deliberation.
- **Claimed results:** Groups converged on High Confidence predictions that "significantly outperformed Vegas betting markets": 78% accurate on High Confidence picks vs Vegas implied 57% (p=0.020). Betting against the spread on these picks would have produced a 46% ROI against Vegas lines. High Confidence forecasts generated through above-average conversation rates hit 88% accuracy — interactive deliberation appears central to the amplification.
- **GSE component:** new capability (forecasting research direction). Contrarian evidence that structured human deliberation beats the closing line.
- **Why high value:** One of the flagged categories (claim of beating Vegas). If the effect is real and not a 59-game fluke, it opens a lane GSE does not currently run: AI-facilitated deliberative human panels as a forecast input, especially where model signal is thin. Worth a small replication attempt before dismissing.

### 4. SportMamba: Adaptive Non-Linear Multi-Object Tracking with State Space Models for Team Sports
- **arXiv:** 2506.03335v1 — https://arxiv.org/abs/2506.03335v1
- **Authors:** Dheeraj Khanna, Jerrin Bright, Yuhao Chen, John S. Zelek
- **Year:** 2025
- **Method summary:** Hybrid multi-object tracker for team sports built on state-space models: (1) a "mamba-attention" mechanism that models non-linear player motion by implicitly focusing on relevant embedding dependencies; (2) a height-adaptive spatial association metric that reduces ID switches under partial occlusion by accounting for depth-induced scale changes; (3) adaptive detection-search buffers for fast-motion scenarios.
- **Claimed results:** State-of-the-art on multiple metrics on the SportsMOT dataset (complex motion, severe occlusion); zero-shot transfer to VIP-HTD, an ice hockey dataset.
- **GSE component:** tracking metrics. Parent explicitly flagged state-space models as a target keyword.
- **Why high value:** State-space (Mamba-style) tracking is a genuinely new modeling substrate for player-trajectory data. If GSE ever ingests All-22 or builds its own tracking-derived metrics, this is the current SOTA architecture family for the association layer — and the height-adaptive association idea is a cheap, sport-agnostic fix for occlusion-driven ID switches.

### 5. Estimating Player Performance in Different Contexts Using Fine-tuned Large Events Models
- **arXiv:** 2402.06815v2 — https://arxiv.org/abs/2402.06815v2
- **Authors:** Tiago Mendes-Neves, Luís Meireles, João Mendes-Moreira
- **Year:** 2024
- **Method summary:** "Large Event Models" (LEMs) — LLMs repurposed to model soccer: learn the "language" of the sport by predicting variables for subsequent events rather than words, fine-tuned on the WyScout 2017–18 Premier League dataset. Uses: match simulation, forecasting teams' expected standings, and contextual player evaluation (e.g., simulating transfers — the Messi/Ronaldo-to-PL thought experiments) showing that context narrows apparent gaps between players.
- **Claimed results:** Qualitative/illustrative — LEMs forecast expected standings and reveal that context-adjusted player gaps are narrower than raw metrics suggest.
- **GSE component:** new capability (contextual player evaluation; QB/team-context-adjusted ratings). Maps to GSE's engine ratings and QB & props.
- **Why high value:** Companion paradigm to #2 (world models) but aimed at the contextual question GSE already wrestles with: separating player from situation. A fine-tuned event model that can answer "what does this QB look like in a different system" is directly aligned with the engine-benchmark lane — and this paper shows the setup works on event data that is structurally identical to NFL play-by-play.

### 6. Method and Validation for Optimal Lineup Creation for Daily Fantasy Football Using Machine Learning and Linear Programming
- **arXiv:** 2309.15253v2 — https://arxiv.org/abs/2309.15253v2
- **Authors:** Joseph M. Mahoney, Tomasz B. Paniak
- **Year:** 2023
- **Method summary:** NFL-specific DFS pipeline in two stages: (1) a supervised neural network projecting fantasy points (FPTS) from past player performance (2018 NFL regular season); (2) a mixed-integer linear program (MILP) that selects the optimal lineup under the salary cap. Validates against random lineups and against real DraftKings user lineups.
- **Claimed results:** Optimal lineups beat random ones on average; generated lineups landed around the 31st percentile (median) vs real DraftKings users — i.e., a baseline that is beatable but non-trivial.
- **GSE component:** DFS optimizer — directly.
- **Why high value:** This is the closest published template to GSE's own DFS lane: NFL FPTS projection + MILP lineup construction with an honest validation protocol. The 31st-percentile benchmark is a concrete line in the sand: any GSE optimizer improvement should beat it on the same setup. Also a reminder that pure projection-maximization (no ownership/game-theory layer) caps out well below median — supporting GSE's leverage/correlations work.

### 7. BBE: Simulating the Microstructural Dynamics of an In-Play Betting Exchange via Agent-Based Modelling
- **arXiv:** 2105.08310v1 — https://arxiv.org/abs/2105.08310v1
- **Authors:** Dave Cliff
- **Year:** 2021
- **Method summary:** Free, open-source agent-based model of a sports-betting exchange ("Bristol Betting Exchange", BBE) — to the author's knowledge the first of its kind. Components: (1) a matching-engine betting exchange, (2) a minimal simulated racetrack sporting event about which bets are placed, (3) a population of simulated bettors each forming private odds evaluations and betting before AND during the event (in-play), with opinions updating second-by-second as the race unfolds. Framed explicitly as a synthetic-data generator for AI/ML research on betting exchanges, since real high-resolution exchange data is expensive or unobtainable.
- **Claimed results:** Proof-of-concept with illustrative results; the deliverable is the simulator itself.
- **GSE component:** market/odds modeling — flagged keyword "market microstructure." Also data pipeline (synthetic data generation).
- **Why high value:** Market microstructure flagged explicitly. BBE gives GSE a free testbed for in-play modeling ideas: simulate exchange dynamics, stress-test how GSE's live win-probability would interact with real liquidity, generate labeled synthetic order-flow data for training models that must act without full real-world exchange feeds.

### 8. Gaussian Process Priors for Dynamic Paired Comparison Modelling
- **arXiv:** 1902.07378v1 — https://arxiv.org/abs/1902.07378v1
- **Authors:** Martin Ingram
- **Year:** 2019
- **Method summary:** Replaces the Markovian time dynamics of Elo/Glicko with a Gaussian Process (GP) prior over team/player strength trajectories, which also makes covariate incorporation (e.g., surface in tennis) straightforward. Approximate Bayesian inference via Laplace approximation + sparse linear algebra; hyperparameters chosen by maximizing marginal likelihood with Bayesian optimization.
- **Claimed results:** On the 2018 ATP season it "performs competitively, outperforming Elo and Glicko on log loss, particularly when surface covariates are included."
- **GSE component:** engine ratings.
- **Why high value:** GSE's ratings are Elo-flavored; this is a principled upgrade path — non-Markovian strength dynamics (capturing form cycles, injury arcs, coaching changes as smooth non-stationary functions) with covariate support and a real log-loss win over Elo/Glicko. Laplace approximation keeps it tractable. Implementable and testable against the current engine on 2020–2025 nflverse data.

---

## SCORE 2 — directly relevant (compact table)

| arXiv ID | Title | One-line method | GSE component |
|---|---|---|---|
| 2608.25940v2 | A Statistical Audit of Physical AI Benchmark Redundancy | Model-by-benchmark matrix; greedy benchmark selection on score-dispersion + unexplained variance; 4 of 12 benchmarks retain 78.5% utility; Bradley–Terry ranking on subset | engine benchmarking lane |
| 2607.08725v1 | Pose-to-Biomechanics (BioModule) | Plug-in temporal transformer mapping 17-joint 3D skeletons to biomechanical attributes; trained on Human3.6M + Human3.6Mplus cross-modal supervision | tracking metrics / new capability |
| 2605.16066v1 | A market-calibrated accelerated failure time model for in-play football forecasting | Weibull AFT goal-arrival model; team strengths calibrated to Betfair 1X2/O-U prices at kickoff via squared-error; post-shot xG as time-varying covariate; 70.2% vs Betfair 70.6% on 140 EPL matches | engine ratings + market/odds |
| 2604.13861v2 | Simulation-Based Optimisation of Batting Order and Bowling Plans in T20 Cricket | MDP with three-phase player profiles, James–Stein shrinkage toward league average, 50k-trajectory Monte Carlo win/defend probabilities | engine (in-game decision models) |
| 2603.10916v1 | NCAA Bracket Prediction Using Machine Learning and Combinatorial Fusion Analysis | Combinatorial Fusion Analysis — combine ranking systems via rank-score characteristic + cognitive diversity; 74.60% vs best single system's 73.02% | engine ratings (ensemble fusion) |
| 2512.00203v2 | Beyond Expected Goals: A Probabilistic Framework for Shot Occurrences in Soccer (xG+) | Joint possession-level model of shot occurrence within next second × xG-if-shot; aggregate joint probability over possession; more persistent player-skill signal than xG | QB & props (attempt-quality joint models) |
| 2511.18730v1 | Large-Scale In-Game Outcome Forecasting in Football using an Axial Transformer | Transformer jointly and recurrently predicts expected totals for 13 individual actions per player at multiple time-steps | QB & props / in-game |
| 2508.05891v1 | Bayesian weighted discrete-time dynamic models for association football prediction | Discrete-time dynamic team strengths with period-specific commensurate priors; separate time-varying precisions per ability with spike-and-slab hyperpriors; rapid adaptation to transfers/coaching changes | engine ratings |
| 2503.09737v1 | Unveiling Hidden Pivotal Players with GoalNet | GNN credit assignment for changes in expected threat (xT) over event graphs with centrality measures; surfaces non-scoring contributors | QB & props (credit attribution) |
| 2503.02137v1 | Basketball Shot Charts via Log Gaussian Cox Processes with Spatially Varying Coefficients | Bayesian LGCP joint model of shot locations and outcomes; hierarchical GP log-intensity with spatially varying covariate effects | QB & props (spatial pass-location models) |
| 2509.26325v2 (2024) | Temporal dynamics of goal scoring in soccer | 3,433 matches: goal probability rises through match; inter-goal times exponential decay with bursty same-team clustering; challenges memoryless models | engine (in-game / momentum) |
| 2412.19215v1 | Optimizing Fantasy Sports Team Selection with Deep Reinforcement Learning | Fantasy team creation as sequential decision problem; RL trained on historical player data to maximize team potential | DFS optimizer |
| 2409.10176v1 | TCDformer-based Momentum Transfer Model for Long-term Sports Prediction | Momentum encoding via local linear scaling approximation (LLSA); time-series decomposed via momentum transfer for point-set-game multi-level matches | engine (momentum — contrarian) |
| 2401.05451v1 | OpenSkill: faster asymmetric multi-team multiplayer rating system | Open-source Python suite; Plackett–Luce + Bayesian inference vs TrueSkill for asymmetric multi-team matches | engine ratings (code release) |
| 2311.13707v1 | Bayes-xG: Player and Position Correction on Expected Goals using Bayesian Hierarchical Approach | Bayesian hierarchical logistic regression on ~10k EPL shots (StatsBomb): positional effects fade with better predictors but player-level effects persist | QB & props |
| 2310.10386v1 | Rating of players by Laplace approximation and dynamic modeling | Laplace posterior approximation + random-walk strength dynamics with nonidentical increments + variance floor; new players captured better | engine ratings |
| 2308.01523v2 | Miss It Like Messi: Extracting Value from Off-Target Shots in Soccer | Player-specific metrics extracting shooting-skill signal from off-target shot trajectories (two-thirds of shots currently valued at zero) | QB & props (failed-attempt information) |
| 2307.10411v1 | Stop Simulating! Efficient Computation of Tournament Winning Probabilities | Exact tournament winning-probability computation via schedule structure, faster than tens of thousands of Monte Carlo sims | engine (playoff probabilities) |
| 2306.01740v4 | Not feeling the buzz: mispricing and inefficiency in online sportsbooks | Replication of Wikipedia-"buzz" mispricing study; shows published profits hinge on one erroneous long-odds bet ("Hercog"); cautionary data-quality audit | market/odds (data hygiene) |
| 2303.06021v4 | Machine learning for sports betting: accuracy or calibration? | NBA betting experiments: selecting models by calibration (not accuracy) yields greater betting returns | calibration |
| 2301.04001v1 | Big Ideas in Sports Analytics and Statistical Tools | Survey linking expected game-state value, win probability, team strength, betting-market data across sports | engine (reference survey) |
| 2209.00451v1 | GNNRank: Learning Global Rankings from Pairwise Comparisons via Directed GNNs | Directed-GNN framework with Fiedler-vector-unfolding inductive bias and upset-violation objectives; beats ranking baselines | engine ratings (ranking method) |
| 2107.08827v1 | Optimal sports betting strategies in practice: an experimental review | Portfolio-theory + Kelly strategies reviewed; adaptive fractional Kelly best across horse/basketball/soccer under unified protocol | market/odds (staking) |
| 2101.05388v1 | Evaluating Soccer Player: from Live Camera to Deep RL (EDG) | Expected Discounted Goal: player valuation from pure simulation via deep RL, no human-data training; open-source tracking model + datasets | QB & props (valuation) |
| 1908.00939v1 | κ-Elo: extending Elo with draw modeling | Spells out Elo's implicit draw assumption; κ-Elo adds draw-frequency flexibility, equally simple | engine ratings |
| 1802.08848v1 | Combining historical data and bookmakers' odds in modelling football scores | Hierarchical Bayesian Poisson: team scoring rates as convex combinations of history-estimated and odds-implied parameters; 9 seasons train, 10th test | market/odds + engine ratings |
| 1710.05284v1 | Multivariate GLMMs for Joint Estimation of Sporting Outcomes | Normal-binary and Poisson-binary multivariate GLMMs with non-nested random effects; R package mvglmmRank; CFB + CBB data | engine ratings |
| 1702.05982v1 | Wages of wins: could an amateur make money from match outcome predictions? | Tests model accuracy vs betting profit on NCAAB/NBA/NFL: high accuracy ≠ high payout; accuracy distribution across matchup types matters | market/odds |

*Note: rows above consolidate the 28 score-2 papers; arXiv IDs are exact — use the "Score-2 ID checklist" below for a clean lookup.*

### Score-2 ID checklist (exact)
2608.25940v2, 2607.08725v1, 2605.16066v1, 2604.13861v2, 2603.10916v1, 2512.00203v2, 2511.18730v1, 2508.05891v1, 2503.09737v1, 2503.02137v1, 2412.19215v1, 2409.10176v1, 2401.05451v1, 2311.13707v1, 2310.10386v1, 2308.01523v2, 2307.10411v1, 2306.01740v4, 2303.06021v4, 2301.04001v1, 2209.00451v1, 2107.08827v1, 2101.05388v1, 1908.00939v1, 1802.08848v1, 1710.05284v1, 1702.05982v1 = 28 IDs.

*(The score-2 table rows above use these exact IDs; GNNRank = 2209.00451v1, Big Ideas survey = 2301.04001v1.)*

---

## Novelty notes — most surprising/contrarian findings in this batch

- **Prediction-market calibration is a clock, not a constant (2607.14430v1):** Kalshi contracts sit at perfect-calibration parameter values mid-life, then depart sharply near expiry — final-10-minutes prices fit a Prelec form with curvature >1, the opposite sign of the canonical lottery-choice fit. Insurance demand from losing-position holders, not noise. Implication: GSE's market-truth pipeline must condition on time-to-expiry.
- **Parlay markup is a separate layer (2607.14430v1):** Parlays are overpriced vs the product of contemporaneous leg prices even when legs are in the regime where calibration is perfect — the overpricing grows with leg count. That's a computationally correctable bookmaker margin GSE can price against.
- **Human deliberation networks beat Vegas (2511.03732v2):** 78% high-confidence vs 57% Vegas-implied, 46% ATS ROI, 88% with above-average conversation — a genuine "collective intelligence beats the market" claim on 59 MLB games. Small sample, but a live replication is cheap.
- **Non-Markovian ratings beat Elo/Glicko (1902.07378v1):** A GP prior over strength trajectories with Laplace inference beats Elo and Glicko on log loss, especially with covariates. GSE's engine ratings have a concrete upgrade candidate.
- **Exact > Monte Carlo for tournament probabilities (2307.10411v1):** Schedule structure admits exact winning-probability computation faster than tens of thousands of sims — applicable to GSE's playoff-probability lane.
- **Calibration beats accuracy for model selection (2303.06021v4):** In NBA betting experiments, picking models by calibration rather than accuracy yields greater returns. Directly relevant to GSE's CQR calibration lane — and a possible misspecification in how the engine currently selects models.
- **Failed attempts carry skill signal (2308.01523v2):** Two-thirds of soccer shots are off-target and valued at zero; trajectory-based metrics extract real skill signal from them. NFL analog: incomplete passes are not zero-information — ball location vs receiver separation on misses should enter QB evaluation.
- **Bursty goals break the memoryless story (2024, 3,433 matches):** Same-team goal clustering and rising within-match goal probability contradict simple Poisson in-game models. GSE's in-game win-probability should test bursty alternatives.
- **"Momentum transfer" as an explicit modeling primitive (2409.10176v1):** Claims long-horizon sports prediction via momentum encoding (LLSA). Runs counter to GSE's null findings on momentum (DMD rejected) — worth one controlled test to either confirm the null or find the boundary.
- **Augmented APM via expert priors (1810.08032v1):** Recasting adjusted plus-minus as Bayesian with FIFA video-game ratings as priors improves prediction and decorrelates collinear players. NFL analog: using betting-market priors (e.g., QB market-implied ratings) as the prior for regularized player-value estimates — a regularization lane GSE may not currently run.

---

## Public datasets / code releases mentioned in abstracts

- **OpenSkill (2401.05451v1)** — open-source Python rating library (Plackett–Luce + Bayesian inference); free to use and benchmark against TrueSkill.
- **BBE — Bristol Betting Exchange (2105.08310v1)** — free open-source agent-based in-play betting-exchange simulator.
- **mvglmmRank (1710.05284v1)** — R package for multivariate GLMM sporting-outcome models.
- **Asia Cup 2025 T20 dataset (2512.19740v1)** — all 19 matches, 61 variables, released on Zenodo under CC-BY 4.0 (cricket, but a clean template for dataset structure).
- **EDG tracking model + datasets (2101.05388v1)** — authors promise open-source player-tracking model and the datasets it was trained on.
- **CamShift (2508.12695v1)** — synthetic cross-sensor 3D-detection dataset + benchmark at dmholtz.github.io/camshift (autonomous driving domain, not sports, but a public data-generation template).
- **HERON Coma calibrated images (2609.01708v1)** — public astronomy images; not sports-relevant.
- **OrchRM code (2606.13598v1)** — code promised at github.com/Wang-ML-Lab/OrchRM (multi-agent orchestration, not sports).
- **Reproducibility archive (2609.17857v1)** — LLM-judge study archive, not sports.

---

*End of batch-2 screening. Score-3 files to pull first: 2607.14430v1 (market bias), 1902.07378v1 (GP ratings), 2309.15253v2 (NFL DFS), 2105.08310v1 (BBE), 2511.03732v2 (Hyperchat), 2602.07030v1 + 2402.06815v2 (world/event models), 2506.03335v1 (SportMamba).*
