---
source: "Thorp-2006-KellyCriterion.txt"
folder: "/gpu-ocr-output/text"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5193
---

<NATIVE_REASONING>
The user wants me to analyze a source text about the Kelly Criterion and the Stock Market by Rotando and Thorp (1992). They've provided the full text across pages 922-931.

I need to produce a response with specific XML sections:
1. THINK_TRACE (>=400 words) - Deep multi-hop derivation & gray-zone audit
2. SOURCE_OPERATORS_AND_EQUATIONS - Formal LaTeX, units, page citations, breakdown
3. RETROCAUSAL_GENEALOGY - Historical/scientific lineage & multi-week traps
4. RECURSIVE_THEORY_OF_MIND - Crisis habit regression vs counter-trap vs clock
5. CROSS_LAYER_VETO_ADJUDICATION - Physical/biomechanical/weather veto proof
6. RLVR_COUNTERFACTUAL_VETOES - 3 verifiable RLVR veto scenarios + predictions

Constraints:
- ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
- ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
- >= 1,000-word depth across sections.

Let me carefully extract the source content:

Pages: 922-931 (9 pages)

Key equations and facts:
- Page 922: Definition of favorable game: Pr(lim X = +∞) > 0 (actually text says Pr(lim X = + ∞)  0 - likely > 0)
- X_k = X_{k-1} + T_k B_k
- X_n = X_0 + Σ T_k B_k
- Maximizing E(X) leads to betting all resources, ruin almost sure: Pr(ruin) = 1 - p^n, lim_{n→∞}(1-p^n) = 1
- Fixed fractional betting: B_k = f X_{k-1}
- Capital after n trials: X_n = X_0 (1+f)^S (1-f)^F, S+F=n
- Growth rate coefficient: G(f) = p log(1+f) + q log(1-f)
- f* = p - q
- G'(f) monotone strictly decreasing on [0,1)
- G'(0) = p-q > 0, lim_{f→1-} G'(f) = -∞
- Unique maximum at f* = p-q
- G(f*) = p log p + q log q + log 2 > 0? Wait, for even money, yes.
- f_e where G(f_e) = 0, 0 < f* < f_e < 1
- Theorem 1 parts (i)-(vi)
- Page 923: Example 1: p=.53, q=.47, f*=.06, G(f*)=.016566, f_e ≈ .11973 (solving .53 log(1+f) + .47 log(1-f) = 0)
- Page 924: Uneven payoff: win b units per unit wagered, f* = (bp - q)/b
- Page 924: Continuous gambling games, maximize E log(X/X0)
- Page 925: Example 2: stock $100, price uniform [30,200], dF(s) = U_A(s) ds, A = [-7/10, 1], U(s) = 10/17, mean μ = +0.15, f* = 0.63, G(f*) = 0.0472, ruin inevitable for f ≥ 1.17
- Scale change [65,150] → f* = 2(.63+) > 1? Actually says f* = 2(0.63+) > 1 (text has OCR artifacts). G remains 0.0472.
- Page 926: [70,150] uniform, dF(s) = U_A(s) ds, A = [-3/10, 5/10], U(s)=10/8, f* = 1.95, G(f*) = 0.0956, mean μ = +0.10. Buy on margin up to 1.95 times capital.
- Theorem 2: If mean μ = ∫ s dF(s) > 0, G(f) attains unique maximum at f* where f* ∈ (0, -1/a) iff ... (condition involves integral)
- a = sup{s: F(-∞, s) = 0}, i.e., lower endpoint.
- Page 928: S&P 500 1926-1984, 59 years, mean μ = 0.058, std σ = 0.2160. Annual excess returns.
- Table 1: Probability of negative excess return over n years: n=2: .38, n=3: .35 (text OCR weird), n=10: .21, n=15: .16, n=20: .13, n=25: .10, n=30: .08, n=35: .06, n=40: .05
- Page 929: Quasi-normal distribution on [A, B], A = μ - 3σ = -0.590, B = μ + 3σ = 0.706. h correction term. α = 0.2183 numerically. Simpson's Rule n=1000. f* = 1.17, G(f*) = 0.0350444711.
- Page 930: f_c (chaotic ruin point) very close to -1/A. f_c = 1.69+. Ruin certain for wagering > 1.7 times current resources.
- Page 930-931: Caveats about short-term losses, model limitations.

Important: The user says "DRIVE SOURCE: /gpu-ocr-output/text/Thorp-2006-KellyCriterion.txt" but the content says Volume 99, Number 10 / DECEMBER 1992. There's a discrepancy (2006 vs 1992) but I'll work with what's given. I should cite pages 922-931.

I need to avoid betting lines terminology (spreads, totals, moneylines, odds). I can talk about probabilities, expected values, growth rates, fractions of capital, but not "odds" in the betting sense. Actually "odds" might be tricky - the text uses "odds" maybe? Let me check. The text says "even money bets" - I should avoid that phrase or rephrase. "Even money" might be okay but better to say "unit payoff" or "1:1 payoff" - actually 1:1 might be seen as betting line. Better to say "payoff equal to the wager" or similar.

ZERO TOY EQUATIONS: Don't invent fake ratios like Force/Fatigue. Use only equations from the text or standard formalism, with units.

Let me structure the response:

<THINK_TRACE>
Deep derivation:
1. Start from the discrete binomial setup on page 922.
2. Derive G(f) = E[log(1+fT)] where T = +1 w.p. p, -1 w.p. q.
3. Show f* = p-q via first-order condition.
4. Discuss the boundary f_e where G=0 (ruin boundary).
5. Extend to uneven payoff b: f* = (bp-q)/b.
6. Continuous case: G(f) = ∫ log(1+fs) dF(s).
7. Theorem 2 conditions: μ > 0, unique max in (0, -1/a) where a is lower support endpoint.
8. S&P 500 application: μ=0.058, σ=0.2160, quasi-normal truncation at ±3σ: A=-0.590, B=0.706.
9. Numerical f*=1.17, G*=0.0350444711, f_c≈1.69.
10. Gray zones: OCR artifacts in text (e.g., "p - q  0" means p-q > 0), missing explicit formula for h and α, Table 1 OCR gaps (n=3 row), lognormal vs normal approximation caveat.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
List all equations with page citations.
- Page 922: X_k recursion, X_n sum.
- Page 922: G(f) definition.
- Page 922: f* = p - q.
- Page 923: Theorem 1.
- Page 923: Example 1 numbers.
- Page 924: Uneven payoff f* = (bp-q)/b.
- Page 924-925: Continuous G(f) = ∫ log(1+fs) dF(s).
- Page 925: Example 2 uniform [30,200], f*=0.63, G=0.0472, ruin f≥1.17.
- Page 926: [70,150], f*=1.95, G=0.0956.
- Page 926: Theorem 2 statement.
- Page 928: S&P parameters μ=0.058, σ=0.2160, n=59.
- Page 928: Table 1 probabilities.
- Page 929: A=-0.590, B=0.706, α=0.2183, h correction, Simpson n=1000.
- Page 929: f*=1.17, G=0.0350444711.
- Page 930: f_c=1.69+, -1/A ≈ 1.6949.
- Units: log growth per trial (nat/trial or dimensionless log-return), f dimensionless fraction of capital, X in currency units, time in years/trials.
- Breakdown regimes: f ≥ -1/a (log undefined for negative argument), quantized capital (minimum bet), non-stationarity, fat tails/exogenous events.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Lineage: Kelly 1956 [2], Breiman 1961 [6], Thorp blackjack [3], Thorp 1969 [4], Thorp portfolio choice 1972 [5], Feller [1], Moore 1962 [8], Reichenstein 1986 [9], Kritzman 1991 [10].
Multi-week traps: The text warns short-term losses possible (Table 1). Over 2 years, 38% chance negative excess return. Over 10 years, 21%. This creates a "career risk" trap: investors abandon Kelly after short drawdowns despite asymptotic optimality. Also the f_c trap: leverage above 1.69 guarantees ruin almost surely, but the growth curve is steep near boundary so small estimation errors in σ or μ push effective f past f_c. The quasi-normal truncation at ±3σ ignores tail events (1987 crash, etc.), creating model risk.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: Under drawdown, investors regress to "timid betting" (minimize ruin, minimize growth) or "maximize E(X)" (bet all, ensure ruin). The Kelly middle path requires discipline.
Counter-trap: Overestimating edge p or μ leads to f > f*, moving into decay zone. Underestimating volatility leads to over-leverage.
Clock: The asymptotic optimality (Theorem 1 iv, v) operates as n→∞. Finite-horizon investors face sequence-of-returns risk. The "clock" is the number of rebalancing periods; with annual rebalancing and 59-year history, the sample is thin for tail parameter estimation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical: Not directly applicable (financial model), but human execution limits: inability to compute integrals in real-time (Apple IIe 1992), emotional veto during drawdowns.
Weather: Exogenous shocks (earthquake, global recession) mentioned page 930-931 as model limitations not captured by quasi-normal distribution.
Veto proof: The model assumes independent identically distributed returns, infinite divisibility, no transaction costs/taxes, margin at T-bill rate. Violations veto the 1.17 leverage recommendation. Specifically:
- Margin cost > T-bill rate reduces effective μ, lowering f*.
- Quantization (minimum bet) creates nonzero ruin probability near zero.
- Non-stationarity (program trading, internationalization) invalidates μ=0.058, σ=0.2160.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios:
1. If transaction costs/taxes are included, effective excess return μ_eff < 0.058, so f* < 1.17. Prediction: optimal leverage decreases; at some cost threshold f* drops below 1.0 (no margin).
2. If return distribution has fatter tails than quasi-normal (e.g., lower bound a < -0.590), then -1/a < 1.6949, and the feasible leverage ceiling drops. Prediction: f_c moves left; wagering 1.17 may exceed f_c if a < -1/1.17 ≈ -0.855.
3. If annual returns are serially correlated (violating i.i.d. assumption), the i.i.d. growth theorem fails. Prediction: long-run growth rate is not G(f*) but lower; Kelly fraction based on unconditional moments overestimates optimal f.
Need to phrase as verifiable scenarios with predictions.

Wait, I need to be careful about "odds". The text mentions "even money bets" - I should not repeat betting terminology. I'll say "unit payoff" or "payoff equal to stake".

Word count: Need >= 1000 words across sections. Let me make sure each section is substantial.

Let me draft carefully.

THINK_TRACE: I need to do deep multi-hop derivation. Let's trace:
- Hop 1: Definition of favorable game and capital recursion.
- Hop 2: Expected value maximization leads to ruin (martingale/doubling).
- Hop 3: Kelly growth rate G(f) and its derivative.
- Hop 4: f* = p-q and the zero-growth boundary f_e.
- Hop 5: Extension to continuous distributions and Theorem 2's support condition.
- Hop 6: Application to S&P 500 with truncated normal and numerical root finding.
- Hop 7: The ruin boundary f_c ≈ 1.69 vs -1/A = 1/0.590 ≈ 1.6949.
Gray-zone audit: OCR artifacts, missing explicit equation for h, Table 1 missing n=3 probability value (OCR shows .35 then .29?), lognormal superiority but computational burden, 1992 data stationarity assumption.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.

Let me write out equations properly:

Capital recursion (p. 922):
\[ X_k = X_{k-1} + T_k B_k, \quad T_k = \begin{cases} +1 & \text{w.p. } p \\ -1 & \text{w.p. } q \end{cases} \]
\[ X_n = X_0 + \sum_{k=1}^n T_k B_k \]

Fixed fraction: \( B_k = f X_{k-1} \implies X_n = X_0 (1+f)^S (1-f)^F \)

Growth coefficient (p. 922):
\[ G(f) = p\ln(1+f) + q\ln(1-f) \]
\[ f^* = p - q \]

Derivative:
\[ G'(f) = \frac{p}{1+f} - \frac{q}{1-f} \]
Strictly decreasing on \([0,1)\), \(G'(0)=p-q>0\), \(\lim_{f\to1^-}G'(f)=-\infty\).

Zero growth boundary \(f_e\): \(G(f_e)=0\), \(0<f^*<f_e<1\).

Uneven payoff \(b\) (p. 924):
\[ f^* = \frac{bp-q}{b} \]

Continuous case (pp. 924-926):
\[ G(f) = \int \ln(1+fs) \, dF(s) \]
\[ G'(f) = \int \frac{s}{1+fs} \, dF(s) \]
Theorem 2: if \(\mu = \int s\,dF(s) > 0\), unique max at \(f^* \in (0, -1/a)\) where \(a = \sup\{s: F(-\infty,s)=0\}\).

S&P 500 (p. 928):
\[ \mu = 0.058, \quad \sigma = 0.2160, \quad n=59 \text{ years (1926-1984)} \]
Truncation: \(A = \mu - 3\sigma = -0.590\), \(B = \mu + 3\sigma = 0.706\).
Quasi-normal correction: \(h = (1 - 0.997006378)/(B-A)\), \(\alpha = 0.2183\).
Result (p. 929): \(f^* = 1.17\), \(G(f^*) = 0.0350444711\).
Ruin boundary (p. 930): \(f_c = 1.69+\), essentially \(-1/A = 1/0.590 \approx 1.6949\).

Table 1 (p. 928): \(P(\text{negative excess return over } n \text{ years})\): \(n=2:0.38, n=10:0.21, n=20:0.13, n=40:0.05\), etc.

Units: \(G\) in nats per trial (natural log), \(f\) dimensionless, \(X\) in currency, time in years.

Breakdown/singularity:
- \(1+fs \le 0\) for some \(s\) in support \(\implies \log\) undefined, \(G \to -\infty\).
- \(f \ge -1/a\) hits the lower support boundary.
- Discrete minimum bet \(\epsilon > 0\) makes true ruin possible.
- Non-stationarity invalidates constant \(\mu,\sigma\).

RETROCAUSAL_GENEALOGY:
Kelly 1956 [2] -> Breiman 1961 [6] -> Thorp blackjack [3] & 1969 [4] -> portfolio choice 1972 [5] -> this 1992 paper. Feller [1] for gambler's ruin. Moore 1962 [8] for i.i.d. price changes. Reichenstein 1986 [9] for data. Kritzman 1991 [10] for uncertainty.
Multi-week traps: 
- Trap 1: Short-run negative excess return probability is high (Table 1: 38% over 2 years). Investors abandoning Kelly after a 1-2 year drawdown convert asymptotic optimality into realized suboptimality.
- Trap 2: The leverage boundary \(f_c \approx 1.69\) is numerically close to recommended \(f^*=1.17\), but the growth curve is steep near \(-1/A\); estimation error in \(\sigma\) shifts \(A\) and moves \(f_c\).
- Trap 3: Scale invariance illusion (Example 2 p. 925-926): changing return interval changes optimal leverage dramatically (0.63 -> 1.95) even when mean changes little, so parameter uncertainty maps nonlinearly to position size.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: After losses, agents regress to either timid betting (minimize ruin probability, minimize \(E[\log X]\)) or aggressive expected-value maximization (bet all, certain ruin). Both are absorbing failure modes relative to Kelly.
Counter-trap: Overconfidence in edge \(\hat{p}\) or \(\hat{\mu}\) pushes \(f\) above \(f^*\) into the \(G(f)<0\) zone (Theorem 1 ii). Underestimation of downside support \(a\) pushes \(f\) beyond \(-1/a\), making \(\log(1+fs)\) undefined on part of the support.
Clock: Theorem 1 (iv), (v) is asymptotic (\(n\to\infty\)). With annual rebalancing and a 59-year sample, the "clock" is too short to observe convergence; sequence-of-returns risk dominates early horizons.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical execution: 1992 Apple IIe, Simpson's Rule n=1000; real-time rebalancing impossible for high-frequency signals. Veto: intraday tactical Kelly not implementable from this model.
- Biomechanical/psychological: drawdown tolerance. Table 1 implies a 21% chance of negative excess return over 10 years; a human investor cannot violate the drawdown constraint without abandoning the strategy.
- Weather/exogenous: p. 930-931 explicitly cites cataclysmic earthquake, massive global recession, program trading, internationalization. These are outside the quasi-normal support \([-0.590, 0.706]\). Veto: model invalid under regime change.
- Financial structure: margin cost > T-bill rate (p. 930) reduces effective \(\mu\); taxes and brokerage omitted. Veto: 117% leverage recommendation collapses if financing spread exceeds edge.

RLVR_COUNTERFACTUAL_VETOES:
1. Scenario: Financing cost. If margin loan rate exceeds T-bill rate by \(\delta > 0\), effective excess return \(\mu_{\text{eff}} = 0.058 - \delta\). Prediction: For \(\delta \ge 0.058\), \(\mu_{\text{eff}} \le 0\), Theorem 2 fails and Kelly prescribes \(f^* = 0\); no stock exposure is optimal. Verifiable by recomputing integral with shifted mean.
2. Scenario: Tail extension. If true lower support \(a < -1/1.17 \approx -0.8547\), then recommended \(f^*=1.17\) violates \(f < -1/a\). Prediction: \(G(f)\) undefined on part of support, or if quasi-normal truncation is retained but true distribution has mass below \(-0.855\), the investor faces drawdowns exceeding \(-100\%\) relative to margin; ruin probability becomes 1 for any \(f > -1/a_{\text{true}}\).
3. Scenario: Serial correlation. If annual excess returns follow AR(1) with \(\rho > 0\) rather than i.i.d., the ergodic growth rate is not \(\int \log(1+fs)dF(s)\). Prediction: The time-average growth rate under fixed \(f=1.17\) falls below \(G(f^*)=0.0350\); a lower Kelly fraction \(f^{**}<1.17\) dominates under the correlated measure. Verifiable by simulating AR(1) returns and comparing sample path growth.

I need to ensure no betting lines. I won't mention spreads, totals, moneylines, odds. I might mention "probability" which is fine. I won't say "even money". I'll say "unit payoff" or similar if needed, but better avoid.

Word count check: I need to write enough. Let's aim for ~1500-2000 words total across sections.

Citations: Use [PAGE 922], [PAGE 923], etc. The source text pages are numbered 922-931 in the journal. I'll cite those exact page numbers.

Verbatim quotes: I should include some short quotes with page markers. For example:
- Page 922: "By a 'favorable game' we mean one in which there exists a strategy such that Pr(lim X = + ∞)  0" (OCR artifact, likely > 0).
- Page 929: "f* = 1.17 and the growth coefficient G(f*) = .0350444711."
- Page 930: "f_c = 1.69+."

Let me write the response now. I'll make sure to format with the exact XML tags.

One thing: The prompt says "SOURCE TEXT:" but the text says Volume 99, Number 10 / DECEMBER 1992, while the drive path says Thorp-2006. I should just cite the pages as given in the text: [PAGE 922] through [PAGE 931]. I won't mention the year discrepancy unless necessary.

Also "ZERO TOY EQUATIONS" - I will not invent any equations not in the text or standard math. All equations are from the source or basic definitions.

Let me draft.

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

I'll write detailed content.

Let's ensure the word count. I'll count roughly as I write.

THINK_TRACE target: ~350-400 words.
SOURCE_OPERATORS: ~300 words.
RETROCAUSAL: ~250 words.
RECURSIVE_TOM: ~250 words.
CROSS_LAYER: ~250 words.
RLVR: ~250 words.
Total ~1650 words. Good.

Let's write.

In THINK_TRACE, I'll do multi-hop derivation:
1. From recursion to ruin under expected-value maximization.
2. From fixed-fraction to growth rate log objective.
3. From derivative to f*.
4. From discrete to continuous support constraint Theorem 2.
5. From S&P moments to truncated interval and numerical f*.
6. Gray zones: OCR, missing h formula, Table 1 gap, stationarity.

I'll include verbatim quotes where useful.

Now writing carefully.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

Hop 1 — Capital recursion and the ruin asymmetry. On [PAGE 922], the source defines a favorable game as one for which Pr(lim X = +∞) > 0, with capital recursion X_k = X_{k-1} + T_k B_k and X_n = X_0 + Σ_{k=1}^n T_k B_k. The text proves that maximizing E(X) alone forces B_1 = X_0 and full reinvestment after wins, producing Pr(ruin) = 1 − p^n and lim_{n→∞}(1 − p^n) = 1 for 1/2 < p < 1. Thus expected-value maximization is a self-destroying attractor: the path of highest mean capital almost surely hits zero.

Hop 2 — Fixed-fraction bet sizing and the growth functional. Restricting to B_k = f X_{k-1}, 0 ≤ f ≤ 1, gives X_n = X_0 (1+f)^S (1−f)^F with S + F = n. The source defines the exponential growth coefficient G(f) = p ln(1+f) + q ln(1−f), noting G(f) = (1/n)E(log X) − (1/n)log X_0. For fixed n, maximizing G(f) is identical to maximizing E[log X]. This converts an additive capital problem into a logarithmic concavity problem with a unique interior maximizer.

Hop 3 — First-order condition and the zero-growth boundary. Differentiating yields G'(f) = p/(1+f) − q/(1−f), strictly decreasing on [0,1), with G'(0) = p − q > 0 and lim_{f→1−} G'(f) = −∞. The unique maximum sits at f* = p − q. A second critical value f_e solves G(f_e) = 0 with 0 < f* < f_e < 1. Theorem 1(i–iii) on [PAGE 923] partitions behavior: G(f) > 0 ⇒ X_n → ∞ a.s.; G(f) < 0 ⇒ X_n → 0 a.s.; G(f) = 0 ⇒ almost-sure oscillation between 0 and +∞.

Hop 4 — Uneven payoff and continuous extension. For a payoff of b units per unit wagered, [PAGE 924] gives f* = (bp − q)/b. The continuous analogue maximizes G(f) = ∫ ln(1+fs) dF(s). Theorem 2 [PAGE 926] guarantees a unique maximum at f* ∈ (0, −1/a) when μ = ∫ s dF(s) > 0 and a = sup{s : F(−∞, s) = 0} is finite. The lower support boundary −1/a is a hard singularity: beyond it, 1 + fs ≤ 0 for some s in the support and the log is undefined.

Hop 5 — S&P 500 calibration and numerical resolution. Using 59 annual excess returns (1926–1984), μ = 0.058, σ = 0.2160 [PAGE 928]. Because a pure normal distribution permits unbounded negative returns and pushes the Kelly integral toward a meaningless lower limit [PAGE 928], the authors truncate to a quasi-normal density on A = μ − 3σ = −0.590 to B = μ + 3σ = 0.706 [PAGE 929], with tail correction h = (1 − 0.997006378)/(B − A) and α = 0.2183 calibrated by Simpson's Rule with n = 1000. Numerical maximization yields f* = 1.17 and G(f*) = 0.0350444711 [PAGE 929]. The chaotic ruin point f_c lies very close to −1/A = 1/0.590 ≈ 1.6949; computer runs place f_c = 1.69+ [PAGE 930], so leverage above ~1.7× guarantees ruin almost surely.

Gray-zone audit. The OCR contains dropped inequality symbols (e.g., "p - q  0" means p − q > 0) and a garbled Table 1 row for n = 3. The explicit formula for h is given but the normalizing density N(s) is only partially specified; α = 0.2183 is reported as numerically calculated without showing the residual equation. The authors concede the lognormal distribution is superior but computationally cumbersome [PAGE 927], and explicitly exclude transaction fees, taxes, and exogenous catastrophes [PAGE 930–931]. These omissions are not footnotes; they are structural veto conditions that must be adjudicated before deploying f* = 1.17.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, citations, and breakdown regimes.

Discrete binomial game [PAGE 922]:
- T_k ∈ {+1, −1}, Pr(T_k = +1) = p, Pr(T_k = −1) = q = 1 − p.
- X_k = X_{k-1} + T_k B_k, X_n = X_0 + Σ_{k=1}^n T_k B_k.
- Units: X in currency; B_k in currency; f dimensionless fraction of current capital; G in natural-log growth per trial (nats/trial).

Fixed-fraction capital [PAGE 922]:
- B_k = f X_{k-1} ⇒ X_n = X_0 (1+f)^S (1−f)^F, S + F = n.
- "Ruin" redefined: for arbitrarily small ε > 0, lim_{n→∞} Pr(X_n ≤ ε) = 1.

Growth coefficient and optimizer [PAGE 922]:
- G(f) = p ln(1+f) + q ln(1−f).
- f* = argmax G(f) = p − q.
- G(f*) = p ln p + q ln q + ln 2 > 0 (even-payoff case).
- G'(f) = p/(1+f) − q/(1−f), strictly decreasing; G'(0) = p − q > 0; lim_{f→1−} G'(f) = −∞.

Zero-growth boundary [PAGE 923]:
- f_e ∈ (f*, 1) solves G(f_e) = 0. Example 1: p = 0.53, q = 0.47 ⇒ f* = 0.06, G(f*) = 0.016566, f_e ≈ 0.11973 [PAGE 923].

Uneven payoff [PAGE 924]:
- Payoff b units per unit wagered, pb − q > 0 ⇒ f* = (bp − q)/b.

Continuous gambling games [PAGE 924–926]:
- G(f) = ∫ ln(1+fs) dF(s).
- G'(f) = ∫ s/(1+fs) dF(s), strictly decreasing where defined.
- Theorem 2 [PAGE 926]: μ = ∫ s dF(s) > 0 ⇒ unique maximum at f* ∈ (0, −1/a), a = sup{s : F(−∞, s) = 0}, provided −1/a is finite.

S&P 500 application [PAGE 928–930]:
- Historical sample: 1926–1984, n = 59 years, μ = 0.058, σ = 0.2160.
- Truncation: A = μ − 3σ = −0.590, B = μ + 3σ = 0.706.
- Quasi-normal correction: h = (1 − 0.997006378)/(B − A), α = 0.2183 [PAGE 929].
- Numerical result: f* = 1.17, G(f*) = 0.0350444711 [PAGE 929].
- Ruin boundary: f_c = 1.69+ ≈ −1/A = 1.6949 [PAGE 930]; wagering f > 1.7 × current capital ⇒ ruin certain.

Table 1 tail probabilities [PAGE 928]:
- Pr(negative excess return over n years): n = 2 → 0.38; n = 10 → 0.21; n = 20 → 0.13; n = 40 → 0.05.

Breakdown and singularity regimes:
1. Log-domain singularity: if f ≥ −1/a, then 1 + fs ≤ 0 for s near a and G(f) → −∞; the optimization domain collapses.
2. Quantization: minimum bet ε > 0 makes true ruin (X_k = 0) possible, violating the infinitely divisible assumption [PAGE 924].
3. Non-stationarity: program trading, internationalization, and exogenous shocks invalidate the constant μ, σ assumption [PAGE 930–931].
4. Financing spread: margin cost above T-bill rate reduces effective μ and can drive f* below 1.0 [PAGE 930].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week behavioral traps.

Lineage. The paper explicitly credits J. L. Kelly (1956) [PAGE 922, ref. 2], L. Breiman's theoretical underpinnings (Fourth Berkeley Symposium, 1961) [PAGE 922, ref. 6], and E. O. Thorp's prior applications to casino blackjack [ref. 3], other gambling games [ref. 4], and portfolio choice [ref. 5, 1972]. W. Feller [ref. 1] supplies the gambler's ruin formula; A. Moore (1962) [ref. 8] supports the i.i.d. price-change approximation; Reichenstein (1986) [ref. 9] supplies the 1926–1984 S&P excess-return moments; Kritzman (1991) [ref. 10] frames uncertainty. This is a continuous thread from information theory (Kelly's "new interpretation of information rate") through casino edge-play to institutional asset allocation.

Multi-week traps embedded in the genealogy. (i) Short-horizon abandonment: Table 1 shows a 0.38 probability of negative excess return over just two years and 0.21 over ten years [PAGE 928]. An investor evaluating the Kelly strategy on a multi-week or multi-month clock will almost certainly observe drawdowns and regress to either timid betting (minimizing ruin probability while also minimizing expected growth) or full-capital expected-value maximization (certain ruin). Both are absorbing errors relative to the asymptotic Kelly path. (ii) Leverage boundary illusion: f* = 1.17 sits numerically close to f_c = 1.69+, but G'(f) is very steep near −1/A [PAGE 930]. Small estimation error in σ shifts A = μ − 3σ, which moves −1/a nonlinearly; an investor who believes σ = 0.20 when it is 0.24 computes a different A and may accidentally cross f_c. (iii) Scale-change sensitivity: Example 2 shows that compressing the return interval from [30, 200] to [70, 150] changes f* from 0.63 to 1.95 while the mean changes only from +0.15 to +0.10 [PAGE 925–926]. Parameter uncertainty therefore maps explosively into position size; a multi-week estimation window with volatile σ estimates will whipsaw leverage between no exposure and dangerous margin.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression, counter-trap structure, and the decision clock.

Crisis habit regression. When drawdowns occur, human operators typically regress along two pathological branches. The timid branch minimizes the probability of ruin, which the source shows simultaneously minimizes expected average gain [PAGE 922]: the investor under-risks, G(f) < G(f*), and compounding decay dominates. The aggressive branch maximizes E(X), which the source proves leads to almost-sure ruin because Pr(ruin) = 1 − p^n → 1 [PAGE 922]. Kelly occupies the unstable middle: log-utility maximization is mathematically optimal but psychologically fragile because it requires enduring the 38% two-year negative-return probability without abandoning the system [PAGE 928].

Counter-trap. The primary counter-trap is overestimation of edge. If the operator believes p or μ is larger than reality, the prescribed f* shifts right into the G(f) < 0 zone, where Theorem 1(ii) gives lim X_n = 0 almost surely [PAGE 923]. A secondary counter-trap is underestimation of downside support a: if the true lower tail extends below −0.590 but the model truncates at A = −0.590, the operator may take f = 1.17 while the true feasible ceiling −1/a_true is lower, placing the portfolio inside the log singularity. Both traps are recursive because losses reinforce the belief that the model is broken, prompting either abandonment (timid regression) or doubling down to "get back to even" (aggressive regression).

The clock. Theorem 1(iv) and (v) establish asymptotic optimality as n → ∞: the Kelly strategy dominates any essentially different strategy in the limit X(Kelly)/X(other) → ∞ a.s., and expected time to any fixed goal is minimized [PAGE 923]. But the S&P calibration uses annual rebalancing over a 59-year sample [PAGE 928]. The "clock" is therefore coarse: one decision per year, thin tail history, and no guarantee that the i.i.d. normal approximation holds over the investor's actual horizon. Sequence-of-returns risk in the first 5–10 years can destroy the investor before the asymptotic regime is reached, making the theoretical clock misaligned with the biological clock of the operator.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proof.

Physical/execution layer. The numerical work was performed on an Apple Ile microcomputer with Simpson's Rule at n = 1000 [PAGE 929]. This establishes that the model is an offline, annual-rebalancing construct, not a real-time execution system. Veto: intraday or continuous rebalancing at f* = 1.17 is not implementable from this formalism; any implementation must respect discrete annual decision epochs and settlement latency.

Biomechanical/psychological layer. Table 1 implies a 0.21 probability of negative excess return over a decade [PAGE 928]. A human subject cannot violate a personal drawdown constraint without triggering strategy abandonment. Veto: if the operator's maximum tolerable drawdown is less than the equity decline implied by a 1.17× leveraged S&P position in a bad year, the Kelly fraction is physically unimplementable regardless of its asymptotic optimality.

Weather/exogenous layer. The authors explicitly list cataclysmic earthquake, massive global recession, program trading, and internationalization as exogenous events outside the quasi-normal model [PAGE 930–931]. The support truncation [−0.590, 0.706] excludes crashes like 1987 by construction. Veto: under regime change or fat-tailed exogenous shocks, the assumptions of Theorem 2 fail; the unique maximum at f* = 1.17 ceases to exist or becomes negative.

Financial structure layer. Transaction fees, taxes, and margin costs above the T-bill rate are omitted [PAGE 930]. If financing spread exceeds the excess-return edge, effective μ falls below zero and Theorem 2's condition μ > 0 collapses. Veto: the recommendation to invest 117% of current resources is contingent on margin at the T-bill rate; real-world margin pricing reduces f*, potentially to zero.

Adjudication result. The formal Kelly solution f* = 1.17 survives only under the conjunction of: (a) i.i.d. quasi-normal annual excess returns; (b) infinite divisibility and no minimum bet; (c) margin financing at T-bill rates; (d) zero taxes and transaction costs; (e) operator psychology that tolerates a 38% two-year loss probability. Violation of any single layer voids the leverage recommendation.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable counterfactual veto scenarios with falsifiable predictions.

Veto Scenario 1 — Financing-cost wedge. Counterfactual: the investor can only borrow at a rate exceeding the T-bill rate by δ > 0, so the effective excess-return mean becomes μ_eff = 0.058 − δ. Verifiable condition: recompute G(f) with the quasi-normal density shifted by −δ. Prediction: if δ ≥ 0.058, then μ_eff ≤ 0, Theorem 2's premise fails, and the Kelly-optimal fraction is f* = 0 (no stock exposure). For 0 < δ < 0.058, f* falls strictly below 1.17; at some δ < 0.058, f* crosses below 1.0, eliminating margin entirely. This is directly testable by re-running the Simpson's Rule integration on [PAGE 929] with the shifted mean.

Veto Scenario 2 — Tail-support extension. Counterfactual: the true lower support of annual excess returns is a_true < −1/1.17 ≈ −0.8547, extending beyond the model's A = −0.590. Verifiable condition: observe one annual return s < −0.855 in the historical or out-of-sample record. Prediction: the recommended f* = 1.17 violates the feasibility condition f < −1/a_true; the integrand ln(1 + fs) becomes undefined on the portion of the support below −1/f, and the time-average growth rate collapses toward −∞ on paths hitting that region. If f_c_true = −1/a_true < 1.17, then wagering 117% of capital produces certain ruin under Theorem 1(ii), regardless of the positive mean. Verifiable by truncating historical returns at a_true and recomputing the integral.

Veto Scenario 3 — Serial dependence violation. Counterfactual: annual excess returns are not i.i.d. but follow a first-order autoregression with persistence ρ > 0. Verifiable condition: reject the i.i.d. null on the 59-year residual series (e.g., Ljung-Box or runs test). Prediction: the ergodic growth rate under fixed f is no longer G(f*) = ∫ ln(1+fs) dF(s). The operator who applies f* = 1.17 derived under i.i.d. assumptions will experience a sample-path growth rate strictly below 0.0350444711 nats/year; a lower Kelly fraction f** < 1.17 computed under the correlated measure dominates in long-run capital. Falsifiable by Monte Carlo simulation of AR(1) excess returns with the same μ and σ, comparing terminal wealth at n = 59 between f = 1.17 and the re-optimized correlated Kelly fraction.
</RLVR_COUNTERFACTUAL_VETOES>