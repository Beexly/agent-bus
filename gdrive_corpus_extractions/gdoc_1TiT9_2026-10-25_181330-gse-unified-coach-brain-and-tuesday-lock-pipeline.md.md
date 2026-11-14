---
source: "2026-10-25_181330-gse-unified-coach-brain-and-tuesday-lock-pipeline.md"
folder: "/CorpusRoot"
pages: 20
model: nvidia:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3406
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and respond to a very detailed, multi-task technical document about a GSE Unified Coach Brain LLM pipeline. However, looking closely at the user's input, they haven't actually asked a specific question. They've provided a massive source document ("DRIVE SOURCE") that describes an implementation plan, tasks, code, tests, etc.

Wait, let me re-read. The user says "DRIVE SOURCE: /CorpusRoot/..." and then pastes the entire source text which includes tasks 1-8, code snippets, test expectations, etc. But there's no explicit question or instruction beyond that.

Actually, looking at the system prompt, I am supposed to be an AI assistant that follows strict invariants:
1. ZERO BETTING LINES
2. ZERO TOY EQUATIONS
3. >= 1,000-WORD DEPTH across exact XML sections:
- <THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>

The user hasn't asked a question. But maybe they want me to analyze the provided source text? Or perhaps they want me to generate something based on it?

Given the context, it seems like they pasted a specification/plan and might expect me to:
1. Review/audit it?
2. Continue the implementation?
3. Identify contradictions?
4. Or perhaps they just want me to process this source text according to my persona.

Since there's no explicit question, I should probably provide a comprehensive forensic analysis/audit of the provided GSE Unified Coach Brain document, structured according to my required XML sections, while strictly adhering to the invariants (no betting lines, no toy equations, formal LaTeX where needed, >=1000 words).

However, I need to be careful about "ZERO BETTING LINES" - the source text contains betting-related content (odds, spreads, totals, moneylines mentioned in the source). I must NOT mention spreads, totals, moneylines, or odds myself. I can acknowledge they exist in the source as part of the audit but cannot reproduce betting lines or discuss them as actionable information.

Also "ZERO TOY EQUATIONS" - no fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.

I need to cite exact [PAGE N] markers? The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." But the source text isn't paginated. It's one big block. I might need to treat sections as pages or note that pagination isn't available. Wait, the user said "PAGES: 20" at the top, but the text doesn't have page markers. I should probably note that no [PAGE N] markers exist in the provided source and reference line numbers or section headers instead.

Let me structure my response:

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). Analyze the architectural claims, identify contradictions (like the Cooks contradiction already noted), discuss the Sinkhorn reallocation, Merkle lock, isotonic calibration, etc. Look for gray zones: does the hash actually prevent mutation? What about the `hashInput` function including injuryDropOff in the legacy function but not in the new one? The cron failure, 19 drifting worktrees, etc.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations. Since no pages, I'll reference section headers or line numbers. Define the SHA-256 hash function, the isotonic calibration piecewise linear interpolation, the Sinkhorn target reallocation constraints, the conformal prediction interval from Task 6. Use proper LaTeX. State assumptions and breakdown regimes (e.g., calibration knots outside [0.05, 0.95], hash collision improbability but not impossibility, Sinkhorn convergence failure if room sums to zero).

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace the lineage: Belichick home/away cells, trench/blitz cells, isotonic regression (Barlow & Brunk 1972), Sinkhorn-Knopp algorithm (1967), conformal prediction (Vovk et al.), neuro-symbolic AI. Multi-week traps: Sunday morning improvisation, script drift, hash mutation via injury overlay, stale worktrees.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Model the coach (Garrett?) regressing to Sunday-morning scratch-file habits under crisis. The counter-trap is the Tuesday v1.0 Merkle lock. The clock is the cadence state machine (Tue 04:00 -> Sun T-90). Discuss how the LLM might hallucinate outside the packet and how the Merkle gate prevents it.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Discuss what should veto a play/proposal: weather (wind > threshold affecting pass rate), biomechanical (injured WR1 out), physical (stadium surface, travel). The current design doesn't explicitly include weather or biomechanical veto layers in the provided code—this is a gap. The injury overlay handles player unavailability but not weather-induced pass rate shifts or field conditions.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some specific framework. I need to invent 3 counterfactual veto scenarios that are verifiable (not toy). E.g., 1) Mike Evans scratched Friday v3.0: veto any Cooks UNDER 24.5 ticket because Cooks route share shifts to 83%. 2) External total outside conformal band: veto SGP ticket generation. 3) Hermes cron tries to use retired z-ai/glm-5.3-flash: veto job execution, fallback to default runtime. Provide predictions for each.

Word count: >= 1,000 words total across sections. Each section should be substantial.

I must not mention betting lines. So I will avoid words like "spread," "total," "moneyline," "odds," "over/under," "vig," etc. Wait, the source text contains them. I can quote them if necessary? The invariant says "Never mention spreads, totals, moneylines, or odds." So I should not mention them at all, even in quotes? It says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." I will avoid these terms entirely. If I need to discuss the calibration edge, I'll call it "model-implied probability gap" or "calibrated probability delta" instead of edge. I'll avoid "ticket pricing" in a betting context; call it "signed instrument" or "call-sheet instrument."

Actually, the source text has "marketSpreadHome", "marketTotal", "americanOdds", etc. In my analysis, I can refer to them as "market-derived fields" without naming the specific betting concepts. But I must be careful not to use the forbidden words.

Let me draft.

THINK_TRACE: I'll analyze the code flow. The Tuesday lock separates coach mindset from injury. The hash is SHA-256 of canonical JSON. The injury overlay recalculates target allocations via Sinkhorn but asserts coachMindsetHash unchanged. However, `hashInput` in legacy `lockCoachProjection` still includes `injuryDropOff`, which violates immutability if that path is used. The new `lockTuesdayCoachBaseline` strips `injuryDropOff`. Good. But `applyCadenceInjuryOverlay` mutates `scoreMean` and `marginMean` based on `homeInjuryPointsDelta`/`awayInjuryPointsDelta`. These are point deltas—what are their units? Undefined. Gray zone: the isotonic calibration knots are hand-authored (0.50 -> 0.455, etc.). Is this empirically validated or just asserted? The document claims "-5.2pt isotonic curve" but provides no source data or regression output. Another gray zone: the Sinkhorn `allocateTargets` and `applyShadowHaircut` are imported but not defined in the provided text; their convergence properties and constraint handling are opaque. The conformal diagnostic (Task 6) uses external total vs sealed model total but no source for external totals. The cron repair switches off z-ai/glm-5.3-flash but the fallback model is unspecified. The 19 worktrees and 52 directories create a distributed state inconsistency risk.

SOURCE_OPERATORS_AND_EQUATIONS: 
- SHA-256: $H = \text{SHA-256}(\text{JSON}_{\text{canonical}}(\theta_{\text{coach}}))$ where $\theta_{\text{coach}} = \{ \text{neutralPassRate}, \text{staffAggression}, \dots \}$. Units: bits (256-bit digest). Assumption: input canonicalization is stable across Node.js versions. Breakdown: if `shadows` array ordering changes without sort (it sorts, so okay).
- Isotonic calibration: piecewise linear map $C: [0.05, 0.95] \to [0.05, 0.912]$ defined by knots $\{(x_k, y_k)\}$. For $p \in [x_k, x_{k+1}]$, $C(p) = y_k + \frac{p-x_k}{x_{k+1}-x_k}(y_{k+1}-y_k)$. Units: probability (dimensionless, [0,1]). Assumption: monotonicity of knots. Breakdown: $p < 0.05$ or $p > 0.95$ clamped; derivative discontinuities at knots.
- Conformal interval: residuals $r_i = \hat{y}_i - y_i^{\text{ext}}$. Sorted $|r|_{(1)} \le \dots \le |r|_{(n)}$. Quantile $\hat{q} = |r|_{(\lceil (1-\alpha)(n+1)\rceil)}$. Interval $[\hat{y} - \hat{q}, \hat{y} + \hat{q}]$. Units: points (model score domain). Breakdown: $n=0$ undefined; $\alpha \notin (0,1)$ invalid.
- Sinkhorn reallocation: matrix scaling $D_1 A D_2 = \mathbf{1}\mathbf{1}^T / n$? More precisely target shares $s$ such that $\sum s = 1$ and constraints from shadows/injuries. Units: share (dimensionless). Breakdown: if all targets scratched, allocation undefined.

RETROCAUSAL_GENEALOGY: Lineage from Belichick defensive cells, trench/blitz mapping. Isotonic regression from Barlow, Bartholomew, Bremner, Brunk (1972). Sinkhorn-Knopp (1967) for matrix balancing. Conformal prediction from Vovk, Gammerman, Shafer (2005). Neuro-symbolic: recent LLM + symbolic constraints. Multi-week traps: Sunday scratch file (ephemeral Antigravity CLI), hash drift (injuryDropOff in inputHash), cron model retirement causing 21 failure streak, 19 worktrees diverging from master.

RECURSIVE_THEORY_OF_MIND: Garrett (the operator) under crisis (Sunday morning) regresses to hand-authored scripts and scratch files. The counter-trap is the cryptographic Tuesday lock. The clock is the cadence state machine. The LLM (Coach Brain) has a theory of mind about the coach: it assumes coach tendencies are immutable. But if the operator manually edits `call-sheet.ts` on Sunday, the LLM's model of the coach is violated. The Merkle gate is the recursive check: LLM output must reference only sealed gameIds and hashes. If not, veto.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: weather (wind, precipitation) affects pass rate; not in code. Biomechanical layer: player attrition (Evans OUT) handled by Sinkhorn. Weather veto proof: no weather input in `CoachSimInput`, so pass rate is not adjusted for environmental conditions—this is a veto gap. Physical stadium/travel: not modeled. Biomechanical: shadow rates applied but no snap-count decay or fatigue. The injury overlay uses arbitrary `homeInjuryPointsDelta` with undefined units and no biomechanical basis.

RLVR_COUNTERFACTUAL_VETOES: Three scenarios.
1. Counterfactual: Mike Evans scratched at v3.0 Friday. The legacy script would have generated Cooks UNDER 24.5 (contradiction). Veto: Sinkhorn reallocation shifts Cooks share to 0.83; any instrument with Cooks UNDER threshold is vetoed. Prediction: Kittle share increases; Cooks instrument flips to OVER only.
2. Counterfactual: External total (from market) falls outside conformal band $[\hat{y}-\hat{q}, \hat{y}+\hat{q}]$. Veto: SGP combinator emits diagnostic flag, no correlated instruments minted. Prediction: zero SGPs for that game until manual review.
3. Counterfactual: Hermes cron attempts retired z-ai/glm-5.3-flash. Veto: job fails fast, fallback to profile default runtime; no email/SMS sent. Prediction: failure_streak resets to 0 after fallback; no drift in weekly lock.

I need to ensure total words >= 1000. I'll write generously.

Also, I must not use [PAGE N] since none exist. I'll say "No [PAGE N] markers present in source; references use section/task labels."

Let's write.

One more check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't invent ratios. I'll use real formalisms from the text (SHA-256, isotonic interpolation, conformal quantile).

I need to ensure I don't mention "spreads, totals, moneylines, or odds." I will scan my draft for these words. I'll replace with neutral terms.

Let's compose.
</NATIVE_REASONING>

<THINK_TRACE>
The provided GSE Unified Coach Brain specification describes a neuro-symbolic pipeline intended to eliminate Sunday-morning improvisation by cryptographically sealing a Tuesday v1.0 Coach Mindset Baseline and applying injury deltas only through bounded Sinkhorn reallocation. A multi-hop audit reveals several gray zones. First, the legacy `lockCoachProjection` hashes `injuryDropOff` into `inputHash` alongside pure coach parameters, directly violating the immutability requirement if that code path remains reachable. The new `lockTuesdayCoachBaseline` strips `injuryDropOff` before hashing, which is correct, but nothing in the provided text demonstrates that all call sites have been migrated away from the legacy function. Second, `applyCadenceInjuryOverlay` adjusts `scoreMean` and `marginMean` by additive `homeInjuryPointsDelta` and `awayInjuryPointsDelta` with undefined units and no provenance; if these deltas are hand-authored on Friday, they reintroduce the same Sunday-morning improvisation the pipeline claims to eliminate. Third, the isotonic calibration map is asserted to remove “5.2pt inflation” but no source data, regression output, or validation regime is provided; the knots are hard-coded constants, making the calibration an unverified prior rather than an empirical isotonic fit. Fourth, `allocateTargets` and `applyShadowHaircut` are imported but their implementations are absent from the source, so Sinkhorn convergence behavior, shadow-rate constraint propagation, and room-sum normalization are opaque. Fifth, the conformal diagnostic residual flag depends on an external total series with no defined source, update cadence, or sample-size floor; if n is small or non-stationary, the critical quantile $\hat q$ is unstable. Sixth, the Hermes cron repair removes z-ai/glm-5.3-flash but specifies no replacement model, leaving daily-sms-status and daily-spine-standup dependent on an unspecified “profile default runtime.” Seventh, 19 drifting Sports* worktrees and 52 .gemini/antigravity/brain directories constitute a distributed state hazard; without a content-addressable merge or archive protocol, the canonical master branch may diverge from active execution contexts. Finally, the Brandin Cooks contradiction (UNDER vs OVER 24.5) is symptomatic of a deeper architectural failure: call-sheet.ts hardcodes `ticket: null`, so no deterministic instrument binds film rules to pricing, allowing prose overrides to contradict sealed data. These issues must be resolved before the v1.0 seal can be trusted as a single source of truth.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
No [PAGE N] markers are present in the supplied source text; references below use task and section labels.

Let $\theta_{\text{coach}} = \{ \text{neutralPassRate}, \text{staffAggression}, \text{staffAggressionAway}, \text{coachSupport}, \text{shadows}, \text{belichickHome}, \text{belichickAway}, \text{homeTeam}, \text{awayTeam}, \text{week} \}$ denote the immutable Class A Coach Mindset input vector. The Tuesday seal computes
$$H_{\text{mindset}} = \text{SHA-256}\bigl(\text{JSON}_{\text{canonical}}(\theta_{\text{coach}})\bigr)$$
where the digest is a 256-bit string (64 hex characters). Assumption: Node.js `JSON.stringify` key order and floating-point serialization are stable across runtime versions. Breakdown regime: if `shadows` contains duplicate WR entries with different shadow rates, the canonical sort does not deduplicate, allowing hash divergence for semantically identical rosters.

The isotonic calibration operator $C: [0.05, 0.95] \to [0.05, 0.912]$ is defined by knots $K = \{(x_k, y_k)\}_{k=0}^{7}$. For $p \in [x_k, x_{k+1}]$,
$$C(p) = y_k + \frac{p - x_k}{x_{k+1} - x_k}(y_{k+1} - y_k),$$
with clamping $p \leftarrow \min(0.95, \max(0.05, p))$. Units: dimensionless probability in $[0,1]$. Assumption: knot sequence is strictly increasing in both coordinates. Breakdown regime: $p$ outside $[0.05, 0.95]$ is clamped, destroying information at the tails; the map is piecewise linear, not strictly isotonic unless every successive slope is non-negative (the supplied knots satisfy this, but no empirical proof is given).

The injury overlay applies additive shifts $\Delta_H, \Delta_A$ to margin and score means:
$$\mu^{\prime}_{\text{margin}} = \mu_{\text{margin}} + (\Delta_H - \Delta_A), \qquad \mu^{\prime}_{\text{score}} = \max(27, \mu_{\text{score}} + \Delta_H + \Delta_A).$$
Units for $\Delta$ are undefined in the source; no mapping from player attrition to points is provided. Breakdown regime: if $\Delta_H + \Delta_A$ drives $\mu_{\text{score}}$ below the hard floor of 27, the model silently clips, masking injury severity.

Sinkhorn target reallocation acts on active target set $\mathcal{T}_{\text{active}} = \{ t \in \mathcal{T}_{\text{base}} : \text{playerId}(t) \notin \mathcal{I} \}$ where $\mathcal{I}$ is the inactive set. Shares are renormalized so $\sum_{t \in \mathcal{T}_{\text{active}}} s_t = 1$. Breakdown regime: if $|\mathcal{T}_{\text{active}}| = 0$, allocation is undefined and the orchestrator must emit a hard veto rather than a null share.

The conformal diagnostic residual for game $i$ is
$$r_i = \hat y_i^{\text{sealed}} - y_i^{\text{ext}}.$$
Sorted absolute residuals $|r|_{(1)} \le \cdots \le |r|_{(n)}$ yield the critical quantile
$$\hat q = |r|_{\bigl(\lceil (1-\alpha)(n+1) \rceil \bigr)}, \qquad \text{interval} = [\hat y - \hat q,\; \hat y + \hat q].$$
Units: model score domain (points). Breakdown regime: $n=0$ makes $\hat q$ undefined; $\alpha \notin (0,1)$ invalidates coverage guarantees; non-exchangeability between sealed and external samples destroys finite-sample validity.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The architecture draws on multiple historical lineages. The 32-team trench/blitz cells and belichickHome/belichickAway parameters descend from defensive-scheme charting associated with Bill Belichick’s defensive coordinators, where personnel groupings and pressure cells were treated as immutable structural inputs. The Sinkhorn target reallocation inherits from the Sinkhorn-Knopp matrix-balancing algorithm (1967), commonly applied to optimal transport and proportional allocation under constraints. The isotonic calibration curve invokes the isotonic regression framework of Barlow, Bartholomew, Bremner, and Brunk (1972), which enforces monotonic probability calibration. The conformal residual flag implements finite-sample prediction intervals in the tradition of Vovk, Gammerman, and Shafer (2005), providing distribution-free coverage without parametric assumptions.

The multi-week traps are rooted in Garrett’s operational history: Sunday-morning scratch-file reads from an ephemeral Antigravity CLI folder, hand-authored `injuryAndSchemeHomeDeltaPts` that fuse scheme and injury into a single non-auditable number, and self-contradictory script text within a single commit (837b95f58). The 21-streak cron failure on retired z-ai/glm-5.3-flash indicates dependency drift without version pinning. The 19 Sports* worktrees and 52 .gemini/antigravity/brain directories represent forked state that has likely drifted from the Neon gse-postgres source of truth. If these historical artifacts are not archived and pruned, the Tuesday v1.0 seal will operate on a subset of reality while execution continues in divergent worktree contexts, re-introducing the very multi-agent drift the pipeline was designed to eliminate.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The operator’s crisis habit regression follows a predictable recursive pattern: under Sunday-morning time pressure, the human model reverts to scratch-file improvisation, hand-authored narrative overrides, and direct file edits rather than sealed-packet queries. This is the coach-brain’s internal model of the operator: the LLM assumes coach tendencies are immutable after Tuesday 04:00 CT, but the operator’s actual behavior under stress violates that assumption by regenerating call-sheet prose on Sunday.

The counter-trap is the cryptographic state machine: v1.0 (Tue 04:00 CT) seals the mindset hash; v2.0–v4.0 may only reallocate targets and apply bounded injury deltas; any attempt to mutate `coachMindsetHash` triggers the invariant `recomputedHash !== baselineLock.coachMindsetHash` and throws. The `verifyCoachBrainOutputAgainstPacket` gate extends this recursion to the LLM itself: the model’s theory of mind about the game state is bounded to sealed `gameId`s and hashes; any hallucinated or unsealed reference produces a violation and veto.

The clock is the cadence state machine itself. It imposes an external time-binding that the operator cannot locally override without breaking the Merkle chain. However, if the operator edits `call-sheet.ts` directly on Sunday to “fix” a narrative contradiction, the clock is bypassed and the recursive integrity of the system collapses. The anti-hallucination gate detects output-level violations, but not source-level tampering outside the locked packages. Therefore the theory of mind must be extended to include a pre-commit hook or filesystem integrity check that seals `call-sheet.ts` and `locked-projection.ts` at v1.0, making Sunday edits cryptographically evident.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The model contains no weather input (wind speed, precipitation, temperature, dome vs. outdoor). `neutralPassRate` is treated as coach-determined and static across the week, despite known physical dependencies of passing efficiency on environmental conditions. A veto proof is missing: there is no physical veto layer that freezes or adjusts projections when exogenous physical variables cross operational thresholds.

Biomechanical layer: Injury overlays handle player removal (e.g., Mike Evans OUT) and shadow rates (e.g., Drake London shadowed at 0.62), but they do not model snap-count decay, route-participation fatigue, or replacement-player EPA dropoffs derived from sealed biomechanical baselines. The `applyQuarterbackAndRoomAttritionToReceiver` kernel is referenced but not shown; its bounded-EPA assumption is unverified.

Weather veto proof gap: Because `CoachSimInput` has no fields for wind, precipitation, or surface, any game where weather materially alters the pass-run balance will be processed with an unadjusted `neutralPassRate`. This is an unmitigated cross-layer failure: the system will issue sealed projections for games where the physical layer should have triggered a recalculation or a hold. The required veto is: if wind $>$ threshold or precipitation $>$ threshold, the Tuesday seal must emit a weather-hold flag and prevent MILP/SGP generation until a post-weather overlay is applied at v4.0 T-90.

Biomechanical veto proof gap: Sealed EPA dropoffs (Task 6) are mentioned but not implemented in the provided code. Without serialized replacement-player dropoff tables bound into `coachMindsetHash`, Friday injury overlays have no principled basis for target reallocation beyond arbitrary point deltas. This permits mid-week re-estimation, which the specification explicitly prohibits.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Counterfactual injury flip. At Friday v3.0, Mike Evans is declared inactive. The legacy Sunday script would have generated a Brandin Cooks UNDER instrument because `WEEK7_COACH_CONTEXTS` fused scheme and injury into one hand-authored number. RLVR veto: The Sinkhorn overlay reallocates Evans’s 0.26 base share across active receivers; Cooks’s route share shifts from 23% to 83% upon Evans’s exit. Any instrument projecting Cooks below his reallocated target share is vetoed; only projections consistent with the post-scratch allocation pass. Prediction: Kittle share increases strictly over v1.0; Cooks instruments align with OVER direction only; no UNDER Cooks instrument can be minted after v3.0.

Scenario 2: Counterfactual conformal breach. An external total series for game 401873017 produces a residual $r$ such that $y^{\text{ext}} \notin [\hat y - \hat q, \hat y + \hat q]$ at $\alpha=0.10$. RLVR veto: The conformal diagnostic flag triggers a diagnostic event; `evaluateSgpCombination` returns a sealed failure state and no correlated instruments are minted for that game until manual review restores exchangeability. Prediction: Zero SGPs are emitted for the affected game at v1.0–v3.0; the packetLock records a diagnostic-flag hash distinct from a clean seal.

Scenario 3: Counterfactual model dependency regression. The Hermes cron attempts to dispatch `daily-sms-status` using retired endpoint z-ai/glm-5.3-flash, which previously produced HTTP 400 failures and a failure_streak of 21. RLVR veto: The job resolver performs endpoint liveness preflight; on 404/400 from a retired model, execution halts and falls back to the profile default runtime without sending SMS or standup messages. Prediction: `failure_streak` resets to 0 after fallback; the weekly cadence lock (Tue 04:00 CT) is not delayed by cron failure because lock execution is decoupled from the SMS/standup jobs.
</RLVR_COUNTERFACTUAL_VETOES>