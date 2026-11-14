---
source: "ENROLLMENT.md"
folder: "/CorpusRoot"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 4130
---

<NATIVE_REASONING>
The user is asking me to analyze the provided source text (ENROLLMENT.md) and produce output following strict invariants:

1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).</THINK_TRACE>
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

The source text is about fleet bus enrollment, token provisioning, auth mechanisms, etc. It's a technical document about an MCP server (gse-spark-mcp) with token-based auth.

I need to treat this as a reasoning/foundry task. The content is about auth tokens, SHA-256 hashes, loopback binding, etc. I should not invent betting lines. I should use formal LaTeX equations where appropriate (cryptographic hash functions, probability of collision, entropy, etc.), cite [PAGE 1] since only 1 page is provided, include verbatim quotes, and discuss breakdown regimes.

The sections are a bit oddly themed (retrocausal genealogy, recursive theory of mind, cross-layer veto adjudication, RLVR counterfactual vetoes) but I must adapt them to the source content about fleet bus enrollment/auth.

Let me plan the content:

<THINK_TRACE> (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Analyze the auth mechanism: raw token never stored, SHA-256 hash stored, case-insensitive identity matching (trim + lowercase), fail-closed default, legacy unauthenticated mode via env flag, loopback-only bind by design, non-loopback requires two flags.
- Multi-hop: token generation -> hash computation -> out-of-band transfer to Motif/Garrett -> server env update -> restart -> agent verification (heartbeat, post to self, read peek:true, wrong-name rejection).
- Gray zones: token value never in git/chat/bus/packet; hash is stored but raw token is secret; case-insensitivity means "Hermes" == "hermes" token namespace collision risk if two agents differ only by case? Actually identity matching is case-insensitive, so "HERMES" and "hermes" would map to same identity. Could be a gray zone.
- Orca removed - do not enroll.
- Rollback snapshot details.
- Word count target: 400+ words here.

<SOURCE_OPERATORS_AND_EQUATIONS>: Formal LaTeX, units, page citations, breakdown.
- Define hash function: h = SHA-256(t) where t is raw token, |t| >= 32 chars = 256 bits if hex? Actually openssl rand -hex 32 produces 32 bytes = 64 hex chars = 256 bits of entropy.
- H: {0,1}^{256} -> {0,1}^{256} modeled as random oracle.
- Storage map: FLEET_AGENT_TOKEN_HASHES: Name -> hex digest.
- Authentication predicate: Accept iff SHA-256(t_raw) == H[name_lower_trimmed] && name_claimed == name_issued (case-insensitive).
- Fail-closed: if map empty and FLEET_ALLOW_UNAUTHENTICATED != 1, reject all.
- Collision probability: birthday bound approx q^2 / 2^257 for q queries? Or preimage resistance 2^256.
- Loopback bind constraint: bind address ∈ {127.0.0.1, ::1}; non-loopback requires FLEET_ALLOW_NON_LOOPBACK=1 AND token auth configured.
- Cite [PAGE 1] with verbatim quotes from the source.
- Breakdown regimes: SHA-256 preimage break, hash map env var length limits, restart causing old hash death (temporal window), case-insensitive namespace collapse, legacy flag misconfiguration.
- Units: bits (entropy), hex chars, bytes, seconds (restart window), etc.

<RETROCAUSAL_GENEALOGY>: Historical/scientific lineage & multi-week traps.
- Lineage: challenge-response auth, saltless password hashing (SHA-256 of raw token), MCP protocol, loopback security (zero trust local network), Orca removal on 2026-10-15 (two weeks before go-live 2026-10-30), Workstream E elimination offensive.
- Multi-week traps: Orca removal date vs go-live date; snapshot is pre-go-live DB (heartbeats: motif, 2026-10-14) but go-live added peek audit row; restoring snapshot loses post-go-live state; token rotation old hash dies at restart (instant revocation vs session continuity); Windows-host agents depend on Garrett handout (human bottleneck).
- Multi-week trap: if rollback performed after 2026-10-30, DB lacks post-go-live heartbeat rows; motif token file at .tokens/motif.token mode 600.

<RECURSIVE_THEORY_OF_MIND>: Crisis habit regression vs counter-trap vs clock.
- Model the operators (Garrett, Motif, agents) as recursive agents modeling each other.
- Crisis habit regression: under pressure, operators might revert to legacy unauthenticated mode (FLEET_ALLOW_UNAUTHENTICATED=1) or bind non-loopback casually, violating the design.
- Counter-trap: the "loud startup banner" and dual-flag requirement for non-loopback are counter-traps against regression.
- Clock: token rotation window; old hash dies at restart; 25/25 test suite; go-live timestamp ~18:25 CT 2026-10-30; snapshot restore must happen before further state accumulates.
- Verb: "Garrett hands out the token VALUES" - human trust channel.

<CROSS_LAYER_VETO_ADJUDICATION>: Physical/biomechanical/weather veto proof.
- This is oddly themed but I can map: Physical layer = loopback bind, host filesystem permissions (mode 600), network tunnel (SSH/Tailscale), no non-loopback bind.
- Biomechanical = human operators typing tokens, Garrett handing values on Windows host, copy-paste errors, case-insensitive trim/lowercase at boundaries.
- Weather veto proof = not literal weather, but environmental noise: network partitions between agent host and VM, SSH tunnel drops, Tailscale latency, restart downtime causing heartbeat failures.
- Adjudication: which layer vetoes? E.g., even if cryptography is sound, physical exposure of raw token in git/chat vetoes security. Non-loopback bind without both flags is refused by server (code veto). Wrong-name call with same token rejected (protocol veto).

<RLVR_COUNTERFACTUAL_VETOES>: 3 verifiable RLVR veto scenarios + predictions.
- RLVR = Reinforcement Learning from Verifiable Rewards? Or some verification framework. I'll frame as verifiable rejection scenarios.
- Scenario 1: Spoof attempt - agent hermes uses its token to claim from_agent = motif. Prediction: rejected, write nothing (source explicitly says verified live).
- Scenario 2: No token configured + no legacy flag = server fails closed. Prediction: all fleet_post/read/etc. rejected.
- Scenario 3: Non-loopback bind attempted without FLEET_ALLOW_NON_LOOPBACK=1 AND token auth configured. Prediction: server refuses bind.
- Maybe scenario 4: Wrong-name call with same token must be rejected. Prediction: rejection.
- Need exactly 3 verifiable veto scenarios + predictions. I'll do 3.
- Each should be verifiable (testable) and include prediction.

Word count: total >= 1,000 words across sections. I'll aim for substantial length in each, especially THINK_TRACE >=400.

Let's start drafting.

Need to include [PAGE 1] citations and verbatim quotes.

Verbatim quotes to use:
- "Each agent owns ONE secret token (random, ≥32 chars)."
- "The server never stores raw tokens: it stores SHA-256 hashes in the FLEET_AGENT_TOKEN_HASHES env map"
- "a token cannot speak or read as another agent (verified live: spoof attempts are rejected and write nothing)"
- "No token configured for anyone + no legacy flag = the server fails closed."
- "Legacy unauthenticated mode exists only via FLEET_ALLOW_UNAUTHENTICATED=1 (loopback only, loud startup banner)"
- "the server refuses a non-loopback bind unless FLEET_ALLOW_NON_LOOPBACK=1 is set AND token auth is configured — both, deliberately."
- "Do NOT expose it by binding a non-loopback host casually"
- "Orca is REMOVED from the fleet (Garrett, 2026-10-15). Do not enroll it."
- "The old hash dies at the restart."

I'll cite as [PAGE 1] after quotes.

Now formal LaTeX:
- Let $\mathcal{T} = \{0,1\}^{256}$ be raw token space from `openssl rand -hex 32` (32 bytes, 256 bits entropy).
- Hash $H: \mathcal{T} \to \{0,1\}^{256}$, $H = \text{SHA-256}$.
- Stored map $\mathbb{M}: \mathcal{N} \rightharpoonup \{0,1\}^{256}$ where $\mathcal{N}$ is agent identity namespace.
- Canonicalization $C: \mathcal{N} \to \mathcal{N}$, $C(n) = \text{lowercase}(\text{trim}(n))$ [PAGE 1].
- Auth predicate: $\text{Accept}(n, t) \iff H(t) = \mathbb{M}(C(n)) \land C(n) = C(n_{\text{issued}})$.
- Fail-closed: $\mathbb{M} = \emptyset \land \neg \text{LegacyEnabled} \implies \forall \text{calls}: \text{Reject}$.
- Non-loopback condition: $\text{Bind}(a) \text{ allowed} \iff (a \in \text{Loopback}) \lor (\text{FLEET\_ALLOW\_NON\_LOOPBACK}=1 \land \mathbb{M} \neq \emptyset)$.
- Collision/preimage: adversary advantage $\le q/2^{256}$ for preimage, birthday $\approx q^2/2^{257}$.
- Entropy: $S = 256$ bits.

Breakdown regimes:
- $H$ inversion (SHA-256 broken) => total auth compromise.
- $\mathbb{M}$ env var truncation or JSON parse failure => fail-closed or misconfigured agents.
- Restart window: old hash dies at restart; agents not yet rotated lose connectivity until config update (temporal denial-of-service).
- Case-insensitive namespace: $C(n_1)=C(n_2)$ for $n_1 \neq n_2$ => identity collapse (e.g., "Hermes" and "hermes" same principal).
- Legacy flag misconfiguration: $FLEET\_ALLOW\_UNAUTHENTICATED=1$ on non-loopback or in production => cleartext local auth bypass.

Now word budget. Let's estimate:
THINK_TRACE: 500 words.
SOURCE_OPERATORS_AND_EQUATIONS: 350 words.
RETROCAUSAL_GENEALOGY: 250 words.
RECURSIVE_THEORY_OF_MIND: 250 words.
CROSS_LAYER_VETO_ADJUDICATION: 250 words.
RLVR_COUNTERFACTUAL_VETOES: 200 words.
Total ~1800 words. Good.

Need to ensure no betting lines. This is technical, so fine.

No toy equations: I will use real cryptographic formulas and explicitly state assumptions (random oracle model, etc.) and breakdown regimes.

Let's write carefully.

I'll include exact [PAGE 1] markers throughout.

Let's compose the final response.

Important: The sections must be exactly those XML tags. I will not add extra top-level sections.

I need to be careful with LaTeX in XML - use standard LaTeX syntax, escape nothing special? In XML, `<` and `&` could be problematic if in text, but LaTeX uses `\leq` etc. I'll avoid raw `<` in text except tags. I can use `\lt` or words.

Let's draft each section.

THINK_TRACE:
Start with deep multi-hop derivation.
Hop 1: Token generation on agent host: `openssl rand -hex 32` -> 32 bytes, 256 bits entropy, raw value remains local.
Hop 2: Hash computation: SHA-256 -> 64 lowercase hex chars.
Hop 3: Out-of-band transfer of hash+name to Motif/Garrett; server env map updated; bus restarted with env var.
Hop 4: Agent verifies via fleet_heartbeat, fleet_post to self, fleet_read peek:true, wrong-name rejection.
Hop 5: Rotation invalidates old hash at restart.
Gray zones: case-insensitive trim+lowercase means namespace is quotiented by equivalence class; raw token never in packet but hash is compared; loopback only means remote agents need SSH/Tailscale tunnel (network dependency); fail-closed means missing config = total outage; Orca removal means any legacy reference to Orca must be purged.
Word count check: I'll write enough.

SOURCE_OPERATORS_AND_EQUATIONS:
Define notation, equations, units, citations, breakdown.

RETROCAUSAL_GENEALOGY:
Historical lineage: Orca removed 2026-10-15, go-live 2026-10-30 ~18:25 CT, snapshot pre-go-live DB (heartbeats motif 2026-10-14), Workstream E elimination offensive, QC-fixed source. Multi-week traps: restoring snapshot after go-live loses state; token rotation old hash dies at restart causing temporary mismatch; human handoff bottleneck (Garrett on Windows host); 25/25 test suite may not cover all cross-agent spoof combinations.

RECURSIVE_THEORY_OF_MIND:
Operator models: Garrett models agents needing tokens; agents model Garrett as trustworthy out-of-band channel; Motif models server state. Crisis habit regression: under incident pressure, operator might set FLEET_ALLOW_UNAUTHENTICATED=1 or bind non-loopback, regressing to insecure legacy mode. Counter-trap: loud startup banner, dual-flag requirement, fail-closed default. Clock: 2026-10-30 go-live, 18:25 CT, restart window, 25/25 tests, snapshot restore must be time-bounded before new heartbeats accumulate.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: mode 600 token file, loopback bind 127.0.0.1:4311, SSH/Tailscale tunnel for remote hosts, no non-loopback casual bind.
Biomechanical: human copy/paste of token values, trim+lowercase at boundaries, Windows host handout.
Weather veto proof: environmental/network veto - tunnel drop, host reboot, VM network partition causes heartbeat failure independent of crypto.
Adjudication: server code vetoes non-loopback without both flags; protocol vetoes wrong-name; crypto vetoes spoof; physical vetoes raw token exposure.

RLVR_COUNTERFACTUAL_VETOES:
Three scenarios:
1. Spoof: hermes token used for from_agent=motif. Verifiable: fleet_post with mismatched identity. Prediction: rejected, write nothing [PAGE 1].
2. Fail-closed: empty hash map, no legacy flag. Verifiable: start server with empty env. Prediction: all calls rejected, server fails closed [PAGE 1].
3. Non-loopback bind: bind to 0.0.0.0 without FLEET_ALLOW_NON_LOOPBACK=1 and without auth. Verifiable: attempt bind. Prediction: server refuses bind unless both flags set [PAGE 1].
Maybe add wrong-name as 4? But requirement says 3. I'll stick to 3 but maybe mention wrong-name inside scenario 1 or separate. Requirement: "3 verifiable RLVR veto scenarios + predictions." Exactly 3 is safest.

I'll format predictions clearly.

Now I'll write the final response. Need to ensure total >= 1000 words. I'll be verbose enough.

Let's count roughly as I write.

I will start now.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source document describes a zero-trust local fleet bus built around per-agent token provisioning. I derive the security chain across five hops. Hop 1 is token generation: each agent executes `openssl rand -hex 32` on its own host, producing 32 random bytes, i.e. 256 bits of entropy, represented as 64 lowercase hex characters [PAGE 1]. The raw token never enters git, chat, the bus, or any packet; it lives only in the agent's MCP client config or environment variable `FLEET_AUTH_TOKEN` [PAGE 1]. Hop 2 is hash derivation: the agent computes `printf %s "<token>" | sha256sum`, yielding a 64-character lowercase hexadecimal SHA-256 digest [PAGE 1]. Hop 3 is out-of-band provisioning: only the hash plus the agent name are sent to Motif or Garrett for insertion into `FLEET_AGENT_TOKEN_HASHES`, after which the bus is restarted with the new environment map [PAGE 1]. Hop 4 is local verification: the agent calls `fleet_heartbeat` with name and token, then `fleet_post` to itself, then `fleet_read` with `peek: true`, and finally a wrong-name call with the same token to confirm rejection [PAGE 1]. Hop 5 is rotation: a new token replaces the hash in the server env, the bus restarts, and the old hash dies at that restart [PAGE 1].

Gray-zone audit. First, identity canonicalization is case-insensitive via trim + lowercase at every boundary [PAGE 1]. This quotients the agent namespace by equivalence class; "Hermes", "hermes", and " HERMES " resolve to one principal. If two distinct humans were provisioned under names differing only by case, the server cannot distinguish them, which is an authorization collapse. Second, the fail-closed rule means that if `FLEET_AGENT_TOKEN_HASHES` is empty and `FLEET_ALLOW_UNAUTHENTICATED` is not set, the server rejects every call [PAGE 1]. A missing restart after env change therefore causes a total fleet outage, not a degraded mode. Third, loopback-only binding (`127.0.0.1:4311`) forces remote agents to traverse an operator-controlled tunnel (SSH or Tailscale) [PAGE 1]. Network partition or tunnel drop is a denial-of-service vector independent of cryptography. Fourth, non-loopback binding requires two simultaneous conditions: `FLEET_ALLOW_NON_LOOPBACK=1` AND configured token auth [PAGE 1]. This dual-flag gate is deliberate, but an operator under incident pressure could regress to the legacy unauthenticated mode (`FLEET_ALLOW_UNAUTHENTICATED=1`), which the document permits only loopback-only with a loud startup banner [PAGE 1]. Fifth, Orca was removed on 2026-10-15 and must not be enrolled [PAGE 1]; any automation that still addresses Orca is a stale-reference trap. Sixth, rollback restores a pre-go-live snapshot whose DB contains only motif's 2026-10-14 heartbeat plus a go-live peek audit row [PAGE 1]; restoring after 2026-10-30 discards all post-go-live state. Seventh, token rotation invalidates the old hash at restart [PAGE 1], creating a narrow temporal window in which an agent whose config has not yet been updated loses bus connectivity until the new hash is active. The 25/25 test suite passed at go-live (~18:25 CT, 2026-10-30) [PAGE 1], but passing tests do not cover cross-agent spoof combinations for every future enrollee (copilot, spark, dots, cursor, jules, claude, deepseek, gemini), so the enrollment procedure itself must be re-audited each time a new agent joins.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, LaTeX, units, page citations, and breakdown regimes.

Let the raw token space be $\mathcal{T} = \{0,1\}^{256}$, corresponding to `openssl rand -hex 32` (32 bytes, 256 bits of entropy, encoded as 64 hex chars) [PAGE 1]. The server stores a partial map
$$\mathbb{M} : \mathcal{N} \rightharpoonup \{0,1\}^{256}, \quad \mathbb{M}(n) = \text{SHA-256}(t_n),$$
where $\mathcal{N}$ is the agent identity namespace and $t_n \in \mathcal{T}$ is the raw token issued to agent $n$ [PAGE 1]. The server never stores raw tokens; it stores only SHA-256 hashes in the `FLEET_AGENT_TOKEN_HASHES` env map [PAGE 1].

Identity canonicalization is the function
$$C : \mathcal{N} \to \mathcal{N}, \quad C(n) = \text{lowercase}(\text{trim}(n)),$$
applied at every boundary, making matching case-insensitive [PAGE 1]. The authentication predicate for a call claiming identity $n_c$ with raw token $t$ is
$$\text{Accept}(n_c, t) \iff \text{SHA-256}(t) = \mathbb{M}(C(n_c)) \;\land\; C(n_c) = C(n_{\text{issued}}),$$
where $n_{\text{issued}}$ is the name to which the token was bound [PAGE 1]. A token cannot speak or read as another agent; spoof attempts are rejected and write nothing [PAGE 1].

Fail-closed default:
$$\mathbb{M} = \emptyset \;\land\; \neg\text{LegacyEnabled} \implies \forall\, \text{calls} \in \{\text{fleet\_post, fleet\_read, fleet\_ack, fleet\_heartbeat, fleet\_roster, fleet\_task\_*}\}:\; \text{Reject}.$$
Legacy unauthenticated mode exists only if `FLEET_ALLOW_UNAUTHENTICATED=1`, loopback only, with a loud startup banner [PAGE 1].

Binding constraint:
$$\text{Bind}(a) \text{ permitted} \iff (a \in \text{Loopback}) \;\lor\; \bigl(\text{FLEET\_ALLOW\_NON\_LOOPBACK}=1 \;\land\; \mathbb{M} \neq \emptyset\bigr).$$
The server binds `127.0.0.1:4311` by design; remote hosts reach it through SSH/Tailscale tunnels forwarding to loopback [PAGE 1].

Assumed security model: SHA-256 behaves as a random oracle. Preimage resistance gives adversary advantage at most $q/2^{256}$ for $q$ hash queries; birthday collision probability is approximately $q^2/2^{257}$. Token entropy is 256 bits. Message bodies arrive inside a BEGIN/END UNTRUSTED envelope with a not-instructions preamble; bodies are data, never orders [PAGE 1].

Breakdown/singularity regimes:
1. Cryptographic collapse: if SHA-256 preimage or second-preimage resistance is broken, an attacker forges $\mathbb{M}(n)$ entries and impersonates any agent.
2. Env-map truncation: if the `FLEET_AGENT_TOKEN_HASHES` JSON exceeds OS environment limits or fails JSON parse, the server fails closed or agents are silently dropped.
3. Temporal denial-of-service: because the old hash dies at restart [PAGE 1], an agent not yet rotated loses connectivity until its config is updated and the bus is restarted.
4. Namespace collapse: $C(n_1)=C(n_2)$ for $n_1 \neq n_2$ (case-only differences) merges distinct principals into one authorization identity.
5. Legacy regression: setting `FLEET_ALLOW_UNAUTHENTICATED=1` outside a deliberate local bridge removes the fail-closed property and permits unauthenticated local access.
6. Non-loopback exposure: binding to a non-loopback address without both required flags is refused by the server [PAGE 1]; casual exposure violates the design and creates an attack surface.
Units used: bits (entropy), hex characters (digest length), bytes (token size), calls per second (not specified by source), restart latency (not specified; bounded by `nohup node dist/server.js` startup).
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage and multi-week traps.

The lineage traces from standard challenge-response and password-hashing practice into an MCP-specific fleet bus. Storing only SHA-256 hashes rather than raw tokens follows the classic "never store plaintext secrets" principle; here the secret is a machine-to-machine bearer token rather than a human password. The loopback-only bind (`127.0.0.1:4311`) reflects zero-trust local-network architecture: even though the bus runs on a single VM, it treats the loopback interface as the trust boundary and requires tunneling (SSH/Tailscale) for cross-host reachability [PAGE 1]. The BEGIN/END UNTRUSTED envelope with a not-instructions preamble draws on data-vs-control separation: message bodies are data, never orders [PAGE 1].

Historical anchors: Orca was removed from the fleet by Garrett on 2026-10-15 [PAGE 1], exactly two weeks before the fixed source went live on 2026-10-30 at approximately 18:25 CT under Workstream E, the "elimination offensive" [PAGE 1]. The QC-fixed source passed 25/25 tests at go-live. The rollback snapshot at `~/workspace/lockin-2026-10-30/fleet-bus-snapshot-2026-10-30/` contains source, dist, tests, and `fleet.db` with `-shm`/`-wal`; its database is pre-go-live, holding motif's 2026-10-14 heartbeat plus only a go-live peek audit row by design [PAGE 1].

Multi-week traps. Trap A: restoration after go-live. Because the snapshot DB predates 2026-10-30, rolling back after that date discards every heartbeat and task row created between go-live and the restore moment; the fleet loses audit continuity. Trap B: token rotation synchronicity. The old hash dies at restart [PAGE 1], so if Garrett hands out new Windows-host values (hermes, mimo, opencode, grok, antigravity) but an agent does not update its config before the bus restarts, that agent is silently excommunicated until the next config sync. Trap C: human out-of-band bandwidth. Garrett hand-delivers raw token values on his Windows host; everything else is mechanical [PAGE 1]. This creates a single-person enrollment bottleneck that scales poorly as roster/GitHub-seat members (copilot, spark, dots, cursor, jules, claude, deepseek, gemini) come online. Trap D: case-insensitive provisioning. If two future agents are enrolled with names differing only by case, canonicalization collapses them [PAGE 1], and the 25/25 test suite may not catch the resulting authorization aliasing because the suite passed before those agents existed.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Model the fleet as a recursive system of agents modeling one another. Garrett models each Windows-host agent as needing a raw token value delivered out of band; each agent models Garrett as the trustworthy source of that value [PAGE 1]. Motif models the server env map as the source of truth for `FLEET_AGENT_TOKEN_HASHES` and enforces identity matching at every call boundary [PAGE 1]. Every agent models every other agent as unable to use its token because the claimed identity (`from_agent` / `for_agent` / `agent`) must match the name the token was issued to [PAGE 1].

Crisis habit regression: under incident pressure—e.g., a remote host cannot reach the bus because loopback binding blocks external access—an operator may regress to insecure habits: setting `FLEET_ALLOW_UNAUTHENTICATED=1` to bypass auth, or attempting a non-loopback bind so agents can connect directly [PAGE 1]. Both regressions defeat the zero-trust design. The document explicitly warns not to expose the bus by binding non-loopback casually [PAGE 1].

Counter-trap: the architecture embeds counter-traps against regression. The server refuses non-loopback bind unless both `FLEET_ALLOW_NON_LOOPBACK=1` AND token auth are configured [PAGE 1]. Legacy mode requires an explicit env flag and emits a loud startup banner [PAGE 1]. Fail-closed default means misconfiguration produces total rejection rather than silent open access [PAGE 1]. These are intentional speed bumps that make insecure reversion visible and difficult.

Clock: the temporal layer is governed by the go-live timestamp (~18:25 CT, 2026-10-30) [PAGE 1], the restart boundary at which old hashes die [PAGE 1], and the snapshot window (pre-go-live DB, motif heartbeat 2026-10-14) [PAGE 1]. If rollback is not executed before new post-go-live state accumulates, that state is lost. If token rotation is not completed before the restart that kills the old hash, the affected agent experiences an outage. The 25/25 test suite provides a snapshot of correctness at go-live but does not extend the clock forward for new enrollees. Recursive theory of mind therefore predicts that the highest-risk moment is not the initial enroll but the first post-go-live crisis, when an operator must choose between the tunnel/canonicalization path and the legacy regression path.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical/biomechanical/weather veto proof.

Physical layer vetoes: the bus binds loopback `127.0.0.1:4311` by design and refuses non-loopback bind unless both flags are present [PAGE 1]. The motif raw token file resides at `~/workspace/mcp-servers/gse-spark-mcp/.tokens/motif.token` with mode 600 [PAGE 1], a filesystem permission veto against local users. Remote agents reach the bus only through an operator's existing route (SSH/Tailscale tunnel) [PAGE 1], so the physical network path itself vetoes direct exposure.

Biomechanical layer vetoes: humans hand out raw token values on a Windows host [PAGE 1]; copy, paste, and transcription errors are the dominant failure mode. Identity matching applies trim + lowercase at every boundary [PAGE 1], which vetoes case-variant impersonation but also means biomechanical sloppiness (extra whitespace, capitalization) cannot create a separate identity; all variants collapse to one principal. Raw tokens must never enter git, chat, the bus, or packets [PAGE 1], so any human behavior violating this is vetoed by policy, though not technically enforced at the protocol layer.

Weather veto proof (environmental veto): network partitions, SSH tunnel drops, Tailscale routing failures, and VM host reboots veto bus availability independent of cryptographic validity [PAGE 1]. An agent holding a valid token and correct hash still cannot heartbeat if the loopback path is unreachable. This is an environmental denial-of-service layer that cryptography cannot override.

Adjudication order: when layers conflict, the server code vetoes first (refuses non-loopback bind without both flags) [PAGE 1]; the protocol vetoes second (rejects wrong-name calls with the same token; spoof attempts write nothing) [PAGE 1]; the cryptographic layer vetoes third (hash comparison rejects unknown tokens); and the physical/environmental layer vetoes last (loopback binding and tunnel dependence mean no call succeeds if the path is down). A wrong-name call with a valid token is rejected even though the token itself is authentic, demonstrating that identity binding, not mere possession, is the authoritative veto [PAGE 1].
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR veto scenarios and predictions.

Scenario 1: Cross-agent spoof. An agent holding a valid token for `hermes` issues `fleet_post` with `from_agent` set to `motif` (or any other enrolled name) while using the hermes token [PAGE 1]. Verification: observe server response and confirm no write occurs. Prediction: the call is rejected and writes nothing, because a token cannot speak or read as another agent; identity must match the name the token was issued to [PAGE 1].

Scenario 2: Fail-closed default with empty map. Start the bus with `FLEET_AGENT_TOKEN_HASHES='{}'` (or unset) and `FLEET_ALLOW_UNAUTHENTICATED` not set to 1 [PAGE 1]. Verification: issue `fleet_heartbeat` from any agent. Prediction: the server fails closed and rejects every fleet call; no session is established [PAGE 1].

Scenario 3: Unauthorized non-loopback bind. Attempt to start the bus bound to a non-loopback address (e.g., `0.0.0.0:4311`) while either `FLEET_ALLOW_NON_LOOPBACK` is unset or `FLEET_AGENT_TOKEN_HASHES` is empty [PAGE 1]. Verification: inspect server startup logs and port binding. Prediction: the server refuses the non-loopback bind unless both `FLEET_ALLOW_NON_LOOPBACK=1` AND token auth are configured [PAGE 1]; if both are set, binding is permitted but the loopback-only default is overridden only deliberately.

Additional verifiable check within Scenario 1: a wrong-name call with the same valid token (e.g., hermes token used to claim `mimo`) must also be rejected [PAGE 1]. Prediction: rejection occurs before any state mutation.
</RLVR_COUNTERFACTUAL_VETOES>