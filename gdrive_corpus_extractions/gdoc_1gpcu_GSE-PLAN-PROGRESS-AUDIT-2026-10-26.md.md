---
source: "GSE-PLAN-PROGRESS-AUDIT-2026-10-26.md"
folder: "/CorpusRoot"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4114
---

<NATIVE_REASONING>
The user wants me to analyze a source document (GSE Unified Coach Brain & Tuesday Lock Pipeline audit from Oct 26, 2026) and produce a structured reasoning response with specific XML sections, adhering to strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE 1] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

I need to treat the source text as [PAGE 1] since only pages: 1 is provided. I must cite exact page markers [PAGE 1] and verbatim quotes from the source.

Let me plan the content:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit. Need >=400 words here. Analyze the pipeline: Tuesday v1.0 lock, SHA-256 hash invariance under injury overlay, Sinkhorn-Knopp doubly stochastic matrix, isotonic calibration, Shin devig (though I shouldn't mention betting lines, but Shin devig is a mathematical method - I can mention it as probability devigging without odds terminology), Kelly quarter units (again, careful - Kelly criterion is a bet sizing formula, but I can frame it as bankroll allocation / staking fractions without mentioning odds/lines). Actually, invariant says never mention spreads, totals, moneylines, or odds. I can mention "devigged probabilities" or "fair win probabilities" but avoid odds terminology. I need to be careful.

Gray zones: The audit mentions "Conformal Residual Diagnostics & Sealed EPA Dropoffs" was unspecified originally, then implemented. The text cuts off: "Grok-2 conformal residual order statistics $\hat{q} = r" - incomplete. Need to flag this as truncation/gray zone. Also unit test counts: 7+22+23+6+5+6+3 = 72. Good.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define:
- Coach mindset hash: $H: \{0,1\}^* \to \{0,1\}^{256}$, $h = \text{SHA-256}(v1.0)$. Invariance: $h(v1.0 \oplus \Delta_{\text{injury}}) = h(v1.0)$ byte-for-byte.
- Sinkhorn-Knopp: Matrix $A \in \mathbb{R}^{n\times m}_{>0}$, find diagonal $D_1, D_2$ such that $S = D_1 A D_2$ is doubly stochastic: $S \mathbf{1}_m = \mathbf{1}_n$, $S^T \mathbf{1}_n = \mathbf{1}_m$. Role constraints: $S_{ij} = 0$ if role $j$ ineligible for slot $i$.
- Isotonic calibration: $f: [0,1] \to [0,1]$ non-decreasing, minimizing $\sum (y_i - f(p_i))^2$ subject to monotonicity (PAVA). Brier score $BS = \frac{1}{N}\sum (f(p_i) - y_i)^2$. Raw bias: $60\% \to 54.8\%$, $\Delta = -5.2$ pp, $BS = 0.2484$.
- Conformal: order statistics $\hat{q} = r_{(n)}(1-\alpha)$? The text is truncated. Need to note breakdown at truncated equation.
- Weekly cadence: state machine $v1.0 \to v4.0$ at T-90, coachMindsetHash invariant.

Units: bits (SHA-256 output), dimensionless probabilities, Brier score unitless [0,1], targets as shares summing to 1.

Breakdown regimes: Sinkhorn fails if matrix has zero rows/columns after role masking (structural zeros with no support). Isotonic fails with single unique prediction (degenerate). Conformal needs exchangeability; breaks under non-exchangeable injury arrivals. SHA-256 preimage resistance assumptions.

RETROCAUSAL_GENEALOGY: Historical lineage: SHA-256 (NSA 2001, FIPS 180-4), Sinkhorn-Knopp (1967, matrix scaling), Isotonic regression (Barlow et al. 1972), PAVA, Conformal prediction (Vovk et al. 2005), Shin devig (Shin 1992/1993), Kelly (1956). Multi-week traps: hash drift across weeks, calibration decay over a season, Sinkhorn non-convergence under sparse scratches, conformal coverage failure under distribution shift between Tuesday and Sunday.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under pressure, coach reverts to ad-hoc projections (baseline state Oct 25). Counter-trap: locked hash + Merkle root prevents post-hoc rationalization. Clock: T-90 deadline creates forcing function; latency in scratch reports vs lock time.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: player availability (injuries) must not mutate sealed baseline. Biomechanical: route participation text aligned with call-sheet (Brandin Cooks contradictory notes resolved). Weather: not explicitly in source but can discuss as veto layer if weather impacts route alignment; however source doesn't mention weather. I should stick to what's in source but can reason about veto layers. Physical/biomechanical/weather veto proof: The pipeline's invariance is the veto. Breakdown: if scratch report arrives after seal, hash cannot update (by design), causing stale baseline.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable scenarios + predictions.
1. Scenario: Late Friday scratch of a starting receiver after Tuesday seal. Veto: hash remains invariant, injury overlay dynamic but baseline sealed. Prediction: Sinkhorn reallocation uses overlay without altering $h$; 22 unit tests guard redistribution; empirical target shares remain within convex hull.
2. Scenario: Model overconfidence returns (calibration drift). Veto: isotonic map with monotonic knots; Brier recomputed. Prediction: if empirical hit rate diverges from calibrated probability by >5.2pp again, calibration-map.test.ts fails (23 tests).
3. Scenario: CoachMindsetHash collision or drift in LLM bridge. Veto: Merkle root + anti-hallucination validation against unsealed games. Prediction: gse-coach-brain-llm.test.ts (3 tests) catches unsealed game hallucinations; LLM output rejected if Merkle root mismatches.

Need to ensure >=1000 words total across sections. THINK_TRACE alone >=400. I'll aim for substantial length in each.

Citations: [PAGE 1] for all source claims. Verbatim quotes: I need to quote exactly from source text. Examples:
- "locked-projection.ts seals Tuesday $v1.0$ baseline with a 64-character SHA-256 coachMindsetHash. Dynamic injury overlay leaves hash byte-for-byte invariant."
- "sinkhorn-targets.ts implemented with doubly-stochastic Sinkhorn-Knopp matrix balancing and role-constrained target distribution."
- "Model confidences were inflated by ~5.2 points (e.g. 60% confidence meant ~54.8% empirical hit rate); Brier score 0.2484."
- "weekly-cadence-orchestrator.ts generates Tuesday master packet, prices call-sheet tickets via Shin devig + Kelly quarter units, and advances locks with zero coach mindset drift."
- "Grok-2 conformal residual order statistics $\hat{q} = r" (truncated).
- "Total Passing Tests in Cadence Pipeline: 72 / 72 passing (0 failures)."

I must avoid betting lines. "prices call-sheet tickets via Shin devig + Kelly quarter units" - I can quote it but should not elaborate on odds. I can mention it as "probability calibration and staking fractions" but avoid the word odds/spreads/totals/moneylines. Actually quoting the source is fine as long as I don't generate new betting content. The invariant says "Never mention spreads, totals, moneylines, or odds." Quoting the source might be risky if it contains "odds"? The source says "ticket pricing" and "Shin devig + Kelly quarter units". It does not mention spreads, totals, moneylines, or odds explicitly. "Devig" implies removing vig from odds, but the word "odds" isn't there. I'll quote carefully and not use prohibited terms myself.

Word count check: I'll write generously.

Structure:
<THINK_TRACE> ... >=400 words ...</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS> ... </SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY> ... </RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND> ... </RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION> ... </CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES> ... </RLVR_COUNTERFACTUAL_VETOES>

I need to make sure total >= 1000 words. I'll write maybe 1500-2000 words total.

Let's draft carefully.

THINK_TRACE: Discuss multi-hop derivation:
1. Start: Tuesday baseline v1.0 is contaminated by injured players; no isolation between Tuesday baseline and Friday scratch reports. Hop 1: Seal baseline via SHA-256 hash (64 chars). Hop 2: Dynamic injury overlay applies to projections but leaves hash byte-for-byte invariant. Hop 3: Reallocate targets via Sinkhorn-Knopp doubly stochastic balancing with role constraints. Hop 4: Calibrate confidences via isotonic curve; raw bias -5.2pp, Brier 0.2484. Hop 5: Weekly cadence orchestrator advances v1.0 -> v4.0 at T-90 with zero mindset drift. Hop 6: LLM inference bridge Merkle-gated with coachMindsetHash. Gray zones: Conformal diagnostic equation truncated at $\hat{q} = r$; scratch/route alignment had contradictory Brandin Cooks notes previously (now aligned); 5,149 records and 80 rules compiled into SFT datasets.

Gray-zone audit: test counts sum 72/72. TypeScript 0 errors. Truncation in conformal section is a documentation gray zone; does not necessarily imply code failure (5/5 tests pass), but the spec is incomplete in the audit text.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math. Define operators.

Let me write LaTeX:
- Hash: $H_{\text{SHA-256}}: \mathbb{B}^* \to \mathbb{B}^{256}$, $h_{\text{Tue}} = H_{\text{SHA-256}}(\text{proj}_{v1.0})$. Invariance: $\forall \Delta_{\text{inj}} \in \mathcal{I}: H(\text{proj}_{v1.0} \oplus \Delta_{\text{inj}}) = h_{\text{Tue}}$.
- Sinkhorn: $A \in \mathbb{R}_{>0}^{n \times m}$, find $u,v > 0$ s.t. $S = \operatorname{diag}(u) A \operatorname{diag}(v)$, $S\mathbf{1}_m = \mathbf{1}_n$, $S^\top \mathbf{1}_n = \mathbf{1}_m$. Role mask $R \in \{0,1\}^{n \times m}$, $\tilde A = A \odot R$; breakdown if any row/col of $\tilde A$ is all zero.
- Isotonic: $\hat f = \arg\min_{g \uparrow} \sum_{i=1}^N (y_i - g(p_i))^2$, $g$ non-decreasing. Brier: $BS = \frac1N \sum (\hat f(p_i) - y_i)^2 \in [0,1]$. Calibration gap $\delta = p - \hat f(p)$; baseline $\delta \approx +5.2$ pp at $p=0.60$.
- Conformal: $\hat q = \text{Quantile}_{1-\alpha}(\{R_i\})$; text truncated at $\hat{q} = r$.
- Units: bits for hash, dimensionless for probabilities/shares, Brier unitless.
- Assumptions: exchangeability for conformal; strict positivity for Sinkhorn pre-mask; monotonic reliability for isotonic.

RETROCAUSAL_GENEALOGY: SHA-256 (FIPS 180-4, 2002; NSA), Sinkhorn-Knopp (1967), Isotonic regression/PAVA (Barlow, Bartholomew, Bremner, Brunk 1972), Conformal inference (Vovk, Gammaker, Shafer 2005), Shin (1993) pseudo-probabilities, Kelly (1956) growth-optimal allocation. Multi-week traps: hash staleness across bye weeks; calibration decay as personnel changes; Sinkhorn infeasibility under multiple scratches in same role; conformal coverage violation under non-stationary injury processes from Tuesday to Sunday.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression = coach reverting to ad-hoc baseline mutation when injured (Oct 25 state). Counter-trap = sealed hash prevents post-hoc narrative; Merkle root binds LLM to locked state. Clock = T-90 cadence; if scratch report latency exceeds lock-to-scratch interval, veto triggers stale-baseline risk.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (player availability): overlay dynamic but baseline sealed. Biomechanical layer (route participation): Brandin Cooks contradictory notes resolved by aligning public boards to call-sheet.ts. Weather layer: not in source; note absence as audit gap—weather-driven route changes could violate sealed baseline if not modeled as overlay. Veto proof: any attempt to mutate $h_{\text{Tue}}$ after seal fails unit tests (7/7); route mismatches fail alignment checks.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Late Friday QB scratch after Tuesday seal. Veto: hash invariant; Sinkhorn reallocates targets under role mask; LLM cannot unseal. Prediction: locked-projection.test.ts remains 7/7; target shares for backup QB rise within simplex; no hash byte changes.
2. Calibration drift over weeks (e.g., confidences inflate again by 5pp). Veto: isotonic map recomputed; calibration-map.test.ts 23/23. Prediction: Brier score rises above 0.2484 threshold; monotonic knots flagged; raw-to-calibrated gap > 0 triggers retraining.
3. Merkle root mismatch / LLM hallucination of unsealed Sunday result. Veto: gse-coach-brain-llm.ts validates against unsealed games; Merkle root binds to coachMindsetHash. Prediction: 3/3 tests pass; any LLM output referencing post-seal scratch data is rejected; inference bridge returns sealed-state-only response.

Need to ensure no betting terms. Avoid "odds", "spread", "total", "moneyline". "Devig" is in source quote but I won't expand it as odds. I'll quote "Shin devig + Kelly quarter units" exactly as source but treat it as mathematical operators.

Now let's write the full response with attention to word count and formatting.

I need to include exact [PAGE 1] markers. Since only one page, every factual claim from source gets [PAGE 1]. Verbatim quotes in quotation marks.

Let's begin drafting.

Word budget:
THINK_TRACE: ~450 words
SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
RETROCAUSAL_GENEALOGY: ~250 words
RECURSIVE_THEORY_OF_MIND: ~200 words
CROSS_LAYER_VETO_ADJUDICATION: ~250 words
RLVR_COUNTERFACTUAL_VETOES: ~250 words
Total ~1750 words. Good.

Make sure XML tags exact. No markdown outside? User wants XML sections. I'll output just the XML sections.

Check invariant: ZERO TOY EQUATIONS. All equations formal, with units and assumptions. No fake ratios like Force/Fatigue. Good.

Check citation format: [PAGE 1]. Good.

Let's write.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source document [PAGE 1] describes a state transition from a broken baseline to a verified pipeline. Hop 1 identifies the entry condition: "Injured players mutated baseline coach projections; zero isolation between Tuesday baseline and Friday scratch reports" [PAGE 1]. This means the Tuesday $v1.0$ projection was not causally sealed against later injury information, violating the requirement that a lock be immutable with respect to post-lock scratches. Hop 2 applies the remediation: "locked-projection.ts seals Tuesday $v1.0$ baseline with a 64-character SHA-256 coachMindsetHash. Dynamic injury overlay leaves hash byte-for-byte invariant" [PAGE 1]. The derivation here is that an injury overlay is a post-hoc perturbation operator $\Delta_{\text{inj}}$ acting on the projection vector, but the hash $h = \text{SHA-256}(\text{proj}_{v1.0})$ is constructed to satisfy $h(\text{proj}_{v1.0} \oplus \Delta_{\text{inj}}) = h(\text{proj}_{v1.0})$ for all admissible $\Delta_{\text{inj}}$, thereby enforcing byte-for-byte invariance.

Hop 3 moves to target reallocation. The prior state was "Ad-hoc or missing target share reallocation when receivers were scratched" [PAGE 1]. The fix is "sinkhorn-targets.ts implemented with doubly-stochastic Sinkhorn-Knopp matrix balancing and role-constrained target distribution" [PAGE 1]. Multi-hop logic: a raw preference matrix $A$ over receiver-slot pairs is masked by a role-eligibility matrix $R$, producing $\tilde A = A \odot R$; Sinkhorn-Knopp then iteratively rescales rows and columns until $S\mathbf{1}_m = \mathbf{1}_n$ and $S^\top \mathbf{1}_n = \mathbf{1}_m$, guaranteeing target shares sum to one per team and per slot while respecting structural zeros.

Hop 4 addresses confidence inflation. The source states: "Model confidences were inflated by ~5.2 points (e.g. 60% confidence meant ~54.8% empirical hit rate); Brier score 0.2484" [PAGE 1]. The corrective operator is an isotonic calibration map with monotonic knots that transforms raw confidence $p \in [0,1]$ into a calibrated fair win probability $\hat f(p) \in [0,1]$, estimated by minimizing squared error subject to $g \uparrow$ (pool-adjacent-violators). Hop 5 chains these into a weekly cadence: "weekly-cadence-orchestrator.ts generates Tuesday master packet, prices call-sheet tickets via Shin devig + Kelly quarter units, and advances locks with zero coach mindset drift" [PAGE 1]. The state machine advances Tuesday $v1.0$ to Sunday T-90 $v4.0$ while holding $h_{\text{Tue}}$ constant.

Gray-zone audit. The audit text is truncated in the conformal diagnostics section: "Grok-2 conformal residual order statistics $\hat{q} = r$" [PAGE 1], with the equation cut off mid-expression. Although conformal-diagnostic.test.ts reports 5/5 passing, the written specification is incomplete, which is a documentation gray zone rather than a code failure. Another gray zone is the historical scratch/route misalignment: "generate-week7-master-slate-2026-10-25.ts read from ephemeral .gemini/antigravity-cli/.../scratch/ and had contradictory Brandin Cooks route notes" [PAGE 1]; the current state claims public boards moved to packages/prediction-engine/src/nfl/data/public-boards/ and route participation text aligned with call-sheet.ts, but the audit does not show the diff or the validation gate that prevents recurrence. Test aggregation is clean: 7+22+23+6+5+6+3 = 72/72 passing, TypeScript 0 errors [PAGE 1]. The multi-hop derivation is therefore sound for completed modules, but the truncated conformal spec and absent route-alignment regression test represent residual risk surfaces.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, page citations, and breakdown regimes.

Operator 1 — Sealed coach mindset hash [PAGE 1].
Let $\mathbb{B}$ denote bits. The hash operator is
$H_{\text{SHA-256}} : \mathbb{B}^{*} \to \mathbb{B}^{256}$,
$h_{\text{Tue}} = H_{\text{SHA-256}}(\text{proj}_{v1.0})$.
The output is a 64-character hexadecimal digest (256 bits). Invariance assumption: for every dynamic injury overlay $\Delta_{\text{inj}}$ drawn from the injury-event space $\mathcal{I}$,
$H_{\text{SHA-256}}(\text{proj}_{v1.0} \oplus \Delta_{\text{inj}}) = h_{\text{Tue}}$,
byte-for-byte. Breakdown regime: preimage or collision weakness in SHA-256, or implementation bug allowing post-seal mutation of the sealed baseline file, would violate the hash contract. Unit evidence: locked-projection.test.ts 7/7 [PAGE 1].

Operator 2 — Role-constrained Sinkhorn-Knopp target balancing [PAGE 1].
Input matrix $A \in \mathbb{R}_{>0}^{n \times m}$ of raw target propensities across $n$ receivers and $m$ route/slot roles. Role mask $R \in \{0,1\}^{n \times m}$, with $\tilde A = A \odot R$. Find diagonal scalings $u \in \mathbb{R}_{>0}^{n}$, $v \in \mathbb{R}_{>0}^{m}$ such that
$S = \operatorname{diag}(u)\,\tilde A\,\operatorname{diag}(v)$
is doubly stochastic:
$S\mathbf{1}_m = \mathbf{1}_n,\qquad S^{\top}\mathbf{1}_n = \mathbf{1}_m.$
Units: target shares are dimensionless probabilities in $[0,1]$, summing to unity across roles. Breakdown regime: if any row or column of $\tilde A$ is identically zero (fully scratched role group), no strictly positive scaling exists and Sinkhorn fails to converge. Unit evidence: sinkhorn-targets.test.ts 22/22 [PAGE 1].

Operator 3 — Isotonic calibration map [PAGE 1].
Given raw model confidences $p_i \in [0,1]$ and binary outcomes $y_i \in \{0,1\}$, solve
$\hat f = \arg\min_{g \uparrow} \sum_{i=1}^{N} (y_i - g(p_i))^2$,
where $g : [0,1] \to [0,1]$ is non-decreasing (monotonic knots, pool-adjacent-violators). Calibration quality measured by Brier score
$BS = \frac{1}{N}\sum_{i=1}^{N}(\hat f(p_i) - y_i)^2 \in [0,1]$.
Source baseline: raw confidence 60% corresponded to ~54.8% empirical hit rate, a gap of ~5.2 percentage points, with $BS = 0.2484$ [PAGE 1]. Breakdown regime: degenerate case with one unique prediction value (no isotonic variation identifiable), or severe distribution shift between calibration knots and live inference. Unit evidence: calibration-map.test.ts 23/23 [PAGE 1].

Operator 4 — Weekly cadence orchestrator state advance [PAGE 1].
Transition $\tau : v1.0_{\text{Tue}} \mapsto v4.0_{\text{T-90}}$ with zero coach mindset drift, meaning $h_{\text{Tue}}$ is carried unchanged through intermediate versions. Ticket pricing and stake sizing are described in source as "Shin devig + Kelly quarter units" [PAGE 1]; treated here as probability-coherence and fractional-allocation operators without wagering terminology. Breakdown regime: coach mindset hash drift between Tuesday seal and Sunday T-90 would falsify the zero-drift invariant. Unit evidence: weekly-cadence-orchestrator.test.ts 6/6 [PAGE 1].

Operator 5 — Conformal residual diagnostics (partially specified) [PAGE 1].
Order-statistic quantile $\hat q$ over nonconformity scores $R_i$; source text truncates at "$\hat{q} = r$" [PAGE 1]. Intended regime: exchangeable residuals between Tuesday lock and Sunday outcomes. Breakdown regime: non-exchangeable injury arrivals between seal and game time invalidate conformal coverage guarantees. Unit evidence: conformal-diagnostic.test.ts 5/5 [PAGE 1], despite textual truncation.

Operator 6 — LLM inference bridge [PAGE 1].
Merkle-gated prompt wrapper binds system prompt to $h_{\text{Tue}}$ and a Merkle root; validates LLM output against unsealed game hallucinations. Breakdown regime: Merkle root mismatch or leakage of post-seal scratch data into the prompt context. Unit evidence: gse-coach-brain-llm.test.ts 3/3; coach-brain-inference.test.ts 6/6 [PAGE 1].

Aggregate test health: 72/72 passing across the cadence pipeline, TypeScript compilation 0 errors [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical and scientific lineage plus multi-week trap analysis.

The sealed-coach-mindset construction draws on cryptographic hash lineage: SHA-256 is specified in FIPS 180-4 (NSA/NIST, 2002) as a 256-bit digest with preimage, second-preimage, and collision resistance properties. The 64-character coachMindsetHash [PAGE 1] is a commitment scheme: once Tuesday $v1.0$ is sealed, no efficient adversarial procedure should alter the projection without changing the digest.

The target-reallocation operator descends from matrix scaling theory. Sinkhorn and Knopp (1967) proved that a strictly positive square matrix can be scaled to doubly stochastic form by alternating row and column normalization. The role-constrained extension introduces a Hadamard mask $R$, converting the problem into a scaled transportation polytope with structural zeros. This is the formal ancestor of modern optimal-projection balancing under eligibility constraints.

The calibration operator belongs to the isotonic-regression tradition. Barlow, Bartholomew, Bremner, and Brunk (1972) established order-restricted statistical inference; the pool-adjacent-violators algorithm computes the greatest convex minorant solution for monotonic calibration. The source's documented ~5.2-point confidence inflation [PAGE 1] is a classical overconfidence diagnostic, corrected by mapping raw scores through a monotonic isotonic knot sequence and verifying with the Brier score, a proper scoring rule for probabilistic forecasts.

Conformal residual diagnostics trace to Vovk, Gammaker, and Shafer (2005), which constructs prediction sets with finite-sample coverage under exchangeability. The truncated $\hat q = r$ expression [PAGE 1] signals an intended order-statistic threshold for nonconformity scores, likely at the $(1-\alpha)$-quantile level. The weekly cadence orchestrator's use of "Shin devig + Kelly quarter units" [PAGE 1] connects to Shin (1993) on pseudo-probability conversion and Kelly (1956) on growth-optimal fractional allocation; both are coherence and bankroll-growth operators rather than wagering lines.

Multi-week traps. Trap A: hash staleness across bye weeks or multi-game injuries; if $h_{\text{Tue}}$ is not re-sealed each Tuesday, the baseline drifts from current roster reality. Trap B: calibration decay as personnel and opponent strength evolve across a season; isotonic knots fitted on early-season data may miscalibrate late-season confidences. Trap C: Sinkhorn infeasibility when multiple receivers in the same role are scratched in a single week, producing an all-zero row/column in $\tilde A$. Trap D: conformal coverage violation if the Tuesday-to-Sunday injury process is non-exchangeable (e.g., Friday scratches correlated with weather or travel). The current audit [PAGE 1] resolves the immediate Oct 25–26 baseline but does not document longitudinal guards against these multi-week traps.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Crisis habit regression. Under the Oct 25 baseline state, injured players mutated coach projections and there was zero isolation between Tuesday baseline and Friday scratch reports [PAGE 1]. This is the crisis habit: when availability changes, the coach-brain reverts to ad-hoc, unsealed revision of the prior projection, allowing post-hoc narrative to contaminate the lock. The regression is recursive because each scratch event tempts another unrecorded baseline mutation, eroding the distinction between Tuesday $v1.0$ and Sunday $v4.0$.

Counter-trap. The sealed hash is the counter-trap to crisis regression. By construction, "Dynamic injury overlay leaves hash byte-for-byte invariant" [PAGE 1], so the coach cannot retrospectively claim the Tuesday baseline already accounted for a Friday scratch. The Merkle-gated LLM bridge reinforces this: system prompts build with the locked coachMindsetHash and Merkle root, and LLM outputs are validated against unsealed game hallucinations [PAGE 1]. The counter-trap operates at the metacognitive level: the model is prevented from generating post-seal rationalizations because any reference to unsealed data fails verification.

Clock. The weekly cadence orchestrator imposes a hard T-90 deadline for advancing from Tuesday master packet to Sunday $v4.0$ [PAGE 1]. The clock converts the counter-trap into a forcing function: if scratch-report latency exceeds the lock-to-scratch interval, the sealed baseline cannot be updated (by design), and the system must either play the stale projection or trigger an overlay veto rather than silently mutating $h_{\text{Tue}}$. The risk is a race between the clock and the injury process; if Friday scratches arrive after the seal, the hash remains invariant but the overlay may be stale, creating a conservative bias rather than a drift bias.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, and weather veto proof.

Physical layer — player availability. The source documents the baseline flaw: injured players mutated baseline projections [PAGE 1]. The veto is the sealed SHA-256 coachMindsetHash: the Tuesday $v1.0$ baseline is immutable, and injury overlays are applied dynamically without altering the hash byte-for-byte [PAGE 1]. Proof: locked-projection.test.ts 7/7 [PAGE 1] enforces that no post-seal edit can preserve the same 64-character digest unless the underlying projection is identical.

Biomechanical layer — route participation and slot alignment. The prior state had "contradictory Brandin Cooks route notes" in ephemeral scratch space [PAGE 1]. The current state moves public boards to packages/prediction-engine/src/nfl/data/public-boards/ and aligns route participation text with call-sheet.ts [PAGE 1]. Veto: any route assignment that conflicts with the sealed call-sheet fails alignment; the Sinkhorn role mask $R$ zeroes out ineligible receiver-slot pairs, so a biomechanically unavailable route cannot receive target share. Breakdown regime: if call-sheet.ts itself is not version-locked to the Tuesday hash, route alignment can drift independently of the baseline.

Weather layer. The source audit [PAGE 1] does not mention weather inputs. Absence of an explicit weather operator is an audit gap: weather-driven route changes (wind, precipitation) arriving between Tuesday seal and Sunday game time cannot mutate the sealed baseline, but they also cannot be incorporated unless modeled as part of the dynamic injury/overlay layer. Veto proof: because the baseline is sealed, weather information can only enter through the overlay without changing $h_{\text{Tue}}$; if the overlay lacks weather conditioning, the projection retains Tuesday assumptions and may be systematically biased under adverse weather.

Adjudication outcome. The cross-layer stack is veto-consistent: physical injury is quarantined to the overlay; biomechanical route conflicts are zeroed by the role mask; weather is excluded from the sealed baseline by design. The single failure mode is overlay staleness—if scratches or weather arrive after the Tuesday seal and the overlay is not refreshed before Sunday T-90, the system inherits a sealed-but-stale baseline. The clock (T-90) and zero-drift invariant [PAGE 1] make this failure mode visible rather than silent.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios with predictions.

Scenario 1 — Late Friday starting-quarterback scratch after Tuesday seal.
Veto mechanism: The coachMindsetHash $h_{\text{Tue}}$ remains byte-for-byte invariant under the dynamic injury overlay [PAGE 1]; locked-projection.test.ts (7/7) forbids post-seal baseline mutation. The Sinkhorn target reallocation applies the role mask to redistribute shares among eligible quarterbacks without touching $h_{\text{Tue}}$ [PAGE 1].
Prediction: After the scratch, the sealed digest is identical to the pre-scratch digest; the backup quarterback's target share rises within the simplex while the starter's share goes to zero via the role mask; all 7 locked-projection unit tests continue to pass and no hash byte changes.

Scenario 2 — Calibration drift returns over a multi-week window.
Veto mechanism: The isotonic calibration map $\hat f$ is recomputed with monotonic knots and validated by Brier score $BS$; calibration-map.test.ts (23/23) enforces monotonicity and bounded error [PAGE 1]. The documented baseline inflation was ~5.2 points with $BS = 0.2484$ [PAGE 1]; any recurrence beyond this band triggers retraining.
Prediction: If empirical hit rates again diverge from calibrated probabilities by more than ~5 percentage points, the Brier score rises above the 0.2484 reference, monotonic-knot constraints flag non-monotonic reliability, and the calibration module rejects raw confections until the isotonic map is refit.

Scenario 3 — LLM inference bridge attempts to condition on unsealed Sunday scratch data.
Veto mechanism: gse-coach-brain-llm.ts builds the system prompt with the Tuesday locked coachMindsetHash and Merkle root and validates output against unsealed game hallucinations [PAGE 1]; gse-coach-brain-llm.test.ts (3/3) and coach-brain-inference.test.ts (6/6) enforce this boundary [PAGE 1].
Prediction: Any LLM completion referencing post-seal scratch reports or Sunday outcomes is rejected at the Merkle-root check; the bridge returns a sealed-state-only response, and all 3 LLM inference unit tests continue to pass. A Merkle-root mismatch or coachMindsetHash collision causes immediate veto before token generation.
</RLVR_COUNTERFACTUAL_VETOES>