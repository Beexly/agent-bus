---
source: "2017 - A switching dynamic generalized linear model to detect abnormal performances in Major League Baseball - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2017"
pages: 25
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5949
---

<NATIVE_REASONING>
The user wants me to analyze a specific academic paper: "A switching dynamic generalized linear model to detect abnormal performances in Major League Baseball" from the MIT Sloan Sports Analytics Conference 2017 Research Paper Competition.

The output must follow strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully read the source text and cite pages. The text provided includes page markers like "2016 Research Papers Competition Presented by:" followed by page numbers. Let me map out pages:
- Page 1: Abstract start, Introduction start
- Page 2: Introduction continued
- Page 3: Data section, age alignment, Figure 1b mention
- Page 4: Data continued, Figure 2a/2b discussion
- Page 5: Model section, Figure 3
- Page 6: Model section continued, sampling model
- Page 7: Model section continued, ability class and AP transitions
- Page 8: Prior distributions section start
- Page 9: Prior distributions continued, ability class levels
- Page 10: Ability class transitions
- Page 11: Ability class transitions continued
- Page 12: Abnormal and natural performance transitions
- Page 13: Implied marginal prior distributions
- Page 14: MCMC section
- Page 15: Results section start
- Page 16: Posterior distribution for ability class levels
- Page 17: Player level inference, McGwire
- Page 18: Player level inference continued, Rodriguez and Bonds
- Page 19: Player level inference continued, aggregating AP status
- Page 20: Prediction section
- Page 21: Reproducibility section
- Page 22: Sensitivity analysis section
- Page 23: Sensitivity analysis continued
- Page 24: Discussion section
- Page 25: References start
- Page 26: References continued
- Page 27: References end

Wait, the text says "PAGES: 25" but the content goes up to page 27. Let me look at the actual page markers in the text:
- Page 1: After abstract
- Page 2: "2016 Research Papers Competition Presented by: 2"
- Page 3: "2016 Research Papers Competition Presented by: 3"
- Page 4: "2016 Research Papers Competition Presented by: 4"
- Page 5: "2016 Research Papers Competition Presented by: 5"
- Page 6: "2016 Research Papers Competition Presented by: 6"
- Page 7: "2016 Research Papers Competition Presented by: 7"
- Page 8: "2016 Research Papers Competition Presented by: 8"
- Page 9: "2016 Research Papers Competition Presented by: 9"
- Page 10: "2016 Research Papers Competition Presented by: 10"
- Page 11: "2016 Research Papers Competition Presented by: 11"
- Page 12: "2016 Research Papers Competition Presented by: 12"
- Page 13: "2016 Research Papers Competition Presented by: 13"
- Page 14: "2016 Research Papers Competition Presented by: 14"
- Page 15: "2016 Research Papers Competition Presented by: 15"
- Page 16: "2016 Research Papers Competition Presented by: 16"
- Page 17: "2016 Research Papers Competition Presented by: 17"
- Page 18: "2016 Research Papers Competition Presented by: 18"
- Page 19: "2016 Research Papers Competition Presented by: 19"
- Page 20: "2016 Research Papers Competition Presented by: 20"
- Page 21: "2016 Research Papers Competition Presented by: 21"
- Page 22: "2026 Research Papers Competition Presented by: 22"
- Page 23: "2026 Research Papers Competition Presented by: 23"
- Page 24: "2016 Research Papers Competition Presented by: 24"
- Page 25: "2016 Research Papers Competition Presented by: 25"
- Page 26: "2016 Research Papers Competition Presented by: 26"
- Page 27: "2016 Research Papers Competition Presented by: 27"

Okay, I'll cite [PAGE N] where appropriate based on these markers.

Key elements from the paper:
- sDGLM (switching Dynamic Generalized Linear Model)
- Detects abnormal performances in MLB (home run totals)
- Binomial sampling model: y_i,t ~ Binomial(N_i,t, μ_i,k,z,t)
- Log odds: η_i,k,z,t = logit(μ_i,k,z,t)
- η = F' Θ where Θ is (K+1)×1 vector containing θ_k,t for k=1..K and θ_AP,t
- θ_k,t follows random walk: Θ_t = Θ_{t-1} + ω_t, ω_t ~ N(0, W_t)
- W_t = 0.5 × C_0
- Ability class γ_i,t ∈ {1,...,K}, K=15
- AP status ζ_i,t ∈ {0,1}
- Transition matrices Q^γ_t and Q^ζ_t are sticky Markov chains
- α = 5 stickiness parameter
- Age-based transitions: increase until 28, symmetric 29-32, decrease after 32
- Prior for θ_k,0: Gaussian with means equally spaced on log odds interval [-4.5, -2.25], corresponding to probability [0.01, 0.095]
- Prior variance chosen so neighboring densities intersect at fraction β of max density
- θ_AP,0 ~ N(0.4, 0.001)
- Stationary distribution of AP chain: 5-7% (from Mitchell Report 2003 anonymous testing)
- Polya-Gamma data augmentation (Polson et al., 2013)
- MCMC: 20,000 iterations, 10,000 burn-in, thin by 10 → 1,000 samples
- 8 parallel chains for reproducibility
- Known PED users: Barry Bonds, Mark McGwire, Alex Rodriguez flagged; Derek Jeter not flagged
- Prediction: 1990-2005 training, forecast 2006; competitive with Jensen et al. (2009), Pecota, Marcel
- AP increases home run probability: for 5% baseline hitter, AP adds ~3.7 percentage points in late 30s (to 8.7%), ~1.75x increase, ~18 home runs per 500 at bats
- At age 40, expected proportion with abnormal performance is 15%

Now I need to structure the response with the exact XML sections. Each section needs substantial content. Total >= 1,000 words. THINK_TRACE needs >= 400 words.

Let me draft each section.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. I need to discuss the statistical mechanics of the model, how the switching DGLM works, the identifiability problem between ability class and AP status, the Polya-Gamma augmentation, the sticky Markov transitions, the age-based asymmetry, the selection bias handling, and potential failure modes/gray zones (e.g., late-career natural spikes being misclassified, the 15% at age 40 issue, K sensitivity). Must be >= 400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations, units, page citations, breakdown. I need to write out the model equations:
- y_i,t | N_i,t, μ_i,k,z,t ~ Binomial(N_i,t, μ_i,k,z,t)
- μ_i,k,z,t = logistic(η_i,k,z,t) = 1/(1 + exp(-η_i,k,z,t))
- η_i,k,z,t = F_{i,k,z,t}' Θ_t
- Θ_t = (θ_1,t, ..., θ_K,t, θ_AP,t)' ∈ R^{K+1}
- Θ_t = Θ_{t-1} + ε_t, ε_t ~ N(0, W_t)
- W_t = 0.5 C_0
- Prior: θ_k,0 ~ N(m_k,0, σ_k^2), m_k,0 equally spaced on [-4.5, -2.25] log-odds
- Probability interval [0.01, 0.095]
- σ_k^2 = - (something)^2 ... the text has garbled math: "𝜎"# = − '( <u>(*+,-345 (6),/0 *+,/)</u><sup>2</sup> .   In the analysis presented here, 𝛽= '8# ~~.~~" — this is garbled OCR. I should note the breakdown regime: the OCR-corrupted equation for variance cannot be reliably transcribed, but the paper states neighboring densities intersect at fraction β of max density. I should not invent a fake equation. I'll state what is legible and flag the OCR singularity.
- Q^γ_t,k,j transition probabilities with stickiness α=5
- Age regimes: t ≤ 28 (favor upward), 29 ≤ t ≤ 32 (symmetric), t ≥ 33 (favor downward, exponent decays 4x faster for downward)
- ζ stationary distribution 5-7%
- Polya-Gamma augmentation: ω_i,t ~ PG(N_i,t, 0), likelihood enters through κ_i,t = y_i,t - N_i,t/2
- MCMC details: 20k iterations, 10k burn-in, thin 10, 5 hours single core
- Cite pages for each.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss Fair (2008) peak at 28, Jensen et al. (2009) B-splines, Albert (2002) quadratic, Berry et al. (1999) nonparametric, Mitchell Report (2007), Polson et al. (2013) Polya-Gamma, Carter & Kohn (1994) FFBS, Shumway & Stoffer (1991) switching state-space, West & Harrison (1997) discount factors. Multi-week traps: the model's stationarity assumption across 1990-2014 calendar years (age alignment assumes era-invariance), the sticky Markov assumption implying PED use persists once started (may miss one-off usage), the 5-7% stationary prior from 2003 testing applied uniformly across ages despite no age-specific data, and the late-career inflation of AP flags (15% at age 40) potentially confusing natural decline outliers with enhancement.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a more abstract section. "Crisis habit regression" = under pressure (e.g., contract year, decline phase), players revert to previous habits or the model regresses to mean. "Counter-trap" = elite players naturally have late-career spikes that mimic PED jumps, causing false positives. "Clock" = aging curve is treated as deterministic (peak 28, decay after 32) but individual biological clocks vary. I need to discuss how the model's prior imposes a collective aging clock, how AP status might absorb regression-to-the-mean crises, and how the counter-trap is that the model flags natural elite variance as abnormal because K is fixed and sticky transitions prevent rapid class exits.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This section should discuss what physical/biomechanical factors could veto or confirm the statistical flags. Since the paper is purely statistical, I need to discuss the absence of biomechanical/weather covariates and how that creates a veto layer: the model assumes effects are absorbed into latent ability class, but physical factors (bat speed, launch angle, exit velocity, ballpark dimensions, weather, humidor, altitude) are not modeled. A veto proof would require: (1) exit velocity/launch angle data showing abnormal mechanical output concurrent with AP flag, (2) weather/ballpark normalization to rule out environmental inflation, (3) injury/physical condition data. Without these, statistical flags are not veto-proof; they are correlational. I'll structure this as a cross-layer adjudication framework.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning with Verifiable Rewards? Or just verifiable scenarios. I'll propose three counterfactual veto scenarios:
1. Player flagged AP at age 38 with 50 HR, but Statcast shows exit velocity decline and increased fly-ball rate due to park change (Coors Field). Prediction: veto the AP flag; environmental/confounding layer overrides.
2. Player flagged AP at age 35, but reveals therapeutic use exemption (TUE) for testosterone due to hypogonadism documented before season. Prediction: veto as medical necessity, not performance enhancement; model lacks medical covariate layer.
3. Player flagged AP at age 24 (young), breaking out from class 5 to class 15 with no prior PED history. Prediction: veto because prior P(K=15) is low and selection bias at young ages means elite entrants naturally appear in high classes; model's sticky Q^γ suppresses rapid class ascent, causing false positive.

Each needs a verifiable prediction.

Word count: I need to ensure >= 1,000 words total. THINK_TRACE >= 400. Let me aim for roughly:
- THINK_TRACE: ~500 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~300 words
- RETROCAUSAL_GENEALOGY: ~250 words
- RECURSIVE_THEORY_OF_MIND: ~250 words
- CROSS_LAYER_VETO_ADJUDICATION: ~250 words
- RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1800 words. Good.

Important constraints:
- No betting lines. I must avoid "odds" in the betting sense. However, the paper uses "log odds" as a statistical term. The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This is tricky because the paper literally uses "log odds" and "odds ratio." I think the intent is to not discuss betting odds. But "log odds" is a statistical term. To be safe, I should avoid saying "betting odds" or any gambling context. I can use "log-odds" as a statistical transform because it's in the source, but I must be careful not to frame it as betting. Actually, the invariant says "Never mention ... odds." That might include "log odds." But the source uses it extensively. I think I can mention "log-odds scale" as a statistical term since it's not a betting line, but I should avoid any gambling context. Let me re-read: "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." This is likely to prevent me from outputting betting advice. Using "log-odds" in a statistical model context should be fine as long as I don't present it as betting. However, to be extremely safe, I might phrase it as "logit transform" or "logarithmic probability scale" instead of "odds." But the source says "log odds." I think citing the source's terminology is acceptable. I will use "log-odds (logit)" but not discuss betting.

- Zero toy equations: No fake ratios. I must use real equations from the paper or clearly state if OCR is garbled. I will not invent Force/Fatigue or anything. I'll write the actual model equations.

- Cite exact [PAGE N] markers and verbatim quotes where source pages provided. I'll include quotes like "The maximum home run total for a single season in MLB history is 73" [PAGE 4] etc.

Let me start writing.

First, THINK_TRACE. I need deep multi-hop derivation.
- Start with data: Lahman DB, 1950-2014, split into WWII era (1950-1989) and PED era (1990-2014). Alignment by age assumes stationarity across calendar years within PED era.
- Selection bias: only elite players at young/old ages, causing flat marginal HR distribution across age.
- Model: hierarchical Bayesian sDGLM. Binomial likelihood conditioned on at-bats N_i,t.
- Latent states: ability class γ (K=15 ordered classes), AP status ζ binary.
- Log odds η = F' Θ, Θ random walk with innovation covariance W = 0.5 C_0.
- Transitions: sticky Markov, α=5, age-dependent drift (up until 28, flat 29-32, down after 32).
- AP chain stationary 5-7% based on Mitchell Report 2003 anonymous testing.
- Polya-Gamma augmentation enables conditionally Gaussian FFBS.
- Gray zones: identifiability between γ and ζ (is it elite class or AP?). Prior tries to separate by placing mass on high natural HR counts. But Bonds at 32 (42 HR) not flagged until after 35; Rodriguez at 31 (54 HR) not flagged. This means the model has low sensitivity for abrupt spikes that occur within the natural class envelope.
- Breakdown regime: at age 40, posterior expects 15% abnormal. This is a potential false positive cluster because natural decline + selection bias (only elite remain) creates outliers that look like AP. Also K sensitivity: fewer classes → more players in top class → lower elite threshold → more AP flags; more classes → fewer AP flags. OCR-corrupted variance equation means exact prior precision is unrecoverable from text alone.
- Multi-hop: Data → alignment → prior → likelihood → augmentation → inference → flag → identifiability → prediction. Each hop has assumptions that can fail.

I'll write this out carefully.

SOURCE_OPERATORS_AND_EQUATIONS:
- Write equations in LaTeX.
- Cite pages.
- Include verbatim quotes for key numbers (e.g., 5-7%, α=5, K=15, N=20,000 iterations).
- Note OCR breakdown for σ_k^2 equation.

RETROCAUSAL_GENEALOGY:
- Lineage: Fair (2008) peak 28, Jensen et al. (2009) B-splines + elite indicator, Albert (2002) quadratic, Berry et al. (1999) nonparametric age curves.
- Switching state-space: Shumway & Stoffer (1991), Kim (1994), Fox (2009), Frühwirth-Schnatter (2001).
- Polya-Gamma: Polson et al. (2013).
- FFBS: Carter & Kohn (1994), Frühwirth-Schnatter (1994).
- Mitchell Report (2007) for 5-7% prior.
- Multi-week traps: calendar-era stationarity (1990-2014 assumed constant), sticky Markov implies PED persistence (misses transient use), uniform stationary AP prior across ages despite no age-specific evidence, 15% at age 40 creates a late-career false-positive trap where natural decline is pathologized.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under decline pressure (late 30s), players may change approach (launch angle, exit velocity focus) causing natural statistical break that model reads as AP. The model's sticky AP chain (once 1, likely stays 1) means a single crisis season can trigger persistent flag.
- Counter-trap: Naturally elite players (e.g., Bonds pre-35, Rodriguez pre-28) have high variance; model's fixed K and sticky Q^γ make it hard to exit top class, so any spike is attributed to AP rather than class. But since top class is sticky, they stay there, and AP may not trigger unless the spike exceeds class envelope. This creates a "counter-trap" where true elites are under-flagged mid-career but over-flagged late-career.
- Clock: The model imposes a collective physiological clock (peak 28, decay after 32). Individual aging clocks vary. A player with delayed peak (e.g., late bloomer) violates the clock and may be misclassified. The model's transition matrices hard-code this clock, so counterfactual players who peak at 34 are structurally penalized.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: exit velocity, launch angle, bat speed, hard-hit rate. Not in model.
- Biomechanical: injury status, PED physiological effects (muscle mass, recovery). Not in model except via ζ.
- Weather/environmental: ballpark factors, temperature, humidity, altitude (Coors), humidor. Absorbed into latent class per paper ("we assume that these effects are absorbed into a player’s latent ability class membership") [PAGE 6].
- Veto proof: A statistical AP flag is not veto-proof without orthogonal physical data. Proposed adjudication: if AP flag coincides with (a) documented park change to hitter-friendly environment, (b) Statcast exit velocity decline or unchanged mechanics, or (c) documented injury/TUE, then veto. The paper's discussion explicitly says future work should include injury info and drug test results [PAGE 24]. Thus current layer is veto-vulnerable.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Environmental confound: Player flagged AP at age 36 after moving to Coors Field, HR total jumps 30→52. Statcast shows launch angle unchanged, exit velocity +1 mph (within measurement error). Veto: park effect confounds latent class. Prediction: after park-factor normalization, posterior E[ζ|y] drops below 0.2.
2. Medical exemption: Player flagged AP at age 39, HR increase 15→28. Documented TUE for testosterone replacement due to pituitary disorder predating season. Veto: physiological normalization, not enhancement. Prediction: with medical covariate layer, model reclassifies as natural ability class shift rather than AP.
3. Young elite outlier: Player age 22, no PED history, jumps from class 6 to class 14, 8→34 HR. Sticky Q^γ with α=5 makes rapid ascent unlikely, so model assigns AP status to explain jump. Veto: selection bias at entry age; legitimate late bloomer/physical maturation. Prediction: relaxing Q^γ stickiness for entry-age transitions or increasing K reduces E[ζ|y] to <0.1.

I need to make sure total word count is high enough. Let me write the sections now, being thorough.

One concern: The invariant says ">= 1,000-WORD DEPTH across these exact XML sections." So the sum of all sections should be >= 1000 words. I'll ensure each is substantial.

I also need to avoid using "odds" in a betting sense. I will use "log-odds" as statistical term but perhaps qualify it as "logit transform" to be safe. However, the source uses "log odds." I'll cite it directly.

Let me draft.

---

Page mapping verification:
- Page 6: "The unobserved probability, μi,k,z,t, is the logistic transformation of a parameter, ηi,k,z,t." and "The log odds ηi,k,z,t is the sum of the level..." and "We assume that these effects are absorbed into a player’s latent ability class membership."
- Page 7: Q matrices.
- Page 8: Priors start.
- Page 9: "The prior means associated with each ability class, mk,0, are chosen to be equally spaced on the log odds interval [−4.5, −2.25]. On the probability scale, this interval corresponds to [0.01, 0.095]." and "In this analysis, we let K = 15."
- Page 10: α=5.
- Page 12: stationary distribution 5-7%.
- Page 14: Polya-Gamma, MCMC 20,000 iterations, 10,000 burn-in, thin by 10, five hours.
- Page 16: θAP posterior.
- Page 17: McGwire 70 HR 1998, age 34.
- Page 18: Bonds 42 HR at 32 not flagged until after 35; Rodriguez 54 HR at 31 not flagged.
- Page 19: age 40 expected proportion 15%.
- Page 20: prediction 1990-2005, forecast 2006; Jensen et al., Pecota, Marcel.
- Page 24: discussion, outside information, injury, drug tests.

Okay, writing now.

I need to be careful about verbatim quotes. I'll quote short phrases exactly as they appear.

Let's produce the final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The paper’s causal chain begins with data preprocessing. It draws offensive statistics from Lahman’s Baseball Database, discarding 1871–1949 as irrelevant to modern baseball and partitioning 1950–2014 into a post-World War II era (1950–1989) and a PED era (1990–2014) [PAGE 3]. The critical modeling hop is temporal re-indexing: players are aligned by age rather than calendar year, under the explicit assumption that “from 1990 to 2014, the factors that influence the length and productivity of a career are constant” and that “the only factor that matters in a player’s home run production is that the player is 25 years old” [PAGE 3]. This erases calendar-era variation (ballpark changes, humidor adoption, strike-zone enforcement) and replaces it with a stationary age process. A selection-bias hop follows: only elite players enter MLB at young ages, and only elite players survive into their late 30s and early 40s, which flattens the marginal home-run distribution across age [PAGE 4].

The second hop is the generative model. Home-run totals y_{i,t} are modeled as Binomial(N_{i,t}, μ_{i,k,z,t}), conditioned on at-bats N_{i,t} [PAGE 6]. The probability μ is a logistic transform of a log-odds linear predictor η_{i,k,z,t} = F_{i,k,z,t}^{′}Θ_t, where Θ_t ∈ ℝ^{K+1} stacks K natural ability-class log-odds levels θ_{k,t} and one abnormal-performance (AP) increment θ_{AP,t} [PAGE 6]. The state vector Θ_t follows a random walk with innovation covariance W_t = 0.5 C_0, interpreted as a discretized first-order Taylor approximation of smooth time-varying ability curves [PAGE 6]. The latent class γ_{i,t} ∈ {1,...,K} (K=15) and AP indicator ζ_{i,t} ∈ {0,1} each follow sticky, age-indexed Markov chains with transition matrices Q^γ_t and Q^ζ_t [PAGE 7]. Stickiness is governed by α=5: a player in an elite class at t is likely to remain elite at t+1, and an abnormally enhanced player at t is likely to remain enhanced at t+1 [PAGE 7]. The ability-class transition kernel is asymmetric about age 28: transitions upward are favored through age 28, symmetric from 29–32, and strongly downward-favored after 32, with the downward exponent decaying four times faster than the upward exponent [PAGES 10–11]. This hard-codes Fair (2008)’s peak-at-28 physiological clock into the prior.

The third hop is prior elicitation and inference. Class-level means m_{k,0} are equally spaced on the log-odds interval [−4.5, −2.25], corresponding to probabilities [0.01, 0.095] [PAGE 9]. The AP increment prior is θ_{AP,0} ~ N(0.4, 0.001), tightly concentrated on significant inflation [PAGE 9]. The AP chain’s stationary distribution is set to 5–7%, anchored to MLB’s 2003 anonymous testing finding reported in the Mitchell Report [PAGE 12]. Because the likelihood is binomial with a logit link, the authors use Polya-Gamma data augmentation (Polson et al., 2013) to render the state updates conditionally Gaussian, enabling forward filtering backward sampling (FFBS) within a Gibbs sampler [PAGE 14]. The chain runs 20,000 iterations, discards 10,000 as burn-in, and thins by 10, yielding 1,000 posterior draws in approximately five hours on a single core [PAGE 14].

Gray-zone audit: The model’s most consequential failure mode is identifiability between γ and ζ. Is a 50-home-run season evidence of elite natural ability (class 15) or AP inflation? The authors mitigate this by placing prior mass on historically high natural home-run totals so that “we don’t want all elite home run hitters to be automatically flagged as abnormal” [PAGE 13]. Yet the results show Bonds hitting 42 home runs at age 32 without being flagged as abnormal until after age 35, and Rodriguez hitting 54 home runs at age 31 without definitive flagging [PAGE 18]. This indicates insensitivity to abrupt spikes that remain within the upper tail of the natural class envelope. A second gray zone is the late-career AP prevalence: the posterior expected proportion of abnormal performers rises to 15% at age 40 [PAGE 19]. Because the sample at age 40 consists only of survivors—players whose natural ability remains high—the model risks pathologizing natural late-career outliers as AP. A third gray zone is the OCR-corrupted prior-variance equation on page 9, where the text asserts σ_k^2 is set so neighboring densities intersect at fraction β of maximum density but the LaTeX is garbled (“𝜎”# = − '( ...”); the exact β value is unreadable in the provided text, creating a reproducibility singularity for the prior precision. Fourth, the sticky Markov assumption on ζ implies that once AP status is activated, it persists; transient or one-off PED use would be misclassified as sustained enhancement, and a single anomalous season can generate a persistent flag. Fifth, the model absorbs park, weather, and position effects into latent ability class membership rather than modeling them explicitly [PAGE 6], meaning environmental confounds (e.g., Coors Field, humidor removal) can be absorbed into ζ. These gray zones imply that the sDGLM is a screening tool for investigative resource allocation, not a disciplinary instrument, as the discussion explicitly states [PAGE 24].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX, units, page citations, and equation breakdown.

Sampling model (binomial likelihood), page 6:
\[
y_{i,t} \mid N_{i,t}, \mu_{i,k,z,t} \sim \operatorname{Binomial}(N_{i,t}, \mu_{i,k,z,t}),
\]
where \(y_{i,t}\) is home-run count (dimensionless count), \(N_{i,t}\) is at-bats (dimensionless count), and \(\mu_{i,k,z,t}\) is the probability of a home run per at-bat (unitless, in \([0,1]\)). Observations are conditionally i.i.d. for players sharing age, ability class, and AP status [PAGE 6].

Logit link and state vector, page 6:
\[
\mu_{i,k,z,t} = \operatorname{logit}^{-1}(\eta_{i,k,z,t}) = \frac{1}{1+\exp(-\eta_{i,k,z,t})},
\qquad
\eta_{i,k,z,t} = F_{i,k,z,t}^{\prime}\Theta_t .
\]
\(\Theta_t = (\theta_{1,t}, \ldots, \theta_{K,t}, \theta_{AP,t})^{\prime} \in \mathbb{R}^{K+1}\) stacks natural class log-odds levels and the AP log-odds increment. \(F_{i,k,z,t}\) is a dynamic regression vector selecting the relevant components; e.g., for \(K=3\), \(\gamma_{i,t}=2\), \(\zeta_{i,t}=1\), \(F_{i,2,1,t} = (0,1,0,1)^{\prime}\) [PAGE 6].

State evolution (random walk), page 6:
\[
\Theta_t = \Theta_{t-1} + \varepsilon_t, \qquad \varepsilon_t \sim \mathcal{N}(0, W_t), \qquad W_t = 0.5\, C_0 ,
\]
where \(C_0\) is the prior covariance matrix for \(\Theta_0\). This is a discretized first-order Taylor approximation of smooth age-varying functions [PAGE 6].

Prior class levels, page 9:
\[
\theta_{k,0} \sim \mathcal{N}(m_{k,0}, \sigma_k^2), \qquad m_{k,0} \text{ equally spaced on } [-4.5, -2.25] \text{ (log-odds)},
\]
corresponding to probabilities \([0.01, 0.095]\). The analysis sets \(K=15\) [PAGE 9]. The prior variance \(\sigma_k^2\) is chosen so neighboring Gaussian densities intersect at fraction \(\beta\) of peak density; the exact \(\beta\) and closed-form \(\sigma_k^2\) expression are OCR-garbled in the source text (“𝜎”# = − '( ...”), constituting a transcription breakdown regime [PAGE 9].

AP prior, page 9:
\[
\theta_{AP,0} \sim \mathcal{N}(0.4, 0.001),
\]
tightly concentrated on significant log-odds inflation [PAGE 9].

Transition kernels, pages 7–11:
\[
\gamma_{i,t} \mid \gamma_{i,t-1} \sim Q^\gamma_t, \qquad \zeta_{i,t} \mid \zeta_{i,t-1} \sim Q^\zeta_t .
\]
Stickiness parameter \(\alpha = 5\) [PAGE 10]. For age \(\le 28\), upward class transitions are favored; for ages 29–32, transitions are symmetric; for age \(\ge 33\), downward transitions are favored with exponent decaying four times faster for \(k > k'\) than for \(k < k'\) [PAGES 10–11]. The AP chain is time-homogeneous with stationary distribution set to 5–7%, based on the 2003 anonymous testing finding in the Mitchell Report [PAGE 12].

Polya-Gamma augmentation, page 14:
\[
y_{i,t} \text{ augmented by } \omega_{i,t} \sim \operatorname{PG}(N_{i,t}, 0), \qquad \kappa_{i,t} = y_{i,t} - \frac{N_{i,t}}{2}.
\]
This yields conditionally Gaussian updates for \(\Theta_t\), permitting FFBS [PAGE 14].

MCMC specification, page 14:
20,000 Gibbs iterations, 10,000 burn-in, thinning interval 10 \(\rightarrow\) 1,000 post-burn-in samples; approximately five hours on a single core. Eight parallel chains were run for reproducibility [PAGES 14, 21].

Quantitative results, pages 16–20:
For a baseline natural 5% home-run hitter, activating the AP indicator raises the home-run probability by approximately 3.7 percentage points in the late 30s (to 8.7%), a 1.75\(\times\) multiplicative increase, worth roughly 18 home runs per 500 at-bats [PAGE 16]. At age 40, the posterior expected population proportion with abnormally inflated performance is 15% [PAGE 19]. Prediction exercise: train 1990–2005, forecast 2006; sDGLM is competitive with Jensen et al. (2009), Pecota, and Marcel [PAGE 20]. Bonds, McGwire, and Rodriguez are flagged; Jeter is not [PAGES 16–18].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage, plus multi-week structural traps.

The sDGLM inherits from a multi-decade lineage of baseball aging models. Berry et al. (1999) modeled age effects nonparametrically as deviations from a mean aging curve [PAGE 1]. Albert (2002) used a quadratic function for offensive ability [PAGE 1]. Fair (2008) extended this with two quadratics joined at the peak and estimated peak performance at approximately age 28 [PAGE 1]. Jensen et al. (2009) introduced cubic B-splines and an elite ability indicator [PAGE 1]. The present paper rejects globally smooth curves because “abrupt changes sometimes occur in player performance,” citing Nieswiadomy et al. (2012)’s finding of two structural breaks in Barry Bonds’s career [PAGE 2]. The switching state-space machinery traces to Shumway and Stoffer (1991), Kim (1994), Fox (2009), and Frühwirth-Schnatter (2001) [PAGE 14]. Computationally, the Polya-Gamma augmentation follows Polson et al. (2013), and the FFBS step follows Carter and Kohn (1994) and Frühwirth-Schnatter (1994) [PAGE 14]. The 5–7% AP stationary prior is empirically anchored to the Mitchell Report (2007), which documented anonymous 2003 MLB testing [PAGE 12].

Multi-week traps: First, the calendar-era stationarity trap. The model assumes all factors influencing career length and productivity are constant across 1990–2014 when aligned by age [PAGE 3]. Over a multi-week or multi-season window, this ignores ballpark configuration changes, humidor adoption, strike-zone enforcement shifts, and baseball composition changes, any of which can create spurious structural breaks misattributed to AP status. Second, the sticky-persistence trap. Because \(Q^\zeta_t\) makes AP status autocorrelated, a player who uses a performance enhancer for a single multi-week window (e.g., a brief cycle during a contract year) will have posterior mass smeared across adjacent seasons, producing false-positive persistence. Third, the age-clock trap. The transition matrices hard-code a collective physiological clock: ability rises until 28, plateaus 29–32, and decays after 32 [PAGES 10–11]. A player whose biological clock is delayed—e.g., a late bloomer peaking at 34—is structurally penalized; the model will either force him into an inappropriate ability class or flag his natural late surge as AP. Fourth, the survivor-sampling trap at old ages. Because only elite players remain in the sample at ages 38–40, the model’s posterior AP prevalence rises to 15% at age 40 [PAGE 19], meaning natural late-career outliers among survivors are systematically over-flagged relative to the full population.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression: Under performance pressure—contract years, decline phases, or injury comebacks—a player may mechanically alter his approach (launch-angle revolution, pull-rate changes, increased exit-velocity intent) and produce a statistical break that looks like a step change in ability. The sDGLM has no covariate for mechanical approach changes; such a break is absorbed either into a class transition or into \(\zeta_{i,t}\). Because the AP chain is sticky, a single crisis season can trigger a persistent \(\zeta=1\) flag that regresses slowly even after the player reverts to prior habits. This is a “habit regression” failure: the model treats a temporary mechanical crisis as a permanent latent-state shift.

Counter-trap: The model’s fixed \(K=15\) ordered classes and sticky \(Q^\gamma_t\) create a counter-trap for naturally elite players. Bonds and Rodriguez are members of the highest natural ability classes yet their most extreme seasons (Bonds at 32, Rodriguez at 31) were not definitively flagged as abnormal [PAGE 18]. The logic is that the elite class already carries high prior mass on extreme home-run totals, so the model attributes the spike to \(\gamma\) rather than \(\zeta\). Conversely, late in the career, the same elite class’s prior variance shrinks or the class decays per the age kernel, so a natural residual spike is more likely to be assigned to \(\zeta\). The counter-trap is therefore asymmetric: true elites are under-flagged in their mid-career peak and over-flagged in their late decline.

Clock: The model imposes an exogenous aging clock through age-indexed transition matrices that favor upward moves until 28, symmetry until 32, and decay thereafter [PAGES 10–11]. This clock is population-average, not individual. A recursive theory of mind must recognize that the model “believes” all players share this clock; when a specific player’s biological aging deviates (delayed peak, rapid early maturation, injury-induced early decay), the model interprets the deviation as either class instability or AP activation. There is no individual random effect on the clock itself, only on the class level \(\theta_{k,t}\). Thus the model cannot distinguish a player who is naturally a late bloomer from a player whose late bloom is pharmacologically assisted; both appear as violations of the imposed clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and environmental veto proofing.

The sDGLM is a purely statistical, likelihood-based screen. It explicitly assumes that covariates such as position and ballpark “are absorbed into a player’s latent ability class membership” [PAGE 6]. This means no physical, biomechanical, or weather layer currently exists inside the model to veto a statistical flag. A cross-layer adjudication framework would require three orthogonal veto inputs.

Physical layer: Exit velocity, launch-angle distribution, hard-hit rate, and bat speed (Statcast or equivalent). If a player is flagged AP at age \(t\) but his exit-velocity percentile declines or remains flat while his home-run total rises, the statistical flag is confounded by park, weather, or sequencing luck rather than enhanced physical output. The paper’s discussion acknowledges future work should integrate “a player’s physical condition and injury information across age” [PAGE 24], confirming this layer is absent.

Biomechanical/medical layer: Documented therapeutic-use exemptions (TUEs), injury timelines, and drug-test results. The discussion states the method is “not intended to replace drug testing programs or form the basis of disciplinary actions” and should be used for “directing drug testing and investigative resources” [PAGE 24]. Thus a positive drug test or documented TUE should veto or confirm the AP inference; absent this, \(\zeta_{i,t}\) is an unexplained residual, not a causal mechanism.

Weather/environmental layer: Ballpark factors, temperature, humidity, altitude (e.g., Coors Field), and humidor status. Because the model aligns by age and assumes era-invariance from 1990–2014 [PAGE 3], a player traded to a hitter-friendly park can generate an apparent structural break in home-run rate that the model attributes to \(\zeta\). A veto proof requires park-factor normalization before inference.

Veto adjudication rule: An sDGLM AP flag is veto-proof only if (i) exit-velocity/launch-angle data show concurrent abnormal physical output, (ii) no park-change or weather confound explains the rate shift, and (iii) no medical/TUE or testing record provides an alternative explanation. Without all three, the flag remains a statistical hypothesis for investigative triage, not a confirmed abnormality.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1 (environmental confound): A player aged 36 is flagged with posterior \(E[\zeta_{i,t}\mid y] > 0.8\) after his home-run total jumps from 30 to 52 following a mid-season trade to a hitter-friendly park. Statcast data show exit velocity unchanged (within 1 mph) and launch-angle distribution stable; the home-run increase is fully explained by park-factor normalization (short right-field porch, higher average temperature). Veto: reject the AP flag because the likelihood gradient is driven by an omitted environmental covariate absorbed into \(\Theta_t\) [PAGE 6]. Prediction: after re-estimating with park-adjusted at-bat weights or an explicit park-factor covariate, posterior \(E[\zeta_{i,t}\mid y]\) falls below 0.2, and the player’s ability-class posterior remains in the same natural class.

Scenario 2 (medical exemption): A player aged 39 is flagged AP after increasing from 15 to 28 home runs. Medical records document a pre-existing pituitary disorder treated with a therapeutic-use exemption for testosterone, initiated before the season and approved by the league. Veto: the physiological change is medically necessitated normalization, not unnatural performance inflation; the AP prior’s 5–7% stationary assumption [PAGE 12] does not cover therapeutic restoration. Prediction: integrating a medical-covariate indicator into \(\eta_{i,k,z,t}\) would reassign the increase to a shifted natural class level \(\theta_{k,t}\) rather than \(\theta_{AP,t}\), driving \(E[\zeta_{i,t}\mid y]\) below 0.1.

Scenario 3 (young elite outlier / stickiness artifact): A 22-year-old rookie with no prior PED history jumps from an estimated ability class 6 to class 14, producing 34 home runs after 8 in his limited prior exposure. The sticky transition matrix \(Q^\gamma_t\) with \(\alpha=5\) [PAGE 10] assigns low probability to rapid upward class migration, so the model explains the jump through \(\zeta_{i,t}=1\). Veto: selection bias at entry age means young MLB entrants are already elite [PAGE 4]; the fixed-\(K\) class structure under-represents legitimate rapid maturation. Prediction: relaxing \(Q^\gamma_t\) stickiness for entry-age transitions or increasing \(K\) to 17 reduces posterior \(E[\zeta_{i,t}\mid y]\) below 0.1 and shifts mass to the highest natural class, consistent with the sensitivity analysis showing \(K=17\) lowers AP flags [PAGE 22].
</RLVR_COUNTERFACTUAL_VETOES>