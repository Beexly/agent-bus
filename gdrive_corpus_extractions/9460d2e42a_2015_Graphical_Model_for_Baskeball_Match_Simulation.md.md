---
source: "2015 Graphical Model for Baskeball Match Simulation.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5896
---

<NATIVE_REASONING>
The user wants me to analyze a research paper about a graphical model for basketball match simulation. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text provided is pages 1-8 (or so) of the paper. The user said PAGES: 10, but the text ends at page 8. I should work with what's provided, citing page markers [PAGE 1] through [PAGE 8] based on the page numbers visible in the text.

Let me map page numbers:
- Page 1: Title, Abstract, Introduction start, Figure 1
- Page 2: Table 1, Section 2.1, 2.2
- Page 3: Section 2.3, 2.4, Figure 2
- Page 4: Section 2.5, 2.6
- Page 5: Section 2.7, 2.8, 2.9
- Page 6: Section 3 Results, Figure 3, Figure 4
- Page 7: Figure 5, Figure 6, discussion of NBA Finals simulation
- Page 8: Conclusion, References

Wait, looking at the text:
- After Figure 1 description, there's "2015 Research Paper Competition Presented by: 2" then Section 2.1. So page 2 starts there.
- Page 2 ends after Section 2.2? Actually the text shows page break markers. Let me look carefully.

The text has:
- Page 1 content: Abstract, Intro, Figure 1 picture text
- Then "2015 Research Paper Competition Presented by: 2" - this is page 2 header/footer
- Page 2 content: Table 1, Section 2.1, Section 2.2 (shot frequency)
- Page 3 content: Section 2.3 (shot efficiency), Section 2.4 (pass network), Figure 2, footnote 1
- Page 4 content: Section 2.5 (Shooting Foul), Section 2.6 (Rebound)
- Page 5 content: Section 2.7 (Number of Possessions), Section 2.8 (Turnover), Section 2.9 (Simulation)
- Page 6 content: Section 3 Results, Figure 3, Figure 4, text about R-squared
- Page 7 content: Figure 5, Figure 6, NBA Finals discussion
- Page 8 content: Conclusion, Acknowledgements, References

Actually the text flow:
- "2015 Research Paper Competition Presented by:" appears multiple times as headers.
- "2" appears after Figure 1 text - that's page 2.
- Then Table 1 and sections 2.1-2.2.
- Then "2015 Research Paper Competition Presented by: 3" - page 3.
- Sections 2.3, 2.4, Figure 2, footnote.
- Then "2015 Research Paper Competition Presented by: 4" - page 4.
- Sections 2.5, 2.6.
- Then "2015 Research Paper Competition Presented by: 5" - page 5.
- Sections 2.7, 2.8, 2.9.
- Then "2015 Research Paper Competition Presented by: 6" - page 6.
- Section 3 Results, Figure 3, Figure 4.
- Then "2015 Research Paper Competition Presented by: 7" - page 7.
- Figure 5, Figure 6, NBA Finals simulation discussion.
- Then "2015 Research Paper Competition Presented by: 8" - page 8.
- Conclusion, Acknowledgements, References.

I'll cite [PAGE 1] through [PAGE 8] accordingly.

Now, constraints:
- No betting lines. The paper mentions "sport betting related industries" in introduction but I should not discuss spreads/totals/moneylines/odds as betting lines. I can mention prediction of win percentages but not betting odds.
- No toy equations. I must use formal LaTeX from the paper or derive properly. The paper has some equations but they appear as images in the source text (the actual math formulas are missing/blank in the markdown). I need to reconstruct them from notation and context, but clearly state they are reconstructions from the paper's notation, or cite what's available. Since the equations appear as blank images in the markdown, I should describe them formally using the notation defined in Table 1 and the text descriptions, while being honest that the exact rendered equations are image-only in the source. However, I can write formal LaTeX based on the textual descriptions:
  - Shot frequency: Bernoulli with σ(x) = exp(x)/(1+exp(x)), Si indicator, Lo, Ld, γi, βj, wij, offset term involving γ̃i and teammates.
  - Shot efficiency: Y indicator, d basis, θid shooting ability, φjd defensive ability.
  - Pass network: αij, softmax over j given i.
  - Shooting foul: SF(i,j), ψid, ζjd.
  - Rebound: DRi, ORi, ρd_i, ρo_i.
  - Possessions: τi average possession time, Ti duration, ηi number of possessions, minimize sum of square error.
  - Turnover: average probability per touch, steal rate proportional.

I need to be careful not to invent fake ratios like Force/Fatigue. I can use the actual formulas described.

Structure:
1. <THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss how the graphical model chains conditional probabilities across possession states, the identifiability issues, lineup substitution effects, EM algorithm for α matrix, rebound competition, etc. Audit gray zones: missing exact equations (image-only), EM convergence, lineup weight assignment arbitrariness, no distance modeling between defender/shooter, no assists/blocks, hypothetical cross-team pass networks impossible, training/test split 70/30 of 1230 games, R² values, per-game stats variance for low-scoring players.

2. <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations with units/probability units, page citations [PAGE N], verbatim quotes, breakdown, exact singularity/breakdown regimes.

3. <RETROCAUSAL_GENEALOGY>: Historical lineage: Shirley 2007 Markov model, Štrumbelj & Vraˇcar 2012 homogeneous Markov, Fewell et al. 2012 strategic networks, Franks et al. 2014 defensive skill spatial structure. Multi-week traps: lineup changes day-to-day due to injuries, substitution patterns, 2014 NBA Finals case study (Spurs vs Heat), Game 5 lineups fixed, best-of-seven format, weights allocated to lineups.

4. <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. How coaches adjust lineups in crisis (e.g., replacing Duncan with Diaw), the model's assumption that opponents' lineups are fixed inputs, recursive adaptation (if I substitute, opponent substitutes), possession clock τi, turnover clock, end-of-game clock management not modeled.

5. <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. No weather in indoor basketball. Physical vetoes: player fatigue not modeled, injury substitutions exogenous, rebound physical competition modeled by ρ but no vertical leap/box-out biomechanics, shot distance not modeled (basis d only), defensive proximity not modeled (justification: φ captures closeness), free throws independent of defenders (reasonable). Biomechanical: shot efficiency depends on basis and defender ability but not shooter-defender distance. Weather: N/A indoor. Substitution rules: 5 players on court, lineup input parameter.

6. <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I need 3 scenarios where the model's predictions would be vetoed by counterfactual checks.
   Scenario 1: Cross-team hypothetical lineup (e.g., LeBron on Warriors 2014) - model cannot estimate pass network for players from different teams due to no pass data. Prediction: model output undefined/singular; vetoed.
   Scenario 2: Lineup with player out of position or extreme minutes (e.g., center playing point guard) - α matrix learned from historical position-similarity weights; if position similarity breaks, wij assumption fails. Prediction: shot frequency and pass probabilities miscalibrated.
   Scenario 3: Overtime or clock-end possessions - τi average possession time assumes stationary possession duration; end-of-game clock manipulation (fouling, slowdown) violates stationarity. Prediction: total possession count η misestimated.

Word count: Need >= 1,000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial depth.

No betting lines: I must avoid "spreads, totals, moneylines, odds." I can say "win probability" or "predicted win percentage" but not betting odds.

Let's draft carefully.

THINK_TRACE (>=400 words):
- Start with the graphical model as a factored joint distribution over possession states.
- Multi-hop: initial touch distribution -> pass network (α) -> shot decision (Bernoulli with logistic link conditioned on lineup and defensive weights) -> shot outcome (Bernoulli conditioned on shooter skill θ, defender φ, basis d) -> foul (ψ, ζ) -> free throw (player FT%) -> rebound (ρ competition) -> turnover -> next possession.
- The conditional probability of each edge is learned from data.
- Gray zones: exact formulas are image-only in the provided markdown, so the precise functional forms (e.g., the logistic argument for shot frequency, the softmax denominator for passes, the rebound competition formula) are not machine-readable in the source; reconstruction relies on notation definitions. This is a breakdown regime for algorithmic reproducibility.
- EM algorithm for α: uses total passes between players and total possessions per lineup. Potential identifiability issue when lineups are sparse or players rarely co-occur.
- Substitution effects: replacing Duncan with Diaw changes not just one node but the entire conditional probability table because teammates' shot propensities interact via the offset term (average teammates' γ).
- R² values: within-sample 0.92, out-of-sample 0.87 for team win%; per-game points R² 0.74 train, 0.63 test; higher variance for low-scoring players. This signals heteroscedastic error and breakdown at tails.
- 2014 NBA Finals simulation: 101 simulations per series outcome, best-of-seven, Heat lineups fixed from Game 5, Spurs lineup weights varied (0.3, 0.15, 0.1 etc.). Changing weights changed series result (4:2 vs 3:4), showing extreme sensitivity to coach-controlled minute allocation, which is an exogenous input not learned from data.
- Possession count τ: least-squares minimization across games; assumes constant average possession time per team, ignores game-state dependency (end of quarter, score differential).

SOURCE_OPERATORS_AND_EQUATIONS:
List notation from Table 1 [PAGE 2].
Reconstruct equations formally:
- Shot frequency: P(S_i=1 | touch, L_o, L_d) = σ( γ_i - Σ_{j∈L_d} w_ij β_j + offset ), where offset = γ̃_i - (1/4) Σ_{k∈L_o, k≠i} γ̃_k, σ(x)=e^x/(1+e^x). [PAGE 2-3]
- Pass network: P(pass i→j | pass) = α_ij / Σ_{k∈L_o, k≠i} α_ik, α_ii=0. [PAGE 3]
- Shot efficiency: P(Y=1 | shot, i, d, j) = σ( θ_id - φ_jd ) perhaps; paper says function of θ_id and φ_jd. State that exact link is image-only. [PAGE 3]
- Shooting foul: P(SF(i,j)=1 | shot, d) = f(ψ_id, ζ_jd). [PAGE 4]
- Free throw: P(FT made) = player's FT percentage, independent. [PAGE 4]
- Rebound: P(DR_i=1) = ρ^d_i / (Σ_{offensive} ρ^o + Σ_{defensive} ρ^d) maybe; need to be careful. Paper says probability given lineup. State exact form image-only. [PAGE 4]
- Possessions: minimize Σ_i ( T_i / τ_{a(i)} - η_i )² or similar; paper: total T possessions close to τ_a + τ_b where T_i is duration. Actually text: "total T number of possessions for each team in a game between team a and team b should be close to τ_a + τ_b, where T_i is duration of game i." That seems garbled. I'll cite verbatim and note breakdown.
- Turnover: P(turnover per touch) = historical average per player; steal assigned proportional to steal rate.

Breakdown regimes: when lineup has never been observed together (α matrix undefined for arbitrary cross-team lineups); when γ̃ offset denominator zero (team of one); when τ_i = 0 (division by zero in possession rate); when basis d unobserved for a player.

RETROCAUSAL_GENEALOGY:
- Lineage: Markov chain possession models (Shirley [1], Štrumbelj & Vraˇcar [2]) treated team as single entity [PAGE 1]. Fewell et al. [3] network analysis but no player identity [PAGE 1]. Franks et al. [4] shot frequency without teammates [PAGE 2-3]. This paper bridges player identity + team network.
- Multi-week traps: NBA season lineup churn due to injuries/rest; model calibrated on 2013-14 70/30 split [PAGE 6]. A model trained in November breaks by April due to trades and injuries; lineup weights are inputs, not outputs. The 2014 Finals case used Game 5 Heat lineups for both cases [PAGE 7], locking in a specific tactical snapshot that may not generalize to Game 6/7 adjustments.
- Recursive trap: If Spurs change lineup, Heat would respond; model fixes opponent lineup, so it cannot capture coach-countermove dynamics within a series.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: When a team is down, coach regresses to "trusted" lineup (e.g., Spurs starting 5). Model treats lineup as exogenous input; it doesn't model the coach's recursive reasoning ("I know they know I'll sub Diaw for Duncan").
- Counter-trap: Opponent adjusts defensive assignment (e.g., Aldridge on Duncan lowers Duncan's shot frequency, raises Parker's [PAGE 7]); this is a first-order response but not higher-order (Spurs anticipating Aldridge's adjustment).
- Clock: τ_i average possession time ignores shot clock, game clock, score differential. End-of-game possessions have different tempo; model assumes stationarity across the whole game.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: Indoor sport, weather veto is null (no weather effects). Physical fatigue not modeled; minutes are allocated by weight input but player energy decay isn't in the graph.
- Biomechanical layer: Rebound modeled as ability competition ρ, no vertical leap, wing span, box-out timing. Shot efficiency lacks shooter-defender distance (paper explicitly justifies omission [PAGE 3]). Pass network ignores physical passing lanes and defensive pressure beyond α weights.
- Roster rules: exactly five players per lineup; substitutions are discrete node swaps. Injury replacements are exogenous.
- Veto proof: Any proposed simulation must pass: (1) all five players exist on roster and are active; (2) total weights sum to 1 across lineups for a game; (3) basis d must have observed shot data for that player; (4) τ_i > 0.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Hypothetical cross-team lineup (e.g., 2014 LeBron James on Spurs). Veto: Paper states inability to estimate pass network for hypothetical lineups from different teams due to no cross-team pass data [PAGE 8]. Prediction: model returns undefined α matrix; any win probability is vetoed as non-identifiable.
- Scenario 2: Extreme substitution (e.g., playing a center at point guard for entire game). Veto: w_ij set by position similarity [PAGE 3 footnote]; if position similarity is violated, defensive weighting breaks down. Prediction: shot frequency for that player misestimated because β_j weights no longer reflect actual guarding assignments.
- Scenario 3: End-of-game clock management (intentional fouling, slowdown). Veto: τ_i assumes constant average possession time [PAGE 5]; clock end possessions are non-stationary. Prediction: total possession count η and final score distribution biased; model overestimates trailing team's comeback chances if it doesn't shorten possessions.

Need to ensure no betting lines. I won't mention odds.

Word count check: I'll write generously.

Citations: Use [PAGE 1] etc. where appropriate. The text provided has page numbers. Let me verify exact page numbers from the markdown:
- Page 1: Title/Abstract/Intro/Figure 1. It ends with Figure 1 picture text. Then "2015 Research Paper Competition Presented by: 2" indicates page 2 start. So [PAGE 1] is valid.
- Page 2: Starts with Table 1, Section 2.1, 2.2. Ends after Section 2.2 text? Actually after Section 2.2 there's footnote 1. Then "2015 Research Paper Competition Presented by: 3". So [PAGE 2] contains Table 1, 2.1, 2.2.
- Page 3: Section 2.3, 2.4, Figure 2, footnote. [PAGE 3]
- Page 4: Section 2.5, 2.6. [PAGE 4]
- Page 5: Section 2.7, 2.8, 2.9. [PAGE 5]
- Page 6: Section 3 Results, Figure 3, Figure 4 text. [PAGE 6]
- Page 7: Figure 5, Figure 6, NBA Finals discussion, Figure 6 table. [PAGE 7]
- Page 8: Conclusion, References. [PAGE 8]

I'll cite accordingly.

Verbatim quotes: I need to include some verbatim quotes with page citations. E.g., "We model every touch and event in a game as a sequence of transitions between discrete states." [PAGE 2]. "either changes in the team lineup or changes in the opponent team lineup significantly affects the dynamics of a match progression." [PAGE 1 abstract or page 7]. Let's use [PAGE 1] for abstract quote and [PAGE 7] for results discussion.

Now, write the final response with exact XML sections. No markdown outside XML? The user wants exact XML sections. I'll wrap everything in those tags.

I must not mention betting lines. Check: no spreads, totals, moneylines, odds. Good.

Zero toy equations: No Force/Fatigue ratios. Use real formalism.

Length: THINK_TRACE needs >=400 words. Total >=1000 words. I'll make sure.

Let's draft.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper models a basketball match as a factored graphical model in which every possession is a discrete-state trajectory. The first hop is possession initiation: a team gains the ball via inbound, defensive rebound, or steal, and the starting player is sampled either from historical backcourt touch data (inbound) or determined trivially by the rebound/steal event [PAGE 2]. The second hop is ball movement: conditional on holding the ball, player i either shoots or passes. The shoot-versus-pass decision is a Bernoulli trial governed by a logistic function of player i’s shot propensity γ_i, the defensive deterrence of the five defenders β_j weighted by guarding time w_ij, and an offset term that compares i’s propensity to the average of his teammates’ propensities γ̃_k [PAGE 2–3]. This offset creates a cross-player coupling: if Kevin Durant sits out, Russell Westbrook’s effective shot probability rises even if Westbrook’s individual γ_westbrook is unchanged, because the teammate average in the offset drops [PAGE 3].

The third hop is pass routing. Conditional on passing, player i distributes the ball to teammate j through a softmax over the learned α_ij matrix, with diagonal entries fixed to zero [PAGE 3]. The α matrix is learned by EM using aggregate pass counts and lineup possession counts, which means the model inherits all sparsity problems of rare lineup co-occurrences. The fourth hop is shot outcome. Conditional on a shot attempt at court basis d by shooter i against closest defender j, the make/miss indicator Y is a function of shooter skill θ_id and defensive ability φ_jd [PAGE 3]. Notably, the paper removes shooter–defender distance from the efficiency equation, arguing that φ_jd subsumes closeness [PAGE 3]. This is a simplification boundary: if a defender contests aggressively but the model only records “closest defender,” the defensive pressure is compressed into a single parameter rather than a continuous spatial field.

The fifth hop branches into fouls and rebounds. A shooting foul indicator SF(i,j) depends on the shooter’s foul-drawing ability ψ_id and the defender’s foul proneness ζ_jd at basis d [PAGE 4]. Free throws are modeled as independent draws from each player’s historical free-throw percentage, explicitly severing opponent and teammate dependence [PAGE 4]. Rebounding is a competition over all ten players on court, with offensive rebound ability ρ^o_i and defensive rebound ability ρ^d_i determining the probability that player i secures the board [PAGE 4]. Because offensive and defensive rebounds require different effort, the model maintains two separate ability parameters per player rather than a single rebounding skill.

The sixth hop closes the loop on possession count. Team i’s average possession duration τ_i is estimated by minimizing squared error between predicted and observed game-level possession totals η_i across the 2013–14 schedule [PAGE 5]. This stationarity assumption implies that possession length does not vary with score differential, quarter, or shot-clock state—a strong simplification that breaks down in end-of-game clock management. Turnovers are handled as a per-touch historical rate per player, with steals assigned to defenders proportional to individual steal rates relative to teammates [PAGE 5].

Gray-zone audit: (1) The exact rendered equations for shot frequency, shot efficiency, fouls, and rebounds appear only as images in the supplied markdown; the textual notation defines the variables but not the precise functional forms (e.g., the denominator of the pass softmax, the exact logistic argument for shot frequency, the rebound competition normalization). Reproducibility therefore requires reconstructing equations from Table 1 and prose, which is a breakdown regime for algorithmic verification. (2) The model treats lineup and opponent lineup as exogenous inputs. It cannot simulate a recursive coach–countermove dynamic—if the Spurs insert Diaw for Duncan, the Heat’s defensive assignment is held fixed unless the analyst manually swaps the defensive lineup [PAGE 7]. (3) Lineup weights in the 2014 NBA Finals demonstration (0.3, 0.15, 0.1) are manually allocated possessions; the model does not learn optimal minute allocation from game state [PAGE 7]. (4) Out-of-sample player scoring shows R² = 0.63 with elevated bias for low-scoring players [PAGE 6], indicating heteroscedastic error at the tails of the performance distribution. (5) The paper explicitly cannot estimate pass networks for hypothetical lineups combining players from different teams [PAGE 8], which is a singularity for cross-franchise counterfactuals such as “LeBron on the 2014 Spurs.”

These gray zones compound: sparse lineup data destabilizes α; the fixed-defender assumption suppresses strategic adaptation; the stationarity of τ_i distorts late-game possessions; and the omission of shooter–defender distance compresses defensive contest into a static basis parameter. Any production use must therefore treat the graphical model as a conditional lineup simulator rather than a fully autonomous game engine.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX reconstructions, units, citations, and breakdown regimes.

Notation summary from Table 1 [PAGE 2]:
- L_o, L_d: offensive and defensive lineup sets (each of cardinality 5).
- γ_i ∈ ℝ: player i’s baseline shot-propensity logit.
- γ̃_i: shifted shot propensity used in teammate-offset term.
- β_j ≥ 0: defensive ability of player j to reduce shot frequency.
- w_ij ≥ 0: guarding weight of defender j on shooter i, proportional to time guarded; position-similarity heuristic [PAGE 3, footnote 1].
- α_ij ≥ 0: pass-tendency weight from i to j; α_ii = 0 [PAGE 3].
- θ_id ∈ ℝ: shooting ability of player i at court basis d.
- φ_jd ≥ 0: defensive ability of player j to reduce shot accuracy at basis d.
- ψ_id ∈ ℝ: player i’s ability to draw a shooting foul at basis d.
- ζ_jd ≥ 0: defender j’s foul proneness at basis d.
- ρ^d_i, ρ^o_i ∈ ℝ₊: defensive and offensive rebound-grabbing ability of player i.
- τ_a > 0: average possession duration (time units: seconds) for team a.
- T_i > 0: duration of game i (seconds).
- η_i ∈ ℕ: observed total possessions in game i.
- I_{ki} ∈ {0,1}: indicator that team k plays in game i.

1. Shot-frequency operator (Bernoulli, logit link). Let S_i ∈ {0,1} indicate whether player i attempts a shot on a given touch [PAGE 2–3]:
P(S_i = 1 | touch, L_o, L_d) = σ( x_i ), σ(x) = exp(x) / (1 + exp(x)),
where x_i is a linear function of γ_i, defensive deterrence Σ_{j∈L_d} w_ij β_j, and the teammate offset (γ̃_i − (1/4) Σ_{k∈L_o, k≠i} γ̃_k) [PAGE 2–3]. The exact rendered equation is image-only in the source [PAGE 2]; this is a reconstruction from Table 1 and prose. Units: x_i is dimensionless log-odds; output is a probability in [0,1]. Breakdown regime: if |L_o| = 1 the teammate average is undefined (division by zero); if no guarding-time data exists for a pair (i,j), w_ij falls back to the position-similarity heuristic, which may misrepresent actual defensive assignments.

2. Pass-network operator (categorical over teammates). Conditional on a pass from i, the receiver j ∈ L_o \ {i} is sampled [PAGE 3]:
P(j | pass by i) = α_ij / Σ_{k∈L_o, k≠i} α_ik, α_ii ≡ 0.
Units: α_ij are learned edge weights (dimensionless pass counts normalized by EM); output is a categorical probability simplex over the four teammates. Breakdown regime: if a lineup has never been observed in the training set, the row-normalized α matrix is unidentifiable; the paper explicitly cannot construct pass networks for hypothetical cross-team lineups [PAGE 8].

3. Shot-efficiency operator. Let Y ∈ {0,1} indicate a made field goal, d the shot basis, i the shooter, and j the closest defender [PAGE 3]:
P(Y = 1 | shot, i, d, j) = f(θ_id, φ_jd).
The paper describes f as a function of offensive shooting ability and defensive reduction ability but omits shooter–defender distance, justifying that φ_jd captures closeness [PAGE 3]. Units: probability in [0,1]. Breakdown regime: for an unobserved basis d (e.g., a player with no historical shots from that court region), θ_id is unidentifiable.

4. Shooting-foul operator. Let SF(i,j) ∈ {0,1} indicate shooter i fouled by defender j on a shot at basis d [PAGE 4]:
P(SF(i,j) = 1 | shot, d) = g(ψ_id, ζ_jd).
Exact g is image-only [PAGE 4]. Units: probability in [0,1]. Free throws are sampled independently from each player’s historical free-throw percentage [PAGE 4], which severs all opponent and teammate dependence; breakdown regime applies if a player has no free-throw history (rookie or never fouled).

5. Rebound-competition operator. Let DR_i and OR_i indicate defensive/offensive rebound by player i [PAGE 4]:
P(DR_i = 1 | lineup) = h( {ρ^d_m}_{m∈L_o∪L_d} ), P(OR_i = 1 | lineup) = h'( {ρ^o_m}_{m∈L_o∪L_d} ).
Exact normalizations are image-only [PAGE 4]. Units: probability in [0,1], summing to one over the ten players for each rebound type. Breakdown regime: if all rebound abilities for a team are zero or unobserved, the competition denominator collapses.

6. Possession-duration estimator [PAGE 5]. The team-level average possession time τ_k is learned by least squares:
minimize_{τ} Σ_i ( predicted_possessions_i(τ) − η_i )²,
with the stated constraint that total possessions in a game between teams a and b should be close to τ_a + τ_b, where T_i is game duration [PAGE 5]. The text here is compressed/garbled in the source; the precise objective and the role of I_{ki} are not fully legible. Units: τ in seconds per possession; η in count. Breakdown regime: τ_k = 0 yields infinite possession rate; the estimator assumes stationarity across score differential and game clock, which fails in end-of-game fouling or deliberate slowdown.

7. Turnover operator [PAGE 5]. Per-touch turnover probability is a player-specific historical average, independent of current lineup. Conditional on a steal, the defending player receiving the steal is sampled with probability proportional to his steal rate relative to teammates on court. Non-steal turnovers reset to an inbound pass. Breakdown regime: if a player’s historical touch count is zero, the per-touch rate is undefined.

8. Simulation and series outcome [PAGE 7–8]. For a given lineup assignment and weight vector, the graph of Figure 1 is traversed by sampling conditional edge probabilities until the estimated possession count is reached; one match sample yields win/loss. Repeated sampling (e.g., 101 simulations per series configuration) estimates expected series results under a best-of-seven format. The model outputs predicted win percentage, not betting odds, spreads, or totals [PAGE 6–7]. Within-sample team win-percentage R² = 0.92; out-of-sample R² = 0.87 [PAGE 6]. Player per-game points: training R² = 0.74, test R² = 0.63, with higher variance and bias for low-scoring players [PAGE 6].

Verbatim quote: “We model every touch and event in a game as a sequence of transitions between discrete states” [PAGE 2]. Verbatim quote: “either changes in the team lineup or changes in the opponent team lineup significantly affects the dynamics of a match progression” [PAGE 7, echoed in Abstract [PAGE 1]].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week failure traps.

The paper descends from three distinct strands. First, possession-based Markov modeling: Shirley [1] and Štrumbelj & Vraˇcar [2] treated each team as a single aggregate entity and modeled game progression without player-level resolution [PAGE 1]. Second, team-level network analysis: Fewell et al. [3] mapped ball movement as a strategic network but did not encode unique player identities [PAGE 1]. Third, spatial defensive modeling: Franks et al. [4] characterized shot frequency and defensive skill without incorporating teammate shot propensities into the shooter’s decision [PAGE 2–3]. Oh, Keshri, and Iyengar bridge these by making the node of the graphical model a network structure of the five specific players on court, with edges representing player-conditioned passes, shots, fouls, and rebounds [PAGE 1–2].

The multi-week trap is embedded in the 2013–14 training protocol. The model uses 70% of the 1,230 regular-season games for training and 30% for testing [PAGE 6]. NBA rosters are not stable across a season: injuries, trades, rest, and matchup-specific substitutions change lineups “almost on a day-to-day basis” [PAGE 1]. A parameter vector learned in December reflects the lineups active in December; by April, the same team may field entirely different five-man units, and the α matrix, γ_i, and β_j estimates become stale because they were conditioned on historical co-occurrence patterns that no longer obtain. The EM algorithm for α depends on observed pass counts per lineup [PAGE 3]; if a lineup appears in fewer than a handful of possessions, its row in the pass matrix is poorly conditioned.

The 2014 NBA Finals case study exposes a second multi-week trap: tactical immobility within a series. The authors fix the Miami Heat’s lineups to those used in Game 5 for both simulation cases, then vary only the San Antonio Spurs’ lineup weights [PAGE 7]. In an actual best-of-seven series, the Heat would adjust their defensive assignments in response to Spurs substitutions (e.g., if Boris Diaw replaces Tim Duncan, Miami might switch LeBron James or Chris Bosh to guard Diaw). The model holds the opponent lineup fixed, so it cannot capture the recursive adjustment that defines playoff basketball. A model trained on regular-season 70/30 splits and deployed on a playoff series therefore faces a distribution shift: the opponent’s lineup is no longer an exogenous constant but an adaptive counter-strategy. The reported sensitivity of series results to manually assigned lineup weights (4:2 versus 3:4 outcomes [PAGE 7]) underscores that the model’s output is driven by coaching inputs it does not itself optimize.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock.

Crisis habit regression: When a team falls behind, coaches tend to regress to a “trusted” core lineup—often the starting five that earned minutes earlier in the season [PAGE 7 discussion of Spurs substitutions]. In the model, lineup is an exogenous input parameter [PAGE 5–6]; there is no internal state variable representing score differential, time remaining, or coach urgency that triggers a habitual substitution. The model simulates what happens if a lineup is used; it does not simulate why a coach would select that lineup in crisis. Thus, a counterfactual asking “will the Spurs win if they regress to the Duncan-Green starting unit in the fourth quarter?” must be answered by an external coaching model, not by the graphical model itself.

Counter-trap: The first-order response is visible in the results: when Lamarcus Aldridge defends Tim Duncan (Spurs vs. Portland, Figure 5c [PAGE 7]), Duncan’s shot-attempt probability drops and Parker’s rises because the defensive weight β_Aldridge and guarding weight w_Duncan,Aldridge change the Bernoulli shot-frequency logit [PAGE 7]. This is a one-ply response: offense adjusts to a fixed defense. The second-order counter-trap—Spurs anticipating Aldridge’s help-side positioning and therefore running a high screen for Parker to draw Aldridge away from Duncan—is outside the graph because defender identity j is sampled from the fixed defensive lineup and shot efficiency lacks continuous defender–shooter distance [PAGE 3–7]. The model cannot represent “if I isolate Duncan, Aldridge will help, leaving Parker open,” because the defensive network is static within a possession simulation.

Clock: The possession-duration parameter τ_a assumes a constant average tempo [PAGE 5]. Real basketball contains multiple clocks: the 24-second shot clock, the game clock, and timeout structure. End-of-game possessions are systematically shorter (intentional fouls) or longer (stalling), violating the stationarity assumption. Moreover, turnover rate is modeled as a per-touch historical average independent of game state [PAGE 5], so a trailing team forcing hurried passes and a leading team milking the clock are both assigned the same per-touch turnover probability. The recursive theory of mind therefore breaks at the boundary where clock state should rewrite the transition kernel of the graphical model; instead, clock effects must be injected exogenously through the number of possessions η and the team-level τ.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Weather layer: Basketball is an indoor, climate-controlled sport; there is no weather variable in the graphical model, and no veto is triggered by temperature, precipitation, or wind [PAGE 1–8]. The only environmental factor is court basis d (shot location), which is discrete and learned from indoor arena data [PAGE 3].

Physical layer: The roster constraint is hard—exactly five players per team on court, lineup L_o or L_d as a set of five identities [PAGE 2, Table 1]. Substitutions are discrete node replacements, not continuous fatigue adjustments. Player fatigue, energy decay, and back-to-back game effects are absent; minutes are allocated by exogenous weights (e.g., 0.3, 0.15, 0.1 in the Finals demonstration [PAGE 7]), not by a physiological recovery function. Injury replacements are exogenous shocks; the model does not project how a missing player’s absence redistributes defensive load beyond the immediate lineup swap.

Biomechanical layer: Rebounding is modeled as an ability competition over ρ^d_i and ρ^o_i [PAGE 4], with no explicit vertical leap, wing-span, box-out timing, or positioning variables. Shot efficiency conditions on shooter basis d and defender ability φ_jd but explicitly omits shooter–defender distance [PAGE 3], so a closeout contest and a loose closeout are indistinguishable if the same defender is “closest.” The pass network α_ij captures historical tendency but not physical passing lanes, defensive deflections, or ball velocity. Free throws are treated as independent of defender pressure [PAGE 4], which is biomechanically reasonable for the shooter but ignores lane violations and rebound positioning after a missed free throw (though the model does model offensive and defensive rebounds generally [PAGE 4]).

Veto adjudication rules: Any proposed simulation must pass four gates: (1) all five players in L_o and L_d are active roster members for the season in question; (2) lineup weights for a game sum to a valid possession allocation; (3) every shot basis d used must have observed θ_id and φ_jd data for the relevant players, otherwise shot efficiency is unidentifiable [PAGE 3–4]; (4) τ_a > 0 and observed possession counts η_i > 0 for the estimation window [PAGE 5]. Cross-team hypothetical lineups fail gate 3 by the paper’s own limitation: no pass data exist for players who have never shared a court, so α cannot be estimated [PAGE 8]. This is a formal veto, not a tuning issue.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) veto scenarios and predictions.

Scenario 1 — Cross-franchise hypothetical lineup. Construct a counterfactual in which a 2014 player from Team X is inserted into Team Y’s starting five (e.g., LeBron James on the 2014 San Antonio Spurs) and simulate a full game. Veto rule: The paper explicitly states the model cannot estimate pass networks for hypothetical lineups of players from different teams because no cross-team pass data exist and pass structures are team-specific [PAGE 8]. Verifiable prediction: The α matrix row for the inserted player is undefined; any graphical-model traversal that requires a pass decision from that player terminates in a null transition. The model must return a non-identifiability veto rather than a fabricated win probability.

Scenario 2 — Position-mismatch extreme substitution. Simulate a game in which a center is assigned primary ball-handling duties for all possessions (point guard role) while the historical w_ij weights are computed from position similarity (point guards weighted more heavily against opposing guards) [PAGE 3, footnote 1]. Veto rule: The shot-frequency deterrence term Σ w_ij β_j assumes guarding assignments align with positional similarity; if the center actually guards a point guard, the weight vector no longer reflects real defensive matchups. Verifiable prediction: The model will overestimate the center’s shot frequency (because the offensive shot propensity γ_center is not adjusted for the fact that he is now initiating rather than finishing) and underestimate the opposing point guard’s defensive impact, producing biased possession outcomes that diverge from play-by-play ground truth.

Scenario 3 — End-of-game clock manipulation. Simulate a close game in the final two minutes where the trailing team intentionally fouls to stop the clock and the leading team slows pace to consume shot clock. Veto rule: The possession-duration estimator τ_a assumes stationary average possession time across the entire game [PAGE 5], and turnover probability is a per-touch historical constant independent of game state [PAGE 5]. Verifiable prediction: The graphical model will overestimate the number of possessions remaining for the trailing team and underestimate the trailing team’s turnover rate under pressure, causing the simulated win probability to drift away from the empirical win probability observed in actual clutch minutes. A clock-aware veto would replace τ_a with a game-state-dependent hazard rate.
</RLVR_COUNTERFACTUAL_VETOES>