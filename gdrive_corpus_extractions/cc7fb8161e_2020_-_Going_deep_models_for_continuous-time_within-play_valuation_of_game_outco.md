---
source: "2020 - Going deep models for continuous-time within-play valuation of game outcomes in American football with tracking data - Yurko et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/journals/Journal of Quantitative Analysis in Sports/2020"
pages: 20
model: baidu/ernie-5.5-flash-preview:free
words: 5579
---

<NATIVE_REASONING>
The user is presenting a role-play framework ("GSE + GSI Frontier Reasoning Foundry") with strict formatting requirements. They want me to analyze a legitimate academic paper (Yurko et al. 2020, "Going deep: models for continuous-time within-play valuation of game outcomes in American football with tracking data"). This is a real, published paper in the Journal of Quantitative Analysis in Sports, and the full source text is provided across 20 pages.

Let me think about what's actually being asked here. The persona framing includes some odd instructions: "RETROCAUSAL_GENEALOGY" and "RECURSIVE_THEORY_OF_MIND" and "Crisis habit regression vs counter-trap vs clock" and "RLVR_COUNTERFACTUAL_VETOES" with "3 verifiable RLVR veto scenarios + predictions." These sound like they're dressed-up versions of sports betting analysis frameworks (retro-causal genealogy, theory of mind about coaches/players, veto scenarios). The "ZERO BETTING LINES" invariant is actually a constraint AGAINST betting — good.

Wait, let me re-read. The invariants say:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact page markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections.

So actually this is a legitimate request to do a deep technical analysis of a sports analytics research paper. The paper is about a statistical/ML framework for valuing football plays using tracking data. This is legitimate academic/technical content. There's nothing harmful here — it's a request to analyze a published ML/statistical paper deeply.

The "RETROCAUSAL_GENEALOGY" section is a bit odd (retro-causal is not really a scientific concept), but in context it seems to be asking about the historical/scientific lineage of the methods and "multi-week traps" (pitfalls that persist across weeks). I should interpret this charitably as the intellectual genealogy of the methods.

"RECURSIVE_THEORY_OF_MIND" about "Crisis habit regression vs counter-trap vs clock" — this is oddly framed, but in the context of the paper, I can interpret it as modeling considerations about QB decision-making, defensive reactions, and time/game-clock dynamics. Actually, let me be careful — the paper does discuss the clock (time remaining), and game theory-like considerations (QB decisions, defensive anticipation). I can address this as the strategic/adaptive dynamics.

"CROSS_LAYER_VETO_ADJUDICATION" — physical/biomechanical/weather veto proof. This is about how physical/biomechanical/weather factors could veto (override) model predictions. That's a legitimate discussion — the model has breakdown regimes.

"RLVR_COUNTERFACTUAL_VETOES" — 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards. Hmm. In context, I think they want 3 counterfactual scenarios where the model's predictions would be "vetoed" (overridden) by verifiable evidence, with falsifiable predictions. I can interpret RLVR as "reinforcement learning from verifiable rewards" — meaning scenarios with objectively verifiable outcomes.

Now, the key thing: I need to be honest and rigorous. The invariants demand no toy equations, formal LaTeX, real citations with page markers and verbatim quotes. This is a legitimate and actually good constraint — it forces accuracy. I should honor it by grounding everything in the actual paper.

I need to produce >= 1,000 words across exactly these XML sections:
- <THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>

Let me make sure I extract the real equations and quotes from the paper:

Equation (1) [PAGE 6]: 
E[Y*_{t,i}|F(X_{t,i})] = E[Y_{t,i}|F(X_{t,i})] + [player's current yard line].

Equation (2) [PAGE 17]:
E[g(Y*_{t,i}|F(X_{t,i}))] = ∫ g(Y*_{t,i}|F(X_{t,i})) · f̂(Y*_{t,i}|F(X_{t,i})) · dX_{t,i}.

Key facts:
- Data collected at 10 Hz [PAGE 4]. "The data is collected at a rate of 10 Hz, so that the on-field location, speed, and angle of each player (and the ball) is recorded 10 times per second."
- Dataset: "1,075,720 unique frames across 14,167 plays" [PAGE 4].
- Final modeling dataset: "154,908 frames from 4502 unique ball-carrier sequences on running plays." [PAGE 5]
- RFID chips: "Two radio frequency identification (RFID) chips are placed in each player's shoulder pads (and in the ball)." [PAGE 4]
- Notation section [PAGE 6]: t > 0, Y is random variable for yards gained, Y* is end-of-play yard line, X_t data structure, F(X_{t,i}) filtration (borrowing notation from Cervone et al. 2016b), E[Y_{t,i}|F(X_{t,i})].
- C_k,i: "one of the 16 players who can catch a pass (five eligible offensive receivers and 11 defenders)" [PAGE 6].
- QB decisions: {d1 = throw away, d2 = run/sack, d3 = pass} [PAGE 6]. Multinomial distribution [PAGE 8].
- Target probability model: replicate each play 5 times, Softmax-normalize [PAGE 8].
- Individual catch: replicate 16 times, Softmax-normalize [PAGE 8].
- LSTM: "two layers with fifty inputs each layer... recurrent dropout rate of 20% for each layer... zero-pad each sequence to the size of the longest ball-carrier sequence." [PAGE 12]
- Feedforward NN: "two layers, where each layer has fifty hidden units. We use a ReLu activation function... L1 penalty... Adam algorithm" [PAGE 12].
- XGBoost: "default settings (100 trees, max depth of 3 splits)" [PAGE 11].
- LASSO: "one standard error regularization penalty" [PAGE 11].
- LOWO CV: "leave-1-week-out (LOWO) CV" [PAGE 12].
- Feature importance: "The two most important features are the distance the to closest defender (defense1_dist_to_ball) and the ball-carrier's current speed (bc_s)." [PAGE 13]
- Voronoi tessellation: "The Voronoi tessellation partitions the playing surface into regions, where each region corresponds to the area of the playing surface closest to an individual player." [PAGE 9]
- RFCDE: "random forests for conditional density estimation (RFCDE)" [PAGE 17], "bi-modal distribution" at first contact [PAGE 17].
- Linearity of expectations used [PAGE 6].
- The independence assumption in Equation (2): "The above approach implicitly assumes the independence of the between-play estimates of play value... and the within-play conditional density estimates" [PAGE 17]. And the caveat about timeouts remaining [PAGE 17].
- Player evaluation: Alex Collins "leading ball-carriers in average yards gained per carry... but on average has gained negative yards relative to expectation to handoff" [PAGE 15-16]. Le'Veon Bell "under-performed with respect to expectation at hand-off but over-performed expectation at one second into the carry" [PAGE 16].
- Speed caveat: "if we condition on the speed of a player in the model, any gains a ball-carrier makes as a result of being faster than other ball-carriers... will be not be attributed to that ball-carrier." [PAGE 18]
- Fumbles not handled: "we would have to incorporate a survival component into our model, accounting for the hazard of a fumble at each moment" [PAGE 18].
- Play type known at start (limitation): run-pass options [PAGE 7]. "we assume the play type (run or dropback) is known at the start of the play, which could be problematic."
- Special teams not handled [PAGE 18].
- Cervone et al. (2016b) EPV basketball, two-level Markov chain [PAGE 2].
- Fernández et al. (2019) soccer EPV deep learning [PAGE 2].
- Link, Lang, Seidenschwarz (2016) soccer [PAGE 2].
- Burke (2019) DeepQB [PAGE 3].
- Deshpande and Evans (2019) hypothetical completion probability [PAGE 3].
- Patterson 47-yard TD run, Week 6, LA Chargers vs Oakland Raiders, 2017 season [PAGE 4].
- Yurko, Horowitz, Ventura (2019) nflwar / EP-WP framework [PAGE 2, 20].

Now let me think about the more unusual sections and how to handle them rigorously without inventing fake science.

RETROCAUSAL_GENEALOGY: I'll interpret "retro-causal" carefully. Actually "retro-causal" is a real (if speculative) physics concept, but here I think the intent is "genealogy traced backward" — the intellectual lineage. I'll be honest and note that "retro-causal" in a strict physics sense is not applicable, and reframe as methodological genealogy traced backward from the 2020 paper to its roots (Cervone 2014/2016 EPV, Markov processes, LSTM from Hochreiter & Schmidhuber 1997, Voronoi 1908, LASSO Tibshirani 1996, XGBoost Chen & Guestrin 2016, RFCDE Pospisil & Lee 2018). And "multi-week traps" = the LOWO CV design and the pitfalls that persist across weeks (e.g., speed-conditioning bias, play-type assumption, independence assumption). This is a legitimate reading.

RECURSIVE_THEORY_OF_MIND: I'll interpret as the strategic/adaptive modeling of agents — the QB decision model (theory of the QB's mind), defensive anticipation (defenders' directions relative to ball-carrier), and the clock. "Crisis habit regression vs counter-trap vs clock" — I'll interpret as: how models regress to habits (baseline tendencies) especially in "crisis" (high-leverage) situations, the "counter-trap" of models being gamed by strategic agents (a defender/ offense adapting), and the clock as a hard constraint. I should be careful and rigorous — game theory and the fact that the paper's models condition on observed trajectories which are themselves strategic outputs. This is a real limitation: the model treats trajectories as exogenous features, but they are endogenous to strategic interaction. That's a legitimate theory-of-mind / endogeneity point.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. This is about how physical constraints (biomechanics: max acceleration, momentum/turn radius), and weather (surface friction, wind for passing) can veto model predictions. The tracking data is at 10 Hz so it captures kinematics. I can construct a formal "veto proof": under certain physical constraints, the model's smooth expectation must be bounded. E.g., a ball-carrier cannot instantaneously change velocity; the model's frame-to-frame smoothness (which they explicitly want — "the predictions should be smooth from frame-to-frame" [PAGE 11]) must respect kinematic limits. Weather: the model doesn't include weather features (the paper never mentions weather), so on e.g. wet/icy surfaces the Voronoi/speed features degrade. I can prove a breakdown regime: as surface friction μ → 0, achievable acceleration → 0, but the model trained on normal conditions assigns nonzero expected yards based on speed — a systematic overestimate. That's a real, defensible analysis.

RLVR_COUNTERFACTUAL_VETOES: "3 verifiable RLVR veto scenarios + predictions." I'll interpret RLVR as "verifiable rewards" — scenarios where objective, checkable ground truth vetoes a naive model prediction, with falsifiable predictions. I'll ground each in the paper's actual acknowledged limitations:
1. The speed-conditioning endogeneity (verifiable: hold features fixed, vary only ball-carrier speed → prediction changes; verifiable reward: measured yards). Actually the cleanest verifiable veto is the player-evaluation confound.
2. The independence assumption in Eq (2) breaking when timeouts remaining is included (verifiable: correlation between within-play density and WP model residuals).
3. The play-type-known assumption breaking on RPOs (run-pass options) — verifiable: the model conditioned on run vs dropback mislabels RPO.
Or fumble hazard (survival component omitted) — verifiable: sequences ending in fumbles are not modeled, so E[Y*] is biased upward on high-fumble-risk frames.

I'll give concrete, checkable predictions for each.

I must keep the whole thing >= 1000 words. Let me be thorough but not padded. Actually the sections demand substantial depth. Let me write carefully.

One important note: I should be honest about what's in the paper vs. what's my own analysis. The invariants demand verbatim quotes with page markers. I'll quote real text. I must NOT invent quotes. Let me only quote text that's actually in the provided source.

Let me also respect: no betting lines (fine, I won't mention any). No toy equations (I'll use the paper's real equations and clearly-labeled extensions with stated assumptions, units, and breakdown regimes).

Let me draft.

Actually, let me reconsider the "retro-causal" and "recursive theory of mind" and "RLVR" framing. These are somewhat pseudo-scientific buzzwords wrapped around what is fundamentally a request to deeply analyze a legit ML paper. I think the right move is: honor the format (it's harmless and the depth requirement is good), but inject scientific rigor and honesty — flag where a concept like "retro-causal" doesn't strictly apply, and reinterpret in defensible terms. That's consistent with "Correct the user when they are wrong. Honest, respectful feedback is more useful than agreement." I shouldn't pretend retro-causality is a real mechanism in this paper.

Let me make sure equations are correct LaTeX.

Eq (1): 
$$\mathbb{E}[Y^*_{t,i}\mid F(X_{t,i})] = \mathbb{E}[Y_{t,i}\mid F(X_{t,i})] + [\text{player's current yard line}]$$

Eq (2):
$$\mathbb{E}[g(Y^*_{t,i}\mid F(X_{t,i}))] = \int g(Y^*_{t,i}\mid F(X_{t,i})) \cdot \hat{f}(Y^*_{t,i}\mid F(X_{t,i})) \, dX_{t,i}$$

Wait, the paper writes dX_{t,i} at the end but conceptually it should be dY*. The paper literally wrote "dXt,i" — actually looking at the OCR: "∫ g(Y*_{t,i}|F(X_{t,i})) · ^f(Y*_{t,i}|F(X_{t,i})) · dXt,i." Hmm, the OCR shows dX_{t,i}. This is likely an OCR artifact; the integration variable should be Y*. I'll note this discrepancy honestly — the paper's Eq (2) integrates over the conditional density of the end-of-play yard line, so the differential should be dY*_{t,i}; the "dX_{t,i}" in the source appears to be a transcription artifact. Good — that's the kind of rigor the invariant wants.

Now for the conditional density integral, the correct form:
$$\mathbb{E}[g(Y^*_{t,i})] = \int_{\mathcal{Y}} g(y^*)\,\hat{f}(y^*\mid F(X_{t,i}))\,dy^*$$
where the integration is over the end-of-play yard line domain.

Units: Y in yards; 10 Hz → Δt = 0.1 s; speed s in yards/s; Voronoi area in yards². Angles in degrees. Information units: the LSTM's filtration reduces conditional entropy H(Y*|F) — I can express in nats/bits conceptually but shouldn't invent numbers not in the paper.

Let me note the sampling: 10 Hz means Δt = 0.1 s [PAGE 4]. L frames, Δt = 0.1 s each. Ball-carrier sequences "between two to five seconds" [PAGE 5] → 20–50 frames.

Let me write the sections now. I'll aim for depth and precision.

For THINK_TRACE (>=400 words): multi-hop derivation and gray-zone audit. I'll walk through: the model's core reduction (everything reduces to E[Y*]), the filtration formalism, why LSTM (temporal), the LOWO CV design, and audit gray zones: (a) Eq(2) independence assumption, (b) speed endogeneity, (c) play-type exogeneity, (d) the dX vs dY notation issue, (e) zero-padding effect on LSTM, (f) Softmax on all-zero target probs.

For SOURCE_OPERATORS_AND_EQUATIONS: lay out Eq(1), Eq(2), the filtration definition, the multinomial QB pmf, the target/catch pmfs, softmax, LSTM gate equations (I can write the standard LSTM equations from Hochreiter & Schmidhuber 1997 as the model operator, clearly labeled as the referenced architecture, with units and breakdown). Actually I should be careful — the paper doesn't write LSTM equations, but it cites Hochreiter and Schmidhuber (1997). I can present the canonical LSTM update as "the operator class instantiated," clearly labeled as standard/architecture reference, with the note that the paper specifies hyperparameters (2 layers, 50 units, 20% recurrent dropout, zero-padding). I'll state assumptions. This respects "no toy equations" — these are the real, standard LSTM equations, not invented ratios.

Breakdown regimes: LASSO linear sign issue [PAGE 11]; zero target prob softmax [PAGE 6 footnote 3]; RPO play-type [PAGE 7]; fumble hazard omitted [PAGE 18].

RETROCAUSAL_GENEALOGY: lineage backward: Voronoi 1908 → Cervone EPV 2014/2016 (two-level Markov) → Fernández 2019 soccer → DeepQB Burke 2019 → LSTM Hochreiter/Schmidhuber 1997 → LASSO Tibshirani 1996 → XGBoost Chen/Guestrin 2016 → RFCDE Pospisil/Lee 2018 → nflwar Yurko 2019. "Multi-week traps": LOWO CV across 6 weeks of 2017; data limitations (fumbles, special teams, RPO) that persist. Honestly flag that "retro-causal" isn't a mechanism here; reframe as backward methodological genealogy.

RECURSIVE_THEORY_OF_MIND: QB decision multinomial as a model of the QB's mind; defenders' dir_wrt_bc_diff feature encodes defensive anticipation; the clock/time-remaining handling (observed time used, ad hoc [PAGE 18]); endogeneity: trajectories are strategic outputs, model treats them as exogenous → "counter-trap" = agents can exploit the valuation; "crisis habit regression" = in high-leverage/crisis the model regresses to population baselines because sparse data; clock as hard constraint. Be rigorous.

CROSS_LAYER_VETO_ADJUDICATION: kinematic veto: velocity continuity (ball-carrier can't teleport); model smoothness requirement [PAGE 11] must respect acceleration limits; momentum/turn radius; weather/friction: not in feature set, so μ→0 breakdown (overestimate). Formal: expected yards bounded by kinematic reachability; if model predicts Δy inconsistent with max sprint speed × time, veto. Note tracking 10 Hz Nyquist consideration: at 10 Hz, features alias movements faster than 5 Hz — but human motion is <5 Hz mostly, so OK; still, contact events (first_contact) are impulsive and under-resolved.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios with predictions:
1. Speed-conditioning confound: prediction that a fast back's YAR is "skill" — verifiable veto via ablation (retrain without bc_s; if player ranking flips, the original attribution is confounded). Paper explicitly flags this [PAGE 18]. Prediction: Alex Collins-type divergence shrinks.
2. Eq(2) independence break via timeouts: include timeouts-remaining in ball-carrier features → covariance between f̂ and WP model → biased E[WP]. Verifiable: measure Cov; prediction: nonzero, sign toward WP overestimate in late-half clock situations.
3. RPO misclassification: play-type assumed known [PAGE 7]; on RPO, model conditioned on "run" when QB keeps → Y* biased. Verifiable: subset RPO plays (post-2018, multiple seasons) and compare labeled vs model-assumed play type; prediction: systematic Y* error on RPO keep plays.

I'll add predicted directions and falsification conditions.

Let me write it all now. I need to be mindful of length — aim for well over 1000 words total, but not bloated. Each section substantive.

Let me be careful with the verbatim quotes — use exact text from the source.

Verbatim quotes I can use:
- "The data is collected at a rate of 10 Hz, so that the on-field location, speed, and angle of each player (and the ball) is recorded 10 times per second." [PAGE 4]
- "In total, the dataset contains 1,075,720 unique frames across 14,167 plays" [PAGE 4]
- "our final modeling dataset consisted of 154,908 frames from 4502 unique ball-carrier sequences on running plays." [PAGE 5]
- "the predictions should be smooth from frame-to-frame, and we should be able to use this temporal structure in our models." [PAGE 11]
- "The two most important features are the distance the to closest defender (defense1_dist_to_ball) and the ball-carrier's current speed (bc_s)." [PAGE 13] (note the typo "the to" is in source)
- "if we condition on the speed of a player in the model, any gains a ball-carrier makes as a result of being faster than other ball-carriers (or losses from being slower) will be not be attributed to that ball-carrier." [PAGE 18]
- "The above approach implicitly assumes the independence of the between-play estimates of play value ... and the within-play conditional density estimates of the expected end of play yard line" [PAGE 17]
- "we assume the play type (run or dropback) is known at the start of the play, which could be problematic." [PAGE 7]
- "we would have to incorporate a survival component into our model, accounting for the hazard of a fumble at each moment throughout a ball-carrier sequence" [PAGE 18]
- "leave-1-week-out (LOWO) CV" [PAGE 12]
- "Our LSTM has two layers with fifty inputs each layer (determined by CV tuning), and we use a recurrent dropout rate of 20% for each layer." [PAGE 12]
- "the default settings (100 trees, max depth of 3 splits)" [PAGE 11]
- "choosing the one standard error regularization penalty" [PAGE 11]
- "we zero-pad each sequence to the size of the longest ball-carrier sequence." [PAGE 12]
- "We suggest the use of Softmax normalization here, to handle rare cases where the estimated target probabilities are all 0." [PAGE 6, footnote 3]
- "one of the 16 players who can catch a pass (five eligible offensive receivers and 11 defenders)" [PAGE 6]
- "revealing a bi-modal distribution, with the model predicting Patterson's more likely to end near his current location but a potential for reaching the endzone." [PAGE 17]
- "P(Di|F(Xt,i)) follows a multinomial distribution over the set {dta, dr, dp}." [PAGE 8]
- "For defensive players, we additionally compute the absolute difference between the defender's direction and the angle of the shortest segment between the defender and the ball-carrier." [PAGE 9]
- "The Voronoi tessellation partitions the playing surface into regions, where each region corresponds to the area of the playing surface closest to an individual player." [PAGE 9]
- "Alex Collins is leading ball-carriers in average yards gained per carry in the sample, but on average has gained negative yards relative to expectation to handoff." [PAGE 15-16]
- "We see Le'Veon Bell under-performed with respect to expectation at hand-off but over-performed expectation at one second into the carry." [PAGE 16]
- "borrowing notation from Cervone et al. (2016b)" [PAGE 6]
- "Two radio frequency identification (RFID) chips are placed in each player's shoulder pads (and in the ball)." [PAGE 4]
- "our LSTM model accounts for the complex relationships between the considered features" — actually: "While our LSTM model accounts for the complex relationships between the considered features in Section 4.1" [PAGE 14]

Good. Now write.

I'll make sure to state that these six sections total >1000 words. I'll write genuinely, not padding.

Let me write.
</NATIVE_REASONING>

<THINK_TRACE>
This paper reduces a hard object — the value of an American football play as it unfolds — to a single sufficient statistic: the end-of-play yard line. The multi-hop derivation proceeds as follows. Hop 1: between-play valuation (EP, WP) is a function of game-state features, and per [PAGE 3] "the between-play estimates, EP and WP, are essentially functions of the end-of-play yard line, which determines the down, yards to go, possession team, and so on." So if you can continuously forecast the end-of-play yard line Y*, you can push any downstream value function through it. Hop 2: the continuous-time object is the conditional expectation E[Y_{t,i}|F(X_{t,i})], where F(X_{t,i}) is "a filtration of the locations and trajectories of all players and the ball from the start of the play until time t" [PAGE 6], explicitly "borrowing notation from Cervone et al. (2016b)." The filtration is the crux: it is an increasing information set, so the estimator must be monotone-refining in t. Hop 3: because Y* = Y + current yard line, linearity of expectations gives Equation (1) exactly, with no distributional assumption. Hop 4: to move from a point forecast of Y* to a value (EP/WP), plugging E[Y*] into a nonlinear g is biased (Jensen), so they replace the point model with a conditional density f̂(Y*|F) and integrate — Equation (2).

Now the gray-zone audit, because the framework has load-bearing assumptions that are easy to miss. (a) Equation (2) carries an independence assumption stated verbatim on [PAGE 17]: "The above approach implicitly assumes the independence of the between-play estimates of play value ... and the within-play conditional density estimates." The paper itself flags the failure mode — if timeouts-remaining entered the ball-carrier model, "doing so may render this assumption of independence false, since a WP model typically accounts for timeouts remaining as well." (b) Speed endogeneity: [PAGE 18] warns that conditioning on ball-carrier speed means "any gains a ball-carrier makes as a result of being faster than other ball-carriers ... will be not be attributed to that ball-carrier." This is a genuine attribution confound, not a rounding issue. (c) Play-type exogeneity: "we assume the play type (run or dropback) is known at the start of the play, which could be problematic" [PAGE 7], with run-pass options named as the stress case. (d) A transcription subtlety: Equation (2) as printed integrates against "dXt,i," but the integrand is a density over the end-of-play yard line; dimensionally the differential must be dY*_{t,i} over the yard-line domain, so I treat the printed "dX" as an OCR artifact. (e) LSTM zero-padding "to the size of the longest ball-carrier sequence" [PAGE 12] injects structural zeros that the recurrent state must learn to ignore — a gray zone for short sequences. (f) Softmax on all-zero target probabilities is patched by footnote 3 [PAGE 6]: "to handle rare cases where the estimated target probabilities are all 0." Each of these is a place where the estimator's guarantee quietly weakens, and I carry them into the veto sections below.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation ([PAGE 6]): t > 0 time within play; Y = yards gained from ball-carrier's current position; Y* = end-of-play yard line; X_t = full tracking data structure to time t; F(X_{t,i}) = filtration on play i; T_{j,i}, C_i, C_{k,i} binary target/catch indicators; D_i the QB decision.

Sampling operator ([PAGE 4], verbatim): "The data is collected at a rate of 10 Hz, so that the on-field location, speed, and angle of each player (and the ball) is recorded 10 times per second." Hence Δt = 0.1 s; L-frame play yields L training observations; sequences run "between two to five seconds" [PAGE 5], i.e. ~20–50 frames. Units: position/displacement in yards, speed s in yards·s⁻¹, Voronoi area in yards², direction in degrees. Dataset scale ([PAGE 4]): "1,075,720 unique frames across 14,167 plays"; modeling set ([PAGE 5]): "154,908 frames from 4502 unique ball-carrier sequences on running plays."

Rush valuation (Equation 1, [PAGE 6]):
$$\mathbb{E}[Y^{*}_{t,i}\mid F(X_{t,i})] = \mathbb{E}[Y_{t,i}\mid F(X_{t,i})] + [\,\text{player's current yard line}\,].$$
Exact, assumption-free (linearity of expectation).

Value propagation (Equation 2, [PAGE 17]):
$$\mathbb{E}[g(Y^{*}_{t,i})] = \int_{\mathcal{Y}} g(y^{*}\,\vert\,F(X_{t,i}))\,\hat{f}(y^{*}\mid F(X_{t,i}))\,dy^{*},$$
with g ∈ {EP, WP}, f̂ from RFCDE (Pospisil and Lee 2018). Assumption: independence of g and f̂ given game state ([PAGE 17]). Breakdown: when a within-play feature is also a g-input (timeouts, and per [PAGE 18] "player-level characteristics observable with player-tracking data (e.g. fatigue)"), the factorization fails and E[g] is biased.

QB decision operator ([PAGE 8]): "P(Di|F(Xt,i)) follows a multinomial distribution over the set {dta, dr, dp}," with pmf p_d(x) = exp(η_d)/Σ_{d'} exp(η_{d'}), η_d = β_dᵀφ(F(X_t)). Target model: replicate each play ×5, Softmax-normalize; individual catch: replicate ×16, Softmax-normalize ([PAGE 8]); k indexes "one of the 16 players who can catch a pass (five eligible offensive receivers and 11 defenders)" [PAGE 6].

Learner class (LSTM; standard Hochreiter–Schmidhuber 1997 gates, instantiated per [PAGE 12] "two layers with fifty inputs each layer ... recurrent dropout rate of 20%"):
$$f_t=\sigma(W_f[h_{t-1},x_t]+b_f),\ i_t=\sigma(W_i[\cdot]),\ o_t=\sigma(W_o[\cdot]),$$
$$c_t=f_t\odot c_{t-1}+i_t\odot\tanh(W_c[h_{t-1},x_t]+b_c),\quad h_t=o_t\odot\tanh(c_t).$$
Breakdown: zero-padding injects x_t = 0 rows; if the forget gate does not learn to null them, h_L is contaminated for short sequences. Baselines: LASSO with "one standard error regularization penalty" ([PAGE 11]) fails on sign-structured features (they take absolute values to compensate); XGBoost at "100 trees, max depth of 3 splits" ([PAGE 11]); feedforward net "two layers ... fifty hidden units ... ReLu ... L1 ... Adam" ([PAGE 12]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
A rigorous note first: "retro-causal" has no mechanism in this paper — nothing here propagates information backward in time. I therefore read the section as its defensible scientific sense: the backward methodological genealogy (tracing causes to their antecedents) plus the persistent "multi-week" pitfalls the authors themselves catalog.

Tracing antecedents backward from the 2020 object: the continuous-time valuation idea descends from Cervone et al. (2014, 2016b), whose "two-level Markov chain approach" models "the competing hazards of (discrete) possession-changing events" then "player movement" ([PAGE 2]); the paper explicitly borrows their filtration notation ([PAGE 6]) and names Fernández, Bornn, and Cervone (2019) and Burke (2019, DeepQB) and Deshpande and Evans (2019) as pluggable sub-models. The temporal learner descends from Hochreiter and Schmidhuber (1997). The linear baseline from Tibshirani (1996); the tree baseline from Breiman (2001) and Chen and Guestrin (2016); the geometric features from Voronoi (1908); the density layer from Pospisil and Lee (2018); the downstream EP/WP from Yurko, Horowitz, and Ventura (2019, nflwar).

The "multi-week traps" are literal here: validation is "leave-1-week-out (LOWO) CV" ([PAGE 12]), trained across the six weeks of 2017 tracking data, and several defects are structural to that six-week window rather than incidental. Fumbles cannot be modeled because "even rarer in a 6-week sample of games, rendering the estimation of this component ... impractical" ([PAGE 18]); special teams and kick/punt returns are excluded for lack of data ([PAGE 18]); the joint model of yards and time-remaining is skipped because it "would (at least) double the size of the parameter space" ([PAGE 18]). These are the traps that recur week after week: they are sample-size and support limitations that no amount of the observed six weeks can lift.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The framework is, at bottom, a stack of partial models of adversaries' minds. The QB-decision node is an explicit theory of the QB's mind — a multinomial over {throw away, run/sack, pass}. The feature dir_wrt_bc_diff operationalizes a theory of the defender's intent: "the absolute difference between the defender's direction and the angle of the shortest segment between the defender and the ball-carrier" ([PAGE 9]) — i.e., is the defender oriented to make the tackle.

The gray zone — and the "counter-trap" — is endogeneity. Every entry of F(X_{t,i}) is itself the equilibrium output of 22 strategic agents; the model treats those trajectories as exogenous covariates. A rational offense aware of the valuation can shape trajectories to inflate predicted Y*, and a defense can shape them to depress it. The model has no fixed-point/equilibrium layer, so it can be gamed: this is the recursive regress the framework does not close.

"Crisis habit regression" maps onto a real statistical fact: in high-leverage or rare configurations the estimator regresses toward population baselines because per-configuration support is thin. The speed result is the cleanest instance — bc_s is among "the two most important features" ([PAGE 13]), so predictions lean heavily on a single kinematic habit rather than on scarce situational evidence.

The clock is a hard external constraint the model only partly internalizes: it "use[s] the observed time of the ball-carrier sequence for adjusting the amount of game time remaining" in an "ad hoc approach" ([PAGE 18]) rather than modeling the joint (yards, time) law. So the theory-of-mind stack models opponents' current geometry and intent-direction well, models the QB's decision as a static multinomial (not a best-response to the defense), and treats the clock as an afterthought — precisely the three levers a strategic agent would exploit.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Claim to prove: physical/biomechanical and environmental layers can override (veto) the model's smooth expectation, and the paper's own design makes this veto identifiable.

Kinematic veto. The tracking samples positions at 10 Hz ([PAGE 4]); any physical trajectory has bounded acceleration, so the reachable set of end-of-play yard lines from frame t is compact. Let s_max be a ball-carrier's peak sprint speed (yards·s⁻¹) and τ the remaining sequence time (s). Then a hard upper envelope is
$$Y^{*} \le y_t + \int_t^{t+\tau} s(u)\,du \le y_t + s_{\max}\,\tau.$$
The model explicitly wants predictions "smooth from frame-to-frame" ([PAGE 11]); smoothness is necessary but not sufficient — if the LSTM ever assigns non-negligible f̂-mass beyond y_t + s_max·τ, that mass is physically unreachable and must be vetoed. Because the empirical conditional density at first contact is "bi-modal ... more likely to end near his current location but a potential for reaching the endzone" ([PAGE 17]), the upper mode is exactly where the kinematic envelope binds; the veto adjudication is to truncate f̂ at the reachability bound before Equation (2) integration.

Impulsive-contact under-resolution. First contact is a high-acceleration event; at 10 Hz (Δt = 0.1 s) it is sampled coarsely relative to its sub-0.1 s impulse. Nyquist-wise, motions above 5 Hz alias. Human locomotion is largely below 5 Hz, so gross tracking is adequate, but contact dynamics are under-resolved — a physical layer the 10 Hz grid cannot fully see, capping model fidelity regardless of architecture.

Environmental veto (friction). Weather is absent from the feature set (Tables 2–3, [PAGE 10–11]). Model a surface friction coefficient μ; maximal tangential acceleration scales as a_max ≈ μg. As μ → 0 (ice/heavy rain), achievable acceleration → 0 while bc_s and Voronoi features are unchanged from dry-condition training. Therefore the trained model, keyed to speed, systematically over-predicts Y* as μ falls:
$$\lim_{\mu\to 0}\ \big(\hat{Y}^{*}_{\text{dry-trained}} - Y^{*}_{\text{achievable}}\big) > 0.$$
This is a proof of a breakdown regime: on low-μ surfaces the cross-layer physical veto dominates and the model's expectation is an overestimate, not a forecast.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Interpreting RLVR as reinforcement learning from verifiable rewards: each veto below pairs a naive model prediction with an objectively checkable ground truth, plus a falsifiable prediction.

Veto 1 — Speed-conditioning attribution. Model claim: a back's yards-above-expectation reflects carrier skill. Verifiable test (ablation): retrain the LSTM with bc_s removed or replaced by a per-player average speed, as the authors recommend ("researchers ... should consider using the average speed of player when evaluating individuals," [PAGE 18]). Ground-truth reward = measured Y. Prediction: the divergence noted for "Alex Collins ... leading ball-carriers in average yards gained per carry ... but on average has gained negative yards relative to expectation to handoff" ([PAGE 15–16]) shrinks in magnitude under the speed-neutralized model. Falsifier: rankings stable under ablation ⇒ confound absent.

Veto 2 — Equation (2) independence break via timeouts. Model claim: E[WP] = ∫ WP·f̂ factorizes. Verifiable test: add timeouts-remaining to the ball-carrier feature set (the exact variable the paper warns about, [PAGE 17]) and estimate Cov(WP-model residual, f̂) on late-half, clock-critical frames. Ground truth = actual game outcomes. Prediction: Cov ≠ 0 with sign toward WP overestimation in end-of-half hurry situations; the factorized E[WP] becomes biased while the joint-density version does not. Falsifier: Cov ≈ 0 across all clock buckets ⇒ independence holds.

Veto 3 — RPO play-type misspecification. Model claim: play type is known at t=0 ("we assume the play type (run or dropback) is known," [PAGE 7]). Verifiable test: on a multi-season set, label run-pass-option plays and compare model-assumed type (run branch) to actual outcome (QB keep/pass). Ground truth = event annotation of handoff vs. keep vs. throw. Prediction: on RPO keep plays the run-conditioned E[Y*] shows a systematic signed error (over-prediction when the QB keeps low, under-prediction when the designed conflict favors the pass), because the top-level node in Figure 4 is mis-specified. Falsifier: RPO subset error indistinguishable from the matched designed-run subset ⇒ play-type exogeneity harmless.

Each veto is checkable with data the paper says is required for its own future work ("multiple seasons of tracking data," [PAGE 18]), and each carries a stated falsification condition rather than an unfalsifiable claim.
</RLVR_COUNTERFACTUAL_VETOES>

Note on scope: I have kept to the paper's stated operators and clearly labeled my extensions (kinematic envelope, friction limit, endogeneity) as analysis with explicit assumptions and breakdown regimes, and I flagged where the requested framing — "retro-causal" and "recursive theory of mind" — does not correspond to a real mechanism in the source. The verbatim quotes and page markers are drawn from the supplied text; the Equation (2) differential is noted as an apparent transcription artifact rather than quoted as a correct expression.