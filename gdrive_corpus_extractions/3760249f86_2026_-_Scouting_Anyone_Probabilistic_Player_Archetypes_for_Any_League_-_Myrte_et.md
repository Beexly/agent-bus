---
source: "2026 - Scouting Anyone Probabilistic Player Archetypes for Any League - Myrte et al.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2026"
pages: 18
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3682
---

<NATIVE_REASONING>
The user wants a deep analytical response based on the provided paper: "Scouting Anyone: Probabilistic Player Archetypes for Any League" by Myrte et al. (2026 MIT SSAC). I need to produce output with these exact XML sections:

1. <THINK_TRACE> (>=400 words) - Deep multi-hop derivation & gray-zone audit.
2. <SOURCE_OPERATORS_AND_EQUATIONS> - Formal LaTeX, units, page citations, breakdown, assumptions, singularity/breakdown regimes.
3. <RETROCAUSAL_GENEALOGY> - Historical/scientific lineage & multi-week traps.
4. <RECURSIVE_THEORY_OF_MIND> - Crisis habit regression vs counter-trap vs clock.
5. <CROSS_LAYER_VETO_ADJUDICATION> - Physical/biomechanical/weather veto proof.
6. <RLVR_COUNTERFACTUAL_VETOES> - 3 verifiable RLVR veto scenarios + predictions.

Constraints:
- Zero betting lines: never mention spreads, totals, moneylines, odds.
- Zero toy equations: no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
- >= 1,000-word depth across sections.

I need to be careful: The source text is provided inline, not as actual page images, but it has page numbers in the text (1 through 25). I can cite [PAGE N] based on those visible page numbers. I should use verbatim quotes where possible.

Let me plan content:

THINK_TRACE: Multi-hop derivation. Start from paper's claim: AA/ADA probabilistic archetypes for basketball. Derive the math: convex combinations, constraints alpha and beta sum to 1, non-negative. Multi-hop: from clustering limitation (k-means hard assignment) -> AA soft membership -> ADA real-player constraint -> k selection via intra-archetype variance not RSS -> application to Markus Howard case -> net rating mismatch -> roster gaps -> recruitment. Gray-zone audit: data comparability across leagues (excluding EuroLeague from training but using it for case study), z-score normalization across different leagues with different pace/styles, minimum 300 minutes threshold, archetype concentration thresholds (>=55% for shooter specialists), small sample for Raieste (19 minutes), net rating as difference of points per 100 possessions, assumption that archetype exposure causes net rating rather than correlation, survivorship bias in top players table, etc.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX.
- Dataset X in R^{n x m}, z-score normalization: x'_{ij} = (x_{ij} - mu_j)/sigma_j.
- AA: min_{Z, Alpha} ||X - Alpha Z||_F^2 s.t. Z = Beta X, Alpha >=0, 1^T alpha_i = 1, Beta >=0, 1^T beta_j = 1. Actually standard AA: X ≈ Alpha Z, Z = Beta X. Constraints: alpha_{ik} >=0, sum_k alpha_{ik}=1; beta_{kj} >=0, sum_j beta_{kj}=1.
- ADA: beta_{kj} in {0,1}, each row of beta has exactly one 1, so archetypoid is actual data point.
- RSS reconstruction error.
- Intra-archetype variance metric: maybe sigma^2_k = (1/|S_k|) sum_{i in S_k} ||x_i - z_k||^2 or similar. Paper doesn't give exact formula but mentions it. I can define formally but note it's from paper's diagnostic.
- Net Rating: NRtg = ORtg - DRtg = (Points scored per 100 poss) - (Points conceded per 100 poss). Units: points per 100 possessions.
- Archetype exposure: E_{i,a} = (minutes_i with archetype a) / (total minutes_i). Units: dimensionless proportion [0,1].
- Example: Howard 72% Shooter Specialist. Giannis 53.5% Offensive Engine, etc.
- Units: minutes (min), percentage (dimensionless), per 100 possessions.
- Breakdown regimes: k=4 elbow too coarse; k=8 European optimum; NBA ADA k=9 marginal gain 0.538->0.525, chose k=8; minimum 300 minutes; small sample <150-200 minutes for Raieste validation; archetype concentration >=55% for shooter specialist cohort; z-score assumes roughly comparable feature distributions across leagues (breakdown if leagues have systematically different means/variances not captured by z-score, e.g., different pace or rule differences).
- Citations: [PAGE 5] for AA math, [PAGE 6] for ADA, [PAGE 7-8] for k selection, [PAGE 15] net rating definition, [PAGE 16-21] Howard case, [PAGE 3] related work, [PAGE 4] features.

RETROCAUSAL_GENEALOGY: Historical lineage. Cutler & Breiman 1994 AA (Technometrics). Vinué et al. 2015/2017 ADA. Kalman & Bosch 2020 MIT SSAC (GMM soft assignments). Psychology/sociology/economics/environmental science applications. Multi-week traps: if a team over-relies on a single archetype snapshot, role drift over weeks (injuries, coaching adjustments) can invalidate roster decisions; small-sample archetype concentration (e.g., Raieste 19 mins) is a trap; assuming EuroLeague domestic model transfers directly to EuroLeague higher tier without recalibration; using on/off net rating as causal when it's confounded by opponent strength, garbage time, score effects.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression. Under pressure, coaches revert to familiar lineups (Hall + Moneke + Forrest) despite negative net rating. Counter-trap: archetype model suggests increasing Raieste and stretch 4, but coach may stick to veterans. Clock: 715 minutes Howard played; season timeline; trade deadline; limited sample for new pairings. Need to model how coach's belief updates (or fails to update) given archetype evidence. Crisis habit regression: when losing, coach increases usage of traditional bigs (spacing compression), worsening fit.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Basketball is indoor, controlled climate, so weather veto is minimal (unlike outdoor sports). Physical layer: height (feature), age, injury status. Biomechanical: shooting mechanics, release height, defensive lateral quickness not captured in box score. Veto: if a player is archetypically a Shooter Specialist but physically unable to shoot off the dribble due to biomechanical limitation, model overestimates value. If a Traditional Center lacks vertical leap due to age/injury, archetype misclassifies. Weather veto: indoor arena, negligible; but travel across time zones (EuroLeague) could affect shooter mechanics (jet lag) not in model. Need to state veto conditions: physical injury, biomechanical shooting form breakdown, fatigue over multi-game week, altitude (some European leagues at altitude? minimal), indoor climate control means no weather veto.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable veto scenarios + predictions.
1. Small-sample veto: Raieste-Howard pairing only 19 minutes; veto prediction: if extended to >150 minutes, NRtg will regress toward league baseline for Howard + 3&D wing (+22.5 is unsustainable small-sample outlier). Verifiable via tracking shared minutes and net rating over next 20 games.
2. Archetype instability veto: k=8 vs k=9 NBA marginal gain 0.538->0.525; if adding a 9th archetype splits Mobile Big into two sub-types, downstream recruitment based on 8 archetypes misallocates budget. Verifiable by retraining with k=9 and measuring intra-archetypoid variance on holdout seasons.
3. Cross-league distributional shift veto: European domestic model trained on ACB/LNB/etc., applied to EuroLeague (higher tier). Veto: archetype means shift (e.g., usage% higher in EuroLeague), causing Howard's 72% concentration to be misestimated if model not retrained. Verifiable by comparing z-scores of same players across domestic vs EuroLeague seasons; prediction: >0.5 SD shift in usage% distribution invalidates direct transfer without domain adaptation.

Need >=1000 words total. I'll write substantial sections.

Important: No betting lines. No mention of spreads, totals, moneylines, odds. I can mention net rating, points per 100 possessions, minutes, percentages—that's fine.

Need to cite exact [PAGE N] markers. The text has page numbers embedded. I'll use those.

Let's draft carefully.

Word count check: THINK_TRACE alone needs >=400 words. Total >=1000. I'll aim for ~1500-1800 words total.

Let's write.

Section 1 THINK_TRACE:
- Start with problem statement.
- Multi-hop derivation: clustering -> AA -> ADA -> convex hull -> k selection -> case study -> mismatch -> recruitment.
- Gray-zone audit: data limitations, z-score across leagues, 300 min filter, net rating causality, small samples, archetype concentration thresholds, league exclusion (EuroLeague excluded from training but used for case study), self-reported features from public sites.

Section 2 SOURCE_OPERATORS_AND_EQUATIONS:
- LaTeX for AA and ADA.
- Normalization.
- Net rating formula.
- Exposure proportion.
- Units table.
- Assumptions and breakdown regimes with page citations.

Section 3 RETROCAUSAL_GENEALOGY:
- Cutler & Breiman 1994 [PAGE 2], Vinué et al. [PAGE 3], Kalman & Bosch [PAGE 3], psychology/sociology/economics [PAGE 2-3].
- Multi-week traps: role drift, sample size, coach habit, cross-league transfer.

Section 4 RECURSIVE_THEORY_OF_MIND:
- Coach's recursive beliefs under crisis.
- Howard case: Baskonia coach keeps playing Hall/Moneke/Forrest despite -19.1 net rating [PAGE 18].
- Counter-trap: archetype evidence vs. habit.
- Clock: 715 minutes [PAGE 15], season arc.

Section 5 CROSS_LAYER_VETO_ADJUDICATION:
- Physical: height feature [PAGE 4], age/injury not modeled.
- Biomechanical: shooting release, defensive switching not in box score [PAGE 4 features list lacks biomechanics].
- Weather: indoor, negligible [implicit], but travel/time zones.
- Veto conditions enumerated.

Section 6 RLVR_COUNTERFACTUAL_VETOES:
- 3 scenarios with predictions, verification method.

Make sure not to use fake ratios. All equations formal.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s core multi-hop derivation proceeds from a diagnostic failure in traditional clustering to a convex-geometry solution and then to an operational roster diagnosis. First, k-means and GMMs force players into single or near-single clusters [PAGE 2], which misrepresents hybrid roles; the authors derive that a player-season-team unit must be modeled as a convex combination of stylistic extremes rather than a centroid assignment [PAGE 5]. Hop two: Archetypal Analysis (AA) identifies extreme points Z in the standardized feature space X, while every player x_i is reconstructed as α_i Z with α_{ik} ≥ 0 and Σα_{ik} = 1, producing a role distribution rather than a label [PAGE 5]. Hop three: Archetypoid Analysis (ADA) adds the binary constraint that each archetypoid is an actual observed player, β_{kj} ∈ {0,1}, which preserves interpretability for scouts (“40 % similar to Player Y”) [PAGE 6]. Hop four: the number of archetypes cannot be selected by the RSS elbow alone because it collapses around k = 4 and destroys role diversity [PAGE 7]; instead, intra-archetype variance is minimized, yielding k = 8 for European AA and k = 8 (not 9) for NBA ADA because the ninth unit subdivides an existing role with marginal variance reduction (0.538 → 0.525) [PAGE 8]. Hop five: the framework is stress-tested in the Markus Howard case study. Howard is 72 % Shooter Specialist in the 2024-25 EuroLeague model [PAGE 14], yet his on-court Net Rating is –7.0 versus +3.0 off court, a 10-point-per-100-possession swing [PAGE 15]. Hop six: macro exposure analysis shows 57.3 % of Howard’s minutes are with spacing-negative archetypes (Traditional Center 25.8 %, Mid-Range Specialist 16.9 %, High Volume Scorer 14.6 %) while spacing-positive archetypes total less than 30 % [PAGE 16]. Hop seven: micro analysis of his top three teammates—Moneke (43.4 % Mid-Range Specialist), Hall (82.4 % Traditional Center), Forrest (45.7 % Lead Guard)—confirms stylistic overlap that compresses spacing [PAGE 17]. Hop eight: every two- and three-player combination involving Howard yields negative Net Ratings, down to –19.1 for Hall + Moneke + Howard [PAGE 18]. Hop nine: league-wide comparison against eight high-impact Shooter Specialists reveals Howard overexposes to Traditional Centers by +12.9 pp and underexposes to 3&D Wings by –4.1 pp, Stretch 4 by –3.9 pp, and fellow Shooters by –3.7 pp relative to baseline [PAGE 20-21]. Hop ten: recruitment priorities emerge as a rotation-level Stretch 4 and 3&D Wing depth, with Raieste (52.0 % 3&D) showing +22.5 NRtg with Howard but only 19 shared minutes [PAGE 22-23].

Gray-zone audit: (1) The model is trained on seven domestic European leagues but explicitly excludes EuroLeague from training [PAGE 4], then retrained on EuroLeague for the Howard case [PAGE 14]; this cross-tier transfer assumes z-score normalization removes pace and talent differences, an assumption that breaks down if EuroLeague usage% distributions differ by more than one standard deviation from domestic leagues—a shift not tested in the paper. (2) The 300-minute minimum filter [PAGE 5] removes small-sample noise but also removes developmental players and injury-replacement roles, creating survivorship bias in archetype formation. (3) Net Rating is defined as ORtg – DRtg in points per 100 possessions [PAGE 15, footnote], but the paper treats on/off differential as causal evidence of archetype mismatch without controlling for opponent strength, garbage time, or score effects. (4) The successful Shooter Specialist cohort requires archetype probability ≥ 55 % [PAGE 19], a threshold chosen without a sensitivity analysis; moving it to 50 % or 60 % changes the cohort membership and the baseline exposure table. (5) Raieste’s synergy estimate (+22.5 NRtg over 19 minutes [PAGE 22]) is flagged by the authors themselves as needing validation over 150–200 minutes, which is a small-sample warning embedded in the conclusion but not operationalized as a stopping rule. (6) The feature set contains no biomechanical, injury, or load-management variables [PAGE 4], so archetype membership cannot account for a shooter whose release mechanics degrade under fatigue or a center who loses vertical leap mid-season. These gray zones define the exact regimes where the model’s probabilistic output must be vetoed by physical and contextual layers.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the dataset be X ∈ ℝ^{n×m}, where n is the number of player-season-team observations and m is the number of standardized performance metrics [PAGE 5]. Each variable is z-score normalized prior to modeling:

x'_{ij} = (x_{ij} − μ_j) / σ_j,  i = 1…n, j = 1…m.

Units: x_{ij} is in native units (percentages, centimeters, per-100-possession rates); x'_{ij} is dimensionless with zero mean and unit variance [PAGE 5].

Archetypal Analysis (AA) solves:

min_{Z, A} ‖X − A Z‖_F²

subject to:

Z = B X,
a_{ik} ≥ 0,  ∑_{k=1}^{K} a_{ik} = 1   ∀i,
b_{kj} ≥ 0,  ∑_{j=1}^{n} b_{kj} = 1   ∀k.

Here A ∈ ℝ^{n×K} contains mixing weights α_{ik} (player i’s probabilistic membership in archetype k), and B ∈ ℝ^{K×n} defines each archetype as a convex combination of real data points [PAGE 5]. Units: α_{ik} ∈ [0,1], dimensionless probabilities summing to 1 per player; ‖·‖_F² is in squared standardized feature units.

Archetypoid Analysis (ADA) uses the same objective but restricts B:

b_{kj} ∈ {0,1},  ∑_{j=1}^{n} b_{kj} = 1   ∀k,

so each archetypoid Z_k is exactly one observed player x_j rather than a synthetic convex combination [PAGE 6]. Units: identical to AA, but interpretability is categorical (real-player archetypes).

Reconstruction error (RSS) and intra-archetype variance guide K selection. The paper reports NBA ADA intra-archetypoid variance falling from 0.538 at k = 8 to 0.525 at k = 9, a marginal reduction that does not justify a ninth archetypoid [PAGE 8]. Units: variance in squared standardized feature space; dimensionless after z-scoring.

Net Rating is defined in the paper as:

NRtg = ORtg − DRtg = (Points scored per 100 possessions) − (Points conceded per 100 possessions) [PAGE 15, footnote 1].

Units: points per 100 possessions (dimensionless rate difference). Example values: Howard on-court NRtg = –7.0, off-court = +3.0, swing = 10.0 [PAGE 15]; Howard + Hall + Moneke three-man NRtg = –19.1 [PAGE 18].

Archetype exposure for player i with archetype a over T minutes is:

E_{i,a} = (∑_{t ∈ shared minutes with archetype a} 1) / T_i,

expressed as a proportion [0,1] or percentage points (pp) [PAGE 16-20]. Example: Howard’s exposure to Traditional Center = 25.8 %; league baseline = 12.9 %; difference = +12.9 pp [PAGE 20].

Assumptions and breakdown regimes:
1. Z-score comparability: assumes feature distributions are comparable across the seven European leagues after standardization [PAGE 4-5]. Breaks down if EuroLeague or ACB has systematically different usage% or 3P% skews not removed by centering/scaling.
2. Convex-hull sufficiency: assumes all meaningful roles lie within the convex hull of observed extremes [PAGE 2, Figure 1]. Breaks down for genuinely novel archetypes not represented in training data (e.g., a positionless 7-foot point guard in a league with no precedent).
3. Temporal stationarity within a season: archetype probabilities are estimated over the full season and treated as stable [PAGE 1, Section 3.1]. Breaks down under mid-season trades, coaching changes, or injuries that alter role within a season.
4. Minimum playing time: 300 minutes per player-season-team [PAGE 5]. Breaks down for rookie development, two-way contracts, or injury-shortened seasons where role is still forming.
5. Causal interpretation of on/off Net Rating: assumes lineup net rating differences are attributable to archetype spacing [PAGE 15-18]. Breaks down under opponent adjustment, score effects, and garbage-time confounds.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The methodological lineage begins with Cutler and Breiman’s Archetypal Analysis (1994), cited for identifying extreme points rather than centroids [PAGE 2], and extends through psychology (personality profiles), sociology (group identity), economics (consumer segmentation), and environmental science (extreme climate patterns) [PAGE 2-3]. In sports, the direct antecedent is Kalman & Bosch (2020 MIT SSAC), which used Gaussian Mixture Models for soft lineup aggregates but remained “highly peaked” (~90 % one cluster) [PAGE 3]. The paper advances this by adopting Archetypoid Analysis (Vinué, Epifanio & Alemany 2015) to constrain archetypes to actual players [PAGE 3], and by replacing the RSS elbow with intra-archetype variance to select K = 8 [PAGE 7-8].

Retrocausal traps emerge across multi-week horizons. (1) Role drift: a player classified as a 72 % Shooter Specialist in November may shift to a secondary creator by February if a teammate is injured; the seasonal archetype vector becomes stale [PAGE 1, Section 3.1]. (2) Sample-size decay: Raieste’s +22.5 NRtg with Howard is based on 19 minutes [PAGE 22]; over a 4-week window, random variance dominates, and a front office that acts on Week 1 synergy will likely overpay for a small-sample mirage. (3) Cross-league transfer lag: domestic European archetypes were explicitly not trained on EuroLeague because of “substantially higher competitiveness” [PAGE 4]; applying the domestic model to EuroLeague without retraining introduces distributional shift that takes weeks to manifest as roster mismatches. (4) Confirmation trapping: coaches under losing streaks regress to traditional labels (“Point Guard,” “Center”) rather than archetype-aware spacing [PAGE 17-18], perpetuating the Howard–Hall–Moneke–Forrest cluster despite negative net ratings. These are not one-game anomalies; they compound over a multi-week roster cycle because archetype exposure is a stock variable (minutes accumulate) that changes slower than game-level outcomes.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Model the Baskonia coaching staff as a recursive Bayesian agent whose prior habit is veteran continuity. Observing Howard’s on-court NRtg of –7.0 [PAGE 15], the staff faces a choice: update beliefs toward archetype mismatch (reduce Hall/Moneke/Forrest minutes, elevate Raieste and stretch options) or regress to crisis habit (increase usage of familiar bigs and lead guards). The paper shows the actual path: Howard played 91.5 % of his minutes with at least one of Moneke, Hall, or Forrest [PAGE 17], and every combination involving them produced negative net ratings (–14.4, –11.8, –8.4 for pairs; –19.1 for Hall + Moneke + Howard) [PAGE 18]. This is crisis habit regression: under pressure, the decision-maker doubles down on the lineage that generated the failure because the archetype model’s recommendation (spacing-positive archetypes) requires trusting low-minute players (Raieste, 19 minutes [PAGE 22]) and unproven recruitment targets.

The counter-trap is the archetype model itself: it offers a legible alternative (“Howard improves +11.6 pts/100 with fellow shooter Rogkavopoulos” [PAGE 22]), but the coach’s theory of mind about the opponent assumes traditional size is necessary to match up, overriding the spacing evidence. The clock is binding: Howard has 715 EuroLeague minutes in the regular season [PAGE 15]; each game delays the reallocation of minutes toward 3&D Wings and Stretch 4s. If the staff does not adjust within a 3- to 4-week window, the cumulative negative net rating locks the team out of playoff positioning before the archetype intervention can take effect. The recursive loop closes only if the front office imposes an exogenous constraint (e.g., a minutes cap on Traditional Center exposure) that breaks the coach’s habit regression and forces the counter-trap to be tested on the clock.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: Height is an explicit feature [PAGE 4], but age, injury status, and load management are absent. Veto condition: if a player’s archetype is Traditional Center (82.4 % for Donta Hall [PAGE 17]) but he has a vertical-leap-limiting injury or is past peak athletic age, the model’s rim-protection weight is inflated and the spacing-compression diagnosis remains valid but the replacement player may not be physically capable of executing the stretch role. Biomechanical layer: Shooting mechanics, release height, catch-and-shoot versus off-the-dribble separation, and defensive lateral quickness are not in the box-score feature set [PAGE 4]. Veto condition: a 72 % Shooter Specialist like Howard whose release is contested at a higher rate under EuroLeague defensive pressure may not convert gravity into efficiency even with perfect spacing; the model assumes gravity is transferable, which fails if biomechanical shooting breakdown occurs under defensive intensity. Weather layer: Basketball is played indoors under climate-controlled conditions; ambient weather is not a material veto. However, EuroLeague travel across time zones introduces circadian and fatigue effects not captured by per-possession statistics [PAGE 4]. Veto condition: a Shooter Specialist’s efficiency degrades on back-to-back road games; the archetype model treats all minutes as exchangeable. Adjudication rule: any physical injury, biomechanical shooting-form change, or fatigue accumulation over a multi-game week voids the archetype-based minutes recommendation until the player passes a physical readiness screen; the model output is advisory only, not executable, under these vetoes.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Veto Scenario 1 — Small-sample synergy veto. Howard + Raieste shows +22.5 NRtg over only 19 shared minutes [PAGE 22], below the authors’ own 150–200 minute validation threshold. Counterfactual prediction: if the pairing is extended to ≥150 minutes, Howard’s net rating with Raieste will regress toward the Shooter Specialist league baseline for successful teammates (approximately +6 to +10 points per 100 possessions, based on the eight-player cohort’s on/off deltas [PAGE 19]), not sustain +22.5. Verification: track shared minutes and possession-adjusted net rating over the next 20 games; veto triggered if NRtg falls below +5.0 with statistical significance (p < 0.05 via bootstrap over possessions).

Veto Scenario 2 — Archetype granularity veto. NBA ADA selected k = 8 over k = 9 because variance declined only from 0.538 to 0.525 [PAGE 8]. Counterfactual prediction: if a 9th archetypoid is imposed, it will bifurcate the Mobile Big or Rim Protector/Roll Man class into niche subtypes with no distinct tactical recruitment value, causing a front office to misallocate budget toward a “Micro-Big” that does not exist as a stable role. Verification: retrain ADA with k = 9 on a holdout NBA season; veto triggered if intra-archetypoid variance on holdout data increases relative to k = 8 or if the 9th archetypoid’s top players have <40 % concentration purity.

Veto Scenario 3 — Cross-league distributional shift veto. The European AA model was trained on domestic leagues and explicitly excluded EuroLeague [PAGE 4], then applied to EuroLeague for Howard [PAGE 14]. Counterfactual prediction: z-scores of usage% and 3P% for the same players differ by more than 0.5 standard deviations between domestic and EuroLeague play; therefore Howard’s 72 % Shooter Specialist concentration is misestimated relative to a EuroLeague-native model, and the recruitment gaps (Stretch 4 deficit of –3.9 pp, 3&D deficit of –4.1 pp [PAGE 20-21]) are shifted, not absolute. Verification: compute Kolmogorov–Smirnov distance between domestic and EuroLeague feature distributions for shared players; veto triggered if KS distance > 0.25 on usage% or 3PA%, requiring domain adaptation before roster decisions.
</RLVR_COUNTERFACTUAL_VETOES>