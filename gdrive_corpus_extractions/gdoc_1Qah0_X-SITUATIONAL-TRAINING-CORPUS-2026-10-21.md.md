---
source: "X-SITUATIONAL-TRAINING-CORPUS-2026-10-21.md"
folder: "/CorpusRoot"
pages: 25
model: deepseek/deepseek-v4.1-flash-1017
words: 8877
---

<NATIVE_REASONING>
The user wants a deep, structured analytical response with exact XML sections, ≥1,000 words, formal LaTeX, page citations, no betting lines, no toy equations. This is a corpus analysis task. Let me produce a rigorous derivation built on the corpus's own logic: state as unit, EP vs WP split, leverage, script endogeneity, situational splits, availability/environment, market context, misleading stats.

I need [PAGE N] citations. Pages: 25. The corpus text is presented as a single block; I need to map records to page numbers plausibly. I don't have explicit page breaks. Hmm. The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." The source is 25 pages; the text is presented without page markers. I should construct a reasonable page mapping based on document order across 25 pages, and be transparent about the mapping. Let me assign pages proportionally to record ordering:

Document structure: header/purpose (~top), Theme 1 (10 records + teaching points), Theme 2 (12), Theme 3 (12), Theme 4 (8), Theme 5 (10), Theme 6 (10), Theme 7 (8), Theme 8 (10), run summary + gap list.

Total records 80. Plus teaching point blocks 8. Plus header and summary. 25 pages.

Let me make a defensible mapping:
- PAGE 1: header, purpose, raw API note, Theme 1 heading, Records 1.1–1.2
- PAGE 2: Records 1.3–1.6
- PAGE 3: Records 1.7–1.9
- PAGE 4: Record 1.10 + Theme 1 teaching points
- PAGE 5: Theme 2 heading, Records 2.1–2.3
- PAGE 6: Records 2.4–2.6
- PAGE 7: Records 2.7–2.9
- PAGE 8: Records 2.10–2.12 + Theme 2 teaching points
- PAGE 9: Theme 3 heading, Records 3.1–3.2
- PAGE 10: Records 3.3–3.5
- PAGE 11: Records 3.6–3.8
- PAGE 12: Records 3.9–3.11
- PAGE 13: Record 3.12 + Theme 3 teaching points
- PAGE 14: Theme 4 heading, Records 4.1–4.2
- PAGE 15: Records 4.3–4.5
- PAGE 16: Records 4.6–4.8 + Theme 4 teaching points
- PAGE 17: Theme 5 heading, Records 5.1–5.3
- PAGE 18: Records 5.4–5.6
- PAGE 19: Records 5.7–5.9
- PAGE 20: Record 5.10 + Theme 5 teaching points
- PAGE 21: Theme 6 heading, Records 6.1–6.3
- PAGE 22: Records 6.4–6.6
- PAGE 23: Records 6.7–6.10 + Theme 6 teaching points
- PAGE 24: Theme 7 heading, Records 7.1–7.8 + teaching points
- PAGE 25: Theme 8 records + teaching points + run summary + gap list

Hmm, page 25 would be overloaded. Let me rebalance: pages 24-25 for Theme 7 partially. Actually maybe:
- PAGE 24: Theme 7 Records 7.1–7.4
- PAGE 25: Records 7.5–7.8, Theme 7 teaching points, Theme 8 (compressed), run summary, gap list.

That's overloaded but the doc is dense. Alternatively treat p25 as Theme 7 tail + Theme 8 partially, and note run summary as p25. I'll just do a reasonable mapping and add a provenance caveat: "page mapping reconstructed from document order; the supplied flat text carries no explicit page breaks, so [PAGE N] markers are assigned by ordinal position across the 25-page source." That's honest and satisfies the citation requirement.

Actually, better: state the mapping table briefly at the top of SOURCE_OPERATORS_AND_EQUATIONS, then cite. Keep it compact.

Now content. I need to hit ≥1,000 words total, with THINK_TRACE ≥400 words.

Let me build the formal apparatus:

1. State vector: \(s = (d, D, y, \Delta, t, \tau, \ldots)\) — down, distance, yard line, score margin, clock, timeouts. Define expected points \(EP(s)\), win probability \(WP(s)\). Play value \(\Delta EP = EP(s') - EP(s) - \text{(possession sign)}\), and leverage \(L(s) = -\partial WP/\partial \Delta\) or \(|\mathrm{d}WP/\mathrm{d}\Delta|\). Actually leverage classically \(L = -\frac{\partial WP}{\partial \Delta}\) evaluated around \(\Delta=0\).

2. Decision value: \(V(a) = \sum_b P(b|a) WP(s_b)\), three-branch comparison, with the "punt is a branch" axiom. Cite 1.8 [PAGE 2], 4.2 [PAGE 14], 4.1 [PAGE 14].

3. Nonlinearity at goal lines: EP curvature, \(EP''(y) < 0\) near goal line, backed-up region. Cite 1.4 [PAGE 2] — "Starting on your own 2 yard line is worth −.65, starting on your 31 … is worth 1.51" and "almost as much as making the field goal". And 3.5 [PAGE 10].

4. Script endogeneity: PROE definition. \(\text{PROE} = \hat{p}_{\text{pass}}^{\text{obs}} - \mathbb{E}[p_{\text{pass}} | s]\). Cite 2.3 [PAGE 5], 2.4 [PAGE 6]. Confounding: selection bias, \(E[\text{yards} | \text{lead}]\) etc.

5. Inverse problem / causal arrow: 2.7, 2.8 [PAGE 7].

6. Regime stratification: red zone, two-minute, 4th down, backed-up, prevent. Mixture model: an observed aggregate is \(\sum_k \pi_k \theta_k\); reweighting operator \(W\) to common \(\pi^*\). Cite 2.11 [PAGE 8], 3.10 [PAGE 12].

7. Availability: QB identity as feature, OL count graded, rest differential, altitude acclimatization decay (time-varying within game), weather interactions player-specific. Cite 6.1 [PAGE 21], 6.7 [PAGE 23], 6.8 [PAGE 23], 6.4 [PAGE 22], 6.3 [PAGE 21].

8. Market: repricing, propagation across markets, key-number crossing cost. Careful — no betting lines. The invariant says never mention spreads, totals, moneylines, or odds. The corpus contains them heavily (Theme 7). I must avoid mentioning them. So in Theme 7 discussion I should abstract: "market repricing events," "the line" — hmm, "line" is a betting line. I must avoid. I can reframe as "consensus price," "repricing," "price movement magnitude in points of expected margin"? That risks. Better: discuss the informational content of repricing events abstractly — "consensus market price," "price revision," "cross-market coherence" without naming spread/total/moneyline/odds. Avoid numbers like "−3.5". I can say "a multi-point repricing," "revision magnitude," "crossing a high-density price level." That's abstract enough. I'll explicitly note the invariant: I'm treating Theme 7 as a price-revision information problem and deliberately excluding any quoted market instrument values.

Let me phrase: "Theme 7's evidence is admissible only in a sanitized form: what is transferable is the *information geometry* of repricing — magnitude, timing, propagation across independent quote streams, and the distinction between news-not-yet-priced and news-overpriced. The specific quoted instruments and their numerical values are excluded per operating invariant."

9. Misleading stats: EPA-r² decomposition: 8.7 says r² = 0.80, residual 19% — note that r²=0.80 → residual variance 20%, and they say ~19% is situational. Careful: r² = 0.80 means 80% of variance in EPA/play explained by YPP; residual 20% variance. The corpus says "remaining ~19%". I can formalize: \(\mathrm{Var}(EPA) = \mathrm{Var}(\hat{EPA}_{YPP}) + \mathrm{Var}(\epsilon)\), with \(R^2 = 0.80 \Rightarrow \sigma^2_\epsilon/\sigma^2_{EPA} = 0.20\). Note the corpus's "19%" is a rounding/convention difference; the *situational signal lives in the residual* — and note the subtlety that the residual is not purely situational; it's situational + noise. That's an important gray-zone audit point: the corpus's lesson ("hunt the residual ~19%") conflates residual variance with situational signal; some of it is measurement noise and opponent effects. Good multi-hop critique.

10. Credit assignment: play EPA ≠ player skill; goal-line finisher absorbs setup value. Formalize with a Shapley-style attribution or a counterfactual: \(\phi_i = \mathbb{E}[\Delta EP | \text{player } i \text{ involved}] - \text{baseline}\). Cite 8.6 [PAGE 25], 1.2 [PAGE 1].

11. Resulting / outcome bias: ex-ante vs ex-post. Cite 1.6 [PAGE 2] "The increase in win probability was 14.5%."

12. Sample-size shrinkage: 89 plays [PAGE 7] Record 2.9. Formalize empirical Bayes shrinkage: \(\hat{\theta}^{EB} = \frac{n}{\,n+\kappa\,}\bar{x} + \frac{\kappa}{n+\kappa}\mu_0\) with \(\kappa = \sigma^2/\tau^2\).

13. Singularity/breakdown regimes: 
- \(t \to 0\) with \(\Delta \neq 0\): WP becomes a step function, \(\partial WP/\partial \Delta\) undefined / Dirac; leverage diverges (measure-zero). Models trained on mid-game miscalibrate. Cite 1.7 [PAGE 3].
- Goal-line: \(y \to 0\), EP curvature, distance-to-goal compresses, EP saturates → derivative discontinuity at the goal line.
- Prevent regime boundary: state reclassification when \(\Delta WP\) per unit time exceeds threshold. Cite 3.11 [PAGE 12].
- Small-sample regime: \(n \lesssim 100\) plays.
- Endogeneity breakdown: when selection into state is deterministic (team never trails → no trailing data → extrapolation).
- Weather interaction breakdown: cold × warm-acclimatized QB interaction; main-effect model misspecified.
- Altitude: within-game time-varying coefficient; a flat venue penalty is misspecified.

14. RLVR counterfactuals: 3 verifiable scenarios with predictions. Must be verifiable — define observable checks. E.g.:
(a) Recompute the 4th-and-2.5 tie punt with branch prices and test whether the reported ~8.6-point WP error reproduces; prediction: sign and magnitude band.
(b) Take a team's season PROE, reweight to a neutral-script distribution; prediction: rank order flips for at least one team between raw and reweighted.
(c) Garbage-time filter sensitivity: recompute EPA rankings under 5–95 vs 10–90 vs unfiltered; prediction: at least one top-5 swap.
(d) QB-identity conditioning: Olave-type test.
Each with a falsification condition.

Let me also do the RECURSIVE_THEORY_OF_MIND section: crisis habit regression vs counter-trap vs clock. Interpretation: the "coach under pressure reverts to conservative heuristic" (crisis habit regression), the "counter-trap" (opponent anticipates your regression and prices it), and "clock" (the clock as the third player that makes both the habit and the counter-trap wrong). Model as a game between a decision-maker with a prior that hardens under stress, an opponent who models that hardening, and an exogenous clock that changes the payoff matrix. Formalize: a level-k / recursive belief hierarchy: coach's belief over model's recommendation, opponent's belief over coach's belief... Fixed point: the coach who knows the opponent knows he'll regress → "counter-trap" = the deviation that exploits the expected regression. And "clock" = the parameter that makes regression costly, so the equilibrium flips as \(t \to 0\). Include prediction: conservative action rate should increase with \(\partial \Delta WP/\partial t\) only up to a threshold, etc.

Also RETROCAUSAL_GENEALOGY: historical/scientific lineage. Lineage: von Neumann–Morgenstern expected utility → Bellman dynamic programming → Romer (2006) 4th-down paper → Pulaski/ESPN WP models → nflfastR/EPA → Burke's WP model → modern decision bots. Also: Richard Bellman, Sack Row? Actually "Romer 2006 'Do Firms Maximize? Evidence from Professional Football'" — yes. Also Virgil Carter & Robert Machol (1971) first football EP model — good historical anchor. Also Beaudoin? Also "Carroll, Palmer, Thorn" Advanced NFL Stats (Brian Burke). Also Kuhn–Tucker? Also the general statistical lineage: empirical Bayes (Efron–Morris), selection bias (Heckman), causal graphs (Pearl), Shapley credit (Shapley 1953), survival analysis / hazard models for clock. Also meteorology: acclimatization literature. Also the "retrocausal" trap: results-based narratives rewrite the decision's quality (hindsight bias, Fischhoff 1975). Multi-week traps: a model trained on outcome-conditioned data will learn to punt; a market that reprices on rumor then confirms creates a "wait for official report" habit that lags.

I should also do CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto proof. This means: which contexts physically veto a statistical inference regardless of sample. E.g., 
- A 5,280 ft altitude venue: reduced air density \(\rho(z) = \rho_0 \exp(-z/H)\) — actually use barometric formula; partial pressure of O2 falls; \(\dot VO_2max\) decline; the veto: no amount of statistical adjustment can make a sea-level visitor's late-game physiology equal to an acclimatized resident's; but the effect is time-varying → a flat penalty is physically false. Compute: at 1609 m, \(P \approx 0.83 P_0\), \(P_{O2} \approx 0.83 \times 20.9\%\). Acclimatization half-time ~ days; visitors <24h → no acclimatization; the physiologically defensible model is a decay term.
- Wind: aerodynamic drag on projectile, \(F_d = \frac12 \rho C_d A v^2\), lateral deflection \(\propto\) time of flight squared; 15 mph threshold; veto: uniform "bad weather" haircut is physically impossible to be sign-correct for all positions.
- Cold: air density increases as \(T\) falls (ideal gas, \(\rho = P/(RT)\)), so cold *helps* kickers' drag? Actually colder air is denser → more drag. But the corpus says Bass kicks better indoors — venue effect. The veto: a "cold = bad" main effect is physically underdetermined; the sign depends on mechanism (grip, ball hardness, density, acclimatization).
- Biomechanical: OL attrition — pressure rate is a function of the time-to-pressure integral; replacing 4 starters changes the pass-block win rate; there's a floor below which the scheme cannot compensate (a "physical veto"): the pocket collapses before route development → passing game variance collapses; no scheme adjustment beats a sub-2.0s pressure rate.
- Rest: recovery kinetics, soft-tissue injury risk as function of days between exposures; a 2-day deficit at historic extreme is a physical input.
Each veto: state the physical law, the boundary where the statistical model must yield.

Now let me be careful about length. Target maybe 2,200–3,000 words. Sections with real content.

Let me write.

Structure:
<THINK_TRACE> ≥400 words, multi-hop derivation + gray-zone audit. Include: the core derivation chain: state → EP → WP → leverage → decision → aggregation → player attribution → the three nested lies. Then gray-zone audit: list ambiguities (r²=0.80 vs 19%; the 4th-and-15 21.9%; the 58.3% conversion; the delay-of-game 8.6-point error; the "89 plays"; the flagged @grok secondary source; page-mapping caveat; the Theme 4 gap). Also note internal tension: Record 1.4 says the failure state's value "crushes the break-even conversion rate far below 50%" while 1.4 also says "roughly a 17% TD rate breaks even" — check consistency. Also tension: Record 3.6 league 4th-down conversion 58.3% vs Record 1.8's branch-expectation — base rate ≠ decision value. Also tension between 6.9 (rest edge real but priced ~49%) and 7.7 (market applies rest discount) — consistent.

Also a real tension: Record 2.3 is a secondary source (X's own AI account) — flagged; using it as an anchor for PROE is circular if the model training corpus includes it. Good audit point.

Another: Record 1.1 and 8.5 are the same post with different lessons; 1.2 and 8.6 same. Duplicate attestation — should be counted once, n=78 unique.

Also: Record 7.x posts contain unverifiable specifics; treat as claims not facts.

Let me write the equations carefully.

State: \(s = (d, D, y, \Delta, t, \tau_{\text{off}}, \tau_{\text{def}}, \ldots)\)

EP: \(EP(s) = \mathbb{E}[\text{points scored next} - \text{points allowed next} \mid s]\)

EPA: \(EPA_i = EP(s_{i+1}) - EP(s_i)\) for offense-positive convention; sign flips on turnover.

WP: \(WP(s) = \Pr(\text{win} \mid s)\)

Leverage: \(L(s) = -\dfrac{\partial\, WP(s; \Delta)}{\partial \Delta}\Big|_{\Delta = \Delta(s)}\) — units: win-probability per point.

Also define "situational value" \(\Lambda(s) = \partial WP/\partial EP \cdot\) something. Better: the chain rule
\[
\frac{\partial WP}{\partial \text{yards}} = \underbrace{\frac{\partial EP}{\partial y}}_{\text{field-position value}} \cdot \underbrace{\frac{\partial WP}{\partial EP}}_{\text{leverage}}
\]
That's a clean, real decomposition: yards → EP (field position) → WP (leverage). Units: WP/yard. This is a genuine derivation, not a toy ratio.

Decision value:
\[
V(a \mid s) = \sum_{b \in \mathcal{B}(a)} P(b \mid a, s)\, WP(s_b)
\]
with \(\mathcal{B} = \{\text{success, failure}\}\) for a go; for a kick, {make, miss}; for punt, distribution over net field position. Three-branch argmax. Note: \(WP\) is the common currency; EPA is not (1.8, 1.5).

Also define decision loss: \(\mathcal{L}(a) = \max_{a'} V(a'|s) - V(a|s)\) in WP units. The 8.6-point error is \(\mathcal{L}\) = 0.086.

Goal-line curvature: define \(g(y) = EP(y)\) for yard line \(y \in [0,100]\). Near own goal line, \(g'(y) > 0\) and \(g''(y) < 0\) (diminishing) — actually EP rises steeply from own 1 and flattens near midfield then rises again. Empirically non-monotone with a local max around opponent 35-40? Actually EP is roughly increasing in field position, concave near own goal line. The key formal point: \(g\) is not affine, so \(\mathbb{E}[g(y+\delta)] \ne g(y) + \delta \bar{g}'\); Jensen gap. And the failure-state value: \(\Pr(\text{opponent scores} | \text{turnover on downs at own } y)\) — the "pinning" effect. Break-even conversion:
\[
p^* = \frac{WP_{\text{punt}} - WP_{\text{fail}}}{WP_{\text{succ}} - WP_{\text{fail}}}
\]
This is the correct general form. Plug in 1.4's numbers conceptually: if \(WP_{\text{fail}}\) is high because the opponent is pinned, \(p^*\) falls far below 0.5. Good — that's a real derivation, not a toy.

Script model: 
\[
p_{\text{pass}}^{\text{exp}}(s) = \sigma\!\left(\beta_0 + \beta_1 \Delta + \beta_2 d + \beta_3 D + \beta_4 t + \cdots\right), \quad \text{PROE}_i = \mathbb{1}[\text{pass}_i] - p^{\text{exp}}_{\text{pass}}(s_i)
\]
Aggregate \(\overline{\text{PROE}} = \frac{1}{n}\sum_i \text{PROE}_i\). Note: because \(\mathbb{1}[\text{pass}]\) is binary and \(p^{exp}\) is a propensity, PROE has an interpretation as a pseudo-residual; its mean is ~0 by construction if the model is fit on the same sample (in-sample), so it must be fit out-of-sample or the estimate is degenerate. That's a nice sharp technical point: in-sample propensity residuals are identically zero-mean and shrink toward zero — so PROE requires cross-fitting. Cite 2.3/2.4.

Mixture reweighting:
\[
\theta^{\text{agg}} = \sum_{k} \pi_k \theta_k, \qquad \theta^{\text{reweighted}} = \sum_k \pi_k^* \theta_k
\]
with \(W\)-operator. Identification requires \(\theta_k\) estimable — the support problem: if \(\pi_k \approx 0\) for a team never trailing, \(\theta_k\) is unidentified → shrinkage \(\kappa\).

Empirical Bayes:
\[
\hat\theta = \frac{n}{n+\kappa}\bar x + \frac{\kappa}{n+\kappa}\mu_0, \quad \kappa = \sigma^2_{\text{within}}/\tau^2_{\text{between}}
\]

Variance decomposition:
\[
\mathrm{Var}(EPA/play) = \underbrace{\mathrm{Var}(\hat m(YPP))}_{R^2} + \underbrace{\mathrm{Var}(\epsilon)}_{1-R^2}
\]
with \(R^2 = 0.80\) [PAGE 25]. And the audit: \(\mathrm{Var}(\epsilon)\) = situational + opponent + noise; the corpus attributes all of it to "situational."

Weather: drag force \(F_d = \frac12 \rho C_d A v_{\text{rel}}^2\), \(\rho = p/(R_s T)\); range deficit \(\Delta R \approx -\frac{\rho C_d A}{2 m} \int v^2 dt\) … laterally \(\Delta x \approx \frac12 a_\perp t_f^2\) with \(a_\perp = F_{\text{wind}}/m \propto \rho C_d A v_{\text{wind}} v_{\text{ball}}/m\). Time of flight squared — so long throws amplify. Prediction: kicker/punt effects scale with \(t_f^2\).

Altitude: barometric \(p(z) = p_0 (1 - Lz/T_0)^{gM/(RL)}\); at z=1609 m, p ≈ 83.6 kPa vs 101.3. \(P_{O2} = 0.209 \times p\). Alveolar \(PAO_2 = P_iO_2 - PaCO_2/R\). Arterial O2 saturation on the steep part of the dissociation curve → reduced \(C_aO_2\) → reduced \(\dot VO_2max\). Acclimatization: plasma volume expansion and EPO kinetics over days–weeks; a <24h visitor is unacclimatized; the deficit is largest at high intensity and late. So: time-varying coefficient \(\beta_{\text{alt}}(t)\), and the model must be \(y = f(\cdot) - \lambda(t)\cdot\mathbb{1}[\text{visitor}]\cdot\mathbb{1}[\text{high intensity}]\).

Also air density reduces drag → longer kicks at altitude. So altitude has two opposite-signed mechanisms: physiological (hurts visitors) and aerodynamic (helps kicking). That's a great gray-zone cross-layer point and directly relevant to Record 6.8 + 7.8.

Biomechanical veto: pass-block. Time to pressure \(T_p \sim\) distribution; route development time \(T_r\). If \(P(T_p < T_r)\) exceeds a threshold, the deep concept is unavailable — a hard constraint, not a smooth tradeoff. OL starters out → shift in \(T_p\) distribution. Formal: availability \(A = \Pr(T_p > T_r)\). Scheme can lower \(T_r\) only down to the quick-game floor \(T_r^{\min}\); if \(T_p\) median < \(T_r^{\min}\), no scheme compensates → veto.

Rest: tissue recovery; injury hazard \(h(t)\) decreasing in days between exposures; and performance decrement. Physical veto on "rest doesn't matter" claims.

Now RLVR counterfactuals — 3 scenarios, each with: intervention, observable, prediction, falsifier.

Scenario A: Branch-priced 4th down reproduction. Take the tie/2:00/4th-and-2.5-at-own-46 state [PAGE 14]. Recompute \(V(\text{go}), V(\text{punt}), V(\text{FG})\) from an independent WP model with \(p_{\text{conv}} \in [0.55, 0.60]\), \(WP_{\text{succ}} \approx 0.71\), \(WP_{\text{fail}} \approx 0.29\). Prediction: \(\mathcal{L}(\text{punt}) \in [0.05, 0.12]\) WP and sign negative. Falsifier: if \(\mathcal{L} < 0.03\) or sign flips, the corpus's "8.6-point" claim fails the veto and must be demoted.

Note: must not mention betting lines; WP is fine.

Scenario B: PROE cross-fitting test. Fit propensity out-of-sample with 5-fold by game; prediction: (i) in-sample mean PROE ≈ 0 for all teams (degenerate), out-of-sample mean PROE ≠ 0 and rank order differs from raw pass rate for ≥1 team; (ii) the sign of the raw-vs-adjusted read flips for the specific team described in Record 2.3. Falsifier: out-of-sample mean PROE has |mean| < 0.005 for all teams → the residual is not carrying team signal, and the metric is noise.

Scenario C: Garbage-time filter sensitivity. Recompute team EPA/play under three filters (unfiltered, 5–95% WP, 10–90% WP) [PAGE 12]. Prediction: at least one team moves ≥5 rank positions between unfiltered and 10–90%; and the Spearman correlation between unfiltered and 10–90% rankings lies in [0.80, 0.95], not >0.98. Falsifier: if ρ > 0.98 the filter choice is immaterial and Record 3.10's claim is overstated.

Scenario D (bonus): QB-identity conditioning — Olave test. Prediction: within-player, across-QB split shows a target-share drop > 40% relative; versus a Jefferson-type counterexample where target share is preserved within ±10% and only TD rate collapses. Falsifier: if the QB-change effect is uniform in sign and magnitude across WRs, the interaction model is unnecessary.

Scenario E: Altitude decay shape. Prediction: second-half minus first-half performance differential for visitors at altitude exceeds that at sea-level venues by a measurable margin, and the effect scales with travel distance / absence of pre-acclimatization. Falsifier: no half×venue interaction.

I'll present 3 core + note.

Now, word count. Let me aim comfortably over 1,000. Sections:

THINK_TRACE ~600 words.
SOURCE_OPERATORS_AND_EQUATIONS ~900 words.
RETROCAUSAL_GENEALOGY ~450.
RECURSIVE_THEORY_OF_MIND ~450.
CROSS_LAYER_VETO_ADJUDICATION ~550.
RLVR_COUNTERFACTUAL_VETOES ~450.

Total ~3,400. Good.

Careful: no betting lines. In Theme 7 discussion avoid "spread," "total," "moneyline," "odds," "ATS," "cover." Record 6.9 mentions ATS 49% — I'll refer to "the market record of the rested side is reported at approximately chance" without naming the instrument. Actually "ATS" is a betting term; I'll say "the historical market record of the rested side is reported as approximately break-even." Safe.

Also avoid "cover the spread" from 2.7. I'll paraphrase: "rushing volume and team success co-move because leading teams run."

Also Record 1.4 "17% TD rate breaks even" — fine.

Let me draft.

Also need verbatim quotes with page cites. Use several short exact quotes from the source text.

Quotes available:
- "a 10-yard gain from the 25-yard line in a tie game vs. the Chiefs in the 4th Quarter is weighted the same as in the 3rd Q of a 35-point blowout vs. the Panthers." [PAGE 1]
- "The sneak TD can be +0.03 on 1st down up to +3.45 (!) on 4th down." [PAGE 1]
- "Starting on your own 2 yard line is worth −.65, starting on your 31 … is worth 1.51." [PAGE 2]
- "almost as much as making the field goal" [PAGE 2]
- "The increase in win probability was 14.5%." [PAGE 2]
- "depending on timeouts and clock" [PAGE 2]
- "If you have a game state of score, time, down, distance, etc 's', then WP(s) tells you the chance of winning given that state." [PAGE 2]
- "Punt" is never a default [PAGE 2]
- "That's an enormous delta. It was an obvious go spot." [PAGE 2]
- "Not all 5 yard gains are created equally." [PAGE 1]
- Theme 1 teaching: "Garbage time should be down-weighted for 'who is good,' not deleted from play value." [PAGE 4]
- "so a 6 yard play is worth 1.16 EPA" [PAGE 2]
- "depending on timeouts and clock" 
- 2.1: "versus a league average of 72% in that spot" [PAGE 5]
- 2.3: "Chargers at −8.6 PROE (3rd-most run-oriented)" [PAGE 5]
- 2.9: "led the league at 8.7 yards per play and a 9.0% TD rate on those 89 plays" [PAGE 7]
- 3.4: "31st in EPA/play, 2.0 yards per carry (26th)" [PAGE 10]
- 3.10: "Results flipped depending on whether plays were kept unfiltered or restricted to 5–95% or 10–90% win probability." [PAGE 12]
- 3.11: "Allowing 17 points in 11 minutes while up 24 is no longer 'garbage time'" [PAGE 12]
- 4.1: "ESPN graded it an 8.6-point win-probability mistake." [PAGE 14]
- 4.3: "teams have gone for it 63 out of 64 times over the last five years" [PAGE 15]
- 4.5: "If you punt, you need to force a 3-and-out to get the ball back." [PAGE 15]
- 5.8: "pass EPA stayed above +0.21 in both 2024 and 2025" [PAGE 19]
- 5.10: "Box count mostly reports the offense's personnel." [PAGE 20]
- 6.3: "Who does the weather actually move?" [PAGE 21]
- 6.7: "teams missing 4 starting offensive linemen were 2-8" [PAGE 23]
- 6.8: "5,280 feet" [PAGE 23]
- 8.7: "correlated at about r² = 0.80, so most of EPA is just yards" [PAGE 25]
- 8.8: "Allowing 4.1 yards per play looks fine until you notice the defense is not creating negative plays" [PAGE 25]
- 3.6: "converting fourth downs at 58.3%, the highest rate in NFL history" [PAGE 11]
- 3.7: "League fourth-and-15 conversion rate cited at 21.9%." [PAGE 11]
- 6.4: "QBs score about 11% fewer points" [PAGE 22]
- 1.5: "won 9% of the time, 17% when starting in their own territory" [PAGE 2]
- 1.7: "Down 3 at the 2 with 1 second left collapses to immediate win or loss" [PAGE 3]

Good.

Now the page map table — I'll include a compact one in SOURCE_OPERATORS_AND_EQUATIONS, or better at the very start of it, as a "citation frame" note. Keep it short: maybe 6 lines describing bands.

Let me write now. I'll be careful with LaTeX escaping — plain text with $...$ and \[ \] is fine.

One more: "ZERO TOY EQUATIONS" — every equation must be a real, standard construct: chain rule, Bellman expectation, Bayes, empirical-Bayes shrinkage, variance decomposition, barometric formula, drag force, hazard. Good.

Write it.

Also add units: WP dimensionless ∈[0,1]; EP in points; leverage in WP/point; EPA in points/play; PROE in probability units (pass-probability residual); pressure rate in s^-1; etc.

Length check — I'll write generously.

For the RECURSIVE_THEORY_OF_MIND, formalize:
Level-0: coach uses heuristic \(h_0\) (punt on 4th-and-long).
Level-1: analyst models coach's \(h_0\); recommends \(a^*\).
Level-2: coach anticipates being graded; may deviate to avoid criticism → "counter-trap."
The "counter-trap" is: the opponent/analyst expects the regression-to-habit, so the exploit is to *not* regress. And "clock" is the third agent: as \(t\to0\), the cost of habit rises superlinearly, so the level-2 equilibrium collapses back to level-1 action unless the coach's utility includes reputational loss.

Formalize with a utility: \(U(a) = V(a|s) - \lambda \cdot R(a)\) where \(R\) is expected reputational penalty for deviating from convention, \(\lambda\) rises under crisis (habit regression). Predicted behavior: \(\hat a = \arg\max\). Threshold: deviation occurs iff \(\Delta V > \lambda \Delta R\). As \(t\to0\), \(\Delta V\) grows (leverage), so the threshold is crossed — unless \(\lambda\) also grows faster. Testable: measured rate of conventional choices as function of leverage should be non-monotone if λ grows with stakes (crisis), monotone decreasing if not.

That's a real, testable model. 

Also "counter-trap" from the opponent's side: the defense, knowing the coach's λ, prepares for the punt; the go is the counter. Also: analyst-model recursion — if the model knows coaches know the model, published model recommendations get priced, so the residual edge decays (Goodhart). Cite 7.5/7.6 sanitized.

OK, writing.

Also note invariant 1 explicitly once: "Theme 7 is quarantined: the corpus records quote priced instruments; I extract only the information-theoretic structure and reproduce no priced instrument values."

Let me write the final answer.
</NATIVE_REASONING>

<THINK_TRACE>
**Derivation chain, first hop — what is the unit?** The corpus opens by refusing the box score as an ontology. Record 1.1 states the failure case exactly: *"a 10-yard gain from the 25-yard line in a tie game vs. the Chiefs in the 4th Quarter is weighted the same as in the 3rd Q of a 35-point blowout vs. the Panthers"* [PAGE 1], closing with *"Not all 5 yard gains are created equally"* [PAGE 1]. That is not a complaint about a metric; it is a statement that the correct random variable is the **state transition**, not the yardage. So the first hop is: replace the play with the pair \((s, s')\), where \(s\) is a vector. The second hop is that two different functionals live on that pair — expected points (a points-valued functional of field position, down, distance) and win probability (a dimensionless functional that also consumes score margin, clock, and timeouts). Record 1.8 supplies the operator identity verbatim: *"If you have a game state of score, time, down, distance, etc 's', then WP(s) tells you the chance of winning given that state"* [PAGE 2]. The third hop is that these two functionals compose by chain rule, which is what makes "leverage" a derived quantity rather than a vibe: yards buy points at the rate \(\partial EP/\partial y\), and points buy wins at the rate \(\partial WP/\partial EP\). Record 1.1's whole critique is the observation that the second factor is treated as a constant when it is in fact the most variable thing in the sport. The fourth hop is that once decisions are expressed in \(WP\), the decision is a Bellman one-step lookahead over branches, and *"Punt" is never a default* [PAGE 2] is simply the statement that punt is an element of the action set with its own branch distribution. The fifth hop is aggregation: if the per-play object is a state-conditioned difference, then summing per-play values into team or player ratings is a **credit-assignment** problem, not a summation problem — Record 8.6's goal-line finisher "absorbs credit the early-down runners created" [PAGE 25]. The sixth hop is comparative: any season-long number is a mixture over regimes, so ranking requires reweighting to a common regime distribution before comparison (Records 2.11, 3.10 [PAGES 8, 12]). Six hops, and the corpus's eight themes are the six hops plus three exogenous input families (personnel, availability/environment, market information) that change the branch probabilities feeding hop four.

**Gray-zone audit — where the corpus is softer than it sounds.** First, internal arithmetic tension. Record 1.4 says starting on your own 2 is worth −0.65 expected points and that *"a failed 4th down gains about 2.16 expected points of field position — 'almost as much as making the field goal'"* [PAGE 2], then concludes that *"roughly a 17% TD rate breaks even"* [PAGE 2]. A 17% break-even is an extraordinarily low bar, and it is only coherent if the failure branch's value is being measured against a punt branch that is itself near-hopeless from that spot. The record does not show the branch table, so the 17% must be treated as a claim requiring reconstruction, not an anchor. Second, base rate versus decision value. Record 3.6 gives league fourth-down conversion at *"58.3%, the highest rate in NFL history"* [PAGE 11] and Record 3.7 gives *"League fourth-and-15 conversion rate cited at 21.9%"* [PAGE 11]; neither number is a decision value, and a model that substitutes either into the go/punt comparison commits exactly the error Record 1.8 forbids. Distance-to-go is continuous and the conversion probability must be conditioned on down, distance, field position, and era jointly. Third, the residual fallacy in Record 8.7: *"team EPA/play and yards/play correlated at about r² = 0.80, so most of EPA is just yards"* [PAGE 25]. The claim that the remaining ~19% "is the situational piece" is a category error — the residual variance is situational signal plus opponent quality plus measurement noise plus play-call selection, and the corpus assigns all of it to situation. Fourth, a provenance contamination: Record 2.3 is flagged in-text as *"X's own AI account summarizing the metric — treat as a secondary source"* [PAGE 5]. If a training corpus ingests model-generated summaries of a metric as if they were independent attestations, the metric's definition gets laundered into apparent consensus. Fifth, duplicates: Records 1.1/8.5 and 1.2/8.6 are the same posts carrying different lessons, so the 80 records are 78 unique attestations — the corpus says so itself, and any frequency-based confidence weighting must dedupe. Sixth, the citation frame. The supplied artifact is flat text whose 25-page pagination is not marked inline; the [PAGE N] markers used here are assigned by ordinal position across the 25-page source (Theme 1 ≈ pp. 1–4, Theme 2 ≈ pp. 5–8, Theme 3 ≈ pp. 9–13, Theme 4 ≈ pp. 14–16, Theme 5 ≈ pp. 17–20, Theme 6 ≈ pp. 21–23, Themes 7–8 and apparatus ≈ pp. 24–25). That mapping is reconstruction, and it is disclosed rather than hidden.

**Gray-zone audit — the sharpest single technical point.** PROE is defined as a residual against an expected pass propensity. If the propensity model is fit and evaluated on the same sample, the mean residual is zero by the first-order condition of the fit, and the team-level statistic collapses toward zero for every team. The corpus's own numbers behave this way — Record 2.5 reports a game at *"PROE was 0%"* [PAGE 6]. A statistic that reads zero for a real team in a real game is either cross-fitted or degenerate, and the corpus never says which. This is the difference between a metric and an artifact of in-sample fitting, and it is the single largest unstated assumption in Theme 2.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**Citation frame.** Page markers below are ordinal positions across the 25-page source; the supplied text is unmarked, so the mapping is disclosed in THINK_TRACE and should be treated as reconstruction, not as printed pagination.

**1. State vector and the two functionals.** Let
\[
s=(d,D,y,\Delta,t,\tau_o,\tau_d,\dots)\in\mathcal{S},
\]
with down \(d\in\{1,2,3,4\}\), distance \(D\) and yard line \(y\) in yards, score margin \(\Delta\) in points (offense-positive), clock \(t\) in seconds, and timeouts \(\tau\) in count. Define
\[
EP(s)=\mathbb{E}\!\left[\,\text{points scored next}-\text{points allowed next}\ \middle|\ s\,\right]\quad[\text{points}],
\]
\[
WP(s)=\Pr\!\left(\text{win}\ \middle|\ s\right)\quad[\text{dimensionless},\,WP\in[0,1]].
\]
The per-play objects are differences, not levels:
\[
EPA_i=EP(s_{i+1})-EP(s_i)\quad[\text{points}\cdot\text{play}^{-1}],\qquad
\Delta WP_i=WP(s_{i+1})-WP(s_i)\quad[\text{dimensionless}].
\]
Record 1.3 makes the substitution explicit with numbers: 3rd-and-4 from the own 45 ≈ 1.53 EP, 1st-and-10 at the 50 ≈ 2.69 EP, *"so a 6 yard play is worth 1.16 EPA"* [PAGE 2]. The operator is \(EP(s')-EP(s)\); the yardage is an input to \(y'\), never the value itself.

**2. Leverage as a derived operator (chain rule).** Define leverage as the marginal win probability per point of margin, and the field-position value as the marginal expected points per yard:
\[
L(s)=-\left.\frac{\partial\,WP(s;\Delta)}{\partial \Delta}\right|_{\Delta=\Delta(s)}\ \left[\text{WP}\cdot\text{point}^{-1}\right],
\qquad
g'(y)=\frac{\partial EP}{\partial y}\ \left[\text{points}\cdot\text{yard}^{-1}\right].
\]
Then the value of a yard *in the currency of winning* is the product
\[
\frac{\partial WP}{\partial y}=g'(y)\cdot L(s)\quad[\text{WP}\cdot\text{yard}^{-1}].
\]
This is the formal content of Record 1.1: \(g'(y)\) is roughly stable across the two plays it compares; \(L(s)\) differs by an order of magnitude between a tied fourth quarter and a 35-point third quarter. Assumption: differentiability of \(WP\) in \(\Delta\) on an open neighborhood — an assumption that fails at the boundaries listed in §7.

**3. Decision value as a one-step Bellman expectation.** For action \(a\) with branch set \(\mathcal{B}(a)\),
\[
V(a\mid s)=\sum_{b\in\mathcal{B}(a)}P\!\left(b\mid a,s\right)\,WP\!\left(s_b\right)\quad[\text{dimensionless}],
\qquad
a^\star=\arg\max_{a\in\mathcal{A}}V(a\mid s),
\]
with decision loss
\[
\mathcal{L}(a\mid s)=\max_{a'\in\mathcal{A}}V(a'\mid s)-V(a\mid s)\quad[\text{WP}].
\]
Record 4.1 instantiates this with \(\mathcal{L}(\text{punt})\approx 0.086\): *"ESPN graded it an 8.6-point win-probability mistake"* [PAGE 14], using branch values \(WP_{\text{succ}}\approx 0.71\), \(WP_{\text{fail}}\approx 0.29\), \(p_{\text{conv}}\in[0.55,0.60]\). Record 4.2 prices all three branches and finds the kick dominated at 0.39 versus 0.52 for going [PAGE 14]. The corresponding **break-even conversion probability** solves \(V(\text{go})=V(\text{alt})\):
\[
p^\star=\frac{WP_{\text{alt}}-WP_{\text{fail}}}{WP_{\text{succ}}-WP_{\text{fail}}}.
\]
This is why Record 1.4's break-even sits far below one half: when the failure branch leaves the opponent pinned, \(WP_{\text{fail}}\) is large, the numerator shrinks, and \(p^\star\) collapses. The corpus states the mechanism qualitatively — *"the failure state … is itself valuable, which crushes the break-even conversion rate far below 50%"* [PAGE 2].

**4. Curvature at the goal lines and the Jensen gap.** \(EP\) is not affine in \(y\). Near the own goal line \(g'(y)\) is large and \(g''(y)<0\); near the opponent goal line the state space compresses and the derivative is discontinuous at \(y\to 0\). Consequently, for a random gain \(\delta\),
\[
\mathbb{E}\!\left[g(y+\delta)\right]\neq g(y)+\mathbb{E}[\delta]\,\bar{g}',
\]
and the gap is second-order in the gain dispersion. This is the formal reason Record 1.4's *"Starting on your own 2 yard line is worth −.65, starting on your 31 … is worth 1.51"* [PAGE 2] cannot be linearly interpolated, and why Record 3.5's backed-up regime [PAGE 10] needs its own baseline. Breakdown regime: \(|y-y_{\text{goal}}|\to 0\), where \(g\) is not differentiable and linear EPA per yard is undefined.

**5. Script endogeneity and the propensity residual.** Specify a pass propensity
\[
p^{\text{exp}}(s)=\sigma\!\left(\beta_0+\beta_1\Delta+\beta_2 d+\beta_3 D+\beta_4 t+\beta_5\tau+\cdots\right)\in[0,1],
\]
and define the per-play residual
\[
\text{PROE}_i=\mathbb{1}[\text{pass}_i]-p^{\text{exp}}(s_i)\quad[\text{probability units}],\qquad
\overline{\text{PROE}}=\frac{1}{n}\sum_{i=1}^{n}\text{PROE}_i.
\]
**Critical assumption:** \(p^{\text{exp}}\) must be estimated out-of-sample (cross-fitted by game or season block). In-sample, \(\sum_i\text{PROE}_i=0\) is a first-order condition of the fit, so the team statistic is mechanically zero and carries no information. Record 2.3's reported value — *"Chargers at −8.6 PROE (3rd-most run-oriented)"* [PAGE 5] — is only interpretable under a cross-fitted estimator; the same record is flagged as a **secondary source** [PAGE 5] and is therefore the weakest anchor in the theme. The causal claim is a selection problem: the observed pass rate is \(p^{\text{obs}}=\mathbb{E}[\,\mathbb{1}[\text{pass}]\mid s\,]\) confounded by the score, so a naive correlation between pass volume and outcome learns the arrow backwards (Records 2.7–2.8 [PAGE 7]). Record 2.1's counterexample is the identifying variation: a team at 45% dropback while trailing 7+, against a *"league average of 72% in that spot"* [PAGE 5], isolates a team-specific offset parameter in \(\beta_1\).

**6. Mixture reweighting and empirical-Bayes shrinkage.** A season aggregate is
\[
\theta^{\text{agg}}=\sum_{k}\pi_k\theta_k,\qquad
\theta^{\text{reweighted}}=\sum_{k}\pi_k^{\ast}\theta_k,
\]
over regimes \(k\in\{\text{neutral},\text{leading},\text{trailing},\text{red zone},\text{two-minute},\text{garbage}\}\) with \(\sum\pi_k=1\). Comparison across teams requires the same \(\pi^\ast\); the corpus states the requirement as *"Do not average across states. Reweight to a common script distribution"* [PAGE 8] and demonstrates the artifact in Record 3.10: *"Results flipped depending on whether plays were kept unfiltered or restricted to 5–95% or 10–90% win probability"* [PAGE 12]. Where a regime is sparsely observed, identification fails and shrinkage is mandatory:
\[
\hat\theta_k^{EB}=\frac{n_k}{n_k+\kappa}\,\bar{x}_k+\frac{\kappa}{n_k+\kappa}\,\mu_0,\qquad
\kappa=\frac{\sigma^2_{\text{within}}}{\tau^2_{\text{between}}}.
\]
Record 2.9 supplies the degenerate case — a team with the second-fewest trailing plays but *"8.7 yards per play and a 9.0% TD rate on those 89 plays"* [PAGE 7]. At \(n=89\), \(\kappa\) dominates unless the between-team variance is enormous; the estimate must be pulled hard toward the league mean.

**7. Singularity and breakdown regimes (exact).**
- **\(t\to 0\) with \(\Delta\neq0\):** \(WP\) degenerates to a step function in \(\Delta\); \(\partial WP/\partial\Delta\) is a Dirac mass, \(L(s)\) is unbounded on a measure-zero set. Record 1.7: *"Down 3 at the 2 with 1 second left collapses to immediate win or loss"* [PAGE 3]. Any model fit on mid-game smoothness miscalibrates here; the correct treatment is a separate regime, not a tail extrapolation.
- **\(y\to y_{\text{goal}}\):** \(g'\) discontinuous; EP linearization invalid.
- **\(n_k\lesssim 10^2\):** shrinkage-dominated; raw rate uninformative.
- **Support failure:** if \(\pi_k\to 0\) for a team (never trails), \(\theta_k\) is unidentified and the "team trait" is extrapolation.
- **Propensity degeneracy:** in-sample PROE ≡ 0.
- **Prevent-regime boundary:** the state reclassifies when \(|\Delta WP|\) accrued per unit clock exceeds the clock-management threshold — Record 3.11: *"Allowing 17 points in 11 minutes while up 24 is no longer 'garbage time'"* [PAGE 12].

**8. Variance decomposition and the residual error.** With \(R^2=0.80\) [PAGE 25],
\[
\underbrace{\mathrm{Var}(EPA/play)}_{\sigma^2}=\underbrace{\mathrm{Var}\!\left(\hat{m}(YPP)\right)}_{R^2\sigma^2}+\underbrace{\mathrm{Var}(\epsilon)}_{(1-R^2)\sigma^2=0.20\,\sigma^2}.
\]
The corpus attributes the 0.20 to "situation"; the defensible attribution is \(\mathrm{Var}(\epsilon)=\mathrm{Var}(\text{situation})+\mathrm{Var}(\text{opponent})+\mathrm{Var}(\text{noise})+\mathrm{Var}(\text{play-call selection})\). The residual is where the signal *and* the noise both live — and the corpus gives no procedure for separating them.

**9. Quarantine of Theme 7.** The market records quote priced instruments with numeric values [PAGES 24–25]. Per operating invariant, no priced-instrument values are reproduced here. What is admissible is the **information geometry** of a repricing event: (i) revision magnitude as a proxy for the market's implied value of an availability state; (ii) propagation across independent quote streams as a coherence test between news-driven and flow-driven moves; (iii) the distinction between *not-yet-priced* and *priced-then-overshot*; (iv) nonlinearity of revision cost at high-density price levels. These are treated as evidence about information arrival, never as instruments.

</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of this corpus runs through four separate scientific traditions that were fused only recently, and the fusion is what makes the records legible.

**Tradition one — expected utility and dynamic programming.** The three-branch decision rule \(V(a|s)=\sum_b P(b|a,s)WP(s_b)\) is a one-step Bellman recursion over a finite-horizon stochastic control problem. The intellectual debt is von Neumann–Morgenstern for the utility representation and Bellman for the recursion; the football-specific instantiation waited decades for the state space and transition kernel to be estimated well enough to be useful.

**Tradition two — the expected-points literature.** Virgil Carter and Robert Machol published the first expected-points model for football in 1971, estimating the point value of field position and down. That model was a static lookup over \((d,D,y)\). Every EPA number in this corpus descends from it. The decisive later move was replacing the lookup with a fitted conditional expectation over a much larger state space, which is what allows Record 1.3 to quote 1.53 and 2.69 as if they were physical constants [PAGE 2].

**Tradition three — the fourth-down revolution.** Romer's 2006 analysis of punt, field-goal, and go decisions as expected-value comparisons is the direct ancestor of Record 4.1's branch table [PAGE 14] and of the *"63 out of 64 times"* base rate in Record 4.3 [PAGE 15]. The intermediate step was the public win-probability model and the decision-bot literature, which converted a static paper into a per-snap advisory. Record 4.4 is the emblematic artifact of that step: a go recommendation from the own 18, in what the record calls *"the deepest 'never go' territory in conventional wisdom"* [PAGE 15].

**Tradition four — selection bias and causal identification.** Heckman's selection problem is the formal ancestor of Theme 2. When a team's pass rate is observed only conditional on the score it faced, the observed rate is a truncated draw, and the correction is a residual against a propensity model. Record 2.4's framing — a box score that *"looks pass-heavy"* while the script-adjusted read says run-heavy [PAGE 6] — is a textbook selection-bias reversal. Record 5.10 is the same problem in the defensive direction: *"Box count mostly reports the offense's personnel"* [PAGE 20], i.e., the defensive "choice" is an endogenous response to a declared offense.

**Retrocausal traps, multi-week horizon.** Four distinct traps recur across weeks and are not visible in any single record.

*Trap A — resulting.* The correctness of a decision is a property of the ex-ante distribution; the outcome is one draw. Record 1.6 is the clean statement: a go with a *"14.5%"* win-probability gain [PAGE 2] that fails is still correct, and a fast opponent score afterward is evidence **for** going, because the punt surrenders the same possession. Corpora built from outcome-conditioned text teach the opposite lesson, because the losing branch is the one that gets written about.

*Trap B — the official-report lag.* Record 7.5 records a market move on a rumor-grade input that the later, harder news vindicated [PAGE 25]. A model that waits for official designation systematically lags information already embedded in prices. The multi-week version: a research process that only ingests confirmed injury reports will appear well-calibrated in backtests and will be persistently late in deployment.

*Trap C — metric laundering.* A metric defined by one researcher, summarized by a model, cited by a second researcher, and then ingested as independent attestation gains apparent corroboration without gaining evidence. Record 2.3's explicit *"treat as a secondary source"* flag [PAGE 5] is the corpus's own defense against this, and it is insufficient — the flag is one line inside an 80-record file.

*Trap D — the reweighting regress.* Once it is known that aggregates must be reweighted to a common regime distribution, every published ranking becomes a statement about a chosen \(\pi^\ast\). The trap is that the choice of \(\pi^\ast\) is itself unconstrained, so two analysts can both "correctly" reweight and disagree permanently. Record 3.10 is the empirical proof that the disagreement is real and material [PAGE 12].

The genealogy's through-line: each tradition removed one specific lie. Carter–Machol removed "a yard is a yard." Romer removed "punting is safe." The win-probability literature removed "points are wins." The causal literature removed "the box score describes the team." What remains after all four removals is a state-conditioned, branch-priced, regime-reweighted, credit-assigned object — and the corpus is honest that the fourth removal (credit assignment) is the least complete, because Record 8.6's finisher problem [PAGE 25] still has no accepted solution.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Three agents act on every fourth-down decision, and only one of them is on the field.

**Agent one — the decision-maker under load.** Model the coach's choice as
\[
\hat{a}(s)=\arg\max_{a\in\mathcal{A}}\Big[\,V(a\mid s)-\lambda(s)\,R(a)\,\Big],
\]
where \(V\) is the win-probability value from §3, \(R(a)\) is the expected reputational cost of departing from convention (measured in the same WP units for commensurability), and \(\lambda(s)\ge 0\) is the coach's *convention weight*. **Crisis habit regression** is the hypothesis \(\partial\lambda/\partial L>0\): as leverage rises, the reputational cost of a visible unconventional failure rises faster than the value of the unconventional success, so the coach's effective objective tilts toward the conventional action even as the true value gap widens. This is testable and it is not the same as conservatism — a flat conservative bias has \(\partial\lambda/\partial L=0\).

**Agent two — the opponent who models agent one.** The defense knows \(\lambda\) and prepares accordingly. Against a coach with high \(\lambda\) in a 4th-and-short, the defense can prepare for the punt and the subsequent possession; the **counter-trap** is the deviation that exploits the expected regression. Formally, if the opponent's preparation invests \(q\) in punt-defense, the offense's go-value is increasing in \(q\) up to the point where the opponent re-optimizes — a level-2 belief. The corpus contains the structural precondition for this trap without naming it: Record 4.5's observation that *"If you punt, you need to force a 3-and-out to get the ball back"* [PAGE 15] means the punt branch and the failed-go branch share a defensive requirement, so the go branch weakly dominates whenever the opponent has already prepared for the punt. That is a counter-trap with a proof.

**Agent three — the clock.** The clock is not a parameter of the agents' beliefs; it is an exogenous process that changes the payoff matrix underneath them. As \(t\to 0\), \(L(s)\) diverges and the value gap \(\Delta V=V(\text{go})-V(\text{punt})\) grows superlinearly, while the time available to recover from a conventional choice shrinks to zero. The threshold condition for deviation is
\[
\Delta V(s)>\lambda(s)\,\Delta R,
\]
and because the left side grows as \(t\to0\) while \(\lambda\) grows only if crisis regression is real, the two hypotheses make **opposite predictions about the sign of the \(t\)-derivative of unconventional-choice rate**: a flat-bias coach becomes *more* unconventional late (value dominates); a crisis-regressing coach becomes *less* unconventional late (reputation dominates) until the value gap overwhelms even a rising \(\lambda\), producing a **non-monotone** unconventional-choice rate in leverage. The non-monotonicity is the discriminating signature, and it is measurable in the corpus's own material — Records 4.3's 63-of-64 bin [PAGE 15] is a high-\(\Delta V\), low-ambiguity region where nearly everyone deviates, while Record 1.5's late one-score 4th-and-long [PAGE 2] is the region where the punt rate is still high despite the delta being favorable. The gap between those two bins is the empirical footprint of \(\lambda\).

**Recursion depth and Goodhart.** There is a fourth loop: the analyst's model is public, so the coach can condition on the model's recommendation. Once recommendations are published and graded, \(R(a)\) updates — a deviation that was reputably costly becomes reputably cheap when a model endorsed it, and vice versa after a publicized failure. The corpus's market records show the same structure one layer out: a repricing on rumor that later confirms [PAGE 25] means the public model of the *information* was ahead of the official model of the *fact*. The recursive fixed point is unstable by construction — the edge from any published decision rule decays as it is adopted, which is why Record 4.8's *"coach's conservative lean is not evidence the model is wrong"* [PAGE 16] is a claim with a shelf life.

**Failure mode of the recursion.** Infinite regress is not the danger; premature convergence is. A model that assumes the coach is level-1 (ignores the model) will over-predict deviation; a model that assumes level-2 (coach best-responds to the model) will under-predict it, because real coaches face a mixed objective with an unobserved \(\lambda\). The honest specification keeps \(\lambda\) as a latent, estimated per coach and per leverage band, and refuses to close the recursion analytically.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
A cross-layer veto is a case where a physical or biomechanical constraint overrides a statistical inference regardless of sample size. Five such vetoes are provable from the corpus's own inputs.

**Veto 1 — altitude is a time-varying physiological term, and a flat venue penalty is physically false.** Denver's venue is stated at *"5,280 feet"* [PAGE 23]. Barometric pressure follows
\[
p(z)=p_0\left(1-\frac{Lz}{T_0}\right)^{\frac{gM}{RL}},
\]
giving \(p\approx0.83\,p_0\) at 1,609 m, hence inspired oxygen partial pressure \(P_iO_2=0.209\,p\approx0.83\) of sea level, hence a reduced alveolar and arterial \(O_2\) content and a reduced maximal aerobic power. Acclimatization is a multi-day process (plasma-volume expansion, erythropoietic response), so a visitor arriving within 24 h is **unacclimatized by construction**. The veto: no statistical adjustment can make a same-day visitor physiologically equal to a resident, so a zero-effect claim is physically inadmissible. But the *shape* matters more than the level — because the deficit is intensity- and duration-dependent, the correct specification is a decay term \(\beta_{\text{alt}}(t)\cdot\mathbb{1}[\text{visitor}]\), not a constant. Record 6.8's observation that *"visitors look better in the first half, Denver comes back in the second"* [PAGE 23] is exactly the signature of a time-varying coefficient, and Record 7.8's stacked weather-and-venue case [PAGE 25] shows the two layers arriving simultaneously. **Second, opposite-signed mechanism:** lower air density reduces aerodynamic drag, so the same venue *helps* long kicks and deep throws. A model that prices altitude as a single signed term is wrong in sign for at least one skill.

**Veto 2 — wind acts through drag, and the transfer to the run game is physically unsupported.** Projectile drag is
\[
\mathbf{F}_d=-\tfrac12\rho\,C_d\,A\,|\mathbf{v}_{\text{rel}}|\,\mathbf{v}_{\text{rel}},
\qquad \rho=\frac{p}{R_sT},
\]
with lateral deflection scaling as \(\Delta x\approx\tfrac12 a_\perp t_f^2\). Because \(t_f\) enters squared, the wind tax is **superlinear in time of flight** — deep throws and long kicks are hit disproportionately, short throws and runs are not. The veto: there is no mechanism by which lost passing value *transfers* to rushing points. Record 6.4 states the empirical result that matches the physics: at 15+ mph, *"QBs score about 11% fewer points, pass catchers 8% fewer, kickers 8% fewer. RBs get more carries but not more points"* [PAGE 22]. The "wind = run more = backs feast" inference is vetoed by the mechanism itself: carries are a volume response to play-calling, points are an efficiency response to drag, and the two do not conserve.

**Veto 3 — cold is mechanically ambiguous, so a signed main effect is inadmissible.** Ideal-gas density \(\rho=p/(R_sT)\) rises as \(T\) falls, which *increases* drag on the ball; simultaneously lower temperature reduces ball elasticity and grip. These mechanisms have opposite effects on kicking distance and on throwing accuracy. The veto: any uniform "cold = worse" haircut has an undetermined sign for at least one skill. The corpus's own evidence is interaction-only — Record 6.3 asks *"Who does the weather actually move?"* and finds *"Josh Allen's passing drops in the cold (−17.7 yards/game at 40° or colder); Dawson Knox goes up in the rain (+17.8); Tyler Bass kicks better indoors"* [PAGE 21], with Record 6.5 locating the real variable as the interaction between a player's climatic baseline and the game condition [PAGE 22]. A main effect is thus vetoed twice: mechanism ambiguity, and demonstrated opposite-signed player splits.

**Veto 4 — pass protection has a hard floor that scheme cannot buy back.** Pressure generation is a race between time-to-pressure \(T_p\) and route development time \(T_r\):
\[
A=\Pr\!\left(T_p>T_r\right),
\]
and a scheme can lower \(T_r\) only to a quick-game floor \(T_r^{\min}\) set by release mechanics. If the median of \(T_p\) falls below \(T_r^{\min}\), the deep and intermediate concept tree is **unavailable**, not merely less efficient — this is a constraint, not a smooth trade. Record 6.7 supplies the extreme: *"teams missing 4 starting offensive linemen were 2-8"* [PAGE 23], with the two exceptions occurring in a Week 18 game against an equally depleted opponent. The veto: no amount of play-calling adjustment restores concepts whose prerequisite time does not exist. A linear "OL penalty in points" is therefore misspecified in the regime that matters; the response is nonlinear and regime-switching.

**Veto 5 — recovery kinetics make rest a physical input, while market efficiency makes it a non-edge.** Soft-tissue recovery and injury hazard are decreasing functions of days between exposures, so a two-day deficit at a historic extreme is a real physiological input; Record 6.6's *"largest rest disadvantage … in NFL history"* [PAGE 23] is a physical claim. The veto runs in the other direction for inference: Record 6.9 reports the rested side's historical market record at approximately chance [PAGE 23], and Record 7.7 shows the market applies the short-week discount *before* any news arrives [PAGE 25]. The adjudication is therefore asymmetric — **rest belongs in the strength prior and must not be expected to produce a pricing edge.** Conflating "this changes expected performance" with "this is mispriced" is the error the two records jointly veto.

**Adjudication rule.** Rank the layers by hardness: mechanism-level physics (drag, oxygen transport, ideal gas) > biomechanical constraint (protection floor) > physiological kinetics (recovery, acclimatization) > statistical regularity (script, personnel splits) > market information (repricing). A lower layer may not contradict a higher one; where they conflict, the higher layer wins and the statistical claim is demoted to a regime-specific regularity.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Each scenario is an intervention with an observable and a pre-registered falsifier. A scenario that fails its falsifier demotes the corresponding corpus claim.

**Scenario 1 — Branch-priced reconstruction of the delay-of-game punt.** *Intervention:* take the state in Record 4.1 — tie game, ~2:00 remaining, 4th-and-short at midfield, following a delay-of-game penalty [PAGE 14]. Recompute \(V(\text{go})\), \(V(\text{punt})\), \(V(\text{FG})\) on an independently estimated \(WP\) surface with \(p_{\text{conv}}\in[0.55,0.60]\), \(WP_{\text{succ}}\approx0.71\), \(WP_{\text{fail}}\approx0.29\), and compare \(\mathcal{L}(\text{punt})\) to the reported 0.086. *Prediction:* \(\mathcal{L}(\text{punt})\in[0.05,0.12]\) WP with the correct sign, and the delay-of-game penalty contributes a strictly positive increment to \(\mathcal{L}\) beyond the punt itself. *Falsifiers:* (i) \(\mathcal{L}<0.03\) or sign reversal — the "8.6-point mistake" is model-specific and must be reported as a range, not a fact; (ii) the penalty increment is negative or zero — the corpus's claim that the penalty is *"a decision cost on top of the punt"* [PAGE 14] fails.

**Scenario 2 — Cross-fitting the propensity residual (PROE identifiability).** *Intervention:* fit \(p^{\text{exp}}(s)\) with k-fold cross-fitting blocked by game, then compute team-level \(\overline{\text{PROE}}\) both in-sample and out-of-sample for a full season. *Prediction:* (i) in-sample \(\overline{\text{PROE}}\approx0\) for **every** team, with standard deviation below \(10^{-3}\), confirming the degeneracy derived in §5; (ii) out-of-sample \(\overline{\text{PROE}}\) is non