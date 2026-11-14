---
source: "Measuring Spatial Allocative Efficiency in Basketball.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 28
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4463
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source paper "Measuring Spatial Allocative Efficiency in Basketball" by Sandholtz, Mortensen, and Bornn. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No fake ratios. Formal LaTeX. Page citations [PAGE N]. Verbatim quotes where possible from source text.

Let me plan the content.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit. Need to derive LPL formalism, discuss rank correspondence, permutation test, regression theta. Gray zones: lineup independence assumption, usage-curve omission, defensive pressure omission, shot clock omission, CAR prior shrinkage bias, empirical sparse regions, rank-based vs magnitude-based tradeoff, permutation test null hypothesis framing, predictive vs diagnostic distinction.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations from the paper with units and page citations.
- Eq (1): logit pi_j(s) = beta' x + Z_j(s) [PAGE 5]
- Z_j(s) = w_j' Lambda Psi(s) [PAGE 5]
- w_j ~ N(omega_j, Sigma_j) [PAGE 5]
- NMF factorization P ~ Lambda ... [PAGE 6]
- CAR prior [PAGE 7]
- log lambda(s) = beta0 + Z(s) [PAGE 8]
- Rank definitions R^xi_ij [PAGE 10]
- LPL_i = sum_j [xi_ij * (A*_{ij} - A_ij) * v_i] ... actually from paper: LPL_i = sum_j xi_ij v_i (A*_{ij} - A_ij)? Need to check. The paper says LPL_i = sum_j xi_ij v_i (g(...) - A_ij) or similar. Looking at text: "we calculate LPL in the ith cell as" followed by equation image not transcribed. But later: "Actual points: ... Optimal points ... LPL = difference". I can formulate: LPL_i = v_i sum_{j=1}^5 xi_ij (A*_{ij} - A_ij). Units: points per 36 minutes? Actually per cell per 36 minutes? LPL per 36 minutes. LPL^Shot_i = LPL_i / sum_j A_ij.
- Permutation test statistic T = sum_i LPL_i(obs) - sum_i LPL_i(random) ... p-value proportion <0 [PAGE 16].
- Game score model: y_abg ~ N(mu + alpha_a + beta_b + gamma + theta*TGLPL_abg, sigma^2) [PAGE 18]. theta posterior mean -0.62, 95% HPD (-1.08, -0.17).
- PLC definition [PAGE 14].
- Assumptions breakdown: FG% lineup independent [PAGE 7], usage-curve independence assumption [PAGE 14], CAR prior neighbors = 5 [PAGE 7], grid M=2350 cells 1ft x 1ft [PAGE 7], D=16 basis functions [PAGE 6], LGCP FGA no uncertainty [PAGE 8], replacement players <5 shots [PAGE 6].

RETROCAUSAL_GENEALOGY: Historical lineage: Goldman & Rao 2011 allocative efficiency dynamic mixed-strategy equilibrium [PAGE 3], Oliver 2004 usage-curve/skill-curve [PAGE 14], Cervone et al. 2016 shot satisfaction & spatial model [PAGE 3-5], Miller et al. 2014 NMF basis functions [PAGE 6], Dixon & Coles 1997 football score model analogy [PAGE 17], Sandholtz & Bornn 2020 MDPs dynamic transition probabilities [PAGE 22]. Multi-week traps: Utah Jazz Favors case study over 2013-14 to 2016-17 then 2017-18 to 2018-19 [PAGE 20-21], usage-curve adaptation over seasons, shot policy changes take years, LPL could expedite but contextual variables missing. Simpson's paradox Figure 1 [PAGE 2-3].

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Westbrook 43 shots example [PAGE 1], crisis habit regression: under pressure, lineups regress to high-usage isolation (Westbrook), counter-trap: defense forces shots into inefficient regions, clock: shot clock / game clock constraints not modeled [PAGE 14, 21-22]. PLC positive = undershooting, negative = overshooting [PAGE 14]. OKC Westbrook corner 3 example [PAGE 21]: drive-and-kick creation not captured, strictly minimizing LPL attenuates firepower. Predictability trap [PAGE 21].

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since basketball is indoor controlled environment, weather veto is null/empty set, but physical/biomechanical vetoes: usage-curve (fatigue/skill degradation with volume), shot creation/gravity (Westbrook drive draws defense), defensive pressure not in public data [PAGE 14, 21], player FG% lineup independence assumption violated by gravity [PAGE 7], CAR prior shrinkage toward neighbors can inflate centers' 3pt FG% [PAGE 7], empirical sparse data noise [PAGE 23]. No weather because indoor arena; climate control means no exogenous weather layer. However travel/back-to-back could be fatigue but not in model.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR likely Reinforcement Learning from Verifiable Rewards? Or some framework. Need 3 scenarios where LPL recommendation is vetoed, with counterfactual predictions.
1. OKC Westbrook corner 3 [PAGE 21]: LPL says Westbrook undershooting corner 3; veto because shots created by drive-and-kick, he can't be in two places. Prediction: reallocating corner 3s to Westbrook reduces drive-and-kick opportunities, net offensive efficiency drops despite LPL decrease.
2. Utah Jazz Favors mid-range [PAGE 20-21]: LPL/PLC flags Favors overshooting mid-range; intervention to stretch four to 3pt. Prediction: Favors 3pt PPS 0.66 < mid-range 0.76, intervention decreases expected points; LPL decrease does not equal actual point gain (theta = -0.62 mapping).
3. Sparse empirical region Love/Thompson right midrange [PAGE 23]: Love 8/26, Thompson 4/6, empirical LPL suggests Thompson better; small-sample noise + CAR prior anchors near 20%. Prediction: empirical LPL recommendation to give Thompson more shots reverses with more data; high variance, veto due to sample-size singularity.

Need predictions for each.

Word count >=1000 across sections. Each section must be substantial. THINK_TRACE >=400 words alone. Total will be well over 1000.

Must not mention betting lines. No spreads/totals/moneylines/odds. The paper mentions p-values, but those aren't betting odds. I should avoid "odds" word entirely to be safe? The invariant says never mention spreads, totals, moneylines, or odds. So avoid the word "odds" completely. Use probability, p-value, posterior, etc. But careful not to say "odds".

Citations: [PAGE N] exact. Since the source text has page numbers embedded (1, 2, ... 28). I will cite [PAGE 1], [PAGE 3], etc.

Need verbatim quotes where possible. I'll include short verbatim quotes from source.

Let's draft carefully.

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

No intro outside these sections? The user asked for >=1000-word depth across these exact XML sections. So output should be just these sections, no extra text. That's fine.

Let's ensure THINK_TRACE >=400 words. I'll write maybe 600-700 words there.

Total will be >2000 words likely.

Let's write.

Important: LaTeX formatting. Use $$ or \( \). Since it's text, I can use LaTeX inline.

Page citations: The source text shows page numbers at bottom/top. I'll reference [PAGE 5] for eq (1), [PAGE 6] for NMF, [PAGE 7] for CAR and lineup independence, [PAGE 8] for FGA LGCP, [PAGE 10] for ranks, [PAGE 12] for Figure 7 toy LPL, [PAGE 14] for PLC and usage curve, [PAGE 16] for permutation test, [PAGE 17-18] for regression theta, [PAGE 20-21] for Favors and OKC, [PAGE 22] for conclusion/Sandholtz & Bornn 2020, [PAGE 23] for empirical appendix sparse data, [PAGE 1] for Westbrook intro, [PAGE 2-3] for Figure 1 Simpson's paradox, [PAGE 3] for Goldman & Rao.

Let's compose.

Need to ensure no toy equations. All equations must be formal from source or clearly derived from source with assumptions stated. I won't invent Force/Fatigue ratios.

Let's write THINK_TRACE first.

THINK_TRACE content:
- Multi-hop derivation: from shot-level Bernoulli outcomes to logit FG% surface via Gaussian process basis expansion; from spatial point process to FGA intensity; ranking players within lineup per cell; optimal permutation g(·); LPL as expectation difference; permutation test null vs alternative; regression mapping LPL to actual points via theta.
- Gray-zone audit: (1) lineup independence assumption violated by defensive gravity; (2) usage-curve omitted causing volume-efficiency endogeneity; (3) CAR prior shrinkage biases low-volume players/neighborhoods (centers 3pt inflation); (4) empirical histogram small-sample noise in appendix; (5) permutation test null is random allocation, not defensive maximization, though framed as offense vs defense; (6) theta estimate is average treatment effect, not 1-to-1; (7) shot clock/defensive pressure absent; (8) predictability/game-theoretic counter-response. Mention verbatim quotes.

Let's write SOURCE_OPERATORS_AND_EQUATIONS with equations and citations.

RETROCAUSAL_GENEALOGY: lineage from Goldman & Rao 2011, Oliver 2004, Cervone 2016, Miller 2014, Dixon & Coles 1997, Sandholtz & Bornn 2020. Multi-week traps: Jazz Favors 2013-14 to 2019, six-year process, could have been expedited with LPL/PLC but contextual blind spots. Simpson's paradox spatial disaggregation.

RECURSIVE_THEORY_OF_MIND: crisis habit regression (Westbrook 43 shots, 45.5% usage in elimination games), counter-trap (defense forces inefficient shot distribution), clock (shot clock/game clock missing, endgame). PLC sign interpretation. OKC corner 3 drive-and-kick.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical: usage curve, shot creation, gravity, fatigue (not modeled). Weather: null set, indoor arena, climate control; no exogenous weather layer. Veto conditions: when marginal shot creation value exceeds allocative gain; when sample size below threshold; when usage-curve elasticity dominates.

RLVR_COUNTERFACTUAL_VETOES: three scenarios with predictions. Use verifiable language.

Let's ensure each section is clearly labeled.

I will not use the word "odds". Use "probability" or "p-value".

Let's start writing.

Check for any accidental betting terms: "spread", "total", "moneyline", "odds". Avoid all.

Now produce final.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain begins at the shot level. Each shot attempt is a Bernoulli trial with success probability π_j(**s**) for player j at court location **s** ∈ offensive half-court. Because shooting skill is spatially irregular and nonlinear, the authors model logit π_j(**s**) = **β′x** + Z_j(**s**) [PAGE 5], where **x** contains intercept, player position, shot distance, and their interaction, and Z_j(**s**) is a player-specific Gaussian process represented through a low-dimensional basis expansion Z_j(**s**) = **w_j′ΛΨ(s)** [PAGE 5]. The basis matrix **Λ** is derived via non-negative matrix factorization of a player shot-intensity matrix **P**, using D = 16 basis functions [PAGE 6]. This is a dimensionality-reduction hop: raw (x,y) shot coordinates are projected onto a triangular mesh with K vertices, then factorized into interpretable spatial bases (Under Hoop, Hoop Front, Corner 3, etc.) [PAGE 6].

The second hop is from estimated FG% surfaces to lineup-level allocative rankings. In any 1 ft × 1 ft cell i (M = 2350 cells total) [PAGE 7], the five players are ranked by posterior FG% and by deterministic FGA rate. The rank transformation R^ξ_ij maps the FG% vector **ξ_i** to the discrete support {1,…,5}; R^A_ij does the same for FGA rates [PAGE 10]. The rank-correspondence surface **R^A − R̂^ξ** identifies where actual shot-taking violates skill ordering: negative values imply the worst shooter is over-used relative to teammates, positive values imply under-use of the best shooter [PAGE 11].

The third hop compresses rank deviations into magnitude-aware expected points. LPL_i = v_i ∑_{j=1}^5 ξ_ij (A*_{ij} − A_ij), where v_i ∈ {2,3} is shot value, A is observed FGA rate per 36 minutes, and A* is a permutation of A that enforces perfect rank correspondence [PAGE 12, inferred from Figure 7 and surrounding text]. The permutation constraint ensures ∑_j A*_ij = ∑_j A_ij, so no player can be allocated every shot unless they already took them all [PAGE 13]. LPL is therefore a counterfactual expectation in points per 36 minutes, not an observed score differential.

The fourth hop validates whether offenses actually minimize LPL. A permutation test compares observed total LPL against total LPL under random reallocation of each cell’s shot vector [PAGE 16]. The test statistic T = ∑_i LPL_i(observed) − ∑_i LPL_i(random) is simulated 500 times; the one-sided p-value is the proportion of variates below zero [PAGE 16]. For Cleveland’s 2016–17 starters, p = 0.002 [PAGE 16]. Across 30 starting lineups, only Golden State and Portland had p = 0.000; Sacramento had p = 0.442 [PAGE 17, Table 1].

The fifth hop connects LPL to actual game scoring. A Bayesian regression of team game score on total game LPL (TGLPL), with offensive/defensive strength and home-court covariates, yields posterior mean θ = −0.62 with 95% HPD (−1.08, −0.17) [PAGE 18]. Thus one lineup point lost maps to roughly 0.62 actual points lost, not one-for-one [PAGE 18].

Gray-zone audit. (1) Lineup independence: the authors explicitly assume player FG%s are lineup independent, acknowledging defensive gravity can elevate teammates’ efficiency [PAGE 7]. This is violated whenever shot creation (e.g., Westbrook drives) generates open kicks that LPL treats as independent shooting opportunities [PAGE 21]. (2) Usage-curve endogeneity: LPL holds each player’s FG% fixed while redistributing volume, implicitly assuming FG% is independent of FGA rate; the authors concede this is generally false in basketball analytics [PAGE 14]. (3) CAR prior shrinkage: basis weights **w_j** are regularized toward five nearest neighbors by shooting similarity, which stabilizes low-volume estimates but can inflate entire neighborhoods toward global means, notably centers’ long-range FG% [PAGE 7]. (4) Empirical sparsity: the appendix’s histogram implementation anchors every region with one made and five missed shots, driving low-volume players toward 20% FG% and producing spurious rank reversals (Love vs. Thompson right midrange) [PAGE 23]. (5) Permutation null mismatch: the null is complete random allocation, not defensive maximization, though the paper frames offense versus defense [PAGE 16]. (6) Omitted context: shot clock and defensive pressure are unavailable in public data, so LPL is diagnostic, not prescriptive [PAGE 14, 21]. (7) Predictability trap: rigid LPL minimization can make offenses easier to defend [PAGE 21]. These gray zones define the exact breakdown regimes where LPL recommendations must be vetoed rather than executed.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and assumptions with page citations.

(1) Player FG% surface. For player j at location **s**, let π_j(**s**) be make probability. The model is
\[
\text{logit}(\pi_j(\mathbf{s})) = \boldsymbol{\beta}'\mathbf{x} + Z_j(\mathbf{s}), \qquad Z_j(\mathbf{s}) = \mathbf{w}_j'\boldsymbol{\Lambda}\boldsymbol{\Psi}(\mathbf{s}),
\]
with **β** a 4 × 1 covariate vector (intercept, position, distance, position × distance), **w_j** = (w_{j1},…,w_{jD})′ latent basis weights, **Λ** a D × K projection onto a triangular mesh with K vertices, and **Ψ(s)** linear-interpolation basis functions [PAGE 5]. Prior: **w_j** ∼ N(**ω_j**, **Σ_j**) [PAGE 5].

(2) Basis construction via NMF. Player made-shot point processes are fit as independent log-Gaussian Cox processes, evaluated at mesh vertices, exponentiated, and assembled into an L × K matrix **P** (L = 433 players). Non-negative matrix factorization yields deterministic bases **Λ** with D = 16 [PAGE 6].

(3) Conditional autoregressive prior. To borrow strength across similar shooters, a CAR prior is placed on **w_j**. Player adjacency **H** is built from the five nearest neighbors in NMF loading space **B**, symmetrized so some players exceed five neighbors [PAGE 7].

(4) FGA rate surface. Shot attempts are modeled as a Poisson intensity
\[
\log \lambda(\mathbf{s}) = \beta_0 + Z(\mathbf{s}), \qquad Z(\mathbf{s}) = \sum_{b=1}^{B} z_b \phi_b(\mathbf{s}),
\]
fit separately per player with INLA, then scaled to observed shot counts and normalized to FGA per 36 minutes [PAGE 8]. No uncertainty is propagated in the FGA surface; it is treated as a deterministic smoother of observed choices [PAGE 8].

(5) Spatial ranks. For cell i with lineup FG% vector **ξ_i**, the discrete rank of player j is
\[
R^\xi_{ij} = k \quad \text{such that} \quad \xi_{ij} = \xi_i^{(k)},
\]
where ξ_i^{(k)} is the k-th order statistic; because ξ is posterior, R^ξ is distributional over {1,…,5} [PAGE 10]. FGA ranks R^A are deterministic [PAGE 10]. Rank correspondence is R^A − R̂^ξ, ranging from −4 to +4 [PAGE 11].

(6) Lineup Points Lost. In cell i, the optimal reallocation A*_i = g(R^ξ_i) permutes observed attempts so the highest-FG% player receives the most shots, and so on [PAGE 12]. LPL is
\[
\text{LPL}_i = v_i \sum_{j=1}^{5} \xi_{ij} (A^*_{ij} - A_{ij}),
\]
units: expected points per 36 minutes per cell [PAGE 12–13]. Per-shot normalization is LPL^Shot_i = LPL_i / ∑_j A_ij [PAGE 13]. Constraint: ∑_j A*_{ij} = ∑_j A_ij for all i [PAGE 13].

(7) Player LPL Contribution. Player j’s contribution in cell i apportions LPL_i proportional to individual deviation, with PLC_ij > 0 indicating undershooting and PLC_ij < 0 overshooting [PAGE 14].

(8) Permutation test. Statistic
\[
T = \sum_{i=1}^{M} \text{LPL}_i(\text{observed}) - \sum_{i=1}^{M} \text{LPL}_i(\text{random permutation}),
\]
with 500 simulated variates; p-value = proportion of T < 0 [PAGE 16].

(9) Game-level scoring regression. For team a vs opponent b in game g,
\[
y_{abg} \sim \mathcal{N}(\mu + \alpha_a + \beta_b + \gamma + \theta \cdot \text{TGLPL}_{abg},\ \sigma^2),
\]
with priors μ ∼ N(100, 10²), α,β,γ,θ ∼ N(0, 10²), σ ∼ Gamma(2, 0.2) [PAGE 18]. Posterior mean θ̂ = −0.62, 95% HPD (−1.08, −0.17) [PAGE 18]. Units: actual points per lineup point lost.

Assumptions and singularity/breakdown regimes: (i) FG% lineup independence [PAGE 7]; violated under defensive gravity/shot creation [PAGE 21]. (ii) FG% independent of usage volume [PAGE 14]; breaks when usage-curve elasticity is large. (iii) CAR neighborhood = five nearest shooters [PAGE 7]; breaks when neighborhoods are spatially sparse or globally similar (e.g., centers’ 3-point inflation) [PAGE 7]. (iv) FGA treated as deterministic, non-random [PAGE 8]; breaks when shot-taking is strategically forced by defense. (v) Empirical histogram regions require sufficient shot counts; with one make and five misses added ad hoc, low-volume cells are unstable [PAGE 23].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week strategic traps.

The paper descends from four distinct strands. First, Goldman & Rao (2011) coined “allocative efficiency” as a dynamic mixed-strategy equilibrium in which a lineup cannot reallocate the ball to increase marginal productivity; optimal play equalizes marginal efficiency across shots [PAGE 3]. Second, Oliver (2004) introduced the usage-curve or skill-curve, the empirically observed tendency that a player’s efficiency declines as shot volume rises [PAGE 14]. Third, Cervone et al. (2016) supplied the spatial backbone: a multiresolution stochastic process for possession outcomes and the “shot satisfaction” concept, defined as expected value conditional on a shot attempt minus unconditional expected value of the play [PAGE 3–5]. Fourth, Miller et al. (2014) provided the factorized point-process intensity and non-negative matrix factorization approach used to construct the deterministic spatial bases **Λ** [PAGE 6]. The game-level regression echoes Dixon & Coles (1997), originally developed for association football scores, adapted here to basketball game scoring with TGLPL as a covariate [PAGE 17]. The authors also reference their own follow-up work, Sandholtz & Bornn (2020), on Markov decision processes with dynamic transition probabilities for shooting strategies [PAGE 22].

The multi-week trap is illustrated by the Utah Jazz’s handling of Derrick Favors. From 2013–14 through 2016–17, Favors’ baseline and elbow mid-range jumpers were a go-to play; he took over 1,500 such shots averaging 0.76 points per shot [PAGE 20]. Beginning in 2017–18, the Jazz pivoted to a league-wide style emphasizing 3-pointers and rim attempts, attempting to convert Favors into a stretch four; his 3-point volume rose from 21 attempts over the prior four seasons to 141 in two seasons, but those shots averaged only 0.66 points per shot [PAGE 20–21]. The front office eventually did not re-sign him after 2019 [PAGE 21]. This six-year trajectory demonstrates the trap: shot-policy changes require multiple seasons to evaluate, and an allocative-efficiency metric available in 2016–17 might have expedited the diagnosis—but only if contextual factors (shot creation, usage-curve, defensive pressure) were not allowed to produce false positives. LPL and PLC flagged Favors’ mid-range regions as inefficient in the Jazz’s charts [PAGE 20], yet the intervention to push him toward 3-pointers backfired empirically, precisely because LPL does not model the usage-curve or shot-creation externalities.

Another lineage node is Simpson’s paradox shown in Figure 1: aggregated FGA rate versus points per shot appears slightly negative, but once disaggregated by court region, the relationship becomes positive in every region [PAGE 2–3]. This historical analytical trap means that lineup-level conclusions drawn without spatial conditioning are systematically misleading; the paper’s entire contribution is to avoid that aggregation bias by ranking within 1 ft × 1 ft cells rather than across the whole court [PAGE 10–11].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. The paper opens with the Oklahoma City Thunder’s 2017–18 playoff close-out games: Russell Westbrook took 43 shots in one elimination game and averaged 45.5% usage across four elimination games [PAGE 1]. Under playoff pressure, the lineup regresses to a high-usage habit—one player dominates field goal attempts because the offense collapses toward isolation. LPL’s rank-correspondence logic would flag this as potential misallocation if teammates have higher conditional FG% in the same regions. However, the crisis habit is not random; it is a recursive response to defensive compression. When the clock winds down and the defense collapses, the offense reverts to the player with the highest shot-creation gravity, even if his spot-up efficiency is inferior.

Counter-trap. The defense has the opposite objective: it wants to maximize the offense’s LPL by forcing shots into regions where the lineup ranks poorly [PAGE 16]. The paper’s permutation test implicitly treats random allocation as the baseline, but the real adversary is an adaptive defense. The Oklahoma City example in Figure 13 shows Westbrook with positive PLC (potential undershooting) in corner 3 regions [PAGE 21]. Yet many of those corner 3 opportunities were created by Westbrook’s own drives, which drew defenders and kicked the ball out. Strictly minimizing LPL by reallocating those corner attempts to Westbrook would break the drive-and-kick loop: he cannot simultaneously drive to the rim and shoot the corner 3 himself [PAGE 21]. The counter-trap is therefore shot-creation externality; LPL assigns credit to the shooter but not to the shot-creator, so reallocating shots away from the creator attenuates offensive firepower.

Clock. Two temporal layers are absent from the model. First, the shot clock: public data lack shot-clock context, so end-of-shot-clock desperation attempts are treated identically to early-open looks [PAGE 14, 22]. Second, the game clock: crisis moments (final minutes, close score) alter optimal allocation in ways LPL’s static per-36-minutes framing cannot capture [PAGE 1]. The recursive theory of mind must therefore model the defense modeling the offense: if the offense predictably minimizes LPL, the defense can anticipate the preferred shooter in each cell and defend accordingly, making the offense more predictable and easier to guard [PAGE 21]. PLC sign interpretation (positive = undershooting, negative = overshooting) [PAGE 14] is only valid when the shot clock, defensive pressure, and shot-creation value are held constant; in crisis regimes, those ceteris-paribus conditions fail, and LPL becomes a diagnostic hypothesis rather than a prescriptive command.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto layers.

Physical and biomechanical vetoes. The dominant physical veto is the usage-curve: a player’s FG% is not invariant to FGA rate [PAGE 14]. Allocating more shots to the highest-ranked shooter in a cell may push him up his skill curve, lowering efficiency exactly when LPL predicts gains. A second biomechanical veto is shot creation and gravity: players who draw defensive attention (e.g., Westbrook driving) generate off-ball efficiency for teammates that the lineup-independent FG% assumption cannot assign [PAGE 7, 21]. Reallocating shots away from such a player may improve cell-level rank correspondence while degrading possession-level expected points because the gravity effect disappears. A third veto is player-specific spatial specialization: some players are effective only from highly specific areas (corner 3, restricted area), and the CAR prior’s shrinkage toward shooting-similar neighbors can distort estimates where data are sparse [PAGE 7]. If a center’s neighborhood has few long-range observations, his 3-point FG% is inflated toward the global mean, making him appear a better allocative candidate than he is [PAGE 7].

Weather veto. Null set. NBA games are played in climate-controlled indoor arenas; there is no exogenous weather layer (wind, temperature, precipitation) affecting shot physics or ball flight. The source text contains no weather covariate, and none can be constructed from the NBA shotchartdetail or playbyplayv2 endpoints [PAGE 4]. Therefore the weather veto register is empty; any veto must arise from physical/biomechanical/game-theoretic layers, not meteorological ones.

Veto adjudication rule. An LPL/PLC recommendation is vetoed when (a) the cell’s shot volume is below a reliability threshold (sparse empirical region or CAR-shrinkage risk) [PAGE 7, 23]; (b) the recommended shooter is also the primary shot-creator whose removal collapses drive-and-kick or gravity benefits [PAGE 21]; (c) the volume shift is large enough to invoke usage-curve degradation that exceeds the rank-correspondence gain [PAGE 14]; or (d) the game state is a crisis/endgame regime where shot clock and defensive pressure dominate allocative logic [PAGE 14, 21]. The mapping from LPL to actual points (θ̂ = −0.62) is an average, not a cell-level guarantee, so local vetoes do not invalidate the global correlation but do invalidate local prescriptions [PAGE 18].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning-from-verifiable-rewards (RLVR) veto scenarios with counterfactual predictions.

Scenario 1: Oklahoma City, Russell Westbrook corner 3 reallocation. The paper’s PLC surfaces show positive values for Westbrook in corner 3 regions, implying he is potentially undershooting there relative to teammates [PAGE 21]. RLVR veto: do not reallocate corner 3 attempts to Westbrook because those opportunities are endogenously created by his own rim drives and defensive gravity; he cannot occupy the drive lane and the corner simultaneously [PAGE 21]. Counterfactual prediction: if the policy forces Westbrook to take the corner 3s that LPL flags as under-used, drive-and-kick frequency declines, open-corner opportunities for teammates diminish, and team expected points per possession fall despite a mechanical reduction in LPL. Verifiable: compare corner-3 FGA and drive-and-kick assist rates before/after a forced reallocation regime; the model predicts negative Δ expected points even when ΔLPL < 0.

Scenario 2: Utah Jazz, Derrick Favors mid-range to stretch-four transition. LPL/PLC charts flagged Favors’ mid-range baseline and elbow regions as inefficient across 2013–14 to 2016–17 [PAGE 20]. RLVR veto: the subsequent organizational push to convert Favors into a 3-point shooter (21 attempts over four prior seasons → 141 attempts in 2017–18 and 2018–19) should have been rejected because his observed 3-point PPS (0.66) was below his mid-range PPS (0.76) [PAGE 20–21]. Counterfactual prediction: had the Jazz used LPL to justify the 3-point conversion without checking the usage-curve and player-specific skill surface, expected points per game would decrease; the realized 0.66 vs 0.76 PPS gap confirms the veto was correct. Verifiable: track Favors’ PPS by region across the transition; LPL alone would recommend the change, but the PPS veto predicts negative offensive value.

Scenario 3: Sparse empirical region, Cleveland Cavaliers right midrange (Love vs. Thompson). In the appendix’s empirical implementation, Tristan Thompson (4 made of 6) appears to outrank Kevin Love (8 made of 26) in the far-right midrange after the ad hoc smoothing anchor of one make and five misses per region [PAGE 23]. RLVR veto: do not reallocate mid-range attempts to Thompson based on empirical LPL because the cell sample size is below a reliability threshold and the CAR/Bayesian posterior would shrink both toward the lineup or global mean rather than accept the raw 66.7% vs 30.8% split [PAGE 7, 23]. Counterfactual prediction: with more data, Thompson’s true mid-range FG% will regress toward the mean and Love’s toward his established level; the apparent LPL gain from reallocating to Thompson is a small-sample singularity. Verifiable: hold out subsequent games; the model predicts Thompson’s right-midrange efficiency will not sustain at 66.7%, and the empirical LPL ranking will reverse or become statistically indistinguishable. The veto condition is sample-size singularity: when n_shots per player per cell is too low for the posterior to separate rank order, LPL recommendations are noise.
</RLVR_COUNTERFACTUAL_VETOES>