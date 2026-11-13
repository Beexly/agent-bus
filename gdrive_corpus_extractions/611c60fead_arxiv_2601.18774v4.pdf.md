---
source: "arxiv_2601.18774v4.pdf"
folder: "/GSE-Ultra-30TB-Vault/research-corpus-2026-11-03/pdfs"
pages: 27
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5597
---

<NATIVE_REASONING>
The user is asking me to analyze a specific academic paper (arxiv_2601.18774v4.pdf) about "The Blown Lead Paradox" - a pathwise calibration benchmark for win probability forecasts in sports (NFL and NBA).

Key constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided the source text but no explicit question. They said "DRIVE SOURCE: ..." and "PAGES: 27". This seems like they want me to process/reason about the source. Since there's no explicit question, I should probably provide a comprehensive analysis following the mandated XML structure. But I need to infer what they want - likely an analysis of the paper following the strict invariants.

Let me check: The user message is just the source text with headers. No question. So I should produce the structured analysis as if responding to a drive/source ingestion request. I'll treat this as: analyze the paper deeply using the required XML sections.

Important: I must cite exact [PAGE N] markers. The source text has page markers like [PAGE 1 of 27], etc. I need to reference these.

I need to be careful about:
- No betting lines (spreads, totals, moneylines, odds). The paper mentions win probability but not betting lines explicitly (except maybe implicitly). I should avoid those terms.
- No toy equations. Use real LaTeX from the paper.
- Word count >= 1000 across sections, with THINK_TRACE >= 400 words.

Let me structure the response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Discuss the martingale structure, the conditioning problem (selection bias), Theorem 2/3, the PIT transform, dyadic bootstrap, the NFL vs NBA results, the discrete reporting conservatism, limitations. Gray zones: discrete reporting making test conservative (so NBA excess is understated), the fixed-clock calibration vs pathwise divergence, the 0.99 tail including zero, the fact that p0 >= 0.5 assumption, the Chicago game example, etc. >= 400 words.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations from the paper. Theorem 2, Theorem 3, Remark 4, FMλ piecewise CDF, PIT score Ui, Dupper_n, bootstrap p-value formula, optional stopping identities, correction terms C1/C2, first-crossing residual R. Cite pages. Units: probabilities dimensionless, time in [0,1], counts dimensionless. Breakdown regimes: x < p0, x >= 1, discrete overshoot, terminal attainment, p0 = 0.5 vs != 0.5.

<RETROCAUSAL_GENEALOGY>: Historical lineage: Stern (1994) Brownian motion score model, Lock & Nettleton (2014), Yurko et al. (2019), Yeh et al. (2022), Dawid (1982, 1984), Foster & Vohra (1998), Doob/Ville inequalities, Nikeghbali & Yor (2006), Howard et al. (2020), Ramdas et al. (2023), Arnold et al. (2023), Owen (2007) pigeonhole bootstrap, Davezies et al. (2021) exchangeable arrays, Menzel (2021) multiway dependence. Multi-week traps: season-stratified dyadic bootstrap, leave-one-season-out, franchise-linked cross-season dependence, calendar blocks, dyad-plus-calendar. Cite pages.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I can interpret: The "crisis habit regression" is the tendency to interpret a single blown lead (like Chicago 96.9%) as evidence of model failure without the proper reference class. The "counter-trap" is the pathwise benchmark that conditions on the loser and the selected maximum. The "clock" is the fixed-clock calibration vs the selected maximum after the game. Discuss how the feed can look calibrated at fixed times but produce too many extreme maxima. Discuss the recursion: observer selects loser after outcome, then searches path for max; the model must anticipate this selection. Cite pages.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. The paper doesn't discuss physical/biomechanical/weather directly. I need to handle this carefully. I can discuss what would veto the findings: feed artifacts (probability assigned to 1 to eventual loser), rounding bounds ±0.0005, overtime inclusion, missing feeds, All-Star exclusions, discrete reporting conservatism (Theorem 3 makes test conservative, so observed NBA excess is a lower bound), the 0.99 tail interval including zero (veto at extreme tail), finite-schedule null simulation (Type I error <= 5%). I should frame it as: the only admissible vetoes are feed/artifact and discretization, not physical/biomechanical/weather because the paper doesn't model those; however, if external physical factors (weather, fatigue) were systematically mispriced by ESPN in NBA vs NFL, that could contribute, but the paper attributes to publication process/model spec/information set. I must not invent toy equations. I can mention the paper's stated limitations: effective information set may differ, continuous path assumption, binary terminal outcomes. I can discuss "veto" scenarios where the NBA result disappears.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll interpret as verifiable counterfactual veto scenarios:
  1. Discrete reporting coarsening: If NBA feed resolution were thinned to NFL resolution or coarser, Theorem 3 says upper-tail diagnostic becomes conservative; prediction: Dupper_n would decrease, possibly below critical value.
  2. Removing patched/games with probability-one misassignments: 16 NBA games with loser-side exact-one feed values; excluding them changed D from 0.097 to 0.096, p still < 0.001; prediction: result robust.
  3. Leave-one-season-out: Table S7.4 shows NBA D ranges 0.093-0.102 and excess 1.2%-1.5%; prediction: no single season drives the result.
  4. Maybe rounding bounds: ±0.0005 keeps D between 0.095 and 0.099.
  I need exactly 3 verifiable veto scenarios with predictions.

Wait, I need to make sure I don't mention betting lines. I'll avoid spreads, moneylines, totals, odds.

Let me draft carefully, ensuring page citations [PAGE N] are accurate based on the provided text.

Page mapping:
- Page 1: Abstract, Introduction, Chicago Bulls example, 96.9%, conditioning problem.
- Page 2: Definition of martingale, reliability diagrams, Brier, Yeh et al. (2022), Doob-Ville, Nikeghbali and Yor (2006), empirical applications, NFL p=0.736, NBA p<0.001, U>=0.95, 6.3%, excess 1.3%.
- Page 3: Definition 1 first passage, Theorem 2 peak-on-loss benchmark, Theorem 3 discrete-time bound, Remark 4 corrections C1 C2.
- Page 4: Proofs appendix refs, game-level benchmark score Mλ, piecewise CDF FMλ, three regimes, universal tail P(Mλ >= x) = 1/x - 1, p0 <= 0.9 => 1/9 ≈ 11%, Chicago p0=71.2%, m=96.9%, U=0.968, upper-tail 3.2%.
- Page 5: Figure 1, Figure 2 caption, league-level diagnostic.
- Page 6: PIT score Ui = FMλ(mi; p0,i), uniform under continuous, large values severe collapses.
- Page 7: Dependent league inference, Dupper_n definition, pigeonhole bootstrap, Wsa Wsb, B=9,999 draws, p-value formula, Delta_.95 definition.
- Page 8: Table 1 feed construction, NFL 1,848 games, NBA 8,276 games, Table 2 primary inference: NFL D=0.015 p=0.736, bP(U>=0.95)=4.5%, Delta=-0.5%; NBA D=0.097 p<0.001, bP=6.3%, Delta=1.3% [0.4%,2.3%].
- Page 9: Fixed-clock calibration, Yeh et al. (2022), linear interpolation, overtime excluded from fixed-clock.
- Page 10: Figure 4, losing-path diagnostic diverges.
- Page 11: First crossings of 0.95, tau_.95, optional stopping, R = p_tau - Y, NBA 8,663 episodes, observed loss 6.5% vs implied 4.2%, Rbar=2.3% [1.4%,3.2%], NFL Rbar=1.3% [-0.2%,2.9%].
- Page 12: Sensitivity to feed artifacts, NBA D=0.097 corrected/raw, 0.096 after removing 16 games, rounding ±0.0005 bounds D [0.095,0.099], dyad-plus-calendar p<0.001, franchise-linked p<0.001, leave-one-season-out 0.093-0.102.
- Page 13: Figure 5, discrete reporting effect, simulation p0 ~ Unif(0.25,0.75), Brownian bridge, sigma=0.5, Kbase=1000, coarsening makes benchmark conservative.
- Page 14: Discussion, limitations, effective information set, continuous sample paths, binary ties, Chicago game U=0.968.
- Page 15-27: Appendices S1-S8, proofs, bootstrap, fixed-clock surfaces, tables S7.1-S7.4, S8.1 finite-schedule null simulation.

I need to write >= 1000 words total across sections. THINK_TRACE alone >= 400. Let me ensure each section is substantial.

Let me write the response now. I'll be careful with LaTeX formatting and page citations.

One thing: The user said "DRIVE SOURCE" which might imply they want me to act as if I'm driving the source through the foundry. I'll produce the analysis.

Let me draft the THINK_TRACE first. It needs to be >= 400 words.

THINK_TRACE content:
- Multi-hop derivation: The paper identifies a selection bias: the losing team is selected ex post, then its path is searched for the maximum. This is a pathwise extreme conditional on terminal failure. Under ideal sequential calibration p_k = E[Y|F_k], the path is a bounded martingale with p_N = Y. Doob's maximal inequality gives unconditional bounds P(M_N >= x) <= p0/x. But conditioning on Y=0 requires decomposing P(M_N >= x) = P(Y=1) + (1-p0)P(M_N >= x | Y=0) because if Y=1, p_N=1>=x so the path necessarily hits x. This yields Theorem 2: P(M >= x | Y=0) = [p0/(1-p0)] * [(1-x)/x] for continuous paths. For x in [p0,1). The two-team extension mixes the favorite and underdog losing paths, producing a piecewise CDF with a universal tail P(M_lambda >= x) = 1/x - 1 when x >= p0. This is the key insight: when p0 <= 0.9, P(M_lambda >= 0.9) = 1/9 ≈ 11%, so a 90% peak by the eventual loser is not rare under calibration.
- Gray-zone audit: The discrete-time bound is conservative because first-passage overshoots (C1) and terminal-time first attainment (C2) remove mass from the tail relative to continuous benchmark. Thus the NBA excess of 1.3% at U>=0.95 is a lower bound; the true discrete-path departure may be larger. Fixed-clock calibration (Yeh et al. 2022) finds ESPN broadly calibrated at update level, yet pathwise diagnostic rejects for NBA. This is the crux: a feed can be locally calibrated but globally path-miscalibrated in the upper tail of losing-team maxima. The 0.99 tail interval includes zero (-0.3% to 0.5%), marking the limit of evidence. Finite-schedule null simulation shows Type I error <= 5% even with rho=0.5 shared-team dependence, so the NBA rejection is not a dependence artifact. The Chicago game (p0=71.2%, m=96.9%, U=0.968, upper-tail 3.2%) is unusual but not sufficient alone; recurrence across 8,276 games is the evidence. Gray zones: effective information set may differ from outcome-relevant filtration; continuous paths assumption violated by discrete updates; binary terminal outcomes exclude ties; season-to-season persistence only descriptive.

That should be well over 400 words.

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page citations.
- Eq: p_k = P(Y=1|F_k), bounded martingale, p_N = Y [PAGE 2]
- Theorem 2 continuous peak-on-loss [PAGE 3]
- Theorem 3 discrete bound [PAGE 3]
- Remark 4 correction identity C1, C2 [PAGE 3-4]
- Mλ definition [PAGE 4]
- FMλ piecewise CDF [PAGE 4]
- Universal tail [PAGE 4]
- Ui PIT score [PAGE 6]
- Dupper_n [PAGE 7]
- Bootstrap p-value [PAGE 7]
- Delta_.95 [PAGE 7]
- First crossing residual R [PAGE 11]
- Simulation pi(t) [PAGE 13]
- Finite-schedule Zg [PAGE 26]

Units: probabilities dimensionless [0,1], time t in [0,1] regulation fraction, update counts dimensionless, Dupper_n dimensionless sup statistic, p-values dimensionless.

Breakdown regimes: x < p0 => CDF=0; x=1 atom; discrete overshoot C1>0; terminal attainment C2>0; p0=0.5 no intermediate region kink; p0 != 0.5 kink at [1-p0, p0); x >= p0 universal tail.

RETROCAUSAL_GENEALOGY:
- Stern (1994) Brownian motion score model [PAGE 2]
- Lock & Nettleton (2014), Yurko et al. (2019) play-level ML [PAGE 2]
- Yeh et al. (2022) calibration surfaces NBA [PAGE 2, PAGE 9]
- Dawid (1982, 1984) calibration, prequential [PAGE 2]
- Foster & Vohra (1998) asymptotic calibration [PAGE 2]
- Doob/Ville inequalities unconditional events [PAGE 2]
- Nikeghbali & Yor (2006) exact identities continuous-time [PAGE 2]
- Howard et al. (2020), Ramdas et al. (2023), Arnold et al. (2023) sequential calibration tests [PAGE 2]
- Owen (2007) pigeonhole bootstrap [PAGE 7, PAGE 20]
- Davezies et al. (2021) exchangeable arrays [PAGE 7, PAGE 18-19]
- Menzel (2021) multiway dependence bootstrap limits [PAGE 13, PAGE 20]
Multi-week traps: season-stratified dyadic bootstrap across 2018-2024; leave-one-season-out Table S7.4 [PAGE 25]; franchise-linked cross-season [PAGE 24]; dyad-plus-calendar two-week block [PAGE 24]; finite-schedule null simulation on observed schedules [PAGE 26].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: After a collapse, observers regress to the single number (highest win probability of eventual loser) and treat it as evidence of forecast failure. This is the selection trap.
- Counter-trap: The benchmark conditions on the loser and asks how often calibrated losing paths reach that peak, converting the retrospective statistic into a prospective reference class.
- Clock: Fixed-clock calibration evaluates at prespecified times; the blown-lead statistic selects maximum after terminal outcome known. The paper shows NFL fixed-clock broadly calibrated but pathwise test inconclusive; NBA fixed-clock broadly calibrated yet pathwise test rejects. So a feed can pass update-level calibration and fail pathwise collapse calibration.
- Recursive theory of mind: The forecaster must anticipate that the consumer will select the losing team's path and search for its maximum. The benchmark score U_i maps each game to a common scale; large U indicates the feed under-produces comebacks relative to calibration? Wait, large U means unusually severe collapses under benchmark, i.e., too many extreme losing-team peaks. Actually under the null Ui ~ Uniform(0,1). Excess mass near 1 means too many severe collapses. So the feed is "over-confident" in the sense that leads that look safe are blown too often relative to the calibrated losing-path law.

CROSS_LAYER_VETO_ADJUDICATION:
- The paper does not model physical, biomechanical, or weather layers explicitly. Therefore no physical/biomechanical/weather veto is admissible from the text. The only admissible vetoes are feed/artifact and discretization layers.
- Feed artifacts: 16 NBA games with loser-side exact-one feed values; excluding them D=0.096 vs 0.097, p<0.001; veto fails.
- Rounding bounds ±0.0005: D in [0.095,0.099]; veto fails.
- Discrete reporting: Theorem 3 makes continuous benchmark conservative for discrete feeds; if anything, observed NBA excess understates true departure; veto direction favors rejecting null more strongly, not less.
- Missing feeds: NBA minimum coverage 99.3% [PAGE 25]; NFL complete [PAGE 25].
- Overtime included in collapse statistic [PAGE 8].
- All-Star exclusions [PAGE 8].
- Boundary p0=0.9 vs p0<=0.9 universal tail; if p0 > 0.9, intermediate region shrinks and tail formula changes; but empirical p0 distribution matters.
- 0.99 tail interval includes zero: veto at extreme tail succeeds partially; evidence limited to 0.90 and 0.95.
- Finite-schedule null simulation Type I error <= 5% [PAGE 26]: veto against dependence-based false positive fails.

RLVR_COUNTERFACTUAL_VETOES: Three verifiable scenarios with predictions.
1. Resolution coarsening veto: Thin NBA published path from median 466 updates/game to NFL-like median 175 or to Kbase=100 grid. Theorem 3 / Figure 5: coarsening removes high losing-team peaks, shifting PIT scores downward. Prediction: Dupper_n decreases; at sufficient coarsening, the upper-tail null may no longer be rejected even if the underlying continuous process is identical. Verifiable by re-computing U on thinned paths.
2. Exact-one patching veto: Remove all games where feed assigned probability 1 to eventual loser (16 NBA, 4 NFL). Paper reports NBA D=0.096 (<0.001) vs 0.097; prediction: global rejection persists, tail excess at 0.95 remains positive (~1.3%). Verifiable by excluding patched games and recomputing D.
3. Leave-one-season-out veto: Omit each NBA season 2018-2024. Table S7.4: Dupper_n ranges 0.093-0.102; excess 1.2%-1.5%. Prediction: no single-season omission drives the result; the minimum D (0.093) remains well above NFL-scale noise and the bootstrap critical value; verification via recomputing on seven reduced panels.

I need to ensure total words >= 1000. Let me estimate. THINK_TRACE ~500 words. SOURCE_OPERATORS ~400 words. RETROCAUSAL ~250. RECURSIVE ~250. CROSS_LAYER ~300. RLVR ~200. Total ~1900. Good.

I must avoid any mention of betting lines. I'll scan for "spread", "moneyline", "total", "odds". I won't use them.

I need to use exact [PAGE N] markers. I'll cite them inline like [PAGE 3] or [PAGE 7].

Let me write the final output now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s central conditioning problem is ex-post selection followed by pathwise extremization. Let Y ∈ {0,1} denote whether Team A wins, and let p_k = P(Y = 1 | ℱ_k) be the ideal sequential forecast, a bounded martingale with p_0 ∈ (0,1) and terminal p_N = Y [PAGE 2]. The blown-lead statistic is not evaluated at a fixed forecast; it is the maximum attained by the team that is selected to lose after the terminal outcome is known. Because the losing path is identified by Y = 0 and then searched for its peak, the relevant object is P(M ≥ x | Y = 0), not P(M ≥ x) unconditionally.

The derivation proceeds in three hops. First, under continuous sample paths, the unconditional maximal law for a bounded martingale is P(M ≥ x) = p_0/x for x ∈ [p_0, 1) [PAGE 3, Appendix S2]. Second, because {Y = 1} implies p_N = 1 ≥ x, the event {Y = 1} is contained in {M ≥ x}, so P(M ≥ x) = P(Y = 1) + (1 − p_0)P(M ≥ x | Y = 0) = p_0 + (1 − p_0)P(M ≥ x | Y = 0) [PAGE 3, Appendix S2.2]. Equating this with p_0/x and rearranging yields the exact continuous-path conditional law in Theorem 2: P(M ≥ x | Y = 0) = [p_0 / (1 − p_0)] · [(1 − x) / x] for x ∈ [p_0, 1), with CDF F_{M|Y=0}(x) = 1 − [p_0 / (1 − p_0)] · [(1 − x) / x] [PAGE 3]. Third, the two-team statistic M_λ mixes both losing paths over the outcomes. Assuming p_0 ≥ 1/2 without loss of generality, the benchmark CDF is piecewise with three regimes: below 1 − p_0 neither losing path can contribute; between 1 − p_0 and p_0 only the underdog’s losing path contributes; above p_0 both contribute, collapsing to the universal tail P(M_λ ≥ x) = 1/x − 1 for x ∈ [p_0, 1) [PAGE 4]. This universality is the operational core: when p_0 ≤ 0.90, P(M_λ ≥ 0.90) = 1/9 ≈ 11%, so an eventual loser peaking at 90% is not a calibrated anomaly [PAGE 4].

Gray-zone audit. The discrete-time bound in Theorem 3 is conservative because first-passage overshoots and terminal-time first attainment subtract nonnegative correction terms C_1(x) and C_2(x) from the continuous tail [PAGE 3–4]. Consequently, for discretely reported ESPN feeds, an observed upper-tail excess is a lower bound on the true pathwise departure; coarsening shifts PIT scores downward and works against rejection [PAGE 13, Figure 5]. The fixed-clock calibration analysis (adapting Yeh et al., 2022) finds ESPN broadly calibrated at update level for both leagues, yet the pathwise diagnostic rejects for the NBA (D_upper_n = 0.097, p < 0.001) while failing to reject for the NFL (D_upper_n = 0.015, p = 0.736) [PAGE 7–10]. This divergence means a feed can pass local reliability surfaces and still generate too many extreme losing-team maxima. The 0.99 tail interval for the NBA includes zero ([−0.3%, 0.5%]), marking the upper limit of the evidence [PAGE 24, Table S7.1]. The finite-schedule null simulation bounds Type I error at or below 5% even with shared-team dependence ρ = 0.5 (NBA rejection rate 4.4%), so the NBA rejection is not attributable to schedule dependence alone [PAGE 26, Table S8.1]. The Chicago Bulls example (p_0 = 71.2%, observed peak m = 96.9%, benchmark score U = 0.968, upper-tail probability 3.2%) is severe on the game scale but insufficient alone; inference rests on recurrence across 8,276 NBA games [PAGE 4–5, Page 8 Table 2]. Remaining gray zones: the effective information set of the published feed may differ from the outcome-relevant filtration; continuous-path assumptions are violated by discrete updates; terminal outcomes are binary, excluding ties; season-to-season persistence is descriptive only [PAGE 13–14].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, page citations, and breakdown regimes.

1. Sequential-calibration martingale: p_k = P(Y = 1 | ℱ_k), k = 0,...,N, bounded martingale, p_N = Y ∈ {0,1}; continuous counterpart p_t = E[Y | ℱ_t], t ∈ [0,1], p_1 = Y. Units: dimensionless probability in [0,1]; time normalized to regulation fraction [PAGE 2, PAGE 3].

2. First-passage time: τ_x = inf{k ∈ {0,...,N} : p_k ≥ x}, inf ∅ := N + 1 [PAGE 3, Definition 1].

3. Theorem 2 (continuous peak-on-loss): for x ∈ [p_0, 1),
P(M ≥ x | Y = 0) = [p_0 / (1 − p_0)] · [(1 − x) / x],
F_{M|Y=0}(x) = 1 − [p_0 / (1 − p_0)] · [(1 − x) / x], with F_{M|Y=0}(x) = 0 for x < p_0 and F_{M|Y=0}(1) = 1 [PAGE 3]. No atoms on [p_0, 1); singularity at x = 1.

4. Theorem 3 (discrete-time bound): P(M_N < x | Y = 0) ≥ 1 − [p_0 / (1 − p_0)] · [(1 − x) / x], x ∈ [p_0, 1); conservative lower bound on CDF [PAGE 3]. Breakdown: equality requires no overshoot at first passage and no first attainment exactly at terminal reveal.

5. Remark 4 correction identity, x ∈ (p_0, 1):
P(M_N ≥ x | Y = 0) = [p_0 / (1 − p_0)] · [(1 − x) / x] − C_1(x) − C_2(x),
C_1(x) = [1 / (x(1 − p_0))] E[(p_{τ_x} − x) 1{τ_x < N}], C_2(x) = [(1 − x) / (x(1 − p_0))] P(τ_x = N) [PAGE 3–4]. Units dimensionless; C_1 measures preterminal overshoot, C_2 measures terminal-only attainment; both nonnegative.

6. Two-team loser’s peak: M_λ = sup_{t∈[0,1]} [p_t 1{Y=0} + q_t 1{Y=1}], q_t = 1 − p_t [PAGE 4].

7. Benchmark CDF F_{M_λ}(x), p_0 ≥ 1/2:
0 for x < 1 − p_0; 1 − (1 − p_0)/x for 1 − p_0 ≤ x < p_0; 2 − 1/x for p_0 ≤ x < 1; 1 for x = 1 [PAGE 4]. Regime kink when p_0 ≠ 1/2; universal tail P(M_λ ≥ x) = 1/x − 1 for x ≥ p_0 [PAGE 4].

8. Game-level PIT score: U_i = F_{M_λ}(m_i; p_{0,i}), where m_i is the observed published-path maximum of the eventual loser [PAGE 6]. Under the continuous-path law U_i ∼ Unif(0,1); discrete reporting moves scores downward [PAGE 6].

9. League statistic: D_upper_n = sup_{0≤t≤1} {t − F̂_U(t−)} [PAGE 7]. Dimensionless supremum of centered PIT signature.

10. Pigeonhole bootstrap: within season s, team multiplicities W_{sa} sampled multinomially; game (a,b) weight W_{sa}W_{sb}; normalize within season to observed game count; B = 9,999 draws; p-value = (1 + Σ_b 1{D*_n,b ≥ D_upper_n}) / (B + 1) [PAGE 7, PAGE 20].

11. Effect size: Δ_.95 = bP(U ≥ 0.95) − 0.05 [PAGE 7]. NBA: 6.3% − 5.0% = +1.3%, 95% CI [0.4%, 2.3%] [PAGE 8, Table 2].

12. First-crossing residual: τ_.95 = inf{k : p_k ≥ 0.95, time remaining > 0}; R = (1 − Y) − (1 − p_{τ_.95}) = p_{τ_.95} − Y; optional stopping centers E[(p_{τ} − Y)1{τ < N}] = 0 under sequential calibration [PAGE 11, PAGE 24]. NBA: observed loss 6.5% vs implied 4.2%, R̄ = 2.3%, 95% CI [1.4%, 3.2%] [PAGE 11].

13. Discrete-report simulation: p_{0,i} ∼ Unif(0.25, 0.75), Y_i ∼ Bernoulli(p_{0,i}), X_i(t) = tY_i + σB^0_i(t), σ = 0.5, p_i(t) = logit^{-1}{logit(p_{0,i}) + X_i(t) − t/2 / (σ^2(1 − t))}, p_i(1) = Y_i; K_base = 1,000 grid, retain every m-th report [PAGE 13]. Coarsening makes the upper-tail benchmark conservative [PAGE 13, Figure 5].

14. Finite-schedule null: Z_g = √ρ (A_{s,a_g} + A_{s,b_g})/√2 + √(1−ρ) E_g, U_g = Φ(Z_g), ρ ∈ {0, 0.25, 0.5}; Type I error estimated at nominal 5% [PAGE 26, Section S8, Table S8.1].

Breakdown regimes summary: x < p_0 ⇒ CDF = 0; x = 1 ⇒ atom P(M = 1) = p_0 [PAGE 3]; discrete overshoot C_1 > 0 or terminal attainment C_2 > 0 ⇒ strict inequality in Theorem 3 [PAGE 3–4]; p_0 = 1/2 removes the intermediate-region kink [PAGE 4]; x ≥ p_0 ⇒ universal tail independent of p_0 [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week dependence traps.

The paper synthesizes three lineages. (i) Sports score modeling: Stern (1994) introduced a Brownian motion model for score progress; Lock and Nettleton (2014) and Yurko et al. (2019) developed play-level machine-learning win probabilities [PAGE 2]. Most directly, Yeh et al. (2022) built calibration surfaces for continuously updated NBA forecasts and found ESPN’s feed broadly calibrated at the update level, which sharpens the pathwise question [PAGE 2, PAGE 9]. (ii) Sequential probability theory: Dawid (1982, 1984) supplied calibration and prequential language; Foster and Vohra (1998) gave asymptotic calibration; Doob- and Ville-type inequalities control unconditional suprema such as {sup_t p_t ≥ x} but not the reverse-conditioned sports question; Nikeghbali and Yor (2006) provided exact continuous-time martingale-supremum identities that the paper specializes to bounded binary-terminal martingales [PAGE 2]. Recent sequential-calibration tests appear in Howard et al. (2020), Ramdas et al. (2023), and Arnold et al. (2023) [PAGE 2]. (iii) Dependence-robust inference: Owen (2007) proposed the pigeonhole bootstrap by resampling indexing units; Davezies et al. (2021) established empirical-process results for exchangeable arrays with repeated dyadic observations; Menzel (2021) delineates multiway-dependence regimes where bootstrap consistency can fail [PAGE 7, PAGE 13, PAGE 18–20].

Multi-week traps and controls. The sample spans seven season labels (2018–2024) with recurring franchises and repeat matchups, so games are not independent. The season-stratified dyadic pigeonhole bootstrap resamples teams within each season, assigning game (a,b) weight W_{sa}W_{sb}, thereby preserving shared-team dependence while normalizing season composition [PAGE 7, PAGE 20]. Leave-one-season-out analysis (Table S7.4) shows NBA D_upper_n ranges from 0.093 to 0.102 and the 0.95 tail excess from 1.2% to 1.5%, so no single season drives the rejection [PAGE 25]. The franchise-linked specification maps relocations to a common franchise and applies one multiplicity across all seasons, probing persistent cross-season team effects (NBA p < 0.001) [PAGE 24, Table S7.3]. The dyad-plus-calendar sensitivity multiplies team multiplicity by a circular two-week block multiplicity within season, allowing common model-period shocks while retaining team dependence (NBA p < 0.001) [PAGE 24, Table S7.3]. Finite-schedule null simulations are run on the observed NFL and NBA schedules with shared-team correlation ρ ∈ {0, 0.25, 0.5}; rejection rates remain at or below the nominal 5% level (NBA: 0.0%, 3.2%, 4.4%), so calendar/cross-season dependence is examined through these sensitivities rather than assumed away [PAGE 26, Table S8.1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. After a collapse, the public regresses to a single selected number: the highest win probability ever assigned to the eventual loser. In the canonical case, Chicago led the Lakers 85–67 with 4:21 left in the third quarter; ESPN’s feed read 96.9% for Chicago, and Chicago lost 112–118 [PAGE 1]. The retrospective habit treats that 96.9% as if its complement (3.1%) were the frequency with which such leads should be blown. That is the selection trap: the team is chosen because it lost, then its path is searched for the most favorable point. The correct question is not whether 5% events occur at fixed forecasts, but how often calibrated losing paths reach peaks at or above 95% [PAGE 2].

Counter-trap. The benchmark converts the retrospective statistic into a prospective reference class. Theorem 2 conditions on Y = 0 and derives the law of the losing team’s maximum; the two-team mixture F_{M_λ} places every game on a common scale regardless of p_{0,i} [PAGE 4]. The PIT score U_i = F_{M_λ}(m_i; p_{0,i}) is Uniform(0,1) under the continuous-path null [PAGE 6]. Large U_i indicates an unusually severe collapse relative to calibrated losing-path law, not relative to all forecasts. The Chicago game maps to U = 0.968 with upper-tail probability 3.2%, i.e., unusual on this scale but not diagnosable from one game [PAGE 4–5]. League-level inference requires recurrence: 6.3% of NBA games occupy a benchmark tail of nominal size 5%, an excess of 1.3% [PAGE 8, Table 2].

Clock. Fixed-clock calibration and the pathwise diagnostic answer different questions and operate on different clocks. Fixed-clock evaluation scores home-team forecasts at t = 0, 0.05, ..., 0.95 of regulation with linear interpolation, excluding overtime; it finds sparse late-game boundary discrepancies but otherwise within simultaneous bands (RMS cell gaps ≈ 2.7–2.9%) [PAGE 9, PAGE 22]. The blown-lead statistic selects the maximum after the terminal outcome is known and includes overtime updates [PAGE 8]. The result is a split verdict: NFL fixed-clock is broadly calibrated and its pathwise test shows no detected global departure (D_upper_n = 0.015, p = 0.736); NBA fixed-clock is also broadly calibrated at update level, yet its pathwise test rejects (D_upper_n = 0.097, p < 0.001) [PAGE 8–10]. Thus a feed can look reasonable update by update and still produce too many extreme losing-team maxima. The first-crossing analysis locates the discrepancy at the moment of entry into high-probability states: NBA observed loss rate 6.5% versus mean implied loss 4.2% at first crossing of 0.95, R̄ = 2.3% [PAGE 11]. The recursion is that the forecaster must anticipate that consumers will select the losing path post hoc and search it for its peak; the benchmark score is the device that makes that anticipated selection testable.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof and admissible veto layers.

The source text does not model physical, biomechanical, or weather layers explicitly; it concerns published win-probability feeds, martingale calibration, and feed artifacts. Therefore no physical, biomechanical, or weather veto is admissible from the provided corpus. The only veto layers with textual support are feed-artifact, discretization, boundary/tail, and dependence layers, and each is adjudicated below.

Feed artifacts. The paper identifies 16 NBA and 4 NFL games containing loser-side exact-one feed values [PAGE 24]. Excluding all 16 patched NBA games changes D_upper_n from 0.097 to 0.096 with p still < 0.001; raw and corrected paths both give 0.097 [PAGE 12, Table S7.3]. Rounding bounds of ±0.0005 on each displayed probability bound NBA D_upper_n between 0.095 and 0.099 and tail rate bP(U ≥ 0.95) between 6.3% and 6.6% [PAGE 12, Table S7.3]. These perturbations do not veto the NBA rejection.

Discretization layer. Theorem 3 states that discrete reporting makes the continuous-path benchmark conservative: C_1 and C_2 are nonnegative, so observed discrete-path upper-tail mass is pushed downward relative to the continuous null [PAGE 3–4]. The simulation in Figure 5 confirms that coarser reporting shifts the centered PIT signature downward [PAGE 13]. Thus discretization cannot explain away an observed excess; if anything it understates the true departure. This is not a veto; it is a conservative bound operating in the direction of the null.

Boundary and tail regimes. The universal tail P(M_λ ≥ x) = 1/x − 1 applies for x ≥ p_0 [PAGE 4]. For x < p_0 the CDF is 0; at x = 1 there is an atom [PAGE 3]. When p_0 ≤ 0.95, P(M_λ ≥ 0.95) = 1/19 ≈ 5.26% [PAGE 18, Table S4.1]. The NBA 0.99 tail interval includes zero ([−0.3%, 0.5%]), so at the extreme 0.99 threshold the veto partially succeeds: evidence is limited to 0.90 and 0.95 tails [PAGE 24, Table S7.1]. The 0.90 NBA excess is 2.7% [1.4%, 4.0%] and the 0.95 excess is 1.3% [0.4%, 2.3%], both strictly positive under the dyadic bootstrap [PAGE 24].

Dependence layer. Finite-schedule null simulation on observed schedules yields NBA Type I error 0.0% (ρ = 0), 3.2% (ρ = 0.25), 4.4% (ρ = 0.5), all ≤ 5% nominal [PAGE 26, Table S8.1]. The dyad-plus-calendar and franchise-linked sensitivities both reject at p < 0.001 [PAGE 24, Table S7.3]. Leave-one-season-out leaves NBA D_upper_n in [0.093, 0.102] [PAGE 25]. None of these vetoes the global NBA departure. Coverage is complete for the NFL and at least 99.3% in every NBA season, so missing-feed attrition is not a viable veto [PAGE 25, Table S7.4].

Adjudication: the NBA upper-tail excess survives feed correction, rounding bounds, patched-game exclusion, calendar blocking, franchise linkage, season omission, and finite-schedule dependence bounds. The only regime where the null is not rejected is the 0.99 extreme tail, where the interval includes zero. Physical/biomechanical/weather vetoes are inexpressible from this source because the estimand is the published feed itself, encompassing forecast generation and display conversion, not the underlying sports mechanics [PAGE 8].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR counterfactual veto scenarios and predictions.

Scenario 1: Resolution-thinning veto. Verifiable operation: thin each NBA published path from its native median of 466 updates per game (IQR 447–488) to a coarser grid (e.g., every k-th report or the NFL-equivalent median of 175), then recompute m_i, U_i, and D_upper_n on the thinned paths using the same bootstrap draws [PAGE 8, PAGE 12–13]. Theoretical anchor: Theorem 3 and Figure 5 show coarsening removes opportunities to observe high losing-team peaks and makes the upper-tail benchmark conservative [PAGE 3–4, PAGE 13]. Prediction: D_upper_n decreases monotonically with coarsening; at sufficiently coarse resolution the upper-tail null may cease to be rejected even though the underlying continuous calibration law is unchanged, because discrete first-passage overshoots and terminal attainment (C_1, C_2) subtract tail mass [PAGE 3–4]. This scenario tests whether the NBA rejection is an artifact of publication resolution rather than feed miscalibration.

Scenario 2: Exact-one patching veto. Verifiable operation: exclude all games in which the feed assigned probability exactly one to the eventual loser (16 NBA games; 4 NFL games) and recompute the global statistic and 0.95 tail excess using identical team draws [PAGE 24, Table S7.3]. Prediction: based on the reported sensitivity row (NBA D_upper_n = 0.096, p < 0.001 versus 0.097 on corrected paths), the global rejection persists and the 0.95 tail excess remains positive at approximately 1.3% [PAGE 12]. If exclusion drove D_upper_n below the 95th percentile of the recentered bootstrap critical value, the result would be vetoed; the paper’s reported robustness indicates it is not.

Scenario 3: Leave-one-season-out veto. Verifiable operation: recompute D_upper_n and Δ_.95 on seven NBA panels, each omitting one season label (2018–2024), using the season-stratified dyadic bootstrap [PAGE 25, Table S7.4]. Prediction: D_upper_n ranges from 0.093 to 0.102 and the 0.95 tail excess from 1.2% to 1.5%; the minimum statistic (0.093, season 2018 or 2023 omitted) remains far above the NFL-scale null range (0.008–0.025) and above the bootstrap critical value implied by p < 0.001. Therefore no single season is a pivotal veto; the departure is recurrent across the panel. A verified veto would require some omitted season to push D_upper_n below the finite-schedule critical value while leaving all others significant, which Table S7.4 rules out descriptively.
</RLVR_COUNTERFACTUAL_VETOES>