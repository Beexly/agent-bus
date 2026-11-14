---
source: "2026 - Beyond Match Results Bayesian Mediation of Ability, Performance, and Winning in Professional Tennis - Hu et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/preprints/arXiv/2026"
pages: 37
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5971
---

<NATIVE_REASONING>
The user wants a deep analysis of the provided research paper text. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important: The source text is provided as markdown content in the user message, not actual page numbers from a PDF. However, the text includes page numbers in the flow (1, 2, ..., 35). I should cite page markers based on the page numbers visible in the text flow. Let me map content to pages:

- Page 1: Title, abstract, keywords
- Page 2: Introduction start, measurement problem
- Page 3: Introduction continued, mediation literature
- Page 4: Contributions, design
- Page 5: Data sources, Table 1
- Page 6: Figure 1, randomization, Equation (1)
- Page 7: Figure 2 description
- Page 8: Second fact, outcome overlap
- Page 9: Section 2.2 Empirical motivation
- Page 10: Section 3.1 Dynamic surface-specific ability, Eq (2)
- Page 11: Eq (3), (4), Helmert bases
- Page 12: Eq (5), (6)
- Page 13: Section 3.2 Observed performance, Eq (7)
- Page 14: Eq (8), (9), (10), Eq (11)
- Page 15: Cut distribution Eq (12), (13), comparison distribution Eq (14)
- Page 16: Section 3.3 Pathway estimands, Eq (15), (16)
- Page 17: Eq (17), (18), (19), Eq (20)
- Page 18: Proposition 1, Proposition 2
- Page 19: Eq (21) attenuation
- Page 20: Causal conditions
- Page 21: Section 3.4 Posterior computation
- Page 22: Section 3.5 Simulation evidence
- Page 23: Section 4 Real data analysis, Figure 3
- Page 24: Predictive checks
- Page 25: Section 4.2 Pathway effects, Table 2
- Page 26: Table 3, decomposition
- Page 27: Window-construction component interpretation
- Page 28: Section 4.3 Temporal ordering, second-set outcome, WTA replication
- Page 29: Section 4.4 Reliability analysis, Eq (22)
- Page 30: Section 4.5 Implications
- Page 31: Section 5 Discussion
- Page 32: Data availability
- Page 33: References
- Page 34: References continued
- Page 35: References continued

Wait, looking at the text, page numbers are embedded in the flow as standalone numbers at page breaks. Let me trace carefully:

Page 1: Title block through Abstract
Page 2: "1 Introduction" through "Diagnosing it requires varying the two separately..."
Page 3: "Existing methods stop short..." through "model-based pathway summaries rather than unconditional causal claims."
Page 4: "We make two methodological contributions..." through Section 2 intro
Page 5: Section 2.1, Table 1
Page 6: Figure 1 description, Eq (1), Table S2 mention
Page 7: Figure 2 description
Page 8: "The second fact is why..." through end of page
Page 9: Section 2.2 Empirical motivation
Page 10: Section 3.1, Eq (2)
Page 11: Eq (3), (4), Helmert
Page 12: Eq (5), (6)
Page 13: Section 3.2, Eq (7)
Page 14: Eq (8), (9), (10), Eq (11)
Page 15: Eq (12), (13), Eq (14)
Page 16: Section 3.3, Eq (15), (16)
Page 17: Eq (17), (18), (19), Eq (20)
Page 18: Proposition 1, Proposition 2
Page 19: Eq (21)
Page 20: Causal conditions paragraph
Page 21: Section 3.4
Page 22: Section 3.5 Simulation evidence
Page 23: Section 4, Figure 3
Page 24: Predictive checks
Page 25: Section 4.2, Table 2
Page 26: Table 3 text
Page 27: Interpretation text
Page 28: Section 4.3 second-set, WTA
Page 29: Section 4.4 reliability, Eq (22)
Page 30: Section 4.5
Page 31: Section 5 Discussion
Page 32: Data availability, Supplementary
Page 33: References start
Page 34: References continued
Page 35: References continued

I need to cite exact [PAGE N] markers. Since the user provided the text with page numbers visible as standalone numbers between content, I'll cite those.

Now let me plan each section:

**THINK_TRACE (>=400 words)**: Deep multi-hop derivation & gray-zone audit. I need to derive the mediation decomposition logically, audit assumptions, identify gray zones (e.g., first-set mediator is inside outcome window but earlier; point-count matching assumes exchangeability; outcome-dependent stopping time; modular cut posterior vs joint posterior; identifiability limits; sensitivity to reliability matching; WTA replication differences).

**SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX equations from the paper, units, page citations, breakdown. Include Eq (1) through Eq (22), Propositions 1-2, Table 2/3 values, surface-specific mediated shares, components Ps and Ws, gap Gs.

**RETROCAUSAL_GENEALOGY**: Historical/scientific lineage & multi-week traps. Trace from Zermelo (1929), Bradley & Terry (1952), Hunter (2004), Glickman (1999), Baron & Kenny (1986), Robins & Greenland (1992), Pearl (2001), Imai et al. (2010), VanderWeele (2015), Suissa (2008) immortal time bias, Rubin (1987) multiple imputation, Carroll et al. (2006) measurement error. Multi-week traps: expanding window refit before season T, t*_i(T), gi(T), one-step forecast vs boundary exposure.

**RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it as: how the model handles crises (injury, fatigue, retirements), habit regression (mean reversion of ability), counter-trap (point-count matching as counter to naive full-match mediation), clock (temporal ordering, expanding windows, season boundaries).

**CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof. Physical: serve is scrutinized, first-serve points won 69-75% Grand Slam, second-serve 55%, surface differences (clay 69% vs grass/hard 75% first-serve points won per Prieto-Lage 2023). Biomechanical: point dependence (Klaassen & Magnus 2001), exchangeability assumptions, stopping time (set ends when one player wins). Weather/court conditions: match-level shock, surface-specific abilities, partial pooling on grass. Vetoes: retirements as censoring, selection bias in Match Charting Project, grass holdout not tested.

**RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Or some counterfactual verification framework. I need to create 3 counterfactual veto scenarios that are verifiable, with predictions. Examples:
1. If retirements are included vs excluded, mediated share changes (veto: if retirement-censored matches drive overlap, excluding them should reduce full-match mediated share toward first-set).
2. If point-count-matched control is replaced with with-replacement bootstrap, variance increases and mediated share shifts (veto: Proposition 2 fails, control no longer matches first-set precision).
3. If ability is estimated with joint posterior (feedback allowed) instead of cut posterior, pre-match ability gets contaminated by within-match performance (veto: modularity breaks, ability estimates move after seeing mediator).

I must avoid betting lines entirely. No spreads, totals, moneylines, odds. I can mention probabilities, win probabilities, log loss, Brier score, accuracy, but not betting odds.

Word count: >=1000 words total across sections, with THINK_TRACE >=400 words.

Let me write carefully with LaTeX equations and page citations.

Structure:
- THINK_TRACE: >=400 words. Deep derivation.
- SOURCE_OPERATORS_AND_EQUATIONS: Formal equations, citations.
- RETROCAUSAL_GENEALOGY: Lineage.
- RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- CROSS_LAYER_VETO_ADJUDICATION: Veto proof.
- RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let me draft content.

THINK_TRACE draft (aiming ~500+ words):

Start with the identification problem: ability θ is pre-match, mediator X is in-match, outcome Y is match result. The paper uses a cut posterior p(ψ, θ⁻ | DA, DP) = p(ψ | θ⁻, DP) p(θ⁻ | DA) to prevent feedback. The dynamic Bradley-Terry: θ_{i,s,t} = μ_{i,t} + δ_{i,s}, μ random walk. Exposure for target season T is θ⁻_{e,i,s}(T) = μ_{i,t*(T)} + δ_{i,s} + σ_ω g_i(T) Z_i, where g_i(T) = (T-1) - t*(T). This is a boundary state at season T-1, not a one-step ahead forecast (which would use T - t*(T)). Standardization within window: θ̃ = θ⁻ / ς_T.

Mediator constructions: set1 (window=set1, n=set1 points), ctrl (window=full, n=set1 points sampled w/o replacement), full (window=full, n=full points). Standardized within surface: X = (R - R̄_s)/S_s.

Outcome model: logit(p_m) = c_s Δθ + λ_s ΔX. Pathway estimands via g-computation with symmetric intervention d: θ_a(d)=d/2, θ_b(d)=-d/2, so Δθ(d)=d. Gradient g_s = ∂E[ΔX|d]/∂d = β_own - β_opp > 0.

DE, IE, TE formulas on win-probability scale using expit. Mediated share S = IE/TE. Gap decomposition: G_s = S(full) - S(set1); P_s = S(full) - S(ctrl); W_s = S(ctrl) - S(set1); G = P + W.

Gray zones:
1. First-set mediator is temporally earlier but still inside match outcome window; outcome overlap not eliminated. Only second-set outcome places mediator entirely prior.
2. Point-count matching: Proposition 1 shows conditional expectation matches full-match target; Proposition 2 matches conditional variance under exchangeability and fixed n. But n is outcome-dependent stopping time (set ends when won), so assumptions may fail. Control is design-based conditional on observed record, not pure precision effect.
3. Reliability: classical attenuation λ_b = κ λ, c_b = c + λ g (1-κ). Total preserved along attenuation path locally. But logistic outcome makes it local. Reliability-matched control moves hard W from 0.127 to 0.215, clay from 0.177 to 0.329 — sensitivity, not correction.
4. Cut posterior vs joint posterior: no feedback protects pre-match meaning but frequentist calibration may differ.
5. Selection: Match Charting Project over-covers prominent players/marquee matches; linked sample not representative. Grass holdout has no matches in 2026 holdout, so grass ratings untested out-of-sample.
6. Causal assumptions: consistency, no interference, positivity, exchangeability, no unmeasured M-Y confounding, no exposure-induced confounder, temporal ordering. Latent ability is model-defined, not manipulable. So DE/IE/TE are structural pathway summaries, not unconditional causal effects.

Numbers: ATP hard S(set1)=0.52, S(ctrl)=0.65, S(full)=0.95; P=0.301, W=0.127; W% of gap=30%. WTA hard W=0.109 [-0.004, 0.223]. Second-set outcome hard W=0.311 [0.229, 0.396].

SOURCE_OPERATORS_AND_EQUATIONS: List equations with page numbers.

RETROCAUSAL_GENEALOGY: Zermelo 1929 -> Bradley-Terry 1952 -> Hunter 2004 / Glickman 1999 / Cattelan 2013 dynamic. Baron & Kenny 1986 mediation -> Robins & Greenland 1992 / Pearl 2001 counterfactual -> Imai et al. 2010 / VanderWeele 2015 sensitivity. Suissa 2008 immortal time bias analogy. Rubin 1987 multiple imputation for control uncertainty. Carroll et al. 2006 measurement error attenuation. Multi-week traps: expanding window refit before T; t*(T) most recent active season < T; g_i(T) gap propagation; one-step forecast would use T - t*(T) but exposure is boundary T-1; standardized within window ς_T; seasonal not within-season evolution.

RECURSIVE_THEORY_OF_MIND: Interpret "crisis habit regression" as mean reversion / shock absorption in ability random walk; "counter-trap" as point-count-matched design countering naive full-match mediation; "clock" as expanding-window temporal boundary and season standardization. Discuss how the model regresses toward historical mean during absences (σ_ω g_i(T) Z_i), how counter-trap isolates point count vs window, how clock enforces no future leakage.

CROSS_LAYER_VETO_ADJUDICATION: Physical: serve stats from Prieto-Lage 2023 [PAGE 2]: server wins 69-75% first-serve points, ~55% second-serve, first-serve points won 69% clay vs 75% grass/hard. Klaassen & Magnus 2001 points not iid. Biomechanical: bivariate residuals ε with correlation ρ unrestricted; own β>0, opp β<0. Weather/court: surface-specific δ, partial pooling on grass, match-level shock (injury, fatigue, court conditions) unobserved. Vetoes: retirements are censoring not sporting anomalies (surfaced by predictive surprise scan [PAGE 24]); selection bias from charting archive; grass holdout empty; positivity restrictions exclude inconsistent mediation; unrestricted hard-court refit gives direct -0.091 and share 1.07 >1, boundary sensitivity.

RLVR_COUNTERFACTUAL_VETOES: Three verifiable counterfactual veto scenarios with predictions.

Need to be careful: "odds" appears in the source text (log odds). The invariant says never mention spreads, totals, moneylines, or odds. The source text mentions "fitted log odds correlating 0.968 with the truth". I should avoid using the word "odds" in my own writing, but I can reference the paper's "log odds" if quoting? Better to avoid entirely or rephrase as "logit scale" or "log-odds" — wait, "odds" is explicitly forbidden: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I cannot say "odds" at all. I must avoid that word. I'll use "logit", "win probability", "probability scale", etc.

Also avoid "betting lines" mention. The paper mentions "betting markets" and "betting lines" in the source. I should not repeat those terms. I can say "wagering markets" or just avoid. Actually the invariant says never mention spreads, totals, moneylines, or odds. It doesn't ban "betting markets" explicitly but it's safer to avoid gambling terminology. I'll avoid.

Let me now write the response. I need to ensure XML sections are exact.

I'll produce a comprehensive response. Let me estimate word count to be safe.

Let me draft each section fully.

THINK_TRACE:

The core inferential problem is a three-layer system: pre-match ability θ⁻, in-match mediator X, and match outcome Y. The paper’s first methodological contribution is the modular cut posterior in Eq. (12) [PAGE 15]: p_cut(ψ, θ⁻ | DA, DP) = p(ψ | θ⁻, DP) p(θ⁻ | DA). This blocks the feedback path from within-match performance and the match result back into the pre-match ability exposure. A joint posterior would allow the mediator and outcome to revise θ⁻, destroying the temporal interpretation. The expanding-window ability model [PAGE 10–12] estimates θ_{i,s,t} = μ_{i,t} + δ_{i,s} [Eq. 2, PAGE 10] using only matches before season T. The exposure is the boundary state θ⁻_{e,i,s}(T) = μ_{i,t*(T)} + δ_{i,s} + σ_ω g_i(T) Z_i [Eq. 5, PAGE 12], where g_i(T) = (T−1) − t*(T). Crucially, this is not a one-step-ahead forecast to season T (which would use T − t*(T)); it is the propagated state at the end of season T−1, the last fully observed pre-match season. Players with no prior history are excluded rather than assigned a prior-dominated exposure.

The mediator constructions are defined on page 6–7 [PAGE 6–7]: set1 uses the opening set only; ctrl draws without replacement from the full match while retaining the first-set service-point count n; full uses every service point. Each is standardized within surface: X_im^{(w)} = (R_im^{(w)} − R̄_s^{(w)}) / S_s^{(w)} [Eq. 7, PAGE 13]. The outcome model [Eq. 11, PAGE 14] is logit(p_m) = c_s Δθ_m + λ_s ΔX_m, with positivity restrictions c_s > 0 and λ_s > 0 orienting the decomposition. Under the symmetric intervention d [Eq. 15, PAGE 16], θ_a(d) = d/2 and θ_b(d) = −d/2, so Δθ(d) = d. The performance gradient is g_s = β_own − β_opp > 0 [Eq. 16, PAGE 16], meaning the expected service-performance gap widens through both the server’s own strength and the opponent’s weakness.

The pathway summaries [Eq. 17–19, PAGE 17] are evaluated by g-computation on the win-probability scale using expit. The mediated share is S_s(w) = IE_s(w) / TE_s(w), formed within each posterior draw rather than as a ratio of posterior means. The conventional gap G_s = S(full) − S(set1) is decomposed [Eq. 20, PAGE 17] into P_s = S(full) − S(ctrl) (point-count component) and W_s = S(ctrl) − S(set1) (window-construction component), with G_s = P_s + W_s by definition.

Gray-zone audit: (1) The first-set mediator is earlier than the final result but remains inside the match outcome window; its points help decide the thing being explained [PAGE 27]. Only the second-set outcome places the mediator entirely prior to the modeled outcome. (2) Point-count matching satisfies Proposition 1 [PAGE 18], E[R_ctrl | R_full] = R_full, and Proposition 2 [PAGE 18] matches conditional variance under exchangeability and fixed n, but n is an outcome-dependent stopping time because a set ends when one player wins it. The control is therefore design-based conditional on the observed record, not a pure precision effect. (3) Reliability attenuation [Eq. 21, PAGE 19] gives λ_b = κλ and c_b = c + λg(1−κ), preserving the total coefficient along the path locally, but the logistic link makes this local rather than global. Reliability-matched controls move W_hard from 0.127 to 0.215 and W_clay from 0.177 to 0.329 [PAGE 29], reported as sensitivity, not correction. (4) The cut posterior protects pre-match meaning but lacks guaranteed frequentist calibration versus a joint posterior [PAGE 31]. (5) Selection: the Match Charting Project over-covers prominent players and marquee matches; the linked sample is not representative of professional tennis [PAGE 31]. The 2026 holdout contains no grass matches, so grass abilities are untested out of sample [PAGE 23]. (6) Causal identification requires consistency, no interference, positivity, exchangeability, no unmeasured mediator–outcome confounding, no exposure-induced confounder, and temporal ordering; latent ability is model-defined, not manipulable, so DE/IE/TE are structural pathway summaries, not unconditional causal effects [PAGE 20].

This is already quite long. I'll refine in final.

SOURCE_OPERATORS_AND_EQUATIONS: I'll list equations with page numbers and values.

RETROCAUSAL_GENEALOGY: Trace lineage.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (random walk mean reversion during absences), counter-trap (point-count matching vs naive full-match), clock (expanding window, season boundary T, standardization ς_T).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather vetoes.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.

I need to ensure no betting lines. I will not use "odds", "spread", "total", "moneyline".

Let me check word counts. THINK_TRACE needs >=400 words. Total >=1000 words.

I'll write now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s inferential architecture is a three-layer system: pre-match ability θ⁻, in-match mediator X, and match outcome Y. The first methodological contribution is the modular cut posterior in Eq. (12) [PAGE 15]: p_cut(ψ, θ⁻ | DA, DP) = p(ψ | θ⁻, DP) p(θ⁻ | DA). This blocks the feedback path by which within-match performance and the match result could revise the pre-match ability exposure. An ordinary joint posterior would let the mediator and outcome retroactively alter θ⁻, destroying the temporal interpretation. The dynamic ability model [PAGE 10–12] specifies θ_{i,s,t} = μ_{i,t} + δ_{i,s} [Eq. 2, PAGE 10], with μ evolving by a seasonal random walk μ_{i,t} = μ_{i,t−1} + ω_{it}, ω_{it} ~ N(0, σ_ω²). For a target season T, ability is refit using only matches played before T. The exposure is the boundary state θ⁻_{e,i,s}(T) = μ_{i,t*(T)} + δ_{i,s} + σ_ω g_i(T) Z_i [Eq. 5, PAGE 12], where g_i(T) = (T−1) − t*(T). This is deliberately not a one-step-ahead forecast to season T (which would use T − t*(T)); it is the propagated state at the end of season T−1, the last fully observed pre-match season. Players without prior history are excluded rather than assigned an exposure dominated by the prior.

The mediator constructions [PAGE 6–7] are: set1 (window = first set, sample size = first-set service points), ctrl (window = full match, sample size = first-set count, drawn without replacement), and full (window = full match, sample size = all service points). Each is standardized within surface [Eq. 7, PAGE 13]: X_im^{(w)} = (R_im^{(w)} − R̄_s^{(w)}) / S_s^{(w)}. The outcome model [Eq. 11, PAGE 14] is logit(p_m) = c_s Δθ_m + λ_s ΔX_m, with positivity restrictions c_s > 0 and λ_s > 0 orienting the decomposition. Under the symmetric intervention d [Eq. 15, PAGE 16], θ_a(d) = d/2 and θ_b(d) = −d/2, so Δθ(d) = d. The performance response gradient is g_s = ∂E{ΔX(d) | s}/∂d = β_own − β_opp > 0 [Eq. 16, PAGE 16]: raising one player’s ability while lowering the opponent’s widens the expected service-performance gap through both sides of the match.

The pathway summaries [Eq. 17–19, PAGE 17] are evaluated by g-computation on the win-probability scale using expit. The mediated share S_s(w) = IE_s(w) / TE_s(w) is formed within each posterior draw rather than as a ratio of posterior means. The conventional gap G_s = S(full) − S(set1) is decomposed [Eq. 20, PAGE 17] into P_s = S(full) − S(ctrl), the point-count component, and W_s = S(ctrl) − S(set1), the window-construction component, with G_s = P_s + W_s by definition.

Gray-zone audit: (1) The first-set mediator is temporally earlier than the match result but remains inside the match outcome window; its points are among those that decide the thing being explained [PAGE 27]. Only the second-set outcome places the mediator entirely prior to the modeled outcome. (2) Point-count matching satisfies Proposition 1 [PAGE 18], E[R_ctrl | R_full] = R_full, and Proposition 2 [PAGE 18] matches conditional variance under exchangeability and fixed n, but n is an outcome-dependent stopping time because a set ends when one player wins it. The control is therefore design-based conditional on the observed record, not a pure precision effect. (3) Reliability attenuation [Eq. 21, PAGE 19] yields λ̃_b = κλ and c̃_b = c + λg(1−κ), preserving the total coefficient along this attenuation path locally, but the logistic link makes the result local rather than a general property. Reliability-matched controls move W_hard from 0.127 [0.053, 0.203] to 0.215 and W_clay from 0.177 [0.066, 0.288] to 0.329 [PAGE 29]; these are sensitivity analyses, not corrected estimates. (4) The cut posterior protects pre-match meaning but lacks guaranteed frequentist calibration relative to a joint posterior [PAGE 31]. (5) Selection: the Match Charting Project over-covers prominent players and marquee matches, so the linked sample is not representative of professional tennis [PAGE 31]. The 2026 holdout contains no grass-court matches, so grass abilities are untested out of sample [PAGE 23]. (6) Causal identification requires consistency, no interference, positivity, exchangeability, no unmeasured mediator–outcome confounding, no exposure-induced confounder, and temporal ordering; latent ability is model-defined rather than manipulable, so the direct, indirect, and total effects are surface-specific structural pathway summaries, not unconditional causal claims [PAGE 20]. Empirically, on hard courts S(set1) = 0.52, S(ctrl) = 0.65, S(full) = 0.95; P = 0.301 [0.236, 0.364] and W = 0.127 [0.053, 0.203], so the window-construction component is 30% of the conventional gap [PAGE 26].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Ability model [PAGE 10–12]:
θ_{i,s,t} = μ_{i,t} + δ_{i,s}, μ_{i,t} = μ_{i,t−1} + ω_{it}, ω_{it} ~ N(0, σ_ω²) [Eq. 2, PAGE 10]
Zero-sum constraints [Eq. 4, PAGE 11]: Σ_{i∈A_t} μ_{i,t} = 0 ∀t; Σ_i δ_{i,s} = 0 ∀s; Σ_s δ_{i,s} = 0 ∀i.
Boundary exposure [Eq. 5, PAGE 12]: θ⁻_{e,i,s}(T) = μ_{i,t*(T)} + δ_{i,s} + σ_ω g_i(T) Z_i, Z_i ~ N(0,1), g_i(T) = (T−1) − t*(T).
Window standardization [Eq. 6, PAGE 12]: θ̃_{i,s}(T) = θ⁻_{e,i,s}(T) / ς_T, where ς_T is the window-specific standard deviation over players and surfaces.

Mediator construction [PAGE 6–7, 13]:
X_im^{(w)} = (R_im^{(w)} − R̄_s^{(w)}) / S_s^{(w)} [Eq. 7, PAGE 13], w ∈ {set1, ctrl, full}.
R_im^{(full)} = (1/N_im) Σ_{k=1}^{N_im} W_imk [PAGE 18]; ctrl is the mean of n_im entries drawn uniformly without replacement from the full record [PAGE 18].

Performance model [PAGE 14–15]:
X_a = α_sm + β^own_s θ̃_a + β^opp_s θ̃_b + ε_a [Eq. 8]
X_b = α_sm + β^own_s θ̃_b + β^opp_s θ̃_a + ε_b [Eq. 9]
(ε_a, ε_b) ~ N( (0,0), σ_X² [[1, ρ],[ρ,1]] ) [Eq. 10]
Restrictions: β^own_s > 0, β^opp_s < 0; ρ unrestricted.

Outcome model [PAGE 14]:
Y_m ~ Bernoulli(p_m), logit(p_m) = c_sm Δθ̃_m + λ_sm ΔX_m [Eq. 11]
where Δθ̃_m = θ̃_a − θ̃_b and ΔX_m = X_a − X_b.

Cut posterior and comparison distribution [PAGE 15]:
p_cut(ψ, θ⁻ | DA, DP) = p(ψ | θ⁻, DP) p(θ⁻ | DA) [Eq. 12]
p_cut(ψ) = ∫ p(ψ | θ⁻, DP) p(θ⁻ | DA) dθ⁻ [Eq. 13]
q_cmp(θ⁻, {ψ^{(w)}}) = p(θ⁻ | DA) ∏_{w∈W} p(ψ^{(w)} | θ⁻, DP) [Eq. 14]

Pathway estimands [PAGE 16–17]:
Symmetric intervention [Eq. 15]: θ_a(d) = d/2, θ_b(d) = −d/2, Δθ(d) = d.
Performance gradient [Eq. 16]: g_s = ∂E{ΔX(d) | s}/∂d = β^own_s − β^opp_s > 0.
Direct effect [Eq. 17], indirect effect [Eq. 18], total effect [Eq. 19] on the win-probability scale using expit, with TE = DE + IE.
Mediated share S_s(w) = IE_s(w) / TE_s(w), computed within each posterior draw.

Decomposition [Eq. 20, PAGE 17]:
G_s = S_s(full) − S_s(set1)
P_s = S_s(full) − S_s(ctrl)  (point-count component)
W_s = S_s(ctrl) − S_s(set1)  (window-construction component)
G_s = P_s + W_s by definition.

Propositions [PAGE 18]:
Prop. 1: E[R_ctrl | R_full] = R_full; the full and control mediators target the same finite-record performance quantity.
Prop. 2: Under exchangeability given latent rate π with conditional variance v and pairwise covariance q, and fixed n, Var(R_set1 | π) = Var(R_ctrl | π) = v/n + (1 − 1/n)q; conditionally independent Bernoulli reduces to π(1−π)/n.

Reliability attenuation [PAGE 19]:
λ̃_b = κλ [Eq. 21]; c̃_b = c + λg(1−κ); κ_s = Var(ΔX_true | Δθ) / Var(ΔX_obs | Δθ).
Regression-calibration diagnostic [Eq. 22, PAGE 29]: D_s = c̃_b,s − (λ̃_b,s / κ_s) g_s (1 − κ_s).

Empirical values [PAGE 25–26]:
ATP hard: S(set1)=0.52 [0.47, 0.58], S(ctrl)=0.65 [0.59, 0.71], S(full)=0.95 [0.92, 0.97]; P=0.301 [0.236, 0.364], W=0.127 [0.053, 0.203], W = 30% of gap.
ATP clay: S(set1)=0.41, S(ctrl)=0.58, S(full)=0.90; P=0.317 [0.213, 0.420], W=0.177 [0.066, 0.288], W = 36% of gap.
ATP grass: S(set1)=0.47, S(ctrl)=0.55, S(full)=0.87; P=0.319 [0.173, 0.464], W=0.080 [−0.090, 0.247], W = 20% of gap.
Second-set outcome [PAGE 28]: hard W rises to 0.311 [0.229, 0.396]; clay W = 0.328 [0.217, 0.442].
WTA replication [PAGE 28]: hard W = 0.109 [−0.004, 0.223] vs ATP 0.127; second-set W = 0.316 [0.192, 0.436].
Unrestricted hard-court refit [PAGE 29]: full-match direct coefficient −0.091 [−0.175, −0.009], mediated share 1.07 (>1 boundary).
Reliability-matched sensitivity [PAGE 29]: hard W 0.127 → 0.215; clay W 0.177 → 0.329.
Samples [PAGE 5]: ATP ability sample 28,658 matches (2015–2025), 485 players; pathway sample 3,820 matches (2016–2025): 2,484 hard, 940 clay, 396 grass; WTA 2,332 pathway matches.
Forecast metrics [PAGE 23]: lowest log loss and Brier score among seven comparators on 2026 holdout; paired t-statistics vs frozen Elo 3.80, surface-blended Elo 2.62, static Bradley–Terry 3.53; calibration slope 0.857; upset rate 0.3128 observed vs 0.3122 replicated, posterior predictive p-value 0.440 [PAGE 24].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s statistical lineage runs from paired-comparison ranking to causal mediation, with tennis-specific point-dependence theory in between. Zermelo (1929) initiated the maximum-likelihood approach to tournament outcomes as a paired-comparison problem; Bradley & Terry (1952) formalized the model in which win probability depends on a latent ability difference [PAGE 2–3]. Hunter (2004) supplied MM algorithms for generalized Bradley–Terry models, Glickman (1999) and Glickman & Stern (1998) introduced dynamic state-space and Bayesian computation for national rankings, and Cattelan et al. (2013) extended dynamic Bradley–Terry to tournaments [PAGE 3]. The paper inherits this tradition but adds surface specialization δ_{i,s} coupled to an overall seasonal component μ_{i,t}, with partial pooling from well-observed hard-court histories to sparse grass-court seasons [PAGE 9, 10–11].

On the mediation side, the vocabulary begins with Baron & Kenny (1986), moves through the counterfactual direct/indirect definitions of Robins & Greenland (1992) and Pearl (2001), and is developed in identification, estimation, and sensitivity analysis by Imai, Keele & Tingley (2010), Imai, Keele & Yamamoto (2010), and VanderWeele (2015), with attention to unmeasured mediator–outcome confounding (VanderWeele 2010; Cinelli & Hazlett 2020) [PAGE 3]. The paper explicitly declines unconditional causal claims because latent ability is not manipulable and the required assumptions are unverifiable; it reports model-based pathway summaries instead [PAGE 3–4].

Two adjacent literatures supply the design logic. Suissa (2008) on immortal time bias frames the danger of using information collected during an outcome period as if it were pre-exposure [PAGE 3]; here the full-match mediator is literally assembled from the points that realize the result. Rubin (1987) multiple imputation motivates propagating uncertainty in the point-count-matched control through a design-integrated posterior mixture [PAGE 4]. Carroll et al. (2006) on measurement error in nonlinear models supplies the attenuation logic: classical error in a mediator shrinks its coefficient [PAGE 2]. Tennis-specific point dependence is established by Klaassen & Magnus (2001), who show points are neither independent nor identically distributed [PAGE 2], which directly challenges the exchangeability assumptions behind Proposition 2 [PAGE 18].

Multi-week traps are central to the ability construction. For target season T, the model refits (2)–(3) using only matches before T [PAGE 12]. Let t*(T) < T be the most recent season in which player i was active in that historical window, and g_i(T) = (T−1) − t*(T). The exposure is the latent state at the boundary season T−1, not an unobserved season-T state [PAGE 12]. A one-step forecast of the season-T state would use T − t*(T) instead, which is explicitly not the exposure here [PAGE 12]. The extra innovation term σ_ω g_i(T) Z_i vanishes for a player observed in the preceding season and propagates unobserved transitions through season T−1 for a player returning after an absence [PAGE 12]. Because each expanding-window fit has its own anchored scale, abilities are standardized within their window via ς_T [Eq. 6, PAGE 12], so one unit of θ̃ is one window-specific standard deviation in the historical ability field [PAGE 12]. This creates a multi-week identification boundary: information never flows backward from season T into earlier ability estimates, but the standardized unit is retrospective over the full study period, limiting comparability to the represented population [PAGE 12]. The seasonal—not within-season—evolution of ability is itself a restriction: ability moves only between seasons, and surface specialization is held fixed [PAGE 31].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock describes how the model handles three distinct pressures on causal interpretation. Crisis habit regression appears in the random-walk ability dynamics: when a player is absent, the ability state does not freeze; it regresses through propagated innovation variance σ_ω g_i(T) Z_i across the gap g_i(T) = (T−1) − t*(T) [PAGE 12]. The longer the absence, the wider the diffuse boundary state, which is a formal habit-regression mechanism—past form decays toward the historical mean rather than being treated as permanently fixed. This protects against overconfidence in returning players but introduces the exact singularity that players without prior history are excluded rather than assigned a prior-dominated exposure [PAGE 12].

The counter-trap is the point-count-matched control [PAGE 4, 6–7]. A naive analyst compares the first-set mediator (early, imprecise) to the full-match mediator (late, precise) and attributes the entire mediated-share gap to timing. The control reverses this trap by holding the window at the full match while reducing the sample size to the first-set count, thereby isolating the point-count component P_s = S(full) − S(ctrl) from the window-construction component W_s = S(ctrl) − S(set1) [Eq. 20, PAGE 17]. The counter-trap succeeds only conditionally: Proposition 1 shows the control targets the same finite-record quantity as the full match [PAGE 18], and Proposition 2 matches conditional variance only under exchangeability and fixed n [PAGE 18]. Because n is an outcome-dependent stopping time—a set ends when one player wins it—the counter-trap cannot claim to identify a pure precision effect; it isolates measurement about a latent rate only if the stopping assumptions hold [PAGE 18–19].

The clock is the expanding-window temporal boundary enforced across the entire pipeline. Ability for match m in season T is estimated from results strictly before T [PAGE 12]. The cut posterior [Eq. 12–13, PAGE 15] makes the clock absolute: pathway data DP cannot update the ability distribution θ⁻ estimated from historical results DA. The comparison distribution q_cmp [Eq. 14, PAGE 15] couples the same ability draw across mediator constructions but keeps pathway parameters conditionally independent, so the clock prevents any cross-model covariance from being mistaken for identified residual dependence [PAGE 15]. Where the clock and the crisis mechanism interact, a returning player’s diffuse boundary state is still frozen relative to the current match’s mediator and outcome; no within-match shock can revise the pre-match exposure. The failure mode of the clock is not temporal leakage but calibration mismatch: the modular posterior’s frequentist behavior need not match a joint posterior’s [PAGE 31]. The recursive theory of mind therefore reads as: crisis habit regression governs how ability decays across absences, the counter-trap governs how measurement construction is disentangled from timing, and the clock governs whether pre-match meaning survives contact with within-match data.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: serve performance is the most scrutinized element of tennis. In Grand Slam play the server wins about 69–75% of first-serve points and roughly 55% of second-serve points, and first-serve points are won about 69% of the time on clay against 75% on grass and hard courts (Prieto-Lage et al. 2023) [PAGE 2]. Point outcomes are not independent coin flips (Klaassen & Magnus 2001) [PAGE 2]. These physical regularities motivate the surface-specific discrimination parameter a_s > 0 in Eq. (3) [PAGE 11], which allows the same latent ability gap to carry different predictive consequences on different courts.

Biomechanical layer: service performance is a matchup property, not a server attribute in isolation [PAGE 25]. Equations (8)–(10) [PAGE 14] model X_a and X_b jointly with own-ability coefficient β^own_s > 0 and opponent-ability coefficient β^opp_s < 0, and an unrestricted residual correlation ρ. The posterior probability that |β^opp| > β^own is 0.83 on hard, 0.87 on clay, and only 0.07 on grass [PAGE 25], indicating that the server’s statistic is partly a statement about the opponent faced. A veto here is any leaderboard or performance clause that quotes serve percentage without opponent adjustment: schedule imbalance confounds the comparison [PAGE 30].

Weather/court and match-level shock layer: surface specialization δ_{i,s} is shared across seasons and partial-pooled toward sparse surfaces, most visibly on grass where the shorter calendar carries less information [PAGE 23]. The model explicitly permits an unobserved match-level shock—injury, fatigue, changing court conditions—that may act on both mediator and outcome [PAGE 15, Figure S1; PAGE 20]. Neither the expanding window nor the second-set analysis rules this out; it is examined through sensitivity analysis [PAGE 20]. Retirements are a concrete veto: predictive-surprise scanning surfaced high-surprise results ending in retirement, which are censoring events rather than sporting anomalies [PAGE 24]; Section S12 refits the decomposition without them [PAGE 24].

Veto adjudication summary: (1) Outcome-overlap veto: the full-match mediated share of 0.95 on hard courts [PAGE 25] reads more naturally as mechanical overlap than as behavioral completeness, because the same service points enter both mediator and result [PAGE 25–26]. (2) Positivity boundary veto: an unrestricted hard-court refit yields a direct coefficient of −0.091 [−0.175, −0.009] and a mediated share of 1.07 [PAGE 29], above the [0,1] range, signaling the restricted model is at its boundary and the near-complete share is prior-sensitive rather than evidentiary [PAGE 29]. (3) Selection veto: the Match Charting Project over-covers prominent players and marquee matches; the linked sample is not representative, and cross-round comparisons cannot rule out selection because every match comes from the same archive [PAGE 31]. (4) Grass holdout veto: the 2026 holdout contains no grass-court matches, so grass ratings are not tested out of sample [PAGE 23]. (5) Exchangeability veto: Proposition 2’s matched-variance result assumes exchangeability and fixed n, but n is an outcome-dependent stopping time, so the point-count component is design-based conditional on the observed record, not an identified pure precision effect [PAGE 18–19].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Retirement censoring veto. Counterfactual: re-estimate the pathway decomposition after excluding all matches ending in retirement or walkover, rather than retaining them as observed results. Verifiable condition: the paper notes predictive-surprise scanning surfaced retirements as censoring events and Section S12 refits without them [PAGE 24]. Prediction: if retirements mechanically inflate outcome overlap (a player retiring while serving poorly produces mediator points that coincide with a loss), the full-match mediated share on hard courts should fall below the reported 0.95 [0.92, 0.97] and the window-construction component W_hard should shift from 0.127 [0.053, 0.203]. If the share remains stable, retirements are not driving the overlap artifact.

Scenario 2 — With-replacement control veto. Counterfactual: replace the without-replacement point-count-matched control with a with-replacement bootstrap draw of n first-set service points from the full match. Verifiable condition: the paper states sampling with replacement would add variation from repeatedly drawing the same observed record, making the control noisier than the statistic it matches [PAGE 8]; Proposition 2’s variance match requires without-replacement sampling [PAGE 18]. Prediction: the with-replacement control will exhibit larger conditional variance than the first-set statistic, so S(ctrl) will move away from S(set1) toward S(full), inflating W and deflating P relative to the reported hard-court values (S(ctrl)=0.65, W=0.127, P=0.301). A failure to observe this shift would falsify the claimed variance-matching mechanism.

Scenario 3 — Joint-posterior feedback veto. Counterfactual: fit the ability and pathway stages in a single joint posterior rather than the cut distribution, allowing within-match performance and the match result to revise θ⁻. Verifiable condition: the paper’s cut posterior p_cut [Eq. 12, PAGE 15] explicitly blocks feedback to preserve the pre-match interpretation, and it notes a joint posterior would weaken that interpretation [PAGE 14–15]. Prediction: ability estimates for matches with extreme in-match performance differentials will shift relative to the expanding-window boundary state θ⁻_{e,i,s}(T) [Eq. 5, PAGE 12], particularly for players returning after absences where g_i(T) > 0. The mediated shares should become unstable across surfaces, with grass (sparsest data) showing the largest displacement, because future results leak backward into the exposure. If shares remain unchanged, the modularity assumption is empirically vacuous in this dataset.
</RLVR_COUNTERFACTUAL_VETOES>