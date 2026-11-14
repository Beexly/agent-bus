---
source: "2026 - Strategic Multi-Agent Learning for Interpretable Action Valuation of All Players in Football - Ide et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 35
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 8621
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about Strategic Multi-Agent Learning for Interpretable Action Valuation of All Players in Football (Ide et al., arXiv:2610.05961).

I need to follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided pages 35? No, the source text seems to go up to page 33 (the last page shown is 33). But they said PAGES: 35. I should cite based on the page markers visible in the text. Looking at the text, I see page numbers embedded:
- Page 1: Abstract starts
- Page 2: Introduction continues
- Page 3: Related work
- Page 4: Related work continued
- Page 5: Game theory in sports
- Page 6: Formulation, Problem Setting
- Page 7: Table 3
- Page 8: MPE section
- Page 9: Reward design, Eq 4-7
- Page 10: Eq 8-9, Q-function decomposition
- Page 11: Method, Linear TD Initialization, Eq 10-16
- Page 12: AVI section
- Page 13: Experimental Setup
- Page 14: Learning details continued
- Page 15: Performance Metrics, TD MSE table
- Page 16: Off-ball action ranking, Team-level association
- Page 17: Qualitative analysis continued
- Page 18: Off-ball behavior examples
- Page 19: Qualitative analysis continued
- Page 20: Defensive positioning
- Page 21: Reward weight adjustment
- Page 22: Conclusion
- Page 23: Limitations
- Page 24: Declarations
- Page 25: References
- Page 26: References continued
- Page 27: References continued
- Page 28: References continued
- Page 29: Supplementary Materials A State Representation
- Page 30: EDMS details
- Page 31: Pass score formula Eq 25-26
- Page 32: EDMS continued
- Page 33: EDMS summary Table 5

So pages are numbered 1-33 visible. User said PAGES: 35 maybe meaning the PDF has 35 pages but extracted text covers up to 33? I should cite exact page markers where available. The user said "When source pages are provided, cite exact [PAGE N] markers". I can cite the page numbers visible in the text.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words. I need to think through the MPE-inspired framework, the fact that they don't compute exact equilibrium, the successor features decomposition, the two-stage learning (linear TD + nonlinear AVI), the reward features (shot value, possession termination, attacking-third occupancy), the EDMS state representation, the comparison with independent RL, the findings (forward movement concentration 99.21% vs 17.63%, Spearman rho -0.37 vs 0.29), and audit gray zones: no exact MPE verification, different target spaces for TD MSE, heuristic reward weights theta=[1.0, -0.5, 0.2], no persistent player identity (slots), finite horizon gamma=1, potential non-stationarity due to simultaneous learning (though they don't do best response updates), etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. I should reproduce key equations from the paper with page citations:
- Eq 1: pi(.|st) in Delta(Ai(st)) [PAGE 8]
- Eq 2: MPE condition V* >= V[PAGE 8]
- Eq 3: Value function sum gamma^k r_i [PAGE 8]
- Eq 4: r_i = z_i^T theta [PAGE 9]
- Eq 5: Ct definition [PAGE 9]
- Eq 6: Attacking player reward features [PAGE 9]
- Eq 7: Defending player reward features [PAGE 9]
- Eq 8: Q = h^T theta [PAGE 10]
- Eq 9: Successor features definition [PAGE 10]
- Eq 10: Linear model h = W^T phi [PAGE 11]
- Eq 12: Basis function construction [PAGE 11]
- Eq 13: TD objective [PAGE 11]
- Eq 14: TD target [PAGE 11]
- Eq 16: Semi-gradient update [PAGE 12]
- Eq 17: AVI target [PAGE 12]
- Eq 18: AVI parameter update [PAGE 12]
- Eq 19: PVS definition [PAGE 29]
- Eq 25: Pass score [PAGE 31]
- Eq 26: Weights k1...k4 [PAGE 31]
- Eq 24: Delta Space Score [PAGE 30]
- EDMS dimensions: PVS 92, EDMS 74 [PAGE 6]
- Action classes: 15 total [PAGE 6-7]
- Discount factor gamma=1 [PAGE 8]
- Reward weights theta=[1.0, -0.5, 0.2]^T [PAGE 9-10]
- d=3 features [PAGE 9]
- N=22 players [PAGE 6]
- L=105m, attacking third boundary x=L/6=17.5m [PAGE 9]
- TD MSE values [PAGE 15]
- Spearman rho values [PAGE 16]
- Off-ball forward movement 99.21% vs 17.63% [PAGE 1/16]

Need units: meters (m), seconds (s), fps (25 fps raw, 10 fps resampled), probability (unitless), expected goals (xG, unitless probability), Q-values (unitless accumulated reward features), etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage. Mention VAEP [3], EPV [13], xT [14], Nakahara et al. [6] MARL, EDMS [7]/[9], MPE/dynamic games [10], Adusumilli & Eckardt TD estimation [10], penalty kick game theory [35], [36], [37], Shapley values [38], physics-inspired spring models [39], Soccer-Decoder [40], Beal et al. Bayesian games [41], Lennartsson potential field [42], TacticAI [25], GRF [26], inverse RL [33,34]. Multi-week traps: temporal credit assignment across possession, non-stationarity in multi-agent learning, heuristic theta not estimated, validation/test split by season (2023 train, 2024 test) causing distribution shift, small n=20 teams for correlation.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it in context. "Crisis habit regression" could refer to the independent RL baseline collapsing to forward movement (habit/regression to dominant action under pressure/crisis). "Counter-trap" could be the MPE-inspired model's diverse off-ball rankings as a counter to that trap. "Clock" could refer to finite-horizon possession clock, gamma=1 no discounting, time steps t=0..T, terminal time T. Need to discuss recursive theory of mind: modeling other players as agents, best responses, but not computing exact equilibrium; the "mind" of other players is approximated by observed transitions rather than explicit recursion. Crisis habit regression: independent RL defaults to forward movement in 99.21% of states under pressure/crisis. Counter-trap: MPE-inspired yields 17.63% max direction, context-sensitive. Clock: finite horizon T, gamma=1, terminal conditions.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Need to discuss what would veto the model's assumptions. Physical: pitch dimensions L=105m, player velocities, 25 fps tracking, biomechanical limits (acceleration, one-meter displacement in EDMS). Weather: not in data (no weather variables in EDMS/PVS), so weather is an unmodeled veto layer—rain/wind could alter EPV, passing lanes, ball physics but are absent. Veto proof: The model lacks explicit weather/biomechanical constraints; thus its valuations can be vetoed by unmodeled physical layers. Need to be precise: no weather data in source, so cannot claim weather robustness. Biomechanical: EDMS uses one-meter displacement for dribble/space score, but no explicit acceleration limits or fatigue. Physical layer: positions and velocities only, no body orientation/field of view (mentioned as limitation on page 23).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR likely means Reinforcement Learning Verification/Validation? Or "Reinforcement Learning Verification Regime"? The user says "3 verifiable RLVR veto scenarios + predictions". I need to invent 3 scenarios where the model would fail/be vetoed, with predictions. They must be verifiable (falsifiable). Examples:
1. If a match is played under heavy rain altering ball roll and passing success, the EPV/reward features (shot value, possession termination) learned from dry/normal conditions will misvalue attacking-third occupancy; prediction: Q-value rankings for forward passes into attacking third will systematically overestimate value in wet conditions vs observed xG.
2. If a team substitutes a slower defender, the EDMS pressure variable (time to reach player) computed from positions/velocities won't capture reduced acceleration; prediction: defensive positioning Q-values will overrate closing space for that player, leading to mismatched defensive action rankings vs actual ball recovery rates.
3. If the reward weight theta is changed post-hoc to emphasize attacking-third occupancy (theta_3 from 0.2 to 1.0), the fixed value basis h will re-rank actions without retraining; prediction: this post-hoc reweighting will not improve correlation with season xG because h was trained under default theta and the successor features are not re-estimated under the new reward, so the counterfactual ranking change (backward-right -> forward-right in Fig 7/8) reflects only linear preference shift, not learned strategic adaptation.

I need to ensure total word count >= 1000 words across the sections. Each section should be substantial. THINK_TRACE >= 400 words.

No betting lines. No toy equations. Use formal LaTeX.

Let's start drafting. I need to be careful with citations: use [PAGE N] where N is the page number visible in the text.

Check page numbers:
- Page 6: N=22, PVS/EDMS dimensions, action space tables.
- Page 8: MPE equations 1-3, gamma=1.
- Page 9: Reward features eq 4-7, theta, L=105m, x=17.5m.
- Page 10: Eq 8-9 Q decomposition.
- Page 11: Eq 10-16 linear TD.
- Page 12: Eq 17-18 AVI.
- Page 13: Experimental setup, 95 matches, 10,308 sequences, 25/10 fps.
- Page 15: Table 4 TD MSE values.
- Page 16: Off-ball distribution 99.21% vs 17.63%, rho -0.37 vs 0.29, n=20 teams.
- Page 23: Limitations (body orientation, field of view, technical attributes).
- Page 29: Eq 19 PVS.
- Page 30: Eq 20-24 EDMS off-ball.
- Page 31: Eq 25-26 pass score.
- Page 1/Abstract: forward movement 99.21%, 17.63%, rho values.

I'll cite accordingly.

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

I must avoid mentioning betting lines. Also avoid toy equations. All equations must be from the paper or formal definitions.

Word count check: I'll aim for roughly 200-300 words per section except THINK_TRACE which needs >400. Total should exceed 1000.

Let's write.

THINK_TRACE content:
- Multi-hop derivation: The paper formulates each possession as a finite-horizon stochastic game with N=22 agents (slots), not persistent identities. State st in S, actions Ai(st), transition P(st+1|st,at). MPE is motivating but not computed. Instead, observed transitions bootstrap continuation values. The value function Vi(st) = sum gamma^k ri(sk,ak), gamma=1 because finite horizon T. Reward is linear in features: ri = zi^T theta, d=3 features (shot value, possession termination adjustment, attacking-third occupancy). Q decomposes as h^T theta where h are successor features. Two-stage: linear TD init (Eq 13-16) then nonlinear AVI (Eq 17-18). EDMS is 74-dim, PVS is 92-dim. Findings: Independent RL forward movement 99.21%, MPE-inspired 17.63% max direction. Spearman rho: -0.37 vs 0.29 vs season xG. Gray zones: no exact MPE equilibrium verification; different TD target spaces make cross-formulation TD MSE incomparable; heuristic theta not estimated; role-slot rather than identity; no body orientation/FOV; validation set only 5 matches, test 40; team-level n=20 small sample; temporal mismatch between held-out Q-values and full-season xG.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with LaTeX, page citations, units.

RETROCAUSAL_GENEALOGY: Lineage from VAEP, EPV, xT, Nakahara MARL, EDMS, dynamic games, penalty kick Nash, etc. Multi-week traps: non-stationarity, credit assignment across 30-300 time step sequences, heuristic reward weights, season split distribution shift.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = independent RL baseline collapsing to forward movement under all contexts (99.21%). Counter-trap = MPE-inspired diverse off-ball rankings (17.63%). Clock = finite horizon T, gamma=1, terminal conditions, 10 fps resampling, possession segmentation.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: pitch L=105m, velocities, one-meter displacements. Biomechanical: no acceleration/fatigue/body orientation. Weather: absent from EDMS/PVS; unmodeled veto. Veto proof: model cannot be certified robust to rain/wind because no weather variables; physical configuration only.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with predictions.

Let's draft carefully.

I need to ensure no fake ratios. All equations verbatim or formal.

Page citations: I'll use [PAGE 8], etc. Some equations appear on page 9-10. Let's verify:
- Eq 1 is on page 8.
- Eq 2 on page 8.
- Eq 3 on page 8.
- Eq 4 on page 9.
- Eq 5 on page 9.
- Eq 6 on page 9.
- Eq 7 on page 9.
- Eq 8 on page 10.
- Eq 9 on page 10.
- Eq 10 on page 11.
- Eq 12 on page 11.
- Eq 13 on page 11.
- Eq 14 on page 11.
- Eq 16 on page 12 (actually page 11 shows Eq 16? Let's check text: page 11 ends with Eq 13 and Eq 14, then page 12 starts with Eq 15? Wait: In the provided text, page 11 has Eq 10, 11, 12, 13, 14. Then page 12 has Eq 15, 16. Actually looking at the text: "The parameter matrix is updated as ... Eq (16)" is on page 12? Let's see: After Eq 14 on page 11, the text continues to page 12 where Eq 15 is terminal condition, Eq 16 is update. Wait, the provided text shows page 11 ending with Eq 14? Let's re-examine: The text block for page 11 includes Eq 10, 11, 12, 13, 14. Then page 12 starts with Eq 15? Actually in the source text: after Eq 14 on page 11, there is text about final time step and Eq 15 on page 12? Let's check the provided text: 

Page 11 section:
"... Eq (13) ... Eq (14) ... At the final time step ... Eq (15) ... The parameter matrix is updated as ... Eq (16) ..." 
Wait, looking at the provided text: Page 11 ends with Eq 14? Actually the text says:
"Here, the TD target is defined as ... Eq (14) ... (st+1, ai,t+1) is the next observed state-action pair. At the final time step of a possession, the continuation value is set to zero, and the target is therefore ... Eq (15) ... For possessions ending with a shot... These immediate reward features are propagated... The parameter matrix is updated as ... Eq (16) ..." 
But in the provided text, Eq 15 and 16 appear after page break? Let's look at the raw text: The text for page 11 ends after Eq 14? Actually the provided text shows page 11 containing up to Eq 14, then page 12 contains Eq 15 and 16? Let's check: In the provided text, after Eq 14 on page 11, there's a line break and then "where ... Eq (15)" appears to still be on page 11? Hmm, the page numbers are indicated by the numbers at the bottom of each page in the text extraction. I see:
- Page 11: ends with Eq 14? Actually the text shows "11" at the top? No, the text shows page numbers inline. Let's look: "... Eq (14) ... [page 11?] ... At the final time step ... Eq (15) ... [page 12?]". Actually in the provided text, after Eq 14, it says "where ... Eq (15) ... For possessions ending ... Eq (16) ..." all before the page number "12" appears? Let's check the source text provided:

The source text has page numbers like:
" 11
...
 12
..."
I see " 11" before section 4.2? Actually:
"4.2 Linear TD Initialization of Successor Features ... Eq (10) ... Eq (11) ... Eq (12) ... Eq (13) ... Eq (14) ... 12
 At the final time step ... Eq (15) ... Eq (16) ..."
So Eq 10-14 are on page 11, Eq 15-16 on page 12.
Then AVI section starts on page 12 with Eq 17, 18.
So citations:
- Eq 10-14: [PAGE 11]
- Eq 15-16: [PAGE 12]
- Eq 17-18: [PAGE 12]

Similarly:
- PVS Eq 19: page 29.
- EDMS Eq 20-24: pages 30-31.
- Eq 25-26: page 31.

I'll cite accordingly.

TD MSE values: page 15.
Off-ball percentages: page 16 (and abstract page 1).
Spearman rho: page 16.

Reward weights theta: page 9-10.
L=105m, x=17.5m: page 9.
N=22: page 6.
EDMS 74, PVS 92: page 6.

Okay, let's write the full response.

I must not mention betting lines. No spreads, totals, moneylines, odds.

I need to ensure LaTeX is correct.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper (Ide et al., arXiv:2610.05961) formulates each football possession as a finite-horizon stochastic game over a set of player slots I = {1, …, N} with N = 22 corresponding to 11 attacking and 11 defending slots per frame [PAGE 6]. Crucially, the index i denotes a focal-player slot within a possession rather than a persistent player identity across matches [PAGE 6]. At each time step t = 0, …, T, the game is described by state st ∈ S constructed from tracking and event data; each player selects action ai,t ∈ Ai(st), and the joint action at = (a1,t, …, aN,t) generates the next state via transition probability P(st+1 | st, at) [PAGE 6]. Two state representations are compared: PVS (dimension 92; player and ball positions and velocities) and EDMS (dimension 74; pressure, space, passing options, shooting opportunities, offside-line information, possession context) [PAGE 6]. The discrete action space contains 15 feasible classes: five on-ball attacking actions, one aggregated defensive action, and nine off-ball movements (eight directions plus idle) [PAGE 6–7]. State-dependent action masking restricts the ball carrier to on-ball actions, attacking off-ball players to the nine off-ball actions, and defenders to off-ball actions plus the aggregated defensive action [PAGE 7].

The solution concept is Markov perfect equilibrium (MPE), used as a motivating perspective but not computed or verified [PAGE 8]. Each player’s Markov strategy πi(· | st) ∈ Δ(Ai(st)) assigns a probability distribution over the feasible action set [PAGE 8, Eq. 1]. The MPE condition requires that no player can improve its expected return by unilaterally deviating: Viπ*(st) ≥ Vi(π̃i, π∗−i)(st) for all alternative Markov strategies π̃i and all states st [PAGE 8, Eq. 2]. The value function is the finite-horizon return Viπ(st) = Eπ[Σk=tT γ^(k−t) ri(sk, ak) | st] [PAGE 8, Eq. 3]. Because each possession has a finite terminal time T, the discount factor is set to γ = 1, so rewards near the end of a possession propagate to earlier actions without temporal attenuation [PAGE 8]. The empirical implementation does not estimate policies or verify equilibrium; instead, continuation values are bootstrapped from the next actions actually observed in each possession, with other players’ effects represented through the observed multi-player state [PAGE 8].

Interpretability is achieved by decomposing the immediate reward into a linear combination of d = 3 reward features: ri(st, at) = zi(st, at)⊤θ [PAGE 9, Eq. 4]. The feature vector z includes shot value, possession-termination adjustment, and attacking-third ball occupancy [PAGE 9, Eq. 5–7]. The pitch length is L = 105 m, so the attacking-third boundary is x = L/6 = 17.5 m [PAGE 9]. Reward weights are predefined heuristically as θ = [1.0, −0.5, 0.2]⊤ and are not estimated from data [PAGE 9–10]. The Q-function decomposes as Qπi(st, ai,t) = hπi(st, ai,t)⊤θ, where h is the successor-feature basis representing the expected discounted sum of features [PAGE 10, Eq. 8–9].

Estimation uses a two-stage procedure. First, a linear semi-gradient TD estimator approximates hi(st, at; Wi) = Wi⊤ϕi(st, at) with block-structured basis functions ϕi = e(ci,t, ai,t) ⊗ ũi,t [PAGE 11, Eq. 10–12]. The TD objective minimizes E[‖zi(st, at) + γhi(st+1, ai,t+1; Wi) − hi(st, at; Wi)‖²] [PAGE 11, Eq. 13], with TD target Yi,t = zi(st, at) + γhi(st+1, ai,t+1; Wi) and terminal target Yi,T = zi(sT, aT) [PAGE 11–12, Eq. 14–15]. The semi-gradient update is Wi ← Wi + αϕ(st, at)(Yi,t − hi(st, at; Wi)) [PAGE 12, Eq. 16]. Second, a nonlinear MLP with hidden layers 64 and 32 is pretrained to reproduce these linear TD estimates and then refined by approximate value iteration (AVI) using targets yi,t = zi(st, at) + γhi(st+1, aobs i,t+1; ψk) [PAGE 12, Eq. 17–18]. Greedy actions are derived only at post-training inference and are never fed back into TD targets [PAGE 12].

Quantitative results on 95 J1 League matches (50 training from 2023, 45 validation/test from 2024; 10,308 possession sequences; raw tracking at 25 fps resampled to 10 fps) show that TD MSE is only comparable within a formulation because the independent RL baseline uses a scalar Q-value target space whereas the MPE-inspired formulation uses a successor-feature vector space [PAGE 15]. Independent RL + PVS: 6.6947 × 10⁻⁴; Independent RL + EDMS: 4.5057 × 10⁻⁴; MPE-inspired + PVS: 1.1229 × 10⁻²; MPE-inspired + EDMS: 1.0876 × 10⁻² [PAGE 15]. Off-ball action ranking under EDMS shows the independent baseline assigns the highest Q-value to forward movement in 99.21% of evaluated off-ball states, while the proposed MPE-inspired model’s most frequent direction accounts for only 17.63% [PAGE 1, 16]. The team-level association with official 2024 J1 League full-season xG across n = 20 matched teams is negative for independent RL (ρ = −0.37) and weakly positive for the proposed model (ρ = 0.29) [PAGE 16]. Qualitative cases demonstrate context-sensitive off-ball support movements, defensive positioning that closes dangerous space, and post-hoc reward-weight adjustment shifting highest-valued actions from backward-right to forward-right when the attacking-third weight increases from 0.2 to 1.0 [PAGE 18–21].

Gray-zone audit: (1) MPE is never solved or verified, so the “multi-agent” component cannot be isolated from architecture, reward representation, and training-procedure differences [PAGE 8, 23]; (2) TD MSE target spaces differ across formulations, precluding cross-formulation comparison [PAGE 15]; (3) reward weights are heuristic and fixed, limiting external validity [PAGE 9–10, 23]; (4) player slots are not persistent identities, so longitudinal player valuation is not supported [PAGE 6]; (5) the team-level xG analysis uses n = 20 teams and mismatched temporal coverage (held-out tracking sample vs. full-season xG) [PAGE 16]; (6) EDMS and PVS omit body orientation, field of view, and player-specific technical attributes, which the authors themselves list as a limitation [PAGE 23]; (7) validation contains only 5 matches, and test contains 40, raising variance concerns for team-level diagnostics [PAGE 13].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, SI/information/probability units, assumptions, and breakdown regimes.

Markov strategy and MPE condition [PAGE 8]:
πi(· | st) ∈ Δ(Ai(st)), where Δ(·) denotes the probability simplex over the state-dependent feasible action set [PAGE 8, Eq. 1].
Viπ*(st) ≥ Vi(π̃i, π∗−i)(st), ∀π̃i, ∀st ∈ S [PAGE 8, Eq. 2].
Finite-horizon value [PAGE 8, Eq. 3]:
Viπ(st) = Eπ [ Σ_{k=t}^{T} γ^(k−t) ri(sk, ak) | st ], γ = 1, units: accumulated reward (unitless, because features are unitless probabilities/occupancy indicators and θ is unitless).
Because γ = 1 and T is finite, the return is well defined without temporal discounting; breakdown regime: infinite-horizon or continuing tasks would require γ < 1 for convergence [PAGE 8].

Reward feature specification [PAGE 9–10]:
ri(st, at) = zi(st, at)⊤θ, θ ∈ ℝ³, θ = [1.0, −0.5, 0.2]⊤ [PAGE 9–10, Eq. 4].
d = 3 features corresponding to shot value, possession termination, and attacking-third ball occupancy [PAGE 9].
Pitch geometry: L = 105 m, attacking direction aligned with +x, attacking-third boundary at x = L/6 = 17.5 m [PAGE 9].
Ct = Σ_{j∈Iatt} Σ_{k=t}^{Et} 1{Sj,k = 0} 1{xk < L/6} [PAGE 9, Eq. 5].
Attacking player feature vector [PAGE 9, Eq. 6]:
zi(st, at) = [ vt·1{ai,t = shot}; −V(−xt, yt)·Ct; 1{xt ≥ L/6} ], units: vt is configured shot value (unitless EPV-derived scalar), V(·) is Expected Possession Value (unitless probability in [0,1]), Ct is a count (unitless), occupancy indicator is binary.
Defending player feature vector [PAGE 9, Eq. 7]:
zi(st, at) = [ −Σ_{j∈Iatt} vt·1{Sj,t > 0}; V(−xt, yt)·Ct; 0 ], with opposite signs for attackers and defenders on the possession-termination component.

Successor-feature decomposition [PAGE 10, Eq. 8–9]:
Qπi(st, ai,t) = hπi(st, ai,t)⊤θ, units: unitless accumulated reward features.
hπi(st, ai,t) = Eπ [ Σ_{k=t}^{T} γ^(k−t) zi(sk, ak) | st, ai,t ], expectation also over a−i,t ∼ π−i(· | st) [PAGE 10, Eq. 9].

Linear TD initialization [PAGE 11–12, Eq. 10–16]:
hi(st, at; Wi) = Wi⊤ϕi(st, at), Wi ∈ ℝ^{pi × d}, d = 3 [PAGE 11, Eq. 10].
ϕi(st, at) = e(ci,t, ai,t) ⊗ ũi,t, where ũi,t = Standardizei(oi,t) and e(·) is a one-hot role–action block [PAGE 11, Eq. 11–12].
L(Wi) = E[ ‖ zi(st, at) + γhi(st+1, ai,t+1; Wi) − hi(st, at; Wi) ‖² ] [PAGE 11, Eq. 13].
TD target: Yi,t = zi(st, at) + γhi(st+1, ai,t+1; Wi); terminal: Yi,T = zi(sT, aT) [PAGE 11–12, Eq. 14–15].
Semi-gradient update: Wi ← Wi + αϕ(st, at)(Yi,t − hi(st, at; Wi)) [PAGE 12, Eq. 16].
Assumption: bootstrapping uses the next observed action ai,t+1 rather than a greedy or best-response action; breakdown regime: non-stationarity if other players’ policies shift during data collection, though the dataset is static so this is a distributional approximation rather than an online instability.

AVI nonlinear refinement [PAGE 12, Eq. 17–18]:
y_i,t^(k) = zi(st, at) + γhi(st+1, aobs i,t+1; ψk) [PAGE 12, Eq. 17].
ψ_{k+1} ← arg min_ψ E[ (y_i,t^(k) − hi(st, ai,t; ψ))² ] [PAGE 12, Eq. 18].
MLP architecture: hidden-layer sizes 64 and 32; batch size 2,048; at most 20 AVI iterations; learning-rate schedule reduces by factor 0.3 at iterations 5, 10, 15 with minimum 10⁻⁵; linear TD pretrained for one epoch at lr = 0.001 [PAGE 14].

State representations [PAGE 6, 29–31]:
PVS: sPVS t = [pb,t, vb,t, p1,t, v1,t, …, pN,t, vN,t], dimension 92 [PAGE 29, Eq. 19]; units: positions and velocities in m and m/s.
EDMS: dimension 74; Absolute State (offside-line distance, formation), Relative Off-ball State (ball distance, pressure time τ_player, pass-line pressure time τ_passline, space score, pass score), Relative On-ball Intra-Possession State (ball pressure, goal distance, goal angle, dribble score, shot score, long-ball score), Relative Inter-Possession State (time to reach ball, goal distances, goal angles, ball velocity, transition indicator) [PAGE 30–32, Table 5].
EDMS space-score change per direction: ΔSpaceScore_i,d,t = SpaceScore(p_i,t + u_d) − SpaceScore(p_i,t), u_d is a one-meter displacement vector [PAGE 30, Eq. 24]; units: space-score units per meter.
EDMS pass score: PassScore_i,t = k1·d_ball_i,t + k2·SpaceScore_i,t + k3·τ_player_i,t + k4·τ_passline_i,t, k1 = 0.5, k2 = 0.3, k3 = 0.2, k4 = 0.2 [PAGE 31, Eq. 25–26]; units: weighted sum of meters (distance), space-score units, and seconds (pressure times).

Experimental data and metrics [PAGE 13–16]:
95 Meiji Yasuda J1 League matches, 2023–2024 seasons; 25 fps raw tracking resampled to 10 fps; possession sequences of length 30–300 time steps retained; 10,308 sequences and 1,561,255 event-sequence time steps; train 4,589 / validation 918 / test 4,801 sequences [PAGE 13].
TD MSE: independent RL scalar Q-value space vs. MPE-inspired successor-feature vector space (d = 3); absolute values not comparable across formulations [PAGE 15].
Off-ball action concentration: independent RL + EDMS forward movement in 99.21% of evaluated off-ball states; MPE-inspired + EDMS most frequent direction in 17.63% [PAGE 1, 16].
Team-level exploratory association: Spearman ρ = −0.37 (independent RL) vs. ρ = 0.29 (MPE-inspired) across n = 20 matched teams; Q-value summaries from held-out test matches vs. official 2024 J1 League full-season xG [PAGE 16].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The proposed framework sits at the intersection of three lineages: event-based action valuation, multi-agent reinforcement learning in sports, and dynamic game theory. Event-based valuation begins with expected goals (xG) models [11] and extends to all on-ball actions through VAEP [3], which decomposes sparse goal rewards into denser scoring- and conceding-probability changes [PAGE 3]. Tracking-data extensions include Expected Possession Value (EPV) [13] and Expected Threat (xT) [14–15], which assign spatial threat values to pitch regions and enable off-ball and buildup evaluation [PAGE 3]. Defensive valuation is represented by GVDEP [19] and models of ball-recovery and attack probabilities [20] [PAGE 3]. The present work inherits EPV as an input to the reward feature V(−xt, yt) [PAGE 9] but departs from pure statistical mapping by modeling each player as an autonomous decision-making agent [PAGE 3].

The multi-agent lineage is anchored by Nakahara et al. [6], which explicitly models individual on-ball and off-ball players using MARL with real tracking data [PAGE 4–5]. The current study adopts EDMS from Ide et al. [7] and [9] as the tactically interpretable state representation [PAGE 5–6]. Unlike Nakahara et al. [6], which treats player interactions without an explicit equilibrium-based formulation, this work introduces an MPE-inspired dynamic-game perspective [PAGE 5]. The MPE lineage traces to dynamic game theory in sports: static approaches model penalty kicks as zero-sum games between kicker and goalkeeper [35], with Chiappori et al. [36] testing mixed-strategy Nash equilibrium under player heterogeneity and Bar-Eli and Azar [37] documenting psychological distortions such as risk aversion and action bias [PAGE 5]. Cooperative approaches quantify contributions via Shapley values [38] [PAGE 5]. Dynamic approaches include physics-inspired spring-force models of collective movement [39], Soccer-Decoder differential-equation simulations [40], Bayesian games for pre-match tactics [41], and potential-field formulations of game intelligence [42] [PAGE 5]. The authors position their MPE-inspired framework as a learning-based approximation to dynamic-game value modeling in computationally challenging continuous spaces [PAGE 5].

The estimation methodology borrows from Adusumilli and Eckardt [10], who develop linear semi-gradient and approximate value-iteration estimators for recursive value terms in dynamic discrete-choice models and dynamic games [PAGE 11–12]. Whereas [10] targets structural parameter estimation via conditional-choice-probability pseudo-likelihood, this work fixes tactical reward weights θ and directly estimates the successor-feature basis hi [PAGE 11].

Multi-week traps: (1) Temporal credit assignment across possession sequences of length 30–300 time steps at 10 fps (3–30 seconds) requires backward propagation of terminal shot or possession-termination rewards through build-up play; with γ = 1 there is no temporal attenuation, so early actions receive full terminal credit, which may overvalue speculative early passes if the terminal outcome is noisy [PAGE 8, 13]. (2) The train/validation/test split is by match and season (2023 train, 2024 test), creating a distribution-shift trap: team rosters, tactics, and form can change across the season boundary, so the weakly positive ρ = 0.29 with 2024 xG may not generalize to subsequent weeks [PAGE 13, 16]. (3) The reward weights θ = [1.0, −0.5, 0.2]⊤ are heuristic and fixed; if the true tactical objective shifts week-to-week (e.g., a team prioritizes defensive solidity over attacking-third occupancy), the fixed value basis cannot re-adapt without retraining or inverse reinforcement learning [PAGE 9–10, 23]. (4) The independent RL baseline’s collapse to forward movement in 99.21% of off-ball states indicates a representation-collapse trap: under a scalar Q-value objective, the model converges to a trivial dominant policy rather than context-sensitive rankings [PAGE 16]. (5) Because MPE is not computed, the observed differences between formulations may be driven by architecture (GRU vs. MLP), reward representation (scalar vs. successor features), or training procedure rather than the game-theoretic component itself [PAGE 16, 23].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: Under pressure or high-stakes match states, the independent RL baseline exhibits a regressive habit: it assigns the highest Q-value to forward movement in 99.21% of evaluated off-ball states [PAGE 1, 16]. This is a recursive theory-of-mind failure in the limiting case: the model treats other players as part of a static environment rather than as adaptive agents, so it regresses to a single dominant action (forward movement) regardless of surrounding defensive pressure, teammate positioning, or game context. The habit is “crisis”-like because it appears precisely when fine-grained context should matter most—off-ball decision-making under defensive pressure—yet the value function collapses to a monotonically progressive heuristic.

Counter-trap: The MPE-inspired formulation functions as a counter-trap to that regression. By estimating player-specific successor-feature bases within a multi-agent context where continuation values are bootstrapped from observed joint transitions, the model distributes highest-valued off-ball actions across multiple directions, with the most frequent direction accounting for only 17.63% of states [PAGE 16]. Qualitative cases confirm context sensitivity: open space elicits forward-oriented valuations, a teammate already occupying forward space shifts the target player’s highest-valued movement to a supporting position, and near-goal situations favor movements that maintain passing options while avoiding immediate defensive pressure [PAGE 18–19]. Defensive positioning also receives context-dependent values for closing dangerous space or blocking passing lanes, even without direct ball interaction [PAGE 20]. The counter-trap is not proof of equilibrium rationality; it is a diagnostic that the learned ranking avoids the trivial dominant-action attractor of the independent baseline.

Clock: The finite-horizon possession clock is the temporal backbone of the recursion. Each possession runs t = 0, …, T with terminal time T varying across sequences [PAGE 6]. The discount factor γ = 1 means the clock does not discount future rewards; instead, the finite horizon T provides the natural termination [PAGE 8]. Raw tracking is recorded at 25 fps and resampled to 10 fps for estimation, so each time step is Δt = 0.1 s [PAGE 13]. Sequences are constrained to 30–300 time steps, i.e., 3–30 seconds of possession [PAGE 13]. At the terminal step, the continuation value is set to zero and the TD target collapses to the immediate feature vector zi(sT, aT) [PAGE 11–12, Eq. 15]. This clock structure means that the value of an early build-up action is determined entirely by the realized terminal outcome (shot, possession termination outside the attacking third, or attacking-third occupancy) propagated backward through the chain of observed transitions, without exponential decay. The recursion therefore treats the possession clock as a hard deadline rather than a soft discounting process, which is appropriate for finite possessions but breaks down if possessions are censored or if the true strategic horizon extends beyond the observed possession boundary (e.g., tactical value created by a possession that ends in a turnover but sets up a subsequent press).
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers.

Physical layer: The model operates on a normalized pitch with L = 105 m and attacking direction left-to-right [PAGE 6, 9]. EDMS computes one-meter displacements u_d for each of eight directions to evaluate dribble and space-score changes [PAGE 30, Eq. 24, 29]. This implies a spatial resolution of 1 m and a temporal resolution of Δt = 0.1 s after resampling [PAGE 13]. Physical variables include positions and velocities (m, m/s) for all 22 players and the ball [PAGE 29, Eq. 19]. A physical veto would trigger if the data-generating process violates the coordinate normalization (e.g., teams switching ends at halftime without re-normalization) or if tracking noise exceeds the 1-m displacement granularity used in EDMS. The source does not report tracking-noise bounds or sensor-error models, so the physical layer’s error tolerance is unquantified.

Biomechanical layer: The state representations encode positions, velocities, and derived spatial features but do not include body orientation, field of view, acceleration limits, fatigue, or player-specific technical attributes [PAGE 6, 23]. EDMS uses time-to-reach variables (τ_player, τ_passline, τ_ball) computed from positions and velocities [PAGE 30–31], which assume constant-velocity kinematics and ignore acceleration constraints. A biomechanical veto would trigger when a player’s actual acceleration or deceleration capacity prevents them from reaching a computed passing lane or closing a space within the modeled τ. For example, a defender with high sprint speed but poor change-of-direction ability may be assigned a low τ_player by EDMS even though they cannot physically execute the required cut. The authors explicitly list body orientation, field of view, and technical attributes as missing resolution [PAGE 23], confirming this layer is unmodeled and therefore a live veto risk.

Weather layer: Neither PVS nor EDMS includes weather variables (precipitation, wind, temperature, pitch moisture) [PAGE 6, 29–32]. EPV grids and shot values V(xt, yt) are presumably estimated under the observed match conditions but are not stratified by weather [PAGE 9]. A weather veto would trigger if rain alters ball roll, passing success, or shot probability such that the reward features (shot value, possession termination, attacking-third occupancy) systematically misvalue actions. Because weather is absent from the state, the model cannot condition its valuations on it; thus any weather-dependent shift in the true value function is unmodeled. The paper makes no claim of weather robustness, and no weather-stratified validation is reported.

Veto adjudication: The model is not veto-proof. Its action valuations are conditional on the physical configuration encoded in EDMS/PVS and on the heuristic reward weights. Unmodeled biomechanical constraints (acceleration, orientation) and unmodeled weather can invalidate the Q-value rankings in specific match contexts. The only formal veto resistance claimed is post-hoc reward-weight reweighting: because Q = h⊤θ with fixed h, alternative θ can be inspected without retraining [PAGE 10, 21]. However, this is a sensitivity analysis of local rankings, not a re-estimation of h under new physical or weather conditions, so it does not veto the underlying physical/weather limitations.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement-learning verification and validation) veto scenarios with counterfactual predictions.

Scenario 1 — Wet-weather possession-value distortion. Condition: A match is played under heavy rain that measurably reduces passing success and shot conversion in the attacking third relative to the dry-condition EPV grid used to construct V(xt, yt). Veto rule: If the learned Q-values systematically overrate forward passes into the attacking third under these conditions relative to observed possession outcomes, the model is vetoed for weather robustness. Counterfactual prediction: Under the default θ = [1.0, −0.5, 0.2]⊤ [PAGE 9–10], the MPE-inspired model will assign elevated Q-values to forward movements and passes into x ≥ 17.5 m because z_i,3 rewards attacking-third occupancy at every time step the ball is there [PAGE 9, Eq. 6]. In wet conditions, the actual expected possession value of those regions decreases, so the model’s action rankings will positively correlate with pre-rain EPV but negatively correlate with observed wet-weather shot conversion. Verification: Compare Q-value summaries for attacking-third entries against observed xG or possession continuation in rain-affected matches from the same league; a significant negative residual (model value > observed outcome) triggers the veto.

Scenario 2 — Substituted defender biomechanical mismatch. Condition: A team substitutes a center-back with markedly lower acceleration and change-of-direction ability mid-match. Veto rule: If EDMS-derived pressure time τ_player [PAGE 30, Eq. 21] continues to assign low values (implying quick reach) to that defender’s coverage of off-ball attackers, and the model’s defensive Q-values still reward space-closing movements for that player slot, the model is vetoed for biomechanical validity. Counterfactual prediction: Because τ_player is computed from position and velocity only, without acceleration limits or player-specific attributes [PAGE 23, 30], the model will treat the slower defender as if they retain their pre-substitution reach time. The successor-feature basis h will therefore assign high defensive Q-values to movements that “close dangerous space” [PAGE 20] for that slot even though the player physically cannot execute them in time. Verification: Match event data for ball recoveries and opponent entries into the defender’s zone before and after substitution; if the post-substitution recovery rate drops while model-assigned defensive Q-values for that slot remain high, the veto is triggered.

Scenario 3 — Post-hoc reward-weight counterfactual failure. Condition: A coach wishes to emphasize attacking-third ball occupancy and changes θ from [1.0, −0.5, 0.2]⊤ to [1.0, −0.5, 1.0]⊤ [PAGE 21]. Veto rule: If the resulting change in highest-valued actions (e.g., from backward-right to forward-right in the illustrative case [PAGE 21]) does not improve the team-level association with season xG, the post-hoc reweighting is vetoed as a validity tool. Counterfactual prediction: Because the value basis h is fixed and never re-estimated under the new θ [PAGE 10, 21], reweighting only rotates the linear preference over already-learned successor features. The model will shift local rankings toward forward-right [PAGE 21], but since h was optimized under the original TD targets and reward structure, the reweighted Q-values will not capture strategic adaptation to the new tactical preference. Verification: Recompute team-level Q-value summaries using θ_3 = 1.0 on the held-out test set and correlate with official 2024 xG; if ρ does not increase meaningfully beyond 0.29 (and may decrease), the counterfactual reweighting lacks external validity. The prediction is that ρ remains near zero or negative because h encodes feature accumulation under the original regime, not under the counterfactual reward.
</RLVR_COUNTERFACTUAL_VETOES><THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper (Ide et al., arXiv:2610.05961) formulates each football possession as a finite-horizon stochastic game over a set of player slots I = {1, …, N} with N = 22 corresponding to 11 attacking and 11 defending slots per frame [PAGE 6]. Crucially, the index i denotes a focal-player slot within a possession rather than a persistent player identity across matches [PAGE 6]. At each time step t = 0, …, T, the game is described by state st ∈ S constructed from tracking and event data; each player selects action ai,t ∈ Ai(st), and the joint action at = (a1,t, …, aN,t) generates the next state via transition probability P(st+1 | st, at) [PAGE 6]. Two state representations are compared: PVS (dimension 92; player and ball positions and velocities) and EDMS (dimension 74; pressure, space, passing options, shooting opportunities, offside-line information, possession context) [PAGE 6]. The discrete action space contains 15 feasible classes: five on-ball attacking actions, one aggregated defensive action, and nine off-ball movements (eight directions plus idle) [PAGE 6–7]. State-dependent action masking restricts the ball carrier to on-ball actions, attacking off-ball players to the nine off-ball actions, and defenders to off-ball actions plus the aggregated defensive action [PAGE 7].

The solution concept is Markov perfect equilibrium (MPE), used as a motivating perspective but not computed or verified [PAGE 8]. Each player’s Markov strategy πi(· | st) ∈ Δ(Ai(st)) assigns a probability distribution over the feasible action set [PAGE 8, Eq. 1]. The MPE condition requires that no player can improve its expected return by unilaterally deviating: Viπ*(st) ≥ Vi(π̃i, π∗−i)(st) for all alternative Markov strategies π̃i and all states st [PAGE 8, Eq. 2]. The value function is the finite-horizon return Viπ(st) = Eπ[Σk=tT γ^(k−t) ri(sk, ak) | st] [PAGE 8, Eq. 3]. Because each possession has a finite terminal time T, the discount factor is set to γ = 1, so rewards near the end of a possession propagate to earlier actions without temporal attenuation [PAGE 8]. The empirical implementation does not estimate policies or verify equilibrium; instead, continuation values are bootstrapped from the next actions actually observed in each possession, with other players’ effects represented through the observed multi-player state [PAGE 8].

Interpretability is achieved by decomposing the immediate reward into a linear combination of d = 3 reward features: ri(st, at) = zi(st, at)⊤θ [PAGE 9, Eq. 4]. The feature vector z includes shot value, possession-termination adjustment, and attacking-third ball occupancy [PAGE 9, Eq. 5–7]. The pitch length is L = 105 m, so the attacking-third boundary is x = L/6 = 17.5 m [PAGE 9]. Reward weights are predefined heuristically as θ = [1.0, −0.5, 0.2]⊤ and are not estimated from data [PAGE 9–10]. The Q-function decomposes as Qπi(st, ai,t) = hπi(st, ai,t)⊤θ, where h is the successor-feature basis representing the expected discounted sum of features [PAGE 10, Eq. 8–9].

Estimation uses a two-stage procedure. First, a linear semi-gradient TD estimator approximates hi(st, at; Wi) = Wi⊤ϕi(st, at) with block-structured basis functions ϕi = e(ci,t, ai,t) ⊗ ũi,t [PAGE 11, Eq. 10–12]. The TD objective minimizes E[‖zi(st, at) + γhi(st+1, ai,t+1; Wi) − hi(st, at; Wi)‖²] [PAGE 11, Eq. 13], with TD target Yi,t = zi(st, at) + γhi(st+1, ai,t+1; Wi) and terminal target Yi,T = zi(sT, aT) [PAGE 11–12, Eq. 14–15]. The semi-gradient update is Wi ← Wi + αϕ(st, at)(Yi,t − hi(st, at; Wi)) [PAGE 12, Eq. 16]. Second, a nonlinear MLP with hidden layers 64 and 32 is pretrained to reproduce these linear TD estimates and then refined by approximate value iteration (AVI) using targets yi,t = zi(st, at) + γhi(st+1, aobs i,t+1; ψk) [PAGE 12, Eq. 17–18]. Greedy actions are derived only at post-training inference and are never fed back into TD targets [PAGE 12].

Quantitative results on 95 J1 League matches (50 training from 2023, 45 validation/test from 2024; 10,308 possession sequences; raw tracking at 25 fps resampled to 10 fps) show that TD MSE is only comparable within a formulation because the independent RL baseline uses a scalar Q-value target space whereas the MPE-inspired formulation uses a successor-feature vector space [PAGE 15]. Independent RL + PVS: 6.6947 × 10⁻⁴; Independent RL + EDMS: 4.5057 × 10⁻⁴; MPE-inspired + PVS: 1.1229 × 10⁻²; MPE-inspired + EDMS: 1.0876 × 10⁻² [PAGE 15]. Off-ball action ranking under EDMS shows the independent baseline assigns the highest Q-value to forward movement in 99.21% of evaluated off-ball states, while the proposed MPE-inspired model’s most frequent direction accounts for only 17.63% [PAGE 1, 16]. The team-level association with official 2024 J1 League full-season xG across n = 20 matched teams is negative for independent RL (ρ = −0.37) and weakly positive for the proposed model (ρ = 0.29) [PAGE 16]. Qualitative cases demonstrate context-sensitive off-ball support movements, defensive positioning that closes dangerous space, and post-hoc reward-weight adjustment shifting highest-valued actions from backward-right to forward-right when the attacking-third weight increases from 0.2 to 1.0 [PAGE 18–21].

Gray-zone audit: (1) MPE is never solved or verified, so the “multi-agent” component cannot be isolated from architecture, reward representation, and training-procedure differences [PAGE 8, 23]; (2) TD MSE target spaces differ across formulations, precluding cross-formulation comparison [PAGE 15]; (3) reward weights are heuristic and fixed, limiting external validity [PAGE 9–10, 23]; (4) player slots are not persistent identities, so longitudinal player valuation is not supported [PAGE 6]; (5) the team-level xG analysis uses n = 20 teams and mismatched temporal coverage (held-out tracking sample vs. full-season xG) [PAGE 16]; (6) EDMS and PVS omit body orientation, field of view, and player-specific technical attributes, which the authors themselves list as a limitation [PAGE 23]; (7) validation contains only 5 matches, and test contains 40, raising variance concerns for team-level diagnostics [PAGE 13].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, SI/information/probability units, assumptions, and breakdown regimes.

Markov strategy and MPE condition [PAGE 8]:
πi(· | st) ∈ Δ(Ai(st)), where Δ(·) denotes the probability simplex over the state-dependent feasible action set [PAGE 8, Eq. 1].
Viπ*(st) ≥ Vi(π̃i, π∗−i)(st), ∀π̃i, ∀st ∈ S [PAGE 8, Eq. 2].
Finite-horizon value [PAGE 8, Eq. 3]:
Viπ(st) = Eπ [ Σ_{k=t}^{T} γ^(k−t) ri(sk, ak) | st ], γ = 1, units: accumulated reward (unitless, because features are unitless probabilities/occupancy indicators and θ is unitless).
Because γ = 1 and T is finite, the return is well defined without temporal discounting; breakdown regime: infinite-horizon or continuing tasks would require γ < 1 for convergence [PAGE 8].

Reward feature specification [PAGE 9–10]:
ri(st, at) = zi(st, at)⊤θ, θ ∈ ℝ³, θ = [1.0, −0.5, 0.2]⊤ [PAGE 9–10, Eq. 4].
d = 3 features corresponding to shot value, possession termination, and attacking-third ball occupancy [PAGE 9].
Pitch geometry: L = 105 m, attacking direction aligned with +x, attacking-third boundary at x = L/6 = 17.5 m [PAGE 9].
Ct = Σ_{j∈Iatt} Σ_{k=t}^{Et} 1{Sj,k = 0} 1{xk < L/6} [PAGE 9, Eq. 5].
Attacking player feature vector [PAGE 9, Eq. 6]:
zi(st, at) = [ vt·1{ai,t = shot}; −V(−xt, yt)·Ct; 1{xt ≥ L/6} ], units: vt is configured shot value (unitless EPV-derived scalar), V(·) is Expected Possession Value (unitless probability in [0,1]), Ct is a count (unitless), occupancy indicator is binary.
Defending player feature vector [PAGE 9, Eq. 7]:
zi(st, at) = [ −Σ_{j∈Iatt} vt·1{Sj,t > 0}; V(−xt, yt)·Ct; 0 ], with opposite signs for attackers and defenders on the possession-termination component.

Successor-feature decomposition [PAGE 10, Eq. 8–9]:
Qπi(st, ai,t) = hπi(st, ai,t)⊤θ, units: unitless accumulated reward features.
hπi(st, ai,t) = Eπ [ Σ_{k=t}^{T} γ^(k−t) zi(sk, ak) | st, ai,t ], expectation also over a−i,t ∼ π−i(· | st) [PAGE 10, Eq. 9].

Linear TD initialization [PAGE 11–12, Eq. 10–16]:
hi(st, at; Wi) = Wi⊤ϕi(st, at), Wi ∈ ℝ^{pi × d}, d = 3 [PAGE 11, Eq. 10].
ϕi(st, at) = e(ci,t, ai,t) ⊗ ũi,t, where ũi,t = Standardizei(oi,t) and e(·) is a one-hot role–action block [PAGE 11, Eq. 11–12].
L(Wi) = E[ ‖ zi(st, at) + γhi(st+1, ai,t+1; Wi) − hi(st, at; Wi) ‖² ] [PAGE 11, Eq. 13].
TD target: Yi,t = zi(st, at) + γhi(st+1, ai,t+1; Wi); terminal: Yi,T = zi(sT, aT) [PAGE 11–12, Eq. 14–15].
Semi-gradient update: Wi ← Wi + αϕ(st, at)(Yi,t − hi(st, at; Wi)) [PAGE 12, Eq. 16].
Assumption: bootstrapping uses the next observed action ai,t+1 rather than a greedy or best-response action; breakdown regime: non-stationarity if other players’ policies shift during data collection, though the dataset is static so this is a distributional approximation rather than an online instability.

AVI nonlinear refinement [PAGE 12, Eq. 17–18]:
y_i,t^(k) = zi(st, at) + γhi(st+1, aobs i,t+1; ψk) [PAGE 12, Eq. 17].
ψ_{k+1} ← arg min_ψ E[ (y_i,t^(k) − hi(st, ai,t; ψ))² ] [PAGE 12, Eq. 18].
MLP architecture: hidden-layer sizes 64 and 32; batch size 2,048; at most 20 AVI iterations; learning-rate schedule reduces by factor 0.3 at iterations 5, 10, 15 with minimum 10⁻⁵; linear TD pretrained for one epoch at lr = 0.001 [PAGE 14].

State representations [PAGE 6, 29–31]:
PVS: sPVS t = [pb,t, vb,t, p1,t, v1,t, …, pN,t, vN,t], dimension 92 [PAGE 29, Eq. 19]; units: positions and velocities in m and m/s.
EDMS: dimension 74; Absolute State (offside-line distance, formation), Relative Off-ball State (ball distance, pressure time τ_player, pass-line pressure time τ_passline, space score, pass score), Relative On-ball Intra-Possession State (ball pressure, goal distance, goal angle, dribble score, shot score, long-ball score), Relative Inter-Possession State (time to reach ball, goal distances, goal angles, ball velocity, transition indicator) [PAGE 30–32, Table 5].
EDMS space-score change per direction: ΔSpaceScore_i,d,t = SpaceScore(p_i,t + u_d) − SpaceScore(p_i,t), u_d is a one-meter displacement vector [PAGE 30, Eq. 24]; units: space-score units per meter.
EDMS pass score: PassScore_i,t = k1·d_ball_i,t + k2·SpaceScore_i,t + k3·τ_player_i,t + k4·τ_passline_i,t, k1 = 0.5, k2 = 0.3, k3 = 0.2, k4 = 0.2 [PAGE 31, Eq. 25–26]; units: weighted sum of meters (distance), space-score units, and seconds (pressure times).

Experimental data and metrics [PAGE 13–16]:
95 Meiji Yasuda J1 League matches, 2023–2024 seasons; 25 fps raw tracking resampled to 10 fps; possession sequences of length 30–300 time steps retained; 10,308 sequences and 1,561,255 event-sequence time steps; train 4,589 / validation 918 / test 4,801 sequences [PAGE 13].
TD MSE: independent RL scalar Q-value space vs. MPE-inspired successor-feature vector space (d = 3); absolute values not comparable across formulations [PAGE 15].
Off-ball action concentration: independent RL + EDMS forward movement in 99.21% of evaluated off-ball states; MPE-inspired + EDMS most frequent direction in 17.63% [PAGE 1, 16].
Team-level exploratory association: Spearman ρ = −0.37 (independent RL) vs. ρ = 0.29 (MPE-inspired) across n = 20 matched teams; Q-value summaries from held-out test matches vs. official 2024 J1 League full-season xG [PAGE 16].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week traps.

The proposed framework sits at the intersection of three lineages: event-based action valuation, multi-agent reinforcement learning in sports, and dynamic game theory. Event-based valuation begins with expected goals (xG) models [11] and extends to all on-ball actions through VAEP [3], which decomposes sparse goal rewards into denser scoring- and conceding-probability changes [PAGE 3]. Tracking-data extensions include Expected Possession Value (EPV) [13] and Expected Threat (xT) [14–15], which assign spatial threat values to pitch regions and enable off-ball and buildup evaluation [PAGE 3]. Defensive valuation is represented by GVDEP [19] and models of ball-recovery and attack probabilities [20] [PAGE 3]. The present work inherits EPV as an input to the reward feature V(−xt, yt) [PAGE 9] but departs from pure statistical mapping by modeling each player as an autonomous decision-making agent [PAGE 3].

The multi-agent lineage is anchored by Nakahara et al. [6], which explicitly models individual on-ball and off-ball players using MARL with real tracking data [PAGE 4–5]. The current study adopts EDMS from Ide et al. [7] and [9] as the tactically interpretable state representation [PAGE 5–6]. Unlike Nakahara et al. [6], which treats player interactions without an explicit equilibrium-based formulation, this work introduces an MPE-inspired dynamic-game perspective [PAGE 5]. The MPE lineage traces to dynamic game theory in sports: static approaches model penalty kicks as zero-sum games between kicker and goalkeeper [35], with Chiappori et al. [36] testing mixed-strategy Nash equilibrium under player heterogeneity and Bar-Eli and Azar [37] documenting psychological distortions such as risk aversion and action bias [PAGE 5]. Cooperative approaches quantify contributions via Shapley values [38] [PAGE 5]. Dynamic approaches include physics-inspired spring-force models of collective movement [39], Soccer-Decoder differential-equation simulations [40], Bayesian games for pre-match tactics [41], and potential-field formulations of game intelligence [42] [PAGE 5]. The authors position their MPE-inspired framework as a learning-based approximation to dynamic-game value modeling in computationally challenging