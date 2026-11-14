---
source: "2012 - Random Walk Picture of Basketball Scoring - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Journal of Quantitative Analysis in Sports/2012"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3531
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on a specific source paper about basketball scoring as a random walk. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully cite page markers from the source text. The source text has page numbers embedded: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18.

Key content from source:
- Gabel and Redner 2012, JQAS, DOI 10.1515/1559-0410.11416
- 6087 NBA games 2006/07–2009/10
- Continuous-time anti-persistent random walk
- Scoring rate λ = 0.03291 plays/sec, mean 2.0894 points/play, 94.78 plays/game, ~99 points/team/game
- Quarter rates: 0.03314, 0.03313, 0.03243, 0.03261
- Poisson process, exponential inter-arrival times
- λ_tail = 0.048 plays/sec for t_e, 0.024 for t_s/2
- Longest interval neither team scored: 402 s; single team: 685 s
- n-lag correlation C(n) < 0.03 for n ≥ 1
- Anti-persistence: q = 0.348 same team scores again, opponent 0.652
- Streak length Q(s) = A q^(s/s~) where s~ = 2.0894
- Recursive Eqs (4), (5) for streak probability with point values 1,2,3,4
- Restoring force: S(L) = 1/2 - 0.0022 L (decrease in scoring rate per point of lead)
- Variance σ² = 2 D_fit t, D_fit = 0.0363 points²/sec (excluding last 2.5 min)
- Anti-persistent diffusion D_ap formula, q=0.348, ℓ=2.0894, τ=30.39 s
- Péclet number Pe = v² t / 2D, v ≈ 0.0037 points/sec, Pe ≈ 0.55
- Winning team has better season record with prob 0.6777
- Team strength variance σ_X² = 0.0083 (range [0.00665, 0.00895])
- Intrinsic strengths in range 1 ± 0.09
- Bradley-Terry model
- Last 2.5 minutes anomaly: spike at Δ=0, dips for small |Δ|
- Arcsine law, lead changes, time leading
- Overtime omitted; regulation only 48 min = 2880 s

I need to be careful not to mention betting lines (spreads, totals, moneylines, odds). The user might be looking for sports analysis but I must avoid betting terminology. I can talk about win/loss records, score differences, probabilities of winning, etc., but not odds or lines.

Structure:
THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I'll derive the diffusion coefficient from first principles, connect the anti-persistence parameter q to the Ornstein-Uhlenbeck restoring force, discuss the Péclet number regime, audit the Poisson assumption breakdown at quarter ends and final 2.5 minutes, etc. Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations with units, page citations [PAGE N], verbatim quotes where appropriate. Breakdown of operators. Exact singularity/breakdown regimes: q=1/2 symmetric random walk, Pe << 1 vs Pe >> 1, last 2.5 minutes, end-of-quarter anomalies, overtime omission.

RETROCAUSAL_GENEALOGY: Historical lineage: Gilovich et al. 1985 hot hand, Ornstein-Uhlenbeck 1930, Feller 1968 arcsine law, Bradley-Terry 1952, García-Pelayo 2007, Durdham et al. 1998 rich get poorer, Sire & Redner 2009 baseball streaks. Multi-week traps: assuming stationarity across a week of games, ignoring fatigue/back-to-backs, etc.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is more abstract. I need to interpret "crisis habit regression" as teams reverting to mean under pressure, "counter-trap" as the restoring force/anti-persistence being exploited, "clock" as the 24-second shot clock and game clock end effects. Discuss how coaches/players model opponent psychology, recursion of beliefs, etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss layers: physical (court dimensions, shot clock), biomechanical (shooting percentage independence, fatigue), weather (indoor sport, minimal weather veto; HVAC/arena effects), and adjudicate which vetoes apply. Since basketball is indoor controlled environment, weather veto is null; physical veto: shot clock imposes minimum inter-arrival time; biomechanical veto: hot hand fallacy discredited, so no persistent skill modulation.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios. Need 3 scenarios with predictions. Examples: (1) If q forced to 0.5 (remove anti-persistence), predicted lead change distribution diverges from empirical after N games; (2) If restoring force coefficient set to 0, final score difference variance exceeds empirical by factor; (3) If overtime included, Poisson homogeneity breaks due to non-stationary duration; prediction of score distribution shift. Must be verifiable and include predictions.

Word count: total >= 1000 words across sections. THINK_TRACE alone >=400. I'll aim for substantial length.

Citations: Use [PAGE N] format exactly. Verbatim quotes: use quotation marks and cite page.

Let's draft carefully.

Important: No betting lines. I will not use "spread", "total", "moneyline", "odds". I can use "probability", "win/loss record", "score difference".

Let's check page numbers for key facts:
- Abstract: page 1 (first page of manuscript). Actually the text starts at page 1. Let's map:
Page 1: Abstract, Introduction start.
Page 2: Section 2 Scoring Rate, data description, scoring rate values, Table 1 mention.
Page 3: Figure 1, end-of-quarter anomalies.
Page 4: Figure 2, exponential tails, λ_tail, longest intervals 402s and 685s.
Page 5: Figure 3, Poisson score distribution, n-lag correlation.
Page 6: Section 3, anti-persistence q=0.348, opponent 0.652.
Page 7: Streak length, Eq (4), (5), recursive.
Page 8: Figure 5, restoring force S(L) = 1/2 - 0.0022 L, variance σ², D_fit = 0.0363.
Page 9: Figure 6, recursion Eq (6a,b), expansion Eq (7), D_ap derivation.
Page 10: D_ap numerical, Péclet number intro, team strengths, winning team better record prob 0.6777.
Page 11: Pe ≈ 0.55, final 2.5 minutes anomaly, Figure 7.
Page 12: Section 4 computational model, probabilities P_A and P_B, Eq for intrinsic strength, r definition.
Page 13: Bradley-Terry, σ_X², Gaussian distribution, four observables, arcsine law.
Page 14: Figure 8, χ² definition.
Page 15: Figure 9, σ_X² range [0.00665, 0.00895], best fit 0.0083, range 1 ± 0.09.
Page 16: Section 5 Outlook, summary, open issues.
Page 17: References start.
Page 18: References end.

I'll cite these.

Now write the response. Need to ensure formal LaTeX.

Let's compose.

THINK_TRACE (>=400 words):
I will discuss multi-hop derivation: from play-by-play to Poisson rate, to inter-arrival exponential, to anti-persistent walk, to diffusion coefficient, to Péclet number, to team strength variance. Gray-zone audit: the boundary between regulation and overtime, the last 2.5 minutes non-stationarity, the assumption of temporal homogeneity vs end-of-quarter spikes, the neglect of 5/6 point plays, the approximation s~ continuous vs discrete point values.

SOURCE_OPERATORS_AND_EQUATIONS:
List operators: λ, t_e, t_s, C(n), q, s~, Q(s), w_α, S(L), D_fit, D_ap, Pe, v, σ_X², χ².
Equations in LaTeX.
Breakdown with units.
Singularity/breakdown regimes: q=1/2; Pe << 1; Pe >> 1; t in last 150s; end-of-quarter ±24s; overtime; λ τ < 1? etc.

RETROCAUSAL_GENEALOGY:
Lineage: Ornstein-Uhlenbeck (1930) [PAGE 8], Feller arcsine law (1968) [PAGE 13], Bradley-Terry (1952) [PAGE 12], Gilovich hot hand (1985) [PAGE 1], García-Pelayo anti-persistent walk (2007) [PAGE 6], Durham rich-poor (1998) [PAGE 1], Sire & Redner baseball (2009) [PAGE 10], Westfall graphical basketball (1990) [PAGE 2]. Multi-week traps: stationarity across back-to-backs, ignoring roster changes, assuming σ_X² constant over season.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under score deficit, teams increase urgency (restoring force). Counter-trap: leading team may coast but also may intentionally foul to stop clock; this is modeled as increased scoring rate near end. Clock: 24-second shot clock sets τ ~ 30.39 s mean; game clock imposes finite horizon T=2880s causing non-stationarity at boundary. Recursive beliefs: coach models opponent's model of coach's fatigue, leading to anti-persistence because possession flips. 

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: indoor arena, weather veto NULL; shot clock imposes hard lower bound on inter-arrival time (~10s natural minimum). Biomechanical: shooting percentage independent of past (hot hand discredited), so no persistent hot-hand veto; however, 24-second clock and possession change create anti-persistence at possession layer. Weather: none. Adjudication: only temporal/possession layer vetoes are active; environmental vetoes are void.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: q → 0.5 (remove anti-persistence). Prediction: σ² = 2Dt with D = ℓ²/(2τ) instead of D_ap; empirical lead-change count drops by factor related to (1-q); χ² for lead changes exceeds tolerance within one week (7 games per team). Verifiable via simulation vs Fig 8(c).
Scenario 2: Restoring force coefficient κ = 0.0022 set to 0. Prediction: final score difference distribution remains Gaussian with width √(2Dt) all the way to t=2880s; the observed ∆=0 spike in last 150s disappears; P(tie) falls below empirical by >15%. Verifiable vs Fig 7.
Scenario 3: Include overtime (non-fixed T). Prediction: Poisson homogeneity breaks because game duration becomes random and scoring rate near end of OT may differ; variance vs time plot develops kink at t=2880s; D_fit estimated over full games including OT biases high by factor >1.1. Verifiable by re-running analysis with OT data.

Each scenario must be verifiable and have prediction.

Now ensure word count. THINK_TRACE needs >=400 words. I'll write generously. Total will be >1000.

Let's write in final channel.
</NATIVE_REASONING>

<THINK_TRACE>
The derivation proceeds in multiple hops from raw play-by-play observations to a season-level inference about team-strength heterogeneity. First, the source establishes that the inter-arrival time between scoring plays for either team, \(t_e\), follows an exponential tail with rate \(\lambda_{\text{tail}} = 0.048\ \text{plays/sec}\), while the same-team interval \(t_s\) has a decay rate of \(0.024\ \text{plays/sec}\) after rescaling by the factor of two implied by possession alternation ([PAGE 4], Fig. 2). The n-lag correlation \(C(n) < 0.03\) for all \(n \ge 1\) confirms near-memorylessness ([PAGE 5]), which licenses the continuous-time Poisson approximation with mean rate \(\lambda = 0.03291\ \text{plays/sec}\) and mean points per play \(\bar{s} = 2.0894\) points ([PAGE 2]). 

The second hop maps scoring events onto a spatial random walk for the score difference \(\Delta(t)\). Because possession changes after every basket, the probability that the same team scores twice consecutively is only \(q = 0.348\), while the opponent scores with probability \(0.652\) ([PAGE 6]). This is the signature of an anti-persistent random walk. The associated streak-length distribution \(Q(s)\) decays exponentially as \(Q(s) = A q^{s/\bar{s}}\), where \(A = q^{-1/\bar{s}} - 1\) normalizes over streak length measured in points ([PAGE 7]). A recursive refinement accounts for the discrete point values \(1,2,3,4\) via weights \(w_\alpha\) from Table 1 ([PAGE 7]).

The third hop introduces the weak linear restoring force: the probability that the leading team scores next declines as \(S(L) = \tfrac12 - 0.0022\,L\), where \(L\) is the lead in points ([PAGE 8], Fig. 5). This is an Ornstein-Uhlenbeck-type drift on the random walk. The variance of the score difference grows as \(\sigma^2 = 2 D_{\text{fit}} t\) with \(D_{\text{fit}} = 0.0363\ \text{points}^2/\text{sec}\) for all but the final 2.5 minutes ([PAGE 8], Fig. 6). Independently, the anti-persistent walk yields an effective diffusion coefficient \(D_{\text{ap}}\) from Eq. (7) using \(q = 0.348\), \(\ell = \bar{s} = 2.0894\) points, and mean inter-arrival time \(\tau = 30.39\ \text{sec}\) ([PAGE 9]); the close agreement with \(D_{\text{fit}}\) validates the microscale-to-macroscale reduction.

The fourth hop quantifies team-strength disparity through the Péclet number \(\text{Pe} = v^2 t / (2D)\), where the bias velocity \(v \approx 0.0037\ \text{points/sec}\) is estimated from the mean absolute final score difference \(|\Delta| \approx 10.7\) points over \(t = 2880\ \text{sec}\) ([PAGE 10]). With \(\text{Pe} \approx 0.55\), intrinsic team strength is present but subdominant to stochastic fluctuations; the superior team wins only with probability \(0.6777\) ([PAGE 10]). Fitting simulated win/loss records and four game observables to the Bradley-Terry intrinsic-strength model yields \(\sigma_X^2 = 0.0083\), implying typical strengths lie in \(1 \pm 0.09\) ([PAGE 15]).

Gray-zone audit: (i) The paper omits overtime to preserve the fixed horizon \(T = 2880\ \text{sec}\); including overtime would introduce a random game duration and break the Poisson stationarity assumption ([PAGE 2]). (ii) End-of-quarter scoring spikes and the final-2.5-minute \(\Delta = 0\) spike ([PAGE 11], Fig. 7) are treated as anomalies outside the homogeneous bulk model, creating a breakdown regime near the temporal boundary. (iii) Plays worth 5 or 6 points are neglected despite nonzero probability in Table 1 ([PAGE 2]), a truncation that slightly narrows the predicted total-score distribution ([PAGE 5]). (iv) The continuous approximation \(s \to s/\bar{s}\) in the streak formula ignores the integer lattice of point values, corrected only by the recursive Eqs. (4)–(5) ([PAGE 7]). These regimes define where the idealized random walk ceases to be quantitatively reliable.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units, with page citations:

Scoring intensity: \(\lambda = 0.03291\ \text{plays/sec}\), roughly constant across quarters (\(0.03314, 0.03313, 0.03243, 0.03261\)) ([PAGE 2]). Mean game contains \(94.78\) scoring plays; mean points per play \(\bar{s} = 2.0894\) points; mean team score \(\approx 99.018\) points ([PAGE 2]).

Inter-arrival distributions: \(P(t_e) \propto e^{-\lambda_{\text{tail}} t_e}\) for \(t_e > 30\ \text{sec}\), \(\lambda_{\text{tail}} = 0.048\ \text{plays/sec}\); \(P(t_s) \propto e^{-0.024 t_s}\) for \(t_s > 60\ \text{sec}\) ([PAGE 4], Fig. 2). Longest observed zero-scoring interval: \(402\ \text{sec}\) for either team, \(685\ \text{sec}\) for one team ([PAGE 4]).

Memory kernel: n-lag correlation \(C(n) < 0.03\) for \(n \ge 1\) ([PAGE 5]).

Anti-persistence: \(q = 0.348\) probability same team scores next; \(1-q = 0.652\) opponent scores next ([PAGE 6]).

Streak law: \(Q(s) = A q^{s/\bar{s}}\), \(A = q^{-1/\bar{s}} - 1\) ([PAGE 7]). Recursive refinement with play weights \(w_\alpha\) and sequence constraint \(\sum_{k=1}^n v_k = s\) ([PAGE 7]).

Restoring force / scoring bias: \(S(L) = \tfrac{1}{2} - 0.0022\,L\), where \(L\) is lead in points and coefficient \(0.0022\ \text{points}^{-1}\) ([PAGE 8], Fig. 5).

Diffusion: empirical \(\sigma^2(\Delta(t)) = 2 D_{\text{fit}} t\), \(D_{\text{fit}} = 0.0363\ \text{points}^2/\text{sec}\), fit excluding last \(150\ \text{sec}\) ([PAGE 8]). Anti-persistent theory gives \(D_{\text{ap}}\) via expansion of the master recursion Eq. (6a–b) to second order in \(\Delta\) ([PAGE 9]); symmetric limit \(q = 1/2\) gives \(D_{\text{ap}} = \ell^2/(2\tau)\) ([PAGE 9]).

Bias strength: \(v = |\Delta|_{\text{avg}} / T \approx 10.7\ \text{points} / 2880\ \text{sec} \approx 0.0037\ \text{points/sec}\) ([PAGE 10]).

Péclet number: \(\text{Pe} = v^2 t / (2D) \approx 0.55\) ([PAGE 10]); regime \(\text{Pe} \ll 1\): strength bias negligible; \(\text{Pe} \gg 1\): bias dominates.

Team strength: intrinsic probabilities from Bradley–Terry \(I_A, I_B\) with \(I_A + I_B = 1\); strength variance \(\sigma_X^2 = 0.0083\), optimal range \([0.00665, 0.00895]\) ([PAGE 12, 15]); typical strength \(1 \pm 0.09\).

Goodness-of-fit: \(\chi^2 = \sum_x [F_E(x) - F_S(x)]^2\) over four observables ([PAGE 14]).

Breakdown regimes:
1. \(t \in [2730, 2880]\ \text{sec}\) (last 2.5 minutes): non-Gaussian spike at \(\Delta = 0\), dip at small \(|\Delta|\), violating pure diffusion ([PAGE 11]).
2. End-of-quarter zones \(\pm 24\ \text{sec}\) around quarter boundaries: scoring-rate anomalies from shot-clock management ([PAGE 3]).
3. \(q = 1/2\): anti-persistence vanishes; model reduces to symmetric unbiased diffusion ([PAGE 9]).
4. Overtime inclusion: game duration \(T\) becomes stochastic, invalidating fixed-horizon Poisson conditioning ([PAGE 2]).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits at the intersection of three historical threads. (1) The stochastic rejection of the “hot hand” traces to Gilovich, Vallone, and Tversky (1985) and is reinforced here by the finding that \(C(n) < 0.03\), implying apparent streaks are Poisson fluctuations rather than correlated performance states ([PAGE 1], [PAGE 5]). (2) The physics lineage runs from Ornstein and Uhlenbeck (1930), whose linear restoring force on Brownian motion is explicitly invoked for the score-dependent scoring bias ([PAGE 8]), through Feller (1968) and the arcsine law governing time-in-lead and lead-change statistics ([PAGE 13]), to García-Pelayo (2007), whose solution for persistent/anti-persistent random walks supplies the recursion for \(P(\Delta,t)\) ([PAGE 6], [PAGE 9]). (3) The competition-science strand uses Bradley and Terry (1952) to convert intrinsic team strengths into win probabilities, with antecedents in Durham, Hirshleifer, and Smith (1998) on “rich get poorer” dynamics in low-decisiveness interactions ([PAGE 12], [PAGE 1]).

Multi-week traps emerge when this genealogy is misapplied across a season. A coach or analyst assuming stationarity of \(\sigma_X^2 = 0.0083\) week-to-week ignores roster turnover, back-to-back fatigue, and travel, none of which appear in the model because team strengths are fixed per season ([PAGE 12]). The arcsine law predicts that one team tends to lead for most of a game; over a multi-week horizon, naive extrapolation would imply persistent series dominance, but the low \(\text{Pe} \approx 0.55\) means short-run outcomes are dominated by diffusion, so a “hot” team over one week is not statistically distinguishable from random-walk fluctuation ([PAGE 10], [PAGE 13]). The historical trap is to treat the Ornstein-Uhlenbeck restoring force as a durable coaching lever rather than a weak, state-dependent modulation that disappears in the final 2.5 minutes when clock-management urgency overwhelms it ([PAGE 11]).
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: when a team falls behind, the restoring force \(S(L) = \tfrac12 - 0.0022 L\) implies the trailing team’s scoring probability rises linearly with deficit size ([PAGE 8]). This is a regression to a crisis habit: urgency increases, shot selection changes, and intentional fouling becomes more likely near game end ([PAGE 3], [PAGE 11]). The model treats this as an exogenous drift coefficient, but recursively, the trailing team’s coach anticipates the leading team’s coasting response, which itself depends on the leading coach’s belief about the trailer’s urgency. Because possession flips after every score, the anti-persistence parameter \(q = 0.348\) encodes the second-order belief that a score by A makes a score by B more likely, not because of fatigue, but because B now possesses the ball ([PAGE 6]).

Counter-trap: a leading team can attempt to trap the trailer by slowing pace, but the 24-second shot clock imposes a hard lower bound on possession duration, bounding how much the leading team can suppress the scoring rate ([PAGE 2]). If the leading team over-coasts, the trailer’s increased scoring probability combines with anti-persistence to produce rapid lead changes; the model’s prediction of \(\sqrt{N}\) origin crossings for \(N\) scoring steps translates to frequent lead swaps that invalidate any static “safe lead” heuristic ([PAGE 13]).

Clock: the game clock creates an absorbing boundary at \(t = 2880\ \text{sec}\). Because the model conditions on regulation time only, the distribution of \(\Delta(T)\) is Gaussian with width \(\sqrt{2 D T}\) until the final anomaly zone ([PAGE 11]). Recursively, both teams know the remaining time \(\tau_{\text{rem}} = 2880 - t\); as \(\tau_{\text{rem}} \to 0\), the trailer’s utility from scoring rises nonlinearly (possession value of a basket increases), generating the observed \(\Delta = 0\) spike and dip at small \(|\Delta|\) ([PAGE 11]). This boundary layer is not captured by the bulk Ornstein-Uhlenbeck drift and represents a breakdown of the time-homogeneous assumption exactly where recursive game-theoretic reasoning is strongest.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Basketball is played indoors under controlled climate, so meteorological vetoes (wind, temperature, precipitation) are null; the arena HVAC does not measurably enter the scoring statistics in the source. The only physical hard constraint is the 24-second shot clock, which imposes a minimum inter-attempt timescale and produces the observed exponential cutoff below \(\sim 10\ \text{sec}\) ([PAGE 4], Fig. 2). This is a timing veto, not an environmental one.

Biomechanical layer: The hot-hand fallacy is discredited; shooting percentage is independent of prior performance, so no biomechanical “streak” veto applies ([PAGE 1], [PAGE 5]). The anti-persistence \(q = 0.348\) is a possession-layer rule, not a player-fatigue rule: after A scores, B inbounds the ball, making consecutive A scores structurally unlikely ([PAGE 6]). There is no evidence in the source for a physiological veto on scoring rate over a 48-minute regulation game; the rate is temporally homogeneous apart from end-of-quarter artifacts ([PAGE 2], [PAGE 3]).

Weather layer: Null. Indoor sport; no weather variable appears in the dataset or model.

Adjudication: Active vetoes are confined to the temporal-possession layer (shot clock, change of possession, game-clock boundary). Environmental and biomechanical persistence vetoes are voided by the data. The model is therefore robust to cross-layer environmental perturbation but fragile to temporal-boundary perturbations (last 150 seconds, quarter transitions, overtime), which lie outside the calibrated diffusion regime.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Remove anti-persistence: Set \(q = 0.5\) while holding \(\lambda\), \(\bar{s}\), and \(D\) fixed. Verifiable prediction: the empirical lead-change distribution in Fig. 8(c) ([PAGE 13]) would narrow; because same-team consecutive scores become as likely as alternations, the number of lead changes per game falls below the simulated curve for \(\sigma_X^2 = 0.0083\), and the \(\chi^2\) for lead changes exceeds the tolerance band within one simulated week (seven games per team). The arcsine-law time-in-lead histogram in Fig. 8(b) would also lose its U-shaped bimodality.

Scenario 2 — Remove restoring force: Set the bias coefficient \(0.0022\ \text{points}^{-1}\) to zero in \(S(L)\). Verifiable prediction: the final score-difference distribution at \(t = 2880\ \text{sec}\) remains Gaussian with width \(\sqrt{2 D_{\text{fit}} T}\) all the way to the boundary; the observed spike at \(\Delta = 0\) and dip at small \(|\Delta|\) in the final 2.5 minutes ([PAGE 11], Fig. 7) disappear. The model probability of a regulation tie would drop below the empirical tie frequency by more than 15 percent over a month of simulated games.

Scenario 3 — Include overtime: Allow game duration \(T\) to exceed 2880 seconds with OT periods. Verifiable prediction: the assumption of temporal homogeneity breaks because OT scoring is conditioned on a tied regulation score and may have different urgency; the \(\sigma^2\) vs. \(t\) curve in Fig. 6 ([PAGE 8]) develops a kink at \(t = 2880\ \text{sec}\), and a single \(D_{\text{fit}}\) estimated over games including OT biases the diffusion coefficient upward by more than 10 percent relative to the regulation-only fit. This is falsifiable by re-running the play-by-play analysis with OT segments included and comparing the two \(D\) estimates.
</RLVR_COUNTERFACTUAL_VETOES>