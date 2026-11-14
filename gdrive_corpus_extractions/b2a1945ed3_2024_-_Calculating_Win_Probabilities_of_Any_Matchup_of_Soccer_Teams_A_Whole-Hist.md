---
source: "2024 - Calculating Win Probabilities of Any Matchup of Soccer Teams A Whole-History Rating Approach for the Wharton High School Data Science Compet - Seung et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/journals/Wharton Sports Analytics Journal/2024"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6950
---

<NATIVE_REASONING>
The user wants me to analyze a soccer analytics paper using a very specific format with strict invariants. Let me break down what I need to do:

1. ZERO BETTING LINES - No spreads, totals, moneylines, or odds
2. ZERO TOY EQUATIONS - No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions</RLVR_COUNTERFACTUAL_VETOES>

Important notes about the source:
- It's a machine conversion from PDF, equations/tables/figures NOT preserved
- The document has page markers? Looking at the text, I see "Seung" and "Wharton Sports Analytics Journal" appearing as page headers/footers. The text mentions pages but I don't see explicit [PAGE N] markers in the source text provided. However, the user says "PAGES: 7" and "cite exact [PAGE N] markers". I need to be careful - since the source text doesn't have explicit page number markers like [PAGE 1], [PAGE 2], etc., I should reference the sections or note that machine conversion omitted page markers. But the invariant says "When source pages are provided, cite exact [PAGE N] markers". Since no explicit page markers are visible in the text, I should probably use section headers or note the absence. Wait, looking closely, the text has "Seung" appearing which might be a running header. I don't see explicit page numbers. I should cite by section/content location or use [PAGE N] based on the 7-page structure if I can infer it, but that might be inventing. Better to say page markers were not preserved in machine conversion, then cite section names. Actually, re-reading: "cite exact [PAGE N] markers and verbatim quotes." Since none are provided, I cannot cite exact page markers without hallucinating. I should state that page markers were stripped in machine conversion and cite section headers instead, or use [PAGE N/A]. But to be safe and follow the invariant as closely as possible, I'll note the absence and cite sections/verbatim quotes without inventing page numbers.

Wait, I need to look again - maybe there are implicit page breaks? The text shows "Seung" and "Wharton Sports Analytics Journal" repeated, which suggests these are running headers/footers on each page. But no explicit page numbers.

Structure of the response:

<THINK_TRACE>
Deep multi-hop derivation & gray-zone audit (>=400 words).
- Derive the WHR model mathematically
- Bradley-Terry: P(i beats j) = ... with home advantage h, base b, conversion c
- Rating update equation with s_i, e_i, (xG1-xG2), d, k
- Multi-pass iterative propagation
- Bayesian posterior: P(Rating|GameResult) ∝ P(GameResult|Rating) × P(Rating)
- Newton's method for MAP estimation
- RMSE 0.346, Nelder-Mead optimization
- Gray zones: constant team strength assumption in fictional NSL vs real world injuries/form; xG limitations (elite players, game state strategy); static HFA 32.3 vs dynamic travel/timezone; neutral site knockout HFA=0; 80/20 split; 476 games; 28 teams, 7 groups of 4; penalty kick disparity 126:53; sequencing swing 430 points.
- Breakdown regimes: when xG is uninformative, when schedule is disconnected (no path between teams), when h is misspecified, when k/d cause divergence.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, breakdown.
- Need to reconstruct equations since they weren't preserved in machine conversion, but flag them as reconstructed from prose description.
- Bradley-Terry: P(i|j) = b^(r_i + h·I_home - r_j) / (1 + b^(r_i + h·I_home - r_j)) or similar. Actually standard Bradley-Terry: P(i beats j) = exp(r_i - r_j) / (1 + exp(r_i - r_j)). With home advantage: P(i home beats j away) = 1 / (1 + b^{-(r_i + h - r_j)/c})? The text mentions "c is the optimal rating-to-odds conversion" and "b is the base". So likely logistic with base b and scale c: P = 1 / (1 + b^{-(r_i + h·δ - r_j)/c}) where δ=1 if i home.
- Rating update: Δr_i = k · (e_i - s_i) · f((xG1-xG2), d). Probably something like k*(e_i - s_i)*(1 + d*(xG1-xG2)) or similar. Need to be careful not to invent exact form. I'll write it as Δr_i = κ · (e_i - s_i) · [1 + d·(xG_i - xG_j)] or note exact functional form not preserved.
- Units: rating points (dimensionless points), xG (dimensionless expected goals), h=32.317 points, c conversion constant, k adjustment factor, d scaling factor, RMSE 0.346 (dimensionless, probability or expected-goals scale? text says RMSE compared to outcomes decided by expected goals, so likely xG units or probability units - ambiguous).
- Bayesian: P(R|G) = P(G|R)P(R)/P(G)
- Newton's method for MAP: r_{new} = r - f'(r)/f''(r) applied to log posterior.
- Page citations: Since not preserved, I'll cite [Section: Abstract], [Section: Methods], etc., and note machine conversion stripped page numbers.
- Breakdown regimes: disconnected graph, k→∞ divergence, d misspecification, xG=0 for all games (reverts to win/loss), HFA constant when travel >3 hours.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage & multi-week traps.
- Elo (Arpad Elo, chess), single-pass chronological dependency
- Coulom 2008 Whole-History Rating (Bayesian, time-varying strength, International Conference on Computers and Games)
- Bradley-Terry 1952 (or Firth 2005 R implementation), paired comparisons
- Bayes theorem, Newton's method optimization
- Nelder-Mead 1965 downhill simplex
- Multi-week traps: in real soccer over weeks, team strength is NOT constant (injuries, form, fatigue, tactical changes), so static WHR assumption breaks; dynamic home field by timezone; xG doesn't capture elite finishers/goalie form; mid-season managerial changes; fixture congestion.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression vs counter-trap vs clock.
- This section seems to ask about strategic/psychological layer. I need to interpret "crisis habit regression" (teams reverting to habitual patterns under pressure), "counter-trap" (opponent anticipating the regression), "vs clock" (time pressure in knockout vs group stage).
- Group stage: 3 games per team, home field advantage, constant strength assumption means no regression over the fictional season. But in real multi-week, crisis habits emerge.
- Knockout: neutral site, no HFA, single elimination, high pressure -> crisis habit regression more likely.
- Counter-trap: a team might deliberately underperform in xG early to manipulate ratings? Or since ratings are updated continuously, a team could game the xG metric? Actually the model updates all teams, so manipulation is hard but possible via score-state strategy (sitting on lead reduces xG despite winning).
- Clock: group stage has 6 games per group, 42 total; knockout has semifinals/final. Time pressure means limited games for Bayesian posterior to converge; Newton's method needs enough data.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.
- Physical: penalty kick disparity 126:53 (referee bias/home influence), distance traveled correlation with results.
- Biomechanical: xG based on shot distance, angle, player skill; but elite player finishing skill not captured; goalkeeper errors.
- Weather: random factors/deflections, goalkeeper errors, unusual weather; goal differential skewed by luck.
- Veto conditions: if weather/wind affects xG calibration, if pitch dimensions vary, if travel >3 hours invalidates constant HFA, if red cards/injuries change team strength mid-game (not in fictional constant strength).
- "Veto proof" means which factors override the model predictions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning Verifiable Rewards? Or "Reverse Learning Verification Rejection"? In context, likely "Reinforcement Learning Verifiable Rewards" or just scenarios where the model would be vetoed. I'll interpret as three counterfactual scenarios where the model's predictions should be vetoed/rejected, with verifiable conditions and predictions.
1. Scenario: Away team travels >3 time zones. Model uses static HFA h=32.317. Veto: dynamic HFA required. Prediction: home win probability inflated by model; actual home advantage larger than 56.5% baseline.
2. Scenario: Elite goalkeeper in knockout neutral site. xG underestimates save probability. Veto: xG-only rating misprices team strength. Prediction: model underrates team with elite GK; upset probability higher than Bradley-Terry output.
3. Scenario: Game state strategy - team leads 1-0, sits deep, xG drops despite win. Model awards rating based on xG diff and outcome. Veto: rating update penalizes smart game management. Prediction: team's rating declines after a 1-0 win if xG differential is negative, causing false downward rating drift.
Each with verifiable condition and testable prediction.

Word count: Need >= 1000 words total across all sections, with THINK_TRACE alone >=400 words.

Let me check for betting lines: I must NOT mention spreads, totals, moneylines, odds. The paper mentions "win probability" which is fine (it's a probability, not a betting line). I must avoid the word "odds" in betting context? The paper says "rating-to-odds conversion" - I can mention it as it's in the source, but I should not present betting lines. I'll avoid discussing betting markets entirely.

Toy equations: I must not invent fake ratios. I'll write formal equations but clearly label reconstructed forms where the original LaTeX was lost, and specify assumptions.

Let me draft carefully.

Word count estimation: I need to be verbose enough. Let's aim for ~1500-2000 words total.

THINK_TRACE (>=400 words):
I'll write a dense derivation.

Let's start composing.

--- Drafting THINK_TRACE ---

The central mathematical object is a rating vector r ∈ ℝ^N over N=28 teams. For a match between home team i and away team j, the Bradley–Terry win probability is modeled as a logistic transform of the rating differential. Although the paper’s machine-converted text omits the original LaTeX, the prose specifies that p(i defeats j) depends on ratings r_i and r_j, a home-field boost h, a rating-to-odds conversion scale c, and a base b. A consistent formal reading is:

P(i | j, home=i) = 1 / (1 + exp( - (r_i + h − r_j) / c ))  (natural-log form)

or, if base b ≠ e is retained,

P(i | j, home=i) = 1 / (1 + b^{−(r_i + h − r_j)/c}).

The expected probability s_i is compared to the realized outcome e_i ∈ {0, 0.5, 1}. The rating increment for team i is then proportional to (e_i − s_i), modulated by the expected-goals differential ΔxG = xG_i − xG_j through a scaling factor d and a global gain k:

Δr_i = k · (e_i − s_i) · g(ΔxG; d),

where g is the expected-goals weighting function (exact algebraic form not preserved in the machine conversion). Because every match touches two nodes in the competition graph, a single pass leaves ratings path-dependent. The authors demonstrated this by running a classic Elo system forward and backward over the same unordered 476-game NSL dataset, observing rating swings of up to 430 points per team on a 1500 base—a 28.7% perturbation that exposes single-pass sequencing fragility.

The Whole-History Rating (WHR) correction replaces the chronological sweep with a multi-pass graph-propagation operator. After each match, ratings of i and j are adjusted, and the perturbation is recursively recomputed for every prior match involving i or j, and transitively for all opponents connected through shared game history. This makes the estimator invariant to the permutation order of the input list, which is essential because the NSL dataset supplies no timeline and team strength is stipulated constant across the season.

Bayesian inference is layered on top: for each team, the posterior over rating points is

P(R_i = r | G) ∝ P(G | R_i = r) · P(R_i = r),

where the likelihood P(G | r) is assembled from Bradley–Terry probabilities across all matches incident to team i, and the prior is the distribution carried from the previous pass. The maximum-a-posteriori (MAP) rating is located with Newton’s method, iterating r ← r − [∂² log P / ∂r²]⁻¹ [∂ log P / ∂r] until convergence. Once the MAP vector is found, all historical rating updates are recomputed with the new point estimates, and the cycle repeats until all 476 games have been absorbed. The final rating for each team is the mode of its posterior distribution.

Optimization uses Nelder–Mead over five continuous variables: home-field constant h, expected-goals weighting d, rating-to-odds conversion c, base b, and ratings update divisor (the k-scale). The held-out test set comprises 96 games (20% of 476). The optimized solution achieves RMSE = 0.346. Because the target variable is derived from expected goals, the RMSE unit is effectively expected-goals / probability-space error; the authors note the irreducible floor is set by stochastic match events. The home-field constant converges to h = 32.317 rating points. For two 1500-rated teams, this yields a 56.5% home win probability, which the authors treat as the group-stage HFA; it is set to zero for neutral-site knockout matches.

Gray-zone audit. (1) Constant-strength assumption: the fictional NSL freezes team quality, eliminating injuries, form decay, and managerial changes. Real soccer violates this on multi-week horizons, so WHR ratings trained on full history will lag regime shifts. (2) xG incompleteness: expected goals aggregate historical shot-location averages and ignore elite finishing, goalkeeper quality, and score-state tactics (e.g., a leading team suppresses shots, depressing xG despite winning). (3) Static HFA: h = 32.317 is context-free, yet the paper’s own data show away travel time above three hours materially widens the home goal differential. Applying a flat constant to long-haul away games mis-specifies the likelihood. (4) Sparse graph connectivity: if a team’s component in the match graph is weakly linked, the Bayesian posterior remains diffuse and Newton’s method may converge to a local mode dependent on initialization. (5) Outcome discretization: e_i collapses draws to 0.5, discarding margin information that xG partially recovers but not fully.

This completes the multi-hop derivation and gray-zone audit.

--- End THINK_TRACE ---

That's about 500 words. Good.

--- Drafting SOURCE_OPERATORS_AND_EQUATIONS ---

Need formal LaTeX, units, page citations. Since page markers are stripped, I'll cite sections.

Variables:
- r_i, r_j ∈ ℝ: team ratings in rating points (dimensionless points scale, base 1500)
- h ∈ ℝ: home-field advantage constant, optimized h* = 32.317 points
- c > 0: rating-to-odds conversion scale (points per logit unit)
- b > 0, b ≠ 1: exponential base of Bradley–Terry kernel
- s_i ∈ [0,1]: expected win probability for team i
- e_i ∈ {0, 0.5, 1}: realized match outcome (loss/draw/win)
- xG_i, xG_j ∈ ℝ_{≥0}: cumulative expected goals (dimensionless expectation units)
- d ∈ ℝ: expected-goals differential scaling factor
- k ∈ ℝ_{>0}: rating update gain (points per unit probability residual)
- κ ∈ ℝ_{>0}: ratings update divisor (scale for step size)
- RMSE ∈ [0,1]: root mean square error, value 0.346 (units depend on target; paper compares to expected-goals-decided outcomes, so unit is xG-probability hybrid)

Equations:
Bradley-Terry with home advantage:
P(i beats j | i home) = σ((r_i + h − r_j)/c), σ(z)=1/(1+e^{−z})
If base-b form is enforced: P = 1/(1 + b^{−(r_i+h−r_j)/c})

Rating update:
Δr_i = k · (e_i − s_i) · [1 + d · (xG_i − xG_j)]  [reconstructed functional family; exact g(·) not preserved]

Bayesian posterior:
P(r_i | D) = [∏_{m∈M_i} P(y_m | r_i, r_{opp(m)}, h)] · P_0(r_i) / P(D)

Newton MAP update:
r^{(t+1)} = r^{(t)} − H^{-1}(r^{(t)}) ∇ log P(r^{(t)} | D)

Nelder-Mead objective:
min_{θ={h,d,c,b,κ}} RMSE(θ; test set)

Page citations: I'll note [PAGE markers not preserved in machine-converted pdftotext output; citations below refer to section headers in the 7-page source].

Breakdown regimes:
- Graph disconnected component: posterior ∝ prior, ratings unidentifiable.
- k → ∞: update diverges; oscillations around MAP.
- d misspecified: if d=0, xG ignored, model reduces to outcome-only Elo-like; if d too large, xG noise dominates.
- h constant when travel >3 hours: likelihood mis-specified; home win probability understated for long-haul away games.
- xG_i = xG_j = 0: update collapses to (e_i − s_i), pure win/loss/draw, reintroducing luck sensitivity.

--- End SOURCE_OPERATORS_AND_EQUATIONS ---

--- Drafting RETROCAUSAL_GENEALOGY ---

Lineage:
- Arpad Elo (1960s chess): single-pass, chronological, zero-sum rating transfers. The paper replicates Elo’s flaw: forward vs backward passes cause ±430-point swings on a 1500 base.
- Rémi Coulom (2008), “Whole-history rating: A Bayesian rating system for players of time-varying strength,” International Conference on Computers and Games, Springer, pp. 113–124. The paper explicitly adapts Coulom: multi-pass, Bayesian posterior, Newton MAP, order independence. [Reference section of source]
- Bradley & Terry (1952), formalized in Firth (2005), J. Stat. Software 12:1–12: paired-comparison logistic model used for s_i.
- Nelder & Mead (1965), downhill simplex optimization over five parameters.
- Bayes–Newton recursion: posterior recalculation after each game, akin to sequential Bayesian updating but with full-history repropagation.

Multi-week traps:
The fictional NSL stipulates constant team strength across the season. In real soccer across multiple weeks, this assumption fails systematically:
1. Injury accumulation: key player absence changes r_i mid-season; full-history WHR averages pre- and post-injury strength, blurring the current rating.
2. Form and fatigue: congested fixture lists degrade physical performance; static h does not capture travel-induced fatigue beyond three time zones.
3. Managerial turnover: tactical system changes make early-season xG a poor predictor of late-season outcomes.
4. xG staleness: historical shot-average xG does not adapt to a new striker’s finishing talent or a goalkeeper’s hot streak within a season.
5. Dynamic home advantage: the paper’s own Figure 3 (home advantage by AwayHours) shows travel time >3 hours increases home goal differential; a static 32.317-point constant is a poor cross-week prior.

These traps mean a model trained on all 476 games and applied to a future knockout match may be regressing toward a fictional mean that no longer exists.

--- End RETROCAUSAL_GENEALOGY ---

--- Drafting RECURSIVE_THEORY_OF_MIND ---

Crisis habit regression vs counter-trap vs clock:

Crisis habit regression. Under knockout elimination pressure, teams revert to habitual low-variance structures: deep blocks, reduced shot volume, conservative possession. Because xG accumulates from shot quality and quantity, a team that defends a lead accumulates less xG even while securing a win. The WHR update Δr_i ∝ (e_i − s_i)·g(ΔxG) then delivers a positive outcome term but a negative or dampened xG term. Over a multi-week knockout sequence, repeated “win while ceding xG” games can regress a team’s rating downward despite advancing, creating a rating–outcome divergence.

Counter-trap. An opponent that recognizes this regression can set a tactical trap: invite pressure, concede low-xG chances, and strike on transition. If the rating model expects the favored team to generate high xG, the underdog’s neutral-site rating (h=0) may be overstated relative to its actual counter-attacking conversion efficiency. The model’s Bradley–Terry prior s_i assumes the rating differential fully encodes strength, but it does not encode tactical matchup style (counter-attack vs possession). Thus a lower-rated counter-attacking team can exploit a higher-rated possession team’s xG-dependent rating update, producing an upset not captured by the posterior mode.

vs Clock. The group stage supplies 42 games across seven groups (six per group), giving each team three matches. The knockout round supplies only semifinals and a final at neutral sites with h=0. The Bayesian posterior requires sufficient incident matches to concentrate; with only one or two knockout games, the posterior over r_i remains broad, and Newton’s method has limited curvature information. The “clock” is the shrinking sample: as the tournament progresses, fewer games remain to update ratings, so the MAP estimate relies increasingly on the group-stage prior. A team that peaks late (regression to crisis form under elimination pressure) is poorly tracked because the multi-pass algorithm has already converged on full-history modes. In effect, the clock favors teams whose group-stage xG profile stabilizes early and penalizes teams whose true strength emerges only in the knockout window.

--- End RECURSIVE_THEORY_OF_MIND ---

--- Drafting CROSS_LAYER_VETO_ADJUDICATION ---

Physical layer. The source reports home teams awarded penalty kicks at a 126:53 ratio (roughly 2.38:1), and a strong negative correlation between away travel distance and match results. These are physical venue/referee effects that the static h=32.317 constant attempts to summarize as a flat rating boost. If an away team travels across more than three time zones, Figure 3 indicates the home goal differential widens beyond what a constant captures; the model then under-predicts home dominance. Veto condition: if AwayHours > 3 and the venue is not neutral, the static HFA parameter is invalidated.

Biomechanical layer. xG is built from historical averages of shot distance, angle, and player skill. It does not account for elite playmakers who finish above historical averages, nor for elite goalkeepers who save above average. A team with a generative finisher will systematically outperform its xG, and a team with an elite shot-stopper will outperform its xG-against. Because ratings are updated using xG differential, such teams are misrated: their true strength exceeds their WHR rating. Veto condition: if roster contains a finisher or goalkeeper whose observed conversion/save rate deviates from xG priors by more than one standard deviation, the xG-weighted rating update is biomechanically incomplete.

Weather layer. The introduction lists deflections, goalkeeper errors, and unusual weather as random factors that swing goals and outcomes. Goal differential is explicitly criticized for being swayed by these. Although xG reduces shot-level randomness, it cannot condition on wind, precipitation, or temperature unless those variables are inputs to the xG model (not stated). Veto condition: if match-day weather deviates from historical norms used to construct xG (e.g., high wind reducing long-shot accuracy), the xG differential input is biased.

Adjudication hierarchy. When multiple layers conflict, the physical layer (referee penalty bias and travel fatigue) takes precedence because it directly alters the realized outcome e_i independent of team strength. The biomechanical layer (xG vs elite finisher) modifies the interpretation of ΔxG but does not override e_i. The weather layer introduces noise into both e_i and ΔxG. A veto is triggered if any layer’s condition is met and the corresponding parameter (h, d, or the xG calibration) is held fixed. The model is not veto-proof; it is conditionally robust only under constant team strength, neutral or short-travel venues, average elite-player effects, and climatologically typical matches.

--- End CROSS_LAYER_VETO_ADJUDICATION ---

--- Drafting RLVR_COUNTERFACTUAL_VETOES ---

Scenario 1: Long-haul away travel invalidates static home-field constant.
Condition: An away team travels >3 time zones to a home venue (not neutral site). Verifiable via the paper’s Figure 3 (home advantage by AwayHours) and stated correlation between distance and results.
Model behavior: Applies fixed h=32.317 points, implying 56.5% win probability for evenly matched teams.
Veto prediction: The true home win probability exceeds the Bradley–Terry output; the model systematically under-rates the home team’s advantage and over-rates the away team’s win probability in long-haul fixtures. Verification: compare predicted vs actual home win rate for AwayHours > 3 subsets; expect actual home win rate significantly above model probability.

Scenario 2: Elite goalkeeper neutralizes xG-based rating in knockout.
Condition: Knockout match at neutral site (h=0); one team fields a goalkeeper whose observed save percentage exceeds the xG-on-target expectation by >1 SD over the season. Verifiable via match-level xG and shot outcome logs.
Model behavior: Rating updates use xG differential; the elite keeper’s team concedes fewer goals than xG implies, so its rating does not fully reflect its match-winning defensive contribution.
Veto prediction: The model under-rates the elite-goalkeeper team relative to its true neutral-site win probability; an upset or draw occurs at a frequency higher than the posterior mode suggests. Verification: track teams with save-performers above xG; their actual win rate in neutral-site knockouts exceeds model-predicted win probability.

Scenario 3: Game-state xG suppression causes false rating regression after a 1–0 win.
Condition: Team takes a 1–0 lead, then sits deep, suppressing its own xG while conceding more xG to the opponent, yet holds on for a win. Verifiable via in-game xG time series and final score.
Model behavior: e_i = 1 (win), but ΔxG = xG_i − xG_j < 0; the update Δr_i = k·(1 − s_i)·g(negative ΔxG) is attenuated or negative depending on g(·).
Veto prediction: The team’s WHR rating declines or stagnates despite winning, causing a false downward drift. Over a multi-week group stage, repeated 1–0 defensive wins depress ratings of structurally strong but conservative teams. Verification: identify teams with win–xG differential mismatches (wins while trailing in cumulative xG); their ratings should trend downward relative to teams with aligned win–xG profiles, even when future results validate their strength.

--- End RLVR_COUNTERFACTUAL_VETOES ---

Now I need to check word count and make sure I haven't violated any invariants.

Betting lines check: I mentioned "win probability" and "56.5% win probability" but no spreads/totals/moneylines/odds as betting lines. The source uses "rating-to-odds conversion" which I mentioned as a variable name, but not as a betting line. Should be okay. I should avoid the word "odds" in a betting context. I'll keep it as technical term from paper.

Toy equations check: I wrote formal equations. I noted exact forms not preserved. I did not invent fake ratios like Force/Fatigue. Good.

Page citations: I noted markers not preserved. Good.

Word count: Let me estimate. THINK_TRACE ~500. SOURCE ~350. RETRO ~300. RECURSIVE ~350. CROSS ~350. RLVR ~300. Total ~2150. Should exceed 1000.

I should ensure THINK_TRACE >= 400 words. It looks like it.

One thing: the user said "PAGES: 7". I should not invent page numbers. I'll explicitly state that page numbers were stripped.

Also, I need to make sure the XML tags are exact.

Let me refine the equations to be more careful. The paper says "c is the optimal rating-to-odds conversion" and "b is the base". So maybe:

P = b^{(r_i + h - r_j)/c} / (1 + b^{(r_i + h - r_j)/c})

which equals 1 / (1 + b^{-(r_i+h-r_j)/c}). I'll present both forms.

Also the rating update: "Rating points were then adjusted using the equation below. This equation incorporates: 1. si ... 2. ei ... 3. (xG1 - xG2) ... 4. d ... 5. k ..."

I'll write:

Δr_i = k · (e_i − s_i) · (1 + d · (xG_i − xG_j))

but flag as reconstructed.

Actually, to be safe about not inventing, I'll say "the precise algebraic composition of g(·) was not preserved in the machine conversion, but the described dependencies imply a form of the type..."

Let's write the final output.

I need to be careful that total words >= 1000. Let me write generously.

Also avoid mentioning "betting" anywhere.

Final check on XML structure order:
1. THINK_TRACE
2. SOURCE_OPERATORS_AND_EQUATIONS
3. RETROCAUSAL_GENEALOGY
4. RECURSIVE_THEORY_OF_MIND
5. CROSS_LAYER_VETO_ADJUDICATION
6. RLVR_COUNTERFACTUAL_VETOES

Looks good. I will now produce the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The central object is a rating vector r ∈ ℝ^N over N = 28 teams in the fictional North American Soccer League (NSL). For a match between home team i and away team j, the Bradley–Terry win probability is modeled as a logistic transform of the rating differential. Although the machine-converted source omits the original LaTeX, the prose specifies that p(i defeats j) depends on ratings r_i and r_j, a home-field boost h, a rating-to-odds conversion scale c, and a base b. A consistent formal reading is:

P(i beats j | i home) = 1 / (1 + exp(−(r_i + h − r_j)/c))

or, retaining base b ≠ e,

P(i beats j | i home) = 1 / (1 + b^{−(r_i + h − r_j)/c}).

The expected probability s_i is compared to the realized outcome e_i ∈ {0, 0.5, 1}, where 0 is a loss, 0.5 a draw, and 1 a win. The rating increment for team i is then proportional to (e_i − s_i), modulated by the expected-goals differential ΔxG = xG_i − xG_j through a scaling factor d and a global gain k:

Δr_i = k · (e_i − s_i) · g(ΔxG; d)

where g(·) is the expected-goals weighting function (exact algebraic form not preserved in the machine conversion). Because every match touches two nodes in the competition graph, a single chronological pass leaves ratings path-dependent. The authors demonstrated this by running a classic Elo system forward and backward over the same unordered 476-game NSL dataset, observing rating swings of up to 430 points per team on a 1500 base—a 28.7% perturbation that exposes single-pass sequencing fragility.

The Whole-History Rating (WHR) correction replaces the chronological sweep with a multi-pass graph-propagation operator. After each match, ratings of i and j are adjusted, and the perturbation is recursively recomputed for every prior match involving i or j, and transitively for all opponents connected through shared game history. This makes the estimator invariant to the permutation order of the input list, which is essential because the NSL dataset supplies no timeline and team strength is stipulated constant across the season.

Bayesian inference is layered on top: for each team, the posterior over rating points is

P(R_i = r | G) ∝ P(G | R_i = r) · P(R_i = r),

where the likelihood P(G | r) is assembled from Bradley–Terry probabilities across all matches incident to team i, and the prior is the distribution carried from the previous pass. The maximum-a-posteriori (MAP) rating is located with Newton’s method, iterating r ← r − [∂² log P / ∂r²]⁻¹ [∂ log P / ∂r] until convergence. Once the MAP vector is found, all historical rating updates are recomputed with the new point estimates, and the cycle repeats until all 476 games have been absorbed. The final rating for each team is the mode of its posterior distribution.

Optimization uses Nelder–Mead over five continuous variables: home-field constant h, expected-goals weighting d, rating-to-odds conversion c, base b, and ratings update divisor (the k-scale). The held-out test set comprises 96 games (20% of 476). The optimized solution achieves RMSE = 0.346. Because the target variable is derived from expected goals, the RMSE unit is effectively expected-goals / probability-space error; the authors note the irreducible floor is set by stochastic match events. The home-field constant converges to h = 32.317 rating points. For two 1500-rated teams, this yields a 56.5% home win probability, which the authors treat as the group-stage home-field advantage; it is set to zero for neutral-site knockout matches.

Gray-zone audit. (1) Constant-strength assumption: the fictional NSL freezes team quality, eliminating injuries, form decay, and managerial changes. Real soccer violates this on multi-week horizons, so WHR ratings trained on full history will lag regime shifts. (2) xG incompleteness: expected goals aggregate historical shot-location averages and ignore elite finishing, goalkeeper quality, and score-state tactics (e.g., a leading team suppresses shots, depressing xG despite winning). (3) Static HFA: h = 32.317 is context-free, yet the paper’s own data show away travel time above three hours materially widens the home goal differential. Applying a flat constant to long-haul away games mis-specifies the likelihood. (4) Sparse graph connectivity: if a team’s component in the match graph is weakly linked, the Bayesian posterior remains diffuse and Newton’s method may converge to a local mode dependent on initialization. (5) Outcome discretization: e_i collapses draws to 0.5, discarding margin information that xG partially recovers but not fully.

This completes the multi-hop derivation and gray-zone audit.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal notation, units, and page-citation protocol.

Note on pagination: The provided source is a machine conversion via pdftotext + scripted reflow; explicit [PAGE N] markers, equations, tables, and figures were not preserved. Citations below therefore refer to section headers in the 7-page source rather than invented page numbers.

Variables and units:
- r_i, r_j ∈ ℝ: team ratings in rating points (dimensionless points scale, initialized at 1500 points).
- h ∈ ℝ: home-field advantage constant in rating points; optimized h* = 32.317 points.
- c > 0: rating-to-probability conversion scale (points per logit unit).
- b > 0, b ≠ 1: exponential base of the Bradley–Terry kernel.
- s_i ∈ [0, 1]: expected win probability for team i (dimensionless probability).
- e_i ∈ {0, 0.5, 1}: realized match outcome (loss / draw / win; dimensionless).
- xG_i, xG_j ∈ ℝ_{≥0}: cumulative expected goals (dimensionless expectation units).
- d ∈ ℝ: expected-goals differential scaling factor.
- k ∈ ℝ_{>0}: rating update gain (points per unit probability residual).
- κ ∈ ℝ_{>0}: ratings update divisor (step-size scale).
- RMSE ∈ [0, 1]: root mean square error; reported value 0.346. The paper compares predictions to actual outcomes decided by expected goals, so the RMSE unit is an xG-probability hybrid error scale, not a currency or betting line.

Equations (reconstructed from prose; original LaTeX not preserved):
Bradley–Terry with home advantage:
P(i beats j | i home) = σ((r_i + h − r_j)/c), σ(z) = 1/(1 + e^{−z})
Base-b equivalent:
P(i beats j | i home) = 1 / (1 + b^{−(r_i + h − r_j)/c})

Rating point allocation (dependency structure):
Δr_i = k · (e_i − s_i) · g(xG_i − xG_j; d)
where g(·) monotonically weights the update by expected-goals differential; exact composition unavailable in converted text.

Bayesian posterior over team rating:
P(r_i | D) = [∏_{m ∈ M_i} P(y_m | r_i, r_{opp(m)}, h)] · P_0(r_i) / P(D)
where D is the full set of 476 games and M_i is the set of matches incident to team i.

Newton MAP update:
r^{(t+1)} = r^{(t)} − H^{-1}(r^{(t)}) ∇_r log P(r^{(t)} | D)

Nelder–Mead objective:
min_{θ = {h, d, c, b, κ}} RMSE(θ; test set)

Breakdown and singularity regimes:
1. Disconnected graph component: if a team has no path of opponents linking it to the rest of the league, P(r_i | D) ∝ P_0(r_i); ratings are unidentifiable and collapse to the prior/base 1500.
2. k → ∞ or κ → 0: the update step diverges; ratings oscillate around the MAP instead of converging.
3. d = 0: expected goals are ignored; the model reduces to an outcome-only (win/draw/loss) system, reintroducing sensitivity to deflections, goalkeeper errors, and luck.
4. h fixed at 32.317 when away travel exceeds three hours: the likelihood is mis-specified; the paper’s Figure 3 (home advantage by AwayHours) shows larger time-zone differences widen the home goal differential, so the flat constant understates true home advantage in long-haul fixtures.
5. xG_i = xG_j = 0: the update collapses to Δr_i ∝ (e_i − s_i), a pure result-based system with no performance-margin smoothing.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage runs from Arpad Elo’s mid-20th-century chess rating system through Rémi Coulom’s Whole-History Rating to the present NSL application. Elo’s canonical system is single-pass and chronological: ratings adjust after each match in sequence, so later games receive more weight and the final vector depends on the order of inputs. The authors replicate this flaw explicitly by processing the NSL dataset in forward and backward numerical order on a 1500-point base, observing swings of up to 430 rating points per team. That 28.7% perturbation is the motivating pathology.

Coulom (2008), “Whole-history rating: A Bayesian rating system for players of time-varying strength,” International Conference on Computers and Games (Springer, pp. 113–124), supplies the direct theoretical ancestor. The paper adopts Coulom’s core ideas: multi-pass iterative adjustment, Bayesian inference over rating distributions, and Newton’s-method MAP estimation. The Bradley–Terry paired-comparison kernel (Bradley & Terry, 1952; practical R formulation in Firth, 2005, Journal of Statistical Software 12:1–12) provides the win-probability operator s_i. Nelder–Mead downhill simplex optimization (1965) tunes the five continuous parameters against the held-out 96-game test set.

Multi-week traps arise because the fictional NSL stipulates constant team strength across the season. In real soccer across multiple weeks, this assumption fails systematically: (1) injury accumulation changes effective team quality mid-season, but full-history WHR averages pre- and post-injury strength into a blurred rating; (2) fixture congestion and fatigue degrade physical performance, and the static h does not capture travel-induced decay beyond three time zones; (3) managerial turnover alters tactical systems, making early-season xG a poor predictor of late-season outcomes; (4) xG staleness means historical shot averages do not adapt to a new striker’s finishing or a goalkeeper’s hot streak within a season; (5) dynamic home advantage—documented in the paper’s own Figure 3 via AwayHours—implies the flat 32.317-point constant is a poor cross-week prior for long-distance away matches. Consequently, a model trained on all 476 games and applied to a future knockout match regresses toward a fictional mean that may no longer exist.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap, and clock pressure form a recursive theory-of-mind layer above the rating mathematics.

Crisis habit regression. Under knockout elimination pressure, teams revert to habitual low-variance structures: deep defensive blocks, reduced shot volume, and conservative possession. Because xG accumulates from shot quality and quantity, a team defending a lead accumulates less xG even while securing a win. The WHR update Δr_i = k · (e_i − s_i) · g(ΔxG) then delivers a positive outcome term (e_i = 1) but a negative or dampened xG term (ΔxG < 0). Over a multi-week knockout sequence, repeated “win while ceding xG” games regress a team’s rating downward despite advancing, creating a rating–outcome divergence where the model’s posterior mode contradicts the tournament bracket reality.

Counter-trap. An opposing coach who recognizes this regression can set a tactical trap: invite pressure, concede low-xG chances, and strike on transition. Under neutral-site knockout conditions h = 0, the Bradley–Terry prior s_i assumes the rating differential fully encodes strength, but it does not encode tactical matchup style (counter-attack versus possession). A lower-rated counter-attacking team can therefore exploit a higher-rated possession team whose rating was built on xG generation. The model’s posterior does not contain a style-interaction term, so an upset produced by tactical mismatch is not captured by the rating distribution.

vs Clock. The group stage supplies 42 games across seven groups of four (three games per team), giving the Bayesian posterior sufficient incident matches to concentrate. The knockout round supplies only semifinals and a final at neutral sites with h = 0. As the tournament progresses, fewer games remain to update ratings; the MAP estimate relies increasingly on the group-stage prior. The “clock” is the shrinking sample: late-emerging strength under elimination pressure is poorly tracked because the multi-pass algorithm has already converged on full-history modes. Teams whose true quality surfaces only in the knockout window are systematically mispriced by a model whose most probable ratings were fixed by earlier, lower-stakes xG profiles.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. The source reports home teams awarded penalty kicks at a disproportionate ratio of 126:53, and a strong negative correlation between distance traveled and match results. These are venue and officiating effects that the static h = 32.317 constant attempts to summarize as a flat rating boost. If an away team travels across more than three time zones, the paper’s Figure 3 indicates the home goal differential widens beyond what a constant captures; the model then under-predicts home dominance. Veto condition: if AwayHours > 3 and the venue is not neutral, the static home-field parameter is invalidated.

Biomechanical layer. xG is built from historical averages of shot distance, angle, and player skill. It does not account for elite finishers who convert above historical averages, nor for elite goalkeepers who save above average. Because ratings are updated using xG differential, such teams are misrated: their true strength exceeds their WHR rating. Veto condition: if a roster contains a finisher or goalkeeper whose observed conversion/save rate deviates from xG priors by more than one standard deviation, the xG-weighted rating update is biomechanically incomplete.

Weather layer. The introduction lists deflections, goalkeeper errors, and unusual weather as random factors that swing goals and outcomes. Although xG reduces shot-level randomness, it cannot condition on wind, precipitation, or temperature unless those variables are inputs to the xG model (not stated in the source). Veto condition: if match-day weather deviates from historical norms used to construct xG (e.g., high wind reducing long-shot accuracy), the xG differential input is biased.

Adjudication hierarchy. When layers conflict, the physical layer (referee penalty bias and travel fatigue) takes precedence because it directly alters the realized outcome e_i independent of team strength. The biomechanical layer modifies the interpretation of ΔxG but does not override e_i. The weather layer introduces noise into both e_i and ΔxG. A veto is triggered if any layer’s condition is met and the corresponding parameter (h, d, or xG calibration) is held fixed. The model is conditionally robust only under constant team strength, neutral or short-travel venues, average elite-player effects, and climatologically typical matches.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Long-haul away travel invalidates the static home-field constant.
Condition: An away team travels >3 time zones to a home venue (not neutral site). Verifiable via the paper’s Figure 3 (home advantage by AwayHours) and the stated correlation between distance and results.
Model behavior: Applies fixed h = 32.317 points, implying 56.5% win probability for evenly matched teams.
Veto prediction: The true home win probability exceeds the Bradley–Terry output; the model systematically under-rates the home team’s advantage and over-rates the away team’s win probability in long-haul fixtures. Verification: compare predicted vs actual home win rate for the AwayHours > 3 subset; expect actual home win rate significantly above model probability.

Scenario 2: Elite goalkeeper neutralizes xG-based rating in neutral-site knockout.
Condition: Knockout match at neutral site (h = 0); one team fields a goalkeeper whose observed save percentage exceeds the xG-on-target expectation by >1 SD over the season. Verifiable via match-level xG and shot-outcome logs.
Model behavior: Rating updates use xG differential; the elite keeper’s team concedes fewer goals than xG implies, so its rating does not fully reflect its match-winning defensive contribution.
Veto prediction: The model under-rates the elite-goalkeeper team relative to its true neutral-site win probability; an upset or draw occurs at a frequency higher than the posterior mode suggests. Verification: track teams with save performances above xG; their actual win rate in neutral-site knockouts exceeds model-predicted win probability.

Scenario 3: Game-state xG suppression causes false rating regression after a 1–0 win.
Condition: Team takes a 1–0 lead, then sits deep, suppressing its own xG while conceding more xG to the opponent, yet holds on for a win. Verifiable via in-game xG time series and final score.
Model behavior: e_i = 1 (win), but ΔxG = xG_i − xG_j < 0; the update Δr_i = k · (1 − s_i) · g(negative ΔxG) is attenuated or negative depending on g(·).
Veto prediction: The team’s WHR rating declines or stagnates despite winning, causing false downward drift. Over a multi-week group stage, repeated 1–0 defensive wins depress ratings of structurally strong but conservative teams. Verification: identify teams with win–xG differential mismatches (wins while trailing in cumulative xG); their ratings should trend downward relative to teams with aligned win–xG profiles, even when future results validate their strength.
</RLVR_COUNTERFACTUAL_VETOES>