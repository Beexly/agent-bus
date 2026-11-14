---
source: "2016 Rajiv Shah Deep Learning Bball Trajectory UIUC .pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 4
model: deepseek/deepseek-v4.1-flash-1017
words: 7845
---

<NATIVE_REASONING>
We need answer to user. Need produce GSE+GSI frontier reasoning foundry. They provided paper pages. Need adhere exact XML sections and >=1000 words, no betting lines. Need deep multi-hop derivation, gray-zone audit. Need formal LaTeX, units, page citations, verbatim quotes. Need historical lineage etc. Need maybe answer is analysis of source paper? We need infer task: "DRIVE SOURCE ..." The prompt is system-like. Need respond with required XML sections. Must not mention spreads/totals/odds. Need avoid betting lines. Need cite [PAGE N] exact quotes. Need at least 1000 words across sections. Need formal equations with units and breakdown regimes. Need zero toy equations. Need state assumptions and singularity/breakdown regimes.

Need craft final. We need include sections exactly. Could include preamble maybe not needed. Need ensure no betting. Need discuss paper: RNN LSTM predicts 3pt shot success from trajectory. Need source operators/equations. Need derive AUC, cross entropy, LSTM, MDN, positional dataset. Need not invent fake ratios. Use formal equations with units, probability, information. Cite pages and quotes. Need mention "software: two-layer LSTM with peephole connections, 64 hidden units, seq length 12 ~0.5 s, Adam lr .005, dropout .6, batch 64". Need discuss "positional data XYZ + game clock". Baseline GLM/GBM results. Need note "at 8 feet RNN AUC .843 vs GLM .558 vs GBM .719". Need discuss AUC not accuracy. Need mention dataset >20k, 631 games, made 35.7%, optical tracking 25 Hz. Need formulate.

Need think through deep multi-hop derivation: input sequence x_t = (X,Y,Z,clock) at 25Hz. LSTM state. Softmax output p_t = P(make | x_{1:t}). Cross entropy. AUC formula via Mann-Whitney integral. MDN tri-variate Gaussian mixture for trajectory prediction. Need mention not physics-based. Need source quotes. Need exact quotes with page markers. We need use provided text quotes. Need cite exact [PAGE 2] etc. Could quote "The tracking system records the spatial position of the ball and players on the court 25 times a second during a game." [PAGE 2]. "two layered LSTM using peephole connections" [PAGE 2]. "three mixtures of tri-variate Gaussians" [PAGE 2]. "AUC can range from 0.5 (pure chance) to 1.0 (ideal classification)." [PAGE 2]. "The RNN is able to achieve an AUC of 0.843 when predicting a make or miss using half a second of data with the ball 8 feet away from the basket." [PAGE 4]. "The percentage of made shots in the dataset is 35.7%" [PAGE 2]. "25 times a second" [PAGE 2]. "over 20,000 three point shot attempts from 631 games" [PAGE 2]. "The data is split into a train/test datasets using a split of 80/20" [PAGE 2]. "The network architecture uses 2 layers with a LSTM of 64 hidden units, Adam optimizer with a learning rate of 0.005, dropout of 0.6, and a batch size of 64." [PAGE 3]. "The RNNs are fed a sequence length of 12, which represents about a half a second of time." [PAGE 3]. "The models are capable of learning the trajectory of a basketball without any knowledge of physics." [PAGE 1]. "only positional data, these models outperform the feature engineered GBM models" [PAGE 3]. "Close inspection of most ball trajectories shows they are not entirely smooth, but can involve ”dips” or noise." [PAGE 3]. "SportVU data is simply messy and imprecise" quote [PAGE 3]. Need maybe "The MDN consists of three mixtures of tri-variate Gaussians and is trained via cross entropy." [PAGE 2]. Good.

Need formal equations. Need state units. Let coordinates X,Y,Z meters (or feet? Source uses feet, but can say source units feet; SI conversion if needed 1 ft = 0.3048 m). Game clock seconds. Sampling interval Δt = 1/25 s = 0.04 s, 40 ms. Sequence length L=12 => 0.48 s. Height threshold 8 ft = 2.4384 m, range 22 ft = 6.7056 m. Need mention "three point plays as defined by ball movement over at or greater than 8 feet in height and over a range of 22 feet" [PAGE 2]. Formal.

AUC equation: AUC = ∫_0^1 TPR(FPR^{-1}(u)) du = P(S_make > S_miss) + 0.5P(equal) for independent pairs. Units dimensionless. Assumptions scores calibrated? AUC measures rank. Breakdown: if positives/negatives imbalanced, AUC not accuracy; if temporal autocorrelation, confidence intervals need cluster bootstrap; if scores non-stationary. Good.

Cross entropy: L = -1/N Σ [y_i log p_i + (1-y_i) log(1-p_i)] nats (if natural log; bits if log2). Need mention softmax? For binary maybe sigmoid; source says softmax and cross entropy. We can formalize softmax over two classes p_k = exp(z_k)/Σ_j exp(z_j). Cross entropy H = -Σ y_k log p_k nats. The MDN loss: L_MDN = -1/N Σ log Σ_{m=1}^3 π_m N(x_{t+1}; μ_{m,t}, Σ_{m,t}) nats. Need include tri-variate Gaussian. Units: log probability density has units of inverse volume if continuous, cross entropy terms differ by constant; use normalized coordinates to make dimensionless. Important formal. Need mention "MDN trained via cross entropy" [PAGE 2].

LSTM equations: f_t = σ(W_f x_t + U_f h_{t-1} + b_f + P_f ⊙ c_{t-1}) etc peephole. i_t, o_t, c_t = f_t ⊙ c_{t-1} + i_t ⊙ tanh(...), h_t = o_t ⊙ tanh(c_t). Units: states dimensionless; inputs normalized. Sequence. Assumptions: stationary-ish, no physics prior, clock included. Breakdown: variable frame rate/missing detections; peepholes memory; overfitting with 40MB, 20k shots; noisy tracking; regime where ball near rim <2 ft? Source says RNN not improve at 2 feet? Actually baseline GBM at 2 ft .942 vs RNN .93, so at 2 ft GBM better. Need mention. At 2 feet baseline full feature GBM 0.942 vs RNN .93. At 3 ft RNN .913 vs GBM .902; at 4 .906 vs .848; etc. Need table maybe.

Need RETROCAUSAL_GENEALOGY: historical/scientific lineage. RNN/LSTM lineage: Graves handwriting, Schmidhuber, Wang/Zemel play classification, Kaggle augmentation, Beuoy ShArc physics. Multi-week traps: leakage from play-by-play join; trajectory truncation at 4 ft (Figure 2 says only prior to distance 4 ft? "data in figure only shows trajectory prior to a distance of four feet from basket" [PAGE 2]) maybe train/test split random vs game-level; target leakage via game clock? Need discuss. "Multi-week traps" means long-horizon research traps? Need mention "do not treat AUC as causal; do not compare to GBM with default hyperparams; do not conflate 35.7% base rate with calibration; do not ignore SportVu noise; do not assume test set same season; do not over-interpret MDN as physics." Need lineage: sequence modeling from handwriting, motion, sports analytics. Need no betting.

Need RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Need interpret: In crisis, habit regression vs counter-trap vs clock. We need discuss model/human analyst behavior under uncertainty. Could frame as recursive ToM: analyst predicting shot success, model predicting trajectory, opponent? Need not betting. "Crisis habit regression" maybe when under pressure, humans regress to static feature models? Need discuss how RNN captures sequence but can overfit; counter-trap = feature engineering or physics model; clock = game clock variable could be shortcut/leakage. Need mention recursive theory of mind: model's belief state h_t, analyst's belief about model reliability, and evaluation protocol's belief about generalization. Need map to paper: RNN with game clock included; game clock can encode late-game heuristics? But shot success not dependent on clock except context. Need gray-zone: game clock included in input; not a physics variable; could encode shot selection/trajectory? At 25 Hz, 0.5s window, game clock changes slowly, likely not predictive except period boundaries. But include as variable. Need counter-trap: static GBM with full features is strong at close distance (2 ft .942), RNN only positional at 2 ft .93; so don't blindly choose sequence. Clock trap: sequence length 12 at 25 Hz = 0.48s; if sampling rate different, "about half a second" breaks. Need mention "clock" as game clock vs sampling clock; avoid conflating. Good.

Need CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Need discuss paper's physical constraints: ball trajectory under gravity, drag, Magnus, buoyancy (source mentions Beuoy four forces). Need formal projectile with drag/Magnus? Need cite [PAGE 3] "four main forces on a ball: gravity, buoyancy, drag, and the magnus effect." Need equations. Need state veto: if trajectory violates kinematics/invariants, model prediction should be vetoed. Need biomechanical: release angle, velocity, spin. Weather: indoor NBA arenas, no weather; but air density/humidity could affect drag minimally; not in data. Need "veto proof" maybe show physical layer can overrule ML when tracking artifacts. Need formal: m a = F_g + F_b + F_d + F_M. Units N. Drag F_d = -1/2 ρ C_d A ||v|| v. Magnus F_M = 1/2 ρ C_L A ||v|| (ω × v)/||ω||? Need correct. Buoyancy F_b = -ρ_air V g. Gravity m g. Need state breakdown: high velocity, spin, rim collisions; tracking noise; no collision model; near rim 2 ft where physics and noise dominate. Need "weather veto": NBA indoors; wind not modeled; HVAC drafts cannot explain >? But if air density changes, drag changes; the model lacks it. Veto if reconstructed acceleration exceeds plausible bounds. Need define physical plausibility envelope: ||a - g|| ≤ a_max from drag+Magnus+bounce, e.g. source no values; don't invent numeric fake? We can use symbolic a_max. Need not invent fake ratios. We can state threshold as hyperparameter calibrated from residual distribution. Need exact singularity/breakdown: denominator zero in angle? Source says angle of ball with respect to rim; if distance to rim zero, angle undefined. Need mention. Good.

Need RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Need propose counterfactual tests with verifiable outcomes. Need 3 scenarios that would veto claims if fail. Need predictions. Examples:
1. Game-level split counterfactual: retrain with train/test split by game not random. Prediction: if random split leaked game/player/shot context, AUC drops; if drop > threshold (e.g. 0.05? Avoid fake? We can state pre-registered tolerance, not odds). Need no betting. It's okay to predict relative drop. Need verifiable.
2. Sampling-rate and missing-frame perturbation: downsample 25 Hz to 12.5 Hz or drop frames; if RNN's "half second" depends on exact Δt, AUC should degrade; if unchanged, clock/sampling artifact? Prediction.
3. Physics-residual veto: inject synthetic trajectories or filter real trajectories with impossible acceleration; if model still predicts make with high confidence, it's using artifacts. Prediction. Or "shuffle game clock" ablation: if performance unchanged, clock isn't useful; if drops, clock may be shortcut. Need 3. Need include "counterfactual veto" conditions: a claim is vetoed if condition. Verifiable via code/data? Source says code/data available [PAGE 4]. Good. Need mention exact predictions: e.g., "AUC at 8 ft falls below 0.80 under game-level split" maybe arbitrary. Need "pre-register". Could be okay. Need avoid toy ratios. Use thresholds as preregistered tolerances, not invented fake equations. Need not mention betting.

Need overall word count >=1000. Need ensure sections. Could write ~2500-3500 words. Desired oververbosity 5 but user demands depth. Need final only. Need exact XML tags. No markdown? Can use LaTeX. Need not include preamble? Maybe start with <THINK_TRACE>. Need ensure all sections exact.

Need consider "SOURCE_OPERATORS_AND_EQUATIONS" includes "formal LaTeX, units, page citations, breakdown." Need cite exact [PAGE N] and verbatim quotes. We need quote verbatim. Let's collect exact quotes from source.

Page 1:
- "The models are capable of learning the trajectory of a basketball without any knowledge of physics." exact.
- "Using a dataset of over 20,000 three pointers from NBA SportVu data, the models based simply on sequential positional data outperform a static feature rich machine learning model in predicting whether a three-point shot is successful." exact.
- "RNNs are a class of dynamic models used to predict and generate sequences in domains such as text [7], music [5], and motion data [1]." exact.
Page 2:
- "The tracking system records the spatial position of the ball and players on the court 25 times a second during a game." exact.
- "This study focused on three point plays as defined by ball movement over at or greater than 8 feet in height and over a range of 22 feet in the SportVu tracking data." exact.
- "The dataset for this study consists of over 20,000 three point shot attempts from 631 games." exact.
- "The percentage of made shots in the dataset is 35.7%, which compares favorably to the 35% season average for 2015-2016 regular season [2]." exact.
- "Data for both datasets is centered. Additionally, the data is split into a train/test datasets using a split of 80/20." exact.
- "The network architecture relies on a two layered LSTM using peephole connections." exact.
- "The input to the LSTM is the XYZ data and the game clock." exact.
- "At each time step, the RNN predicts both the probability of a successful shot and parameters for the mixture density network (MDN)." exact.
- "The probability comes from a softmax layer and is trained based on cross entropy error." exact.
- "The MDN consists of three mixtures of tri-variate Gaussians and is trained via cross entropy." exact.
- "AUC can range from 0.5 (pure chance) to 1.0 (ideal classification)." exact.
Page 3:
- "The goal is to predict whether a shot is a make or miss between two to eight feet from the basket." exact.
- "A logistic regression using Elastic Net with an alpha of 0.5 resulted in an AUC of 0.53. A gradient boosted trees model with 50 trees resulted in an AUC of 0.80 as shown in Table 1." exact. Actually page 3 says first set only XYZ at one foot above basket? Table 1 baseline XYZ models at 1 foot. Good.
- "The RNNs are fed a sequence length of 12, which represents about a half a second of time." exact.
- "The network architecture uses 2 layers with a LSTM of 64 hidden units, Adam optimizer with a learning rate of 0.005, dropout of 0.6, and a batch size of 64." exact.
- "The RNN is able to improve from baseline models at all distances except 2 feet." exact.
- "Only using positional data, these models outperform the feature engineered GBM models." exact.
- "At 4 feet we could reach an AUC of 0.870 with just half the training data versus 0.906 with the full training set." exact? Source: "we found that at 4 feet we could reach an AUC of 0.870 with just half the training data versus 0.906 with the full training set." exact.
- "Close inspection of most ball trajectories shows they are not entirely smooth, but can involve ”dips” or noise." exact (quotes curly).
- "His work analyzed over 30,000 free throw shots with a physics based model that looked at four main forces on a ball: gravity, buoyancy, drag, and the magnus effect." exact.
- "SportVU data is simply messy and imprecise" exact from quote? It says "the SportVU data is simply messy and imprecise (to say nothing of my own imperfect methodologies for deciphering said data)." We can quote.
Page 4:
- "The RNN is able to achieve an AUC of 0.843 when predicting a make or miss using half a second of data with the ball 8 feet away from the basket." exact.
- "This outperforms the traditional approaches which had an AUC of 0.558 and 0.719 for a general linear model and a gradient boosted machines, respectively." exact.
- "Future work will likely study other motion tracking tasks, such as play classification or even the individual style of a player." exact.
- "The results here clearly indicate RNNs offer value." exact.

Need use citations. Good.

Need perhaps include "gray-zone audit" in THINK_TRACE: identify ambiguous claims: "outperform static feature rich" but baseline uses default hyperparams and full features; at 2 ft GBM better; comparison not apples-to-apples? We can discuss. "Feature engineering" vs sequence; GBM default; RNN not optimized; dataset incomplete; 80/20 split unspecified random/game; AUC at 8 ft .843; baseline GBM at 8 ft .719 and GLM .558; RNN is better. Need note "Table 3 positional RNN at 2 ft .93 vs GBM full feature .942" so exception. "The RNN is able to improve from baseline models at all distances except 2 feet." exact. Need mention "baseline at 2 ft .942 vs RNN .93" from tables. Good.

Need formal LaTeX. Need maintain "SI/information/probability units." Use meters, seconds, nats/bits, dimensionless AUC. Need state "source uses feet; converted". Need maybe "1 ft = 0.3048 m". Need include equations with units. Use \mathrm{nats} and \mathrm{bits}. For continuous density, log density has units; normalized coordinates makes dimensionless. Need mention. Need not invent fake ratios. It's okay to use formal equations. Need "singularity/breakdown regimes" exact. We'll include "Breakdown regimes" lists in each relevant section.

Need be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." Our equations are real: LSTM, cross entropy, AUC, projectile. Good.

Need no betting lines. Avoid words "odds" maybe not. "moneylines" no. "spreads" no. "totals" no. Good.

Potential issue: "RLVR" maybe user expects reinforcement learning with verifiable rewards. We can define as "reinforcement-learning/verifiable-reward style counterfactual veto tests" but no need. Use section.

Need ">=1,000-word depth across these exact XML sections" Means total across sections? Need >1000. We can write ~3000. Need not overdo but enough.

Need structure:

<THINK_TRACE>
- State task: audit paper. Multi-hop derivation: data -> sequence -> LSTM -> probability -> AUC; baseline; MDN auxiliary. Gray-zone: "without physics" but MDN and added variables; "feature rich" baseline default; "25 times a second" sampling; "over 20k" incomplete; "80/20" split unspecified; "AUC .843 at 8 ft" not accuracy; "35.7%" base rate; "2 ft exception"; "sequence length 12 half second" depends on 25 Hz; "game clock" inclusion; "trajectory until 4 ft" figure; "no physics" conflicts with physics-based variables in baseline? Need discuss. Need cite quotes. Mention exact markers. Need 400+ words. Good.

<SOURCE_OPERATORS_AND_EQUATIONS>
- Define coordinate/time units. Δt=0.04 s. L=12 => 0.48 s. Height/range. Sequence. LSTM equations. Softmax/cross entropy. AUC. MDN. Baseline GLM/GBM. Results table maybe. Breakdown regimes. Page citations and quotes. Need mention source uses "two layered LSTM using peephole connections" [PAGE 2], "64 hidden units..." [PAGE 3]. Good. Use equations.

<RETROCAUSAL_GENEALOGY>
- Lineage: Graves handwriting XY; Schmidhuber; Wang/Zemel; Beuoy ShArc; Kaggle augmentation. Multi-week traps: join leakage, game-level split, trajectory truncation, default hyperparams, season distribution, noisy tracking, MDN vs classifier conflation, hyperparameter search. Need cite. Good.

<RECURSIVE_THEORY_OF_MIND>
- Recursive: model belief state h_t; analyst belief; evaluation protocol. Crisis habit regression: under noise, analysts regress to static feature models or hand physics; counter-trap: over-trust RNN; clock: game clock vs sampling clock; sequence length half-second; use clock ablation. Need discuss. Good.

<CROSS_LAYER_VETO_ADJUDICATION>
- Physical veto: projectile with gravity, buoyancy, drag, Magnus. Equations. Biomechanical: release, spin, angle; weather indoor. Veto if acceleration residual exceeds calibrated a_max or angle undefined at rim center. Need cite four forces. Breakdown: rim collisions, tracking noise, missing frames. Good.

<RLVR_COUNTERFACTUAL_VETOES>
- 3 scenarios:
1. Game/shot-group split. Prediction: AUC drop if leakage; veto if drop exceeds pre-registered tolerance. Need include exact prediction? Maybe "at 8 ft, source AUC .843; if game-level split yields .70 or lower, the headline is vetoed" but is that arbitrary? It's a threshold. Could say "pre-register a minimum acceptable AUC of 0.80 at 8 ft" because source claims .843. If below .80, claim of robust predictive value vetoed. But 0.80 arbitrary; still verifiable. Maybe better "AUC must remain meaningfully above GBM .719; if it falls below .719, the comparative claim is vetoed." That's grounded. Good.
2. Sampling clock ablation/downsample. Prediction: performance should degrade smoothly with missing frames; if unchanged, model uses clock/position artifact. Veto if .843 unchanged under shuffled game clock? Hmm.
3. Physics residual injection. Prediction: model confidence should drop on impossible trajectories; if not, model not learning physics-consistent trajectory. Veto if high confidence. Need "verifiable" via synthetic impossible trajectories. Good.
Need mention code/data available [PAGE 4] "download the data and the model". Verifiable.

Need maybe include "RLVR" means "counterfactual reward if model fails veto." Fine.

Need final answer only. Need ensure XML tags exact. Use no markdown? Can include LaTeX. Fine.

Need word count. Let's write expansive but not too verbose. Need maybe 2500 words. Let's draft carefully.

Need "THINK_TRACE" with >=400 words. Let's ensure. Use precise citations.

Potential issue: The source text says "The data in the figure only shows the trajectory prior to a distance of four feet from the basket." Wait "prior to a distance of four feet from the basket" ambiguous: figure shows trajectory until ball is within 4 feet? It says "Trajectory until the basketball i within 4 feet of the basket" in figure caption. Actually page 2: "Figure 2 shows examples of trajectories in our dataset. The data in the figure only shows the trajectory prior to a distance of four feet from the basket. The height refers to the distance above the basketball rim. Additionally, the X and Y coordinate are combined into a single distance." Figure caption: "Examples of basketball trajectories in the datasetTrajectory until the basketball i within 4 feet of the basket". It may mean figure shows trajectory up to within 4 ft. Need not overclaim. We can say figure visualization truncates/only shows prior to 4 ft. Good.

Need formal equations with page citations. Let's plan equations:

Coordinate vector:
\[
\mathbf{x}_t=(X_t,Y_t,Z_t,c_t)\in \mathbb{R}^4,\quad t=1,\ldots,L,\quad \Delta t=1/25\,\mathrm{s}=0.04\,\mathrm{s}
\]
where X,Y,Z in m (source ft), c_t in s. Sequence length L=12 -> T=0.48 s. Source quote [PAGE 3]. Height threshold:
\[
Z_{\text{3pt}}\ge 8\,\mathrm{ft}=2.4384\,\mathrm{m},\quad r_{xy}\ge 22\,\mathrm{ft}=6.7056\,\mathrm{m}
\]
Need careful: "over at or greater than 8 feet in height and over a range of 22 feet" not exactly range? Fine.

LSTM:
\[
f_t=\sigma(W_f \mathbf{x}_t+U_f h_{t-1}+b_f+P_f\odot c_{t-1})
\]
\[
i_t=\sigma(W_i \mathbf{x}_t+U_i h_{t-1}+b_i+P_i\odot c_{t-1})
\]
\[
o_t=\sigma(W_o \mathbf{x}_t+U_o h_{t-1}+b_o+P_o\odot c_{t})
\]
\[
\tilde c_t=\tanh(W_c \mathbf{x}_t+U_c h_{t-1}+b_c)
\]
\[
c_t=f_t\odot c_{t-1}+i_t\odot \tilde c_t,\quad h_t=o_t\odot\tanh(c_t)
\]
Peephole source [PAGE 2]. Units: h,c dimensionless; W etc dimensionless after normalization; b dimensionless. Need maybe peephole equation uses c_{t-1} for f,i and c_t for o; okay.

Softmax:
\[
p_t(k)=\frac{\exp(z_{t,k})}{\sum_{j\in\{\text{make},\text{miss}\}}\exp(z_{t,j})},\quad k\in\{\text{make},\text{miss}\}
\]
\[
\mathcal{L}_{CE}=-\frac{1}{N}\sum_{n=1}^N\sum_{k} y_{n,k}\log p_{n,k}\quad [\mathrm{nats}]
\]
or bits with log2. Source [PAGE 2].

AUC:
\[
\mathrm{AUC}=\int_0^1 \mathrm{TPR}\big(\mathrm{FPR}^{-1}(u)\big)\,du = \Pr(S_{\text{make}}>S_{\text{miss}})+\frac{1}{2}\Pr(S_{\text{make}}=S_{\text{miss}})
\]
dimensionless. Source [PAGE 2]. Need note scores can be p_t at a chosen t or final t; source uses classification model AUC. Good.

MDN:
\[
p(\mathbf{x}_{t+1}\mid \mathbf{x}_{1:t})=\sum_{m=1}^{3}\pi_{m,t}\,\mathcal{N}\big(\mathbf{x}_{t+1};\boldsymbol{\mu}_{m,t},\boldsymbol{\Sigma}_{m,t}\big)
\]
\[
\mathcal{L}_{MDN}=-\frac{1}{N}\sum_n \log p(\mathbf{x}_{n,t+1}\mid \mathbf{x}_{n,1:t})
\]
Tri-variate; source [PAGE 2]. Units: if coordinates normalized dimensionless; else log density has unit inverse volume, cross entropy offset. Good.

Baseline:
GLM logistic:
\[
\Pr(y=1\mid \mathbf{f})=\sigma(\beta_0+\boldsymbol{\beta}^\top \mathbf{f})
\]
Elastic net penalty:
\[
\lambda[\alpha\|\beta\|_1+(1-\alpha)\|\beta\|_2^2]
\]
with alpha=0.5 source [PAGE 3]. GBM additive:
\[
F_M(\mathbf{f})=F_0(\mathbf{f})+\sum_{m=1}^{M}\nu h_m(\mathbf{f}),\quad M=50
\]
source [PAGE 3]. Need not overdo. Maybe include table of AUC values. Use source table. Table:
Distance 2 3 4 5 6 7 8
GLM full feature .875 .807 .721 .659 .604 .583 .558
GBM full .942 .902 .848 .796 .746 .742 .719
RNN positional .93 .913 .906 .880 .873 .841 .843
Need cite [PAGE 3] for tables. Note at 2 ft GBM .942 > RNN .93. At 8 ft RNN .843 > GBM .719. Good.

Breakdown regimes: missing frames, coordinate system, normalization, angle singular at rim center, class imbalance, random split, hyperparam defaults, MDN vs classifier. Need mention exactly.

Need "CROSS_LAYER_VETO_ADJUDICATION" equations:
\[
m\mathbf{a}=m\mathbf{g}+\mathbf{F}_b+\mathbf{F}_d+\mathbf{F}_M
\]
\[
\mathbf{F}_b=-\rho_{\text{air}}V\mathbf{g},\quad \mathbf{F}_d=-\frac12\rho_{\text{air}}C_d A\|\mathbf{v}\|\mathbf{v},\quad \mathbf{F}_M=\frac12\rho_{\text{air}}C_L A\|\mathbf{v}\|(\boldsymbol{\omega}\times\mathbf{v})/\|\boldsymbol{\omega}\|
\]
Need check Magnus formula dimension and direction. Standard: F_M = (1/2) ρ A C_L v^2 (ω × v)/|ω × v|? There are variants. To avoid incorrect, use general:
\[
\mathbf{F}_M = \frac{1}{2}\rho_{\text{air}} A C_M \|\mathbf{v}\| (\boldsymbol{\omega}\times \mathbf{v})
\]
Units: ρ kg/m3, A m2, C dimensionless, v m/s, ω rad/s, cross product m/s^2? Wait ω×v has units (1/s)*(m/s)=m/s^2; multiply ρ A v gives kg/m3*m2*m/s*m/s^2 = kg m/s^3? Not force? Let's derive: ρ A v^2 has kg/m3*m2*m2/s2 = kg m/s2 = N. To include spin, use coefficient and direction unit vector: F_M = (1/2)ρ A C_L ||v||^2 \hat{\omega}\times\hat{v}. That is N. Good. Use:
\[
\mathbf{F}_M=\frac12\rho_{\text{air}} A C_L \|\mathbf{v}\|^2\,\hat{\boldsymbol{\omega}}\times\hat{\mathbf{v}}
\]
where hats unit vectors. Units N. Good. Drag:
\[
\mathbf{F}_d=-\frac12\rho_{\text{air}} C_d A \|\mathbf{v}\|\mathbf{v}
\]
units N. Buoyancy N. Good.

Need veto residual:
\[
r_t=\left\|\mathbf{a}_t-\mathbf{g}-(\mathbf{F}_b+\mathbf{F}_d+\mathbf{F}_M)/m\right\|
\]
units m/s². If r_t > a_max (calibrated), veto. Need mention source doesn't provide a_max; must calibrate from clean trajectories. Good.

Need "weather" indoor: NBA arenas; no direct weather layer. Air density ρ_air depends on temperature/humidity/pressure; if not recorded, small but could affect drag. Veto if residual correlated with venue/date? Source no weather. Need mention.

Need "biomechanical" release: ball release from player; source only ball tracking, no player biomechanics. Need state if no release pose, model cannot distinguish shooter; but shot success depends on release. The RNN uses trajectory after release, so biomechanics implicit. Veto if missing release time. Good.

Need "Recursive theory of mind" maybe:
- Model's belief state h_t is recursive: h_t = f(h_{t-1}, x_t). It doesn't represent opponent's belief; only ball state.
- Analyst's recursive model: P(analyst believes model will generalize | evidence). Need maybe "crisis habit regression" as under distribution shift, humans fall back to simple static GLM/GBM and ignore sequence; "counter-trap" is to overfit RNN; "clock" is game clock variable. Need include "multi-week traps" maybe in retrogenealogy. Need good.

Potential problem: User says "GSE + GSI Frontier Reasoning Foundry" maybe expects "GSE" = ground source evidence? Need produce exactly. We can include a short opening? Maybe not. The final should be XML only. Use no extra text outside. Fine.

Need mention "ZERO BETTING LINES" no lines. Avoid "line" word? "baseline" okay. "moneylines" no. "odds" no. "spread" no. Good.

Need "exact singularity/breakdown regimes" each equation. We can bold "Breakdown regimes" in paragraphs.

Need not mention "weather veto proof" maybe "indoor weather layer is weak; no wind in SportVu; HVAC not modeled." Need cite no weather source? Source doesn't mention weather. We can state "the source does not provide weather variables" and cite page 2 data variables. That is okay. Need not invent quote. "The first dataset consists of only the X, Y, Z, and game clock variables" [PAGE 2]. This supports no weather. Good.

Need maybe mention "Model uses game clock not shot clock?" Source says game clock. It could be game clock, not shot clock. Need be precise. "game clock variables" [PAGE 2]. Good.

Need "retrocausal genealogy" word: historical lineage from Graves to paper. Need mention "Graves who uses RNNs to develop predictions on handwriting [3]" [PAGE 1]. "Wang unsuccessful [12]" [PAGE 1]. "Beuoy ShArc [6]" [PAGE 3]. "Kaggle winner [11]" [PAGE 3]. Good.

Need "RLVR" maybe define: "Verifiable counterfactual reward: a claim survives only if the model passes a held-out perturbation with a pre-registered predicate." Good.

Need consider "source pages provided cite exact [PAGE N] markers and verbatim quotes." We need quote exact with [PAGE N]. We can cite same page multiple times. Good.

Need ">=1,000-word depth across exact XML sections" We can mention word count? No. Just ensure.

Let's write final with all sections. Need careful XML: no unescaped &? LaTeX uses & maybe in equations not XML? In XML, & must be escaped if not CDATA. But final text may include & in equations? We can avoid & or use \&? Actually XML parser might treat & as entity. To be safe, avoid ampersand in text. In LaTeX equations, avoid & alignment. Use \quad not &. Use "and" instead of &. Need avoid "<" and ">" in text? XML tags use < >; in text, ">" okay? "<" would be tag. In equations, use \le, \ge. Avoid raw "<" signs. Use \Pr(S_{\text{make}}>S_{\text{miss}}) includes >; > is okay in XML text? It is allowed except sequence "]]>". "<" not. Use \ge. Good. Use "≤" maybe okay. Avoid ampersand. Need not use CDATA. Use "and" not "&". Good.

Need avoid "R&D"? no.

Need maybe use "PAGE 2" markers exactly as [PAGE 2]. Good.

Need final. Let's compose.

Need ensure word count. We'll write about 3000 words. Let's draft.

Potential issue: equations with \text{make} and \text{miss} okay. Use \[
...
\]. XML text includes backslashes okay.

Need "SI/information/probability units": Write units after equations. Good.

Need "assumptions and exact singularity/breakdown regimes." We'll include "Assumptions" and "Breakdown" subsections in SOURCE. Good.

Let's draft in final.
</NATIVE_REASONING>

<THINK_TRACE>
The source is a four-page KDD-style paper that compares a two-layer LSTM sequence model against static GLM/GBM baselines for classifying three-point shot outcomes from SportVu ball-tracking coordinates. The core multi-hop derivation is: optical tracking produces a sampled trajectory; the trajectory is represented as a sequence of coordinates plus game clock; the LSTM updates a hidden state over that sequence; a softmax head emits a make/miss probability; the probability is evaluated by AUC; and an auxiliary mixture-density head models the next trajectory point. The paper’s central claim is stated on [PAGE 1]: “The models are capable of learning the trajectory of a basketball without any knowledge of physics.” The comparative claim is also on [PAGE 1]: “Using a dataset of over 20,000 three pointers from NBA SportVu data, the models based simply on sequential positional data outperform a static feature rich machine learning model in predicting whether a three-point shot is successful.”

The gray-zone audit begins with the word “outperform.” The RNN does outperform the full-feature baseline at most distances, but the paper itself says: “The RNN is able to improve from baseline models at all distances except 2 feet” [PAGE 3]. Table 2 and Table 3 show the exception clearly: at 2 feet the full-feature GBM has AUC 0.942 while the positional RNN has 0.93 [PAGE 3]. So the safe claim is distance-conditioned superiority, not unconditional superiority. The second gray zone is “feature rich.” The baseline uses a GLM with Elastic Net alpha 0.5 and a gradient boosted trees model with 50 trees [PAGE 3], but the paper says the classifier parameters “relied on the default values and were not optimized” [PAGE 2]. Thus the comparison is not a fully tuned GBM versus a fully tuned RNN; it is a rough baseline versus a partially optimized RNN. The third gray zone is “without any knowledge of physics.” The classifier input is only XYZ and game clock, but the baseline adds distance-to-rim, time difference, and angle variables [PAGE 2], and the auxiliary MDN uses “three mixtures of tri-variate Gaussians” [PAGE 2]. The RNN is not physics-informed, but it is also not purely positionless: it receives a half-second sequence whose geometry implicitly encodes projectile motion.

The fourth gray zone is evaluation. AUC is a rank statistic, not calibration and not accuracy. The paper states: “AUC can range from 0.5 (pure chance) to 1.0 (ideal classification)” [PAGE 2]. A model with AUC 0.843 at 8 feet [PAGE 4] may still be poorly calibrated at the 35.7% make rate [PAGE 2]. The fifth gray zone is the split: “the data is split into a train/test datasets using a split of 80/20” [PAGE 2], but the text does not specify whether the split is shot-level, player-level, or game-level. If shots from the same game, player, or possession appear in both train and test, the AUC may be optimistic because of shared context. The sixth gray zone is sampling: “The tracking system records the spatial position of the ball and players on the court 25 times a second during a game” [PAGE 2], and “The RNNs are fed a sequence length of 12, which represents about a half a second of time” [PAGE 3]. At 25 Hz, 12 samples is 0.48 s, not exactly 0.5 s. Any change in frame rate or missing frames changes the physical duration of the input window. The seventh gray zone is noise: “Close inspection of most ball trajectories shows they are not entirely smooth, but can involve ”dips” or noise” [PAGE 3], and the quoted Beuoy explanation says “the SportVU data is simply messy and imprecise” [PAGE 3]. This means the model may learn tracking artifacts as well as trajectory physics. The final gray zone is the “game clock” input: including a clock variable is not automatically a physics feature; it can encode period, late-game context, or data-collection regime, and must be ablated.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source uses SportVu coordinates in feet and a sampling rate of 25 Hz. Converted to SI, one sample interval is
\[
\Delta t=\frac{1}{25}\,\mathrm{s}=0.04\,\mathrm{s}=40\,\mathrm{ms}.
\]
The source says: “The tracking system records the spatial position of the ball and players on the court 25 times a second during a game” [PAGE 2]. A sequence of length 12 therefore spans
\[
T=L\Delta t=12(0.04\,\mathrm{s})=0.48\,\mathrm{s},
\]
consistent with the paper’s statement that sequence length 12 “represents about a half a second of time” [PAGE 3]. The three-point filter is stated as “ball movement over at or greater than 8 feet in height and over a range of 22 feet” [PAGE 2], i.e.
\[
Z\ge 8\,\mathrm{ft}=2.4384\,\mathrm{m},\qquad r_{xy}\ge 22\,\mathrm{ft}=6.7056\,\mathrm{m}.
\]
The input vector at time \(t\) is
\[
\mathbf{x}_t=(X_t,Y_t,Z_t,c_t)\in\mathbb{R}^{4},
\]
where \(X,Y,Z\) are ball coordinates in meters and \(c_t\) is game clock in seconds. The source says: “The input to the LSTM is the XYZ data and the game clock” [PAGE 2], and “The first dataset consists of only the X, Y, Z, and game clock variables” [PAGE 2].

The recurrent operator is a two-layer LSTM with peephole connections. The source says: “The network architecture relies on a two layered LSTM using peephole connections” [PAGE 2], and “The network architecture uses 2 layers with a LSTM of 64 hidden units, Adam optimizer with a learning rate of 0.005, dropout of 0.6, and a batch size of 64” [PAGE 3]. A standard peephole LSTM cell can be written as
\[
f_t=\sigma\!\left(W_f\mathbf{x}_t+U_f h_{t-1}+b_f+P_f\odot c_{t-1}\right),
\]
\[
i_t=\sigma\!\left(W_i\mathbf{x}_t+U_i h_{t-1}+b_i+P_i\odot c_{t-1}\right),
\]
\[
o_t=\sigma\!\left(W_o\mathbf{x}_t+U_o h_{t-1}+b_o+P_o\odot c_{t}\right),
\]
\[
\tilde c_t=\tanh\!\left(W_c\mathbf{x}_t+U_c h_{t-1}+b_c\right),
\]
\[
c_t=f_t\odot c_{t-1}+i_t\odot\tilde c_t,\qquad h_t=o_t\odot\tanh(c_t).
\]
Here \(h_t\) and \(c_t\) are dimensionless hidden and cell states after coordinate normalization; \(W,U,P,b\) are dimensionless learned parameters; \(\sigma\) is the logistic sigmoid. Assumption: the sequence is regularly sampled at 25 Hz and coordinates are centered. Breakdown regimes: variable frame rate, missing detections, uncentered coordinates, unnormalized scale, or sequences shorter than the physical event cause the “half-second” interpretation to fail.

The classification head is a softmax over two classes. The source says: “The probability comes from a softmax layer and is trained based on cross entropy error” [PAGE 2]. For class \(k\in\{\text{make},\text{miss}\}\),
\[
p_t(k)=\frac{\exp(z_{t,k})}{\sum_{j}\exp(z_{t,j})},
\]
and the cross-entropy loss is
\[
\mathcal{L}_{CE}=-\frac{1}{N}\sum_{n=1}^{N}\sum_{k}y_{n,k}\log p_{n,k}\quad[\mathrm{nats}],
\]
or in bits if \(\log_2\) is used. The target \(y_{n,k}\in\{0,1\}\) is dimensionless. Assumption: each shot contributes one label. Breakdown: severe class imbalance at the 35.7% make rate [PAGE 2], label noise from the play-by-play join, or probability clipping can make the loss and AUC diverge.

The reported metric is AUC. The source says: “AUC can range from 0.5 (pure chance) to 1.0 (ideal classification)” [PAGE 2]. Formally, for make score \(S_{\text{make}}\) and miss score \(S_{\text{miss}}\),
\[
\mathrm{AUC}=\int_0^1 \mathrm{TPR}\!\left(\mathrm{FPR}^{-1}(u)\right)\,du
=\Pr(S_{\text{make}}>S_{\text{miss}})+\frac{1}{2}\Pr(S_{\text{make}}=S_{\text{miss}}),
\]
which is dimensionless. Assumption: the score is comparable across shots. Breakdown: AUC does not measure calibration; it is insensitive to the base rate; and temporally correlated shots require game-level or player-level resampling for valid uncertainty.

The auxiliary trajectory head is a mixture density network. The source says: “The MDN consists of three mixtures of tri-variate Gaussians and is trained via cross entropy” [PAGE 2]. For normalized next point \(\mathbf{x}_{t+1}\),
\[
p(\mathbf{x}_{t+1}\mid \mathbf{x}_{1:t})
=\sum_{m=1}^{3}\pi_{m,t}\,\mathcal{N}\!\left(\mathbf{x}_{t+1};\boldsymbol{\mu}_{m,t},\boldsymbol{\Sigma}_{m,t}\right),
\]
\[
\mathcal{L}_{MDN}=-\frac{1}{N}\sum_{n=1}^{N}\log p(\mathbf{x}_{n,t+1}\mid \mathbf{x}_{n,1:t}).
\]
If coordinates are normalized, the log density is dimensionless up to an additive constant; if not, the continuous log density has units of inverse volume and the loss has a units offset. Breakdown: singular covariance matrices, mixture collapse, unnormalized coordinates, and rim-contact events that violate the smooth next-point assumption.

The static baselines are a GLM and GBM. The paper reports: “A logistic regression using Elastic Net with an alpha of 0.5 resulted in an AUC of 0.53. A gradient boosted trees model with 50 trees resulted in an AUC of 0.80” for the XYZ-only baseline [PAGE 3]. The full-feature table gives:
\[
\begin{array}{c|ccccccc}
\text{distance to basket (ft)} & 2 & 3 & 4 & 5 & 6 & 7 & 8\\
\hline
\text{GLM AUC} & 0.875 & 0.807 & 0.721 & 0.659 & 0.604 & 0.583 & 0.558\\
\text{GBM AUC} & 0.942 & 0.902 & 0.848 & 0.796 & 0.746 & 0.742 & 0.719\\
\text{RNN AUC} & 0.93 & 0.913 & 0.906 & 0.880 & 0.873 & 0.841 & 0.843
\end{array}
\]
The RNN values are from Table 3 [PAGE 3]; the GLM/GBM values are from Table 2 [PAGE 3]. The paper’s conclusion states: “The RNN is able to achieve an AUC of 0.843 when predicting a make or miss using half a second of data with the ball 8 feet away from the basket. This outperforms the traditional approaches which had an AUC of 0.558 and 0.719 for a general linear model and a gradient boosted machines, respectively” [PAGE 4]. The exact breakdown is the 2-foot regime, where the full-feature GBM is better than the positional RNN [PAGE 3]. Additional breakdowns: default baseline hyperparameters, unspecified train/test grouping, incomplete public SportVu data, and optical tracking noise.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage is explicitly sequence-modeling genealogy. The paper says: “RNNs are a class of dynamic models used to predict and generate sequences in domains such as text [7], music [5], and motion data [1]” [PAGE 1]. It traces the immediate inspiration to Graves: “The inspiration for applying RNNs to ball tracking data stems from the work of Graves who uses RNNs to develop predictions on handwriting [3]” [PAGE 1], and notes that Graves used “XY sequential data taken from handwriting on a smart whiteboard” and trained “a RNN network on the XY data without any preprocessing” [PAGE 1]. That lineage matters because the paper’s bet is that raw coordinate sequences contain enough information to classify outcomes without hand-built physics. The counter-lineage is Wang and Zemel: “An attempt by Wang to use RNNs on tracking data was unsuccessful [12]” [PAGE 1]. The paper responds by cautiously validating RNN sequence learning on toy tasks, including a sine wave and multi-digit addition [PAGE 1], before applying it to basketball.

A second lineage is physics-based trajectory analysis. The source cites Beuoy’s ShArc work: “His work analyzed over 30,000 free throw shots with a physics based model that looked at four main forces on a ball: gravity, buoyancy, drag, and the magnus effect” [PAGE 3]. This is the retrocausal pressure point: the paper claims to learn trajectories “without any knowledge of physics” [PAGE 1], while the strongest external benchmark is a physics model. The resolution is that the RNN learns a data-driven surrogate for trajectory dynamics, not a symbolic physics model. The third lineage is data augmentation from Kaggle: the paper quotes a winner’s note that “canonical examples are found in image classification tasks where images are cropped and perturbed to improve the generalization capabilities of the classifier” [PAGE 3], and suggests similar augmentation for sequential tracking data.

Multi-week traps are methodological. Trap one: join leakage. The data are “joined with the play by play data from the NBA” [PAGE 2], and only shots in both datasets are kept. If the join uses post-hoc labels or possession identifiers that leak into features, AUC inflates. Trap two: shot-level random split. Because 20,000 shots come from 631 games [PAGE 2], a random shot split can place highly correlated shots from the same game in train and test. A game-level split is the verifiable counterfactual. Trap three: trajectory truncation. Figure 2 “only shows the trajectory prior to a distance of four feet from the basket” [PAGE 2], which means visual inspection is not the same as model input; the model may see later points, or the figure may hide the hardest terminal segment. Trap four: default baselines. The paper admits the classifiers “relied on the default values and were not optimized” [PAGE 2], so a multi-week project must not treat the reported GBM as the best static model. Trap five: season and venue drift. The data are from “the beginning of the 2015-2016 season” [PAGE 2]; tracking calibration, arena geometry, and player mix can drift. Trap six: conflating MDN likelihood with classification. The MDN is an auxiliary generative head [PAGE 2], not the classifier; improving trajectory likelihood does not automatically improve make/miss AUC.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory-of-mind layer has three agents: the ball, the model, and the analyst. The ball has no beliefs, but its trajectory is a physical state. The model maintains a recursive belief state \(h_t=f(h_{t-1},\mathbf{x}_t)\); it does not represent the shooter’s intention, only the observed path. The analyst maintains a belief about the model’s belief: “does this AUC represent trajectory learning or context leakage?” The evaluation protocol maintains a belief about the analyst: “did the split respect game and player boundaries?” This is why the paper’s strongest claim must be read at the level of the protocol, not just the architecture. The source says the RNN is “capable of learning the trajectory of a basketball without any knowledge of physics” [PAGE 1], but the recursive audit asks whether the model learned trajectory geometry or learned SportVu artifacts, game clock shortcuts, or shooter identity.

Crisis habit regression appears when the tracking signal is noisy or the sample is small. Under that pressure, analysts regress to familiar static habits: hand-engineer distance, angle, and velocity; fit a GLM or GBM; and treat the last point as sufficient. The paper shows why that habit is not always wrong: at 2 feet, the full-feature GBM reaches AUC 0.942 versus 0.93 for the RNN [PAGE 3]. The counter-trap is the opposite regression: over-trusting the sequence model because it is deep. The paper explicitly warns that “the models in this paper are not fully optimized” [PAGE 3], so the RNN is not a universal replacement for feature engineering. The correct recursive stance is distance-conditioned: use sequence evidence when the ball is far and uncertainty is high, and allow static or physics features near the rim where terminal geometry dominates.

The clock is the most subtle recursive trap. The model receives “the XYZ data and the game clock” [PAGE 2]. Game clock is not the same as the sampling clock. The sequence length is 12 samples at 25 Hz, about 0.48 s [PAGE 3], but game clock changes slowly and can encode period, possession context, or late-game data-collection patterns. A recursive analyst must ask: is the model predicting from trajectory dynamics, or from the clock’s correlation with shot selection? The verifiable counter-trap is a clock-ablation and clock-shuffle test. If performance is unchanged when game clock is shuffled, the clock is inert. If performance collapses, the model may be using clock context rather than trajectory. A second counter-trap is frame-rate perturbation: if the model is robust to downsampling, it has learned geometry; if it collapses, it has learned the exact 25 Hz sampling habit. The source’s own caution supports this: “Close inspection of most ball trajectories shows they are not entirely smooth, but can involve ”dips” or noise” [PAGE 3]. Under that noise, the analyst’s crisis habit is to smooth or hand-code; the counter-habit is to test whether the sequence model is actually using the noise as signal.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The physical layer can veto a model prediction when the observed trajectory is kinematically impossible or when the model’s confidence is invariant to physically meaningful perturbations. The source’s external physics benchmark identifies “four main forces on a ball: gravity, buoyancy, drag, and the magnus effect” [PAGE 3]. A rigid-body point-mass approximation is
\[
m\mathbf{a}=m\mathbf{g}+\mathbf{F}_b+\mathbf{F}_d+\mathbf{F}_M,
\]
with \(\mathbf{a}\) in \(\mathrm{m\,s^{-2}}\), \(m\) in \(\mathrm{kg}\), and forces in \(\mathrm{N}\). The components are
\[
\mathbf{F}_b=-\rho_{\text{air}}V\mathbf{g},
\]
\[
\mathbf{F}_d=-\frac12\rho_{\text{air}}C_d A\|\mathbf{v}\|\mathbf{v},
\]
\[
\mathbf{F}_M=\frac12\rho_{\text{air}}A C_L\|\mathbf{v}\|^2\,\hat{\boldsymbol{\omega}}\times\hat{\mathbf{v}},
\]
where \(\rho_{\text{air}}\) is air density in \(\mathrm{kg\,m^{-3}}\), \(V\) is ball volume in \(\mathrm{m^3}\), \(A\) is cross-sectional area in \(\mathrm{m^2}\), \(C_d,C_L\) are dimensionless coefficients, \(\mathbf{v}\) is velocity in \(\mathrm{m\,s^{-1}}\), and \(\boldsymbol{\omega}\) is angular velocity in \(\mathrm{rad\,s^{-1}}\). The physics residual is
\[
r_t=\left\|\mathbf{a}_t-\mathbf{g}-\frac{\mathbf{F}_b+\mathbf{F}_d+\mathbf{F}_M}{m}\right\|,
\]
in \(\mathrm{m\,s^{-2}}\). A veto is justified when \(r_t\) exceeds a threshold calibrated on clean trajectories, because the model is then classifying a tracking artifact or a rim-contact event rather than a free-flight trajectory. The source supplies the warning: “the SportVU data is simply messy and imprecise” [PAGE 3]. That is the physical veto proof: if a high-confidence make prediction survives on a trajectory with impossible acceleration or missing frames, the classifier is not learning physics-consistent motion.

The biomechanical layer is weaker in the source because only ball tracking is used. There is no release pose, no shooter identity, and no explicit spin measurement in the described input; the model sees XYZ and game clock [PAGE 2]. Biomechanical veto conditions are therefore indirect: release angle, release height, and spin should be consistent with the observed early trajectory. If the model’s confidence is unchanged when early release geometry is perturbed, it is not using biomechanically relevant information. The weather layer is almost absent: NBA games are indoors, and the source does not list temperature, humidity, pressure, or wind as variables. Air density can affect drag and Magnus forces, but without venue weather data the effect is an unmodeled nuisance. A weather veto is therefore only relevant if residual acceleration correlates with venue or date; otherwise the indoor setting makes weather a weak layer. Exact singularities: the angle “with respect to the rim” [PAGE 2] is undefined when the ball is exactly at the rim center; the Magnus direction is undefined at zero spin; and the drag direction is undefined at zero velocity. Breakdown regimes: rim collisions, net contact, release occlusion, frame drops, and coordinate-system shifts all violate the free-flight assumptions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
The source states that code and data are available: “You can also download the data and the model used for this paper on github” [PAGE 4]. That makes the following verifiable counterfactual vetoes executable.

Veto 1: game-level split counterfactual. Rebuild the 80/20 split by game, not by shot. The source says the dataset contains “over 20,000 three point shot attempts from 631 games” [PAGE 2], but does not specify the grouping of the split. Prediction: if the reported AUC depends on same-game leakage, the game-level split will reduce AUC, especially at 6 to 8 feet. The comparative claim is vetoed if the RNN’s 8-foot AUC falls below the full-feature GBM’s 0.719 [PAGE 4], because then the headline “outperform” is not robust to the protocol. If the RNN remains above the GBM, the claim survives.

Veto 2: sampling-clock and frame-drop counterfactual. The RNN is fed 12 samples “about a half a second” at 25 Hz [PAGE 3]. Downsample to 12.5 Hz, randomly drop 10 to 30 percent of frames, and separately shuffle the game clock. Prediction: a genuine trajectory learner should degrade smoothly as physical resolution is lost and should be insensitive to game-clock shuffling. The claim that the model learned trajectory geometry is vetoed if AUC remains unchanged under frame drops and collapses under clock shuffling, because that pattern indicates clock or sampling artifacts rather than trajectory dynamics. A second prediction is that the 2-foot regime remains GBM-favorable, consistent with the paper’s exception [PAGE 3].

Veto 3: physics-residual injection counterfactual. Generate synthetic “impossible” trajectories by violating the free-flight residual \(r_t\) while preserving the same start point, end point, and apparent curvature. Prediction: a physics-consistent sequence classifier should lower its make probability on these impossible trajectories. The claim “without any knowledge of physics” [PAGE 1] is not vetoed by the model lacking symbolic physics, but the claim of trajectory learning is vetoed if the model assigns high make probability to physically impossible paths at the same rate as clean paths. This test is verifiable against the source’s own physics benchmark, which lists “gravity, buoyancy, drag, and the magnus effect” [PAGE 3]. A useful secondary metric is calibration at the 35.7% make rate [PAGE 2]: even if AUC survives, the model should not output systematically extreme probabilities on synthetic impossible paths.
</RLVR_COUNTERFACTUAL_VETOES>