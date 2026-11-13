---
source: "2025 - A New Framework to Estimate Return on Investment for Player Salaries in the National Basketball Association - Jackson.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2025"
pages: 25
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5463
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about ROI for NBA player salaries using a strict framework with 6 XML sections, each with specific requirements. Let me break down what's needed:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. Must use formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000 WORD DEPTH across exact XML sections:
   - <THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown
   - <RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps
   - <RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock
   - <CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof
   - <RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions

Let me carefully analyze the source text first.

Source: "A New Framework to Estimate Return on Investment for Player Salaries in the National Basketball Association" by Jackson (2025), MIT Sloan Sports Analytics Conference Research Paper Competition, 25 pages.

Key content:
- Page 1: Introduction, IRR equation (1): CF0 = sum(CFt/(1+r)^t), t=1 to K. Problem: NBA player salary investment, on-court performance has no clear monetary cash value. Five-part process: (1) select measurement period, (2) select model for fractional credit within game, (3) estimate Single Game Value (SGV) in dollars, (4) combine to derive player cash flows based on relative on-court performance, (5) use salary as invested cash flow and performance-based cash flows to solve for ROI via (1). WRMS estimator introduced. Theorem 2.1. Theorem 3.1 ensures unbiasedness.

- Page 2: Five steps detailed. WRMS = Wealth Redistribution Merit Share. General estimator translating on-court performance into standardized fractional share. Asymptotically unbiased to natural share, calibrated to replacement player. Logistic regression illustration for 2022-2023 NBA regular season. SGV model based on ticket sales and TV revenue. Theorem 3.1 unbiased to total game value.

- Page 3: Section 2 begins WRMS derivation. N games, g game, m player 1-30 per game. 15 rostered per team, 30 potential per game. Only award players with MIN > 0. Missed games treated as defaults. Natural share N_g_m = Δ_g_m * 1[m in M_g] / sum over omega in M_g of Δ_g_omega * 1[omega in M_g]. Wait, looking at equation (2): N_g_m = (Δ_g_m * 1[m ∈ M_g]) / (sum over omega ∈ M_g of Δ_g_omega * 1[omega ∈ M_g]). Actually looking at the text: sum over m in M_g and omega in M_g^c? Let me re-read.

Equation (2) from text: 
NN_g_m = Δ_g_m * 1[m ∈ M_g] / sum_{ω ∈ M_g} Δ_g_ω * 1[ω ∈ M_g^c]?

Wait, looking at page 3 text:
"𝒩𝒩𝒢𝒢𝒢𝒔= Δ𝒢𝒢𝒢𝒔𝟏𝟏𝒎𝒎∈ℳ𝒢𝒢 ∑ Δ𝒢𝒢𝒢𝒔𝟏𝟏𝜔𝜔∈ℳ𝒢𝒢 ω𝜔∈ℳಥ𝒢𝒢"

This OCR is messy. But from context it's: N_g_m = Δ_g_m * 1[m ∈ M_g] / sum_{ω ∈ M_g} Δ_g_ω * 1[ω ∈ M_g]? No, that would just be 1. Let's look at page 3 again carefully.

Actually from context: natural share = player's performance / sum of all players' performances in that game who played. And players not playing get 0.

Page 4: Complete naivete: W degenerate random variable P(W=c)=1. Expected credit share = uniform share = 1/#{M_g}. Approximate as 1/E[#{M_g}], estimator 1/m_bar where m_bar = m*/N.

Sample statistics:
Δ_bar_m* = (1/m*) sum_{g=1}^N sum_{m in M_g} Δ_g_m
s(Δ_m*) = sqrt(1/(m*-1) sum sum (Δ_g_m - Δ_bar_m*)^2)

Theorem 2.1 (WRMS):
W(S)_g_m = [1/s(Δ_m*)] * (Δ_g_m - Δ_bar_m*) * (1/m_bar) + 1/m_bar

Properties:
(i) Standardized to sample mean and SD of 1/m_bar.
(ii) Bias(W, N|M_g) = 1/m_bar - 1/#{M_g}. As N→∞, bias → 0 in probability.
(iii) MLE invariance property.

Page 5: Economic interpretation. Below average games decrease share below 1/m_bar, above average increase. Sum over all games and players = N (equation 6).

Page 6: Section 2.1 Performance Measurement. Per-game unit. Game Score equation (7). Win Score equation (8). Logistic regression model.

Page 7: Logistic regression: y_i = 1 (win) or 0 (loss), p_i = P(y_i=1 | x_i, β). logit(p_i) = x_i^T β. Theorem 2.2: team level logit = sum of player level logits under β_0 = 0 and roster of 15.

Page 8: Equation (11): logit(p_i) = sum_{m=1}^{15} logit(p_i_m) / 15? Actually text says: logit(p_i) = sum logit(p_i_m) where p_i_m is player win probability. Wait, equation (11): logit(p_i) = (x_i^*)^T β = sum_{m=1}^{15} x_i_m^T β = sum_{m=1}^{15} logit(p_i_m). Hmm, looking at text: "logit(pi) = (xi*)Tβ = sum_{m=1}^{15} xi_m^T β = sum_{m=1}^{15} logit(pi_m)". But then equation (11) shows division by 15? Let me check.

Actually page 8 shows:
logit(p_i) = (x_i^*)^T β = Σ_{m=1}^{15} x_{i,m}^T β = Σ_{m=1}^{15} logit(p_{i,m})

Wait no, the text says:
"logit(pi_i) = (xi_i^*)^T β = Σ_{m=1}^{15} xi_{i,m}^T β = Σ_{m=1}^{15} logit(pi_{i,m})"

But looking at the actual rendered text in page 8:
logit(p_i) = (x_i^*)^T β = Σ_{m=1}^{15} x_{i,m}^T β = Σ_{m=1}^{15} logit(p_{i,m})

Hmm, but then equation (12) uses logit(p_g_m) directly.

Equation (12): W(S)_g_m = [1/s(WL)_m*] * (logit(p_g_m) - WL_bar_m*) * (1/m_bar) + 1/m_bar

Equation (13): GmSc* similar with Game Score.
Equation (14): WnSc* similar with Win Score.

Page 9: Problem with using natural share directly with logit: ratio of normals follows Cauchy, expectation doesn't exist. This is why WRMS stabilization is needed.

Page 10: Empirical results. 1,226 games, n=2,452 outcomes. 36 statistical categories. Four games excluded. Logistic regression with α=0.10 significance. β̂_0 = -0.004930, p=0.948. Refit without intercept. McFadden R^2 = 0.6457. Table 1.

Page 11: Model interpretation. FG3O and FG3X most important. Figure 2 compares distributions. m* = 25,804. 1/m_bar = 4.75%.

Page 12: Equation (15): W*(S)_g_m = W(S)_g_m if π ∈ M_g, else 0. Missed game = default. Equation (16): PVW(·)_π = sum_{g in G_π} W*(S)_g_m. Present value at zero interest rate. Average player 82 games gets PV total 3.896. Nikola Jokic top performer. Figure 3: Kevin Durant (47 games) vs Tari Eason (82 games).

Page 13: PVWL denotes (16) using (12). Figure 4 top performers by position.

Page 14: Section 3 ROI. SGV modeling. Equation (17): SGV_g(α) = α1 GATE_g + α2 1_ESPN + α3 1_TNT + α4(1_ESPN + 1_TNT + 1_NBATV). α1 average ticket price, α2 avg TV revenue ESPN game, α3 avg TV revenue TNT game, α4 avg advertising revenue for televised game.

Page 15: Equation (18): CF_π = (SSV_g∈G_π)^T diag(W_g∈G_π) = (SGV1 W*_1π, ..., SGV_K W*_Kπ)^T. Bad game can give negative cash flow. Theorem 3.1: Unbiased to expected total generated revenue if E(SGV_g) = μ.

Equation (19): CF0_π = (SSV)^T diag(W) v_π ≡ sum_{t=1}^K SGV_t W*_tπ / (1 + r_π)^t. Where v_π = ((1+r_π)^-1, ..., (1+r_π)^-K)^T. CF0_π is full salary.

Page 16: SGV parameter estimates. α̂_1 = $102.64 (avg ticket price). Total gate revenue $2.28B, total attendance 22,234,502. α̂_2 = $13,861,386 (ESPN), α̂_3 = $18,461,538 (TNT), α̂_4 = $6,080,586 (advertising). 273 nationally televised games. Top 5 teams by total SGV: LAL $908.3M, GSW $885.4M, BOS $831.1M, PHX $766.3M, PHI $708.5M.

Page 17: League minimum salary $1,017,781. Minimum one game played. Figure 5 ROI by salary. Higher salary generally lower ROI.

Page 18: Table 3 CV by position. Center least risk per unit return, Point Guard riskiest. Replacement player ROI: average SGV $5,318,785, replacement player game cash flow $252,706 (4.75% of SGV). Average salary $8,274,410. Replacement player in all 82 games yields 2.71% ROI.

Page 19-20: Discussion. Independence assumption. Season salary lump sum at time zero. Salary cap implies risk-free rate. Sharpe Ratio possible.

Pages 21-25: References, Appendix proofs.

Now I need to write the response with 6 XML sections, >=1000 words total, with THINK_TRACE >=400 words.

Important constraints:
- NO betting lines (spreads, totals, moneylines, odds). The paper mentions win probability and logistic regression, but I must not frame it as betting odds. I can discuss win probability as a performance measurement construct, not as betting.
- NO toy equations. Use real equations from the paper with proper LaTeX.
- Cite page markers [PAGE N].
- Verbatim quotes where appropriate.

Let me draft each section.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Trace the logical chain from IRR (1) to WRMS (5) to SGV (17) to cash flows (18) to ROI (19).
- Identify gray zones: i.i.d. assumption for basketball players (Page 8 remark, Page 20 discussion), independence of players on court (Page 20: "Can players on a basketball court be considered independent? The answer is complex"), lump sum salary assumption (Page 20), equally spaced intervals (Page 20), single season constraint (Page 19), exclusion of playoffs (Page 19), SGV model omissions (jersey sales, off-court revenue, Nielsen ratings), Cauchy distribution singularity when using natural share directly with logit (Page 9), bias correction via intercept (Page 10), replacement player calibration.
- Multi-hop: Salary (CF0) -> performance share (WRMS) -> SGV dollarization -> discounted cash flows -> solve for r.
- Gray-zone audit: The paper acknowledges weak dependence may be okay via CLT (Page 20), but no variance analysis presented. The logistic regression is calibrated to wins, not championships or revenue (Page 19). Time-of-season weighting ignored (Page 20).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Equation (1) IRR: CF0 = Σ CFt/(1+r)^t, t=1..K. Units: dollars. Page 1.
- Equation (2) Natural share. Page 3.
- Equations (3)-(4) sample statistics. Page 4.
- Equation (5) WRMS. Page 4. Units: dimensionless share (fraction of SGV).
- Equation (6) Sum = N. Page 5.
- Equation (7) Game Score. Page 6.
- Equation (8) Win Score. Page 6.
- Equation (9) Logistic regression logit. Page 7.
- Equation (10)-(11) Team-player logit decomposition. Page 8.
- Equation (12) WRMS with logistic performance. Page 8.
- Equation (15) Missed game adjustment (default = 0). Page 12.
- Equation (16) PVW sum. Page 12. Units: dimensionless game-share units.
- Equation (17) SGV model. Page 14. Units: USD. α1 = $102.64/ticket, α2 = $13,861,386/ESPN game, α3 = $18,461,538/TNT game, α4 = $6,080,586/advertised televised game. Page 16.
- Equation (18) Cash flow vector. Page 15. Units: USD.
- Equation (19) ROI equation. Page 15. r_π in per-game discount rate (dimensionless, e.g., 0.0271 annualized? Actually replacement player 2.71% ROI).
- Theorem 3.1 unbiasedness. Page 15.
- Breakdown regimes: s(Δ_m*) = 0 (division by zero in WRMS), #{M_g} = 0 (impossible per rules, min 10), β_0 ≠ 0 breaks Theorem 2.2 decomposition, N < 1 invalid.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Berk and Demarzo (2007, §4.8) IRR methodology. Page 1.
- Idson and Kahane (2000), Berri et al. (2005), Tunaru et al. (2005), Berri and Krautmann (2006), Berri et al. (2007a), Simmons and Berri (2011), Halevy et al. (2012), Kuehn (2017). Page 1-2. None combined salary and performance for NBA ROI.
- Oliver (2004) per-game importance, Chapter 16 pg 192, per possession pg 25. Page 6.
- Berri et al. (2007b) Wages of Wins, Game Score critique, Win Score. Page 6.
- Lackritz and Horowitz (2021) offensive only. Page 6.
- Terner and Franks (2021) per-game approach unstudied. Page 6.
- Shea and Baker (2012) replacement player. Page 2.
- McFadden (1974) R^2. Page 10.
- Kuhn (2008) variable importance. Page 10.
- Historical trap: Previous studies explain salary decisions rather than measuring realized return (Page 14). Multi-week trap: contracts span multiple seasons, playoffs excluded (Page 19), single-season observation period limits generalizability (Page 19).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Teams/agents default to raw counting stats or per-game averages when under negotiation pressure; the paper's WRMS forces redistribution relative to replacement player mean, regressing toward the 4.75% mean share.
- Counter-trap: An agent might cherry-pick games (high SGV nationally televised games) to inflate ROI; the framework's SGV model (Eq 17) already weights ESPN/TNT/NBATV, so cherry-picking is priced in, but the analyst must guard against ex post game selection bias.
- Clock: Time value of money assumption—lump sum at time zero vs installments (Page 20); equally spaced intervals ignored (Page 20); earlier games weighted more due to discounting (Page 20). The "clock" is the regular-season calendar; randomizing game order could produce ROI distribution (Page 20).
- Recursive theory of mind: Player thinks "my salary is fixed," team thinks "my performance generates revenue," analyst thinks "I need to solve for r." Each layer models the other's incentive. The paper assumes salary is sunk at t=0 (negative CF0), but in reality salaries are paid in installments (Page 20), creating a recursive misalignment between the model's cash-flow timing and the player's actual liquidity constraints.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: Basketball is a contact sport; load management, injuries, back-to-backs cause missed games (MIN=0 → default). The model treats these as defaults (Eq 15), but does not model injury risk ex ante.
- Biomechanical layer: Player tracking data (speed, distance) omitted from SGV and performance model; defensive distance traveled (DDIS) is in the logistic model as negative (Page 10), but no biomechanical fatigue accumulation across the 82-game season.
- Weather veto: NBA is indoors; weather is not a veto layer for game cancellation, but travel fatigue across time zones is unmodeled.
- The veto proof: The framework lacks an injury/load-management veto; a player can appear (MIN > 0) but be physically compromised, yielding negative Δ_g_m and negative cash flow (SGV_t * W* < 0, Page 15). This is a physical-layer failure mode not vetoed by the model.
- No outdoor weather, no pitch conditions, no altitude effects (NBA arenas are climate-controlled). The only environmental proxy is attendance GATE_g, which responds to weather indirectly but is exogenous.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I need to create 3 counterfactual veto scenarios with verifiable predictions.

Scenario 1: Division-by-zero singularity. If s(Δ_m*) = 0 (all players identical performance), WRMS undefined. Prediction: In a simulated season where all Δ_g_m = c, Eq (5) blows up; the model fails unless a minimum variance floor ε > 0 is imposed. Verifiable: compute s(Δ_m*) on 2022-23 data; if near zero for any position subset, veto.

Scenario 2: Cauchy singularity from natural share. If using Eq (2) directly with logit(p) ~ N(0, σ²), N_g_m = U/(U+V) follows Cauchy; E[N] does not exist (Page 9). Prediction: Replacing WRMS with raw natural share in Eq (18) produces infinite variance in cash flows; Monte Carlo simulation will show non-convergence of sample mean ROI. Verifiable: simulate logit performance with β_0=0, centered covariates; compute sample mean of shares over 10^5 trials; observe divergence.

Scenario 3: Missed-game default timing. Eq (15) sets missed games to zero, but salary is paid regardless (guaranteed contracts). Prediction: For a player with high salary and many DNP-CDs (did not play - coach's decision), the model underestimates negative cash flow because it treats absence as zero share rather than negative default against guaranteed salary. Verifiable: compare Kevin Durant (47 games, Page 12) vs Tari Eason (82 games) in Figure 3; the break-even point shifts if salary installments are modeled as continuous negative cash flow rather than lump-sum CF0. Under the lump-sum assumption, ROI is biased upward for injured players relative to installment reality.

Wait, I need to make sure I don't mention betting odds/lines. The paper uses logistic regression for win probability, but I must not call it odds or moneyline. I can refer to it as "win probability" or "logit" but avoid betting terminology.

Also need to ensure total word count >= 1000 words. THINK_TRACE alone >= 400. Let me aim for roughly 200-250 words per section on average, with THINK_TRACE being 500+.

Let me write carefully with LaTeX formatting and page citations.

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

I need to include exact [PAGE N] markers and verbatim quotes where appropriate. Let me find some good verbatim quotes.

Page 1: "Given a financial investment into an NBA player via a contractual salary, it is of interest to assess the realized return vis-à-vis on court activities (i.e., points, rebounds, etc.)."

Page 4: "Then the following properties hold."

Page 9: "Therefore, E(N_g_m | M_g) does not exist! (The median is the location parameter, 1/#{M_g}.)"

Page 15: "By the definition of (5), it is possible a particularly bad game may result in SGV_t W*_tπ < 0 for some t, t = 1, ..., K and player π."

Page 20: "Can players on a basketball court be considered independent? The answer is complex (e.g., Horrace et al., 2022), and more study is needed."

Page 20: "we assume an NBA player’s single season salary is paid in one lump sum at time zero. Generally, a player’s salary will be paid in installments throughout the regular season."

Page 20: "games in the earlier part of the season are given more weight due to the basic conditions of the time value of money."

Page 16: "α̂_1 = $102.64."

Page 18: "a replacement player appearing in all 82 regular season games yields a 2.71% ROI."

Let me draft each section now, ensuring word count and constraints.

I will write in a formal analytical tone. No betting lines. Use real equations from the paper. Include units (USD, dimensionless, games, etc.).

Let me estimate word counts as I write.

THINK_TRACE: I'll write about 500-600 words.
SOURCE_OPERATORS: ~200 words.
RETROCAUSAL: ~150 words.
RECURSIVE TOM: ~150 words.
CROSS LAYER: ~150 words.
RLVR: ~150 words.

Total ~1300+ words.

Let's begin drafting.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of Jackson (2025), "A New Framework to Estimate Return on Investment for Player Salaries in the National Basketball Association." The logical chain proceeds in five hops. Hop 1: The paper anchors realized ROI to the internal rate of return identity from Berk and Demarzo (2007, §4.8), Equation (1) on Page 1: CF0 = Σ_{t=1}^{K} CF_t / (1 + r)^t, where CF0 is the initial negative investment and CF_t are known future positive cash flows. In the NBA context, CF0 is the player's full-season contractual salary, a negative cash flow from the team's perspective at time zero. Hop 2: Because on-court performance lacks a market price, the author constructs the Wealth Redistribution Merit Share (WRMS), Equation (5) on Page 4, which standardizes a raw performance measure Δ_g_m into a fractional share centered on 1/m_bar (the inverse average number of players appearing per game). The WRMS redistributes wealth from a baseline of complete naivete (uniform share) based on deviation from the player's sample mean Δ_bar_m*, scaled by the sample standard deviation s(Δ_m*). Hop 3: The Single Game Value (SGV), Equation (17) on Page 14, dollarizes each game as α1·GATE_g + α2·1_ESPN + α3·1_TNT + α4·(1_ESPN + 1_TNT + 1_NBATV), with units of USD, where attendance and national television indicators gate revenue. Hop 4: Performance-based cash flows are formed by the Hadamard-style product in Equation (18) on Page 15, CF_π = (SSV_{g∈G_π})^T diag(W_{g∈G_π}), yielding per-game dollar cash flows SGV_t · W*_tπ. A particularly bad game can produce SGV_t · W*_tπ < 0 (Page 15), and missed games are coded as zero-share defaults via Equation (15) on Page 12. Hop 5: The contractual ROI, Equation (19) on Page 15, solves for r_π equating CF0_π to the discounted sum Σ SGV_t W*_tπ / (1 + r_π)^t.

Gray-zone audit: (1) Independence violation—Page 8 remark and Page 20 discussion explicitly note players on a court cannot be treated as fully independent; the author defends asymptotic unbiasedness only under weak dependence permitting the Central Limit Theorem, yet presents no variance analysis (Page 20). (2) Lump-sum salary assumption—Page 20 concedes salaries are paid in installments, but Equation (19) discounts all cash flows against a single time-zero CF0, violating actual disbursement timing. (3) Equally spaced intervals—Page 20 notes games are assumed equally spaced, though earlier games receive greater discount weight; randomizing game order is suggested but not implemented. (4) Cauchy singularity—Page 9 proves that using the natural share directly with logit(p) ~ N(0, σ²) yields U/(U+V) ∼ Cauchy, for which E(N_g_m | M_g) does not exist; WRMS avoids this only via the standardization in Equation (5), which collapses if s(Δ_m*) = 0. (5) Single-season and playoff exclusion—Page 19 limits empirical analysis to the 2022-2023 regular season, omitting multi-season contracts and playoff value, which some analysts deem significant (Mahoney, 2019). (6) SGV incompleteness—Page 14-16 models ticket, TV, and advertising revenue but excludes jersey sales, off-court revenue, and Nielsen-rated viewership granularity. These are not mere footnotes; they are structural veto conditions that bound the domain in which Equation (19) returns a financially interpretable r_π.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, and exact equations extracted from the source, with page citations.

(1) Internal rate of return / realized ROI (Page 1): Find r_r such that
CF_0 = \sum_{t=1}^{K} \frac{CF_t}{(1+r_r)^t}.
Units: CF_0 and CF_t in USD; r_r dimensionless per-period rate. Breakdown: requires optimization software for non-trivial forms; all CF_t assumed known (ex post).

(2) Natural player credit game share (Page 3):
\mathcal{N}_{g,m} = \frac{\Delta_{g,m} \cdot \mathbb{1}[m \in \mathcal{M}_g]}{\sum_{\omega \in \mathcal{M}_g} \Delta_{g,\omega} \cdot \mathbb{1}[\omega \in \mathcal{M}_g]}.
Units: dimensionless share, \sum_m \mathcal{N}_{g,m} = 1. Players with MIN = 0 receive \mathcal{N}_{g,m} = 0.

(3) Sample mean of performance (Page 4):
\bar{\Delta}_{m^*} = \frac{1}{m^*} \sum_{g=1}^{N} \sum_{m \in \mathcal{M}_g} \Delta_{g,m}.

(4) Sample standard deviation (Page 4):
s(\Delta_{m^*}) = \sqrt{\frac{1}{m^*-1} \sum_{g=1}^{N} \sum_{m \in \mathcal{M}_g} (\Delta_{g,m} - \bar{\Delta}_{m^*})^2}.
Units: same units as Δ (logit points for the logistic model).

(5) Wealth Redistribution Merit Share (Page 4, Theorem 2.1):
\mathcal{W}(\mathcal{S})_{g,m} = \frac{1}{s(\Delta_{m^*})} (\Delta_{g,m} - \bar{\Delta}_{m^*}) \frac{1}{\bar{m}} + \frac{1}{\bar{m}}.
Units: dimensionless share. Standardized to sample mean and standard deviation 1/\bar{m}. For 2022-23, 1/\bar{m} = 4.75% (Page 11). Breakdown: undefined if s(\Delta_{m^*}) = 0.

(6) Aggregate conservation (Page 5):
\sum_{g=1}^{N} \sum_{m \in \mathcal{M}_g} \mathcal{W}(\mathcal{S})_{g,m} = N.

(7) Game Score (Page 6):
\text{GmSc} = \text{PTS} + 0.4\text{FGM} - 0.7\text{FGA} - 0.4(\text{FTA} - \text{FTM}) + 0.7\text{OREB} + 0.3\text{DREB} + \text{STL} + 0.7\text{AST} + 0.7\text{BLK} - 0.4\text{PF} - \text{TOV}.

(8) Win Score (Page 6):
\text{WSc} = \text{PTS} + \text{OREB} + \text{DREB} + \text{STL} + 0.5\text{BLK} + 0.5\text{AST} - \text{FGM} - 0.5\text{FGA} - \text{TOV} - 0.5\text{PF}.

(9) Logistic regression win probability (Page 7):
\operatorname{logit}(p_i) = \log\left(\frac{p_i}{1-p_i}\right) = \boldsymbol{x}_i^T \boldsymbol{\beta}, \quad p_i = \frac{\exp(\boldsymbol{x}_i^T \boldsymbol{\beta})}{1 + \exp(\boldsymbol{x}_i^T \boldsymbol{\beta})}.
Units: log-odds (dimensionless); β_0 estimated at -0.004930 (p = 0.948), refit without intercept (Page 10).

(10)-(11) Team-to-player logit decomposition (Page 8, Theorem 2.2): Assuming β_0 = 0 and 15-player roster,
\operatorname{logit}(p_i) = \sum_{m=1}^{15} \operatorname{logit}(p_{i,m}).

(12) WRMS with logistic performance (Page 8):
\mathcal{W}(\mathbf{X})_{g,m} = \frac{1}{s(\text{WL})_{m^*}} (\operatorname{logit}(p_{g,m}) - \overline{\text{WL}}_{m^*}) \frac{1}{\bar{m}} + \frac{1}{\bar{m}}.

(15) Missed-game default adjustment (Page 12):
\mathcal{W}^*(\mathcal{S})_{g,m} = \begin{cases} \mathcal{W}(\mathcal{S})_{g,m}, & \pi \in \mathcal{M}_g \\ 0, & \pi \notin \mathcal{M}_g \end{cases}.
Interpretation: missed game = default (zero cash flow).

(16) Season total performance value (Page 12):
\text{PVW}(\cdot)_{\pi} = \sum_{g \in \mathcal{G}_{\pi}} \mathcal{W}^*(\mathcal{S})_{g,m}.
Units: dimensionless game-share units; zero interest rate. Average 82-game player yields PV total 3.896 (Page 13).

(17) Single Game Value model (Page 14):
\text{SGV}_g(\boldsymbol{\alpha}) = \alpha_1 \text{GATE}_g + \alpha_2 \mathbb{1}_{\text{ESPN}} + \alpha_3 \mathbb{1}_{\text{TNT}} + \alpha_4 (\mathbb{1}_{\text{ESPN}} + \mathbb{1}_{\text{TNT}} + \mathbb{1}_{\text{NBATV}}).
Units: USD. Estimates (Page 16): \hat{\alpha}_1 = \$102.64 (average ticket price; total gate \$2.28B / 22,234,502 attendance); \hat{\alpha}_2 = \$13,861,386 (ESPN); \hat{\alpha}_3 = \$18,461,538 (TNT); \hat{\alpha}_4 = \$6,080,586 (advertising; 273 national telecasts).

(18) Performance-based cash flow vector (Page 15):
\mathbf{CF}_{\pi} = (\mathbf{SSV}_{g \in \mathcal{G}_{\pi}})^T \operatorname{diag}(\mathbf{W}_{g \in \mathcal{G}_{\pi}}) = (\text{SGV}_1 \mathcal{W}^*_{1\pi}, \dots, \text{SGV}_K \mathcal{W}^*_{K\pi})^T.
Units: USD per game. Negative cash flows possible when \text{SGV}_t \mathcal{W}^*_{t\pi} < 0 (Page 15).

(19) Contractual ROI equation (Page 15):
\text{CF0}_{\pi} = (\mathbf{SSV}_{g \in \mathcal{G}_{\pi}})^T \operatorname{diag}(\mathbf{W}_{g \in \mathcal{G}_{\pi}}) \boldsymbol{v}_{\pi} \equiv \sum_{t=1}^{K} \frac{\text{SGV}_t \mathcal{W}^*_{t\pi}}{(1 + r_{\pi})^t},
where \boldsymbol{v}_{\pi} = ((1+r_{\pi})^{-1}, \dots, (1+r_{\pi})^{-K})^T and CF0_{\pi} is full salary. Units: r_{\pi} dimensionless per-game rate. Breakdown: assumes lump-sum time-zero salary (Page 20), equally spaced intervals (Page 20).

Theorem 3.1 (Page 15): If E(SGV_g) = μ ∈ ℝ for all g, then the WRMS-reallocated cash flows are conditionally unbiased to μN.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper's intellectual lineage traces to classical corporate finance and sports economics, with explicit multi-week structural traps. Berk and Demarzo (2007, §4.8) supply the IRR foundation in Equation (1) (Page 1), establishing that realized return requires known cash flows and a solvable discount rate. The author notes a survey of Idson and Kahane (2000), Berri et al. (2005), Tunaru et al. (2005), Berri and Krautmann (2006), Berri et al. (2007a), Simmons and Berri (2011), Halevy et al. (2012), and Kuehn (2017) (Pages 1-2) revealing that no prior study unified NBA on-court performance and salary to derive realized contractual ROI; most explained salary determination rather than measuring ex post performance return. Oliver (2004) establishes the per-game unit as the natural basketball delineation (Chapter 16, pg. 192; per-possession standardization pg. 25) (Page 6), while Berri et al. (2007b) provide the hard-coded Game Score (Equation 7) and Win Score (Equation 8) benchmarks that the author critiques for lacking peer-reviewed derivation and tracking-data integration (Page 6). Lackritz and Horowitz (2021) is acknowledged but limited to offensive statistics (Page 6); Terner and Franks (2021) confirm the per-game approach is largely unstudied (Page 6). Shea and Baker (2012) motivate the replacement-player standardization embedded in WRMS (Page 2). McFadden (1974) R² = 0.6457 validates the logistic model fit (Page 10), and Kuhn (2008) variable importance identifies three-point makes and misses as dominant win predictors (Page 11).

Multi-week traps: (1) Contract duration mismatch—Page 19 concedes the empirical analysis is constrained to a single 2022-2023 regular season, whereas NBA contracts typically span multiple seasons, so the ROI estimate truncates the investment horizon and ignores renewal option value. (2) Playoff omission—Page 19 explicitly excludes playoff games despite Mahoney (2019) arguing postseason performance is a significant value component, creating a systematic downward or upward bias depending on a player's playoff usage. (3) Temporal weighting trap—Page 20 observes that Equation (19) inherently weights early-season games more heavily due to discounting, but the author does not randomize game order to generate an ROI distribution, leaving the point estimate sensitive to calendar sequencing. (4) Salary disbursement trap—Page 20 notes salaries are paid in installments, yet the model treats CF0 as a lump sum at time zero, distorting the time value of money for both player and team.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under negotiation pressure, agents and front offices habitually regress to raw counting statistics (points per game, rebounds per game) or unadjusted plus-minus, ignoring the replacement-player re-centering that WRMS imposes. The model's equilibrium mean of 4.75% share per game (Page 11) acts as a statistical gravity well: a player who had one extraordinary game is pulled back toward \bar{m}^{-1}, while a consistently available mediocre player accumulates shares through volume (Equation 16, Page 12). Under crisis conditions (contract extension, trade deadline), the habit is to overweight peak performance and underweight availability; the framework forces a recursive confrontation between peak intensity and minutes-played floor.

Counter-trap: A strategic agent might attempt to inflate a client's ROI by cherry-picking high-SGV games (nationally televised ESPN/TNT contests with large \alpha_2, \alpha_3 coefficients in Equation 17, Page 14) or by selecting performance measures that favor their client's statistical profile (Game Score vs. Win Score vs. logistic logit, Pages 6-8). The counter-trap is that Equation 17 already prices television exposure into every game's SGV, and Equation 5 standardizes all performance measures to the same mean and variance (Property (i), Page 5), neutralizing cross-estimator arbitrage. The residual counter-trap is ex post game selection: if an analyst recomputes ROI after excluding low-attendance games, the unbiasedness property of Theorem 3.1 (Page 15) collapses because E(SGV_g) = μ no longer holds over the filtered set.

Clock: The financial clock is the regular-season calendar with equally spaced intervals assumed (Page 20). Because discounting compounds from time zero, earlier games carry more present weight than later games, meaning a player who performs well in October-November generates a higher ROI than one peaking in March-April, all else equal. Page 20 explicitly flags this and suggests randomizing game order to calculate a distribution of realized ROIs, a step not taken in the paper. Additionally, the salary clock diverges from the model clock: actual NBA salaries are paid in installments throughout the season (Page 20), while Equation 19 deposits the entire CF0 at t=0. This recursive misalignment means the model's r_π is not the rate a player experiences over their actual liquidity timeline, creating a persistent agency gap between the team's ex post accounting and the player's ex ante cash-flow reality.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Basketball is a high-load contact sport where missed games (MIN = 0) are mechanically coded as defaults with \mathcal{W}^* = 0 via Equation (15) (Page 12). However, the model contains no ex ante injury or load-management veto. A player may appear (MIN > 0) while physically compromised—playing through injury, on a back-to-back, or under a minutes restriction—producing \Delta_{g,m} below replacement and hence \mathcal{W}(\mathcal{S})_{g,m} < 1/\bar{m}. Equation (15) does not distinguish between a full-effort appearance and a compromised one; both receive positive minutes credit if on court, while true absences default to zero. The cash flow \text{SGV}_t \mathcal{W}^*_{t\pi} can therefore be negative (Page 15) for a depleted player, but the model cannot veto the game ex ante based on biomechanical fatigue markers.

Biomechanical layer: Player tracking variables (speed, distance, acceleration) are used only indirectly. Page 10 notes defensive distance traveled (DDIS) enters the logistic regression with a negative coefficient, but there is no accumulation of fatigue across the 82-game season, no back-to-back penalty, and no age/degradation curve. The WRMS standardization (Equation 5, Page 4) treats each game as an independent draw from an i.i.d. sample \mathcal{S}, violating the physical reality that performance in game g is conditioned on load in games g-1 through g-k. The independence remark on Page 8 and the discussion on Page 20 ("Can players on a basketball court be considered independent? The answer is complex") acknowledge this, but no mixed-effects or generalized estimating equation correction is implemented.

Weather veto: NBA games are played in climate-controlled arenas, so meteorological conditions do not cancel or materially shift game outcomes as in outdoor sports. Attendance \text{GATE}_g in Equation (17) (Page 14) responds indirectly to weather (storms suppress gate), but attendance is treated as exogenous data, not as a stochastic veto variable. No weather term enters the performance measure \Delta_{g,m}; therefore, weather is not an active veto layer in this framework.

Adjudication: The framework's veto proof is incomplete. It successfully prevents infinite variance via WRMS standardization (avoiding the Cauchy singularity of raw natural shares shown on Page 9), and it defaults missed games to zero. But it lacks (i) an injury/load-management veto that would zero or discount cash flows for compromised appearances, (ii) a salary disbursement veto that would replace the lump-sum CF0 with installment-matched discount factors, and (iii) a cross-game dependence veto that would cluster standard errors by player or team. Until these are added, Equation (19) returns a point estimate r_π whose confidence interval is uncharacterized and whose physical-layer assumptions are falsified by routine NBA load-management practice.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR Veto Scenario 1 — Zero-variance singularity in WRMS standardization. Condition: Construct a counterfactual season in which every player's performance measure \Delta_{g,m} is identical (e.g., all \Delta_{g,m} = c). Then s(\Delta_{m^*}) = 0 in Equation (4) (Page 4), and Equation (5) divides by zero, rendering \mathcal{W}(\mathcal{S})_{g,m} undefined. Verifiable test: Compute s(\Delta_{m^*}) on the actual 2022-23 data for position subsets (e.g., centers only); if any subset approaches numerical zero, the model is non-identifiable without a variance floor \varepsilon > 0. Prediction: The framework fails to produce a share vector, so no cash flows in Equation (18) can be formed, and ROI in Equation (19) cannot be solved. A Monte Carlo simulation with \Delta_{g,m} \sim \mathcal{N}(\mu, \sigma^2) as \sigma \to 0 will show the sample standard deviation of shares diverging, violating Property (i) of Theorem 2.1 (Page 5).

RLVR Veto Scenario 2 — Cauchy explosion from natural-share substitution. Condition: Replace WRMS with the raw natural share \mathcal{N}_{g,m} from Equation (2) (Page 3) using \Delta_{g,m} = \operatorname{logit}(p_{g,m}). Page 9 proves that under \beta_0 = 0 and centered covariates, \operatorname{logit}(p_{g,m}) \approx \mathcal{N}(0, \sigma^2), so \mathcal{N}_{g,m} = U/(U+V) follows a Cauchy distribution with no existing expectation. Verifiable test: Simulate 10^5 games with \Delta_{g,m} \stackrel{iid}{\sim} \mathcal{N}(0,1) for 30 players; compute the sample mean of \mathcal{N}_{g,m} across trials. Prediction: The sample mean will not converge (heavy-tailed Cauchy behavior), and Equation (18) cash flows will have infinite variance, violating Theorem 3.1's requirement E(SGV_g) = \mu < \infty (Page 15). The WRMS stabilization in Equation (5) is therefore not optional; it is a necessary veto against the natural-share raw form.

RLVR Veto Scenario 3 — Missed-game default under guaranteed salary. Condition: A player with a fully guaranteed salary misses 20 games due to injury (DNP, not just MIN = 0). Equation (15) codes those games as \mathcal{W}^* = 0, but Equation (19) still charges the full salary CF0 at time zero. Verifiable test: Compare Kevin Durant (47 games played) and Tari Eason (82 games played) in Figure 3 (Page 12); recompute ROI treating missed games as negative cash flows equal to prorated daily salary rather than zero share. Prediction: Under the lump-sum CF0 assumption, injured players' ROI is biased upward relative to an installment-matched model because the default (zero share) does not offset the full time-zero salary outlay. The break-even availability threshold in Figure 3 shifts: a high-salary player can miss more games before falling below replacement ROI than economic reality warrants, because the model fails to veto guaranteed-salary payments for absent games.
</RLVR_COUNTERFACTUAL_VETOES>