---
source: "2011 - Ratings Central Accurate, automated, Bayesian table tennis ratings for clubs, leagues, tournaments and organizations - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/New England Symposium on Statistics in Sports/2011"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3554
---

<NATIVE_REASONING>
The user wants me to analyze a source document about Ratings Central, a Bayesian table tennis rating system. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided SOURCE TEXT but no explicit page markers like [PAGE 1], [PAGE 2]. The text says "PAGES: 8" but the markdown doesn't have page breaks. I need to be careful about page citations. Since there are no explicit page markers in the provided text, I should either note that page markers are absent from the provided extraction or use section headers as proxies. However, the invariant says "When source pages are provided, cite exact [PAGE N] markers". Since no page markers are visible in the text, I should mention that the source text lacks explicit [PAGE N] foliation and cite section headers instead, or I could infer pages based on the structure? Better to be honest: the provided markdown does not contain [PAGE N] markers, so I will cite by section header and note the absence of folio markers.

Wait, looking closely at the source text, there are no [PAGE N] markers. I should state this explicitly in the SOURCE_OPERATORS_AND_EQUATIONS section to comply with the invariant's spirit (not inventing page numbers).

Let me plan the content:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit. I need to derive the Bayesian model, discuss the probability-of-upset function, the random walk, the intractability, tournament surgery, tractability after surgery, event processing, priors, etc. Also audit gray zones: order-dependence of point changes, processing order not recorded, standard deviation misconception, prior elicitation issues (3-sigma vs 2-sigma), intractability for large N/M, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the text:
- π(x) = 1 / (1 + e^(x/67))
- P(player s beats player t) = π(t - s)
- Temporal update: zero-mean normal random walk, σ = 70 rating points/year
- Posterior integral expression (the messy one)
- Discrete laws on {0, 10, ..., 3500}
- FFT convolution
- Prior std dev guidelines: 50-75 for well-known unrated; event prior mean = (min+max)/2, std dev = (max-min)/4 (two sigma interpretation)
- Units: rating points, standard deviation in rating points, time in years.

Breakdown regimes: N up to 1000, M up to 3000 intractable directly; surgery makes it tractable but introduces graph approximation; discrete grid 0-3500 with step 10; FFT assumes translation invariance/convolution structure.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Elo (chess), USATT system since 1970s, Marcus 1999/2001 JRSS-D paper, Ratings Central launched 2004 with Sean O'Neill. Multi-week traps: temporal update random walk means ratings drift between events; players protecting ratings by not playing; prior miscalibration (3-sigma vs 2-sigma); order-dependence confusion; relative vs absolute ratings (the +100 point shift).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a more abstract section. Crisis habit regression: when ratings are challenged (e.g., upset losses), players revert to protecting ratings (not playing). Counter-trap: the system's order-dependence and lack of transparency creates distrust; the +100 point shift was a counter-trap to complaints. Clock: temporal update (70 points/year random walk) means ratings decay/age; event processing takes minutes; ratings posted soon after event.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Table tennis context: physical layer (player form, fatigue, equipment), biomechanical (stroke mechanics), weather (humidity affecting ball/rubber, temperature). The model is purely statistical; it has no physical/biomechanical/weather covariates. Veto: any claim that the rating captures physical state is vetoed because the model only uses match outcomes and temporal random walk. Weather veto proof: indoor sport, minimal weather effect, but not modeled. Biomechanical veto: no stroke data. Physical veto: no fitness/injury data.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
R LVR = Reinforcement Learning Verifiable Rewards? Or just "RLVR" as a framework. I need 3 scenarios where the system would fail or be vetoed, with predictions.
1. Scenario: Sudden skill discontinuity (injury recovery or technique change) violates the zero-mean random walk assumption (σ=70/year). Prediction: posterior will lag true strength by O(σ√Δt) and require multiple events to converge; standard deviation will remain inflated.
2. Scenario: Collusion or match-fixing within an event (e.g., throwing matches to manipulate ratings). Prediction: because total point change is order-independent but per-match change is order-dependent, and adjusted laws exclude self-matches, collusive cycles can create localized rating arbitrage; detection requires graph audit of surgery residuals.
3. Scenario: New player with mis-specified event prior (mean/std dev) in a division with truncated range (e.g., 800-1400 but actual player is 2000). Prediction: prior dominates early posterior; because discrete grid caps at 3500 and starts at 0, extreme mis-specification causes boundary pile-up; the +100 point shift shows absolute rating calibration is arbitrary, so prior error shifts entire local posterior.

I need to ensure total word count >= 1000 across all sections. Let me write generously.

Also, I must not mention betting lines. No spreads, totals, moneylines, odds. I can mention probabilities but not betting odds.

Let's draft carefully.

Page citations: Since none provided, I'll write "[PAGE N markers absent from provided markdown; citing by section header]". But the invariant says "When source pages are provided, cite exact [PAGE N] markers". They aren't provided, so I won't invent them. I'll cite section headers.

Let me write the sections.

THINK_TRACE: Need >=400 words. I'll write about 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, breakdown. Maybe 300-400 words.

RETROCAUSAL_GENEALOGY: 200-300 words.

RECURSIVE_THEORY_OF_MIND: 200-300 words.

CROSS_LAYER_VETO_ADJUDICATION: 200-300 words.

RLVR_COUNTERFACTUAL_VETOES: 200-300 words.

Total should exceed 1000 easily.

Let's write.

Important: Use exact verbatim quotes where possible. The text has some OCR artifacts (e.g., "U/ �R^{U}"). I should quote carefully or paraphrase with citation to section.

Equations:
π(x) = 1 / (1 + e^{x/67})
P(s beats t) = π(t - s)
Random walk: s_t = s_{t-1} + ε_t, ε_t ~ N(0, (70)^2) per year.
Posterior integral: ∫ dL4(x4)... etc. I'll reproduce the structure but note OCR issues.
Discrete grid: S = {0, 10, 20, ..., 3500}.
Convolution via FFT because integrands depend on x_i - x_0.

Breakdown/singularity:
- N up to 1000, M up to 3000: direct posterior intractable (high-dimensional integral over R^N).
- Surgery: graph pruning creates tree-like structure; if graph has cycles longer than surgery depth, approximation error unbounded.
- Discretization: grid step Δ=10 rating points; boundary at 0 and 3500 creates reflection/clipping bias for players near edges.
- Temporal update singularity: if time between events Δt → ∞, variance grows as 70√Δt, prior dominates; if Δt → 0, no update.

Now write.

I need to be careful with the XML tags exactly as specified.

Let's produce the final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source describes Ratings Central, a fully Bayesian replacement for the ad hoc USATT table-tennis rating chart. The first derivation hop is the likelihood kernel: each player possesses a latent playing strength s ∈ ℝ, and the probability that s defeats t is π(t − s), where π(x) = 1 / (1 + exp(x/67)). This is a logistic link with a fixed scale parameter of 67 rating points, meaning the model asserts a constant, universal noise scale across all skill levels. The second hop is the prior: each player’s strength is a random variable (the player’s “law”) with a normal prior, and between events the strength executes a zero-mean normal random walk with standard deviation 70 rating points per year. This temporal operator implies that the variance of a player’s law grows linearly with elapsed time, Var(s_t) = Var(s_0) + 70²·Δt, until match evidence collapses it again.

The third hop is computational intractability. For N players and M matches, the exact posterior is a high-dimensional integral over ℝ^N involving products of π(·) terms and prior densities. The text explicitly states that for N up to 1000 and M up to 3000, direct calculation is infeasible. The fourth hop is “tournament surgery,” a graph-theoretic sparsification. Players are nodes; matches are edges. For a focal player P, the system retains first-level opponents (directly connected to P), prunes second-level edges that extend downward or connect second-level nodes to each other, and “twins” second-level nodes that connect to multiple first-level nodes so that each first-level node links to exactly one twin. Finally, first-level edges are cut and replaced by twin boundary nodes. The result is a polytree-like graphical model in which the posterior for P factorizes into a low-dimensional nested integral—specifically a 4-dimensional integral in the illustrated case—over the laws of P and its neighbors.

Gray-zone audit: (1) Point-change order dependence. The text admits that point change per match depends on processing order, which is neither recorded nor shown, though the event total is order-invariant by the general property of staged posterior calculation. This creates an audit opacity: a player cannot reproduce their per-match delta from public data alone. (2) Prior elicitation failure modes. Event directors initially interpreted range as ±3 standard deviations (÷6), which produced standard deviations “too small”; the corrected rule uses ±2σ (÷4). This reveals a systematic prior-variance compression trap under subjective elicitation. (3) Standard deviation misconception. The text explicitly denies that σ measures consistency; it measures epistemic uncertainty only. Players routinely misread the ± number as a performance-consistency metric. (4) Relative scale arbitrariness. Adding 100 points to all new-system ratings decreased complaints without changing any inference, proving the absolute origin is meaningless and that player acceptance is psychologically anchored, not statistically grounded. (5) Boundary and discretization artifacts. Laws are discretized on {0, 10, ..., 3500}; players near 0 or 3500 experience truncation bias, and FFT-based convolution assumes translation-invariant kernels that break down at boundaries.

These gray zones are not bugs in the presentation; they are structural properties of a Bayesian rating engine that deliberately sacrifices per-match transparency for posterior coherence and computational tractability.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, and breakdown regimes. No [PAGE N] folio markers appear in the provided markdown extraction; citations below are by section header.

Likelihood operator:
π(x) = 1 / (1 + e^{x/67}), x in rating points.
P(player with strength s defeats player with strength t) = π(t − s).
Units: s, t, x in rating points; π dimensionless probability in [0,1].

Temporal evolution operator:
For event-to-event interval Δt measured in years,
s_{t+Δt} = s_t + ε, ε ∼ Normal(0, (70)^2 · Δt).
Standard deviation of innovation: 70 rating points per year.
Units: rating points · year^{−1/2} for the volatility coefficient.

Posterior intractability regime:
Let N be players in an event (up to 1000), M matches (up to 3000). Let L_j be the initial law of player j, p(i) the winner and q(i) the loser of match i. Exact posterior law for player 1 is proportional to an N-dimensional integral over ℝ^N of prior densities times ∏_i π(·) likelihood terms. Breakdown: direct evaluation infeasible for the stated N and M bounds; exponential complexity in graph tree-width.

Tournament surgery operator (graph pruning):
- Original graph G = (V, E), V = players, E = matches.
- For focal P: retain level-1 nodes (opponents of P); discard edges from level-2 downward; discard edges between two level-2 nodes.
- Twin operator: if level-2 node Q connects to ≥2 level-1 nodes, replace Q with twins Q′, each sharing Q’s initial law, such that each level-1 node connects to exactly one twin.
- Boundary cut: each level-1 edge is cut and terminated in twin nodes.
Result: posterior factorization into nested low-dimensional integrals.

Tractable posterior form (illustrative 4-node case):
∫ dL_4(x_4) dL_3(x_3) dL_1(x_1) dL_2(x_2) L_0(x_0) · π(x_2 − x_0) π(x_1 − x_0) π(x_3 − x_1) π(x_4 − x_1).
Units: differential elements dL_i(x_i) are probability densities per rating point; integrand dimensionless; result is posterior density for x_0.

Implementation discretization:
Continuous laws replaced by discrete laws on S = {0, 10, 20, …, 3500}. Grid spacing Δ = 10 rating points; boundary states 0 and 3500.
Because integrands are functions of playing-strength difference, integrals are convolutions computed by FFT.
Breakdown: FFT assumes periodic/translation-invariant kernel; hard boundaries at 0 and 3500 induce wrap-around or clipping bias for players whose posterior mass approaches the edges.

Event-processing operator:
1. Assign law to unrated players (event prior or player prior).
2. Retrieve rated-player law and apply temporal update.
3. For each player P and each opponent Q: compute adjusted law of Q = Q’s law updated on all Q’s matches except those against P.
4. Update P’s law sequentially per match using adjusted opponent law.
Order dependence: per-match point deltas depend on processing order; event totals do not.

Prior elicitation operator:
Event prior mean μ = (min + max)/2; standard deviation σ = (max − min)/4, interpreting range as ±2σ (not ±3σ).
Player prior for well-known unrated player: σ ≈ 50–75 rating points.
Units: rating points.

Breakdown / singularity summary:
- Discretization boundary singularity at s = 0 and s = 3500.
- Temporal prior dominance as Δt → ∞: variance grows without bound, posterior reverts to prior.
- Graph surgery approximation error unbounded when match graph contains long cycles not captured by the level-1/level-2 pruning.
- Order-invariance of event totals but order-dependence of match-level deltas creates non-identifiability of individual match contributions from public reports.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. The system descends from the Elo chess rating framework but explicitly rejects Elo’s core assumption that all ratings are equally accurate regardless of activity. USATT operated a chart-based, ad hoc point-update system since the 1970s; Marcus, as a USATT Ratings Committee member in 1997, identified excessive volatility, inaccurate ratings, and rating protection via inactivity. The mathematical engine was built by 1999 but rejected by a hostile USATT board. Ratings Central launched independently in 2004 with Sean O’Neill (five-time U.S. Men’s Singles Champion) handling club outreach and Marcus handling statistics and programming. The statistical foundation was published in Marcus (2001), Journal of the Royal Statistical Society Series D, “New Table-Tennis Rating System,” DOI 10.1111/1467-9884.00271.

Multi-week traps embedded in this lineage:
1. Temporal drift trap: the 70 rating points per year random walk means a player inactive for multiple weeks returns with an inflated variance. If they then enter a tournament, their adjusted law is diffuse, so match outcomes produce oversized point swings relative to active players—a multi-week memory effect that punishes absenteeism statistically even as the old system punished it socially.
2. Prior calibration trap: the shift from ±3σ to ±2σ in event-prior elicitation shows that subjective range compression systematically understates uncertainty. Directors who imagine “three-sigma events” poorly produce priors that are too tight, causing early-event posteriors to overfit noise and requiring several weeks of match data to recover.
3. Relative-origin trap: the +100-point blanket shift that reduced complaints demonstrates that player acceptance is lagging and retrosensitive; ratings are interpreted relative to peer expectations, not absolute posterior means. A multi-week run of unexpected upsets can trigger a legitimacy crisis even when the Bayesian model is well calibrated, because the “clock” of rating updates runs on event submissions, not on continuous time.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock. When a player’s Bayesian posterior drops below their self-concept, the observed habit is crisis regression: they protect their rating by withdrawing from play, exactly the behavior the old USATT system encouraged and the new system was designed to eliminate. The model itself cannot observe this withdrawal except through the temporal update; missing events simply diffuse the law via the 70-point/year random walk, which paradoxically makes the returning player’s rating more uncertain and thus more volatile when they finally re-enter.

Counter-trap: the system’s operators anticipated scrutiny of calculations and preempted it by making ratings available minutes after an event, and by ensuring published ratings match player intuitions well enough that players stop demanding auditability. The +100-point shift was an institutional counter-trap: it changed nothing statistically but altered the social payoff of complaints, reducing regression-triggering outrage without altering posterior ordering.

Clock: the system has two clocks. The event clock processes submissions in minutes and uploads ratings quickly, denying players the waiting-period rumination that fuels crisis narratives. The biological clock is the random walk: strength drifts continuously between events at 70 points/year σ, so a player’s “true” rating is a moving target. A player who regresses after a loss and then waits three weeks to return faces a posterior that has diffused by 70·√(3/52) ≈ 17 rating points of additional standard deviation, making their next performance look more extreme than it is and potentially triggering a second regression cycle.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof. The model is a pure outcome-based Bayesian filter. Its state vector is a scalar playing strength per player; its inputs are match winners and losers; its only dynamics are the normal random walk. It contains zero covariates for equipment (rubber, blade, glue), physiological state (fatigue, injury, recovery), biomechanical variables (stroke velocity, spin rate, footwork), or environmental conditions (hall temperature, humidity, altitude, air pressure).

Physical layer veto: any claim that a rating decrement reflects a physical injury or fitness decline is vetoed. The model attributes all loss evidence to a shift in s, but cannot decompose s into muscular, cardiovascular, or neurological components. A player returning from injury will appear as a diffused, uncertain law rather than a flagged physically-compromised state.

Biomechanical layer veto: stroke-mechanics changes, equipment switches, or technique adaptations are invisible. The only observable is the match outcome; two players with identical ratings may have radically different biomechanical profiles, and the model assigns them identical predictive distributions.

Weather veto proof: table tennis is predominantly indoor; the source never mentions atmospheric covariates. Because indoor venues regulate temperature and humidity, the model treats all matches as exchangeable conditional on player strengths. Any claim that outdoor or uncontrolled-environment matches require weather-adjusted likelihoods is vetoed by the absence of such terms in π(x) or the temporal update.

Adjudication: the rating system is provably blind to all physical/biomechanical/weather variation. Its predictions are conditionally valid only under the assumption that match outcomes are exchangeable draws from π(t − s) given current laws, regardless of the physical circumstances generating them.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios with predictions.

Veto Scenario 1 — Acute skill discontinuity (injury recovery or technique overhaul).
Setup: A player’s true strength jumps by Δ = +150 rating points over a two-week period (e.g., after returning from injury or changing equipment), violating the zero-mean random walk assumption with σ = 70/year.
Veto rule: The posterior after one event will lag the true strength because the temporal prior diffuses the law slowly; the model cannot encode a discontinuous state jump.
Prediction: After n events, expected posterior error ≈ Δ · exp(−k·n) for some evidence-accumulation rate k > 0; the player’s standard deviation will remain inflated relative to a steady-state active player for at least 4–6 events, and match outcomes against similarly rated opponents will show systematic upset patterns until the random walk catches up. Verifiable: compare the player’s post-event rating trajectory against an independent strength benchmark (e.g., coach ranking) across the recovery window.

Veto Scenario 2 — Collusive match manipulation within a single event.
Setup: Two players agree to throw matches to each other or to a third party to manipulate event-level point totals, exploiting the order-dependence of per-match deltas and the adjusted-law construction (opponent law excludes matches against the focal player).
Veto rule: Because total event point change is order-invariant but per-match allocation is not, colluders can transfer rating mass across the graph in ways that surgery does not explicitly flag; the system has no consistency check for match-fixing.
Prediction: Localized rating arbitrage will appear as anomalous clusters of point changes where winners gain less than losers lose (already documented as normal), but with the additional signature that colluders’ adjusted laws against each other are systematically misaligned with their performance against outsiders. Graph-residual audit of surgery twins will show elevated posterior mass on boundary nodes. Verifiable: re-process the event with permuted match order; if collusion is present, per-match deltas shift disproportionately for the colluding dyad while event totals remain fixed.

Veto Scenario 3 — Severe event-prior mis-specification at range boundaries.
Setup: An event director sets an event prior for unrated players assuming range 800–1400 (μ = 1100, σ = 150 under the ±2σ rule), but an unrated player is actually 2200 strength (a visiting elite). The discrete grid caps at 3500 and floors at 0.
Veto rule: The prior dominates the first few matches because the likelihood has not yet collapsed the diffuse prior; the player is forced into a truncated discrete support.
Prediction: The player’s initial posterior will be compressed toward 1100 ± 150, producing a large predicted upset probability against correctly rated 1800–2000 opponents (π(t − s) near 0.5 or higher despite true mismatch). After each match, variance shrinks and mean updates, but because σ was under-dispersed relative to truth, early updates will be overconfident. Boundary bias: if the player’s true strength approached 3500, the upper grid cap would cause clipping. Verifiable: compare the visiting elite’s first-event posterior mean and standard deviation against their known external rating; the error should decay approximately as O(1/√m) where m is matches played, but with an initial bias on the order of the prior misspecification (≈ 1100 rating points).
</RLVR_COUNTERFACTUAL_VETOES>