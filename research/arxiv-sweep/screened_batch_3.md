# arXiv Sweep — Batch 3 Screening

**Date screened:** 2026-09-21 · **Source file:** `/home/hatch/workspace/arxiv-sweep/batch_3.jsonl`
**Screener note:** abstracts only, no full-paper reads, no web fetches. Scores 0 (irrelevant) → 3 (high value).
Equations named only when present in the abstract. All math descriptions are the abstract's own claims, not verified.

## 1. Counts

| Score | Meaning | Count |
|---|---|---|
| 3 | High value — novel method / new math / public dataset or code / market-beating claim / GSE-gap method | **41** |
| 2 | Directly relevant — worth knowing | **45** |
| 1 | Tangential — method might transfer from another domain | **33** |
| 0 | Irrelevant to sports prediction | **23** |
| **Total** | | **142** |

Batch-3 keyword pool was heavily sports-analytics-weighted, so score-3 density is unusually high vs. a general arXiv draw.

---

## 2. Score-3 papers (full detail)

### 2.1 — 2609.06739v1 — "The profit-bias identity in sports betting: bookmaker profit as the public's prediction error"
- **Authors:** Jacek P. Dmochowski (2026) · https://arxiv.org/abs/2609.06739v1
- **Method (from abstract):** Extends Levitt (2004) by relaxing the assumption that bet-share and outcome are independent. Derives a **profit-bias identity**: book profit is affine and increasing in the expected share of handle on the *losing* side, with Levitt's expression as the independence special case. The margin decomposes into exactly **three channels**: (1) the hold, (2) the product of price shading × public lean, (3) the covariance between bet share and outcome. Under a public-belief model, the profit driver is the **public's Bayes error** — the probability a representative bettor picks the losing side. Gives necessary and sufficient conditions for a "Goldilocks Zone" of prices where book and bettor both profit.
- **Claimed results:** On 1,139 MLB games, the apparent bet-share/outcome dependence is a **Simpson's paradox**: present pooled, absent once games are split by which side the book favored. Public leans heavily to favorites; no matching shading detected; realized margin indistinguishable from the hold.
- **GSE component:** market/odds modeling.
- **Why high value:** Gives GSE a clean accounting framework for *where* book margin comes from — directly tells you which leg (hold vs. shading vs. covariance) a betting strategy can attack. The Simpson's-paradox finding is a methodological warning for anyone estimating public bias from pooled data. Also a candidate loss function design: model the public's Bayes error, not the outcome.

### 2.2 — 2609.01337v1 — "LEAP: Likelihood Elicitation and Aggregation for LLM-based Probabilistic Forecasting"
- **Authors:** Yufei Chen, Yiran Zhao, Xiaogang Xu, Qipeng Xie, Jiafei Wu, Zhe Liu (2026) · https://arxiv.org/abs/2609.01337v1
- **Method (from abstract):** Rejects "Monolithic Prediction" (one LLM reads all evidence, outputs a forecast). LEAP instead: examine **each evidence item separately**, elicit **likelihood parameters** describing that item's implication for the target, then combine them with an **explicit prior** through a **deterministic probabilistic model** into a posterior distribution. Supports continuous, single-choice, and multi-choice forecasts; preserves reproducible per-item evidence contributions. Benchmark covers forecasting, information-seeking, and browsing tasks.
- **Claimed results:** Given identical evidence, LEAP improves most prediction and calibration metrics across models, and stays stronger under controlled comparisons of prior access, inference budget, and aggregation.
- **GSE component:** calibration + new capability (probabilistic aggregation layer).
- **Why high value:** This is a concrete, implementable anti-monolith pattern: separate evidence→likelihood from prior→posterior combination. It maps cleanly onto GSE's calibration lane (CQR) — instead of one black-box forecast, per-signal likelihoods combined with an explicit prior gives calibration you can audit and debug. Directly transferable even without LLMs.

### 2.3 — 2608.05030v1 — "From Score Matrices to Football-Aware Match-State Simulation: An Auditable LLM Harness for Exact-Score Reranking"
- **Authors:** Shaopeng Liang (2026) · https://arxiv.org/abs/2608.05030v1
- **Method (from abstract):** Hybrid of a statistical core and LLM context. Four iterations: **V1** dynamic score-driven **Dixon–Coles** baseline; **V2** maps LLM contextual ratings back into expected-goal parameters; **V3** replaces scalar correction with **goal-by-goal simulations over a frozen score-candidate set**; **V4** adds shared first-breakthrough and **post-goal cascade judgments**, time-aware stopping, and deterministic tail candidates. An "auditable information harness" constrains the LLM to an inspectable reasoning route.
- **Claimed results:** Chronological replay of first 150 matches of 2025–26 EPL. V1: 10.0% Top-1 / 26.7% Top-3 exact-score. V3: 12.0% / 30.0%. V4: 14.7% / 30.7%; candidate coverage 77.3%→84.7% (no added tail candidate became a Top-3 hit). V1's native 1X2: 53.3% argmax accuracy, 0.9878 log loss, 0.5870 Brier, 0.2095 RPS. Author flags: exploratory, dev slice not an untouched benchmark, temporal isolation can't exclude outcome memory in a closed LLM.
- **GSE component:** engine ratings (soccer lane, transfers to NFL touchdown-margin thinking).
- **Why high value:** The *architecture* is the value: statistical core (Dixon–Coles) + LLM restricted to contextual parameter adjustments + goal-by-goal simulation over a candidate set, with explicit negative findings about where football-aware simulation does NOT help (tail candidates added coverage, zero Top-3 hits). The post-goal cascade judgment is a formalization of momentum at the score-state level.

### 2.4 — 2608.02081v1 — "Isotonic Bradley-Terry Model for Paired Comparison Data"
- **Authors:** Ryoya Yamasaki (2026) · https://arxiv.org/abs/2608.02081v1
- **Method (from abstract):** Standard Bradley–Terry predicts win probability by transforming rating differences through a *fixed* inverse link function — a misspecification risk. This paper **learns the inverse link function nonparametrically via isotonic regression**, alternating with (sub-)gradient learning of the rate parameters. Guarantees monotonic improvement in training error; naturally yields exact ties when data are insufficient for a strict ranking.
- **Claimed results:** Improved win-probability prediction and ranking vs. standard BT on synthetic data and real EPL, MLB, and ATP data.
- **GSE component:** engine ratings.
- **Why high value:** Every rating system GSE runs assumes logistic (or probit) link. Learning the link from data is a drop-in upgrade to the entire BT-family stack: if real win probability vs. rating gap isn't logistic (fat tails, favorite-longshot asymmetry), isotonic link learning finds it without parametric assumptions. Small implementation cost, applies everywhere.

### 2.5 — 2607.07320v1 — "SoccerNet 2026 Challenges Results"
- **Authors:** Anthony Cioppa, Silvio Giancola, Håkan Ardö, Mohamad Dalal, Jan Held, Jérémie Ochin + many (2026) · https://arxiv.org/abs/2607.07320v1
- **Method (from abstract):** Sixth annual SoccerNet open benchmark: five tasks — (1) **Ball Action Anticipation** (predict timing/class of ball actions in a short future window from an observation window), (2) **Player-Centric Ball Action Spotting** (temporally localize + classify + attribute to acting player via team/jersey), (3) **Novel View Synthesis** in multi-view football scenes, (4) **Spiideo SoccerNet SynLoc** (localize athletes in real-world pitch coordinates from a single calibrated static-camera image), (5) **VQA** on football broadcasts. Annotated data, unified evaluation, public baselines.
- **Claimed results:** 427 teams, 1,129 entries; 28 reviewed technical reports; leaderboard + summaries of leading submissions.
- **GSE component:** tracking metrics / data pipeline (benchmark + dataset resource).
- **Why high value:** Public, current, competition-scale benchmark for exactly the video→tracking→anticipation pipeline GSE wants for NGS benchmarking. Task (1) is literally short-horizon play-outcome anticipation — the closest public proxy to "what does the tracking data say happens next."

### 2.6 — 2607.01722v2 — "An Adaptive Glicko-2 Rating Framework for Probabilistic Football Forecasting and Season Simulation"
- **Authors:** Bich Van Nguyen, Nam Anh Tran (2026) · https://arxiv.org/abs/2607.01722v2
- **Method (from abstract):** Extends standard Glicko-2 with football-specific mechanisms: **margin-of-victory adjustment, dominance weighting, structural shocks, home-advantage modeling**, and an **ordered-logit draw model**. Latent team strength estimated dynamically; rating differences converted to win/draw/loss probabilities; remaining season simulated by **Monte Carlo sampling**.
- **Claimed results:** (Framework paper; performance claims vs. baselines in the paper's experiments — see full paper for numbers.)
- **GSE component:** engine ratings.
- **Why high value:** A checklist of Glicko-2 extensions with explicit uncertainty modeling (Glicko-2 carries rating deviation, which plain Elo lacks). "Dominance weighting" and "structural shocks" (regime changes like injuries/coaching changes) are mechanisms GSE's EPA ratings could borrow. Ordered-logit draw model is directly portable to any 3-outcome setting.

### 2.7 — 2606.13221v2 — "From Uncertain Judgments to Calibrated Rankings: Conformal Elo Estimation for LLM Evaluation"
- **Authors:** Bora Kargi, David Salinas (2026) · https://arxiv.org/abs/2606.13221v2 · Code: https://github.com/kargibora/SoftElo
- **Method (from abstract):** Two layers. **Local:** estimate per-battle uncertainty from the judge's own score differences, propagating **calibrated win probabilities rather than hard labels** into the Bradley–Terry procedure — brings LLM-derived ratings within 17.9 Elo MAE of human-derived ones (55 held-out models, LMArena). **Global:** apply **split conformal prediction** to the residual gap between LLM-derived and human-derived Elo ratings, producing prediction intervals with **distribution-free marginal coverage guarantees** that account for irreducible disagreement.
- **Claimed results:** Drastic Elo-estimation improvement from the soft-label BT change alone; honest uncertainty bounds without large-scale human annotation.
- **GSE component:** calibration (direct CQR-lane upgrade).
- **Why high value:** Two immediately stealable ideas: (1) *feed calibrated probabilities, not hard 0/1 outcomes, into your rating updates* — for GSE this means updating ratings from model-implied win probabilities with uncertainty, not just realized outcomes; (2) split conformal intervals on rating residuals give **distribution-free coverage** — a mathematically clean upgrade over quantile-regression calibration that makes no distributional assumptions.

### 2.8 — 2606.09327v1 — "A Universal Dense Football Event Representation Based on TabTransformer"
- **Authors:** Weiran Yang, Daniel Memmert, Maximilian Klemp-Weins (2026) · https://arxiv.org/abs/2606.09327v1
- **Method (from abstract):** Transformer (self-attention) over football **event data**: categorical features (action type, outcome, body part) encoded as **learned embedding vectors** instead of one-hot/ordinal, capturing sport-specific action semantics during pretraining. Continuous coordinates handled alongside. Dense representations support downstream tasks: **action value estimation** and play-style recognition.
- **Claimed results:** Embedding representations yield **superior probability calibration** (Brier score) over task-specific baselines on downstream prediction tasks.
- **GSE component:** data pipeline / tracking metrics / new capability.
- **Why high value:** This is the embedding layer GSE's play-by-play pipeline lacks: pretrained dense representations of events with *better calibration as a measured outcome*. Directly analogous to what an NFL play-event embedding would do for GSE's EPA/action-value models. Pretraining semantics once, reusing downstream.

### 2.9 — 2607.26061v1 — "Sim2Win: A Team-Agnostic, Event-Based Pre-Match Outcome Prediction and Tactical Profiling System for Football"
- **Authors:** Mouad Zemzoumi, Amine Abouaomar (2026) · https://arxiv.org/abs/2607.26061v1
- **Method (from abstract):** Team-agnostic prediction from StatsBomb **open event data** (11 competitions, 178 teams, 1,411 team-match records). Pipeline: five-match rolling **tactical profiles** → four interpretable **tactical feature ratios** → **K-Means into eight playstyles** → 13 classifiers on tactical-matchup representations to estimate W/D/L. No team names or identity features. Evaluation: rigorous **Leave-One-Competition-Out (LOCO)**.
- **Claimed results:** Mean ROC-AUC 0.704, mean accuracy 55.4% on completely unseen teams; beats **ELO, Pi-Rating, and GAP** baselines on all 21 ROC-AUC comparisons and 19/21 accuracy comparisons. CatBoost best in-distribution at 60.90%.
- **GSE component:** engine ratings (identity-free modeling paradigm).
- **Why high value:** Proves behavioral/tactical representations transfer across distributions where identity-based ratings can't (new teams, new leagues — think CFB with roster churn). GSE's NFL/CFB engine could adopt the playstyle-clustering + matchup-representation pattern for early-season or transfer-portal-heavy CFB predictions. Uses open data, so it's reproducible.

### 2.10 — 2605.14855v1 — "Exploitation of Hidden Context in Dynamic Movement Forecasting" (NBA player trajectory forecasting)
- **Authors:** Lukas Schelenz et al. (2026) · https://arxiv.org/abs/2605.14855v1
- **Method (from abstract):** Benchmarks trajectory forecasting for NBA player movement across model families: (S)ARIMA(X), Kalman filters, particle filters vs. LSTM, GNNs, Transformers. Tests trade-offs across **input history length, generalizability, and contextual-information incorporation**. Hybrid: **LSTM augmented with contextual information**.
- **Claimed results:** ML methods substantially beat linear models at horizons up to 2s. Hybrid context-augmented LSTM achieved lowest **final displacement error of 1.51m**, beating TCNN, GAT, and Transformers while needing less data and training time. **No single architecture wins on all metrics.**
- **GSE component:** tracking metrics.
- **Why high value:** A like-for-like empirical comparison of exactly the trajectory-forecasting stack relevant to NGS-style tracking metrics (NGS's expected-rush/receiving models are trajectory-adjacent). Finding: a context-augmented LSTM beats Transformers on FDE with less data — a concrete architecture prior for any GSE tracking-data modeling, and a warning against defaulting to Transformers.

### 2.11 — 2604.27865v1 — "KellyBench: A Benchmark for Long-Horizon Sequential Decision Making"
- **Authors:** Thomas Grady, Kip Parker, Iliyan Zarov, Henry Course, Chengxi Taylor, Ross Taylor (2026) · https://arxiv.org/abs/2604.27865v1 · Open API: https://openreward.ai/GeneralReasoning/KellyBench
- **Method (from abstract):** Agents placed in a **sequential simulation of the 2023–24 EPL season**, tasked with maximizing **long-term bankroll growth**. Given historical data incl. advanced stats, lineups, and **public odds**. Must build ML models, find edge in public markets, adapt to non-stationarity. Human-expert rubric grades strategy sophistication.
- **Claimed results:** **All frontier models evaluated lose money on average** (best: −8% return; many hit ruin across seeds). Best model (Claude Opus 4.6) scores 26.5% on the human rubric — "unsophisticated compared to human baselines."
- **GSE component:** market/odds modeling (evaluation harness).
- **Why high value:** Public, API-accessible **bankroll-growth benchmark** for betting strategies — GSE can run its own staking/edge logic through KellyBench-style sequential evaluation instead of backtesting single bets. The headline (frontier LLMs all lose) is also a strong prior: naive model + Kelly staking is not enough; the rubric's strategy dimensions are a free checklist of what "sophisticated" means.

### 2.12 — 2604.09143v1 — "Score-Driven Rating System for Sports"
- **Authors:** Vladimír Holý, Michal Černý (2026) · https://arxiv.org/abs/2604.09143v1
- **Method (from abstract):** Generalizes classical Elo: uses the **score — the gradient of the log-likelihood** — as the rating update mechanism. Accommodates win/loss, point differences, win/draw/loss, or complete rankings. Proves theoretical properties: the score has **zero expected value**, **sums to zero across players**, and **decreases with increasing rating** (internal consistency + fairness). Exhibits a **reversion property**: ratings track the unobserved true skills over time.
- **Claimed results:** Theoretical; provides a rationale for existing dynamic sports-performance models and a systematic construction kit for new ones.
- **GSE component:** engine ratings (foundational).
- **Why high value:** This is the *theory GSE's rating updates are missing*: it shows Elo-style updates are a special case of score-driven (GAS) updates, so any likelihood you can write down (margin of victory, EPA distributions, rankings) induces a principled rating update with proven consistency/fairness properties. Directly implementable: replace heuristic K-factors with score-based updates under your chosen outcome likelihood.

### 2.13 — 2603.25901v1 — "Decoding Defensive Coverage Responsibilities in American Football Using Factorized Attention Based Transformer Models"
- **Authors:** Kevin Song, Evan Diewald, Ornob Siddiquee, Chris Boomhower, Keegan Abdoo, Mike Band (2026) · https://arxiv.org/abs/2603.25901v1
- **Method (from abstract):** **Factorized attention transformer** on **NFL multi-agent play tracking data** predicting **individual coverage assignments, receiver–defender matchups, and the targeted defender** on every pass play. Attention separates temporal and agent dimensions (player movement vs. inter-player relations). Trained on **randomly truncated trajectories** → frame-by-frame predictions from pre-snap through pass arrival. Enables derivative metrics: **disguise rate** and **double-coverage rate**.
- **Claimed results:** ~89%+ accuracy on all tasks (authors note true accuracy may be higher given annotation ambiguity).
- **GSE component:** tracking metrics (NFL coverage modeling).
- **Why high value:** NFL-authored (includes Keegan Abdoo / Mike Band of NFL NGS-adjacent work), 89%+ on a genuinely hard task, and the *factorized attention* design plus *truncated-trajectory training* are directly reusable patterns for any GSE tracking-data model. Disguise rate and double-coverage rate are example NGS-style derivative metrics GSE could compute from public tracking data.

### 2.14 — 2603.17866v3 — "NFL step-and-turn: A generative framework for evaluating player movement in American football"
- **Authors:** Quang Nguyen, Ronald Yurko (2026) · https://arxiv.org/abs/2603.17866v3
- **Method (from abstract):** Generative evaluation of frame-by-frame ball-carrier movement. **Bayesian multilevel models** for two components: **step length** (distance between successive positions) and **turn angle** (change in direction). Then **posterior predictive simulation** generates *hypothetical* ball-carrier steps at each frame → compare observed movement against a distribution of simulated alternatives using standard American-football valuation measures. Applied to first nine weeks of 2022 NFL tracking data.
- **Claimed results:** Novel player-performance metrics based on hypothetical evaluation (see paper for values).
- **GSE component:** tracking metrics (ball-carrier evaluation).
- **Why high value:** The "evaluate against the distribution of what *could* have happened" framing is the principled version of rush-yards-over-expected — instead of comparing to an average outcome, you compare to a *personalized posterior predictive distribution* of the same player's movement. That's a strictly better NGS-style metric and implementable from public NFL tracking data.

### 2.15 — 2601.11492v2 — "BoxMind: Closed-loop AI strategy optimization for elite boxing validated in the 2024 Olympics"
- **Authors:** Kaiwen Wang et al. (2026) · https://arxiv.org/abs/2601.11492v2 · Code + data: https://github.com/gouba2333/BoxingWeb
- **Method (from abstract):** Parses match footage into **18 hierarchical technical-tactical indicators** from atomic punch events. **Graph-based predictive model** fusing explicit tactical profiles with **learnable time-variant latent embeddings** to capture matchup dynamics. Models **match outcome as a differentiable function of tactical indicators** → turns **winning-probability gradients into executable tactical adjustments**. Closed-loop deployment at the **2024 Paris Olympics** with the Chinese national team (3 gold, 2 silver).
- **Claimed results:** 69.8% accuracy on BoxerGraph test set; 87.5% on Olympic matches; recommendations judged comparable to human experts. Code and data released.
- **GSE component:** new capability (differentiable tactics → adjustments).
- **Why high value:** The transferable trick: make win probability *differentiable in the tactical features*, then follow the gradient to recommendations. GSE could do the same with play-calling tendencies (e.g., gradient of win probability w.r.t. pass-rate or blitz-rate features → "run 4% more play-action"). Plus a rare validated closed-loop sports deployment and a public code/data release.

### 2.16 — 2512.15386v1 — "See It Before You Grab It: Deep Learning-based Action Anticipation in Basketball"
- **Authors:** Arnau Barrera Roy, Albert Clapés Sintes (2025) · https://arxiv.org/abs/2512.15386v1
- **Method (from abstract):** Introduces **action anticipation** in basketball broadcast video: predicting **which team gains possession after a shot attempt** before the rebound occurs. Benchmarks SOTA action-anticipation methods; adds two companion tasks (rebound classification, rebound spotting).
- **Claimed results:** New self-curated dataset: **100,000 clips, 300+ hours, 2,000+ manually annotated rebound events**; first deep-learning application to basketball rebound prediction; feasibility + challenges documented.
- **GSE component:** tracking metrics / data pipeline (dataset).
- **Why high value:** A 100k-clip anticipation dataset in a multi-agent sport — directly relevant training/evaluation material for any GSE "what happens next" tracking model. (Release status not stated in abstract — listed below as dataset to verify.)

### 2.17 — 2511.23072v1 — "What If They Took the Shot? A Hierarchical Bayesian Framework for Counterfactual Expected Goals"
- **Authors:** Mikayil Mahmudlu, Oktay Karakuş, Hasan Arkadaş (2025) · https://arxiv.org/abs/2511.23072v1
- **Method (from abstract):** **Hierarchical Bayesian logistic regression with informed priors** (using Football Manager 2017 ratings) for player-specific xG — fixes standard xG treating all players as identical finishers. Stabilizes estimates for low-shot players. Enables **counterfactual shot reallocation**: reassign shots between players under identical contexts. Data: 9,970 shots from StatsBomb 2015–16.
- **Claimed results:** Hierarchical vs. baseline predictions correlate at R²=0.75; XGBoost benchmark vs. StatsBomb xG reaches R²=0.833. Interpretable specialization profiles (1v1 finishing: Agüero, Suárez, Belotti, Immobile, Martial; long-range: Pogba; first-touch: Insigne, Salah, Gameiro). Counterfactuals: Sansone would generate **+2.2 xG from Berardi's chances**; Vardy↔Giroud substitution is **strongly asymmetric** (−7 xG one direction, −1 xG the other).
- **GSE component:** QB & props / calibration.
- **Why high value:** The counterfactual reallocation trick is gold for props: "what would this player's line look like with that player's chances?" The asymmetry finding (Vardy/Giroud) shows finishing skill is *not* portable — a direct caution for GSE's player-prop projections when players change teams/schemes. Hierarchical Bayes with informed priors is the right small-sample machinery for early-season props.

### 2.18 — 2511.17733v1 — "The Impacts of Increasingly Complex Matchup Models on Baseball Win Probability"
- **Authors:** Tristan Mott, Caleb Bradshaw, David Grimsman, Christopher Archibald (2025) · https://arxiv.org/abs/2511.17733v1
- **Method (from abstract):** Four progressively complex **hierarchical Bayesian matchup models** predicting plate-appearance outcomes from pitcher + batter information, handedness, and recency, plus base-running probabilities calibrated to steal tendencies. Each model embedded in a **game-theoretic framework** approximating **subgame-perfect Nash equilibria** for in-game decisions (substitutions, intentional walks). Simulations of the 2024 MLB postseason.
- **Claimed results:** More accurate matchup models yield tangible win-probability gains — **up to ~1 extra win per 162-game season**. Most detailed model's playoff win predictions **align with market expectations**.
- **GSE component:** engine ratings + game theory (beyond basics — flagged method).
- **Why high value:** Quantifies the *decision value* of model complexity in wins, not log-loss — the right currency for GSE. And the pipeline (Bayesian matchup model → Nash equilibrium of tactical decisions) is the template for NFL fourth-down / go-for-it / matchup-exploitation analysis.

### 2.19 — 2508.04008v1 — "Leveraging Minute-by-Minute Soccer Match Event Data to Adjust Team's Offensive Production for Game Context"
- **Authors:** Andrey Skripnikov, Ahmet Cemek, David Gillman (2025) · https://arxiv.org/abs/2508.04008v1
- **Method (from abstract):** **Count-response Generalized Additive Modeling (GAM)** on minute-by-minute event-sequenced data (15 seasons, five major European leagues). Features: score and red-card differentials, home/away, pre-match win probabilities, game minute, plus interaction terms testing intuitive hypotheses. Selected model projects offensive statistics onto a standardized **"common denominator" scenario: tied home game, even men**.
- **Claimed results:** Adjusted numbers give more contextualized comparisons than raw totals; reduces misrepresentation of relative quality of play.
- **GSE component:** engine ratings (game-state adjustment).
- **Why high value:** Score effects pollute every raw stat — this is the formal "garbage-time adjustment" GSE's EPA ratings need. GAM with interaction terms is an interpretable, implementable recipe: project all production onto a neutral game state before rating teams. Directly applicable to NFL (score differential × time remaining interactions).

### 2.20 — 2505.11841v2 — "Framing Causal Questions in Sports Analytics: A Tutorial on Estimand Choice Illustrated Through Crossing in Soccer"
- **Authors:** Shomoita Alam, Erica E. M. Moodie, Lucas Y. Wu, Tim B. Swartz (2025) · https://arxiv.org/abs/2505.11841v2
- **Method (from abstract):** Tutorial on **causal inference estimand choice** — ATE (average treatment effect) vs. ATT (average treatment effect on the treated) — using **propensity score matching** on ~240 matches of the 2019 Chinese Super League to estimate the causal effect of crossing on shot creation. Two simulation scenarios with known ground truth: high-overlap (ATE≈ATT) and severe-confounding/low-overlap (ATE≠ATT).
- **Claimed results:** ATE and ATT nearly identical (0.033 vs. 0.035), attributed to high propensity-score overlap; simulations show when they diverge.
- **GSE component:** calibration / new capability (causal inference — flagged method).
- **Why high value:** GSE currently does prediction, not causation — but "does play-action *cause* more EPA" or "does blitzing *cause* worse QB performance" are causal questions where naive regression lies. This is the gentlest rigorous on-ramp: propensity-score matching with an explicit ATE-vs-ATT discussion and ground-truth simulations GSE can replicate before touching real inference.

### 2.21 — 2504.19612v1 — "Relative Advantage: Quantifying Performance in Noisy Competitive Settings"
- **Authors:** M. R. Brown, G. Scott, L. Kilduff (2025) · https://arxiv.org/abs/2504.19612v1
- **Method (from abstract):** Unified mathematical framework for **relative performance metrics** that **systematically eliminate shared environmental effects** (weather, era, economic climate) via a principled transformation. Formalizes the environmental-noise-cancellation mechanism with **signal-to-noise ratio analysis** and theoretical bounds on metric performance.
- **Claimed results:** Simulations: relative metrics beat absolute ones by **up to 28% in classification accuracy** when environmental noise dominates. Validated on real **rugby** performance data with substantially better predictive power.
- **GSE component:** engine ratings.
- **Why high value:** A theorem-backed reason to prefer relative metrics (performance vs. opponent/environment baseline) over raw ones whenever shared noise is large — i.e., most of football. This is the mathematical justification for opponent-adjusted EPA done right, with bounds telling you *when* relativization helps vs. hurts.

### 2.22 — 2504.12021v1 — "Action Anticipation from SoccerNet Football Video Broadcasts" (FAANTRA)
- **Authors:** Mohamad Dalal et al. (2025) · https://arxiv.org/abs/2504.12021v1 · Dataset + code: https://github.com/MohamadDalal/FAANTRA
- **Method (from abstract):** New task: **action anticipation** in football broadcast video — predict future ball-related actions within a **5- or 10-second window**. New dataset: **SoccerNet Ball Action Anticipation**. Baseline **FAANTRA** adapts FUTR (SOTA action anticipation) to predict ball actions. New metrics: **mAP@δ** (temporal precision) and **mAP@∞** (occurrence within window).
- **Claimed results:** Feasibility + challenges documented; ablations over task settings, inputs, architectures.
- **GSE component:** tracking metrics / data pipeline (public dataset + code + metrics).
- **Why high value:** Public dataset, code, and *new evaluation metrics* for anticipation — the exact "predict what happens next from tracking/video" problem. mAP@δ vs. mAP@∞ is a useful precision-vs-recall framing GSE can borrow for any anticipatory tracking metric.

### 2.23 — 2503.19809v1 — "Simulating Tracking Data to Advance Sports Analytics Research"
- **Authors:** David Radke, Kyle Tilbury (2025) · https://arxiv.org/abs/2503.19809v1
- **Method (from abstract):** Collects **simulated soccer tracking data from the Google Research Football environment**, stored in a **schema representative of real tracking data**, with processes extracting high-level features and events. Includes examples of established tracking-data models to validate the simulated data.
- **Claimed results:** Demonstrates simulated data supports development of continuous-tracking models; addresses scarcity of public tracking data.
- **GSE component:** tracking metrics / data pipeline.
- **Why high value:** GSE's NGS-benchmarking is bottlenecked by tracking-data access. This paper gives the playbook: develop and *validate* tracking models on simulated data with a real-like schema, then port to real data. NFL analog: build the whole pipeline on simulated/college tracking before touching restricted NGS data.

### 2.24 — 2501.05873v1 — "Forecasting Soccer Matches through Distributions"
- **Authors:** Tiago Mendes-Neves et al. (2025) · https://arxiv.org/abs/2501.05873v1
- **Method (from abstract):** Forecasts soccer outcomes by forecasting **shot quantity and quality distributions**, integrating established **ELO ratings** with ML models. Motivated by the Springer Soccer Prediction Challenge (~$80B wagered globally in 2022 cited as context).
- **Claimed results:** Despite challenge constraints, the approach yields **positive returns taking advantage of established market odds** — i.e., a claimed market-beating result.
- **GSE component:** market/odds modeling.
- **Why high value:** A **claimed profitable-against-the-market** system built from distribution forecasting (not point estimates) + Elo — directly in GSE's wheelhouse and a concrete pattern to test: forecast the *distribution* of the game's key stat (shots; for NFL: EPA/play or scoring-margin distribution), then convert to prices and bet the discrepancies.

### 2.25 — 2411.17450v2 — "A Graph Neural Network deep-dive into successful counterattacks"
- **Authors:** Joris Bekkers, Amod Sahasrabudhe (2024) · https://arxiv.org/abs/2411.17450v2 · Open-source repo: all data + code + Python package for spatiotemporal→graph conversion
- **Method (from abstract):** **Gender-specific GNNs** modeling counterattack success probability, trained on **20,863 frames of synchronized on-ball event + spatiotemporal (broadcast) tracking data** (MLS 2022, NWSL 2022, internationals 2020–22). **Permutation Feature Importance** identifies top node features: byline-to-byline speed, angle to goal, angle to ball, sideline-to-sideline speed.
- **Claimed results:** Gender-specific GNNs beat architecturally identical gender-ambiguous models. Accompanied by an open-source Python package simplifying spatiotemporal→graph conversion, testing, validation, training, and prediction.
- **GSE component:** tracking metrics / data pipeline.
- **Why high value:** Public **data + code + a reusable Python package** for turning tracking data into graphs — infrastructure GSE can lift directly. The gender-specific-beats-generic finding is also a transferable lesson: train separate models across genuinely different game distributions (e.g., NFL vs. CFB) rather than one pooled model.

### 2.26 — 2409.04889v1 — "Moving from Machine Learning to Statistics: the case of Expected Points in American football"
- **Authors:** Ryan S. Brill, Ryan Yee, Sameer K. Deshpande, Abraham J. Wyner (2024) · https://arxiv.org/abs/2409.04889v1
- **Method (from abstract):** Diagnoses why ML-based **expected points (EP)** models fail: **selection bias** (good teams face different situations), **counter-intuitive overfitting artifacts**, **no uncertainty quantification**, and **ignored dependence structure** of play-by-play data. Proposes fixes including a novel widely-applicable method to mitigate overfitting: **using a catalytic prior to smooth ML models**.
- **Claimed results:** EP models accounting for these issues (see paper for comparisons).
- **GSE component:** engine ratings / calibration (EP is GSE's core currency).
- **Why high value:** Directly audits the exact model class GSE relies on (NFL expected points) and names four failure modes GSE should check its own EP model for. The **catalytic prior** — smoothing an ML model toward a simpler parametric prior — is a concrete regularization technique to implement and test.

### 2.27 — 2401.09940v2 — "Biases in Expected Goals Models Confound Finishing Ability"
- **Authors:** Jesse Davis, Pieter Robberechts (2024) · https://arxiv.org/abs/2401.09940v2
- **Method (from abstract):** Three hypotheses on why G–xG misleads: (1) high variance of shot outcomes + small samples makes deviations inadequate; (2) including *all* shots obscures elite finishers' skill; (3) **xG models contain biases from data interdependencies** that compress apparent skill. Fix: a technique from **AI fairness** to learn an xG model **calibrated for multiple subgroups of players**.
- **Claimed results:** Standard biased xG **underestimates Messi's GAX by 17%**; Messi's GAX is **27% higher** than the typical elite high-volume attacker — "even more exceptional than commonly believed."
- **GSE component:** calibration / QB & props.
- **Why high value:** Shows the standard G–xG comparison is systematically biased *against* the best finishers — the same math applies to any GSE "actual vs. expected" prop evaluation (QB CPOE, receiver YAC over expected). The fairness-based multi-subgroup calibration is a portable fix for any expected-stat model.

### 2.28 — 2307.16642v2 — "A Spectral Approach for the Dynamic Bradley-Terry Model"
- **Authors:** Xin-Yu Tian, Jian Shi, Xiaotong Shen, Kai Song (2023) · https://arxiv.org/abs/2307.16642v2
- **Method (from abstract):** **Kernel Rank Centrality**: a spectral ranker for time-varying pairwise comparisons — **kernel smoothing inside the Bradley–Terry model via a Markov chain**. Nonparametric (fewer assumptions, cheaper than MLE), allows **real-time ranking**. Derives the **asymptotic distribution** via a group-inverse technique → uniform entrywise expansion → a **new inferential method for predictive inference** (uncertainty on predictions).
- **Claimed results:** Predictive accuracy and uncertainty quantification demonstrated on **NBA** data; competitive with the "gold standard" Elo.
- **GSE component:** engine ratings.
- **Why high value:** A *nonparametric, real-time* dynamic rating with **proven uncertainty quantification** — GSE gets both a faster rating update and honest prediction intervals. Kernel smoothing over time is also a more principled alternative to ad-hoc recency weighting.

### 2.29 — 2302.09276v1 — "Transformer-Based Neural Marked Spatio Temporal Point Process Model for Football Match Events Analysis"
- **Authors:** Calvin C. K. Yeung, Tony Sit, Keisuke Fujii (2023) · https://arxiv.org/abs/2302.09276v1
- **Method (from abstract):** **Transformer-based Neural Marked Spatio-Temporal Point Process (NMSTPP)** built on the neural temporal point process (NTPP) framework for football event data — models *when, where, and what type* each event is, jointly. Proposes the **Holistic Possession Utilization Score (HPUS)** for possession analysis.
- **Claimed results:** Beats baseline prediction performance; average HPUS correlates significantly with teams' final ranking, average goals, and average xG **without using goal or shot-detail information**.
- **GSE component:** tracking metrics / new capability (neural point processes — flagged family adjacent to Hawkes processes).
- **Why high value:** Point processes are the right math for event streams (plays, passes, shots) — they model timing explicitly, which play-by-play models usually discard. HPUS predicting season outcomes *without goal data* suggests possession-structure alone carries most of the signal — a hypothesis GSE can test on NFL drive structure.

### 2.30 — 2208.08598v1 — "Using Conformal Win Probability to Predict the Winners of the Cancelled 2020 NCAA Basketball Tournaments"
- **Authors:** Chancellor Johnstone, Dan Nettleton (2022) · https://arxiv.org/abs/2208.08598v1
- **Method (from abstract):** **Conformal predictive distributions** to produce closed-form probabilities: tournament-entry probabilities and March Madness win probabilities from the cancellation point. **Conformal win probabilities** compared vs. linear and logistic regression on seven seasons of college basketball data.
- **Claimed results:** Conformal win probabilities **better calibrated** than linear/logistic alternatives, producing more accurate win-probability estimates **while requiring fewer distributional assumptions**.
- **GSE component:** calibration (conformal prediction — flagged method).
- **Why high value:** A second independent confirmation (with 2.7/SoftElo) that conformal methods beat parametric calibration on sports win probabilities. For GSE's CQR lane: conformal predictive distributions are a like-for-like replacement candidate for quantile regression, with finite-sample coverage guarantees.

### 2.31 — 2108.02419v1 — "Implementing the BBE Agent-Based Model of a Sports-Betting Exchange"
- **Authors:** Dave Cliff, James Hawkins, James Keen, Roberto Lau-Soto (2021) · https://arxiv.org/abs/2108.02419v1 · Source code freely available on GitHub
- **Method (from abstract):** **Bristol Betting Exchange (BBE)**: agent-based model simulating a contemporary **sports-betting exchange** (Betfair/Smarkets/Betdaq-style). Designed as a **synthetic data generator** for developing/testing betting strategies with ML. Three implementations compared: single-threaded Python, multi-threaded Python, and Python + OpenCL on a 640-core GPU (**~1000× faster** than single-threaded). Initially aimed at **in-play betting** simulation.
- **Claimed results:** Implementation comparison; GPU version enables large-scale strategy testing.
- **GSE component:** market/odds modeling (market microstructure — flagged area).
- **Why high value:** A public **exchange simulator** — GSE can test staking, market-making, and in-play strategies against synthetic order flow instead of risking real bankroll. The exchange-as-financial-market framing (aggregated anonymized orders, real-time book) is the market-microstructure lens GSE's odds modeling currently lacks.

### 2.32 — 2104.14012v1 — "Simplified Kalman filter for online rating: one-fits-all approach"
- **Authors:** Leszek Szczecinski, Raphaëlle Tihon (2021) · https://arxiv.org/abs/2104.14012v1
- **Method (from abstract):** Bayesian online rating as an **approximate Kalman filter**, generic across any skills→outcome model and across individual and team sports. Shows **Elo, Glicko, and TrueSkill are all instances** of this one-fits-all approach. Numerically compares known vs. new algorithms on synthetic and empirical data to find when the Bayesian gains actually materialize.
- **Claimed results:** Conditions under which Bayesian filtering beats simpler updates characterized empirically.
- **GSE component:** engine ratings (state-space models — flagged family).
- **Why high value:** Unifies GSE's rating zoo into one Kalman-filtering framework — one implementation, any likelihood, with uncertainty propagation built in. The honest comparison of *when the Bayesian machinery actually pays* prevents over-engineering.

### 2.33 — 2104.03252v2 — "Leaving Goals on the Pitch: Evaluating Decision Making in Soccer"
- **Authors:** Maaike Van Roy, Pieter Robberechts, Wen-Chi Yang, Luc De Raedt, Jesse Davis (2021) · https://arxiv.org/abs/2104.03252v2
- **Method (from abstract):** Two-stage framework: (1) learn a **Markov Decision Process** of a team's offensive behavior from **event-stream data** over two seasons; (2) apply **AI verification/reasoning techniques** to the MDP to answer **counterfactual** questions about decision efficacy.
- **Claimed results:** Key conclusion: **teams would score more goals if they shot more often from outside the penalty box in a small number of team-specific locations** — i.e., the analytics-driven decline in long shots is overdone.
- **GSE component:** engine ratings / new capability.
- **Why high value:** A reusable pattern — learn the behavioral MDP, then counterfactual-query it — applicable to NFL play-calling (run/pass, fourth-down, red-zone decisions). The contrarian finding itself is a warning about Goodhart-style overcorrection: when a metric (xG/shot) changes behavior, the behavior change can overshoot.

### 2.34 — 2010.12508v1 — "Beating the market with a bad predictive model"
- **Authors:** Ondřej Hubáček, Gustav Šír (2020) · https://arxiv.org/abs/2010.12508v1
- **Method (from abstract):** Proves it is **generally possible to make systematic profits with a completely inferior price-predicting model**. Key idea: alter the training objective to **explicitly decorrelate the model from the market**, exploiting inconspicuous biases in the market maker's pricing and profiting on the **inherent advantage of the market taker**. Connects to the Kelly criterion and portfolio optimization; proves desirability of the decorrelation objective across common market distributions; demonstrates viability on **real market data** (stock trading and sports betting).
- **Claimed results:** Theoretical proof + real-world market-data demonstration (see paper for numbers).
- **GSE component:** market/odds modeling. **Flagged: claims to beat betting markets.**
- **Why high value:** This inverts GSE's training paradigm: stop minimizing prediction error vs. outcomes; instead **train models to be decorrelated from the market price** and harvest the market taker's structural edge. If the proof's conditions hold in sports books, GSE's entire model-training objective function should change. Highest-leverage paper in the batch for the betting side.

### 2.35 — 2008.04216v3 — "Using Experts' Opinions in Machine Learning Tasks"
- **Authors:** Jafar Habibi, Amir Fazelinia, Issa Annamoradnejad (2020) · https://arxiv.org/abs/2008.04216v3
- **Method (from abstract):** General **three-step framework for injecting experts' insights** (expert opinions, polls, **betting odds**) into ML tasks, dismissing the purist "historical data only" stance. Case study: **NCAA men's basketball** game prediction (Kaggle competition setting); four concrete models. Finds past top solutions' performance looks like **chance, not stable skill**.
- **Claimed results:** Proposed models achieve **more stable results with lower average log loss (best 0.489)** vs. 2019 top solutions (>0.503); reached top 1% / 10% / 1% on 2017/2018/2019 leaderboards.
- **GSE component:** calibration / engine ratings.
- **Why high value:** A principled recipe for what GSE already does informally — blend market odds and expert signal into the model. The stability finding (top Kaggle solutions ≈ luck) is a calibration-culture lesson: optimize for *stable* log-loss, not leaderboard spikes. The three-step framework is directly implementable.

### 2.36 — 2002.04148v1 — "The role of intrinsic dimension in high-resolution player tracking data — Insights in basketball"
- **Authors:** Edgar Santos-Fernandez, Francesco Denti, Kerrie Mengersen, Antonietta Mira (2020) · https://arxiv.org/abs/2002.04148v1
- **Method (from abstract):** Applies **Hidalgo**, a Bayesian mixture model estimating **heterogeneous intrinsic dimension (ID)** within a dataset, to NBA player-movement and shot-chart tracking data. ID interpreted as variability/complexity of plays.
- **Claimed results:** ID **spikes 4–8 seconds into offensive possessions** then declines; **game-winners have larger ID** (more unpredictability, unique shot placements); higher ID in close-score-margin plays. Movement ID identifies phases: creating space, preparation/shooting, follow-through.
- **GSE component:** tracking metrics / new capability (information theory / TDA-adjacent — flagged family).
- **Why high value:** Intrinsic dimension is a genuinely novel descriptor for tracking data — a single number capturing play complexity/predictability. Testable hypotheses for NFL: do game-winning drives show higher ID? Does defensive ID predict stops? Cheap to compute from public tracking data.

### 2.37 — 1910.12337v1 — "Expected Hypothetical Completion Probability"
- **Authors:** Sameer K. Deshpande, Katherine Evans (2019) · https://arxiv.org/abs/1910.12337v1
- **Method (from abstract):** Built on **NFL Big Data Bowl tracking data**. Asks: "did the QB throw to the receiver most likely to catch it?" Core: a **Bayesian nonparametric catch-probability model** capturing complex interactions (receiver speed, ball distance, nearest-defender distance). The hard part: hypothetical-pass inputs are **unobservable** (can't see how open an untargeted receiver *would* have been). Solution: **impute the unobservable inputs and average predictions across imputations** → EHCP, tracking each receiver's completion probability evolving through the play under uncertainty.
- **Claimed results:** Framework + metrics (see paper for values).
- **GSE component:** tracking metrics / QB & props.
- **Why high value:** This is the methodological ancestor of NGS's completion-probability family, with the imputation trick spelled out — exactly the "how they calculate it" GSE asked about. The impute-and-average pattern generalizes to any counterfactual tracking question (expected yards if the RB cut left, etc.).

### 2.38 — 1906.11373v3 — "Unsupervised Methods for Identifying Pass Coverage Among Defensive Backs with NFL Player Tracking Data"
- **Authors:** Rishav Dutta, Ronald Yurko, Samuel Ventura (2019) · https://arxiv.org/abs/1906.11373v3
- **Method (from abstract):** Written when NFL released **Next Gen Stats tracking data publicly (Dec 2018)**. Engineers features distinguishing **man vs. zone coverage** from tracking data; applies **Gaussian mixture modeling** and **hierarchical clustering** — no manual labels. Cluster→coverage-type assignment via qualitative play analysis. Notes GMM **soft assignments** give more flexibility than hard clustering.
- **Claimed results:** Working unsupervised coverage annotation (exploratory; see paper).
- **GSE component:** tracking metrics.
- **Why high value:** A recipe for **label-free annotation of tracking data** — the bottleneck for every NGS-style metric GSE wants to replicate. Man/zone classification from pure movement features is directly reusable, and soft assignments handle the reality that coverage is a spectrum, not binary.

### 2.39 — 1706.02447v1 — "Luck is Hard to Beat: The Difficulty of Sports Prediction"
- **Authors:** Raquel YS Aoki, Renato M Assuncao, Pedro OS Vaz de Melo (2017) · https://arxiv.org/abs/1706.02447v1
- **Method (from abstract):** Quantifies prediction difficulty with a coefficient measuring distance between observed league results and **idealized perfectly-balanced competitions** — a luck-vs-skill decomposition. Data: **all games from 198 leagues, 1,503 seasons, 84 countries, 4 sports** (basketball, soccer, volleyball, handball). Plus a **probabilistic graphical model** learning team skills and decomposing luck/skill weights per game, with skill broken into team-characteristic factors.
- **Claimed results:** Luck substantially present even in the most competitive championships; **sophisticated complex feature-based models hardly beat simple models** at forecasting. NBA: **underdog win probability ≈ 0.36**, home advantage adds **0.09**.
- **GSE component:** engine ratings (foundational calibration of expectations).
- **Why high value:** Sets the **ceiling**: if luck dominates, complexity has diminishing returns — GSE should know its league-specific luck coefficient before investing in feature engineering. The 0.36/0.09 NBA numbers are sanity-check anchors for any basketball model, and the graphical-model decomposition is a template for NFL luck/skill splits.

### 2.40 — 1701.08055v1 — "Modelling Competitive Sports: Bradley-Terry-Élő Models for Supervised and On-Line Learning of Paired Competition Outcomes"
- **Authors:** Franz J. Király, Zhaozhi Qian (2017) · https://arxiv.org/abs/1701.08055v1
- **Method (from abstract):** Exploits the deep link between **Elo updates and Bradley–Terry models** to build a supervised-learning framework resembling **logistic regression, low-rank matrix completion, and neural networks**. Proposes **structured log-odds models**: probabilistic prediction of scores and W/D/L, batch and online learning, feature incorporation — without sacrificing BT parsimony or Elo's computational efficiency.
- **Claimed results:** On synthetic data and EPL outcomes, added expressivity yields the **best predictions reported in the state of the art, close to contemporary betting-odds quality**. **Flagged: near-Vegas-level claim.**
- **GSE component:** engine ratings.
- **Why high value:** The unification paper: Elo's speed + BT's statistical legitimacy + modern ML expressivity in one framework. If GSE's ratings are still heuristic-Elo-flavored, this is the upgrade path to feature-rich probabilistic ratings at the same computational cost.

### 2.41 — 1602.08754v2 — "Adjusting for Scorekeeper Bias in NBA Box Scores"
- **Authors:** Matthew van Bommel, Luke Bornn (2016) · https://arxiv.org/abs/1602.08754v2
- **Method (from abstract):** Models **per-scorekeeper bias and generosity** for subjective stats (**assists, blocks**) — scorekeepers are hired by the home team. Then improves the assist model with **optical tracking data** (2014–15): time of possession, player locations, distance traveled as spatiotemporal context. Produces **scorekeeper-adjusted season assist totals**.
- **Claimed results:** Quantified scorekeeper impact on P(assists) plus contextual effects (see paper for values).
- **GSE component:** calibration / data pipeline / new capability.
- **Why high value:** Directly relevant to GSE's data quality: **official stats are measured with biased instruments**. The fix — model the measurer, then debias with tracking context — applies to NFL (tackles, pressures, and charting stats are all scorer/chart-dependent). Any GSE prop model trained on raw official stats inherits this bias; this paper shows how to strip it.
