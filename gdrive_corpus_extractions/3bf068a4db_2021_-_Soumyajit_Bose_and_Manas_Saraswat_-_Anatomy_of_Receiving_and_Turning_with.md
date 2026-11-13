---
source: "2021 - Soumyajit Bose and Manas Saraswat - Anatomy of Receiving and Turning with the Ball - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2021"
pages: 26
model: baidu/ernie-5.5-flash-preview:free
words: 5562
---

<NATIVE_REASONING>
The user is asking me to analyze a research paper about football/soccer analytics — specifically "Anatomy of Receiving and Turning with the Ball" by Soumyajit Bose and Manas Saraswat. The prompt contains a framing as a "GSE + GSI Frontier Reasoning Foundry" with instructions to produce a specific analysis format.

Let me look carefully at what's actually being asked here. The instructions ask me to produce an analysis with specific XML sections, citing page markers and verbatim quotes, formal LaTeX equations, and to hit at least 1,000 words. It also has some odd framing about "zero betting lines" and "toy equations" and "retro-causal genealogy" and "recursive theory of mind" and "crisis habit regression vs counter-trap vs clock."

Wait. Let me reconsider. The elaborate framing with "DRIVE SOURCE," "PAGES," "SOURCE TEXT," and the foundry instructions with betting-adjacent language ("zero betting lines," "crisis habit regression vs counter-trap vs clock") strongly suggests this is a prompt originally designed for sports betting analysis that's been repurposed. The "STRICT INVARIANTS" about "ZERO BETTING LINES" and the various section headers are somewhat unusual.

However, the core actual request here is legitimate and clear: analyze this academic paper about football analytics. This is a real research paper from the StatsBomb conference 2021. The user has provided the full text. There's nothing harmful about analyzing a sports analytics methodology paper.

I should just do a genuinely good analytical job on the paper. The framing is a bit unusual but the underlying task is completely benign — it's analyzing a technical/academic paper on football analytics methodology.

Let me think about whether I should follow the exact XML format requested. The format is somewhat baroque but it's not harmful. The user wants a deep technical analysis. I think the best approach is to produce a genuinely rigorous, substantive analysis of this paper. I should:

1. Focus on the actual content — this is a methodology paper about quantifying a player's ability to receive and turn with the ball.
2. Extract the formal mathematical models (xT Markov chain, Shannon entropy, Jensen-Shannon divergence, KL divergence, Voronoi tessellation).
3. Cite specific pages and quote verbatim.
4. Be genuinely useful.

The paper's actual mathematical content:
- Relative angle sonar (Section 3.1)
- Expected Move Completion Model using HistGradientBoostingClassifier (Section 3.2)
- Expected Threat (xT) Markov chain model (Section 3.3)
- Risk and Tightness (Voronoi tessellation) (Section 3.4)
- Unpredictability via Shannon entropy of angular distribution (Section 3.5)
- Pressure Resistance via Jensen-Shannon Divergence (Section 3.6)

Note: The paper has some equations that appear as blanks in the provided text (e.g., "denoted by ___ and ___ respectively", "indicated by ___", "given by ___", "the entropy ___ of turns", the KL divergence formula, JSD formula). These are the mathematical symbols that didn't render in the PDF-to-text extraction. I should reconstruct the standard forms since these are well-known:
- xT: T(x,y) = s(x,y)·g(x,y) + s(x,y)·Σ T(x',y')·M((x,y)→(x',y')) + m(x,y)·T(x,y). The standard Singh formulation: V_{x,y} = s_{x,y}·g_{x,y} + s_{x,y}·Σ_{z} M_{(x,y)→z}·V_z + m_{x,y}·V_{x,y}
- Shannon entropy: H = -Σ p_i log(p_i)
- KL divergence: D_KL(P||Q) = Σ P(x) log(P(x)/Q(x))
- JSD: JSD(P||Q) = (1/2)D_KL(P||M) + (1/2)D_KL(Q||M), where M = (1/2)(P+Q)

I should reconstruct these honestly, noting they were not rendered in the extracted text but are standard forms.

Now, regarding the "foundry" framing — I think I should engage with the substance but I don't need to slavishly adopt every odd conceit. The user clearly wants a rigorous technical analysis. The section headers requested (THINK_TRACE, SOURCE_OPERATORS_AND_EQUATIONS, etc.) are the vehicle. I'll produce those sections with genuine content. I'll drop the betting framing entirely (which the invariants themselves request — "ZERO BETTING LINES") and the "retro-causal genealogy" and "theory of mind" stuff I'll interpret charitably as: historical lineage of the methods, and analysis of how a defending team would model the player's decision behavior.

Actually, let me reconsider the "RECURSIVE_THEORY_OF_MIND" section — "Crisis habit regression vs counter-trap vs clock." In football terms, this maps to: how does a player's behavior change under pressure (habit regression to predictable patterns), how would an opposing coach design a press trap (counter-trap), and how does game state/time affect decisions. That's a legitimate reading. The paper itself discusses "pressing traps" in Section 5.

The "CROSS_LAYER_VETO_ADJUDICATION" — "Physical/biomechanical/weather veto proof" — this maps to: are there physical/biomechanical/environmental constraints that would invalidate the model's claims? The paper explicitly acknowledges the lack of body pose data as a proxy limitation. So I can discuss biomechanical validity.

"RLVR_COUNTERFACTUAL_VETOES" — RLVR = Reinforcement Learning with Verifiable Rewards. This is a stretch for a football analytics paper, but I can interpret it as: verifiable counterfactual test cases that would falsify or validate the model's outputs. 3 verifiable veto scenarios with predictions.

Okay, I think I understand the intent now. This is a deliberately elaborate "deep reasoning" prompt structure. The person wants me to produce a genuinely rigorous, multi-faceted technical analysis of this paper. I'll do that. I'll:

1. Keep the requested section structure.
2. Provide genuine technical depth — reconstruct the math, cite pages, quote verbatim.
3. Drop betting content entirely (per the invariants and per good practice).
4. Be honest about what's in the paper vs. what I'm reconstructing.
5. Aim for depth (the 1,000-word request is fine to meet for a substantive analysis).

Let me be careful and accurate about the source. Let me extract the key verbatim quotes and page markers:

[PAGE 3]: "we do not have body pose data available in football yet at a large scale. In the absence of such data, what we have really done is use a proxy for 'turning with the ball'. We study the angle between the first pass and the second move as our key variable to quantify turning." Also the "back" definition: "a fairly broad angular spread to define 'back', ranging from -45º to +45º"

[PAGE 4]: "This is not to be treated as the tail-to-tail angle between the two vectors, rather simply as the head-to-tail angle between the two vectors (a fixed convention of clockwise angle measure is also chosen)." "On these sonars, an angle of 0º refers to the case where the receiver sends the ball back to the first passer. An angle of 180º refers to the case where the receiver is able to turn completely with the ball and progress it vertically."

[PAGE 6]: "we use StatsBomb's 360 data to build our own pressures for the purposes of this model." "we decided to add the number of pressors within a 5-yard radius of the player on the ball. This is done by using 360 data, and calculating the Euclidean Distance from the 'Actor'". "For this we chose the HistGradientBoostingClassifier" "For Carries, if the subsequent action is a dispossession, it is classified as unsuccessful since the data doesn't have a clear classification for it."

[PAGE 7]: xT description — "a Markov chain model that, given a pass or a ball carry from a certain zone of the pitch to another, looks at the probability of scoring in the next few moves." "the pitch is divided into grid. In each zone, there is a finite probability that a player in possession decides to move the ball (to another zone or stay in the same zone) or shoot the ball" "there is a finite probability of scoring" "finite transition probability of moving to any of the available 96 zones" "iteratively solving the following equation with the initial value of 0 assigned to each zone to start the iteration process."

[PAGE 8]: "xT of the third move gives us xT Facilitated" "xT of the second move ... Direct Threat"

[PAGE 9]: Risk = "the threat the opposition could create by forcing a turnover on a certain point of the pitch. To evaluate this, the xT zone map is simply reversed" Tightness: "The visual area is Voronoi-tessellated using the location of all the players. Tightness is directly proportional to the area of ball control of the receiver" — "creates a bit of counter-intuitive metric" — "An alternative could perhaps be to divide the total pitch area by the Voronoi cell area of the receiver". Unpredictability: "Shannon entropy of the angular distribution of the turns. The turns are divided into several relative angle bins - 18 specifically, with spread of 20º each"

[PAGE 10]: KL and JSD. "Jensen-Shannon divergence is a symmetrized version of the above." "If the JSD between the two distributions is large, then the said receiver is perturbed by pressure"

[PAGE 15]: "the xT under pressure seems to be larger than xT of all actions, for most of the players. This could be a simple noise in the data, or could be that under-pressure actions are typically against unsettled defences and hence better at picking out space, or could be that under-pressure actions are more of the 'hit-and-hope' kind"

[PAGE 24]: "The cluster on the top right is the 'Elite Player' zone ... The middle zone is mostly strikers ... a standout is Karim Benzema"

[PAGE 25]: Future directions — "The availability of body pose data in future will make this study more rigorous" "it might be worth switching xT with another possession value metric" Caveats — "its not a huge data set. Some of the sample sizes are clearly small" "Further complications arise in the 360 frames where the passer is at the edge of the visual frame, and hence, his Voronoi cell of control or amount of pressure on the passer can't be accurately determined."

Data: [PAGE 3]: "540 select games from La Liga 2020-21 and Bundesliga 2020-21"

Now let me reconstruct the formal equations.

xT (Singh 2019). The standard formulation: For each zone (x,y):
V_{x,y} = s_{x,y} × g_{x,y} + s_{x,y} × Σ_{(u,v)} M_{(x,y)→(u,v)} × V_{u,v} + m_{x,y} × V_{x,y}

where:
- V_{x,y} = threat value (xT) of zone (x,y) — dimensionless probability (units: probability of scoring within n moves)
- s_{x,y} = probability of a move (ball movement) from zone (x,y)
- g_{x,y} = probability of a shot from zone (x,y)
- m_{x,y} = probability of staying in zone (m = 1 - s - g roughly, but in Singh's it's the "move within same zone" mass)
- Actually the standard is: s = P(move), g = P(shot), and 1 - s - g = P(?). Let me be precise. Singh defines: shoot probability g, move probability s (moving to a different zone), and the remaining probability mass (1 - g - s) corresponds to "moving within the same zone" which keeps V_{x,y} on the RHS. And the move splits among destination zones via transition matrix M.
- g_{x,y} × (goal probability) — actually the shooting term is s×g? No.

Let me recall Singh's exact formula. From Karun Singh's Expected Threat:

xT for a zone = P(shot from zone) × P(goal | shot) + P(move to another zone) × Σ [P(transition to zone z) × xT(z)] + P(move within zone) × xT(zone)

Hmm, but there's subtlety. The blog writes:

V_{x,y} = s_{x,y} × g_{x,y} + s_{x,y} × Σ_{z} (M_{(x,y)→z}) × V_z + m_{x,y} × V_{x,y}

Wait, that doesn't look dimensionally right either. Let me reconstruct carefully.

Actually Singh's formulation as commonly cited:

Each zone has three probabilities that sum to 1: shooting probability, moving probability, and "stay/move within zone". He denotes:
- Probability of moving the ball (to a new zone): often called the move probability
- Probability of shooting
- Probability of "other" (moving within the same grid cell) — sometimes folded in

The threat equation:

V_{x,y} = [P(shot) × P(goal)] + [P(move) × Σ_z T_{(x,y)→z} V_z] + [P(stay) × V_{x,y}]

where T is the transition probability matrix (rows sum to 1 over the 96 or 100 destination zones).

Actually the paper says "available 96 zones." Interesting — Singh's original is a 12×8 = 96 grid. Yes! Singh used a 12 columns × 8 rows grid = 96 zones. So the paper is faithful to Singh. Good. Let me note that: 96 zones = 12×8 grid.

So the equation as the paper describes: there is (i) shoot probability g_{x,y} and scoring probability (goal/shot); (ii) move probability s_{x,y} with transition T to 96 zones; (iii) the iterative fixed-point.

Let me write the canonical form:

V_{x,y}^{(k+1)} = g_{x,y}·β_{x,y} + s_{x,y}·Σ_{z=1}^{96} T_{(x,y)→z}·V_z^{(k)} + (1 - g_{x,y} - s_{x,y})·V_{x,y}^{(k)}

Hmm, but the standard Singh formulation folds the goal probability into a single shooting-value term. Let me denote:
- Actually, let me use the cleaner canonical: define for each zone the probability of moving (s), shooting (g), and the goal-scoring probability given a shot. The move probabilities are captured by the transition matrix.

I'll present it as the paper intends and note the mapping to Singh [2]. Since the actual symbols were dropped in text extraction, I'll be transparent: "The extracted text omits the symbolic glyphs for the shoot probability, move probability, scoring probability, and transition matrix; reconstructing from Singh [2], the canonical fixed-point equation is..."

Let me write:

V = g ⊙ b + s ⊙ (T V) + (1 - g - s) ⊙ V

Rearranged as a linear system: this is why it converges. The threat is bounded in [0,1] as a probability of scoring within n moves.

Shannon entropy (Page 9-10):
H = -Σ_{i=1}^{18} p_i log_2(p_i)   [bits]
where p_i = fraction of turns in angular bin i, 18 bins × 20° = 360°. Units: bits (if log base 2) or nats (if ln). The paper says "Shannon entropy" without specifying base; max entropy = log2(18) ≈ 4.17 bits for uniform distribution.

KL divergence (Page 10):
D_KL(P ‖ Q) = Σ_i P_i log(P_i / Q_i)   [nats or bits]
Non-negative, asymmetric, unbounded, requires Q_i = 0 → P_i = 0 (absolute continuity) else diverges.

JSD (Page 10):
M = (1/2)(P + Q)
JSD(P ‖ Q) = (1/2) D_KL(P ‖ M) + (1/2) D_KL(Q ‖ M)
Bounded: 0 ≤ JSD ≤ log(2) (in nats) or 1 bit. Symmetric. Square root of JSD is a metric.

Voronoi tessellation (Page 9): The pitch plane ℝ² is partitioned into Voronoi cells. For receiver at position r with all other players at positions {p_j}:
Cell(r) = { x ∈ ℝ² : ||x - r|| ≤ ||x - p_j|| ∀ j }
Tightness τ = Area(Cell(r)) (directly proportional, per the paper's counter-intuitive choice). Alternative τ' = A_pitch / Area(Cell(r)).

Pressure / pressors (Page 6): n_press(r) = Σ_{j} 1[ ||r - a_j|| ≤ 5 yards ] where a_j are 360 frame positions of opponents (Euclidean distance, outfield players only).

Expected move completion (Page 6): binary classifier, HistGradientBoostingClassifier, features include relative angle, zone, xT of destination, n_press, etc. Output: P(complete). Move-above-expectation = actual completion − expected completion.

Now the analysis sections.

Let me draft. I need to be mindful of length — aim for genuinely 1,000+ words but not padded. Given the elaborate request, a thorough treatment is warranted.

Let me be careful and precise. I want to be honest that some equations weren't rendered and I'm reconstructing from the referenced source (Singh's xT). I'll flag that clearly.

Let me also make sure I don't invent fake ratios — the invariants say no toy equations. So I'll stick to the paper's actual metrics.

Let me write this out. I'll use the requested section tags. I'll write in a rigorous but readable way.

One more consideration: the "RECURSIVE_THEORY_OF_MIND" and "RLVR_COUNTERFACTUAL_VETOES" and "CROSS_LAYER_VETO_ADJUDICATION" are unusual. I'll interpret them faithfully to the football context and make them genuinely useful:
- Recursive ToM: modeling the adversarial loop — receiver decides turn direction; defender anticipates; receiver anticipates defender. The entropy and JSD metrics are exactly the empirical fingerprints of this loop. "Crisis habit regression" = under pressure, players regress to lower-entropy, more predictable turn distributions (the paper's Page 10 observation: "without pressure, there is a lot of vertical turns. Under pressure, it gets distributed into several bins" — wait, actually that says under pressure it distributes into MORE bins, i.e., higher entropy? Let me re-read).

Page 10: "the typical angular pattern for players follows pretty much a clear pattern - without pressure, there is a lot of vertical turns. Under pressure, it gets distributed into several bins."

Interesting — so under pressure, the turn distribution spreads out (higher entropy), and the JSD between pressured and unpressured distributions measures the perturbation. Elite players have LOW JSD (their distribution doesn't change much under pressure). So "counter-trap" reasoning: a defender who has studied a player's high-entropy unpressured distribution can't easily predict, but if pressure forces the distribution to collapse toward a predictable safe option (e.g., back-pass), that's exploitable. The paper Page 25 explicitly discusses pressing traps.

Wait, there's a nuance. The paper says under pressure turns "get distributed into several bins" — this suggests higher entropy under pressure, which seems counterintuitive (I'd expect panic → back to passer → low entropy). But actually there are two competing readings and the paper flags ambiguity. Actually re-reading: "without pressure, there is a lot of vertical turns" — vertical = 180° (full turn to progress). So without pressure, mass concentrates near 180° (progressive). Under pressure, the mass redistributes (some backward, some sideways). Whether entropy goes up or down depends. The JSD just measures the magnitude of distributional shift regardless of direction. Elite players = low JSD = distribution stable. Good, I'll capture this nuance carefully.

- CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical veto. The relative angle is a KINEMATIC proxy, not a KINETIC/biomechanical one. A 170° turn is not physically the same as a 90° turn in terms of body mechanics. The paper acknowledges this (Page 3, Page 25 body pose data). Also: a receiver with back to goal at 0° relative angle (pass from directly behind) must physically rotate ~180° — the angular metric doesn't capture whether they had time/space (received on the half-turn vs square). Weather: wind/rain affects carry success but the model treats carry completion as position-only. These are genuine "veto" conditions on over-interpreting the metric.

- RLVR_COUNTERFACTUAL_VETOES: 3 verifiable predictions/tests that would validate or falsify. E.g.:
  (1) If JSD truly measures press-resistance, then a player's JSD should be temporally stable and predict reduced completion drop under press in out-of-sample games. Prediction: Benzema (Page 24 standout) should show low JSD AND above-expectation completion under pressure in holdout games.
  (2) The "xT under pressure > xT all actions" anomaly (Page 15) — if it's small-sample noise, it should vanish at larger N; if real, it should persist. Verifiable prediction: at 3× sample size, the effect attenuates toward zero. The authors themselves flag this (Page 25).
  (3) Voronoi tightness is undefined/unstable when the passer is at frame edge (Page 25 caveat). Counterfactual test: tightness estimates should have high variance for events near frame boundary; predictions there should be down-weighted or excluded.

Let me also address the xTunder>all anomaly with a proper probabilistic argument — selection/collider structure, regression to the mean, and the fact that xT per 100 combos normalizes but doesn't fix the conditioning.

Actually, let me think about why xT_under-pressure > xT_all could arise mathematically. "All actions" includes under-pressure actions as a subset. If xT_pressure > xT_all for a player, that means the unpressured subset has LOWER xT than the pressured subset — which is genuinely surprising. Possible mechanisms:
- Volume/weighting: "all" is a weighted average of pressured + unpressured. If pressured actions are few but high-xT, and unpressured are many but low-xT... no, a weighted average of two groups is between them, so if pressured > overall, then unpressured < overall. Fine, consistent. So the claim is: unpressured turns have lower xT than pressured turns for these players. That's the puzzle. 
- Explanation candidates the paper gives: noise, unsettled defence under press, hit-and-hope luck. A rigorous addition: conditioning on the classifier's predicted-success (if they filter to successful combos) introduces collider bias. Also xT rewards moving into high-xT zones regardless of whether the move was "safe" — a risky under-pressure vertical ball into a good zone yields high xT even if it's a low-percentage play. So xT (a zone-based reward) doesn't penalize turnover risk at the moment of the turn — that's what the separate "risk" metric is for, but xT direct threat doesn't subtract risk. So under-pressure speculative verticals can inflate xT. Good, I'll make this point — it's a genuine methodological insight.

Let me write the final response now. I'll keep it rigorous, cite pages, quote verbatim, reconstruct equations transparently, and hit the depth. I'll use the section tags as requested.

I should note upfront (briefly) that I'm treating this as a methodology-paper analysis and dropping the betting framing (consistent with the stated invariants). Actually, I don't need to belabor that — I'll just produce the analysis. But a one-line orientation is fine.

Let me make sure the LaTeX is clean. I'll use inline and display math.

Let me write.

Word count target: 1000+. The sections combined will easily exceed this given the depth needed. Let me be substantive, not padded.

I'll write it now.
</NATIVE_REASONING>

I'm treating this as a rigorous methodology analysis of Bose & Saraswat (StatsBomb Conference 2021). Per the stated invariants I'm excluding any betting interpretation entirely and will flag where the PDF-to-text extraction dropped mathematical glyphs so I can reconstruct them honestly from the cited sources rather than inventing new ratios.

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit.

The paper's central move is a substitution: in the absence of body-pose data it replaces the biomechanical event "turning with the ball" with a kinematic observable — the head-to-tail relative angle between the first pass and the second move. This is stated plainly on [PAGE 3]: "we do not have body pose data available in football yet at a large scale. In the absence of such data, what we have really done is use a proxy for 'turning with the ball'. We study the angle between the first pass and the second move as our key variable to quantify turning." Every downstream metric inherits the epistemic ceiling of this substitution, so the whole edifice is a proxy-of-a-proxy. That is the first gray zone.

Multi-hop chain: (1) isolate a 3-action subsequence (first pass → second move → third move) from possession data [PAGE 2]; (2) condition on the first pass arriving "from the back," defined by a ±45° cone [PAGE 3]; (3) measure the relative turn angle with a fixed clockwise convention, where 0° = square/back to passer and 180° = full vertical turn [PAGE 4]; (4) attach pressure via Euclidean counting of opponents within 5 yards from 360 frames [PAGE 6]; (5) score completion with a gradient-boosted classifier [PAGE 6]; (6) score value with xT (second move = direct threat, third move = xT facilitated) [PAGE 8]; (7) score risk by reversing the xT map [PAGE 9] and tightness by Voronoi cell area [PAGE 9]; (8) score predictability by Shannon entropy of the 18-bin turn histogram [PAGE 9] and press-perturbation by Jensen–Shannon divergence between pressured/unpressured turn distributions [PAGE 10].

Each hop introduces conditioning that can bias the next. The ±45° "back" cone is broad, mixing genuinely back-to-goal receptions with square balls. The 5-yard Euclidean pressure count ignores facing, momentum, and whether the pressor is goal-side. The xT reward is zone-based and does not subtract the turnover risk of the move that entered the zone — which directly explains the paper's own puzzle on [PAGE 15] that "the xT under pressure seems to be larger than xT of all actions." I derive that resolution below.

Gray-zone audit on units: the relative angle is dimensionless degrees (a circular variable), yet entropy treats it as a linear histogram — ignoring circular topology (0° and 359° are adjacent but land in different bins). The "risk = reversed xT" identity on [PAGE 9] conflates a conditional scoring probability with a turnover-cost, which are equal only under the symmetry assumption that the opponent's attack is the mirror of yours — never true (pressing teams concede differently than they attack). These are real, not cosmetic, and I flag them rather than smoothing over them.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown regimes.

Notation: receiver position $r \in \mathbb{R}^2$ (yards), opponent 360 positions $a_j$, pitch partitioned into a $12\times8 = 96$ grid (matches "96 zones" on [PAGE 7], the Singh [2] lattice).

1. Pressor count ([PAGE 6], "number of pressors within a 5-yard radius … calculating the Euclidean Distance from the 'Actor'"):
$$n_{\text{press}}(r) = \sum_{j \in \text{opp}} \mathbf{1}\!\left(\lVert r - a_j \rVert_2 \le 5\ \text{yd}\right).$$
Dimensionless integer. Breakdown: undefined when the actor sits at the frame edge — the paper's own caveat on [PAGE 25]: "the passer is at the edge of the visual frame, and hence, his Voronoi cell of control or amount of pressure on the passer can't be accurately determined."

2. Expected Move Completion ([PAGE 6], "HistGradientBoostingClassifier"):
$$\hat{p}_{\text{complete}} = \sigma\!\Big(F(x)\Big), \quad F(x)=\sum_{m=1}^{M}\eta\, h_m(x),$$
gradient-boosted trees, features $\{$relative angle, zone, $n_{\text{press}}$, destination xT, move type$\}$; carry failure proxy: "if the subsequent action is a dispossession, it is classified as unsuccessful" [PAGE 6]. Above-expectation residual: $\Delta = \text{actual} - \hat{p}_{\text{complete}}$.

3. Expected Threat ([PAGE 7], Markov fixed point; glyphs dropped in extraction, reconstructed from Singh [2]). Per zone $(x,y)$ let $g$ = shoot probability, $s$ = move probability, $\beta$ = scoring probability given shot, $T_{(x,y)\to z}$ = transition probability to the 96 zones. Iterate from $V^{(0)}=0$:
$$V^{(k+1)}_{x,y} = g_{x,y}\,\beta_{x,y} + s_{x,y}\!\!\sum_{z=1}^{96}\! T_{(x,y)\to z}\,V^{(k)}_{z} + \big(1 - g_{x,y} - s_{x,y}\big)\,V^{(k)}_{x,y}.$$
Units: probability of scoring within $n$ moves (dimensionless, $[0,1]$), $n$ = iterations to converge. Direct threat $= V(\text{second-move zone})$; xT Facilitated $= V(\text{third-move zone})$ [PAGE 8].

4. Risk ([PAGE 9], "the xT zone map is simply reversed … value of risk is simply set equal to the xT of the zone"): $\text{Risk}(z) = V(\text{reflect}(z))$ under goal-axis reflection.

5. Tightness ([PAGE 9]): Voronoi cell $\mathrm{Vor}(r) = \{x : \lVert x-r\rVert_2 \le \lVert x-a_j\rVert_2\ \forall j\}$; the paper's $\tau = \mathrm{Area}(\mathrm{Vor}(r))$ ($\text{yd}^2$, "directly proportional … tightness value is small if the receiver has to control in tight spaces"), with the more intuitive alternative $\tau' = A_{\text{pitch}} / \mathrm{Area}(\mathrm{Vor}(r))$.

6. Unpredictability ([PAGE 9], 18 bins × 20° = 360°):
$$H = -\sum_{i=1}^{18} p_i \log_b p_i, \qquad \sum_i p_i = 1.$$
Units: bits ($b{=}2$) or nats ($b{=}e$); ceiling $H_{\max}=\log_b 18 \approx 4.17$ bits (uniform).

7. Pressure resistance ([PAGE 10], glyphs dropped; standard definitions):
$$D_{\mathrm{KL}}(P\Vert Q)=\sum_i P_i \log \frac{P_i}{Q_i}\ \text{(nats, }\ge 0,\text{ asymmetric, } \infty \text{ if } Q_i{=}0, P_i{>}0),$$
$$M=\tfrac12(P+Q),\quad \mathrm{JSD}(P\Vert Q)=\tfrac12 D_{\mathrm{KL}}(P\Vert M)+\tfrac12 D_{\mathrm{KL}}(Q\Vert M)\in[0,\log 2].$$
$P,Q$ = relative-angle distributions unpressured vs pressured. Low JSD = press-robust.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week analytical traps.

The method sits on three lineages. (i) Passing sonars descend from John Muller's angular-histogram passing plots [PAGE 4, ref 1]; the contribution is the substitution of a relative (head-to-tail) angle for the absolute pitch-referenced angle — literally re-baselining the coordinate frame onto the first-pass vector. (ii) Expected Threat is Singh's [2] Markov occupancy model; the paper reuses it unmodified for two derived quantities (direct threat, facilitation) and one inversion (risk). (iii) The entropy/divergence layer imports Shannon information theory wholesale: the 20°-bin histogram and the KL→JSD symmetrization are textbook.

The multi-week trap is that lineage (ii) and the pressure layer are on incompatible footings. xT is a static, pressure-blind, zone-reward; the completion model is a pressure-aware classifier. When the paper plots "xT per 100 combinations" under pressure ([PAGE 15]) and finds pressured xT > all-action xT, the temptation is a football narrative ("unsettled defences," "hit-and-hope," both offered on [PAGE 15]). The correct genealogical read is that xT rewards entry into a high-value zone and never charges for the turnover hazard incurred to get there — the hazard lives only in the separate Risk metric ([PAGE 9]), which is never netted against Direct Threat. So a speculative vertical ball forced under press into a good zone scores high xT even if it is a low-percentage, high-variance action. The anomaly is baked into using an un-netted reward on a conditioned subsample, not a discovery about football.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression vs counter-trap vs the clock.

The receiver/defender loop is a two-level game: receiver picks turn angle $\theta$; defender forms belief $\hat{P}(\theta)$; receiver picks $\theta$ to defeat $\hat{P}$. Entropy $H$ is the empirical fingerprint of the receiver's mixed strategy; JSD is the fingerprint of how pressure reshapes that strategy.

Crisis-habit regression: [PAGE 10] observes "without pressure, there is a lot of vertical turns. Under pressure, it gets distributed into several bins." Two regimes are possible and the paper does not disambiguate them: (a) panic collapse toward the safe back/square option (entropy falls, mass piles near 0°), or (b) scrambling (entropy rises). JSD measures the magnitude of shift but not its sign, so JSD alone cannot distinguish "elite and unaffected" from "perturbed in a benign direction." The [PAGE 24] claim that a top-right cluster is "the 'Elite Player' zone … really unperturbed by pressures" is defensible only if low JSD is paired with preserved or improved completion $\Delta$, which the combined figures partially supply.

Counter-trap: [PAGE 25] explicitly turns the metrics into defensive design — "forcing the ball to someone who is known to be a risk-averse passer … Or, if the entropy metric indicates a proclivity towards turning in specific ways." Formally, a defender wants to steer the receiver to a low-probability, low-xT branch of $P(\theta)$. High entropy is genuinely hard to trap (unpredictable); a receiver with mass concentrated near 0° is trivially funnelable backward.

The clock: neither $H$, JSD, nor xT conditions on game state (scoreline, minute, remaining substitutions). A player protecting a lead at 88' will regress to low-entropy safe turns regardless of latent skill, contaminating the skill estimate. This is an unmodeled confounder the paper never addresses.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.

Claim under test: "relative turn angle measures turning ability." Veto conditions where the claim breaks:

Biomechanical veto. The relative angle is purely kinematic; turning cost is kinetic. Receiving square to the first pass (near 0° cone edge) versus receiving back-to-goal (0° cone center) both map to similar relative angles yet demand wildly different rotation, plant-foot loading, and reorientation time. The paper concedes this on [PAGE 25]: "The availability of body pose data in future will make this study more rigorous and complete … We will be able to study how exactly the players receive the ball (half-turn, back to goal)." So a large observed angle under a completed, high-xT outcome may reflect superior first-touch orientation, not superior "turning" — the metric cannot separate them. This is a genuine veto on causal attribution, not on the descriptive number.

Pressure operationalization veto. $n_{\text{press}}$ counts bodies within 5 yards with no facing or velocity term; two players each with one pressor 4.9 yd away are scored identically whether that pressor is closing at 8 m/s from the blind side or standing square and slow. Pressure resistance estimates inherit this coarse proxy.

Environmental veto. Carry/pass completion is treated as a position-and-pressure function; wind, precipitation, pitch surface, and altitude are absent. On a wet pitch, carry-failure proxies (dispossession labeling, [PAGE 6]) will systematically shift, biasing $\Delta$ for players/teams in those conditions.

Frame-edge veto (author-acknowledged, [PAGE 25]): tightness and $n_{\text{press}}$ are undefined when the actor is at the visual-frame boundary; any aggregate that includes these frames silently mixes valid and invalid cells. Adjudication: descriptive metric valid; causal "ability" attribution vetoed until body-pose, facing, and environmental covariates are added.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios with falsifiable predictions.

Veto 1 — JSD as press-resistance. If JSD genuinely indexes press-resistance, it must be (a) temporally stable within a player and (b) predict a smaller pressured-vs-unpressured completion drop out-of-sample. Prediction: recompute JSD on a disjoint half of the 540-game set ([PAGE 3]); elite players flagged low-JSD on [PAGE 22] retain rank order (Spearman $\rho > 0.6$) and show $\Delta_{\text{pressure}} \ge \Delta_{\text{no pressure}}$. Falsifier: JSD rank flips between halves → it is capturing sample noise, not a stable trait.

Veto 2 — the pressured-xT inversion ([PAGE 15]). This is the paper's own open anomaly. Prediction: the "xT under pressure > xT all actions" effect scales as $\sim 1/\sqrt{N}$ and attenuates toward zero when the sample is tripled (consistent with the "small sample size" hypothesis the authors raise on [PAGE 25]). Falsifier: effect persists or grows at larger $N$ → it is a real reward-misspecification signal (un-netted risk), and Direct Threat must be recomputed as $V - \lambda\,\text{Risk}$ before any ranking.

Veto 3 — Voronoi tightness at the frame edge. Prediction: events with the actor within one cell-radius of the visual-frame boundary show markedly higher variance in $\tau$ than interior events, and any player whose turn sample is >~20% edge-proximate will have an unstable tightness rank (large bootstrap CI). Falsifier: edge and interior tightness variances are statistically indistinguishable → the [PAGE 25] caveat is immaterial in practice.

Cross-cutting prediction: because the whole stack conditions on the ±45° "back" cone ([PAGE 3]), tightening to ±22.5° should reduce sample size roughly proportionally while leaving elite-player rankings (de Jong, Kroos, Kimmich, Modric, Busquets — [PAGE 11], [PAGE 16]) approximately stable; large ranking shifts would expose the broad cone as the dominant driver rather than true skill.
</RLVR_COUNTERFACTUAL_VETOES>

Bottom line: the paper is a sound, clearly-bounded methodology contribution — five composable metrics (relative-angle sonars, boosted completion expectation, xT direct/facilitated, Voronoi tightness/risk, entropy + JSD) layered on StatsBomb 360 data. Its descriptive metrics are valid; its causal "turning-ability" and "press-resistance" attributions are vetoed until the acknowledged proxies (body pose, pressor facing/velocity, frame-edge validity, game-state, environment) are incorporated, and until Direct Threat is netted against Risk to resolve the [PAGE 15] inversion. The reconstructed xT/KL/JSD equations above are flagged where the extraction dropped the glyphs; all three follow the canonical forms of their cited sources.