---
source: "Modeling Player and Team Performance in Basketball - Terner, Franks.md"
folder: "/GSE-Research/sports-research-papers/md"
pages: 37
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 6570
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source document (Terner & Franks, "Modeling Player and Team Performance in Basketball"). They want strict adherence to certain invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. When source pages provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations like Force/Fatigue. Need formal LaTeX, units, assumptions, singularity/breakdown regimes.

I need to extract actual equations from the text and present them formally. The document has equations but they are sometimes rendered poorly in markdown (e.g., "where _Di_ is 100 times the difference..."). I need to reconstruct them properly in LaTeX.

Key equations from source:
1. APM model: $D_i = \sum_p \beta_p x_{ip} + \epsilon_i$ where $D_i$ is 100 times point difference in stint $i$, $x_{ip} \in \{1, -1, 0\}$, $\epsilon_i$ residual.
2. RAPM ridge: $\hat{\beta} = \arg\min_\beta \|D - X\beta\|^2 + \lambda \beta^T\beta$, solution $\hat{\beta} = (X^T X + \lambda I)^{-1} X^T D$.
3. EPV definition: $E[Z_i | X_{i0}, ..., X_{it}]$ where $Z_i \in \{0, 2, 3\}$.
4. EPV macro/micro: $E[Z | C_{\delta t} = c]$ etc.
5. EPVA: $EPVA(p) = \frac{1}{N_p} \sum_{(s,e) \in T^p} (v_e - v_s^{(r(p))})$ roughly. Actually text: "A player p who possesses the ball starting at time s and ending at time e contributes value $v_{te} - v_{ts}^{(p)}$ over the league average replacement player, r(p)." Need to parse carefully.
6. Shot efficiency logistic regression: $\text{logit}(P(Y_{ip}=1)) = \alpha_{\ell_i p} + \sum_j \beta_j X_{ij}$ maybe. Text: "logistic regression model where $Y_{ip}$ is outcome of i-th shot by player p given J covariates $X_{ij}$ (i.e. defender distance) and $\alpha_{\ell_i,p}$ is a spatial random effect describing baseline shot-making ability of player p in location $\ell_i$."
7. CAR prior: multivariate normal with structured covariance.
8. Shot satisfaction: $Satisfaction(p) = \frac{1}{|T_{shot}^p|} \sum_{i,t \in T_{shot}^p} (v_{it} - E[Z_i | X_{it}, C_t \text{ non-shooting}])$.
9. Production curve: $Y_{pt} = f_p(t) + \epsilon_{pt}$.
10. Hot hand null: $E[Y_{p,t} | Y_{p,t-1}=1, ..., Y_{p,t-k}=1, X_t] \approx E[Y_{p,t}|X_t]$.
11. Defensive matchup: $\mu_{tk} = \gamma_o O_{tk} + \gamma_b B_t + \gamma_h H$.

I need to be careful with [PAGE N] citations. The provided text includes page numbers in the markdown like "1", "2", etc. but they seem embedded. Let's map content to page numbers based on the source text markers. The text shows page breaks with numbers. I can cite pages where content appears. For example:
- Page 1: Abstract, Introduction start.
- Page 2: Section 1.2 Data and tools (box score).
- Page 3: Tracking data, Section 2 intro.
- Page 4: Section 2.2 Spatial perspectives, Figure 1.
- Page 5: Section 2.3 Play evaluation, Figure 2.
- Page 6: Section 3 Player performance, 3.1 General skill.
- Page 7: Section 3.1.1 Regression-based approaches, APM, RAPM.
- Page 8: Section 3.1.2 EPV.
- Page 9: Section 3.2 Production curves.
- Page 10: Section 3.3 Shot modeling, 3.3.1 Shot efficiency.
- Page 11: Figure 3, Rao-Blackwellization.
- Page 12: Section 3.3.2 Shot selection.
- Page 13: Shot satisfaction.
- Page 14: Section 3.3.3 Hot hand, Section 3.4 Defensive ability.
- Page 15: Discussion.
- Page 16: Disclosure, Acknowledgments.
- Page 17-18: Supplementary tables.
- Page 19-25: Literature cited.

Actually the page numbers in the text are shown as standalone numbers between sections. Let's trace:
- After abstract: "1" -> page 1
- After introduction paragraph: "2" -> page 2
- After footnote 1: "3" -> page 3
- After Section 2.2 and Figure 1: "4" -> page 4
- After Figure 2: "5" -> page 5
- After Section 3 intro: "6" -> page 6
- After Section 3.1.1 RAPM: "7" -> page 7
- After EPV section: "8" -> page 8
- After production curves: "9" -> page 9
- After shot modeling intro: "10" -> page 10
- After Figure 3 picture text: "11" -> page 11
- After shot selection multinomial: "12" -> page 12
- After shot satisfaction: "13" -> page 13
- After hot hand / defensive ability start: "14" -> page 14
- After discussion: "15" -> page 15
- After disclosure: "16" -> page 16
- Supplementary table 1: "17" -> page 17
- Supplementary table 2: "18" -> page 18
- Literature cited: 19-25.

I will cite [PAGE 7] for APM/RAPM, [PAGE 8] for EPV, [PAGE 10] for shot efficiency logistic, [PAGE 11] for Rao-Blackwell, [PAGE 13] for shot satisfaction, [PAGE 14] for defensive matchup, [PAGE 9] for production curves, etc.

Need to ensure no betting lines. The source mentions Brown & Sauer (1993) about betting market, Gandar et al. (1998) about informed traders and price variations in betting market. I must NOT mention spreads, totals, moneylines, or odds. I can refer to them as "market efficiency literature" or avoid entirely. Better to avoid any wagering terminology. The user specifically says zero betting lines. I will not mention those references or if I do, I will not use betting terms. Actually safer to not mention them at all or just say "financial market literature" without odds/spreads. I'll avoid.

No toy equations. No Force/Fatigue ratios. All equations must be formal, with units and assumptions and breakdown regimes.

Structure:
<THINK_TRACE> >=400 words. Deep multi-hop derivation & gray-zone audit. Need to discuss causal inference, confounding, multicollinearity, shrinkage, hierarchical modeling, EPV macro/micro assumptions, semi-Markov assumption, Rao-Blackwell sufficiency, production curve heteroskedasticity, hot hand selection bias, defensive matchup endogeneity. Gray zones: identifiability of RAPM under collinearity, EPVA ignores off-ball, shot satisfaction doesn't account for passed-up shots, causal vs associational.

<SOURCE_OPERATORS_AND_EQUATIONS> Formal LaTeX, units, page citations, breakdown. Present equations with page refs. Define variables, units (dimensionless probabilities, points, seconds, feet, meters). State assumptions: iid errors, semi-Markov macro states, ignorable missingness, convex hull spatial bases. Breakdown: $\lambda \to 0$ in RAPM leads to non-identifiability; $N_p$ small leads to high variance; CAR prior singular if similarity graph disconnected; EPV Markov assumption breaks under strategic adaptation; production curve breaks under injury-induced regime shifts.

<RETROCAUSAL_GENEALOGY> Historical/scientific lineage & multi-week traps. Trace from Bill James sabermetrics [PAGE 1], Dean Oliver/Hollinger [PAGE 1], Kubatko et al. 2007 [PAGE 2], Efron & Morris 1975 shrinkage [PAGE 1,6], Rosenbaum 2004 APM [PAGE 7], Sill 2010 RAPM [PAGE 7], Cervone et al. 2016b EPV [PAGE 8], Gilovich et al. 1985 hot hand [PAGE 14], Miller & Sanjurjo 2015 bias correction [PAGE 14]. Multi-week traps: aging curves confounded by era effects [PAGE 9], small-sample 3PT% instability over weeks [PAGE 10], survivor bias in RAPM over multi-season [PAGE 7], defensive matchup non-stationarity across weeks as opponents adjust [PAGE 14].

<RECURSIVE_THEORY_OF_MIND> Crisis habit regression vs counter-trap vs clock. This is more abstract. Need to interpret in context of basketball analytics: crisis habit regression = teams reverting to iso-ball under clock pressure; counter-trap = defense anticipating the regression; clock = shot clock as exogenous deadline. Discuss recursive theory of mind: offense models defense's expectation of crisis regression, defense models offense's second-order anticipation, leading to fixed-point or chaos. Mention shot clock (24 seconds) as hard clock constraint. No betting.

<CROSS_LAYER_VETO_ADJUDICATION> Physical/biomechanical/weather veto proof. Physical: court dimensions (94x50 ft), hoop height 10 ft, ball entry angle ~45 deg [PAGE 11], defender distance within 5 feet definition [PAGE 8]. Biomechanical: shot release mechanics, spin unmeasured [PAGE 11], fatigue (not in source explicitly but can mention player tracking, wearables unavailable [PAGE 2]). Weather: indoor arena, climate controlled, so weather veto is null/indoor invariant; but travel across time zones (not in source) maybe avoid. Since source says biometric data generally unavailable [PAGE 2], that's a data veto. Physical veto: optical tracking accuracy ~1 cm for ball [PAGE 2], 20 fps [PAGE 2]. Breakdown when tracking occluded.

<RLVR_COUNTERFACTUAL_VETOES> 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or maybe "Reinforcement Learning Verifiable Rewards". The user wants 3 verifiable RLVR veto scenarios + predictions. Need to frame as counterfactual veto scenarios that are verifiable. Example:
1. Veto: RAPM identifiability collapse when two players share >95% of minutes (perfect collinearity). Prediction: coefficient variance diverges as $(X^T X + \lambda I)^{-1}$ condition number $\to \infty$; verified by condition number check on lineup overlap matrix.
2. Veto: EPV semi-Markov assumption violated under end-of-shot-clock desperation (state transition depends on time-to-deadline beyond macro state). Prediction: macro-state transition probabilities differ significantly between shot-clock <4s and >12s conditional on same macro state; verified by chi-square test on tracking data.
3. Veto: Shot efficiency hierarchical CAR prior breaks down when player similarity graph is disconnected (new player with no similar historical shooting style). Prediction: posterior variance for new player's regional coefficients does not shrink toward population mean; verified by effective sample size < threshold.

Need to ensure total word count >=1000 across sections. Each section should be substantial. THINK_TRACE >=400 words alone. Overall likely >1500 words.

Need to cite verbatim quotes where page markers given. I can quote short phrases with [PAGE N]. Example: "a player's plus-minus is computed by adding all of the points scored by the player's team and subtracting all the points scored against the player's team while that player was in the game" [PAGE 6]? Actually plus-minus is on page 6? Let's check text: Section 3.1.1 starts on page 6: "One of the first and simplest play-by-play metrics aimed at quantifying player value is known as “plus-minus”. A player’s plus-minus is computed by adding all of the points scored by the player’s team and subtracting all the points scored against the player’s team while that player was in the game." That's on page 6 based on the flow. Wait, the page numbers: after Section 3 intro there is "6". Then 3.1 General skill. Then 3.1.1 Regression-based approaches. So plus-minus is on page 6. APM formula also page 6-7. RAPM on page 7. EPV on page 8. Production curves page 9. Shot efficiency page 10. Figure 3 page 11. Shot selection page 12. Shot satisfaction page 13. Hot hand page 14. Defensive page 14.

I'll cite accordingly.

Important: no betting lines. I will not mention "Brown & Sauer" or "Gandar" or any betting market. If I mention finance, I must avoid spreads/odds/moneylines/totals.

Also no toy equations. All equations formal LaTeX.

Let's draft carefully.

<THINK_TRACE>
Need >400 words. I'll write a multi-hop derivation:
- Start with observed metric $Y_{pt}$ (e.g., RAPM) as function of latent skill $f_p(t)$ plus noise.
- Sources of variability: sampling, development, injury, aging, strategy, teammate confounding [PAGE 6].
- Plus-minus raw is confounded by teammates [PAGE 6].
- APM regression $D_i = X_i \beta + \epsilon_i$ attempts to deconfound but suffers multicollinearity because lineups co-occur [PAGE 7].
- Ridge penalty $\lambda \beta^T\beta$ ensures invertibility of $X^TX + \lambda I$ but introduces bias; when $\lambda \to 0$ and $X^TX$ singular, estimates diverge [PAGE 7].
- Hierarchical Bayesian view: ridge = Gaussian prior, lasso = Laplace prior [PAGE 7].
- EPV framework introduces macro-state $C_t$ and semi-Markov assumption: future independent of past given current macro state [PAGE 8].
- Breakdown if strategic adaptation makes transition probabilities time-inhomogeneous.
- Shot efficiency: logistic regression with spatial random effect $\alpha_{\ell_i p}$ and CAR prior [PAGE 10].
- Reversal paradox: unadjusted defender distance has negative coefficient due to confounding by shot region [PAGE 11, Figure 3].
- Rao-Blackwellization uses sufficient statistics from ball trajectory to reduce variance of $\hat{\theta}_{FG}$ [PAGE 11].
- Production curve $Y_{pt} = f_p(t) + \epsilon_{pt}$ with heteroskedasticity from irregular minutes [PAGE 9].
- Hot hand null $E[Y_{p,t}|history] \approx E[Y_{p,t}|X_t]$; original estimator biased by selection (Monty Hall-type) [PAGE 14].
- Gray-zone audit: EPVA ignores off-ball screens/cuts [PAGE 8]; shot satisfaction ignores passed-up shots [PAGE 13]; defensive matchup algorithm unsupervised without ground truth [PAGE 14]; causal inference needed because strategic confounders often unobserved [PAGE 15].
- Multi-hop conclusion: no single metric is sufficient; need triangulation across RAPM (all-around, biased by collinearity), EPVA (ball-handling decisions, ignores off-ball), shot satisfaction (decision quality, ignores non-shooting), and hierarchical shot models (efficiency, needs spatial context). Breakdown regimes are singular design matrices, small $n_p$, disconnected CAR graphs, and non-stationary strategic adaptation.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
List equations with LaTeX.
1. Raw plus-minus: $PM_p = \sum_{i: p \in \text{on-court}(i)} (P^{team}_i - P^{opp}_i)$ maybe in points per game or per stint. Actually text says computed by adding/subtracting points while player in game. Unit: points. [PAGE 6]
2. APM: $D_i = \sum_{p=1}^P \beta_p x_{ip} + \epsilon_i$, $D_i = 100 \times (\text{home pts} - \text{away pts})$ in stint $i$; $x_{ip} \in \{1,-1,0\}$; $\epsilon_i \sim (0, \sigma^2)$. [PAGE 6-7]
3. RAPM ridge: $\hat{\beta}^{RAPM} = \arg\min_\beta \{ \|D - X\beta\|_2^2 + \lambda \beta^\top \beta \} = (X^\top X + \lambda I_P)^{-1} X^\top D$. Unit: points per 100 possessions. Breakdown: $\lambda=0$ and $\text{rank}(X)<P \Rightarrow X^\top X$ singular; variance $\propto (X^\top X)^{-1}$ explodes. [PAGE 7]
4. Bayesian equivalence: $\hat{\beta}^{ridge} = \text{posterior mode}$ under $\beta_p \sim \mathcal{N}(0, \tau^2)$ with $\lambda = \sigma^2/\tau^2$. [PAGE 7]
5. EPV: $\text{EPV}_i(t) = \mathbb{E}[Z_i \mid X_{i0}, \dots, X_{it}]$, $Z_i \in \{0,2,3\}$ points. [PAGE 8]
6. EPV macro factorization: $\mathbb{E}[Z_i \mid X_{i0:t}] = \sum_{c \in \mathcal{C}\setminus\mathcal{C}_{trans}} \mathbb{E}[Z_i \mid C_{\delta t}=c] \, \Pr(C_{\delta t}=c \mid X_{i0:t})$, under semi-Markov assumption $\Pr(C_{\delta t}=c \mid X_{i0:t}) = \Pr(C_{\delta t}=c \mid C_t)$. [PAGE 8]
7. EPVA: $\text{EPVA}(p) = \frac{1}{N_p} \sum_{(s,e) \in \mathcal{T}^p} \left( v_{e}^{(p)} - v_{s}^{(r(p))} \right)$ averaged over games; unit: points per possession relative to replacement. [PAGE 8]
8. Shot efficiency logistic: $\text{logit}(\Pr(Y_{ip}=1)) = \alpha_{\ell_i,p} + \sum_{j=1}^J \beta_j X_{ij}$, $Y_{ip} \in \{0,1\}$, $\alpha_{\ell,p} \sim \text{CAR}(\Sigma_{CAR})$. [PAGE 10]
9. CAR prior: $\boldsymbol{\alpha}_p \sim \mathcal{N}_L(\mathbf{0}, \Sigma_{CAR})$, $\Sigma_{CAR}$ structured by nearest-neighbor shooting similarity. Breakdown if similarity graph disconnected. [PAGE 11]
10. Rao-Blackwellized FG%: $\hat{\theta}_{FG-RB} = \frac{1}{n} \sum_{i=1}^n p_i$, $p_i = \mathbb{E}[Y_i \mid X_i]$ from trajectory logistic; unit: probability (dimensionless). [PAGE 11]
11. Shot satisfaction: $\text{Sat}(p) = \frac{1}{|\mathcal{T}_{shot}^p|} \sum_{(i,t) \in \mathcal{T}_{shot}^p} \left( v_{it} - \mathbb{E}[Z_i \mid X_{it}, C_t \in \mathcal{C}\setminus\{\text{shoot}\}] \right)$. [PAGE 13]
12. Production curve: $Y_{pt} = f_p(t) + \epsilon_{pt}$, $\epsilon_{pt} \sim (0, \sigma_p^2/m_{pt})$ where $m_{pt}$ = minutes/exposure (heteroskedastic). [PAGE 9]
13. Hot hand null: $\mathbb{E}[Y_{p,t} \mid Y_{p,t-1}=1,\dots,Y_{p,t-k}=1, X_t] \approx \mathbb{E}[Y_{p,t} \mid X_t]$. [PAGE 14]
14. Defensive matchup location: $\mu_{tk} = \gamma_o O_{tk} + \gamma_b B_t + \gamma_h H$, defender location $\sim \mathcal{N}(\mu_{tk}, \sigma^2 I_2)$, units: feet (court coordinates). [PAGE 14]

Also state assumptions and singularity/breakdown for each.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Trace lineage:
- Bill James sabermetrics (1984, 1987, 2010) and Oakland A's 2002 [PAGE 1] -> per-minute evaluation [PAGE 1].
- Dean Oliver (2004), Hollinger PER (2005a,b) [PAGE 1] -> box-score value metrics.
- Kubatko et al. (2007) "A Starting Point" [PAGE 2] -> foundation.
- Efron & Morris (1975) shrinkage estimation [PAGE 1,6] -> hierarchical priors.
- Rosenbaum (2004) APM [PAGE 6] -> regression on stint data.
- Sill (2010) RAPM ridge [PAGE 7] -> regularization.
- Cervone et al. (2016b) EPV multiresolution [PAGE 8] -> spatio-temporal possession value.
- Gilovich et al. (1985) hot hand null [PAGE 14] -> streak skepticism.
- Miller & Sanjurjo (2015, 2017) selection bias correction [PAGE 14] -> 11% increase estimate.
Multi-week traps:
- 3PT% majority of observed differences due to sampling variability, not true ability [PAGE 10]; small weekly samples produce phantom trends.
- Aging curves confounded by era and survivorship [PAGE 9]; cross-sectional snapshots misattribute cohort effects to aging.
- RAPM multi-season pooling assumes stationarity of player value; coaching/system changes violate this [PAGE 7].
- Defensive matchup unsupervised HMM lacks ground truth; opponent adjustments week-to-week create non-stationarity [PAGE 14].
Need to discuss "retrocausal" angle: using future outcomes to infer past skill (survivorship bias), and how production curves try to forecast future from past but are undermined by unobserved regime shifts.

<RECURSIVE_THEORY_OF_MIND>
Define levels:
- Level 0: offense takes highest percentage shot (naive).
- Level 1: defense anticipates level 0 and shades toward high-value regions.
- Level 2: offense anticipates level 1 and exploits off-ball movement / role swaps [PAGE 4].
- Level 3: defense anticipates level 2 and switches matchups.
Crisis habit regression: under shot-clock pressure (clock), offense regresses to iso-ball or pick-and-roll habit. Counter-trap: defense pre-positions to contest that exact habit, making the regression suboptimal. Clock: 24-second shot clock imposes hard deadline; end-of-clock possessions have different EPV macro transitions (desperation shots) breaking semi-Markov stationarity [PAGE 8]. Multi-hop: offense models defense's expectation of crisis regression; defense models offense's second-order anticipation; fixed point may be mixed-strategy equilibrium in shot location, but tracking data show teams do not reach equilibrium due to bounded rationality and spatial constraints [PAGE 4, 10]. No betting.

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer:
- Court: 94 ft x 50 ft (standard NBA); hoop height 10 ft; rim radius 9 inches; optimal ball entry ~2 inches beyond center, entry angle ~45° [PAGE 11]. Physical veto: shot trajectories violating these bounds are measurement error or tracking occlusion.
- Optical tracking: SportVU/Second Spectrum at >20 fps, (x,y) for 10 players, (x,y,z) for ball to within 1 cm [PAGE 2]. Breakdown: player occlusion, ball above rim, refractive glare.
Biomechanical layer:
- Shot outcome not deterministic function of trajectory due to unmeasured ball spin and release mechanics [PAGE 11]. Rao-Blackwellization conditions on sufficient statistics but cannot recover unobserved spin; variance floor remains.
- Defender within five feet defines contested state [PAGE 8]; distance measured in feet; below ~2 ft is physical contest, above ~6 ft is open.
- Biometric/wearable data generally unavailable to public [PAGE 2]; vetoes based on fatigue cannot be externally verified.
Weather layer:
- NBA games are indoor, climate-controlled; weather (wind, temperature, precipitation) has zero direct effect on gameplay. Veto: weather-based explanations for shot variance are invalid unless venue HVAC failure is documented (not in source). Travel across time zones not discussed; avoid.
Veto adjudication: any model that claims shot probability variation is explained by outdoor weather is falsified by indoor invariance. Any model that ignores defender distance within 5 feet is physically misspecified. Any model that treats shot outcome as deterministic given trajectory is biomechanically overconfident.

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable veto scenarios:
1. RAPM collinearity veto: Construct lineup overlap matrix $O_{pp'} = \text{co-minutes}(p,p') / \text{minutes}(p)$. If $\max_{p\ne p'} O_{pp'} > 0.95$ for a pair, then $\text{cond}(X^\top X + \lambda I)$ exceeds threshold (e.g., $10^6$). Veto: RAPM coefficients for that pair are not separately identifiable. Prediction: out-of-sample RAPM predictive log-likelihood does not improve when adding the second player; verified by k-fold cross-validation on possession data [PAGE 7].
2. EPV semi-Markov veto: Partition possessions by shot-clock bin ($<4$ s vs $>12$ s) conditional on identical macro state $C_t$ (ball-handler, court region, defender proximity). Test homogeneity of transition probabilities $\Pr(C_{\delta t} = c \mid C_t, \text{shot-clock bin})$. Veto: if chi-square $p < 0.01$, the semi-Markov assumption fails; EPV is time-inhomogeneous under clock pressure. Prediction: EPV estimates for end-of-clock possessions will be systematically miscalibrated (overvaluing low-percentage shots) [PAGE 8].
3. CAR prior disconnected graph veto: Build player similarity graph from shooting style coefficients. If a new/rookie player has no edges (degree 0), the CAR prior precision matrix has a zero row/column. Veto: hierarchical shrinkage cannot borrow strength; posterior variance for that player's regional coefficients remains at prior scale. Prediction: Rao-Blackwellized FG% for rookie will have wide credible intervals and poor end-of-season prediction vs. empirical% with small n; verified by holdout season [PAGE 11].

All three are verifiable with tracking/play-by-play data. No betting lines.

Need to ensure total words. Let's approximate: THINK_TRACE ~500 words. SOURCE_OPERATORS ~500 words. RETROCAUSAL ~300. RECURSIVE ~300. CROSS_LAYER ~300. RLVR ~300. Total >2000. Good.

Need to include exact [PAGE N] markers and verbatim quotes where applicable. I'll include some verbatim quotes with page citations.

Make sure not to use the word "odds" or "spread" or "moneyline" or "total". Also avoid "betting market". I can mention "financial and gambling" context from page 1 but not detail. Actually page 1 says "finance and gambling (Brown & Sauer, 1993, Gandar et al., 1998)". I will avoid citing these to prevent any betting language.

Double-check equations are formal LaTeX. Use proper environments? Just inline LaTeX with \[\] or \( \). Since output is text, I can write LaTeX code blocks or inline. I'll write inline LaTeX with \[\].

Make sure units are specified: points, seconds, feet, dimensionless probability, points per 100 possessions, etc.

Assumptions and breakdown regimes: explicitly stated.

Let's write.

Need to be careful: The user wants exact XML sections. I will output exactly those six sections in order. No extra text outside.

Word count check: THINK_TRACE must be >=400 words. I'll make it around 500-600.

Let's compose final answer.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The observed metric \(Y_{pt}\) for player \(p\) at time \(t\) is modeled as \(Y_{pt}=f_p(t)+\epsilon_{pt}\), where \(f_p\) is latent ability and \(\epsilon_{pt}\) captures irreducible error from minor injury, illness, and chance variation [PAGE 9]. This decomposition immediately triggers a multi-hop identifiability problem: \(\epsilon_{pt}\) is not independent of teammates, coaching strategy, or shot selection, because basketball is a team sport and individual metrics are impacted by the abilities of teammates [PAGE 6]. Raw plus-minus, computed by adding points scored by the player’s team and subtracting points scored against while that player was in the game [PAGE 6], is therefore a biased estimator of individual skill because a less-skilled player may share the floor with a more-skilled teammate and benefit from the teammate’s effect [PAGE 6].

The first causal correction is adjusted plus-minus (APM), which posits a linear stint-level model \(D_i=\sum_p \beta_p x_{ip}+\epsilon_i\), where \(D_i\) is 100 times the point differential in stint \(i\) and \(x_{ip}\in\{1,-1,0\}\) indicates home, away, or not playing [PAGE 6–7]. This regression attempts to deconfound player value from simultaneous teammates, but it collides with multicollinearity: when groups of players are typically on the court together, the design matrix \(X\) does not have enough variation to distinguish individual contributions, so \(\hat{\beta}_p\) have very large variance [PAGE 7]. Ridge regularization (RAPM) adds the penalty \(\lambda\beta^\top\beta\), yielding \(\hat{\beta}=(X^\top X+\lambda I)^{-1}X^\top D\) [PAGE 7]. This guarantees a unique solution only if \(\lambda>0\) or \(X^\top X\) is full rank; the exact breakdown regime is \(\lambda\to 0\) with rank-deficient \(X^\top X\), where the variance of \(\hat{\beta}\) diverges. From a Bayesian perspective, ridge is the posterior mode under \(\beta_p\sim\mathcal{N}(0,\tau^2)\), and lasso is the posterior mode under a Laplace prior [PAGE 7]. Neither is a panacea because inferred value for co-playing players remains sensitive to the prior choice [PAGE 7].

The Expected Possession Value (EPV) framework [PAGE 8] addresses play-by-play granularity by defining \(\text{EPV}_i(t)=\mathbb{E}[Z_i\mid X_{i0},\dots,X_{it}]\) with \(Z_i\in\{0,2,3\}\) points [PAGE 8]. It factorizes inference into macro and micro components under a semi-Markov assumption: given the current coarse state \(C_t\), future macro-states do not depend on pre-\(\delta t\) data [PAGE 8]. The breakdown regime is strategic non-stationarity—if defenses adjust within a possession based on shot-clock pressure, the macro transition kernel becomes time-inhomogeneous and the semi-Markov factorization is misspecified.

Shot efficiency introduces spatial confounding. Franks et al. (2015b) fit a hierarchical logistic regression \(\text{logit}(\Pr(Y_{ip}=1))=\alpha_{\ell_i,p}+\sum_j\beta_jX_{ij}\), where \(\alpha_{\ell,p}\) is a spatial random effect for player \(p\) at location \(\ell\) [PAGE 10]. Figure 3 shows that ignoring shot region yields a slightly negative coefficient for defender distance—a reversal paradox—because defender distance is confounded with shot region [PAGE 11, Figure 3 caption]. The conditional autoregressive (CAR) prior shrinks coefficients for low-attempt players toward players with similar shooting styles [PAGE 11], but it breaks down if the player similarity graph is disconnected, leaving new or idiosyncratic shooters unshrunk.

Rao-Blackwellization [PAGE 11] reduces variance in field-goal percentage by replacing \(\hat{\theta}_{FG}=Y_i/n\) with \(\hat{\theta}_{FG\text{-}RB}=p_i/n\), where \(p_i=\mathbb{E}[Y_i\mid X_i]\) is inferred from ball trajectory data. This relies on trajectory sufficiency; unmeasured factors such as ball spin impose a variance floor, so shot outcome is not a deterministic function of observed trajectory information [PAGE 11].

Gray-zone audit: EPVA measures value only when a player touches the ball, so off-ball screens and cuts are omitted [PAGE 8]. Shot satisfaction averages differential value only over shots actually taken, ignoring passed-up high-value shots [PAGE 13]. Defensive matchup inference uses an unsupervised hidden Markov model without ground-truth matchup data [PAGE 14]. Production curves assume smooth trajectories from sparse irregular observations, but injury interruptions and playing-time heterogeneity induce heteroskedasticity [PAGE 9]. Finally, the paper explicitly states that causal thinking is essential because strategic and game-theoretic confounders are typically unobserved [PAGE 15]; associational metrics like RAPM, EPVA, and shot satisfaction cannot answer counterfactual questions such as replacing a star with an average player without an explicit causal identification strategy.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal LaTeX operators, units, page citations, assumptions, and breakdown regimes.

1. Raw plus-minus (stint aggregation).  
   \[
   PM_p=\sum_{i:\,p\in\mathcal{O}_i}\bigl(P^{\text{team}}_i-P^{\text{opp}}_i\bigr),
   \]
   where \(\mathcal{O}_i\) is the set of on-court players in stint \(i\). Unit: points. Assumption: all points in a stint are attributable proportionally to the five on-court players. Breakdown: severe teammate confounding; no separation of individual from lineup effects [PAGE 6].

2. Adjusted plus-minus (APM).  
   \[
   D_i=\sum_{p=1}^{P}\beta_p x_{ip}+\epsilon_i,\qquad x_{ip}\in\{1,-1,0\},
   \]
   where \(D_i=100\times(\text{home points}-\text{away points})\) in stint \(i\). Unit: points per 100 possessions. Assumption: \(\epsilon_i\stackrel{\text{iid}}{\sim}(0,\sigma^2)\) and stint effects are additive. Breakdown: multicollinearity when lineups co-occur frequently; \(\text{Var}(\hat{\beta})\) is large and coefficients are not reliably informative [PAGE 6–7].

3. Regularized APM (RAPM), ridge form.  
   \[
   \hat{\beta}^{\text{RAPM}}=\arg\min_{\beta}\Bigl\{\|D-X\beta\|_2^2+\lambda\,\beta^\top\beta\Bigr\}
   =(X^\top X+\lambda I_P)^{-1}X^\top D.
   \]
   Unit: points per 100 possessions. Assumption: \(\lambda>0\) controls shrinkage; cross-validation selects \(\lambda\). Breakdown regime: \(\lambda=0\) with \(\text{rank}(X)<P\) makes \(X^\top X\) singular and the inverse undefined; even with \(\lambda>0\), extreme collinearity inflates the condition number of \(X^\top X+\lambda I\) and destabilizes estimates [PAGE 7].

4. Bayesian equivalence for regularization.  
   \[
   \hat{\beta}^{\text{ridge}}=\text{posterior mode under }\beta_p\stackrel{\text{iid}}{\sim}\mathcal{N}(0,\tau^2),\quad
   \hat{\beta}^{\text{lasso}}=\text{posterior mode under }\beta_p\stackrel{\text{iid}}{\sim}\text{Laplace}(0,b).
   \]
   Assumption: prior mean zero reflects shrinkage toward no effect. Breakdown: informative structure (e.g., right-skewed NBA value distribution, playing-time-dependent priors) is ignored by default priors, inducing bias for frequently co-playing players [PAGE 7].

5. Expected Possession Value (EPV).  
   \[
   \text{EPV}_i(t)=\mathbb{E}\!\bigl[Z_i\mid X_{i0},\dots,X_{it}\bigr],\qquad Z_i\in\{0,2,3\}\text{ points}.
   \]
   Unit: expected points. Assumption: the full-resolution covariate history \(X_{i0:t}\) captures all relevant spatio-temporal information. Breakdown: if unobserved strategic adjustments affect possession value, EPV is confounded [PAGE 8].

6. EPV macro–micro factorization (semi-Markov).  
   \[
   \mathbb{E}[Z_i\mid X_{i0:t}]
   =\sum_{c\in\mathcal{C}\setminus\mathcal{C}_{\text{trans}}}
   \mathbb{E}[Z_i\mid C_{\delta t}=c]\,
   \Pr(C_{\delta t}=c\mid X_{i0:t}),
   \]
   with the semi-Markov restriction \(\Pr(C_{\delta t}=c\mid X_{i0:t})=\Pr(C_{\delta t}=c\mid C_t)\). Unit: dimensionless probability weighting macro-state values in points. Assumption: coarse states are time-homogeneous and the next non-transition state depends only on the current macro-state. Breakdown: end-of-shot-clock desperation or defensive substitutions make transitions time-inhomogeneous, invalidating the semi-Markov kernel [PAGE 8].

7. Expected Possession Value Added (EPVA).  
   \[
   \text{EPVA}(p)=\frac{1}{N_p}\sum_{(s,e)\in\mathcal{T}^p}
   \Bigl(v^{(p)}_e-v^{(r(p))}_s\Bigr),
   \]
   where \(N_p\) is games played, \(\mathcal{T}^p\) is the set of ball-possession start/end pairs, and \(r(p)\) is the league-average replacement player. Unit: points per possession relative to replacement. Assumption: value is attributable to the ball handler only; off-ball gravity is unmodeled. Breakdown: specialists who add value via screens/cuts are systematically undervalued; offensive-only, ignores defense [PAGE 8].

8. Hierarchical shot-efficiency model.  
   \[
   \text{logit}\bigl(\Pr(Y_{ip}=1)\bigr)
   =\alpha_{\ell_i,p}+\sum_{j=1}^{J}\beta_j X_{ij},
   \qquad Y_{ip}\in\{0,1\},
   \]
   with \(\alpha_{\ell,p}\sim\text{CAR}(\Sigma_{\text{CAR}})\). Unit: log-odds of made shot (dimensionless). Covariates include defender distance in feet. Assumption: spatial random effects borrow strength across nearby court locations and similar players. Breakdown: reversal paradox if shot region is omitted—defender distance can appear negatively associated with made probability due to confounding by location [PAGE 10–11, Figure 3]. CAR prior breaks down if the player similarity network is disconnected, leaving zero shrinkage for isolated players [PAGE 11].

9. Rao-Blackwellized field-goal percentage.  
   \[
   \hat{\theta}_{FG\text{-}RB}=\frac{1}{n}\sum_{i=1}^{n}p_i,
   \qquad p_i=\mathbb{E}[Y_i\mid X_i],
   \]
   where \(X_i\) is ball-entry trajectory (location, angle). Unit: probability, dimensionless \([0,1]\). Assumption: trajectory data are a sufficient statistic for shot-making ability conditional on observed covariates. Breakdown: outcome is not deterministic given trajectory because of unmeasured ball spin and limited spatial precision, so a variance floor remains [PAGE 11].

10. Shot satisfaction.  
    \[
    \text{Sat}(p)=\frac{1}{|\mathcal{T}_{\text{shot}}^p|}
    \sum_{(i,t)\in\mathcal{T}_{\text{shot}}^p}
    \Bigl(v_{it}-\mathbb{E}[Z_i\mid X_{it},C_t\in\mathcal{C}\setminus\{\text{shoot}\}]\Bigr).
    \]
    Unit: points per shot relative to the counterfactual non-shooting macro-state. Assumption: the counterfactual state \(C_t\) (pass or dribble) is well-defined and estimable from macro-state transitions. Breakdown: does not account for situations where a player passes up a high-value shot; only conditions on shots actually taken [PAGE 13].

11. Player production curve.  
    \[
    Y_{pt}=f_p(t)+\epsilon_{pt},
    \qquad \epsilon_{pt}\sim\bigl(0,\sigma_p^2/m_{pt}\bigr),
    \]
    where \(m_{pt}\) is exposure (minutes or possessions). Unit: \(Y\) in aggregate skill units (e.g., RAPM or VORP), \(t\) in time (years/age). Assumption: errors are uncorrelated over time and heteroskedasticity is captured by exposure. Breakdown: injuries, trades, coaching changes, and era effects create non-stationary regime shifts; sparse irregular observations make \(f_p(t)\) weakly identified for short careers [PAGE 9].

12. Hot-hand null hypothesis.  
    \[
    \mathbb{E}\!\bigl[Y_{p,t}\mid Y_{p,t-1}=1,\dots,Y_{p,t-k}=1,X_t\bigr]
    \approx \mathbb{E}[Y_{p,t}\mid X_t].
    \]
    Unit: conditional make probability, dimensionless. Assumption: \(X_t\) captures contextual confounders such as shot type and defender distance. Breakdown: original estimators suffer from sequence-selection bias (a Monty Hall–type restricted-choice bias) that attenuates estimated streak effects [PAGE 14].

13. Defensive matchup location model.  
    \[
    \mu_{tk}=\gamma_o O_{tk}+\gamma_b B_t+\gamma_h H,
    \qquad D_{tk}\sim\mathcal{N}(\mu_{tk},\sigma^2 I_2),
    \]
    where \(O_{tk}\) is offensive-player location, \(B_t\) is ball location, and \(H\) is hoop location. Unit: feet (court coordinates). Assumption: defender position is a convex combination of offensive player, ball, and hoop with fixed weights \(\gamma\). Breakdown: unsupervised inference without ground-truth matchup data; opponent-specific adjustments and “gravity” of stars require player- and location-dependent \(\gamma\), which is data-hungry [PAGE 14].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage begins with Bill James’s sabermetrics (1984, 1987, 2010) and the 2002 Oakland Athletics, establishing that statistical evaluation can outperform budget-constrained conventional scouting [PAGE 1]. Dean Oliver and John Hollinger translated this to basketball by arguing for per-minute rather than per-game evaluation and introducing Player Efficiency Rating (PER) [PAGE 1]. Kubatko et al. (2007) codified the foundation in “A Starting Point for Basketball Analytics,” which the present review explicitly extends [PAGE 2]. The inferential machinery then branched in two directions: shrinkage estimation from Efron & Morris (1975), which justifies hierarchical priors for low-sample settings [PAGE 1,6], and regression-based player value from Rosenbaum (2004), whose adjusted plus-minus regresses stint differentials on on-court indicators [PAGE 6–7]. Sill (2010) added ridge regularization to control multicollinearity variance [PAGE 7], and Cervone et al. (2016b) introduced the multiresolution EPV stochastic process for optical tracking data [PAGE 8].

Retrocausal traps appear throughout this genealogy. Production curves attempt to forecast future ability from past production, yet they implicitly condition on survivorship: players with long observed careers are not a random sample of all players who entered the league, and era effects are confounded with age effects [PAGE 9]. The paper notes that production curves are preferred over “aging curves” precisely because changes need not be driven exclusively by age [PAGE 9, footnote 2], but most empirical implementations still treat time as the primary driver, creating a retrocausal illusion that past performance cleanly determines future trajectory. Shot efficiency exhibits a short-horizon retrocausal trap: Franks et al. (2016) show that the majority of observed differences in three-point percentage are due to sampling variability rather than true ability differences [PAGE 10]; weekly or monthly aggregates of 3PT% therefore generate phantom “hot” or “cold” streaks that are retrospective artifacts of small \(n\). RAPM pooling across multiple seasons assumes stationarity of player value, but coaching systems, teammate quality, and role changes violate that assumption, so multi-season RAPM estimates conflate true skill drift with contextual drift [PAGE 7].

Defensive matchup inference adds another retrocausal layer: unsupervised hidden Markov models infer who is guarding whom from tracking data without ground truth [PAGE 14], then use those inferred matchups to estimate defensive coefficients. If the matchup algorithm systematically mislabels switches or help rotations, the defensive coefficients inherit the algorithm’s retrospective errors. The hot-hand literature shows the most explicit retrocausal correction: Gilovich et al. (1985) claimed streaks are chance misperceived ex post facto [PAGE 14], but Miller & Sanjurjo (2015, 2017) demonstrated that the original estimators were biased by shot-sequence selection, and after correction they estimated an 11% increase in three-point make probability after prior makes [PAGE 14]. This reversal is a retrocausal correction of the null: what looked like a cognitive illusion was partly a statistical artifact.

Multi-week trap summary: (1) three-point percentage instability over small weekly samples produces false trend signals [PAGE 10]; (2) production-curve cross-sections confound cohort, era, and survivorship effects with aging [PAGE 9]; (3) RAPM multi-season pooling assumes stationarity that roster and coaching changes violate [PAGE 7]; (4) defensive matchup algorithms are non-stationary because opponents adjust weekly, making inferred matchup effects time-varying [PAGE 14]. Any pipeline that treats these quantities as fixed across weeks will misattribute contextual noise to player skill.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the offense–defense interaction as levels of recursive theory of mind. Level-0 offense naively selects the highest-percentage shot available. Level-1 defense anticipates this and shades toward high-value regions, reducing the expected value of those shots. Level-2 offense anticipates the level-1 shade and generates “role swaps” and off-ball movement to create open three-point looks [PAGE 4]. Level-3 defense anticipates level-2 offense by switching matchups and protecting the rim. The paper notes that Lucey et al. (2014) found defensive factors including role swaps helped generate open three-point looks, and D’Amour et al. (2015) showed ball movement adds unpredictability that creates better offensive outcomes [PAGE 4]. Sandholtz et al. (2019) formalize the allocative efficiency problem: teams choose shot-location distributions to maximize expected points, but the optimum depends on the defensive map of high-value regions [PAGE 4].

Crisis habit regression enters under clock pressure. The shot clock imposes a hard deadline; as remaining time declines, offense regresses to habitual structures—isolation, pick-and-roll, or desperation pull-ups—because complex off-ball motion requires time to develop. This is a habit regression under crisis: the offense defaults to a low-dimensional policy when the clock removes degrees of freedom. The counter-trap is that a level-\(k\) defense pre-positions to contest exactly those crisis habits, making the regression suboptimal. If the offense anticipates the counter-trap, it may mix in early-clock action to force the defense to respect the full shot clock, recursively pushing the interaction toward a mixed-strategy equilibrium in shot location and timing.

The clock is an exogenous state variable that breaks the EPV semi-Markov assumption [PAGE 8]: transition probabilities from a macro state \(C_t\) differ conditional on shot-clock bin. End-of-clock possessions have elevated turnover and low-percentage shot probabilities not captured by a time-homogeneous macro kernel. Recursive theory of mind therefore operates on a non-stationary game tree: offense models defense’s expectation of crisis regression; defense models offense’s second-order anticipation of that expectation; the fixed point is destabilized by the hard clock boundary. Tracking data show defenders shade about two-thirds of the way from hoop to offensive player and 10% toward the ball [PAGE 14], but these spatial equilibria are themselves conditional on clock state and score differential, so no single defensive positioning policy is optimal across the possession clock.

Implication for metric construction: EPVA and shot satisfaction are computed at moments of ball possession or shot attempt, but they do not model the recursive counterfactual of what the defense would have done had the offense not regressed to its crisis habit. A full causal model must specify the defense’s policy as a function of clock state and offensive history, which the current review notes is largely unobserved and requires causal inference beyond associational metrics [PAGE 15].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. NBA courts are fixed rectangular dimensions; the hoop is at a standard height, and ball entry into the rim is constrained by geometry. Marty & Lucey (2017) and Marty (2018) show that the optimal ball entry location is about 2 inches beyond the center of the basket at an entry angle of about 45 degrees, using data from SportVU, Second Spectrum, NOAH, or RSPCT [PAGE 11]. Any shot model that assigns high probability to trajectories violating these physical bounds (entry angle far from 45°, entry point outside the rim aperture) is vetoed as physically impossible or as tracking error. Optical tracking provides \((x,y)\) locations for all 10 players and \((x,y,z)\) for the ball at over 20 frames per second, with ball accuracy within one centimeter [PAGE 2]. Breakdown: player occlusion, ball flight above the rim, and camera glare create missing or biased coordinates; models that treat all tracked positions as error-free are overconfident.

Biomechanical layer. Shot outcome is not a deterministic function of observed trajectory information because of limited spatial precision and unmeasured factors such as ball spin [PAGE 11]. Rao-Blackwellization reduces variance by conditioning on sufficient statistics inferred from trajectory, but it cannot recover unobserved spin; therefore any claim that shot outcome is perfectly predictable from entry location and angle is biomechanically false. Defender distance is measured in feet, with the contested state defined by a defender within five feet [PAGE 8]. A model that omits defender distance or treats all shots as open commits a physical-layer omission bias. Biometric and wearable data are generally unavailable to the public [PAGE 2], so fatigue-based vetoes cannot be externally verified from public data; any internal team model using wearables operates under a data veto for outside researchers.

Weather layer. Professional basketball is played indoors in climate-controlled arenas. Consequently, outdoor weather variables—wind, temperature, precipitation—have zero direct physical effect on shot trajectory or player movement during the game. A weather-based explanation for shot variance is invalid unless an HVAC failure or arena-specific microclimate is documented, which is outside the scope of this source. Travel-related circadian effects are not discussed in the provided text and are therefore excluded from this adjudication layer.

Veto adjudication rule: a proposed analytic claim is rejected if (i) it implies shot probabilities vary with outdoor weather in indoor arenas; (ii) it treats shot outcome as a deterministic function of ball trajectory, ignoring spin and measurement error; (iii) it estimates defensive effects without conditioning on defender distance within five feet; or (iv) it uses player tracking coordinates as exact without modeling occlusion-induced missingness. These vetoes are independent of any outcome and apply before statistical inference.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable reinforcement-learning verifiable-reward (RLVR) veto scenarios, each with a falsifiable prediction.

Veto 1 — RAPM collinearity collapse. Construct the lineup-overlap matrix \(O_{pp'}=\frac{\text{co-minutes}(p,p')}{\text{minutes}(p)}\) for all player pairs. If \(\max_{p\ne p'} O_{pp'} > 0.95\) and \(\lambda\) is small, then \(\text{cond}(X^\top X+\lambda I)\) exceeds a numerical threshold (e.g., \(10^6\)), rendering \(\hat{\beta}_p\) and \(\hat{\beta}_{p'}\) non-identifiable. Verifiable test: compute the condition number on possession-level play-by-play data; if it exceeds the threshold, veto separate RAPM coefficients for that pair. Prediction: out-of-sample predictive log-likelihood on held-out stints will not improve when both players are included versus a reduced model that collapses them into a single lineup effect, because the data contain no independent variation to separate their contributions [PAGE 7].

Veto 2 — EPV semi-Markov violation under shot-clock pressure. Partition possessions by shot-clock bin (\(<4\) seconds vs. \(>12\) seconds) while holding the macro state \(C_t\) fixed (ball-handler ID, discretized court region, defender within five feet). Test homogeneity of transition probabilities \(\Pr(C_{\delta t}=c\mid C_t,\text{shot-clock bin})\) via a chi-square test over all reachable macro states. If \(p<0.01\), veto the time-homogeneous EPV kernel for end-of-clock possessions. Prediction: EPV estimates for \(<4\)-second possessions will be systematically miscalibrated—overvaluing low-percentage desperation shots—because the macro transition kernel is time-inhomogeneous near the clock boundary, violating the semi-Markov assumption [PAGE 8].

Veto 3 — CAR prior disconnected graph for new players. Build a player-similarity graph from hierarchical shot-region coefficients; edge weights reflect shooting-style similarity. If a rookie or rarely seen player has graph degree zero, the CAR prior precision matrix has an isolated node and the posterior for that player’s regional coefficients receives no shrinkage from the population. Verifiable test: check graph degree for all players entering a new season; any degree-zero player triggers a CAR veto. Prediction: Rao-Blackwellized FG% for degree-zero players will have wide credible intervals and poor end-of-season prediction compared with empirical make percentage when the player has few attempts, because the hierarchical model cannot borrow strength across a disconnected similarity graph [PAGE 10–11].

All three vetoes are computable from public play-by-play and optical tracking data and require no betting-market information.
</RLVR_COUNTERFACTUAL_VETOES>