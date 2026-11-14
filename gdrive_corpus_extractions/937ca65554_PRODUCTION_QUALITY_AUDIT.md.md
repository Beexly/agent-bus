---
source: "PRODUCTION_QUALITY_AUDIT.md"
folder: "/GSN/Galaxy Sports Edge/.codex-worktrees/gse-frontier-recovery"
pages: 9
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4954
---

<NATIVE_REASONING>
The user has provided a detailed production quality audit document for a web app (GSN - Galaxy Sports Edge). They want me to act as the "GSE + GSI Frontier Reasoning Foundry" and produce a response with specific XML sections, strict invariants, and deep reasoning.

Key constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

Wait, the user provided a source document that is a web production quality audit. But the XML sections requested seem to be from a different domain (sports betting analysis?) — "biomechanical", "weather", "crisis habit regression", "counter-trap", "RLVR veto scenarios". This seems like a mismatch. However, I must follow the user's requested format exactly.

I need to:
- Not mention betting lines (spreads, totals, moneylines, odds). Even though the source mentions "sports betting model calibration" and "win-rate", I must avoid betting line terminology.
- Use formal LaTeX equations, not toy ratios.
- Cite exact [PAGE N] markers. The source text doesn't have explicit page numbers like "[PAGE 1]", but it has section markers like §1, §2, etc. I should probably cite sections as [PAGE §1] or similar, or treat sections as pages. The user says "When source pages are provided, cite exact [PAGE N] markers". Since no explicit page numbers exist, I will cite sections as [PAGE §N] or map sections to pages. Actually, looking at the document, it's one document with sections numbered 0-10. I can cite them as [PAGE §1] etc. or [PAGE 1] if I map sections to pages. To be safe, I'll use [PAGE §1], [PAGE §2], etc., or just [PAGE §2] where applicable. But the user explicitly wants [PAGE N] markers. Since the text doesn't have page numbers, I'll use section numbers as page proxies: [PAGE §2], [PAGE §5], etc. Or I can say the document is paginated by section. Let's use [PAGE §X] format to satisfy the citation requirement.

Word count: >= 1,000 words across the sections, with THINK_TRACE >= 400 words.

I need to produce deep multi-hop derivation and gray-zone audit. Since the source is a web audit, but the sections ask for sports-betting-like terminology (biomechanical, weather, crisis habit regression, counter-trap), I need to adapt carefully without violating the "zero betting lines" rule. I can talk about system reliability, observability, SEO structured data, security headers, etc., but frame some of the recursive theory of mind around engineering crisis response rather than sports betting. Wait, "crisis habit regression vs counter-trap vs clock" could refer to incident response patterns. "Physical/biomechanical/weather veto proof" could refer to infrastructure dependencies (physical servers, network latency, weather affecting CDN/edge nodes in iad1). "RLVR counterfactual vetoes" could refer to reinforcement learning verifiable rewards? Or maybe "RLVR" means something else here. But the user said 3 verifiable RLVR veto scenarios + predictions. I can interpret RLVR as "Red Team / Layered Verification and Rejection" or just treat it as a formal verification scenario in the context of the web app. I'll interpret RLVR as "Runtime Logic Validation & Review" scenarios or similar, but keep it grounded in the source document's actual content (web app audit).

Actually, looking at the prompt structure, it seems like a template originally designed for sports analysis, but applied here to a web audit document. I must still fill it out meaningfully using the source document.

Let me plan each section:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Trace dependencies: layout.tsx fonts → LCP → force-dynamic home → TTFB → INP on canvas → no RUM → cannot measure p75 CWV → CI budget unenforceable.
- Gray zones: the `force-dynamic` tradeoff (freshness vs cache), the duplicate JetBrains_Mono (byte cost vs design token separation), the `www` vs apex canonical split (index dilution vs brand preference), the copy-scanner constraint on JSON-LD (marketing prose banned, vetted constants only), the absence of global-error.tsx vs error.tsx scope boundary.
- Multi-hop: If no web-vitals instrumentation exists, then Lighthouse CI cannot be validated by field p75, creating an epistemic gap where lab regressions may not correlate with user experience. This is a measurement singularity: the system is unobservable at the exact percentile that matters (75th field percentile).
- Word count target: 400+.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define CWV threshold inequalities: LCP < 2.0s, INP < 200ms, CLS < 0.1 at p75.
- Font preload redundancy: dead `preconnect` to fonts.googleapis.com/gstatic.com when `next/font` self-hosts.
- HSTS header: `max-age=63072000; includeSubDomains; preload`.
- Canonical mismatch: `SITE_URL` layout `https://www...` vs sitemap/robots apex.
- JSON-LD structured data equation: `@context`, `@type`, `name`, `url`, `description`, `knowsAbout`, `mainEntityOfPage`.
- Health endpoint: `SELECT 1` + freshness `Δt < 2h` else 503 degraded.
- Bundle cost: duplicate JetBrains_Mono instances → 2× preload bytes, no `optimizePackageImports`.
- Cite [PAGE §1], [PAGE §2], [PAGE §5], [PAGE §6], [PAGE §10].

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: Core Web Vitals evolution (LCP 2.5→2.0s March 2026 core update, INP equal ranking signal 2026-03-18). Schema.org Organization/SportsOrganization lineage. WCAG 2.2 AA new criteria (2.4.11, 2.5.8). Next.js App Router patterns (Server Components, ISR, `force-dynamic`, `loading.tsx`, `global-error.tsx`).
- Multi-week traps: If they add `force-dynamic` removal without RUM, they optimize lab LCP but may miss field INP. If they add JSON-LD with new marketing prose, copy-scanner tests fail CI (retrocausal trap: the test scans raw source, so intent doesn't matter, only string literals). If they deploy enforcing CSP before nonce design, inline JSON-LD breaks (self-inflicted XSS mitigation outage). These are multi-week because debugging CSP violations or copy-scanner failures consumes sprint capacity.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under incident pressure, engineers revert to adding more header sources (next.config.mjs + vercel.json divergence) or adding new marketing strings to scanned files, triggering scanner failures.
- Counter-trap: Establish single `lib/brand.ts` SITE_URL constant; use only vetted constants in JSON-LD; add `global-error.tsx` before incidents happen so root-layout throws don't show default Next.js error page.
- Clock: The 2h ingestion freshness gate in `/api/health` [PAGE §4]. The 30s ISR revalidation proposal [PAGE §1]. The 75th percentile field data window for CWV [PAGE §0]. Time as a constraint: synthetic monitoring exists but RUM does not, so the detection clock for real-user degradation is broken.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- Physical layer: Vercel `iad1` region, Postgres service container in CI, canvas/SVG hero avoids image-driven CLS but main-thread canvas JS can block INP on mid-tier mobile. Physical server location affects TTFB.
- Biomechanical: Not applicable to software? I can interpret "biomechanical" as human factors / developer interaction: keyboard users tabbing through nav without skip-link (WCAG 2.4.1), focus not obscured by sticky Nav (2.4.11), target size 24×24 (2.5.8), contrast on dark theme (4.5:1). These are human-perception vetoes.
- Weather: Not literally weather, but edge/CDN weather? I can treat "weather" metaphorically as environmental conditions: Vercel edge node outages, regional `iad1` latency spikes, network conditions affecting `force-dynamic` home page. Or actual weather affecting data center? Better to treat as environmental/infrastructure conditions. Since it's a web app, "weather veto" could mean regional network congestion or CDN failures that veto performance optimizations.
- Veto proof: Show that certain fixes are vetoed by constraints: copy-scanner vetoes new strings; `force-dynamic` is a deliberate freshness veto; lack of `global-error.tsx` is a reliability veto boundary.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- I'll define RLVR as "Runtime Logic Verification & Review" or similar.
- Scenario 1: Enforcing CSP without nonce/strict-dynamic before auditing inline JSON-LD and Stripe.js. Veto: inline `<script type="application/ld+json">` blocked → rich results lost; Stripe payment element blocked → checkout failure. Prediction: CSP Report-Only must run ≥1 week before enforcement; violation reports must show zero `script-src` violations from app origin.
- Scenario 2: Removing `force-dynamic` and setting `revalidate=30` without RUM beacon. Veto: lab LCP improves but field p75 INP worsens due to canvas hydration not split; no instrumentation to detect. Prediction: deploy `web-vitals` beacon first; observe p75 INP for 14 days before ISR change.
- Scenario 3: Adding `SportsOrganization` JSON-LD with new marketing prose to `app/performance/page.tsx`. Veto: `public-copy-scanner.test.ts` scans raw source, fails CI, blocks deployment. Prediction: reuse only `BRAND_NAME`, `metadata.description`, computed URLs; CI remains green; structured data passes Rich Results Test.

Now, ensure no betting lines. The source mentions "sports betting model calibration" and "win-rate". I should not mention spreads, totals, moneylines, odds. I can mention "win-rate" as a metric but avoid betting-specific terms. Actually the source says "win-rate stats" and "calibration". I can refer to "calibration page" and "track-record" without betting terminology.

Word count check: Need >=1000 words total. THINK_TRACE alone >=400. I'll aim for roughly 150-200 words per section to be safe, with THINK_TRACE being the longest.

Citations: Use [PAGE §0], [PAGE §1], etc. Since the document sections are numbered, this maps well.

Let me draft carefully.

THINK_TRACE draft:
- Start with the epistemic gap: zero RUM means p75 CWV is a latent variable. Formalize: if `M` is the set of field measurements, `M = ∅`, then any CI budget `B` is unobservable. [PAGE §1] confirms zero `web-vitals`/`onINP`/`PerformanceObserver`. [PAGE §6] confirms no Lighthouse CI. Thus the system operates under measurement singularity: optimizations are untestable against the ranking signal that matters.
- Multi-hop: `force-dynamic` on `/` [PAGE §1] → no ISR → TTFB scales with board read latency → LCP increases under load. But product requires live board state, so this is a deliberate consistency/availability trade. Gray zone: a 30s stale window is acceptable? Product call. Without RUM, cannot quantify user-visible cost.
- Canvas/SVG hero avoids CLS [PAGE §1] but InteractiveGalaxy not code-split → main-thread task → INP risk [PAGE §1]. Mid-tier mobile fails first. No `next/dynamic({ssr:false})`.
- Font duplication: JetBrains_Mono ×2 [PAGE §1] → redundant preload bytes, small but avoidable. `preconnect` dead because self-hosted.
- Copy-scanner gray zone [PAGE §9]: `readFileSync` on `app/performance/page.tsx` scans raw lowercased source for banned phrases. Any new string literal in JSON-LD is scanned. This creates a linguistic veto: structured data must reuse `BRAND_NAME`, `metadata.description`, computed URLs. No marketing prose. This is a counterintuitive constraint: SEO improvement is bounded by compliance test.
- Canonical split [PAGE §2]: layout defaults www, sitemap/robots default apex. When `NEXT_PUBLIC_APP_URL` unset, canonicals disagree. Dilutes indexing. Fix: single constant in `lib/brand.ts`.
- Error boundary topology [PAGE §4]: `app/error.tsx` misses root layout throws. No `global-error.tsx`. No `loading.tsx`. No Sentry. Thus server exceptions are invisible post-deploy and root-layout failures show unstyled default.
- Double-header source [PAGE §5]: `next.config.mjs` and `vercel.json` overlap but diverge (payment directive). Silent drift risk. No CSP. No HSTS.
- WCAG 2.2 AA gaps [PAGE §3]: no skip-link, focus obscured by sticky Nav, target size, contrast. No axe in CI.
- Synthesis: The highest-leverage safe change is JSON-LD on `/performance` [PAGE §10] because it is additive, copy-test-safe, and anchors the track-record entity to the brand. But it must be sequenced after the SITE_URL unification to avoid host mismatch in JSON-LD vs sitemap.

Need to ensure >=400 words. Let's write around 600-800 words for THINK_TRACE.

SOURCE_OPERATORS_AND_EQUATIONS: Use LaTeX.
- CWV: `LCP_{p75} < 2.0 s`, `INP_{p75} < 200 ms`, `CLS_{p75} < 0.1`. [PAGE §0]
- Health freshness: `t_now - t_last_success < 2 h ⇒ 200 OK`, else `503 degraded`. [PAGE §4]
- Font bytes: `B_{dup} = 2 × |JetBrains_Mono| - |JetBrains_Mono| = |JetBrains_Mono|` (avoidable cost).
- JSON-LD object: formal definition.
- Canonical mismatch set: `H_{layout} = {www}`, `H_{sitemap} = {apex}`, `H_{layout} ∩ H_{sitemap} = ∅` when env unset.
- HSTS: `max-age = 63072000 s` (2 years).
- Cite pages.

RETROCAUSAL_GENEALOGY:
- Lineage of CWV thresholds: Google March 2026 core update tightened LCP 2.5→2.0s; INP equal ranking signal 2026-03-18 [PAGE §0].
- Schema.org lineage: Organization → SportsOrganization/Dataset [PAGE §2]. FAQPage already present; Article missing.
- WCAG 2.2 new criteria: 2.4.11 Focus Not Obscured, 2.5.8 Target Size [PAGE §3].
- Next.js App Router evolution: `force-dynamic` vs ISR/revalidate, `loading.tsx` suspense streaming, `global-error.tsx` boundary [PAGE §1, §4].
- Multi-week traps:
  1. CSP enforcement before nonce design breaks inline JSON-LD + Stripe [PAGE §5]. Debugging consumes 1-2 weeks.
  2. Copy-scanner failure from new strings in `performance/page.tsx` blocks PR; requires string archaeology to find banned phrase [PAGE §9].
  3. Removing `force-dynamic` without RUM creates lab/field divergence; regressions ship undetected for weeks until user complaints [PAGE §1, §6].

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: Under P0 incident, engineer adds header to both `next.config.mjs` and `vercel.json`, deepening divergence [PAGE §5]. Or adds marketing blurb to JSON-LD, tripping scanner [PAGE §9].
- Counter-trap: Single source of truth `lib/brand.ts`; vetted constants only; `global-error.tsx` preemptively added; `loading.tsx` skeletons for `/`, `/picks`, `/performance`.
- Clock: `/api/health` 2h freshness gate [PAGE §4] sets a temporal bound on data staleness. Proposed `revalidate=30` [PAGE §1] sets a 30s staleness clock. CWV p75 field window is rolling 28 days typically. Without RUM, the detection clock is stopped.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical: Vercel `iad1` [PAGE §0 header], Postgres CI container [PAGE §6], canvas/SVG hero [PAGE §1]. Physical network latency to `iad1` affects TTFB for `force-dynamic` home.
- Biomechanical/human factors: keyboard navigation without skip-link [PAGE §3], sticky Nav obscuring focus [PAGE §3], 24×24 target size [PAGE §3], dark theme contrast 4.5:1 [PAGE §3]. These are human-perception vetoes that can independently fail WCAG AA.
- Weather/environmental: Regional edge node congestion, `iad1` outage, network jitter affecting dynamic board read [PAGE §0, §1]. These veto ISR benefits if origin is unreachable.
- Veto matrix: Copy-scanner vetoes new strings; `force-dynamic` is a deliberate consistency veto; lack of `global-error.tsx` is a structural veto on root-layout error handling; lack of CSP is a security veto.

RLVR_COUNTERFACTUAL_VETOES:
- Define RLVR = Runtime Logic Verification & Review (or similar).
- Scenario 1: Enforcing CSP without nonce. Veto: inline JSON-LD blocked. Prediction: Report-only CSP for ≥7 days, zero violations, then enforce.
- Scenario 2: ISR `revalidate=30` without RUM. Veto: p75 INP unobservable. Prediction: Deploy beacon first, observe 14 days, then ISR.
- Scenario 3: New JSON-LD marketing prose. Veto: `public-copy-scanner` fails CI. Prediction: Reuse vetted strings, CI green, Rich Results Test 0 errors.

Now, need to ensure no betting lines. I'll avoid "spreads, totals, moneylines, odds". I might mention "calibration" and "win-rate" as they appear in source but not as betting lines. Actually to be safe, I can say "calibration/track-record metrics" without elaborating on betting.

Also ensure formal LaTeX equations, SI units. Use seconds, milliseconds, bytes, Hertz maybe not needed. Information units: bits/bytes. Probability units: maybe p75 percentile.

Exact [PAGE N] markers: I'll use [PAGE §0] etc.

Word count: Let's estimate.
THINK_TRACE: ~700 words.
SOURCE_OPERATORS_AND_EQUATIONS: ~350 words.
RETROCAUSAL_GENEALOGY: ~250 words.
RECURSIVE_THEORY_OF_MIND: ~250 words.
CROSS_LAYER_VETO_ADJUDICATION: ~250 words.
RLVR_COUNTERFACTUAL_VETOES: ~250 words.
Total ~2050 words. Good.

Let's write it out.

Be careful with LaTeX syntax inside XML. It's fine.

I will not mention any betting lines. I will not invent fake ratios.

Double check: The user said "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." I don't have verbatim quotes necessary, but I should cite markers. I'll use [PAGE §N] since that's the closest to page markers in the source. I can also quote short phrases like "force-dynamic" but not long verbatim blocks unless needed. The instruction says cite exact [PAGE N] markers. I'll do that.

Let's begin drafting.
</NATIVE_REASONING>

<THINK_TRACE>
The central epistemic failure identified in the audit is a measurement singularity: GSN cannot observe its own Core Web Vitals at the 75th-percentile field level, yet Google's 2026 core update tightened LCP to < 2.0s and elevated INP to an equal ranking signal [PAGE §0]. Because `apps/web` contains zero `web-vitals`, `onLCP`, `onINP`, `onCLS`, `reportWebVitals`, or `PerformanceObserver` invocations [PAGE §1], the set of field measurements `M` is empty. Any CI performance budget `B` therefore operates over an unobservable random variable; optimizing `B` without `M` is an ill-posed control problem. This is the first gray zone: the team can improve lab metrics while field regressions ship undetected for weeks.

Multi-hop derivation proceeds from the home page's rendering contract. `app/page.tsx` is `export const dynamic = "force-dynamic"` [PAGE §1], which opts the highest-priority URL (sitemap priority 1.0) out of static and ISR caching. Under load, TTFB scales linearly with the live board-read latency, directly inflating LCP because the hero is text/SVG rather than image [PAGE §1]. The product rationale—freshness—is deliberate, creating a consistency/availability trade. A proposed `revalidate = 30` ISR window would cut LCP materially, but the audit marks this `inferred` because product acceptance of a 30s staleness window is unverified [PAGE §1]. Without RUM, the user-visible cost of that staleness cannot be quantified, so the decision remains anchored to operator intuition rather than field data.

The second gray zone concerns INP risk on mid-tier mobile. `InteractiveGalaxy` (canvas/SVG) and scroll-driven `Reveal`/`signature-grid` motion are not wrapped in `next/dynamic({ ssr: false })` [PAGE §1]. This places canvas JS on the critical hydration path, creating long main-thread tasks. The absence of `loading.tsx` files [PAGE §4] compounds the issue: slow Server Component data blocks first paint instead of streaming a skeleton. The causal chain is therefore `force-dynamic` → no Suspense boundary → blocked first paint → higher INP on constrained devices. This chain is unverifiable in the current telemetry stack.

A third gray zone is linguistic and arises from the copy-scanner constraint [PAGE §9]. `public-copy-scanner.test.ts` performs `readFileSync` on `app/performance/page.tsx` and scans raw lowercased source for banned phrases. Consequently, any new string literal injected into that file—such as marketing prose inside JSON-LD `description` or `name` fields—is subject to an automated veto. The only copy-test-safe structured-data path is to reuse existing vetted constants: `BRAND_NAME`, the page's own `metadata.description`, and computed URLs [PAGE §10]. This creates a bounded-optimization regime where SEO ROI is capped by compliance-test surface area rather than by schema expressiveness.

The fourth gray zone is canonical host disagreement. `layout.tsx` defaults `SITE_URL` to `https://www.galaxysportsedge.com`, while `sitemap.ts` and `robots.ts` default to the apex `https://galaxysportsedge.com` [PAGE §2]. When `NEXT_PUBLIC_APP_URL` is unset, canonicals, OG URLs, and sitemap URLs disagree on host, diluting canonical signals and risking index splitting. The fix—a single shared constant in `lib/brand.ts`—is trivially additive but touches three configuration systems, creating coordination risk.

Reliability topology reveals a fifth gray zone. `app/error.tsx` does not catch throws in the root layout itself; there is no `app/global-error.tsx` [PAGE §4]. A font, JSON-LD, or provider throw at the layout layer would render the unstyled Next.js default. Combined with zero external error tracking and zero `loading.tsx` skeletons, server exceptions are invisible post-deploy beyond Vercel raw logs [PAGE §4]. The existing `/api/health` route is well-designed—checking Postgres and ingestion freshness with a 2h SUCCESS-run gate returning 503 degraded [PAGE §4]—but it cannot observe client-side or layout-layer failures.

Finally, security headers are defined in two divergent sources: `next.config.mjs` and `vercel.json` [PAGE §5]. The overlap is not identical (`vercel.json` alone scopes `payment=(self "https://js.stripe.com")`), creating a silent-drift surface. No CSP and no HSTS are present [PAGE §5]. Because GSN injects inline `<script type="application/ld+json">` via `dangerouslySetInnerHTML` [PAGE §5], an enforcing CSP must be designed with nonce + `strict-dynamic` or hashed JSON-LD blocks, or it will break rich results and potentially Stripe.js.

The synthesis is that the highest-leverage safe intervention is the `Organization` JSON-LD block on `/performance` [PAGE §10]. It is purely additive, reuses vetted strings to satisfy the copy scanner, anchors the track-record entity to the brand for Knowledge Graph binding, and follows an idiomatic pattern already used on `pricing` and `faq` [PAGE §2]. It should be sequenced after or alongside the `SITE_URL` unification to avoid host mismatch between page-level JSON-LD and site-level schema.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
**Core Web Vitals threshold operator (field, p75):**
\[
\mathcal{T}_{\text{CWV}} = \left\{ \text{LCP}_{p75} < 2.0\ \text{s} \;\land\; \text{INP}_{p75} < 200\ \text{ms} \;\land\; \text{CLS}_{p75} < 0.1 \right\}
\]
Source: 2026 benchmark bar, Google March 2026 core update and Search Central 2026-03-18 [PAGE §0]. Current observability: \(\mathcal{M}_{\text{field}} = \emptyset\) because no `web-vitals`, `onINP`, or `PerformanceObserver` exists in `lib`, `app`, or `components` [PAGE §1].

**Font redundancy operator:**
\[
B_{\text{avoidable}} = 2 \cdot |JetBrains\_Mono| - |JetBrains\_Mono| = |JetBrains\_Mono| \quad \text{bytes}
\]
`JetBrains_Mono` is instantiated twice in `layout.tsx:39-49` for `--f-mono` and `--f-numerals` [PAGE §1]. The `<link rel="preconnect">` to `fonts.googleapis.com`/`fonts.gstatic.com` is dead because `next/font/google` self-hosts from the app origin [PAGE §1].

**Health endpoint freshness predicate:**
\[
\text{status} = 
\begin{cases}
200\ \text{OK}, & (t_{\text{now}} - t_{\text{last\_success}}) < 2\ \text{h} \\
503\ \text{degraded}, & \text{otherwise}
\end{cases}
\]
`app/api/health/route.ts` requires the last SUCCESS run within 2 hours, not merely any run [PAGE §4].

**Canonical host mismatch set:**
\[
H_{\text{layout}} = \{\texttt{www}\}, \quad H_{\text{sitemap/robots}} = \{\texttt{apex}\}, \quad H_{\text{layout}} \cap H_{\text{sitemap}} = \emptyset \quad \text{when } \texttt{NEXT\_PUBLIC\_APP\_URL} = \varnothing
\]
`layout.tsx:81` vs `sitemap.ts:38` and `robots.ts:13` [PAGE §2].

**Proposed `Organization` JSON-LD operator on `/performance`:**
\[
\mathcal{J}_{\text{perf}} = \left\{
\begin{array}{l}
\texttt{@context: "https://schema.org"},\\
\texttt{@type: "Organization"},\\
\texttt{name: BRAND\_NAME},\\
\texttt{url: SITE\_URL},\\
\texttt{description: metadata.description},\\
\texttt{knowsAbout: [\"sports analytics\", \"sports betting model calibration\"]},\\
\texttt{mainEntityOfPage: SITE\_URL + "/performance"}
\end{array}
\right\}
\]
Emitted as `<script type="application/ld+json">` via `dangerouslySetInnerHTML`, immediately inside the page tree next to `<Nav/>` [PAGE §10]. Reuses only vetted constants to satisfy `public-copy-scanner.test.ts` and `public-copy-scan-strong.test.ts` [PAGE §9].

**HSTS header (P0 security fix):**
\[
\texttt{Strict-Transport-Security: max-age=63072000; includeSubDomains; preload}
\]
Zero app risk; add to `vercel.json` headers [PAGE §5].

**CSP report-only transition predicate:**
\[
\texttt{Content-Security-Policy-Report-Only} \;\xrightarrow[\text{zero violations}]{t \ge 7\ \text{days}}\; \texttt{Content-Security-Policy}
\]
Must allow nonce + `strict-dynamic` or hash the three static JSON-LD blocks to permit inline `application/ld+json` and Stripe.js [PAGE §5].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The lineage of GSN's current posture traces to three overlapping technical genealogies. First, the Core Web Vitals evolution: LCP was tightened from 2.5s to < 2.0s in Google's March 2026 core update, and INP became an equal—not supplementary—ranking signal per Search Central 2026-03-18 [PAGE §0]. GSN's architecture predates or ignores this shift: it has no RUM instrumentation and no Lighthouse CI, meaning it is optimizing for a 2024-era visibility model while the 2026 ranking function weights field p75 INP heavily (~43% of sites fail INP in 2026 [PAGE §0]).

Second, the structured-data lineage moves from `Organization` and `WebSite` (already present in `layout.tsx`) toward `SportsOrganization`, `Dataset`, and `Article`/`BlogPosting` [PAGE §2]. `/performance` is the brand's SEO thesis—the audited calibration/track-record page—yet emits zero JSON-LD [PAGE §2]. This is a retrocausal gap: the page was built for human trust signals (gated stats, banned-phrase scanners) but not for machine-readable entity binding. The copy-scanner tests [PAGE §9] constitute a linguistic constraint layer that was layered on after the SEO intent, creating a historical tension where SEO improvements must pass compliance archaeology.

Third, the Next.js App Router genealogy: `force-dynamic`, absence of `loading.tsx`, and absence of `global-error.tsx` reflect an early App Router adoption pattern that privileges dynamic freshness over Suspense streaming and error-boundary completeness [PAGE §1, §4]. Modern patterns (ISR `revalidate`, streaming skeletons, root error boundaries) exist in the framework but are not adopted, creating a version debt.

Multi-week traps are embedded in these lineages. Trap A: deploying an enforcing CSP before a nonce + `strict-dynamic` design will break inline JSON-LD and possibly Stripe.js [PAGE §5]; debugging CSP violation reports across Vercel edge nodes and client browsers easily consumes one to two weeks of sprint capacity. Trap B: adding new marketing prose to `app/performance/page.tsx` for SEO will trip `public-copy-scanner.test.ts` because it scans raw lowercased source [PAGE §9]; resolving the false positive requires string archaeology across banned-phrase lists and can block a PR for days. Trap C: converting `/` from `force-dynamic` to `revalidate=30` without first deploying RUM will improve lab LCP while field p75 INP degrades silently; the regression would only surface through user complaints weeks later, by which point the causal link to the ISR change is obscured [PAGE §1, §6]. Each trap is multi-week because the remediation depends on observability that does not yet exist.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression describes the tendency of engineers under P0 pressure to repeat prior architectural mistakes. In GSN's case, the regression manifests as adding security headers to both `next.config.mjs` and `vercel.json` during an incident, deepening the existing divergence (notably the `payment` directive only in `vercel.json`) [PAGE §5]. It also manifests as injecting fresh marketing strings into `app/performance/page.tsx` to boost SEO, which the copy-scanner will flag because `readFileSync` scans raw source regardless of intent [PAGE §9]. Under time pressure, an engineer may argue "it's just one sentence," not recognizing that the test is syntactic, not semantic.

The counter-trap is to institutionalize single-source-of-truth constraints before the crisis occurs. Extract `SITE_URL` into `lib/brand.ts` so layout, sitemap, robots, and JSON-LD share one host decision [PAGE §2, §10]. Restrict all new strings in scanned files to vetted constants (`BRAND_NAME`, `metadata.description`, computed URLs) [PAGE §10]. Add `app/global-error.tsx` preemptively so root-layout throws (fonts, JSON-LD, providers) do not render the unstyled Next.js default during an incident [PAGE §4]. Add `loading.tsx` skeletons for `/`, `/picks`, and `/performance` so slow Server Components stream rather than block first paint [PAGE §4]. These are counter-traps because they reduce the surface area for habit-driven regression under load.

The clock operates on three distinct temporal regimes. The `/api/health` freshness gate enforces a 2-hour SUCCESS-run window; beyond it, the route returns 503 degraded [PAGE §4]. This is a hard operational clock for data reliability. The proposed `revalidate = 30` ISR window introduces a 30-second staleness clock for the home page [PAGE §1]. The CWV regime operates on a rolling 28-day field p75 window at the 75th percentile [PAGE §0]. Because GSN lacks RUM, the detection clock for real-user degradation is effectively stopped: the team cannot tell whether the 30s staleness clock or the `force-dynamic` freshness clock is causing user-perceived latency. The recursive theory of mind predicts that without RUM, the team will optimize the 2-hour health clock and the 30s ISR clock while missing the user-experience clock that actually drives ranking.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer vetoes originate in infrastructure and deployment topology. The app runs on Vercel `iad1` [PAGE §0 header], and CI tests run against a real Postgres service container (`sports_test`) [PAGE §6]. A `force-dynamic` home page makes TTFB dependent on origin responsiveness in `iad1`; regional network congestion or edge-node degradation directly vetoes LCP improvements because every user request hits the server [PAGE §1]. The hero is canvas/SVG, which avoids image-driven CLS [PAGE §1], but the un-split `InteractiveGalaxy` canvas creates main-thread contention on mid-tier mobile devices, a physical client-layer veto on INP [PAGE §1].

Biomechanical/human-perception layer vetoes are defined by WCAG 2.2 AA. The absence of a skip-link forces keyboard users to tab through the full navigation on every page (WCAG 2.4.1) [PAGE §3]. `scroll-smooth` on `<html>` combined with a sticky `Nav` risks focus targets being obscured behind the header (WCAG 2.4.11 Focus Not Obscured) [PAGE §3]. Footer legal links and microtext eyebrow elements may violate the 24×24 CSS-pixel minimum target size (WCAG 2.5.8) [PAGE §3]. The dark theme (`#04060a` background with `text-gray-400/ink-300` secondary text) risks failing the 4.5:1 contrast ratio for normal text [PAGE §3]. No `axe` or contrast test exists in CI [PAGE §6], so these human-factor vetoes are unenforced and can independently block WCAG 2.2 AA conformance regardless of performance gains.

Weather/environmental layer vetoes are modeled as regional and network-condition failures. Vercel `iad1` outages, CDN edge disruptions, or last-mile jitter affect the `force-dynamic` board read because there is no stale-while-revalidate cushion [PAGE §1]. These environmental conditions veto the benefit of any client-side performance optimization: even a perfect LCP of 0.8s in the lab collapses under origin latency in the field.

The adjudication matrix is as follows. The copy scanner vetoes any new marketing string in `app/performance/page.tsx` [PAGE §9]; therefore structured data must reuse vetted constants. `force-dynamic` is a deliberate consistency veto that cannot be removed without product sign-off on staleness [PAGE §1]. The absence of `global-error.tsx` is a structural veto on root-layout error containment [PAGE §4]. The absence of CSP is a security veto that must be resolved through report-only transition before enforcement [PAGE §5]. No single layer can be optimized in isolation because the vetoes are cross-coupled: e.g., adding JSON-LD improves SEO but introduces inline script surface that CSP must allow, and changing `SITE_URL` affects both canonicals and JSON-LD `url` fields [PAGE §2, §10].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR is defined here as Runtime Logic Verification & Review: formal counterfactual scenarios in which a proposed change is vetoed by an observable runtime or CI constraint, with a testable prediction for the unvetoed path.

**Scenario 1 — Enforcing CSP before nonce design.**
Veto: Deploying `Content-Security-Policy` (enforcing) without `nonce` + `strict-dynamic` or hashed JSON-LD blocks will block inline `<script type="application/ld+json">` injected via `dangerouslySetInnerHTML` [PAGE §5] and may block Stripe.js, which GSN scopes in `vercel.json` `Permissions-Policy` [PAGE §5]. Rich results and payment elements fail simultaneously.
Prediction: Run `Content-Security-Policy-Report-Only` for at least 7 days; collect violation reports; verify zero `script-src` violations from the app origin; then promote to enforcing. If violations appear only from third-party widgets, refine directives before enforcement.

**Scenario 2 — Converting `/` from `force-dynamic` to `revalidate=30` without RUM.**
Veto: The home page opts out of ISR caching today [PAGE §1]. Switching to `revalidate = 30` improves lab LCP but leaves field p75 INP unobservable because no `web-vitals` beacon exists [PAGE §1, §6]. A regression in canvas hydration or scroll-driven motion would ship undetected.
Prediction: Deploy the `web-vitals` RUM beacon (onLCP/onINP/onCLS → `/api/vitals`) first [PAGE §1]. Observe field p75 INP for 14 days across mobile and desktop. Only after establishing a baseline should `revalidate=30` be toggled; the predicted outcome is a measurable LCP reduction with no statistically significant INP increase.

**Scenario 3 — Adding unvetted marketing prose to `app/performance/page.tsx` JSON-LD.**
Veto: `public-copy-scanner.test.ts` and `public-copy-scan-strong.test.ts` perform `readFileSync` on this exact file and scan raw lowercased source for banned phrases [PAGE §9]. Any new string literal in JSON-LD `description` or `name` fails CI and blocks deployment regardless of SEO value.
Prediction: Reuse only `BRAND_NAME`, the page's existing `metadata.description`, and computed URLs [PAGE §10]. The predicted outcome is that `npm run typecheck`, `npx vitest run` on the scanner and gate tests, `npm run build`, and Google's Rich Results Test all pass with 0 errors, and `Organization` is detected without CI regression.
</RLVR_COUNTERFACTUAL_VETOES>