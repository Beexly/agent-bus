---
source: "2023 - Competitive Balance in Professional Sports A Multidimensional Perspective - Bognar et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2023"
pages: 16
model: deepseek/deepseek-v4.1-flash-1017
words: 5810
---

<NATIVE_REASONING>
We need answer. Need parse user wants GSE+GSI Frontier Reasoning Foundry. Need produce XML sections exact. Need no betting lines. Need >=1000 words, THINK_TRACE >=400. Need use source pages cite [PAGE N] and verbatim quotes. Need formal LaTeX, units, assumptions, singularity/breakdown. Need retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication physical/biomechanical/weather veto proof. RLVR counterfactual vetoes 3 verifiable scenarios + predictions. Need likely sports research paper on competitive balance. Need not make betting lines. Need maybe "drive source" is PDF text. Need analyze equations. Need be careful source operators/equations: ARMA(1,1), definitions D_t, M_t, equations. Need formal LaTeX. We need state units: winning percentage dimensionless [0,1], D_t standard deviation dimensionless; M_t autocorrelation dimensionless; parameters φ, θ, ω, σ dimensionless? σ in winning percentage units? Shocks η_t in win percentage units (dimensionless proportion). Time t seasons. Need exact singularity/breakdown regimes: ARMA stationarity requires |φ| < 1; given φ ∈ (-1,0). MA invertibility? θ ∈ (0,1) invertible. Equation shocks variance stated η ~ N(0,(φ^2+ω)σ^2) maybe source weird. D formula includes sqrt((φ²+ω)) * sqrt[1+(φ+θ)^2/(1-φ²)]. M formula. Need note D decreasing and M increasing in φ over range. For θ conditional φ negative, increases θ unambiguously worsen both; but check formula. Need maybe derive limits. Singularity: denominator 1 - φ² zero at φ=±1, not in allowed (-1,0), but boundary. M denominator 1+2φθ+θ² =? Could be zero? For φ∈(-1,0), θ∈(0,1). Denominator positive? Let's check discriminant? 1+2φθ+θ². Minimum over φ at -1 boundary: (1-θ)^2 >=0; zero if θ=1 and φ=-1. Within open positive. M formula could be negative? Need inspect. At φ=-θ? M = (0)(1 - θ²)/(1 - 2θ²+θ²=1-θ²) =0. For φ > -θ? M? They restrict φ ∈ [-θ,-0.01], so M nonnegative? If φ=-θ, M=0. At φ→0-, M→θ? Wait (φ+θ)(1+φθ)/(1+2φθ+θ²) at φ=0 = θ/(1+θ²). At φ=-θ, numerator 0. Strict increasing in φ. D at φ=-θ? sqrt term? D=σ sqrt(φ²+ω)*sqrt(1 +0)=σ sqrt(θ²+ω). At φ→0 D=σ sqrt(ω)*sqrt(1+θ²). Hmm D strictly decreasing in φ over range? If φ from -θ to 0, D decreases? Let's test θ=.8, φ=-.8 D=σ sqrt(.64+ω); φ=0 D=σ sqrt(ω)*sqrt(1.64). If ω? Source says D strictly decreasing in φ over range. This requires maybe ω small? Let's not challenge. Could mention under stated parameterization and assumed ω. Need not derive.

Need produce >=1000 words. Sections must exact. Need include citations. We should cite exact quotes with PAGE markers. Need "SOURCE_OPERATORS_AND_EQUATIONS" formal LaTeX, units, page citations, breakdown.

Need "RETROCAUSAL_GENEALOGY" historical/scientific lineage & multi-week traps. Need relate to literature Fort & Maxcy, Butler, Schmidt & Berri, Vrooman, Lee & Fort, Brave & Roberts, Ferguson Jones Stewart, Blass. Also multi-week traps: misinterpreting season length, normalization to 2019, conflating D/M, non-gate revenue causality, soft cap/luxury tax, lockout-shortened seasons. Need "multi-week traps" maybe from prompt (GSE + GSI Frontier Reasoning Foundry) likely wants multi-week traps analysis. We can interpret as traps over multiple weeks of study/investigation. Need not betting.

Need "RECURSIVE_THEORY_OF_MIND": crisis habit regression vs counter-trap vs clock. This is weird: need think about league actors' recursive beliefs: owners, players, small/large market, CBA negotiation, non-gate revenue. "Crisis habit regression" maybe when under pressure revert to old habits (owners hoard non-gate revenue, suppress payroll, tanking/all-or-nothing). Counter-trap: small-market teams spending vs salary floor. Clock: season length / CBA timing / free agency delay. Need discuss recursive theory of mind: owners model players model owners, league models teams. Need mention "clock" as time-to-free-agency and CBA expiration. Need not mention betting.

Need "CROSS_LAYER_VETO_ADJUDICATION": Physical/biomechanical/weather veto proof. This paper is economics, no physical/biomechanical/weather variables. Need adjudicate: no direct biomechanical or weather layer in source; any such veto would be external and must not be overlaid without data. Need prove from source: variables are winning percentages, revenue, payroll, franchise value; no biomechanics/weather. We can state veto: if any claim about injury, weather, stadium, biomechanics cannot be accepted from this source. Need "veto proof" cite definitions. Need mention physical layer possible through game uncertainty ω but not biomechanical. Need perhaps "weather veto" no weather variables; season length differences are structural not weather. Need cite [PAGE 2] "ω represents a baseline level of variability that is not subject to collective bargaining" and [PAGE 5] season lengths. Need exact quotes.

Need "RLVR_COUNTERFACTUAL_VETOES": 3 verifiable RLVR veto scenarios + predictions. Need make three counterfactual scenarios, each with a veto condition and prediction using equations/data. Must be verifiable. Maybe:
1. If non-gate revenue distribution becomes perfectly equal across teams (NBA-like) in MLB, model predicts θ not necessarily lower? Need be careful. Need formulate as RLVR (reinforcement learning with verifiable rewards?) counterfactual veto: if an explanation claims non-gate revenue growth alone caused MLB imbalance, veto because other leagues had similar non-gate growth but not both D/M deterioration. Prediction: cross-league comparison should show no uniform D/M deterioration; source [PAGE 5] says only MLB experienced substantial deterioration in both. Verification: compute D/M trends; if other leagues similar, claim vetoed.
2. If payroll pass-through of non-gate revenue is high for low-value franchises, model predicts competitive balance improvement? Source says low-value MLB increased payroll most after 2014 but not enough to halt decline. Counterfactual: simulate equal distribution of non-gate revenue to low-value teams; prediction D/M improve vs actual if θ decreases or φ shifts? Need not exact. Need verify via team-level panel and D/M.
3. If shorten time to free agency, θ decreases? Source says sooner free agency quicker player captures MRP; "talent levels across teams should be less sticky" meaning M decreases. Prediction: M lower, payroll up; D ambiguous due φ tradeoff. Verification: before/after free agency in MLB [PAGE 5] shows simultaneous improvement in parity and mobility. If a claim says shortening free agency necessarily reduces disparity, veto because model only predicts mobility less sticky and D may trade off.
Need "RLVR" maybe "Reinforcement Learning from Verifiable Rewards" not betting. Need include prediction measurable.

Need maybe mention no betting lines. We don't mention odds.

Need answer with exact XML tags. Could include opening? Need ensure all sections exact. Need not too long but >=1000 words. We can aim ~1800-2500 words. Desired oververbose 5. Need satisfy.

Need include citations exact [PAGE N] and verbatim quotes. Need use quotes maybe:
[PAGE 1] "competitive balance is a by-product of the distribution of talent" and "lack of consensus itself strongly suggests that competitive balance is multi-dimensional."
[PAGE 2] "winning percentage of any team i in season t evolves according to the ARMA(1,1) process" and "The parameter ω represents a baseline level of variability that is not subject to collective bargaining."
[PAGE 3] "Mt(φ, θ) is strictly increasing and Dt(φ, θ) is strictly decreasing in φ over its range."
[PAGE 5] "only MLB has experienced a substantial deterioration in both measures of competitive balance consistent with an increase in our model parameter θ" and "Disparity is likely to vary substantially across leagues simply because of extreme differences in season lengths".
[PAGE 9] "non-gate revenue growth has significantly outpaced that of gate revenue since 2009 in all four leagues" and "MLB owners have significantly benefitted... franchise values increasing 225%".
[PAGE 12] "MLB is a distinct outlier in this regard. On average, non-gate revenue growth for the highest value franchises was nearly twice as large as that for the lowest value franchises."
[PAGE 14] "NBA ... model for MLB" quote.
[PAGE 15] "anything that more closely aligns non-gate revenues with on-field performance would be a step in the right direction."

Need maybe cite equations as [PAGE 2] for Eq 1-2, [PAGE 3] for Eq 3-4, [PAGE 10] for Eq 5. Need cite page 10 equation. Need include units.

Need maybe derive from Eq 2 to D/M? Formal LaTeX. Need mention stationarity and singularity. Need mention "φ ∈ (-1,0)" and "θ ∈ (0,1)" as source. The shock variance line in PDF says η~N(0,(φ²+ω)σ²) but equation 1 has maybe unusual. Need replicate exactly? Use source. But "ω" maybe baseline. Need write D_t(φ,θ) = σ sqrt(φ²+ω) sqrt[1 + (φ+θ)²/(1-φ²)]. Need M_t = ((φ+θ)(1+φθ))/(1+2φθ+θ²). Need note if φ=-θ then M=0. If φ→0^- then M→θ/(1+θ²). D at φ→0 = σ sqrt(ω) sqrt(1+θ²). At φ=-θ = σ sqrt(θ²+ω). But D strictly decreasing in φ over range under parameter restrictions. Need exact breakdown: denominator 1-φ²=0 at |φ|=1; M denominator zero at φ=-1, θ=1 (outside open range); at φ=-θ, M=0 (boundary no immobility?) but trade-off. Also D formula requires ω≥0, φ²+ω≥0. If ω<0 invalid. If θ=1 and φ=-1 boundary singular. If φ=-1 or φ=1 ARMA unit root/nonstationary.

Need maybe mention "variance ~ N(0,(φ²+ω)σ²)" but in ARMA stationarity variance of w? Actually ARMA(1,1) variance = σ_η²[(1+2φθ+θ²)/(1-φ²)] if η variance σ_η²? But source uses D formula with (φ²+ω). Hmm not derive. We can say exactly as source. Need not challenge.

Need maybe mention "two-way fixed effects" equation 5: log Y_it = sum β_t*1[year=t] + μ_i + ε_it. Units log of 2018 USD, coefficients interpreted as percent change relative 2009 with 100*β_t. Need cite [PAGE 10]. This is formal.

Need "Retrocausal genealogy": need historical lineage. Paper cites reserve clause/free agency late 60s/early 70s; CBA; non-gate revenue national TV 2014 and MLBAM sale 2018; revenue sharing; salary cap hard/soft; luxury tax. "Multi-week traps" maybe:
- Trap 1: Equating low disparity with good balance while ignoring immobility; a league can be compressed but frozen.
- Trap 2: Using raw D across leagues without season-length adjustment; NFL 16 games vs MLB 162; [PAGE 5].
- Trap 3: Normalizing to 2019 can hide level differences; [PAGE 5] says indexed relative to 2019.
- Trap 4: Treating non-gate revenue as monolith; distribution matters (MLB local TV vs NFL national TV vs NBA sharing).
- Trap 5: Assuming salary floor solves balance; source says "Recent CBA discussions that focused on a salary floor are, therefore, likely to have been misguided if the aim was to enhance competitive balance" [PAGE 15].
- Trap 6: Overreading lockout-shortened seasons (NBA 2011-12, NHL 2012-13) in Figure 5 notes [PAGE 11].

Need "Recursive theory of mind": Need structure. Actors:
- Owners believe players will underweight future? Owners prefer high θ because control rights over ex-post beneficial contracts. Players prefer θ near zero. Both care about D and M but weights differ. League chooses φ,θ via Nash bargaining. Owners of high-value franchises benefit from non-gate revenue; they model small-market owners' response and CBA leverage. Small-market teams may spend more if receive revenue, but may fear upward payroll pressure. Players model owners' reservation wages and CBA expiration. The "clock" is time-to-free-agency and CBA duration. "Crisis habit regression": when non-gate revenue makes gate less relevant, owners regress to old habit: cost suppression, tanking/all-or-nothing, service-time manipulation, slotting. Counter-trap: salary floor as apparent fix may fail because low-value teams already increased payroll; instead align revenue with performance or shorten free agency. Clock: short-run lockout-shortened seasons and CBA negotiation windows distort panel; time-to-free-agency changes θ and M. Need mention recursive: large-market owners anticipate small-market owners' dependence on revenue sharing and can bargain for luxury tax as soft cap; small-market owners anticipate player salaries; players anticipate team control. Need cite pages 3, 9, 10, 14, 15.

Need "Cross-layer veto adjudication": Need adjudicate physical/biomechanical/weather veto proof. We must state no physical/biomechanical/weather layer in paper. It has no variables for weather, injury, biomechanics. The only "physical" proxy is game uncertainty ω [PAGE 2] but not measured biomechanically. Weather veto proof: no weather variables, no stadium/attendance weather; any claim that weather caused D/M change is outside source and must be rejected. Biomechanical veto: no player kinematics, injury, force, fatigue; cannot infer from revenue/payroll. Physical veto: season length is institutional, not physical; cite [PAGE 5] season lengths. If external physical data is introduced, it must enter as a separate covariate or as part of ω; otherwise it is an unverified layer. Need maybe "veto proof" by source's variable set: w_it, η_it, φ, θ, ω, σ, D_t, M_t, log non-gate revenue, log payroll, franchise value, year FE, team FE. No weather/biomechanical variables. Good.

Need "RLVR counterfactual vetoes": Need formal. Let's design 3 with "veto if" and prediction. Use verifiable metrics from paper. Need maybe include "RLVR" label. Scenarios:
1. **Cross-league non-gate monotonicity veto**: Claim: "Rising non-gate revenue mechanically reduces competitive balance in all leagues." Veto if D_t and M_t do not both deteriorate in NFL/NBA/NHL despite non-gate growth. Source [PAGE 5] says only MLB deteriorated both; NBA small increase disparity not immobility; NFL opposite; NHL immobility fell with disparity roughly unchanged. Prediction: team-level non-gate revenue growth should be positive and significant in all four leagues (page 10-12; MLB +49%, payroll +17%; source [PAGE 10] exact). If claim is tested, it fails in 3/4 leagues. Good.
2. **Revenue-sharing distribution veto**: Claim: "Equalizing non-gate revenue across teams is sufficient to improve both D and M in MLB." Veto because model and evidence show distribution matters but pass-through incomplete. Scenario: assign MLB non-gate revenue growth equally across low/mid/high franchise value teams and keep θ fixed. Prediction: payroll for low-value teams rises (they already increased most [PAGE 14]) but D/M may not both improve unless θ falls or φ changes; source says low-value franchises increased payroll most yet "these gains still were not enough to halt the overall decline in competitive balance in MLB" [PAGE 14]. Veto if D/M remain deteriorated after equalization. Verification: compare counterfactual panel. Need maybe not too speculative but okay.
3. **Time-to-free-agency / mobility veto**: Claim: "Shortening time to free agency necessarily reduces disparity." Model predicts M decreases (less sticky talent) and payroll up; D ambiguous due φ trade-off. Source [PAGE 15] "talent levels across teams should be less sticky from year-to-year"; [PAGE 5] free agency improved both parity and mobility historically. Prediction: M declines; D may improve or worsen depending on φ/θ. Veto if a study equates shorter free agency with guaranteed D improvement without estimating φ/θ trade-off. Verification: pre/post free agency in MLB and other leagues; measure M and D. Good.
Need maybe include exact "RLVR" as "verifiable reward" maybe each scenario has "veto condition" and "prediction". Need be concise.

Need ensure XML sections exact and no extra outer text? We can wrap in root? User asked exact XML sections; could output them sequentially. Maybe include `<THINK_TRACE>` etc. Need no markdown? XML tags. We can use LaTeX inside. Need avoid unescaped `<` maybe? In XML, need escape `<`? We can write LaTeX with `\lt` or `&lt;`. Since they want XML sections, text contains `<` in equations? We can avoid raw `<` except tags. Use `\lt` in LaTeX or `\in (-1,0)`. Need escape ampersand? Use `&`? In XML must escape `&`. Avoid ampersands or use `&amp;`. Since user likely accepts. Better use `&lt;` if needed. But in text, we can write "less than" instead of `<`. In LaTeX, use `\varphi \in (-1,0)` no `<`. Use `\leq`? That's not raw `<`. Good.

Need produce >=1000 words. Let's draft ~2500 words. Need ensure THINK_TRACE >=400 words. We'll write ~700 words maybe. Overall >1000. Need not overdo.

Let's construct.

Potential issue: "ZERO TOY EQUATIONS" — we must not invent fake ratios. We will use source equations only. For RLVR scenarios, maybe avoid new equations? We can mention formal condition e.g., veto if ΔD ≤ 0 and ΔM ≤ 0 etc. That's not fake ratio, it's verification. Need if using inequalities with `<`, avoid XML. Use `\Delta D_t` etc. Could be okay. Use \(\Delta D_t \ge 0\). No raw `<`.

Need "SOURCE_OPERATORS_AND_EQUATIONS": Use exact LaTeX. Need maybe "Page 2 source prints shocks as \(\eta_{it}\sim N(0,(\varphi^2+\omega)\sigma^2)\)" but the equation in source might have weird subscript. We'll quote. Need units: winning percentage dimensionless, standard deviation same, autocorrelation dimensionless, σ and η in win-share units? Since winning percentage is proportion, σ has proportion units (dimensionless). ω dimensionless? φ,θ dimensionless. Log variables in Eq 5 are logs of 2018 USD; β_t are log-points, 100β_t percent. Need mention "team fixed effect μ_i" in log USD? Actually μ_i is team fixed effect in log units. ε_it log residual.

Need breakdown: "ARMA(1,1) stationarity |φ|<1; source restricts φ∈(-1,0); θ∈(0,1). D formula needs 1-φ²>0; M needs denominator not zero; at φ=-1,θ=1 boundary singular; at φ=-θ M=0; the model's trade-off range is [-θ,-0.01]; if φ < -θ both D and M can be reduced by choosing φ > -θ [PAGE 3]. If ω<0 or σ<0 squared invalid; if season length comparisons use raw D without scale, violates source caveat [PAGE 5]." Need mention "if source's parameter restrictions are violated, the signed comparative statics need not hold." Good.

Need "RETROCAUSAL_GENEALOGY" historical lineage: competitive balance literature: conventional within-season Butler 1995; across-season Schmidt & Berri 2004, Vrooman 2009; measurement Lee & Fort 2005, Brave & Roberts 2019; Fort & Maxcy 2003; Ferguson Jones Stewart 2000; Blass 1992. CBA/free agency; reserve clause; non-gate revenue; MLBAM sale; national TV. Multi-week traps. Need maybe "retrocausal" means tracing current outcomes back to prior institutional changes. We'll frame.

Need "RECURSIVE_THEORY_OF_MIND": Need "crisis habit regression vs counter-trap vs clock" explicitly. We can have three subsections in text. Use exact words. Need maybe mention "crisis habit regression" occurs when owners under non-gate windfall revert to cost suppression and tanking; "counter-trap" is salary floor or equalization that may not fix; "clock" is time-to-free-agency and CBA/lockout timing. Good.

Need "CROSS_LAYER_VETO_ADJUDICATION": Need "Physical/biomechanical/weather veto proof." We'll write a clear veto proof: Source's admissible variables are enumerated; no physical/biomechanical/weather. If external layer proposed, must be rejected as not identified. The only uncertainty parameter is ω; season length is institutional not weather; no biomechanical terms. Cite [PAGE 2] and [PAGE 5]. Good.

Need "RLVR_COUNTERFACTUAL_VETOES": Need 3 scenarios with predictions. We can label "Veto scenario 1..." etc. Need "verifiable" with metrics. Good.

Need final no betting. Avoid words "odds", "spread", "moneyline", "totals". Good.

Need maybe mention "no betting lines" no issue.

Let's write with XML tags. Need escape `&` in "D&M"? Avoid. Use "D and M". Need avoid raw `&`. Use "and". In XML, no ampersands. Use "95 percent" not `%`? `%` okay. Use `$`? LaTeX within text okay. Need use `\(...\)`? Fine. Need no raw `<`. Use "less than" words. Use `\varphi \in (-1,0)`. Good.

Need include exact quotes with page markers. We'll quote with quotation marks. Need not use `&quot;` since text quote okay. Ampersand in references? Avoid. "Fort and Maxcy". Good.

Need possible tag nesting with LaTeX `\[`? Fine. Need no `<` in `\leq`. Good. Use `\le` not raw. Good.

Let's draft.

Need check word count. We can produce ~2500 words. Let's estimate. THINK_TRACE ~650. SOURCE ~600. RETRO ~450. RECURSIVE ~450. CROSS ~350. RLVR ~450. Total ~2950. Good.

Need include ">= 1,000-word depth across exact XML sections" yes.

Potential issue: They want "GSE + GSI Frontier Reasoning Foundry" maybe no need mention. We can just answer.

Let's craft with precise citations.

THINK_TRACE: Start with multi-hop derivation: source defines D and M from ARMA; D and M functions; trade-off; non-gate revenue; team fixed effects; compare leagues; identify causal claims; audit gray zones. Mention cannot infer causality from descriptive Figure 2 alone; but paper uses cross-league and distribution variation. Mention "MLB outlier" and "only MLB both deteriorate" [PAGE 5]. Mention "highest value franchises nearly twice" [PAGE 12]. Mention "low value franchises increased payroll most but not enough" [PAGE 14]. Mention "salary floor misguided" [PAGE 15]. Mention "multi-week traps" maybe in retro. Need "gray-zone audit" explicitly. Good.

Need "exact singularity/breakdown regimes" in SOURCE. Good.

Need "SOURCE_OPERATORS_AND_EQUATIONS" formal. Let's write.

Potential need "units SI/information/probability units" — sports econ not SI. We can say "dimensionless probability-proportion units; monetary variables in 2018 USD; log-points." Good.

Need "information/probability units" — maybe mention "N(0, ...)" is Gaussian probability distribution; no bits. Could mention "No information-theoretic unit is defined in the source; any bits/nats claim would be invented." That satisfies. Good.

Need "formal LaTeX equations" include Eq 1, Eq 2, Eq 3, Eq 4, Eq 5. Need maybe "w_{it}" not "w_it". Good.

Need "breakdown" as bullet list. Good.

Need "RETROCAUSAL_GENEALOGY" include "multi-week traps" with maybe "Week 1 trap", "Week 2 trap" etc? User says multi-week traps. Could list "Trap A...". Good.

Need "RECURSIVE_THEORY_OF_MIND" maybe "crisis habit regression" term. We'll use exact phrase.

Need "CROSS_LAYER_VETO_ADJUDICATION" maybe "Veto" in bold? Fine. Need "physical/biomechanical/weather veto proof" exact. Good.

Need "RLVR_COUNTERFACTUAL_VETOES" 3 scenarios. Good.

Need maybe no "betting" words. Fine.

Let's produce final.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core multi-hop move is this: competitive balance is not one observable but a latent consequence of talent distribution, so the authors replace a single “balance” statistic with two dimensions derived from a stochastic process for team winning percentages. First, they define within-season disparity as the cross-team standard deviation of winning percentages and across-season immobility as the pooled first-order autocorrelation of winning percentages [PAGE 3]. Second, they model \(w_{it}\) as an ARMA(1,1) process with parameters \(\varphi\) and \(\theta\) that are treated as collectively bargained institutional objects [PAGE 2]. Third, they solve for \(D_t(\varphi,\theta)\) and \(M_t(\varphi,\theta)\), showing that over the relevant range \(M_t\) is strictly increasing and \(D_t\) is strictly decreasing in \(\varphi\), which creates a frontier trade-off: moving \(\varphi\) can improve one dimension only by worsening the other [PAGE 3]. Fourth, they interpret \(\theta\) as owners’ control rights over ex-post beneficial contractual terms; an increase in \(\theta\) shifts the frontier outward and unambiguously worsens both parity and mobility [PAGE 3]. Fifth, they use this framework to read MLB’s recent deterioration: non-gate revenue grew faster than gate revenue in all four leagues [PAGE 9], but only MLB experienced substantial simultaneous deterioration in both measures [PAGE 5], and MLB’s non-gate revenue growth was concentrated among the highest-value franchises, nearly twice as large as for the lowest-value franchises [PAGE 12]. Sixth, they test team-level behavior with two-way fixed effects: \(\log Y_{it}\) on year indicators plus team fixed effects, normalized so that \(100\beta_t\) is the average percent change relative to 2009 [PAGE 10]. The empirical result is not that payroll fell—average payroll rose—but that payroll growth was far smaller than non-gate revenue growth and was concentrated in 2014–2019 [PAGE 12]. Seventh, they compare institutions: the NBA’s aggressive revenue sharing and luxury tax are presented as a possible model for MLB because the lowest-value NBA franchises gained the most non-gate revenue and increased payroll the most after 2014 [PAGE 14]. The gray-zone audit is that the paper’s causal claim is not identified by a single regression; it is an inference from cross-league heterogeneity, within-league franchise-value heterogeneity, and the timing of CBA and media-rights changes. The safest reading is conditional: non-gate revenue growth alone is insufficient to explain MLB’s decline, because the NFL, NBA, and NHL also had non-gate growth without MLB-style simultaneous deterioration [PAGE 5]. The paper’s stronger claim is that distribution and bargaining power matter: when non-gate revenue is less tied to winning, owners’ bargaining position improves, \(\theta\) rises, and players’ revenue share falls [PAGE 9]. The audit also flags measurement traps: disparity is sensitive to season length, while immobility is less so [PAGE 5]; 2019 normalization hides level differences; lockout-shortened NBA and NHL seasons distort year effects [PAGE 11]; and a salary floor may be misguided if low-value teams already increased payroll [PAGE 15]. Thus the derivation chain is: ARMA parameters → \(D_t\) and \(M_t\) frontier → institutional interpretation of \(\varphi\) and \(\theta\) → non-gate revenue distribution → team payroll response → cross-league comparison. The unresolved gray zone is that the source does not provide a structural estimate of \(\theta\); it provides a disciplined theoretical mapping and reduced-form evidence. Any claim that one policy “must” improve both dimensions must therefore be vetoed unless it specifies the \(\varphi\)-\(\theta\) movement and the revenue-sharing incidence.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The source’s formal operators are probability-proportion and monetary-panel operators, not SI mechanical operators. Winning percentage \(w_{it}\) is dimensionless in \([0,1]\); \(\mu\equiv 0.5\) is the average winning percentage; \(\eta_{it}\) is a performance shock in winning-percentage units; \(\varphi\), \(\theta\), and \(\omega\) are dimensionless institutional and variance parameters; \(\sigma\) is a scale parameter in winning-percentage units. The source states the ARMA(1,1) process as [PAGE 2]:

\[
w_{it}=\mu(1-\varphi)+\varphi w_{it-1}+\eta_{it}+\theta\eta_{it-1},
\qquad
\eta_{it}\sim N\!\left(0,(\varphi^{2}+\omega)\sigma^{2}\right),
\]

with \(\theta\in(0,1)\) and \(\varphi\in(-1,0)\). The deviation form is [PAGE 2]:

\[
w_{it}-\mu=\varphi(w_{it-1}-\mu)+\eta_{it}+\theta\eta_{it-1}.
\]

The two competitive-balance dimensions are [PAGE 3]:

\[
D_t\equiv \operatorname{Std}[w_{it}],
\qquad
M_t\equiv \operatorname{Corr}[(w_{it},w_{it-1})].
\]

The source’s derived functions are [PAGE 3]:

\[
D_t(\varphi,\theta)
=
\sigma\sqrt{(\varphi^{2}+\omega)}
\sqrt{1+\frac{(\varphi+\theta)^{2}}{1-\varphi^{2}}},
\]

\[
M_t(\varphi,\theta)
=
\frac{(\varphi+\theta)(1+\varphi\theta)}
{1+2\varphi\theta+\theta^{2}}.
\]

The source states: “\(M_t(\varphi,\theta)\) is strictly increasing and \(D_t(\varphi,\theta)\) is strictly decreasing in \(\varphi\) over its range” [PAGE 3]. The source also states that conditional on \(\varphi\) being negative, increases or decreases in \(\theta\) lead to unambiguous improvements or deteriorations, respectively, in competitive balance [PAGE 3]. The panel operator is [PAGE 10]:

\[
\log Y_{it}
=
\sum_{t=2002}^{2019}\beta_t \mathbf{1}[\text{year}=t]
+\mu_i+\varepsilon_{it},
\]

where \(Y_{it}\) is non-gate revenue or payroll in 2018 U.S. dollars, \(\mu_i\) is a team fixed effect in log units, and \(\varepsilon_{it}\) is a log residual. The normalization is \(\beta_{2009}=0\), so \(100\beta_t\) is the average percent change relative to 2009 [PAGE 10]. No information-theoretic unit is defined in the source; any bits, nats, or entropy claim would be an invented layer.

Assumptions and singularity/breakdown regimes:
- Stationarity requires \(|\varphi|<1\); the source restricts \(\varphi\in(-1,0)\), so the AR coefficient is a mean-reversion term [PAGE 2]. At \(\varphi=\pm 1\), the denominator \(1-\varphi^{2}\) in \(D_t\) is zero and the ARMA representation is at a unit-root boundary; the source’s formulas break down.
- The allowed range for the frontier analysis is \(\varphi\in[-\theta,-0.01]\) [PAGE 3]. At \(\varphi=-\theta\), \(M_t=0\) in the displayed formula; at \(\varphi\to 0^{-}\), \(M_t\to \theta/(1+\theta^{2})\). The source warns that the league would not choose \(\varphi<-\theta\), because choosing \(\varphi>-\theta\) could reduce both disparity and immobility [PAGE 3].
- The \(M_t\) denominator \(1+2\varphi\theta+\theta^{2}\) is zero at the boundary \(\varphi=-1,\theta=1\), outside the open parameter restrictions; inside the stated restrictions it is positive. The \(D_t\) square root requires \(\omega\ge 0\) and \(\sigma^{2}\ge 0\); negative values are mathematically invalid.
- If the source’s parameter restrictions are violated, the signed comparative statics need not hold. In particular, raw cross-league disparity comparisons are invalid without accounting for season length, because the source notes “Disparity is likely to vary substantially across leagues simply because of extreme differences in season lengths” [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage is the competitive-balance measurement quarrel: within-season concentration versus across-season movement. The source cites Butler for the conventional within-season view, Schmidt and Berri and Vrooman for across-season variation, and Lee and Fort and Brave and Roberts for measurement disagreement [PAGE 1]. Its retrocausal argument runs backward from current MLB imbalance to institutional changes in talent capture: the reserve clause and free agency, collective bargaining, non-gate revenue, local and national television, MLB Advanced Media, revenue sharing, and luxury-tax rules. The source says collective bargaining and free agency in MLB “improved the bargaining position of players such that the equilibrium \(\theta\) decreased, leading to simultaneous improvements in both parity and mobility” [PAGE 5]. It then traces the recent reversal to non-gate revenue: national TV deals and the sale of MLB Advanced Media are named as prominent MLB examples, with league-wide franchise values increasing 225 percent over the same period [PAGE 9]. The source’s historical claim is not that revenue growth is intrinsically bad for balance; it is that non-gate revenue “tends to be less sensitive to a team’s winning percentage,” which improves owners’ bargaining position and raises \(\theta\) [PAGE 5]. The cross-league contrast is the identifying wedge: the NFL, NBA, and NHL also had non-gate growth and declining player shares, but only MLB had substantial deterioration in both measures [PAGE 5].

Multi-week traps to avoid:
1. The single-statistic trap: treating low disparity as “balance” while ignoring high immobility. The source explicitly defines two dimensions [PAGE 3], so a one-number summary can reverse the conclusion.
2. The raw-level trap: comparing \(D_t\) across the NFL’s 16-game season, the NBA and NHL’s 81-game seasons, and MLB’s 162-game season without scale correction; the source flags this directly [PAGE 5].
3. The 2019-normalization trap: Figure 2 indexes each panel relative to 2019, which is useful for within-league trends but can hide level differences across leagues [PAGE 5].
4. The non-gate monolith trap: MLB local TV deals, NFL national TV deals, and NBA aggressive sharing are not equivalent distribution systems [PAGE 12]. The source says MLB is “a distinct outlier” because high-value franchise non-gate revenue growth was nearly twice that of low-value franchises [PAGE 12].
5. The salary-floor trap: the source says recent CBA discussions focused on a salary floor were “likely to have been misguided if the aim was to enhance competitive balance” because small-market MLB teams did increase payrolls on average [PAGE 15].
6. The lockout-season trap: the NBA 2011 coefficients correspond to the 2011–2012 lockout-shortened season and the NHL 2012 coefficients to the 2012–2013 lockout-shortened season [PAGE 11]; treating those year effects as ordinary seasons contaminates panel interpretation.
7. The “revenue alone” trap: the source says it is “hard to see how the rise of non-gate revenue alone would have contributed to MLB’s decline in competitive balance” because the other leagues had similar revenue shifts without MLB-style simultaneous deterioration [PAGE 9].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The recursive game has four relevant minds: owners, players, high-value franchises, and low-value franchises, with the league as a bargaining forum. Owners prefer a high \(\theta\) because \(\theta\) is interpreted as control rights over ex-post beneficial roster construction; players prefer \(\theta\) near zero because that lets them capture marginal revenue product sooner [PAGE 3]. Both sides care about \(D_t\) and \(M_t\), but they weight the dimensions differently; the source says differences of opinion are likely on relative weights, while preferences over \(\varphi\) may be more aligned because of the trade-off [PAGE 3]. High-value owners model low-value owners’ dependence on revenue sharing; low-value owners model player salary pressure; players model team control and time to free agency. This is recursive because each actor’s optimal CBA position depends on the other actor’s anticipated response to non-gate revenue distribution. The source’s NBA example is a counter-model: aggressive revenue sharing puts money in the hands of teams “most likely to spend it competitively,” while a luxury tax prevents the wealthiest franchises from pricing others out [PAGE 14].

Crisis habit regression: when non-gate revenue makes gate receipts less performance-sensitive, owners can regress to cost suppression, service-time manipulation, slotting, and “all-or-nothing” roster strategies [PAGE 9]. The source describes periods of limited on-field success as “the necessary price to pay to develop younger, cheaper talent” [PAGE 9]. In recursive terms, owners expect fans and rivals to tolerate short-run losing because the revenue base is less tied to winning; that expectation reinforces the habit.

Counter-trap: the obvious counter—a salary floor—may fail because the teams with the most to gain competitively were already the most likely to pass non-gate revenue into payroll [PAGE 14]. The source says small-market MLB teams did increase payrolls on average, so a floor may not target the actual leakage [PAGE 15]. A better counter-trap is to align non-gate revenue with on-field performance or to shorten time to free agency, which the source says would make talent less sticky across teams [PAGE 15].

Clock: the clock is both the season clock and the CBA clock. Season length changes the scale of \(D_t\) [PAGE 5]; lockout-shortened NBA and NHL seasons distort year effects [PAGE 11]; time to free agency determines how quickly a player can capture marginal revenue product, and the source says the sooner that occurs, the more likely payrolls rise [PAGE 15]. The CBA clock matters because owners’ bargaining power is predicted to rise when non-gate revenue diminishes the importance of on-field performance for profits [PAGE 9]. Thus a recursive equilibrium is path-dependent: a short CBA horizon encourages owners to capture \(\theta\)-related control rights now, while players anticipate the next bargaining window and push for earlier free agency.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof: the source’s admissible variable set contains \(w_{it}\), \(\eta_{it}\), \(\varphi\), \(\theta\), \(\omega\), \(\sigma\), \(D_t\), \(M_t\), log non-gate revenue, log payroll, franchise value, year fixed effects, and team fixed effects [PAGE 2, PAGE 3, PAGE 10]. It contains no weather variable, no temperature, precipitation, wind, altitude, travel, stadium, injury, force, fatigue, kinematics, or biomechanical load variable. The only “physical” residual is \(\omega\), which the source defines as “a baseline level of variability that is not subject to collective bargaining” and which aligns with “the underlying uncertainty of the game and player performance across seasons and teams” [PAGE 2]. That is a statistical variance component, not a biomechanical or meteorological measurement. Season length is institutional, not weather: the source contrasts 16 NFL games with 81 NBA and NHL games and 162 MLB games [PAGE 5]. Therefore any claim that weather caused the observed \(D_t\) or \(M_t\) movement must be vetoed as an external layer not identified by this source. Any claim that biomechanical injury load or fatigue explains MLB’s non-gate revenue distribution must also be vetoed: the source’s mechanism is bargaining power, revenue sensitivity, and payroll pass-through, not tissue mechanics [PAGE 9, PAGE 10]. If an external physical layer is later added, it must enter as an explicit covariate or as a separately estimated component of \(\omega\); it cannot be silently overlaid on the ARMA parameters. The veto is thus a variable-set veto, not a judgment that physics or weather are unimportant in sports; it is a proof that this paper does not measure them.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto scenario 1: Cross-league non-gate monotonicity. Claim: “Rising non-gate revenue mechanically reduces competitive balance in every league.” Verifiable veto: compute \(D_t\) and \(M_t\) trends in all four leagues over the same period. The source reports that only MLB experienced substantial deterioration in both measures; the NBA had a small disparity increase but not immobility, the NFL had the opposite pattern, and the NHL saw immobility fall with disparity roughly unchanged [PAGE 5]. Prediction: a pooled “non-gate revenue reduces balance” model should fail for at least three of four leagues. If the claim is tested against the source’s cross-league evidence and predicts uniform deterioration, it is vetoed.

Veto scenario 2: Revenue-sharing sufficiency. Claim: “Equalizing non-gate revenue across MLB teams is sufficient to improve both \(D_t\) and \(M_t\).” Verifiable veto: simulate equal distribution of MLB non-gate revenue growth across low-, middle-, and high-franchise-value teams while holding the CBA parameters fixed. The source shows MLB’s high-value franchises received nearly twice the non-gate revenue growth of low-value franchises [PAGE 12], but also that low-value MLB franchises increased payroll the most after 2014; nevertheless, “these gains still were not enough to halt the overall decline in competitive balance in MLB” [PAGE 14]. Prediction: equalization raises low-value payrolls but does not guarantee simultaneous \(D_t\) and \(M_t\) improvement unless \(\theta\) falls or \(\varphi\) shifts. If a policy claim asserts equalization alone is sufficient, it is vetoed.

Veto scenario 3: Time-to-free-agency disparity guarantee. Claim: “Shortening time to free agency necessarily reduces disparity.” Verifiable veto: estimate the pre/post free-agency change in \(M_t\) and \(D_t\). The source predicts that earlier free agency lets players capture marginal revenue product sooner and makes talent “less sticky from year-to-year” [PAGE 15], and the historical MLB free-agency episode is associated with simultaneous parity and mobility improvement [PAGE 5]. But the model also implies a \(\varphi\)-\(\theta\) trade-off: mobility can improve while disparity worsens, or vice versa, unless both parameters move favorably [PAGE 3]. Prediction: earlier free agency should reliably reduce \(M_t\) and raise payroll pressure, but \(D_t\) is ambiguous without estimating the frontier movement. A claim that \(D_t\) must fall is vetoed unless it demonstrates the required \(\varphi\) and \(\theta\) changes.
</RLVR_COUNTERFACTUAL_VETOES>