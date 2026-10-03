# docs/ai/airwave/SIRIUSXM_CHANNEL_87_LISTENER_PROTOCOL.md

## What it is (1-2 sentences)
The intake protocol for SiriusXM Channel 87 (Fantasy Sports Radio) as Galaxy Sports Edge's primary satellite-radio intelligence source, built around founder-local-listening with a hard legal-acknowledgement gate — HELD until legal sign-off.

## Key metrics/methods (formulas where given, else "not specified")
not specified — no formulas. Capture window: 05:00–23:00 CT (America/Chicago), 18 hours/day, enforced by `isWithinChannel87Window(hourCt)` in `channel-87-schedule.ts`. 12-column spreadsheet contract for manual notes: aired_at_ct | show | segment | speaker | paraphrased_claim | sport | entity | claim_type | confidence | rights_status | source_pointer | operator_status. Future worker design: 10-minute rolling audio segments → Whisper-class transcription → ClaimCandidate rows, segments deleted immediately.

## Data sources named
SiriusXM Channel 87 (Fantasy Sports Radio); founder's personally-owned SiriusXM subscription (founder-local-listening source policy, `operator_status = DRAFT`); manually imported CSV/TSV transcripts via `AIRWAVE_TRANSCRIPT_FILE_PATH`; env vars `AIRWAVE_ENABLED`, `AIRWAVE_SIRIUSXM_LEGAL_ACK`, `AIRWAVE_TRANSCRIPT_IMPORT_ENABLED`, `AIRWAVE_TRANSCRIPT_FILE_PATH`; readiness endpoint `/api/airwave/intake-readiness`; workers/airwave-listener/ (dry-run scaffolding); permanently excluded: `parker-stephens/siriusxm-activator`, `brendeni1/SiriusXM-Renewer`.

## Findings (numbers and facts, not vibes)
- Intake window: 05:00–23:00 CT, 18 hours/day; matches the core Airwave airing window in `pipeline.ts`; programming outside the window is not targeted. [OTHER]
- Status HELD: CH87 intake, founder-local-listening and satellite-radio-context source policies are gated until `AIRWAVE_SIRIUSXM_LEGAL_ACK=true` (operator must review the SiriusXM Subscriber Agreement, confirm note-taking bounds, consult counsel, then set the env var). [TRUST-SIGNAL: rights-first gating]
- Forbidden list (permanent): protected endpoint scraping, credential automation, DRM bypass, direct stream ripping, raw audio archives (no audio retained at any point), public verbatim transcripts (paraphrase only), automated recording of any kind, third-party activation tools. [TRUST-SIGNAL: hard no-list]
- Safe first step today: manual note import (CSV/TSV, 12-column contract) with `rights_status` (owned/public/licensed) and `operator_status = draft`; no row reaches a public surface unless `operator_status = approved` AND `rights_status` is owned/public/licensed; review queue and source-policy gate are ready. [TRUST-SIGNAL]
- Content focus of CH87: NFL/NBA/MLB injury reads and availability updates, DFS value commentary, waiver-wire guidance, betting-line context and market narratives, fantasy rankings/tier commentary, coaching and scheme notes. [COACHING: scheme notes; SCHEME: coaching/scheme content category]
- Future local-listener worker (not yet implemented): 10-minute rolling segments → Whisper-class transcription (faster-whisper or whisper.cpp, MIT, on-device) → ClaimCandidate rows → review queue, never direct to public; candidate future adapters: Windows loopback audio capture, FFmpeg segment slicing. No commitment. [OTHER]

## Intelligence connections (tag each: QB-BEHAVIOR, COACHING, OL, TRUST-SIGNAL, SCHEME, OTHER)
- CH87's content focus explicitly includes injury/availability updates, DFS value, betting-line context, coaching and scheme notes — a named pipeline for scheme/coaching intelligence once the legal gate opens. [COACHING, SCHEME]
- rights_status + operator_status two-gate review flow: a template for admitting any gray-rights football intelligence (pundit claims, radio reads) without laundering them into the engine. [TRUST-SIGNAL]
- paraphrased_claim (never verbatim) + per-claim confidence: claim-shape discipline that maps directly onto the engine's signal-admission contracts. [OTHER]

## Engine-actionable? (yes/no + one-line what)
No — the protocol is HELD behind legal ack; nothing flows to the engine until the founder sets the env gate, so no action until then.
