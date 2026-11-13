---
source: "DFS_Revision_1_May2019 (2).pdf"
folder: "/GSE-GSI-Mega-Sweep-2026-11-06/books-a-sports"
pages: 53
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5747
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided PDF source text about Daily Fantasy Sports (DFS) portfolio optimization. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to produce a comprehensive analysis. The source is "How to Play Fantasy Sports Strategically (and Win)" by Martin B. Haugh and Raghav Singal, May 2019 version. 53 pages.

Let me structure my response:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I'll derive the DFS optimization problem, connect double-up to top-heavy, discuss mean-variance, Dirichlet-multinomial, copulas, algorithms 2-7, numerical results, insider trading, collusion, etc. Gray zones: normality assumption, finite O vs asymptotic, estimation error in µδ and Σδ, late-breaking news, median vs mean skew, small-O contests, submodularity guarantee dilution, overfitting in Dirichlet regression, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations with page citations. Include:
- Constraints from [PAGE 5]: sum wp = C, sum cp wp <= B, wp in {0,1}
- Double-up objective (1) [PAGE 6]: max P{w^T delta > G(r')}
- Top-heavy objective (2) [PAGE 7]: sum over i,d of (Rd - Rd+1) P{...}
- Dirichlet regression (4), (5), (6) [PAGES 8-9]
- Copula Sklar (3) [PAGE 8]
- Proposition 4.1 mean-variance [PAGE 11-12]
- Algorithm 2/3/4 [PAGES 12-15]
- Algorithm 6/7 [PAGES 19-21]
- Parimutuel expected gain (17) [PAGE 17]
- Condition (18) for replication vs diversification [PAGE 17]
- Value of info equations (22)-(24) [PAGES 31-32]
- Sortino ratio definition [PAGE 34]
- Cross-validation Table 10 [PAGE 52]
Units: dollars, probability dimensionless, fantasy points dimensionless, lambda dimensionless risk trade-off.

RETROCAUSAL_GENEALOGY: Historical lineage: Hunter et al. (2016) [22], Fry/Lundberg/Ohlmann [16], Becker and Sun [5], Bergman and Imbrogno [6], Kaplan and Garstka [24], Clair and Letscher [9], Morton et al. [27] mean-variance benchmark, Sklar 1959 copula, Nemhauser et al. [30] submodularity 1-1/e, Markowitz mean-variance, parimutuel betting economics [4,33,39,43], Thaler & Ziemba 1988. Multi-week traps: NFL high variance due to 16 games vs NBA/MLB 82/162; single-season inference difficulty; week 7 Fournette-Ivory late news; week 16 Funchess-Byrd; week 9 Ezekiel Elliott momentum; week 12 Brady-Miami; week 10 Stafford prediction; Week 3 Vikings stack; Week 10 Keenum stack. Multi-week trap: overfitting to one NFL season, high variance of cumulative P&L, late-breaking news not captured.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is about the DFS player's recursive reasoning: opponents model us, we model opponents. Crisis habit regression: under pressure, players revert to popular chalk (high ownership) or benchmark mean-max. Counter-trap: strategic model goes against crowd (anti-chalk) using low ownership stacks. Clock: weekly cycle, late news window (hours before games), submission deadline, line lock. Need to discuss hierarchy of beliefs: level-0 naive mean maximizer, level-1 strategic models opponents via Dirichlet, level-2 insider knows p or Wop, value of info diminishes as non-insider gets better (Section 7.2). Collusion as coordinated level-k.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. I need to adapt this to DFS context: veto layers that invalidate a lineup entry. Physical: player inactive/injured (roster size, 11 on field, high injury probability [PAGE 24]); biomechanical: player snap count/target share changes late (Fournette questionable, Ivory underpriced [PAGE 24]); weather: not explicitly detailed in text but implied by late-breaking news/weather re-optimization in Section 8 [PAGE 35]; stadium/turf matchup; opponent quality. Veto proof: a lineup passes all vetoes only if all C=9 players are active, within budget, positional constraints satisfied, no stacked anti-correlation violations, budget lower bound c^T wo >= Blb (0.99B) [PAGE 10], diversity constraint w^T w* <= gamma [PAGE 20]. I'll formulate veto indicators V_p in {0,1}.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll create 3 counterfactual veto scenarios based on the paper:
1. Late-breaking injury veto: Fournette questionable -> Ivory underpriced. If not updated, mu_delta stale. Veto: entry containing Fournette at 9000 price vs Ivory 5900 [PAGE 24]. Prediction: strategic model with updated mu dominates by exploiting 60% opponent ownership of Ivory; p(loss) shifts.
2. Stacking copula breakdown veto: Independence vs stacking vs mixture. If q estimated wrong (0.35 top-heavy [PAGE 43]) and actual stacking higher, covariance terms wrong. Veto: QB-WR stack from same team fails because game script negative correlation (anti-stack in hockey analogy [PAGE 23]). Prediction: expected P&L overestimated by >10% if q misspecified.
3. Order statistic tail estimation veto: Small O vs large O. Appendix A efficient MC for large O uses normal approximation for deep tail percentiles (99.0th/99.5th [PAGE 40]). If O is small (O=1 to 1000 [PAGE 39]) or deep tail rank r' = O+N-1, empirical CDF cannot estimate quantile q=1-10^-5. Veto: top-heavy rank 1 payout quantile misestimated. Prediction: lambda* biased toward 0, replication suboptimal, expected P&L drops >350% ROI claim fails.

Word count check: Need >=1000 words total across sections. THINK_TRACE alone >=400. I'll ensure all sections are substantive.

Strict formatting: XML sections exactly. No betting lines (spreads, totals, moneylines, odds). I must avoid saying "odds" or "spread" etc. I can mention probabilities, payoffs, rewards, entry fees, but not betting lines.

Let me draft carefully.

THINK_TRACE: I'll write ~500 words. Cover:
- Derivation from constraints to objective.
- Double-up vs top-heavy connection (1 is special case of 2 [PAGE 7]).
- Mean-variance reduction via order statistics and Proposition 4.1.
- Dirichlet-multinomial DGP and copula Sklar.
- Algorithms 2-7 and submodularity 1-1/e.
- Gray zones: normality assumption breakdown with skew (Remark 4.1 [PAGE 13]), median vs mean cutoff, finite O asymptotic (Proposition 5.1 limit O->infty [PAGE 15]), estimation error in mu_delta and Sigma_delta (Section 6.2 [PAGE 24]), late news not captured, single-season high variance (Section 6 [PAGE 24]), insider value diminishing with better opponent modeling (Section 7.2 [PAGE 32]), collusion upper bound stylized assumption (Section 7.3 [PAGE 33]), Dirichlet regression feature misspecification (Brady-Miami [PAGE 28]), cross-validation variation 3 best [PAGE 52].

SOURCE_OPERATORS_AND_EQUATIONS: Include equations with citations. Need to be formal LaTeX.

RETROCAUSAL_GENEALOGY: Cover Hunter et al., Morton et al., Sklar, Nemhauser, parimutuel literature, mean-variance. Multi-week traps: NFL season short (17 weeks), high variance, late news windows week 7, 9, 12, 16, 10. Ground truth dependency of 10% gain (Section 7.1 [PAGE 30]).

RECURSIVE_THEORY_OF_MIND: Level-k reasoning. Crisis habit regression: under time pressure, revert to benchmark Model 1 (max expected points) or chalk ownership. Counter-trap: Algorithm 7 diversification gamma=6, anti-stacking? Actually stacking for variance. Going against crowd examples (Week 3 Vikings, Week 10 Keenum). Clock: submission deadline, line lock, hours before games re-optimization (Section 8 [PAGE 35]). Insider trading as information asymmetry collapsing recursion.

CROSS_LAYER_VETO_ADJUDICATION: Define veto layers:
- Layer 1 Feasibility: sum wp=C, budget, positional constraints [PAGE 5].
- Layer 2 Behavioral feasibility: c^T wo >= Blb=0.99B for opponents [PAGE 10], accept-reject Algorithm 1.
- Layer 3 Physical availability: player active/injured (roster >45, 11 on field [PAGE 24]), late injury news (Fournette, Parker, Clay, Shepard, Powell, Kelce week 5 [PAGE 24]).
- Layer 4 Biomechanical usage: snap count/target share late news (Ivory over Fournette [PAGE 24], Byrd over Funchess [PAGE 24]).
- Layer 5 Environmental/matchup: Brady-Miami mismatch [PAGE 28], weather implied in Section 8 re-optimization [PAGE 35].
- Veto proof: entry e passes iff conjunction of all layer indicators =1. Diversification constraint w_i^T w_j <= gamma [PAGE 20].

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios with predictions.
Scenario 1: Stale mu_delta injury veto. Prediction.
Scenario 2: Copula q misspecification veto. Prediction.
Scenario 3: Deep-tail order statistic estimation veto (small O or large O deep tail). Prediction.

I must ensure no betting lines. I will not use the word "odds" or "spread" or "moneyline" or "total" in betting sense. I can use "total" as in sum but maybe avoid to be safe. "Total dollar value" appears in source but I won't reproduce betting terminology.

Let's write.

Need citations [PAGE N]. I'll reference pages from the provided text. The pages are labeled [PAGE 1 of 53] etc. I will use [PAGE 5], [PAGE 6], etc.

Word count: I'll aim for ~1500-2000 words total to be safe.

Let's begin drafting each section.

THINK_TRACE:
Start with problem setup: P athletes, delta in R^P, mean mu_delta, covariance Sigma_delta. Binary portfolio w in {0,1}^P. Constraints [PAGE 5]: sum wp = C (C=9 NFL), sum cp wp <= B, wp binary, positional constraints, diversity constraints. W feasible set.

Opponents: O opponents, portfolios wo. Realized points F = w^T delta, Go = wo^T delta. Ranked by order statistics G(r).

Double-up [PAGE 6]: top r portfolios earn R. N entries. Objective (1) max_w P{w^T delta > G(r')(Wop, delta)} where r' = O+1-r. This is probability of beating stochastic benchmark.

Top-heavy [PAGE 7]: payoffs R1>...>RD>RD+1=0, ranks r0<...<rD. Objective (2) sum over entries i and tiers d of (Rd - Rd+1) P{wi^T delta > G(r'd)_{-i}}. Strictly speaking ties negligible but accounted numerically [PAGE 7 footnote 4].

Connection: double-up is special case of top-heavy [PAGE 7]. Solve double-up first via mean-variance.

Mean-variance: Define Yw = w^T delta - G(r'). Mean and variance in (11) [PAGE 12]. Proposition 4.1 [PAGE 11-12]: if mu_Yw < 0 for all w, optimal w in argmax {mu_Yw + lambda sigma^2_Yw}, lambda >=0 (seek high mean AND high variance because out of money). If some mu_Yw >=0, argmax {mu_Yw - lambda sigma^2_Yw} (seek high mean low variance). This maps to Algorithm 2 [PAGE 12]. Skew caveat Remark 4.1 [PAGE 13]: if Yw skewed, mean-median mismatch causes wrong variance direction. Algorithm 3 fixes by considering both.

Top-heavy single entry [PAGE 14-15]: Assumption 5.1 mu_Y^d_w < 0 (out of money). Assumption 5.2 Cov(delta_p, G(r'd)) constant across d [PAGE 15]. Proposition 5.1 asymptotic O->infty justifies [PAGE 15]. Algorithm 4 [PAGE 15]: argmax {w^T mu_delta + lambda (w^T Sigma_delta w - 2 w^T sigma_delta,G(r'))}.

Multiple entries: Parimutuel aside [PAGES 16-18]. Horses = feasible teams. WTA parimutuel expected gain (17) [PAGE 17]: mu_{k+1}^h = ... saturation effect strictly decreasing in k. Partial ordering. Algorithm 5 greedy optimal [PAGE 17]. Replication vs diversification condition (18) [PAGE 17]: replicate if mu_1^1/mu_1^2 > (O1+2)/O1. In DFS, Oh small -> diversification favored [PAGE 17].

Difference parimutuel vs DFS [PAGE 19]: reward independence lost. Prize always awarded to best among submitted entries. Clusters argument -> more diversification.

Algorithms 6/7 [PAGES 19-21]: Greedy with backtracking (6) vs without (7). Diversification constraint w^T w*_i <= gamma [PAGE 20]. gamma=6 = C-3 optimal [PAGE 21]. Algorithm 7 preferred, 5-20% better expected value [PAGE 21]. Submodularity [PAGE 21-22]: objective monotone submodular, Nemhauser et al. [30] gives 1-1/e approx for idealized greedy, but diluted because we can't find true argmax wi_hat and use mean-variance proxy.

Numerical experiments [PAGES 22-26]: 2017 NFL season, 17 weeks. FanDuel. Top-heavy O~200k, quintuple-up O~10k, double-up O~30k. Entry costs $1 top-heavy, $2 others. N=50,25,10. Strategic model Algorithm 7 gamma=6. Benchmark models don't model opponents. Results: top-heavy strategic cumulative profit $280.74 vs benchmark $91.50, >3x [PAGE 22]. ROI >350% on $75.76 [PAGE 22]. House edge ~15% [PAGE 6], average player loses ~15% [PAGE 6]. Week 10 in-model: top-heavy strategic E(P&L)=578.6, sd=2953.8, p(loss)=0.58 vs benchmark 86.3, 694.5, 0.46 [PAGE 25]. Replication vs diversification [PAGE 25]: top-heavy expected P&L drops with replication; quintuple/double-up increase with replication, but they used diversification for lower variance.

Value of modeling opponents [PAGES 30-31]: top-heavy total expected P&L over 17 weeks: benchmark ~$1,400; case (a) deterministic p ~$5,400; case (b) Dirichlet with 2 features ~$5,800; case (c) full ~$6,000. Additional ~10% from precise modeling. Ground truth dependency.

Insider trading [PAGES 31-33]: Experiment 1 edge ~20% top-heavy, 1% quintuple-up, 2% double-up [PAGE 32]. Weekly top-heavy increase 1% to 50% [PAGE 32]. Experiment 2 similar; value of Wop over p small when O large because Var(G(r')|delta,p) -> 0 as O->infty [PAGE 32].

Collusion [PAGES 33-34]: N_collude players, Emax entries each. Assume non-colluders identical portfolios (stylized upper bound [PAGE 33]). Table 2 [PAGE 34]: Emax=50, N_collude=5 -> expected P&L increase 44%, Sortino +63%, loss prob -8%. Collusion win-win: higher mean, lower downside risk. Benefits decrease with Emax.

Parameters Appendix C [PAGES 42-43]: mu_delta from FantasyPros day before games. Sigma_delta decomposition rho_delta from RotoViz (static), sigma_delta weekly. delta ~ MVN(mu_delta, Sigma_delta) [PAGE 43]. Stacking q: 0.35 top-heavy, 0.25 quintuple-up, 0.20 double-up [PAGE 43]. Blb=0.99B [PAGE 43]. gamma=6 [PAGE 43]. Lambda grid (0.00,0.01,...,0.20) [PAGE 43]. HPC, Gurobi BQP solver [PAGE 43].

Gray zones / breakdown regimes:
- Normality: delta assumed MVN [PAGE 43]; if skew, Algorithm 2/3 mismatch [PAGE 13]. Proposition 4.1 insights don't rely on normality but implementation does.
- Finite O: Proposition 5.1 limit O->infty [PAGE 15]; actual O~200k small relative to feasible lineups (~2e13 [PAGE 19]), top D teams not identical, weak covariance dependence [PAGE 15].
- Estimation error: mu_delta stale (Fournette/Ivory week 7 [PAGE 24]; Byrd/Funchess week 16 [PAGE 24]); momentum feature omitted (Ezekiel Elliott week 9 [PAGE 28]; Adrian Peterson [PAGE 29]); FantasyPros feature error (Brady-Miami week 12 [PAGE 28]).
- Single season inference: high variance, 17 weeks [PAGE 24]; NFL roster/injury variance high vs NBA/MLB [PAGE 24].
- Submodularity guarantee diluted [PAGE 22].
- Insider value diminishes as non-insider modeling improves [PAGE 32].
- Collusion upper bound stylized; non-colluders unlikely identical [PAGE 33].
- Small-O contests O=1 to 1000 [PAGE 39]; deep tail quantile estimation hard [PAGE 40]; normal approximation for 99.0th/99.5th percentiles [PAGE 40].

Good. Now source operators equations. I'll list LaTeX.

Need to ensure >=1000 words. Let's write.

I must be careful not to mention "odds" etc. I'll avoid.

Let's compose final output.
</NATIVE_REASONING>

<THINK_TRACE>
The source text establishes a coherent, opponent-aware portfolio optimization framework for Daily Fantasy Sports (DFS), and my derivation proceeds through several nested hops. First, the feasible set W is defined on page 5 by binary selection variables w_p ∈ {0,1}, a cardinality constraint ∑_p w_p = C (C = 9 for NFL), a budget constraint ∑_p c_p w_p ≤ B, positional constraints (exactly one QB, two RB, etc.), and diversity constraints (no more than four athletes from one NFL team). The random performance vector δ ∈ R^P has mean µ_δ and covariance Σ_δ; realized entry points are F = w^⊤δ, while opponent O portfolios w_o yield G_o = w_o^⊤δ. Because contests rank all portfolios, the relevant benchmark is stochastic: G(r′), the r′th order statistic of opponent scores.

Second, the double-up formulation on page 6 maximizes P{w^⊤δ > G(r′)(W_op, δ)}, where r′ = O + 1 − r. Page 7 notes this is a special case of the top-heavy problem. In top-heavy contests, payoffs R_1 > … > R_D > R_{D+1} := 0 apply to rank tiers, and page 7 equation (2) generalizes the objective to N entries: max_W ∑_{i=1}^N ∑_{d=1}^D (R_d − R_{d+1}) P{w_i^⊤δ > G(r′_d)_{−i}(W_{−i}, W_op, δ)}, where the order statistic excludes entry i to prevent self-competition.

Third, pages 11–15 connect this to mean-variance optimization. Define Y_w := w^⊤δ − G(r′). Its mean and variance are given in equation (11) on page 12, involving µ_{G(r′)}, σ²_{G(r′)}, and the covariance vector σ_{δ,G(r′)}. Proposition 4.1 on page 11 states that if µ_{Y_w} < 0 for all w (out of the money), the optimizer lies in argmax_w {µ_{Y_w} + λσ²_{Y_w}}, λ ≥ 0: the player should simultaneously raise mean and variance because the payoff threshold is a median-like cutoff, not a mean target. If some µ_{Y_w} ≥ 0, the regime switches to argmax_{w:µ_{Y_w}≥0} {µ_{Y_w} − λσ²_{Y_w}}. Page 13, Remark 4.1, audits the gray zone: if Y_w is skewed, mean and median diverge, so the line-1 branch in Algorithm 2 may select low variance when high variance is required; Algorithm 3 repairs this by evaluating both branches.

Fourth, pages 14–16 impose Assumption 5.1 (µ_{Y_w^d} < 0 for all tiers, typical because only the top ~20% cash) and Assumption 5.2 (covariance Cov(δ_p, G(r′_d)) is approximately invariant across d). Proposition 5.1 on page 15 justifies this asymptotically as O → ∞, though page 15 cautions that actual O ≈ 200,000 is small relative to ~2×10¹³ feasible lineups, so top teams are not identical and covariance dependence on d is only weak. Algorithm 4 on page 15 therefore maximizes w^⊤µ_δ + λ(w^⊤Σ_δw − 2w^⊤σ_{δ,G(r′)}).

Fifth, pages 16–21 extend to multiple entries via parimutuel betting. Page 17 equation (17) gives the marginal expected gain µ_{k+1}^h in a parimutuel winner-takes-all market, which is strictly decreasing in k (saturation effect). Page 17 equation (18) gives the replication-versus-diversification boundary: replicate if µ_1^1/µ_1^2 > (O_1 + 2)/O_1. Page 17 notes DFS opponent wagers O_h are typically small, favoring diversification. Page 19 identifies the structural break: parimutuel reward independence fails in DFS because the prize is always awarded to the best submitted entry, inducing cluster-based correlation arguments for even greater diversification. Algorithms 6 and 7 on pages 20–21 implement greedy entry construction with diversification constraint w^⊤w*_i ≤ γ; page 21 identifies γ = 6 (= C − 3) as optimal and reports Algorithm 7 is roughly 5–20% better in expected value than Algorithm 6. Page 21–22 invokes Nemhauser et al. [30] submodularity (1 − 1/e ≈ 63.2% guarantee), but page 22 dilutes this: the true best entry ẇ_i is generally not found, and the mean-variance proxy is only approximate.

Gray-zone audit: (1) Normality of δ is assumed on page 43 for sampling, though page 13 notes Proposition 4.1 insights do not strictly require it; skew breaks the mean–median mapping. (2) Finite-O asymptotics are weak because O ≪ number of feasible portfolios, page 15. (3) Parameter estimation is fragile: µ_δ is obtained a day before games and misses late news (Fournette/Ivory week 7, Byrd/Funchess week 16, page 24), momentum effects (Ezekiel Elliott week 9, Adrian Peterson, pages 28–29), and venue features (Tom Brady–Miami week 12, page 28). (4) A single 17-week NFL season has high variance; page 24 contrasts NFL’s 16-game team season with 82/82/162 games in other sports. (5) Insider value on page 32 is only ~20% in top-heavy contests because good non-insider modeling of p already captures most opponent behavior, and page 32 notes Var(G(r′)|δ,p) → 0 as O → ∞, so granular W_op adds little when O is large. (6) Collusion on page 33–34 is an upper bound because it assumes non-colluders submit identical portfolios, which is unrealistic. (7) Dirichlet regression feature misspecification is documented on pages 28–29 and 50–51; variation 3 wins cross-validation on page 52 but extreme Bayesian p-values occur ~12.5–19.5% of the time.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Feasible set (page 5): W = { w ∈ {0,1}^P : ∑_{p=1}^P w_p = C, ∑_{p=1}^P c_p w_p ≤ B, positional constraints, diversity constraints }, with C = 9, P ≈ 100–300, budget B.

Realized scores (page 5): F := w^⊤δ; G_o := w_o^⊤δ for o = 1,…,O opponents.

Double-up objective (page 6, eq. 1): max_{w∈W} P{ w^⊤δ > G(r′)(W_op, δ) }, where r′ := O + 1 − r. Top r portfolios earn payoff R; entry fee normalized to 1; house cut ≈15% (page 6), implying average DFS player loses ≈15% and NPV is negative absent skill.

Top-heavy objective (page 7, eq. 2): max_{W∈W^N} ∑_{i=1}^N ∑_{d=1}^D (R_d − R_{d+1}) P{ w_i^⊤δ > G(r′_d)_{−i}(W_{−i}, W_op, δ) }, with payoffs R_1 > … > R_D > R_{D+1} := 0 and ranks 0 := r_0 < r_1 < … < r_D. Tie term neglected in (2) but accounted numerically (page 7 footnote 4).

Dirichlet-multinomial DGP (pages 8–9): p_QB ∼ Dir(α_QB); selected QB k with probability p_{QB,k}, i.e. Multinomial(1, p_QB). Dirichlet regression (page 9, eqs. 4–5): α_QB = exp(X_QB β_QB); example α_QB,t = exp(β^0_QB 1 + β^1_QB f_QB,t + β^2_QB c_QB,t + β^3_QB µ_QB,t). Bayesian posterior (page 9, eq. 6): p(β_QB | {p_QB,t}_{t=1}^{T−1}) ∝ ∏_{t=1}^{T−1} Dir(p_QB,t | exp(X_QB,t β_QB)).

Copula (page 8, eq. 3, Sklar’s theorem): F_{w_o}(w_QB,…,w_D) = C(F_QB(w_QB),…,F_D(w_D)). Three copulas on page 9–10: independence C_ind(u) = ∏_i u_i; stacking C_stack (QB then main WR from same team); mixture C = (1−q)C_ind + qC_stack.

Opponent generation (page 10, Algorithm 1): draw (p_QB,…,p_D) ∼ (Dir(α_QB),…,Dir(α_D)); Stack ∼ Bernoulli(q); draw Multinomials without replacement; accept-reject if w_o ∈ W and c^⊤w_o ≥ B_lb, with B_lb = 0.99B calibrated to ≈99.5% budget usage (page 43).

Mean–variance reduction (page 12, eq. 11): Y_w := w^⊤δ − G(r′); µ_{Y_w} := w^⊤µ_δ − µ_{G(r′)}; σ²_{Y_w} := w^⊤Σ_δw + σ²_{G(r′)} − 2w^⊤σ_{δ,G(r′)}.

Proposition 4.1 (pages 11–12): Case (i) µ_{Y_w} < 0 ∀w ⇒ w* ∈ { w(λ) : w(λ) ∈ argmax_{w∈W} (µ_{Y_w} + λσ²_{Y_w}), λ ≥ 0 }. Case (ii) ∃w : µ_{Y_w} ≥ 0 ⇒ w* ∈ { w(λ) : w(λ) ∈ argmax_{w∈W, µ_{Y_w}≥0} (µ_{Y_w} − λσ²_{Y_w}), λ ≥ 0 }.

Algorithms (pages 12, 15, 20–21): Algorithm 2 single-entry double-up via grid λ; Algorithm 3 skew-robust two-branch version; Algorithm 4 top-heavy single entry argmax_w { w^⊤µ_δ + λ(w^⊤Σ_δw − 2w^⊤σ_{δ,G(r′)}) }; Algorithm 6 top-heavy N entries with backtracking and constraint w^⊤w*_i ≤ γ; Algorithm 7 without backtracking (preferred). Page 21: γ = C − 3 = 6 optimal; expected reward nearly doubles with diversification.

Parimutuel expected gain (page 17, eq. 17): µ_{k+1}^h = q_h(O+N) [ (k+1)/(O_h + k+1) − k/(O_h + k) ] × O_h/(O_h + k+1) after algebra, strictly decreasing in k. Replication/diversification threshold (page 17, eq. 18): (n_1,…,n_H) = (2,0,…,0) if µ_1^1/µ_1^2 > (O_1+2)/O_1, else (1,1,0,…,0).

Assumptions for top-heavy (page 15): Assumption 5.1 µ_{Y_w^d} < 0 for d = 1,…,D (out-of-the-money); Assumption 5.2 Cov(δ_p, G(r′_d)) = Cov(δ_p, G(r′_{d′})) ∀d,d′,p. Proposition 5.1 (page 15): as O → ∞ with IID opponents, equality holds.

Insider value (pages 31–32): Eq. (22) max_{W∈W^N} E_p[ E_{δ,W_op}[Reward(W,δ,W_op)|p] ]; Eq. (23) insider knows true p; Eq. (24) insider knows W_op. Experiment 1 edge: ≈20% top-heavy, 1% quintuple-up, 2% double-up (page 32). Weekly top-heavy insider gain varies 1%–50% (page 32, Figure 9). Value of W_op over p small when O large because Var(G(r′)|δ,p) → 0 (page 32).

Collusion (page 34, Table 2): Emax = 50; N_collude = 5 raises expected 17-week P&L by 44%, average weekly Sortino ratio SR_i := (E[P&L_i] − T)/DR_i, T = 0, DR_i := √E[P&L_i² × 1{P&L_i ≤ T}] by 63%, and lowers average weekly loss probability by 8%. Stylized assumption: non-colluders submit identical Emax-entry portfolios (page 33), an upper bound.

Parameters (page 43): µ_δ from FantasyPros day before games; Σ_δ decomposed into static ρ_δ from RotoViz and weekly σ_δ; δ ∼ MVN_P(µ_δ, Σ_δ). Stacking q: 0.35 top-heavy, 0.25 quintuple-up, 0.20 double-up. Λ grid: (0.00, 0.01, …, 0.20). Blb = 0.99B. γ = 6. Gurobi BQP solver; HPC 2.6 GHz Intel E5; up to 16 GB RAM for top-heavy.

Cross-validation (page 52, Table 10): normalized scores; variation 3 (cost + expected points + FantasyPros f) wins across positions and contest structures.

Breakdown/singularity regimes: small-O contests O = 1–1,000 (page 39); deep-tail quantile q = 1 − 10⁻⁵ cannot be estimated with moderate Monte Carlo samples (page 40), requiring normal approximation matched at 99.0th/99.5th percentiles; skew in Y_w invalidates mean–median branch logic (page 13); stale µ_δ under late injury/news (page 24); single-season high variance precludes strong inference (page 24).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s intellectual lineage begins with Hunter, Vielma, and Zaman (2016) [22], the closest prior work, which constructs winner-takes-all portfolios via greedy linear integer programs maximizing expected fantasy points subject to variance lower bounds and correlation upper bounds, but explicitly ignores opponent behavior. Haugh and Singal extend this by modeling W_op, handling double-up and top-heavy payoffs directly, and reducing the problem to binary quadratic programs. Season-long antecedents include Fry, Lundberg, and Ohlmann [16] and Becker and Sun [5]; survivor-pool strategies appear in Bergman and Imbrogno [6]; office-pool elimination-tournament work includes Kaplan and Garstka [24] and Clair and Letscher [9]. The mean-variance engine is adapted from Morton et al. [27] on maximizing the probability of exceeding a stochastic benchmark, itself rooted in the Markowitz mean-variance tradition. Opponent selection is modeled through Sklar’s theorem [37] copulas, with Dirichlet regression for positional marginals. The parimutuel aside on pages 16–19 draws on the economics of parimutuel betting [4, 33, 39, 43], including Thaler and Ziemba [43], to derive the greedy wagering algorithm. The 1 − 1/e performance guarantee invokes Nemhauser, Wolsey, and Fisher [30] on monotone submodular maximization.

Multi-week traps are concentrated in the 2017 NFL season’s structure. Page 24 emphasizes that NFL contests have inherently high variance: rosters exceed 45 athletes with only 11 on the field, injury probability is high, and teams play only 16 games versus 82 (NBA/NHL) or 162 (MLB), making cumulative P&L inference from 17 weeks unreliable. Page 24 records specific late-breaking failures: week 5 injuries to Devante Parker, Charles Clay, Sterling Shepard, Bilal Powell, and Travis Kelce impacted 56, 70, 4, 44, and 25 entries respectively; week 7 Leonard Fournette was questionable while Chris Ivory was underpriced ($5,900 vs $9,000) and ~60% of opponents picked Ivory; week 16 Devin Funchess was demoted while Damiere Byrd was underpriced ($4,900 vs $7,000), yet 52 strategic entries still picked Funchess. Page 28–29 documents momentum omissions: Ezekiel Elliott was ~80% owned in week 9 double-up after strong weeks 7–8, but the 95% interval predicted 0–10% ownership; Adrian Peterson was under-predicted due to omitted momentum. Page 28 documents feature misspecification: FantasyPros overestimated Tom Brady and underestimated Russell Wilson in week 12 double-up because it ignored Brady’s poor Miami record. Page 30 notes the additional ~10% expected P&L from precise opponent modeling is ground-truth dependent; if opponents were more predictable via better features, the gain from case (c) over case (a) would be larger. Page 32’s insider experiments show weekly top-heavy edge ranging from 1% (week 6) to 50% (week 16), demonstrating that information value is episodic and tied to opponent mispricing, not a static season-level constant.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind in this framework operates across belief levels. Level-0 (non-strategic) players solve max_{w∈W} w^⊤µ_δ, effectively benchmark Model 1 (page 22), ignoring opponents and treating payoff thresholds as deterministic. Level-1 players (the strategic model) explicitly model opponents via the Dirichlet-multinomial process and copula, forming beliefs about p = (p_QB,…,p_D) and simulating W_op. Level-2 insiders observe p or W_op directly (pages 31–33), collapsing uncertainty about opponents and leaving only δ as random. The value of information diminishes as level-1 modeling improves: page 30 shows deterministic p (case a) captures most of the strategic gain, with only ≈10% marginal value from cases (b) and (c); page 32 states that sophisticated non-insiders reduce the value of inside information, and page 32 notes Var(G(r′)|δ,p) → 0 as O → ∞, making granular W_op redundant in large contests.

Crisis habit regression appears when time pressure or stale data forces regression to simpler heuristics. Page 24 describes how the authors failed to update µ_δ after late news, causing the model to regress to priors: Fournette overpriced at 9,000 while Ivory underpriced at 5,900; Byrd underpriced at 4,900 while Funchess at 7,000. Under crisis conditions (hours before kickoff, injury reports, weather changes), level-1 players tend to revert to level-0 mean maximization or to popular chalk ownership, losing the anti-crowd edge. Page 43 notes µ_δ was typically obtained a day before games and mostly ignored last-hour developments, which is exactly when crisis habit regression is most costly.

The counter-trap is intentional anti-chalk construction through variance seeking and diversification. Page 15 Assumption 5.1 places the optimal portfolio out of the money, so high variance is desirable. Pages 26–27 and Appendix D (page 46) describe successful against-the-crowd entries: week 3 stacked four underpriced Minnesota Vikings (Diggs, Thielen, Forbath, defense) each <5% owned; week 10 started C. Keenum (<3% owned) with Vikings WRs and kicker, ranking 211st out of 178,571 while all 50 benchmark entries took the popular Ben Roethlisberger. Page 46 confirms the strategic model picked less popular QBs on average (6.88% vs 12.74% ownership), at lower cost (~3% lower) and lower expected points (~9% lower), precisely because it exploited opponent mispricing rather than regressing to mean points.

The clock is the weekly submission cycle with a hard line-lock deadline. Page 35 calls for very fast re-optimization heuristics when injuries, availability, or weather become known in the hours and minutes before submission. Page 43 describes Monte-Carlo estimation running one hour per week on a single core, and page 35 notes that full portfolio re-optimization may be infeasible under time constraints, necessitating fast heuristic updates. The recursive loop therefore resets every week: update µ_δ and Σ_δ, refit Dirichlet regression, regenerate opponent simulations, resolve BQPs, and submit before lock. Missing this clock window—e.g., failing to incorporate Fournette’s questionable status—induces crisis habit regression and forfeits the level-1 counter-trap advantage.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A candidate DFS entry is admitted only if it passes a stack of veto layers; any single veto nullifies the entry. I formalize each layer with an indicator V^{(\ell)} ∈ {0,1}; the entry e is feasible iff ∏_{\ell} V^{(\ell)}(e) = 1.

Layer 1 — Combinatorial feasibility (page 5): V^{(1)} = 1 iff ∑_p w_p = C, ∑_p c_p w_p ≤ B, positional requirements hold (exactly 1 QB, 2 RB, 3 WR, 1 TE, 1 K, 1 D), and diversity constraints (≤4 athletes from one NFL team) hold. Failure mode: budget overrun or illegal position count.

Layer 2 — Behavioral opponent feasibility (page 10): For simulated opponents in Algorithm 1, V^{(2)} = 1 iff c^⊤w_o ≥ B_lb with B_lb = 0.99B (page 43). This is a behavioral veto, not a physical one, reflecting that opponents almost never leave budget unspent. Failure mode: simulated opponent portfolio leaves >1% of budget unused and is rejected.

Layer 3 — Physical availability (page 24): V^{(3)} = 1 iff every selected athlete is active and not ruled out by injury. NFL rosters exceed 45 athletes but only 11 are on the field; injury probability is high. Page 24 lists week 5 injuries (Parker, Clay, Shepard, Powell, Kelce) that invalidated 56, 70, 4, 44, and 25 entries respectively. Failure mode: selected player inactive at lock.

Layer 4 — Biomechanical usage (page 24): V^{(4)} = 1 iff projected snap count / target share matches the price-implied role. Page 24’s Fournette–Ivory case: Fournette questionable at $9,000 while Ivory expected more snaps at $5,900; an entry rostering Fournette at full price violates usage-value consistency. Page 24’s Byrd–Funchess week 16 case: Byrd underpriced at $4,900 vs Funchess at $7,000 despite Byrd being the expected main WR. Failure mode: high-priced player demoted in snap hierarchy while low-priced player inherits volume.

Layer 5 — Environmental / matchup (pages 28, 35): V^{(5)} = 1 iff venue-specific and matchup features are current. Page 28 documents Tom Brady’s historically poor performance in Miami, which FantasyPros failed to capture in week 12, causing ownership misprediction. Page 35 identifies weather, injuries, and availability as re-optimization triggers. Failure mode: venue mismatch (e.g., dome vs outdoor, wind, extreme temperature) not reflected in µ_δ or ownership p.

Layer 6 — Diversification / anti-correlation (pages 20–21): For portfolios of N entries, V^{(6)} = 1 iff w_i^⊤w_j ≤ γ for all pairs, with γ = 6 = C − 3 in the preferred Algorithm 7. Failure mode: excessive player overlap across entries, which concentrates cluster risk and wastes the N-entry optionality that top-heavy payoffs reward.

Veto proof: An entry e is submitted only if V^{(1)} ∧ V^{(2)} ∧ V^{(3)} ∧ V^{(4)} ∧ V^{(5)} ∧ V^{(6)} = 1. If any layer returns 0, the entry is rejected before the BQP objective is evaluated. This layered veto structure explains why the paper’s parameter updates (page 43) and late-news re-optimization (page 35) are not optional refinements but necessary conditions for the mean–variance optimizer to remain valid: stale µ_δ or Σ_δ effectively sets V^{(4)} or V^{(5)} to 0 for entries that would otherwise pass Layer 1, causing the optimizer to select vetoed athletes and forfeit expected P&amp;L.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Stale µ_δ injury veto. Counterfactual: In week 7, µ_δ is not updated after Leonard Fournette is listed questionable. The optimizer prices Fournette at 17.27 expected points and $9,000, while Chris Ivory is priced at 6.78 expected points and $5,900 (page 24). Verifiable veto: V^{(4)} = 0 for Fournette because his snap share is uncertain, while V^{(4)} = 1 for Ivory given expected volume. Around 60% of double-up opponents picked Ivory (page 24), implying the crowd already corrected the price-implied role. Prediction: A level-1 model that enforces the injury veto and pivots to Ivory gains a negative-ownership, positive-usage edge; expected P&amp;L increases relative to the stale model by an amount bounded below by the insider Experiment 1 edge of ≈20% in top-heavy contests (page 32), while the loss probability falls below the strategic baseline p(loss) = 0.58 (page 25). The veto is falsifiable by comparing week-7 realized P&amp;L for entries containing Ivory versus Fournette at equivalent salary positions.

Scenario 2 — Copula q misspecification veto. Counterfactual: The stacking probability q is calibrated to 0.35 for top-heavy contests (page 43), but the true strategic stacking rate in a given week is higher because opponents chase correlation. Verifiable veto: V^{(5)} = 0 for QB–main-WR stacks from teams with negative game-script correlation (e.g., heavy underdog QB with low pass volume), because the stacking copula assumes positive correlation (page 10). Prediction: If q is underestimated, the simulated opponent distribution W_op understates overlap variance, biasing σ_{δ,G(r′)} and inflating the value of high-variance portfolios. Expected P&amp;L is overstated; the Sortino ratio in Table 2 (page 34) falls by more than the nominal 63% collusion gain because downside risk DR_i rises. Falsification: Compare posterior predictive “most-picked athlete” extremes in Table 9 (page 51); extreme low percentiles (<2.5%) indicate the model under-predicts chalk ownership, consistent with q misspecification, occurring ≈19.5% of the time in double-up contests (page 50).

Scenario 3 — Deep-tail order-statistic estimation veto. Counterfactual: A top-heavy contest targets rank r′ = O + N − 1 (the #1 opponent), corresponding to quantile q = 1 − 10⁻⁵ when O ≈ 100,000 (page 40). Verifiable veto: The empirical CDF from a moderate Monte Carlo sample O_MC = 10,000 cannot resolve quantiles deeper than roughly 1/O_MC = 10⁻⁴; setting G(r′) via normal approximation matched at the 99.0th and 99.5th percentiles (page 40) is a model assumption, not an observation. If O is small (O = 1–1,000, page 39), the large-O approximation fails entirely. Prediction: Under this veto, λ* is biased toward zero because the tail payoff moments µ_{G(r′)} and σ²_{G(r′)} are misestimated, collapsing the top-heavy optimizer toward mean maximization (λ ≈ 0). The >350% 17-week ROI claim (page 22) fails; expected P&amp;L reverts toward the benchmark level ($86.3 in week 10 top-heavy, page 25) and replication becomes near-optimal rather than diversification. Falsification: Re-estimate G(r′) using importance sampling on the deep tail and compare line 4 of Algorithm 4/7; if λ* shifts materially from the reported average ≈0.05 (Table 4, page 45), the veto is active.
</RLVR_COUNTERFACTUAL_VETOES>