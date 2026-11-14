---
source: "2015 Graphical Model for Basketball Match Simulation.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5389
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper ("Graphical Model for Basketball Match Simulation" by Oh, Keshri, Iyengar, 2015) and produce a structured response with exact XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-word depth across sections.

I need to be careful: The source text is provided inline, but page markers are mentioned in the text (page numbers 1-8 visible). I should cite [PAGE N] where N corresponds to the page numbers in the document. The source text has page headers/footers: page 1 (abstract/intro start), page 2 (method start), page 3 (pass network), page 4 (foul/rebound), page 5 (number of possessions/turnover/simulation), page 6 (results), page 7 (conclusion/references?), page 8 (references end). Actually looking at the text:

- Page 1: Title, Abstract, Intro start, Figure 1 picture text.
- Page 2: Intro continued? Actually after Figure 1, "2 Method" starts. Then Table 1. Then 2.1 Start of Possession. Page footer says "2". So [PAGE 2] covers Method start through 2.1.
- Page 3: 2.2 Shot Frequency (equation), footnote 1, 2.3 Shot Efficiency, 2.4 Pass Network, Figure 2 picture text. Footer says "3".
- Page 4: Figure 2 caption continued, 2.5 Shooting Foul & Free Throw (equation), 2.6 Rebound (equation). Footer says "4".
- Page 5: 2.7 Number of Possessions (equation), 2.8 Turnover, 2.9 Simulation. Footer says "5"? Wait, looking at text: after 2.6 Rebound, there's "2015 Research Paper Competition Presented by: 4". Then 2.7, 2.8, 2.9, then "3 Result". Then page footer "5"? Actually text says "2015 Research Paper Competition Presented by: 5" after Figure 4? Let me trace:

The text flow:
- Page 1: Abstract, Intro, Figure 1.
- "2015 Research Paper Competition Presented by: 2" appears after 2.1 Start of Possession section header? Actually it appears right after 2.1 text block. Then Table 1? Wait, the order in the source text is:

Abstract
1 Introduction
...
Figure 1 picture text
2 Method
Table 1
2.1 Start of Possession
...
"2015 Research Paper Competition Presented by: 2"
2
2.2 Shot Frequency
...
footnote 1
2.3 Shot Efficiency
2.4 Pass Network
...
footnote about wij
"2015 Research Paper Competition Presented by: 3"
3
Figure 2 picture text
Figure 2 caption
2.5 Shooting Foul & Free Throw
...
2.6 Rebound
...
"2015 Research Paper Competition Presented by: 4"
4
2.7 Number of Possessions
2.8 Turnover
2.9 Simulation
...
"3 Result"
Figure 3 picture text
Figure 3 caption
"2015 Research Paper Competition Presented by: 5"
5
Figure 4 picture text
Figure 4 caption
...
Figure 5 picture text (a,b,c)
Figure 5 caption
"2015 Research Paper Competition Presented by: 6"
6
Figure 6 table
Text about Finals simulation
"4 Conclusion"
...
"5 Acknowledgements"
...
"6 References"
...
"2015 Research Paper Competition Presented by: 7"
7
References continued
"2015 Research Paper Competition Presented by: 8"
8

So page citations:
- [PAGE 1]: Abstract, Intro, Figure 1.
- [PAGE 2]: Method, Table 1, 2.1.
- [PAGE 3]: 2.2 Shot Frequency (equations missing in markdown but described), 2.3 Shot Efficiency, 2.4 Pass Network, Figure 2.
- [PAGE 4]: 2.5 Shooting Foul, 2.6 Rebound.
- [PAGE 5]: 2.7 Number of Possessions, 2.8 Turnover, 2.9 Simulation, 3 Result start, Figure 3.
- [PAGE 6]: Figure 4, Figure 5, Figure 6, Finals discussion.
- [PAGE 7]: Conclusion, Acknowledgements, References start.
- [PAGE 8]: References end.

The equations are missing actual LaTeX in the source markdown (they show blank spaces where images were). I need to reconstruct formal LaTeX based on the textual descriptions, but clearly label them as reconstructed from the paper's notation. The user said "State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." Since the actual equations are missing from the source text (represented as blank math blocks), I must reconstruct them from the descriptions provided in the text.

Let me reconstruct:

2.2 Shot Frequency:
P(S_i = 1 | touch, L_o, L_d) = σ(γ_i + offset_teammate - Σ_{j∈L_d} w_{ij} β_j)
where offset = γ̃_i - (1/4) Σ_{k∈L_o, k≠i} γ̃_k? The text says: "offset term \tilde{\gamma}_i - 4^{-1} \sum_{k\in L_o, k=i} \tilde{\gamma}^k_k"? That's garbled. Let's read carefully: "an offset term � _γ_ � _i −_ 4<sup>1</sup> � _k∈Lo_ , _k_ = _i_<sup>_γ_�</sup> _k_ �". It seems like: \tilde{\gamma}_i - \frac{1}{4} \sum_{k \in L_o, k \neq i} \tilde{\gamma}_k. Because there are 5 players, minus self leaves 4 teammates. So average teammate propensity.

Thus:
P(S_i=1) = σ( γ_i - Σ_{j∈L_d} w_{ij} β_j + ( \tilde{γ}_i - (1/4) Σ_{k∈L_o, k≠i} \tilde{γ}_k ) )
Actually the text: "γ_i is a parameter which determines how likely a player is to take a shot and β_j is the defensive ability of player j to reduce shot frequency. The weight w_ij determines how much player i is affected by the defense of player j...". So likely:
logit P(S_i=1) = γ_i - Σ_{j∈L_d} w_{ij} β_j + offset_i
where offset_i = \tilde{γ}_i - (1/4) Σ_{k∈L_o\setminus{i}} \tilde{γ}_k.
σ(x) = exp(x)/(1+exp(x)).

2.3 Shot Efficiency:
P(Y=1 | shot by i at basis d, defender j) = σ( θ_{id} - φ_{jd} )
or some function. The text says function of offensive skill θ_id, defender φ_jd, location d. Not distance.

2.4 Pass Network:
P(pass i→j | i passes) = α_{ij} / Σ_{k∈L_o, k≠i} α_{ik} for j∈L_o, j≠i. Diagonal zero.

2.5 Shooting Foul:
P(SF(i,j)=1 | shot at basis d) = σ( ψ_{id} - ζ_{jd} ) or similar. Free throw: Bernoulli with player's FT%.

2.6 Rebound:
P(DR_i=1 | miss, lineups) = ρ^d_i / Σ_{k∈all court} ρ^d_k (maybe with team distinction? Actually defensive rebound ability for defensive team players and offensive rebound for offensive team? The text says each player has defensive and offensive rebound ability. Probability of player i grabbing defensive rebound likely: ρ^d_i / (Σ_{k∈L_d} ρ^d_k + Σ_{k∈L_o} ρ^o_k)? Not exactly. But we can write softmax over relevant players.

2.7 Number of Possessions:
Minimize Σ_i ( η_i - T_i / (τ_a + τ_b) )^2? Actually: "total T number of possessions for each team in a game between team a and team b should be close to τ_a + τ_b, where T_i is duration of game i." Hmm garbled. The objective: minimize sum of square error of each game: Σ_i (η_i - T_i(1/τ_{a_i} + 1/τ_{b_i}))^2? Or if τ is average time per possession, then number of possessions ≈ game duration / τ. For two teams, maybe η_i ≈ T_i / τ_a + T_i / τ_b? Let's reconstruct: τ_a is average possession time of team a. Possessions per game for team a ≈ T_i / τ_a. Total possessions η_i ≈ T_i/τ_a + T_i/τ_b. Minimize Σ_i (η_i - T_i/τ_{a_i} - T_i/τ_{b_i})^2.

2.8 Turnover: per-touch turnover probability from historical data; steal assigned proportional to steal rate.

2.9 Simulation: sample events until estimated number of possessions reached.

Now for the sections:

THINK_TRACE: Need >=400 words. Deep multi-hop derivation & gray-zone audit. Discuss how the graphical model chains conditional probabilities across possession states. Gray zones: missing equations in source (math rendered as blanks), assumption of positional guarding weights (footnote 1), no distance between defender and shooter, no assist/block, no cross-team pass networks, EM on aggregate pass counts not event-level, free throw independence, stationary possession time τ independent of score/game state, lineup weights exogenous. Also the model uses 2013-14 data; applying to other eras has distribution shift. The NBA Finals simulation used only 101 simulations per series, high variance. R^2 0.92 in-sample, 0.87 out-of-sample for win%; player PPG R^2 0.74/0.63. Gray zone: player-level variance high for low scorers.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Units: probabilities dimensionless [0,1], time seconds, counts dimensionless. Citations [PAGE N]. Breakdown regimes: when σ argument saturates (|x| large → probability ~0 or 1), when lineup has 5 players required (singularity if <5), when α row sums to zero (no passes), when rebound denominator zero, when τ→0 (infinite possessions), when game duration T_i fixed but τ varies.

RETROCAUSAL_GENEALOGY: Lineage from Shirley [1] 2007 Markov model, Štrumbelj & Vračar [2] 2012 homogeneous Markov, Fewell et al. [3] 2012 strategic networks, Franks et al. [4] 2014 defensive skill spatial structure. Multi-week traps: roster turnover, injuries, strategic lineup changes day-to-day (paper explicitly mentions). The model bridges player identity and team network. Historical trap: assuming team is static entity ignores within-season lineup volatility.

RECURSIVE_THEORY_OF_MIND: This is more abstract/game theory. Crisis habit regression: under pressure, teams revert to habitual lineups/primary handlers (Parker, Ginobili). Counter-trap: opponent adjusts defense to take away primary handler, forcing secondary ball movement. Clock: possession time τ and shot clock constraints (not explicitly in paper but game flow). Theory of mind: offensive team models defender's foul proneness ζ and defensive ability β; defensive team models shooter's propensity γ. Second-order: defender knows shooter knows defender is foul-prone, etc.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since basketball is indoor, weather veto is null (controlled environment). Physical: court dimensions fixed, shot basis d discrete. Biomechanical: rebound contest depends on player abilities ρ; no jumping/vertical metrics explicitly. Veto: if a key player is injured (lineup change), model updates via L_o/L_d input. But if injury happens mid-game, model assumes lineup fixed for possession. Weather: none. Physical veto: the model cannot simulate hypothetical lineups from different teams (no cross-team pass data) — structural veto.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
1. Veto: Key offensive playmaker removed mid-series (e.g., Parker out). Prediction: pass network α redistributes to Mills/Ginobili; shot frequency shifts to guards/small forward; Duncan's shot probability drops if replaced by Diaw (as Figure 5b shows). Verifiable by comparing simulated vs actual Spurs 2014 Finals lineup variants.
2. Veto: Defensive specialist removed (e.g., Kawhi Leonard not in model's 2013-14 data? Actually he was there). Better: Replace Tim Duncan with Boris Diaw against Portland's Aldridge. Prediction: Duncan's shot attempt probability drops vs Aldridge; Parker's shot frequency increases (Figure 5c). Verifiable via Figure 5a vs 5c comparison.
3. Veto: Free throw independence assumption fails in high-pressure "hack-a-player" scenario. Prediction: model's FT% sampling ignores strategic fouling; if opponent intentionally fouls poor FT shooter, actual efficiency deviates from iid Bernoulli FT%. Verifiable by comparing model's free throw outcomes vs actual hack-a-Shaq style possessions.

Word count: Need >=1000 words total. I'll write substantial sections.

Important: No betting lines. No odds/spreads/moneylines/totals.

I must include verbatim quotes with [PAGE N] markers. Let me pick quotes:

- [PAGE 1]: "Conventional approaches to simulate matches have ignored that in basketball the dynamics of ball movement is very sensitive to the lineups on the court and unique identities of players on both offense and defense sides."
- [PAGE 2]: "We model every touch and event in a game as a sequence of transitions between discrete states."
- [PAGE 3]: "γ_i is a parameter which determines how likely a player is to take a shot and β_j is the defensive ability of player j to reduce shot frequency."
- [PAGE 3]: "For simulation purposes, we set the weight w_ij according to similarity of positions of player i and defensive player j." (footnote)
- [PAGE 4]: "SF(i,j) is an indicator for whether the player i was fouled by player j while shooting."
- [PAGE 4]: "Given the current lineup of offensive and defensive team on the court, the probability of player i grabbing an defensive or an offensive rebound is given by..."
- [PAGE 5]: "For simulation purposes, lineup is an input parameter to our model."
- [PAGE 6]: "This suggests that either changes in the team lineup or in the opponent team lineup significantly affects the dynamics of a match progression."
- [PAGE 6]: "One of the limitations of our current simulation model is not being able to estimate pass network for hypothetical lineup of players from different teams since we do not have the pass data for players from different teams..."
- [PAGE 6]: "Also, we do not take assist and block into account in the simulation."

I need to be careful about page numbers. The text explicitly shows page footers: "2", "3", "4", "5", "6", "7", "8". Page 1 doesn't have a visible number but is first page. I'll cite [PAGE 1] for abstract/intro.

Structure of response:

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

I'll aim for roughly 200-250 words per section to exceed 1000 total.

Let's draft content carefully.

THINK_TRACE (>=400 words):
Start with the generative chain: each possession is a trajectory through discrete states in Figure 1 [PAGE 1]. At t=0, starting player sampled from multinomial/inbound/defensive rebound/steal [PAGE 2]. Then at each touch, Bernoulli shot attempt decision conditional on lineup L_o, L_d [PAGE 3]. If shot, efficiency conditional on basis d and defender [PAGE 3]. If pass, categorical over teammates via α [PAGE 3]. If foul, free throws Bernoulli [PAGE 4]. If miss, rebound softmax over ρ [PAGE 4]. Turnover ends possession [PAGE 5]. Number of possessions governed by τ [PAGE 5]. This is a factored graphical model where the joint probability factorizes over possession steps.

Gray-zone audit: The paper's actual equations are rendered as blank math blocks in the source [PAGE 3]-[PAGE 5], so all LaTeX below is reconstructed from the notation table and prose [PAGE 2 Table 1]. The model assumes positional guarding weights w_ij set by position similarity, not measured defensive matchups [PAGE 3 footnote]. It ignores defender-shooter distance, subsuming closeness into φ_jd [PAGE 3]. It excludes assists and blocks [PAGE 6]. It cannot estimate cross-team hypothetical pass networks [PAGE 6]. Possession time τ is learned via least squares on game totals, assuming stationarity within a game [PAGE 5]. Free throws are modeled as independent of defense [PAGE 4]. These are strong structural assumptions that break down under lineup chaos, tactical fouling, or overtime clock management. Out-of-sample R^2 = 0.87 for win percentage and 0.63 for player points indicates residual variance, especially for low-usage players [PAGE 5]-[PAGE 6].

I'll write ~450 words.

SOURCE_OPERATORS_AND_EQUATIONS:
List each operator with LaTeX.
σ(x) = e^x/(1+e^x).
Shot frequency: logit P(S_i=1 | ...) = γ_i + offset_i - Σ_{j∈L_d} w_{ij} β_j.
offset_i = \tilde{γ}_i - (1/4) Σ_{k∈L_o, k≠i} \tilde{γ}_k.
Shot efficiency: P(Y=1 | ...) = σ(θ_{id} - φ_{jd}) (reconstructed).
Pass: P(j | i passes) = α_{ij} / Σ_{k∈L_o\{i}} α_{ik}.
Foul: P(SF=1 | ...) = σ(ψ_{id} - ζ_{jd}) (reconstructed).
FT: P(FT made) = p_i^{FT} (Bernoulli).
Rebound: P(DR_i=1) = softmax over defenders' ρ^d; P(OR_i=1) = softmax over offensive players' ρ^o.
Possessions: minimize Σ_g (η_g - T_g/τ_{a_g} - T_g/τ_{b_g})^2.
Turnover: Bernoulli per touch with player-specific rate; steal probability proportional to steal rate.

Units: probabilities unitless; τ seconds per possession; T seconds; η count. α weights unitless before normalization.

Breakdown/singularity: |θ-φ|→∞ gives degenerate 0/1; α row sum zero => undefined pass distribution; rebound denominator zero if all ρ=0; τ→0 => infinite possessions; L_o or L_d not size 5 => invalid lineup.

Cite [PAGE N].

RETROCAUSAL_GENEALOGY:
Trace: Markov possession models (Shirley 2007, Štrumbelj & Vračar 2012) treated team as monolithic [PAGE 1]. Fewell et al. 2012 introduced network analysis but ignored player identity [PAGE 1]. Franks et al. 2014 modeled defensive skill spatially but without teammate effects [PAGE 3]. Oh et al. 2015 merges these: player-level pass network + shot frequency conditioned on teammates + defense. Multi-week traps: NBA rosters change day-to-day due to injury/strategy; a team is not the same without LeBron or Durant [PAGE 1]. Model explicitly addresses this via L_o/L_d inputs. However, training on 2013-14 data means applying to 2015+ faces distribution shift from rule changes, roster turnover, three-point rate evolution. The 2014 NBA Finals demo used fixed Heat lineups from Game 5 and varied Spurs lineups [PAGE 6], showing within-series lineup sensitivity.

RECURSIVE_THEORY_OF_MIND:
First-order: offense chooses shooter/passer based on own γ and pass α; defense tries to reduce shot frequency via β and foul proneness ζ. Second-order: offense knows defender is foul-prone (high ζ) and may drive to draw foul; defense knows shooter has high γ and may sag off. Crisis habit regression: under pressure, teams regress to primary handlers (Parker, Ginobili in Spurs example) [PAGE 6]. Counter-trap: opponent defense takes away primary handler, forcing ball to secondary options; model captures this because Ginobili attracts more ball movement than Green [PAGE 6]. Clock: possession time τ sets the horizon; end-of-game clock management not modeled (τ average, not state-dependent). The model's recursive depth is limited: it does not model mixed strategies or defensive adjustments within a possession beyond closest defender φ.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: indoor court, fixed dimensions, discrete shot basis d. Weather veto: null (no weather effects in indoor arena). Biomechanical layer: rebound is ability contest ρ, no vertical leap/reach explicitly; shot distance not modeled, only basis d [PAGE 3]. Structural veto: cannot simulate hypothetical lineups combining players from different teams due to lack of cross-team pass data [PAGE 6]. This is a hard veto for trade-deadline or free-agency simulations. Injury veto: if a player is subbed mid-possession, model treats lineup as fixed for that possession; only updates at possession boundaries [PAGE 5] 2.9. The model assumes lineup is exogenous input [PAGE 5].

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
Scenario 1 (Playmaker removal): Veto condition: Tony Parker removed from Spurs starting lineup vs Miami Heat defense. Model prediction: pass probability mass shifts to Mills and Ginobili; Leonard shot frequency increases; Duncan replaced by Diaw shifts ball movement to backcourt [PAGE 6 Figure 5b]. Verifiable: compare simulated edge probabilities in Figure 5a vs 5b.
Scenario 2 (Defensive matchup change): Veto condition: Spurs offense vs Portland instead of Miami; Duncan guarded by Aldridge. Model prediction: Duncan's shot attempt probability drops due to Aldridge's higher β; Parker's shot frequency rises [PAGE 6 Figure 5c]. Verifiable: Figure 5a vs 5c.
Scenario 3 (Free throw strategic fouling): Veto condition: "Hack-a-player" intentional fouling of low FT% shooter. Model prediction: because FTs are sampled iid from player FT% independent of defense/context [PAGE 4], the model will not predict the strategic increase in foul rate or the psychological/contextual deviation from baseline FT%. Verifiable: actual hack-a-possession outcomes vs model's Bernoulli FT%.

I should add predictions as probabilities or qualitative shifts, but no betting lines.

Word count check: I'll write generously.

Need to ensure no mention of "odds", "spread", "moneyline", "total", "betting". Avoid even "odds ratio" unless in statistical sense? Better avoid "odds" entirely to be safe. Use probability or logit.

Also avoid fake ratios. The equations are reconstructed but clearly derived from text. I'll note "reconstructed from prose notation" to be honest.

Let's write.

One more thing: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I have the source text. I'll include quotes with page markers.

Let's draft the final output.
</NATIVE_REASONING>

<THINK_TRACE>
The generative chain in Oh, Keshri, and Iyengar (2015) is a discrete-time, factored graphical model over possession states. At possession initialization, the starting ball-handler is sampled from a multinomial over backcourt touches for inbound possessions, or is deterministically set by the rebounder or stealer for defensive-rebound and steal possessions [PAGE 2]. At each subsequent touch, the model evaluates a Bernoulli shot-attempt decision whose logit depends on the shooter’s intrinsic propensity γ_i, a teammate-offset term that captures usage displacement among the four co-players on L_o, and a defensive suppression term Σ_{j∈L_d} w_{ij} β_j, where β_j is defender j’s ability to reduce shot frequency and w_{ij} weights the i–j matchup by guarded time [PAGE 3]. If a shot occurs, shot efficiency is a function of shooter basis-specific skill θ_id, defender basis-specific suppression φ_jd, and shot basis d; deliberately, the paper does not model defender–shooter Euclidean distance, instead folding closeness into φ_jd [PAGE 3]. If the ball handler passes, the receiver is drawn from a categorical distribution over teammates via normalized α_{ij} edge weights, with the diagonal set to zero [PAGE 3]. Shooting fouls generate free throws sampled from an iid player free-throw percentage, independent of defenders or game state [PAGE 4]. Missed shots trigger a rebound contest modeled as a competition over defensive-rebound ability ρ^d and offensive-rebound ability ρ^o across the ten players on court [PAGE 4]. Non-shot turnovers end the possession and route to an inbound [PAGE 5]. The total possession count is anchored by team-specific average possession time τ, learned by least squares over game durations and possession totals [PAGE 5].

Gray-zone audit. The source PDF’s mathematical displays are rendered as blank blocks in the provided text [PAGE 3]–[PAGE 5], so every equation below is reconstructed from Table 1’s notation and the surrounding prose [PAGE 2]. This reconstruction is a vulnerability: the exact functional form for shot efficiency and foul probability (e.g., whether σ(θ_id − φ_jd) or an additive probability scale) is not directly verifiable from the supplied markdown. The model also hard-codes positional guarding weights w_ij based on position similarity rather than observed matchup data [PAGE 3 footnote], excludes assists and blocks entirely [PAGE 6], and refuses to estimate pass networks for hypothetical rosters combining players from different teams because no cross-team passing data exist [PAGE 6]. Possession time τ is assumed stationary within a game [PAGE 5], so end-of-game clock manipulation, intentional fouling, and pace changes under score pressure are outside the model. Out-of-sample win-percentage R² is 0.87, and player points-per-game R² falls to 0.63, with higher variance and bias for low-usage scorers [PAGE 5]–[PAGE 6]. These are structural breakpoints: the model is lineup-conditional but not lineup-adaptive mid-possession, and its in-sample fit (R² = 0.92 for wins) does not guarantee transportability to rosters with different identity distributions than the 2013–14 NBA training set.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Notation and formal operators, reconstructed from the paper’s notation table and section prose [PAGE 2 Table 1; PAGES 3–5]:

Sigmoid link:
\[
\sigma(x)=\frac{e^x}{1+e^x},\qquad x\in\mathbb{R},\quad \sigma(x)\in(0,1).
\]

Shot-attempt decision for offensive player i given touch, offensive lineup L_o, defensive lineup L_d:
\[
\operatorname{logit}\!\big(P(S_i=1\mid L_o,L_d)\big)
=
\gamma_i + \delta_i - \sum_{j\in L_d} w_{ij}\beta_j,
\]
where \(S_i\in\{0,1\}\) is the shot-attempt indicator, \(\gamma_i\) is player i’s baseline shooting propensity, \(\beta_j\) is defender j’s ability to reduce shot frequency, \(w_{ij}\) is the matchup weight proportional to time i is guarded by j, and \(\delta_i\) is the teammate offset
\[
\delta_i=\tilde{\gamma}_i-\frac{1}{4}\sum_{k\in L_o,\,k\neq i}\tilde{\gamma}_k .
\]
The offset is negative when i’s teammate-adjusted propensity is below the team average and positive when above [PAGE 3]. Units: all parameters are logit-space, dimensionless; output probability is unitless on [0,1].

Shot efficiency given shot attempt by i at basis d against closest defender j:
\[
P(Y=1\mid \text{shot by }i\text{ at }d,\text{ defender }j)
=
f\big(\theta_{id},\phi_{jd},d\big),
\]
with \(Y\in\{0,1\}\) the made-shot indicator, \(\theta_{id}\) offensive shooting ability at basis d, and \(\phi_{jd}\) defensive ability to reduce accuracy at basis d. The paper explicitly rejects explicit defender–shooter distance [PAGE 3]. Reconstructed link: \(\sigma(\theta_{id}-\phi_{jd})\). Units: dimensionless probability.

Pass network conditional on a pass decision by i:
\[
P(\text{receiver}=j\mid i\text{ passes},L_o)
=
\frac{\alpha_{ij}}{\sum_{k\in L_o,\,k\neq i}\alpha_{ik}},
\quad j\in L_o,\ j\neq i,\quad \alpha_{ii}=0.
\]
The α matrix is learned via EM on aggregate pass counts and lineup possessions [PAGE 3]. Units: α are unnormalized affinity weights; output is a categorical probability simplex.

Shooting-foul indicator:
\[
P(SF(i,j)=1\mid \text{shot by }i\text{ at }d,\text{ defender }j)
=
g\big(\psi_{id},\zeta_{jd},d\big),
\]
where \(\psi_{id}\) is shooter i’s foul-drawing ability at basis d and \(\zeta_{jd}\) is defender j’s foul proneness at basis d [PAGE 4]. Reconstructed: \(\sigma(\psi_{id}-\zeta_{jd})\). Free throws: \(P(\text{FT made by }i)=p_i^{\text{FT}}\), an iid Bernoulli draw independent of opponents and teammates [PAGE 4].

Rebound: given a miss, defensive rebound for court player i:
\[
P(DR_i=1\mid L_o,L_d)=
\frac{\rho^d_i}{\sum_{r\in L_d}\rho^d_r+\sum_{r\in L_o}\rho^o_r}
\]
(analogous offensive-rebound form with \(\rho^o_i\) in numerator), where \(\rho^d_i,\rho^o_i\in\mathbb{R}_{\ge0}\) are defensive and offensive rebound-grabbing abilities [PAGE 4]. Units: dimensionless probability; abilities are relative weights.

Possession count calibration [PAGE 5]:
\[
\{\hat\tau_a\}_{a=1}^{30}
=
\arg\min_{\{\tau_a\}}
\sum_{g}
\big(
\eta_g - T_g/\tau_{a_g} - T_g/\tau_{b_g}
\big)^2,
\]
where \(T_g\) is game duration in seconds, \(\eta_g\) is total possessions in game g, and \(a_g,b_g\) are the competing teams. τ has units seconds per possession; η and T_g are counts and seconds respectively.

Turnover: per-touch turnover probability is player-specific and lineup-independent; conditional on a steal, the stealing defender is sampled proportional to individual steal rate versus teammate average [PAGE 5].

Breakdown / singularity regimes: (i) if \(\sum_{k\neq i}\alpha_{ik}=0\), the pass distribution is undefined; (ii) if all rebound abilities are zero, the rebound denominator vanishes; (iii) as \(|\theta_{id}-\phi_{jd}|\to\infty\), shot probability degenerates to 0 or 1, eliminating stochasticity; (iv) \(\tau\to0\) yields an infinite possession count; (v) \(|L_o|\neq5\) or \(|L_d|\neq5\) is an invalid lineup input [PAGE 5, Section 2.9]. The model treats lineup as an exogenous input parameter rather than an endogenous coaching decision [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself against three prior lineages. First, possession-based Markov models by Shirley [1] and Štrumbelj & Vračar [2] treated each team as “merely a single entity rather than collective union of individual players” [PAGE 1]. Second, Fewell et al. [3] introduced network analysis of ball movement but “did not address the unique identities of players” [PAGE 1]. Third, Franks et al. [4] modeled shot frequency and defensive skill spatially without incorporating teammate usage interactions [PAGE 3]. Oh et al. (2015) bridges these by making the node state of the possession graph explicitly dependent on the five-man offensive network L_o and the five-man defensive network L_d, thereby allowing player identity to perturb edge transition probabilities.

The paper’s central motivating examples are temporally specific roster shocks: “Is Miami Heat the same team without LeBron James? Or, can Oklahoma City Thunder be an elite team without Kevin Durant and Russell Westbrook?” [PAGE 1]. It notes that lineup changes occur “almost on a day-to-day basis” due to injuries or strategy, and that Westbrook’s shot propensity rises when Durant is off court [PAGE 1, PAGE 3]. These are multi-week traps for any static strength metric: a model trained on season aggregates will misestimate a team’s conditional distribution in any given week because the effective L_o and L_d drift with injury reports and rotation changes. The 2014 NBA Finals demonstration explicitly exploits this by holding Miami’s Game 5 lineups fixed while varying San Antonio’s lineup weights, showing that series outcomes are sensitive to within-series personnel reallocation [PAGE 6].

A second retro-causal trap is the 2013–14 training window. The model is calibrated on NBA.com tracking and play-by-play from a single season [PAGE 2]. Applying it to later seasons faces distribution shift from rule emphasis changes, three-point volume evolution, and roster turnover; the paper does not provide a domain-adaptation mechanism. The pass network α is team-specific, and the authors state they cannot estimate networks for “hypothetical lineup of players from different teams” [PAGE 6], which blocks straightforward simulation of trades or free-agent signings. Thus the genealogical contribution is methodological—player-conditioned graphical possession simulation—but the temporal validity is bounded to rosters resembling the 2013–14 training distribution.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
First-order theory of mind: the offense models its own shooters’ propensities γ_i and pass affinities α_ij; the defense models its own shot-deterrence β_j and foul proneness ζ_jd. Each side conditions on the other’s lineup through L_o and L_d [PAGE 2–PAGE 4]. Second-order recursion appears in the shot-frequency offset: player i’s shooting decision depends on the average propensity of teammates, so a high-usage teammate externally suppresses i’s shot probability [PAGE 3]. Defensively, φ_jd subsumes how closely a defender guards, which implies the offense must infer defensive intensity without observing distance [PAGE 3].

Crisis habit regression: under pressure, the model predicts reversion to primary ball-handlers. In the Spurs–Heat example, replacing Danny Green with Manu Ginobili causes Ginobili to “attract the ball from other players more than Green does,” and with Tim Duncan out, “more ball movement between backcourt players” and shooting shifts toward guards and small forward [PAGE 6]. This is a habit-regression effect: the pass network α reallocates edge weight to established handlers (Parker, Ginobili, Mills) when role players are substituted.

Counter-trap: if the defense knows the offense regresses to Parker or Ginobili, it can allocate defensive pressure β to those handlers, forcing the offense to secondary options. Because the model conditions shot frequency on the specific defender matched up (via w_ij and β_j), a defensive adjustment that raises β against the primary handler endogenously reduces that handler’s shot probability and redistributes usage—a second-order counter-trap embedded in the graphical edge weights [PAGE 3, PAGE 6].

Clock: the only temporal parameter is the average possession time τ, learned globally per team [PAGE 5]. There is no state-dependent clock variable (shot clock, game clock, score differential), so the model cannot represent end-of-game fouling strategies, deliberate pace slowdown, or hurry-up offense. The recursion depth is therefore limited to one possession step at a time with stationary inter-arrival times; multi-possession strategic adaptation (e.g., “take the last shot” clock management) lies outside the model’s theory of mind.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: basketball is played indoors on a court of fixed dimensions, so there is no weather veto; temperature, wind, and precipitation do not enter the graphical model. The shot location is quantized into discrete bases d rather than continuous (x,y) coordinates, which is a physical discretization veto: the model cannot distinguish a shot from 23.9 feet versus 24.1 feet if both map to the same basis [PAGE 3].

Biomechanical layer: rebounding is modeled as an ability contest over ρ^d and ρ^o without explicit vertical leap, reach, or box-out mechanics [PAGE 4]. Shot defense is summarized by φ_jd and does not use defender–shooter distance or contest timing [PAGE 3]. These are structural abstractions, not measured biomechanics, so any veto that depends on precise physical contest (e.g., a contested layup versus an open dunk) is collapsed into the same basis-level probability.

Structural vetoes. (1) Hard lineup boundary: the paper explicitly states it “is not being able to estimate pass network for hypothetical lineup of players from different teams since we do not have the pass data for players from different teams” [PAGE 6]. This blocks cross-team trade or free-agency simulation. (2) Mid-possession immutability: lineup is an input parameter fixed for the possession; substitutions only take effect at possession boundaries [PAGE 5, Section 2.9]. An injury mid-possession cannot be modeled. (3) Missing event classes: assists and blocks are not included [PAGE 6], so any veto depending on shot-creation via assist or shot alteration via block is unrepresentable. (4) Free-throw context independence: FTs are sampled from career/season percentage regardless of score, clock, or “hack-a-player” intentional fouling [PAGE 4], which vetoes context-sensitive free-throw modeling.

Weather veto: null. Indoor arena removes meteorological variables; the only clock variable is average possession time τ, which is season-average and not adjusted for overtime or end-of-game urgency [PAGE 5].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Playmaker removal mid-series. Condition: remove Tony Parker from the Spurs’ starting offense while holding Miami’s defense fixed (Heat Game 5 lineup). Model prediction: the normalized pass row for Parker redistributes to Mills and Ginobili; Leonard’s shot frequency rises; replacing Duncan with Diaw shifts ball movement toward the backcourt and away from the post [PAGE 6, Figure 5a vs. 5b]. Verification: compare simulated conditional edge probabilities in Figure 5a (base) against Figure 5b (Ginobili for Green, Diaw for Duncan); a rejection occurs if Ginobili’s incoming-pass share does not exceed Green’s or if Duncan’s post-touch share does not decline.

Veto Scenario 2 — Defensive matchup change. Condition: hold Spurs offense fixed but switch the opponent defense from Miami to Portland, so Duncan is defended by LaMarcus Aldridge instead of Chris Bosh/Lewis. Model prediction: Duncan’s shot-attempt probability drops because Aldridge has higher defensive ability β to reduce shot frequency; Parker’s expected shot frequency rises correspondingly [PAGE 6, Figure 5a vs. 5c]. Verification: compare Figure 5a and Figure 5c shot-attempt nodes; a rejection occurs if Duncan’s shoot node probability does not decrease under Aldridge coverage.

Veto Scenario 3 — Strategic free-throw fouling (“hack-a-player”). Condition: opponent intentionally fouls a low free-throw-percentage Spurs player off the ball or in a non-shooting context to force FTs. Model prediction: because FT outcomes are iid Bernoulli draws from player FT percentage independent of defenders, teammates, score, or clock [PAGE 4], the model will assign the same FT success probability in the hack situation as in a normal shooting foul; it will not predict an elevated foul rate or a contextual deviation from baseline FT%. Verification: run 1,000 simulated possessions with forced fouls on a sub-60% FT shooter and compare the simulated FT-made rate to the player’s season percentage; a rejection occurs if the model shows any systematic strategic-foul adjustment (it cannot, by construction).
</RLVR_COUNTERFACTUAL_VETOES>