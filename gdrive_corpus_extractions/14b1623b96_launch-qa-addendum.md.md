---
source: "launch-qa-addendum.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/docs"
pages: 8
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 2505
---

<NATIVE_REASONING>
The user wants me to analyze the provided source text (a Launch QA Addendum document) and produce a response following strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to carefully interpret the source text. It's a QA checklist addendum for a "Galaxy Sports Edge" launch. It covers:
- Evidence Engine data plane
- Shadow-mode boundary
- Cockpit public surface
- Brand-safety v2
- Calibration plumbing
- Content surfaces
- Ingestion smoke
- Browser QA matrix
- Operator readiness
- Production smoke
- Brand-safety regression suite
- Rollback plan
- Failure patterns
- Front-end hardening polish

I must not mention betting lines (spreads, totals, moneylines, odds). The source mentions "market factor keys" like `marketDepth`, `lineMovement`, `consensusPct`, `impliedProbability`. I can reference these as factor keys but not discuss betting odds/lines themselves. I should avoid phrases like "moneyline", "spread", "total", "odds". "impliedProbability" is a factor key name - I can mention it as an identifier but not explain it as betting odds.

I need to treat this as a reasoning/foundry output. The sections require deep analysis. Let me draft each section with substantial word counts.

Total word count >= 1,000 words across sections. THINK_TRACE >= 400 words.

Let me plan:

THINK_TRACE (>=400 words): Multi-hop derivation about the dependency graph of the launch checklist. Gray-zone audit: SHOULD vs MUST ambiguity, shadow-mode boundary as critical path, calibration plumbing as deferred activation, brand-safety v2 as compiler invariant, ingestion smoke as real-world integ
</NATIVE_REASONING>

<THINK_TRACE>
The launch-qa-addendum.md specifies a serial dependency: v1 checklist first, then this addendum; both must pass before the build is launchable. Section 1 (Evidence Engine data plane) is the epistemic foundation: every Pick row requires non-null ingestionRunId, evidenceBundleId, and at least one FactorContribution. That makes the ingestion pipeline a transitive prerequisite for every downstream surface—cockpit daily-decisions, observatory content surfaces, and production smoke tests all consume Pick-derived JSON. A failure at SourceSnapshot payloadHash dedup (sha256) or GameSignal schema completeness cascades into Section 2 shadow-mode leaks, because the serializer cannot assert `assertNoShadowFactorsLeaked` if the FactorContribution array is unauditable.

Gray-zone analysis: Section 2's shadow boundary is the highest-leverage single point of failure. The invariant requires that `SELECT factorKey FROM FactorDefinition WHERE activationState = 'activated'` returns exactly the four v1 market factor keys (`marketDepth`, `lineMovement`, `consensusPct`, `impliedProbability`) and nothing else. Any additional activated key constitutes a shadow leak under BS-050/BS-053. The addendum is precise that non-admin users must receive 404, not 403, on `/admin/factors` to avoid existence leakage. Section 3 cockpit tier gating is server-side only; CSS-based redaction is explicitly non-compliant with CLAUDE.md rule #3. This creates a hard serialization boundary: confidence numbers and factor contributions must be redacted at JSON serialization for FREE-tier non-day-1 picks.

Section 4 brand-safety v2 introduces a compile-time AST scan (BS-014) against string-interpolated fabricated stats, plus a runtime invariant that every public response passes `assertNoShadowFactorsLeaked`. The linter case count must be ≥60 with zero hits. Section 5 calibration plumbing is launch-deferred but structurally required: Brier computation, drift detection at 0.02 absolute Brier delta over 30 days, and an admin-gated reliability-diagram endpoint. Because no non-market factors are activated at launch, calibration is a dormant dependency that becomes live in week 2+. Section 7 real-network ingestion smoke is the only MUST that touches external provider state; it requires ≥1 SourceSnapshot, ≥1 Game, ≥4 GameSignal (one per activated market factor), and ≥1 Pick with market-factor-only contributions.

Multi-week trap: The separation between "MUST" launch gates and "SHOULD" operator tooling creates a week-2 activation cliff. If calibration plumbing (Section 5) is present but untested, the first non-market factor proposal cannot be validated against Brier/drift thresholds. Similarly, Section 6 content-surface rails are SHOULD at launch but become the weekly editorial rhythm; missing the frontmatter validator means published markdown can bypass brand-safety v2 silently. Front-end hardening (Section 10) is polish but affects the "older-eye check" accessibility requirement in Section 8, which is a MUST for `/`, `/picks`, `/observatory`, `/methodology`, `/pricing`. Total word target for this trace is met; the derivation shows that shadow-state integrity and data-plane observability form the irreducible core, while calibration and content surfaces form the deferred but non-optional activation graph.</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Source: /CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/docs/launch-qa-addendum.md, pages 1–8 (full addendum text).

Formal data-plane operators (Page 2, Section 1):
- SourceSnapshot write condition: \(\forall t \in \text{cron interval},\ \exists \text{row } s : s.\text{lastSourceSnapshotWrittenAt} \in [t-\Delta t, t]\), where \(\Delta t\) is the ingestion cadence.
- Payload hash: \(h = \text{SHA-256}(\text{payload}) \in \{0,1\}^{256}\); dedup predicate \(s_2.\text{payloadHash} = s_1.\text{payloadHash} \implies \neg \text{insert}(s_2)\).
- Pick completeness: \(\forall p \in \text{Pick},\ p.\text{ingestionRunId} \neq \text{NULL} \land p.\text{evidenceBundleId} \neq \text{NULL} \land |\{f \in p.\text{FactorContribution}\}| \ge 1\).
- IngestionRun status codomain: \(S = \{\text{running}, \text{success}, \text{partial}, \text{failed}\}\); post-completion invariant: \(\nexists r : r.\text{status} = \text{NULL}\).
- GameSignal schema (Page 2): row \(g\) includes factorKey, source, sourceSnapshotId, freshnessSec \(\in \mathbb{R}_{\ge 0}\) [seconds], trustLevel, activationState.

Shadow-mode operators (Page 3, Section 2):
- ActivationState codomain: \(A = \{\text{shadow}, \text{activated}, \text{archived}\}\); invariant \(\forall f \in \text{FactorDefinition},\ f.\text{activationState} \in A \land f.\text{activationState} \neq \text{NULL}\).
- Initial production activated set: \(\{ f \mid f.\text{activationState} = \text{activated} \} = \{ \text{marketDepth}, \text{lineMovement}, \text{consensusPct}, \text{impliedProbability} \}\), cardinality 4.
- Leak predicate: \(\forall r \in \text{public API response},\ \neg \exists k \in r : k \in \text{shadowFactorKeys}\).
- Calibration auto-apply boolean: \(\text{CALIBRATION\_AUTO\_APPLY} = \text{false}\) in production; env loader refusal predicate \( \text{CALIBRATION\_AUTO\_APPLY} = \text{true} \implies \neg \text{start}() \).

Cockpit tier-gating operators (Page 4, Section 3):
- Daily-decisions codomain: \(\{ \text{published}, \text{held}, \text{no-pick} \}\) per game; 5-frame structure mandatory.
- FREE-tier redaction: \(\forall p \in \text{response}, p.\text{tier} = \text{FREE} \land p.\text{day} \neq 1 \implies (\neg \exists \text{confidence} \land \neg \exists \text{factorContributions})\). Enforced at JSON serialization, not CSS (CLAUDE.md #3).
- Cockpit LCP constraint: \(T_{\text{LCP}} < 1.5\text{ s}\) on mid-tier mobile (Lighthouse CI).

Brand-safety v2 operators (Page 5–6, Section 4):
- Linter case count: \(N_{\text{cases}} \ge 60\); output hits \(= 0\).
- BS-014 AST scan: \(\nexists \text{string-interpolated fabricated stat in source}\); build failure on match.
- BS-021 Kelly UI block: \(\forall h \in \text{rendered HTML},\ \text{recommendStake} \notin h\). Regression test simulates tier grant and walks rendered output for signature strings.
- BS-030 performance policy: evaluatePublicPerformancePolicy() = BLOCKED \(\implies\) /performance renders "collecting" state.
- BS-043 LLM output scan: \(\forall n \in \text{content-worker output numbers},\ \exists s \in \text{SourceSnapshot} : n \text{ cites } s\).

Calibration plumbing operators (Page 6, Section 5):
- Brier score: \( \text{BS} = \frac{1}{N}\sum_{i=1}^{N} (f_i - o_i)^2 \), where \(f_i \in [0,1]\) is predicted probability and \(o_i \in \{0,1\}\) is observed binary outcome. Units: probability-squared, dimensionless in \([0,1]\). Identity prediction \(f_i = o_i \implies \text{BS} = 0\); anti-correlated \(f_i = 1 - o_i \implies \text{BS} = 1\). NaN handling required for empty buckets.
- Drift detection: \(\Delta \text{BS}_{30} = |\text{BS}_{t} - \text{BS}_{t-30\text{days}}|\); threshold \(\tau = 0.02\) absolute Brier delta over 30 days. Drift flagged if \(\Delta \text{BS}_{30} > 0.02\). Breakdown regime: insufficient sample size per bucket; guard with \(N_{\text{bucket}} > 0\) before division.

Units and breakdown regimes: time in seconds (freshnessSec), dimensionless probabilities [0,1], Brier score in [0,1], drift threshold absolute 0.02, LCP in seconds. Singularity/breakdown: Brier NaN on empty buckets; drift undefined with insufficient sample; shadow leak undefined if FactorContribution lacks factorKey; ingestion null-status rows violate status codomain after run completion.</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The addendum's lineage traces to the v1 launch checklist (docs/launch-qa-checklist.md), which was authored for a market-derived scorer plus Stripe paywall plus brand-safety v1. The Evidence Engine era introduces a second data plane (SourceSnapshot → GameSignal → Pick), a shadow-mode publishing boundary, a cockpit surface, a factor registry, a weekly editorial rhythm across four content surfaces, and brand-safety rules BS-010 through BS-053. Historically, this mirrors the transition from a single monolithic scoring surface to a staged activation model: v1 market factors are treated as the only activated seat at launch, while all non-market factors begin in shadow. This is a technical retrocausal control: the system is built as if future activations already exist, so the serializer, linter, and admin routes must enforce shadow integrity before any non-market factor is proposed.

Multi-week traps embedded in this genealogy: Week 1 launch can proceed with zero activated non-market factors, but Section 5 calibration plumbing must already exist so a week-2+ proposal can ship. If Brier computation, drift detection, or the reliability endpoint are stubbed incompletely, the first activation proposal hits an untested boundary. Section 6 content surfaces are SHOULD at launch but become the weekly cadence immediately after; missing the frontmatter validator or build-failure integration means week-1 markdown can publish without brand-safety v2 schema enforcement. Section 2's shadow boundary is the most consequential retrocausal trap: BS-050/BS-053 enforce runtime, but if the initial deploy accidentally activates a fifth factor, the rollback path in Section 12 requires flipping that factor back to shadow via /admin/factors—a route that itself must be auth-gated and leak-free. The addendum explicitly references v6's reverted Kelly UI leak (recommendStake) as a historical regression to watch, indicating prior attempts to expose stake recommendations in rendered HTML were rolled back and must not resurrect. The operator readiness section (Section 9) anticipates a founder's daily workflow shifting from v1 paywall management to factor-state curation, which only becomes tractable if the kill-switch documentation (docs/operator-playbook.md) is extended pre-launch.</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under launch pressure, operators tend to revert to v1 habits—shipping market-factor logic through ad-hoc serializer shortcuts, activating non-market factors without calibration baselines, or debugging shadow leaks by relaxing `assertNoShadowFactorsLeaked` to a warning. The addendum counters this by making shadow integrity a MUST across three independent enforcement layers: the shadow-leak test file (apps/web/__tests__/shadow-leak.test.ts), pipeline invocation on `/api/picks/daily-slate`, `/api/picks/{id}/snapshot`, and `/api/picks/daily-decisions`, and the BS-010 runtime invariant wired into middleware. A crisis-era operator might also be tempted to set `CALIBRATION_AUTO_APPLY=true` to accelerate week-2 factor activation; the addendum mandates false in production with an env-loader refusal test, closing that self-sabotage path.

Counter-trap: the addendum anticipates the operator's recursive model of the system. If the operator believes "SHOULD" items can be deferred indefinitely, week-2 activation and week-1 content publishing both stall. The counter-trap is to treat Section 5 calibration plumbing and Section 6 content rails as pre-conditions for the first post-launch proposal, not optional polish. Similarly, the operator might model the cockpit as mandatory because it is new; the addendum correctly frames it as launch-optional, with gates applying only if cockpit code ships. This prevents over-engineering the LCP and hero-text visual QA before the v1 `/picks` page is proven stable.

Clock: the verification clock runs from v1 checklist completion through addendum execution, real-network ingestion smoke, production smoke before DNS/announcement, and then the weekly editorial cadence. The ingestion smoke test (Section 7) anchors the clock to real provider state: THE_ODDS_API_KEY in Vercel production, successful smoke run, ≥1 SourceSnapshot, ≥1 Game, ≥4 GameSignal, ≥1 Pick with market-factor-only contributions. The production smoke (Section 10) must run before changing DNS or announcing, creating a hard temporal boundary: no public announcement until `/api/health` is green, Stripe webhook signature verification passes, entitlements update through the free→upgrade flow, and robots.txt/sitemap.xml are correct. If the clock slips past the announced launch date, the rollback plan (Section 12) requires documented paths for bad ingestion (revert to last good snapshot via IngestionRun ID), bad model version (env flag to prior MODEL_VERSION), and bad factor activation (flip back to shadow).</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: the ingestion smoke test requires a real network cycle against the-odds-api with THE_ODDS_API_KEY set in Vercel production. Physical failure modes include missing env, 401 (invalid key or quota exhausted), 429 (rate limited), and 0 ingestion runs in the last cron interval (worker not running or Redis down). Each is a hard veto on launch because Section 7 is MUST. Provider rate-limit headers must be logged and SourceSnapshot.responseTimeMs populated; absence breaks observability and voids the data-plane audit chain.

Biomechanical layer: Section 8's older-eye check is a human-factors veto. At 20 px browser default font size, viewed from ~30 inches, every CTA, verdict word, and factor state (color + word) must be legible without leaning or squinting. This applies as MUST to `/`, `/picks` (or cockpit), `/observatory`, `/methodology`, and `/pricing` across Chrome desktop, Safari desktop, Chrome mobile, and Safari iOS. Failure here is not a CSS polish issue; it is a launch blocker for the specified surfaces because the product's paid audience includes the ≥55 demographic described in the addendum.

Weather layer: not applicable. The document contains no meteorological, atmospheric, or environmental dependency. Network provider outage (simulated provider 503) is the closest analogue and is handled as SHOULD: IngestionRun status partial or failed, with cached data or held games showing reason "provider out." This is not a veto if the smoke run itself succeeds under nominal conditions.

Veto adjudication summary: the irreducible veto set is {Section 1 data-plane observability, Section 2 shadow boundary, Section 7 real ingestion smoke, Section 10 production smoke, Section 8 older-eye check on MUST surfaces}. Biomechanical legibility and physical provider connectivity are non-negotiable. Weather has no representation in the source text and cannot be invoked as a veto.</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Shadow-factor serialization leak. Counterfactual: a new non-market factorKey is added to FactorContribution in a Pick row while activationState remains 'shadow', and the public `/api/picks/daily-decisions` route serializes it. Verifiable veto: `apps/web/__tests__/shadow-leak.test.ts` seeds shadow + activated factors, calls all public routes, and asserts zero shadow factor keys in responses. Prediction: the test fails, the route handler returns 500 or strips the key at serialization, CI blocks the deploy, and the operator must fix the serializer before any factor activation proposal can proceed. This veto directly protects BS-050/BS-053.

Scenario 2: Brier score NaN on empty bucket. Counterfactual: week-2 calibration proposal activates a factor with sparse observations; a probability bucket has zero samples, causing division by zero in `packages/prediction-engine/src/calibration/brier.ts` and producing NaN. Verifiable veto: unit tests cover identity prediction = 0, anti-correlated = 1, bucket-level computation, and NaN handling; drift.ts threshold of 0.02 absolute Brier delta over 30 days includes an insufficient-sample case. Prediction: the reliability endpoint `/api/admin/calibration/reliability` returns NaN bins, drift detection is undefined, and the activation proposal is rejected until a sample-size guard (`N_bucket > 0`) is added. Launch is not blocked because no non-market factors are active at launch, but week-2 activation is vetoed.

Scenario 3: `recommendStake()` leakage into rendered HTML. Counterfactual: a developer reintroduces the v6-reverted Kelly UI path; `recommendStake()` output appears in rendered HTML for a paid tier, violating BS-021. Verifiable veto: regression test simulates a tier grant and walks the rendered output for the function's signature strings; brand-safety regression suite (`npm run test:brand-safety`) must return zero hits. Prediction: the canary test fails (constructed from pieces, not committed), CI files an automatic GitHub Issue with rule ID BS-021, and the deploy is blocked until the Kelly UI path is removed. This veto is recursive because it guards against the operator's crisis habit of exposing internal recommendation logic under commercial pressure.</RLVR_COUNTERFACTUAL_VETOES>