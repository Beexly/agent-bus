---
source: "2020 - Bang the Can Slowly An Investigation into the 2017 Houston Astros - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/Carnegie Mellon Sports Analytics Conference/2020"
pages: 14
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5686
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper about the Houston Astros sign-stealing scandal. I need to produce a response with specific XML sections, each meeting certain criteria:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds (in betting context). Note: The paper uses "odds ratio" which is statistical, not betting odds. I must be careful not to mention betting lines, but odds ratios as statistical measures are fine since they're not betting lines. Actually, invariant 1 says "Never mention spreads, totals, moneylines, or odds." Wait, it says "odds" - does that mean statistical odds ratios too? Let me re-read: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This likely refers to betting odds, not statistical odds ratios. But to be safe, I should avoid using the word "odds" in a betting context. Statistical odds ratios (OR) are part of the source text and are not betting lines. I'll refer to them as "statistical odds ratios" or "OR" but avoid betting terminology.

2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.

3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write at least 1000 words total across these sections, with THINK_TRACE alone being >=400 words.

Let me structure this carefully.

**THINK_TRACE (>=400 words):** Deep multi-hop derivation & gray-zone audit. I need to trace the causal chain from sign stealing -> bang -> batter knowledge -> swing/contact/exit velocity. Audit gray zones: ambiguous bangs (absence inconclusive), player-specific variability (Altuve/Reddick preferred no bang), confounders (pitch count, CSP, pitcher/batter random effects), data cleaning (8274 -> 8201), bootstrapping issues, small sample for some players, causal inference limits (observational data, not randomized). Multi-hop: bang presence -> off-speed expectation -> reduced swing rate (because off-speed harder to hit, but wait: if they know off-speed is coming, why swing less? Because they can lay off off-speed pitches that are out of zone, or because they wait for better pitches? Actually the model shows bang reduces swing odds by 27.5%. The paper says batters swing less when bang present. The authors suggest fastballs are easier to hit, so knowing off-speed is coming might make them more selective? Wait, if they know off-speed is coming, they might swing less because off-speed is harder to hit? But then contact given swing increases 80%. So they swing less overall but make more contact when they do swing. This is a selection effect. Gray zone: the bang indicates off-speed, but absence is inconclusive (could be fastball or failed decode). This creates measurement error in the treatment variable. Multi-hop: camera in center field -> audio signal -> trash can bang -> batter expectation -> pitch selection behavior -> contact quality -> exit velocity -> fly ball distance -> home run probability (12.6 additional feet at Fenway). Need to audit endogeneity: teams could adapt, sign sequences could change, pitch tipping could confound.

**SOURCE_OPERATORS_AND_EQUATIONS:** Formal LaTeX. GLMM equation (1): g(η) = Xβ + Zb, η = linear predictor. Link functions: logit for binary, identity for continuous. Swing model: logit(π_ij) = ... covariates: bang indicator, pitch type fastball indicator, CSP, pitch count factor, random slope per batter. Contact model: logit(π_ij) with CSP, fastball indicator, bang indicator, fastball*bang interaction, random intercepts pitcher & batter, random slope bangs for batter. Exit velocity: identity link, linear mixed model, covariates CSP, fastball, bang, random intercepts pitcher/batter. Units: miles per hour (mph) for exit velocity, probabilities dimensionless, odds ratios dimensionless. Page citations: [PAGE 1] abstract, [PAGE 2] intro, [PAGE 5-6] data, [PAGE 10-11] methodology, [PAGE 12-13] swing results, [PAGE 14-15] contact results, [PAGE 16-17] exit velocity results, [PAGE 24-27] tables. Breakdown: n=8274 raw, n=8201 cleaned; Table 1 chi-square p < 2.2e-16; Table 2 swing rates 40.5% vs 46.2%, OR 0.793 unadjusted; adjusted OR 0.725 (95% CI 0.618, 0.850); contact OR 1.805 off-speed; fastball bang OR 0.547 (NS); EV +2.386 mph (95% CI 0.334, 4.451); Nathan 2020 trajectory: 100 mph -> 385.3 ft, 102.386 mph -> 397.9 ft, delta 12.6 ft; Fenway center field 389' 9". Singularity/breakdown: when bang absent but sign decoded (false negative), model misclassifies treatment; when n small per player (e.g., Springer 31 bang off-speed swings), bootstrap CIs wide; GLMM convergence if random effects variance near zero; CSP model assumes Judge & Brooks (2015) framing accuracy.

**RETROCAUSAL_GENEALOGY:** Historical lineage: sign stealing in baseball goes back to 19th century (1876? 1900s?), 1951 Giants "shot heard round the world" telescope sign stealing, 2017 Astros camera system, 2018 Red Sox/Alex Cora connection. Scientific lineage: generalized linear mixed models (McCulloch & Neuhaus 2014), bootstrap (Efron & Tibshirani 1986), called strike probability (Judge & Brooks 2015), Statcast/Trackman/Doppler radar, Pitch Info Pavlidis & Brooks 2020. Multi-week traps: the bang rate increased through first 5 months then dropped in September (overconfidence or refinement?), intraseason improvement after May 19 (Arthur 2019) - the trap is attributing within-season trends to sign stealing when opponent adjustment, pitcher fatigue, or sample selection could explain. Also 2018 Springer contact rate remained high (78.5%) suggesting possible persistence or carryover, but the bang data is only 2017 home games subset. The "multi-week trap" is assuming season-long effects from a mechanism that may have degraded or been countered as the season progressed (September drop in bang proportion).

**RECURSIVE_THEORY_OF_MIND:** Crisis habit regression: under pressure (playoffs/World Series), do players revert to pre-cheating habits? The bang system provided a crutch; in high-leverage crisis moments, batters may regress to baseline swing decisions if the bang is absent or ambiguous. Counter-trap: opponents knowing the Astros scheme could feed false signs or pitch strategically (e.g., throw fastballs when no bang, off-speed when bang, or reverse psychology). Clock: the sign-stealing window was limited to home games with camera; away games no bang; postseason? The data covers subset of 2017 home games. The "clock" is the temporal decay of advantage as the league adapted post-September 2017 and after the scandal broke in 2019. Crisis habit regression vs counter-trap: in World Series, did the Astros still bang? If opponents anticipated bangs, they could throw fastballs on bangs (mismatch), causing contact model fastball OR 0.547 (less contact when expecting off-speed but getting fastball). This is a second-order theory of mind: batter expects off-speed because bang, pitcher knows batter expects off-speed, throws fastball, batter swings late/misses.

**CROSS_LAYER_VETO_ADJUDICATION:** Physical/biomechanical/weather veto proof. Physical: exit velocity physics (Nathan 2020) - 2.386 mph increase -> 12.6 ft at 30 deg launch angle. But weather veto: temperature, humidity, air density affect ball flight independent of exit velocity; wind can negate 12.6 ft. Biomechanical: batter reaction time ~0.4s for 95mph fastball; knowing pitch type reduces cognitive load but doesn't change swing mechanics; however, if bang timing is late (audio arrives too late), biomechanical veto: impossible to adjust swing mid-flight. Weather: outdoor games, wind, temperature, humidity not in model (Statcast EV measured at bat, but distance not modeled). Veto proof: exit velocity model controls for CSP, fastball, bang; random intercepts for pitcher/batter absorb some physical heterogeneity, but does not control for wind, temperature, park effects. Thus veto: the EV effect is real but its translation to runs/home runs is vetoed by unmodeled weather and park physics. Also, the swing model assumes the bang is audible and perceived; crowd noise, stadium acoustics could veto signal transmission.

**RLVR_COUNTERFACTUAL_VETOES:** 3 verifiable RLVR (Reinforcement Learning via Verifiable Rewards? Or some framework) veto scenarios + predictions. Need 3 scenarios where the causal claim fails under counterfactual conditions. Scenario 1: Away games (no bang system) -> prediction: Astros swing/contact/EV advantage disappears; if observed advantage persists in away games, sign-stealing effect is confounded by team talent. Scenario 2: Pitches with no bang but sign actually decoded (false negative treatment) -> prediction: effect size attenuates toward zero; if misclassification > X%, OR significance lost. Scenario 3: Post-scandal 2019+ or postseason with heightened security -> prediction: no bang effect; if bang effect persists in 2018 (when Cora was in Boston? No, Astros 2018), test via 2018 home/away splits without electronic system. Verifiable predictions: (1) contact OR for off-speed in 2018 home games without system ≈ 1.0; (2) swing rate reduction requires audible bang with crowd noise below threshold dB; (3) exit velocity delta collapses when controlling for wind speed and temperature at game time.

Now I need to ensure word count >=1000 total, THINK_TRACE >=400 words.

I must not mention betting lines. I will not use "odds" alone without context; I'll say "statistical odds ratio (OR)" to distinguish from betting odds. Actually invariant says "Never mention spreads, totals, moneylines, or odds." To be safe, I will avoid the word "odds" entirely or use "statistical odds ratio" but maybe better to just say "OR" and describe as multiplicative factor. I'll avoid the standalone word "odds".

Also no toy equations. All equations formal LaTeX.

Let me draft.

---

< THINK_TRACE >
Need >=400 words. Let's write around 500-600 words.

Content:
- Multi-hop derivation: Camera CF -> audio spectrogram -> bang classification -> treatment variable Z_i (bang/no bang) -> latent batter belief B_i (off-speed expected) -> swing decision S_i -> contact C_i -> exit velocity V_i -> batted-ball distance D_i.
- Causal chain is observational; Z not randomized. Confounders: pitch type (fastball vs off-speed), pitch count, CSP, batter/pitcher identity.
- Gray zones: (1) Absence of bang is inconclusive: no bang could mean fastball OR failed decode. This is non-ignorable missingness in the treatment indicator; the model treats "no bang" as control, diluting treatment effect if some control units actually received the sign via other channels. (2) Player heterogeneity: Altuve and Reddick preferred fewer bangs; Table 5 shows 10 of 20 players nonsignificant contact OR. This violates homogeneous treatment effect assumption; random slopes help but sparse data per player (Springer n=40 bang off-speed swings) yields wide bootstrap CIs (12.864 upper bound). (3) Temporal drift: bang proportion rose through first five months then fell in September (Figure 1). This suggests opponent adaptation or operational decay; a static GLMM with no time-varying treatment effect may misattribute seasonal trends to the bang. (4) Data cleaning: 8274 to 8201; removal of ambiguous pitch groups and missing pitch IDs could introduce selection bias if removed observations are not missing at random. (5) The sign-stealing advantage is bounded by human reaction physics: even with perfect pitch-type knowledge, a batter must still execute swing timing; bangs do not alter pitch velocity or movement, only the information set. Therefore the maximum effect size is capped by the variance in contact/exit velocity explained by pitch-type anticipation alone.

I'll weave this into >=400 words.

< SOURCE_OPERATORS_AND_EQUATIONS >
Formal LaTeX:
GLMM general: g(η_ij) = X_ij β + Z_ij b_j, b_j ~ N(0, G). η linear predictor. g link.
Swing: logit(π_ij) = β0 + β1 Bang + β2 Fastball + β3 CSP + β4 PC_factor + u_j (random slope batter).
Contact: logit(π_ij) = γ0 + γ1 Bang + γ2 Fastball + γ3 CSP + γ4 (Bang × Fastball) + v_pitcher + v_batter + w_batter × Bang.
Exit Velocity: V_ij = δ0 + δ1 Bang + δ2 Fastball + δ3 CSP + a_pitcher + a_batter + ε, ε ~ N(0, σ²).
Units: V in mph, probabilities unitless, OR unitless.
Citations page numbers from source: [PAGE 1] abstract ORs; [PAGE 6] n=8201; [PAGE 7] Table 1 chi-square; [PAGE 8] Table 2; [PAGE 10-11] methodology; [PAGE 12-13] swing results; [PAGE 14-15] contact; [PAGE 16-17] exit velocity; [PAGE 24-27] tables.
Breakdown:
- n raw 8274, cleaned 8201 [PAGE 6].
- Bang prevalence by pitch: CH 23.7%, CU 27.6%, FA 2.3%, SL 26.8% [PAGE 7 Table 1].
- Unadjusted swing: bang 40.5% vs no bang 46.2%, OR 0.793, CI (0.69678, 0.9023), p=3.706e-4 [PAGE 8 Table 2].
- Adjusted swing: coeff -0.3219, CI (-0.482, -0.163), p=7.59e-5, OR 0.725, CI (0.618, 0.850) [PAGE 12 Table 3].
- Contact off-speed: coeff 0.591, OR 1.805, bootstrapped CI (1.342, 2.675) [PAGE 14 Table 4].
- Contact fastball: coeff -0.603, OR 0.547, bootstrapped CI (0.227, 1.774), NS [PAGE 15].
- Springer: 390 swings, 135 off-speed; 31 bang off-speed swings, only 2 no-contact (miss rate 5%) vs 95 no-bang, 31 no-contact (32.63%) [PAGE 15-16].
- Exit velocity: coeff 2.386 mph, CI (0.334, 4.451), p=0.0230 [PAGE 17 Table 6].
- Nathan 2020: 100 mph @ 30° = 385.3 ft; 102.386 mph = 397.9 ft; delta 12.6 ft; Fenway CF 389'9" [PAGE 17].
Singularity/breakdown: GLMM fails if random-effect variance components approach boundary (σ_b → 0), if bang indicator perfectly predicts swing (separation), or if CSP model miscalibrated (Judge & Brooks 2015). Bootstrap CIs unreliable when player-specific bang counts < ~20.

< RETROCAUSAL_GENEALOGY >
Historical lineage: sign stealing pre-electronic era (19th c., 1951 Giants telescope), electronic era 2017 Astros center-field camera, trash can audio; 2018 Red Sox/Alex Cora. Scientific lineage: GLMM (McCulloch & Neuhaus 2014), bootstrap (Efron & Tibshirani 1986), CSP (Judge & Brooks 2015), Statcast Trackman/Chron Hego, Pitch Info. Multi-week traps: September decline in bang proportion [PAGE 6 Figure 1] indicates either refinement or decay; intraseason shift after May 19 [Arthur 2019] could reflect opponent adjustment rather than static treatment; 2018 Springer contact rate remained high without confirmed bang data [PAGE 16 Figure 4], creating a carryover trap—attributing 2018 performance to a 2017 mechanism. Also the World Series itself: no bang data for away/postseason, so claiming championship impact extrapolates beyond observed support.

< RECURSIVE_THEORY_OF_MIND >
Crisis habit regression: under World Series leverage, batters may abandon learned bang responses if signal is ambiguous or delayed, reverting to pre-2017 swing habits. Counter-trap: opponents, aware of the system, could invert the contingency—throw fastballs on bangs and off-speed on no-bangs—exploiting batter expectation; this is consistent with fastball contact OR 0.547 (NS but directionally negative) [PAGE 15]. Clock: the electronic system's operational window was confined to a subset of 2017 home games [PAGE 5-6]; its value decays as league countermeasures (sign variation, mound visits, audio monitoring) shorten the half-life of the informational advantage. Second-order theory of mind: batter forms expectation E[pitch|bang] = off-speed; pitcher forms E[batter swing|bang] = selective; if pitcher counter-adapts, the bang becomes a liability rather than an asset.

< CROSS_LAYER_VETO_ADJUDICATION >
Physical veto: exit velocity does not equal outcome; batted-ball distance depends on launch angle, spin, air density, temperature, wind [Nathan 2020, PAGE 17]. A +2.386 mph EV at 30° yields +12.6 ft, but a 10 mph headwind can erase >12.6 ft; the model contains no weather covariates, so the home-run claim is vetoed by unmodeled atmospheric physics.
Biomechanical veto: the bang is an auditory cue; if stadium crowd noise exceeds signal-to-noise threshold or the bang occurs after the pitcher's release point, the batter cannot update swing motor program in time (reaction latency ~150-250 ms). The model assumes successful signal transmission but provides no acoustic validation.
Cross-layer adjudication: statistical significance of bang on EV [PAGE 17] is not vetoed by biomechanics for swings that occurred, but the translation to runs/wins is vetoed because park, weather, and defense mediate EV-to-outcome. Thus the paper proves information affected swing/contact/EV conditional on contact, but does not prove championship-causing magnitude without external physical assumptions.

< RLVR_COUNTERFACTUAL_VETOES >
Three verifiable veto scenarios:
1. Away-game placebo: In 2017 Astros away games (no center-field camera/bang system), the contact rate on off-speed pitches should equal baseline if the bang is causal. Prediction: OR_contact_offspeed_away ≈ 1.0 with CI overlapping 1. Veto if OR > 1.3 persistently, indicating team-level talent confounding.
2. Acoustic masking: For home games with crowd noise above 90 dB during pitcher windup, the bang's auditory salience drops. Prediction: the swing-reduction effect (OR 0.725) should attenuate toward 1.0 in high-noise subsets. Veto if effect remains identical across noise strata, suggesting bang is a proxy for unobserved pitch tipping rather than audible signal.
3. Post-disclosure decay: After November 2019 public disclosure and 2020 security protocols, any residual Astros batter advantage on known off-speed pitches should vanish. Prediction: 2020+ contact-rate differential between Astros and league on identified off-speed pitches ≈ 0. Veto if differential persists, implying durable mechanical or scouting gains unrelated to the 2017 bang mechanism.

Now word count check. THINK_TRACE needs >=400 words. Let's estimate my draft for THINK_TRACE is around 350 words. I need to expand it to ensure >=400. Let me write more thoroughly.

I'll expand THINK_TRACE with more detail on multi-hop causal inference, gray-zone audit of Table 5 variability, the unadjusted vs adjusted divergence (0.793 vs 0.725), selection bias in contact model (only swingers), endogeneity of pitch count, etc.

Also overall total must be >=1000 words. With 6 sections, likely fine if THINK_TRACE is ~500 and others ~100-150 each.

Let me compose carefully, ensuring LaTeX is formal.

I need to cite exact [PAGE N] markers. The source text has page numbers embedded: 1, 2, ... 28. I will use those.

I will avoid the word "odds" alone? The invariant says never mention odds. I'll use "statistical odds ratio (OR)" but maybe the word "odds" is problematic. To be safe, I'll write "multiplicative odds-ratio statistic (OR)" and avoid the standalone word "odds" where possible. But the source text says OR: 0.725 etc. I can say "OR" without spelling out "odds". Actually "odds ratio" contains "odds". I'll write "OR" and describe it as a multiplicative contrast. I'll avoid phrases like "betting odds". I think using "statistical odds ratio" is fine because invariant 1 is about betting lines, but to be absolutely safe I'll minimize the word.

Let's write the final output.

Word count: I'll aim for THINK_TRACE ~550, SOURCE ~350, RETRO ~200, RECURSIVE ~180, CROSS ~180, RLVR ~200. Total ~1660. Good.

Let's ensure no toy equations. All equations are from the paper or standard GLMM.

I need to include exact verbatim quotes? Invariant 2 says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." So I should include some verbatim quotes with page citations.

Verbatim quotes:
- [PAGE 1] "the Astros’ odds of swinging at a pitch were reduced by approximately 27% (OR: 0.725, 95% CI: (0.618, 0.850)) when the sign was stolen"
- [PAGE 6] "The original Bangs data set has n = 8274 observations, however, we had to remove a number of observations... The resulting data set has a total of n = 8201 observations"
- [PAGE 12] "the coefficient estimate for the bangs indicator variable is -0.3219 (95% CI: (-0.482, -0.163), p-value: 7.59 × 10−5)"
- [PAGE 17] "we estimate that when a batter makes contact with ball on a pitch preceded by bangs their exit velocity is 2.386 miles per hour greater on average"
- [PAGE 7] "a χ2 -test of independence yields a p-value of < 2.2 × 10−16"

I'll include these.

Now write it all out in XML format.
</NATIVE_REASONING>

<THINK_TRACE>
The causal chain in this manuscript runs through at least five sequential informational and biomechanical hops: (1) a center-field camera optically captures the catcher’s hand signal; (2) an audio spectrogram classifies a pre-pitch “bang” as present or absent; (3) the bang is interpreted by the batter as a probabilistic indicator that an off-speed pitch is coming; (4) that belief alters the batter’s swing decision and swing mechanics; and (5) conditional on contact, exit velocity is measured by Statcast and mapped to batted-ball distance. Each hop is lossy. Hop (2) is the weakest link: the paper itself states that the absence of a bang is inconclusive because it could signal either a fastball or a failed decode [PAGE 3]. This creates non-ignorable misclassification in the treatment indicator. The model treats every “no bang” observation as an untreated control, but some fraction of those controls actually received the sign through another channel or correctly inferred the pitch type without the bang, which attenuates the estimated treatment effect toward zero.

A second gray zone is the divergence between the unadjusted and adjusted swing effects. The raw Table 2 comparison shows an odds-ratio statistic of 0.793 (95% CI: 0.69678, 0.9023; p = 3.706 × 10−4) for swinging given a bang versus no bang [PAGE 8], whereas the fully adjusted GLMM yields an OR of 0.725 (95% CI: 0.618, 0.850) [PAGE 12]. The movement away from the null after controlling for called-strike probability (CSP), pitch count, and pitch type indicates that bangs are not randomly assigned across pitch contexts; they are concentrated on off-speed pitches (23.7%–27.6% bang prevalence for CH/CU/SL versus 2.3% for fastballs) [PAGE 7 Table 1]. Because off-speed pitches are harder to hit, a naive comparison would underestimate the bang’s value; the adjustment recovers a larger penalty on swinging, consistent with batters laying off off-speed offerings they now recognize as low-percentage swings.

The contact model introduces selection bias by construction: it conditions on the batter having already swung [PAGE 13]. Thus the 80% increase in contact odds on off-speed pitches [PAGE 14] is a complier-average causal effect, not a population-average effect. Batters who swing at a banged off-speed pitch are a positively selected subset—those who trust the signal enough to commit to a swing against a harder-to-hit pitch. The fastball interaction is in the expected negative direction (OR 0.547, bootstrapped CI 0.227 to 1.774) but not statistically significant [PAGE 15], which is itself informative: when the bang misfires and a fastball arrives, batters expecting off-speed fare worse, suggesting second-order strategic vulnerability.

Player-level heterogeneity is severe. Table 5 reports 20 player-specific odds-ratio statistics; ten have confidence intervals containing unity, including core regulars José Altuve and Alex Bregman [PAGE 26]. George Springer dominates the estimate with an OR of 3.810 (95% CI: 2.042, 12.864) based on only 40 banged off-speed swings [PAGE 15–16, Table 5]. Such sparse cells produce extreme bootstrap intervals and violate the GLMM assumption of exchangeable random slopes unless the variance component is large enough to absorb the dispersion. The temporal pattern compounds this concern: the proportion of bangs rose steadily through the first five months of 2017 and then dropped in September [PAGE 6 Figure 1], implying either operational refinement or opponent adaptation. A static model with no time-varying treatment effect risks attributing a decaying informational advantage to a constant coefficient.

Finally, the data-cleaning step from n = 8274 to n = 8201 removed missing pitch IDs, bunts, and ambiguous pitch groups [PAGE 6]. If removals are correlated with bang presence or pitch difficulty—plausible, because ambiguous audio is more likely in loud stadiums—then the analytic sample is not missing at random, and all subsequent effect sizes inherit that selection bias. The breakdown regime is therefore not merely statistical but epistemic: the paper establishes that pitch-type information altered on-field behavior, but it cannot bound how much of the 2017 championship outcome was caused by that information versus pre-existing team talent, because the counterfactual “Astros without the bang system” is never observed in home-game data.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
The study fits a hierarchy of generalized linear mixed models (GLMM). The general linear predictor is written as

\[
g(\eta_{ij}) = \mathbf{X}_{ij}\boldsymbol{\beta} + \mathbf{Z}_{ij}\mathbf{b}_j,\qquad \mathbf{b}_j\sim\mathcal{N}(\mathbf{0},\mathbf{G}),
\]

where \(\eta_{ij}\) is the linear predictor, \(g(\cdot)\) is the link function, \(\mathbf{X}_{ij}\) is the fixed-effect covariate matrix, \(\boldsymbol{\beta}\) is the fixed-effect parameter vector, \(\mathbf{Z}_{ij}\) is the random-effect design matrix, and \(\mathbf{b}_j\) is the random-effect vector [PAGE 10, Equation (1)]. All probabilities are unitless; exit velocity is measured in miles per hour (mph).

Swing model [PAGE 11, Section 3.1]:

\[
\text{logit}(\pi_{ij}) = \beta_0 + \beta_1\text{Bang}_{ij} + \beta_2\text{Fastball}_{ij} + \beta_3\text{CSP}_{ij} + \boldsymbol{\beta}_4^\top\text{PitchCount}_{ij} + u_j,
\]

with a random slope for batter \(j\). The adjusted bang coefficient is \(-0.3219\) (95% CI: \((-0.482, -0.163)\), \(p = 7.59\times10^{-5}\)), yielding an OR of \(0.725\) (95% CI: \((0.618, 0.850)\)), interpreted as an approximate 27.5% reduction in the odds of swinging when a bang is present [PAGE 12, Section 4.1 and Table 3]. The unadjusted Table 2 statistic is OR \(0.793\) (95% CI: \(0.69678, 0.9023\); \(p = 3.706\times10^{-4}\)) based on swing rates of 40.5% with bang versus 46.2% without [PAGE 8, Table 2].

Contact model [PAGE 12, Section 3.2], fitted only to the 3725 swung pitches [PAGE 14]:

\[
\text{logit}(\pi_{ij}) = \gamma_0 + \gamma_1\text{Bang}_{ij} + \gamma_2\text{Fastball}_{ij} + \gamma_3\text{CSP}_{ij} + \gamma_4(\text{Bang}_{ij}\times\text{Fastball}_{ij}) + v_{\text{pitcher}} + v_{\text{batter}} + w_{\text{batter}}\text{Bang}_{ij}.
\]

For off-speed pitches the bang coefficient is \(0.591\) (95% CI: \(0.294, 0.984\)), corresponding to OR \(1.805\) (bootstrapped 95% CI: \(1.342, 2.675\)) [PAGE 14, Section 4.2 and Table 4]. For fastballs the coefficient is \(-0.603\) (OR \(0.547\); bootstrapped CI: \(0.227, 1.774\)), not statistically different from unity [PAGE 15].

Exit-velocity model [PAGE 12, Section 3.3; PAGE 17, Table 6], an identity-link linear mixed model on the 2272 contacted balls with recorded launch speed:

\[
V_{ij} = \delta_0 + \delta_1\text{Bang}_{ij} + \delta_2\text{Fastball}_{ij} + \delta_3\text{CSP}_{ij} + a_{\text{pitcher}} + a_{\text{batter}} + \varepsilon_{ij},\qquad \varepsilon_{ij}\sim\mathcal{N}(0,\sigma^2),
\]

with \(V\) in mph. The bang coefficient is \(2.386\) mph (95% CI: \(0.334, 4.451\); \(p = 0.0230\)) [PAGE 17].

Data and audit figures [PAGE 6]: raw Bangs data \(n=8274\), cleaned \(n=8201\). Pitch-type bang prevalence: change-up 23.7%, curveball 27.6%, fastball 2.3%, slider 26.8%; \(\chi^2\) test of independence \(p < 2.2\times10^{-16}\) [PAGE 7, Table 1]. George Springer case study: 390 total swings, 135 off-speed swings; 31 banged off-speed swings produced only 2 non-contacts (miss rate 5%; 95% CI: \(0.87\%, 18.21\%\)) versus 95 non-banged off-speed swings with 31 non-contacts (miss rate 32.63%; 95% CI: \(23.57\%, 43.12\%\)) [PAGE 15–16].

Physical translation [PAGE 17, citing Nathan 2020]: a ball hit at 100 mph at 30° launch angle travels roughly 385.3 ft; at 102.386 mph it travels 397.9 ft, a gain of 12.6 ft, compared with Fenway Park center-field distance of 389 ft 9 in.

Breakdown and singularity regimes: (i) GLMM convergence fails if random-effect variance components approach the boundary (\(\sigma_b\to0\)); (ii) perfect or quasi-perfect prediction of swing by bang causes logistic separation; (iii) player-specific bootstrap intervals are unreliable when banged off-speed swing counts fall below roughly 20, as for most Table 5 entries; (iv) the CSP covariate inherits any miscalibration from Judge & Brooks (2015); (v) the exit-velocity estimate is conditional on contact and therefore does not generalize to non-contact swings.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage begins with generalized linear mixed models as formalized by McCulloch & Neuhaus (2014) [PAGE 10], bootstrap resampling from Efron & Tibshirani (1986) [PAGE 14, References], and called-strike probability modeling from Judge & Brooks (2015) [PAGE 5]. The measurement infrastructure is Statcast Version 1.0, comprising Trackman Doppler radar and Chryon Hego cameras, which by 2017 had tracked 2.1 million pitches and 400,000 balls in play [PAGE 5]; pitch classifications were outsourced to Pitch Info (Pavlidis & Brooks 2020) because it is regarded as the most accurate pitch-group classifier [PAGE 5].

The historical lineage of sign stealing extends well beyond 2017. Electronic sign stealing in this case used a center-field camera and an audio signal—banging a bat on a metal trash can—relayed to batters [PAGE 3]. Prior precedent includes the 1951 New York Giants’ telescope-based system and various pre-electronic relay methods; the 2018 Boston Red Sox connection through Alex Cora, former Astros bench coach, shows the organizational diffusion of the method [PAGE 3, footnote 1].

The central multi-week trap is temporal non-stationarity. Figure 1 shows the proportion of bangs per month rising through the first five months of 2017 and then dropping in September [PAGE 6]. A researcher who fits a single season-long bang coefficient implicitly assumes the informational half-life was constant, when the September decline suggests either opponent counter-adaptation (more varied sign sequences, mound visits, or mound shielding) or operational decay in the Astros’ own system. A second trap is intraseason attribution: Arthur (2019) dates a material offensive improvement to May 19, 2019—actually May 19, 2017, in context—and links it to the start of the scheme [PAGE 4], but within-season improvement can also reflect pitcher fatigue, sample accumulation, or opponent scouting lag rather than a static treatment effect. A third trap is the carryover fallacy: Figure 4 shows George Springer’s career-high contact percentages in 2017 (78.7%) and 2018 (78.5%) with career-low swinging-strike rates in those same years [PAGE 16]. Because the Bangs data cover only a subset of 2017 home games [PAGE 5–6], one cannot verify whether the 2018 persistence was caused by the same mechanism, by durable mechanical changes, or by regression to a true talent level that was always higher than his early career suggested. Finally, the championship extrapolation is a boundary violation: the paper’s data do not cover away games or the 2017 postseason, so any claim that the scheme “won” the World Series extrapolates beyond the observed support of the treatment.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The first-order model assumes the batter forms the belief \(E[\text{pitch type}\mid\text{bang}] = \text{off-speed}\) and adjusts the swing decision accordingly. The second-order, recursive layer asks what the pitcher does when he suspects the batter knows. If opponents inferred the bang contingency, the optimal counter-trap is to invert the expected mapping: throw fastballs when a bang is heard and off-speed pitches when silence prevails. This produces precisely the sign pattern seen in the contact model for fastballs—a coefficient of \(-0.603\) (OR \(0.547\), 95% CI \(0.227\)–\(1.774\)) [PAGE 15]—which is imprecise but directionally consistent with batters being worse off when they expect off-speed and receive fastball.

Crisis habit regression enters under high-leverage conditions (playoffs, late-inning close games). The bang system functions as an external cognitive crutch: it reduces the batter’s uncertainty about pitch class, lowering the working-memory load of pitch recognition. Under crisis arousal, attentional narrowing can cause batters to revert to pre-2017 swing habits—swinging at pitcher’s pitches, chasing off-speed out of the zone—if the auditory cue is delayed, masked by crowd noise, or doubted because of prior misfires. The model contains no leverage index, inning, or score differential, so it cannot test whether the bang effect weakens exactly when decision quality matters most.

The clock variable is the operational window of the electronic system itself. Because the camera-and-trash-can apparatus was confined to a subset of 2017 home games [PAGE 5–6], its informational value has a finite half-life. Once the league adapted—through sign rotation, increased mound visits, or stadium acoustics monitoring—the bang’s marginal information approaches zero. The paper’s cross-sectional GLMM cannot estimate this decay because it lacks a post-treatment or away-game control period within the 2017 sample. The recursive trap, therefore, is to treat a time-bound informational advantage as a permanent skill upgrade; the correct counter-model is that the bang generated a temporary, opponent-exploitable asymmetry that collapsed once the counter-trap was deployed.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The exit-velocity model finds an average increase of 2.386 mph when contact is made on a banged pitch (95% CI: 0.334, 4.451) [PAGE 17, Table 6]. Using Nathan’s (2020) trajectory calculator, the authors translate this to 12.6 additional feet of carry at a 30° launch angle (385.3 ft at 100 mph vs. 397.9 ft at 102.386 mph), enough to turn a fly ball to center field into a home run at Fenway Park (389 ft 9 in.) [PAGE 17]. This translation is vetoed by unmodeled atmospheric physics: batted-ball distance depends on launch angle, backspin, air density, temperature, humidity, and wind, none of which appear as covariates. A modest headwind or temperature drop can erase 12.6 feet of carry, so the statistical significance of the bang coefficient does not imply a significant home-run effect in actual game conditions.

Biomechanical layer: The bang is an auditory cue arriving before pitch release. Batter reaction latency to a 95 mph fastball is on the order of 150–250 ms, and the swing motor program must be initiated well before contact. If stadium crowd noise exceeds the signal-to-noise threshold of the trash-can sound, or if the bang is struck too late relative to release, the batter cannot update the swing in time. The model assumes successful signal transmission for every “bang = yes” record but offers no acoustic validation, decibel measurements, or latency analysis. Thus the measured effect is conditional on the swing occurring, not proof that the signal was perceptible and actionable on every pitch.

Cross-layer adjudication: The statistical result that bangs affect swing probability, contact probability, and exit velocity conditional on contact is not vetoed by biomechanics for the subset of swings actually taken [PAGES 12–17]. However, the chain from exit velocity to runs, wins, and championship outcomes is vetoed by the absence of weather, park, and defensive covariates, and by the selection bias inherent in conditioning on contact [PAGE 13]. The model proves that pitch-type information altered observable baseball outcomes; it does not prove that the magnitude was sufficient to cause the 2017 World Series outcome without external, unmodeled physical assumptions about how 12.6 feet of additional carry translates into runs under real atmospheric conditions.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Away-game placebo: The electronic bang system operated only in a subset of 2017 home games [PAGE 5–6]. Counterfactual: in Astros away games, where no center-field camera or trash-can relay existed, the contact-rate differential on off-speed pitches should collapse to the league baseline. Verifiable prediction: the odds-ratio statistic for contact on off-speed pitches in 2017 away games should have a 95% confidence interval overlapping unity. Veto condition: if the away-game OR remains above 1.3 with statistical significance, the home-game effect is confounded by persistent team-level talent rather than the bang mechanism.

Scenario 2 — Acoustic masking stratum: The causal mechanism requires the batter to hear the bang. Counterfactual: partition home games by crowd-noise level during the pitcher’s windup (e.g., below vs. above 90 dB estimated from stadium attendance and acoustics). Verifiable prediction: the swing-reduction effect should attenuate toward unity in high-noise strata, because the auditory signal is masked; if the estimated swing OR remains at 0.725 regardless of noise level, then “bang” is proxying for an unobserved visual or tactical cue (such as pitcher sign tipping) rather than an audible trash-can signal. Veto condition: identical effect size across noise strata invalidates the auditory-transmission assumption.

Scenario 3 — Post-disclosure decay: After the November 2019 public disclosure and subsequent MLB security protocols, the informational value of any comparable relay system should approach zero. Counterfactual: compare Astros batter contact rates on identifiable off-speed pitches in 2020–2022 against league-average baselines, controlling for pitcher quality and park. Verifiable prediction: the post-disclosure contact differential should be statistically indistinguishable from zero. Veto condition: a persistent, significant differential after disclosure would imply durable mechanical or scouting improvements unrelated to the 2017 bang system, meaning the original 2017 effect cannot be causally isolated to sign stealing without further controls.
</RLVR_COUNTERFACTUAL_VETOES>