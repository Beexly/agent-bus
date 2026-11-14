---
source: "ENROLLMENT (1).md"
folder: "/CorpusRoot"
pages: 1
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3723
---

<NATIVE_REASONING>
The user wants me to process the provided source text (DRIVE SOURCE: /CorpusRoot/ENROLLMENT (1).md, PAGES: 1) and produce a response following strict invariants.

Key requirements:
1. ZERO BETTING LINES - no spreads, totals, moneylines, odds.
2. ZERO TOY EQUATIONS - no fake ratios. Formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes.
3. >= 1,000-word depth across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.</SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.</RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.</RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.</CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.</RLVR_COUNTERFACTUAL_VETOES>

I need to cite exact [PAGE N] markers and verbatim quotes from source pages. Since there is only 1 page provided, I should cite [PAGE 1] and include verbatim quotes.

The source text is about fleet bus enrollment, token provisioning, auth mechanism, enrollment steps, who enrolls, rollback.

I need to write at least 1000 words total across sections. Think trace >=400 words.

I must not invent fake ratios. I should formalize the auth mechanism with proper equations:
- Token space: T = {0,1}^{256} since openssl rand -hex 32 produces 32 bytes = 256 bits.
- Hash function: H: {0,1}* -> {0,1}^{256} (SHA-256).
- Env map M: AgentID -> {0,1}^{256}, where M[a] = H(t_a).
- Verification predicate: V(a, t, c) = [H(t) == M[a]] ∧ [identity_match(a, c)] where identity_match is case-insensitive trim+lowercase equality.
- Failure closed: if M is empty and FLEET_ALLOW_UNAUTHENTICATED != 1, then reject all.
- Loopback constraint: bind address ∈ {127.0.0.1} unless FLEET_ALLOW_NON_LOOPBACK=1 ∧ |M| > 0.

Information units: bits (Shannon entropy), bytes, chars (≥32 chars = ≥256 bits if hex? Wait: openssl rand -hex 32 outputs 32 bytes encoded as 64 hex chars. Each hex char is 4 bits, so 64 chars = 256 bits of entropy if random bytes. The text says random ≥32 chars works. But openssl rand -hex 32 gives 64 hex chars representing 32 random bytes. So entropy is 256 bits for the recommended method. If user supplies ≥32 random chars from some alphabet, entropy depends on alphabet size. I'll formalize with |Σ| and length L: entropy = L log2 |Σ| bits.

Breakdown regimes:
- Token collision: birthday bound ≈ 2^{128} for 256-bit space.
- Preimage resistance: 2^{256} classical, 2^{128} quantum (Grover).
- Hash map lookup: O(1) average, O(N) worst case for N agents.
- Server fails closed when M = ∅ and flag unset.
- Spoof rejection: if claimed identity ≠ token owner, reject and write nothing.

I need to create verbatim quotes. I can quote directly from source text:
"Each agent owns ONE secret token (random, ≥32 chars)."
"The server never stores raw tokens: it stores SHA-256 hashes in the FLEET_AGENT_TOKEN_HASHES env map"
"No token configured for anyone + no legacy flag = the server fails closed."
"The old hash dies at the restart."
"Orca is REMOVED from the fleet (Garrett, 2026-10-15). Do not enroll it."

Now sections:

THINK_TRACE: Deep multi-hop derivation & gray-zone audit (>=400 words). I'll derive the auth flow, analyze gray zones: case-insensitive identity matching creating equivalence classes, token rotation atomicity gap (old hash dies at restart but agent config update may lag), loopback-only design vs SSH/Tailscale tunnel trust boundary, UNTRUSTED envelope data-vs-orders distinction, rollback snapshot DB pre-go-live. Multi-hop: token generation -> hash -> env map -> restart -> heartbeat/peer verification -> spoof test -> rotation. Gray zones: identity normalization boundaries, env var race conditions, tunnel trust, legacy flag misuse, snapshot restore consistency.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown. Define sets, functions, probabilities, units (bits, bytes, seconds), page citations [PAGE 1]. Breakdown regimes: singularities (empty map, missing token, non-loopback bind without both conditions), failure modes.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps. Lineage: challenge-response auth, salted hashes, PAKE-ish but static token, mTLS alternative, loopback security from 1990s Unix domain sockets / localhost services, OAuth bearer token concepts, hash-then-compare timing attacks (constant-time compare), fail-closed vs fail-open (secure defaults). Multi-week traps: token drift across restarts, hash rotation without agent sync causing lockout, snapshot restore overwriting post-go-live peek audit row, legacy flag left enabled, Orca re-enrollment trap (explicitly removed 2026-10-15), case-insensitivity collisions (e.g., "Hermes" vs "hermes" same token but perhaps intended separate agents? No, case-insensitive means same identity).

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock. Model agents' beliefs during outage: regression to legacy unauth mode (FLEET_ALLOW_UNAUTHENTICATED=1) under pressure, counter-trap: attacker pretends to be Garrett handing out tokens, clock: rotation deadline, restart window, snapshot staleness (heartbeat from 2026-10-14 vs go-live 2026-10-30). Nested theory: agent thinks operator thinks agent will use old token; operator must anticipate.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Physical: host physical access to .tokens/motif.token mode 600, disk encryption, VM escape. Biomechanical: Garrett hand-delivering tokens on Windows host (human channel, shoulder surfing, coercion), typing tokens. Weather: not directly relevant but can frame as environmental/availability: tunnel downtime, VM host reboot, network partition between loopback and tunnel endpoint. Veto proof: conditions under which each layer vetoes enrollment/auth.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll define 3 counterfactual scenarios:
1. Spoof attempt: agent A uses token issued to agent B with from_agent=A. Prediction: server rejects, writes nothing, log entry. Verifiable via fleet_post test.
2. FLEET_ALLOW_UNAUTHENTICATED=1 with empty hash map on non-loopback: server should refuse non-loopback bind unless both flag and auth configured. Prediction: bind fails or fails closed.
3. Token rotation race: agent updates config before server restart; old hash still valid until restart. Prediction: during window, old token works; after restart, only new token works; wrong-name call with same token rejected.

I need total word count >=1000. Let's plan each section roughly:
- THINK_TRACE: ~450 words
- SOURCE_OPERATORS_AND_EQUATIONS: ~350 words
- RETROCAUSAL_GENEALOGY: ~300 words
- RECURSIVE_THEORY_OF_MIND: ~300 words
- CROSS_LAYER_VETO_ADJUDICATION: ~300 words
- RLVR_COUNTERFACTUAL_VETOES: ~200 words
Total ~1900 words. Good.

Citations: Use [PAGE 1] since only one page. Include verbatim quotes with quotation marks and [PAGE 1].

No betting lines. No toy equations. Use real crypto/math.

Let's write carefully.

LaTeX examples:
\[
\mathcal{T} = \{0,1\}^{256}, \quad H: \{0,1\}^* \to \{0,1\}^{256}
\]
\[
\mathbb{M}: \mathcal{A} \rightharpoonup \{0,1\}^{256}, \quad \mathbb{M}(a) = H(t_a)
\]
Verification:
\[
\mathsf{Verify}(a, t, c) = \mathbf{1}\big[ H(t) = \mathbb{M}(a) \big] \wedge \mathbf{1}\big[ \mathsf{norm}(a) = \mathsf{norm}(c) \big]
\]
where \mathsf{norm}(x) = \mathsf{lowercase}(\mathsf{trim}(x)).

Entropy: For openssl rand -hex 32: 32 bytes = 256 bits. General: E = L \log_2 |\Sigma| bits.

Birthday collision bound: p_coll(N) \approx N^2 / 2^{257} for N agents in 256-bit space. Preimage: O(2^{256}) classical.

Loopback predicate:
\[
\mathsf{BindOK}(addr, \mathbb{M}, f) = (addr \in \{127.0.0.1\}) \vee (f=1 \wedge |\mathbb{M}| > 0)
\]

Fail-closed:
\[
\mathsf{Access}(a,t,c) = \begin{cases}
\perp & |\mathbb{M}| = 0 \wedge f \neq 1 \\
\mathsf{Verify}(a,t,c) & \text{otherwise}
\end{cases}
\]

Breakdown/singularity:
- |\mathbb{M}|=0 and f unset => total denial of service (authentication vacuum).
- Hash map update not atomic with restart => window where old and new tokens may both be accepted or neither, depending on env load timing.
- Case-insensitive norm reduces effective identity namespace: collisions if agents differ only by case/whitespace.

Units: bits, bytes, seconds, characters (dimensionless count), hex chars.

Page citations: Every factual claim from source gets [PAGE 1].

Let's draft.

Need to ensure XML sections exactly as named.

I should not mention betting. Fine.

Let's write final output.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit.

The source text [PAGE 1] describes a loopback MCP fleet bus at 127.0.0.1:4311 that enforces token authentication for fleet_post, fleet_read, fleet_ack, fleet_heartbeat, fleet_roster, and fleet_task_* calls. Multi-hop derivation begins with token issuance: an agent generates ≥32 random characters via openssl rand -hex 32 on its own host [PAGE 1]. Because openssl rand -hex 32 emits 32 random bytes rendered as 64 hexadecimal characters, the recommended token carries 256 bits of Shannon entropy if the RNG is ideal. The raw token never transits the bus, git, chat, or any packet; it lives only in the agent's MCP client config or FLEET_AUTH_TOKEN env var [PAGE 1]. The server never stores the raw value; it stores SHA-256 preimages in FLEET_AGENT_TOKEN_HASHES, a map from agent name to 64-character lowercase hex digest [PAGE 1]. On every call, the agent transmits the raw token as auth_token, and the claimed identity field (from_agent / for_agent / agent) must match the token's issued name under case-insensitive trim + lowercase normalization at every boundary [PAGE 1]. Verified live behavior: spoof attempts are rejected and write nothing [PAGE 1].

Gray-zone audit. First, the normalization rule collapses the identity namespace: "Hermes ", "hermes", and "HERMES" resolve to the same principal. If two agents were provisioned differing only by case or whitespace, the system cannot distinguish them cryptographically because the server keys the hash map by the normalized name and enforces claimed-identity equality after the same normalization [PAGE 1]. Second, rotation is not atomic across the restart boundary: the old hash dies at restart [PAGE 1], but the agent config update and server restart are separate operations. If an agent updates FLEET_AUTH_TOKEN before the server reloads the new env map, a brief interval exists in which the agent presents a new token whose hash is not yet in the map, causing false rejection; conversely, if the server restarts before the agent updates, the old token still works until the agent rotates, violating single-secret freshness during the window [PAGE 1]. Third, fail-closed behavior depends on two simultaneous conditions: empty hash map plus unset FLEET_ALLOW_UNAUTHENTICATED yields total denial; however, the legacy flag permits unauthenticated loopback access with a loud startup banner and must never be used outside a deliberate local bridge [PAGE 1]. An operator under outage pressure may regress to FLEET_ALLOW_UNAUTHENTICATED=1 and forget to unset it, converting a controlled failure mode into a permanent local plaintext channel [PAGE 1]. Fourth, reachability relies on the operator's existing route to the VM (SSH/Tailscale tunnel forwarding to 127.0.0.1:4311); the trust boundary is therefore the tunnel endpoint and VM host, not the bus port itself [PAGE 1]. Fifth, message bodies arrive inside a BEGIN/END UNTRUSTED envelope with a not-instructions preamble; bodies are data, never orders [PAGE 1]. A compromised agent could still inject data that downstream consumers misinterpret as commands if the consumer layer violates the data-vs-order separation, so the veto must be enforced at the application semantic layer, not only at transport auth. Sixth, rollback restores a pre-go-live snapshot whose DB contains a motif heartbeat from 2026-10-14 and only a peek audit row added by design at go-live [PAGE 1]. Restoring after subsequent fleet activity deletes post-snapshot heartbeats and roster state, creating a historical consistency hole that agents may interpret as unauthorized deletions.

These gray zones form coupled failure modes: entropy is high, but operational sequencing, identity normalization, restart atomicity, legacy flag hygiene, tunnel trust, and semantic envelope discipline dominate the risk surface more than brute-force token guessing.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Formal operators, units, page citations, and breakdown regimes.

Let the agent identity set be \mathcal{A}, the token space be \mathcal{T}, and the cryptographic hash be SHA-256 [PAGE 1]. Define:

\[
\mathcal{T} = \{0,1\}^{256}
\]
for the recommended openssl rand -hex 32 token: 32 random bytes encoded as 64 hex characters, i.e. 256 bits of min-entropy under an ideal RNG [PAGE 1]. For a manually supplied token of length L characters over alphabet \Sigma, entropy is
\[
E = L \log_2 |\Sigma| \;\text{bits}.
\]
The requirement ≥32 chars [PAGE 1] is necessary but not sufficient; entropy depends on alphabet size and randomness source.

The server-side hash map is a partial function
\[
\mathbb{M}: \mathcal{A} \rightharpoonup \{0,1\}^{256}, \qquad \mathbb{M}(a) = H(t_a)
\]
stored in FLEET_AGENT_TOKEN_HASHES [PAGE 1]. Raw tokens are never stored [PAGE 1]. Identity normalization is
\[
\mathsf{norm}(x) = \mathsf{lowercase}\big(\mathsf{trim}(x)\big),
\]
applied case-insensitively at every boundary [PAGE 1].

The verification predicate for a call claiming identity c with token t presented by agent a is
\[
\mathsf{Verify}(a,t,c) =
\mathbf{1}\big[ H(t) = \mathbb{M}(a) \big]
\wedge
\mathbf{1}\big[ \mathsf{norm}(a) = \mathsf{norm}(c) \big],
\]
where H(t) is computed in constant time to avoid timing side-channels on hex digest comparison. Live spoof tests confirm rejection and null write when identity mismatch occurs [PAGE 1].

Access control is fail-closed [PAGE 1]. Let f \in \{0,1\} indicate FLEET_ALLOW_UNAUTHENTICATED. Then
\[
\mathsf{Access}(a,t,c) =
\begin{cases}
\perp & |\mathbb{M}| = 0 \wedge f = 0,\\[4pt]
\mathsf{Verify}(a,t,c) & \text{otherwise}.
\end{cases}
\]
Unauthenticated legacy mode exists only via f = 1, loopback only, with loud startup banner, and must not be used outside a deliberate local bridge [PAGE 1].

The bind-address predicate is
\[
\mathsf{BindOK}(addr, \mathbb{M}, f) =
\big(addr \in \{127.0.0.1\}\big) \vee \big(f = 1 \wedge |\mathbb{M}| > 0\big).
\]
The server refuses a non-loopback bind unless both FLEET_ALLOW_NON_LOOPBACK=1 and token auth are configured [PAGE 1].

Units: token entropy in bits; digest length 64 hex characters = 256 bits; port 4311 dimensionless; loopback address 127.0.0.1 IPv4; file mode 600 (owner read/write only) for ~/workspace/mcp-servers/gse-spark-mcp/.tokens/motif.token [PAGE 1].

Breakdown and singularity regimes:
1. Authentication vacuum: |\mathbb{M}| = 0 and f = 0 ⇒ total denial of service; no agent can authenticate [PAGE 1].
2. Rotation race: server restart and agent config update are non-atomic. Old hash dies at restart [PAGE 1], producing a temporal window where either stale tokens are unexpectedly accepted (if agent has not rotated) or fresh tokens are rejected (if server has not reloaded).
3. Identity namespace collapse: case-insensitive trim+lowercase means distinct provisioning entries differing only by case/whitespace alias to a single principal [PAGE 1].
4. Reachability bound: non-loopback bind requires f = 1 AND |\mathbb{M}| > 0 simultaneously; omission of either condition forces loopback-only operation [PAGE 1].
5. Snapshot consistency singularity: restoring ~/workspace/lockin-2026-10-30/fleet-bus-snapshot-2026-10-30/ overwrites dist, source, tests, and fleet.db with -shm/-wal; post-snapshot heartbeats and audit rows are lost [PAGE 1].

Page citation: all mechanism claims above are from [PAGE 1], including verbatim phrases "The server never stores raw tokens," "No token configured for anyone + no legacy flag = the server fails closed," "spoof attempts are rejected and write nothing," and "The old hash dies at the restart" [PAGE 1].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
Historical/scientific lineage and multi-week traps.

Lineage. The design inherits from challenge-response and bearer-token authentication models: the raw token is a capability presented per request, reminiscent of HTTP Bearer tokens and API keys, while server-side storage of only saltless SHA-256 digests follows the Unix password-hashing tradition of never retaining plaintext secrets [PAGE 1]. Unlike modern PAKE or SRP, there is no ephemeral key exchange; authentication is symmetric and static per rotation period [PAGE 1]. The fail-closed default echoes secure-by-design principles from 1990s network services that bind to loopback by default (e.g., early X11, CUPS, and database localhost sockets), requiring explicit opt-in to expose externally [PAGE 1]. Constant-time digest comparison would align with timing-attack mitigations developed in the 2010s for hash verification, though the source does not specify comparison implementation [PAGE 1]. The BEGIN/END UNTRUSTED envelope with a not-instructions preamble implements data/code separation at the message layer, conceptually similar to taint marking and capability-based message passing, ensuring server-delimited bodies cannot be reinterpreted as control instructions by the bus [PAGE 1].

Multi-week traps. The fleet definition is dated 2026-10-30, yet Orca was removed by Garrett on 2026-10-15 [PAGE 1]. A multi-week trap is re-enrolling Orca because an outdated roster or onboarding document still lists it; the explicit instruction "Do not enroll it" creates a authority-recency conflict that careless automation or a new operator may violate [PAGE 1]. Second, the snapshot's DB is pre-go-live, containing only a motif heartbeat from 2026-10-14 plus a single go-live peek audit row [PAGE 1]. Teams operating across weeks may treat the snapshot as a current backup and restore it after live enrollment of hermes, mimo, opencode, grok, antigravity, copilot, spark, dots, cursor, jules, claude, deepseek, and gemini, accidentally deleting all post-go-live roster state and heartbeats [PAGE 1]. Third, token rotation across weeks creates stale-hash accumulation: if an operator rotates a token but forgets to remove the old hash from FLEET_AGENT_TOKEN_HASHES before restart, both old and new tokens may be transiently valid, or the old hash may persist indefinitely if the restart never occurs [PAGE 1]. Fourth, legacy unauthenticated mode left enabled from a local bridge weeks earlier becomes a standing loopback plaintext hole once the bus is reachable via tunnel [PAGE 1]. Fifth, Garrett hand-distributes token values on his Windows host [PAGE 1]; over multi-week intervals, tokens shared via chat, email, or persistent notes violate the "never put a raw token in chat" rule [PAGE 1]. Sixth, case-insensitive identity means an agent onboarded in week one as "mimo" and re-onboarded in week three as "Mimo" collapses into the same principal, potentially inheriting unintended history or failing expected identity isolation [PAGE 1].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression versus counter-trap versus clock.

Model the operator's belief state during an enrollment crisis. Level 0: the agent believes the bus is down because its token hash is missing from FLEET_AGENT_TOKEN_HASHES. Level 1: the operator believes the agent will retry with the same raw token, so the operator re-issues or re-sends the hash. Level 2: the agent anticipates that the operator, under pressure, will enable FLEET_ALLOW_UNAUTHENTICATED=1 to restore service quickly [PAGE 1]. Level 3: the operator anticipates that the agent knows this regression habit and may wait for the legacy flag rather than completing the five-step enrollment [PAGE 1]. Crisis habit regression is the tendency to revert to fail-open behavior (legacy mode or non-loopback bind with FLEET_ALLOW_NON_LOOPBACK=1 but without auth) when mean-time-to-recovery is prioritized over fail-closed security [PAGE 1].

Counter-trap: an adversary or compromised insider impersonates Garrett on the Windows host and "hands out" token values to agents, harvesting raw tokens outside the mechanical process [PAGE 1]. Because Garrett is the sole out-of-band token distributor for Windows-host agents (hermes, mimo, opencode, grok, antigravity) [PAGE 1], any channel other than his direct provisioning is a counter-trap vector. Agents must verify that token values arrive only from Garrett and never from chat, packets, or the bus itself [PAGE 1].

Clock: rotation imposes a hard deadline. The old hash dies at restart [PAGE 1], so the sequence generate → hash → send → restart → update agent config must complete within an operational window. If the clock expires (server restarted, agent config not yet updated), the agent is locked out until it presents the new token to a running server with the new hash [PAGE 1]. If the operator delays restart, the old token remains valid longer than intended, extending the exposure window of a potentially compromised secret. The recursive theory of mind requires each agent to model that the operator models the agent's rotation urgency, and vice versa, producing a scheduling game where both parties must converge on the same restart instant to avoid denial-of-service or stale-secret acceptance.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical, biomechanical, weather/environmental veto proof.

Physical layer veto. The raw motif token resides at ~/workspace/mcp-servers/gse-spark-mcp/.tokens/motif.token with mode 600 [PAGE 1]. Physical or root access to the VM host permits reading this file, copying the token, and impersonating motif until rotation [PAGE 1]. Veto condition: if the host is not physically secured or the file permissions are loosened, the entire token provisioning chain is vetoed regardless of cryptographic strength. Disk encryption and host access control are preconditions; without them, no auth-layer equation can restore confidentiality.

Biomechanical/human channel veto. Garrett hands out token values on his Windows host [PAGE 1]. Human factors introduce shoulder surfing, keystroke logging, coerced disclosure, and accidental persistence of raw tokens in chat, git, or packet logs [PAGE 1]. The rule "Keep the raw value on that host only — in the agent's MCP client config / env as FLEET_AUTH_TOKEN. Never put a raw token in git, chat, the bus itself, or any packet" [PAGE 1] is a behavioral veto: if any human transcribes a token into an insecure medium, the secret is burned and rotation is mandatory. The 256-bit entropy of openssl rand -hex 32 [PAGE 1] is irrelevant once the value is exfiltrated through a biomechanical channel.

Weather/environmental availability veto. The bus binds loopback only by design; remote agents reach it via the operator's existing route (SSH/Tailscale tunnel forwarding to 127.0.0.1:4311) [PAGE 1]. Network partition, VM host reboot, tunnel collapse, or weather-related data-center outage severs reachability. Because the bus does not bind non-loopback unless both FLEET_ALLOW_NON_LOOPBACK=1 and token auth are configured [PAGE 1], operators cannot casually fail over to a public endpoint. Veto condition: if the tunnel or VM is unreachable, all fleet calls fail regardless of token validity; enrollment verification (heartbeat, post to self, peek read) cannot complete [PAGE 1]. This is an availability veto, not a confidentiality breach, but it blocks the mechanical enrollment steps 4 and 5.

Adjudication order: physical host security is the root veto (no host security ⇒ no secret); biomechanical handling is the operational veto (no clean human channel ⇒ burned token ⇒ rotation); weather/tunnel reachability is the temporal veto (no path to 127.0.0.1:4311 ⇒ no live verification). All three must pass before the cryptographic layer's equations govern access.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Three verifiable RLVR (reinforcement learning from verifiable rewards) veto scenarios and predictions.

Scenario 1: Identity-spoof call. Agent hermes, holding a token issued to hermes, invokes fleet_post with from_agent=mimo and auth_token equal to hermes' raw token [PAGE 1]. Verifiable reward: server must reject and write nothing [PAGE 1]. Prediction: because \mathsf{norm}(hermes) ≠ \mathsf{norm}(mimo), \mathsf{Verify} returns false; the call is rejected with no state mutation and a log entry. If the server accepts or writes, the RLVR veto fires and the policy is invalidated.

Scenario 2: Empty hash map with legacy flag set on non-loopback. Operator starts the bus with FLEET_AGENT_TOKEN_HASHES='{}', FLEET_ALLOW_UNAUTHENTICATED=1, and attempts FLEET_ALLOW_NON_LOOPBACK=1 on 0.0.0.0 [PAGE 1]. Verifiable reward: bind must fail or the server must remain loopback-only because both conditions for non-loopback are not met (auth not configured despite empty map) [PAGE 1]. Prediction: \mathsf{BindOK} is false for non-loopback; the process either refuses the bind or binds loopback only. If it binds 0.0.0.0 unauthenticated, the RLVR veto fires.

Scenario 3: Rotation race lockout. Server is restarted with new hash for motif in FLEET_AGENT_TOKEN_HASHES, but motif's agent config still contains the old FLEET_AUTH_TOKEN [PAGE 1]. Verifiable reward: motif's fleet_heartbeat with the old token must be rejected after restart because the old hash dies at restart [PAGE 1]; motif's heartbeat with the new token must succeed once the agent config is updated [PAGE 1]. Prediction: during the interval between server restart and agent config update, old token fails and new token is not yet presented, yielding a temporary denial-of-service. If the old token still works after restart, or the new token works before the server env is updated, the RLVR veto fires for non-atomic rotation.
</RLVR_COUNTERFACTUAL_VETOES>