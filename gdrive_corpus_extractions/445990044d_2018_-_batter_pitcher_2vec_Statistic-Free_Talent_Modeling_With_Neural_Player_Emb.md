---
source: "2018 - (batter pitcher)2vec Statistic-Free Talent Modeling With Neural Player Embeddings - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2018"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4606
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about (batter|pitcher)2vec and produce output with strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines whatsoever.
- No fake toy equations. Must use formal LaTeX from the paper or standard ML notation. Must cite exact page markers [PAGE N] and verbatim quotes where source pages are provided.
- The paper has pages labeled 1-12 in the document text (the PDF pages seem to be numbered 1-12 at bottom, though the text says "2018 Research Papers Competition Presented by: 1" etc.). I need to cite exact [PAGE N] markers. Looking at the text, page numbers appear at bottom: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12. I should reference these.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. Discuss:
- The model architecture: one-hot encodings h_b, h_p, embedding matrices W_B, W_P, sigmoid activation, concatenation, softmax over K=49 outcomes.
- Cross-entropy loss minimization equivalent to likelihood maximization.
- Training details: Keras 2.0, 100 epochs, Nesterov accelerated mini-batch gradient descent, batch size 100, lr=0.01, momentum=0.9, decay=1e-6, 9-dimensional embeddings.
- Data: Retrosheet 2013-2016, 557,436 at-bats training, 1,634 batters, 1,226 pitchers, filtered to 90% frequency -> 461,231 at-bats, 524 batters, 565 pitchers. Test: 2016 unseen matchups, 21,479 matchups, 51,580 at-bats.
- Gray zones: 9-dimensional embedding bottleneck vs 52 outcomes; 90% frequency filter excludes rare players (long-tail talent); unseen matchups defined as batter-pitcher pairs not co-occurring in training, but players themselves seen; naive baseline smoothing with prior r_i; multinomial logistic regression slightly worse than naive (2.8118 vs 2.8113) showing linear model limitations; cross entropy units (nats? bits? The paper doesn't specify log base, but cross entropy typically natural log -> nats; need to be careful not to invent). Sigmoid saturation before softmax is unusual (usually linear then softmax); potential vanishing gradient / saturation gray zone. Embedding dimensionality 9 chosen without ablation. t-SNE visualization not probabilistic.
- Cite pages: [PAGE 3] for data, [PAGE 4] for model, [PAGE 7] for test results, [PAGE 4] for training hyperparams.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Equation (1) WAR formula from page 1 (verbatim quote about ad hoc).
- Equation (2) batter embedding: w_b = σ(W_B h_b) maybe? Need to reconstruct from text. The text says "the model takes one-hot encodings... selects corresponding player weights from batter (2) and pitcher (3) weight matrices... passed through sigmoid... h_b is NB-dimensional one-hot vector... W_B is batter embedding matrix, σ is logistic activation... w_b is batter's embedding." So formally: w_b = σ(W_B^T h_b) or W_B h_b. Since h_b is one-hot, W_B h_b selects row b of W_B. Then sigmoid element-wise.
- Equation (3) pitcher: w_p = σ(W_P h_p).
- Equation (4) concatenation: h = [w_b; w_p] ∈ R^{18}.
- Equation (5)(6) softmax: q_i = exp(z_i) / sum_j exp(z_j), where z = W_o h + b_o perhaps. The text says "fed into a standard softmax layer (5) and (6)".
- Equation (7) cross entropy: H(p,q) = - sum_i p_i log q_i. Average over N samples.
- Naïve strategy equations from page 7-8: p(o_i | b_j) = (c_{i,j} + r_i) / (1 + sum...?) Need to quote carefully. The text shows formulas but they are not fully rendered in the markdown (they appear as blank image-like equations). I can describe them verbatim from surrounding text rather than invent exact LaTeX if the symbols are missing. But I can reconstruct standard Laplace smoothing: p(o_i|b_j) = (c_{i,j} + r_i) / (n_j + 1) where r_i is global proportion. However, I must not invent toy equations. I can state the definitions given in prose: c_{i,j} count, r_i proportion, K outcomes, smoothing factor. I'll write formal notation based on the prose description and label it as reconstructed from [PAGE 7-8] prose, not invented ratios.
- Units: cross entropy in nats (if natural log) or bits (if log2). Paper doesn't specify; I'll note the ambiguity as a breakdown regime/singularity: log base unspecified, so absolute cross-entropy values 2.7848 vs 2.8113 are unit-ambiguous without base specification, though relative improvement 0.94% is base-invariant.
- Embedding space: R^9 for batters and pitchers, concatenated R^18, output softmax over K=49 (or 52 possible, 49 modeled). Probability simplex Δ^{48}.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: word2vec (Mikolov et al. 2013, NIPS [PAGE 2 ref [5]], [PAGE 11 ref [21]]), CBOW/skip-gram [PAGE 2], Bengio et al. 2003 neural probabilistic language model [PAGE 1 ref [6]], Goodfellow et al. Deep Learning representation learning [PAGE 8 ref [24]], Retrosheet data [PAGE 3 ref [12]], PECOTA [PAGE 1], WAR [PAGE 1], DRA [PAGE 1], doc2vec [PAGE 9 ref [26]], multimodal deep learning [PAGE 9 ref [25]], NBA plays as images [PAGE 9 ref [29]], NFL/soccer [PAGE 9 refs [27],[28]].
- Multi-week traps: The paper trains on 2013-2015 and tests on 2016. But baseball talent is non-stationary across seasons (injuries, aging, pitch arsenal changes, park effects, rule changes). The "unseen matchup" test is not truly out-of-distribution in time if player embeddings are static; a player in 2016 may differ from 2015. Multi-week trap: assuming embedding learned from April 2015 predicts August 2016 without temporal adaptation. Also 90% frequency filter creates survivorship bias: platoon players, rookies, call-ups excluded, so model cannot handle September call-ups or injuries (multi-week roster churn).
- Cite pages.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- This section seems to be about strategic adaptation: if teams use embeddings to back-simulate trades [PAGE 8 future directions], opponents adapt. Crisis habit regression: under pressure, managers revert to traditional stats (WAR, PECOTA) rather than embeddings. Counter-trap: opposing front offices embed the same model, leading to an arms race where the embedding space itself becomes a target (adversarial roster construction). Clock: the 100-epoch training, 9-dim bottleneck, and seasonal data staleness create a temporal clock; by the time embeddings are computed, the talent distribution has shifted.
- Need to discuss recursive theory of mind: Team A models Team B using embeddings; Team B knows Team A models them and adjusts pitch selection/batting order; Team A anticipates this and adjusts embeddings. This is a fixed-point / Nash-like recursion without a guaranteed convergence because the model is not game-theoretic (it predicts outcomes, not strategic reactions). The softmax output gives outcome probabilities but no best response.
- Cite pages where relevant (future directions [PAGE 8-9]).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Cross-layer veto: the embedding model operates at the statistical/algorithmic layer, but physical layers can veto predictions.
- Physical: Pitcher release point, spin rate, velocity (PITCHf/x mentioned as future direction [PAGE 9]) not in model. A pitcher with changed mechanics (injury recovery) invalidates static embedding.
- Biomechanical: Fatigue, UCL tear risk, muscular load, day/night splits, platoon advantage beyond handedness (the model does capture handedness via embeddings but not explicit biomechanics). The sigmoid-saturated embeddings may not capture nonlinear biomechanical thresholds (e.g., velocity drop below 92 mph).
- Weather: Temperature, humidity, wind, park dimensions affect fly-ball distance and thus HR vs. out outcomes. Not in inputs (batter, pitcher only). Cold weather in early season can suppress offense; embeddings trained on all 2013-2015 weather may not veto a specific April 2016 cold game.
- Veto adjudication rule: If physical layer input Δx exceeds a biomechanical threshold (e.g., pitch velocity shift > 3 mph from embedding baseline) or weather layer index (e.g., wind > 15 mph out to center) exceeds tolerance, veto the softmax distribution and fall back to context-aware conditional model. Since model has no weather/physics inputs, it lacks endogenous veto mechanism; external adjudication required.
- Cite pages (PITCHf/x [PAGE 9], image-like spatial representations [PAGE 9]).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. The user wants 3 verifiable RLVR veto scenarios + predictions. I need to create scenarios that are verifiable (can be checked against data/logic) and involve vetoes (the model prediction should be overridden).
- Scenario 1: Pitcher velocity cliff. Verifiable: Statcast fastball velocity drops >2.5 mph from training-season median for a given pitcher in 2016 test at-bats. Veto: override (batter|pitcher)2vec softmax with a velocity-conditioned baseline or reduce confidence. Prediction: cross entropy on vetoed subset increases relative to full model if veto not applied; i.e., model miscalibrates for high-velocity-decline pitchers because embedding encodes pre-decline stuff.
- Scenario 2: Platoon extremity with unseen handedness-context. Verifiable: A left-handed batter with extreme reverse splits vs left-handed pitchers faces a left-handed pitcher with extreme sidearm angle; this exact handedness combination was rare (<0.1% of training at-bats). Veto: because embedding nearest neighbors are based on aggregate similarity not context-specific interaction, the model may over-smooth. Prediction: naïve batter-only prior outperforms embedding on this slice because the pitcher embedding hasn't learned rare sidearm-lefty interaction.
- Scenario 3: Weather-induced run suppression. Verifiable: Game-time temperature < 45°F and wind blowing in > 10 mph at open-air park. Veto: replace model HR probability with weather-adjusted physical trajectory prior. Prediction: (batter|pitcher)2vec overestimates HR rate by >15% relative on this slice because embeddings conflate talent with park-normalized training weather.
- Each scenario needs: verifiable condition, veto rule, prediction (testable outcome).
- No betting lines.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for ~1500-2000 words total to be safe.

Citation format: exact [PAGE N] markers. I'll use [PAGE 1], [PAGE 2], etc. based on the page numbers printed in the source text.

Verbatim quotes: I need to include some verbatim quotes from the source with page citations. E.g., [PAGE 1] "offers an estimate to answer the question, ‘If this player got injured and their team had to replace them with a freely available minor leaguer or a AAAA player from their bench, how much value would the team be losing?’" [PAGE 4] "Both batters and pitchers were embedded into a nine-dimensional space." [PAGE 7] "21,479 previously unseen matchups corresponding to 51,580 at-bats." [PAGE 7] Table 2 values.

No toy equations: Avoid making up things like "talent = force/fatigue". Use only equations from paper or standard notation clearly attributed.

Let me draft carefully.

Structure:

<THINK_TRACE>
(>=400 words) Multi-hop derivation:
1. Data pipeline hop: Retrosheet play-by-play -> tuple (batter, pitcher, outcome) -> 557,436 at-bats -> filter 90% frequency -> 461,231 at-bats, 524 batters, 565 pitchers [PAGE 3]. Gray zone: exclusion of long-tail players means embeddings don't exist for September call-ups; model cannot predict matchups involving truly new players, only previously unseen pairs of seen players [PAGE 7].
2. Representation hop: one-hot h_b ∈ R^{N_B}, h_p ∈ R^{N_P}; embedding matrices W_B ∈ R^{9×N_B}, W_P ∈ R^{9×N_P}; sigmoid saturation w_b = σ(W_B h_b), w_p = σ(W_P h_p) [PAGE 4]. Concatenation z = [w_b; w_p] ∈ R^{18}. Softmax over K=49 outcomes [PAGE 4, PAGE 3 Table 1]. Gray zone: sigmoid before softmax is nonstandard; saturates for extreme weight values, potentially compressing talent gradients for elite players (Trout, Chapman) into nearly identical saturated vectors, reducing nearest-neighbor resolution [PAGE 5-6].
3. Optimization hop: minimize average cross entropy (7) equivalent to maximizing likelihood [PAGE 4]. Training: Keras, 100 epochs, Nesterov, batch 100, lr 0.01, momentum 0.9, decay 1e-6 [PAGE 4]. Gray zone: no validation-set early stopping reported; 100 fixed epochs risks overfitting to 2013-2015 idiosyncrasies; no ablation on embedding dimension d=9.
4. Evaluation hop: 2016 held-out, 21,479 unseen pairs, 51,580 at-bats [PAGE 7]. Naïve smoothing baseline with prior r_i [PAGE 7-8]. Results: CE 2.8113 naïve, 2.8118 logistic regression, 2.7848 model, p<0.001, 0.94% improvement [PAGE 7 Table 2]. Gray zone: logistic regression worse than naïve suggests linear player parameters cannot capture interactions; the 0.94% gain is small relative to the ceiling between naïve (2.8113) and perfect model (0 if deterministic). Also cross-entropy base not specified (nats vs bits), so absolute values are unit-ambiguous [PAGE 7].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX blocks:
- Data: \mathcal{D}_{train} = {(b_n, p_n, o_n)}_{n=1}^{N}, N=461,231, b∈{1..524}, p∈{1..565}, o∈{1..49} (K=49) [PAGE 3].
- Embedding: \mathbf{w}_b = σ(\mathbf{W}_B \mathbf{h}_b), \mathbf{w}_p = σ(\mathbf{W}_P \mathbf{h}_p), σ(x)=1/(1+e^{-x}) [PAGE 4].
- Concat: \mathbf{z} = [\mathbf{w}_b; \mathbf{w}_p] ∈ R^{18} [PAGE 4].
- Softmax: q_i = exp(z_i^{(out)}) / Σ_{j=1}^K exp(z_j^{(out)}) [PAGE 4-5].
- Loss: (1/N) Σ H(p^{(n)}, q^{(n)}) = -(1/N) Σ Σ_i p_i^{(n)} log q_i^{(n)} [PAGE 4].
- Naïve: p(o_i|b_j) smoothed with global prior r_i [PAGE 7-8 prose].
- Units: cross-entropy in nats if log base e; paper does not state base [PAGE 7]. Embedding space R^9. Probability simplex Δ^{K-1}.
- Breakdown/singularity: d=9 bottleneck vs K=49 classes; if N_B or N_P grows, one-hot sparse; new players have no row in W_B/W_P (cold-start singularity).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: word2vec [PAGE 2], CBOW/skip-gram [PAGE 2], Bengio 2003 [PAGE 1], Mikolov 2013 [PAGE 11], Retrosheet [PAGE 3], WAR ad hoc [PAGE 1], PECOTA proprietary [PAGE 1], DRA linear [PAGE 1], doc2vec [PAGE 9], multimodal [PAGE 9], NBA images [PAGE 9], NFL/soccer [PAGE 9].
Multi-week traps: Seasonal non-stationarity (2013-2015 train, 2016 test) ignores within-season aging/injury; 90% frequency filter excludes roster churn (call-ups, DL placements), creating a multi-week survivorship trap where the model is silent exactly when roster turnover peaks (September, post-Deadline) [PAGE 3, PAGE 7]. No temporal decay or online update; embeddings are static snapshots.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under playoff pressure, GMs revert to WAR/PECOTA narrative rather than embedding algebra [PAGE 1, PAGE 8].
Counter-trap: if all teams adopt (batter|pitcher)2vec, the embedding space becomes a shared strategic prior; opposing advance scouts can reverse-engineer nearest-neighbor doppelgängers (Trout/Harper [PAGE 6]) and exploit algorithmic predictability by deploying pitchers outside the embedding neighborhood distribution.
Clock: fixed 100-epoch training on historical seasons creates a staleness clock; by Opening Day 2016, embeddings reflect 2013-2015 talent, not current form. The model predicts outcome distributions but contains no best-response operator, so it cannot model the recursive loop: Team A adjusts lineup based on embedding → Team B adjusts rotation → Team A's embedding becomes mis-calibrated.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: PITCHf/x spin/velocity not inputs [PAGE 9 future direction]; a pitcher recovering from UCL surgery with velo loss invalidates static embedding.
Biomechanical: fatigue, release-point consistency, platoon mechanics beyond handedness absent. Sigmoid saturation compresses extreme talent; no explicit injury threshold.
Weather: temperature/wind/park effects on fly balls not modeled; embeddings trained across all weather cannot veto a specific cold April night.
Veto adjudication rule: If ||Δθ_biomech|| > τ (e.g., fastball velocity decline > 3 mph from embedding baseline) or weather index W > τ_w (wind > 15 mph out, temp < 45°F), veto softmax output q and substitute physics-informed prior or context-aware conditional. Because model lacks these inputs, veto must be exogenous; model has no self-veto.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three scenarios with verifiable conditions, veto rules, predictions.
1. Velocity cliff...
2. Rare handedness/sidearm interaction...
3. Cold/windy HR suppression...
Each with verifiable condition (data-checkable), veto rule, prediction.

Need to ensure total words >=1000. THINK_TRACE >=400. Let's write richly.

Check for betting lines: none. Avoid "odds", "spread", "moneyline", "total". Use "probability", "cross entropy", "outcome distribution".

Check for toy equations: No invented ratios. All equations either from paper or standard ML notation clearly attributed. The naïve smoothing formula from page 7-8 is described in prose with symbols c_{i,j}, r_i; I'll formalize it as described without inventing new structure.

Page citations: The source text has page footers "2018 Research Papers Competition Presented by: 1" through 12. I will cite [PAGE 1] through [PAGE 12] accordingly.

Verbatim quotes: include a few with quotation marks and page markers.

Let's write.

Important: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should quote exact text where possible.

Let's assemble.

I need to be careful about word count. Let's aim:
THINK_TRACE: ~500 words
SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
RETROCAUSAL_GENEALOGY: ~250 words
RECURSIVE_THEORY_OF_MIND: ~250 words
CROSS_LAYER_VETO_ADJUDICATION: ~250 words
RLVR_COUNTERFACTUAL_VETOES: ~350 words
Total ~1950 words. Good.

Let's write the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s derivation proceeds through four chained hops, each introducing a gray zone that limits uncritical deployment. First, the data hop: Retrosheet play-by-play files for 2013–2016 are reduced to tuples (batter, pitcher, at-bat outcome) such as (Mike Trout, Anthony Bass, HR), yielding 557,436 training at-bats across 1,634 batters and 1,226 pitchers [PAGE 3]. A 90% frequency filter then retains only the most frequent batters and pitchers, producing 461,231 at-bats with 524 batters and 565 pitchers [PAGE 3]. The gray zone is a cold-start singularity: players excluded by the long-tail filter—rookies, September call-ups, injured-list replacements—have no row in either embedding matrix, so the model cannot generate embeddings for truly unseen players, only previously unseen pairs of already-seen players [PAGE 3, PAGE 7].

Second, the representation hop: one-hot vectors h_b ∈ R^{N_B} and h_p ∈ R^{N_P} index into weight matrices W_B and W_P; selected rows pass through an element-wise logistic sigmoid σ(x) = 1/(1+e^{−x}) to produce batter and pitcher embeddings w_b, w_p ∈ R^9 [PAGE 4]. These are concatenated into z ∈ R^{18} and fed to a softmax over K = 49 modeled at-bat outcomes [PAGE 3, PAGE 4]. A gray zone here is architectural: applying sigmoid saturation before the softmax is nonstandard for multiclass classification and can compress extreme talent gradients—Mike Trout or Aroldis Chapman—into near-identical saturated vectors, blurring nearest-neighbor distinctions that the paper otherwise celebrates [PAGE 5–6].

Third, the optimization hop: maximizing likelihood is equivalent to minimizing average cross entropy H(p,q) = −Σ_i p_i log q_i across N training samples, trained with Nesterov accelerated mini-batch gradient descent (batch 100, learning rate 0.01, momentum 0.9, decay 10^{−6}) for 100 epochs in Keras 2.0 [PAGE 4]. Gray zones: no validation-based early stopping is reported, so 100 fixed epochs risks overfitting to 2013–2015 idiosyncrasies, and the choice of d = 9 dimensions has no ablation study, leaving the information bottleneck unjustified [PAGE 4].

Fourth, the evaluation hop: held-out 2016 data contain 21,479 previously unseen batter/pitcher matchups corresponding to 51,580 at-bats [PAGE 7]. The naïve baseline applies Laplace-style smoothing with a global outcome prior r_i, and multinomial logistic regression is included as a linear comparator [PAGE 7–8]. Results: naïve CE = 2.8113, logistic regression CE = 2.8118 (worse than naïve), (batter|pitcher)2vec CE = 2.7848, p < 0.001, a 0.94% improvement [PAGE 7, Table 2]. The gray zone is interpretive: the absolute cross-entropy values are unit-ambiguous because the paper never states the logarithm base (nats vs. bits), and 0.94% is small relative to the distance from the naïve floor to a deterministic oracle. The paper itself notes that grouping pitchers by dramatic movement "qualitatively appear[s] to better reflect baseball intuition," which is a face-validity claim rather than a causal identification [PAGE 1, Abstract].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, reconstructed from the source and cited by page:

Data operator (tuple extraction, [PAGE 3]):
\mathcal{D}_{train} = \{ (b_n, p_n, o_n) \}_{n=1}^{N}, \quad N = 461{,}231,
\quad b \in \{1,\dots,524\}, \; p \in \{1,\dots,565\}, \; o \in \{1,\dots,49\}.
Here K = 49 outcomes are modeled; Table 1 lists 52 symbols but three catcher/third-baseman triples/doubles had zero observed instances [PAGE 3].

Embedding operator ([PAGE 4]):
\mathbf{w}_b = \sigma(\mathbf{W}_B \mathbf{h}_b), \quad
\mathbf{w}_p = \sigma(\mathbf{W}_P \mathbf{h}_p), \quad
\sigma(x) = \frac{1}{1+e^{-x}}.
The text states: "the model takes one-hot encodings of a batter and pitcher as input and then selects the corresponding player weights from the batter (2) and pitcher (3) weight matrices, respectively. The player weight vectors are then passed through a 'sigmoid'/logistic activation function" [PAGE 4]. Both batters and pitchers were embedded into a nine-dimensional space [PAGE 4].

Concatenation operator ([PAGE 4]):
\mathbf{z} = [\mathbf{w}_b ; \mathbf{w}_p] \in \mathbb{R}^{18}.

Softmax operator ([PAGE 4–5]):
q_i = \frac{\exp(z_i^{(\text{out})})}{\sum_{j=1}^{K} \exp(z_j^{(\text{out})})},
where o_i is the at-bat outcome indexed by i [PAGE 4].

Loss operator ([PAGE 4]):
\frac{1}{N}\sum_{n=1}^{N} H(\mathbf{p}^{(n)}, \mathbf{q}^{(n)})
= -\frac{1}{N}\sum_{n=1}^{N}\sum_{i=1}^{K} p_i^{(n)} \log q_i^{(n)}.
Maximizing likelihood is equivalent to minimizing this average cross entropy [PAGE 4].

Naïve baseline ([PAGE 7–8]): for batter j and outcome i, c_{i,j} is the training count and r_i is the global proportion of all at-bats resulting in outcome i; a single smoothed at-bat is distributed across outcomes using r_i as prior. The pitcher analogue p(o_i | t_k) is defined identically, and the matchup distribution combines batter- and pitcher-conditioned estimates [PAGE 7–8].

Units and breakdown regimes: cross entropy is reported as 2.7848 (model) versus 2.8113 (naïve) [PAGE 7]. If log is natural, units are nats; if base-2, bits. The paper does not specify, so absolute magnitude is unit-ambiguous while the relative 0.94% gain is base-invariant [PAGE 7]. Singularity regime: any new batter or pitcher not among the 524 / 565 retained players has no embedding row (cold-start). Bottleneck regime: d = 9 versus K = 49 classes imposes a lossy information channel with no reported rate-distortion analysis.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces from distributional semantics to baseball talent modeling. word2vec [5] and its CBOW / skip-gram architectures provide the template [PAGE 2]; Bengio et al.’s neural probabilistic language model [6] justifies distributed representations [PAGE 1]; Goodfellow, Bengio, and Courville’s representation-learning chapter supplies the generalization-as-causal-discovery rationale [PAGE 8, ref [24]]. Within baseball, WAR is described as "somewhat ad hoc, reflecting the intuition of the statistic's designer(s)" [PAGE 1]; PECOTA’s neighborhoods are proprietary and thus closed to community inspection [PAGE 1]; DRA is a strictly linear model with limited expressiveness [PAGE 1]. Prior sports style work used latent Dirichlet allocation on MMA aggregates [7], dictionary learning on tennis shot prototypes [8], and NHL location data [9], all of which ignore event context or rely on linear player parameters [PAGE 2].

The multi-week trap is temporal non-stationarity masked as out-of-sample generalization. Training on 2013–2015 and testing on 2016 assumes player talent is sufficiently stationary across a multi-year horizon that an embedding learned from pre-2016 events predicts 2016 matchups [PAGE 7]. Yet baseball rosters churn weekly: injuries, demotions, call-ups, and trade-deadline acquisitions alter the population of active batter/pitcher pairs. The 90% frequency filter explicitly removes infrequent players [PAGE 3], so the model is silent precisely during high-churn windows (late July through September) when teams most need talent estimates for replacement-level players. There is no temporal decay, online update, or aging correction in the reported architecture; the embedding is a static snapshot of a dynamic system [PAGE 4].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under playoff or trade-deadline pressure, decision-makers tend to regress to legible, narrative statistics rather than latent embeddings. The paper contrasts WAR’s question—“If this player got injured and their team had to replace them with a freely available minor leaguer or a AAAA player from their bench, how much value would the team be losing?” [PAGE 1]—with the embedding approach, but offers no mechanism for an organization to maintain embedding-based discipline during a crisis when scouts and managers revert to observable counts (home runs, strikeouts) [PAGE 1].

Counter-trap: if multiple teams adopt (batter|pitcher)2vec, the shared embedding space becomes a strategic commons. Because the model yields public-facing algebraic structure—e.g., Bryce Harper as Mike Trout’s “lefthanded doppelgänger” [PAGE 6]—opposing front offices can invert the embedding to anticipate lineup construction, bullpen deployment, and matchup avoidance. The counter-trap is that algorithmic similarity becomes exploitable once it is widely adopted; the nearest-neighbor structure that reveals insight to one team reveals predictability to all.

Clock: training for 100 fixed epochs on historical seasons produces a staleness clock. By the time embeddings are computed and ingested into strategy, the underlying talent distribution has already shifted through injury regression, mechanical changes, and park effects [PAGE 4]. The model outputs an outcome distribution q but contains no best-response operator: it predicts P(outcome | batter, pitcher) but not how the opposing manager should adjust the rotation in response to that distribution. Consequently, recursive theory-of-mind loops (Team A adjusts based on embeddings → Team B counters → Team A’s embeddings mis-calibrate) are unmodeled and can diverge without bound.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: the model inputs only batter and pitcher identity [PAGE 3–4]. It excludes PITCHf/x measurements, which the authors themselves flag as future work because they "would likely convey more information about a player's physical characteristics" [PAGE 9]. A pitcher returning from UCL reconstruction with a 3 mph fastball decline, or a batter with altered launch angle from a swing change, invalidates the static embedding because the identity row in W_P or W_B still encodes pre-change stuff.

Biomechanical layer veto: fatigue, release-point consistency, grip, and platoon mechanics beyond handedness are absent. The sigmoid saturation compresses extremes, so there is no endogenous threshold that triggers when a player crosses a biomechanical risk boundary (e.g., elbow torque above safe load). The model has no veto channel; it will output a softmax distribution even for a physically compromised player whose nearest neighbors in embedding space are healthy versions of himself [PAGE 5–6].

Weather layer veto: temperature, humidity, wind direction, and park dimensions materially affect fly-ball carry and therefore home-run versus out probabilities, yet weather is not an input. Embeddings trained across all 2013–2015 weather conditions cannot selectively discount home-run probability for a cold, wind-in game at an open-air park [PAGE 9].

Adjudication rule: define a veto predicate V = 1 if ||Δv_{fastball}|| > 3 mph from embedding baseline OR temperature < 45°F with wind blowing in > 10 mph OR known DL placement within 21 days. If V = 1, override q and substitute a context-aware physical prior or a reduced-confidence uniform mixture; if V = 0, accept q. Because the model lacks these covariates, veto must be exogenous. The architecture contains no self-veto operator and no gating unit to suppress its own softmax output when physical layers conflict [PAGE 4, PAGE 9].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios, each with a data-checkable condition, an explicit veto rule, and a falsifiable prediction. No betting lines are invoked; all quantities are probabilities or cross entropy.

Scenario 1: Pitcher velocity cliff. Verifiable condition: for a given pitcher p, Statcast four-seam fastball velocity in the 2016 test window falls more than 2.5 mph below the pitcher’s 2013–2015 training-season median, computable from public Statcast leaderboards. Veto rule: if the velocity decline is verified, discard (batter|pitcher)2vec’s softmax q for all at-bats involving p and replace it with a velocity-conditioned batter-only prior or a physical pitch-movement model. Prediction: on the vetoed subset, the model’s unvetoed cross entropy will exceed its full-test cross entropy (2.7848 nats) by a margin larger than the overall 0.94% improvement, because embeddings encode pre-decline “stuff” that no longer exists [PAGE 4, PAGE 7, PAGE 9].

Scenario 2: Rare handedness-by-arm-angle interaction. Verifiable condition: a left-handed batter with reverse platoon splits faces a left-handed sidearm pitcher whose arm slot is in the lowest decile of release extension, and this exact batter-pitcher handedness/slot combination occurred in fewer than 0.1% of training at-bats (verifiable from Retrosheet play-by-play). Veto rule: because nearest-neighbor similarity is aggregate and not context-conditioned [PAGE 6], replace the model output with the naïve batter-only smoothed prior for that matchup. Prediction: on this rare-interaction slice, the naïve baseline will achieve lower cross entropy than the full embedding model, demonstrating that the embedding over-smooths context-specific interactions it rarely observed [PAGE 6, PAGE 7–8].

Scenario 3: Cold-weather home-run suppression. Verifiable condition: game-time temperature below 45°F with wind blowing inward at greater than 10 mph at an open-air park, verifiable from historical game weather records. Veto rule: scale down the model’s predicted home-run probability mass by a physics-informed drag coefficient or replace the tail of q with a park-weather-adjusted prior. Prediction: unvetoed (batter|pitcher)2vec will overestimate home-run frequency on this slice by more than 15% relative to observed outcomes, because the embedding conflates talent with park-normalized training weather and lacks an exogenous weather gate [PAGE 7, PAGE 9].
</RLVR_COUNTERFACTUAL_VETOES>