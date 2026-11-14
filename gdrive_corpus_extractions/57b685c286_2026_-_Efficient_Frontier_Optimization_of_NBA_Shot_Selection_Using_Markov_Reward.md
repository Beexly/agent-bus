---
source: "2026 - Efficient Frontier Optimization of NBA Shot Selection Using Markov Reward Processes - Duma et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 17
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5307
---

<NATIVE_REASONING>
The user wants a deep reasoning output based on the provided source paper (arXiv 2607.02933) about NBA shot selection using Markov Reward Processes. They want strictly formatted output with specific XML sections:

1. `<THINK_TRACE>` - Deep multi-hop derivation & gray-zone audit (>=400 words)
2. `<SOURCE_OPERATORS_AND_EQUATIONS>` - Formal LaTeX, units, page citations, breakdown
3. `<RETROCAUSAL_GENEALOGY>` - Historical/scientific lineage & multi-week traps
4. `<RECURSIVE_THEORY_OF_MIND>` - Crisis habit regression vs counter-trap vs clock
5. `<CROSS_LAYER_VETO_ADJUDICATION>` - Physical/biomechanical/weather veto proof
6. `<RLVR_COUNTERFACTUAL_VETOES>` - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: No spreads, totals, moneylines, odds.
- ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
- >= 1,000-word depth across these exact XML sections.

I need to analyze the paper thoroughly and produce these sections.

Let me outline the paper content by page (the text seems to be formatted with page numbers 1-20 at bottom).

Key elements from the paper:
- arXiv:2607.02933v1 [stat.AP] 3 Jul 2026
- Authors: Nirek Duma, Leo Benaharon
- Title: Efficient Frontier Optimization of NBA Shot Selection Using Markov Reward Processes
- Pages: 17 (but the text seems to go to page 20 including references)

Page-by-page breakdown:
- Page 1: Title, abstract, intro start
- Page 2: Figure 1, expected value equation E[Vz] = pz rz
- Page 3: Shot portfolio π definition, constraints sum to 1
- Page 4: Background, Fichman and O'Brien, 38% prediction, 41.5% actual
- Page 5: Data and State Space, S set, no-fastbreak diet R/M/C3/NC3 = 0.313/0.277/0.105/0.305
- Page 6: Transition matrix Pij, fundamental matrix N = (I-Q)^-1, row logic Pr(row→zM|π) = ωπz pz
- Page 7: Figures 3-5, rebound probabilities Pr(ORR|RX)=0.384, etc.
- Page 8: Rewards vector r, V1(π) = eTPS Q(π)r, VT(π) = eTPS (I-Q(π))^-1 r
- Page 9: Variance covariance matrix Σ, portfolio variance σ²(π) = π^T Σπ
- Page 10: Timeout response cost, pressure vector st, ridge regression B̂^T = (X^T X + αI)^-1 X^T Y, response cost E(π) = ||Bs(π)||²
- Page 11: Optimization objective max Ve(π) - λ1 σ²e(π) - λ2 E(π), normalization A^e(π), knee rule dx/dy-tail
- Page 12: Team-level matrices, hybrid fastbreak recomposition α = NFB/N, πzHybrid = (1-α)πzNF* + αρFzB
- Page 13: League fastbreak shot distribution R/M/C3/NC3 = 0.571/0.070/0.090/0.269
- Page 14: Table 2 league optima, Table 3 actual diets, Table 4 comparison
- Page 15: Figure 7-9, hybrid actual vs optimum
- Page 16: Figure 10 calibration check 1.149 PPP vs empirical 1.15, Figure 11 teams near frontier
- Page 17: Team-specific frontiers, Washington anomaly, shrinkage, Denver volatility
- Page 18: Discussion, conclusions, limitations
- Page 19: Limitations continued
- Page 20: Appendix A full-sample frontier figures, Appendix B shrinkage sensitivity K=1000
- Page 21: References

Wait, the text shows page numbers 1-20. Let me map carefully based on the visible page numbers at bottom of sections.

The user provided text with page numbers embedded. I should cite [PAGE N] where N corresponds to the page number shown in the source text.

Key equations and details:
- E[Vz] = pz rz (page 2)
- π = (πR, πM, πC3, πNC3), sum πi = 1, πi ≥ 0 (page 3)
- S = {PS, RM, RX, MM, MX, C3M, C3X, NC3M, NC3X, FT1, FT2, FT3, ORR, ORM, ORC3, ORNC3, OR, EP} (page 5)
- Pij = Pr(Xt+1=j | Xt=i) (page 6)
- PEP,EP = 1 (page 6)
- N = (I-Q)^-1 = I + Q + Q² + ... (page 6)
- Pr(row→zM|π) = ωπz pz, Pr(row→zX|π) = ωπz(1-pz) (page 6)
- Pr(ORR|RX)=0.384, Pr(ORM|MX)=0.270, Pr(ORC3|C3X)=0.258, Pr(ORNC3|NC3X)=0.260 (page 7)
- rRM=2, rMM=2, rC3M=3, rNC3M=3 (page 8)
- V1(π) = eTPS Q(π)r (page 8)
- VT(π) = eTPS (I-Q(π))^-1 r = eTPS N(π)r (page 8)
- gt = [gt,R, gt,M, gt,C3, gt,NC3]^T (page 9)
- Σ = 1/(T-1) Σ(gt-ḡ)(gt-ḡ)^T (page 9)
- σ²(π) = π^T Σπ (page 9)
- st = [EPR, EPM, EPC3, EPNC3, EPOR, EPFT]^T (page 10)
- EPz,t = sharez,t · FG%z,t · rz (page 10)
- B̂^T = (X^T X + αI)^-1 X^T Y (page 10)
- sz(π) = Pr(PS→zM|π)rz (page 11)
- sOR(π) = max{VT(π) - V1(π), 0} (page 11)
- sFT(π) = Σk∈{FT1,FT2,FT3} Pr(PS→k|π)rk (page 11)
- E(π) = ||Bs(π)||² (page 11)
- Objective: max Ve(π) - λ1 σ²e(π) - λ2 E(π) (page 11)
- Normalization: A^e(π) = (A(π)-Amin)/(Amax-Amin) (page 11)
- dx/dy tail rule: dx/dy ≈ (xm+1-xm)/(ym+1-ym) (page 11)
- α = NFB/N (page 12)
- ρFzB,L = PFzB / Σj AjFB (page 12)
- πzHybrid = (1-α)πzNF* + αρFzB (page 12)
- αL = 0.105 (page 13)
- Fastbreak distribution R/M/C3/NC3 = 0.571/0.070/0.090/0.269 (page 13)
- Table 2: No fastbreak transient optimum Rim=0.415, Mid=0.233, C3=0.095, NC3=0.257, Value=1.099 (page 14)
- Full Sample Transient: Rim=0.431, Mid=0.216, C3=0.095, NC3=0.258 (page 14)
- Table 3: No fastbreak actual 0.313/0.277/0.105/0.305; Full sample actual 0.345/0.252/0.103/0.301 (page 14)
- Table 4: No fastbreak actual vs optimum (page 14)
- Table 5: Hybrid actual 0.340/0.255/0.103/0.301; Hybrid optimum 0.431/0.216/0.095/0.258 (page 15)
- Full-sample model value 1.149 PPP vs empirical ~1.15 (page 16)
- Washington anomaly, shrinkage K=1000 (pages 17-20)

Now I need to write the sections.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to derive the model logically, identify gray zones (assumptions, breakdown regimes), audit the math, check consistency, discuss singularity conditions (I-Q invertibility, spectral radius <1), normalization issues, ridge regression α vs λ2 confusion (note: the paper uses α for ridge in Eq and α for fastbreak weight later - potential notation collision!), variance estimation from game-level returns (small sample T?), covariance vs independence, empirical make rate held constant (limitation), fastbreak exclusion geometry, Washington/Denver shrinkage divergence.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, verbatim quotes. I need to list all operators, equations with page numbers, units (PPP, dimensionless shares, probability), assumptions, breakdown regimes (spectral radius ρ(Q) ≥ 1 makes N diverge; simplex boundary πi=0 or 1; covariance matrix singular if T < 4 or collinear categories; ridge α=0 OLS vs α→∞ zero matrix).

RETROCAUSAL_GENEALOGY: Historical lineage from Skinner optimal stopping [3], Sandholtz & Bornn MDPs [5], Fichman & O'Brien MPT [1][2], Cervone et al. [4], Pelechrinis & Goldsberry [6]. Multi-week traps: overfitting to 5-season window, regime shifts (rule changes, personnel), cold streak variance, playoff vs regular season.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (teams revert to high-volume 3s under playoff pressure), counter-trap (defense adjusts via timeout response matrix B, mean reversion), clock (shot clock 24s, timeout intervals, finite possession horizon). The model treats defense as implicit via timeout response, not explicit.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. NBA is indoor, climate-controlled, so weather veto is null/void. Physical layer: rim geometry, backboard, court dimensions fixed. Biomechanical: player fatigue not modeled, make rates held constant despite volume changes (endogeneity), offensive rebounding depends on positioning/leaping. Veto: any recommendation that requires changing physical court dimensions or outdoor conditions is vetoed. Also, personnel (superstar gravity) not modeled, so team-specific frontiers may be vetoed by coach/personnel constraints.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions. Need to make them verifiable and not betting lines. Examples:
1. If a team increases non-corner 3 share beyond 0.30 while decreasing rim below 0.34, model predicts transient value VT drops below league frontier knee, but actual win probability may not if personnel spacing is elite (verifiable via tracking data).
2. If spectral radius ρ(Q(π)) approaches 1 (near-absorbing failure), fundamental matrix N explodes; any diet with offensive rebound continuation probability > threshold makes possession infinite in expectation—veto because real game has shot clock. Prediction: model breaks down if OR continuation chain is not properly truncated by shot clock violation/turnover.
3. If covariance matrix Σ is estimated from T games where T < number of categories (4), Σ is singular; portfolio variance undefined. Prediction: for teams with <4 games in sample, σ²(π) collapses to 0 or ∞, making optimization arbitrary.

Need to ensure no betting lines. No spreads, totals, moneylines, odds. Avoid words like "spread", "moneyline", "odds", "over/under", "total". Can talk about probability, expected value, variance, PPP.

Word count: Need >= 1,000 words across sections. I'll aim for substantial length in each, especially THINK_TRACE (>400 words) and total >1000.

Citations: Use [PAGE N] format. Verbatim quotes from source text.

Let me draft carefully.

THINK_TRACE:
Start with derivation: possession as absorbing Markov reward process. Transient states vs absorbing EP. Fundamental matrix N=(I-Q)^-1 requires spectral radius ρ(Q)<1. Breakdown if possession can theoretically continue forever (orb offensive rebounds with no turnover/shot clock). But shot clock imposes 24s, though model state space doesn't include clock explicitly—gray zone: infinite horizon assumption vs finite game clock.

Shot diet π on simplex. Objective combines normalized expected value Ve, normalized variance σ²e, normalized response cost E. λ1, λ2 grid search. Knee rule dx/dy-tail selects point where marginal risk exceeds marginal value.

Gray zones:
- Notation collision: α used for ridge regression regularization (page 10) and fastbreak weight α = NFB/N (page 12). Different αs.
- Make rate pz held constant when π changes (page 19 limitation). This is endogeneity: shooting more doesn't change pz in model, but in reality defense adjusts.
- Timeout response matrix B fitted on aggregated empirical data; response cost minimum approximately actual league diet (Table 1, page 14), suggesting B may just encode status quo rather than causal defensive adjustment.
- Fastbreak exclusion removes geometry but adds back fixed distribution; hybrid assumes fastbreak selection is exogenous and non-optimizable.
- Covariance from game-level returns: T games, 4 categories. If T small, Σ noisy. Uses 5 seasons (2021-22 through 2025-26), so T ~ 410 per team? But game-level vector is per category per game.
- Washington shrinkage anomaly vs Denver volatility shows empirical Bayes K=1000 over-smooths Denver's extreme efficiency.
- Value normalization: A^e(π) = (A-Amin)/(Amax-Amin). If Amin=Amax (degenerate), division by zero singularity.

I need to write >=400 words here.

SOURCE_OPERATORS_AND_EQUATIONS:
List each equation with LaTeX, page, units, assumptions, breakdown.

RETROCAUSAL_GENEALOGY:
Lineage: Skinner (2011) optimal stopping; Sandholtz & Bornn (2020) MDPs; Fichman & O'Brien (2018/2019) MPT predicted 38% equilibrium; actual reached 41.5% by 2019 (page 4). Cervone multiresolution stochastic process. Pelechrinis & Goldsberry corner 3 anatomy.
Multi-week traps: 5-season window may include rule emphasis changes; roster turnover; coaching changes; playoff variance vs regular season.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: under playoff pressure or cold streak, coaches regress to high-volume perimeter because "process over outcome" but model says variance cost is real. Counter-trap: defense uses timeout to structurally regress advantage (response cost E(π)); offense must anticipate B matrix. Clock: 24-second shot clock creates absorbing boundary; timeout intervals are discrete pressure windows; finite possession horizon means VT should perhaps be discounted by clock, but model uses undiscounted transient sum I+Q+Q²...

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: NBA court 94x50 ft, rim 10 ft, indoor climate-controlled → weather veto = null set (no outdoor weather, no altitude, no wind). Biomechanical: player vertical leap, release speed, fatigue not in state space; make rates held constant. Any shot diet requiring >100% rim attempts or physically impossible spacing is vetoed. Personnel: superstar gravity not modeled (limitation page 19), so a team with a dominant rim protector or elite spacer may have veto power over the mathematical optimum.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Singularity of fundamental matrix: If a candidate diet π induces Pr(continuation | miss) such that the spectral radius ρ(Q(π)) ≥ 1, then N=(I-Q)^-1 does not exist (Neumann series diverges). Veto: any optimization path approaching ρ(Q)=1 is invalid because expected possession length diverges, violating the 24-second shot clock and game clock. Prediction: The paper's observed rebound probabilities (rim miss ORR=0.384, page 7) keep ρ(Q)<1 in empirical data, but a hypothetical π shifting all mass to rim with ORR=0.384 and immediate re-attempt could theoretically push ρ(Q) toward 1 if offensive rebounds lead to immediate rim attempts with no clock consumption. Real game veto: shot clock resets on offensive rebound? Actually in NBA, offensive rebound resets shot clock to 14 (or 24 depending on rule), but not infinite. So model missing clock state is a veto.
2. Covariance degeneracy: Σ estimated from game-level returns gt. If T (number of games) ≤ 4 (number of shot categories), Σ is rank-deficient and σ²(π)=π^TΣπ is not a valid positive-definite variance. Veto: team-specific frontiers for teams with <4 games in the window are mathematically undefined. Prediction: For any team with a shortened season or <4 games, the model's σ²(π) collapses and SLSQP returns boundary solutions driven entirely by numerical noise.
3. Endogeneity of make rate: Model holds pz constant when π changes (page 19). Counterfactual: If a team triples its rim share πR from 0.345 to >0.90, defense will collapse and pR will fall endogenously. The model does not update pz, so VT(π) is overstated. Veto: any recommended π far from observed simplex neighborhood (e.g., πR > 0.60) is vetoed because constant pz assumption breaks. Prediction: Washington's near-rim-only optimum (page 17) is an artifact of this breakdown; shrinkage corrects it but introduces Denver volatility, confirming the estimator's brittleness at extremes.

Need to ensure no betting lines. Check words: "spread", "moneyline", "odds", "over/under", "total" as betting term. Avoid.

Now let's write. Must use exact XML tags. No markdown code blocks around them? Just the tags. The user wants exact XML sections.

I'll produce a single response containing all sections.

Let's draft with attention to length.

THINK_TRACE: I'll write ~500 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~400 words.
RETROCAUSAL_GENEALOGY: ~250 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~250 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total should exceed 1000.

Let's ensure verbatim quotes and [PAGE N] markers.

Verbatim quotes to use:
- "The model separates rim attempts, midrange attempts, corner threes, and noncorner threes..." (abstract, page 1)
- "We combine a possession-level Markov reward process with both a mean-variance shot allocation objective and a defense response cost." (page 1)
- "N = (I − Q)−1 = I + Q + Q2 + Q3 + · · ·" (page 6)
- "The miss-to-offensive-rebound rows show that rim misses create the most continuation." (page 7)
- "VT(π) = eTPS (I − Q(π))−1 r = eTPS N(π)r." (page 8)
- "We use covariance rather than independent category variance because shot families can co-move." (page 9)
- "This term functions as an implicit coaching adjustment cost..." (page 11)
- "A grid search across λ1 and λ2 is used to trace the frontier..." (page 11)
- "The main knee rule in this paper is the dx/dy-tail rule." (page 11)
- "Fastbreaks are analyzed separately because their value depends on geometry..." (page 4)
- "The model holds the empirical make percentage constant when shot shares change." (page 19)

OK, writing now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper reformulates NBA shot selection as a dynamic portfolio problem over an absorbing Markov reward process. The state space on page 5 is S = {PS, RM, RX, MM, MX, C3M, C3X, NC3M, NC3X, FT1, FT2, FT3, ORR, ORM, ORC3, ORNC3, OR, EP}, where EP is the sole absorbing end-of-possession state. The transient block Q is formed by deleting EP from the empirical transition matrix P, and the fundamental matrix N = (I − Q)^−1 exists only if the spectral radius ρ(Q) < 1. This is a critical singularity condition: if offensive-rebound continuation chains can recur indefinitely without a clock-bound absorption, the Neumann series I + Q + Q² + … diverges and expected possession length becomes infinite. The NBA’s 24-second shot clock provides a physical hard bound not represented in the state space, so the model implicitly assumes possession survival is governed entirely by shot outcomes and rebounds, not by time expiration. That is a gray-zone breakdown regime: any counterfactual shot diet π that raises the miss-to-offensive-rebound probability high enough to push ρ(Q) toward 1 invalidates N and therefore VT(π) = e^T_PS N(π) r.

The shot diet π = (πR, πM, πC3, πNC3) lives on the probability simplex Σπi = 1, πi ≥ 0. The objective on page 11 maximizes a normalized composite Ve(π) − λ1 σ²e(π) − λ2 E(π), where value, variance, and timeout-response cost are each min–max normalized over candidate support to prevent numerical dominance. A grid search over λ1 and λ2 traces the efficient frontier, and the dx/dy-tail knee rule selects the portfolio where local risk slope dσ²/dV is smallest—i.e., the near-vertical tail where added variance buys little marginal expected value. This is conservative by construction, but the normalization introduces its own singularity: if Amax = Amin for any term, the normalized scale divides by zero. No such degeneracy is reported in the tables, but for extreme team-level samples (e.g., Washington’s near-rim-only anomaly on page 17), the support may collapse and normalization can become unstable.

Several gray zones demand audit. First, notation collision: α appears as ridge regularization in B̂ᵀ = (XᵀX + αI)^−1 XᵀY on page 10 and again as the fastbreak weight α = NFB/N on page 12. These are distinct hyperparameters sharing a symbol. Second, the model deliberately holds empirical make rates pz constant while varying π (page 19 limitation), which removes endogeneity but also removes defensive adjustment: shooting more rim attempts does not lower pR in the model, even though a real defense would collapse. Third, the timeout-response matrix B is fitted on aggregated empirical intervals, and Table 1 shows its minimum-response-cost diet is approximately the actual league distribution (page 14), suggesting B may partially encode status-quo coaching behavior rather than an independent causal penalty. Fourth, fastbreak possessions are excluded from optimization because geometry is unobserved, then added back as a fixed observed component via πzHybrid = (1 − α)πzNF* + αρFzB (page 12), which assumes transition offense is exogenous and non-optimizable—a strong structural assumption. Finally, team-specific frontiers use empirical five-season transition matrices; the shrinkage sensitivity check with K = 1000 corrects Washington’s small-sample noise but destabilizes Denver’s extreme efficiency (page 17–20), revealing that the empirical-Bayes estimator is not uniformly benign across the league’s statistical extremes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All equations below are drawn verbatim from the source markdown; page markers refer to the printed page numbers in the provided text.

1. Shot-diet simplex, page 3:
π = (πR, πM, πC3, πNC3), πR + πM + πC3 + πNC3 = 1, πi ≥ 0.
Units: dimensionless probability shares summing to 1. Assumption: four mutually exclusive shot categories exhaust the half-court diet. Breakdown: boundary solutions πi ∈ {0,1} are allowed by the constraint but may be physically unrealistic for a full roster.

2. State space, page 5:
S = {PS, RM, RX, MM, MX, C3M, C3X, NC3M, NC3X, FT1, FT2, FT3, ORR, ORM, ORC3, ORNC3, OR, EP}.
Units: categorical state labels; EP absorbing. Assumption: every possession terminates in EP; free-throw states are transient and split by shot count.

3. Empirical transition kernel, page 6:
Pij = Pr(Xt+1 = j | Xt = i), with PEP,EP = 1.
Units: dimensionless transition probabilities. Assumption: first-order Markov dependence; the next state depends only on current state, not on possession history or shot-clock time. Breakdown: violates reality if fatigue or clock pressure creates path dependence.

4. Fundamental matrix and Neumann series, page 6:
N = (I − Q)^−1 = I + Q + Q² + Q³ + ⋯
Units: expected visit counts (dimensionless). Assumption: spectral radius ρ(Q) < 1 so the inverse exists. Breakdown/singularity: if ρ(Q) ≥ 1 (e.g., endless offensive-rebound chains with no clock absorption), N diverges and VT(π) is undefined.

5. Shot-outcome row reallocation under diet π, page 6:
Pr(row → zM | π) = ωπz pz, Pr(row → zX | π) = ωπz(1 − pz).
Units: probabilities; ω is row field-goal outcome mass, pz is category make rate. Assumption: make rates pz are fixed and independent of share πz. Breakdown: endogeneity failure—defense does not adjust pz as volume changes.

6. Offensive-rebound continuation, page 7:
Pr(ORR | RX) = 0.384, Pr(ORM | MX) = 0.270, Pr(ORC3 | C3X) = 0.258, Pr(ORNC3 | NC3X) = 0.260 (no fastbreak); full sample 0.391, 0.271, 0.262, 0.260.
Units: conditional probabilities. Assumption: rebound continuation is category-specific and stationary across the five-season sample. Breakdown: does not condition on defensive matchup, shot-clock time, or player positioning.

7. Immediate reward vector, page 8:
rRM = 2, rMM = 2, rC3M = 3, rNC3M = 3; miss and end states receive zero.
Units: points (PPP dimension). Assumption: made shots yield exactly their point value; free throws receive empirical expected contribution.

8. One-step and transient possession value, page 8:
V1(π) = e^T_PS Q(π) r; VT(π) = e^T_PS (I − Q(π))^−1 r = e^T_PS N(π) r.
Units: expected points per possession (PPP). Assumption: V1 captures only the next transition; VT includes all continuations through offensive rebounds, free throws, and possession survival. Breakdown: infinite-horizon transient sum ignores the 24-second shot clock hard stop.

9. Game-level return vector and covariance, page 9:
gt = [gt,R, gt,M, gt,C3, gt,NC3]^T, gt,z = points from z / attempts from z; Σ = (1/(T−1)) Σt=1..T (gt − ḡ)(gt − ḡ)^T.
Units: PPP per category; covariance in (PPP)². Assumption: T games yield a well-conditioned Σ; categories may co-move, justifying covariance over independent variances. Breakdown: if T ≤ 4 (number of categories), Σ is rank-deficient and σ²(π) = πᵀΣπ is not positive definite.

10. Portfolio variance, page 9:
σ²(π) = πᵀΣπ = Σi Σj πi Σij πj.
Units: (PPP)². Assumption: linear portfolio variance over shot shares. Breakdown: invalid if Σ is singular or estimated from too few games.

11. Timeout pressure vector and ridge fit, page 10:
st = [EPR, EPM, EPC3, EPNC3, EPOR, EPFT]^T; EPz,t = sharez,t · FG%z,t · rz.
B̂ᵀ = (XᵀX + αI)^−1 XᵀY.
Units: pressure in PPP-equivalent shares; B maps pressure intervals to next-interval changes. Assumption: ridge regression with regularization α stabilizes estimation in sparse intervals. Breakdown: notation collision with fastbreak weight α on page 12; if α → ∞, B̂ → 0 and response cost vanishes.

12. Response-cost construction, page 11:
sz(π) = Pr(PS → zM | π) rz; sOR(π) = max{VT(π) − V1(π), 0}; sFT(π) = Σk∈{FT1,FT2,FT3} Pr(PS → k | π) rk.
E(π) = || B s(π) ||₂².
Units: E(π) in squared pressure units; norm is Euclidean. Assumption: the L2 norm of the B-mapped pressure vector proxies coaching adjustment cost. Breakdown: Table 1 shows the minimum of E(π) is approximately the actual league diet, suggesting B may partially regress to the empirical mean rather than impose an independent defensive penalty.

13. Normalized objective and frontier selection, page 11:
maxπ Ve(π) − λ1 σ²e(π) − λ2 E(π), subject to 0 ≤ πi ≤ 1, Σπi = 1.
Ae(π) = (A(π) − Amin)/(Amax − Amin).
Units: all terms normalized to [0,1] before combination. Assumption: grid search over λ1, λ2 identifies the knee via dx/dy-tail rule: dx/dy ≈ (xm+1 − xm)/(ym+1 − ym) where (xm, ym) = (σ²(πm), V(πm)). Breakdown: if Amax = Amin, normalization divides by zero; knee rule is conservative and may exclude high-variance, high-value portfolios that a particular roster could sustain.

14. Hybrid fastbreak recomposition, page 12:
α = NFB / NAll; ρFzB,L = AFzB / Σj AFjB; πzHybrid = (1 − α)πzNF* + αρFzB.
Units: dimensionless shares; αL = 0.105 league fastbreak-possession probability. Assumption: fastbreak shot distribution is fixed and exogenous; only the no-fastbreak component is optimized. Breakdown: transition offense geometry (defensive recovery, lane filling) is unobserved and treated as non-optimizable.

15. League optima, page 14 (Table 2): no-fastbreak transient optimum λ1=5.7, λ2=0.7 gives Rim=0.415, Mid=0.233, C3=0.095, NC3=0.257, Value=1.099 PPP. Full-sample transient gives Rim=0.431, Mid=0.216, C3=0.095, NC3=0.258. Units: PPP. Assumption: these are normalized-objective selections, not raw expected-value maximizers.

16. Shrinkage estimator, page 20 (Appendix B):
Pij^(a) = (nij^(a) + K Pij^league) / (Ni^(a) + K), with K = 1000.
Units: smoothed transition probabilities. Assumption: K = 1000 pseudo-counts stabilize sparse rows. Breakdown: corrects Washington’s small-sample noise but introduces severe volatility into Denver’s optimum, proving the estimator is not uniform across teams.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Skinner’s optimal stopping model of shot selection [3] and Sandholtz and Bornn’s Markov decision processes for possession-level shooting strategies [5], both cited on page 3. These microfoundations treat the 24-second possession as a sequential decision problem, which the present paper extends by embedding the possession inside a mean-variance portfolio objective. The macro ancestor is Fichman and O’Brien’s application of Modern Portfolio Theory to basketball [1][2], discussed on page 4, which predicted a three-point equilibrium near 38% of field-goal attempts; the paper notes this threshold was passed in 2019 and that share has since reached 41.5%. The current work refines that framework by adding transient rebound continuation, which Fichman and O’Brien omitted. Cervone et al.’s multiresolution stochastic process model [4] and Pelechrinis and Goldsberry’s corner-three anatomy [6] provide spatial context, especially for why corner threes are separated from non-corner threes.

Multi-week traps arise from the five-season window (2021–22 through 2025–26) used on page 5. Roster turnover, coaching changes, rule emphasis shifts, and injury shocks can make a stationary transition matrix a poor estimator of the next week’s possession structure. The model’s assumption of constant make rates pz across volume changes is particularly fragile across multi-week regimes: a team that heats up from the perimeter in Week 2 may be cold in Week 8, yet the covariance matrix Σ estimated from game-level returns (page 9) smooths over this intra-season volatility. Because the framework optimizes a macro frontier rather than a dynamic weekly adaptation, it risks recommending a shot diet that was optimal for a past statistical regime but mismatched to the current one. The Washington/Denver shrinkage divergence on page 17 illustrates this trap: a small-sample anomaly (Washington) regresses to the league mean under K = 1000, while Denver’s structurally extreme but efficient reality is penalized, showing that historical smoothing can destroy valid outliers.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression operates as follows: when a team experiences a cold shooting streak or playoff pressure, the recursive coach–defense loop tends to push shot volume back toward the mean or toward familiar high-volume perimeter habits, even when the model’s efficient frontier suggests marginally more rim pressure. The timeout-response cost E(π) = || B s(π) ||₂² on page 11 is explicitly designed to capture this: if an offense generates an unsustainably high volume of uncontested three-pointers, the defense uses the timeout to structurally regress that advantage back toward the mean. This creates a second-order trap—an offense that appears efficient in expected value may trigger a response matrix B that destabilizes it in the next interval.

The counter-trap is that the offense must anticipate B’s off-diagonal cross-correlations: adjusting one pressure channel (e.g., corner-three share) provokes movement in another (e.g., offensive-rebound pressure). The paper notes that B’s negative diagonal entries indicate mean reversion within the same channel, while off-diagonals show cross-channel association (page 10). Therefore, a team that over-optimizes for rim share based on the league frontier may find the defense collapsing in ways not represented in the empirical make rates, because pz is held constant (page 19 limitation). The counter-trap is recursive: the offense optimizes π, the defense observes s(π) and updates coverage, and the offense’s transient value VT(π) is recomputed under a new Q that the model does not explicitly re-estimate.

Clock structure is the third recursive layer. The absorbing state EP terminates possession, but the model contains no explicit shot-clock state. The fundamental matrix N = (I − Q)^−1 sums continuation over an effectively infinite horizon, bounded only by empirical transition probabilities, not by the 24-second clock or the game clock. In crisis minutes (end of quarter, final minutes), the clock constraint tightens, making continuation value less relevant than immediate expected value V1(π). The model’s main object VT(π) therefore systematically overweights rebound continuation in clock-pressured situations where a possession cannot realistically survive multiple offensive-rebound cycles. This temporal mismatch means the efficient frontier selection is most valid for early-possession half-court offense and least valid for end-of-clock or end-game crisis possessions.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NBA games are played indoors on a 94 ft × 50 ft court with a 10 ft rim, under climate-controlled conditions with no wind, precipitation, temperature variation, or altitude effects. Because the source data are play-by-play from regular-season games in standard arenas, the weather veto is null: no atmospheric variable can invalidate the shot-diet optimization. Physical court geometry and rim height are constants across all observations, so no spatial veto arises from venue differences.

Biomechanical layer: the state space S on page 5 contains no player-specific variables—no release height, vertical leap, release speed, fatigue accumulation, or defensive matchup quality. Make rates pz are treated as empirical constants independent of volume (page 19). Any recommended diet requiring biomechanically impossible execution—such as Washington’s near-rim-only anomaly on page 17—is vetoed because it assumes a make rate that cannot be sustained by human shooters under defensive contest. Similarly, a diet that shifts all mass to rim attempts ignores that rim pressure generates contact, fouls, and free-throw states that are already partially modeled but not linked to player fatigue over a game or series. Because personnel gravity and superstar spacing are absent (page 19 limitation), a team with an elite interior finisher or an elite perimeter spacer may have a veto over the league-average frontier: the mathematical optimum is conditional on average personnel, not on any specific roster.

Cross-layer adjudication rule: a recommended shot diet π is vetoed if (a) it pushes ρ(Q(π)) ≥ 1, breaking the fundamental matrix; (b) it requires pz to remain constant while moving far outside the observed simplex neighborhood, violating the endogeneity assumption; or (c) it demands physical output beyond human biomechanical limits (e.g., >90% rim share with league-average finishing). The paper itself acknowledges this by applying shrinkage to Washington and by treating team-specific frontiers as macro baselines rather than absolute mandates (pages 17 and 19). Weather and venue are non-factors; biomechanics and personnel are the binding veto layers.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Fundamental-matrix singularity. If a candidate diet π induces an offensive-rebound continuation structure such that the spectral radius ρ(Q(π)) ≥ 1, then N = (I − Q)^−1 does not exist because the Neumann series diverges. The empirical rebound probabilities on page 7 (rim miss ORR = 0.384, midrange ORM = 0.270, corner three ORC3 = 0.258, non-corner three ORNC3 = 0.260) keep ρ(Q) < 1 in the observed data, but a hypothetical counterfactual shifting all non-fastbreak mass to rim attempts while preserving immediate re-attempt after offensive rebound could drive ρ(Q) toward 1. Verifiable condition: compute ρ(Q(π)) for any proposed π; if ρ(Q) ≥ 1 − ε for a small tolerance ε (e.g., ε = 0.01), the optimization is singular. Prediction: any SLSQP solution approaching πR > 0.90 with unchanged rebound continuation will violate the shot-clock bound and produce divergent VT(π), so it must be vetoed.

Veto Scenario 2 — Covariance degeneracy from small samples. Portfolio variance σ²(π) = πᵀΣπ on page 9 requires Σ estimated from T game-level return vectors across four categories. If T ≤ 4, Σ is rank-deficient and not positive definite, making σ²(π) undefined or numerically dominated by noise. The five-season sample provides ample league-level observations, but team-specific sub-samples or shortened seasons could fall below this threshold. Verifiable condition: for any team frontier, check rank(Σ) = 4 and condition number; if rank < 4, the variance term is not a valid risk measure. Prediction: teams with fewer than four games in the estimation window will yield boundary solutions driven by numerical instability rather than basketball structure, and their frontiers should be excluded or smoothed with league-level pseudo-counts.

Veto Scenario 3 — Make-rate endogeneity breakdown. The model holds pz constant when π changes (page 19), so it cannot capture defensive collapse if a team dramatically increases rim share. Verifiable condition: compare recommended π to observed simplex neighborhood; if ||π − π_observed||₁ > 0.30 (e.g., moving from observed Rim ≈ 0.345 to recommended Rim > 0.65), the constant-pz assumption is strained. Prediction: under such a shift, real defensive adjustment would lower pR and raise pM/pC3, causing the model’s VT(π) to overstate true possession value. Washington’s near-rim-only optimum on page 17 is exactly this breakdown artifact; shrinkage with K = 1000 corrects it but destabilizes Denver’s efficient extreme, confirming that counterfactual diets far from observed behavior are unreliable and must be vetoed unless optical tracking data re-estimate pz endogenously.
</RLVR_COUNTERFACTUAL_VETOES>