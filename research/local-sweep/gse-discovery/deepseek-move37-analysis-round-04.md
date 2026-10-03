# DeepSeek analysis round — MOVE-37-ANALYSIS-04 (verbatim paste from Garrett, 2026-09-13)

DEEP RE-ANALYSIS: POST-FALSIFICATION, POST-DEEP-RESEARCH

Galaxy Sports Edge | Theorist Analysis (v3 — Deep Research)

Date: 2026-09-13 | Run ID: MOVE-37-ANALYSIS-04

0. HEADLINE

Three falsifications demand a deeper explanation than "the hypothesis died." The time-term failure is not a target problem—it is a method-reachability problem. The predictability gate needs a multi-tier rule, not a binary threshold. And the play-type prediction target has a pre-existing ceiling that was not visible in the prior analysis.

New research findings:

1. The nflfastR xPass model already exists. nflfastR includes an Expected Pass (XPASS) model that predicts the likelihood of a pass play given the current situation, with pass_oe (Pass Rate Over Expected) as a derived metric. This means "play-type predictability" is not a white-space target—it is already a human-designed machine metric. Using it as the flagship discovery target would be circular.
2. Sandholtz et al. (2024) already executed the IRL fourth-down experiment. Their paper, published in The Annals of Applied Statistics, models fourth-down decisions as an MDP and estimates risk preferences via inverse optimization. Their finding: coaches exhibit conservative risk preferences (optimizing low quantiles) and risk tolerance has increased over time. GSE's version would be a refinement, not a novel discovery.
3. Soft target regularization in GP can completely eliminate overfitting. Vanneschi & Castelli (2021) demonstrated that combining soft target regularization with a functional complexity measure "can completely eliminate overfitting, for all the studied test cases". This is a more aggressive approach than log-cosh alone.
4. Bayesian surprise already has a principled formulation (Baldi & Itti) with KL divergence as the canonical definition. This strengthens the demotion argument: the mathematical object is well-defined, but its practical computation from nflverse point-estimate WP is infeasible without a probabilistic WP model.

1. TIME-TERM HYPOTHESIS: CONCEDE, REFRAME, REDESIGN

1.1 The evidence, re-read

Three seeds, two splits, log-cosh fitness. Best SR formula: −0.211·|score_differential|. No program contains quarter_seconds_remaining. Affine-calibrated human heuristic (which contains time) beats SR by 0.037 R².

Pre-registered falsification rule: time term absent on both splits → hypothesis REJECTED. Verdict: REJECTED.

1.2 But the rejection is method-level, not target-level

The calibration gap tells the real story:

Model Raw R² Affine-calibrated R²
B2 (human heuristic) −0.2755 0.0531
Best SR (log-cosh) — 0.0157

Raw B2 is a scale-mismatched formula—outputs ~10⁴× larger than wpa² values. Once calibrated, B2 (which contains the time term) beats SR (which cannot find it). The time term carries real information; the GP cannot extract it from this search space.

Why can't it? Three mechanisms:

(a) The time term is conditional, not marginal. Its contribution is largest when |score_differential| is small and qsec is short; elsewhere it is dominated by |score_differential|. Random-init GP populations are bad at discovering conditional structure—they find dominant single-feature formulas first.

(b) The best SR found a sub-model of B2. −0.211·|score_differential| (calibrated: 0.0157) is structurally a component of B2. The human heuristic contains this term plus the time term plus the WP symmetry term. The GP never assembles a comparable multi-term form.

(c) Log-cosh's honest landscape has no "lucky gradient." This is the cost of the fix—MSE's pathology sometimes accidentally found useful structure by latching onto tail noise. Log-cosh removes the pathology and the discovery simultaneously.

1.3 Redesigns (ranked)

Redesign A (highest EV): Time-stratified SR. Run SR separately on subsets stratified by qsec:

· Q1 plays (qsec > 2700) — time essentially constant
· Q4 plays (qsec < 900) — time varies maximally

If SR on Q4-only data finds a quarter_seconds_remaining term, the conditional-contribution hypothesis is confirmed. If it still doesn't, the search-space limitation is confirmed at the strongest possible test.

Redesign B: Grammar-guided GP with human heuristic seeding. Initialize the GP population with variations of the human heuristic structure. This tests whether SR can improve the human heuristic given it as a starting point. Odds of finding a better formula: ~30%. But any improvement is a refinement, not a discovery—same class as GLI-0.1.

Redesign C: Soft target regularization. Vanneschi & Castelli (2021) showed that soft target regularization (a method borrowed from neural networks) combined with a functional complexity measure can completely eliminate overfitting in GP. This is more aggressive than log-cosh alone. The soft target method replaces hard 0/1 targets with soft labels, while the complexity measure quantifies the curvature of the evolved function. This dual approach could preserve the conditional structure that log-cosh's honesty discards.

Redesign D: Residual-of-residual. Remove the variance explained by |score_differential| first (OLS), take the residual, then run SR on the residual. This isolates the non-score signal, which includes the time term.

Recommendation: run Redesign A. It is the cleanest test of the conditional-contribution hypothesis with a pre-registered interpretation rule. If A fails, run C. If C fails, the SR method is declared structurally incapable of this target class.

2. PREDICTABILITY GATE: MULTI-TIER RULE (REVISED)

2.1 The evidence base

The prior binary rule ("GBM ceiling > 0.05") was based on one failure case: residual WPA, GBM R² = 0.0136. This was a dangerous overgeneralization.

Counterexamples:

Target GBM ceiling SR outcome Interpretation
Residual EPA ≈0.23 Found structure (trivial: down only) High ceiling ≠ non-trivial discovery
Drive score AUC 0.6268 Found linear signal High ceiling + linear signal
WPA² R² 0.2168 Log-cosh SR: 0.0157 High ceiling, SR failed
Residual WPA R² 0.0136 Killed at step one Low ceiling → guaranteed null

Key insight: GBM ceiling is a necessary but not sufficient condition. Low ceiling (< 0.03) guarantees SR failure (no signal). High ceiling does not guarantee SR success—it depends on whether the signal is reachable by the SR function set.

2.2 Revised multi-tier rule

Condition Action
GBM ceiling R² < 0.03 Skip SR entirely — signal too weak
GBM ceiling R² ∈ [0.03, 0.05) Run SR with "low-signal" flag — any discovery needs extra validation
GBM ceiling R² ∈ [0.05, 0.15) Standard SR run — expected discovery range
GBM ceiling R² > 0.15 Run SR + structure diagnostic — high ceiling increases risk that signal is unreachable by SR function set

The structure diagnostic is a pre-SR check: fit an OLS linear model on the target using the same features. If linear R² is within 0.02 of the GBM ceiling, the signal is primarily linear—SR's nonlinear discovery space offers no advantage.

2.3 Gen-0 diagnostic (standardized)

```python
def gen0_diagnostic(X_train, y_train, X_test, y_test, function_set, seed=42):
    """
    Run 1-generation SR, record gen-0 best train/test R².
    Flag: gap > 0.15 → attractor suspect, retry with soft target regularization.
    """
    sr_probe = SymbolicRegressor(
        population_size=2000, generations=1,
        parsimony_coefficient=0.001, function_set=function_set,
        random_state=seed, n_jobs=-1
    )
    sr_probe.fit(X_train, y_train)
    train_r2 = r2_score(y_train, sr_probe.predict(X_train))
    test_r2 = r2_score(y_test, sr_probe.predict(X_test))
    return {'gen0_train_r2': train_r2, 'gen0_test_r2': test_r2,
            'gap': train_r2 - test_r2}
```

3. PLAY-TYPE PREDICTION: DEEP VERIFICATION

3.1 The critical finding

nflfastR already includes an Expected Pass (XPASS) model that predicts the likelihood of a pass play given the current game situation, with pass_oe (Pass Rate Over Expected) as a derived metric. This means:

1. Play-type predictability is not white space. A machine-designed metric already exists.
2. Using it as a discovery target would be circular—SR would be trying to rediscover the xPass model's output from the same features the xPass model already uses.

3.2 The prior literature on play-type prediction

Study Method Accuracy Notes
Baker & Kwartler (2015) Logistic regression 66.4% (CLE) / 66.9% (PIT) First published play-type classifier
RStudio Pubs (2025) Multinomial regression 78.6% (MIN, best team) Team predictability rankings
GitHub (2025) Random Forest / GBM 73% accuracy Run recall = 82%

3.3 What SR could offer (if anything)

The only remaining white-space angle: SR might discover a nonlinear interaction or threshold that the xPass model's XGBoost cannot express. But this is a narrow window—XGBoost is already a universal function approximator.

Revised assessment: Play-type prediction is demoted from #1 to #4. It is not the highest-EV target because the xPass model already captures the signal. The remaining value is in residual analysis—what does xPass miss?—not in rediscovering the signal.

3.4 Revised play-type protocol (residual analysis only)

```python
# Target: residual = pass_indicator - xpass (what the model misses)
# If GBM ceiling > 0.05 on residual, SR might find structure in the residual
# If GBM ceiling < 0.05, the xPass model is near-optimal
```

Pre-registered prediction: GBM ceiling on pass residual will be < 0.03 (xPass is near-optimal). SR will fail to beat the human heuristic. Kill condition: GBM ceiling < 0.03 → skip SR.

4. BAYESIAN SURPRISE: DEMOTED (CONFIRMED)

4.1 The mathematical formulation

Bayesian surprise is the KL divergence between prior and posterior distributions: S = D_KL(P(H|D) || P(H)). This is a well-defined, principled information-theoretic object.

4.2 The practical computation problem

Computing Bayesian surprise from nflverse requires the pre-snap WP distribution, not just the point estimate wp. To get a distribution, you need either:

· Counterfactual WP model runs on perturbed plays (~10× nflverse compute)
· Bootstrap over pre-snap feature noise (model-dependent, noisy)
· A probabilistic WP model (not available from nflfastR's point-estimate wp)

None are cheap. And even if computed, the target inherits the emptiness problem: if post-snap WP is 99% determined by within-play events, surprise is 99% determined by those same events.

Demoted from rank 1 to rank 5. Keep in atlas as theoretical interest, not a Phase 5 target.

5. STANDALONE METHODS NOTE: SOFT TARGET REGULARIZATION

The log-cosh attractor elimination is a clean methods result. New research strengthens the case: Vanneschi & Castelli (2021) demonstrated that soft target regularization—a method borrowed from neural networks—applied to genetic programming can reduce overfitting, and when combined with a functional complexity measure, can completely eliminate overfitting in all studied test cases.

Why this matters: Log-cosh is a partial fix. Soft target regularization is a structural fix. The soft target method replaces hard 0/1 (or extreme-valued) targets with soft labels, preventing the GP from chasing individual extreme points.

Proposed diagnostic (add to tournament harness):

```python
def soft_target_transform(y, beta=0.9):
    """
    Soft target regularization: compress extreme values toward the median.
    Applied BEFORE SR fitting on heavy-tailed targets.
    """
    median = np.median(y)
    return median + beta * (y - median)
```

Title suggestion: "Heavy-Tail Target Overfitting in Genetic Programming: A Gen-0 Diagnostic and Dual Remedy (Log-Cosh + Soft Target Regularization)."

GSE value: This is a genuine methodological contribution that outlives the sports targets. Write it up.

6. REVISED THEORY ATLAS EV RANKING

Rank Framework Old prior New prior Change Reasoning
1 IRL Coaching Utility (refined) 0.30 0.32 ↑ Sandholtz et al. (2024) validated the core; GSE's refinement is recovering the full utility function, not just the risk quantile, and using it for real-time decision prediction.
2 Soft-target SR on WPA² — 0.28 NEW Log-cosh eliminated the attractor but not enough to find time. Soft target regularization (Vanneschi 2021) may preserve conditional structure.
3 Time-stratified SR (Redesign A) — 0.25 NEW Tests the conditional-contribution hypothesis directly.
4 Play-type residual analysis 0.32 0.20 ↓↓ xPass model already exists; only residual analysis remains white space.
5 Bayesian Surprise 0.15 0.12 ↓ Computational barriers; inheritance problem.
6 Hurst Exponent 0.18 0.15 ↓ Kononovicius (2019) showed NBA Hurst exponents > 0.5 are "simply an illusion caused by limited data". Soccer H ≈ 0.7 exists for continuous dynamics but NFL play-level is likely null.
7 Min-bottleneck linear feature 0.12 0.10 — Reclassified as coefficient estimate.
8 Koopman Momentum 0.35 0.08 ↓↓↓ Rejected at p = 0.89. DMD loses to AR(1).
9–15 (others) ≤0.10 ≤0.08 — Tracking data or PDE requirements.

7. TOURNAMENT HARNESS FIXES (mandatory)

1. Affine-calibrate ALL baselines before R² comparison. Raw B2 (−0.2755) vs calibrated (0.0531) is a 0.33 R² gap—meaningless without calibration.
2. GBM ceiling probe before SR. Multi-tier gate (see §2.2). Skip SR if ceiling < 0.03.
3. Gen-0 diagnostic in every SR run. Print gen-0 best train and test R². Flag attractor-suspect runs.
4. Log-cosh + soft target regularization default for heavy-tailed targets. MSE only when target is bounded with light tails.
5. Row-alignment guard. Any baseline requiring column-specific data must align to the same rows as the SR target.
6. Smooth-linear simplification test. For any discovered nonlinear form, fit a smooth linear approximation. If the smooth form wins, the kink is decoration.
7. Baseline existence check. Before running SR, verify that no human/machine baseline already exists for the target (e.g., xPass for play-type prediction).

8. WHAT THIS ROUND TAUGHT US — META

The three falsifications are not failures of the program. They are the program working. This round delivered:

· A diagnostic (gen-0 attractor signature) with a remedy (log-cosh + soft target regularization) that generalizes beyond this project.
· A harness bug fix (affine calibration) that invalidates some prior comparisons and hardens the tournament.
· A multi-tier predictability gate that will save GP budget on every future target.
· A critical target-discovery check: before running SR, verify that no human/machine metric already exists for the target (the xPass finding would have saved an entire run).
· A reclassification (min-bottleneck as coefficient, not discovery) that narrows the discovery bar correctly.

The pattern is now clear: the machine finds coefficient estimates, and occasionally trivial single-feature forms, but has not yet found a form that survives ablation against a well-calibrated human heuristic. The remaining hope is in targets where the human heuristic is weak—IRL utility recovery, time-stratified WPA², and soft-target SR. These are the gates to run next.

9. QUALITY GATE

☑ Time-term hypothesis conceded with method-level reframe and four redesigns ranked.
☑ Multi-tier predictability gate revised with evidence base.
☑ Play-type prediction demoted; xPass model finding documented.
☑ Bayesian surprise demoted with mathematical reasoning.
☑ Standalone methods note strengthened with Vanneschi (2021) soft target regularization.
☑ Tournament harness updated with seven mandatory fixes.
☑ Theory Atlas EV ranking revised with new rank-1 (IRL refined).
☑ No invented results anywhere.
