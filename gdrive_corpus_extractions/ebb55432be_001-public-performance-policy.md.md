---
source: "001-public-performance-policy.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/docs/adr"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4003
---

<NATIVE_REASONING>
The user wants me to analyze a source document (ADR 001 — Public Performance Policy) following strict invariants:

1. ZERO BETTING LINES: No spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE 1] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to write a comprehensive analysis of this software architecture decision document. Since it's about a public performance policy system (not sports betting per se, despite "Galaxy Sports Edge"), I must avoid betting lines entirely. I can discuss it as a software system for exposing performance statistics publicly.

Key elements to cover:
- The document is Page 1 only. So all citations [PAGE 1].
- Formal LaTeX equations for the policy evaluation logic, win rate calculation, etc.
- Units: dimensionless probabilities, counts (unitless integers), boolean gates, time in days (14-day window mentioned), latency O(milliseconds).
- Breakdown regimes: gate off, insufficient sample, all bootstrap, allowed.
- Multi-hop derivation: how the three problems (inconsistency, bootstrap leakage, gate bypass) map to the four rules.
- Retrocausal genealogy: lineage of software architecture patterns (single source of truth, pure functions, separation of capability vs application, readiness gates vs policy), historical traps (bootstrap leakage as data leakage, ad-hoc SQL vs pure functions).
- Recursive theory of mind: crisis habit regression (developers reverting to ad-hoc queries under pressure), counter-trap (the policy as a gatekeeper), clock (14-day bootstrap window, two queries per page).
- Cross-layer veto adjudication: physical (database query latency O(ms)), biomechanical (human contributors learning policy boundary), weather (external? maybe not applicable, but I can frame environmental/contextual factors like multi-region rollouts as out of scope).
- RLVR counterfactual vetoes: 3 verifiable scenarios with predictions.

Word count: >= 1,000 words total across sections, with THINK_TRACE >= 400 words.

Let me structure this carefully.

THINK_TRACE (>=400 words): Deep derivation. Map context problems to decision rules. Analyze the evaluation order (short-circuit semantics). Gray-zone audit: input trust assumption (no defensive clamping), single boolean gate vs multi-region, per-tier variations. The purity of the function enables exhaustive unit testing. The asymmetry of messages. The 14-day window mentioned in context but not explicitly in function signature? Actually signature has recentTotalCount, recentBootstrapCount. The context says dashboard's 14-day list didn't filter isBootstrap: false. So recent window likely 14 days. Multi-hop: problem 1 inconsistency -> policy single decision point; problem 2 bootstrap leakage -> bootstrap excluded from canonical counts and rule 3; problem 3 gate bypass -> rule 1. Consequences: two queries, O(ms). Alternatives rejected: gate-only, API-driven, embed in readiness gates.

SOURCE_OPERATORS_AND_EQUATIONS: Formalize the function. Let me define:
- Inputs: \(g \in \{0,1\}\) (canExposePerformanceStats), \(m \in \mathbb{N}_0\) (minCanonical), \(c \in \mathbb{N}_0\) (canonicalSettledCount), \(b \in \mathbb{N}_0\) (bootstrapCount), \(p \in \mathbb{N}_0\) (pendingCount), \(w,l,u \in \mathbb{N}_0\) (canonicalWins, canonicalLosses, canonicalPushes), \(r \in \mathbb{N}_0\) (recentTotalCount), \(r_b \in \mathbb{N}_0\) (recentBootstrapCount).
- Output: block boolean, reason string, publicWinRate \(\rho \in [0,1]\), publicRecord tuple \((w,l,u)\), etc.
- Rules as piecewise function:
\[
\text{evaluate}(...) = 
\begin{cases}
(\text{block}, \text{GATE\_OFF\_PERFORMANCE\_STATS}), & g=0 \\
(\text{block}, \text{INSUFFICIENT\_CANONICAL\_SAMPLE}), & g=1 \land c < m \\
(\text{block}, \text{ALL\_RECENT\_PICKS\_BOOTSTRAP}), & g=1 \land c \ge m \land r = r_b > 0 \\
(\text{allow}, \text{OK}), & \text{otherwise}
\end{cases}
\]
- Win rate: \(\rho = \frac{w}{w+l}\) (pushes excluded from denominator, consistent with performance page not counting push). Units dimensionless. Singularity at \(w+l=0\).
- Bootstrap leakage indicator: \(B = \mathbb{I}[r_b = r \land r > 0]\).
- Latency: \(T_{\text{counts}} = O(1)\) ms at scale; two queries per page.
- Page citation [PAGE 1] throughout.

RETROCAUSAL_GENEALOGY: Historical lineage. Single source of truth (SSOT) pattern. Pure functions (referential transparency). Readiness gates (feature flags) vs policy (application logic). Bootstrap leakage as a form of train/test leakage or data leakage. Ad-hoc SQL vs centralized policy. Multi-week traps: if a contributor adds a new surface and forgets the policy, the system regresses; the 14-day window means bootstrap streaks can persist for two weeks before settling; the gate is a single boolean today so no staggered rollout protection.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression: under incident pressure, a developer might bypass `evaluatePublicPerformancePolicy` and query `db.pick.findMany` directly (the old habit). Counter-trap: the test suite `policy-only-winrate.test.ts` and `dashboard-performance-gate.test.ts` act as institutional memory, catching regressions. Clock: the 14-day bootstrap window creates a temporal trap where a bootstrap streak looks real for two weeks; the two-query pattern adds latency but is deterministic; the single boolean gate means no time-zoned or regional variation to manage today, but future multi-region could desynchronize.

CROSS_LAYER_VETO_ADJUDICATION: Physical layer: database queries O(milliseconds), two queries per page, no network round-trip to external API (API-driven alternative rejected due to latency). Biomechanical/human layer: new contributors must learn policy boundary; CONTRIBUTING.md captures this; cognitive load of internal vs external vocabulary (canonical/bootstrap vs brand-safe). Weather/environmental: not literally weather, but operational environment—multi-region rollouts out of scope, single boolean gate today, per-tier variations out of scope. Veto proof: if any layer fails (gate off, insufficient sample, all bootstrap), public surface is vetoed; no partial exposure.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios.
1. Scenario: `canExposePerformanceStats = false` but page calls `db.pick.findMany` directly and computes win rate. Veto: policy rule 1 blocks; prediction: public surface shows `publicMessage` with disclaimer, no record; operatorMessage shows GATE_OFF_PERFORMANCE_STATS. Verifiable via `dashboard-performance-gate.test.ts`.
2. Scenario: `canonicalSettledCount = 2`, `minCanonical = 5` (or whatever config), recent window has 3 settled picks. Veto: rule 2 blocks INSUFFICIENT_CANONICAL_SAMPLE. Prediction: no publicWinRate exposed; `minimumRequirements` returned. Verifiable via unit test mapping table.
3. Scenario: `recentTotalCount = 10`, `recentBootstrapCount = 10`, canonical count sufficient. Veto: rule 3 blocks ALL_RECENT_PICKS_BOOTSTRAP. Prediction: bootstrap streak not exposed as real win rate; `publicMessage` baked with disclaimer. Verifiable via `public-performance-policy.test.ts`.

I need to ensure no betting lines. The document mentions "picks" and "win-rate" but not spreads/moneylines. I'll treat it purely as a software system.

Word count check: I need >=1000 words total. THINK_TRACE >=400. Let me aim for substantial content in each section.

Citations: [PAGE 1] since only one page. Verbatim quotes: I should quote exact phrases from the source, e.g., "can this surface make a public performance claim right now?", "bootstrap picks are not in any of the counts the policy reads", "Past performance does not guarantee future results", etc.

Let me draft.

THINK_TRACE: I'll write around 500-600 words. Deep multi-hop derivation:
- Hop 1: Context Problem 1 (inconsistency: dashboard counts PUSH in denominator; performance page doesn't; daily-slate ignores gate) -> Decision: pure I/O-free function as single decision point.
- Hop 2: Context Problem 2 (bootstrap leakage: 14-day list not filter isBootstrap: false) -> Decision: canonical counts exclude bootstrap; rule 3 checks recent window entirely bootstrap.
- Hop 3: Context Problem 3 (gate bypass: dashboard doesn't reference getReadinessGates().canExposePerformanceStats) -> Decision: rule 1 checks gate first; every surface must call function.
- Hop 4: Evaluation order (short-circuit): gate -> sample -> bootstrap-recent -> allowed. This is a veto chain.
- Hop 5: Gray-zone audit: input trust assumption (no defensive clamping) means loader layer must sanitize; if loader passes negative counts, formal domain breaks. Singularity: win rate denominator w+l=0. The function returns publicWinRate but if allowed with w=l=0, division by zero. Is that covered? The rules say if c >= m and not all recent bootstrap, allowed. But c could be >= m with w=l=0 (all pushes?). Then win rate undefined. That's a gray zone. Also pendingCount is in input but not used in rules—gray zone. bootstrapCount input not directly used except maybe for operatorMessage? Another gray zone.
- Multi-week traps: 14-day window means bootstrap streaks persist two weeks.

SOURCE_OPERATORS_AND_EQUATIONS: Formal math, LaTeX, units, page citations. Around 250-300 words.

RETROCAUSAL_GENEALOGY: Around 200 words.

RECURSIVE_THEORY_OF_MIND: Around 200 words.

CROSS_LAYER_VETO_ADJUDICATION: Around 200 words.

RLVR_COUNTERFACTUAL_VETOES: Around 200 words.

Total likely >1000.

Let me write carefully, ensuring XML tags exactly as specified.

No markdown code blocks inside? I can use LaTeX inline. The user wants formal LaTeX equations.

Let's draft.

---

<THINK_TRACE>
...
</THINK_TRACE>

I'll make sure to include [PAGE 1] markers and verbatim quotes like "can this surface make a public performance claim right now?" and "bootstrap picks are not in any of the counts the policy reads".

Let me write the full response now.

Double-check: NO betting lines. I will not mention spreads, totals, moneylines, odds. I will refer to "win-rate" only as it appears in the source, and "picks" as data records. That's fine.

Word count: Let me estimate. THINK_TRACE alone needs 400+. I'll write generously.

Let's go.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of ADR 001 — Public Performance Policy as the Single Source of Truth [PAGE 1].

Hop 1: Context problem → decision mapping. The document lists three audit failures [PAGE 1]: (1) inconsistency, where the dashboard counted PUSH in the denominator while the performance page did not, and the daily-slate API returned recentRecord regardless of the canExposePerformanceStats gate; (2) bootstrap leakage, where the dashboard's 14-day list did not filter on isBootstrap: false, allowing a bootstrap streak to be exposed as a real win rate; and (3) gate bypass, where the dashboard did not reference getReadinessGates().canExposePerformanceStats at all [PAGE 1]. The decision introduces evaluatePublicPerformancePolicy, a pure, I/O-free function described as "the single decision point for 'can this surface make a public performance claim right now?'" [PAGE 1]. Each rule in the evaluated sequence is a direct countermeasure: rule 1 (gate off) eliminates gate bypass; rule 2 (minimum canonical sample) enforces statistical adequacy; rule 3 (all recent picks bootstrap) eliminates bootstrap leakage; and the unified return object eliminates inconsistency by forcing every customer-facing surface to compute counts through the same function [PAGE 1].

Hop 2: Short-circuit veto chain and domain boundaries. The rules are evaluated in strict order, producing a cascade of vetoes. If g = canExposePerformanceStats is false, the function blocks with reason GATE_OFF_PERFORMANCE_STATS before any count is inspected [PAGE 1]. If g is true but canonicalSettledCount c < minCanonical m, it blocks with INSUFFICIENT_CANONICAL_SAMPLE [PAGE 1]. If g is true, c ≥ m, but the recent window is entirely bootstrap (recentTotalCount r equals recentBootstrapCount r_b with r > 0), it blocks with ALL_RECENT_PICKS_BOOTSTRAP [PAGE 1]. Only when all three vetoes fail does the function return allowed, embedding the disclaimer "Past performance does not guarantee future results" into publicMessage [PAGE 1]. Gray zone 1: pendingCount and bootstrapCount appear in the input signature but do not participate in the veto logic; they are presumably reserved for operatorMessage or minimumRequirements, but the ADR does not formalize their use [PAGE 1]. Gray zone 2: the policy "trusts its inputs" and explicitly rejects defensive input clamping [PAGE 1]. If the loader layer passes negative counts or a canonicalSettledCount that includes pushes inconsistently, the formal domain breaks silently; there is no saturation or NaN guard specified [PAGE 1]. Gray zone 3: the publicWinRate computation is not explicitly defined in the ADR, but context implies the performance page did not count PUSH in the denominator, suggesting ρ = canonicalWins / (canonicalWins + canonicalLosses) with a singularity at canonicalWins + canonicalLosses = 0 [PAGE 1]. If c ≥ m is satisfied entirely by pushes, the function would be allowed yet the win rate is undefined—a breakdown regime not addressed in the text [PAGE 1].

Hop 3: Temporal and operational traps. The context references a "14-day list" for the dashboard's bootstrap filter failure [PAGE 1]. Because bootstrap picks are excluded from canonical counts but the recent window is a separate input, a bootstrap streak can dominate the recent window for up to 14 days while canonical sample remains sufficient, triggering rule 3 only if r_b = r exactly [PAGE 1]. The two-query-per-page consequence (counts for the policy plus display data) is described as O(milliseconds) at scale [PAGE 1]. This creates a deterministic but doubled read path; under load spikes or read-replica lag, the two queries could observe different database states, creating a transient consistency window not mitigated by the pure function itself [PAGE 1]. Multi-region rollouts and per-tier variations are explicitly out of scope; the gate is a single boolean today [PAGE 1]. This means no staggered feature-flag protection exists if the gate is toggled globally, and no territorial granularity to contain a bad rollout [PAGE 1].

Hop 4: Verifiability and testing surface. The ADR lists four tested invariants [PAGE 1]: public-performance-policy.test.ts (mapping table), dashboard-performance-gate.test.ts (every API + page references the policy or gate), policy-only-winrate.test.ts (no ad-hoc win-rate math elsewhere), and metadata-banned-phrases.test.ts (metadata never contains banned hype, including description) [PAGE 1]. These tests institutionalize the policy boundary, but they cannot catch loader-layer input malformation because the policy trusts its inputs [PAGE 1]. The asymmetry between publicMessage (brand-safe) and operatorMessage (cockpit-precise, internal vocabulary such as canonical, bootstrap, PERFORMANCE_STATS_ENABLED) is deliberate [PAGE 1]. This dual-channel output reduces customer-facing risk but increases operator cognitive load: the cockpit must translate between internal and external vocabularies without introducing drift [PAGE 1].

Overall, ADR 001 trades operational simplicity (two queries, one boolean gate, no clamping) for architectural centrality. The gray zones—input trust, undefined win-rate singularity, unused inputs, and cross-query consistency—are the exact regimes where a future contributor is most likely to reintroduce the ad-hoc math the ADR was designed to eliminate [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formalization of evaluatePublicPerformancePolicy [PAGE 1]. All citations refer to [PAGE 1], the sole source page.

Let the input vector be
\[
\mathbf{x} = (g, m, c, b, p, w, \ell, u, r, r_b) \in \{0,1\} \times \mathbb{N}_0^9
\]
where \(g = \text{canExposePerformanceStats}\) (readiness gate, dimensionless boolean), \(m = \text{minCanonical}\) (platform-config minimum settled picks, unit: count), \(c = \text{canonicalSettledCount}\) (count of settled non-bootstrap picks), \(b = \text{bootstrapCount}\), \(p = \text{pendingCount}\), \(w = \text{canonicalWins}\), \(\ell = \text{canonicalLosses}\), \(u = \text{canonicalPushes}\), \(r = \text{recentTotalCount}\), \(r_b = \text{recentBootstrapCount}\) [PAGE 1]. Counts are unitless nonnegative integers.

The policy output is
\[
\mathcal{P}(\mathbf{x}) = (\beta, \mathcal{R}, \rho, (w,\ell,u), \mu_{\text{pub}}, \mu_{\text{op}}, \mathcal{M})
\]
where \(\beta \in \{\text{block}, \text{allow}\}\), \(\mathcal{R}\) is a reason code, \(\rho \in [0,1]\) is the public win rate (dimensionless probability), \((w,\ell,u)\) is the public record, \(\mu_{\text{pub}}\) is the customer-safe message with disclaimer baked in, \(\mu_{\text{op}}\) is the cockpit-precise operator message, and \(\mathcal{M}\) is minimumRequirements [PAGE 1].

The veto chain is evaluated in short-circuit order [PAGE 1]:
\[
\mathcal{P}(\mathbf{x}) =
\begin{cases}
(\text{block}, \text{GATE\_OFF\_PERFORMANCE\_STATS}, \varnothing, \varnothing, \mu_{\text{pub}}, \mu_{\text{op}}, \mathcal{M}) & \text{if } g = 0 \\[4pt]
(\text{block}, \text{INSUFFICIENT\_CANONICAL\_SAMPLE}, \varnothing, \varnothing, \mu_{\text{pub}}, \mu_{\text{op}}, \mathcal{M}) & \text{if } g = 1 \land c < m \\[4pt]
(\text{block}, \text{ALL\_RECENT\_PICKS\_BOOTSTRAP}, \varnothing, \varnothing, \mu_{\text{pub}}, \mu_{\text{op}}, \mathcal{M}) & \text{if } g = 1 \land c \ge m \land (r = r_b \land r > 0) \\[4pt]
(\text{allow}, \text{OK}, \rho, (w,\ell,u), \mu_{\text{pub}}, \mu_{\text{op}}, \mathcal{M}) & \text{otherwise}
\end{cases}
\]
where the public win rate, when exposed, is implicitly
\[
\rho = \frac{w}{w + \ell}, \qquad w + \ell > 0
\]
with dimensionless units and a singularity/breakdown regime at \(w + \ell = 0\) [PAGE 1]. Pushes \(u\) are excluded from the denominator, consistent with the performance page's existing behavior described in the context [PAGE 1]. The bootstrap-leakage indicator is
\[
\Lambda = \mathbb{I}[r_b = r \land r > 0],
\]
which is dimensionless and equals 1 exactly when rule 3 triggers [PAGE 1].

Operational complexity: two queries per page, count retrieval \(T_{\text{counts}} = O(\text{milliseconds})\) at scale [PAGE 1]. The function is pure and I/O-free, enabling exhaustive unit testing without a database [PAGE 1]. The ADR explicitly opts out of defensive input clamping, trusting the loader layer for well-formed counts [PAGE 1]. Because the gate is a single boolean today, there is no multi-region or per-tier state space; adding either would require extending \(\mathbf{x}\) and \(\mathcal{P}\) inside the policy, not at the page layer [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The single-source-of-truth pattern in ADR 001 descends from a lineage of architectural decisions that separate capability from application [PAGE 1]. The readiness gate getReadinessGates() concerns capability ("can we expose this?"), while evaluatePublicPerformancePolicy concerns application ("here is the message, the record, the win rate") [PAGE 1]. This mirrors the historical separation of feature-flag evaluation from business-rule enforcement: gates are boolean and coarse, whereas policies are structured, message-bearing, and testable [PAGE 1]. The rejection of the "gate-only" alternative—duplicating sample-size and bootstrap detection at every call site—echoes the software-engineering trap of distributed ad-hoc logic, where each surface re-derives the same predicate and eventually diverges [PAGE 1].

Bootstrap leakage itself is a variant of data leakage: non-settled or synthetic records (isBootstrap: true) bleeding into customer-facing aggregates as though they were observed outcomes [PAGE 1]. The 14-day dashboard window mentioned in context [PAGE 1] creates a multi-week trap: a bootstrap streak can masquerade as a real streak for up to two weeks before settling or rotating out of the window. Rule 3 (ALL_RECENT_PICKS_BOOTSTRAP) is the temporal firewall, but it only triggers when the entire recent window is bootstrap; mixed windows with sufficient canonical count still pass, leaving partial-bootstrap exposure unexamined by the veto chain [PAGE 1].

The tested invariants represent institutional memory encoded as tests: public-performance-policy.test.ts, dashboard-performance-gate.test.ts, policy-only-winrate.test.ts, and metadata-banned-phrases.test.ts [PAGE 1]. These are multi-week traps in reverse—they catch regressions long after the original authors have moved on. The metadata-banned-phrases test extends the policy boundary into SEO/metadata, ensuring the description field never contains hype [PAGE 1], which is a retrocausal control: it prevents future marketers from reintroducing prohibited language through a channel the ADR does not directly govern.

The out-of-scope items—defensive clamping, multi-region rollouts, per-tier variations—are deliberate architectural deferrals [PAGE 1]. Each is a future trap: if the system scales to regions or tiers without first moving those dimensions into the policy input vector, contributors will re-introduce ad-hoc conditionals at the page layer, exactly the inconsistency the ADR abolished [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under incident pressure, the most likely regression is for a contributor to bypass evaluatePublicPerformancePolicy and query db.pick.findMany directly, recreating the exact pre-ADR state where the dashboard showed whatever the database returned without referencing getReadinessGates().canExposePerformanceStats [PAGE 1]. This is the "old habit" the ADR was designed to extinguish. The counter-trap is the test suite: dashboard-performance-gate.test.ts asserts every relevant API and page references the policy or the gate, and policy-only-winrate.test.ts asserts no other file performs ad-hoc win-rate math [PAGE 1]. These tests act as a recursive theory of mind for the codebase—they model what a future developer might do wrong and fail the build if they do it.

Clock: the 14-day recent window [PAGE 1] functions as a temporal clock. A bootstrap streak injected today remains in the recent window for up to fourteen days. If canonicalSettledCount already satisfies minCanonical, rule 3 does not fire unless r_b = r exactly; a mixed recent window of bootstrap and settled picks could pass all three vetoes while still containing bootstrap contamination in the display layer if the display logic does not itself filter bootstrap [PAGE 1]. The policy reads only canonical non-bootstrap counts for its decision [PAGE 1], but nothing in the ADR prevents the display query from joining bootstrap records afterward unless the page strictly uses the policy's publicRecord and publicWinRate outputs.

The asymmetry of messages creates a second-order theory-of-mind risk: operators see operatorMessage with precise internal vocabulary (canonical, bootstrap, PERFORMANCE_STATS_ENABLED) while customers see brand-safe publicMessage with the disclaimer [PAGE 1]. Under crisis, an operator might misread the internal vocabulary and override the gate based on a partial understanding, or a customer-facing developer might cache publicMessage and skip the policy call on reload, breaking the single-source-of-trust invariant. The two-query pattern (counts + display data) adds a read-replica lag window where the count query and the display query observe different database states; the pure function cannot reconcile that divergence because it is I/O-free and stateless [PAGE 1].
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: The policy requires two queries per page—one for counts, one for display data [PAGE 1]. At scale these are O(milliseconds), but the physical layer introduces read-replica latency and possible non-repeatable reads between the two queries [PAGE 1]. The rejected API-driven alternative (calling /api/performance) was rejected partly due to latency for synchronous server components [PAGE 1], confirming the physical layer constraint that the policy must be evaluated in-process, synchronously, without a network round trip. Biomechanical/human layer: new contributors must learn the policy boundary before adding any customer-facing claim; CONTRIBUTING.md captures this [PAGE 1]. The cognitive load is split across two vocabularies—internal (canonical, bootstrap, PERFORMANCE_STATS_ENABLED) for operatorMessage and brand-safe for publicMessage [PAGE 1]. A contributor who internalizes only one vocabulary risks leaking internal terms to customers or omitting the disclaimer. Weather/environmental layer: no meteorological variable appears in the source [PAGE 1], but the operational environment is relevant. Multi-region rollouts and per-tier variations are out of scope today; the gate is a single boolean [PAGE 1]. If the system deploys to regions with staggered feature-flag propagation, the single boolean becomes a global veto with no territorial circuit breaker, and a bad toggle affects all regions simultaneously.

Veto adjudication proof: The policy is a three-stage veto with no bypass [PAGE 1]. Stage 1: if g = 0, the surface is vetoed before any statistical reasoning [PAGE 1]. Stage 2: if c < m, the surface is vetoed for insufficient canonical sample [PAGE 1]. Stage 3: if Λ = 1 (all recent picks bootstrap), the surface is vetoed to prevent bootstrap leakage [PAGE 1]. Only after all three vetoes fail does the function emit an allow decision with publicWinRate, publicRecord, and the baked-in disclaimer [PAGE 1]. Because every customer-facing surface must call this function [PAGE 1], no surface can present a win rate or record that the policy has not cleared. The veto is total: there is no partial-exposure mode, no PRO/FREE tier differentiation, and no regional exception [PAGE 1]. The proof of correctness relies on the loader layer providing well-formed counts, because the policy explicitly declines defensive clamping [PAGE 1]; if the physical or loader layer delivers malformed counts, the veto chain operates on garbage-in, garbage-out principles.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios, each with a prediction and verification path tied to [PAGE 1].

Scenario 1 — Gate bypass under incident pressure. Counterfactual: a production incident causes a developer to revert the dashboard to a direct db.pick.findMany query, ignoring getReadinessGates().canExposePerformanceStats, while g = false. Veto: rule 1 would block with reason GATE_OFF_PERFORMANCE_STATS if the policy were called; because the bypass omits the policy call, the veto fails by omission. Prediction: if the system is instrumented to require evaluatePublicPerformancePolicy before any public record render, the bypass is caught at compile or test time by dashboard-performance-gate.test.ts [PAGE 1], and the customer surface displays only the baked-in publicMessage disclaimer rather than a fabricated record. Verifiable: the test asserts every relevant API and page references the policy or the gate [PAGE 1]; a direct findMany call fails this invariant.

Scenario 2 — Insufficient canonical sample with synthetic padding. Counterfactual: the loader pads canonicalSettledCount with settled-but-bootstrap-adjacent records so that c = 4 while minCanonical m = 5, and the recent window contains 3 genuine settled picks. Veto: rule 2 blocks with INSUFFICIENT_CANONICAL_SAMPLE because g = 1 and c < m [PAGE 1]. Prediction: publicWinRate and publicRecord are not exposed; the surface returns the block reason and minimumRequirements indicating that 1 more canonical settled pick is needed. Verifiable: public-performance-policy.test.ts contains the mapping table for c < m [PAGE 1]; the policy returns block before computing ρ, avoiding division by a non-canonical denominator.

Scenario 3 — Entirely bootstrap recent window masquerading as a streak. Counterfactual: canonicalSettledCount satisfies c ≥ m, but recentTotalCount r = 10 and recentBootstrapCount r_b = 10 over the 14-day window [PAGE 1]. Veto: rule 3 blocks with ALL_RECENT_PICKS_BOOTSTRAP because Λ = 1 [PAGE 1]. Prediction: the bootstrap streak is never exposed as a real win rate to a logged-in user; publicMessage contains the disclaimer and no streak data, and operatorMessage records the internal reason. Verifiable: this is the direct remediation of context problem 2 (bootstrap leakage in the 14-day list) [PAGE 1], and public-performance-policy.test.ts verifies the mapping from r = r_b > 0 to block [PAGE 1]. If the policy were absent, the old dashboard would have exposed the bootstrap streak as a real win rate; with the policy, the counterfactual outcome is deterministically blocked.
</RLVR_COUNTERFACTUAL_VETOES>