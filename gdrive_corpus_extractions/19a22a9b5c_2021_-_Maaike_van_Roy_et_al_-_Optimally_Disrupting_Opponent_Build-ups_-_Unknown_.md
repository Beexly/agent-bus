---
source: "2021 - Maaike van Roy, et al - Optimally Disrupting Opponent Build-ups - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Hudl StatsBomb/Research Competitions/2021"
pages: 16
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4683
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about "Optimally Disrupting Opponent Build-ups" using the GSE + GSI Frontier Reasoning Foundry framework. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations like Force/Fatigue. Need formal math.

Let me structure this carefully.

The paper is about MDPs for soccer build-up play, defensive setups (high/low block, left/right forcing), reachable teammates via StatsBomb 360 data, Brier scores, Bayesian averaging, probabilistic model checking with PRISM.

I need to write >= 1000 words total across sections. The THINK_TRACE alone needs >=400 words. Total across all sections should be >=1000.

Let's draft:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Need to discuss:
- The MDP formalism: state space (30 location-based, 480 extended), absorbing states (sloss_possession, sgoal, sno_goal), transient states.
- Transition function P(s,a,s') defined by success/failure probabilities.
- Policy π(a|s).
- Reward function: only goal = 1.
- Learning: ~1700 sequences per team, split into 4 defensive setups (~850 each).
- Defensive setups: high/low block (5 meters past halfway line), left/right forcing (positioning + first two actions to flank).
- End state prediction: gradient boosted trees, Brier scores, post-processing boost reachable teammates by 2x.
- Bayesian average for data sparsity: C_i constants, <30 actions triggers C_i = 9/m_i for 99% CI.
- Build-up efficiency: probability of reaching final third via PRISM v4.7.
- Counterfactual reasoning: what if different defensive strategy followed (cite Pearl [7]).
- Gray zones: 360 data from broadcast video visibility limits (occlusion), defensive setup definitions rely on "visible defensive players" and arbitrary 5m threshold; reachability binary radius 1.5m teammate, 1m passing lane; Gaussian smoothing bandwidth unspecified; Brier score improvements are tiny (0.41816 -> 0.41597) so practical significance low; PRISM state explosion with 480 states?; counterfactuals are model-based not causal interventions; no weather/biomechanics.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Units. Page citations. Breakdown. Singularity/breakdown regimes.
- MDP tuple (S, A, P, π, R).
- Absorbing/transient states.
- Reachability conditions.
- Bayesian averaging equations.
- Brier score definition (Brier 1950).
- PRISM verification property P=? [F final_third].
- Breakdown: <30 actions triggers prior dominance; 360 data requires visibility; 5m threshold hard boundary; 1.5m/1m reachability hard boundaries; absorbing state self-loop probability 1.

RETROCAUSAL_GENEALOGY: Historical lineage.
- Rudd 2011 NESSIS Markov chains.
- Yam 2019 Expected Threat/Attacking Contributions.
- Singh 2019 xT.
- Van Roy et al. 2021 ICML RL4RealLife, MIT Sloan, IJCAI AISA.
- Pearl & Mackenzie 2018 counterfactuals (Book of Why).
- Kwiatkowska et al. PRISM.
- Gurpinar-Morgan, Michalczyk clustering.
- Moore pass chain analysis.
- Multi-week traps: small sample per defensive setup (~850 sequences split across states), temporal non-stationarity (injuries, form, tactical shifts across weeks), overfitting to 2020-2021 single season.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Attacking team's preferred patterns (habit regression under crisis: e.g., Bayern left flank with Davies high, Real Madrid left flank Kroos/Marcelo).
- Defending team's counter-trap: force opponent to inefficient side (e.g., force Real Madrid right, force Atlético left away from Trippier).
- Clock: build-up starts without pressure, ends on loss of possession or shot; absorbing states terminate sequence; time pressure not modeled explicitly (no game clock, score state, red cards, fatigue).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- The model is pure spatiotemporal event data; no physical layer (biomechanics, weather, pitch condition, player load).
- Veto: if weather affects passing lane geometry or ball physics, MDP transition probabilities learned from one condition don't transfer.
- Biomechanical: reachability radius 1.5m ignores sprint speed, acceleration, passing velocity; no kinetic model.
- No veto mechanism in paper for exogenous shocks.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 scenarios that are verifiable (not betting lines). Predictions based on paper's logic.

Scenario 1: Data sparsity singularity. If a state has <30 actions, Bayesian prior dominates. Prediction: for rarely visited states (e.g., deep own half extended states), the model collapses to league average prior, making team-specific tactical advice indistinguishable from prior; verification: compare policy entropy in low-count vs high-count states, expect convergence to m_i prior.
Scenario 2: Visibility/occlusion veto. 360 data requires player visible in broadcast video. Prediction: in defensive setups with high pressing and player clustering/occlusion, reachability features are systematically missing/biased; verification: correlate reachability feature completeness with camera angle/press intensity; expect decreased F1 for reachability in high-block vs low-block matches.
Scenario 3: Counterfactual non-identifiability / strategy switching trap. Paper switches recommended flank for Granada, Betis, Sevilla between high and low block (>0.5% efficiency decrease). Prediction: if a team faces unpredictable block switching within a match, the precomputed optimal defense is invalid because MDP is learned per static defensive setup; verification: simulate within-match block switches using PRISM and show build-up efficiency reverts to baseline because transition functions P(s,a,s') are setup-specific and not interpolated.

Need to ensure no betting lines. "Odds" appears in paper? "likelihood" and "probability" are fine. "Odds" might be in betting context; avoid using "odds" in betting sense. The paper uses "probability" which is fine. I should avoid "moneyline", "spread", "total".

Also no toy equations: don't invent Force/Fatigue. Use only equations from paper or standard formalism properly attributed.

Word count: Need >=1000 words total. THINK_TRACE >=400 words. Let me make sure each section is substantial.

Let's write carefully with citations [PAGE N].

I need verbatim quotes? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes with page markers.

Let's draft the content.

Section 1: THINK_TRACE (>=400 words). Multi-hop derivation:
- Start with MDP definition on page 3: five parts.
- State space: location-based 30 states (page 3-4); extended 480 states with 4 binary reachability features (page 4).
- Reachability: teammate reachable if no opponent within 1.5m of teammate AND no opponent within 1m of passing lane (page 4).
- Absorbing states: sloss_possession, sgoal, sno_goal (page 3).
- Transition function (page 5-6).
- Policy and reward (page 6): reward 1 only for goal.
- Learning from data (page 6-7): ~1700 sequences per team, ~850 per block type.
- Defensive setups definitions (page 7): high/low block 5m past halfway line; left/right forcing requires first two actions to flank.
- End location prediction (page 8): gradient boosted trees, Brier scores, boost reachable states by 2x.
- Bayesian averaging (page 9): equations with C_i constants, <30 actions -> C_i = 9/m_i for 99% CI.
- Build-up efficiency via probabilistic verification PRISM v4.7 (page 10): probability of reaching final third.
- Gray-zone audit: (1) arbitrary 5m threshold; (2) reachability hard cutoffs ignore dynamics; (3) broadcast video visibility means 360 data incomplete under occlusion; (4) Brier improvements marginal (e.g., pass 0.41816 to 0.41597); (5) counterfactuals rely on learned model not causal identification; (6) single season 2020-2021, no temporal transfer.

I'll weave this into ~450 words.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS. Formal LaTeX.
MDP: \mathcal{M} = (S, A, P, \pi, R)
S = S_transient ∪ S_absorbing
S_absorbing = {s_loss_possession, s_goal, s_no_goal}
S_transient location-based: |S| = 30
S_transient extended: |S| = 480 = 30 × 2^4? Actually 30 locations × 16 combinations? Paper says 480 states. 30 × 16 = 480. Yes.
Reachability feature r_p ∈ {0,1} for patch p ∈ {1,2,3,4}.
Reachability condition: ∄ opponent within 1.5 m of teammate; ∄ opponent within 1 m of passing lane.
Transition: P(s,a,s') = Pr[S_{t+1}=s' | S_t=s, A_t=a].
Absorbing self-loop: P(s_abs, a, s_abs) = 1.
Policy: π(a|s) = Pr[A=a | S=s].
Reward: R(s,a,s') = 1 iff s' = s_goal, else 0.
Bayesian average:
π(shoot|s) = (C_1 m_1 + #shots in s) / (C_1 + #actions in s)
etc.
C_i = 9/m_i if #actions in state < 30; else C_i = 0. 99% confidence interval around prior.
Build-up efficiency: η = Pr[ reach final third | MDP, defensive setup ], computed via PRISM v4.7 probabilistic verification. Property: P=? [F final_third].
Brier score: BS = 1/N Σ (f_i - o_i)^2 where f_i forecast probability, o_i outcome ∈ {0,1}. Lower better.
Breakdown regimes: N_actions(s) < 30 triggers prior dominance; 360 data requires line-of-sight visibility; 5 m halfway-line threshold is discontinuous; 1.5 m / 1 m reachability radii are hard Euclidean cutoffs ignoring ball velocity and player acceleration.

Section 3: RETROCAUSAL_GENEALOGY.
Lineage: Rudd 2011 Markov chains for tactical analysis; Yam 2019 Attacking Contributions/Expected Threat; Singh 2019 xT; Van Roy et al. 2021 (ICML RL4RealLife, MIT Sloan, IJCAI AISA) extending to decision-making and defensive game plans; Pearl & Mackenzie 2018 counterfactual reasoning (Book of Why) cited as [7] for counterfactual necessity; Kwiatkowska et al. 2011 PRISM model checker; Gurpinar-Morgan 2019 and Michalczyk 2019 clustering initiating passes/pass chains but couldn't evaluate efficiency due to sparsity; Moore 2018 ignored intermediate locations.
Multi-week traps: (1) all models trained on single 2020-2021 season; tactical personnel changes (transfers, injuries) across weeks break stationarity; (2) ~850 sequences per block type split across 30/480 states means many states are data-sparse and rely on league prior (Bayesian average), causing cross-team leakage; (3) high vs low block classifications are match-specific snapshots, not stable multi-week identities; (4) no modeling of game clock, score, red cards, or fatigue—crisis moments late in matches not distinguished.

Section 4: RECURSIVE_THEORY_OF_MIND.
Crisis habit regression: under pressure, teams regress to preferred patterns (Barcelona central combinations via Busquets; Real Madrid left flank Kroos/Marcelo; Bayern left flank Davies high, Pagard conservative). These are the "habit regressions" the model captures via most likely sequences (page 10-11).
Counter-trap: defending team should not merely react but set the trap—force opponent to inefficient side. Examples: force Real Madrid right (2.6% high block, 3.8% low block efficiency decrease vs left); force Atlético left (away from Trippier's six assists); block CB's right side under high block for all top-6 teams; block CB's left side under low block for Dortmund and Atlético (page 12-14).
Clock: build-up sequence clock starts at defender in possession without pressure and terminates at loss of possession or shot (page 7). No explicit match clock, no shot clock, no possession time limit; absorbing states are the only temporal boundary. The MDP is temporally abstract (step-based, not second-based), so "clock" is number of actions, not match time.

Section 5: CROSS_LAYER_VETO_ADJUDICATION.
Physical layer: pitch dimensions, weather (rain/wind affecting ball flight and passing lane geometry), surface friction. The MDP transition probabilities P(s,a,s') are learned from event data that implicitly averages over conditions; no condition-specific parameters. Veto: if a match is played in heavy rain, passing success probability from state s to s' deviates from learned model; model lacks a weather modulation term.
Biomechanical layer: reachability defined by static 1.5 m / 1 m Euclidean radii (page 4). No sprint speed, acceleration, passing velocity, or defensive closing speed. A teammate 1.4 m away but covered by a faster opponent is still marked reachable; a passing lane 0.9 m from an opponent but with high ball speed is marked safe. Veto: high-velocity transitions invalidate static reachability.
Weather/biomechanical veto proof: The paper offers no veto mechanism; the MDP assumes the defensive setup is the only conditioning variable. Cross-layer veto would require an exogenous gating variable W (weather), B (biomechanical state) such that P(s,a,s' | setup, W, B) ≠ P(s,a,s' | setup). Not present.

Section 6: RLVR_COUNTERFACTUAL_VETOES. 3 verifiable veto scenarios + predictions.
Scenario 1: Prior-dominance singularity. When a state has fewer than 30 actions, C_i = 9/m_i forces posterior toward league prior m_i. Verification: select extended states in a team's own half with <30 visits; compare learned π against league prior m_i using KL divergence; prediction: KL divergence < ε (small) for low-count states, indicating model outputs are prior-dominated and not team-specific. Tactical advice from these states is unverifiable as team-specific.
Scenario 2: Occlusion-induced reachability bias. 360 data requires players visible in broadcast video. Verification: in matches with high defensive pressing (high block), player clustering increases occlusion; measure completeness of reachability features per match; prediction: high-block matches show statistically significantly lower reachability feature completeness than low-block matches (e.g., chi-square or t-test on fraction of missing patches), biasing the extended MDP transition function toward "unreachable" and artificially inflating disruption value of high block.
Scenario 3: Within-match defensive-setup non-stationarity counter-trap failure. The paper learns one MDP per static defensive setup (page 6-7). Verification: construct a hybrid MDP where transition function switches mid-sequence between high-block and low-block P matrices; compute build-up efficiency via PRISM; prediction: efficiency under rapid switching converges to the arithmetic mean of static-block efficiencies, not the optimal static-block disruption; therefore a pre-match plan optimized for one block is vetoed if the opponent changes block within the match. Teams like Granada, Betis, Sevilla requiring side-switch between high vs low block (page 12) are especially vulnerable because their optimal defense is block-contingent.

Now need to ensure total word count >= 1000. Let's estimate. THINK_TRACE ~450. SOURCE_OPERATORS ~350. RETROCAUSAL ~200. RECURSIVE ~150. CROSS_LAYER ~150. RLVR ~200. Total ~1500. Good.

Need to avoid "odds" in betting context. I might say "probability" only. The paper uses "odds"? Let me check... I don't see "odds" in the source text provided. Good.

Also avoid "toy equations". I won't invent fake ratios.

Let's make sure to include verbatim quotes with [PAGE N]. Example: "a teammate is reachable if the following conditions are met: 1. There is no opponent within a radius of 1.5 meters of the teammate. 2. There is no opponent within one meter of the passing lane between the ball carrier and the teammate." [PAGE 4]

Another quote: "We define a team’s build-up efficiency as their chances of reaching the final third of the pitch during a build-up sequence and use probabilistic verification to compute this probability." [PAGE 10]

Quote on Bayesian: "In case there are less than 30 actions in a state, all C_i for that state are set to 9/m_i ensuring a tight 99% confidence interval around the prior." [PAGE 9]

Quote on defensive setups: "We consider two pairs of alternative defensive set-ups: 1. a high / low block... 2. a left / right-forcing block..." [PAGE 7]

Alright, let's write the final response with XML sections exactly as specified. Need to ensure proper XML tags and no extra text outside? The user said "across these exact XML sections". I'll provide exactly those sections.

Let's draft carefully.

Word count check: I will aim for each section to be substantive.

THINK_TRACE target: 450-500 words.

Let's write.

One concern: The user said "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I must not invent any equations not in the paper or standard. I will only use equations explicitly from the paper or standard definitions (Brier score, MDP tuple). I'll label them as from the paper or standard.

I'll include LaTeX formatting.

Let's produce the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's core derivation proceeds by treating build-up play as a finite-horizon, undiscounted Markov Decision Process conditioned on the opponent's defensive setup. On [PAGE 3], the authors define the MDP via the standard five-tuple: state space, action space, transition function, policy, and reward function. The state space bifurcates into absorbing and transient states. Absorbing states—s_loss_possession, s_goal, and s_no_goal—are terminal and entered with self-loop probability one [PAGE 3]. Transient states are either location-based (30 states, shown in Figure 1 on [PAGE 4]) or extended using StatsBomb 360 data (480 states), where each location is augmented by four binary reachability features indicating whether a teammate is reachable in each colored patch relative to the ball carrier [PAGE 4-5].

The multi-hop causal chain begins with data retrieval: approximately 1,700 build-up sequences per team are extracted, where a sequence starts with a defender in possession without defensive pressure and ends on loss of possession or a shot [PAGE 7]. These sequences are then partitioned into four defensive setups—high block, low block, left-forcing block, right-forcing block—yielding roughly 850 sequences per setup per team [PAGE 7]. The high/low distinction is defined by whether all visible defensive players sit higher or lower than five meters past the halfway line; the left/right-forcing distinction additionally requires the attacking team to move the ball to the designated flank within the first two actions [PAGE 7]. This partitioning is the critical conditioning step: a separate MDP is learned for each defensive setup, meaning the transition function P(s,a,s') is setup-specific rather than universal [PAGE 3].

Reachability, introduced on [PAGE 4], is defined by two hard Euclidean cutoffs: no opponent within 1.5 meters of the target teammate, and no opponent within one meter of the passing lane between ball carrier and teammate. These binary features are then used as a post-processing boost in end-location prediction: reachable intended end states are made twice as likely before renormalization [PAGE 8]. The Brier score results in Table 1 on [PAGE 8] show only marginal improvement (e.g., pass prediction 0.41816 to 0.41597 for location-based states), suggesting the reachability feature adds statistical signal but not a regime-change in predictive performance.

The gray zones are substantial. First, the 360 data is extracted from broadcast video and requires line-of-sight visibility; occluded players during high-pressure pressing phases are implicitly missing, which biases the reachability features precisely when they matter most [PAGE 3]. Second, the five-meter halfway-line threshold for high/low blocks is a discontinuous, arbitrary hyperparameter with no sensitivity analysis [PAGE 7]. Third, the Bayesian averaging on [PAGE 9] collapses states with fewer than 30 actions toward the league prior by setting C_i = 9/m_i to enforce a 99% confidence interval, meaning many fine-grained extended states are effectively league-average rather than team-specific. Fourth, the counterfactual reasoning invoked on [PAGE 2] (citing Pearl [7]) is model-based: it asks what would happen under a different defensive strategy, but the MDP is learned from observational sequences, so the counterfactuals are only as valid as the assumption that defensive setup is exogenously assigned and that transition dynamics do not shift endogenously in response. Finally, the entire analysis rests on a single 2020-2021 season, creating a multi-week stationarity trap: transfers, injuries, and tactical evolution across the season invalidate the assumption that the learned MDP is stable.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal MDP specification as defined in the source:

MDP tuple: \mathcal{M} = (S, A, P, \pi, R)

State space decomposition [PAGE 3-4]:
S = S_{transient} \cup S_{absorbing}
S_{absorbing} = \{s_{loss\_possession}, s_{goal}, s_{no\_goal}\}
S_{transient}^{location} : |S| = 30 \text{ states (Figure 1, [PAGE 4])}
S_{transient}^{extended} : |S| = 480 \text{ states } = 30 \times 2^4 \text{ ([PAGE 4-5])}

Reachability feature for patch p \in \{1,2,3,4\} [PAGE 4]:
r_p = 1 \iff \left( \nexists o \in Opponents : \|o - teammate\|_2 \le 1.5\,\text{m} \right) \land \left( \nexists o \in Opponents : \text{dist}(o, \text{passing\_lane}) \le 1.0\,\text{m} \right)

Transition function [PAGE 5-6]:
P(s,a,s') = \Pr[S_{t+1} = s' \mid S_t = s, A_t = a]
For absorbing states: P(s_{abs}, a, s_{abs}) = 1 (self-loop)
For move actions: P(s, move\_to(s'), s') = \Pr[\text{successful ball move } s \to s']
For shoot actions: P(s, shoot, s_{goal}) = \Pr[\text{goal from } s];\quad P(s, shoot, s_{no\_goal}) = \Pr[\text{miss from } s]

Policy [PAGE 6]:
\pi(a \mid s) = \Pr[A = a \mid S = s]

Reward function [PAGE 6]:
R(s,a,s') = 1 \iff s' = s_{goal};\quad R(s,a,s') = 0 \text{ otherwise}

Bayesian average for sparse states [PAGE 9]:
\pi(shoot \mid s) = \frac{C_1 m_1 + \#shots\ in\ s}{C_1 + \#actions\ in\ s}
P(s, move\_to(s'), s') = \frac{C_3 m_3 + \#successful\ moves\ s \to s'}{C_3 + \#attempted\ moves\ s \to s'}
where if \#actions\ in\ s < 30, then C_i = 9/m_i for all i (tight 99\% confidence interval around prior m_i); otherwise C_i = 0 and no prior is used [PAGE 9].

Build-up efficiency via probabilistic verification [PAGE 10]:
\eta = \Pr[\text{reach final third} \mid \mathcal{M}, \text{defensive setup}]
computed with PRISM v4.7; property form P=? [F final\_third] [PAGE 10, footnote 1].

Brier score [PAGE 8, Reference 1]:
BS = \frac{1}{N}\sum_{i=1}^{N} (f_i - o_i)^2,\quad f_i \in [0,1],\ o_i \in \{0,1\}

Breakdown / singularity regimes [PAGE 7-9]:
1. Data sparsity singularity: states with <30 actions are dominated by the league prior m_i via C_i = 9/m_i, erasing team-specific signal.
2. Visibility singularity: 360 reachability features require broadcast-video line-of-sight; occluded players yield missing or biased binary features [PAGE 3].
3. Threshold singularity: the 5 m halfway-line cutoff for high/low blocks is discontinuous; a defender at 4.99 m vs 5.01 m flips the setup class [PAGE 7].
4. Reachability singularity: hard 1.5 m / 1.0 m Euclidean radii ignore ball velocity, player acceleration, and passing-lane dynamics [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage traces from Rudd (2011) Markov chains for tactical analysis and individual offensive production [PAGE 15], through Yam (2019) Expected Threat / Attacking Contributions [PAGE 15], Singh (2019) xT [PAGE 15], and the immediate predecessor sequence by Van Roy et al. (2021) on learning Markov models for soccer decision making, evaluating decision making at MIT Sloan, and using model checking for tactical advice at IJCAI AISA [PAGE 15-16]. The counterfactual layer explicitly invokes Pearl and Mackenzie (2018), The Book of Why, to justify reasoning about what could have happened under a different defensive strategy [PAGE 2, citation 7]. Probabilistic verification is grounded in the PRISM model checker (Kwiatkowska et al., 2011) [PAGE 10, citation 3].

Related work also identifies the clustering approaches of Gurpinar-Morgan (2019) and Michalczyk (2019) for initiating passes and pass chains reaching the final third, but notes that data sparsity prevented efficiency evaluation [PAGE 15]. Moore (2018) addressed sparsity by ignoring intermediate pass-chain locations, a simplification the present model avoids by retaining state-resolution transitions [PAGE 15].

Multi-week traps embedded in this genealogy: (1) All models are trained exclusively on the 2020-2021 Bundesliga and LaLiga seasons [PAGE 3], so roster turnover, injuries, and managerial tactical shifts across subsequent weeks break stationarity; the MDP has no temporal forgetting or online-update mechanism. (2) Each defensive-setup partition contains roughly 850 sequences [PAGE 7], which are then distributed across 30 or 480 states, leaving many states below the 30-action threshold where the Bayesian prior dominates [PAGE 9]. This creates cross-team leakage: a team's advice in a sparse state is largely the league average, not a team-specific fingerprint. (3) The high/low and left/right block classifications are match-level snapshots [PAGE 7], not stable season-long identities, so a team that alternates blocks within a single match violates the assumption of a single conditioning setup per MDP. (4) There is no match clock, score differential, red-card state, or fatigue variable [PAGE 6-7], meaning late-game crisis build-ups are temporally collapsed into the same step-based MDP as early-game possession.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under defensive pressure, attacking teams regress to their most probable, well-practiced build-up sequences. The paper identifies these via the ten most likely sequences per team [PAGE 10-11]: Barcelona centers play through Busquets; Real Madrid favors the left flank with Kroos dropping into the left halfspace and Marcelo providing width; Bayern Munich similarly prefers the left flank with Alphonso Davies high and Benjamin Pavard conservative on the right [PAGE 10-11]. These are the attractor states the defending team must disrupt.

Counter-trap: Rather than passively defending, the defending team sets a trap by forcing the attacker into its less efficient manifold. The paper's efficiency metric is the probability of reaching the final third [PAGE 10]. Results show Real Madrid is about 2.6% less efficient starting from the right against a high block and 3.8% less efficient against a low block compared to its preferred left side [PAGE 12]. Atlético Madrid should be forced left, away from Kieran Trippier's six assists from right-back [PAGE 13]. Under a high block, blocking the center back's right-side pass options reduces efficiency for all top-six teams analyzed; under a low block, Dortmund and Atlético are best disrupted by blocking the CB's left side [PAGE 14]. The counter-trap is therefore setup-contingent: the same team may require opposite flank-forcing depending on whether the defender deploys high or low.

Clock: The MDP's temporal abstraction is step-count, not match time. A build-up sequence begins when a defender has possession without pressure and terminates upon loss of possession or a shot [PAGE 7]. Absorbing states are the only temporal boundary. There is no game clock, shot clock, possession time limit, or score-state modulation [PAGE 6-7]. Consequently, the model cannot distinguish a desperate late-game build-up from a controlled early-game one, and its "optimal" defensive positioning is blind to the temporal phase of the match. The recursive theory of mind must therefore nest the attacker's habit regression inside a defender's setup-specific counter-trap, all operating under a clockless MDP that treats every build-up step as temporally equivalent.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The MDP conditions only on defensive setup and ball location; it contains no parameters for weather (wind, rain, temperature), pitch dimensions, or surface friction. Transition probabilities P(s,a,s') are learned from event data that implicitly average across conditions. Veto condition: if match conditions shift ball flight or passing success systematically (e.g., heavy rain reducing passing accuracy), the learned transition function becomes invalid because P(s,a,s' \mid setup) \neq P(s,a,s' \mid setup, weather). No weather modulation term exists in the model [PAGE 5-6].

Biomechanical layer: Reachability is defined by static Euclidean cutoffs—1.5 m around a teammate and 1.0 m around the passing lane [PAGE 4]. These radii ignore sprint speed, acceleration, passing velocity, and defensive closing speed. A teammate 1.4 m away but covered by a faster opponent is still marked reachable; a passing lane 0.9 m from an opponent is marked safe regardless of ball velocity. Veto condition: high-velocity transitions or fast defensive presses invalidate the static reachability assumption, meaning the extended MDP's 480-state space overstates safe passing options under high-tempo conditions.

Weather/biomechanical veto proof: The paper offers no cross-layer veto mechanism or exogenous gating variable. The defensive setup is the sole conditioning context [PAGE 6-7]. A rigorous veto would require an augmented transition kernel P(s,a,s' \mid setup, W, B) where W is weather and B is biomechanical state, with the property that P(s,a,s' \mid setup, W, B) \neq P(s,a,s' \mid setup) under extreme W or B. This augmented kernel is absent. Therefore, any tactical prescription derived from the MDP is vetoed whenever exogenous physical or biomechanical regimes deviate from the conditions under which the 2020-2021 StatsBomb data were collected.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Prior-dominance singularity): Verifiable by selecting extended-state space entries in a team's defensive third that received fewer than 30 actions. Compute the KL divergence between the learned policy \pi(\cdot \mid s) and the league prior m_i for those states. Prediction: KL divergence will be below a small threshold \epsilon for low-count states because C_i = 9/m_i forces the posterior toward the prior [PAGE 9], making the model output league-average rather than team-specific. Any tactical advice derived from these states (e.g., "block the CB's left side") is not attributable to the target team and should be vetoed.

Scenario 2 (Occlusion-induced reachability bias): Verifiable by measuring the completeness of the four binary reachability features per match in the StatsBomb 360 stream, stratified by high-block vs low-block defensive posture. High-block matches feature greater player clustering and occlusion [PAGE 3], which should systematically reduce reachability feature completeness. Prediction: high-block matches will show a statistically significant deficit in observed reachable teammates relative to low-block matches (e.g., via a two-proportion z-test), biasing the extended MDP toward marking teammates unreachable and artificially inflating the estimated disruption value of a high block. If confirmed, high-block prescriptions are vetoed as measurement artifacts.

Scenario 3 (Within-match defensive-setup non-stationarity): Verifiable by constructing a hybrid counterfactual in PRISM where the transition function P(s,a,s') switches mid-sequence between the high-block and low-block matrices rather than remaining static [PAGE 6-7]. Compute build-up efficiency \eta under rapid switching and compare to the static-block optima. Prediction: efficiency under switching will converge to the arithmetic mean of the static-block efficiencies rather than the optimal static-block disruption [PAGE 10], because the model has no interpolation or meta-policy for setup transitions. Teams for which the optimal forcing side flips between high and low blocks—Granada, Real Betis, and Sevilla [PAGE 12]—are especially vulnerable: a pre-match plan optimized for one block is vetoed if the opponent changes defensive posture during the match.
</RLVR_COUNTERFACTUAL_VETOES>