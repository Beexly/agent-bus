---
source: "2019 - Trouble with the Curve Predicting Future MLB Players Using Scouting Reports - Unknown Authors.pdf"
folder: "/GSE-Research/sports-research-papers/library/conferences/Carnegie Mellon Sports Analytics Conference/2019"
pages: 7
model: deepseek/deepseek-v4.1-flash-1017
words: 4772
---

<NATIVE_REASONING>
The user wants a deep research analysis of this paper, using the GSE/GSI Frontier Reasoning Foundry framework with specific XML sections. This is a sports analytics paper about using scouting reports (text) to predict MLB outcomes. Let me build all required sections.

I need to:
1. Zero betting lines - don't mention spreads, totals, moneylines, odds
2. Zero toy equations - use formal LaTeX, units, assumptions, singularity/breakdown regimes, cite [PAGE N] markers verbatim
3. >=1,000 words across exact XML sections
4. THINK_TRACE >=400 words
5. All 6 sections required

Let me read the paper carefully:

- Dataset: TWTC (Trouble with the Curve), ~10,000 scouting reports from MLB.com and FanGraphs
- Features: written descriptions, numeric grades (20-80 scale), identifiers
- Task: predict if minor league player makes MLB (binary classification)
- Models: Tf·Idf + neural net, RoBERTa
- Results: Tf·Idf accuracy 0.8249, balanced acc 0.6558, F1 0.4660; RoBERTa accuracy 0.8086, balanced acc 0.6861, F1 0.5100
- Label imbalance: 80% negative
- Masking: player names, numeric quantities, org references
- Exclusion: players too young to be evaluated
- Corpus analysis: NMF with 10 topics (mlb, milb, toolsy OF, pit1, pit2, HS, catcher, col-bat, inf, RP, TJS)
- Key finding: injury reports (TJS) more likely successful prospects - selection bias

Let me build formal equations:

1. TF-IDF: formal definition
2. Classification: binary logistic
3. 20-80 scale: z-score mapping, 50 = mean, 10 points = 1 SD
4. WAR mapping
5. NMF: X ≈ WH
6. Class imbalance metrics: balanced accuracy, F1

Let me write these out.

For the 20-80 scale: if grade g, z = (g - 50)/10. Assumption: normality of scouted skill distribution.

For WAR: piecewise linear mapping in Table 1.

For TF-IDF:
tf(t,d) = n_{t,d} / sum_k n_{k,d} or variants
idf(t,D) = log(N / |{d in D : t in d}|)
TF-IDF weight = tf * idf

For NMF: minimize ||X - WH||_F^2 subject to W,H >= 0

For balanced accuracy: (TPR + TNR)/2

For F1: 2PR/(P+R)

For the aging/exclusion regression: expected MLB debut age - "fitting a simple regression to predict when a player should be expected to make the major leagues based on their age"

Singularities/breakdowns:
- TF-IDF: idf(t,D) → 0 (singular in informativeness) when term appears in all documents (log(1)=0). If term appears in no documents, log(N/0) → ∞ (informational singularity)
- Classification: 80% negative base rate means predicting all-negative yields 0.80 accuracy — degenerate classifier floor
- NMF: rank k=10, but if k > min(m,n) the factorization is not unique — solution non-identifiability
- Balanced accuracy collapse: if TNR=1 fixed by trivial classifier, BA = 0.5

Let me also think about "gray zone" — the exclusion window: players who haven't yet debuted and "would not yet be expected to have done so" — this creates a censoring problem. Survival analysis analog.

Retrocausal genealogy:
- Moneyball (2003) → KATOH (2014) → The Ringer 73,000 reports (2019) → TWTC (2019) → hockey (Seppa 2018, Liu 2019)
- Also NLP lineage: TF-IDF (Salton), RoBERTa (Liu 2019)
- Scouting scale lineage: Branch Rickey farm system, 20-80 scale convention
- Trap: selection bias on injury reports (TJS) — survivorship bias, explained on [PAGE 5]

Recursive theory of mind:
- Scouts' mental model: they write for a future audience of coaches/GMs
- Masking as de-biasing: model trying to reverse-engineer scout's confidential evaluation
- Clock: career clock vs model clock — data leakage if same player appears in train and test at different times

Cross-layer vetoes:
- Physical/biomechanical: throwing velocity (masked numbers), injury history (TJS), catcher/HS harder to predict
- Weather: not explicit in paper but could affect scouting
- Biomechanical: pitch grades

RLVR counterfactual vetoes: 3 verifiable scenarios with predictions.

Let me write all sections. Aim for depth.

Word count target: 1000+ across the 6 sections. THINK_TRACE alone ≥400.

Let me draft.

THINK_TRACE:

The paper makes three layered claims which must be disentangled. First, a dataset claim: ~10,000 scouting reports with written descriptions, 20-80 grades, and identifiers [PAGE 3]. Second, a linguistic claim: NMF over the corpus surfaces 10 latent topics, and the topic composition differs by class label [PAGE 5]. Third, a predictive claim: both Tf·Idf and RoBERTa classifiers produce balanced accuracies of 0.6558 and 0.6861 [PAGE 6, Table 2]. The paper explicitly notes that accuracy alone is misleading because 80% of labels are negative — so a trivial all-negative classifier would attain 0.80 accuracy. This is the gray zone: metric decomposition must be done before any claim about "scouts hold predictive capacity."

Multi-hop logic: The label distribution means the balanced accuracy gain of 0.6558 (Tf·Idf) over 0.5 (chance) is the real signal — a delta of 0.1558 in TPR headroom. RoBERTa reaches 0.1861 above chance. The F1 gap — 0.4660 vs 0.5100 — is smaller than 0.05 in absolute F1, which given ~2000 positive test examples (20% of 10,000) translates under a binomial approximation to a standard error around F1 of roughly sqrt(F1(1-F1)/n_pos) ≈ sqrt(0.466*(1-0.466)/2000) ≈ 0.0112. So the two models' F1 differ by about 4σ — but only if the test set has exactly 2000 positives, which the paper doesn't confirm.

The masking step is the second gray zone: names, numeric quantities, org references [PAGE 6]. Name masking is critical for the Byron Buxton-type leak. But numeric masking has a subtler effect — if we remove "signing bonus" and "throwing harder," we're eliminating the strongest scouting signal, which means the models in Table 2 understate the predictive ceiling. This is a conservative benchmark, not an upper bound.

Third gray zone: the exclusion of young players by "fitting a simple regression to predict when a player should be expected to make the major leagues based on their age" [PAGE 6]. This is an informal right-censoring correction. Under standard survival analysis, the correct object is S(t|x) = P(T > t | covariates), and censored observations still contribute via likelihood terms. The paper's regression approach approximates this but discards information: a prospect who hasn't debuted but has age below the predicted threshold is dropped, not censored.

Fourth gray zone: the injury topic paradox. TJS-associated reports belong disproportionately to successful prospects [PAGE 5], and the paper attributes this to selection bias. But the alternative explanation is confounding by signal salience — pitchers with TJS histories are drafted from higher-profile amateur levels, and the return-rate among those who do appear in the corpus is elevated by the fact that failure removes them from the corpus. Formally, P(success | in corpus, TJS) > P(success | TJS) whenever the probability of appearing in the corpus conditional on failure is low. This is the conditional-on-observations trap.

Now let me write the sections carefully.

Let me also make sure equations are formal with units.

TF-IDF:
Let D = {d_1, ..., d_N} be the corpus with N documents, V the vocabulary.
tf(t,d) = f_{t,d} / Σ_{t'∈V} f_{t',d} where f_{t,d} is raw count. Unit: dimensionless (probability of term given document).
idf(t, D) = ln(N / |{d ∈ D : t ∈ d}|). Unit: nats (information).
TF-IDF weight: w(t,d) = tf(t,d) · idf(t,D). Unit: nats per token.

Singularity: idf → 0 when df(t) = N (term is universal, e.g., "pitcher", "fastball") — no discriminative information. idf → +∞ when df(t) → 0 — the term is unique, and the weight is unbounded. In practice smoothed: idf(t,D) = ln((1+N)/(1+df(t))) + 1.

Classification head: p(y=1 | d) = σ(w^T φ(d) + b), φ ∈ R^|V|, σ(z) = 1/(1+e^{-z}).

Balanced accuracy: BA = (TPR + TNR)/2.

F1: F1 = 2·P·R / (P+R).

Prevalence: π = N_pos / (N_pos + N_neg) = 0.20 per [PAGE 6].

Trivial classifier verdict: TNR = 1, TPR = 0, BA = 0.5, F1 = 0. So the model BA of 0.6558 is 0.1558 above trivial.

NMF: X ∈ R_+^{m×n} (m = vocab size, n = 10 per [PAGE 5]), W ∈ R_+^{m×k}, H ∈ R_+^{k×n}. Minimize ||X - WH||_F over nonneg W, H. Latent topics k=10.

Non-uniqueness: (WQ)(Q^{-1}H) for Q ∈ GL(k), Q, Q^{-1} ≥ 0 — NMF is unique only up to scaling/permutation, or under separability assumptions.

20-80 scale: z(g) = (g - 50)/10. Assumes σ_grade = 10. Grade 20 = z = -3, grade 80 = z = +3, covering roughly 99.7% of a bell curve.

WAR mapping: Table 1 is piecewise piecewise-linear. Let W_h(g) be hitter WAR. From [PAGE 4] table:
- g=20: Org guy, no number
- 30: Up & Down, <-0.1
- 40: Bench, 0.0-0.7
- 45: Low end reg, 0.8-1.5
- 50: Avg everyday, 1.6-2.4
- 55: Above avg, 2.5-3.3
- 60: All Star, 3.4-4.9
- 70: Top 10, 5.0-7.0
- 80: Top 5, >7.0

Midpoints approximately: 0.35, 1.15, 2.0, 2.9, 4.15, 6.0, 7.5+. Roughly linear from 40 to 70 with slope ~ (5.0-0.35)/(70-40)... let me compute: at g=40 mid 0.35, at g=70 mid 6.0, slope ≈ 5.65/30 ≈ 0.19 WAR per scale point. That's a linear regime. But between 70 and 80 the slope steepens, and below 40 it flattens — so this is piecewise linear, not globally linear.

Exclusion regression: t_debut = α + β·age + ε, discard player if undeclared and age < t̂_debut. Under survival analysis, correct version: S(t|x) = exp(-Λ_0(t)exp(x^Tβ)).

Now let me get into the sections in a way that hits the word count.

Let me write now.

I need to be careful with the [PAGE N] citations and verbatim quotes. Let me note good quotes:

- "To prevent data leakage, it is crucial to mask certain tokens in the scouting reports such as player names, numeric quantities, and to a lesser extent, references to names of organizations." [PAGE 6]
- "the labels are heavily imbalanced, with 80% of the labels being negative" [PAGE 6]
- "players who fail to return from injuries are less likely to be written about" [PAGE 5]
- "the grades are projections, rather than evaluations" [PAGE 4]
- "underrate players who man premium defensive positions–like catcher, center field, and shortstop" [PAGE 2]
- "every 10 points representing one standard deviation from the mean" [PAGE 3]
- "A score of 20 would represent a skill that is severely inadequate for the major league level, whereas a score of 80 would represent a hall-of-fame level skill." [PAGE 4]
- "fitting a simple regression to predict when a player should be expected to make the major leagues based on their age" [PAGE 6]

Let me draft each section now.

For CROSS_LAYER_VETO_ADJUDICATION — I need physical/biomechanical/weather veto proof. The paper doesn't cover weather, so I should note that formally: the TWTC dataset has no weather covariates, which is a coverage gap; the veto is one of unobserved confounding. Biomechanical: pitch grades, throwing velocity (masked). The masking of numeric quantities removes the biomechanical channel that most directly predicts pitcher success (fastball velocity correlates with FIP). So the model must recover biomechanical information from natural-language descriptors ("cannon arm," "advanced approach," "bat speed") — that's a lexical proxy for biomechanics.

For weather: since the paper doesn't handle it, I need to argue that any deployment of TWTC must layer in environmental covariates — the "Coors Field" effect, Arizona Fall League, etc. — because biomechanical outcomes depend on altitude, humidity, temperature.

Let me now write.

For RLVR_COUNTERFACTUAL_VETOES — 3 verifiable scenarios with predictions:

1. Censoring-invariance test: re-run with full survival-model treatment instead of the age-regression exclusion, using the same 10,000 reports plus the discarded young players. Prediction: RoBERTa F1 shifts by less than 0.02 in absolute terms if the exclusion is harmless, more than 0.05 if it is not.

2. Name-masking ablation: re-run RoBERTa with name masking OFF (intentionally allowing the leak). Prediction: accuracy jumps to >0.94 (near-perfect) because Byron Buxton-type trajectories are memorized; F1 jumps by >0.15. If accuracy stays at 0.81, then the masking was not actually the bottleneck and Table 2 is honest.

3. TJS-topic subset classifier: train and test only on TJS-topic documents. Prediction: class balance shifts from 20% positive to closer to 50% positive and BA drops below 0.55, revealing that the corpus-level success signal is dominated by scouting-report-selection rather than the injury-topic semantics.

4. (Optional) Numeric-grade reinjection: re-run Tf·Idf using 20-80 grades instead of text. Prediction: BA ≥ 0.60 with better calibration (Brier score lower) because grades are the scouts' compressed summary. If BA collapses below 0.55, then grades are "projections" [PAGE 4] that survive while text decays — i.e., narrative has independent info.

Let me use three as required.

Now writing the full response. I need to ensure all XML tags are present, properly named, no betting content, formal LaTeX, and word counts.

Let me count roughly for each section:
- THINK_TRACE: 400+ words → I'll aim for 600-800
- SOURCE_OPERATORS_AND_EQUATIONS: substantial
- RETROCAUSAL_GENEALOGY: ~250
- RECURSIVE_THEORY_OF_MIND: ~250
- CROSS_LAYER_VETO_ADJUDICATION: ~250
- RLVR_COUNTERFACTUAL_VETOES: ~250

Total should be well over 1000.

Let me finalize.
</NATIVE_REASONING>

<THINK_TRACE>
The paper presents three layered claims that must be disentangled before any downstream inference can be attempted. The first is a **dataset claim** — "almost 10,000 scouting reports" containing written descriptions, 20-80 numeric grades, and identifiers [PAGE 3]. The second is a **linguistic claim** — NMF surfaces 10 latent topics whose class-conditioned prevalence differs between successful and unsuccessful prospects [PAGE 5]. The third is a **predictive claim** — classifiers on the written descriptions produce balanced accuracies of 0.6558 (Tf·Idf) and 0.6861 (RoBERTa) [PAGE 6, Table 2]. These are logically independent: the dataset could exist without informative language, and the language could be informative without any dataset-level interoperability. The paper's framing — "this divide presents a false dichotomy" [PAGE 1] — is a rhetorical deployment of the dataset claim to motivate the predictive claim; the arithmetic that actually carries the argument is confined to Table 2.

Multi-hop: The authors explicitly state "the labels are heavily imbalanced, with 80% of the labels being negative" [PAGE 6]. A trivial all-negative classifier therefore attains TNR = 1, TPR = 0, balanced accuracy = 0.5000, and F1 = 0 on this distribution. The honest signal is the *residual* of reported BA over 0.5, namely ΔBA = 0.1558 (Tf·Idf) and ΔBA = 0.1861 (RoBERTa). The F1 gap between models is only 0.5100 − 0.4660 = 0.0440 in absolute terms. Under a binomial approximation of the F1 sampling distribution with n_pos ≈ 2,000 positives in the test set and p ≈ 0.49, σ(F1) ≈ √(0.49 · 0.51 / 2000) ≈ 0.0112, meaning the two model F1s differ by ~4σ — but this conclusion is *contingent on* the test-set construction being a fixed, non-overlapping split, which the paper asserts ("All metrics are evaluated on the same out-of-sample testing set" [PAGE 5]) without disclosing the sample count.

The masking step is the second gray zone. The authors state: "To prevent data leakage, it is crucial to mask certain tokens in the scouting reports such as player names, numeric quantities, and to a lesser extent, references to names of organizations" [PAGE 6]. Name masking removes the Byron-Buxton-style identifier leak that would otherwise let the model memorize a player across years. Numeric masking removes the throwing-velocity and signing-bonus channels that carry the *most informative* scouting content. The consequence is asymmetric: name masking *raises* the credibility of Table 2 (it prevents a false-positive leak), while numeric masking *lowers* the reported ceiling (it removes the true-positive signal). Table 2 is therefore a conservative benchmark, not an upper bound on the information content of scouting reports.

The third gray zone is the age-based exclusion: "fitting a simple regression to predict when a player should be expected to make the major leagues based on their age, and eliminate all prospects who currently have not yet made the major leagues and would not yet be expected to have done so" [PAGE 6]. This is an informal right-censoring correction. In survival analysis, censored observations are preserved via the likelihood S(t|x) = exp(−Λ₀(t)e^{xᵀβ}); the paper's approach discards them. Discarding a prospect who hasn't debuted but is *below* the fitted debut age is a form of left-truncation on the outcome variable — information-lossy, but bias-mitigating under the assumption that the debut-age regression is unbiased.

The fourth gray zone is the TJS paradox: "a report that discusses an injury — primarily elbow injuries associated with Tommy John Surgery — is more likely to belong to a successful prospect" [PAGE 5]. The authors attribute this to selection: "players who fail to return from injuries are less likely to be written about" [PAGE 5]. Formally, P(success | in corpus, TJS) > P(success | TJS) whenever the conditional probability of appearing in the corpus given failure is small. Any downstream model trained on the corpus inherits this selection bias, and cannot be calibrated against the general TJS population.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>

**1. TF-IDF operator.** Let D = {d₁, …, d_N} be the corpus, V the vocabulary, f_{t,d} the raw count of term t in document d. Then

\[
\mathrm{tf}(t,d) = \frac{f_{t,d}}{\sum_{t' \in V} f_{t',d}}
\]

has units of conditional probability P(t | d) (dimensionless). The inverse document frequency

\[
\mathrm{idf}(t,D) = \ln\!\left(\frac{N}{|\{d \in D : t \in d\}|}\right)
\]

carries information units (nats). The TF-IDF weight w(t,d) = tf(t,d) · idf(t,D) is therefore expressed in **nats per token** — a non-negative, unbounded-above descriptor. Breakdown regimes: (i) df(t) = N ⇒ idf(t) = 0 (the term carries zero discriminative information — e.g., "pitcher", "fastball"); (ii) df(t) → 0 ⇒ idf(t) → +∞ (unique-token singularity, requiring smoothed form idf(t,D) = ln((1+N)/(1+df(t))) + 1); (iii) empty-document limit tf(t,d) = 0/0 (undefined). None of these singularities is addressed explicitly in [PAGE 5–6]; the smoothing used is undocumented.

**2. Binary classifier head.** With φ(d) ∈ ℝ^{|V|} the TF-IDF vector or RoBERTa embedding, the class posterior is

\[
p(y = 1 \mid d) = \sigma(\mathbf{w}^\top \varphi(d) + b), \qquad \sigma(z) = \frac{1}{1 + e^{-z}}
\]

with the decision rule ŷ = 1[p > τ]. The paper does not report τ; default τ = 0.5 in an imbalanced regime pushes recall toward zero.

**3. Label prevalence & metric decomposition.** From "the labels are heavily imbalanced, with 80% of the labels being negative" [PAGE 6], the positive prevalence π = 0.20 ⇒ prior entropy H(π) = −π ln π − (1−π) ln(1−π) = 0.5004 nats — i.e., the label distribution is intrinsically 0.5004 nats/token informatively, and any classifier exceeding chance must acquire ≥ 0.5004 nats of class-conditional signal. Balanced accuracy

\[
\mathrm{BA} = \tfrac{1}{2}\left(\mathrm{TPR} + \mathrm{TNR}\right), \qquad
\mathrm{TPR} = \frac{TP}{TP+FN},\ \mathrm{TNR} = \frac{TN}{TN+FP}
\]

is a bounded operator on [0,1]. **Trivial-classifier singularity:** an all-negative predictor forces TNR → 1, TPR → 0, so BA → 0.5000 and F1 → 0. Table 2 [PAGE 6] reports BA(Tf·Idf) = 0.6558 and BA(RoBERTa) = 0.6861, i.e., ΔBA = 0.1558 and 0.1861 over the order-zero Markovian baseline.

**4. F1-Score.** With precision P and recall R,

\[
F_1 = \frac{2PR}{P+R}
\]

is undefined at P + R = 0 — the all-negative classifier produces a removable singularity, not a zero-score. Table 2's F1 scores 0.4660 and 0.5100 reflect an *interior* operating point.

**5. NMF factorization.** Let X ∈ ℝ_{+}^{m×n} be the term–document matrix (m = vocabulary size, n = number of reports), and k = 10 latent topics per [PAGE 5]:

\[
\min_{W \in \mathbb{R}_+^{m \times k},\, H \in \mathbb{R}_+^{k \times n}} \; \|X - WH\|_F^2
\]

**Non-identifiability regime:** if WQ and Q⁻¹H are both non-negative for some Q ∈ GL(k), the factorization is not unique. The paper's assumption of a canonical topic assignment rests on non-uniqueness being benign for k = 10 with domain-initialized solutions — an assumption neither stated nor tested.

**6. 20-80 scale to standard-score mapping.** Per [PAGE 3–4], "50 as the average score, and every 10 points representing one standard deviation from the mean," so a grade g implies

\[
z(g) = \frac{g - 50}{10}
\]

with grade 20 ⇒ z = −3 and grade 80 ⇒ z = +3, covering ⌈Φ(3) − Φ(−3)⌉ = 99.73 % of the normal distribution. This mapping **presupposes** that the scouted skill mass is Gaussian; under any heavy-tailed skill distribution the tails (20 and 80) are saturated and lose monotonic informativeness. The paper's own gloss — "A score of 20 would represent a skill that is severely inadequate for the major league level, whereas a score of 80 would represent a hall-of-fame level skill" [PAGE 4] — implies saturation, supporting the singularity.

**7. WAR projection operator.** Table 1 [PAGE 4] gives piecewise-linear cell midpoints. Approximating hitter WAR at grade midpoints yields an approximately linear regime from g = 40 (WAR ≈ 0.35) to g = 70 (WAR ≈ 6.0), slope ≈ 0.19 WAR per scale point; and a **saturating regime** at g ≥ 80 (WAR > 7.0) where the projection must be truncated. The operator

\[
W_{\mathrm{proj}}(g) = \begin{cases} \text{undefined} & g = 20 \\ \text{piecewise-linear} & 30 \le g \le 70 \\ \text{truncated at ceiling} & g \ge 80 \end{cases}
\]

encodes this. Notably, [PAGE 4] states "the grades are projections, rather than evaluations; the goal of scouting is to predict future performance." Mechanically, this means the numeric-grade channel *is* a WAR-projection surrogate already, and re-feeding grades into a classifier double-counts the projection step.

**8. Age-based censoring regression.** Per [PAGE 6], the authors fit t̂_debut = α + β·age + ε and exclude a prospect iff (undeclared AND age < t̂_debut). Correct right-censoring treatment would be the survival operator S(t | x) = exp(−Λ₀(t)·e^{xᵀβ}), retaining censored terms in the likelihood. The paper's regression is a **degenerate special case** with censoring weight set to zero.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The intellectual lineage runs, in order: (1) the *20-80 scouting scale* inherited from mid-20th-century Branch Rickey-era farm systems, formally documented for the working public in Longenhagen & McDaniel's "The New FanGraphs Scouting Primer" [PAGE 4, ref 5]; (2) the *Moneyball* era's analytics/eye-test split, explicitly gestured to via the 2012 Eastwood film [PAGE 1]; (3) KATOH, the first widely cited probabilistic MLB-projection system (Mitchell, 2014, ref 6) — which failed on defense and speed, as the paper itself notes: KATOH "fails to account for specific player traits like defense and speed, leading it to 'underrate players who man premium defensive positions–like catcher, center field, and shortstop'" [PAGE 2]; (4) Carruthers' wRC+ translation method (ref 1) [PAGE 2]; (5) The Ringer's 73,000-report study (Lindbergh & Arthur, ref 2), the direct precursor of the TWTC dataset, which — critically — examined "numeric grades" but "did not examine the written descriptions" [PAGE 2]; (6) TWTC itself, which closes the gap by training on text; and finally (7) the parallel hockey lineage — Seppa, Schuckers & Rovito (ref 8) and Liu's NHL Prospect Classifier (ref 3) — the latter being the structure TWTC explicitly mirrors, differing only in scale (1,300 vs. ~10,000 reports) and sport [PAGE 3]. The NLP branch runs from TF-IDF (Salton, 1970s–1980s, cited generically as part of the scikit-learn stack [PAGE 5]) through the HuggingFace port of RoBERTa (Liu et al., 2019, ref 4).

Two **multi-week traps** are visible in this genealogy and worth flagging for researchers deploying TWTC. First, the Ringer-style *numeric-grade-only* analysis is tempting because grades are clean and quantitative, but the TWTC paper's entire contribution is the text channel — a reversion to grades re-opens the KATOH blind spot on premium defensive positions [PAGE 2]. Second, the **TJS topic asymmetry** is a structurally-generated artifact [PAGE 5]: a team habitually drafting TJS-recovering pitchers will appear to have better scouting narrative, but this is a birth-cohort confound, not a linguistic one. Any organization that ships a "TJS-success detector" to the draft room from this paper alone will be reverse-engineering their own selection funnel.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The reports are written for a *specific future audience* — the GM, the player-development staff, and (in FanGraphs' case) the public. The scout is simultaneously the descriptor and the predicted consumer of the descriptor. When a model is trained on those descriptions, it is being asked to recover the scout's hidden *confidence* about a player's outcome from the *surface language* the scout chose to publish. This produces a three-level nesting: (i) the scout's mental model of the player; (ii) the scout's mental model of the reader's expectations; and (iii) the model's inverse inference over (i) and (ii) jointly. Level (iii) is what Table 2 measures, but the paper claims only (i) — "scouts are able to author high-quality descriptions" [PAGE 5]. The inference is *upward* through levels (iii) → (i) and is therefore not identified without a further assumption that (ii) is constant across scouts. There is no evidence in [PAGE 5–6] that scout fixed effects are controlled.

**Habit regression versus counter-trap.** The scout's habitual lexicon — "advanced approach," "cannon arm," "adjustments against offspeed pitches" [PAGE 3] — is the TF-IDF signal. But a *narrative habit* can also be a *trap*: the KATOH authors' failure on catcher is reprised in [PAGE 5], where "reports for unsuccessful prospects mention catchers and high school prospects, two of the harder classes to predict" [PAGE 5]. A learned model that keys on the word "catcher" will *anti-predict* success, because the corpus is dominated by catcher prospects who didn't pan out — a linguistic base-rate artifact rather than a skill signal.

**The clock.** Three clocks stress the model: (a) the *player clock* (time from amateur signing to MLB debut), (b) the *scout clock* (when the report was filed relative to the player's development trajectory), and (c) the *label clock* (whether the outcome has resolved yet). Only the *player clock* is explicitly modeled (via the "simple regression to predict when a player should be expected to make the major leagues" [PAGE 6]); the scout clock is unrecorded and the label clock is *silently truncated* by the exclusion rule.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
**Biomechanical veto.** The paper masks "numeric quantities" [PAGE 6], which includes throwing velocity, pitch grades, and signing bonuses — precisely the variables that mechanistically determine MLB translation. RoBERTa must therefore recover biomechanics via lexical proxies ("cannon arm," "bat speed," "advanced approach" [PAGE 3]). The masking is defensible against leakage but structurally *caps* the achievable TPR: a biomechanical veto (velocity below league threshold) cannot be expressed in the retained vocabulary at the resolution required for pitch-level decisions. Under the paper's reported 0.6861 balanced accuracy [PAGE 6], the residual ~31% false-negative rate is *consistent with* a biomechanical information deficit in the parsing channel.

**Physical veto.** Table 1 [PAGE 4] caps the 20-80 scale at 80 ("Top 1-3 arms in baseball" for pitchers, "Top 5 overall" for hitters). Any classifier trained on grades-plus-text inherits this *upper-ceiling compression*: the grade-to-WAR mapping is monotone but *bounded above*, meaning the classifier cannot distinguish a true ace from a merely All-Star arm unless the text discriminates — and the text does so only via vague lexical hedges. This is a hard physical veto on top-decile ranking, not a modeling artifact.

**Weather veto.** The TWTC dataset contains **no weather covariates**; the paper makes no environmental claim. This is a coverage gap, not a tested effect — but any operational deployment of TWTC over, e.g., Arizona Fall League or Coors-adjacent affiliates will introduce unmodeled variance in the biomechanical channel (altitude, humidity, and temperature all modulate pitch break and exit velocity) that the classifier cannot correct for, because the geographic origin of each report is not recorded as a covariate alongside the narrative. The veto is therefore *unaddressed*, not *refuted*.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
**Veto 1 — Censoring-invariance test.** Re-run the RoBERTa classifier on the *full* 10,000-report set, retaining the age-excluded prospects via proper survival likelihood (S(t|x) = exp(−Λ₀(t)e^{xᵀβ})) instead of discarding them per [PAGE 6]. *Prediction:* if the exclusion rule is harmless, RoBERTa F1 shifts by < 0.02 in absolute terms; if it is materially lossy, F1 shifts by ≥ 0.05 and BA expands by ≥ 0.03. Either reading is a decisive result — silence on the shift is a failure of the paper's methodology.

**Veto 2 — Name-masking ablation.** Re-train RoBERTa with name masking *disabled* (deliberately re-introducing the Byron-Buxton leak that [PAGE 6] identifies). *Prediction:* test accuracy jumps from 0.8086 to > 0.94 with the leak present and F1 climbs by > 0.15; if accuracy stays near 0.81, then name leakage was not a binding constraint and Table 2 is *conservative* rather than *leaked*. This test directly confirms or falsifies the authors' policy claim that masking is "crucial to prevent data leakage" [PAGE 6].

**Veto 3 — TJS-subset recalibration.** Train and evaluate on only the TJS-associated documents from the NMF corpus [PAGE 5]. *Prediction:* positive-label prevalence in this subset rises from π = 0.20 to between 0.35 and 0.50, and balanced accuracy on the subset falls below 0.55. That pattern would confirm the paper's own attribution — "players who fail to return from injuries are less likely to be written about" [PAGE 5] — as a *selection-bias artifact* rather than a genuine signal that injury predicts success. If, by contrast, TJS-subset BA remains above 0.65 with π ≈ 0.50, then a real biomechanical survivor effect is present and warrants independent replication.
</RLVR_COUNTERFACTUAL_VETOES>