---
source: "CODEX_PICKUP_V2.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready"
pages: 4
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 5120
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and analyze a source document (CODEX_PICKUP_V2.md) according to strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Important: The source text is a software engineering handoff document about a sports prediction platform called "Galaxy Sports Edge". It's NOT about sports betting analysis per se - it's about code deployment, features (Evidence Audit Drawer, Interactive Galaxy), cron jobs, auth, etc.

However, the strict invariants require:
- No betting lines mentions (spreads, totals, moneylines, odds) - easy since the source doesn't really discuss these except maybe "odds" in cron route names (/api/cron/refresh-odds) - I must avoid mentioning betting lines/odds in the output.
- Formal LaTeX equations, SI/information/probability units, assumptions, singularity/breakdown regimes.
- Page citations [PAGE N] - but the source text doesn't have page numbers! It's a markdown file. I need to treat sections as pages or note that the source is a single document without explicit page markers. Wait, the user said "PAGES: 4" but the text is just one block. I should probably treat the source as having implicit page markers or cite sections. Actually, looking at the instructions: "When source pages are provided, cite exact [PAGE N] markers and verbatim quotes." Since no explicit page markers exist in the text, I might need to infer or state that the source is unpaginated markdown, but I should still try to reference sections. However, the user explicitly said PAGES: 4. Maybe I should treat the document as 4 conceptual pages? Or just note that the source is a continuous document without page breaks? To be safe, I can cite sections as [PAGE 1], [PAGE 2], etc. based on logical divisions, or state that the provided source is a single markdown artifact without explicit pagination, and cite section headers instead. But the invariant says "cite exact [PAGE N] markers". I'll treat the document as 4 logical pages based on content flow:
  - Page 1: Header/intro + What changed on disk (sections 1-2)
  - Page 2: Sections 3-5 + Decisions
  - Page 3: Run steps 1-3 + decisions continued
  - Page 4: Steps 4-6 + What's still on me
  
Actually, that's arbitrary. Better approach: Since the source text provided is one continuous block, I will state that the source is an unpaginated markdown artifact (CODEX_PICKUP_V2.md) and cite section anchors instead of page numbers, OR I can assign page numbers based on the "PAGES: 4" instruction by splitting roughly. Let me just use [PAGE 1]-[PAGE 4] corresponding to rough quarters of the text, but that feels fake. The invariant says "When source pages are provided" - since the user says PAGES: 4 but provides text without page breaks, I'll note that the source lacks explicit folio markers and cite section headers verbatim instead, while acknowledging the 4-page designation. Or I can just invent page breaks? No, that would violate integrity. I'll say: "Source CODEX_PICKUP_V2.md is supplied as a continuous markdown artifact without explicit page folios; the 'PAGES: 4' designation is noted but no verbatim [PAGE N] breaks exist in the text. Citations below use section headers as proxies." But the invariant is strict. Hmm.

Maybe I should treat the document as having implicit pages:
- [PAGE 1]: Title through "What changed on disk" intro + section 1 Evidence Audit Drawer
- [PAGE 2]: Section 2 Interactive galaxy through section 5 Neon driver
- [PAGE 3]: Section 6 Anthropic key + Section 7 Triage + Step 1-2
- [PAGE 4]: Step 3-6 + Decisions + Queue

This is reasonable. I'll use these logical page assignments and be transparent about it.

Now, content analysis:

The document describes:
1. Evidence Audit Drawer - tier-gated transparency feature for pick cards. Uses SHA-256 hash prefixes, byte counts, SourceSnapshot payload hashes, signal-category topology (LIVE/SHADOW/ABSENT), pick lineage, confidence at scoring, line movement delta (careful - "line movement" might be betting-related, but it's about UI/feature flags, not actual betting advice), model version, gates active.
2. Interactive Galaxy - 2D canvas hero visual, parallax, particles, orbits, nebula, reduced motion fallback.
3. Cron schedule + auth - vercel.json crons, CRON_SECRET fails closed.
4. Front-end hardening - error.tsx digest correlation ID, no stack traces.
5. Neon serverless driver - feature-flagged scaffold, dynamic import.
6. Anthropic key rotation helper - 1-token ping verification.
7. Triage + memory - 29 reference zips triaged, 3 integrity/legal risks flagged.

Run steps: git diff, install, typecheck, lint, tests, build, visual verification, credentials/deploy, smoke tests.

Decisions: No big-bang Neon swap, hash prefixes not raw payloads, FREE tier drawer as upgrade CTA, no FotMob scraping due to license issues, malware zip flagged.

Now I need to map this to the required XML sections with formal rigor.

<THINK_TRACE>: Deep multi-hop derivation & gray-zone audit (>=400 words). I need to analyze the software supply chain, feature interactions, failure modes, tier-gating logic, cryptographic hash truncation security, etc. This is a system audit, not sports analysis.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX. I can model:
- Hash prefix collision probability: P(collision) ≈ 1 - exp(-k^2 / 2^(b+1)) for b-bit prefixes, birthday bound.
- Information entropy of truncated SHA-256 prefix: H = -Σ p log2 p bits.
- Tier access control as a boolean lattice or monotone function: Access(tier, feature) ∈ {0,1}.
- Cron scheduling as Poisson or deterministic process with failure-closed probability P(fail|missing secret) = 1.
- Build pipeline as dependency graph G = (V, E) with critical path.
- Reduced motion as binary accessibility state M ∈ {0,1} affecting animation loop: A(t) = 0 if M=1.
- DPR scaling: pixel density d ∈ {1,2,3}, canvas resolution R = d * R_css.

Units: bits, seconds, bytes, dimensionless probabilities, Hz for cron? No, cron is every 30m etc.

Assumptions: SHA-256 behaves as random oracle; tier assignment is server-side immutable during request; Next.js error boundaries catch unhandled exceptions; dynamic import doesn't block build if module absent.

Breakdown regimes: hash prefix too short -> collision; canExposePublicPicks=false -> 503; missing CRON_SECRET -> request rejection; absent Neon deps -> build unaffected due to dynamic import.

<RETROCAUSAL_GENEALOGY>: Historical lineage of transparency features in fintech/sports intelligence (Bloomberg terminal audit trails, Bitcoin block explorers, provably fair gaming), multi-week traps (deploy cascade, Neon migration trap, cron secret rotation trap, key rotation trap).

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression (team reverts to manual picks under load), counter-trap (audit drawer exposes model lineage making it harder to hide regression), clock (deploy deadline vs feature completeness).

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof - wait, this is a software document. There are no physical/biomechanical/weather factors. However, I must still address this section. I can interpret "veto proof" as system-level vetoes: build veto (typecheck failure), security veto (malware zip), tier veto (FREE vs PRO), accessibility veto (reduced motion), cron veto (missing secret). I need to frame it as cross-layer veto adjudication in the software stack. Physical layer = hardware/serverless cold start; biomechanical = human interaction (cursor, focus trap, escape); weather = network conditions / latency. I'll adapt.

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR (Reinforcement Learning from Verifiable Rewards?) veto scenarios + predictions. I'll create 3 counterfactual scenarios:
1. Hash prefix collision attack on audit drawer.
2. Tier escalation via client-side manipulation of EvidenceAuditDrawer.
3. Cron secret leakage leading to unauthorized ingestion.
Each with formal prediction.

Word count: Must be >= 1,000 words total across sections. THINK_TRACE alone >= 400 words.

I must NOT mention spreads, totals, moneylines, or odds. The source mentions "/api/cron/refresh-odds" - I should refer to it as "refresh market data" or "refresh pricing endpoint" to avoid saying "odds". I must be careful not to use the word "odds" in a betting context. I can mention it exists in the source but perhaps rephrase. Actually, the invariant says "Never mention spreads, totals, moneylines, or odds." So I should avoid the word entirely. I'll refer to "/api/cron/refresh-odds" as "the 30-minute market-data refresh cron" without quoting "odds".

Also no fake ratios like Force/Fatigue. All equations must be formal and justified.

Let me draft.

Structure:
- Brief intro maybe outside sections? The user wants exactly these XML sections. I should probably just output the sections. Maybe a short preamble is okay but better to dive into sections to ensure word count.

Let's outline each section:

THINK_TRACE (>=400 words):
- Multi-hop: Code change -> build pipeline -> deployment -> user perception -> trust model.
- Gray zones: hash prefix length (how many chars? not specified, so breakdown regime), "canExposePublicPicks" feature flag default state, "bootstrap picks" 404, tier-gated server-side but client component renders drawer for all tiers (potential information leakage via UI presence?), focus trap/body-scroll lock implementation correctness, cron secret verification.
- Formalize trust as information asymmetry reduction.
- 400+ words.

SOURCE_OPERATORS_AND_EQUATIONS:
- Define SHA-256 truncation: Let H: {0,1}* -> {0,1}^256. Prefix function Π_k(h) = first k bits. Collision probability under random oracle: P_coll(n,k) ≈ 1 - exp(-n(n-1)/2^(k+1)).
- Byte count B ∈ ℕ, unit bytes.
- Tier function: τ: User -> {FREE, PRO, ELITE}. Access predicate A(τ, r) = 1 iff τ ∈ authorized(r).
- Cron failure-closed: P(reject | ¬(secret present ∧ secret match)) = 1.
- Next.js error digest: D = f(msg) where f is correlation ID generation, surface S = {digest} in prod, S = {msg, stack} in dev.
- DPR: r_canvas = d * r_css, d ∈ {1,2,3}.
- Animation state: anim(t) = 0 if reduced_motion = true else f(t).
- Cite pages [PAGE 1]-[PAGE 4] with verbatim quotes.

RETROCAUSAL_GENEALOGY:
- Bloomberg terminal audit trails (verbatim "Bloomberg-grade transparency" from source).
- Bitcoin block explorers / Merkle proofs (hash prefix idea).
- Provably fair gaming (commit-reveal hashes).
- Sports intelligence platforms moving from black-box tips to forensic chains.
- Multi-week traps: Neon swap cascade, key rotation dependency, cron secret rotation, malware zip persistence.

RECURSIVE_THEORY_OF_MIND:
- Crisis habit regression: under production load, operators may bypass audit drawer or disable feature flag to ship.
- Counter-trap: audit drawer makes model lineage visible, so hiding regression is harder; but tier-gating means FREE users see summary only, creating asymmetry.
- Clock: deploy deadline vs build/test/pass gates; visual verification steps add calendar time.

CROSS_LAYER_VETO_ADJUDICATION:
- Physical layer: serverless cold start, Vercel edge, Neon latency, HiDPI DPR.
- Biomechanical layer: human cursor attractor, focus trap, Escape-to-close, body-scroll lock, reduced-motion preference.
- Weather layer: network jitter affecting drawer API 503/404, CDN propagation.
- Veto rules: Build veto (typecheck/lint fail), Security veto (malware zip, missing CRON_SECRET), Accessibility veto (reduced motion must not break layout), Tier veto (FREE cannot see detailed payload).

RLVR_COUNTERFACTUAL_VETOES:
- Scenario 1: Collision in 8-char SHA-256 prefix. Prediction: audit drawer shows wrong payload association; mitigation: increase k or server-side full hash comparison. Verifiable by computing birthday bound.
- Scenario 2: Client-side tier spoofing to access detailed audit. Prediction: server-side route returns 403/404 because canExposePublicPicks and tier checks are server-side; client component cannot escalate. Verifiable by probing route with forged tier cookie.
- Scenario 3: Missing CRON_SECRET in production. Prediction: all three cron routes fail closed (HTTP 401/403), ingestion halts, SourceSnapshot rows stop accumulating. Verifiable by curl without secret.

I need to ensure >=1000 words total. Let me aim for ~1500-2000 words.

Citations: I need to use [PAGE N] and verbatim quotes. Since the source is continuous text, I'll define logical pages:
- [PAGE 1]: From title through end of section 1 (Evidence Audit Drawer files added/modified).
- [PAGE 2]: Section 2 (Interactive galaxy) through section 4 (Front-end hardening).
- [PAGE 3]: Section 5 (Neon) through Step 2.
- [PAGE 4]: Step 3 through end.

I'll state this mapping explicitly in the SOURCE_OPERATORS section.

Let me start writing carefully.

Important: Do not use the word "odds". I'll say "market data refresh cron" instead of quoting "/api/cron/refresh-odds" directly, or if I quote it, I must not say "odds". The invariant says never mention odds. So I will avoid quoting that exact string or I'll say "the endpoint named in vercel.json" without saying the word. Actually if I quote it verbatim, I'd have to include the word "odds". Better not to quote it. I'll paraphrase.

Also avoid "line movement" if it implies betting lines. The source mentions "line movement delta" in the audit drawer description. That's a betting term. I should avoid repeating it or clarify it's internal model telemetry. I'll say "internal scoring delta" instead.

Let's write.

Word count estimation:
THINK_TRACE: ~500 words.
SOURCE_OPERATORS: ~400 words.
RETROCAUSAL: ~300 words.
RECURSIVE_TOM: ~250 words.
CROSS_LAYER: ~250 words.
RLVR: ~250 words.
Total ~1950. Good.

I must include exact XML tags. No markdown code blocks inside? I can use LaTeX inline.

Let's compose.

Start with <THINK_TRACE>.

Deep multi-hop derivation:
- The repo implements an "evidence first" product claim.
- Hop 1: SourceSnapshot payload hashes are stored server-side. The route returns only hash prefix + byte count. This is a commitment scheme.
- Hop 2: Tier-gating means the server decides payload visibility before rendering.
- Hop 3: The client drawer is a presentational shell; it cannot unilaterally escalate tier because the JSON endpoint enforces authorization.
- Hop 4: However, the drawer component is imported at the bottom of every pick card. If the API fails closed (503) or returns 404 for bootstrap/unpublished picks, the UI must degrade gracefully.
- Gray zone: hash prefix length is not specified in the source. Without k, collision probability is unbounded. If k is too small (e.g., 8 hex chars = 32 bits), birthday bound yields ~50% collision at ~2^16 = 65k snapshots. For a production intelligence platform, that is a breakdown regime.
- Gray zone: `canExposePublicPicks=false` yields 503. The deploy chain requires env var setup; if missed, public audit is dark.
- Gray zone: malware zip flagged but not deleted at time of writing ("Delete when convenient"). Supply-chain persistence risk.
- Etc.

Now equations.

I'll write it out.

Let's ensure I cite [PAGE 1], [PAGE 2], [PAGE 3], [PAGE 4] with quotes.

Quotes from source:
- "View evidence" button
- "right-anchored drawer opens"
- "Tier-gated server-side: FREE sees counts + topology (drives upgrade), PRO/ELITE sees the full chain."
- "Fails closed on `canExposePublicPicks=false` (503), bootstrap picks (404), unpublished picks (404)."
- "Never returns raw payload data — only hash prefix + byte count."
- "Bloomberg-grade transparency."
- "no Kelly/stake/EV references (pinned by test below)." Wait, "Kelly" is betting-related (Kelly criterion). The source mentions it as a banned term in the test. I must not mention Kelly criterion or stake or EV. I can say the test pins banned terms without naming them, or I can refer to them generically as "financial wagering parameters". Better to avoid naming them.

- "Same pure-2D-canvas approach (no Three.js — that decision held)"
- "Mouse parallax: the whole orbital system drifts toward the cursor up to ~12px"
- "Reduced-motion fallback still renders a beautiful static composition"
- "DPR support up to 3× for HiDPI crispness"
- "Verified each cron route fails closed on missing/mismatched `CRON_SECRET`."
- "production now shows the Next.js error `digest` correlation id only (not the raw message). Dev still shows full message. No stack traces ever surfaced."
- "NOT imported anywhere yet. Uses dynamic `import()` for `@neondatabase/serverless` + `@prisma/adapter-neon` so the absent deps don't break the build."
- "verifies a new key with a 1-token ping"
- "Three integrity-safe items applied" / "three flagged as integrity/legal risks (do not extract)"
- "Stake-All-Games-Predictor-Latest-main.zip" - name contains "Stake" which is betting-related. I should not repeat it or if I do, I'm mentioning a filename that includes "Stake". The invariant says never mention stakes? It says "Never mention spreads, totals, moneylines, or odds." It doesn't say stake, but earlier "ZERO TOY EQUATIONS: Never invent fake ratios (Force / Fatigue)." The source mentions "no Kelly/stake/EV references". I should avoid discussing betting terminology. I'll refer to the malware zip generically as "the flagged PHP archive" without repeating "Stake".

OK let's write.

I need to be careful: The source text uses "line movement delta" and "odds". I will not repeat those phrases. I'll paraphrase as "internal scoring telemetry" and "market-data refresh".

Let's write the response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation begins from the product claim in [PAGE 1]: "This locks 'Evidence first' from homepage tagline into product behavior." The first hop is the cryptographic commitment implemented by `apps/web/app/api/picks/[id]/audit/route.ts`. The endpoint never returns raw payload bytes; it returns only a hash prefix plus byte count [PAGE 1]. Under the random-oracle model for SHA-256, a truncated prefix constitutes a binding commitment: an operator cannot later substitute a different payload with the same prefix unless a collision is found. The security parameter here is the prefix length k, which the source does not specify. If k is small—e.g., eight hexadecimal characters (32 bits)—the birthday bound implies a collision probability approaching 0.5 after roughly 2^(k/2) = 2^16 ≈ 65,535 SourceSnapshot rows. For a production intelligence platform expecting continuous ingestion, that is a concrete breakdown regime: the audit drawer could associate Pick A with Payload B, destroying forensic non-repudiation. The mitigation is either server-side full-hash comparison (available to operators with DB access) or a sufficiently long prefix (e.g., 16+ hex chars, 64 bits).

The second hop is tier-gated authorization. The source states: "Tier-gated server-side: FREE sees counts + topology (drives upgrade), PRO/ELITE sees the full chain" [PAGE 1]. Because the drawer component itself is a client-side presentational shell imported at the bottom of every pick card, it cannot unilaterally escalate privilege; enforcement must occur at the JSON route. The route "Fails closed on `canExposePublicPicks=false` (503), bootstrap picks (404), unpublished picks (404)" [PAGE 1]. This creates a dependency chain: if the deployment team forgets to set `canExposePublicPicks` to true in production, the public audit surface returns 503 and the "View evidence" button either errors or renders empty, breaking the advertised transparency contract. The gray zone is the bootstrap-pick 404: early seed data lacks audit lineage, so the drawer must handle missing metadata without leaking stack traces.

The third hop involves supply-chain integrity. [PAGE 1] notes that three of 29 uploaded zips were flagged as "integrity/legal risks (do not extract)," including a repository with "Random PHP filenames, obscured workflow, ASCII-art README only." The document says to "Delete when convenient," which means at the time of writing the malicious artifact may still reside on disk or in backup layers. This is a multi-hop persistence risk: a local file-inclusion or archive-scanning process could later surface it. The build pipeline must treat any unvetted zip as a veto candidate regardless of its nominal domain.

The fourth hop is observability under failure. [PAGE 3] states production `error.tsx` surfaces only the Next.js `digest` correlation ID, never raw messages or stack traces. If the audit drawer crashes during rendering, the user sees an opaque digest; the operator must correlate that digest to server logs. This trades user-facing clarity for operational security, which is correct for a paid intelligence product, but it means the visual verification step in Step 3 ("no console errors") is necessary because production UX deliberately hides failure modes.

Cascading to deployment: [PAGE 3] requires Neon Postgres, Upstash Redis, rotated Anthropic keys, `vercel env add`, `db:push`, ingestion-cycle confirmation, and prod deployment before smoke testing. Each hop introduces a state transition that can fail closed. The recursive dependency is that the audit drawer is only as trustworthy as the ingestion pipeline that writes SourceSnapshot rows; if ingestion stalls (e.g., cron secret misconfigured), the drawer displays stale topology and the "evidence first" claim becomes a Potemkin feature.

Gray-zone audit summary: (1) unspecified hash-prefix length k; (2) feature-flag dependency for public exposure; (3) unvetted malware zip not yet deleted; (4) client component presence on all cards without guaranteed API success; (5) digest-only production errors delaying root-cause identification. These must be resolved before the launch chain is green.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators and units, with page citations to the unpaginated source artifact CODEX_PICKUP_V2.md. Logical page mapping: [PAGE 1] = title through end of §1 Evidence Audit Drawer; [PAGE 2] = §2 Interactive galaxy through §4 Front-end hardening; [PAGE 3] = §5 Neon driver through Step 2; [PAGE 4] = Step 3 through end.

1. Hash-commitment operator. Let H: {0,1}* → {0,1}^256 be SHA-256, modeled as a random oracle. Define prefix truncation Π_k: {0,1}^256 → {0,1}^k, where k ∈ ℕ is the prefix length in bits. The audit route returns Π_k(h) ∥ byte_count(b), b ∈ ℕ bytes [PAGE 1]. Collision probability for n snapshots under the birthday bound:

P_coll(n,k) ≈ 1 − exp(−n(n−1) / 2^(k+1))

Breakdown regime: when n ≥ 2^(k/2), P_coll → 0.5. If k = 32 bits, breakdown occurs near n ≈ 65,536 rows. No value for k is specified in [PAGE 1]; therefore the exact security level is undefined and must be pinned by tests or configuration.

2. Access-control predicate. Let τ(u) ∈ {FREE, PRO, ELITE} be the server-assigned tier for user u. Let r ∈ {SUMMARY, DETAILED} be the audit resource class. The authorization function:

A(τ, r) = 1 iff (r = SUMMARY) ∨ (τ ∈ {PRO, ELITE})

Server-side enforcement is required because the client drawer component cannot enforce tier boundaries [PAGE 1]. Breakdown regime: if the route handler omits the tier check or relies on client-provided tier, A becomes spoofable.

3. Fail-closed cron verification. Let S = {s | s = CRON_SECRET} and let s_req be the secret presented in the cron request header. The acceptance predicate:

V(s_req) = 1 iff (s_req ∈ S) ∧ (s_req = s_stored)

[PAGE 2] states: "Verified each cron route fails closed on missing/mismatched `CRON_SECRET`." Therefore P(reject | ¬V(s_req)) = 1. Breakdown regime: absent CRON_SECRET in production environment variables causes all scheduled ingestion/settlement jobs to return HTTP 401/403, halting SourceSnapshot accumulation.

4. Next.js error surface. Let E be an unhandled exception with message m and stack trace σ. In production, the rendered output is restricted to digest d = C(m), where C is a correlation-id function [PAGE 3]. Surface set:

S_prod(E) = {d}; S_dev(E) = {m, σ}

Invariant: stack traces never surface in production. Breakdown regime: if C collides for distinct errors, operators cannot distinguish root causes from the digest alone.

5. Display pipeline operators. Device-pixel ratio dpr ∈ {1, 2, 3} [PAGE 2]. Canvas resolution:

R_canvas = dpr · R_css, dpr ≤ 3

Animation state with reduced-motion preference m ∈ {0, 1}:

Anim(t) = 0 if m = 1; else f_orbit(t)

[PAGE 2] guarantees the static fallback preserves composition: same orbital layout, particle field, and labeled nodes, but with zero animation loop. This is an accessibility veto that takes precedence over visual liveness.

6. Build dependency graph. The Neon adapter uses dynamic import() so absent modules do not fail the build [PAGE 3]. Formally, let M_neon be the module set {@neondatabase/serverless, @prisma/adapter-neon}. Build succeeds iff ∀m ∉ M_neon ∨ (m imported dynamically ∧ not statically linked). Breakdown regime: static import of M_neon without installed dependencies causes build failure; dynamic import defers the failure to runtime activation only.

Verbatim evidence anchors: "Tier-gated server-side: FREE sees counts + topology (drives upgrade), PRO/ELITE sees the full chain" [PAGE 1]; "Never returns raw payload data — only hash prefix + byte count" [PAGE 1]; "Same pure-2D-canvas approach (no Three.js — that decision held)" [PAGE 2]; "DPR support up to 3× for HiDPI crispness" [PAGE 2]; "Verified each cron route fails closed on missing/mismatched `CRON_SECRET`" [PAGE 2]; "production now shows the Next.js error `digest` correlation id only (not the raw message)" [PAGE 3].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The audit drawer descends from three lineages. First, financial-terminal transparency: the source explicitly invokes "Bloomberg-grade transparency" [PAGE 1], placing the feature in the genealogy of audit trails where every terminal screen is backed by a time-stamped, source-attributed record. Second, cryptographic block-explorer design: returning a hash prefix plus byte count without revealing raw payload mirrors the commit-reveal pattern used in distributed ledgers, where a short digest proves data existence while preserving confidentiality until full disclosure is authorized. Third, provably-fair gaming and prediction-integrity architectures, where users can verify that an outcome was committed before the event and not retrofitted afterward. The signal-category topology (LIVE / SHADOW / ABSENT) [PAGE 1] extends this lineage into model observability, distinguishing active production signals from shadow-mode experiments and missing data—a three-state epistemology that predates this repo but is rarely exposed to end users.

Multi-week traps embedded in the handoff: (1) Neon serverless swap. [PAGE 3] states the adapter is "NOT imported anywhere yet" and is activated post-launch with "one env var + one npm install." The trap is that cold-start performance on Vercel/edge may look acceptable in staging with warm connections but degrade under production concurrency, forcing a rollback during peak ingestion. (2) Anthropic key rotation. The script verifies a new key with a "1-token ping" [PAGE 3]. The trap is that a 1-token ping validates authentication but not quota, regional availability, or model-specific rate limits; rotation during a live ingestion window can cause silent 429 cascades that the audit drawer cannot explain because it only proves payload existence, not model health. (3) Cron secret rotation. All three cron routes fail closed on missing/mismatched `CRON_SECRET` [PAGE 2]. If the secret is rotated in Vercel environment variables but not propagated to the invocation scheduler, ingestion halts after the next cycle, and SourceSnapshot rows stop accumulating; the drawer then shows stale topology, violating the "evidence first" promise retroactively. (4) Malware persistence. The flagged PHP archive with obscured workflow remains on disk "until convenient" to delete [PAGE 1]; over a multi-week timeline, backup restoration or archive-scanning tooling can resurrect it, converting a one-time triage decision into a recurring supply-chain incident.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under production load—e.g., after a high-traffic launch when the hero galaxy is under cursor stress and the audit drawer is being clicked frequently—the engineering team may regress to pre-audit habits: disabling the drawer to reduce API load, skipping visual verification, or treating `canExposePublicPicks=false` as an acceptable steady state rather than a launch blocker. This regression is triggered by the perception that transparency features are "polish" rather than core infrastructure.

Counter-trap: the audit drawer is itself the counter-trap to regression. Because every pick card renders `<EvidenceAuditDrawer pickId={pick.id} />` [PAGE 1], removing the feature requires a deliberate code change and deploy, not just a config toggle. More importantly, the drawer exposes pick lineage with confidence-at-scoring and model version [PAGE 1]. If the team reverts to manual or black-box picking under pressure, the missing or mismatched lineage becomes visible to PRO/ELITE users, creating reputational cost that outweighs the short-term operational savings. The counter-trap only works if the detailed tier actually displays lineage; if the implementation ships with a stub, the counter-trap collapses into theater.

Clock: the launch chain imposes a hard serial dependency: typecheck → lint → brand-safety tests → build → visual verification → credentials → deploy → smoke [PAGE 3–4]. Each step consumes calendar time. The visual verification of reduced-motion fallback [PAGE 4] requires an OS accessibility toggle and hard-refresh, which cannot be automated in CI and therefore adds human latency. The clock competes with feature completeness: the "Galaxy IQ Brief" and command palette are explicitly queued post-deploy [PAGE 4], meaning the launch clock must stop at the current feature boundary. If the team succumbs to scope creep and pulls the galaxy IQ brief into this launch, the test matrix expands and the clock slips. The correct recursion is: ship the audited drawer and hardened galaxy first; treat premium features as second-clock deliverables.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: serverless cold start on Vercel/edge, Neon Postgres latency in us-east-1, Upstash Redis round-trips, and HiDPI rendering at DPR up to 3× [PAGE 2–3]. A physical veto triggers if DPR scaling causes canvas memory exhaustion on mobile devices or if serverless cold-start exceeds the cron timeout window, preventing the 15-minute settle-picks job from completing.

Biomechanical layer: human interaction with the drawer and galaxy. The drawer implements focus trap, Escape-to-close, body-scroll lock, and reduced-motion-aware animations [PAGE 1]. The galaxy implements mouse parallax up to ~12 px drift, cursor attractor with soft falloff, and per-depth-tier particle response [PAGE 2]. A biomechanical veto triggers if focus does not land on the close button, if body scroll is not locked while the drawer is open, or if reduced-motion mode fails to halt the animation loop. These are accessibility rights, not preferences; failure here violates the contract with users who rely on OS-level motion reduction.

Weather layer: network and environmental conditions affecting the audit API. A 503 when `canExposePublicPicks=false` [PAGE 1], a 404 for bootstrap or unpublished picks [PAGE 1], and CDN propagation delays after `vercel --prod` [PAGE 4] are environmental vetoes. The drawer must render gracefully under 503/404 without console errors that would otherwise be hidden by the production digest-only error surface [PAGE 3].

Veto adjudication matrix: any build veto (typecheck, lint, brand-safety test failure) blocks deploy; any security veto (missing CRON_SECRET, unvetted malware zip, hash-prefix collision risk) blocks feature enablement; any accessibility veto (reduced-motion breakage, focus-trap failure) blocks public release; any tier veto (FREE denied detailed payload, PRO/ELITE denied summary) is logically impossible by design but becomes possible if server-side authorization is bypassed. The veto hierarchy is: security > accessibility > build integrity > feature liveness. The galaxy's visual appeal cannot override a failed brand-safety test; the drawer's marketing value cannot override a missing CRON_SECRET.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Hash-prefix collision in audit drawer. Counterfactual: the system ships with k = 32-bit hex prefix and n > 65,536 SourceSnapshot rows. Veto condition: P_coll(n,k) ≥ 0.5 triggers wrong-payload association. Verifiable prediction: birthday-paradox computation yields a collision within two weeks of continuous ingestion at realistic row rates; audit drawer displays mismatched lineage for at least one pick card. Mitigation: raise k to ≥ 64 bits or enforce server-side full-hash equality before rendering detailed view.

Scenario 2 — Client-side tier escalation. Counterfactual: an attacker modifies the client component to request DETAILED audit while presenting as FREE. Veto condition: server-side route ignores client tier claims and checks `canExposePublicPicks` plus server-session tier. Verifiable prediction: a curl request to `/api/picks/[id]/audit` with forged FREE-tier cookies returns either 200 with tier="FREE" and summary-only payload, or 403/404; it never returns `AuditPayloadDetailed`. If detailed fields appear, the veto fails and the feature must be pulled.

Scenario 3 — Cron secret omission in production. Counterfactual: `CRON_SECRET` is not added via `vercel env add` before production deploy. Veto condition: all three cron routes fail closed, P(reject) = 1 [PAGE 2]. Verifiable prediction: `curl -i` to any cron route without the secret header returns HTTP 401/403; ingestion does not write new `SourceSnapshot` rows; the audit drawer's topology feed becomes stale within one cron cycle (maximum 60 minutes). Production smoke test must fail at Step 6 until the secret is present.
</RLVR_COUNTERFACTUAL_VETOES>