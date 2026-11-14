---
source: "2018 - How to Play Strategically in Fantasy Sports (and Win) - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2018"
pages: 30
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4135
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided PDF paper about fantasy sports portfolio optimization. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations.

Let me carefully extract the content and structure the response.

Key elements from the paper:
- Daily Fantasy Sports (DFS), FanDuel and DraftKings control ~95% US market [PAGE 1].
- 80% of players are minnows, sharks use sophisticated techniques [PAGE 1].
- Paper models opponents' behavior explicitly. First academic work to do so strategically [PAGE 1].
- P players, delta ~ N(mu_delta, Sigma_delta) [PAGE 3].
- Portfolio w in {0,1}^P, C=9 players, budget B [PAGE 4].
- Constraints: sum w_p = C, sum c_p w_p <= B, positional constraints [PAGE 4].
- O opponents, W_op = {w_o} [PAGE 4].
- Portfolio points F = w^T delta, opponents G_o = w_o^T delta [PAGE 4].
- Double-up: top r portfolios earn R dollars. r = (O+N)/2, R=2 or r=(O+N)/5, R=5 [PAGE 4].
- Problem: max P{w^T delta > G(r')(W_op, delta)} where r' = O+1-r [PAGE 5].
- Top-heavy: payoffs R_1 > ... > R_D > R_{D+1}=0, percentiles [PAGE 5].
- Objective (2): max sum over d and i of (R_d - R_{d+1}) P{w_i^T delta > G_{-i}(r_d')(W_{-i}, W_op, delta)} [PAGE 5].
- Dirichlet regression for opponents [PAGE 6-9].
- alpha_QB = exp(X_QB beta_QB) [PAGE 7].
- Algorithm 1: accept-reject for feasible portfolios, budget lower bound B_lb [PAGE 8-9].
- Stacking probability q [PAGE 9].
- Mean-variance optimization for stochastic benchmarks [PAGE 10-11].
- Proposition 4.1: cases mu_w < 0 vs mu_w >= 0 [PAGE 10-11].
- Double-up algorithm (Algorithm 2) [PAGE 11-12].
- Y_w = w^T delta - G(r'), normal approximation [PAGE 11].
- Top-heavy: Assumption 5.1 mu_Y_wd < 0 (out-of-the-money) [PAGE 13-14].
- Assumption 5.2 Cov(delta_p, G(r_d')) constant across d [PAGE 14].
- Algorithm 3 [PAGE 14-15].
- Multiple entries: replication for double-up if O->infty, N/O->0 [PAGE 12-13].
- Greedy diversification for top-heavy: W_i = W union {w_i^T w_j* <= gamma} [PAGE 15].
- Numerical experiments: 2017-18 NFL season, first 12 weeks [PAGE 16].
- Top-heavy: O ~ 200,000, quintuple-up ~10,000, double-up ~30,000 [PAGE 16].
- Cost per entry $1 top-heavy, $2 quintuple/double-up [PAGE 16].
- N=50, 25, 10 entries respectively [PAGE 16].
- Strategic vs benchmark [PAGE 16-19].
- Results: strategic cumulative profit $384.74 top-heavy, ~2.5x benchmark, max shortfall $18.5, ROI >750% on $50 [PAGE 18-19].
- House edge ~15%, average player loses ~12*15%*50 = $90 [PAGE 18].
- Week 7 example: Fournette questionable, Ivory underpriced, opponents picked Ivory ~60% [PAGE 19].
- Benchmark Model 1: maximize expected points [PAGE 17].
- Benchmark Model 2: QB-WR stacking constraint [PAGE 17].
- Parameters: mu_delta from FantasyPros, Sigma_delta decomposition, stacking prob q estimated 0.35, 0.25, 0.20 for top-heavy, quintuple-up, double-up [PAGE 18].
- Gamma = 6 [PAGE 18].
- Value of modeling opponents, insider trading [PAGE 22-23].
- Future work: mean-field games, other sports [PAGE 24-25].
- Appendix: efficient sampling of order statistic moments [PAGE 29-30].

Now I need to write the XML sections.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). This should derive the math, audit assumptions, gray zones (normality approximation, out-of-the-money assumption, covariance assumption, insider trading, etc.).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Include equations from the paper with proper citations.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Connect to Morton et al., Hunter et al., mean-variance, order statistics, Dirichlet regression, parimutuel betting, etc. Multi-week traps: NFL season short (16 games), high variance, injury news, last-minute updates.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is about opponents modeling opponents, strategic thinking levels, crisis habit regression (falling back to expected points maximization when stressed), counter-trap (diversification vs replication), clock (weekly deadline, last-minute news).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is about physical constraints that veto model predictions: injuries (Fournette), roster size, playing time, weather (though not explicitly in paper, but biomechanical/physical layer), last-minute news. The paper mentions injuries in week 5 and week 7 as vetoes.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just counterfactual veto scenarios. I need 3 scenarios where the model would be vetoed, with predictions.

Let me draft carefully, ensuring no betting lines (no spreads, totals, moneylines, odds). I must avoid those words entirely. I can mention probabilities, payoffs, entry fees, but not betting terminology.

Word count: >=1000 words total across sections. THINK_TRACE alone >=400 words.

Let me start writing.

THINK_TRACE (>=400 words):
Derive the double-up problem: maximize P{w^T delta > G(r')}. Under normality, Y_w ~ N(mu_Yw, sigma_Yw^2). Then P{Y_w > 0} = 1 - Phi(-mu_Yw/sigma_Yw). Proposition 4.1 gives two regimes. If mu_Yw < 0 for all w, maximize mu_Yw + lambda sigma_Yw^2 (risk-seeking because out of money). If some mu_Yw >= 0, maximize mu_Yw - lambda sigma_Yw^2 (risk-averse). Gray zone: the boundary mu_Yw ≈ 0 causes misclassification between regimes, leading to wrong variance direction (Section 6.3 explicitly admits this for quintuple-up). Top-heavy: sum of weighted exceedance probabilities. Assumption 5.1 says out-of-the-money for all payoff tiers. Assumption 5.2 freezes the cross-covariance vector across tiers. Breakdown regimes: normality fails for NFL player performance (injuries, roster variance), O finite vs O->infty approximation, opponent model misspecification (Dirichlet-multinomial independence vs stacking), insider information asymmetry, weekly deadline clock forcing stale mu_delta estimates. Multi-hop: opponent marginals -> Dirichlet regression -> accept-reject feasible portfolios -> order statistic moments via Monte Carlo -> binary quadratic programs -> portfolio selection. Gray-zone audit: the paper relies on off-the-shelf mu_delta from FantasyPros obtained a day before games, ignoring late-breaking news (Fournette/Ivory example). The 15% house edge means NPV-negative baseline; skill must overcome this. The normal approximation for Y_w was justified by Monte Carlo but only unimodal/symmetric checked, not heavy tails.

SOURCE_OPERATORS_AND_EQUATIONS:
List equations:
- Page 3: delta ~ N(mu_delta, Sigma_delta)
- Page 4: constraints sum w_p = C, sum c_p w_p <= B, w_p in {0,1}
- Page 4: F = w^T delta, G_o = w_o^T delta
- Page 5: max_{w in W} P{w^T delta > G(r')(W_op, delta)}, r' = O+1-r
- Page 5: top-heavy objective eq (2)
- Page 7: alpha_QB = exp(X_QB beta_QB)
- Page 10-11: Proposition 4.1 eq (7) and (8)
- Page 11: mu_Yw = w^T mu_delta - mu_G(r'), sigma_Yw^2 = w^T Sigma_delta w + sigma_G(r')^2 - 2 w^T sigma_delta,G(r')
- Page 12: Algorithm 2 lines 3 and 7
- Page 13-14: top-heavy eq (9)-(12), Assumption 5.1, Assumption 5.2
- Page 14-15: Algorithm 3 line 2
- Page 15: greedy diversification constraint W_i = W ∪ {w_i^T w_j* <= gamma}
- Page 18: q estimated 0.35, 0.25, 0.20; gamma=6
- Page 18: strategic profit $384.74, benchmark $154.5, max shortfall $18.5, ROI >750%
- Page 29-30: order statistic CDF eq (16), large-O limit G(r')|(delta,p) -> F_G|(delta,p)^{-1}(r'/O)

Units: probabilities dimensionless, points in fantasy points (dimensionless score), dollars in USD, entry fee in USD, O and N dimensionless counts, lambda dimensionless risk trade-off parameter, gamma dimensionless overlap cap (max common players).

RETROCAUSAL_GENEALOGY:
Lineage: Morton et al. [21] mean-variance benchmark outperformance -> Hunter et al. [18] integer programming for DFS -> this paper extends to strategic opponent modeling and true payoff structures. Finance literature: outperforming stochastic benchmarks. Dirichlet regression and Dirichlet-multinomial DGP. Order statistics (David & Nagaraja [7]). Parimutuel betting mean-field games [3]. Multi-week traps: NFL season only 16 games per team vs 82 (NBA/NHL) or 162 (MLB), so high variance and small sample. Weekly deadline creates staleness: mu_delta obtained day before games, late injuries (Week 5 Devante Parker, Charles Clay, Sterling Shepard, Bilal Powell, Travis Kelce; Week 7 Fournette/Ivory) veto the pre-game model. Cumulative P&L over 12 weeks has high variance; 12 weeks insufficient to establish outperformance. House edge ~15% means average player loses ~12*15%*50 = $90 over the window.

RECURSIVE_THEORY_OF_MIND:
Level 0: benchmark models maximize expected points, ignore opponents (naive).
Level 1: this paper models opponents via Dirichlet-multinomial marginals and accept-reject feasibility.
Level 2: opponents may also be strategic (stacking, anti-stacking), leading to game-theoretic mean-field setting (acknowledged intractable). Crisis habit regression: under pressure or near mu_Yw ≈ 0, the model regresses to deterministic expected-point maximization or wrong variance sign (quintuple-up error). Counter-trap: diversification vs replication. Double-up favors replication when N/O -> 0; top-heavy favors diversification (greedy with gamma overlap constraint). Clock: weekly submission deadline forces fixed mu_delta; late-breaking news arrives after lock, creating an information asymmetry that sharks exploit but this paper's baseline does not.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: NFL roster >45 players, 11 on field; injuries remove players mid-game (Week 5 examples). Biomechanical/availability: Fournette questionable, priced at 9000, Ivory at 5900; stale mu_delta (17.27 vs 6.78) creates price-performance dislocation. Weather: not explicitly in paper, but physical game conditions affect player performance and are part of delta variance. Veto proof: any model using stale mu_delta is vetoed by late injury news; the accept-reject opponent generator assumes positional marginal independence except ad-hoc stacking, which is vetoed by correlated teammate performance (stacking exists because QB/WR points are strongly correlated). The normality assumption for delta is a veto candidate for NFL due to high injury variance and small sample.

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable counterfactual veto scenarios + predictions.
Scenario 1: Late injury veto. If a star player is declared out within 24 hours of lock after mu_delta is fixed, the model's expected points for that player are stale. Prediction: portfolios containing the injured player will underperform; opponents who pivot to the backup (e.g., Ivory over Fournette) capture value, and the strategic model's edge collapses unless mu_delta is updated.
Scenario 2: Regime misclassification veto at mu_Yw ≈ 0. If the estimated mu_Yw for the double-up/quintuple-up is near zero, Proposition 4.1 regime selection flips variance direction incorrectly. Prediction: the model will either over-increase variance when it should decrease (or vice versa), causing realized P&L to fall below benchmark, as observed in quintuple-up after week 6.
Scenario 3: Opponent model independence veto. If actual opponents exhibit systematic stacking beyond the calibrated q (e.g., q=0.35 top-heavy), the Dirichlet-multinomial independent marginals underestimate tail correlation. Prediction: top-heavy strategic portfolio's right-tail mass is overestimated; realized top-heavy P&L will have lower expected profit and higher probability of loss than simulated.

Make sure no betting lines. I used "payoff", "entry fee", "house edge", "probability", "cash payoff". No spreads, totals, moneylines, odds. Good.

Check word count. I'll aim for substantial depth.

Let's write it out.
</NATIVE_REASONING>

<THINK_TRACE>
The paper's central derivation converts a daily fantasy sports (DFS) contest into a constrained stochastic optimization over binary portfolio vectors w ∈ {0,1}^P. The performance vector δ ∈ R^P is modeled as multivariate normal, δ ~ N(μ_δ, Σ_δ) [PAGE 3]. A portfolio's realized points are F = w^Tδ, while an opponent o realizes G_o = w_o^Tδ [PAGE 4]. For the double-up structure, the objective is max_{w∈𝕎} P{w^Tδ > G(r')(𝑾op, δ)}, where r' = O + 1 − r and G(r') is the r'-th order statistic of opponent scores [PAGE 5]. Defining Y_w = w^Tδ − G(r'), the paper assumes Y_w ~ N(μ_{Y_w}, σ_{Y_w}²), with μ_{Y_w} = w^Tμ_δ − μ_{G(r')} and σ_{Y_w}² = w^TΣ_δw + σ_{G(r')}² − 2w^Tσ_{δ,G(r')} [PAGE 11]. The exceedance probability then becomes P{Y_w > 0} = 1 − Φ(−μ_{Y_w}/σ_{Y_w}) [PAGE 10–11].

Proposition 4.1 partitions the solution into two regimes [PAGE 10–11]. If μ_w < 0 for all feasible w (the portfolio is expected to lose to the stochastic benchmark), the optimal solution lies in {w(λ): w(λ) ∈ argmax_{w∈𝕎} (μ_w + λσ_w²), λ ≥ 0}; because the decision-maker is out of the money, variance is desirable and the objective adds a positive variance premium. If some μ_w ≥ 0, the solution lies in {w(λ): w(λ) ∈ argmax_{w∈𝕎, μ_w ≥ 0} (μ_w − λσ_w²), λ ≥ 0}; variance is penalized. Algorithm 2 operationalizes this by gridding λ ∈ Λ, solving binary quadratic programs (BQPs), and selecting λ* that maximizes the Monte-Carlo-estimated exceedance probability [PAGE 11–12].

Gray-zone audit. The first singularity is the regime boundary μ_{Y_w} ≈ 0. Section 6.3 explicitly admits that when the estimated μ_w is close to zero, the model can err by increasing variance when it should decrease it, or vice versa; this is implicated in the quintuple-up deterioration after week 6 [PAGE 19]. The second gray zone is Assumption 5.1 for top-heavy contests: μ_{Y_{w,d}} < 0 for all payoff tiers d, i.e., the optimal portfolio is "out-of-the-money" in expectation [PAGE 13–14]. This may break down if payoffs extend beyond the top ~20 percentiles, though the paper argues those tail payoffs are negligible [PAGE 13]. The third gray zone is Assumption 5.2, which freezes Cov(δ_p, G(r_d')) across tiers d [PAGE 14]; if this cross-covariance varies materially by tier, the separability that enables Algorithm 3 collapses. Fourth, the normality assumption for δ is justified only by unimodality and approximate symmetry in Monte-Carlo checks, not by heavy-tail validation [PAGE 11–12]; NFL performance has high variance from injuries and small sample size (16 games per team), which can violate Gaussianity. Fifth, the opponent model relies on off-the-shelf μ_δ obtained a day before games, ignoring late-breaking news; the Week 7 Fournette/Ivory example shows stale projections produce price-performance dislocations that opponents exploit [PAGE 19]. Finally, the 15% house edge implies the average player is NPV-negative, losing roughly 12 × 15% × 50 = $90 over the observed window, so any claimed edge must overcome this handicap purely through strategic opponent modeling and variance management [PAGE 18].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and equations, with page citations:

[PAGE 3] Performance prior: δ ~ N(μ_δ, Σ_δ), δ ∈ R^P, multivariate normal with mean vector μ_δ and covariance Σ_δ.

[PAGE 4] Feasibility set 𝕎: ∑_{p=1}^P w_p = C, ∑_{p=1}^P c_p w_p ≤ B, w_p ∈ {0,1}; C = 9 for NFL, P ≈ 100–300, B budget, c_p player cost. Positional and diversity constraints appended linearly.

[PAGE 4] Realized scores: F ≔ w^Tδ for own portfolio; G_o ≔ w_o^Tδ for opponent o, o = 1,...,O; 𝑾op ≔ {w_o}_{o=1}^O.

[PAGE 5] Double-up objective (1): max_{w∈𝕎} P{ w^Tδ > G(r')(𝑾op, δ) }, with r' ≔ O + 1 − r. Typical double-up: r = (O + N)/2, payoff R = 2; quintuple-up: r = (O + N)/5, R = 5; entry fee normalized to 1.

[PAGE 5] Top-heavy objective (2): max_{𝑾∈𝕎^N} ∑_{d=1}^D ∑_{i=1}^N (R_d − R_{d+1}) P{ w_i^Tδ > G_{-i}(r_d')(𝑾_{−i}, 𝑾op, δ) }, R_{D+1} ≔ 0, r_d' = O + N − r_d O.

[PAGE 7] Dirichlet regression link: α_QB = exp(X_QB β_QB), with α_QB ∈ R^{N_QB}; element-wise exponential. Week-t specific: α_QB^t = exp(β^0_QB 1 + β^1_QB f_QB^t + β^2_QB c_QB^t + β^3_QB μ_QB^t) [PAGE 7].

[PAGE 10–11] Proposition 4.1: (i) μ_w < 0 ∀w ⇒ w* ∈ {w(λ): argmax_{w∈𝕎} (μ_w + λσ_w²), λ ≥ 0}; (ii) ∃w: μ_w ≥ 0 ⇒ w* ∈ {w(λ): argmax_{w∈𝕎, μ_w ≥ 0} (μ_w − λσ_w²), λ ≥ 0}.

[PAGE 11] Double-up moments: μ_{Y_w} ≔ w^Tμ_δ − μ_{G(r')}; σ_{Y_w}² ≔ w^TΣ_δw + σ_{G(r')}² − 2w^Tσ_{δ,G(r')}.

[PAGE 11–12] Algorithm 2 lines 3 and 7 solve BQPs: w_λ = argmax_{w∈𝕎, μ_{Y_w} ≥ 0} (μ_{Y_w} − λσ_{Y_w}²) or w_λ = argmax_{w∈𝕎} (μ_{Y_w} + λσ_{Y_w}²), then λ* = argmax_{λ∈Λ} P{Y_{w_λ} > 0}.

[PAGE 13–14] Top-heavy single entry (9): max_{w∈𝕎} ∑_{d=1}^D (R_d − R_{d+1}) P{ w^Tδ > G(r_d')(𝑾op, δ) }. Assumption 5.1: μ_{Y_{w,d}} < 0 for all d and all w (out-of-the-money). Assumption 5.2: Cov(δ_p, G(r_d')) = Cov(δ_p, G(r_d'')) for all d, d′ (cross-covariance invariant across payoff tiers).

[PAGE 14–15] Algorithm 3 line 2: w_λ = argmax_{w∈𝕎} ( w^Tμ_δ + λ( w^TΣ_δw − 2w^Tσ_{δ,G(r')} ) ), λ* = argmax_{λ∈Λ} ∑_{d=1}^D (R_d − R_{d+1}) P{ w^Tδ > G(r_d')(𝑾op, δ) }.

[PAGE 15] Multiple-entry greedy diversification: 𝕎_i ≔ 𝕎 ∪ { w_i^T w_j* ≤ γ ∀j = 1,...,i−1 }, γ ≤ C, γ = 6 used empirically [PAGE 18].

[PAGE 18] Calibrated stacking probabilities q: 0.35 top-heavy, 0.25 quintuple-up, 0.20 double-up [PAGE 18].

[PAGE 18–19] Numerical results: strategic cumulative P&L top-heavy $384.74 vs benchmark $154.5; maximum shortfall $18.5; ROI > 750% on $50 initial investment over 12 weeks; average player expected loss ≈ $90 from 15% house edge [PAGE 18].

[PAGE 29–30] Order-statistic large-O limit: G(r') | (δ, p) → F_{G|(δ,p)}⁻¹( r'/O ) as O → ∞, with vanishing conditional variance; empirical CDF constructed from Monte-Carlo samples of G_o = w_o^Tδ [PAGE 30].

Units: probabilities dimensionless; fantasy points dimensionless score; dollars USD; entry fee USD; O, N dimensionless contestant counts; λ dimensionless risk–return trade-off; γ dimensionless maximum shared-player count; q dimensionless stacking probability.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's intellectual lineage runs from financial mean–variance theory to DFS portfolio construction. Morton et al. [21] on optimizing benchmark-based utility functions provides Proposition 4.1, the device for maximizing the probability of outperforming a stochastic benchmark [PAGE 10–11]. Hunter et al. [18] adapt integer programming to fantasy hockey and baseball, maximizing portfolio means subject to variance lower bounds and correlation upper bounds, but they ignore opponent behavior and approximate top-heavy contests with winner-takes-all logic [PAGE 1–2]. The present paper extends this by explicitly modeling opponents' unknown portfolios 𝑾op and optimizing the true double-up or top-heavy payoff [PAGE 1–2]. The Dirichlet–multinomial data-generating process for opponents' positional marginals, estimated via Dirichlet regression with α = exp(Xβ) [PAGE 7], imports Bayesian compositional modeling into sports lineup selection. Order-statistic theory (David & Nagaraja [7]) underwrites the efficient Monte-Carlo estimation of G(r') moments, exploiting the large-O limit where the conditional distribution of the order statistic collapses to a quantile of the opponent score CDF [PAGE 29–30]. The paper also gestures toward mean-field games and parimutuel betting literature [3], acknowledging that fully strategic opponents render the game intractable because of binary discreteness and portfolio constraints [PAGE 24–25].

Multi-week traps are structural to the empirical setting. The NFL season offers only 16 games per team, versus 82 in the NBA and NHL and 162 in MLB, so weekly player variance is high and the cumulative P&L over a 12-week window is a noisy estimator of true edge [PAGE 18–19]. The submission clock imposes a hard weekly deadline; μ_δ is typically fixed a day before kickoff, so late-breaking injury or availability news arrives after the model is locked [PAGE 19]. Week 5 saw multiple in-game injuries (Devante Parker, Charles Clay, Sterling Shepard, Bilal Powell, Travis Kelce) that invalidated pre-submitted portfolios [PAGE 19]. Week 7 featured Leonard Fournette listed as questionable while Chris Ivory was underpriced relative to expected usage; roughly 60% of opponents in double-up pivoted to Ivory, exploiting the stale μ_δ [PAGE 19]. The 15% operator take means the baseline expected return is negative, and only strategic differentiation—owning less-popular players, managing variance, and anticipating opponent crowding—can produce positive expectation [PAGE 1, 5, 18].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive theory of mind in this framework operates across three levels. Level 0 is the benchmark models: they maximize expected points w^Tμ_δ subject to feasibility, implicitly treating the benchmark G(r') as deterministic and ignoring other players entirely [PAGE 17]. Level 1 is the proposed strategic model: it posits a distribution over opponents' portfolios via Dirichlet–multinomial marginals and accept-reject feasibility, then optimizes the probability of beating the stochastic order statistic G(r') [PAGE 5–9, 11–15]. Level 2, acknowledged but deemed intractable, is the fully game-theoretic setting in which some opponents are themselves strategic, leading to mean-field-game complications that are likely unsolvable given binary decision variables and portfolio constraints [PAGE 24–25].

Crisis habit regression appears when estimation noise forces the model back toward Level 0 behavior. Section 6.3 identifies the quintuple-up failure mode: when μ_w is estimated near zero, the Proposition 4.1 regime test becomes unstable, and the algorithm may incorrectly minimize variance when it should maximize it, or vice versa [PAGE 19]. Under pressure, the decision rule regresses to a deterministic expected-points heuristic rather than the correct mean–variance trade-off. The counter-trap is the entry-multiplicity choice: for double-up contests with N/O → 0, replication of the single-entry optimum is asymptotically optimal; for top-heavy contests, replication is strictly sub-optimal because diversification increases the probability of at least one winning entry, motivating the greedy overlap constraint w_i^T w_j* ≤ γ [PAGE 12–13, 15]. The paper ultimately uses diversification even in double-up/quintuple-up to suppress P&L standard deviation, ceding a small expected-profit increment for variance reduction [PAGE 15, 21–22].

The clock is the weekly contest lock. Because μ_δ and Σ_δ are updated weekly but not intraday, the model operates on stale information precisely when late injury news creates the largest pricing dislocations [PAGE 19]. Sharks react to such news; the paper's baseline does not, which is identified as a source of conservative realized results relative to expected model performance [PAGE 19, 21–22].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: NFL rosters exceed 45 players but only 11 are on the field at any time, so individual player availability is a hard physical constraint [PAGE 19]. Injuries function as vetoes: Week 5 injuries to Devante Parker, Charles Clay, Sterling Shepard, Bilal Powell, and Travis Kelce removed rostered players mid-game, directly invalidating portfolio assumptions [PAGE 19]. Week 7 presents a price–performance veto: Fournette was questionable, priced at 9000, while Ivory was priced at 5900; projected points were 17.27 vs 6.78, but the stale μ_δ failed to capture the usage shift, and ~60% of opponents exploited the mispricing by selecting Ivory [PAGE 19]. Any model that does not update μ_δ after such news is vetoed by the physical availability layer.

Biomechanical/availability layer: stacking exists precisely because QB and WR fantasy points from the same team are strongly correlated [PAGE 9]. The opponent generator assumes positional-marginal independence except for an ad-hoc stacking probability q; this is a veto candidate because real opponents exhibit correlated teammate selection that the independent Dirichlet–multinomial marginals understate [PAGE 9, 18]. The paper estimates q empirically (0.35 top-heavy, 0.25 quintuple-up, 0.20 double-up) to match observed stacking rates, but this is a reduced-form patch rather than a structural copula [PAGE 18].

Weather layer: not explicitly modeled in the source text, but weather is a physical determinant of NFL passing and kicking efficiency and therefore enters δ through Σ_δ and μ_δ; omission constitutes a veto risk in outdoor stadiums.

Adjudication result: the model's strongest veto exposure is the combination of stale pre-lock projections and late injury news. The accept-reject opponent sampler enforces budget lower bounds B_lb and feasibility w_o ∈ 𝕎 [PAGE 8–9], but it cannot veto a physical injury that occurs after submission. Therefore the model's edge is conditional on no material availability shocks between projection time and lock; when such shocks occur (Fournette/Ivory, Week 5 injuries), the strategic model's expected P&L degrades toward or below benchmark unless a human overrides with updated information [PAGE 19, 21–22].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Late-injury projection veto. Counterfactual: a star running back is listed questionable 24 hours before lock, after μ_δ has been exported from FantasyPros; the backup is materially underpriced relative to expected snap share. Verifiable condition: realized snap counts show the backup out-projects the starter by >30%, and >50% of opponent portfolios shift to the backup (as observed with Ivory at ~60% in double-up) [PAGE 19]. Prediction: portfolios containing the injured starter underperform the field; the strategic model's edge collapses because its μ_δ is stale, and the benchmark may outperform simply by avoiding the mispriced starter. A veto-triggered override that updates μ_δ within hours of the news recovers the edge.

Scenario 2 — Regime-misclassification variance veto at μ_{Y_w} ≈ 0. Counterfactual: in quintuple-up contests, the Monte-Carlo estimate of μ_{Y_w} falls within a narrow band around zero, causing Proposition 4.1 to select the wrong variance sign. Verifiable condition: the estimated μ_{Y_w} is statistically indistinguishable from 0, yet the algorithm chooses λ corresponding to variance minimization when the true optimal is variance maximization (or vice versa) [PAGE 19]. Prediction: realized quintuple-up P&L deteriorates relative to benchmark after week 6, exactly as documented in Table 1 and Figure 2; the model's expected profit falls below the benchmark despite correct mean ranking. Mitigation: impose a dead-zone threshold on |μ_{Y_w}| below which variance direction is fixed by prior contest class rather than point estimate.

Scenario 3 — Opponent correlation veto via understated stacking. Counterfactual: actual opponents stack QB–WR pairs at a rate exceeding the calibrated q (0.35 top-heavy) because of correlated team-game scripts. Verifiable condition: post-contest scraped opponent portfolios show joint QB–WR same-team selection frequency above the Dirichlet–multinomial independent-marginal prediction by a statistically significant margin [PAGE 9, 18]. Prediction: the top-heavy strategic portfolio's right-tail P&L mass is overestimated; expected top-heavy profit falls below the simulated value (which was >5x benchmark in week 10) and the probability of loss rises above model forecasts [PAGE 20–21]. The veto would trigger a switch from independent positional sampling to a copula-based joint opponent generator or an increased effective q.
</RLVR_COUNTERFACTUAL_VETOES>