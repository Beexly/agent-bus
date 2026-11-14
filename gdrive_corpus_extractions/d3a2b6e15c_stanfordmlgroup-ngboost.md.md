---
source: "stanfordmlgroup-ngboost.md"
folder: "/CorpusRoot/Sports-deploy-fix"
pages: 1
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4096
---

<NATIVE_REASONING>
The user wants me to act as the "GSE + GSI Frontier Reasoning Foundry" and process a source text about NGBoost (Natural Gradient Boosting for Probabilistic Prediction). They provided specific STRICT INVARIANTS:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important: The source text provided is only 1 page ([PAGE 1]). I must cite exact [PAGE N] markers and verbatim quotes when source pages are provided.

I need to avoid betting lines entirely. The source mentions "props pricing" and "interval outputs" but I should not mention spreads, totals, moneylines, or odds. I can talk about probabilistic prediction, intervals, calibration, etc., but not betting odds.

Word count: >= 1,000 words total across sections. THINK_TRACE alone >=400 words.

Structure: I must output exactly those XML sections with content. No other text outside? The prompt says "across these exact XML sections". I should probably just output the XML sections, maybe a brief intro or just the sections. To be safe, I'll output only the XML sections, ensuring total word count >= 1000 words.

Let's draft content.

Section 1: THINK_TRACE (>=400 words). Deep multi-hop derivation & gray-zone audit.
- Discuss NGBoost: natural gradient boosting, probabilistic output, distributional output per prediction.
- Derivation: Negative log-likelihood as scoring rule, natural gradient vs ordinary gradient in function space, Fisher information metric, exponential family assumption.
- Gray-zone: parametric family choice, misspecification, calibration drift over seasons, 2022-24 fit vs 2025 PIT uniformity vs 2026 live-check.
- No toy equations. Use formal LaTeX.
- Cite [PAGE 1] and verbatim quotes from source.

Section 2: SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define NGBRegressor fit/predict.
- Scoring rule S(y, F), natural gradient update.
- Exponential family density p(y|θ) = h(y) exp(η(θ)·T(y) - A(θ)).
- Natural gradient: ∇_nat L = G(θ)^{-1} ∇ L, where G is Fisher information matrix.
- Units: nats for log-likelihood, dimensionless PIT values in [0,1], coverage probability nominal 1-α.
- Breakdown regimes: non-exponential-family conditionals, heavy tails, multimodality, covariate shift between 2024 and 2026.
- Cite [PAGE 1] verbatim quotes.

Section 3: RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: Friedman GBM (2001), Bühlmann & Yu boosting, McCullagh & Nelder GLMs/exponential families, Amari natural gradient (1998), Duan et al. 2019 NGBoost.
- Multi-week traps: walk-forward refit per season, distributional family that fit 2022-24 offenses may not fit 2026 (seasonal scheme changes, roster turnover, rule changes).
- Calibration pipeline: fit 2022-24, PIT on 2025, recalibrate isotonic/conformal, live-check 2026 W1-4.
- Cite [PAGE 1].

Section 4: RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Model the calibration group's habits: crisis habit = treating raw NGBoost output as gospel when under deadline pressure; counter-trap = over-correcting by forcing nonparametric conformal intervals that destroy sharpness; clock = seasonal refit cadence vs weekly production deadlines.
- Recursive layers: NGBoost produces distribution -> calibration row consumes it -> production consumes calibrated intervals -> human overrides under crisis.
- Discuss fixed points, regressions to point estimates under stress.

Section 5: CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- The source is about tabular ML, not physical. But GSE lens mentions player yards, game totals. Need to discuss veto layers: physical (player availability, surface), biomechanical (fatigue, snap counts), weather (wind, precipitation) as exogenous vetoes that NGBoost cannot see unless encoded in X.
- Veto proof: if a physical layer veto fires (e.g., starting QB out), NGBoost tabular features may still project based on historical averages unless features are updated; thus NGBoost distribution is conditional on observed X only, not on unobserved physical state.
- No betting lines.

Section 6: RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal acronym. Need 3 scenarios.
- Scenario 1: Parametric misspecification (True conditional is LogNormal but NGBoost forced Normal). Veto: PIT histogram on 2025 holdsout shows U-shape or skew; prediction: calibrated intervals under-cover upper tail.
- Scenario 2: Covariate shift / seasonal regime break (2026 offense rule change). Veto: 2026 W1-4 live-check PIT deviates from Uniform(0,1) via KS test p<0.01; prediction: coverage collapses below nominal.
- Scenario 3: Calibration row absence (raw NGBoost deployed without post-hoc). Veto: missing calibration pipeline step detected in CI; prediction: sharp intervals but miscalibrated, nominal coverage violated systematically.
- Each must have verifiable conditions and predictions.

Word count check: Need >=1000 words total. THINK_TRACE >=400. Let's aim for ~200 words per section average, but THINK_TRACE 450+, others 120-180 each. Total should exceed 1000.

Let's write carefully, ensuring formal LaTeX. Use \( ... \) or $$ ... $$.

Need verbatim quotes from [PAGE 1]. I'll quote exact lines like "NGBoost is the probabilistic head the calibration group has been missing" etc.

No mention of spreads, totals, moneylines, odds. Avoid "props pricing" maybe? Source says "props pricing and interval outputs actually need". I can say "derivative pricing" or "pricing" but avoid "props" maybe? "Props" is short for propositions, not explicitly a betting line, but to be safe I'll avoid "props pricing" and refer to "conditional distribution outputs" or "interval outputs". The user said zero betting lines: spreads, totals, moneylines, or odds. "Props" isn't explicitly listed but it's betting-adjacent. I'll avoid it.

Also avoid "odds" entirely.

Let's draft.

THINK_TRACE content (approx 450-500 words):

Start: The source document [PAGE 1] presents stanfordmlgroup/ngboost as a maintained Apache-2.0 library (1,891 stars, pushed 2026-09-02) implementing Duan et al. 2019 NGBoost. The core claim quoted on [PAGE 1]: "Gradient boosting that outputs a full probability distribution per prediction, not a point." This is a distributional regression operator: given tabular features X and target y, NGBRegressor().fit(X, y) returns a model whose pred_dist(X) yields a distribution object supporting .logpdf and .ppf.

Multi-hop derivation:
1. Point GBM minimizes empirical risk over additive base learners h_m: F_M(x) = sum_{m=1}^M ν h_m(x). It targets E[Y|X=x] under squared error.
2. NGBoost replaces the point target with a parametric conditional density p(y|x; θ(x)) from an exponential family. The natural parameter η(x) is itself modeled additively: η_m(x) = η_{m-1}(x) + ν ∇_nat L.
3. The scoring rule is the negative log-likelihood S(y, θ) = -log p(y|θ). The ordinary gradient in parameter space is preconditioned by the inverse Fisher information matrix G(θ) = E[∇ℓ ∇ℓ^T], yielding the natural gradient ∇_nat = G^{-1} ∇. This makes updates invariant to reparameterization and stabilizes probabilistic fitting, as claimed on [PAGE 1]: "The natural-gradient machinery makes the probabilistic fit stable."
4. Output is not y-hat but a full distribution object; quantiles via .ppf(α), log-density via .logpdf(y).

Gray-zone audit:
- [PAGE 1] explicitly warns: "You must choose the parametric family — if the true conditional distribution isn't Normal-ish, the 'probabilities' are misshapen." and "NGBoost distributions are frequently miscalibrated out of the box and need post-hoc recalibration."
- The GSE lens on [PAGE 1] says to wire it "with a calibration row, not as gospel" and to check PIT uniformity on 2025, recalibrate via isotonic or conformal-tights, live-check on 2026 W1-4.
- Risk: walk-forward non-stationarity. The family fit on 2022-24 may not fit 2026. [PAGE 1]: "the distribution family that fit 2022-24 offenses may not fit 2026."
- Gray zone: NGBoost is solid as a library but notebook-heavy; productionizing requires engineering around the calibration row. The verdict [PAGE 1] is ADOPT, conditional on post-hoc calibration.

This should be >400 words.

SOURCE_OPERATORS_AND_EQUATIONS content:
- Formal LaTeX definitions.
- Cite [PAGE 1] with quotes.
- Units: nats, dimensionless, coverage probability.
- Breakdown regimes: heavy tails, multimodality, non-exponential-family, covariate shift.
- Mention sklearn modularity: scoring rule × distribution × base learner.

RETROCAUSAL_GENEALOGY:
- Lineage: Friedman 2001 GBM, Bühlmann & Yu, McCullagh & Nelder 1989 GLM/exponential family, Amari 1998 natural gradient, Duan et al. 2019 NGBoost.
- Multi-week traps: seasonal non-stationarity, roster turnover, rule changes. Walk-forward refit per season.
- Calibration pipeline timeline: fit 2022-24, PIT on 2025, recalibrate, live-check 2026 W1-4.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under deadline pressure, calibration group treats raw NGBoost .ppf outputs as authoritative, skipping recalibration row.
- Counter-trap: over-reliance on conformal/MAPIE strips distributional shape, producing wide conservative intervals that lose sharpness and may be ignored by downstream consumers.
- Clock: weekly production cadence vs seasonal refit cadence; if model isn't refit before 2026 season, stale parametric assumptions produce silent miscalibration.
- Recursive fixed point: human overrides -> degraded calibration trust -> more overrides -> model disuse.

CROSS_LAYER_VETO_ADJUDICATION:
- NGBoost conditions only on X provided. Physical layer: player availability (injury, suspension), weather (precipitation, wind), biomechanical (snap count, fatigue) are exogenous unless featurized.
- Veto rule: if any physical/biomechanical/weather layer detects a state change not represented in X (e.g., starting QB replaced, field conditions altered), NGBoost distribution is vetoed or flagged as out-of-distribution because p(y|x;θ) assumes i.i.d. conditional on observed X.
- Proof sketch: Let X_obs be tabular features. Let Z be unobserved physical state. NGBoost estimates p(y|x_obs). True data generating process is p(y|x_obs, z). If z shifts and is not in x_obs, the conditional is misspecified; natural gradient cannot recover information not present in X. This is a structural identifiability failure.
- No mention of betting lines.

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Parametric misspecification. Condition: True conditional Y|X is LogNormal; NGBoost family set to Normal. Verifier: PIT histogram on 2025 holdout exhibits right skew; Anderson-Darling test against Uniform(0,1) rejects at α=0.01. Prediction: nominal 90% interval achieves <85% empirical coverage; upper quantiles systematically under-forecast extremes.
- Scenario 2: Seasonal covariate shift. Condition: 2026 offensive rule change alters scoring distribution; NGBoost fit on 2022-24 not refit before Week 1. Verifier: 2026 W1-4 live PIT values fail KS test vs Uniform(0,1) (p<0.05) across two consecutive weeks. Prediction: coverage collapses to ~60-70% for nominal 80%; recalibration row must trigger retraining or family switch.
- Scenario 3: Missing calibration row. Condition: Production pipeline deploys raw NGBoost .ppf directly without isotonic/conformal post-hoc. Verifier: CI gate detects absence of calibration transform in model artifact checksum. Prediction: sharp-looking intervals have empirical coverage far from nominal (e.g., 50% nominal yields ~35% actual), causing downstream overconfidence in tail events.

Need to ensure no toy equations like Force/Fatigue. All equations formal.

Total word count: Let's estimate. THINK_TRACE ~500. SOURCE_OPERATORS ~250. RETROCAUSAL ~200. RECURSIVE ~180. CROSS_LAYER ~180. RLVR ~200. Total ~1510. Good.

I must not add extra sections outside XML? The user said "across these exact XML sections". I'll output exactly those six sections, nothing else, to be safe. Maybe no preamble.

Check: "ZERO BETTING LINES". I used "odds"? No. "spreads"? No. "totals"? No. "moneylines"? No. "props pricing"? I avoided it. "game totals" from source? I will not repeat that phrase; I can refer to "game-level targets" or just "targets". Avoid "totals".

Check verbatim quotes:
- "Gradient boosting that outputs a full probability distribution per prediction, not a point." [PAGE 1]
- "The natural-gradient machinery makes the probabilistic fit stable." [PAGE 1]
- "You must choose the parametric family — if the true conditional distribution isn't Normal-ish, the "probabilities" are misshapen." [PAGE 1] (note quotes inside quote, handle carefully)
- "NGBoost distributions are frequently miscalibrated out of the box and need post-hoc recalibration (which is exactly this group's job)." [PAGE 1]
- "wire it with a calibration row, not as gospel." [PAGE 1]
- "fit NGBoost on 2022-24, check distribution calibration (PIT uniformity) on 2025, recalibrate via uncertainty-toolbox's isotonic recalibration or conformal-tights, live-check on 2026 W1-4." [PAGE 1]
- "the distribution family that fit 2022-24 offenses may not fit 2026." [PAGE 1]
- "ADOPT — as the probabilistic prediction head for tabular signals, always paired with a post-hoc calibration row. Apache-2.0." [PAGE 1]

Need to be careful with nested quotes in verbatim quotes. I'll use single quotes inside or escape. In XML, double quotes are fine. I'll use typographic quotes or just write them plainly.

Now produce final. Ensure XML tags exact. Use LaTeX.

Word count in THINK_TRACE: I'll write generously.

Let's write the content now.
</NATIVE_REASONING>

<THINK_TRACE>
The source document [PAGE 1] presents stanfordmlgroup/ngboost as a maintained, Apache-2.0 library (1,891 stars, pushed 2026-09-02) implementing Duan et al. 2019, "NGBoost: Natural Gradient Boosting for Probabilistic Prediction." The central claim quoted on [PAGE 1] is that NGBoost provides "Gradient boosting that outputs a full probability distribution per prediction, not a point." This is a distributional regression operator: given tabular features X and target y, NGBRegressor().fit(X, y) returns a model whose pred_dist(X) yields a distribution object supporting .logpdf and .ppf.

Deep multi-hop derivation proceeds as follows. Standard gradient boosting machines (GBM) minimize empirical risk over an additive ensemble of base learners h_m, producing F_M(x) = Σ_{m=1}^M ν h_m(x), and under squared-error loss they target the conditional mean E[Y|X=x]. NGBoost replaces this point target with a parametric conditional density p(y|x; θ(x)) drawn from an exponential family. The natural parameter η(x) is itself modeled additively across boosting iterations: η_m(x) = η_{m-1}(x) + ν ∇_nat L. The scoring rule is the negative log-likelihood S(y, θ) = -log p(y|θ). The ordinary gradient in parameter space is preconditioned by the inverse Fisher information matrix G(θ) = E[∇ℓ ∇ℓ^T], yielding the natural gradient ∇_nat L = G(θ)^{-1} ∇ L. This reparameterization-invariant update is what [PAGE 1] cites when it states: "The natural-gradient machinery makes the probabilistic fit stable." The model output is therefore not y-hat but a full distribution object; quantiles are extracted via .ppf(α) and log-density via .logpdf(y).

Gray-zone audit. [PAGE 1] explicitly warns: "You must choose the parametric family — if the true conditional distribution isn't Normal-ish, the 'probabilities' are misshapen." It further states: "NGBoost distributions are frequently miscalibrated out of the box and need post-hoc recalibration (which is exactly this group's job)." The GSE lens on [PAGE 1] directs that NGBoost be wired "with a calibration row, not as gospel," prescribing a pipeline: "fit NGBoost on 2022-24, check distribution calibration (PIT uniformity) on 2025, recalibrate via uncertainty-toolbox's isotonic recalibration or conformal-tights, live-check on 2026 W1-4." The document identifies a walk-forward non-stationarity trap: "the distribution family that fit 2022-24 offenses may not fit 2026." Although the verdict on [PAGE 1] is "ADOPT — as the probabilistic prediction head for tabular signals, always paired with a post-hoc calibration row," the conditional dependency on the calibration row is structural, not advisory. Without it, raw NGBoost quantiles are untrustworthy in production because parametric misspecification and seasonal regime shifts interact multiplicatively: a wrong family fitted on stale seasons yields intervals that look sharp but are systematically miscalibrated. The repository is notebook-heavy, meaning engineering effort is required to move from exploratory .ppf outputs to a hardened calibration row. These gray zones—family choice, out-of-box miscalibration, seasonal drift, and production immaturity—define the boundary between the library's statistical capability and its operational safety.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Source: [PAGE 1], stanfordmlgroup/ngboost repository summary.

Formal operators. NGBoost is defined over a modular Cartesian product: scoring rule × distribution family × base learner. Let D = {(x_i, y_i)}_{i=1}^n be tabular training data. The conditional model assumes p(y|x; θ(x)) belongs to a parametric family P (e.g., Normal, LogNatural). The natural parameter η(x) is updated by gradient boosting in function space.

Negative log-likelihood scoring rule:
S(y, θ(x)) = -log p(y | θ(x))

Natural gradient update at iteration m:
η_m(x) = η_{m-1}(x) + ν G(θ_{m-1})^{-1} ∇_θ S(y, θ_{m-1})

where G(θ) = E_{y~p(y|θ)} [ ∇_θ log p(y|θ) ∇_θ log p(y|θ)^T ] is the Fisher information matrix, and ν ∈ (0,1] is the learning rate.

Prediction object:
pred_dist(x) ⇒ 𝒟_x with methods:
- logpdf(y): ℓ = log p(y | θ(x)), units: nats
- ppf(α): quantile function Q_x(α) = inf{ y : F_x(y) ≥ α }, α ∈ [0,1], dimensionless probability level

Units and calibration metrics:
- Log-likelihood contributions measured in nats.
- Probability Integral Transform (PIT) values u_i = F_{x_i}(y_i) should be i.i.d. Uniform(0,1) if the model is calibrated; uniformity assessed on holdout seasons.
- Interval coverage: nominal coverage 1-α for interval [Q_x(α/2), Q_x(1-α/2)]; empirical coverage is a dimensionless frequency in [0,1].

Breakdown and singularity regimes:
1. Non-exponential-family conditionals: if the true p(y|x) is heavy-tailed, multimodal, or bounded while NGBoost assumes Normal, the Fisher metric G(θ) may remain positive definite but the model class is misspecified; natural gradient converges to the KL projection onto the wrong family, not the truth.
2. Covariate shift / seasonal non-stationarity: if P_2026(X,Y) ≠ P_2022-24(X,Y), the fitted θ(x) from [PAGE 1]'s 2022-24 training window is evaluated under a shifted input distribution, invalidating PIT uniformity on 2025 and live-check on 2026 W1-4.
3. Small-sample or separation regimes: with sparse tabular features, G(θ) can become ill-conditioned; natural gradient updates amplify numerical noise unless regularization or damping is applied.

Verbatim citations from [PAGE 1]:
- "Gradient boosting that outputs a full probability distribution per prediction, not a point."
- "The natural-gradient machinery makes the probabilistic fit stable."
- "You must choose the parametric family — if the true conditional distribution isn't Normal-ish, the 'probabilities' are misshapen."
- "NGBoost distributions are frequently miscalibrated out of the box and need post-hoc recalibration (which is exactly this group's job)."
- "fit NGBoost on 2022-24, check distribution calibration (PIT uniformity) on 2025, recalibrate via uncertainty-toolbox's isotonic recalibration or conformal-tights, live-check on 2026 W1-4."
- "the distribution family that fit 2022-24 offenses may not fit 2026."
- "ADOPT — as the probabilistic prediction head for tabular signals, always paired with a post-hoc calibration row. Apache-2.0."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage. NGBoost descends from four distinct methodological strands. First, Friedman's gradient boosting machines (2001) established additive stagewise fitting of base learners to minimize differentiable loss. Second, Bühlmann and Yu extended boosting theory to high-dimensional settings with consistency results for linear smoothers. Third, the generalized linear model tradition of McCullagh and Nelder (1989) formalized exponential-family conditional densities and canonical links, which NGBoost inherits through its choice of distribution family and natural parameter η. Fourth, Amari's natural gradient (1998) introduced Fisher-information preconditioning to make parameter updates invariant to reparameterization; Duan et al. 2019 combined this with boosting to obtain stable distributional fitting, as summarized on [PAGE 1].

Multi-week traps. The GSE lens on [PAGE 1] explicitly adopts a walk-forward cadence: fit NGBoost on 2022-24, validate PIT uniformity on 2025, recalibrate, then live-check on 2026 W1-4. This creates three multi-week traps. Trap A: the parametric family that fits 2022-24 offensive distributions may not fit 2026 because of roster turnover, scheme changes, or rule modifications; [PAGE 1] states "the distribution family that fit 2022-24 offenses may not fit 2026." Trap B: raw NGBoost outputs are "frequently miscalibrated out of the box," so a team that skips the isotonic or conformal recalibration row will publish intervals whose empirical coverage diverges from nominal within the first four weeks. Trap C: the repository is notebook-heavy; if productionization lags, the 2026 W1-4 live-check uses stale artifacts trained on pre-2026 regimes, converting a statistical drift into an operational failure. The retro-causal warning is that today's 2022-24 training decision determines next season's calibration failure mode; the model appears stable during development but breaks under seasonal distribution shift.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression. Under deadline pressure, the calibration group may regress to treating raw NGBoost outputs as authoritative: they read .ppf(0.5) as a point projection and .ppf(0.8) / .ppf(0.2) as an interval, skipping the post-hoc calibration row mandated on [PAGE 1]. This habit regresses NGBoost back to a deterministic GBM, discarding the distributional head that motivated adoption.

Counter-trap. The opposite over-correction is to wrap NGBoost exclusively in conformal or MAPIE intervals, discarding the parametric log-likelihood shape and the .logpdf diagnostic. Conformal methods guarantee marginal coverage under exchangeability but produce intervals that can be excessively wide and ignore conditional heterogeneity encoded by NGBoost's θ(x). Downstream consumers, seeing conservative intervals every week, learn to ignore them, re-introducing overconfidence through manual override.

Clock. The production clock operates weekly (W1-4 live checks), while the model clock operates seasonally (refit per season per [PAGE 1]). If the calibration group does not refit before the 2026 season, the parametric assumption trained on 2022-24 is applied to a shifted environment. The crisis habit (skip recalibration) intersects with the clock (no seasonal refit) to create silent miscalibration: intervals look internally consistent because they derive from a fitted object, but PIT values on 2026 data deviate from Uniform(0,1).

Recursive fixed point. Let C_t be trust in the calibration row at week t, and O_t be the rate of human override. Raw NGBoost miscalibration lowers C_t, which raises O_t, which reduces observed calibration feedback, which further lowers C_t. The stable fixed point is disuse of the probabilistic head. Breaking the recursion requires enforcing the calibration row as a hard CI gate: no model artifact is promoted without a verified isotonic/conformal transform and a PIT uniformity check on the most recent holdout season.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
NGBoost is a conditional density estimator p(y|x; θ(x)) that receives only the tabular feature matrix X supplied at inference time. Physical, biomechanical, and weather layers act as exogenous state variables Z not necessarily represented in X. A veto proof proceeds by identifiability. Let the true data-generating process be p(y | x, z), where z captures unobserved physical state (e.g., starting-player availability, field-surface condition, precipitation, wind). NGBoost estimates p(y | x_obs) under the assumption that x_obs is sufficient for the conditional distribution. If z shifts while x_obs remains unchanged, then p(y | x_obs) ≠ p(y | x_obs, z), and no amount of natural-gradient optimization within NGBoost can recover information about z that is absent from X. This is a structural identifiability failure, not a numerical one.

Veto rule. If any cross-layer sensor fires—player absence, surface change, or weather threshold breach—and the corresponding variable is absent from the NGBoost feature set, the NGBoost distribution object is flagged out-of-distribution and vetoed or replaced by a conservative fallback. Because the library conditions only on observed tabular features, it cannot internally detect a shift in z. The calibration row described on [PAGE 1] cannot repair this either: PIT uniformity on 2025 holds out the same X distribution; if 2026 introduces a new physical regime not encoded in X, PIT failure is expected and indicates veto activation, not merely recalibration drift.

Biomechanical and weather specificity. Fatigue, snap-count accumulation, and precipitation alter the conditional mean and variance of the target but do not alter the NGBoost algorithm itself; they alter the input distribution P(X) and the conditional P(Y|X). Unless these variables are featurized and refreshed weekly, NGBoost projects from stale physical priors. Therefore the cross-layer adjudication layer must sit upstream of NGBoost: it validates that X at inference matches the physical state assumed during the 2022-24 fit, and issues a veto when mismatch is detected. This is a hard structural gate independent of the probabilistic output.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (Reinforcement Learning from Verifiable Rewards) counterfactual veto scenarios. Each scenario specifies a verifiable condition, a detection mechanism, and a prediction of downstream behavior if the veto is not triggered.

Scenario 1: Parametric misspecification. Condition: True conditional Y|X is right-skewed (e.g., LogNormal), but NGBoost is constrained to a Normal family. Verifier: On the 2025 holdout, compute PIT values u_i = F_{x_i}(y_i); an Anderson-Darling test against Uniform(0,1) rejects at α = 0.01, and the PIT histogram exhibits right-skew (excess mass near u ≈ 1). Prediction: A nominal 90% central interval achieves empirical coverage below 85%; upper-tail quantiles systematically under-forecast extreme outcomes. Veto: block promotion of the Normal-family artifact; require a LogNormal or skew-symmetric family and post-hoc recalibration.

Scenario 2: Seasonal covariate shift. Condition: A 2026 rule or scheme change alters the joint distribution P(X,Y); NGBoost remains fitted on 2022-24 and is not refit before Week 1. Verifier: Across 2026 W1-W4, the weekly PIT distribution fails a two-sample Kolmogorov-Smirnov test against Uniform(0,1) with p < 0.05 in two consecutive weeks. Prediction: Empirical coverage for nominal 80% intervals collapses to roughly 60-70%; the calibration row must trigger retraining or a family switch before Week 5. Veto: automatic retraining gate if live-check PIT fails for two consecutive weeks.

Scenario 3: Missing calibration row. Condition: Production pipeline deploys raw NGBoost .ppf outputs directly to downstream consumers without the isotonic or conformal-tights post-hoc transform specified on [PAGE 1]. Verifier: CI checksum of the model artifact detects absence of a calibration transform object; the calibration pipeline stage returns null. Prediction: Intervals appear sharp (narrow width) but have empirical coverage far from nominal—for example, a nominal 50% interval covers only ~35% of realized outcomes—causing systematic overconfidence in tail events and eroding trust in the probabilistic head. Veto: no model release without a verified calibration row and PIT uniformity certificate on the most recent holdout season.
</RLVR_COUNTERFACTUAL_VETOES>