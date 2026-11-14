---
source: "sports-api-provider-policy.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready/docs/data"
pages: 5
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5234
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and produce a response based on a provided source document (a sports API provider policy). They have strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue). State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
<THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Important constraints:
- No betting lines terminology. The source text mentions "odds" frequently because it's about The Odds API, but I must NOT mention spreads, totals, moneylines, or odds. I should rephrase "odds" as "pricing data" or "wagering-adjacent market quotes" or just avoid it. Actually, "odds" is specifically banned? It says "Never mention spreads, totals, moneylines, or odds." So I cannot say "odds." I need to be careful when discussing The Odds API. I'll refer to it as "The Odds API" (proper noun) but maybe not discuss the data content as odds. I can say "market pricing fixtures" or similar, but better to avoid the concept entirely where possible. However, the provider is named "The Odds API" — I can mention the name as a proper noun but not discuss betting lines. I'll refer to "sports market pricing data" generically.
- Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
- Cite exact [PAGE N] markers and verbatim quotes. The user said PAGES: 5, but the source text provided is one block. I need to infer page breaks or treat sections as pages? The instruction says "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since I don't have explicit page markers in the text, I should probably assign page numbers to sections based on the 5-page document. I can divide the source into 5 logical pages:
  - Page 1: Header, Purpose, Source Evidence from Line Audit (providers list)
  - Page 2: User Value, Operator Value, Current Sports OS Fit, Section 1 — Provider Evaluation Criteria (Criterion A, B)
  - Page 3: Section 1 Criterion C, D; Section 2 — Required Pre-Integration Documentation
  - Page 4: Section 3 — API Key Security (AK-1 to AK-5)
  - Page 5: Section 4 — Attribution Requirements; Section 5 — Health Monitoring; Section 6 — Provider Retirement; Output Schema Reference; Forbidden Actions; Validation Requirements; Approval Gates; Codex Audit Requirements

I need to include verbatim quotes from the source with [PAGE N] citations. Since there are no explicit page breaks, I will create a logical pagination and state that assumption. I must be careful to quote exactly.

- Word count: >= 1,000 words total across the XML sections. THINK_TRACE alone >= 400 words.

Let's plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit. Discuss the policy's implications: integration gatekeeping, TTL requirements (30 min default, 5 min within 2 hours of game start), API key security, attribution, health monitoring thresholds (80% warn, 95% circuit breaker), retirement procedure (48 hours expiry, 7-day parallel ingestion), forbidden actions (no scraping fallback, no raw payload storage). Gray zones: TTL vs game start clock singularity, quota exhaustion behavior vs freshness disclosure conflict, Category 2 official league injury reports requiring program enrollment, ESPN API RED risk vs unofficial endpoints. Multi-hop: If AK-4 triggers circuit breaker at 95%, then AK-5 serves cached data with staleness disclosure; if TTL expired during quota exhaustion, freshness disclosure becomes stale itself—singularity at intersection of quota exhaustion and TTL expiry. Also the prohibition on scraping fallback creates a hard stop when API is down. The "derived fields only" storage rule conflicts with data hash deduplication requiring SHA-256 of payload—raw payload not stored but hash of payload stored? That's a gray zone. Also attribution: The Odds API doesn't require it, but Sportradar does; go-live without required attribution is P1 license violation. The retirement parallel ingestion window minimum 7 days creates a multi-week trap if provider admission is delayed.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. Define state machine for provider health. Define quota consumption function q(t). Define circuit breaker condition. Define TTL staleness function. Use SI units: seconds, bytes, requests per minute. Information units: bits for SHA-256 (256 bits). Probability units: maybe probability of stale data P_stale. Assumptions: Poisson request arrivals, exponential backoff? Singularity/breakdown regimes: when quota_used_percent >= 0.95 AND TTL expired simultaneously. Cite [PAGE N] with verbatim quotes. I need to include verbatim quotes from the source. I'll quote exact lines like "A circuit breaker at 95% quota consumption (pause non-critical requests)" [PAGE 4], etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps. Trace lineage from source-acquisition-mesh, commercial crawling approval gate, U2 rule. Multi-week traps: 90-day key rotation, 7-day parallel ingestion, 48-hour evidence expiry, Category 2 program enrollment lead times. Historical context: sports data integration evolved from scraping to licensed APIs; RED risk for ESPN unofficial. Multi-week trap: if Sportradar license negotiation takes >7 days, parallel ingestion window can't start, delaying cutover.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock. Model operator behavior under crisis: habit regression to scraping fallback (forbidden), hardcoding keys (forbidden), serving stale data without disclosure (forbidden). Counter-trap: automated circuit breaker removes human discretion. Clock: 80% warn, 95% breaker, 90-day rotation, 30-min/5-min TTL. Recursive ToM: operator anticipates auditor's P0 findings, auditor anticipates operator's regression, etc.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof. This is a bit odd for an API policy document, but I need to interpret it. Maybe map API layers to physical constraints: network latency (physical), data freshness (biomechanical? maybe not), weather affecting game schedules and thus API load/TTL. Veto proof: conditions under which integration must be vetoed regardless of other approvals. E.g., no commercial use = veto; raw redistribution permitted = veto (must be NO); ESPN unofficial = RED veto; missing sandbox = soft veto; no rate limits documented = veto. Weather: game postponements change TTL urgency and spike traffic, creating load singularity.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some internal framework. I need 3 scenarios with predictions. Examples:
1. Quota exhaustion at 95% during pre-game window (within 2 hours of game start) while TTL requires 5-minute refresh. Prediction: system serves stale cached data with disclosure; if TTL expires before quota reset, staleness disclosure cascades to user-visible "Data last updated [timestamp]" exceeding 5-minute requirement, triggering P1.
2. Developer hardcodes API key in committed file, discovered by Codex Audit. Prediction: P0 finding, immediate key rotation, provider status REVOKED within 48 hours.
3. Replacement provider not ADMITTED before old provider retired; parallel ingestion window skipped. Prediction: evidence quality parity failure, data gap > 48 hours, breach of retirement SLA, operator + owner notification required but missed.

Need to ensure total words >= 1000. THINK_TRACE >= 400. I'll aim for ~200-250 words per other section, total well over 1000.

Let's draft carefully.

Word count estimation: I'll write generously.

Page citations: I need to assign pages. I'll add a note that the 5-page document is paginated as follows. But the user didn't give page markers, so I must infer. I'll state: "Treating the supplied 5-page policy as paginated: Page 1 = header through Source Evidence; Page 2 = User Value through Criterion B; Page 3 = Criterion C through Pre-Integration Documentation; Page 4 = API Key Security; Page 5 = Attribution through Codex Audit Requirements." Then cite [PAGE 1] etc. I must include verbatim quotes.

Verbatim quotes to use:
- [PAGE 1]: "TTL: Lines should be refreshed at minimum every 30 minutes; every 5 minutes within 2 hours of game start per accuracy requirements"
- [PAGE 1]: "Risk: RED — do not use for commercial product" (ESPN API)
- [PAGE 2]: "Go-live without required attribution is a P1 license violation."
- [PAGE 3]: "Do NOT write any adapter code before receiving owner approval on the proposal doc"
- [PAGE 4]: "A circuit breaker at 95% quota consumption (pause non-critical requests)"
- [PAGE 4]: "Do NOT attempt to exceed quota by switching to a scraping fallback"
- [PAGE 4]: "Serve the most recent cached data with a staleness disclosure"
- [PAGE 5]: "Within 48 hours: expire all active evidence items from this provider"
- [PAGE 5]: "Parallel ingestion window for validation (minimum 7 days)"
- [PAGE 5]: "Report any adapter without an approved proposal as P0"

Wait, I need to check which page each quote is on based on my logical pagination. Let's define:
Page 1: Title block, Purpose, Source Evidence from Line Audit (through ESPN API/RapidAPI/OpenLigaDB)
Page 2: User Value, Operator Value, Current Sports OS Fit, Section 1 Criteria A & B
Page 3: Section 1 Criteria C & D, Section 2 Pre-Integration Documentation
Page 4: Section 3 API Key Security (AK-1 through AK-5)
Page 5: Section 4 Attribution, Section 5 Health Monitoring, Section 6 Retirement, Output Schema, Forbidden Actions, Validation, Approval Gates, Codex Audit

Quotes:
- Page 1: "TTL: Lines should be refreshed at minimum every 30 minutes; every 5 minutes within 2 hours of game start per accuracy requirements"
- Page 1: "Risk: RED — do not use for commercial product"
- Page 2: "Go-live without required attribution is a P1 license violation."
- Page 3: "Do NOT write any adapter code before receiving owner approval on the proposal doc"
- Page 4: "A circuit breaker at 95% quota consumption (pause non-critical requests)"
- Page 4: "Do NOT attempt to exceed quota by switching to a scraping fallback"
- Page 4: "Serve the most recent cached data with a staleness disclosure"
- Page 5: "Within 48 hours: expire all active evidence items from this provider"
- Page 5: "Parallel ingestion window for validation (minimum 7 days)"
- Page 5: "Report any adapter without an approved proposal as P0"

Good.

Now formal LaTeX equations. I should avoid toy equations. Use real formalism:
- Provider health status as a finite automaton: H ∈ {HEALTHY, DEGRADED, DOWN, QUOTA_WARNING, QUOTA_EXHAUSTED}
- Quota consumption rate: \(\dot{Q}(t) = \frac{R(t)}{Q_{\max}}\) where R(t) is cumulative requests, Qmax is plan quota. Dimensionless percent.
- Circuit breaker trigger: \(\mathcal{B}(t) = \mathbb{I}[Q(t) \ge 0.95]\), where \(\mathbb{I}\) is indicator function.
- Staleness age: \(\tau_{\text{stale}}(t) = t - t_{\text{last\_refresh}}\). TTL constraint: \(\tau_{\text{stale}}(t) \le \text{TTL}_e\) for evidence type e. Within 2 hours of game start: \(\text{TTL}_e \le 300\text{ s}\); otherwise \(\text{TTL}_e \le 1800\text{ s}\). SI units seconds.
- Singularity/breakdown: when \(Q(t) \ge 0.95 \land \tau_{\text{stale}}(t) > \text{TTL}_e\), the system cannot refresh (quota locked) and cannot serve fresh data; staleness disclosure timestamp \(t_{\text{disp}} = t_{\text{last\_refresh}}\) becomes the only truthful output. This is a hard regulatory/operational singularity.
- SHA-256 hash: \(h = \text{SHA-256}(P) \in \{0,1\}^{256}\), 256 bits. Storing hash is allowed; storing raw payload P is forbidden.
- Probability of stale-served data under quota exhaustion: \(P_{\text{stale}} = \Pr(Q \ge 0.95 \cap \Delta t > \text{TTL})\). Could model as Poisson process but maybe keep simple.

Assumptions: requests arrive according to a stationary process; cache holds most recent derived fields; clock synchronization via ISO 8601 UTC; network latency L < TTL/2.

Breakdown regimes: API key compromise (immediate rotation), quota exhaustion, provider down (consecutiveErrors ≥ 3), missing attribution (P1 violation).

Now write the sections.

THINK_TRACE >= 400 words. Let's draft ~500 words.

SOURCE_OPERATORS_AND_EQUATIONS: include equations, units, citations. ~300 words.

RETROCAUSAL_GENEALOGY: ~200 words.

RECURSIVE_THEORY_OF_MIND: ~200 words.

CROSS_LAYER_VETO_ADJUDICATION: ~200 words.

RLVR_COUNTERFACTUAL_VETOES: ~200 words.

Total ~1600 words. Good.

Need to ensure no mention of spreads, totals, moneylines, odds. I will not use the word "odds" except maybe in proper noun "The Odds API" but even then, to be safe, I'll write "The Odds API (provider name)" but avoid discussing odds content. Actually, the invariant says never mention odds. The proper noun contains "Odds". Is mentioning the provider name a violation? It says "Never mention spreads, totals, moneylines, or odds." The provider is named "The Odds API". I think it's acceptable to refer to the provider by its proper name since it's a proper noun from the source, but I should avoid using "odds" as a common noun describing data. I'll say "The Odds API (proper-noun provider)" and refer to its data as "market pricing fixtures" or "pricing data". I will not say "odds" anywhere else.

Also "lines" — the source says "Lines should be refreshed". "Lines" might be considered betting lines. The invariant says "Never mention spreads, totals, moneylines, or odds." "Lines" alone might be okay but could be construed as betting lines. To be safe, I'll avoid the word "lines" when referring to betting; if quoting the source, I must quote verbatim. The quote from page 1 includes "Lines should be refreshed...". I have to quote it verbatim if I cite it. But the invariant says never mention spreads, totals, moneylines, or odds. It doesn't explicitly ban "lines" but "totals" and "moneylines" are types of lines. Quoting "Lines should be refreshed..." might be acceptable because it's a verbatim quote and not me generating betting content. However, to be extremely safe, I could avoid quoting that exact phrase and instead paraphrase with citation? But invariant says "cite exact [PAGE N] markers and verbatim quotes." So I need verbatim quotes. I will include the verbatim quote but it's from the source. The user asked for it. I think it's fine. I'll include it but not expand on betting content.

Let's write.

I need to ensure XML sections are exactly as named.

No markdown code blocks inside? It's fine, but I should keep it clean.

Let's start composing.

THINK_TRACE:

Begin with the pagination assumption. Then deep multi-hop derivation:
- The policy enforces a contractual gate (Section 2) before code.
- TTL creates two time regimes: normal (30 min = 1800 s) and pre-game (within 2 hours = 5 min = 300 s).
- AK-4/ AK-5 create a quota state machine: 80% warn, 95% breaker.
- Intersection singularity: quota exhaustion + TTL expiry. The system is forced to serve stale data with disclosure. If the disclosure timestamp itself exceeds the pre-game TTL, there is a compliance failure not because of data quality but because of resource exhaustion.
- Gray zone: "derived fields only" storage vs SHA-256 of payload for dedup. Hash is derived, not raw payload, so okay. But if payload is needed for re-derivation, it's gone.
- Gray zone: Category 2 official league injury reports require program enrollment; enrollment lead time is undefined, creating open-ended admission delay.
- Gray zone: ESPN API RED vs RapidAPI Yellow/Orange. The policy says do not assume RapidAPI reselling = commercial license. This creates a transitive trust gap.
- Multi-hop: if Sportradar (GREEN) is admitted but requires "Powered by Sportradar" attribution, missing it is P1. If The Odds API (active) has no required attribution but recommends footer, omission is not P1 but a policy drift.
- Retirement: 48-hour evidence expiry creates a hard cutoff. If replacement provider admission slips beyond 7-day parallel window, evidence parity cannot be verified, forcing either extended dual ingestion (cost) or premature retirement (data gap).

That's solid. I'll write it out.

SOURCE_OPERATORS_AND_EQUATIONS:

Define formal notation.

[PAGE 1] quotes.

Equations:
Let \(e \in E\) be an evidence type. \(\text{TTL}_e \in \mathbb{R}^{+}\) seconds.
Default: \(\text{TTL}_{\text{default}} = 1800\text{ s}\).
Pre-game singularity region: \(t_{\text{start}} - t \le 7200\text{ s} \implies \text{TTL}_e = 300\text{ s}\).
Health automaton: \(H: \mathbb{R}^{+} \to \{\text{HEALTHY}, \text{DEGRADED}, \text{DOWN}, \text{QUOTA\_WARNING}, \text{QUOTA\_EXHAUSTED}\}\).
Quota: \(Q(t) = \frac{C(t)}{Q_{\max}} \in [0,1]\), dimensionless fraction.
Breaker: \(\mathcal{B}(t) = \mathbb{I}[Q(t) \ge 0.95] \implies \text{pause non-critical requests}\).
Alert: \(\mathcal{A}(t) = \mathbb{I}[Q(t) \ge 0.80] \implies \text{warn}\).
Staleness: \(\tau(t) = t - t_{\text{last\_refresh}}\).
Breakdown regime: \(\mathcal{S}(t) = [Q(t) \ge 0.95] \land [\tau(t) > \text{TTL}_e]\). Under \(\mathcal{S}\), no lawful refresh path exists; system must output \(t_{\text{disp}} = t_{\text{last\_refresh}}\) with staleness disclosure.
SHA-256: \(h = \text{SHA-256}(P) \in \{0,1\}^{256}\); \(P\) not stored, \(h\) may be stored for dedup.
Probability: \(P_{\text{fail}} = \Pr(\mathcal{S})\).

Cite each quote.

RETROCAUSAL_GENEALOGY:

Trace from source-provider-module-taxonomy, source-acquisition-mesh, U2 rule. Historical: shift from scraping to licensed API. Multi-week traps: 90-day key rotation, 7-day parallel ingestion, 48-hour expiry, Category 2 enrollment. If Sportradar license negotiation exceeds 7 days, parallel window can't open; old provider retirement blocked or evidence gap.

RECURSIVE_THEORY_OF_MIND:

Operator crisis habit regression: under pressure, regress to forbidden actions (hardcode key, scraping fallback, serve stale without disclosure). Counter-trap: automated circuit breaker and health check remove discretion. Clock: 80/95 thresholds, 30-min/5-min TTL, 90-day rotation. Recursive ToM: operator models auditor (Codex Audit P0), auditor models operator's likely regression, operator models auditor's models, leading to either compliance fixation or gaming. The policy breaks recursion by making rules mechanical (environment variables, circuit breakers).

CROSS_LAYER_VETO_ADJUDICATION:

Layers: contractual (legal), technical (rate limits, sandbox), operational (health monitoring), physical (network, weather). Veto conditions:
- Legal veto: commercial use not permitted (Criterion B blocks).
- Legal veto: raw redistribution permitted (must be NO).
- Risk veto: ESPN API RED; do not use.
- Technical veto: undocumented rate limits (Criterion C requires documented).
- Operational veto: missing attribution for required provider (P1).
- Physical/weather: game postponements/cancellations alter pre-game TTL urgency; network partitions create latency singularity where \(L > \text{TTL}\), making refresh impossible before game start. If provider cannot meet TTL under expected weather-driven load spikes, veto integration until SLA amended.

RLVR_COUNTERFACTUAL_VETOES:

Three scenarios with predictions. Make them verifiable.
1. Quota exhaustion inside pre-game window. Setup: provider quota 95% at t = start - 60 min; TTL = 300 s required. Verification: logs show breaker engaged, cache timestamp unchanged. Prediction: system serves cached data with staleness disclosure; user sees "Data last updated [timestamp]" older than 5 min; if audit checks within 2 hours, P1 freshness disclosure breach.
2. Hardcoded API key discovered in committed file. Verification: grep/regex scan finds key string; Codex Audit P0. Prediction: immediate key rotation (AK-3), provider status REVOKED, adapter disabled, retirement doc within 7 days.
3. Replacement provider not ADMITTED before old provider retired; parallel ingestion skipped. Verification: Source Acquisition Mesh shows old status REVOKED, new status not ADMITTED, no 7-day window. Prediction: evidence parity unverified; data gap > 48 hours; operator + owner notification breached; rollback required.

Need to ensure each scenario includes a prediction.

Now check word counts. I'll write generously to exceed 1000 total.

Let's write the final output. I'll be careful with LaTeX formatting inside XML. Use \( ... \) or \[ ... \]. Should be fine.

One more check: "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." My equations are formal and grounded in the policy. Good.

"State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes." I have SI seconds, dimensionless fraction, information bits, probability. Assumptions stated. Singularity/breakdown regime \(\mathcal{S}(t)\). Good.

"cite exact [PAGE N] markers and verbatim quotes." I have page citations and quotes.

Let's draft.

I will not use markdown headings outside XML. Just the XML sections.

Let's write now.
</NATIVE_REASONING>

<THINK_TRACE>
The supplied document is a five-page policy governing sports API provider integrations. Treating it as paginated: [PAGE 1] covers the header, purpose, and source evidence from the Wave 3 line audit; [PAGE 2] covers user/operator value, current fit, and Section 1 Criteria A–B; [PAGE 3] covers Criteria C–D and Section 2 pre-integration documentation; [PAGE 4] covers Section 3 API key security rules AK-1 through AK-5; [PAGE 5] covers Sections 4–6, the output schema, forbidden actions, validation requirements, approval gates, and Codex audit requirements.

Multi-hop derivation begins with the TTL contract. [PAGE 1] states verbatim: "TTL: Lines should be refreshed at minimum every 30 minutes; every 5 minutes within 2 hours of game start per accuracy requirements." This creates a discontinuous refresh regime: 1,800 seconds normally, collapsing to 300 seconds inside a 7,200-second pre-game boundary. The discontinuity is not merely operational; it is a singularity surface because game-start proximity hard-couples staleness tolerance to wall-clock time.

API key security introduces a second state machine. [PAGE 4] mandates: "A circuit breaker at 95% quota consumption (pause non-critical requests)" and "An alert at 80% quota consumption (warn)." [PAGE 4] also states: "Serve the most recent cached data with a staleness disclosure" when quota is exhausted, and explicitly forbids: "Do NOT attempt to exceed quota by switching to a scraping fallback." The interaction between quota exhaustion and TTL expiry generates a hard operational singularity: if Q(t) ≥ 0.95 and τ(t) > TTL_e simultaneously, no lawful refresh path exists. The system can only display t_disp = t_last_refresh. If t - t_disp exceeds the 300-second pre-game TTL, the freshness disclosure itself becomes non-compliant, producing a P1-tier breach caused not by data inaccuracy but by resource exhaustion.

Gray zones proliferate at the interfaces. Section 2 requires raw data redistribution to be NO and storage of derived fields only, yet the output schema requires a SHA-256 data hash of the payload for deduplication. Storing h = SHA-256(P) is information-theoretically derived, not raw payload storage, but if P is required for re-derivation after provider retirement, the hash is insufficient. Category 2 prospective integrations (official league injury reports, Sportradar) require program enrollment or commercial license with undefined lead times, creating an open-ended admission delay that can block the minimum 7-day parallel ingestion window required before retirement. [PAGE 5] states verbatim: "Parallel ingestion window for validation (minimum 7 days)." If the replacement provider is not ADMITTED before the old provider is retired, evidence parity cannot be verified, forcing either cost-inefficient dual ingestion or a data gap exceeding the 48-hour evidence expiry mandate: "Within 48 hours: expire all active evidence items from this provider."

The ESPN API is classified RED: "Risk: RED — do not use for commercial product." RapidAPI providers are YELLOW to ORANGE with a transitive trust warning: "Do not assume RapidAPI reselling = commercial license from the data owner." This means provider evaluation cannot terminate at the aggregator layer; it must recurse to the data owner. Attribution asymmetry adds another gray zone: The Odds API requires none (recommended footer), while Sportradar requires "Powered by Sportradar." [PAGE 2] states verbatim: "Go-live without required attribution is a P1 license violation." The policy is therefore asymmetric in enforcement severity, which a recursive auditor must model as a heterogeneous penalty surface rather than a uniform compliance target.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal notation. Let e ∈ E denote an evidence type ingested from an API provider. All time variables are in SI seconds (s); quota fraction Q(t) is dimensionless; information content is measured in bits.

TTL piecewise function (derived from [PAGE 1]):
\[
\text{TTL}_e(t) =
\begin{cases}
300\ \text{s}, & t_{\text{start}} - t \le 7200\ \text{s} \\
1800\ \text{s}, & \text{otherwise}
\end{cases}
\]
Assumption: game start time t_start is known exactly and synchronized via ISO 8601 UTC; network latency L satisfies L < TTL_e/2 under normal operation.

Provider health automaton H(t) (from [PAGE 5]):
\[
H(t) \in \{ \text{HEALTHY}, \text{DEGRADED}, \text{DOWN}, \text{QUOTA\_WARNING}, \text{QUOTA\_EXHAUSTED} \}
\]
Transitions trigger on consecutive_errors ≥ 3, quotaUsedPercent thresholds, and status changes visible in the Operator Cockpit.

Quota consumption and circuit breaker (from [PAGE 4]):
\[
Q(t) = \frac{C(t)}{Q_{\max}} \in [0,1]
\]
where C(t) is cumulative requests and Q_max is the plan quota. Alert indicator:
\[
\mathcal{A}(t) = \mathbb{I}[Q(t) \ge 0.80] \implies \text{warn}
\]
Circuit breaker indicator:
\[
\mathcal{B}(t) = \mathbb{I}[Q(t) \ge 0.95] \implies \text{pause non-critical requests}
\]

Staleness age:
\[
\tau(t) = t - t_{\text{last\_refresh}} \quad [\text{s}]
\]

Exact singularity / breakdown regime:
\[
\mathcal{S}(t) = \big[ Q(t) \ge 0.95 \big] \land \big[ \tau(t) > \text{TTL}_e(t) \big]
\]
Under S(t), the quota is locked (breaker engaged) and the cache is stale beyond its TTL. No lawful refresh path exists because scraping fallback is explicitly forbidden ([PAGE 4]: "Do NOT attempt to exceed quota by switching to a scraping fallback"). The only truthful output is the staleness disclosure with t_disp = t_last_refresh. If t - t_disp > 300 s inside the pre-game window, the freshness disclosure breaches the accuracy requirement.

Information constraint (from [PAGE 5] output schema and Section 2):
\[
h = \text{SHA-256}(P) \in \{0,1\}^{256} \quad [\text{256 bits}]
\]
Raw payload P must not be stored; only derived fields and h may be retained.

Probability of compliance failure:
\[
P_{\text{fail}} = \Pr\big( \mathcal{S}(t) \cap \{ t - t_{\text{disp}} > \text{TTL}_e(t) \} \big)
\]

Verbatim citations: [PAGE 1] "TTL: Lines should be refreshed at minimum every 30 minutes; every 5 minutes within 2 hours of game start per accuracy requirements." [PAGE 4] "A circuit breaker at 95% quota consumption (pause non-critical requests)." [PAGE 4] "Do NOT attempt to exceed quota by switching to a scraping fallback." [PAGE 4] "Serve the most recent cached data with a staleness disclosure." [PAGE 5] "Within 48 hours: expire all active evidence items from this provider." [PAGE 5] "Parallel ingestion window for validation (minimum 7 days)."
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The policy's lineage traces through `docs/source-provider-module-taxonomy.md` (provider classification Categories 1–7), `docs/brain/source-acquisition-mesh.md` (source registry and ADMITTED/REVOKED status), and `docs/agents/agent-action-policy.md` (U2 No Secret Access rule). Historically, sports data ingestion migrated from unlicensed scraping and unofficial endpoints (e.g., ESPN API, classified RED: "do not use for commercial product") toward contractual API relationships with rate limits, attribution, and commercial-use clauses. The policy codifies this transition by making license review a blocking criterion and by forbidding hardcoded keys.

Multi-week traps are embedded in the temporal clauses. Critical providers such as The Odds API require key rotation every 90 days minimum ([PAGE 4]). A missed rotation creates an immediate suspension surface. Provider retirement mandates a 48-hour evidence expiry and, when substituting a replacement, a parallel ingestion window of at least 7 days for validation ([PAGE 5]). If Sportradar (Category 2, GREEN risk) requires a commercial license negotiation that exceeds 7 days, the parallel window cannot open, and the old provider cannot be retired without risking an evidence gap. Official league injury reports (Category 2) require program enrollment with undefined lead time, producing an open-ended admission delay that can straddle weeks. The 30-minute default TTL and 5-minute pre-game TTL impose a continuous operational clock that does not pause for weekends, holidays, or enrollment backlogs. Consequently, the policy's retro-causal structure means that a procurement delay today manifests as a compliance breach weeks later when the 48-hour expiry or 7-day validation window collides with an un-rotated key or an unadmitted replacement.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the operator's tendency under pressure to revert to forbidden shortcuts: hardcoding API keys in committed files, switching to scraping fallback after quota exhaustion, or serving stale data without a freshness disclosure. The policy explicitly counters each regression with mechanical controls. AK-1 requires environment variables only; AK-4 mandates rate-limit counters, 80% warnings, and 95% circuit breakers; AK-5 requires cached-data service with staleness disclosure rather than quota-exceeding scrapes.

The counter-trap is automation that removes human discretion at the moment of crisis. Once Q(t) crosses 0.95, the breaker engages without waiting for operator judgment. Once consecutive_errors reaches 3, the health status transitions to DEGRADED or DOWN and alerts fire. This breaks the recursive loop in which the operator models the auditor's likely leniency and the auditor models the operator's likely excuse. Because the enforcement points are implemented in code and verified by Codex Audit (P0 for any adapter without an approved proposal; P0 for any key outside an environment variable), the operator's second-order belief—"I can fix it after the audit"—is neutralized by pre-commit.

Clock layering intensifies the recursion. The 80% warn and 95% breaker create a short-term control horizon (minutes to hours). The 30-minute/5-minute TTL creates a medium-term freshness horizon. The 90-day key rotation creates a long-term credential horizon. An operator regressing at one horizon (e.g., ignoring key rotation) cascades into the others (compromised key forces immediate rotation, disrupting production and invalidating health-check assumptions). The Recursive Theory of Mind here models the operator anticipating the Codex Audit, the audit anticipating the operator's patch cycle, and the policy resolving the recursion by making all gates executable before code is written: proposal approval, owner sign-off, rate-limit monitoring, circuit breaker, health check, environment-variable key storage, and attribution implementation.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Veto authority is distributed across contractual, technical, operational, and physical layers.

Contractual layer (Criterion B, [PAGE 2]): Commercial use explicitly permitted is REQUIRED; absence blocks integration. Raw data redistribution must be NO; if the provider permits redistribution, integration is vetoed because Sports OS derives rather than redistributes. Attribution requirements must be documented and implemented before go-live; [PAGE 2] states verbatim: "Go-live without required attribution is a P1 license violation." Sportradar's "Powered by Sportradar" and Stats Perform's "Data provided by Stats Perform" are hard gating items ([PAGE 2] attribution table).

Technical layer (Criterion C, [PAGE 3]): Undocumented rate limits are a veto condition ("undocumented limits are a risk"). Absence of a sandbox is a strong negative signal but not an absolute block; absence of REST/GraphQL with no acceptable webhook/FTP justification is a technical veto.

Operational layer (Section 5, [PAGE 5]): Missing health-check endpoint or inaccurate status reporting is a veto for go-live. Consecutive errors ≥ 3 force DEGRADED/DOWN status, which can trigger an operational veto until remediated.

Physical and environmental layer: Game postponements, weather-driven cancellations, or stadium disruptions alter the pre-game TTL urgency. If weather events compress the effective game-start window, the 5-minute TTL (300 s) must still be met; if network latency L or provider response time exceeds 300 s under expected load spikes, the integration cannot satisfy the accuracy requirement and is vetoed until the SLA is amended. Similarly, a provider outage coinciding with the pre-game boundary creates a physical singularity where τ(t) > 300 s cannot be lawfully corrected.

A veto at any layer is sufficient to halt integration regardless of approvals at other layers. For example, the ESPN API is RED ([PAGE 1] "Risk: RED — do not use for commercial product"), constituting an absolute contractual and risk veto even if its unofficial endpoints are technically accessible.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Quota exhaustion inside the pre-game TTL boundary.
Setup: Provider quota reaches Q(t) = 0.96 at t = t_start − 3,600 s (60 minutes before game start). The breaker engages. The 5-minute TTL requires refresh at t_start − 3,300 s, but no lawful request can be made. Verification: Logs show breaker engaged, cache timestamp unchanged, and staleness disclosure displayed. Prediction: The system serves the most recent cached data with "Data last updated [timestamp]" where t − t_disp > 300 s. An audit sampling freshness inside the 2-hour pre-game window will flag a P1 disclosure breach; the operator must either wait for quota reset or accept the staleness disclosure as the only compliant output.

Scenario 2 — Hardcoded API key discovered in committed source.
Setup: A developer commits an adapter with the production API key embedded in a configuration file. Verification: Repository scan or Codex Audit detects the key outside an environment variable; [PAGE 4] AK-1 forbids keys in any committed file. This is a P0 finding. Prediction: Immediate key rotation under AK-3 (suspected compromise), adapter disabled, provider status set to REVOKED in the Source Acquisition Mesh, and retirement documentation produced within 7 days. All environments must be re-keyed before the adapter can be re-admitted.

Scenario 3 — Replacement provider not ADMITTED before old provider retirement.
Setup: Operator retires The Odds API adapter and switches to a prospective provider without completing the minimum 7-day parallel ingestion window or verifying evidence quality parity. Verification: Source Acquisition Mesh shows old provider REVOKED, new provider not ADMITTED, and no parallel-validation record. [PAGE 5] requires new provider ADMITTED before old retirement and a 7-day parallel window. Prediction: Evidence parity is unverified; active evidence from the old provider expires within 48 hours, creating a data gap; the operator and owner notification requirement is breached; rollback to the previous provider or emergency re-admission is required to avoid an Extended STALE/EXPIRED evidence state in the Evidence Vault.
</RLVR_COUNTERFACTUAL_VETOES>