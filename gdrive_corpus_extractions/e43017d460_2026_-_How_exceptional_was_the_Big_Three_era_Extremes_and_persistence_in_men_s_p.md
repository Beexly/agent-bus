---
source: "2026 - How exceptional was the Big Three era Extremes and persistence in men's professional tennis - Leonelli.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 36
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5171
---

<NATIVE_REASONING>
The user wants a deep reasoning response based on the provided research paper about the Big Three era in men's professional tennis. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations like Force/Fatigue. Need formal LaTeX equations with units, assumptions, breakdown regimes.

The paper is about men's tennis Big Three era. Key elements:
- Bayesian dynamic Bradley-Terry state space model
- Relative strength r_i,t = θ_i,t - θ̄_(10:100)_t
- Exceedance count N_t(u) = sum_i 1{r_i,t > u}
- Threshold calibrated to fixed mean count N̄
- Summaries: P(N_t ≥ c), E[N_t], lag persistence π_k = P(N_{t+k} ≥ c | N_t ≥ c), block persistence β_w = P(N_s ≥ c for all s ∈ [t, t+w))
- Avoid longest unbroken run because non-robust
- Eras: 1978-1989, 1990-2001, 2002-2013, 2014-2025
- Key results: Djokovic peak separates (prob 0.85-0.98 over rivals), Federer/Nadal indistinguishable from Borg/McEnroe/Lendl on peak. What is exceptional is duration: three-way dominance survives a year with prob 0.44 in 2002-2013 vs 0.12 in early 1980s vs 0.06 in 2014-2025.
- 1990-2001 upper tail compressed.
- Table 6 persistence profiles.
- Table 5 concurrent dominance.
- Surface analysis: ρ=0.90 cross-surface correlation, Ledford-Tawn coefficients.

I need to write all sections with appropriate depth. Total >=1000 words, THINK_TRACE >=400 words.

Let me draft carefully.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss the indirect comparison problem across eras, the chain of opponents, dynamic paired comparisons, why peak strength alone doesn't capture the Big Three claim, why duration matters, why run-based summaries are non-robust (Hampel 1971), the calibration to marginal rate vs fixed level, the two thresholds N̄=1 and N̄=2, the gray zones: threshold calibration sensitivity (Appendix D), posterior sampling vs point estimates, surface correlation stationarity limitation (Section 6.3), medical career duration confounding (sojourn), generated regressors bias (Pagan 1984), prequential likelihood hyperparameter estimation, Laplace approximation artifacts (downward displacement ~40 points but cancels under centring), Table E.14 showing ratings-as-observed adequate here, etc. Need >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Include equations (1)-(7) from paper, plus definitions of π_k, β_w, χ(q), η(q). Units: calibrated rating points (400/log 10 scale), weeks/periods, probabilities dimensionless. Page citations [PAGE 6], [PAGE 7], etc. Breakdown regimes: longest run non-robustness, posterior sampling fragmentation vs smooth recursive rating continuity, τ posterior std under 2% of value, overconfidence in highest band (0.934 predicted vs 0.910 observed), cross-surface ρ=0.90 interior maximum, etc.

RETROCAUSAL_GENEALOGY: Historical lineage: Bradley-Terry 1952, Elo 1978, Glickman 1999, Durbin & Koopman 2012, Coles 2001 EVT, Ledford & Tawn 1996, Ferro & Segers 2003 extremal index, Hampel 1971 robustness, Pagan 1984 generated regressors, Baker & McHale 2014/2017, Breznik et al. 2025, Radicchi 2011, Berry et al. 1999. Multi-week traps: unbroken stretches vs fixed windows, declustering rules, threshold dependence, 1990-2001 compression making later era look unprecedented by contrast.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but needs to connect to the paper's themes. Crisis habit regression: when dominance is interrupted (single week dip), run-based summaries collapse (halved decade), while fixed-window averages absorb it. Counter-trap: treating ratings as observed inflates run summaries (1.75x longest run, 3.56x mean run length), posterior median halves error but doesn't repair. Clock: fixed windows of 12 years, lag persistence at k=52 weeks, block persistence β_w. The "clock" is the weekly rating period and the one-year survival probability.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss surfaces: hard, clay, grass; carpet withdrawn 2017. Cross-surface innovation correlation ρ=0.90, about a tenth of variance surface-specific. Weather/pace convergence limitation (Section 6.3). Biomechanical: match format best-of-three vs best-of-five, discrimination parameter a_f, a_3=1, a_5=1.15. Physical veto: longer match affords stronger player more opportunity to prevail. Cross-surface tail dependence χ(q), η(q), weakest link clay-grass χ=0.40 at q=0.95. Veto adjudication: if surface correlation were not predictive, approximation couldn't manufacture it (Section 5.9). The model's predictive accuracy 0.675, Brier 0.207.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some counterfactual framework. I need to invent 3 verifiable counterfactual veto scenarios related to the paper's methodology, with predictions. Must be verifiable (not betting lines). Examples:
1. Veto: If the reference band in eq (1) is narrowed to 5-100 instead of 10-100, peak strengths shift uniformly by 7-11 points; prediction: ordering unchanged, P(Federer>Borg) moves 0.28->0.26. Verifiable via Appendix D Table D.13.
2. Veto: If a5=1 (remove format effect), all relative strengths rise ~3.2% uniformly; prediction: era differentials unchanged (~0.1 percentage point spread vs several percent gaps). Verifiable via Appendix D.
3. Veto: If longest run summary used instead of fixed-window β_w, recursive rating treated as observed inflates longest run by factor 1.75; prediction: posterior sampling only reduces to 1.32, so conclusion (2002-2013 exceptional duration) would be exaggerated or fragile if run-based. Verifiable via Table 1 and Section 3.4 / Table E.14.

Need to ensure no betting lines (spreads, totals, moneylines, odds). The paper mentions "odds" in the context of 400 points = ten-to-one odds between two players. I must NOT mention odds or betting lines. I can mention win probability but not odds. Wait, invariant says ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. So I cannot use the word "odds" even if the paper uses it. I should paraphrase: "ten-to-one odds" -> "ten-to-one win-loss ratio" or just avoid. Actually the paper says "400 points correspond to ten-to-one odds between two players". I must not repeat "odds". I can say "a ten-to-one ratio of expected victories to defeats" or simply avoid. Better to avoid the term entirely.

Also no fake ratios like Force/Fatigue. All equations must be formal from the paper or standard.

Word count: Need >=1000 words total across sections. THINK_TRACE >=400 words.

Let me structure the response.

I'll write each XML section with substantial content.

Need to cite page markers like [PAGE 6], [PAGE 7], etc. Verbatim quotes where appropriate.

Let's draft.

THINK_TRACE (>=400 words):
- Start with the epistemological problem: players never met across eras, comparisons mediated by opponents.
- Dynamic Bradley-Terry state space constructs latent strength chains.
- The Big Three claim bundles three questions: magnitude of extreme, coincidence of extremes, duration.
- EVT peaks-over-threshold, threshold calibrated to fixed marginal rate N̄ so comparisons are at common rarity, not fixed rating points.
- Why duration summary matters: unbroken runs are non-robust; single week dip halves run; fixed-window averages absorb interruption.
- Simulation evidence Table 1: longest run CV 0.47 across replicates of same process; recursive rating as observed inflates longest run 1.75x, mean run 3.56x; posterior median improves to 1.32 but doesn't repair.
- Lag persistence π_k and block persistence β_w are robust (π_1 CV 0.06, rate functional CV 0.01).
- Gray zones: threshold calibration sensitivity (App D: reference band 5-100 vs 15-100 shifts peaks by 7-11 points but orderings stable; ratio of 2002-2013 vs 1980s lag persistence 3.6-3.7 stable). Posterior sampling artifacts: approximate posterior means displaced downward ~40 points raw scale but cancel under centring eq (1). Surface correlation stationarity veto: ρ held constant though surfaces converged in pace (Bayram & Barla 2026). Career duration confounds sojourn (Borg retired at 26). Generated regressors bias (Pagan 1984) compounds with non-robust summaries.
- Multi-hop: match outcome -> logistic link (5) -> state equation (4) -> posterior (6) -> relative strength (1) -> exceedance count (2) -> persistence profiles -> era comparison.

SOURCE_OPERATORS_AND_EQUATIONS:
- Eq (1): r_{i,t} = θ_{i,t} - θ̄^{(10:100)}_t. Units: calibrated rating points (scale 400/log 10). Assumption: reference band excludes top 9 and long tail.
- Eq (2): N_t(u) = Σ_i 1{r_{i,t} > u}. Threshold u calibrated so marginal mean count equals N̄ over window T: u is the (N̄ T)-th largest value.
- Eq (4): θ_{i,t} = θ_{i,t-1} + w_{i,t}, w_{i,t} ~ NS(0, τ² R(ρ)). Units: latent strength per week. τ weekly innovation std dev (posterior std <2% of value, Appendix A).
- Eq (5): P(i defeats j | ...) = [1 + exp{-a_f (θ^{(s)}_{i,t} - θ^{(s)}_{j,t})}]^{-1}. a_3=1 normalized, a_5=1.15 estimated. f sets (3 or 5).
- Eq (6): posterior p(Θ|y,ψ) ∝ ... match outcomes conditionally independent Bernoulli.
- Eq (7): prequential likelihood ℓ(ψ) = Σ_m log p(y_m | y_{1:m-1}, ψ).
- π_k = P(N_{t+k} ≥ c | N_t ≥ c). β_w = P(N_s ≥ c ∀ s ∈ [t, t+w)).
- Ledford-Tawn: χ(q) = P(U^{(s)} > q, U^{(s')} > q)/(1-q), η(q) = log(1-q)/log P(min(U^{(s)},U^{(s')}) > q).
- Page citations: [PAGE 6] for eq 1, [PAGE 7] for eq 2, [PAGE 10] for eq 4/5, [PAGE 11] for eq 6/7, [PAGE 8] for π/β, [PAGE 22] for eq 3.
- Breakdown regimes: longest run non-robust (Hampel 1971); posterior sampling fragmentation vs recursive rating continuity; τ curvature; highest probability band overconfidence (0.934 predicted vs 0.910 observed); ρ=0.90 interior max, ~1/10 variance surface-specific; approximate posterior downward displacement ~40 points raw scale.

RETROCAUSAL_GENEALOGY:
- Bradley & Terry (1952) paired comparisons.
- Elo (1978) recursive heuristic.
- Glickman (1999) Gaussian filtering / Glicko.
- Durbin & Koopman (2012) state space.
- Coles (2001) EVT.
- Ledford & Tawn (1996) tail dependence.
- Hampel (1971) robustness; Ferro & Segers (2003) extremal index / cluster size.
- Pagan (1984) generated regressors.
- Baker & McHale (2014, 2017) dynamic paired comparisons for era comparison.
- Breznik et al. (2025) cointegration eras.
- Radicchi (2011) network prestige.
- Berry et al. (1999) hierarchical era bridging.
- Multi-week traps: unbroken stretches vs fixed windows; declustering rules; threshold choice; 1990-2001 compression as contrast era; the "clock" of weekly periods.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: when a dominant player dips below threshold for one week (injury, early loss, noise), run-based summaries regress/collapse; fixed-window averages show regression to mean slowly.
- Counter-trap: treating posterior ratings as observed is a counter-trap that manufactures continuity and inflates run lengths (Table 1: 1.75x, 3.56x). Posterior median is partial mitigation but not repair (1.32x).
- Clock: the weekly rating period is the clock; lag persistence π_52 (one year) is the heartbeat: 0.44 for 2002-2013 vs 0.12 for 1978-1989 vs 0.06 for 2014-2025 [PAGE 19, Table 6]. Block persistence β_w at w=52 etc.
- The paper's theory of mind: the field infers strength from noisy matches; the model must anticipate that the observer (analyst) will over-interpret runs; fixed windows are the counter-measure to the observer's crisis habit of seeing unbroken streaks.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: match format f=3 vs f=5 sets; longer match more discriminating; a_f parameter. Physical veto: if a_5 not estimated, strengths compressed in eras with more five-setters; but effect is global rescaling (~3.2% uniform), differential <0.1 percentage point [Appendix D].
- Biomechanical/surface layer: hard, clay, grass; carpet withdrawn 2017 [PAGE 13]. Cross-surface correlation ρ=0.90 estimated [PAGE 22, Appendix A]. About 1/10 of weekly innovation variance surface-specific. Weakest tail link clay-grass χ=0.40 at q=0.95 [PAGE 22, Table 9].
- Weather veto: surfaces converged in pace over record; ρ held constant is a limitation [PAGE 25, Section 6.3]; if ρ allowed to drift, results of Section 5.9 should be read with caution.
- Predictive check: model accuracy 0.675, Brier 0.207 [PAGE 14]; overconfidence in top band corrected by Platt scaling (slope 0.851) [PAGE 14]; recalibration is global monotone rescaling, leaves rankings and rate-calibrated exceedance sets unchanged [PAGE 14].
- Veto proof: because ρ improves out-of-sample prediction (prequential log-likelihood improvement 1,365 units over ρ=0), the surface borrowing is not an artifact of the approximation [PAGE 22].

RLVR_COUNTERFACTUAL_VETOES:
Need 3 verifiable RLVR veto scenarios + predictions. RLVR likely means we can verify via the paper's own sensitivity tables.

Scenario 1: Reference band veto. If reference band in eq (1) narrowed to ranks 5-100 (excluding 4) vs widened to 15-100 (excluding 14), peak relative strengths shift by +7 to +11 points per step but all orderings and era comparisons remain invariant. Prediction: P(Federer > Borg) moves from 0.28 to 0.26; P(Djokovic > Federer) from 0.92 to 0.94; one-year lag persistence ratio 2002-2013 vs 1978-1989 stays between 3.6 and 3.7. Verifiable: Appendix D Table D.13 [PAGES 34-35].

Scenario 2: Format-effect veto. If a_5 = 1 (removing best-of-five discrimination), all relative strengths rise by roughly 3.2% uniformly across all blocks; the differential between eras is around 0.1 percentage point, far smaller than the multi-percent gaps between compared quantities. Prediction: no reordering of era rankings; 2002-2013 still exceeds 1978-1989 at demanding threshold. Verifiable: Appendix D second choice [PAGE 35].

Scenario 3: Run-based summary veto. If one uses longest unbroken run instead of fixed-window β_w and treats recursive ratings as observed, the longest run is inflated by factor 1.75 (mean run 3.56x); posterior sampling only reduces to 1.32x. Prediction: a run-based analysis would falsely amplify 2002-2013 duration or create spurious long runs in 1978-1989; fixed-window π_52 remains the robust estimand (CV 0.06 vs run CV 0.47). Verifiable: Table 1 [PAGE 9], Section 3.4 [PAGES 8-9], Table E.14 [PAGE 36].

Each scenario needs a veto condition and a prediction.

Make sure total word count >=1000. Let's write.

I need to avoid the word "odds". When describing 400 points, say "a ten-to-one ratio of expected victories to defeats" or just "400 points". Actually I can say "400 points correspond to a ten-to-one expected victory ratio" — is that mentioning odds? The invariant says never mention odds. I'll avoid the word entirely.

Also avoid spreads, totals, moneylines.

Let's compose carefully.

Check for any accidental "odds". I will scan.

I will include verbatim quotes where useful but not overdo.

Let's write the response now.
</NATIVE_REASONING>

<THINK_TRACE>
The central inferential problem is that players active in 1980 never meet players active in 2015, so every cross-era claim is a chain of indirect comparisons mediated by the opponents each did face [PAGE 2]. The paper constructs that chain with a Bayesian dynamic Bradley-Terry state space model [PAGE 2], converting match outcomes into latent weekly strength trajectories. The Big Three claim is not a claim about any single player; it bundles three distinct questions: how far the best players stood above their own field, how many stood there at once, and how long that arrangement lasted [PAGE 2]. The first two are magnitude and concurrence problems naturally handled by peaks-over-threshold extreme value theory; the third is a duration problem whose answer depends sharply on the summary statistic chosen [PAGE 2].

A critical multi-hop derivation is the calibration of the threshold. Because latent strength is identified only up to scale, a threshold fixed in absolute rating points is not comparable across model specifications or eras [PAGE 7]. The paper therefore calibrates u so that the marginal exceedance rate is fixed by construction: given a target mean count N̄ over T periods, u equals the (N̄T)-th largest value of r_{i,t}, performed separately within each posterior draw [PAGE 7]. Every comparison is made at a common marginal rate of exceedance, removing scale as a confounder and isolating the distributional arrangement of exceedances in time [PAGE 8]. Two targets are used: a permissive N̄ = 2 and a demanding N̄ = 1 [PAGE 7].

The duration question is where conventional rhetoric collapses under statistical scrutiny. Counting weeks in which three players are simultaneously dominant moves by only one week in a thousand for a single interruption; measuring the longest unbroken stretch halves a decade of dominance into two five-year spells if one player dips below the threshold for a single week [PAGE 2]. The paper explicitly avoids longest-run summaries because they are not qualitatively robust: a small perturbation of the underlying distribution can halve the value [PAGE 8, citing Hampel 1971]. Simulation evidence in Table 1 quantifies this: across 25 replicates of one known process, the longest run varies by 47% of its own size even when strengths are known exactly, while lag persistence π_1 varies by only 6% and the rate functional not at all [PAGE 9]. Treating recursive ratings as observed inflates the longest run by a factor of 1.75 and mean run length by 3.56; posterior sampling improves the longest run only from 1.75 to 1.32, so the remedy is a change of summary, not a better estimator [PAGE 9].

Gray zones require audit. First, the reference band in equation (1) excludes ranks 10-100; sensitivity tests show that narrowing to 5-100 or widening to 15-100 shifts peak strengths uniformly by roughly 7-11 calibrated points, leaving all orderings and era comparisons undisturbed [PAGES 34-35, Table D.13]. The substantive ratio of one-year lag persistence between 2002-2013 and 1978-1989 remains between 3.6 and 3.7 under every band [PAGE 35]. Second, the approximate posterior has a known artifact: on the raw latent scale, posterior means are displaced downward by roughly 40 points due to mean-field treatment of opponents, but this cancels under the centring in equation (1) because it is common across players [PAGES 33-34, Appendix C]. Third, the cross-surface correlation ρ is held constant despite evidence that surfaces have converged in pace; if ρ were allowed to drift it would probably rise, so Section 5.9 results carry that caveat [PAGE 25, Section 6.3]. Fourth, sojourn above the threshold conflates playing strength with career duration, which depends on medical and other factors outside the model; Borg’s short career illustrates this estimand limitation [PAGE 25]. Finally, estimation error compounds with non-robust summaries in the direction of generated-regressors bias [PAGE 5, citing Pagan 1984]; the paper propagates full posterior uncertainty rather than treating ratings as observed [PAGE 2], and Table E.14 shows that on the tennis data the simpler treatment falls inside posterior intervals, but this adequacy was established only after propagation [PAGE 36].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Relative strength (Eq. 1) [PAGE 6]:
r_{i,t} = \theta_{i,t} - \bar{\theta}^{(10:100)}_{t},
where \bar{\theta}^{(10:100)}_{t} is the mean strength of players ranked tenth to hundredth among those active in period t. Units: calibrated rating points on the scale obtained by multiplying the latent difference by 400/\log 10, so that 400 points separate two players by a ten-to-one expected victory ratio [PAGE 6]. Assumption: excluding the top nine prevents contamination by the players under study; excluding the long tail prevents tracking population size changes [PAGE 6].

Exceedance count (Eq. 2) [PAGE 7]:
N_t(u) = \sum_i \mathbf{1}\{r_{i,t} > u\}.
Threshold calibration [PAGE 7]: u is set to the (\bar{N}T)-th largest value of r_{i,t} over the analysis window so that the marginal mean count equals \bar{N}; calibration is repeated within each posterior draw.

Dynamic Bradley-Terry state equation (Eq. 4) [PAGE 10]:
\boldsymbol{\theta}_{i,t} = \boldsymbol{\theta}_{i,t-1} + \boldsymbol{w}_{i,t}, \qquad \boldsymbol{w}_{i,t} \sim \mathcal{NS}(\mathbf{0}, \tau^2 R(\rho)),
independently across players, with \tau the weekly innovation standard deviation. Appendix A reports \hat{\tau}=0.0473 with posterior standard deviation under 2% of its value [PAGE 31]. R(\rho) is an exchangeable correlation matrix; \rho=1 collapses to a single common strength, \rho=0 separates surfaces [PAGE 10].

Match likelihood (Eq. 5) [PAGE 10]:
P(i \text{ defeats } j \mid \boldsymbol{\theta}_{i,t}, \boldsymbol{\theta}_{j,t}) = \left[1 + \exp\{-a_f(\theta^{(s)}_{i,t} - \theta^{(s)}_{j,t})\}\right]^{-1},
with f=3 for best-of-three and f=5 for best-of-five; a_3=1 normalized and \hat{a}_5=1.15 estimated [PAGE 31]. A longer match affords the stronger player more opportunity to prevail, so the same strength difference yields a larger win probability [PAGE 10].

Posterior (Eq. 6) [PAGE 11]:
p(\Theta \mid y, \psi) \propto \prod_i \left[ p(\boldsymbol{\theta}_{i,t_{0i}}) \prod_{t>t_{0i}} p(\boldsymbol{\theta}_{i,t} \mid \boldsymbol{\theta}_{i,t-1}) \right] \prod_m p(y_m \mid \boldsymbol{\theta}_{i_m,t_m}, \boldsymbol{\theta}_{j_m,t_m}),
where match outcomes are conditionally independent Bernoulli. No conjugacy is available because the state process is Gaussian but the likelihood is logistic [PAGE 11].

Hyperparameter estimation (Eq. 7) [PAGE 12]:
\ell(\psi) = \sum_m \log p(y_m \mid y_{1:m-1}, \psi),
the prequential likelihood, maximized by grid search with one forward filter pass per point [PAGE 12].

Persistence functionals [PAGE 8]:
\pi_k = P(N_{t+k} \ge c \mid N_t \ge c), \qquad \beta_w = P(N_s \ge c \text{ for all } s \in [t, t+w)).
Reported at the stricter threshold \bar{N}=1 in Table 6 [PAGE 19]: \pi_{52} = 0.44 for 2002-2013 versus 0.12 for 1978-1989 and 0.06 for 2014-2025; \beta_{26}=0.02 for 2002-2013 versus zero elsewhere [PAGE 19].

Cross-surface dependence (Eq. 3) [PAGE 12]:
\chi(q) = \frac{P(U^{(s)} > q, U^{(s')} > q)}{1-q}, \qquad \eta(q) = \frac{\log(1-q)}{\log P(\min(U^{(s)}, U^{(s')}) > q)}.
Estimated cross-surface innovation correlation \hat{\rho}=0.90 at an interior maximum, implying roughly one-tenth of weekly innovation variance is surface-specific [PAGE 22]; weakest tail link clay-grass: \chi=0.40 at q=0.95 [PAGE 22, Table 9].

Breakdown regimes: (i) longest-run summaries are non-robust and vary by half their size across replicates of one process even with known strengths [PAGE 9]; (ii) treating ratings as observed manufactures continuity and inflates runs (longest run \times1.75, mean run \times3.56), while posterior sampling reduces inflation only to \times1.32 [PAGE 9]; (iii) the model is overconfident in the highest probability band (mean predicted 0.934 vs observed frequency 0.910), corrected by a global monotone logit recalibration with slope 0.851 that leaves all rankings and rate-calibrated exceedance sets unchanged [PAGE 14]; (iv) block persistence probabilities are overstated at every window under the approximate posterior, most severely at long windows (0.132 vs truth 0.069 for w=13) [PAGE 9].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage begins with Bradley and Terry (1952), who defined paired-comparison win probability as a logistic function of latent strength differences [PAGE 4]. Elo (1978) introduced recursive, heuristic rating updates proportional to prediction error, a tradition later assessed in tennis by Kovalchik (2016) [PAGE 4]. Glickman (1999) placed strength within a nonlinear state space framework, approximating intractable filtering recursions by Gaussian updates and producing ratings with uncertainty measures [PAGE 4]; the paper extends this via a Laplace/mean-field deterministic approximation that scales to 197,926 matches [PAGES 11-12]. Durbin and Koopman (2012) supply the state space foundations for the Gaussian random-walk prior on strengths [PAGE 2].

On the extreme-value side, Coles (2001) provides the peaks-over-threshold apparatus [PAGE 5], though prior sports applications assumed directly measured continuous performances (Einmahl and Magnus 2008 on athletic records; Spearing et al. 2021 on swimming) [PAGE 5]. The paper notes that dependence structure is typically neglected in that literature—either assuming independence of repeated performances or reducing each athlete to a single best result [PAGE 5]; here dependence is absorbed into the exceedance count process N_t(u), and the estimand is sustained joint occupation of the tail rather than the concurrence of individual maxima [PAGES 5, 25]. Dombry et al. (2018) formalized extremal concurrence in spatial settings, but the paper's object differs: players may hold the tail together for years while peaking at different moments [PAGE 5].

Robustness and estimation literatures anchor the summary choice. Hampel (1971) defines qualitative robustness; the longest run of exceedances is not robust because moving one period across threshold can halve it [PAGE 8]. Ferro and Segers (2003) and Northrop (2015) document the delicacy of cluster-based summaries and the extremal index [PAGE 8]. Pagan (1984) identifies the generated-regressors problem, which compounds here because strengths are inferred, not measured [PAGE 5]. Baker and McHale (2014, 2017) address cross-era comparison in tennis with dynamic paired comparisons but rely on fitted deterministic trajectories that carry no uncertainty, which the paper rules out [PAGE 4]. Breznik et al. (2025) identify eras through cointegration of ranking trajectories, the closest substantive antecedent, though their record does not reach the early 1980s [PAGES 4, 24]. Radicchi (2011) and Berry et al. (1999) offer network-prestige and hierarchical era-bridging alternatives [PAGES 4, 24].

Multi-week traps structure the historical argument. The unbroken-run trap treats a single week's dip—injury, early loss, or rating noise—as terminating a decade-long configuration, which is unstable when strengths are estimated [PAGES 2-3]. The fixed-window average absorbs isolated interruptions because a single week contributes only in proportion to inverse record length [PAGE 3]. The calibration trap is avoided by fixing the marginal exceedance rate rather than a fixed rating level, so eras are compared at equal rarity [PAGE 7]. The contrast trap operates through the 1990-2001 block: the upper tail was compressed, not merely unoccupied, so part of the perceived exceptionality of the later era derives from comparison with the preceding twelve-year drought [PAGES 3, 18-19]. The strongest-decade-against-strongest-disjoint-decade comparison in Section 5.8 removes arbitrary block boundaries entirely, finding the strongest decade in the late 2000s-2010s and the strongest disjoint decade at the opening of the window, 1978-1987 [PAGES 20-21].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The paper's theory of mind concerns how an analyst observes latent strength through noisy match outcomes and then reasons about persistence. The "crisis habit regression" is the tendency to read an unbroken streak as the object of interest: if Federer's strength dips below threshold for one week in 2012 due to injury or noise, a run-based summary treats the configuration as terminated, halving a decade into two five-year spells [PAGE 2]. Fixed-window averages are the counter-regression: they absorb isolated interruptions rather than reorganizing the entire answer around them [PAGE 3].

The "counter-trap" is treating posterior ratings as if they were observed data. This is itself a recursive habit: point estimates manufacture continuity and lengthen clusters, while independently perturbed posterior samples fragment them [PAGE 3]. Table 1 demonstrates the asymmetry: recursive ratings as observed inflate the longest run by 75% and mean run length by 256%, whereas lag persistence \pi_1 and the rate functional are recovered within a few percent [PAGE 9]. Posterior sampling mitigates but does not repair run-based summaries, improving the longest run only from 1.75 to 1.32 times truth [PAGE 9]. The paper's counter-trap to the counter-trap is therefore to abandon run lengths entirely and report the full persistence profiles \{\pi_k\} and \{\beta_w\}, which are time averages of bounded functions over fixed-width windows and thus largely unaffected by isolated interruptions [PAGE 8].

The "clock" is the weekly rating period. Lag persistence is evaluated at k=1, 4, 13, 26, and 52 weeks; block persistence at w=4, 13, 26, 52, and 104 weeks [PAGE 19, Table 6]. The one-year heartbeat is \pi_{52}: the probability that three-way dominance survives a full year is 0.44 for 2002-2013, 0.12 for the early 1980s, and 0.06 for 2014-2025 [PAGES 3, 19]. At a one-week lag all three populated blocks agree to within six points (0.87-0.93), but at one year they diverge sharply [PAGE 19]. This separation is the quantitative expression of the recursive theory: the field's belief about a player's strength diffuses slowly (random-walk innovations with \hat{\tau}=0.0473), so short-term perturbations should not reset the duration clock; only sustained joint exceedance should count [PAGE 31].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer (match format): men's professional tennis uses best-of-five at Grand Slams and best-of-three elsewhere [PAGE 10]. The discrimination parameter a_f scales the strength difference by format length, with a_3=1 normalized and \hat{a}_5=1.15 estimated [PAGE 31]. A longer match affords the stronger player more opportunity to prevail, so the same latent gap translates into a larger win probability over five sets [PAGE 10]. Veto: removing the format effect (a_5=1) raises every relative strength by roughly 3.2% uniformly across all blocks, with inter-block spread of about one-tenth of a percentage point—far below the multi-percent gaps between compared quantities—so the format effect acts as a global rescaling rather than an era advantage [PAGE 35].

Biomechanical/surface layer: matches are partitioned into hard (including indoor hard), clay, and grass; carpet is set aside, having accounted for 17% of matches before 1990 and last used in 2017 [PAGE 13]. The surface-specific state vector has cross-surface innovation correlation \hat{\rho}=0.90, sharply identified by a prequential log-likelihood improvement of 1,365 units over the independent specification \rho=0 [PAGE 22]. Approximately one-tenth of weekly innovation variance is surface-specific; neither a single common strength nor three separate analyses would be adequate [PAGE 22]. Tail dependence coefficients show substantial but incomplete upper-tail dependence: hard-clay \chi=0.60, hard-grass \chi=0.65, clay-grass \chi=0.50 at q=0.90, with clay-grass the weakest link at \chi=0.40 when q=0.95 [PAGE 22, Table 9]. Four players exceed posterior probability 0.5 of being extreme on all three surfaces at the demanding level: Djokovic and Federer at unity, Nadal at 0.97, Murray at 0.91 [PAGE 22]. Separate per-surface fits would understate this: Nadal's probability at q=0.95 drops from 0.97 to 0.32 without cross-surface borrowing [PAGE 23].

Weather/pace veto: the cross-surface correlation is held constant despite evidence that surfaces have converged in pace over the record [PAGE 25, Section 6.3]; if \rho were allowed to drift it would probably rise, so Section 5.9 results must be read with that caveat. Predictive validation: the fitted model attains accuracy 0.675 and Brier score 0.207 on matches with prior history [PAGE 14], in line with benchmarks [PAGE 14]. The model is overconfident in the highest band (0.934 predicted vs 0.910 observed), removed by a Platt logit recalibration with intercept zero and slope 0.851; this is a global monotone rescaling that leaves every ranking, pairwise comparison, and rate-calibrated exceedance set unchanged [PAGE 14]. Veto proof: because \rho improves out-of-sample prediction, the surface information borrowing cannot be manufactured by the approximation of Section 4.4 [PAGE 22].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Reference-band perturbation. Counterfactual: re-estimate equation (1) with the reference band narrowed to ranks 5-100 (excluding four players) or widened to ranks 15-100 (excluding fourteen), rather than the baseline 10-100. Veto condition: if peak strength orderings or era comparisons changed under these bands, the conclusion that Federer and Nadal are indistinguishable from Borg, McEnroe, and Lendl on peak would be invalid. Prediction: peak strengths shift uniformly by approximately 7-11 calibrated points per step; P(Djokovic > Federer) moves from 0.92 to 0.94; P(Federer > Borg) moves from 0.28 to 0.26; the ratio of one-year lag persistence between 2002-2013 and 1978-1989 remains between 3.6 and 3.7; no ordering or era comparison is disturbed. Verification target: Appendix D, Table D.13 [PAGES 34-35].

Veto Scenario 2 — Match-format neutralization. Counterfactual: refit the model imposing a_5=1, eliminating the additional discrimination of best-of-five matches, thereby testing whether the era mix of three-set versus five-set matches compresses later-era strengths. Veto condition: if the differential between eras exceeds roughly one-tenth of a percentage point, format effects would confound cross-era comparison. Prediction: all relative strengths rise by approximately 3.2% uniformly across periods; averaged over the top five positions, the increase is about 3.2% in every block with inter-block spread near 0.1 percentage point; the likelihood prefers a_5=1.15 only slightly (predictive accuracy falls from 0.6745 to 0.6742 when removed); no reordering of era rankings occurs. Verification target: Appendix D, second sensitivity test [PAGE 35].

Veto Scenario 3 — Run-based summary substitution. Counterfactual: replace fixed-window persistence (\pi_k, \beta_w) with longest unbroken run of N_t \ge 3, treating recursive ratings as observed rather than propagating posterior uncertainty. Veto condition: if the longest-run ranking of eras agrees with the fixed-window ranking, the paper's avoidance of run lengths would be unnecessary. Prediction: treating ratings as observed inflates the longest run by a factor of 1.75 and mean run length by 3.56 relative to truth; posterior sampling reduces longest-run inflation only to 1.32; longest run varies by 47% of its own size across replicates of one process even with known strengths, versus 6% for \pi_1; therefore a run-based analysis would falsely amplify or fabricate duration differences, while \pi_{52}=0.44 vs 0.12 vs 0.06 remains the robust estimand. Verification target: Table 1 [PAGE 9], Section 3.4 [PAGES 8-9], Table E.14 [PAGE 36].
</RLVR_COUNTERFACTUAL_VETOES>