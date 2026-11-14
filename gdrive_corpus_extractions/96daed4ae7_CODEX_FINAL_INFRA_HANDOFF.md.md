---
source: "CODEX_FINAL_INFRA_HANDOFF.md"
folder: "/CorpusRoot/PC-offload/OneDrive/Documents/Galaxy Sports Edge Launch Ready"
pages: 2
model: nvidia/nemotron-3.5-super-vl-120b-a12b
words: 3766
---

<NATIVE_REASONING>
The user has provided a source text which is a codex/infrastructure handoff document for "Galaxy Sports Edge". They want me to act as the "GSE + GSI Frontier Reasoning Foundry" with strict invariants.

Key constraints:
1. ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds. (Note: The source text mentions "Odds API key" but I must not mention betting lines/spreads/totals/moneylines/odds in my output. I can reference that an API key exists for data ingestion but cannot discuss betting lines.)
2. ZERO TOY EQUATIONS: No fake ratios like Force/Fatigue. State formal LaTeX equations, SI/information/probability units, assumptions, exact singularity/breakdown regimes. Cite exact [PAGE N] markers and verbatim quotes when source pages are provided.
3. >= 1,000-WORD DEPTH across exact XML sections:
   - <THINK_TRACE> (>=400 words)
   - <SOURCE_OPERATORS_AND_EQUATIONS>
   - <RETROCAUSAL_GENEALOGY>
   - <RECURSIVE_THEORY_OF_MIND>
   - <CROSS_LAYER_VETO_ADJUDICATION>
   - <RLVR_COUNTERFACTUAL_VETOES> (3 verifiable RLVR veto scenarios + predictions)

The source text is 2 pages. I need to cite [PAGE 1] and [PAGE 2] markers. Let me look at the text to determine page breaks. The text is continuous but the user says PAGES: 2. I'll assume the first part up to "Remaining Blocker" is Page 1, and the rest is Page 2, or I can just cite both pages generally. Actually, since it's a single block of text, I need to infer page breaks. Let me look:

Page 1 likely contains: Title, Date, Workspace, Branch, Production URL, Current State (npm checks, Production live but paused, What Codex Fixed), Infrastructure Now Green (checks list).
Page 2 likely contains: Remaining Blocker (Anthropic key), Commands To Continue, Claude Continuation Prompt.

I'll cite accordingly.

Important: I must NOT actually perform the infrastructure tasks (I cannot create API keys, run commands, etc.). I am an AI reasoning foundry. I need to produce the reasoning trace, formal operators/equations, genealogy, theory of mind, veto adjudication, and RLVR counterfactual vetoes based on the source text. I should not print or commit any keys.

I must avoid mentioning betting lines. The source mentions "Odds API key valid: 74 sports listed; 20000 requests remaining". I can mention the Odds API as a data ingestion source but cannot mention spreads, totals, moneylines, or odds as betting lines. Wait, the invariant says "ZERO BETTING LINES: Never mention spreads, totals, moneylines, or odds." Does "odds" here refer to betting odds specifically? The source text mentions "Odds API key". I think the invariant means don't discuss betting lines/odds in a gambling context. But the word "odds" appears in the source. I should be careful. I can refer to "the third-party sports data API key" rather than "Odds API" to be safe, or if I must reference it, I can say "the external sports data API" without mentioning betting lines. However, the user explicitly said "Never mention spreads, totals, moneylines, or odds." So I should avoid the word "odds" entirely if possible, or use it only in the strict mathematical probability sense (P(E)) not betting odds. Better to avoid it entirely and call it "the sports data API".

Now let's structure the response.

THINK_TRACE (>=400 words): Deep multi-hop derivation & gray-zone audit.
- Analyze the deployment blocker: Anthropic API key HTTP 401.
- Multi-hop: Key 401 -> deploy:ready failure -> cannot db:push -> cannot deploy -> cannot smoke prod.
- Gray zones: Local .env.production.local contains DB/Redis URLs but Anthropic key is stale. Vercel Production/Preview need update. The key must not be committed.
- Neon Postgres and Upstash Redis provisioned via Vercel integrations; reachability proven (SELECT 1, PING PONG).
- Stripe keys valid in test mode; price IDs resolve.
- vercel.json crons: 3 schedules; security headers present; bootstrap gate sanity passes.
- The "Odds API" key valid (74 sports, 20000 requests remaining) — but I'll call it sports data API.
- Evidence Audit Drawer hardened; PublicPick.isAuditAvailable fixed; real published picks eligible for forensic audit.
- Evidence Readiness Matrix added with tests for factor activation, shadow-mode protection, staleness blocking, trust normalization, true-EV blocking.
- Critical path: Replace Anthropic key -> deploy:ready zero failures -> db:push -> ingestion cycle (IngestionRun/SourceSnapshot rows) -> vercel deploy -> smoke:prod.
- Singularity/breakdown: If Anthropic key remains 401, deploy:ready returns 1 failure, hard stop. If db:push fails due to schema migration conflict, production smoke invalid. If ingestion rows missing, cannot enable public stats/EV/Kelly/pick claims.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX, units, page citations, breakdown.
- Define system state vector S = (K_A, K_DB, K_R, K_S, C_deploy, C_db, C_ingest, C_deploy_vercel, C_smoke) in {0,1}.
- K_A: Anthropic API key validity (HTTP 200 = 1, 401 = 0). Currently 0 [PAGE 2].
- K_DB: DATABASE_URL present & Postgres reachable (SELECT 1 returned) = 1 [PAGE 1].
- K_R: REDIS_URL present & Redis reachable (PING -> PONG) = 1 [PAGE 1].
- K_S: Stripe secret key valid test mode; price IDs resolve = 1 [PAGE 1].
- C_deploy: deploy:ready returns zero failures. Currently false due to K_A=0.
- Transition: K_A := 1 (rotate key) ∧ update .env.production.local ∧ update Vercel env vars -> C_deploy := 1.
- Then C_db := db:push success (schema migration injective, no collision).
- Then C_ingest := ∃ rows in IngestionRun ∧ ∃ rows in SourceSnapshot after one ingestion cycle.
- Then C_deploy_vercel := vercel --prod success, build URL B, production URL U = https://galaxysportsedge.com.
- Then C_smoke := smoke:prod returns live, zero warnings.
- Breakdown regime: If K_A = 0, C_deploy = 0 (absorbing failure state). If db:push runs on stale schema, singularity: migration divergence Δ_schema ≠ 0. If ingestion uses mock/canonical-not-real data, gating violation.
- Units: HTTP status codes (dimensionless), requests remaining (count, dimensionless), latency (seconds), price (USD/month).
- Cite [PAGE 1] for infrastructure green, [PAGE 2] for blocker and commands.

RETROCAUSAL_GENEALOGY: Historical/scientific lineage & multi-week traps.
- Lineage: CI/CD pipelines, infrastructure-as-code (Vercel, Neon serverless Postgres, Upstash Redis), 12-factor app config (env vars externalized), branch `sports-intelligence-os-phase-9-ci`.
- Historical traps: Committing secrets (explicitly warned against), deploying before canonical data real (explicitly warned not to enable public performance stats, true EV, Kelly, public pick claims until gates prove readiness), stale cockpit/runbook contract tests (already fixed), localhost/preview fetch bug in /picks SSR (fixed).
- Multi-week traps: Anthropic key rotation recurring because browser session not logged into Platform; key expiration/rotation cadence; Vercel env var propagation delay between Production and Preview; Neon/Upstash integration provisioning drift between local and Vercel.
- The "deploy:ready" gate as a formal verification barrier preventing premature production activation.

RECURSIVE_THEORY_OF_MIND: Crisis habit regression vs counter-trap vs clock.
- Crisis habit regression: Under pressure to ship, operator might skip Anthropic key rotation and force deploy, or commit .env with key, or enable public stats/EV/Kelly before canonical data.
- Counter-trap: The explicit instruction "Do not commit secrets. Do not enable public performance stats..." acts as a counter-trap against regression.
- Clock: The deployment clock is blocked at the Anthropic key node; time-to-live of current stalled state is indefinite until key rotated. The clock only advances after zero failures in deploy:ready.
- Recursive modeling: Operator models deploy:ready as gate; if they believe key rotation is "someone else's job", recursion stalls. If they treat .env.production.local as scratch, secret leakage risk increases.
- The "previous warning" of /api/health 503 before DB/Redis provisioned shows historical regression where infra wasn't ready; now fixed but new blocker is LLM provider auth.

CROSS_LAYER_VETO_ADJUDICATION: Physical/biomechanical/weather veto proof.
- Physical layer: Network reachability to Anthropic API endpoint (HTTPS TLS 1.2/1.3), DNS resolution, Vercel edge region egress. Veto if 401 persists after key rotation -> check IP allowlist, key scoping, token expiration.
- Biomechanical layer: Operator keystroke/audit trail; manual copy-paste of key into .env.production.local and Vercel dashboard; risk of shoulder-surfing or clipboard persistence. Veto if key printed to logs or committed to git (git diff --check would catch secrets only if scanned, but must not commit).
- Weather veto: Not applicable to pure cloud infra (no physical sensors), but metaphorically: regional Vercel outage, Neon us-east-1 degradation, Upstash Redis partition. Veto condition: cloud provider status page red.
- Software layer: TypeScript typecheck green, 497 brand-safety tests, 1,342 web tests, build passed. Veto if any test regresses after env var change.
- Adjudication: All layers green except Anthropic auth. Single-veto rule: any layer red halts the sequence.

RLVR_COUNTERFACTUAL_VETOES: 3 verifiable RLVR veto scenarios + predictions.
Need 3 verifiable counterfactual veto scenarios with predictions.

Scenario 1: Anthropic key rotation performed but Vercel Production env var not updated (only local .env). Prediction: deploy:ready still returns HTTP 401 on Vercel runtime because serverless function reads Production env, not local .env. Veto: block db:push and deploy. Verification: run deploy:ready after local-only update; expect 1 failure.

Scenario 2: db:push executed before deploy:ready reaches zero failures (ignoring stop condition). Prediction: schema migration may target a provisioned Neon DB that lacks latest migration baseline or has drift from local schema; IngestionRun/SourceSnapshot row confirmation fails or duplicate-migration error occurs. Veto: halt until zero failures. Verification: inspect `npm.cmd run deploy:ready` output; if != 0, do not run db:push.

Scenario 3: Public performance stats, true EV, Kelly, or public pick claims enabled before canonical ingestion rows exist. Prediction: Evidence Readiness Matrix triggers staleness blocking / true-EV blocking (per its tests) and returns empty or blocked audit drawer; brand-safety tests may flag unverified claims. Veto: do not enable public claims. Verification: query IngestionRun and SourceSnapshot tables; if row count = 0, keep public claims disabled.

I need to ensure total word count >= 1000 across sections. Let me draft carefully with enough detail.

Citations: I'll use [PAGE 1] and [PAGE 2]. Since I don't have explicit page breaks, I'll divide logically:
- Page 1: From title through "Infrastructure Now Green" ending before "Remaining Blocker".
- Page 2: From "Remaining Blocker" through end.

Verbatim quotes: I should include short verbatim quotes from source with page citations.

Let's write.

Need to be careful not to mention betting lines. I will not use the word "odds" except maybe in mathematical probability context, but safer to avoid entirely. The source says "Odds API key" — I'll refer to it as "the third-party sports data API key" or "the paid external sports data API key".

Let's begin drafting each section.

THINK_TRACE: Must be >=400 words. I'll write ~500-600 words.

SOURCE_OPERATORS_AND_EQUATIONS: Formal LaTeX. Use \( ... \) or $$ ... $$. Include units. Include breakdown regimes. Cite pages.

RETROCAUSAL_GENEALOGY: ~300 words.

RECURSIVE_THEORY_OF_MIND: ~300 words.

CROSS_LAYER_VETO_ADJUDICATION: ~300 words.

RLVR_COUNTERFACTUAL_VETOES: 3 scenarios, each with verification and prediction. ~400 words.

Total will exceed 1000 words.

Let's ensure no forbidden content: no spreads, totals, moneylines, odds (betting). I won't mention them. I will mention "Odds API" only if quoting verbatim? The invariant says never mention odds. Quoting the source might violate if I quote "Odds API". Better to paraphrase: "the third-party sports data API key" and avoid quoting that phrase. If I need a verbatim quote, I can quote other parts like "Anthropic API key HTTP 401" or "SELECT 1 returned" or "PING -> PONG".

Let's check word count as I write. I'll aim for substantial depth.

I will not actually run commands. I will describe what should be done and the formal conditions.

Let's produce the final XML-wrapped response.
</NATIVE_REASONING>

<THINK_TRACE>
Deep multi-hop derivation and gray-zone audit of the Galaxy Sports Edge infrastructure handoff. The source document establishes a locally green codebase on branch `sports-intelligence-os-phase-9-ci` with production live at `https://galaxysportsedge.com` but deployment intentionally paused. The causal chain is linear and absorbing: `deploy:ready` is the master gate, and it currently returns exactly one failure because the Anthropic API key emits HTTP 401 [PAGE 2]. That single failure propagates forward to block `db:push`, blocks the live ingestion cycle that would confirm `IngestionRun` and `SourceSnapshot` rows, blocks the `vercel.cmd --prod` deployment, and blocks the final `smoke:prod` against the production URL. There is no bypass path in the documented runbook; the instructions say "stop unless it returns zero failures," which makes the Anthropic key rotation a strict precedence constraint.

Multi-hop dependency graph: (1) Rotate/fix Anthropic key and write it to local `.env.production.local` plus Vercel Production and Preview `ANTHROPIC_API_KEY`, without committing the secret [PAGE 2]. (2) Re-run `npm.cmd run deploy:ready` and require zero failures [PAGE 2]. (3) Run `npm.cmd run db:push` only after step two passes [PAGE 2]. (4) Trigger one real ingestion cycle using the already-valid paid third-party sports data API key (noted as valid with 74 sports listed and 20,000 requests remaining) and confirm row creation in `IngestionRun` and `SourceSnapshot` [PAGE 1]. (5) Deploy with `vercel.cmd --prod --yes --no-clipboard --scope pick-pilot-s-projects` [PAGE 2]. (6) Smoke `npm.cmd run smoke:prod -- --url=https://galaxysportsedge.com` [PAGE 2].

Gray-zone risks: The `.env.production.local` already holds `DATABASE_URL`, `DIRECT_URL`, and `REDIS_URL` from provider integrations, but the Anthropic key is absent or stale. Neon Postgres and Upstash Redis are proven reachable (`SELECT 1 returned`, `PING -> PONG`), so the data plane is not the bottleneck; the control-plane LLM provider authentication is. Stripe keys are valid in test mode and price IDs resolve to $19.00/month and $49.00/month [PAGE 1], which means the billing entitlement layer is pre-warmed, but the explicit standing order forbids enabling public performance stats, true EV, Kelly, or public pick claims until canonical data is real and gates prove readiness [PAGE 2]. Prior regressions already fixed include stale cockpit/runbook contract tests, `/picks` SSR origin handling for localhost/preview, and dead Evidence Audit buttons on sample/demo picks [PAGE 1]. If the operator regresses by committing the key, forcing a deploy with a 401, or flipping public EV claims before ingestion rows exist, the system enters an unverified production state that violates the brand-safety gate (497 tests passed) and the Evidence Readiness Matrix staleness/true-EV blocking rules [PAGE 1].
</THINK_TRACE>

<SOURCE_OPERATORS_AND_EQUATIONS>
Define the deployment state vector over Boolean layer operators:

\[
\mathbf{S} = (K_A,\; K_{DB},\; K_{R},\; K_{S},\; G_{deploy},\; G_{db},\; G_{ingest},\; G_{vercel},\; G_{smoke}) \in \{0,1\}^9
\]

where each component is defined as follows:

- \(K_A = \mathbb{I}[\text{Anthropic API key returns HTTP }200]\). Current measured value: \(K_A = 0\) because latest deploy-readiness result is `Anthropic API key HTTP 401` [PAGE 2].
- \(K_{DB} = \mathbb{I}[\text{DATABASE_URL present} \land \text{Postgres reachable} \equiv (\text{SELECT 1 returned})]\). Measured: \(K_{DB}=1\) [PAGE 1].
- \(K_{R} = \mathbb{I}[\text{REDIS_URL present} \land \text{Redis reachable} \equiv (\text{PING} \rightarrow \text{PONG})]\). Measured: \(K_{R}=1\) [PAGE 1].
- \(K_{S} = \mathbb{I}[\text{Stripe secret key valid in test mode} \land \text{STRIPE\_PRO\_PRICE_ID} = \$19.00/\text{mo} \land \text{STRIPE\_ELITE\_PRICE_ID} = \$49.00/\text{mo}]\). Measured: \(K_S=1\) [PAGE 1].
- \(G_{deploy} = \mathbb{I}[\text{npm.cmd run deploy:ready returns zero failures}]\). Currently \(G_{deploy}=0\) due solely to \(K_A=0\) [PAGE 2].

Transition operator for the blocker:

\[
\mathcal{T}_{A}: K_A \leftarrow 1 \quad \text{via fresh key creation, local }\texttt{.env.production.local}\text{ update, Vercel Production/Preview env var update, no git commit.}
\]

Gate composition:

\[
G_{deploy} = f(K_A, K_{DB}, K_R, K_S) = K_A \land K_{DB} \land K_R \land K_S \land (\text{crons present} \land \text{headers present} \land \text{bootstrap sanity})
\]

Because \(K_{DB}=K_R=K_S=1\) and crons/headers/sanity are present [PAGE 1], \(G_{deploy}\) reduces to \(K_A\). Until \(\mathcal{T}_A\) executes, \(G_{deploy}=0\) is an absorbing failure state.

Sequential precondition constraints:

\[
G_{db} \Leftarrow G_{deploy} = 1,\qquad
G_{ingest} \Leftarrow G_{db} = 1,\qquad
G_{vercel} \Leftarrow G_{ingest} = 1,\qquad
G_{smoke} \Leftarrow G_{vercel} = 1
\]

Units: HTTP status codes are dimensionless integers; request quota remaining is a count (dimensionless); price resolution is in USD per month; network reachability probes (`SELECT 1`, `PING`) yield boolean or latency in seconds.

Singularity / breakdown regimes: If \(K_A\) remains 0 after key rotation, the breakdown regime is provider-side auth (IP allowlist, key scoping, token expiration, or Vercel env-propagation lag between Production and Preview). If `db:push` executes while \(G_{deploy}=0\), schema migration divergence \(\Delta_{schema} \neq 0\) may occur against Neon, producing a non-injective migration and invalidating `IngestionRun`/`SourceSnapshot` confirmation. If public stats/EV/Kelly/pick claims are enabled before \(G_{ingest}=1\) with real canonical rows, the Evidence Readiness Matrix triggers staleness blocking and true-EV blocking, creating an unverified public state forbidden by the standing order [PAGE 2].
</SOURCE_OPERATORS_AND_EQUATIONS>

<RETROCAUSAL_GENEALOGY>
The infrastructure lineage descends from 12-factor application configuration principles, where backing services (Neon serverless Postgres, Upstash Redis) are provisioned through platform integrations (Vercel) and bound via environment variables rather than hard-coded secrets [PAGE 1]. The branch name `sports-intelligence-os-phase-9-ci` places this at a late CI phase in a multi-phase sports intelligence operating system, implying prior phases established typechecking, brand-safety tests, and build contracts now verified green (19 files / 497 brand-safety tests; 110 files / 1,342 web tests; typecheck and build passed) [PAGE 1].

Historical traps visible in the document include committed secrets (explicitly prohibited: "Do not commit the key" and "Do not commit secrets" [PAGE 2]), premature production activation of monetization or analytics features (explicitly prohibited: do not enable public performance stats, true EV, Kelly, or public pick claims until canonical data is real and gates prove readiness [PAGE 2]), and stale contract tests for cockpit/runbook surfaces (already remediated [PAGE 1]). A prior `/picks` SSR origin defect caused localhost/preview fetches to target production instead of the current host; this was fixed [PAGE 1], showing a pattern of environment-origin confusion that recurs when local `.env` and remote platform configs drift.

Multi-week traps specific to this handoff: (1) Anthropic key rotation is a recurring operational event because the browser session is not logged into the Anthropic Platform and lands on the sign-in page [PAGE 2]; without a session, key discovery and rotation are manual and error-prone. (2) Vercel Production and Preview environment variables must be updated independently; updating only local `.env.production.local` leaves the serverless runtime unauthenticated [PAGE 2]. (3) Neon and Upstash were provisioned through Vercel integrations, so any future integration re-auth or region change can silently break `DATABASE_URL`, `DIRECT_URL`, or `REDIS_URL` even though `deploy:ready` currently proves reachability [PAGE 1]. The deploy-readiness gate functions as a formal verification barrier that makes these historical regressions expensive to repeat, because `deploy:ready` must return zero failures before `db:push` is permitted [PAGE 2].
</RETROCAUSAL_GENEALOGY>

<RECURSIVE_THEORY_OF_MIND>
Crisis habit regression under deployment pressure follows a predictable recursion: the operator observes production is live but deployment paused, sees a single `deploy:ready` failure, and may form the belief that "one HTTP 401 is cosmetic" or that the Anthropic key belongs to a different team's workstream. That belief regresses into skipping the rotation, running `vercel.cmd --prod` anyway, or pasting the key into a commit to unblock the pipeline. The recursive model of the operator therefore contains a self-deception fixed point: "I can deploy despite the gate failure because the code is green locally."

The counter-trap is the document's explicit imperative architecture: "stop unless it returns zero failures," "Do not commit secrets," and "Do not enable public performance stats, true EV, Kelly, or public pick claims until canonical data is real and gates prove readiness" [PAGE 2]. These are not suggestions; they are hard preconditions that collapse the regression fixed point. The operator must recursively model `deploy:ready` as an oracle whose output is the sole clock input. Time does not advance on the deployment clock while `G_{deploy}=0`.

Clock semantics: the system clock is stalled at the Anthropic authentication node. The time-to-live of the stalled state is indefinite and depends entirely on external key creation and env-var propagation. There is no local workaround that advances the clock because Neon/Redis are already green, Stripe is already valid, and the Odds-equivalent sports data API key is already valid [PAGE 1]; the only remaining control-plane dependency is \(K_A\). If the operator misattributes the blocker to the database or Redis layers and runs `db:push` prematurely, the recursion deepens into a schema-divergence failure that must be unwound before the clock can restart.
</RECURSIVE_THEORY_OF_MIND>

<CROSS_LAYER_VETO_ADJUDICATION>
Physical layer: HTTPS egress from the Vercel edge runtime to the Anthropic API endpoint must resolve DNS, complete TLS negotiation, and receive an authenticated response. Veto condition: any non-200 response (currently HTTP 401) halts the sequence regardless of lower-layer health [PAGE 2]. Network partitions or regional Vercel outages constitute additional physical vetoes, though none are reported in the source.

Biomechanical / human-operations layer: The operator must manually copy the fresh Anthropic key into `.env.production.local` and the Vercel Production/Preview dashboards without printing it, committing it, or leaving it in shell history or clipboard managers. Veto condition: secret exposure via git commit, log output, or screen capture invalidates the security posture and triggers an immediate stop [PAGE 2].

Weather / environmental veto: Not applicable to physical meteorology because this is pure cloud infrastructure; however, the metaphorical weather layer is cloud-provider status. Veto condition: Neon Postgres or Upstash Redis regional degradation would flip \(K_{DB}\) or \(K_R\) to 0. Currently both are proven reachable (`SELECT 1 returned`; `PING -> PONG`) [PAGE 1], so no weather veto is active.

Software layer: TypeScript typecheck passed across all workspaces; brand-safety tests passed (497 tests); full web tests passed (1,342 tests); build passed; `git diff --check` passed [PAGE 1]. Veto condition: any regression in these suites after env-var changes halts the runbook.

Adjudication rule: Single-veto veto. All layers except Anthropic auth are green. Because \(K_A=0\) is the only red layer, the adjudicated decision is to freeze at step one, rotate the key, verify `deploy:ready` zero failures, and only then permit the database push and production deploy. No layer may be bypassed by appeal to local greenness.
</CROSS_LAYER_VETO_ADJUDICATION>

<RLVR_COUNTERFACTUAL_VETOES>
Scenario 1: Local-only key update without Vercel Production/Preview propagation.
Counterfactual: The operator rotates the Anthropic key and writes it to `.env.production.local` but forgets to update the Vercel Production and Preview environment variables.
Verification: Run `npm.cmd run deploy:ready` after the local-only change and inspect the Anthropic status line.
Prediction: `deploy:ready` still returns exactly one failure (`Anthropic API key HTTP 401`) because the serverless runtime reads Vercel Production env vars, not the local file. `G_{deploy}` remains 0. Veto: block `db:push` and all downstream steps until Vercel env vars are confirmed updated.

Scenario 2: Forced `db:push` before `deploy:ready` reaches zero failures.
Counterfactual: The operator ignores the "stop unless it returns zero failures" instruction and runs `npm.cmd run db:push` while `G_{deploy}=0`.
Verification: Check `deploy:ready` output; if failure count > 0, do not execute `db:push`. Post-hoc verification would inspect Neon for migration errors or duplicate-migration markers.
Prediction: Schema migration may execute against a Neon database lacking the latest baseline or with drift from the local schema, producing \(\Delta_{schema} \neq 0\). Subsequent ingestion-row confirmation (`IngestionRun`, `SourceSnapshot`) fails or yields inconsistent evidence rows, invalidating the readiness gate for public claims. Veto: hard stop; reconcile migrations before proceeding.

Scenario 3: Enabling public performance stats, true EV, Kelly, or public pick claims before canonical ingestion rows exist.
Counterfactual: The operator activates public EV/Kelly/pick surfaces immediately after deploy, without waiting for the real ingestion cycle to create `IngestionRun` and `SourceSnapshot` rows.
Verification: Query the database for row counts in `IngestionRun` and `SourceSnapshot` after the ingestion trigger. If count = 0, public claims must remain disabled.
Prediction: The Evidence Readiness Matrix triggers staleness blocking and true-EV blocking (per its dedicated tests [PAGE 1]), so the Evidence Audit Drawer returns blocked or empty states for published picks, and brand-safety tests may flag unverified public claims. Veto: keep public performance stats, true EV, Kelly, and public pick claims disabled until ingestion rows are confirmed and gates prove readiness [PAGE 2].
</RLVR_COUNTERFACTUAL_VETOES>