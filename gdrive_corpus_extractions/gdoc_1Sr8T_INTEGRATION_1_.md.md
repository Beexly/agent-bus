---
source: "INTEGRATION (1).md"
folder: "/CorpusRoot"
pages: 4
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3989
---

<NATIVE_REASONING>
The user wants me to act as the "GSE + GSI Frontier Reasoning Foundry" and process a source document about a freehire integration smoke test. I need to follow strict invariants:

1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (Not relevant here)
2. ZERO TOY EQUATIONS: Never invent fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, and exact singularity/breakdown regimes. When source pages are provided, cite exact [PAGE N] markers and verbatim quotes.
3. >= 1,000-WORD DEPTH across these exact XML sections:
- <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
- <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
- <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
- <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_TOtheORY_OF_MIND>
- <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
- <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is provided inline, not as separate pages. But I need to cite exact [PAGE N] markers. Since the source text is one continuous block, I should treat sections or logical breaks as pages, or use [PAGE 1], [PAGE 2], etc. based on the structure. The document seems to have natural breaks. Let me structure it as 4 pages since user said PAGES: 4. I can divide the source text into 4 logical pages:

PAGE 1: Header + Bottom line + (a) What ran, with evidence - CLI section
PAGE 2: API section (anonymous, live-verified via curl) + Local freehire-mcp server
PAGE 3: Verdict on the TEST + (b) Registering freehire on the fleet MCP bus + Prepared patch + Verification
PAGE 4: To apply later + standard MCP hosts + (c) Gate note + Remaining gaps

Wait, the user said PAGES: 4. I should cite [PAGE 1] through [PAGE 4] corresponding to the source text segments. Since the source is provided as one block, I'll segment it.

Key content to cover:
- Freehire integration smoke test
- CLI v0.28.0, prebuilt binary, auth status not authenticated
- CLI hangs to 60s context deadline due to VM egress proxy
- API verified via curl: search (3,855 golang postings), facets (4,783,954 total), job, company, similar, market coverage 405
- Param discipline: ignored_params with country/countries
- Local MCP server v0.8.0, 45 tools, all gated behind FREEHIRE_TOKEN
- Hosted MCP endpoint unreachable from VM (POST hangs)
- Fleet bus registration: in-process server, add freehire_* tools calling REST API
- Prepared patch: freehire_search, freehire_facets, freehire_job, freehire_company
- Verified in scratch copy on port 4319, live bus untouched
- Gate note: read-only anonymous vs gated sends (apply, save, subscribe, cv_*, etc.)
- Remaining gaps

I need to write >= 1000 words across the sections. Let's plan each section:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I'll analyze the integration test, the network egress issue, the auth gate, the bus patch, the difference between CLI and API behavior, etc. Multi-hop reasoning about why CLI fails but curl works (static Go binary not using system proxy), why MCP server gates everything, why hosted MCP POST hangs but GET returns 405, the security implications of the patch design (read-only only), singularity/breakdown regimes (60s deadline, token absence, proxy egress).

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX equations, units, page citations, breakdown. I'll define:
- Network latency model: T_total = T_connect + T_TLS + T_TTFB + T_payload
- CLI deadline: T_deadline = 60 s
- curl observed: 3.5–6.8 s
- POST hang: TTFB never (singularity at TTFB → ∞)
- MCP tool count: N_tools = 45, read-only subset, write subset
- Bus tools: N_bus = 9 existing + 4 freehire = 13
- Truncation cap: C_max = 12,000 chars
- Probability of successful anonymous MCP call: P(success | no token) = 0 (hard gate)
- Facet total: D_total = 4,783,954 postings
- Golang search: N_golang = 3,855
- Info units: bytes (77 KB facets, 7.6 MB ELF), seconds, characters.
- Cite [PAGE 1], [PAGE 2], etc.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Discuss lineage of MCP (Model Context Protocol), freehire-mcp, Go CLI, fleet bus (gse-spark-mcp), the "gse_echo pattern", previous stale "3.3M" vs verified "4.7M+", multi-week traps like assuming backend repo needed, assuming hosted MCP works from sandbox, assuming all README tools are anonymous, the trap of applying patch to live bus prematurely.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Discuss Garrett's role (token creation is his act), crisis habit (rushing to apply patch, creating token prematurely), counter-trap (verify scratch copy, keep live bus byte-identical), clock (60s deadline, 120s curl hang, multi-week timeline for Garrett approval).

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. This is a bit metaphorical since it's software. I'll interpret layers: network layer (egress proxy), transport layer (TCP/TLS/HTTP), application layer (MCP stdio vs Streamable HTTP), policy layer (auth gate). Vetoes: proxy vetoes Go binary egress, token vetoes MCP data, 405 vetoes wrong HTTP method, zod validation vetoes bad types. "Weather" = network conditions. "Biomechanical" = human acts (Garrett's tap). Physical = VM, binary, network cables/proxy.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll create 3 counterfactual veto scenarios:
1. If token absent, MCP search returns error (verified).
2. If Go binary used behind proxy without proxy config, deadline exceeded (verified).
3. If POST to hosted MCP from VM, hang/timeout (verified).
Plus predictions for what happens if applied to live bus on normal network.

Word count: Need >= 1000 words total across sections. THINK_TRACE alone >=400. I'll aim for ~150-200 words per other section to be safe.

Let's draft carefully.

Structure:
<THINK_TRACE>
...
</THINK_TRACE>
<SOURCE_OPERATORS_AND_EQUATIONS>
...
</SOURCE_OPERATORS_AND_EQUATIONS>
<RETROCAUSAL_GENEALOGY>
...
</RETROCAUSAL_GENEALOGY>
<RECURSIVE_THEORY_OF_MIND>
...
</RECURSIVE_THEORY_OF_MIND>
<CROSS_LAYER_VETO_ADJUDICATION>
...
</CROSS_LAYER_VETO_ADJUDICATION>
<RLVR_COUNTERFACTUAL_VETOES>
...
</RLVR_COUNTERFACTUAL_VETOES>

Citations: I need [PAGE N] markers. Since source text is one block, I'll define page breaks logically:
- PAGE 1: From "freehire — integration smoke test" through end of CLI section (including failure point).
- PAGE 2: From "(a) ... 2. The API..." through "Local freehire-mcp server" section including tool/call results.
- PAGE 3: From "Verdict on the TEST" through prepared patch verification and "To apply later".
- PAGE 4: From standard MCP hosts JSON through "Remaining gaps".

I will quote verbatim where needed and cite.

Let's write.

THINK_TRACE (>=400 words):
Start with the integration smoke test context. Multi-hop:
1. CLI binary is static no-cgo Go, doesn't respect env proxies (curl/npm do). Therefore hangs at 60s context deadline. Hop: binary static -> no cgo -> no system proxy lookup -> egress proxy invisible -> TCP handshake never completes through proxy -> deadline.
2. API layer works via curl because curl uses proxy. Search returns 3,855 golang postings. Facets total 4,783,954. This validates README claim "4.7M+" and invalidates stale reel "3.3M".
3. Param discipline: API returns ignored_params for wrong facet names (country vs countries). This is a schema governance signal. The bus patch must use plural facet names.
4. MCP server: 45 tools, all gated behind FREEHIRE_TOKEN. Even README-described read-only tools return "not authenticated". This is a hard authorization boundary, not a soft rate limit.
5. Hosted MCP endpoint: GET returns 405 quickly (method not allowed), POST hangs indefinitely (TTFB never). Asymmetry suggests WAF/proxy buffering or route-specific middlebox dropping POST bodies from this egress path.
6. Fleet bus: in-process, stateless Streamable HTTP, no proxying. Registration means adding native tools that call REST. Patch verified in scratch (port 4319), live bus untouched (byte-identical).
7. Gray zones: The patch's token env var is wired but unused for the four tools; future write tools would need it. No write tools in patch. The egress hang on this VM means even perfect code cannot be functionally verified here for outbound bus calls; only compile+register+local health.

Gray-zone audit: The distinction between "tool exists" and "tool returns data" is mediated by token. The distinction between "CLI hangs" and "API is slow" is mediated by proxy and binary linkage. The distinction between "405" and "hang" is mediated by HTTP verb and middlebox state.

Singularity/breakdown: T_deadline = 60s; if T_TTFB > 60s, CLI fails. Token absence => P(data | tool_call) = 0. POST to hosted MCP => TTFB → ∞ (singularity).

SOURCE_OPERATORS_AND_EQUATIONS:
Define variables:
- T_conn: connection time (s)
- T_tls: TLS handshake (s)
- T_ttfb: time to first byte (s)
- T_pay: payload transfer (s)
- T_total = T_conn + T_tls + T_ttfb + T_pay
- CLI deadline: D_cli = 60 s [PAGE 1]
- curl observed: T_curl ∈ [3.5, 6.8] s [PAGE 1/2]
- Hosted GET: T_get = 6.5 s, status 405 [PAGE 2]
- Hosted POST: T_post → ∞, no bytes at 45/60/120 s [PAGE 2]
- Facet payload size: S_facets = 77 KB [PAGE 2]
- Binary size: S_bin = 7.6 MB [PAGE 1]
- Total postings: N_total = 4,783,954 [PAGE 2]
- Golang postings: N_golang = 3,855 [PAGE 2]
- MCP tools: N_mcp = 45 [PAGE 2]
- Bus tools after patch: N_bus = 13 [PAGE 3]
- Truncation cap: C_max = 12,000 chars [PAGE 3]
- Probability of anonymous MCP data: P(data | ¬token) = 0 [PAGE 2]
- Zod validation error code: -32602 [PAGE 2]

Equations in LaTeX.
Assumptions: static Go binary ignores HTTP_PROXY; SDK Streamable HTTP has 60s limit; MCP stdio transport works locally.
Breakdown regimes: egress proxy singularity; auth gate singularity; POST middlebox singularity.

RETROCAUSAL_GENEALOGY:
Lineage: Model Context Protocol (MCP) -> freehire-mcp TypeScript server v0.8.0 -> freehire-cli Go v0.28.0 -> hosted freehire.me API -> fleet bus gse-spark-mcp (src/server.ts, SDK ^1.32, zod v4).
Historical traps: stale reel "3.3M" vs live "4.7M+"; backend repo clone failure (132 MB, HTTP/2 stream cancel, early EOF) led to unnecessary dependency assumption; assuming CLI search parity could be proven via binary rather than API; assuming hosted MCP POST works from sandbox.
Multi-week traps: waiting for Garrett token could stall integration for weeks; applying patch prematurely to live bus risks shared state; confusing standard MCP host registration (npx freehire-mcp) with bus-native registration.

RECURSIVE_THEORY_OF_MIND:
Crisis habit regression: Under pressure, Garrett might run `freehire auth login` himself, create fhk_ token, paste patch into live src/server.ts, restart bus, and enable write tools. This is the regression to "just make it work."
Counter-trap: The documented design explicitly reserves token creation for Garrett's account act; the patch is prepared not applied; scratch copy validates compilation without touching live fleet.db; read-only tools only.
Clock: 60s CLI deadline, 120s curl hang, multi-week token latency. The clock argues for asynchronous verification (scratch) rather than synchronous live-blocking deployment.

CROSS_LAYER_VETO_ADJUDICATION:
Layers:
- Physical/Link: VM egress through hatch-egress-proxy. Veto: Go static binary cannot see proxy -> connection never established.
- Transport/TCP-TLS: curl/TLS completes in 4.1s; Go binary hangs. Veto: proxy-aware vs proxy-ignorant stacks.
- Application/MCP: stdio handshake OK; tools/list OK; tools/call gated. Veto: token gate.
- Application/REST: GET /market/coverage -> 405. Veto: method discipline.
- Policy/Human: Garrett's tap required for token; no auto-apply. Veto: outbound application actions.
"Weather" = network proxy conditions; "biomechanical" = Garrett's manual auth act.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: Token absent, MCP call made. Veto: `not authenticated`. Prediction: any read-only tool returns error; no job data crosses the boundary. Verifiable by evidence-tool-calls.json [PAGE 2].
Scenario 2: Go CLI invoked on this VM without proxy support. Veto: context deadline exceeded at 60s. Prediction: search/facets hang; curl succeeds in 3.5–6.8s. Verifiable [PAGE 1].
Scenario 3: POST to https://freehire.me/api/v1/mcp from VM. Veto: TTFB never (infinite latency). Prediction: SDK Streamable HTTP times out at 60s; GET returns 405 in 6.5s. Verifiable [PAGE 2].
Also add prediction for normal network: POST would complete, bus tools would return data if deployed to Cloud Run.

Need to ensure no betting lines. No sports content here, so fine.

Word count check: I'll write generously.

Let's compose the final response.
</NATIVE_REASONING>

<THINK_TRACE>
The integration smoke test is not a simple connectivity check; it is a multi-hop diagnostic of three decoupled systems (CLI binary, anonymous REST API, local MCP server) operating under a hostile egress proxy and a hard authorization gate. The first hop is the CLI failure mode: the prebuilt freehire binary is a static, no-cgo ELF of 7.6 MB [PAGE 1]. Because it is statically linked and lacks cgo, it does not consult the host's libc resolver or system proxy environment in the same way curl and npm do [PAGE 1]. The VM egresses exclusively through hatch-egress-proxy, which curl and npm honor [PAGE 1]. The Go binary therefore never completes its TCP/TLS path to freehire.me and consistently strikes the documented 60 s context deadline [PAGE 1]. This creates a false negative at the CLI layer that is entirely environmental, not an API defect. The second hop is the REST API verification via curl, which succeeds in 3.5–6.8 s from the same VM [PAGE 1]. The agent search endpoint returns meta.total = 3,855 golang postings with full markdown descriptions [PAGE 2]. The facets endpoint returns a 77 KB payload with data.total = 4,783,954 live postings [PAGE 2], independently confirming the README's "4.7M+" claim and directly falsifying the stale reel figure of "3.3M" [PAGE 2]. Parameter discipline is enforced at the API layer: a probe using country=US and city=houston returns meta.ignored_params because the correct facet names are countries and cities [PAGE 2]. This means the bus patch must use plural facet names or risk silent catalogue widening.

The third hop is the local MCP server. It builds cleanly (npm ci, npm run build), identifies as freehire v0.8.0 over stdio, and exposes 45 tools [PAGE 2]. However, every tool—including the five the README describes as forwarded to the anonymous hosted server—returns "not authenticated: set FREEHIRE_TOKEN or run freehire auth login" when no token is present [PAGE 2]. This is a hard authorization boundary: P(data | ¬token) = 0 for the local server [PAGE 2]. A zod validation probe (work_mode as string instead of array) yields live MCP error -32602, proving dispatch is real and not a stub [PAGE 2]. The hosted MCP endpoint exhibits an asymmetric failure: GET returns 405 in 6.5 s, while POST hangs with zero bytes past 45, 60, and 120 s despite a 6 ms TCP connect and 4.1 s TLS handshake [PAGE 2]. The TTFB never arrives, indicating a middlebox or WAF singularity specific to POST bodies on this egress path.

The fleet bus is a separate in-process MCP server (src/server.ts, SDK ^1.32, zod v4, stateless Streamable HTTP on localhost:4311/mcp) that does not proxy external servers; capability is added natively via server.tool blocks following the gse_echo pattern [PAGE 3]. The prepared patch adds four read-only tools (freehire_search, freehire_facets, freehire_job, freehire_company) wrapping the verified REST routes, with output capped at 12,000 chars and a truncation note [PAGE 3]. Verification occurred only in /tmp/bus-check on port 4319 with a sandbox HOME; the live bus and src/server.ts remain byte-identical [PAGE 3]. On this VM, even a correct patch cannot produce outbound data because Node fetch would hit the same egress hang [PAGE 3]. The gray zone is therefore between compile-time correctness (verified) and runtime operability (blocked by proxy and token policy).

Breakdown regimes: (i) CLI deadline singularity at T_total > 60 s caused by proxy-invisible static binary; (ii) MCP auth singularity at ¬token ⇒ zero data; (iii) hosted MCP POST singularity at TTFB → ∞ from this VM. None of these are defects in freehire itself; they are environmental and policy boundaries that must be respected before Garrett applies the patch on a normal-network host.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let \(T_{\text{conn}}\) be TCP connect time, \(T_{\text{tls}}\) TLS handshake time, \(T_{\text{ttfb}}\) time-to-first-byte, and \(T_{\text{pay}}\) payload transfer time, all in seconds (s). End-to-end latency is

\[
T_{\text{total}} = T_{\text{conn}} + T_{\text{tls}} + T_{\text{ttfb}} + T_{\text{pay}} .
\]

The CLI operates under a hard context deadline \(D_{\text{cli}} = 60\ \text{s}\) [PAGE 1]. Curl measurements on the same VM yield \(T_{\text{curl}} \in [3.5, 6.8]\ \text{s}\) [PAGE 1]. The hosted GET returns HTTP 405 at \(T_{\text{get}} = 6.5\ \text{s}\); the hosted POST exhibits \(T_{\text{ttfb}} \to \infty\) with zero bytes at \(45, 60,\) and \(120\ \text{s}\) [PAGE 2].

Information units and counts:
- Prebuilt CLI binary size: \(S_{\text{bin}} = 7.6\ \text{MB}\) ELF [PAGE 1].
- Facets payload size: \(S_{\text{facets}} = 77\ \text{kB}\) [PAGE 2].
- Live postings total: \(N_{\text{total}} = 4{,}783{,}954\) [PAGE 2].
- Golang query postings: \(N_{\text{golang}} = 3{,}855\) [PAGE 2].
- MCP tool surface: \(N_{\text{mcp}} = 45\) tools [PAGE 2].
- Bus tools after patch: \(N_{\text{bus}} = 9 \text{ existing} + 4 \text{ freehire\_*} = 13\) [PAGE 3].
- Bus search truncation cap: \(C_{\max} = 12{,}000\) characters [PAGE 3].

Authorization probability:
\[
P(\text{data} \mid \neg \text{token}) = 0
\]
for every local MCP tool, including read-only forwards [PAGE 2].

Zod validation dispatch proof:
\[
\text{tools/call}(\text{job\_market\_stats}, \text{work\_mode}=\text{string}) \Rightarrow \text{MCP error } -32602\ \text{("Expected array, received string")} .
\]
[PAGE 2]

Assumptions: (1) the static Go binary ignores \(HTTP\_PROXY\) and \(HTTPS\_PROXY\); (2) the official MCP SDK Streamable HTTP transport enforces a 60 s limit; (3) the fleet bus is stateless and in-process, so outbound tool calls depend entirely on the host network, not bus internals.

Exact singularity/breakdown regimes:
1. CLI egress singularity: \(T_{\text{total}} > D_{\text{cli}}\) because the binary never traverses hatch-egress-proxy [PAGE 1].
2. MCP auth singularity: absence of \(FREEHIRE\_TOKEN\) or `freehire auth login` forces every tools/call into the not-authenticated error state [PAGE 2].
3. Hosted MCP POST singularity: \(T_{\text{ttfb}} \to \infty\) from this VM despite successful TLS and successful GET on the same URL [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The scientific lineage of this integration traces from the Model Context Protocol (MCP) specification downward: the official TypeScript SDK establishes stdio and Streamable HTTP transports; freehire-mcp implements server v0.8.0 with 45 tools [PAGE 2]; freehire-cli v0.28.0 provides a Go binary interface to the same hosted REST API at freehire.me [PAGE 1]; the fleet bus (gse-spark-mcp, src/server.ts, SDK ^1.32, zod v4) represents a separate in-process MCP lineage that does not mount external servers but accretes capability through native server.tool blocks [PAGE 3]. The "gse_echo pattern" is the bus's historical convention for adding text()-shaped handlers with .describe() on every parameter [PAGE 3].

Historical traps embedded in the dossier: the public reel claimed "3.3M" postings, but the live facets endpoint returns 4,783,954, making the reel figure stale and potentially misleading for capacity planning [PAGE 2]. The main backend repo (strelov1/freehire, 132 MB) failed to clone twice via HTTP/2 stream cancel and early EOF; treating that clone as a prerequisite would have been a multi-week trap, since the integration only requires the CLI and MCP surfaces plus the hosted API [PAGE 1]. Another trap is assuming CLI search parity could be proven through the binary itself; the proxy egress hang forces parity to be proven at the API layer via curl instead [PAGE 1]. A third trap is assuming the hosted MCP endpoint is a zero-install path from this sandbox; POSTs never complete here, so the local server build is the only verifiable surface tonight [PAGE 2].

Multi-week traps specific to deployment: waiting for Garrett to create the fhk_… API key or run `freehire auth login` could stall the project indefinitely because token creation is explicitly his account act [PAGE 1, PAGE 4]. Applying the prepared snippet to the live bus before a normal-network deployment window would risk shared state on localhost:4311/mcp without verified outbound egress [PAGE 3]. Finally, conflating standard MCP host registration (Claude Code/Desktop via npx freehire-mcp with FREEHIRE_TOKEN env) with bus-native registration is a category error; the fleet bus requires in-process TypeScript patches, not external server mounts [PAGE 3, PAGE 4].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression: under integration pressure, the operator or Garrett may regress to "just make it work" by (a) running `freehire auth login` on the VM, (b) generating an fhk_… token prematurely, (c) pasting the freehire-bus-tools.snippet.ts directly into the live src/server.ts, and (d) restarting the bus on port 4311 without scratch validation. This regression collapses the deliberate separation between prepared and applied states [PAGE 3, PAGE 4].

Counter-trap: the smoke test explicitly enforces a recursive pause. The patch is prepared, compiled, and registered only in /tmp/bus-check on port 4319 with a sandbox HOME, leaving live fleet.db unopened and src/server.ts byte-identical [PAGE 3]. The four bus tools are read-only; no write tool (apply, save, subscribe, cv_*, jobs_add) is included [PAGE 3, PAGE 4]. The token env vars FREEHIRE_API_URL and FREEHIRE_TOKEN are wired for future account tools but unused by the current four tools, preserving the option without activating the send surface [PAGE 3].

Clock: the 60 s CLI deadline, the 120 s curl POST hang, and the multi-week latency of Garrett's token approval form competing temporal constraints. The clock argues for asynchronous verification (scratch build, REST parity, local MCP handshake) rather than synchronous live deployment that would block on network conditions outside the patch's control [PAGE 1, PAGE 2, PAGE 3]. The correct recursive state is: patch verified, live bus untouched, token absent, write surface gated, deployment deferred to Garrett on a normal-network host.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/link layer veto: the VM egresses only through hatch-egress-proxy. The static, no-cgo Go binary cannot resolve or traverse this proxy, so the physical path to freehire.me is vetoed for the CLI despite DNS and TLS being reachable by curl [PAGE 1].

Transport layer veto: curl completes TLS in 4.1 s and receives bytes in 3.5–6.8 s; the Go binary's requests never complete because it lacks proxy awareness. This is a stack veto, not an API veto [PAGE 1].

Application layer veto (REST): GET /api/v1/market/coverage returns 405 because the route is POST-only [PAGE 2]. Param-name mismatches (country vs countries) are ignored and reported in meta.ignored_params, vetoing silent mis-filters [PAGE 2].

Application layer veto (MCP): the local server's tools/call dispatcher returns "not authenticated" for every tool until FREEHIRE_TOKEN is set or `freehire auth login` is run [PAGE 2]. Zod validation vetoes malformed inputs, evidenced by error -32602 for work_mode as a string [PAGE 2].

Policy/biomechanical layer veto: creating the fhk_… API key or running auth login is Garrett's account act; no token exists on this VM and none was requested [PAGE 1]. All auto-apply and account-state write classes (apply, save/unsave, subscribe/unsubscribe, cv_*, experience_*, jobs_add/edit) remain OFF until Garrett explicitly approves [PAGE 4].

Weather equivalent: the hatch-egress-proxy conditions are the atmospheric layer. On this VM, they veto outbound POSTs to the hosted MCP endpoint (TTFB never) and outbound calls from any bus-native tool after deployment [PAGE 2, PAGE 3]. On a normal-network Cloud Run host, these vetoes lift, and the prepared patch is expected to function as designed. The live bus's Node fetch would inherit the same proxy limitation on this VM, which is a known sandbox state, not a patch defect [PAGE 3].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1 — Auth gate veto.
Counterfactual: A client invokes freehire_search (or any of the 45 local MCP tools) without setting FREEHIRE_TOKEN or running `freehire auth login`.
Verifiable veto: tools/call returns `isError` result: "not authenticated: set FREEHIRE_TOKEN or run freehire auth login" [PAGE 2]. Prediction: zero job-data records cross the MCP boundary; P(data | ¬token) = 0. This holds for all read-only forwards (search, facets, salary_stats, check_jobs_open, similar_jobs) despite the README describing some as anonymous-hosted [PAGE 2].

Scenario 2 — CLI egress proxy veto.
Counterfactual: The operator runs `freehire search` or `freehire facets` using the prebuilt v0.28.0 binary on this VM without configuring a Go-aware proxy.
Verifiable veto: `Get "https://freehire.me/api/v1/agent/jobs/search?...": context deadline exceeded` after 60 s, reproduced 3× including with GODEBUG=netdns=cgo+1 [PAGE 1]. Prediction: every CLI API call hangs until D_cli = 60 s, while identical URLs answered by curl in 3.5–6.8 s [PAGE 1]. The veto is binary-linkage and proxy-specific; it disappears on a host where the Go binary respects system proxy settings.

Scenario 3 — Hosted MCP POST middlebox veto.
Counterfactual: The official @modelcontextprotocol/sdk Client using Streamable HTTP POSTs to https://freehire.me/api/v1/mcp from this VM.
Verifiable veto: TCP connect 6 ms, TLS 4.1 s, but TTFB never arrives; zero bytes at 45, 60, and 120 s; SDK transport times out at 60 s [PAGE 2]. By contrast, GET on the same URL returns 405 in 6.5 s [PAGE 2]. Prediction: on this VM, the hosted endpoint is unreachable for write/streaming MCP traffic; on any normal network, it is the documented zero-install path for read-only search tools with no key [PAGE 2]. A successful deployment prediction is that the four bus tools return REST data when run from Cloud Run or another non-proxy-constrained host, provided the live bus is restarted after snippet insertion [PAGE 3].
</RLVR_COUNTERFACTUAL_VETOES>