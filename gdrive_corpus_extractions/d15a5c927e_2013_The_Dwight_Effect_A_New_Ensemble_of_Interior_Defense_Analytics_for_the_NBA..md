---
source: "2013 The Dwight Effect A New Ensemble of Interior Defense Analytics for the NBA.pdf"
folder: "/GSE-Research/sports-research-papers"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3457
---

<NATIVE_REASONING>
The user wants me to analyze the provided research paper "The Dwight Effect" by Goldsberry and Weiss (2013) and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

No betting lines. No toy equations. Use formal LaTeX equations with units. Cite exact page markers. Verbatim quotes where appropriate.

Let me structure this carefully.

First, understand the paper:
- Title: The Dwight Effect: A New Ensemble of Interior Defense Analytics for the NBA
- Authors: Kirk Goldsberry (Harvard), Eric Weiss (Sports Aptitude)
- Published: 2013 Research Paper Competition
- Data: SportVu optical tracking, 75,000+ NBA shots, 2011-2012 and 2012-2013 seasons
- 52 interior defenders faced at least 500 shot attempts
- Key concepts:
  - Spatial splits: frequency splits and efficiency splits (Close-range / Mid-range / 3-point range)
  - Case Study 1: Basket Proximity Condition - defender within 5 feet of basket
  - Case Study 2: Shot Proximity Condition - defender within 1, 3, or 5 feet of shot attempt
  - Metrics: Shots Defended (frequency within distances), Proximal FG% (opponent FG% when defender nearby)
  - "The Dwight Effect": ability of interior defender to reduce efficiency by deterring close-range shots (presence changes offense behavior)
  - League averages: close-range FG% 49.7% when defender within 5 ft of basket; drops to 38% with Hibbert/Sanders; Scola/David Lee worst at 63%
  - Dwight Howard: overall NBA shoots 57.2% close range when defender within 5 ft of basket; Howard drops to 48.2% close range frequency. Leads in deterrence though not blocks.
  - Serge Ibaka: leads in blocks (6.46 per 48 min) but ranked last among centers with 100+ shots in basket proximity: opponents shot 74% close range when he was within 5 ft.
  - Appendix 1 & 1A: Case Study 1 results sorted
  - Appendix 2: Case Study 2 results
  - Table 1: Top/Bottom 5 proximal FG%

Key data points:
- Page 4: NBA League Average Frequency 35/41/24, Efficiency 53/39/36
- Page 4: Kevin Durant Frequency 27/46/27 Efficiency 65/44/37
- Page 4: Josh Smith Frequency 45/43/12 Efficiency 61/37/30
- Page 5: NBA shooters make 49.7% FG when qualifying interior defender within 5 ft of basket; Hibbert/Sanders 38%; Scola 63%
- Page 5: NBA shoots 57.2% close range attempts when defender within 5 ft of basket; Howard 48.2%
- Page 5: Ibaka last among centers with 100+ shots: opponents shot 74% close range when Ibaka within 5 ft
- Page 5: Case Study 2: 27.8% of NBA shots within 5 ft of qualifying interior defender; 21,042 shots evaluated
- Page 5: Tyler Hansbrough lowest within 5 ft: 20.7%; Harrellson, Koufos, Jordan Hill >35%; Ibaka fourth at 34.5%
- Page 5: Larry Sanders best proximate defender: opponents shot 34.9% within 5 ft; Anderson Varejao worst: 54.2%
- Page 6: Table 1 Top 5 Proximal FG%: Sanders 34.9, Bargnani 35.2, Perkins 37.3, Brand 38.0, Hibbert 38.7. Bottom 5: Love 52.1, Valanciunas 52.8, Lee 53.0, Hill 53.9, Varejao 54.2
- Page 7-8: Appendix 1 details
- Page 8: Appendix 1A sorted by % close range: Howard 48.2% (lowest close range frequency)
- Page 9-10: Appendix 2 Shots Defended rankings
- Page 11: Appendix 2 Proximal FG% rankings

Now I need to write the response with the exact XML sections.

Constraints check:
- No betting lines: I won't mention spreads, totals, moneylines, odds.
- No toy equations: I must use formal LaTeX equations. I should define proper probability measures, conditional probabilities, etc. No "Force/Fatigue" fake ratios.
- Cite [PAGE N] markers and verbatim quotes.

Let me draft each section.

<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
This needs to be at least 400 words. I'll discuss the derivation of spatial splits, conditional probabilities, the Dwight Effect as a deterrence metric, sample bias (15 arenas), geometric primitives vs 3D athletes, the singularity when shot counts are low (e.g., Ibaka n=104 vs Howard n=409), confounding by teammate defense, position assignment issues, and the breakdown regimes.

<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
Here I'll define:
- Spatial zones $Z \in \{C, M, T\}$ for close, mid, three-point.
- Frequency split $F_i = (f_{i,C}, f_{i,M}, f_{i,T})$ where $f_{i,z} = N_{i,z} / N_i \times 100$, sum to 100.
- Efficiency split $E_i = (e_{i,C}, e_{i,M}, e_{i,T})$ where $e_{i,z} = \text{FG\%}_{i,z}$.
- Conditional close-range FG% given defender proximity: $P(\text{make} \mid d \le 5 \text{ ft}, \text{defender } j)$.
- Basket proximity condition: defender within $r=5$ ft of basket rim.
- Shot proximity condition: defender within $r \in \{1,3,5\}$ ft of shot release point.
- Proximal FG%: $\text{pFG\%}_j = \frac{\sum_{s \in S_j} \mathbb{1}[\text{make}_s]}{|S_j|} \times 100\%$.
- Dwight Effect deterrence: $\Delta f_C = f_{C,\text{league}} - f_{C,j}$ where league $f_C = 57.2\%$, Howard $f_C = 48.2\%$.
- Sample bias: only 15/30 arenas with SportVu as of Jan 2013 [PAGE 5].
- Breakdown: low $N_j$ (e.g., Ibaka n=104 in App 1), geometric abstraction error.

Cite page numbers with verbatim quotes.

<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
Lineage: baseball errors/fielding percentage [PAGE 2], NFL cornerbacks [PAGE 2], baseball triple-slash line inspiring spatial splits [PAGE 1, PAGE 4]. Multi-week traps: small-sample noise over a week, rotation changes, opponent schedule strength, home/away arena tracking bias (only 15 arenas), injury regression, etc.

<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
This is a bit abstract but relates to how defenders/offenses adapt. Crisis habit regression: under pressure, shooters revert to close-range attempts unless deterred. Counter-trap: offense recognizes dominant interior defender and settles for mid-range (least productive per [PAGE 5]). Clock: shot clock pressure reduces deterrence effect late in clock. Also defensive rotations regress to habits.

<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
Physical: players are not coordinate pairs, 3D creatures with arms/legs [PAGE 5]. Biomechanical: vertical reach, wingspan not captured by x,y. Weather: indoor arena, but tracking subset bias. Veto proof: the geometric primitive abstraction vetoes certain causal claims.

<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>
Three scenarios:
1. Low-sample veto: Ibaka n=104 vs Howard n=409. Prediction: proximal FG% ranking unstable under bootstrap resampling.
2. Arena subset veto: 15 arenas only. Prediction: home/away splits show systematic FG% shifts due to unobserved arenas.
3. Distance-threshold veto: within 5 ft vs actual contest. Prediction: a defender standing 5.1 ft from basket but with 7' wingspan contests more than a 6'8" defender at 4.9 ft; proximal FG% misranks.

Need to ensure total words >= 1000 across sections. Each section should be substantial.

No betting lines anywhere.

Let me write carefully with LaTeX.

I need to use exact [PAGE N] markers. The source text has pages labeled [PAGE 1 of 11] through [PAGE 11 of 11]. I'll cite as [PAGE 1], [PAGE 2], etc.

Verbatim quotes: I'll include short quotes like "The Dwight Effect" as the ability... [PAGE 3], etc.

Let me draft the content now.

Word count target: THINK_TRACE alone needs >=400 words. Total across all sections >=1000. I'll aim for roughly 200-250 words per section average, with THINK_TRACE being longest (~500).

Let's begin.

THINK_TRACE: I'll write about the derivation chain:
1. Raw optical tracks -> discrete coordinates (geometric primitives).
2. Zone assignment -> spatial splits.
3. Conditional probability estimation -> proximal FG%.
4. Deterrence metric -> Dwight Effect.
5. Gray zones: sample bias (15 arenas), small n (Ibaka 104), teammate confounding, shot clock not recorded, geometric abstraction.

Use formal language.

SOURCE_OPERATORS_AND_EQUATIONS: Define the math rigorously.

RETROCAUSAL_GENEALOGY: Connect to baseball fielding pct, NFL cornerbacks, triple-slash. Multi-week traps: schedule, back-to-backs, opponent quality, tracking arena rotation.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression (shooters under pressure revert to rim), counter-trap (settle for mid-range), clock (shot clock pressure erodes deterrence).

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (3D athlete vs coordinate pair), biomechanical (wingspan/vertical), environmental (indoor but subset bias), veto adjudication (which claims survive).

RLVR_COUNTERFACTUAL_VETOES: Three scenarios with counterfactual predictions.

Check: no betting lines. No fake ratios like Force/Fatigue. All equations formal LaTeX with units.

Let me write it out.

I need to be careful about "odds" - I won't use that word in betting context. Probability is fine since it's not betting odds, but I should be careful. The invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I'll avoid the word "odds" entirely to be safe, using "probability" or "percentage" instead.

Now writing.

THINK_TRACE (aim ~550 words):

Start: The paper’s analytical core is a conditional-probability pipeline...

Multi-hop derivation:
- Hop 1: Optical tracking outputs $(x_t, y_t)$ trajectories at 25 Hz (implied, but paper doesn't specify Hz; I shouldn't invent. I'll say discrete spatiotemporal coordinates without specifying frequency unless in text. The text doesn't mention Hz. I'll avoid inventing units like Hz.)
- Hop 2: Shot events tagged with outcome $y_s \in \{0,1\}$ and location $z_s \in \{C,M,T\}$.
- Hop 3: Defender proximity binary $D_j(r) = \mathbb{1}[\|p_j - p_{\text{rim}}\|_2 \le r]$ for basket condition; $D_j(r,s) = \mathbb{1}[\|p_j - p_s\|_2 \le r]$ for shot condition.
- Hop 4: Frequency split estimator $\hat{f}_{j,z} = \frac{\sum_{s \in S_j} \mathbb{1}[z_s=z]}{|S_j|}$.
- Hop 5: Efficiency split $\hat{e}_{j,z} = \frac{\sum_{s \in S_j, z_s=z} y_s}{\sum_{s \in S_j} \mathbb{1}[z_s=z]}$.
- Hop 6: Proximal FG% $\widehat{\text{pFG\%}}_j = \frac{\sum_{s \in S_j(r)} y_s}{|S_j(r)|}$.
- Hop 7: Dwight Effect deterrence $\Delta_C(j) = f_{C,\text{league}} - f_{C,j}$.

Gray-zone audit:
- Sample selection: only 15 of 30 arenas equipped [PAGE 5], inducing geographic/temporal bias.
- Small sample singularity: Ibaka n=104 [PAGE 8, Appendix 1A rank 52] vs Howard n=409; standard error of proportion $\sqrt{p(1-p)/n}$ is large for Ibaka.
- Teammate confounding: proximal FG% reflects help defense, not individual isolation.
- Geometric abstraction: "players are not coordinate pairs" [PAGE 5], losing wingspan/vertical reach.
- No shot-clock variable: deterrence may decay as clock winds down (unobserved confounder).

This is good. Now write fully.

SOURCE_OPERATORS_AND_EQUATIONS: Define sets, estimators, units (%), assumptions, breakdown regimes.

Cite pages.

RETROCAUSAL_GENEALOGY: historical lineage.

RECURSIVE_THEORY_OF_MIND: crisis habit regression etc.

CROSS_LAYER_VETO_ADJUDICATION: physical/biomechanical/weather veto.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.

Let me write the final output. Ensure word count is high enough.

I will not use the word "odds". I'll use probability or percentage.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s analytical architecture proceeds through a multi-hop conditional-probability pipeline that converts raw optical tracking coordinates into defensive efficacy claims. Hop 1: SportVu emits discrete spatiotemporal observations that reduce each athlete to a coordinate pair on the court plane [PAGE 5]. Hop 2: every shot event \(s\) is assigned an outcome \(y_s \in \{0,1\}\), a spatial zone \(z_s \in \{C,M,T\}\) (close, mid-range, three-point), and a timestamp. Hop 3: for each interior defender \(j\), proximity indicators are constructed. For the Basket Proximity Condition, \(D_j^{\text{basket}}(r) = \mathbb{1}[\|p_j - p_{\text{rim}}\|_2 \le r]\) with \(r=5\) feet [PAGE 4]; for the Shot Proximity Condition, \(D_j^{\text{shot}}(r,s) = \mathbb{1}[\|p_j - p_s\|_2 \le r]\) with \(r \in \{1,3,5\}\) feet [PAGE 5]. Hop 4: frequency splits are estimated as \(\hat f_{j,z} = \frac{\sum_{s \in S_j} \mathbb{1}[z_s=z]}{|S_j|}\times 100\%\), constrained to sum to 100 across zones [PAGE 4]. Hop 5: efficiency splits are \(\hat e_{j,z} = \frac{\sum_{s \in S_j,\,z_s=z} y_s}{\sum_{s \in S_j} \mathbb{1}[z_s=z]}\times 100\%\) [PAGE 4]. Hop 6: proximal field-goal percentage is \(\widehat{\text{pFG\%}}_j(r) = \frac{\sum_{s \in S_j(r)} y_s}{|S_j(r)|}\times 100\%\) [PAGE 5]. Hop 7: the Dwight Effect deterrence metric is \(\Delta_C(j) = f_{C,\text{league}} - f_{C,j}\), where the league close-range frequency under basket proximity is 57.2% and Howard’s is 48.2% [PAGE 5].

Gray-zone audit. The largest structural threat is sample selection: as of January 2013 only 15 of 30 NBA arenas housed SportVu systems, so the 76,000-shot superset is geographically and temporally non-random [PAGE 5]. A second singularity is small-\(n\) instability: Serge Ibaka appears in Appendix 1 with only 104 shots faced [PAGE 8], whereas Dwight Howard has 409 [PAGE 8]; the binomial standard error \(\sqrt{p(1-p)/n}\) is therefore roughly twice as large for Ibaka, making rank-order claims fragile. Third, proximal FG% conflates individual rim protection with help-side rotations and teammate quality; the estimator does not isolate counterfactual shot outcomes absent defender \(j\). Fourth, the authors explicitly concede the geometric abstraction: “When we reduce Serge Ibaka to a simple x,y pair, we lose key information” [PAGE 5], because wingspan, vertical reach, and timing are discarded. Fifth, shot-clock state is not recorded, so deterrence may be a clock-dependent effect—offenses may settle for mid-range jumpers early in the possession but attack the rim under shot-clock pressure, an unobserved confounder that can reverse apparent defender rankings across game contexts.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(Z=\{C,M,T\}\) denote close-range, mid-range, and three-point zones [PAGE 4]. The frequency split for defender \(j\) over shot set \(S_j\) is
\[
\mathbf{F}_j = \left( f_{j,C}, f_{j,M}, f_{j,T} \right), \qquad
f_{j,z} = \frac{1}{|S_j|}\sum_{s\in S_j}\mathbb{1}[z_s=z]\times 100\%,
\]
with \(\sum_{z\in Z} f_{j,z}=100\) barring rounding [PAGE 4]. The league average is \(\mathbf{F}_{\text{NBA}}=(35,41,24)\) [PAGE 4]. The efficiency split is
\[
\mathbf{E}_j = \left( e_{j,C}, e_{j,M}, e_{j,T} \right), \qquad
e_{j,z} = \frac{\sum_{s\in S_j,\,z_s=z} y_s}{\sum_{s\in S_j}\mathbb{1}[z_s=z]}\times 100\%,
\]
where \(y_s\) is the binary made-shot indicator; league average \(\mathbf{E}_{\text{NBA}}=(53,39,36)\) [PAGE 4].

Basket Proximity Condition: \(S_j^{(5)} = \{s : \text{defender }j\text{ within }r=5\text{ ft of basket}\}\) [PAGE 4]. League close-range FG% under this condition is \(49.7\%\); Roy Hibbert and Larry Sanders reduce it to \(38\%\), while Luis Scola yields \(63\%\) [PAGE 5]. Dwight Effect deterrence: league close-range shot frequency is \(57.2\%\) with a qualifying defender within 5 ft of the basket, but Howard lowers it to \(48.2\%\) [PAGE 5]; among centers with \(\ge 100\) shots, Ibaka ranks last at \(74.0\%\) close-range frequency [PAGE 5].

Shot Proximity Condition: \(S_j(r)=\{s : \|p_j-p_s\|_2\le r\}\), \(r\in\{1,3,5\}\) ft [PAGE 5]. Overall, \(27.8\%\) of NBA shots occur within 5 ft of a qualifying interior defender, comprising \(21,042\) observed shots [PAGE 5]. Proximal FG% operator:
\[
\widehat{\text{pFG\%}}_j(5) = \frac{\sum_{s\in S_j(5)} y_s}{|S_j(5)|}\times 100\%.
\]
Table 1 reports Larry Sanders \(\widehat{\text{pFG\%}}=34.9\%\) (best) and Anderson Varejao \(54.2\%\) (worst) [PAGE 6].

Assumptions: (1) shot locations and defender coordinates are measured without systematic bias within the 15 tracked arenas [PAGE 5]; (2) zone boundaries are fixed and known [PAGE 4]; (3) each shot is an independent Bernoulli trial conditional on defender identity [PAGE 4]. Breakdown regimes: (a) low-count singularity when \(|S_j|<200\) or \(|S_j^{(5)}|<100\), where the standard error of a proportion exceeds \(\approx 3.5\) percentage points (e.g., Ibaka \(n=104\) [PAGE 8]); (b) arena-subset bias because only half the league’s venues contribute data [PAGE 5]; (c) geometric-primitive breakdown when wingspan or vertical reach—not captured by \((x,y)\)—determines contest success [PAGE 5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper positions itself inside a historical lineage of defensive measurement failure. In baseball, “errors” and “fielding percentage” dominated for decades despite poor correlation with true defensive value [PAGE 2]. In the NFL, elite cornerbacks suppress targets so thoroughly that they vanish from conventional statistics because quarterbacks avoid throwing in their direction [PAGE 2]. Basketball inherits this same attribution problem: blocks, steals, and defensive rebounds are discrete events that fail to capture strategic deterrence [PAGE 3]. The spatial splits methodology explicitly borrows from baseball’s “triple-slash line,” reformatting it into frequency/efficiency triples across court space [PAGE 1, PAGE 4]. The Dwight Effect is named after Howard precisely because his defensive value is “invisible” in block totals (2.69 per 48 minutes versus Ibaka’s 6.46) yet manifests in opponents’ reluctance to attack the rim [PAGE 3].

Multi-week traps arise when these static metrics are deployed over short windows. Because the sample covers only two seasons and half the arenas, a one-week or one-month slice exhibits high variance: a defender facing a weak offensive schedule in tracked venues can appear elite, while strong opposition inflates proximal FG% [PAGE 5]. Back-to-back fatigue, opponent lineup changes, and home/road tracking availability are unmodeled. The paper itself notes that advancing defensive analytics is a “long-term iterative process” requiring repeated investigation [PAGE 6], warning against treating any single weekly ranking as stable. Retrocausally, the offense’s shot distribution is not exogenous: the mere presence of Howard alters where shots occur [PAGE 3], so conditioning on observed shot locations without modeling the defender’s deterrent effect induces selection bias.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes how offensive decision-making collapses under defensive pressure. When a dominant interior defender is present, rational shooters should regress from high-value close-range attempts to lower-value mid-range jumpers—the “least productive shots in the NBA” [PAGE 5]. Howard exemplifies this: opponents reduce close-range frequency from 57.2% to 48.2% and settle for more mid-range attempts [PAGE 5]. However, under shot-clock crisis (late possession), that regression may reverse; shooters forced into rushed attempts may attack the rim regardless, weakening the deterrence effect and flattening proximal FG% differences—a temporal counter-trap.

The counter-trap operates on the defensive side: an offense that knows Howard protects the rim may deliberately pump-fake or drive-and-kick to generate open three-pointers, exploiting the spatial vacuum he creates near the basket. Because the paper’s efficiency split only measures close-range, mid-range, and three-point FG% without modeling assisted versus unassisted shots or clock state [PAGE 4], it cannot detect whether a low proximal FG% reflects genuine individual dominance or offensive over-correction away from the defender’s zone. The clock variable is absent from the SportVu event encoding in this study, so the interaction between deterrence and possession time remains unobserved; a defender ranked highly in proximal FG% may simply face opponents who rarely shoot while under pressure. Recursive theory-of-mind reasoning therefore implies that defensive rankings derived from static spatial splits are equilibrium objects: they depend on the offense’s belief about the defender’s presence, which itself adapts over the course of a game, a week, and a season.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer veto: the tracking system models players as discrete \((x,y)\) coordinate pairs on a plane [PAGE 5], but NBA athletes are three-dimensional. A defender’s center of mass may be 5 feet from the basket while a 7-foot wingspan and vertical leap extend the contested volume well beyond the 5-foot radius [PAGE 5]. Thus the event \(D_j^{\text{basket}}(5)\le 1\) undercounts true contest coverage for long-limbed defenders and overcounts it for shorter players, vetoing any claim that proximal FG% isolates pure rim protection independent of anatomy.

Biomechanical layer veto: shot-blocking requires temporal coincidence between hand arrival and ball release, a dynamic not encoded by static proximity thresholds of 1, 3, or 5 feet [PAGE 5]. Ibaka leads the league in blocks per 48 minutes yet ranks last among centers in close-range deterrence (74% of shots against him occur close range when he is within 5 feet of the basket) [PAGE 5]. This divergence vetoes the naive equation “proximity equals protection”: Ibaka generates many potential block opportunities because he is frequently near shots, but his mere presence does not dissuade shooters from attacking the rim, unlike Howard [PAGE 5].

Weather/environmental layer veto: games are indoors, so meteorological confounds are absent [PAGE 5], but the environmental subset is biased: only 15 arenas had SportVu as of January 2013 [PAGE 5]. Home-court optical coverage is non-random, so away-game defensive performance in untracked venues is unobserved. Veto adjudication rule: any causal claim that requires individual biomechanics (wingspan, vertical reach, reaction time) or temporal shot-clock context is invalid under the current operator set; only population-average spatial tendencies in tracked arenas survive.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Low-count instability. Serge Ibaka’s Basket Proximity results rest on \(n=104\) shots faced [PAGE 8], while Dwight Howard has \(n=409\) [PAGE 8]. Counterfactual: resample Ibaka’s 104 shots with replacement 10,000 times. Prediction: the 95% bootstrap confidence interval for his close-range FG% (41.6%) spans approximately \(\pm 9.6\) percentage points, overlapping the league mean of 49.7% [PAGE 5], so his apparent efficacy relative to Scola (62.4% close-range FG%, \(n=199\)) is not statistically separable at conventional thresholds. Veto triggered if \(|41.6\% - 49.7\%| < 1.96\sqrt{\hat p(1-\hat p)/104}\).

Veto Scenario 2 — Arena-subset selection bias. Only 15 of 30 arenas contribute tracked data [PAGE 5]. Counterfactual: re-estimate Larry Sanders’ proximal FG% (34.9%, \(n=1482\) shots defended [PAGE 9, Appendix 2]) using only games from the 15 untracked arenas (imputed via schedule rotation). Prediction: because tracked arenas may systematically host different offensive styles or officiating tendencies, Sanders’ proximal FG% shifts by more than 3 percentage points, indicating that the operator \(\widehat{\text{pFG\%}}_j\) is not transportable across the full NBA schedule. Veto triggered if tracked-versus-untracked proximal FG% difference exceeds the pooled standard error.

Veto Scenario 3 — Distance-threshold anatomical confound. The shot-proximity metric uses fixed Euclidean radii \(r\in\{1,3,5\}\) feet [PAGE 5]. Counterfactual: compare two defenders at identical \(r=4.9\) feet from the shot, one with a 7’6” wingspan and one with a 6’8” wingspan. Prediction: the long-winged defender contests a larger solid angle of the shot’s trajectory, lowering shooter FG% independent of center-of-mass distance; the current metric assigns both defenders identical proximity credit. Veto triggered if, conditional on \(r\le 5\) feet, proximal FG% correlates with measured wingspan (\(p<0.05\)) in a holdout tracking dataset, proving that the geometric-primitive proxy omits a causal biomechanical variable [PAGE 5].
</RLVR_COUNTERFACTUAL_VETOES>