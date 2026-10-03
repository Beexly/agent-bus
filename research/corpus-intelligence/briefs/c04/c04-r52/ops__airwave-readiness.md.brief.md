# docs/ops/airwave-readiness.md
## What it is (1-2 sentences)
A 2026-09-29 read-only audit of the Airwave Listener (`workers/airwave-listener/`, SiriusXM Channel 87 radio-claim ingestion) on branch `hermes-surf-16-provenance-fix`, concluding the worker is an honest reporting script with zero capture capability, while the downstream claim contracts/gates/cockpit are genuinely built and tested — but there is no DB writer and no durable review queue anywhere in the repo.

## Key metrics/methods (formulas where given, else "not specified")
- Not specified for calibration; operational metrics: worker = 4 files, ~200 lines total; downstream lib = ~5,300 lines; 13 test files, ~2,015 lines.
- `captureGate()` in `lib/airwave/pipeline.ts` defaults to refusal; 6 intake lanes and 11 `forbiddenActions` in `intake-contract.ts`; 9 hard rules enforced by the claim contract (`claim-extraction-contract.ts`, 294 lines); source policy has 10 categories.
- UTC-hours approximation bug in `isWindowOpen()` (`intake-contract.ts:115-126`) vs DST-correct `centralTimeHour()` in `channel-87-schedule.ts:94-107`: approximation reports the CH87 window open during 00:00–04:00 CT, 5 hours when it is actually closed.
- The `dry-run.ts:68` → `buildAirwaveIntakePlan(env, now, [...shows])` third param `_scheduleBlocks` is never read (`intake-contract.ts:222`).

## Data sources named
- SiriusXM Channel 87 (CH87) show schedule — all 4 sample shows are `SAMPLE_PLACEHOLDER` (e.g. `[Sample Host D]`), operator-verified real schedule data not supplied.
- Claimed legal sources in the protocol doc: `docs/ai/airwave/SIRIUSXM_CHANNEL_87_LISTENER_PROTOCOL.md`, `docs/airwave-ledger.md` (ledger guidance lines 79-88, 152-158).

## Findings (numbers and facts, not vibes)
- Worker is a 187-line `src/dry-run.ts` printer: reads env flags + sample schedule, prints an intake plan, `console.log` only; its own header declares "Does not capture audio / Does not access SiriusXM endpoints / Does not write to any database / Does not generate any claims / Does not activate any listener."
- No producer AND no durable consumer: grep for `INSERT INTO` / `db.` / `prisma` / `drizzle` / SQL referencing airwave/claim tables across `apps/web`, `packages`, and migrations returned nothing; all four `/api/airwave/*` routes export GET only; the review queue API re-reads a local env-pointed batch file and strips the row level before returning; the cockpit queue metrics are hardcoded `value="0"` string literals (page.tsx:359-364).
- Both satellite-radio source policies are set `canCapture: false, canTranscribe: false` (`founder_local_listening` at source-policy.ts:405-406; `satellite_radio_context` at source-policy.ts:445-446, status `HELD`).
- README checklist (7 boxes) is entirely unchecked; 4 of 7 require counseled human signatures, including `AIRWAVE_SIRIUSXM_LEGAL_ACK=true` and a counseled paraphrase-only posture.
- Legal-load-bearing defensibility argument stated: capture must be OS loopback of audio the founder is already playing to himself; collapses if anyone reaches for a URL/token/stream endpoint/DRM stripper.
- Founder-blocking decisions are D1 (SiriusXM ToS / legal ack), D2 (paraphrase-only + retention posture), D3 (consent/right of publicity for a named-person public scorecard), D4 (review staffing/SLA), D5 (retention/deletion enforcement).
- Repo's own sequencing advice: build on freely-published YouTube/podcast feeds first; treat satellite radio as opt-in, not the foundation.
- Minimal-worker estimate: 5 pieces (loopback tap with implemented ephemeral deletion, local transcription + diarization, extraction pass emitting `ClaimCandidate[]` with `paraphrased_claim`/`operator_status="DRAFT"`/`public_safe: false`, a claim table + write route + DRAFT→REVIEW→APPROVED transitions, cockpit queue wired to a real store); build estimate 2–3 weeks of work once D1 is resolved.
- Third-party activation tools `parker-stephens/siriusxm-activator` and `brendeni1/SiriusXM-Renewer` are permanently excluded by name.
- The cockpit page is the most misleading artifact: renders a full operator control room where every claim-queue number is a hardcoded 0.
- The most useful founder action is not code: D1 — getting the ToS question to counsel.

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- Radio-claim ingestion pipeline for analyst claims, including potential coach/player-quote extraction from sports radio — OTHER (infrastructure audit; no QB/coaching/OL/scheme facts).
- Consent/right-of-publicity rule (D3) for any named-person public scorecard tied to coaches/analysts — TRUST-SIGNAL-adjacent governance: every public row must carry a paraphrased claim plus an objective sourced outcome (OTHER as stated, since no specific person or quote is named).
- Repo guidance to mine free podcast/YouTube feeds first (transcript-claim extraction substrate for future trust-signal/coaching-signal work) — OTHER (operational, no signals extracted).

## Engine-actionable? (yes/no + one-line what)
Yes — one-line: the honesty pattern here (honest scaffolding labeled as scaffolding; paraphrase-only, operator-reviewed claims with public-safe flags) is a template for any future radio/podcast trust-signal intake wiring, but no engine math is extracted from this file.
