---
source: "2016 - The Pressing Game Optimal Defensive Disruption in Soccer - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2016"
pages: 10
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3583
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided source paper: "The Pressing Game: Optimal Defensive Disruption in Soccer" by Iavor Bojinov and Luke Bornn (2016 MIT Sloan Sports Analytics Conference).

Strict invariants:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully extract the actual equations from the source. The source text seems to have some missing equations due to PDF extraction issues (blank equation slots where images were). I need to note that explicitly rather than inventing fake ones. Let me look at what's available.

Equation (1) is referenced but the actual LaTeX is missing in the extraction. The text says:
"where σ(x) = e^x /(1 + e^x ). The vector X_i^Atk = (X_i^{Atk}1, ..., X_i^{Atk}20) is one-hot encoded..."

The actual equation appears to be:
P(Y(s)=1 | Atk, Def) = σ(α + X_i^Atk β^Atk + X_i^Def β^Def + Z(s))

I should reconstruct this formally but clearly mark that the explicit equation was extracted from context since the PDF rendering left a blank, or state it as the implied model. Actually, I should be careful not to "invent fake ratios." I can state the formal model as implied by the text description. The text explicitly defines:
- Y(s) binary: 1 disruption, 0 continual control
- σ(x) = e^x/(1+e^x)
- X^Atk and X^Def one-hot encoded vectors of length 20 (20 EPL teams)
- α intercept
- β^Atk, β^Def team-specific coefficients
- Z(s) two-dimensional Gaussian process with Matérn covariance
- Posterior mean of Z(s) is disruption surface (DS)

Equation for individual team DS:
P(Y(s)=1 | Def=j) = σ(α + X_i^Def β^Def + V_j^D(s))
where V_j^D(s) is 2D GP with Matérn covariance. DS = posterior mean of V_j^D(s).

Offensive control surface:
P(Y(s)=0 | Atk=j) or similar, with V_j^A(s).

I need to cite page numbers. The source text has page markers: page 1, page 2, page 3, page 4, page 5, page 6, page 7, page 8. I should cite exact [PAGE N] markers.

Word count: >=1000 words across sections. THINK_TRACE needs >=400 words.

Let me structure:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit. Discuss:
- The GLSR model, binary outcome, spatial GP
- How coefficients shift DS up/down
- Matérn hyperparameters smoothness/range
- Approximate empirical Bayes: fixing hyperparameters to mode from Z(s)
- The "Pochettino Effect" as manager cartography
- Gray zones: equation blanks in extraction, one-hot encoding dimensionality (20 teams but relegated/promoted means changing set), approximate EB assumption of stationarity across teams, control surface defined as ability to retain possession but modeled as 1-disruption? Actually control surface is separate model for offensive control.
- Breakdown regimes: Matérn GP singularity when range -> 0 or smoothness issues, sparse data regions, one-hot collinearity with intercept if all teams present (reference category issue), approximate EB breakdown if hyperparameter posterior not tight.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. I will write out the equations clearly. Units: probability (dimensionless [0,1]), spatial location s in meters or normalized pitch coordinates (not specified but pitch is spatial), coefficients in log-odds (since logistic link), Matérn parameters dimensionless smoothness ν and range ρ in meters/pitch units. Page citations for each.

RETROCAUSAL_GENEALOGY: Historical lineage. Spatial statistics (Banerjee et al. 2014, Diggle et al. 1998, Rasmussen 2006, Lindgren et al. 2011 SPDE, Rue et al. 2009 INLA). Soccer analytics lineage: Sally & Anderson "The Numbers Game", Prozone data. Multi-week traps: fitting subset for player-specific questions (e.g., Ivanovic position change), assuming cartography stable across weeks when injuries/suspensions alter it. Manager effect persistence across leagues.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. This is a bit abstract but I need to interpret it in context. Crisis habit regression: teams reverting to default defensive shape under pressure. Counter-trap: opponent anticipating press and bypassing it. Clock: time decay of tactical surprise, match state, fatigue. I'll connect to pressing high vs sitting back, Pochettino's high press, Manchester City passive defense, Stoke's high press vs City.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. The paper is purely spatial/event data. Veto layers: physical (pitch dimensions, player speed), biomechanical (tackle/interception biomechanics not captured), weather (rain/wind affecting pass completion not in model), referee, fixture congestion. Since model uses only event locations and team IDs, any physical constraint not in data is a veto. Proof: model assumes spatial stationarity via Matérn; weather breaks stationarity.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or just verifiable scenarios. I'll provide 3 counterfactual veto scenarios with testable predictions:
1. If Sunderland's disruption surface in own zone remains below average, shots against remain high (predicted: shots against > league average + 200). Verifiable via match logs.
2. If Burnley's control dip outside opponent penalty box persists, possession retention in threatening positions < half league average (predicted). Verifiable via Prozone events.
3. If Stoke employs high press vs Man City (as in Aug 2014), disruption spikes in City's final third leading to turnover (predicted), verified by Etihad result. But no betting lines.

I must ensure no mention of odds, spreads, totals, moneylines. I can mention match results (Stoke won at Etihad) but not betting odds.

Let's write carefully. Need >=1000 words total. I'll aim for substantial length.

Citations: Use [PAGE 1], [PAGE 2], etc. based on the text markers. The text has:
- Page 1: Abstract, Intro, Figure 1 mention
- Page 2: Section 2, Equation 1 discussion, Figure 2 mention
- Page 3: Section 3, individual team models, Figure 3
- Page 4: Figure 4, Burnley/Man City/Sunderland
- Page 5: Man City, Sunderland
- Page 6: Section 4 Pochettino, Figure 5
- Page 7: Conclusions, Acknowledgements
- Page 8: References

I'll cite these.

Equations to state formally:

(1) Season average:
\[
\Pr(Y(\mathbf{s})=1 \mid \text{Atk}, \text{Def}) = \sigma\left(\alpha + (\mathbf{X}^{\text{Atk}}_i)^\top \boldsymbol{\beta}^{\text{Atk}} + (\mathbf{X}^{\text{Def}}_i)^\top \boldsymbol{\beta}^{\text{Def}} + Z(\mathbf{s})\right)
\]
\[
\sigma(x) = \frac{e^x}{1+e^x}
\]
where \(Z(\mathbf{s}) \sim \mathcal{GP}(0, C_{\text{Matérn}}(\mathbf{s}, \mathbf{s}'; \nu, \rho))\). Posterior mean \(\mathbb{E}[Z(\mathbf{s}) \mid \mathcal{D}]\) = disruption surface (DS).

Units: \(\alpha, \boldsymbol{\beta}\) in log-odds (dimensionless), \(\mathbf{s}\) in pitch coordinates (m or normalized [0,1]²), \(\Pr \in [0,1]\).

(2) Team disruption surface:
\[
\Pr(Y(\mathbf{s})=1 \mid \text{Def}=j) = \sigma\left(\alpha + (\mathbf{X}^{\text{Def}}_i)^\top \boldsymbol{\beta}^{\text{Def}} + V^D_j(\mathbf{s})\right)
\]
DS_j(s) = posterior mean of \(V^D_j(\mathbf{s})\). Positive = presses more than average; negative = presses less.

(3) Team offensive control surface:
\[
\Pr(Y(\mathbf{s})=0 \mid \text{Atk}=j) = \sigma\left(\alpha + (\mathbf{X}^{\text{Atk}}_i)^\top \boldsymbol{\beta}^{\text{Atk}} + V^A_j(\mathbf{s})\right)
\]
CS_j(s) = posterior mean of \(V^A_j(\mathbf{s})\). Positive = retains possession better than average.

Approximate EB: set Matérn hyperparameters \((\nu, \rho)\) for each team GP to mode from \(Z(\mathbf{s})\) in Eq 1. Assumption: smoothness and correlation range similar across teams; posterior tightly centered.

Breakdown/singularity:
- Matérn GP: as \(\rho \to 0\), covariance becomes white noise (no spatial smoothing), surface overfits; as \(\nu \to 0\), non-differentiable rough surface; numerical singularity when design matrix for one-hot teams is rank-deficient (all 20 teams present with intercept → perfect collinearity; needs reference category or sum-to-zero).
- Approximate EB breaks if team-specific hyperparameter posteriors are multimodal or widely dispersed (e.g., promoted/relegated teams with sparse data).
- Binary outcome rare events: disruptions in low-pressure zones may be sparse, causing posterior uncertainty explosion.

Now writing the sections. I'll keep it formal and dense.

Need to ensure I don't mention betting. I can mention "shots for/against", "goals", "possession", "tackles", "interceptions". All fine.

Let's draft.

THINK_TRACE (>=400 words): I'll write around 500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: around 300-400 words.

RETROCAUSAL_GENEALOGY: around 250 words.

RECURSIVE_THEORY_OF_MIND: around 250 words.

CROSS_LAYER_VETO_ADJUDICATION: around 250 words.

RLVR_COUNTERFACTUAL_VETOES: around 200-300 words.

Total should exceed 1000 easily.

I must not say "odds" except maybe "log-odds" which is statistical, not betting odds. Should be fine since it's a technical term, but to be safe I'll say "logit scale" or "log-odds (statistical, not wagering)". Actually invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." The word "odds" alone might trigger. Better to avoid the word "odds" entirely. I'll use "logit scale" or "log-probability ratio". The link function is logistic, so log-odds is the natural term, but I'll write "logit (log-probability ratio)" and avoid the word "odds". I'll also avoid "moneyline", "spread", "total". Good.

Let's write.

I'll use exact [PAGE N] markers. For verbatim quotes, I'll quote short phrases from the text.

Quotes:
- Page 1: "Soccer, the most watched sport in the world..."
- Page 2: "the area inside the penalty box is where the defending team is most likely to disrupt their opponent."
- Page 2: "Intuitively, the defensive disruption and offensive control coefficients shift the DS up or down depending on their sign."
- Page 3: "Negative values indicate a team presses less than the average, while positive values indicate that a team presses more."
- Page 3: "This approximation hinges on the expectation that the smoothness and the correlation range are similar across teams."
- Page 4: "Burnley had the lowest control coefficient that season..."
- Page 6: "Pochettino managed to make these drastic changes without substantially altering the team."

Okay, ready to produce final answer.
</NATIVE_REASONING>

<THINK_TRACE>
The paper proposes a generalized linear spatial regression (GLSR) for binary disruption events on a soccer pitch. The first epistemic hop is the outcome definition: Y(s)=1 denotes a disruption (interception, tackle, clearance, block), Y(s)=0 denotes continual control (completed pass, touch). This binary response is modeled through a logistic link σ(x)=e^x/(1+e^x), mapping a linear predictor to a probability in [0,1]. The linear predictor contains an intercept α, one-hot encoded attacking and defending team indicators (20 EPL teams per season), team-specific coefficients β^Atk and β^Def, and a spatial Gaussian process Z(s) with Matérn covariance. The posterior mean of Z(s) is defined as the season-average disruption surface (DS) [PAGE 2].

A second hop examines identifiability and the team-specific extension. Because the attacking and defending one-hot vectors each span 20 teams, including both alongside an intercept creates perfect collinearity unless a reference category or sum-to-zero constraint is imposed; the text does not explicitly state the constraint, which is a gray zone. The model is fit via INLA with vague Gaussian hyper-priors [PAGE 2]. The third hop expands to separate GPs V^D_j(s) and V^A_j(s) for each team j, giving the disruption surface and control surface (CS). The paper then adopts an approximate empirical Bayes shortcut: it fixes the Matérn smoothness ν and range ρ for every team-level GP to the mode estimated from the season-level Z(s) [PAGE 3]. This is computationally efficient but imposes a strong stationarity assumption that spatial correlation structure is invariant across teams and seasons.

The gray-zone audit identifies three breakdown regimes. First, the Matérn GP becomes singular as range ρ→0 (white-noise limit, no spatial borrowing) or as smoothness ν→0 (rough, non-differentiable realizations), causing the surface to overfit local event noise. Second, the one-hot design matrix is rank-deficient if all 20 teams appear with an intercept and no constraint, making β^Atk and β^Def non-unique. Third, approximate empirical Bayes fails if the posterior over (ν,ρ) is multimodal or diffuse—plausible for promoted/relegated teams or small subsets of games (e.g., a single defender’s appearances), which the paper nevertheless proposes to model in Section 3.4 [PAGE 4]. The cartographic interpretation (positive = more pressing, negative = less pressing) assumes the spatial process is centered so that zero means league-average behavior; if the GP prior mean is misspecified, team coefficients absorb spatial bias rather than pure tactical intent.

A fourth hop connects coefficients to match outcomes: higher control and disruption coefficients correlate with more shots for and fewer shots against [PAGE 2], but this is an ecological correlation at the team-season level, not a causal guarantee for individual possessions. Finally, the manager analysis ("Pochettino Effect") treats surface changes as tactical when rosters are stable, but the paper notes six purchases in one offseason without first-team regulars [PAGE 6], leaving open the possibility that unobserved player development, not management, drives cartographic shifts. These assumptions must be stressed before any operational use of the surfaces.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal model reconstruction from source text (equations rendered as implied by the paper’s notation; explicit equation images were lost in PDF extraction, so structure is derived from the surrounding definitions on [PAGE 2]-[PAGE 3]):

Season-average disruption model:
\[
\Pr\!\left(Y(\mathbf{s})=1 \mid \text{Atk}_i,\text{Def}_i\right)
=
\sigma\!\left(
\alpha
+
(\mathbf{X}^{\mathrm{Atk}}_i)^{\top}\boldsymbol{\beta}^{\mathrm{Atk}}
+
(\mathbf{X}^{\mathrm{Def}}_i)^{\top}\boldsymbol{\beta}^{\mathrm{Def}}
+
Z(\mathbf{s})
\right)
\]
\[
\sigma(x)=\frac{e^{x}}{1+e^{x}},\qquad
\Pr\in[0,1]
\]
where \(\mathbf{s}\in\mathbb{R}^2\) is a pitch location (units: meters or normalized pitch coordinates), \(\alpha\) is the intercept, \(\mathbf{X}^{\mathrm{Atk}}_i,\mathbf{X}^{\mathrm{Def}}_i\in\{0,1\}^{20}\) are one-hot team indicators for the 20 EPL teams, \(\boldsymbol{\beta}^{\mathrm{Atk}},\boldsymbol{\beta}^{\mathrm{Def}}\in\mathbb{R}^{20}\) are offensive control and defensive disruption coefficients on the logit scale, and \(Z(\mathbf{s})\sim\mathcal{GP}\!\left(0,C_{\mathrm{Mat\u00e9rn}}(\mathbf{s},\mathbf{s}';\nu,\rho)\right)\). The Matérn covariance has smoothness \(\nu\) (controls differentiability) and range \(\rho\) (distance at which covariance becomes small) [PAGE 2]. The posterior mean \(\mathbb{E}[Z(\mathbf{s})\mid\mathcal{D}]\) is the disruption surface (DS) [PAGE 2].

Team-specific disruption surface:
\[
\Pr\!\left(Y(\mathbf{s})=1 \mid \text{Def}=j\right)
=
\sigma\!\left(
\alpha
+
(\mathbf{X}^{\mathrm{Def}}_i)^{\top}\boldsymbol{\beta}^{\mathrm{Def}}
+
V^{D}_j(\mathbf{s})
\right),\qquad
\mathrm{DS}_j(\mathbf{s})=\mathbb{E}[V^{D}_j(\mathbf{s})\mid\mathcal{D}]
\]
where \(V^{D}_j\) is a 2D GP with Matérn covariance. Positive values indicate more pressing than average; negative values indicate less [PAGE 3].

Team-specific offensive control surface:
\[
\Pr\!\left(Y(\mathbf{s})=0 \mid \text{Atk}=j\right)
=
\sigma\!\left(
\alpha
+
(\mathbf{X}^{\mathrm{Atk}}_i)^{\top}\boldsymbol{\beta}^{\mathrm{Atk}}
+
V^{A}_j(\mathbf{s})
\right),\qquad
\mathrm{CS}_j(\mathbf{s})=\mathbb{E}[V^{A}_j(\mathbf{s})\mid\mathcal{D}]
\]
where \(V^{A}_j\) is a 2D GP with Matérn covariance. Positive values indicate superior possession retention [PAGE 3].

Approximate empirical Bayes hyperparameter fixing: set \((\nu,\rho)\) for every \(V^{D}_j,V^{A}_j\) to the posterior mode obtained from \(Z(\mathbf{s})\) in Equation (1) [PAGE 3]. Assumption: smoothness and correlation range are similar across teams and seasons; justification is that the posterior for \(Z(\mathbf{s})\) is tightly centered around a season-invariant mode [PAGE 3].

Singularity and breakdown regimes:
1. Matérn range \(\rho\to0\): covariance collapses to white noise, destroying spatial smoothing and causing surface overfit to sparse event locations.
2. Matérn smoothness \(\nu\to0\): realizations become non-differentiable; posterior surface loses physical interpretability as a tactical “map.”
3. Design-matrix rank deficiency: 20 team one-hots plus intercept without reference/sum-to-zero constraint makes \(\boldsymbol{\beta}\) non-identifiable.
4. Approximate EB failure: if team-specific \((\nu,\rho)\) posteriors are diffuse or multimodal (e.g., relegated teams, cup subsets, single-player subsets), borrowing the global mode injects bias.
5. Rare-event sparsity: disruptions in low-pressure zones may be too sparse for stable posterior means, inflating uncertainty in exactly the regions coaches wish to exploit.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s statistical genealogy descends from hierarchical spatial statistics and geostatistics: Banerjee, Carlin, and Gelfand (2014) [PAGE 8], Diggle, Tawn, and Moyeed’s model-based geostatistics (1998) [PAGE 8], Rasmussen’s Gaussian processes for machine learning (2006) [PAGE 8], and the INLA/SPDE computational lineage of Lindgren, Rue, and Lindström (2011) and Rue, Martino, and Chopin (2009) [PAGE 8]. The soccer domain lineage traces to Prozone event data for the EPL 2012/13–2014/15 seasons [PAGE 1] and the popular analytics framing of Sally and Anderson’s *The Numbers Game* (2013) [PAGE 8], which the paper cites for the possession-to-shots relationship.

Multi-week traps emerge when this cartography is deployed dynamically. The paper itself suggests fitting the model on subsets of games to answer questions such as how playing a defender out of position alters the team DS [PAGE 4]. This is a retrospective trap: surface estimates from a short window inherit the same Matérn hyperparameters borrowed from the full season via approximate empirical Bayes, but the effective sample size collapses, so the posterior mean is dominated by the prior rather than the observed subset. A second trap is temporal non-stationarity: a manager’s surface in week 5 need not equal week 25 because injuries, suspensions, and opponent adaptation reshape the spatial distribution of disruptions. The paper treats managerial effects as persistent across seasons (Pochettino at Southampton then Tottenham) [PAGE 6], yet a mid-season tactical pivot would appear as a surface discontinuity that the stationary GP prior smooths over, delaying detection. A third trap is cross-league portability: the Matérn range and smoothness learned on EPL pitches may not transfer to leagues with different pitch dimensions, refereeing standards, or climate-induced ball behavior, violating the assumption that the spatial correlation structure is stable enough to reuse.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Recursive theory of mind models how each side anticipates the other’s pressing posture. Layer 0 is the base surface: a team’s DS maps where it disrupts, and its CS maps where it retains possession. Layer 1 is the opponent’s belief about that surface. If Manchester City’s CS is dominant in the final third, an opponent (Layer 1) may elect to press high up the pitch to disrupt City’s control surface before it reaches dangerous territory; the paper notes Stoke City used exactly this high-pressing tactic to win at the Etihad in August 2014 [PAGE 4]. Layer 2 is City’s belief that the opponent believes City is vulnerable in the final third; City may then deliberately invite pressure and play through it, exploiting the space left behind by the pressing team.

Crisis habit regression occurs when a team under threat reverts to its default defensive cartography. Sunderland’s DS was almost entirely below average, especially in its own zone, meaning its habit under pressure was passive rather than disruptive [PAGE 5]. In a crisis—protecting a lead or avoiding relegation—this regression predicts continued shot concessions because the defensive surface does not shift toward the penalty box where disruptions are most likely [PAGE 2]. The counter-trap is the opponent’s anticipation of that regression: if Sunderland is known to sit deep, the attacking team can overload the midfield rather than the final third, knowing the disruption surface will not rise to meet them. The clock variable is match state and time remaining. A high-pressing team like Pochettino’s Tottenham can sustain an elevated DS early, but as the clock winds down and fatigue accumulates, the spatial GP’s stationary range assumption breaks down; pressing intensity decays, and the surface collapses toward the team’s passive baseline. Thus the counter-trap is time-dependent: it works best late in matches against teams whose crisis habit is defensive regression, and least effective early when the pressing surface is still elevated.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
The model’s output is a purely spatial, event-driven probability surface. Three cross-layer vetoes can invalidate its tactical prescriptions:

Physical layer (pitch geometry and ball physics): The DS/CS treats the pitch as a continuous 2D domain with isotropic Matérn correlation [PAGE 2], but physical constraints are anisotropic. The penalty box, touchlines, and goal areas create hard boundaries where the GP covariance is not stationary. A veto triggers if a recommended pressing zone lies within two meters of the touchline or goal line, where the Matérn kernel’s assumption of translation invariance fails because the ball can leave play.

Biomechanical layer (player acceleration and interception radius): The model infers disruption probability from event locations but does not encode player speed, reaction time, or tackle reach. A veto triggers if the surface recommends pressing a region that requires a defender to cover more than approximately 5–7 meters in under 1.5 seconds to reach the ball carrier; human biomechanics impose a hard cone of reachable space that the smooth GP ignores, producing false-positive disruption predictions in regions no player can physically contest in time.

Weather layer (precipitation, wind, surface friction): The data are pooled across the 2012/13–2014/15 EPL seasons without weather covariates [PAGE 1], despite the paper’s own conclusion that home/away and other covariates should be added [PAGE 7]. Rain and wind alter pass completion and ball roll, shifting the empirical disruption surface independently of tactics. A veto triggers if match-day precipitation exceeds a threshold (e.g., >2 mm/hr) or wind speed exceeds roughly 15 km/h, because the stationary Matérn surface learned in fair-weather conditions no longer describes the conditional probability of disruption.

Adjudication rule: any tactical recommendation derived from a surface cell must pass all three layers simultaneously. If the physical boundary, biomechanical reach, or weather condition vetoes the cell, the posterior mean at that location is overridden and the region is marked “no reliable disruption advice.” This prevents the model from prescribing presses in the corner flag during a downpour where no defender can reach the ball before it exits play.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Sunderland maintains a below-average DS in its own defensive third across a five-game stretch. Prediction: shots against remain approximately 200 above the league average, consistent with the paper’s observation that Sunderland conceded nearly 700 shots, about 200 above average [PAGE 5]. Verification: compare event-log shot counts against Sunderland in that stretch to the league mean; if shots against do not exceed the league average by at least 100, the surface-to-outcome link is falsified for this team.

Scenario 2: Burnley’s control surface exhibits a major dip outside the opponent’s penalty box, and the team continues to field David Jones and Danny Ings in central midfield and forward roles. Prediction: possession retention in threatening positions remains at roughly half the league average, explaining the 28-goal season (20 below league average) [PAGE 4]. Verification: track completed passes and touches in the final third for Burnley; if retention exceeds 75% of league average despite the surface dip, the control surface is miscalibrated.

Scenario 3: Stoke City employs a high-pressing tactic against Manchester City, targeting City’s dominant final-third control surface, as occurred at the Etihad in August 2014 [PAGE 4]. Prediction: disruption events in City’s attacking third spike relative to City’s season average, and City’s possession retention in that region falls below its CS posterior mean. Verification: count interceptions and tackles in the final third during that match versus City’s season average; if disruption does not rise and City’s control surface holds, the prescribed tactical counter-trap is vetoed.
</RLVR_COUNTERFACTUAL_VETOES>