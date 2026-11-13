---
source: "2026 - The life and death of football team runs survival of collective modes shapes L vy-like transport - S nchez et al.pdf"
folder: "/GSE-Research/sports-research-papers/library/preprints/arXiv/2026"
pages: 29
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5392
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about football team runs, Lévy-like transport, and survival of collective modes. I need to produce a response with specific XML sections, each with minimum word counts and strict requirements.

 Let me break down the requirements:

 1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
 2. ZERO TOY EQUATIONS - no fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes.
 3. >= 1,000-WORD DEPTH across exact XML sections:
    - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
    - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
    - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
    - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
    - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
    - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

 Wait, looking at the page markers: the document goes from Page 1 to Page 29. The citations should be [PAGE N] where N corresponds to the page number in the document.

 Let me plan each section:

 **THINK_TRACE** (>=400 words): Deep multi-hop derivation & gray-zone audit.
 - Analyze the chain: displacement decomposition (Eq 1-2) -> centroid runs -> termination hazard (Eq 4-6) -> state switching (Eq 7-13) -> survivor composition.
 - Gray zones: termination highest near onset but data sparse at late ages (>35s); Brier score barely changes (0.148 to 0.147); collinearity r=0.92 between speed measures; odds ratio confidence intervals; active player reconstruction without substitution logs; right-censoring; "limited predictive information" despite statistical significance.
 - Multi-hop: player displacement -> centroid translation -> run termination hazard -> state-dependent survival -> enriched high-order states among survivors -> Lévy-like broad distributions emerge from selection, not pre-selection.
 - Need to cite pages.

 **SOURCE_OPERATORS_AND_EQUATIONS**: Formal LaTeX, units, page citations, breakdown.
 - Eq (1): x_i(t) = X_c(t) + r_i(t) [PAGE 3]
 - Eq (2): MSD decomposition [PAGE 3]
 - Eq (3): polarisation p(t) [PAGE 5]
 - Eq (4): S(a) and lambda(a) [PAGE 7]
 - Eq (5): inverse-age baseline lambda_0(a) = mu/(a+a_0) [PAGE 7]
 - Eq (6): state-dependent hazard [PAGE 7]
 - Eq (7): transition probabilities [PAGE 10]
 - Eq (8): population propagation u_{j+1} = A_j^T u_j [PAGE 10]
 - Eq (9): S_j and c_{s,j} [PAGE 10]
 - Eq (10): exposure Pi_s(A) [PAGE 10-11]
 - Eq (11): McKendrick-von Foerster PDE [PAGE 11]
 - Eq (12): dS/da = -lambda(a)S(a) [PAGE 11]
 - Eq (13): dc/da redistribution + selection [PAGE 11]
 - Eq (14): centroid X_c(t) [PAGE 15]
 - Eq (15): generalised-cutoff p(T=t) [PAGE 16]
 - Table S3 transition matrices [PAGE 28]
 - Units: seconds (s), metres (m), m/s, dimensionless polarisation [0,1], log loss, Brier score.
 - Breakdown: parameter values gamma=1.33, Tc=32.3s, beta=2.78; hazard min around middle; multipliers 1.31/1.00/0.67; odds ratios 0.80, 0.82, 0.94, 0.98; log loss 0.471->0.464; Brier 0.148->0.147; calibration slope 0.99 intercept -0.03.

 **RETROCAUSAL_GENEALOGY**: Historical/scientific lineage & multi-week traps.
 - Lineage: Lévy walks Viswanathan et al. 1999 [1], Zaburdaev et al. RMP 2015 [2], Edwards et al. Nature 2007 [3], Reynolds & Ouellette 2016 [4], Fedotov & Korabel 2017 [5], Fedotov et al. 2015 [6], Stage 2017 [7], McKendrick 1926 [15], von Foerster 1959 [16], Vaupel et al. 1979 [17].
 - Football lineage: Frencken et al. 2011 [8], Bartlett et al. 2012 [9], Moura et al. 2013 [10], Welch et al. 2021 [11], Marcelino et al. 2020 [12], Chacoma et al. 2021 [13], Shpurov et al. 2024 [14].
 - Multi-week traps: seasonal non-stationarity (2020 vs 2021 seasons), match-date grouping (47 dates), right-censoring at match boundaries, segmentation sensitivity (20/30/40 degree thresholds changes run counts 69,802 -> 49,579), active player reconstruction without substitution logs (gray zone), team-specific terciles not universal absolute levels.

 **RECURSIVE_THEORY_OF_MIND**: Crisis habit regression vs counter-trap vs clock.
 - Crisis habit regression: teams regress to low-order states under pressure? The paper shows high-order persistence decreases with age (0.82 -> 0.73), low-order persistence increases (0.64 -> 0.80). This is like a "crisis habit regression" where older runs degrade to low-order.
 - Counter-trap: high-order runs are selectively preserved (termination multiplier 0.67 vs 1.31), creating an enrichment trap where survivors appear more ordered than births.
 - Clock: age-dependent hazard lambda(a) has inverse-age component mu/(a+a0) plus late-age term starting at tc=20s rising over tau_q=5s. The "clock" is run age a, not match time.
 - Need to connect to recursive theory of mind: what does the opposing team infer about the run state? If high-order persists, opponents may adapt, forcing state switches. The model treats order as exogenous covariate, not strategic response.

 **CROSS_LAYER_VETO_ADJUDICATION**: Physical/biomechanical/weather veto proof.
 - Physical: pitch boundaries finite, match duration 90+ min, 1Hz sampling from 10Hz GPS, centroid requires >=7 active players, pitch geometry from OpenStreetMap.
 - Biomechanical: speed strata (slow/middle/fast), low-speed guards 0.25/0.50 m/s, turn threshold theta_c=30 deg, velocity coherence, backward difference velocity at 1 Hz.
 - Weather veto proof: not directly in paper, but venue-specific pitch geometry, Norwegian Toppserien (outdoor, weather exposure), no weather covariates in model. Veto: any weather effect would need to operate through centroid speed/order/termination; not measured.
 - Singularity/breakdown: gamma=1.33 >1 means integrable early decay; beta=2.78 >1 means sharper than exponential cutoff; a0=2.55s, mu=1.33 (age-only); at a=0 hazard is mu/a0 = 0.52 s^-1 finite; late term zero before tc=20s.

 **RLVR_COUNTERFACTUAL_VETOES**: 3 verifiable RLVR veto scenarios + predictions.
 - RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I need to create 3 counterfactual veto scenarios that are verifiable.
 - Scenario 1: If velocity coherence weight in active-player reconstruction is set to zero (sensitivity analyzed), does the age-order termination relationship collapse? Paper says reconstruction excluding velocity coherence OR 0.814 [0.802,0.826] vs primary 0.802 [0.792,0.814], so robust. Veto: if removing coherence changes odds ratio by >15%, veto the claim that order is independent of kinematic reconstruction.
 - Scenario 2: If turn threshold changes from 30 to 40 degrees, run count drops 69,802 -> 49,579, hazard minimum shifts. Veto: if hazard minimum age shifts by >5s or state multipliers cross (high-order becomes more vulnerable than low), veto universality.
 - Scenario 3: If later-age term (tc=20s, tau_q=5s) is removed, does the model fail to capture attenuation? Paper shows log loss 0.466 vs 0.464. Veto: if held-out log loss increases by >0.005 when removing late term on dates with many long runs, veto the necessity of late-age attenuation.
 - Need predictions for each.

 Word count: Need >=1000 words total across all sections. THINK_TRACE alone >=400 words.

 Let me draft carefully, ensuring no betting language. "Odds ratio" is a statistical term, not betting. I should be careful not to mention betting lines, spreads, etc. The paper uses "odds ratio" which is fine as a statistical concept.

 Let me write section by section.

 THINK_TRACE:
 Start with the causal chain. x_i = X_c + r_i. MSD decomposition shows at longer lags centroid translation dominates. Then runs segmented by theta_c=30 deg. Duration distribution broad: generalized cutoff gamma=1.33, Tc=32.3s, beta=2.78. Termination hazard highest at onset, declines with inverse-age baseline mu/(a+a0), then late rise after tc=20s. State multipliers: low 1.31, mid 1.00, high 0.67. Switching matrices show high-order persistence decays 0.82->0.73, low-order persistence grows 0.64->0.80. Survivor composition: high-order fraction rises from 0.1 to >0.5 at 5-7s then declines to 0.2 by 35s. This is selection, not pre-selection. Gray zones: Brier barely moves 0.148->0.147; collinearity r=0.92; contemporaneous vs lagged polarisation; active player reconstruction without sub logs; right censoring 132 runs; sparse >35s; team-specific terciles not absolute; two clubs two seasons only.

 Must cite pages for claims.

 SOURCE_OPERATORS_AND_EQUATIONS:
 List equations with pages. Formal LaTeX. Units. Breakdown of parameters.

 RETROCAUSAL_GENEALOGY:
 Cite references [1]-[17] with pages where mentioned. The references section is pages 18-20. The citations in text appear throughout.

 RECURSIVE_THEORY_OF_MIND:
 Discuss crisis habit regression (low-order persistence increases with age), counter-trap (high-order selective survival), clock (age-dependent hazard). Recursive theory of mind: opposing team's inference about run order state. If a run is high-order, opponents may press to break it; this creates a game-theoretic layer not modeled. The paper treats order as covariate, not strategic state.

 CROSS_LAYER_VETO_ADJUDICATION:
 Physical: pitch boundaries, match phases, 1Hz resampling, >=7 players. Biomechanical: speed floors, turn guards, theta_c. Weather: Norwegian outdoor league, no weather data, veto if weather covariate omitted biases speed/order. Breakdown regimes: a=0 hazard finite mu/a0; beta>1 tail attenuation; gamma>1 early decay integrable; sparse >35s.

 RLVR_COUNTERFACTUAL_VETOES:
 3 scenarios with verifiable conditions and predictions.

 Let me now write the actual text. I need to make sure total words >= 1000. I'll aim for roughly 200-250 words per section except THINK_TRACE which needs >=400.

 Let's count roughly as I write.

 THINK_TRACE (aim ~500 words):

 The core derivation proceeds as a four-layer causal chain. First, player displacement is decomposed exactly into centroid translation and formation-relative motion via x_i(t) = X_c(t) + r_i(t) [PAGE 3]. The MSD identity [PAGE 3] shows the centroid term Mc(τ) grows relative to M_rel(τ) at longer lags, establishing the team centroid as the collective coordinate that carries player transport beyond the first few seconds. Second, the centroid path is segmented into directional runs using a 30° heading-change rule [PAGE 16]. Completed-run lifetimes are broad and finite: the generalised-cutoff power law p(T=t) ∝ t^{-γ} exp[-(t/T_c)^β] [PAGE 16] fits best with γ=1.33, T_c=32.3 s, β=2.78 [PAGE 4], implying a broad early decay and a late attenuation sharper than exponential because β>1. Third, interval-level termination is modelled as an age-dependent hazard. The empirical onset peak followed by decline is captured by an inverse-age baseline λ_0(a)=μ/(a+a_0) [PAGE 7], with fold-median (μ,a_0)=(1.33, 2.55 s) for the age-only model [PAGE 23]. A later-age term switches on at t_c≈20 s and rises over τ_q≈5 s [PAGE 7-8], tempering survival at old ages. Fourth, collective order enters through state-dependent multipliers m_L=1.31, m_M=1.00, m_H=0.67 [PAGE 8], so high-order intervals carry roughly half the termination multiplier of low-order intervals. Switching matrices [PAGE 28, Table S3] show high-order persistence falling from 0.82 to 0.73 across age bands while low-order persistence rises from 0.64 to 0.80. Propagating the live population via u_{j+1}=A_j^T u_j [PAGE 10] yields the empirical rise of the high-order survivor fraction from ~0.1 at birth to >0.5 at 5–7 s, then decline to ~0.2 by 35 s [PAGE 11].

 Gray-zone audit. The association is real but modest: contemporaneous polarisation yields termination odds ratio 0.802 [0.792,0.814] per standard deviation [PAGE 27, Table S2], yet held-out Brier score barely moves (0.148→0.147) and log loss improves only 0.471→0.464 [PAGE 8, Table 1], meaning the clearest gain is calibration, not overall accuracy. Collinearity is substantial: mean active-player speed and centroid speed correlate at r=0.92 with VIF 8.0 [PAGE 7], so including both drives the polarisation estimate to 0.98 [0.96,1.00], i.e. no association [PAGE 27]. The active-player set is reconstructed without official substitution logs [PAGE 14], introducing a gray zone in centroid composition. Right-censored endings (132 runs) [PAGE 14] and sparse risk sets beyond 35 s [PAGE 7-9] limit late-age inference. Team-specific terciles are not universal absolute order levels [PAGE 5]. Two clubs over two seasons restrict external validity [PAGE 13]. Thus the mechanism—survival and reorganisation of transient collective modes—is supported as a relative descriptive summary, not as evidence that a duration is sampled at run birth [PAGE 13].

 That's around 450 words. Good.

 SOURCE_OPERATORS_AND_EQUATIONS (aim ~250 words):

 Formal operators and equations with SI/probability units.
 - Displacement decomposition: x_i(t)=X_c(t)+r_i(t), metres [PAGE 3, Eq 1].
 - MSD exact signed decomposition: M_i(τ)=M_c(τ)+M_rel(τ)+C_{c,rel}(τ), units m² [PAGE 3, Eq 2]. Effective exponents α: centroid ≈1.20, pitch-frame player ≈1.13, centroid-relative ≈0.93 over 5–30 s [PAGE 4].
 - Polarisation: p(t)=||(1/N_v(t))Σ_{i∈A_v(t)} v_i(t)/||v_i(t)||||, dimensionless [0,1] [PAGE 5, Eq 3].
 - Survival/hazard: S(a)=P(T>a), λ(a)=-d/da log S(a), a in seconds, λ in s^{-1} [PAGE 7, Eq 4].
 - Inverse-age baseline: λ_0(a)=μ/(a+a_0), μ dimensionless rate scale, a_0 in seconds [PAGE 7, Eq 5]. Fold medians age-only (μ,a_0)=(1.33,2.55 s); age-plus-order (1.92,4.77 s) [PAGE 23].
 - State-dependent hazard: λ_k(a)=m_{s_k(a)} μ/(a+a_0) + q[1-exp(-(a-t_c)^+/τ_q)], m∈{1.31,1.00,0.67} for low/mid/high, q≈0.104 s^{-1}, t_c≈20 s, τ_q≈5 s [PAGE 7-8, Eq 6; PAGE 23].
 - Transition matrix: P_{sr,j}=P(Z_{j+1}=r|Z_j=s, survival), rows current, columns next, age bands 0–5, 5–10, 10–20, 20–35 s [PAGE 10, Eq 7; PAGE 28 Table S3].
 - Population propagation: u_{j+1}=A_j^T u_j, A_{sr,j}=(1-d_{s,j})P_{sr,j}, d_{s,j} termination probability [PAGE 10, Eq 8]. Total survival S_j=1^T u_j, composition c_{s,j}=u_{s,j}/S_j [PAGE 10, Eq 9].
 - Exposure: Π_s(A)=E[(1/A)∫_0^A 1{Z(a)=s} da | T≥A], dimensionless fraction [PAGE 10-11, Eq 10].
 - Continuous-age McKendrick–von Foerster: ∂n/∂t+∂n/∂a=[K(a)^T-D(a)]n, D(a)=diag(λ_L,λ_M,λ_H) [PAGE 11, Eq 11].
 - Conservation: dS/da=-λ(a)S(a) [PAGE 11, Eq 12]; composition dc/da = switching redistribution + selection by differential termination [PAGE 11, Eq 13].
 - Centroid: X_c(t)=(1/N(t))Σ_{i∈A(t)}x_i(t), metres [PAGE 15, Eq 14].
 - Duration family: p(T=t)∝t^{-γ}exp[-(t/T_c)^β], t≥1 s, γ=1.326, T_c=32.3 s, β=2.782 [PAGE 16, Eq 15; PAGE 4].
 - Predictive scores: log loss and Brier score [PAGE 24, Eq S16-S17]. Held-out: 355,330 intervals, 69,670 events, 132 censored [PAGE 8, Table 1].

 Breakdown/singularity: at a=0, λ_0(0)=μ/a_0=0.52 s^{-1}, finite; β>1 implies super-exponential late attenuation relative to exponential; γ>1 makes early-time mass normalisable; >35 s sparse [PAGE 7-9].

 RETROCAUSAL_GENEALOGY (aim ~200 words):

 Historical lineage: Lévy walk theory from Viswanathan et al. (1999) [1] and Zaburdaev et al. (2015) [2]; critique of unique statistical identification via Edwards et al. (2007) [3]; swarm-generated Lévy flights from Reynolds & Ouellette (2016) [4] and interacting-individual mechanisms from Fedotov & Korabel (2017) [5]; random death/mortality tempering persistence from Fedotov et al. (2015) [6] and Stage (2017) [7]. Age-structured population theory enters via McKendrick (1926) [15] and von Foerster (1959) [16]; classical frailty/survivor selection from Vaupel et al. (1979) [17]. Football collective-motion literature: Frencken et al. (2011) [8], Bartlett et al. (2012) [9], Moura et al. (2013) [10], Welch et al. (2021) [11], Marcelino et al. (2020) [12], Chacoma et al. (2021) [13], and the direct foraging antecedent Shpurov et al. (2024) [14], all cited on [PAGE 1-2, 18-20].

 Multi-week traps: (i) cohort spans two seasons (2020, 2021) and two clubs, so tactical non-stationarity across weeks is unmodelled [PAGE 14]; (ii) grouped leave-one-match-date-out validation withholds entire dates, including head-to-head fixtures and separate opponents, testing temporal transfer but not external league validity [PAGE 8]; (iii) active-player reconstruction lacks official substitution logs, so participation changes are inferred [PAGE 14], creating a latent confounder over weeks; (iv) segmentation sensitivity: turn threshold 30° vs 40° changes run counts 69,802→49,579 and hazard minimum [PAGE 28, Table S2]; (v) team-specific terciles are relative, not absolute, so cross-season order comparisons require recalibration [PAGE 5].

 RECURSIVE_THEORY_OF_MIND (aim ~200 words):

 Crisis habit regression: as runs age, high-order persistence falls (0.82→0.73) while low-order persistence rises (0.64→0.80) [PAGE 10, Table S3]. Older surviving runs regress toward low-order, disorganised states—a habit regression under cumulative exposure. Counter-trap: differential termination selectively removes low-order runs (m_L=1.31 vs m_H=0.67) [PAGE 8], so the survivor population is enriched in high-order states even as individual runs degrade. This creates a counter-trap: observers see old runs as highly ordered, but that order is a selection artefact of differential removal, not persistence of the original state. Clock: the dominant variable is run age a, not match clock time; hazard follows λ_0(a)=μ/(a+a_0) with a late-age switch at t_c≈20 s [PAGE 7]. Recursive theory of mind gap: the model treats collective order as an exogenous covariate [PAGE 7], but in a match the opposing team infers the run's order state and adapts pressure to force a switch. If opponents target high-order translating modes, termination becomes endogenous to the order state, violating the exogenous-covariate assumption. The paper cannot distinguish whether alignment stabilises translation, records an already stable mode, or lies on the same causal pathway as persistence [PAGE 13].

 CROSS_LAYER_VETO_ADJUDICATION (aim ~150 words):

 Physical veto: pitch boundaries are finite; runs are split at match-phase boundaries and timestamp gaps >2 s; centroid frames require ≥7 active players [PAGE 16]. This truncates very long runs by match and pitch geometry, making the late-age rise a finite-range tempering, not an asymptotic law [PAGE 13]. Biomechanical veto: velocity computed by backward difference at 1 Hz from 10 Hz GPS; zero-speed headings excluded from polarisation [PAGE 15-16]; low-speed turn guards at 0.25/0.50 m s^{-1} suppress spurious turns [PAGE 16, 21]; turn threshold θ_c=30° [PAGE 16]. Speed strata (slow/middle/fast) show polarisation odds ratios remain below one within each stratum [PAGE 27], so the order–termination association is not purely a fast-speed artefact. Weather veto proof: the model contains no weather covariate; Norwegian Toppserien matches are outdoor and weather-exposed [PAGE 14]. Any veto would require showing that precipitation or wind shifts centroid speed or polarisation independently of the modelled kinematics; since neither is measured, a weather-induced confound remains possible but unquantified. Breakdown regime: at a=0, λ_0(0)=μ/a_0=0.52 s^{-1} finite [PAGE 7]; β=2.782>1 imposes sharper-than-exponential cutoff [PAGE 4]; beyond 35 s risk sets are sparse [PAGE 9], so hazard extrapolation is invalid.

 RLVR_COUNTERFACTUAL_VETOES (aim ~150 words):

 Scenario 1 (reconstruction veto): Set the velocity-coherence coefficient C_i to zero in active-player reconstruction (sensitivity already reported) [PAGE 21]. Verifiable condition: if the contemporaneous polarisation odds ratio shifts from 0.802 [0.792,0.814] to outside [0.75,0.86] or loses significance, veto the claim that order is separable from kinematic reconstruction. Prediction: odds ratio remains ≈0.814 [0.802,0.826], so the veto does not trigger; conclusion is robust to coherence removal.

 Scenario 2 (segmentation veto): Change turn threshold from θ_c=30° to 40° [PAGE 28, Table S2]. Verifiable condition: if the hazard minimum shifts by >5 s or the state multiplier ordering inverts (m_H > m_L), veto the universality of age-dependent termination. Prediction: run count falls to 49,579 and hazard minimum moves, but low-order remains most vulnerable; veto does not trigger.

 Scenario 3 (late-age term veto): Remove the q[1-exp(-(a-t_c)^+/τ_q)] term from Eq. (6) [PAGE 7-8]. Verifiable condition: on held-out dates with >10% of runs surviving past 20 s, if log loss increases by >0.005 relative to full model (0.464), veto the necessity of late-age attenuation. Prediction: full model log loss 0.464 vs age+order 0.466 [PAGE 8]; the small gain implies the veto may trigger on sparse late-age dates, indicating late-term is a local correction, not a universal law.

 Need to ensure no betting lines. "Odds ratio" is statistical, okay. "Moneyline" etc not mentioned.

 Total words: THINK_TRACE ~450, SOURCE ~250, RETRO ~200, RECURSIVE ~200, CROSS ~150, RLVR ~150 = ~1400 words. Good.

 Need to make sure XML tags are exact. Use the exact tag names.

 Let me refine and write final output. I'll double check page citations match the provided text.

 Page citations:
 - Eq 1,2: PAGE 3
 - Eq 3: PAGE 5
 - Eq 4,5,6: PAGE 7
 - Eq 7,8,9: PAGE 10
 - Eq 10: PAGE 10-11
 - Eq 11,12,13: PAGE 11
 - Eq 14: PAGE 15
 - Eq 15: PAGE 16
 - Table 1: PAGE 8
 - Table S2: PAGE 28
 - Table S3: PAGE 28
 - Generalised cutoff params: PAGE 4
 - Fold medians: PAGE 23
 - Odds ratios: PAGE 7, PAGE 27
 - Collinearity: PAGE 7
 - Brier/log loss: PAGE 8
 - Switching persistence: PAGE 10
 - Survivor fraction: PAGE 11
 - Active player reconstruction: PAGE 14
 - Right censored: PAGE 14
 - Sparse >35s: PAGE 7-9
 - Team-specific terciles: PAGE 5
 - Two clubs two seasons: PAGE 14
 - References: PAGE 18-20
 - Match-date grouping: PAGE 8, PAGE 24
 - Segmentation sensitivity: PAGE 28 Table S2
 - Weather: no weather data; PAGE 14 mentions Norwegian Toppserien but no weather. I'll phrase carefully.

 Let's write it out.
</NATIVE_REASONING>

<THINK_TRACE>
The core derivation proceeds as a four-layer causal chain. First, player displacement is decomposed exactly into centroid translation and formation-relative motion via x_i(t) = X_c(t) + r_i(t) [PAGE 3]. The mean-squared displacement identity [PAGE 3] shows the centroid term M_c(τ) grows relative to M_rel(τ) at longer lags, establishing the team centroid as the collective coordinate that carries player transport beyond the first few seconds. Descriptive slopes over 1–4 s are near-ballistic, while over the principal 5–30 s fitting range centroid and pitch-frame player MSDs remain superdiffusive (α ≈ 1.20 and 1.13) whereas centroid-relative motion becomes approximately diffusive (α ≈ 0.93) [PAGE 4]. Second, the centroid path is segmented into directional runs using a 30° heading-change rule [PAGE 16]. Completed-run lifetimes are broad but finite: the generalised-cutoff power law p(T=t) ∝ t^{−γ} exp[−(t/T_c)^β] [PAGE 16] fits best with γ = 1.33, T_c = 32.3 s, β = 2.78 [PAGE 4], implying a broad early decay and a late attenuation sharper than exponential because β > 1. No candidate family passed the absolute goodness-of-fit test, so this is a relative summary, not a generative law [PAGE 4]. Third, interval-level termination is modelled as an age-dependent hazard. Empirical termination probability is highest immediately after onset and declines sharply, approximated by an inverse-age baseline λ_0(a) = μ/(a+a_0) [PAGE 7], with fold-median (μ, a_0) = (1.33, 2.55 s) for the age-only model [PAGE 23]. A later-age term switches on at t_c ≈ 20 s and rises over τ_q ≈ 5 s [PAGE 7–8], tempering survival at old ages. Fourth, collective order enters through state-dependent multipliers m_L = 1.31, m_M = 1.00, m_H = 0.67 [PAGE 8], so high-order intervals carry roughly half the termination multiplier of low-order intervals. Switching matrices [PAGE 28, Table S3] show high-order persistence falling from 0.82 to 0.73 across age bands while low-order persistence rises from 0.64 to 0.80. Propagating the live population via u_{j+1} = A_j^T u_j [PAGE 10] yields the empirical rise of the high-order survivor fraction from ~0.1 at birth to >0.5 at 5–7 s, then decline to ~0.2 by 35 s [PAGE 11].

Gray-zone audit. The association is real but modest: contemporaneous polarisation yields a termination odds ratio of 0.802 [0.792, 0.814] per standard deviation [PAGE 27, Table S2], yet held-out Brier score barely moves (0.148 → 0.147) and log loss improves only 0.471 → 0.464 [PAGE 8, Table 1], meaning the clearest gain is calibration of interval-level probabilities rather than overall accuracy. Collinearity is substantial: mean active-player speed and centroid speed correlate at r = 0.92 with maximum variance-inflation factor 8.0 [PAGE 7], so including both speed measures drives the polarisation estimate to 0.98 [0.96, 1.00], i.e. no association [PAGE 27]. The active-player set is reconstructed without official substitution logs [PAGE 14], introducing a gray zone in centroid composition and therefore in polarisation. Right-censored endings (132 runs) [PAGE 14] and sparse risk sets beyond 35 s [PAGE 7–9] limit late-age inference. Team-specific terciles are not universal absolute order levels [PAGE 5]. Two clubs over two seasons restrict external validity [PAGE 14]. Thus the mechanism—survival and reorganisation of transient collective modes—is supported as a relative descriptive summary, not as evidence that a duration is sampled at run birth [PAGE 13]. The object requiring explanation is the collective mode that survives long enough to produce the long step [PAGE 13].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX equations, units, and page citations:

1. Displacement decomposition [PAGE 3, Eq. (1)]: x_i(t) = X_c(t) + r_i(t), where x_i is pitch-frame player position (m), X_c is team centroid (m), r_i is centroid-relative position (m).
2. Exact MSD signed decomposition [PAGE 3, Eq. (2)]: M_i(τ) = M_c(τ) + M_rel(τ) + C_{c,rel}(τ), all in m², with M_y(τ) = ⟨‖y(t+τ) − y(t)‖²⟩ [PAGE 23, Eq. (S9)]. Effective exponents over 5–30 s: centroid ≈ 1.20, pitch-frame player ≈ 1.13, centroid-relative ≈ 0.93 [PAGE 4].
3. Collective polarisation [PAGE 5, Eq. (3)]: p(t) = ‖(1/N_v(t)) Σ_{i∈A_v(t)} v_i(t)/‖v_i(t)‖‖, dimensionless in [0,1], computed from active players with defined non-zero velocity.
4. Survival and hazard [PAGE 7, Eq. (4)]: S(a) = P(T > a), λ(a) = −d/da log S(a), with age a in seconds and hazard λ in s⁻¹.
5. Inverse-age baseline [PAGE 7, Eq. (5)]: λ_0(a) = μ/(a + a_0), μ dimensionless, a_0 in seconds. Fold medians: age-only (μ, a_0) = (1.33, 2.55 s); age-plus-order (1.92, 4.77 s) [PAGE 23].
6. State-dependent hazard [PAGE 7–8, Eq. (6)]: λ_k(a) = m_{s_k(a)} μ/(a + a_0) + q[1 − exp(−(a − t_c)^+/τ_q)], where m ∈ {m_L, m_M, m_H} = {1.31, 1.00, 0.67}, q ≈ 0.104 s⁻¹, t_c ≈ 20 s, τ_q ≈ 5 s [PAGE 23]. (x)^+ = max(x, 0).
7. Transition matrix [PAGE 10, Eq. (7)]: P_{sr,j} = P(Z_{j+1} = r | Z_j = s, survival of interval j), rows current state, columns next state, age bands 0–5, 5–10, 10–20, 20–35 s [PAGE 28, Table S3].
8. Population propagation [PAGE 10, Eq. (8)]: u_{j+1} = A_j^T u_j, A_{sr,j} = (1 − d_{s,j}) P_{sr,j}, with d_{s,j} the interval termination probability. Total survival S_j = 1^T u_j, composition c_{s,j} = u_{s,j}/S_j [PAGE 10, Eq. (9)].
9. State exposure [PAGE 10–11, Eq. (10)]: Π_s(A) = E[(1/A) ∫_0^A 1{Z(a) = s} da | T ≥ A], dimensionless fraction of elapsed run time.
10. Continuous-age McKendrick–von Foerster form [PAGE 11, Eq. (11)]: ∂n/∂t + ∂n/∂a = [K(a)^T − D(a)] n, D(a) = diag(λ_L, λ_M, λ_H). Not separately fitted; interpretive limit [PAGE 11].
11. Mass conservation [PAGE 11, Eq. (12)]: dS/da = −λ(a)S(a). Composition dynamics [PAGE 11, Eq. (13)]: dc/da = redistribution by switching + selection by differential termination.
12. Centroid definition [PAGE 15, Eq. (14)]: X_c(t) = (1/N(t)) Σ_{i∈A(t)} x_i(t), requires ≥7 active players [PAGE 15–16].
13. Duration family [PAGE 16, Eq. (15); PAGE 22, Eq. (S8)]: p(T=t) ∝ t^{−γ} exp[−(t/T_c)^β], t ≥ 1 s, fitted by maximum likelihood. Whole-sample γ = 1.326, T_c = 32.3 s, β = 2.782 [PAGE 4]. β > 1 gives sharper-than-exponential late attenuation; γ > 1 makes early-time mass integrable.
14. Predictive scores [PAGE 24, Eq. (S16)–(S17)]: log loss and Brier score. Held-out evaluation: 355,330 intervals, 69,670 terminations, 132 right-censored endings [PAGE 8, Table 1].

Breakdown and singularity regimes: at a = 0, λ_0(0) = μ/a_0 = 0.52 s⁻¹, finite. The late-age term is exactly zero for a < t_c and rises gradually thereafter; beyond 35 s risk sets are sparse [PAGE 7–9], so hazard extrapolation is invalid. The generalised-cutoff tail is attenuated more sharply than conventional exponential truncation because β = 2.782 > 1 [PAGE 4].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage: Lévy-walk foundations are drawn from Viswanathan et al. (1999) on optimising random searches [1] and Zaburdaev et al. (2015) on Lévy walks [2]; the warning that broad trajectories do not identify a unique statistical family comes from Edwards et al. (2007) [3]. Swarm-generated Lévy flights without a prescribed search programme are argued by Reynolds & Ouellette (2016) [4], and emergence of Lévy walks in interacting systems by Fedotov & Korabel (2017) [5]. Random death and mortality tempering persistent walks are treated by Fedotov et al. (2015) [6] and Stage (2017) [7]. The age-structured population interpretation invokes McKendrick (1926) [15] and von Foerster (1959) [16], while classical frailty/survivor selection—where aggregate mortality declines because frail individuals are removed earlier—is from Vaupel et al. (1979) [17]. These references appear in the bibliography on [PAGE 18–20]. Football-specific collective-motion antecedents include Frencken et al. (2011) [8], Bartlett et al. (2012) [9], Moura et al. (2013) [10], Welch et al. (2021) [11], Marcelino et al. (2020) [12], Chacoma et al. (2021) [13], and the direct foraging antecedent Shpurov et al. (2024) [14], cited on [PAGE 1–2, 18].

Multi-week traps: (i) The cohort spans two seasons (2020 and 2021) and only two clubs (Rosenborg and Vålerenga), so week-to-week tactical non-stationarity is unmodelled and external validity across leagues is untested [PAGE 14]. (ii) Grouped leave-one-match-date-out cross-fitting withholds entire dates, including head-to-head fixtures and dates when the clubs played separate opponents; this tests temporal transfer within the same system but not external validity [PAGE 8; PAGE 24]. (iii) Active-player reconstruction lacks official substitution logs, so participation changes are inferred from trajectory geometry rather than recorded events, creating a latent confounder that can drift across weeks [PAGE 14]. (iv) Segmentation sensitivity is substantial: changing the turn threshold from 30° to 40° reduces run counts from 69,802 to 49,579 and moves the hazard minimum [PAGE 28, Table S2], meaning duration-scale conclusions are not segmentation-invariant. (v) Order terciles are team-specific and relative, not universal absolute levels, so cross-season comparisons of “high order” require recalibrated cutpoints [PAGE 5].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: as collective runs age, the process regresses toward disorder. High-order persistence falls from approximately 0.82 in the 0–5 s band to 0.73 in the 20–35 s band, while low-order persistence rises from 0.64 to 0.80 [PAGE 10; PAGE 28, Table S3]. Older surviving runs therefore regress toward low-order, poorly aligned states under cumulative exposure—a crisis habit regression in which the dominant habit of long-lived runs is low-order disorganisation.

Counter-trap: differential termination selectively removes low-order runs (m_L = 1.31 vs m_H = 0.67) [PAGE 8], so the surviving population is enriched in high-order states even while individual runs degrade. This produces a counter-trap: an observer sampling old runs sees a high-order fraction above 0.5 around 5–7 s [PAGE 11] and infers persistent collective organisation, when in fact that enrichment is a selection artefact of differential removal rather than persistence of the original state. The full switching-and-termination model is required to reproduce both the early rise and its persistence; neither process alone suffices because each alters the population on which the other acts [PAGE 11].

Clock: the dominant temporal variable is run age a, not match clock time. The hazard follows the inverse-age baseline λ_0(a) = μ/(a + a_0) with a late-age switch at t_c ≈ 20 s rising over τ_q ≈ 5 s [PAGE 7–8]. Recursive theory-of-mind gap: the model treats collective order as an exogenous time-varying covariate [PAGE 7], but in an actual match the opposing team infers the run’s order state and adapts pressure to force a heading change or termination. If opponents strategically target high-order translating modes, termination becomes endogenous to the order state, violating the exogenous-covariate assumption. The paper explicitly cannot distinguish whether alignment stabilises translation, records an already stable mode, or lies on the same causal pathway as directional persistence [PAGE 13].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical veto: pitch geometry is venue-specific and finite; runs are split at match-phase boundaries and at timestamp gaps strictly greater than 2 s; centroid frames require at least seven active players with valid coordinates [PAGE 16]. This hard truncation by match boundaries and pitch dimensions means the late-age hazard rise is finite-range tempering over the observed window, not a universal asymptotic law [PAGE 13].

Biomechanical veto: velocity is computed by backward difference at the 1-Hz analysis base from native 10-Hz GPS; zero-speed and undefined headings are excluded from polarisation [PAGE 15–16]. Low-speed turn guards at 0.25 and 0.50 m s⁻¹ suppress spurious turns near standstill [PAGE 16; PAGE 21]. The primary turn threshold is θ_c = 30° [PAGE 16]. Within slow, middle, and fast speed strata the contemporaneous polarisation odds ratio remains below one (0.817, 0.800, 0.712 respectively) [PAGE 27], so the order–termination association is not purely a fast-speed artefact.

Weather veto proof: the model contains no weather covariate, and the Norwegian Toppserien is an outdoor competition exposed to precipitation and wind [PAGE 14]. A valid weather veto would require demonstrating that weather shifts centroid speed or polarisation independently of the modelled kinematics; because neither weather nor pitch condition is measured, such a confound remains possible but unquantified. Any veto must operate through the measured layers: centroid speed, polarisation, run age, or segmentation.

Breakdown and singularity regimes: at a = 0 the inverse-age hazard is finite (μ/a_0 = 0.52 s⁻¹) [PAGE 7]; β = 2.782 > 1 imposes super-exponential late attenuation relative to a conventional exponential cutoff [PAGE 4]; risk sets become sparse beyond 35 s, invalidating hazard extrapolation into the oldest bins [PAGE 7–9].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Reconstruction veto: Set the velocity-coherence coefficient C_i to zero in active-player reconstruction while retaining all other rules (a sensitivity already reported) [PAGE 21]. Verifiable condition: if the contemporaneous polarisation odds ratio shifts outside [0.75, 0.86] or the 95% interval includes unity, veto the claim that order is separable from kinematic reconstruction. Prediction: the reported sensitivity yields 0.814 [0.802, 0.826] [PAGE 27], so the veto does not trigger; the conclusion is robust to coherence removal.

Scenario 2 — Segmentation veto: Change the directional-run turn threshold from θ_c = 30° to θ_c = 40° [PAGE 28, Table S2]. Verifiable condition: if the hazard minimum shifts by more than 5 s or the state-multiplier ordering inverts such that m_H > m_L, veto the universality of age-dependent termination. Prediction: run count falls to 49,579 and absolute termination probabilities shift, but low-order intervals remain most vulnerable; the veto does not trigger.

Scenario 3 — Late-age term veto: Remove the gradual later-age term q[1 − exp(−(a − t_c)^+/τ_q)] from Eq. (6) [PAGE 7–8]. Verifiable condition: on held-out match dates where more than 10% of runs survive past 20 s, if out-of-fold log loss increases by more than 0.005 relative to the full model’s 0.464, veto the necessity of late-age attenuation. Prediction: the age-plus-order model logs 0.466 versus full-model 0.464 [PAGE 8, Table 1], a marginal gain concentrated in calibration rather than discrimination, so the veto may trigger on sparse late-age dates, indicating the late term is a local correction rather than a universal law.
</RLVR_COUNTERFACTUAL_VETOES>