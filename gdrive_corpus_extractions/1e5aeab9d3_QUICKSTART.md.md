---
source: "QUICKSTART.md"
folder: "/GSN/Galaxy Sports Edge/.codex-worktrees/gse-frontier-recovery"
pages: 1
model: nvidia_2:nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3795
---

<NATIVE_REASONING>
The user wants me to act as the GSE + GSI Frontier Reasoning Foundry and analyze a QUICKSTART.md document. I need to follow strict invariants:

1. ZERO BETTING LINES - never mention spreads, totals, moneylines, or odds.
2. ZERO TOY EQUATIONS - no fake ratios, state formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE>Deep multi-hop derivation & gray-zone audit (>=400 words).
   - <SOURCE_OPERATORS_AND_EQUATIONS>Formal LaTeX, units, page citations, breakdown.
   - <RETROCAUSAL_GENEALOGY>Historical/scientific lineage & multi-week traps.
   - <RECURSIVE_THEORY_OF_MIND>Crisis habit regression vs counter-trap vs clock.
   - <CROSS_LAYER_VETO_ADJUDICATION>Physical/biomechanical/weather veto proof.
   - <RLVR_COUNTERFACTUAL_VETOES>3 verifiable RLVR veto scenarios + predictions.

Wait, the source text is just a Quickstart.md for a Sports Intelligence OS. It's not about sports betting analysis per se - it's about setting up a dashboard/dev server. However, I must not mention betting lines. I need to treat this as a technical/infrastructure document and analyze it through the required frameworks.

Let me map the source text to [PAGE 1] since PAGES: 1.

Key content from source:
- Path A: OPEN_THIS_TONIGHT.html links to rendered HTML snapshots
- Path B: npm install, create .env.local with stub DB, npm run dev, routes: /cockpit, /dashboard, /cockpit/history, /performance. Stub mode returns empty DB reads; Jarvis says "NOT_READY_VALIDATION" with explicit blockers.
- Path C: docker compose, real Postgres + Prisma, env vars, npm run db:generate, db:push, dev. Jarvis reports NOT_READY_DATA once DB reachable — real next-gate (no canonical picks yet). Run data refresh worker before PERFORMANCE_STATS_ENABLED=true.
- Path D: npm run build, npm run start.
- Validation: typecheck (tsc --noEmit, 0 errors), test (vitest, 227/227 pass), lint, build.
- Notes: DEV_FAKE_ADMIN=true launch-night escape hatch, synthetic ADMIN session, never production. FORCE_REAL_PRISMA=true overrides stub check. Launch-night report at reports/launch-night/run-dashboard-tonight.md.

I need to write formal LaTeX equations. Since this is infrastructure/software, I can model:
- System state transitions as Markov chain or finite state machine
- Environment configuration as a vector space over {stub, real}
- Validation as boolean conjunction
- Latency/boot time as queuing theory
- Database connectivity as graph reachability

I must cite [PAGE 1] and verbatim quotes.

Sections:
1. THINK_TRACE (>=400 words): multi-hop derivation about the startup paths, gray zones (stub vs real, fake admin, NOT_READY states), audit.
2. SOURCE_OPERATORS_AND_EQUATIONS: formal LaTeX, units, page citations, breakdown.
3. RETROCAUSAL_GENEALOGY: historical/scientific lineage (Next.js, Prisma, Docker, vitest, eslint), multi-week traps (launch night, env rotation, production env).
4. RECURSIVE_THEORY_OF_MIND: crisis habit regression vs counter-trap vs clock. (Jarvis states, operator expectations, automation trust).
5. CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof. Since this is software infrastructure, "physical" = server/hardware, "biomechanical" = human operator interaction (latency, cognitive load), "weather" = environmental/network conditions? Need to map metaphors carefully without betting lines.
6. RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions. RLVR = Reinforcement Learning from Verifiable Rewards? Or some framework. I'll define 3 veto scenarios based on the doc.

Word count: Need >=1000 words total across sections. THINK_TRACE alone >=400.

Let me draft carefully.

THINK_TRACE: Discuss Path A-D as state machine. Gray zones: stub mode returns empty reads but Jarvis says NOT_READY_VALIDATION; Path C reaches NOT_READY_DATA but no canonical picks. The "launch-night escape hatch" DEV_FAKE_ADMIN creates synthetic admin session - gray zone between auth and no-auth. Multi-hop: if DEV_FAKE_ADMIN=true in production -> security singularity. If FORCE_REAL_PRISMA=true with stub DB -> connection error exposure. If PERFORMANCE_STATS_ENABLED=true before canonical picks -> empty performance dashboard / invalid telemetry. Gray-zone audit: the boundary between demo and production is policed only by convention ("Never set this in production"), not by code enforcement.

SOURCE_OPERATORS_AND_EQUATIONS:
Define configuration vector c ∈ {stub, real}^k etc.
State S_t ∈ {NOT_READY_VALIDATION, NOT_READY_DATA, READY}.
Transition function δ.
Boot time T_boot ~ Exponential or deterministic.
Validation predicate V = (typecheck ∧ test ∧ lint ∧ build).
Cite [PAGE 1] with quotes.

RETROCAUSAL_GENEALOGY:
Lineage: Next.js (React SSR), Prisma ORM, Docker Compose, Vitest, ESLint, TypeScript, NEXTAUTH. Historical traps: .env.local secrets rotation, DATABASE_URL hardcoded credentials in doc (sports_dev_password), launch-night report dependency, multi-week trap of accumulating canonical picks before flipping perf stats.

RECURSIVE_THEORY_OF_MIND:
Operator models Jarvis states. Crisis habit regression: under launch-night pressure, operator sets DEV_FAKE_ADMIN=true in prod or skips data refresh. Counter-trap: code review gates, env var linting, staging parity. Clock: T_launch vs T_data_refresh vs T_canonical_accumulation.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: docker compose port 5432, localhost:3000, node processes. Biomechanical: operator typing npm commands, env file creation, cognitive load of 4 paths. Weather: network conditions for npm install, docker pull, OAuth (Google OAuth not configured), external data refresh worker dependencies. Veto proof: if any layer fails, system vetoes progression to READY.

RLVR_COUNTERFACTUAL_VETOES:
3 scenarios:
1. DEV_FAKE_ADMIN=true deployed to production -> veto: synthetic ADMIN session bypasses OAuth; prediction: unauthorized cockpit/dashboard access.
2. PERFORMANCE_STATS_ENABLED=true before canonical picks accumulate -> veto: NOT_READY_DATA persists; prediction: empty performance dashboard, division-by-zero or null metrics in stats computation.
3. FORCE_REAL_PRISMA=true with DATABASE_URL=stub or unreachable Postgres -> veto: connection errors instead of empty defaults; prediction: crash loop or exposed connection error strings in UI/logs.

Need to ensure no betting lines. The doc mentions "picks", "performance", "canonical picks" but not betting lines. I will not mention spreads, totals, moneylines, odds.

Word count: I'll write substantial content.

Let's compose. I must use exact XML section tags.

Need verbatim quotes and [PAGE 1].

Quotes from [PAGE 1]:
- "NOT_READY_VALIDATION"
- "NOT_READY_DATA"
- "DEV_FAKE_ADMIN=true"
- "Never set this in production."
- "FORCE_REAL_PRISMA=true"
- "Stub-mode means all DB reads return empty; Jarvis correctly says..."
- "227/227 pass"
- "reports/launch-night/run-dashboard-tonight.md"

Let's write.

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

I'll ensure THINK_TRACE >=400 words. Total >=1000.

Let's draft content mentally.

THINK_TRACE (~500 words):
Start: The QUICKSTART.md [PAGE 1] defines four deployment paths A-D as a staged reachability problem over configuration space. Path A is a static HTML snapshot; Path B is stub-mode dev server; Path C is full stack; Path D is production build. Multi-hop derivation: If operator selects Path B, they must create apps\web\.env.local with DATABASE_URL=stub [PAGE 1]. The stub-mode invariant is that all DB reads return empty [PAGE 1], which forces Jarvis into state NOT_READY_VALIDATION with explicit blockers [PAGE 1]. This is a deliberate demonstration state before live data flows [PAGE 1]. Hop 2: Path C upgrades to real Postgres via docker compose [PAGE 1], changing DATABASE_URL to postgresql://... [PAGE 1] and setting FORCE_REAL_PRISMA=true [PAGE 1]. Once DB reachable, Jarvis reports NOT_READY_DATA [PAGE 1] — the real next-gate [PAGE 1] — because canonical picks have not yet accumulated [PAGE 1]. Hop 3: Only after running a data refresh worker and letting canonical picks accumulate may the operator flip PERFORMANCE_STATS_ENABLED=true [PAGE 1]. Gray-zone audit: The launch-night escape hatch DEV_FAKE_ADMIN=true [PAGE 1] returns a synthetic ADMIN session [PAGE 1] to bypass Google OAuth and real Postgres session table [PAGE 1]. The document explicitly warns "Never set this in production." [PAGE 1], yet enforcement is conventional, not mechanical. This creates a principal-agent hazard: under time pressure, an operator may promote a .env.local containing DEV_FAKE_ADMIN=true to production, collapsing the authentication boundary. Another gray zone is FORCE_REAL_PRISMA=true [PAGE 1], which overrides stub-mode checks to surface real connection errors [PAGE 1]; if left enabled with a stub or unreachable URL, it converts graceful degradation into hard failure. The boundary between demo and production is policed only by documentation, not by runtime assertions, making the transition from NOT_READY_VALIDATION to READY a trust-dependent rather than protocol-dependent event.

That's maybe 350 words. I'll expand to ensure >=400.

SOURCE_OPERATORS_AND_EQUATIONS:
Define:
- Configuration vector c = (DATABASE_URL, DIRECT_URL, NEXTAUTH_SECRET, NEXTAUTH_URL, DEV_FAKE_ADMIN, NODE_ENV, PUBLIC_PICKS_ENABLED, DEMO_PICKS_ENABLED, FORCE_REAL_PRISMA, PERFORMANCE_STATS_ENABLED) ∈ {stub, postgresql, boolean, string}^10.
- System state S ∈ {NOT_READY_VALIDATION, NOT_READY_DATA, READY}.
- Transition δ(c, path) -> S.
Path B: c_DB = stub => δ => NOT_READY_VALIDATION [PAGE 1].
Path C: c_DB = real ∧ reachable => δ => NOT_READY_DATA [PAGE 1].
Path C ∧ worker_run ∧ picks_accumulated ∧ PERFORMANCE_STATS_ENABLED=true => READY.
Validation predicate V(c) = typecheck(c) ∧ test(c) ∧ lint(c) ∧ build(c). From [PAGE 1]: npm run typecheck :: tsc --noEmit, 0 errors; npm run test :: vitest, 227/227 pass [PAGE 1].
Boot time T_boot (Next.js production server boots in seconds once build cached [PAGE 1]).
Information units: empty DB reads = cardinality 0 records; test coverage = 227/227 = 1.0 (dimensionless pass ratio).
Singularity/breakdown: DEV_FAKE_ADMIN=true in production => authentication singularity (unbounded privilege escalation via synthetic session). PERFORMANCE_STATS_ENABLED=true ∧ ¬(canonical picks accumulated) => statistical breakdown (empty performance ledger, undefined metrics).

RETROCAUSAL_GENEALOGY:
Historical lineage: Next.js framework, Prisma ORM, Docker Compose orchestration, Vitest (227 tests), ESLint, TypeScript, NextAuth (NEXTAUTH_SECRET, NEXTAUTH_URL), Google OAuth (deferred via DEV_FAKE_ADMIN). Scientific lineage: stub DB as null object pattern; escape hatch as feature flag. Multi-week traps: launch-night report dependency at reports/launch-night/run-dashboard-tonight.md [PAGE 1]; NEXTAUTH_SECRET rotation via env (REDACTED_ROTATE_VIA_ENV) implies secret lifecycle management over weeks; canonical picks accumulation requires a data refresh worker running over time before performance stats can be enabled; docker compose port 5432 persistence across reboots.

RECURSIVE_THEORY_OF_MIND:
Operator's model of Jarvis: expects explicit blockers in stub mode [PAGE 1]. Crisis habit regression: under launch-night pressure, operator may skip db:push, set DEV_FAKE_ADMIN=true permanently, or enable PERFORMANCE_STATS_ENABLED=true prematurely. Counter-trap: enforce .env.local parity between dev and prod, code review for env vars, automated gates that reject DEV_FAKE_ADMIN=true in NODE_ENV=production. Clock: T_refresh (data refresh worker) < T_launch; T_accumulate (canonical picks) must elapse before T_stats_enable.

CROSS_LAYER_VETO_ADJUDICATION:
Physical layer: docker daemon, Postgres container on localhost:5432, Next.js on localhost:3000, npm install network fetch. Biomechanical layer: operator manually editing .env.local, running sequential CLI commands, cognitive load of four paths; NEXTAUTH_SECRET=REDACTED_ROTATE_VIA_ENV requires human rotation. Weather layer: external network for npm install and docker pull; Google OAuth endpoint availability (not configured in dev); data refresh worker external dependencies. Veto proof: if docker compose fails (physical), Jarvis stays NOT_READY_DATA [PAGE 1]. If OAuth misconfigured and DEV_FAKE_ADMIN=false (biomechanical/auth), /cockpit and /dashboard inaccessible [PAGE 1]. If network down (weather), npm install fails, no dev server. Each layer independently vetoes progression to READY.

RLVR_COUNTERFACTUAL_VETOES:
Scenario 1: DEV_FAKE_ADMIN=true promoted to production with NODE_ENV=production. Veto condition: synthetic ADMIN session [PAGE 1] bypasses Google OAuth [PAGE 1]. Prediction: unauthorized access to /cockpit and /dashboard [PAGE 1]; privilege escalation without credential rotation.
Scenario 2: PERFORMANCE_STATS_ENABLED=true before canonical picks accumulate [PAGE 1]. Veto condition: NOT_READY_DATA persists [PAGE 1] because no canonical picks yet [PAGE 1]. Prediction: /performance returns empty ledger; stats endpoints produce null/undefined metrics or division-by-zero in derived aggregates.
Scenario 3: FORCE_REAL_PRISMA=true [PAGE 1] with DATABASE_URL=stub or unreachable Postgres. Veto condition: overrides stub-mode check [PAGE 1], forcing real connection errors instead of empty defaults [PAGE 1]. Prediction: dev server crashes on DB read; error strings leak into UI/logs; NOT_READY_VALIDATION becomes hard failure rather than graceful demo state.

I need to ensure total words >= 1000. Let me expand each section enough.

Also must ensure no betting lines. I won't mention spreads etc.

Let's write final output. I'll be verbose enough to hit word counts.

Check: exact XML section names must match. Yes.

Citations: [PAGE 1] after claims sourced from the doc. Verbatim quotes in quotation marks.

Let's produce.
</NATIVE_REASONING>

<THINK_TRACE>
The QUICKSTART.md document [PAGE 1] defines four deployment paths—A, B, C, and D—as a staged reachability problem over the configuration space of a Sports Intelligence OS. The first multi-hop derivation begins with Path B, the live dev server using a stub DB. The operator must run `npm install`, then create `apps\web\.env.local` with `DATABASE_URL=stub` and `DIRECT_URL=stub` [PAGE 1]. Once `npm run dev` is executed, the system enters stub mode, where the document states verbatim: "Stub-mode means all DB reads return empty; Jarvis correctly says 'NOT_READY_VALIDATION' with explicit blockers" [PAGE 1]. This is not a failure mode but the intended demonstration state before live data flows [PAGE 1]. The second hop advances to Path C, the full local stack with Postgres and real Prisma. The operator replaces the stub URLs with `postgresql://sports:sports_dev_password@localhost:5432/sports_platform`, sets `FORCE_REAL_PRISMA=true`, and runs `docker compose -f docker\docker-compose.yml up -d` followed by `npm run db:generate` and `npm run db:push` [PAGE 1]. Once the database is reachable, Jarvis reports `NOT_READY_DATA` [PAGE 1], which the text identifies as "the real next-gate (no canonical picks yet)" [PAGE 1]. The third hop requires running a data refresh worker and allowing canonical picks to accumulate before flipping `PERFORMANCE_STATS_ENABLED=true` [PAGE 1]. Only after this temporal accumulation does the system transition toward a READY state.

A gray-zone audit of [PAGE 1] reveals three fracture points where documentation is the sole guardrail. First, `DEV_FAKE_ADMIN=true` is described as "the launch-night escape hatch" that returns "a synthetic ADMIN session so you can open `/dashboard` and `/cockpit` without configuring Google OAuth or running a real Postgres session table" [PAGE 1]. The document explicitly warns: "Never set this in production." [PAGE 1]. However, enforcement is conventional rather than mechanical; nothing in the provided text prevents an operator from promoting a `.env.local` containing `DEV_FAKE_ADMIN=true` to a production environment, which would collapse the authentication boundary into a synthetic-session privilege escalation. Second, `FORCE_REAL_PRISMA=true` "overrides the stub-mode check" so the operator can "see real connection errors instead of empty defaults" [PAGE 1]. If this flag remains active while `DATABASE_URL=stub` or the Postgres container is down, graceful degradation converts into a hard connection failure. Third, the validation suite—`npm run typecheck` (0 errors), `npm run test` (227/227 pass), `npm run lint`, `npm run build` [PAGE 1]—certifies code correctness but does not certify configuration hygiene. The boundary between `NOT_READY_VALIDATION` and `READY` is therefore trust-dependent rather than protocol-dependent, creating a principal-agent hazard under launch-night time pressure.
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Let the configuration vector be defined as:
\[
\mathbf{c} = \left( \text{DATABASE\_URL}, \text{DIRECT\_URL}, \text{NEXTAUTH\_SECRET}, \text{NEXTAUTH\_URL}, \text{DEV\_FAKE\_ADMIN}, \text{NODE\_ENV}, \text{PUBLIC\_PICKS\_ENABLED}, \text{DEMO\_PICKS\_ENABLED}, \text{FORCE\_REAL\_PRISMA}, \text{PERFORMANCE\_STATS\_ENABLED} \right)
\]
with domain \(\mathcal{C} = \{\text{stub}, \text{postgresql}, \text{boolean}, \text{string}\}^{10}\). The system state space is \(\mathcal{S} = \{ \text{NOT\_READY\_VALIDATION}, \text{NOT\_READY\_DATA}, \text{READY} \}\).

The transition operator \(\delta: \mathcal{C} \times \{\text{A,B,C,D}\} \to \mathcal{S}\) is constrained by [PAGE 1] as follows:

1. Path B (stub mode): if \(\text{DATABASE\_URL} = \text{stub}\) and \(\text{FORCE\_REAL\_PRISMA} = \text{false}\), then \(\delta(\mathbf{c}, \text{B}) = \text{NOT\_READY\_VALIDATION}\). Verbatim from [PAGE 1]: "Stub-mode means all DB reads return empty; Jarvis correctly says 'NOT_READY_VALIDATION' with explicit blockers."

2. Path C (real stack): if \(\text{DATABASE\_URL}\) is a reachable PostgreSQL connection string and \(\text{FORCE\_REAL\_PRISMA} = \text{true}\), then after `db:push` and container readiness, \(\delta(\mathbf{c}, \text{C}) = \text{NOT\_READY\_DATA}\). Verbatim from [PAGE 1]: "Jarvis will report `NOT_READY_DATA` once the DB is reachable — that's the real next-gate (no canonical picks yet)."

3. Readiness condition: \(\delta(\mathbf{c}, \text{C}) = \text{READY}\) only if \(\text{PERFORMANCE\_STATS\_ENABLED} = \text{true}\) after a data refresh worker has run and canonical picks have accumulated [PAGE 1].

Units and formal quantities:
- Empty DB read cardinality: \(|R| = 0\) records (dimensionless count) under stub mode [PAGE 1].
- Test pass ratio: \(\rho_{\text{test}} = 227/227 = 1.0\) (dimensionless) from `npm run test` :: vitest, 227/227 pass [PAGE 1].
- Typecheck error count: \(\epsilon_{\text{tsc}} = 0\) from `tsc --noEmit`, 0 errors [PAGE 1].
- Boot latency: \(T_{\text{boot}}\) for Next.js production server is "seconds once the build is cached" [PAGE 1], bounded but not numerically specified in source.

Singularity and breakdown regimes:
- Authentication singularity: \(\text{DEV\_FAKE\_ADMIN} = \text{true} \land \text{NODE\_ENV} = \text{production}\) \(\Rightarrow\) synthetic ADMIN session bypasses Google OAuth [PAGE 1], producing unbounded privilege escalation without credential rotation.
- Statistical breakdown: \(\text{PERFORMANCE\_STATS\_ENABLED} = \text{true} \land \neg(\text{canonical picks accumulated})\) \(\Rightarrow\) `/performance` reads an empty ledger; derived metrics become undefined or division-by-zero because no canonical picks exist [PAGE 1].
- Connection-error regime: \(\text{FORCE\_REAL\_PRISMA} = \text{true} \land (\text{DATABASE\_URL} = \text{stub} \lor \text{Postgres unreachable})\) \(\Rightarrow\) override of stub-mode check forces hard connection errors instead of empty defaults [PAGE 1], converting graceful demo degradation into a crash-prone state.
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The technical lineage in [PAGE 1] traces to several established software engineering strata. The application framework is Next.js, evidenced by routes `/cockpit`, `/dashboard`, `/cockpit/history`, and `/performance`, plus the `npm run dev`, `npm run build`, and `npm run start` commands [PAGE 1]. The ORM layer is Prisma, indicated by `npm run db:generate`, `npm run db:push`, and the `FORCE_REAL_PRISMA` override [PAGE 1]. Container orchestration uses Docker Compose at `docker\docker-compose.yml` targeting `localhost:5432` [PAGE 1]. Authentication is mediated by NextAuth, with `NEXTAUTH_SECRET` and `NEXTAUTH_URL` environment variables and a deferred Google OAuth integration [PAGE 1]. Testing uses Vitest (227/227 pass), type safety uses TypeScript (`tsc --noEmit`), and linting uses ESLint [PAGE 1].

From a scientific-software perspective, the stub database implements the null-object pattern: all reads return empty rather than throwing, allowing the UI to render while Jarvis emits `NOT_READY_VALIDATION` [PAGE 1]. The `DEV_FAKE_ADMIN=true` flag is a feature flag / escape hatch pattern, isolating authentication complexity during launch-night demonstrations [PAGE 1]. The `FORCE_REAL_PRISMA=true` override is a fault-injection switch that trades graceful degradation for observable connection errors [PAGE 1].

Multi-week traps embedded in [PAGE 1] include:
1. Secret lifecycle: `NEXTAUTH_SECRET=REDACTED_ROTATE_VIA_ENV` implies a rotation schedule that must be managed outside the document, over days or weeks, rather than set once at boot [PAGE 1].
2. Canonical pick accumulation: Path C explicitly defers readiness until "canonical picks accumulate" after running a data refresh worker [PAGE 1], creating a time-gated dependency between infrastructure provisioning and data operations.
3. Launch-night report coupling: The document references `reports/launch-night/run-dashboard-tonight.md` [PAGE 1], binding operational readiness to a static artifact whose freshness is not validated by the 227-test suite [PAGE 1].
4. Environment drift: `.env.local` values such as `sports_dev_password` appear in plaintext in the quickstart [PAGE 1]; if these credentials persist into longer-lived branches, they become long-term exposure surfaces.
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
The operator’s recursive model of Jarvis operates across three nested layers: (1) the machine’s stated state, (2) the operator’s belief about that state, and (3) the operator’s belief about what Jarvis believes about the operator’s configuration. From [PAGE 1], Jarvis communicates explicit, legible states: `NOT_READY_VALIDATION` in stub mode with explicit blockers, and `NOT_READY_DATA` once Postgres is reachable but canonical picks are absent [PAGE 1]. A well-calibrated operator treats these utterances as honest signals and withholds `PERFORMANCE_STATS_ENABLED=true` until the data refresh worker has populated the ledger [PAGE 1].

Crisis habit regression emerges under launch-night pressure. The documented escape hatch `DEV_FAKE_ADMIN=true` [PAGE 1] is designed for a single night, but regression toward convenience can produce three recursive failures: (a) the operator sets `DEV_FAKE_ADMIN=true` in production to avoid configuring Google OAuth, thereby believing Jarvis is secure when it is running a synthetic session; (b) the operator skips `npm run db:push` or the data refresh worker because Jarvis already shows a dashboard in stub mode, misreading `NOT_READY_VALIDATION` as operational readiness; (c) the operator flips `PERFORMANCE_STATS_ENABLED=true` prematurely, expecting statistics where [PAGE 1] confirms none exist yet.

The counter-trap is to treat environment variables as controlled payloads rather than notes. Automated gates should reject `DEV_FAKE_ADMIN=true` when `NODE_ENV=production`, require `FORCE_REAL_PRISMA=true` only in non-production or explicit debug sessions, and enforce that `PERFORMANCE_STATS_ENABLED=true` is gated on a non-empty canonical-picks ledger rather than operator discretion. The clock variable is \(T_{\text{refresh}} < T_{\text{launch}}\): the data refresh worker must complete and canonical picks must accumulate before the launch-night report at `reports/launch-night/run-dashboard-tonight.md` [PAGE 1] is consulted. If the operator’s mental model compresses this timeline, the system regresses into a state where Jarvis’s `NOT_READY_DATA` warning is ignored precisely when it is most informative.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Progression to READY is subject to layered vetoes. Each layer independently blocks the transition; no layer can be bypassed by configuration alone without violating the invariants stated in [PAGE 1].

Physical layer: The host must run Docker Compose at `docker\docker-compose.yml` to expose PostgreSQL on `localhost:5432` [PAGE 1]. The Next.js process binds to `http://localhost:3000` [PAGE 1]. If the docker daemon is unavailable, port 5432 is closed, or the container fails to mount volumes, Jarvis cannot reach the DB and remains at `NOT_READY_DATA` or fails outright [PAGE 1]. This physical dependency vetoes Path C and Path D until the container stack is healthy.

Biomechanical layer: The operator must manually create `apps\web\.env.local`, rotate `NEXTAUTH_SECRET` via environment rather than hardcoding it, and sequence `npm install`, `npm run db:generate`, `npm run db:push`, and `npm run dev` in the correct order [PAGE 1]. Cognitive load across four paths (A-D) increases the probability of transposition errors, such as leaving `DEV_FAKE_ADMIN=true` set after the launch-night escape hatch window [PAGE 1]. The absence of a real Postgres session table and Google OAuth configuration means the operator is the authentication mechanism in dev; human error here vetoes access to `/cockpit` and `/dashboard` [PAGE 1].

Weather layer (environmental/external): `npm install` requires network access to package registries. Docker image pulls require external registry connectivity. The data refresh worker referenced in [PAGE 1] depends on external data sources whose availability is not guaranteed by the local test suite (227/227 pass only certifies internal code correctness) [PAGE 1]. Google OAuth, deferred by `DEV_FAKE_ADMIN=true`, introduces an external identity provider dependency for any path that does not use the synthetic escape hatch [PAGE 1]. Network partitions, registry outages, or upstream data-source latency each veto progression.

Veto proof: Because stub mode returns empty DB reads [PAGE 1] and `FORCE_REAL_PRISMA=true` can force real connection errors instead of empty defaults [PAGE 1], there is no configuration path that simultaneously guarantees demo stability and production fidelity. The only sound adjudication is a hard gate: physical container health AND biomechanical env hygiene AND weather-layer network/data-source availability must all hold before `PERFORMANCE_STATS_ENABLED=true` is permitted.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
RLVR Scenario 1 — Synthetic admin escape to production:
Counterfactual: The operator deploys `.env.local` containing `DEV_FAKE_ADMIN=true` [PAGE 1] to a production environment where `NODE_ENV=production`.
Veto condition: Verbatim from [PAGE 1], `DEV_FAKE_ADMIN=true` returns a synthetic ADMIN session and the document warns "Never set this in production." [PAGE 1]
Prediction: Unauthorized access to `/cockpit` and `/dashboard` [PAGE 1] without Google OAuth or a real Postgres session table; privilege escalation is deterministic because the session is synthetic and not rotated via `NEXTAUTH_SECRET` [PAGE 1]. The RLVR veto fires on any production request with `DEV_FAKE_ADMIN=true`, returning an access-denied state rather than rendering the admin cockpit.

RLVR Scenario 2 — Premature performance statistics:
Counterfactual: The operator sets `PERFORMANCE_STATS_ENABLED=true` immediately after Path C reaches `NOT_READY_DATA`, before running the data refresh worker and before canonical picks accumulate [PAGE 1].
Veto condition: [PAGE 1] states "no canonical picks yet" at the `NOT_READY_DATA` gate and requires accumulation before enabling performance stats.
Prediction: `/performance` resolves to an empty pick ledger; all derived performance metrics are undefined, null, or produce division-by-zero errors because the denominator (canonical picks) is zero. The RLVR veto fires by blocking `PERFORMANCE_STATS_ENABLED=true` unless the canonical-picks count is strictly greater than zero, preserving statistical well-posedness.

RLVR Scenario 3 — Forced real Prisma over stub or unreachable DB:
Counterfactual: The operator sets `FORCE_REAL_PRISMA=true` [PAGE 1] while `DATABASE_URL=stub` or while the Postgres container on `localhost:5432` is stopped.
Veto condition: [PAGE 1] states `FORCE_REAL_PRISMA=true` "overrides the stub-mode check" to surface real connection errors instead of empty defaults.
Prediction: The dev server transitions from graceful `NOT_READY_VALIDATION` with empty reads to a hard connection-error failure mode; database read paths throw, error strings may leak into UI or logs, and Jarvis cannot hold the demo state. The RLVR veto fires when `FORCE_REAL_PRISMA=true` is combined with a non-postgresql or unreachable `DATABASE_URL`, forcing a fallback to stub semantics or a blocked boot until the physical database layer is healthy.
</RLVR_COUNTERFACTUAL_VETOES>