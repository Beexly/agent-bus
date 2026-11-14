---
source: "2021 - Predicting NBA Talent from Enormous Amounts of College Basketball Tracking Data - Unknown Authors.md"
folder: "/GSE-Research/sports-research-papers/md/library/conferences/MIT Sloan Sports Analytics Conference/Research Paper Competition/2021"
pages: 11
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3869
---

<NATIVE_REASONING>
The user wants me to analyze a specific research paper about predicting NBA talent from college basketball tracking data. I need to follow strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words)</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided "PAGES: 11" but the source text seems to have page markers 1-14. Let me check the page citations carefully. The text shows page numbers at the bottom: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14. But the user said PAGES: 11. Maybe they mean the document is 11 pages? Or they want me to cite pages up to 11? Actually looking at the text, there are explicit page numbers scattered. I should cite [PAGE N] where N corresponds to the page numbers visible in the text.

Let me map content to pages:
- Page 1: Introduction, Figure 1
- Page 2: Section 2, Figure 2
- Page 3: Section 2 continued, Figure 3
- Page 4: Section 3, Figure 4
- Page 5: Figures 5-6, padding method, Eq 1
- Page 6: Section 4, Table 1, section 4.1.2
- Page 7: Section 4.1.3, Shapley values, Wiseman Figure 7
- Page 8: Figure 8, section 4.2
- Page 9: Section 4.2.1, 4.2.2, Figure 9
- Page 10: Section 4.2.3, 4.2.3.1, 4.2.3.2
- Page 11: Section 4.2.4, Figures 10-12
- Page 12: Conclusion start
- Page 13: Conclusion continued
- Page 14: References

Wait, the user said PAGES: 11 but provided text that goes to page 14. I should probably just cite pages as they appear in the text. But I need to be careful - if they said PAGES: 11, maybe I should only cite up to page 11? Actually the instruction says "When source pages are provided, cite exact [PAGE N] markers". The source text has page markers embedded. I'll cite them as they appear.

Important constraints:
- No betting lines. The paper mentions draft picks, probabilities, VORP, etc. I must not mention spreads, totals, moneylines, odds.
- No toy equations. I must use formal LaTeX. The paper has Eq 1 (padding equations example for 3P%) but it's not shown in the text - it says "Eq 1. Padding Equations Example for 3P%" but the equation itself might be an image. I should not invent it. I can describe the padding method verbally or reference it without inventing a fake equation. I can state formal LaTeX for things like log-loss, Shapley values, Jenks natural breaks, NGBoost, etc., but only if I'm confident. Actually, I should be careful not to invent equations not in the paper. I can formulate general ML equations that are standard (e.g., log-loss = -1/N sum [y log(p) + (1-y) log(1-p)]) but frame them as formal definitions, not toy equations. The invariant says "Never invent fake ratios (Force / Fatigue)". So standard formal equations are okay if properly attributed as formal definitions, not invented.

Structure:
1. THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
2. SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
3. RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
4. RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.

Total >= 1000 words. THINK_TRACE alone >= 400 words.

Let me draft each section carefully.

THINK_TRACE: Need deep multi-hop derivation. The paper's core claim: tracking data from broadcast video (300M frames, 650k possessions) improves NBA talent prediction (log-loss 0.30 vs 0.40). Multi-hop:
- Broadcast video -> camera calibration -> skeleton tracking -> re-identification -> ball tracking -> OCR -> event detection -> merge with PBP -> influence scores -> player features -> padding/mean-regression -> career weighting -> LightGBM classifier -> ensembling -> Shapley interpretation -> draft bin prediction.
- Gray zones: "influence score" 0-100 scale based on expert labeling; padding constant C solved per player; VORP binning via Jenks natural breaks; inclusion threshold >40% chosen "somewhat casually"; only 3 games for Wiseman causing raw vs padded divergence; ensemble of raw and padded; NGBoost for mean/variance; no NBA context in draft model.
- Breakdown regimes: low sample size (20-30 games per player), rare events (50 isolation attempts), class imbalance (few make NBA), broadcast occlusion, moving camera calibration errors, referee dependency for PBP alignment.

SOURCE_OPERATORS_AND_EQUATIONS:
- Need formal LaTeX. I can write:
  - Log-loss: $\mathcal{L} = -\frac{1}{N}\sum_{i=1}^{N} [y_i \log(p_i) + (1-y_i)\log(1-p_i)]$ where $y_i \in \{0,1\}$, $p_i \in [0,1]$. Units: nats or bits depending on log base. Reported values 0.30 (AutoStats) vs 0.40 (play-by-play) [PAGE 1, PAGE 6].
  - Padding: $\hat{x}_{i} = \frac{n_i x_i + C \bar{x}}{n_i + C}$ where $n_i$ is observed count, $x_i$ observed rate, $\bar{x}$ sample mean, $C$ optimal weighting constant [PAGE 5]. (This is the described padding method, not invented - it's a standard beta-binomial shrinkage / padding. I should cite that the paper describes it this way.)
  - Influence score: $s: \mathcal{M} \times \mathcal{F} \to [0,100]$ per frame for 25 matchups [PAGE 4].
  - Shapley value: $\phi_j(v) = \sum_{S \subseteq N \setminus \{j\}} \frac{|S|!(|N|-|S|-1)!}{|N|!} [v(S \cup \{j\}) - v(S)]$ [PAGE 7, citing Lundberg & Lee 2017 via reference [8]? Actually reference [9] is Lundberg & Lee. The paper says Shapley values [8] but reference [8] is NGBoost? Wait: "Shapley Values, a game theory approach to interpret results of machine learning models [8]." But reference [8] is Duan et al. 2019 NGBoost. Reference [9] is Lundberg & Lee 2017. This is a citation mismatch in the paper. I should note this gray zone.)
  - NGBoost: predicts mean $\mu$ and variance $\sigma^2$ via natural gradient [PAGE 10, reference [8]].
  - Jenks natural breaks: minimize within-class variance $\sum_{k=1}^{K} \sum_{i \in C_k} (x_i - \bar{x}_k)^2$ [PAGE 9].
- Page citations: [PAGE 1], [PAGE 4], [PAGE 5], [PAGE 6], [PAGE 7], [PAGE 9], [PAGE 10].
- Breakdown regimes: n < 50 for rare events; class imbalance; $C \to \infty$ means full regression to mean; $C \to 0$ means no padding.

RETROCAUSAL_GENEALOGY:
- Lineage: SportVU 2010 -> NBA league-wide 2013-14 [PAGE 1]. Broadcast tracking papers: Johnson 2020 [1], Sha et al. 2020 CVPR camera calibration [2], Cao et al. 2018 OpenPose [3]. Pelton career weighting [4]. LightGBM [5], Bergstra & Bengio random search [6], Pedregosa et al. scikit-learn [7], NGBoost Duan et al. [8], Lundberg & Lee Shapley [9].
- Multi-week traps: draft cycle (college season -> draft -> NBA rookie season), temporal leakage if using future info, small sample instability across weeks, influence score drift over a season as experts relabel.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: when model faces low-data players (Wiseman 3 games), raw features overfit noise, padded features over-regress to mean. The ensemble tries to balance.
- Counter-trap: using Shapley values to diagnose whether raw or padded signal dominates; not using Shapley as causal intervention ("if he increased X then...").
- Clock: draft clock, three-year NBA minutes definition, career weighting decay.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: camera calibration error, occlusion in broadcast, skeleton tracking failure in crowded plays.
- Biomechanical: influence score does not capture verticality, fatigue, injury; 0-100 scale is expert-defined, not biomechanically grounded.
- Weather: indoor basketball, minimal weather impact, but broadcast lighting variations affect CV.
- Veto proof: referee-dependent PBP (2pt vs 3pt, fouls) means tracking must align to human adjudication; if PBP is wrong, tracking labels are wrong.

RLVR_COUNTERFACTUAL_VETOES:
- Need 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I'll frame as verifiable counterfactual tests.
  1. Veto: If broadcast occlusion rate > threshold for a conference, model degrades. Prediction: log-loss increases by >0.05 for mid-major players vs power-conference.
  2. Veto: If player sample n_games < 10, padding C dominates and prediction reverts to population mean. Prediction: AUC collapses to ~0.50 for one-and-dones with <10 games.
  3. Veto: If referee PBP mislabels shot value (2 vs 3), event detector inherits label noise. Prediction: feature "3P%" bias correlates with PBP error rate; model overestimates shooting for players in conferences with poor PBP quality.

Need to ensure no betting lines. Words like "odds", "spreads", "totals", "moneylines" must not appear. "Probability" is fine. "Draft pick" is fine.

Word count: Need >=1000 total. THINK_TRACE >=400. Let me ensure each section is substantial.

Let me write carefully.

For page citations: The text shows page numbers. I'll use [PAGE 1], etc. Since user said PAGES: 11 but text has up to 14, I'll cite as they appear but maybe focus on 1-11. Actually page 11 contains Figures 10-12 and section 4.2.4. Page 12 is conclusion. I'll cite pages where content actually appears.

Let me check exact page markers in text:
- After Figure 1: "1"
- After Figure 2 text: "2"
- After Figure 3: "3"
- After Figure 4: "4"
- After Figure 6 text / Eq 1 area: "5"
- After Table 1: "6"
- After Wiseman text: "7"
- After Figure 8: "8"
- After Figure 9: "9"
- After 4.2.3.1: "10"
- After Figures 10-12 area: "11"
- Then "12", "13", "14".

Okay.

Need to avoid toy equations. The padding equation I write is a formal representation of the described method. The paper says "The method uses a weighted average between the observed values and sample mean." So my LaTeX is a formalization, not a fake ratio. Good.

Shapley equation: standard formula. Fine.

Log-loss: standard. Fine.

Jenks: standard objective. Fine.

Now, length. Let me draft.

THINK_TRACE (400+ words):
Start with the data pipeline. 300M frames, 650k possessions. Multi-hop: raw pixels -> calibrated coordinates -> event semantics -> defensive context -> player representation -> regularization -> classification -> ensembling -> interpretation -> draft binning. Gray zones: influence score 0-100 from expert labels then MLP; padding constant C solved per player; VORP Jenks bins; 40% threshold "somewhat casually"; Wiseman n=3 games; class imbalance; log-loss metric choice. Breakdown: n<50 rare events; moving camera calibration error; referee PBP dependency.

I'll write ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX block with page citations. ~300 words.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total should exceed 1000.

Let me write now, being very careful about no betting terms.

One thing: "odds" might slip in. I'll avoid it. "Probability" and "chance" are fine.

Also, the user said "STRICT INVARIANTS" - I must follow them exactly.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The paper’s causal chain proceeds through nine stages: (1) ingest broadcast video; (2) segment trackable vs non-trackable clips; (3) calibrate the moving camera; (4) detect players via skeleton tracking; (5) track and re-identify players; (6) detect and track the ball; (7) apply OCR; (8) detect events; and (9) merge tracking with play-by-play (PBP) [PAGE 2]. Each hop introduces a distinct failure mode. At hop 3, broadcast camera motion means homography is non-stationary; calibration error propagates into every downstream coordinate [PAGE 2, citing Johnson 2020 and Sha et al. 2020]. At hop 5, re-identification fails under occlusion or jersey similarity, which is endemic in college basketball where rosters turn over annually. At hop 9, the referee remains the ultimate arbiter: whether a shot is 2pt or 3pt, or whether a travel occurred, is not visible in pixels but is decided by human adjudication and recorded only in PBP [PAGE 3]. Therefore the tracking labels inherit referee error; the system cannot correct a misclassified shot value from optics alone.

The predictive architecture addresses high variance through mean-regression padding. The authors state the method uses a weighted average between observed values and sample mean, solving for an optimal constant C to predict the next game in a player’s career [PAGE 5]. This is a shrinkage estimator: players with small n (e.g., James Wiseman, three games, 69 minutes) are heavily regressed toward the population mean, while high-volume players retain more raw signal [PAGE 7]. The padding applies to all box-score and AutoStats features except static anthropometrics and minutes/possessions [PAGE 5]. A second regularization layer weights each NCAA season by a career-weighting system (Pelton) before collapsing a multi-season career into one vector [PAGE 5]. The feature space is decorrelated by iteratively removing one of each pair of collinear features with R² ≥ 0.95, retaining whichever is more correlated with the remaining features [PAGE 6].

The modeling target is binary: made the NBA (drafted or received any NBA minutes in first three years) vs not [PAGE 6]. Because the positive class is rare, log-loss—not accuracy—is used [PAGE 6]. LightGBM classifiers are trained on raw and padded sets separately, then ensembled; a second ensemble predicts draft-pick talent bins using VORP-derived classes via Jenks natural breaks [PAGE 6, PAGE 9, PAGE 10]. Shapley values provide local interpretability but explicitly do not support causal counterfactuals (“if he increased X, he would be more likely to make the NBA”) [PAGE 7].

Gray-zone audit: (1) the inclusion threshold of >40% make-NBA probability for the draft model was chosen “somewhat casually” [PAGE 9], implying arbitrary sample truncation; (2) influence scores are expert-labeled on a 0–100 scale then fit with an MLP, so defensive quality is a constructed psychometric, not a biomechanical measurement [PAGE 4]; (3) reference [8] is cited for Shapley values but points to NGBoost (Duan et al. 2019), while Lundberg & Lee 2017 is reference [9], creating a citation mismatch [PAGE 7, PAGE 14]; (4) low-frequency events such as isolations may occur only ~50 times per career, making per-player means unstable [PAGE 5]; (5) the dataset is imbalanced, with few players making the NBA [PAGE 6]. Breakdown regimes occur when n_games < 10, when broadcast occlusion exceeds tracking tolerance, or when PBP labels are incorrect, because the entire semantic layer is conditioned on referee-validated outcomes.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units:

Binary classification target and log-loss. Let $y_i \in \{0,1\}$ indicate NBA entry (draft or any minutes in first three years), and $p_i \in [0,1]$ the predicted probability [PAGE 6]. Log-loss is
\[
\mathcal{L} = -\frac{1}{N}\sum_{i=1}^{N} \Big[y_i \log p_i + (1-y_i)\log(1-p_i)\Big],
\]
with units of nats for natural logarithm (or bits for base-2). Reported test-set values: AutoStats tracking model $\mathcal{L} \approx 0.30$; play-by-play-only model $\mathcal{L} \approx 0.40$ [PAGE 1, PAGE 6]. The claimed relative improvement is roughly 25% reduction in log-loss, not a probability margin.

Padding/mean-regression operator. For feature count $n_i$, observed rate $x_i$, and population mean $\bar{x}$, the padded estimate is a convex shrinkage:
\[
\hat{x}_i = \frac{n_i x_i + C\,\bar{x}}{n_i + C}, \qquad C > 0,
\]
where $C$ is selected to minimize error on the next game of a player’s career [PAGE 5]. Limits: as $C \to 0$, $\hat{x}_i \to x_i$ (no shrinkage, high variance for small $n_i$); as $C \to \infty$, $\hat{x}_i \to \bar{x}$ (complete regression to mean). Applied to all features except height, weight, minutes, and possessions [PAGE 5].

Influence score. Per-frame defensive matchup operator $s: (\text{offender}, \text{defender}, \text{context}) \to [0,100]$, learned by MLP from expert-labeled frames across thousands of frames; produces scores for all 25 offensive/defensive matchups per frame [PAGE 4]. Used to assign ball-screen and off-ball-screen roles, coverage types, and contested-shot features [PAGE 4].

Shapley attribution. For feature set $N$ and value function $v$, the Shapley value for feature $j$ is
\[
\phi_j(v) = \sum_{S \subseteq N \setminus \{j\}} \frac{|S|!\,(|N|-|S|-1)!}{|N|!}\,\big[v(S\cup\{j\}) - v(S)\big].
\]
These are local, per-prediction attributions, not linear-regression coefficients; causal interpretation (“increase $X$ to raise $p$”) is invalid [PAGE 7].

Draft-bin target. VORP values for picks 1–60 plus undrafted (pick 61) are binned via Jenks natural breaks into nine classes, minimizing within-bin squared deviation $\sum_{k=1}^{9}\sum_{i\in C_k}(x_i - \bar{x}_k)^2$ [PAGE 9]. The talent model outputs a multiclass distribution over bins 1–9, not a point estimate of draft position [PAGE 10].

Breakdown regimes: small-sample bias when $n_i < 50$ for rare events (e.g., isolation attempts) [PAGE 5]; calibration singularity when camera motion exceeds homography trackability [PAGE 2]; label-noise floor when referee PBP disagrees with optical event detection [PAGE 3]; class-imbalance regime where positive prevalence is low enough that accuracy is uninformative [PAGE 6].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The paper’s lineage begins with SportVU optical tracking, first deployed in select NBA arenas in 2010 and league-wide before the 2013–14 season [PAGE 1]. The NCAA lacks equivalent in-venue hardware across 300+ Division I venues plus neutral-site tournaments, so the authors substitute broadcast-video computer vision [PAGE 1]. Immediate technical ancestry includes non-stationary camera calibration from broadcast video (Johnson, 2020 MIT Sloan) [PAGE 2, ref. 1], end-to-end camera calibration for broadcast (Sha et al., CVPR 2020) [PAGE 2, ref. 2], and OpenPose multi-person 2D pose estimation (Cao et al., 2018) [PAGE 2, ref. 3]. The career weighting borrows from Kevin Pelton’s ESPN draft projection system [PAGE 5, ref. 4]. The gradient-boosting backbone is LightGBM (Ke et al., 2017) with randomized hyperparameter search (Bergstra & Bengio, 2012) and scikit-learn tooling (Pedregosa et al., 2011) [PAGE 6, refs. 5–7]. Probabilistic regression with separate mean and variance uses NGBoost (Duan et al., 2019) [PAGE 10, ref. 8]. Interpretability rests on Shapley values from cooperative game theory as operationalized by Lundberg & Lee (2017) [PAGE 7, ref. 9], though the paper’s inline citation points to reference [8], a bibliographic inconsistency [PAGE 7, PAGE 14].

Multi-week traps derive from the college-to-NBA calendar. The three-year NBA-minutes window creates a look-ahead constraint: a player’s label is only fully determined after three NBA seasons, so any college-season model trained on recent cohorts necessarily uses censored or proxy labels [PAGE 6]. Draft timing imposes a second clock: the model must output before the draft, but college tracking data ends with the NCAA tournament, leaving a gap of several weeks during which no new tracking evidence accumulates [PAGE 9]. Influence scores and event detectors are retrained as more games arrive, so the feature distribution drifts week-to-week across a season [PAGE 4]. Finally, one-and-done players enter the draft after a single college season, maximizing the small-sample regime where padding dominates and where Wiseman-type outliers (3 games, 69 minutes) produce raw/padded disagreement [PAGE 7].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression appears when the model confronts thin data: a highly touted prospect with only three games (Wiseman) yields raw features (PTS/Poss, BLK/Poss) that strongly signal NBA readiness, while the padded regressed version collapses those signals toward the mean [PAGE 7]. The ensemble’s habit is to average these conflicting views, producing a probability that can understate known contextual information—here, the front office’s awareness that Wiseman’s limited minutes were situational, not indicative of inability [PAGE 7]. The model has no state variable for “why he played three games,” so it cannot condition the regression on injury, coaching choice, or team circumstance.

The counter-trap is the deliberate separation of the make-NBA classifier from draft-context variables. The draft-pick talent model explicitly excludes NBA situation (team fit, roster need, coaching system) and treats draft pick as a talent-profile target rather than a transaction prediction [PAGE 9]. This guards against recursive overfitting to draft-order noise, but it also means the model cannot anticipate that a team may reach for a player or slide past him for non-talent reasons. Shapley values serve as the metacognitive check: they expose which features drive a prediction without permitting the causal fallacy that increasing a feature would mechanically raise NBA probability [PAGE 7].

The clock operates at three scales: (1) the three-year NBA-minutes labeling window [PAGE 6]; (2) the pre-draft scouting cycle, where the 40% inclusion threshold for the talent model was set “somewhat casually” and could be re-tuned [PAGE 9]; and (3) the within-season drift of influence scores and event detectors as new broadcast games are ingested [PAGE 4]. A team using this model must re-evaluate predictions as the clock advances, because the feature distribution of a November college player differs from a March tournament player, and the model does not automatically encode temporal decay.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer. Broadcast tracking inherits camera-calibration error from non-stationary pan/tilt/zoom optics; homography breakdown occurs during rapid camera motion or when the court is partially out of frame [PAGE 2]. Occlusion in packed college defenses can break skeleton tracking and player re-identification [PAGE 2]. These errors are not random noise but systematic undercounting in high-contact zones (post play, screens), precisely where talent differentiation matters.

Biomechanical layer. The influence score is a 0–100 expert-derived construct based on proximity, distance to basket, passing lanes, and driving lanes; it is not a ground-truth biomechanical measure of defensive pressure or vertical contest [PAGE 4]. It cannot capture shot-blocking timing, lateral quickness, or fatigue accumulation across a game. The padding operator assumes feature stationarity across a career, which fails when a player’s role or physical maturity changes between freshman and junior seasons [PAGE 5].

Weather layer. College basketball is played indoors, so meteorological weather is negligible; however, broadcast lighting, arena camera positions, and arena-specific visual backgrounds introduce domain shift that the calibration and detection pipeline must absorb [PAGE 2]. Poor lighting or non-standard court markings degrade OCR and skeleton detection, effectively vetoing possession-level data for affected venues.

Adjudication veto. The most rigid veto is referee dependency: whether a field goal is 2pt or 3pt, or whether a travel/ foul occurred, is determined by the referee and entered via PBP [PAGE 3]. Because tracking events are aligned to PBP through fuzzy matching, any referee error becomes ground truth for the event layer. If a 3pt shot is mislogged as 2pt, the derived shooting-efficiency features are biased, and no amount of optical precision can correct the label without manual re-annotation. Therefore any deployment of this model must include a PBP-audit layer; predictions for players in conferences with inconsistent scorer or referee documentation carry an irreducible veto risk.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Low-sample occlusion veto. If a player’s college tracking sample contains fewer than 10 games or is drawn primarily from mid-major conferences with single-camera broadcast angles, the occlusion rate exceeds the calibration tolerance. Verifiable prediction: log-loss for this subgroup degrades by at least 0.05 absolute relative to power-conference players with full tracking coverage, and the model’s probability mass shifts toward the population mean (padding limit $C \to \infty$ dominance).

Scenario 2: Referee label-noise veto. If the PBP feed mislabels shot value (2pt vs 3pt) at rate $\epsilon > 0$ for a given conference, the event detector inherits that noise because the referee is the ultimate arbiter and tracking only refines positions [PAGE 3]. Verifiable prediction: derived 3P% and effective field-goal features show systematic downward/ward bias proportional to $\epsilon$, causing the ensemble to over- or under-estimate shooting talent for players from that conference by a margin exceeding the reported inter-model log-loss gap (0.10) when $\epsilon > 0.05$.

Scenario 3: Rare-event mean-reversion veto. For features with fewer than 50 career occurrences (e.g., isolation possessions), the observed rate has high variance [PAGE 5]. Verifiable prediction: when the model is forced to rely on raw (unpadded) values for such rare events, the Shapley attribution magnitude for those features spikes unpredictably across cross-validation folds, and out-of-sample log-loss increases by at least 0.03 compared to the padded-only baseline. The counterfactual intervention is to exclude any feature with $n < 50$ from the raw constituent and retain only its padded estimate.
</RLVR_COUNTERFACTUAL_VETOES>