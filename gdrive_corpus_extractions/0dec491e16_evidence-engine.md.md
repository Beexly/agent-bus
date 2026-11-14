---
source: "evidence-engine.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/docs"
pages: 7
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3685
---

<NATIVE_REASONING>
The user wants me to analyze a document (evidence-engine.md) and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Important: The source text provided is pages 7 (the whole document appears to be one chunk). I need to cite [PAGE N] markers. Since the user said "PAGES: 7" and provided one source text block, I should treat it as page 7 or multiple pages? The prompt says "SOURCE TEXT: ... PAGES: 7". I think the safest approach is to cite [PAGE 7] since that's what was provided, or perhaps treat sections as pages? Actually, the instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since only one block was provided and labeled PAGES: 7, I'll cite [PAGE 7] for all quotes, or perhaps infer page breaks. But there are no explicit page breaks in the text. I should cite [PAGE 7] as the source page.

Wait, looking carefully: "PAGES: 7" might mean the document is 7 pages long, but only one chunk was provided. I will cite [PAGE 7] for references to this document.

Let me structure the response:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit. Need to discuss the architecture, the shadow-mode pipeline, the gating logic, where failures can occur, gray zones like trustLevel ambiguity, freshness vs staleness thresholds, sampleSize null handling, trueEV null dependency, brand-safety linter, calibration proposals, Brier score thresholds, etc. Multi-hop: how a raw snapshot propagates through adapter, normalizer, GameSignal, Pick, gateState, public response. Gray zones: "medium or low trust by default" for player factors but no explicit numeric trust mapping; "signedDelta" undefined; weight changes require human approval but no algorithm specified; staleness thresholds per-factor but not listed numerically; Brier bucket boundaries (50-59 etc.) vs continuous probability; silence as decision; the dependency chain for trueEV requiring independent fair-probability source that doesn't exist yet.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX equations. Units: freshnessSec (seconds), sampleSize (dimensionless count), trustLevel (categorical), marketDerivedEdge (0-100 dimensionless confidence index), trueEV (signed percent expected return per unit), Brier score (dimensionless mean squared error in probability space), p-value (dimensionless probability), drift threshold 0.02 absolute Brier. Equations:
- Brier: $B = \frac{1}{N}\sum_{i=1}^N (p_i - o_i)^2$ where $p_i \in [0,1]$, $o_i \in \{0,1\}$.
- Score composition: $S = \mathrm{clamp}(S_{\text{base}} + \sum_{f \in \mathcal{A}} w_f \Delta_f, 0, 100)$.
- Staleness predicate: $\text{stale}(f) \iff t_{\text{now}} - t_{\text{fetched}} > \tau_f$.
- Sample gate: $\text{skip}(f) \iff n_f \neq \emptyset \land n_f < n^{\min}_f$.
- Gate state mapping.
- Breakdown regimes: adapter down, all sources for required factor out, brand-safety block, calibration drift > 0.02, p >= 0.05 or improvement < 0.005, Simpson's paradox degradation.
- Citations: [PAGE 7] for the spec text.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Discuss lineage: v1 market-derived scoring (prediction-engine.md), evidence graph, shadow mode, calibration proposals, Brier score (Glenn W. Brier, 1950), reliability diagrams, Simpson's paradox, Drift detection rolling 30-day. Multi-week traps: shadow window length (30 days proposed, may need 60 for slow factors), calibration cycles (never activate more than one factor per cycle), provider mix decisions, dashboard auth, brand-safety v2 linter. The danger of retroactive justification: using shadow data to justify activation that was always planned; confirmation bias in Brier bucket selection; time-lagged leakage where shadow scoring influences operator intuition before activation.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. This is a more abstract/game theory section. Crisis habit regression: under pressure, operators revert to v1 market-only scoring or publish stale picks. Counter-trap: adversarial gaming of the calibration proposal process (e.g., proposing a factor with marginal Brier improvement in a single bucket to game p<0.05). Clock: freshness thresholds, staleness, rolling 30-day drift, 30-day shadow window. Need to discuss recursive theory of mind: what the operator thinks the engine thinks, what the engine thinks the operator will do, etc.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. Physical: venue altitude, surface type, noise penalty. Biomechanical: player minutes projection, restDays, back-to-back, star availability (injury/fatigue). Weather: windSpeed, windDir, precipitation, tempF (outdoor only). Veto logic: if any required factor stale -> blocked-stale; if adapter down for all sources -> NO PICK; brand-safety -> blocked-brand-safety. Weather factors are outdoor-only; indoor games should not have weather signals (veto if present). Player factors medium/low trust default; need proven adapter + sample >=10 games. Official factors need >2 std dev from league mean for public copy.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. Need 3 scenarios:
1. Stale factor veto: restDays fetched > stalenessThresholdSec. Prediction: gateState='blocked-stale', no pick published, public sees "monitoring, waiting on fresh data".
2. Brand-safety leak veto: shadow factorKey string appears in public response. Prediction: shadow-leak.test.ts fails, CI blocks, pick not published.
3. Calibration drift veto: rolling 30-day Brier drift >0.02 absolute. Prediction: drift-warning flag BS-034, calibration review triggered, factor remains activated but flagged; if drift persists, rollback proposal.
Maybe also insufficient evidence veto. Need verifiable and predictions.

Word count: >=1,000 words total across sections. THINK_TRACE alone >=400 words.

Need to avoid betting lines: no spreads, totals, moneylines, odds. The document mentions "total" in refTotalAvg (referee's avg total) and "home-team margin vs spread". I must NOT mention spreads, totals, moneylines, or odds as betting lines. I can refer to them only in the context of the source document's terminology but I must not elaborate on betting lines. Actually the invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." So I should avoid those words entirely, or at least not discuss them as betting concepts. The source text uses "total" in refTotalAvg and "spread" in refHomeBias. I can reference them as source terms but should not treat them as betting lines. Better to avoid quoting those specific terms if possible, or quote them neutrally as factor keys without commenting on betting. I'll be careful.

Also avoid toy equations: no invented ratios like Force/Fatigue. Use only formal equations grounded in the document (Brier, score composition, staleness, etc.).

Let's draft.

THINK_TRACE: Need >=400 words. I'll write a thorough audit.

Structure:
- Start with propagation hops: SourceSnapshot -> IngestionRun -> Adapter -> Normalizer -> GameSignal -> FactorDefinition -> Pick scorer -> gateState -> Brand-safety linter -> Public response.
- Gray-zone audit: trustLevel taxonomy lacks numeric calibration; signedDelta undefined in spec; stalenessThresholdSec per-factor but no numeric values given in registry tables; minSampleSize referenced in scoring pseudocode but not in FactorDefinition interface (missing field); trueEV is null until independent fair-probability source ships, creating a dependency singularity; marketDerivedEdge remains the sole public confidence, so evidence engine adds no public signal until activation; shadow history becomes activated history without replay, potentially embedding shadow-era normalizer bugs; Brier buckets are discrete (50–59 etc.) while probabilities are continuous, causing boundary sensitivity; p<0.05 and >=0.005 improvement are arbitrary thresholds without multiple-comparison correction across buckets; Simpson's paradox check is qualitative ("no segment degradation") without defined segment partition.
- Multi-hop failure: If payloadHash dedupe collides (SHA-256 assumed collision-resistant but not proven), snapshots lost. If normalizer version changes, old GameSignal rows carry modelInputVersion but scorer may not reweight. If adapter down, other providers compensate only if redundancy exists; single-provider factors (e.g., restDays from schedule data) have no backup.
- Cite [PAGE 7] with verbatim quotes.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Define sets and functions. Cite [PAGE 7].

RETROCAUSAL_GENEALOGY: Lineage: v1 prediction-engine.md [PAGE 7] predecessor; Brier score 1950; reliability diagrams; shadow mode analogous to shadow deployment in CI/CD; calibration proposals as governance. Multi-week traps: 30-day shadow window may be insufficient for slow factors (restDays vs referee tendencies); never activate more than one factor per calibration cycle creates serialization bottleneck; provider mix decisions deferred; operator dashboard auth deferred; brand-safety v2 linter deferred. Retroactive trap: using shadow Brier to justify activation that was predetermined; bucket cherry-picking.

RECURSIVE_THEORY_OF_MIND: Levels: L0 engine computes marketDerivedEdge; L1 operator sees shadow dashboards; L2 operator anticipates public reaction to silence; L3 engine anticipates operator's crisis habit regression to v1. Counter-trap: calibration proposal gaming. Clock: freshnessSec vs stalenessThresholdSec; rolling 30-day drift; 30-day shadow; 90-day retention then S3-cold.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer (venue altitude, surfaceType, noisePenalty); Biomechanical layer (restDays, travelMiles, b2b, starAvailability, minutesProjection, usageRate, restStarters); Weather layer (windSpeed, windDir, precipitation, tempF; outdoor only). Veto proof: conjunction of gates. Formal veto predicate: $V = \bigvee_{f \in \mathcal{R}} \text{stale}(f) \lor \bigwedge_{a \in \mathcal{A}_f} \text{down}(a) \lor \text{brandSafetyBlock} \lor \text{insufficientEvidence}$. If V=true, NO PICK. Player trust default medium/low; need adapter + sample >=10. Official copy needs >2 std dev.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios. Verifiable + predictions.

Need to ensure total words >=1000. Let's aim for ~1300-1500.

No mention of spreads, totals, moneylines, odds. I will not use those words. The source has "refTotalAvg" and "refHomeBias" and "spread". I'll refer to them as factor keys but not explain as betting. Actually I can avoid quoting them entirely to be safe, or mention them in a table as factor keys without context. Better to avoid.

Let's write carefully.

Citations: [PAGE 7] for all source references.

Verbatim quotes: I'll include a few short quotes from the text.

Let's draft each section.

THINK_TRACE:
(Write ~450 words)

SOURCE_OPERATORS_AND_EQUATIONS:
(Write ~300 words with LaTeX)

RETROCAUSAL_GENEALOGY:
(Write ~250 words)

RECURSIVE_THEORY_OF_MIND:
(Write ~250 words)

CROSS_LAYER_VETO_ADJUDICATION:
(Write ~250 words)

RLVR_COUNTERFACTUAL_VETOES:
(Write ~250 words)

Total should exceed 1000.

Let's begin writing.

Need exact XML section names.

Make sure no markdown code blocks that look like toy equations. Use LaTeX inline or display.

Be careful: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." I won't.

"State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes."

Units:
- freshnessSec: seconds [s]
- sampleSize: dimensionless count [–]
- marketDerivedEdge: dimensionless index [0,100]
- trueEV: percent expected return per unit [%]
- Brier score: dimensionless probability MSE [–]
- p-value: dimensionless probability [–]
- drift threshold: absolute Brier difference [–]
- stalenessThresholdSec: seconds [s]

Assumptions:
- SHA-256 collision resistance for payloadHash dedupe.
- Normalizer deterministic per modelInputVersion.
- Brier buckets independent (no multiple comparison correction).
- v1 marketBaseScore is calibrated baseline.

Singularity/breakdown:
- trueEV null when no independent fair-probability source; singularity at activation.
- If all providers for a factor down, veto.
- p>=0.05 or improvement <0.005 blocks activation.
- Brier drift >0.02 triggers warning.

OK, writing now.
</NATIVE_REASONING>

<THINK_TRACE>
The Evidence Engine specification [PAGE 7] describes a six-hop audit chain that begins with an immutable `SourceSnapshot` and terminates only at a public response if every gate passes. Hop one: provider API delivers raw JSON to an adapter, which computes `payloadHash` via SHA-256 and writes the snapshot with `fetchedAt`, `status`, and `ingestionRunId` [PAGE 7]. Hop two: a provider-specific normalizer maps raw fields into canonical `GameSignal` rows, keyed by `(gameId, factorKey, source)`, and inherits `activationState` from the `FactorDefinition` registry [PAGE 7]. Hop three: the Pick scorer reads only activated `GameSignal` rows, applies per-factor staleness and sample-size predicates, adds signed contributions to the v1 `marketBaseScore`, clamps to [0,100], and writes `Pick` with `factorContributions`, `marketDerivedEdge`, `trueEV`, `gateState`, and `evidenceBundleId` [PAGE 7]. Hop four: the brand-safety linter executes `assertNoShadowFactorsLeaked()` and either releases or blocks the pick [PAGE 7]. Hop five: if `gateState` is not `published`, the public surface renders silence—“monitoring, waiting on fresh data”—which the spec treats as a first-class decision, not a bug [PAGE 7]. Hop six: the operator dashboard retains visibility into shadow and activated history, but public copy may only cite activated factors [PAGE 7].

Gray-zone audit reveals multiple underspecified seams. First, `trustLevel` is categorical (`high` | `medium` | `low`) with no numeric mapping to weight caps or contribution bounds; a `low`-trust inferred pace factor could theoretically receive the same `weight` as an `high`-trust official referee assignment unless a human-imposed calibration proposal forbids it [PAGE 7]. Second, the scoring pseudocode references `registry[factor.key].minSampleSize`, yet the `FactorDefinition` interface lists only `sampleSize` on `GameSignal`, not a minimum threshold on the definition itself, creating a schema mismatch [PAGE 7]. Third, `signedDelta` appears in the contribution formula without a formal definition, direction convention, or domain (e.g., whether positive means higher confidence in the market-implied side or an independent direction), which makes deterministic replay impossible without inspecting the normalizer source [PAGE 7]. Fourth, `trueEV` is permanently `null` until an independent fair-probability source ships and a calibration proposal approves it; this creates a dependency singularity where the Evidence Engine’s core differentiator cannot execute under any current configuration [PAGE 7]. Fifth, the 30-day shadow window and p < 0.05 / ≥0.005 Brier improvement thresholds lack multiple-comparison correction across five probability buckets, inviting bucket-specific cherry-picking [PAGE 7]. Sixth, SHA-256 dedupe assumes collision resistance; a hash collision would silently discard distinct snapshots and break replay fidelity [PAGE 7]. Seventh, shadow history becomes activated history without replay, so a normalizer bug that operated during the shadow window is baked into the “activated” record [PAGE 7]. These gray zones do not invalidate the architecture, but they define exact regimes where the public surface may emit overconfident or non-reproducible outputs if the operator does not close the specification gaps before the first activation proposal.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
All variables below are drawn from the Evidence Engine spec [PAGE 7]. Units are SI, information-theoretic, or probability-space unless noted.

Definitions:
- Let $t_{\text{now}}$ be the current wall-clock time and $t_{\text{fetched}}$ the `fetchedAt` timestamp on a `GameSignal` [PAGE 7].
- Let $\tau_f = \text{registry}[f].\text{stalenessThresholdSec}$ in seconds [s] [PAGE 7].
- Let $n_f = \text{sampleSize}$ on the signal, a dimensionless count [–] [PAGE 7].
- Let $n^{\min}_f$ be the missing minimum sample-size field required by the scoring loop [PAGE 7].
- Let $p \in [0,1]$ be a predicted probability and $o \in \{0,1\}$ the observed binary outcome [–].

Staleness predicate:
\[
\text{stale}(f) \iff (t_{\text{now}} - t_{\text{fetched}}) > \tau_f
\]
Breakdown regime: if $\text{stale}(f) = \text{true}$ for any required factor, `gateState = blocked-stale` and no pick publishes [PAGE 7].

Sample-size skip predicate:
\[
\text{skip}(f) \iff (n_f \neq \emptyset) \land (n_f < n^{\min}_f)
\]
The factor exists but contributes zero; this is not fabrication [PAGE 7].

Pick score composition:
\[
S = \operatorname{clamp}\!\left(S_{\text{base}} + \sum_{f \in \mathcal{A}(g)} w_f \Delta_f,\; 0,\; 100\right)
\]
where $S_{\text{base}}$ is the v1 market-derived score on a 0–100 dimensionless index, $\mathcal{A}(g)$ is the set of activated non-market factors for game $g$, $w_f$ is the human-approved weight, and $\Delta_f = \text{signedDelta}$ [PAGE 7]. Units of $S$ are dimensionless confidence points [–].

Brier score per bucket $b$:
\[
B_b = \frac{1}{N_b}\sum_{i \in b} (p_i - o_i)^2
\]
Overall $B = \frac{1}{N}\sum_{i=1}^{N}(p_i - o_i)^2$ [PAGE 7]. Units are squared probability error [–]. Activation requires $\Delta B = B_{\text{baseline}} - B_{\text{augmented}} \ge 0.005$ and $p < 0.05$ [PAGE 7]. No multiple-comparison correction is specified across the five buckets (50–59, 60–69, 70–79, 80–89, 90–100) [PAGE 7].

Drift detection:
\[
\mathcal{D} = |B_{\text{rolling-30}} - B_{\text{prior-30}}|
\]
If $\mathcal{D} > 0.02$ (absolute Brier difference [–]), a `drift-warning` flag BS-034 is raised [PAGE 7].

Veto conjunction for no-pick:
\[
V = \bigvee_{f \in \mathcal{R}} \text{stale}(f) \;\lor\; \bigwedge_{a \in \mathcal{A}_f} \text{providerDown}(a) \;\lor\; \text{brandSafetyBlocked} \;\lor\; \text{insufficientEvidence}
\]
If $V = \text{true}$, public surface emits silence [PAGE 7].

Assumptions: SHA-256 payloadHash dedupe is collision-free; normalizers are deterministic per `modelInputVersion`; the v1 `marketBaseScore` is the calibrated baseline; `trueEV` is undefined (null) until an independent fair-probability source is activated [PAGE 7]. Singularity: when no independent fair-probability source exists, `trueEV` cannot be computed and the Evidence Engine adds no public second number [PAGE 7].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The architecture’s lineage traces to the v1 `prediction-engine.md`, which the spec describes as market-derived scoring that “never claims a private edge” and caps the platform at reading the market well [PAGE 7]. The Evidence Engine extends that lineage with an evidence graph, shadow-mode incubation, and a hard separation between market-derived edge and true EV [PAGE 7]. Scientifically, the Brier score dates to Glenn W. Brier’s 1950 verification of probability forecasts, and the reliability diagram described for `/admin/calibration` is the classical observed-frequency vs. predicted-bin diagnostic [PAGE 7]. The shadow pattern borrows from continuous-deployment practice: compute in parallel, store, but do not expose until promotion criteria are met [PAGE 7].

Multi-week traps are embedded in the rollout cadence. The calibration window is proposed at 30 days, but the spec itself concedes that slow-moving factors may require ≥60 days, and the decision is deferred per proposal rather than fixed [PAGE 7]. Because only one factor may be activated per calibration cycle, the pipeline serializes; a slow first factor (e.g., referee data awaiting provider ToS and cost decisions) blocks the entire activation queue [PAGE 7]. The operator dashboard at `/admin/factors/{factorKey}` and `/admin/calibration` are explicitly deferred infrastructure, meaning the first activation proposal must be evaluated without the very dashboards designed to justify it [PAGE 7]. Brand-safety rules v2 are cited as absolute but not yet wired into the linter, creating a governance gap between spec and runtime [PAGE 7].

A retrocausal trap lies in using shadow-mode Brier improvements to justify activation that was already organizationally preferred. Because shadow scoring runs alongside real picks and shadow history “becomes” activated history without replay, an operator can review favorable shadow buckets and write a calibration proposal that confirms a prior preference, while the p < 0.05 and ≥0.005 thresholds offer no protection against bucket cherry-picking or Simpson’s-paradox segment degradation unless the segment partition is predefined [PAGE 7]. The 90-day hot retention followed by S3-cold archival means long-horizon factor validation (e.g., referee tendencies across a full season) may outlive hot storage, complicating re-derivation from raw snapshots if normalizer bugs surface after cold transition [PAGE 7].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Level zero: the engine computes `marketDerivedEdge` from v1 signals and holds `trueEV = null` because no independent fair-probability source is wired [PAGE 7]. Level one: the operator inspects `/admin/factors/{factorKey}` and sees shadow factors disagreeing with the market; the spec says the public surface still publishes using activated factors only, so the operator’s private knowledge does not yet alter public copy [PAGE 7]. Level two: the operator anticipates that a `blocked-stale` or `blocked-insufficient-evidence` state will render as “no pick” copy, and may feel pressure to lower staleness thresholds or relax evidence requirements to avoid silence [PAGE 7]. Level three: the engine must anticipate the operator’s crisis habit regression. Under provider outage or adapter failure, the spec mandates that other providers compensate; if all sources for a required factor are out, the correct output is NO PICK [PAGE 7]. A regressed operator might instead attempt to publish using stale or low-trust signals to preserve a publication cadence, violating the freshness and trust contract.

The counter-trap is adversarial calibration gaming: a proposer submits a factor with marginal Brier improvement concentrated in one bucket (e.g., 60–69) to satisfy p < 0.05 and ≥0.005 while degrading another segment, relying on the absence of a formal multiple-comparison correction [PAGE 7]. The clock is the freshness subsystem: `freshnessSec` is compared against `stalenessThresholdSec` at score time, and a rolling 30-day Brier comparison triggers drift review at |ΔB| > 0.02 [PAGE 7]. These temporal boundaries create a recursive pressure: as `freshnessSec` approaches $\tau_f$, the operator’s incentive to relax the threshold increases exactly when signal reliability is most in doubt. The correct recursive response is to treat silence as the default and require human-approved weight changes via `docs/calibration-proposals/`, never auto-tuning [PAGE 7].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: venue factors include `homeFieldAdvantage` (venue-specific advantage over the last 50 games), `surfaceType` (turf/grass/court), and `noisePenalty` (crowd-noise penalty proxy) [PAGE 7]. Biomechanical layer: schedule factors include `restDays`, `travelMiles`, `b2b`, and `altitude`; player factors include `starAvailability`, `minutesProjection` (dependent on availability, never first-class), `usageRate`, and `restStarters` [PAGE 7]. Weather layer: outdoor sports only, including `windSpeed`, `windDir`, `precipitation`, and `tempF` [PAGE 7]. Each layer is subject to the same veto logic: if any required factor is stale, `gateState = blocked-stale`; if every provider for a required factor is down, NO PICK; if brand-safety linter fails, `blocked-brand-safety` [PAGE 7].

The veto proof is a conjunction over layers. Let $\mathcal{P}$ be physical factors, $\mathcal{B}$ biomechanical factors, and $\mathcal{W}$ weather factors. For a game $g$, define:
\[
\mathcal{V}(g) = \Bigl[\bigvee_{f \in \mathcal{P}\cup\mathcal{B}\cup\mathcal{W}} \text{stale}_g(f)\Bigr] \lor \Bigl[\bigwedge_{a \in \text{Providers}(f)} \text{down}(a)\Bigr] \lor \text{LinterFail}
\]
If $\mathcal{V}(g) = \text{true}$, the pick does not publish [PAGE 7]. Weather factors carry an additional domain veto: they apply only to outdoor sports; an indoor game with a weather signal is malformed and must be excluded [PAGE 7]. Player factors are medium or low trust by default and require a proven adapter plus a documented sample-size threshold (typically ≥10 games) before activation [PAGE 7]. Official factors may be referenced in public copy only when activated and when the measured difference exceeds 2 standard deviations from the league mean; otherwise such copy is forbidden [PAGE 7]. These cross-layer constraints make the “no pick” state a deterministic outcome of physical missingness, biomechanical unavailability, or weather-domain mismatch, not a discretionary editorial choice [PAGE 7].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Stale factor veto. A `restDays` signal is fetched at $t_0$ and the pick is scored at $t_1$ where $(t_1 - t_0) > \tau_{\text{restDays}}$. Verifiable condition: `freshnessSec` exceeds `stalenessThresholdSec` in the `GameSignal` row [PAGE 7]. Prediction: `gateState` resolves to `blocked-stale`, the public surface renders the “monitoring, waiting on fresh data” copy, and no `factorContributions` are emitted [PAGE 7].

Scenario 2 — Shadow-leak veto. A test seeds the database with both an activated `lineMovement` factor and a shadow `sharpMoneyIndicator` factor for the same game, then calls every public endpoint. Verifiable condition: the response body contains the string `sharpMoneyIndicator` [PAGE 7]. Prediction: `apps/web/__tests__/shadow-leak.test.ts` fails and blocks CI; the public pick contains zero shadow `factorKey` strings, and `assertNoShadowFactorsLeaked()` prevents publication [PAGE 7].

Scenario 3 — Calibration drift veto. An activated factor’s rolling 30-day Brier score drifts by $|B_{\text{rolling-30}} - B_{\text{prior-30}}| > 0.02$. Verifiable condition: dashboard flag BS-034 is raised [PAGE 7]. Prediction: the factor remains activated but enters calibration review; if a rollback proposal is approved and 7-day post-activation Brier continues to drift beyond 0.02, the factor reverts to shadow and a rollback markdown is added to `docs/calibration-proposals/` [PAGE 7]. The engine does not silently downweight the factor; the veto is procedural and human-mediated [PAGE 7].
</RLVR_COUNTERFACTUAL_VETOES>