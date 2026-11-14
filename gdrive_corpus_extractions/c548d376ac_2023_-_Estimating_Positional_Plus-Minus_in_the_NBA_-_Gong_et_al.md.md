---
source: "2023 - Estimating Positional Plus-Minus in the NBA - Gong et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2023"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3921
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about NBA Positional Plus-Minus. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully extract information from the provided markdown source text, which appears to be pages 1-19 of a paper titled "Estimating Positional Plus-Minus in the NBA" by Gong et al. (2023 MIT Sloan Sports Analytics Conference Research Paper Competition).

Let me structure my response.

Key facts from source:
- Paper: "Estimating Positional Plus-Minus in the NBA" by Gong et al., MIT SSAC 2023 Research Paper Competition, Basketball 111280.
- Pages: 18 (but actually text shows up to page 19).
- Data: NBA play type data from Synergy Sports (2015-16 to 2021-22, excluding 2019-20 due to COVID), NBA official player position data, NBA play-by-play data.
- Units: points scored per 100 possessions (efficiency).
- Stints: unique matchup between five offensive players and five defensive players.
- K-means++ clustering into 7 offensive positions: Roll and Cut Big, Post-up Big, Skilled Big, Movement Shooter, Spot-up Shooter, Versatile Scorer, Pick and Roll Attacker.
- 3 defensive positions: Big, Forward, Guard (mapped from official positions C/C-F/F-C -> Big; F/F-G -> Forward; G/G-F -> Guard).
- Hierarchical Bayesian linear model.
- Response variable Y: m x 1 matrix, points per 100 possessions by offensive team in a stint.
- X: m x 2n player matrix (1, -1, 0). First n offensive, last n defensive.
- Z: m x 2k team matrix.
- beta: vector of 2n player effects. If player in position group j, beta_pj ~ Normal(mu_j, tau_j^2). Low usage players: beta_p ~ Normal(0, 100).
- gamma: team effects, gamma_t ~ Normal(0, 100).
- Hyperpriors: mu_j ~ Normal(0, 100), tau_j^2 ~ Inverse-Gamma(0.01, 0.01), sigma^2 ~ Inverse-Gamma(? need to check exact hyperparameters from Appendix A). Appendix A says mu_j normal mean 0 variance 100; tau_j inverse gamma shape 0.01 scale 0.01. Need sigma^2 details but not fully visible in text (equations are missing images/formulas in markdown, but text describes them).
- Gibbs sampler: 30,000 iterations, burn-in 2,000 (Appendix A, page 16).
- Table 6: mean positional plus-minus estimates (offensive positive, defensive negative).
- Table 7: variance estimates.
- Results: Versatile Scorers highest offensive plus-minus (e.g., 16.8 in 2015-16, 17.8 in 2020-21, 17.6 in 2021-22). Bigs highest defensive plus-minus (least negative: -4.6 in 2015-16, -5.8 in 2021-22). Guards lowest defensive (-8.1 in 2015-16, -7.9 in 2021-22).
- Gaps shortened over time except Versatile Scorers.
- Roll and Cut Bigs improved from 10 to 14.3.
- Post-up Bigs declined from 55 to 20 players (Table 2).
- Variance: Spot-up Shooters lowest offensive variance. Post-up Bigs and Versatile Scorers higher offensive variance. Guards highest defensive variance.
- Robustness: removing garbage time (Appendix B, Table 8 thresholds) doesn't significantly alter results except 2020-21 (~4% garbage time vs 3.4-3.7% other seasons).
- Limitations: response variable doesn't reflect game importance (clutch vs garbage), clustering subjective (K-means++ heuristic).
- Future: win probability as response, player tracking data.

Now I need to write the sections.

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to discuss the derivation chain, assumptions, gray zones (missing play type data imputation, K-means++ subjectivity, 2019-20 exclusion, garbage time, low usage players, hierarchical shrinkage, etc.), and cite pages. Must be >=400 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Need to write out the model equations properly in LaTeX based on the text, since the images are missing. Cite [PAGE N]. Must avoid toy equations. Use real formalism.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss lineage from plus-minus (Rosenbaum 2004, Engelmann 2011, Sill 2010, Ilardi & Engelmann 2014, Winston 2012, Macdonald 2011/2012, Sabin 2021, Thomas et al. 2013, Yurko et al. 2019, Deshpande and Jensen 2016). Multi-week traps: season-to-season instability, small sample for rare positions (Post-up Bigs n=20), clustering drift across seasons, garbage time seasonality (2020-21), etc.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but relates to how teams/coaches adjust to positional valuations (Versatile Scorers being overvalued? Roll and Cut Bigs rising?), crisis habit regression (teams reverting to traditional roles under pressure), counter-trap (exploiting mispriced positional archetypes), clock (seasonal trends, 2021-22 convergence, 2020-21 anomaly). Need to be careful not to mention betting lines.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Discuss physical constraints (Bigs protect paint, Guards size-limited), biomechanical (play types requiring shooting vs post-up), weather isn't really applicable indoors but can discuss arena/environmental factors (neutral site 2019-20 excluded, altitude? no, stick to what source says: neutral site, COVID, garbage time). "Veto proof" means what physical/biomechanical constraints veto certain interpretations. Must not invent fake physics. Use source content.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I need 3 counterfactual veto scenarios with predictions. Examples:
1. If a team replaces a Versatile Scorer with a low-usage player at same minutes, predicted offensive plus-minus change based on Table 6 delta (e.g., 17.6 vs 0 prior mean).
2. If Post-up Bigs continue declining below threshold n, hierarchical variance tau^2 explodes (singularity), making estimates unreliable.
3. If garbage time exclusion threshold changes (e.g., differential >15 instead of >10), estimates shift (based on 2020-21 4% garbage time effect).
Need to make them verifiable from source data/tables and provide predictions.

Word count: total >= 1000 words across sections. THINK_TRACE >= 400 words. Other sections should be substantial.

Let's draft carefully.

Page citations: The source text has page numbers embedded: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19. I should cite like [PAGE 4], [PAGE 6], etc.

Important: Never mention spreads, totals, moneylines, odds. Avoid words like "spread", "moneyline", "total", "over/under", "odds". I can mention probabilities (credible intervals) since that's statistical, not betting. But avoid betting context.

Equations: I need to reconstruct from text.

Model:
Y = Xβ + Zγ + e
where Y is m x 1, points per 100 possessions.
X is m x 2n, entries {1, -1, 0}.
Z is m x 2k, entries {1, -1, 0}.
e ~ N(0, σ²I).

β_pj ~ N(μ_j, τ_j²) for p in position j.
For low usage: β_p ~ N(0, 100).
γ_t ~ N(0, 100).

Hyperpriors:
μ_j ~ N(0, 100)
τ_j² ~ Inv-Gamma(0.01, 0.01) (Appendix A page 16)
σ² ~ Inv-Gamma(?, ?) - text says hyperpriors for σ² but exact parameters not visible due to missing equation image. I should state what's visible and note singularity/breakdown if prior hyperparameters go to boundary.

Gibbs sampler: 30,000 iterations, burn-in 2,000 [PAGE 16].

Posterior inference: P(β_Versatile > β_Other | data) via 80% credible intervals of differences [PAGE 8].

Units: points per 100 possessions (efficiency rating). Variance units: (points per 100 possessions)².

Singularity/breakdown regimes:
- K-means++ elbow heuristic: no guaranteed global optimum; cluster labels subjective [PAGE 4, 7].
- Missing play type imputation assumes equal percentages for missing types; breaks if missingness is not random (MNAR) [PAGE 2].
- Low usage players (~20% of players) excluded from position assignment; prior N(0,100) is weakly informative but effectively regularizes to zero [PAGE 2].
- Post-up Big count drops to 20 in 2021-22 [PAGE 2 Table 2]; small n causes τ² posterior instability (Table 7 shows high variance 11 (10.1) etc.) [PAGE 7].
- σ² identifiability: with many player/team random effects and finite stints, variance components can be weakly identified; Gibbs mixing may suffer.
- 2019-20 excluded (neutral site, COVID) creates a temporal gap [PAGE 3].
- Garbage time removal 2020-21 anomaly [PAGE 13-14].

Now writing the actual response.

Section 1: THINK_TRACE (>=400 words).
I'll write a deep derivation audit, discussing the multi-hop from raw play-by-play to clustered positions to hierarchical shrinkage, gray zones (imputation, clustering subjectivity, exclusion of 2019-20, low usage, garbage time, variance component identifiability, response variable limitations). Must cite pages.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS.
Formal LaTeX. Units. Page citations. Breakdown. Mention exact singularity/breakdown regimes.

Section 3: RETROCAUSAL_GENEALOGY.
Lineage: Rosenbaum 2004 APM, Engelmann 2011, Sill 2010 RAPM, Ilardi & Engelmann 2014 RPM, Winston 2012, Macdonald 2011/2012 NHL adaptation, Sabin 2021 football plus-minus, Thomas et al. 2013 hockey, Yurko et al. 2019 nflWAR, Deshpande & Jensen 2016 win probability. Multi-week traps: seasonal drift in Post-up Bigs, Roll and Cut Big rise, 2020-21 garbage time spike, convergence of gaps by 2021-22.

Section 4: RECURSIVE_THEORY_OF_MIND.
Crisis habit regression: under playoff pressure, coaches regress to traditional 5 positions despite study's 7/3 redefinition. Counter-trap: exploiting Versatile Scorer premium by acquiring Roll and Cut Bigs as their value rises. Clock: 2015-16 to 2021-22 arc; 2020-21 anomaly; 2021-22 compressed offensive gaps.

Section 5: CROSS_LAYER_VETO_ADJUDICATION.
Physical: Bigs defend paint, size constraint for Guards. Biomechanical: Spot-up shooters catch-and-shoot (low variance), Versatile Scorers isolation/transition (high variance). Weather: indoor arena, neutral site 2019-20 excluded, no outdoor weather; garbage time as situational "weather" veto. Veto proof means physical bounds that cannot be overridden by model.

Section 6: RLVR_COUNTERFACTUAL_VETOES.
3 scenarios with predictions.
1. Substitution counterfactual: replace Versatile Scorer with Spot-up Shooter; predicted offensive delta ≈ 17.6 - 13.3 = 4.3 points/100 possessions (2021-22 means from Table 6 [PAGE 7]); veto if actual on/off splits deviate >2 SE.
2. Post-up Big rarity veto: if n < 30 (2021-22 n=20 [PAGE 2 Table 2]), τ² posterior dominated by prior Inv-Gamma(0.01,0.01); prediction: credible intervals widen, positional ranking unstable.
3. Garbage time threshold veto: if differential threshold lowered (more garbage time removed), 2020-21 estimates drop toward non-garbage baseline [PAGE 13-14]; prediction: 2020-21 offensive means decrease by ~0.5-1.0 points/100 possessions relative to full data.

Need to ensure no betting lines. "Credible intervals" is fine, not betting odds.

Let's write it out. I'll be careful with page references.

Let's check page numbers in source:
- Page 1: Title, intro.
- Page 2: Data, Table 1, play type qualification, missing values, low usage.
- Page 3: Table 2 continued, Table 3 defensive map, primary position, play-by-play, stints, Table 4.
- Page 4: Methodology, K-means++, standardization, model specification text, X matrix, Z matrix.
- Page 5: Y response variable, beta priors, low usage prior N(0,100), gamma priors N(0,100).
- Page 6: Hyperpriors text (images missing), Gibbs sampler.
- Page 7: Results 4.1, Table 6 offensive means.
- Page 8: Table 6 defensive means continued, Table 7 variance, Figure 2/3 discussion.
- Page 9: Figure 2, gaps shortening, Versatile Scorers exception.
- Page 10: Figure 4 defensive, Figure 5, Figure 6 variance Spot-up, Figure 7 variance Guards.
- Page 11: Figure 8, Figure 9, trends.
- Page 12: Discussion, Versatile Scorers ball-dominant, gaps shrunk, Roll and Cut Big improvement, Spot-up variance low, Post-up/Versatile high variance, Bigs defensive value, Guards variance high.
- Page 13: Additional analysis garbage time, Cleaning the Glass definition, factors.
- Page 14: Garbage time results, 2020-21 4% vs 3.4-3.7%, Figures 10-11.
- Page 15: Conclusion.
- Page 16: Appendix A Gibbs sampler 30k/2k, hyperpriors mu N(0,100), tau Inv-Gamma(0.01,0.01).
- Page 17: Appendix B Table 8 garbage time thresholds.
- Page 18: References.
- Page 19: References continued.

Good.

Now, writing style: academic, rigorous, no betting lines.

Word count check: THINK_TRACE alone needs >=400 words. Total across all sections >=1000. I'll aim for ~1500-2000 total.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper derives positional plus-minus through a multi-hop causal chain that begins with raw play-by-play stints and ends with shrunken hierarchical posterior means. Hop 1: extract stints from NBA play-by-play data for 2015-16 through 2021-22, excluding 2019-20 because the pandemic interrupted the season and forced neutral-site games, which breaks temporal comparability of scoring contexts [PAGE 3]. A stint is the unit of observation: a unique 5-on-5 matchup, with offensive possessions and points counted per stint [PAGE 3]. Hop 2: classify each player into one offensive role using Synergy play-type percentages fed into K-means++ clustering, standardized and with the miscellaneous category removed, yielding seven offensive clusters [PAGE 4]. Missing play-type cells are imputed by assigning equal percentages to the missing categories, an assumption that breaks down if missingness is not random (e.g., coaches deliberately hiding a player’s usage in certain play types) [PAGE 2]. Players under 10 minutes per game or under 10 possessions in a play type are labeled “low usage” and receive no position; they comprise roughly 20 percent of players per season and are regularized with a diffuse prior β_p ~ N(0, 100) rather than a positional prior [PAGE 2]. Hop 3: map official NBA positions to three defensive groups—Big (C, C-F, F-C), Forward (F, F-G), Guard (G, G-F)—with the F-C exception routed to Big because those players more often function as interior defenders [PAGE 3]. Hop 4: estimate a hierarchical Bayesian linear model where stint points per 100 possessions Y = Xβ + Zγ + e; player effects β are partially pooled within position j via β_pj ~ N(μ_j, τ_j²), and team effects γ_t ~ N(0, 100) absorb roster strength [PAGE 4-5]. Gray-zone audit: (1) K-means++ is heuristic; the elbow plot selects seven clusters, but no identifiability proof guarantees these are the true basketball roles, so the positional labels carry subjective domain knowledge [PAGE 4, 7]. (2) The response variable treats all points equally, so clutch scoring in the final minutes is weighted identically to first-quarter points, a known misspecification the authors acknowledge [PAGE 15]. (3) Variance components τ_j² and σ² use weakly informative inverse-gamma hyperpriors with shape/scale 0.01; when group sizes shrink—Post-up Bigs fall from 55 players in 2015-16 to only 20 in 2021-22 [PAGE 2, Table 2]—the posterior for τ² becomes prior-dominated and unstable, as reflected in Table 7’s large standard deviations (e.g., 11.0 (10.1) for Post-up Big in 2021-22) [PAGE 7]. (4) Garbage-time robustness shows the 2020-21 season is anomalous: roughly 4 percent of possessions are flagged as garbage time versus 3.4–3.7 percent in other seasons, and removing them shifts 2020-21 estimates downward [PAGE 13-14]. (5) The Gibbs sampler uses 30,000 iterations with 2,000 burn-in; convergence diagnostics are not reported in the provided text, so label-switching or poor mixing in high-dimensional random-effects space remains an unchecked gray zone [PAGE 16].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let m be the total number of stints in a season, n the number of unique players, and k the number of unique teams [PAGE 4-5]. Define the player incidence matrix X ∈ {−1, 0, 1}^{m × 2n}, where the first n columns encode offensive players and the last n columns encode defensive players; X_{i,p} = 1 if player p is on offense in stint i, −1 if on defense, and 0 if off the floor [PAGE 4]. Define the team incidence matrix Z ∈ {−1, 0, 1}^{m × 2k}, similarly split into offensive and defensive team columns [PAGE 4]. The response vector Y ∈ ℝ^m records points scored per 100 possessions by the offensive team in each stint; for example, 20 points in 20 possessions yields y_i = 100 [PAGE 5]. The linear predictor is

Y = Xβ + Zγ + e,   e_i ∼ N(0, σ²),   i = 1, …, m.

Conditional on X^i and Z^i, the y_i are independent normal with constant variance [PAGE 5]. The player-effect vector β ∈ ℝ^{2n} is hierarchically structured: if player p belongs to offensive or defensive position group j ∈ {1, …, 10} (seven offensive clusters plus three defensive groups), then

β_p | μ_j, τ_j² ∼ N(μ_j, τ_j²),

with low-usage players assigned β_p ∼ N(0, 100) [PAGE 5]. Team effects receive γ_t ∼ N(0, 100) [PAGE 5]. Hyperpriors, per Appendix A, are μ_j ∼ N(0, 100) and τ_j² ∼ Inv-Gamma(0.01, 0.01); the error variance σ² receives an inverse-gamma hyperprior whose exact shape/scale are suppressed by missing equation images in the source, creating an identifiability boundary when σ² → 0 or when τ_j² is weakly identified by small group sizes [PAGE 5-6, 16]. Posterior computation uses a Gibbs sampler with 30,000 iterations and a 2,000-iteration burn-in [PAGE 16]. Inference on positional dominance proceeds by drawing posterior samples of μ_j and computing Pr(μ_{Versatile Scorer} > μ_{j} | data) for j ≠ Versatile Scorer, summarized with 80% credible intervals of pairwise differences [PAGE 8]. Units are points per 100 possessions for location parameters and squared points per 100 possessions for variance parameters [PAGE 5, 7]. Breakdown regimes: K-means++ cluster labels are not invariant to random seeds despite ++ seeding, so positional taxonomy can drift season-to-season [PAGE 4]; the equal-percentage imputation for missing play types is violated under non-ignorable missingness [PAGE 2]; groups with n < 30 (e.g., Post-up Big at n = 20 in 2021-22) produce τ_j² posteriors that collapse toward the prior scale and yield inflated posterior standard deviations [PAGE 2, Table 2; PAGE 7, Table 7]; and the 2019-20 exclusion creates a temporal discontinuity that prevents continuous seasonal differencing across the full 2015-16 to 2021-22 window [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper sits in a direct lineage of adjusted plus-minus and hierarchical sports rating models. It cites Rosenbaum (2004) for adjusted plus-minus, Engelmann (2011) and Sill (2010) for regularized adjusted plus-minus, Ilardi and Engelmann (2014) for ESPN’s real plus-minus, Winston (2012) for Mathletics, Macdonald (2011, 2012) for regression-based adjusted plus-minus translated from NHL, Sabin (2021) for football plus-minus with hierarchical structure, Thomas et al. (2013) for competing-process hazard models in ice hockey, and Yurko et al. (2019) for nflWAR [PAGE 1]. Deshpande and Jensen (2016) are invoked for win-probability-based player impact, which the authors identify as a future replacement for the current points-per-100-possessions response [PAGE 1, 15]. The paper’s innovation is to replace individual-level APM with a positional hierarchy: seven offensive clusters from K-means++ on Synergy play types and three defensive groups from official NBA positions [PAGE 1-4]. Multi-week traps appear in the seasonal arcs. Post-up Bigs collapse from 55 players in 2015-16 to 20 in 2021-22, so any multi-season narrative that treats this position as stable suffers from survivorship and selection bias [PAGE 2, Table 2]. Roll and Cut Bigs rise steadily from a posterior mean of 10.0 in 2015-16 to 14.3 in 2021-22, compressing the offensive gap with Versatile Scorers, who remain on top at 17.6 in 2021-22 [PAGE 7, Table 6]. The 2020-21 season is a statistical trap: because roughly 4 percent of possessions are garbage time versus 3.4–3.7 percent in other seasons, full-data estimates for 2020-21 are inflated relative to garbage-time-removed estimates, creating a false seasonal spike if garbage time is not modeled [PAGE 13-14]. Defensive variance also carries a trap: Guards show the highest defensive plus-minus variance across seasons, suggesting a bimodal population of elite and poor perimeter defenders that a single mean obscures [PAGE 10-11, Table 7].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis-habit regression predicts that under playoff pressure, coaching staffs regress to the traditional five-position vocabulary even though the paper’s redefined seven offensive and three defensive roles better capture modern usage [PAGE 1, 6-7]. A Versatile Scorer, defined by isolation, transition, and pick-and-roll dominance, tends to be ball-dominant and star-level; teams under crisis lean further into that player rather than distributing play types, which mechanically inflates that position’s posterior mean while suppressing teammates’ estimated contributions through the stint design matrix X [PAGE 12, 4]. The counter-trap exploits the paper’s finding that Roll and Cut Bigs improved steadily while their league population stayed roughly stable (roughly 54–64 players per season): a front office can acquire Roll and Cut Bigs before the market prices in their rising offensive plus-minus, while avoiding Post-up Bigs whose counts and relevance are collapsing [PAGE 2, Table 2; PAGE 7, Table 6]. The clock operates at the seasonal scale: offensive positional gaps were wide in 2015-16, narrowed by 2021-22, and only Versatile Scorers remain consistently separated above zero in credible-interval comparisons [PAGE 8-9]. If a decision-maker treats the 2021-22 compressed gap as permanent, they misread the clock, because the compression was driven by Roll and Cut Big improvement rather than decline at the top [PAGE 12]. Defensive theory of mind says Bigs provide the highest defensive plus-minus (least negative, around −4.6 to −5.8) because they protect the paint and guard opposing Bigs, while Guards offer the least (−7.9 to −9.3) but with the highest variance, implying a selection problem: teams cannot infer average Guard defense from the mean because exceptional and terrible defenders cancel in the posterior [PAGE 7, Table 6; PAGE 10-12].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Bigs are interior defenders whose responsibilities include paint protection; this size-and-rim proximity constraint vetoes any interpretation that Guards or Forwards can substitute for Big defensive value without a scheme change [PAGE 3, 12]. Biomechanical layer: Spot-up Shooters occupy the corner and catch-and-shoot, a low-variance, repeatable motor pattern, which vetoes claims that their offensive efficiency should vary widely player-to-player; indeed their posterior variance is the lowest among offensive positions in most seasons [PAGE 7, 10, Table 6-7]. Conversely, Versatile Scorers and Post-up Bigs rely on isolation, post-ups, and transition—high-variance, matchup-dependent actions—so their offensive plus-minus variance is substantially higher, and any model that forces equal positional variance is physically invalid [PAGE 7, 10, Table 7]. Environmental/weather layer: NBA games are indoors, so meteorological weather does not veto outcomes; however, the 2019-20 neutral-site bubble environment was excluded precisely because it broke home-court and travel confounds, and the 2020-21 season exhibits an elevated garbage-time share (~4 percent) that acts as a situational veto on full-season comparability unless garbage-time stints are removed [PAGE 3, 13-14]. Veto proof: the hierarchical prior β_p ∼ N(0, 100) for low-usage players cannot override the physical fact that those players rarely occupy the floor; their estimated effects are shrunk toward zero by design, not by observed performance [PAGE 2, 5]. Any claim that a low-usage player has a meaningful positional plus-minus is vetoed by the data structure itself.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 (Substitution veto): Replace a 2021-22 Versatile Scorer (offensive plus-minus mean 17.6, SD 1.5) with a Spot-up Shooter (mean 13.3, SD 1.3) at equal minutes. Prediction from Table 6 [PAGE 7]: the offense should lose approximately 4.3 points per 100 possessions, with the credible interval of the difference excluding zero if posterior samples agree. Veto condition: if actual lineup on/off splits show a change smaller than 2.0 points per 100 possessions or the difference interval includes zero, the positional mean is not transportable to that roster context.

Scenario 2 (Rare-group singularity veto): Post-up Bigs numbered only 20 players in 2021-22 [PAGE 2, Table 2], with posterior variance estimate 11.0 (SD 10.1) [PAGE 7, Table 7]. Prediction: because n < 30, the τ² posterior is dominated by the Inv-Gamma(0.01, 0.01) hyperprior, so the credible interval for μ_{Post-up Big} should be wide and season-to-season rank unstable. Veto condition: if a future season adds fewer than 10 new Post-up Bigs, the positional estimate must be excluded from trade-replacement-level calculations; the model breakdown regime is n ≤ 15 where τ² is prior-boundary identified.

Scenario 3 (Garbage-time threshold veto): In 2020-21, roughly 4 percent of possessions are garbage time versus 3.4–3.7 percent in other seasons, and full-data 2020-21 positional plus-minus is higher than garbage-time-removed estimates [PAGE 13-14]. Prediction: lowering the score-differential garbage-time threshold (removing more stints) should reduce 2020-21 offensive positional means by roughly 0.5–1.0 points per 100 possessions relative to the full-data estimates in Table 6 [PAGE 7]. Veto condition: if removing garbage time leaves 2020-21 means unchanged within posterior standard deviation, then the 4 percent garbage-time share is not driving the seasonal anomaly and the paper’s robustness claim is falsified.
</RLVR_COUNTERFACTUAL_VETOES>