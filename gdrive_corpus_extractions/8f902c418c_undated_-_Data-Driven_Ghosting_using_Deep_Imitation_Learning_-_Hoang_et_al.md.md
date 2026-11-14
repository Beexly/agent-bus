---
source: "undated - Data-Driven Ghosting using Deep Imitation Learning - Hoang et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/undated"
pages: 15
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5023
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper ("Data-Driven Ghosting using Deep Imitation Learning" by Hoang et al.) and produce output with strict formatting requirements:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user said "PAGES: 15" and provided source text. I need to cite exact [PAGE N] markers. Looking at the source text, page numbers are embedded like "1", "2", etc. at the bottom of each page section. I need to reference them as [PAGE 1], [PAGE 2], etc.

Let me carefully map the content to pages:

Page 1: Introduction up to Figure 1 caption.
Page 2: Section 2 intro, Section 2.1 what is deep imitation learning.
Page 3: Section 2.2 Formation Discovery... role alignment, centroid positions.
Page 4: Feature vector details, LSTM architecture details.
Page 5: Section 3 Characterization, Figure 3 examples, Section 3.1 Variance, ~4 meters deviation.
Page 6: Team analysis Figure 5, goals conceded, top/bottom outliers.
Page 7: Section 3.2 Expected Goal Value, Table 1 reference, EGV 474 vs 494. Section 4 Quantifying Effect of Team Style.
Page 8: Figure 6, 61.8% correlation, team F 4-5-1 pressing.
Page 9: Section 5 Example dynamics, Fulham vs Swansea replay, stages.
Page 10: Section 6 Summary.
Page 11: References.
Page 12: Appendix Data Preparation, role alignment Hungarian algorithm, Gaussian distributions.
Page 13: Feature vector details (dimension 399), Deep Multi agent Imitation Learning intro.
Page 14: Algorithm details Phase 1 and Phase 2, T=50.
Page 15: Figure 10 and end.

I need to be careful: The source text shows page breaks with numbers. Let me trace:

- "1" appears after Figure 1 caption/intro paragraph -> Page 1.
- "2" appears after Section 2 intro paragraph -> Page 2.
- "3" appears after role alignment paragraph -> Page 3.
- "4" appears after LSTM paragraph -> Page 4.
- "5" appears after Section 3 intro and Figure 3 reference -> Page 5.
- "6" appears after Figure 5 discussion -> Page 6.
- "7" appears after Section 3.2 and start of Section 4 -> Page 7.
- "8" appears after Figure 6 discussion -> Page 8.
- "9" appears after Section 5 intro -> Page 9.
- "10" appears after Section 6 Summary -> Page 10.
- "11" appears after References -> Page 11.
- "12" appears after Appendix Data Preparation and Hungarian algorithm -> Page 12.
- "13" appears after feature vector dimension 399 -> Page 13.
- "14" appears after Algorithm details -> Page 14.
- "15" appears after Figure 10 -> Page 15.

Okay.

Now I need to write comprehensive analysis across all 6 XML sections with >=1000 words total, THINK_TRACE >=400 words.

Key constraints:
- NO betting lines (spreads, totals, moneylines, odds). The paper mentions EGV (Expected Goal Value) which is a probability (0-1), not betting odds. I must avoid calling it odds or using betting terminology. I can mention expected goal probability as a probability metric.
- NO toy equations. I must use real formal LaTeX equations from the paper or derive them properly. The paper describes an LSTM, imitation learning, state-action pairs, Hungarian algorithm, Gaussian mixtures, loss functions (implied SGD). I should formalize these.
- Cite [PAGE N] markers and verbatim quotes.

Let me plan content:

THINK_TRACE (>=400 words): Deep multi-hop derivation of how ghosting works from raw tracking data to counterfactual EGV. Gray-zone audit: limitations (no keeper modeling, 10-second window, error propagation, initialization only first frame, team identity vector as style transfer, correlation vs causation, small sample 100 games/3M frames, only open-play shots, no termination of shot opportunity by ghosts). Multi-hop: tracking -> role alignment -> state vector -> LSTM -> imitation learning phases -> ghost trajectory -> EGV calculation -> comparison to actual. Audit the gray zones: what breaks when sequence length > T=50? What happens if role misalignment? What if team style vector is out-of-distribution? etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- State feature vector dimension 399 [PAGE 13].
- Role alignment via Hungarian algorithm, cost = distance to Gaussian mixtures [PAGE 12].
- LSTM: two hidden layers, 512 units each [PAGE 4].
- Imitation learning objective: sequence {(s_t, a_t)}_{t=0}^T, T=50 [PAGE 14].
- Phase 1 and Phase 2 algorithm [PAGE 14].
- EGV calculation: sum over shot sequences, initialized first frame only, attacking positions unchanged [PAGE 7].
- Deviation metrics: ~4 meters average, <3m defenders, 80-20 rule out of position [PAGE 5-6].
- 61.8% correlation between ghost EGV and actual goals conceded [PAGE 8].
- EGV example: 69.1% actual vs 71.8% LAG vs 41.7% MCG [PAGE 1].
- Breakdown regimes: T=50 horizon, 10 fps, 170 frames average sequence length (~17s) [PAGE 2].
- Units: meters for deviation, seconds for time, frames at 10 fps, probability [0,1] for EGV.

RETROCAUSAL_GENEALOGY: Historical lineage: WAR baseball [1], EPV basketball [2], EGV soccer/hockey [3,4], Lowe's Grantland 2013 ghosting [6], Atari [7], AlphaGo [8], imitation learning Abbeel & Ng [9], Ross & Bagnell [12,13], style transfer Gatys et al. [15], formation discovery Bialkowski et al. [16]. Multi-week traps: overfitting to single season, team identity vector as style may not generalize to new coaches/formations (team F new coach), error accumulation in long sequences, correlation vs causation in defensive style.

RECURSIVE_THEORY_OF_MIND: This is about modeling opponents modeling you. Crisis habit regression: teams revert to habitual defensive shape under pressure (e.g., QPR dropping deep [PAGE 5]). Counter-trap: ghosting assumes opponents' attacking trajectories unchanged, but in reality attackers would adapt to ghost positioning (Stackelberg vs Nash). Clock: real-time constraint (model trains in hours, ghosts in real-time [PAGE 1]), but inference is frame-by-frame at 10fps, LSTM must run faster than 100ms/frame.

CROSS_LAYER_VETO_ADJUDICATION: Physical veto: ghost positions may be physically impossible (collision, offside, biomechanical acceleration limits). No goalkeeper modeled [PAGE 9, PAGE 13]. Weather: not mentioned in paper, but tracking data doesn't include weather; veto if weather alters ball physics. Biomechanical: player velocity/acceleration constraints not in state vector? The paper includes velocity in state vector [PAGE 12] but not explicit physical feasibility constraints in loss. Veto if ghost requires superhuman sprint or ignores fatigue.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
1. Veto: Sequence length exceeds T=50 frames (5 seconds at 10fps? Wait T=50 in algorithm, but average sequence 170 frames. Actually algorithm uses T=50 for training rollout, but sequences are longer. Phase 1 uses k=1..T. This is a mismatch: training rollout horizon T=50 vs inference over full ~170 frame sequence. Error propagation beyond 50 frames may break ghost realism. Prediction: ghosts diverge >3m from physical feasibility after frame 50+ in long possessions.
2. Veto: Team identity vector applied to team with insufficient data or new coach/style (domain adaptation shift). Prediction: EGV correlation drops below 61.8% for teams with <N games or mid-season coaching change (team F case [PAGE 8]).
3. Veto: Attacking team adapts to ghost defense (recursive theory of mind). Since ghosts assume fixed attacker trajectory [PAGE 7], actual EGV reduction from MCG (69.1% to 41.7%) is an upper bound; in live play attackers would reroute. Prediction: realized defensive improvement in actual match would be <27.4 percentage points (i.e., EGV > 41.7% if attackers re-optimize).

Word count: Need >=1000 words total. THINK_TRACE >=400. I'll aim for ~1500-1800 total.

Let me draft carefully, ensuring no betting language. Avoid "odds", "spread", "moneyline". Use "probability", "expected value", "EGV".

Need verbatim quotes and [PAGE N] citations. I'll pull exact quotes from text.

Let's write.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

I must be precise with page numbers. Let's double-check page mapping from source:

The source text has these page footers:
- After Figure 1 caption/intro: "1" -> PAGE 1
- After Section 2 first paragraph: "2" -> PAGE 2
- After role alignment paragraph: "3" -> PAGE 3
- After LSTM paragraph: "4" -> PAGE 4
- After Section 3 intro and Figure 3: "5" -> PAGE 5
- After Figure 5 paragraph: "6" -> PAGE 6
- After Section 3.2 paragraph: "7" -> PAGE 7
- After Figure 6/team F paragraph: "8" -> PAGE 8
- After Section 5 intro: "9" -> PAGE 9
- After Section 6 Summary: "10" -> PAGE 10
- After References: "11" -> PAGE 11
- After Appendix Data Preparation/Hungarian: "12" -> PAGE 12
- After Appendix feature vector dim 399: "13" -> PAGE 13
- After Algorithm Phase 1/2: "14" -> PAGE 14
- After Figure 10: "15" -> PAGE 15

Quotes to use:
- [PAGE 1]: "Ghosts (white) represent where Swansea defenders should have been according to a league average model (LAG) and Manchester City model (MUG)." and "69.1% for Swansea and 71.8% for the “league average” ghosts" and "69.1% to 41.7%".
- [PAGE 2]: "approximately 17400 sequences of attacking-defending situations (~3 million frames at 10 frames per second). The average length of all sequences is approximately 170 frames, or 17 seconds."
- [PAGE 4]: "Each player is modeled by an LSTM, which consists of two hidden layers of networks with 512 hidden units in each layer."
- [PAGE 5]: "The average level of deviation across all players and teams is about ~4 meters." and "more naive machine learning approaches ... would suffer from very high levels of prediction error (frequently in the 20-30 meters range)."
- [PAGE 6]: "a player at any given moment is considered out of position if his deviation from his ghost is in excess of the 80th percentile of the entire league average."
- [PAGE 7]: "EGV of 474 on actual goal count of 494 from open-plays". "we did not use penalties, free-kicks, set pieces, and game sequences with less than 11 players from either side".
- [PAGE 8]: "We observe a 61.8% correlation between the total EGV coming from different ghosting styles with the overall number of goals conceded in reality."
- [PAGE 9]: "Note that we do not model goal-keeper positions, which are highlighted (number 1)."
- [PAGE 12]: "the data requirement to learn a “permutation-invariant” behavior will need to increase by a factor of billions ((10!)<sup>2</sup> specifically)." and "Hungarian algorithm".
- [PAGE 13]: "This results in a full input feature of dimension 399 for each role at each frame."
- [PAGE 14]: "We use T=50 in for our ghosting application to soccer defense." and algorithm steps.

Now writing. Need to ensure formal LaTeX. I'll use \[ ... \] or \( ... \).

Let's compose.

THINK_TRACE content (multi-hop derivation):
1. Raw tracking data: 100 games, 10 fps, ~3M frames, ~17400 sequences [PAGE 2].
2. Defensive sequences defined by non-possession, terminated by goal/out/dead-ball/possession regain [PAGE 2].
3. Role alignment: centroid-based dominant role, Hungarian algorithm assigning to Gaussian mixtures, ~4-4-2 [PAGE 3, PAGE 12].
4. State vector: absolute + polar coords, closest 3 mini-blocks duplicated, team identity vector, dim 399 [PAGE 3, PAGE 12, PAGE 13].
5. LSTM: 2 layers x 512 units, outputs next position [PAGE 4].
6. Imitation learning: compounding error addressed by scheduled sampling / DAgger-like rollout, Phase 1 single player, Phase 2 multi-agent joint [PAGE 4, PAGE 14]. T=50 rollout horizon [PAGE 14].
7. Ghost initialization: first frame actual defender positions, then autoregressive rollout while attackers fixed [PAGE 7].
8. EGV: expected goal probability at shot event, sum over season [PAGE 7]. Counterfactual: LAG 71.8% vs actual 69.1%, MCG 41.7% [PAGE 1].
9. Gray zones: no keeper modeling [PAGE 9]; fixed attackers means no strategic response; T=50 << 170 frame avg sequence means error compounding beyond horizon; role misalignment; only 100 games; team style transfer via identity vector may not capture new coach effects; 80-20 rule threshold arbitrary; EGV doesn't model shot termination [PAGE 8].

I'll write this in narrative form, >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define state s_t \in R^{399} [PAGE 13].
- Role alignment cost C(i, \mu_g) = ||c_i - \mu_g||_2, Hungarian min cost assignment [PAGE 12].
- LSTM mapping: h_t = LSTM(h_{t-1}, s_t), \hat{p}_{t+1} = f_{out}(h_t) [PAGE 4].
- Imitation loss: L = \sum_{t=0}^{T} ||\hat{a}_{t} - a_t||_2^2 with scheduled sampling rollout [PAGE 14].
- Phase 1/2 recurrence [PAGE 14].
- EGV(\tau) = P(goal | s_{\text{shot}}) [PAGE 7]. Season total EGV = \sum_{\tau \in \mathcal{S}} EGV(\tau) [PAGE 7].
- Out-of-position: \mathbb{1}(\|p_i - g_i\|_2 > \pi_{0.8}) [PAGE 6].
- Deviation stats: \bar{d} \approx 4m, defenders <3m, naive 20-30m [PAGE 5].
- Breakdown: T=50 frames at 10fps = 5s rollout in training vs 17s avg sequence; singularity if role unidentifiable or team OOD.

RETROCAUSAL_GENEALOGY:
- WAR [1], EPV [2], EGV [3,4] as discrete event metrics [PAGE 1].
- Lowe/Grantland 2013 manual ghosting [6] [PAGE 1].
- Atari [7], AlphaGo [8] as deep RL/imitation precursors [PAGE 1].
- Abbeel & Ng [9], Ross & Bagnell [12,13] imitation learning [PAGE 1, PAGE 4].
- Gatys style transfer [15] as analogy for team identity vector [PAGE 7].
- Bialkowski formation discovery [16] [PAGE 3].
- Multi-week traps: small sample (100 games/third of season) [PAGE 2, PAGE 12]; team F new coach means identity vector captures unstable style [PAGE 8]; correlation 61.8% not causation [PAGE 8]; open-play shot isolation ignores pre-shot organization [PAGE 8].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: QPR defenders drop deep, yielding open space [PAGE 5]; top team's attack-oriented positions drift [PAGE 6]; bottom/relegation team drifts far [PAGE 6]. Under pressure, teams regress to habitual shape rather than optimal ghost.
- Counter-trap: Ghost model holds attacking trajectories fixed [PAGE 7], so it assumes attackers do not update their policy in response to ghost defenders. In a dynamic game, defenders' repositioning changes attackers' best response (Stackelberg leadership vs simultaneous move). Thus EGV 41.7% is a partial-equilibrium counterfactual, not a Nash equilibrium.
- Clock: Real-time ghosting at 10 fps means inference must complete <100 ms per frame. Training takes hours [PAGE 1], but deployment clock is tight. Phase 2 joint training increases compute. If inference latency > frame interval, ghost lags actual play and loses causal relevance.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical veto: Ghost positions may violate collision avoidance, offside, or acceleration limits. State vector includes velocity [PAGE 12], but loss function is position-matching without explicit physical feasibility constraints. Veto if ||\dot{p}|| > v_max or ||\ddot{p}|| > a_max.
- Biomechanical: No goalkeeper modeled [PAGE 9, PAGE 13]; keeper is critical in shot-stopping EGV. Veto for shot sequences where keeper positioning dominates EGV.
- Weather: Not represented in tracking data or state vector. Veto if weather (rain, wind) materially alters ball rolling/flying physics; model assumes stationary pitch conditions.
- Adjudication: A veto is triggered if any physical constraint is violated by ghost trajectory; otherwise EGV comparison stands.

RLVR_COUNTERFACTUAL_VETOES:
1. Horizon veto: Sequence length > T=50 frames (5s at 10fps) while actual sequences average 170 frames [PAGE 2, PAGE 14]. Error compounding beyond 50 frames causes ghost drift. Prediction: For possessions >5s, average ghost deviation exceeds 3m defender threshold and approaches naive 20-30m error, invalidating EGV counterfactuals for long attacking spells.
2. Identity distribution shift: Team identity vector assumes style stationarity within season [PAGE 7, PAGE 8]. Team F changed coach and adopted 4-5-1 pressing [PAGE 8]. If applied mid-season to a team with new coach or formation change, ghost style mismatches reality. Prediction: 61.8% correlation collapses for teams with mid-season managerial or formation shifts; EGV residuals increase.
3. Strategic non-stationarity (attacker adaptation): Ghosts initialize from defenders only and hold attackers fixed [PAGE 7]. Actual Fulham-Swansea play shows MCG reduces EGV from ~70% to ~40% [PAGE 1, PAGE 9]. But if Fulham's attackers re-optimize runs against MCG-style defense, the realized EGV is higher. Prediction: In live play with attacker best response, the EGV reduction from adopting MCG ghost positioning is strictly less than 29 percentage points; realized post-adaptation EGV > 41.7%.

This looks solid. I'll write it out fully with proper XML tags, ensuring word count.

Need to count words. I'll write generously.

Let's begin drafting final output.
</NATIVE_REASONING>

<THINK_TRACE>
The deep multi-hop derivation begins with the raw ingestion pipeline described on [PAGE 2]: 100 games from one professional soccer league, sampled at 10 frames per second, yielding approximately three million frames organized into roughly 17,400 attacking-defending sequences. A defensive sequence is formally bounded by the moment the opposition controls the ball and terminates upon a goal against, the ball leaving play, a dead-ball event, or the defense regaining possession after two consecutive touches. The mean sequence length is approximately 170 frames, or 17 seconds. This establishes the first constraint: the observation window is finite and the average temporal horizon exceeds the training rollout horizon of T=50 frames disclosed in the appendix on [PAGE 14].

The second hop is role alignment and state construction. Rather than enforcing nominal jersey positions, the authors extract each player’s dominant role from centroid positions across a segment, then solve a minimum-cost assignment via the Hungarian algorithm against a mixture of Gaussian role centroids, producing a season-average formation resembling 4-4-2 [PAGE 3][PAGE 12]. The combinatorial alternative—permutation-invariant learning over 22 players—would explode the data requirement by a factor of (10!)², explicitly noted on [PAGE 12]. The state feature vector for a single role at one frame stacks absolute coordinates, relative polar coordinates (distance and angle) toward the ball, goal, and the modeled role, plus duplicated mini-blocks for the three nearest positions and a one-hot team-identity vector, totaling dimension 399 per role per frame [PAGE 3][PAGE 12][PAGE 13].

The third hop is the behavior model itself. Each of the ten outfield roles is assigned an LSTM with two hidden layers of 512 units [PAGE 4]. Standard supervised sequence-to-sequence training is insufficient because errors compound autoregressively over long temporal spans. The authors therefore apply deep imitation learning: Phase 1 trains single-role models using scheduled rollouts of increasing length k from 1 to T, where the model’s own predicted action is fed back to update the state before computing the loss against ground truth [PAGE 14]. Phase 2 extends this to joint multi-agent training, such that each role’s predicted action updates the state feature vectors of all other roles, capturing collaborative defensive motion [PAGE 14]. This directly addresses the “compounding deviation” problem the authors contrast with naive approaches that suffer 20–30 meter errors; their method achieves a league-average deviation of roughly 4 meters, with defenders typically under 3 meters [PAGE 5].

The fourth hop is counterfactual deployment and Expected Goal Value (EGV) scoring. For each open-play shot event, the ghost model is initialized solely from the defenders’ actual positions in the first frame, then unrolled autoregressively while attacking positions and ball movement remain frozen [PAGE 7]. EGV is computed from the terminal shot configuration and summed across the season’s 6,020 open-play shots [PAGE 7]. The paper reports actual open-play goals of 494 versus an EGV of 474 for the league-average ghost [PAGE 7], and in the Fulham–Swansea example the actual sequence and league-average ghost both sit near 69–72% EGV, whereas the Manchester City-tuned ghost drops the probability to 41.7% [PAGE 1][PAGE 9].

Gray-zone audit: (1) Goalkeepers are explicitly excluded from modeling [PAGE 9][PAGE 13], yet EGV is dominated by shot-stopping context, introducing a systematic veto risk for close-range chances. (2) The attacker trajectories are held fixed, so the ghost estimates a partial-equilibrium defensive response, not a Nash equilibrium in which attackers re-optimize runs against a Manchester City-shaped defense. (3) T=50 frames equals five seconds of rollout during training, but sequences average seventeen seconds; beyond the training horizon the LSTM has no explicit recovery guarantee, so long possessions risk error divergence toward the naive 20–30 meter regime [PAGE 2][PAGE 5][PAGE 14]. (4) The team identity vector performs style transfer akin to neural artistic style [PAGE 7][PAGE 15], but team F’s mid-season coaching change and 4-5-1 pressing shift [PAGE 8] show that identity embeddings can become stale within a single season. (5) The dataset covers only about one-third of a season (~100 games) [PAGE 2][PAGE 12], limiting statistical power for rare defensive situations. (6) The 80-20 “out of position” rule is a league-wide percentile threshold, not a position-specific biomechanical tolerance, so it may misclassify tactically intentional deviations as errors [PAGE 6].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(s_t \in \mathbb{R}^{399}\) denote the state feature vector for a single defensive role at frame \(t\), constructed from absolute player/ball coordinates, relative polar coordinates toward the ball, goal, and target role, duplicated mini-blocks for the three nearest positions, and a team-identity one-hot vector [PAGE 3][PAGE 12][PAGE 13].

Role alignment assigns player \(i\) to role centroid \(\mu_g\) by solving the Hungarian minimum-cost assignment
\[
\min_{\pi} \sum_{i} \| c_i - \mu_{\pi(i)} \|_2,
\]
where \(c_i\) is the player’s centroid position over the segment and centroids are learned from Gaussian mixtures of spatial coverage [PAGE 12]. The nominal permutation-invariant alternative would require scaling data by \((10!)^2\), an explicit breakdown regime for unordered multi-agent learning [PAGE 12].

The LSTM behavior model for role \(j\) is
\[
h_t^{(j)} = \mathrm{LSTM}^{(j)}(h_{t-1}^{(j)}, s_t), \qquad
\hat{p}_{t+1}^{(j)} = f_{\mathrm{out}}^{(j)}(h_t^{(j)}),
\]
with two hidden layers of 512 units each, outputting the next-frame position \(\hat{p}_{t+1} \in \mathbb{R}^2\) in SI meters [PAGE 4].

The imitation-learning objective over a rollout horizon \(T=50\) frames (5 seconds at 10 fps) is
\[
\mathcal{L} = \sum_{t=0}^{T} \left\| \hat{a}_{t} - a_t \right\|_2^2,
\]
where actions are next-frame positions. Phase 1 applies scheduled sampling: for \(k=1,\dots,T\), at times \(t=0,k,2k,\dots\), the model’s own predicted action \(\hat{a}_{t+i}\) updates the state \(s_{t+i+1}\) before the loss is computed against ground truth \(a_{t+i}\) [PAGE 14]. Phase 2 extends this to joint multi-agent updates such that role \(j\)’s predicted action perturbs the state vectors of all other roles \(j'\) [PAGE 14].

Expected Goal Value for shot sequence \(\tau\) is a terminal probability
\[
\mathrm{EGV}(\tau) = \Pr(\text{goal} \mid s_{\text{shot}}),
\]
evaluated after unrolling ghosts from frame 1 while attackers remain fixed, and the season total is \(\sum_{\tau \in \mathcal{S}} \mathrm{EGV}(\tau)\) over the 6,020 open-play shots [PAGE 7]. Paper-reported values: actual Fulham goal probability near 69.1%, league-average ghost 71.8%, Manchester City-tuned ghost 41.7% [PAGE 1][PAGE 9]; season open-play actual goals 494 vs. ghost EGV 474 [PAGE 7].

Out-of-position flag uses the 80th-percentile league deviation \(\pi_{0.8}\):
\[
\mathbb{1}_{\mathrm{OOP}}(i,t) = \mathbb{1}\!\left( \| p_{i,t} - g_{i,t} \|_2 > \pi_{0.8} \right),
\]
with mean league deviation \(\bar d \approx 4\) meters, defenders mostly under 3 meters, and naive non-imitative models degrading to 20–30 meters [PAGE 5][PAGE 6].

Breakdown/singularity regimes: (i) sequence length \(>T=50\) frames invalidates the training rollout assumption; (ii) team-identity vector out-of-distribution after mid-season coaching or formation change; (iii) goalkeeper absence removes shot-stopping state; (iv) weather not represented in \(s_t\), so ball physics assumptions fail under rain or wind.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with discrete-event sports metrics: Wins-above-Replacement in baseball [1], Expected Point Value in basketball [2], and Expected Goal Value in soccer and hockey [3][4], all cited on [PAGE 1] as the status quo that ghosting seeks to surpass by moving from event-level aggregation to fine-grain movement. The direct procedural ancestor is Zach Lowe’s 2013 Grantland article describing the Toronto Raptors’ manual “ghosting” system in STATS SportVU data [6], which required substantial human annotation and established defensive positioning as a measurable, viewable quantity [PAGE 1].

Methodologically, the authors anchor deep imitation learning in robotics and control: Abbeel and Ng’s apprenticeship learning via inverse reinforcement learning [9], Ross and Bagnell’s reductions to no-regret online learning [12][13], and the survey of learning from demonstration [11] are all referenced on [PAGE 1] and [PAGE 4]. The Atari and AlphaGo analogies [7][8] justify treating sequential sports decisions as an AI mapping from game history to the next frame of action [PAGE 1][PAGE 4]. Formation discovery draws on Bialkowski et al.’s large-scale spatiotemporal soccer analysis [16], adapted here through Gaussian-mixture role centroids and Hungarian alignment [PAGE 3][PAGE 12]. The team-identity vector is explicitly analogized to Gatys, Ecker, and Bethge’s neural style transfer [15], treating defensive style as a transferable aesthetic across team canvases [PAGE 7].

Multi-week traps embedded in this genealogy: (1) The sample is only ~100 games, roughly one-third of a season, which the authors themselves cite as a constraint imposed by lack of high-quality annotated data [PAGE 2][PAGE 12]; stylistic conclusions drawn over 15–20 days of matches may not survive a full 38-game campaign. (2) Team F is presented as an efficient defensive outlier using a 4-5-1 pressing system under a new coach [PAGE 8], yet a new coach implies the identity vector is fit to a non-stationary distribution; a multi-week analysis would likely capture regime drift rather than a stable style. (3) The reported 61.8% correlation between ghost-style EGV and actual goals conceded [PAGE 8] is associative, not causal; luck and finishing are explicitly acknowledged as confounds [PAGE 8], so extending the correlation over multiple weeks risks mistaking variance for persistent defensive quality. (4) The open-play shot isolation ignores how teams organize defense prior to the shot opportunity [PAGE 8], meaning weekly EGV rankings may reward shot suppression while missing upstream structural vulnerabilities.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears repeatedly in the team-level variance analysis. The top and bottom teams in goals conceded are both outliers in out-of-position frequency, but for opposite reasons: the top team’s attack-oriented positions (wingers and forwards) exhibit wider movement relative to league average, while the relegated bottom team shows both defensive and offensive players drifting far from average [PAGE 6]. In the Fulham–Swansea breakdown, the actual QPR defenders (Blue #5 and #8) drop deeper under pressure and yield open space, a reversion to a conservative habit shape that the ghost models exploit [PAGE 5]. These are crisis regressions: when win probability collapses or shot danger rises, teams abandon the league-average optimal posture and fall back on habitual, often suboptimal, defensive spacing.

The counter-trap is that ghosting holds the attacking policy fixed. The authors initialize ghosts from defenders’ first-frame positions and explicitly leave “all other factors of the given sequence remained unchanged (attacking player positions and ball movement)” [PAGE 7]. This is a partial-equilibrium simulation: it computes what Swansea should have done against the Fulham attack that actually occurred, not what Fulham would do if they knew Swansea were defending with a Manchester City-style ghost. In game-theoretic terms, the ghost model assumes a leader–follower Stackelberg structure in which defenders commit first and attackers cannot re-optimize. If Fulham’s attackers re-route runs, alter passing angles, or change shooting locations in response to MCG-style positioning, the 41.7% EGV is an optimistic lower bound; the true equilibrium EGV after attacker adaptation would be higher.

The clock constraint is operationalized by real-time deployment. The authors state the model trains in several hours and can ghost every play in real-time [PAGE 1], but tracking data arrive at 10 fps, imposing a 100 ms inference budget per frame. Phase 2’s joint multi-agent training increases computational load; if forward passes exceed the frame interval, the ghost lags the live state and its positional prescriptions become causally stale. Moreover, training rollout uses T=50 frames while matches contain sequences averaging 170 frames [PAGE 2][PAGE 14], so the clock of autoregressive inference extends beyond the verified stability horizon of the learned policy.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: Ghost positions are unconstrained by collision avoidance, offside law, or hard biomechanical limits. The state vector includes velocity [PAGE 12], yet the loss is purely position-matching over next-frame coordinates; there is no explicit constraint enforcing \(\|\dot p\|_2 \le v_{\max}\) or \(\|\ddot p\|_2 \le a_{\max}\). A veto is triggered if a ghost trajectory requires superhuman acceleration or occupies the same pitch coordinate as a teammate or attacker.

Biomechanical veto: Goalkeepers are excluded from the model [PAGE 9][PAGE 13], yet EGV for a shot is overwhelmingly determined by keeper positioning and shot-stopping capacity. Any veto adjudication for shots inside the penalty area must flag missing keeper state; EGV comparisons involving close-range finishes are physically incomplete without a keeper ghost.

Weather veto: The source data and state vector contain no meteorological parameters. Rain alters ball roll and sliding friction; wind alters lofted pass and shot trajectories. Because the model assumes stationary pitch conditions, any match or sequence played under materially adverse weather invokes a veto on EGV generalizability.

Adjudication rule: A ghost counterfactual is admissible only if (a) all ghost positions satisfy inter-player collision and pitch-boundary constraints, (b) no shot-event EGV relies on unmodeled keeper behavior, and (c) weather conditions match the stationary assumption implicit in the tracking data. If any layer vetoes, the numerical EGV delta (e.g., 69.1% to 41.7%) cannot be interpreted as a realizable defensive improvement.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Training-horizon mismatch. The imitation-learning rollout horizon is T=50 frames at 10 fps, i.e., five seconds [PAGE 14], while the average defensive sequence lasts approximately 170 frames or 17 seconds [PAGE 2]. Possessions exceeding five seconds force the LSTM to autoregress beyond its validated recovery regime. Verifiable prediction: for attacking sequences longer than 5 seconds, average ghost deviation will exceed the 3-meter defender tolerance and trend toward the naive 20–30 meter error band reported on [PAGE 5], invalidating terminal EGV for long possessions.

Veto Scenario 2 — Team-identity distribution shift. The style-transfer mechanism assumes a stationary team-identity vector within the season [PAGE 7], yet team F adopted a 4-5-1 pressing system under a new coach mid-season [PAGE 8]. Applying an identity vector fit to pre-change data to post-change matches produces a style mismatch. Verifiable prediction: the 61.8% correlation between ghost-style EGV and actual goals conceded [PAGE 8] will collapse for teams experiencing a managerial or formation change; residual error (actual conceded minus ghost EGV) will increase by a statistically significant margin relative to stable-style teams.

Veto Scenario 3 — Attacker best-response (non-stationarity). Ghosts initialize from defenders only and freeze attacking trajectories [PAGE 7]. In the Fulham–Swansea case, the Manchester City ghost lowers EGV from roughly 70% to 41.7% [PAGE 1][PAGE 9], but this presumes Fulham’s attackers do not re-optimize runs against a deeper, more proactive back line. Verifiable prediction: under live attacker adaptation, the realized EGV reduction from adopting MCG-style positioning will be strictly less than 29 percentage points; the post-adaptation equilibrium EGV will exceed 41.7%, meaning the paper’s counterfactual is an upper bound on defensive value rather than a realizable in-game outcome.
</RLVR_COUNTERFACTUAL_VETOES>